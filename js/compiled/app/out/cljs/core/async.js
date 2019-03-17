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
var G__26816 = arguments.length;
switch (G__26816) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26817 = (function (f,blockable,meta26818){
this.f = f;
this.blockable = blockable;
this.meta26818 = meta26818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26819,meta26818__$1){
var self__ = this;
var _26819__$1 = this;
return (new cljs.core.async.t_cljs$core$async26817(self__.f,self__.blockable,meta26818__$1));
});

cljs.core.async.t_cljs$core$async26817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26819){
var self__ = this;
var _26819__$1 = this;
return self__.meta26818;
});

cljs.core.async.t_cljs$core$async26817.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26817.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta26818], null);
});

cljs.core.async.t_cljs$core$async26817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26817";

cljs.core.async.t_cljs$core$async26817.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26817");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26817.
 */
cljs.core.async.__GT_t_cljs$core$async26817 = (function cljs$core$async$__GT_t_cljs$core$async26817(f__$1,blockable__$1,meta26818){
return (new cljs.core.async.t_cljs$core$async26817(f__$1,blockable__$1,meta26818));
});

}

return (new cljs.core.async.t_cljs$core$async26817(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26823 = arguments.length;
switch (G__26823) {
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
var G__26826 = arguments.length;
switch (G__26826) {
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
var G__26829 = arguments.length;
switch (G__26829) {
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
var val_26831 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26831) : fn1.call(null,val_26831));
} else {
cljs.core.async.impl.dispatch.run(((function (val_26831,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26831) : fn1.call(null,val_26831));
});})(val_26831,ret))
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
var G__26833 = arguments.length;
switch (G__26833) {
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
var n__4607__auto___26835 = n;
var x_26836 = (0);
while(true){
if((x_26836 < n__4607__auto___26835)){
(a[x_26836] = (0));

var G__26837 = (x_26836 + (1));
x_26836 = G__26837;
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

var G__26838 = (i + (1));
i = G__26838;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26839 = (function (flag,meta26840){
this.flag = flag;
this.meta26840 = meta26840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26841,meta26840__$1){
var self__ = this;
var _26841__$1 = this;
return (new cljs.core.async.t_cljs$core$async26839(self__.flag,meta26840__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26841){
var self__ = this;
var _26841__$1 = this;
return self__.meta26840;
});})(flag))
;

cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26839.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta26840], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26839.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26839";

cljs.core.async.t_cljs$core$async26839.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26839");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26839.
 */
cljs.core.async.__GT_t_cljs$core$async26839 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26839(flag__$1,meta26840){
return (new cljs.core.async.t_cljs$core$async26839(flag__$1,meta26840));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26839(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26842 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26842 = (function (flag,cb,meta26843){
this.flag = flag;
this.cb = cb;
this.meta26843 = meta26843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26844,meta26843__$1){
var self__ = this;
var _26844__$1 = this;
return (new cljs.core.async.t_cljs$core$async26842(self__.flag,self__.cb,meta26843__$1));
});

cljs.core.async.t_cljs$core$async26842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26844){
var self__ = this;
var _26844__$1 = this;
return self__.meta26843;
});

cljs.core.async.t_cljs$core$async26842.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26842.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async26842.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26842.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta26843], null);
});

cljs.core.async.t_cljs$core$async26842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26842";

cljs.core.async.t_cljs$core$async26842.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26842");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26842.
 */
cljs.core.async.__GT_t_cljs$core$async26842 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26842(flag__$1,cb__$1,meta26843){
return (new cljs.core.async.t_cljs$core$async26842(flag__$1,cb__$1,meta26843));
});

}

return (new cljs.core.async.t_cljs$core$async26842(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26845_SHARP_){
var G__26847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26845_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26847) : fret.call(null,G__26847));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26846_SHARP_){
var G__26848 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26846_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26848) : fret.call(null,G__26848));
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
var G__26849 = (i + (1));
i = G__26849;
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
var len__4730__auto___26855 = arguments.length;
var i__4731__auto___26856 = (0);
while(true){
if((i__4731__auto___26856 < len__4730__auto___26855)){
args__4736__auto__.push((arguments[i__4731__auto___26856]));

var G__26857 = (i__4731__auto___26856 + (1));
i__4731__auto___26856 = G__26857;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26852){
var map__26853 = p__26852;
var map__26853__$1 = (((((!((map__26853 == null))))?(((((map__26853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26853):map__26853);
var opts = map__26853__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26850){
var G__26851 = cljs.core.first(seq26850);
var seq26850__$1 = cljs.core.next(seq26850);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26851,seq26850__$1);
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
var G__26859 = arguments.length;
switch (G__26859) {
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
var c__26756__auto___26905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto___26905){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto___26905){
return (function (state_26883){
var state_val_26884 = (state_26883[(1)]);
if((state_val_26884 === (7))){
var inst_26879 = (state_26883[(2)]);
var state_26883__$1 = state_26883;
var statearr_26885_26906 = state_26883__$1;
(statearr_26885_26906[(2)] = inst_26879);

(statearr_26885_26906[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26884 === (1))){
var state_26883__$1 = state_26883;
var statearr_26886_26907 = state_26883__$1;
(statearr_26886_26907[(2)] = null);

(statearr_26886_26907[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26884 === (4))){
var inst_26862 = (state_26883[(7)]);
var inst_26862__$1 = (state_26883[(2)]);
var inst_26863 = (inst_26862__$1 == null);
var state_26883__$1 = (function (){var statearr_26887 = state_26883;
(statearr_26887[(7)] = inst_26862__$1);

return statearr_26887;
})();
if(cljs.core.truth_(inst_26863)){
var statearr_26888_26908 = state_26883__$1;
(statearr_26888_26908[(1)] = (5));

} else {
var statearr_26889_26909 = state_26883__$1;
(statearr_26889_26909[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26884 === (13))){
var state_26883__$1 = state_26883;
var statearr_26890_26910 = state_26883__$1;
(statearr_26890_26910[(2)] = null);

(statearr_26890_26910[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26884 === (6))){
var inst_26862 = (state_26883[(7)]);
var state_26883__$1 = state_26883;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26883__$1,(11),to,inst_26862);
} else {
if((state_val_26884 === (3))){
var inst_26881 = (state_26883[(2)]);
var state_26883__$1 = state_26883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26883__$1,inst_26881);
} else {
if((state_val_26884 === (12))){
var state_26883__$1 = state_26883;
var statearr_26891_26911 = state_26883__$1;
(statearr_26891_26911[(2)] = null);

(statearr_26891_26911[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26884 === (2))){
var state_26883__$1 = state_26883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26883__$1,(4),from);
} else {
if((state_val_26884 === (11))){
var inst_26872 = (state_26883[(2)]);
var state_26883__$1 = state_26883;
if(cljs.core.truth_(inst_26872)){
var statearr_26892_26912 = state_26883__$1;
(statearr_26892_26912[(1)] = (12));

} else {
var statearr_26893_26913 = state_26883__$1;
(statearr_26893_26913[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26884 === (9))){
var state_26883__$1 = state_26883;
var statearr_26894_26914 = state_26883__$1;
(statearr_26894_26914[(2)] = null);

(statearr_26894_26914[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26884 === (5))){
var state_26883__$1 = state_26883;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26895_26915 = state_26883__$1;
(statearr_26895_26915[(1)] = (8));

} else {
var statearr_26896_26916 = state_26883__$1;
(statearr_26896_26916[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26884 === (14))){
var inst_26877 = (state_26883[(2)]);
var state_26883__$1 = state_26883;
var statearr_26897_26917 = state_26883__$1;
(statearr_26897_26917[(2)] = inst_26877);

(statearr_26897_26917[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26884 === (10))){
var inst_26869 = (state_26883[(2)]);
var state_26883__$1 = state_26883;
var statearr_26898_26918 = state_26883__$1;
(statearr_26898_26918[(2)] = inst_26869);

(statearr_26898_26918[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26884 === (8))){
var inst_26866 = cljs.core.async.close_BANG_(to);
var state_26883__$1 = state_26883;
var statearr_26899_26919 = state_26883__$1;
(statearr_26899_26919[(2)] = inst_26866);

(statearr_26899_26919[(1)] = (10));


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
});})(c__26756__auto___26905))
;
return ((function (switch__26649__auto__,c__26756__auto___26905){
return (function() {
var cljs$core$async$state_machine__26650__auto__ = null;
var cljs$core$async$state_machine__26650__auto____0 = (function (){
var statearr_26900 = [null,null,null,null,null,null,null,null];
(statearr_26900[(0)] = cljs$core$async$state_machine__26650__auto__);

(statearr_26900[(1)] = (1));

return statearr_26900;
});
var cljs$core$async$state_machine__26650__auto____1 = (function (state_26883){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_26883);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e26901){if((e26901 instanceof Object)){
var ex__26653__auto__ = e26901;
var statearr_26902_26920 = state_26883;
(statearr_26902_26920[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26883);

return cljs.core.cst$kw$recur;
} else {
throw e26901;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__26921 = state_26883;
state_26883 = G__26921;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$state_machine__26650__auto__ = function(state_26883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26650__auto____1.call(this,state_26883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26650__auto____0;
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26650__auto____1;
return cljs$core$async$state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto___26905))
})();
var state__26758__auto__ = (function (){var statearr_26903 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_26903[(6)] = c__26756__auto___26905);

return statearr_26903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto___26905))
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
return (function (p__26922){
var vec__26923 = p__26922;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26923,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26923,(1),null);
var job = vec__26923;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__26756__auto___27094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto___27094,res,vec__26923,v,p,job,jobs,results){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto___27094,res,vec__26923,v,p,job,jobs,results){
return (function (state_26930){
var state_val_26931 = (state_26930[(1)]);
if((state_val_26931 === (1))){
var state_26930__$1 = state_26930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26930__$1,(2),res,v);
} else {
if((state_val_26931 === (2))){
var inst_26927 = (state_26930[(2)]);
var inst_26928 = cljs.core.async.close_BANG_(res);
var state_26930__$1 = (function (){var statearr_26932 = state_26930;
(statearr_26932[(7)] = inst_26927);

return statearr_26932;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26930__$1,inst_26928);
} else {
return null;
}
}
});})(c__26756__auto___27094,res,vec__26923,v,p,job,jobs,results))
;
return ((function (switch__26649__auto__,c__26756__auto___27094,res,vec__26923,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____0 = (function (){
var statearr_26933 = [null,null,null,null,null,null,null,null];
(statearr_26933[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__);

(statearr_26933[(1)] = (1));

return statearr_26933;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____1 = (function (state_26930){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_26930);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e26934){if((e26934 instanceof Object)){
var ex__26653__auto__ = e26934;
var statearr_26935_27095 = state_26930;
(statearr_26935_27095[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26930);

return cljs.core.cst$kw$recur;
} else {
throw e26934;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__27096 = state_26930;
state_26930 = G__27096;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__ = function(state_26930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____1.call(this,state_26930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto___27094,res,vec__26923,v,p,job,jobs,results))
})();
var state__26758__auto__ = (function (){var statearr_26936 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_26936[(6)] = c__26756__auto___27094);

return statearr_26936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto___27094,res,vec__26923,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26937){
var vec__26938 = p__26937;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26938,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26938,(1),null);
var job = vec__26938;
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
var n__4607__auto___27097 = n;
var __27098 = (0);
while(true){
if((__27098 < n__4607__auto___27097)){
var G__26941_27099 = type;
var G__26941_27100__$1 = (((G__26941_27099 instanceof cljs.core.Keyword))?G__26941_27099.fqn:null);
switch (G__26941_27100__$1) {
case "compute":
var c__26756__auto___27102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27098,c__26756__auto___27102,G__26941_27099,G__26941_27100__$1,n__4607__auto___27097,jobs,results,process,async){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (__27098,c__26756__auto___27102,G__26941_27099,G__26941_27100__$1,n__4607__auto___27097,jobs,results,process,async){
return (function (state_26954){
var state_val_26955 = (state_26954[(1)]);
if((state_val_26955 === (1))){
var state_26954__$1 = state_26954;
var statearr_26956_27103 = state_26954__$1;
(statearr_26956_27103[(2)] = null);

(statearr_26956_27103[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26955 === (2))){
var state_26954__$1 = state_26954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26954__$1,(4),jobs);
} else {
if((state_val_26955 === (3))){
var inst_26952 = (state_26954[(2)]);
var state_26954__$1 = state_26954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26954__$1,inst_26952);
} else {
if((state_val_26955 === (4))){
var inst_26944 = (state_26954[(2)]);
var inst_26945 = process(inst_26944);
var state_26954__$1 = state_26954;
if(cljs.core.truth_(inst_26945)){
var statearr_26957_27104 = state_26954__$1;
(statearr_26957_27104[(1)] = (5));

} else {
var statearr_26958_27105 = state_26954__$1;
(statearr_26958_27105[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26955 === (5))){
var state_26954__$1 = state_26954;
var statearr_26959_27106 = state_26954__$1;
(statearr_26959_27106[(2)] = null);

(statearr_26959_27106[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26955 === (6))){
var state_26954__$1 = state_26954;
var statearr_26960_27107 = state_26954__$1;
(statearr_26960_27107[(2)] = null);

(statearr_26960_27107[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26955 === (7))){
var inst_26950 = (state_26954[(2)]);
var state_26954__$1 = state_26954;
var statearr_26961_27108 = state_26954__$1;
(statearr_26961_27108[(2)] = inst_26950);

(statearr_26961_27108[(1)] = (3));


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
});})(__27098,c__26756__auto___27102,G__26941_27099,G__26941_27100__$1,n__4607__auto___27097,jobs,results,process,async))
;
return ((function (__27098,switch__26649__auto__,c__26756__auto___27102,G__26941_27099,G__26941_27100__$1,n__4607__auto___27097,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____0 = (function (){
var statearr_26962 = [null,null,null,null,null,null,null];
(statearr_26962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__);

(statearr_26962[(1)] = (1));

return statearr_26962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____1 = (function (state_26954){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_26954);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e26963){if((e26963 instanceof Object)){
var ex__26653__auto__ = e26963;
var statearr_26964_27109 = state_26954;
(statearr_26964_27109[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26954);

return cljs.core.cst$kw$recur;
} else {
throw e26963;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__27110 = state_26954;
state_26954 = G__27110;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__ = function(state_26954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____1.call(this,state_26954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__;
})()
;})(__27098,switch__26649__auto__,c__26756__auto___27102,G__26941_27099,G__26941_27100__$1,n__4607__auto___27097,jobs,results,process,async))
})();
var state__26758__auto__ = (function (){var statearr_26965 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_26965[(6)] = c__26756__auto___27102);

return statearr_26965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(__27098,c__26756__auto___27102,G__26941_27099,G__26941_27100__$1,n__4607__auto___27097,jobs,results,process,async))
);


break;
case "async":
var c__26756__auto___27111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27098,c__26756__auto___27111,G__26941_27099,G__26941_27100__$1,n__4607__auto___27097,jobs,results,process,async){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (__27098,c__26756__auto___27111,G__26941_27099,G__26941_27100__$1,n__4607__auto___27097,jobs,results,process,async){
return (function (state_26978){
var state_val_26979 = (state_26978[(1)]);
if((state_val_26979 === (1))){
var state_26978__$1 = state_26978;
var statearr_26980_27112 = state_26978__$1;
(statearr_26980_27112[(2)] = null);

(statearr_26980_27112[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26979 === (2))){
var state_26978__$1 = state_26978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26978__$1,(4),jobs);
} else {
if((state_val_26979 === (3))){
var inst_26976 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26978__$1,inst_26976);
} else {
if((state_val_26979 === (4))){
var inst_26968 = (state_26978[(2)]);
var inst_26969 = async(inst_26968);
var state_26978__$1 = state_26978;
if(cljs.core.truth_(inst_26969)){
var statearr_26981_27113 = state_26978__$1;
(statearr_26981_27113[(1)] = (5));

} else {
var statearr_26982_27114 = state_26978__$1;
(statearr_26982_27114[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26979 === (5))){
var state_26978__$1 = state_26978;
var statearr_26983_27115 = state_26978__$1;
(statearr_26983_27115[(2)] = null);

(statearr_26983_27115[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26979 === (6))){
var state_26978__$1 = state_26978;
var statearr_26984_27116 = state_26978__$1;
(statearr_26984_27116[(2)] = null);

(statearr_26984_27116[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26979 === (7))){
var inst_26974 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
var statearr_26985_27117 = state_26978__$1;
(statearr_26985_27117[(2)] = inst_26974);

(statearr_26985_27117[(1)] = (3));


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
});})(__27098,c__26756__auto___27111,G__26941_27099,G__26941_27100__$1,n__4607__auto___27097,jobs,results,process,async))
;
return ((function (__27098,switch__26649__auto__,c__26756__auto___27111,G__26941_27099,G__26941_27100__$1,n__4607__auto___27097,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____0 = (function (){
var statearr_26986 = [null,null,null,null,null,null,null];
(statearr_26986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__);

(statearr_26986[(1)] = (1));

return statearr_26986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____1 = (function (state_26978){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_26978);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e26987){if((e26987 instanceof Object)){
var ex__26653__auto__ = e26987;
var statearr_26988_27118 = state_26978;
(statearr_26988_27118[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26978);

return cljs.core.cst$kw$recur;
} else {
throw e26987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__27119 = state_26978;
state_26978 = G__27119;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__ = function(state_26978){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____1.call(this,state_26978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__;
})()
;})(__27098,switch__26649__auto__,c__26756__auto___27111,G__26941_27099,G__26941_27100__$1,n__4607__auto___27097,jobs,results,process,async))
})();
var state__26758__auto__ = (function (){var statearr_26989 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_26989[(6)] = c__26756__auto___27111);

return statearr_26989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(__27098,c__26756__auto___27111,G__26941_27099,G__26941_27100__$1,n__4607__auto___27097,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26941_27100__$1)].join('')));

}

var G__27120 = (__27098 + (1));
__27098 = G__27120;
continue;
} else {
}
break;
}

var c__26756__auto___27121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto___27121,jobs,results,process,async){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto___27121,jobs,results,process,async){
return (function (state_27011){
var state_val_27012 = (state_27011[(1)]);
if((state_val_27012 === (7))){
var inst_27007 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
var statearr_27013_27122 = state_27011__$1;
(statearr_27013_27122[(2)] = inst_27007);

(statearr_27013_27122[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27012 === (1))){
var state_27011__$1 = state_27011;
var statearr_27014_27123 = state_27011__$1;
(statearr_27014_27123[(2)] = null);

(statearr_27014_27123[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27012 === (4))){
var inst_26992 = (state_27011[(7)]);
var inst_26992__$1 = (state_27011[(2)]);
var inst_26993 = (inst_26992__$1 == null);
var state_27011__$1 = (function (){var statearr_27015 = state_27011;
(statearr_27015[(7)] = inst_26992__$1);

return statearr_27015;
})();
if(cljs.core.truth_(inst_26993)){
var statearr_27016_27124 = state_27011__$1;
(statearr_27016_27124[(1)] = (5));

} else {
var statearr_27017_27125 = state_27011__$1;
(statearr_27017_27125[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27012 === (6))){
var inst_26997 = (state_27011[(8)]);
var inst_26992 = (state_27011[(7)]);
var inst_26997__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_26998 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26999 = [inst_26992,inst_26997__$1];
var inst_27000 = (new cljs.core.PersistentVector(null,2,(5),inst_26998,inst_26999,null));
var state_27011__$1 = (function (){var statearr_27018 = state_27011;
(statearr_27018[(8)] = inst_26997__$1);

return statearr_27018;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27011__$1,(8),jobs,inst_27000);
} else {
if((state_val_27012 === (3))){
var inst_27009 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27011__$1,inst_27009);
} else {
if((state_val_27012 === (2))){
var state_27011__$1 = state_27011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27011__$1,(4),from);
} else {
if((state_val_27012 === (9))){
var inst_27004 = (state_27011[(2)]);
var state_27011__$1 = (function (){var statearr_27019 = state_27011;
(statearr_27019[(9)] = inst_27004);

return statearr_27019;
})();
var statearr_27020_27126 = state_27011__$1;
(statearr_27020_27126[(2)] = null);

(statearr_27020_27126[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27012 === (5))){
var inst_26995 = cljs.core.async.close_BANG_(jobs);
var state_27011__$1 = state_27011;
var statearr_27021_27127 = state_27011__$1;
(statearr_27021_27127[(2)] = inst_26995);

(statearr_27021_27127[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27012 === (8))){
var inst_26997 = (state_27011[(8)]);
var inst_27002 = (state_27011[(2)]);
var state_27011__$1 = (function (){var statearr_27022 = state_27011;
(statearr_27022[(10)] = inst_27002);

return statearr_27022;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27011__$1,(9),results,inst_26997);
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
});})(c__26756__auto___27121,jobs,results,process,async))
;
return ((function (switch__26649__auto__,c__26756__auto___27121,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____0 = (function (){
var statearr_27023 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__);

(statearr_27023[(1)] = (1));

return statearr_27023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____1 = (function (state_27011){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_27011);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e27024){if((e27024 instanceof Object)){
var ex__26653__auto__ = e27024;
var statearr_27025_27128 = state_27011;
(statearr_27025_27128[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27011);

return cljs.core.cst$kw$recur;
} else {
throw e27024;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__27129 = state_27011;
state_27011 = G__27129;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__ = function(state_27011){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____1.call(this,state_27011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto___27121,jobs,results,process,async))
})();
var state__26758__auto__ = (function (){var statearr_27026 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_27026[(6)] = c__26756__auto___27121);

return statearr_27026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto___27121,jobs,results,process,async))
);


var c__26756__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto__,jobs,results,process,async){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto__,jobs,results,process,async){
return (function (state_27064){
var state_val_27065 = (state_27064[(1)]);
if((state_val_27065 === (7))){
var inst_27060 = (state_27064[(2)]);
var state_27064__$1 = state_27064;
var statearr_27066_27130 = state_27064__$1;
(statearr_27066_27130[(2)] = inst_27060);

(statearr_27066_27130[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27065 === (20))){
var state_27064__$1 = state_27064;
var statearr_27067_27131 = state_27064__$1;
(statearr_27067_27131[(2)] = null);

(statearr_27067_27131[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27065 === (1))){
var state_27064__$1 = state_27064;
var statearr_27068_27132 = state_27064__$1;
(statearr_27068_27132[(2)] = null);

(statearr_27068_27132[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27065 === (4))){
var inst_27029 = (state_27064[(7)]);
var inst_27029__$1 = (state_27064[(2)]);
var inst_27030 = (inst_27029__$1 == null);
var state_27064__$1 = (function (){var statearr_27069 = state_27064;
(statearr_27069[(7)] = inst_27029__$1);

return statearr_27069;
})();
if(cljs.core.truth_(inst_27030)){
var statearr_27070_27133 = state_27064__$1;
(statearr_27070_27133[(1)] = (5));

} else {
var statearr_27071_27134 = state_27064__$1;
(statearr_27071_27134[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27065 === (15))){
var inst_27042 = (state_27064[(8)]);
var state_27064__$1 = state_27064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27064__$1,(18),to,inst_27042);
} else {
if((state_val_27065 === (21))){
var inst_27055 = (state_27064[(2)]);
var state_27064__$1 = state_27064;
var statearr_27072_27135 = state_27064__$1;
(statearr_27072_27135[(2)] = inst_27055);

(statearr_27072_27135[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27065 === (13))){
var inst_27057 = (state_27064[(2)]);
var state_27064__$1 = (function (){var statearr_27073 = state_27064;
(statearr_27073[(9)] = inst_27057);

return statearr_27073;
})();
var statearr_27074_27136 = state_27064__$1;
(statearr_27074_27136[(2)] = null);

(statearr_27074_27136[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27065 === (6))){
var inst_27029 = (state_27064[(7)]);
var state_27064__$1 = state_27064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27064__$1,(11),inst_27029);
} else {
if((state_val_27065 === (17))){
var inst_27050 = (state_27064[(2)]);
var state_27064__$1 = state_27064;
if(cljs.core.truth_(inst_27050)){
var statearr_27075_27137 = state_27064__$1;
(statearr_27075_27137[(1)] = (19));

} else {
var statearr_27076_27138 = state_27064__$1;
(statearr_27076_27138[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27065 === (3))){
var inst_27062 = (state_27064[(2)]);
var state_27064__$1 = state_27064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27064__$1,inst_27062);
} else {
if((state_val_27065 === (12))){
var inst_27039 = (state_27064[(10)]);
var state_27064__$1 = state_27064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27064__$1,(14),inst_27039);
} else {
if((state_val_27065 === (2))){
var state_27064__$1 = state_27064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27064__$1,(4),results);
} else {
if((state_val_27065 === (19))){
var state_27064__$1 = state_27064;
var statearr_27077_27139 = state_27064__$1;
(statearr_27077_27139[(2)] = null);

(statearr_27077_27139[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27065 === (11))){
var inst_27039 = (state_27064[(2)]);
var state_27064__$1 = (function (){var statearr_27078 = state_27064;
(statearr_27078[(10)] = inst_27039);

return statearr_27078;
})();
var statearr_27079_27140 = state_27064__$1;
(statearr_27079_27140[(2)] = null);

(statearr_27079_27140[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27065 === (9))){
var state_27064__$1 = state_27064;
var statearr_27080_27141 = state_27064__$1;
(statearr_27080_27141[(2)] = null);

(statearr_27080_27141[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27065 === (5))){
var state_27064__$1 = state_27064;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27081_27142 = state_27064__$1;
(statearr_27081_27142[(1)] = (8));

} else {
var statearr_27082_27143 = state_27064__$1;
(statearr_27082_27143[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27065 === (14))){
var inst_27042 = (state_27064[(8)]);
var inst_27044 = (state_27064[(11)]);
var inst_27042__$1 = (state_27064[(2)]);
var inst_27043 = (inst_27042__$1 == null);
var inst_27044__$1 = cljs.core.not(inst_27043);
var state_27064__$1 = (function (){var statearr_27083 = state_27064;
(statearr_27083[(8)] = inst_27042__$1);

(statearr_27083[(11)] = inst_27044__$1);

return statearr_27083;
})();
if(inst_27044__$1){
var statearr_27084_27144 = state_27064__$1;
(statearr_27084_27144[(1)] = (15));

} else {
var statearr_27085_27145 = state_27064__$1;
(statearr_27085_27145[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27065 === (16))){
var inst_27044 = (state_27064[(11)]);
var state_27064__$1 = state_27064;
var statearr_27086_27146 = state_27064__$1;
(statearr_27086_27146[(2)] = inst_27044);

(statearr_27086_27146[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27065 === (10))){
var inst_27036 = (state_27064[(2)]);
var state_27064__$1 = state_27064;
var statearr_27087_27147 = state_27064__$1;
(statearr_27087_27147[(2)] = inst_27036);

(statearr_27087_27147[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27065 === (18))){
var inst_27047 = (state_27064[(2)]);
var state_27064__$1 = state_27064;
var statearr_27088_27148 = state_27064__$1;
(statearr_27088_27148[(2)] = inst_27047);

(statearr_27088_27148[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27065 === (8))){
var inst_27033 = cljs.core.async.close_BANG_(to);
var state_27064__$1 = state_27064;
var statearr_27089_27149 = state_27064__$1;
(statearr_27089_27149[(2)] = inst_27033);

(statearr_27089_27149[(1)] = (10));


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
});})(c__26756__auto__,jobs,results,process,async))
;
return ((function (switch__26649__auto__,c__26756__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____0 = (function (){
var statearr_27090 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27090[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__);

(statearr_27090[(1)] = (1));

return statearr_27090;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____1 = (function (state_27064){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_27064);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e27091){if((e27091 instanceof Object)){
var ex__26653__auto__ = e27091;
var statearr_27092_27150 = state_27064;
(statearr_27092_27150[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27064);

return cljs.core.cst$kw$recur;
} else {
throw e27091;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__27151 = state_27064;
state_27064 = G__27151;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__ = function(state_27064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____1.call(this,state_27064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26650__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto__,jobs,results,process,async))
})();
var state__26758__auto__ = (function (){var statearr_27093 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_27093[(6)] = c__26756__auto__);

return statearr_27093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto__,jobs,results,process,async))
);

return c__26756__auto__;
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
var G__27153 = arguments.length;
switch (G__27153) {
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
var G__27156 = arguments.length;
switch (G__27156) {
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
var G__27159 = arguments.length;
switch (G__27159) {
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
var c__26756__auto___27208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto___27208,tc,fc){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto___27208,tc,fc){
return (function (state_27185){
var state_val_27186 = (state_27185[(1)]);
if((state_val_27186 === (7))){
var inst_27181 = (state_27185[(2)]);
var state_27185__$1 = state_27185;
var statearr_27187_27209 = state_27185__$1;
(statearr_27187_27209[(2)] = inst_27181);

(statearr_27187_27209[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27186 === (1))){
var state_27185__$1 = state_27185;
var statearr_27188_27210 = state_27185__$1;
(statearr_27188_27210[(2)] = null);

(statearr_27188_27210[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27186 === (4))){
var inst_27162 = (state_27185[(7)]);
var inst_27162__$1 = (state_27185[(2)]);
var inst_27163 = (inst_27162__$1 == null);
var state_27185__$1 = (function (){var statearr_27189 = state_27185;
(statearr_27189[(7)] = inst_27162__$1);

return statearr_27189;
})();
if(cljs.core.truth_(inst_27163)){
var statearr_27190_27211 = state_27185__$1;
(statearr_27190_27211[(1)] = (5));

} else {
var statearr_27191_27212 = state_27185__$1;
(statearr_27191_27212[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27186 === (13))){
var state_27185__$1 = state_27185;
var statearr_27192_27213 = state_27185__$1;
(statearr_27192_27213[(2)] = null);

(statearr_27192_27213[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27186 === (6))){
var inst_27162 = (state_27185[(7)]);
var inst_27168 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27162) : p.call(null,inst_27162));
var state_27185__$1 = state_27185;
if(cljs.core.truth_(inst_27168)){
var statearr_27193_27214 = state_27185__$1;
(statearr_27193_27214[(1)] = (9));

} else {
var statearr_27194_27215 = state_27185__$1;
(statearr_27194_27215[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27186 === (3))){
var inst_27183 = (state_27185[(2)]);
var state_27185__$1 = state_27185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27185__$1,inst_27183);
} else {
if((state_val_27186 === (12))){
var state_27185__$1 = state_27185;
var statearr_27195_27216 = state_27185__$1;
(statearr_27195_27216[(2)] = null);

(statearr_27195_27216[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27186 === (2))){
var state_27185__$1 = state_27185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27185__$1,(4),ch);
} else {
if((state_val_27186 === (11))){
var inst_27162 = (state_27185[(7)]);
var inst_27172 = (state_27185[(2)]);
var state_27185__$1 = state_27185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27185__$1,(8),inst_27172,inst_27162);
} else {
if((state_val_27186 === (9))){
var state_27185__$1 = state_27185;
var statearr_27196_27217 = state_27185__$1;
(statearr_27196_27217[(2)] = tc);

(statearr_27196_27217[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27186 === (5))){
var inst_27165 = cljs.core.async.close_BANG_(tc);
var inst_27166 = cljs.core.async.close_BANG_(fc);
var state_27185__$1 = (function (){var statearr_27197 = state_27185;
(statearr_27197[(8)] = inst_27165);

return statearr_27197;
})();
var statearr_27198_27218 = state_27185__$1;
(statearr_27198_27218[(2)] = inst_27166);

(statearr_27198_27218[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27186 === (14))){
var inst_27179 = (state_27185[(2)]);
var state_27185__$1 = state_27185;
var statearr_27199_27219 = state_27185__$1;
(statearr_27199_27219[(2)] = inst_27179);

(statearr_27199_27219[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27186 === (10))){
var state_27185__$1 = state_27185;
var statearr_27200_27220 = state_27185__$1;
(statearr_27200_27220[(2)] = fc);

(statearr_27200_27220[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27186 === (8))){
var inst_27174 = (state_27185[(2)]);
var state_27185__$1 = state_27185;
if(cljs.core.truth_(inst_27174)){
var statearr_27201_27221 = state_27185__$1;
(statearr_27201_27221[(1)] = (12));

} else {
var statearr_27202_27222 = state_27185__$1;
(statearr_27202_27222[(1)] = (13));

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
});})(c__26756__auto___27208,tc,fc))
;
return ((function (switch__26649__auto__,c__26756__auto___27208,tc,fc){
return (function() {
var cljs$core$async$state_machine__26650__auto__ = null;
var cljs$core$async$state_machine__26650__auto____0 = (function (){
var statearr_27203 = [null,null,null,null,null,null,null,null,null];
(statearr_27203[(0)] = cljs$core$async$state_machine__26650__auto__);

(statearr_27203[(1)] = (1));

return statearr_27203;
});
var cljs$core$async$state_machine__26650__auto____1 = (function (state_27185){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_27185);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e27204){if((e27204 instanceof Object)){
var ex__26653__auto__ = e27204;
var statearr_27205_27223 = state_27185;
(statearr_27205_27223[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27185);

return cljs.core.cst$kw$recur;
} else {
throw e27204;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__27224 = state_27185;
state_27185 = G__27224;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$state_machine__26650__auto__ = function(state_27185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26650__auto____1.call(this,state_27185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26650__auto____0;
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26650__auto____1;
return cljs$core$async$state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto___27208,tc,fc))
})();
var state__26758__auto__ = (function (){var statearr_27206 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_27206[(6)] = c__26756__auto___27208);

return statearr_27206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto___27208,tc,fc))
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
var c__26756__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto__){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto__){
return (function (state_27245){
var state_val_27246 = (state_27245[(1)]);
if((state_val_27246 === (7))){
var inst_27241 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27247_27265 = state_27245__$1;
(statearr_27247_27265[(2)] = inst_27241);

(statearr_27247_27265[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27246 === (1))){
var inst_27225 = init;
var state_27245__$1 = (function (){var statearr_27248 = state_27245;
(statearr_27248[(7)] = inst_27225);

return statearr_27248;
})();
var statearr_27249_27266 = state_27245__$1;
(statearr_27249_27266[(2)] = null);

(statearr_27249_27266[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27246 === (4))){
var inst_27228 = (state_27245[(8)]);
var inst_27228__$1 = (state_27245[(2)]);
var inst_27229 = (inst_27228__$1 == null);
var state_27245__$1 = (function (){var statearr_27250 = state_27245;
(statearr_27250[(8)] = inst_27228__$1);

return statearr_27250;
})();
if(cljs.core.truth_(inst_27229)){
var statearr_27251_27267 = state_27245__$1;
(statearr_27251_27267[(1)] = (5));

} else {
var statearr_27252_27268 = state_27245__$1;
(statearr_27252_27268[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27246 === (6))){
var inst_27232 = (state_27245[(9)]);
var inst_27228 = (state_27245[(8)]);
var inst_27225 = (state_27245[(7)]);
var inst_27232__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_27225,inst_27228) : f.call(null,inst_27225,inst_27228));
var inst_27233 = cljs.core.reduced_QMARK_(inst_27232__$1);
var state_27245__$1 = (function (){var statearr_27253 = state_27245;
(statearr_27253[(9)] = inst_27232__$1);

return statearr_27253;
})();
if(inst_27233){
var statearr_27254_27269 = state_27245__$1;
(statearr_27254_27269[(1)] = (8));

} else {
var statearr_27255_27270 = state_27245__$1;
(statearr_27255_27270[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27246 === (3))){
var inst_27243 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27245__$1,inst_27243);
} else {
if((state_val_27246 === (2))){
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27245__$1,(4),ch);
} else {
if((state_val_27246 === (9))){
var inst_27232 = (state_27245[(9)]);
var inst_27225 = inst_27232;
var state_27245__$1 = (function (){var statearr_27256 = state_27245;
(statearr_27256[(7)] = inst_27225);

return statearr_27256;
})();
var statearr_27257_27271 = state_27245__$1;
(statearr_27257_27271[(2)] = null);

(statearr_27257_27271[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27246 === (5))){
var inst_27225 = (state_27245[(7)]);
var state_27245__$1 = state_27245;
var statearr_27258_27272 = state_27245__$1;
(statearr_27258_27272[(2)] = inst_27225);

(statearr_27258_27272[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27246 === (10))){
var inst_27239 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27259_27273 = state_27245__$1;
(statearr_27259_27273[(2)] = inst_27239);

(statearr_27259_27273[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27246 === (8))){
var inst_27232 = (state_27245[(9)]);
var inst_27235 = cljs.core.deref(inst_27232);
var state_27245__$1 = state_27245;
var statearr_27260_27274 = state_27245__$1;
(statearr_27260_27274[(2)] = inst_27235);

(statearr_27260_27274[(1)] = (10));


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
});})(c__26756__auto__))
;
return ((function (switch__26649__auto__,c__26756__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26650__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26650__auto____0 = (function (){
var statearr_27261 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27261[(0)] = cljs$core$async$reduce_$_state_machine__26650__auto__);

(statearr_27261[(1)] = (1));

return statearr_27261;
});
var cljs$core$async$reduce_$_state_machine__26650__auto____1 = (function (state_27245){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_27245);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e27262){if((e27262 instanceof Object)){
var ex__26653__auto__ = e27262;
var statearr_27263_27275 = state_27245;
(statearr_27263_27275[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27245);

return cljs.core.cst$kw$recur;
} else {
throw e27262;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__27276 = state_27245;
state_27245 = G__27276;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26650__auto__ = function(state_27245){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26650__auto____1.call(this,state_27245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26650__auto____0;
cljs$core$async$reduce_$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26650__auto____1;
return cljs$core$async$reduce_$_state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto__))
})();
var state__26758__auto__ = (function (){var statearr_27264 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_27264[(6)] = c__26756__auto__);

return statearr_27264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto__))
);

return c__26756__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__26756__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto__,f__$1){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto__,f__$1){
return (function (state_27282){
var state_val_27283 = (state_27282[(1)]);
if((state_val_27283 === (1))){
var inst_27277 = cljs.core.async.reduce(f__$1,init,ch);
var state_27282__$1 = state_27282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27282__$1,(2),inst_27277);
} else {
if((state_val_27283 === (2))){
var inst_27279 = (state_27282[(2)]);
var inst_27280 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_27279) : f__$1.call(null,inst_27279));
var state_27282__$1 = state_27282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27282__$1,inst_27280);
} else {
return null;
}
}
});})(c__26756__auto__,f__$1))
;
return ((function (switch__26649__auto__,c__26756__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26650__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26650__auto____0 = (function (){
var statearr_27284 = [null,null,null,null,null,null,null];
(statearr_27284[(0)] = cljs$core$async$transduce_$_state_machine__26650__auto__);

(statearr_27284[(1)] = (1));

return statearr_27284;
});
var cljs$core$async$transduce_$_state_machine__26650__auto____1 = (function (state_27282){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_27282);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e27285){if((e27285 instanceof Object)){
var ex__26653__auto__ = e27285;
var statearr_27286_27288 = state_27282;
(statearr_27286_27288[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27282);

return cljs.core.cst$kw$recur;
} else {
throw e27285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__27289 = state_27282;
state_27282 = G__27289;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26650__auto__ = function(state_27282){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26650__auto____1.call(this,state_27282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26650__auto____0;
cljs$core$async$transduce_$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26650__auto____1;
return cljs$core$async$transduce_$_state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto__,f__$1))
})();
var state__26758__auto__ = (function (){var statearr_27287 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_27287[(6)] = c__26756__auto__);

return statearr_27287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto__,f__$1))
);

return c__26756__auto__;
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
var G__27291 = arguments.length;
switch (G__27291) {
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
var c__26756__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto__){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto__){
return (function (state_27316){
var state_val_27317 = (state_27316[(1)]);
if((state_val_27317 === (7))){
var inst_27298 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27318_27339 = state_27316__$1;
(statearr_27318_27339[(2)] = inst_27298);

(statearr_27318_27339[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (1))){
var inst_27292 = cljs.core.seq(coll);
var inst_27293 = inst_27292;
var state_27316__$1 = (function (){var statearr_27319 = state_27316;
(statearr_27319[(7)] = inst_27293);

return statearr_27319;
})();
var statearr_27320_27340 = state_27316__$1;
(statearr_27320_27340[(2)] = null);

(statearr_27320_27340[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (4))){
var inst_27293 = (state_27316[(7)]);
var inst_27296 = cljs.core.first(inst_27293);
var state_27316__$1 = state_27316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27316__$1,(7),ch,inst_27296);
} else {
if((state_val_27317 === (13))){
var inst_27310 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27321_27341 = state_27316__$1;
(statearr_27321_27341[(2)] = inst_27310);

(statearr_27321_27341[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (6))){
var inst_27301 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
if(cljs.core.truth_(inst_27301)){
var statearr_27322_27342 = state_27316__$1;
(statearr_27322_27342[(1)] = (8));

} else {
var statearr_27323_27343 = state_27316__$1;
(statearr_27323_27343[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (3))){
var inst_27314 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27316__$1,inst_27314);
} else {
if((state_val_27317 === (12))){
var state_27316__$1 = state_27316;
var statearr_27324_27344 = state_27316__$1;
(statearr_27324_27344[(2)] = null);

(statearr_27324_27344[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (2))){
var inst_27293 = (state_27316[(7)]);
var state_27316__$1 = state_27316;
if(cljs.core.truth_(inst_27293)){
var statearr_27325_27345 = state_27316__$1;
(statearr_27325_27345[(1)] = (4));

} else {
var statearr_27326_27346 = state_27316__$1;
(statearr_27326_27346[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (11))){
var inst_27307 = cljs.core.async.close_BANG_(ch);
var state_27316__$1 = state_27316;
var statearr_27327_27347 = state_27316__$1;
(statearr_27327_27347[(2)] = inst_27307);

(statearr_27327_27347[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (9))){
var state_27316__$1 = state_27316;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27328_27348 = state_27316__$1;
(statearr_27328_27348[(1)] = (11));

} else {
var statearr_27329_27349 = state_27316__$1;
(statearr_27329_27349[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (5))){
var inst_27293 = (state_27316[(7)]);
var state_27316__$1 = state_27316;
var statearr_27330_27350 = state_27316__$1;
(statearr_27330_27350[(2)] = inst_27293);

(statearr_27330_27350[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (10))){
var inst_27312 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27331_27351 = state_27316__$1;
(statearr_27331_27351[(2)] = inst_27312);

(statearr_27331_27351[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (8))){
var inst_27293 = (state_27316[(7)]);
var inst_27303 = cljs.core.next(inst_27293);
var inst_27293__$1 = inst_27303;
var state_27316__$1 = (function (){var statearr_27332 = state_27316;
(statearr_27332[(7)] = inst_27293__$1);

return statearr_27332;
})();
var statearr_27333_27352 = state_27316__$1;
(statearr_27333_27352[(2)] = null);

(statearr_27333_27352[(1)] = (2));


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
});})(c__26756__auto__))
;
return ((function (switch__26649__auto__,c__26756__auto__){
return (function() {
var cljs$core$async$state_machine__26650__auto__ = null;
var cljs$core$async$state_machine__26650__auto____0 = (function (){
var statearr_27334 = [null,null,null,null,null,null,null,null];
(statearr_27334[(0)] = cljs$core$async$state_machine__26650__auto__);

(statearr_27334[(1)] = (1));

return statearr_27334;
});
var cljs$core$async$state_machine__26650__auto____1 = (function (state_27316){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_27316);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e27335){if((e27335 instanceof Object)){
var ex__26653__auto__ = e27335;
var statearr_27336_27353 = state_27316;
(statearr_27336_27353[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27316);

return cljs.core.cst$kw$recur;
} else {
throw e27335;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__27354 = state_27316;
state_27316 = G__27354;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$state_machine__26650__auto__ = function(state_27316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26650__auto____1.call(this,state_27316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26650__auto____0;
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26650__auto____1;
return cljs$core$async$state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto__))
})();
var state__26758__auto__ = (function (){var statearr_27337 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_27337[(6)] = c__26756__auto__);

return statearr_27337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto__))
);

return c__26756__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27355 = (function (ch,cs,meta27356){
this.ch = ch;
this.cs = cs;
this.meta27356 = meta27356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27357,meta27356__$1){
var self__ = this;
var _27357__$1 = this;
return (new cljs.core.async.t_cljs$core$async27355(self__.ch,self__.cs,meta27356__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27357){
var self__ = this;
var _27357__$1 = this;
return self__.meta27356;
});})(cs))
;

cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27355.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta27356], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27355";

cljs.core.async.t_cljs$core$async27355.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27355");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27355.
 */
cljs.core.async.__GT_t_cljs$core$async27355 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27355(ch__$1,cs__$1,meta27356){
return (new cljs.core.async.t_cljs$core$async27355(ch__$1,cs__$1,meta27356));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27355(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26756__auto___27577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto___27577,cs,m,dchan,dctr,done){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto___27577,cs,m,dchan,dctr,done){
return (function (state_27492){
var state_val_27493 = (state_27492[(1)]);
if((state_val_27493 === (7))){
var inst_27488 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27494_27578 = state_27492__$1;
(statearr_27494_27578[(2)] = inst_27488);

(statearr_27494_27578[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (20))){
var inst_27391 = (state_27492[(7)]);
var inst_27403 = cljs.core.first(inst_27391);
var inst_27404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27403,(0),null);
var inst_27405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27403,(1),null);
var state_27492__$1 = (function (){var statearr_27495 = state_27492;
(statearr_27495[(8)] = inst_27404);

return statearr_27495;
})();
if(cljs.core.truth_(inst_27405)){
var statearr_27496_27579 = state_27492__$1;
(statearr_27496_27579[(1)] = (22));

} else {
var statearr_27497_27580 = state_27492__$1;
(statearr_27497_27580[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (27))){
var inst_27440 = (state_27492[(9)]);
var inst_27433 = (state_27492[(10)]);
var inst_27435 = (state_27492[(11)]);
var inst_27360 = (state_27492[(12)]);
var inst_27440__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27433,inst_27435);
var inst_27441 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27440__$1,inst_27360,done);
var state_27492__$1 = (function (){var statearr_27498 = state_27492;
(statearr_27498[(9)] = inst_27440__$1);

return statearr_27498;
})();
if(cljs.core.truth_(inst_27441)){
var statearr_27499_27581 = state_27492__$1;
(statearr_27499_27581[(1)] = (30));

} else {
var statearr_27500_27582 = state_27492__$1;
(statearr_27500_27582[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (1))){
var state_27492__$1 = state_27492;
var statearr_27501_27583 = state_27492__$1;
(statearr_27501_27583[(2)] = null);

(statearr_27501_27583[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (24))){
var inst_27391 = (state_27492[(7)]);
var inst_27410 = (state_27492[(2)]);
var inst_27411 = cljs.core.next(inst_27391);
var inst_27369 = inst_27411;
var inst_27370 = null;
var inst_27371 = (0);
var inst_27372 = (0);
var state_27492__$1 = (function (){var statearr_27502 = state_27492;
(statearr_27502[(13)] = inst_27410);

(statearr_27502[(14)] = inst_27371);

(statearr_27502[(15)] = inst_27370);

(statearr_27502[(16)] = inst_27372);

(statearr_27502[(17)] = inst_27369);

return statearr_27502;
})();
var statearr_27503_27584 = state_27492__$1;
(statearr_27503_27584[(2)] = null);

(statearr_27503_27584[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (39))){
var state_27492__$1 = state_27492;
var statearr_27507_27585 = state_27492__$1;
(statearr_27507_27585[(2)] = null);

(statearr_27507_27585[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (4))){
var inst_27360 = (state_27492[(12)]);
var inst_27360__$1 = (state_27492[(2)]);
var inst_27361 = (inst_27360__$1 == null);
var state_27492__$1 = (function (){var statearr_27508 = state_27492;
(statearr_27508[(12)] = inst_27360__$1);

return statearr_27508;
})();
if(cljs.core.truth_(inst_27361)){
var statearr_27509_27586 = state_27492__$1;
(statearr_27509_27586[(1)] = (5));

} else {
var statearr_27510_27587 = state_27492__$1;
(statearr_27510_27587[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (15))){
var inst_27371 = (state_27492[(14)]);
var inst_27370 = (state_27492[(15)]);
var inst_27372 = (state_27492[(16)]);
var inst_27369 = (state_27492[(17)]);
var inst_27387 = (state_27492[(2)]);
var inst_27388 = (inst_27372 + (1));
var tmp27504 = inst_27371;
var tmp27505 = inst_27370;
var tmp27506 = inst_27369;
var inst_27369__$1 = tmp27506;
var inst_27370__$1 = tmp27505;
var inst_27371__$1 = tmp27504;
var inst_27372__$1 = inst_27388;
var state_27492__$1 = (function (){var statearr_27511 = state_27492;
(statearr_27511[(14)] = inst_27371__$1);

(statearr_27511[(18)] = inst_27387);

(statearr_27511[(15)] = inst_27370__$1);

(statearr_27511[(16)] = inst_27372__$1);

(statearr_27511[(17)] = inst_27369__$1);

return statearr_27511;
})();
var statearr_27512_27588 = state_27492__$1;
(statearr_27512_27588[(2)] = null);

(statearr_27512_27588[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (21))){
var inst_27414 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27516_27589 = state_27492__$1;
(statearr_27516_27589[(2)] = inst_27414);

(statearr_27516_27589[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (31))){
var inst_27440 = (state_27492[(9)]);
var inst_27444 = done(null);
var inst_27445 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27440);
var state_27492__$1 = (function (){var statearr_27517 = state_27492;
(statearr_27517[(19)] = inst_27444);

return statearr_27517;
})();
var statearr_27518_27590 = state_27492__$1;
(statearr_27518_27590[(2)] = inst_27445);

(statearr_27518_27590[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (32))){
var inst_27433 = (state_27492[(10)]);
var inst_27432 = (state_27492[(20)]);
var inst_27434 = (state_27492[(21)]);
var inst_27435 = (state_27492[(11)]);
var inst_27447 = (state_27492[(2)]);
var inst_27448 = (inst_27435 + (1));
var tmp27513 = inst_27433;
var tmp27514 = inst_27432;
var tmp27515 = inst_27434;
var inst_27432__$1 = tmp27514;
var inst_27433__$1 = tmp27513;
var inst_27434__$1 = tmp27515;
var inst_27435__$1 = inst_27448;
var state_27492__$1 = (function (){var statearr_27519 = state_27492;
(statearr_27519[(10)] = inst_27433__$1);

(statearr_27519[(20)] = inst_27432__$1);

(statearr_27519[(21)] = inst_27434__$1);

(statearr_27519[(11)] = inst_27435__$1);

(statearr_27519[(22)] = inst_27447);

return statearr_27519;
})();
var statearr_27520_27591 = state_27492__$1;
(statearr_27520_27591[(2)] = null);

(statearr_27520_27591[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (40))){
var inst_27460 = (state_27492[(23)]);
var inst_27464 = done(null);
var inst_27465 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27460);
var state_27492__$1 = (function (){var statearr_27521 = state_27492;
(statearr_27521[(24)] = inst_27464);

return statearr_27521;
})();
var statearr_27522_27592 = state_27492__$1;
(statearr_27522_27592[(2)] = inst_27465);

(statearr_27522_27592[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (33))){
var inst_27451 = (state_27492[(25)]);
var inst_27453 = cljs.core.chunked_seq_QMARK_(inst_27451);
var state_27492__$1 = state_27492;
if(inst_27453){
var statearr_27523_27593 = state_27492__$1;
(statearr_27523_27593[(1)] = (36));

} else {
var statearr_27524_27594 = state_27492__$1;
(statearr_27524_27594[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (13))){
var inst_27381 = (state_27492[(26)]);
var inst_27384 = cljs.core.async.close_BANG_(inst_27381);
var state_27492__$1 = state_27492;
var statearr_27525_27595 = state_27492__$1;
(statearr_27525_27595[(2)] = inst_27384);

(statearr_27525_27595[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (22))){
var inst_27404 = (state_27492[(8)]);
var inst_27407 = cljs.core.async.close_BANG_(inst_27404);
var state_27492__$1 = state_27492;
var statearr_27526_27596 = state_27492__$1;
(statearr_27526_27596[(2)] = inst_27407);

(statearr_27526_27596[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (36))){
var inst_27451 = (state_27492[(25)]);
var inst_27455 = cljs.core.chunk_first(inst_27451);
var inst_27456 = cljs.core.chunk_rest(inst_27451);
var inst_27457 = cljs.core.count(inst_27455);
var inst_27432 = inst_27456;
var inst_27433 = inst_27455;
var inst_27434 = inst_27457;
var inst_27435 = (0);
var state_27492__$1 = (function (){var statearr_27527 = state_27492;
(statearr_27527[(10)] = inst_27433);

(statearr_27527[(20)] = inst_27432);

(statearr_27527[(21)] = inst_27434);

(statearr_27527[(11)] = inst_27435);

return statearr_27527;
})();
var statearr_27528_27597 = state_27492__$1;
(statearr_27528_27597[(2)] = null);

(statearr_27528_27597[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (41))){
var inst_27451 = (state_27492[(25)]);
var inst_27467 = (state_27492[(2)]);
var inst_27468 = cljs.core.next(inst_27451);
var inst_27432 = inst_27468;
var inst_27433 = null;
var inst_27434 = (0);
var inst_27435 = (0);
var state_27492__$1 = (function (){var statearr_27529 = state_27492;
(statearr_27529[(10)] = inst_27433);

(statearr_27529[(20)] = inst_27432);

(statearr_27529[(27)] = inst_27467);

(statearr_27529[(21)] = inst_27434);

(statearr_27529[(11)] = inst_27435);

return statearr_27529;
})();
var statearr_27530_27598 = state_27492__$1;
(statearr_27530_27598[(2)] = null);

(statearr_27530_27598[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (43))){
var state_27492__$1 = state_27492;
var statearr_27531_27599 = state_27492__$1;
(statearr_27531_27599[(2)] = null);

(statearr_27531_27599[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (29))){
var inst_27476 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27532_27600 = state_27492__$1;
(statearr_27532_27600[(2)] = inst_27476);

(statearr_27532_27600[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (44))){
var inst_27485 = (state_27492[(2)]);
var state_27492__$1 = (function (){var statearr_27533 = state_27492;
(statearr_27533[(28)] = inst_27485);

return statearr_27533;
})();
var statearr_27534_27601 = state_27492__$1;
(statearr_27534_27601[(2)] = null);

(statearr_27534_27601[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (6))){
var inst_27424 = (state_27492[(29)]);
var inst_27423 = cljs.core.deref(cs);
var inst_27424__$1 = cljs.core.keys(inst_27423);
var inst_27425 = cljs.core.count(inst_27424__$1);
var inst_27426 = cljs.core.reset_BANG_(dctr,inst_27425);
var inst_27431 = cljs.core.seq(inst_27424__$1);
var inst_27432 = inst_27431;
var inst_27433 = null;
var inst_27434 = (0);
var inst_27435 = (0);
var state_27492__$1 = (function (){var statearr_27535 = state_27492;
(statearr_27535[(30)] = inst_27426);

(statearr_27535[(10)] = inst_27433);

(statearr_27535[(20)] = inst_27432);

(statearr_27535[(21)] = inst_27434);

(statearr_27535[(11)] = inst_27435);

(statearr_27535[(29)] = inst_27424__$1);

return statearr_27535;
})();
var statearr_27536_27602 = state_27492__$1;
(statearr_27536_27602[(2)] = null);

(statearr_27536_27602[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (28))){
var inst_27432 = (state_27492[(20)]);
var inst_27451 = (state_27492[(25)]);
var inst_27451__$1 = cljs.core.seq(inst_27432);
var state_27492__$1 = (function (){var statearr_27537 = state_27492;
(statearr_27537[(25)] = inst_27451__$1);

return statearr_27537;
})();
if(inst_27451__$1){
var statearr_27538_27603 = state_27492__$1;
(statearr_27538_27603[(1)] = (33));

} else {
var statearr_27539_27604 = state_27492__$1;
(statearr_27539_27604[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (25))){
var inst_27434 = (state_27492[(21)]);
var inst_27435 = (state_27492[(11)]);
var inst_27437 = (inst_27435 < inst_27434);
var inst_27438 = inst_27437;
var state_27492__$1 = state_27492;
if(cljs.core.truth_(inst_27438)){
var statearr_27540_27605 = state_27492__$1;
(statearr_27540_27605[(1)] = (27));

} else {
var statearr_27541_27606 = state_27492__$1;
(statearr_27541_27606[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (34))){
var state_27492__$1 = state_27492;
var statearr_27542_27607 = state_27492__$1;
(statearr_27542_27607[(2)] = null);

(statearr_27542_27607[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (17))){
var state_27492__$1 = state_27492;
var statearr_27543_27608 = state_27492__$1;
(statearr_27543_27608[(2)] = null);

(statearr_27543_27608[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (3))){
var inst_27490 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27492__$1,inst_27490);
} else {
if((state_val_27493 === (12))){
var inst_27419 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27544_27609 = state_27492__$1;
(statearr_27544_27609[(2)] = inst_27419);

(statearr_27544_27609[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (2))){
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27492__$1,(4),ch);
} else {
if((state_val_27493 === (23))){
var state_27492__$1 = state_27492;
var statearr_27545_27610 = state_27492__$1;
(statearr_27545_27610[(2)] = null);

(statearr_27545_27610[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (35))){
var inst_27474 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27546_27611 = state_27492__$1;
(statearr_27546_27611[(2)] = inst_27474);

(statearr_27546_27611[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (19))){
var inst_27391 = (state_27492[(7)]);
var inst_27395 = cljs.core.chunk_first(inst_27391);
var inst_27396 = cljs.core.chunk_rest(inst_27391);
var inst_27397 = cljs.core.count(inst_27395);
var inst_27369 = inst_27396;
var inst_27370 = inst_27395;
var inst_27371 = inst_27397;
var inst_27372 = (0);
var state_27492__$1 = (function (){var statearr_27547 = state_27492;
(statearr_27547[(14)] = inst_27371);

(statearr_27547[(15)] = inst_27370);

(statearr_27547[(16)] = inst_27372);

(statearr_27547[(17)] = inst_27369);

return statearr_27547;
})();
var statearr_27548_27612 = state_27492__$1;
(statearr_27548_27612[(2)] = null);

(statearr_27548_27612[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (11))){
var inst_27391 = (state_27492[(7)]);
var inst_27369 = (state_27492[(17)]);
var inst_27391__$1 = cljs.core.seq(inst_27369);
var state_27492__$1 = (function (){var statearr_27549 = state_27492;
(statearr_27549[(7)] = inst_27391__$1);

return statearr_27549;
})();
if(inst_27391__$1){
var statearr_27550_27613 = state_27492__$1;
(statearr_27550_27613[(1)] = (16));

} else {
var statearr_27551_27614 = state_27492__$1;
(statearr_27551_27614[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (9))){
var inst_27421 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27552_27615 = state_27492__$1;
(statearr_27552_27615[(2)] = inst_27421);

(statearr_27552_27615[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (5))){
var inst_27367 = cljs.core.deref(cs);
var inst_27368 = cljs.core.seq(inst_27367);
var inst_27369 = inst_27368;
var inst_27370 = null;
var inst_27371 = (0);
var inst_27372 = (0);
var state_27492__$1 = (function (){var statearr_27553 = state_27492;
(statearr_27553[(14)] = inst_27371);

(statearr_27553[(15)] = inst_27370);

(statearr_27553[(16)] = inst_27372);

(statearr_27553[(17)] = inst_27369);

return statearr_27553;
})();
var statearr_27554_27616 = state_27492__$1;
(statearr_27554_27616[(2)] = null);

(statearr_27554_27616[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (14))){
var state_27492__$1 = state_27492;
var statearr_27555_27617 = state_27492__$1;
(statearr_27555_27617[(2)] = null);

(statearr_27555_27617[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (45))){
var inst_27482 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27556_27618 = state_27492__$1;
(statearr_27556_27618[(2)] = inst_27482);

(statearr_27556_27618[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (26))){
var inst_27424 = (state_27492[(29)]);
var inst_27478 = (state_27492[(2)]);
var inst_27479 = cljs.core.seq(inst_27424);
var state_27492__$1 = (function (){var statearr_27557 = state_27492;
(statearr_27557[(31)] = inst_27478);

return statearr_27557;
})();
if(inst_27479){
var statearr_27558_27619 = state_27492__$1;
(statearr_27558_27619[(1)] = (42));

} else {
var statearr_27559_27620 = state_27492__$1;
(statearr_27559_27620[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (16))){
var inst_27391 = (state_27492[(7)]);
var inst_27393 = cljs.core.chunked_seq_QMARK_(inst_27391);
var state_27492__$1 = state_27492;
if(inst_27393){
var statearr_27560_27621 = state_27492__$1;
(statearr_27560_27621[(1)] = (19));

} else {
var statearr_27561_27622 = state_27492__$1;
(statearr_27561_27622[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (38))){
var inst_27471 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27562_27623 = state_27492__$1;
(statearr_27562_27623[(2)] = inst_27471);

(statearr_27562_27623[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (30))){
var state_27492__$1 = state_27492;
var statearr_27563_27624 = state_27492__$1;
(statearr_27563_27624[(2)] = null);

(statearr_27563_27624[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (10))){
var inst_27370 = (state_27492[(15)]);
var inst_27372 = (state_27492[(16)]);
var inst_27380 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27370,inst_27372);
var inst_27381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27380,(0),null);
var inst_27382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27380,(1),null);
var state_27492__$1 = (function (){var statearr_27564 = state_27492;
(statearr_27564[(26)] = inst_27381);

return statearr_27564;
})();
if(cljs.core.truth_(inst_27382)){
var statearr_27565_27625 = state_27492__$1;
(statearr_27565_27625[(1)] = (13));

} else {
var statearr_27566_27626 = state_27492__$1;
(statearr_27566_27626[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (18))){
var inst_27417 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27567_27627 = state_27492__$1;
(statearr_27567_27627[(2)] = inst_27417);

(statearr_27567_27627[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (42))){
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27492__$1,(45),dchan);
} else {
if((state_val_27493 === (37))){
var inst_27451 = (state_27492[(25)]);
var inst_27460 = (state_27492[(23)]);
var inst_27360 = (state_27492[(12)]);
var inst_27460__$1 = cljs.core.first(inst_27451);
var inst_27461 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27460__$1,inst_27360,done);
var state_27492__$1 = (function (){var statearr_27568 = state_27492;
(statearr_27568[(23)] = inst_27460__$1);

return statearr_27568;
})();
if(cljs.core.truth_(inst_27461)){
var statearr_27569_27628 = state_27492__$1;
(statearr_27569_27628[(1)] = (39));

} else {
var statearr_27570_27629 = state_27492__$1;
(statearr_27570_27629[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27493 === (8))){
var inst_27371 = (state_27492[(14)]);
var inst_27372 = (state_27492[(16)]);
var inst_27374 = (inst_27372 < inst_27371);
var inst_27375 = inst_27374;
var state_27492__$1 = state_27492;
if(cljs.core.truth_(inst_27375)){
var statearr_27571_27630 = state_27492__$1;
(statearr_27571_27630[(1)] = (10));

} else {
var statearr_27572_27631 = state_27492__$1;
(statearr_27572_27631[(1)] = (11));

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
});})(c__26756__auto___27577,cs,m,dchan,dctr,done))
;
return ((function (switch__26649__auto__,c__26756__auto___27577,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26650__auto__ = null;
var cljs$core$async$mult_$_state_machine__26650__auto____0 = (function (){
var statearr_27573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27573[(0)] = cljs$core$async$mult_$_state_machine__26650__auto__);

(statearr_27573[(1)] = (1));

return statearr_27573;
});
var cljs$core$async$mult_$_state_machine__26650__auto____1 = (function (state_27492){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_27492);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e27574){if((e27574 instanceof Object)){
var ex__26653__auto__ = e27574;
var statearr_27575_27632 = state_27492;
(statearr_27575_27632[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27492);

return cljs.core.cst$kw$recur;
} else {
throw e27574;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__27633 = state_27492;
state_27492 = G__27633;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26650__auto__ = function(state_27492){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26650__auto____1.call(this,state_27492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26650__auto____0;
cljs$core$async$mult_$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26650__auto____1;
return cljs$core$async$mult_$_state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto___27577,cs,m,dchan,dctr,done))
})();
var state__26758__auto__ = (function (){var statearr_27576 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_27576[(6)] = c__26756__auto___27577);

return statearr_27576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto___27577,cs,m,dchan,dctr,done))
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
var G__27635 = arguments.length;
switch (G__27635) {
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
var len__4730__auto___27647 = arguments.length;
var i__4731__auto___27648 = (0);
while(true){
if((i__4731__auto___27648 < len__4730__auto___27647)){
args__4736__auto__.push((arguments[i__4731__auto___27648]));

var G__27649 = (i__4731__auto___27648 + (1));
i__4731__auto___27648 = G__27649;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27641){
var map__27642 = p__27641;
var map__27642__$1 = (((((!((map__27642 == null))))?(((((map__27642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27642):map__27642);
var opts = map__27642__$1;
var statearr_27644_27650 = state;
(statearr_27644_27650[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__27642,map__27642__$1,opts){
return (function (val){
var statearr_27645_27651 = state;
(statearr_27645_27651[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__27642,map__27642__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_27646_27652 = state;
(statearr_27646_27652[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27637){
var G__27638 = cljs.core.first(seq27637);
var seq27637__$1 = cljs.core.next(seq27637);
var G__27639 = cljs.core.first(seq27637__$1);
var seq27637__$2 = cljs.core.next(seq27637__$1);
var G__27640 = cljs.core.first(seq27637__$2);
var seq27637__$3 = cljs.core.next(seq27637__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27638,G__27639,G__27640,seq27637__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27653 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27654){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27654 = meta27654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27655,meta27654__$1){
var self__ = this;
var _27655__$1 = this;
return (new cljs.core.async.t_cljs$core$async27653(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27654__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27655){
var self__ = this;
var _27655__$1 = this;
return self__.meta27654;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27653.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta27654], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27653";

cljs.core.async.t_cljs$core$async27653.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27653");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27653.
 */
cljs.core.async.__GT_t_cljs$core$async27653 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27653(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27654){
return (new cljs.core.async.t_cljs$core$async27653(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27654));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27653(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26756__auto___27817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto___27817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto___27817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27757){
var state_val_27758 = (state_27757[(1)]);
if((state_val_27758 === (7))){
var inst_27672 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
var statearr_27759_27818 = state_27757__$1;
(statearr_27759_27818[(2)] = inst_27672);

(statearr_27759_27818[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (20))){
var inst_27684 = (state_27757[(7)]);
var state_27757__$1 = state_27757;
var statearr_27760_27819 = state_27757__$1;
(statearr_27760_27819[(2)] = inst_27684);

(statearr_27760_27819[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (27))){
var state_27757__$1 = state_27757;
var statearr_27761_27820 = state_27757__$1;
(statearr_27761_27820[(2)] = null);

(statearr_27761_27820[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (1))){
var inst_27659 = (state_27757[(8)]);
var inst_27659__$1 = calc_state();
var inst_27661 = (inst_27659__$1 == null);
var inst_27662 = cljs.core.not(inst_27661);
var state_27757__$1 = (function (){var statearr_27762 = state_27757;
(statearr_27762[(8)] = inst_27659__$1);

return statearr_27762;
})();
if(inst_27662){
var statearr_27763_27821 = state_27757__$1;
(statearr_27763_27821[(1)] = (2));

} else {
var statearr_27764_27822 = state_27757__$1;
(statearr_27764_27822[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (24))){
var inst_27708 = (state_27757[(9)]);
var inst_27731 = (state_27757[(10)]);
var inst_27717 = (state_27757[(11)]);
var inst_27731__$1 = (inst_27708.cljs$core$IFn$_invoke$arity$1 ? inst_27708.cljs$core$IFn$_invoke$arity$1(inst_27717) : inst_27708.call(null,inst_27717));
var state_27757__$1 = (function (){var statearr_27765 = state_27757;
(statearr_27765[(10)] = inst_27731__$1);

return statearr_27765;
})();
if(cljs.core.truth_(inst_27731__$1)){
var statearr_27766_27823 = state_27757__$1;
(statearr_27766_27823[(1)] = (29));

} else {
var statearr_27767_27824 = state_27757__$1;
(statearr_27767_27824[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (4))){
var inst_27675 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
if(cljs.core.truth_(inst_27675)){
var statearr_27768_27825 = state_27757__$1;
(statearr_27768_27825[(1)] = (8));

} else {
var statearr_27769_27826 = state_27757__$1;
(statearr_27769_27826[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (15))){
var inst_27702 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
if(cljs.core.truth_(inst_27702)){
var statearr_27770_27827 = state_27757__$1;
(statearr_27770_27827[(1)] = (19));

} else {
var statearr_27771_27828 = state_27757__$1;
(statearr_27771_27828[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (21))){
var inst_27707 = (state_27757[(12)]);
var inst_27707__$1 = (state_27757[(2)]);
var inst_27708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27707__$1,cljs.core.cst$kw$solos);
var inst_27709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27707__$1,cljs.core.cst$kw$mutes);
var inst_27710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27707__$1,cljs.core.cst$kw$reads);
var state_27757__$1 = (function (){var statearr_27772 = state_27757;
(statearr_27772[(9)] = inst_27708);

(statearr_27772[(12)] = inst_27707__$1);

(statearr_27772[(13)] = inst_27709);

return statearr_27772;
})();
return cljs.core.async.ioc_alts_BANG_(state_27757__$1,(22),inst_27710);
} else {
if((state_val_27758 === (31))){
var inst_27739 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
if(cljs.core.truth_(inst_27739)){
var statearr_27773_27829 = state_27757__$1;
(statearr_27773_27829[(1)] = (32));

} else {
var statearr_27774_27830 = state_27757__$1;
(statearr_27774_27830[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (32))){
var inst_27716 = (state_27757[(14)]);
var state_27757__$1 = state_27757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27757__$1,(35),out,inst_27716);
} else {
if((state_val_27758 === (33))){
var inst_27707 = (state_27757[(12)]);
var inst_27684 = inst_27707;
var state_27757__$1 = (function (){var statearr_27775 = state_27757;
(statearr_27775[(7)] = inst_27684);

return statearr_27775;
})();
var statearr_27776_27831 = state_27757__$1;
(statearr_27776_27831[(2)] = null);

(statearr_27776_27831[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (13))){
var inst_27684 = (state_27757[(7)]);
var inst_27691 = inst_27684.cljs$lang$protocol_mask$partition0$;
var inst_27692 = (inst_27691 & (64));
var inst_27693 = inst_27684.cljs$core$ISeq$;
var inst_27694 = (cljs.core.PROTOCOL_SENTINEL === inst_27693);
var inst_27695 = ((inst_27692) || (inst_27694));
var state_27757__$1 = state_27757;
if(cljs.core.truth_(inst_27695)){
var statearr_27777_27832 = state_27757__$1;
(statearr_27777_27832[(1)] = (16));

} else {
var statearr_27778_27833 = state_27757__$1;
(statearr_27778_27833[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (22))){
var inst_27716 = (state_27757[(14)]);
var inst_27717 = (state_27757[(11)]);
var inst_27715 = (state_27757[(2)]);
var inst_27716__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27715,(0),null);
var inst_27717__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27715,(1),null);
var inst_27718 = (inst_27716__$1 == null);
var inst_27719 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27717__$1,change);
var inst_27720 = ((inst_27718) || (inst_27719));
var state_27757__$1 = (function (){var statearr_27779 = state_27757;
(statearr_27779[(14)] = inst_27716__$1);

(statearr_27779[(11)] = inst_27717__$1);

return statearr_27779;
})();
if(cljs.core.truth_(inst_27720)){
var statearr_27780_27834 = state_27757__$1;
(statearr_27780_27834[(1)] = (23));

} else {
var statearr_27781_27835 = state_27757__$1;
(statearr_27781_27835[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (36))){
var inst_27707 = (state_27757[(12)]);
var inst_27684 = inst_27707;
var state_27757__$1 = (function (){var statearr_27782 = state_27757;
(statearr_27782[(7)] = inst_27684);

return statearr_27782;
})();
var statearr_27783_27836 = state_27757__$1;
(statearr_27783_27836[(2)] = null);

(statearr_27783_27836[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (29))){
var inst_27731 = (state_27757[(10)]);
var state_27757__$1 = state_27757;
var statearr_27784_27837 = state_27757__$1;
(statearr_27784_27837[(2)] = inst_27731);

(statearr_27784_27837[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (6))){
var state_27757__$1 = state_27757;
var statearr_27785_27838 = state_27757__$1;
(statearr_27785_27838[(2)] = false);

(statearr_27785_27838[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (28))){
var inst_27727 = (state_27757[(2)]);
var inst_27728 = calc_state();
var inst_27684 = inst_27728;
var state_27757__$1 = (function (){var statearr_27786 = state_27757;
(statearr_27786[(7)] = inst_27684);

(statearr_27786[(15)] = inst_27727);

return statearr_27786;
})();
var statearr_27787_27839 = state_27757__$1;
(statearr_27787_27839[(2)] = null);

(statearr_27787_27839[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (25))){
var inst_27753 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
var statearr_27788_27840 = state_27757__$1;
(statearr_27788_27840[(2)] = inst_27753);

(statearr_27788_27840[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (34))){
var inst_27751 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
var statearr_27789_27841 = state_27757__$1;
(statearr_27789_27841[(2)] = inst_27751);

(statearr_27789_27841[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (17))){
var state_27757__$1 = state_27757;
var statearr_27790_27842 = state_27757__$1;
(statearr_27790_27842[(2)] = false);

(statearr_27790_27842[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (3))){
var state_27757__$1 = state_27757;
var statearr_27791_27843 = state_27757__$1;
(statearr_27791_27843[(2)] = false);

(statearr_27791_27843[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (12))){
var inst_27755 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27757__$1,inst_27755);
} else {
if((state_val_27758 === (2))){
var inst_27659 = (state_27757[(8)]);
var inst_27664 = inst_27659.cljs$lang$protocol_mask$partition0$;
var inst_27665 = (inst_27664 & (64));
var inst_27666 = inst_27659.cljs$core$ISeq$;
var inst_27667 = (cljs.core.PROTOCOL_SENTINEL === inst_27666);
var inst_27668 = ((inst_27665) || (inst_27667));
var state_27757__$1 = state_27757;
if(cljs.core.truth_(inst_27668)){
var statearr_27792_27844 = state_27757__$1;
(statearr_27792_27844[(1)] = (5));

} else {
var statearr_27793_27845 = state_27757__$1;
(statearr_27793_27845[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (23))){
var inst_27716 = (state_27757[(14)]);
var inst_27722 = (inst_27716 == null);
var state_27757__$1 = state_27757;
if(cljs.core.truth_(inst_27722)){
var statearr_27794_27846 = state_27757__$1;
(statearr_27794_27846[(1)] = (26));

} else {
var statearr_27795_27847 = state_27757__$1;
(statearr_27795_27847[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (35))){
var inst_27742 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
if(cljs.core.truth_(inst_27742)){
var statearr_27796_27848 = state_27757__$1;
(statearr_27796_27848[(1)] = (36));

} else {
var statearr_27797_27849 = state_27757__$1;
(statearr_27797_27849[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (19))){
var inst_27684 = (state_27757[(7)]);
var inst_27704 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27684);
var state_27757__$1 = state_27757;
var statearr_27798_27850 = state_27757__$1;
(statearr_27798_27850[(2)] = inst_27704);

(statearr_27798_27850[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (11))){
var inst_27684 = (state_27757[(7)]);
var inst_27688 = (inst_27684 == null);
var inst_27689 = cljs.core.not(inst_27688);
var state_27757__$1 = state_27757;
if(inst_27689){
var statearr_27799_27851 = state_27757__$1;
(statearr_27799_27851[(1)] = (13));

} else {
var statearr_27800_27852 = state_27757__$1;
(statearr_27800_27852[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (9))){
var inst_27659 = (state_27757[(8)]);
var state_27757__$1 = state_27757;
var statearr_27801_27853 = state_27757__$1;
(statearr_27801_27853[(2)] = inst_27659);

(statearr_27801_27853[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (5))){
var state_27757__$1 = state_27757;
var statearr_27802_27854 = state_27757__$1;
(statearr_27802_27854[(2)] = true);

(statearr_27802_27854[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (14))){
var state_27757__$1 = state_27757;
var statearr_27803_27855 = state_27757__$1;
(statearr_27803_27855[(2)] = false);

(statearr_27803_27855[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (26))){
var inst_27717 = (state_27757[(11)]);
var inst_27724 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_27717);
var state_27757__$1 = state_27757;
var statearr_27804_27856 = state_27757__$1;
(statearr_27804_27856[(2)] = inst_27724);

(statearr_27804_27856[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (16))){
var state_27757__$1 = state_27757;
var statearr_27805_27857 = state_27757__$1;
(statearr_27805_27857[(2)] = true);

(statearr_27805_27857[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (38))){
var inst_27747 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
var statearr_27806_27858 = state_27757__$1;
(statearr_27806_27858[(2)] = inst_27747);

(statearr_27806_27858[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (30))){
var inst_27708 = (state_27757[(9)]);
var inst_27709 = (state_27757[(13)]);
var inst_27717 = (state_27757[(11)]);
var inst_27734 = cljs.core.empty_QMARK_(inst_27708);
var inst_27735 = (inst_27709.cljs$core$IFn$_invoke$arity$1 ? inst_27709.cljs$core$IFn$_invoke$arity$1(inst_27717) : inst_27709.call(null,inst_27717));
var inst_27736 = cljs.core.not(inst_27735);
var inst_27737 = ((inst_27734) && (inst_27736));
var state_27757__$1 = state_27757;
var statearr_27807_27859 = state_27757__$1;
(statearr_27807_27859[(2)] = inst_27737);

(statearr_27807_27859[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (10))){
var inst_27659 = (state_27757[(8)]);
var inst_27680 = (state_27757[(2)]);
var inst_27681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27680,cljs.core.cst$kw$solos);
var inst_27682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27680,cljs.core.cst$kw$mutes);
var inst_27683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27680,cljs.core.cst$kw$reads);
var inst_27684 = inst_27659;
var state_27757__$1 = (function (){var statearr_27808 = state_27757;
(statearr_27808[(16)] = inst_27683);

(statearr_27808[(17)] = inst_27682);

(statearr_27808[(18)] = inst_27681);

(statearr_27808[(7)] = inst_27684);

return statearr_27808;
})();
var statearr_27809_27860 = state_27757__$1;
(statearr_27809_27860[(2)] = null);

(statearr_27809_27860[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (18))){
var inst_27699 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
var statearr_27810_27861 = state_27757__$1;
(statearr_27810_27861[(2)] = inst_27699);

(statearr_27810_27861[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (37))){
var state_27757__$1 = state_27757;
var statearr_27811_27862 = state_27757__$1;
(statearr_27811_27862[(2)] = null);

(statearr_27811_27862[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27758 === (8))){
var inst_27659 = (state_27757[(8)]);
var inst_27677 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27659);
var state_27757__$1 = state_27757;
var statearr_27812_27863 = state_27757__$1;
(statearr_27812_27863[(2)] = inst_27677);

(statearr_27812_27863[(1)] = (10));


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
});})(c__26756__auto___27817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26649__auto__,c__26756__auto___27817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26650__auto__ = null;
var cljs$core$async$mix_$_state_machine__26650__auto____0 = (function (){
var statearr_27813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27813[(0)] = cljs$core$async$mix_$_state_machine__26650__auto__);

(statearr_27813[(1)] = (1));

return statearr_27813;
});
var cljs$core$async$mix_$_state_machine__26650__auto____1 = (function (state_27757){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_27757);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e27814){if((e27814 instanceof Object)){
var ex__26653__auto__ = e27814;
var statearr_27815_27864 = state_27757;
(statearr_27815_27864[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27757);

return cljs.core.cst$kw$recur;
} else {
throw e27814;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__27865 = state_27757;
state_27757 = G__27865;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26650__auto__ = function(state_27757){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26650__auto____1.call(this,state_27757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26650__auto____0;
cljs$core$async$mix_$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26650__auto____1;
return cljs$core$async$mix_$_state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto___27817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26758__auto__ = (function (){var statearr_27816 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_27816[(6)] = c__26756__auto___27817);

return statearr_27816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto___27817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__27867 = arguments.length;
switch (G__27867) {
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
var G__27871 = arguments.length;
switch (G__27871) {
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
return (function (p1__27869_SHARP_){
if(cljs.core.truth_((p1__27869_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27869_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__27869_SHARP_.call(null,topic)))){
return p1__27869_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27869_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27872 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27873){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27873 = meta27873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27874,meta27873__$1){
var self__ = this;
var _27874__$1 = this;
return (new cljs.core.async.t_cljs$core$async27872(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27873__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27872.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27874){
var self__ = this;
var _27874__$1 = this;
return self__.meta27873;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27872.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27872.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27872.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27872.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27872.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27872.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27872.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27872.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta27873], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27872.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27872";

cljs.core.async.t_cljs$core$async27872.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27872");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27872.
 */
cljs.core.async.__GT_t_cljs$core$async27872 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27872(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27873){
return (new cljs.core.async.t_cljs$core$async27872(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27873));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27872(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26756__auto___27992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto___27992,mults,ensure_mult,p){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto___27992,mults,ensure_mult,p){
return (function (state_27946){
var state_val_27947 = (state_27946[(1)]);
if((state_val_27947 === (7))){
var inst_27942 = (state_27946[(2)]);
var state_27946__$1 = state_27946;
var statearr_27948_27993 = state_27946__$1;
(statearr_27948_27993[(2)] = inst_27942);

(statearr_27948_27993[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (20))){
var state_27946__$1 = state_27946;
var statearr_27949_27994 = state_27946__$1;
(statearr_27949_27994[(2)] = null);

(statearr_27949_27994[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (1))){
var state_27946__$1 = state_27946;
var statearr_27950_27995 = state_27946__$1;
(statearr_27950_27995[(2)] = null);

(statearr_27950_27995[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (24))){
var inst_27925 = (state_27946[(7)]);
var inst_27934 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_27925);
var state_27946__$1 = state_27946;
var statearr_27951_27996 = state_27946__$1;
(statearr_27951_27996[(2)] = inst_27934);

(statearr_27951_27996[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (4))){
var inst_27877 = (state_27946[(8)]);
var inst_27877__$1 = (state_27946[(2)]);
var inst_27878 = (inst_27877__$1 == null);
var state_27946__$1 = (function (){var statearr_27952 = state_27946;
(statearr_27952[(8)] = inst_27877__$1);

return statearr_27952;
})();
if(cljs.core.truth_(inst_27878)){
var statearr_27953_27997 = state_27946__$1;
(statearr_27953_27997[(1)] = (5));

} else {
var statearr_27954_27998 = state_27946__$1;
(statearr_27954_27998[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (15))){
var inst_27919 = (state_27946[(2)]);
var state_27946__$1 = state_27946;
var statearr_27955_27999 = state_27946__$1;
(statearr_27955_27999[(2)] = inst_27919);

(statearr_27955_27999[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (21))){
var inst_27939 = (state_27946[(2)]);
var state_27946__$1 = (function (){var statearr_27956 = state_27946;
(statearr_27956[(9)] = inst_27939);

return statearr_27956;
})();
var statearr_27957_28000 = state_27946__$1;
(statearr_27957_28000[(2)] = null);

(statearr_27957_28000[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (13))){
var inst_27901 = (state_27946[(10)]);
var inst_27903 = cljs.core.chunked_seq_QMARK_(inst_27901);
var state_27946__$1 = state_27946;
if(inst_27903){
var statearr_27958_28001 = state_27946__$1;
(statearr_27958_28001[(1)] = (16));

} else {
var statearr_27959_28002 = state_27946__$1;
(statearr_27959_28002[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (22))){
var inst_27931 = (state_27946[(2)]);
var state_27946__$1 = state_27946;
if(cljs.core.truth_(inst_27931)){
var statearr_27960_28003 = state_27946__$1;
(statearr_27960_28003[(1)] = (23));

} else {
var statearr_27961_28004 = state_27946__$1;
(statearr_27961_28004[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (6))){
var inst_27925 = (state_27946[(7)]);
var inst_27927 = (state_27946[(11)]);
var inst_27877 = (state_27946[(8)]);
var inst_27925__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_27877) : topic_fn.call(null,inst_27877));
var inst_27926 = cljs.core.deref(mults);
var inst_27927__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27926,inst_27925__$1);
var state_27946__$1 = (function (){var statearr_27962 = state_27946;
(statearr_27962[(7)] = inst_27925__$1);

(statearr_27962[(11)] = inst_27927__$1);

return statearr_27962;
})();
if(cljs.core.truth_(inst_27927__$1)){
var statearr_27963_28005 = state_27946__$1;
(statearr_27963_28005[(1)] = (19));

} else {
var statearr_27964_28006 = state_27946__$1;
(statearr_27964_28006[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (25))){
var inst_27936 = (state_27946[(2)]);
var state_27946__$1 = state_27946;
var statearr_27965_28007 = state_27946__$1;
(statearr_27965_28007[(2)] = inst_27936);

(statearr_27965_28007[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (17))){
var inst_27901 = (state_27946[(10)]);
var inst_27910 = cljs.core.first(inst_27901);
var inst_27911 = cljs.core.async.muxch_STAR_(inst_27910);
var inst_27912 = cljs.core.async.close_BANG_(inst_27911);
var inst_27913 = cljs.core.next(inst_27901);
var inst_27887 = inst_27913;
var inst_27888 = null;
var inst_27889 = (0);
var inst_27890 = (0);
var state_27946__$1 = (function (){var statearr_27966 = state_27946;
(statearr_27966[(12)] = inst_27889);

(statearr_27966[(13)] = inst_27887);

(statearr_27966[(14)] = inst_27912);

(statearr_27966[(15)] = inst_27890);

(statearr_27966[(16)] = inst_27888);

return statearr_27966;
})();
var statearr_27967_28008 = state_27946__$1;
(statearr_27967_28008[(2)] = null);

(statearr_27967_28008[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (3))){
var inst_27944 = (state_27946[(2)]);
var state_27946__$1 = state_27946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27946__$1,inst_27944);
} else {
if((state_val_27947 === (12))){
var inst_27921 = (state_27946[(2)]);
var state_27946__$1 = state_27946;
var statearr_27968_28009 = state_27946__$1;
(statearr_27968_28009[(2)] = inst_27921);

(statearr_27968_28009[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (2))){
var state_27946__$1 = state_27946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27946__$1,(4),ch);
} else {
if((state_val_27947 === (23))){
var state_27946__$1 = state_27946;
var statearr_27969_28010 = state_27946__$1;
(statearr_27969_28010[(2)] = null);

(statearr_27969_28010[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (19))){
var inst_27927 = (state_27946[(11)]);
var inst_27877 = (state_27946[(8)]);
var inst_27929 = cljs.core.async.muxch_STAR_(inst_27927);
var state_27946__$1 = state_27946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27946__$1,(22),inst_27929,inst_27877);
} else {
if((state_val_27947 === (11))){
var inst_27887 = (state_27946[(13)]);
var inst_27901 = (state_27946[(10)]);
var inst_27901__$1 = cljs.core.seq(inst_27887);
var state_27946__$1 = (function (){var statearr_27970 = state_27946;
(statearr_27970[(10)] = inst_27901__$1);

return statearr_27970;
})();
if(inst_27901__$1){
var statearr_27971_28011 = state_27946__$1;
(statearr_27971_28011[(1)] = (13));

} else {
var statearr_27972_28012 = state_27946__$1;
(statearr_27972_28012[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (9))){
var inst_27923 = (state_27946[(2)]);
var state_27946__$1 = state_27946;
var statearr_27973_28013 = state_27946__$1;
(statearr_27973_28013[(2)] = inst_27923);

(statearr_27973_28013[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (5))){
var inst_27884 = cljs.core.deref(mults);
var inst_27885 = cljs.core.vals(inst_27884);
var inst_27886 = cljs.core.seq(inst_27885);
var inst_27887 = inst_27886;
var inst_27888 = null;
var inst_27889 = (0);
var inst_27890 = (0);
var state_27946__$1 = (function (){var statearr_27974 = state_27946;
(statearr_27974[(12)] = inst_27889);

(statearr_27974[(13)] = inst_27887);

(statearr_27974[(15)] = inst_27890);

(statearr_27974[(16)] = inst_27888);

return statearr_27974;
})();
var statearr_27975_28014 = state_27946__$1;
(statearr_27975_28014[(2)] = null);

(statearr_27975_28014[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (14))){
var state_27946__$1 = state_27946;
var statearr_27979_28015 = state_27946__$1;
(statearr_27979_28015[(2)] = null);

(statearr_27979_28015[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (16))){
var inst_27901 = (state_27946[(10)]);
var inst_27905 = cljs.core.chunk_first(inst_27901);
var inst_27906 = cljs.core.chunk_rest(inst_27901);
var inst_27907 = cljs.core.count(inst_27905);
var inst_27887 = inst_27906;
var inst_27888 = inst_27905;
var inst_27889 = inst_27907;
var inst_27890 = (0);
var state_27946__$1 = (function (){var statearr_27980 = state_27946;
(statearr_27980[(12)] = inst_27889);

(statearr_27980[(13)] = inst_27887);

(statearr_27980[(15)] = inst_27890);

(statearr_27980[(16)] = inst_27888);

return statearr_27980;
})();
var statearr_27981_28016 = state_27946__$1;
(statearr_27981_28016[(2)] = null);

(statearr_27981_28016[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (10))){
var inst_27889 = (state_27946[(12)]);
var inst_27887 = (state_27946[(13)]);
var inst_27890 = (state_27946[(15)]);
var inst_27888 = (state_27946[(16)]);
var inst_27895 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27888,inst_27890);
var inst_27896 = cljs.core.async.muxch_STAR_(inst_27895);
var inst_27897 = cljs.core.async.close_BANG_(inst_27896);
var inst_27898 = (inst_27890 + (1));
var tmp27976 = inst_27889;
var tmp27977 = inst_27887;
var tmp27978 = inst_27888;
var inst_27887__$1 = tmp27977;
var inst_27888__$1 = tmp27978;
var inst_27889__$1 = tmp27976;
var inst_27890__$1 = inst_27898;
var state_27946__$1 = (function (){var statearr_27982 = state_27946;
(statearr_27982[(12)] = inst_27889__$1);

(statearr_27982[(13)] = inst_27887__$1);

(statearr_27982[(15)] = inst_27890__$1);

(statearr_27982[(17)] = inst_27897);

(statearr_27982[(16)] = inst_27888__$1);

return statearr_27982;
})();
var statearr_27983_28017 = state_27946__$1;
(statearr_27983_28017[(2)] = null);

(statearr_27983_28017[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (18))){
var inst_27916 = (state_27946[(2)]);
var state_27946__$1 = state_27946;
var statearr_27984_28018 = state_27946__$1;
(statearr_27984_28018[(2)] = inst_27916);

(statearr_27984_28018[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27947 === (8))){
var inst_27889 = (state_27946[(12)]);
var inst_27890 = (state_27946[(15)]);
var inst_27892 = (inst_27890 < inst_27889);
var inst_27893 = inst_27892;
var state_27946__$1 = state_27946;
if(cljs.core.truth_(inst_27893)){
var statearr_27985_28019 = state_27946__$1;
(statearr_27985_28019[(1)] = (10));

} else {
var statearr_27986_28020 = state_27946__$1;
(statearr_27986_28020[(1)] = (11));

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
});})(c__26756__auto___27992,mults,ensure_mult,p))
;
return ((function (switch__26649__auto__,c__26756__auto___27992,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26650__auto__ = null;
var cljs$core$async$state_machine__26650__auto____0 = (function (){
var statearr_27987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27987[(0)] = cljs$core$async$state_machine__26650__auto__);

(statearr_27987[(1)] = (1));

return statearr_27987;
});
var cljs$core$async$state_machine__26650__auto____1 = (function (state_27946){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_27946);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e27988){if((e27988 instanceof Object)){
var ex__26653__auto__ = e27988;
var statearr_27989_28021 = state_27946;
(statearr_27989_28021[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27946);

return cljs.core.cst$kw$recur;
} else {
throw e27988;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__28022 = state_27946;
state_27946 = G__28022;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$state_machine__26650__auto__ = function(state_27946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26650__auto____1.call(this,state_27946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26650__auto____0;
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26650__auto____1;
return cljs$core$async$state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto___27992,mults,ensure_mult,p))
})();
var state__26758__auto__ = (function (){var statearr_27990 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_27990[(6)] = c__26756__auto___27992);

return statearr_27990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto___27992,mults,ensure_mult,p))
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
var G__28024 = arguments.length;
switch (G__28024) {
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
var G__28027 = arguments.length;
switch (G__28027) {
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
var G__28030 = arguments.length;
switch (G__28030) {
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
var c__26756__auto___28097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto___28097,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto___28097,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28069){
var state_val_28070 = (state_28069[(1)]);
if((state_val_28070 === (7))){
var state_28069__$1 = state_28069;
var statearr_28071_28098 = state_28069__$1;
(statearr_28071_28098[(2)] = null);

(statearr_28071_28098[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28070 === (1))){
var state_28069__$1 = state_28069;
var statearr_28072_28099 = state_28069__$1;
(statearr_28072_28099[(2)] = null);

(statearr_28072_28099[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28070 === (4))){
var inst_28033 = (state_28069[(7)]);
var inst_28035 = (inst_28033 < cnt);
var state_28069__$1 = state_28069;
if(cljs.core.truth_(inst_28035)){
var statearr_28073_28100 = state_28069__$1;
(statearr_28073_28100[(1)] = (6));

} else {
var statearr_28074_28101 = state_28069__$1;
(statearr_28074_28101[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28070 === (15))){
var inst_28065 = (state_28069[(2)]);
var state_28069__$1 = state_28069;
var statearr_28075_28102 = state_28069__$1;
(statearr_28075_28102[(2)] = inst_28065);

(statearr_28075_28102[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28070 === (13))){
var inst_28058 = cljs.core.async.close_BANG_(out);
var state_28069__$1 = state_28069;
var statearr_28076_28103 = state_28069__$1;
(statearr_28076_28103[(2)] = inst_28058);

(statearr_28076_28103[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28070 === (6))){
var state_28069__$1 = state_28069;
var statearr_28077_28104 = state_28069__$1;
(statearr_28077_28104[(2)] = null);

(statearr_28077_28104[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28070 === (3))){
var inst_28067 = (state_28069[(2)]);
var state_28069__$1 = state_28069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28069__$1,inst_28067);
} else {
if((state_val_28070 === (12))){
var inst_28055 = (state_28069[(8)]);
var inst_28055__$1 = (state_28069[(2)]);
var inst_28056 = cljs.core.some(cljs.core.nil_QMARK_,inst_28055__$1);
var state_28069__$1 = (function (){var statearr_28078 = state_28069;
(statearr_28078[(8)] = inst_28055__$1);

return statearr_28078;
})();
if(cljs.core.truth_(inst_28056)){
var statearr_28079_28105 = state_28069__$1;
(statearr_28079_28105[(1)] = (13));

} else {
var statearr_28080_28106 = state_28069__$1;
(statearr_28080_28106[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28070 === (2))){
var inst_28032 = cljs.core.reset_BANG_(dctr,cnt);
var inst_28033 = (0);
var state_28069__$1 = (function (){var statearr_28081 = state_28069;
(statearr_28081[(7)] = inst_28033);

(statearr_28081[(9)] = inst_28032);

return statearr_28081;
})();
var statearr_28082_28107 = state_28069__$1;
(statearr_28082_28107[(2)] = null);

(statearr_28082_28107[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28070 === (11))){
var inst_28033 = (state_28069[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_28069,(10),Object,null,(9));
var inst_28042 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_28033) : chs__$1.call(null,inst_28033));
var inst_28043 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_28033) : done.call(null,inst_28033));
var inst_28044 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_28042,inst_28043);
var state_28069__$1 = state_28069;
var statearr_28083_28108 = state_28069__$1;
(statearr_28083_28108[(2)] = inst_28044);


cljs.core.async.impl.ioc_helpers.process_exception(state_28069__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_28070 === (9))){
var inst_28033 = (state_28069[(7)]);
var inst_28046 = (state_28069[(2)]);
var inst_28047 = (inst_28033 + (1));
var inst_28033__$1 = inst_28047;
var state_28069__$1 = (function (){var statearr_28084 = state_28069;
(statearr_28084[(7)] = inst_28033__$1);

(statearr_28084[(10)] = inst_28046);

return statearr_28084;
})();
var statearr_28085_28109 = state_28069__$1;
(statearr_28085_28109[(2)] = null);

(statearr_28085_28109[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28070 === (5))){
var inst_28053 = (state_28069[(2)]);
var state_28069__$1 = (function (){var statearr_28086 = state_28069;
(statearr_28086[(11)] = inst_28053);

return statearr_28086;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28069__$1,(12),dchan);
} else {
if((state_val_28070 === (14))){
var inst_28055 = (state_28069[(8)]);
var inst_28060 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_28055);
var state_28069__$1 = state_28069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28069__$1,(16),out,inst_28060);
} else {
if((state_val_28070 === (16))){
var inst_28062 = (state_28069[(2)]);
var state_28069__$1 = (function (){var statearr_28087 = state_28069;
(statearr_28087[(12)] = inst_28062);

return statearr_28087;
})();
var statearr_28088_28110 = state_28069__$1;
(statearr_28088_28110[(2)] = null);

(statearr_28088_28110[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28070 === (10))){
var inst_28037 = (state_28069[(2)]);
var inst_28038 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_28069__$1 = (function (){var statearr_28089 = state_28069;
(statearr_28089[(13)] = inst_28037);

return statearr_28089;
})();
var statearr_28090_28111 = state_28069__$1;
(statearr_28090_28111[(2)] = inst_28038);


cljs.core.async.impl.ioc_helpers.process_exception(state_28069__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_28070 === (8))){
var inst_28051 = (state_28069[(2)]);
var state_28069__$1 = state_28069;
var statearr_28091_28112 = state_28069__$1;
(statearr_28091_28112[(2)] = inst_28051);

(statearr_28091_28112[(1)] = (5));


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
});})(c__26756__auto___28097,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26649__auto__,c__26756__auto___28097,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26650__auto__ = null;
var cljs$core$async$state_machine__26650__auto____0 = (function (){
var statearr_28092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28092[(0)] = cljs$core$async$state_machine__26650__auto__);

(statearr_28092[(1)] = (1));

return statearr_28092;
});
var cljs$core$async$state_machine__26650__auto____1 = (function (state_28069){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_28069);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e28093){if((e28093 instanceof Object)){
var ex__26653__auto__ = e28093;
var statearr_28094_28113 = state_28069;
(statearr_28094_28113[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28069);

return cljs.core.cst$kw$recur;
} else {
throw e28093;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__28114 = state_28069;
state_28069 = G__28114;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$state_machine__26650__auto__ = function(state_28069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26650__auto____1.call(this,state_28069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26650__auto____0;
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26650__auto____1;
return cljs$core$async$state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto___28097,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26758__auto__ = (function (){var statearr_28095 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_28095[(6)] = c__26756__auto___28097);

return statearr_28095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto___28097,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28117 = arguments.length;
switch (G__28117) {
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
var c__26756__auto___28171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto___28171,out){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto___28171,out){
return (function (state_28149){
var state_val_28150 = (state_28149[(1)]);
if((state_val_28150 === (7))){
var inst_28129 = (state_28149[(7)]);
var inst_28128 = (state_28149[(8)]);
var inst_28128__$1 = (state_28149[(2)]);
var inst_28129__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28128__$1,(0),null);
var inst_28130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28128__$1,(1),null);
var inst_28131 = (inst_28129__$1 == null);
var state_28149__$1 = (function (){var statearr_28151 = state_28149;
(statearr_28151[(9)] = inst_28130);

(statearr_28151[(7)] = inst_28129__$1);

(statearr_28151[(8)] = inst_28128__$1);

return statearr_28151;
})();
if(cljs.core.truth_(inst_28131)){
var statearr_28152_28172 = state_28149__$1;
(statearr_28152_28172[(1)] = (8));

} else {
var statearr_28153_28173 = state_28149__$1;
(statearr_28153_28173[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28150 === (1))){
var inst_28118 = cljs.core.vec(chs);
var inst_28119 = inst_28118;
var state_28149__$1 = (function (){var statearr_28154 = state_28149;
(statearr_28154[(10)] = inst_28119);

return statearr_28154;
})();
var statearr_28155_28174 = state_28149__$1;
(statearr_28155_28174[(2)] = null);

(statearr_28155_28174[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28150 === (4))){
var inst_28119 = (state_28149[(10)]);
var state_28149__$1 = state_28149;
return cljs.core.async.ioc_alts_BANG_(state_28149__$1,(7),inst_28119);
} else {
if((state_val_28150 === (6))){
var inst_28145 = (state_28149[(2)]);
var state_28149__$1 = state_28149;
var statearr_28156_28175 = state_28149__$1;
(statearr_28156_28175[(2)] = inst_28145);

(statearr_28156_28175[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28150 === (3))){
var inst_28147 = (state_28149[(2)]);
var state_28149__$1 = state_28149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28149__$1,inst_28147);
} else {
if((state_val_28150 === (2))){
var inst_28119 = (state_28149[(10)]);
var inst_28121 = cljs.core.count(inst_28119);
var inst_28122 = (inst_28121 > (0));
var state_28149__$1 = state_28149;
if(cljs.core.truth_(inst_28122)){
var statearr_28158_28176 = state_28149__$1;
(statearr_28158_28176[(1)] = (4));

} else {
var statearr_28159_28177 = state_28149__$1;
(statearr_28159_28177[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28150 === (11))){
var inst_28119 = (state_28149[(10)]);
var inst_28138 = (state_28149[(2)]);
var tmp28157 = inst_28119;
var inst_28119__$1 = tmp28157;
var state_28149__$1 = (function (){var statearr_28160 = state_28149;
(statearr_28160[(10)] = inst_28119__$1);

(statearr_28160[(11)] = inst_28138);

return statearr_28160;
})();
var statearr_28161_28178 = state_28149__$1;
(statearr_28161_28178[(2)] = null);

(statearr_28161_28178[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28150 === (9))){
var inst_28129 = (state_28149[(7)]);
var state_28149__$1 = state_28149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28149__$1,(11),out,inst_28129);
} else {
if((state_val_28150 === (5))){
var inst_28143 = cljs.core.async.close_BANG_(out);
var state_28149__$1 = state_28149;
var statearr_28162_28179 = state_28149__$1;
(statearr_28162_28179[(2)] = inst_28143);

(statearr_28162_28179[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28150 === (10))){
var inst_28141 = (state_28149[(2)]);
var state_28149__$1 = state_28149;
var statearr_28163_28180 = state_28149__$1;
(statearr_28163_28180[(2)] = inst_28141);

(statearr_28163_28180[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28150 === (8))){
var inst_28119 = (state_28149[(10)]);
var inst_28130 = (state_28149[(9)]);
var inst_28129 = (state_28149[(7)]);
var inst_28128 = (state_28149[(8)]);
var inst_28133 = (function (){var cs = inst_28119;
var vec__28124 = inst_28128;
var v = inst_28129;
var c = inst_28130;
return ((function (cs,vec__28124,v,c,inst_28119,inst_28130,inst_28129,inst_28128,state_val_28150,c__26756__auto___28171,out){
return (function (p1__28115_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__28115_SHARP_);
});
;})(cs,vec__28124,v,c,inst_28119,inst_28130,inst_28129,inst_28128,state_val_28150,c__26756__auto___28171,out))
})();
var inst_28134 = cljs.core.filterv(inst_28133,inst_28119);
var inst_28119__$1 = inst_28134;
var state_28149__$1 = (function (){var statearr_28164 = state_28149;
(statearr_28164[(10)] = inst_28119__$1);

return statearr_28164;
})();
var statearr_28165_28181 = state_28149__$1;
(statearr_28165_28181[(2)] = null);

(statearr_28165_28181[(1)] = (2));


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
});})(c__26756__auto___28171,out))
;
return ((function (switch__26649__auto__,c__26756__auto___28171,out){
return (function() {
var cljs$core$async$state_machine__26650__auto__ = null;
var cljs$core$async$state_machine__26650__auto____0 = (function (){
var statearr_28166 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28166[(0)] = cljs$core$async$state_machine__26650__auto__);

(statearr_28166[(1)] = (1));

return statearr_28166;
});
var cljs$core$async$state_machine__26650__auto____1 = (function (state_28149){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_28149);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e28167){if((e28167 instanceof Object)){
var ex__26653__auto__ = e28167;
var statearr_28168_28182 = state_28149;
(statearr_28168_28182[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28149);

return cljs.core.cst$kw$recur;
} else {
throw e28167;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__28183 = state_28149;
state_28149 = G__28183;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$state_machine__26650__auto__ = function(state_28149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26650__auto____1.call(this,state_28149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26650__auto____0;
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26650__auto____1;
return cljs$core$async$state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto___28171,out))
})();
var state__26758__auto__ = (function (){var statearr_28169 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_28169[(6)] = c__26756__auto___28171);

return statearr_28169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto___28171,out))
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
var G__28185 = arguments.length;
switch (G__28185) {
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
var c__26756__auto___28230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto___28230,out){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto___28230,out){
return (function (state_28209){
var state_val_28210 = (state_28209[(1)]);
if((state_val_28210 === (7))){
var inst_28191 = (state_28209[(7)]);
var inst_28191__$1 = (state_28209[(2)]);
var inst_28192 = (inst_28191__$1 == null);
var inst_28193 = cljs.core.not(inst_28192);
var state_28209__$1 = (function (){var statearr_28211 = state_28209;
(statearr_28211[(7)] = inst_28191__$1);

return statearr_28211;
})();
if(inst_28193){
var statearr_28212_28231 = state_28209__$1;
(statearr_28212_28231[(1)] = (8));

} else {
var statearr_28213_28232 = state_28209__$1;
(statearr_28213_28232[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28210 === (1))){
var inst_28186 = (0);
var state_28209__$1 = (function (){var statearr_28214 = state_28209;
(statearr_28214[(8)] = inst_28186);

return statearr_28214;
})();
var statearr_28215_28233 = state_28209__$1;
(statearr_28215_28233[(2)] = null);

(statearr_28215_28233[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28210 === (4))){
var state_28209__$1 = state_28209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28209__$1,(7),ch);
} else {
if((state_val_28210 === (6))){
var inst_28204 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
var statearr_28216_28234 = state_28209__$1;
(statearr_28216_28234[(2)] = inst_28204);

(statearr_28216_28234[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28210 === (3))){
var inst_28206 = (state_28209[(2)]);
var inst_28207 = cljs.core.async.close_BANG_(out);
var state_28209__$1 = (function (){var statearr_28217 = state_28209;
(statearr_28217[(9)] = inst_28206);

return statearr_28217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28209__$1,inst_28207);
} else {
if((state_val_28210 === (2))){
var inst_28186 = (state_28209[(8)]);
var inst_28188 = (inst_28186 < n);
var state_28209__$1 = state_28209;
if(cljs.core.truth_(inst_28188)){
var statearr_28218_28235 = state_28209__$1;
(statearr_28218_28235[(1)] = (4));

} else {
var statearr_28219_28236 = state_28209__$1;
(statearr_28219_28236[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28210 === (11))){
var inst_28186 = (state_28209[(8)]);
var inst_28196 = (state_28209[(2)]);
var inst_28197 = (inst_28186 + (1));
var inst_28186__$1 = inst_28197;
var state_28209__$1 = (function (){var statearr_28220 = state_28209;
(statearr_28220[(10)] = inst_28196);

(statearr_28220[(8)] = inst_28186__$1);

return statearr_28220;
})();
var statearr_28221_28237 = state_28209__$1;
(statearr_28221_28237[(2)] = null);

(statearr_28221_28237[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28210 === (9))){
var state_28209__$1 = state_28209;
var statearr_28222_28238 = state_28209__$1;
(statearr_28222_28238[(2)] = null);

(statearr_28222_28238[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28210 === (5))){
var state_28209__$1 = state_28209;
var statearr_28223_28239 = state_28209__$1;
(statearr_28223_28239[(2)] = null);

(statearr_28223_28239[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28210 === (10))){
var inst_28201 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
var statearr_28224_28240 = state_28209__$1;
(statearr_28224_28240[(2)] = inst_28201);

(statearr_28224_28240[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28210 === (8))){
var inst_28191 = (state_28209[(7)]);
var state_28209__$1 = state_28209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28209__$1,(11),out,inst_28191);
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
});})(c__26756__auto___28230,out))
;
return ((function (switch__26649__auto__,c__26756__auto___28230,out){
return (function() {
var cljs$core$async$state_machine__26650__auto__ = null;
var cljs$core$async$state_machine__26650__auto____0 = (function (){
var statearr_28225 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28225[(0)] = cljs$core$async$state_machine__26650__auto__);

(statearr_28225[(1)] = (1));

return statearr_28225;
});
var cljs$core$async$state_machine__26650__auto____1 = (function (state_28209){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_28209);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e28226){if((e28226 instanceof Object)){
var ex__26653__auto__ = e28226;
var statearr_28227_28241 = state_28209;
(statearr_28227_28241[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28209);

return cljs.core.cst$kw$recur;
} else {
throw e28226;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__28242 = state_28209;
state_28209 = G__28242;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$state_machine__26650__auto__ = function(state_28209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26650__auto____1.call(this,state_28209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26650__auto____0;
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26650__auto____1;
return cljs$core$async$state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto___28230,out))
})();
var state__26758__auto__ = (function (){var statearr_28228 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_28228[(6)] = c__26756__auto___28230);

return statearr_28228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto___28230,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28244 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28244 = (function (f,ch,meta28245){
this.f = f;
this.ch = ch;
this.meta28245 = meta28245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28246,meta28245__$1){
var self__ = this;
var _28246__$1 = this;
return (new cljs.core.async.t_cljs$core$async28244(self__.f,self__.ch,meta28245__$1));
});

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28246){
var self__ = this;
var _28246__$1 = this;
return self__.meta28245;
});

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28247 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28247 = (function (f,ch,meta28245,_,fn1,meta28248){
this.f = f;
this.ch = ch;
this.meta28245 = meta28245;
this._ = _;
this.fn1 = fn1;
this.meta28248 = meta28248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28249,meta28248__$1){
var self__ = this;
var _28249__$1 = this;
return (new cljs.core.async.t_cljs$core$async28247(self__.f,self__.ch,self__.meta28245,self__._,self__.fn1,meta28248__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28249){
var self__ = this;
var _28249__$1 = this;
return self__.meta28248;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28247.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28247.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28247.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28247.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28243_SHARP_){
var G__28250 = (((p1__28243_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__28243_SHARP_) : self__.f.call(null,p1__28243_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28250) : f1.call(null,G__28250));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28247.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28245,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async28244], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta28248], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28247";

cljs.core.async.t_cljs$core$async28247.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28247");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28247.
 */
cljs.core.async.__GT_t_cljs$core$async28247 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28247(f__$1,ch__$1,meta28245__$1,___$2,fn1__$1,meta28248){
return (new cljs.core.async.t_cljs$core$async28247(f__$1,ch__$1,meta28245__$1,___$2,fn1__$1,meta28248));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28247(self__.f,self__.ch,self__.meta28245,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__28251 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28251) : self__.f.call(null,G__28251));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28245], null);
});

cljs.core.async.t_cljs$core$async28244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28244";

cljs.core.async.t_cljs$core$async28244.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28244");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28244.
 */
cljs.core.async.__GT_t_cljs$core$async28244 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28244(f__$1,ch__$1,meta28245){
return (new cljs.core.async.t_cljs$core$async28244(f__$1,ch__$1,meta28245));
});

}

return (new cljs.core.async.t_cljs$core$async28244(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28252 = (function (f,ch,meta28253){
this.f = f;
this.ch = ch;
this.meta28253 = meta28253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28254,meta28253__$1){
var self__ = this;
var _28254__$1 = this;
return (new cljs.core.async.t_cljs$core$async28252(self__.f,self__.ch,meta28253__$1));
});

cljs.core.async.t_cljs$core$async28252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28254){
var self__ = this;
var _28254__$1 = this;
return self__.meta28253;
});

cljs.core.async.t_cljs$core$async28252.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28252.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28252.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28252.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28252.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28252.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async28252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28253], null);
});

cljs.core.async.t_cljs$core$async28252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28252";

cljs.core.async.t_cljs$core$async28252.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28252");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28252.
 */
cljs.core.async.__GT_t_cljs$core$async28252 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28252(f__$1,ch__$1,meta28253){
return (new cljs.core.async.t_cljs$core$async28252(f__$1,ch__$1,meta28253));
});

}

return (new cljs.core.async.t_cljs$core$async28252(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28255 = (function (p,ch,meta28256){
this.p = p;
this.ch = ch;
this.meta28256 = meta28256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28257,meta28256__$1){
var self__ = this;
var _28257__$1 = this;
return (new cljs.core.async.t_cljs$core$async28255(self__.p,self__.ch,meta28256__$1));
});

cljs.core.async.t_cljs$core$async28255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28257){
var self__ = this;
var _28257__$1 = this;
return self__.meta28256;
});

cljs.core.async.t_cljs$core$async28255.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28255.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28255.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28255.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28255.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28255.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28255.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28256], null);
});

cljs.core.async.t_cljs$core$async28255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28255";

cljs.core.async.t_cljs$core$async28255.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28255");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28255.
 */
cljs.core.async.__GT_t_cljs$core$async28255 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28255(p__$1,ch__$1,meta28256){
return (new cljs.core.async.t_cljs$core$async28255(p__$1,ch__$1,meta28256));
});

}

return (new cljs.core.async.t_cljs$core$async28255(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28259 = arguments.length;
switch (G__28259) {
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
var c__26756__auto___28299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto___28299,out){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto___28299,out){
return (function (state_28280){
var state_val_28281 = (state_28280[(1)]);
if((state_val_28281 === (7))){
var inst_28276 = (state_28280[(2)]);
var state_28280__$1 = state_28280;
var statearr_28282_28300 = state_28280__$1;
(statearr_28282_28300[(2)] = inst_28276);

(statearr_28282_28300[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28281 === (1))){
var state_28280__$1 = state_28280;
var statearr_28283_28301 = state_28280__$1;
(statearr_28283_28301[(2)] = null);

(statearr_28283_28301[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28281 === (4))){
var inst_28262 = (state_28280[(7)]);
var inst_28262__$1 = (state_28280[(2)]);
var inst_28263 = (inst_28262__$1 == null);
var state_28280__$1 = (function (){var statearr_28284 = state_28280;
(statearr_28284[(7)] = inst_28262__$1);

return statearr_28284;
})();
if(cljs.core.truth_(inst_28263)){
var statearr_28285_28302 = state_28280__$1;
(statearr_28285_28302[(1)] = (5));

} else {
var statearr_28286_28303 = state_28280__$1;
(statearr_28286_28303[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28281 === (6))){
var inst_28262 = (state_28280[(7)]);
var inst_28267 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28262) : p.call(null,inst_28262));
var state_28280__$1 = state_28280;
if(cljs.core.truth_(inst_28267)){
var statearr_28287_28304 = state_28280__$1;
(statearr_28287_28304[(1)] = (8));

} else {
var statearr_28288_28305 = state_28280__$1;
(statearr_28288_28305[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28281 === (3))){
var inst_28278 = (state_28280[(2)]);
var state_28280__$1 = state_28280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28280__$1,inst_28278);
} else {
if((state_val_28281 === (2))){
var state_28280__$1 = state_28280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28280__$1,(4),ch);
} else {
if((state_val_28281 === (11))){
var inst_28270 = (state_28280[(2)]);
var state_28280__$1 = state_28280;
var statearr_28289_28306 = state_28280__$1;
(statearr_28289_28306[(2)] = inst_28270);

(statearr_28289_28306[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28281 === (9))){
var state_28280__$1 = state_28280;
var statearr_28290_28307 = state_28280__$1;
(statearr_28290_28307[(2)] = null);

(statearr_28290_28307[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28281 === (5))){
var inst_28265 = cljs.core.async.close_BANG_(out);
var state_28280__$1 = state_28280;
var statearr_28291_28308 = state_28280__$1;
(statearr_28291_28308[(2)] = inst_28265);

(statearr_28291_28308[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28281 === (10))){
var inst_28273 = (state_28280[(2)]);
var state_28280__$1 = (function (){var statearr_28292 = state_28280;
(statearr_28292[(8)] = inst_28273);

return statearr_28292;
})();
var statearr_28293_28309 = state_28280__$1;
(statearr_28293_28309[(2)] = null);

(statearr_28293_28309[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28281 === (8))){
var inst_28262 = (state_28280[(7)]);
var state_28280__$1 = state_28280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28280__$1,(11),out,inst_28262);
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
});})(c__26756__auto___28299,out))
;
return ((function (switch__26649__auto__,c__26756__auto___28299,out){
return (function() {
var cljs$core$async$state_machine__26650__auto__ = null;
var cljs$core$async$state_machine__26650__auto____0 = (function (){
var statearr_28294 = [null,null,null,null,null,null,null,null,null];
(statearr_28294[(0)] = cljs$core$async$state_machine__26650__auto__);

(statearr_28294[(1)] = (1));

return statearr_28294;
});
var cljs$core$async$state_machine__26650__auto____1 = (function (state_28280){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_28280);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e28295){if((e28295 instanceof Object)){
var ex__26653__auto__ = e28295;
var statearr_28296_28310 = state_28280;
(statearr_28296_28310[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28280);

return cljs.core.cst$kw$recur;
} else {
throw e28295;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__28311 = state_28280;
state_28280 = G__28311;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$state_machine__26650__auto__ = function(state_28280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26650__auto____1.call(this,state_28280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26650__auto____0;
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26650__auto____1;
return cljs$core$async$state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto___28299,out))
})();
var state__26758__auto__ = (function (){var statearr_28297 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_28297[(6)] = c__26756__auto___28299);

return statearr_28297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto___28299,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28313 = arguments.length;
switch (G__28313) {
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
var c__26756__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto__){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto__){
return (function (state_28376){
var state_val_28377 = (state_28376[(1)]);
if((state_val_28377 === (7))){
var inst_28372 = (state_28376[(2)]);
var state_28376__$1 = state_28376;
var statearr_28378_28416 = state_28376__$1;
(statearr_28378_28416[(2)] = inst_28372);

(statearr_28378_28416[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (20))){
var inst_28342 = (state_28376[(7)]);
var inst_28353 = (state_28376[(2)]);
var inst_28354 = cljs.core.next(inst_28342);
var inst_28328 = inst_28354;
var inst_28329 = null;
var inst_28330 = (0);
var inst_28331 = (0);
var state_28376__$1 = (function (){var statearr_28379 = state_28376;
(statearr_28379[(8)] = inst_28331);

(statearr_28379[(9)] = inst_28329);

(statearr_28379[(10)] = inst_28353);

(statearr_28379[(11)] = inst_28330);

(statearr_28379[(12)] = inst_28328);

return statearr_28379;
})();
var statearr_28380_28417 = state_28376__$1;
(statearr_28380_28417[(2)] = null);

(statearr_28380_28417[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (1))){
var state_28376__$1 = state_28376;
var statearr_28381_28418 = state_28376__$1;
(statearr_28381_28418[(2)] = null);

(statearr_28381_28418[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (4))){
var inst_28317 = (state_28376[(13)]);
var inst_28317__$1 = (state_28376[(2)]);
var inst_28318 = (inst_28317__$1 == null);
var state_28376__$1 = (function (){var statearr_28382 = state_28376;
(statearr_28382[(13)] = inst_28317__$1);

return statearr_28382;
})();
if(cljs.core.truth_(inst_28318)){
var statearr_28383_28419 = state_28376__$1;
(statearr_28383_28419[(1)] = (5));

} else {
var statearr_28384_28420 = state_28376__$1;
(statearr_28384_28420[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (15))){
var state_28376__$1 = state_28376;
var statearr_28388_28421 = state_28376__$1;
(statearr_28388_28421[(2)] = null);

(statearr_28388_28421[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (21))){
var state_28376__$1 = state_28376;
var statearr_28389_28422 = state_28376__$1;
(statearr_28389_28422[(2)] = null);

(statearr_28389_28422[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (13))){
var inst_28331 = (state_28376[(8)]);
var inst_28329 = (state_28376[(9)]);
var inst_28330 = (state_28376[(11)]);
var inst_28328 = (state_28376[(12)]);
var inst_28338 = (state_28376[(2)]);
var inst_28339 = (inst_28331 + (1));
var tmp28385 = inst_28329;
var tmp28386 = inst_28330;
var tmp28387 = inst_28328;
var inst_28328__$1 = tmp28387;
var inst_28329__$1 = tmp28385;
var inst_28330__$1 = tmp28386;
var inst_28331__$1 = inst_28339;
var state_28376__$1 = (function (){var statearr_28390 = state_28376;
(statearr_28390[(8)] = inst_28331__$1);

(statearr_28390[(9)] = inst_28329__$1);

(statearr_28390[(14)] = inst_28338);

(statearr_28390[(11)] = inst_28330__$1);

(statearr_28390[(12)] = inst_28328__$1);

return statearr_28390;
})();
var statearr_28391_28423 = state_28376__$1;
(statearr_28391_28423[(2)] = null);

(statearr_28391_28423[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (22))){
var state_28376__$1 = state_28376;
var statearr_28392_28424 = state_28376__$1;
(statearr_28392_28424[(2)] = null);

(statearr_28392_28424[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (6))){
var inst_28317 = (state_28376[(13)]);
var inst_28326 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28317) : f.call(null,inst_28317));
var inst_28327 = cljs.core.seq(inst_28326);
var inst_28328 = inst_28327;
var inst_28329 = null;
var inst_28330 = (0);
var inst_28331 = (0);
var state_28376__$1 = (function (){var statearr_28393 = state_28376;
(statearr_28393[(8)] = inst_28331);

(statearr_28393[(9)] = inst_28329);

(statearr_28393[(11)] = inst_28330);

(statearr_28393[(12)] = inst_28328);

return statearr_28393;
})();
var statearr_28394_28425 = state_28376__$1;
(statearr_28394_28425[(2)] = null);

(statearr_28394_28425[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (17))){
var inst_28342 = (state_28376[(7)]);
var inst_28346 = cljs.core.chunk_first(inst_28342);
var inst_28347 = cljs.core.chunk_rest(inst_28342);
var inst_28348 = cljs.core.count(inst_28346);
var inst_28328 = inst_28347;
var inst_28329 = inst_28346;
var inst_28330 = inst_28348;
var inst_28331 = (0);
var state_28376__$1 = (function (){var statearr_28395 = state_28376;
(statearr_28395[(8)] = inst_28331);

(statearr_28395[(9)] = inst_28329);

(statearr_28395[(11)] = inst_28330);

(statearr_28395[(12)] = inst_28328);

return statearr_28395;
})();
var statearr_28396_28426 = state_28376__$1;
(statearr_28396_28426[(2)] = null);

(statearr_28396_28426[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (3))){
var inst_28374 = (state_28376[(2)]);
var state_28376__$1 = state_28376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28376__$1,inst_28374);
} else {
if((state_val_28377 === (12))){
var inst_28362 = (state_28376[(2)]);
var state_28376__$1 = state_28376;
var statearr_28397_28427 = state_28376__$1;
(statearr_28397_28427[(2)] = inst_28362);

(statearr_28397_28427[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (2))){
var state_28376__$1 = state_28376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28376__$1,(4),in$);
} else {
if((state_val_28377 === (23))){
var inst_28370 = (state_28376[(2)]);
var state_28376__$1 = state_28376;
var statearr_28398_28428 = state_28376__$1;
(statearr_28398_28428[(2)] = inst_28370);

(statearr_28398_28428[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (19))){
var inst_28357 = (state_28376[(2)]);
var state_28376__$1 = state_28376;
var statearr_28399_28429 = state_28376__$1;
(statearr_28399_28429[(2)] = inst_28357);

(statearr_28399_28429[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (11))){
var inst_28342 = (state_28376[(7)]);
var inst_28328 = (state_28376[(12)]);
var inst_28342__$1 = cljs.core.seq(inst_28328);
var state_28376__$1 = (function (){var statearr_28400 = state_28376;
(statearr_28400[(7)] = inst_28342__$1);

return statearr_28400;
})();
if(inst_28342__$1){
var statearr_28401_28430 = state_28376__$1;
(statearr_28401_28430[(1)] = (14));

} else {
var statearr_28402_28431 = state_28376__$1;
(statearr_28402_28431[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (9))){
var inst_28364 = (state_28376[(2)]);
var inst_28365 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_28376__$1 = (function (){var statearr_28403 = state_28376;
(statearr_28403[(15)] = inst_28364);

return statearr_28403;
})();
if(cljs.core.truth_(inst_28365)){
var statearr_28404_28432 = state_28376__$1;
(statearr_28404_28432[(1)] = (21));

} else {
var statearr_28405_28433 = state_28376__$1;
(statearr_28405_28433[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (5))){
var inst_28320 = cljs.core.async.close_BANG_(out);
var state_28376__$1 = state_28376;
var statearr_28406_28434 = state_28376__$1;
(statearr_28406_28434[(2)] = inst_28320);

(statearr_28406_28434[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (14))){
var inst_28342 = (state_28376[(7)]);
var inst_28344 = cljs.core.chunked_seq_QMARK_(inst_28342);
var state_28376__$1 = state_28376;
if(inst_28344){
var statearr_28407_28435 = state_28376__$1;
(statearr_28407_28435[(1)] = (17));

} else {
var statearr_28408_28436 = state_28376__$1;
(statearr_28408_28436[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (16))){
var inst_28360 = (state_28376[(2)]);
var state_28376__$1 = state_28376;
var statearr_28409_28437 = state_28376__$1;
(statearr_28409_28437[(2)] = inst_28360);

(statearr_28409_28437[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28377 === (10))){
var inst_28331 = (state_28376[(8)]);
var inst_28329 = (state_28376[(9)]);
var inst_28336 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28329,inst_28331);
var state_28376__$1 = state_28376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28376__$1,(13),out,inst_28336);
} else {
if((state_val_28377 === (18))){
var inst_28342 = (state_28376[(7)]);
var inst_28351 = cljs.core.first(inst_28342);
var state_28376__$1 = state_28376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28376__$1,(20),out,inst_28351);
} else {
if((state_val_28377 === (8))){
var inst_28331 = (state_28376[(8)]);
var inst_28330 = (state_28376[(11)]);
var inst_28333 = (inst_28331 < inst_28330);
var inst_28334 = inst_28333;
var state_28376__$1 = state_28376;
if(cljs.core.truth_(inst_28334)){
var statearr_28410_28438 = state_28376__$1;
(statearr_28410_28438[(1)] = (10));

} else {
var statearr_28411_28439 = state_28376__$1;
(statearr_28411_28439[(1)] = (11));

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
});})(c__26756__auto__))
;
return ((function (switch__26649__auto__,c__26756__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26650__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26650__auto____0 = (function (){
var statearr_28412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28412[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26650__auto__);

(statearr_28412[(1)] = (1));

return statearr_28412;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26650__auto____1 = (function (state_28376){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_28376);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e28413){if((e28413 instanceof Object)){
var ex__26653__auto__ = e28413;
var statearr_28414_28440 = state_28376;
(statearr_28414_28440[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28376);

return cljs.core.cst$kw$recur;
} else {
throw e28413;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__28441 = state_28376;
state_28376 = G__28441;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26650__auto__ = function(state_28376){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26650__auto____1.call(this,state_28376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26650__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26650__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto__))
})();
var state__26758__auto__ = (function (){var statearr_28415 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_28415[(6)] = c__26756__auto__);

return statearr_28415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto__))
);

return c__26756__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28443 = arguments.length;
switch (G__28443) {
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
var G__28446 = arguments.length;
switch (G__28446) {
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
var G__28449 = arguments.length;
switch (G__28449) {
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
var c__26756__auto___28496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto___28496,out){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto___28496,out){
return (function (state_28473){
var state_val_28474 = (state_28473[(1)]);
if((state_val_28474 === (7))){
var inst_28468 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
var statearr_28475_28497 = state_28473__$1;
(statearr_28475_28497[(2)] = inst_28468);

(statearr_28475_28497[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28474 === (1))){
var inst_28450 = null;
var state_28473__$1 = (function (){var statearr_28476 = state_28473;
(statearr_28476[(7)] = inst_28450);

return statearr_28476;
})();
var statearr_28477_28498 = state_28473__$1;
(statearr_28477_28498[(2)] = null);

(statearr_28477_28498[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28474 === (4))){
var inst_28453 = (state_28473[(8)]);
var inst_28453__$1 = (state_28473[(2)]);
var inst_28454 = (inst_28453__$1 == null);
var inst_28455 = cljs.core.not(inst_28454);
var state_28473__$1 = (function (){var statearr_28478 = state_28473;
(statearr_28478[(8)] = inst_28453__$1);

return statearr_28478;
})();
if(inst_28455){
var statearr_28479_28499 = state_28473__$1;
(statearr_28479_28499[(1)] = (5));

} else {
var statearr_28480_28500 = state_28473__$1;
(statearr_28480_28500[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28474 === (6))){
var state_28473__$1 = state_28473;
var statearr_28481_28501 = state_28473__$1;
(statearr_28481_28501[(2)] = null);

(statearr_28481_28501[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28474 === (3))){
var inst_28470 = (state_28473[(2)]);
var inst_28471 = cljs.core.async.close_BANG_(out);
var state_28473__$1 = (function (){var statearr_28482 = state_28473;
(statearr_28482[(9)] = inst_28470);

return statearr_28482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28473__$1,inst_28471);
} else {
if((state_val_28474 === (2))){
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28473__$1,(4),ch);
} else {
if((state_val_28474 === (11))){
var inst_28453 = (state_28473[(8)]);
var inst_28462 = (state_28473[(2)]);
var inst_28450 = inst_28453;
var state_28473__$1 = (function (){var statearr_28483 = state_28473;
(statearr_28483[(7)] = inst_28450);

(statearr_28483[(10)] = inst_28462);

return statearr_28483;
})();
var statearr_28484_28502 = state_28473__$1;
(statearr_28484_28502[(2)] = null);

(statearr_28484_28502[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28474 === (9))){
var inst_28453 = (state_28473[(8)]);
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28473__$1,(11),out,inst_28453);
} else {
if((state_val_28474 === (5))){
var inst_28450 = (state_28473[(7)]);
var inst_28453 = (state_28473[(8)]);
var inst_28457 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28453,inst_28450);
var state_28473__$1 = state_28473;
if(inst_28457){
var statearr_28486_28503 = state_28473__$1;
(statearr_28486_28503[(1)] = (8));

} else {
var statearr_28487_28504 = state_28473__$1;
(statearr_28487_28504[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28474 === (10))){
var inst_28465 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
var statearr_28488_28505 = state_28473__$1;
(statearr_28488_28505[(2)] = inst_28465);

(statearr_28488_28505[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28474 === (8))){
var inst_28450 = (state_28473[(7)]);
var tmp28485 = inst_28450;
var inst_28450__$1 = tmp28485;
var state_28473__$1 = (function (){var statearr_28489 = state_28473;
(statearr_28489[(7)] = inst_28450__$1);

return statearr_28489;
})();
var statearr_28490_28506 = state_28473__$1;
(statearr_28490_28506[(2)] = null);

(statearr_28490_28506[(1)] = (2));


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
});})(c__26756__auto___28496,out))
;
return ((function (switch__26649__auto__,c__26756__auto___28496,out){
return (function() {
var cljs$core$async$state_machine__26650__auto__ = null;
var cljs$core$async$state_machine__26650__auto____0 = (function (){
var statearr_28491 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28491[(0)] = cljs$core$async$state_machine__26650__auto__);

(statearr_28491[(1)] = (1));

return statearr_28491;
});
var cljs$core$async$state_machine__26650__auto____1 = (function (state_28473){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_28473);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e28492){if((e28492 instanceof Object)){
var ex__26653__auto__ = e28492;
var statearr_28493_28507 = state_28473;
(statearr_28493_28507[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28473);

return cljs.core.cst$kw$recur;
} else {
throw e28492;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__28508 = state_28473;
state_28473 = G__28508;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$state_machine__26650__auto__ = function(state_28473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26650__auto____1.call(this,state_28473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26650__auto____0;
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26650__auto____1;
return cljs$core$async$state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto___28496,out))
})();
var state__26758__auto__ = (function (){var statearr_28494 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_28494[(6)] = c__26756__auto___28496);

return statearr_28494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto___28496,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28510 = arguments.length;
switch (G__28510) {
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
var c__26756__auto___28576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto___28576,out){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto___28576,out){
return (function (state_28548){
var state_val_28549 = (state_28548[(1)]);
if((state_val_28549 === (7))){
var inst_28544 = (state_28548[(2)]);
var state_28548__$1 = state_28548;
var statearr_28550_28577 = state_28548__$1;
(statearr_28550_28577[(2)] = inst_28544);

(statearr_28550_28577[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28549 === (1))){
var inst_28511 = (new Array(n));
var inst_28512 = inst_28511;
var inst_28513 = (0);
var state_28548__$1 = (function (){var statearr_28551 = state_28548;
(statearr_28551[(7)] = inst_28512);

(statearr_28551[(8)] = inst_28513);

return statearr_28551;
})();
var statearr_28552_28578 = state_28548__$1;
(statearr_28552_28578[(2)] = null);

(statearr_28552_28578[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28549 === (4))){
var inst_28516 = (state_28548[(9)]);
var inst_28516__$1 = (state_28548[(2)]);
var inst_28517 = (inst_28516__$1 == null);
var inst_28518 = cljs.core.not(inst_28517);
var state_28548__$1 = (function (){var statearr_28553 = state_28548;
(statearr_28553[(9)] = inst_28516__$1);

return statearr_28553;
})();
if(inst_28518){
var statearr_28554_28579 = state_28548__$1;
(statearr_28554_28579[(1)] = (5));

} else {
var statearr_28555_28580 = state_28548__$1;
(statearr_28555_28580[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28549 === (15))){
var inst_28538 = (state_28548[(2)]);
var state_28548__$1 = state_28548;
var statearr_28556_28581 = state_28548__$1;
(statearr_28556_28581[(2)] = inst_28538);

(statearr_28556_28581[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28549 === (13))){
var state_28548__$1 = state_28548;
var statearr_28557_28582 = state_28548__$1;
(statearr_28557_28582[(2)] = null);

(statearr_28557_28582[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28549 === (6))){
var inst_28513 = (state_28548[(8)]);
var inst_28534 = (inst_28513 > (0));
var state_28548__$1 = state_28548;
if(cljs.core.truth_(inst_28534)){
var statearr_28558_28583 = state_28548__$1;
(statearr_28558_28583[(1)] = (12));

} else {
var statearr_28559_28584 = state_28548__$1;
(statearr_28559_28584[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28549 === (3))){
var inst_28546 = (state_28548[(2)]);
var state_28548__$1 = state_28548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28548__$1,inst_28546);
} else {
if((state_val_28549 === (12))){
var inst_28512 = (state_28548[(7)]);
var inst_28536 = cljs.core.vec(inst_28512);
var state_28548__$1 = state_28548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28548__$1,(15),out,inst_28536);
} else {
if((state_val_28549 === (2))){
var state_28548__$1 = state_28548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28548__$1,(4),ch);
} else {
if((state_val_28549 === (11))){
var inst_28528 = (state_28548[(2)]);
var inst_28529 = (new Array(n));
var inst_28512 = inst_28529;
var inst_28513 = (0);
var state_28548__$1 = (function (){var statearr_28560 = state_28548;
(statearr_28560[(7)] = inst_28512);

(statearr_28560[(10)] = inst_28528);

(statearr_28560[(8)] = inst_28513);

return statearr_28560;
})();
var statearr_28561_28585 = state_28548__$1;
(statearr_28561_28585[(2)] = null);

(statearr_28561_28585[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28549 === (9))){
var inst_28512 = (state_28548[(7)]);
var inst_28526 = cljs.core.vec(inst_28512);
var state_28548__$1 = state_28548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28548__$1,(11),out,inst_28526);
} else {
if((state_val_28549 === (5))){
var inst_28521 = (state_28548[(11)]);
var inst_28512 = (state_28548[(7)]);
var inst_28516 = (state_28548[(9)]);
var inst_28513 = (state_28548[(8)]);
var inst_28520 = (inst_28512[inst_28513] = inst_28516);
var inst_28521__$1 = (inst_28513 + (1));
var inst_28522 = (inst_28521__$1 < n);
var state_28548__$1 = (function (){var statearr_28562 = state_28548;
(statearr_28562[(11)] = inst_28521__$1);

(statearr_28562[(12)] = inst_28520);

return statearr_28562;
})();
if(cljs.core.truth_(inst_28522)){
var statearr_28563_28586 = state_28548__$1;
(statearr_28563_28586[(1)] = (8));

} else {
var statearr_28564_28587 = state_28548__$1;
(statearr_28564_28587[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28549 === (14))){
var inst_28541 = (state_28548[(2)]);
var inst_28542 = cljs.core.async.close_BANG_(out);
var state_28548__$1 = (function (){var statearr_28566 = state_28548;
(statearr_28566[(13)] = inst_28541);

return statearr_28566;
})();
var statearr_28567_28588 = state_28548__$1;
(statearr_28567_28588[(2)] = inst_28542);

(statearr_28567_28588[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28549 === (10))){
var inst_28532 = (state_28548[(2)]);
var state_28548__$1 = state_28548;
var statearr_28568_28589 = state_28548__$1;
(statearr_28568_28589[(2)] = inst_28532);

(statearr_28568_28589[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28549 === (8))){
var inst_28521 = (state_28548[(11)]);
var inst_28512 = (state_28548[(7)]);
var tmp28565 = inst_28512;
var inst_28512__$1 = tmp28565;
var inst_28513 = inst_28521;
var state_28548__$1 = (function (){var statearr_28569 = state_28548;
(statearr_28569[(7)] = inst_28512__$1);

(statearr_28569[(8)] = inst_28513);

return statearr_28569;
})();
var statearr_28570_28590 = state_28548__$1;
(statearr_28570_28590[(2)] = null);

(statearr_28570_28590[(1)] = (2));


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
});})(c__26756__auto___28576,out))
;
return ((function (switch__26649__auto__,c__26756__auto___28576,out){
return (function() {
var cljs$core$async$state_machine__26650__auto__ = null;
var cljs$core$async$state_machine__26650__auto____0 = (function (){
var statearr_28571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28571[(0)] = cljs$core$async$state_machine__26650__auto__);

(statearr_28571[(1)] = (1));

return statearr_28571;
});
var cljs$core$async$state_machine__26650__auto____1 = (function (state_28548){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_28548);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e28572){if((e28572 instanceof Object)){
var ex__26653__auto__ = e28572;
var statearr_28573_28591 = state_28548;
(statearr_28573_28591[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28548);

return cljs.core.cst$kw$recur;
} else {
throw e28572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__28592 = state_28548;
state_28548 = G__28592;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$state_machine__26650__auto__ = function(state_28548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26650__auto____1.call(this,state_28548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26650__auto____0;
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26650__auto____1;
return cljs$core$async$state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto___28576,out))
})();
var state__26758__auto__ = (function (){var statearr_28574 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_28574[(6)] = c__26756__auto___28576);

return statearr_28574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto___28576,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28594 = arguments.length;
switch (G__28594) {
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
var c__26756__auto___28664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto___28664,out){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto___28664,out){
return (function (state_28636){
var state_val_28637 = (state_28636[(1)]);
if((state_val_28637 === (7))){
var inst_28632 = (state_28636[(2)]);
var state_28636__$1 = state_28636;
var statearr_28638_28665 = state_28636__$1;
(statearr_28638_28665[(2)] = inst_28632);

(statearr_28638_28665[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28637 === (1))){
var inst_28595 = [];
var inst_28596 = inst_28595;
var inst_28597 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_28636__$1 = (function (){var statearr_28639 = state_28636;
(statearr_28639[(7)] = inst_28596);

(statearr_28639[(8)] = inst_28597);

return statearr_28639;
})();
var statearr_28640_28666 = state_28636__$1;
(statearr_28640_28666[(2)] = null);

(statearr_28640_28666[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28637 === (4))){
var inst_28600 = (state_28636[(9)]);
var inst_28600__$1 = (state_28636[(2)]);
var inst_28601 = (inst_28600__$1 == null);
var inst_28602 = cljs.core.not(inst_28601);
var state_28636__$1 = (function (){var statearr_28641 = state_28636;
(statearr_28641[(9)] = inst_28600__$1);

return statearr_28641;
})();
if(inst_28602){
var statearr_28642_28667 = state_28636__$1;
(statearr_28642_28667[(1)] = (5));

} else {
var statearr_28643_28668 = state_28636__$1;
(statearr_28643_28668[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28637 === (15))){
var inst_28626 = (state_28636[(2)]);
var state_28636__$1 = state_28636;
var statearr_28644_28669 = state_28636__$1;
(statearr_28644_28669[(2)] = inst_28626);

(statearr_28644_28669[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28637 === (13))){
var state_28636__$1 = state_28636;
var statearr_28645_28670 = state_28636__$1;
(statearr_28645_28670[(2)] = null);

(statearr_28645_28670[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28637 === (6))){
var inst_28596 = (state_28636[(7)]);
var inst_28621 = inst_28596.length;
var inst_28622 = (inst_28621 > (0));
var state_28636__$1 = state_28636;
if(cljs.core.truth_(inst_28622)){
var statearr_28646_28671 = state_28636__$1;
(statearr_28646_28671[(1)] = (12));

} else {
var statearr_28647_28672 = state_28636__$1;
(statearr_28647_28672[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28637 === (3))){
var inst_28634 = (state_28636[(2)]);
var state_28636__$1 = state_28636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28636__$1,inst_28634);
} else {
if((state_val_28637 === (12))){
var inst_28596 = (state_28636[(7)]);
var inst_28624 = cljs.core.vec(inst_28596);
var state_28636__$1 = state_28636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28636__$1,(15),out,inst_28624);
} else {
if((state_val_28637 === (2))){
var state_28636__$1 = state_28636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28636__$1,(4),ch);
} else {
if((state_val_28637 === (11))){
var inst_28604 = (state_28636[(10)]);
var inst_28600 = (state_28636[(9)]);
var inst_28614 = (state_28636[(2)]);
var inst_28615 = [];
var inst_28616 = inst_28615.push(inst_28600);
var inst_28596 = inst_28615;
var inst_28597 = inst_28604;
var state_28636__$1 = (function (){var statearr_28648 = state_28636;
(statearr_28648[(11)] = inst_28614);

(statearr_28648[(12)] = inst_28616);

(statearr_28648[(7)] = inst_28596);

(statearr_28648[(8)] = inst_28597);

return statearr_28648;
})();
var statearr_28649_28673 = state_28636__$1;
(statearr_28649_28673[(2)] = null);

(statearr_28649_28673[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28637 === (9))){
var inst_28596 = (state_28636[(7)]);
var inst_28612 = cljs.core.vec(inst_28596);
var state_28636__$1 = state_28636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28636__$1,(11),out,inst_28612);
} else {
if((state_val_28637 === (5))){
var inst_28604 = (state_28636[(10)]);
var inst_28600 = (state_28636[(9)]);
var inst_28597 = (state_28636[(8)]);
var inst_28604__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28600) : f.call(null,inst_28600));
var inst_28605 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28604__$1,inst_28597);
var inst_28606 = cljs.core.keyword_identical_QMARK_(inst_28597,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_28607 = ((inst_28605) || (inst_28606));
var state_28636__$1 = (function (){var statearr_28650 = state_28636;
(statearr_28650[(10)] = inst_28604__$1);

return statearr_28650;
})();
if(cljs.core.truth_(inst_28607)){
var statearr_28651_28674 = state_28636__$1;
(statearr_28651_28674[(1)] = (8));

} else {
var statearr_28652_28675 = state_28636__$1;
(statearr_28652_28675[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28637 === (14))){
var inst_28629 = (state_28636[(2)]);
var inst_28630 = cljs.core.async.close_BANG_(out);
var state_28636__$1 = (function (){var statearr_28654 = state_28636;
(statearr_28654[(13)] = inst_28629);

return statearr_28654;
})();
var statearr_28655_28676 = state_28636__$1;
(statearr_28655_28676[(2)] = inst_28630);

(statearr_28655_28676[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28637 === (10))){
var inst_28619 = (state_28636[(2)]);
var state_28636__$1 = state_28636;
var statearr_28656_28677 = state_28636__$1;
(statearr_28656_28677[(2)] = inst_28619);

(statearr_28656_28677[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28637 === (8))){
var inst_28604 = (state_28636[(10)]);
var inst_28600 = (state_28636[(9)]);
var inst_28596 = (state_28636[(7)]);
var inst_28609 = inst_28596.push(inst_28600);
var tmp28653 = inst_28596;
var inst_28596__$1 = tmp28653;
var inst_28597 = inst_28604;
var state_28636__$1 = (function (){var statearr_28657 = state_28636;
(statearr_28657[(14)] = inst_28609);

(statearr_28657[(7)] = inst_28596__$1);

(statearr_28657[(8)] = inst_28597);

return statearr_28657;
})();
var statearr_28658_28678 = state_28636__$1;
(statearr_28658_28678[(2)] = null);

(statearr_28658_28678[(1)] = (2));


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
});})(c__26756__auto___28664,out))
;
return ((function (switch__26649__auto__,c__26756__auto___28664,out){
return (function() {
var cljs$core$async$state_machine__26650__auto__ = null;
var cljs$core$async$state_machine__26650__auto____0 = (function (){
var statearr_28659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28659[(0)] = cljs$core$async$state_machine__26650__auto__);

(statearr_28659[(1)] = (1));

return statearr_28659;
});
var cljs$core$async$state_machine__26650__auto____1 = (function (state_28636){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_28636);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e28660){if((e28660 instanceof Object)){
var ex__26653__auto__ = e28660;
var statearr_28661_28679 = state_28636;
(statearr_28661_28679[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28636);

return cljs.core.cst$kw$recur;
} else {
throw e28660;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__28680 = state_28636;
state_28636 = G__28680;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
cljs$core$async$state_machine__26650__auto__ = function(state_28636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26650__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26650__auto____1.call(this,state_28636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26650__auto____0;
cljs$core$async$state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26650__auto____1;
return cljs$core$async$state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto___28664,out))
})();
var state__26758__auto__ = (function (){var statearr_28662 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_28662[(6)] = c__26756__auto___28664);

return statearr_28662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto___28664,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

