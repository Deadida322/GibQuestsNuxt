(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{623:function(e,t,r){"use strict";r.r(t);r(77),r(23),r(81);var n={mounted:function(){window.focus();var e=this;window.onblur=function(){var t=setInterval((function(){var r=document.activeElement;r&&"IFRAME"==r.tagName&&(setTimeout((function(){e.$emit("stageComplete")}),7e3),clearInterval(t))}),100)}},props:{url:{type:String,required:!0}},destroyed:function(){window.onblur=function(){}},methods:{},computed:{computedSrc:function(){var e=this.url.split("=")[1];return"https://www.youtube.com/embed/".concat(e)}}},o=r(55),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("iframe",{attrs:{width:"100%",height:"300",src:e.computedSrc,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})}),[],!1,null,null,null);t.default=component.exports}}]);