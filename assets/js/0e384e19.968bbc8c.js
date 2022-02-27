"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=i,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},c="\u6982\u8ff0",u={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"\u6982\u8ff0",description:"Tailchat \u662f\u4e00\u6b3e\u63d2\u4ef6\u5316\u6613\u62d3\u5c55\u7684\u5f00\u6e90 IM \u5e94\u7528\u3002\u53ef\u62d3\u5c55\u67b6\u6784\u8d4b\u4e88 Tailchat \u65e0\u9650\u53ef\u80fd\u6027\u3002",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/msgbyte/tailchat/edit/master/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/deploy/quickstart"}},p=[{value:"\u7279\u6027",id:"\u7279\u6027",children:[]},{value:"\u6280\u672f\u6808",id:"\u6280\u672f\u6808",children:[]}],m={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Tailchat")," \u662f\u4e00\u6b3e\u63d2\u4ef6\u5316\u6613\u62d3\u5c55\u7684\u5f00\u6e90 IM \u5e94\u7528\u3002\u53ef\u62d3\u5c55\u67b6\u6784\u8d4b\u4e88 ",(0,a.kt)("inlineCode",{parentName:"p"},"Tailchat")," \u65e0\u9650\u53ef\u80fd\u6027\u3002"),(0,a.kt)("p",null,"\u524d\u7aef\u5fae\u5185\u6838\u67b6\u6784 + \u540e\u7aef\u5fae\u670d\u52a1\u67b6\u6784 \u4f7f\u5f97",(0,a.kt)("inlineCode",{parentName:"p"},"Tailchat"),"\u80fd\u591f\u9a7e\u9a6d\u4efb\u4f55\u5b9a\u5236\u5316/\u79c1\u6709\u5316\u7684\u573a\u666f"),(0,a.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b8c\u6574\u7684\u5373\u65f6\u901a\u8baf\u57fa\u7840\u80fd\u529b"),(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u5316\u67b6\u6784\u7684\u8d4b\u4e88\u7684\u81ea\u7531\u62d3\u5c55\u80fd\u529b"),(0,a.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1\u67b6\u6784\u8d4b\u4e88\u7684\u6c34\u5e73\u62d3\u5c55\u80fd\u529b")),(0,a.kt)("h2",{id:"\u6280\u672f\u6808"},"\u6280\u672f\u6808"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u524d\u7aef",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"React")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Redux")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MiniStar")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tailwindcss")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iconify")))),(0,a.kt)("li",{parentName:"ul"},"\u540e\u7aef: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Nodejs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Socket.io")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"koa")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"moleculer"))))))}s.isMDXComponent=!0}}]);