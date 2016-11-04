// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26071__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26072__i = 0, G__26072__a = new Array(arguments.length -  0);
while (G__26072__i < G__26072__a.length) {G__26072__a[G__26072__i] = arguments[G__26072__i + 0]; ++G__26072__i;}
  args = new cljs.core.IndexedSeq(G__26072__a,0);
} 
return G__26071__delegate.call(this,args);};
G__26071.cljs$lang$maxFixedArity = 0;
G__26071.cljs$lang$applyTo = (function (arglist__26073){
var args = cljs.core.seq(arglist__26073);
return G__26071__delegate(args);
});
G__26071.cljs$core$IFn$_invoke$arity$variadic = G__26071__delegate;
return G__26071;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26074__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26075__i = 0, G__26075__a = new Array(arguments.length -  0);
while (G__26075__i < G__26075__a.length) {G__26075__a[G__26075__i] = arguments[G__26075__i + 0]; ++G__26075__i;}
  args = new cljs.core.IndexedSeq(G__26075__a,0);
} 
return G__26074__delegate.call(this,args);};
G__26074.cljs$lang$maxFixedArity = 0;
G__26074.cljs$lang$applyTo = (function (arglist__26076){
var args = cljs.core.seq(arglist__26076);
return G__26074__delegate(args);
});
G__26074.cljs$core$IFn$_invoke$arity$variadic = G__26074__delegate;
return G__26074;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1478292537010