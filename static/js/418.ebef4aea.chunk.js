"use strict";(self.webpackChunkcarom_map_front=self.webpackChunkcarom_map_front||[]).push([[418],{4387:function(e,n,t){t(2791);n.Z=t.p+"static/media/social-google.a57081bd95c2519caad91216a8dba3ad.svg"},5177:function(e,n,t){var r=t(2791);n.Z=()=>{const e=(0,r.useRef)(!0);return(0,r.useEffect)((()=>()=>{e.current=!1}),[]),e}},8393:function(e,n,t){var r=t(4162),i=t(4565),s=t(6283),o=t(184);n.Z=()=>(0,o.jsxs)(r.Z,{direction:"row",justifyContent:"space-between",children:[(0,o.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),(0,o.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})},5290:function(e,n,t){var r=t(6015),i=t(3735),s=t(184);n.Z=e=>{let{children:n,...t}=e;return(0,s.jsx)(i.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...t,children:(0,s.jsx)(r.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:n})})}},3914:function(e,n,t){const r=(0,t(277).ZP)("div")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.primary.light,minHeight:"100vh"}}));n.Z=r},5418:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var r=t(3504),i=t(4142),s=t(2797),o=t(5953),a=t(4162),l=t(4565),c=t(1872),d=t(3914),m=t(5290),x=t(2791),h=t(9434),u=t(7205),Z=t(6015),j=t(1898),g=t(9365),p=t(4420),b=t(7924),f=t(8254),w=t(3811),y=t(2900),v=t(5473),P=t(1724),C=t(2506),k=t(5177),S=t(2909),I=t(3746),E=t(165),B=t(4387),R=t(184);var _=e=>{let{...n}=e;const t=(0,i.Z)(),r=(0,k.Z)(),d=(0,s.Z)(t.breakpoints.down("md")),m=(0,h.v9)((e=>e.customization)),[_,z]=(0,x.useState)(!0),[W,D]=(0,x.useState)(!1),q=()=>{D(!W)},A=e=>{e.preventDefault()};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(o.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[(0,R.jsx)(o.ZP,{item:!0,xs:12,children:(0,R.jsx)(S.Z,{children:(0,R.jsxs)(u.Z,{disableElevation:!0,fullWidth:!0,onClick:async()=>{console.error("Login")},size:"large",variant:"outlined",sx:{color:"grey.700",backgroundColor:t.palette.grey[50],borderColor:t.palette.grey[100]},children:[(0,R.jsx)(Z.Z,{sx:{mr:{xs:1,sm:2,width:20}},children:(0,R.jsx)("img",{src:B.Z,alt:"google",width:16,height:16,style:{marginRight:d?8:16}})}),"Sign in with Google"]})})}),(0,R.jsx)(o.ZP,{item:!0,xs:12,children:(0,R.jsxs)(Z.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,R.jsx)(c.Z,{sx:{flexGrow:1},orientation:"horizontal"}),(0,R.jsx)(u.Z,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${t.palette.grey[100]} !important`,color:`${t.palette.grey[900]}!important`,fontWeight:500,borderRadius:`${m.borderRadius}px`},disableRipple:!0,disabled:!0,children:"OR"}),(0,R.jsx)(c.Z,{sx:{flexGrow:1},orientation:"horizontal"})]})}),(0,R.jsx)(o.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,R.jsx)(Z.Z,{sx:{mb:2},children:(0,R.jsx)(l.Z,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),(0,R.jsx)(C.J9,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:P.Ry().shape({email:P.Z_().email("Must be a valid email").max(255).required("Email is required"),password:P.Z_().max(255).required("Password is required")}),onSubmit:async(e,n)=>{let{setErrors:t,setStatus:i,setSubmitting:s}=n;try{r.current&&(i({success:!0}),s(!1))}catch(o){console.error(o),r.current&&(i({success:!1}),t({submit:o.message}),s(!1))}},children:e=>{let{errors:r,handleBlur:i,handleChange:s,handleSubmit:o,isSubmitting:c,touched:d,values:m}=e;return(0,R.jsxs)("form",{noValidate:!0,onSubmit:o,...n,children:[(0,R.jsxs)(j.Z,{fullWidth:!0,error:Boolean(d.email&&r.email),sx:{...t.typography.customInput},children:[(0,R.jsx)(g.Z,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),(0,R.jsx)(p.Z,{id:"outlined-adornment-email-login",type:"email",value:m.email,name:"email",onBlur:i,onChange:s,label:"Email Address / Username",inputProps:{}}),d.email&&r.email&&(0,R.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:r.email})]}),(0,R.jsxs)(j.Z,{fullWidth:!0,error:Boolean(d.password&&r.password),sx:{...t.typography.customInput},children:[(0,R.jsx)(g.Z,{htmlFor:"outlined-adornment-password-login",children:"Password"}),(0,R.jsx)(p.Z,{id:"outlined-adornment-password-login",type:W?"text":"password",value:m.password,name:"password",onBlur:i,onChange:s,endAdornment:(0,R.jsx)(f.Z,{position:"end",children:(0,R.jsx)(w.Z,{"aria-label":"toggle password visibility",onClick:q,onMouseDown:A,edge:"end",size:"large",children:W?(0,R.jsx)(I.Z,{}):(0,R.jsx)(E.Z,{})})}),label:"Password",inputProps:{}}),d.password&&r.password&&(0,R.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:r.password})]}),(0,R.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[(0,R.jsx)(y.Z,{control:(0,R.jsx)(v.Z,{checked:_,onChange:e=>z(e.target.checked),name:"checked",color:"primary"}),label:"Remember me"}),(0,R.jsx)(l.Z,{variant:"subtitle1",color:"secondary",sx:{textDecoration:"none",cursor:"pointer"},children:"Forgot Password?"})]}),r.submit&&(0,R.jsx)(Z.Z,{sx:{mt:3},children:(0,R.jsx)(b.Z,{error:!0,children:r.submit})}),(0,R.jsx)(Z.Z,{sx:{mt:2},children:(0,R.jsx)(S.Z,{children:(0,R.jsx)(u.Z,{disableElevation:!0,disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]})}})]})},z=t(4904),W=t(8393);var D=()=>{const e=(0,i.Z)(),n=(0,s.Z)(e.breakpoints.down("md"));return(0,R.jsx)(d.Z,{children:(0,R.jsxs)(o.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,R.jsx)(o.ZP,{item:!0,xs:12,children:(0,R.jsx)(o.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,R.jsx)(o.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,R.jsx)(m.Z,{children:(0,R.jsxs)(o.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,R.jsx)(o.ZP,{item:!0,sx:{mb:3},children:(0,R.jsx)(r.rU,{to:"#",children:(0,R.jsx)(z.Z,{})})}),(0,R.jsx)(o.ZP,{item:!0,xs:12,children:(0,R.jsx)(o.ZP,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,R.jsx)(o.ZP,{item:!0,children:(0,R.jsxs)(a.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,R.jsx)(l.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Hi, Welcome Back"}),(0,R.jsx)(l.Z,{variant:"caption",fontSize:"16px",textAlign:n?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,R.jsx)(o.ZP,{item:!0,xs:12,children:(0,R.jsx)(_,{})}),(0,R.jsx)(o.ZP,{item:!0,xs:12,children:(0,R.jsx)(c.Z,{})}),(0,R.jsx)(o.ZP,{item:!0,xs:12,children:(0,R.jsx)(o.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,R.jsx)(l.Z,{component:r.rU,to:"/pages/register/register3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),(0,R.jsx)(o.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,R.jsx)(W.Z,{})})]})})}}}]);
//# sourceMappingURL=418.ebef4aea.chunk.js.map