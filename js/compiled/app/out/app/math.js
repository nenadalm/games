// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('app.math');
goog.require('cljs.core');
goog.require('cljs.core.constants');

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
var G__11813 = arguments.length;
switch (G__11813) {
case 2:
return app.math._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___11815 = arguments.length;
var i__4790__auto___11816 = (0);
while(true){
if((i__4790__auto___11816 < len__4789__auto___11815)){
args_arr__4810__auto__.push((arguments[i__4790__auto___11816]));

var G__11817 = (i__4790__auto___11816 + (1));
i__4790__auto___11816 = G__11817;
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
(app.math._PLUS_.cljs$lang$applyTo = (function (seq11810){
var G__11811 = cljs.core.first(seq11810);
var seq11810__$1 = cljs.core.next(seq11810);
var G__11812 = cljs.core.first(seq11810__$1);
var seq11810__$2 = cljs.core.next(seq11810__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11811,G__11812,seq11810__$2);
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
var G__11822 = arguments.length;
switch (G__11822) {
case 2:
return app.math._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___11824 = arguments.length;
var i__4790__auto___11825 = (0);
while(true){
if((i__4790__auto___11825 < len__4789__auto___11824)){
args_arr__4810__auto__.push((arguments[i__4790__auto___11825]));

var G__11826 = (i__4790__auto___11825 + (1));
i__4790__auto___11825 = G__11826;
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
(app.math._.cljs$lang$applyTo = (function (seq11819){
var G__11820 = cljs.core.first(seq11819);
var seq11819__$1 = cljs.core.next(seq11819);
var G__11821 = cljs.core.first(seq11819__$1);
var seq11819__$2 = cljs.core.next(seq11819__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11820,G__11821,seq11819__$2);
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
var G__11831 = arguments.length;
switch (G__11831) {
case 2:
return app.math._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___11833 = arguments.length;
var i__4790__auto___11834 = (0);
while(true){
if((i__4790__auto___11834 < len__4789__auto___11833)){
args_arr__4810__auto__.push((arguments[i__4790__auto___11834]));

var G__11835 = (i__4790__auto___11834 + (1));
i__4790__auto___11834 = G__11835;
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
(app.math._STAR_.cljs$lang$applyTo = (function (seq11828){
var G__11829 = cljs.core.first(seq11828);
var seq11828__$1 = cljs.core.next(seq11828);
var G__11830 = cljs.core.first(seq11828__$1);
var seq11828__$2 = cljs.core.next(seq11828__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11829,G__11830,seq11828__$2);
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

(app.math.Point2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k11837,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__11841 = k11837;
var G__11841__$1 = (((G__11841 instanceof cljs.core.Keyword))?G__11841.fqn:null);
switch (G__11841__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11837,else__4442__auto__);

}
}));

(app.math.Point2.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__11842){
var vec__11843 = p__11842;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11843,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11843,(1),null);
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

(app.math.Point2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11836){
var self__ = this;
var G__11836__$1 = this;
return (new cljs.core.RecordIter((0),G__11836__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__11846 = (function (coll__4436__auto__){
return (1911967837 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__11846(this__4435__auto____$1);
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

(app.math.Point2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11838,other11839){
var self__ = this;
var this11838__$1 = this;
return (((!((other11839 == null)))) && ((this11838__$1.constructor === other11839.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11838__$1.x,other11839.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11838__$1.y,other11839.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11838__$1.__extmap,other11839.__extmap)));
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

(app.math.Point2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__11836){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__11847 = cljs.core.keyword_identical_QMARK_;
var expr__11848 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__11850 = cljs.core.cst$kw$x;
var G__11851 = expr__11848;
return (pred__11847.cljs$core$IFn$_invoke$arity$2 ? pred__11847.cljs$core$IFn$_invoke$arity$2(G__11850,G__11851) : pred__11847.call(null,G__11850,G__11851));
})())){
return (new app.math.Point2(G__11836,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__11852 = cljs.core.cst$kw$y;
var G__11853 = expr__11848;
return (pred__11847.cljs$core$IFn$_invoke$arity$2 ? pred__11847.cljs$core$IFn$_invoke$arity$2(G__11852,G__11853) : pred__11847.call(null,G__11852,G__11853));
})())){
return (new app.math.Point2(self__.x,G__11836,self__.__meta,self__.__extmap,null));
} else {
return (new app.math.Point2(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__11836),null));
}
}
}));

(app.math.Point2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$x,self__.x,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$y,self__.y,null))], null),self__.__extmap));
}));

(app.math.Point2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__11836){
var self__ = this;
var this__4438__auto____$1 = this;
return (new app.math.Point2(self__.x,self__.y,G__11836,self__.__extmap,self__.__hash));
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
app.math.map__GT_Point2 = (function app$math$map__GT_Point2(G__11840){
var extmap__4478__auto__ = (function (){var G__11854 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11840,cljs.core.cst$kw$x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y], 0));
if(cljs.core.record_QMARK_(G__11840)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11854);
} else {
return G__11854;
}
})();
return (new app.math.Point2(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(G__11840),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(G__11840),null,cljs.core.not_empty(extmap__4478__auto__),null));
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

(app.math.Point2P.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k11857,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__11861 = k11857;
var G__11861__$1 = (((G__11861 instanceof cljs.core.Keyword))?G__11861.fqn:null);
switch (G__11861__$1) {
case "r":
return self__.r;

break;
case "phi":
return self__.phi;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11857,else__4442__auto__);

}
}));

(app.math.Point2P.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__11862){
var vec__11863 = p__11862;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11863,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11863,(1),null);
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

(app.math.Point2P.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11856){
var self__ = this;
var G__11856__$1 = this;
return (new cljs.core.RecordIter((0),G__11856__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r,cljs.core.cst$kw$phi], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__11866 = (function (coll__4436__auto__){
return (-811099741 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__11866(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(app.math.Point2P.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11858,other11859){
var self__ = this;
var this11858__$1 = this;
return (((!((other11859 == null)))) && ((this11858__$1.constructor === other11859.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11858__$1.r,other11859.r)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11858__$1.phi,other11859.phi)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11858__$1.__extmap,other11859.__extmap)));
}));

(app.math.Point2P.prototype.app$math$IntoPoint2$ = cljs.core.PROTOCOL_SENTINEL);

(app.math.Point2P.prototype.app$math$IntoPoint2$_into_point2$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new app.math.Point2(app.math._STAR_.cljs$core$IFn$_invoke$arity$2(self__.r,Math.cos(self__.phi)),app.math._STAR_.cljs$core$IFn$_invoke$arity$2(self__.r,Math.sin(self__.phi)),null,null,null));
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

(app.math.Point2P.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__11856){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__11867 = cljs.core.keyword_identical_QMARK_;
var expr__11868 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__11870 = cljs.core.cst$kw$r;
var G__11871 = expr__11868;
return (pred__11867.cljs$core$IFn$_invoke$arity$2 ? pred__11867.cljs$core$IFn$_invoke$arity$2(G__11870,G__11871) : pred__11867.call(null,G__11870,G__11871));
})())){
return (new app.math.Point2P(G__11856,self__.phi,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__11872 = cljs.core.cst$kw$phi;
var G__11873 = expr__11868;
return (pred__11867.cljs$core$IFn$_invoke$arity$2 ? pred__11867.cljs$core$IFn$_invoke$arity$2(G__11872,G__11873) : pred__11867.call(null,G__11872,G__11873));
})())){
return (new app.math.Point2P(self__.r,G__11856,self__.__meta,self__.__extmap,null));
} else {
return (new app.math.Point2P(self__.r,self__.phi,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__11856),null));
}
}
}));

(app.math.Point2P.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$r,self__.r,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$phi,self__.phi,null))], null),self__.__extmap));
}));

(app.math.Point2P.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__11856){
var self__ = this;
var this__4438__auto____$1 = this;
return (new app.math.Point2P(self__.r,self__.phi,G__11856,self__.__extmap,self__.__hash));
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
app.math.map__GT_Point2P = (function app$math$map__GT_Point2P(G__11860){
var extmap__4478__auto__ = (function (){var G__11874 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11860,cljs.core.cst$kw$r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$phi], 0));
if(cljs.core.record_QMARK_(G__11860)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11874);
} else {
return G__11874;
}
})();
return (new app.math.Point2P(cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(G__11860),cljs.core.cst$kw$phi.cljs$core$IFn$_invoke$arity$1(G__11860),null,cljs.core.not_empty(extmap__4478__auto__),null));
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

(app.math.Vector2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k11877,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__11881 = k11877;
var G__11881__$1 = (((G__11881 instanceof cljs.core.Keyword))?G__11881.fqn:null);
switch (G__11881__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11877,else__4442__auto__);

}
}));

(app.math.Vector2.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__11882){
var vec__11883 = p__11882;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11883,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11883,(1),null);
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

(app.math.Vector2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11876){
var self__ = this;
var G__11876__$1 = this;
return (new cljs.core.RecordIter((0),G__11876__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__11887 = (function (coll__4436__auto__){
return (-254399309 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__11887(this__4435__auto____$1);
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

(app.math.Vector2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11878,other11879){
var self__ = this;
var this11878__$1 = this;
return (((!((other11879 == null)))) && ((this11878__$1.constructor === other11879.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11878__$1.x,other11879.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11878__$1.y,other11879.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11878__$1.__extmap,other11879.__extmap)));
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

(app.math.Vector2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__11876){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__11890 = cljs.core.keyword_identical_QMARK_;
var expr__11891 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__11893 = cljs.core.cst$kw$x;
var G__11894 = expr__11891;
return (pred__11890.cljs$core$IFn$_invoke$arity$2 ? pred__11890.cljs$core$IFn$_invoke$arity$2(G__11893,G__11894) : pred__11890.call(null,G__11893,G__11894));
})())){
return (new app.math.Vector2(G__11876,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__11895 = cljs.core.cst$kw$y;
var G__11896 = expr__11891;
return (pred__11890.cljs$core$IFn$_invoke$arity$2 ? pred__11890.cljs$core$IFn$_invoke$arity$2(G__11895,G__11896) : pred__11890.call(null,G__11895,G__11896));
})())){
return (new app.math.Vector2(self__.x,G__11876,self__.__meta,self__.__extmap,null));
} else {
return (new app.math.Vector2(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__11876),null));
}
}
}));

(app.math.Vector2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$x,self__.x,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$y,self__.y,null))], null),self__.__extmap));
}));

(app.math.Vector2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__11876){
var self__ = this;
var this__4438__auto____$1 = this;
return (new app.math.Vector2(self__.x,self__.y,G__11876,self__.__extmap,self__.__hash));
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
app.math.map__GT_Vector2 = (function app$math$map__GT_Vector2(G__11880){
var extmap__4478__auto__ = (function (){var G__11897 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11880,cljs.core.cst$kw$x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y], 0));
if(cljs.core.record_QMARK_(G__11880)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11897);
} else {
return G__11897;
}
})();
return (new app.math.Vector2(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(G__11880),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(G__11880),null,cljs.core.not_empty(extmap__4478__auto__),null));
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

(app.math.LineSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k11900,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__11904 = k11900;
var G__11904__$1 = (((G__11904 instanceof cljs.core.Keyword))?G__11904.fqn:null);
switch (G__11904__$1) {
case "p1":
return self__.p1;

break;
case "p2":
return self__.p2;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11900,else__4442__auto__);

}
}));

(app.math.LineSegment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__11905){
var vec__11906 = p__11905;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11906,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11906,(1),null);
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

(app.math.LineSegment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11899){
var self__ = this;
var G__11899__$1 = this;
return (new cljs.core.RecordIter((0),G__11899__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p1,cljs.core.cst$kw$p2], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__11909 = (function (coll__4436__auto__){
return (-1023502106 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__11909(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(app.math.LineSegment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11901,other11902){
var self__ = this;
var this11901__$1 = this;
return (((!((other11902 == null)))) && ((this11901__$1.constructor === other11902.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11901__$1.p1,other11902.p1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11901__$1.p2,other11902.p2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11901__$1.__extmap,other11902.__extmap)));
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

(app.math.LineSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__11899){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__11910 = cljs.core.keyword_identical_QMARK_;
var expr__11911 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__11913 = cljs.core.cst$kw$p1;
var G__11914 = expr__11911;
return (pred__11910.cljs$core$IFn$_invoke$arity$2 ? pred__11910.cljs$core$IFn$_invoke$arity$2(G__11913,G__11914) : pred__11910.call(null,G__11913,G__11914));
})())){
return (new app.math.LineSegment(G__11899,self__.p2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__11915 = cljs.core.cst$kw$p2;
var G__11916 = expr__11911;
return (pred__11910.cljs$core$IFn$_invoke$arity$2 ? pred__11910.cljs$core$IFn$_invoke$arity$2(G__11915,G__11916) : pred__11910.call(null,G__11915,G__11916));
})())){
return (new app.math.LineSegment(self__.p1,G__11899,self__.__meta,self__.__extmap,null));
} else {
return (new app.math.LineSegment(self__.p1,self__.p2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__11899),null));
}
}
}));

(app.math.LineSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$p1,self__.p1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$p2,self__.p2,null))], null),self__.__extmap));
}));

(app.math.LineSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__11899){
var self__ = this;
var this__4438__auto____$1 = this;
return (new app.math.LineSegment(self__.p1,self__.p2,G__11899,self__.__extmap,self__.__hash));
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
app.math.map__GT_LineSegment = (function app$math$map__GT_LineSegment(G__11903){
var extmap__4478__auto__ = (function (){var G__11917 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11903,cljs.core.cst$kw$p1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$p2], 0));
if(cljs.core.record_QMARK_(G__11903)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11917);
} else {
return G__11917;
}
})();
return (new app.math.LineSegment(cljs.core.cst$kw$p1.cljs$core$IFn$_invoke$arity$1(G__11903),cljs.core.cst$kw$p2.cljs$core$IFn$_invoke$arity$1(G__11903),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
