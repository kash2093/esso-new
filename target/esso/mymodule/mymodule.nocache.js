function mymodule(){var O='bootstrap',P='begin',Q='gwt.codesvr.mymodule=',R='gwt.codesvr=',S='mymodule',T='startup',U='DUMMY',V=0,W=1,X='iframe',Y='javascript:""',Z='position:absolute; width:0; height:0; border:none; left: -1000px;',$=' top: -1000px;',_='CSS1Compat',ab='<!doctype html>',bb='',cb='<html><head><\/head><body><\/body><\/html>',db='undefined',eb='DOMContentLoaded',fb=50,gb='Chrome',hb='eval("',ib='");',jb='script',kb='javascript',lb='moduleStartup',mb='moduleRequested',nb='Failed to load ',ob='head',pb='meta',qb='name',rb='mymodule::',sb='::',tb='gwt:property',ub='content',vb='=',wb='gwt:onPropertyErrorFn',xb='Bad handler "',yb='" for "gwt:onPropertyErrorFn"',zb='gwt:onLoadErrorFn',Ab='" for "gwt:onLoadErrorFn"',Bb='#',Cb='?',Db='/',Eb='img',Fb='clear.cache.gif',Gb='baseUrl',Hb='mymodule.nocache.js',Ib='base',Jb='//',Kb='device.features',Lb='ontouchstart',Mb='googletv',Nb='ipad;',Ob='largeDisplay',Pb='Touch',Qb='Arrows',Rb='opera mini',Sb='opera mobi',Tb='mobile',Ub='windows phone',Vb='iphone',Wb='ipod;',Xb='smallDisplay',Yb='android',Zb='Mouse',$b=2,_b=3,ac=4,bc='user.agent',cc='webkit',dc='safari',ec='msie',fc=10,gc=11,hc='ie10',ic=9,jc='ie9',kc=8,lc='ie8',mc='gecko',nc='gecko1_8',oc='selectingPermutation',pc='mymodule.devmode.js',qc='largeDisplayMouse',rc='17C170E86944D26F3693B86BD59B896E',sc='1CE306875F0D7367976CA511F2A4BFD6',tc='largeDisplayTouch',uc='2129CF08A4681F640BA4E6D5C1BA4982',vc='smallDisplayTouch',wc='270241A547ECFDFD8F3247AD087536A5',xc='largeDisplayArrows',yc='28C5C310D18D8083B2511C6F26E123CD',zc='smallDisplayArrows',Ac='2C61952A00CB9BD6AFF54EC56BA1CE17',Bc='2FA03C8B5A5736C62A730C8B4B7A86F0',Cc='3A115EF9C8A80C6F17407514BF6AF7BA',Dc='40F92DBDF5EE7249EB4E73B76E6719C0',Ec='68BA4B24F252AAE9A972403D03EFD7FD',Fc='87C817322BBAB0696C1FA0C4A477CF5A',Gc='8A5C0950CFCAFBB3C83E82B6807E16A2',Hc='8B70C16C7E11F2FF1AB3ECE5089C7B2E',Ic='9994803A5C0270014F749624809ED1FB',Jc='9AA9F5CB8862E25867406ED9CD752738',Kc='9F2C9BB8EB7815CAD12637BE0747DB62',Lc='A5FB4301531D7256984380AB787F534A',Mc='CA82B4F6370FB0A2550BC823A31944A9',Nc='D44318BACA60ACCE30D9F2E2127CB162',Oc='D4A9A91016D2440935EA416CF2C6A2B9',Pc='E30E7C31B48EC2DBC033AADEDAEA9414',Qc='EFCD7EB832D20B306AD36F0E9186A250',Rc='EFDF39DD38A256BB933E5909B248B7AD',Sc='F99D0DF6C459A3E5CC00B7EEFEE93776',Tc='FE3F74D4927F517921CED3BE14A41089',Uc=':',Vc='.cache.js',Wc='loadExternalRefs',Xc='end',Yc='http:',Zc='file:',$c='_gwt_dummy_',_c='__gwtDevModeHook:mymodule',ad='Ignoring non-whitelisted Dev Mode URL: ',bd=':moduleBase';var o=window;var p=document;r(O,P);function q(){var a=o.location.search;return a.indexOf(Q)!=-1||a.indexOf(R)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:S,sessionId:o.__gwtStatsSessionId,subSystem:T,evtGroup:a,millis:(new Date).getTime(),type:b})}}
mymodule.__sendStats=r;mymodule.__moduleName=S;mymodule.__errFn=null;mymodule.__moduleBase=U;mymodule.__softPermutationId=V;mymodule.__computePropValue=null;mymodule.__getPropMap=null;mymodule.__installRunAsyncCode=function(){};mymodule.__gwtStartLoadingFragment=function(){return null};mymodule.__gwt_isKnownPropertyValue=function(){return false};mymodule.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[S]={moduleName:S};mymodule.__moduleStartupDone=function(e){var f=t[S].bindings;t[S].bindings=function(){var a=f?f():{};var b=e[mymodule.__softPermutationId];for(var c=V;c<b.length;c++){var d=b[c];a[d[V]]=d[W]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(X);a.src=Y;a.id=S;a.style.cssText=Z+$;a.tabIndex=-1;p.body.appendChild(a);u=a.contentDocument;if(!u){u=a.contentWindow.document}u.open();var b=document.compatMode==_?ab:bb;u.write(b+cb);u.close()}
function A(k){function l(a){function b(){if(typeof p.readyState==db){return typeof p.body!=db&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(p.removeEventListener){p.removeEventListener(eb,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(eb,d,false)}var e=setInterval(function(){if(b()){d()}},fb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=v();var f=e.body;var g;if(navigator.userAgent.indexOf(gb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(hb));for(var i=V;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(W,j.length-W)))}h.appendChild(e.createTextNode(ib));g=e.createElement(jb);g.language=kb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=V;i<c.length;i++){g=e.createElement(jb);g.language=kb;g.text=c[i];f.appendChild(g);d(f,g)}}}
mymodule.onScriptDownloaded=function(a){l(function(){m(a)})};r(lb,mb);var n=p.createElement(jb);n.src=k;if(mymodule.__errFn){n.onerror=function(){mymodule.__errFn(S,new Error(nb+code))}}p.getElementsByTagName(ob)[V].appendChild(n)}
mymodule.__startLoadingFragment=function(a){return D(a)};mymodule.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(jb);d.language=kb;d.text=a;c.appendChild(d);c.removeChild(d)};function B(){var c={};var d;var e;var f=p.getElementsByTagName(pb);for(var g=V,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(qb),k;if(j){j=j.replace(rb,bb);if(j.indexOf(sb)>=V){continue}if(j==tb){k=i.getAttribute(ub);if(k){var l,m=k.indexOf(vb);if(m>=V){j=k.substring(V,m);l=k.substring(m+W)}else{j=k;l=bb}c[j]=l}}else if(j==wb){k=i.getAttribute(ub);if(k){try{d=eval(k)}catch(a){alert(xb+k+yb)}}}else if(j==zb){k=i.getAttribute(ub);if(k){try{e=eval(k)}catch(a){alert(xb+k+Ab)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;mymodule.__errFn=e}
function C(){function e(a){var b=a.lastIndexOf(Bb);if(b==-1){b=a.length}var c=a.indexOf(Cb);if(c==-1){c=a.length}var d=a.lastIndexOf(Db,Math.min(c,b));return d>=V?a.substring(V,d+W):bb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Eb);b.src=a+Fb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Gb);if(a!=null){return a}return bb}
function h(){var a=p.getElementsByTagName(jb);for(var b=V;b<a.length;++b){if(a[b].src.indexOf(Hb)!=-1){return e(a[b].src)}}return bb}
function i(){var a=p.getElementsByTagName(Ib);if(a.length>V){return a[a.length-W].href}return bb}
function j(){var a=p.location;return a.href==a.protocol+Jb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==bb){k=h()}if(k==bb){k=i()}if(k==bb&&j()){k=e(p.location.href)}k=f(k);return k}
function D(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return mymodule.__moduleBase+a}
function F(){var f=[];var g=V;function h(a,b){var c=f;for(var d=V,e=a.length-W;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
j[Kb]=function(){var a=navigator.userAgent.toLowerCase();var b=Lb in window;if(a.indexOf(Mb)!=-1||a.indexOf(Nb)!=-1){return Ob+(b?Pb:Qb)}else if(a.indexOf(Rb)!=-1||(a.indexOf(Sb)!=-1||(a.indexOf(Tb)!=-1||(a.indexOf(Ub)!=-1||(a.indexOf(Vb)!=-1||a.indexOf(Wb)!=-1))))){return Xb+(b?Pb:Qb)}else if(a.indexOf(Yb)!=-1){return Ob+(b?Pb:Qb)}else{return Ob+(b?Pb:Zb)}};i[Kb]={largeDisplayArrows:V,largeDisplayMouse:W,largeDisplayTouch:$b,smallDisplayArrows:_b,smallDisplayTouch:ac};j[bc]=function(){var a=navigator.userAgent.toLowerCase();var b=p.documentMode;if(function(){return a.indexOf(cc)!=-1}())return dc;if(function(){return a.indexOf(ec)!=-1&&(b>=fc&&b<gc)}())return hc;if(function(){return a.indexOf(ec)!=-1&&(b>=ic&&b<gc)}())return jc;if(function(){return a.indexOf(ec)!=-1&&(b>=kc&&b<gc)}())return lc;if(function(){return a.indexOf(mc)!=-1||b>=gc}())return nc;return bb};i[bc]={gecko1_8:V,ie10:W,ie8:$b,ie9:_b,safari:ac};__gwt_isKnownPropertyValue=function(a,b){return b in i[a]};mymodule.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};mymodule.__computePropValue=k;o.__gwt_activeModules[S].bindings=mymodule.__getPropMap;r(O,oc);if(q()){return D(pc)}var l;try{h([qc,nc],rc);h([qc,lc],sc);h([tc,lc],uc);h([vc,nc],wc);h([xc,nc],yc);h([zc,jc],Ac);h([zc,dc],Bc);h([tc,hc],Cc);h([vc,hc],Dc);h([zc,nc],Ec);h([zc,lc],Fc);h([xc,lc],Gc);h([xc,jc],Hc);h([vc,lc],Ic);h([qc,hc],Jc);h([tc,jc],Kc);h([tc,nc],Lc);h([zc,hc],Mc);h([vc,dc],Nc);h([vc,jc],Oc);h([qc,jc],Pc);h([qc,dc],Qc);h([tc,dc],Rc);h([xc,dc],Sc);h([xc,hc],Tc);l=f[k(Kb)][k(bc)];var m=l.indexOf(Uc);if(m!=-1){g=parseInt(l.substring(m+W),fc);l=l.substring(V,m)}}catch(a){}mymodule.__softPermutationId=g;return D(l+Vc)}
function G(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}r(Wc,P);r(Wc,Xc)}
B();mymodule.__moduleBase=C();t[S].moduleBase=mymodule.__moduleBase;var H=F();if(o){var I=!!(o.location.protocol==Yc||o.location.protocol==Zc);o.__gwt_activeModules[S].canRedirect=I;function J(){var b=$c;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(I&&J()){var K=_c;var L=o.sessionStorage[K];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(L)){if(L&&(window.console&&console.log)){console.log(ad+L)}L=bb}if(L&&!o[K]){o[K]=true;o[K+bd]=C();var M=p.createElement(jb);M.src=L;var N=p.getElementsByTagName(ob)[V];N.insertBefore(M,N.firstElementChild||N.children[V]);return false}}}G();r(O,Xc);A(H);return true}
mymodule.succeeded=mymodule();