(ns app.core
  (:require
   [reagent.dom :as reagent-dom]
   [re-frame.core :as re-frame]
   [taoensso.timbre :as timbre :refer-macros [error]]
   [app.timbre.appender.sentry :refer [sentry-appender]]
   [app.config :as config]
   [app.views :as views]
   [app.game-engine :as game-engine]))

(set! *warn-on-infer* true)

(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent-dom/render [views/app]
                      (.getElementById js/document "app")))

(defn ^:export init []
  (when (seq config/sentry-dsn)
    (timbre/merge-config!
     {:appenders {:sentry (sentry-appender config/sentry-dsn)}})
    (.addEventListener js/window "error" (fn [^js/ErrorEvent e] (error (.-error e)))))
  (dev-setup)
  (game-engine/init)
  (re-frame/dispatch-sync [:init])
  (mount-root))

(defn ^:dev/after-load after-load []
  (mount-root))
