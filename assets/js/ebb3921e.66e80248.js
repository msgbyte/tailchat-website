"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[402],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2782:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:1},p="\u5feb\u901f\u5f00\u59cb",c={unversionedId:"deployment/quickstart",id:"deployment/quickstart",isDocsHomePage:!1,title:"\u5feb\u901f\u5f00\u59cb",description:"\u524d\u7aef\u4ee3\u7801",source:"@site/docs/deployment/quickstart.md",sourceDirName:"deployment",slug:"/deployment/quickstart",permalink:"/docs/deployment/quickstart",editUrl:"https://github.com/msgbyte/tailchat/edit/master/website/docs/deployment/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"demo-group",permalink:"/docs/demo-group"},next:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/docs/deployment/environment"}},u=[{value:"\u524d\u7aef\u4ee3\u7801",id:"\u524d\u7aef\u4ee3\u7801",children:[{value:"\u7f16\u8bd1\u4ee3\u7801",id:"\u7f16\u8bd1\u4ee3\u7801",children:[]}]},{value:"\u540e\u7aef\u670d\u52a1",id:"\u540e\u7aef\u670d\u52a1",children:[{value:"\u5355\u8282\u70b9\u90e8\u7f72",id:"\u5355\u8282\u70b9\u90e8\u7f72",children:[]},{value:"k8s\u96c6\u7fa4\u90e8\u7f72",id:"k8s\u96c6\u7fa4\u90e8\u7f72",children:[]},{value:"\u5f00\u53d1\u73af\u5883\u90e8\u7f72",id:"\u5f00\u53d1\u73af\u5883\u90e8\u7f72",children:[]},{value:"\u670d\u52a1\u7aef\u63d2\u4ef6\u5b89\u88c5\u65b9\u5f0f",id:"\u670d\u52a1\u7aef\u63d2\u4ef6\u5b89\u88c5\u65b9\u5f0f",children:[]}]}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,l.kt)("h2",{id:"\u524d\u7aef\u4ee3\u7801"},"\u524d\u7aef\u4ee3\u7801"),(0,l.kt)("p",null,"\u62c9\u53d6\u524d\u7aef\u6e90\u7801:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/msgbyte/tailchat\n\ncd tailchat\n")),(0,l.kt)("h3",{id:"\u7f16\u8bd1\u4ee3\u7801"},"\u7f16\u8bd1\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install\ncd web\nSERVICE_URL=http://127.0.0.1:11000 pnpm build\n")),(0,l.kt)("p",null,"\u73af\u5883\u53d8\u91cf: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SERVICE_URL"),": \u540e\u7aef\u670d\u52a1\u7684\u5730\u5740")),(0,l.kt)("p",null,"\u4f7f\u7528\u4efb\u610f\u65b9\u5f0f\u4ee3\u7406 ",(0,l.kt)("inlineCode",{parentName:"p"},"web/dist")," \u76ee\u5f55\u5373\u53ef\u3002"),(0,l.kt)("h2",{id:"\u540e\u7aef\u670d\u52a1"},"\u540e\u7aef\u670d\u52a1"),(0,l.kt)("p",null,"\u62c9\u53d6\u540e\u7aef\u6e90\u7801:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/msgbyte/tailchat-server\n\ncd tailchat-server\n")),(0,l.kt)("h3",{id:"\u5355\u8282\u70b9\u90e8\u7f72"},"\u5355\u8282\u70b9\u90e8\u7f72"),(0,l.kt)("h4",{id:"docker-compose-\u4e00\u952e\u90e8\u7f72\u5efa\u8bae"},"docker-compose \u4e00\u952e\u90e8\u7f72(\u5efa\u8bae)"),(0,l.kt)("p",null,"\u8bf7\u786e\u4fdd\u5df2\u7ecf\u5b89\u88c5\u4e86:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"docker"),(0,l.kt)("li",{parentName:"ul"},"docker-compose")),(0,l.kt)("p",null,"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.env")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"API_URL")," \u914d\u7f6e\uff0c\u5c06\u5176\u6539\u4e3a\u670d\u52a1\u7aef\u53ef\u8bbf\u95ee\u7684url"),(0,l.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose build # \u9700\u8981\u7f16\u8bd1\ndocker-compose up -d\n")),(0,l.kt)("h3",{id:"k8s\u96c6\u7fa4\u90e8\u7f72"},"k8s\u96c6\u7fa4\u90e8\u7f72"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("h3",{id:"\u5f00\u53d1\u73af\u5883\u90e8\u7f72"},"\u5f00\u53d1\u73af\u5883\u90e8\u7f72"),(0,l.kt)("p",null,"\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Docker")," \u521d\u59cb\u5316\u7b2c\u4e09\u65b9\u5f00\u53d1\u73af\u5883, \u9694\u79bb\u6027\u66f4\u52a0\u597d \u5e76\u4e14\u65e0\u9700\u590d\u6742\u7684\u5b89\u88c5\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"mongodb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name mongo -p 127.0.0.1:27017:27017 mongo:4\n")),(0,l.kt)("p",null,"redis"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name redis -p 127.0.0.1:6379:6379 redis\n")),(0,l.kt)("p",null,"minio"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d \\\n  -p 127.0.0.1:19000:9000 \\\n  -p 127.0.0.1:19001:9001 \\\n  --name minio \\\n  -e "MINIO_ROOT_USER=tailchat" \\\n  -e "MINIO_ROOT_PASSWORD=com.msgbyte.tailchat" \\\n  minio/minio server /data --console-address ":9001"\n')),(0,l.kt)("h3",{id:"\u670d\u52a1\u7aef\u63d2\u4ef6\u5b89\u88c5\u65b9\u5f0f"},"\u670d\u52a1\u7aef\u63d2\u4ef6\u5b89\u88c5\u65b9\u5f0f"),(0,l.kt)("p",null,"\u5b89\u88c5\u6240\u6709\u63d2\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm plugin:install all\n")),(0,l.kt)("p",null,"\u5b89\u88c5\u5355\u4e2a\u63d2\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm plugin:install com.msgbyte.tasks\n")))}d.isMDXComponent=!0}}]);