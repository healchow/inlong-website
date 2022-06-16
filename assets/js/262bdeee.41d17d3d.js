"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3863],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36011:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Build && Deployment"},c=void 0,u={unversionedId:"modules/dataproxy/quick_start",id:"version-0.11.0/modules/dataproxy/quick_start",title:"Build && Deployment",description:"Deploy DataProxy",source:"@site/versioned_docs/version-0.11.0/modules/dataproxy/quick_start.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/quick_start",permalink:"/docs/0.11.0/modules/dataproxy/quick_start",draft:!1,editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.11.0/modules/dataproxy/quick_start.md",tags:[],version:"0.11.0",frontMatter:{title:"Build && Deployment"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/0.11.0/modules/dataproxy/architecture"},next:{title:"Architecture",permalink:"/docs/0.11.0/modules/dataproxy-sdk/architecture"}},p={},s=[{value:"Deploy DataProxy",id:"deploy-dataproxy",level:2},{value:"config TubeMQ master",id:"config-tubemq-master",level:3},{value:"Environmental preparation",id:"environmental-preparation",level:3},{value:"config manager web url",id:"config-manager-web-url",level:3},{value:"run",id:"run",level:2},{value:"check",id:"check",level:2},{value:"Add DataProxy configuration to InLong-Manager",id:"add-dataproxy-configuration-to-inlong-manager",level:2}],d={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"deploy-dataproxy"},"Deploy DataProxy"),(0,o.kt)("p",null,"All deploying files at ",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-dataproxy")," directory."),(0,o.kt)("h3",{id:"config-tubemq-master"},"config TubeMQ master"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tubemq_master_list")," is the rpc address of TubeMQ Master."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sed -i 's/TUBE_LIST/tubemq_master_list/g' conf/flume.conf\n")),(0,o.kt)("p",null,"notice that conf/flume.conf FLUME_HOME is proxy the directory for proxy inner data"),(0,o.kt)("h3",{id:"environmental-preparation"},"Environmental preparation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh prepare_env.sh\n")),(0,o.kt)("h3",{id:"config-manager-web-url"},"config manager web url"),(0,o.kt)("p",null,"configuration file: ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/common.properties"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# manager web \nmanager_hosts=ip:port \n")),(0,o.kt)("h2",{id:"run"},"run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh bin/start.sh\n")),(0,o.kt)("h2",{id:"check"},"check"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"telnet 127.0.0.1 46801\n")),(0,o.kt)("h2",{id:"add-dataproxy-configuration-to-inlong-manager"},"Add DataProxy configuration to InLong-Manager"),(0,o.kt)("p",null,"After installing the DataProxy, you need to insert the IP and port of the DataProxy service is located into the backend database of InLong-Manager."),(0,o.kt)("p",null,"For the background database address of InLong-Manager, please refer to the deployment document of the InLong-Manager module."),(0,o.kt)("p",null,"The insert SQL statement is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'-- name is the name of the DataProxy, which can be customized\n-- address is the IP of the DataProxy service is located\n-- port is the port of the DataProxy service, default is 46801\ninsert into data_proxy_cluster (name, address, port, status, is_deleted, create_time, modify_time)\nvalues ("data_proxy_name", "data_proxy_ip", 46801, 0, 0, now(), now());\n')))}m.isMDXComponent=!0}}]);