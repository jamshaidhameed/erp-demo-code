(self.webpackChunkerp_web=self.webpackChunkerp_web||[]).push([[8901],{7249:function(e,t,n){"use strict";n(2791);var a=n(4992),r=n(1367),i=n(3329);t.Z=function(e){var t=e.name,n=e.required,s=void 0===n||n,l=e.disabled,o=void 0!==l&&l,d=e.value,c=e.onChange,u=e.mode,m=void 0===u?"single":u,h=e.controlled,f=void 0!==h&&h,p=e.showSearch,b=void 0!==p&&p,g=e.placeholder,v=void 0===g?"Select Employee Category":g,x=e.messageLabel,y=void 0===x?"Employee Category":x,j=e.label,E=void 0===j?"Employee Category":j,Z=(0,a.uw)().getList,w=Z.isError?[]:(null===Z||void 0===Z?void 0:Z.data)||[];return(0,i.jsx)(r.Z,{fieldNames:{label:"description",value:"id"},name:t,label:E,messageLabel:y,options:w,placeholder:v,loading:Z.isLoading,required:s,disabled:o,value:d,onChange:function(e){c("multiple"===m?e:w.find((function(t){return t.OID===e})))},mode:m,controlled:f,showSearch:b})}},4964:function(e,t,n){"use strict";n(2791);var a=n(4992),r=n(1367),i=n(3329);t.Z=function(e){var t=e.name,n=e.required,s=void 0===n||n,l=e.disabled,o=void 0!==l&&l,d=e.value,c=e.onChange,u=e.mode,m=void 0===u?"single":u,h=e.controlled,f=void 0!==h&&h,p=e.showSearch,b=void 0!==p&&p,g=e.placeholder,v=void 0===g?"Select Employee Type":g,x=e.messageLabel,y=void 0===x?"Employee Type":x,j=e.label,E=void 0===j?"Employee Type":j,Z=(0,a.$u)().getList,w=Z.isError?[]:(null===Z||void 0===Z?void 0:Z.data)||[];return(0,i.jsx)(r.Z,{fieldNames:{label:"description",value:"id"},name:t,label:E,messageLabel:y,options:w,placeholder:v,loading:Z.isLoading,required:s,disabled:o,value:d,onChange:function(e){c("multiple"===m?e:w.find((function(t){return t.OID===e})))},mode:m,controlled:f,showSearch:b})}},35:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(4352),r=n(938),i=n(3329);function s(e){var t=e.collapseAble,n=void 0!==t&&t,s=e.title,l=e.children,o=e.className,d=void 0===o?"":o,c=a.Z.Panel;return(0,i.jsx)(i.Fragment,{children:n?(0,i.jsx)(a.Z,{className:"form-card-collapsible ".concat(d),defaultActiveKey:[s],expandIcon:function(e){var t=e.isActive;return(0,i.jsx)(r.Z,{rotate:t?90:0})},ghost:!0,children:(0,i.jsx)(c,{header:s,children:l},s)}):(0,i.jsx)("div",{className:"form_card ".concat(d),children:(0,i.jsx)("div",{className:"card_body",children:l})})})}},6743:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(3388),r=n(1014),i=n(5033),s=n(711),l=n(6765),o=n(5421),d=n(3329),c={primary:"custom_menu_primary",secondary:"custom_menu_secondary",danger:"custom_menu_danger"};function u(e){var t=e.selectorDirection,n=void 0===t?"horizontal":t,u=e.menuList,m=void 0===u?[]:u,h=(0,d.jsx)(a.Z,{children:(0,d.jsx)("div",{className:"list-menu-dropdown-options",children:m.map((function(e,t){return!e.hidden&&(0,d.jsxs)(a.Z.Item,{onClick:function(){return e.confirmAction?(0,o.iG)(e.confirmTitle||"Deleting",e.confirmMsg||l.QK.DeleteConfirmMsg,e.onClick):e.onClick()},className:"link-text-color mb-2 ".concat(c[e.buttonType]||c.primary),disabled:!!e.disabled,children:[(0,d.jsx)("span",{className:"pr-2",children:e.icon}),(0,d.jsx)("span",{className:"px-2",children:e.label})]},t)}))})});return(0,d.jsx)(r.Z,{overlay:h,trigger:["click"],children:(0,d.jsx)("a",{onClick:function(e){return e.preventDefault()},children:"horizontal"==n?(0,d.jsx)(i.Z,{}):(0,d.jsx)(s.Z,{})})})}},4693:function(e,t,n){"use strict";var a=n(3329);t.Z=function(e){var t=e.title,n=e.className,r=void 0===n?"custom_page_title":n;return(0,a.jsx)("div",{className:"card_header px-5",children:(0,a.jsx)("label",{className:"page_title ".concat(r),children:t})})}},3195:function(e,t,n){"use strict";var a=n(5058),r=n(3329);t.Z=function(e){var t=e.items,n=e.activeKey,i=e.destroyInactiveTabPane,s=void 0===i||i,l=e.onChange;return(0,r.jsx)(a.Z,{activeKey:n,destroyInactiveTabPane:s,items:t,onChange:l})}},7001:function(e,t,n){"use strict";var a=n(3433),r=n(2791),i=n(7309),s=n(5421),l=n(9434),o=n(6765),d=n(3329),c={primary:"custom_button_primary",secondary:"custom_button_secondary",danger:"custom_button_danger"};t.Z=function(e){var t=e.label,n=e.onClick,u=e.icon,m=void 0===u?"":u,h=e.type,f=void 0===h?"primary":h,p=e.buttonType,b=void 0===p?"primary":p,g=e.htmlType,v=void 0===g?"button":g,x=e.loading,y=void 0!==x&&x,j=e.className,E=void 0===j?"":j,Z=e.disabled,w=void 0!==Z&&Z,D=e.confirmAction,L=void 0!==D&&D,N=e.confirmTitle,S=void 0===N?"Deleting":N,A=e.confirmMsg,C=void 0===A?o.QK.DeleteConfirmMsg:A,$=e.shortKey,T=void 0===$?"":$,k=e.style,I=void 0===k?{}:k,M=T&&o.T7[T]?T:"",_=(0,l.v9)((function(e){return e.showLoader})),U=_.pageLoading,B=_.appLoading,O=(0,r.useRef)(U);O.current=U;var P=(0,r.useRef)(B);P.current=B;var F=(0,r.useRef)(y);F.current=y;var R=(0,r.useRef)(w);R.current=w;var q=(0,r.useRef)(),Y=function(e){if(M===e.key){e.preventDefault();var t=document.getElementsByClassName("ant-modal"),n=0===t.length||(0,a.Z)(t).every((function(e){return 0===e.offsetWidth}));O.current||P.current||F.current||R.current||!n||q.current.click()}};return(0,r.useEffect)((function(){if(M)return window.addEventListener("keydown",Y),function(){return window.removeEventListener("keydown",Y)}}),[]),(0,d.jsx)(i.ZP,{ref:q,className:"custom_button ".concat(E," ").concat(c[b]),type:f,style:I,htmlType:v,loading:y,onClick:function(){return L?(0,s.iG)(S,C,n):n()},disabled:y||w,children:y?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)("div",{className:"custom_button_content",children:[m&&m,(0,d.jsx)("span",{children:M?"".concat(t," (").concat(M,")"):t})]})})}},8588:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(1413),r=n(2648),i=n(7846),s=(n(2791),n(7892)),l=n.n(s),o=n(3329),d=r.Z.RangePicker;function c(e){var t=e.label,n=e.name,s=e.messageLabel,c=e.placeholder,u=e.onChange,m=e.value,h=e.showRange,f=void 0!==h&&h,p=e.showTime,b=void 0!==p&&p,g=e.required,v=void 0!==g&&g,x=e.controlled,y=void 0!==x&&x,j=e.autoFocus,E=void 0!==j&&j,Z=e.allowClear,w=void 0!==Z&&Z,D=e.minDate,L=void 0===D?null:D,N=e.className,S=void 0===N?"":N,A=e.disabled,C=void 0!==A&&A,$=e.popupClassName,T=void 0===$?"":$,k="hh:mm:ss A",I="MMMM D, YYYY",M=function(e,t){return u((n=t)?b?new Date(n):new Date("".concat(n," ").concat((new Date).toLocaleTimeString())):null);var n},_=function(){var e={popupClassName:T,className:"antd-input-custom antd-dateInput-custom ".concat(S),placeholder:c,autoFocus:E,allowClear:w,disabled:C,format:b?"".concat(I," ").concat(k):I,showTime:b?{format:k}:null};return y&&(e.value=m?l()(m):null,e.onChange=M),e};return(0,o.jsx)(i.Z.Item,{name:n,validateTrigger:"onBlur",label:t,rules:[{required:v,message:"Please enter ".concat(s,".")}],children:f?(0,o.jsx)(d,(0,a.Z)({},_())):(0,o.jsx)(r.Z,(0,a.Z)((0,a.Z)({},_()),{},{disabledDate:function(e){return L?e<L:null}}))})}},3782:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(1413),r=n(586),i=n(9434),s=n(9372),l=n(1087),o=n(7001),d=n(6743),c=n(3329),u=r.Z.Header;function m(e){var t=e.name,n=e.buttons,r=e.redirectURL,m=void 0===r?"":r,h=e.redirectLabel,f=void 0===h?"":h,p=e.responsiveClass,b=void 0===p?"":p,g=(0,i.v9)((function(e){return e.layout})),v=g.showTopBanner,x=g.topBannerHeight,y=g.headerHeight,j=g.collapsed,E=g.hidden,Z=g.mobileView,w=g.sidebarWidth,D=g.subHeaderHeight,L=Z?"100%":"calc(100% - ".concat(E||Z?0:j?80:w,"px)"),N=v?y+x:y;return(0,c.jsx)(u,{style:(0,a.Z)({position:"fixed",zIndex:1,width:L,top:N,height:D},Z?{left:0}:{}),className:"site-layout-sub-header",children:(0,c.jsx)("div",{className:"sub-header-container",children:(0,c.jsxs)("div",{className:"px-5 sub-header-wrapper",children:[(0,c.jsxs)("div",{className:"sub-header-title",children:[m&&(0,c.jsx)("div",{className:"redirect-btn",children:(0,c.jsxs)(l.rU,{to:m,className:"d-flex align-items-center gap-2",children:[(0,c.jsx)(s.Z,{}),(0,c.jsx)("span",{children:f})]})}),(0,c.jsx)("h2",{children:t})]}),(null===n||void 0===n?void 0:n.length)>0&&(0,c.jsxs)("div",{className:"sub-header-menu ".concat(b),children:[(0,c.jsx)("div",{className:"btn-desktop-view",children:n.map((function(e){return(0,c.jsx)(o.Z,(0,a.Z)({},e),e.label)}))}),(0,c.jsx)("span",{className:"btn-mobile-view",children:(0,c.jsx)(d.Z,{selectorDirection:"vertical",menuList:n})})]})]})})})}},8901:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var a=n(9439),r=n(2791),i=n(3195),s=n(1413),l=n(3782),o=n(9655),d=n(5421),c=n(1483),u=n(9434),m=n(35),h=n(7846),f=n(6765),p=n(4992),b=n(6106),g=n(914),v=n(1367),x=n(3329),y=function(e){var t=e.name,n=e.required,a=void 0!==n&&n,r=e.disabled,i=void 0!==r&&r,s=e.value,l=e.onChange,o=e.mode,d=void 0===o?"single":o,c=e.controlled,u=void 0!==c&&c,m=e.showSearch,h=void 0!==m&&m,f=e.placeholder,b=void 0===f?"Select Bank":f,g=e.messageLabel,y=void 0===g?"Bank":g,j=e.label,E=void 0===j?"Bank":j,Z=(0,p.eB)().getList,w=Z.isError?[]:(null===Z||void 0===Z?void 0:Z.data)||[];return(0,x.jsx)(v.Z,{fieldNames:{label:"bank_name",value:"id"},name:t,label:E,messageLabel:y,options:w,placeholder:b,loading:Z.isLoading,required:a,disabled:i,value:s,onChange:function(e){l("multiple"===d?e:w.find((function(t){return t.OID===e})))},mode:d,controlled:u,showSearch:h})},j=n(7249),E=n(4964),Z=function(e){var t=e.name,n=e.required,a=void 0!==n&&n,r=e.disabled,i=void 0!==r&&r,s=e.value,l=e.onChange,o=e.mode,d=void 0===o?"single":o,c=e.controlled,u=void 0!==c&&c,m=e.showSearch,h=void 0!==m&&m,f=e.placeholder,b=void 0===f?"Select Executive Grade":f,g=e.messageLabel,y=void 0===g?"Executive Grade":g,j=e.label,E=void 0===j?"Executive Grade":j,Z=(0,p.$w)().getList,w=Z.isError?[]:(null===Z||void 0===Z?void 0:Z.data)||[];return(0,x.jsx)(v.Z,{fieldNames:{label:"name",value:"id"},name:t,label:E,messageLabel:y,options:w,placeholder:b,loading:Z.isLoading,required:a,disabled:i,value:s,onChange:function(e){l("multiple"===d?e:w.find((function(t){return t.OID===e})))},mode:d,controlled:u,showSearch:h})},w=n(8588),D=n(5806),L=n(7951);function N(e){var t=e.ADDRESS_TYPES,n=e.GENDERS_LIST,a=e.MARITAL_STATUS_LIST;return(0,x.jsxs)(b.Z,{align:"bottom",justify:"flex-start",gap:5,gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Code",required:!0,type:f.Ar.text,name:"code",messageLabel:"code",placeholder:"Enter code"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Titles",type:f.Ar.text,name:"titles",messageLabel:"titles",placeholder:"Enter titles"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Initials",type:f.Ar.text,name:"initials",messageLabel:"initials",placeholder:"Enter initials"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"First Name",type:f.Ar.text,name:"firstName",messageLabel:"first name",placeholder:"Enter first name",required:!0})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Middle Name",type:f.Ar.text,name:"middleName",messageLabel:"middle name",placeholder:"Enter middle name",required:!0})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Last Name",type:f.Ar.text,name:"lastName",messageLabel:"last name",placeholder:"Enter last name",required:!0})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Father / Husband Name",type:f.Ar.text,name:"fatherName",messageLabel:"father / husband name",placeholder:"Enter father / husband name",required:!0})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(w.Z,{label:"Date Of Birth",required:!0,name:"dob",messageLabel:"Date Of Birth",placeholder:"Enter Date Of Birth"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"NIC No",type:f.Ar.text,name:"nic",messageLabel:"NIC number",placeholder:"Enter NIC number",onlyNumbers:!0})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"NTN",type:f.Ar.text,name:"ntn",messageLabel:"NTN number",placeholder:"Enter NTN number"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(v.Z,{name:"city",label:"City",messageLabel:"City",options:[],required:!0})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(y,{name:"bank"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Bank Branch",type:f.Ar.text,name:"bankBranch",messageLabel:"bank branch",placeholder:"Enter bank branch"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Branch Name",type:f.Ar.text,name:"branchName",messageLabel:"branch name",placeholder:"Enter branch name"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Account No",type:f.Ar.text,name:"accountNo",messageLabel:"account No",placeholder:"Enter account No"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Location",type:f.Ar.text,name:"location",messageLabel:"location",placeholder:"Enter location",required:!0})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(v.Z,{name:"department",label:"Department",messageLabel:"department",options:[]})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(v.Z,{name:"jobTitle",label:"Job Title",messageLabel:"Job Title",options:[]})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(Z,{name:"executiveGrade"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(E.Z,{name:"employeeType",required:!1})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(j.Z,{name:"employeeCategory",required:!1})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(v.Z,{name:"addressType",label:"Address Type",messageLabel:"Address Type",options:t,required:!0})}),(0,x.jsx)(g.Z,{lg:12,md:16,sm:22,children:(0,x.jsx)(D.U,{label:"Address",type:f.Ar.text,name:"address",messageLabel:"address",placeholder:"Enter address",required:!0})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(v.Z,{name:"religion",label:"Religion",messageLabel:"religion",options:[],required:!0})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(v.Z,{name:"nationality",label:"Nationality",messageLabel:"nationality",options:[],required:!0})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(v.Z,{name:"gender",label:"Gender",messageLabel:"gender",options:n,required:!0})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(v.Z,{name:"maritalStatus",label:"Marital Status",messageLabel:"marital status",options:a,required:!0})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(w.Z,{label:"Date Of Joining",required:!0,name:"doj",messageLabel:"Date Of Joining",placeholder:"Enter Date Of Joining"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(w.Z,{label:"Date Confirmed",name:"dateConfirmed",messageLabel:"Date Confirmed",placeholder:"Enter Date Confirmed"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Probation Days",type:f.Ar.text,name:"probationDays",messageLabel:"Probation Days",placeholder:"Enter Probation Days",onlyNumbers:!0})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(w.Z,{label:"Probation End Date",name:"probationEndDate",messageLabel:"Probation End Date",placeholder:"Enter Probation End Date"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Reported To",type:f.Ar.text,name:"reportedTo",messageLabel:"Reported To",placeholder:"Enter Reported To"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(y,{name:"companyBank",label:"Company Bank",placeholder:"Select Company Bank",messageLabel:"Company Bank"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Company Bank Branch",type:f.Ar.text,name:"companyBankBranch",messageLabel:"company bank branch",placeholder:"Enter company bank branch"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Company Branch Name",type:f.Ar.text,name:"companyBranchName",messageLabel:"company branch name",placeholder:"Enter company branch name"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(L.Z,{label:"Active",name:"post"})})]})}var S=n(4693);function A(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(S.Z,{title:"Contract Info"}),(0,x.jsxs)(b.Z,{align:"bottom",justify:"flex-start",gap:5,gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Contract Days",type:f.Ar.number,name:"contractDays",messageLabel:"contract days",placeholder:"Enter contract days"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Contract Months",type:f.Ar.number,name:"contractMonths",messageLabel:"contract months",placeholder:"Enter contract months"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Contract Years",type:f.Ar.number,name:"contractYears",messageLabel:"contract years",placeholder:"Enter contract years"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(w.Z,{label:"Contract End Date",name:"contractEndDate",messageLabel:"Contract End Date",placeholder:"Enter Contract End Date"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Leave Entitlement",type:f.Ar.number,name:"leaveEntitlement",messageLabel:"Leave Entitlement",placeholder:"Enter Leave Entitlement"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Leave Availed",type:f.Ar.number,name:"leaveAvailed",messageLabel:"Leave Availed",placeholder:"Enter Leave Availed"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{name:"medicalEntitlement",label:"Medical Entitlement",type:f.Ar.amount,messageLabel:"Medical Entitlement",placeholder:"Enter Medical Entitlement",min:0,max:f.uh})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{name:"medicalClaimed",label:"Medical Claimed",type:f.Ar.amount,messageLabel:"Medical Claimed",placeholder:"Enter Medical Claimed",min:0,max:f.uh})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Lwp Days",type:f.Ar.number,name:"lwpDays",messageLabel:"Lwp days",placeholder:"Enter lwp days"})}),(0,x.jsx)(g.Z,{lg:6,md:8,sm:11,children:(0,x.jsx)(D.U,{label:"Graduaty Prop Days",type:f.Ar.number,name:"graduatyPropDays",messageLabel:"Graduaty Prop Days",placeholder:"Enter Graduaty Prop Days"})})]})]})}var C=n(291),$=n(1736),T=n(7145),k=[{label:"Permanent",value:"1"}],I=[{label:"Male",value:"1"},{label:"Female",value:"2"}],M=[{label:"Single",value:"1"},{label:"Married",value:"2"}],_={id:"",code:"",titles:"",initials:"",firstName:"",middleName:"",lastName:"",fatherName:"",dob:null,nic:"",ntn:"",city:void 0,bank:void 0,bankBranch:"",branchName:"",accountNo:"",location:"",department:void 0,jobTitle:void 0,executiveGrade:void 0,employeeType:void 0,employeeCategory:void 0,addressType:k[0].value,address:"",religion:void 0,nationality:void 0,gender:void 0,maritalStatus:void 0,doj:null,dateConfirmed:null,probationDays:"",probationEndDate:void 0,reportedTo:"",companyBank:void 0,companyBankBranch:"",companyBranchName:"",post:!1,contractDays:"",contractMonths:"",contractYears:"",contractEndDate:null,leaveEntitlement:"",leaveAvailed:"",medicalEntitlement:"",medicalClaimed:"",lwpDays:"",graduatyPropDays:""};function U(e){var t=e.id,n=(0,u.I0)(),i="new"===t,b=h.Z.useForm(),g=(0,a.Z)(b,1)[0],v=(0,p.AF)(!1).submitRecord,y=(0,r.useState)((0,s.Z)({},_)),j=(0,a.Z)(y,1)[0];(0,r.useEffect)((function(){var e;i||(e=t,n((0,c.S)(!0)),(0,C.hM)(e).then((function(e){n((0,c.S)(!1)),e.data})).catch((function(e){n((0,c.S)(!1)),o.Am.error((0,d.nU)(e))})))}),[t]);var E=[{label:j.id?"Update":"Save",onClick:function(){g.validateFields().then((function(e){j.id&&(e.id=j.id),function(e){n((0,c.S)(!0)),v.mutateAsync(e).then((function(e){n((0,c.S)(!1))})).catch((function(){return n((0,c.S)(!1))}))}(e)})).catch((function(){return o.Am.error(f.QK.FormValidationMsg)}))}}];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l.Z,{name:"".concat(i?"Add":"Edit"," Employee Basic Info"),buttons:E}),(0,x.jsx)("div",{className:"app_page_content app_page_tab_content",children:(0,x.jsx)(m.Z,{children:(0,x.jsxs)($.Z,{name:T.S.PR_HR_EBI_FORM,initialValues:j,className:"p-5",form:g,children:[(0,x.jsx)(N,{ADDRESS_TYPES:k,GENDERS_LIST:I,MARITAL_STATUS_LIST:M}),(0,x.jsx)(A,{})]})})})]})}var B=n(1752),O=n(2622),P=n(7349),F=n(5145),R=n(2262),q=function(e){var t=e.onAddEdit,n=(0,u.I0)(),i=(0,p.AF)(),s=i.getList,o=i.deleteRecords,m=s.isError?[]:(null===s||void 0===s?void 0:s.data)||[],h=(0,r.useState)([]),f=(0,a.Z)(h,2),b=f[0],g=f[1],v=function(e){n((0,c.S)(!0)),o.mutateAsync(e).then((function(){n((0,c.S)(!1)),g([])})).catch((function(){return n((0,c.S)(!1))}))},y=[{title:"Code",dataIndex:"code",sorter:function(e,t){return(0,d.Ew)(e,t,"code")}},{title:"First Name",dataIndex:"firstName",sorter:function(e,t){return(0,d.Ew)(e,t,"firstName")}},{title:"Middle Name",dataIndex:"middleName",sorter:function(e,t){return(0,d.Ew)(e,t,"middleName")}},{title:"Last Name",dataIndex:"lastName",sorter:function(e,t){return(0,d.Ew)(e,t,"lastName")}},{title:"Father Name",dataIndex:"fatherName",sorter:function(e,t){return(0,d.Ew)(e,t,"fatherName")}},{title:"Initials",dataIndex:"initials",sorter:function(e,t){return(0,d.Ew)(e,t,"initials")}},{title:"Titles",dataIndex:"titles",sorter:function(e,t){return(0,d.Ew)(e,t,"titles")}},{title:"Job Title",dataIndex:"jobTitle",sorter:function(e,t){return(0,d.Ew)(e,t,"jobTitle")}},{title:"Executive Grade",dataIndex:"executiveGrade",sorter:function(e,t){return(0,d.Ew)(e,t,"executiveGrade")}},{title:"Department",dataIndex:"department",sorter:function(e,t){return(0,d.Ew)(e,t,"department")}},{title:"Gender",dataIndex:"gender",sorter:function(e,t){return(0,d.Ew)(e,t,"gender")}},{title:"Post",dataIndex:"post",sorter:function(e,t){return(0,d.$P)(e,t,"post")},render:function(e,t){return(0,x.jsx)(R.Z,{value:null===t||void 0===t?void 0:t.post,controlled:!0,disabled:!0})}},{title:"Action",dataIndex:"action",render:function(e,n){return(0,x.jsx)(P.Z,{menu:!0,options:[{label:"Edit",buttonType:"primary",icon:(0,x.jsx)(B.Z,{}),onClick:function(){return t(n.id)}},{label:"Delete",buttonType:"danger",icon:(0,x.jsx)(O.Z,{}),confirmAction:!0,onClick:function(){return v([n.id.toString()])}}]})}}],j=[{label:"Add",key:"add",onClick:function(){return t("new")}},{label:"Delete",key:"delete",buttonType:"danger",confirmAction:!0,disabled:!b.length,onClick:function(){return v(b.map((function(e){return e.toString()})))}}];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l.Z,{name:"Employee Basic Info",buttons:j}),(0,x.jsx)("div",{className:"app_page_content app_page_tab_content",children:(0,x.jsx)(F.Z,{rowKey:"id",columns:y,data:m,selectAble:!0,selectedRows:b,onSelect:function(e){return g(e)},loading:s.isLoading,searchKeys:[]})})]})},Y=function(e){var t=e.onAddEdit,n=(0,u.I0)(),i=(0,p.AF)(),s=i.getList,o=i.deleteRecords,m=s.isError?[]:(null===s||void 0===s?void 0:s.data)||[],h=(0,r.useState)([]),f=(0,a.Z)(h,2),b=f[0],g=f[1],v=function(e){n((0,c.S)(!0)),o.mutateAsync(e).then((function(){n((0,c.S)(!1)),g([])})).catch((function(){return n((0,c.S)(!1))}))},y=[{title:"Code",dataIndex:"code",sorter:function(e,t){return(0,d.Ew)(e,t,"code")}},{title:"First Name",dataIndex:"firstName",sorter:function(e,t){return(0,d.Ew)(e,t,"firstName")}},{title:"Middle Name",dataIndex:"middleName",sorter:function(e,t){return(0,d.Ew)(e,t,"middleName")}},{title:"Last Name",dataIndex:"lastName",sorter:function(e,t){return(0,d.Ew)(e,t,"lastName")}},{title:"Father Name",dataIndex:"fatherName",sorter:function(e,t){return(0,d.Ew)(e,t,"fatherName")}},{title:"Initials",dataIndex:"initials",sorter:function(e,t){return(0,d.Ew)(e,t,"initials")}},{title:"Titles",dataIndex:"titles",sorter:function(e,t){return(0,d.Ew)(e,t,"titles")}},{title:"Job Title",dataIndex:"jobTitle",sorter:function(e,t){return(0,d.Ew)(e,t,"jobTitle")}},{title:"Executive Grade",dataIndex:"executiveGrade",sorter:function(e,t){return(0,d.Ew)(e,t,"executiveGrade")}},{title:"Department",dataIndex:"department",sorter:function(e,t){return(0,d.Ew)(e,t,"department")}},{title:"Gender",dataIndex:"gender",sorter:function(e,t){return(0,d.Ew)(e,t,"gender")}},{title:"Action",dataIndex:"action",render:function(e,n){return(0,x.jsx)(P.Z,{menu:!0,options:[{label:"Edit",buttonType:"primary",icon:(0,x.jsx)(B.Z,{}),onClick:function(){return t(n.id)}},{label:"Delete",buttonType:"danger",icon:(0,x.jsx)(O.Z,{}),confirmAction:!0,onClick:function(){return v([n.id.toString()])}}]})}}],j=[{label:"Add",key:"add",onClick:function(){return t("new")}},{label:"Delete",key:"delete",buttonType:"danger",confirmAction:!0,disabled:!b.length,onClick:function(){return v(b.map((function(e){return e.toString()})))}}];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l.Z,{name:"Employee Basic Info",buttons:j}),(0,x.jsx)("div",{className:"app_page_content app_page_tab_content",children:(0,x.jsx)(F.Z,{rowKey:"id",columns:y,data:m,selectAble:!0,selectedRows:b,onSelect:function(e){return g(e)},loading:s.isLoading,searchKeys:[]})})]})},G=function(e){var t=e.onAddEdit,n=(0,u.I0)(),i=(0,p.AF)(),s=i.getList,o=i.deleteRecords,m=s.isError?[]:(null===s||void 0===s?void 0:s.data)||[],h=(0,r.useState)([]),f=(0,a.Z)(h,2),b=f[0],g=f[1],v=function(e){n((0,c.S)(!0)),o.mutateAsync(e).then((function(){n((0,c.S)(!1)),g([])})).catch((function(){return n((0,c.S)(!1))}))},y=[{title:"Days",dataIndex:"days",sorter:function(e,t){return(0,d.Ew)(e,t,"days")}},{title:"Months",dataIndex:"months",sorter:function(e,t){return(0,d.Ew)(e,t,"months")}},{title:"Years",dataIndex:"years",sorter:function(e,t){return(0,d.Ew)(e,t,"years")}},{title:"End Date",dataIndex:"endDate",sorter:function(e,t){return(0,d.Ew)(e,t,"endDate")}},{title:"Leave Entitlement",dataIndex:"leaveEntitlement",sorter:function(e,t){return(0,d.Ew)(e,t,"leaveEntitlement")}},{title:"Leave Availed",dataIndex:"leaveAvailed",sorter:function(e,t){return(0,d.Ew)(e,t,"leaveAvailed")}},{title:"Medical Entitlement",dataIndex:"medicalEntitlement",sorter:function(e,t){return(0,d.Ew)(e,t,"medicalEntitlement")}},{title:"Medical Claimed",dataIndex:"medicalClaimed",sorter:function(e,t){return(0,d.Ew)(e,t,"medicalClaimed")}},{title:"LWP Days",dataIndex:"lwpDays",sorter:function(e,t){return(0,d.Ew)(e,t,"lwpDays")}},{title:"Gratuity Proportionate Days",dataIndex:"gratuityProportionateDays",sorter:function(e,t){return(0,d.Ew)(e,t,"gratuityProportionateDays")}},{title:"Final Settlement Tax Paid",dataIndex:"finalSettlementTaxPaid",sorter:function(e,t){return(0,d.Ew)(e,t,"finalSettlementTaxPaid")}},{title:"Action",dataIndex:"action",render:function(e,n){return(0,x.jsx)(P.Z,{menu:!0,options:[{label:"Edit",buttonType:"primary",icon:(0,x.jsx)(B.Z,{}),onClick:function(){return t(n.id)}},{label:"Delete",buttonType:"danger",icon:(0,x.jsx)(O.Z,{}),confirmAction:!0,onClick:function(){return v([n.id.toString()])}}]})}}],j=[{label:"Add",key:"add",onClick:function(){return t("new")}},{label:"Delete",key:"delete",buttonType:"danger",confirmAction:!0,disabled:!b.length,onClick:function(){return v(b.map((function(e){return e.toString()})))}}];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l.Z,{name:"Employee Basic Info",buttons:j}),(0,x.jsx)("div",{className:"app_page_content app_page_tab_content",children:(0,x.jsx)(F.Z,{rowKey:"id",columns:y,data:m,selectAble:!0,selectedRows:b,onSelect:function(e){return g(e)},loading:s.isLoading,searchKeys:[]})})]})},H="record",K="list",W="audit",J="contractExtension",z=function(){var e=(0,r.useState)(K),t=(0,a.Z)(e,2),n=t[0],s=t[1],l=(0,r.useState)("new"),o=(0,a.Z)(l,2),d=o[0],c=o[1],u=function(e){c(e),s(H)},m=[{key:H,label:"Record",children:(0,x.jsx)(U,{id:d})},{key:K,label:"List",children:(0,x.jsx)(q,{onAddEdit:u})},{key:W,label:"Audit",children:(0,x.jsx)(Y,{onAddEdit:u})},{key:J,label:"Contract Extension",children:(0,x.jsx)(G,{})}];return(0,x.jsx)(i.Z,{items:m,activeKey:n,onChange:function(e){return s(e)}})}},7892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,a="millisecond",r="second",i="minute",s="hour",l="day",o="week",d="month",c="quarter",u="year",m="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},g=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},v={s:g,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),a=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+g(a,2,"0")+":"+g(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(a,d),i=n-r<0,s=t.clone().add(a+(i?-1:1),d);return+(-(a+(n-r)/(i?r-s:s-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:o,d:l,D:m,h:s,m:i,s:r,ms:a,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",y={};y[x]=b;var j=function(e){return e instanceof D},E=function e(t,n,a){var r;if(!t)return x;if("string"==typeof t){var i=t.toLowerCase();y[i]&&(r=i),n&&(y[i]=n,r=i);var s=t.split("-");if(!r&&s.length>1)return e(s[0])}else{var l=t.name;y[l]=t,r=l}return!a&&r&&(x=r),r||!a&&x},Z=function(e,t){if(j(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},w=v;w.l=E,w.i=j,w.w=function(e,t){return Z(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function b(e){this.$L=E(e.locale,null,!0),this.parse(e)}var g=b.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(f);if(a){var r=a[2]-1||0,i=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)):new Date(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return w},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(e,t){var n=Z(e);return this.startOf(t)<=n&&n<=this.endOf(t)},g.isAfter=function(e,t){return Z(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<Z(e)},g.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var n=this,a=!!w.u(t)||t,c=w.p(e),h=function(e,t){var r=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return a?r:r.endOf(l)},f=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,b=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case u:return a?h(1,0):h(31,11);case d:return a?h(1,b):h(0,b+1);case o:var x=this.$locale().weekStart||0,y=(p<x?p+7:p)-x;return h(a?g-y:g+(6-y),b);case l:case m:return f(v+"Hours",0);case s:return f(v+"Minutes",1);case i:return f(v+"Seconds",2);case r:return f(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var n,o=w.p(e),c="set"+(this.$u?"UTC":""),h=(n={},n[l]=c+"Date",n[m]=c+"Date",n[d]=c+"Month",n[u]=c+"FullYear",n[s]=c+"Hours",n[i]=c+"Minutes",n[r]=c+"Seconds",n[a]=c+"Milliseconds",n)[o],f=o===l?this.$D+(t-this.$W):t;if(o===d||o===u){var p=this.clone().set(m,1);p.$d[h](f),p.init(),this.$d=p.set(m,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[w.p(e)]()},g.add=function(a,c){var m,h=this;a=Number(a);var f=w.p(c),p=function(e){var t=Z(h);return w.w(t.date(t.date()+Math.round(e*a)),h)};if(f===d)return this.set(d,this.$M+a);if(f===u)return this.set(u,this.$y+a);if(f===l)return p(1);if(f===o)return p(7);var b=(m={},m[i]=t,m[s]=n,m[r]=e,m)[f]||1,g=this.$d.getTime()+a*b;return w.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var a=e||"YYYY-MM-DDTHH:mm:ssZ",r=w.z(this),i=this.$H,s=this.$m,l=this.$M,o=n.weekdays,d=n.months,c=n.meridiem,u=function(e,n,r,i){return e&&(e[n]||e(t,a))||r[n].slice(0,i)},m=function(e){return w.s(i%12||12,e,"0")},f=c||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a};return a.replace(p,(function(e,a){return a||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return l+1;case"MM":return w.s(l+1,2,"0");case"MMM":return u(n.monthsShort,l,d,3);case"MMMM":return u(d,l);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,o,2);case"ddd":return u(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(i);case"HH":return w.s(i,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return f(i,s,!0);case"A":return f(i,s,!1);case"m":return String(s);case"mm":return w.s(s,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(a,m,h){var f,p=this,b=w.p(m),g=Z(a),v=(g.utcOffset()-this.utcOffset())*t,x=this-g,y=function(){return w.m(p,g)};switch(b){case u:f=y()/12;break;case d:f=y();break;case c:f=y()/3;break;case o:f=(x-v)/6048e5;break;case l:f=(x-v)/864e5;break;case s:f=x/n;break;case i:f=x/t;break;case r:f=x/e;break;default:f=x}return h?f:w.a(f)},g.daysInMonth=function(){return this.endOf(d).$D},g.$locale=function(){return y[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=E(e,t,!0);return a&&(n.$L=a),n},g.clone=function(){return w.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},b}(),L=D.prototype;return Z.prototype=L,[["$ms",a],["$s",r],["$m",i],["$H",s],["$W",l],["$M",d],["$y",u],["$D",m]].forEach((function(e){L[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),Z.extend=function(e,t){return e.$i||(e(t,D,Z),e.$i=!0),Z},Z.locale=E,Z.isDayjs=j,Z.unix=function(e){return Z(1e3*e)},Z.en=y[x],Z.Ls=y,Z.p={},Z}()}}]);
//# sourceMappingURL=8901.3b7c50a7.chunk.js.map