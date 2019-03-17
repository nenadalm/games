(ns build.hooks.clear-artefacts)

(defn- delete-file-recursively [f]
  (let [files (some-> f
                      clojure.java.io/file
                      (as-> file (if (.exists file) file nil))
                      file-seq
                      reverse)]
    (doseq [file files]
      (clojure.java.io/delete-file file))))

(defn -main [& args]
  (delete-file-recursively "resources/public/js"))
