// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('morse.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('morse.code');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["App started"], 0));
if(typeof morse.core.app_state !== 'undefined'){
} else {
morse.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$text,"Hello world!",cljs.core.cst$kw$rate,(250),cljs.core.cst$kw$idle,"#fff",cljs.core.cst$kw$on,"#f00"], null));
}
morse.core.hello_world = (function morse$core$hello_world(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state)))], null);
});
morse.core.atom_input = (function morse$core$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$cols,(80),cljs.core.cst$kw$rows,(10),cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)),cljs.core.cst$kw$on_DASH_change,(function (p1__38189_SHARP_){
var G__38192 = value;
var G__38193 = p1__38189_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38192,G__38193) : cljs.core.reset_BANG_.call(null,G__38192,G__38193));
})], null)], null);
});
morse.core.slider = (function morse$core$slider(param,value,min,max,step){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$value,value,cljs.core.cst$kw$min,min,cljs.core.cst$kw$max,max,cljs.core.cst$kw$step,step,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"200px"], null),cljs.core.cst$kw$on_DASH_change,(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(morse.core.app_state,cljs.core.assoc,param,e.target.value);
})], null)], null);
});
if(typeof morse.core.color !== 'undefined'){
} else {
morse.core.color = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$idle.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state))));
}
morse.core.decode = (function morse$core$decode(c){
var G__38195 = c;
switch (G__38195) {
case "-":
return ((3) * cljs.core.cst$kw$rate.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state))));

break;
case ".":
return cljs.core.cst$kw$rate.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(c)].join('')));

}
});
morse.core.blink = (function morse$core$blink(c){
var duration = morse.core.decode(c);
var G__38203_38209 = morse.core.color;
var G__38204_38210 = cljs.core.cst$kw$on.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38203_38209,G__38204_38210) : cljs.core.reset_BANG_.call(null,G__38203_38209,G__38204_38210));

var G__38205_38211 = ((function (duration){
return (function (){
var G__38207 = morse.core.color;
var G__38208 = cljs.core.cst$kw$idle.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38207,G__38208) : cljs.core.reset_BANG_.call(null,G__38207,G__38208));
});})(duration))
;
var G__38206_38212 = duration;
setTimeout(G__38205_38211,G__38206_38212);

return duration;
});
morse.core.play = (function morse$core$play(p__38213){
var vec__38221 = p__38213;
var seq__38222 = cljs.core.seq(vec__38221);
var first__38223 = cljs.core.first(seq__38222);
var seq__38222__$1 = cljs.core.next(seq__38222);
var c = first__38223;
var code = seq__38222__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",c)){
var G__38224 = ((function (vec__38221,seq__38222,first__38223,seq__38222__$1,c,code){
return (function (){
return morse$core$play(code);
});})(vec__38221,seq__38222,first__38223,seq__38222__$1,c,code))
;
var G__38225 = ((7) * cljs.core.cst$kw$rate.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state))));
return setTimeout(G__38224,G__38225);
} else {
if((c == null)){
return cljs.core.cst$kw$no_DASH_op;
} else {
var G__38226 = ((function (vec__38221,seq__38222,first__38223,seq__38222__$1,c,code){
return (function (){
return morse$core$play(code);
});})(vec__38221,seq__38222,first__38223,seq__38222__$1,c,code))
;
var G__38227 = (morse.core.blink(c) + ((3) * cljs.core.cst$kw$rate.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state)))));
return setTimeout(G__38226,G__38227);

}
}
});
morse.core.state = (function morse$core$state(){
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Your morse code is here");
return ((function (val){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,morse.core.app_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [morse.core.atom_input,val], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Value: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a_SHARP_code,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",morse.code.encode((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(val) : cljs.core.deref.call(null,val))))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (val){
return (function (){
return morse.core.play(clojure.string.join.cljs$core$IFn$_invoke$arity$1(morse.code.encode((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(val) : cljs.core.deref.call(null,val)))));
});})(val))
], null),"Play"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_play,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(200),cljs.core.cst$kw$height,(200),cljs.core.cst$kw$background_DASH_color,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.color) : cljs.core.deref.call(null,morse.core.color))], null)], null)], null)], null);
});
;})(val))
});
var G__38228_38230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [morse.core.state], null);
var G__38229_38231 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__38228_38230,G__38229_38231) : reagent.core.render_component.call(null,G__38228_38230,G__38229_38231));
morse.core.on_js_reload = (function morse$core$on_js_reload(){
return null;
});
