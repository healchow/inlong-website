"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1506],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66116:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},c=void 0,u={unversionedId:"modules/agent/quick_start",id:"version-1.1.0/modules/agent/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u5b89\u88c5\u6587\u4ef6\u5728 inlong-agent \u76ee\u5f55\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/modules/agent/quick_start.md",sourceDirName:"modules/agent",slug:"/modules/agent/quick_start",permalink:"/zh-CN/docs/modules/agent/quick_start",draft:!1,editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.1.0/modules/agent/quick_start.md",tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/modules/agent/overview"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/modules/dataproxy/overview"}},s={},p=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5b89\u88c5\u6587\u4ef6\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-agent")," \u76ee\u5f55\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"Agent \u9700\u8981\u4ece Manager \u62c9\u53d6\u914d\u7f6e\uff0c\u914d\u7f6econf/agent.properties\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# replace by agent IP\nagent.local.ip=127.0.0.1\nagent.http.port=8008\n# manager IP\nagent.manager.vip.http.host=127.0.0.1\n# manager port\nagent.manager.vip.http.port=8083\n# audit proxy address\naudit.proxys=127.0.0.1:10081\n")),(0,o.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,o.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar"),", \u5e76\u5c06\u5176\u653e\u5165 ",(0,o.kt)("inlineCode",{parentName:"li"},"lib/")," \u76ee\u5f55\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,o.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash +x bin/agent.sh start\n")))}m.isMDXComponent=!0}}]);