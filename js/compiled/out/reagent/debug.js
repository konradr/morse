// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__36398__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36399__i = 0, G__36399__a = new Array(arguments.length -  0);
while (G__36399__i < G__36399__a.length) {G__36399__a[G__36399__i] = arguments[G__36399__i + 0]; ++G__36399__i;}
  args = new cljs.core.IndexedSeq(G__36399__a,0);
} 
return G__36398__delegate.call(this,args);};
G__36398.cljs$lang$maxFixedArity = 0;
G__36398.cljs$lang$applyTo = (function (arglist__36400){
var args = cljs.core.seq(arglist__36400);
return G__36398__delegate(args);
});
G__36398.cljs$core$IFn$_invoke$arity$variadic = G__36398__delegate;
return G__36398;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__36401__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36402__i = 0, G__36402__a = new Array(arguments.length -  0);
while (G__36402__i < G__36402__a.length) {G__36402__a[G__36402__i] = arguments[G__36402__i + 0]; ++G__36402__i;}
  args = new cljs.core.IndexedSeq(G__36402__a,0);
} 
return G__36401__delegate.call(this,args);};
G__36401.cljs$lang$maxFixedArity = 0;
G__36401.cljs$lang$applyTo = (function (arglist__36403){
var args = cljs.core.seq(arglist__36403);
return G__36401__delegate(args);
});
G__36401.cljs$core$IFn$_invoke$arity$variadic = G__36401__delegate;
return G__36401;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
