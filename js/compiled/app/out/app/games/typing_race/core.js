// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('app.games.typing_race.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('app.game');
app.games.typing_race.core.process_input = (function app$games$typing_race$core$process_input(data,input){
var G__11970 = cljs.core.first(input);
var G__11970__$1 = (((G__11970 instanceof cljs.core.Keyword))?G__11970.fqn:null);
switch (G__11970__$1) {
case "delta":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$distance,(function (distance){
var x__4273__auto__ = (0);
var y__4274__auto__ = (function (){var movement = (cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(data) * cljs.core.second(input));
return (distance - movement);
})();
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
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
(app.games.typing_race.core.TypingRace.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k11973,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__11977 = k11973;
switch (G__11977) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11973,else__4442__auto__);

}
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__11978){
var vec__11979 = p__11978;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11979,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11979,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#app.games.typing-race.core.TypingRace{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11972){
var self__ = this;
var G__11972__$1 = this;
return (new cljs.core.RecordIter((0),G__11972__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new app.games.typing_race.core.TypingRace(self__.__meta,self__.__extmap,self__.__hash));
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__11982 = (function (coll__4436__auto__){
return (471216287 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__11982(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11974,other11975){
var self__ = this;
var this11974__$1 = this;
return (((!((other11975 == null)))) && ((this11974__$1.constructor === other11975.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11974__$1.__extmap,other11975.__extmap)));
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
var area_horizontal_center = (function (){var G__11983 = (area_width / (2));
return Math.floor(G__11983);
})();
var tile_size = (function (){var G__11984 = (area_height / cljs.core.cst$kw$tiles.cljs$core$IFn$_invoke$arity$1(this$__$1));
return Math.floor(G__11984);
})();
var chars = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tiles.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.cst$kw$chars.cljs$core$IFn$_invoke$arity$1(this$__$1));
var char_y = (function (i){
var G__11985 = ((area_height - (((2) + i) * tile_size)) - (tile_size * cljs.core.cst$kw$distance.cljs$core$IFn$_invoke$arity$1(this$__$1)));
return Math.floor(G__11985);
});
goog.object.set(context,"textAlign","center");

goog.object.set(context,"textBaseline","top");

goog.object.set(context,"font",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tile_size),"px sans-serif"].join(''));

context.clearRect((0),(0),area_width,area_height);

context.fillRect((function (){var G__11986 = (area_horizontal_center - (tile_size / (2)));
return Math.floor(G__11986);
})(),(area_height - tile_size),tile_size,tile_size);

var n__4666__auto__ = cljs.core.count(chars);
var i = (0);
while(true){
if((i < n__4666__auto__)){
context.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chars,i),area_horizontal_center,char_y(i));

var G__11992 = (i + (1));
i = G__11992;
continue;
} else {
return null;
}
break;
}
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new app.games.typing_race.core.TypingRace(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__11972){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__11987 = cljs.core.keyword_identical_QMARK_;
var expr__11988 = k__4447__auto__;
return (new app.games.typing_race.core.TypingRace(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__11972),null));
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__11972){
var self__ = this;
var this__4438__auto____$1 = this;
return (new app.games.typing_race.core.TypingRace(G__11972,self__.__extmap,self__.__hash));
}));

(app.games.typing_race.core.TypingRace.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(app.games.typing_race.core.TypingRace.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(app.games.typing_race.core.TypingRace.cljs$lang$type = true);

(app.games.typing_race.core.TypingRace.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"app.games.typing-race.core/TypingRace",null,(1),null));
}));

(app.games.typing_race.core.TypingRace.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"app.games.typing-race.core/TypingRace");
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
app.games.typing_race.core.map__GT_TypingRace = (function app$games$typing_race$core$map__GT_TypingRace(G__11976){
var extmap__4478__auto__ = (function (){var G__11990 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__11976);
if(cljs.core.record_QMARK_(G__11976)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11990);
} else {
return G__11990;
}
})();
return (new app.games.typing_race.core.TypingRace(null,cljs.core.not_empty(extmap__4478__auto__),null));
});

