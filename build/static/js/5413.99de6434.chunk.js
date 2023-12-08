"use strict";(self.webpackChunkerp_web=self.webpackChunkerp_web||[]).push([[5413],{5531:function(e,n,t){var c=t(9188),o=t(8749),a=t(3329);n.Z=function(e){var n,t,i,u=e.label,r=void 0===u?"Main Account":u,l=e.messageLabel,s=void 0===l?"Main Account":l,d=e.placeholder,v=void 0===d?"Search Main Account":d,m=e.controlled,p=void 0===m||m,Z=e.required,h=void 0!==Z&&Z,f=e.value,A=e.onChange,g=(0,c.$l)().getList,x=g.isError?[]:(null===g||void 0===g?void 0:g.data)||[];return(0,a.jsx)(o.Z,{label:r,messageLabel:s,placeholder:v,options:x,controlled:p,value:null!==(n=null===f||void 0===f?void 0:f.value)&&void 0!==n?n:"",selectedOption:null!==(t=null===f||void 0===f?void 0:f.option)&&void 0!==t?t:null,defaultValue:null!==(i=null===f||void 0===f?void 0:f.defaultValue)&&void 0!==i?i:"",onChange:A,loading:g.isLoading,required:h})}},1067:function(e,n,t){var c=t(1413),o=t(7808),a=t(3329);n.Z=function(e){return(0,a.jsx)(o.Z,(0,c.Z)((0,c.Z)({centered:!0},e),{},{children:e.children}))}},7349:function(e,n,t){t.d(n,{Z:function(){return s}});t(2791);var c=t(6743),o=t(6765),a=t(5421),i=t(2346),u=t(3329);function r(e){return(0,u.jsx)(i.Z,{color:"#091e42",placement:e.position?e.position:"top",title:e.text,children:e.children})}var l={primary:"custom_action_menu_primary",secondary:"custom_action_menu_secondary",danger:"custom_action_menu_danger"},s=function(e){var n=e.options;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"btn-mobile-view",children:(0,u.jsx)(c.Z,{menuList:n,selectorDirection:"vertical"})}),(0,u.jsx)("div",{className:"gap-3 btn-desktop-view menu_action_items",children:null===n||void 0===n?void 0:n.map((function(e,n){var t=e.label,c=e.buttonType,i=e.onClick,s=e.confirmAction,d=e.confirmTitle,v=e.icon,m=e.confirmMsg;return!e.hidden&&(0,u.jsx)(r,{text:t,children:(0,u.jsx)("span",{className:"".concat(l[c]||l.primary),onClick:function(){return s?(0,a.iG)(d||"Deleting",m||o.QK.DeleteConfirmMsg,i):i()},children:v})},n)}))})]})}},5145:function(e,n,t){t.d(n,{Z:function(){return g}});var c=t(3433),o=t(1413),a=t(4925),i=t(9439),u=t(8597),r=t(2996),l=t(7846),s=t(9039),d=t(2791),v=t(35),m=t(1730),p=t(1042),Z=t(3329),h=function(e){var n=e.setSearch;return(0,Z.jsx)("div",{className:"custom_search_input_container",children:(0,Z.jsxs)("div",{className:"custom_search_input_content",children:[(0,Z.jsx)(p.ZP,{className:"custom_search_input px-5",onChange:function(e){n(e)}}),(0,Z.jsx)(m.Z,{className:"custom_search_icon"})]})})},f=t(6432),A=["editing","dataIndex","title","inputType","record","index","children"],g=function(e){var n=e.columns,t=void 0===n?[]:n,m=e.data,g=void 0===m?[]:m,x=e.rowClassName,_=void 0===x?"":x,I=e.loading,S=void 0!==I&&I,j=e.selectAble,y=void 0!==j&&j,b=e.selectedRows,C=void 0===b?[]:b,D=e.onSelect,w=e.pagination,T=void 0===w||w,V=e.current,N=e.pageSize,F=e.total,P=e.pageSizeOptions,G=void 0===P?[10,20,50,100]:P,$=e.onChange,M=(e.isEditing,e.scrollX),W=void 0===M?768:M,k=e.scrollY,E=void 0===k?null:k,R=e.searchAble,H=void 0===R||R,L=e.searchKeys,z=void 0===L?[]:L,K=e.cardClassName,O=e.rowKey,q=void 0===O?"OID":O,B=e.selectionType,Q=void 0===B?"checkbox":B,X=e.summary,J=void 0===X?function(){}:X,U=(0,d.useState)(""),Y=(0,i.Z)(U,2),ee=Y[0],ne=Y[1],te=(0,c.Z)((0,f.j)(g)).filter((0,p.cj)(ee,z)),ce={};return null!=W&&(ce.x=W),null!=E&&(ce.y=E),(0,Z.jsxs)(v.Z,{className:"table_card_container ".concat(K),children:[H&&(0,Z.jsx)(h,{setSearch:ne}),(0,Z.jsx)(s.Z,{columns:t,dataSource:te,rowClassName:_,loading:S,rowKey:q,onChange:$,rowSelection:y&&{selectedRows:C,onChange:D,type:Q,selectedRowKeys:C},scroll:ce,pagination:T&&{total:F,pageSize:N,current:V,showSizeChanger:!0,size:"small",pageSizeOptions:G},components:{body:{cell:function(e){var n=e.editing,t=e.dataIndex,c=e.title,i=e.inputType,s=(e.record,e.index,e.children),d=(0,a.Z)(e,A),v="number"===i?(0,Z.jsx)(u.Z,{}):(0,Z.jsx)(r.Z,{});return(0,Z.jsx)("td",(0,o.Z)((0,o.Z)({},d),{},{children:n?(0,Z.jsx)(l.Z.Item,{name:t,style:{margin:0},rules:[{required:!0,message:"Please Input ".concat(c,"!")}],children:v}):s}))}}},summary:J})]})}},8749:function(e,n,t){var c=t(1413),o=t(7106),a=t(43),i=t(7846),u=t(5),r=t(763),l=t(2791),s=t(6432),d=t(3329);n.Z=function(e){var n=e.label,t=e.name,v=e.messageLabel,m=e.placeholder,p=void 0===m?"Search":m,Z=e.onChange,h=e.onSearch,f=e.value,A=e.options,g=void 0===A?[]:A,x=e.required,_=void 0!==x&&x,I=e.controlled,S=void 0!==I&&I,j=e.autoFocus,y=void 0!==j&&j,b=e.allowClear,C=void 0!==b&&b,D=e.loading,w=void 0!==D&&D,T=e.className,V=void 0===T?"":T,N=e.disabled,F=void 0!==N&&N,P=e.parentClassName,G=void 0===P?"":P,$=e.style,M=void 0===$?{}:$,W=e.async,k=void 0!==W&&W,E=e.selectedOption,R=void 0===E?null:E,H=e.defaultValue,L=void 0===H?"":H,z=(0,l.useMemo)((function(){return(0,r.debounce)((function(e){k&&h(e)}),500)}),[]),K=(0,l.useMemo)((function(){return w?(0,d.jsx)(a.Z,{style:{fontSize:20},indicator:(0,d.jsx)(o.Z,{style:{color:"#635bff"},spin:!0})}):""}),[w]),O=(0,l.useMemo)((function(){return(0,s.X)(g,"value")}),[g]),q=function(e,n){var t;return(null!==(t=n.label)&&void 0!==t?t:"").toLowerCase().includes(e.toLowerCase())},B=function(e,n){var t;return Z({value:null!==(t=null===n||void 0===n?void 0:n.label)&&void 0!==t?t:e,option:n,defaultValue:""})},Q=function(){null==R&&f&&B("",null)};return(0,l.useEffect)((function(){L&&O[L]&&Z({value:O[L].label,option:O[L],defaultValue:""})}),[L,O]),(0,d.jsx)(i.Z.Item,{name:t,style:M,className:G,validateTrigger:"onBlur",label:n,rules:[{required:_,message:"Please select ".concat(v,".")}],children:(0,d.jsx)(u.Z,(0,c.Z)({},function(){var e={popupClassName:"antd-selectInput-custom ".concat(V),placeholder:p,autoFocus:y,allowClear:C,disabled:F,options:g,notFoundContent:K,filterOption:!k&&q};return k&&(e.onSearch=z),S&&(e.value=f,e.onChange=function(e){return B(e,null)},e.onSelect=B,e.onBlur=Q),e}()))})}},7951:function(e,n,t){var c=t(1413),o=t(7846),a=t(1306),i=t(3329);n.Z=function(e){var n=e.name,t=e.label,u=e.className,r=void 0===u?"":u,l=e.parentClassName,s=void 0===l?"":l,d=e.controlled,v=void 0!==d&&d,m=e.value,p=e.onChange,Z=e.size,h=void 0===Z?"large":Z,f=e.disabled,A=void 0!==f&&f,g=function(e){return p(e.target.checked)};return(0,i.jsx)(o.Z.Item,{name:n,label:t,valuePropName:"checked",className:s,children:(0,i.jsx)(a.Z,(0,c.Z)({},function(){var e={className:"antd_input_switch_custom ".concat(r),size:h,disabled:A};return v&&(e.checked=m,e.onChange=g),e}()))})}},1483:function(e,n,t){t.d(n,{S:function(){return o}});var c=t(3952),o=function(e){return{type:c.JF,payload:e}}},5413:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var c=t(9439),o=t(2791),a=t(3782),i=t(1752),u=t(5145),r=t(7349),l=t(5421),s=t(1413),d=t(7846),v=t(6106),m=t(914),p=t(6765),Z=t(9434),h=t(9655),f=t(9188),A=t(5531),g=t(4029),x=t(1067),_=t(1736),I=t(1483),S=t(7951),j=t(3329),y=function(e){var n=e.open,t=e.onCancel,a=e.selected,i=(0,Z.I0)(),u=d.Z.useForm(),r=(0,c.Z)(u,1)[0],y=(0,f.K1)(!1),b=y.submitRecord,C=y.invalidateList,D=(0,o.useState)((0,s.Z)({},p.$I)),w=(0,c.Z)(D,2),T=w[0],V=w[1],N=(0,o.useState)((0,s.Z)({},p.$I)),F=(0,c.Z)(N,2),P=F[0],G=F[1],$=(0,o.useState)((0,s.Z)({},p.$I)),M=(0,c.Z)($,2),W=M[0],k=M[1],E=(0,o.useState)((0,s.Z)({},p.$I)),R=(0,c.Z)(E,2),H=R[0],L=R[1],z=(0,o.useState)((0,s.Z)({},p.$I)),K=(0,c.Z)(z,2),O=K[0],q=K[1],B=(0,o.useState)((0,s.Z)({},p.$I)),Q=(0,c.Z)(B,2),X=Q[0],J=Q[1],U=(0,o.useState)((0,s.Z)({},p.$I)),Y=(0,c.Z)(U,2),ee=Y[0],ne=Y[1],te=(0,o.useState)((0,s.Z)({},p.$I)),ce=(0,c.Z)(te,2),oe=ce[0],ae=ce[1],ie=(0,o.useState)((0,s.Z)({},p.$I)),ue=(0,c.Z)(ie,2),re=ue[0],le=ue[1],se=function(){(0,g.Ih)(null===a||void 0===a?void 0:a.OID).then((function(e){var n;i((0,I.S)(!1)),n=e.data,r.setFields([{name:"freight_account",value:n.FreightAccountDesc},{name:"misc_account",value:n.MisctAccountDesc},{name:"security_account",value:n.SecurityAccountDesc},{name:"inventory_variance",value:n.InvVarianceAccountDesc},{name:"gst_input",value:n.InvVarianceAccountDesc},{name:"wht_input",value:n.GstInputAccountDesc},{name:"wht_gst_account",value:n.WhtInputAccountDesc},{name:"pra_account",value:n.PRAAccountDesc},{name:"commission_account",value:n.CommissionAccountDesc},{name:"active",value:n.autoSRN}]),V((0,s.Z)((0,s.Z)({},T),{},{defaultValue:n.FreightAccountId})),G((0,s.Z)((0,s.Z)({},P),{},{defaultValue:n.MisctAccountId})),k((0,s.Z)((0,s.Z)({},W),{},{defaultValue:n.SecurityAccountId})),L((0,s.Z)((0,s.Z)({},H),{},{defaultValue:n.InvVarianceAccountId})),q((0,s.Z)((0,s.Z)({},O),{},{defaultValue:n.GstInputAccountId})),J((0,s.Z)((0,s.Z)({},X),{},{defaultValue:n.WhtInputAccountId})),ne((0,s.Z)((0,s.Z)({},ee),{},{defaultValue:n.WHTGSTAccountId})),ae((0,s.Z)((0,s.Z)({},oe),{},{defaultValue:n.PRAAccountId})),le((0,s.Z)((0,s.Z)({},re),{},{defaultValue:n.CommissionAccountId}))})).catch((function(e){i((0,I.S)(!1)),h.Am.error((0,l.nU)(e)),C(),t()}))};return(0,o.useEffect)((function(){n&&(r.resetFields(),V((function(e){return(0,s.Z)((0,s.Z)({},e),p.$I)})),G((function(e){return(0,s.Z)((0,s.Z)({},e),p.$I)})),k((function(e){return(0,s.Z)((0,s.Z)({},e),p.$I)})),L((function(e){return(0,s.Z)((0,s.Z)({},e),p.$I)})),q((function(e){return(0,s.Z)((0,s.Z)({},e),p.$I)})),J((function(e){return(0,s.Z)((0,s.Z)({},e),p.$I)})),ne((function(e){return(0,s.Z)((0,s.Z)({},e),p.$I)})),ae((function(e){return(0,s.Z)((0,s.Z)({},e),p.$I)})),le((function(e){return(0,s.Z)((0,s.Z)({},e),p.$I)})),a&&se())}),[n,a]),(0,j.jsx)(x.Z,{title:a?"Edit General Setting":"Add General Setting",width:700,okText:"Submit",open:n,onCancel:t,onOk:function(){r.validateFields().then((function(e){return null===T.option?h.Am.error("Please select Freight Account"):null===P.option?h.Am.error("Please select Misc. Account"):null===W.option?h.Am.error("Please select Security Account"):null===H.option?h.Am.error("Please select Inventory Variance A/C"):null===O.option?h.Am.error("Please select GST Input"):null===X.option?h.Am.error("Please select WHT Input"):null===ee.option?h.Am.error("Please select WHT-GST Account"):null===oe.option?h.Am.error("Please select PRA Account"):null===re.option?h.Am.error("Please select Commission Account"):(e.freight_account_id=T.option.value,e.misct_account_id=P.option.value,e.security_account_id=W.option.value,e.inv_variance_account_id=H.option.value,e.gst_input_account_id=O.option.value,e.wht_input_account_id=X.option.value,e.whtgst_account_id=ee.option.value,e.pra_account_id=oe.option.value,e.commission_account_id=re.option.value,e.auto_srn=!0===e.active||1==e.active?"1":"0",a&&(e.general_setting_id=a.OID),delete e.active,void function(e){i((0,I.S)(!0)),b.mutateAsync(e).then((function(){i((0,I.S)(!1)),t()})).catch((function(){return i((0,I.S)(!1))}))}(e))})).catch((function(){return h.Am.error(p.QK.FormValidationMsg)}))},children:(0,j.jsxs)(_.Z,{name:"voucherTypeForm",className:"p-5",form:r,initialValues:{freight_account:"",misc_account:"",security_account:"",inventory_variance:"",gst_input:"",wht_input:"",wht_gst_account:"",pra_account:"",commission_account:"",active:""},onFieldsChange:function(e,n){if("from_date"===e[0].name[0]){var t=e[0].value,c=r.getFieldValue("to_date");t&&c&&t>c&&r.setFieldValue("to_date",t)}},children:[(0,j.jsxs)(v.Z,{align:"middle",justify:"space-between",children:[(0,j.jsx)(m.Z,{span:11,children:(0,j.jsx)(A.Z,{placeholder:"Search Freight Account",value:T,onChange:function(e){V((function(n){return(0,s.Z)((0,s.Z)({},n),e)}))},label:"Freight Account"})}),(0,j.jsx)(m.Z,{span:11,children:(0,j.jsx)(A.Z,{placeholder:"Search Misc. Account",value:P,onChange:function(e){G((function(n){return(0,s.Z)((0,s.Z)({},n),e)}))},label:"Misc. Account"})})]}),(0,j.jsxs)(v.Z,{align:"middle",justify:"space-between",children:[(0,j.jsx)(m.Z,{span:11,children:(0,j.jsx)(A.Z,{placeholder:"Search Security Account",value:W,onChange:function(e){k((function(n){return(0,s.Z)((0,s.Z)({},n),e)}))},label:"Security Account"})}),(0,j.jsx)(m.Z,{span:11,children:(0,j.jsx)(A.Z,{placeholder:"Search Inventory Variance A/C",value:H,onChange:function(e){L((function(n){return(0,s.Z)((0,s.Z)({},n),e)}))},label:"Inventory Variance A/C"})})]}),(0,j.jsxs)(v.Z,{align:"middle",justify:"space-between",children:[(0,j.jsx)(m.Z,{span:11,children:(0,j.jsx)(A.Z,{placeholder:"Search GST Input",value:O,onChange:function(e){q((function(n){return(0,s.Z)((0,s.Z)({},n),e)}))},label:"GST Input"})}),(0,j.jsx)(m.Z,{span:11,children:(0,j.jsx)(A.Z,{placeholder:"Search WHT Input",value:X,onChange:function(e){J((function(n){return(0,s.Z)((0,s.Z)({},n),e)}))},label:"WHT Input"})})]}),(0,j.jsxs)(v.Z,{align:"middle",justify:"space-between",children:[(0,j.jsx)(m.Z,{span:11,children:(0,j.jsx)(A.Z,{placeholder:"Search WHT-GST Account",value:ee,onChange:function(e){ne((function(n){return(0,s.Z)((0,s.Z)({},n),e)}))},label:"WHT-GST Account"})}),(0,j.jsx)(m.Z,{span:11,children:(0,j.jsx)(A.Z,{placeholder:"Search PRA Account",value:oe,onChange:function(e){ae((function(n){return(0,s.Z)((0,s.Z)({},n),e)}))},label:"PRA Account"})})]}),(0,j.jsxs)(v.Z,{align:"middle",justify:"space-between",children:[(0,j.jsx)(m.Z,{span:11,children:(0,j.jsx)(A.Z,{placeholder:"Search Commission Account",value:re,onChange:function(e){le((function(n){return(0,s.Z)((0,s.Z)({},n),e)}))},label:"Commission Account"})}),(0,j.jsx)(m.Z,{span:11,children:(0,j.jsx)(S.Z,{label:"Active",name:"active"})})]})]})})};function b(){var e=(0,o.useState)(!1),n=(0,c.Z)(e,2),t=n[0],s=n[1],d=(0,o.useState)(null),v=(0,c.Z)(d,2),m=v[0],p=v[1],Z=(0,f.K1)().getList,h=function(){s((function(e){return!e}))},A=Z.isError?[]:(null===Z||void 0===Z?void 0:Z.data)||[],g=[{title:"Freight Account",dataIndex:"FreightAccountDesc",sorter:function(e,n){return(0,l.Ew)(e,n,"FreightAccountDesc")}},{title:"Misc. Account",dataIndex:"MisctAccountDesc",sorter:function(e,n){return(0,l.Ew)(e,n,"MisctAccountDesc")}},{title:"Security Account",dataIndex:"SecurityAccountDesc",sorter:function(e,n){return(0,l.Ew)(e,n,"SecurityAccountDesc")}},{title:"Inventory variant A/C",dataIndex:"InvVarianceAccountDesc",sorter:function(e,n){return(0,l.Ew)(e,n,"InvVarianceAccountDesc")}},{title:"WHT-GST Account",dataIndex:"WHTGSTAccountDesc",sorter:function(e,n){return(0,l.Ew)(e,n,"WHTGSTAccountDesc")}},{title:"GST Input",dataIndex:"GstInputAccountDesc",sorter:function(e,n){return(0,l.Ew)(e,n,"GstInputAccountDesc")}},{title:"WHT Input",dataIndex:"WhtInputAccountDesc",sorter:function(e,n){return(0,l.Ew)(e,n,"WhtInputAccountDesc")}},{title:"PRA",dataIndex:"PRAAccountDesc",sorter:function(e,n){return(0,l.Ew)(e,n,"PRAAccountDesc")}},{title:"Commission",dataIndex:"CommissionAccountDesc",sorter:function(e,n){return(0,l.Ew)(e,n,"CommissionAccountDesc")}},{title:"Action",dataIndex:"action",render:function(e,n){return(0,j.jsx)(r.Z,{menu:!1,options:[{label:"Edit",buttonType:"primary",icon:(0,j.jsx)(i.Z,{}),onClick:function(){return function(e){p(e),h()}(n)}}]})}}],x=[{label:"Add",key:"add",onClick:function(){p(null),h()}}];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a.Z,{name:"General Setting",buttons:x}),(0,j.jsx)("div",{className:"app_page_content",children:(0,j.jsx)("div",{className:"app_page_content",children:(0,j.jsx)(u.Z,{columns:g,data:A,selectAble:!1,loading:Z.isLoading,searchKeys:["PolicyName","FreightAccountDesc","MisctAccountDesc","SecurityAccountDesc","InvVarianceAccountDesc","WHTGSTAccountDesc","GstInputAccountDesc","WhtInputAccountDesc","PRAAccountDesc","CommissionAccountDesc"]})})}),(0,j.jsx)(y,{open:t,onCancel:h,selected:m})]})}}}]);
//# sourceMappingURL=5413.99de6434.chunk.js.map