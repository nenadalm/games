(ns app.game-engine
  (:require
   [re-frame.core :as re-frame]
   [app.game :as game]))

(defonce ^:private game-state (volatile! {}))

(defonce ^:private initial-state
  {:inputs []
   :running false
   :settings {}
   :prev-time nil})

(defn- replace-canvas [state canvas]
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

(defn- game-iter
  "Runs single iteration of the game loop (update, render). Returns state."
  [state current-time]
  (if-let [running-game (:game state)]
    (let [delta (- current-time (:prev-time state))
          inputs (if (:running state)
                   (conj (:inputs state) [:delta delta])
                   (:inputs state))
          game (game/process-inputs running-game inputs)
          updated-state (assoc state
                               :game game
                               :inputs []
                               :prev-time current-time)
          context (:context updated-state)]
      (when context
        (game/render game (:settings updated-state) context))
      updated-state)
    state))

(defn- start-game
  "Initializes game. Returns initial game state."
  [{:keys [settings game canvas]}]
  (-> {:inputs []
       :running true
       :settings settings
       :game (game/init game)}
      (replace-canvas canvas)
      unpause))

(defn- process-event! [state event]
  (case (first event)
    :input (if (:running state)
             (update state :inputs conj (second event))
             state)
    :loop (do
            (.requestAnimationFrame js/window #(vswap! game-state process-event! [:loop %]))
            (game-iter state (second event)))
    :start (do
             (.requestAnimationFrame js/window #(vswap! game-state process-event! [:loop %]))
             (start-game (second event)))
    :stop (do
            (when-let [context (:context state)]
              (let [{:keys [width height]} (get-in state [:settings :game-area/size])]
                (.clearRect context 0 0 width height)))
            initial-state)
    :pause (assoc state :running false)
    :resume (unpause state)
    :replace-canvas (replace-canvas state (second event))
    state))

(defn init []
  (vreset! game-state initial-state))

(re-frame/reg-fx
 :game-event
 (fn [event]
   (vswap! game-state process-event! event)))
