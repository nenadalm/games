(ns app.math
  (:refer-clojure :exclude [+ - *]))

(def pi 3.14)

(defprotocol Add
  (-+ [this x]))

(defn +
  ([x y]
   (-+ x y))
  ([x y & more]
   (reduce -+ (-+ x y) more)))

(defprotocol Sub
  (-- [this x]))

(defn -
  ([x y]
   (-- x y))
  ([x y & more]
   (reduce -- (-- x y) more)))

(defprotocol Mul
  (-* [this x]))

(defprotocol Reflection
  (-reflection [this l]))

(defn reflection [v l]
  (-reflection v l))

(defn *
  ([x y]
   (-* x y))
  ([x y & more]
   (reduce -* (-* x y) more)))

(defprotocol IntoVector2
  (-into-vector2 [this]))

(defn into-vector2 [x]
  (-into-vector2 x))

(defprotocol IntoPoint2
  (-into-point2 [this]))

(defn into-point2 [x]
  (-into-point2 x))

(defrecord Point2 [x y]
  Add
  (-+ [this x]
    (let [p (-into-point2 x)]
      (-> this
          (update :x clojure.core/+ (:x p))
          (update :y clojure.core/+ (:y p)))))
  Sub
  (-- [this x]
    (let [p (-into-point2 x)]
      (-> this
          (update :x clojure.core/- (:x p))
          (update :y clojure.core/- (:y p)))))
  Mul
  (-* [this x]
    (let [p (-into-point2 x)]
      (-> this
          (update :x clojure.core/* (:x p))
          (update :y clojure.core/* (:y p))))))

(defrecord Point2P [r phi]
  IntoPoint2
  (-into-point2 [this]
    (Point2. (clojure.core/* r (Math/cos phi))
             (clojure.core/* r (Math/sin phi)))))

(defrecord Vector2 [x y]
  Add
  (-+ [this x]
    (if (satisfies? IntoVector2 x)
      (let [v (-into-vector2 x)]
        (-> this
            (update :x clojure.core/+ (:x v))
            (update :y clojure.core/+ (:y v))))
      (-> this
            (update :x clojure.core/+ x)
            (update :y clojure.core/+ x))))
  Sub
  (-- [this x]
    (if (satisfies? IntoVector2 x)
      (let [v (-into-vector2 x)]
        (-> this
            (update :x clojure.core/- (:x v))
            (update :y clojure.core/- (:y v))))
      (-> this
            (update :x clojure.core/- x)
            (update :y clojure.core/- x))))
  Mul
  (-* [this x]
    (if (satisfies? IntoVector2 x)
      (let [v (-into-vector2 x)]
          (-> this
              (update :x clojure.core/* (:x v))
              (update :y clojure.core/* (:y v))))
      (-> this
              (update :x clojure.core/* x)
              (update :y clojure.core/* x))))
  Reflection
  (-reflection [this l]
    (let [vl (-into-vector2 l)]
      (- (* (Vector2. 2 2) vl vl this) this))))

(defrecord LineSegment [p1 p2])

(extend-type Point2
  IntoPoint2
  (-into-point2 [this]
    this)
  IntoVector2
  (-into-vector2 [this]
    (Vector2. (:x this) (:y this))))

(extend-type Point2P
  IntoVector2
  (-into-vector2 [this]
    (-into-vector2 (-into-point2 this))))

(extend-type Vector2
  IntoPoint2
  (-into-point2 [this]
    (Point2. (:x this) (:y this)))
  IntoVector2
  (-into-vector2 [this]
    this))

(extend-type PersistentVector
  IntoPoint2
  (-into-point2 [this]
    (Point2. (this 0) (this 1)))
  IntoVector2
  (-into-vector2 [this]
    (Vector2. (this 0) (this 1))))

(comment

  (into-vector2 1)
  (satisfies? IntoVector2 (Vector2. 1 2))
  
  (* (Vector2. 2 2)
     (Vector2. 1 2))
  (* (Vector2. 2 2) 2)

  )
