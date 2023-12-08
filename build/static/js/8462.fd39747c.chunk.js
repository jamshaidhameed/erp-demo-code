"use strict";(self.webpackChunkerp_web=self.webpackChunkerp_web||[]).push([[8462],{5531:function(n,e,t){var i=t(9188),a=t(8749),o=t(3329);e.Z=function(n){var e,t,r,c=n.label,l=void 0===c?"Main Account":c,d=n.messageLabel,s=void 0===d?"Main Account":d,u=n.placeholder,h=void 0===u?"Search Main Account":u,f=n.controlled,g=void 0===f||f,p=n.required,v=void 0!==p&&p,x=n.value,m=n.onChange,w=(0,i.$l)().getList,_=w.isError?[]:(null===w||void 0===w?void 0:w.data)||[];return(0,o.jsx)(a.Z,{label:l,messageLabel:s,placeholder:h,options:_,controlled:g,value:null!==(e=null===x||void 0===x?void 0:x.value)&&void 0!==e?e:"",selectedOption:null!==(t=null===x||void 0===x?void 0:x.option)&&void 0!==t?t:null,defaultValue:null!==(r=null===x||void 0===x?void 0:x.defaultValue)&&void 0!==r?r:"",onChange:m,loading:w.isLoading,required:v})}},6578:function(n,e,t){t(2791);var i=t(1367),a=t(3329);e.Z=function(n){var e=n.name,t=n.controlled,o=void 0!==t&&t,r=n.required,c=n.allowClear,l=n.disabled,d=void 0!==l&&l,s=n.value,u=n.onChange,h=n.options,f=n.loading,g=void 0!==f&&f;return(0,a.jsx)(i.Z,{fieldNames:{label:"title",value:"id"},name:e,label:"Cost Centre",messageLabel:"cost centre",options:h,placeholder:"Select cost centre",loading:g,required:r,allowClear:c,disabled:d,controlled:o,value:s,onChange:function(n){return u(h.find((function(e){return e.id===n})))}})}},3493:function(n,e,t){t(2791);var i=t(9188),a=t(1367),o=t(3329);e.Z=function(n){var e=n.name,t=n.required,r=n.disabled,c=void 0!==r&&r,l=n.value,d=n.onChange,s=n.yearId,u=n.controlled,h=void 0===u||u,f=(0,i.qN)(s).getList,g=f.isError?[]:(null===f||void 0===f?void 0:f.data)||[];return(0,o.jsx)(a.Z,{fieldNames:{label:"ST_PERIOD_DESC",value:"OID"},label:"Financial Period",messageLabel:"financial period",placeholder:"Select financial period",options:g,name:e,loading:f.isLoading,required:t,disabled:c,controlled:h,value:l,onChange:function(n){return d(g.find((function(e){return e.OID===n})))}})}},3516:function(n,e,t){var i=t(1367),a=t(3329);e.Z=function(n){var e=n.name,t=n.data,o=n.loading,r=void 0!==o&&o,c=n.required,l=n.disabled,d=void 0!==l&&l,s=n.value,u=n.onChange,h=n.controlled,f=void 0===h||h;return(0,a.jsx)(i.Z,{fieldNames:{label:"ST_YEAR_CODE",value:"OID"},name:e,label:"Financial Year",messageLabel:"financial year",options:t,placeholder:"Select financial year",loading:r,required:c,disabled:d,controlled:f,value:s,onChange:function(n){return u(t.find((function(e){return e.OID===n})))}})}},9625:function(n,e,t){t.d(e,{Cs:function(){return a},OH:function(){return i},S2:function(){return o},SJ:function(){return c},_b:function(){return r}});var i=[{label:"All",value:"all"}],a={JV_PRINT_CONTENT_LIST:"JV_PRINT_CONTENT_LIST",JV_PRINT_CONTENT_FORM:"JV_PRINT_CONTENT_FORM",COA_REPORT_PRINT_CONTENT:"COA_REPORT_PRINT_CONTENT",JV_REPORT_PRINT_CONTENT:"JV_REPORT_PRINT_CONTENT",GL_REPORT_PRINT_CONTENT:"GL_REPORT_PRINT_CONTENT",SL_REPORT_PRINT_CONTENT:"SL_REPORT_PRINT_CONTENT",TB_REPORT_PRINT_CONTENT:"TB_REPORT_PRINT_CONTENT",PL_REPORT_PRINT_CONTENT:"PL_REPORT_PRINT_CONTENT"},o={GL:"GL"},r=i[0].value,c={F_JV_DETAIL_SECTION_FORM:"F_JV_DETAIL_SECTION_FORM",F_JV_PARENT_SECTION_FORM:"F_JV_PARENT_SECTION_FORM",F_GR_JV_SEARCH_FORM:"F_GR_JV_SEARCH_FORM",F_UDFA_PARENT_SECTION_FORM:"F_UDFA_PARENT_SECTION_FORM",F_UDFA_DETAIL_SECTION_FORM:"F_UDFA_DETAIL_SECTION_FORM"}},8678:function(n,e,t){t.d(e,{O:function(){return p}});var i=t(2917),a=t(4165),o=t(5861),r=t(6432),c=t(1381),l=t(1876).h.getState().configs.apiBaseUrls.ams,d="".concat(l,"/api/ams"),s="".concat(d,"/cost-centre/get"),u=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(s).then((function(n){return(0,r.j)(n.data)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h="AMS_CC_SELECT_LIST",f=t(9655),g=t(5421);function p(){return{getList:(0,i.a)({queryKey:[h],queryFn:u,onError:function(n){return f.Am.error((0,g.nU)(n))}})}}},3172:function(n,e,t){t.d(e,{Vw:function(){return f},XK:function(){return u},fX:function(){return d},qg:function(){return h},tZ:function(){return s},x8:function(){return l}});var i=t(4165),a=t(5861),o=t(1381),r=t(3932),c=t(6432),l=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){var t,a=arguments;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:"",n.next=3,o.Z.get(r.ep,{params:{level:t,organization_ID:e}}).then((function(n){return(0,c.j)(n.data)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.post(r.Y7,e).then((function(n){return(0,c.j)(n.data)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get(r.lp,{params:e}).then((function(n){return(0,c.j)(n.data)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get(r.Ay,{params:e}).then((function(n){return(0,c.j)(n.data)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get(r.KK,{params:e}).then((function(n){return(0,c.j)(n.data)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get(r.wS,{params:e});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},8749:function(n,e,t){var i=t(1413),a=t(7106),o=t(43),r=t(7846),c=t(5),l=t(763),d=t(2791),s=t(6432),u=t(3329);e.Z=function(n){var e=n.label,t=n.name,h=n.messageLabel,f=n.placeholder,g=void 0===f?"Search":f,p=n.onChange,v=n.onSearch,x=n.value,m=n.options,w=void 0===m?[]:m,_=n.required,Z=void 0!==_&&_,b=n.controlled,S=void 0!==b&&b,T=n.autoFocus,I=void 0!==T&&T,C=n.allowClear,j=void 0!==C&&C,N=n.loading,y=void 0!==N&&N,M=n.className,E=void 0===M?"":M,O=n.disabled,P=void 0!==O&&O,R=n.parentClassName,D=void 0===R?"":R,k=n.style,A=void 0===k?{}:k,L=n.async,F=void 0!==L&&L,z=n.selectedOption,H=void 0===z?null:z,V=n.defaultValue,q=void 0===V?"":V,B=(0,d.useMemo)((function(){return(0,l.debounce)((function(n){F&&v(n)}),500)}),[]),W=(0,d.useMemo)((function(){return y?(0,u.jsx)(o.Z,{style:{fontSize:20},indicator:(0,u.jsx)(a.Z,{style:{color:"#635bff"},spin:!0})}):""}),[y]),G=(0,d.useMemo)((function(){return(0,s.X)(w,"value")}),[w]),J=function(n,e){var t;return(null!==(t=e.label)&&void 0!==t?t:"").toLowerCase().includes(n.toLowerCase())},U=function(n,e){var t;return p({value:null!==(t=null===e||void 0===e?void 0:e.label)&&void 0!==t?t:n,option:e,defaultValue:""})},X=function(){null==H&&x&&U("",null)};return(0,d.useEffect)((function(){q&&G[q]&&p({value:G[q].label,option:G[q],defaultValue:""})}),[q,G]),(0,u.jsx)(r.Z.Item,{name:t,style:A,className:D,validateTrigger:"onBlur",label:e,rules:[{required:Z,message:"Please select ".concat(h,".")}],children:(0,u.jsx)(c.Z,(0,i.Z)({},function(){var n={popupClassName:"antd-selectInput-custom ".concat(E),placeholder:g,autoFocus:I,allowClear:j,disabled:P,options:w,notFoundContent:W,filterOption:!F&&J};return F&&(n.onSearch=B),S&&(n.value=x,n.onChange=function(n){return U(n,null)},n.onSelect=U,n.onBlur=X),n}()))})}},8588:function(n,e,t){t.d(e,{Z:function(){return s}});var i=t(1413),a=t(2648),o=t(7846),r=(t(2791),t(7892)),c=t.n(r),l=t(3329),d=a.Z.RangePicker;function s(n){var e=n.label,t=n.name,r=n.messageLabel,s=n.placeholder,u=n.onChange,h=n.value,f=n.showRange,g=void 0!==f&&f,p=n.showTime,v=void 0!==p&&p,x=n.required,m=void 0!==x&&x,w=n.controlled,_=void 0!==w&&w,Z=n.autoFocus,b=void 0!==Z&&Z,S=n.allowClear,T=void 0!==S&&S,I=n.minDate,C=void 0===I?null:I,j=n.className,N=void 0===j?"":j,y=n.disabled,M=void 0!==y&&y,E=n.popupClassName,O=void 0===E?"":E,P="hh:mm:ss A",R="MMMM D, YYYY",D=function(n,e){return u((t=e)?v?new Date(t):new Date("".concat(t," ").concat((new Date).toLocaleTimeString())):null);var t},k=function(){var n={popupClassName:O,className:"antd-input-custom antd-dateInput-custom ".concat(N),placeholder:s,autoFocus:b,allowClear:T,disabled:M,format:v?"".concat(R," ").concat(P):R,showTime:v?{format:P}:null};return _&&(n.value=h?c()(h):null,n.onChange=D),n};return(0,l.jsx)(o.Z.Item,{name:t,validateTrigger:"onBlur",label:e,rules:[{required:m,message:"Please enter ".concat(r,".")}],children:g?(0,l.jsx)(d,(0,i.Z)({},k())):(0,l.jsx)(a.Z,(0,i.Z)((0,i.Z)({},k()),{},{disabledDate:function(n){return C?n<C:null}}))})}},7951:function(n,e,t){var i=t(1413),a=t(7846),o=t(1306),r=t(3329);e.Z=function(n){var e=n.name,t=n.label,c=n.className,l=void 0===c?"":c,d=n.parentClassName,s=void 0===d?"":d,u=n.controlled,h=void 0!==u&&u,f=n.value,g=n.onChange,p=n.size,v=void 0===p?"large":p,x=n.disabled,m=void 0!==x&&x,w=function(n){return g(n.target.checked)};return(0,r.jsx)(a.Z.Item,{name:e,label:t,valuePropName:"checked",className:s,children:(0,r.jsx)(o.Z,(0,i.Z)({},function(){var n={className:"antd_input_switch_custom ".concat(l),size:v,disabled:m};return h&&(n.checked=f,n.onChange=w),n}()))})}},1483:function(n,e,t){t.d(e,{S:function(){return a}});var i=t(3952),a=function(n){return{type:i.JF,payload:n}}},9543:function(n,e,t){t.d(e,{LM:function(){return f},p8:function(){return g},pi:function(){return p},y4:function(){return h}});var i=t(6765),a=t(7892),o=t.n(a),r=t(3666),c=t.n(r),l=t(130),d=t.n(l),s=t(3027),u=t.n(s);o().extend(c()),o().extend(d()),o().extend(u());var h=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.nH[2];return o().utc(o()(n).format(i.nH[1])).local().format(e)},f=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.nH[2];return o()(n).format(e)},g=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.nH[9];return o()(h(n,e))},p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.nH[9];return o()().format(n)}},739:function(n,e,t){t.d(e,{p:function(){return a},z:function(){return i}});var i=function(n){var e=document.querySelectorAll(".no-scroll-on-print");e.forEach((function(n){n.style.overflow="unset"}));var t=window.open(" ","Print Page","width=".concat(800,", height=",2e3));t.document.write(document.getElementById(n).innerHTML),t.document.close(),e.forEach((function(n){n.style.overflow="auto"})),setTimeout((function(){t.print(),t.close()}),250)},a=function(n){var e='<html> <head> <meta http-equiv="content-type" content="text/plain; charset=UTF-8"/> </head> <body> '+document.getElementById(n).innerHTML+"</body> </html>";window.location.href="data:application/vnd.ms-excel;base64,"+window.btoa(e)}},8462:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var i=t(4942),a=t(1413),o=t(9439),r=t(3782),c=t(35),l=t(9625),d=t(2791),s=t(9434),u=t(1483),h=t(5421),f=t(9655),g=t(739),p=t(6106),v=t(914),x=t(7001),m=t(1736),w=t(8588),_=t(5531),Z=t(7951),b=t(3516),S=t(3493),T=t(6578),I=t(8678),C=t(1367),j=t(3329);function N(n){var e,t,i,a,o=n.form,r=n.initialValues,c=n.getFinancialYears,d=n.onChange,s=n.onGenerate,u=n.fromGlAccount,h=n.handleChangeFromAccount,f=n.toGlAccount,g=n.handleChangeToAccount,N=(0,I.O)().getList,y=N.isError?[]:(null===N||void 0===N?void 0:N.data)||[],M=c.isError?[]:(null===c||void 0===c?void 0:c.data)||[];return(0,j.jsx)(m.Z,{name:"subLedgerReport",initialValues:r,form:o,className:"px-8",children:(0,j.jsxs)(p.Z,{justify:"flex-start",align:"bottom",gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,j.jsx)(v.Z,{xxl:8,lg:12,sm:12,xs:24,className:"gutter-row",children:(0,j.jsx)(b.Z,{loading:c.isLoading,data:M,required:!0,name:"financial_year",value:null===(e=r.financialYear)||void 0===e?void 0:e.OID,onChange:function(n){return d("financial_year",n)}})}),(0,j.jsx)(v.Z,{xxl:8,lg:12,sm:12,xs:24,className:"gutter-row",children:(0,j.jsx)(S.Z,{yearId:null===(t=r.financial_year)||void 0===t?void 0:t.OID,name:"financial_period",required:!0,value:null===(i=r.financial_period)||void 0===i?void 0:i.OID,onChange:function(n){return d("financial_period",n)}})}),(0,j.jsx)(v.Z,{xxl:8,lg:12,sm:12,xs:24,className:"gutter-row",children:(0,j.jsx)(w.Z,{label:"From Date",name:"fromDate",popupClassName:"responsive_datepicker",required:!0,controlled:!0,onChange:function(n){return d("fromDate",n)}})}),(0,j.jsx)(v.Z,{xxl:8,lg:12,sm:12,xs:24,className:"gutter-row",children:(0,j.jsx)(w.Z,{label:"To Date",name:"toDate",popupClassName:"responsive_datepicker",required:!0,controlled:!0,onChange:function(n){return d("toDate",n)}})}),(0,j.jsx)(v.Z,{xxl:8,lg:12,sm:12,xs:24,className:"gutter-row",children:(0,j.jsx)(_.Z,{label:"From Main Account",placeholder:"Search From Main Account",value:u,onChange:h})}),(0,j.jsx)(v.Z,{xxl:8,lg:12,sm:12,xs:24,className:"gutter-row",children:(0,j.jsx)(_.Z,{label:"To Main Account",placeholder:"Search To Main Account",value:f,onChange:g})}),(0,j.jsx)(v.Z,{xxl:8,lg:12,sm:12,xs:24,className:"gutter-row",children:(0,j.jsx)(T.Z,{name:"cost_centre",required:!0,allowClear:!0,options:y,value:null===(a=r.cost_centre)||void 0===a?void 0:a.id,controlled:!0,onChange:function(n){return d("cost_centre",n)},loading:N.isLoading})}),(0,j.jsx)(v.Z,{xxl:8,lg:12,sm:12,xs:24,className:"gutter-row",children:(0,j.jsx)(C.Z,{title:"Level",label:"Level",name:"level",messageLabel:"level",options:l.OH,placeholder:"Select level"})}),(0,j.jsx)(v.Z,{xxl:4,lg:4,sm:12,xs:12,className:"gutter-row",children:(0,j.jsx)(Z.Z,{label:"Zero Balance",name:"zero_balance"})}),(0,j.jsx)(v.Z,{xxl:4,lg:4,sm:12,xs:12,className:"gutter-row",children:(0,j.jsx)(Z.Z,{label:"Consolidated",name:"consolidated"})}),(0,j.jsx)(v.Z,{xxl:8,lg:4,sm:10,xs:10,className:"gutter-row",children:(0,j.jsx)(x.Z,{type:"primary",label:"Generate",onClick:s})})]})})}var y=t(7762),M=t(4925),E=t(6765),O=t(9543),P=["children"],R={headerTitle:{fontWeight:600,fontSize:24,textAlign:"center",height:50},infoTitle:{width:200,fontWeight:600,paddingBottom:10},infoDetails:{fontWeight:400,width:200,paddingBottom:10},table:{borderCollapse:"collapse",fontSize:"14px",border:"0",width:"100%",marginBottom:20},thead:{borderTop:"solid 1px rgb(239, 242, 245)",borderBottom:"solid 1px rgb(239, 242, 245)"},content:{paddingInline:10,width:130},heading:{paddingInline:10,border:"1px solid #000",textWrap:"nowrap"},split:{display:"flex"}},D=function(n){var e=n.children;return(0,j.jsx)("td",{style:R.content,children:e})},k=function(n){var e=n.children;return(0,j.jsx)("td",{style:R.heading,children:(0,j.jsx)("strong",{children:e})})},A=function(n){var e=n.children,t=(0,M.Z)(n,P);return(0,j.jsx)("td",(0,a.Z)((0,a.Z)({},t),{},{style:{width:"260px",textAlign:"center",fontWeight:"bold",borderTop:"1px solid #000",borderRight:"1px solid #000",borderLeft:"1px solid #000"},children:e}))};function L(n){var e,t,i,a,o,r=n.data,c=n.initialValues,u=n.fromGlAccount,h=n.toGlAccount,f=(0,s.v9)((function(n){return n})).auth.user,g=(0,d.useMemo)((function(){return function(n){var e=[],t=n.reduce((function(n,e){return n+e.opening_debit_amount}),0),i=n.reduce((function(n,e){return n+e.opening_credit_amount}),0),a=n.reduce((function(n,e){return n+e.period_debit_amount}),0),o=n.reduce((function(n,e){return n+e.period_credit_amount}),0),r=n.reduce((function(n,e){return n+e.closing_debit_amount}),0),c=n.reduce((function(n,e){return n+e.closing_credit_amount}),0);if((null===n||void 0===n?void 0:n.length)>0){var l,d=n,s=(0,y.Z)(d);try{for(s.s();!(l=s.n()).done;){var u=l.value,h=u.id,f=u.ST_MAIN_ACCOUNT_CODE,g=u.ST_MAIN_ACCOUNT_DESC,p=u.closing_credit_amount,v=u.closing_debit_amount,x=u.opening_credit_amount,m=u.opening_debit_amount,w=u.period_credit_amount,_=u.period_debit_amount;e.push((0,j.jsxs)("tr",{children:[(0,j.jsx)(D,{children:null!==f&&void 0!==f?f:""}),(0,j.jsx)(D,{children:g}),(0,j.jsx)(D,{children:x}),(0,j.jsx)(D,{children:m}),(0,j.jsx)(D,{children:w}),(0,j.jsx)(D,{children:_}),(0,j.jsx)(D,{children:p}),(0,j.jsx)(D,{children:v})]},h))}}catch(Z){s.e(Z)}finally{s.f()}e.push((0,j.jsxs)("tr",{style:{height:"40px"},children:[(0,j.jsx)("td",{style:{paddingInline:10,textWrap:"nowrap",width:130},children:(0,j.jsx)("strong",{children:"Total:"})}),(0,j.jsx)("td",{style:{paddingInline:10,textWrap:"nowrap",width:80}}),(0,j.jsx)("td",{style:{paddingInline:10,textWrap:"nowrap",width:80},children:t}),(0,j.jsx)("td",{style:{paddingInline:10,textWrap:"nowrap",width:80},children:i}),(0,j.jsx)("td",{style:{paddingInline:10,textWrap:"nowrap",width:80},children:a}),(0,j.jsx)("td",{style:{paddingInline:10,textWrap:"nowrap",width:80},children:o}),(0,j.jsx)("td",{style:{paddingInline:10,textWrap:"nowrap",width:80},children:r}),(0,j.jsx)("td",{style:{paddingInline:10,textWrap:"nowrap",width:80},children:c})]}))}return e}(r)}),[r]);return(0,j.jsx)(j.Fragment,{children:r&&(0,j.jsxs)("div",{style:{overflowX:"auto"},id:l.Cs.TB_REPORT_PRINT_CONTENT,children:[(0,j.jsx)("div",{style:R.headerTitle,children:"Journal Voucher"}),(0,j.jsx)("table",{style:R.table,children:(0,j.jsxs)("tbody",{children:[(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{style:R.infoTitle,children:"Financial Period:"}),(0,j.jsx)("td",{style:R.infoDetails,children:null===(e=c.financial_period)||void 0===e?void 0:e.ST_PERIOD_DESC}),(0,j.jsx)("td",{colSpan:2}),(0,j.jsx)("td",{style:R.infoTitle,children:"User:"}),(0,j.jsx)("td",{style:R.infoDetails,children:null!==(t=null===f||void 0===f?void 0:f.USERNAME)&&void 0!==t?t:""})]}),(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{style:R.infoTitle,children:"From Date:"}),(0,j.jsxs)("td",{style:R.infoDetails,children:[" ",(0,O.LM)(c.fromDate,E.nH[10])]}),(0,j.jsx)("td",{colSpan:2}),(0,j.jsx)("td",{style:R.infoTitle,children:"To Date:"}),(0,j.jsxs)("td",{style:R.infoDetails,children:[" ",(0,O.LM)(c.toDate,E.nH[10])]})]}),(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{style:R.infoTitle,children:"From Account:"}),(0,j.jsx)("td",{style:R.infoDetails,children:null===u||void 0===u||null===(i=u.option)||void 0===i?void 0:i.code}),(0,j.jsx)("td",{colSpan:2}),(0,j.jsx)("td",{style:R.infoTitle,children:"To Account:"}),(0,j.jsxs)("td",{style:R.infoDetails,children:[" ",null===h||void 0===h||null===(a=h.option)||void 0===a?void 0:a.code]})]}),(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{style:R.infoTitle,children:"Time:"}),(0,j.jsx)("td",{style:R.infoDetails,children:(0,O.pi)(E.nH[1])}),(0,j.jsx)("td",{colSpan:2}),(0,j.jsx)("td",{style:R.infoTitle,children:"Cost Center:"}),(0,j.jsx)("td",{style:R.infoDetails,children:null===(o=c.cost_centre)||void 0===o?void 0:o.title})]}),(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{style:R.infoTitle,children:"Level:"}),(0,j.jsxs)("td",{style:R.infoDetails,children:[" ",c.level]}),(0,j.jsx)("td",{colSpan:2})]})]})}),(0,j.jsxs)("table",{style:R.table,children:[(0,j.jsxs)("thead",{style:R.thead,children:[(0,j.jsxs)("tr",{style:{background:"#fafafa",height:"40px"},children:[(0,j.jsx)(A,{children:"Account Code"}),(0,j.jsx)(A,{children:"Description"}),(0,j.jsx)(A,{colSpan:2,children:"Opening Balance"}),(0,j.jsx)(A,{colSpan:2,children:"For The Period Balance"}),(0,j.jsx)(A,{colSpan:2,children:"Closing Balance"})]}),(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{style:{borderBottom:"1px solid #000",borderRight:"1px solid #000",borderLeft:"1px solid #000"}}),(0,j.jsx)("td",{style:{borderBottom:"1px solid #000"}}),(0,j.jsx)(k,{children:"Debit"}),(0,j.jsx)(k,{children:"Credit"}),(0,j.jsx)(k,{children:"Debit"}),(0,j.jsx)(k,{children:"Credit"}),(0,j.jsx)(k,{children:"Debit"}),(0,j.jsx)(k,{children:"Credit"})]})]}),(0,j.jsx)("tbody",{className:R.body,children:g})]})]})})}var F=t(7846),z=t(3172),H=t(9188);function V(){var n=(0,s.v9)((function(n){return n.configs.location})),e=(0,s.I0)(),t=F.Z.useForm(),p=(0,o.Z)(t,1)[0],v=(0,d.useState)({financial_year:void 0,financial_period:void 0,fromDate:(0,O.p8)(new Date),toDate:(0,O.p8)(new Date),level:l._b,cost_centre:void 0,zero_balance:!1,consolidated:!1}),x=(0,o.Z)(v,2),m=x[0],w=x[1],_=(0,d.useState)((0,a.Z)({},E.$I)),Z=(0,o.Z)(_,2),b=Z[0],S=Z[1],T=(0,d.useState)((0,a.Z)({},E.$I)),I=(0,o.Z)(T,2),C=I[0],y=I[1],M=(0,d.useState)(!1),P=(0,o.Z)(M,2),R=P[0],D=P[1],k=(0,d.useState)([]),A=(0,o.Z)(k,2),V=A[0],q=A[1],B=(0,H.qM)().getList,W=(0,H.$l)().getList;(0,d.useEffect)((function(){if(null!==W&&void 0!==W&&W.data){var n,e=(null===W||void 0===W||null===(n=W.data)||void 0===n?void 0:n.length)-1;S((function(n){var e;return(0,a.Z)((0,a.Z)({},n),{},{defaultValue:null===(e=W.data)||void 0===e?void 0:e[0].value})})),y((function(n){var t;return(0,a.Z)((0,a.Z)({},n),{},{defaultValue:null===(t=W.data)||void 0===t?void 0:t[e].value})}))}}),[null===W||void 0===W?void 0:W.data]);var G=[{label:"Print",key:"Print",disabled:!R,onClick:function(){return(0,g.z)(l.Cs.TB_REPORT_PRINT_CONTENT)}},{label:"Export To Excel",key:"ExportToExcel",disabled:!R,onClick:function(){return(0,g.p)(l.Cs.TB_REPORT_PRINT_CONTENT)}}];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.Z,{name:"Trial Balance Report",buttons:G}),(0,j.jsx)("div",{className:"app_page_content",children:(0,j.jsxs)(c.Z,{children:[(0,j.jsx)(N,{form:p,initialValues:m,onChange:function(n,e){w((function(t){return(0,a.Z)((0,a.Z)({},t),{},(0,i.Z)({},n,e))}))},getFinancialYears:B,fromGlAccount:b,handleChangeFromAccount:function(n){S((function(e){return(0,a.Z)((0,a.Z)({},e),n)}))},toGlAccount:C,handleChangeToAccount:function(n){y((function(e){return(0,a.Z)((0,a.Z)({},e),n)}))},onGenerate:function(t){p.validateFields().then((function(t){var i,a,o=t.financial_year,r=t.financial_period,c=t.fromDate,l=t.toDate,d=t.cost_centre,s=t.zero_balance,g={organization_ID:n,financial_year_ID:o,financial_period_ID:r,from_date:(0,O.LM)(new Date(c),E.nH[9]),to_date:(0,O.LM)(new Date(l),E.nH[9]),from_main_account:parseInt(null===(i=b.option)||void 0===i?void 0:i.code),to_main_account:parseInt(null===(a=C.option)||void 0===a?void 0:a.code),cost_centre_ID:d,zero_balance_include:!0===s?1:0};e((0,u.S)(!0)),(0,z.qg)(g).then((function(n){q(n),D(!0),e((0,u.S)(!1))})).catch((function(n){e((0,u.S)(!1)),f.Am.error((0,h.nU)(n))}))})).catch((function(){return f.Am.error(E.QK.FormValidationMsg)}))}}),R&&(0,j.jsx)("div",{className:"px-4",children:(0,j.jsx)(L,{initialValues:m,toGlAccount:C,fromGlAccount:b,data:V})})]})})]})}},1306:function(n,e,t){t.d(e,{Z:function(){return O}});var i=t(4942),a=t(9439),o=t(7106),r=t(1694),c=t.n(r),l=t(7462),d=t(4925),s=t(2791),u=t(5179),h=t(1354),f=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],g=s.forwardRef((function(n,e){var t,o=n.prefixCls,r=void 0===o?"rc-switch":o,g=n.className,p=n.checked,v=n.defaultChecked,x=n.disabled,m=n.loadingIcon,w=n.checkedChildren,_=n.unCheckedChildren,Z=n.onClick,b=n.onChange,S=n.onKeyDown,T=(0,d.Z)(n,f),I=(0,u.Z)(!1,{value:p,defaultValue:v}),C=(0,a.Z)(I,2),j=C[0],N=C[1];function y(n,e){var t=j;return x||(N(t=n),null===b||void 0===b||b(t,e)),t}var M=c()(r,g,(t={},(0,i.Z)(t,"".concat(r,"-checked"),j),(0,i.Z)(t,"".concat(r,"-disabled"),x),t));return s.createElement("button",(0,l.Z)({},T,{type:"button",role:"switch","aria-checked":j,disabled:x,className:M,ref:e,onKeyDown:function(n){n.which===h.Z.LEFT?y(!1,n):n.which===h.Z.RIGHT&&y(!0,n),null===S||void 0===S||S(n)},onClick:function(n){var e=y(!j,n);null===Z||void 0===Z||Z(e,n)}}),m,s.createElement("span",{className:"".concat(r,"-inner")},s.createElement("span",{className:"".concat(r,"-inner-checked")},w),s.createElement("span",{className:"".concat(r,"-inner-unchecked")},_)))}));g.displayName="Switch";var p=g,v=t(117),x=t(1929),m=t(9125),w=t(4107),_=t(9391),Z=t(7521),b=t(5564),S=t(9922),T=function(n){var e,t,a,o,r,c=n.componentCls,l="".concat(c,"-inner");return(0,i.Z)({},c,(0,i.Z)({},"&".concat(c,"-small"),(r={minWidth:n.switchMinWidthSM,height:n.switchHeightSM,lineHeight:"".concat(n.switchHeightSM,"px")},(0,i.Z)(r,"".concat(c,"-inner"),(e={paddingInlineStart:n.switchInnerMarginMaxSM,paddingInlineEnd:n.switchInnerMarginMinSM},(0,i.Z)(e,"".concat(l,"-checked"),{marginInlineStart:"calc(-100% + ".concat(n.switchPinSizeSM+2*n.switchPadding,"px - ").concat(2*n.switchInnerMarginMaxSM,"px)"),marginInlineEnd:"calc(100% - ".concat(n.switchPinSizeSM+2*n.switchPadding,"px + ").concat(2*n.switchInnerMarginMaxSM,"px)")}),(0,i.Z)(e,"".concat(l,"-unchecked"),{marginTop:-n.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}),e)),(0,i.Z)(r,"".concat(c,"-handle"),{width:n.switchPinSizeSM,height:n.switchPinSizeSM}),(0,i.Z)(r,"".concat(c,"-loading-icon"),{top:(n.switchPinSizeSM-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize}),(0,i.Z)(r,"&".concat(c,"-checked"),(a={},(0,i.Z)(a,"".concat(c,"-inner"),(t={paddingInlineStart:n.switchInnerMarginMinSM,paddingInlineEnd:n.switchInnerMarginMaxSM},(0,i.Z)(t,"".concat(l,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),(0,i.Z)(t,"".concat(l,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(n.switchPinSizeSM+2*n.switchPadding,"px + ").concat(2*n.switchInnerMarginMaxSM,"px)"),marginInlineEnd:"calc(-100% + ".concat(n.switchPinSizeSM+2*n.switchPadding,"px - ").concat(2*n.switchInnerMarginMaxSM,"px)")}),t)),(0,i.Z)(a,"".concat(c,"-handle"),{insetInlineStart:"calc(100% - ".concat(n.switchPinSizeSM+n.switchPadding,"px)")}),a)),(0,i.Z)(r,"&:not(".concat(c,"-disabled):active"),(o={},(0,i.Z)(o,"&:not(".concat(c,"-checked) ").concat(l),(0,i.Z)({},"".concat(l,"-unchecked"),{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2})),(0,i.Z)(o,"&".concat(c,"-checked ").concat(l),(0,i.Z)({},"".concat(l,"-checked"),{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2})),o)),r)))},I=function(n){var e,t=n.componentCls;return(0,i.Z)({},t,(e={},(0,i.Z)(e,"".concat(t,"-loading-icon").concat(n.iconCls),{position:"relative",top:(n.switchPinSize-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"}),(0,i.Z)(e,"&".concat(t,"-checked ").concat(t,"-loading-icon"),{color:n.switchColor}),e))},C=function(n){var e,t,a=n.componentCls,o=n.motion,r="".concat(a,"-handle");return(0,i.Z)({},a,(t={},(0,i.Z)(t,r,{position:"absolute",top:n.switchPadding,insetInlineStart:n.switchPadding,width:n.switchPinSize,height:n.switchPinSize,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:n.colorWhite,borderRadius:n.switchPinSize/2,boxShadow:n.switchHandleShadow,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),(0,i.Z)(t,"&".concat(a,"-checked ").concat(r),{insetInlineStart:"calc(100% - ".concat(n.switchPinSize+n.switchPadding,"px)")}),(0,i.Z)(t,"&:not(".concat(a,"-disabled):active"),o?(e={},(0,i.Z)(e,"".concat(r,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),(0,i.Z)(e,"&".concat(a,"-checked ").concat(r,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}),e):{}),t))},j=function(n){var e,t,a,o,r=n.componentCls,c="".concat(r,"-inner");return(0,i.Z)({},r,(o={},(0,i.Z)(o,c,(e={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:n.switchInnerMarginMax,paddingInlineEnd:n.switchInnerMarginMin,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},(0,i.Z)(e,"".concat(c,"-checked, ").concat(c,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),(0,i.Z)(e,"".concat(c,"-checked"),{marginInlineStart:"calc(-100% + ".concat(n.switchPinSize+2*n.switchPadding,"px - ").concat(2*n.switchInnerMarginMax,"px)"),marginInlineEnd:"calc(100% - ".concat(n.switchPinSize+2*n.switchPadding,"px + ").concat(2*n.switchInnerMarginMax,"px)")}),(0,i.Z)(e,"".concat(c,"-unchecked"),{marginTop:-n.switchHeight,marginInlineStart:0,marginInlineEnd:0}),e)),(0,i.Z)(o,"&".concat(r,"-checked ").concat(c),(t={paddingInlineStart:n.switchInnerMarginMin,paddingInlineEnd:n.switchInnerMarginMax},(0,i.Z)(t,"".concat(c,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),(0,i.Z)(t,"".concat(c,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(n.switchPinSize+2*n.switchPadding,"px + ").concat(2*n.switchInnerMarginMax,"px)"),marginInlineEnd:"calc(-100% + ".concat(n.switchPinSize+2*n.switchPadding,"px - ").concat(2*n.switchInnerMarginMax,"px)")}),t)),(0,i.Z)(o,"&:not(".concat(r,"-disabled):active"),(a={},(0,i.Z)(a,"&:not(".concat(r,"-checked) ").concat(c),(0,i.Z)({},"".concat(c,"-unchecked"),{marginInlineStart:2*n.switchPadding,marginInlineEnd:2*-n.switchPadding})),(0,i.Z)(a,"&".concat(r,"-checked ").concat(c),(0,i.Z)({},"".concat(c,"-checked"),{marginInlineStart:2*-n.switchPadding,marginInlineEnd:2*n.switchPadding})),a)),o))},N=function(n){var e,t=n.componentCls;return(0,i.Z)({},t,Object.assign(Object.assign(Object.assign(Object.assign({},(0,Z.Wf)(n)),(0,i.Z)({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:n.switchMinWidth,height:n.switchHeight,lineHeight:"".concat(n.switchHeight,"px"),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(t,"-disabled)"),{background:n.colorTextTertiary})),(0,Z.Qy)(n)),(e={},(0,i.Z)(e,"&".concat(t,"-checked"),(0,i.Z)({background:n.switchColor},"&:hover:not(".concat(t,"-disabled)"),{background:n.colorPrimaryHover})),(0,i.Z)(e,"&".concat(t,"-loading, &").concat(t,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),(0,i.Z)(e,"&".concat(t,"-rtl"),{direction:"rtl"}),e)))},y=(0,b.Z)("Switch",(function(n){var e=n.fontSize*n.lineHeight,t=n.controlHeight/2,i=e-4,a=t-4,o=(0,S.TS)(n,{switchMinWidth:2*i+8,switchHeight:e,switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchInnerMarginMin:i/2,switchInnerMarginMax:i+2+4,switchPadding:2,switchPinSize:i,switchBg:n.colorBgContainer,switchMinWidthSM:2*a+4,switchHeightSM:t,switchInnerMarginMinSM:a/2,switchInnerMarginMaxSM:a+2+4,switchPinSizeSM:a,switchHandleShadow:"0 2px 4px 0 ".concat(new _.C("#00230b").setAlpha(.2).toRgbString()),switchLoadingIconSize:.75*n.fontSizeIcon,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(n.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[N(o),j(o),C(o),I(o),T(o)]})),M=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(n);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(n,i[a])&&(t[i[a]]=n[i[a]])}return t},E=s.forwardRef((function(n,e){var t,r=n.prefixCls,l=n.size,d=n.disabled,u=n.loading,h=n.className,f=n.rootClassName,g=n.style,_=M(n,["prefixCls","size","disabled","loading","className","rootClassName","style"]),Z=s.useContext(x.E_),b=Z.getPrefixCls,S=Z.direction,T=Z.switch,I=s.useContext(m.Z),C=(null!==d&&void 0!==d?d:I)||u,j=b("switch",r),N=s.createElement("div",{className:"".concat(j,"-handle")},u&&s.createElement(o.Z,{className:"".concat(j,"-loading-icon")})),E=y(j),O=(0,a.Z)(E,2),P=O[0],R=O[1],D=(0,w.Z)(l),k=c()(null===T||void 0===T?void 0:T.className,(t={},(0,i.Z)(t,"".concat(j,"-small"),"small"===D),(0,i.Z)(t,"".concat(j,"-loading"),u),(0,i.Z)(t,"".concat(j,"-rtl"),"rtl"===S),t),h,f,R),A=Object.assign(Object.assign({},null===T||void 0===T?void 0:T.style),g);return P(s.createElement(v.Z,{component:"Switch"},s.createElement(p,Object.assign({},_,{prefixCls:j,className:k,style:A,disabled:C,ref:e,loadingIcon:N}))))}));E.__ANT_SWITCH=!0;var O=E}}]);
//# sourceMappingURL=8462.fd39747c.chunk.js.map