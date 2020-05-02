(ns app.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :game-state
 (fn [db _]
   (:game/state db :stopped)))

(re-frame/reg-sub
 :page-name
 (fn [db _]
   (get-in db [:page :name])))
