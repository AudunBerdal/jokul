(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{W3J2:function(e,o,t){},ZQVk:function(e,o,t){},ohc0:function(e,o,t){var n,l,a;l=[],void 0===(a="function"==typeof(n=function(){return function e(o,t,n){var l,a,r=window,s="application/octet-stream",i=n||s,d=o,g=!t&&!n&&d,m=document.createElement("a"),b=function(e){return String(e)},c=r.Blob||r.MozBlob||r.WebKitBlob||b,p=t||"download";if(c=c.call?c.bind(r):Blob,"true"===String(this)&&(i=(d=[d,i])[0],d=d[1]),g&&g.length<2048&&(p=g.split("/").pop().split("?")[0],m.href=g,-1!==m.href.indexOf(g))){var u=new XMLHttpRequest;return u.open("GET",g,!0),u.responseType="blob",u.onload=function(o){e(o.target.response,p,s)},setTimeout((function(){u.send()}),0),u}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(d)){if(!(d.length>2096103.424&&c!==b))return navigator.msSaveBlob?navigator.msSaveBlob(y(d),p):j(d);i=(d=y(d)).type||s}else if(/([\x80-\xff])/.test(d)){for(var k=0,v=new Uint8Array(d.length),f=v.length;k<f;++k)v[k]=d.charCodeAt(k);d=new c([v],{type:i})}function y(e){for(var o=e.split(/[:;,]/),t=o[1],n=("base64"==o[2]?atob:decodeURIComponent)(o.pop()),l=n.length,a=0,r=new Uint8Array(l);a<l;++a)r[a]=n.charCodeAt(a);return new c([r],{type:t})}function j(e,o){if("download"in m)return m.href=e,m.setAttribute("download",p),m.className="download-js-link",m.innerHTML="downloading...",m.style.display="none",document.body.appendChild(m),setTimeout((function(){m.click(),document.body.removeChild(m),!0===o&&setTimeout((function(){r.URL.revokeObjectURL(m.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,s)),window.open(e)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=e),!0;var t=document.createElement("iframe");document.body.appendChild(t),!o&&/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,s)),t.src=e,setTimeout((function(){document.body.removeChild(t)}),333)}if(l=d instanceof c?d:new c([d],{type:i}),navigator.msSaveBlob)return navigator.msSaveBlob(l,p);if(r.URL)j(r.URL.createObjectURL(l),!0);else{if("string"==typeof l||l.constructor===b)try{return j("data:"+i+";base64,"+r.btoa(l))}catch(h){return j("data:"+i+","+encodeURIComponent(l))}(a=new FileReader).onload=function(e){j(this.result)},a.readAsDataURL(l)}return!0}})?n.apply(o,l):n)||(e.exports=a)},qoUQ:function(e,o,t){"use strict";t.r(o),t.d(o,"_frontmatter",(function(){return k})),t.d(o,"default",(function(){return y}));var n=t("+I+c"),l=t("mXGw"),a=t.n(l),r=t("/FXl"),s=t("7XvJ"),i=t("UFUu"),d=t("ohc0"),g=t.n(d),m=t("8Jek"),b=t.n(m),c=t("Wbzz");t("W3J2");function p(e){var o=e.asset,t=void 0===o?"":o,n=e.name,l=e.darkbg,r=void 0!==l&&l,s=b()({"jkl-portal-downloadasset":!0,"jkl-portal-downloadasset--dark-bg":r}),i=b()({"jkl-portal-downloadasset__name":!0,"jkl-portal-downloadasset__name--dark":r});return a.a.createElement("div",{className:s},a.a.createElement("button",{className:"jkl-portal-downloadasset__button",onClick:function(e){e.preventDefault(),confirm("Vil du laste ned "+n+"?")&&g()(t)}},a.a.createElement("img",{className:"jkl-portal-downloadasset__image",src:Object(c.withPrefix)(t),alt:"Fil "+n}),a.a.createElement("span",{className:i},n)))}t("ZQVk");var u=function(e){var o=e.className,t=e.children,n=e.size,l=void 0===n?"medium":n,r=b()({"jkl-portal-grid":!0,"jkl-portal-grid--medium":"medium"===l},o);return a.a.createElement("div",{className:r},a.a.Children.map(t,(function(e){return a.a.createElement("div",{className:"jkl-portal-grid__col"},e)})))},k={},v={_frontmatter:k},f=s.a;function y(e){var o=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)(f,Object.assign({},v,t,{components:o,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Logo"),Object(r.b)("p",null,"Logoen er navnetrekket vårt. Vi skal i utgangspunktet bruke logoen alene, slik at den får fokus."),Object(r.b)("p",null,"I tillegg til logoen har vi et logosymbol, som er utledet fra «F-en» i logoen. F-en tipper mot høyre og former en tinde. Logosymbolet passer god til små flater, for å skape et tydeligere visuelt uttrykk. Det gir oss også større fleksibilitet i logobruk."),Object(r.b)(u,{mdxType:"Grid"},Object(r.b)(i.a,{image:"/assets/documentation/logo/logo-default.svg",type:"do",description:"Logo",mdxType:"DoDontExample"}),Object(r.b)(i.a,{image:"/assets/documentation/logo/logo-symbol.svg",type:"do",description:"Logosymbol",mdxType:"DoDontExample"})),Object(r.b)("h2",null,"Slik bruker du logoen"),Object(r.b)("h3",null,"Avstand rundt"),Object(r.b)("p",null,"Avstanden rundt logoen og logosymbolet bør være minst halvparten av Fremtind-F-ens høyde. Under logoene bør avstanden være minst 3/4 (0,75 %) av F-ens høyde. Ikke sett logo eller logosymbol i en ramme, de skal stå mest mulig fritt på flaten."),Object(r.b)(i.a,{fullWidth:!0,image:"/assets/documentation/logo/logo-described.svg",type:"do",description:"Logo og logosymbol skal enten være sorte eller hvite med god kontrast til bakgrunnen.",mdxType:"DoDontExample"}),Object(r.b)("h3",null,"Avstand mellom logo og logosymbol"),Object(r.b)("p",null,"Avstanden rundt logoen og Logoen og logosymbolet skal aldri stå så nær hverandre at de oppfattes som ett symbol. Hvis vi skal bruke dem sammen, skal de stå tydelig atskilt.\nLogosymbolet skal alltid stå i toppen og logoen i bunnen, dersom de brukes på samme flate. Logosymbolet bør være minst halvparten av Fremtind-F-ens høyde. Under logoene bør avstanden være minst 3/4 (75 %) av F-ens høyde. Ikke sett logo eller logosymbol i en ramme, de skal stå mest mulig fritt på flaten."),Object(r.b)(u,{mdxType:"Grid"},Object(r.b)(i.a,{image:"/assets/documentation/logo/logo-correct-use.svg",type:"do",description:"Logosymbolet skal stå i toppen og logoen i bunnen, hvis de brukes på samme flate",mdxType:"DoDontExample"}),Object(r.b)(i.a,{image:"/assets/documentation/logo/logo-wrong-use.svg",type:"dont",description:"Ikke sett logo og logosymbol sammen. Benytt en alene.",mdxType:"DoDontExample"})),Object(r.b)("h3",null,"Farger"),Object(r.b)("p",null,"Logo og logosymbol skal brukes i svart eller hvitt—ikke andre farger. Pass på at logoen alltid har god kontrast mot bakgrunnsfargen med tanke på kravene til universell utforming."),Object(r.b)(u,{mdxType:"Grid"},Object(r.b)(i.a,{image:"/assets/documentation/logo/logo-correct-color.svg",type:"do",description:"Logo og logosymbol skal enten være sorte eller hvite med god kontrast til bakgrunnen.",mdxType:"DoDontExample"}),Object(r.b)(i.a,{image:"/assets/documentation/logo/logo-wrong-color.svg",type:"dont",description:"Logo eller logosymbol i annen farge enn svart eller hvit",mdxType:"DoDontExample"})),Object(r.b)("h3",null,"Proporsjoner"),Object(r.b)("p",null,"Logoen skal alltid beholde sine opprinnelige proporsjoner—ikke strekk den. Tips: Hold Shift inne når du skal skalere logo og bilder, så blir proporsjonene riktige."),Object(r.b)("h3",null,"Skygge og relieff"),Object(r.b)("p",null,"Vi skal aldri legge skygge eller relieffeffekter på eller under logoen."),Object(r.b)(u,{mdxType:"Grid"},Object(r.b)(i.a,{image:"/assets/documentation/logo/logo-wrong-shadow.svg",type:"dont",description:"Ikke bruk skygge eller relieffeffekter på logo og logosymbol",mdxType:"DoDontExample"})),Object(r.b)("h2",null,"Her finner du logooriginalene"),Object(r.b)("p",null,"Logoen kan kun benyttes på produkter som representerer Fremtind. Tredjeparter må også ha godkjenning før bruk av logoen på produkter som skal lages for oss."),Object(r.b)("br",null),Object(r.b)(p,{name:"Fremtind_Logo_Fremtind_Logo_Negative.svg",asset:"/assets/downloads/Fremtind_Logo_Fremtind_Logo_Negative.svg",darkbg:!0,mdxType:"DownloadAsset"}),Object(r.b)(p,{name:"Fremtind_Logo_Fremtind_Logo_Positive.svg",asset:"/assets/downloads/Fremtind_Logo_Fremtind_Logo_Positive.svg",mdxType:"DownloadAsset"}),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(p,{name:"Fremtind_Logo_Fremtind_Logo_Symbol_Negative.svg",asset:"/assets/downloads/Fremtind_Logo_Fremtind_Logo_Symbol_Negative.svg",darkbg:!0,mdxType:"DownloadAsset"}),Object(r.b)(p,{name:"Fremtind_Logo_Fremtind_Logo_Symbol_Positive.svg",asset:"/assets/downloads/Fremtind_Logo_Fremtind_Logo_Symbol_Positive.svg",mdxType:"DownloadAsset"}))}y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-profile-logo-mdx-f3b30c348e97d7e6f97f.js.map