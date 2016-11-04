// Compiled by ClojureScript 1.9.229 {}
goog.provide('morse.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('morse.code');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"App started");
if(typeof morse.core.app_state !== 'undefined'){
} else {
morse.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!",new cljs.core.Keyword(null,"speed","speed",1257663751),(1000)], null));
}
morse.core.hello_world = (function morse$core$hello_world(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,morse.core.app_state))], null);
});
morse.core.atom_input = (function morse$core$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"cols","cols",-1914801295),(80),new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26610_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__26610_SHARP_.target.value);
})], null)], null);
});
morse.core.idle = "#fff";
morse.core.on = "#f00";
if(typeof morse.core.color !== 'undefined'){
} else {
morse.core.color = reagent.core.atom.call(null,morse.core.on);
}
morse.core.blink = (function morse$core$blink(node){
return null;
});
morse.core.play = (function morse$core$play(code){
return null;
});
morse.core.state = (function morse$core$state(){
var val = reagent.core.atom.call(null,"Your morse code is here");
return ((function (val){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [morse.core.atom_input,val], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Value: ",clojure.string.join.call(null," ",morse.code.encode.call(null,cljs.core.deref.call(null,val)))], null)], null);
});
;})(val))
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [morse.core.state], null),document.getElementById("app"));
morse.core.on_js_reload = (function morse$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1478292538683