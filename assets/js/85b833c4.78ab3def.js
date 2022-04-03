"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[520],{9613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1379:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=t(2182),a=t(9028),o=(t(9496),t(9613)),l=["components"],i={sidebar_position:99,title:"\u5f00\u53d1\u73af\u5883"},p=void 0,c={unversionedId:"deployment/dev",id:"deployment/dev",title:"\u5f00\u53d1\u73af\u5883",description:"\u5bf9\u4e8e\u5f00\u53d1\u73af\u5883\u7684\u642d\u5efa\uff0ctailchat \u63d0\u4f9b\u4e86\u975e\u5e38\u7b80\u5355\u5feb\u6377\u7684\u65b9\u5f0f",source:"@site/docs/deployment/dev.md",sourceDirName:"deployment",slug:"/deployment/dev",permalink:"/docs/deployment/dev",editUrl:"https://github.com/msgbyte/tailchat/edit/master/website/docs/deployment/dev.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99,title:"\u5f00\u53d1\u73af\u5883"},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u653e\u5e73\u53f0",permalink:"/docs/deployment/openapi"},next:{title:"\u5f00\u59cb\u5f00\u53d1\u63d2\u4ef6",permalink:"/docs/plugins/start"}},u={},s=[{value:"\u540e\u7aef",id:"\u540e\u7aef",level:2},{value:"\u4f7f\u7528Docker\u5feb\u901f\u642d\u5efa\u4f9d\u8d56\u73af\u5883",id:"\u4f7f\u7528docker\u5feb\u901f\u642d\u5efa\u4f9d\u8d56\u73af\u5883",level:3},{value:"\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668",id:"\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668",level:3},{value:"\u524d\u7aef",id:"\u524d\u7aef",level:2}],d={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5bf9\u4e8e\u5f00\u53d1\u73af\u5883\u7684\u642d\u5efa\uff0ctailchat \u63d0\u4f9b\u4e86\u975e\u5e38\u7b80\u5355\u5feb\u6377\u7684\u65b9\u5f0f"),(0,o.kt)("h2",{id:"\u540e\u7aef"},"\u540e\u7aef"),(0,o.kt)("h3",{id:"\u4f7f\u7528docker\u5feb\u901f\u642d\u5efa\u4f9d\u8d56\u73af\u5883"},"\u4f7f\u7528Docker\u5feb\u901f\u642d\u5efa\u4f9d\u8d56\u73af\u5883"),(0,o.kt)("p",null,"mongodb"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name mongo -p 27017:27017 mongo:4\n")),(0,o.kt)("p",null,"redis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name redis -p 6379:6379 redis\n")),(0,o.kt)("p",null,"minio"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d \\\n  -p 19000:9000 \\\n  -p 19001:9001 \\\n  --name minio \\\n  -e "MINIO_ROOT_USER=tailchat" \\\n  -e "MINIO_ROOT_PASSWORD=com.msgbyte.tailchat" \\\n  minio/minio server /data --console-address ":9001"\n')),(0,o.kt)("h3",{id:"\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668"},"\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.example .env\nvim .env\n")),(0,o.kt)("p",null,"\u7f16\u8f91",(0,o.kt)("inlineCode",{parentName:"p"},".env"),"\u7684\u914d\u7f6e\u4e3a\u81ea\u5df1\u76f8\u5173\u7684\u4e0a\u4e0b\u6587"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install # \u5b89\u88c5\u73af\u5883\u53d8\u91cf\npnpm dev # \u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668\n")),(0,o.kt)("h2",{id:"\u524d\u7aef"},"\u524d\u7aef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd web\npnpm install # \u5b89\u88c5\u4f9d\u8d56\npnpm plugins:all # \u7f16\u8bd1\u63d2\u4ef6\npnpm dev # \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\n")))}m.isMDXComponent=!0}}]);