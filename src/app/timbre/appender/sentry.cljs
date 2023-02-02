(ns app.timbre.appender.sentry
  (:require
   ["@sentry/browser" :as sentry]))

(set! *warn-on-infer* true)

(def ^:private timbre->sentry-levels
  {:trace  "debug"
   :debug  "debug"
   :report "info"
   :info   "info"
   :warn   "warning"
   :error  "error"
   :fatal  "fatal"})

(defn sentry-appender [dsn]
  (.init ^js/Sentry sentry #js {:dsn dsn})
  {:enabled? true
   :min-level :warn
   :rate-limit nil
   :fn (fn [data]
         (let [{:keys [level msg_ context ?err]} data
               event (merge {:message (force msg_)
                             :level (get timbre->sentry-levels level)}
                            (when context {:extra context}))]
           (if ?err
             (.captureException ^js/Sentry sentry ?err)
             (.captureMessage ^js/Sentry sentry (:message event) (:level event)))))})
