(ns app.components.layout)

(defn layout [content]
  [:<>
   [:div.container
    content
    [:footer
     [:div.content.has-text-centered
      [:a {:href "https://github.com/nenadalm/games"}
       "GitHub repository"]]]]])
