(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{497:function(t,e,n){var content=n(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("63c9496b",content,!0,{sourceMap:!1})},498:function(t,e,n){var r=n(21)(!1);r.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=r},511:function(t,e,n){"use strict";n(10),n(12),n(14),n(15);var r=n(2),o=(n(4),n(27),n(13),n(24),n(65),n(482),n(46),n(483),n(484),n(485),n(486),n(487),n(488),n(489),n(490),n(491),n(492),n(493),n(494),n(495),n(57),n(45),n(11),n(86),n(496),n(1)),c=n(115),l=n(0);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],f=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=d.reduce((function(t,e){return t["offset"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),k=d.reduce((function(t,e){return t["order"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(f),offset:Object.keys(m),order:Object.keys(k)};function _(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var y=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},k),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var h in n)l+=String(n[h]);var v=y.get(l);return v||function(){var t,e;for(e in v=[],x)x[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),y.set(l,v)}(),t(n.tag,Object(c.a)(data,{class:v}),o)}})},514:function(t,e,n){t.exports=n.p+"img/marker-icon-2x.680f69f.png"},515:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC"},516:function(t,e,n){"use strict";var r=n(2),o=(n(27),n(45),n(58),n(497),n(75)),c=n(38),l=n(25),h=n(59),v=n(95),d=n(8),f=n(0),m=n(7);e.a=Object(d.a)(o.a,c.a,h.a,Object(v.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:l.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,r=t.insetFooter,o=t.left,c=t.right,l=t.top;return{paddingBottom:Object(f.g)(n+footer+r),paddingLeft:Object(f.g)(o),paddingRight:Object(f.g)(c),paddingTop:Object(f.g)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(m.e)("auto-height",this),0==this.timeout&&Object(m.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(f.o)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(r.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(f.o)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:o.a.options.computed.classes.call(this),style:o.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},535:function(t,e,n){var content=n(585);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("3a50d6b4",content,!0,{sourceMap:!1})},584:function(t,e,n){"use strict";n(535)},585:function(t,e,n){var r=n(21)(!1);r.push([t.i,".map-container[data-v-7cf7c704]{height:300px!important;overflow:hidden}.map-container[data-v-7cf7c704],.map-container div[data-v-7cf7c704]{z-index:0!important}.w-100[data-v-7cf7c704]{width:100%}.z-index-100[data-v-7cf7c704]{position:relative;z-index:100!important}",""]),t.exports=r},638:function(t,e,n){"use strict";n.r(e);n(13),n(10),n(12),n(4),n(14),n(11),n(15);var r=n(2),o=n(140),c=n(26);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{Header:o.a},data:function(){return{quest:{},snackbar:!1,stage:{},currentLat:0,currentLong:0,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',lat:0,long:0,zoom:14,geo:null,id:0}},created:function(){var t=this;function e(t){var e=t.coords,n=[e.latitude,e.longitude];this.lat=n[0],this.long=n[1]}function r(t){var e=t.message;console.log(e)}this.id=this.$route.params.id,this.quest=h({},this.$store.getters["create/getCurrentQuest"]),this.stage=h({},this.$store.getters["create/getCurrentStage"]),this.stage&&"Карта"!=this.stage.type&&this.$router.go(-1),this.stage&&this.stage.stageAction&&this.stage.stageAction.lat&&(this.currentLat=this.stage.stageAction.lat),this.stage&&this.stage.stageAction&&this.stage.stageAction.long&&(this.currentLong=this.stage.stageAction.long),this.stage&&this.stage.lat&&(this.currentLat=this.stage.lat),this.stage&&this.stage.long&&(this.currentLong=this.stage.long),navigator.geolocation.getCurrentPosition((function(){}),r,{enableHighAccuracy:!0,timeout:1e4}),e=e.bind(this),navigator.geolocation.getCurrentPosition(e,r,{enableHighAccuracy:!0}),this.$nextTick((function(){t.geo=navigator.geolocation.watchPosition(e,r,{enableHighAccuracy:!0})})),delete c.Icon.Default.prototype._getIconUrl,c.Icon.Default.mergeOptions({iconRetinaUrl:n(514),iconUrl:n(297),shadowUrl:n(515)})},destroyed:function(){navigator.geolocation.clearWatch(this.geo)},methods:{setStage:function(){this.currentLat=this.lat,this.currentLong=this.long,this.stage.lat=this.currentLat,this.stage.long=this.currentLong,this.quest.stages[this.id]=this.stage,this.$store.commit("create/setCurrentQuest",this.quest),this.snackbar=!0}},computed:{center:function(){return Object(c.latLng)(this.lat,this.long)},currentLoc:function(){return Object(c.latLng)(this.currentLat,this.currentLong)}}},d=(n(584),n(40)),f=n(44),m=n.n(f),k=n(219),x=n(511),_=n(201),y=n(513),w=n(629),O=n(516),C=n(625),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{staticClass:"z-index-100",attrs:{title:"Отметить точку"}}),t._v(" "),n("v-main",{staticClass:"pa-2 mt-4"},[n("v-row",{staticClass:"my-3 d-flex justify-space-between text-center align-center"},[n("v-col",{staticClass:"col col-2",attrs:{"no-gutters":""}},[n("v-icon",{attrs:{large:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("\n                    mdi-arrow-left\n                ")])],1),t._v(" "),n("v-col",{staticClass:"col secondary--text text-h6 col-6"},[t._v("\n                "+t._s(t.quest.id)+" / "+t._s(t.id)+"\n            ")]),t._v(" "),n("v-col",{staticClass:"col col-2"})],1),t._v(" "),n("div",{staticClass:"map-container"},[n("l-map",{ref:"map",attrs:{zoom:t.zoom,center:t.currentLoc}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._v(" "),n("l-marker",{attrs:{"lat-lng":t.center}},[n("l-tooltip",{attrs:{options:{permanent:!0,interactive:!0}}},[n("div",[t._v("\n                            Вы здесь\n                        ")])])],1),t._v(" "),n("l-marker",{attrs:{"lat-lng":t.currentLoc}},[n("l-tooltip",{attrs:{options:{permanent:!0,interactive:!0}}},[n("div",[t._v("\n                            Отмечено \n                        ")])])],1)],1)],1),t._v(" "),n("div",{staticClass:"text-body-1 mt-3"},[t._v("\n            Широта\n        ")]),t._v(" "),n("v-text-field",{staticClass:"mt-2",attrs:{readonly:"",solo:""},model:{value:t.lat,callback:function(e){t.lat=t._n(e)},expression:"lat"}}),t._v(" "),n("div",{staticClass:"text-body-1 mt-1"},[t._v("\n            Долгота\n        ")]),t._v(" "),n("v-text-field",{staticClass:"mt-2",attrs:{readonly:"",solo:""},model:{value:t.long,callback:function(e){t.long=t._n(e)},expression:"long"}}),t._v(" "),n("v-btn",{staticClass:"w-100",attrs:{color:"primary"},on:{click:t.setStage}},[t._v("Отметить здесь")])],1),t._v(" "),n("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){e.attrs;return[n("v-btn",{staticClass:"primary--text",attrs:{text:"",small:""},on:{click:function(e){t.snackbar=!t.snackbar}}},[t._v("\n                Закрыть\n            ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n        Изменения сохранены\n        ")])],1)}),[],!1,null,"7cf7c704",null);e.default=component.exports;m()(component,{VBtn:k.a,VCol:x.a,VIcon:_.a,VMain:y.a,VRow:w.a,VSnackbar:O.a,VTextField:C.a})}}]);