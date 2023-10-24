"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[28],{4765:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return d}});var a=n(7294),l=n(8733),o=n(795),r=n(6e3),i=n(6799),c=n(8871);var s=e=>{let{post:t}=e;return null};const A=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var m=e=>{let{data:{post:t},children:n}=e;return(0,l.tZ)(r.Z,null,(0,l.tZ)(o.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(a.Fragment,null," — ",(0,l.tZ)(i.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:A.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(s,{post:t}))};const u=e=>{var t,n,a;let{data:{post:o}}=e;return(0,l.tZ)(c.Z,{title:o.title,description:o.description?o.description:o.excerpt,image:o.banner?null===(t=o.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:o.slug,canonicalUrl:o.canonicalUrl})};function d(e){let{...t}=e;return a.createElement(m,t)}},6799:function(e,t,n){var a=n(8733),l=n(7294),o=n(1883),r=n(3494),i=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,r.Z)();return(0,a.tZ)(l.Fragment,null,t.map(((e,t)=>(0,a.tZ)(l.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(o.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var a=n(7294),l=n(1883),o=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:r="",image:i="",children:c=null,canonicalUrl:s=""}=e;const A=(0,o.Z)(),{siteTitle:m,siteTitleAlt:u,siteUrl:d,siteDescription:h,siteImage:p,author:g,siteLanguage:E}=A,b={title:t?t+" | "+m:u,description:n||h,url:""+d+(r||""),image:""+d+(i||p)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:E}),a.createElement("title",null,b.title),a.createElement("meta",{name:"description",content:b.description}),a.createElement("meta",{name:"image",content:b.image}),a.createElement("meta",{property:"og:title",content:b.title}),a.createElement("meta",{property:"og:url",content:b.url}),a.createElement("meta",{property:"og:description",content:b.description}),a.createElement("meta",{property:"og:image",content:b.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:b.title}),a.createElement("meta",{name:"twitter:url",content:b.url}),a.createElement("meta",{name:"twitter:description",content:b.description}),a.createElement("meta",{name:"twitter:image",content:b.image}),a.createElement("meta",{name:"twitter:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:creator",content:g}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),s?a.createElement("link",{rel:"canonical",href:s}):null,c)}},4489:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return c}});var a=n(7294),l=n(1151);function o(e){const t=Object.assign({span:"span",p:"p",a:"a",h1:"h1",h2:"h2",code:"code",hr:"hr"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 400px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBA//EABYBAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAABqtqo4hgAH//EABoQAQACAwEAAAAAAAAAAAAAAAECEQADIDL/2gAIAQEAAQUCC1ihmv0UR4//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAbEAABBAMAAAAAAAAAAAAAAAAhAAECECAiUf/aAAgBAQAGPwIWQpbNzH//xAAbEAEAAgIDAAAAAAAAAAAAAAABESEAECBRYf/aAAgBAQABPyFABK5KKTxmNILgIk4LcWh3x//aAAwDAQACAAMAAAAQcDDD/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHRABAQABBAMAAAAAAAAAAAAAAREhABAxYSBBkf/aAAgBAQABPxBMiIB70+cjFOnc42yRKJ4pMd6lILkEUafMeP8A/9k=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="olympusDAO"\n        title=""\n        src="/auditor-blog/static/1787cb9164449ac705caf33048739784/27ec1/olympusDAO.jpg"\n        srcset="/auditor-blog/static/1787cb9164449ac705caf33048739784/46946/olympusDAO.jpg 240w,\n/auditor-blog/static/1787cb9164449ac705caf33048739784/27ec1/olympusDAO.jpg 400w"\n        sizes="(max-width: 400px) 100vw, 400px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.p,null,"This contest was an update following a previous contest on Sherlock in which I also participated.\nThe code was reviewed as part of the ",a.createElement(t.a,{href:"https://app.sherlock.xyz/audits/contests/60"},"Sherlock contest"),"."),"\n",a.createElement(t.p,null,"I ranked 2nd out of 68 participants in this audit. I found 1 high and 1 medium vulnerabilities, I present my findings here."),"\n",a.createElement(t.h1,null,"High: Abuse decreaseTotalLp for DOS"),"\n",a.createElement(t.h2,null,"Summary"),"\n",a.createElement(t.p,null,"The function ",a.createElement(t.code,null,"decreaseTotalLp")," is called on withdraw of vaults and reverts if amount withdrawn exceeds total LP stored by the vault manager. This assumes that the withdrawn LP have been deposited by the user before, which may be wrong."),"\n",a.createElement(t.p,null,"A user can LP token on Balancer and reward tokens on Aura, transfer them to the vault (without using the ",a.createElement(t.code,null,"deposit()")," function) and ",a.createElement(t.code,null,"withdraw()")," them to break accounting. If the user lowers ",a.createElement(t.code,null,"totalLp")," to 0, no other user will be able to withdraw their LP."),"\n",a.createElement(t.h2,null,"Vulnerability Detail"),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"withdraw()")," decreases totalLP on the manager:\n",a.createElement(t.a,{href:"https://github.com/sherlock-audit/2023-03-olympus/blob/main/sherlock-olympus/src/policies/BoostedLiquidity/BLVaultLido.sol#L218"},"https://github.com/sherlock-audit/2023-03-olympus/blob/main/sherlock-olympus/src/policies/BoostedLiquidity/BLVaultLido.sol#L218")),"\n",a.createElement(t.p,null,"The totalLP tracking assume withdrawn LP were once deposited and reverts on unexpected value:\n",a.createElement(t.a,{href:"https://github.com/sherlock-audit/2023-03-olympus/blob/main/sherlock-olympus/src/policies/BoostedLiquidity/BLVaultManagerLido.sol#L272-L280"},"https://github.com/sherlock-audit/2023-03-olympus/blob/main/sherlock-olympus/src/policies/BoostedLiquidity/BLVaultManagerLido.sol#L272-L280")),"\n",a.createElement(t.p,null,"Aura reward pool",a.createElement(t.code,null,"stakeFor()")," can be used to increase ",a.createElement(t.code,null,"_balances[vault]"),", allowing the vault to withdraw from aura without having deposited:\n",a.createElement(t.a,{href:"https://github.com/aurafinance/convex-platform/blob/c17d05039f8ed5cda8fdebb72e0a17f0119521b9/contracts/contracts/BaseRewardPool.sol#L196-L227"},"https://github.com/aurafinance/convex-platform/blob/c17d05039f8ed5cda8fdebb72e0a17f0119521b9/contracts/contracts/BaseRewardPool.sol#L196-L227")),"\n",a.createElement(t.p,null,"Withdraw function of Aura reward checks for ",a.createElement(t.code,null,"_balances[msg.sender]")," and calls ",a.createElement(t.code,null,"withdrawTo")," on Booser:\n",a.createElement(t.a,{href:"https://github.com/aurafinance/convex-platform/blob/c17d05039f8ed5cda8fdebb72e0a17f0119521b9/contracts/contracts/BaseRewardPool.sol#L260-L285"},"https://github.com/aurafinance/convex-platform/blob/c17d05039f8ed5cda8fdebb72e0a17f0119521b9/contracts/contracts/BaseRewardPool.sol#L260-L285")),"\n",a.createElement(t.p,null,"Withdraw function of Booster (called by ",a.createElement(t.code,null,"withdrawTo"),") burns the pool token, which could have been transferred by the user:\n",a.createElement(t.a,{href:"https://github.com/aurafinance/convex-platform/blob/c17d05039f8ed5cda8fdebb72e0a17f0119521b9/contracts/contracts/Booster.sol#L483-L509"},"https://github.com/aurafinance/convex-platform/blob/c17d05039f8ed5cda8fdebb72e0a17f0119521b9/contracts/contracts/Booster.sol#L483-L509")),"\n",a.createElement(t.p,null,"The rest of the ",a.createElement(t.code,null,"wihtdraw()")," function of BLVaultLido will run smoothly without specific care from the attacker, it exits the balancer pool using the LP token received from Aura and repays the wstETH / OHM."),"\n",a.createElement(t.h2,null,"Impact"),"\n",a.createElement(t.p,null,"Users can break the tracking of ",a.createElement(t.code,null,"totalLp")," in the vault manager, preventing other users to withdraw."),"\n",a.createElement(t.p,null,"The cost of the attack to the user is limited, they mint LP tokens, stake them, and eventually get wstETH back. They lose 50% of the value of the withdraw since they receive only the wstETH and not the OHM (which they had to LP). However, it is sufficient that a user perform this attack with a value of ",a.createElement(t.code,null,"1")," with negligible costs to break accounting."),"\n",a.createElement(t.h2,null,"Recommendation"),"\n",a.createElement(t.p,null,"Add tracking of deposits and withdraw within user vaults so that they can only withdraw what they deposited."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h1,null,"Medium: SetLimit does not take into account burned OHM"),"\n",a.createElement(t.h2,null,"Summary"),"\n",a.createElement(t.p,null,"The function ",a.createElement(t.code,null,"setLimit()")," may not be able to sufficiently restrict mint ability of manager."),"\n",a.createElement(t.h2,null,"Vulnerability Detail"),"\n",a.createElement(t.p,null,"The ",a.createElement(t.code,null,"setLimit()")," function reverts when ",a.createElement(t.code,null,"newLimit_ < deployedOhm"),", mintOhmToVault will revert if ",a.createElement(t.code,null,"deployedOhm + amount_ > ohmLimit + circulatingOhmBurned"),". If the value of ",a.createElement(t.code,null,"circulatingOhmBurned")," is high, and the admin can only set the limit above ",a.createElement(t.code,null,"deployedOhm"),", they could end up in a state where they cannot limit the amount the vault is allowed to burn sufficiently. I.e. the vault is always able to mint at least ",a.createElement(t.code,null,"circulatingOhmBurned")," new tokens."),"\n",a.createElement(t.p,null,"Note that ",a.createElement(t.code,null,"circulatingOhmBurned")," is never lowered (even when minting new tokens), so this value could grow arbitrarily high."),"\n",a.createElement(t.h2,null,"Impact"),"\n",a.createElement(t.p,null,"Lack of control of admin on mint ability of manager."),"\n",a.createElement(t.h2,null,"Code Snippet"),"\n",a.createElement(t.p,null,"SetLimit function:\n",a.createElement(t.a,{href:"https://github.com/sherlock-audit/2023-03-olympus/blob/main/sherlock-olympus/src/policies/BoostedLiquidity/BLVaultManagerLido.sol#L480-L483"},"https://github.com/sherlock-audit/2023-03-olympus/blob/main/sherlock-olympus/src/policies/BoostedLiquidity/BLVaultManagerLido.sol#L480-L483")),"\n",a.createElement(t.h2,null,"Recommendation"),"\n",a.createElement(t.p,null,"Use similar restrictions as in ",a.createElement(t.code,null,"mintOhmToVault()")," for ",a.createElement(t.code,null,"setLimit")," or lower ",a.createElement(t.code,null,"circulatingOhmBurned")," when minting new OHM."))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)},i=n(4765);function c(e){return a.createElement(i.Z,e,a.createElement(r,e))}i.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-olympus-dao-update-report-index-mdx-5a0ff33b1c647e1a36f3.js.map