(ns app.events
  (:require
   [re-frame.core :as re-frame]
   [app.games.typing-race.core :as tr]))

(def games
  "All available games by their name."
  {:typing-race (tr/->TypingRace.)})

(def canvas
  "Canvas to render current game on."
  (volatile! nil))

(re-frame/reg-cofx
 :canvas
 (fn [coeffects _]
   (assoc coeffects :canvas @canvas)))

(re-frame/reg-fx
 :canvas
 (fn [new-canvas]
   (vreset! canvas new-canvas)))

(re-frame/reg-event-fx
 :replace-canvas
 (fn [_ [_ new-canvas]]
   {:canvas new-canvas
    :game-event [:replace-canvas new-canvas]}))

(re-frame/reg-event-fx
 :game/start
 [(re-frame/inject-cofx :canvas)]
 (fn [{:keys [db canvas]} [_ game]]
   {:db (assoc db :game/state :running)
    :game-event [:start {:game (games game)
                         :canvas canvas}]}))

(re-frame/reg-event-fx
 :game/pause
 (fn [{:keys [db]} _]
   {:db (assoc db :game/state :paused)
    :game-event [:pause]}))

(re-frame/reg-event-fx
 :game/resume
 (fn [{:keys [db]} [_ game]]
   (if (= :stopped (:game/state db :stopped))
     {:dispatch [:game/start game]}
     {:db (assoc db :game/state :running)
      :game-event [:resume]})))

(re-frame/reg-event-fx
 :game.input/key-down
 (fn [_ [_ key]]
   {:game-event [:input [:key-down key]]}))
