"use strict";(self.webpackChunkerp_web=self.webpackChunkerp_web||[]).push([[8551],{1067:function(e,n,t){var a=t(1413),r=t(7808),i=t(3329);n.Z=function(e){return(0,i.jsx)(r.Z,(0,a.Z)((0,a.Z)({centered:!0},e),{},{children:e.children}))}},35:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(4352),r=t(938),i=t(3329);function o(e){var n=e.collapseAble,t=void 0!==n&&n,o=e.title,c=e.children,s=e.className,d=void 0===s?"":s,l=a.Z.Panel;return(0,i.jsx)(i.Fragment,{children:t?(0,i.jsx)(a.Z,{className:"form-card-collapsible ".concat(d),defaultActiveKey:[o],expandIcon:function(e){var n=e.isActive;return(0,i.jsx)(r.Z,{rotate:n?90:0})},ghost:!0,children:(0,i.jsx)(l,{header:o,children:c},o)}):(0,i.jsx)("div",{className:"form_card ".concat(d),children:(0,i.jsx)("div",{className:"card_body",children:c})})})}},6743:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(3388),r=t(1014),i=t(5033),o=t(711),c=t(6765),s=t(5421),d=t(3329),l={primary:"custom_menu_primary",secondary:"custom_menu_secondary",danger:"custom_menu_danger"};function u(e){var n=e.selectorDirection,t=void 0===n?"horizontal":n,u=e.menuList,m=void 0===u?[]:u,b=(0,d.jsx)(a.Z,{children:(0,d.jsx)("div",{className:"list-menu-dropdown-options",children:m.map((function(e,n){return!e.hidden&&(0,d.jsxs)(a.Z.Item,{onClick:function(){return e.confirmAction?(0,s.iG)(e.confirmTitle||"Deleting",e.confirmMsg||c.QK.DeleteConfirmMsg,e.onClick):e.onClick()},className:"link-text-color mb-2 ".concat(l[e.buttonType]||l.primary),disabled:!!e.disabled,children:[(0,d.jsx)("span",{className:"pr-2",children:e.icon}),(0,d.jsx)("span",{className:"px-2",children:e.label})]},n)}))})});return(0,d.jsx)(r.Z,{overlay:b,trigger:["click"],children:(0,d.jsx)("a",{onClick:function(e){return e.preventDefault()},children:"horizontal"==t?(0,d.jsx)(i.Z,{}):(0,d.jsx)(o.Z,{})})})}},7001:function(e,n,t){var a=t(3433),r=t(2791),i=t(7309),o=t(5421),c=t(9434),s=t(6765),d=t(3329),l={primary:"custom_button_primary",secondary:"custom_button_secondary",danger:"custom_button_danger"};n.Z=function(e){var n=e.label,t=e.onClick,u=e.icon,m=void 0===u?"":u,b=e.type,v=void 0===b?"primary":b,f=e.buttonType,h=void 0===f?"primary":f,p=e.htmlType,x=void 0===p?"button":p,j=e.loading,k=void 0!==j&&j,Z=e.className,_=void 0===Z?"":Z,y=e.disabled,g=void 0!==y&&y,N=e.confirmAction,w=void 0!==N&&N,A=e.confirmTitle,C=void 0===A?"Deleting":A,L=e.confirmMsg,E=void 0===L?s.QK.DeleteConfirmMsg:L,R=e.shortKey,S=void 0===R?"":R,I=e.style,T=void 0===I?{}:I,B=S&&s.T7[S]?S:"",D=(0,c.v9)((function(e){return e.showLoader})),F=D.pageLoading,K=D.appLoading,P=(0,r.useRef)(F);P.current=F;var H=(0,r.useRef)(K);H.current=K;var M=(0,r.useRef)(k);M.current=k;var U=(0,r.useRef)(g);U.current=g;var z=(0,r.useRef)(),Q=function(e){if(B===e.key){e.preventDefault();var n=document.getElementsByClassName("ant-modal"),t=0===n.length||(0,a.Z)(n).every((function(e){return 0===e.offsetWidth}));P.current||H.current||M.current||U.current||!t||z.current.click()}};return(0,r.useEffect)((function(){if(B)return window.addEventListener("keydown",Q),function(){return window.removeEventListener("keydown",Q)}}),[]),(0,d.jsx)(i.ZP,{ref:z,className:"custom_button ".concat(_," ").concat(l[h]),type:v,style:T,htmlType:x,loading:k,onClick:function(){return w?(0,o.iG)(C,E,t):t()},disabled:k||g,children:k?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)("div",{className:"custom_button_content",children:[m&&m,(0,d.jsx)("span",{children:B?"".concat(n," (").concat(B,")"):n})]})})}},3782:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(1413),r=t(586),i=t(9434),o=t(9372),c=t(1087),s=t(7001),d=t(6743),l=t(3329),u=r.Z.Header;function m(e){var n=e.name,t=e.buttons,r=e.redirectURL,m=void 0===r?"":r,b=e.redirectLabel,v=void 0===b?"":b,f=e.responsiveClass,h=void 0===f?"":f,p=(0,i.v9)((function(e){return e.layout})),x=p.showTopBanner,j=p.topBannerHeight,k=p.headerHeight,Z=p.collapsed,_=p.hidden,y=p.mobileView,g=p.sidebarWidth,N=p.subHeaderHeight,w=y?"100%":"calc(100% - ".concat(_||y?0:Z?80:g,"px)"),A=x?k+j:k;return(0,l.jsx)(u,{style:(0,a.Z)({position:"fixed",zIndex:1,width:w,top:A,height:N},y?{left:0}:{}),className:"site-layout-sub-header",children:(0,l.jsx)("div",{className:"sub-header-container",children:(0,l.jsxs)("div",{className:"px-5 sub-header-wrapper",children:[(0,l.jsxs)("div",{className:"sub-header-title",children:[m&&(0,l.jsx)("div",{className:"redirect-btn",children:(0,l.jsxs)(c.rU,{to:m,className:"d-flex align-items-center gap-2",children:[(0,l.jsx)(o.Z,{}),(0,l.jsx)("span",{children:v})]})}),(0,l.jsx)("h2",{children:n})]}),(null===t||void 0===t?void 0:t.length)>0&&(0,l.jsxs)("div",{className:"sub-header-menu ".concat(h),children:[(0,l.jsx)("div",{className:"btn-desktop-view",children:t.map((function(e){return(0,l.jsx)(s.Z,(0,a.Z)({},e),e.label)}))}),(0,l.jsx)("span",{className:"btn-mobile-view",children:(0,l.jsx)(d.Z,{selectorDirection:"vertical",menuList:t})})]})]})})})}},9166:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var a=t(9439),r=t(2791),i=t(5145),o=t(3782),c=t(7846),s=t(6106),d=t(914),l=t(7145),u=t(6765),m=t(9434),b=t(5152),v=t(9655),f=t(1067),h=t(1736),p=t(5806),x=t(7951),j=t(1483),k=t(5421),Z=t(3329),_=function(e){var n=e.open,t=e.onCancel,i=e.selected,o=e.submitRecord,_=e.invalidateList,y=(0,m.I0)(),g=c.Z.useForm(),N=(0,a.Z)(g,1)[0],w=function(){(0,b._5)(null===i||void 0===i?void 0:i.id).then((function(e){var n;y((0,j.S)(!1)),n=e.data,N.setFields([{name:"code",value:n.bank_code},{name:"bankName",value:n.bank_name},{name:"abbreviation",value:n.bank_short_name},{name:"post",value:1===n.post}])})).catch((function(e){y((0,j.S)(!1)),v.Am.error((0,k.nU)(e)),_(),t()}))};return(0,r.useEffect)((function(){n&&(N.resetFields(),i&&w())}),[n,i]),(0,Z.jsx)(f.Z,{title:i?"Edit Bank":"Add Bank",width:700,open:n,onCancel:t,onOk:function(){N.validateFields().then((function(e){!function(e){y((0,j.S)(!0));var n=e.code,a=e.bankName,r=e.abbreviation,c=e.post,s={bank_code:parseInt(n),bank_name:a,bank_short_name:r,post:c?1:0};i&&(s.id=i.id),o.mutateAsync(s).then((function(){y((0,j.S)(!1)),t()})).catch((function(){return y((0,j.S)(!1))}))}(e)})).catch((function(){return v.Am.error(u.QK.FormValidationMsg)}))},okText:"Submit",children:(0,Z.jsx)(h.Z,{name:l.S.PR_HR_BANK_FORM,className:"p-5",form:N,initialValues:{code:"",bankName:"",abbreviation:"",post:!0},children:(0,Z.jsxs)(s.Z,{align:"middle",justify:"space-between",children:[(0,Z.jsx)(d.Z,{lg:11,children:(0,Z.jsx)(p.U,{label:"Code",required:!0,type:u.Ar.text,name:"code",messageLabel:"code",placeholder:"Enter code",onlyNumbers:!0})}),(0,Z.jsx)(d.Z,{span:11,children:(0,Z.jsx)(p.U,{label:"Bank Name",required:!0,type:u.Ar.text,name:"bankName",messageLabel:"bank name",placeholder:"Enter bank name"})}),(0,Z.jsx)(d.Z,{span:11,children:(0,Z.jsx)(p.U,{label:"Abbreviation",type:u.Ar.text,name:"abbreviation",messageLabel:"abbreviation",placeholder:"Enter abbreviation"})}),(0,Z.jsx)(d.Z,{span:11,children:(0,Z.jsx)(x.Z,{label:"Post",name:"post"})})]})})})},y=t(1752),g=t(2622),N=t(7349),w=t(4992),A=t(2262),C=function(){var e=(0,m.I0)(),n=(0,w.eB)(),t=n.getList,c=n.deleteRecords,s=n.submitRecord,d=n.invalidateList,l=(0,r.useState)(!1),u=(0,a.Z)(l,2),b=u[0],v=u[1],f=(0,r.useState)(null),h=(0,a.Z)(f,2),p=h[0],x=h[1],C=function(){return v((function(e){return!e}))},L=[{title:"Code",dataIndex:"bank_code",sorter:function(e,n){return(0,k.$P)(e,n,"bank_code")}},{title:"Bank Name",dataIndex:"bank_name",sorter:function(e,n){return(0,k.Ew)(e,n,"bank_name")}},{title:"Abbreviation",dataIndex:"bank_short_name",sorter:function(e,n){return(0,k.Ew)(e,n,"bank_short_name")}},{title:"Post",dataIndex:"post",sorter:function(e,n){return(0,k.$P)(e,n,"post")},render:function(e,n){return(0,Z.jsx)(A.Z,{value:null===n||void 0===n?void 0:n.post,controlled:!0,disabled:!0})}},{title:"Action",dataIndex:"action",render:function(n,t){return(0,Z.jsx)(N.Z,{menu:!0,options:[{label:"Edit",buttonType:"primary",icon:(0,Z.jsx)(y.Z,{}),onClick:function(){return function(e){x(e),C()}(t)}},{label:"Delete",buttonType:"danger",icon:(0,Z.jsx)(g.Z,{}),confirmAction:!0,onClick:function(){return n=t.id,e((0,j.S)(!0)),void c.mutateAsync(n).then((function(){e((0,j.S)(!1)),x(null)})).catch((function(){return e((0,j.S)(!1))}));var n}}]})}}],E=[{label:"Add",key:"add",onClick:function(){x(null),C()}}],R=t.isError?[]:(null===t||void 0===t?void 0:t.data)||[];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(_,{submitRecord:s,invalidateList:d,open:b,onCancel:C,selected:p}),(0,Z.jsx)(o.Z,{name:"Banks",buttons:E}),(0,Z.jsx)("div",{className:"app_page_content",children:(0,Z.jsx)(i.Z,{columns:L,data:R,selectAble:!1,loading:t.isLoading,searchKeys:["bank_code","bank_name","bank_short_name"]})})]})}},914:function(e,n,t){var a=t(9752);n.Z=a.Z},6106:function(e,n,t){var a=t(7545);n.Z=a.Z}}]);
//# sourceMappingURL=8551.90cad984.chunk.js.map