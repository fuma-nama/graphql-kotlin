(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8e3],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(7294);const r=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(7294),r=n(9443);const i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=n(6010);const o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;const p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,d=e.groupId,m=e.className,h=i(),g=h.tabGroupChoices,f=h.setTabGroupChoices,v=(0,a.useState)(r),k=v[0],C=v[1],b=a.Children.toArray(e.children),y=[];if(null!=d){var N=g[d];null!=N&&N!==k&&p.some((function(e){return e.value===N}))&&C(N)}var U=function(e){var t=e.currentTarget,n=y.indexOf(t),a=p[n].value;C(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,r,i,l,o,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,c=l.innerWidth,n>=0&&i<=c&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case u:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case c:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:U,onClick:U},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},6907:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>u,metadata:()=>p,toc:()=>d,default:()=>h});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=n(5064),o=n(8215),s=["components"],c={id:"client-customization",title:"Client Customization"},u=void 0,p={unversionedId:"client/client-customization",id:"client/client-customization",isDocsHomePage:!1,title:"Client Customization",description:"Ktor HTTP Client Customization",source:"@site/docs/client/client-customization.mdx",sourceDirName:"client",slug:"/client/client-customization",permalink:"/graphql-kotlin/docs/client/client-customization",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/client/client-customization.mdx",version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1625874690,formattedLastUpdatedAt:"7/9/2021",frontMatter:{id:"client-customization",title:"Client Customization"},sidebar:"docs",previous:{title:"Client Features",permalink:"/graphql-kotlin/docs/client/client-features"},next:{title:"Client Serialization",permalink:"/graphql-kotlin/docs/client/client-serialization"}},d=[{value:"Ktor HTTP Client Customization",id:"ktor-http-client-customization",children:[{value:"Global Client Customization",id:"global-client-customization",children:[]},{value:"Per Request Customization",id:"per-request-customization",children:[]}]},{value:"Spring WebClient Customization",id:"spring-webclient-customization",children:[{value:"Global Client Customization",id:"global-client-customization-1",children:[]},{value:"Per Request Customization",id:"per-request-customization-1",children:[]}]},{value:"Custom GraphQL Client",id:"custom-graphql-client",children:[]},{value:"Deprecated Field Usage",id:"deprecated-field-usage",children:[]},{value:"Custom GraphQL Scalars",id:"custom-graphql-scalars",children:[]}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ktor-http-client-customization"},"Ktor HTTP Client Customization"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLKtorClient")," is a thin wrapper on top of ",(0,i.kt)("a",{parentName:"p",href:"https://ktor.io/docs/client.html"},"Ktor HTTP Client")," and supports fully\nasynchronous non-blocking communication. It is highly customizable and can be configured with any supported Ktor HTTP\n",(0,i.kt)("a",{parentName:"p",href:"https://ktor.io/clients/http-client/engines.html"},"engine")," and ",(0,i.kt)("a",{parentName:"p",href:"https://ktor.io/clients/http-client/features.html"},"features"),"."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://ktor.io/clients/index.html"},"Ktor HTTP Client documentation")," for additional details."),(0,i.kt)("h3",{id:"global-client-customization"},"Global Client Customization"),(0,i.kt)("p",null,"A single instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLKtorClient")," can be used to handle many GraphQL operations. You can specify a custom instance\nof Ktor ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpClient")," and a target ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLClientSerializer"),"."),(0,i.kt)("p",null,"The below example configures a new ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLKtorClient")," to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"OkHttp")," engine with custom timeouts, adds a default ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MY-API-KEY"),"\nheader to all requests, and enables basic logging of the requests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val okHttpClient = HttpClient(engineFactory = OkHttp) {\n    engine {\n        config {\n            connectTimeout(10, TimeUnit.SECONDS)\n            readTimeout(60, TimeUnit.SECONDS)\n            writeTimeout(60, TimeUnit.SECONDS)\n        }\n    }\n    defaultRequest {\n        header("X-MY-API-KEY", "someSecretApiKey")\n    }\n    install(Logging) {\n        logger = Logger.DEFAULT\n        level = LogLevel.INFO\n    }\n}\nval client = GraphQLKtorClient(\n    url = URL("http://localhost:8080/graphql"),\n    httpClient = okHttpClient\n)\n')),(0,i.kt)("h3",{id:"per-request-customization"},"Per Request Customization"),(0,i.kt)("p",null,"Individual GraphQL requests can be customized through ",(0,i.kt)("a",{parentName:"p",href:"https://ktor.io/docs/request.html#customizing-requests"},"HttpRequestBuilder"),".\nYou can use this mechanism to specify custom headers, update target url to include custom query parameters, configure\nattributes that can be accessed from the pipeline features as well specify timeouts per request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val helloWorldQuery = HelloWorldQuery(variables = HelloWorldQuery.Variables(name = "John Doe"))\nval result = client.execute(helloWorldQuery) {\n    header("X-B3-TraceId", "0123456789abcdef")\n}\n')),(0,i.kt)("h2",{id:"spring-webclient-customization"},"Spring WebClient Customization"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLWebClient")," is a thin wrapper on top of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/reactive/function/client/WebClient.html"},"Spring WebClient"),"\nthat relies on Reactor Netty for fully asynchronous non-blocking communications. If you want to use Jetty instead you will\nneed to exclude provided ",(0,i.kt)("inlineCode",{parentName:"p"},"io.projectreactor.netty:reactor-netty")," dependency and instead add ",(0,i.kt)("inlineCode",{parentName:"p"},"org.eclipse.jetty:jetty-reactive-httpclient"),"\ndependency."),(0,i.kt)("h3",{id:"global-client-customization-1"},"Global Client Customization"),(0,i.kt)("p",null,"A single instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLWebClient")," can be used to handle many GraphQL operations and you can customize it by providing\na custom instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"WebClient.Builder"),". See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-webclient-customization"},"Spring documentation"),"\nfor additional details."),(0,i.kt)("p",null,"Example below configures ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLWebClient")," with custom timeouts and adds a default ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MY-API-KEY")," header to all requests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val httpClient: HttpClient = HttpClient.create()\n    .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 10_000)\n    .responseTimeout(Duration.ofMillis(10_000))\nval connector: ClientHttpConnector = ReactorClientHttpConnector(httpClient.wiretap(true))\nval webClientBuilder = WebClient.builder()\n    .clientConnector(connector)\n    .defaultHeader("X-MY-API-KEY", "someSecretApiKey")\n\nval client = GraphQLWebClient(\n    url = "http://localhost:8080/graphql",\n    builder = webClientBuilder\n)\n')),(0,i.kt)("h3",{id:"per-request-customization-1"},"Per Request Customization"),(0,i.kt)("p",null,"Individual GraphQL requests can be customized by providing ",(0,i.kt)("inlineCode",{parentName:"p"},"WebClient.RequestBodyUriSpec")," lambda. You can use this mechanism\nto specify custom headers or include custom attributes or query parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val helloWorldQuery = HelloWorldQuery(variables = HelloWorldQuery.Variables(name = "John Doe"))\nval result = client.execute(helloWorldQuery) {\n    header("X-B3-TraceId", "0123456789abcdef")\n}\n')),(0,i.kt)("h2",{id:"custom-graphql-client"},"Custom GraphQL Client"),(0,i.kt)("p",null,"GraphQL Kotlin libraries provide generic a ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," interface as well as Ktor HTTP Client and Spring WebClient based\nreference implementations. Both ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLKtorClient")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLWebClient")," are open classes which means you can also\nextend them to provide some custom ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," logic."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class CustomGraphQLClient(url: URL) : GraphQLKtorClient(url = url) {\n\n    override suspend fun <T: Any> execute(request: GraphQLClientRequest<T>, requestCustomizer: HttpRequestBuilder.() -> Unit): GraphQLClientResponse<T> {\n        // custom init logic\n        val result = super.execute(request, requestCustomizer)\n        // custom finalize logic\n        return result\n    }\n}\n")),(0,i.kt)("h2",{id:"deprecated-field-usage"},"Deprecated Field Usage"),(0,i.kt)("p",null,"Build plugins will automatically fail generation of a client if any of the specified query files are referencing\ndeprecated fields. This ensures that your clients have to explicitly opt-in into deprecated usage by specifying\n",(0,i.kt)("inlineCode",{parentName:"p"},"allowDeprecatedFields")," configuration option."),(0,i.kt)("h2",{id:"custom-graphql-scalars"},"Custom GraphQL Scalars"),(0,i.kt)("p",null,"By default, custom GraphQL scalars are serialized and ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/type-aliases.html"},"type-aliased"),"\nto a String. GraphQL Kotlin plugins also support custom serialization based on provided configuration."),(0,i.kt)("p",null,"In order to automatically convert between custom GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"UUID")," scalar type and ",(0,i.kt)("inlineCode",{parentName:"p"},"java.util.UUID"),", we first need to create\nour custom ",(0,i.kt)("inlineCode",{parentName:"p"},"ScalarConverter"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"package com.example.client\n\nimport com.expediagroup.graphql.client.converter.ScalarConverter\nimport java.util.UUID\n\nclass UUIDScalarConverter : ScalarConverter<UUID> {\n    override fun toScalar(rawValue: Any): UUID = UUID.fromString(rawValue.toString())\n    override fun toJson(value: UUID): Any = value.toString()\n}\n")),(0,i.kt)("p",null,"And then configure build plugin by specifying"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom GraphQL scalar name"),(0,i.kt)("li",{parentName:"ul"},"Target class name"),(0,i.kt)("li",{parentName:"ul"},"Converter that provides logic to map between GraphQL and Kotlin type")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'graphql {\n    packageName = "com.example.generated"\n    endpoint = "http://localhost:8080/graphql"\n    customScalars = listOf(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n}\n')),(0,i.kt)("p",null,"Which will generate ",(0,i.kt)("inlineCode",{parentName:"p"},"UUID.kt")," wrapper class under ",(0,i.kt)("inlineCode",{parentName:"p"},"com.example.generated.scalars")," package."),(0,i.kt)(l.Z,{defaultValue:"jackson",values:[{label:"Jackson",value:"jackson"},{label:"kotlinx.serialization",value:"kotlinx"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"jackson",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class UUID(\n  val value: java.util.UUID\n) {\n  @JsonValue\n  fun rawValue() = converter.toJson(value)\n\n  companion object {\n    val converter: UUIDScalarConverter = UUIDScalarConverter()\n\n    @JsonCreator\n    @JvmStatic\n    fun create(rawValue: Any) = UUID(converter.toScalar(rawValue))\n  }\n}\n"))),(0,i.kt)(o.Z,{value:"kotlinx",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Serializable(with = UUIDSerializer::class)\ndata class UUID(\n  val value: java.util.UUID\n)\n\nclass UUIDSerializer : KSerializer<UUID> {\n  private val converter: UUIDScalarConverter = UUIDScalarConverter()\n\n  override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor("UUID", STRING)\n\n  override fun serialize(encoder: Encoder, value: UUID) {\n    val encoded = converter.toJson(value.value)\n    encoder.encodeString(encoded.toString())\n  }\n\n  override fun deserialize(decoder: Decoder): UUID {\n    val jsonDecoder = decoder as JsonDecoder\n    val element = jsonDecoder.decodeJsonElement()\n    val rawContent = element.jsonPrimitive.content\n    return UUID(value = converter.toScalar(rawContent))\n  }\n}\n')))),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/gradle-plugin-tasks"},"Gradle")," and ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/maven-plugin-goals"},"Maven")," plugin documentation for additional details."))}h.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);