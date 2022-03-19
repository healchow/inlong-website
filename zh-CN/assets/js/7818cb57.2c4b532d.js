"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[877],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68368:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u5b89\u88c5\u90e8\u7f72"},u=void 0,p={unversionedId:"modules/dataproxy/quick_start",id:"modules/dataproxy/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 inlong-dataproxy \u76ee\u5f55\u4e0b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/dataproxy/quick_start.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/quick_start",permalink:"/zh-CN/docs/next/modules/dataproxy/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/dataproxy/quick_start.md",tags:[],version:"current",frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/dataproxy/overview"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/tubemq/overview"}},c={},s=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u914d\u7f6eInLong-Manager \u5730\u5740",id:"\u914d\u7f6einlong-manager-\u5730\u5740",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u68c0\u67e5",id:"\u68c0\u67e5",level:2},{value:"\u5c06 DataProxy \u914d\u7f6e\u6dfb\u52a0\u5230 InLong-Manager",id:"\u5c06-dataproxy-\u914d\u7f6e\u6dfb\u52a0\u5230-inlong-manager",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-dataproxy")," \u76ee\u5f55\u4e0b\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("h3",{id:"\u914d\u7f6einlong-manager-\u5730\u5740"},"\u914d\u7f6eInLong-Manager \u5730\u5740"),(0,o.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"conf/common.properties"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# manager \u5730\u5740\nmanager_hosts=127.0.0.1:8083\n# audit proxy \u5730\u5740\naudit.proxys=127.0.0.1:10081\n")),(0,o.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#\u9ed8\u8ba4\u4f7f\u7528 pulsar \u4f5c\u4e3a\u6d88\u606f\u4e2d\u95f4\u4ef6\uff0c\u52a0\u8f7d dataproxy-pulsar.conf \u914d\u7f6e\u6587\u4ef6\nbash +x bin/dataproxy-start.sh\n\u6216\u8005\nbash +x bin/dataproxy-start.sh pulsar\n# \u5982\u679c\u4f7f\u7528 Inlong TubeMQ\n# bash +x bin/dataproxy-start.sh tube\n")),(0,o.kt)("h2",{id:"\u68c0\u67e5"},"\u68c0\u67e5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"telnet 127.0.0.1 46801\n")),(0,o.kt)("h2",{id:"\u5c06-dataproxy-\u914d\u7f6e\u6dfb\u52a0\u5230-inlong-manager"},"\u5c06 DataProxy \u914d\u7f6e\u6dfb\u52a0\u5230 InLong-Manager"),(0,o.kt)("p",null,"\u5b89\u88c5\u5b8c DataProxy \u540e\uff0c\u9700\u8981\u5c06 DataProxy \u670d\u52a1\u7684 IP \u6dfb\u52a0\u5230 InLong-Manager \u4e2d\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539\u4e0b\u9762\u7684\u914d\u7f6e\u4fe1\u606f\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'curl --header "Content-Type: application/json" --request POST http://your_manager_host:8083/api/inlong/manager/openapi/cluster/save --data \'\n{\n   "name": "default_dataproxy",\n   "type": "DATA_PROXY",\n   "ip": "your_data_proxy_host",\n   "port": 46801,\n   "mqSetName": "default_set_name",\n   "inCharges": "admin",\n   "creator": "admin"\n}\n\'\n'))),(0,o.kt)("li",{parentName:"ul"},"\u6253\u5f00\u4f60\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u590d\u5236\u4e0a\u9762\u4fee\u6539\u540e\u7684\u4fe1\u606f\uff0c\u7136\u540e\u6572\u51fb ","[\u56de\u8f66]"," \u53d1\u8d77\u8bf7\u6c42\uff0c\u4e0a\u9762\u7684\u4fe1\u606f\u5c31\u4f1a\u4fdd\u5b58\u5230 InLong-Manager \u4e2d\u3002")))}m.isMDXComponent=!0}}]);