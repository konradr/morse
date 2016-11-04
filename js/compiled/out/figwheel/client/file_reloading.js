// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24790__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24790__auto__){
return or__24790__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24790__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30511_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30511_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30516 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30517 = null;
var count__30518 = (0);
var i__30519 = (0);
while(true){
if((i__30519 < count__30518)){
var n = cljs.core._nth.call(null,chunk__30517,i__30519);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30520 = seq__30516;
var G__30521 = chunk__30517;
var G__30522 = count__30518;
var G__30523 = (i__30519 + (1));
seq__30516 = G__30520;
chunk__30517 = G__30521;
count__30518 = G__30522;
i__30519 = G__30523;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30516);
if(temp__4657__auto__){
var seq__30516__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30516__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__30516__$1);
var G__30524 = cljs.core.chunk_rest.call(null,seq__30516__$1);
var G__30525 = c__25601__auto__;
var G__30526 = cljs.core.count.call(null,c__25601__auto__);
var G__30527 = (0);
seq__30516 = G__30524;
chunk__30517 = G__30525;
count__30518 = G__30526;
i__30519 = G__30527;
continue;
} else {
var n = cljs.core.first.call(null,seq__30516__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30528 = cljs.core.next.call(null,seq__30516__$1);
var G__30529 = null;
var G__30530 = (0);
var G__30531 = (0);
seq__30516 = G__30528;
chunk__30517 = G__30529;
count__30518 = G__30530;
i__30519 = G__30531;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30582_30593 = cljs.core.seq.call(null,deps);
var chunk__30583_30594 = null;
var count__30584_30595 = (0);
var i__30585_30596 = (0);
while(true){
if((i__30585_30596 < count__30584_30595)){
var dep_30597 = cljs.core._nth.call(null,chunk__30583_30594,i__30585_30596);
topo_sort_helper_STAR_.call(null,dep_30597,(depth + (1)),state);

var G__30598 = seq__30582_30593;
var G__30599 = chunk__30583_30594;
var G__30600 = count__30584_30595;
var G__30601 = (i__30585_30596 + (1));
seq__30582_30593 = G__30598;
chunk__30583_30594 = G__30599;
count__30584_30595 = G__30600;
i__30585_30596 = G__30601;
continue;
} else {
var temp__4657__auto___30602 = cljs.core.seq.call(null,seq__30582_30593);
if(temp__4657__auto___30602){
var seq__30582_30603__$1 = temp__4657__auto___30602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30582_30603__$1)){
var c__25601__auto___30604 = cljs.core.chunk_first.call(null,seq__30582_30603__$1);
var G__30605 = cljs.core.chunk_rest.call(null,seq__30582_30603__$1);
var G__30606 = c__25601__auto___30604;
var G__30607 = cljs.core.count.call(null,c__25601__auto___30604);
var G__30608 = (0);
seq__30582_30593 = G__30605;
chunk__30583_30594 = G__30606;
count__30584_30595 = G__30607;
i__30585_30596 = G__30608;
continue;
} else {
var dep_30609 = cljs.core.first.call(null,seq__30582_30603__$1);
topo_sort_helper_STAR_.call(null,dep_30609,(depth + (1)),state);

var G__30610 = cljs.core.next.call(null,seq__30582_30603__$1);
var G__30611 = null;
var G__30612 = (0);
var G__30613 = (0);
seq__30582_30593 = G__30610;
chunk__30583_30594 = G__30611;
count__30584_30595 = G__30612;
i__30585_30596 = G__30613;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30586){
var vec__30590 = p__30586;
var seq__30591 = cljs.core.seq.call(null,vec__30590);
var first__30592 = cljs.core.first.call(null,seq__30591);
var seq__30591__$1 = cljs.core.next.call(null,seq__30591);
var x = first__30592;
var xs = seq__30591__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30590,seq__30591,first__30592,seq__30591__$1,x,xs,get_deps__$1){
return (function (p1__30532_SHARP_){
return clojure.set.difference.call(null,p1__30532_SHARP_,x);
});})(vec__30590,seq__30591,first__30592,seq__30591__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30626 = cljs.core.seq.call(null,provides);
var chunk__30627 = null;
var count__30628 = (0);
var i__30629 = (0);
while(true){
if((i__30629 < count__30628)){
var prov = cljs.core._nth.call(null,chunk__30627,i__30629);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30630_30638 = cljs.core.seq.call(null,requires);
var chunk__30631_30639 = null;
var count__30632_30640 = (0);
var i__30633_30641 = (0);
while(true){
if((i__30633_30641 < count__30632_30640)){
var req_30642 = cljs.core._nth.call(null,chunk__30631_30639,i__30633_30641);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30642,prov);

var G__30643 = seq__30630_30638;
var G__30644 = chunk__30631_30639;
var G__30645 = count__30632_30640;
var G__30646 = (i__30633_30641 + (1));
seq__30630_30638 = G__30643;
chunk__30631_30639 = G__30644;
count__30632_30640 = G__30645;
i__30633_30641 = G__30646;
continue;
} else {
var temp__4657__auto___30647 = cljs.core.seq.call(null,seq__30630_30638);
if(temp__4657__auto___30647){
var seq__30630_30648__$1 = temp__4657__auto___30647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30630_30648__$1)){
var c__25601__auto___30649 = cljs.core.chunk_first.call(null,seq__30630_30648__$1);
var G__30650 = cljs.core.chunk_rest.call(null,seq__30630_30648__$1);
var G__30651 = c__25601__auto___30649;
var G__30652 = cljs.core.count.call(null,c__25601__auto___30649);
var G__30653 = (0);
seq__30630_30638 = G__30650;
chunk__30631_30639 = G__30651;
count__30632_30640 = G__30652;
i__30633_30641 = G__30653;
continue;
} else {
var req_30654 = cljs.core.first.call(null,seq__30630_30648__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30654,prov);

var G__30655 = cljs.core.next.call(null,seq__30630_30648__$1);
var G__30656 = null;
var G__30657 = (0);
var G__30658 = (0);
seq__30630_30638 = G__30655;
chunk__30631_30639 = G__30656;
count__30632_30640 = G__30657;
i__30633_30641 = G__30658;
continue;
}
} else {
}
}
break;
}

var G__30659 = seq__30626;
var G__30660 = chunk__30627;
var G__30661 = count__30628;
var G__30662 = (i__30629 + (1));
seq__30626 = G__30659;
chunk__30627 = G__30660;
count__30628 = G__30661;
i__30629 = G__30662;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30626);
if(temp__4657__auto__){
var seq__30626__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30626__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__30626__$1);
var G__30663 = cljs.core.chunk_rest.call(null,seq__30626__$1);
var G__30664 = c__25601__auto__;
var G__30665 = cljs.core.count.call(null,c__25601__auto__);
var G__30666 = (0);
seq__30626 = G__30663;
chunk__30627 = G__30664;
count__30628 = G__30665;
i__30629 = G__30666;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30626__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30634_30667 = cljs.core.seq.call(null,requires);
var chunk__30635_30668 = null;
var count__30636_30669 = (0);
var i__30637_30670 = (0);
while(true){
if((i__30637_30670 < count__30636_30669)){
var req_30671 = cljs.core._nth.call(null,chunk__30635_30668,i__30637_30670);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30671,prov);

var G__30672 = seq__30634_30667;
var G__30673 = chunk__30635_30668;
var G__30674 = count__30636_30669;
var G__30675 = (i__30637_30670 + (1));
seq__30634_30667 = G__30672;
chunk__30635_30668 = G__30673;
count__30636_30669 = G__30674;
i__30637_30670 = G__30675;
continue;
} else {
var temp__4657__auto___30676__$1 = cljs.core.seq.call(null,seq__30634_30667);
if(temp__4657__auto___30676__$1){
var seq__30634_30677__$1 = temp__4657__auto___30676__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30634_30677__$1)){
var c__25601__auto___30678 = cljs.core.chunk_first.call(null,seq__30634_30677__$1);
var G__30679 = cljs.core.chunk_rest.call(null,seq__30634_30677__$1);
var G__30680 = c__25601__auto___30678;
var G__30681 = cljs.core.count.call(null,c__25601__auto___30678);
var G__30682 = (0);
seq__30634_30667 = G__30679;
chunk__30635_30668 = G__30680;
count__30636_30669 = G__30681;
i__30637_30670 = G__30682;
continue;
} else {
var req_30683 = cljs.core.first.call(null,seq__30634_30677__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30683,prov);

var G__30684 = cljs.core.next.call(null,seq__30634_30677__$1);
var G__30685 = null;
var G__30686 = (0);
var G__30687 = (0);
seq__30634_30667 = G__30684;
chunk__30635_30668 = G__30685;
count__30636_30669 = G__30686;
i__30637_30670 = G__30687;
continue;
}
} else {
}
}
break;
}

var G__30688 = cljs.core.next.call(null,seq__30626__$1);
var G__30689 = null;
var G__30690 = (0);
var G__30691 = (0);
seq__30626 = G__30688;
chunk__30627 = G__30689;
count__30628 = G__30690;
i__30629 = G__30691;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30696_30700 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30697_30701 = null;
var count__30698_30702 = (0);
var i__30699_30703 = (0);
while(true){
if((i__30699_30703 < count__30698_30702)){
var ns_30704 = cljs.core._nth.call(null,chunk__30697_30701,i__30699_30703);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30704);

var G__30705 = seq__30696_30700;
var G__30706 = chunk__30697_30701;
var G__30707 = count__30698_30702;
var G__30708 = (i__30699_30703 + (1));
seq__30696_30700 = G__30705;
chunk__30697_30701 = G__30706;
count__30698_30702 = G__30707;
i__30699_30703 = G__30708;
continue;
} else {
var temp__4657__auto___30709 = cljs.core.seq.call(null,seq__30696_30700);
if(temp__4657__auto___30709){
var seq__30696_30710__$1 = temp__4657__auto___30709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30696_30710__$1)){
var c__25601__auto___30711 = cljs.core.chunk_first.call(null,seq__30696_30710__$1);
var G__30712 = cljs.core.chunk_rest.call(null,seq__30696_30710__$1);
var G__30713 = c__25601__auto___30711;
var G__30714 = cljs.core.count.call(null,c__25601__auto___30711);
var G__30715 = (0);
seq__30696_30700 = G__30712;
chunk__30697_30701 = G__30713;
count__30698_30702 = G__30714;
i__30699_30703 = G__30715;
continue;
} else {
var ns_30716 = cljs.core.first.call(null,seq__30696_30710__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30716);

var G__30717 = cljs.core.next.call(null,seq__30696_30710__$1);
var G__30718 = null;
var G__30719 = (0);
var G__30720 = (0);
seq__30696_30700 = G__30717;
chunk__30697_30701 = G__30718;
count__30698_30702 = G__30719;
i__30699_30703 = G__30720;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24790__auto__ = goog.require__;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30721__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30722__i = 0, G__30722__a = new Array(arguments.length -  0);
while (G__30722__i < G__30722__a.length) {G__30722__a[G__30722__i] = arguments[G__30722__i + 0]; ++G__30722__i;}
  args = new cljs.core.IndexedSeq(G__30722__a,0);
} 
return G__30721__delegate.call(this,args);};
G__30721.cljs$lang$maxFixedArity = 0;
G__30721.cljs$lang$applyTo = (function (arglist__30723){
var args = cljs.core.seq(arglist__30723);
return G__30721__delegate(args);
});
G__30721.cljs$core$IFn$_invoke$arity$variadic = G__30721__delegate;
return G__30721;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30725 = cljs.core._EQ_;
var expr__30726 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30725.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30726))){
var path_parts = ((function (pred__30725,expr__30726){
return (function (p1__30724_SHARP_){
return clojure.string.split.call(null,p1__30724_SHARP_,/[\/\\]/);
});})(pred__30725,expr__30726))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30725,expr__30726){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30728){if((e30728 instanceof Error)){
var e = e30728;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30728;

}
}})());
});
;})(path_parts,sep,root,pred__30725,expr__30726))
} else {
if(cljs.core.truth_(pred__30725.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30726))){
return ((function (pred__30725,expr__30726){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30725,expr__30726){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30725,expr__30726))
);

return deferred.addErrback(((function (deferred,pred__30725,expr__30726){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30725,expr__30726))
);
});
;})(pred__30725,expr__30726))
} else {
return ((function (pred__30725,expr__30726){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30725,expr__30726))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30729,callback){
var map__30732 = p__30729;
var map__30732__$1 = ((((!((map__30732 == null)))?((((map__30732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30732):map__30732);
var file_msg = map__30732__$1;
var request_url = cljs.core.get.call(null,map__30732__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30732,map__30732__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30732,map__30732__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto__){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto__){
return (function (state_30756){
var state_val_30757 = (state_30756[(1)]);
if((state_val_30757 === (7))){
var inst_30752 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30758_30778 = state_30756__$1;
(statearr_30758_30778[(2)] = inst_30752);

(statearr_30758_30778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (1))){
var state_30756__$1 = state_30756;
var statearr_30759_30779 = state_30756__$1;
(statearr_30759_30779[(2)] = null);

(statearr_30759_30779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (4))){
var inst_30736 = (state_30756[(7)]);
var inst_30736__$1 = (state_30756[(2)]);
var state_30756__$1 = (function (){var statearr_30760 = state_30756;
(statearr_30760[(7)] = inst_30736__$1);

return statearr_30760;
})();
if(cljs.core.truth_(inst_30736__$1)){
var statearr_30761_30780 = state_30756__$1;
(statearr_30761_30780[(1)] = (5));

} else {
var statearr_30762_30781 = state_30756__$1;
(statearr_30762_30781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (6))){
var state_30756__$1 = state_30756;
var statearr_30763_30782 = state_30756__$1;
(statearr_30763_30782[(2)] = null);

(statearr_30763_30782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (3))){
var inst_30754 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30756__$1,inst_30754);
} else {
if((state_val_30757 === (2))){
var state_30756__$1 = state_30756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30756__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30757 === (11))){
var inst_30748 = (state_30756[(2)]);
var state_30756__$1 = (function (){var statearr_30764 = state_30756;
(statearr_30764[(8)] = inst_30748);

return statearr_30764;
})();
var statearr_30765_30783 = state_30756__$1;
(statearr_30765_30783[(2)] = null);

(statearr_30765_30783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (9))){
var inst_30742 = (state_30756[(9)]);
var inst_30740 = (state_30756[(10)]);
var inst_30744 = inst_30742.call(null,inst_30740);
var state_30756__$1 = state_30756;
var statearr_30766_30784 = state_30756__$1;
(statearr_30766_30784[(2)] = inst_30744);

(statearr_30766_30784[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (5))){
var inst_30736 = (state_30756[(7)]);
var inst_30738 = figwheel.client.file_reloading.blocking_load.call(null,inst_30736);
var state_30756__$1 = state_30756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30756__$1,(8),inst_30738);
} else {
if((state_val_30757 === (10))){
var inst_30740 = (state_30756[(10)]);
var inst_30746 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30740);
var state_30756__$1 = state_30756;
var statearr_30767_30785 = state_30756__$1;
(statearr_30767_30785[(2)] = inst_30746);

(statearr_30767_30785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (8))){
var inst_30742 = (state_30756[(9)]);
var inst_30736 = (state_30756[(7)]);
var inst_30740 = (state_30756[(2)]);
var inst_30741 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30742__$1 = cljs.core.get.call(null,inst_30741,inst_30736);
var state_30756__$1 = (function (){var statearr_30768 = state_30756;
(statearr_30768[(9)] = inst_30742__$1);

(statearr_30768[(10)] = inst_30740);

return statearr_30768;
})();
if(cljs.core.truth_(inst_30742__$1)){
var statearr_30769_30786 = state_30756__$1;
(statearr_30769_30786[(1)] = (9));

} else {
var statearr_30770_30787 = state_30756__$1;
(statearr_30770_30787[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27656__auto__))
;
return ((function (switch__27544__auto__,c__27656__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27545__auto__ = null;
var figwheel$client$file_reloading$state_machine__27545__auto____0 = (function (){
var statearr_30774 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30774[(0)] = figwheel$client$file_reloading$state_machine__27545__auto__);

(statearr_30774[(1)] = (1));

return statearr_30774;
});
var figwheel$client$file_reloading$state_machine__27545__auto____1 = (function (state_30756){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_30756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e30775){if((e30775 instanceof Object)){
var ex__27548__auto__ = e30775;
var statearr_30776_30788 = state_30756;
(statearr_30776_30788[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30789 = state_30756;
state_30756 = G__30789;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27545__auto__ = function(state_30756){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27545__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27545__auto____1.call(this,state_30756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27545__auto____0;
figwheel$client$file_reloading$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27545__auto____1;
return figwheel$client$file_reloading$state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto__))
})();
var state__27658__auto__ = (function (){var statearr_30777 = f__27657__auto__.call(null);
(statearr_30777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto__);

return statearr_30777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto__))
);

return c__27656__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30790,callback){
var map__30793 = p__30790;
var map__30793__$1 = ((((!((map__30793 == null)))?((((map__30793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30793):map__30793);
var file_msg = map__30793__$1;
var namespace = cljs.core.get.call(null,map__30793__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30793,map__30793__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30793,map__30793__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30795){
var map__30798 = p__30795;
var map__30798__$1 = ((((!((map__30798 == null)))?((((map__30798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30798):map__30798);
var file_msg = map__30798__$1;
var namespace = cljs.core.get.call(null,map__30798__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24778__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24778__auto__){
var or__24790__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
var or__24790__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto____$1)){
return or__24790__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24778__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30800,callback){
var map__30803 = p__30800;
var map__30803__$1 = ((((!((map__30803 == null)))?((((map__30803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30803):map__30803);
var file_msg = map__30803__$1;
var request_url = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27656__auto___30907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___30907,out){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___30907,out){
return (function (state_30889){
var state_val_30890 = (state_30889[(1)]);
if((state_val_30890 === (1))){
var inst_30863 = cljs.core.seq.call(null,files);
var inst_30864 = cljs.core.first.call(null,inst_30863);
var inst_30865 = cljs.core.next.call(null,inst_30863);
var inst_30866 = files;
var state_30889__$1 = (function (){var statearr_30891 = state_30889;
(statearr_30891[(7)] = inst_30864);

(statearr_30891[(8)] = inst_30866);

(statearr_30891[(9)] = inst_30865);

return statearr_30891;
})();
var statearr_30892_30908 = state_30889__$1;
(statearr_30892_30908[(2)] = null);

(statearr_30892_30908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (2))){
var inst_30872 = (state_30889[(10)]);
var inst_30866 = (state_30889[(8)]);
var inst_30871 = cljs.core.seq.call(null,inst_30866);
var inst_30872__$1 = cljs.core.first.call(null,inst_30871);
var inst_30873 = cljs.core.next.call(null,inst_30871);
var inst_30874 = (inst_30872__$1 == null);
var inst_30875 = cljs.core.not.call(null,inst_30874);
var state_30889__$1 = (function (){var statearr_30893 = state_30889;
(statearr_30893[(10)] = inst_30872__$1);

(statearr_30893[(11)] = inst_30873);

return statearr_30893;
})();
if(inst_30875){
var statearr_30894_30909 = state_30889__$1;
(statearr_30894_30909[(1)] = (4));

} else {
var statearr_30895_30910 = state_30889__$1;
(statearr_30895_30910[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (3))){
var inst_30887 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30889__$1,inst_30887);
} else {
if((state_val_30890 === (4))){
var inst_30872 = (state_30889[(10)]);
var inst_30877 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30872);
var state_30889__$1 = state_30889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30889__$1,(7),inst_30877);
} else {
if((state_val_30890 === (5))){
var inst_30883 = cljs.core.async.close_BANG_.call(null,out);
var state_30889__$1 = state_30889;
var statearr_30896_30911 = state_30889__$1;
(statearr_30896_30911[(2)] = inst_30883);

(statearr_30896_30911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (6))){
var inst_30885 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30897_30912 = state_30889__$1;
(statearr_30897_30912[(2)] = inst_30885);

(statearr_30897_30912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (7))){
var inst_30873 = (state_30889[(11)]);
var inst_30879 = (state_30889[(2)]);
var inst_30880 = cljs.core.async.put_BANG_.call(null,out,inst_30879);
var inst_30866 = inst_30873;
var state_30889__$1 = (function (){var statearr_30898 = state_30889;
(statearr_30898[(12)] = inst_30880);

(statearr_30898[(8)] = inst_30866);

return statearr_30898;
})();
var statearr_30899_30913 = state_30889__$1;
(statearr_30899_30913[(2)] = null);

(statearr_30899_30913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27656__auto___30907,out))
;
return ((function (switch__27544__auto__,c__27656__auto___30907,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27545__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27545__auto____0 = (function (){
var statearr_30903 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30903[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27545__auto__);

(statearr_30903[(1)] = (1));

return statearr_30903;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27545__auto____1 = (function (state_30889){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_30889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e30904){if((e30904 instanceof Object)){
var ex__27548__auto__ = e30904;
var statearr_30905_30914 = state_30889;
(statearr_30905_30914[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30915 = state_30889;
state_30889 = G__30915;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27545__auto__ = function(state_30889){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27545__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27545__auto____1.call(this,state_30889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27545__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27545__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___30907,out))
})();
var state__27658__auto__ = (function (){var statearr_30906 = f__27657__auto__.call(null);
(statearr_30906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___30907);

return statearr_30906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___30907,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30916,opts){
var map__30920 = p__30916;
var map__30920__$1 = ((((!((map__30920 == null)))?((((map__30920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30920):map__30920);
var eval_body__$1 = cljs.core.get.call(null,map__30920__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30920__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24778__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24778__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24778__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30922){var e = e30922;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30923_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30923_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30932){
var vec__30933 = p__30932;
var k = cljs.core.nth.call(null,vec__30933,(0),null);
var v = cljs.core.nth.call(null,vec__30933,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30936){
var vec__30937 = p__30936;
var k = cljs.core.nth.call(null,vec__30937,(0),null);
var v = cljs.core.nth.call(null,vec__30937,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30943,p__30944){
var map__31191 = p__30943;
var map__31191__$1 = ((((!((map__31191 == null)))?((((map__31191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31191):map__31191);
var opts = map__31191__$1;
var before_jsload = cljs.core.get.call(null,map__31191__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31191__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31191__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31192 = p__30944;
var map__31192__$1 = ((((!((map__31192 == null)))?((((map__31192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31192):map__31192);
var msg = map__31192__$1;
var files = cljs.core.get.call(null,map__31192__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31192__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31192__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31345){
var state_val_31346 = (state_31345[(1)]);
if((state_val_31346 === (7))){
var inst_31207 = (state_31345[(7)]);
var inst_31208 = (state_31345[(8)]);
var inst_31206 = (state_31345[(9)]);
var inst_31209 = (state_31345[(10)]);
var inst_31214 = cljs.core._nth.call(null,inst_31207,inst_31209);
var inst_31215 = figwheel.client.file_reloading.eval_body.call(null,inst_31214,opts);
var inst_31216 = (inst_31209 + (1));
var tmp31347 = inst_31207;
var tmp31348 = inst_31208;
var tmp31349 = inst_31206;
var inst_31206__$1 = tmp31349;
var inst_31207__$1 = tmp31347;
var inst_31208__$1 = tmp31348;
var inst_31209__$1 = inst_31216;
var state_31345__$1 = (function (){var statearr_31350 = state_31345;
(statearr_31350[(11)] = inst_31215);

(statearr_31350[(7)] = inst_31207__$1);

(statearr_31350[(8)] = inst_31208__$1);

(statearr_31350[(9)] = inst_31206__$1);

(statearr_31350[(10)] = inst_31209__$1);

return statearr_31350;
})();
var statearr_31351_31437 = state_31345__$1;
(statearr_31351_31437[(2)] = null);

(statearr_31351_31437[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (20))){
var inst_31249 = (state_31345[(12)]);
var inst_31257 = figwheel.client.file_reloading.sort_files.call(null,inst_31249);
var state_31345__$1 = state_31345;
var statearr_31352_31438 = state_31345__$1;
(statearr_31352_31438[(2)] = inst_31257);

(statearr_31352_31438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (27))){
var state_31345__$1 = state_31345;
var statearr_31353_31439 = state_31345__$1;
(statearr_31353_31439[(2)] = null);

(statearr_31353_31439[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (1))){
var inst_31198 = (state_31345[(13)]);
var inst_31195 = before_jsload.call(null,files);
var inst_31196 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31197 = (function (){return ((function (inst_31198,inst_31195,inst_31196,state_val_31346,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30940_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30940_SHARP_);
});
;})(inst_31198,inst_31195,inst_31196,state_val_31346,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31198__$1 = cljs.core.filter.call(null,inst_31197,files);
var inst_31199 = cljs.core.not_empty.call(null,inst_31198__$1);
var state_31345__$1 = (function (){var statearr_31354 = state_31345;
(statearr_31354[(14)] = inst_31195);

(statearr_31354[(13)] = inst_31198__$1);

(statearr_31354[(15)] = inst_31196);

return statearr_31354;
})();
if(cljs.core.truth_(inst_31199)){
var statearr_31355_31440 = state_31345__$1;
(statearr_31355_31440[(1)] = (2));

} else {
var statearr_31356_31441 = state_31345__$1;
(statearr_31356_31441[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (24))){
var state_31345__$1 = state_31345;
var statearr_31357_31442 = state_31345__$1;
(statearr_31357_31442[(2)] = null);

(statearr_31357_31442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (39))){
var inst_31299 = (state_31345[(16)]);
var state_31345__$1 = state_31345;
var statearr_31358_31443 = state_31345__$1;
(statearr_31358_31443[(2)] = inst_31299);

(statearr_31358_31443[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (46))){
var inst_31340 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31359_31444 = state_31345__$1;
(statearr_31359_31444[(2)] = inst_31340);

(statearr_31359_31444[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (4))){
var inst_31243 = (state_31345[(2)]);
var inst_31244 = cljs.core.List.EMPTY;
var inst_31245 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31244);
var inst_31246 = (function (){return ((function (inst_31243,inst_31244,inst_31245,state_val_31346,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30941_SHARP_){
var and__24778__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30941_SHARP_);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30941_SHARP_));
} else {
return and__24778__auto__;
}
});
;})(inst_31243,inst_31244,inst_31245,state_val_31346,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31247 = cljs.core.filter.call(null,inst_31246,files);
var inst_31248 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31249 = cljs.core.concat.call(null,inst_31247,inst_31248);
var state_31345__$1 = (function (){var statearr_31360 = state_31345;
(statearr_31360[(12)] = inst_31249);

(statearr_31360[(17)] = inst_31245);

(statearr_31360[(18)] = inst_31243);

return statearr_31360;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31361_31445 = state_31345__$1;
(statearr_31361_31445[(1)] = (16));

} else {
var statearr_31362_31446 = state_31345__$1;
(statearr_31362_31446[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (15))){
var inst_31233 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31363_31447 = state_31345__$1;
(statearr_31363_31447[(2)] = inst_31233);

(statearr_31363_31447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (21))){
var inst_31259 = (state_31345[(19)]);
var inst_31259__$1 = (state_31345[(2)]);
var inst_31260 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31259__$1);
var state_31345__$1 = (function (){var statearr_31364 = state_31345;
(statearr_31364[(19)] = inst_31259__$1);

return statearr_31364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31345__$1,(22),inst_31260);
} else {
if((state_val_31346 === (31))){
var inst_31343 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31345__$1,inst_31343);
} else {
if((state_val_31346 === (32))){
var inst_31299 = (state_31345[(16)]);
var inst_31304 = inst_31299.cljs$lang$protocol_mask$partition0$;
var inst_31305 = (inst_31304 & (64));
var inst_31306 = inst_31299.cljs$core$ISeq$;
var inst_31307 = (inst_31305) || (inst_31306);
var state_31345__$1 = state_31345;
if(cljs.core.truth_(inst_31307)){
var statearr_31365_31448 = state_31345__$1;
(statearr_31365_31448[(1)] = (35));

} else {
var statearr_31366_31449 = state_31345__$1;
(statearr_31366_31449[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (40))){
var inst_31320 = (state_31345[(20)]);
var inst_31319 = (state_31345[(2)]);
var inst_31320__$1 = cljs.core.get.call(null,inst_31319,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31321 = cljs.core.get.call(null,inst_31319,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31322 = cljs.core.not_empty.call(null,inst_31320__$1);
var state_31345__$1 = (function (){var statearr_31367 = state_31345;
(statearr_31367[(20)] = inst_31320__$1);

(statearr_31367[(21)] = inst_31321);

return statearr_31367;
})();
if(cljs.core.truth_(inst_31322)){
var statearr_31368_31450 = state_31345__$1;
(statearr_31368_31450[(1)] = (41));

} else {
var statearr_31369_31451 = state_31345__$1;
(statearr_31369_31451[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (33))){
var state_31345__$1 = state_31345;
var statearr_31370_31452 = state_31345__$1;
(statearr_31370_31452[(2)] = false);

(statearr_31370_31452[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (13))){
var inst_31219 = (state_31345[(22)]);
var inst_31223 = cljs.core.chunk_first.call(null,inst_31219);
var inst_31224 = cljs.core.chunk_rest.call(null,inst_31219);
var inst_31225 = cljs.core.count.call(null,inst_31223);
var inst_31206 = inst_31224;
var inst_31207 = inst_31223;
var inst_31208 = inst_31225;
var inst_31209 = (0);
var state_31345__$1 = (function (){var statearr_31371 = state_31345;
(statearr_31371[(7)] = inst_31207);

(statearr_31371[(8)] = inst_31208);

(statearr_31371[(9)] = inst_31206);

(statearr_31371[(10)] = inst_31209);

return statearr_31371;
})();
var statearr_31372_31453 = state_31345__$1;
(statearr_31372_31453[(2)] = null);

(statearr_31372_31453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (22))){
var inst_31267 = (state_31345[(23)]);
var inst_31263 = (state_31345[(24)]);
var inst_31259 = (state_31345[(19)]);
var inst_31262 = (state_31345[(25)]);
var inst_31262__$1 = (state_31345[(2)]);
var inst_31263__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31262__$1);
var inst_31264 = (function (){var all_files = inst_31259;
var res_SINGLEQUOTE_ = inst_31262__$1;
var res = inst_31263__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31267,inst_31263,inst_31259,inst_31262,inst_31262__$1,inst_31263__$1,state_val_31346,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30942_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30942_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31267,inst_31263,inst_31259,inst_31262,inst_31262__$1,inst_31263__$1,state_val_31346,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31265 = cljs.core.filter.call(null,inst_31264,inst_31262__$1);
var inst_31266 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31267__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31266);
var inst_31268 = cljs.core.not_empty.call(null,inst_31267__$1);
var state_31345__$1 = (function (){var statearr_31373 = state_31345;
(statearr_31373[(26)] = inst_31265);

(statearr_31373[(23)] = inst_31267__$1);

(statearr_31373[(24)] = inst_31263__$1);

(statearr_31373[(25)] = inst_31262__$1);

return statearr_31373;
})();
if(cljs.core.truth_(inst_31268)){
var statearr_31374_31454 = state_31345__$1;
(statearr_31374_31454[(1)] = (23));

} else {
var statearr_31375_31455 = state_31345__$1;
(statearr_31375_31455[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (36))){
var state_31345__$1 = state_31345;
var statearr_31376_31456 = state_31345__$1;
(statearr_31376_31456[(2)] = false);

(statearr_31376_31456[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (41))){
var inst_31320 = (state_31345[(20)]);
var inst_31324 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31325 = cljs.core.map.call(null,inst_31324,inst_31320);
var inst_31326 = cljs.core.pr_str.call(null,inst_31325);
var inst_31327 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31326)].join('');
var inst_31328 = figwheel.client.utils.log.call(null,inst_31327);
var state_31345__$1 = state_31345;
var statearr_31377_31457 = state_31345__$1;
(statearr_31377_31457[(2)] = inst_31328);

(statearr_31377_31457[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (43))){
var inst_31321 = (state_31345[(21)]);
var inst_31331 = (state_31345[(2)]);
var inst_31332 = cljs.core.not_empty.call(null,inst_31321);
var state_31345__$1 = (function (){var statearr_31378 = state_31345;
(statearr_31378[(27)] = inst_31331);

return statearr_31378;
})();
if(cljs.core.truth_(inst_31332)){
var statearr_31379_31458 = state_31345__$1;
(statearr_31379_31458[(1)] = (44));

} else {
var statearr_31380_31459 = state_31345__$1;
(statearr_31380_31459[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (29))){
var inst_31265 = (state_31345[(26)]);
var inst_31267 = (state_31345[(23)]);
var inst_31263 = (state_31345[(24)]);
var inst_31259 = (state_31345[(19)]);
var inst_31299 = (state_31345[(16)]);
var inst_31262 = (state_31345[(25)]);
var inst_31295 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31298 = (function (){var all_files = inst_31259;
var res_SINGLEQUOTE_ = inst_31262;
var res = inst_31263;
var files_not_loaded = inst_31265;
var dependencies_that_loaded = inst_31267;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31265,inst_31267,inst_31263,inst_31259,inst_31299,inst_31262,inst_31295,state_val_31346,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31297){
var map__31381 = p__31297;
var map__31381__$1 = ((((!((map__31381 == null)))?((((map__31381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31381):map__31381);
var namespace = cljs.core.get.call(null,map__31381__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31265,inst_31267,inst_31263,inst_31259,inst_31299,inst_31262,inst_31295,state_val_31346,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31299__$1 = cljs.core.group_by.call(null,inst_31298,inst_31265);
var inst_31301 = (inst_31299__$1 == null);
var inst_31302 = cljs.core.not.call(null,inst_31301);
var state_31345__$1 = (function (){var statearr_31383 = state_31345;
(statearr_31383[(28)] = inst_31295);

(statearr_31383[(16)] = inst_31299__$1);

return statearr_31383;
})();
if(inst_31302){
var statearr_31384_31460 = state_31345__$1;
(statearr_31384_31460[(1)] = (32));

} else {
var statearr_31385_31461 = state_31345__$1;
(statearr_31385_31461[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (44))){
var inst_31321 = (state_31345[(21)]);
var inst_31334 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31321);
var inst_31335 = cljs.core.pr_str.call(null,inst_31334);
var inst_31336 = [cljs.core.str("not required: "),cljs.core.str(inst_31335)].join('');
var inst_31337 = figwheel.client.utils.log.call(null,inst_31336);
var state_31345__$1 = state_31345;
var statearr_31386_31462 = state_31345__$1;
(statearr_31386_31462[(2)] = inst_31337);

(statearr_31386_31462[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (6))){
var inst_31240 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31387_31463 = state_31345__$1;
(statearr_31387_31463[(2)] = inst_31240);

(statearr_31387_31463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (28))){
var inst_31265 = (state_31345[(26)]);
var inst_31292 = (state_31345[(2)]);
var inst_31293 = cljs.core.not_empty.call(null,inst_31265);
var state_31345__$1 = (function (){var statearr_31388 = state_31345;
(statearr_31388[(29)] = inst_31292);

return statearr_31388;
})();
if(cljs.core.truth_(inst_31293)){
var statearr_31389_31464 = state_31345__$1;
(statearr_31389_31464[(1)] = (29));

} else {
var statearr_31390_31465 = state_31345__$1;
(statearr_31390_31465[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (25))){
var inst_31263 = (state_31345[(24)]);
var inst_31279 = (state_31345[(2)]);
var inst_31280 = cljs.core.not_empty.call(null,inst_31263);
var state_31345__$1 = (function (){var statearr_31391 = state_31345;
(statearr_31391[(30)] = inst_31279);

return statearr_31391;
})();
if(cljs.core.truth_(inst_31280)){
var statearr_31392_31466 = state_31345__$1;
(statearr_31392_31466[(1)] = (26));

} else {
var statearr_31393_31467 = state_31345__$1;
(statearr_31393_31467[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (34))){
var inst_31314 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
if(cljs.core.truth_(inst_31314)){
var statearr_31394_31468 = state_31345__$1;
(statearr_31394_31468[(1)] = (38));

} else {
var statearr_31395_31469 = state_31345__$1;
(statearr_31395_31469[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (17))){
var state_31345__$1 = state_31345;
var statearr_31396_31470 = state_31345__$1;
(statearr_31396_31470[(2)] = recompile_dependents);

(statearr_31396_31470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (3))){
var state_31345__$1 = state_31345;
var statearr_31397_31471 = state_31345__$1;
(statearr_31397_31471[(2)] = null);

(statearr_31397_31471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (12))){
var inst_31236 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31398_31472 = state_31345__$1;
(statearr_31398_31472[(2)] = inst_31236);

(statearr_31398_31472[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (2))){
var inst_31198 = (state_31345[(13)]);
var inst_31205 = cljs.core.seq.call(null,inst_31198);
var inst_31206 = inst_31205;
var inst_31207 = null;
var inst_31208 = (0);
var inst_31209 = (0);
var state_31345__$1 = (function (){var statearr_31399 = state_31345;
(statearr_31399[(7)] = inst_31207);

(statearr_31399[(8)] = inst_31208);

(statearr_31399[(9)] = inst_31206);

(statearr_31399[(10)] = inst_31209);

return statearr_31399;
})();
var statearr_31400_31473 = state_31345__$1;
(statearr_31400_31473[(2)] = null);

(statearr_31400_31473[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (23))){
var inst_31265 = (state_31345[(26)]);
var inst_31267 = (state_31345[(23)]);
var inst_31263 = (state_31345[(24)]);
var inst_31259 = (state_31345[(19)]);
var inst_31262 = (state_31345[(25)]);
var inst_31270 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31272 = (function (){var all_files = inst_31259;
var res_SINGLEQUOTE_ = inst_31262;
var res = inst_31263;
var files_not_loaded = inst_31265;
var dependencies_that_loaded = inst_31267;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31265,inst_31267,inst_31263,inst_31259,inst_31262,inst_31270,state_val_31346,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31271){
var map__31401 = p__31271;
var map__31401__$1 = ((((!((map__31401 == null)))?((((map__31401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31401):map__31401);
var request_url = cljs.core.get.call(null,map__31401__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31265,inst_31267,inst_31263,inst_31259,inst_31262,inst_31270,state_val_31346,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31273 = cljs.core.reverse.call(null,inst_31267);
var inst_31274 = cljs.core.map.call(null,inst_31272,inst_31273);
var inst_31275 = cljs.core.pr_str.call(null,inst_31274);
var inst_31276 = figwheel.client.utils.log.call(null,inst_31275);
var state_31345__$1 = (function (){var statearr_31403 = state_31345;
(statearr_31403[(31)] = inst_31270);

return statearr_31403;
})();
var statearr_31404_31474 = state_31345__$1;
(statearr_31404_31474[(2)] = inst_31276);

(statearr_31404_31474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (35))){
var state_31345__$1 = state_31345;
var statearr_31405_31475 = state_31345__$1;
(statearr_31405_31475[(2)] = true);

(statearr_31405_31475[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (19))){
var inst_31249 = (state_31345[(12)]);
var inst_31255 = figwheel.client.file_reloading.expand_files.call(null,inst_31249);
var state_31345__$1 = state_31345;
var statearr_31406_31476 = state_31345__$1;
(statearr_31406_31476[(2)] = inst_31255);

(statearr_31406_31476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (11))){
var state_31345__$1 = state_31345;
var statearr_31407_31477 = state_31345__$1;
(statearr_31407_31477[(2)] = null);

(statearr_31407_31477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (9))){
var inst_31238 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31408_31478 = state_31345__$1;
(statearr_31408_31478[(2)] = inst_31238);

(statearr_31408_31478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (5))){
var inst_31208 = (state_31345[(8)]);
var inst_31209 = (state_31345[(10)]);
var inst_31211 = (inst_31209 < inst_31208);
var inst_31212 = inst_31211;
var state_31345__$1 = state_31345;
if(cljs.core.truth_(inst_31212)){
var statearr_31409_31479 = state_31345__$1;
(statearr_31409_31479[(1)] = (7));

} else {
var statearr_31410_31480 = state_31345__$1;
(statearr_31410_31480[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (14))){
var inst_31219 = (state_31345[(22)]);
var inst_31228 = cljs.core.first.call(null,inst_31219);
var inst_31229 = figwheel.client.file_reloading.eval_body.call(null,inst_31228,opts);
var inst_31230 = cljs.core.next.call(null,inst_31219);
var inst_31206 = inst_31230;
var inst_31207 = null;
var inst_31208 = (0);
var inst_31209 = (0);
var state_31345__$1 = (function (){var statearr_31411 = state_31345;
(statearr_31411[(7)] = inst_31207);

(statearr_31411[(8)] = inst_31208);

(statearr_31411[(9)] = inst_31206);

(statearr_31411[(32)] = inst_31229);

(statearr_31411[(10)] = inst_31209);

return statearr_31411;
})();
var statearr_31412_31481 = state_31345__$1;
(statearr_31412_31481[(2)] = null);

(statearr_31412_31481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (45))){
var state_31345__$1 = state_31345;
var statearr_31413_31482 = state_31345__$1;
(statearr_31413_31482[(2)] = null);

(statearr_31413_31482[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (26))){
var inst_31265 = (state_31345[(26)]);
var inst_31267 = (state_31345[(23)]);
var inst_31263 = (state_31345[(24)]);
var inst_31259 = (state_31345[(19)]);
var inst_31262 = (state_31345[(25)]);
var inst_31282 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31284 = (function (){var all_files = inst_31259;
var res_SINGLEQUOTE_ = inst_31262;
var res = inst_31263;
var files_not_loaded = inst_31265;
var dependencies_that_loaded = inst_31267;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31265,inst_31267,inst_31263,inst_31259,inst_31262,inst_31282,state_val_31346,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31283){
var map__31414 = p__31283;
var map__31414__$1 = ((((!((map__31414 == null)))?((((map__31414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31414):map__31414);
var namespace = cljs.core.get.call(null,map__31414__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31265,inst_31267,inst_31263,inst_31259,inst_31262,inst_31282,state_val_31346,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31285 = cljs.core.map.call(null,inst_31284,inst_31263);
var inst_31286 = cljs.core.pr_str.call(null,inst_31285);
var inst_31287 = figwheel.client.utils.log.call(null,inst_31286);
var inst_31288 = (function (){var all_files = inst_31259;
var res_SINGLEQUOTE_ = inst_31262;
var res = inst_31263;
var files_not_loaded = inst_31265;
var dependencies_that_loaded = inst_31267;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31265,inst_31267,inst_31263,inst_31259,inst_31262,inst_31282,inst_31284,inst_31285,inst_31286,inst_31287,state_val_31346,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31265,inst_31267,inst_31263,inst_31259,inst_31262,inst_31282,inst_31284,inst_31285,inst_31286,inst_31287,state_val_31346,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31289 = setTimeout(inst_31288,(10));
var state_31345__$1 = (function (){var statearr_31416 = state_31345;
(statearr_31416[(33)] = inst_31282);

(statearr_31416[(34)] = inst_31287);

return statearr_31416;
})();
var statearr_31417_31483 = state_31345__$1;
(statearr_31417_31483[(2)] = inst_31289);

(statearr_31417_31483[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (16))){
var state_31345__$1 = state_31345;
var statearr_31418_31484 = state_31345__$1;
(statearr_31418_31484[(2)] = reload_dependents);

(statearr_31418_31484[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (38))){
var inst_31299 = (state_31345[(16)]);
var inst_31316 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31299);
var state_31345__$1 = state_31345;
var statearr_31419_31485 = state_31345__$1;
(statearr_31419_31485[(2)] = inst_31316);

(statearr_31419_31485[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (30))){
var state_31345__$1 = state_31345;
var statearr_31420_31486 = state_31345__$1;
(statearr_31420_31486[(2)] = null);

(statearr_31420_31486[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (10))){
var inst_31219 = (state_31345[(22)]);
var inst_31221 = cljs.core.chunked_seq_QMARK_.call(null,inst_31219);
var state_31345__$1 = state_31345;
if(inst_31221){
var statearr_31421_31487 = state_31345__$1;
(statearr_31421_31487[(1)] = (13));

} else {
var statearr_31422_31488 = state_31345__$1;
(statearr_31422_31488[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (18))){
var inst_31253 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
if(cljs.core.truth_(inst_31253)){
var statearr_31423_31489 = state_31345__$1;
(statearr_31423_31489[(1)] = (19));

} else {
var statearr_31424_31490 = state_31345__$1;
(statearr_31424_31490[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (42))){
var state_31345__$1 = state_31345;
var statearr_31425_31491 = state_31345__$1;
(statearr_31425_31491[(2)] = null);

(statearr_31425_31491[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (37))){
var inst_31311 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31426_31492 = state_31345__$1;
(statearr_31426_31492[(2)] = inst_31311);

(statearr_31426_31492[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (8))){
var inst_31219 = (state_31345[(22)]);
var inst_31206 = (state_31345[(9)]);
var inst_31219__$1 = cljs.core.seq.call(null,inst_31206);
var state_31345__$1 = (function (){var statearr_31427 = state_31345;
(statearr_31427[(22)] = inst_31219__$1);

return statearr_31427;
})();
if(inst_31219__$1){
var statearr_31428_31493 = state_31345__$1;
(statearr_31428_31493[(1)] = (10));

} else {
var statearr_31429_31494 = state_31345__$1;
(statearr_31429_31494[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27544__auto__,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27545__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27545__auto____0 = (function (){
var statearr_31433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31433[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27545__auto__);

(statearr_31433[(1)] = (1));

return statearr_31433;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27545__auto____1 = (function (state_31345){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_31345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e31434){if((e31434 instanceof Object)){
var ex__27548__auto__ = e31434;
var statearr_31435_31495 = state_31345;
(statearr_31435_31495[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31496 = state_31345;
state_31345 = G__31496;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27545__auto__ = function(state_31345){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27545__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27545__auto____1.call(this,state_31345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27545__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27545__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27658__auto__ = (function (){var statearr_31436 = f__27657__auto__.call(null);
(statearr_31436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto__);

return statearr_31436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto__,map__31191,map__31191__$1,opts,before_jsload,on_jsload,reload_dependents,map__31192,map__31192__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27656__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31499,link){
var map__31502 = p__31499;
var map__31502__$1 = ((((!((map__31502 == null)))?((((map__31502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31502):map__31502);
var file = cljs.core.get.call(null,map__31502__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31502,map__31502__$1,file){
return (function (p1__31497_SHARP_,p2__31498_SHARP_){
if(cljs.core._EQ_.call(null,p1__31497_SHARP_,p2__31498_SHARP_)){
return p1__31497_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31502,map__31502__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31508){
var map__31509 = p__31508;
var map__31509__$1 = ((((!((map__31509 == null)))?((((map__31509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31509):map__31509);
var match_length = cljs.core.get.call(null,map__31509__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31509__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31504_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31504_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31511 = [];
var len__25865__auto___31514 = arguments.length;
var i__25866__auto___31515 = (0);
while(true){
if((i__25866__auto___31515 < len__25865__auto___31514)){
args31511.push((arguments[i__25866__auto___31515]));

var G__31516 = (i__25866__auto___31515 + (1));
i__25866__auto___31515 = G__31516;
continue;
} else {
}
break;
}

var G__31513 = args31511.length;
switch (G__31513) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31511.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31518_SHARP_,p2__31519_SHARP_){
return cljs.core.assoc.call(null,p1__31518_SHARP_,cljs.core.get.call(null,p2__31519_SHARP_,key),p2__31519_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31520){
var map__31523 = p__31520;
var map__31523__$1 = ((((!((map__31523 == null)))?((((map__31523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31523):map__31523);
var f_data = map__31523__$1;
var file = cljs.core.get.call(null,map__31523__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31525,p__31526){
var map__31535 = p__31525;
var map__31535__$1 = ((((!((map__31535 == null)))?((((map__31535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31535):map__31535);
var opts = map__31535__$1;
var on_cssload = cljs.core.get.call(null,map__31535__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31536 = p__31526;
var map__31536__$1 = ((((!((map__31536 == null)))?((((map__31536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31536):map__31536);
var files_msg = map__31536__$1;
var files = cljs.core.get.call(null,map__31536__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31539_31543 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31540_31544 = null;
var count__31541_31545 = (0);
var i__31542_31546 = (0);
while(true){
if((i__31542_31546 < count__31541_31545)){
var f_31547 = cljs.core._nth.call(null,chunk__31540_31544,i__31542_31546);
figwheel.client.file_reloading.reload_css_file.call(null,f_31547);

var G__31548 = seq__31539_31543;
var G__31549 = chunk__31540_31544;
var G__31550 = count__31541_31545;
var G__31551 = (i__31542_31546 + (1));
seq__31539_31543 = G__31548;
chunk__31540_31544 = G__31549;
count__31541_31545 = G__31550;
i__31542_31546 = G__31551;
continue;
} else {
var temp__4657__auto___31552 = cljs.core.seq.call(null,seq__31539_31543);
if(temp__4657__auto___31552){
var seq__31539_31553__$1 = temp__4657__auto___31552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31539_31553__$1)){
var c__25601__auto___31554 = cljs.core.chunk_first.call(null,seq__31539_31553__$1);
var G__31555 = cljs.core.chunk_rest.call(null,seq__31539_31553__$1);
var G__31556 = c__25601__auto___31554;
var G__31557 = cljs.core.count.call(null,c__25601__auto___31554);
var G__31558 = (0);
seq__31539_31543 = G__31555;
chunk__31540_31544 = G__31556;
count__31541_31545 = G__31557;
i__31542_31546 = G__31558;
continue;
} else {
var f_31559 = cljs.core.first.call(null,seq__31539_31553__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31559);

var G__31560 = cljs.core.next.call(null,seq__31539_31553__$1);
var G__31561 = null;
var G__31562 = (0);
var G__31563 = (0);
seq__31539_31543 = G__31560;
chunk__31540_31544 = G__31561;
count__31541_31545 = G__31562;
i__31542_31546 = G__31563;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31535,map__31535__$1,opts,on_cssload,map__31536,map__31536__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31535,map__31535__$1,opts,on_cssload,map__31536,map__31536__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1478292543020