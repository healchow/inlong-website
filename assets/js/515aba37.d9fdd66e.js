"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6113],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61145:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={title:"Zookeeper Configure",sidebar_position:3},s="Overview",c={unversionedId:"modules/sort/protocol_introduction",id:"version-0.12.0/modules/sort/protocol_introduction",title:"Zookeeper Configure",description:"Currently the metadata management of inlong-sort relies on inlong-manager.",source:"@site/versioned_docs/version-0.12.0/modules/sort/protocol_introduction.md",sourceDirName:"modules/sort",slug:"/modules/sort/protocol_introduction",permalink:"/docs/0.12.0/modules/sort/protocol_introduction",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.12.0/modules/sort/protocol_introduction.md",tags:[],version:"0.12.0",sidebarPosition:3,frontMatter:{title:"Zookeeper Configure",sidebar_position:3},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/0.12.0/modules/sort/quick_start"},next:{title:"Overview",permalink:"/docs/0.12.0/modules/manager/overview"}},u={},p=[{value:"1 Zookeeper&#39;s path structure",id:"1-zookeepers-path-structure",level:2},{value:"2 Protocol",id:"2-protocol",level:2}],d={toc:p};function f(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Currently the metadata management of inlong-sort relies on inlong-manager."),(0,i.kt)("p",null,"Metadata interaction between inlong-sort and inlong-manager is performed via ZK."),(0,i.kt)("h2",{id:"1-zookeepers-path-structure"},"1 Zookeeper's path structure"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"img.png",src:r(32214).Z,width:"663",height:"130"})),(0,i.kt)("p",null,"Cluster represents a flink job. Multiple flows can be handled in the same cluster, but these flows must be homogeneous (source is the same as sink)."),(0,i.kt)("p",null,"The DataFlow represents a specific flow, and each flow is identified by a globally unique ID. The flow consists of source + sink."),(0,i.kt)("p",null,"A path at the top of the figure indicates which dataflow are running in a cluster, without metadata under the node."),(0,i.kt)("p",null,"The path below is used to store the details of the dataflow."),(0,i.kt)("h2",{id:"2-protocol"},"2 Protocol"),(0,i.kt)("p",null,"Please reference\n",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.inlong.sort.protocol.DataFlowInfo")))}f.isMDXComponent=!0},32214:function(e,t,r){t.Z=r.p+"assets/images/img-344b6f587c065734ac081babe17c0b2c.png"}}]);