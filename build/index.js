(()=>{"use strict";var e,t={323:(e,t,r)=>{var o=r(609);const n=window.lodash,l=window.wp.data,a=window.wp.blockEditor,i=window.wp.richText,c=window.wp.i18n,s=window.wp.components,m=(0,o.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(s.Path,{d:"M16.4,13.3L8.8,5.8l1.6-1.6c0.5-0.6,2.5-0.5,3.7,0.3c1.3,0.9,1.5,1.4,3.1,2.2c1.3,0.7,2.6,1.3,4.7,0.9L16.4,13.3z M15.6,14.1L8.1,6.6L6.2,8.5c-0.4,0.4-0.4,1.1,0,1.5l1.1,1.1c0.4,0.4,0.4,1.1,0,1.5c-0.6,0.6-1.5,1.2-2.4,1.8 c-0.4,0.3-0.7,0.6-1.1,0.9c-1.4,1.4-2.5,3.4-1.5,4.5c1.1,1.1,3,0,4.5-1.4c0.3-0.3,0.6-0.7,0.9-1.1c0.6-0.8,1.2-1.7,1.8-2.4 c0.4-0.4,1.1-0.4,1.5,0l1.1,1.1c0.4,0.4,1.1,0.4,1.5,0L15.6,14.1z"})),p=(0,o.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(s.Path,{d:"M18.3,4.3l1.5,1.5c0.5,0.5,0.8,1.2,0.8,1.9v2.8c0,0.7-0.3,1.4-0.8,1.9L11,21.2C10.5,21.7,9.8,22,9.1,22 c-0.7,0-1.4-0.3-1.9-0.8l-1.5-1.5l-1.5-1.5c-0.5-0.5-0.8-1.2-0.8-1.9v-2.8c0-0.7,0.3-1.4,0.8-2L13,2.8C13.5,2.3,14.2,2,14.9,2 c0.7,0,1.4,0.3,1.9,0.8L18.3,4.3z M10.1,17.1l8.5-8.5c0.5-0.5,0.5-1.4,0-1.9l-2.8-2.8c-0.2-0.2-0.6-0.4-1-0.4s-0.7,0.1-0.9,0.4 l-8.5,8.5c-0.5,0.5-0.5,1.4,0,1.9l2.8,2.8C8.7,17.6,9.6,17.6,10.1,17.1z"})),u=(0,c.__)("Clear format","richtext-extension");rtexConf.clearFormatActive&&(0,i.registerFormatType)("rtex/rtex-clear-format",{title:u,tagName:"span",className:"rtex-clear-format",edit:({isActive:e,value:t,onChange:r})=>(0,o.createElement)(a.RichTextToolbarButton,{icon:p,title:u,onClick:()=>{const e=(0,l.select)("core/rich-text").getFormatTypes();if(0<e.length){let o=t;(0,n.map)(e,(e=>{o=(0,i.removeFormat)(o,e.name)})),r({...o})}},isActive:e})});const v=window.wp.domReady;var h=r.n(v);const d=window.wp.primitives;var w=r(848);const f=(0,w.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,w.jsx)(d.Path,{d:"M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z"})}),x="rtex/rtex-underline",g=(0,c.__)("Underline","richtext-extension"),y=(0,c.__)("Underline (Deprecated)","richtext-extension");function _(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(r=_(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}h()((()=>{rtexConf.underlineActive&&((0,i.unregisterFormatType)("core/underline"),(0,i.registerFormatType)("rtex/rtex-underline-deprecated",{title:y,tagName:"u",className:null}),(0,i.registerFormatType)(x,{title:g,tagName:"span",className:null,attributes:{style:"style"},edit({isActive:e,value:t,onChange:r}){const n=()=>r((0,i.toggleFormat)(t,{type:x,attributes:{style:"text-decoration: underline;"},title:g}));return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(a.RichTextShortcut,{type:"primary",character:"u",onUse:n}),(0,o.createElement)(a.RichTextToolbarButton,{icon:f,title:g,onClick:n,isActive:e}))}}))}));const E=function(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=_(e))&&(o&&(o+=" "),o+=t);return o},b=({label:e,icon:t,title:r,className:n,slotFillName:l},c)=>{const{Fill:m,Slot:p}=(0,s.createSlotFill)(l),u=m;u.Slot=p;const v="rtex/"+n,h=({value:e,onChange:l,isActive:a})=>(0,o.createElement)(u,null,(0,o.createElement)(s.ToolbarButton,{icon:t,title:(0,o.createElement)("span",{className:n},r),onClick:()=>{l((0,i.toggleFormat)(e,{type:v}))},isActive:a}));return[v,{title:r,tagName:"span",className:n,edit:r=>c?h(r):(0,o.createElement)(o.Fragment,null,h(r),(0,o.createElement)(a.BlockFormatControls,null,(0,o.createElement)(u.Slot,null,(r=>{if(!r.length)return null;const n=r.map((([{props:e}])=>e)),l=n.some((({isActive:e})=>e));return(0,o.createElement)(s.ToolbarItem,null,(r=>(0,o.createElement)(s.DropdownMenu,{toggleProps:{...r,className:E(r.className,{"is-pressed":l})},popoverProps:{className:"rtex-dropdown-popover"},icon:t,label:e,controls:n})))}))))}]},N=(0,c.__)("Highlighter","richtext-extension");rtexConf.highlighter.forEach((({title:e,className:t},r)=>{const o=b({label:N,icon:m,title:e,className:t,slotFillName:"HighlighterDropdownControls"},r);(0,i.registerFormatType)(...o)}));const F=(0,w.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,w.jsx)(d.Path,{d:"M12.9 6h-2l-4 11h1.9l1.1-3h4.2l1.1 3h1.9L12.9 6zm-2.5 6.5l1.5-4.9 1.7 4.9h-3.2z"})}),C=(0,c.__)("Font size","richtext-extension");rtexConf.fontSize.forEach((({title:e,className:t},r)=>{const o=b({label:C,icon:F,title:e,className:t,slotFillName:"FontSizeDropdownControls"},r);(0,i.registerFormatType)(...o)}))},20:(e,t,r)=>{var o=r(609),n=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,r){var o,c={},s=null,m=null;for(o in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(m=t.ref),t)l.call(t,o)&&!i.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{$$typeof:n,type:e,key:s,ref:m,props:c,_owner:a.current}}},848:(e,t,r)=>{e.exports=r(20)},609:e=>{e.exports=window.React}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=(t,r,n,l)=>{if(!r){var a=1/0;for(m=0;m<e.length;m++){r=e[m][0],n=e[m][1],l=e[m][2];for(var i=!0,c=0;c<r.length;c++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(i=!1,l<a&&(a=l));if(i){e.splice(m--,1);var s=n();void 0!==s&&(t=s)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[r,n,l]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,l,a=r[0],i=r[1],c=r[2],s=0;if(a.some((t=>0!==e[t]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(c)var m=c(o)}for(t&&t(r);s<a.length;s++)l=a[s],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(m)},r=self.webpackChunkrichtext_extension=self.webpackChunkrichtext_extension||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[350],(()=>o(323)));n=o.O(n)})();