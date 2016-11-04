// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('morse.code');
goog.require('cljs.core');
goog.require('clojure.string');
morse.code.morse_codes = cljs.core.PersistentHashMap.fromArrays([" ","@","!","A","\"","B","C","$","D","\u00C4","E","\u00C5","&","F","'","G","(","H",")","I","J","+","K",",","L","-","M",".","N","/","O","0","P","1","Q","2","R","3","S","4","T","5","U","6","V","\u00D6","7","W","8","X","9","Y",":","Z",";","=","?","_"],[" ",".--.-.","-.-.--",".-",".-..-.","-...","-.-.","...-..-","-..",".-.-",".",".--.-",".-...","..-.",".----.","--.","-.--.","....","-.--.-","..",".---",".-.-.","-.-","--..--",".-..","-....-","--",".-.-.-","-.","-..-.","---","-----",".--.",".----","--.-","..---",".-.","...--","...","....-","-",".....","..-","-....","...-","---.","--...",".--","---..","-..-","----.","-.--","---...","--..","-.-.-.","-...-","..--..","..--.-"]);
morse.code.encode = (function morse$code$encode(s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(morse.code.morse_codes,clojure.string.upper_case(s));
});
