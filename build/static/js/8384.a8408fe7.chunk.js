"use strict";(self.webpackChunkerp_web=self.webpackChunkerp_web||[]).push([[8384],{4693:function(e,n,t){var a=t(3329);n.Z=function(e){var n=e.title,t=e.className,r=void 0===t?"custom_page_title":t;return(0,a.jsx)("div",{className:"card_header px-5",children:(0,a.jsx)("label",{className:"page_title ".concat(r),children:n})})}},7951:function(e,n,t){var a=t(1413),r=t(7846),c=t(1306),l=t(3329);n.Z=function(e){var n=e.name,t=e.label,o=e.className,s=void 0===o?"":o,u=e.parentClassName,i=void 0===u?"":u,d=e.controlled,_=void 0!==d&&d,v=e.value,m=e.onChange,h=e.size,p=void 0===h?"large":h,g=e.disabled,f=void 0!==g&&g,b=function(e){return m(e.target.checked)};return(0,l.jsx)(r.Z.Item,{name:n,label:t,valuePropName:"checked",className:i,children:(0,l.jsx)(c.Z,(0,a.Z)({},function(){var e={className:"antd_input_switch_custom ".concat(s),size:p,disabled:f};return _&&(e.checked=v,e.onChange=b),e}()))})}},1483:function(e,n,t){t.d(n,{S:function(){return r}});var a=t(3952),r=function(e){return{type:a.JF,payload:e}}},9493:function(e,n,t){t.d(n,{MU:function(){return c},Pe:function(){return l},hh:function(){return r}});var a=t(8968),r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e=parseInt((0,a.m)(e)),isNaN(e)?n:e},c=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e=parseFloat((0,a.m)(e)),isNaN(e)?n:e},l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return c(e).toFixed(n).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}},8968:function(e,n,t){t.d(n,{m:function(){return a},u:function(){return r}});var a=function(e){return e?e.toString().replace(/,/g,"").trim():""},r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e?e.toString().padStart(n,"0"):""}},8384:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var a=t(4165),r=t(5861),c=t(1413),l=t(9439),o=t(3782),s=t(7605),u=t(43),i=t(7106),d=t(3329);function _(e){var n=e.children,t=e.loading,a=(0,d.jsx)(i.Z,{style:{color:"#635bff"},spin:!0});return(0,d.jsx)(d.Fragment,{children:t?(0,d.jsxs)("div",{className:"section_loader_main",children:[(0,d.jsx)(u.Z,{style:{fontSize:60},indicator:a}),n]}):n})}var v=t(4693);function m(e){var n=e.onCheck,t=e.onSelect,a=e.titleRender,r=e.treeData,c=void 0===r?[]:r,l=e.selectedKeys,o=void 0===l?[]:l,u=e.defaultExpandedKeys,i=void 0===u?[]:u,m=e.checkedKeys,h=void 0===m?[]:m,p=e.loading,g=void 0!==p&&p,f=e.showLine,b=void 0===f||f,x=e.showIcon,N=void 0===x||x,S=e.selectable,Z=void 0!==S&&S,j=e.checkable,A=void 0!==j&&j,C=e.multiple,L=void 0!==C&&C,O=e.className,U=void 0===O?"":O,D=e.fieldNames,E=void 0===D?{title:"title",key:"key",children:"children"}:D;return(0,d.jsxs)("div",{className:U,children:[(0,d.jsx)(v.Z,{title:"List View"}),(0,d.jsx)(_,{loading:g,children:(0,d.jsx)(s.Z,{className:"px-5 my-5",checkedKeys:h,selectable:Z,showLine:b,showIcon:N,defaultExpandedKeys:i,selectedKeys:o,treeData:c,checkable:A,onCheck:n,onSelect:t,fieldNames:E,titleRender:a,multiple:L})})]})}var h=t(35),p=t(6106),g=t(914),f=t(2791),b=t(9188),x=t(1367),N=function(e){var n=e.name,t=e.required,a=e.disabled,r=void 0!==a&&a,c=e.value,l=e.onChange,o=(0,b.qB)().getList,s=o.isError?[]:(null===o||void 0===o?void 0:o.data)||[];return(0,d.jsx)(x.Z,{fieldNames:{label:"ST_SUB_ACCOUNT_GROUP_DESC",value:"OID"},name:n,label:"Sub Account Group",messageLabel:"sub account group",options:s,placeholder:"Select sub account group",loading:o.isLoading,required:t,disabled:r,value:c,onChange:function(e){return l(s.find((function(n){return n.OID===e})))}})},S=t(6765),Z=t(7001),j=t(1736),A=t(5806),C=t(7951),L=[{label:"Debit",value:"D"},{label:"Credit",value:"C"}],O=function(e){var n,t=e.form,a=e.initialValues,r=e.selected,c=e.parent,l=e.validateSubmit,o=null==c||null!=r||4!==(null===c||void 0===c?void 0:c.currentAccountLevel);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v.Z,{title:"Main Account Add/Edit"}),(0,d.jsxs)(j.Z,{name:"chartOfAccounts",className:"px-8 pb-5 chart_of_accounts-form",form:t,initialValues:a,children:[(0,d.jsxs)(p.Z,{align:"middle",justify:"flex-start",gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,d.jsx)(g.Z,{lg:6,sm:10,xs:20,className:"gutter-row",children:(0,d.jsx)(A.U,{label:"Parent",type:S.Ar.text,messageLabel:"parent",placeholder:"",disabled:!0,controlled:!0,value:null!==(n=null===c||void 0===c?void 0:c.label)&&void 0!==n?n:""})}),(0,d.jsx)(g.Z,{lg:6,sm:10,xs:20,className:"gutter-row",children:(0,d.jsx)(A.U,{label:"Code",required:!0,type:S.Ar.text,name:"personal_code",messageLabel:"code",placeholder:"Enter code",disabled:!a.is_code_editable,inputLength:a.current_code_length,onlyNumbers:!0})}),(0,d.jsx)(g.Z,{lg:6,sm:20,xs:20,className:"gutter-row",children:(0,d.jsx)(A.U,{label:"Description",type:S.Ar.text,name:"account_desc",messageLabel:"description",placeholder:"Enter description",required:!0,allowSc:!1})}),(0,d.jsx)(g.Z,{lg:6,sm:10,xs:20,className:"gutter-row",children:(0,d.jsx)(N,{name:"sub_account_group",disabled:o})})]}),(0,d.jsxs)(p.Z,{justify:"flex-start",gutter:{xs:8,sm:16,md:24,lg:32},align:"middle",children:[(0,d.jsx)(g.Z,{lg:6,sm:10,xs:10,className:"gutter-row",children:(0,d.jsx)(x.Z,{label:"Nature",name:"st_nature",messageLabel:"nature",options:L,disabled:!0,placeholder:"Select nature"})}),(0,d.jsx)(g.Z,{lg:6,sm:10,xs:10,className:"gutter-row",children:(0,d.jsx)(C.Z,{label:"Active",name:"status",disabled:!!r})}),(0,d.jsx)(g.Z,{lg:4,sm:10,xs:10,className:"gutter-row",children:(0,d.jsx)(Z.Z,{label:r?"Update":"Save",disabled:!c,className:"w-100",onClick:l})})]})]})]})},U=t(7846),D=t(7128),E=t(3266),w=t(1483),y=t(9434),T=t(9655),I=t(5421),k=t(9493),R=t(8968),F={personal_code:"",account_desc:"",sub_account_group:void 0,st_nature:void 0,status:!1,is_code_editable:!1,current_code_length:1};function P(){var e=U.Z.useForm(),n=(0,l.Z)(e,1)[0],t=(0,y.I0)(),s=(0,b.Te)(),u=s.getList,i=s.addRecord,_=s.updateRecord,v=(0,f.useState)(null),p=(0,l.Z)(v,2),g=p[0],x=p[1],N=(0,f.useState)(null),Z=(0,l.Z)(N,2),j=Z[0],A=Z[1],C=(0,f.useState)([]),L=(0,l.Z)(C,2),P=L[0],K=L[1],M=(0,f.useState)((0,c.Z)({},F)),G=(0,l.Z)(M,2),q=G[0],B=G[1],V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e){var n=(0,c.Z)((0,c.Z)({},e),{},{label:e.code>0&&e.description?"".concat(e.code,"-").concat(e.description):""});x(g?(0,c.Z)((0,c.Z)({},g),n):n)}else x(null)},z=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(r){var l,o=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=o.length>1&&void 0!==o[1]?o[1]:"load",t((0,w.S)(!0)),e.next=4,(0,E.KP)(r).then((function(e){t((0,w.S)(!1));var a,r=(0,I.eJ)(e.data);return r?"load"!==l?r:(a=r,n.resetFields(),n.setFields([{name:"personal_code",value:a.ST_OLD_CODE},{name:"account_desc",value:a.ST_MAIN_ACCOUNT_DESC},{name:"sub_account_group",value:a.GL_SUB_ACCOUNT_GROUPS&&0!=a.GL_SUB_ACCOUNT_GROUPS?a.GL_SUB_ACCOUNT_GROUPS:void 0},{name:"st_nature",value:a.ST_NATURE},{name:"status",value:1==a.POST}]),V({id:a.PARENT_ID,code:a.parent_code,description:a.parent_desc,nature:a.ST_NATURE,currentAccountLevel:a.gl_main_accounts_level,childCode:a.child_code,child_code_length:a.child_code_length}),B((function(e){return(0,c.Z)((0,c.Z)({},e),{},{is_code_editable:a.is_code_editable,current_code_length:a.main_code_length})})),A(j?(0,c.Z)((0,c.Z)({},j),a):a),void K([a.OID])):(T.Am.error((0,I.nU)(S.QK.StandardErrorMsg)),null)})).catch((function(e){return t((0,w.S)(!1)),T.Am.error((0,I.nU)(e)),null}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),J=function(e,n){var t=null!==e&&void 0!==e?e:0;return(t=(0,k.hh)(t)+1).toString().length>n?(T.Am.error("Can't add, max code limit reached."),null):(0,R.u)(t,n)},Q=[{label:"Add",onClick:function(){var e=J(g.childCode,g.child_code_length);null!==e&&(n.resetFields(),n.setFields([{name:"personal_code",value:e},{name:"account_desc",value:F.account_desc},{name:"sub_account_group",value:F.sub_account_group},{name:"st_nature",value:j.ST_NATURE},{name:"status",value:F.status}]),B((function(e){return(0,c.Z)((0,c.Z)({},e),{},{is_code_editable:!0,current_code_length:g.child_code_length})})),V({id:j.OID,code:j.ST_MAIN_ACCOUNT_CODE,description:j.ST_MAIN_ACCOUNT_DESC,nature:j.ST_NATURE,currentAccountLevel:parseInt(g.currentAccountLevel)+1}),K([j.OID]),A(null))},disabled:null===g||null===j||1==j.IS_LEAF_NODE}];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Z,{name:"Chart Of Accounts",buttons:Q}),(0,d.jsx)("div",{className:"app_page_content",children:(0,d.jsxs)(h.Z,{children:[(0,d.jsx)(O,{form:n,initialValues:q,selected:j,parent:g,validateSubmit:function(){n.validateFields().then((function(e){e.personal_code=(0,R.u)(e.personal_code,q.current_code_length),e.account_code=1===g.currentAccountLevel?e.personal_code:"".concat(g.code).concat(e.personal_code),e.sub_account_group=e.sub_account_group?parseInt(e.sub_account_group):0,e.parent_id=g.id,e.account_level=g.currentAccountLevel,e.leaf_node=4===g.currentAccountLevel?"1":"0",e.status=!0===e.status||1==e.status?"1":"0",t((0,w.S)(!0)),j?(e.main_account_id=j.OID.toString(),function(e){_.mutateAsync(e).then((function(){t((0,w.S)(!1)),z(j.OID)})).catch((function(){return t((0,w.S)(!1))}))}(e)):function(e){i.mutateAsync(e).then((0,r.Z)((0,a.Z)().mark((function e(){var r,l,o,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t((0,w.S)(!1)),e.next=3,z(g.id,"get");case 3:if(l=e.sent,o=null!==(r=null===l||void 0===l?void 0:l.child_code)&&void 0!==r?r:"",s=o?J(o,g.child_code_length):null,n.setFields([{name:"personal_code",value:null!==s&&void 0!==s?s:""},{name:"account_desc",value:F.account_desc},{name:"sub_account_group",value:F.sub_account_group},{name:"status",value:F.status},{name:"st_nature",value:s?g.nature:F.st_nature}]),null===s){e.next=9;break}return e.abrupt("return");case 9:V(null),B((function(e){return(0,c.Z)((0,c.Z)({},e),F)})),A(null),K([]);case 13:case"end":return e.stop()}}),e)})))).catch((function(){return t((0,w.S)(!1))}))}(e)})).catch((function(){return T.Am.error(S.QK.FormValidationMsg)}))}}),(0,d.jsx)("div",{className:"chart_of_account_divider",children:(0,d.jsx)(D.Z,{})}),(0,d.jsx)(m,{selectable:!0,loading:u.isLoading,treeData:u.isError?[]:(null===u||void 0===u?void 0:u.data)||[],onSelect:function(e,n){return z(n.node.ID)},selectedKeys:P,titleRender:function(e){var n;return"".concat(e.PERSONAL_CODE,"-").concat(null===(n=e.NAME)||void 0===n?void 0:n.toString().toLowerCase())},fieldNames:{title:"NAME",key:"ID",children:"CHILDREN"}})]})})]})}}}]);
//# sourceMappingURL=8384.a8408fe7.chunk.js.map