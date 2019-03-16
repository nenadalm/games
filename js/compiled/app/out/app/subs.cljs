(ns app.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :game-state
 (fn [db _]
   (:game/state db :stopped)))

