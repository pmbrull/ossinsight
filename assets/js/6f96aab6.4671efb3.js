"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6974,8465],{819:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(67294),l=a(70754),i=a(22841),r=a(81719),c=a(55118),s=a(61802),o=a(84191),d=a(71406);function m(){const{userInfo:e,validating:t,validated:a,mutate:l}=(0,d.Ey)(),[r,m]=(0,n.useState)(!1),u=(0,n.useMemo)((()=>(0,s.N6)(null==e?void 0:e.emailGetUpdates)),[null==e?void 0:e.emailGetUpdates]),p=(0,n.useCallback)(((e,t)=>{a&&!r&&(m(!0),o.po.put("/user/email-updates",{enable:t},{withCredentials:!0}).then((async e=>await l((t=>(t&&Object.assign(t,e),t)),{revalidate:!1}))).finally((()=>m(!1))))}),[a,r,e]),E=!a||r,b=t||r,g=n.createElement(h,{loading:b,disabled:E});return n.createElement(i.Z,{control:n.createElement(c.Z,{checked:u,disabled:E,icon:g,checkedIcon:g,onChange:p}),label:"Email Notification"})}const u=(0,r.ZP)("span")`
  background-color: ${e=>{let{theme:t,disabled:a}=e;return a?t.palette.grey.A700:t.palette.primary.main}};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;function h(e){let{loading:t,disabled:a}=e;return n.createElement(u,{disabled:a},t&&n.createElement(l.Z,{size:16,color:"primary"}))}},99869:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var n=a(88242),l=a(67294),i=a(71073),r=a(44731),c=a(61953),s=a(54225),o=a(70754),d=a(36336),m=a(55343),u=a(32631),h=a(80562),p=a(85214),E=a(81284),b=a(19594),g=a(61702),y=a(91655),v=a(29630),Z=a(84191),f=a(54235),w=a(85893);const x=(0,f.Z)((0,w.jsx)("path",{d:"M18.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm2 4h-4v-1h4v1zm-6.95 0c-.02-.17-.05-.33-.05-.5 0-2.76 2.24-5 5-5 .92 0 1.76.26 2.5.69V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h8.55zM12 10.5 5 7V5l7 3.5L19 5v2l-7 3.5z"}),"Unsubscribe");var k=a(819),C=a(49784),I=a(88100);const S=new Intl.DateTimeFormat("en",{dateStyle:"medium",timeStyle:"medium"});function z(){const{isAuthenticated:e,isLoading:t,loginWithPopup:a}=(0,I.D3)();return l.createElement(n.Z,null,l.createElement(d.Z,{maxWidth:"sm",sx:{pt:6,pb:12}},l.createElement(v.Z,{variant:"h1",mb:4},"My Subscriptions"),!e&&l.createElement(s.Z,{variant:"contained",disabled:t,startIcon:t&&l.createElement(o.Z,{size:12}),onClick:a},"Sign in"),e&&l.createElement(A,null)))}function A(){const{data:e=[],mutate:t,isValidating:a}=(0,i.Pd)(),{success:n,displayError:s}=(0,C.zn)(),{getAccessTokenSilently:o}=(0,I.D3)(),d=(0,l.useCallback)((async function(e){const a=await o();Z.po.put(`/repos/${e}/unsubscribe`,void 0,{withCredentials:!0,oToken:a}).then((async()=>await t())).then((()=>n(`Cancelled getting updates from ${e}`))).catch(s)}),[t]);return l.createElement(l.Fragment,null,l.createElement(m.Z,null,l.createElement(k.default,null),l.createElement(u.Z,null,"Control whether to receive emails from OSS Insight")),!a&&0===e.length&&l.createElement(v.Z,{variant:"h2",sx:{mt:4},color:"text.disabled"},"You have no subscriptions yet"),l.createElement(p.Z,{sx:{mt:4},subheader:l.createElement(c.Z,null,l.createElement(v.Z,{variant:"h3",mb:1},"Manage the subscribed repositories list"),l.createElement(v.Z,{variant:"body2"},"If you unsubscribe from a repository, we will no longer send emails related to that repository"))},a&&0===e.length&&[0,1,2,3,4].map((e=>l.createElement(E.ZP,{key:e},l.createElement(b.Z,null,l.createElement(y.Z,{width:40,height:40,variant:"circular"})),l.createElement(g.Z,{primary:l.createElement(y.Z,{variant:"text",width:"40%"}),secondary:l.createElement(y.Z,{variant:"text",width:"30%"})})))),e.map((e=>l.createElement(E.ZP,{key:e.repoId,secondaryAction:l.createElement(h.Z,{onClick:async()=>await d(e.repoName)},l.createElement(x,null))},l.createElement(b.Z,null,l.createElement(r.Z,{src:`https://github.com/${e.repoName.split("/")[0]}.png`,sx:{background:"white",borderRadius:"4px",padding:"2px"}})),l.createElement(g.Z,{primary:e.repoName,secondary:S.format(new Date(e.subscribedAt))}))))))}},88242:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(87462),l=a(63016),i=a(67294),r=a(61802),c=a(61953);function s(e){let{children:t,header:a,dark:s,sideWidth:o,Side:d,footer:m=!0,...u}=e;return(0,i.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),i.createElement(l.Z,(0,n.Z)({},u,{customFooter:m,header:a,sideWidth:o,side:o&&(0,r.nf)(d)?i.createElement(c.Z,{component:"aside",width:o,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},i.createElement(c.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},i.createElement(d,null))):void 0}),i.createElement("div",{hidden:!0,style:{height:72}}),i.createElement("div",{style:{paddingLeft:o,paddingRight:o}},i.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t)))}}}]);