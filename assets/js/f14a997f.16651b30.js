"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1104],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},16108:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],l={title:"Agent Plugin",sidebar_position:1},s="Overview",d={unversionedId:"design_and_concept/how_to_write_plugin_agent",id:"version-1.0.0/design_and_concept/how_to_write_plugin_agent",title:"Agent Plugin",description:"This article is aimed at InLong-Agent plug-in developers, trying to explain the process of developing an Agent plug-in as comprehensively as possible, and strive to eliminate the confusion of developers and make plug-in development easier.",source:"@site/versioned_docs/version-1.0.0/design_and_concept/how_to_write_plugin_agent.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_write_plugin_agent",permalink:"/docs/design_and_concept/how_to_write_plugin_agent",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.0.0/design_and_concept/how_to_write_plugin_agent.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{title:"Agent Plugin",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basic Concept",permalink:"/docs/design_and_concept/basic_concept"},next:{title:"How to Build",permalink:"/docs/quick_start/how_to_build"}},c={},u=[{value:"Before Development",id:"before-development",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Reference Demo",id:"reference-demo",level:2},{value:"Development Process",id:"development-process",level:2},{value:"Programming must know interface",id:"programming-must-know-interface",level:2},{value:"Reader",id:"reader",level:3},{value:"Sink",id:"sink",level:3},{value:"Source",id:"source",level:3},{value:"Job Definition",id:"job-definition",level:2},{value:"Message",id:"message",level:2},{value:"Last but not Least",id:"last-but-not-least",level:2}],p={toc:u};function m(e){var n=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This article is aimed at InLong-Agent plug-in developers, trying to explain the process of developing an Agent plug-in as comprehensively as possible, and strive to eliminate the confusion of developers and make plug-in development easier."),(0,r.kt)("h2",{id:"before-development"},"Before Development"),(0,r.kt)("p",null,"InLong Agent itself, as a data collection framework, is constructed with a Job + Task architecture. And abstract data source reading and writing into Reader/Sink plug-ins, which are incorporated into the entire framework."),(0,r.kt)("p",null,"Developers need to be clear about the concepts of Job and Task:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Job"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Job")," is used by Agent to describe the synchronization job from a source to a destination, and is the smallest business unit of Agent data synchronization. For example: read all files in a file directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Task"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," is the smallest execution unit obtained by splitting ",(0,r.kt)("inlineCode",{parentName:"li"},"Job"),". For example, if there are multiple files in the folder that need to be read, then a job will be split into multiple tasks, and each task will read the corresponding file")),(0,r.kt)("p",null,"A Task contains the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reader: Reader is a data collection module, which is responsible for collecting data from the data source and sending the data to the channel."),(0,r.kt)("li",{parentName:"ul"},"Sink: Sink is a data writing module, responsible for continuously fetching data from the channel and writing the data to the destination."),(0,r.kt)("li",{parentName:"ul"},"Channel: Channel is used to connect reader and sink, as a data transmission channel for both, and plays a role in monitoring data writing and reading")),(0,r.kt)("p",null,"As a developer, you only need to develop specific Source, Reader and Sink. If the data needs to be persisted to the local disk, use the persistent Channel, otherwise use the memory Channel"),(0,r.kt)("h2",{id:"demonstration"},"Demonstration"),(0,r.kt)("p",null,"The Job\\Task\\Reader\\Sink\\Channel concept introduced above can be represented by the following figure:\n",(0,r.kt)("img",{loading:"lazy",src:t(32893).Z,width:"691",height:"607"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user submits a Job (via the manager or via curl), and the Job defines the Source, Channel, and Sink that need to be used (defined by the fully qualified name of the class)"),(0,r.kt)("li",{parentName:"ol"},"The framework starts the Job and creates the Source through the reflection mechanism"),(0,r.kt)("li",{parentName:"ol"},"The framework starts the Source and calls the Split interface of the Source to generate one or more Tasks"),(0,r.kt)("li",{parentName:"ol"},"When a Task is generated, a Reader (a type of Source will generate a corresponding reader), a User-configured Channel and a User-configured Sink are generated at the same time"),(0,r.kt)("li",{parentName:"ol"},"Task starts to execute, Reader starts to read data to Channel, Sink fetches data from Channel and sends it"),(0,r.kt)("li",{parentName:"ol"},"All the information needed for Job and Task execution is encapsulated in the JobProfile")),(0,r.kt)("h2",{id:"reference-demo"},"Reference Demo"),(0,r.kt)("p",null,"Please understand the above process by reading the Job class, Task class, TextFileSource class, TextFileReader class, and ProxySink class in the Agent source"),(0,r.kt)("h2",{id:"development-process"},"Development Process"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First develop Source, implement split logic, and return ReaderList"),(0,r.kt)("li",{parentName:"ol"},"The developed Reader implements the logic of reading data and writing to Channel"),(0,r.kt)("li",{parentName:"ol"},"The sink under development implements the logic of fetching data from the channel and writing it to the specified sink")),(0,r.kt)("h2",{id:"programming-must-know-interface"},"Programming must know interface"),(0,r.kt)("p",null,"Some of the plug-ins that will be developed below, the classes and interfaces that need to be known are as follows:"),(0,r.kt)("h3",{id:"reader"},"Reader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private class ReaderImpl implements Reader {\n\n    private int count = 0;\n\n    @Override\n    public Message read() {\n        count += 1;\n        return new DefaultMessage("".getBytes(StandardCharsets.UTF_8));\n    }\n\n    @Override\n    public boolean isFinished() {\n        return count > 99999;\n    }\n\n    @Override\n    public String getReadSource() {\n        return null;\n    }\n\n    @Override\n    public void setReadTimeout(long mill) {\n\n    }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader")," interface functions as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"read"),": Called by a single Task, and returns a read message after the call, and the message inside the Agent is encapsulated by Message"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isFinished"),": judge whether the reading is completed, for example: if it is an SQL task, judge whether all the contents in the ResultSet have been read; if it is a file task, judge whether there is still data written after the waiting time set by the user"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getReadSource"),": Get the acquisition source, for example: if it is a file task, it will return the file name currently read"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setReadTimeout"),": set read timeout")),(0,r.kt)("h3",{id:"sink"},"Sink"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface Sink extends Stage {\n\n    /**\n     * Write data into data center\n     *\n     * @param message - message\n     */\n    void write(Message message);\n\n    /**\n     * set source file name where the message is generated\n     * @param sourceName\n     */\n    void setSourceName(String sourceName);\n\n    /**\n     * every sink should include a message filter to filter out stream id\n     */\n    MessageFilter initMessageFilter(JobProfile jobConf);\n}\n\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Sink")," interface functions as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"write"),": called by a single Task, reads a message from the Channel in the Task and writes it to a specific storage medium. Taking PulsarSink as an example, it needs to be sent to Pulsar through PulsarSender"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setSourceName"),": set the data source name, if it is a file, the file name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initMessageFilter"),": Initialize MessageFilter , the user can create a message filter to filter each message by setting agent.message.filter.classname in the Job configuration file. For details, please refer to the MessageFilter interface")),(0,r.kt)("h3",{id:"source"},"Source"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Source can be split into multiple reader.\n */\npublic interface Source {\n\n    /**\n     * Split source into a list of readers.\n     *\n     * @param conf job conf\n     * @return - list of reader\n     */\n    List<Reader> split(JobProfile conf);\n}\n\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Source")," interface functions as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"split"),": Called by a single job to generate multiple Readers, for example: a read file task, matching multiple files in a folder, when the job starts, it will specify TextFileSource as the Source entry,\nAfter calling the split function, TextFileSource will detect how many paths match the path matching expression in the folder set by the user, and generate TextFileReader to read")),(0,r.kt)("h2",{id:"job-definition"},"Job Definition"),(0,r.kt)("p",null,"The code is written, have you ever wondered how the framework finds the entry class of the plugin? How does the framework load plugins?"),(0,r.kt)("p",null,"When submitting a task, you will find information about the plugin defined in the task, including the entry class. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"job": {\n"name": "fileAgentTest",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n}\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"source"),": The fully qualified name of the Source class, the instance of which the framework imports the plugin through reflection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sink"),": The fully qualified name of the Sink class, the instance of which the framework imports through the reflection plugin."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"channel"),": The name of the Channel class used by the framework, the instance of the entry class of the plugin through reflection.")),(0,r.kt)("h2",{id:"message"},"Message"),(0,r.kt)("p",null,"Like the general ",(0,r.kt)("inlineCode",{parentName:"p"},"producer-consumer")," model, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader")," plugin and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sink")," plugin also use ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," to achieve data transmission.\n",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," can be in-memory or persistent, plugins don't have to care. Plugins write data to ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," through ",(0,r.kt)("inlineCode",{parentName:"p"},"RecordSender")," and read data from ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," through ",(0,r.kt)("inlineCode",{parentName:"p"},"RecordReceiver"),"."),(0,r.kt)("p",null,"A piece of data in ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Message")," object, ",(0,r.kt)("inlineCode",{parentName:"p"},"Message")," contains a byte array and attribute data represented by a Map"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Message")," has the following methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface Message {\n\n    /**\n     * Data content of message.\n     *\n     * @return bytes body\n     */\n    byte[] getBody();\n\n    /**\n     * Data attribute of message\n     *\n     * @return map header\n     */\n    Map<String, String> getHeader();\n}\n")),(0,r.kt)("p",null,"Developers can expand customized Message according to this interface. For example, ProxyMessage contains InLongGroupId, InLongStreamId and other attributes"),(0,r.kt)("h2",{id:"last-but-not-least"},"Last but not Least"),(0,r.kt)("p",null,"All new plugins must have a document in the ",(0,r.kt)("inlineCode",{parentName:"p"},"InLong")," official wiki. The document needs to include but not limited to the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Quick introduction"),": Introduce the usage scenarios and features of the plug-in."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Implementation principle"),": Introduce the underlying principle of plug-in implementation, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"sqlReader")," to read data in the database by executing Sql query"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Configuration Instructions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Give the json configuration file of synchronization tasks in typical scenarios."),(0,r.kt)("li",{parentName:"ul"},"Introduce the meaning of each parameter, whether it is required, default value, value range and other constraints."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Restrictions"),": Are there other restrictions on use."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"FAQ"),": Frequently asked questions by users.")))}m.isMDXComponent=!0},32893:function(e,n,t){n.Z=t.p+"assets/images/Agent_Flow-797076957b60986733aae8479cff6c69.png"}}]);