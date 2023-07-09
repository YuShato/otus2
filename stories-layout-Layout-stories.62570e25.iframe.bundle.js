"use strict";(self.webpackChunkyushato_github_io=self.webpackChunkyushato_github_io||[]).push([[347],{"./src/stories/layout/Layout.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MainPage:()=>MainPage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _MainPage$parameters,_MainPage$parameters2,_MainPage$parameters3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Layout",component:__webpack_require__("./src/stories/layout/Layout.tsx").Z,tags:["autodocs"],parameters:{layout:"fullscreen"}};var MainPage={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{},"Content")}};MainPage.parameters=_objectSpread(_objectSpread({},MainPage.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MainPage$parameters=MainPage.parameters)||void 0===_MainPage$parameters?void 0:_MainPage$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: React.createElement('div', {}, 'Content')\n  }\n}"},null===(_MainPage$parameters2=MainPage.parameters)||void 0===_MainPage$parameters2||null===(_MainPage$parameters3=_MainPage$parameters2.docs)||void 0===_MainPage$parameters3?void 0:_MainPage$parameters3.source)})});var __namedExportsOrder=["MainPage"]},"./src/stories/layout/Layout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/layout/ui/index.tsx"),_header_Header__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/header/Header.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Layout=function Layout(_ref){var children=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui__WEBPACK_IMPORTED_MODULE_1__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_ui__WEBPACK_IMPORTED_MODULE_1__.Z.Container,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_header_Header__WEBPACK_IMPORTED_MODULE_2__.h,{onCreateAccount:function onCreateAccount(){console.log("Create account")},onLogin:function onLogin(){console.log("Login")},onLogout:function onLogout(){console.log("Logout")}}),children]})})};Layout.displayName="Layout";const __WEBPACK_DEFAULT_EXPORT__=Layout;try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/layout/Layout.tsx#Layout"]={docgenInfo:Layout.__docgenInfo,name:"Layout",path:"src/stories/layout/Layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/layout/ui/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_constants_media_query__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/media-query.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var LayoutWrapper=styled_components__WEBPACK_IMPORTED_MODULE_0__.zo.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  padding-inline: 40px;\n  box-sizing: border-box;\n  min-width: 100%;\n  margin-bottom: 60px;\n\n  @media "," {\n    padding-inline: 20px;\n    margin-bottom: 40px;\n  }\n\n  @media "," {\n    padding-inline: 15px;\n    margin-bottom: 30px;\n  }\n"])),_constants_media_query__WEBPACK_IMPORTED_MODULE_1__.wQ,_constants_media_query__WEBPACK_IMPORTED_MODULE_1__.dG),LayoutContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.zo.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n  margin-inline: auto;\n\n  @media (max-width: 1300px) {\n    max-width: 100%;\n    padding-inline: 30px;\n    box-sizing: border-box;\n  }\n\n  @media "," {\n    padding-inline: 15px;\n  }\n\n  @media "," {\n    padding-inline: 0;\n  }\n"])),_constants_media_query__WEBPACK_IMPORTED_MODULE_1__.um,_constants_media_query__WEBPACK_IMPORTED_MODULE_1__.dG);const __WEBPACK_DEFAULT_EXPORT__=Object.assign(LayoutWrapper,{Container:LayoutContainer});try{ui.displayName="ui",ui.__docgenInfo={description:"",displayName:"ui",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/layout/ui/index.tsx#ui"]={docgenInfo:ui.__docgenInfo,name:"ui",path:"src/stories/layout/ui/index.tsx#ui"})}catch(__react_docgen_typescript_loader_error){}}}]);