// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27701 = [];
var len__25865__auto___27707 = arguments.length;
var i__25866__auto___27708 = (0);
while(true){
if((i__25866__auto___27708 < len__25865__auto___27707)){
args27701.push((arguments[i__25866__auto___27708]));

var G__27709 = (i__25866__auto___27708 + (1));
i__25866__auto___27708 = G__27709;
continue;
} else {
}
break;
}

var G__27703 = args27701.length;
switch (G__27703) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27701.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27704 = (function (f,blockable,meta27705){
this.f = f;
this.blockable = blockable;
this.meta27705 = meta27705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27706,meta27705__$1){
var self__ = this;
var _27706__$1 = this;
return (new cljs.core.async.t_cljs$core$async27704(self__.f,self__.blockable,meta27705__$1));
});

cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27706){
var self__ = this;
var _27706__$1 = this;
return self__.meta27705;
});

cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27705","meta27705",2104502253,null)], null);
});

cljs.core.async.t_cljs$core$async27704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27704";

cljs.core.async.t_cljs$core$async27704.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async27704");
});

cljs.core.async.__GT_t_cljs$core$async27704 = (function cljs$core$async$__GT_t_cljs$core$async27704(f__$1,blockable__$1,meta27705){
return (new cljs.core.async.t_cljs$core$async27704(f__$1,blockable__$1,meta27705));
});

}

return (new cljs.core.async.t_cljs$core$async27704(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27713 = [];
var len__25865__auto___27716 = arguments.length;
var i__25866__auto___27717 = (0);
while(true){
if((i__25866__auto___27717 < len__25865__auto___27716)){
args27713.push((arguments[i__25866__auto___27717]));

var G__27718 = (i__25866__auto___27717 + (1));
i__25866__auto___27717 = G__27718;
continue;
} else {
}
break;
}

var G__27715 = args27713.length;
switch (G__27715) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27713.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27720 = [];
var len__25865__auto___27723 = arguments.length;
var i__25866__auto___27724 = (0);
while(true){
if((i__25866__auto___27724 < len__25865__auto___27723)){
args27720.push((arguments[i__25866__auto___27724]));

var G__27725 = (i__25866__auto___27724 + (1));
i__25866__auto___27724 = G__27725;
continue;
} else {
}
break;
}

var G__27722 = args27720.length;
switch (G__27722) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27720.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27727 = [];
var len__25865__auto___27730 = arguments.length;
var i__25866__auto___27731 = (0);
while(true){
if((i__25866__auto___27731 < len__25865__auto___27730)){
args27727.push((arguments[i__25866__auto___27731]));

var G__27732 = (i__25866__auto___27731 + (1));
i__25866__auto___27731 = G__27732;
continue;
} else {
}
break;
}

var G__27729 = args27727.length;
switch (G__27729) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27727.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27734 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27734);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27734,ret){
return (function (){
return fn1.call(null,val_27734);
});})(val_27734,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27735 = [];
var len__25865__auto___27738 = arguments.length;
var i__25866__auto___27739 = (0);
while(true){
if((i__25866__auto___27739 < len__25865__auto___27738)){
args27735.push((arguments[i__25866__auto___27739]));

var G__27740 = (i__25866__auto___27739 + (1));
i__25866__auto___27739 = G__27740;
continue;
} else {
}
break;
}

var G__27737 = args27735.length;
switch (G__27737) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27735.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25705__auto___27742 = n;
var x_27743 = (0);
while(true){
if((x_27743 < n__25705__auto___27742)){
(a[x_27743] = (0));

var G__27744 = (x_27743 + (1));
x_27743 = G__27744;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27745 = (i + (1));
i = G__27745;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27749 = (function (alt_flag,flag,meta27750){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27750 = meta27750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27751,meta27750__$1){
var self__ = this;
var _27751__$1 = this;
return (new cljs.core.async.t_cljs$core$async27749(self__.alt_flag,self__.flag,meta27750__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27751){
var self__ = this;
var _27751__$1 = this;
return self__.meta27750;
});})(flag))
;

cljs.core.async.t_cljs$core$async27749.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27749.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27749.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27750","meta27750",1681812939,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27749";

cljs.core.async.t_cljs$core$async27749.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async27749");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27749 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27749(alt_flag__$1,flag__$1,meta27750){
return (new cljs.core.async.t_cljs$core$async27749(alt_flag__$1,flag__$1,meta27750));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27749(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27755 = (function (alt_handler,flag,cb,meta27756){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27756 = meta27756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27757,meta27756__$1){
var self__ = this;
var _27757__$1 = this;
return (new cljs.core.async.t_cljs$core$async27755(self__.alt_handler,self__.flag,self__.cb,meta27756__$1));
});

cljs.core.async.t_cljs$core$async27755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27757){
var self__ = this;
var _27757__$1 = this;
return self__.meta27756;
});

cljs.core.async.t_cljs$core$async27755.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27755.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27755.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27755.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27756","meta27756",1997314194,null)], null);
});

cljs.core.async.t_cljs$core$async27755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27755";

cljs.core.async.t_cljs$core$async27755.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async27755");
});

cljs.core.async.__GT_t_cljs$core$async27755 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27755(alt_handler__$1,flag__$1,cb__$1,meta27756){
return (new cljs.core.async.t_cljs$core$async27755(alt_handler__$1,flag__$1,cb__$1,meta27756));
});

}

return (new cljs.core.async.t_cljs$core$async27755(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27758_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27758_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27759_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27759_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24790__auto__ = wport;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27760 = (i + (1));
i = G__27760;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24790__auto__ = ret;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24778__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24778__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___27766 = arguments.length;
var i__25866__auto___27767 = (0);
while(true){
if((i__25866__auto___27767 < len__25865__auto___27766)){
args__25872__auto__.push((arguments[i__25866__auto___27767]));

var G__27768 = (i__25866__auto___27767 + (1));
i__25866__auto___27767 = G__27768;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27763){
var map__27764 = p__27763;
var map__27764__$1 = ((((!((map__27764 == null)))?((((map__27764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27764):map__27764);
var opts = map__27764__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27761){
var G__27762 = cljs.core.first.call(null,seq27761);
var seq27761__$1 = cljs.core.next.call(null,seq27761);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27762,seq27761__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27769 = [];
var len__25865__auto___27819 = arguments.length;
var i__25866__auto___27820 = (0);
while(true){
if((i__25866__auto___27820 < len__25865__auto___27819)){
args27769.push((arguments[i__25866__auto___27820]));

var G__27821 = (i__25866__auto___27820 + (1));
i__25866__auto___27820 = G__27821;
continue;
} else {
}
break;
}

var G__27771 = args27769.length;
switch (G__27771) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27769.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27656__auto___27823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___27823){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___27823){
return (function (state_27795){
var state_val_27796 = (state_27795[(1)]);
if((state_val_27796 === (7))){
var inst_27791 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
var statearr_27797_27824 = state_27795__$1;
(statearr_27797_27824[(2)] = inst_27791);

(statearr_27797_27824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (1))){
var state_27795__$1 = state_27795;
var statearr_27798_27825 = state_27795__$1;
(statearr_27798_27825[(2)] = null);

(statearr_27798_27825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (4))){
var inst_27774 = (state_27795[(7)]);
var inst_27774__$1 = (state_27795[(2)]);
var inst_27775 = (inst_27774__$1 == null);
var state_27795__$1 = (function (){var statearr_27799 = state_27795;
(statearr_27799[(7)] = inst_27774__$1);

return statearr_27799;
})();
if(cljs.core.truth_(inst_27775)){
var statearr_27800_27826 = state_27795__$1;
(statearr_27800_27826[(1)] = (5));

} else {
var statearr_27801_27827 = state_27795__$1;
(statearr_27801_27827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (13))){
var state_27795__$1 = state_27795;
var statearr_27802_27828 = state_27795__$1;
(statearr_27802_27828[(2)] = null);

(statearr_27802_27828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (6))){
var inst_27774 = (state_27795[(7)]);
var state_27795__$1 = state_27795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27795__$1,(11),to,inst_27774);
} else {
if((state_val_27796 === (3))){
var inst_27793 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27795__$1,inst_27793);
} else {
if((state_val_27796 === (12))){
var state_27795__$1 = state_27795;
var statearr_27803_27829 = state_27795__$1;
(statearr_27803_27829[(2)] = null);

(statearr_27803_27829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (2))){
var state_27795__$1 = state_27795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27795__$1,(4),from);
} else {
if((state_val_27796 === (11))){
var inst_27784 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
if(cljs.core.truth_(inst_27784)){
var statearr_27804_27830 = state_27795__$1;
(statearr_27804_27830[(1)] = (12));

} else {
var statearr_27805_27831 = state_27795__$1;
(statearr_27805_27831[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (9))){
var state_27795__$1 = state_27795;
var statearr_27806_27832 = state_27795__$1;
(statearr_27806_27832[(2)] = null);

(statearr_27806_27832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (5))){
var state_27795__$1 = state_27795;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27807_27833 = state_27795__$1;
(statearr_27807_27833[(1)] = (8));

} else {
var statearr_27808_27834 = state_27795__$1;
(statearr_27808_27834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (14))){
var inst_27789 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
var statearr_27809_27835 = state_27795__$1;
(statearr_27809_27835[(2)] = inst_27789);

(statearr_27809_27835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (10))){
var inst_27781 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
var statearr_27810_27836 = state_27795__$1;
(statearr_27810_27836[(2)] = inst_27781);

(statearr_27810_27836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (8))){
var inst_27778 = cljs.core.async.close_BANG_.call(null,to);
var state_27795__$1 = state_27795;
var statearr_27811_27837 = state_27795__$1;
(statearr_27811_27837[(2)] = inst_27778);

(statearr_27811_27837[(1)] = (10));


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
});})(c__27656__auto___27823))
;
return ((function (switch__27544__auto__,c__27656__auto___27823){
return (function() {
var cljs$core$async$state_machine__27545__auto__ = null;
var cljs$core$async$state_machine__27545__auto____0 = (function (){
var statearr_27815 = [null,null,null,null,null,null,null,null];
(statearr_27815[(0)] = cljs$core$async$state_machine__27545__auto__);

(statearr_27815[(1)] = (1));

return statearr_27815;
});
var cljs$core$async$state_machine__27545__auto____1 = (function (state_27795){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_27795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e27816){if((e27816 instanceof Object)){
var ex__27548__auto__ = e27816;
var statearr_27817_27838 = state_27795;
(statearr_27817_27838[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27839 = state_27795;
state_27795 = G__27839;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$state_machine__27545__auto__ = function(state_27795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27545__auto____1.call(this,state_27795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27545__auto____0;
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27545__auto____1;
return cljs$core$async$state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___27823))
})();
var state__27658__auto__ = (function (){var statearr_27818 = f__27657__auto__.call(null);
(statearr_27818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___27823);

return statearr_27818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___27823))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28027){
var vec__28028 = p__28027;
var v = cljs.core.nth.call(null,vec__28028,(0),null);
var p = cljs.core.nth.call(null,vec__28028,(1),null);
var job = vec__28028;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27656__auto___28214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___28214,res,vec__28028,v,p,job,jobs,results){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___28214,res,vec__28028,v,p,job,jobs,results){
return (function (state_28035){
var state_val_28036 = (state_28035[(1)]);
if((state_val_28036 === (1))){
var state_28035__$1 = state_28035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28035__$1,(2),res,v);
} else {
if((state_val_28036 === (2))){
var inst_28032 = (state_28035[(2)]);
var inst_28033 = cljs.core.async.close_BANG_.call(null,res);
var state_28035__$1 = (function (){var statearr_28037 = state_28035;
(statearr_28037[(7)] = inst_28032);

return statearr_28037;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28035__$1,inst_28033);
} else {
return null;
}
}
});})(c__27656__auto___28214,res,vec__28028,v,p,job,jobs,results))
;
return ((function (switch__27544__auto__,c__27656__auto___28214,res,vec__28028,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____0 = (function (){
var statearr_28041 = [null,null,null,null,null,null,null,null];
(statearr_28041[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__);

(statearr_28041[(1)] = (1));

return statearr_28041;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____1 = (function (state_28035){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_28035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e28042){if((e28042 instanceof Object)){
var ex__27548__auto__ = e28042;
var statearr_28043_28215 = state_28035;
(statearr_28043_28215[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28216 = state_28035;
state_28035 = G__28216;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__ = function(state_28035){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____1.call(this,state_28035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___28214,res,vec__28028,v,p,job,jobs,results))
})();
var state__27658__auto__ = (function (){var statearr_28044 = f__27657__auto__.call(null);
(statearr_28044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___28214);

return statearr_28044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___28214,res,vec__28028,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28045){
var vec__28046 = p__28045;
var v = cljs.core.nth.call(null,vec__28046,(0),null);
var p = cljs.core.nth.call(null,vec__28046,(1),null);
var job = vec__28046;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25705__auto___28217 = n;
var __28218 = (0);
while(true){
if((__28218 < n__25705__auto___28217)){
var G__28049_28219 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28049_28219) {
case "compute":
var c__27656__auto___28221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28218,c__27656__auto___28221,G__28049_28219,n__25705__auto___28217,jobs,results,process,async){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (__28218,c__27656__auto___28221,G__28049_28219,n__25705__auto___28217,jobs,results,process,async){
return (function (state_28062){
var state_val_28063 = (state_28062[(1)]);
if((state_val_28063 === (1))){
var state_28062__$1 = state_28062;
var statearr_28064_28222 = state_28062__$1;
(statearr_28064_28222[(2)] = null);

(statearr_28064_28222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (2))){
var state_28062__$1 = state_28062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28062__$1,(4),jobs);
} else {
if((state_val_28063 === (3))){
var inst_28060 = (state_28062[(2)]);
var state_28062__$1 = state_28062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28062__$1,inst_28060);
} else {
if((state_val_28063 === (4))){
var inst_28052 = (state_28062[(2)]);
var inst_28053 = process.call(null,inst_28052);
var state_28062__$1 = state_28062;
if(cljs.core.truth_(inst_28053)){
var statearr_28065_28223 = state_28062__$1;
(statearr_28065_28223[(1)] = (5));

} else {
var statearr_28066_28224 = state_28062__$1;
(statearr_28066_28224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (5))){
var state_28062__$1 = state_28062;
var statearr_28067_28225 = state_28062__$1;
(statearr_28067_28225[(2)] = null);

(statearr_28067_28225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (6))){
var state_28062__$1 = state_28062;
var statearr_28068_28226 = state_28062__$1;
(statearr_28068_28226[(2)] = null);

(statearr_28068_28226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (7))){
var inst_28058 = (state_28062[(2)]);
var state_28062__$1 = state_28062;
var statearr_28069_28227 = state_28062__$1;
(statearr_28069_28227[(2)] = inst_28058);

(statearr_28069_28227[(1)] = (3));


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
});})(__28218,c__27656__auto___28221,G__28049_28219,n__25705__auto___28217,jobs,results,process,async))
;
return ((function (__28218,switch__27544__auto__,c__27656__auto___28221,G__28049_28219,n__25705__auto___28217,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____0 = (function (){
var statearr_28073 = [null,null,null,null,null,null,null];
(statearr_28073[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__);

(statearr_28073[(1)] = (1));

return statearr_28073;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____1 = (function (state_28062){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_28062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e28074){if((e28074 instanceof Object)){
var ex__27548__auto__ = e28074;
var statearr_28075_28228 = state_28062;
(statearr_28075_28228[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28229 = state_28062;
state_28062 = G__28229;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__ = function(state_28062){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____1.call(this,state_28062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__;
})()
;})(__28218,switch__27544__auto__,c__27656__auto___28221,G__28049_28219,n__25705__auto___28217,jobs,results,process,async))
})();
var state__27658__auto__ = (function (){var statearr_28076 = f__27657__auto__.call(null);
(statearr_28076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___28221);

return statearr_28076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(__28218,c__27656__auto___28221,G__28049_28219,n__25705__auto___28217,jobs,results,process,async))
);


break;
case "async":
var c__27656__auto___28230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28218,c__27656__auto___28230,G__28049_28219,n__25705__auto___28217,jobs,results,process,async){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (__28218,c__27656__auto___28230,G__28049_28219,n__25705__auto___28217,jobs,results,process,async){
return (function (state_28089){
var state_val_28090 = (state_28089[(1)]);
if((state_val_28090 === (1))){
var state_28089__$1 = state_28089;
var statearr_28091_28231 = state_28089__$1;
(statearr_28091_28231[(2)] = null);

(statearr_28091_28231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (2))){
var state_28089__$1 = state_28089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28089__$1,(4),jobs);
} else {
if((state_val_28090 === (3))){
var inst_28087 = (state_28089[(2)]);
var state_28089__$1 = state_28089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28089__$1,inst_28087);
} else {
if((state_val_28090 === (4))){
var inst_28079 = (state_28089[(2)]);
var inst_28080 = async.call(null,inst_28079);
var state_28089__$1 = state_28089;
if(cljs.core.truth_(inst_28080)){
var statearr_28092_28232 = state_28089__$1;
(statearr_28092_28232[(1)] = (5));

} else {
var statearr_28093_28233 = state_28089__$1;
(statearr_28093_28233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (5))){
var state_28089__$1 = state_28089;
var statearr_28094_28234 = state_28089__$1;
(statearr_28094_28234[(2)] = null);

(statearr_28094_28234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (6))){
var state_28089__$1 = state_28089;
var statearr_28095_28235 = state_28089__$1;
(statearr_28095_28235[(2)] = null);

(statearr_28095_28235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (7))){
var inst_28085 = (state_28089[(2)]);
var state_28089__$1 = state_28089;
var statearr_28096_28236 = state_28089__$1;
(statearr_28096_28236[(2)] = inst_28085);

(statearr_28096_28236[(1)] = (3));


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
});})(__28218,c__27656__auto___28230,G__28049_28219,n__25705__auto___28217,jobs,results,process,async))
;
return ((function (__28218,switch__27544__auto__,c__27656__auto___28230,G__28049_28219,n__25705__auto___28217,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____0 = (function (){
var statearr_28100 = [null,null,null,null,null,null,null];
(statearr_28100[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__);

(statearr_28100[(1)] = (1));

return statearr_28100;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____1 = (function (state_28089){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_28089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e28101){if((e28101 instanceof Object)){
var ex__27548__auto__ = e28101;
var statearr_28102_28237 = state_28089;
(statearr_28102_28237[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28238 = state_28089;
state_28089 = G__28238;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__ = function(state_28089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____1.call(this,state_28089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__;
})()
;})(__28218,switch__27544__auto__,c__27656__auto___28230,G__28049_28219,n__25705__auto___28217,jobs,results,process,async))
})();
var state__27658__auto__ = (function (){var statearr_28103 = f__27657__auto__.call(null);
(statearr_28103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___28230);

return statearr_28103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(__28218,c__27656__auto___28230,G__28049_28219,n__25705__auto___28217,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28239 = (__28218 + (1));
__28218 = G__28239;
continue;
} else {
}
break;
}

var c__27656__auto___28240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___28240,jobs,results,process,async){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___28240,jobs,results,process,async){
return (function (state_28125){
var state_val_28126 = (state_28125[(1)]);
if((state_val_28126 === (1))){
var state_28125__$1 = state_28125;
var statearr_28127_28241 = state_28125__$1;
(statearr_28127_28241[(2)] = null);

(statearr_28127_28241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (2))){
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28125__$1,(4),from);
} else {
if((state_val_28126 === (3))){
var inst_28123 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28125__$1,inst_28123);
} else {
if((state_val_28126 === (4))){
var inst_28106 = (state_28125[(7)]);
var inst_28106__$1 = (state_28125[(2)]);
var inst_28107 = (inst_28106__$1 == null);
var state_28125__$1 = (function (){var statearr_28128 = state_28125;
(statearr_28128[(7)] = inst_28106__$1);

return statearr_28128;
})();
if(cljs.core.truth_(inst_28107)){
var statearr_28129_28242 = state_28125__$1;
(statearr_28129_28242[(1)] = (5));

} else {
var statearr_28130_28243 = state_28125__$1;
(statearr_28130_28243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (5))){
var inst_28109 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28125__$1 = state_28125;
var statearr_28131_28244 = state_28125__$1;
(statearr_28131_28244[(2)] = inst_28109);

(statearr_28131_28244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (6))){
var inst_28111 = (state_28125[(8)]);
var inst_28106 = (state_28125[(7)]);
var inst_28111__$1 = cljs.core.async.chan.call(null,(1));
var inst_28112 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28113 = [inst_28106,inst_28111__$1];
var inst_28114 = (new cljs.core.PersistentVector(null,2,(5),inst_28112,inst_28113,null));
var state_28125__$1 = (function (){var statearr_28132 = state_28125;
(statearr_28132[(8)] = inst_28111__$1);

return statearr_28132;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28125__$1,(8),jobs,inst_28114);
} else {
if((state_val_28126 === (7))){
var inst_28121 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28133_28245 = state_28125__$1;
(statearr_28133_28245[(2)] = inst_28121);

(statearr_28133_28245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (8))){
var inst_28111 = (state_28125[(8)]);
var inst_28116 = (state_28125[(2)]);
var state_28125__$1 = (function (){var statearr_28134 = state_28125;
(statearr_28134[(9)] = inst_28116);

return statearr_28134;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28125__$1,(9),results,inst_28111);
} else {
if((state_val_28126 === (9))){
var inst_28118 = (state_28125[(2)]);
var state_28125__$1 = (function (){var statearr_28135 = state_28125;
(statearr_28135[(10)] = inst_28118);

return statearr_28135;
})();
var statearr_28136_28246 = state_28125__$1;
(statearr_28136_28246[(2)] = null);

(statearr_28136_28246[(1)] = (2));


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
});})(c__27656__auto___28240,jobs,results,process,async))
;
return ((function (switch__27544__auto__,c__27656__auto___28240,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____0 = (function (){
var statearr_28140 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__);

(statearr_28140[(1)] = (1));

return statearr_28140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____1 = (function (state_28125){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_28125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e28141){if((e28141 instanceof Object)){
var ex__27548__auto__ = e28141;
var statearr_28142_28247 = state_28125;
(statearr_28142_28247[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28248 = state_28125;
state_28125 = G__28248;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__ = function(state_28125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____1.call(this,state_28125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___28240,jobs,results,process,async))
})();
var state__27658__auto__ = (function (){var statearr_28143 = f__27657__auto__.call(null);
(statearr_28143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___28240);

return statearr_28143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___28240,jobs,results,process,async))
);


var c__27656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto__,jobs,results,process,async){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto__,jobs,results,process,async){
return (function (state_28181){
var state_val_28182 = (state_28181[(1)]);
if((state_val_28182 === (7))){
var inst_28177 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
var statearr_28183_28249 = state_28181__$1;
(statearr_28183_28249[(2)] = inst_28177);

(statearr_28183_28249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (20))){
var state_28181__$1 = state_28181;
var statearr_28184_28250 = state_28181__$1;
(statearr_28184_28250[(2)] = null);

(statearr_28184_28250[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (1))){
var state_28181__$1 = state_28181;
var statearr_28185_28251 = state_28181__$1;
(statearr_28185_28251[(2)] = null);

(statearr_28185_28251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (4))){
var inst_28146 = (state_28181[(7)]);
var inst_28146__$1 = (state_28181[(2)]);
var inst_28147 = (inst_28146__$1 == null);
var state_28181__$1 = (function (){var statearr_28186 = state_28181;
(statearr_28186[(7)] = inst_28146__$1);

return statearr_28186;
})();
if(cljs.core.truth_(inst_28147)){
var statearr_28187_28252 = state_28181__$1;
(statearr_28187_28252[(1)] = (5));

} else {
var statearr_28188_28253 = state_28181__$1;
(statearr_28188_28253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (15))){
var inst_28159 = (state_28181[(8)]);
var state_28181__$1 = state_28181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28181__$1,(18),to,inst_28159);
} else {
if((state_val_28182 === (21))){
var inst_28172 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
var statearr_28189_28254 = state_28181__$1;
(statearr_28189_28254[(2)] = inst_28172);

(statearr_28189_28254[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (13))){
var inst_28174 = (state_28181[(2)]);
var state_28181__$1 = (function (){var statearr_28190 = state_28181;
(statearr_28190[(9)] = inst_28174);

return statearr_28190;
})();
var statearr_28191_28255 = state_28181__$1;
(statearr_28191_28255[(2)] = null);

(statearr_28191_28255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (6))){
var inst_28146 = (state_28181[(7)]);
var state_28181__$1 = state_28181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28181__$1,(11),inst_28146);
} else {
if((state_val_28182 === (17))){
var inst_28167 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
if(cljs.core.truth_(inst_28167)){
var statearr_28192_28256 = state_28181__$1;
(statearr_28192_28256[(1)] = (19));

} else {
var statearr_28193_28257 = state_28181__$1;
(statearr_28193_28257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (3))){
var inst_28179 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28181__$1,inst_28179);
} else {
if((state_val_28182 === (12))){
var inst_28156 = (state_28181[(10)]);
var state_28181__$1 = state_28181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28181__$1,(14),inst_28156);
} else {
if((state_val_28182 === (2))){
var state_28181__$1 = state_28181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28181__$1,(4),results);
} else {
if((state_val_28182 === (19))){
var state_28181__$1 = state_28181;
var statearr_28194_28258 = state_28181__$1;
(statearr_28194_28258[(2)] = null);

(statearr_28194_28258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (11))){
var inst_28156 = (state_28181[(2)]);
var state_28181__$1 = (function (){var statearr_28195 = state_28181;
(statearr_28195[(10)] = inst_28156);

return statearr_28195;
})();
var statearr_28196_28259 = state_28181__$1;
(statearr_28196_28259[(2)] = null);

(statearr_28196_28259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (9))){
var state_28181__$1 = state_28181;
var statearr_28197_28260 = state_28181__$1;
(statearr_28197_28260[(2)] = null);

(statearr_28197_28260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (5))){
var state_28181__$1 = state_28181;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28198_28261 = state_28181__$1;
(statearr_28198_28261[(1)] = (8));

} else {
var statearr_28199_28262 = state_28181__$1;
(statearr_28199_28262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (14))){
var inst_28159 = (state_28181[(8)]);
var inst_28161 = (state_28181[(11)]);
var inst_28159__$1 = (state_28181[(2)]);
var inst_28160 = (inst_28159__$1 == null);
var inst_28161__$1 = cljs.core.not.call(null,inst_28160);
var state_28181__$1 = (function (){var statearr_28200 = state_28181;
(statearr_28200[(8)] = inst_28159__$1);

(statearr_28200[(11)] = inst_28161__$1);

return statearr_28200;
})();
if(inst_28161__$1){
var statearr_28201_28263 = state_28181__$1;
(statearr_28201_28263[(1)] = (15));

} else {
var statearr_28202_28264 = state_28181__$1;
(statearr_28202_28264[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (16))){
var inst_28161 = (state_28181[(11)]);
var state_28181__$1 = state_28181;
var statearr_28203_28265 = state_28181__$1;
(statearr_28203_28265[(2)] = inst_28161);

(statearr_28203_28265[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (10))){
var inst_28153 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
var statearr_28204_28266 = state_28181__$1;
(statearr_28204_28266[(2)] = inst_28153);

(statearr_28204_28266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (18))){
var inst_28164 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
var statearr_28205_28267 = state_28181__$1;
(statearr_28205_28267[(2)] = inst_28164);

(statearr_28205_28267[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (8))){
var inst_28150 = cljs.core.async.close_BANG_.call(null,to);
var state_28181__$1 = state_28181;
var statearr_28206_28268 = state_28181__$1;
(statearr_28206_28268[(2)] = inst_28150);

(statearr_28206_28268[(1)] = (10));


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
});})(c__27656__auto__,jobs,results,process,async))
;
return ((function (switch__27544__auto__,c__27656__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____0 = (function (){
var statearr_28210 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28210[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__);

(statearr_28210[(1)] = (1));

return statearr_28210;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____1 = (function (state_28181){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_28181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e28211){if((e28211 instanceof Object)){
var ex__27548__auto__ = e28211;
var statearr_28212_28269 = state_28181;
(statearr_28212_28269[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28270 = state_28181;
state_28181 = G__28270;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__ = function(state_28181){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____1.call(this,state_28181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27545__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto__,jobs,results,process,async))
})();
var state__27658__auto__ = (function (){var statearr_28213 = f__27657__auto__.call(null);
(statearr_28213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto__);

return statearr_28213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto__,jobs,results,process,async))
);

return c__27656__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28271 = [];
var len__25865__auto___28274 = arguments.length;
var i__25866__auto___28275 = (0);
while(true){
if((i__25866__auto___28275 < len__25865__auto___28274)){
args28271.push((arguments[i__25866__auto___28275]));

var G__28276 = (i__25866__auto___28275 + (1));
i__25866__auto___28275 = G__28276;
continue;
} else {
}
break;
}

var G__28273 = args28271.length;
switch (G__28273) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28271.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28278 = [];
var len__25865__auto___28281 = arguments.length;
var i__25866__auto___28282 = (0);
while(true){
if((i__25866__auto___28282 < len__25865__auto___28281)){
args28278.push((arguments[i__25866__auto___28282]));

var G__28283 = (i__25866__auto___28282 + (1));
i__25866__auto___28282 = G__28283;
continue;
} else {
}
break;
}

var G__28280 = args28278.length;
switch (G__28280) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28278.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28285 = [];
var len__25865__auto___28338 = arguments.length;
var i__25866__auto___28339 = (0);
while(true){
if((i__25866__auto___28339 < len__25865__auto___28338)){
args28285.push((arguments[i__25866__auto___28339]));

var G__28340 = (i__25866__auto___28339 + (1));
i__25866__auto___28339 = G__28340;
continue;
} else {
}
break;
}

var G__28287 = args28285.length;
switch (G__28287) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28285.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27656__auto___28342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___28342,tc,fc){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___28342,tc,fc){
return (function (state_28313){
var state_val_28314 = (state_28313[(1)]);
if((state_val_28314 === (7))){
var inst_28309 = (state_28313[(2)]);
var state_28313__$1 = state_28313;
var statearr_28315_28343 = state_28313__$1;
(statearr_28315_28343[(2)] = inst_28309);

(statearr_28315_28343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (1))){
var state_28313__$1 = state_28313;
var statearr_28316_28344 = state_28313__$1;
(statearr_28316_28344[(2)] = null);

(statearr_28316_28344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (4))){
var inst_28290 = (state_28313[(7)]);
var inst_28290__$1 = (state_28313[(2)]);
var inst_28291 = (inst_28290__$1 == null);
var state_28313__$1 = (function (){var statearr_28317 = state_28313;
(statearr_28317[(7)] = inst_28290__$1);

return statearr_28317;
})();
if(cljs.core.truth_(inst_28291)){
var statearr_28318_28345 = state_28313__$1;
(statearr_28318_28345[(1)] = (5));

} else {
var statearr_28319_28346 = state_28313__$1;
(statearr_28319_28346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (13))){
var state_28313__$1 = state_28313;
var statearr_28320_28347 = state_28313__$1;
(statearr_28320_28347[(2)] = null);

(statearr_28320_28347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (6))){
var inst_28290 = (state_28313[(7)]);
var inst_28296 = p.call(null,inst_28290);
var state_28313__$1 = state_28313;
if(cljs.core.truth_(inst_28296)){
var statearr_28321_28348 = state_28313__$1;
(statearr_28321_28348[(1)] = (9));

} else {
var statearr_28322_28349 = state_28313__$1;
(statearr_28322_28349[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (3))){
var inst_28311 = (state_28313[(2)]);
var state_28313__$1 = state_28313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28313__$1,inst_28311);
} else {
if((state_val_28314 === (12))){
var state_28313__$1 = state_28313;
var statearr_28323_28350 = state_28313__$1;
(statearr_28323_28350[(2)] = null);

(statearr_28323_28350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (2))){
var state_28313__$1 = state_28313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28313__$1,(4),ch);
} else {
if((state_val_28314 === (11))){
var inst_28290 = (state_28313[(7)]);
var inst_28300 = (state_28313[(2)]);
var state_28313__$1 = state_28313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28313__$1,(8),inst_28300,inst_28290);
} else {
if((state_val_28314 === (9))){
var state_28313__$1 = state_28313;
var statearr_28324_28351 = state_28313__$1;
(statearr_28324_28351[(2)] = tc);

(statearr_28324_28351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (5))){
var inst_28293 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28294 = cljs.core.async.close_BANG_.call(null,fc);
var state_28313__$1 = (function (){var statearr_28325 = state_28313;
(statearr_28325[(8)] = inst_28293);

return statearr_28325;
})();
var statearr_28326_28352 = state_28313__$1;
(statearr_28326_28352[(2)] = inst_28294);

(statearr_28326_28352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (14))){
var inst_28307 = (state_28313[(2)]);
var state_28313__$1 = state_28313;
var statearr_28327_28353 = state_28313__$1;
(statearr_28327_28353[(2)] = inst_28307);

(statearr_28327_28353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (10))){
var state_28313__$1 = state_28313;
var statearr_28328_28354 = state_28313__$1;
(statearr_28328_28354[(2)] = fc);

(statearr_28328_28354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (8))){
var inst_28302 = (state_28313[(2)]);
var state_28313__$1 = state_28313;
if(cljs.core.truth_(inst_28302)){
var statearr_28329_28355 = state_28313__$1;
(statearr_28329_28355[(1)] = (12));

} else {
var statearr_28330_28356 = state_28313__$1;
(statearr_28330_28356[(1)] = (13));

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
});})(c__27656__auto___28342,tc,fc))
;
return ((function (switch__27544__auto__,c__27656__auto___28342,tc,fc){
return (function() {
var cljs$core$async$state_machine__27545__auto__ = null;
var cljs$core$async$state_machine__27545__auto____0 = (function (){
var statearr_28334 = [null,null,null,null,null,null,null,null,null];
(statearr_28334[(0)] = cljs$core$async$state_machine__27545__auto__);

(statearr_28334[(1)] = (1));

return statearr_28334;
});
var cljs$core$async$state_machine__27545__auto____1 = (function (state_28313){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_28313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e28335){if((e28335 instanceof Object)){
var ex__27548__auto__ = e28335;
var statearr_28336_28357 = state_28313;
(statearr_28336_28357[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28358 = state_28313;
state_28313 = G__28358;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$state_machine__27545__auto__ = function(state_28313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27545__auto____1.call(this,state_28313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27545__auto____0;
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27545__auto____1;
return cljs$core$async$state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___28342,tc,fc))
})();
var state__27658__auto__ = (function (){var statearr_28337 = f__27657__auto__.call(null);
(statearr_28337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___28342);

return statearr_28337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___28342,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto__){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto__){
return (function (state_28422){
var state_val_28423 = (state_28422[(1)]);
if((state_val_28423 === (7))){
var inst_28418 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28424_28445 = state_28422__$1;
(statearr_28424_28445[(2)] = inst_28418);

(statearr_28424_28445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (1))){
var inst_28402 = init;
var state_28422__$1 = (function (){var statearr_28425 = state_28422;
(statearr_28425[(7)] = inst_28402);

return statearr_28425;
})();
var statearr_28426_28446 = state_28422__$1;
(statearr_28426_28446[(2)] = null);

(statearr_28426_28446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (4))){
var inst_28405 = (state_28422[(8)]);
var inst_28405__$1 = (state_28422[(2)]);
var inst_28406 = (inst_28405__$1 == null);
var state_28422__$1 = (function (){var statearr_28427 = state_28422;
(statearr_28427[(8)] = inst_28405__$1);

return statearr_28427;
})();
if(cljs.core.truth_(inst_28406)){
var statearr_28428_28447 = state_28422__$1;
(statearr_28428_28447[(1)] = (5));

} else {
var statearr_28429_28448 = state_28422__$1;
(statearr_28429_28448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (6))){
var inst_28409 = (state_28422[(9)]);
var inst_28402 = (state_28422[(7)]);
var inst_28405 = (state_28422[(8)]);
var inst_28409__$1 = f.call(null,inst_28402,inst_28405);
var inst_28410 = cljs.core.reduced_QMARK_.call(null,inst_28409__$1);
var state_28422__$1 = (function (){var statearr_28430 = state_28422;
(statearr_28430[(9)] = inst_28409__$1);

return statearr_28430;
})();
if(inst_28410){
var statearr_28431_28449 = state_28422__$1;
(statearr_28431_28449[(1)] = (8));

} else {
var statearr_28432_28450 = state_28422__$1;
(statearr_28432_28450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (3))){
var inst_28420 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28422__$1,inst_28420);
} else {
if((state_val_28423 === (2))){
var state_28422__$1 = state_28422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28422__$1,(4),ch);
} else {
if((state_val_28423 === (9))){
var inst_28409 = (state_28422[(9)]);
var inst_28402 = inst_28409;
var state_28422__$1 = (function (){var statearr_28433 = state_28422;
(statearr_28433[(7)] = inst_28402);

return statearr_28433;
})();
var statearr_28434_28451 = state_28422__$1;
(statearr_28434_28451[(2)] = null);

(statearr_28434_28451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (5))){
var inst_28402 = (state_28422[(7)]);
var state_28422__$1 = state_28422;
var statearr_28435_28452 = state_28422__$1;
(statearr_28435_28452[(2)] = inst_28402);

(statearr_28435_28452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (10))){
var inst_28416 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28436_28453 = state_28422__$1;
(statearr_28436_28453[(2)] = inst_28416);

(statearr_28436_28453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (8))){
var inst_28409 = (state_28422[(9)]);
var inst_28412 = cljs.core.deref.call(null,inst_28409);
var state_28422__$1 = state_28422;
var statearr_28437_28454 = state_28422__$1;
(statearr_28437_28454[(2)] = inst_28412);

(statearr_28437_28454[(1)] = (10));


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
});})(c__27656__auto__))
;
return ((function (switch__27544__auto__,c__27656__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27545__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27545__auto____0 = (function (){
var statearr_28441 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28441[(0)] = cljs$core$async$reduce_$_state_machine__27545__auto__);

(statearr_28441[(1)] = (1));

return statearr_28441;
});
var cljs$core$async$reduce_$_state_machine__27545__auto____1 = (function (state_28422){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_28422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e28442){if((e28442 instanceof Object)){
var ex__27548__auto__ = e28442;
var statearr_28443_28455 = state_28422;
(statearr_28443_28455[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28456 = state_28422;
state_28422 = G__28456;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27545__auto__ = function(state_28422){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27545__auto____1.call(this,state_28422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27545__auto____0;
cljs$core$async$reduce_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27545__auto____1;
return cljs$core$async$reduce_$_state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto__))
})();
var state__27658__auto__ = (function (){var statearr_28444 = f__27657__auto__.call(null);
(statearr_28444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto__);

return statearr_28444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto__))
);

return c__27656__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28457 = [];
var len__25865__auto___28509 = arguments.length;
var i__25866__auto___28510 = (0);
while(true){
if((i__25866__auto___28510 < len__25865__auto___28509)){
args28457.push((arguments[i__25866__auto___28510]));

var G__28511 = (i__25866__auto___28510 + (1));
i__25866__auto___28510 = G__28511;
continue;
} else {
}
break;
}

var G__28459 = args28457.length;
switch (G__28459) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28457.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto__){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto__){
return (function (state_28484){
var state_val_28485 = (state_28484[(1)]);
if((state_val_28485 === (7))){
var inst_28466 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
var statearr_28486_28513 = state_28484__$1;
(statearr_28486_28513[(2)] = inst_28466);

(statearr_28486_28513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (1))){
var inst_28460 = cljs.core.seq.call(null,coll);
var inst_28461 = inst_28460;
var state_28484__$1 = (function (){var statearr_28487 = state_28484;
(statearr_28487[(7)] = inst_28461);

return statearr_28487;
})();
var statearr_28488_28514 = state_28484__$1;
(statearr_28488_28514[(2)] = null);

(statearr_28488_28514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (4))){
var inst_28461 = (state_28484[(7)]);
var inst_28464 = cljs.core.first.call(null,inst_28461);
var state_28484__$1 = state_28484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28484__$1,(7),ch,inst_28464);
} else {
if((state_val_28485 === (13))){
var inst_28478 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
var statearr_28489_28515 = state_28484__$1;
(statearr_28489_28515[(2)] = inst_28478);

(statearr_28489_28515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (6))){
var inst_28469 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
if(cljs.core.truth_(inst_28469)){
var statearr_28490_28516 = state_28484__$1;
(statearr_28490_28516[(1)] = (8));

} else {
var statearr_28491_28517 = state_28484__$1;
(statearr_28491_28517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (3))){
var inst_28482 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28484__$1,inst_28482);
} else {
if((state_val_28485 === (12))){
var state_28484__$1 = state_28484;
var statearr_28492_28518 = state_28484__$1;
(statearr_28492_28518[(2)] = null);

(statearr_28492_28518[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (2))){
var inst_28461 = (state_28484[(7)]);
var state_28484__$1 = state_28484;
if(cljs.core.truth_(inst_28461)){
var statearr_28493_28519 = state_28484__$1;
(statearr_28493_28519[(1)] = (4));

} else {
var statearr_28494_28520 = state_28484__$1;
(statearr_28494_28520[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (11))){
var inst_28475 = cljs.core.async.close_BANG_.call(null,ch);
var state_28484__$1 = state_28484;
var statearr_28495_28521 = state_28484__$1;
(statearr_28495_28521[(2)] = inst_28475);

(statearr_28495_28521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (9))){
var state_28484__$1 = state_28484;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28496_28522 = state_28484__$1;
(statearr_28496_28522[(1)] = (11));

} else {
var statearr_28497_28523 = state_28484__$1;
(statearr_28497_28523[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (5))){
var inst_28461 = (state_28484[(7)]);
var state_28484__$1 = state_28484;
var statearr_28498_28524 = state_28484__$1;
(statearr_28498_28524[(2)] = inst_28461);

(statearr_28498_28524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (10))){
var inst_28480 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
var statearr_28499_28525 = state_28484__$1;
(statearr_28499_28525[(2)] = inst_28480);

(statearr_28499_28525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (8))){
var inst_28461 = (state_28484[(7)]);
var inst_28471 = cljs.core.next.call(null,inst_28461);
var inst_28461__$1 = inst_28471;
var state_28484__$1 = (function (){var statearr_28500 = state_28484;
(statearr_28500[(7)] = inst_28461__$1);

return statearr_28500;
})();
var statearr_28501_28526 = state_28484__$1;
(statearr_28501_28526[(2)] = null);

(statearr_28501_28526[(1)] = (2));


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
});})(c__27656__auto__))
;
return ((function (switch__27544__auto__,c__27656__auto__){
return (function() {
var cljs$core$async$state_machine__27545__auto__ = null;
var cljs$core$async$state_machine__27545__auto____0 = (function (){
var statearr_28505 = [null,null,null,null,null,null,null,null];
(statearr_28505[(0)] = cljs$core$async$state_machine__27545__auto__);

(statearr_28505[(1)] = (1));

return statearr_28505;
});
var cljs$core$async$state_machine__27545__auto____1 = (function (state_28484){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_28484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e28506){if((e28506 instanceof Object)){
var ex__27548__auto__ = e28506;
var statearr_28507_28527 = state_28484;
(statearr_28507_28527[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28528 = state_28484;
state_28484 = G__28528;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$state_machine__27545__auto__ = function(state_28484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27545__auto____1.call(this,state_28484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27545__auto____0;
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27545__auto____1;
return cljs$core$async$state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto__))
})();
var state__27658__auto__ = (function (){var statearr_28508 = f__27657__auto__.call(null);
(statearr_28508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto__);

return statearr_28508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto__))
);

return c__27656__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25453__auto__ = (((_ == null))?null:_);
var m__25454__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,_);
} else {
var m__25454__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28754 = (function (mult,ch,cs,meta28755){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28755 = meta28755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28756,meta28755__$1){
var self__ = this;
var _28756__$1 = this;
return (new cljs.core.async.t_cljs$core$async28754(self__.mult,self__.ch,self__.cs,meta28755__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28756){
var self__ = this;
var _28756__$1 = this;
return self__.meta28755;
});})(cs))
;

cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28754.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28754.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28755","meta28755",1413291984,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28754";

cljs.core.async.t_cljs$core$async28754.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async28754");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28754 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28754(mult__$1,ch__$1,cs__$1,meta28755){
return (new cljs.core.async.t_cljs$core$async28754(mult__$1,ch__$1,cs__$1,meta28755));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28754(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27656__auto___28979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___28979,cs,m,dchan,dctr,done){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___28979,cs,m,dchan,dctr,done){
return (function (state_28891){
var state_val_28892 = (state_28891[(1)]);
if((state_val_28892 === (7))){
var inst_28887 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28893_28980 = state_28891__$1;
(statearr_28893_28980[(2)] = inst_28887);

(statearr_28893_28980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (20))){
var inst_28790 = (state_28891[(7)]);
var inst_28802 = cljs.core.first.call(null,inst_28790);
var inst_28803 = cljs.core.nth.call(null,inst_28802,(0),null);
var inst_28804 = cljs.core.nth.call(null,inst_28802,(1),null);
var state_28891__$1 = (function (){var statearr_28894 = state_28891;
(statearr_28894[(8)] = inst_28803);

return statearr_28894;
})();
if(cljs.core.truth_(inst_28804)){
var statearr_28895_28981 = state_28891__$1;
(statearr_28895_28981[(1)] = (22));

} else {
var statearr_28896_28982 = state_28891__$1;
(statearr_28896_28982[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (27))){
var inst_28839 = (state_28891[(9)]);
var inst_28759 = (state_28891[(10)]);
var inst_28834 = (state_28891[(11)]);
var inst_28832 = (state_28891[(12)]);
var inst_28839__$1 = cljs.core._nth.call(null,inst_28832,inst_28834);
var inst_28840 = cljs.core.async.put_BANG_.call(null,inst_28839__$1,inst_28759,done);
var state_28891__$1 = (function (){var statearr_28897 = state_28891;
(statearr_28897[(9)] = inst_28839__$1);

return statearr_28897;
})();
if(cljs.core.truth_(inst_28840)){
var statearr_28898_28983 = state_28891__$1;
(statearr_28898_28983[(1)] = (30));

} else {
var statearr_28899_28984 = state_28891__$1;
(statearr_28899_28984[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (1))){
var state_28891__$1 = state_28891;
var statearr_28900_28985 = state_28891__$1;
(statearr_28900_28985[(2)] = null);

(statearr_28900_28985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (24))){
var inst_28790 = (state_28891[(7)]);
var inst_28809 = (state_28891[(2)]);
var inst_28810 = cljs.core.next.call(null,inst_28790);
var inst_28768 = inst_28810;
var inst_28769 = null;
var inst_28770 = (0);
var inst_28771 = (0);
var state_28891__$1 = (function (){var statearr_28901 = state_28891;
(statearr_28901[(13)] = inst_28770);

(statearr_28901[(14)] = inst_28769);

(statearr_28901[(15)] = inst_28809);

(statearr_28901[(16)] = inst_28768);

(statearr_28901[(17)] = inst_28771);

return statearr_28901;
})();
var statearr_28902_28986 = state_28891__$1;
(statearr_28902_28986[(2)] = null);

(statearr_28902_28986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (39))){
var state_28891__$1 = state_28891;
var statearr_28906_28987 = state_28891__$1;
(statearr_28906_28987[(2)] = null);

(statearr_28906_28987[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (4))){
var inst_28759 = (state_28891[(10)]);
var inst_28759__$1 = (state_28891[(2)]);
var inst_28760 = (inst_28759__$1 == null);
var state_28891__$1 = (function (){var statearr_28907 = state_28891;
(statearr_28907[(10)] = inst_28759__$1);

return statearr_28907;
})();
if(cljs.core.truth_(inst_28760)){
var statearr_28908_28988 = state_28891__$1;
(statearr_28908_28988[(1)] = (5));

} else {
var statearr_28909_28989 = state_28891__$1;
(statearr_28909_28989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (15))){
var inst_28770 = (state_28891[(13)]);
var inst_28769 = (state_28891[(14)]);
var inst_28768 = (state_28891[(16)]);
var inst_28771 = (state_28891[(17)]);
var inst_28786 = (state_28891[(2)]);
var inst_28787 = (inst_28771 + (1));
var tmp28903 = inst_28770;
var tmp28904 = inst_28769;
var tmp28905 = inst_28768;
var inst_28768__$1 = tmp28905;
var inst_28769__$1 = tmp28904;
var inst_28770__$1 = tmp28903;
var inst_28771__$1 = inst_28787;
var state_28891__$1 = (function (){var statearr_28910 = state_28891;
(statearr_28910[(13)] = inst_28770__$1);

(statearr_28910[(14)] = inst_28769__$1);

(statearr_28910[(18)] = inst_28786);

(statearr_28910[(16)] = inst_28768__$1);

(statearr_28910[(17)] = inst_28771__$1);

return statearr_28910;
})();
var statearr_28911_28990 = state_28891__$1;
(statearr_28911_28990[(2)] = null);

(statearr_28911_28990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (21))){
var inst_28813 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28915_28991 = state_28891__$1;
(statearr_28915_28991[(2)] = inst_28813);

(statearr_28915_28991[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (31))){
var inst_28839 = (state_28891[(9)]);
var inst_28843 = done.call(null,null);
var inst_28844 = cljs.core.async.untap_STAR_.call(null,m,inst_28839);
var state_28891__$1 = (function (){var statearr_28916 = state_28891;
(statearr_28916[(19)] = inst_28843);

return statearr_28916;
})();
var statearr_28917_28992 = state_28891__$1;
(statearr_28917_28992[(2)] = inst_28844);

(statearr_28917_28992[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (32))){
var inst_28831 = (state_28891[(20)]);
var inst_28834 = (state_28891[(11)]);
var inst_28832 = (state_28891[(12)]);
var inst_28833 = (state_28891[(21)]);
var inst_28846 = (state_28891[(2)]);
var inst_28847 = (inst_28834 + (1));
var tmp28912 = inst_28831;
var tmp28913 = inst_28832;
var tmp28914 = inst_28833;
var inst_28831__$1 = tmp28912;
var inst_28832__$1 = tmp28913;
var inst_28833__$1 = tmp28914;
var inst_28834__$1 = inst_28847;
var state_28891__$1 = (function (){var statearr_28918 = state_28891;
(statearr_28918[(20)] = inst_28831__$1);

(statearr_28918[(11)] = inst_28834__$1);

(statearr_28918[(12)] = inst_28832__$1);

(statearr_28918[(21)] = inst_28833__$1);

(statearr_28918[(22)] = inst_28846);

return statearr_28918;
})();
var statearr_28919_28993 = state_28891__$1;
(statearr_28919_28993[(2)] = null);

(statearr_28919_28993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (40))){
var inst_28859 = (state_28891[(23)]);
var inst_28863 = done.call(null,null);
var inst_28864 = cljs.core.async.untap_STAR_.call(null,m,inst_28859);
var state_28891__$1 = (function (){var statearr_28920 = state_28891;
(statearr_28920[(24)] = inst_28863);

return statearr_28920;
})();
var statearr_28921_28994 = state_28891__$1;
(statearr_28921_28994[(2)] = inst_28864);

(statearr_28921_28994[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (33))){
var inst_28850 = (state_28891[(25)]);
var inst_28852 = cljs.core.chunked_seq_QMARK_.call(null,inst_28850);
var state_28891__$1 = state_28891;
if(inst_28852){
var statearr_28922_28995 = state_28891__$1;
(statearr_28922_28995[(1)] = (36));

} else {
var statearr_28923_28996 = state_28891__$1;
(statearr_28923_28996[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (13))){
var inst_28780 = (state_28891[(26)]);
var inst_28783 = cljs.core.async.close_BANG_.call(null,inst_28780);
var state_28891__$1 = state_28891;
var statearr_28924_28997 = state_28891__$1;
(statearr_28924_28997[(2)] = inst_28783);

(statearr_28924_28997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (22))){
var inst_28803 = (state_28891[(8)]);
var inst_28806 = cljs.core.async.close_BANG_.call(null,inst_28803);
var state_28891__$1 = state_28891;
var statearr_28925_28998 = state_28891__$1;
(statearr_28925_28998[(2)] = inst_28806);

(statearr_28925_28998[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (36))){
var inst_28850 = (state_28891[(25)]);
var inst_28854 = cljs.core.chunk_first.call(null,inst_28850);
var inst_28855 = cljs.core.chunk_rest.call(null,inst_28850);
var inst_28856 = cljs.core.count.call(null,inst_28854);
var inst_28831 = inst_28855;
var inst_28832 = inst_28854;
var inst_28833 = inst_28856;
var inst_28834 = (0);
var state_28891__$1 = (function (){var statearr_28926 = state_28891;
(statearr_28926[(20)] = inst_28831);

(statearr_28926[(11)] = inst_28834);

(statearr_28926[(12)] = inst_28832);

(statearr_28926[(21)] = inst_28833);

return statearr_28926;
})();
var statearr_28927_28999 = state_28891__$1;
(statearr_28927_28999[(2)] = null);

(statearr_28927_28999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (41))){
var inst_28850 = (state_28891[(25)]);
var inst_28866 = (state_28891[(2)]);
var inst_28867 = cljs.core.next.call(null,inst_28850);
var inst_28831 = inst_28867;
var inst_28832 = null;
var inst_28833 = (0);
var inst_28834 = (0);
var state_28891__$1 = (function (){var statearr_28928 = state_28891;
(statearr_28928[(20)] = inst_28831);

(statearr_28928[(27)] = inst_28866);

(statearr_28928[(11)] = inst_28834);

(statearr_28928[(12)] = inst_28832);

(statearr_28928[(21)] = inst_28833);

return statearr_28928;
})();
var statearr_28929_29000 = state_28891__$1;
(statearr_28929_29000[(2)] = null);

(statearr_28929_29000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (43))){
var state_28891__$1 = state_28891;
var statearr_28930_29001 = state_28891__$1;
(statearr_28930_29001[(2)] = null);

(statearr_28930_29001[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (29))){
var inst_28875 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28931_29002 = state_28891__$1;
(statearr_28931_29002[(2)] = inst_28875);

(statearr_28931_29002[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (44))){
var inst_28884 = (state_28891[(2)]);
var state_28891__$1 = (function (){var statearr_28932 = state_28891;
(statearr_28932[(28)] = inst_28884);

return statearr_28932;
})();
var statearr_28933_29003 = state_28891__$1;
(statearr_28933_29003[(2)] = null);

(statearr_28933_29003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (6))){
var inst_28823 = (state_28891[(29)]);
var inst_28822 = cljs.core.deref.call(null,cs);
var inst_28823__$1 = cljs.core.keys.call(null,inst_28822);
var inst_28824 = cljs.core.count.call(null,inst_28823__$1);
var inst_28825 = cljs.core.reset_BANG_.call(null,dctr,inst_28824);
var inst_28830 = cljs.core.seq.call(null,inst_28823__$1);
var inst_28831 = inst_28830;
var inst_28832 = null;
var inst_28833 = (0);
var inst_28834 = (0);
var state_28891__$1 = (function (){var statearr_28934 = state_28891;
(statearr_28934[(20)] = inst_28831);

(statearr_28934[(30)] = inst_28825);

(statearr_28934[(11)] = inst_28834);

(statearr_28934[(12)] = inst_28832);

(statearr_28934[(21)] = inst_28833);

(statearr_28934[(29)] = inst_28823__$1);

return statearr_28934;
})();
var statearr_28935_29004 = state_28891__$1;
(statearr_28935_29004[(2)] = null);

(statearr_28935_29004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (28))){
var inst_28831 = (state_28891[(20)]);
var inst_28850 = (state_28891[(25)]);
var inst_28850__$1 = cljs.core.seq.call(null,inst_28831);
var state_28891__$1 = (function (){var statearr_28936 = state_28891;
(statearr_28936[(25)] = inst_28850__$1);

return statearr_28936;
})();
if(inst_28850__$1){
var statearr_28937_29005 = state_28891__$1;
(statearr_28937_29005[(1)] = (33));

} else {
var statearr_28938_29006 = state_28891__$1;
(statearr_28938_29006[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (25))){
var inst_28834 = (state_28891[(11)]);
var inst_28833 = (state_28891[(21)]);
var inst_28836 = (inst_28834 < inst_28833);
var inst_28837 = inst_28836;
var state_28891__$1 = state_28891;
if(cljs.core.truth_(inst_28837)){
var statearr_28939_29007 = state_28891__$1;
(statearr_28939_29007[(1)] = (27));

} else {
var statearr_28940_29008 = state_28891__$1;
(statearr_28940_29008[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (34))){
var state_28891__$1 = state_28891;
var statearr_28941_29009 = state_28891__$1;
(statearr_28941_29009[(2)] = null);

(statearr_28941_29009[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (17))){
var state_28891__$1 = state_28891;
var statearr_28942_29010 = state_28891__$1;
(statearr_28942_29010[(2)] = null);

(statearr_28942_29010[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (3))){
var inst_28889 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28891__$1,inst_28889);
} else {
if((state_val_28892 === (12))){
var inst_28818 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28943_29011 = state_28891__$1;
(statearr_28943_29011[(2)] = inst_28818);

(statearr_28943_29011[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (2))){
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(4),ch);
} else {
if((state_val_28892 === (23))){
var state_28891__$1 = state_28891;
var statearr_28944_29012 = state_28891__$1;
(statearr_28944_29012[(2)] = null);

(statearr_28944_29012[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (35))){
var inst_28873 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28945_29013 = state_28891__$1;
(statearr_28945_29013[(2)] = inst_28873);

(statearr_28945_29013[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (19))){
var inst_28790 = (state_28891[(7)]);
var inst_28794 = cljs.core.chunk_first.call(null,inst_28790);
var inst_28795 = cljs.core.chunk_rest.call(null,inst_28790);
var inst_28796 = cljs.core.count.call(null,inst_28794);
var inst_28768 = inst_28795;
var inst_28769 = inst_28794;
var inst_28770 = inst_28796;
var inst_28771 = (0);
var state_28891__$1 = (function (){var statearr_28946 = state_28891;
(statearr_28946[(13)] = inst_28770);

(statearr_28946[(14)] = inst_28769);

(statearr_28946[(16)] = inst_28768);

(statearr_28946[(17)] = inst_28771);

return statearr_28946;
})();
var statearr_28947_29014 = state_28891__$1;
(statearr_28947_29014[(2)] = null);

(statearr_28947_29014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (11))){
var inst_28790 = (state_28891[(7)]);
var inst_28768 = (state_28891[(16)]);
var inst_28790__$1 = cljs.core.seq.call(null,inst_28768);
var state_28891__$1 = (function (){var statearr_28948 = state_28891;
(statearr_28948[(7)] = inst_28790__$1);

return statearr_28948;
})();
if(inst_28790__$1){
var statearr_28949_29015 = state_28891__$1;
(statearr_28949_29015[(1)] = (16));

} else {
var statearr_28950_29016 = state_28891__$1;
(statearr_28950_29016[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (9))){
var inst_28820 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28951_29017 = state_28891__$1;
(statearr_28951_29017[(2)] = inst_28820);

(statearr_28951_29017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (5))){
var inst_28766 = cljs.core.deref.call(null,cs);
var inst_28767 = cljs.core.seq.call(null,inst_28766);
var inst_28768 = inst_28767;
var inst_28769 = null;
var inst_28770 = (0);
var inst_28771 = (0);
var state_28891__$1 = (function (){var statearr_28952 = state_28891;
(statearr_28952[(13)] = inst_28770);

(statearr_28952[(14)] = inst_28769);

(statearr_28952[(16)] = inst_28768);

(statearr_28952[(17)] = inst_28771);

return statearr_28952;
})();
var statearr_28953_29018 = state_28891__$1;
(statearr_28953_29018[(2)] = null);

(statearr_28953_29018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (14))){
var state_28891__$1 = state_28891;
var statearr_28954_29019 = state_28891__$1;
(statearr_28954_29019[(2)] = null);

(statearr_28954_29019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (45))){
var inst_28881 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28955_29020 = state_28891__$1;
(statearr_28955_29020[(2)] = inst_28881);

(statearr_28955_29020[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (26))){
var inst_28823 = (state_28891[(29)]);
var inst_28877 = (state_28891[(2)]);
var inst_28878 = cljs.core.seq.call(null,inst_28823);
var state_28891__$1 = (function (){var statearr_28956 = state_28891;
(statearr_28956[(31)] = inst_28877);

return statearr_28956;
})();
if(inst_28878){
var statearr_28957_29021 = state_28891__$1;
(statearr_28957_29021[(1)] = (42));

} else {
var statearr_28958_29022 = state_28891__$1;
(statearr_28958_29022[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (16))){
var inst_28790 = (state_28891[(7)]);
var inst_28792 = cljs.core.chunked_seq_QMARK_.call(null,inst_28790);
var state_28891__$1 = state_28891;
if(inst_28792){
var statearr_28959_29023 = state_28891__$1;
(statearr_28959_29023[(1)] = (19));

} else {
var statearr_28960_29024 = state_28891__$1;
(statearr_28960_29024[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (38))){
var inst_28870 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28961_29025 = state_28891__$1;
(statearr_28961_29025[(2)] = inst_28870);

(statearr_28961_29025[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (30))){
var state_28891__$1 = state_28891;
var statearr_28962_29026 = state_28891__$1;
(statearr_28962_29026[(2)] = null);

(statearr_28962_29026[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (10))){
var inst_28769 = (state_28891[(14)]);
var inst_28771 = (state_28891[(17)]);
var inst_28779 = cljs.core._nth.call(null,inst_28769,inst_28771);
var inst_28780 = cljs.core.nth.call(null,inst_28779,(0),null);
var inst_28781 = cljs.core.nth.call(null,inst_28779,(1),null);
var state_28891__$1 = (function (){var statearr_28963 = state_28891;
(statearr_28963[(26)] = inst_28780);

return statearr_28963;
})();
if(cljs.core.truth_(inst_28781)){
var statearr_28964_29027 = state_28891__$1;
(statearr_28964_29027[(1)] = (13));

} else {
var statearr_28965_29028 = state_28891__$1;
(statearr_28965_29028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (18))){
var inst_28816 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28966_29029 = state_28891__$1;
(statearr_28966_29029[(2)] = inst_28816);

(statearr_28966_29029[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (42))){
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(45),dchan);
} else {
if((state_val_28892 === (37))){
var inst_28759 = (state_28891[(10)]);
var inst_28850 = (state_28891[(25)]);
var inst_28859 = (state_28891[(23)]);
var inst_28859__$1 = cljs.core.first.call(null,inst_28850);
var inst_28860 = cljs.core.async.put_BANG_.call(null,inst_28859__$1,inst_28759,done);
var state_28891__$1 = (function (){var statearr_28967 = state_28891;
(statearr_28967[(23)] = inst_28859__$1);

return statearr_28967;
})();
if(cljs.core.truth_(inst_28860)){
var statearr_28968_29030 = state_28891__$1;
(statearr_28968_29030[(1)] = (39));

} else {
var statearr_28969_29031 = state_28891__$1;
(statearr_28969_29031[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (8))){
var inst_28770 = (state_28891[(13)]);
var inst_28771 = (state_28891[(17)]);
var inst_28773 = (inst_28771 < inst_28770);
var inst_28774 = inst_28773;
var state_28891__$1 = state_28891;
if(cljs.core.truth_(inst_28774)){
var statearr_28970_29032 = state_28891__$1;
(statearr_28970_29032[(1)] = (10));

} else {
var statearr_28971_29033 = state_28891__$1;
(statearr_28971_29033[(1)] = (11));

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
});})(c__27656__auto___28979,cs,m,dchan,dctr,done))
;
return ((function (switch__27544__auto__,c__27656__auto___28979,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27545__auto__ = null;
var cljs$core$async$mult_$_state_machine__27545__auto____0 = (function (){
var statearr_28975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28975[(0)] = cljs$core$async$mult_$_state_machine__27545__auto__);

(statearr_28975[(1)] = (1));

return statearr_28975;
});
var cljs$core$async$mult_$_state_machine__27545__auto____1 = (function (state_28891){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_28891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e28976){if((e28976 instanceof Object)){
var ex__27548__auto__ = e28976;
var statearr_28977_29034 = state_28891;
(statearr_28977_29034[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29035 = state_28891;
state_28891 = G__29035;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27545__auto__ = function(state_28891){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27545__auto____1.call(this,state_28891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27545__auto____0;
cljs$core$async$mult_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27545__auto____1;
return cljs$core$async$mult_$_state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___28979,cs,m,dchan,dctr,done))
})();
var state__27658__auto__ = (function (){var statearr_28978 = f__27657__auto__.call(null);
(statearr_28978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___28979);

return statearr_28978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___28979,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29036 = [];
var len__25865__auto___29039 = arguments.length;
var i__25866__auto___29040 = (0);
while(true){
if((i__25866__auto___29040 < len__25865__auto___29039)){
args29036.push((arguments[i__25866__auto___29040]));

var G__29041 = (i__25866__auto___29040 + (1));
i__25866__auto___29040 = G__29041;
continue;
} else {
}
break;
}

var G__29038 = args29036.length;
switch (G__29038) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29036.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,state_map);
} else {
var m__25454__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,mode);
} else {
var m__25454__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___29053 = arguments.length;
var i__25866__auto___29054 = (0);
while(true){
if((i__25866__auto___29054 < len__25865__auto___29053)){
args__25872__auto__.push((arguments[i__25866__auto___29054]));

var G__29055 = (i__25866__auto___29054 + (1));
i__25866__auto___29054 = G__29055;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((3) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25873__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29047){
var map__29048 = p__29047;
var map__29048__$1 = ((((!((map__29048 == null)))?((((map__29048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29048):map__29048);
var opts = map__29048__$1;
var statearr_29050_29056 = state;
(statearr_29050_29056[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29048,map__29048__$1,opts){
return (function (val){
var statearr_29051_29057 = state;
(statearr_29051_29057[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29048,map__29048__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29052_29058 = state;
(statearr_29052_29058[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29043){
var G__29044 = cljs.core.first.call(null,seq29043);
var seq29043__$1 = cljs.core.next.call(null,seq29043);
var G__29045 = cljs.core.first.call(null,seq29043__$1);
var seq29043__$2 = cljs.core.next.call(null,seq29043__$1);
var G__29046 = cljs.core.first.call(null,seq29043__$2);
var seq29043__$3 = cljs.core.next.call(null,seq29043__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29044,G__29045,G__29046,seq29043__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29224 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29225){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29225 = meta29225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29226,meta29225__$1){
var self__ = this;
var _29226__$1 = this;
return (new cljs.core.async.t_cljs$core$async29224(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29225__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29226){
var self__ = this;
var _29226__$1 = this;
return self__.meta29225;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29224.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29225","meta29225",-171715493,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29224";

cljs.core.async.t_cljs$core$async29224.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29224");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29224 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29224(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29225){
return (new cljs.core.async.t_cljs$core$async29224(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29225));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29224(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27656__auto___29389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___29389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___29389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29326){
var state_val_29327 = (state_29326[(1)]);
if((state_val_29327 === (7))){
var inst_29242 = (state_29326[(2)]);
var state_29326__$1 = state_29326;
var statearr_29328_29390 = state_29326__$1;
(statearr_29328_29390[(2)] = inst_29242);

(statearr_29328_29390[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (20))){
var inst_29254 = (state_29326[(7)]);
var state_29326__$1 = state_29326;
var statearr_29329_29391 = state_29326__$1;
(statearr_29329_29391[(2)] = inst_29254);

(statearr_29329_29391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (27))){
var state_29326__$1 = state_29326;
var statearr_29330_29392 = state_29326__$1;
(statearr_29330_29392[(2)] = null);

(statearr_29330_29392[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (1))){
var inst_29230 = (state_29326[(8)]);
var inst_29230__$1 = calc_state.call(null);
var inst_29232 = (inst_29230__$1 == null);
var inst_29233 = cljs.core.not.call(null,inst_29232);
var state_29326__$1 = (function (){var statearr_29331 = state_29326;
(statearr_29331[(8)] = inst_29230__$1);

return statearr_29331;
})();
if(inst_29233){
var statearr_29332_29393 = state_29326__$1;
(statearr_29332_29393[(1)] = (2));

} else {
var statearr_29333_29394 = state_29326__$1;
(statearr_29333_29394[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (24))){
var inst_29277 = (state_29326[(9)]);
var inst_29286 = (state_29326[(10)]);
var inst_29300 = (state_29326[(11)]);
var inst_29300__$1 = inst_29277.call(null,inst_29286);
var state_29326__$1 = (function (){var statearr_29334 = state_29326;
(statearr_29334[(11)] = inst_29300__$1);

return statearr_29334;
})();
if(cljs.core.truth_(inst_29300__$1)){
var statearr_29335_29395 = state_29326__$1;
(statearr_29335_29395[(1)] = (29));

} else {
var statearr_29336_29396 = state_29326__$1;
(statearr_29336_29396[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (4))){
var inst_29245 = (state_29326[(2)]);
var state_29326__$1 = state_29326;
if(cljs.core.truth_(inst_29245)){
var statearr_29337_29397 = state_29326__$1;
(statearr_29337_29397[(1)] = (8));

} else {
var statearr_29338_29398 = state_29326__$1;
(statearr_29338_29398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (15))){
var inst_29271 = (state_29326[(2)]);
var state_29326__$1 = state_29326;
if(cljs.core.truth_(inst_29271)){
var statearr_29339_29399 = state_29326__$1;
(statearr_29339_29399[(1)] = (19));

} else {
var statearr_29340_29400 = state_29326__$1;
(statearr_29340_29400[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (21))){
var inst_29276 = (state_29326[(12)]);
var inst_29276__$1 = (state_29326[(2)]);
var inst_29277 = cljs.core.get.call(null,inst_29276__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29278 = cljs.core.get.call(null,inst_29276__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29279 = cljs.core.get.call(null,inst_29276__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29326__$1 = (function (){var statearr_29341 = state_29326;
(statearr_29341[(9)] = inst_29277);

(statearr_29341[(13)] = inst_29278);

(statearr_29341[(12)] = inst_29276__$1);

return statearr_29341;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29326__$1,(22),inst_29279);
} else {
if((state_val_29327 === (31))){
var inst_29308 = (state_29326[(2)]);
var state_29326__$1 = state_29326;
if(cljs.core.truth_(inst_29308)){
var statearr_29342_29401 = state_29326__$1;
(statearr_29342_29401[(1)] = (32));

} else {
var statearr_29343_29402 = state_29326__$1;
(statearr_29343_29402[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (32))){
var inst_29285 = (state_29326[(14)]);
var state_29326__$1 = state_29326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29326__$1,(35),out,inst_29285);
} else {
if((state_val_29327 === (33))){
var inst_29276 = (state_29326[(12)]);
var inst_29254 = inst_29276;
var state_29326__$1 = (function (){var statearr_29344 = state_29326;
(statearr_29344[(7)] = inst_29254);

return statearr_29344;
})();
var statearr_29345_29403 = state_29326__$1;
(statearr_29345_29403[(2)] = null);

(statearr_29345_29403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (13))){
var inst_29254 = (state_29326[(7)]);
var inst_29261 = inst_29254.cljs$lang$protocol_mask$partition0$;
var inst_29262 = (inst_29261 & (64));
var inst_29263 = inst_29254.cljs$core$ISeq$;
var inst_29264 = (inst_29262) || (inst_29263);
var state_29326__$1 = state_29326;
if(cljs.core.truth_(inst_29264)){
var statearr_29346_29404 = state_29326__$1;
(statearr_29346_29404[(1)] = (16));

} else {
var statearr_29347_29405 = state_29326__$1;
(statearr_29347_29405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (22))){
var inst_29285 = (state_29326[(14)]);
var inst_29286 = (state_29326[(10)]);
var inst_29284 = (state_29326[(2)]);
var inst_29285__$1 = cljs.core.nth.call(null,inst_29284,(0),null);
var inst_29286__$1 = cljs.core.nth.call(null,inst_29284,(1),null);
var inst_29287 = (inst_29285__$1 == null);
var inst_29288 = cljs.core._EQ_.call(null,inst_29286__$1,change);
var inst_29289 = (inst_29287) || (inst_29288);
var state_29326__$1 = (function (){var statearr_29348 = state_29326;
(statearr_29348[(14)] = inst_29285__$1);

(statearr_29348[(10)] = inst_29286__$1);

return statearr_29348;
})();
if(cljs.core.truth_(inst_29289)){
var statearr_29349_29406 = state_29326__$1;
(statearr_29349_29406[(1)] = (23));

} else {
var statearr_29350_29407 = state_29326__$1;
(statearr_29350_29407[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (36))){
var inst_29276 = (state_29326[(12)]);
var inst_29254 = inst_29276;
var state_29326__$1 = (function (){var statearr_29351 = state_29326;
(statearr_29351[(7)] = inst_29254);

return statearr_29351;
})();
var statearr_29352_29408 = state_29326__$1;
(statearr_29352_29408[(2)] = null);

(statearr_29352_29408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (29))){
var inst_29300 = (state_29326[(11)]);
var state_29326__$1 = state_29326;
var statearr_29353_29409 = state_29326__$1;
(statearr_29353_29409[(2)] = inst_29300);

(statearr_29353_29409[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (6))){
var state_29326__$1 = state_29326;
var statearr_29354_29410 = state_29326__$1;
(statearr_29354_29410[(2)] = false);

(statearr_29354_29410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (28))){
var inst_29296 = (state_29326[(2)]);
var inst_29297 = calc_state.call(null);
var inst_29254 = inst_29297;
var state_29326__$1 = (function (){var statearr_29355 = state_29326;
(statearr_29355[(7)] = inst_29254);

(statearr_29355[(15)] = inst_29296);

return statearr_29355;
})();
var statearr_29356_29411 = state_29326__$1;
(statearr_29356_29411[(2)] = null);

(statearr_29356_29411[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (25))){
var inst_29322 = (state_29326[(2)]);
var state_29326__$1 = state_29326;
var statearr_29357_29412 = state_29326__$1;
(statearr_29357_29412[(2)] = inst_29322);

(statearr_29357_29412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (34))){
var inst_29320 = (state_29326[(2)]);
var state_29326__$1 = state_29326;
var statearr_29358_29413 = state_29326__$1;
(statearr_29358_29413[(2)] = inst_29320);

(statearr_29358_29413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (17))){
var state_29326__$1 = state_29326;
var statearr_29359_29414 = state_29326__$1;
(statearr_29359_29414[(2)] = false);

(statearr_29359_29414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (3))){
var state_29326__$1 = state_29326;
var statearr_29360_29415 = state_29326__$1;
(statearr_29360_29415[(2)] = false);

(statearr_29360_29415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (12))){
var inst_29324 = (state_29326[(2)]);
var state_29326__$1 = state_29326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29326__$1,inst_29324);
} else {
if((state_val_29327 === (2))){
var inst_29230 = (state_29326[(8)]);
var inst_29235 = inst_29230.cljs$lang$protocol_mask$partition0$;
var inst_29236 = (inst_29235 & (64));
var inst_29237 = inst_29230.cljs$core$ISeq$;
var inst_29238 = (inst_29236) || (inst_29237);
var state_29326__$1 = state_29326;
if(cljs.core.truth_(inst_29238)){
var statearr_29361_29416 = state_29326__$1;
(statearr_29361_29416[(1)] = (5));

} else {
var statearr_29362_29417 = state_29326__$1;
(statearr_29362_29417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (23))){
var inst_29285 = (state_29326[(14)]);
var inst_29291 = (inst_29285 == null);
var state_29326__$1 = state_29326;
if(cljs.core.truth_(inst_29291)){
var statearr_29363_29418 = state_29326__$1;
(statearr_29363_29418[(1)] = (26));

} else {
var statearr_29364_29419 = state_29326__$1;
(statearr_29364_29419[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (35))){
var inst_29311 = (state_29326[(2)]);
var state_29326__$1 = state_29326;
if(cljs.core.truth_(inst_29311)){
var statearr_29365_29420 = state_29326__$1;
(statearr_29365_29420[(1)] = (36));

} else {
var statearr_29366_29421 = state_29326__$1;
(statearr_29366_29421[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (19))){
var inst_29254 = (state_29326[(7)]);
var inst_29273 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29254);
var state_29326__$1 = state_29326;
var statearr_29367_29422 = state_29326__$1;
(statearr_29367_29422[(2)] = inst_29273);

(statearr_29367_29422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (11))){
var inst_29254 = (state_29326[(7)]);
var inst_29258 = (inst_29254 == null);
var inst_29259 = cljs.core.not.call(null,inst_29258);
var state_29326__$1 = state_29326;
if(inst_29259){
var statearr_29368_29423 = state_29326__$1;
(statearr_29368_29423[(1)] = (13));

} else {
var statearr_29369_29424 = state_29326__$1;
(statearr_29369_29424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (9))){
var inst_29230 = (state_29326[(8)]);
var state_29326__$1 = state_29326;
var statearr_29370_29425 = state_29326__$1;
(statearr_29370_29425[(2)] = inst_29230);

(statearr_29370_29425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (5))){
var state_29326__$1 = state_29326;
var statearr_29371_29426 = state_29326__$1;
(statearr_29371_29426[(2)] = true);

(statearr_29371_29426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (14))){
var state_29326__$1 = state_29326;
var statearr_29372_29427 = state_29326__$1;
(statearr_29372_29427[(2)] = false);

(statearr_29372_29427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (26))){
var inst_29286 = (state_29326[(10)]);
var inst_29293 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29286);
var state_29326__$1 = state_29326;
var statearr_29373_29428 = state_29326__$1;
(statearr_29373_29428[(2)] = inst_29293);

(statearr_29373_29428[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (16))){
var state_29326__$1 = state_29326;
var statearr_29374_29429 = state_29326__$1;
(statearr_29374_29429[(2)] = true);

(statearr_29374_29429[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (38))){
var inst_29316 = (state_29326[(2)]);
var state_29326__$1 = state_29326;
var statearr_29375_29430 = state_29326__$1;
(statearr_29375_29430[(2)] = inst_29316);

(statearr_29375_29430[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (30))){
var inst_29277 = (state_29326[(9)]);
var inst_29278 = (state_29326[(13)]);
var inst_29286 = (state_29326[(10)]);
var inst_29303 = cljs.core.empty_QMARK_.call(null,inst_29277);
var inst_29304 = inst_29278.call(null,inst_29286);
var inst_29305 = cljs.core.not.call(null,inst_29304);
var inst_29306 = (inst_29303) && (inst_29305);
var state_29326__$1 = state_29326;
var statearr_29376_29431 = state_29326__$1;
(statearr_29376_29431[(2)] = inst_29306);

(statearr_29376_29431[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (10))){
var inst_29230 = (state_29326[(8)]);
var inst_29250 = (state_29326[(2)]);
var inst_29251 = cljs.core.get.call(null,inst_29250,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29252 = cljs.core.get.call(null,inst_29250,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29253 = cljs.core.get.call(null,inst_29250,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29254 = inst_29230;
var state_29326__$1 = (function (){var statearr_29377 = state_29326;
(statearr_29377[(7)] = inst_29254);

(statearr_29377[(16)] = inst_29251);

(statearr_29377[(17)] = inst_29252);

(statearr_29377[(18)] = inst_29253);

return statearr_29377;
})();
var statearr_29378_29432 = state_29326__$1;
(statearr_29378_29432[(2)] = null);

(statearr_29378_29432[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (18))){
var inst_29268 = (state_29326[(2)]);
var state_29326__$1 = state_29326;
var statearr_29379_29433 = state_29326__$1;
(statearr_29379_29433[(2)] = inst_29268);

(statearr_29379_29433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (37))){
var state_29326__$1 = state_29326;
var statearr_29380_29434 = state_29326__$1;
(statearr_29380_29434[(2)] = null);

(statearr_29380_29434[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29327 === (8))){
var inst_29230 = (state_29326[(8)]);
var inst_29247 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29230);
var state_29326__$1 = state_29326;
var statearr_29381_29435 = state_29326__$1;
(statearr_29381_29435[(2)] = inst_29247);

(statearr_29381_29435[(1)] = (10));


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
});})(c__27656__auto___29389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27544__auto__,c__27656__auto___29389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27545__auto__ = null;
var cljs$core$async$mix_$_state_machine__27545__auto____0 = (function (){
var statearr_29385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29385[(0)] = cljs$core$async$mix_$_state_machine__27545__auto__);

(statearr_29385[(1)] = (1));

return statearr_29385;
});
var cljs$core$async$mix_$_state_machine__27545__auto____1 = (function (state_29326){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_29326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e29386){if((e29386 instanceof Object)){
var ex__27548__auto__ = e29386;
var statearr_29387_29436 = state_29326;
(statearr_29387_29436[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29437 = state_29326;
state_29326 = G__29437;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27545__auto__ = function(state_29326){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27545__auto____1.call(this,state_29326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27545__auto____0;
cljs$core$async$mix_$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27545__auto____1;
return cljs$core$async$mix_$_state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___29389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27658__auto__ = (function (){var statearr_29388 = f__27657__auto__.call(null);
(statearr_29388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___29389);

return statearr_29388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___29389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29438 = [];
var len__25865__auto___29441 = arguments.length;
var i__25866__auto___29442 = (0);
while(true){
if((i__25866__auto___29442 < len__25865__auto___29441)){
args29438.push((arguments[i__25866__auto___29442]));

var G__29443 = (i__25866__auto___29442 + (1));
i__25866__auto___29442 = G__29443;
continue;
} else {
}
break;
}

var G__29440 = args29438.length;
switch (G__29440) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29438.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29446 = [];
var len__25865__auto___29571 = arguments.length;
var i__25866__auto___29572 = (0);
while(true){
if((i__25866__auto___29572 < len__25865__auto___29571)){
args29446.push((arguments[i__25866__auto___29572]));

var G__29573 = (i__25866__auto___29572 + (1));
i__25866__auto___29572 = G__29573;
continue;
} else {
}
break;
}

var G__29448 = args29446.length;
switch (G__29448) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29446.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24790__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24790__auto__,mults){
return (function (p1__29445_SHARP_){
if(cljs.core.truth_(p1__29445_SHARP_.call(null,topic))){
return p1__29445_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29445_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24790__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29449 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29450){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29450 = meta29450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29451,meta29450__$1){
var self__ = this;
var _29451__$1 = this;
return (new cljs.core.async.t_cljs$core$async29449(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29450__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29451){
var self__ = this;
var _29451__$1 = this;
return self__.meta29450;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29449.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29450","meta29450",369420867,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29449";

cljs.core.async.t_cljs$core$async29449.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29449");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29449 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29449(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29450){
return (new cljs.core.async.t_cljs$core$async29449(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29450));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29449(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27656__auto___29575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___29575,mults,ensure_mult,p){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___29575,mults,ensure_mult,p){
return (function (state_29523){
var state_val_29524 = (state_29523[(1)]);
if((state_val_29524 === (7))){
var inst_29519 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
var statearr_29525_29576 = state_29523__$1;
(statearr_29525_29576[(2)] = inst_29519);

(statearr_29525_29576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (20))){
var state_29523__$1 = state_29523;
var statearr_29526_29577 = state_29523__$1;
(statearr_29526_29577[(2)] = null);

(statearr_29526_29577[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (1))){
var state_29523__$1 = state_29523;
var statearr_29527_29578 = state_29523__$1;
(statearr_29527_29578[(2)] = null);

(statearr_29527_29578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (24))){
var inst_29502 = (state_29523[(7)]);
var inst_29511 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29502);
var state_29523__$1 = state_29523;
var statearr_29528_29579 = state_29523__$1;
(statearr_29528_29579[(2)] = inst_29511);

(statearr_29528_29579[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (4))){
var inst_29454 = (state_29523[(8)]);
var inst_29454__$1 = (state_29523[(2)]);
var inst_29455 = (inst_29454__$1 == null);
var state_29523__$1 = (function (){var statearr_29529 = state_29523;
(statearr_29529[(8)] = inst_29454__$1);

return statearr_29529;
})();
if(cljs.core.truth_(inst_29455)){
var statearr_29530_29580 = state_29523__$1;
(statearr_29530_29580[(1)] = (5));

} else {
var statearr_29531_29581 = state_29523__$1;
(statearr_29531_29581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (15))){
var inst_29496 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
var statearr_29532_29582 = state_29523__$1;
(statearr_29532_29582[(2)] = inst_29496);

(statearr_29532_29582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (21))){
var inst_29516 = (state_29523[(2)]);
var state_29523__$1 = (function (){var statearr_29533 = state_29523;
(statearr_29533[(9)] = inst_29516);

return statearr_29533;
})();
var statearr_29534_29583 = state_29523__$1;
(statearr_29534_29583[(2)] = null);

(statearr_29534_29583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (13))){
var inst_29478 = (state_29523[(10)]);
var inst_29480 = cljs.core.chunked_seq_QMARK_.call(null,inst_29478);
var state_29523__$1 = state_29523;
if(inst_29480){
var statearr_29535_29584 = state_29523__$1;
(statearr_29535_29584[(1)] = (16));

} else {
var statearr_29536_29585 = state_29523__$1;
(statearr_29536_29585[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (22))){
var inst_29508 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
if(cljs.core.truth_(inst_29508)){
var statearr_29537_29586 = state_29523__$1;
(statearr_29537_29586[(1)] = (23));

} else {
var statearr_29538_29587 = state_29523__$1;
(statearr_29538_29587[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (6))){
var inst_29454 = (state_29523[(8)]);
var inst_29502 = (state_29523[(7)]);
var inst_29504 = (state_29523[(11)]);
var inst_29502__$1 = topic_fn.call(null,inst_29454);
var inst_29503 = cljs.core.deref.call(null,mults);
var inst_29504__$1 = cljs.core.get.call(null,inst_29503,inst_29502__$1);
var state_29523__$1 = (function (){var statearr_29539 = state_29523;
(statearr_29539[(7)] = inst_29502__$1);

(statearr_29539[(11)] = inst_29504__$1);

return statearr_29539;
})();
if(cljs.core.truth_(inst_29504__$1)){
var statearr_29540_29588 = state_29523__$1;
(statearr_29540_29588[(1)] = (19));

} else {
var statearr_29541_29589 = state_29523__$1;
(statearr_29541_29589[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (25))){
var inst_29513 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
var statearr_29542_29590 = state_29523__$1;
(statearr_29542_29590[(2)] = inst_29513);

(statearr_29542_29590[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (17))){
var inst_29478 = (state_29523[(10)]);
var inst_29487 = cljs.core.first.call(null,inst_29478);
var inst_29488 = cljs.core.async.muxch_STAR_.call(null,inst_29487);
var inst_29489 = cljs.core.async.close_BANG_.call(null,inst_29488);
var inst_29490 = cljs.core.next.call(null,inst_29478);
var inst_29464 = inst_29490;
var inst_29465 = null;
var inst_29466 = (0);
var inst_29467 = (0);
var state_29523__$1 = (function (){var statearr_29543 = state_29523;
(statearr_29543[(12)] = inst_29467);

(statearr_29543[(13)] = inst_29465);

(statearr_29543[(14)] = inst_29489);

(statearr_29543[(15)] = inst_29464);

(statearr_29543[(16)] = inst_29466);

return statearr_29543;
})();
var statearr_29544_29591 = state_29523__$1;
(statearr_29544_29591[(2)] = null);

(statearr_29544_29591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (3))){
var inst_29521 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29523__$1,inst_29521);
} else {
if((state_val_29524 === (12))){
var inst_29498 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
var statearr_29545_29592 = state_29523__$1;
(statearr_29545_29592[(2)] = inst_29498);

(statearr_29545_29592[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (2))){
var state_29523__$1 = state_29523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29523__$1,(4),ch);
} else {
if((state_val_29524 === (23))){
var state_29523__$1 = state_29523;
var statearr_29546_29593 = state_29523__$1;
(statearr_29546_29593[(2)] = null);

(statearr_29546_29593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (19))){
var inst_29454 = (state_29523[(8)]);
var inst_29504 = (state_29523[(11)]);
var inst_29506 = cljs.core.async.muxch_STAR_.call(null,inst_29504);
var state_29523__$1 = state_29523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29523__$1,(22),inst_29506,inst_29454);
} else {
if((state_val_29524 === (11))){
var inst_29478 = (state_29523[(10)]);
var inst_29464 = (state_29523[(15)]);
var inst_29478__$1 = cljs.core.seq.call(null,inst_29464);
var state_29523__$1 = (function (){var statearr_29547 = state_29523;
(statearr_29547[(10)] = inst_29478__$1);

return statearr_29547;
})();
if(inst_29478__$1){
var statearr_29548_29594 = state_29523__$1;
(statearr_29548_29594[(1)] = (13));

} else {
var statearr_29549_29595 = state_29523__$1;
(statearr_29549_29595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (9))){
var inst_29500 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
var statearr_29550_29596 = state_29523__$1;
(statearr_29550_29596[(2)] = inst_29500);

(statearr_29550_29596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (5))){
var inst_29461 = cljs.core.deref.call(null,mults);
var inst_29462 = cljs.core.vals.call(null,inst_29461);
var inst_29463 = cljs.core.seq.call(null,inst_29462);
var inst_29464 = inst_29463;
var inst_29465 = null;
var inst_29466 = (0);
var inst_29467 = (0);
var state_29523__$1 = (function (){var statearr_29551 = state_29523;
(statearr_29551[(12)] = inst_29467);

(statearr_29551[(13)] = inst_29465);

(statearr_29551[(15)] = inst_29464);

(statearr_29551[(16)] = inst_29466);

return statearr_29551;
})();
var statearr_29552_29597 = state_29523__$1;
(statearr_29552_29597[(2)] = null);

(statearr_29552_29597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (14))){
var state_29523__$1 = state_29523;
var statearr_29556_29598 = state_29523__$1;
(statearr_29556_29598[(2)] = null);

(statearr_29556_29598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (16))){
var inst_29478 = (state_29523[(10)]);
var inst_29482 = cljs.core.chunk_first.call(null,inst_29478);
var inst_29483 = cljs.core.chunk_rest.call(null,inst_29478);
var inst_29484 = cljs.core.count.call(null,inst_29482);
var inst_29464 = inst_29483;
var inst_29465 = inst_29482;
var inst_29466 = inst_29484;
var inst_29467 = (0);
var state_29523__$1 = (function (){var statearr_29557 = state_29523;
(statearr_29557[(12)] = inst_29467);

(statearr_29557[(13)] = inst_29465);

(statearr_29557[(15)] = inst_29464);

(statearr_29557[(16)] = inst_29466);

return statearr_29557;
})();
var statearr_29558_29599 = state_29523__$1;
(statearr_29558_29599[(2)] = null);

(statearr_29558_29599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (10))){
var inst_29467 = (state_29523[(12)]);
var inst_29465 = (state_29523[(13)]);
var inst_29464 = (state_29523[(15)]);
var inst_29466 = (state_29523[(16)]);
var inst_29472 = cljs.core._nth.call(null,inst_29465,inst_29467);
var inst_29473 = cljs.core.async.muxch_STAR_.call(null,inst_29472);
var inst_29474 = cljs.core.async.close_BANG_.call(null,inst_29473);
var inst_29475 = (inst_29467 + (1));
var tmp29553 = inst_29465;
var tmp29554 = inst_29464;
var tmp29555 = inst_29466;
var inst_29464__$1 = tmp29554;
var inst_29465__$1 = tmp29553;
var inst_29466__$1 = tmp29555;
var inst_29467__$1 = inst_29475;
var state_29523__$1 = (function (){var statearr_29559 = state_29523;
(statearr_29559[(12)] = inst_29467__$1);

(statearr_29559[(13)] = inst_29465__$1);

(statearr_29559[(17)] = inst_29474);

(statearr_29559[(15)] = inst_29464__$1);

(statearr_29559[(16)] = inst_29466__$1);

return statearr_29559;
})();
var statearr_29560_29600 = state_29523__$1;
(statearr_29560_29600[(2)] = null);

(statearr_29560_29600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (18))){
var inst_29493 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
var statearr_29561_29601 = state_29523__$1;
(statearr_29561_29601[(2)] = inst_29493);

(statearr_29561_29601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (8))){
var inst_29467 = (state_29523[(12)]);
var inst_29466 = (state_29523[(16)]);
var inst_29469 = (inst_29467 < inst_29466);
var inst_29470 = inst_29469;
var state_29523__$1 = state_29523;
if(cljs.core.truth_(inst_29470)){
var statearr_29562_29602 = state_29523__$1;
(statearr_29562_29602[(1)] = (10));

} else {
var statearr_29563_29603 = state_29523__$1;
(statearr_29563_29603[(1)] = (11));

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
});})(c__27656__auto___29575,mults,ensure_mult,p))
;
return ((function (switch__27544__auto__,c__27656__auto___29575,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27545__auto__ = null;
var cljs$core$async$state_machine__27545__auto____0 = (function (){
var statearr_29567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29567[(0)] = cljs$core$async$state_machine__27545__auto__);

(statearr_29567[(1)] = (1));

return statearr_29567;
});
var cljs$core$async$state_machine__27545__auto____1 = (function (state_29523){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_29523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e29568){if((e29568 instanceof Object)){
var ex__27548__auto__ = e29568;
var statearr_29569_29604 = state_29523;
(statearr_29569_29604[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29605 = state_29523;
state_29523 = G__29605;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$state_machine__27545__auto__ = function(state_29523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27545__auto____1.call(this,state_29523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27545__auto____0;
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27545__auto____1;
return cljs$core$async$state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___29575,mults,ensure_mult,p))
})();
var state__27658__auto__ = (function (){var statearr_29570 = f__27657__auto__.call(null);
(statearr_29570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___29575);

return statearr_29570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___29575,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29606 = [];
var len__25865__auto___29609 = arguments.length;
var i__25866__auto___29610 = (0);
while(true){
if((i__25866__auto___29610 < len__25865__auto___29609)){
args29606.push((arguments[i__25866__auto___29610]));

var G__29611 = (i__25866__auto___29610 + (1));
i__25866__auto___29610 = G__29611;
continue;
} else {
}
break;
}

var G__29608 = args29606.length;
switch (G__29608) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29606.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29613 = [];
var len__25865__auto___29616 = arguments.length;
var i__25866__auto___29617 = (0);
while(true){
if((i__25866__auto___29617 < len__25865__auto___29616)){
args29613.push((arguments[i__25866__auto___29617]));

var G__29618 = (i__25866__auto___29617 + (1));
i__25866__auto___29617 = G__29618;
continue;
} else {
}
break;
}

var G__29615 = args29613.length;
switch (G__29615) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29613.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29620 = [];
var len__25865__auto___29691 = arguments.length;
var i__25866__auto___29692 = (0);
while(true){
if((i__25866__auto___29692 < len__25865__auto___29691)){
args29620.push((arguments[i__25866__auto___29692]));

var G__29693 = (i__25866__auto___29692 + (1));
i__25866__auto___29692 = G__29693;
continue;
} else {
}
break;
}

var G__29622 = args29620.length;
switch (G__29622) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29620.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27656__auto___29695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___29695,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___29695,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29661){
var state_val_29662 = (state_29661[(1)]);
if((state_val_29662 === (7))){
var state_29661__$1 = state_29661;
var statearr_29663_29696 = state_29661__$1;
(statearr_29663_29696[(2)] = null);

(statearr_29663_29696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (1))){
var state_29661__$1 = state_29661;
var statearr_29664_29697 = state_29661__$1;
(statearr_29664_29697[(2)] = null);

(statearr_29664_29697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (4))){
var inst_29625 = (state_29661[(7)]);
var inst_29627 = (inst_29625 < cnt);
var state_29661__$1 = state_29661;
if(cljs.core.truth_(inst_29627)){
var statearr_29665_29698 = state_29661__$1;
(statearr_29665_29698[(1)] = (6));

} else {
var statearr_29666_29699 = state_29661__$1;
(statearr_29666_29699[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (15))){
var inst_29657 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29667_29700 = state_29661__$1;
(statearr_29667_29700[(2)] = inst_29657);

(statearr_29667_29700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (13))){
var inst_29650 = cljs.core.async.close_BANG_.call(null,out);
var state_29661__$1 = state_29661;
var statearr_29668_29701 = state_29661__$1;
(statearr_29668_29701[(2)] = inst_29650);

(statearr_29668_29701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (6))){
var state_29661__$1 = state_29661;
var statearr_29669_29702 = state_29661__$1;
(statearr_29669_29702[(2)] = null);

(statearr_29669_29702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (3))){
var inst_29659 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29661__$1,inst_29659);
} else {
if((state_val_29662 === (12))){
var inst_29647 = (state_29661[(8)]);
var inst_29647__$1 = (state_29661[(2)]);
var inst_29648 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29647__$1);
var state_29661__$1 = (function (){var statearr_29670 = state_29661;
(statearr_29670[(8)] = inst_29647__$1);

return statearr_29670;
})();
if(cljs.core.truth_(inst_29648)){
var statearr_29671_29703 = state_29661__$1;
(statearr_29671_29703[(1)] = (13));

} else {
var statearr_29672_29704 = state_29661__$1;
(statearr_29672_29704[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (2))){
var inst_29624 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29625 = (0);
var state_29661__$1 = (function (){var statearr_29673 = state_29661;
(statearr_29673[(9)] = inst_29624);

(statearr_29673[(7)] = inst_29625);

return statearr_29673;
})();
var statearr_29674_29705 = state_29661__$1;
(statearr_29674_29705[(2)] = null);

(statearr_29674_29705[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (11))){
var inst_29625 = (state_29661[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29661,(10),Object,null,(9));
var inst_29634 = chs__$1.call(null,inst_29625);
var inst_29635 = done.call(null,inst_29625);
var inst_29636 = cljs.core.async.take_BANG_.call(null,inst_29634,inst_29635);
var state_29661__$1 = state_29661;
var statearr_29675_29706 = state_29661__$1;
(statearr_29675_29706[(2)] = inst_29636);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29661__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (9))){
var inst_29625 = (state_29661[(7)]);
var inst_29638 = (state_29661[(2)]);
var inst_29639 = (inst_29625 + (1));
var inst_29625__$1 = inst_29639;
var state_29661__$1 = (function (){var statearr_29676 = state_29661;
(statearr_29676[(10)] = inst_29638);

(statearr_29676[(7)] = inst_29625__$1);

return statearr_29676;
})();
var statearr_29677_29707 = state_29661__$1;
(statearr_29677_29707[(2)] = null);

(statearr_29677_29707[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (5))){
var inst_29645 = (state_29661[(2)]);
var state_29661__$1 = (function (){var statearr_29678 = state_29661;
(statearr_29678[(11)] = inst_29645);

return statearr_29678;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29661__$1,(12),dchan);
} else {
if((state_val_29662 === (14))){
var inst_29647 = (state_29661[(8)]);
var inst_29652 = cljs.core.apply.call(null,f,inst_29647);
var state_29661__$1 = state_29661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29661__$1,(16),out,inst_29652);
} else {
if((state_val_29662 === (16))){
var inst_29654 = (state_29661[(2)]);
var state_29661__$1 = (function (){var statearr_29679 = state_29661;
(statearr_29679[(12)] = inst_29654);

return statearr_29679;
})();
var statearr_29680_29708 = state_29661__$1;
(statearr_29680_29708[(2)] = null);

(statearr_29680_29708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (10))){
var inst_29629 = (state_29661[(2)]);
var inst_29630 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29661__$1 = (function (){var statearr_29681 = state_29661;
(statearr_29681[(13)] = inst_29629);

return statearr_29681;
})();
var statearr_29682_29709 = state_29661__$1;
(statearr_29682_29709[(2)] = inst_29630);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29661__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (8))){
var inst_29643 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29683_29710 = state_29661__$1;
(statearr_29683_29710[(2)] = inst_29643);

(statearr_29683_29710[(1)] = (5));


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
});})(c__27656__auto___29695,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27544__auto__,c__27656__auto___29695,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27545__auto__ = null;
var cljs$core$async$state_machine__27545__auto____0 = (function (){
var statearr_29687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29687[(0)] = cljs$core$async$state_machine__27545__auto__);

(statearr_29687[(1)] = (1));

return statearr_29687;
});
var cljs$core$async$state_machine__27545__auto____1 = (function (state_29661){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_29661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e29688){if((e29688 instanceof Object)){
var ex__27548__auto__ = e29688;
var statearr_29689_29711 = state_29661;
(statearr_29689_29711[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29712 = state_29661;
state_29661 = G__29712;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$state_machine__27545__auto__ = function(state_29661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27545__auto____1.call(this,state_29661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27545__auto____0;
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27545__auto____1;
return cljs$core$async$state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___29695,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27658__auto__ = (function (){var statearr_29690 = f__27657__auto__.call(null);
(statearr_29690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___29695);

return statearr_29690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___29695,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29714 = [];
var len__25865__auto___29772 = arguments.length;
var i__25866__auto___29773 = (0);
while(true){
if((i__25866__auto___29773 < len__25865__auto___29772)){
args29714.push((arguments[i__25866__auto___29773]));

var G__29774 = (i__25866__auto___29773 + (1));
i__25866__auto___29773 = G__29774;
continue;
} else {
}
break;
}

var G__29716 = args29714.length;
switch (G__29716) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29714.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27656__auto___29776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___29776,out){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___29776,out){
return (function (state_29748){
var state_val_29749 = (state_29748[(1)]);
if((state_val_29749 === (7))){
var inst_29727 = (state_29748[(7)]);
var inst_29728 = (state_29748[(8)]);
var inst_29727__$1 = (state_29748[(2)]);
var inst_29728__$1 = cljs.core.nth.call(null,inst_29727__$1,(0),null);
var inst_29729 = cljs.core.nth.call(null,inst_29727__$1,(1),null);
var inst_29730 = (inst_29728__$1 == null);
var state_29748__$1 = (function (){var statearr_29750 = state_29748;
(statearr_29750[(9)] = inst_29729);

(statearr_29750[(7)] = inst_29727__$1);

(statearr_29750[(8)] = inst_29728__$1);

return statearr_29750;
})();
if(cljs.core.truth_(inst_29730)){
var statearr_29751_29777 = state_29748__$1;
(statearr_29751_29777[(1)] = (8));

} else {
var statearr_29752_29778 = state_29748__$1;
(statearr_29752_29778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (1))){
var inst_29717 = cljs.core.vec.call(null,chs);
var inst_29718 = inst_29717;
var state_29748__$1 = (function (){var statearr_29753 = state_29748;
(statearr_29753[(10)] = inst_29718);

return statearr_29753;
})();
var statearr_29754_29779 = state_29748__$1;
(statearr_29754_29779[(2)] = null);

(statearr_29754_29779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (4))){
var inst_29718 = (state_29748[(10)]);
var state_29748__$1 = state_29748;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29748__$1,(7),inst_29718);
} else {
if((state_val_29749 === (6))){
var inst_29744 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
var statearr_29755_29780 = state_29748__$1;
(statearr_29755_29780[(2)] = inst_29744);

(statearr_29755_29780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (3))){
var inst_29746 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29748__$1,inst_29746);
} else {
if((state_val_29749 === (2))){
var inst_29718 = (state_29748[(10)]);
var inst_29720 = cljs.core.count.call(null,inst_29718);
var inst_29721 = (inst_29720 > (0));
var state_29748__$1 = state_29748;
if(cljs.core.truth_(inst_29721)){
var statearr_29757_29781 = state_29748__$1;
(statearr_29757_29781[(1)] = (4));

} else {
var statearr_29758_29782 = state_29748__$1;
(statearr_29758_29782[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (11))){
var inst_29718 = (state_29748[(10)]);
var inst_29737 = (state_29748[(2)]);
var tmp29756 = inst_29718;
var inst_29718__$1 = tmp29756;
var state_29748__$1 = (function (){var statearr_29759 = state_29748;
(statearr_29759[(11)] = inst_29737);

(statearr_29759[(10)] = inst_29718__$1);

return statearr_29759;
})();
var statearr_29760_29783 = state_29748__$1;
(statearr_29760_29783[(2)] = null);

(statearr_29760_29783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (9))){
var inst_29728 = (state_29748[(8)]);
var state_29748__$1 = state_29748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29748__$1,(11),out,inst_29728);
} else {
if((state_val_29749 === (5))){
var inst_29742 = cljs.core.async.close_BANG_.call(null,out);
var state_29748__$1 = state_29748;
var statearr_29761_29784 = state_29748__$1;
(statearr_29761_29784[(2)] = inst_29742);

(statearr_29761_29784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (10))){
var inst_29740 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
var statearr_29762_29785 = state_29748__$1;
(statearr_29762_29785[(2)] = inst_29740);

(statearr_29762_29785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (8))){
var inst_29718 = (state_29748[(10)]);
var inst_29729 = (state_29748[(9)]);
var inst_29727 = (state_29748[(7)]);
var inst_29728 = (state_29748[(8)]);
var inst_29732 = (function (){var cs = inst_29718;
var vec__29723 = inst_29727;
var v = inst_29728;
var c = inst_29729;
return ((function (cs,vec__29723,v,c,inst_29718,inst_29729,inst_29727,inst_29728,state_val_29749,c__27656__auto___29776,out){
return (function (p1__29713_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29713_SHARP_);
});
;})(cs,vec__29723,v,c,inst_29718,inst_29729,inst_29727,inst_29728,state_val_29749,c__27656__auto___29776,out))
})();
var inst_29733 = cljs.core.filterv.call(null,inst_29732,inst_29718);
var inst_29718__$1 = inst_29733;
var state_29748__$1 = (function (){var statearr_29763 = state_29748;
(statearr_29763[(10)] = inst_29718__$1);

return statearr_29763;
})();
var statearr_29764_29786 = state_29748__$1;
(statearr_29764_29786[(2)] = null);

(statearr_29764_29786[(1)] = (2));


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
});})(c__27656__auto___29776,out))
;
return ((function (switch__27544__auto__,c__27656__auto___29776,out){
return (function() {
var cljs$core$async$state_machine__27545__auto__ = null;
var cljs$core$async$state_machine__27545__auto____0 = (function (){
var statearr_29768 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29768[(0)] = cljs$core$async$state_machine__27545__auto__);

(statearr_29768[(1)] = (1));

return statearr_29768;
});
var cljs$core$async$state_machine__27545__auto____1 = (function (state_29748){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_29748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e29769){if((e29769 instanceof Object)){
var ex__27548__auto__ = e29769;
var statearr_29770_29787 = state_29748;
(statearr_29770_29787[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29788 = state_29748;
state_29748 = G__29788;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$state_machine__27545__auto__ = function(state_29748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27545__auto____1.call(this,state_29748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27545__auto____0;
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27545__auto____1;
return cljs$core$async$state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___29776,out))
})();
var state__27658__auto__ = (function (){var statearr_29771 = f__27657__auto__.call(null);
(statearr_29771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___29776);

return statearr_29771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___29776,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29789 = [];
var len__25865__auto___29838 = arguments.length;
var i__25866__auto___29839 = (0);
while(true){
if((i__25866__auto___29839 < len__25865__auto___29838)){
args29789.push((arguments[i__25866__auto___29839]));

var G__29840 = (i__25866__auto___29839 + (1));
i__25866__auto___29839 = G__29840;
continue;
} else {
}
break;
}

var G__29791 = args29789.length;
switch (G__29791) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29789.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27656__auto___29842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___29842,out){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___29842,out){
return (function (state_29815){
var state_val_29816 = (state_29815[(1)]);
if((state_val_29816 === (7))){
var inst_29797 = (state_29815[(7)]);
var inst_29797__$1 = (state_29815[(2)]);
var inst_29798 = (inst_29797__$1 == null);
var inst_29799 = cljs.core.not.call(null,inst_29798);
var state_29815__$1 = (function (){var statearr_29817 = state_29815;
(statearr_29817[(7)] = inst_29797__$1);

return statearr_29817;
})();
if(inst_29799){
var statearr_29818_29843 = state_29815__$1;
(statearr_29818_29843[(1)] = (8));

} else {
var statearr_29819_29844 = state_29815__$1;
(statearr_29819_29844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29816 === (1))){
var inst_29792 = (0);
var state_29815__$1 = (function (){var statearr_29820 = state_29815;
(statearr_29820[(8)] = inst_29792);

return statearr_29820;
})();
var statearr_29821_29845 = state_29815__$1;
(statearr_29821_29845[(2)] = null);

(statearr_29821_29845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29816 === (4))){
var state_29815__$1 = state_29815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29815__$1,(7),ch);
} else {
if((state_val_29816 === (6))){
var inst_29810 = (state_29815[(2)]);
var state_29815__$1 = state_29815;
var statearr_29822_29846 = state_29815__$1;
(statearr_29822_29846[(2)] = inst_29810);

(statearr_29822_29846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29816 === (3))){
var inst_29812 = (state_29815[(2)]);
var inst_29813 = cljs.core.async.close_BANG_.call(null,out);
var state_29815__$1 = (function (){var statearr_29823 = state_29815;
(statearr_29823[(9)] = inst_29812);

return statearr_29823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29815__$1,inst_29813);
} else {
if((state_val_29816 === (2))){
var inst_29792 = (state_29815[(8)]);
var inst_29794 = (inst_29792 < n);
var state_29815__$1 = state_29815;
if(cljs.core.truth_(inst_29794)){
var statearr_29824_29847 = state_29815__$1;
(statearr_29824_29847[(1)] = (4));

} else {
var statearr_29825_29848 = state_29815__$1;
(statearr_29825_29848[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29816 === (11))){
var inst_29792 = (state_29815[(8)]);
var inst_29802 = (state_29815[(2)]);
var inst_29803 = (inst_29792 + (1));
var inst_29792__$1 = inst_29803;
var state_29815__$1 = (function (){var statearr_29826 = state_29815;
(statearr_29826[(8)] = inst_29792__$1);

(statearr_29826[(10)] = inst_29802);

return statearr_29826;
})();
var statearr_29827_29849 = state_29815__$1;
(statearr_29827_29849[(2)] = null);

(statearr_29827_29849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29816 === (9))){
var state_29815__$1 = state_29815;
var statearr_29828_29850 = state_29815__$1;
(statearr_29828_29850[(2)] = null);

(statearr_29828_29850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29816 === (5))){
var state_29815__$1 = state_29815;
var statearr_29829_29851 = state_29815__$1;
(statearr_29829_29851[(2)] = null);

(statearr_29829_29851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29816 === (10))){
var inst_29807 = (state_29815[(2)]);
var state_29815__$1 = state_29815;
var statearr_29830_29852 = state_29815__$1;
(statearr_29830_29852[(2)] = inst_29807);

(statearr_29830_29852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29816 === (8))){
var inst_29797 = (state_29815[(7)]);
var state_29815__$1 = state_29815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29815__$1,(11),out,inst_29797);
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
});})(c__27656__auto___29842,out))
;
return ((function (switch__27544__auto__,c__27656__auto___29842,out){
return (function() {
var cljs$core$async$state_machine__27545__auto__ = null;
var cljs$core$async$state_machine__27545__auto____0 = (function (){
var statearr_29834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29834[(0)] = cljs$core$async$state_machine__27545__auto__);

(statearr_29834[(1)] = (1));

return statearr_29834;
});
var cljs$core$async$state_machine__27545__auto____1 = (function (state_29815){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_29815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e29835){if((e29835 instanceof Object)){
var ex__27548__auto__ = e29835;
var statearr_29836_29853 = state_29815;
(statearr_29836_29853[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29854 = state_29815;
state_29815 = G__29854;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$state_machine__27545__auto__ = function(state_29815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27545__auto____1.call(this,state_29815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27545__auto____0;
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27545__auto____1;
return cljs$core$async$state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___29842,out))
})();
var state__27658__auto__ = (function (){var statearr_29837 = f__27657__auto__.call(null);
(statearr_29837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___29842);

return statearr_29837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___29842,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29862 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29862 = (function (map_LT_,f,ch,meta29863){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29863 = meta29863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29864,meta29863__$1){
var self__ = this;
var _29864__$1 = this;
return (new cljs.core.async.t_cljs$core$async29862(self__.map_LT_,self__.f,self__.ch,meta29863__$1));
});

cljs.core.async.t_cljs$core$async29862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29864){
var self__ = this;
var _29864__$1 = this;
return self__.meta29863;
});

cljs.core.async.t_cljs$core$async29862.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29862.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29862.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29862.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29862.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29865 = (function (map_LT_,f,ch,meta29863,_,fn1,meta29866){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29863 = meta29863;
this._ = _;
this.fn1 = fn1;
this.meta29866 = meta29866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29867,meta29866__$1){
var self__ = this;
var _29867__$1 = this;
return (new cljs.core.async.t_cljs$core$async29865(self__.map_LT_,self__.f,self__.ch,self__.meta29863,self__._,self__.fn1,meta29866__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29867){
var self__ = this;
var _29867__$1 = this;
return self__.meta29866;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29865.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29865.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29865.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29865.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29855_SHARP_){
return f1.call(null,(((p1__29855_SHARP_ == null))?null:self__.f.call(null,p1__29855_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29865.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29863","meta29863",1962941077,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29862","cljs.core.async/t_cljs$core$async29862",185400042,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29866","meta29866",1723985138,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29865";

cljs.core.async.t_cljs$core$async29865.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29865");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29865 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29865(map_LT___$1,f__$1,ch__$1,meta29863__$1,___$2,fn1__$1,meta29866){
return (new cljs.core.async.t_cljs$core$async29865(map_LT___$1,f__$1,ch__$1,meta29863__$1,___$2,fn1__$1,meta29866));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29865(self__.map_LT_,self__.f,self__.ch,self__.meta29863,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24778__auto__ = ret;
if(cljs.core.truth_(and__24778__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24778__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29862.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29862.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29863","meta29863",1962941077,null)], null);
});

cljs.core.async.t_cljs$core$async29862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29862";

cljs.core.async.t_cljs$core$async29862.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29862");
});

cljs.core.async.__GT_t_cljs$core$async29862 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29862(map_LT___$1,f__$1,ch__$1,meta29863){
return (new cljs.core.async.t_cljs$core$async29862(map_LT___$1,f__$1,ch__$1,meta29863));
});

}

return (new cljs.core.async.t_cljs$core$async29862(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29871 = (function (map_GT_,f,ch,meta29872){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29872 = meta29872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29873,meta29872__$1){
var self__ = this;
var _29873__$1 = this;
return (new cljs.core.async.t_cljs$core$async29871(self__.map_GT_,self__.f,self__.ch,meta29872__$1));
});

cljs.core.async.t_cljs$core$async29871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29873){
var self__ = this;
var _29873__$1 = this;
return self__.meta29872;
});

cljs.core.async.t_cljs$core$async29871.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29871.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29871.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29871.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29871.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29871.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29872","meta29872",1254455566,null)], null);
});

cljs.core.async.t_cljs$core$async29871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29871";

cljs.core.async.t_cljs$core$async29871.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29871");
});

cljs.core.async.__GT_t_cljs$core$async29871 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29871(map_GT___$1,f__$1,ch__$1,meta29872){
return (new cljs.core.async.t_cljs$core$async29871(map_GT___$1,f__$1,ch__$1,meta29872));
});

}

return (new cljs.core.async.t_cljs$core$async29871(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29877 = (function (filter_GT_,p,ch,meta29878){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29878 = meta29878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29879,meta29878__$1){
var self__ = this;
var _29879__$1 = this;
return (new cljs.core.async.t_cljs$core$async29877(self__.filter_GT_,self__.p,self__.ch,meta29878__$1));
});

cljs.core.async.t_cljs$core$async29877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29879){
var self__ = this;
var _29879__$1 = this;
return self__.meta29878;
});

cljs.core.async.t_cljs$core$async29877.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29877.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29877.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29877.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29877.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29877.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29877.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29877.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29878","meta29878",-1884158525,null)], null);
});

cljs.core.async.t_cljs$core$async29877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29877";

cljs.core.async.t_cljs$core$async29877.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29877");
});

cljs.core.async.__GT_t_cljs$core$async29877 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29877(filter_GT___$1,p__$1,ch__$1,meta29878){
return (new cljs.core.async.t_cljs$core$async29877(filter_GT___$1,p__$1,ch__$1,meta29878));
});

}

return (new cljs.core.async.t_cljs$core$async29877(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29880 = [];
var len__25865__auto___29924 = arguments.length;
var i__25866__auto___29925 = (0);
while(true){
if((i__25866__auto___29925 < len__25865__auto___29924)){
args29880.push((arguments[i__25866__auto___29925]));

var G__29926 = (i__25866__auto___29925 + (1));
i__25866__auto___29925 = G__29926;
continue;
} else {
}
break;
}

var G__29882 = args29880.length;
switch (G__29882) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29880.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27656__auto___29928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___29928,out){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___29928,out){
return (function (state_29903){
var state_val_29904 = (state_29903[(1)]);
if((state_val_29904 === (7))){
var inst_29899 = (state_29903[(2)]);
var state_29903__$1 = state_29903;
var statearr_29905_29929 = state_29903__$1;
(statearr_29905_29929[(2)] = inst_29899);

(statearr_29905_29929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29904 === (1))){
var state_29903__$1 = state_29903;
var statearr_29906_29930 = state_29903__$1;
(statearr_29906_29930[(2)] = null);

(statearr_29906_29930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29904 === (4))){
var inst_29885 = (state_29903[(7)]);
var inst_29885__$1 = (state_29903[(2)]);
var inst_29886 = (inst_29885__$1 == null);
var state_29903__$1 = (function (){var statearr_29907 = state_29903;
(statearr_29907[(7)] = inst_29885__$1);

return statearr_29907;
})();
if(cljs.core.truth_(inst_29886)){
var statearr_29908_29931 = state_29903__$1;
(statearr_29908_29931[(1)] = (5));

} else {
var statearr_29909_29932 = state_29903__$1;
(statearr_29909_29932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29904 === (6))){
var inst_29885 = (state_29903[(7)]);
var inst_29890 = p.call(null,inst_29885);
var state_29903__$1 = state_29903;
if(cljs.core.truth_(inst_29890)){
var statearr_29910_29933 = state_29903__$1;
(statearr_29910_29933[(1)] = (8));

} else {
var statearr_29911_29934 = state_29903__$1;
(statearr_29911_29934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29904 === (3))){
var inst_29901 = (state_29903[(2)]);
var state_29903__$1 = state_29903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29903__$1,inst_29901);
} else {
if((state_val_29904 === (2))){
var state_29903__$1 = state_29903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29903__$1,(4),ch);
} else {
if((state_val_29904 === (11))){
var inst_29893 = (state_29903[(2)]);
var state_29903__$1 = state_29903;
var statearr_29912_29935 = state_29903__$1;
(statearr_29912_29935[(2)] = inst_29893);

(statearr_29912_29935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29904 === (9))){
var state_29903__$1 = state_29903;
var statearr_29913_29936 = state_29903__$1;
(statearr_29913_29936[(2)] = null);

(statearr_29913_29936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29904 === (5))){
var inst_29888 = cljs.core.async.close_BANG_.call(null,out);
var state_29903__$1 = state_29903;
var statearr_29914_29937 = state_29903__$1;
(statearr_29914_29937[(2)] = inst_29888);

(statearr_29914_29937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29904 === (10))){
var inst_29896 = (state_29903[(2)]);
var state_29903__$1 = (function (){var statearr_29915 = state_29903;
(statearr_29915[(8)] = inst_29896);

return statearr_29915;
})();
var statearr_29916_29938 = state_29903__$1;
(statearr_29916_29938[(2)] = null);

(statearr_29916_29938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29904 === (8))){
var inst_29885 = (state_29903[(7)]);
var state_29903__$1 = state_29903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29903__$1,(11),out,inst_29885);
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
});})(c__27656__auto___29928,out))
;
return ((function (switch__27544__auto__,c__27656__auto___29928,out){
return (function() {
var cljs$core$async$state_machine__27545__auto__ = null;
var cljs$core$async$state_machine__27545__auto____0 = (function (){
var statearr_29920 = [null,null,null,null,null,null,null,null,null];
(statearr_29920[(0)] = cljs$core$async$state_machine__27545__auto__);

(statearr_29920[(1)] = (1));

return statearr_29920;
});
var cljs$core$async$state_machine__27545__auto____1 = (function (state_29903){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_29903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e29921){if((e29921 instanceof Object)){
var ex__27548__auto__ = e29921;
var statearr_29922_29939 = state_29903;
(statearr_29922_29939[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29940 = state_29903;
state_29903 = G__29940;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$state_machine__27545__auto__ = function(state_29903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27545__auto____1.call(this,state_29903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27545__auto____0;
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27545__auto____1;
return cljs$core$async$state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___29928,out))
})();
var state__27658__auto__ = (function (){var statearr_29923 = f__27657__auto__.call(null);
(statearr_29923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___29928);

return statearr_29923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___29928,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29941 = [];
var len__25865__auto___29944 = arguments.length;
var i__25866__auto___29945 = (0);
while(true){
if((i__25866__auto___29945 < len__25865__auto___29944)){
args29941.push((arguments[i__25866__auto___29945]));

var G__29946 = (i__25866__auto___29945 + (1));
i__25866__auto___29945 = G__29946;
continue;
} else {
}
break;
}

var G__29943 = args29941.length;
switch (G__29943) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29941.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto__){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto__){
return (function (state_30113){
var state_val_30114 = (state_30113[(1)]);
if((state_val_30114 === (7))){
var inst_30109 = (state_30113[(2)]);
var state_30113__$1 = state_30113;
var statearr_30115_30156 = state_30113__$1;
(statearr_30115_30156[(2)] = inst_30109);

(statearr_30115_30156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (20))){
var inst_30079 = (state_30113[(7)]);
var inst_30090 = (state_30113[(2)]);
var inst_30091 = cljs.core.next.call(null,inst_30079);
var inst_30065 = inst_30091;
var inst_30066 = null;
var inst_30067 = (0);
var inst_30068 = (0);
var state_30113__$1 = (function (){var statearr_30116 = state_30113;
(statearr_30116[(8)] = inst_30066);

(statearr_30116[(9)] = inst_30090);

(statearr_30116[(10)] = inst_30065);

(statearr_30116[(11)] = inst_30067);

(statearr_30116[(12)] = inst_30068);

return statearr_30116;
})();
var statearr_30117_30157 = state_30113__$1;
(statearr_30117_30157[(2)] = null);

(statearr_30117_30157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (1))){
var state_30113__$1 = state_30113;
var statearr_30118_30158 = state_30113__$1;
(statearr_30118_30158[(2)] = null);

(statearr_30118_30158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (4))){
var inst_30054 = (state_30113[(13)]);
var inst_30054__$1 = (state_30113[(2)]);
var inst_30055 = (inst_30054__$1 == null);
var state_30113__$1 = (function (){var statearr_30119 = state_30113;
(statearr_30119[(13)] = inst_30054__$1);

return statearr_30119;
})();
if(cljs.core.truth_(inst_30055)){
var statearr_30120_30159 = state_30113__$1;
(statearr_30120_30159[(1)] = (5));

} else {
var statearr_30121_30160 = state_30113__$1;
(statearr_30121_30160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (15))){
var state_30113__$1 = state_30113;
var statearr_30125_30161 = state_30113__$1;
(statearr_30125_30161[(2)] = null);

(statearr_30125_30161[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (21))){
var state_30113__$1 = state_30113;
var statearr_30126_30162 = state_30113__$1;
(statearr_30126_30162[(2)] = null);

(statearr_30126_30162[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (13))){
var inst_30066 = (state_30113[(8)]);
var inst_30065 = (state_30113[(10)]);
var inst_30067 = (state_30113[(11)]);
var inst_30068 = (state_30113[(12)]);
var inst_30075 = (state_30113[(2)]);
var inst_30076 = (inst_30068 + (1));
var tmp30122 = inst_30066;
var tmp30123 = inst_30065;
var tmp30124 = inst_30067;
var inst_30065__$1 = tmp30123;
var inst_30066__$1 = tmp30122;
var inst_30067__$1 = tmp30124;
var inst_30068__$1 = inst_30076;
var state_30113__$1 = (function (){var statearr_30127 = state_30113;
(statearr_30127[(8)] = inst_30066__$1);

(statearr_30127[(10)] = inst_30065__$1);

(statearr_30127[(11)] = inst_30067__$1);

(statearr_30127[(12)] = inst_30068__$1);

(statearr_30127[(14)] = inst_30075);

return statearr_30127;
})();
var statearr_30128_30163 = state_30113__$1;
(statearr_30128_30163[(2)] = null);

(statearr_30128_30163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (22))){
var state_30113__$1 = state_30113;
var statearr_30129_30164 = state_30113__$1;
(statearr_30129_30164[(2)] = null);

(statearr_30129_30164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (6))){
var inst_30054 = (state_30113[(13)]);
var inst_30063 = f.call(null,inst_30054);
var inst_30064 = cljs.core.seq.call(null,inst_30063);
var inst_30065 = inst_30064;
var inst_30066 = null;
var inst_30067 = (0);
var inst_30068 = (0);
var state_30113__$1 = (function (){var statearr_30130 = state_30113;
(statearr_30130[(8)] = inst_30066);

(statearr_30130[(10)] = inst_30065);

(statearr_30130[(11)] = inst_30067);

(statearr_30130[(12)] = inst_30068);

return statearr_30130;
})();
var statearr_30131_30165 = state_30113__$1;
(statearr_30131_30165[(2)] = null);

(statearr_30131_30165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (17))){
var inst_30079 = (state_30113[(7)]);
var inst_30083 = cljs.core.chunk_first.call(null,inst_30079);
var inst_30084 = cljs.core.chunk_rest.call(null,inst_30079);
var inst_30085 = cljs.core.count.call(null,inst_30083);
var inst_30065 = inst_30084;
var inst_30066 = inst_30083;
var inst_30067 = inst_30085;
var inst_30068 = (0);
var state_30113__$1 = (function (){var statearr_30132 = state_30113;
(statearr_30132[(8)] = inst_30066);

(statearr_30132[(10)] = inst_30065);

(statearr_30132[(11)] = inst_30067);

(statearr_30132[(12)] = inst_30068);

return statearr_30132;
})();
var statearr_30133_30166 = state_30113__$1;
(statearr_30133_30166[(2)] = null);

(statearr_30133_30166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (3))){
var inst_30111 = (state_30113[(2)]);
var state_30113__$1 = state_30113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30113__$1,inst_30111);
} else {
if((state_val_30114 === (12))){
var inst_30099 = (state_30113[(2)]);
var state_30113__$1 = state_30113;
var statearr_30134_30167 = state_30113__$1;
(statearr_30134_30167[(2)] = inst_30099);

(statearr_30134_30167[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (2))){
var state_30113__$1 = state_30113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30113__$1,(4),in$);
} else {
if((state_val_30114 === (23))){
var inst_30107 = (state_30113[(2)]);
var state_30113__$1 = state_30113;
var statearr_30135_30168 = state_30113__$1;
(statearr_30135_30168[(2)] = inst_30107);

(statearr_30135_30168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (19))){
var inst_30094 = (state_30113[(2)]);
var state_30113__$1 = state_30113;
var statearr_30136_30169 = state_30113__$1;
(statearr_30136_30169[(2)] = inst_30094);

(statearr_30136_30169[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (11))){
var inst_30065 = (state_30113[(10)]);
var inst_30079 = (state_30113[(7)]);
var inst_30079__$1 = cljs.core.seq.call(null,inst_30065);
var state_30113__$1 = (function (){var statearr_30137 = state_30113;
(statearr_30137[(7)] = inst_30079__$1);

return statearr_30137;
})();
if(inst_30079__$1){
var statearr_30138_30170 = state_30113__$1;
(statearr_30138_30170[(1)] = (14));

} else {
var statearr_30139_30171 = state_30113__$1;
(statearr_30139_30171[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (9))){
var inst_30101 = (state_30113[(2)]);
var inst_30102 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30113__$1 = (function (){var statearr_30140 = state_30113;
(statearr_30140[(15)] = inst_30101);

return statearr_30140;
})();
if(cljs.core.truth_(inst_30102)){
var statearr_30141_30172 = state_30113__$1;
(statearr_30141_30172[(1)] = (21));

} else {
var statearr_30142_30173 = state_30113__$1;
(statearr_30142_30173[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (5))){
var inst_30057 = cljs.core.async.close_BANG_.call(null,out);
var state_30113__$1 = state_30113;
var statearr_30143_30174 = state_30113__$1;
(statearr_30143_30174[(2)] = inst_30057);

(statearr_30143_30174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (14))){
var inst_30079 = (state_30113[(7)]);
var inst_30081 = cljs.core.chunked_seq_QMARK_.call(null,inst_30079);
var state_30113__$1 = state_30113;
if(inst_30081){
var statearr_30144_30175 = state_30113__$1;
(statearr_30144_30175[(1)] = (17));

} else {
var statearr_30145_30176 = state_30113__$1;
(statearr_30145_30176[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (16))){
var inst_30097 = (state_30113[(2)]);
var state_30113__$1 = state_30113;
var statearr_30146_30177 = state_30113__$1;
(statearr_30146_30177[(2)] = inst_30097);

(statearr_30146_30177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (10))){
var inst_30066 = (state_30113[(8)]);
var inst_30068 = (state_30113[(12)]);
var inst_30073 = cljs.core._nth.call(null,inst_30066,inst_30068);
var state_30113__$1 = state_30113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30113__$1,(13),out,inst_30073);
} else {
if((state_val_30114 === (18))){
var inst_30079 = (state_30113[(7)]);
var inst_30088 = cljs.core.first.call(null,inst_30079);
var state_30113__$1 = state_30113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30113__$1,(20),out,inst_30088);
} else {
if((state_val_30114 === (8))){
var inst_30067 = (state_30113[(11)]);
var inst_30068 = (state_30113[(12)]);
var inst_30070 = (inst_30068 < inst_30067);
var inst_30071 = inst_30070;
var state_30113__$1 = state_30113;
if(cljs.core.truth_(inst_30071)){
var statearr_30147_30178 = state_30113__$1;
(statearr_30147_30178[(1)] = (10));

} else {
var statearr_30148_30179 = state_30113__$1;
(statearr_30148_30179[(1)] = (11));

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
});})(c__27656__auto__))
;
return ((function (switch__27544__auto__,c__27656__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27545__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27545__auto____0 = (function (){
var statearr_30152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30152[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27545__auto__);

(statearr_30152[(1)] = (1));

return statearr_30152;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27545__auto____1 = (function (state_30113){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_30113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e30153){if((e30153 instanceof Object)){
var ex__27548__auto__ = e30153;
var statearr_30154_30180 = state_30113;
(statearr_30154_30180[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30181 = state_30113;
state_30113 = G__30181;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27545__auto__ = function(state_30113){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27545__auto____1.call(this,state_30113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27545__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27545__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto__))
})();
var state__27658__auto__ = (function (){var statearr_30155 = f__27657__auto__.call(null);
(statearr_30155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto__);

return statearr_30155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto__))
);

return c__27656__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30182 = [];
var len__25865__auto___30185 = arguments.length;
var i__25866__auto___30186 = (0);
while(true){
if((i__25866__auto___30186 < len__25865__auto___30185)){
args30182.push((arguments[i__25866__auto___30186]));

var G__30187 = (i__25866__auto___30186 + (1));
i__25866__auto___30186 = G__30187;
continue;
} else {
}
break;
}

var G__30184 = args30182.length;
switch (G__30184) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30182.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30189 = [];
var len__25865__auto___30192 = arguments.length;
var i__25866__auto___30193 = (0);
while(true){
if((i__25866__auto___30193 < len__25865__auto___30192)){
args30189.push((arguments[i__25866__auto___30193]));

var G__30194 = (i__25866__auto___30193 + (1));
i__25866__auto___30193 = G__30194;
continue;
} else {
}
break;
}

var G__30191 = args30189.length;
switch (G__30191) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30189.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30196 = [];
var len__25865__auto___30247 = arguments.length;
var i__25866__auto___30248 = (0);
while(true){
if((i__25866__auto___30248 < len__25865__auto___30247)){
args30196.push((arguments[i__25866__auto___30248]));

var G__30249 = (i__25866__auto___30248 + (1));
i__25866__auto___30248 = G__30249;
continue;
} else {
}
break;
}

var G__30198 = args30196.length;
switch (G__30198) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30196.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27656__auto___30251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___30251,out){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___30251,out){
return (function (state_30222){
var state_val_30223 = (state_30222[(1)]);
if((state_val_30223 === (7))){
var inst_30217 = (state_30222[(2)]);
var state_30222__$1 = state_30222;
var statearr_30224_30252 = state_30222__$1;
(statearr_30224_30252[(2)] = inst_30217);

(statearr_30224_30252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30223 === (1))){
var inst_30199 = null;
var state_30222__$1 = (function (){var statearr_30225 = state_30222;
(statearr_30225[(7)] = inst_30199);

return statearr_30225;
})();
var statearr_30226_30253 = state_30222__$1;
(statearr_30226_30253[(2)] = null);

(statearr_30226_30253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30223 === (4))){
var inst_30202 = (state_30222[(8)]);
var inst_30202__$1 = (state_30222[(2)]);
var inst_30203 = (inst_30202__$1 == null);
var inst_30204 = cljs.core.not.call(null,inst_30203);
var state_30222__$1 = (function (){var statearr_30227 = state_30222;
(statearr_30227[(8)] = inst_30202__$1);

return statearr_30227;
})();
if(inst_30204){
var statearr_30228_30254 = state_30222__$1;
(statearr_30228_30254[(1)] = (5));

} else {
var statearr_30229_30255 = state_30222__$1;
(statearr_30229_30255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30223 === (6))){
var state_30222__$1 = state_30222;
var statearr_30230_30256 = state_30222__$1;
(statearr_30230_30256[(2)] = null);

(statearr_30230_30256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30223 === (3))){
var inst_30219 = (state_30222[(2)]);
var inst_30220 = cljs.core.async.close_BANG_.call(null,out);
var state_30222__$1 = (function (){var statearr_30231 = state_30222;
(statearr_30231[(9)] = inst_30219);

return statearr_30231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30222__$1,inst_30220);
} else {
if((state_val_30223 === (2))){
var state_30222__$1 = state_30222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30222__$1,(4),ch);
} else {
if((state_val_30223 === (11))){
var inst_30202 = (state_30222[(8)]);
var inst_30211 = (state_30222[(2)]);
var inst_30199 = inst_30202;
var state_30222__$1 = (function (){var statearr_30232 = state_30222;
(statearr_30232[(10)] = inst_30211);

(statearr_30232[(7)] = inst_30199);

return statearr_30232;
})();
var statearr_30233_30257 = state_30222__$1;
(statearr_30233_30257[(2)] = null);

(statearr_30233_30257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30223 === (9))){
var inst_30202 = (state_30222[(8)]);
var state_30222__$1 = state_30222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30222__$1,(11),out,inst_30202);
} else {
if((state_val_30223 === (5))){
var inst_30202 = (state_30222[(8)]);
var inst_30199 = (state_30222[(7)]);
var inst_30206 = cljs.core._EQ_.call(null,inst_30202,inst_30199);
var state_30222__$1 = state_30222;
if(inst_30206){
var statearr_30235_30258 = state_30222__$1;
(statearr_30235_30258[(1)] = (8));

} else {
var statearr_30236_30259 = state_30222__$1;
(statearr_30236_30259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30223 === (10))){
var inst_30214 = (state_30222[(2)]);
var state_30222__$1 = state_30222;
var statearr_30237_30260 = state_30222__$1;
(statearr_30237_30260[(2)] = inst_30214);

(statearr_30237_30260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30223 === (8))){
var inst_30199 = (state_30222[(7)]);
var tmp30234 = inst_30199;
var inst_30199__$1 = tmp30234;
var state_30222__$1 = (function (){var statearr_30238 = state_30222;
(statearr_30238[(7)] = inst_30199__$1);

return statearr_30238;
})();
var statearr_30239_30261 = state_30222__$1;
(statearr_30239_30261[(2)] = null);

(statearr_30239_30261[(1)] = (2));


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
});})(c__27656__auto___30251,out))
;
return ((function (switch__27544__auto__,c__27656__auto___30251,out){
return (function() {
var cljs$core$async$state_machine__27545__auto__ = null;
var cljs$core$async$state_machine__27545__auto____0 = (function (){
var statearr_30243 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30243[(0)] = cljs$core$async$state_machine__27545__auto__);

(statearr_30243[(1)] = (1));

return statearr_30243;
});
var cljs$core$async$state_machine__27545__auto____1 = (function (state_30222){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_30222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e30244){if((e30244 instanceof Object)){
var ex__27548__auto__ = e30244;
var statearr_30245_30262 = state_30222;
(statearr_30245_30262[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30263 = state_30222;
state_30222 = G__30263;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$state_machine__27545__auto__ = function(state_30222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27545__auto____1.call(this,state_30222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27545__auto____0;
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27545__auto____1;
return cljs$core$async$state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___30251,out))
})();
var state__27658__auto__ = (function (){var statearr_30246 = f__27657__auto__.call(null);
(statearr_30246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___30251);

return statearr_30246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___30251,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30264 = [];
var len__25865__auto___30334 = arguments.length;
var i__25866__auto___30335 = (0);
while(true){
if((i__25866__auto___30335 < len__25865__auto___30334)){
args30264.push((arguments[i__25866__auto___30335]));

var G__30336 = (i__25866__auto___30335 + (1));
i__25866__auto___30335 = G__30336;
continue;
} else {
}
break;
}

var G__30266 = args30264.length;
switch (G__30266) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30264.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27656__auto___30338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___30338,out){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___30338,out){
return (function (state_30304){
var state_val_30305 = (state_30304[(1)]);
if((state_val_30305 === (7))){
var inst_30300 = (state_30304[(2)]);
var state_30304__$1 = state_30304;
var statearr_30306_30339 = state_30304__$1;
(statearr_30306_30339[(2)] = inst_30300);

(statearr_30306_30339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (1))){
var inst_30267 = (new Array(n));
var inst_30268 = inst_30267;
var inst_30269 = (0);
var state_30304__$1 = (function (){var statearr_30307 = state_30304;
(statearr_30307[(7)] = inst_30269);

(statearr_30307[(8)] = inst_30268);

return statearr_30307;
})();
var statearr_30308_30340 = state_30304__$1;
(statearr_30308_30340[(2)] = null);

(statearr_30308_30340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (4))){
var inst_30272 = (state_30304[(9)]);
var inst_30272__$1 = (state_30304[(2)]);
var inst_30273 = (inst_30272__$1 == null);
var inst_30274 = cljs.core.not.call(null,inst_30273);
var state_30304__$1 = (function (){var statearr_30309 = state_30304;
(statearr_30309[(9)] = inst_30272__$1);

return statearr_30309;
})();
if(inst_30274){
var statearr_30310_30341 = state_30304__$1;
(statearr_30310_30341[(1)] = (5));

} else {
var statearr_30311_30342 = state_30304__$1;
(statearr_30311_30342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (15))){
var inst_30294 = (state_30304[(2)]);
var state_30304__$1 = state_30304;
var statearr_30312_30343 = state_30304__$1;
(statearr_30312_30343[(2)] = inst_30294);

(statearr_30312_30343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (13))){
var state_30304__$1 = state_30304;
var statearr_30313_30344 = state_30304__$1;
(statearr_30313_30344[(2)] = null);

(statearr_30313_30344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (6))){
var inst_30269 = (state_30304[(7)]);
var inst_30290 = (inst_30269 > (0));
var state_30304__$1 = state_30304;
if(cljs.core.truth_(inst_30290)){
var statearr_30314_30345 = state_30304__$1;
(statearr_30314_30345[(1)] = (12));

} else {
var statearr_30315_30346 = state_30304__$1;
(statearr_30315_30346[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (3))){
var inst_30302 = (state_30304[(2)]);
var state_30304__$1 = state_30304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30304__$1,inst_30302);
} else {
if((state_val_30305 === (12))){
var inst_30268 = (state_30304[(8)]);
var inst_30292 = cljs.core.vec.call(null,inst_30268);
var state_30304__$1 = state_30304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30304__$1,(15),out,inst_30292);
} else {
if((state_val_30305 === (2))){
var state_30304__$1 = state_30304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30304__$1,(4),ch);
} else {
if((state_val_30305 === (11))){
var inst_30284 = (state_30304[(2)]);
var inst_30285 = (new Array(n));
var inst_30268 = inst_30285;
var inst_30269 = (0);
var state_30304__$1 = (function (){var statearr_30316 = state_30304;
(statearr_30316[(7)] = inst_30269);

(statearr_30316[(8)] = inst_30268);

(statearr_30316[(10)] = inst_30284);

return statearr_30316;
})();
var statearr_30317_30347 = state_30304__$1;
(statearr_30317_30347[(2)] = null);

(statearr_30317_30347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (9))){
var inst_30268 = (state_30304[(8)]);
var inst_30282 = cljs.core.vec.call(null,inst_30268);
var state_30304__$1 = state_30304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30304__$1,(11),out,inst_30282);
} else {
if((state_val_30305 === (5))){
var inst_30277 = (state_30304[(11)]);
var inst_30269 = (state_30304[(7)]);
var inst_30272 = (state_30304[(9)]);
var inst_30268 = (state_30304[(8)]);
var inst_30276 = (inst_30268[inst_30269] = inst_30272);
var inst_30277__$1 = (inst_30269 + (1));
var inst_30278 = (inst_30277__$1 < n);
var state_30304__$1 = (function (){var statearr_30318 = state_30304;
(statearr_30318[(11)] = inst_30277__$1);

(statearr_30318[(12)] = inst_30276);

return statearr_30318;
})();
if(cljs.core.truth_(inst_30278)){
var statearr_30319_30348 = state_30304__$1;
(statearr_30319_30348[(1)] = (8));

} else {
var statearr_30320_30349 = state_30304__$1;
(statearr_30320_30349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (14))){
var inst_30297 = (state_30304[(2)]);
var inst_30298 = cljs.core.async.close_BANG_.call(null,out);
var state_30304__$1 = (function (){var statearr_30322 = state_30304;
(statearr_30322[(13)] = inst_30297);

return statearr_30322;
})();
var statearr_30323_30350 = state_30304__$1;
(statearr_30323_30350[(2)] = inst_30298);

(statearr_30323_30350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (10))){
var inst_30288 = (state_30304[(2)]);
var state_30304__$1 = state_30304;
var statearr_30324_30351 = state_30304__$1;
(statearr_30324_30351[(2)] = inst_30288);

(statearr_30324_30351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (8))){
var inst_30277 = (state_30304[(11)]);
var inst_30268 = (state_30304[(8)]);
var tmp30321 = inst_30268;
var inst_30268__$1 = tmp30321;
var inst_30269 = inst_30277;
var state_30304__$1 = (function (){var statearr_30325 = state_30304;
(statearr_30325[(7)] = inst_30269);

(statearr_30325[(8)] = inst_30268__$1);

return statearr_30325;
})();
var statearr_30326_30352 = state_30304__$1;
(statearr_30326_30352[(2)] = null);

(statearr_30326_30352[(1)] = (2));


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
});})(c__27656__auto___30338,out))
;
return ((function (switch__27544__auto__,c__27656__auto___30338,out){
return (function() {
var cljs$core$async$state_machine__27545__auto__ = null;
var cljs$core$async$state_machine__27545__auto____0 = (function (){
var statearr_30330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30330[(0)] = cljs$core$async$state_machine__27545__auto__);

(statearr_30330[(1)] = (1));

return statearr_30330;
});
var cljs$core$async$state_machine__27545__auto____1 = (function (state_30304){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_30304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e30331){if((e30331 instanceof Object)){
var ex__27548__auto__ = e30331;
var statearr_30332_30353 = state_30304;
(statearr_30332_30353[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30354 = state_30304;
state_30304 = G__30354;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$state_machine__27545__auto__ = function(state_30304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27545__auto____1.call(this,state_30304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27545__auto____0;
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27545__auto____1;
return cljs$core$async$state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___30338,out))
})();
var state__27658__auto__ = (function (){var statearr_30333 = f__27657__auto__.call(null);
(statearr_30333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___30338);

return statearr_30333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___30338,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30355 = [];
var len__25865__auto___30429 = arguments.length;
var i__25866__auto___30430 = (0);
while(true){
if((i__25866__auto___30430 < len__25865__auto___30429)){
args30355.push((arguments[i__25866__auto___30430]));

var G__30431 = (i__25866__auto___30430 + (1));
i__25866__auto___30430 = G__30431;
continue;
} else {
}
break;
}

var G__30357 = args30355.length;
switch (G__30357) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30355.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27656__auto___30433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27656__auto___30433,out){
return (function (){
var f__27657__auto__ = (function (){var switch__27544__auto__ = ((function (c__27656__auto___30433,out){
return (function (state_30399){
var state_val_30400 = (state_30399[(1)]);
if((state_val_30400 === (7))){
var inst_30395 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
var statearr_30401_30434 = state_30399__$1;
(statearr_30401_30434[(2)] = inst_30395);

(statearr_30401_30434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (1))){
var inst_30358 = [];
var inst_30359 = inst_30358;
var inst_30360 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30399__$1 = (function (){var statearr_30402 = state_30399;
(statearr_30402[(7)] = inst_30359);

(statearr_30402[(8)] = inst_30360);

return statearr_30402;
})();
var statearr_30403_30435 = state_30399__$1;
(statearr_30403_30435[(2)] = null);

(statearr_30403_30435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (4))){
var inst_30363 = (state_30399[(9)]);
var inst_30363__$1 = (state_30399[(2)]);
var inst_30364 = (inst_30363__$1 == null);
var inst_30365 = cljs.core.not.call(null,inst_30364);
var state_30399__$1 = (function (){var statearr_30404 = state_30399;
(statearr_30404[(9)] = inst_30363__$1);

return statearr_30404;
})();
if(inst_30365){
var statearr_30405_30436 = state_30399__$1;
(statearr_30405_30436[(1)] = (5));

} else {
var statearr_30406_30437 = state_30399__$1;
(statearr_30406_30437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (15))){
var inst_30389 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
var statearr_30407_30438 = state_30399__$1;
(statearr_30407_30438[(2)] = inst_30389);

(statearr_30407_30438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (13))){
var state_30399__$1 = state_30399;
var statearr_30408_30439 = state_30399__$1;
(statearr_30408_30439[(2)] = null);

(statearr_30408_30439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (6))){
var inst_30359 = (state_30399[(7)]);
var inst_30384 = inst_30359.length;
var inst_30385 = (inst_30384 > (0));
var state_30399__$1 = state_30399;
if(cljs.core.truth_(inst_30385)){
var statearr_30409_30440 = state_30399__$1;
(statearr_30409_30440[(1)] = (12));

} else {
var statearr_30410_30441 = state_30399__$1;
(statearr_30410_30441[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (3))){
var inst_30397 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30399__$1,inst_30397);
} else {
if((state_val_30400 === (12))){
var inst_30359 = (state_30399[(7)]);
var inst_30387 = cljs.core.vec.call(null,inst_30359);
var state_30399__$1 = state_30399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30399__$1,(15),out,inst_30387);
} else {
if((state_val_30400 === (2))){
var state_30399__$1 = state_30399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30399__$1,(4),ch);
} else {
if((state_val_30400 === (11))){
var inst_30367 = (state_30399[(10)]);
var inst_30363 = (state_30399[(9)]);
var inst_30377 = (state_30399[(2)]);
var inst_30378 = [];
var inst_30379 = inst_30378.push(inst_30363);
var inst_30359 = inst_30378;
var inst_30360 = inst_30367;
var state_30399__$1 = (function (){var statearr_30411 = state_30399;
(statearr_30411[(11)] = inst_30377);

(statearr_30411[(7)] = inst_30359);

(statearr_30411[(12)] = inst_30379);

(statearr_30411[(8)] = inst_30360);

return statearr_30411;
})();
var statearr_30412_30442 = state_30399__$1;
(statearr_30412_30442[(2)] = null);

(statearr_30412_30442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (9))){
var inst_30359 = (state_30399[(7)]);
var inst_30375 = cljs.core.vec.call(null,inst_30359);
var state_30399__$1 = state_30399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30399__$1,(11),out,inst_30375);
} else {
if((state_val_30400 === (5))){
var inst_30367 = (state_30399[(10)]);
var inst_30363 = (state_30399[(9)]);
var inst_30360 = (state_30399[(8)]);
var inst_30367__$1 = f.call(null,inst_30363);
var inst_30368 = cljs.core._EQ_.call(null,inst_30367__$1,inst_30360);
var inst_30369 = cljs.core.keyword_identical_QMARK_.call(null,inst_30360,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30370 = (inst_30368) || (inst_30369);
var state_30399__$1 = (function (){var statearr_30413 = state_30399;
(statearr_30413[(10)] = inst_30367__$1);

return statearr_30413;
})();
if(cljs.core.truth_(inst_30370)){
var statearr_30414_30443 = state_30399__$1;
(statearr_30414_30443[(1)] = (8));

} else {
var statearr_30415_30444 = state_30399__$1;
(statearr_30415_30444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (14))){
var inst_30392 = (state_30399[(2)]);
var inst_30393 = cljs.core.async.close_BANG_.call(null,out);
var state_30399__$1 = (function (){var statearr_30417 = state_30399;
(statearr_30417[(13)] = inst_30392);

return statearr_30417;
})();
var statearr_30418_30445 = state_30399__$1;
(statearr_30418_30445[(2)] = inst_30393);

(statearr_30418_30445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (10))){
var inst_30382 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
var statearr_30419_30446 = state_30399__$1;
(statearr_30419_30446[(2)] = inst_30382);

(statearr_30419_30446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (8))){
var inst_30359 = (state_30399[(7)]);
var inst_30367 = (state_30399[(10)]);
var inst_30363 = (state_30399[(9)]);
var inst_30372 = inst_30359.push(inst_30363);
var tmp30416 = inst_30359;
var inst_30359__$1 = tmp30416;
var inst_30360 = inst_30367;
var state_30399__$1 = (function (){var statearr_30420 = state_30399;
(statearr_30420[(7)] = inst_30359__$1);

(statearr_30420[(14)] = inst_30372);

(statearr_30420[(8)] = inst_30360);

return statearr_30420;
})();
var statearr_30421_30447 = state_30399__$1;
(statearr_30421_30447[(2)] = null);

(statearr_30421_30447[(1)] = (2));


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
});})(c__27656__auto___30433,out))
;
return ((function (switch__27544__auto__,c__27656__auto___30433,out){
return (function() {
var cljs$core$async$state_machine__27545__auto__ = null;
var cljs$core$async$state_machine__27545__auto____0 = (function (){
var statearr_30425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30425[(0)] = cljs$core$async$state_machine__27545__auto__);

(statearr_30425[(1)] = (1));

return statearr_30425;
});
var cljs$core$async$state_machine__27545__auto____1 = (function (state_30399){
while(true){
var ret_value__27546__auto__ = (function (){try{while(true){
var result__27547__auto__ = switch__27544__auto__.call(null,state_30399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27547__auto__;
}
break;
}
}catch (e30426){if((e30426 instanceof Object)){
var ex__27548__auto__ = e30426;
var statearr_30427_30448 = state_30399;
(statearr_30427_30448[(5)] = ex__27548__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30449 = state_30399;
state_30399 = G__30449;
continue;
} else {
return ret_value__27546__auto__;
}
break;
}
});
cljs$core$async$state_machine__27545__auto__ = function(state_30399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27545__auto____1.call(this,state_30399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27545__auto____0;
cljs$core$async$state_machine__27545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27545__auto____1;
return cljs$core$async$state_machine__27545__auto__;
})()
;})(switch__27544__auto__,c__27656__auto___30433,out))
})();
var state__27658__auto__ = (function (){var statearr_30428 = f__27657__auto__.call(null);
(statearr_30428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27656__auto___30433);

return statearr_30428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27658__auto__);
});})(c__27656__auto___30433,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1478292542006