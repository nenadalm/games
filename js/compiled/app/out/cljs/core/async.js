// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26806 = arguments.length;
switch (G__26806) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26807 = (function (f,blockable,meta26808){
this.f = f;
this.blockable = blockable;
this.meta26808 = meta26808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26809,meta26808__$1){
var self__ = this;
var _26809__$1 = this;
return (new cljs.core.async.t_cljs$core$async26807(self__.f,self__.blockable,meta26808__$1));
});

cljs.core.async.t_cljs$core$async26807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26809){
var self__ = this;
var _26809__$1 = this;
return self__.meta26808;
});

cljs.core.async.t_cljs$core$async26807.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26807.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26807.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26807.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta26808], null);
});

cljs.core.async.t_cljs$core$async26807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26807";

cljs.core.async.t_cljs$core$async26807.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26807");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26807.
 */
cljs.core.async.__GT_t_cljs$core$async26807 = (function cljs$core$async$__GT_t_cljs$core$async26807(f__$1,blockable__$1,meta26808){
return (new cljs.core.async.t_cljs$core$async26807(f__$1,blockable__$1,meta26808));
});

}

return (new cljs.core.async.t_cljs$core$async26807(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__26813 = arguments.length;
switch (G__26813) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__26816 = arguments.length;
switch (G__26816) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__26819 = arguments.length;
switch (G__26819) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_26821 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26821) : fn1.call(null,val_26821));
} else {
cljs.core.async.impl.dispatch.run(((function (val_26821,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26821) : fn1.call(null,val_26821));
});})(val_26821,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26823 = arguments.length;
switch (G__26823) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___26825 = n;
var x_26826 = (0);
while(true){
if((x_26826 < n__4607__auto___26825)){
(a[x_26826] = (0));

var G__26827 = (x_26826 + (1));
x_26826 = G__26827;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__26828 = (i + (1));
i = G__26828;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26829 = (function (flag,meta26830){
this.flag = flag;
this.meta26830 = meta26830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26831,meta26830__$1){
var self__ = this;
var _26831__$1 = this;
return (new cljs.core.async.t_cljs$core$async26829(self__.flag,meta26830__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26831){
var self__ = this;
var _26831__$1 = this;
return self__.meta26830;
});})(flag))
;

cljs.core.async.t_cljs$core$async26829.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26829.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26829.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta26830], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26829";

cljs.core.async.t_cljs$core$async26829.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26829");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26829.
 */
cljs.core.async.__GT_t_cljs$core$async26829 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26829(flag__$1,meta26830){
return (new cljs.core.async.t_cljs$core$async26829(flag__$1,meta26830));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26829(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26832 = (function (flag,cb,meta26833){
this.flag = flag;
this.cb = cb;
this.meta26833 = meta26833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26834,meta26833__$1){
var self__ = this;
var _26834__$1 = this;
return (new cljs.core.async.t_cljs$core$async26832(self__.flag,self__.cb,meta26833__$1));
});

cljs.core.async.t_cljs$core$async26832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26834){
var self__ = this;
var _26834__$1 = this;
return self__.meta26833;
});

cljs.core.async.t_cljs$core$async26832.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async26832.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta26833], null);
});

cljs.core.async.t_cljs$core$async26832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26832";

cljs.core.async.t_cljs$core$async26832.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26832");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26832.
 */
cljs.core.async.__GT_t_cljs$core$async26832 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26832(flag__$1,cb__$1,meta26833){
return (new cljs.core.async.t_cljs$core$async26832(flag__$1,cb__$1,meta26833));
});

}

return (new cljs.core.async.t_cljs$core$async26832(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26835_SHARP_){
var G__26837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26835_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26837) : fret.call(null,G__26837));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26836_SHARP_){
var G__26838 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26836_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26838) : fret.call(null,G__26838));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26839 = (i + (1));
i = G__26839;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__4736__auto__ = [];
var len__4730__auto___26845 = arguments.length;
var i__4731__auto___26846 = (0);
while(true){
if((i__4731__auto___26846 < len__4730__auto___26845)){
args__4736__auto__.push((arguments[i__4731__auto___26846]));

var G__26847 = (i__4731__auto___26846 + (1));
i__4731__auto___26846 = G__26847;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26842){
var map__26843 = p__26842;
var map__26843__$1 = (((((!((map__26843 == null))))?(((((map__26843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26843):map__26843);
var opts = map__26843__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26840){
var G__26841 = cljs.core.first(seq26840);
var seq26840__$1 = cljs.core.next(seq26840);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26841,seq26840__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__26849 = arguments.length;
switch (G__26849) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26746__auto___26895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto___26895){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto___26895){
return (function (state_26873){
var state_val_26874 = (state_26873[(1)]);
if((state_val_26874 === (7))){
var inst_26869 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
var statearr_26875_26896 = state_26873__$1;
(statearr_26875_26896[(2)] = inst_26869);

(statearr_26875_26896[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26874 === (1))){
var state_26873__$1 = state_26873;
var statearr_26876_26897 = state_26873__$1;
(statearr_26876_26897[(2)] = null);

(statearr_26876_26897[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26874 === (4))){
var inst_26852 = (state_26873[(7)]);
var inst_26852__$1 = (state_26873[(2)]);
var inst_26853 = (inst_26852__$1 == null);
var state_26873__$1 = (function (){var statearr_26877 = state_26873;
(statearr_26877[(7)] = inst_26852__$1);

return statearr_26877;
})();
if(cljs.core.truth_(inst_26853)){
var statearr_26878_26898 = state_26873__$1;
(statearr_26878_26898[(1)] = (5));

} else {
var statearr_26879_26899 = state_26873__$1;
(statearr_26879_26899[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26874 === (13))){
var state_26873__$1 = state_26873;
var statearr_26880_26900 = state_26873__$1;
(statearr_26880_26900[(2)] = null);

(statearr_26880_26900[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26874 === (6))){
var inst_26852 = (state_26873[(7)]);
var state_26873__$1 = state_26873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26873__$1,(11),to,inst_26852);
} else {
if((state_val_26874 === (3))){
var inst_26871 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26873__$1,inst_26871);
} else {
if((state_val_26874 === (12))){
var state_26873__$1 = state_26873;
var statearr_26881_26901 = state_26873__$1;
(statearr_26881_26901[(2)] = null);

(statearr_26881_26901[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26874 === (2))){
var state_26873__$1 = state_26873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26873__$1,(4),from);
} else {
if((state_val_26874 === (11))){
var inst_26862 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
if(cljs.core.truth_(inst_26862)){
var statearr_26882_26902 = state_26873__$1;
(statearr_26882_26902[(1)] = (12));

} else {
var statearr_26883_26903 = state_26873__$1;
(statearr_26883_26903[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26874 === (9))){
var state_26873__$1 = state_26873;
var statearr_26884_26904 = state_26873__$1;
(statearr_26884_26904[(2)] = null);

(statearr_26884_26904[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26874 === (5))){
var state_26873__$1 = state_26873;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26885_26905 = state_26873__$1;
(statearr_26885_26905[(1)] = (8));

} else {
var statearr_26886_26906 = state_26873__$1;
(statearr_26886_26906[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26874 === (14))){
var inst_26867 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
var statearr_26887_26907 = state_26873__$1;
(statearr_26887_26907[(2)] = inst_26867);

(statearr_26887_26907[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26874 === (10))){
var inst_26859 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
var statearr_26888_26908 = state_26873__$1;
(statearr_26888_26908[(2)] = inst_26859);

(statearr_26888_26908[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26874 === (8))){
var inst_26856 = cljs.core.async.close_BANG_(to);
var state_26873__$1 = state_26873;
var statearr_26889_26909 = state_26873__$1;
(statearr_26889_26909[(2)] = inst_26856);

(statearr_26889_26909[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__26746__auto___26895))
;
return ((function (switch__26639__auto__,c__26746__auto___26895){
return (function() {
var cljs$core$async$state_machine__26640__auto__ = null;
var cljs$core$async$state_machine__26640__auto____0 = (function (){
var statearr_26890 = [null,null,null,null,null,null,null,null];
(statearr_26890[(0)] = cljs$core$async$state_machine__26640__auto__);

(statearr_26890[(1)] = (1));

return statearr_26890;
});
var cljs$core$async$state_machine__26640__auto____1 = (function (state_26873){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_26873);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e26891){if((e26891 instanceof Object)){
var ex__26643__auto__ = e26891;
var statearr_26892_26910 = state_26873;
(statearr_26892_26910[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26873);

return cljs.core.cst$kw$recur;
} else {
throw e26891;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__26911 = state_26873;
state_26873 = G__26911;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$state_machine__26640__auto__ = function(state_26873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26640__auto____1.call(this,state_26873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26640__auto____0;
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26640__auto____1;
return cljs$core$async$state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto___26895))
})();
var state__26748__auto__ = (function (){var statearr_26893 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_26893[(6)] = c__26746__auto___26895);

return statearr_26893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto___26895))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__26912){
var vec__26913 = p__26912;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26913,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26913,(1),null);
var job = vec__26913;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__26746__auto___27084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto___27084,res,vec__26913,v,p,job,jobs,results){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto___27084,res,vec__26913,v,p,job,jobs,results){
return (function (state_26920){
var state_val_26921 = (state_26920[(1)]);
if((state_val_26921 === (1))){
var state_26920__$1 = state_26920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26920__$1,(2),res,v);
} else {
if((state_val_26921 === (2))){
var inst_26917 = (state_26920[(2)]);
var inst_26918 = cljs.core.async.close_BANG_(res);
var state_26920__$1 = (function (){var statearr_26922 = state_26920;
(statearr_26922[(7)] = inst_26917);

return statearr_26922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26920__$1,inst_26918);
} else {
return null;
}
}
});})(c__26746__auto___27084,res,vec__26913,v,p,job,jobs,results))
;
return ((function (switch__26639__auto__,c__26746__auto___27084,res,vec__26913,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____0 = (function (){
var statearr_26923 = [null,null,null,null,null,null,null,null];
(statearr_26923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__);

(statearr_26923[(1)] = (1));

return statearr_26923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____1 = (function (state_26920){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_26920);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e26924){if((e26924 instanceof Object)){
var ex__26643__auto__ = e26924;
var statearr_26925_27085 = state_26920;
(statearr_26925_27085[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26920);

return cljs.core.cst$kw$recur;
} else {
throw e26924;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__27086 = state_26920;
state_26920 = G__27086;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__ = function(state_26920){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____1.call(this,state_26920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto___27084,res,vec__26913,v,p,job,jobs,results))
})();
var state__26748__auto__ = (function (){var statearr_26926 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_26926[(6)] = c__26746__auto___27084);

return statearr_26926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto___27084,res,vec__26913,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26927){
var vec__26928 = p__26927;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26928,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26928,(1),null);
var job = vec__26928;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___27087 = n;
var __27088 = (0);
while(true){
if((__27088 < n__4607__auto___27087)){
var G__26931_27089 = type;
var G__26931_27090__$1 = (((G__26931_27089 instanceof cljs.core.Keyword))?G__26931_27089.fqn:null);
switch (G__26931_27090__$1) {
case "compute":
var c__26746__auto___27092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27088,c__26746__auto___27092,G__26931_27089,G__26931_27090__$1,n__4607__auto___27087,jobs,results,process,async){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (__27088,c__26746__auto___27092,G__26931_27089,G__26931_27090__$1,n__4607__auto___27087,jobs,results,process,async){
return (function (state_26944){
var state_val_26945 = (state_26944[(1)]);
if((state_val_26945 === (1))){
var state_26944__$1 = state_26944;
var statearr_26946_27093 = state_26944__$1;
(statearr_26946_27093[(2)] = null);

(statearr_26946_27093[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26945 === (2))){
var state_26944__$1 = state_26944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26944__$1,(4),jobs);
} else {
if((state_val_26945 === (3))){
var inst_26942 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26944__$1,inst_26942);
} else {
if((state_val_26945 === (4))){
var inst_26934 = (state_26944[(2)]);
var inst_26935 = process(inst_26934);
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26935)){
var statearr_26947_27094 = state_26944__$1;
(statearr_26947_27094[(1)] = (5));

} else {
var statearr_26948_27095 = state_26944__$1;
(statearr_26948_27095[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26945 === (5))){
var state_26944__$1 = state_26944;
var statearr_26949_27096 = state_26944__$1;
(statearr_26949_27096[(2)] = null);

(statearr_26949_27096[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26945 === (6))){
var state_26944__$1 = state_26944;
var statearr_26950_27097 = state_26944__$1;
(statearr_26950_27097[(2)] = null);

(statearr_26950_27097[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26945 === (7))){
var inst_26940 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26951_27098 = state_26944__$1;
(statearr_26951_27098[(2)] = inst_26940);

(statearr_26951_27098[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__27088,c__26746__auto___27092,G__26931_27089,G__26931_27090__$1,n__4607__auto___27087,jobs,results,process,async))
;
return ((function (__27088,switch__26639__auto__,c__26746__auto___27092,G__26931_27089,G__26931_27090__$1,n__4607__auto___27087,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____0 = (function (){
var statearr_26952 = [null,null,null,null,null,null,null];
(statearr_26952[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__);

(statearr_26952[(1)] = (1));

return statearr_26952;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____1 = (function (state_26944){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_26944);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e26953){if((e26953 instanceof Object)){
var ex__26643__auto__ = e26953;
var statearr_26954_27099 = state_26944;
(statearr_26954_27099[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26944);

return cljs.core.cst$kw$recur;
} else {
throw e26953;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__27100 = state_26944;
state_26944 = G__27100;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__ = function(state_26944){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____1.call(this,state_26944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__;
})()
;})(__27088,switch__26639__auto__,c__26746__auto___27092,G__26931_27089,G__26931_27090__$1,n__4607__auto___27087,jobs,results,process,async))
})();
var state__26748__auto__ = (function (){var statearr_26955 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_26955[(6)] = c__26746__auto___27092);

return statearr_26955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(__27088,c__26746__auto___27092,G__26931_27089,G__26931_27090__$1,n__4607__auto___27087,jobs,results,process,async))
);


break;
case "async":
var c__26746__auto___27101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27088,c__26746__auto___27101,G__26931_27089,G__26931_27090__$1,n__4607__auto___27087,jobs,results,process,async){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (__27088,c__26746__auto___27101,G__26931_27089,G__26931_27090__$1,n__4607__auto___27087,jobs,results,process,async){
return (function (state_26968){
var state_val_26969 = (state_26968[(1)]);
if((state_val_26969 === (1))){
var state_26968__$1 = state_26968;
var statearr_26970_27102 = state_26968__$1;
(statearr_26970_27102[(2)] = null);

(statearr_26970_27102[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26969 === (2))){
var state_26968__$1 = state_26968;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26968__$1,(4),jobs);
} else {
if((state_val_26969 === (3))){
var inst_26966 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26968__$1,inst_26966);
} else {
if((state_val_26969 === (4))){
var inst_26958 = (state_26968[(2)]);
var inst_26959 = async(inst_26958);
var state_26968__$1 = state_26968;
if(cljs.core.truth_(inst_26959)){
var statearr_26971_27103 = state_26968__$1;
(statearr_26971_27103[(1)] = (5));

} else {
var statearr_26972_27104 = state_26968__$1;
(statearr_26972_27104[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26969 === (5))){
var state_26968__$1 = state_26968;
var statearr_26973_27105 = state_26968__$1;
(statearr_26973_27105[(2)] = null);

(statearr_26973_27105[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26969 === (6))){
var state_26968__$1 = state_26968;
var statearr_26974_27106 = state_26968__$1;
(statearr_26974_27106[(2)] = null);

(statearr_26974_27106[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26969 === (7))){
var inst_26964 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
var statearr_26975_27107 = state_26968__$1;
(statearr_26975_27107[(2)] = inst_26964);

(statearr_26975_27107[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__27088,c__26746__auto___27101,G__26931_27089,G__26931_27090__$1,n__4607__auto___27087,jobs,results,process,async))
;
return ((function (__27088,switch__26639__auto__,c__26746__auto___27101,G__26931_27089,G__26931_27090__$1,n__4607__auto___27087,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____0 = (function (){
var statearr_26976 = [null,null,null,null,null,null,null];
(statearr_26976[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__);

(statearr_26976[(1)] = (1));

return statearr_26976;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____1 = (function (state_26968){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_26968);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e26977){if((e26977 instanceof Object)){
var ex__26643__auto__ = e26977;
var statearr_26978_27108 = state_26968;
(statearr_26978_27108[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26968);

return cljs.core.cst$kw$recur;
} else {
throw e26977;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__27109 = state_26968;
state_26968 = G__27109;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__ = function(state_26968){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____1.call(this,state_26968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__;
})()
;})(__27088,switch__26639__auto__,c__26746__auto___27101,G__26931_27089,G__26931_27090__$1,n__4607__auto___27087,jobs,results,process,async))
})();
var state__26748__auto__ = (function (){var statearr_26979 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_26979[(6)] = c__26746__auto___27101);

return statearr_26979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(__27088,c__26746__auto___27101,G__26931_27089,G__26931_27090__$1,n__4607__auto___27087,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26931_27090__$1)].join('')));

}

var G__27110 = (__27088 + (1));
__27088 = G__27110;
continue;
} else {
}
break;
}

var c__26746__auto___27111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto___27111,jobs,results,process,async){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto___27111,jobs,results,process,async){
return (function (state_27001){
var state_val_27002 = (state_27001[(1)]);
if((state_val_27002 === (7))){
var inst_26997 = (state_27001[(2)]);
var state_27001__$1 = state_27001;
var statearr_27003_27112 = state_27001__$1;
(statearr_27003_27112[(2)] = inst_26997);

(statearr_27003_27112[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27002 === (1))){
var state_27001__$1 = state_27001;
var statearr_27004_27113 = state_27001__$1;
(statearr_27004_27113[(2)] = null);

(statearr_27004_27113[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27002 === (4))){
var inst_26982 = (state_27001[(7)]);
var inst_26982__$1 = (state_27001[(2)]);
var inst_26983 = (inst_26982__$1 == null);
var state_27001__$1 = (function (){var statearr_27005 = state_27001;
(statearr_27005[(7)] = inst_26982__$1);

return statearr_27005;
})();
if(cljs.core.truth_(inst_26983)){
var statearr_27006_27114 = state_27001__$1;
(statearr_27006_27114[(1)] = (5));

} else {
var statearr_27007_27115 = state_27001__$1;
(statearr_27007_27115[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27002 === (6))){
var inst_26982 = (state_27001[(7)]);
var inst_26987 = (state_27001[(8)]);
var inst_26987__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_26988 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26989 = [inst_26982,inst_26987__$1];
var inst_26990 = (new cljs.core.PersistentVector(null,2,(5),inst_26988,inst_26989,null));
var state_27001__$1 = (function (){var statearr_27008 = state_27001;
(statearr_27008[(8)] = inst_26987__$1);

return statearr_27008;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27001__$1,(8),jobs,inst_26990);
} else {
if((state_val_27002 === (3))){
var inst_26999 = (state_27001[(2)]);
var state_27001__$1 = state_27001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27001__$1,inst_26999);
} else {
if((state_val_27002 === (2))){
var state_27001__$1 = state_27001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27001__$1,(4),from);
} else {
if((state_val_27002 === (9))){
var inst_26994 = (state_27001[(2)]);
var state_27001__$1 = (function (){var statearr_27009 = state_27001;
(statearr_27009[(9)] = inst_26994);

return statearr_27009;
})();
var statearr_27010_27116 = state_27001__$1;
(statearr_27010_27116[(2)] = null);

(statearr_27010_27116[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27002 === (5))){
var inst_26985 = cljs.core.async.close_BANG_(jobs);
var state_27001__$1 = state_27001;
var statearr_27011_27117 = state_27001__$1;
(statearr_27011_27117[(2)] = inst_26985);

(statearr_27011_27117[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27002 === (8))){
var inst_26987 = (state_27001[(8)]);
var inst_26992 = (state_27001[(2)]);
var state_27001__$1 = (function (){var statearr_27012 = state_27001;
(statearr_27012[(10)] = inst_26992);

return statearr_27012;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27001__$1,(9),results,inst_26987);
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
});})(c__26746__auto___27111,jobs,results,process,async))
;
return ((function (switch__26639__auto__,c__26746__auto___27111,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____0 = (function (){
var statearr_27013 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__);

(statearr_27013[(1)] = (1));

return statearr_27013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____1 = (function (state_27001){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_27001);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e27014){if((e27014 instanceof Object)){
var ex__26643__auto__ = e27014;
var statearr_27015_27118 = state_27001;
(statearr_27015_27118[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27001);

return cljs.core.cst$kw$recur;
} else {
throw e27014;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__27119 = state_27001;
state_27001 = G__27119;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__ = function(state_27001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____1.call(this,state_27001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto___27111,jobs,results,process,async))
})();
var state__26748__auto__ = (function (){var statearr_27016 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_27016[(6)] = c__26746__auto___27111);

return statearr_27016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto___27111,jobs,results,process,async))
);


var c__26746__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto__,jobs,results,process,async){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto__,jobs,results,process,async){
return (function (state_27054){
var state_val_27055 = (state_27054[(1)]);
if((state_val_27055 === (7))){
var inst_27050 = (state_27054[(2)]);
var state_27054__$1 = state_27054;
var statearr_27056_27120 = state_27054__$1;
(statearr_27056_27120[(2)] = inst_27050);

(statearr_27056_27120[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27055 === (20))){
var state_27054__$1 = state_27054;
var statearr_27057_27121 = state_27054__$1;
(statearr_27057_27121[(2)] = null);

(statearr_27057_27121[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27055 === (1))){
var state_27054__$1 = state_27054;
var statearr_27058_27122 = state_27054__$1;
(statearr_27058_27122[(2)] = null);

(statearr_27058_27122[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27055 === (4))){
var inst_27019 = (state_27054[(7)]);
var inst_27019__$1 = (state_27054[(2)]);
var inst_27020 = (inst_27019__$1 == null);
var state_27054__$1 = (function (){var statearr_27059 = state_27054;
(statearr_27059[(7)] = inst_27019__$1);

return statearr_27059;
})();
if(cljs.core.truth_(inst_27020)){
var statearr_27060_27123 = state_27054__$1;
(statearr_27060_27123[(1)] = (5));

} else {
var statearr_27061_27124 = state_27054__$1;
(statearr_27061_27124[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27055 === (15))){
var inst_27032 = (state_27054[(8)]);
var state_27054__$1 = state_27054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27054__$1,(18),to,inst_27032);
} else {
if((state_val_27055 === (21))){
var inst_27045 = (state_27054[(2)]);
var state_27054__$1 = state_27054;
var statearr_27062_27125 = state_27054__$1;
(statearr_27062_27125[(2)] = inst_27045);

(statearr_27062_27125[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27055 === (13))){
var inst_27047 = (state_27054[(2)]);
var state_27054__$1 = (function (){var statearr_27063 = state_27054;
(statearr_27063[(9)] = inst_27047);

return statearr_27063;
})();
var statearr_27064_27126 = state_27054__$1;
(statearr_27064_27126[(2)] = null);

(statearr_27064_27126[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27055 === (6))){
var inst_27019 = (state_27054[(7)]);
var state_27054__$1 = state_27054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27054__$1,(11),inst_27019);
} else {
if((state_val_27055 === (17))){
var inst_27040 = (state_27054[(2)]);
var state_27054__$1 = state_27054;
if(cljs.core.truth_(inst_27040)){
var statearr_27065_27127 = state_27054__$1;
(statearr_27065_27127[(1)] = (19));

} else {
var statearr_27066_27128 = state_27054__$1;
(statearr_27066_27128[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27055 === (3))){
var inst_27052 = (state_27054[(2)]);
var state_27054__$1 = state_27054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27054__$1,inst_27052);
} else {
if((state_val_27055 === (12))){
var inst_27029 = (state_27054[(10)]);
var state_27054__$1 = state_27054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27054__$1,(14),inst_27029);
} else {
if((state_val_27055 === (2))){
var state_27054__$1 = state_27054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27054__$1,(4),results);
} else {
if((state_val_27055 === (19))){
var state_27054__$1 = state_27054;
var statearr_27067_27129 = state_27054__$1;
(statearr_27067_27129[(2)] = null);

(statearr_27067_27129[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27055 === (11))){
var inst_27029 = (state_27054[(2)]);
var state_27054__$1 = (function (){var statearr_27068 = state_27054;
(statearr_27068[(10)] = inst_27029);

return statearr_27068;
})();
var statearr_27069_27130 = state_27054__$1;
(statearr_27069_27130[(2)] = null);

(statearr_27069_27130[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27055 === (9))){
var state_27054__$1 = state_27054;
var statearr_27070_27131 = state_27054__$1;
(statearr_27070_27131[(2)] = null);

(statearr_27070_27131[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27055 === (5))){
var state_27054__$1 = state_27054;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27071_27132 = state_27054__$1;
(statearr_27071_27132[(1)] = (8));

} else {
var statearr_27072_27133 = state_27054__$1;
(statearr_27072_27133[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27055 === (14))){
var inst_27032 = (state_27054[(8)]);
var inst_27034 = (state_27054[(11)]);
var inst_27032__$1 = (state_27054[(2)]);
var inst_27033 = (inst_27032__$1 == null);
var inst_27034__$1 = cljs.core.not(inst_27033);
var state_27054__$1 = (function (){var statearr_27073 = state_27054;
(statearr_27073[(8)] = inst_27032__$1);

(statearr_27073[(11)] = inst_27034__$1);

return statearr_27073;
})();
if(inst_27034__$1){
var statearr_27074_27134 = state_27054__$1;
(statearr_27074_27134[(1)] = (15));

} else {
var statearr_27075_27135 = state_27054__$1;
(statearr_27075_27135[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27055 === (16))){
var inst_27034 = (state_27054[(11)]);
var state_27054__$1 = state_27054;
var statearr_27076_27136 = state_27054__$1;
(statearr_27076_27136[(2)] = inst_27034);

(statearr_27076_27136[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27055 === (10))){
var inst_27026 = (state_27054[(2)]);
var state_27054__$1 = state_27054;
var statearr_27077_27137 = state_27054__$1;
(statearr_27077_27137[(2)] = inst_27026);

(statearr_27077_27137[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27055 === (18))){
var inst_27037 = (state_27054[(2)]);
var state_27054__$1 = state_27054;
var statearr_27078_27138 = state_27054__$1;
(statearr_27078_27138[(2)] = inst_27037);

(statearr_27078_27138[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27055 === (8))){
var inst_27023 = cljs.core.async.close_BANG_(to);
var state_27054__$1 = state_27054;
var statearr_27079_27139 = state_27054__$1;
(statearr_27079_27139[(2)] = inst_27023);

(statearr_27079_27139[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__26746__auto__,jobs,results,process,async))
;
return ((function (switch__26639__auto__,c__26746__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____0 = (function (){
var statearr_27080 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27080[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__);

(statearr_27080[(1)] = (1));

return statearr_27080;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____1 = (function (state_27054){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_27054);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e27081){if((e27081 instanceof Object)){
var ex__26643__auto__ = e27081;
var statearr_27082_27140 = state_27054;
(statearr_27082_27140[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27054);

return cljs.core.cst$kw$recur;
} else {
throw e27081;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__27141 = state_27054;
state_27054 = G__27141;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__ = function(state_27054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____1.call(this,state_27054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto__,jobs,results,process,async))
})();
var state__26748__auto__ = (function (){var statearr_27083 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_27083[(6)] = c__26746__auto__);

return statearr_27083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto__,jobs,results,process,async))
);

return c__26746__auto__;
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
var G__27143 = arguments.length;
switch (G__27143) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__27146 = arguments.length;
switch (G__27146) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__27149 = arguments.length;
switch (G__27149) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__26746__auto___27198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto___27198,tc,fc){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto___27198,tc,fc){
return (function (state_27175){
var state_val_27176 = (state_27175[(1)]);
if((state_val_27176 === (7))){
var inst_27171 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
var statearr_27177_27199 = state_27175__$1;
(statearr_27177_27199[(2)] = inst_27171);

(statearr_27177_27199[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27176 === (1))){
var state_27175__$1 = state_27175;
var statearr_27178_27200 = state_27175__$1;
(statearr_27178_27200[(2)] = null);

(statearr_27178_27200[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27176 === (4))){
var inst_27152 = (state_27175[(7)]);
var inst_27152__$1 = (state_27175[(2)]);
var inst_27153 = (inst_27152__$1 == null);
var state_27175__$1 = (function (){var statearr_27179 = state_27175;
(statearr_27179[(7)] = inst_27152__$1);

return statearr_27179;
})();
if(cljs.core.truth_(inst_27153)){
var statearr_27180_27201 = state_27175__$1;
(statearr_27180_27201[(1)] = (5));

} else {
var statearr_27181_27202 = state_27175__$1;
(statearr_27181_27202[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27176 === (13))){
var state_27175__$1 = state_27175;
var statearr_27182_27203 = state_27175__$1;
(statearr_27182_27203[(2)] = null);

(statearr_27182_27203[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27176 === (6))){
var inst_27152 = (state_27175[(7)]);
var inst_27158 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27152) : p.call(null,inst_27152));
var state_27175__$1 = state_27175;
if(cljs.core.truth_(inst_27158)){
var statearr_27183_27204 = state_27175__$1;
(statearr_27183_27204[(1)] = (9));

} else {
var statearr_27184_27205 = state_27175__$1;
(statearr_27184_27205[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27176 === (3))){
var inst_27173 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27175__$1,inst_27173);
} else {
if((state_val_27176 === (12))){
var state_27175__$1 = state_27175;
var statearr_27185_27206 = state_27175__$1;
(statearr_27185_27206[(2)] = null);

(statearr_27185_27206[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27176 === (2))){
var state_27175__$1 = state_27175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27175__$1,(4),ch);
} else {
if((state_val_27176 === (11))){
var inst_27152 = (state_27175[(7)]);
var inst_27162 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27175__$1,(8),inst_27162,inst_27152);
} else {
if((state_val_27176 === (9))){
var state_27175__$1 = state_27175;
var statearr_27186_27207 = state_27175__$1;
(statearr_27186_27207[(2)] = tc);

(statearr_27186_27207[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27176 === (5))){
var inst_27155 = cljs.core.async.close_BANG_(tc);
var inst_27156 = cljs.core.async.close_BANG_(fc);
var state_27175__$1 = (function (){var statearr_27187 = state_27175;
(statearr_27187[(8)] = inst_27155);

return statearr_27187;
})();
var statearr_27188_27208 = state_27175__$1;
(statearr_27188_27208[(2)] = inst_27156);

(statearr_27188_27208[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27176 === (14))){
var inst_27169 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
var statearr_27189_27209 = state_27175__$1;
(statearr_27189_27209[(2)] = inst_27169);

(statearr_27189_27209[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27176 === (10))){
var state_27175__$1 = state_27175;
var statearr_27190_27210 = state_27175__$1;
(statearr_27190_27210[(2)] = fc);

(statearr_27190_27210[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27176 === (8))){
var inst_27164 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
if(cljs.core.truth_(inst_27164)){
var statearr_27191_27211 = state_27175__$1;
(statearr_27191_27211[(1)] = (12));

} else {
var statearr_27192_27212 = state_27175__$1;
(statearr_27192_27212[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__26746__auto___27198,tc,fc))
;
return ((function (switch__26639__auto__,c__26746__auto___27198,tc,fc){
return (function() {
var cljs$core$async$state_machine__26640__auto__ = null;
var cljs$core$async$state_machine__26640__auto____0 = (function (){
var statearr_27193 = [null,null,null,null,null,null,null,null,null];
(statearr_27193[(0)] = cljs$core$async$state_machine__26640__auto__);

(statearr_27193[(1)] = (1));

return statearr_27193;
});
var cljs$core$async$state_machine__26640__auto____1 = (function (state_27175){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_27175);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e27194){if((e27194 instanceof Object)){
var ex__26643__auto__ = e27194;
var statearr_27195_27213 = state_27175;
(statearr_27195_27213[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27175);

return cljs.core.cst$kw$recur;
} else {
throw e27194;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__27214 = state_27175;
state_27175 = G__27214;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$state_machine__26640__auto__ = function(state_27175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26640__auto____1.call(this,state_27175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26640__auto____0;
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26640__auto____1;
return cljs$core$async$state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto___27198,tc,fc))
})();
var state__26748__auto__ = (function (){var statearr_27196 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_27196[(6)] = c__26746__auto___27198);

return statearr_27196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto___27198,tc,fc))
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
var c__26746__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto__){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto__){
return (function (state_27235){
var state_val_27236 = (state_27235[(1)]);
if((state_val_27236 === (7))){
var inst_27231 = (state_27235[(2)]);
var state_27235__$1 = state_27235;
var statearr_27237_27255 = state_27235__$1;
(statearr_27237_27255[(2)] = inst_27231);

(statearr_27237_27255[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27236 === (1))){
var inst_27215 = init;
var state_27235__$1 = (function (){var statearr_27238 = state_27235;
(statearr_27238[(7)] = inst_27215);

return statearr_27238;
})();
var statearr_27239_27256 = state_27235__$1;
(statearr_27239_27256[(2)] = null);

(statearr_27239_27256[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27236 === (4))){
var inst_27218 = (state_27235[(8)]);
var inst_27218__$1 = (state_27235[(2)]);
var inst_27219 = (inst_27218__$1 == null);
var state_27235__$1 = (function (){var statearr_27240 = state_27235;
(statearr_27240[(8)] = inst_27218__$1);

return statearr_27240;
})();
if(cljs.core.truth_(inst_27219)){
var statearr_27241_27257 = state_27235__$1;
(statearr_27241_27257[(1)] = (5));

} else {
var statearr_27242_27258 = state_27235__$1;
(statearr_27242_27258[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27236 === (6))){
var inst_27218 = (state_27235[(8)]);
var inst_27222 = (state_27235[(9)]);
var inst_27215 = (state_27235[(7)]);
var inst_27222__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_27215,inst_27218) : f.call(null,inst_27215,inst_27218));
var inst_27223 = cljs.core.reduced_QMARK_(inst_27222__$1);
var state_27235__$1 = (function (){var statearr_27243 = state_27235;
(statearr_27243[(9)] = inst_27222__$1);

return statearr_27243;
})();
if(inst_27223){
var statearr_27244_27259 = state_27235__$1;
(statearr_27244_27259[(1)] = (8));

} else {
var statearr_27245_27260 = state_27235__$1;
(statearr_27245_27260[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27236 === (3))){
var inst_27233 = (state_27235[(2)]);
var state_27235__$1 = state_27235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27235__$1,inst_27233);
} else {
if((state_val_27236 === (2))){
var state_27235__$1 = state_27235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27235__$1,(4),ch);
} else {
if((state_val_27236 === (9))){
var inst_27222 = (state_27235[(9)]);
var inst_27215 = inst_27222;
var state_27235__$1 = (function (){var statearr_27246 = state_27235;
(statearr_27246[(7)] = inst_27215);

return statearr_27246;
})();
var statearr_27247_27261 = state_27235__$1;
(statearr_27247_27261[(2)] = null);

(statearr_27247_27261[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27236 === (5))){
var inst_27215 = (state_27235[(7)]);
var state_27235__$1 = state_27235;
var statearr_27248_27262 = state_27235__$1;
(statearr_27248_27262[(2)] = inst_27215);

(statearr_27248_27262[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27236 === (10))){
var inst_27229 = (state_27235[(2)]);
var state_27235__$1 = state_27235;
var statearr_27249_27263 = state_27235__$1;
(statearr_27249_27263[(2)] = inst_27229);

(statearr_27249_27263[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27236 === (8))){
var inst_27222 = (state_27235[(9)]);
var inst_27225 = cljs.core.deref(inst_27222);
var state_27235__$1 = state_27235;
var statearr_27250_27264 = state_27235__$1;
(statearr_27250_27264[(2)] = inst_27225);

(statearr_27250_27264[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__26746__auto__))
;
return ((function (switch__26639__auto__,c__26746__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26640__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26640__auto____0 = (function (){
var statearr_27251 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27251[(0)] = cljs$core$async$reduce_$_state_machine__26640__auto__);

(statearr_27251[(1)] = (1));

return statearr_27251;
});
var cljs$core$async$reduce_$_state_machine__26640__auto____1 = (function (state_27235){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_27235);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e27252){if((e27252 instanceof Object)){
var ex__26643__auto__ = e27252;
var statearr_27253_27265 = state_27235;
(statearr_27253_27265[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27235);

return cljs.core.cst$kw$recur;
} else {
throw e27252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__27266 = state_27235;
state_27235 = G__27266;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26640__auto__ = function(state_27235){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26640__auto____1.call(this,state_27235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26640__auto____0;
cljs$core$async$reduce_$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26640__auto____1;
return cljs$core$async$reduce_$_state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto__))
})();
var state__26748__auto__ = (function (){var statearr_27254 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_27254[(6)] = c__26746__auto__);

return statearr_27254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto__))
);

return c__26746__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__26746__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto__,f__$1){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto__,f__$1){
return (function (state_27272){
var state_val_27273 = (state_27272[(1)]);
if((state_val_27273 === (1))){
var inst_27267 = cljs.core.async.reduce(f__$1,init,ch);
var state_27272__$1 = state_27272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27272__$1,(2),inst_27267);
} else {
if((state_val_27273 === (2))){
var inst_27269 = (state_27272[(2)]);
var inst_27270 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_27269) : f__$1.call(null,inst_27269));
var state_27272__$1 = state_27272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27272__$1,inst_27270);
} else {
return null;
}
}
});})(c__26746__auto__,f__$1))
;
return ((function (switch__26639__auto__,c__26746__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26640__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26640__auto____0 = (function (){
var statearr_27274 = [null,null,null,null,null,null,null];
(statearr_27274[(0)] = cljs$core$async$transduce_$_state_machine__26640__auto__);

(statearr_27274[(1)] = (1));

return statearr_27274;
});
var cljs$core$async$transduce_$_state_machine__26640__auto____1 = (function (state_27272){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_27272);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e27275){if((e27275 instanceof Object)){
var ex__26643__auto__ = e27275;
var statearr_27276_27278 = state_27272;
(statearr_27276_27278[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27272);

return cljs.core.cst$kw$recur;
} else {
throw e27275;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__27279 = state_27272;
state_27272 = G__27279;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26640__auto__ = function(state_27272){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26640__auto____1.call(this,state_27272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26640__auto____0;
cljs$core$async$transduce_$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26640__auto____1;
return cljs$core$async$transduce_$_state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto__,f__$1))
})();
var state__26748__auto__ = (function (){var statearr_27277 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_27277[(6)] = c__26746__auto__);

return statearr_27277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto__,f__$1))
);

return c__26746__auto__;
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
var G__27281 = arguments.length;
switch (G__27281) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26746__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto__){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto__){
return (function (state_27306){
var state_val_27307 = (state_27306[(1)]);
if((state_val_27307 === (7))){
var inst_27288 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
var statearr_27308_27329 = state_27306__$1;
(statearr_27308_27329[(2)] = inst_27288);

(statearr_27308_27329[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27307 === (1))){
var inst_27282 = cljs.core.seq(coll);
var inst_27283 = inst_27282;
var state_27306__$1 = (function (){var statearr_27309 = state_27306;
(statearr_27309[(7)] = inst_27283);

return statearr_27309;
})();
var statearr_27310_27330 = state_27306__$1;
(statearr_27310_27330[(2)] = null);

(statearr_27310_27330[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27307 === (4))){
var inst_27283 = (state_27306[(7)]);
var inst_27286 = cljs.core.first(inst_27283);
var state_27306__$1 = state_27306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27306__$1,(7),ch,inst_27286);
} else {
if((state_val_27307 === (13))){
var inst_27300 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
var statearr_27311_27331 = state_27306__$1;
(statearr_27311_27331[(2)] = inst_27300);

(statearr_27311_27331[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27307 === (6))){
var inst_27291 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
if(cljs.core.truth_(inst_27291)){
var statearr_27312_27332 = state_27306__$1;
(statearr_27312_27332[(1)] = (8));

} else {
var statearr_27313_27333 = state_27306__$1;
(statearr_27313_27333[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27307 === (3))){
var inst_27304 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27306__$1,inst_27304);
} else {
if((state_val_27307 === (12))){
var state_27306__$1 = state_27306;
var statearr_27314_27334 = state_27306__$1;
(statearr_27314_27334[(2)] = null);

(statearr_27314_27334[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27307 === (2))){
var inst_27283 = (state_27306[(7)]);
var state_27306__$1 = state_27306;
if(cljs.core.truth_(inst_27283)){
var statearr_27315_27335 = state_27306__$1;
(statearr_27315_27335[(1)] = (4));

} else {
var statearr_27316_27336 = state_27306__$1;
(statearr_27316_27336[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27307 === (11))){
var inst_27297 = cljs.core.async.close_BANG_(ch);
var state_27306__$1 = state_27306;
var statearr_27317_27337 = state_27306__$1;
(statearr_27317_27337[(2)] = inst_27297);

(statearr_27317_27337[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27307 === (9))){
var state_27306__$1 = state_27306;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27318_27338 = state_27306__$1;
(statearr_27318_27338[(1)] = (11));

} else {
var statearr_27319_27339 = state_27306__$1;
(statearr_27319_27339[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27307 === (5))){
var inst_27283 = (state_27306[(7)]);
var state_27306__$1 = state_27306;
var statearr_27320_27340 = state_27306__$1;
(statearr_27320_27340[(2)] = inst_27283);

(statearr_27320_27340[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27307 === (10))){
var inst_27302 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
var statearr_27321_27341 = state_27306__$1;
(statearr_27321_27341[(2)] = inst_27302);

(statearr_27321_27341[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27307 === (8))){
var inst_27283 = (state_27306[(7)]);
var inst_27293 = cljs.core.next(inst_27283);
var inst_27283__$1 = inst_27293;
var state_27306__$1 = (function (){var statearr_27322 = state_27306;
(statearr_27322[(7)] = inst_27283__$1);

return statearr_27322;
})();
var statearr_27323_27342 = state_27306__$1;
(statearr_27323_27342[(2)] = null);

(statearr_27323_27342[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__26746__auto__))
;
return ((function (switch__26639__auto__,c__26746__auto__){
return (function() {
var cljs$core$async$state_machine__26640__auto__ = null;
var cljs$core$async$state_machine__26640__auto____0 = (function (){
var statearr_27324 = [null,null,null,null,null,null,null,null];
(statearr_27324[(0)] = cljs$core$async$state_machine__26640__auto__);

(statearr_27324[(1)] = (1));

return statearr_27324;
});
var cljs$core$async$state_machine__26640__auto____1 = (function (state_27306){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_27306);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e27325){if((e27325 instanceof Object)){
var ex__26643__auto__ = e27325;
var statearr_27326_27343 = state_27306;
(statearr_27326_27343[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27306);

return cljs.core.cst$kw$recur;
} else {
throw e27325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__27344 = state_27306;
state_27306 = G__27344;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$state_machine__26640__auto__ = function(state_27306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26640__auto____1.call(this,state_27306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26640__auto____0;
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26640__auto____1;
return cljs$core$async$state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto__))
})();
var state__26748__auto__ = (function (){var statearr_27327 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_27327[(6)] = c__26746__auto__);

return statearr_27327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto__))
);

return c__26746__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27345 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27345 = (function (ch,cs,meta27346){
this.ch = ch;
this.cs = cs;
this.meta27346 = meta27346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27347,meta27346__$1){
var self__ = this;
var _27347__$1 = this;
return (new cljs.core.async.t_cljs$core$async27345(self__.ch,self__.cs,meta27346__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27347){
var self__ = this;
var _27347__$1 = this;
return self__.meta27346;
});})(cs))
;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27345.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta27346], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27345.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27345";

cljs.core.async.t_cljs$core$async27345.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27345");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27345.
 */
cljs.core.async.__GT_t_cljs$core$async27345 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27345(ch__$1,cs__$1,meta27346){
return (new cljs.core.async.t_cljs$core$async27345(ch__$1,cs__$1,meta27346));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27345(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26746__auto___27567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto___27567,cs,m,dchan,dctr,done){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto___27567,cs,m,dchan,dctr,done){
return (function (state_27482){
var state_val_27483 = (state_27482[(1)]);
if((state_val_27483 === (7))){
var inst_27478 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27484_27568 = state_27482__$1;
(statearr_27484_27568[(2)] = inst_27478);

(statearr_27484_27568[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (20))){
var inst_27381 = (state_27482[(7)]);
var inst_27393 = cljs.core.first(inst_27381);
var inst_27394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27393,(0),null);
var inst_27395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27393,(1),null);
var state_27482__$1 = (function (){var statearr_27485 = state_27482;
(statearr_27485[(8)] = inst_27394);

return statearr_27485;
})();
if(cljs.core.truth_(inst_27395)){
var statearr_27486_27569 = state_27482__$1;
(statearr_27486_27569[(1)] = (22));

} else {
var statearr_27487_27570 = state_27482__$1;
(statearr_27487_27570[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (27))){
var inst_27423 = (state_27482[(9)]);
var inst_27430 = (state_27482[(10)]);
var inst_27350 = (state_27482[(11)]);
var inst_27425 = (state_27482[(12)]);
var inst_27430__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27423,inst_27425);
var inst_27431 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27430__$1,inst_27350,done);
var state_27482__$1 = (function (){var statearr_27488 = state_27482;
(statearr_27488[(10)] = inst_27430__$1);

return statearr_27488;
})();
if(cljs.core.truth_(inst_27431)){
var statearr_27489_27571 = state_27482__$1;
(statearr_27489_27571[(1)] = (30));

} else {
var statearr_27490_27572 = state_27482__$1;
(statearr_27490_27572[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (1))){
var state_27482__$1 = state_27482;
var statearr_27491_27573 = state_27482__$1;
(statearr_27491_27573[(2)] = null);

(statearr_27491_27573[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (24))){
var inst_27381 = (state_27482[(7)]);
var inst_27400 = (state_27482[(2)]);
var inst_27401 = cljs.core.next(inst_27381);
var inst_27359 = inst_27401;
var inst_27360 = null;
var inst_27361 = (0);
var inst_27362 = (0);
var state_27482__$1 = (function (){var statearr_27492 = state_27482;
(statearr_27492[(13)] = inst_27359);

(statearr_27492[(14)] = inst_27362);

(statearr_27492[(15)] = inst_27361);

(statearr_27492[(16)] = inst_27400);

(statearr_27492[(17)] = inst_27360);

return statearr_27492;
})();
var statearr_27493_27574 = state_27482__$1;
(statearr_27493_27574[(2)] = null);

(statearr_27493_27574[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (39))){
var state_27482__$1 = state_27482;
var statearr_27497_27575 = state_27482__$1;
(statearr_27497_27575[(2)] = null);

(statearr_27497_27575[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (4))){
var inst_27350 = (state_27482[(11)]);
var inst_27350__$1 = (state_27482[(2)]);
var inst_27351 = (inst_27350__$1 == null);
var state_27482__$1 = (function (){var statearr_27498 = state_27482;
(statearr_27498[(11)] = inst_27350__$1);

return statearr_27498;
})();
if(cljs.core.truth_(inst_27351)){
var statearr_27499_27576 = state_27482__$1;
(statearr_27499_27576[(1)] = (5));

} else {
var statearr_27500_27577 = state_27482__$1;
(statearr_27500_27577[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (15))){
var inst_27359 = (state_27482[(13)]);
var inst_27362 = (state_27482[(14)]);
var inst_27361 = (state_27482[(15)]);
var inst_27360 = (state_27482[(17)]);
var inst_27377 = (state_27482[(2)]);
var inst_27378 = (inst_27362 + (1));
var tmp27494 = inst_27359;
var tmp27495 = inst_27361;
var tmp27496 = inst_27360;
var inst_27359__$1 = tmp27494;
var inst_27360__$1 = tmp27496;
var inst_27361__$1 = tmp27495;
var inst_27362__$1 = inst_27378;
var state_27482__$1 = (function (){var statearr_27501 = state_27482;
(statearr_27501[(13)] = inst_27359__$1);

(statearr_27501[(14)] = inst_27362__$1);

(statearr_27501[(15)] = inst_27361__$1);

(statearr_27501[(17)] = inst_27360__$1);

(statearr_27501[(18)] = inst_27377);

return statearr_27501;
})();
var statearr_27502_27578 = state_27482__$1;
(statearr_27502_27578[(2)] = null);

(statearr_27502_27578[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (21))){
var inst_27404 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27506_27579 = state_27482__$1;
(statearr_27506_27579[(2)] = inst_27404);

(statearr_27506_27579[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (31))){
var inst_27430 = (state_27482[(10)]);
var inst_27434 = done(null);
var inst_27435 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27430);
var state_27482__$1 = (function (){var statearr_27507 = state_27482;
(statearr_27507[(19)] = inst_27434);

return statearr_27507;
})();
var statearr_27508_27580 = state_27482__$1;
(statearr_27508_27580[(2)] = inst_27435);

(statearr_27508_27580[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (32))){
var inst_27422 = (state_27482[(20)]);
var inst_27423 = (state_27482[(9)]);
var inst_27425 = (state_27482[(12)]);
var inst_27424 = (state_27482[(21)]);
var inst_27437 = (state_27482[(2)]);
var inst_27438 = (inst_27425 + (1));
var tmp27503 = inst_27422;
var tmp27504 = inst_27423;
var tmp27505 = inst_27424;
var inst_27422__$1 = tmp27503;
var inst_27423__$1 = tmp27504;
var inst_27424__$1 = tmp27505;
var inst_27425__$1 = inst_27438;
var state_27482__$1 = (function (){var statearr_27509 = state_27482;
(statearr_27509[(20)] = inst_27422__$1);

(statearr_27509[(9)] = inst_27423__$1);

(statearr_27509[(22)] = inst_27437);

(statearr_27509[(12)] = inst_27425__$1);

(statearr_27509[(21)] = inst_27424__$1);

return statearr_27509;
})();
var statearr_27510_27581 = state_27482__$1;
(statearr_27510_27581[(2)] = null);

(statearr_27510_27581[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (40))){
var inst_27450 = (state_27482[(23)]);
var inst_27454 = done(null);
var inst_27455 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27450);
var state_27482__$1 = (function (){var statearr_27511 = state_27482;
(statearr_27511[(24)] = inst_27454);

return statearr_27511;
})();
var statearr_27512_27582 = state_27482__$1;
(statearr_27512_27582[(2)] = inst_27455);

(statearr_27512_27582[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (33))){
var inst_27441 = (state_27482[(25)]);
var inst_27443 = cljs.core.chunked_seq_QMARK_(inst_27441);
var state_27482__$1 = state_27482;
if(inst_27443){
var statearr_27513_27583 = state_27482__$1;
(statearr_27513_27583[(1)] = (36));

} else {
var statearr_27514_27584 = state_27482__$1;
(statearr_27514_27584[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (13))){
var inst_27371 = (state_27482[(26)]);
var inst_27374 = cljs.core.async.close_BANG_(inst_27371);
var state_27482__$1 = state_27482;
var statearr_27515_27585 = state_27482__$1;
(statearr_27515_27585[(2)] = inst_27374);

(statearr_27515_27585[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (22))){
var inst_27394 = (state_27482[(8)]);
var inst_27397 = cljs.core.async.close_BANG_(inst_27394);
var state_27482__$1 = state_27482;
var statearr_27516_27586 = state_27482__$1;
(statearr_27516_27586[(2)] = inst_27397);

(statearr_27516_27586[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (36))){
var inst_27441 = (state_27482[(25)]);
var inst_27445 = cljs.core.chunk_first(inst_27441);
var inst_27446 = cljs.core.chunk_rest(inst_27441);
var inst_27447 = cljs.core.count(inst_27445);
var inst_27422 = inst_27446;
var inst_27423 = inst_27445;
var inst_27424 = inst_27447;
var inst_27425 = (0);
var state_27482__$1 = (function (){var statearr_27517 = state_27482;
(statearr_27517[(20)] = inst_27422);

(statearr_27517[(9)] = inst_27423);

(statearr_27517[(12)] = inst_27425);

(statearr_27517[(21)] = inst_27424);

return statearr_27517;
})();
var statearr_27518_27587 = state_27482__$1;
(statearr_27518_27587[(2)] = null);

(statearr_27518_27587[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (41))){
var inst_27441 = (state_27482[(25)]);
var inst_27457 = (state_27482[(2)]);
var inst_27458 = cljs.core.next(inst_27441);
var inst_27422 = inst_27458;
var inst_27423 = null;
var inst_27424 = (0);
var inst_27425 = (0);
var state_27482__$1 = (function (){var statearr_27519 = state_27482;
(statearr_27519[(27)] = inst_27457);

(statearr_27519[(20)] = inst_27422);

(statearr_27519[(9)] = inst_27423);

(statearr_27519[(12)] = inst_27425);

(statearr_27519[(21)] = inst_27424);

return statearr_27519;
})();
var statearr_27520_27588 = state_27482__$1;
(statearr_27520_27588[(2)] = null);

(statearr_27520_27588[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (43))){
var state_27482__$1 = state_27482;
var statearr_27521_27589 = state_27482__$1;
(statearr_27521_27589[(2)] = null);

(statearr_27521_27589[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (29))){
var inst_27466 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27522_27590 = state_27482__$1;
(statearr_27522_27590[(2)] = inst_27466);

(statearr_27522_27590[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (44))){
var inst_27475 = (state_27482[(2)]);
var state_27482__$1 = (function (){var statearr_27523 = state_27482;
(statearr_27523[(28)] = inst_27475);

return statearr_27523;
})();
var statearr_27524_27591 = state_27482__$1;
(statearr_27524_27591[(2)] = null);

(statearr_27524_27591[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (6))){
var inst_27414 = (state_27482[(29)]);
var inst_27413 = cljs.core.deref(cs);
var inst_27414__$1 = cljs.core.keys(inst_27413);
var inst_27415 = cljs.core.count(inst_27414__$1);
var inst_27416 = cljs.core.reset_BANG_(dctr,inst_27415);
var inst_27421 = cljs.core.seq(inst_27414__$1);
var inst_27422 = inst_27421;
var inst_27423 = null;
var inst_27424 = (0);
var inst_27425 = (0);
var state_27482__$1 = (function (){var statearr_27525 = state_27482;
(statearr_27525[(29)] = inst_27414__$1);

(statearr_27525[(20)] = inst_27422);

(statearr_27525[(9)] = inst_27423);

(statearr_27525[(30)] = inst_27416);

(statearr_27525[(12)] = inst_27425);

(statearr_27525[(21)] = inst_27424);

return statearr_27525;
})();
var statearr_27526_27592 = state_27482__$1;
(statearr_27526_27592[(2)] = null);

(statearr_27526_27592[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (28))){
var inst_27422 = (state_27482[(20)]);
var inst_27441 = (state_27482[(25)]);
var inst_27441__$1 = cljs.core.seq(inst_27422);
var state_27482__$1 = (function (){var statearr_27527 = state_27482;
(statearr_27527[(25)] = inst_27441__$1);

return statearr_27527;
})();
if(inst_27441__$1){
var statearr_27528_27593 = state_27482__$1;
(statearr_27528_27593[(1)] = (33));

} else {
var statearr_27529_27594 = state_27482__$1;
(statearr_27529_27594[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (25))){
var inst_27425 = (state_27482[(12)]);
var inst_27424 = (state_27482[(21)]);
var inst_27427 = (inst_27425 < inst_27424);
var inst_27428 = inst_27427;
var state_27482__$1 = state_27482;
if(cljs.core.truth_(inst_27428)){
var statearr_27530_27595 = state_27482__$1;
(statearr_27530_27595[(1)] = (27));

} else {
var statearr_27531_27596 = state_27482__$1;
(statearr_27531_27596[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (34))){
var state_27482__$1 = state_27482;
var statearr_27532_27597 = state_27482__$1;
(statearr_27532_27597[(2)] = null);

(statearr_27532_27597[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (17))){
var state_27482__$1 = state_27482;
var statearr_27533_27598 = state_27482__$1;
(statearr_27533_27598[(2)] = null);

(statearr_27533_27598[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (3))){
var inst_27480 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27482__$1,inst_27480);
} else {
if((state_val_27483 === (12))){
var inst_27409 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27534_27599 = state_27482__$1;
(statearr_27534_27599[(2)] = inst_27409);

(statearr_27534_27599[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (2))){
var state_27482__$1 = state_27482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27482__$1,(4),ch);
} else {
if((state_val_27483 === (23))){
var state_27482__$1 = state_27482;
var statearr_27535_27600 = state_27482__$1;
(statearr_27535_27600[(2)] = null);

(statearr_27535_27600[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (35))){
var inst_27464 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27536_27601 = state_27482__$1;
(statearr_27536_27601[(2)] = inst_27464);

(statearr_27536_27601[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (19))){
var inst_27381 = (state_27482[(7)]);
var inst_27385 = cljs.core.chunk_first(inst_27381);
var inst_27386 = cljs.core.chunk_rest(inst_27381);
var inst_27387 = cljs.core.count(inst_27385);
var inst_27359 = inst_27386;
var inst_27360 = inst_27385;
var inst_27361 = inst_27387;
var inst_27362 = (0);
var state_27482__$1 = (function (){var statearr_27537 = state_27482;
(statearr_27537[(13)] = inst_27359);

(statearr_27537[(14)] = inst_27362);

(statearr_27537[(15)] = inst_27361);

(statearr_27537[(17)] = inst_27360);

return statearr_27537;
})();
var statearr_27538_27602 = state_27482__$1;
(statearr_27538_27602[(2)] = null);

(statearr_27538_27602[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (11))){
var inst_27381 = (state_27482[(7)]);
var inst_27359 = (state_27482[(13)]);
var inst_27381__$1 = cljs.core.seq(inst_27359);
var state_27482__$1 = (function (){var statearr_27539 = state_27482;
(statearr_27539[(7)] = inst_27381__$1);

return statearr_27539;
})();
if(inst_27381__$1){
var statearr_27540_27603 = state_27482__$1;
(statearr_27540_27603[(1)] = (16));

} else {
var statearr_27541_27604 = state_27482__$1;
(statearr_27541_27604[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (9))){
var inst_27411 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27542_27605 = state_27482__$1;
(statearr_27542_27605[(2)] = inst_27411);

(statearr_27542_27605[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (5))){
var inst_27357 = cljs.core.deref(cs);
var inst_27358 = cljs.core.seq(inst_27357);
var inst_27359 = inst_27358;
var inst_27360 = null;
var inst_27361 = (0);
var inst_27362 = (0);
var state_27482__$1 = (function (){var statearr_27543 = state_27482;
(statearr_27543[(13)] = inst_27359);

(statearr_27543[(14)] = inst_27362);

(statearr_27543[(15)] = inst_27361);

(statearr_27543[(17)] = inst_27360);

return statearr_27543;
})();
var statearr_27544_27606 = state_27482__$1;
(statearr_27544_27606[(2)] = null);

(statearr_27544_27606[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (14))){
var state_27482__$1 = state_27482;
var statearr_27545_27607 = state_27482__$1;
(statearr_27545_27607[(2)] = null);

(statearr_27545_27607[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (45))){
var inst_27472 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27546_27608 = state_27482__$1;
(statearr_27546_27608[(2)] = inst_27472);

(statearr_27546_27608[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (26))){
var inst_27414 = (state_27482[(29)]);
var inst_27468 = (state_27482[(2)]);
var inst_27469 = cljs.core.seq(inst_27414);
var state_27482__$1 = (function (){var statearr_27547 = state_27482;
(statearr_27547[(31)] = inst_27468);

return statearr_27547;
})();
if(inst_27469){
var statearr_27548_27609 = state_27482__$1;
(statearr_27548_27609[(1)] = (42));

} else {
var statearr_27549_27610 = state_27482__$1;
(statearr_27549_27610[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (16))){
var inst_27381 = (state_27482[(7)]);
var inst_27383 = cljs.core.chunked_seq_QMARK_(inst_27381);
var state_27482__$1 = state_27482;
if(inst_27383){
var statearr_27550_27611 = state_27482__$1;
(statearr_27550_27611[(1)] = (19));

} else {
var statearr_27551_27612 = state_27482__$1;
(statearr_27551_27612[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (38))){
var inst_27461 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27552_27613 = state_27482__$1;
(statearr_27552_27613[(2)] = inst_27461);

(statearr_27552_27613[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (30))){
var state_27482__$1 = state_27482;
var statearr_27553_27614 = state_27482__$1;
(statearr_27553_27614[(2)] = null);

(statearr_27553_27614[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (10))){
var inst_27362 = (state_27482[(14)]);
var inst_27360 = (state_27482[(17)]);
var inst_27370 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27360,inst_27362);
var inst_27371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27370,(0),null);
var inst_27372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27370,(1),null);
var state_27482__$1 = (function (){var statearr_27554 = state_27482;
(statearr_27554[(26)] = inst_27371);

return statearr_27554;
})();
if(cljs.core.truth_(inst_27372)){
var statearr_27555_27615 = state_27482__$1;
(statearr_27555_27615[(1)] = (13));

} else {
var statearr_27556_27616 = state_27482__$1;
(statearr_27556_27616[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (18))){
var inst_27407 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27557_27617 = state_27482__$1;
(statearr_27557_27617[(2)] = inst_27407);

(statearr_27557_27617[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (42))){
var state_27482__$1 = state_27482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27482__$1,(45),dchan);
} else {
if((state_val_27483 === (37))){
var inst_27450 = (state_27482[(23)]);
var inst_27350 = (state_27482[(11)]);
var inst_27441 = (state_27482[(25)]);
var inst_27450__$1 = cljs.core.first(inst_27441);
var inst_27451 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27450__$1,inst_27350,done);
var state_27482__$1 = (function (){var statearr_27558 = state_27482;
(statearr_27558[(23)] = inst_27450__$1);

return statearr_27558;
})();
if(cljs.core.truth_(inst_27451)){
var statearr_27559_27618 = state_27482__$1;
(statearr_27559_27618[(1)] = (39));

} else {
var statearr_27560_27619 = state_27482__$1;
(statearr_27560_27619[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27483 === (8))){
var inst_27362 = (state_27482[(14)]);
var inst_27361 = (state_27482[(15)]);
var inst_27364 = (inst_27362 < inst_27361);
var inst_27365 = inst_27364;
var state_27482__$1 = state_27482;
if(cljs.core.truth_(inst_27365)){
var statearr_27561_27620 = state_27482__$1;
(statearr_27561_27620[(1)] = (10));

} else {
var statearr_27562_27621 = state_27482__$1;
(statearr_27562_27621[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__26746__auto___27567,cs,m,dchan,dctr,done))
;
return ((function (switch__26639__auto__,c__26746__auto___27567,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26640__auto__ = null;
var cljs$core$async$mult_$_state_machine__26640__auto____0 = (function (){
var statearr_27563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27563[(0)] = cljs$core$async$mult_$_state_machine__26640__auto__);

(statearr_27563[(1)] = (1));

return statearr_27563;
});
var cljs$core$async$mult_$_state_machine__26640__auto____1 = (function (state_27482){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_27482);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e27564){if((e27564 instanceof Object)){
var ex__26643__auto__ = e27564;
var statearr_27565_27622 = state_27482;
(statearr_27565_27622[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27482);

return cljs.core.cst$kw$recur;
} else {
throw e27564;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__27623 = state_27482;
state_27482 = G__27623;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26640__auto__ = function(state_27482){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26640__auto____1.call(this,state_27482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26640__auto____0;
cljs$core$async$mult_$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26640__auto____1;
return cljs$core$async$mult_$_state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto___27567,cs,m,dchan,dctr,done))
})();
var state__26748__auto__ = (function (){var statearr_27566 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_27566[(6)] = c__26746__auto___27567);

return statearr_27566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto___27567,cs,m,dchan,dctr,done))
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
var G__27625 = arguments.length;
switch (G__27625) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27637 = arguments.length;
var i__4731__auto___27638 = (0);
while(true){
if((i__4731__auto___27638 < len__4730__auto___27637)){
args__4736__auto__.push((arguments[i__4731__auto___27638]));

var G__27639 = (i__4731__auto___27638 + (1));
i__4731__auto___27638 = G__27639;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27631){
var map__27632 = p__27631;
var map__27632__$1 = (((((!((map__27632 == null))))?(((((map__27632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27632):map__27632);
var opts = map__27632__$1;
var statearr_27634_27640 = state;
(statearr_27634_27640[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__27632,map__27632__$1,opts){
return (function (val){
var statearr_27635_27641 = state;
(statearr_27635_27641[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__27632,map__27632__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_27636_27642 = state;
(statearr_27636_27642[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27627){
var G__27628 = cljs.core.first(seq27627);
var seq27627__$1 = cljs.core.next(seq27627);
var G__27629 = cljs.core.first(seq27627__$1);
var seq27627__$2 = cljs.core.next(seq27627__$1);
var G__27630 = cljs.core.first(seq27627__$2);
var seq27627__$3 = cljs.core.next(seq27627__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27628,G__27629,G__27630,seq27627__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27643 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27644){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27644 = meta27644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27645,meta27644__$1){
var self__ = this;
var _27645__$1 = this;
return (new cljs.core.async.t_cljs$core$async27643(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27644__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27645){
var self__ = this;
var _27645__$1 = this;
return self__.meta27644;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27643.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27643.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta27644], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27643.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27643";

cljs.core.async.t_cljs$core$async27643.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27643");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27643.
 */
cljs.core.async.__GT_t_cljs$core$async27643 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27643(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27644){
return (new cljs.core.async.t_cljs$core$async27643(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27644));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27643(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26746__auto___27807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto___27807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto___27807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27747){
var state_val_27748 = (state_27747[(1)]);
if((state_val_27748 === (7))){
var inst_27662 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
var statearr_27749_27808 = state_27747__$1;
(statearr_27749_27808[(2)] = inst_27662);

(statearr_27749_27808[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (20))){
var inst_27674 = (state_27747[(7)]);
var state_27747__$1 = state_27747;
var statearr_27750_27809 = state_27747__$1;
(statearr_27750_27809[(2)] = inst_27674);

(statearr_27750_27809[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (27))){
var state_27747__$1 = state_27747;
var statearr_27751_27810 = state_27747__$1;
(statearr_27751_27810[(2)] = null);

(statearr_27751_27810[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (1))){
var inst_27649 = (state_27747[(8)]);
var inst_27649__$1 = calc_state();
var inst_27651 = (inst_27649__$1 == null);
var inst_27652 = cljs.core.not(inst_27651);
var state_27747__$1 = (function (){var statearr_27752 = state_27747;
(statearr_27752[(8)] = inst_27649__$1);

return statearr_27752;
})();
if(inst_27652){
var statearr_27753_27811 = state_27747__$1;
(statearr_27753_27811[(1)] = (2));

} else {
var statearr_27754_27812 = state_27747__$1;
(statearr_27754_27812[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (24))){
var inst_27707 = (state_27747[(9)]);
var inst_27698 = (state_27747[(10)]);
var inst_27721 = (state_27747[(11)]);
var inst_27721__$1 = (inst_27698.cljs$core$IFn$_invoke$arity$1 ? inst_27698.cljs$core$IFn$_invoke$arity$1(inst_27707) : inst_27698.call(null,inst_27707));
var state_27747__$1 = (function (){var statearr_27755 = state_27747;
(statearr_27755[(11)] = inst_27721__$1);

return statearr_27755;
})();
if(cljs.core.truth_(inst_27721__$1)){
var statearr_27756_27813 = state_27747__$1;
(statearr_27756_27813[(1)] = (29));

} else {
var statearr_27757_27814 = state_27747__$1;
(statearr_27757_27814[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (4))){
var inst_27665 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
if(cljs.core.truth_(inst_27665)){
var statearr_27758_27815 = state_27747__$1;
(statearr_27758_27815[(1)] = (8));

} else {
var statearr_27759_27816 = state_27747__$1;
(statearr_27759_27816[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (15))){
var inst_27692 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
if(cljs.core.truth_(inst_27692)){
var statearr_27760_27817 = state_27747__$1;
(statearr_27760_27817[(1)] = (19));

} else {
var statearr_27761_27818 = state_27747__$1;
(statearr_27761_27818[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (21))){
var inst_27697 = (state_27747[(12)]);
var inst_27697__$1 = (state_27747[(2)]);
var inst_27698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27697__$1,cljs.core.cst$kw$solos);
var inst_27699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27697__$1,cljs.core.cst$kw$mutes);
var inst_27700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27697__$1,cljs.core.cst$kw$reads);
var state_27747__$1 = (function (){var statearr_27762 = state_27747;
(statearr_27762[(13)] = inst_27699);

(statearr_27762[(10)] = inst_27698);

(statearr_27762[(12)] = inst_27697__$1);

return statearr_27762;
})();
return cljs.core.async.ioc_alts_BANG_(state_27747__$1,(22),inst_27700);
} else {
if((state_val_27748 === (31))){
var inst_27729 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
if(cljs.core.truth_(inst_27729)){
var statearr_27763_27819 = state_27747__$1;
(statearr_27763_27819[(1)] = (32));

} else {
var statearr_27764_27820 = state_27747__$1;
(statearr_27764_27820[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (32))){
var inst_27706 = (state_27747[(14)]);
var state_27747__$1 = state_27747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27747__$1,(35),out,inst_27706);
} else {
if((state_val_27748 === (33))){
var inst_27697 = (state_27747[(12)]);
var inst_27674 = inst_27697;
var state_27747__$1 = (function (){var statearr_27765 = state_27747;
(statearr_27765[(7)] = inst_27674);

return statearr_27765;
})();
var statearr_27766_27821 = state_27747__$1;
(statearr_27766_27821[(2)] = null);

(statearr_27766_27821[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (13))){
var inst_27674 = (state_27747[(7)]);
var inst_27681 = inst_27674.cljs$lang$protocol_mask$partition0$;
var inst_27682 = (inst_27681 & (64));
var inst_27683 = inst_27674.cljs$core$ISeq$;
var inst_27684 = (cljs.core.PROTOCOL_SENTINEL === inst_27683);
var inst_27685 = ((inst_27682) || (inst_27684));
var state_27747__$1 = state_27747;
if(cljs.core.truth_(inst_27685)){
var statearr_27767_27822 = state_27747__$1;
(statearr_27767_27822[(1)] = (16));

} else {
var statearr_27768_27823 = state_27747__$1;
(statearr_27768_27823[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (22))){
var inst_27706 = (state_27747[(14)]);
var inst_27707 = (state_27747[(9)]);
var inst_27705 = (state_27747[(2)]);
var inst_27706__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27705,(0),null);
var inst_27707__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27705,(1),null);
var inst_27708 = (inst_27706__$1 == null);
var inst_27709 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27707__$1,change);
var inst_27710 = ((inst_27708) || (inst_27709));
var state_27747__$1 = (function (){var statearr_27769 = state_27747;
(statearr_27769[(14)] = inst_27706__$1);

(statearr_27769[(9)] = inst_27707__$1);

return statearr_27769;
})();
if(cljs.core.truth_(inst_27710)){
var statearr_27770_27824 = state_27747__$1;
(statearr_27770_27824[(1)] = (23));

} else {
var statearr_27771_27825 = state_27747__$1;
(statearr_27771_27825[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (36))){
var inst_27697 = (state_27747[(12)]);
var inst_27674 = inst_27697;
var state_27747__$1 = (function (){var statearr_27772 = state_27747;
(statearr_27772[(7)] = inst_27674);

return statearr_27772;
})();
var statearr_27773_27826 = state_27747__$1;
(statearr_27773_27826[(2)] = null);

(statearr_27773_27826[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (29))){
var inst_27721 = (state_27747[(11)]);
var state_27747__$1 = state_27747;
var statearr_27774_27827 = state_27747__$1;
(statearr_27774_27827[(2)] = inst_27721);

(statearr_27774_27827[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (6))){
var state_27747__$1 = state_27747;
var statearr_27775_27828 = state_27747__$1;
(statearr_27775_27828[(2)] = false);

(statearr_27775_27828[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (28))){
var inst_27717 = (state_27747[(2)]);
var inst_27718 = calc_state();
var inst_27674 = inst_27718;
var state_27747__$1 = (function (){var statearr_27776 = state_27747;
(statearr_27776[(7)] = inst_27674);

(statearr_27776[(15)] = inst_27717);

return statearr_27776;
})();
var statearr_27777_27829 = state_27747__$1;
(statearr_27777_27829[(2)] = null);

(statearr_27777_27829[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (25))){
var inst_27743 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
var statearr_27778_27830 = state_27747__$1;
(statearr_27778_27830[(2)] = inst_27743);

(statearr_27778_27830[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (34))){
var inst_27741 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
var statearr_27779_27831 = state_27747__$1;
(statearr_27779_27831[(2)] = inst_27741);

(statearr_27779_27831[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (17))){
var state_27747__$1 = state_27747;
var statearr_27780_27832 = state_27747__$1;
(statearr_27780_27832[(2)] = false);

(statearr_27780_27832[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (3))){
var state_27747__$1 = state_27747;
var statearr_27781_27833 = state_27747__$1;
(statearr_27781_27833[(2)] = false);

(statearr_27781_27833[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (12))){
var inst_27745 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27747__$1,inst_27745);
} else {
if((state_val_27748 === (2))){
var inst_27649 = (state_27747[(8)]);
var inst_27654 = inst_27649.cljs$lang$protocol_mask$partition0$;
var inst_27655 = (inst_27654 & (64));
var inst_27656 = inst_27649.cljs$core$ISeq$;
var inst_27657 = (cljs.core.PROTOCOL_SENTINEL === inst_27656);
var inst_27658 = ((inst_27655) || (inst_27657));
var state_27747__$1 = state_27747;
if(cljs.core.truth_(inst_27658)){
var statearr_27782_27834 = state_27747__$1;
(statearr_27782_27834[(1)] = (5));

} else {
var statearr_27783_27835 = state_27747__$1;
(statearr_27783_27835[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (23))){
var inst_27706 = (state_27747[(14)]);
var inst_27712 = (inst_27706 == null);
var state_27747__$1 = state_27747;
if(cljs.core.truth_(inst_27712)){
var statearr_27784_27836 = state_27747__$1;
(statearr_27784_27836[(1)] = (26));

} else {
var statearr_27785_27837 = state_27747__$1;
(statearr_27785_27837[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (35))){
var inst_27732 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
if(cljs.core.truth_(inst_27732)){
var statearr_27786_27838 = state_27747__$1;
(statearr_27786_27838[(1)] = (36));

} else {
var statearr_27787_27839 = state_27747__$1;
(statearr_27787_27839[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (19))){
var inst_27674 = (state_27747[(7)]);
var inst_27694 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27674);
var state_27747__$1 = state_27747;
var statearr_27788_27840 = state_27747__$1;
(statearr_27788_27840[(2)] = inst_27694);

(statearr_27788_27840[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (11))){
var inst_27674 = (state_27747[(7)]);
var inst_27678 = (inst_27674 == null);
var inst_27679 = cljs.core.not(inst_27678);
var state_27747__$1 = state_27747;
if(inst_27679){
var statearr_27789_27841 = state_27747__$1;
(statearr_27789_27841[(1)] = (13));

} else {
var statearr_27790_27842 = state_27747__$1;
(statearr_27790_27842[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (9))){
var inst_27649 = (state_27747[(8)]);
var state_27747__$1 = state_27747;
var statearr_27791_27843 = state_27747__$1;
(statearr_27791_27843[(2)] = inst_27649);

(statearr_27791_27843[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (5))){
var state_27747__$1 = state_27747;
var statearr_27792_27844 = state_27747__$1;
(statearr_27792_27844[(2)] = true);

(statearr_27792_27844[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (14))){
var state_27747__$1 = state_27747;
var statearr_27793_27845 = state_27747__$1;
(statearr_27793_27845[(2)] = false);

(statearr_27793_27845[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (26))){
var inst_27707 = (state_27747[(9)]);
var inst_27714 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_27707);
var state_27747__$1 = state_27747;
var statearr_27794_27846 = state_27747__$1;
(statearr_27794_27846[(2)] = inst_27714);

(statearr_27794_27846[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (16))){
var state_27747__$1 = state_27747;
var statearr_27795_27847 = state_27747__$1;
(statearr_27795_27847[(2)] = true);

(statearr_27795_27847[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (38))){
var inst_27737 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
var statearr_27796_27848 = state_27747__$1;
(statearr_27796_27848[(2)] = inst_27737);

(statearr_27796_27848[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (30))){
var inst_27699 = (state_27747[(13)]);
var inst_27707 = (state_27747[(9)]);
var inst_27698 = (state_27747[(10)]);
var inst_27724 = cljs.core.empty_QMARK_(inst_27698);
var inst_27725 = (inst_27699.cljs$core$IFn$_invoke$arity$1 ? inst_27699.cljs$core$IFn$_invoke$arity$1(inst_27707) : inst_27699.call(null,inst_27707));
var inst_27726 = cljs.core.not(inst_27725);
var inst_27727 = ((inst_27724) && (inst_27726));
var state_27747__$1 = state_27747;
var statearr_27797_27849 = state_27747__$1;
(statearr_27797_27849[(2)] = inst_27727);

(statearr_27797_27849[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (10))){
var inst_27649 = (state_27747[(8)]);
var inst_27670 = (state_27747[(2)]);
var inst_27671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27670,cljs.core.cst$kw$solos);
var inst_27672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27670,cljs.core.cst$kw$mutes);
var inst_27673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27670,cljs.core.cst$kw$reads);
var inst_27674 = inst_27649;
var state_27747__$1 = (function (){var statearr_27798 = state_27747;
(statearr_27798[(7)] = inst_27674);

(statearr_27798[(16)] = inst_27673);

(statearr_27798[(17)] = inst_27672);

(statearr_27798[(18)] = inst_27671);

return statearr_27798;
})();
var statearr_27799_27850 = state_27747__$1;
(statearr_27799_27850[(2)] = null);

(statearr_27799_27850[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (18))){
var inst_27689 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
var statearr_27800_27851 = state_27747__$1;
(statearr_27800_27851[(2)] = inst_27689);

(statearr_27800_27851[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (37))){
var state_27747__$1 = state_27747;
var statearr_27801_27852 = state_27747__$1;
(statearr_27801_27852[(2)] = null);

(statearr_27801_27852[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27748 === (8))){
var inst_27649 = (state_27747[(8)]);
var inst_27667 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27649);
var state_27747__$1 = state_27747;
var statearr_27802_27853 = state_27747__$1;
(statearr_27802_27853[(2)] = inst_27667);

(statearr_27802_27853[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__26746__auto___27807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26639__auto__,c__26746__auto___27807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26640__auto__ = null;
var cljs$core$async$mix_$_state_machine__26640__auto____0 = (function (){
var statearr_27803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27803[(0)] = cljs$core$async$mix_$_state_machine__26640__auto__);

(statearr_27803[(1)] = (1));

return statearr_27803;
});
var cljs$core$async$mix_$_state_machine__26640__auto____1 = (function (state_27747){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_27747);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e27804){if((e27804 instanceof Object)){
var ex__26643__auto__ = e27804;
var statearr_27805_27854 = state_27747;
(statearr_27805_27854[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27747);

return cljs.core.cst$kw$recur;
} else {
throw e27804;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__27855 = state_27747;
state_27747 = G__27855;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26640__auto__ = function(state_27747){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26640__auto____1.call(this,state_27747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26640__auto____0;
cljs$core$async$mix_$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26640__auto____1;
return cljs$core$async$mix_$_state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto___27807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26748__auto__ = (function (){var statearr_27806 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_27806[(6)] = c__26746__auto___27807);

return statearr_27806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto___27807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27857 = arguments.length;
switch (G__27857) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__27861 = arguments.length;
switch (G__27861) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__27859_SHARP_){
if(cljs.core.truth_((p1__27859_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27859_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__27859_SHARP_.call(null,topic)))){
return p1__27859_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27859_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27862 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27863){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27863 = meta27863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27864,meta27863__$1){
var self__ = this;
var _27864__$1 = this;
return (new cljs.core.async.t_cljs$core$async27862(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27863__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27864){
var self__ = this;
var _27864__$1 = this;
return self__.meta27863;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27862.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27862.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27862.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27862.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27862.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27862.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27862.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27862.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta27863], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27862";

cljs.core.async.t_cljs$core$async27862.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27862");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27862.
 */
cljs.core.async.__GT_t_cljs$core$async27862 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27862(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27863){
return (new cljs.core.async.t_cljs$core$async27862(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27863));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27862(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26746__auto___27982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto___27982,mults,ensure_mult,p){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto___27982,mults,ensure_mult,p){
return (function (state_27936){
var state_val_27937 = (state_27936[(1)]);
if((state_val_27937 === (7))){
var inst_27932 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27938_27983 = state_27936__$1;
(statearr_27938_27983[(2)] = inst_27932);

(statearr_27938_27983[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (20))){
var state_27936__$1 = state_27936;
var statearr_27939_27984 = state_27936__$1;
(statearr_27939_27984[(2)] = null);

(statearr_27939_27984[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (1))){
var state_27936__$1 = state_27936;
var statearr_27940_27985 = state_27936__$1;
(statearr_27940_27985[(2)] = null);

(statearr_27940_27985[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (24))){
var inst_27915 = (state_27936[(7)]);
var inst_27924 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_27915);
var state_27936__$1 = state_27936;
var statearr_27941_27986 = state_27936__$1;
(statearr_27941_27986[(2)] = inst_27924);

(statearr_27941_27986[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (4))){
var inst_27867 = (state_27936[(8)]);
var inst_27867__$1 = (state_27936[(2)]);
var inst_27868 = (inst_27867__$1 == null);
var state_27936__$1 = (function (){var statearr_27942 = state_27936;
(statearr_27942[(8)] = inst_27867__$1);

return statearr_27942;
})();
if(cljs.core.truth_(inst_27868)){
var statearr_27943_27987 = state_27936__$1;
(statearr_27943_27987[(1)] = (5));

} else {
var statearr_27944_27988 = state_27936__$1;
(statearr_27944_27988[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (15))){
var inst_27909 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27945_27989 = state_27936__$1;
(statearr_27945_27989[(2)] = inst_27909);

(statearr_27945_27989[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (21))){
var inst_27929 = (state_27936[(2)]);
var state_27936__$1 = (function (){var statearr_27946 = state_27936;
(statearr_27946[(9)] = inst_27929);

return statearr_27946;
})();
var statearr_27947_27990 = state_27936__$1;
(statearr_27947_27990[(2)] = null);

(statearr_27947_27990[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (13))){
var inst_27891 = (state_27936[(10)]);
var inst_27893 = cljs.core.chunked_seq_QMARK_(inst_27891);
var state_27936__$1 = state_27936;
if(inst_27893){
var statearr_27948_27991 = state_27936__$1;
(statearr_27948_27991[(1)] = (16));

} else {
var statearr_27949_27992 = state_27936__$1;
(statearr_27949_27992[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (22))){
var inst_27921 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
if(cljs.core.truth_(inst_27921)){
var statearr_27950_27993 = state_27936__$1;
(statearr_27950_27993[(1)] = (23));

} else {
var statearr_27951_27994 = state_27936__$1;
(statearr_27951_27994[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (6))){
var inst_27867 = (state_27936[(8)]);
var inst_27917 = (state_27936[(11)]);
var inst_27915 = (state_27936[(7)]);
var inst_27915__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_27867) : topic_fn.call(null,inst_27867));
var inst_27916 = cljs.core.deref(mults);
var inst_27917__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27916,inst_27915__$1);
var state_27936__$1 = (function (){var statearr_27952 = state_27936;
(statearr_27952[(11)] = inst_27917__$1);

(statearr_27952[(7)] = inst_27915__$1);

return statearr_27952;
})();
if(cljs.core.truth_(inst_27917__$1)){
var statearr_27953_27995 = state_27936__$1;
(statearr_27953_27995[(1)] = (19));

} else {
var statearr_27954_27996 = state_27936__$1;
(statearr_27954_27996[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (25))){
var inst_27926 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27955_27997 = state_27936__$1;
(statearr_27955_27997[(2)] = inst_27926);

(statearr_27955_27997[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (17))){
var inst_27891 = (state_27936[(10)]);
var inst_27900 = cljs.core.first(inst_27891);
var inst_27901 = cljs.core.async.muxch_STAR_(inst_27900);
var inst_27902 = cljs.core.async.close_BANG_(inst_27901);
var inst_27903 = cljs.core.next(inst_27891);
var inst_27877 = inst_27903;
var inst_27878 = null;
var inst_27879 = (0);
var inst_27880 = (0);
var state_27936__$1 = (function (){var statearr_27956 = state_27936;
(statearr_27956[(12)] = inst_27879);

(statearr_27956[(13)] = inst_27880);

(statearr_27956[(14)] = inst_27877);

(statearr_27956[(15)] = inst_27878);

(statearr_27956[(16)] = inst_27902);

return statearr_27956;
})();
var statearr_27957_27998 = state_27936__$1;
(statearr_27957_27998[(2)] = null);

(statearr_27957_27998[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (3))){
var inst_27934 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27936__$1,inst_27934);
} else {
if((state_val_27937 === (12))){
var inst_27911 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27958_27999 = state_27936__$1;
(statearr_27958_27999[(2)] = inst_27911);

(statearr_27958_27999[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (2))){
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27936__$1,(4),ch);
} else {
if((state_val_27937 === (23))){
var state_27936__$1 = state_27936;
var statearr_27959_28000 = state_27936__$1;
(statearr_27959_28000[(2)] = null);

(statearr_27959_28000[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (19))){
var inst_27867 = (state_27936[(8)]);
var inst_27917 = (state_27936[(11)]);
var inst_27919 = cljs.core.async.muxch_STAR_(inst_27917);
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27936__$1,(22),inst_27919,inst_27867);
} else {
if((state_val_27937 === (11))){
var inst_27877 = (state_27936[(14)]);
var inst_27891 = (state_27936[(10)]);
var inst_27891__$1 = cljs.core.seq(inst_27877);
var state_27936__$1 = (function (){var statearr_27960 = state_27936;
(statearr_27960[(10)] = inst_27891__$1);

return statearr_27960;
})();
if(inst_27891__$1){
var statearr_27961_28001 = state_27936__$1;
(statearr_27961_28001[(1)] = (13));

} else {
var statearr_27962_28002 = state_27936__$1;
(statearr_27962_28002[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (9))){
var inst_27913 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27963_28003 = state_27936__$1;
(statearr_27963_28003[(2)] = inst_27913);

(statearr_27963_28003[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (5))){
var inst_27874 = cljs.core.deref(mults);
var inst_27875 = cljs.core.vals(inst_27874);
var inst_27876 = cljs.core.seq(inst_27875);
var inst_27877 = inst_27876;
var inst_27878 = null;
var inst_27879 = (0);
var inst_27880 = (0);
var state_27936__$1 = (function (){var statearr_27964 = state_27936;
(statearr_27964[(12)] = inst_27879);

(statearr_27964[(13)] = inst_27880);

(statearr_27964[(14)] = inst_27877);

(statearr_27964[(15)] = inst_27878);

return statearr_27964;
})();
var statearr_27965_28004 = state_27936__$1;
(statearr_27965_28004[(2)] = null);

(statearr_27965_28004[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (14))){
var state_27936__$1 = state_27936;
var statearr_27969_28005 = state_27936__$1;
(statearr_27969_28005[(2)] = null);

(statearr_27969_28005[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (16))){
var inst_27891 = (state_27936[(10)]);
var inst_27895 = cljs.core.chunk_first(inst_27891);
var inst_27896 = cljs.core.chunk_rest(inst_27891);
var inst_27897 = cljs.core.count(inst_27895);
var inst_27877 = inst_27896;
var inst_27878 = inst_27895;
var inst_27879 = inst_27897;
var inst_27880 = (0);
var state_27936__$1 = (function (){var statearr_27970 = state_27936;
(statearr_27970[(12)] = inst_27879);

(statearr_27970[(13)] = inst_27880);

(statearr_27970[(14)] = inst_27877);

(statearr_27970[(15)] = inst_27878);

return statearr_27970;
})();
var statearr_27971_28006 = state_27936__$1;
(statearr_27971_28006[(2)] = null);

(statearr_27971_28006[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (10))){
var inst_27879 = (state_27936[(12)]);
var inst_27880 = (state_27936[(13)]);
var inst_27877 = (state_27936[(14)]);
var inst_27878 = (state_27936[(15)]);
var inst_27885 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27878,inst_27880);
var inst_27886 = cljs.core.async.muxch_STAR_(inst_27885);
var inst_27887 = cljs.core.async.close_BANG_(inst_27886);
var inst_27888 = (inst_27880 + (1));
var tmp27966 = inst_27879;
var tmp27967 = inst_27877;
var tmp27968 = inst_27878;
var inst_27877__$1 = tmp27967;
var inst_27878__$1 = tmp27968;
var inst_27879__$1 = tmp27966;
var inst_27880__$1 = inst_27888;
var state_27936__$1 = (function (){var statearr_27972 = state_27936;
(statearr_27972[(12)] = inst_27879__$1);

(statearr_27972[(17)] = inst_27887);

(statearr_27972[(13)] = inst_27880__$1);

(statearr_27972[(14)] = inst_27877__$1);

(statearr_27972[(15)] = inst_27878__$1);

return statearr_27972;
})();
var statearr_27973_28007 = state_27936__$1;
(statearr_27973_28007[(2)] = null);

(statearr_27973_28007[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (18))){
var inst_27906 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27974_28008 = state_27936__$1;
(statearr_27974_28008[(2)] = inst_27906);

(statearr_27974_28008[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27937 === (8))){
var inst_27879 = (state_27936[(12)]);
var inst_27880 = (state_27936[(13)]);
var inst_27882 = (inst_27880 < inst_27879);
var inst_27883 = inst_27882;
var state_27936__$1 = state_27936;
if(cljs.core.truth_(inst_27883)){
var statearr_27975_28009 = state_27936__$1;
(statearr_27975_28009[(1)] = (10));

} else {
var statearr_27976_28010 = state_27936__$1;
(statearr_27976_28010[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__26746__auto___27982,mults,ensure_mult,p))
;
return ((function (switch__26639__auto__,c__26746__auto___27982,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26640__auto__ = null;
var cljs$core$async$state_machine__26640__auto____0 = (function (){
var statearr_27977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27977[(0)] = cljs$core$async$state_machine__26640__auto__);

(statearr_27977[(1)] = (1));

return statearr_27977;
});
var cljs$core$async$state_machine__26640__auto____1 = (function (state_27936){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_27936);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e27978){if((e27978 instanceof Object)){
var ex__26643__auto__ = e27978;
var statearr_27979_28011 = state_27936;
(statearr_27979_28011[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27936);

return cljs.core.cst$kw$recur;
} else {
throw e27978;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__28012 = state_27936;
state_27936 = G__28012;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$state_machine__26640__auto__ = function(state_27936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26640__auto____1.call(this,state_27936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26640__auto____0;
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26640__auto____1;
return cljs$core$async$state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto___27982,mults,ensure_mult,p))
})();
var state__26748__auto__ = (function (){var statearr_27980 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_27980[(6)] = c__26746__auto___27982);

return statearr_27980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto___27982,mults,ensure_mult,p))
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
var G__28014 = arguments.length;
switch (G__28014) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28017 = arguments.length;
switch (G__28017) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__28020 = arguments.length;
switch (G__28020) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__26746__auto___28087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto___28087,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto___28087,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28059){
var state_val_28060 = (state_28059[(1)]);
if((state_val_28060 === (7))){
var state_28059__$1 = state_28059;
var statearr_28061_28088 = state_28059__$1;
(statearr_28061_28088[(2)] = null);

(statearr_28061_28088[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28060 === (1))){
var state_28059__$1 = state_28059;
var statearr_28062_28089 = state_28059__$1;
(statearr_28062_28089[(2)] = null);

(statearr_28062_28089[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28060 === (4))){
var inst_28023 = (state_28059[(7)]);
var inst_28025 = (inst_28023 < cnt);
var state_28059__$1 = state_28059;
if(cljs.core.truth_(inst_28025)){
var statearr_28063_28090 = state_28059__$1;
(statearr_28063_28090[(1)] = (6));

} else {
var statearr_28064_28091 = state_28059__$1;
(statearr_28064_28091[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28060 === (15))){
var inst_28055 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28065_28092 = state_28059__$1;
(statearr_28065_28092[(2)] = inst_28055);

(statearr_28065_28092[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28060 === (13))){
var inst_28048 = cljs.core.async.close_BANG_(out);
var state_28059__$1 = state_28059;
var statearr_28066_28093 = state_28059__$1;
(statearr_28066_28093[(2)] = inst_28048);

(statearr_28066_28093[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28060 === (6))){
var state_28059__$1 = state_28059;
var statearr_28067_28094 = state_28059__$1;
(statearr_28067_28094[(2)] = null);

(statearr_28067_28094[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28060 === (3))){
var inst_28057 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28059__$1,inst_28057);
} else {
if((state_val_28060 === (12))){
var inst_28045 = (state_28059[(8)]);
var inst_28045__$1 = (state_28059[(2)]);
var inst_28046 = cljs.core.some(cljs.core.nil_QMARK_,inst_28045__$1);
var state_28059__$1 = (function (){var statearr_28068 = state_28059;
(statearr_28068[(8)] = inst_28045__$1);

return statearr_28068;
})();
if(cljs.core.truth_(inst_28046)){
var statearr_28069_28095 = state_28059__$1;
(statearr_28069_28095[(1)] = (13));

} else {
var statearr_28070_28096 = state_28059__$1;
(statearr_28070_28096[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28060 === (2))){
var inst_28022 = cljs.core.reset_BANG_(dctr,cnt);
var inst_28023 = (0);
var state_28059__$1 = (function (){var statearr_28071 = state_28059;
(statearr_28071[(9)] = inst_28022);

(statearr_28071[(7)] = inst_28023);

return statearr_28071;
})();
var statearr_28072_28097 = state_28059__$1;
(statearr_28072_28097[(2)] = null);

(statearr_28072_28097[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28060 === (11))){
var inst_28023 = (state_28059[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_28059,(10),Object,null,(9));
var inst_28032 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_28023) : chs__$1.call(null,inst_28023));
var inst_28033 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_28023) : done.call(null,inst_28023));
var inst_28034 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_28032,inst_28033);
var state_28059__$1 = state_28059;
var statearr_28073_28098 = state_28059__$1;
(statearr_28073_28098[(2)] = inst_28034);


cljs.core.async.impl.ioc_helpers.process_exception(state_28059__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_28060 === (9))){
var inst_28023 = (state_28059[(7)]);
var inst_28036 = (state_28059[(2)]);
var inst_28037 = (inst_28023 + (1));
var inst_28023__$1 = inst_28037;
var state_28059__$1 = (function (){var statearr_28074 = state_28059;
(statearr_28074[(7)] = inst_28023__$1);

(statearr_28074[(10)] = inst_28036);

return statearr_28074;
})();
var statearr_28075_28099 = state_28059__$1;
(statearr_28075_28099[(2)] = null);

(statearr_28075_28099[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28060 === (5))){
var inst_28043 = (state_28059[(2)]);
var state_28059__$1 = (function (){var statearr_28076 = state_28059;
(statearr_28076[(11)] = inst_28043);

return statearr_28076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28059__$1,(12),dchan);
} else {
if((state_val_28060 === (14))){
var inst_28045 = (state_28059[(8)]);
var inst_28050 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_28045);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28059__$1,(16),out,inst_28050);
} else {
if((state_val_28060 === (16))){
var inst_28052 = (state_28059[(2)]);
var state_28059__$1 = (function (){var statearr_28077 = state_28059;
(statearr_28077[(12)] = inst_28052);

return statearr_28077;
})();
var statearr_28078_28100 = state_28059__$1;
(statearr_28078_28100[(2)] = null);

(statearr_28078_28100[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28060 === (10))){
var inst_28027 = (state_28059[(2)]);
var inst_28028 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_28059__$1 = (function (){var statearr_28079 = state_28059;
(statearr_28079[(13)] = inst_28027);

return statearr_28079;
})();
var statearr_28080_28101 = state_28059__$1;
(statearr_28080_28101[(2)] = inst_28028);


cljs.core.async.impl.ioc_helpers.process_exception(state_28059__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_28060 === (8))){
var inst_28041 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28081_28102 = state_28059__$1;
(statearr_28081_28102[(2)] = inst_28041);

(statearr_28081_28102[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__26746__auto___28087,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26639__auto__,c__26746__auto___28087,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26640__auto__ = null;
var cljs$core$async$state_machine__26640__auto____0 = (function (){
var statearr_28082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28082[(0)] = cljs$core$async$state_machine__26640__auto__);

(statearr_28082[(1)] = (1));

return statearr_28082;
});
var cljs$core$async$state_machine__26640__auto____1 = (function (state_28059){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_28059);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e28083){if((e28083 instanceof Object)){
var ex__26643__auto__ = e28083;
var statearr_28084_28103 = state_28059;
(statearr_28084_28103[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28059);

return cljs.core.cst$kw$recur;
} else {
throw e28083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__28104 = state_28059;
state_28059 = G__28104;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$state_machine__26640__auto__ = function(state_28059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26640__auto____1.call(this,state_28059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26640__auto____0;
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26640__auto____1;
return cljs$core$async$state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto___28087,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26748__auto__ = (function (){var statearr_28085 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_28085[(6)] = c__26746__auto___28087);

return statearr_28085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto___28087,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28107 = arguments.length;
switch (G__28107) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26746__auto___28161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto___28161,out){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto___28161,out){
return (function (state_28139){
var state_val_28140 = (state_28139[(1)]);
if((state_val_28140 === (7))){
var inst_28118 = (state_28139[(7)]);
var inst_28119 = (state_28139[(8)]);
var inst_28118__$1 = (state_28139[(2)]);
var inst_28119__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28118__$1,(0),null);
var inst_28120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28118__$1,(1),null);
var inst_28121 = (inst_28119__$1 == null);
var state_28139__$1 = (function (){var statearr_28141 = state_28139;
(statearr_28141[(9)] = inst_28120);

(statearr_28141[(7)] = inst_28118__$1);

(statearr_28141[(8)] = inst_28119__$1);

return statearr_28141;
})();
if(cljs.core.truth_(inst_28121)){
var statearr_28142_28162 = state_28139__$1;
(statearr_28142_28162[(1)] = (8));

} else {
var statearr_28143_28163 = state_28139__$1;
(statearr_28143_28163[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28140 === (1))){
var inst_28108 = cljs.core.vec(chs);
var inst_28109 = inst_28108;
var state_28139__$1 = (function (){var statearr_28144 = state_28139;
(statearr_28144[(10)] = inst_28109);

return statearr_28144;
})();
var statearr_28145_28164 = state_28139__$1;
(statearr_28145_28164[(2)] = null);

(statearr_28145_28164[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28140 === (4))){
var inst_28109 = (state_28139[(10)]);
var state_28139__$1 = state_28139;
return cljs.core.async.ioc_alts_BANG_(state_28139__$1,(7),inst_28109);
} else {
if((state_val_28140 === (6))){
var inst_28135 = (state_28139[(2)]);
var state_28139__$1 = state_28139;
var statearr_28146_28165 = state_28139__$1;
(statearr_28146_28165[(2)] = inst_28135);

(statearr_28146_28165[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28140 === (3))){
var inst_28137 = (state_28139[(2)]);
var state_28139__$1 = state_28139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28139__$1,inst_28137);
} else {
if((state_val_28140 === (2))){
var inst_28109 = (state_28139[(10)]);
var inst_28111 = cljs.core.count(inst_28109);
var inst_28112 = (inst_28111 > (0));
var state_28139__$1 = state_28139;
if(cljs.core.truth_(inst_28112)){
var statearr_28148_28166 = state_28139__$1;
(statearr_28148_28166[(1)] = (4));

} else {
var statearr_28149_28167 = state_28139__$1;
(statearr_28149_28167[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28140 === (11))){
var inst_28109 = (state_28139[(10)]);
var inst_28128 = (state_28139[(2)]);
var tmp28147 = inst_28109;
var inst_28109__$1 = tmp28147;
var state_28139__$1 = (function (){var statearr_28150 = state_28139;
(statearr_28150[(11)] = inst_28128);

(statearr_28150[(10)] = inst_28109__$1);

return statearr_28150;
})();
var statearr_28151_28168 = state_28139__$1;
(statearr_28151_28168[(2)] = null);

(statearr_28151_28168[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28140 === (9))){
var inst_28119 = (state_28139[(8)]);
var state_28139__$1 = state_28139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28139__$1,(11),out,inst_28119);
} else {
if((state_val_28140 === (5))){
var inst_28133 = cljs.core.async.close_BANG_(out);
var state_28139__$1 = state_28139;
var statearr_28152_28169 = state_28139__$1;
(statearr_28152_28169[(2)] = inst_28133);

(statearr_28152_28169[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28140 === (10))){
var inst_28131 = (state_28139[(2)]);
var state_28139__$1 = state_28139;
var statearr_28153_28170 = state_28139__$1;
(statearr_28153_28170[(2)] = inst_28131);

(statearr_28153_28170[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28140 === (8))){
var inst_28120 = (state_28139[(9)]);
var inst_28118 = (state_28139[(7)]);
var inst_28119 = (state_28139[(8)]);
var inst_28109 = (state_28139[(10)]);
var inst_28123 = (function (){var cs = inst_28109;
var vec__28114 = inst_28118;
var v = inst_28119;
var c = inst_28120;
return ((function (cs,vec__28114,v,c,inst_28120,inst_28118,inst_28119,inst_28109,state_val_28140,c__26746__auto___28161,out){
return (function (p1__28105_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__28105_SHARP_);
});
;})(cs,vec__28114,v,c,inst_28120,inst_28118,inst_28119,inst_28109,state_val_28140,c__26746__auto___28161,out))
})();
var inst_28124 = cljs.core.filterv(inst_28123,inst_28109);
var inst_28109__$1 = inst_28124;
var state_28139__$1 = (function (){var statearr_28154 = state_28139;
(statearr_28154[(10)] = inst_28109__$1);

return statearr_28154;
})();
var statearr_28155_28171 = state_28139__$1;
(statearr_28155_28171[(2)] = null);

(statearr_28155_28171[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__26746__auto___28161,out))
;
return ((function (switch__26639__auto__,c__26746__auto___28161,out){
return (function() {
var cljs$core$async$state_machine__26640__auto__ = null;
var cljs$core$async$state_machine__26640__auto____0 = (function (){
var statearr_28156 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28156[(0)] = cljs$core$async$state_machine__26640__auto__);

(statearr_28156[(1)] = (1));

return statearr_28156;
});
var cljs$core$async$state_machine__26640__auto____1 = (function (state_28139){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_28139);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e28157){if((e28157 instanceof Object)){
var ex__26643__auto__ = e28157;
var statearr_28158_28172 = state_28139;
(statearr_28158_28172[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28139);

return cljs.core.cst$kw$recur;
} else {
throw e28157;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__28173 = state_28139;
state_28139 = G__28173;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$state_machine__26640__auto__ = function(state_28139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26640__auto____1.call(this,state_28139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26640__auto____0;
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26640__auto____1;
return cljs$core$async$state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto___28161,out))
})();
var state__26748__auto__ = (function (){var statearr_28159 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_28159[(6)] = c__26746__auto___28161);

return statearr_28159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto___28161,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28175 = arguments.length;
switch (G__28175) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26746__auto___28220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto___28220,out){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto___28220,out){
return (function (state_28199){
var state_val_28200 = (state_28199[(1)]);
if((state_val_28200 === (7))){
var inst_28181 = (state_28199[(7)]);
var inst_28181__$1 = (state_28199[(2)]);
var inst_28182 = (inst_28181__$1 == null);
var inst_28183 = cljs.core.not(inst_28182);
var state_28199__$1 = (function (){var statearr_28201 = state_28199;
(statearr_28201[(7)] = inst_28181__$1);

return statearr_28201;
})();
if(inst_28183){
var statearr_28202_28221 = state_28199__$1;
(statearr_28202_28221[(1)] = (8));

} else {
var statearr_28203_28222 = state_28199__$1;
(statearr_28203_28222[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28200 === (1))){
var inst_28176 = (0);
var state_28199__$1 = (function (){var statearr_28204 = state_28199;
(statearr_28204[(8)] = inst_28176);

return statearr_28204;
})();
var statearr_28205_28223 = state_28199__$1;
(statearr_28205_28223[(2)] = null);

(statearr_28205_28223[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28200 === (4))){
var state_28199__$1 = state_28199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28199__$1,(7),ch);
} else {
if((state_val_28200 === (6))){
var inst_28194 = (state_28199[(2)]);
var state_28199__$1 = state_28199;
var statearr_28206_28224 = state_28199__$1;
(statearr_28206_28224[(2)] = inst_28194);

(statearr_28206_28224[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28200 === (3))){
var inst_28196 = (state_28199[(2)]);
var inst_28197 = cljs.core.async.close_BANG_(out);
var state_28199__$1 = (function (){var statearr_28207 = state_28199;
(statearr_28207[(9)] = inst_28196);

return statearr_28207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28199__$1,inst_28197);
} else {
if((state_val_28200 === (2))){
var inst_28176 = (state_28199[(8)]);
var inst_28178 = (inst_28176 < n);
var state_28199__$1 = state_28199;
if(cljs.core.truth_(inst_28178)){
var statearr_28208_28225 = state_28199__$1;
(statearr_28208_28225[(1)] = (4));

} else {
var statearr_28209_28226 = state_28199__$1;
(statearr_28209_28226[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28200 === (11))){
var inst_28176 = (state_28199[(8)]);
var inst_28186 = (state_28199[(2)]);
var inst_28187 = (inst_28176 + (1));
var inst_28176__$1 = inst_28187;
var state_28199__$1 = (function (){var statearr_28210 = state_28199;
(statearr_28210[(8)] = inst_28176__$1);

(statearr_28210[(10)] = inst_28186);

return statearr_28210;
})();
var statearr_28211_28227 = state_28199__$1;
(statearr_28211_28227[(2)] = null);

(statearr_28211_28227[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28200 === (9))){
var state_28199__$1 = state_28199;
var statearr_28212_28228 = state_28199__$1;
(statearr_28212_28228[(2)] = null);

(statearr_28212_28228[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28200 === (5))){
var state_28199__$1 = state_28199;
var statearr_28213_28229 = state_28199__$1;
(statearr_28213_28229[(2)] = null);

(statearr_28213_28229[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28200 === (10))){
var inst_28191 = (state_28199[(2)]);
var state_28199__$1 = state_28199;
var statearr_28214_28230 = state_28199__$1;
(statearr_28214_28230[(2)] = inst_28191);

(statearr_28214_28230[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28200 === (8))){
var inst_28181 = (state_28199[(7)]);
var state_28199__$1 = state_28199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28199__$1,(11),out,inst_28181);
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
});})(c__26746__auto___28220,out))
;
return ((function (switch__26639__auto__,c__26746__auto___28220,out){
return (function() {
var cljs$core$async$state_machine__26640__auto__ = null;
var cljs$core$async$state_machine__26640__auto____0 = (function (){
var statearr_28215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28215[(0)] = cljs$core$async$state_machine__26640__auto__);

(statearr_28215[(1)] = (1));

return statearr_28215;
});
var cljs$core$async$state_machine__26640__auto____1 = (function (state_28199){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_28199);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e28216){if((e28216 instanceof Object)){
var ex__26643__auto__ = e28216;
var statearr_28217_28231 = state_28199;
(statearr_28217_28231[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28199);

return cljs.core.cst$kw$recur;
} else {
throw e28216;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__28232 = state_28199;
state_28199 = G__28232;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$state_machine__26640__auto__ = function(state_28199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26640__auto____1.call(this,state_28199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26640__auto____0;
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26640__auto____1;
return cljs$core$async$state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto___28220,out))
})();
var state__26748__auto__ = (function (){var statearr_28218 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_28218[(6)] = c__26746__auto___28220);

return statearr_28218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto___28220,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28234 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28234 = (function (f,ch,meta28235){
this.f = f;
this.ch = ch;
this.meta28235 = meta28235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28236,meta28235__$1){
var self__ = this;
var _28236__$1 = this;
return (new cljs.core.async.t_cljs$core$async28234(self__.f,self__.ch,meta28235__$1));
});

cljs.core.async.t_cljs$core$async28234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28236){
var self__ = this;
var _28236__$1 = this;
return self__.meta28235;
});

cljs.core.async.t_cljs$core$async28234.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28234.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28234.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28234.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28234.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28237 = (function (f,ch,meta28235,_,fn1,meta28238){
this.f = f;
this.ch = ch;
this.meta28235 = meta28235;
this._ = _;
this.fn1 = fn1;
this.meta28238 = meta28238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28239,meta28238__$1){
var self__ = this;
var _28239__$1 = this;
return (new cljs.core.async.t_cljs$core$async28237(self__.f,self__.ch,self__.meta28235,self__._,self__.fn1,meta28238__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28239){
var self__ = this;
var _28239__$1 = this;
return self__.meta28238;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28237.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28237.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28237.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28237.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28233_SHARP_){
var G__28240 = (((p1__28233_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__28233_SHARP_) : self__.f.call(null,p1__28233_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28240) : f1.call(null,G__28240));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28237.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28235,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async28234], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta28238], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28237";

cljs.core.async.t_cljs$core$async28237.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28237");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28237.
 */
cljs.core.async.__GT_t_cljs$core$async28237 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28237(f__$1,ch__$1,meta28235__$1,___$2,fn1__$1,meta28238){
return (new cljs.core.async.t_cljs$core$async28237(f__$1,ch__$1,meta28235__$1,___$2,fn1__$1,meta28238));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28237(self__.f,self__.ch,self__.meta28235,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__28241 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28241) : self__.f.call(null,G__28241));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28234.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28234.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28235], null);
});

cljs.core.async.t_cljs$core$async28234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28234";

cljs.core.async.t_cljs$core$async28234.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28234");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28234.
 */
cljs.core.async.__GT_t_cljs$core$async28234 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28234(f__$1,ch__$1,meta28235){
return (new cljs.core.async.t_cljs$core$async28234(f__$1,ch__$1,meta28235));
});

}

return (new cljs.core.async.t_cljs$core$async28234(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28242 = (function (f,ch,meta28243){
this.f = f;
this.ch = ch;
this.meta28243 = meta28243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28244,meta28243__$1){
var self__ = this;
var _28244__$1 = this;
return (new cljs.core.async.t_cljs$core$async28242(self__.f,self__.ch,meta28243__$1));
});

cljs.core.async.t_cljs$core$async28242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28244){
var self__ = this;
var _28244__$1 = this;
return self__.meta28243;
});

cljs.core.async.t_cljs$core$async28242.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28242.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28242.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async28242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28243], null);
});

cljs.core.async.t_cljs$core$async28242.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28242";

cljs.core.async.t_cljs$core$async28242.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28242");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28242.
 */
cljs.core.async.__GT_t_cljs$core$async28242 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28242(f__$1,ch__$1,meta28243){
return (new cljs.core.async.t_cljs$core$async28242(f__$1,ch__$1,meta28243));
});

}

return (new cljs.core.async.t_cljs$core$async28242(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28245 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28245 = (function (p,ch,meta28246){
this.p = p;
this.ch = ch;
this.meta28246 = meta28246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28247,meta28246__$1){
var self__ = this;
var _28247__$1 = this;
return (new cljs.core.async.t_cljs$core$async28245(self__.p,self__.ch,meta28246__$1));
});

cljs.core.async.t_cljs$core$async28245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28247){
var self__ = this;
var _28247__$1 = this;
return self__.meta28246;
});

cljs.core.async.t_cljs$core$async28245.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28245.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28245.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28245.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28245.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28245.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28245.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28246], null);
});

cljs.core.async.t_cljs$core$async28245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28245";

cljs.core.async.t_cljs$core$async28245.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28245");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28245.
 */
cljs.core.async.__GT_t_cljs$core$async28245 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28245(p__$1,ch__$1,meta28246){
return (new cljs.core.async.t_cljs$core$async28245(p__$1,ch__$1,meta28246));
});

}

return (new cljs.core.async.t_cljs$core$async28245(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28249 = arguments.length;
switch (G__28249) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26746__auto___28289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto___28289,out){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto___28289,out){
return (function (state_28270){
var state_val_28271 = (state_28270[(1)]);
if((state_val_28271 === (7))){
var inst_28266 = (state_28270[(2)]);
var state_28270__$1 = state_28270;
var statearr_28272_28290 = state_28270__$1;
(statearr_28272_28290[(2)] = inst_28266);

(statearr_28272_28290[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28271 === (1))){
var state_28270__$1 = state_28270;
var statearr_28273_28291 = state_28270__$1;
(statearr_28273_28291[(2)] = null);

(statearr_28273_28291[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28271 === (4))){
var inst_28252 = (state_28270[(7)]);
var inst_28252__$1 = (state_28270[(2)]);
var inst_28253 = (inst_28252__$1 == null);
var state_28270__$1 = (function (){var statearr_28274 = state_28270;
(statearr_28274[(7)] = inst_28252__$1);

return statearr_28274;
})();
if(cljs.core.truth_(inst_28253)){
var statearr_28275_28292 = state_28270__$1;
(statearr_28275_28292[(1)] = (5));

} else {
var statearr_28276_28293 = state_28270__$1;
(statearr_28276_28293[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28271 === (6))){
var inst_28252 = (state_28270[(7)]);
var inst_28257 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28252) : p.call(null,inst_28252));
var state_28270__$1 = state_28270;
if(cljs.core.truth_(inst_28257)){
var statearr_28277_28294 = state_28270__$1;
(statearr_28277_28294[(1)] = (8));

} else {
var statearr_28278_28295 = state_28270__$1;
(statearr_28278_28295[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28271 === (3))){
var inst_28268 = (state_28270[(2)]);
var state_28270__$1 = state_28270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28270__$1,inst_28268);
} else {
if((state_val_28271 === (2))){
var state_28270__$1 = state_28270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28270__$1,(4),ch);
} else {
if((state_val_28271 === (11))){
var inst_28260 = (state_28270[(2)]);
var state_28270__$1 = state_28270;
var statearr_28279_28296 = state_28270__$1;
(statearr_28279_28296[(2)] = inst_28260);

(statearr_28279_28296[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28271 === (9))){
var state_28270__$1 = state_28270;
var statearr_28280_28297 = state_28270__$1;
(statearr_28280_28297[(2)] = null);

(statearr_28280_28297[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28271 === (5))){
var inst_28255 = cljs.core.async.close_BANG_(out);
var state_28270__$1 = state_28270;
var statearr_28281_28298 = state_28270__$1;
(statearr_28281_28298[(2)] = inst_28255);

(statearr_28281_28298[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28271 === (10))){
var inst_28263 = (state_28270[(2)]);
var state_28270__$1 = (function (){var statearr_28282 = state_28270;
(statearr_28282[(8)] = inst_28263);

return statearr_28282;
})();
var statearr_28283_28299 = state_28270__$1;
(statearr_28283_28299[(2)] = null);

(statearr_28283_28299[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28271 === (8))){
var inst_28252 = (state_28270[(7)]);
var state_28270__$1 = state_28270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28270__$1,(11),out,inst_28252);
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
});})(c__26746__auto___28289,out))
;
return ((function (switch__26639__auto__,c__26746__auto___28289,out){
return (function() {
var cljs$core$async$state_machine__26640__auto__ = null;
var cljs$core$async$state_machine__26640__auto____0 = (function (){
var statearr_28284 = [null,null,null,null,null,null,null,null,null];
(statearr_28284[(0)] = cljs$core$async$state_machine__26640__auto__);

(statearr_28284[(1)] = (1));

return statearr_28284;
});
var cljs$core$async$state_machine__26640__auto____1 = (function (state_28270){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_28270);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e28285){if((e28285 instanceof Object)){
var ex__26643__auto__ = e28285;
var statearr_28286_28300 = state_28270;
(statearr_28286_28300[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28270);

return cljs.core.cst$kw$recur;
} else {
throw e28285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__28301 = state_28270;
state_28270 = G__28301;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$state_machine__26640__auto__ = function(state_28270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26640__auto____1.call(this,state_28270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26640__auto____0;
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26640__auto____1;
return cljs$core$async$state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto___28289,out))
})();
var state__26748__auto__ = (function (){var statearr_28287 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_28287[(6)] = c__26746__auto___28289);

return statearr_28287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto___28289,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28303 = arguments.length;
switch (G__28303) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26746__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto__){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto__){
return (function (state_28366){
var state_val_28367 = (state_28366[(1)]);
if((state_val_28367 === (7))){
var inst_28362 = (state_28366[(2)]);
var state_28366__$1 = state_28366;
var statearr_28368_28406 = state_28366__$1;
(statearr_28368_28406[(2)] = inst_28362);

(statearr_28368_28406[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (20))){
var inst_28332 = (state_28366[(7)]);
var inst_28343 = (state_28366[(2)]);
var inst_28344 = cljs.core.next(inst_28332);
var inst_28318 = inst_28344;
var inst_28319 = null;
var inst_28320 = (0);
var inst_28321 = (0);
var state_28366__$1 = (function (){var statearr_28369 = state_28366;
(statearr_28369[(8)] = inst_28318);

(statearr_28369[(9)] = inst_28321);

(statearr_28369[(10)] = inst_28320);

(statearr_28369[(11)] = inst_28319);

(statearr_28369[(12)] = inst_28343);

return statearr_28369;
})();
var statearr_28370_28407 = state_28366__$1;
(statearr_28370_28407[(2)] = null);

(statearr_28370_28407[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (1))){
var state_28366__$1 = state_28366;
var statearr_28371_28408 = state_28366__$1;
(statearr_28371_28408[(2)] = null);

(statearr_28371_28408[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (4))){
var inst_28307 = (state_28366[(13)]);
var inst_28307__$1 = (state_28366[(2)]);
var inst_28308 = (inst_28307__$1 == null);
var state_28366__$1 = (function (){var statearr_28372 = state_28366;
(statearr_28372[(13)] = inst_28307__$1);

return statearr_28372;
})();
if(cljs.core.truth_(inst_28308)){
var statearr_28373_28409 = state_28366__$1;
(statearr_28373_28409[(1)] = (5));

} else {
var statearr_28374_28410 = state_28366__$1;
(statearr_28374_28410[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (15))){
var state_28366__$1 = state_28366;
var statearr_28378_28411 = state_28366__$1;
(statearr_28378_28411[(2)] = null);

(statearr_28378_28411[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (21))){
var state_28366__$1 = state_28366;
var statearr_28379_28412 = state_28366__$1;
(statearr_28379_28412[(2)] = null);

(statearr_28379_28412[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (13))){
var inst_28318 = (state_28366[(8)]);
var inst_28321 = (state_28366[(9)]);
var inst_28320 = (state_28366[(10)]);
var inst_28319 = (state_28366[(11)]);
var inst_28328 = (state_28366[(2)]);
var inst_28329 = (inst_28321 + (1));
var tmp28375 = inst_28318;
var tmp28376 = inst_28320;
var tmp28377 = inst_28319;
var inst_28318__$1 = tmp28375;
var inst_28319__$1 = tmp28377;
var inst_28320__$1 = tmp28376;
var inst_28321__$1 = inst_28329;
var state_28366__$1 = (function (){var statearr_28380 = state_28366;
(statearr_28380[(8)] = inst_28318__$1);

(statearr_28380[(9)] = inst_28321__$1);

(statearr_28380[(10)] = inst_28320__$1);

(statearr_28380[(11)] = inst_28319__$1);

(statearr_28380[(14)] = inst_28328);

return statearr_28380;
})();
var statearr_28381_28413 = state_28366__$1;
(statearr_28381_28413[(2)] = null);

(statearr_28381_28413[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (22))){
var state_28366__$1 = state_28366;
var statearr_28382_28414 = state_28366__$1;
(statearr_28382_28414[(2)] = null);

(statearr_28382_28414[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (6))){
var inst_28307 = (state_28366[(13)]);
var inst_28316 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28307) : f.call(null,inst_28307));
var inst_28317 = cljs.core.seq(inst_28316);
var inst_28318 = inst_28317;
var inst_28319 = null;
var inst_28320 = (0);
var inst_28321 = (0);
var state_28366__$1 = (function (){var statearr_28383 = state_28366;
(statearr_28383[(8)] = inst_28318);

(statearr_28383[(9)] = inst_28321);

(statearr_28383[(10)] = inst_28320);

(statearr_28383[(11)] = inst_28319);

return statearr_28383;
})();
var statearr_28384_28415 = state_28366__$1;
(statearr_28384_28415[(2)] = null);

(statearr_28384_28415[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (17))){
var inst_28332 = (state_28366[(7)]);
var inst_28336 = cljs.core.chunk_first(inst_28332);
var inst_28337 = cljs.core.chunk_rest(inst_28332);
var inst_28338 = cljs.core.count(inst_28336);
var inst_28318 = inst_28337;
var inst_28319 = inst_28336;
var inst_28320 = inst_28338;
var inst_28321 = (0);
var state_28366__$1 = (function (){var statearr_28385 = state_28366;
(statearr_28385[(8)] = inst_28318);

(statearr_28385[(9)] = inst_28321);

(statearr_28385[(10)] = inst_28320);

(statearr_28385[(11)] = inst_28319);

return statearr_28385;
})();
var statearr_28386_28416 = state_28366__$1;
(statearr_28386_28416[(2)] = null);

(statearr_28386_28416[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (3))){
var inst_28364 = (state_28366[(2)]);
var state_28366__$1 = state_28366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28366__$1,inst_28364);
} else {
if((state_val_28367 === (12))){
var inst_28352 = (state_28366[(2)]);
var state_28366__$1 = state_28366;
var statearr_28387_28417 = state_28366__$1;
(statearr_28387_28417[(2)] = inst_28352);

(statearr_28387_28417[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (2))){
var state_28366__$1 = state_28366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28366__$1,(4),in$);
} else {
if((state_val_28367 === (23))){
var inst_28360 = (state_28366[(2)]);
var state_28366__$1 = state_28366;
var statearr_28388_28418 = state_28366__$1;
(statearr_28388_28418[(2)] = inst_28360);

(statearr_28388_28418[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (19))){
var inst_28347 = (state_28366[(2)]);
var state_28366__$1 = state_28366;
var statearr_28389_28419 = state_28366__$1;
(statearr_28389_28419[(2)] = inst_28347);

(statearr_28389_28419[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (11))){
var inst_28318 = (state_28366[(8)]);
var inst_28332 = (state_28366[(7)]);
var inst_28332__$1 = cljs.core.seq(inst_28318);
var state_28366__$1 = (function (){var statearr_28390 = state_28366;
(statearr_28390[(7)] = inst_28332__$1);

return statearr_28390;
})();
if(inst_28332__$1){
var statearr_28391_28420 = state_28366__$1;
(statearr_28391_28420[(1)] = (14));

} else {
var statearr_28392_28421 = state_28366__$1;
(statearr_28392_28421[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (9))){
var inst_28354 = (state_28366[(2)]);
var inst_28355 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_28366__$1 = (function (){var statearr_28393 = state_28366;
(statearr_28393[(15)] = inst_28354);

return statearr_28393;
})();
if(cljs.core.truth_(inst_28355)){
var statearr_28394_28422 = state_28366__$1;
(statearr_28394_28422[(1)] = (21));

} else {
var statearr_28395_28423 = state_28366__$1;
(statearr_28395_28423[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (5))){
var inst_28310 = cljs.core.async.close_BANG_(out);
var state_28366__$1 = state_28366;
var statearr_28396_28424 = state_28366__$1;
(statearr_28396_28424[(2)] = inst_28310);

(statearr_28396_28424[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (14))){
var inst_28332 = (state_28366[(7)]);
var inst_28334 = cljs.core.chunked_seq_QMARK_(inst_28332);
var state_28366__$1 = state_28366;
if(inst_28334){
var statearr_28397_28425 = state_28366__$1;
(statearr_28397_28425[(1)] = (17));

} else {
var statearr_28398_28426 = state_28366__$1;
(statearr_28398_28426[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (16))){
var inst_28350 = (state_28366[(2)]);
var state_28366__$1 = state_28366;
var statearr_28399_28427 = state_28366__$1;
(statearr_28399_28427[(2)] = inst_28350);

(statearr_28399_28427[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28367 === (10))){
var inst_28321 = (state_28366[(9)]);
var inst_28319 = (state_28366[(11)]);
var inst_28326 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28319,inst_28321);
var state_28366__$1 = state_28366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28366__$1,(13),out,inst_28326);
} else {
if((state_val_28367 === (18))){
var inst_28332 = (state_28366[(7)]);
var inst_28341 = cljs.core.first(inst_28332);
var state_28366__$1 = state_28366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28366__$1,(20),out,inst_28341);
} else {
if((state_val_28367 === (8))){
var inst_28321 = (state_28366[(9)]);
var inst_28320 = (state_28366[(10)]);
var inst_28323 = (inst_28321 < inst_28320);
var inst_28324 = inst_28323;
var state_28366__$1 = state_28366;
if(cljs.core.truth_(inst_28324)){
var statearr_28400_28428 = state_28366__$1;
(statearr_28400_28428[(1)] = (10));

} else {
var statearr_28401_28429 = state_28366__$1;
(statearr_28401_28429[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__26746__auto__))
;
return ((function (switch__26639__auto__,c__26746__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26640__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26640__auto____0 = (function (){
var statearr_28402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28402[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26640__auto__);

(statearr_28402[(1)] = (1));

return statearr_28402;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26640__auto____1 = (function (state_28366){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_28366);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e28403){if((e28403 instanceof Object)){
var ex__26643__auto__ = e28403;
var statearr_28404_28430 = state_28366;
(statearr_28404_28430[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28366);

return cljs.core.cst$kw$recur;
} else {
throw e28403;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__28431 = state_28366;
state_28366 = G__28431;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26640__auto__ = function(state_28366){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26640__auto____1.call(this,state_28366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26640__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26640__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto__))
})();
var state__26748__auto__ = (function (){var statearr_28405 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_28405[(6)] = c__26746__auto__);

return statearr_28405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto__))
);

return c__26746__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28433 = arguments.length;
switch (G__28433) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28436 = arguments.length;
switch (G__28436) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28439 = arguments.length;
switch (G__28439) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26746__auto___28486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto___28486,out){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto___28486,out){
return (function (state_28463){
var state_val_28464 = (state_28463[(1)]);
if((state_val_28464 === (7))){
var inst_28458 = (state_28463[(2)]);
var state_28463__$1 = state_28463;
var statearr_28465_28487 = state_28463__$1;
(statearr_28465_28487[(2)] = inst_28458);

(statearr_28465_28487[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28464 === (1))){
var inst_28440 = null;
var state_28463__$1 = (function (){var statearr_28466 = state_28463;
(statearr_28466[(7)] = inst_28440);

return statearr_28466;
})();
var statearr_28467_28488 = state_28463__$1;
(statearr_28467_28488[(2)] = null);

(statearr_28467_28488[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28464 === (4))){
var inst_28443 = (state_28463[(8)]);
var inst_28443__$1 = (state_28463[(2)]);
var inst_28444 = (inst_28443__$1 == null);
var inst_28445 = cljs.core.not(inst_28444);
var state_28463__$1 = (function (){var statearr_28468 = state_28463;
(statearr_28468[(8)] = inst_28443__$1);

return statearr_28468;
})();
if(inst_28445){
var statearr_28469_28489 = state_28463__$1;
(statearr_28469_28489[(1)] = (5));

} else {
var statearr_28470_28490 = state_28463__$1;
(statearr_28470_28490[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28464 === (6))){
var state_28463__$1 = state_28463;
var statearr_28471_28491 = state_28463__$1;
(statearr_28471_28491[(2)] = null);

(statearr_28471_28491[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28464 === (3))){
var inst_28460 = (state_28463[(2)]);
var inst_28461 = cljs.core.async.close_BANG_(out);
var state_28463__$1 = (function (){var statearr_28472 = state_28463;
(statearr_28472[(9)] = inst_28460);

return statearr_28472;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28463__$1,inst_28461);
} else {
if((state_val_28464 === (2))){
var state_28463__$1 = state_28463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28463__$1,(4),ch);
} else {
if((state_val_28464 === (11))){
var inst_28443 = (state_28463[(8)]);
var inst_28452 = (state_28463[(2)]);
var inst_28440 = inst_28443;
var state_28463__$1 = (function (){var statearr_28473 = state_28463;
(statearr_28473[(7)] = inst_28440);

(statearr_28473[(10)] = inst_28452);

return statearr_28473;
})();
var statearr_28474_28492 = state_28463__$1;
(statearr_28474_28492[(2)] = null);

(statearr_28474_28492[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28464 === (9))){
var inst_28443 = (state_28463[(8)]);
var state_28463__$1 = state_28463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28463__$1,(11),out,inst_28443);
} else {
if((state_val_28464 === (5))){
var inst_28440 = (state_28463[(7)]);
var inst_28443 = (state_28463[(8)]);
var inst_28447 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28443,inst_28440);
var state_28463__$1 = state_28463;
if(inst_28447){
var statearr_28476_28493 = state_28463__$1;
(statearr_28476_28493[(1)] = (8));

} else {
var statearr_28477_28494 = state_28463__$1;
(statearr_28477_28494[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28464 === (10))){
var inst_28455 = (state_28463[(2)]);
var state_28463__$1 = state_28463;
var statearr_28478_28495 = state_28463__$1;
(statearr_28478_28495[(2)] = inst_28455);

(statearr_28478_28495[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28464 === (8))){
var inst_28440 = (state_28463[(7)]);
var tmp28475 = inst_28440;
var inst_28440__$1 = tmp28475;
var state_28463__$1 = (function (){var statearr_28479 = state_28463;
(statearr_28479[(7)] = inst_28440__$1);

return statearr_28479;
})();
var statearr_28480_28496 = state_28463__$1;
(statearr_28480_28496[(2)] = null);

(statearr_28480_28496[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__26746__auto___28486,out))
;
return ((function (switch__26639__auto__,c__26746__auto___28486,out){
return (function() {
var cljs$core$async$state_machine__26640__auto__ = null;
var cljs$core$async$state_machine__26640__auto____0 = (function (){
var statearr_28481 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28481[(0)] = cljs$core$async$state_machine__26640__auto__);

(statearr_28481[(1)] = (1));

return statearr_28481;
});
var cljs$core$async$state_machine__26640__auto____1 = (function (state_28463){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_28463);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e28482){if((e28482 instanceof Object)){
var ex__26643__auto__ = e28482;
var statearr_28483_28497 = state_28463;
(statearr_28483_28497[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28463);

return cljs.core.cst$kw$recur;
} else {
throw e28482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__28498 = state_28463;
state_28463 = G__28498;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$state_machine__26640__auto__ = function(state_28463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26640__auto____1.call(this,state_28463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26640__auto____0;
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26640__auto____1;
return cljs$core$async$state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto___28486,out))
})();
var state__26748__auto__ = (function (){var statearr_28484 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_28484[(6)] = c__26746__auto___28486);

return statearr_28484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto___28486,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28500 = arguments.length;
switch (G__28500) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26746__auto___28566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto___28566,out){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto___28566,out){
return (function (state_28538){
var state_val_28539 = (state_28538[(1)]);
if((state_val_28539 === (7))){
var inst_28534 = (state_28538[(2)]);
var state_28538__$1 = state_28538;
var statearr_28540_28567 = state_28538__$1;
(statearr_28540_28567[(2)] = inst_28534);

(statearr_28540_28567[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28539 === (1))){
var inst_28501 = (new Array(n));
var inst_28502 = inst_28501;
var inst_28503 = (0);
var state_28538__$1 = (function (){var statearr_28541 = state_28538;
(statearr_28541[(7)] = inst_28502);

(statearr_28541[(8)] = inst_28503);

return statearr_28541;
})();
var statearr_28542_28568 = state_28538__$1;
(statearr_28542_28568[(2)] = null);

(statearr_28542_28568[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28539 === (4))){
var inst_28506 = (state_28538[(9)]);
var inst_28506__$1 = (state_28538[(2)]);
var inst_28507 = (inst_28506__$1 == null);
var inst_28508 = cljs.core.not(inst_28507);
var state_28538__$1 = (function (){var statearr_28543 = state_28538;
(statearr_28543[(9)] = inst_28506__$1);

return statearr_28543;
})();
if(inst_28508){
var statearr_28544_28569 = state_28538__$1;
(statearr_28544_28569[(1)] = (5));

} else {
var statearr_28545_28570 = state_28538__$1;
(statearr_28545_28570[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28539 === (15))){
var inst_28528 = (state_28538[(2)]);
var state_28538__$1 = state_28538;
var statearr_28546_28571 = state_28538__$1;
(statearr_28546_28571[(2)] = inst_28528);

(statearr_28546_28571[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28539 === (13))){
var state_28538__$1 = state_28538;
var statearr_28547_28572 = state_28538__$1;
(statearr_28547_28572[(2)] = null);

(statearr_28547_28572[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28539 === (6))){
var inst_28503 = (state_28538[(8)]);
var inst_28524 = (inst_28503 > (0));
var state_28538__$1 = state_28538;
if(cljs.core.truth_(inst_28524)){
var statearr_28548_28573 = state_28538__$1;
(statearr_28548_28573[(1)] = (12));

} else {
var statearr_28549_28574 = state_28538__$1;
(statearr_28549_28574[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28539 === (3))){
var inst_28536 = (state_28538[(2)]);
var state_28538__$1 = state_28538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28538__$1,inst_28536);
} else {
if((state_val_28539 === (12))){
var inst_28502 = (state_28538[(7)]);
var inst_28526 = cljs.core.vec(inst_28502);
var state_28538__$1 = state_28538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28538__$1,(15),out,inst_28526);
} else {
if((state_val_28539 === (2))){
var state_28538__$1 = state_28538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28538__$1,(4),ch);
} else {
if((state_val_28539 === (11))){
var inst_28518 = (state_28538[(2)]);
var inst_28519 = (new Array(n));
var inst_28502 = inst_28519;
var inst_28503 = (0);
var state_28538__$1 = (function (){var statearr_28550 = state_28538;
(statearr_28550[(7)] = inst_28502);

(statearr_28550[(10)] = inst_28518);

(statearr_28550[(8)] = inst_28503);

return statearr_28550;
})();
var statearr_28551_28575 = state_28538__$1;
(statearr_28551_28575[(2)] = null);

(statearr_28551_28575[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28539 === (9))){
var inst_28502 = (state_28538[(7)]);
var inst_28516 = cljs.core.vec(inst_28502);
var state_28538__$1 = state_28538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28538__$1,(11),out,inst_28516);
} else {
if((state_val_28539 === (5))){
var inst_28502 = (state_28538[(7)]);
var inst_28503 = (state_28538[(8)]);
var inst_28511 = (state_28538[(11)]);
var inst_28506 = (state_28538[(9)]);
var inst_28510 = (inst_28502[inst_28503] = inst_28506);
var inst_28511__$1 = (inst_28503 + (1));
var inst_28512 = (inst_28511__$1 < n);
var state_28538__$1 = (function (){var statearr_28552 = state_28538;
(statearr_28552[(12)] = inst_28510);

(statearr_28552[(11)] = inst_28511__$1);

return statearr_28552;
})();
if(cljs.core.truth_(inst_28512)){
var statearr_28553_28576 = state_28538__$1;
(statearr_28553_28576[(1)] = (8));

} else {
var statearr_28554_28577 = state_28538__$1;
(statearr_28554_28577[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28539 === (14))){
var inst_28531 = (state_28538[(2)]);
var inst_28532 = cljs.core.async.close_BANG_(out);
var state_28538__$1 = (function (){var statearr_28556 = state_28538;
(statearr_28556[(13)] = inst_28531);

return statearr_28556;
})();
var statearr_28557_28578 = state_28538__$1;
(statearr_28557_28578[(2)] = inst_28532);

(statearr_28557_28578[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28539 === (10))){
var inst_28522 = (state_28538[(2)]);
var state_28538__$1 = state_28538;
var statearr_28558_28579 = state_28538__$1;
(statearr_28558_28579[(2)] = inst_28522);

(statearr_28558_28579[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28539 === (8))){
var inst_28502 = (state_28538[(7)]);
var inst_28511 = (state_28538[(11)]);
var tmp28555 = inst_28502;
var inst_28502__$1 = tmp28555;
var inst_28503 = inst_28511;
var state_28538__$1 = (function (){var statearr_28559 = state_28538;
(statearr_28559[(7)] = inst_28502__$1);

(statearr_28559[(8)] = inst_28503);

return statearr_28559;
})();
var statearr_28560_28580 = state_28538__$1;
(statearr_28560_28580[(2)] = null);

(statearr_28560_28580[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__26746__auto___28566,out))
;
return ((function (switch__26639__auto__,c__26746__auto___28566,out){
return (function() {
var cljs$core$async$state_machine__26640__auto__ = null;
var cljs$core$async$state_machine__26640__auto____0 = (function (){
var statearr_28561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28561[(0)] = cljs$core$async$state_machine__26640__auto__);

(statearr_28561[(1)] = (1));

return statearr_28561;
});
var cljs$core$async$state_machine__26640__auto____1 = (function (state_28538){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_28538);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e28562){if((e28562 instanceof Object)){
var ex__26643__auto__ = e28562;
var statearr_28563_28581 = state_28538;
(statearr_28563_28581[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28538);

return cljs.core.cst$kw$recur;
} else {
throw e28562;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__28582 = state_28538;
state_28538 = G__28582;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$state_machine__26640__auto__ = function(state_28538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26640__auto____1.call(this,state_28538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26640__auto____0;
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26640__auto____1;
return cljs$core$async$state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto___28566,out))
})();
var state__26748__auto__ = (function (){var statearr_28564 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_28564[(6)] = c__26746__auto___28566);

return statearr_28564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto___28566,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28584 = arguments.length;
switch (G__28584) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26746__auto___28654 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26746__auto___28654,out){
return (function (){
var f__26747__auto__ = (function (){var switch__26639__auto__ = ((function (c__26746__auto___28654,out){
return (function (state_28626){
var state_val_28627 = (state_28626[(1)]);
if((state_val_28627 === (7))){
var inst_28622 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28628_28655 = state_28626__$1;
(statearr_28628_28655[(2)] = inst_28622);

(statearr_28628_28655[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28627 === (1))){
var inst_28585 = [];
var inst_28586 = inst_28585;
var inst_28587 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_28626__$1 = (function (){var statearr_28629 = state_28626;
(statearr_28629[(7)] = inst_28586);

(statearr_28629[(8)] = inst_28587);

return statearr_28629;
})();
var statearr_28630_28656 = state_28626__$1;
(statearr_28630_28656[(2)] = null);

(statearr_28630_28656[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28627 === (4))){
var inst_28590 = (state_28626[(9)]);
var inst_28590__$1 = (state_28626[(2)]);
var inst_28591 = (inst_28590__$1 == null);
var inst_28592 = cljs.core.not(inst_28591);
var state_28626__$1 = (function (){var statearr_28631 = state_28626;
(statearr_28631[(9)] = inst_28590__$1);

return statearr_28631;
})();
if(inst_28592){
var statearr_28632_28657 = state_28626__$1;
(statearr_28632_28657[(1)] = (5));

} else {
var statearr_28633_28658 = state_28626__$1;
(statearr_28633_28658[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28627 === (15))){
var inst_28616 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28634_28659 = state_28626__$1;
(statearr_28634_28659[(2)] = inst_28616);

(statearr_28634_28659[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28627 === (13))){
var state_28626__$1 = state_28626;
var statearr_28635_28660 = state_28626__$1;
(statearr_28635_28660[(2)] = null);

(statearr_28635_28660[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28627 === (6))){
var inst_28586 = (state_28626[(7)]);
var inst_28611 = inst_28586.length;
var inst_28612 = (inst_28611 > (0));
var state_28626__$1 = state_28626;
if(cljs.core.truth_(inst_28612)){
var statearr_28636_28661 = state_28626__$1;
(statearr_28636_28661[(1)] = (12));

} else {
var statearr_28637_28662 = state_28626__$1;
(statearr_28637_28662[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28627 === (3))){
var inst_28624 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28626__$1,inst_28624);
} else {
if((state_val_28627 === (12))){
var inst_28586 = (state_28626[(7)]);
var inst_28614 = cljs.core.vec(inst_28586);
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28626__$1,(15),out,inst_28614);
} else {
if((state_val_28627 === (2))){
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28626__$1,(4),ch);
} else {
if((state_val_28627 === (11))){
var inst_28590 = (state_28626[(9)]);
var inst_28594 = (state_28626[(10)]);
var inst_28604 = (state_28626[(2)]);
var inst_28605 = [];
var inst_28606 = inst_28605.push(inst_28590);
var inst_28586 = inst_28605;
var inst_28587 = inst_28594;
var state_28626__$1 = (function (){var statearr_28638 = state_28626;
(statearr_28638[(11)] = inst_28604);

(statearr_28638[(7)] = inst_28586);

(statearr_28638[(12)] = inst_28606);

(statearr_28638[(8)] = inst_28587);

return statearr_28638;
})();
var statearr_28639_28663 = state_28626__$1;
(statearr_28639_28663[(2)] = null);

(statearr_28639_28663[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28627 === (9))){
var inst_28586 = (state_28626[(7)]);
var inst_28602 = cljs.core.vec(inst_28586);
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28626__$1,(11),out,inst_28602);
} else {
if((state_val_28627 === (5))){
var inst_28590 = (state_28626[(9)]);
var inst_28587 = (state_28626[(8)]);
var inst_28594 = (state_28626[(10)]);
var inst_28594__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28590) : f.call(null,inst_28590));
var inst_28595 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28594__$1,inst_28587);
var inst_28596 = cljs.core.keyword_identical_QMARK_(inst_28587,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_28597 = ((inst_28595) || (inst_28596));
var state_28626__$1 = (function (){var statearr_28640 = state_28626;
(statearr_28640[(10)] = inst_28594__$1);

return statearr_28640;
})();
if(cljs.core.truth_(inst_28597)){
var statearr_28641_28664 = state_28626__$1;
(statearr_28641_28664[(1)] = (8));

} else {
var statearr_28642_28665 = state_28626__$1;
(statearr_28642_28665[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28627 === (14))){
var inst_28619 = (state_28626[(2)]);
var inst_28620 = cljs.core.async.close_BANG_(out);
var state_28626__$1 = (function (){var statearr_28644 = state_28626;
(statearr_28644[(13)] = inst_28619);

return statearr_28644;
})();
var statearr_28645_28666 = state_28626__$1;
(statearr_28645_28666[(2)] = inst_28620);

(statearr_28645_28666[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28627 === (10))){
var inst_28609 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28646_28667 = state_28626__$1;
(statearr_28646_28667[(2)] = inst_28609);

(statearr_28646_28667[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28627 === (8))){
var inst_28586 = (state_28626[(7)]);
var inst_28590 = (state_28626[(9)]);
var inst_28594 = (state_28626[(10)]);
var inst_28599 = inst_28586.push(inst_28590);
var tmp28643 = inst_28586;
var inst_28586__$1 = tmp28643;
var inst_28587 = inst_28594;
var state_28626__$1 = (function (){var statearr_28647 = state_28626;
(statearr_28647[(7)] = inst_28586__$1);

(statearr_28647[(14)] = inst_28599);

(statearr_28647[(8)] = inst_28587);

return statearr_28647;
})();
var statearr_28648_28668 = state_28626__$1;
(statearr_28648_28668[(2)] = null);

(statearr_28648_28668[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__26746__auto___28654,out))
;
return ((function (switch__26639__auto__,c__26746__auto___28654,out){
return (function() {
var cljs$core$async$state_machine__26640__auto__ = null;
var cljs$core$async$state_machine__26640__auto____0 = (function (){
var statearr_28649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28649[(0)] = cljs$core$async$state_machine__26640__auto__);

(statearr_28649[(1)] = (1));

return statearr_28649;
});
var cljs$core$async$state_machine__26640__auto____1 = (function (state_28626){
while(true){
var ret_value__26641__auto__ = (function (){try{while(true){
var result__26642__auto__ = switch__26639__auto__(state_28626);
if(cljs.core.keyword_identical_QMARK_(result__26642__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26642__auto__;
}
break;
}
}catch (e28650){if((e28650 instanceof Object)){
var ex__26643__auto__ = e28650;
var statearr_28651_28669 = state_28626;
(statearr_28651_28669[(5)] = ex__26643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28626);

return cljs.core.cst$kw$recur;
} else {
throw e28650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26641__auto__,cljs.core.cst$kw$recur)){
var G__28670 = state_28626;
state_28626 = G__28670;
continue;
} else {
return ret_value__26641__auto__;
}
break;
}
});
cljs$core$async$state_machine__26640__auto__ = function(state_28626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26640__auto____1.call(this,state_28626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26640__auto____0;
cljs$core$async$state_machine__26640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26640__auto____1;
return cljs$core$async$state_machine__26640__auto__;
})()
;})(switch__26639__auto__,c__26746__auto___28654,out))
})();
var state__26748__auto__ = (function (){var statearr_28652 = (f__26747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26747__auto__.cljs$core$IFn$_invoke$arity$0() : f__26747__auto__.call(null));
(statearr_28652[(6)] = c__26746__auto___28654);

return statearr_28652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26748__auto__);
});})(c__26746__auto___28654,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

