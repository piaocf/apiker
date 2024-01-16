export const apikerPagesStatic = `var pages=function(React,ReactDOMServer,cryptojs,bcrypt,ReactDOM){"use strict";function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var React__default=_interopDefaultLegacy(React),cryptojs__default=_interopDefaultLegacy(cryptojs),bcrypt__default=_interopDefaultLegacy(bcrypt),ReactDOM__default=_interopDefaultLegacy(ReactDOM),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError,cryptojs__default.default(),bcrypt__default.default();var defaultActions=[{id:"login",displayName:"Login"}],authActions=[{id:"banUser",displayName:"Ban User"},{id:"unbanUser",displayName:"Unban User"},{id:"searchBans",displayName:"Search Bans"},{id:"sendEmail",displayName:"Send Email"},{id:"updateUser",displayName:"Update User"}],Header=function(_a){var children=(void 0===_a?{}:_a).children;return React__default.default.createElement("nav",{className:"navbar navbar-expand-lg navbar-light px-3"},React__default.default.createElement("a",{className:"navbar-brand",href:"#"},React__default.default.createElement("img",{src:"data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg id='Layer_2' data-name='Layer 2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6.66 7.35'%3e %3cdefs%3e %3cstyle%3e .cls-1 %7b fill: %232e3191%3b %7d %3c/style%3e %3c/defs%3e %3cg id='Layer_23' data-name='Layer 23'%3e %3cpath class='cls-1' d='m3.2%2c0h.13l3.33%2c7.35H0L3.2%2c0Zm1.01%2c5.27l-.52-1.26c-.21-.51-.44-1.31-.44-1.31%2c0%2c0-.21.79-.43%2c1.31l-.52%2c1.26h1.92Z'/%3e %3c/g%3e%3c/svg%3e",height:"59",width:"52"})),children)},Content=function(_a){var children=(void 0===_a?{}:_a).children;return React__default.default.createElement("div",{className:"content mt-5"},React__default.default.createElement("div",{className:"container"},React__default.default.createElement("div",{className:"row justify-content-md-center"},React__default.default.createElement("div",{className:"col-lg-6"},children))))},getAppHelper=function(pageName){var _a;return(null===(_a=null===globalThis||void 0===globalThis?void 0:globalThis.initializeAppHelper)||void 0===_a?void 0:_a.call(globalThis,pageName))||{}},Dialog=function(props){var dialog=props.dialog,_a=props.pageName,pageName=void 0===_a?"":_a,_b=dialog||{},className=_b.className,message=_b.message,setProps=getAppHelper(pageName).setProps,onClose=function(){setProps(__assign(__assign({},props),{dialog:void 0}))};return React__default.default.useEffect((function(){dialog&&!document.querySelector(".dropdown-menu.show")&&setTimeout(onClose,2e3)}),[dialog]),React__default.default.createElement("div",null,React__default.default.createElement("div",{className:"alert ".concat(className," mt-0 mb-0 alert-dismissible fade show"),role:"alert"},React__default.default.createElement("strong",null,"Status:")," ",message,React__default.default.createElement("button",{type:"button",className:"btn-close",onClick:onClose})))},emailTemplates={forgotPassword:'<html><head></head><body><h1>Email Reset</h1><div><p>If you received this email, it means that you\\'ve used the Reset Password feature. If so, click the following link to proceed:</p><p><a href="{resetUrl}">Reset User Email</a></p><p>If you have not initiated this request, please disregard this message. The link will expire in 5 minutes.</p></div></body></html>'},InputGroup=function(_a){var onButtonClick=_a.onButtonClick,onChange=_a.onChange,buttonLabel=_a.buttonLabel,value=_a.value;return React__default.default.useEffect((function(){var handleInputWidth=function(){var inputElem=document.querySelector("#input-group-1 input"),buttonElem=document.querySelector("#input-group-1 button"),offsetWidth=parseFloat(buttonElem.offsetWidth);inputElem.style.maxWidth="calc(100% - ".concat(offsetWidth,"px - 15px)")};window.addEventListener("resize",handleInputWidth),handleInputWidth()}),[]),React__default.default.createElement("div",{className:"input-group mt-2",id:"input-group-1"},React__default.default.createElement("input",{className:"form-control form-control-lg",id:"userEmail",type:"email",placeholder:"User Email",onChange:onChange,value:value}),React__default.default.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:onButtonClick},buttonLabel))},actionsComponent={login:function(props){var isSetup=props.isSetup,_a=props.pageName,pageName=void 0===_a?"":_a,_b=props.csrfToken,csrfToken=void 0===_b?"":_b,setProps=getAppHelper(pageName).setProps;return React__default.default.createElement("div",{className:"action-wrapper"},isSetup&&React__default.default.createElement("div",{className:"alert alert-primary mb-0",role:"alert"},"Welcome to Apiker! Please setup your account in order to manage your app."),React__default.default.createElement("form",{className:"login-form",onSubmit:function(){var formData=new FormData;Array.from(document.querySelectorAll("input")).forEach((function(input){var key=input.getAttribute("id");formData.append(key,input.value)})),fetch("/admp/login",{method:"post",body:formData,headers:{"X-Apiker-Csrf":csrfToken}}).then((function(r){return r.json().then((function(res){return{status:r.status,body:res}}))})).then((function(data){var isSucessful=200===data.status,action=isSucessful?void 0:props.action,message=isSucessful?"Sucess! You can now select a new action":"Failure returned by the endpoint.";setProps(__assign(__assign({},props),{action:action,actions:authActions,dialog:{className:isSucessful?"alert-primary":"alert-danger",message:message}}))})).catch((function(error){setProps(__assign(__assign({},props),{dialog:{className:"alert-danger",message:null==error?void 0:error.message}}))}))}},React__default.default.createElement("input",{className:"form-control form-control-lg mt-2",id:"email",type:"email",placeholder:"Email"}),React__default.default.createElement("input",{className:"form-control form-control-lg mt-2",id:"password",type:"password",placeholder:"Password"}),React__default.default.createElement("button",{className:"btn btn-primary mt-2 action-btn",type:"submit"},isSetup?"Setup User":"Submit")))},banUser:function(props){var _a=props.pageName,pageName=void 0===_a?"":_a,_b=props.csrfToken,csrfToken=void 0===_b?"":_b,setProps=getAppHelper(pageName).setProps;return React__default.default.createElement("div",{className:"action-wrapper"},React__default.default.createElement("form",{className:"login-form",onSubmit:function(){var formData=new FormData;Array.from(document.querySelectorAll("input")).forEach((function(input){var key=input.getAttribute("id");formData.append(key,input.value)})),fetch("/admp/bans",{method:"post",body:formData,headers:{"X-Apiker-Csrf":csrfToken}}).then((function(r){return r.json().then((function(res){return{status:r.status,body:res}}))})).then((function(data){var isSucessful=200===data.status,message=isSucessful?"Action performed successfully":"Failure returned by the endpoint.";setProps(__assign(__assign({},props),{dialog:{className:isSucessful?"alert-primary":"alert-danger",message:message}}))})).catch((function(error){setProps(__assign(__assign({},props),{dialog:{className:"alert-danger",message:null==error?void 0:error.message}}))}))}},React__default.default.createElement("input",{className:"form-control form-control-lg mt-2",id:"userId",type:"text",placeholder:"User ID"}),React__default.default.createElement("button",{className:"btn btn-primary mt-2 action-btn",type:"submit"},"Submit")))},unbanUser:function(props){var _a=props.pageName,pageName=void 0===_a?"":_a,_b=props.csrfToken,csrfToken=void 0===_b?"":_b,setProps=getAppHelper(pageName).setProps;return React__default.default.createElement("div",{className:"action-wrapper"},React__default.default.createElement("form",{className:"login-form",onSubmit:function(){var formData=new FormData;Array.from(document.querySelectorAll("input")).forEach((function(input){var key=input.getAttribute("id");formData.append(key,input.value)})),fetch("/admp/bans",{method:"delete",body:formData,headers:{"X-Apiker-Csrf":csrfToken}}).then((function(r){return r.json().then((function(res){return{status:r.status,body:res}}))})).then((function(data){var isSucessful=200===data.status,message=isSucessful?"Action performed successfully":"Failure returned by the endpoint.";setProps(__assign(__assign({},props),{dialog:{className:isSucessful?"alert-primary":"alert-danger",message:message}}))})).catch((function(error){setProps(__assign(__assign({},props),{dialog:{className:"alert-danger",message:null==error?void 0:error.message}}))}))}},React__default.default.createElement("input",{className:"form-control form-control-lg mt-2",id:"userId",type:"text",placeholder:"User ID"}),React__default.default.createElement("button",{className:"btn btn-primary mt-2 action-btn",type:"submit"},"Submit")))},searchBans:function(props){var _a=props.pageName,pageName=void 0===_a?"":_a,_b=props.csrfToken,csrfToken=void 0===_b?"":_b,setProps=getAppHelper(pageName).setProps,_c=React__default.default.useState([]),results=_c[0],setResults=_c[1];return React__default.default.createElement("div",{className:"action-wrapper"},React__default.default.createElement("form",{className:"login-form",onSubmit:function(){var data={};Array.from(document.querySelectorAll("input")).forEach((function(input){var key=input.getAttribute("id");data[key]=input.value})),data.userId||setProps(__assign(__assign({},props),{dialog:{className:"alert-danger",message:"You must provide an user id"}})),fetch("/admp/bans/".concat(data.userId),{method:"get",headers:{"X-Apiker-Csrf":csrfToken}}).then((function(r){return r.json().then((function(res){return{status:r.status,body:res}}))})).then((function(data){var status=data.status,_a=data.body,_b=(void 0===_a?{}:_a).entries,isSucessful=200===status,mappedEntries=(void 0===_b?[]:_b).map((function(_a){return{time:_a.time,id:_a.id,clientId:_a.clientId,countryCode:_a.countryCode,pathname:_a.pathname,issuedBy:_a.issuedBy}})),message=isSucessful?"Action performed successfully":"Failure returned by the endpoint.";setProps(__assign(__assign({},props),{dialog:{className:isSucessful?"alert-primary":"alert-danger",message:message}})),setResults(mappedEntries)})).catch((function(error){setProps(__assign(__assign({},props),{dialog:{className:"alert-danger",message:null==error?void 0:error.message}}))}))}},React__default.default.createElement("input",{className:"form-control form-control-lg mt-2",id:"userId",type:"text",placeholder:"User ID"}),React__default.default.createElement("button",{className:"btn btn-primary mt-2 action-btn",type:"submit"},"Submit")),results&&results.length?results.map((function(_a){var time=_a.time,id=_a.id,clientId=_a.clientId,countryCode=_a.countryCode,pathname=_a.pathname,issuedBy=_a.issuedBy;return React__default.default.createElement("div",{className:"results-container"},React__default.default.createElement("div",{className:"results-item"},React__default.default.createElement("ul",null,React__default.default.createElement("li",null,React__default.default.createElement("span",{className:"title"},"time")," ",React__default.default.createElement("span",{className:"text",title:new Date(time).toLocaleString()},new Date(time).toLocaleString())),React__default.default.createElement("li",null,React__default.default.createElement("span",{className:"title"},"id")," ",React__default.default.createElement("span",{className:"text",title:id},id)),React__default.default.createElement("li",null,React__default.default.createElement("span",{className:"title"},"clientId")," ",React__default.default.createElement("span",{className:"text",title:clientId},clientId)),React__default.default.createElement("li",null,React__default.default.createElement("span",{className:"title"},"countryCode")," ",React__default.default.createElement("span",{className:"text",title:countryCode},countryCode)),React__default.default.createElement("li",null,React__default.default.createElement("span",{className:"title"},"pathname")," ",React__default.default.createElement("span",{className:"text",title:pathname},pathname)),React__default.default.createElement("li",null,React__default.default.createElement("span",{className:"title"},"issuedBy")," ",React__default.default.createElement("span",{className:"text",title:issuedBy},issuedBy)))))})):null)},sendEmail:function(props){var _a=React__default.default.useState(),template=_a[0],setTemplate=_a[1],_b=props.pageName,pageName=void 0===_b?"":_b,_c=props.csrfToken,csrfToken=void 0===_c?"":_c,setProps=getAppHelper(pageName).setProps,selectTemplateDropdown=React__default.default.createElement("div",{className:"btn-group mt-2"},React__default.default.createElement("button",{className:"btn btn-transparent btn-lg dropdown-toggle action-dropdown",type:"button",id:"main-dropdown","data-bs-toggle":"dropdown","aria-expanded":"false"},template||"Email template"),React__default.default.createElement("ul",{className:"dropdown-menu","aria-labelledby":"main-dropdown"},Object.keys(emailTemplates).map((function(templateName){return React__default.default.createElement("li",{key:templateName},React__default.default.createElement("a",{className:"dropdown-item",href:"#",onClick:function(){setTemplate(templateName)}},templateName))}))));return React__default.default.createElement("div",{className:"action-wrapper"},React__default.default.createElement("div",{className:"alert alert-warning mb-0",role:"alert"},React__default.default.createElement("b",null,"Note:"),' This option requires the "email" and "authRoutes" options to be enabled.'),React__default.default.createElement("form",{className:"login-form",onSubmit:function(){var formData=new FormData;template&&(Array.from(document.querySelectorAll("input")).forEach((function(input){var key=input.getAttribute("id");formData.append(key,input.value)})),formData.append("template",template),fetch("/admp/email",{method:"post",body:formData,headers:{"X-Apiker-Csrf":csrfToken}}).then((function(r){return r.json().then((function(res){return{status:r.status,body:res}}))})).then((function(data){var status=data.status,isSucessful=200===status||201===status,message=isSucessful?"Action performed successfully":"Failure returned by the endpoint.";setProps(__assign(__assign({},props),{dialog:{className:isSucessful?"alert-primary":"alert-danger",message:message}}))})).catch((function(error){setProps(__assign(__assign({},props),{dialog:{className:"alert-danger",message:null==error?void 0:error.message}}))})))}},React__default.default.createElement("input",{className:"form-control form-control-lg mt-2",id:"userEmail",type:"email",placeholder:"User Email"}),selectTemplateDropdown,template?React__default.default.createElement("pre",{className:"m-0 mt-2"},React__default.default.createElement("code",null,emailTemplates[template])):null,React__default.default.createElement("button",{className:"btn btn-primary mt-2 action-btn",type:"submit"},"Submit")))},updateUser:function(props){var initialValue=React__default.default.useRef(""),_a=React__default.default.useState(""),partialUser=_a[0],setPartialUser=_a[1],_b=React__default.default.useState(""),userEmail=_b[0],setUserEmail=_b[1],_c=props.pageName,pageName=void 0===_c?"":_c,_d=props.csrfToken,csrfToken=void 0===_d?"":_d,setProps=getAppHelper(pageName).setProps,trySetPartialUser=function(inputPartialUser,callback){var parsedValue;try{parsedValue=JSON.parse(inputPartialUser)}catch(e){}if(parsedValue){var stringifiedPartialUser=JSON.stringify(parsedValue);setPartialUser(stringifiedPartialUser),callback&&callback(stringifiedPartialUser)}};return console.log("partialUser",partialUser),React__default.default.createElement("div",{className:"action-wrapper"},React__default.default.createElement("form",{className:"login-form",onSubmit:function(){if(userEmail.trim())if(initialValue.current&&partialUser&&initialValue.current!==partialUser){var formData=new FormData;Array.from(document.querySelectorAll("input")).forEach((function(input){var key=input.getAttribute("id");formData.append(key,input.value)})),formData.append("updatedUser",partialUser),fetch("/admp/user",{method:"post",body:formData,headers:{"X-Apiker-Csrf":csrfToken}}).then((function(r){return r.json().then((function(res){return{status:r.status,body:res}}))})).then((function(data){var isSucessful=200===data.status,message=isSucessful?"Action performed successfully":"Failure returned by the endpoint.";setProps(__assign(__assign({},props),{dialog:{className:isSucessful?"alert-primary":"alert-danger",message:message}}))})).catch((function(error){setProps(__assign(__assign({},props),{dialog:{className:"alert-danger",message:null==error?void 0:error.message}}))}))}else setProps(__assign(__assign({},props),{dialog:{className:"alert-danger",message:"Please fill out the fields correctly"}}));else setProps(__assign(__assign({},props),{dialog:{className:"alert-danger",message:"You must provide the user email"}}))}},React__default.default.createElement(InputGroup,{value:userEmail,onButtonClick:function(){console.log("onUserEmailChange",userEmail),fetch("/admp/user?"+new URLSearchParams({userEmail:userEmail}),{method:"get",headers:{"X-Apiker-Csrf":csrfToken}}).then((function(r){return r.json().then((function(res){return{status:r.status,body:res}}))})).then((function(data){var status=data.status,_a=data.body,bodyPartialUser=(void 0===_a?{}:_a).partialUser;if(200===status)if(bodyPartialUser){var stringifiedPartialUser=JSON.stringify(bodyPartialUser);trySetPartialUser(stringifiedPartialUser,(function(output){initialValue.current=output})),setProps(__assign(__assign({},props),{dialog:{className:"alert-primary",message:"Action performed successfully"}}))}else setProps(__assign(__assign({},props),{dialog:{className:"alert-danger",message:"Endpoint error"}}));else setProps(__assign(__assign({},props),{dialog:{className:"alert-danger",message:"User not found!"}}));console.log(data)})).catch((function(error){console.log(error)}))},onChange:function(e){return setUserEmail(e.target.value)},buttonLabel:"Find"}),partialUser?React__default.default.createElement("textarea",{className:"m-0 mt-2",onChange:function(e){return trySetPartialUser(e.target.value)},value:JSON.stringify(JSON.parse(partialUser),null,2)}):null,React__default.default.createElement("button",{className:"btn btn-primary mt-2 action-btn",type:"submit"},"Submit")))}};return{AdminPanelPage:function(props){var userSignedIp=props.userSignedIp,isAdminLoggedIn=props.isAdminLoggedIn,action=props.action,_a=props.actions,actions=void 0===_a?defaultActions:_a,dialog=props.dialog,_b=props.pageName,setProps=getAppHelper(void 0===_b?"":_b).setProps,ActionComponent=action?actionsComponent[action.id]:null;isAdminLoggedIn&&(actions=authActions);var actionDropdown=React__default.default.createElement("div",{className:"btn-group"},React__default.default.createElement("button",{className:"btn btn-transparent btn-lg dropdown-toggle action-dropdown",type:"button",id:"main-dropdown","data-bs-toggle":"dropdown","aria-expanded":"false"},action?action.displayName:"Select action"),React__default.default.createElement("ul",{className:"dropdown-menu","aria-labelledby":"main-dropdown"},actions.map((function(currentAction){var id=currentAction.id,displayName=currentAction.displayName;return React__default.default.createElement("li",{key:id},React__default.default.createElement("a",{className:"dropdown-item",href:"#",onClick:function(){return function(action){setProps(__assign(__assign({},props),{action:action,dialog:void 0}))}(currentAction)}},displayName))}))));return React__default.default.createElement(React__default.default.Fragment,null,React__default.default.createElement(Header,null,dialog&&React__default.default.createElement(Dialog,__assign({},props))),React__default.default.createElement(Content,null,actionDropdown,ActionComponent&&React__default.default.createElement(ActionComponent,__assign({},props)),userSignedIp&&React__default.default.createElement("div",{className:"signed-ip"},"Your ID: ",userSignedIp)))},ReactDOM:ReactDOM__default.default}}(React,0,(function(){}),(function(){}),ReactDOM);`;
