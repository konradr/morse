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
morse.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$text,"Hello world!",cljs.core.cst$kw$rate,(250),cljs.core.cst$kw$long,(3),cljs.core.cst$kw$letter_DASH_pause,(5),cljs.core.cst$kw$pause,(7),cljs.core.cst$kw$idle,"#fff",cljs.core.cst$kw$on,"#f00"], null));
}
morse.core.atom_input = (function morse$core$atom_input(value,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$rows,(10),cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)),name),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hide,name], null)))?"none":"block"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$border,"solid 1px black"], null),cljs.core.cst$kw$on_DASH_change,(function (p1__28043_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(value,cljs.core.assoc,name,p1__28043_SHARP_.target.value);
})], null)], null);
});
morse.core.slider = (function morse$core$slider(param,value,min,max,step){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$value,value,cljs.core.cst$kw$min,min,cljs.core.cst$kw$max,max,cljs.core.cst$kw$step,step,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"200px"], null),cljs.core.cst$kw$on_DASH_change,(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(morse.core.app_state,cljs.core.assoc,param,e.target.value);
})], null)], null);
});
morse.core.input = (function morse$core$input(param,min,max,step){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$min,min,cljs.core.cst$kw$max,max,cljs.core.cst$kw$step,step,cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state)),param),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"solid 1px black"], null),cljs.core.cst$kw$on_DASH_change,(function (p1__28044_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(morse.core.app_state,cljs.core.assoc,param,p1__28044_SHARP_.target.value);
})], null)], null);
});
if(typeof morse.core.color !== 'undefined'){
} else {
morse.core.color = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$idle.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state))));
}
morse.core.decode = (function morse$core$decode(c){
var G__28046 = c;
switch (G__28046) {
case "-":
return (cljs.core.cst$kw$long.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state))) * cljs.core.cst$kw$rate.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state))));

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
var G__28054_28060 = morse.core.color;
var G__28055_28061 = cljs.core.cst$kw$on.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28054_28060,G__28055_28061) : cljs.core.reset_BANG_.call(null,G__28054_28060,G__28055_28061));

var G__28056_28062 = ((function (duration){
return (function (){
var G__28058 = morse.core.color;
var G__28059 = cljs.core.cst$kw$idle.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28058,G__28059) : cljs.core.reset_BANG_.call(null,G__28058,G__28059));
});})(duration))
;
var G__28057_28063 = duration;
setTimeout(G__28056_28062,G__28057_28063);

return duration;
});
morse.core.play = (function morse$core$play(p__28064){
var vec__28072 = p__28064;
var seq__28073 = cljs.core.seq(vec__28072);
var first__28074 = cljs.core.first(seq__28073);
var seq__28073__$1 = cljs.core.next(seq__28073);
var c = first__28074;
var code = seq__28073__$1;
if(cljs.core.truth_(cljs.core.cst$kw$play_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",c)){
var G__28075 = ((function (vec__28072,seq__28073,first__28074,seq__28073__$1,c,code){
return (function (){
return morse$core$play(code);
});})(vec__28072,seq__28073,first__28074,seq__28073__$1,c,code))
;
var G__28076 = (cljs.core.cst$kw$pause.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state))) * cljs.core.cst$kw$rate.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state))));
return setTimeout(G__28075,G__28076);
} else {
if((c == null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(morse.core.app_state,cljs.core.assoc,cljs.core.cst$kw$play_QMARK_,false);
} else {
var G__28077 = ((function (vec__28072,seq__28073,first__28074,seq__28073__$1,c,code){
return (function (){
return morse$core$play(code);
});})(vec__28072,seq__28073,first__28074,seq__28073__$1,c,code))
;
var G__28078 = ((morse.core.blink(c) | (0)) + (cljs.core.cst$kw$letter_DASH_pause.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state))) * cljs.core.cst$kw$rate.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state)))));
return setTimeout(G__28077,G__28078);

}
}
} else {
return null;
}
});
morse.core.to_test = (function morse$core$to_test(text){
var $ = text;
var $__$1 = clojure.string.upper_case($);
var $__$2 = clojure.string.split.cljs$core$IFn$_invoke$arity$2($__$1,/\s/);
var $__$3 = cljs.core.shuffle($__$2);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",$__$3);
});
morse.core.play_test = (function morse$core$play_test(text){
var test_text = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(text,cljs.core.assoc,cljs.core.cst$kw$test,morse.core.to_test(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(text) : cljs.core.deref.call(null,text))))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(morse.core.app_state,cljs.core.assoc,cljs.core.cst$kw$play_QMARK_,true);

return morse.core.play(clojure.string.join.cljs$core$IFn$_invoke$arity$1(morse.code.encode(test_text)));
});
morse.core.state = (function morse$core$state(){
var text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input,"Your morse code is here"], null));
return ((function (text){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (text){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(morse.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hide,cljs.core.cst$kw$input], null),cljs.core.not);
});})(text))
], null),"Input text"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hide,cljs.core.cst$kw$input], null)))?"none":"block")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Rate: ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [morse.core.input,cljs.core.cst$kw$rate,(50),(5000),(50)], null),"ms"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Long: ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [morse.core.input,cljs.core.cst$kw$long,0.1,(10),0.1], null),"x"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Letter pause: ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [morse.core.input,cljs.core.cst$kw$letter_DASH_pause,0.1,(10),0.1], null),"x"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Pause: ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [morse.core.input,cljs.core.cst$kw$pause,0.1,(30),0.1], null),"x"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [morse.core.atom_input,text,cljs.core.cst$kw$input], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hide,cljs.core.cst$kw$input], null)))?"none":"block")], null)], null),"Value: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span_SHARP_code,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",morse.code.encode(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(text) : cljs.core.deref.call(null,text)))))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (text){
return (function (){
if(cljs.core.truth_(cljs.core.cst$kw$play_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(morse.core.app_state,cljs.core.assoc,cljs.core.cst$kw$play_QMARK_,false);
} else {
return morse.core.play_test(text);
}
});})(text))
], null),(cljs.core.truth_(cljs.core.cst$kw$play_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state))))?"Stop":"Play")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_play,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(200),cljs.core.cst$kw$height,(200),cljs.core.cst$kw$background_DASH_color,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.color) : cljs.core.deref.call(null,morse.core.color))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Test"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [morse.core.atom_input,text,cljs.core.cst$kw$result], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (text){
return (function (){
var G__28080 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(text) : cljs.core.deref.call(null,text))),clojure.string.upper_case(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(text) : cljs.core.deref.call(null,text))))))?"Passed":"Failed");
return alert(G__28080);
});})(text))
], null),"Done"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (text){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(morse.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hide,cljs.core.cst$kw$answer], null),cljs.core.not);
});})(text))
], null),"Answer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(morse.core.app_state) : cljs.core.deref.call(null,morse.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hide,cljs.core.cst$kw$answer], null)))?"none":"block")], null)], null),cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(text) : cljs.core.deref.call(null,text)))], null)], null);
});
;})(text))
});
var G__28081_28083 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [morse.core.state], null);
var G__28082_28084 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__28081_28083,G__28082_28084) : reagent.core.render_component.call(null,G__28081_28083,G__28082_28084));
morse.core.on_js_reload = (function morse$core$on_js_reload(){
return null;
});
