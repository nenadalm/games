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
var G__28516 = arguments.length;
switch (G__28516) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28517 = (function (f,blockable,meta28518){
this.f = f;
this.blockable = blockable;
this.meta28518 = meta28518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28519,meta28518__$1){
var self__ = this;
var _28519__$1 = this;
return (new cljs.core.async.t_cljs$core$async28517(self__.f,self__.blockable,meta28518__$1));
});

cljs.core.async.t_cljs$core$async28517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28519){
var self__ = this;
var _28519__$1 = this;
return self__.meta28518;
});

cljs.core.async.t_cljs$core$async28517.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28517.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta28518], null);
});

cljs.core.async.t_cljs$core$async28517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28517";

cljs.core.async.t_cljs$core$async28517.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28517");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28517.
 */
cljs.core.async.__GT_t_cljs$core$async28517 = (function cljs$core$async$__GT_t_cljs$core$async28517(f__$1,blockable__$1,meta28518){
return (new cljs.core.async.t_cljs$core$async28517(f__$1,blockable__$1,meta28518));
});

}

return (new cljs.core.async.t_cljs$core$async28517(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28523 = arguments.length;
switch (G__28523) {
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
var G__28526 = arguments.length;
switch (G__28526) {
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
var G__28529 = arguments.length;
switch (G__28529) {
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
var val_28531 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28531) : fn1.call(null,val_28531));
} else {
cljs.core.async.impl.dispatch.run(((function (val_28531,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28531) : fn1.call(null,val_28531));
});})(val_28531,ret))
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
var G__28533 = arguments.length;
switch (G__28533) {
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
var n__4607__auto___28535 = n;
var x_28536 = (0);
while(true){
if((x_28536 < n__4607__auto___28535)){
(a[x_28536] = (0));

var G__28537 = (x_28536 + (1));
x_28536 = G__28537;
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

var G__28538 = (i + (1));
i = G__28538;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28539 = (function (flag,meta28540){
this.flag = flag;
this.meta28540 = meta28540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28541,meta28540__$1){
var self__ = this;
var _28541__$1 = this;
return (new cljs.core.async.t_cljs$core$async28539(self__.flag,meta28540__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28541){
var self__ = this;
var _28541__$1 = this;
return self__.meta28540;
});})(flag))
;

cljs.core.async.t_cljs$core$async28539.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28539.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28539.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta28540], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28539";

cljs.core.async.t_cljs$core$async28539.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28539");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28539.
 */
cljs.core.async.__GT_t_cljs$core$async28539 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28539(flag__$1,meta28540){
return (new cljs.core.async.t_cljs$core$async28539(flag__$1,meta28540));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28539(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28542 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28542 = (function (flag,cb,meta28543){
this.flag = flag;
this.cb = cb;
this.meta28543 = meta28543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28544,meta28543__$1){
var self__ = this;
var _28544__$1 = this;
return (new cljs.core.async.t_cljs$core$async28542(self__.flag,self__.cb,meta28543__$1));
});

cljs.core.async.t_cljs$core$async28542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28544){
var self__ = this;
var _28544__$1 = this;
return self__.meta28543;
});

cljs.core.async.t_cljs$core$async28542.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28542.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async28542.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28542.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta28543], null);
});

cljs.core.async.t_cljs$core$async28542.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28542";

cljs.core.async.t_cljs$core$async28542.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28542");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28542.
 */
cljs.core.async.__GT_t_cljs$core$async28542 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28542(flag__$1,cb__$1,meta28543){
return (new cljs.core.async.t_cljs$core$async28542(flag__$1,cb__$1,meta28543));
});

}

return (new cljs.core.async.t_cljs$core$async28542(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28545_SHARP_){
var G__28547 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28545_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28547) : fret.call(null,G__28547));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28546_SHARP_){
var G__28548 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28546_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28548) : fret.call(null,G__28548));
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
var G__28549 = (i + (1));
i = G__28549;
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
var len__4730__auto___28555 = arguments.length;
var i__4731__auto___28556 = (0);
while(true){
if((i__4731__auto___28556 < len__4730__auto___28555)){
args__4736__auto__.push((arguments[i__4731__auto___28556]));

var G__28557 = (i__4731__auto___28556 + (1));
i__4731__auto___28556 = G__28557;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28552){
var map__28553 = p__28552;
var map__28553__$1 = (((((!((map__28553 == null))))?(((((map__28553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28553):map__28553);
var opts = map__28553__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28550){
var G__28551 = cljs.core.first(seq28550);
var seq28550__$1 = cljs.core.next(seq28550);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28551,seq28550__$1);
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
var G__28559 = arguments.length;
switch (G__28559) {
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
var c__28456__auto___28605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto___28605){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto___28605){
return (function (state_28583){
var state_val_28584 = (state_28583[(1)]);
if((state_val_28584 === (7))){
var inst_28579 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
var statearr_28585_28606 = state_28583__$1;
(statearr_28585_28606[(2)] = inst_28579);

(statearr_28585_28606[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28584 === (1))){
var state_28583__$1 = state_28583;
var statearr_28586_28607 = state_28583__$1;
(statearr_28586_28607[(2)] = null);

(statearr_28586_28607[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28584 === (4))){
var inst_28562 = (state_28583[(7)]);
var inst_28562__$1 = (state_28583[(2)]);
var inst_28563 = (inst_28562__$1 == null);
var state_28583__$1 = (function (){var statearr_28587 = state_28583;
(statearr_28587[(7)] = inst_28562__$1);

return statearr_28587;
})();
if(cljs.core.truth_(inst_28563)){
var statearr_28588_28608 = state_28583__$1;
(statearr_28588_28608[(1)] = (5));

} else {
var statearr_28589_28609 = state_28583__$1;
(statearr_28589_28609[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28584 === (13))){
var state_28583__$1 = state_28583;
var statearr_28590_28610 = state_28583__$1;
(statearr_28590_28610[(2)] = null);

(statearr_28590_28610[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28584 === (6))){
var inst_28562 = (state_28583[(7)]);
var state_28583__$1 = state_28583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28583__$1,(11),to,inst_28562);
} else {
if((state_val_28584 === (3))){
var inst_28581 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28583__$1,inst_28581);
} else {
if((state_val_28584 === (12))){
var state_28583__$1 = state_28583;
var statearr_28591_28611 = state_28583__$1;
(statearr_28591_28611[(2)] = null);

(statearr_28591_28611[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28584 === (2))){
var state_28583__$1 = state_28583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28583__$1,(4),from);
} else {
if((state_val_28584 === (11))){
var inst_28572 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
if(cljs.core.truth_(inst_28572)){
var statearr_28592_28612 = state_28583__$1;
(statearr_28592_28612[(1)] = (12));

} else {
var statearr_28593_28613 = state_28583__$1;
(statearr_28593_28613[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28584 === (9))){
var state_28583__$1 = state_28583;
var statearr_28594_28614 = state_28583__$1;
(statearr_28594_28614[(2)] = null);

(statearr_28594_28614[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28584 === (5))){
var state_28583__$1 = state_28583;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28595_28615 = state_28583__$1;
(statearr_28595_28615[(1)] = (8));

} else {
var statearr_28596_28616 = state_28583__$1;
(statearr_28596_28616[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28584 === (14))){
var inst_28577 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
var statearr_28597_28617 = state_28583__$1;
(statearr_28597_28617[(2)] = inst_28577);

(statearr_28597_28617[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28584 === (10))){
var inst_28569 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
var statearr_28598_28618 = state_28583__$1;
(statearr_28598_28618[(2)] = inst_28569);

(statearr_28598_28618[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28584 === (8))){
var inst_28566 = cljs.core.async.close_BANG_(to);
var state_28583__$1 = state_28583;
var statearr_28599_28619 = state_28583__$1;
(statearr_28599_28619[(2)] = inst_28566);

(statearr_28599_28619[(1)] = (10));


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
});})(c__28456__auto___28605))
;
return ((function (switch__28349__auto__,c__28456__auto___28605){
return (function() {
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_28600 = [null,null,null,null,null,null,null,null];
(statearr_28600[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_28600[(1)] = (1));

return statearr_28600;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_28583){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_28583);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e28601){if((e28601 instanceof Object)){
var ex__28353__auto__ = e28601;
var statearr_28602_28620 = state_28583;
(statearr_28602_28620[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28583);

return cljs.core.cst$kw$recur;
} else {
throw e28601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__28621 = state_28583;
state_28583 = G__28621;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_28583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_28583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto___28605))
})();
var state__28458__auto__ = (function (){var statearr_28603 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_28603[(6)] = c__28456__auto___28605);

return statearr_28603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto___28605))
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
return (function (p__28622){
var vec__28623 = p__28622;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28623,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28623,(1),null);
var job = vec__28623;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28456__auto___28794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto___28794,res,vec__28623,v,p,job,jobs,results){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto___28794,res,vec__28623,v,p,job,jobs,results){
return (function (state_28630){
var state_val_28631 = (state_28630[(1)]);
if((state_val_28631 === (1))){
var state_28630__$1 = state_28630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28630__$1,(2),res,v);
} else {
if((state_val_28631 === (2))){
var inst_28627 = (state_28630[(2)]);
var inst_28628 = cljs.core.async.close_BANG_(res);
var state_28630__$1 = (function (){var statearr_28632 = state_28630;
(statearr_28632[(7)] = inst_28627);

return statearr_28632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28630__$1,inst_28628);
} else {
return null;
}
}
});})(c__28456__auto___28794,res,vec__28623,v,p,job,jobs,results))
;
return ((function (switch__28349__auto__,c__28456__auto___28794,res,vec__28623,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0 = (function (){
var statearr_28633 = [null,null,null,null,null,null,null,null];
(statearr_28633[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__);

(statearr_28633[(1)] = (1));

return statearr_28633;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1 = (function (state_28630){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_28630);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e28634){if((e28634 instanceof Object)){
var ex__28353__auto__ = e28634;
var statearr_28635_28795 = state_28630;
(statearr_28635_28795[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28630);

return cljs.core.cst$kw$recur;
} else {
throw e28634;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__28796 = state_28630;
state_28630 = G__28796;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = function(state_28630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1.call(this,state_28630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto___28794,res,vec__28623,v,p,job,jobs,results))
})();
var state__28458__auto__ = (function (){var statearr_28636 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_28636[(6)] = c__28456__auto___28794);

return statearr_28636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto___28794,res,vec__28623,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28637){
var vec__28638 = p__28637;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28638,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28638,(1),null);
var job = vec__28638;
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
var n__4607__auto___28797 = n;
var __28798 = (0);
while(true){
if((__28798 < n__4607__auto___28797)){
var G__28641_28799 = type;
var G__28641_28800__$1 = (((G__28641_28799 instanceof cljs.core.Keyword))?G__28641_28799.fqn:null);
switch (G__28641_28800__$1) {
case "compute":
var c__28456__auto___28802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28798,c__28456__auto___28802,G__28641_28799,G__28641_28800__$1,n__4607__auto___28797,jobs,results,process,async){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (__28798,c__28456__auto___28802,G__28641_28799,G__28641_28800__$1,n__4607__auto___28797,jobs,results,process,async){
return (function (state_28654){
var state_val_28655 = (state_28654[(1)]);
if((state_val_28655 === (1))){
var state_28654__$1 = state_28654;
var statearr_28656_28803 = state_28654__$1;
(statearr_28656_28803[(2)] = null);

(statearr_28656_28803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28655 === (2))){
var state_28654__$1 = state_28654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28654__$1,(4),jobs);
} else {
if((state_val_28655 === (3))){
var inst_28652 = (state_28654[(2)]);
var state_28654__$1 = state_28654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28654__$1,inst_28652);
} else {
if((state_val_28655 === (4))){
var inst_28644 = (state_28654[(2)]);
var inst_28645 = process(inst_28644);
var state_28654__$1 = state_28654;
if(cljs.core.truth_(inst_28645)){
var statearr_28657_28804 = state_28654__$1;
(statearr_28657_28804[(1)] = (5));

} else {
var statearr_28658_28805 = state_28654__$1;
(statearr_28658_28805[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28655 === (5))){
var state_28654__$1 = state_28654;
var statearr_28659_28806 = state_28654__$1;
(statearr_28659_28806[(2)] = null);

(statearr_28659_28806[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28655 === (6))){
var state_28654__$1 = state_28654;
var statearr_28660_28807 = state_28654__$1;
(statearr_28660_28807[(2)] = null);

(statearr_28660_28807[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28655 === (7))){
var inst_28650 = (state_28654[(2)]);
var state_28654__$1 = state_28654;
var statearr_28661_28808 = state_28654__$1;
(statearr_28661_28808[(2)] = inst_28650);

(statearr_28661_28808[(1)] = (3));


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
});})(__28798,c__28456__auto___28802,G__28641_28799,G__28641_28800__$1,n__4607__auto___28797,jobs,results,process,async))
;
return ((function (__28798,switch__28349__auto__,c__28456__auto___28802,G__28641_28799,G__28641_28800__$1,n__4607__auto___28797,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0 = (function (){
var statearr_28662 = [null,null,null,null,null,null,null];
(statearr_28662[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__);

(statearr_28662[(1)] = (1));

return statearr_28662;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1 = (function (state_28654){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_28654);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e28663){if((e28663 instanceof Object)){
var ex__28353__auto__ = e28663;
var statearr_28664_28809 = state_28654;
(statearr_28664_28809[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28654);

return cljs.core.cst$kw$recur;
} else {
throw e28663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__28810 = state_28654;
state_28654 = G__28810;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = function(state_28654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1.call(this,state_28654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__;
})()
;})(__28798,switch__28349__auto__,c__28456__auto___28802,G__28641_28799,G__28641_28800__$1,n__4607__auto___28797,jobs,results,process,async))
})();
var state__28458__auto__ = (function (){var statearr_28665 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_28665[(6)] = c__28456__auto___28802);

return statearr_28665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(__28798,c__28456__auto___28802,G__28641_28799,G__28641_28800__$1,n__4607__auto___28797,jobs,results,process,async))
);


break;
case "async":
var c__28456__auto___28811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28798,c__28456__auto___28811,G__28641_28799,G__28641_28800__$1,n__4607__auto___28797,jobs,results,process,async){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (__28798,c__28456__auto___28811,G__28641_28799,G__28641_28800__$1,n__4607__auto___28797,jobs,results,process,async){
return (function (state_28678){
var state_val_28679 = (state_28678[(1)]);
if((state_val_28679 === (1))){
var state_28678__$1 = state_28678;
var statearr_28680_28812 = state_28678__$1;
(statearr_28680_28812[(2)] = null);

(statearr_28680_28812[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28679 === (2))){
var state_28678__$1 = state_28678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28678__$1,(4),jobs);
} else {
if((state_val_28679 === (3))){
var inst_28676 = (state_28678[(2)]);
var state_28678__$1 = state_28678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28678__$1,inst_28676);
} else {
if((state_val_28679 === (4))){
var inst_28668 = (state_28678[(2)]);
var inst_28669 = async(inst_28668);
var state_28678__$1 = state_28678;
if(cljs.core.truth_(inst_28669)){
var statearr_28681_28813 = state_28678__$1;
(statearr_28681_28813[(1)] = (5));

} else {
var statearr_28682_28814 = state_28678__$1;
(statearr_28682_28814[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28679 === (5))){
var state_28678__$1 = state_28678;
var statearr_28683_28815 = state_28678__$1;
(statearr_28683_28815[(2)] = null);

(statearr_28683_28815[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28679 === (6))){
var state_28678__$1 = state_28678;
var statearr_28684_28816 = state_28678__$1;
(statearr_28684_28816[(2)] = null);

(statearr_28684_28816[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28679 === (7))){
var inst_28674 = (state_28678[(2)]);
var state_28678__$1 = state_28678;
var statearr_28685_28817 = state_28678__$1;
(statearr_28685_28817[(2)] = inst_28674);

(statearr_28685_28817[(1)] = (3));


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
});})(__28798,c__28456__auto___28811,G__28641_28799,G__28641_28800__$1,n__4607__auto___28797,jobs,results,process,async))
;
return ((function (__28798,switch__28349__auto__,c__28456__auto___28811,G__28641_28799,G__28641_28800__$1,n__4607__auto___28797,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0 = (function (){
var statearr_28686 = [null,null,null,null,null,null,null];
(statearr_28686[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__);

(statearr_28686[(1)] = (1));

return statearr_28686;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1 = (function (state_28678){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_28678);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e28687){if((e28687 instanceof Object)){
var ex__28353__auto__ = e28687;
var statearr_28688_28818 = state_28678;
(statearr_28688_28818[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28678);

return cljs.core.cst$kw$recur;
} else {
throw e28687;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__28819 = state_28678;
state_28678 = G__28819;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = function(state_28678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1.call(this,state_28678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__;
})()
;})(__28798,switch__28349__auto__,c__28456__auto___28811,G__28641_28799,G__28641_28800__$1,n__4607__auto___28797,jobs,results,process,async))
})();
var state__28458__auto__ = (function (){var statearr_28689 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_28689[(6)] = c__28456__auto___28811);

return statearr_28689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(__28798,c__28456__auto___28811,G__28641_28799,G__28641_28800__$1,n__4607__auto___28797,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28641_28800__$1)].join('')));

}

var G__28820 = (__28798 + (1));
__28798 = G__28820;
continue;
} else {
}
break;
}

var c__28456__auto___28821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto___28821,jobs,results,process,async){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto___28821,jobs,results,process,async){
return (function (state_28711){
var state_val_28712 = (state_28711[(1)]);
if((state_val_28712 === (7))){
var inst_28707 = (state_28711[(2)]);
var state_28711__$1 = state_28711;
var statearr_28713_28822 = state_28711__$1;
(statearr_28713_28822[(2)] = inst_28707);

(statearr_28713_28822[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28712 === (1))){
var state_28711__$1 = state_28711;
var statearr_28714_28823 = state_28711__$1;
(statearr_28714_28823[(2)] = null);

(statearr_28714_28823[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28712 === (4))){
var inst_28692 = (state_28711[(7)]);
var inst_28692__$1 = (state_28711[(2)]);
var inst_28693 = (inst_28692__$1 == null);
var state_28711__$1 = (function (){var statearr_28715 = state_28711;
(statearr_28715[(7)] = inst_28692__$1);

return statearr_28715;
})();
if(cljs.core.truth_(inst_28693)){
var statearr_28716_28824 = state_28711__$1;
(statearr_28716_28824[(1)] = (5));

} else {
var statearr_28717_28825 = state_28711__$1;
(statearr_28717_28825[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28712 === (6))){
var inst_28692 = (state_28711[(7)]);
var inst_28697 = (state_28711[(8)]);
var inst_28697__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28699 = [inst_28692,inst_28697__$1];
var inst_28700 = (new cljs.core.PersistentVector(null,2,(5),inst_28698,inst_28699,null));
var state_28711__$1 = (function (){var statearr_28718 = state_28711;
(statearr_28718[(8)] = inst_28697__$1);

return statearr_28718;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28711__$1,(8),jobs,inst_28700);
} else {
if((state_val_28712 === (3))){
var inst_28709 = (state_28711[(2)]);
var state_28711__$1 = state_28711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28711__$1,inst_28709);
} else {
if((state_val_28712 === (2))){
var state_28711__$1 = state_28711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28711__$1,(4),from);
} else {
if((state_val_28712 === (9))){
var inst_28704 = (state_28711[(2)]);
var state_28711__$1 = (function (){var statearr_28719 = state_28711;
(statearr_28719[(9)] = inst_28704);

return statearr_28719;
})();
var statearr_28720_28826 = state_28711__$1;
(statearr_28720_28826[(2)] = null);

(statearr_28720_28826[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28712 === (5))){
var inst_28695 = cljs.core.async.close_BANG_(jobs);
var state_28711__$1 = state_28711;
var statearr_28721_28827 = state_28711__$1;
(statearr_28721_28827[(2)] = inst_28695);

(statearr_28721_28827[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28712 === (8))){
var inst_28697 = (state_28711[(8)]);
var inst_28702 = (state_28711[(2)]);
var state_28711__$1 = (function (){var statearr_28722 = state_28711;
(statearr_28722[(10)] = inst_28702);

return statearr_28722;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28711__$1,(9),results,inst_28697);
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
});})(c__28456__auto___28821,jobs,results,process,async))
;
return ((function (switch__28349__auto__,c__28456__auto___28821,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0 = (function (){
var statearr_28723 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__);

(statearr_28723[(1)] = (1));

return statearr_28723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1 = (function (state_28711){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_28711);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e28724){if((e28724 instanceof Object)){
var ex__28353__auto__ = e28724;
var statearr_28725_28828 = state_28711;
(statearr_28725_28828[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28711);

return cljs.core.cst$kw$recur;
} else {
throw e28724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__28829 = state_28711;
state_28711 = G__28829;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = function(state_28711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1.call(this,state_28711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto___28821,jobs,results,process,async))
})();
var state__28458__auto__ = (function (){var statearr_28726 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_28726[(6)] = c__28456__auto___28821);

return statearr_28726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto___28821,jobs,results,process,async))
);


var c__28456__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto__,jobs,results,process,async){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto__,jobs,results,process,async){
return (function (state_28764){
var state_val_28765 = (state_28764[(1)]);
if((state_val_28765 === (7))){
var inst_28760 = (state_28764[(2)]);
var state_28764__$1 = state_28764;
var statearr_28766_28830 = state_28764__$1;
(statearr_28766_28830[(2)] = inst_28760);

(statearr_28766_28830[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28765 === (20))){
var state_28764__$1 = state_28764;
var statearr_28767_28831 = state_28764__$1;
(statearr_28767_28831[(2)] = null);

(statearr_28767_28831[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28765 === (1))){
var state_28764__$1 = state_28764;
var statearr_28768_28832 = state_28764__$1;
(statearr_28768_28832[(2)] = null);

(statearr_28768_28832[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28765 === (4))){
var inst_28729 = (state_28764[(7)]);
var inst_28729__$1 = (state_28764[(2)]);
var inst_28730 = (inst_28729__$1 == null);
var state_28764__$1 = (function (){var statearr_28769 = state_28764;
(statearr_28769[(7)] = inst_28729__$1);

return statearr_28769;
})();
if(cljs.core.truth_(inst_28730)){
var statearr_28770_28833 = state_28764__$1;
(statearr_28770_28833[(1)] = (5));

} else {
var statearr_28771_28834 = state_28764__$1;
(statearr_28771_28834[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28765 === (15))){
var inst_28742 = (state_28764[(8)]);
var state_28764__$1 = state_28764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28764__$1,(18),to,inst_28742);
} else {
if((state_val_28765 === (21))){
var inst_28755 = (state_28764[(2)]);
var state_28764__$1 = state_28764;
var statearr_28772_28835 = state_28764__$1;
(statearr_28772_28835[(2)] = inst_28755);

(statearr_28772_28835[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28765 === (13))){
var inst_28757 = (state_28764[(2)]);
var state_28764__$1 = (function (){var statearr_28773 = state_28764;
(statearr_28773[(9)] = inst_28757);

return statearr_28773;
})();
var statearr_28774_28836 = state_28764__$1;
(statearr_28774_28836[(2)] = null);

(statearr_28774_28836[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28765 === (6))){
var inst_28729 = (state_28764[(7)]);
var state_28764__$1 = state_28764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28764__$1,(11),inst_28729);
} else {
if((state_val_28765 === (17))){
var inst_28750 = (state_28764[(2)]);
var state_28764__$1 = state_28764;
if(cljs.core.truth_(inst_28750)){
var statearr_28775_28837 = state_28764__$1;
(statearr_28775_28837[(1)] = (19));

} else {
var statearr_28776_28838 = state_28764__$1;
(statearr_28776_28838[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28765 === (3))){
var inst_28762 = (state_28764[(2)]);
var state_28764__$1 = state_28764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28764__$1,inst_28762);
} else {
if((state_val_28765 === (12))){
var inst_28739 = (state_28764[(10)]);
var state_28764__$1 = state_28764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28764__$1,(14),inst_28739);
} else {
if((state_val_28765 === (2))){
var state_28764__$1 = state_28764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28764__$1,(4),results);
} else {
if((state_val_28765 === (19))){
var state_28764__$1 = state_28764;
var statearr_28777_28839 = state_28764__$1;
(statearr_28777_28839[(2)] = null);

(statearr_28777_28839[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28765 === (11))){
var inst_28739 = (state_28764[(2)]);
var state_28764__$1 = (function (){var statearr_28778 = state_28764;
(statearr_28778[(10)] = inst_28739);

return statearr_28778;
})();
var statearr_28779_28840 = state_28764__$1;
(statearr_28779_28840[(2)] = null);

(statearr_28779_28840[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28765 === (9))){
var state_28764__$1 = state_28764;
var statearr_28780_28841 = state_28764__$1;
(statearr_28780_28841[(2)] = null);

(statearr_28780_28841[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28765 === (5))){
var state_28764__$1 = state_28764;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28781_28842 = state_28764__$1;
(statearr_28781_28842[(1)] = (8));

} else {
var statearr_28782_28843 = state_28764__$1;
(statearr_28782_28843[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28765 === (14))){
var inst_28742 = (state_28764[(8)]);
var inst_28744 = (state_28764[(11)]);
var inst_28742__$1 = (state_28764[(2)]);
var inst_28743 = (inst_28742__$1 == null);
var inst_28744__$1 = cljs.core.not(inst_28743);
var state_28764__$1 = (function (){var statearr_28783 = state_28764;
(statearr_28783[(8)] = inst_28742__$1);

(statearr_28783[(11)] = inst_28744__$1);

return statearr_28783;
})();
if(inst_28744__$1){
var statearr_28784_28844 = state_28764__$1;
(statearr_28784_28844[(1)] = (15));

} else {
var statearr_28785_28845 = state_28764__$1;
(statearr_28785_28845[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28765 === (16))){
var inst_28744 = (state_28764[(11)]);
var state_28764__$1 = state_28764;
var statearr_28786_28846 = state_28764__$1;
(statearr_28786_28846[(2)] = inst_28744);

(statearr_28786_28846[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28765 === (10))){
var inst_28736 = (state_28764[(2)]);
var state_28764__$1 = state_28764;
var statearr_28787_28847 = state_28764__$1;
(statearr_28787_28847[(2)] = inst_28736);

(statearr_28787_28847[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28765 === (18))){
var inst_28747 = (state_28764[(2)]);
var state_28764__$1 = state_28764;
var statearr_28788_28848 = state_28764__$1;
(statearr_28788_28848[(2)] = inst_28747);

(statearr_28788_28848[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28765 === (8))){
var inst_28733 = cljs.core.async.close_BANG_(to);
var state_28764__$1 = state_28764;
var statearr_28789_28849 = state_28764__$1;
(statearr_28789_28849[(2)] = inst_28733);

(statearr_28789_28849[(1)] = (10));


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
});})(c__28456__auto__,jobs,results,process,async))
;
return ((function (switch__28349__auto__,c__28456__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0 = (function (){
var statearr_28790 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28790[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__);

(statearr_28790[(1)] = (1));

return statearr_28790;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1 = (function (state_28764){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_28764);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e28791){if((e28791 instanceof Object)){
var ex__28353__auto__ = e28791;
var statearr_28792_28850 = state_28764;
(statearr_28792_28850[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28764);

return cljs.core.cst$kw$recur;
} else {
throw e28791;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__28851 = state_28764;
state_28764 = G__28851;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__ = function(state_28764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1.call(this,state_28764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28350__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto__,jobs,results,process,async))
})();
var state__28458__auto__ = (function (){var statearr_28793 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_28793[(6)] = c__28456__auto__);

return statearr_28793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto__,jobs,results,process,async))
);

return c__28456__auto__;
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
var G__28853 = arguments.length;
switch (G__28853) {
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
var G__28856 = arguments.length;
switch (G__28856) {
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
var G__28859 = arguments.length;
switch (G__28859) {
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
var c__28456__auto___28908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto___28908,tc,fc){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto___28908,tc,fc){
return (function (state_28885){
var state_val_28886 = (state_28885[(1)]);
if((state_val_28886 === (7))){
var inst_28881 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
var statearr_28887_28909 = state_28885__$1;
(statearr_28887_28909[(2)] = inst_28881);

(statearr_28887_28909[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28886 === (1))){
var state_28885__$1 = state_28885;
var statearr_28888_28910 = state_28885__$1;
(statearr_28888_28910[(2)] = null);

(statearr_28888_28910[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28886 === (4))){
var inst_28862 = (state_28885[(7)]);
var inst_28862__$1 = (state_28885[(2)]);
var inst_28863 = (inst_28862__$1 == null);
var state_28885__$1 = (function (){var statearr_28889 = state_28885;
(statearr_28889[(7)] = inst_28862__$1);

return statearr_28889;
})();
if(cljs.core.truth_(inst_28863)){
var statearr_28890_28911 = state_28885__$1;
(statearr_28890_28911[(1)] = (5));

} else {
var statearr_28891_28912 = state_28885__$1;
(statearr_28891_28912[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28886 === (13))){
var state_28885__$1 = state_28885;
var statearr_28892_28913 = state_28885__$1;
(statearr_28892_28913[(2)] = null);

(statearr_28892_28913[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28886 === (6))){
var inst_28862 = (state_28885[(7)]);
var inst_28868 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28862) : p.call(null,inst_28862));
var state_28885__$1 = state_28885;
if(cljs.core.truth_(inst_28868)){
var statearr_28893_28914 = state_28885__$1;
(statearr_28893_28914[(1)] = (9));

} else {
var statearr_28894_28915 = state_28885__$1;
(statearr_28894_28915[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28886 === (3))){
var inst_28883 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28885__$1,inst_28883);
} else {
if((state_val_28886 === (12))){
var state_28885__$1 = state_28885;
var statearr_28895_28916 = state_28885__$1;
(statearr_28895_28916[(2)] = null);

(statearr_28895_28916[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28886 === (2))){
var state_28885__$1 = state_28885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28885__$1,(4),ch);
} else {
if((state_val_28886 === (11))){
var inst_28862 = (state_28885[(7)]);
var inst_28872 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28885__$1,(8),inst_28872,inst_28862);
} else {
if((state_val_28886 === (9))){
var state_28885__$1 = state_28885;
var statearr_28896_28917 = state_28885__$1;
(statearr_28896_28917[(2)] = tc);

(statearr_28896_28917[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28886 === (5))){
var inst_28865 = cljs.core.async.close_BANG_(tc);
var inst_28866 = cljs.core.async.close_BANG_(fc);
var state_28885__$1 = (function (){var statearr_28897 = state_28885;
(statearr_28897[(8)] = inst_28865);

return statearr_28897;
})();
var statearr_28898_28918 = state_28885__$1;
(statearr_28898_28918[(2)] = inst_28866);

(statearr_28898_28918[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28886 === (14))){
var inst_28879 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
var statearr_28899_28919 = state_28885__$1;
(statearr_28899_28919[(2)] = inst_28879);

(statearr_28899_28919[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28886 === (10))){
var state_28885__$1 = state_28885;
var statearr_28900_28920 = state_28885__$1;
(statearr_28900_28920[(2)] = fc);

(statearr_28900_28920[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28886 === (8))){
var inst_28874 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
if(cljs.core.truth_(inst_28874)){
var statearr_28901_28921 = state_28885__$1;
(statearr_28901_28921[(1)] = (12));

} else {
var statearr_28902_28922 = state_28885__$1;
(statearr_28902_28922[(1)] = (13));

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
});})(c__28456__auto___28908,tc,fc))
;
return ((function (switch__28349__auto__,c__28456__auto___28908,tc,fc){
return (function() {
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_28903 = [null,null,null,null,null,null,null,null,null];
(statearr_28903[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_28903[(1)] = (1));

return statearr_28903;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_28885){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_28885);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e28904){if((e28904 instanceof Object)){
var ex__28353__auto__ = e28904;
var statearr_28905_28923 = state_28885;
(statearr_28905_28923[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28885);

return cljs.core.cst$kw$recur;
} else {
throw e28904;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__28924 = state_28885;
state_28885 = G__28924;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_28885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_28885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto___28908,tc,fc))
})();
var state__28458__auto__ = (function (){var statearr_28906 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_28906[(6)] = c__28456__auto___28908);

return statearr_28906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto___28908,tc,fc))
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
var c__28456__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto__){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto__){
return (function (state_28945){
var state_val_28946 = (state_28945[(1)]);
if((state_val_28946 === (7))){
var inst_28941 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
var statearr_28947_28965 = state_28945__$1;
(statearr_28947_28965[(2)] = inst_28941);

(statearr_28947_28965[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28946 === (1))){
var inst_28925 = init;
var state_28945__$1 = (function (){var statearr_28948 = state_28945;
(statearr_28948[(7)] = inst_28925);

return statearr_28948;
})();
var statearr_28949_28966 = state_28945__$1;
(statearr_28949_28966[(2)] = null);

(statearr_28949_28966[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28946 === (4))){
var inst_28928 = (state_28945[(8)]);
var inst_28928__$1 = (state_28945[(2)]);
var inst_28929 = (inst_28928__$1 == null);
var state_28945__$1 = (function (){var statearr_28950 = state_28945;
(statearr_28950[(8)] = inst_28928__$1);

return statearr_28950;
})();
if(cljs.core.truth_(inst_28929)){
var statearr_28951_28967 = state_28945__$1;
(statearr_28951_28967[(1)] = (5));

} else {
var statearr_28952_28968 = state_28945__$1;
(statearr_28952_28968[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28946 === (6))){
var inst_28925 = (state_28945[(7)]);
var inst_28932 = (state_28945[(9)]);
var inst_28928 = (state_28945[(8)]);
var inst_28932__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28925,inst_28928) : f.call(null,inst_28925,inst_28928));
var inst_28933 = cljs.core.reduced_QMARK_(inst_28932__$1);
var state_28945__$1 = (function (){var statearr_28953 = state_28945;
(statearr_28953[(9)] = inst_28932__$1);

return statearr_28953;
})();
if(inst_28933){
var statearr_28954_28969 = state_28945__$1;
(statearr_28954_28969[(1)] = (8));

} else {
var statearr_28955_28970 = state_28945__$1;
(statearr_28955_28970[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28946 === (3))){
var inst_28943 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28945__$1,inst_28943);
} else {
if((state_val_28946 === (2))){
var state_28945__$1 = state_28945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28945__$1,(4),ch);
} else {
if((state_val_28946 === (9))){
var inst_28932 = (state_28945[(9)]);
var inst_28925 = inst_28932;
var state_28945__$1 = (function (){var statearr_28956 = state_28945;
(statearr_28956[(7)] = inst_28925);

return statearr_28956;
})();
var statearr_28957_28971 = state_28945__$1;
(statearr_28957_28971[(2)] = null);

(statearr_28957_28971[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28946 === (5))){
var inst_28925 = (state_28945[(7)]);
var state_28945__$1 = state_28945;
var statearr_28958_28972 = state_28945__$1;
(statearr_28958_28972[(2)] = inst_28925);

(statearr_28958_28972[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28946 === (10))){
var inst_28939 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
var statearr_28959_28973 = state_28945__$1;
(statearr_28959_28973[(2)] = inst_28939);

(statearr_28959_28973[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28946 === (8))){
var inst_28932 = (state_28945[(9)]);
var inst_28935 = cljs.core.deref(inst_28932);
var state_28945__$1 = state_28945;
var statearr_28960_28974 = state_28945__$1;
(statearr_28960_28974[(2)] = inst_28935);

(statearr_28960_28974[(1)] = (10));


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
});})(c__28456__auto__))
;
return ((function (switch__28349__auto__,c__28456__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28350__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28350__auto____0 = (function (){
var statearr_28961 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28961[(0)] = cljs$core$async$reduce_$_state_machine__28350__auto__);

(statearr_28961[(1)] = (1));

return statearr_28961;
});
var cljs$core$async$reduce_$_state_machine__28350__auto____1 = (function (state_28945){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_28945);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e28962){if((e28962 instanceof Object)){
var ex__28353__auto__ = e28962;
var statearr_28963_28975 = state_28945;
(statearr_28963_28975[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28945);

return cljs.core.cst$kw$recur;
} else {
throw e28962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__28976 = state_28945;
state_28945 = G__28976;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28350__auto__ = function(state_28945){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28350__auto____1.call(this,state_28945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28350__auto____0;
cljs$core$async$reduce_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28350__auto____1;
return cljs$core$async$reduce_$_state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto__))
})();
var state__28458__auto__ = (function (){var statearr_28964 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_28964[(6)] = c__28456__auto__);

return statearr_28964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto__))
);

return c__28456__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28456__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto__,f__$1){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto__,f__$1){
return (function (state_28982){
var state_val_28983 = (state_28982[(1)]);
if((state_val_28983 === (1))){
var inst_28977 = cljs.core.async.reduce(f__$1,init,ch);
var state_28982__$1 = state_28982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28982__$1,(2),inst_28977);
} else {
if((state_val_28983 === (2))){
var inst_28979 = (state_28982[(2)]);
var inst_28980 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_28979) : f__$1.call(null,inst_28979));
var state_28982__$1 = state_28982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28982__$1,inst_28980);
} else {
return null;
}
}
});})(c__28456__auto__,f__$1))
;
return ((function (switch__28349__auto__,c__28456__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28350__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28350__auto____0 = (function (){
var statearr_28984 = [null,null,null,null,null,null,null];
(statearr_28984[(0)] = cljs$core$async$transduce_$_state_machine__28350__auto__);

(statearr_28984[(1)] = (1));

return statearr_28984;
});
var cljs$core$async$transduce_$_state_machine__28350__auto____1 = (function (state_28982){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_28982);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e28985){if((e28985 instanceof Object)){
var ex__28353__auto__ = e28985;
var statearr_28986_28988 = state_28982;
(statearr_28986_28988[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28982);

return cljs.core.cst$kw$recur;
} else {
throw e28985;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__28989 = state_28982;
state_28982 = G__28989;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28350__auto__ = function(state_28982){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28350__auto____1.call(this,state_28982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28350__auto____0;
cljs$core$async$transduce_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28350__auto____1;
return cljs$core$async$transduce_$_state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto__,f__$1))
})();
var state__28458__auto__ = (function (){var statearr_28987 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_28987[(6)] = c__28456__auto__);

return statearr_28987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto__,f__$1))
);

return c__28456__auto__;
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
var G__28991 = arguments.length;
switch (G__28991) {
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
var c__28456__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto__){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto__){
return (function (state_29016){
var state_val_29017 = (state_29016[(1)]);
if((state_val_29017 === (7))){
var inst_28998 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29018_29039 = state_29016__$1;
(statearr_29018_29039[(2)] = inst_28998);

(statearr_29018_29039[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (1))){
var inst_28992 = cljs.core.seq(coll);
var inst_28993 = inst_28992;
var state_29016__$1 = (function (){var statearr_29019 = state_29016;
(statearr_29019[(7)] = inst_28993);

return statearr_29019;
})();
var statearr_29020_29040 = state_29016__$1;
(statearr_29020_29040[(2)] = null);

(statearr_29020_29040[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (4))){
var inst_28993 = (state_29016[(7)]);
var inst_28996 = cljs.core.first(inst_28993);
var state_29016__$1 = state_29016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29016__$1,(7),ch,inst_28996);
} else {
if((state_val_29017 === (13))){
var inst_29010 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29021_29041 = state_29016__$1;
(statearr_29021_29041[(2)] = inst_29010);

(statearr_29021_29041[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (6))){
var inst_29001 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
if(cljs.core.truth_(inst_29001)){
var statearr_29022_29042 = state_29016__$1;
(statearr_29022_29042[(1)] = (8));

} else {
var statearr_29023_29043 = state_29016__$1;
(statearr_29023_29043[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (3))){
var inst_29014 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29016__$1,inst_29014);
} else {
if((state_val_29017 === (12))){
var state_29016__$1 = state_29016;
var statearr_29024_29044 = state_29016__$1;
(statearr_29024_29044[(2)] = null);

(statearr_29024_29044[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (2))){
var inst_28993 = (state_29016[(7)]);
var state_29016__$1 = state_29016;
if(cljs.core.truth_(inst_28993)){
var statearr_29025_29045 = state_29016__$1;
(statearr_29025_29045[(1)] = (4));

} else {
var statearr_29026_29046 = state_29016__$1;
(statearr_29026_29046[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (11))){
var inst_29007 = cljs.core.async.close_BANG_(ch);
var state_29016__$1 = state_29016;
var statearr_29027_29047 = state_29016__$1;
(statearr_29027_29047[(2)] = inst_29007);

(statearr_29027_29047[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (9))){
var state_29016__$1 = state_29016;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29028_29048 = state_29016__$1;
(statearr_29028_29048[(1)] = (11));

} else {
var statearr_29029_29049 = state_29016__$1;
(statearr_29029_29049[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (5))){
var inst_28993 = (state_29016[(7)]);
var state_29016__$1 = state_29016;
var statearr_29030_29050 = state_29016__$1;
(statearr_29030_29050[(2)] = inst_28993);

(statearr_29030_29050[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (10))){
var inst_29012 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29031_29051 = state_29016__$1;
(statearr_29031_29051[(2)] = inst_29012);

(statearr_29031_29051[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (8))){
var inst_28993 = (state_29016[(7)]);
var inst_29003 = cljs.core.next(inst_28993);
var inst_28993__$1 = inst_29003;
var state_29016__$1 = (function (){var statearr_29032 = state_29016;
(statearr_29032[(7)] = inst_28993__$1);

return statearr_29032;
})();
var statearr_29033_29052 = state_29016__$1;
(statearr_29033_29052[(2)] = null);

(statearr_29033_29052[(1)] = (2));


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
});})(c__28456__auto__))
;
return ((function (switch__28349__auto__,c__28456__auto__){
return (function() {
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_29034 = [null,null,null,null,null,null,null,null];
(statearr_29034[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_29034[(1)] = (1));

return statearr_29034;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_29016){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_29016);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e29035){if((e29035 instanceof Object)){
var ex__28353__auto__ = e29035;
var statearr_29036_29053 = state_29016;
(statearr_29036_29053[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29016);

return cljs.core.cst$kw$recur;
} else {
throw e29035;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__29054 = state_29016;
state_29016 = G__29054;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_29016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_29016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto__))
})();
var state__28458__auto__ = (function (){var statearr_29037 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_29037[(6)] = c__28456__auto__);

return statearr_29037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto__))
);

return c__28456__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29055 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29055 = (function (ch,cs,meta29056){
this.ch = ch;
this.cs = cs;
this.meta29056 = meta29056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29057,meta29056__$1){
var self__ = this;
var _29057__$1 = this;
return (new cljs.core.async.t_cljs$core$async29055(self__.ch,self__.cs,meta29056__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29055.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29057){
var self__ = this;
var _29057__$1 = this;
return self__.meta29056;
});})(cs))
;

cljs.core.async.t_cljs$core$async29055.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29055.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29055.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29055.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29055.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29055.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29055.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta29056], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29055";

cljs.core.async.t_cljs$core$async29055.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29055");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29055.
 */
cljs.core.async.__GT_t_cljs$core$async29055 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29055(ch__$1,cs__$1,meta29056){
return (new cljs.core.async.t_cljs$core$async29055(ch__$1,cs__$1,meta29056));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29055(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28456__auto___29277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto___29277,cs,m,dchan,dctr,done){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto___29277,cs,m,dchan,dctr,done){
return (function (state_29192){
var state_val_29193 = (state_29192[(1)]);
if((state_val_29193 === (7))){
var inst_29188 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29194_29278 = state_29192__$1;
(statearr_29194_29278[(2)] = inst_29188);

(statearr_29194_29278[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (20))){
var inst_29091 = (state_29192[(7)]);
var inst_29103 = cljs.core.first(inst_29091);
var inst_29104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29103,(0),null);
var inst_29105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29103,(1),null);
var state_29192__$1 = (function (){var statearr_29195 = state_29192;
(statearr_29195[(8)] = inst_29104);

return statearr_29195;
})();
if(cljs.core.truth_(inst_29105)){
var statearr_29196_29279 = state_29192__$1;
(statearr_29196_29279[(1)] = (22));

} else {
var statearr_29197_29280 = state_29192__$1;
(statearr_29197_29280[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (27))){
var inst_29140 = (state_29192[(9)]);
var inst_29133 = (state_29192[(10)]);
var inst_29060 = (state_29192[(11)]);
var inst_29135 = (state_29192[(12)]);
var inst_29140__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29133,inst_29135);
var inst_29141 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29140__$1,inst_29060,done);
var state_29192__$1 = (function (){var statearr_29198 = state_29192;
(statearr_29198[(9)] = inst_29140__$1);

return statearr_29198;
})();
if(cljs.core.truth_(inst_29141)){
var statearr_29199_29281 = state_29192__$1;
(statearr_29199_29281[(1)] = (30));

} else {
var statearr_29200_29282 = state_29192__$1;
(statearr_29200_29282[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (1))){
var state_29192__$1 = state_29192;
var statearr_29201_29283 = state_29192__$1;
(statearr_29201_29283[(2)] = null);

(statearr_29201_29283[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (24))){
var inst_29091 = (state_29192[(7)]);
var inst_29110 = (state_29192[(2)]);
var inst_29111 = cljs.core.next(inst_29091);
var inst_29069 = inst_29111;
var inst_29070 = null;
var inst_29071 = (0);
var inst_29072 = (0);
var state_29192__$1 = (function (){var statearr_29202 = state_29192;
(statearr_29202[(13)] = inst_29110);

(statearr_29202[(14)] = inst_29070);

(statearr_29202[(15)] = inst_29069);

(statearr_29202[(16)] = inst_29071);

(statearr_29202[(17)] = inst_29072);

return statearr_29202;
})();
var statearr_29203_29284 = state_29192__$1;
(statearr_29203_29284[(2)] = null);

(statearr_29203_29284[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (39))){
var state_29192__$1 = state_29192;
var statearr_29207_29285 = state_29192__$1;
(statearr_29207_29285[(2)] = null);

(statearr_29207_29285[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (4))){
var inst_29060 = (state_29192[(11)]);
var inst_29060__$1 = (state_29192[(2)]);
var inst_29061 = (inst_29060__$1 == null);
var state_29192__$1 = (function (){var statearr_29208 = state_29192;
(statearr_29208[(11)] = inst_29060__$1);

return statearr_29208;
})();
if(cljs.core.truth_(inst_29061)){
var statearr_29209_29286 = state_29192__$1;
(statearr_29209_29286[(1)] = (5));

} else {
var statearr_29210_29287 = state_29192__$1;
(statearr_29210_29287[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (15))){
var inst_29070 = (state_29192[(14)]);
var inst_29069 = (state_29192[(15)]);
var inst_29071 = (state_29192[(16)]);
var inst_29072 = (state_29192[(17)]);
var inst_29087 = (state_29192[(2)]);
var inst_29088 = (inst_29072 + (1));
var tmp29204 = inst_29070;
var tmp29205 = inst_29069;
var tmp29206 = inst_29071;
var inst_29069__$1 = tmp29205;
var inst_29070__$1 = tmp29204;
var inst_29071__$1 = tmp29206;
var inst_29072__$1 = inst_29088;
var state_29192__$1 = (function (){var statearr_29211 = state_29192;
(statearr_29211[(18)] = inst_29087);

(statearr_29211[(14)] = inst_29070__$1);

(statearr_29211[(15)] = inst_29069__$1);

(statearr_29211[(16)] = inst_29071__$1);

(statearr_29211[(17)] = inst_29072__$1);

return statearr_29211;
})();
var statearr_29212_29288 = state_29192__$1;
(statearr_29212_29288[(2)] = null);

(statearr_29212_29288[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (21))){
var inst_29114 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29216_29289 = state_29192__$1;
(statearr_29216_29289[(2)] = inst_29114);

(statearr_29216_29289[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (31))){
var inst_29140 = (state_29192[(9)]);
var inst_29144 = done(null);
var inst_29145 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29140);
var state_29192__$1 = (function (){var statearr_29217 = state_29192;
(statearr_29217[(19)] = inst_29144);

return statearr_29217;
})();
var statearr_29218_29290 = state_29192__$1;
(statearr_29218_29290[(2)] = inst_29145);

(statearr_29218_29290[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (32))){
var inst_29132 = (state_29192[(20)]);
var inst_29133 = (state_29192[(10)]);
var inst_29134 = (state_29192[(21)]);
var inst_29135 = (state_29192[(12)]);
var inst_29147 = (state_29192[(2)]);
var inst_29148 = (inst_29135 + (1));
var tmp29213 = inst_29132;
var tmp29214 = inst_29133;
var tmp29215 = inst_29134;
var inst_29132__$1 = tmp29213;
var inst_29133__$1 = tmp29214;
var inst_29134__$1 = tmp29215;
var inst_29135__$1 = inst_29148;
var state_29192__$1 = (function (){var statearr_29219 = state_29192;
(statearr_29219[(22)] = inst_29147);

(statearr_29219[(20)] = inst_29132__$1);

(statearr_29219[(10)] = inst_29133__$1);

(statearr_29219[(21)] = inst_29134__$1);

(statearr_29219[(12)] = inst_29135__$1);

return statearr_29219;
})();
var statearr_29220_29291 = state_29192__$1;
(statearr_29220_29291[(2)] = null);

(statearr_29220_29291[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (40))){
var inst_29160 = (state_29192[(23)]);
var inst_29164 = done(null);
var inst_29165 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29160);
var state_29192__$1 = (function (){var statearr_29221 = state_29192;
(statearr_29221[(24)] = inst_29164);

return statearr_29221;
})();
var statearr_29222_29292 = state_29192__$1;
(statearr_29222_29292[(2)] = inst_29165);

(statearr_29222_29292[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (33))){
var inst_29151 = (state_29192[(25)]);
var inst_29153 = cljs.core.chunked_seq_QMARK_(inst_29151);
var state_29192__$1 = state_29192;
if(inst_29153){
var statearr_29223_29293 = state_29192__$1;
(statearr_29223_29293[(1)] = (36));

} else {
var statearr_29224_29294 = state_29192__$1;
(statearr_29224_29294[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (13))){
var inst_29081 = (state_29192[(26)]);
var inst_29084 = cljs.core.async.close_BANG_(inst_29081);
var state_29192__$1 = state_29192;
var statearr_29225_29295 = state_29192__$1;
(statearr_29225_29295[(2)] = inst_29084);

(statearr_29225_29295[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (22))){
var inst_29104 = (state_29192[(8)]);
var inst_29107 = cljs.core.async.close_BANG_(inst_29104);
var state_29192__$1 = state_29192;
var statearr_29226_29296 = state_29192__$1;
(statearr_29226_29296[(2)] = inst_29107);

(statearr_29226_29296[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (36))){
var inst_29151 = (state_29192[(25)]);
var inst_29155 = cljs.core.chunk_first(inst_29151);
var inst_29156 = cljs.core.chunk_rest(inst_29151);
var inst_29157 = cljs.core.count(inst_29155);
var inst_29132 = inst_29156;
var inst_29133 = inst_29155;
var inst_29134 = inst_29157;
var inst_29135 = (0);
var state_29192__$1 = (function (){var statearr_29227 = state_29192;
(statearr_29227[(20)] = inst_29132);

(statearr_29227[(10)] = inst_29133);

(statearr_29227[(21)] = inst_29134);

(statearr_29227[(12)] = inst_29135);

return statearr_29227;
})();
var statearr_29228_29297 = state_29192__$1;
(statearr_29228_29297[(2)] = null);

(statearr_29228_29297[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (41))){
var inst_29151 = (state_29192[(25)]);
var inst_29167 = (state_29192[(2)]);
var inst_29168 = cljs.core.next(inst_29151);
var inst_29132 = inst_29168;
var inst_29133 = null;
var inst_29134 = (0);
var inst_29135 = (0);
var state_29192__$1 = (function (){var statearr_29229 = state_29192;
(statearr_29229[(20)] = inst_29132);

(statearr_29229[(10)] = inst_29133);

(statearr_29229[(21)] = inst_29134);

(statearr_29229[(12)] = inst_29135);

(statearr_29229[(27)] = inst_29167);

return statearr_29229;
})();
var statearr_29230_29298 = state_29192__$1;
(statearr_29230_29298[(2)] = null);

(statearr_29230_29298[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (43))){
var state_29192__$1 = state_29192;
var statearr_29231_29299 = state_29192__$1;
(statearr_29231_29299[(2)] = null);

(statearr_29231_29299[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (29))){
var inst_29176 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29232_29300 = state_29192__$1;
(statearr_29232_29300[(2)] = inst_29176);

(statearr_29232_29300[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (44))){
var inst_29185 = (state_29192[(2)]);
var state_29192__$1 = (function (){var statearr_29233 = state_29192;
(statearr_29233[(28)] = inst_29185);

return statearr_29233;
})();
var statearr_29234_29301 = state_29192__$1;
(statearr_29234_29301[(2)] = null);

(statearr_29234_29301[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (6))){
var inst_29124 = (state_29192[(29)]);
var inst_29123 = cljs.core.deref(cs);
var inst_29124__$1 = cljs.core.keys(inst_29123);
var inst_29125 = cljs.core.count(inst_29124__$1);
var inst_29126 = cljs.core.reset_BANG_(dctr,inst_29125);
var inst_29131 = cljs.core.seq(inst_29124__$1);
var inst_29132 = inst_29131;
var inst_29133 = null;
var inst_29134 = (0);
var inst_29135 = (0);
var state_29192__$1 = (function (){var statearr_29235 = state_29192;
(statearr_29235[(20)] = inst_29132);

(statearr_29235[(10)] = inst_29133);

(statearr_29235[(21)] = inst_29134);

(statearr_29235[(30)] = inst_29126);

(statearr_29235[(12)] = inst_29135);

(statearr_29235[(29)] = inst_29124__$1);

return statearr_29235;
})();
var statearr_29236_29302 = state_29192__$1;
(statearr_29236_29302[(2)] = null);

(statearr_29236_29302[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (28))){
var inst_29132 = (state_29192[(20)]);
var inst_29151 = (state_29192[(25)]);
var inst_29151__$1 = cljs.core.seq(inst_29132);
var state_29192__$1 = (function (){var statearr_29237 = state_29192;
(statearr_29237[(25)] = inst_29151__$1);

return statearr_29237;
})();
if(inst_29151__$1){
var statearr_29238_29303 = state_29192__$1;
(statearr_29238_29303[(1)] = (33));

} else {
var statearr_29239_29304 = state_29192__$1;
(statearr_29239_29304[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (25))){
var inst_29134 = (state_29192[(21)]);
var inst_29135 = (state_29192[(12)]);
var inst_29137 = (inst_29135 < inst_29134);
var inst_29138 = inst_29137;
var state_29192__$1 = state_29192;
if(cljs.core.truth_(inst_29138)){
var statearr_29240_29305 = state_29192__$1;
(statearr_29240_29305[(1)] = (27));

} else {
var statearr_29241_29306 = state_29192__$1;
(statearr_29241_29306[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (34))){
var state_29192__$1 = state_29192;
var statearr_29242_29307 = state_29192__$1;
(statearr_29242_29307[(2)] = null);

(statearr_29242_29307[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (17))){
var state_29192__$1 = state_29192;
var statearr_29243_29308 = state_29192__$1;
(statearr_29243_29308[(2)] = null);

(statearr_29243_29308[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (3))){
var inst_29190 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29192__$1,inst_29190);
} else {
if((state_val_29193 === (12))){
var inst_29119 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29244_29309 = state_29192__$1;
(statearr_29244_29309[(2)] = inst_29119);

(statearr_29244_29309[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (2))){
var state_29192__$1 = state_29192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29192__$1,(4),ch);
} else {
if((state_val_29193 === (23))){
var state_29192__$1 = state_29192;
var statearr_29245_29310 = state_29192__$1;
(statearr_29245_29310[(2)] = null);

(statearr_29245_29310[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (35))){
var inst_29174 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29246_29311 = state_29192__$1;
(statearr_29246_29311[(2)] = inst_29174);

(statearr_29246_29311[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (19))){
var inst_29091 = (state_29192[(7)]);
var inst_29095 = cljs.core.chunk_first(inst_29091);
var inst_29096 = cljs.core.chunk_rest(inst_29091);
var inst_29097 = cljs.core.count(inst_29095);
var inst_29069 = inst_29096;
var inst_29070 = inst_29095;
var inst_29071 = inst_29097;
var inst_29072 = (0);
var state_29192__$1 = (function (){var statearr_29247 = state_29192;
(statearr_29247[(14)] = inst_29070);

(statearr_29247[(15)] = inst_29069);

(statearr_29247[(16)] = inst_29071);

(statearr_29247[(17)] = inst_29072);

return statearr_29247;
})();
var statearr_29248_29312 = state_29192__$1;
(statearr_29248_29312[(2)] = null);

(statearr_29248_29312[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (11))){
var inst_29091 = (state_29192[(7)]);
var inst_29069 = (state_29192[(15)]);
var inst_29091__$1 = cljs.core.seq(inst_29069);
var state_29192__$1 = (function (){var statearr_29249 = state_29192;
(statearr_29249[(7)] = inst_29091__$1);

return statearr_29249;
})();
if(inst_29091__$1){
var statearr_29250_29313 = state_29192__$1;
(statearr_29250_29313[(1)] = (16));

} else {
var statearr_29251_29314 = state_29192__$1;
(statearr_29251_29314[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (9))){
var inst_29121 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29252_29315 = state_29192__$1;
(statearr_29252_29315[(2)] = inst_29121);

(statearr_29252_29315[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (5))){
var inst_29067 = cljs.core.deref(cs);
var inst_29068 = cljs.core.seq(inst_29067);
var inst_29069 = inst_29068;
var inst_29070 = null;
var inst_29071 = (0);
var inst_29072 = (0);
var state_29192__$1 = (function (){var statearr_29253 = state_29192;
(statearr_29253[(14)] = inst_29070);

(statearr_29253[(15)] = inst_29069);

(statearr_29253[(16)] = inst_29071);

(statearr_29253[(17)] = inst_29072);

return statearr_29253;
})();
var statearr_29254_29316 = state_29192__$1;
(statearr_29254_29316[(2)] = null);

(statearr_29254_29316[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (14))){
var state_29192__$1 = state_29192;
var statearr_29255_29317 = state_29192__$1;
(statearr_29255_29317[(2)] = null);

(statearr_29255_29317[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (45))){
var inst_29182 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29256_29318 = state_29192__$1;
(statearr_29256_29318[(2)] = inst_29182);

(statearr_29256_29318[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (26))){
var inst_29124 = (state_29192[(29)]);
var inst_29178 = (state_29192[(2)]);
var inst_29179 = cljs.core.seq(inst_29124);
var state_29192__$1 = (function (){var statearr_29257 = state_29192;
(statearr_29257[(31)] = inst_29178);

return statearr_29257;
})();
if(inst_29179){
var statearr_29258_29319 = state_29192__$1;
(statearr_29258_29319[(1)] = (42));

} else {
var statearr_29259_29320 = state_29192__$1;
(statearr_29259_29320[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (16))){
var inst_29091 = (state_29192[(7)]);
var inst_29093 = cljs.core.chunked_seq_QMARK_(inst_29091);
var state_29192__$1 = state_29192;
if(inst_29093){
var statearr_29260_29321 = state_29192__$1;
(statearr_29260_29321[(1)] = (19));

} else {
var statearr_29261_29322 = state_29192__$1;
(statearr_29261_29322[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (38))){
var inst_29171 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29262_29323 = state_29192__$1;
(statearr_29262_29323[(2)] = inst_29171);

(statearr_29262_29323[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (30))){
var state_29192__$1 = state_29192;
var statearr_29263_29324 = state_29192__$1;
(statearr_29263_29324[(2)] = null);

(statearr_29263_29324[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (10))){
var inst_29070 = (state_29192[(14)]);
var inst_29072 = (state_29192[(17)]);
var inst_29080 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29070,inst_29072);
var inst_29081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29080,(0),null);
var inst_29082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29080,(1),null);
var state_29192__$1 = (function (){var statearr_29264 = state_29192;
(statearr_29264[(26)] = inst_29081);

return statearr_29264;
})();
if(cljs.core.truth_(inst_29082)){
var statearr_29265_29325 = state_29192__$1;
(statearr_29265_29325[(1)] = (13));

} else {
var statearr_29266_29326 = state_29192__$1;
(statearr_29266_29326[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (18))){
var inst_29117 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29267_29327 = state_29192__$1;
(statearr_29267_29327[(2)] = inst_29117);

(statearr_29267_29327[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (42))){
var state_29192__$1 = state_29192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29192__$1,(45),dchan);
} else {
if((state_val_29193 === (37))){
var inst_29060 = (state_29192[(11)]);
var inst_29151 = (state_29192[(25)]);
var inst_29160 = (state_29192[(23)]);
var inst_29160__$1 = cljs.core.first(inst_29151);
var inst_29161 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29160__$1,inst_29060,done);
var state_29192__$1 = (function (){var statearr_29268 = state_29192;
(statearr_29268[(23)] = inst_29160__$1);

return statearr_29268;
})();
if(cljs.core.truth_(inst_29161)){
var statearr_29269_29328 = state_29192__$1;
(statearr_29269_29328[(1)] = (39));

} else {
var statearr_29270_29329 = state_29192__$1;
(statearr_29270_29329[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29193 === (8))){
var inst_29071 = (state_29192[(16)]);
var inst_29072 = (state_29192[(17)]);
var inst_29074 = (inst_29072 < inst_29071);
var inst_29075 = inst_29074;
var state_29192__$1 = state_29192;
if(cljs.core.truth_(inst_29075)){
var statearr_29271_29330 = state_29192__$1;
(statearr_29271_29330[(1)] = (10));

} else {
var statearr_29272_29331 = state_29192__$1;
(statearr_29272_29331[(1)] = (11));

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
});})(c__28456__auto___29277,cs,m,dchan,dctr,done))
;
return ((function (switch__28349__auto__,c__28456__auto___29277,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28350__auto__ = null;
var cljs$core$async$mult_$_state_machine__28350__auto____0 = (function (){
var statearr_29273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29273[(0)] = cljs$core$async$mult_$_state_machine__28350__auto__);

(statearr_29273[(1)] = (1));

return statearr_29273;
});
var cljs$core$async$mult_$_state_machine__28350__auto____1 = (function (state_29192){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_29192);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e29274){if((e29274 instanceof Object)){
var ex__28353__auto__ = e29274;
var statearr_29275_29332 = state_29192;
(statearr_29275_29332[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29192);

return cljs.core.cst$kw$recur;
} else {
throw e29274;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__29333 = state_29192;
state_29192 = G__29333;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28350__auto__ = function(state_29192){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28350__auto____1.call(this,state_29192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28350__auto____0;
cljs$core$async$mult_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28350__auto____1;
return cljs$core$async$mult_$_state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto___29277,cs,m,dchan,dctr,done))
})();
var state__28458__auto__ = (function (){var statearr_29276 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_29276[(6)] = c__28456__auto___29277);

return statearr_29276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto___29277,cs,m,dchan,dctr,done))
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
var G__29335 = arguments.length;
switch (G__29335) {
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
var len__4730__auto___29347 = arguments.length;
var i__4731__auto___29348 = (0);
while(true){
if((i__4731__auto___29348 < len__4730__auto___29347)){
args__4736__auto__.push((arguments[i__4731__auto___29348]));

var G__29349 = (i__4731__auto___29348 + (1));
i__4731__auto___29348 = G__29349;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29341){
var map__29342 = p__29341;
var map__29342__$1 = (((((!((map__29342 == null))))?(((((map__29342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29342):map__29342);
var opts = map__29342__$1;
var statearr_29344_29350 = state;
(statearr_29344_29350[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__29342,map__29342__$1,opts){
return (function (val){
var statearr_29345_29351 = state;
(statearr_29345_29351[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__29342,map__29342__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_29346_29352 = state;
(statearr_29346_29352[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29337){
var G__29338 = cljs.core.first(seq29337);
var seq29337__$1 = cljs.core.next(seq29337);
var G__29339 = cljs.core.first(seq29337__$1);
var seq29337__$2 = cljs.core.next(seq29337__$1);
var G__29340 = cljs.core.first(seq29337__$2);
var seq29337__$3 = cljs.core.next(seq29337__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29338,G__29339,G__29340,seq29337__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29353 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29354){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29354 = meta29354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29355,meta29354__$1){
var self__ = this;
var _29355__$1 = this;
return (new cljs.core.async.t_cljs$core$async29353(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29354__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29355){
var self__ = this;
var _29355__$1 = this;
return self__.meta29354;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29353.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta29354], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29353";

cljs.core.async.t_cljs$core$async29353.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29353");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29353.
 */
cljs.core.async.__GT_t_cljs$core$async29353 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29353(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29354){
return (new cljs.core.async.t_cljs$core$async29353(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29354));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29353(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28456__auto___29517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto___29517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto___29517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29457){
var state_val_29458 = (state_29457[(1)]);
if((state_val_29458 === (7))){
var inst_29372 = (state_29457[(2)]);
var state_29457__$1 = state_29457;
var statearr_29459_29518 = state_29457__$1;
(statearr_29459_29518[(2)] = inst_29372);

(statearr_29459_29518[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (20))){
var inst_29384 = (state_29457[(7)]);
var state_29457__$1 = state_29457;
var statearr_29460_29519 = state_29457__$1;
(statearr_29460_29519[(2)] = inst_29384);

(statearr_29460_29519[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (27))){
var state_29457__$1 = state_29457;
var statearr_29461_29520 = state_29457__$1;
(statearr_29461_29520[(2)] = null);

(statearr_29461_29520[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (1))){
var inst_29359 = (state_29457[(8)]);
var inst_29359__$1 = calc_state();
var inst_29361 = (inst_29359__$1 == null);
var inst_29362 = cljs.core.not(inst_29361);
var state_29457__$1 = (function (){var statearr_29462 = state_29457;
(statearr_29462[(8)] = inst_29359__$1);

return statearr_29462;
})();
if(inst_29362){
var statearr_29463_29521 = state_29457__$1;
(statearr_29463_29521[(1)] = (2));

} else {
var statearr_29464_29522 = state_29457__$1;
(statearr_29464_29522[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (24))){
var inst_29408 = (state_29457[(9)]);
var inst_29431 = (state_29457[(10)]);
var inst_29417 = (state_29457[(11)]);
var inst_29431__$1 = (inst_29408.cljs$core$IFn$_invoke$arity$1 ? inst_29408.cljs$core$IFn$_invoke$arity$1(inst_29417) : inst_29408.call(null,inst_29417));
var state_29457__$1 = (function (){var statearr_29465 = state_29457;
(statearr_29465[(10)] = inst_29431__$1);

return statearr_29465;
})();
if(cljs.core.truth_(inst_29431__$1)){
var statearr_29466_29523 = state_29457__$1;
(statearr_29466_29523[(1)] = (29));

} else {
var statearr_29467_29524 = state_29457__$1;
(statearr_29467_29524[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (4))){
var inst_29375 = (state_29457[(2)]);
var state_29457__$1 = state_29457;
if(cljs.core.truth_(inst_29375)){
var statearr_29468_29525 = state_29457__$1;
(statearr_29468_29525[(1)] = (8));

} else {
var statearr_29469_29526 = state_29457__$1;
(statearr_29469_29526[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (15))){
var inst_29402 = (state_29457[(2)]);
var state_29457__$1 = state_29457;
if(cljs.core.truth_(inst_29402)){
var statearr_29470_29527 = state_29457__$1;
(statearr_29470_29527[(1)] = (19));

} else {
var statearr_29471_29528 = state_29457__$1;
(statearr_29471_29528[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (21))){
var inst_29407 = (state_29457[(12)]);
var inst_29407__$1 = (state_29457[(2)]);
var inst_29408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29407__$1,cljs.core.cst$kw$solos);
var inst_29409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29407__$1,cljs.core.cst$kw$mutes);
var inst_29410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29407__$1,cljs.core.cst$kw$reads);
var state_29457__$1 = (function (){var statearr_29472 = state_29457;
(statearr_29472[(12)] = inst_29407__$1);

(statearr_29472[(9)] = inst_29408);

(statearr_29472[(13)] = inst_29409);

return statearr_29472;
})();
return cljs.core.async.ioc_alts_BANG_(state_29457__$1,(22),inst_29410);
} else {
if((state_val_29458 === (31))){
var inst_29439 = (state_29457[(2)]);
var state_29457__$1 = state_29457;
if(cljs.core.truth_(inst_29439)){
var statearr_29473_29529 = state_29457__$1;
(statearr_29473_29529[(1)] = (32));

} else {
var statearr_29474_29530 = state_29457__$1;
(statearr_29474_29530[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (32))){
var inst_29416 = (state_29457[(14)]);
var state_29457__$1 = state_29457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29457__$1,(35),out,inst_29416);
} else {
if((state_val_29458 === (33))){
var inst_29407 = (state_29457[(12)]);
var inst_29384 = inst_29407;
var state_29457__$1 = (function (){var statearr_29475 = state_29457;
(statearr_29475[(7)] = inst_29384);

return statearr_29475;
})();
var statearr_29476_29531 = state_29457__$1;
(statearr_29476_29531[(2)] = null);

(statearr_29476_29531[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (13))){
var inst_29384 = (state_29457[(7)]);
var inst_29391 = inst_29384.cljs$lang$protocol_mask$partition0$;
var inst_29392 = (inst_29391 & (64));
var inst_29393 = inst_29384.cljs$core$ISeq$;
var inst_29394 = (cljs.core.PROTOCOL_SENTINEL === inst_29393);
var inst_29395 = ((inst_29392) || (inst_29394));
var state_29457__$1 = state_29457;
if(cljs.core.truth_(inst_29395)){
var statearr_29477_29532 = state_29457__$1;
(statearr_29477_29532[(1)] = (16));

} else {
var statearr_29478_29533 = state_29457__$1;
(statearr_29478_29533[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (22))){
var inst_29417 = (state_29457[(11)]);
var inst_29416 = (state_29457[(14)]);
var inst_29415 = (state_29457[(2)]);
var inst_29416__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29415,(0),null);
var inst_29417__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29415,(1),null);
var inst_29418 = (inst_29416__$1 == null);
var inst_29419 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29417__$1,change);
var inst_29420 = ((inst_29418) || (inst_29419));
var state_29457__$1 = (function (){var statearr_29479 = state_29457;
(statearr_29479[(11)] = inst_29417__$1);

(statearr_29479[(14)] = inst_29416__$1);

return statearr_29479;
})();
if(cljs.core.truth_(inst_29420)){
var statearr_29480_29534 = state_29457__$1;
(statearr_29480_29534[(1)] = (23));

} else {
var statearr_29481_29535 = state_29457__$1;
(statearr_29481_29535[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (36))){
var inst_29407 = (state_29457[(12)]);
var inst_29384 = inst_29407;
var state_29457__$1 = (function (){var statearr_29482 = state_29457;
(statearr_29482[(7)] = inst_29384);

return statearr_29482;
})();
var statearr_29483_29536 = state_29457__$1;
(statearr_29483_29536[(2)] = null);

(statearr_29483_29536[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (29))){
var inst_29431 = (state_29457[(10)]);
var state_29457__$1 = state_29457;
var statearr_29484_29537 = state_29457__$1;
(statearr_29484_29537[(2)] = inst_29431);

(statearr_29484_29537[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (6))){
var state_29457__$1 = state_29457;
var statearr_29485_29538 = state_29457__$1;
(statearr_29485_29538[(2)] = false);

(statearr_29485_29538[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (28))){
var inst_29427 = (state_29457[(2)]);
var inst_29428 = calc_state();
var inst_29384 = inst_29428;
var state_29457__$1 = (function (){var statearr_29486 = state_29457;
(statearr_29486[(15)] = inst_29427);

(statearr_29486[(7)] = inst_29384);

return statearr_29486;
})();
var statearr_29487_29539 = state_29457__$1;
(statearr_29487_29539[(2)] = null);

(statearr_29487_29539[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (25))){
var inst_29453 = (state_29457[(2)]);
var state_29457__$1 = state_29457;
var statearr_29488_29540 = state_29457__$1;
(statearr_29488_29540[(2)] = inst_29453);

(statearr_29488_29540[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (34))){
var inst_29451 = (state_29457[(2)]);
var state_29457__$1 = state_29457;
var statearr_29489_29541 = state_29457__$1;
(statearr_29489_29541[(2)] = inst_29451);

(statearr_29489_29541[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (17))){
var state_29457__$1 = state_29457;
var statearr_29490_29542 = state_29457__$1;
(statearr_29490_29542[(2)] = false);

(statearr_29490_29542[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (3))){
var state_29457__$1 = state_29457;
var statearr_29491_29543 = state_29457__$1;
(statearr_29491_29543[(2)] = false);

(statearr_29491_29543[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (12))){
var inst_29455 = (state_29457[(2)]);
var state_29457__$1 = state_29457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29457__$1,inst_29455);
} else {
if((state_val_29458 === (2))){
var inst_29359 = (state_29457[(8)]);
var inst_29364 = inst_29359.cljs$lang$protocol_mask$partition0$;
var inst_29365 = (inst_29364 & (64));
var inst_29366 = inst_29359.cljs$core$ISeq$;
var inst_29367 = (cljs.core.PROTOCOL_SENTINEL === inst_29366);
var inst_29368 = ((inst_29365) || (inst_29367));
var state_29457__$1 = state_29457;
if(cljs.core.truth_(inst_29368)){
var statearr_29492_29544 = state_29457__$1;
(statearr_29492_29544[(1)] = (5));

} else {
var statearr_29493_29545 = state_29457__$1;
(statearr_29493_29545[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (23))){
var inst_29416 = (state_29457[(14)]);
var inst_29422 = (inst_29416 == null);
var state_29457__$1 = state_29457;
if(cljs.core.truth_(inst_29422)){
var statearr_29494_29546 = state_29457__$1;
(statearr_29494_29546[(1)] = (26));

} else {
var statearr_29495_29547 = state_29457__$1;
(statearr_29495_29547[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (35))){
var inst_29442 = (state_29457[(2)]);
var state_29457__$1 = state_29457;
if(cljs.core.truth_(inst_29442)){
var statearr_29496_29548 = state_29457__$1;
(statearr_29496_29548[(1)] = (36));

} else {
var statearr_29497_29549 = state_29457__$1;
(statearr_29497_29549[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (19))){
var inst_29384 = (state_29457[(7)]);
var inst_29404 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29384);
var state_29457__$1 = state_29457;
var statearr_29498_29550 = state_29457__$1;
(statearr_29498_29550[(2)] = inst_29404);

(statearr_29498_29550[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (11))){
var inst_29384 = (state_29457[(7)]);
var inst_29388 = (inst_29384 == null);
var inst_29389 = cljs.core.not(inst_29388);
var state_29457__$1 = state_29457;
if(inst_29389){
var statearr_29499_29551 = state_29457__$1;
(statearr_29499_29551[(1)] = (13));

} else {
var statearr_29500_29552 = state_29457__$1;
(statearr_29500_29552[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (9))){
var inst_29359 = (state_29457[(8)]);
var state_29457__$1 = state_29457;
var statearr_29501_29553 = state_29457__$1;
(statearr_29501_29553[(2)] = inst_29359);

(statearr_29501_29553[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (5))){
var state_29457__$1 = state_29457;
var statearr_29502_29554 = state_29457__$1;
(statearr_29502_29554[(2)] = true);

(statearr_29502_29554[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (14))){
var state_29457__$1 = state_29457;
var statearr_29503_29555 = state_29457__$1;
(statearr_29503_29555[(2)] = false);

(statearr_29503_29555[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (26))){
var inst_29417 = (state_29457[(11)]);
var inst_29424 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29417);
var state_29457__$1 = state_29457;
var statearr_29504_29556 = state_29457__$1;
(statearr_29504_29556[(2)] = inst_29424);

(statearr_29504_29556[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (16))){
var state_29457__$1 = state_29457;
var statearr_29505_29557 = state_29457__$1;
(statearr_29505_29557[(2)] = true);

(statearr_29505_29557[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (38))){
var inst_29447 = (state_29457[(2)]);
var state_29457__$1 = state_29457;
var statearr_29506_29558 = state_29457__$1;
(statearr_29506_29558[(2)] = inst_29447);

(statearr_29506_29558[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (30))){
var inst_29408 = (state_29457[(9)]);
var inst_29417 = (state_29457[(11)]);
var inst_29409 = (state_29457[(13)]);
var inst_29434 = cljs.core.empty_QMARK_(inst_29408);
var inst_29435 = (inst_29409.cljs$core$IFn$_invoke$arity$1 ? inst_29409.cljs$core$IFn$_invoke$arity$1(inst_29417) : inst_29409.call(null,inst_29417));
var inst_29436 = cljs.core.not(inst_29435);
var inst_29437 = ((inst_29434) && (inst_29436));
var state_29457__$1 = state_29457;
var statearr_29507_29559 = state_29457__$1;
(statearr_29507_29559[(2)] = inst_29437);

(statearr_29507_29559[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (10))){
var inst_29359 = (state_29457[(8)]);
var inst_29380 = (state_29457[(2)]);
var inst_29381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29380,cljs.core.cst$kw$solos);
var inst_29382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29380,cljs.core.cst$kw$mutes);
var inst_29383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29380,cljs.core.cst$kw$reads);
var inst_29384 = inst_29359;
var state_29457__$1 = (function (){var statearr_29508 = state_29457;
(statearr_29508[(16)] = inst_29381);

(statearr_29508[(17)] = inst_29383);

(statearr_29508[(18)] = inst_29382);

(statearr_29508[(7)] = inst_29384);

return statearr_29508;
})();
var statearr_29509_29560 = state_29457__$1;
(statearr_29509_29560[(2)] = null);

(statearr_29509_29560[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (18))){
var inst_29399 = (state_29457[(2)]);
var state_29457__$1 = state_29457;
var statearr_29510_29561 = state_29457__$1;
(statearr_29510_29561[(2)] = inst_29399);

(statearr_29510_29561[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (37))){
var state_29457__$1 = state_29457;
var statearr_29511_29562 = state_29457__$1;
(statearr_29511_29562[(2)] = null);

(statearr_29511_29562[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29458 === (8))){
var inst_29359 = (state_29457[(8)]);
var inst_29377 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29359);
var state_29457__$1 = state_29457;
var statearr_29512_29563 = state_29457__$1;
(statearr_29512_29563[(2)] = inst_29377);

(statearr_29512_29563[(1)] = (10));


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
});})(c__28456__auto___29517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28349__auto__,c__28456__auto___29517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28350__auto__ = null;
var cljs$core$async$mix_$_state_machine__28350__auto____0 = (function (){
var statearr_29513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29513[(0)] = cljs$core$async$mix_$_state_machine__28350__auto__);

(statearr_29513[(1)] = (1));

return statearr_29513;
});
var cljs$core$async$mix_$_state_machine__28350__auto____1 = (function (state_29457){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_29457);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e29514){if((e29514 instanceof Object)){
var ex__28353__auto__ = e29514;
var statearr_29515_29564 = state_29457;
(statearr_29515_29564[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29457);

return cljs.core.cst$kw$recur;
} else {
throw e29514;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__29565 = state_29457;
state_29457 = G__29565;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28350__auto__ = function(state_29457){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28350__auto____1.call(this,state_29457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28350__auto____0;
cljs$core$async$mix_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28350__auto____1;
return cljs$core$async$mix_$_state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto___29517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28458__auto__ = (function (){var statearr_29516 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_29516[(6)] = c__28456__auto___29517);

return statearr_29516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto___29517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__29567 = arguments.length;
switch (G__29567) {
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
var G__29571 = arguments.length;
switch (G__29571) {
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
return (function (p1__29569_SHARP_){
if(cljs.core.truth_((p1__29569_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29569_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__29569_SHARP_.call(null,topic)))){
return p1__29569_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29569_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29572 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29573){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29573 = meta29573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29574,meta29573__$1){
var self__ = this;
var _29574__$1 = this;
return (new cljs.core.async.t_cljs$core$async29572(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29573__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29574){
var self__ = this;
var _29574__$1 = this;
return self__.meta29573;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29572.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta29573], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29572";

cljs.core.async.t_cljs$core$async29572.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29572");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29572.
 */
cljs.core.async.__GT_t_cljs$core$async29572 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29572(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29573){
return (new cljs.core.async.t_cljs$core$async29572(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29573));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29572(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28456__auto___29692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto___29692,mults,ensure_mult,p){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto___29692,mults,ensure_mult,p){
return (function (state_29646){
var state_val_29647 = (state_29646[(1)]);
if((state_val_29647 === (7))){
var inst_29642 = (state_29646[(2)]);
var state_29646__$1 = state_29646;
var statearr_29648_29693 = state_29646__$1;
(statearr_29648_29693[(2)] = inst_29642);

(statearr_29648_29693[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (20))){
var state_29646__$1 = state_29646;
var statearr_29649_29694 = state_29646__$1;
(statearr_29649_29694[(2)] = null);

(statearr_29649_29694[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (1))){
var state_29646__$1 = state_29646;
var statearr_29650_29695 = state_29646__$1;
(statearr_29650_29695[(2)] = null);

(statearr_29650_29695[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (24))){
var inst_29625 = (state_29646[(7)]);
var inst_29634 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_29625);
var state_29646__$1 = state_29646;
var statearr_29651_29696 = state_29646__$1;
(statearr_29651_29696[(2)] = inst_29634);

(statearr_29651_29696[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (4))){
var inst_29577 = (state_29646[(8)]);
var inst_29577__$1 = (state_29646[(2)]);
var inst_29578 = (inst_29577__$1 == null);
var state_29646__$1 = (function (){var statearr_29652 = state_29646;
(statearr_29652[(8)] = inst_29577__$1);

return statearr_29652;
})();
if(cljs.core.truth_(inst_29578)){
var statearr_29653_29697 = state_29646__$1;
(statearr_29653_29697[(1)] = (5));

} else {
var statearr_29654_29698 = state_29646__$1;
(statearr_29654_29698[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (15))){
var inst_29619 = (state_29646[(2)]);
var state_29646__$1 = state_29646;
var statearr_29655_29699 = state_29646__$1;
(statearr_29655_29699[(2)] = inst_29619);

(statearr_29655_29699[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (21))){
var inst_29639 = (state_29646[(2)]);
var state_29646__$1 = (function (){var statearr_29656 = state_29646;
(statearr_29656[(9)] = inst_29639);

return statearr_29656;
})();
var statearr_29657_29700 = state_29646__$1;
(statearr_29657_29700[(2)] = null);

(statearr_29657_29700[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (13))){
var inst_29601 = (state_29646[(10)]);
var inst_29603 = cljs.core.chunked_seq_QMARK_(inst_29601);
var state_29646__$1 = state_29646;
if(inst_29603){
var statearr_29658_29701 = state_29646__$1;
(statearr_29658_29701[(1)] = (16));

} else {
var statearr_29659_29702 = state_29646__$1;
(statearr_29659_29702[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (22))){
var inst_29631 = (state_29646[(2)]);
var state_29646__$1 = state_29646;
if(cljs.core.truth_(inst_29631)){
var statearr_29660_29703 = state_29646__$1;
(statearr_29660_29703[(1)] = (23));

} else {
var statearr_29661_29704 = state_29646__$1;
(statearr_29661_29704[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (6))){
var inst_29627 = (state_29646[(11)]);
var inst_29577 = (state_29646[(8)]);
var inst_29625 = (state_29646[(7)]);
var inst_29625__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_29577) : topic_fn.call(null,inst_29577));
var inst_29626 = cljs.core.deref(mults);
var inst_29627__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29626,inst_29625__$1);
var state_29646__$1 = (function (){var statearr_29662 = state_29646;
(statearr_29662[(11)] = inst_29627__$1);

(statearr_29662[(7)] = inst_29625__$1);

return statearr_29662;
})();
if(cljs.core.truth_(inst_29627__$1)){
var statearr_29663_29705 = state_29646__$1;
(statearr_29663_29705[(1)] = (19));

} else {
var statearr_29664_29706 = state_29646__$1;
(statearr_29664_29706[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (25))){
var inst_29636 = (state_29646[(2)]);
var state_29646__$1 = state_29646;
var statearr_29665_29707 = state_29646__$1;
(statearr_29665_29707[(2)] = inst_29636);

(statearr_29665_29707[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (17))){
var inst_29601 = (state_29646[(10)]);
var inst_29610 = cljs.core.first(inst_29601);
var inst_29611 = cljs.core.async.muxch_STAR_(inst_29610);
var inst_29612 = cljs.core.async.close_BANG_(inst_29611);
var inst_29613 = cljs.core.next(inst_29601);
var inst_29587 = inst_29613;
var inst_29588 = null;
var inst_29589 = (0);
var inst_29590 = (0);
var state_29646__$1 = (function (){var statearr_29666 = state_29646;
(statearr_29666[(12)] = inst_29590);

(statearr_29666[(13)] = inst_29612);

(statearr_29666[(14)] = inst_29587);

(statearr_29666[(15)] = inst_29589);

(statearr_29666[(16)] = inst_29588);

return statearr_29666;
})();
var statearr_29667_29708 = state_29646__$1;
(statearr_29667_29708[(2)] = null);

(statearr_29667_29708[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (3))){
var inst_29644 = (state_29646[(2)]);
var state_29646__$1 = state_29646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29646__$1,inst_29644);
} else {
if((state_val_29647 === (12))){
var inst_29621 = (state_29646[(2)]);
var state_29646__$1 = state_29646;
var statearr_29668_29709 = state_29646__$1;
(statearr_29668_29709[(2)] = inst_29621);

(statearr_29668_29709[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (2))){
var state_29646__$1 = state_29646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29646__$1,(4),ch);
} else {
if((state_val_29647 === (23))){
var state_29646__$1 = state_29646;
var statearr_29669_29710 = state_29646__$1;
(statearr_29669_29710[(2)] = null);

(statearr_29669_29710[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (19))){
var inst_29627 = (state_29646[(11)]);
var inst_29577 = (state_29646[(8)]);
var inst_29629 = cljs.core.async.muxch_STAR_(inst_29627);
var state_29646__$1 = state_29646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29646__$1,(22),inst_29629,inst_29577);
} else {
if((state_val_29647 === (11))){
var inst_29587 = (state_29646[(14)]);
var inst_29601 = (state_29646[(10)]);
var inst_29601__$1 = cljs.core.seq(inst_29587);
var state_29646__$1 = (function (){var statearr_29670 = state_29646;
(statearr_29670[(10)] = inst_29601__$1);

return statearr_29670;
})();
if(inst_29601__$1){
var statearr_29671_29711 = state_29646__$1;
(statearr_29671_29711[(1)] = (13));

} else {
var statearr_29672_29712 = state_29646__$1;
(statearr_29672_29712[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (9))){
var inst_29623 = (state_29646[(2)]);
var state_29646__$1 = state_29646;
var statearr_29673_29713 = state_29646__$1;
(statearr_29673_29713[(2)] = inst_29623);

(statearr_29673_29713[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (5))){
var inst_29584 = cljs.core.deref(mults);
var inst_29585 = cljs.core.vals(inst_29584);
var inst_29586 = cljs.core.seq(inst_29585);
var inst_29587 = inst_29586;
var inst_29588 = null;
var inst_29589 = (0);
var inst_29590 = (0);
var state_29646__$1 = (function (){var statearr_29674 = state_29646;
(statearr_29674[(12)] = inst_29590);

(statearr_29674[(14)] = inst_29587);

(statearr_29674[(15)] = inst_29589);

(statearr_29674[(16)] = inst_29588);

return statearr_29674;
})();
var statearr_29675_29714 = state_29646__$1;
(statearr_29675_29714[(2)] = null);

(statearr_29675_29714[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (14))){
var state_29646__$1 = state_29646;
var statearr_29679_29715 = state_29646__$1;
(statearr_29679_29715[(2)] = null);

(statearr_29679_29715[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (16))){
var inst_29601 = (state_29646[(10)]);
var inst_29605 = cljs.core.chunk_first(inst_29601);
var inst_29606 = cljs.core.chunk_rest(inst_29601);
var inst_29607 = cljs.core.count(inst_29605);
var inst_29587 = inst_29606;
var inst_29588 = inst_29605;
var inst_29589 = inst_29607;
var inst_29590 = (0);
var state_29646__$1 = (function (){var statearr_29680 = state_29646;
(statearr_29680[(12)] = inst_29590);

(statearr_29680[(14)] = inst_29587);

(statearr_29680[(15)] = inst_29589);

(statearr_29680[(16)] = inst_29588);

return statearr_29680;
})();
var statearr_29681_29716 = state_29646__$1;
(statearr_29681_29716[(2)] = null);

(statearr_29681_29716[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (10))){
var inst_29590 = (state_29646[(12)]);
var inst_29587 = (state_29646[(14)]);
var inst_29589 = (state_29646[(15)]);
var inst_29588 = (state_29646[(16)]);
var inst_29595 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29588,inst_29590);
var inst_29596 = cljs.core.async.muxch_STAR_(inst_29595);
var inst_29597 = cljs.core.async.close_BANG_(inst_29596);
var inst_29598 = (inst_29590 + (1));
var tmp29676 = inst_29587;
var tmp29677 = inst_29589;
var tmp29678 = inst_29588;
var inst_29587__$1 = tmp29676;
var inst_29588__$1 = tmp29678;
var inst_29589__$1 = tmp29677;
var inst_29590__$1 = inst_29598;
var state_29646__$1 = (function (){var statearr_29682 = state_29646;
(statearr_29682[(12)] = inst_29590__$1);

(statearr_29682[(14)] = inst_29587__$1);

(statearr_29682[(15)] = inst_29589__$1);

(statearr_29682[(17)] = inst_29597);

(statearr_29682[(16)] = inst_29588__$1);

return statearr_29682;
})();
var statearr_29683_29717 = state_29646__$1;
(statearr_29683_29717[(2)] = null);

(statearr_29683_29717[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (18))){
var inst_29616 = (state_29646[(2)]);
var state_29646__$1 = state_29646;
var statearr_29684_29718 = state_29646__$1;
(statearr_29684_29718[(2)] = inst_29616);

(statearr_29684_29718[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29647 === (8))){
var inst_29590 = (state_29646[(12)]);
var inst_29589 = (state_29646[(15)]);
var inst_29592 = (inst_29590 < inst_29589);
var inst_29593 = inst_29592;
var state_29646__$1 = state_29646;
if(cljs.core.truth_(inst_29593)){
var statearr_29685_29719 = state_29646__$1;
(statearr_29685_29719[(1)] = (10));

} else {
var statearr_29686_29720 = state_29646__$1;
(statearr_29686_29720[(1)] = (11));

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
});})(c__28456__auto___29692,mults,ensure_mult,p))
;
return ((function (switch__28349__auto__,c__28456__auto___29692,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_29687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29687[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_29687[(1)] = (1));

return statearr_29687;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_29646){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_29646);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e29688){if((e29688 instanceof Object)){
var ex__28353__auto__ = e29688;
var statearr_29689_29721 = state_29646;
(statearr_29689_29721[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29646);

return cljs.core.cst$kw$recur;
} else {
throw e29688;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__29722 = state_29646;
state_29646 = G__29722;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_29646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_29646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto___29692,mults,ensure_mult,p))
})();
var state__28458__auto__ = (function (){var statearr_29690 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_29690[(6)] = c__28456__auto___29692);

return statearr_29690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto___29692,mults,ensure_mult,p))
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
var G__29724 = arguments.length;
switch (G__29724) {
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
var G__29727 = arguments.length;
switch (G__29727) {
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
var G__29730 = arguments.length;
switch (G__29730) {
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
var c__28456__auto___29797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto___29797,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto___29797,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29769){
var state_val_29770 = (state_29769[(1)]);
if((state_val_29770 === (7))){
var state_29769__$1 = state_29769;
var statearr_29771_29798 = state_29769__$1;
(statearr_29771_29798[(2)] = null);

(statearr_29771_29798[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29770 === (1))){
var state_29769__$1 = state_29769;
var statearr_29772_29799 = state_29769__$1;
(statearr_29772_29799[(2)] = null);

(statearr_29772_29799[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29770 === (4))){
var inst_29733 = (state_29769[(7)]);
var inst_29735 = (inst_29733 < cnt);
var state_29769__$1 = state_29769;
if(cljs.core.truth_(inst_29735)){
var statearr_29773_29800 = state_29769__$1;
(statearr_29773_29800[(1)] = (6));

} else {
var statearr_29774_29801 = state_29769__$1;
(statearr_29774_29801[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29770 === (15))){
var inst_29765 = (state_29769[(2)]);
var state_29769__$1 = state_29769;
var statearr_29775_29802 = state_29769__$1;
(statearr_29775_29802[(2)] = inst_29765);

(statearr_29775_29802[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29770 === (13))){
var inst_29758 = cljs.core.async.close_BANG_(out);
var state_29769__$1 = state_29769;
var statearr_29776_29803 = state_29769__$1;
(statearr_29776_29803[(2)] = inst_29758);

(statearr_29776_29803[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29770 === (6))){
var state_29769__$1 = state_29769;
var statearr_29777_29804 = state_29769__$1;
(statearr_29777_29804[(2)] = null);

(statearr_29777_29804[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29770 === (3))){
var inst_29767 = (state_29769[(2)]);
var state_29769__$1 = state_29769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29769__$1,inst_29767);
} else {
if((state_val_29770 === (12))){
var inst_29755 = (state_29769[(8)]);
var inst_29755__$1 = (state_29769[(2)]);
var inst_29756 = cljs.core.some(cljs.core.nil_QMARK_,inst_29755__$1);
var state_29769__$1 = (function (){var statearr_29778 = state_29769;
(statearr_29778[(8)] = inst_29755__$1);

return statearr_29778;
})();
if(cljs.core.truth_(inst_29756)){
var statearr_29779_29805 = state_29769__$1;
(statearr_29779_29805[(1)] = (13));

} else {
var statearr_29780_29806 = state_29769__$1;
(statearr_29780_29806[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29770 === (2))){
var inst_29732 = cljs.core.reset_BANG_(dctr,cnt);
var inst_29733 = (0);
var state_29769__$1 = (function (){var statearr_29781 = state_29769;
(statearr_29781[(9)] = inst_29732);

(statearr_29781[(7)] = inst_29733);

return statearr_29781;
})();
var statearr_29782_29807 = state_29769__$1;
(statearr_29782_29807[(2)] = null);

(statearr_29782_29807[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29770 === (11))){
var inst_29733 = (state_29769[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_29769,(10),Object,null,(9));
var inst_29742 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_29733) : chs__$1.call(null,inst_29733));
var inst_29743 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_29733) : done.call(null,inst_29733));
var inst_29744 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_29742,inst_29743);
var state_29769__$1 = state_29769;
var statearr_29783_29808 = state_29769__$1;
(statearr_29783_29808[(2)] = inst_29744);


cljs.core.async.impl.ioc_helpers.process_exception(state_29769__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_29770 === (9))){
var inst_29733 = (state_29769[(7)]);
var inst_29746 = (state_29769[(2)]);
var inst_29747 = (inst_29733 + (1));
var inst_29733__$1 = inst_29747;
var state_29769__$1 = (function (){var statearr_29784 = state_29769;
(statearr_29784[(10)] = inst_29746);

(statearr_29784[(7)] = inst_29733__$1);

return statearr_29784;
})();
var statearr_29785_29809 = state_29769__$1;
(statearr_29785_29809[(2)] = null);

(statearr_29785_29809[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29770 === (5))){
var inst_29753 = (state_29769[(2)]);
var state_29769__$1 = (function (){var statearr_29786 = state_29769;
(statearr_29786[(11)] = inst_29753);

return statearr_29786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29769__$1,(12),dchan);
} else {
if((state_val_29770 === (14))){
var inst_29755 = (state_29769[(8)]);
var inst_29760 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_29755);
var state_29769__$1 = state_29769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29769__$1,(16),out,inst_29760);
} else {
if((state_val_29770 === (16))){
var inst_29762 = (state_29769[(2)]);
var state_29769__$1 = (function (){var statearr_29787 = state_29769;
(statearr_29787[(12)] = inst_29762);

return statearr_29787;
})();
var statearr_29788_29810 = state_29769__$1;
(statearr_29788_29810[(2)] = null);

(statearr_29788_29810[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29770 === (10))){
var inst_29737 = (state_29769[(2)]);
var inst_29738 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_29769__$1 = (function (){var statearr_29789 = state_29769;
(statearr_29789[(13)] = inst_29737);

return statearr_29789;
})();
var statearr_29790_29811 = state_29769__$1;
(statearr_29790_29811[(2)] = inst_29738);


cljs.core.async.impl.ioc_helpers.process_exception(state_29769__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_29770 === (8))){
var inst_29751 = (state_29769[(2)]);
var state_29769__$1 = state_29769;
var statearr_29791_29812 = state_29769__$1;
(statearr_29791_29812[(2)] = inst_29751);

(statearr_29791_29812[(1)] = (5));


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
});})(c__28456__auto___29797,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28349__auto__,c__28456__auto___29797,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_29792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29792[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_29792[(1)] = (1));

return statearr_29792;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_29769){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_29769);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e29793){if((e29793 instanceof Object)){
var ex__28353__auto__ = e29793;
var statearr_29794_29813 = state_29769;
(statearr_29794_29813[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29769);

return cljs.core.cst$kw$recur;
} else {
throw e29793;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__29814 = state_29769;
state_29769 = G__29814;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_29769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_29769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto___29797,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28458__auto__ = (function (){var statearr_29795 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_29795[(6)] = c__28456__auto___29797);

return statearr_29795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto___29797,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__29817 = arguments.length;
switch (G__29817) {
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
var c__28456__auto___29871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto___29871,out){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto___29871,out){
return (function (state_29849){
var state_val_29850 = (state_29849[(1)]);
if((state_val_29850 === (7))){
var inst_29829 = (state_29849[(7)]);
var inst_29828 = (state_29849[(8)]);
var inst_29828__$1 = (state_29849[(2)]);
var inst_29829__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29828__$1,(0),null);
var inst_29830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29828__$1,(1),null);
var inst_29831 = (inst_29829__$1 == null);
var state_29849__$1 = (function (){var statearr_29851 = state_29849;
(statearr_29851[(7)] = inst_29829__$1);

(statearr_29851[(8)] = inst_29828__$1);

(statearr_29851[(9)] = inst_29830);

return statearr_29851;
})();
if(cljs.core.truth_(inst_29831)){
var statearr_29852_29872 = state_29849__$1;
(statearr_29852_29872[(1)] = (8));

} else {
var statearr_29853_29873 = state_29849__$1;
(statearr_29853_29873[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29850 === (1))){
var inst_29818 = cljs.core.vec(chs);
var inst_29819 = inst_29818;
var state_29849__$1 = (function (){var statearr_29854 = state_29849;
(statearr_29854[(10)] = inst_29819);

return statearr_29854;
})();
var statearr_29855_29874 = state_29849__$1;
(statearr_29855_29874[(2)] = null);

(statearr_29855_29874[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29850 === (4))){
var inst_29819 = (state_29849[(10)]);
var state_29849__$1 = state_29849;
return cljs.core.async.ioc_alts_BANG_(state_29849__$1,(7),inst_29819);
} else {
if((state_val_29850 === (6))){
var inst_29845 = (state_29849[(2)]);
var state_29849__$1 = state_29849;
var statearr_29856_29875 = state_29849__$1;
(statearr_29856_29875[(2)] = inst_29845);

(statearr_29856_29875[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29850 === (3))){
var inst_29847 = (state_29849[(2)]);
var state_29849__$1 = state_29849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29849__$1,inst_29847);
} else {
if((state_val_29850 === (2))){
var inst_29819 = (state_29849[(10)]);
var inst_29821 = cljs.core.count(inst_29819);
var inst_29822 = (inst_29821 > (0));
var state_29849__$1 = state_29849;
if(cljs.core.truth_(inst_29822)){
var statearr_29858_29876 = state_29849__$1;
(statearr_29858_29876[(1)] = (4));

} else {
var statearr_29859_29877 = state_29849__$1;
(statearr_29859_29877[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29850 === (11))){
var inst_29819 = (state_29849[(10)]);
var inst_29838 = (state_29849[(2)]);
var tmp29857 = inst_29819;
var inst_29819__$1 = tmp29857;
var state_29849__$1 = (function (){var statearr_29860 = state_29849;
(statearr_29860[(11)] = inst_29838);

(statearr_29860[(10)] = inst_29819__$1);

return statearr_29860;
})();
var statearr_29861_29878 = state_29849__$1;
(statearr_29861_29878[(2)] = null);

(statearr_29861_29878[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29850 === (9))){
var inst_29829 = (state_29849[(7)]);
var state_29849__$1 = state_29849;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29849__$1,(11),out,inst_29829);
} else {
if((state_val_29850 === (5))){
var inst_29843 = cljs.core.async.close_BANG_(out);
var state_29849__$1 = state_29849;
var statearr_29862_29879 = state_29849__$1;
(statearr_29862_29879[(2)] = inst_29843);

(statearr_29862_29879[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29850 === (10))){
var inst_29841 = (state_29849[(2)]);
var state_29849__$1 = state_29849;
var statearr_29863_29880 = state_29849__$1;
(statearr_29863_29880[(2)] = inst_29841);

(statearr_29863_29880[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29850 === (8))){
var inst_29829 = (state_29849[(7)]);
var inst_29828 = (state_29849[(8)]);
var inst_29819 = (state_29849[(10)]);
var inst_29830 = (state_29849[(9)]);
var inst_29833 = (function (){var cs = inst_29819;
var vec__29824 = inst_29828;
var v = inst_29829;
var c = inst_29830;
return ((function (cs,vec__29824,v,c,inst_29829,inst_29828,inst_29819,inst_29830,state_val_29850,c__28456__auto___29871,out){
return (function (p1__29815_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__29815_SHARP_);
});
;})(cs,vec__29824,v,c,inst_29829,inst_29828,inst_29819,inst_29830,state_val_29850,c__28456__auto___29871,out))
})();
var inst_29834 = cljs.core.filterv(inst_29833,inst_29819);
var inst_29819__$1 = inst_29834;
var state_29849__$1 = (function (){var statearr_29864 = state_29849;
(statearr_29864[(10)] = inst_29819__$1);

return statearr_29864;
})();
var statearr_29865_29881 = state_29849__$1;
(statearr_29865_29881[(2)] = null);

(statearr_29865_29881[(1)] = (2));


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
});})(c__28456__auto___29871,out))
;
return ((function (switch__28349__auto__,c__28456__auto___29871,out){
return (function() {
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_29866 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29866[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_29866[(1)] = (1));

return statearr_29866;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_29849){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_29849);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e29867){if((e29867 instanceof Object)){
var ex__28353__auto__ = e29867;
var statearr_29868_29882 = state_29849;
(statearr_29868_29882[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29849);

return cljs.core.cst$kw$recur;
} else {
throw e29867;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__29883 = state_29849;
state_29849 = G__29883;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_29849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_29849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto___29871,out))
})();
var state__28458__auto__ = (function (){var statearr_29869 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_29869[(6)] = c__28456__auto___29871);

return statearr_29869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto___29871,out))
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
var G__29885 = arguments.length;
switch (G__29885) {
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
var c__28456__auto___29930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto___29930,out){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto___29930,out){
return (function (state_29909){
var state_val_29910 = (state_29909[(1)]);
if((state_val_29910 === (7))){
var inst_29891 = (state_29909[(7)]);
var inst_29891__$1 = (state_29909[(2)]);
var inst_29892 = (inst_29891__$1 == null);
var inst_29893 = cljs.core.not(inst_29892);
var state_29909__$1 = (function (){var statearr_29911 = state_29909;
(statearr_29911[(7)] = inst_29891__$1);

return statearr_29911;
})();
if(inst_29893){
var statearr_29912_29931 = state_29909__$1;
(statearr_29912_29931[(1)] = (8));

} else {
var statearr_29913_29932 = state_29909__$1;
(statearr_29913_29932[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29910 === (1))){
var inst_29886 = (0);
var state_29909__$1 = (function (){var statearr_29914 = state_29909;
(statearr_29914[(8)] = inst_29886);

return statearr_29914;
})();
var statearr_29915_29933 = state_29909__$1;
(statearr_29915_29933[(2)] = null);

(statearr_29915_29933[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29910 === (4))){
var state_29909__$1 = state_29909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29909__$1,(7),ch);
} else {
if((state_val_29910 === (6))){
var inst_29904 = (state_29909[(2)]);
var state_29909__$1 = state_29909;
var statearr_29916_29934 = state_29909__$1;
(statearr_29916_29934[(2)] = inst_29904);

(statearr_29916_29934[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29910 === (3))){
var inst_29906 = (state_29909[(2)]);
var inst_29907 = cljs.core.async.close_BANG_(out);
var state_29909__$1 = (function (){var statearr_29917 = state_29909;
(statearr_29917[(9)] = inst_29906);

return statearr_29917;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29909__$1,inst_29907);
} else {
if((state_val_29910 === (2))){
var inst_29886 = (state_29909[(8)]);
var inst_29888 = (inst_29886 < n);
var state_29909__$1 = state_29909;
if(cljs.core.truth_(inst_29888)){
var statearr_29918_29935 = state_29909__$1;
(statearr_29918_29935[(1)] = (4));

} else {
var statearr_29919_29936 = state_29909__$1;
(statearr_29919_29936[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29910 === (11))){
var inst_29886 = (state_29909[(8)]);
var inst_29896 = (state_29909[(2)]);
var inst_29897 = (inst_29886 + (1));
var inst_29886__$1 = inst_29897;
var state_29909__$1 = (function (){var statearr_29920 = state_29909;
(statearr_29920[(10)] = inst_29896);

(statearr_29920[(8)] = inst_29886__$1);

return statearr_29920;
})();
var statearr_29921_29937 = state_29909__$1;
(statearr_29921_29937[(2)] = null);

(statearr_29921_29937[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29910 === (9))){
var state_29909__$1 = state_29909;
var statearr_29922_29938 = state_29909__$1;
(statearr_29922_29938[(2)] = null);

(statearr_29922_29938[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29910 === (5))){
var state_29909__$1 = state_29909;
var statearr_29923_29939 = state_29909__$1;
(statearr_29923_29939[(2)] = null);

(statearr_29923_29939[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29910 === (10))){
var inst_29901 = (state_29909[(2)]);
var state_29909__$1 = state_29909;
var statearr_29924_29940 = state_29909__$1;
(statearr_29924_29940[(2)] = inst_29901);

(statearr_29924_29940[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29910 === (8))){
var inst_29891 = (state_29909[(7)]);
var state_29909__$1 = state_29909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29909__$1,(11),out,inst_29891);
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
});})(c__28456__auto___29930,out))
;
return ((function (switch__28349__auto__,c__28456__auto___29930,out){
return (function() {
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_29925 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29925[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_29925[(1)] = (1));

return statearr_29925;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_29909){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_29909);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e29926){if((e29926 instanceof Object)){
var ex__28353__auto__ = e29926;
var statearr_29927_29941 = state_29909;
(statearr_29927_29941[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29909);

return cljs.core.cst$kw$recur;
} else {
throw e29926;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__29942 = state_29909;
state_29909 = G__29942;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_29909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_29909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto___29930,out))
})();
var state__28458__auto__ = (function (){var statearr_29928 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_29928[(6)] = c__28456__auto___29930);

return statearr_29928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto___29930,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29944 = (function (f,ch,meta29945){
this.f = f;
this.ch = ch;
this.meta29945 = meta29945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29946,meta29945__$1){
var self__ = this;
var _29946__$1 = this;
return (new cljs.core.async.t_cljs$core$async29944(self__.f,self__.ch,meta29945__$1));
});

cljs.core.async.t_cljs$core$async29944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29946){
var self__ = this;
var _29946__$1 = this;
return self__.meta29945;
});

cljs.core.async.t_cljs$core$async29944.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async29944.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async29944.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29947 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29947 = (function (f,ch,meta29945,_,fn1,meta29948){
this.f = f;
this.ch = ch;
this.meta29945 = meta29945;
this._ = _;
this.fn1 = fn1;
this.meta29948 = meta29948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29949,meta29948__$1){
var self__ = this;
var _29949__$1 = this;
return (new cljs.core.async.t_cljs$core$async29947(self__.f,self__.ch,self__.meta29945,self__._,self__.fn1,meta29948__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29949){
var self__ = this;
var _29949__$1 = this;
return self__.meta29948;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29947.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29947.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29943_SHARP_){
var G__29950 = (((p1__29943_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__29943_SHARP_) : self__.f.call(null,p1__29943_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29950) : f1.call(null,G__29950));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29947.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29945,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async29944], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta29948], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29947";

cljs.core.async.t_cljs$core$async29947.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29947");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29947.
 */
cljs.core.async.__GT_t_cljs$core$async29947 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29947(f__$1,ch__$1,meta29945__$1,___$2,fn1__$1,meta29948){
return (new cljs.core.async.t_cljs$core$async29947(f__$1,ch__$1,meta29945__$1,___$2,fn1__$1,meta29948));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29947(self__.f,self__.ch,self__.meta29945,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__29951 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__29951) : self__.f.call(null,G__29951));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29944.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29945], null);
});

cljs.core.async.t_cljs$core$async29944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29944";

cljs.core.async.t_cljs$core$async29944.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29944");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29944.
 */
cljs.core.async.__GT_t_cljs$core$async29944 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29944(f__$1,ch__$1,meta29945){
return (new cljs.core.async.t_cljs$core$async29944(f__$1,ch__$1,meta29945));
});

}

return (new cljs.core.async.t_cljs$core$async29944(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29952 = (function (f,ch,meta29953){
this.f = f;
this.ch = ch;
this.meta29953 = meta29953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29954,meta29953__$1){
var self__ = this;
var _29954__$1 = this;
return (new cljs.core.async.t_cljs$core$async29952(self__.f,self__.ch,meta29953__$1));
});

cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29954){
var self__ = this;
var _29954__$1 = this;
return self__.meta29953;
});

cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29952.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async29952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29953], null);
});

cljs.core.async.t_cljs$core$async29952.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29952";

cljs.core.async.t_cljs$core$async29952.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29952");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29952.
 */
cljs.core.async.__GT_t_cljs$core$async29952 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29952(f__$1,ch__$1,meta29953){
return (new cljs.core.async.t_cljs$core$async29952(f__$1,ch__$1,meta29953));
});

}

return (new cljs.core.async.t_cljs$core$async29952(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29955 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29955 = (function (p,ch,meta29956){
this.p = p;
this.ch = ch;
this.meta29956 = meta29956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29957,meta29956__$1){
var self__ = this;
var _29957__$1 = this;
return (new cljs.core.async.t_cljs$core$async29955(self__.p,self__.ch,meta29956__$1));
});

cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29957){
var self__ = this;
var _29957__$1 = this;
return self__.meta29956;
});

cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29956], null);
});

cljs.core.async.t_cljs$core$async29955.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29955";

cljs.core.async.t_cljs$core$async29955.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29955");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29955.
 */
cljs.core.async.__GT_t_cljs$core$async29955 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29955(p__$1,ch__$1,meta29956){
return (new cljs.core.async.t_cljs$core$async29955(p__$1,ch__$1,meta29956));
});

}

return (new cljs.core.async.t_cljs$core$async29955(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29959 = arguments.length;
switch (G__29959) {
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
var c__28456__auto___29999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto___29999,out){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto___29999,out){
return (function (state_29980){
var state_val_29981 = (state_29980[(1)]);
if((state_val_29981 === (7))){
var inst_29976 = (state_29980[(2)]);
var state_29980__$1 = state_29980;
var statearr_29982_30000 = state_29980__$1;
(statearr_29982_30000[(2)] = inst_29976);

(statearr_29982_30000[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29981 === (1))){
var state_29980__$1 = state_29980;
var statearr_29983_30001 = state_29980__$1;
(statearr_29983_30001[(2)] = null);

(statearr_29983_30001[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29981 === (4))){
var inst_29962 = (state_29980[(7)]);
var inst_29962__$1 = (state_29980[(2)]);
var inst_29963 = (inst_29962__$1 == null);
var state_29980__$1 = (function (){var statearr_29984 = state_29980;
(statearr_29984[(7)] = inst_29962__$1);

return statearr_29984;
})();
if(cljs.core.truth_(inst_29963)){
var statearr_29985_30002 = state_29980__$1;
(statearr_29985_30002[(1)] = (5));

} else {
var statearr_29986_30003 = state_29980__$1;
(statearr_29986_30003[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29981 === (6))){
var inst_29962 = (state_29980[(7)]);
var inst_29967 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29962) : p.call(null,inst_29962));
var state_29980__$1 = state_29980;
if(cljs.core.truth_(inst_29967)){
var statearr_29987_30004 = state_29980__$1;
(statearr_29987_30004[(1)] = (8));

} else {
var statearr_29988_30005 = state_29980__$1;
(statearr_29988_30005[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29981 === (3))){
var inst_29978 = (state_29980[(2)]);
var state_29980__$1 = state_29980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29980__$1,inst_29978);
} else {
if((state_val_29981 === (2))){
var state_29980__$1 = state_29980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29980__$1,(4),ch);
} else {
if((state_val_29981 === (11))){
var inst_29970 = (state_29980[(2)]);
var state_29980__$1 = state_29980;
var statearr_29989_30006 = state_29980__$1;
(statearr_29989_30006[(2)] = inst_29970);

(statearr_29989_30006[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29981 === (9))){
var state_29980__$1 = state_29980;
var statearr_29990_30007 = state_29980__$1;
(statearr_29990_30007[(2)] = null);

(statearr_29990_30007[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29981 === (5))){
var inst_29965 = cljs.core.async.close_BANG_(out);
var state_29980__$1 = state_29980;
var statearr_29991_30008 = state_29980__$1;
(statearr_29991_30008[(2)] = inst_29965);

(statearr_29991_30008[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29981 === (10))){
var inst_29973 = (state_29980[(2)]);
var state_29980__$1 = (function (){var statearr_29992 = state_29980;
(statearr_29992[(8)] = inst_29973);

return statearr_29992;
})();
var statearr_29993_30009 = state_29980__$1;
(statearr_29993_30009[(2)] = null);

(statearr_29993_30009[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29981 === (8))){
var inst_29962 = (state_29980[(7)]);
var state_29980__$1 = state_29980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29980__$1,(11),out,inst_29962);
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
});})(c__28456__auto___29999,out))
;
return ((function (switch__28349__auto__,c__28456__auto___29999,out){
return (function() {
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_29994 = [null,null,null,null,null,null,null,null,null];
(statearr_29994[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_29994[(1)] = (1));

return statearr_29994;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_29980){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_29980);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e29995){if((e29995 instanceof Object)){
var ex__28353__auto__ = e29995;
var statearr_29996_30010 = state_29980;
(statearr_29996_30010[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29980);

return cljs.core.cst$kw$recur;
} else {
throw e29995;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__30011 = state_29980;
state_29980 = G__30011;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_29980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_29980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto___29999,out))
})();
var state__28458__auto__ = (function (){var statearr_29997 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_29997[(6)] = c__28456__auto___29999);

return statearr_29997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto___29999,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30013 = arguments.length;
switch (G__30013) {
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
var c__28456__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto__){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto__){
return (function (state_30076){
var state_val_30077 = (state_30076[(1)]);
if((state_val_30077 === (7))){
var inst_30072 = (state_30076[(2)]);
var state_30076__$1 = state_30076;
var statearr_30078_30116 = state_30076__$1;
(statearr_30078_30116[(2)] = inst_30072);

(statearr_30078_30116[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (20))){
var inst_30042 = (state_30076[(7)]);
var inst_30053 = (state_30076[(2)]);
var inst_30054 = cljs.core.next(inst_30042);
var inst_30028 = inst_30054;
var inst_30029 = null;
var inst_30030 = (0);
var inst_30031 = (0);
var state_30076__$1 = (function (){var statearr_30079 = state_30076;
(statearr_30079[(8)] = inst_30028);

(statearr_30079[(9)] = inst_30031);

(statearr_30079[(10)] = inst_30030);

(statearr_30079[(11)] = inst_30053);

(statearr_30079[(12)] = inst_30029);

return statearr_30079;
})();
var statearr_30080_30117 = state_30076__$1;
(statearr_30080_30117[(2)] = null);

(statearr_30080_30117[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (1))){
var state_30076__$1 = state_30076;
var statearr_30081_30118 = state_30076__$1;
(statearr_30081_30118[(2)] = null);

(statearr_30081_30118[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (4))){
var inst_30017 = (state_30076[(13)]);
var inst_30017__$1 = (state_30076[(2)]);
var inst_30018 = (inst_30017__$1 == null);
var state_30076__$1 = (function (){var statearr_30082 = state_30076;
(statearr_30082[(13)] = inst_30017__$1);

return statearr_30082;
})();
if(cljs.core.truth_(inst_30018)){
var statearr_30083_30119 = state_30076__$1;
(statearr_30083_30119[(1)] = (5));

} else {
var statearr_30084_30120 = state_30076__$1;
(statearr_30084_30120[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (15))){
var state_30076__$1 = state_30076;
var statearr_30088_30121 = state_30076__$1;
(statearr_30088_30121[(2)] = null);

(statearr_30088_30121[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (21))){
var state_30076__$1 = state_30076;
var statearr_30089_30122 = state_30076__$1;
(statearr_30089_30122[(2)] = null);

(statearr_30089_30122[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (13))){
var inst_30028 = (state_30076[(8)]);
var inst_30031 = (state_30076[(9)]);
var inst_30030 = (state_30076[(10)]);
var inst_30029 = (state_30076[(12)]);
var inst_30038 = (state_30076[(2)]);
var inst_30039 = (inst_30031 + (1));
var tmp30085 = inst_30028;
var tmp30086 = inst_30030;
var tmp30087 = inst_30029;
var inst_30028__$1 = tmp30085;
var inst_30029__$1 = tmp30087;
var inst_30030__$1 = tmp30086;
var inst_30031__$1 = inst_30039;
var state_30076__$1 = (function (){var statearr_30090 = state_30076;
(statearr_30090[(14)] = inst_30038);

(statearr_30090[(8)] = inst_30028__$1);

(statearr_30090[(9)] = inst_30031__$1);

(statearr_30090[(10)] = inst_30030__$1);

(statearr_30090[(12)] = inst_30029__$1);

return statearr_30090;
})();
var statearr_30091_30123 = state_30076__$1;
(statearr_30091_30123[(2)] = null);

(statearr_30091_30123[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (22))){
var state_30076__$1 = state_30076;
var statearr_30092_30124 = state_30076__$1;
(statearr_30092_30124[(2)] = null);

(statearr_30092_30124[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (6))){
var inst_30017 = (state_30076[(13)]);
var inst_30026 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30017) : f.call(null,inst_30017));
var inst_30027 = cljs.core.seq(inst_30026);
var inst_30028 = inst_30027;
var inst_30029 = null;
var inst_30030 = (0);
var inst_30031 = (0);
var state_30076__$1 = (function (){var statearr_30093 = state_30076;
(statearr_30093[(8)] = inst_30028);

(statearr_30093[(9)] = inst_30031);

(statearr_30093[(10)] = inst_30030);

(statearr_30093[(12)] = inst_30029);

return statearr_30093;
})();
var statearr_30094_30125 = state_30076__$1;
(statearr_30094_30125[(2)] = null);

(statearr_30094_30125[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (17))){
var inst_30042 = (state_30076[(7)]);
var inst_30046 = cljs.core.chunk_first(inst_30042);
var inst_30047 = cljs.core.chunk_rest(inst_30042);
var inst_30048 = cljs.core.count(inst_30046);
var inst_30028 = inst_30047;
var inst_30029 = inst_30046;
var inst_30030 = inst_30048;
var inst_30031 = (0);
var state_30076__$1 = (function (){var statearr_30095 = state_30076;
(statearr_30095[(8)] = inst_30028);

(statearr_30095[(9)] = inst_30031);

(statearr_30095[(10)] = inst_30030);

(statearr_30095[(12)] = inst_30029);

return statearr_30095;
})();
var statearr_30096_30126 = state_30076__$1;
(statearr_30096_30126[(2)] = null);

(statearr_30096_30126[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (3))){
var inst_30074 = (state_30076[(2)]);
var state_30076__$1 = state_30076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30076__$1,inst_30074);
} else {
if((state_val_30077 === (12))){
var inst_30062 = (state_30076[(2)]);
var state_30076__$1 = state_30076;
var statearr_30097_30127 = state_30076__$1;
(statearr_30097_30127[(2)] = inst_30062);

(statearr_30097_30127[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (2))){
var state_30076__$1 = state_30076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30076__$1,(4),in$);
} else {
if((state_val_30077 === (23))){
var inst_30070 = (state_30076[(2)]);
var state_30076__$1 = state_30076;
var statearr_30098_30128 = state_30076__$1;
(statearr_30098_30128[(2)] = inst_30070);

(statearr_30098_30128[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (19))){
var inst_30057 = (state_30076[(2)]);
var state_30076__$1 = state_30076;
var statearr_30099_30129 = state_30076__$1;
(statearr_30099_30129[(2)] = inst_30057);

(statearr_30099_30129[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (11))){
var inst_30028 = (state_30076[(8)]);
var inst_30042 = (state_30076[(7)]);
var inst_30042__$1 = cljs.core.seq(inst_30028);
var state_30076__$1 = (function (){var statearr_30100 = state_30076;
(statearr_30100[(7)] = inst_30042__$1);

return statearr_30100;
})();
if(inst_30042__$1){
var statearr_30101_30130 = state_30076__$1;
(statearr_30101_30130[(1)] = (14));

} else {
var statearr_30102_30131 = state_30076__$1;
(statearr_30102_30131[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (9))){
var inst_30064 = (state_30076[(2)]);
var inst_30065 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_30076__$1 = (function (){var statearr_30103 = state_30076;
(statearr_30103[(15)] = inst_30064);

return statearr_30103;
})();
if(cljs.core.truth_(inst_30065)){
var statearr_30104_30132 = state_30076__$1;
(statearr_30104_30132[(1)] = (21));

} else {
var statearr_30105_30133 = state_30076__$1;
(statearr_30105_30133[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (5))){
var inst_30020 = cljs.core.async.close_BANG_(out);
var state_30076__$1 = state_30076;
var statearr_30106_30134 = state_30076__$1;
(statearr_30106_30134[(2)] = inst_30020);

(statearr_30106_30134[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (14))){
var inst_30042 = (state_30076[(7)]);
var inst_30044 = cljs.core.chunked_seq_QMARK_(inst_30042);
var state_30076__$1 = state_30076;
if(inst_30044){
var statearr_30107_30135 = state_30076__$1;
(statearr_30107_30135[(1)] = (17));

} else {
var statearr_30108_30136 = state_30076__$1;
(statearr_30108_30136[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (16))){
var inst_30060 = (state_30076[(2)]);
var state_30076__$1 = state_30076;
var statearr_30109_30137 = state_30076__$1;
(statearr_30109_30137[(2)] = inst_30060);

(statearr_30109_30137[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (10))){
var inst_30031 = (state_30076[(9)]);
var inst_30029 = (state_30076[(12)]);
var inst_30036 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30029,inst_30031);
var state_30076__$1 = state_30076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30076__$1,(13),out,inst_30036);
} else {
if((state_val_30077 === (18))){
var inst_30042 = (state_30076[(7)]);
var inst_30051 = cljs.core.first(inst_30042);
var state_30076__$1 = state_30076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30076__$1,(20),out,inst_30051);
} else {
if((state_val_30077 === (8))){
var inst_30031 = (state_30076[(9)]);
var inst_30030 = (state_30076[(10)]);
var inst_30033 = (inst_30031 < inst_30030);
var inst_30034 = inst_30033;
var state_30076__$1 = state_30076;
if(cljs.core.truth_(inst_30034)){
var statearr_30110_30138 = state_30076__$1;
(statearr_30110_30138[(1)] = (10));

} else {
var statearr_30111_30139 = state_30076__$1;
(statearr_30111_30139[(1)] = (11));

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
});})(c__28456__auto__))
;
return ((function (switch__28349__auto__,c__28456__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28350__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28350__auto____0 = (function (){
var statearr_30112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30112[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28350__auto__);

(statearr_30112[(1)] = (1));

return statearr_30112;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28350__auto____1 = (function (state_30076){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_30076);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e30113){if((e30113 instanceof Object)){
var ex__28353__auto__ = e30113;
var statearr_30114_30140 = state_30076;
(statearr_30114_30140[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30076);

return cljs.core.cst$kw$recur;
} else {
throw e30113;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__30141 = state_30076;
state_30076 = G__30141;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28350__auto__ = function(state_30076){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28350__auto____1.call(this,state_30076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28350__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28350__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto__))
})();
var state__28458__auto__ = (function (){var statearr_30115 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_30115[(6)] = c__28456__auto__);

return statearr_30115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto__))
);

return c__28456__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30143 = arguments.length;
switch (G__30143) {
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
var G__30146 = arguments.length;
switch (G__30146) {
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
var G__30149 = arguments.length;
switch (G__30149) {
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
var c__28456__auto___30196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto___30196,out){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto___30196,out){
return (function (state_30173){
var state_val_30174 = (state_30173[(1)]);
if((state_val_30174 === (7))){
var inst_30168 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
var statearr_30175_30197 = state_30173__$1;
(statearr_30175_30197[(2)] = inst_30168);

(statearr_30175_30197[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30174 === (1))){
var inst_30150 = null;
var state_30173__$1 = (function (){var statearr_30176 = state_30173;
(statearr_30176[(7)] = inst_30150);

return statearr_30176;
})();
var statearr_30177_30198 = state_30173__$1;
(statearr_30177_30198[(2)] = null);

(statearr_30177_30198[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30174 === (4))){
var inst_30153 = (state_30173[(8)]);
var inst_30153__$1 = (state_30173[(2)]);
var inst_30154 = (inst_30153__$1 == null);
var inst_30155 = cljs.core.not(inst_30154);
var state_30173__$1 = (function (){var statearr_30178 = state_30173;
(statearr_30178[(8)] = inst_30153__$1);

return statearr_30178;
})();
if(inst_30155){
var statearr_30179_30199 = state_30173__$1;
(statearr_30179_30199[(1)] = (5));

} else {
var statearr_30180_30200 = state_30173__$1;
(statearr_30180_30200[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30174 === (6))){
var state_30173__$1 = state_30173;
var statearr_30181_30201 = state_30173__$1;
(statearr_30181_30201[(2)] = null);

(statearr_30181_30201[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30174 === (3))){
var inst_30170 = (state_30173[(2)]);
var inst_30171 = cljs.core.async.close_BANG_(out);
var state_30173__$1 = (function (){var statearr_30182 = state_30173;
(statearr_30182[(9)] = inst_30170);

return statearr_30182;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30173__$1,inst_30171);
} else {
if((state_val_30174 === (2))){
var state_30173__$1 = state_30173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30173__$1,(4),ch);
} else {
if((state_val_30174 === (11))){
var inst_30153 = (state_30173[(8)]);
var inst_30162 = (state_30173[(2)]);
var inst_30150 = inst_30153;
var state_30173__$1 = (function (){var statearr_30183 = state_30173;
(statearr_30183[(7)] = inst_30150);

(statearr_30183[(10)] = inst_30162);

return statearr_30183;
})();
var statearr_30184_30202 = state_30173__$1;
(statearr_30184_30202[(2)] = null);

(statearr_30184_30202[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30174 === (9))){
var inst_30153 = (state_30173[(8)]);
var state_30173__$1 = state_30173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30173__$1,(11),out,inst_30153);
} else {
if((state_val_30174 === (5))){
var inst_30150 = (state_30173[(7)]);
var inst_30153 = (state_30173[(8)]);
var inst_30157 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30153,inst_30150);
var state_30173__$1 = state_30173;
if(inst_30157){
var statearr_30186_30203 = state_30173__$1;
(statearr_30186_30203[(1)] = (8));

} else {
var statearr_30187_30204 = state_30173__$1;
(statearr_30187_30204[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30174 === (10))){
var inst_30165 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
var statearr_30188_30205 = state_30173__$1;
(statearr_30188_30205[(2)] = inst_30165);

(statearr_30188_30205[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30174 === (8))){
var inst_30150 = (state_30173[(7)]);
var tmp30185 = inst_30150;
var inst_30150__$1 = tmp30185;
var state_30173__$1 = (function (){var statearr_30189 = state_30173;
(statearr_30189[(7)] = inst_30150__$1);

return statearr_30189;
})();
var statearr_30190_30206 = state_30173__$1;
(statearr_30190_30206[(2)] = null);

(statearr_30190_30206[(1)] = (2));


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
});})(c__28456__auto___30196,out))
;
return ((function (switch__28349__auto__,c__28456__auto___30196,out){
return (function() {
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_30191 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30191[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_30191[(1)] = (1));

return statearr_30191;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_30173){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_30173);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e30192){if((e30192 instanceof Object)){
var ex__28353__auto__ = e30192;
var statearr_30193_30207 = state_30173;
(statearr_30193_30207[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30173);

return cljs.core.cst$kw$recur;
} else {
throw e30192;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__30208 = state_30173;
state_30173 = G__30208;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_30173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_30173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto___30196,out))
})();
var state__28458__auto__ = (function (){var statearr_30194 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_30194[(6)] = c__28456__auto___30196);

return statearr_30194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto___30196,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30210 = arguments.length;
switch (G__30210) {
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
var c__28456__auto___30276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto___30276,out){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto___30276,out){
return (function (state_30248){
var state_val_30249 = (state_30248[(1)]);
if((state_val_30249 === (7))){
var inst_30244 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
var statearr_30250_30277 = state_30248__$1;
(statearr_30250_30277[(2)] = inst_30244);

(statearr_30250_30277[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30249 === (1))){
var inst_30211 = (new Array(n));
var inst_30212 = inst_30211;
var inst_30213 = (0);
var state_30248__$1 = (function (){var statearr_30251 = state_30248;
(statearr_30251[(7)] = inst_30212);

(statearr_30251[(8)] = inst_30213);

return statearr_30251;
})();
var statearr_30252_30278 = state_30248__$1;
(statearr_30252_30278[(2)] = null);

(statearr_30252_30278[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30249 === (4))){
var inst_30216 = (state_30248[(9)]);
var inst_30216__$1 = (state_30248[(2)]);
var inst_30217 = (inst_30216__$1 == null);
var inst_30218 = cljs.core.not(inst_30217);
var state_30248__$1 = (function (){var statearr_30253 = state_30248;
(statearr_30253[(9)] = inst_30216__$1);

return statearr_30253;
})();
if(inst_30218){
var statearr_30254_30279 = state_30248__$1;
(statearr_30254_30279[(1)] = (5));

} else {
var statearr_30255_30280 = state_30248__$1;
(statearr_30255_30280[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30249 === (15))){
var inst_30238 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
var statearr_30256_30281 = state_30248__$1;
(statearr_30256_30281[(2)] = inst_30238);

(statearr_30256_30281[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30249 === (13))){
var state_30248__$1 = state_30248;
var statearr_30257_30282 = state_30248__$1;
(statearr_30257_30282[(2)] = null);

(statearr_30257_30282[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30249 === (6))){
var inst_30213 = (state_30248[(8)]);
var inst_30234 = (inst_30213 > (0));
var state_30248__$1 = state_30248;
if(cljs.core.truth_(inst_30234)){
var statearr_30258_30283 = state_30248__$1;
(statearr_30258_30283[(1)] = (12));

} else {
var statearr_30259_30284 = state_30248__$1;
(statearr_30259_30284[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30249 === (3))){
var inst_30246 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30248__$1,inst_30246);
} else {
if((state_val_30249 === (12))){
var inst_30212 = (state_30248[(7)]);
var inst_30236 = cljs.core.vec(inst_30212);
var state_30248__$1 = state_30248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30248__$1,(15),out,inst_30236);
} else {
if((state_val_30249 === (2))){
var state_30248__$1 = state_30248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30248__$1,(4),ch);
} else {
if((state_val_30249 === (11))){
var inst_30228 = (state_30248[(2)]);
var inst_30229 = (new Array(n));
var inst_30212 = inst_30229;
var inst_30213 = (0);
var state_30248__$1 = (function (){var statearr_30260 = state_30248;
(statearr_30260[(7)] = inst_30212);

(statearr_30260[(10)] = inst_30228);

(statearr_30260[(8)] = inst_30213);

return statearr_30260;
})();
var statearr_30261_30285 = state_30248__$1;
(statearr_30261_30285[(2)] = null);

(statearr_30261_30285[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30249 === (9))){
var inst_30212 = (state_30248[(7)]);
var inst_30226 = cljs.core.vec(inst_30212);
var state_30248__$1 = state_30248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30248__$1,(11),out,inst_30226);
} else {
if((state_val_30249 === (5))){
var inst_30212 = (state_30248[(7)]);
var inst_30221 = (state_30248[(11)]);
var inst_30216 = (state_30248[(9)]);
var inst_30213 = (state_30248[(8)]);
var inst_30220 = (inst_30212[inst_30213] = inst_30216);
var inst_30221__$1 = (inst_30213 + (1));
var inst_30222 = (inst_30221__$1 < n);
var state_30248__$1 = (function (){var statearr_30262 = state_30248;
(statearr_30262[(11)] = inst_30221__$1);

(statearr_30262[(12)] = inst_30220);

return statearr_30262;
})();
if(cljs.core.truth_(inst_30222)){
var statearr_30263_30286 = state_30248__$1;
(statearr_30263_30286[(1)] = (8));

} else {
var statearr_30264_30287 = state_30248__$1;
(statearr_30264_30287[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30249 === (14))){
var inst_30241 = (state_30248[(2)]);
var inst_30242 = cljs.core.async.close_BANG_(out);
var state_30248__$1 = (function (){var statearr_30266 = state_30248;
(statearr_30266[(13)] = inst_30241);

return statearr_30266;
})();
var statearr_30267_30288 = state_30248__$1;
(statearr_30267_30288[(2)] = inst_30242);

(statearr_30267_30288[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30249 === (10))){
var inst_30232 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
var statearr_30268_30289 = state_30248__$1;
(statearr_30268_30289[(2)] = inst_30232);

(statearr_30268_30289[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30249 === (8))){
var inst_30212 = (state_30248[(7)]);
var inst_30221 = (state_30248[(11)]);
var tmp30265 = inst_30212;
var inst_30212__$1 = tmp30265;
var inst_30213 = inst_30221;
var state_30248__$1 = (function (){var statearr_30269 = state_30248;
(statearr_30269[(7)] = inst_30212__$1);

(statearr_30269[(8)] = inst_30213);

return statearr_30269;
})();
var statearr_30270_30290 = state_30248__$1;
(statearr_30270_30290[(2)] = null);

(statearr_30270_30290[(1)] = (2));


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
});})(c__28456__auto___30276,out))
;
return ((function (switch__28349__auto__,c__28456__auto___30276,out){
return (function() {
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_30271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30271[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_30271[(1)] = (1));

return statearr_30271;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_30248){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_30248);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e30272){if((e30272 instanceof Object)){
var ex__28353__auto__ = e30272;
var statearr_30273_30291 = state_30248;
(statearr_30273_30291[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30248);

return cljs.core.cst$kw$recur;
} else {
throw e30272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__30292 = state_30248;
state_30248 = G__30292;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_30248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_30248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto___30276,out))
})();
var state__28458__auto__ = (function (){var statearr_30274 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_30274[(6)] = c__28456__auto___30276);

return statearr_30274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto___30276,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30294 = arguments.length;
switch (G__30294) {
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
var c__28456__auto___30364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto___30364,out){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto___30364,out){
return (function (state_30336){
var state_val_30337 = (state_30336[(1)]);
if((state_val_30337 === (7))){
var inst_30332 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
var statearr_30338_30365 = state_30336__$1;
(statearr_30338_30365[(2)] = inst_30332);

(statearr_30338_30365[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30337 === (1))){
var inst_30295 = [];
var inst_30296 = inst_30295;
var inst_30297 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_30336__$1 = (function (){var statearr_30339 = state_30336;
(statearr_30339[(7)] = inst_30297);

(statearr_30339[(8)] = inst_30296);

return statearr_30339;
})();
var statearr_30340_30366 = state_30336__$1;
(statearr_30340_30366[(2)] = null);

(statearr_30340_30366[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30337 === (4))){
var inst_30300 = (state_30336[(9)]);
var inst_30300__$1 = (state_30336[(2)]);
var inst_30301 = (inst_30300__$1 == null);
var inst_30302 = cljs.core.not(inst_30301);
var state_30336__$1 = (function (){var statearr_30341 = state_30336;
(statearr_30341[(9)] = inst_30300__$1);

return statearr_30341;
})();
if(inst_30302){
var statearr_30342_30367 = state_30336__$1;
(statearr_30342_30367[(1)] = (5));

} else {
var statearr_30343_30368 = state_30336__$1;
(statearr_30343_30368[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30337 === (15))){
var inst_30326 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
var statearr_30344_30369 = state_30336__$1;
(statearr_30344_30369[(2)] = inst_30326);

(statearr_30344_30369[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30337 === (13))){
var state_30336__$1 = state_30336;
var statearr_30345_30370 = state_30336__$1;
(statearr_30345_30370[(2)] = null);

(statearr_30345_30370[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30337 === (6))){
var inst_30296 = (state_30336[(8)]);
var inst_30321 = inst_30296.length;
var inst_30322 = (inst_30321 > (0));
var state_30336__$1 = state_30336;
if(cljs.core.truth_(inst_30322)){
var statearr_30346_30371 = state_30336__$1;
(statearr_30346_30371[(1)] = (12));

} else {
var statearr_30347_30372 = state_30336__$1;
(statearr_30347_30372[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30337 === (3))){
var inst_30334 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30336__$1,inst_30334);
} else {
if((state_val_30337 === (12))){
var inst_30296 = (state_30336[(8)]);
var inst_30324 = cljs.core.vec(inst_30296);
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30336__$1,(15),out,inst_30324);
} else {
if((state_val_30337 === (2))){
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30336__$1,(4),ch);
} else {
if((state_val_30337 === (11))){
var inst_30300 = (state_30336[(9)]);
var inst_30304 = (state_30336[(10)]);
var inst_30314 = (state_30336[(2)]);
var inst_30315 = [];
var inst_30316 = inst_30315.push(inst_30300);
var inst_30296 = inst_30315;
var inst_30297 = inst_30304;
var state_30336__$1 = (function (){var statearr_30348 = state_30336;
(statearr_30348[(11)] = inst_30314);

(statearr_30348[(7)] = inst_30297);

(statearr_30348[(12)] = inst_30316);

(statearr_30348[(8)] = inst_30296);

return statearr_30348;
})();
var statearr_30349_30373 = state_30336__$1;
(statearr_30349_30373[(2)] = null);

(statearr_30349_30373[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30337 === (9))){
var inst_30296 = (state_30336[(8)]);
var inst_30312 = cljs.core.vec(inst_30296);
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30336__$1,(11),out,inst_30312);
} else {
if((state_val_30337 === (5))){
var inst_30297 = (state_30336[(7)]);
var inst_30300 = (state_30336[(9)]);
var inst_30304 = (state_30336[(10)]);
var inst_30304__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30300) : f.call(null,inst_30300));
var inst_30305 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30304__$1,inst_30297);
var inst_30306 = cljs.core.keyword_identical_QMARK_(inst_30297,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_30307 = ((inst_30305) || (inst_30306));
var state_30336__$1 = (function (){var statearr_30350 = state_30336;
(statearr_30350[(10)] = inst_30304__$1);

return statearr_30350;
})();
if(cljs.core.truth_(inst_30307)){
var statearr_30351_30374 = state_30336__$1;
(statearr_30351_30374[(1)] = (8));

} else {
var statearr_30352_30375 = state_30336__$1;
(statearr_30352_30375[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30337 === (14))){
var inst_30329 = (state_30336[(2)]);
var inst_30330 = cljs.core.async.close_BANG_(out);
var state_30336__$1 = (function (){var statearr_30354 = state_30336;
(statearr_30354[(13)] = inst_30329);

return statearr_30354;
})();
var statearr_30355_30376 = state_30336__$1;
(statearr_30355_30376[(2)] = inst_30330);

(statearr_30355_30376[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30337 === (10))){
var inst_30319 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
var statearr_30356_30377 = state_30336__$1;
(statearr_30356_30377[(2)] = inst_30319);

(statearr_30356_30377[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30337 === (8))){
var inst_30300 = (state_30336[(9)]);
var inst_30304 = (state_30336[(10)]);
var inst_30296 = (state_30336[(8)]);
var inst_30309 = inst_30296.push(inst_30300);
var tmp30353 = inst_30296;
var inst_30296__$1 = tmp30353;
var inst_30297 = inst_30304;
var state_30336__$1 = (function (){var statearr_30357 = state_30336;
(statearr_30357[(14)] = inst_30309);

(statearr_30357[(7)] = inst_30297);

(statearr_30357[(8)] = inst_30296__$1);

return statearr_30357;
})();
var statearr_30358_30378 = state_30336__$1;
(statearr_30358_30378[(2)] = null);

(statearr_30358_30378[(1)] = (2));


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
});})(c__28456__auto___30364,out))
;
return ((function (switch__28349__auto__,c__28456__auto___30364,out){
return (function() {
var cljs$core$async$state_machine__28350__auto__ = null;
var cljs$core$async$state_machine__28350__auto____0 = (function (){
var statearr_30359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30359[(0)] = cljs$core$async$state_machine__28350__auto__);

(statearr_30359[(1)] = (1));

return statearr_30359;
});
var cljs$core$async$state_machine__28350__auto____1 = (function (state_30336){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_30336);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e30360){if((e30360 instanceof Object)){
var ex__28353__auto__ = e30360;
var statearr_30361_30379 = state_30336;
(statearr_30361_30379[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30336);

return cljs.core.cst$kw$recur;
} else {
throw e30360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__30380 = state_30336;
state_30336 = G__30380;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
cljs$core$async$state_machine__28350__auto__ = function(state_30336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28350__auto____1.call(this,state_30336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28350__auto____0;
cljs$core$async$state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28350__auto____1;
return cljs$core$async$state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto___30364,out))
})();
var state__28458__auto__ = (function (){var statearr_30362 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_30362[(6)] = c__28456__auto___30364);

return statearr_30362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto___30364,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

