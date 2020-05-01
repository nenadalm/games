// Compiled by ClojureScript 1.10.748 {:static-fns true, :optimize-constants true}
goog.provide('app.games.typing_race.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('app.game');
app.games.typing_race.core.process_input = (function app$games$typing_race$core$process_input(data,input){
var G__16736 = cljs.core.first(input);
var G__16736__$1 = (((G__16736 instanceof cljs.core.Keyword))?G__16736.fqn:null);
switch (G__16736__$1) {
case "delta":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$distance,(function (distance){
var x__4209__auto__ = (0);
var y__4210__auto__ = (function (){var movement = (cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(data) * cljs.core.second(input));
return (distance - movement);
})();
return ((x__4209__auto__ > y__4210__auto__) ? x__4209__auto__ : y__4210__auto__);
}));

break;
case "key-down":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.cst$kw$chars.cljs$core$IFn$_invoke$arity$1(data)),cljs.core.second(input))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$chars,cljs.core.rest),cljs.core.cst$kw$distance,cljs.core.inc);
} else {
return data;
}

break;
default:
return data;

}
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
 * @implements {app.game.Game}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.games.typing_race.core.TypingRace = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.games.typing_race.core.TypingRace.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4375__auto__,k__4376__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return this__4375__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4376__auto__,null);
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4377__auto__,k16739,else__4378__auto__){
var self__ = this;
var this__4377__auto____$1 = this;
var G__16743 = k16739;
switch (G__16743) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16739,else__4378__auto__);

}
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4394__auto__,f__4395__auto__,init__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4397__auto__,p__16744){
var vec__16745 = p__16744;
var k__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16745,(0),null);
var v__4399__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16745,(1),null);
return (f__4395__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4395__auto__.cljs$core$IFn$_invoke$arity$3(ret__4397__auto__,k__4398__auto__,v__4399__auto__) : f__4395__auto__.call(null,ret__4397__auto__,k__4398__auto__,v__4399__auto__));
}),init__4396__auto__,this__4394__auto____$1);
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4389__auto__,writer__4390__auto__,opts__4391__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
var pr_pair__4392__auto__ = (function (keyval__4393__auto__){
return cljs.core.pr_sequential_writer(writer__4390__auto__,cljs.core.pr_writer,""," ","",opts__4391__auto__,keyval__4393__auto__);
});
return cljs.core.pr_sequential_writer(writer__4390__auto__,pr_pair__4392__auto__,"#app.games.typing-race.core.TypingRace{",", ","}",opts__4391__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16738){
var self__ = this;
var G__16738__$1 = this;
return (new cljs.core.RecordIter((0),G__16738__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return self__.__meta;
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
return (new app.games.typing_race.core.TypingRace(self__.__meta,self__.__extmap,self__.__hash));
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4379__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4371__auto__){
var self__ = this;
var this__4371__auto____$1 = this;
var h__4233__auto__ = self__.__hash;
if((!((h__4233__auto__ == null)))){
return h__4233__auto__;
} else {
var h__4233__auto____$1 = (function (){var fexpr__16748 = (function (coll__4372__auto__){
return (471216287 ^ cljs.core.hash_unordered_coll(coll__4372__auto__));
});
return fexpr__16748(this__4371__auto____$1);
})();
(self__.__hash = h__4233__auto____$1);

return h__4233__auto____$1;
}
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16740,other16741){
var self__ = this;
var this16740__$1 = this;
return (((!((other16741 == null)))) && ((this16740__$1.constructor === other16741.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16740__$1.__extmap,other16741.__extmap)));
}));

(app.games.typing_race.core.TypingRace.prototype.app$game$Game$ = cljs.core.PROTOCOL_SENTINEL);

(app.games.typing_race.core.TypingRace.prototype.app$game$Game$_init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var available_chars = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(String.fromCharCode,cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(123)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$__$1,cljs.core.cst$kw$tiles,(10),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$available_DASH_chars,available_chars,cljs.core.cst$kw$distance,(0),cljs.core.cst$kw$speed,0.0022,cljs.core.cst$kw$chars,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand_nth(available_chars);
}))], 0));
}));

(app.games.typing_race.core.TypingRace.prototype.app$game$Game$_process_inputs$arity$2 = (function (this$,inputs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.games.typing_race.core.process_input,this$__$1,inputs);
}));

(app.games.typing_race.core.TypingRace.prototype.app$game$Game$_render$arity$3 = (function (this$,settings,context){
var self__ = this;
var this$__$1 = this;
var area_width = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_area_SLASH_size,cljs.core.cst$kw$width], null));
var area_height = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_area_SLASH_size,cljs.core.cst$kw$height], null));
var area_horizontal_center = (function (){var G__16749 = (area_width / (2));
return Math.floor(G__16749);
})();
var tile_size = (function (){var G__16750 = (area_height / cljs.core.cst$kw$tiles.cljs$core$IFn$_invoke$arity$1(this$__$1));
return Math.floor(G__16750);
})();
var chars = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tiles.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.cst$kw$chars.cljs$core$IFn$_invoke$arity$1(this$__$1));
var char_y = (function (i){
var G__16751 = ((area_height - (((2) + i) * tile_size)) - (tile_size * cljs.core.cst$kw$distance.cljs$core$IFn$_invoke$arity$1(this$__$1)));
return Math.floor(G__16751);
});
goog.object.set(context,"textAlign","center");

goog.object.set(context,"textBaseline","top");

goog.object.set(context,"font",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tile_size),"px sans-serif"].join(''));

context.clearRect((0),(0),area_width,area_height);

context.fillRect((function (){var G__16752 = (area_horizontal_center - (tile_size / (2)));
return Math.floor(G__16752);
})(),(area_height - tile_size),tile_size,tile_size);

var n__4608__auto__ = cljs.core.count(chars);
var i = (0);
while(true){
if((i < n__4608__auto__)){
context.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chars,i),area_horizontal_center,char_y(i));

var G__16758 = (i + (1));
i = G__16758;
continue;
} else {
return null;
}
break;
}
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4384__auto__,k__4385__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4385__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4384__auto____$1),self__.__meta),k__4385__auto__);
} else {
return (new app.games.typing_race.core.TypingRace(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4385__auto__)),null));
}
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4382__auto__,k__4383__auto__,G__16738){
var self__ = this;
var this__4382__auto____$1 = this;
var pred__16753 = cljs.core.keyword_identical_QMARK_;
var expr__16754 = k__4383__auto__;
return (new app.games.typing_race.core.TypingRace(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4383__auto__,G__16738),null));
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4387__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4374__auto__,G__16738){
var self__ = this;
var this__4374__auto____$1 = this;
return (new app.games.typing_race.core.TypingRace(G__16738,self__.__extmap,self__.__hash));
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4380__auto__,entry__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4381__auto__)){
return this__4380__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4381__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4381__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4380__auto____$1,entry__4381__auto__);
}
}));

(app.games.typing_race.core.TypingRace.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(app.games.typing_race.core.TypingRace.cljs$lang$type = true);

(app.games.typing_race.core.TypingRace.cljs$lang$ctorPrSeq = (function (this__4418__auto__){
return (new cljs.core.List(null,"app.games.typing-race.core/TypingRace",null,(1),null));
}));

(app.games.typing_race.core.TypingRace.cljs$lang$ctorPrWriter = (function (this__4418__auto__,writer__4419__auto__){
return cljs.core._write(writer__4419__auto__,"app.games.typing-race.core/TypingRace");
}));

/**
 * Positional factory function for app.games.typing-race.core/TypingRace.
 */
app.games.typing_race.core.__GT_TypingRace = (function app$games$typing_race$core$__GT_TypingRace(){
return (new app.games.typing_race.core.TypingRace(null,null,null));
});

/**
 * Factory function for app.games.typing-race.core/TypingRace, taking a map of keywords to field values.
 */
app.games.typing_race.core.map__GT_TypingRace = (function app$games$typing_race$core$map__GT_TypingRace(G__16742){
var extmap__4414__auto__ = (function (){var G__16756 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__16742);
if(cljs.core.record_QMARK_(G__16742)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16756);
} else {
return G__16756;
}
})();
return (new app.games.typing_race.core.TypingRace(null,cljs.core.not_empty(extmap__4414__auto__),null));
});

