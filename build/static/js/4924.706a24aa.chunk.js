"use strict";(self.webpackChunkerp_web=self.webpackChunkerp_web||[]).push([[4924],{6578:function(e,t,n){n(2791);var r=n(1367),a=n(3329);t.Z=function(e){var t=e.name,n=e.controlled,i=void 0!==n&&n,o=e.required,l=e.allowClear,d=e.disabled,c=void 0!==d&&d,s=e.value,u=e.onChange,m=e.options,v=e.loading,f=void 0!==v&&v;return(0,a.jsx)(r.Z,{fieldNames:{label:"title",value:"id"},name:t,label:"Cost Centre",messageLabel:"cost centre",options:m,placeholder:"Select cost centre",loading:f,required:o,allowClear:l,disabled:c,controlled:i,value:s,onChange:function(e){return u(m.find((function(t){return t.id===e})))}})}},4924:function(e,t,n){n.r(t),n.d(t,{default:function(){return se}});var r=n(4942),a=n(3433),i=n(9439),o=n(1413),l=n(3782),d=n(6765),c=n(7846),s=n(7128),u=n(7689),m=n(2791),v=n(35),f=n(6106),h=n(914),p=n(8468),_=n(9625),b=n(7001),g=n(1736),C=n(8588),x=n(5806),Z=n(1367),S=n(6403),y=n(2917),j=n(4165),A=n(5861),N=n(1381),T=n(6065),I=n(6432),O=function(){var e=(0,A.Z)((0,j.Z)().mark((function e(){return(0,j.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.Z.get(T.T).then((function(e){return(0,I.j)(e.data)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L="SHARED_CURRENCY_GET_LIST",w=n(9655),E=n(5421);var D=n(3329),U=function(e){var t=e.name,n=e.required,r=e.disabled,a=void 0!==r&&r,i=e.controlled,o=void 0!==i&&i,l=e.value,d=e.onChange,c=function(){var e=(0,S.NL)();return{getList:(0,y.a)({queryKey:[L],queryFn:O,onError:function(e){return w.Am.error((0,E.nU)(e))}}),invalidateList:function(){e.invalidateQueries([L])}}}().getList,s=c.isError?[]:(null===c||void 0===c?void 0:c.data)||[];return(0,D.jsx)(Z.Z,{fieldNames:{label:"CURRENCY_CODE",value:"OID"},name:t,label:"Currency",messageLabel:"currency",options:s,placeholder:"Select currency",loading:c.isLoading,required:n,disabled:a,controlled:o,value:l,onChange:function(e){return d(s.find((function(t){return t.OID===e})))}})};function F(e){var t=e.form,n=e.initialValues,r=e.locations,a=e.validateSubmit;return(0,D.jsx)(g.Z,{name:_.SJ.F_JV_PARENT_SECTION_FORM,initialValues:n,className:"p-5",form:t,children:(0,D.jsxs)(f.Z,{align:"bottom",justify:"flex-start",gap:5,gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,D.jsx)(h.Z,{lg:6,md:8,sm:11,children:(0,D.jsx)(p.Z,{mode:"single",showSearch:!1,placeholder:"Select GL Book",messageLabel:"book",label:"GL Book",name:"book_id",required:!0,disabled:1==n.is_approved})}),(0,D.jsx)(h.Z,{lg:6,md:8,sm:11,children:(0,D.jsx)(C.Z,{name:"voucher_date",label:"Voucher Date",messageLabel:"voucher date",placeholder:"Enter Voucher Date",required:!0,disabled:1==n.is_approved})}),(0,D.jsx)(h.Z,{lg:6,md:8,sm:11,children:(0,D.jsx)(Z.Z,{name:"location",label:"Location",messageLabel:"location",placeholder:"Select Location",fieldNames:{label:"ORGANIZATION_NAME",value:"OID"},options:r||[],required:!0,disabled:!0})}),(0,D.jsx)(h.Z,{lg:6,md:8,sm:11,children:(0,D.jsx)(U,{name:"currency_id",required:!0,disabled:1==n.is_approved})}),(0,D.jsx)(h.Z,{lg:6,md:8,sm:11,children:(0,D.jsx)(x.U,{name:"currency_rate",label:"Currency Rate",type:d.Ar.amount,messageLabel:"currency rate",placeholder:"Enter currency rate",required:!0,min:0,max:d.uh})}),(0,D.jsx)(h.Z,{lg:6,md:8,sm:11,children:(0,D.jsx)(x.U,{name:"voucher_narration",label:"Narration",type:d.Ar.text,messageLabel:"narration",placeholder:"Enter narration",disabled:1==n.is_approved,required:!0})}),(0,D.jsx)(h.Z,{lg:6,md:8,sm:11,children:(0,D.jsx)(x.U,{name:"voucher_status",label:"Voucher Status",type:d.Ar.text,messageLabel:"voucher status",placeholder:"",disabled:!0})}),(0,D.jsx)(h.Z,{lg:6,md:8,sm:11,children:(0,D.jsx)(x.U,{name:"module",label:"Module",type:d.Ar.text,messageLabel:"module",placeholder:"",disabled:!0})}),n.voucher_code&&(0,D.jsx)(h.Z,{lg:6,md:8,sm:11,children:(0,D.jsx)(x.U,{parentClassName:"mb-0",name:"voucher_code",label:"Voucher Code",type:d.Ar.number,messageLabel:"voucher code",placeholder:"",disabled:!0})}),(0,D.jsx)(h.Z,{lg:4,sm:10,xs:10,className:"gutter-row",children:(0,D.jsx)(b.Z,{shortKey:d.T7.F2,label:n.id?"Update":"Save",disabled:1==n.is_approved,onClick:function(){return a(n.is_submitted,n.is_approved)}})})]})})}var M=n(9543),R=n(9434),k=n(1483),V=n(1902),B=n(9896),P=n(2677),G=n(5531),z=n(6578),q=n(7246);function Y(e){var t,n,r,a=e.form,i=e.parentInitialValues,l=e.initialValues,c=e.onChange,s=e.natures,u=e.validateSubmit,m=e.resetForm,v=e.costCentreList,p=e.costCentreLoading,C=e.populateBalance,S=e.onSearch,y=e.formMode,j=e.modes,A=[{label:"Add & Save",shortKey:d.T7.F7,onClick:function(){return u(d.Yg.save)},disabled:y===j.copy||1==i.is_approved||!i.id},{label:"Update",shortKey:d.T7.F8,onClick:function(){return u(d.Yg.update)},disabled:y===j.copy||1==i.is_approved||!i.id||!l.id},{label:"Refresh",shortKey:d.T7.F9,onClick:m},{label:"Search",shortKey:d.T7.F10,onClick:S},{label:"Balance",shortKey:d.T7.F11,onClick:C}],N=null!==(t=null===(n=l.account)||void 0===n||null===(r=n.option)||void 0===r?void 0:r.GL_SUB_ACCOUNT_GROUPS)&&void 0!==t?t:"";return(0,D.jsxs)(g.Z,{name:_.SJ.F_JV_DETAIL_SECTION_FORM,initialValues:l,className:"p-5",form:a,children:[(0,D.jsxs)(f.Z,{align:"bottom",justify:"flex-start",gap:5,gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,D.jsx)(h.Z,{lg:6,md:8,sm:11,children:(0,D.jsx)(G.Z,{value:l.account,onChange:function(e){return c("account",e)}})}),(0,D.jsx)(h.Z,{lg:6,md:8,sm:11,children:(0,D.jsx)(q.Z,{value:l.subAccount,accountId:N,onChange:function(e){return c("subAccount",e)},disabled:!N})}),(0,D.jsx)(h.Z,{lg:6,md:8,sm:11,children:(0,D.jsx)(z.Z,{name:"cost_centre",required:!0,allowClear:!0,options:v,loading:p})}),(0,D.jsx)(h.Z,{lg:6,md:8,sm:11,children:(0,D.jsx)(x.U,{name:"narration",label:"Narration",type:d.Ar.text,messageLabel:"narration",placeholder:"Enter narration",required:!0})}),(0,D.jsx)(h.Z,{lg:6,md:8,sm:11,children:(0,D.jsx)(Z.Z,{label:"Credit/Debit",name:"credit_or_debit",messageLabel:"nature",options:s,placeholder:"Select",allowClear:!0,required:!0})}),(0,D.jsx)(h.Z,{lg:6,md:8,sm:11,children:(0,D.jsx)(x.U,{name:"amount",label:"Amount",type:d.Ar.amount,messageLabel:"amount",placeholder:"Enter amount",required:!0,min:0,max:d.uh})})]}),(0,D.jsx)(f.Z,{children:A.map((function(e){return(0,D.jsx)(b.Z,(0,o.Z)({style:{marginRight:"15px"}},e),e.label)}))})]})}var K=n(1752),H=n(2622),W=n(9039),J=n(7349),$=n(5145),Q=n(9493),X=W.Z.Summary;function ee(e){var t=e.isApproved,n=e.detailStats,r=e.data,a=e.onEdit,i=e.onDelete,o=e.costCentresById,l=e.formMode,d=e.modes,c=[{title:"Main Account Code",dataIndex:"ST_MAIN_ACCOUNT_CODE"},{title:"Main Account Desc",dataIndex:"ST_MAIN_ACCOUNT_DESC"},{title:"Sub Account Code",dataIndex:"ST_SUB_ACCOUNT_CODE"},{title:"Sub Account Desc",dataIndex:"ST_SUB_ACCOUNT_DESC"},{title:"Cost Centre",dataIndex:"CostCentre",render:function(e,t){var n,r;return null!==(n=null===(r=o[t.CostCentre])||void 0===r?void 0:r.title)&&void 0!==n?n:""}},{title:"Debit/Credit",dataIndex:"TYPE"},{title:"Amount",dataIndex:"original_amount",render:function(e,t){return(0,Q.Pe)(t.original_amount)}},{title:"Narration",dataIndex:"ST_LINE_NARRATION"},{title:"Action",dataIndex:"action",render:function(e,n){return(0,D.jsx)(J.Z,{options:[{label:"Edit",buttonType:"primary",icon:(0,D.jsx)(K.Z,{}),onClick:function(){return a(n)}},{label:"Delete",buttonType:"danger",icon:(0,D.jsx)(H.Z,{}),confirmAction:!0,onClick:function(){return i(n.id)},hidden:l===d.copy||1==t}]})}}];return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("div",{className:"text-end fw-bold me-4",children:["Net Difference ",n.netDifference]}),(0,D.jsx)($.Z,{rowKey:"id",searchAble:!1,columns:c,data:r,searchKeys:[],summary:function(e){return(0,D.jsxs)(X.Row,{className:"journal_voucher_table_summary",children:[(0,D.jsxs)(X.Cell,{children:["Credit: ",n.totalCredit]}),(0,D.jsxs)(X.Cell,{children:["Debit: ",n.totalDebit]}),(0,D.jsx)(X.Cell,{colSpan:3}),(0,D.jsx)(X.Cell,{children:"Difference"}),(0,D.jsx)(X.Cell,{children:n.difference}),(0,D.jsx)(X.Cell,{colSpan:2})]})}})]})}var te=n(8678),ne=n(5429),re=n(739),ae=n(2014),ie={load:"load",print:"print"},oe={new:"new",edit:"edit",copy:"copy"},le=[{label:"Debit",value:"debit"},{label:"Credit",value:"credit"}],de={account:(0,o.Z)({},d.$I),subAccount:(0,o.Z)({},d.$I),cost_centre:void 0,narration:"",credit_or_debit:void 0,amount:"",id:""},ce={totalCredit:(0,Q.Pe)(0),totalDebit:(0,Q.Pe)(0),difference:(0,Q.Pe)(0),netDifference:(0,Q.Pe)(0)};function se(){var e,t=(0,u.s0)(),n=(0,R.I0)(),f=(0,R.v9)((function(e){return e})).configs,h=c.Z.useForm(),p=(0,i.Z)(h,1)[0],b=c.Z.useForm(),g=(0,i.Z)(b,1)[0],C=(0,u.TH)(),x=(0,u.UO)().id,Z=(null===C||void 0===C||null===(e=C.state)||void 0===e?void 0:e.id)||null,S="new"===x?Z?oe.copy:oe.new:oe.edit,y="new"===x?Z:x,j=(0,te.O)().getList,A=j.isError?[]:(null===j||void 0===j?void 0:j.data)||[],N=(0,m.useMemo)((function(){return(0,I.X)(A,"id")}),[A]),T={book_id:void 0,voucher_date:(0,M.p8)(new Date),location:null===f||void 0===f?void 0:f.location,voucher_narration:"",currency_id:void 0,currency_rate:"",is_submitted:0,is_approved:0,voucher_code:"",voucher_status:"",module:_.S2.GL,id:""},O=(0,V.s)(),L=O.submitRecord,U=O.submitDetailRecord,G=O.deleteDetailRecord,z=(0,m.useState)(null),q=(0,i.Z)(z,2),K=q[0],H=q[1],W=(0,m.useState)((0,o.Z)({},T)),J=(0,i.Z)(W,2),$=J[0],X=J[1],se=(0,m.useState)((0,o.Z)({},de)),ue=(0,i.Z)(se,2),me=ue[0],ve=ue[1],fe=(0,m.useState)([]),he=(0,i.Z)(fe,2),pe=he[0],_e=he[1],be=(0,m.useState)([]),ge=(0,i.Z)(be,2),Ce=ge[0],xe=ge[1],Ze=(0,m.useState)((0,o.Z)({},ce)),Se=(0,i.Z)(Ze,2),ye=Se[0],je=Se[1],Ae=function(e){n((0,k.S)(!0)),L.mutateAsync(e).then((function(e){var r;r=e.data,$.id?(X((0,o.Z)((0,o.Z)({},$),{},{id:r.voucher_id,is_submitted:r.is_submitted,is_approved:r.is_approved,voucher_code:r.voucher_code})),p.setFields([{name:"voucher_code",value:r.voucher_code},{name:"voucher_status",value:(0,ne.q)(r.is_submitted,r.is_approved)}])):t("".concat(P.at,"/").concat(r.voucher_id)),n((0,k.S)(!1))})).catch((function(){return n((0,k.S)(!1))}))},Ne=function(e,t){p.validateFields().then((function(n){delete n.module,delete n.voucher_code,delete n.voucher_status,n.voucher_date=(0,M.LM)(new Date(n.voucher_date),d.nH[9]),n.is_submitted=e,n.is_approved=t,n.currency_rate=(0,Q.MU)(n.currency_rate),$.id?n.voucher_id=$.id:S===oe.copy&&(n.copy_voucher_id=y.toString()),Ae(n)})).catch((function(){return w.Am.error(d.QK.FormValidationMsg)}))},Te=function(e,t){var n=(0,a.Z)(pe);if(t===d.Yg.save)n.unshift(e);else if(t===d.Yg.update){var r=n.findIndex((function(t){return t.id==e.id}));r>-1&&n[r]&&(n[r]=e)}else if(t===d.Yg.delete){var i=n.findIndex((function(t){return t.id==e.id}));i>-1&&n.splice(i,1)}_e(n),xe(n),ve((0,o.Z)((0,o.Z)({},me),de)),setTimeout((function(){g.resetFields()}),0)},Ie=function(){X((0,o.Z)((0,o.Z)({},$),T)),ve((0,o.Z)((0,o.Z)({},me),de)),_e([]),xe([]),S!==oe.new&&t("".concat(P.at,"/new")),setTimeout((function(){p.resetFields(),g.resetFields()}),0)},Oe=function(e,r){n((0,k.S)(!0)),(0,B.MS)(e).then((function(e){n((0,k.S)(!1)),r===ie.load?function(e){var t,n,r={currency_id:e.currency_id,module:null!==(t=e.Trans_Name)&&void 0!==t?t:""};S===oe.edit&&(r=(0,o.Z)((0,o.Z)({},r),{},{id:y,is_submitted:e.is_submitted,is_approved:e.is_approved,voucher_code:e.voucher_code})),X((0,o.Z)((0,o.Z)({},$),r));var a=(0,I.j)(e.voucherDetails);_e(a),xe(a);var i=e.voucher_date?(0,M.p8)(e.voucher_date):null;p.setFields([{name:"book_id",value:e.book_id},{name:"voucher_date",value:i},{name:"location",value:e.location},{name:"voucher_narration",value:e.voucher_narration},{name:"currency_id",value:e.currency_id||void 0},{name:"currency_rate",value:(0,Q.MU)(e.CURRENCY_RATE)},{name:"voucher_code",value:S===oe.edit?e.voucher_code:""},{name:"voucher_status",value:S===oe.edit?(0,ne.q)(e.is_submitted,e.is_approved):""},{name:"module",value:null!==(n=e.Trans_Name)&&void 0!==n?n:""}])}(e.data):r===ie.print&&function(e){var t=(0,ne.d)(null===e||void 0===e?void 0:e.voucherDetails),n=t.totalCredit,r=t.totalDebit,a=t.difference;H((0,o.Z)((0,o.Z)({},e),{},{totalCredit:n,totalDebit:r,difference:a})),setTimeout((function(){(0,re.z)(_.Cs.JV_PRINT_CONTENT_FORM),H(null)}),10)}(e.data)})).catch((function(e){n((0,k.S)(!1)),w.Am.error((0,E.nU)(e)),t(P.fV)}))};(0,m.useEffect)((function(){y?j.isLoading||Oe(y,ie.load):Ie()}),[j.isLoading,y]),(0,m.useEffect)((function(){var e=(0,ne.d)(pe).difference;je((function(t){return(0,o.Z)((0,o.Z)({},t),{},{netDifference:e})}))}),[pe]),(0,m.useEffect)((function(){var e=(0,ne.d)(Ce),t=e.totalCredit,n=e.totalDebit,r=e.difference;je((function(e){return(0,o.Z)((0,o.Z)({},e),{},{totalCredit:t,totalDebit:n,difference:r})}))}),[Ce]);var Le=[{label:"JV Reversal",shortKey:d.T7.F1,disabled:!$.id||1!=$.is_approved,onClick:function(){n((0,k.S)(!0)),(0,B.YC)($.id).then((function(){n((0,k.S)(!1)),w.Am.success("Record created successfully")})).catch((function(e){n((0,k.S)(!1)),w.Am.error((0,E.nU)(e))}))}},{label:"Submitted",shortKey:d.T7.F3,disabled:1==$.is_submitted,onClick:function(){return Ne(1,$.is_approved)}},{label:"Approved By",shortKey:d.T7.F4,disabled:1==$.is_approved,onClick:function(){if(0!==(0,Q.MU)(ye.netDifference))return w.Am.error("Debit and Credit must be equal");Ne(1,1)}},{label:"Print",shortKey:d.T7.F5,disabled:!$.id,onClick:function(){return Oe($.id,ie.print)}},{label:"New",shortKey:d.T7.F6,onClick:Ie},{label:"Void",onClick:function(){return Ne($.is_submitted,0)},disabled:1!=$.is_approved}];return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(l.Z,{name:"".concat($.id?"Edit":S===oe.copy?"Copy":"Add"," Journal Voucher"),buttons:Le,redirectURL:P.fV,redirectLabel:"List",responsiveClass:"jv-subheader-menu"}),(0,D.jsx)(ae.Z,{containerId:_.Cs.JV_PRINT_CONTENT_FORM,costCentresById:N,data:K}),(0,D.jsx)("div",{className:"app_page_content",children:(0,D.jsxs)(v.Z,{children:[(0,D.jsx)(F,{form:p,initialValues:$,locations:f.locations,validateSubmit:Ne}),!$.id&&S===oe.copy&&(0,D.jsx)("span",{className:"ps-5 text-danger",children:"Please save master record first to manage details."}),(0,D.jsx)(s.Z,{}),(0,D.jsx)(Y,{form:g,parentInitialValues:$,initialValues:me,onChange:function(e,t){var n=(0,r.Z)({},e,t);"account"===e&&null==t.option&&(n.subAccount=(0,o.Z)({},d.$I)),ve((0,o.Z)((0,o.Z)({},me),n))},natures:le,validateSubmit:function(e){g.validateFields().then((function(t){var r,a,i;return null===me.account.option?w.Am.error("Please select main account"):me.account.option.GL_SUB_ACCOUNT_GROUPS&&null===me.subAccount.option?w.Am.error("Please select sub account"):(t.amount=(0,Q.MU)(t.amount),t.voucher_id=$.id,t.main_account_id=me.account.option.value,t.sub_account_id=null!==(r=null===(a=me.subAccount.option)||void 0===a||null===(i=a.value)||void 0===i?void 0:i.toString())&&void 0!==r?r:"0",e===d.Yg.update&&me.id&&(t.voucher_detail_id=me.id),void function(e){n((0,k.S)(!0)),U.mutateAsync(e).then((function(t){Te(t.data,e.voucher_detail_id?d.Yg.update:d.Yg.save),n((0,k.S)(!1))})).catch((function(){return n((0,k.S)(!1))}))}(t))})).catch((function(){return w.Am.error(d.QK.FormValidationMsg)}))},resetForm:function(){ve((0,o.Z)((0,o.Z)({},me),de)),xe(pe),setTimeout((function(){g.resetFields()}),0)},populateBalance:function(){var e=(0,Q.MU)(ye.netDifference);ve((function(t){return(0,o.Z)((0,o.Z)({},t),{},{amount:e})})),g.setFields([{name:"amount",value:e}])},onSearch:function(){var e,t,n,r,i,o;if(0===pe.length)return xe([]);var l=null!==(e=null===(t=me.account.option)||void 0===t?void 0:t.value)&&void 0!==e?e:"",d=null!==(n=null===(r=me.subAccount.option)||void 0===r?void 0:r.value)&&void 0!==n?n:"",c=null!==(i=g.getFieldValue("cost_centre"))&&void 0!==i?i:"",s=g.getFieldValue("narration"),u=null!==(o=g.getFieldValue("credit_or_debit"))&&void 0!==o?o:"",m=g.getFieldValue("amount");if(!l&&!d&&!c&&!s&&!u&&""===m)return xe((0,a.Z)(pe));var v=(0,a.Z)(pe).filter((function(e){var t;return(!l||l===e.GL_MAIN_ACCOUNTS_OID)&&(!d||d===e.GL_SUB_ACCOUNTS_OID)&&(!c||c===e.CostCentre)&&(!s||(null!==(t=e.ST_LINE_NARRATION)&&void 0!==t?t:"").toLowerCase().includes(s.toLowerCase()))&&(!u||u===e.TYPE)&&(""===m||(0,Q.MU)(m)===(0,Q.MU)(e.original_amount))}));xe(v)},costCentreList:A,costCentreLoading:j.isLoading,formMode:S,modes:oe}),(0,D.jsx)(ee,{data:Ce,isApproved:$.is_approved,onEdit:function(e){var t=(0,Q.MU)(e.original_amount),n=e.GL_SUB_ACCOUNTS_OID&&0!=e.GL_SUB_ACCOUNTS_OID?{defaultValue:e.GL_SUB_ACCOUNTS_OID}:(0,o.Z)({},d.$I);ve((function(r){return(0,o.Z)((0,o.Z)({},r),{},{account:(0,o.Z)((0,o.Z)({},r.account),{},{defaultValue:e.GL_MAIN_ACCOUNTS_OID}),subAccount:(0,o.Z)({},n),cost_centre:e.CostCentre,narration:e.ST_LINE_NARRATION,credit_or_debit:e.TYPE,amount:t,id:e.id})})),g.setFields([{name:"cost_centre",value:e.CostCentre},{name:"narration",value:e.ST_LINE_NARRATION},{name:"credit_or_debit",value:e.TYPE},{name:"amount",value:t}])},onDelete:function(e){n((0,k.S)(!0)),G.mutateAsync(e).then((function(){Te({id:e},d.Yg.delete),n((0,k.S)(!1))})).catch((function(){return n((0,k.S)(!1))}))},detailStats:ye,costCentresById:N,formMode:S,modes:oe})]})})]})}},7128:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(4942),a=n(9439),i=n(1694),o=n.n(i),l=n(2791),d=n(1929),c=n(7521),s=n(5564),u=n(9922),m=function(e){var t,n=e.componentCls,a=e.sizePaddingEdgeHorizontal,i=e.colorSplit,o=e.lineWidth;return(0,r.Z)({},n,Object.assign(Object.assign({},(0,c.Wf)(e)),(t={borderBlockStart:"".concat(o,"px solid ").concat(i),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:"0 ".concat(e.dividerVerticalGutterMargin,"px"),verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat(o,"px solid ").concat(i)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat(e.dividerHorizontalGutterMargin,"px 0")}},(0,r.Z)(t,"&-horizontal".concat(n,"-with-text"),{display:"flex",alignItems:"center",margin:"".concat(e.dividerHorizontalWithTextGutterMargin,"px 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(i),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat(o,"px solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}}),(0,r.Z)(t,"&-horizontal".concat(n,"-with-text-left"),{"&::before":{width:"5%"},"&::after":{width:"95%"}}),(0,r.Z)(t,"&-horizontal".concat(n,"-with-text-right"),{"&::before":{width:"95%"},"&::after":{width:"5%"}}),(0,r.Z)(t,"".concat(n,"-inner-text"),{display:"inline-block",padding:"0 1em"}),(0,r.Z)(t,"&-dashed",{background:"none",borderColor:i,borderStyle:"dashed",borderWidth:"".concat(o,"px 0 0")}),(0,r.Z)(t,"&-horizontal".concat(n,"-with-text").concat(n,"-dashed"),{"&::before, &::after":{borderStyle:"dashed none none"}}),(0,r.Z)(t,"&-vertical".concat(n,"-dashed"),{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0}),(0,r.Z)(t,"&-plain".concat(n,"-with-text"),{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize}),(0,r.Z)(t,"&-horizontal".concat(n,"-with-text-left").concat(n,"-no-default-orientation-margin-left"),(0,r.Z)({"&::before":{width:0},"&::after":{width:"100%"}},"".concat(n,"-inner-text"),{paddingInlineStart:a})),(0,r.Z)(t,"&-horizontal".concat(n,"-with-text-right").concat(n,"-no-default-orientation-margin-right"),(0,r.Z)({"&::before":{width:"100%"},"&::after":{width:0}},"".concat(n,"-inner-text"),{paddingInlineEnd:a})),t)))},v=(0,s.Z)("Divider",(function(e){var t=(0,u.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[m(t)]}),{sizePaddingEdgeHorizontal:0}),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var h=function(e){var t,n=l.useContext(d.E_),i=n.getPrefixCls,c=n.direction,s=n.divider,u=e.prefixCls,m=e.type,h=void 0===m?"horizontal":m,p=e.orientation,_=void 0===p?"center":p,b=e.orientationMargin,g=e.className,C=e.rootClassName,x=e.children,Z=e.dashed,S=e.plain,y=e.style,j=f(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),A=i("divider",u),N=v(A),T=(0,a.Z)(N,2),I=T[0],O=T[1],L=_.length>0?"-".concat(_):_,w=!!x,E="left"===_&&null!=b,D="right"===_&&null!=b,U=o()(A,null===s||void 0===s?void 0:s.className,O,"".concat(A,"-").concat(h),(t={},(0,r.Z)(t,"".concat(A,"-with-text"),w),(0,r.Z)(t,"".concat(A,"-with-text").concat(L),w),(0,r.Z)(t,"".concat(A,"-dashed"),!!Z),(0,r.Z)(t,"".concat(A,"-plain"),!!S),(0,r.Z)(t,"".concat(A,"-rtl"),"rtl"===c),(0,r.Z)(t,"".concat(A,"-no-default-orientation-margin-left"),E),(0,r.Z)(t,"".concat(A,"-no-default-orientation-margin-right"),D),t),g,C),F=l.useMemo((function(){return"number"===typeof b?b:/^\d+$/.test(b)?Number(b):b}),[b]),M=Object.assign(Object.assign({},E&&{marginLeft:F}),D&&{marginRight:F});return I(l.createElement("div",Object.assign({className:U,style:Object.assign(Object.assign({},null===s||void 0===s?void 0:s.style),y)},j,{role:"separator"}),x&&"vertical"!==h&&l.createElement("span",{className:"".concat(A,"-inner-text"),style:M},x)))}}}]);
//# sourceMappingURL=4924.706a24aa.chunk.js.map