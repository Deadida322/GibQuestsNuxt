(window.webpackJsonp=window.webpackJsonp||[]).push([[38,8,10],{445:function(t,e,r){"use strict";var o=r(219);e.a=o.a},476:function(t,e,r){var content=r(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("424d9537",content,!0,{sourceMap:!1})},477:function(t,e,r){var o=r(21)(!1);o.push([t.i,".v-main{display:flex;flex:1 0 auto;max-width:100%;transition:.2s cubic-bezier(.4,0,.2,1)}.v-main:not([data-booted=true]){transition:none!important}.v-main__wrap{flex:1 1 auto;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-main{display:block}}}",""]),t.exports=o},485:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{}},components:{QuestMenu:r(486).default},props:{edit:{type:Boolean,default:!1},item:{type:Object,required:!0}}},n=r(45),l=r(57),c=r.n(l),d=r(203),v=r(219),h=r(468),m=r(467),f=r(175),_=r(460),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{elevation:"4"}},[r("v-img",{staticClass:"d-flex align-center text-center justify-center",attrs:{height:"150",gradient:"to top right, rgba(0,0,0,.2), rgba(25,32,72,.5)",dark:"",src:t.item.image}},[r("p",{staticClass:"text-body-1 pa-2",domProps:{innerHTML:t._s(t.item.description.slice(0,130)+"...")}})]),t._v(" "),r("v-card-title",{staticClass:"d-flex align-center justify-space-between text--secondary pb-0"},[t._v("\n        "+t._s(t.item.title)+" \n       "),t.edit?r("QuestMenu",{attrs:{id:t.item.id},on:{remove:function(e){return t.$emit("remove")}}}):t._e()],1),t._v(" "),t.item.users&&t.item.users.length?r("div",[r("v-card-subtitle",{staticClass:"py-0 pb-2 text--secondary"},[t._v("Сейчас проходят")]),t._v(" "),r("v-card-text",t._l(t.item.users,(function(e,o){return r("v-avatar",{key:o,staticClass:"mr-2 white--text",attrs:{color:"green"}},[t._v(t._s(e.username.slice(0,2).toUpperCase()))])})),1)],1):t._e(),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{to:"/view/"+t.item.id,color:"primary"}},[t._v("Просмотреть")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAvatar:d.a,VBtn:v.a,VCard:h.a,VCardActions:m.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VImg:f.a,VSpacer:_.a})},486:function(t,e,r){"use strict";r.r(e);r(27),r(35),r(25),r(66);var o={props:{id:{type:Number|String,required:!0}},methods:{copy:function(){navigator.clipboard.writeText("".concat(window.location.href.replace("yours","view"),"/").concat(this.id)).then((function(){console.log(window.location.href)}),(function(){console.log("Copy error")}))}}},n=r(45),l=r(57),c=r.n(l),d=r(219),v=r(199),h=r(200),m=r(136),f=r(204),_=r(112),x=r(62),y=r(451),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-menu",{attrs:{top:"","offset-y":"",transition:"slide-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),o),[r("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),r("v-list",[r("v-list-item-group",[r("v-list-item",{attrs:{to:"/watch/"+t.id,color:"blue"}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"blue"}},[t._v("mdi-eye")])],1),t._v(" "),r("v-list-item-title",[t._v("Отслеживать")])],1),t._v(" "),r("v-list-item",{attrs:{to:"/create/"+t.id,color:"primary"}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"primary"}},[t._v("mdi-pencil")])],1),t._v(" "),r("v-list-item-title",[t._v("Редактировать")])],1),t._v(" "),r("v-list-item",{attrs:{color:"warning"},on:{click:t.copy}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"warning"}},[t._v("mdi-clipboard")])],1),t._v(" "),r("v-list-item-title",[t._v("Копировать url")])],1),t._v(" "),r("v-list-item",{attrs:{color:"error"},on:{click:function(e){return t.$emit("remove")}}},[r("v-list-item-icon",[r("v-icon",{staticClass:"mr-0",attrs:{color:"error"}},[t._v("mdi-delete")])],1),t._v(" "),r("v-list-item-title",{attrs:{"prepend-icon":"mdi-delete"}},[t._v("Удалить")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:v.a,VList:h.a,VListItem:m.a,VListItemGroup:f.a,VListItemIcon:_.a,VListItemTitle:x.b,VMenu:y.a})},489:function(t,e,r){"use strict";r(476);var o=r(141);e.a=o.a.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,r=t.top,o=t.right,footer=t.footer,n=t.insetFooter,l=t.bottom,c=t.left;return{paddingTop:"".concat(r+e,"px"),paddingRight:"".concat(o,"px"),paddingBottom:"".concat(footer+n+l,"px"),paddingLeft:"".concat(c,"px")}}},render:function(t){var data={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,data,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},494:function(t,e,r){var content=r(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("5db1c400",content,!0,{sourceMap:!1})},495:function(t,e,r){var o=r(21)(!1);o.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=o},556:function(t,e,r){"use strict";r(12),r(10),r(13),r(4),r(14),r(11),r(15);var o=r(2),n=(r(42),r(494),r(212)),l=r(445),c=r(114),d=r(59),v=r(24),h=r(1).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),m=r(8),f=r(7);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(m.a)(n.a,d.a,h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},n.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||v.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(f.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},578:function(t,e,r){var content=r(628);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("0acbb913",content,!0,{sourceMap:!1})},585:function(t,e,r){"use strict";r.r(e);var o=r(517),n=r(518),l={mixins:[o.validationMixin],props:{error:{type:[String,Boolean],default:!1}},validations:{user:{username:{required:n.required},password:{required:n.required}}},data:function(){return{user:{username:"",password:""}}},methods:{clear:function(){this.$v.$reset(),this.user={}},submit:function(){this.$v.$touch(),this.$v.user.$anyError||this.$emit("submit",this.user)}},computed:{usernameErrors:function(){var t=[];return this.$v.user.username.$dirty?(!this.$v.user.username.required&&t.push("Введите имя пользователя"),t):t},passwordErrors:function(){var t=[];return this.$v.user.password.$dirty?(!this.$v.user.password.required&&t.push("Введите пароль"),t):t}}},c=r(45),d=r(57),v=r.n(d),h=r(556),m=r(219),f=r(468),_=r(467),x=r(460),y=r(656),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",{staticClass:"primary--text"},[t._v("\n        Войти в аккаунт\n    ")]),t._v(" "),r("v-card-text",[r("v-text-field",{attrs:{"error-messages":t.usernameErrors,required:"",label:"Имя пользователя",outlined:""},on:{input:function(e){return t.$v.user.username.$touch()},blur:function(e){return t.$v.user.username.$touch()}},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),t._v(" "),r("v-text-field",{attrs:{"error-messages":t.passwordErrors,required:"",label:"Пароль",outlined:"",type:"password"},on:{input:function(e){return t.$v.user.password.$touch()},blur:function(e){return t.$v.user.password.$touch()}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),t._v(" "),t.error?r("v-alert",{attrs:{prominent:"",type:"error"}},[t._v("\n            "+t._s(t.error)+"\n        ")]):t._e(),t._v(" "),r("div",{staticClass:"d-flex"},[r("v-spacer"),t._v(" "),r("a",{staticClass:"w-100 text-right text-decoration-underline",on:{click:function(e){return t.$router.push("/register")}}},[t._v("Регистрация")])],1)],1),t._v(" "),r("v-card-actions",{staticClass:"pt-0 pr-4"},[r("v-spacer"),t._v(" "),r("v-btn",{on:{click:t.clear}},[t._v("\n            Очистить\n        ")]),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:t.submit}},[t._v("\n            Войти\n        ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAlert:h.a,VBtn:m.a,VCard:f.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VSpacer:x.a,VTextField:y.a})},627:function(t,e,r){"use strict";r(578)},628:function(t,e,r){var o=r(21)(!1);o.push([t.i,".h-80{height:80vh!important}",""]),t.exports=o},662:function(t,e,r){"use strict";r.r(e);r(12),r(10),r(13),r(4),r(14),r(11),r(15);var o=r(2),n=(r(84),r(218)),l=r(485),c=r(585),d=r(89);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={components:{Header:n.default,Quest:l.default,LoginForm:c.default},layout:"creating",data:function(){return{error:!1}},methods:{submit:function(t){var e=this;this.$store.dispatch("auth/logIn",t).then((function(t){e.error=!1,e.$router.push("/")})).catch((function(t){return e.error=t}))}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)("quests",["quests"]))},m=h,f=(r(627),r(45)),_=r(57),x=r.n(_),y=r(489),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header",{attrs:{title:"Авторизация"}}),t._v(" "),r("v-main",{staticClass:"pa-2 d-flex h-80 align-center mt-4"},[r("LoginForm",{attrs:{error:t.error},on:{submit:t.submit}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VMain:y.a})}}]);