"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[955],{955:function(e,n,r){r.r(n),r.d(n,{default:function(){return I}});var t=r(5671),u=r(3144),o=r(136),s=r(516),i=r(2791),a=r(342),c="User_container__ptlQP",l="User_wrapper__AV+Fj",f="User_subscribe__Jyavl",p="User_about__u78jF",d="User_selectedPage__gtmjw",g="User_commonPage__XIS1V";var h=r(184),v=function(e){var n=e.totalUsersCount,r=e.pageSize,t=e.currentPage,u=e.onPageChanged,o=Math.ceil(n/r),s=[];return function(e,n,r){if(n>10)if(r>5)for(var t=r-4;t<=r+5&&(e.push(t),t!==n);t++);else for(var u=1;u<=10&&(e.push(u),u!==n);u++);else for(var o=1;o<=n;o++)e.push(o)}(s,o,t),(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{onClick:function(){u(t>10?t-10:t-(t-1))},children:"-10"}),s.map((function(e){return(0,h.jsx)("span",{className:t===e?d:g,onClick:function(){u(e)},children:e},e)})),(0,h.jsx)("button",{onClick:function(){u(t+10<=o?t+10:o)},children:"+10"})]})},m=r(1087),y=function(e){var n=e.props,r=e.photos,t=e.id,u=e.name,o=e.status,s=e.followed;return(0,h.jsxs)("div",{className:c,children:[(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)(m.OL,{to:"/profile/"+t,children:(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:null!==r.small?r.small:"https://avatars.mds.yandex.net/i?id=7406b5bf2010aace1c9c3d0381c45881f703f689-6250997-images-thumbs&n=13",alt:"ava"})})}),(0,h.jsx)("div",{children:s?(0,h.jsx)("button",{disabled:n.sendingDataInProgress.includes(t),onClick:function(){n.unfollow(t)},children:"UNFOLLOW"}):(0,h.jsx)("button",{disabled:n.sendingDataInProgress.includes(t),onClick:function(){n.follow(t)},children:"FOLLOW"})})]}),(0,h.jsxs)("div",{className:p,children:[(0,h.jsx)("div",{children:u}),(0,h.jsx)("div",{children:o})]})]})},j=function(e){return(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)(v,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize}),e.users.map((function(n){return(0,h.jsx)(y,{props:e,photos:n.photos,id:n.id,name:n.name,followed:n.followed,status:n.status,className:c},n.id)}))]})},C=r(3531),x=r(1310),P=r(7781),w="NOT_FOUND";var _=function(e,n){return e===n};function b(e,n){var r="object"===typeof n?n:{equalityCheck:n},t=r.equalityCheck,u=void 0===t?_:t,o=r.maxSize,s=void 0===o?1:o,i=r.resultEqualityCheck,a=function(e){return function(n,r){if(null===n||null===r||n.length!==r.length)return!1;for(var t=n.length,u=0;u<t;u++)if(!e(n[u],r[u]))return!1;return!0}}(u),c=1===s?function(e){var n;return{get:function(r){return n&&e(n.key,r)?n.value:w},put:function(e,r){n={key:e,value:r}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(a):function(e,n){var r=[];function t(e){var t=r.findIndex((function(r){return n(e,r.key)}));if(t>-1){var u=r[t];return t>0&&(r.splice(t,1),r.unshift(u)),u.value}return w}return{get:t,put:function(n,u){t(n)===w&&(r.unshift({key:n,value:u}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(s,a);function l(){var n=c.get(arguments);if(n===w){if(n=e.apply(null,arguments),i){var r=c.getEntries(),t=r.find((function(e){return i(e.value,n)}));t&&(n=t.value)}c.put(arguments,n)}return n}return l.clearCache=function(){return c.clear()},l}function U(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var r=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return n}function k(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];var u=function(){for(var n=arguments.length,t=new Array(n),u=0;u<n;u++)t[u]=arguments[u];var o,s=0,i={memoizeOptions:void 0},a=t.pop();if("object"===typeof a&&(i=a,a=t.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var c=i,l=c.memoizeOptions,f=void 0===l?r:l,p=Array.isArray(f)?f:[f],d=U(t),g=e.apply(void 0,[function(){return s++,a.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],n=d.length,r=0;r<n;r++)e.push(d[r].apply(null,arguments));return o=g.apply(null,e)}));return Object.assign(h,{resultFunc:a,memoizedResultFunc:g,dependencies:d,lastResult:function(){return o},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),h};return u}var z=k(b),S=z((function(e){return e.userReducer.users}),(function(e){return e})),F=function(e){return e.userReducer.pageSize},O=function(e){return e.userReducer.totalUsersCount},D=function(e){return e.userReducer.currentPage},N=function(e){return e.userReducer.isFetching},R=function(e){return e.userReducer.sendingDataInProgress},A=function(e){(0,o.Z)(r,e);var n=(0,s.Z)(r);function r(){var e;(0,t.Z)(this,r);for(var u=arguments.length,o=new Array(u),s=0;s<u;s++)o[s]=arguments[s];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){e.props.changePage(n,e.props.pageSize)},e}return(0,u.Z)(r,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,h.jsx)(h.Fragment,{children:this.props.isFetching?(0,h.jsx)(x.Z,{}):(0,h.jsx)(j,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,sendingDataInProgress:this.props.sendingDataInProgress,unfollow:this.props.unfollow,follow:this.props.follow})})}}]),r}(i.Component),I=(0,P.qC)((0,C.$j)((function(e){return{users:S(e),pageSize:F(e),totalUsersCount:O(e),currentPage:D(e),isFetching:N(e),sendingDataInProgress:R(e)}}),{requestUsers:a.D7,follow:a.ZN,unfollow:a.fv,setUsers:a.HM,setCurrentPage:a.D4,setTotalUsersCount:a.K1,setToggle:a.rd,changePage:a.oO}))(A)}}]);
//# sourceMappingURL=955.04893ca1.chunk.js.map