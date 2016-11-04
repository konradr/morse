// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35016 = [];
var len__25865__auto___35019 = arguments.length;
var i__25866__auto___35020 = (0);
while(true){
if((i__25866__auto___35020 < len__25865__auto___35019)){
args35016.push((arguments[i__25866__auto___35020]));

var G__35021 = (i__25866__auto___35020 + (1));
i__25866__auto___35020 = G__35021;
continue;
} else {
}
break;
}

var G__35018 = args35016.length;
switch (G__35018) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35016.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35024 = arguments.length;
var i__25866__auto___35025 = (0);
while(true){
if((i__25866__auto___35025 < len__25865__auto___35024)){
args__25872__auto__.push((arguments[i__25866__auto___35025]));

var G__35026 = (i__25866__auto___35025 + (1));
i__25866__auto___35025 = G__35026;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35023){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35023));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35028 = arguments.length;
var i__25866__auto___35029 = (0);
while(true){
if((i__25866__auto___35029 < len__25865__auto___35028)){
args__25872__auto__.push((arguments[i__25866__auto___35029]));

var G__35030 = (i__25866__auto___35029 + (1));
i__25866__auto___35029 = G__35030;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35027){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35027));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35031 = cljs.core._EQ_;
var expr__35032 = (function (){var or__24790__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35035){if((e35035 instanceof Error)){
var e = e35035;
return false;
} else {
throw e35035;

}
}})();
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35031.call(null,"true",expr__35032))){
return true;
} else {
if(cljs.core.truth_(pred__35031.call(null,"false",expr__35032))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35032)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e35037){if((e35037 instanceof Error)){
var e = e35037;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35037;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35038){
var map__35041 = p__35038;
var map__35041__$1 = ((((!((map__35041 == null)))?((((map__35041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35041):map__35041);
var message = cljs.core.get.call(null,map__35041__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35041__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24790__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24778__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24778__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24778__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27656__auto___35203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___35203,ch){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___35203,ch){
return (function (state_35172){
var state_val_35173 = (state_35172[(1)]);
if((state_val_35173 === (7))){
var inst_35168 = (state_35172[(2)]);
var state_35172__$1 = state_35172;
var statearr_35174_35204 = state_35172__$1;
(statearr_35174_35204[(2)] = inst_35168);

(statearr_35174_35204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (1))){
var state_35172__$1 = state_35172;
var statearr_35175_35205 = state_35172__$1;
(statearr_35175_35205[(2)] = null);

(statearr_35175_35205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (4))){
var inst_35125 = (state_35172[(7)]);
var inst_35125__$1 = (state_35172[(2)]);
var state_35172__$1 = (function (){var statearr_35176 = state_35172;
(statearr_35176[(7)] = inst_35125__$1);

return statearr_35176;
})();
if(cljs.core.truth_(inst_35125__$1)){
var statearr_35177_35206 = state_35172__$1;
(statearr_35177_35206[(1)] = (5));

} else {
var statearr_35178_35207 = state_35172__$1;
(statearr_35178_35207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (15))){
var inst_35132 = (state_35172[(8)]);
var inst_35147 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35132);
var inst_35148 = cljs.core.first.call(null,inst_35147);
var inst_35149 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35148);
var inst_35150 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35149)].join('');
var inst_35151 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35150);
var state_35172__$1 = state_35172;
var statearr_35179_35208 = state_35172__$1;
(statearr_35179_35208[(2)] = inst_35151);

(statearr_35179_35208[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (13))){
var inst_35156 = (state_35172[(2)]);
var state_35172__$1 = state_35172;
var statearr_35180_35209 = state_35172__$1;
(statearr_35180_35209[(2)] = inst_35156);

(statearr_35180_35209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (6))){
var state_35172__$1 = state_35172;
var statearr_35181_35210 = state_35172__$1;
(statearr_35181_35210[(2)] = null);

(statearr_35181_35210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (17))){
var inst_35154 = (state_35172[(2)]);
var state_35172__$1 = state_35172;
var statearr_35182_35211 = state_35172__$1;
(statearr_35182_35211[(2)] = inst_35154);

(statearr_35182_35211[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (3))){
var inst_35170 = (state_35172[(2)]);
var state_35172__$1 = state_35172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35172__$1,inst_35170);
} else {
if((state_val_35173 === (12))){
var inst_35131 = (state_35172[(9)]);
var inst_35145 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35131,opts);
var state_35172__$1 = state_35172;
if(cljs.core.truth_(inst_35145)){
var statearr_35183_35212 = state_35172__$1;
(statearr_35183_35212[(1)] = (15));

} else {
var statearr_35184_35213 = state_35172__$1;
(statearr_35184_35213[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (2))){
var state_35172__$1 = state_35172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35172__$1,(4),ch);
} else {
if((state_val_35173 === (11))){
var inst_35132 = (state_35172[(8)]);
var inst_35137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35138 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35132);
var inst_35139 = cljs.core.async.timeout.call(null,(1000));
var inst_35140 = [inst_35138,inst_35139];
var inst_35141 = (new cljs.core.PersistentVector(null,2,(5),inst_35137,inst_35140,null));
var state_35172__$1 = state_35172;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35172__$1,(14),inst_35141);
} else {
if((state_val_35173 === (9))){
var inst_35132 = (state_35172[(8)]);
var inst_35158 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35159 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35132);
var inst_35160 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35159);
var inst_35161 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35160)].join('');
var inst_35162 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35161);
var state_35172__$1 = (function (){var statearr_35185 = state_35172;
(statearr_35185[(10)] = inst_35158);

return statearr_35185;
})();
var statearr_35186_35214 = state_35172__$1;
(statearr_35186_35214[(2)] = inst_35162);

(statearr_35186_35214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (5))){
var inst_35125 = (state_35172[(7)]);
var inst_35127 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35128 = (new cljs.core.PersistentArrayMap(null,2,inst_35127,null));
var inst_35129 = (new cljs.core.PersistentHashSet(null,inst_35128,null));
var inst_35130 = figwheel.client.focus_msgs.call(null,inst_35129,inst_35125);
var inst_35131 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35130);
var inst_35132 = cljs.core.first.call(null,inst_35130);
var inst_35133 = figwheel.client.autoload_QMARK_.call(null);
var state_35172__$1 = (function (){var statearr_35187 = state_35172;
(statearr_35187[(9)] = inst_35131);

(statearr_35187[(8)] = inst_35132);

return statearr_35187;
})();
if(cljs.core.truth_(inst_35133)){
var statearr_35188_35215 = state_35172__$1;
(statearr_35188_35215[(1)] = (8));

} else {
var statearr_35189_35216 = state_35172__$1;
(statearr_35189_35216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (14))){
var inst_35143 = (state_35172[(2)]);
var state_35172__$1 = state_35172;
var statearr_35190_35217 = state_35172__$1;
(statearr_35190_35217[(2)] = inst_35143);

(statearr_35190_35217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (16))){
var state_35172__$1 = state_35172;
var statearr_35191_35218 = state_35172__$1;
(statearr_35191_35218[(2)] = null);

(statearr_35191_35218[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (10))){
var inst_35164 = (state_35172[(2)]);
var state_35172__$1 = (function (){var statearr_35192 = state_35172;
(statearr_35192[(11)] = inst_35164);

return statearr_35192;
})();
var statearr_35193_35219 = state_35172__$1;
(statearr_35193_35219[(2)] = null);

(statearr_35193_35219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (8))){
var inst_35131 = (state_35172[(9)]);
var inst_35135 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35131,opts);
var state_35172__$1 = state_35172;
if(cljs.core.truth_(inst_35135)){
var statearr_35194_35220 = state_35172__$1;
(statearr_35194_35220[(1)] = (11));

} else {
var statearr_35195_35221 = state_35172__$1;
(statearr_35195_35221[(1)] = (12));

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
});})(c__27656__auto___35203,ch))
;
return ((function (switch__27544__auto__,c__27656__auto___35203,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27545__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27545__auto____0 = (function (){
var statearr_35199 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35199[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27545__auto__);

(statearr_35199[(1)] = (1));

return statearr_35199;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27545__auto____1 = (function (state_35172){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_35172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e35200){if((e35200 instanceof Object)){
var ex__27548__auto__ = e35200;
var statearr_35201_35222 = state_35172;
(statearr_35201_35222[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35223 = state_35172;
state_35172 = G__35223;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27545__auto__ = function(state_35172){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27545__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27545__auto____1.call(this,state_35172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27545__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27545__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___35203,ch))
})();
var state__27658__auto__ = (function (){var statearr_35202 = f__27657__auto__.call(null);
(statearr_35202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___35203);

return statearr_35202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___35203,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35224_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35224_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35227 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35227){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35226){if((e35226 instanceof Error)){
var e = e35226;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35227], null));
} else {
var e = e35226;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35227))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35228){
var map__35237 = p__35228;
var map__35237__$1 = ((((!((map__35237 == null)))?((((map__35237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35237):map__35237);
var opts = map__35237__$1;
var build_id = cljs.core.get.call(null,map__35237__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35237,map__35237__$1,opts,build_id){
return (function (p__35239){
var vec__35240 = p__35239;
var seq__35241 = cljs.core.seq.call(null,vec__35240);
var first__35242 = cljs.core.first.call(null,seq__35241);
var seq__35241__$1 = cljs.core.next.call(null,seq__35241);
var map__35243 = first__35242;
var map__35243__$1 = ((((!((map__35243 == null)))?((((map__35243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35243):map__35243);
var msg = map__35243__$1;
var msg_name = cljs.core.get.call(null,map__35243__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35241__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35240,seq__35241,first__35242,seq__35241__$1,map__35243,map__35243__$1,msg,msg_name,_,map__35237,map__35237__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35240,seq__35241,first__35242,seq__35241__$1,map__35243,map__35243__$1,msg,msg_name,_,map__35237,map__35237__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35237,map__35237__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35251){
var vec__35252 = p__35251;
var seq__35253 = cljs.core.seq.call(null,vec__35252);
var first__35254 = cljs.core.first.call(null,seq__35253);
var seq__35253__$1 = cljs.core.next.call(null,seq__35253);
var map__35255 = first__35254;
var map__35255__$1 = ((((!((map__35255 == null)))?((((map__35255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35255):map__35255);
var msg = map__35255__$1;
var msg_name = cljs.core.get.call(null,map__35255__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35253__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35257){
var map__35269 = p__35257;
var map__35269__$1 = ((((!((map__35269 == null)))?((((map__35269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35269):map__35269);
var on_compile_warning = cljs.core.get.call(null,map__35269__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35269__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35269,map__35269__$1,on_compile_warning,on_compile_fail){
return (function (p__35271){
var vec__35272 = p__35271;
var seq__35273 = cljs.core.seq.call(null,vec__35272);
var first__35274 = cljs.core.first.call(null,seq__35273);
var seq__35273__$1 = cljs.core.next.call(null,seq__35273);
var map__35275 = first__35274;
var map__35275__$1 = ((((!((map__35275 == null)))?((((map__35275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35275):map__35275);
var msg = map__35275__$1;
var msg_name = cljs.core.get.call(null,map__35275__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35273__$1;
var pred__35277 = cljs.core._EQ_;
var expr__35278 = msg_name;
if(cljs.core.truth_(pred__35277.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35278))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35277.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35278))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35269,map__35269__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto__,msg_hist,msg_names,msg){
return (function (state_35506){
var state_val_35507 = (state_35506[(1)]);
if((state_val_35507 === (7))){
var inst_35426 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
if(cljs.core.truth_(inst_35426)){
var statearr_35508_35558 = state_35506__$1;
(statearr_35508_35558[(1)] = (8));

} else {
var statearr_35509_35559 = state_35506__$1;
(statearr_35509_35559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (20))){
var inst_35500 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35510_35560 = state_35506__$1;
(statearr_35510_35560[(2)] = inst_35500);

(statearr_35510_35560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (27))){
var inst_35496 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35511_35561 = state_35506__$1;
(statearr_35511_35561[(2)] = inst_35496);

(statearr_35511_35561[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (1))){
var inst_35419 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35506__$1 = state_35506;
if(cljs.core.truth_(inst_35419)){
var statearr_35512_35562 = state_35506__$1;
(statearr_35512_35562[(1)] = (2));

} else {
var statearr_35513_35563 = state_35506__$1;
(statearr_35513_35563[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (24))){
var inst_35498 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35514_35564 = state_35506__$1;
(statearr_35514_35564[(2)] = inst_35498);

(statearr_35514_35564[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (4))){
var inst_35504 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35506__$1,inst_35504);
} else {
if((state_val_35507 === (15))){
var inst_35502 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35515_35565 = state_35506__$1;
(statearr_35515_35565[(2)] = inst_35502);

(statearr_35515_35565[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (21))){
var inst_35455 = (state_35506[(2)]);
var inst_35456 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35457 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35456);
var state_35506__$1 = (function (){var statearr_35516 = state_35506;
(statearr_35516[(7)] = inst_35455);

return statearr_35516;
})();
var statearr_35517_35566 = state_35506__$1;
(statearr_35517_35566[(2)] = inst_35457);

(statearr_35517_35566[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (31))){
var inst_35485 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35506__$1 = state_35506;
if(cljs.core.truth_(inst_35485)){
var statearr_35518_35567 = state_35506__$1;
(statearr_35518_35567[(1)] = (34));

} else {
var statearr_35519_35568 = state_35506__$1;
(statearr_35519_35568[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (32))){
var inst_35494 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35520_35569 = state_35506__$1;
(statearr_35520_35569[(2)] = inst_35494);

(statearr_35520_35569[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (33))){
var inst_35481 = (state_35506[(2)]);
var inst_35482 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35483 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35482);
var state_35506__$1 = (function (){var statearr_35521 = state_35506;
(statearr_35521[(8)] = inst_35481);

return statearr_35521;
})();
var statearr_35522_35570 = state_35506__$1;
(statearr_35522_35570[(2)] = inst_35483);

(statearr_35522_35570[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (13))){
var inst_35440 = figwheel.client.heads_up.clear.call(null);
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35506__$1,(16),inst_35440);
} else {
if((state_val_35507 === (22))){
var inst_35461 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35462 = figwheel.client.heads_up.append_warning_message.call(null,inst_35461);
var state_35506__$1 = state_35506;
var statearr_35523_35571 = state_35506__$1;
(statearr_35523_35571[(2)] = inst_35462);

(statearr_35523_35571[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (36))){
var inst_35492 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35524_35572 = state_35506__$1;
(statearr_35524_35572[(2)] = inst_35492);

(statearr_35524_35572[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (29))){
var inst_35472 = (state_35506[(2)]);
var inst_35473 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35474 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35473);
var state_35506__$1 = (function (){var statearr_35525 = state_35506;
(statearr_35525[(9)] = inst_35472);

return statearr_35525;
})();
var statearr_35526_35573 = state_35506__$1;
(statearr_35526_35573[(2)] = inst_35474);

(statearr_35526_35573[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (6))){
var inst_35421 = (state_35506[(10)]);
var state_35506__$1 = state_35506;
var statearr_35527_35574 = state_35506__$1;
(statearr_35527_35574[(2)] = inst_35421);

(statearr_35527_35574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (28))){
var inst_35468 = (state_35506[(2)]);
var inst_35469 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35470 = figwheel.client.heads_up.display_warning.call(null,inst_35469);
var state_35506__$1 = (function (){var statearr_35528 = state_35506;
(statearr_35528[(11)] = inst_35468);

return statearr_35528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35506__$1,(29),inst_35470);
} else {
if((state_val_35507 === (25))){
var inst_35466 = figwheel.client.heads_up.clear.call(null);
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35506__$1,(28),inst_35466);
} else {
if((state_val_35507 === (34))){
var inst_35487 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35506__$1,(37),inst_35487);
} else {
if((state_val_35507 === (17))){
var inst_35446 = (state_35506[(2)]);
var inst_35447 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35448 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35447);
var state_35506__$1 = (function (){var statearr_35529 = state_35506;
(statearr_35529[(12)] = inst_35446);

return statearr_35529;
})();
var statearr_35530_35575 = state_35506__$1;
(statearr_35530_35575[(2)] = inst_35448);

(statearr_35530_35575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (3))){
var inst_35438 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35506__$1 = state_35506;
if(cljs.core.truth_(inst_35438)){
var statearr_35531_35576 = state_35506__$1;
(statearr_35531_35576[(1)] = (13));

} else {
var statearr_35532_35577 = state_35506__$1;
(statearr_35532_35577[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (12))){
var inst_35434 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35533_35578 = state_35506__$1;
(statearr_35533_35578[(2)] = inst_35434);

(statearr_35533_35578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (2))){
var inst_35421 = (state_35506[(10)]);
var inst_35421__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35506__$1 = (function (){var statearr_35534 = state_35506;
(statearr_35534[(10)] = inst_35421__$1);

return statearr_35534;
})();
if(cljs.core.truth_(inst_35421__$1)){
var statearr_35535_35579 = state_35506__$1;
(statearr_35535_35579[(1)] = (5));

} else {
var statearr_35536_35580 = state_35506__$1;
(statearr_35536_35580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (23))){
var inst_35464 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35506__$1 = state_35506;
if(cljs.core.truth_(inst_35464)){
var statearr_35537_35581 = state_35506__$1;
(statearr_35537_35581[(1)] = (25));

} else {
var statearr_35538_35582 = state_35506__$1;
(statearr_35538_35582[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (35))){
var state_35506__$1 = state_35506;
var statearr_35539_35583 = state_35506__$1;
(statearr_35539_35583[(2)] = null);

(statearr_35539_35583[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (19))){
var inst_35459 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35506__$1 = state_35506;
if(cljs.core.truth_(inst_35459)){
var statearr_35540_35584 = state_35506__$1;
(statearr_35540_35584[(1)] = (22));

} else {
var statearr_35541_35585 = state_35506__$1;
(statearr_35541_35585[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (11))){
var inst_35430 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35542_35586 = state_35506__$1;
(statearr_35542_35586[(2)] = inst_35430);

(statearr_35542_35586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (9))){
var inst_35432 = figwheel.client.heads_up.clear.call(null);
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35506__$1,(12),inst_35432);
} else {
if((state_val_35507 === (5))){
var inst_35423 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35506__$1 = state_35506;
var statearr_35543_35587 = state_35506__$1;
(statearr_35543_35587[(2)] = inst_35423);

(statearr_35543_35587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (14))){
var inst_35450 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35506__$1 = state_35506;
if(cljs.core.truth_(inst_35450)){
var statearr_35544_35588 = state_35506__$1;
(statearr_35544_35588[(1)] = (18));

} else {
var statearr_35545_35589 = state_35506__$1;
(statearr_35545_35589[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (26))){
var inst_35476 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35506__$1 = state_35506;
if(cljs.core.truth_(inst_35476)){
var statearr_35546_35590 = state_35506__$1;
(statearr_35546_35590[(1)] = (30));

} else {
var statearr_35547_35591 = state_35506__$1;
(statearr_35547_35591[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (16))){
var inst_35442 = (state_35506[(2)]);
var inst_35443 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35444 = figwheel.client.heads_up.display_exception.call(null,inst_35443);
var state_35506__$1 = (function (){var statearr_35548 = state_35506;
(statearr_35548[(13)] = inst_35442);

return statearr_35548;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35506__$1,(17),inst_35444);
} else {
if((state_val_35507 === (30))){
var inst_35478 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35479 = figwheel.client.heads_up.display_warning.call(null,inst_35478);
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35506__$1,(33),inst_35479);
} else {
if((state_val_35507 === (10))){
var inst_35436 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35549_35592 = state_35506__$1;
(statearr_35549_35592[(2)] = inst_35436);

(statearr_35549_35592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (18))){
var inst_35452 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35453 = figwheel.client.heads_up.display_exception.call(null,inst_35452);
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35506__$1,(21),inst_35453);
} else {
if((state_val_35507 === (37))){
var inst_35489 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35550_35593 = state_35506__$1;
(statearr_35550_35593[(2)] = inst_35489);

(statearr_35550_35593[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (8))){
var inst_35428 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35506__$1,(11),inst_35428);
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
});})(c__27656__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27544__auto__,c__27656__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27545__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27545__auto____0 = (function (){
var statearr_35554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35554[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27545__auto__);

(statearr_35554[(1)] = (1));

return statearr_35554;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27545__auto____1 = (function (state_35506){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_35506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e35555){if((e35555 instanceof Object)){
var ex__27548__auto__ = e35555;
var statearr_35556_35594 = state_35506;
(statearr_35556_35594[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35595 = state_35506;
state_35506 = G__35595;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27545__auto__ = function(state_35506){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27545__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27545__auto____1.call(this,state_35506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27545__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27545__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto__,msg_hist,msg_names,msg))
})();
var state__27658__auto__ = (function (){var statearr_35557 = f__27657__auto__.call(null);
(statearr_35557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto__);

return statearr_35557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto__,msg_hist,msg_names,msg))
);

return c__27656__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27656__auto___35658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___35658,ch){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___35658,ch){
return (function (state_35641){
var state_val_35642 = (state_35641[(1)]);
if((state_val_35642 === (1))){
var state_35641__$1 = state_35641;
var statearr_35643_35659 = state_35641__$1;
(statearr_35643_35659[(2)] = null);

(statearr_35643_35659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (2))){
var state_35641__$1 = state_35641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35641__$1,(4),ch);
} else {
if((state_val_35642 === (3))){
var inst_35639 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35641__$1,inst_35639);
} else {
if((state_val_35642 === (4))){
var inst_35629 = (state_35641[(7)]);
var inst_35629__$1 = (state_35641[(2)]);
var state_35641__$1 = (function (){var statearr_35644 = state_35641;
(statearr_35644[(7)] = inst_35629__$1);

return statearr_35644;
})();
if(cljs.core.truth_(inst_35629__$1)){
var statearr_35645_35660 = state_35641__$1;
(statearr_35645_35660[(1)] = (5));

} else {
var statearr_35646_35661 = state_35641__$1;
(statearr_35646_35661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (5))){
var inst_35629 = (state_35641[(7)]);
var inst_35631 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35629);
var state_35641__$1 = state_35641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35641__$1,(8),inst_35631);
} else {
if((state_val_35642 === (6))){
var state_35641__$1 = state_35641;
var statearr_35647_35662 = state_35641__$1;
(statearr_35647_35662[(2)] = null);

(statearr_35647_35662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (7))){
var inst_35637 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
var statearr_35648_35663 = state_35641__$1;
(statearr_35648_35663[(2)] = inst_35637);

(statearr_35648_35663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (8))){
var inst_35633 = (state_35641[(2)]);
var state_35641__$1 = (function (){var statearr_35649 = state_35641;
(statearr_35649[(8)] = inst_35633);

return statearr_35649;
})();
var statearr_35650_35664 = state_35641__$1;
(statearr_35650_35664[(2)] = null);

(statearr_35650_35664[(1)] = (2));


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
});})(c__27656__auto___35658,ch))
;
return ((function (switch__27544__auto__,c__27656__auto___35658,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27545__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27545__auto____0 = (function (){
var statearr_35654 = [null,null,null,null,null,null,null,null,null];
(statearr_35654[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27545__auto__);

(statearr_35654[(1)] = (1));

return statearr_35654;
});
var figwheel$client$heads_up_plugin_$_state_machine__27545__auto____1 = (function (state_35641){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_35641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e35655){if((e35655 instanceof Object)){
var ex__27548__auto__ = e35655;
var statearr_35656_35665 = state_35641;
(statearr_35656_35665[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35666 = state_35641;
state_35641 = G__35666;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27545__auto__ = function(state_35641){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27545__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27545__auto____1.call(this,state_35641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27545__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27545__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___35658,ch))
})();
var state__27658__auto__ = (function (){var statearr_35657 = f__27657__auto__.call(null);
(statearr_35657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___35658);

return statearr_35657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___35658,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto__){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto__){
return (function (state_35687){
var state_val_35688 = (state_35687[(1)]);
if((state_val_35688 === (1))){
var inst_35682 = cljs.core.async.timeout.call(null,(3000));
var state_35687__$1 = state_35687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35687__$1,(2),inst_35682);
} else {
if((state_val_35688 === (2))){
var inst_35684 = (state_35687[(2)]);
var inst_35685 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35687__$1 = (function (){var statearr_35689 = state_35687;
(statearr_35689[(7)] = inst_35684);

return statearr_35689;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35687__$1,inst_35685);
} else {
return null;
}
}
});})(c__27656__auto__))
;
return ((function (switch__27544__auto__,c__27656__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27545__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27545__auto____0 = (function (){
var statearr_35693 = [null,null,null,null,null,null,null,null];
(statearr_35693[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27545__auto__);

(statearr_35693[(1)] = (1));

return statearr_35693;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27545__auto____1 = (function (state_35687){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_35687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e35694){if((e35694 instanceof Object)){
var ex__27548__auto__ = e35694;
var statearr_35695_35697 = state_35687;
(statearr_35695_35697[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35698 = state_35687;
state_35687 = G__35698;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27545__auto__ = function(state_35687){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27545__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27545__auto____1.call(this,state_35687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27545__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27545__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto__))
})();
var state__27658__auto__ = (function (){var statearr_35696 = f__27657__auto__.call(null);
(statearr_35696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto__);

return statearr_35696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto__))
);

return c__27656__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35721){
var state_val_35722 = (state_35721[(1)]);
if((state_val_35722 === (1))){
var inst_35715 = cljs.core.async.timeout.call(null,(2000));
var state_35721__$1 = state_35721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35721__$1,(2),inst_35715);
} else {
if((state_val_35722 === (2))){
var inst_35717 = (state_35721[(2)]);
var inst_35718 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35719 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35718);
var state_35721__$1 = (function (){var statearr_35723 = state_35721;
(statearr_35723[(7)] = inst_35717);

return statearr_35723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35721__$1,inst_35719);
} else {
return null;
}
}
});})(c__27656__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27544__auto__,c__27656__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27545__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27545__auto____0 = (function (){
var statearr_35727 = [null,null,null,null,null,null,null,null];
(statearr_35727[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27545__auto__);

(statearr_35727[(1)] = (1));

return statearr_35727;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27545__auto____1 = (function (state_35721){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_35721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e35728){if((e35728 instanceof Object)){
var ex__27548__auto__ = e35728;
var statearr_35729_35731 = state_35721;
(statearr_35729_35731[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35732 = state_35721;
state_35721 = G__35732;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27545__auto__ = function(state_35721){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27545__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27545__auto____1.call(this,state_35721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27545__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27545__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27658__auto__ = (function (){var statearr_35730 = f__27657__auto__.call(null);
(statearr_35730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto__);

return statearr_35730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto__,figwheel_version,temp__4657__auto__))
);

return c__27656__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35733){
var map__35737 = p__35733;
var map__35737__$1 = ((((!((map__35737 == null)))?((((map__35737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35737):map__35737);
var file = cljs.core.get.call(null,map__35737__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35737__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35737__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35739 = "";
var G__35739__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35739),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35739);
var G__35739__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35739__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35739__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = line;
if(cljs.core.truth_(and__24778__auto__)){
return column;
} else {
return and__24778__auto__;
}
})())){
return [cljs.core.str(G__35739__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35739__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35740){
var map__35747 = p__35740;
var map__35747__$1 = ((((!((map__35747 == null)))?((((map__35747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35747):map__35747);
var ed = map__35747__$1;
var formatted_exception = cljs.core.get.call(null,map__35747__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35747__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35747__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35749_35753 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35750_35754 = null;
var count__35751_35755 = (0);
var i__35752_35756 = (0);
while(true){
if((i__35752_35756 < count__35751_35755)){
var msg_35757 = cljs.core._nth.call(null,chunk__35750_35754,i__35752_35756);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35757);

var G__35758 = seq__35749_35753;
var G__35759 = chunk__35750_35754;
var G__35760 = count__35751_35755;
var G__35761 = (i__35752_35756 + (1));
seq__35749_35753 = G__35758;
chunk__35750_35754 = G__35759;
count__35751_35755 = G__35760;
i__35752_35756 = G__35761;
continue;
} else {
var temp__4657__auto___35762 = cljs.core.seq.call(null,seq__35749_35753);
if(temp__4657__auto___35762){
var seq__35749_35763__$1 = temp__4657__auto___35762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35749_35763__$1)){
var c__25601__auto___35764 = cljs.core.chunk_first.call(null,seq__35749_35763__$1);
var G__35765 = cljs.core.chunk_rest.call(null,seq__35749_35763__$1);
var G__35766 = c__25601__auto___35764;
var G__35767 = cljs.core.count.call(null,c__25601__auto___35764);
var G__35768 = (0);
seq__35749_35753 = G__35765;
chunk__35750_35754 = G__35766;
count__35751_35755 = G__35767;
i__35752_35756 = G__35768;
continue;
} else {
var msg_35769 = cljs.core.first.call(null,seq__35749_35763__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35769);

var G__35770 = cljs.core.next.call(null,seq__35749_35763__$1);
var G__35771 = null;
var G__35772 = (0);
var G__35773 = (0);
seq__35749_35753 = G__35770;
chunk__35750_35754 = G__35771;
count__35751_35755 = G__35772;
i__35752_35756 = G__35773;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35774){
var map__35777 = p__35774;
var map__35777__$1 = ((((!((map__35777 == null)))?((((map__35777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35777):map__35777);
var w = map__35777__$1;
var message = cljs.core.get.call(null,map__35777__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24778__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24778__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35789 = cljs.core.seq.call(null,plugins);
var chunk__35790 = null;
var count__35791 = (0);
var i__35792 = (0);
while(true){
if((i__35792 < count__35791)){
var vec__35793 = cljs.core._nth.call(null,chunk__35790,i__35792);
var k = cljs.core.nth.call(null,vec__35793,(0),null);
var plugin = cljs.core.nth.call(null,vec__35793,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35799 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35789,chunk__35790,count__35791,i__35792,pl_35799,vec__35793,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35799.call(null,msg_hist);
});})(seq__35789,chunk__35790,count__35791,i__35792,pl_35799,vec__35793,k,plugin))
);
} else {
}

var G__35800 = seq__35789;
var G__35801 = chunk__35790;
var G__35802 = count__35791;
var G__35803 = (i__35792 + (1));
seq__35789 = G__35800;
chunk__35790 = G__35801;
count__35791 = G__35802;
i__35792 = G__35803;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35789);
if(temp__4657__auto__){
var seq__35789__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35789__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__35789__$1);
var G__35804 = cljs.core.chunk_rest.call(null,seq__35789__$1);
var G__35805 = c__25601__auto__;
var G__35806 = cljs.core.count.call(null,c__25601__auto__);
var G__35807 = (0);
seq__35789 = G__35804;
chunk__35790 = G__35805;
count__35791 = G__35806;
i__35792 = G__35807;
continue;
} else {
var vec__35796 = cljs.core.first.call(null,seq__35789__$1);
var k = cljs.core.nth.call(null,vec__35796,(0),null);
var plugin = cljs.core.nth.call(null,vec__35796,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35808 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35789,chunk__35790,count__35791,i__35792,pl_35808,vec__35796,k,plugin,seq__35789__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35808.call(null,msg_hist);
});})(seq__35789,chunk__35790,count__35791,i__35792,pl_35808,vec__35796,k,plugin,seq__35789__$1,temp__4657__auto__))
);
} else {
}

var G__35809 = cljs.core.next.call(null,seq__35789__$1);
var G__35810 = null;
var G__35811 = (0);
var G__35812 = (0);
seq__35789 = G__35809;
chunk__35790 = G__35810;
count__35791 = G__35811;
i__35792 = G__35812;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35813 = [];
var len__25865__auto___35820 = arguments.length;
var i__25866__auto___35821 = (0);
while(true){
if((i__25866__auto___35821 < len__25865__auto___35820)){
args35813.push((arguments[i__25866__auto___35821]));

var G__35822 = (i__25866__auto___35821 + (1));
i__25866__auto___35821 = G__35822;
continue;
} else {
}
break;
}

var G__35815 = args35813.length;
switch (G__35815) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35813.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35816_35824 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35817_35825 = null;
var count__35818_35826 = (0);
var i__35819_35827 = (0);
while(true){
if((i__35819_35827 < count__35818_35826)){
var msg_35828 = cljs.core._nth.call(null,chunk__35817_35825,i__35819_35827);
figwheel.client.socket.handle_incoming_message.call(null,msg_35828);

var G__35829 = seq__35816_35824;
var G__35830 = chunk__35817_35825;
var G__35831 = count__35818_35826;
var G__35832 = (i__35819_35827 + (1));
seq__35816_35824 = G__35829;
chunk__35817_35825 = G__35830;
count__35818_35826 = G__35831;
i__35819_35827 = G__35832;
continue;
} else {
var temp__4657__auto___35833 = cljs.core.seq.call(null,seq__35816_35824);
if(temp__4657__auto___35833){
var seq__35816_35834__$1 = temp__4657__auto___35833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35816_35834__$1)){
var c__25601__auto___35835 = cljs.core.chunk_first.call(null,seq__35816_35834__$1);
var G__35836 = cljs.core.chunk_rest.call(null,seq__35816_35834__$1);
var G__35837 = c__25601__auto___35835;
var G__35838 = cljs.core.count.call(null,c__25601__auto___35835);
var G__35839 = (0);
seq__35816_35824 = G__35836;
chunk__35817_35825 = G__35837;
count__35818_35826 = G__35838;
i__35819_35827 = G__35839;
continue;
} else {
var msg_35840 = cljs.core.first.call(null,seq__35816_35834__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35840);

var G__35841 = cljs.core.next.call(null,seq__35816_35834__$1);
var G__35842 = null;
var G__35843 = (0);
var G__35844 = (0);
seq__35816_35824 = G__35841;
chunk__35817_35825 = G__35842;
count__35818_35826 = G__35843;
i__35819_35827 = G__35844;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35849 = arguments.length;
var i__25866__auto___35850 = (0);
while(true){
if((i__25866__auto___35850 < len__25865__auto___35849)){
args__25872__auto__.push((arguments[i__25866__auto___35850]));

var G__35851 = (i__25866__auto___35850 + (1));
i__25866__auto___35850 = G__35851;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35846){
var map__35847 = p__35846;
var map__35847__$1 = ((((!((map__35847 == null)))?((((map__35847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35847):map__35847);
var opts = map__35847__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35845){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35845));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35853){if((e35853 instanceof Error)){
var e = e35853;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35853;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35857){
var map__35858 = p__35857;
var map__35858__$1 = ((((!((map__35858 == null)))?((((map__35858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35858):map__35858);
var msg_name = cljs.core.get.call(null,map__35858__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1478292550777