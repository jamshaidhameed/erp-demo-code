"use strict";(self.webpackChunkerp_web=self.webpackChunkerp_web||[]).push([[2376],{1254:function(e,n,t){t(2791);var o=t(9188),i=t(1367),r=t(3329);n.Z=function(e){var n=e.name,t=e.required,c=e.disabled,a=void 0!==c&&c,l=e.value,s=e.showAll,u=void 0!==s&&s,d=e.onChange,f=void 0===d?function(){}:d,v=(0,o.x)().getList,h=v.isError?[]:(null===v||void 0===v?void 0:v.data)||[];u&&h.unshift({ST_VOUCHER_TYPE_DESC:"ALL",OID:"all"});return(0,r.jsx)(i.Z,{fieldNames:{label:"ST_VOUCHER_TYPE_DESC",value:"OID"},name:n,label:"Voucher Type",messageLabel:"voucher type",options:h,placeholder:"Select voucher type",loading:v.isLoading,required:t,disabled:a,controlled:!0,value:l,onChange:function(e){return f(h.find((function(n){return n.OID===e})))}})}},1067:function(e,n,t){var o=t(1413),i=t(7808),r=t(3329);n.Z=function(e){return(0,r.jsx)(i.Z,(0,o.Z)((0,o.Z)({centered:!0},e),{},{children:e.children}))}},7349:function(e,n,t){t.d(n,{Z:function(){return u}});t(2791);var o=t(6743),i=t(6765),r=t(5421),c=t(2346),a=t(3329);function l(e){return(0,a.jsx)(c.Z,{color:"#091e42",placement:e.position?e.position:"top",title:e.text,children:e.children})}var s={primary:"custom_action_menu_primary",secondary:"custom_action_menu_secondary",danger:"custom_action_menu_danger"},u=function(e){var n=e.options;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"btn-mobile-view",children:(0,a.jsx)(o.Z,{menuList:n,selectorDirection:"vertical"})}),(0,a.jsx)("div",{className:"gap-3 btn-desktop-view menu_action_items",children:null===n||void 0===n?void 0:n.map((function(e,n){var t=e.label,o=e.buttonType,c=e.onClick,u=e.confirmAction,d=e.confirmTitle,f=e.icon,v=e.confirmMsg;return!e.hidden&&(0,a.jsx)(l,{text:t,children:(0,a.jsx)("span",{className:"".concat(s[o]||s.primary),onClick:function(){return u?(0,r.iG)(d||"Deleting",v||i.QK.DeleteConfirmMsg,c):c()},children:f})},n)}))})]})}},5145:function(e,n,t){t.d(n,{Z:function(){return Z}});var o=t(3433),i=t(1413),r=t(4925),c=t(9439),a=t(8597),l=t(2996),s=t(7846),u=t(9039),d=t(2791),f=t(35),v=t(1730),h=t(1042),m=t(3329),p=function(e){var n=e.setSearch;return(0,m.jsx)("div",{className:"custom_search_input_container",children:(0,m.jsxs)("div",{className:"custom_search_input_content",children:[(0,m.jsx)(h.ZP,{className:"custom_search_input px-5",onChange:function(e){n(e)}}),(0,m.jsx)(v.Z,{className:"custom_search_icon"})]})})},_=t(6432),S=["editing","dataIndex","title","inputType","record","index","children"],Z=function(e){var n=e.columns,t=void 0===n?[]:n,v=e.data,Z=void 0===v?[]:v,x=e.rowClassName,g=void 0===x?"":x,b=e.loading,C=void 0!==b&&b,y=e.selectAble,E=void 0!==y&&y,O=e.selectedRows,j=void 0===O?[]:O,k=e.onSelect,T=e.pagination,D=void 0===T||T,w=e.current,I=e.pageSize,A=e.total,R=e.pageSizeOptions,B=void 0===R?[10,20,50,100]:R,L=e.onChange,V=(e.isEditing,e.scrollX),H=void 0===V?768:V,K=e.scrollY,N=void 0===K?null:K,U=e.searchAble,z=void 0===U||U,P=e.searchKeys,F=void 0===P?[]:P,Y=e.cardClassName,M=e.rowKey,q=void 0===M?"OID":M,G=e.selectionType,Q=void 0===G?"checkbox":G,X=e.summary,J=void 0===X?function(){}:X,W=(0,d.useState)(""),$=(0,c.Z)(W,2),ee=$[0],ne=$[1],te=(0,o.Z)((0,_.j)(Z)).filter((0,h.cj)(ee,F)),oe={};return null!=H&&(oe.x=H),null!=N&&(oe.y=N),(0,m.jsxs)(f.Z,{className:"table_card_container ".concat(Y),children:[z&&(0,m.jsx)(p,{setSearch:ne}),(0,m.jsx)(u.Z,{columns:t,dataSource:te,rowClassName:g,loading:C,rowKey:q,onChange:L,rowSelection:E&&{selectedRows:j,onChange:k,type:Q,selectedRowKeys:j},scroll:oe,pagination:D&&{total:A,pageSize:I,current:w,showSizeChanger:!0,size:"small",pageSizeOptions:B},components:{body:{cell:function(e){var n=e.editing,t=e.dataIndex,o=e.title,c=e.inputType,u=(e.record,e.index,e.children),d=(0,r.Z)(e,S),f="number"===c?(0,m.jsx)(a.Z,{}):(0,m.jsx)(l.Z,{});return(0,m.jsx)("td",(0,i.Z)((0,i.Z)({},d),{},{children:n?(0,m.jsx)(s.Z.Item,{name:t,style:{margin:0},rules:[{required:!0,message:"Please Input ".concat(o,"!")}],children:f}):u}))}}},summary:J})]})}},1483:function(e,n,t){t.d(n,{S:function(){return i}});var o=t(3952),i=function(e){return{type:o.JF,payload:e}}},2376:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var o=t(9439),i=t(2791),r=t(5145),c=t(3782),a=t(4165),l=t(5861),s=t(1413),u=t(7846),d=t(6106),f=t(914),v=t(1254),h=t(6765),m=t(9434),p=t(9655),_=t(9188),S=t(5355),Z=t(1067),x=t(1736),g=t(5806),b=t(1483),C=t(5421),y=t(3329),E=function(e){var n=e.open,t=e.onCancel,r=e.selected,c=(0,m.I0)(),E=(0,_.m8)(),O=E.addRecord,j=E.updateRecord,k=E.invalidateList,T=u.Z.useForm(),D=(0,o.Z)(T,1)[0],w=(0,i.useState)({voucher_type:void 0,book_code:"",book_description:""}),I=(0,o.Z)(w,2),A=I[0],R=I[1],B=function(){(0,S.XI)(null===r||void 0===r?void 0:r.OID).then((function(e){var n;c((0,b.S)(!1)),n=e.data,R((function(e){return(0,s.Z)((0,s.Z)({},e),{},{voucher_type:n.GL_VOUCHER_TYPES})})),D.setFields([{name:"voucher_type",value:n.GL_VOUCHER_TYPES},{name:"book_code",value:n.ST_BOOK_CODE},{name:"book_description",value:n.ST_BOOK_DESC}])})).catch((function(e){c((0,b.S)(!1)),p.Am.error((0,C.nU)(e)),k(),t()}))},L=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(n){var t,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R((0,s.Z)((0,s.Z)({},A),{},{voucher_type:null!==(t=null===n||void 0===n?void 0:n.OID)&&void 0!==t?t:void 0})),o="",null===n||void 0===n||!n.OID){e.next=6;break}return c((0,b.S)(!0)),e.next=6,(0,S.mC)(null===n||void 0===n?void 0:n.OID).then((function(e){c((0,b.S)(!1)),o=e.data})).catch((function(e){c((0,b.S)(!1)),p.Am.error((0,C.nU)(e))}));case 6:D.setFieldValue("book_code",o);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){n&&(D.resetFields(),D.setFieldValue("voucher_type",void 0),R((function(e){return(0,s.Z)((0,s.Z)({},e),{},{voucher_type:void 0})})),r&&B())}),[n,r]),(0,y.jsx)(Z.Z,{title:r?"Edit Book":"Add Book",width:700,open:n,onCancel:t,onOk:function(){D.validateFields().then((function(e){e.voucher_type=e.voucher_type.toString(),r?function(e){c((0,b.S)(!0)),j.mutateAsync((0,s.Z)((0,s.Z)({},e),{},{book_id:r.OID.toString()})).then((function(){c((0,b.S)(!1)),t()})).catch((function(){return c((0,b.S)(!1))}))}(e):function(e){c((0,b.S)(!0)),O.mutateAsync(e).then((function(){c((0,b.S)(!1)),t()})).catch((function(){return c((0,b.S)(!1))}))}(e)})).catch((function(){return p.Am.error(h.QK.FormValidationMsg)}))},okText:"Submit",children:(0,y.jsxs)(x.Z,{name:"configBooksForm",className:"p-5",form:D,initialValues:A,children:[(0,y.jsxs)(d.Z,{align:"middle",justify:"space-between",children:[(0,y.jsx)(f.Z,{span:11,children:(0,y.jsx)(v.Z,{name:"voucher_type",required:!0,disabled:!!r,value:A.voucher_type,onChange:L})}),(0,y.jsx)(f.Z,{span:11,children:(0,y.jsx)(g.U,{label:"Book Code",required:!0,disabled:!0,type:h.Ar.text,name:"book_code",messageLabel:"book code",placeholder:"Enter book code"})})]}),(0,y.jsx)(d.Z,{align:"middle",justify:"space-between",children:(0,y.jsx)(f.Z,{span:11,children:(0,y.jsx)(g.U,{label:"Book Description",required:!0,type:h.Ar.text,name:"book_description",messageLabel:"book description",placeholder:"Enter book description"})})})]})})},O=t(1752),j=t(2622),k=t(7349),T=function(){var e=(0,m.I0)(),n=(0,_.m8)(),t=n.getList,a=n.deleteRecords,l=(0,i.useState)(!1),s=(0,o.Z)(l,2),u=s[0],d=s[1],f=(0,i.useState)(null),v=(0,o.Z)(f,2),h=v[0],p=v[1],S=(0,i.useState)([]),Z=(0,o.Z)(S,2),x=Z[0],g=Z[1],T=function(){return d((function(e){return!e}))},D=function(n){e((0,b.S)(!0)),a.mutateAsync(n).then((function(){e((0,b.S)(!1)),g([]),p(null)})).catch((function(){return e((0,b.S)(!1))}))},w=[{title:"Voucher Type Code",dataIndex:"ST_VOUCHER_TYPE_CODE",sorter:function(e,n){return(0,C.Ew)(e,n,"ST_VOUCHER_TYPE_CODE")}},{title:"Voucher Type Description",dataIndex:"ST_VOUCHER_TYPE_DESC",sorter:function(e,n){return(0,C.Ew)(e,n,"ST_VOUCHER_TYPE_DESC")}},{title:"Book Code",dataIndex:"ST_BOOK_CODE",sorter:function(e,n){return(0,C.Ew)(e,n,"ST_BOOK_CODE")}},{title:"Book Description",dataIndex:"ST_BOOK_DESC",sorter:function(e,n){return(0,C.Ew)(e,n,"ST_BOOK_DESC")}},{title:"Action",dataIndex:"action",render:function(e,n){return(0,y.jsx)(k.Z,{menu:!0,options:[{label:"Edit",buttonType:"primary",icon:(0,y.jsx)(O.Z,{}),onClick:function(){return function(e){p(e),T()}(n)}},{label:"Delete",buttonType:"danger",icon:(0,y.jsx)(j.Z,{}),confirmAction:!0,onClick:function(){return D([n.OID.toString()])}}]})}}],I=[{label:"Add",key:"add",onClick:function(){p(null),T()}},{label:"Delete",key:"delete",buttonType:"danger",confirmAction:!0,disabled:!x.length,onClick:function(){return D(x.map((function(e){return e.toString()})))}}],A=t.isError?[]:(null===t||void 0===t?void 0:t.data)||[];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(E,{open:u,onCancel:T,selected:h}),(0,y.jsx)(c.Z,{name:"Books",buttons:I}),(0,y.jsx)("div",{className:"app_page_content",children:(0,y.jsx)(r.Z,{columns:w,data:A,selectAble:!0,selectedRows:x,onSelect:function(e){return g(e)},loading:t.isLoading,searchKeys:["ST_VOUCHER_TYPE_CODE","ST_VOUCHER_TYPE_DESC","ST_BOOK_CODE","ST_BOOK_DESC"]})})]})}},2622:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(7462),i=t(2791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},c=t(4291),a=function(e,n){return i.createElement(c.Z,(0,o.Z)({},e,{ref:n,icon:r}))};var l=i.forwardRef(a)},1752:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(7462),i=t(2791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},c=t(4291),a=function(e,n){return i.createElement(c.Z,(0,o.Z)({},e,{ref:n,icon:r}))};var l=i.forwardRef(a)},914:function(e,n,t){var o=t(9752);n.Z=o.Z},6106:function(e,n,t){var o=t(7545);n.Z=o.Z}}]);
//# sourceMappingURL=2376.916c183d.chunk.js.map