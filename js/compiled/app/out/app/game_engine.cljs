(ns app.game-engine
  (:require
   [cljs.core.async :as a]
   [re-frame.core :as re-frame]
   [app.game :as game]))

(def ^:private game-channel (a/chan))

(defn replace-canvas [state canvas]
  (if canvas
    (let [context (.getContext canvas "2d")]
      (-> state
          (assoc :context context)
          (update-in [:settings :game-area/size] #(assoc %
                                                         :width (.-width canvas)
                                                         :height (.-height canvas)))))
    (assoc state :context nil)))

(defn- unpause [state]
  (assoc state
         :running true
         :prev-time (.now js/window.performance)))

(defn- game-iter!
  "Runs single iteration of the game loop (update, render). Returns state."
  [state]
  (let [current-time (.now js/window.performance)
        delta (- current-time (:prev-time state))
        inputs (if (:running state)
                 (conj (:inputs state) [:delta delta])
                 (:inputs state))
        game (game/process-inputs (:game state) inputs)
        updated-state (assoc state
                             :game game
                             :inputs []
                             :prev-time current-time)
        context (:context updated-state)]
    (when context
      (game/render game (:settings updated-state) context))
    (.requestAnimationFrame js/window #(a/put! game-channel [:loop]))
    updated-state))

(defn- start-game!
  "Initializes game. Returns initial game state."
  [{:keys [settings game canvas]}]
  (let [initial-state (-> {:inputs []
                           :running true
                           :settings settings
                           :game (game/init game)}
                          (replace-canvas canvas)
                          unpause)]
    (a/put! game-channel [:loop])
    initial-state))

(defn init []
  (a/go-loop [state {:inputs []
                     :running false
                     :settings {}
                     :prev-time nil}]
    (let [event (a/<! game-channel)]
      (case (first event)
        :input (recur (if (:running state)
                        (update state :inputs conj (second event))
                        state))
        :loop (recur (game-iter! state))
        :start (recur (start-game! (second event)))
        :stop (recur (assoc state :running false))
        :pause (recur (assoc state :running false))
        :resume (recur (unpause state))
        :replace-canvas (recur (replace-canvas state (second event)))
        (recur state)))))

(re-frame/reg-fx
 :game-event
 (fn [event]
   (a/put! game-channel event)))
