(ns morse.code
  (:require [clojure.string :as str]))

(def morse-codes
  {\A ".-"   \J ".---" \S "..."   \1 ".----" \. ".-.-.-" \: "---..."
   \B "-..." \K "-.-"  \T "-"     \2 "..---" \, "--..--" \; "-.-.-."
   \C "-.-." \L ".-.." \U "..-"   \3 "...--" \? "..--.." \= "-...-"
   \D "-.."  \M "--"   \V "...-"  \4 "....-" \' ".----." \+ ".-.-."
   \E "."    \N "-."   \W ".--"   \5 "....." \! "-.-.--" \- "-....-"
   \F "..-." \O "---"  \X "-..-"  \6 "-...." \/ "-..-."  \_ "..--.-"
   \G "--."  \P ".--." \Y "-.--"  \7 "--..." \( "-.--."  \" ".-..-."
   \H "...." \Q "--.-" \Z "--.."  \8 "---.." \) "-.--.-" \$ "...-..-"
   \I ".."   \R ".-."  \0 "-----" \9 "----." \& ".-..."  \@ ".--.-."
   \space " " \Å ".--.-" \Ä ".-.-" \Ö "---."})

(defn encode [s]
  (->> s
       (str/upper-case)
       (map morse-codes)))
