// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('app.math');
goog.require('cljs.core');
goog.require('cljs.core.constants');
app.math.pi = 3.14;

/**
 * @interface
 */
app.math.Add = function(){};

app.math.__PLUS_ = (function app$math$__PLUS_(this$,x){
if((((!((this$ == null)))) && ((!((this$.app$math$Add$__PLUS_$arity$2 == null)))))){
return this$.app$math$Add$__PLUS_$arity$2(this$,x);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (app.math.__PLUS_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4488__auto__.call(null,this$,x));
} else {
var m__4485__auto__ = (app.math.__PLUS_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4485__auto__.call(null,this$,x));
} else {
throw cljs.core.missing_protocol("Add.-+",this$);
}
}
}
});

app.math._PLUS_ = (function app$math$_PLUS_(var_args){
var G__13646 = arguments.length;
switch (G__13646) {
case 2:
return app.math._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___13648 = arguments.length;
var i__4790__auto___13649 = (0);
while(true){
if((i__4790__auto___13649 < len__4789__auto___13648)){
args_arr__4810__auto__.push((arguments[i__4790__auto___13649]));

var G__13650 = (i__4790__auto___13649 + (1));
i__4790__auto___13649 = G__13650;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return app.math._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(app.math._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return app.math.__PLUS_(x,y);
}));

(app.math._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.math.__PLUS_,app.math.__PLUS_(x,y),more);
}));

/** @this {Function} */
(app.math._PLUS_.cljs$lang$applyTo = (function (seq13643){
var G__13644 = cljs.core.first(seq13643);
var seq13643__$1 = cljs.core.next(seq13643);
var G__13645 = cljs.core.first(seq13643__$1);
var seq13643__$2 = cljs.core.next(seq13643__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13644,G__13645,seq13643__$2);
}));

(app.math._PLUS_.cljs$lang$maxFixedArity = (2));


/**
 * @interface
 */
app.math.Sub = function(){};

app.math.__ = (function app$math$__(this$,x){
if((((!((this$ == null)))) && ((!((this$.app$math$Sub$__$arity$2 == null)))))){
return this$.app$math$Sub$__$arity$2(this$,x);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (app.math.__[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4488__auto__.call(null,this$,x));
} else {
var m__4485__auto__ = (app.math.__["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4485__auto__.call(null,this$,x));
} else {
throw cljs.core.missing_protocol("Sub.--",this$);
}
}
}
});

app.math._ = (function app$math$_(var_args){
var G__13655 = arguments.length;
switch (G__13655) {
case 2:
return app.math._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___13657 = arguments.length;
var i__4790__auto___13658 = (0);
while(true){
if((i__4790__auto___13658 < len__4789__auto___13657)){
args_arr__4810__auto__.push((arguments[i__4790__auto___13658]));

var G__13659 = (i__4790__auto___13658 + (1));
i__4790__auto___13658 = G__13659;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return app.math._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(app.math._.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return app.math.__(x,y);
}));

(app.math._.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.math.__,app.math.__(x,y),more);
}));

/** @this {Function} */
(app.math._.cljs$lang$applyTo = (function (seq13652){
var G__13653 = cljs.core.first(seq13652);
var seq13652__$1 = cljs.core.next(seq13652);
var G__13654 = cljs.core.first(seq13652__$1);
var seq13652__$2 = cljs.core.next(seq13652__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13653,G__13654,seq13652__$2);
}));

(app.math._.cljs$lang$maxFixedArity = (2));


/**
 * @interface
 */
app.math.Mul = function(){};

app.math.__STAR_ = (function app$math$__STAR_(this$,x){
if((((!((this$ == null)))) && ((!((this$.app$math$Mul$__STAR_$arity$2 == null)))))){
return this$.app$math$Mul$__STAR_$arity$2(this$,x);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (app.math.__STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4488__auto__.call(null,this$,x));
} else {
var m__4485__auto__ = (app.math.__STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4485__auto__.call(null,this$,x));
} else {
throw cljs.core.missing_protocol("Mul.-*",this$);
}
}
}
});


/**
 * @interface
 */
app.math.Reflection = function(){};

app.math._reflection = (function app$math$_reflection(this$,l){
if((((!((this$ == null)))) && ((!((this$.app$math$Reflection$_reflection$arity$2 == null)))))){
return this$.app$math$Reflection$_reflection$arity$2(this$,l);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (app.math._reflection[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,l) : m__4488__auto__.call(null,this$,l));
} else {
var m__4485__auto__ = (app.math._reflection["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,l) : m__4485__auto__.call(null,this$,l));
} else {
throw cljs.core.missing_protocol("Reflection.-reflection",this$);
}
}
}
});

app.math.reflection = (function app$math$reflection(v,l){
return app.math._reflection(v,l);
});
app.math._STAR_ = (function app$math$_STAR_(var_args){
var G__13664 = arguments.length;
switch (G__13664) {
case 2:
return app.math._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___13666 = arguments.length;
var i__4790__auto___13667 = (0);
while(true){
if((i__4790__auto___13667 < len__4789__auto___13666)){
args_arr__4810__auto__.push((arguments[i__4790__auto___13667]));

var G__13668 = (i__4790__auto___13667 + (1));
i__4790__auto___13667 = G__13668;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return app.math._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(app.math._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return app.math.__STAR_(x,y);
}));

(app.math._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.math.__STAR_,app.math.__STAR_(x,y),more);
}));

/** @this {Function} */
(app.math._STAR_.cljs$lang$applyTo = (function (seq13661){
var G__13662 = cljs.core.first(seq13661);
var seq13661__$1 = cljs.core.next(seq13661);
var G__13663 = cljs.core.first(seq13661__$1);
var seq13661__$2 = cljs.core.next(seq13661__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13662,G__13663,seq13661__$2);
}));

(app.math._STAR_.cljs$lang$maxFixedArity = (2));


/**
 * @interface
 */
app.math.IntoVector2 = function(){};

app.math._into_vector2 = (function app$math$_into_vector2(this$){
if((((!((this$ == null)))) && ((!((this$.app$math$IntoVector2$_into_vector2$arity$1 == null)))))){
return this$.app$math$IntoVector2$_into_vector2$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (app.math._into_vector2[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (app.math._into_vector2["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IntoVector2.-into-vector2",this$);
}
}
}
});

app.math.into_vector2 = (function app$math$into_vector2(x){
return app.math._into_vector2(x);
});

/**
 * @interface
 */
app.math.IntoPoint2 = function(){};

app.math._into_point2 = (function app$math$_into_point2(this$){
if((((!((this$ == null)))) && ((!((this$.app$math$IntoPoint2$_into_point2$arity$1 == null)))))){
return this$.app$math$IntoPoint2$_into_point2$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (app.math._into_point2[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (app.math._into_point2["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IntoPoint2.-into-point2",this$);
}
}
}
});

app.math.into_point2 = (function app$math$into_point2(x){
return app.math._into_point2(x);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {app.math.Add}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {app.math.Sub}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {app.math.Mul}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.math.Point2 = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.math.Point2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(app.math.Point2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k13670,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__13674 = k13670;
var G__13674__$1 = (((G__13674 instanceof cljs.core.Keyword))?G__13674.fqn:null);
switch (G__13674__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13670,else__4442__auto__);

}
}));

(app.math.Point2.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__13675){
var vec__13676 = p__13675;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13676,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13676,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(app.math.Point2.prototype.app$math$Mul$ = cljs.core.PROTOCOL_SENTINEL);

(app.math.Point2.prototype.app$math$Mul$__STAR_$arity$2 = (function (this$,x__$1){
var self__ = this;
var this$__$1 = this;
var p = app.math._into_point2(x__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.cst$kw$x,cljs.core._STAR_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$y,cljs.core._STAR_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(p));
}));

(app.math.Point2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#app.math.Point2{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$x,self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$y,self__.y],null))], null),self__.__extmap));
}));

(app.math.Point2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13669){
var self__ = this;
var G__13669__$1 = this;
return (new cljs.core.RecordIter((0),G__13669__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.math.Point2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(app.math.Point2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new app.math.Point2(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.math.Point2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(app.math.Point2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__13679 = (function (coll__4436__auto__){
return (1911967837 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__13679(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(app.math.Point2.prototype.app$math$Sub$ = cljs.core.PROTOCOL_SENTINEL);

(app.math.Point2.prototype.app$math$Sub$__$arity$2 = (function (this$,x__$1){
var self__ = this;
var this$__$1 = this;
var p = app.math._into_point2(x__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.cst$kw$x,cljs.core._,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$y,cljs.core._,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(p));
}));

(app.math.Point2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13671,other13672){
var self__ = this;
var this13671__$1 = this;
return (((!((other13672 == null)))) && ((this13671__$1.constructor === other13672.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13671__$1.x,other13672.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13671__$1.y,other13672.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13671__$1.__extmap,other13672.__extmap)));
}));

(app.math.Point2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$y,null,cljs.core.cst$kw$x,null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new app.math.Point2(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(app.math.Point2.prototype.app$math$Add$ = cljs.core.PROTOCOL_SENTINEL);

(app.math.Point2.prototype.app$math$Add$__PLUS_$arity$2 = (function (this$,x__$1){
var self__ = this;
var this$__$1 = this;
var p = app.math._into_point2(x__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.cst$kw$x,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$y,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(p));
}));

(app.math.Point2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__13669){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__13680 = cljs.core.keyword_identical_QMARK_;
var expr__13681 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__13683 = cljs.core.cst$kw$x;
var G__13684 = expr__13681;
return (pred__13680.cljs$core$IFn$_invoke$arity$2 ? pred__13680.cljs$core$IFn$_invoke$arity$2(G__13683,G__13684) : pred__13680.call(null,G__13683,G__13684));
})())){
return (new app.math.Point2(G__13669,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13685 = cljs.core.cst$kw$y;
var G__13686 = expr__13681;
return (pred__13680.cljs$core$IFn$_invoke$arity$2 ? pred__13680.cljs$core$IFn$_invoke$arity$2(G__13685,G__13686) : pred__13680.call(null,G__13685,G__13686));
})())){
return (new app.math.Point2(self__.x,G__13669,self__.__meta,self__.__extmap,null));
} else {
return (new app.math.Point2(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__13669),null));
}
}
}));

(app.math.Point2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$x,self__.x,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$y,self__.y,null))], null),self__.__extmap));
}));

(app.math.Point2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__13669){
var self__ = this;
var this__4438__auto____$1 = this;
return (new app.math.Point2(self__.x,self__.y,G__13669,self__.__extmap,self__.__hash));
}));

(app.math.Point2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(app.math.Point2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$y], null);
}));

(app.math.Point2.cljs$lang$type = true);

(app.math.Point2.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"app.math/Point2",null,(1),null));
}));

(app.math.Point2.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"app.math/Point2");
}));

/**
 * Positional factory function for app.math/Point2.
 */
app.math.__GT_Point2 = (function app$math$__GT_Point2(x,y){
return (new app.math.Point2(x,y,null,null,null));
});

/**
 * Factory function for app.math/Point2, taking a map of keywords to field values.
 */
app.math.map__GT_Point2 = (function app$math$map__GT_Point2(G__13673){
var extmap__4478__auto__ = (function (){var G__13687 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13673,cljs.core.cst$kw$x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y], 0));
if(cljs.core.record_QMARK_(G__13673)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13687);
} else {
return G__13687;
}
})();
return (new app.math.Point2(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(G__13673),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(G__13673),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {app.math.IntoPoint2}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.math.Point2P = (function (r,phi,__meta,__extmap,__hash){
this.r = r;
this.phi = phi;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.math.Point2P.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(app.math.Point2P.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k13690,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__13694 = k13690;
var G__13694__$1 = (((G__13694 instanceof cljs.core.Keyword))?G__13694.fqn:null);
switch (G__13694__$1) {
case "r":
return self__.r;

break;
case "phi":
return self__.phi;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13690,else__4442__auto__);

}
}));

(app.math.Point2P.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__13695){
var vec__13696 = p__13695;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13696,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13696,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(app.math.Point2P.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#app.math.Point2P{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$r,self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$phi,self__.phi],null))], null),self__.__extmap));
}));

(app.math.Point2P.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13689){
var self__ = this;
var G__13689__$1 = this;
return (new cljs.core.RecordIter((0),G__13689__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r,cljs.core.cst$kw$phi], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.math.Point2P.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(app.math.Point2P.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new app.math.Point2P(self__.r,self__.phi,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.math.Point2P.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(app.math.Point2P.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__13699 = (function (coll__4436__auto__){
return (-811099741 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__13699(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(app.math.Point2P.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13691,other13692){
var self__ = this;
var this13691__$1 = this;
return (((!((other13692 == null)))) && ((this13691__$1.constructor === other13692.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13691__$1.r,other13692.r)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13691__$1.phi,other13692.phi)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13691__$1.__extmap,other13692.__extmap)));
}));

(app.math.Point2P.prototype.app$math$IntoPoint2$ = cljs.core.PROTOCOL_SENTINEL);

(app.math.Point2P.prototype.app$math$IntoPoint2$_into_point2$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new app.math.Point2((self__.r * Math.cos(self__.phi)),(self__.r * Math.sin(self__.phi)),null,null,null));
}));

(app.math.Point2P.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$phi,null,cljs.core.cst$kw$r,null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new app.math.Point2P(self__.r,self__.phi,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(app.math.Point2P.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__13689){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__13700 = cljs.core.keyword_identical_QMARK_;
var expr__13701 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__13703 = cljs.core.cst$kw$r;
var G__13704 = expr__13701;
return (pred__13700.cljs$core$IFn$_invoke$arity$2 ? pred__13700.cljs$core$IFn$_invoke$arity$2(G__13703,G__13704) : pred__13700.call(null,G__13703,G__13704));
})())){
return (new app.math.Point2P(G__13689,self__.phi,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13705 = cljs.core.cst$kw$phi;
var G__13706 = expr__13701;
return (pred__13700.cljs$core$IFn$_invoke$arity$2 ? pred__13700.cljs$core$IFn$_invoke$arity$2(G__13705,G__13706) : pred__13700.call(null,G__13705,G__13706));
})())){
return (new app.math.Point2P(self__.r,G__13689,self__.__meta,self__.__extmap,null));
} else {
return (new app.math.Point2P(self__.r,self__.phi,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__13689),null));
}
}
}));

(app.math.Point2P.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$r,self__.r,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$phi,self__.phi,null))], null),self__.__extmap));
}));

(app.math.Point2P.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__13689){
var self__ = this;
var this__4438__auto____$1 = this;
return (new app.math.Point2P(self__.r,self__.phi,G__13689,self__.__extmap,self__.__hash));
}));

(app.math.Point2P.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(app.math.Point2P.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$r,cljs.core.cst$sym$phi], null);
}));

(app.math.Point2P.cljs$lang$type = true);

(app.math.Point2P.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"app.math/Point2P",null,(1),null));
}));

(app.math.Point2P.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"app.math/Point2P");
}));

/**
 * Positional factory function for app.math/Point2P.
 */
app.math.__GT_Point2P = (function app$math$__GT_Point2P(r,phi){
return (new app.math.Point2P(r,phi,null,null,null));
});

/**
 * Factory function for app.math/Point2P, taking a map of keywords to field values.
 */
app.math.map__GT_Point2P = (function app$math$map__GT_Point2P(G__13693){
var extmap__4478__auto__ = (function (){var G__13707 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13693,cljs.core.cst$kw$r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$phi], 0));
if(cljs.core.record_QMARK_(G__13693)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13707);
} else {
return G__13707;
}
})();
return (new app.math.Point2P(cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(G__13693),cljs.core.cst$kw$phi.cljs$core$IFn$_invoke$arity$1(G__13693),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {app.math.Add}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {app.math.Reflection}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {app.math.Sub}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {app.math.Mul}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.math.Vector2 = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.math.Vector2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(app.math.Vector2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k13710,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__13714 = k13710;
var G__13714__$1 = (((G__13714 instanceof cljs.core.Keyword))?G__13714.fqn:null);
switch (G__13714__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13710,else__4442__auto__);

}
}));

(app.math.Vector2.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__13715){
var vec__13716 = p__13715;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13716,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13716,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(app.math.Vector2.prototype.app$math$Mul$ = cljs.core.PROTOCOL_SENTINEL);

(app.math.Vector2.prototype.app$math$Mul$__STAR_$arity$2 = (function (this$,x__$1){
var self__ = this;
var this$__$1 = this;
if((((!((x__$1 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x__$1.app$math$IntoVector2$))))?true:(((!x__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(app.math.IntoVector2,x__$1):false)):cljs.core.native_satisfies_QMARK_(app.math.IntoVector2,x__$1))){
var v = app.math._into_vector2(x__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.cst$kw$x,cljs.core._STAR_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.cst$kw$y,cljs.core._STAR_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(v));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.cst$kw$x,cljs.core._STAR_,x__$1),cljs.core.cst$kw$y,cljs.core._STAR_,x__$1);
}
}));

(app.math.Vector2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#app.math.Vector2{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$x,self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$y,self__.y],null))], null),self__.__extmap));
}));

(app.math.Vector2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13709){
var self__ = this;
var G__13709__$1 = this;
return (new cljs.core.RecordIter((0),G__13709__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.math.Vector2.prototype.app$math$Reflection$ = cljs.core.PROTOCOL_SENTINEL);

(app.math.Vector2.prototype.app$math$Reflection$_reflection$arity$2 = (function (this$,l){
var self__ = this;
var this$__$1 = this;
var vl = app.math._into_vector2(l);
return app.math._.cljs$core$IFn$_invoke$arity$2(app.math._STAR_.cljs$core$IFn$_invoke$arity$variadic((new app.math.Vector2((2),(2),null,null,null)),vl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vl,this$__$1], 0)),this$__$1);
}));

(app.math.Vector2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(app.math.Vector2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new app.math.Vector2(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.math.Vector2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(app.math.Vector2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__13720 = (function (coll__4436__auto__){
return (-254399309 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__13720(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(app.math.Vector2.prototype.app$math$Sub$ = cljs.core.PROTOCOL_SENTINEL);

(app.math.Vector2.prototype.app$math$Sub$__$arity$2 = (function (this$,x__$1){
var self__ = this;
var this$__$1 = this;
if((((!((x__$1 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x__$1.app$math$IntoVector2$))))?true:(((!x__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(app.math.IntoVector2,x__$1):false)):cljs.core.native_satisfies_QMARK_(app.math.IntoVector2,x__$1))){
var v = app.math._into_vector2(x__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.cst$kw$x,cljs.core._,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.cst$kw$y,cljs.core._,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(v));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.cst$kw$x,cljs.core._,x__$1),cljs.core.cst$kw$y,cljs.core._,x__$1);
}
}));

(app.math.Vector2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13711,other13712){
var self__ = this;
var this13711__$1 = this;
return (((!((other13712 == null)))) && ((this13711__$1.constructor === other13712.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13711__$1.x,other13712.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13711__$1.y,other13712.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13711__$1.__extmap,other13712.__extmap)));
}));

(app.math.Vector2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$y,null,cljs.core.cst$kw$x,null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new app.math.Vector2(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(app.math.Vector2.prototype.app$math$Add$ = cljs.core.PROTOCOL_SENTINEL);

(app.math.Vector2.prototype.app$math$Add$__PLUS_$arity$2 = (function (this$,x__$1){
var self__ = this;
var this$__$1 = this;
if((((!((x__$1 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x__$1.app$math$IntoVector2$))))?true:(((!x__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(app.math.IntoVector2,x__$1):false)):cljs.core.native_satisfies_QMARK_(app.math.IntoVector2,x__$1))){
var v = app.math._into_vector2(x__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.cst$kw$x,cljs.core._PLUS_,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.cst$kw$y,cljs.core._PLUS_,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(v));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.cst$kw$x,cljs.core._PLUS_,x__$1),cljs.core.cst$kw$y,cljs.core._PLUS_,x__$1);
}
}));

(app.math.Vector2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__13709){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__13723 = cljs.core.keyword_identical_QMARK_;
var expr__13724 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__13726 = cljs.core.cst$kw$x;
var G__13727 = expr__13724;
return (pred__13723.cljs$core$IFn$_invoke$arity$2 ? pred__13723.cljs$core$IFn$_invoke$arity$2(G__13726,G__13727) : pred__13723.call(null,G__13726,G__13727));
})())){
return (new app.math.Vector2(G__13709,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13728 = cljs.core.cst$kw$y;
var G__13729 = expr__13724;
return (pred__13723.cljs$core$IFn$_invoke$arity$2 ? pred__13723.cljs$core$IFn$_invoke$arity$2(G__13728,G__13729) : pred__13723.call(null,G__13728,G__13729));
})())){
return (new app.math.Vector2(self__.x,G__13709,self__.__meta,self__.__extmap,null));
} else {
return (new app.math.Vector2(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__13709),null));
}
}
}));

(app.math.Vector2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$x,self__.x,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$y,self__.y,null))], null),self__.__extmap));
}));

(app.math.Vector2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__13709){
var self__ = this;
var this__4438__auto____$1 = this;
return (new app.math.Vector2(self__.x,self__.y,G__13709,self__.__extmap,self__.__hash));
}));

(app.math.Vector2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(app.math.Vector2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$y], null);
}));

(app.math.Vector2.cljs$lang$type = true);

(app.math.Vector2.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"app.math/Vector2",null,(1),null));
}));

(app.math.Vector2.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"app.math/Vector2");
}));

/**
 * Positional factory function for app.math/Vector2.
 */
app.math.__GT_Vector2 = (function app$math$__GT_Vector2(x,y){
return (new app.math.Vector2(x,y,null,null,null));
});

/**
 * Factory function for app.math/Vector2, taking a map of keywords to field values.
 */
app.math.map__GT_Vector2 = (function app$math$map__GT_Vector2(G__13713){
var extmap__4478__auto__ = (function (){var G__13730 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13713,cljs.core.cst$kw$x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y], 0));
if(cljs.core.record_QMARK_(G__13713)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13730);
} else {
return G__13730;
}
})();
return (new app.math.Vector2(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(G__13713),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(G__13713),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.math.LineSegment = (function (p1,p2,__meta,__extmap,__hash){
this.p1 = p1;
this.p2 = p2;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.math.LineSegment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(app.math.LineSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k13733,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__13737 = k13733;
var G__13737__$1 = (((G__13737 instanceof cljs.core.Keyword))?G__13737.fqn:null);
switch (G__13737__$1) {
case "p1":
return self__.p1;

break;
case "p2":
return self__.p2;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13733,else__4442__auto__);

}
}));

(app.math.LineSegment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__13738){
var vec__13739 = p__13738;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13739,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13739,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(app.math.LineSegment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#app.math.LineSegment{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p1,self__.p1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p2,self__.p2],null))], null),self__.__extmap));
}));

(app.math.LineSegment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13732){
var self__ = this;
var G__13732__$1 = this;
return (new cljs.core.RecordIter((0),G__13732__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p1,cljs.core.cst$kw$p2], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.math.LineSegment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(app.math.LineSegment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new app.math.LineSegment(self__.p1,self__.p2,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.math.LineSegment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(app.math.LineSegment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__13742 = (function (coll__4436__auto__){
return (-1023502106 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__13742(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(app.math.LineSegment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13734,other13735){
var self__ = this;
var this13734__$1 = this;
return (((!((other13735 == null)))) && ((this13734__$1.constructor === other13735.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13734__$1.p1,other13735.p1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13734__$1.p2,other13735.p2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13734__$1.__extmap,other13735.__extmap)));
}));

(app.math.LineSegment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$p2,null,cljs.core.cst$kw$p1,null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new app.math.LineSegment(self__.p1,self__.p2,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(app.math.LineSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__13732){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__13743 = cljs.core.keyword_identical_QMARK_;
var expr__13744 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__13746 = cljs.core.cst$kw$p1;
var G__13747 = expr__13744;
return (pred__13743.cljs$core$IFn$_invoke$arity$2 ? pred__13743.cljs$core$IFn$_invoke$arity$2(G__13746,G__13747) : pred__13743.call(null,G__13746,G__13747));
})())){
return (new app.math.LineSegment(G__13732,self__.p2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13748 = cljs.core.cst$kw$p2;
var G__13749 = expr__13744;
return (pred__13743.cljs$core$IFn$_invoke$arity$2 ? pred__13743.cljs$core$IFn$_invoke$arity$2(G__13748,G__13749) : pred__13743.call(null,G__13748,G__13749));
})())){
return (new app.math.LineSegment(self__.p1,G__13732,self__.__meta,self__.__extmap,null));
} else {
return (new app.math.LineSegment(self__.p1,self__.p2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__13732),null));
}
}
}));

(app.math.LineSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$p1,self__.p1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$p2,self__.p2,null))], null),self__.__extmap));
}));

(app.math.LineSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__13732){
var self__ = this;
var this__4438__auto____$1 = this;
return (new app.math.LineSegment(self__.p1,self__.p2,G__13732,self__.__extmap,self__.__hash));
}));

(app.math.LineSegment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(app.math.LineSegment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1,cljs.core.cst$sym$p2], null);
}));

(app.math.LineSegment.cljs$lang$type = true);

(app.math.LineSegment.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"app.math/LineSegment",null,(1),null));
}));

(app.math.LineSegment.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"app.math/LineSegment");
}));

/**
 * Positional factory function for app.math/LineSegment.
 */
app.math.__GT_LineSegment = (function app$math$__GT_LineSegment(p1,p2){
return (new app.math.LineSegment(p1,p2,null,null,null));
});

/**
 * Factory function for app.math/LineSegment, taking a map of keywords to field values.
 */
app.math.map__GT_LineSegment = (function app$math$map__GT_LineSegment(G__13736){
var extmap__4478__auto__ = (function (){var G__13750 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13736,cljs.core.cst$kw$p1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$p2], 0));
if(cljs.core.record_QMARK_(G__13736)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13750);
} else {
return G__13750;
}
})();
return (new app.math.LineSegment(cljs.core.cst$kw$p1.cljs$core$IFn$_invoke$arity$1(G__13736),cljs.core.cst$kw$p2.cljs$core$IFn$_invoke$arity$1(G__13736),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.math.Rect = (function (x,y,w,h,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.math.Rect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(app.math.Rect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k13753,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__13757 = k13753;
var G__13757__$1 = (((G__13757 instanceof cljs.core.Keyword))?G__13757.fqn:null);
switch (G__13757__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13753,else__4442__auto__);

}
}));

(app.math.Rect.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__13758){
var vec__13759 = p__13758;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13759,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13759,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(app.math.Rect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#app.math.Rect{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$x,self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$y,self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$w,self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null))], null),self__.__extmap));
}));

(app.math.Rect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13752){
var self__ = this;
var G__13752__$1 = this;
return (new cljs.core.RecordIter((0),G__13752__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y,cljs.core.cst$kw$w,cljs.core.cst$kw$h], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.math.Rect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(app.math.Rect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new app.math.Rect(self__.x,self__.y,self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.math.Rect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(app.math.Rect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__13762 = (function (coll__4436__auto__){
return (1689581072 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__13762(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(app.math.Rect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13754,other13755){
var self__ = this;
var this13754__$1 = this;
return (((!((other13755 == null)))) && ((this13754__$1.constructor === other13755.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13754__$1.x,other13755.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13754__$1.y,other13755.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13754__$1.w,other13755.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13754__$1.h,other13755.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13754__$1.__extmap,other13755.__extmap)));
}));

(app.math.Rect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$y,null,cljs.core.cst$kw$w,null,cljs.core.cst$kw$h,null,cljs.core.cst$kw$x,null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new app.math.Rect(self__.x,self__.y,self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(app.math.Rect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__13752){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__13763 = cljs.core.keyword_identical_QMARK_;
var expr__13764 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__13766 = cljs.core.cst$kw$x;
var G__13767 = expr__13764;
return (pred__13763.cljs$core$IFn$_invoke$arity$2 ? pred__13763.cljs$core$IFn$_invoke$arity$2(G__13766,G__13767) : pred__13763.call(null,G__13766,G__13767));
})())){
return (new app.math.Rect(G__13752,self__.y,self__.w,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13768 = cljs.core.cst$kw$y;
var G__13769 = expr__13764;
return (pred__13763.cljs$core$IFn$_invoke$arity$2 ? pred__13763.cljs$core$IFn$_invoke$arity$2(G__13768,G__13769) : pred__13763.call(null,G__13768,G__13769));
})())){
return (new app.math.Rect(self__.x,G__13752,self__.w,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13770 = cljs.core.cst$kw$w;
var G__13771 = expr__13764;
return (pred__13763.cljs$core$IFn$_invoke$arity$2 ? pred__13763.cljs$core$IFn$_invoke$arity$2(G__13770,G__13771) : pred__13763.call(null,G__13770,G__13771));
})())){
return (new app.math.Rect(self__.x,self__.y,G__13752,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13772 = cljs.core.cst$kw$h;
var G__13773 = expr__13764;
return (pred__13763.cljs$core$IFn$_invoke$arity$2 ? pred__13763.cljs$core$IFn$_invoke$arity$2(G__13772,G__13773) : pred__13763.call(null,G__13772,G__13773));
})())){
return (new app.math.Rect(self__.x,self__.y,self__.w,G__13752,self__.__meta,self__.__extmap,null));
} else {
return (new app.math.Rect(self__.x,self__.y,self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__13752),null));
}
}
}
}
}));

(app.math.Rect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$x,self__.x,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$y,self__.y,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$w,self__.w,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$h,self__.h,null))], null),self__.__extmap));
}));

(app.math.Rect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__13752){
var self__ = this;
var this__4438__auto____$1 = this;
return (new app.math.Rect(self__.x,self__.y,self__.w,self__.h,G__13752,self__.__extmap,self__.__hash));
}));

(app.math.Rect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(app.math.Rect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$y,cljs.core.cst$sym$w,cljs.core.cst$sym$h], null);
}));

(app.math.Rect.cljs$lang$type = true);

(app.math.Rect.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"app.math/Rect",null,(1),null));
}));

(app.math.Rect.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"app.math/Rect");
}));

/**
 * Positional factory function for app.math/Rect.
 */
app.math.__GT_Rect = (function app$math$__GT_Rect(x,y,w,h){
return (new app.math.Rect(x,y,w,h,null,null,null));
});

/**
 * Factory function for app.math/Rect, taking a map of keywords to field values.
 */
app.math.map__GT_Rect = (function app$math$map__GT_Rect(G__13756){
var extmap__4478__auto__ = (function (){var G__13774 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13756,cljs.core.cst$kw$x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y,cljs.core.cst$kw$w,cljs.core.cst$kw$h], 0));
if(cljs.core.record_QMARK_(G__13756)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13774);
} else {
return G__13774;
}
})();
return (new app.math.Rect(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(G__13756),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(G__13756),cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(G__13756),cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(G__13756),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

(app.math.Point2.prototype.app$math$IntoPoint2$ = cljs.core.PROTOCOL_SENTINEL);

(app.math.Point2.prototype.app$math$IntoPoint2$_into_point2$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

(app.math.Point2.prototype.app$math$IntoVector2$ = cljs.core.PROTOCOL_SENTINEL);

(app.math.Point2.prototype.app$math$IntoVector2$_into_vector2$arity$1 = (function (this$){
var this$__$1 = this;
return (new app.math.Vector2(this$__$1.x,this$__$1.y,null,null,null));
}));
(app.math.Point2P.prototype.app$math$IntoVector2$ = cljs.core.PROTOCOL_SENTINEL);

(app.math.Point2P.prototype.app$math$IntoVector2$_into_vector2$arity$1 = (function (this$){
var this$__$1 = this;
return app.math._into_vector2(this$__$1.app$math$IntoPoint2$_into_point2$arity$1(null));
}));
(app.math.Vector2.prototype.app$math$IntoPoint2$ = cljs.core.PROTOCOL_SENTINEL);

(app.math.Vector2.prototype.app$math$IntoPoint2$_into_point2$arity$1 = (function (this$){
var this$__$1 = this;
return (new app.math.Point2(this$__$1.x,this$__$1.y,null,null,null));
}));

(app.math.Vector2.prototype.app$math$IntoVector2$ = cljs.core.PROTOCOL_SENTINEL);

(app.math.Vector2.prototype.app$math$IntoVector2$_into_vector2$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
(cljs.core.PersistentVector.prototype.app$math$IntoPoint2$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.app$math$IntoPoint2$_into_point2$arity$1 = (function (this$){
var this$__$1 = this;
return (new app.math.Point2((this$__$1.cljs$core$IFn$_invoke$arity$1 ? this$__$1.cljs$core$IFn$_invoke$arity$1((0)) : this$__$1.call(null,(0))),(this$__$1.cljs$core$IFn$_invoke$arity$1 ? this$__$1.cljs$core$IFn$_invoke$arity$1((1)) : this$__$1.call(null,(1))),null,null,null));
}));

(cljs.core.PersistentVector.prototype.app$math$IntoVector2$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.app$math$IntoVector2$_into_vector2$arity$1 = (function (this$){
var this$__$1 = this;
return (new app.math.Vector2((this$__$1.cljs$core$IFn$_invoke$arity$1 ? this$__$1.cljs$core$IFn$_invoke$arity$1((0)) : this$__$1.call(null,(0))),(this$__$1.cljs$core$IFn$_invoke$arity$1 ? this$__$1.cljs$core$IFn$_invoke$arity$1((1)) : this$__$1.call(null,(1))),null,null,null));
}));
