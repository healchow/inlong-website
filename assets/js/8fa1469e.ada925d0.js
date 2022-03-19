"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4322],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=p(n),c=a,g=s["".concat(u,".").concat(c)]||s[c]||m[c]||l;return n?r.createElement(g,o(o({ref:e},d),{},{components:n})):r.createElement(g,o({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5298:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"Bare Metal",sidebar_position:4},u=void 0,p={unversionedId:"deployment/bare_metal",id:"version-1.0.0/deployment/bare_metal",title:"Bare Metal",description:"Environment Requirements",source:"@site/versioned_docs/version-1.0.0/deployment/bare_metal.md",sourceDirName:"deployment",slug:"/deployment/bare_metal",permalink:"/docs/deployment/bare_metal",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.0.0/deployment/bare_metal.md",tags:[],version:"1.0.0",sidebarPosition:4,frontMatter:{title:"Bare Metal",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/deployment/k8s"},next:{title:"Overview",permalink:"/docs/modules/agent/overview"}},d={},m=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Deploy InLong",id:"deploy-inlong",level:2},{value:"Create Data Stream",id:"create-data-stream",level:2}],s={toc:m};function c(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ZooKeeper 3.5+"),(0,l.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,l.kt)("li",{parentName:"ul"},"Flink 1.13.5"),(0,l.kt)("li",{parentName:"ul"},"Apache Pulsar 2.6+ (Optional)")),(0,l.kt)("h2",{id:"deploy-inlong"},"Deploy InLong"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"order"),(0,l.kt)("th",{parentName:"tr",align:null},"component"),(0,l.kt)("th",{parentName:"tr",align:null},"dependencies"),(0,l.kt)("th",{parentName:"tr",align:null},"deploy guide"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-tubemq-server"),(0,l.kt)("td",{parentName:"tr",align:null},"ZooKeeper"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/modules/tubemq/quick_start"},"InLong TubeMQ Server")),(0,l.kt)("td",{parentName:"tr",align:null},"If you use Apache Pulsar, you don\u2019t need to install this component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-tubemq-manager"),(0,l.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/modules/tubemq/tubemq-manager/quick_start"},"InLong TubeMQ Manager")),(0,l.kt)("td",{parentName:"tr",align:null},"If you use Apache Pulsar, you don\u2019t need to install this component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-audit"),(0,l.kt)("td",{parentName:"tr",align:null},"MySQL or Elasticsearch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/modules/audit/quick_start"},"InLong Audit")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-manager"),(0,l.kt)("td",{parentName:"tr",align:null},"MySQL, ZooKeeper"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/modules/manager/quick_start"},"InLong Manager")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-dashboard"),(0,l.kt)("td",{parentName:"tr",align:null},"Nginx or Docker"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/modules/dashboard/quick_start"},"InLong Dashboard")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-dataproxy"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/modules/dataproxy/quick_start"},"InLong DataProxy")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-sort"),(0,l.kt)("td",{parentName:"tr",align:null},"ZooKeeper, Flink"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/modules/sort/quick_start"},"InLong Sort")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-agent"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/modules/agent/quick_start"},"InLong Agent")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"create-data-stream"},"Create Data Stream"),(0,l.kt)("p",null,"After the InLong cluster deployed successfully, you can create a data stream refer to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/user_guide/user_manual"},"user manual")," to start using."))}c.isMDXComponent=!0}}]);