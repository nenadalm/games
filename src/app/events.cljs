(ns app.events
  (:require
   [re-frame.core :as re-frame]))

(def ^:private canvas
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
 :init
 (fn [{:keys [db]}]
   {:db (assoc db :page {:name :typing-race})}))

(re-frame/reg-event-fx
 :game/start
 [(re-frame/inject-cofx :canvas)]
 (fn [{:keys [db canvas]} [_ game-name game]]
   {:db (assoc db
               :game/state :running
               :game/name game-name)
    :game-event [:start {:game game
                         :canvas canvas}]}))

(re-frame/reg-event-fx
 :game/pause
 (fn [{:keys [db]} _]
   {:db (assoc db :game/state :paused)
    :game-event [:pause]}))

(re-frame/reg-event-fx
 :game/resume
 (fn [{:keys [db]} [_ game-name game]]
   (if (or (not= game-name (:game/name db))
           (= :stopped (:game/state db :stopped)))
     {:dispatch [:game/start game-name game]}
     {:db (assoc db :game/state :running)
      :game-event [:resume]})))

(re-frame/reg-event-fx
 :game.input/key-down
 (fn [_ [_ key]]
   {:game-event [:input [:key-down key]]}))

(re-frame/reg-event-fx
 :game.input/key-up
 (fn [_ [_ key]]
   {:game-event [:input [:key-up key]]}))

(re-frame/reg-event-fx
 :open-page
 (fn [{:keys [db]} [_ page]]
   {:db (assoc db
               :page {:name page}
               :game/state :stopped)
    :game-event [:stop]}))
