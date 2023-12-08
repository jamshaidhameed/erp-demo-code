"use strict";(self.webpackChunkerp_web=self.webpackChunkerp_web||[]).push([[3581],{7349:function(e,n,t){t.d(n,{Z:function(){return u}});t(2791);var i=t(6743),c=t(6765),o=t(5421),a=t(2346),r=t(3329);function s(e){return(0,r.jsx)(a.Z,{color:"#091e42",placement:e.position?e.position:"top",title:e.text,children:e.children})}var l={primary:"custom_action_menu_primary",secondary:"custom_action_menu_secondary",danger:"custom_action_menu_danger"},u=function(e){var n=e.options;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"btn-mobile-view",children:(0,r.jsx)(i.Z,{menuList:n,selectorDirection:"vertical"})}),(0,r.jsx)("div",{className:"gap-3 btn-desktop-view menu_action_items",children:null===n||void 0===n?void 0:n.map((function(e,n){var t=e.label,i=e.buttonType,a=e.onClick,u=e.confirmAction,d=e.confirmTitle,m=e.icon,v=e.confirmMsg;return!e.hidden&&(0,r.jsx)(s,{text:t,children:(0,r.jsx)("span",{className:"".concat(l[i]||l.primary),onClick:function(){return u?(0,o.iG)(d||"Deleting",v||c.QK.DeleteConfirmMsg,a):a()},children:m})},n)}))})]})}},4693:function(e,n,t){var i=t(3329);n.Z=function(e){var n=e.title,t=e.className,c=void 0===t?"custom_page_title":t;return(0,i.jsx)("div",{className:"card_header px-5",children:(0,i.jsx)("label",{className:"page_title ".concat(c),children:n})})}},5145:function(e,n,t){t.d(n,{Z:function(){return S}});var i=t(3433),c=t(1413),o=t(4925),a=t(9439),r=t(8597),s=t(2996),l=t(7846),u=t(9039),d=t(2791),m=t(35),v=t(1730),p=t(1042),_=t(3329),f=function(e){var n=e.setSearch;return(0,_.jsx)("div",{className:"custom_search_input_container",children:(0,_.jsxs)("div",{className:"custom_search_input_content",children:[(0,_.jsx)(p.ZP,{className:"custom_search_input px-5",onChange:function(e){n(e)}}),(0,_.jsx)(v.Z,{className:"custom_search_icon"})]})})},h=t(6432),x=["editing","dataIndex","title","inputType","record","index","children"],S=function(e){var n=e.columns,t=void 0===n?[]:n,v=e.data,S=void 0===v?[]:v,g=e.rowClassName,C=void 0===g?"":g,b=e.loading,j=void 0!==b&&b,Z=e.selectAble,N=void 0!==Z&&Z,A=e.selectedRows,y=void 0===A?[]:A,O=e.onSelect,T=e.pagination,U=void 0===T||T,D=e.current,w=e.pageSize,I=e.total,E=e.pageSizeOptions,k=void 0===E?[10,20,50,100]:E,P=e.onChange,B=(e.isEditing,e.scrollX),F=void 0===B?768:B,K=e.scrollY,R=void 0===K?null:K,z=e.searchAble,L=void 0===z||z,G=e.searchKeys,q=void 0===G?[]:G,M=e.cardClassName,V=e.rowKey,Q=void 0===V?"OID":V,Y=e.selectionType,$=void 0===Y?"checkbox":Y,J=e.summary,X=void 0===J?function(){}:J,H=(0,d.useState)(""),W=(0,a.Z)(H,2),ee=W[0],ne=W[1],te=(0,i.Z)((0,h.j)(S)).filter((0,p.cj)(ee,q)),ie={};return null!=F&&(ie.x=F),null!=R&&(ie.y=R),(0,_.jsxs)(m.Z,{className:"table_card_container ".concat(M),children:[L&&(0,_.jsx)(f,{setSearch:ne}),(0,_.jsx)(u.Z,{columns:t,dataSource:te,rowClassName:C,loading:j,rowKey:Q,onChange:P,rowSelection:N&&{selectedRows:y,onChange:O,type:$,selectedRowKeys:y},scroll:ie,pagination:U&&{total:I,pageSize:w,current:D,showSizeChanger:!0,size:"small",pageSizeOptions:k},components:{body:{cell:function(e){var n=e.editing,t=e.dataIndex,i=e.title,a=e.inputType,u=(e.record,e.index,e.children),d=(0,o.Z)(e,x),m="number"===a?(0,_.jsx)(r.Z,{}):(0,_.jsx)(s.Z,{});return(0,_.jsx)("td",(0,c.Z)((0,c.Z)({},d),{},{children:n?(0,_.jsx)(l.Z.Item,{name:t,style:{margin:0},rules:[{required:!0,message:"Please Input ".concat(i,"!")}],children:m}):u}))}}},summary:X})]})}},2262:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(1413),c=(t(2791),t(7846)),o=t(9862),a=t(3329);function r(e){var n=e.name,t=e.label,r=e.className,s=void 0===r?"":r,l=e.controlled,u=void 0!==l&&l,d=e.value,m=e.onChange,v=e.disabled,p=function(e){return m(e.target.checked)};return(0,a.jsx)(c.Z.Item,{name:n,className:"custom_checkbox",valuePropName:"checked",children:(0,a.jsx)(o.Z,(0,i.Z)((0,i.Z)({},function(){var e={className:"antd-input-checkbox-custom ".concat(s),disabled:v};return u&&(e.checked=d,e.onChange=p),e}()),{},{children:t}))})}},7951:function(e,n,t){var i=t(1413),c=t(7846),o=t(1306),a=t(3329);n.Z=function(e){var n=e.name,t=e.label,r=e.className,s=void 0===r?"":r,l=e.parentClassName,u=void 0===l?"":l,d=e.controlled,m=void 0!==d&&d,v=e.value,p=e.onChange,_=e.size,f=void 0===_?"large":_,h=e.disabled,x=void 0!==h&&h,S=function(e){return p(e.target.checked)};return(0,a.jsx)(c.Z.Item,{name:n,label:t,valuePropName:"checked",className:u,children:(0,a.jsx)(o.Z,(0,i.Z)({},function(){var e={className:"antd_input_switch_custom ".concat(s),size:f,disabled:x};return m&&(e.checked=v,e.onChange=S),e}()))})}},1483:function(e,n,t){t.d(n,{S:function(){return c}});var i=t(3952),c=function(e){return{type:i.JF,payload:e}}},3581:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var i=t(9439),c=t(2791),o=t(7689),a=t(9655),r=t(354),s=t(3782),l=t(5421),u=t(35),d=t(7846),m=t(6106),v=t(914),p=t(6765),_=t(7591),f=t(9549),h=t(1752),x=t(2622),S=t(9434),g=t(9188),C=t(7349),b=t(5145),j=t(2262),Z=t(1483),N=t(3329),A=function(e){var n=e.group,t=e.getSubAccountDetails,i=(0,g.lN)({loadList:!1}).deleteRecord,c=(0,g.lN)({account_group_id:n,listKey:n}).getList,o=(0,S.I0)(),a=[{title:"Sub Account Code",dataIndex:"ST_SUB_ACCOUNT_CODE",sorter:function(e,n){return(0,l.$P)(e,n,"ST_SUB_ACCOUNT_CODE")}},{title:"Sub Account Desc",dataIndex:"ST_SUB_ACCOUNT_DESC",sorter:function(e,n){return(0,l.Ew)(e,n,"ST_SUB_ACCOUNT_DESC")}},{title:"Active",dataIndex:"POST",sorter:function(e,n){return(0,l.$P)(e,n,"POST")},render:function(e,n){return(0,N.jsx)(j.Z,{value:n.POST,controlled:!0,disabled:!0})}},{title:"Action",dataIndex:"action",render:function(e,n){return(0,N.jsx)(C.Z,{menu:!1,options:[{label:"Edit",buttonType:"primary",icon:(0,N.jsx)(h.Z,{}),onClick:function(){return function(e){t(e.OID)}(n)}},{label:"Delete",buttonType:"danger",icon:(0,N.jsx)(x.Z,{}),confirmAction:!0,onClick:function(){return function(e){i.mutateAsync(e.OID).then((function(){o((0,Z.S)(!1))})).catch((function(){return o((0,Z.S)(!1))}))}(n)}}]})}}],r=c.isError?[]:(null===c||void 0===c?void 0:c.data)||[];return(0,N.jsx)("div",{children:(0,N.jsx)(b.Z,{columns:a,data:r,selectAble:!1,loading:c.isLoading,cardClassName:"custom_table_card_user_accounts",searchKeys:["ST_SUB_ACCOUNT_DESC","ST_SUB_ACCOUNT_CODE"]})})},y=t(1367),O=t(1736),T=t(4693),U=t(5806),D=t(7951),w=t(2677),I=t(7001);function E(){var e,n,t,h=(0,o.UO)().id,x="new"!==h,C=x?parseInt(null===h||void 0===h||null===(e=h.split("_"))||void 0===e?void 0:e[0]):null,b=(0,c.useState)(void 0),j=(0,i.Z)(b,2),E=j[0],k=j[1],P=(0,c.useState)(null),B=(0,i.Z)(P,2),F=B[0],K=B[1],R=(0,_.Z)().getList,z=(0,g.lN)({loadList:!1}),L=z.updateRecord,G=z.addRecord,q=(0,S.I0)(),M=(0,o.s0)(),V=d.Z.useForm(),Q=(0,i.Z)(V,1)[0],Y=(0,c.useState)(!(!h||"new"==h)),$=(0,i.Z)(Y,2),J=$[0],X=$[1],H=x?parseInt(null===h||void 0===h||null===(n=h.split("_"))||void 0===n?void 0:n[1]):null;(0,c.useEffect)((function(){k(H),K(C)}),[h]);var W=function(e){var n,t,i=null===(n=R.data)||void 0===n?void 0:n.find((function(n){return n.OID==e.group}));if(i&&(null===i||void 0===i||null===(t=i.ST_SUB_ACCOUNT_GROUP_DESC)||void 0===t?void 0:t.includes("Employe"))){var c={code:e.code,description:e.description,status:e.status,parent_sub_account_group_code:e.group};q((0,Z.S)(!0)),G.mutateAsync(c).then((function(){q((0,Z.S)(!1)),Q.resetFields()})).catch((function(){return q((0,Z.S)(!1))}))}else a.Am.error("You can add to Employee group only")},ee=function(e){var n={description:e.description,status:e.status,account_id:F};q((0,Z.S)(!0)),L.mutateAsync(n).then((function(){q((0,Z.S)(!1)),Q.resetFields(),M(w.wK)})).catch((function(){return q((0,Z.S)(!1))}))},ne=function(e,n){var t=e.POST,i=e.ST_SUB_ACCOUNT_CODE,c=e.ST_SUB_ACCOUNT_DESC;Q.setFields([{name:"code",value:i},{name:"status",value:t},{name:"description",value:c},{name:"group",value:n}])},te=function(e){K(e),(0,f.kz)(e).then((function(e){X(!1),function(e){if(x){var n,t=null===R||void 0===R||null===(n=R.data)||void 0===n?void 0:n.find((function(e){return e.OID===H}));ne(e,null===t||void 0===t?void 0:t.OID)}else ne(e,null===e||void 0===e?void 0:e.GL_SUB_ACCOUNT_GROUPS)}(e.data)})).catch((function(e){X(!1),a.Am.error((0,l.nU)(e)),M(w.wK)}))};(0,c.useEffect)((function(){x&&null!==R&&void 0!==R&&R.data&&te(C)}),[R.data]);var ie=null===R||void 0===R||null===(t=R.data)||void 0===t?void 0:t.map((function(e){return{label:"".concat(e.ST_SUB_ACCOUNT_GROUP_CODE,"-").concat(e.ST_SUB_ACCOUNT_GROUP_DESC),value:e.OID}}));return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(s.Z,{name:"".concat(h&&"new"!==h?"Edit":"Add"," Sub Account")}),(0,N.jsx)("div",{className:"app_page_content",children:J?(0,N.jsx)(r.Z,{}):(0,N.jsxs)(u.Z,{children:[(0,N.jsx)(T.Z,{title:"Sub Account Details"}),(0,N.jsxs)(O.Z,{name:"subAccountsForm",className:"px-8 pb-5 sub_accounts-form",form:Q,initialValues:{code:"",description:"",status:!0},children:[(0,N.jsxs)(m.Z,{align:"middle",justify:"flex-start",gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,N.jsx)(v.Z,{lg:6,children:(0,N.jsx)(y.Z,{label:"Sub Account Groups",name:"group",placeholder:"Select group",messageLabel:"group",controlled:!0,required:!0,value:E,onChange:function(e){k(parseInt(e)),(0,f.If)().then((function(e){var n;Q.setFieldValue("code",null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.account_code)})).catch((function(e){return a.Am.error((0,l.nU)(e))})),K(null),Q.setFields([{name:"code",value:""},{name:"status",value:!0},{name:"description",value:""}])},options:ie})}),(0,N.jsx)(v.Z,{lg:6,children:(0,N.jsx)(U.U,{label:"\tSub Account Code",disabled:!0,type:p.Ar.text,name:"code",placeholder:"Enter code"})}),(0,N.jsx)(v.Z,{lg:6,children:(0,N.jsx)(U.U,{label:"\tSub Account Description",type:p.Ar.text,name:"description",messageLabel:"description",required:!0,placeholder:"Enter description"})}),(0,N.jsx)(v.Z,{lg:6,children:(0,N.jsx)(D.Z,{label:"Active",name:"status"})})]}),(0,N.jsx)(m.Z,{className:"mt-3",children:(0,N.jsx)(v.Z,{lg:3,children:(0,N.jsx)(I.Z,{label:"Submit",className:"w-100",onClick:function(){Q.validateFields().then((function(e){(function(e){e.status=e.status?1:0,F?ee(e):W(e)})(e)})).catch((function(){return a.Am.error(p.QK.FormValidationMsg)}))}})})})]}),(0,N.jsx)(A,{group:E,getSubAccountDetails:te})]})})]})}}}]);
//# sourceMappingURL=3581.b186cfbd.chunk.js.map