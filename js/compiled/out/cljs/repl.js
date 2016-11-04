// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32863){
var map__32888 = p__32863;
var map__32888__$1 = ((((!((map__32888 == null)))?((((map__32888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32888):map__32888);
var m = map__32888__$1;
var n = cljs.core.get.call(null,map__32888__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32890_32912 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32891_32913 = null;
var count__32892_32914 = (0);
var i__32893_32915 = (0);
while(true){
if((i__32893_32915 < count__32892_32914)){
var f_32916 = cljs.core._nth.call(null,chunk__32891_32913,i__32893_32915);
cljs.core.println.call(null,"  ",f_32916);

var G__32917 = seq__32890_32912;
var G__32918 = chunk__32891_32913;
var G__32919 = count__32892_32914;
var G__32920 = (i__32893_32915 + (1));
seq__32890_32912 = G__32917;
chunk__32891_32913 = G__32918;
count__32892_32914 = G__32919;
i__32893_32915 = G__32920;
continue;
} else {
var temp__4657__auto___32921 = cljs.core.seq.call(null,seq__32890_32912);
if(temp__4657__auto___32921){
var seq__32890_32922__$1 = temp__4657__auto___32921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32890_32922__$1)){
var c__25601__auto___32923 = cljs.core.chunk_first.call(null,seq__32890_32922__$1);
var G__32924 = cljs.core.chunk_rest.call(null,seq__32890_32922__$1);
var G__32925 = c__25601__auto___32923;
var G__32926 = cljs.core.count.call(null,c__25601__auto___32923);
var G__32927 = (0);
seq__32890_32912 = G__32924;
chunk__32891_32913 = G__32925;
count__32892_32914 = G__32926;
i__32893_32915 = G__32927;
continue;
} else {
var f_32928 = cljs.core.first.call(null,seq__32890_32922__$1);
cljs.core.println.call(null,"  ",f_32928);

var G__32929 = cljs.core.next.call(null,seq__32890_32922__$1);
var G__32930 = null;
var G__32931 = (0);
var G__32932 = (0);
seq__32890_32912 = G__32929;
chunk__32891_32913 = G__32930;
count__32892_32914 = G__32931;
i__32893_32915 = G__32932;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32933 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24790__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32933);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32933)))?cljs.core.second.call(null,arglists_32933):arglists_32933));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32894_32934 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32895_32935 = null;
var count__32896_32936 = (0);
var i__32897_32937 = (0);
while(true){
if((i__32897_32937 < count__32896_32936)){
var vec__32898_32938 = cljs.core._nth.call(null,chunk__32895_32935,i__32897_32937);
var name_32939 = cljs.core.nth.call(null,vec__32898_32938,(0),null);
var map__32901_32940 = cljs.core.nth.call(null,vec__32898_32938,(1),null);
var map__32901_32941__$1 = ((((!((map__32901_32940 == null)))?((((map__32901_32940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32901_32940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32901_32940):map__32901_32940);
var doc_32942 = cljs.core.get.call(null,map__32901_32941__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32943 = cljs.core.get.call(null,map__32901_32941__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32939);

cljs.core.println.call(null," ",arglists_32943);

if(cljs.core.truth_(doc_32942)){
cljs.core.println.call(null," ",doc_32942);
} else {
}

var G__32944 = seq__32894_32934;
var G__32945 = chunk__32895_32935;
var G__32946 = count__32896_32936;
var G__32947 = (i__32897_32937 + (1));
seq__32894_32934 = G__32944;
chunk__32895_32935 = G__32945;
count__32896_32936 = G__32946;
i__32897_32937 = G__32947;
continue;
} else {
var temp__4657__auto___32948 = cljs.core.seq.call(null,seq__32894_32934);
if(temp__4657__auto___32948){
var seq__32894_32949__$1 = temp__4657__auto___32948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32894_32949__$1)){
var c__25601__auto___32950 = cljs.core.chunk_first.call(null,seq__32894_32949__$1);
var G__32951 = cljs.core.chunk_rest.call(null,seq__32894_32949__$1);
var G__32952 = c__25601__auto___32950;
var G__32953 = cljs.core.count.call(null,c__25601__auto___32950);
var G__32954 = (0);
seq__32894_32934 = G__32951;
chunk__32895_32935 = G__32952;
count__32896_32936 = G__32953;
i__32897_32937 = G__32954;
continue;
} else {
var vec__32903_32955 = cljs.core.first.call(null,seq__32894_32949__$1);
var name_32956 = cljs.core.nth.call(null,vec__32903_32955,(0),null);
var map__32906_32957 = cljs.core.nth.call(null,vec__32903_32955,(1),null);
var map__32906_32958__$1 = ((((!((map__32906_32957 == null)))?((((map__32906_32957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32906_32957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32906_32957):map__32906_32957);
var doc_32959 = cljs.core.get.call(null,map__32906_32958__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32960 = cljs.core.get.call(null,map__32906_32958__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32956);

cljs.core.println.call(null," ",arglists_32960);

if(cljs.core.truth_(doc_32959)){
cljs.core.println.call(null," ",doc_32959);
} else {
}

var G__32961 = cljs.core.next.call(null,seq__32894_32949__$1);
var G__32962 = null;
var G__32963 = (0);
var G__32964 = (0);
seq__32894_32934 = G__32961;
chunk__32895_32935 = G__32962;
count__32896_32936 = G__32963;
i__32897_32937 = G__32964;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32908 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32909 = null;
var count__32910 = (0);
var i__32911 = (0);
while(true){
if((i__32911 < count__32910)){
var role = cljs.core._nth.call(null,chunk__32909,i__32911);
var temp__4657__auto___32965__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32965__$1)){
var spec_32966 = temp__4657__auto___32965__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32966));
} else {
}

var G__32967 = seq__32908;
var G__32968 = chunk__32909;
var G__32969 = count__32910;
var G__32970 = (i__32911 + (1));
seq__32908 = G__32967;
chunk__32909 = G__32968;
count__32910 = G__32969;
i__32911 = G__32970;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32908);
if(temp__4657__auto____$1){
var seq__32908__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32908__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__32908__$1);
var G__32971 = cljs.core.chunk_rest.call(null,seq__32908__$1);
var G__32972 = c__25601__auto__;
var G__32973 = cljs.core.count.call(null,c__25601__auto__);
var G__32974 = (0);
seq__32908 = G__32971;
chunk__32909 = G__32972;
count__32910 = G__32973;
i__32911 = G__32974;
continue;
} else {
var role = cljs.core.first.call(null,seq__32908__$1);
var temp__4657__auto___32975__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32975__$2)){
var spec_32976 = temp__4657__auto___32975__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32976));
} else {
}

var G__32977 = cljs.core.next.call(null,seq__32908__$1);
var G__32978 = null;
var G__32979 = (0);
var G__32980 = (0);
seq__32908 = G__32977;
chunk__32909 = G__32978;
count__32910 = G__32979;
i__32911 = G__32980;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1478292545704