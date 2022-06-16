"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[855],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return m}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),p=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),u=p(a),m=n,k=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return a?r.createElement(k,l(l({ref:e},s),{},{components:a})):r.createElement(k,l({ref:e},s))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=u;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d.mdxType="string"==typeof t?t:n,l[1]=d;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},47005:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=["components"],d={title:"Overview",sidebar_position:1},i=void 0,p={unversionedId:"data_node/extract_node/overview",id:"data_node/extract_node/overview",title:"Overview",description:"Overview",source:"@site/docs/data_node/extract_node/overview.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/overview",permalink:"/docs/next/data_node/extract_node/overview",draft:!1,editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/data_node/extract_node/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/next/modules/audit/quick_start"},next:{title:"Auto Push",permalink:"/docs/next/data_node/extract_node/auto_push"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Supported Extract Nodes",id:"supported-extract-nodes",level:2},{value:"Supported Flink Versions",id:"supported-flink-versions",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:2}],u={toc:c};function m(t){var e=t.components,a=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Extract Nodes is a set of Source Connectors based on ",(0,o.kt)("a",{href:"https://flink.apache.org/"},"Apache Flink",(0,o.kt)("sup",null,"\xae"))," for extracting data from different source systems. "),(0,o.kt)("h2",{id:"supported-extract-nodes"},"Supported Extract Nodes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Extract Node"),(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Driver"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/next/data_node/extract_node/kafka"},"Kafka")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kafka.apache.org/"},"Kafka"),": 0.10+"),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/next/data_node/extract_node/pulsar"},"Pulsar")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/"},"Pulsar"),": 2.8.x+"),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/next/data_node/extract_node/hdfs"},"HDFS")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hadoop.apache.org/"},"HDFS"),": 2.x, 3.x"),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/next/data_node/extract_node/mongodb-cdc"},"MongoDB-CDC")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.mongodb.com"},"MongoDB"),": 3.6, 4.x, 5.0"),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/next/data_node/extract_node/mysql-cdc"},"MySQL-CDC")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://dev.mysql.com/doc"},"MySQL"),": 5.6, 5.7, 8.0.x ",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"td",href:"https://www.aliyun.com/product/rds/mysql"},"RDS MySQL"),": 5.6, 5.7, 8.0.x ",(0,o.kt)("br",null)," ",(0,o.kt)("a",{parentName:"td",href:"https://www.aliyun.com/product/polardb"},"PolarDB MySQL"),": 5.6, 5.7, 8.0.x ",(0,o.kt)("br",null)," ",(0,o.kt)("a",{parentName:"td",href:"https://aws.amazon.com/cn/rds/aurora"},"Aurora MySQL"),": 5.6, 5.7, 8.0.x ",(0,o.kt)("br",null)," ",(0,o.kt)("a",{parentName:"td",href:"https://mariadb.org"},"MariaDB"),": 10.x ",(0,o.kt)("br",null)," ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/ApsaraDB/galaxysql"},"PolarDB X"),": 2.0.1"),(0,o.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 8.0.21")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/next/data_node/extract_node/oracle-cdc"},"Oracle-CDC")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.oracle.com/index.html"},"Oracle"),": 11, 12, 19"),(0,o.kt)("td",{parentName:"tr",align:null},"Oracle Driver: 19.3.0.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/next/data_node/extract_node/postgresql-cdc"},"PostgreSQL-CDC")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.postgresql.org"},"PostgreSQL"),": 9.6, 10, 11, 12"),(0,o.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/next/data_node/extract_node/sqlserver-cdc"},"SqlServer-CDC")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.microsoft.com/sql-server"},"SQLServer"),": 2012, 2014, 2016, 2017, 2019"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("h2",{id:"supported-flink-versions"},"Supported Flink Versions"),(0,o.kt)("p",null,"The following table shows the version mapping between InLong",(0,o.kt)("sup",null,"\xae")," Extract Nodes and Flink",(0,o.kt)("sup",null,"\xae"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"InLong",(0,o.kt)("sup",null,"\xae")," Extract Nodes Version"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Flink",(0,o.kt)("sup",null,"\xae")," Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("font",{color:"DarkCyan"},"1.2.0")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("font",{color:"MediumVioletRed"},"1.13.5"))))),(0,o.kt)("h2",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,o.kt)("p",null,"We need several steps to setup a Flink cluster with the provided connector."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Setup a Flink cluster with version 1.13.5 and Java 8+ installed."),(0,o.kt)("li",{parentName:"ol"},"Download and the Sort Connectors jars from the ",(0,o.kt)("a",{parentName:"li",href:"/download/main"},"Downloads")," page (or ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/quick_start/how_to_build"},"build yourself"),")."),(0,o.kt)("li",{parentName:"ol"},"Put the Sort Connectors jars under ",(0,o.kt)("inlineCode",{parentName:"li"},"FLINK_HOME/lib/"),"."),(0,o.kt)("li",{parentName:"ol"},"Restart the Flink cluster.")),(0,o.kt)("p",null,"The example shows how to create a MySQL Extract Node in ",(0,o.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.13/dev/table/sqlClient.html"},"Flink SQL Client")," and execute queries on it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Creates a MySQL Extract Node\nCREATE TABLE mysql_extract_node (\n id INT NOT NULL,\n name STRING,\n age INT,\n weight DECIMAL(10,3),\n PRIMARY KEY(id) NOT ENFORCED\n) WITH (\n 'connector' = 'mysql-cdc-inlong',\n 'hostname' = 'YourHostname',\n 'port' = '3306',\n 'username' = 'YourUsername',\n 'password' = 'YourPassword',\n 'database-name' = 'YourDatabaseName',\n 'table-name' = 'YourTableName'\n);\n\nSELECT id, name, age, weight FROM mysql_extract_node;\n")))}m.isMDXComponent=!0}}]);