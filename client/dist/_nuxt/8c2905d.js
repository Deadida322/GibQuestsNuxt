(window.webpackJsonp=window.webpackJsonp||[]).push([[37,10],{467:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var n=r(468),o=r(0),c=Object(o.h)("v-card__actions"),l=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),v=Object(o.h)("v-card__title");n.a},468:function(t,e,r){"use strict";r(12),r(10),r(13),r(4),r(14),r(11),r(15);var n=r(2),o=(r(27),r(213),r(214),r(470),r(212)),c=r(472),l=r(87),d=r(8);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},470:function(t,e,r){var content=r(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("e23b7040",content,!0,{sourceMap:!1})},471:function(t,e,r){var n=r(21)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},476:function(t,e,r){var content=r(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("424d9537",content,!0,{sourceMap:!1})},477:function(t,e,r){var n=r(21)(!1);n.push([t.i,".v-main{display:flex;flex:1 0 auto;max-width:100%;transition:.2s cubic-bezier(.4,0,.2,1)}.v-main:not([data-booted=true]){transition:none!important}.v-main__wrap{flex:1 1 auto;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-main{display:block}}}",""]),t.exports=n},485:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{}},components:{QuestMenu:r(486).default},props:{edit:{type:Boolean,default:!1},item:{type:Object,required:!0}}},o=r(45),c=r(57),l=r.n(c),d=r(203),v=r(219),h=r(468),m=r(467),_=r(175),f=r(460),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{elevation:"4"}},[r("v-img",{staticClass:"d-flex align-center text-center justify-center",attrs:{height:"150",gradient:"to top right, rgba(0,0,0,.2), rgba(25,32,72,.5)",dark:"",src:t.item.image}},[r("p",{staticClass:"text-body-1 pa-2",domProps:{innerHTML:t._s(t.item.description.slice(0,130)+"...")}})]),t._v(" "),r("v-card-title",{staticClass:"d-flex align-center justify-space-between text--secondary pb-0"},[t._v("\n        "+t._s(t.item.title)+" \n       "),t.edit?r("QuestMenu",{attrs:{id:t.item.id},on:{remove:function(e){return t.$emit("remove")}}}):t._e()],1),t._v(" "),t.item.users&&t.item.users.length?r("div",[r("v-card-subtitle",{staticClass:"py-0 pb-2 text--secondary"},[t._v("Сейчас проходят")]),t._v(" "),r("v-card-text",t._l(t.item.users,(function(e,n){return r("v-avatar",{key:n,staticClass:"mr-2 white--text",attrs:{color:"green"}},[t._v(t._s(e.username.slice(0,2).toUpperCase()))])})),1)],1):t._e(),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{to:"/view/"+t.item.id,color:"primary"}},[t._v("Просмотреть")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAvatar:d.a,VBtn:v.a,VCard:h.a,VCardActions:m.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VImg:_.a,VSpacer:f.a})},486:function(t,e,r){"use strict";r.r(e);r(27),r(35),r(25),r(66);var n={props:{id:{type:Number|String,required:!0}},methods:{copy:function(){navigator.clipboard.writeText("".concat(window.location.href.replace("yours","view"),"/").concat(this.id)).then((function(){console.log(window.location.href)}),(function(){console.log("Copy error")}))}}},o=r(45),c=r(57),l=r.n(c),d=r(219),v=r(199),h=r(200),m=r(136),_=r(204),f=r(112),x=r(62),y=r(451),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-menu",{attrs:{top:"","offset-y":"",transition:"slide-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),n),[r("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),r("v-list",[r("v-list-item-group",[r("v-list-item",{attrs:{to:"/watch/"+t.id,color:"blue"}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"blue"}},[t._v("mdi-eye")])],1),t._v(" "),r("v-list-item-title",[t._v("Отслеживать")])],1),t._v(" "),r("v-list-item",{attrs:{to:"/create/"+t.id,color:"primary"}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"primary"}},[t._v("mdi-pencil")])],1),t._v(" "),r("v-list-item-title",[t._v("Редактировать")])],1),t._v(" "),r("v-list-item",{attrs:{color:"warning"},on:{click:t.copy}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"warning"}},[t._v("mdi-clipboard")])],1),t._v(" "),r("v-list-item-title",[t._v("Копировать url")])],1),t._v(" "),r("v-list-item",{attrs:{color:"error"},on:{click:function(e){return t.$emit("remove")}}},[r("v-list-item-icon",[r("v-icon",{staticClass:"mr-0",attrs:{color:"error"}},[t._v("mdi-delete")])],1),t._v(" "),r("v-list-item-title",{attrs:{"prepend-icon":"mdi-delete"}},[t._v("Удалить")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VIcon:v.a,VList:h.a,VListItem:m.a,VListItemGroup:_.a,VListItemIcon:f.a,VListItemTitle:x.b,VMenu:y.a})},489:function(t,e,r){"use strict";r(476);var n=r(141);e.a=n.a.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,r=t.top,n=t.right,footer=t.footer,o=t.insetFooter,c=t.bottom,l=t.left;return{paddingTop:"".concat(r+e,"px"),paddingRight:"".concat(n,"px"),paddingBottom:"".concat(footer+o+c,"px"),paddingLeft:"".concat(l,"px")}}},render:function(t){var data={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,data,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},673:function(t,e,r){"use strict";r.r(e);var n=r(218),o=r(485),c={components:{Header:n.default,Quest:o.default},data:function(){return{search:"",quests:[]}},created:function(){var t=this;this.$axios.get("/getQuests").then((function(e){t.quests=e.data.data}))}},l=r(45),d=r(57),v=r.n(d),h=r(489),m=r(656),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header",{attrs:{title:"Все квесты"}}),t._v(" "),r("v-main",{staticClass:"pa-2 mt-4"},[r("v-text-field",{attrs:{solo:"",label:"Найти квест"}}),t._v(" "),t._l(t.quests,(function(t){return r("Quest",{key:t.id,staticClass:"mb-4",attrs:{item:t}})}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{Quest:r(485).default}),v()(component,{VMain:h.a,VTextField:m.a})}}]);