(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[23],{494:function(e,t,n){"use strict";n.r(t);var o=n(1),r=(n(0),n(655)),a=n(201),i=n(487),c=n(662),l=n.n(c),s=n(48),u=n(7),d={id:0,type:"AddThreePassword",visible:!0,completed:null,seenAt:null,color:a.a.GREY},f={hideSkillDetailsDialog:jest.fn(),toggleShowAllSkills:jest.fn(),openAddItemDialog:jest.fn(),openAllItemsView:jest.fn()};jest.mock("../../hooks/use-secondary-onboarding-actions",function(){return{useSecondaryOnboardingActions:function(){return f}}}),jest.mock("../../services/lp-vault",function(){return{LPVault:{extensionInstalled:function(){return!0}}}}),it("should render render the AddThreePassword component without crashing",function(){var e=l()([])({login:{baseUrl:"https://dummy.com"},vaultData:{passwords:{recordType:s.a.Password,username:"test@test.com",record:{}}}}),t=Object(r.mount)(Object(o.jsx)(u.a,{store:e},Object(o.jsx)(i.default,{skill:d,expanded:!0,fromAllSkillsDialog:!1})));expect(f.openAllItemsView).toHaveBeenCalled(),expect(t).toHaveLength(1),t.unmount()}),it("should render the the SiteComponent in AddThreePassword component without crashing",function(){var e=l()([])({login:{baseUrl:"https://dummy.com"},vaultData:{passwords:{recordType:s.a.Password,username:"test@test.com",record:{}}}}),t=Object(r.mount)(Object(o.jsx)(u.a,{store:e},Object(o.jsx)(i.default,{skill:d,expanded:!0,fromAllSkillsDialog:!1})));console.log(t.html()),expect(t.find(".site-name")).toHaveLength(6),t.unmount()}),it("should render the AddThreePassword component and click the Add Item button",function(){var e=l()([])({login:{baseUrl:"https://dummy.com"},vaultData:{passwords:{recordType:s.a.Password,username:"test@test.com",record:{}}}}),t=Object(r.mount)(Object(o.jsx)(u.a,{store:e},Object(o.jsx)(i.default,{skill:d,expanded:!0,fromAllSkillsDialog:!1})));t.find(".add-button").at(1).simulate("click"),t.unmount(),expect(f.openAddItemDialog).toHaveBeenCalled(),expect(f.hideSkillDetailsDialog).toHaveBeenCalled(),expect(f.toggleShowAllSkills).toHaveBeenCalled()})},656:function(e,t){},657:function(e,t){},658:function(e,t){},660:function(e,t){},662:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n=r.applyMiddleware.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e))(function(){var e=[],n=[];return{getState:function(){return c(t)?t(e):t},getActions:function(){return e},dispatch:function(t){if(!(0,i.default)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant? Action: '+JSON.stringify(t));e.push(t);for(var o=0;o<n.length;o++)n[o]();return t},clearActions:function(){e=[]},subscribe:function(e){return c(e)&&n.push(e),function(){var t=n.indexOf(e);t<0||n.splice(t,1)}},replaceReducer:function(e){if(!c(e))throw new Error("Expected the nextReducer to be a function.")}}});return n()}};var o,r=n(41),a=n(663),i=(o=a)&&o.__esModule?o:{default:o};var c=function(e){return"function"===typeof e}},663:function(e,t){var n="[object Object]";var o,r,a=Function.prototype,i=Object.prototype,c=a.toString,l=i.hasOwnProperty,s=c.call(Object),u=i.toString,d=(o=Object.getPrototypeOf,r=Object,function(e){return o(r(e))});e.exports=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||u.call(e)!=n||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e))return!1;var t=d(e);if(null===t)return!0;var o=l.call(t,"constructor")&&t.constructor;return"function"==typeof o&&o instanceof o&&c.call(o)==s}}}]);