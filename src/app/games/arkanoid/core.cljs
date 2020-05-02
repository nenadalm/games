(ns app.games.arkanoid.core
  (:require
   [app.game :refer [Game]]
   [app.math :as m]))

(defn- intersection-point [l1 l2]
  (let [p1 (:p1 l1)
        x1 (:x p1)
        y1 (:y p1)
        p2 (:p2 l1)
        x2 (:x p2)
        y2 (:y p2)
        p3 (:p1 l2)
        x3 (:x p3)
        y3 (:y p3)
        p4 (:p2 l2)
        x4 (:x p4)
        y4 (:y p4)
        x (/ (- (* (- (* x1 y2) (* y1 x2)) (- x3 x4))
                (* (- x1 x2) (- (* x3 x4) (* y3 x4))))
             (- (* (- x1 x2) (- y3 y4)) (* (- y1 y2) (- x3 x4))))
        y (/ (- (* (- (* x1 y2) (* y1 x2)) (- y3 y4))
                (* (- y1 y2) (- (* x3 y4) (* y3 x4))))
             (- (* (- x1 x2) (- y3 y4)) (* (- y1 y2) (- x3 x4))))]
    (m/Point2. x y)))


(defn update-ball [data delta]
  (let [ball-dir (:ball-dir data)
        ball-pos (:ball-pos data)
        coef (* (:ball-speed data) delta)
        movement (m/* ball-dir coef)
        requested-pos (m/+ ball-pos movement)
        game-area (:game-area data)
        max-x (- (:w game-area)
                 (:ball-size data))
        max-y (- (:h game-area)
                 (:ball-size data))
        update-pos (fn [wall-dir wall-line-segment]
                     (let [new-dir (m/reflection ball-dir wall-dir)
                           ip (intersection-point
                                 (m/LineSegment. ball-pos requested-pos)
                                 wall-line-segment)
                           new-movement (m/reflection (m/into-vector2 (m/- requested-pos ip)) wall-dir)
                           new-requested-pos (m/+ ball-pos new-movement)]
                       ;; todo: new-pos still not ok?
                       (assoc data
                              :ball-dir new-dir
                              :ball-pos new-requested-pos)))]
    (cond
      (< max-x (:x requested-pos))
      (update-pos
       (m/Vector2. 0 -1)
       (m/LineSegment. (m/Point2. max-x 0) (m/Point2. max-x max-y)))

      (< (:y requested-pos) 0)
      (update-pos
       (m/Vector2. 1 0)
       (m/LineSegment. (m/Point2. 0 0) (m/Point2. max-x 0)))

      (< (:x requested-pos) 0)
      (update-pos
       (m/Vector2. 0 -1)
       (m/LineSegment. (m/Point2. 0 0) (m/Point2. 0 max-y)))

      (< max-y (:y requested-pos))
      (update-pos
       (m/Vector2. 1 0)
       (m/LineSegment. (m/Point2. 0 max-y) (m/Point2. max-x max-y)))
      :else (assoc data :ball-pos requested-pos))))

(defn- process-input [data input]
  (case (first input)
    :delta (-> data
               ;; todo: use dir vector?
               (update :paddle-pos (fn [pos]
                                     (update pos :x (fn [x]
                                                      (let [dx (* (:paddle-dir data) (:paddle-speed data) (second input))
                                                            new-x (+ x dx)
                                                            max-x (- (get-in data [:game-area :w])
                                                                     (get-in data [:paddle-size 0]))]
                                                        (min max-x (max 0 new-x)))))))
               (update-ball (second input)))
    :key-down (case (second input)
                "ArrowLeft" (update data :paddle-dir dec)
                "ArrowRight" (update data :paddle-dir inc)
                data)
    :key-up (case (second input)
              "ArrowLeft" (update data :paddle-dir inc)
              "ArrowRight" (update data :paddle-dir dec)
              data)
    data))

(defrecord Arkanoid []
  Game
  (-init [this]
    (let [game-area (m/Rect. 0 0 400 400)  ;; todo: receive in arguments, make sure it doesn't change
          tiles 10
          area-horizontal-center (Math/floor (/ (:w game-area) 2))
          tile-size (Math/floor (/ (:h game-area) tiles))
          paddle-width (* 2 tile-size)
          paddle-height (/ tile-size 4)
          ball-size paddle-height]

      (assoc this
             :tiles tiles
             :ball-pos (m/Point2. (Math/floor (- area-horizontal-center (/ ball-size 2)))
                                  (- (:h game-area) paddle-height ball-size))
             :paddle-pos (m/Point2. (Math/floor (- area-horizontal-center (/ paddle-width 2)))
                                    (- (:h game-area) paddle-height))
             :ball-speed 0.22
             :paddle-speed 0.22
             :paddle-dir 0
             :paddle-size [paddle-width paddle-height]
             :ball-size paddle-height
             :ball-dir (m/into-vector2 (m/Point2P. 1 (/ m/pi -4)))
             :game-area game-area)))
  (-process-inputs [this inputs]
    (reduce process-input this inputs))
  (-render [this _ context]
    (let [game-area (:game-area this)
          ball-size (:ball-size this)
          ball-pos (:ball-pos this)
          paddle-pos (:paddle-pos this)
          paddle-size (:paddle-size this)]
      (.clearRect context (:x game-area) (:y game-area) (:w game-area) (:h game-area))
      (.fillRect context
                 (:x paddle-pos)
                 (:y paddle-pos)
                 (paddle-size 0)
                 (paddle-size 1))
      (.fillRect context
                 (:x ball-pos)
                 (:y ball-pos)
                 ball-size
                 ball-size))))
