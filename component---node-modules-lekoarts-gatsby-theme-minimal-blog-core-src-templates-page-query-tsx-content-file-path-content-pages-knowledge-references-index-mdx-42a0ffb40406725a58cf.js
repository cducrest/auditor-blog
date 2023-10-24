"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[934],{1873:function(e,t,n){n.d(t,{F:function(){return o},Z:function(){return u}});var l=n(7294),r=n(8733),a=n(795),i=n(6e3),c=n(8871);var s=e=>{let{data:{page:t},children:n}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("section",{sx:{my:5,variant:"layout.content"}},n))};const o=e=>{let{data:{page:t}}=e;return(0,r.tZ)(c.Z,{title:t.title,description:t.excerpt})};function u(e){let{...t}=e;return l.createElement(s,t)}},8871:function(e,t,n){var l=n(7294),r=n(1883),a=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:s=null,canonicalUrl:o=""}=e;const u=(0,a.Z)(),{siteTitle:m,siteTitleAlt:h,siteUrl:d,siteDescription:g,siteImage:p,author:E,siteLanguage:f}=u,b={title:t?t+" | "+m:h,description:n||g,url:""+d+(i||""),image:""+d+(c||p)};return l.createElement(l.Fragment,null,l.createElement("html",{lang:f}),l.createElement("title",null,b.title),l.createElement("meta",{name:"description",content:b.description}),l.createElement("meta",{name:"image",content:b.image}),l.createElement("meta",{property:"og:title",content:b.title}),l.createElement("meta",{property:"og:url",content:b.url}),l.createElement("meta",{property:"og:description",content:b.description}),l.createElement("meta",{property:"og:image",content:b.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:b.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:b.title}),l.createElement("meta",{name:"twitter:url",content:b.url}),l.createElement("meta",{name:"twitter:description",content:b.description}),l.createElement("meta",{name:"twitter:image",content:b.image}),l.createElement("meta",{name:"twitter:image:alt",content:b.description}),l.createElement("meta",{name:"twitter:creator",content:E}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),o?l.createElement("link",{rel:"canonical",href:o}):null,s)}},376:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return s}});var l=n(7294),r=n(1151);function a(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",a:"a",code:"code"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"The purpose of this page is to store a short list of references of judging decisions, vulnerabilities, or explanations that I found noticeable.\nI store them here to be used when reporting issues for future contests."),"\n",l.createElement(t.h2,null,"Judging decisions"),"\n",l.createElement(t.h3,null,"Issues accepted as valid when they should not have"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Borrower prevent liquidation by front-running and slightly increasing collateral: ",l.createElement(t.a,{href:"https://github.com/sherlock-audit/2023-03-taurus-judging/issues/12"},"https://github.com/sherlock-audit/2023-03-taurus-judging/issues/12"),"."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Requiring slippage protection on oracle price changes: ",l.createElement(t.a,{href:"https://github.com/sherlock-audit/2023-03-olympus-judging/issues/3"},"https://github.com/sherlock-audit/2023-03-olympus-judging/issues/3")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Accounting of unused value wrong: ",l.createElement(t.a,{href:"https://github.com/sherlock-audit/2023-02-blueberry-judging/issues/137"},"https://github.com/sherlock-audit/2023-02-blueberry-judging/issues/137")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Bugs outside of scope impacting in-scope contracts: ",l.createElement(t.a,{href:"https://github.com/sherlock-audit/2023-03-teller-judging/issues/328#issuecomment-1582380098"},"https://github.com/sherlock-audit/2023-03-teller-judging/issues/328#issuecomment-1582380098")),"\n"),"\n"),"\n",l.createElement(t.h3,null,"Change of severity due to different exploit"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"An issue was de-duplicated and changed severity due to different understanding of the exploit: ",l.createElement(t.a,{href:"https://github.com/sherlock-audit/2023-02-hats-judging/issues/41"},"https://github.com/sherlock-audit/2023-02-hats-judging/issues/41"),",\n",l.createElement(t.a,{href:"https://github.com/sherlock-audit/2023-03-teller-judging/issues/26"},"https://github.com/sherlock-audit/2023-03-teller-judging/issues/26")),"\n"),"\n",l.createElement(t.h3,null,"Issues rejected when they should be valid"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Bug in contracts in scope that impact out of scope contract: ",l.createElement(t.a,{href:"https://github.com/sherlock-audit/2023-03-teller-judging/issues/119#issuecomment-1580157742"},"https://github.com/sherlock-audit/2023-03-teller-judging/issues/119#issuecomment-1580157742")),"\n"),"\n",l.createElement(t.h2,null,"Vulnerabilities"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Chainlink oracle check for outdated data: ",l.createElement(t.a,{href:"https://github.com/sherlock-audit/2023-04-blueberry-judging/issues/43"},"https://github.com/sherlock-audit/2023-04-blueberry-judging/issues/43")," and ",l.createElement(t.a,{href:"https://github.com/sherlock-audit/2023-02-blueberry-judging/issues/94"},"https://github.com/sherlock-audit/2023-02-blueberry-judging/issues/94")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Balancer's read-only reentrancy: ",l.createElement(t.a,{href:"https://github.com/sherlock-audit/2023-04-blueberry-judging/issues/141"},"https://github.com/sherlock-audit/2023-04-blueberry-judging/issues/141")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"External calls to untrusted contracts can use more than 63/64th of the block gas limit to prevent correct execution of remainder of transaction\nif it requires more than 1/64th of the block gas limit. (",l.createElement(t.a,{href:"https://twitter.com/0xOwenThurm/status/1618417556683108352"},"see thread"),")"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"The ",l.createElement(t.code,null,"s")," value of a ",l.createElement(t.code,null,"(v, r, s)")," signature can be manipulated to make a signature that recovers to the same address if the range of s is not checked\n(",l.createElement(t.a,{href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/1642b6639b93e3b97be163d49827e1f56b81ca11/contracts/utils/cryptography/ECDSA.sol#L124"},"see OpenZeppelin"),").\nThe signature can be used to recover a different message for a different public key."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"attempting to transfer zero token with ERC20 ",l.createElement(t.a,{href:"https://github.com/sherlock-audit/2023-03-teller-judging/issues/177"},"https://github.com/sherlock-audit/2023-03-teller-judging/issues/177")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"abuse the fact that ERC721 token recipients needs to implement ",l.createElement(t.code,null,"onERC721Received()")," to receive tokens"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Compound's comptroller ",l.createElement(t.code,null,"enterMarket")," and ",l.createElement(t.code,null,"exitMarket")," do not revert on error: ",l.createElement(t.a,{href:"https://consensys.net/diligence/audits/2021/03/defi-saver/#error-codes-of-compounds-comptrollerentermarket-comptrollerexitmarket-are-not-checked"},"https://consensys.net/diligence/audits/2021/03/defi-saver/#error-codes-of-compounds-comptrollerentermarket-comptrollerexitmarket-are-not-checked")),"\n"),"\n"),"\n",l.createElement(t.h2,null,"Weird tokens"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"USDT can introduce fee-on-transfer: ",l.createElement(t.a,{href:"https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7#code"},"https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7#code")),"\n",l.createElement(t.li,null,"YAMv2 has 24 decimals: ",l.createElement(t.a,{href:"https://etherscan.io/token/0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a"},"https://etherscan.io/token/0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a")),"\n",l.createElement(t.li,null,"Some ERC20 have two addresses (never found one)"),"\n"),"\n",l.createElement(t.h2,null,"Vulnerability categories to remember"),"\n",l.createElement(t.p,null,"When auditing a protocol remember to check for:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Price Oracle Manipulation"),"\n",l.createElement(t.li,null,"Erroneous Accounting"),"\n",l.createElement(t.li,null,"ID Uniqueness Violations"),"\n",l.createElement(t.li,null,"Inconsistent State Updates"),"\n",l.createElement(t.li,null,"Privilege Escalation"),"\n",l.createElement(t.li,null,"Atomicity Violations"),"\n",l.createElement(t.li,null,"Use of safeTransfer for ERC20"),"\n",l.createElement(t.li,null,"Fee-on-transfer / rebase token"),"\n",l.createElement(t.li,null,"Blacklist tokens"),"\n",l.createElement(t.li,null,"Front/back-running transactions"),"\n",l.createElement(t.li,null,"Signature malleability"),"\n",l.createElement(t.li,null,"Parallel data structures"),"\n",l.createElement(t.li,null,"Asymetrical code"),"\n",l.createElement(t.li,null,"Use of unsafe delete"),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},c=n(1873);function s(e){return l.createElement(c.Z,e,l.createElement(i,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-page-query-tsx-content-file-path-content-pages-knowledge-references-index-mdx-42a0ffb40406725a58cf.js.map