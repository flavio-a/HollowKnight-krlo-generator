(()=>{"use strict";var e={710:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(601),a=r.n(n),i=r(314),o=r.n(i)()(a());o.push([e.id,"body{background-color:#2f3136;color:#dcddde;min-height:100vh}",""]);const l=o},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&o[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},o=[],l=0;l<e.length;l++){var s=e[l],c=n.base?s[0]+n.base:s[0],u=i[c]||0,_="".concat(c," ").concat(u);i[c]=u+1;var d=r(_),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var v=a(f,n);n.byIndex=l,t.splice(l,0,{identifier:_,updater:v,references:1})}o.push(_)}return o}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var i=n(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var l=r(i[o]);t[l].references--}for(var s=n(e,a),c=0;c<i.length;c++){var u=r(i[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;var n=r(72),a=r.n(n),i=r(825),o=r.n(i),l=r(659),s=r.n(l),c=r(56),u=r.n(c),_=r(540),d=r.n(_),f=r(113),v=r.n(f),p=r(710),g={};function L(e,t,r,n){var a=Error.call(this,e);return Object.setPrototypeOf&&Object.setPrototypeOf(a,L.prototype),a.expected=t,a.found=r,a.location=n,a.name="SyntaxError",a}function m(e,t,r){return r=r||" ",e.length>t?e:(t-=e.length,e+(r+=r.repeat(t)).slice(0,t))}function h(e,t){var r,n,a,i,o={},l=(t=void 0!==t?t:{}).grammarSource,s={Rules:ce},c=ce,u="\n",_="#",d=":",f="difficulty >= ",v="+",p="||",g="(",m=")",h=/^[^\n]/,y=/^[a-zA-Z_\-']/,w=/^[0-9]/,S=/^[ \t\n\r]/,k=ne("\n",!1),x=ne("#",!1),C=ae(["\n"],!0,!1),b=ne(":",!1),P=ae([["a","z"],["A","Z"],"_","-","'"],!1,!1),A=ne("difficulty >= ",!1),G=ie("integer"),M=ae([["0","9"]],!1,!1),R=ne("+",!1),E=ne("||",!1),B=ne("(",!1),T=ne(")",!1),F=ie("whitespace"),O=ae([" ","\t","\n","\r"],!1,!1),W=function(e){return e.filter((e=>!!e))},D=function(){},I=function(){},U=function(e,t){return{lhs:e,logic:t}},j=function(){return re()},Q=function(e){return{kind:"min-difficulty",value:e}},$=function(){return parseInt(re(),10)},N=function(e){return{kind:"identifier",value:e}},V=function(e,t){return t},K=function(e,t){return 0===t.length?e:{kind:"and",operands:[e,...t]}},H=function(e,t){return t},J=function(e,t){return 0===t.length?e:{kind:"or",operands:[e,...t]}},Z=function(e){return e},z=0|t.peg$currPos,q=z,X=[{line:1,column:1}],Y=z,ee=t.peg$maxFailExpected||[],te=0|t.peg$silentFails;if(t.startRule){if(!(t.startRule in s))throw new Error("Can't start parsing from rule \""+t.startRule+'".');c=s[t.startRule]}function re(){return e.substring(q,z)}function ne(e,t){return{type:"literal",text:e,ignoreCase:t}}function ae(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function ie(e){return{type:"other",description:e}}function oe(t){var r,n=X[t];if(n)return n;if(t>=X.length)r=X.length-1;else for(r=t;!X[--r];);for(n={line:(n=X[r]).line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return X[t]=n,n}function le(e,t,r){var n=oe(e),a=oe(t),i={source:l,start:{offset:e,line:n.line,column:n.column},end:{offset:t,line:a.line,column:a.column}};return r&&l&&"function"==typeof l.offset&&(i.start=l.offset(i.start),i.end=l.offset(i.end)),i}function se(e){z<Y||(z>Y&&(Y=z,ee=[]),ee.push(e))}function ce(){var e,t,r;if(e=z,t=[],(r=ue())!==o)for(;r!==o;)t.push(r),r=ue();else t=o;return t!==o&&(q=e,t=W(t)),t}function ue(){var t,r,n,a;if(t=z,10===e.charCodeAt(z)?(r=u,z++):(r=o,0===te&&se(k)),r!==o&&(q=t,r=D()),(t=r)===o){if(t=z,35===e.charCodeAt(z)?(r=_,z++):(r=o,0===te&&se(x)),r!==o){for(n=[],a=e.charAt(z),h.test(a)?z++:(a=o,0===te&&se(C));a!==o;)n.push(a),a=e.charAt(z),h.test(a)?z++:(a=o,0===te&&se(C));10===e.charCodeAt(z)?(a=u,z++):(a=o,0===te&&se(k)),a!==o?(q=t,t=I()):(z=t,t=o)}else z=t,t=o;t===o&&(t=function(){var t,r,n,a,i;return t=z,(r=_e())!==o?(58===e.charCodeAt(z)?(n=d,z++):(n=o,0===te&&se(b)),n!==o?(pe(),(a=de())!==o?(10===e.charCodeAt(z)?(i=u,z++):(i=o,0===te&&se(k)),i===o&&(i=null),q=t,t=U(r,a)):(z=t,t=o)):(z=t,t=o)):(z=t,t=o),t}())}return t}function _e(){var t,r,n;if(t=z,r=[],n=e.charAt(z),y.test(n)?z++:(n=o,0===te&&se(P)),n!==o)for(;n!==o;)r.push(n),n=e.charAt(z),y.test(n)?z++:(n=o,0===te&&se(P));else r=o;return r!==o&&(q=t,r=j()),r}function de(){var t,r,n,a,i,l;if(t=z,(r=fe())!==o){for(n=[],a=z,pe(),43===e.charCodeAt(z)?(i=v,z++):(i=o,0===te&&se(R)),i!==o?(pe(),(l=fe())!==o?(q=a,a=V(r,l)):(z=a,a=o)):(z=a,a=o);a!==o;)n.push(a),a=z,pe(),43===e.charCodeAt(z)?(i=v,z++):(i=o,0===te&&se(R)),i!==o?(pe(),(l=fe())!==o?(q=a,a=V(r,l)):(z=a,a=o)):(z=a,a=o);q=t,t=K(r,n)}else z=t,t=o;return t}function fe(){var t,r,n,a,i,l;if(t=z,(r=ve())!==o){for(n=[],a=z,pe(),e.substr(z,2)===p?(i=p,z+=2):(i=o,0===te&&se(E)),i!==o?(pe(),(l=ve())!==o?(q=a,a=H(r,l)):(z=a,a=o)):(z=a,a=o);a!==o;)n.push(a),a=z,pe(),e.substr(z,2)===p?(i=p,z+=2):(i=o,0===te&&se(E)),i!==o?(pe(),(l=ve())!==o?(q=a,a=H(r,l)):(z=a,a=o)):(z=a,a=o);q=t,t=J(r,n)}else z=t,t=o;return t}function ve(){var t,r,n,a;return t=z,40===e.charCodeAt(z)?(r=g,z++):(r=o,0===te&&se(B)),r!==o?(pe(),(n=de())!==o?(pe(),41===e.charCodeAt(z)?(a=m,z++):(a=o,0===te&&se(T)),a!==o?(q=t,t=Z(n)):(z=t,t=o)):(z=t,t=o)):(z=t,t=o),t===o&&(t=function(){var t,r;return(t=function(){var t,r,n;return t=z,e.substr(z,14)===f?(r=f,z+=14):(r=o,0===te&&se(A)),r!==o?(n=function(){var t,r,n;if(te++,t=z,pe(),r=[],n=e.charAt(z),w.test(n)?z++:(n=o,0===te&&se(M)),n!==o)for(;n!==o;)r.push(n),n=e.charAt(z),w.test(n)?z++:(n=o,0===te&&se(M));else r=o;return r!==o?(q=t,t=$()):(z=t,t=o),te--,t===o&&0===te&&se(G),t}(),n!==o?(q=t,t=Q(n)):(z=t,t=o)):(z=t,t=o),t}())===o&&(t=z,(r=_e())!==o&&(q=t,r=N(r)),t=r),t}()),t}function pe(){var t,r;for(te++,t=[],r=e.charAt(z),S.test(r)?z++:(r=o,0===te&&se(O));r!==o;)t.push(r),r=e.charAt(z),S.test(r)?z++:(r=o,0===te&&se(O));return te--,r=o,0===te&&se(F),t}if(r=c(),t.peg$library)return{peg$result:r,peg$currPos:z,peg$FAILED:o,peg$maxFailExpected:ee,peg$maxFailPos:Y};if(r!==o&&z===e.length)return r;throw r!==o&&z<e.length&&se({type:"end"}),n=ee,a=Y<e.length?e.charAt(Y):null,i=Y<e.length?le(Y,Y+1):le(Y,Y),new L(L.buildMessage(n,a),n,a,i)}function y(e,t,r){return"identifier"===e.kind&&"-"===e.value?{kind:"true"}:"false"===e.kind||"true"===e.kind||"identifier"===e.kind?e:"min-difficulty"===e.kind?{kind:r>=e.value?"true":"false"}:"and"===e.kind?0===(n=e.operands.map((function(e){return y(e,t,r)})).filter((function(e){return"true"!==e.kind}))).length?{kind:"true"}:1===n.length?n[0]:n.some((function(e){return"false"===e.kind}))?{kind:"false"}:{kind:"and",operands:n}:"or"===e.kind?0===(n=e.operands.map((function(e){return y(e,t,r)})).filter((function(e){return"false"!==e.kind}))).length?{kind:"false"}:1===n.length?n[0]:n.some((function(e){return"true"===e.kind}))?{kind:"true"}:{kind:"or",operands:n}:void 0;var n}function w(e,t){if("identifier"===e.kind){for(var r=e;r.value in t;)r.value=t[e.value];return r}if("false"===e.kind||"true"===e.kind||"min-difficulty"===e.kind)return e;if("and"===e.kind||"or"===e.kind){var n=e.operands.map((function(e){return w(e,t)}));return{kind:e.kind,operands:n}}}function S(e,t,r){for(var n=function(e){return y(e,t,r)},a={},i=0,o=e;i<o.length;i++){var l=o[i],s=l.lhs,c=l.logic;a[s]=n(c)}for(var u=0;u<10;u++){var _=Object.fromEntries(Object.entries(a).filter((function(e){e[0];var t=e[1];return"identifier"===t.kind||"true"===t.kind})).filter((function(e){var r=e[0];return e[1],!t(r)})).map((function(e){var t=e[0],r=e[1];return[t,"identifier"===r.kind?r.value:"-"]})));for(var d in a)a[d]=n(w(a[d],_));for(var f in _)delete a[f]}return a}function k(e,t){return"true"===t.kind||"false"!==t.kind&&"min-difficulty"!==t.kind&&("identifier"===t.kind?e.includes(t.value):"and"===t.kind?t.operands.every((function(t){return k(e,t)})):"or"===t.kind?t.operands.some((function(t){return k(e,t)})):void 0)}function x(e,t){return Object.entries(t).filter((function(t){var r=t[0],n=t[1];return!e.includes(r)&&k(e,n)})).map((function(e){var t=e[0];return e[1],t}))}g.styleTagTransform=v(),g.setAttributes=u(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),a()(p.A,g),p.A&&p.A.locals&&p.A.locals,function(e,t){function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r}(L,Error),L.prototype.format=function(e){var t="Error: "+this.message;if(this.location){var r,n=null;for(r=0;r<e.length;r++)if(e[r].source===this.location.source){n=e[r].text.split(/\r\n|\n|\r/g);break}var a=this.location.start,i=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(a):a,o=this.location.source+":"+i.line+":"+i.column;if(n){var l=this.location.end,s=m("",i.line.toString().length," "),c=n[a.line-1],u=(a.line===l.line?l.column:c.length+1)-a.column||1;t+="\n --\x3e "+o+"\n"+s+" |\n"+i.line+" | "+c+"\n"+s+" | "+m("",a.column-1," ")+m("",u,"^")}else t+="\n at "+o}return t},L.buildMessage=function(e,t){var r={literal:function(e){return'"'+a(e.text)+'"'},class:function(e){var t=e.parts.map((function(e){return Array.isArray(e)?i(e[0])+"-"+i(e[1]):i(e)}));return"["+(e.inverted?"^":"")+t.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(e){return e.description}};function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function a(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function i(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function o(e){return r[e.type](e)}return"Expected "+function(e){var t,r,n=e.map(o);if(n.sort(),n.length>0){for(t=1,r=1;t<n.length;t++)n[t-1]!==n[t]&&(n[r]=n[t],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(e)+" but "+function(e){return e?'"'+a(e)+'"':"end of input"}(t)+" found."};const C=JSON.parse('{"categoryName":"Kronk% RLO","splitIds":[],"names":{"ManualSplit":[]},"endTriggeringAutosplit":true,"gameName":"Hollow Knight Category Extensions","variables":{}}'),b="1.1.4";const P=JSON.parse('{"Switch-Dirtmouth_Stag":{"text":"Dirtmouth Station Door"},"Switch-Outside_Ancestral_Mound":{"text":"Shaman Mound Pillar"},"Switch-Greenpath_Stag":{"text":"Greenpath Stag Gate"},"Switch-Lower_Resting_Grounds":{"text":"Resting Grounds Floor"},"Switch-Petra_Arena":{"text":"Petra Arena Gate"},"Switch-Queen\'s_Gardens_Stag":{"text":"QG Stag Door"},"Switch-Crossroads_East":{"text":"East Crossroads Gate"},"Lever-Dung_Defender":{"text":"Waterways Dung Defender"},"Lever-Waterways_Hwurmp_Arena":{"text":"Waterways Exit Gate"},"Lever-Queen\'s_Station_Mask_Shard":{"text":"QS Mask Gauntlet Exit"},"Lever-Queen\'s_Gardens_Ground_Block":{"text":"QG Ground Block"},"Lever-Below_Overgrown_Mound":{"text":"Overgrown Mound Gate"},"Lever-Tower_of_Love":{"text":"Tower of Love Exit"},"Lever-Resting_Grounds_Stag":{"text":"RG Stag Lever"},"Lever-Abyss_Lighthouse":{"text":"Abyss Lighthouse"},"Lever-Failed_Tramway_Right":{"text":"Tramway Lower Gate","group":"Tramway"},"Lever-Failed_Tramway_Left":{"text":"Tramway Exit Gates","group":"Tramway"},"Lever-Sanctum_Below_Spell_Twister":{"text":"Sanctum Gate Below Spell Twister","group":"Sanctum"},"Lever-Sanctum_East":{"text":"Sanctum after Soul Warrior","group":"Sanctum"},"Lever-Sanctum_Soul_Warrior":{"text":"Sanctum Soul Warrior 1 Arena Gate","group":"Sanctum"},"Lever-Sanctum_Bottom":{"text":"Sanctum Exit Gate","group":"Sanctum"},"Lever-Sanctum_West_Upper":{"text":"Sanctum after Soul Master Upper","group":"Sanctum"},"Lever-Sanctum_West_Lower":{"text":"Sanctum after Soul Master Lower","group":"Sanctum"},"Lever-City_Fountain":{"text":"City Fountain Gate"},"Lever-City_Spire_Sentry_Lower":{"text":"Spire Lower Gate"},"Lever-City_Spire_Sentry_Upper":{"text":"Spire Upper Gate"},"Lever-City_Bridge_Above_Fountain":{"text":"Spire Bridge Gate"},"Lever-City_Storerooms":{"text":"City Storerooms Gate"},"Lever-City_Lemm":{"text":"Gate Opposite Lemm"},"Lever-City_Above_Lemm_Right":{"text":"Single Gate Above Lemm"},"Lever-City_Above_Lemm_Left":{"text":"Triple Gate Above Lemm","group":"DLC_Rooms"},"Lever-City_Above_Lemm_Upper":{"text":"City Gate Opposite Grub (DLC room)","group":"DLC_Rooms"},"Lever-Shade_Soul_Exit":{"text":"Shade Soul Exit Gate"},"Lever-Emilitia":{"text":"Emilitia Door"},"Lever-Mantis_Lords_Top_Left":{"text":"Mantis Lords Top Left","group":"Mantis_Village"},"Lever-Mantis_Lords_Middle_Left":{"text":"Mantis Lords Middle Left","group":"Mantis_Village"},"Lever-Mantis_Lords_Bottom_Left":{"text":"Mantis Lords Bottom Left","group":"Mantis_Village"},"Lever-Mantis_Lords_Middle_Right":{"text":"Mantis Lords Middle Right","group":"Mantis_Village"},"Lever-Mantis_Lords_Bottom_Right":{"text":"Mantis Lords Bottom Right","group":"Mantis_Village"},"Lever-Mantis_Lords_Reward":{"text":"Mantis Lords Reward Room","group":"Mantis_Village"},"Lever-Mantis_Claw":{"text":"Mantis Claw Access"},"Lever-Mantis_Lords_Access":{"text":"Mantis Lords Access"},"Lever-Fungal_Wastes_Thorns_Gauntlet":{"text":"Fungal Thorns Gauntlet Exit"},"Lever-Fungal_Wastes_Below_Shrumal_Ogres":{"text":"Gate Below Shrumal Ogres"},"Lever-Fungal_Wastes_Bouncy_Grub":{"text":"Fungal Bouncy Grub Gate"},"Lever-Dirtmouth_Elevator":{"text":"Dirtmouth Elevator"},"Lever-Crystal_Peak_Tall_Room_Upper":{"text":"Peak Tall Room Upper","group":"Peak_Tall_Room"},"Lever-Crystal_Peak_Tall_Room_Middle":{"text":"Peak Tall Room Middle","group":"Peak_Tall_Room"},"Lever-Crystal_Peak_Tall_Room_Lower":{"text":"Peak Tall Room Lower","group":"Peak_Tall_Room"},"Lever-Crystal_Peak_Spike_Grub":{"text":"Peak Spike Grub Gate"},"Lever-Crystal_Peak_Below_Chest":{"text":"Peak Gate Below Chest (All Skills Grub)","group":"Peak_Chest"},"Lever-Crystal_Peak_Above_Chest":{"text":"Peak Gate Above Chest","group":"Peak_Chest"},"Lever-Crystal_Peak_Crushers_Chest":{"text":"Peak Lower Crushers (Chest)","group":"Peak_Chest"},"Lever-Crystal_Peak_Crushers_Grub":{"text":"Peak Upper Crushers (Grub)"},"Lever-Palace_Left":{"text":"Palace Left Atrium Gate","group":"White_Palace"},"Lever-Palace_Right":{"text":"Palace Right Atrium Gates","group":"White_Palace"},"Lever-Palace_Balcony":{"text":"Palace Balcony Gates","group":"White_Palace"},"Lever-Path_of_Pain":{"text":"Path of Pain Gate","group":"White_Palace"},"Lever-Palace_Entrance_Orb":{"text":"Palace Entrance Orb","group":"White_Palace"},"Lever-Palace_Left_Orb":{"text":"Palace Left Orb","group":"White_Palace"},"Lever-Palace_Right_Orb":{"text":"Palace Right Orb","group":"White_Palace"},"Lever-Pilgrim\'s_Way_Left":{"text":"Left Pilgrim\'s Way Bridge","group":"Pilgrim_Bridge"},"Lever-Pilgrim\'s_Way_Right":{"text":"Right Pilgrim\'s Way Bridge","group":"Pilgrim_Bridge"}}');let A=7,G=1;document.getElementById("versionDisplay").textContent=`Version ${b}`;const M=document.getElementById("inputGroupingFactorValidation");document.getElementById("inputGroupingFactor").onchange=function(e){const t=e.target.value;t<0||t>10?(e.target.classList.add("is-invalid"),M.classList.remove("d-none")):(A=t,e.target.classList.remove("is-invalid"),M.classList.add("d-none"))},document.getElementById("inputDifficulty").onchange=function(e){G=e.target.value};const R=document.getElementById("hksmLink"),E=document.getElementById("hksmLinkAlt");document.getElementById("generateButton").onclick=()=>{console.log(`Difficulty: ${G}\nGrouping factor: ${A}`);const e={difficulty:G,groupingFactor:A},t=(r=function(e,t){for(var r,n=e.logicData,a=e.leversData,i=t.difficulty,o=t.groupingFactor,l=function(e){return!!a[e]},s=S(h(n),l,i),c=Object.keys(s),u=[],_=function(){var e,t=x(u,s);if(e=o/10,Math.random()<e){var n=u[u.length-1],i=null===(r=a[n])||void 0===r?void 0:r.group;if(i){var l=t.filter((function(e){var t;return(null===(t=a[e])||void 0===t?void 0:t.group)===i}));l.length>0&&(t=l)}}var c,_=(c=t)[Math.floor(Math.random()*c.length)];u.push(_)};c.length>u.length;)_();return u.filter(l)}({logicData:"# Settings\n# difficulty:\n# - easy (0): basic skips, default\n# - medium (1): roughly sr skips\n# - hard (2): roughly rando skips (not implemented)\n# flags: lever_skips (not implemented)\n\n# Skills:\nvs: -\ndash: -\nclaw: Lever-Mantis_Claw\ncdash: (claw + money) || (money + Lever-Crystal_Peak_Spike_Grub + difficulty >= 2)\nwings: claw + cdash\nisma: claw + cdash\nshade_cloak: Lever-Abyss_Lighthouse + (claw || difficulty >= 2)\ndnail: (blue_lake + Switch-Lower_Resting_Grounds) || (claw + enter_peak)\ntram_pass: Lever-Failed_Tramway_Right + claw\n\n# (Some) Locations\nblue_lake: difficulty >= 1 || claw\n# with claw only you can get to Lemm, so the logic assumes infinte money\nenter_peak: claw\nwaterways: left_city || (right_city + claw)\n# To get left_city/Lemm you need to be able to access _and_ leave it\nleft_city: (claw + (Lever-City_Above_Lemm_Right || Lever-City_Above_Lemm_Left)) || Lever-City_Fountain || Lever-City_Above_Lemm_Right\nmoney: claw + left_city\nright_city: blue_lake || (tram_pass + claw) || (waterways + cdash)\n# sanctum access is the same as Lever-Sanctum_Soul_Warrior\nwoke_dnail: claw + (shade_cloak || Lever-City_Spire_Sentry_Upper || Lever-Sanctum_Soul_Warrior)\n\n# Essence:\n# + Hu (100, dnail)\n# + Galien (200, dnail + claw)\n# + Gorb (100, dnail + claw)\n# + Markoth (250, dnail + claw + shade_cloak)\n# + Marmu (150, dnail + claw)\n# + No Eyes (200, dnail + claw)\n# + Xero (100, dnail + claw)\n# + FC (300, dnail + (difficulty >= 1 || claw))\n# + GPZ (not in logic ever)\n# + LK (400, dnail + right_city + claw + cdash)\n# + WD (300, dnail + claw + cdash + Lever-City_Spire_Sentry_Upper)\n# + Tyrant (300, dnail + claw + Lever-Sanctum_Soul_Warrior)\n\n# Dirtmouth\nSwitch-Dirtmouth_Stag: -\nLever-Dirtmouth_Elevator: cdash + claw\n\n# Crossroads\nSwitch-Outside_Ancestral_Mound: -\nSwitch-Crossroads_East: -\n\n# Greenpath\nSwitch-Greenpath_Stag: -\n\n# Resting Grounds\nLever-Resting_Grounds_Stag: (blue_lake + Switch-Lower_Resting_Grounds) || (claw + enter_peak)\nSwitch-Lower_Resting_Grounds: blue_lake\n\n# Fungal Wastes\nLever-Queen's_Station_Mask_Shard: claw\nLever-Fungal_Wastes_Thorns_Gauntlet: claw\nLever-Fungal_Wastes_Below_Shrumal_Ogres: dash\nLever-Fungal_Wastes_Bouncy_Grub: dash\nLever-Pilgrim's_Way_Left: claw || cdash\nLever-Pilgrim's_Way_Right: claw || cdash\n# Mantis Village\nLever-Mantis_Claw: dash\nLever-Mantis_Lords_Access: claw\nLever-Mantis_Lords_Top_Left: Lever-Mantis_Lords_Access + claw\nLever-Mantis_Lords_Middle_Left: Lever-Mantis_Lords_Access + claw\nLever-Mantis_Lords_Bottom_Left: Lever-Mantis_Lords_Access + claw\nLever-Mantis_Lords_Middle_Right: Lever-Mantis_Lords_Access + claw\nLever-Mantis_Lords_Bottom_Right: Lever-Mantis_Lords_Access + claw\nLever-Mantis_Lords_Reward: Lever-Mantis_Lords_Access + claw\n\n# City of Tears\nLever-City_Fountain: right_city + (claw || difficulty >= 1)\nLever-City_Spire_Sentry_Lower: right_city + claw\nLever-City_Spire_Sentry_Upper: claw + Lever-City_Spire_Sentry_Lower\nLever-City_Bridge_Above_Fountain: claw + Lever-City_Spire_Sentry_Upper\nLever-City_Storerooms: claw + (Lever-City_Bridge_Above_Fountain || Lever-City_Above_Lemm_Left)\nLever-City_Lemm: left_city + claw\nLever-City_Above_Lemm_Right: Lever-City_Bridge_Above_Fountain || Lever-City_Above_Lemm_Left\nLever-City_Above_Lemm_Left: Lever-City_Above_Lemm_Upper\nLever-City_Above_Lemm_Upper: claw + left_city\n# Sanctum\nLever-Sanctum_Soul_Warrior: claw + (Lever-City_Bridge_Above_Fountain || Lever-City_Above_Lemm_Left)\nLever-Sanctum_Below_Spell_Twister: claw + Lever-Sanctum_Soul_Warrior\nLever-Sanctum_East: claw + Lever-Sanctum_Soul_Warrior\nLever-Sanctum_Bottom: Lever-Sanctum_Soul_Warrior\nLever-Sanctum_West_Upper: claw + Lever-Sanctum_Soul_Warrior\nLever-Sanctum_West_Lower: claw + Lever-Sanctum_Soul_Warrior\nLever-Shade_Soul_Exit: claw + enter_peak + money + (Lever-City_Bridge_Above_Fountain || Lever-City_Above_Lemm_Left)\n\n# Waterways\nLever-Dung_Defender: waterways\nLever-Waterways_Hwurmp_Arena: waterways\nLever-Emilitia: (claw + cdash + waterways) || (claw + cdash + right_city + difficulty >= 1)\n\n# Crystal Peak\nLever-Crystal_Peak_Tall_Room_Upper: enter_peak + claw\nLever-Crystal_Peak_Tall_Room_Middle: enter_peak + claw\nLever-Crystal_Peak_Tall_Room_Lower: enter_peak + claw\nLever-Crystal_Peak_Spike_Grub: enter_peak + claw\nLever-Crystal_Peak_Below_Chest: enter_peak + claw\nLever-Crystal_Peak_Above_Chest: enter_peak + claw\nLever-Crystal_Peak_Crushers_Grub: enter_peak + claw\nLever-Crystal_Peak_Crushers_Chest: enter_peak + claw\n\n# Queen's Garden\nLever-Below_Overgrown_Mound: claw + (cdash || isma || Lever-Queen's_Gardens_Ground_Block)\nSwitch-Petra_Arena: claw + (cdash || isma || Lever-Queen's_Gardens_Ground_Block)\nLever-Queen's_Gardens_Ground_Block: claw + (difficulty >= 2 || money)\nSwitch-Queen's_Gardens_Stag: claw + (difficulty >= 2 || money)\n\n# Kingdom's Edge\nLever-Tower_of_Love: right_city + claw\n\n# Basin\nLever-Abyss_Lighthouse: right_city + claw\n\n# Deepnest\nLever-Failed_Tramway_Right: claw + (difficulty >= 1 || money)\nLever-Failed_Tramway_Left: claw + Lever-Failed_Tramway_Right\n\n# White Palace\nLever-Palace_Entrance_Orb: claw + woke_dnail + wings\nLever-Palace_Left: claw + Lever-Palace_Entrance_Orb\nLever-Palace_Left_Orb: claw + Lever-Palace_Entrance_Orb\nLever-Palace_Right: claw + Lever-Palace_Entrance_Orb\nLever-Palace_Right_Orb: Lever-Palace_Right\nLever-Palace_Balcony: claw + Lever-Palace_Left_Orb + Lever-Palace_Right_Orb\nLever-Path_of_Pain: claw + wings + cdash + Lever-Palace_Left_Orb + Lever-Palace_Right_Orb\n",leversData:P},e),n=P,r.map((function(e){return n[e].text})));var r,n;!function(e){var t,r,n,a=document.getElementById("randomOrderOutput");a.textContent="";for(var i=0,o=e;i<o.length;i++){var l=o[i];a.appendChild((t=l,r=void 0,void 0,r=document.createElement("li"),n=document.createTextNode(t),r.appendChild(n),r))}}(t),R.href=function(e,t){var r=function(e,t){var r=structuredClone(C);return r.splitIds=Array(e.length).fill("ManualSplit"),r.names.ManualSplit=e,r.variables["Krlo generator version"]=b,r.variables["Krlo generator difficulty"]=t.difficulty.toString(),r.variables["Krlo generator grouping factor"]=t.groupingFactor.toString(),r}(e,t),n=JSON.stringify(r);return"https://hksplitmaker.com/?config="+btoa(n)}(t,e),R.classList.remove("d-none"),E.remove()},document.getElementById("settingsForm").reset()})();