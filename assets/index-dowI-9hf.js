(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tc="169",Uu=0,Fc=1,Ou=2,nc=1,Fu=2,ei=3,ri=0,en=1,Hn=2,bi=0,Ps=1,Bc=2,zc=3,Hc=4,Bu=5,Gi=100,zu=101,Hu=102,Vu=103,Wu=104,$u=200,Gu=201,Xu=202,Yu=203,ol=204,al=205,qu=206,Ku=207,ju=208,Ju=209,Zu=210,Qu=211,ef=212,tf=213,nf=214,rl=0,ll=1,cl=2,Ns=3,hl=4,dl=5,ul=6,fl=7,_d=0,sf=1,of=2,Si=0,af=1,rf=2,lf=3,cf=4,hf=5,df=6,uf=7,xd=300,Us=301,Os=302,pl=303,ml=304,er=306,ka=1e3,ti=1001,gl=1002,Qt=1003,ff=1004,zo=1005,Ln=1006,hr=1007,Yi=1008,li=1009,Md=1010,bd=1011,Ao=1012,ic=1013,Ki=1014,Vn=1015,Lo=1016,sc=1017,oc=1018,Fs=1020,Sd=35902,wd=1021,Ed=1022,kn=1023,Td=1024,Ad=1025,Ls=1026,Bs=1027,tr=1028,ac=1029,Cd=1030,rc=1031,lc=1033,ba=33776,Sa=33777,wa=33778,Ea=33779,vl=35840,yl=35841,_l=35842,xl=35843,Ml=36196,bl=37492,Sl=37496,wl=37808,El=37809,Tl=37810,Al=37811,Cl=37812,Rl=37813,Pl=37814,Ll=37815,Il=37816,Dl=37817,kl=37818,Nl=37819,Ul=37820,Ol=37821,Ta=36492,Fl=36494,Bl=36495,Rd=36283,zl=36284,Hl=36285,Vl=36286,pf=3200,mf=3201,Pd=0,gf=1,Mi="",Yt="srgb",Ci="srgb-linear",cc="display-p3",nr="display-p3-linear",Na="linear",Mt="srgb",Ua="rec709",Oa="p3",ss=7680,Vc=519,vf=512,yf=513,_f=514,Ld=515,xf=516,Mf=517,bf=518,Sf=519,Wl=35044,Wc="300 es",ni=2e3,Fa=2001;class $s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $c=1234567;const yo=Math.PI/180,Co=180/Math.PI;function ii(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function zt(n,e,t){return Math.max(e,Math.min(t,n))}function hc(n,e){return(n%e+e)%e}function wf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ef(n,e,t){return n!==e?(t-n)/(e-n):0}function _o(n,e,t){return(1-t)*n+t*e}function Tf(n,e,t,i){return _o(n,e,1-Math.exp(-t*i))}function Af(n,e=1){return e-Math.abs(hc(n,e*2)-e)}function Cf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Rf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Pf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Lf(n,e){return n+Math.random()*(e-n)}function If(n){return n*(.5-Math.random())}function Df(n){n!==void 0&&($c=n);let e=$c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kf(n){return n*yo}function Nf(n){return n*Co}function Uf(n){return(n&n-1)===0&&n!==0}function Of(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ff(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bf(n,e,t,i,s){const o=Math.cos,a=Math.sin,l=o(t/2),r=a(t/2),c=o((e+i)/2),d=a((e+i)/2),p=o((e-i)/2),f=a((e-i)/2),h=o((i-e)/2),y=a((i-e)/2);switch(s){case"XYX":n.set(l*d,r*p,r*f,l*c);break;case"YZY":n.set(r*f,l*d,r*p,l*c);break;case"ZXZ":n.set(r*p,r*f,l*d,l*c);break;case"XZX":n.set(l*d,r*y,r*h,l*c);break;case"YXY":n.set(r*h,l*d,r*y,l*c);break;case"ZYZ":n.set(r*y,r*h,l*d,l*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Tt={DEG2RAD:yo,RAD2DEG:Co,generateUUID:ii,clamp:zt,euclideanModulo:hc,mapLinear:wf,inverseLerp:Ef,lerp:_o,damp:Tf,pingpong:Af,smoothstep:Cf,smootherstep:Rf,randInt:Pf,randFloat:Lf,randFloatSpread:If,seededRandom:Df,degToRad:kf,radToDeg:Nf,isPowerOfTwo:Uf,ceilPowerOfTwo:Of,floorPowerOfTwo:Ff,setQuaternionFromProperEuler:Bf,normalize:ct,denormalize:In};class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*s+e.x,this.y=o*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,s,o,a,l,r,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,a,l,r,c)}set(e,t,i,s,o,a,l,r,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=l,d[3]=t,d[4]=o,d[5]=r,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,a=i[0],l=i[3],r=i[6],c=i[1],d=i[4],p=i[7],f=i[2],h=i[5],y=i[8],m=s[0],u=s[3],g=s[6],M=s[1],w=s[4],E=s[7],L=s[2],b=s[5],_=s[8];return o[0]=a*m+l*M+r*L,o[3]=a*u+l*w+r*b,o[6]=a*g+l*E+r*_,o[1]=c*m+d*M+p*L,o[4]=c*u+d*w+p*b,o[7]=c*g+d*E+p*_,o[2]=f*m+h*M+y*L,o[5]=f*u+h*w+y*b,o[8]=f*g+h*E+y*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],r=e[6],c=e[7],d=e[8];return t*a*d-t*l*c-i*o*d+i*l*r+s*o*c-s*a*r}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],r=e[6],c=e[7],d=e[8],p=d*a-l*c,f=l*r-d*o,h=c*o-a*r,y=t*p+i*f+s*h;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/y;return e[0]=p*m,e[1]=(s*c-d*i)*m,e[2]=(l*i-s*a)*m,e[3]=f*m,e[4]=(d*t-s*r)*m,e[5]=(s*o-l*t)*m,e[6]=h*m,e[7]=(i*r-c*t)*m,e[8]=(a*t-i*o)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,a,l){const r=Math.cos(o),c=Math.sin(o);return this.set(i*r,i*c,-i*(r*a+c*l)+a+e,-s*c,s*r,-s*(-c*a+r*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(dr.makeScale(e,t)),this}rotate(e){return this.premultiply(dr.makeRotation(-e)),this}translate(e,t){return this.premultiply(dr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dr=new We;function Id(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zf(){const n=Ba("canvas");return n.style.display="block",n}const Gc={};function Aa(n){n in Gc||(Gc[n]=!0,console.warn(n))}function Hf(n,e,t){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}function Vf(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wf(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xc=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yc=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[Ci]:{transfer:Na,primaries:Ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Yt]:{transfer:Mt,primaries:Ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[nr]:{transfer:Na,primaries:Oa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Yc),fromReference:n=>n.applyMatrix3(Xc)},[cc]:{transfer:Mt,primaries:Oa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Yc),fromReference:n=>n.applyMatrix3(Xc).convertLinearToSRGB()}},$f=new Set([Ci,nr]),at={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!$f.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=js[e].toReference,s=js[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return js[n].primaries},getTransfer:function(n){return n===Mi?Na:js[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(js[e].luminanceCoefficients)}};function Is(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let os;class Gf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{os===void 0&&(os=Ba("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=Is(o[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Is(t[i]/255)*255):t[i]=Is(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xf=0;class Dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?o.push(fr(s[a].image)):o.push(fr(s[a]))}else o=fr(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function fr(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Gf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yf=0;class qt extends $s{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=ti,s=ti,o=Ln,a=Yi,l=kn,r=li,c=qt.DEFAULT_ANISOTROPY,d=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=ii(),this.name="",this.source=new Dd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=r,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ka:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ka:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=xd;qt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*o,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*o,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*o,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const r=e.elements,c=r[0],d=r[4],p=r[8],f=r[1],h=r[5],y=r[9],m=r[2],u=r[6],g=r[10];if(Math.abs(d-f)<.01&&Math.abs(p-m)<.01&&Math.abs(y-u)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+m)<.1&&Math.abs(y+u)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,E=(h+1)/2,L=(g+1)/2,b=(d+f)/4,_=(p+m)/4,S=(y+u)/4;return w>E&&w>L?w<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(w),s=b/i,o=_/i):E>L?E<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(E),i=b/s,o=S/s):L<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(L),i=_/o,s=S/o),this.set(i,s,o,t),this}let M=Math.sqrt((u-y)*(u-y)+(p-m)*(p-m)+(f-d)*(f-d));return Math.abs(M)<.001&&(M=1),this.x=(u-y)/M,this.y=(p-m)/M,this.z=(f-d)/M,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qf extends $s{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new qt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends qf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kd extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kf extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,a,l){let r=i[s+0],c=i[s+1],d=i[s+2],p=i[s+3];const f=o[a+0],h=o[a+1],y=o[a+2],m=o[a+3];if(l===0){e[t+0]=r,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(l===1){e[t+0]=f,e[t+1]=h,e[t+2]=y,e[t+3]=m;return}if(p!==m||r!==f||c!==h||d!==y){let u=1-l;const g=r*f+c*h+d*y+p*m,M=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){const L=Math.sqrt(w),b=Math.atan2(L,g*M);u=Math.sin(u*b)/L,l=Math.sin(l*b)/L}const E=l*M;if(r=r*u+f*E,c=c*u+h*E,d=d*u+y*E,p=p*u+m*E,u===1-l){const L=1/Math.sqrt(r*r+c*c+d*d+p*p);r*=L,c*=L,d*=L,p*=L}}e[t]=r,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,o,a){const l=i[s],r=i[s+1],c=i[s+2],d=i[s+3],p=o[a],f=o[a+1],h=o[a+2],y=o[a+3];return e[t]=l*y+d*p+r*h-c*f,e[t+1]=r*y+d*f+c*p-l*h,e[t+2]=c*y+d*h+l*f-r*p,e[t+3]=d*y-l*p-r*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,a=e._order,l=Math.cos,r=Math.sin,c=l(i/2),d=l(s/2),p=l(o/2),f=r(i/2),h=r(s/2),y=r(o/2);switch(a){case"XYZ":this._x=f*d*p+c*h*y,this._y=c*h*p-f*d*y,this._z=c*d*y+f*h*p,this._w=c*d*p-f*h*y;break;case"YXZ":this._x=f*d*p+c*h*y,this._y=c*h*p-f*d*y,this._z=c*d*y-f*h*p,this._w=c*d*p+f*h*y;break;case"ZXY":this._x=f*d*p-c*h*y,this._y=c*h*p+f*d*y,this._z=c*d*y+f*h*p,this._w=c*d*p-f*h*y;break;case"ZYX":this._x=f*d*p-c*h*y,this._y=c*h*p+f*d*y,this._z=c*d*y-f*h*p,this._w=c*d*p+f*h*y;break;case"YZX":this._x=f*d*p+c*h*y,this._y=c*h*p+f*d*y,this._z=c*d*y-f*h*p,this._w=c*d*p-f*h*y;break;case"XZY":this._x=f*d*p-c*h*y,this._y=c*h*p-f*d*y,this._z=c*d*y+f*h*p,this._w=c*d*p+f*h*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],a=t[1],l=t[5],r=t[9],c=t[2],d=t[6],p=t[10],f=i+l+p;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-r)*h,this._y=(o-c)*h,this._z=(a-s)*h}else if(i>l&&i>p){const h=2*Math.sqrt(1+i-l-p);this._w=(d-r)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(o+c)/h}else if(l>p){const h=2*Math.sqrt(1+l-i-p);this._w=(o-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(r+d)/h}else{const h=2*Math.sqrt(1+p-i-l);this._w=(a-s)/h,this._x=(o+c)/h,this._y=(r+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,a=e._w,l=t._x,r=t._y,c=t._z,d=t._w;return this._x=i*d+a*l+s*c-o*r,this._y=s*d+a*r+o*l-i*c,this._z=o*d+a*c+i*r-s*l,this._w=a*d-i*l-s*r-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,a=this._w;let l=a*e._w+i*e._x+s*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=i,this._y=s,this._z=o,this;const r=1-l*l;if(r<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*o+t*this._z,this.normalize(),this}const c=Math.sqrt(r),d=Math.atan2(c,l),p=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=a*p+this._w*f,this._x=i*p+this._x*f,this._y=s*p+this._y*f,this._z=o*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,a=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*a,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*a,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,a=e.y,l=e.z,r=e.w,c=2*(a*s-l*i),d=2*(l*t-o*s),p=2*(o*i-a*t);return this.x=t+r*c+a*p-l*d,this.y=i+r*d+l*c-o*p,this.z=s+r*p+o*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,a=t.x,l=t.y,r=t.z;return this.x=s*r-o*l,this.y=o*a-i*r,this.z=i*l-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pr.copy(this).projectOnVector(e),this.sub(pr)}reflect(e){return this.sub(pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pr=new P,qc=new Io;class Qi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=o.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(o,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ho.copy(i.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}const s=e.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Vo.subVectors(this.max,Js),as.subVectors(e.a,Js),rs.subVectors(e.b,Js),ls.subVectors(e.c,Js),ui.subVectors(rs,as),fi.subVectors(ls,rs),Li.subVectors(as,ls);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Li.z,Li.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Li.z,0,-Li.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Li.y,Li.x,0];return!mr(t,as,rs,ls,Vo)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,as,rs,ls,Vo))?!1:(Wo.crossVectors(ui,fi),t=[Wo.x,Wo.y,Wo.z],mr(t,as,rs,ls,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new P,new P,new P,new P,new P,new P,new P,new P],Cn=new P,Ho=new Qi,as=new P,rs=new P,ls=new P,ui=new P,fi=new P,Li=new P,Js=new P,Vo=new P,Wo=new P,Ii=new P;function mr(n,e,t,i,s){for(let o=0,a=n.length-3;o<=a;o+=3){Ii.fromArray(n,o);const l=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),r=e.dot(Ii),c=t.dot(Ii),d=i.dot(Ii);if(Math.max(-Math.max(r,c,d),Math.min(r,c,d))>l)return!1}return!0}const jf=new Qi,Zs=new P,gr=new P;class es{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jf.setFromPoints(e).getCenter(i);let s=0;for(let o=0,a=e.length;o<a;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Zs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(gr)),this.expandByPoint(Zs.copy(e.center).sub(gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new P,vr=new P,$o=new P,pi=new P,yr=new P,Go=new P,_r=new P;class dc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){vr.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(vr);const o=e.distanceTo(t)*.5,a=-this.direction.dot($o),l=pi.dot(this.direction),r=-pi.dot($o),c=pi.lengthSq(),d=Math.abs(1-a*a);let p,f,h,y;if(d>0)if(p=a*r-l,f=a*l-r,y=o*d,p>=0)if(f>=-y)if(f<=y){const m=1/d;p*=m,f*=m,h=p*(p+a*f+2*l)+f*(a*p+f+2*r)+c}else f=o,p=Math.max(0,-(a*f+l)),h=-p*p+f*(f+2*r)+c;else f=-o,p=Math.max(0,-(a*f+l)),h=-p*p+f*(f+2*r)+c;else f<=-y?(p=Math.max(0,-(-a*o+l)),f=p>0?-o:Math.min(Math.max(-o,-r),o),h=-p*p+f*(f+2*r)+c):f<=y?(p=0,f=Math.min(Math.max(-o,-r),o),h=f*(f+2*r)+c):(p=Math.max(0,-(a*o+l)),f=p>0?o:Math.min(Math.max(-o,-r),o),h=-p*p+f*(f+2*r)+c);else f=a>0?-o:o,p=Math.max(0,-(a*f+l)),h=-p*p+f*(f+2*r)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(vr).addScaledVector($o,f),h}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,o=e.radius*e.radius;if(s>o)return null;const a=Math.sqrt(o-s),l=i-a,r=i+a;return r<0?null:l<0?this.at(r,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,a,l,r;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(o=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(o=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||o>s||((o>i||isNaN(i))&&(i=o),(a<s||isNaN(s))&&(s=a),p>=0?(l=(e.min.z-f.z)*p,r=(e.max.z-f.z)*p):(l=(e.max.z-f.z)*p,r=(e.min.z-f.z)*p),i>r||l>s)||((l>i||i!==i)&&(i=l),(r<s||s!==s)&&(s=r),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,s,o){yr.subVectors(t,e),Go.subVectors(i,e),_r.crossVectors(yr,Go);let a=this.direction.dot(_r),l;if(a>0){if(s)return null;l=1}else if(a<0)l=-1,a=-a;else return null;pi.subVectors(this.origin,e);const r=l*this.direction.dot(Go.crossVectors(pi,Go));if(r<0)return null;const c=l*this.direction.dot(yr.cross(pi));if(c<0||r+c>a)return null;const d=-l*pi.dot(_r);return d<0?null:this.at(d/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,s,o,a,l,r,c,d,p,f,h,y,m,u){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,a,l,r,c,d,p,f,h,y,m,u)}set(e,t,i,s,o,a,l,r,c,d,p,f,h,y,m,u){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=o,g[5]=a,g[9]=l,g[13]=r,g[2]=c,g[6]=d,g[10]=p,g[14]=f,g[3]=h,g[7]=y,g[11]=m,g[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),o=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,a=Math.cos(i),l=Math.sin(i),r=Math.cos(s),c=Math.sin(s),d=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){const f=a*d,h=a*p,y=l*d,m=l*p;t[0]=r*d,t[4]=-r*p,t[8]=c,t[1]=h+y*c,t[5]=f-m*c,t[9]=-l*r,t[2]=m-f*c,t[6]=y+h*c,t[10]=a*r}else if(e.order==="YXZ"){const f=r*d,h=r*p,y=c*d,m=c*p;t[0]=f+m*l,t[4]=y*l-h,t[8]=a*c,t[1]=a*p,t[5]=a*d,t[9]=-l,t[2]=h*l-y,t[6]=m+f*l,t[10]=a*r}else if(e.order==="ZXY"){const f=r*d,h=r*p,y=c*d,m=c*p;t[0]=f-m*l,t[4]=-a*p,t[8]=y+h*l,t[1]=h+y*l,t[5]=a*d,t[9]=m-f*l,t[2]=-a*c,t[6]=l,t[10]=a*r}else if(e.order==="ZYX"){const f=a*d,h=a*p,y=l*d,m=l*p;t[0]=r*d,t[4]=y*c-h,t[8]=f*c+m,t[1]=r*p,t[5]=m*c+f,t[9]=h*c-y,t[2]=-c,t[6]=l*r,t[10]=a*r}else if(e.order==="YZX"){const f=a*r,h=a*c,y=l*r,m=l*c;t[0]=r*d,t[4]=m-f*p,t[8]=y*p+h,t[1]=p,t[5]=a*d,t[9]=-l*d,t[2]=-c*d,t[6]=h*p+y,t[10]=f-m*p}else if(e.order==="XZY"){const f=a*r,h=a*c,y=l*r,m=l*c;t[0]=r*d,t[4]=-p,t[8]=c*d,t[1]=f*p+m,t[5]=a*d,t[9]=h*p-y,t[2]=y*p-h,t[6]=l*d,t[10]=m*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jf,e,Zf)}lookAt(e,t,i){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),mi.crossVectors(i,pn),mi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),mi.crossVectors(i,pn)),mi.normalize(),Xo.crossVectors(pn,mi),s[0]=mi.x,s[4]=Xo.x,s[8]=pn.x,s[1]=mi.y,s[5]=Xo.y,s[9]=pn.y,s[2]=mi.z,s[6]=Xo.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,a=i[0],l=i[4],r=i[8],c=i[12],d=i[1],p=i[5],f=i[9],h=i[13],y=i[2],m=i[6],u=i[10],g=i[14],M=i[3],w=i[7],E=i[11],L=i[15],b=s[0],_=s[4],S=s[8],C=s[12],v=s[1],x=s[5],R=s[9],I=s[13],N=s[2],k=s[6],U=s[10],G=s[14],V=s[3],ne=s[7],se=s[11],ce=s[15];return o[0]=a*b+l*v+r*N+c*V,o[4]=a*_+l*x+r*k+c*ne,o[8]=a*S+l*R+r*U+c*se,o[12]=a*C+l*I+r*G+c*ce,o[1]=d*b+p*v+f*N+h*V,o[5]=d*_+p*x+f*k+h*ne,o[9]=d*S+p*R+f*U+h*se,o[13]=d*C+p*I+f*G+h*ce,o[2]=y*b+m*v+u*N+g*V,o[6]=y*_+m*x+u*k+g*ne,o[10]=y*S+m*R+u*U+g*se,o[14]=y*C+m*I+u*G+g*ce,o[3]=M*b+w*v+E*N+L*V,o[7]=M*_+w*x+E*k+L*ne,o[11]=M*S+w*R+E*U+L*se,o[15]=M*C+w*I+E*G+L*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],a=e[1],l=e[5],r=e[9],c=e[13],d=e[2],p=e[6],f=e[10],h=e[14],y=e[3],m=e[7],u=e[11],g=e[15];return y*(+o*r*p-s*c*p-o*l*f+i*c*f+s*l*h-i*r*h)+m*(+t*r*h-t*c*f+o*a*f-s*a*h+s*c*d-o*r*d)+u*(+t*c*p-t*l*h-o*a*p+i*a*h+o*l*d-i*c*d)+g*(-s*l*d-t*r*p+t*l*f+s*a*p-i*a*f+i*r*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],r=e[6],c=e[7],d=e[8],p=e[9],f=e[10],h=e[11],y=e[12],m=e[13],u=e[14],g=e[15],M=p*u*c-m*f*c+m*r*h-l*u*h-p*r*g+l*f*g,w=y*f*c-d*u*c-y*r*h+a*u*h+d*r*g-a*f*g,E=d*m*c-y*p*c+y*l*h-a*m*h-d*l*g+a*p*g,L=y*p*r-d*m*r-y*l*f+a*m*f+d*l*u-a*p*u,b=t*M+i*w+s*E+o*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/b;return e[0]=M*_,e[1]=(m*f*o-p*u*o-m*s*h+i*u*h+p*s*g-i*f*g)*_,e[2]=(l*u*o-m*r*o+m*s*c-i*u*c-l*s*g+i*r*g)*_,e[3]=(p*r*o-l*f*o-p*s*c+i*f*c+l*s*h-i*r*h)*_,e[4]=w*_,e[5]=(d*u*o-y*f*o+y*s*h-t*u*h-d*s*g+t*f*g)*_,e[6]=(y*r*o-a*u*o-y*s*c+t*u*c+a*s*g-t*r*g)*_,e[7]=(a*f*o-d*r*o+d*s*c-t*f*c-a*s*h+t*r*h)*_,e[8]=E*_,e[9]=(y*p*o-d*m*o-y*i*h+t*m*h+d*i*g-t*p*g)*_,e[10]=(a*m*o-y*l*o+y*i*c-t*m*c-a*i*g+t*l*g)*_,e[11]=(d*l*o-a*p*o-d*i*c+t*p*c+a*i*h-t*l*h)*_,e[12]=L*_,e[13]=(d*m*s-y*p*s+y*i*f-t*m*f-d*i*u+t*p*u)*_,e[14]=(y*l*s-a*m*s-y*i*r+t*m*r+a*i*u-t*l*u)*_,e[15]=(a*p*s-d*l*s+d*i*r-t*p*r-a*i*f+t*l*f)*_,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,a=e.x,l=e.y,r=e.z,c=o*a,d=o*l;return this.set(c*a+i,c*l-s*r,c*r+s*l,0,c*l+s*r,d*l+i,d*r-s*a,0,c*r-s*l,d*r+s*a,o*r*r+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,a){return this.set(1,i,o,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,a=t._y,l=t._z,r=t._w,c=o+o,d=a+a,p=l+l,f=o*c,h=o*d,y=o*p,m=a*d,u=a*p,g=l*p,M=r*c,w=r*d,E=r*p,L=i.x,b=i.y,_=i.z;return s[0]=(1-(m+g))*L,s[1]=(h+E)*L,s[2]=(y-w)*L,s[3]=0,s[4]=(h-E)*b,s[5]=(1-(f+g))*b,s[6]=(u+M)*b,s[7]=0,s[8]=(y+w)*_,s[9]=(u-M)*_,s[10]=(1-(f+m))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=cs.set(s[0],s[1],s[2]).length();const a=cs.set(s[4],s[5],s[6]).length(),l=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const c=1/o,d=1/a,p=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=d,Rn.elements[5]*=d,Rn.elements[6]*=d,Rn.elements[8]*=p,Rn.elements[9]*=p,Rn.elements[10]*=p,t.setFromRotationMatrix(Rn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,o,a,l=ni){const r=this.elements,c=2*o/(t-e),d=2*o/(i-s),p=(t+e)/(t-e),f=(i+s)/(i-s);let h,y;if(l===ni)h=-(a+o)/(a-o),y=-2*a*o/(a-o);else if(l===Fa)h=-a/(a-o),y=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return r[0]=c,r[4]=0,r[8]=p,r[12]=0,r[1]=0,r[5]=d,r[9]=f,r[13]=0,r[2]=0,r[6]=0,r[10]=h,r[14]=y,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,i,s,o,a,l=ni){const r=this.elements,c=1/(t-e),d=1/(i-s),p=1/(a-o),f=(t+e)*c,h=(i+s)*d;let y,m;if(l===ni)y=(a+o)*p,m=-2*p;else if(l===Fa)y=o*p,m=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return r[0]=2*c,r[4]=0,r[8]=0,r[12]=-f,r[1]=0,r[5]=2*d,r[9]=0,r[13]=-h,r[2]=0,r[6]=0,r[10]=m,r[14]=-y,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cs=new P,Rn=new rt,Jf=new P(0,0,0),Zf=new P(1,1,1),mi=new P,Xo=new P,pn=new P,Kc=new rt,jc=new Io;class ci{constructor(e=0,t=0,i=0,s=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],a=s[4],l=s[8],r=s[1],c=s[5],d=s[9],p=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,h),this._z=Math.atan2(r,c)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(r,o));break;case"ZYX":this._y=Math.asin(-zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(r,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(l,h));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jc.setFromEuler(this),this.setFromQuaternion(jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qf=0;const Jc=new P,hs=new Io,qn=new rt,Yo=new P,Qs=new P,ep=new P,tp=new Io,Zc=new P(1,0,0),Qc=new P(0,1,0),eh=new P(0,0,1),th={type:"added"},np={type:"removed"},ds={type:"childadded",child:null},xr={type:"childremoved",child:null};class At extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new P,t=new ci,i=new Io,s=new P(1,1,1);function o(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new We}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Zc,e)}rotateY(e){return this.rotateOnAxis(Qc,e)}rotateZ(e){return this.rotateOnAxis(eh,e)}translateOnAxis(e,t){return Jc.copy(e).applyQuaternion(this.quaternion),this.position.add(Jc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zc,e)}translateY(e){return this.translateOnAxis(Qc,e)}translateZ(e){return this.translateOnAxis(eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yo.copy(e):Yo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Qs,Yo,this.up):qn.lookAt(Yo,Qs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(qn),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(th),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(np),xr.child=e,this.dispatchEvent(xr),xr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(th),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,ep),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,tp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(l,r){return l[r.uuid]===void 0&&(l[r.uuid]=r.toJSON(e)),r.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const r=l.shapes;if(Array.isArray(r))for(let c=0,d=r.length;c<d;c++){const p=r[c];o(e.shapes,p)}else o(e.shapes,r)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let r=0,c=this.material.length;r<c;r++)l.push(o(e.materials,this.material[r]));s.material=l}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const r=this.animations[l];s.animations.push(o(e.animations,r))}}if(t){const l=a(e.geometries),r=a(e.materials),c=a(e.textures),d=a(e.images),p=a(e.shapes),f=a(e.skeletons),h=a(e.animations),y=a(e.nodes);l.length>0&&(i.geometries=l),r.length>0&&(i.materials=r),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),y.length>0&&(i.nodes=y)}return i.object=s,i;function a(l){const r=[];for(const c in l){const d=l[c];delete d.metadata,r.push(d)}return r}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}At.DEFAULT_UP=new P(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new P,Kn=new P,Mr=new P,jn=new P,us=new P,fs=new P,nh=new P,br=new P,Sr=new P,wr=new P,Er=new pt,Tr=new pt,Ar=new pt;class Sn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Pn.subVectors(e,t),s.cross(Pn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Pn.subVectors(s,t),Kn.subVectors(i,t),Mr.subVectors(e,t);const a=Pn.dot(Pn),l=Pn.dot(Kn),r=Pn.dot(Mr),c=Kn.dot(Kn),d=Kn.dot(Mr),p=a*c-l*l;if(p===0)return o.set(0,0,0),null;const f=1/p,h=(c*r-l*d)*f,y=(a*d-l*r)*f;return o.set(1-h-y,y,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,i,s,o,a,l,r){return this.getBarycoord(e,t,i,s,jn)===null?(r.x=0,r.y=0,"z"in r&&(r.z=0),"w"in r&&(r.w=0),null):(r.setScalar(0),r.addScaledVector(o,jn.x),r.addScaledVector(a,jn.y),r.addScaledVector(l,jn.z),r)}static getInterpolatedAttribute(e,t,i,s,o,a){return Er.setScalar(0),Tr.setScalar(0),Ar.setScalar(0),Er.fromBufferAttribute(e,t),Tr.fromBufferAttribute(e,i),Ar.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Er,o.x),a.addScaledVector(Tr,o.y),a.addScaledVector(Ar,o.z),a}static isFrontFacing(e,t,i,s){return Pn.subVectors(i,t),Kn.subVectors(e,t),Pn.cross(Kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Pn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return Sn.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let a,l;us.subVectors(s,i),fs.subVectors(o,i),br.subVectors(e,i);const r=us.dot(br),c=fs.dot(br);if(r<=0&&c<=0)return t.copy(i);Sr.subVectors(e,s);const d=us.dot(Sr),p=fs.dot(Sr);if(d>=0&&p<=d)return t.copy(s);const f=r*p-d*c;if(f<=0&&r>=0&&d<=0)return a=r/(r-d),t.copy(i).addScaledVector(us,a);wr.subVectors(e,o);const h=us.dot(wr),y=fs.dot(wr);if(y>=0&&h<=y)return t.copy(o);const m=h*c-r*y;if(m<=0&&c>=0&&y<=0)return l=c/(c-y),t.copy(i).addScaledVector(fs,l);const u=d*y-h*p;if(u<=0&&p-d>=0&&h-y>=0)return nh.subVectors(o,s),l=(p-d)/(p-d+(h-y)),t.copy(s).addScaledVector(nh,l);const g=1/(u+m+f);return a=m*g,l=f*g,t.copy(i).addScaledVector(us,a).addScaledVector(fs,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},qo={h:0,s:0,l:0};function Cr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=hc(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,a=2*i-o;this.r=Cr(a,o,e+1/3),this.g=Cr(a,o,e),this.b=Cr(a,o,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=Ud[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return at.fromWorkingColorSpace(Gt.copy(this),e),Math.round(zt(Gt.r*255,0,255))*65536+Math.round(zt(Gt.g*255,0,255))*256+Math.round(zt(Gt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,s=Gt.g,o=Gt.b,a=Math.max(i,s,o),l=Math.min(i,s,o);let r,c;const d=(l+a)/2;if(l===a)r=0,c=0;else{const p=a-l;switch(c=d<=.5?p/(a+l):p/(2-a-l),a){case i:r=(s-o)/p+(s<o?6:0);break;case s:r=(o-i)/p+2;break;case o:r=(i-s)/p+4;break}r/=6}return e.h=r,e.s=c,e.l=d,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Yt){at.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,s=Gt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(qo);const i=_o(gi.h,qo.h,t),s=_o(gi.s,qo.s,t),o=_o(gi.l,qo.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Fe;Fe.NAMES=Ud;let ip=0;class Ri extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Ps,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=al,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ol&&(i.blendSrc=this.blendSrc),this.blendDst!==al&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const a=[];for(const l in o){const r=o[l];delete r.metadata,a.push(r)}return a}if(t){const o=s(e.textures),a=s(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gs extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new P,Ko=new de;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wl,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ko.fromBufferAttribute(this,t),Ko.applyMatrix3(e),this.setXY(t,Ko.x,Ko.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array),o=ct(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wl&&(e.usage=this.usage),e}}class Od extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fd extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mt extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sp=0;const xn=new rt,Rr=new At,ps=new P,mn=new Qi,eo=new Qi,Ot=new P;class Pt extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Id(e)?Fd:Od)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new We().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return Rr.lookAt(e),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];mn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const l=t[o];eo.setFromBufferAttribute(l),this.morphTargetsRelative?(Ot.addVectors(mn.min,eo.min),mn.expandByPoint(Ot),Ot.addVectors(mn.max,eo.max),mn.expandByPoint(Ot)):(mn.expandByPoint(eo.min),mn.expandByPoint(eo.max))}mn.getCenter(i);let s=0;for(let o=0,a=e.count;o<a;o++)Ot.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let o=0,a=t.length;o<a;o++){const l=t[o],r=this.morphTargetsRelative;for(let c=0,d=l.count;c<d;c++)Ot.fromBufferAttribute(l,c),r&&(ps.fromBufferAttribute(e,c),Ot.add(ps)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],r=[];for(let S=0;S<i.count;S++)l[S]=new P,r[S]=new P;const c=new P,d=new P,p=new P,f=new de,h=new de,y=new de,m=new P,u=new P;function g(S,C,v){c.fromBufferAttribute(i,S),d.fromBufferAttribute(i,C),p.fromBufferAttribute(i,v),f.fromBufferAttribute(o,S),h.fromBufferAttribute(o,C),y.fromBufferAttribute(o,v),d.sub(c),p.sub(c),h.sub(f),y.sub(f);const x=1/(h.x*y.y-y.x*h.y);isFinite(x)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(p,-h.y).multiplyScalar(x),u.copy(p).multiplyScalar(h.x).addScaledVector(d,-y.x).multiplyScalar(x),l[S].add(m),l[C].add(m),l[v].add(m),r[S].add(u),r[C].add(u),r[v].add(u))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let S=0,C=M.length;S<C;++S){const v=M[S],x=v.start,R=v.count;for(let I=x,N=x+R;I<N;I+=3)g(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const w=new P,E=new P,L=new P,b=new P;function _(S){L.fromBufferAttribute(s,S),b.copy(L);const C=l[S];w.copy(C),w.sub(L.multiplyScalar(L.dot(C))).normalize(),E.crossVectors(b,C);const x=E.dot(r[S])<0?-1:1;a.setXYZW(S,w.x,w.y,w.z,x)}for(let S=0,C=M.length;S<C;++S){const v=M[S],x=v.start,R=v.count;for(let I=x,N=x+R;I<N;I+=3)_(e.getX(I+0)),_(e.getX(I+1)),_(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new P,o=new P,a=new P,l=new P,r=new P,c=new P,d=new P,p=new P;if(e)for(let f=0,h=e.count;f<h;f+=3){const y=e.getX(f+0),m=e.getX(f+1),u=e.getX(f+2);s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),a.fromBufferAttribute(t,u),d.subVectors(a,o),p.subVectors(s,o),d.cross(p),l.fromBufferAttribute(i,y),r.fromBufferAttribute(i,m),c.fromBufferAttribute(i,u),l.add(d),r.add(d),c.add(d),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,r.x,r.y,r.z),i.setXYZ(u,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,o),p.subVectors(s,o),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(l,r){const c=l.array,d=l.itemSize,p=l.normalized,f=new c.constructor(r.length*d);let h=0,y=0;for(let m=0,u=r.length;m<u;m++){l.isInterleavedBufferAttribute?h=r[m]*l.data.stride+l.offset:h=r[m]*d;for(let g=0;g<d;g++)f[y++]=c[h++]}return new yn(f,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,i=this.index.array,s=this.attributes;for(const l in s){const r=s[l],c=e(r,i);t.setAttribute(l,c)}const o=this.morphAttributes;for(const l in o){const r=[],c=o[l];for(let d=0,p=c.length;d<p;d++){const f=c[d],h=e(f,i);r.push(h)}t.morphAttributes[l]=r}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,r=a.length;l<r;l++){const c=a[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const r=this.parameters;for(const c in r)r[c]!==void 0&&(e[c]=r[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const r in i){const c=i[r];e.data.attributes[r]=c.toJSON(e.data)}const s={};let o=!1;for(const r in this.morphAttributes){const c=this.morphAttributes[r],d=[];for(let p=0,f=c.length;p<f;p++){const h=c[p];d.push(h.toJSON(e.data))}d.length>0&&(s[r]=d,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const o=e.morphAttributes;for(const c in o){const d=[],p=o[c];for(let f=0,h=p.length;f<h;f++)d.push(p[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const r=e.boundingSphere;return r!==null&&(this.boundingSphere=r.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ih=new rt,Di=new dc,jo=new es,sh=new P,Jo=new P,Zo=new P,Qo=new P,Pr=new P,ea=new P,oh=new P,ta=new P;class Ae extends At{constructor(e=new Pt,t=new Gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(o&&l){ea.set(0,0,0);for(let r=0,c=o.length;r<c;r++){const d=l[r],p=o[r];d!==0&&(Pr.fromBufferAttribute(p,e),a?ea.addScaledVector(Pr,d):ea.addScaledVector(Pr.sub(t),d))}t.add(ea)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(o),Di.copy(e.ray).recast(e.near),!(jo.containsPoint(Di.origin)===!1&&(Di.intersectSphere(jo,sh)===null||Di.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(ih.copy(o).invert(),Di.copy(e.ray).applyMatrix4(ih),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,i){let s;const o=this.geometry,a=this.material,l=o.index,r=o.attributes.position,c=o.attributes.uv,d=o.attributes.uv1,p=o.attributes.normal,f=o.groups,h=o.drawRange;if(l!==null)if(Array.isArray(a))for(let y=0,m=f.length;y<m;y++){const u=f[y],g=a[u.materialIndex],M=Math.max(u.start,h.start),w=Math.min(l.count,Math.min(u.start+u.count,h.start+h.count));for(let E=M,L=w;E<L;E+=3){const b=l.getX(E),_=l.getX(E+1),S=l.getX(E+2);s=na(this,g,e,i,c,d,p,b,_,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const y=Math.max(0,h.start),m=Math.min(l.count,h.start+h.count);for(let u=y,g=m;u<g;u+=3){const M=l.getX(u),w=l.getX(u+1),E=l.getX(u+2);s=na(this,a,e,i,c,d,p,M,w,E),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}else if(r!==void 0)if(Array.isArray(a))for(let y=0,m=f.length;y<m;y++){const u=f[y],g=a[u.materialIndex],M=Math.max(u.start,h.start),w=Math.min(r.count,Math.min(u.start+u.count,h.start+h.count));for(let E=M,L=w;E<L;E+=3){const b=E,_=E+1,S=E+2;s=na(this,g,e,i,c,d,p,b,_,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const y=Math.max(0,h.start),m=Math.min(r.count,h.start+h.count);for(let u=y,g=m;u<g;u+=3){const M=u,w=u+1,E=u+2;s=na(this,a,e,i,c,d,p,M,w,E),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}}}function op(n,e,t,i,s,o,a,l){let r;if(e.side===en?r=i.intersectTriangle(a,o,s,!0,l):r=i.intersectTriangle(s,o,a,e.side===ri,l),r===null)return null;ta.copy(l),ta.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ta);return c<t.near||c>t.far?null:{distance:c,point:ta.clone(),object:n}}function na(n,e,t,i,s,o,a,l,r,c){n.getVertexPosition(l,Jo),n.getVertexPosition(r,Zo),n.getVertexPosition(c,Qo);const d=op(n,e,t,i,Jo,Zo,Qo,oh);if(d){const p=new P;Sn.getBarycoord(oh,Jo,Zo,Qo,p),s&&(d.uv=Sn.getInterpolatedAttribute(s,l,r,c,p,new de)),o&&(d.uv1=Sn.getInterpolatedAttribute(o,l,r,c,p,new de)),a&&(d.normal=Sn.getInterpolatedAttribute(a,l,r,c,p,new P),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:l,b:r,c,normal:new P,materialIndex:0};Sn.getNormal(Jo,Zo,Qo,f.normal),d.face=f,d.barycoord=p}return d}class qe extends Pt{constructor(e=1,t=1,i=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:a};const l=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const r=[],c=[],d=[],p=[];let f=0,h=0;y("z","y","x",-1,-1,i,t,e,a,o,0),y("z","y","x",1,-1,i,t,-e,a,o,1),y("x","z","y",1,1,e,i,t,s,a,2),y("x","z","y",1,-1,e,i,-t,s,a,3),y("x","y","z",1,-1,e,t,i,s,o,4),y("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(r),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(p,2));function y(m,u,g,M,w,E,L,b,_,S,C){const v=E/_,x=L/S,R=E/2,I=L/2,N=b/2,k=_+1,U=S+1;let G=0,V=0;const ne=new P;for(let se=0;se<U;se++){const ce=se*x-I;for(let $e=0;$e<k;$e++){const Be=$e*v-R;ne[m]=Be*M,ne[u]=ce*w,ne[g]=N,c.push(ne.x,ne.y,ne.z),ne[m]=0,ne[u]=0,ne[g]=b>0?1:-1,d.push(ne.x,ne.y,ne.z),p.push($e/_),p.push(1-se/S),G+=1}}for(let se=0;se<S;se++)for(let ce=0;ce<_;ce++){const $e=f+ce+k*se,Be=f+ce+k*(se+1),K=f+(ce+1)+k*(se+1),Q=f+(ce+1)+k*se;r.push($e,Be,Q),r.push(Be,K,Q),V+=6}l.addGroup(h,V,C),h+=V,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=zs(n[t]);for(const s in i)e[s]=i[s]}return e}function ap(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const rp={clone:zs,merge:Zt};var lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lp,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=ap(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class zd extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new P,ah=new de,rh=new de;class ln extends zd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,ah,rh),t.subVectors(rh,ah)}setViewOffset(e,t,i,s,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const r=a.fullWidth,c=a.fullHeight;o+=a.offsetX*s/r,t-=a.offsetY*i/c,s*=a.width/r,i*=a.height/c}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ms=-90,gs=1;class hp extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(ms,gs,e,t);s.layers=this.layers,this.add(s);const o=new ln(ms,gs,e,t);o.layers=this.layers,this.add(o);const a=new ln(ms,gs,e,t);a.layers=this.layers,this.add(a);const l=new ln(ms,gs,e,t);l.layers=this.layers,this.add(l);const r=new ln(ms,gs,e,t);r.layers=this.layers,this.add(r);const c=new ln(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,a,l,r]=t;for(const c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),r.up.set(0,1,0),r.lookAt(0,0,-1);else if(e===Fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),r.up.set(0,-1,0),r.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,l,r,c,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,o),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,l),e.setRenderTarget(i,3,s),e.render(t,r),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,s),e.render(t,d),e.setRenderTarget(p,f,h),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Hd extends qt{constructor(e,t,i,s,o,a,l,r,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Us,super(e,t,i,s,o,a,l,r,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dp extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Hd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qe(5,5,5),o=new Ei({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:bi});o.uniforms.tEquirect.value=t;const a=new Ae(s,o),l=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Ln),new hp(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(o)}}const Lr=new P,up=new P,fp=new We;class zi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Lr.subVectors(i,t).cross(up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Lr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fp.getNormalMatrix(e),s=this.coplanarPoint(Lr).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new es,ia=new P;class uc{constructor(e=new zi,t=new zi,i=new zi,s=new zi,o=new zi,a=new zi){this.planes=[e,t,i,s,o,a]}set(e,t,i,s,o,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(s),l[4].copy(o),l[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],r=s[3],c=s[4],d=s[5],p=s[6],f=s[7],h=s[8],y=s[9],m=s[10],u=s[11],g=s[12],M=s[13],w=s[14],E=s[15];if(i[0].setComponents(r-o,f-c,u-h,E-g).normalize(),i[1].setComponents(r+o,f+c,u+h,E+g).normalize(),i[2].setComponents(r+a,f+d,u+y,E+M).normalize(),i[3].setComponents(r-a,f-d,u-y,E-M).normalize(),i[4].setComponents(r-l,f-p,u-m,E-w).normalize(),t===ni)i[5].setComponents(r+l,f+p,u+m,E+w).normalize();else if(t===Fa)i[5].setComponents(l,p,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ia.x=s.normal.x>0?e.max.x:e.min.x,ia.y=s.normal.y>0?e.max.y:e.min.y,ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vd(){let n=null,e=!1,t=null,i=null;function s(o,a){t(o,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function pp(n){const e=new WeakMap;function t(l,r){const c=l.array,d=l.usage,p=c.byteLength,f=n.createBuffer();n.bindBuffer(r,f),n.bufferData(r,c,d),l.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,r,c){const d=r.array,p=r.updateRanges;if(n.bindBuffer(c,l),p.length===0)n.bufferSubData(c,0,d);else{p.sort((h,y)=>h.start-y.start);let f=0;for(let h=1;h<p.length;h++){const y=p[f],m=p[h];m.start<=y.start+y.count+1?y.count=Math.max(y.count,m.start+m.count-y.start):(++f,p[f]=m)}p.length=f+1;for(let h=0,y=p.length;h<y;h++){const m=p[h];n.bufferSubData(c,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count)}r.clearUpdateRanges()}r.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const r=e.get(l);r&&(n.deleteBuffer(r.buffer),e.delete(l))}function a(l,r){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,r));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,r),c.version=l.version}}return{get:s,remove:o,update:a}}class rn extends Pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,a=t/2,l=Math.floor(i),r=Math.floor(s),c=l+1,d=r+1,p=e/l,f=t/r,h=[],y=[],m=[],u=[];for(let g=0;g<d;g++){const M=g*f-a;for(let w=0;w<c;w++){const E=w*p-o;y.push(E,-M,0),m.push(0,0,1),u.push(w/l),u.push(1-g/r)}}for(let g=0;g<r;g++)for(let M=0;M<l;M++){const w=M+c*g,E=M+c*(g+1),L=M+1+c*(g+1),b=M+1+c*g;h.push(w,E,b),h.push(E,L,b)}this.setIndex(h),this.setAttribute("position",new mt(y,3)),this.setAttribute("normal",new mt(m,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.widthSegments,e.heightSegments)}}var mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ap=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,am=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,n0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,M0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,b0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,S0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,D0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,N0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,B0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,X0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:mp,alphahash_pars_fragment:gp,alphamap_fragment:vp,alphamap_pars_fragment:yp,alphatest_fragment:_p,alphatest_pars_fragment:xp,aomap_fragment:Mp,aomap_pars_fragment:bp,batching_pars_vertex:Sp,batching_vertex:wp,begin_vertex:Ep,beginnormal_vertex:Tp,bsdfs:Ap,iridescence_fragment:Cp,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Lp,clipping_planes_pars_vertex:Ip,clipping_planes_vertex:Dp,color_fragment:kp,color_pars_fragment:Np,color_pars_vertex:Up,color_vertex:Op,common:Fp,cube_uv_reflection_fragment:Bp,defaultnormal_vertex:zp,displacementmap_pars_vertex:Hp,displacementmap_vertex:Vp,emissivemap_fragment:Wp,emissivemap_pars_fragment:$p,colorspace_fragment:Gp,colorspace_pars_fragment:Xp,envmap_fragment:Yp,envmap_common_pars_fragment:qp,envmap_pars_fragment:Kp,envmap_pars_vertex:jp,envmap_physical_pars_fragment:rm,envmap_vertex:Jp,fog_vertex:Zp,fog_pars_vertex:Qp,fog_fragment:em,fog_pars_fragment:tm,gradientmap_pars_fragment:nm,lightmap_pars_fragment:im,lights_lambert_fragment:sm,lights_lambert_pars_fragment:om,lights_pars_begin:am,lights_toon_fragment:lm,lights_toon_pars_fragment:cm,lights_phong_fragment:hm,lights_phong_pars_fragment:dm,lights_physical_fragment:um,lights_physical_pars_fragment:fm,lights_fragment_begin:pm,lights_fragment_maps:mm,lights_fragment_end:gm,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:ym,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:xm,map_fragment:Mm,map_pars_fragment:bm,map_particle_fragment:Sm,map_particle_pars_fragment:wm,metalnessmap_fragment:Em,metalnessmap_pars_fragment:Tm,morphinstance_vertex:Am,morphcolor_vertex:Cm,morphnormal_vertex:Rm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Lm,normal_fragment_begin:Im,normal_fragment_maps:Dm,normal_pars_fragment:km,normal_pars_vertex:Nm,normal_vertex:Um,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:Bm,clearcoat_pars_fragment:zm,iridescence_pars_fragment:Hm,opaque_fragment:Vm,packing:Wm,premultiplied_alpha_fragment:$m,project_vertex:Gm,dithering_fragment:Xm,dithering_pars_fragment:Ym,roughnessmap_fragment:qm,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:jm,shadowmap_pars_vertex:Jm,shadowmap_vertex:Zm,shadowmask_pars_fragment:Qm,skinbase_vertex:e0,skinning_pars_vertex:t0,skinning_vertex:n0,skinnormal_vertex:i0,specularmap_fragment:s0,specularmap_pars_fragment:o0,tonemapping_fragment:a0,tonemapping_pars_fragment:r0,transmission_fragment:l0,transmission_pars_fragment:c0,uv_pars_fragment:h0,uv_pars_vertex:d0,uv_vertex:u0,worldpos_vertex:f0,background_vert:p0,background_frag:m0,backgroundCube_vert:g0,backgroundCube_frag:v0,cube_vert:y0,cube_frag:_0,depth_vert:x0,depth_frag:M0,distanceRGBA_vert:b0,distanceRGBA_frag:S0,equirect_vert:w0,equirect_frag:E0,linedashed_vert:T0,linedashed_frag:A0,meshbasic_vert:C0,meshbasic_frag:R0,meshlambert_vert:P0,meshlambert_frag:L0,meshmatcap_vert:I0,meshmatcap_frag:D0,meshnormal_vert:k0,meshnormal_frag:N0,meshphong_vert:U0,meshphong_frag:O0,meshphysical_vert:F0,meshphysical_frag:B0,meshtoon_vert:z0,meshtoon_frag:H0,points_vert:V0,points_frag:W0,shadow_vert:$0,shadow_frag:G0,sprite_vert:X0,sprite_frag:Y0},le={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Bn={basic:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Zt([le.points,le.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Zt([le.common,le.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Zt([le.sprite,le.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Zt([le.common,le.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Zt([le.lights,le.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Bn.physical={uniforms:Zt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const sa={r:0,b:0,g:0},Ni=new ci,q0=new rt;function K0(n,e,t,i,s,o,a){const l=new Fe(0);let r=o===!0?0:1,c,d,p=null,f=0,h=null;function y(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?t:e).get(w)),w}function m(M){let w=!1;const E=y(M);E===null?g(l,r):E&&E.isColor&&(g(E,1),w=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function u(M,w){const E=y(w);E&&(E.isCubeTexture||E.mapping===er)?(d===void 0&&(d=new Ae(new qe(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:zs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,b,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Ni.copy(w.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(q0.makeRotationFromEuler(Ni)),d.material.toneMapped=at.getTransfer(E.colorSpace)!==Mt,(p!==E||f!==E.version||h!==n.toneMapping)&&(d.material.needsUpdate=!0,p=E,f=E.version,h=n.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ae(new rn(2,2),new Ei({name:"BackgroundMaterial",uniforms:zs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=at.getTransfer(E.colorSpace)!==Mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||f!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,p=E,f=E.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,w){M.getRGB(sa,Bd(n)),i.buffers.color.setClear(sa.r,sa.g,sa.b,w,a)}return{getClearColor:function(){return l},setClearColor:function(M,w=1){l.set(M),r=w,g(l,r)},getClearAlpha:function(){return r},setClearAlpha:function(M){r=M,g(l,r)},render:m,addToRenderList:u}}function j0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let o=s,a=!1;function l(v,x,R,I,N){let k=!1;const U=p(I,R,x);o!==U&&(o=U,c(o.object)),k=h(v,I,R,N),k&&y(v,I,R,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,E(v,x,R,I),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function r(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function d(v){return n.deleteVertexArray(v)}function p(v,x,R){const I=R.wireframe===!0;let N=i[v.id];N===void 0&&(N={},i[v.id]=N);let k=N[x.id];k===void 0&&(k={},N[x.id]=k);let U=k[I];return U===void 0&&(U=f(r()),k[I]=U),U}function f(v){const x=[],R=[],I=[];for(let N=0;N<t;N++)x[N]=0,R[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:R,attributeDivisors:I,object:v,attributes:{},index:null}}function h(v,x,R,I){const N=o.attributes,k=x.attributes;let U=0;const G=R.getAttributes();for(const V in G)if(G[V].location>=0){const se=N[V];let ce=k[V];if(ce===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ce=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ce=v.instanceColor)),se===void 0||se.attribute!==ce||ce&&se.data!==ce.data)return!0;U++}return o.attributesNum!==U||o.index!==I}function y(v,x,R,I){const N={},k=x.attributes;let U=0;const G=R.getAttributes();for(const V in G)if(G[V].location>=0){let se=k[V];se===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(se=v.instanceColor));const ce={};ce.attribute=se,se&&se.data&&(ce.data=se.data),N[V]=ce,U++}o.attributes=N,o.attributesNum=U,o.index=I}function m(){const v=o.newAttributes;for(let x=0,R=v.length;x<R;x++)v[x]=0}function u(v){g(v,0)}function g(v,x){const R=o.newAttributes,I=o.enabledAttributes,N=o.attributeDivisors;R[v]=1,I[v]===0&&(n.enableVertexAttribArray(v),I[v]=1),N[v]!==x&&(n.vertexAttribDivisor(v,x),N[v]=x)}function M(){const v=o.newAttributes,x=o.enabledAttributes;for(let R=0,I=x.length;R<I;R++)x[R]!==v[R]&&(n.disableVertexAttribArray(R),x[R]=0)}function w(v,x,R,I,N,k,U){U===!0?n.vertexAttribIPointer(v,x,R,N,k):n.vertexAttribPointer(v,x,R,I,N,k)}function E(v,x,R,I){m();const N=I.attributes,k=R.getAttributes(),U=x.defaultAttributeValues;for(const G in k){const V=k[G];if(V.location>=0){let ne=N[G];if(ne===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor)),ne!==void 0){const se=ne.normalized,ce=ne.itemSize,$e=e.get(ne);if($e===void 0)continue;const Be=$e.buffer,K=$e.type,Q=$e.bytesPerElement,Me=K===n.INT||K===n.UNSIGNED_INT||ne.gpuType===ic;if(ne.isInterleavedBufferAttribute){const ve=ne.data,ze=ve.stride,Le=ne.offset;if(ve.isInstancedInterleavedBuffer){for(let je=0;je<V.locationSize;je++)g(V.location+je,ve.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let je=0;je<V.locationSize;je++)u(V.location+je);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let je=0;je<V.locationSize;je++)w(V.location+je,ce/V.locationSize,K,se,ze*Q,(Le+ce/V.locationSize*je)*Q,Me)}else{if(ne.isInstancedBufferAttribute){for(let ve=0;ve<V.locationSize;ve++)g(V.location+ve,ne.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ve=0;ve<V.locationSize;ve++)u(V.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let ve=0;ve<V.locationSize;ve++)w(V.location+ve,ce/V.locationSize,K,se,ce*Q,ce/V.locationSize*ve*Q,Me)}}else if(U!==void 0){const se=U[G];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(V.location,se);break;case 3:n.vertexAttrib3fv(V.location,se);break;case 4:n.vertexAttrib4fv(V.location,se);break;default:n.vertexAttrib1fv(V.location,se)}}}}M()}function L(){S();for(const v in i){const x=i[v];for(const R in x){const I=x[R];for(const N in I)d(I[N].object),delete I[N];delete x[R]}delete i[v]}}function b(v){if(i[v.id]===void 0)return;const x=i[v.id];for(const R in x){const I=x[R];for(const N in I)d(I[N].object),delete I[N];delete x[R]}delete i[v.id]}function _(v){for(const x in i){const R=i[x];if(R[v.id]===void 0)continue;const I=R[v.id];for(const N in I)d(I[N].object),delete I[N];delete R[v.id]}}function S(){C(),a=!0,o!==s&&(o=s,c(o.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:S,resetDefaultState:C,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:_,initAttributes:m,enableAttribute:u,disableUnusedAttributes:M}}function J0(n,e,t){let i;function s(c){i=c}function o(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function a(c,d,p){p!==0&&(n.drawArraysInstanced(i,c,d,p),t.update(d,i,p))}function l(c,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,p);let h=0;for(let y=0;y<p;y++)h+=d[y];t.update(h,i,1)}function r(c,d,p,f){if(p===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let y=0;y<c.length;y++)a(c[y],d[y],f[y]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,p);let y=0;for(let m=0;m<p;m++)y+=d[m];for(let m=0;m<f.length;m++)t.update(y,i,f[m])}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=r}function Z0(n,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==kn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(_){const S=_===Lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==li&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==Vn&&!S)}function r(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=r(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const _=e.get("EXT_clip_control");_.clipControlEXT(_.LOWER_LEFT_EXT,_.ZERO_TO_ONE_EXT)}const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),u=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=y>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:r,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:y,maxTextureSize:m,maxCubemapSize:u,maxAttributes:g,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:E,vertexTextures:L,maxSamples:b}}function Q0(n){const e=this;let t=null,i=0,s=!1,o=!1;const a=new zi,l=new We,r={value:null,needsUpdate:!1};this.uniform=r,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const h=p.length!==0||f||i!==0||s;return s=f,i=p.length,h},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,f){t=d(p,f,0)},this.setState=function(p,f,h){const y=p.clippingPlanes,m=p.clipIntersection,u=p.clipShadows,g=n.get(p);if(!s||y===null||y.length===0||o&&!u)o?d(null):c();else{const M=o?0:i,w=M*4;let E=g.clippingState||null;r.value=E,E=d(y,f,w,h);for(let L=0;L!==w;++L)E[L]=t[L];g.clippingState=E,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function c(){r.value!==t&&(r.value=t,r.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,f,h,y){const m=p!==null?p.length:0;let u=null;if(m!==0){if(u=r.value,y!==!0||u===null){const g=h+m*4,M=f.matrixWorldInverse;l.getNormalMatrix(M),(u===null||u.length<g)&&(u=new Float32Array(g));for(let w=0,E=h;w!==m;++w,E+=4)a.copy(p[w]).applyMatrix4(M,l),a.normal.toArray(u,E),u[E+3]=a.constant}r.value=u,r.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,u}}function eg(n){let e=new WeakMap;function t(a,l){return l===pl?a.mapping=Us:l===ml&&(a.mapping=Os),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===pl||l===ml)if(e.has(a)){const r=e.get(a).texture;return t(r,a.mapping)}else{const r=a.image;if(r&&r.height>0){const c=new dp(r.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const l=a.target;l.removeEventListener("dispose",s);const r=e.get(l);r!==void 0&&(e.delete(l),r.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Wd extends zd{constructor(e=-1,t=1,i=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,a=i+e,l=s+t,r=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,l-=d*this.view.offsetY,r=l-d*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,r,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=4,lh=[.125,.215,.35,.446,.526,.582],Xi=20,Ir=new Wd,ch=new Fe;let Dr=null,kr=0,Nr=0,Ur=!1;const Hi=(1+Math.sqrt(5))/2,vs=1/Hi,hh=[new P(-Hi,vs,0),new P(Hi,vs,0),new P(-vs,0,Hi),new P(vs,0,Hi),new P(0,Hi,-vs),new P(0,Hi,vs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class dh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Dr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dr,kr,Nr),this._renderer.xr.enabled=Ur,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Lo,format:kn,colorSpace:Ci,depthBuffer:!1},s=uh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uh(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tg(o)),this._blurMaterial=ng(o,e,t)}return s}_compileMaterial(e){const t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,Ir)}_sceneToCubeUV(e,t,i,s){const l=new ln(90,1,t,i),r=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(ch),d.toneMapping=Si,d.autoClear=!1;const h=new Gs({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),y=new Ae(new qe,h);let m=!1;const u=e.background;u?u.isColor&&(h.color.copy(u),e.background=null,m=!0):(h.color.copy(ch),m=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(l.up.set(0,r[g],0),l.lookAt(c[g],0,0)):M===1?(l.up.set(0,0,r[g]),l.lookAt(0,c[g],0)):(l.up.set(0,r[g],0),l.lookAt(0,0,c[g]));const w=this._cubeSize;oa(s,M*w,g>2?w:0,w,w),d.setRenderTarget(s),m&&d.render(y,l),d.render(e,l)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=u}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Us||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const r=this._cubeSize;oa(t,0,0,3*r,2*r),i.setRenderTarget(t),i.render(a,Ir)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=hh[(s-o-1)%hh.length];this._blur(e,o-1,o,a,l)}t.autoClear=i}_blur(e,t,i,s,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",o),this._halfBlur(a,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,a,l){const r=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Ae(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*Xi-1),m=o/y,u=isFinite(o)?1+Math.floor(d*m):Xi;u>Xi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Xi}`);const g=[];let M=0;for(let _=0;_<Xi;++_){const S=_/m,C=Math.exp(-S*S/2);g.push(C),_===0?M+=C:_<u&&(M+=2*C)}for(let _=0;_<g.length;_++)g[_]=g[_]/M;f.envMap.value=e.texture,f.samples.value=u,f.weights.value=g,f.latitudinal.value=a==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:w}=this;f.dTheta.value=y,f.mipInt.value=w-i;const E=this._sizeLods[s],L=3*E*(s>w-Ts?s-w+Ts:0),b=4*(this._cubeSize-E);oa(t,L,b,3*E,2*E),r.setRenderTarget(t),r.render(p,Ir)}}function tg(n){const e=[],t=[],i=[];let s=n;const o=n-Ts+1+lh.length;for(let a=0;a<o;a++){const l=Math.pow(2,s);t.push(l);let r=1/l;a>n-Ts?r=lh[a-n+Ts-1]:a===0&&(r=0),i.push(r);const c=1/(l-2),d=-c,p=1+c,f=[d,d,p,d,p,p,d,d,p,p,d,p],h=6,y=6,m=3,u=2,g=1,M=new Float32Array(m*y*h),w=new Float32Array(u*y*h),E=new Float32Array(g*y*h);for(let b=0;b<h;b++){const _=b%3*2/3-1,S=b>2?0:-1,C=[_,S,0,_+2/3,S,0,_+2/3,S+1,0,_,S,0,_+2/3,S+1,0,_,S+1,0];M.set(C,m*y*b),w.set(f,u*y*b);const v=[b,b,b,b,b,b];E.set(v,g*y*b)}const L=new Pt;L.setAttribute("position",new yn(M,m)),L.setAttribute("uv",new yn(w,u)),L.setAttribute("faceIndex",new yn(E,g)),e.push(L),s>Ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function uh(n,e,t){const i=new ji(n,e,t);return i.texture.mapping=er,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ng(n,e,t){const i=new Float32Array(Xi),s=new P(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function fh(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function ph(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ig(n){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const r=l.mapping,c=r===pl||r===ml,d=r===Us||r===Os;if(c||d){let p=e.get(l);const f=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return t===null&&(t=new dh(n)),p=c?t.fromEquirectangular(l,p):t.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),p.texture;if(p!==void 0)return p.texture;{const h=l.image;return c&&h&&h.height>0||d&&h&&s(h)?(t===null&&(t=new dh(n)),p=c?t.fromEquirectangular(l):t.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),l.addEventListener("dispose",o),p.texture):null}}}return l}function s(l){let r=0;const c=6;for(let d=0;d<c;d++)l[d]!==void 0&&r++;return r===c}function o(l){const r=l.target;r.removeEventListener("dispose",o);const c=e.get(r);c!==void 0&&(e.delete(r),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function sg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Aa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function og(n,e,t,i){const s={},o=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const m=f.morphAttributes[y];for(let u=0,g=m.length;u<g;u++)e.remove(m[u])}f.removeEventListener("dispose",a),delete s[f.id];const h=o.get(f);h&&(e.remove(h),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(p,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function r(p){const f=p.attributes;for(const y in f)e.update(f[y],n.ARRAY_BUFFER);const h=p.morphAttributes;for(const y in h){const m=h[y];for(let u=0,g=m.length;u<g;u++)e.update(m[u],n.ARRAY_BUFFER)}}function c(p){const f=[],h=p.index,y=p.attributes.position;let m=0;if(h!==null){const M=h.array;m=h.version;for(let w=0,E=M.length;w<E;w+=3){const L=M[w+0],b=M[w+1],_=M[w+2];f.push(L,b,b,_,_,L)}}else if(y!==void 0){const M=y.array;m=y.version;for(let w=0,E=M.length/3-1;w<E;w+=3){const L=w+0,b=w+1,_=w+2;f.push(L,b,b,_,_,L)}}else return;const u=new(Id(f)?Fd:Od)(f,1);u.version=m;const g=o.get(p);g&&e.remove(g),o.set(p,u)}function d(p){const f=o.get(p);if(f){const h=p.index;h!==null&&f.version<h.version&&c(p)}else c(p);return o.get(p)}return{get:l,update:r,getWireframeAttribute:d}}function ag(n,e,t){let i;function s(f){i=f}let o,a;function l(f){o=f.type,a=f.bytesPerElement}function r(f,h){n.drawElements(i,h,o,f*a),t.update(h,i,1)}function c(f,h,y){y!==0&&(n.drawElementsInstanced(i,h,o,f*a,y),t.update(h,i,y))}function d(f,h,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,o,f,0,y);let u=0;for(let g=0;g<y;g++)u+=h[g];t.update(u,i,1)}function p(f,h,y,m){if(y===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<f.length;g++)c(f[g]/a,h[g],m[g]);else{u.multiDrawElementsInstancedWEBGL(i,h,0,o,f,0,m,0,y);let g=0;for(let M=0;M<y;M++)g+=h[M];for(let M=0;M<m.length;M++)t.update(g,i,m[M])}}this.setMode=s,this.setIndex=l,this.render=r,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function rg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(o/3);break;case n.LINES:t.lines+=l*(o/2);break;case n.LINE_STRIP:t.lines+=l*(o-1);break;case n.LINE_LOOP:t.lines+=l*o;break;case n.POINTS:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function lg(n,e,t){const i=new WeakMap,s=new pt;function o(a,l,r){const c=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=d!==void 0?d.length:0;let f=i.get(l);if(f===void 0||f.count!==p){let v=function(){S.dispose(),i.delete(l),l.removeEventListener("dispose",v)};var h=v;f!==void 0&&f.texture.dispose();const y=l.morphAttributes.position!==void 0,m=l.morphAttributes.normal!==void 0,u=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],M=l.morphAttributes.normal||[],w=l.morphAttributes.color||[];let E=0;y===!0&&(E=1),m===!0&&(E=2),u===!0&&(E=3);let L=l.attributes.position.count*E,b=1;L>e.maxTextureSize&&(b=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const _=new Float32Array(L*b*4*p),S=new kd(_,L,b,p);S.type=Vn,S.needsUpdate=!0;const C=E*4;for(let x=0;x<p;x++){const R=g[x],I=M[x],N=w[x],k=L*b*4*x;for(let U=0;U<R.count;U++){const G=U*C;y===!0&&(s.fromBufferAttribute(R,U),_[k+G+0]=s.x,_[k+G+1]=s.y,_[k+G+2]=s.z,_[k+G+3]=0),m===!0&&(s.fromBufferAttribute(I,U),_[k+G+4]=s.x,_[k+G+5]=s.y,_[k+G+6]=s.z,_[k+G+7]=0),u===!0&&(s.fromBufferAttribute(N,U),_[k+G+8]=s.x,_[k+G+9]=s.y,_[k+G+10]=s.z,_[k+G+11]=N.itemSize===4?s.w:1)}}f={count:p,texture:S,size:new de(L,b)},i.set(l,f),l.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)r.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let y=0;for(let u=0;u<c.length;u++)y+=c[u];const m=l.morphTargetsRelative?1:1-y;r.getUniforms().setValue(n,"morphTargetBaseInfluence",m),r.getUniforms().setValue(n,"morphTargetInfluences",c)}r.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),r.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function cg(n,e,t,i){let s=new WeakMap;function o(r){const c=i.render.frame,d=r.geometry,p=e.get(r,d);if(s.get(p)!==c&&(e.update(p),s.set(p,c)),r.isInstancedMesh&&(r.hasEventListener("dispose",l)===!1&&r.addEventListener("dispose",l),s.get(r)!==c&&(t.update(r.instanceMatrix,n.ARRAY_BUFFER),r.instanceColor!==null&&t.update(r.instanceColor,n.ARRAY_BUFFER),s.set(r,c))),r.isSkinnedMesh){const f=r.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return p}function a(){s=new WeakMap}function l(r){const c=r.target;c.removeEventListener("dispose",l),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}class $d extends qt{constructor(e,t,i,s,o,a,l,r,c,d=Ls){if(d!==Ls&&d!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ls&&(i=Ki),i===void 0&&d===Bs&&(i=Fs),super(null,s,o,a,l,r,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Qt,this.minFilter=r!==void 0?r:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gd=new qt,mh=new $d(1,1),Xd=new kd,Yd=new Kf,qd=new Hd,gh=[],vh=[],yh=new Float32Array(16),_h=new Float32Array(9),xh=new Float32Array(4);function Xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let o=gh[s];if(o===void 0&&(o=new Float32Array(s),gh[s]=o),e!==0){i.toArray(o,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(o,l)}return o}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ir(n,e){let t=vh[e];t===void 0&&(t=new Int32Array(e),vh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function pg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;xh.set(i),n.uniformMatrix2fv(this.addr,!1,xh),Ut(t,i)}}function mg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;_h.set(i),n.uniformMatrix3fv(this.addr,!1,_h),Ut(t,i)}}function gg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;yh.set(i),n.uniformMatrix4fv(this.addr,!1,yh),Ut(t,i)}}function vg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Mg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Eg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(mh.compareFunction=Ld,o=mh):o=Gd,t.setTexture2D(e||o,s)}function Tg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Yd,s)}function Ag(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||qd,s)}function Cg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Xd,s)}function Rg(n){switch(n){case 5126:return hg;case 35664:return dg;case 35665:return ug;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return vg;case 35667:case 35671:return yg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return Mg;case 36294:return bg;case 36295:return Sg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Cg}}function Pg(n,e){n.uniform1fv(this.addr,e)}function Lg(n,e){const t=Xs(e,this.size,2);n.uniform2fv(this.addr,t)}function Ig(n,e){const t=Xs(e,this.size,3);n.uniform3fv(this.addr,t)}function Dg(n,e){const t=Xs(e,this.size,4);n.uniform4fv(this.addr,t)}function kg(n,e){const t=Xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ng(n,e){const t=Xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ug(n,e){const t=Xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Og(n,e){n.uniform1iv(this.addr,e)}function Fg(n,e){n.uniform2iv(this.addr,e)}function Bg(n,e){n.uniform3iv(this.addr,e)}function zg(n,e){n.uniform4iv(this.addr,e)}function Hg(n,e){n.uniform1uiv(this.addr,e)}function Vg(n,e){n.uniform2uiv(this.addr,e)}function Wg(n,e){n.uniform3uiv(this.addr,e)}function $g(n,e){n.uniform4uiv(this.addr,e)}function Gg(n,e,t){const i=this.cache,s=e.length,o=ir(t,s);Nt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Gd,o[a])}function Xg(n,e,t){const i=this.cache,s=e.length,o=ir(t,s);Nt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Yd,o[a])}function Yg(n,e,t){const i=this.cache,s=e.length,o=ir(t,s);Nt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||qd,o[a])}function qg(n,e,t){const i=this.cache,s=e.length,o=ir(t,s);Nt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Xd,o[a])}function Kg(n){switch(n){case 5126:return Pg;case 35664:return Lg;case 35665:return Ig;case 35666:return Dg;case 35674:return kg;case 35675:return Ng;case 35676:return Ug;case 5124:case 35670:return Og;case 35667:case 35671:return Fg;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return Hg;case 36294:return Vg;case 36295:return Wg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return qg}}class jg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rg(t.type)}}class Jg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kg(t.type)}}class Zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const l=s[o];l.setValue(e,t[l.id],i)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function Mh(n,e){n.seq.push(e),n.map[e.id]=e}function Qg(n,e,t){const i=n.name,s=i.length;for(Or.lastIndex=0;;){const o=Or.exec(i),a=Or.lastIndex;let l=o[1];const r=o[2]==="]",c=o[3];if(r&&(l=l|0),c===void 0||c==="["&&a+2===s){Mh(t,c===void 0?new jg(l,n,e):new Jg(l,n,e));break}else{let p=t.map[l];p===void 0&&(p=new Zg(l),Mh(t,p)),t=p}}}class Ca{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);Qg(o,a,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,a=t.length;o!==a;++o){const l=t[o],r=i[l.id];r.needsUpdate!==!1&&l.setValue(e,r.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function bh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ev=37297;let tv=0;function nv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=s;a<o;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}function iv(n){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(n);let i;switch(e===t?i="":e===Oa&&t===Ua?i="LinearDisplayP3ToLinearSRGB":e===Ua&&t===Oa&&(i="LinearSRGBToLinearDisplayP3"),n){case Ci:case nr:return[i,"LinearTransferOETF"];case Yt:case cc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Sh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+nv(n.getShaderSource(e),a)}else return s}function sv(n,e){const t=iv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ov(n,e){let t;switch(e){case af:t="Linear";break;case rf:t="Reinhard";break;case lf:t="Cineon";break;case cf:t="ACESFilmic";break;case df:t="AgX";break;case uf:t="Neutral";break;case hf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const aa=new P;function av(){at.getLuminanceCoefficients(aa);const n=aa.x.toFixed(4),e=aa.y.toFixed(4),t=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function lv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(e,s),a=o.name;let l=1;o.type===n.FLOAT_MAT2&&(l=2),o.type===n.FLOAT_MAT3&&(l=3),o.type===n.FLOAT_MAT4&&(l=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function mo(n){return n!==""}function wh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(n){return n.replace(hv,uv)}const dv=new Map;function uv(n,e){let t=Ve[e];if(t===void 0){const i=dv.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $l(t)}const fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(n){return n.replace(fv,pv)}function pv(n,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ah(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function gv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Us:case Os:e="ENVMAP_TYPE_CUBE";break;case er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function yv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _d:e="ENVMAP_BLENDING_MULTIPLY";break;case sf:e="ENVMAP_BLENDING_MIX";break;case of:e="ENVMAP_BLENDING_ADD";break}return e}function _v(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xv(n,e,t,i){const s=n.getContext(),o=t.defines;let a=t.vertexShader,l=t.fragmentShader;const r=mv(t),c=gv(t),d=vv(t),p=yv(t),f=_v(t),h=rv(t),y=lv(o),m=s.createProgram();let u,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(mo).join(`
`),u.length>0&&(u+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(mo).join(`
`),g.length>0&&(g+=`
`)):(u=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+r:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),g=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+r:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Si?ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,sv("linearToOutputTexel",t.outputColorSpace),av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),a=$l(a),a=wh(a,t),a=Eh(a,t),l=$l(l),l=wh(l,t),l=Eh(l,t),a=Th(a),l=Th(l),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,u=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["#define varying in",t.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=M+u+a,E=M+g+l,L=bh(s,s.VERTEX_SHADER,w),b=bh(s,s.FRAGMENT_SHADER,E);s.attachShader(m,L),s.attachShader(m,b),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function _(x){if(n.debug.checkShaderErrors){const R=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(L).trim(),N=s.getShaderInfoLog(b).trim();let k=!0,U=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,L,b);else{const G=Sh(s,L,"vertex"),V=Sh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+R+`
`+G+`
`+V)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(I===""||N==="")&&(U=!1);U&&(x.diagnostics={runnable:k,programLog:R,vertexShader:{log:I,prefix:u},fragmentShader:{log:N,prefix:g}})}s.deleteShader(L),s.deleteShader(b),S=new Ca(s,m),C=cv(s,m)}let S;this.getUniforms=function(){return S===void 0&&_(this),S};let C;this.getAttributes=function(){return C===void 0&&_(this),C};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(m,ev)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=L,this.fragmentShader=b,this}let Mv=0;class bv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sv(e),t.set(e,i)),i}}class Sv{constructor(e){this.id=Mv++,this.code=e,this.usedTimes=0}}function wv(n,e,t,i,s,o,a){const l=new Nd,r=new bv,c=new Set,d=[],p=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,h=s.vertexTextures;let y=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,x,R,I,N){const k=I.fog,U=N.geometry,G=v.isMeshStandardMaterial?I.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),ne=V&&V.mapping===er?V.image.height:null,se=m[v.type];v.precision!==null&&(y=s.getMaxPrecision(v.precision),y!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",y,"instead."));const ce=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,$e=ce!==void 0?ce.length:0;let Be=0;U.morphAttributes.position!==void 0&&(Be=1),U.morphAttributes.normal!==void 0&&(Be=2),U.morphAttributes.color!==void 0&&(Be=3);let K,Q,Me,ve;if(se){const sn=Bn[se];K=sn.vertexShader,Q=sn.fragmentShader}else K=v.vertexShader,Q=v.fragmentShader,r.update(v),Me=r.getVertexShaderID(v),ve=r.getFragmentShaderID(v);const ze=n.getRenderTarget(),Le=N.isInstancedMesh===!0,je=N.isBatchedMesh===!0,ut=!!v.map,Je=!!v.matcap,O=!!V,dn=!!v.aoMap,Xe=!!v.lightMap,et=!!v.bumpMap,De=!!v.normalMap,_t=!!v.displacementMap,Oe=!!v.emissiveMap,D=!!v.metalnessMap,T=!!v.roughnessMap,H=v.anisotropy>0,Z=v.clearcoat>0,ie=v.dispersion>0,J=v.iridescence>0,we=v.sheen>0,he=v.transmission>0,ye=H&&!!v.anisotropyMap,tt=Z&&!!v.clearcoatMap,oe=Z&&!!v.clearcoatNormalMap,_e=Z&&!!v.clearcoatRoughnessMap,ke=J&&!!v.iridescenceMap,Ne=J&&!!v.iridescenceThicknessMap,xe=we&&!!v.sheenColorMap,Ye=we&&!!v.sheenRoughnessMap,He=!!v.specularMap,gt=!!v.specularColorMap,F=!!v.specularIntensityMap,me=he&&!!v.transmissionMap,q=he&&!!v.thicknessMap,ee=!!v.gradientMap,ue=!!v.alphaMap,ge=v.alphaTest>0,Ze=!!v.alphaHash,Lt=!!v.extensions;let nn=Si;v.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(nn=n.toneMapping);const it={shaderID:se,shaderType:v.type,shaderName:v.name,vertexShader:K,fragmentShader:Q,defines:v.defines,customVertexShaderID:Me,customFragmentShaderID:ve,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:y,batching:je,batchingColor:je&&N._colorsTexture!==null,instancing:Le,instancingColor:Le&&N.instanceColor!==null,instancingMorph:Le&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ze===null?n.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:Ci,alphaToCoverage:!!v.alphaToCoverage,map:ut,matcap:Je,envMap:O,envMapMode:O&&V.mapping,envMapCubeUVHeight:ne,aoMap:dn,lightMap:Xe,bumpMap:et,normalMap:De,displacementMap:h&&_t,emissiveMap:Oe,normalMapObjectSpace:De&&v.normalMapType===gf,normalMapTangentSpace:De&&v.normalMapType===Pd,metalnessMap:D,roughnessMap:T,anisotropy:H,anisotropyMap:ye,clearcoat:Z,clearcoatMap:tt,clearcoatNormalMap:oe,clearcoatRoughnessMap:_e,dispersion:ie,iridescence:J,iridescenceMap:ke,iridescenceThicknessMap:Ne,sheen:we,sheenColorMap:xe,sheenRoughnessMap:Ye,specularMap:He,specularColorMap:gt,specularIntensityMap:F,transmission:he,transmissionMap:me,thicknessMap:q,gradientMap:ee,opaque:v.transparent===!1&&v.blending===Ps&&v.alphaToCoverage===!1,alphaMap:ue,alphaTest:ge,alphaHash:Ze,combine:v.combine,mapUv:ut&&u(v.map.channel),aoMapUv:dn&&u(v.aoMap.channel),lightMapUv:Xe&&u(v.lightMap.channel),bumpMapUv:et&&u(v.bumpMap.channel),normalMapUv:De&&u(v.normalMap.channel),displacementMapUv:_t&&u(v.displacementMap.channel),emissiveMapUv:Oe&&u(v.emissiveMap.channel),metalnessMapUv:D&&u(v.metalnessMap.channel),roughnessMapUv:T&&u(v.roughnessMap.channel),anisotropyMapUv:ye&&u(v.anisotropyMap.channel),clearcoatMapUv:tt&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&u(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&u(v.sheenRoughnessMap.channel),specularMapUv:He&&u(v.specularMap.channel),specularColorMapUv:gt&&u(v.specularColorMap.channel),specularIntensityMapUv:F&&u(v.specularIntensityMap.channel),transmissionMapUv:me&&u(v.transmissionMap.channel),thicknessMapUv:q&&u(v.thicknessMap.channel),alphaMapUv:ue&&u(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(De||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(ut||ue),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:$e,morphTextureStride:Be,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:nn,decodeVideoTexture:ut&&v.map.isVideoTexture===!0&&at.getTransfer(v.map.colorSpace)===Mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Hn,flipSided:v.side===en,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Lt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&v.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function M(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)x.push(R),x.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(w(x,v),E(x,v),x.push(n.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function w(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function E(v,x){l.disableAll(),x.supportsVertexTextures&&l.enable(0),x.instancing&&l.enable(1),x.instancingColor&&l.enable(2),x.instancingMorph&&l.enable(3),x.matcap&&l.enable(4),x.envMap&&l.enable(5),x.normalMapObjectSpace&&l.enable(6),x.normalMapTangentSpace&&l.enable(7),x.clearcoat&&l.enable(8),x.iridescence&&l.enable(9),x.alphaTest&&l.enable(10),x.vertexColors&&l.enable(11),x.vertexAlphas&&l.enable(12),x.vertexUv1s&&l.enable(13),x.vertexUv2s&&l.enable(14),x.vertexUv3s&&l.enable(15),x.vertexTangents&&l.enable(16),x.anisotropy&&l.enable(17),x.alphaHash&&l.enable(18),x.batching&&l.enable(19),x.dispersion&&l.enable(20),x.batchingColor&&l.enable(21),v.push(l.mask),l.disableAll(),x.fog&&l.enable(0),x.useFog&&l.enable(1),x.flatShading&&l.enable(2),x.logarithmicDepthBuffer&&l.enable(3),x.reverseDepthBuffer&&l.enable(4),x.skinning&&l.enable(5),x.morphTargets&&l.enable(6),x.morphNormals&&l.enable(7),x.morphColors&&l.enable(8),x.premultipliedAlpha&&l.enable(9),x.shadowMapEnabled&&l.enable(10),x.doubleSided&&l.enable(11),x.flipSided&&l.enable(12),x.useDepthPacking&&l.enable(13),x.dithering&&l.enable(14),x.transmission&&l.enable(15),x.sheen&&l.enable(16),x.opaque&&l.enable(17),x.pointsUvs&&l.enable(18),x.decodeVideoTexture&&l.enable(19),x.alphaToCoverage&&l.enable(20),v.push(l.mask)}function L(v){const x=m[v.type];let R;if(x){const I=Bn[x];R=rp.clone(I.uniforms)}else R=v.uniforms;return R}function b(v,x){let R;for(let I=0,N=d.length;I<N;I++){const k=d[I];if(k.cacheKey===x){R=k,++R.usedTimes;break}}return R===void 0&&(R=new xv(n,x,v,o),d.push(R)),R}function _(v){if(--v.usedTimes===0){const x=d.indexOf(v);d[x]=d[d.length-1],d.pop(),v.destroy()}}function S(v){r.remove(v)}function C(){r.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:L,acquireProgram:b,releaseProgram:_,releaseShaderCache:S,programs:d,dispose:C}}function Ev(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,r){n.get(a)[l]=r}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function Tv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ch(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rh(){const n=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function a(p,f,h,y,m,u){let g=n[e];return g===void 0?(g={id:p.id,object:p,geometry:f,material:h,groupOrder:y,renderOrder:p.renderOrder,z:m,group:u},n[e]=g):(g.id=p.id,g.object=p,g.geometry=f,g.material=h,g.groupOrder=y,g.renderOrder=p.renderOrder,g.z=m,g.group=u),e++,g}function l(p,f,h,y,m,u){const g=a(p,f,h,y,m,u);h.transmission>0?i.push(g):h.transparent===!0?s.push(g):t.push(g)}function r(p,f,h,y,m,u){const g=a(p,f,h,y,m,u);h.transmission>0?i.unshift(g):h.transparent===!0?s.unshift(g):t.unshift(g)}function c(p,f){t.length>1&&t.sort(p||Tv),i.length>1&&i.sort(f||Ch),s.length>1&&s.sort(f||Ch)}function d(){for(let p=e,f=n.length;p<f;p++){const h=n[p];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:l,unshift:r,finish:d,sort:c}}function Av(){let n=new WeakMap;function e(i,s){const o=n.get(i);let a;return o===void 0?(a=new Rh,n.set(i,[a])):s>=o.length?(a=new Rh,o.push(a)):a=o[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Fe};break;case"SpotLight":t={position:new P,direction:new P,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Rv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Pv=0;function Lv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Iv(n){const e=new Cv,t=Rv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const s=new P,o=new rt,a=new rt;function l(c){let d=0,p=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let h=0,y=0,m=0,u=0,g=0,M=0,w=0,E=0,L=0,b=0,_=0;c.sort(Lv);for(let C=0,v=c.length;C<v;C++){const x=c[C],R=x.color,I=x.intensity,N=x.distance,k=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)d+=R.r*I,p+=R.g*I,f+=R.b*I;else if(x.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(x.sh.coefficients[U],I);_++}else if(x.isDirectionalLight){const U=e.get(x);if(U.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const G=x.shadow,V=t.get(x);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=k,i.directionalShadowMatrix[h]=x.shadow.matrix,M++}i.directional[h]=U,h++}else if(x.isSpotLight){const U=e.get(x);U.position.setFromMatrixPosition(x.matrixWorld),U.color.copy(R).multiplyScalar(I),U.distance=N,U.coneCos=Math.cos(x.angle),U.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),U.decay=x.decay,i.spot[m]=U;const G=x.shadow;if(x.map&&(i.spotLightMap[L]=x.map,L++,G.updateMatrices(x),x.castShadow&&b++),i.spotLightMatrix[m]=G.matrix,x.castShadow){const V=t.get(x);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,i.spotShadow[m]=V,i.spotShadowMap[m]=k,E++}m++}else if(x.isRectAreaLight){const U=e.get(x);U.color.copy(R).multiplyScalar(I),U.halfWidth.set(x.width*.5,0,0),U.halfHeight.set(0,x.height*.5,0),i.rectArea[u]=U,u++}else if(x.isPointLight){const U=e.get(x);if(U.color.copy(x.color).multiplyScalar(x.intensity),U.distance=x.distance,U.decay=x.decay,x.castShadow){const G=x.shadow,V=t.get(x);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,i.pointShadow[y]=V,i.pointShadowMap[y]=k,i.pointShadowMatrix[y]=x.shadow.matrix,w++}i.point[y]=U,y++}else if(x.isHemisphereLight){const U=e.get(x);U.skyColor.copy(x.color).multiplyScalar(I),U.groundColor.copy(x.groundColor).multiplyScalar(I),i.hemi[g]=U,g++}}u>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==h||S.pointLength!==y||S.spotLength!==m||S.rectAreaLength!==u||S.hemiLength!==g||S.numDirectionalShadows!==M||S.numPointShadows!==w||S.numSpotShadows!==E||S.numSpotMaps!==L||S.numLightProbes!==_)&&(i.directional.length=h,i.spot.length=m,i.rectArea.length=u,i.point.length=y,i.hemi.length=g,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=E+L-b,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=_,S.directionalLength=h,S.pointLength=y,S.spotLength=m,S.rectAreaLength=u,S.hemiLength=g,S.numDirectionalShadows=M,S.numPointShadows=w,S.numSpotShadows=E,S.numSpotMaps=L,S.numLightProbes=_,i.version=Pv++)}function r(c,d){let p=0,f=0,h=0,y=0,m=0;const u=d.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){const w=c[g];if(w.isDirectionalLight){const E=i.directional[p];E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),p++}else if(w.isSpotLight){const E=i.spot[h];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),h++}else if(w.isRectAreaLight){const E=i.rectArea[y];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(u),a.identity(),o.copy(w.matrixWorld),o.premultiply(u),a.extractRotation(o),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(u),f++}else if(w.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(u),m++}}}return{setup:l,setupView:r,state:i}}function Ph(n){const e=new Iv(n),t=[],i=[];function s(d){c.camera=d,t.length=0,i.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function l(){e.setup(t)}function r(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:l,setupLightsView:r,pushLight:o,pushShadow:a}}function Dv(n){let e=new WeakMap;function t(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Ph(n),e.set(s,[l])):o>=a.length?(l=new Ph(n),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:t,dispose:i}}class kv extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nv extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ov=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fv(n,e,t){let i=new uc;const s=new de,o=new de,a=new pt,l=new kv({depthPacking:mf}),r=new Nv,c={},d=t.maxTextureSize,p={[ri]:en,[en]:ri,[Hn]:Hn},f=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Uv,fragmentShader:Ov}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const y=new Pt;y.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ae(y,f),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let g=this.type;this.render=function(b,_,S){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||b.length===0)return;const C=n.getRenderTarget(),v=n.getActiveCubeFace(),x=n.getActiveMipmapLevel(),R=n.state;R.setBlending(bi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const I=g!==ei&&this.type===ei,N=g===ei&&this.type!==ei;for(let k=0,U=b.length;k<U;k++){const G=b[k],V=G.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ne=V.getFrameExtents();if(s.multiply(ne),o.copy(V.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(o.x=Math.floor(d/ne.x),s.x=o.x*ne.x,V.mapSize.x=o.x),s.y>d&&(o.y=Math.floor(d/ne.y),s.y=o.y*ne.y,V.mapSize.y=o.y)),V.map===null||I===!0||N===!0){const ce=this.type!==ei?{minFilter:Qt,magFilter:Qt}:{};V.map!==null&&V.map.dispose(),V.map=new ji(s.x,s.y,ce),V.map.texture.name=G.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const se=V.getViewportCount();for(let ce=0;ce<se;ce++){const $e=V.getViewport(ce);a.set(o.x*$e.x,o.y*$e.y,o.x*$e.z,o.y*$e.w),R.viewport(a),V.updateMatrices(G,ce),i=V.getFrustum(),E(_,S,V.camera,G,this.type)}V.isPointLightShadow!==!0&&this.type===ei&&M(V,S),V.needsUpdate=!1}g=this.type,u.needsUpdate=!1,n.setRenderTarget(C,v,x)};function M(b,_){const S=e.update(m);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ji(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(_,null,S,f,m,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(_,null,S,h,m,null)}function w(b,_,S,C){let v=null;const x=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(x!==void 0)v=x;else if(v=S.isPointLight===!0?r:l,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){const R=v.uuid,I=_.uuid;let N=c[R];N===void 0&&(N={},c[R]=N);let k=N[I];k===void 0&&(k=v.clone(),N[I]=k,_.addEventListener("dispose",L)),v=k}if(v.visible=_.visible,v.wireframe=_.wireframe,C===ei?v.side=_.shadowSide!==null?_.shadowSide:_.side:v.side=_.shadowSide!==null?_.shadowSide:p[_.side],v.alphaMap=_.alphaMap,v.alphaTest=_.alphaTest,v.map=_.map,v.clipShadows=_.clipShadows,v.clippingPlanes=_.clippingPlanes,v.clipIntersection=_.clipIntersection,v.displacementMap=_.displacementMap,v.displacementScale=_.displacementScale,v.displacementBias=_.displacementBias,v.wireframeLinewidth=_.wireframeLinewidth,v.linewidth=_.linewidth,S.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const R=n.properties.get(v);R.light=S}return v}function E(b,_,S,C,v){if(b.visible===!1)return;if(b.layers.test(_.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===ei)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const I=e.update(b),N=b.material;if(Array.isArray(N)){const k=I.groups;for(let U=0,G=k.length;U<G;U++){const V=k[U],ne=N[V.materialIndex];if(ne&&ne.visible){const se=w(b,ne,C,v);b.onBeforeShadow(n,b,_,S,I,se,V),n.renderBufferDirect(S,null,I,se,b,V),b.onAfterShadow(n,b,_,S,I,se,V)}}}else if(N.visible){const k=w(b,N,C,v);b.onBeforeShadow(n,b,_,S,I,k,null),n.renderBufferDirect(S,null,I,k,b,null),b.onAfterShadow(n,b,_,S,I,k,null)}}const R=b.children;for(let I=0,N=R.length;I<N;I++)E(R[I],_,S,C,v)}function L(b){b.target.removeEventListener("dispose",L);for(const S in c){const C=c[S],v=b.target.uuid;v in C&&(C[v].dispose(),delete C[v])}}}const Bv={[rl]:ll,[cl]:ul,[hl]:fl,[Ns]:dl,[ll]:rl,[ul]:cl,[fl]:hl,[dl]:Ns};function zv(n){function e(){let F=!1;const me=new pt;let q=null;const ee=new pt(0,0,0,0);return{setMask:function(ue){q!==ue&&!F&&(n.colorMask(ue,ue,ue,ue),q=ue)},setLocked:function(ue){F=ue},setClear:function(ue,ge,Ze,Lt,nn){nn===!0&&(ue*=Lt,ge*=Lt,Ze*=Lt),me.set(ue,ge,Ze,Lt),ee.equals(me)===!1&&(n.clearColor(ue,ge,Ze,Lt),ee.copy(me))},reset:function(){F=!1,q=null,ee.set(-1,0,0,0)}}}function t(){let F=!1,me=!1,q=null,ee=null,ue=null;return{setReversed:function(ge){me=ge},setTest:function(ge){ge?Me(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(ge){q!==ge&&!F&&(n.depthMask(ge),q=ge)},setFunc:function(ge){if(me&&(ge=Bv[ge]),ee!==ge){switch(ge){case rl:n.depthFunc(n.NEVER);break;case ll:n.depthFunc(n.ALWAYS);break;case cl:n.depthFunc(n.LESS);break;case Ns:n.depthFunc(n.LEQUAL);break;case hl:n.depthFunc(n.EQUAL);break;case dl:n.depthFunc(n.GEQUAL);break;case ul:n.depthFunc(n.GREATER);break;case fl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=ge}},setLocked:function(ge){F=ge},setClear:function(ge){ue!==ge&&(n.clearDepth(ge),ue=ge)},reset:function(){F=!1,q=null,ee=null,ue=null}}}function i(){let F=!1,me=null,q=null,ee=null,ue=null,ge=null,Ze=null,Lt=null,nn=null;return{setTest:function(it){F||(it?Me(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(it){me!==it&&!F&&(n.stencilMask(it),me=it)},setFunc:function(it,sn,Gn){(q!==it||ee!==sn||ue!==Gn)&&(n.stencilFunc(it,sn,Gn),q=it,ee=sn,ue=Gn)},setOp:function(it,sn,Gn){(ge!==it||Ze!==sn||Lt!==Gn)&&(n.stencilOp(it,sn,Gn),ge=it,Ze=sn,Lt=Gn)},setLocked:function(it){F=it},setClear:function(it){nn!==it&&(n.clearStencil(it),nn=it)},reset:function(){F=!1,me=null,q=null,ee=null,ue=null,ge=null,Ze=null,Lt=null,nn=null}}}const s=new e,o=new t,a=new i,l=new WeakMap,r=new WeakMap;let c={},d={},p=new WeakMap,f=[],h=null,y=!1,m=null,u=null,g=null,M=null,w=null,E=null,L=null,b=new Fe(0,0,0),_=0,S=!1,C=null,v=null,x=null,R=null,I=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,U=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=U>=1):G.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=U>=2);let V=null,ne={};const se=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),$e=new pt().fromArray(se),Be=new pt().fromArray(ce);function K(F,me,q,ee){const ue=new Uint8Array(4),ge=n.createTexture();n.bindTexture(F,ge),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<q;Ze++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(me+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return ge}const Q={};Q[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Me(n.DEPTH_TEST),o.setFunc(Ns),Xe(!1),et(Fc),Me(n.CULL_FACE),O(bi);function Me(F){c[F]!==!0&&(n.enable(F),c[F]=!0)}function ve(F){c[F]!==!1&&(n.disable(F),c[F]=!1)}function ze(F,me){return d[F]!==me?(n.bindFramebuffer(F,me),d[F]=me,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=me),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Le(F,me){let q=f,ee=!1;if(F){q=p.get(me),q===void 0&&(q=[],p.set(me,q));const ue=F.textures;if(q.length!==ue.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Ze=ue.length;ge<Ze;ge++)q[ge]=n.COLOR_ATTACHMENT0+ge;q.length=ue.length,ee=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ee=!0);ee&&n.drawBuffers(q)}function je(F){return h!==F?(n.useProgram(F),h=F,!0):!1}const ut={[Gi]:n.FUNC_ADD,[zu]:n.FUNC_SUBTRACT,[Hu]:n.FUNC_REVERSE_SUBTRACT};ut[Vu]=n.MIN,ut[Wu]=n.MAX;const Je={[$u]:n.ZERO,[Gu]:n.ONE,[Xu]:n.SRC_COLOR,[ol]:n.SRC_ALPHA,[Zu]:n.SRC_ALPHA_SATURATE,[ju]:n.DST_COLOR,[qu]:n.DST_ALPHA,[Yu]:n.ONE_MINUS_SRC_COLOR,[al]:n.ONE_MINUS_SRC_ALPHA,[Ju]:n.ONE_MINUS_DST_COLOR,[Ku]:n.ONE_MINUS_DST_ALPHA,[Qu]:n.CONSTANT_COLOR,[ef]:n.ONE_MINUS_CONSTANT_COLOR,[tf]:n.CONSTANT_ALPHA,[nf]:n.ONE_MINUS_CONSTANT_ALPHA};function O(F,me,q,ee,ue,ge,Ze,Lt,nn,it){if(F===bi){y===!0&&(ve(n.BLEND),y=!1);return}if(y===!1&&(Me(n.BLEND),y=!0),F!==Bu){if(F!==m||it!==S){if((u!==Gi||w!==Gi)&&(n.blendEquation(n.FUNC_ADD),u=Gi,w=Gi),it)switch(F){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bc:n.blendFunc(n.ONE,n.ONE);break;case zc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}g=null,M=null,E=null,L=null,b.set(0,0,0),_=0,m=F,S=it}return}ue=ue||me,ge=ge||q,Ze=Ze||ee,(me!==u||ue!==w)&&(n.blendEquationSeparate(ut[me],ut[ue]),u=me,w=ue),(q!==g||ee!==M||ge!==E||Ze!==L)&&(n.blendFuncSeparate(Je[q],Je[ee],Je[ge],Je[Ze]),g=q,M=ee,E=ge,L=Ze),(Lt.equals(b)===!1||nn!==_)&&(n.blendColor(Lt.r,Lt.g,Lt.b,nn),b.copy(Lt),_=nn),m=F,S=!1}function dn(F,me){F.side===Hn?ve(n.CULL_FACE):Me(n.CULL_FACE);let q=F.side===en;me&&(q=!q),Xe(q),F.blending===Ps&&F.transparent===!1?O(bi):O(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const ee=F.stencilWrite;a.setTest(ee),ee&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),_t(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(F){C!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),C=F)}function et(F){F!==Uu?(Me(n.CULL_FACE),F!==v&&(F===Fc?n.cullFace(n.BACK):F===Ou?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),v=F}function De(F){F!==x&&(k&&n.lineWidth(F),x=F)}function _t(F,me,q){F?(Me(n.POLYGON_OFFSET_FILL),(R!==me||I!==q)&&(n.polygonOffset(me,q),R=me,I=q)):ve(n.POLYGON_OFFSET_FILL)}function Oe(F){F?Me(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function D(F){F===void 0&&(F=n.TEXTURE0+N-1),V!==F&&(n.activeTexture(F),V=F)}function T(F,me,q){q===void 0&&(V===null?q=n.TEXTURE0+N-1:q=V);let ee=ne[q];ee===void 0&&(ee={type:void 0,texture:void 0},ne[q]=ee),(ee.type!==F||ee.texture!==me)&&(V!==q&&(n.activeTexture(q),V=q),n.bindTexture(F,me||Q[F]),ee.type=F,ee.texture=me)}function H(){const F=ne[V];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(F){$e.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),$e.copy(F))}function xe(F){Be.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Be.copy(F))}function Ye(F,me){let q=r.get(me);q===void 0&&(q=new WeakMap,r.set(me,q));let ee=q.get(F);ee===void 0&&(ee=n.getUniformBlockIndex(me,F.name),q.set(F,ee))}function He(F,me){const ee=r.get(me).get(F);l.get(me)!==ee&&(n.uniformBlockBinding(me,ee,F.__bindingPointIndex),l.set(me,ee))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,ne={},d={},p=new WeakMap,f=[],h=null,y=!1,m=null,u=null,g=null,M=null,w=null,E=null,L=null,b=new Fe(0,0,0),_=0,S=!1,C=null,v=null,x=null,R=null,I=null,$e.set(0,0,n.canvas.width,n.canvas.height),Be.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Me,disable:ve,bindFramebuffer:ze,drawBuffers:Le,useProgram:je,setBlending:O,setMaterial:dn,setFlipSided:Xe,setCullFace:et,setLineWidth:De,setPolygonOffset:_t,setScissorTest:Oe,activeTexture:D,bindTexture:T,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:ie,texImage2D:_e,texImage3D:ke,updateUBOMapping:Ye,uniformBlockBinding:He,texStorage2D:tt,texStorage3D:oe,texSubImage2D:J,texSubImage3D:we,compressedTexSubImage2D:he,compressedTexSubImage3D:ye,scissor:Ne,viewport:xe,reset:gt}}function Lh(n,e,t,i){const s=Hv(i);switch(t){case wd:return n*e;case Td:return n*e;case Ad:return n*e*2;case tr:return n*e/s.components*s.byteLength;case ac:return n*e/s.components*s.byteLength;case Cd:return n*e*2/s.components*s.byteLength;case rc:return n*e*2/s.components*s.byteLength;case Ed:return n*e*3/s.components*s.byteLength;case kn:return n*e*4/s.components*s.byteLength;case lc:return n*e*4/s.components*s.byteLength;case ba:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wa:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yl:case xl:return Math.max(n,16)*Math.max(e,8)/4;case vl:case _l:return Math.max(n,8)*Math.max(e,8)/2;case Ml:case bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Al:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Il:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ta:case Fl:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rd:case zl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Hl:case Vl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hv(n){switch(n){case li:case Md:return{byteLength:1,components:1};case Ao:case bd:case Lo:return{byteLength:2,components:1};case sc:case oc:return{byteLength:2,components:4};case Ki:case ic:case Vn:return{byteLength:4,components:1};case Sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Vv(n,e,t,i,s,o,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,r=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,d=new WeakMap;let p;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,T){return h?new OffscreenCanvas(D,T):Ba("canvas")}function m(D,T,H){let Z=1;const ie=Oe(D);if((ie.width>H||ie.height>H)&&(Z=H/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap||typeof VideoFrame!="undefined"&&D instanceof VideoFrame){const J=Math.floor(Z*ie.width),we=Math.floor(Z*ie.height);p===void 0&&(p=y(J,we));const he=T?y(J,we):p;return he.width=J,he.height=we,he.getContext("2d").drawImage(D,0,0,J,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+we+")."),he}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),D;return D}function u(D){return D.generateMipmaps&&D.minFilter!==Qt&&D.minFilter!==Ln}function g(D){n.generateMipmap(D)}function M(D,T,H,Z,ie=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let J=T;if(T===n.RED&&(H===n.FLOAT&&(J=n.R32F),H===n.HALF_FLOAT&&(J=n.R16F),H===n.UNSIGNED_BYTE&&(J=n.R8)),T===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.R8UI),H===n.UNSIGNED_SHORT&&(J=n.R16UI),H===n.UNSIGNED_INT&&(J=n.R32UI),H===n.BYTE&&(J=n.R8I),H===n.SHORT&&(J=n.R16I),H===n.INT&&(J=n.R32I)),T===n.RG&&(H===n.FLOAT&&(J=n.RG32F),H===n.HALF_FLOAT&&(J=n.RG16F),H===n.UNSIGNED_BYTE&&(J=n.RG8)),T===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RG8UI),H===n.UNSIGNED_SHORT&&(J=n.RG16UI),H===n.UNSIGNED_INT&&(J=n.RG32UI),H===n.BYTE&&(J=n.RG8I),H===n.SHORT&&(J=n.RG16I),H===n.INT&&(J=n.RG32I)),T===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RGB8UI),H===n.UNSIGNED_SHORT&&(J=n.RGB16UI),H===n.UNSIGNED_INT&&(J=n.RGB32UI),H===n.BYTE&&(J=n.RGB8I),H===n.SHORT&&(J=n.RGB16I),H===n.INT&&(J=n.RGB32I)),T===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),H===n.UNSIGNED_INT&&(J=n.RGBA32UI),H===n.BYTE&&(J=n.RGBA8I),H===n.SHORT&&(J=n.RGBA16I),H===n.INT&&(J=n.RGBA32I)),T===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),T===n.RGBA){const we=ie?Na:at.getTransfer(Z);H===n.FLOAT&&(J=n.RGBA32F),H===n.HALF_FLOAT&&(J=n.RGBA16F),H===n.UNSIGNED_BYTE&&(J=we===Mt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(D,T){let H;return D?T===null||T===Ki||T===Fs?H=n.DEPTH24_STENCIL8:T===Vn?H=n.DEPTH32F_STENCIL8:T===Ao&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ki||T===Fs?H=n.DEPTH_COMPONENT24:T===Vn?H=n.DEPTH_COMPONENT32F:T===Ao&&(H=n.DEPTH_COMPONENT16),H}function E(D,T){return u(D)===!0||D.isFramebufferTexture&&D.minFilter!==Qt&&D.minFilter!==Ln?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function L(D){const T=D.target;T.removeEventListener("dispose",L),_(T),T.isVideoTexture&&d.delete(T)}function b(D){const T=D.target;T.removeEventListener("dispose",b),C(T)}function _(D){const T=i.get(D);if(T.__webglInit===void 0)return;const H=D.source,Z=f.get(H);if(Z){const ie=Z[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(D),Object.keys(Z).length===0&&f.delete(H)}i.remove(D)}function S(D){const T=i.get(D);n.deleteTexture(T.__webglTexture);const H=D.source,Z=f.get(H);delete Z[T.__cacheKey],a.memory.textures--}function C(D){const T=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let ie=0;ie<T.__webglFramebuffer[Z].length;ie++)n.deleteFramebuffer(T.__webglFramebuffer[Z][ie]);else n.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)n.deleteFramebuffer(T.__webglFramebuffer[Z]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const H=D.textures;for(let Z=0,ie=H.length;Z<ie;Z++){const J=i.get(H[Z]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(H[Z])}i.remove(D)}let v=0;function x(){v=0}function R(){const D=v;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),v+=1,D}function I(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function N(D,T){const H=i.get(D);if(D.isVideoTexture&&De(D),D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){const Z=D.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(H,D,T);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+T)}function k(D,T){const H=i.get(D);if(D.version>0&&H.__version!==D.version){Be(H,D,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+T)}function U(D,T){const H=i.get(D);if(D.version>0&&H.__version!==D.version){Be(H,D,T);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+T)}function G(D,T){const H=i.get(D);if(D.version>0&&H.__version!==D.version){K(H,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+T)}const V={[ka]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[gl]:n.MIRRORED_REPEAT},ne={[Qt]:n.NEAREST,[ff]:n.NEAREST_MIPMAP_NEAREST,[zo]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[hr]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},se={[vf]:n.NEVER,[Sf]:n.ALWAYS,[yf]:n.LESS,[Ld]:n.LEQUAL,[_f]:n.EQUAL,[bf]:n.GEQUAL,[xf]:n.GREATER,[Mf]:n.NOTEQUAL};function ce(D,T){if(T.type===Vn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ln||T.magFilter===hr||T.magFilter===zo||T.magFilter===Yi||T.minFilter===Ln||T.minFilter===hr||T.minFilter===zo||T.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,V[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,V[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,V[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ne[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ne[T.minFilter]),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qt||T.minFilter!==zo&&T.minFilter!==Yi||T.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function $e(D,T){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",L));const Z=T.source;let ie=f.get(Z);ie===void 0&&(ie={},f.set(Z,ie));const J=I(T);if(J!==D.__cacheKey){ie[J]===void 0&&(ie[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ie[J].usedTimes++;const we=ie[D.__cacheKey];we!==void 0&&(ie[D.__cacheKey].usedTimes--,we.usedTimes===0&&S(T)),D.__cacheKey=J,D.__webglTexture=ie[J].texture}return H}function Be(D,T,H){let Z=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=n.TEXTURE_3D);const ie=$e(D,T),J=T.source;t.bindTexture(Z,D.__webglTexture,n.TEXTURE0+H);const we=i.get(J);if(J.version!==we.__version||ie===!0){t.activeTexture(n.TEXTURE0+H);const he=at.getPrimaries(at.workingColorSpace),ye=T.colorSpace===Mi?null:at.getPrimaries(T.colorSpace),tt=T.colorSpace===Mi||he===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let oe=m(T.image,!1,s.maxTextureSize);oe=_t(T,oe);const _e=o.convert(T.format,T.colorSpace),ke=o.convert(T.type);let Ne=M(T.internalFormat,_e,ke,T.colorSpace,T.isVideoTexture);ce(Z,T);let xe;const Ye=T.mipmaps,He=T.isVideoTexture!==!0,gt=we.__version===void 0||ie===!0,F=J.dataReady,me=E(T,oe);if(T.isDepthTexture)Ne=w(T.format===Bs,T.type),gt&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ne,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ne,oe.width,oe.height,0,_e,ke,null));else if(T.isDataTexture)if(Ye.length>0){He&&gt&&t.texStorage2D(n.TEXTURE_2D,me,Ne,Ye[0].width,Ye[0].height);for(let q=0,ee=Ye.length;q<ee;q++)xe=Ye[q],He?F&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,xe.width,xe.height,_e,ke,xe.data):t.texImage2D(n.TEXTURE_2D,q,Ne,xe.width,xe.height,0,_e,ke,xe.data);T.generateMipmaps=!1}else He?(gt&&t.texStorage2D(n.TEXTURE_2D,me,Ne,oe.width,oe.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,_e,ke,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,oe.width,oe.height,0,_e,ke,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){He&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Ne,Ye[0].width,Ye[0].height,oe.depth);for(let q=0,ee=Ye.length;q<ee;q++)if(xe=Ye[q],T.format!==kn)if(_e!==null)if(He){if(F)if(T.layerUpdates.size>0){const ue=Lh(xe.width,xe.height,T.format,T.type);for(const ge of T.layerUpdates){const Ze=xe.data.subarray(ge*ue/xe.data.BYTES_PER_ELEMENT,(ge+1)*ue/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ge,xe.width,xe.height,1,_e,Ze,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,oe.depth,_e,xe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ne,xe.width,xe.height,oe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,oe.depth,_e,ke,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ne,xe.width,xe.height,oe.depth,0,_e,ke,xe.data)}else{He&&gt&&t.texStorage2D(n.TEXTURE_2D,me,Ne,Ye[0].width,Ye[0].height);for(let q=0,ee=Ye.length;q<ee;q++)xe=Ye[q],T.format!==kn?_e!==null?He?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,xe.width,xe.height,_e,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ne,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?F&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,xe.width,xe.height,_e,ke,xe.data):t.texImage2D(n.TEXTURE_2D,q,Ne,xe.width,xe.height,0,_e,ke,xe.data)}else if(T.isDataArrayTexture)if(He){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Ne,oe.width,oe.height,oe.depth),F)if(T.layerUpdates.size>0){const q=Lh(oe.width,oe.height,T.format,T.type);for(const ee of T.layerUpdates){const ue=oe.data.subarray(ee*q/oe.data.BYTES_PER_ELEMENT,(ee+1)*q/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,_e,ke,ue)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,_e,ke,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,oe.width,oe.height,oe.depth,0,_e,ke,oe.data);else if(T.isData3DTexture)He?(gt&&t.texStorage3D(n.TEXTURE_3D,me,Ne,oe.width,oe.height,oe.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,_e,ke,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,oe.width,oe.height,oe.depth,0,_e,ke,oe.data);else if(T.isFramebufferTexture){if(gt)if(He)t.texStorage2D(n.TEXTURE_2D,me,Ne,oe.width,oe.height);else{let q=oe.width,ee=oe.height;for(let ue=0;ue<me;ue++)t.texImage2D(n.TEXTURE_2D,ue,Ne,q,ee,0,_e,ke,null),q>>=1,ee>>=1}}else if(Ye.length>0){if(He&&gt){const q=Oe(Ye[0]);t.texStorage2D(n.TEXTURE_2D,me,Ne,q.width,q.height)}for(let q=0,ee=Ye.length;q<ee;q++)xe=Ye[q],He?F&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,_e,ke,xe):t.texImage2D(n.TEXTURE_2D,q,Ne,_e,ke,xe);T.generateMipmaps=!1}else if(He){if(gt){const q=Oe(oe);t.texStorage2D(n.TEXTURE_2D,me,Ne,q.width,q.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,ke,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ne,_e,ke,oe);u(T)&&g(Z),we.__version=J.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function K(D,T,H){if(T.image.length!==6)return;const Z=$e(D,T),ie=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+H);const J=i.get(ie);if(ie.version!==J.__version||Z===!0){t.activeTexture(n.TEXTURE0+H);const we=at.getPrimaries(at.workingColorSpace),he=T.colorSpace===Mi?null:at.getPrimaries(T.colorSpace),ye=T.colorSpace===Mi||we===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const tt=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,_e=[];for(let ee=0;ee<6;ee++)!tt&&!oe?_e[ee]=m(T.image[ee],!0,s.maxCubemapSize):_e[ee]=oe?T.image[ee].image:T.image[ee],_e[ee]=_t(T,_e[ee]);const ke=_e[0],Ne=o.convert(T.format,T.colorSpace),xe=o.convert(T.type),Ye=M(T.internalFormat,Ne,xe,T.colorSpace),He=T.isVideoTexture!==!0,gt=J.__version===void 0||Z===!0,F=ie.dataReady;let me=E(T,ke);ce(n.TEXTURE_CUBE_MAP,T);let q;if(tt){He&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ye,ke.width,ke.height);for(let ee=0;ee<6;ee++){q=_e[ee].mipmaps;for(let ue=0;ue<q.length;ue++){const ge=q[ue];T.format!==kn?Ne!==null?He?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,ge.width,ge.height,Ne,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,Ye,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,ge.width,ge.height,Ne,xe,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,Ye,ge.width,ge.height,0,Ne,xe,ge.data)}}}else{if(q=T.mipmaps,He&&gt){q.length>0&&me++;const ee=Oe(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ye,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,_e[ee].width,_e[ee].height,Ne,xe,_e[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,_e[ee].width,_e[ee].height,0,Ne,xe,_e[ee].data);for(let ue=0;ue<q.length;ue++){const Ze=q[ue].image[ee].image;He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,Ze.width,Ze.height,Ne,xe,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,Ye,Ze.width,Ze.height,0,Ne,xe,Ze.data)}}else{He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ne,xe,_e[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,Ne,xe,_e[ee]);for(let ue=0;ue<q.length;ue++){const ge=q[ue];He?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,Ne,xe,ge.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,Ye,Ne,xe,ge.image[ee])}}}u(T)&&g(n.TEXTURE_CUBE_MAP),J.__version=ie.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Q(D,T,H,Z,ie,J){const we=o.convert(H.format,H.colorSpace),he=o.convert(H.type),ye=M(H.internalFormat,we,he,H.colorSpace);if(!i.get(T).__hasExternalTextures){const oe=Math.max(1,T.width>>J),_e=Math.max(1,T.height>>J);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,ye,oe,_e,T.depth,0,we,he,null):t.texImage2D(ie,J,ye,oe,_e,0,we,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),et(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ie,i.get(H).__webglTexture,0,Xe(T)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ie,i.get(H).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(D,T,H){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer){const Z=T.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,J=w(T.stencilBuffer,ie),we=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=Xe(T);et(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,J,T.width,T.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,J,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,J,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,D)}else{const Z=T.textures;for(let ie=0;ie<Z.length;ie++){const J=Z[ie],we=o.convert(J.format,J.colorSpace),he=o.convert(J.type),ye=M(J.internalFormat,we,he,J.colorSpace),tt=Xe(T);H&&et(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,ye,T.width,T.height):et(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,ye,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ye,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),N(T.depthTexture,0);const Z=i.get(T.depthTexture).__webglTexture,ie=Xe(T);if(T.depthTexture.format===Ls)et(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(T.depthTexture.format===Bs)et(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ze(D){const T=i.get(D),H=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const Z=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){const ie=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),T.__depthDisposeCallback=ie}T.__boundDepthTexture=Z}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ve(T.__webglFramebuffer,D)}else if(H){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=n.createRenderbuffer(),Me(T.__webglDepthbuffer[Z],D,!1);else{const ie=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Me(T.__webglDepthbuffer,D,!1);else{const Z=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(D,T,H){const Z=i.get(D);T!==void 0&&Q(Z.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&ze(D)}function je(D){const T=D.texture,H=i.get(D),Z=i.get(T);D.addEventListener("dispose",b);const ie=D.textures,J=D.isWebGLCubeRenderTarget===!0,we=ie.length>1;if(we||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=T.version,a.memory.textures++),J){H.__webglFramebuffer=[];for(let he=0;he<6;he++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[he]=[];for(let ye=0;ye<T.mipmaps.length;ye++)H.__webglFramebuffer[he][ye]=n.createFramebuffer()}else H.__webglFramebuffer[he]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let he=0;he<T.mipmaps.length;he++)H.__webglFramebuffer[he]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(we)for(let he=0,ye=ie.length;he<ye;he++){const tt=i.get(ie[he]);tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&et(D)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let he=0;he<ie.length;he++){const ye=ie[he];H.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[he]);const tt=o.convert(ye.format,ye.colorSpace),oe=o.convert(ye.type),_e=M(ye.internalFormat,tt,oe,ye.colorSpace,D.isXRRenderTarget===!0),ke=Xe(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,_e,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,H.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(H.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ce(n.TEXTURE_CUBE_MAP,T);for(let he=0;he<6;he++)if(T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)Q(H.__webglFramebuffer[he][ye],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ye);else Q(H.__webglFramebuffer[he],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);u(T)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let he=0,ye=ie.length;he<ye;he++){const tt=ie[he],oe=i.get(tt);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),ce(n.TEXTURE_2D,tt),Q(H.__webglFramebuffer,D,tt,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),u(tt)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Z.__webglTexture),ce(he,T),T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)Q(H.__webglFramebuffer[ye],D,T,n.COLOR_ATTACHMENT0,he,ye);else Q(H.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,he,0);u(T)&&g(he),t.unbindTexture()}D.depthBuffer&&ze(D)}function ut(D){const T=D.textures;for(let H=0,Z=T.length;H<Z;H++){const ie=T[H];if(u(ie)){const J=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=i.get(ie).__webglTexture;t.bindTexture(J,we),g(J),t.unbindTexture()}}}const Je=[],O=[];function dn(D){if(D.samples>0){if(et(D)===!1){const T=D.textures,H=D.width,Z=D.height;let ie=n.COLOR_BUFFER_BIT;const J=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(D),he=T.length>1;if(he)for(let ye=0;ye<T.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ye=0;ye<T.length;ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[ye]);const tt=i.get(T[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,H,Z,0,0,H,Z,ie,n.NEAREST),r===!0&&(Je.length=0,O.length=0,Je.push(n.COLOR_ATTACHMENT0+ye),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Je.push(J),O.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let ye=0;ye<T.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,we.__webglColorRenderbuffer[ye]);const tt=i.get(T[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,tt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&r){const T=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Xe(D){return Math.min(s.maxSamples,D.samples)}function et(D){const T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function De(D){const T=a.render.frame;d.get(D)!==T&&(d.set(D,T),D.update())}function _t(D,T){const H=D.colorSpace,Z=D.format,ie=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==Ci&&H!==Mi&&(at.getTransfer(H)===Mt?(Z!==kn||ie!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function Oe(D){return typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame!="undefined"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=x,this.setTexture2D=N,this.setTexture2DArray=k,this.setTexture3D=U,this.setTextureCube=G,this.rebindTextures=Le,this.setupRenderTarget=je,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=et}function Wv(n,e){function t(i,s=Mi){let o;const a=at.getTransfer(s);if(i===li)return n.UNSIGNED_BYTE;if(i===sc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Md)return n.BYTE;if(i===bd)return n.SHORT;if(i===Ao)return n.UNSIGNED_SHORT;if(i===ic)return n.INT;if(i===Ki)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===Lo)return n.HALF_FLOAT;if(i===wd)return n.ALPHA;if(i===Ed)return n.RGB;if(i===kn)return n.RGBA;if(i===Td)return n.LUMINANCE;if(i===Ad)return n.LUMINANCE_ALPHA;if(i===Ls)return n.DEPTH_COMPONENT;if(i===Bs)return n.DEPTH_STENCIL;if(i===tr)return n.RED;if(i===ac)return n.RED_INTEGER;if(i===Cd)return n.RG;if(i===rc)return n.RG_INTEGER;if(i===lc)return n.RGBA_INTEGER;if(i===ba||i===Sa||i===wa||i===Ea)if(a===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ba)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ba)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ea)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vl||i===yl||i===_l||i===xl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===vl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_l)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ml||i===bl||i===Sl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Ml||i===bl)return a===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Sl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wl||i===El||i===Tl||i===Al||i===Cl||i===Rl||i===Pl||i===Ll||i===Il||i===Dl||i===kl||i===Nl||i===Ul||i===Ol)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===wl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===El)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Al)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ll)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Il)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ul)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ol)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ta||i===Fl||i===Bl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Ta)return a===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rd||i===zl||i===Hl||i===Vl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ta)return o.COMPRESSED_RED_RGTC1_EXT;if(i===zl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class $v extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ht extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gv={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,a=null;const l=this._targetRay,r=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const u=t.getJointPose(m,i),g=this._getHandJoint(c,m);u!==null&&(g.matrix.fromArray(u.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=u.radius),g.visible=u!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=d.position.distanceTo(p.position),h=.02,y=.005;c.inputState.pinching&&f>h+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else r!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(r.matrix.fromArray(o.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,o.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(o.linearVelocity)):r.hasLinearVelocity=!1,o.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(o.angularVelocity)):r.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Gv)))}return l!==null&&(l.visible=s!==null),r!==null&&(r.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new qt,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ei({vertexShader:Xv,fragmentShader:Yv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kv extends $s{constructor(e,t){super();const i=this;let s=null,o=1,a=null,l="local-floor",r=1,c=null,d=null,p=null,f=null,h=null,y=null;const m=new qv,u=t.getContextAttributes();let g=null,M=null;const w=[],E=[],L=new de;let b=null;const _=new ln;_.layers.enable(1),_.viewport=new pt;const S=new ln;S.layers.enable(2),S.viewport=new pt;const C=[_,S],v=new $v;v.layers.enable(1),v.layers.enable(2);let x=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=w[K];return Q===void 0&&(Q=new Fr,w[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=w[K];return Q===void 0&&(Q=new Fr,w[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=w[K];return Q===void 0&&(Q=new Fr,w[K]=Q),Q.getHandSpace()};function I(K){const Q=E.indexOf(K.inputSource);if(Q===-1)return;const Me=w[Q];Me!==void 0&&(Me.update(K.inputSource,K.frame,c||a),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function N(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",k);for(let K=0;K<w.length;K++){const Q=E[K];Q!==null&&(E[K]=null,w[K].disconnect(Q))}x=null,R=null,m.reset(),e.setRenderTarget(g),h=null,f=null,p=null,s=null,M=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",N),s.addEventListener("inputsourceschange",k),u.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){const Q={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new ji(h.framebufferWidth,h.framebufferHeight,{format:kn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let Q=null,Me=null,ve=null;u.depth&&(ve=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=u.stencil?Bs:Ls,Me=u.stencil?Fs:Ki);const ze={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:o};p=new XRWebGLBinding(s,t),f=p.createProjectionLayer(ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new ji(f.textureWidth,f.textureHeight,{format:kn,type:li,depthTexture:new $d(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(r),c=null,a=await s.requestReferenceSpace(l),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(K){for(let Q=0;Q<K.removed.length;Q++){const Me=K.removed[Q],ve=E.indexOf(Me);ve>=0&&(E[ve]=null,w[ve].disconnect(Me))}for(let Q=0;Q<K.added.length;Q++){const Me=K.added[Q];let ve=E.indexOf(Me);if(ve===-1){for(let Le=0;Le<w.length;Le++)if(Le>=E.length){E.push(Me),ve=Le;break}else if(E[Le]===null){E[Le]=Me,ve=Le;break}if(ve===-1)break}const ze=w[ve];ze&&ze.connect(Me)}}const U=new P,G=new P;function V(K,Q,Me){U.setFromMatrixPosition(Q.matrixWorld),G.setFromMatrixPosition(Me.matrixWorld);const ve=U.distanceTo(G),ze=Q.projectionMatrix.elements,Le=Me.projectionMatrix.elements,je=ze[14]/(ze[10]-1),ut=ze[14]/(ze[10]+1),Je=(ze[9]+1)/ze[5],O=(ze[9]-1)/ze[5],dn=(ze[8]-1)/ze[0],Xe=(Le[8]+1)/Le[0],et=je*dn,De=je*Xe,_t=ve/(-dn+Xe),Oe=_t*-dn;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Oe),K.translateZ(_t),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ze[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const D=je+_t,T=ut+_t,H=et-Oe,Z=De+(ve-Oe),ie=Je*ut/T*D,J=O*ut/T*D;K.projectionMatrix.makePerspective(H,Z,ie,J,D,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ne(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Q=K.near,Me=K.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),v.near=S.near=_.near=Q,v.far=S.far=_.far=Me,(x!==v.near||R!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),x=v.near,R=v.far);const ve=K.parent,ze=v.cameras;ne(v,ve);for(let Le=0;Le<ze.length;Le++)ne(ze[Le],ve);ze.length===2?V(v,_,S):v.projectionMatrix.copy(_.projectionMatrix),se(K,v,ve)};function se(K,Q,Me){Me===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Co*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&h===null))return r},this.setFoveation=function(K){r=K,f!==null&&(f.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(v)};let ce=null;function $e(K,Q){if(d=Q.getViewerPose(c||a),y=Q,d!==null){const Me=d.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let ve=!1;Me.length!==v.cameras.length&&(v.cameras.length=0,ve=!0);for(let Le=0;Le<Me.length;Le++){const je=Me[Le];let ut=null;if(h!==null)ut=h.getViewport(je);else{const O=p.getViewSubImage(f,je);ut=O.viewport,Le===0&&(e.setRenderTargetTextures(M,O.colorTexture,f.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(M))}let Je=C[Le];Je===void 0&&(Je=new ln,Je.layers.enable(Le),Je.viewport=new pt,C[Le]=Je),Je.matrix.fromArray(je.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(je.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(ut.x,ut.y,ut.width,ut.height),Le===0&&(v.matrix.copy(Je.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ve===!0&&v.cameras.push(Je)}const ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")){const Le=p.getDepthInformation(Me[0]);Le&&Le.isValid&&Le.texture&&m.init(e,Le,s.renderState)}}for(let Me=0;Me<w.length;Me++){const ve=E[Me],ze=w[Me];ve!==null&&ze!==void 0&&ze.update(ve,Q,c||a)}ce&&ce(K,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),y=null}const Be=new Vd;Be.setAnimationLoop($e),this.setAnimationLoop=function(K){ce=K},this.dispose=function(){}}}const Ui=new ci,jv=new rt;function Jv(n,e){function t(u,g){u.matrixAutoUpdate===!0&&u.updateMatrix(),g.value.copy(u.matrix)}function i(u,g){g.color.getRGB(u.fogColor.value,Bd(n)),g.isFog?(u.fogNear.value=g.near,u.fogFar.value=g.far):g.isFogExp2&&(u.fogDensity.value=g.density)}function s(u,g,M,w,E){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(u,g):g.isMeshToonMaterial?(o(u,g),p(u,g)):g.isMeshPhongMaterial?(o(u,g),d(u,g)):g.isMeshStandardMaterial?(o(u,g),f(u,g),g.isMeshPhysicalMaterial&&h(u,g,E)):g.isMeshMatcapMaterial?(o(u,g),y(u,g)):g.isMeshDepthMaterial?o(u,g):g.isMeshDistanceMaterial?(o(u,g),m(u,g)):g.isMeshNormalMaterial?o(u,g):g.isLineBasicMaterial?(a(u,g),g.isLineDashedMaterial&&l(u,g)):g.isPointsMaterial?r(u,g,M,w):g.isSpriteMaterial?c(u,g):g.isShadowMaterial?(u.color.value.copy(g.color),u.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(u,g){u.opacity.value=g.opacity,g.color&&u.diffuse.value.copy(g.color),g.emissive&&u.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(u.map.value=g.map,t(g.map,u.mapTransform)),g.alphaMap&&(u.alphaMap.value=g.alphaMap,t(g.alphaMap,u.alphaMapTransform)),g.bumpMap&&(u.bumpMap.value=g.bumpMap,t(g.bumpMap,u.bumpMapTransform),u.bumpScale.value=g.bumpScale,g.side===en&&(u.bumpScale.value*=-1)),g.normalMap&&(u.normalMap.value=g.normalMap,t(g.normalMap,u.normalMapTransform),u.normalScale.value.copy(g.normalScale),g.side===en&&u.normalScale.value.negate()),g.displacementMap&&(u.displacementMap.value=g.displacementMap,t(g.displacementMap,u.displacementMapTransform),u.displacementScale.value=g.displacementScale,u.displacementBias.value=g.displacementBias),g.emissiveMap&&(u.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,u.emissiveMapTransform)),g.specularMap&&(u.specularMap.value=g.specularMap,t(g.specularMap,u.specularMapTransform)),g.alphaTest>0&&(u.alphaTest.value=g.alphaTest);const M=e.get(g),w=M.envMap,E=M.envMapRotation;w&&(u.envMap.value=w,Ui.copy(E),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),u.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(Ui)),u.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=g.reflectivity,u.ior.value=g.ior,u.refractionRatio.value=g.refractionRatio),g.lightMap&&(u.lightMap.value=g.lightMap,u.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,u.lightMapTransform)),g.aoMap&&(u.aoMap.value=g.aoMap,u.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,u.aoMapTransform))}function a(u,g){u.diffuse.value.copy(g.color),u.opacity.value=g.opacity,g.map&&(u.map.value=g.map,t(g.map,u.mapTransform))}function l(u,g){u.dashSize.value=g.dashSize,u.totalSize.value=g.dashSize+g.gapSize,u.scale.value=g.scale}function r(u,g,M,w){u.diffuse.value.copy(g.color),u.opacity.value=g.opacity,u.size.value=g.size*M,u.scale.value=w*.5,g.map&&(u.map.value=g.map,t(g.map,u.uvTransform)),g.alphaMap&&(u.alphaMap.value=g.alphaMap,t(g.alphaMap,u.alphaMapTransform)),g.alphaTest>0&&(u.alphaTest.value=g.alphaTest)}function c(u,g){u.diffuse.value.copy(g.color),u.opacity.value=g.opacity,u.rotation.value=g.rotation,g.map&&(u.map.value=g.map,t(g.map,u.mapTransform)),g.alphaMap&&(u.alphaMap.value=g.alphaMap,t(g.alphaMap,u.alphaMapTransform)),g.alphaTest>0&&(u.alphaTest.value=g.alphaTest)}function d(u,g){u.specular.value.copy(g.specular),u.shininess.value=Math.max(g.shininess,1e-4)}function p(u,g){g.gradientMap&&(u.gradientMap.value=g.gradientMap)}function f(u,g){u.metalness.value=g.metalness,g.metalnessMap&&(u.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,u.metalnessMapTransform)),u.roughness.value=g.roughness,g.roughnessMap&&(u.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,u.roughnessMapTransform)),g.envMap&&(u.envMapIntensity.value=g.envMapIntensity)}function h(u,g,M){u.ior.value=g.ior,g.sheen>0&&(u.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),u.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(u.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,u.sheenColorMapTransform)),g.sheenRoughnessMap&&(u.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,u.sheenRoughnessMapTransform))),g.clearcoat>0&&(u.clearcoat.value=g.clearcoat,u.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(u.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,u.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(u.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===en&&u.clearcoatNormalScale.value.negate())),g.dispersion>0&&(u.dispersion.value=g.dispersion),g.iridescence>0&&(u.iridescence.value=g.iridescence,u.iridescenceIOR.value=g.iridescenceIOR,u.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(u.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,u.iridescenceMapTransform)),g.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),g.transmission>0&&(u.transmission.value=g.transmission,u.transmissionSamplerMap.value=M.texture,u.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(u.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,u.transmissionMapTransform)),u.thickness.value=g.thickness,g.thicknessMap&&(u.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=g.attenuationDistance,u.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(u.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(u.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=g.specularIntensity,u.specularColor.value.copy(g.specularColor),g.specularColorMap&&(u.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,u.specularColorMapTransform)),g.specularIntensityMap&&(u.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,u.specularIntensityMapTransform))}function y(u,g){g.matcap&&(u.matcap.value=g.matcap)}function m(u,g){const M=e.get(g).light;u.referencePosition.value.setFromMatrixPosition(M.matrixWorld),u.nearDistance.value=M.shadow.camera.near,u.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Zv(n,e,t,i){let s={},o={},a=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function r(M,w){const E=w.program;i.uniformBlockBinding(M,E)}function c(M,w){let E=s[M.id];E===void 0&&(y(M),E=d(M),s[M.id]=E,M.addEventListener("dispose",u));const L=w.program;i.updateUBOMapping(M,L);const b=e.render.frame;o[M.id]!==b&&(f(M),o[M.id]=b)}function d(M){const w=p();M.__bindingPointIndex=w;const E=n.createBuffer(),L=M.__size,b=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,E),E}function p(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const w=s[M.id],E=M.uniforms,L=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let b=0,_=E.length;b<_;b++){const S=Array.isArray(E[b])?E[b]:[E[b]];for(let C=0,v=S.length;C<v;C++){const x=S[C];if(h(x,b,C,L)===!0){const R=x.__offset,I=Array.isArray(x.value)?x.value:[x.value];let N=0;for(let k=0;k<I.length;k++){const U=I[k],G=m(U);typeof U=="number"||typeof U=="boolean"?(x.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,R+N,x.__data)):U.isMatrix3?(x.__data[0]=U.elements[0],x.__data[1]=U.elements[1],x.__data[2]=U.elements[2],x.__data[3]=0,x.__data[4]=U.elements[3],x.__data[5]=U.elements[4],x.__data[6]=U.elements[5],x.__data[7]=0,x.__data[8]=U.elements[6],x.__data[9]=U.elements[7],x.__data[10]=U.elements[8],x.__data[11]=0):(U.toArray(x.__data,N),N+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,x.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,w,E,L){const b=M.value,_=w+"_"+E;if(L[_]===void 0)return typeof b=="number"||typeof b=="boolean"?L[_]=b:L[_]=b.clone(),!0;{const S=L[_];if(typeof b=="number"||typeof b=="boolean"){if(S!==b)return L[_]=b,!0}else if(S.equals(b)===!1)return S.copy(b),!0}return!1}function y(M){const w=M.uniforms;let E=0;const L=16;for(let _=0,S=w.length;_<S;_++){const C=Array.isArray(w[_])?w[_]:[w[_]];for(let v=0,x=C.length;v<x;v++){const R=C[v],I=Array.isArray(R.value)?R.value:[R.value];for(let N=0,k=I.length;N<k;N++){const U=I[N],G=m(U),V=E%L,ne=V%G.boundary,se=V+ne;E+=ne,se!==0&&L-se<G.storage&&(E+=L-se),R.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=E,E+=G.storage}}}const b=E%L;return b>0&&(E+=L-b),M.__size=E,M.__cache={},this}function m(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function u(M){const w=M.target;w.removeEventListener("dispose",u);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete o[w.id]}function g(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},o={}}return{bind:r,update:c,dispose:g}}class Qv{constructor(e={}){const{canvas:t=zf(),context:i=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:r=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const h=new Uint32Array(4),y=new Int32Array(4);let m=null,u=null;const g=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=Si,this.toneMappingExposure=1;const w=this;let E=!1,L=0,b=0,_=null,S=-1,C=null;const v=new pt,x=new pt;let R=null;const I=new Fe(0);let N=0,k=t.width,U=t.height,G=1,V=null,ne=null;const se=new pt(0,0,k,U),ce=new pt(0,0,k,U);let $e=!1;const Be=new uc;let K=!1,Q=!1;const Me=new rt,ve=new rt,ze=new P,Le=new pt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Je(){return _===null?G:1}let O=i;function dn(A,B){return t.getContext(A,B)}try{const A={alpha:!0,depth:s,stencil:o,antialias:l,premultipliedAlpha:r,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tc}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",ge,!1),O===null){const B="webgl2";if(O=dn(B,A),O===null)throw dn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Xe,et,De,_t,Oe,D,T,H,Z,ie,J,we,he,ye,tt,oe,_e,ke,Ne,xe,Ye,He,gt,F;function me(){Xe=new sg(O),Xe.init(),He=new Wv(O,Xe),et=new Z0(O,Xe,e,He),De=new zv(O),et.reverseDepthBuffer&&De.buffers.depth.setReversed(!0),_t=new rg(O),Oe=new Ev,D=new Vv(O,Xe,De,Oe,et,He,_t),T=new eg(w),H=new ig(w),Z=new pp(O),gt=new j0(O,Z),ie=new og(O,Z,_t,gt),J=new cg(O,ie,Z,_t),Ne=new lg(O,et,D),oe=new Q0(Oe),we=new wv(w,T,H,Xe,et,gt,oe),he=new Jv(w,Oe),ye=new Av,tt=new Dv(Xe),ke=new K0(w,T,H,De,J,f,r),_e=new Fv(w,J,et),F=new Zv(O,_t,et,De),xe=new J0(O,Xe,_t),Ye=new ag(O,Xe,_t),_t.programs=we.programs,w.capabilities=et,w.extensions=Xe,w.properties=Oe,w.renderLists=ye,w.shadowMap=_e,w.state=De,w.info=_t}me();const q=new Kv(w,O);this.xr=q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(k,U,!1))},this.getSize=function(A){return A.set(k,U)},this.setSize=function(A,B,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,U=B,t.width=Math.floor(A*G),t.height=Math.floor(B*G),W===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(k*G,U*G).floor()},this.setDrawingBufferSize=function(A,B,W){k=A,U=B,G=W,t.width=Math.floor(A*W),t.height=Math.floor(B*W),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(se)},this.setViewport=function(A,B,W,$){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,B,W,$),De.viewport(v.copy(se).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(ce)},this.setScissor=function(A,B,W,$){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,B,W,$),De.scissor(x.copy(ce).multiplyScalar(G).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(A){De.setScissorTest($e=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){ne=A},this.getClearColor=function(A){return A.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(A=!0,B=!0,W=!0){let $=0;if(A){let z=!1;if(_!==null){const ae=_.texture.format;z=ae===lc||ae===rc||ae===ac}if(z){const ae=_.texture.type,fe=ae===li||ae===Ki||ae===Ao||ae===Fs||ae===sc||ae===oc,be=ke.getClearColor(),Se=ke.getClearAlpha(),Pe=be.r,Ie=be.g,Ee=be.b;fe?(h[0]=Pe,h[1]=Ie,h[2]=Ee,h[3]=Se,O.clearBufferuiv(O.COLOR,0,h)):(y[0]=Pe,y[1]=Ie,y[2]=Ee,y[3]=Se,O.clearBufferiv(O.COLOR,0,y))}else $|=O.COLOR_BUFFER_BIT}B&&($|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ye.dispose(),tt.dispose(),Oe.dispose(),T.dispose(),H.dispose(),J.dispose(),gt.dispose(),F.dispose(),we.dispose(),q.dispose(),q.removeEventListener("sessionstart",Pc),q.removeEventListener("sessionend",Lc),Pi.stop()};function ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=_t.autoReset,B=_e.enabled,W=_e.autoUpdate,$=_e.needsUpdate,z=_e.type;me(),_t.autoReset=A,_e.enabled=B,_e.autoUpdate=W,_e.needsUpdate=$,_e.type=z}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ze(A){const B=A.target;B.removeEventListener("dispose",Ze),Lt(B)}function Lt(A){nn(A),Oe.remove(A)}function nn(A){const B=Oe.get(A).programs;B!==void 0&&(B.forEach(function(W){we.releaseProgram(W)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,W,$,z,ae){B===null&&(B=je);const fe=z.isMesh&&z.matrixWorld.determinant()<0,be=Iu(A,B,W,$,z);De.setMaterial($,fe);let Se=W.index,Pe=1;if($.wireframe===!0){if(Se=ie.getWireframeAttribute(W),Se===void 0)return;Pe=2}const Ie=W.drawRange,Ee=W.attributes.position;let lt=Ie.start*Pe,xt=(Ie.start+Ie.count)*Pe;ae!==null&&(lt=Math.max(lt,ae.start*Pe),xt=Math.min(xt,(ae.start+ae.count)*Pe)),Se!==null?(lt=Math.max(lt,0),xt=Math.min(xt,Se.count)):Ee!=null&&(lt=Math.max(lt,0),xt=Math.min(xt,Ee.count));const Et=xt-lt;if(Et<0||Et===1/0)return;gt.setup(z,$,be,W,Se);let un,st=xe;if(Se!==null&&(un=Z.get(Se),st=Ye,st.setIndex(un)),z.isMesh)$.wireframe===!0?(De.setLineWidth($.wireframeLinewidth*Je()),st.setMode(O.LINES)):st.setMode(O.TRIANGLES);else if(z.isLine){let Te=$.linewidth;Te===void 0&&(Te=1),De.setLineWidth(Te*Je()),z.isLineSegments?st.setMode(O.LINES):z.isLineLoop?st.setMode(O.LINE_LOOP):st.setMode(O.LINE_STRIP)}else z.isPoints?st.setMode(O.POINTS):z.isSprite&&st.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)st.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Te=z._multiDrawStarts,Ht=z._multiDrawCounts,ot=z._multiDrawCount,An=Se?Z.get(Se).bytesPerElement:1,is=Oe.get($).currentProgram.getUniforms();for(let fn=0;fn<ot;fn++)is.setValue(O,"_gl_DrawID",fn),st.render(Te[fn]/An,Ht[fn])}else if(z.isInstancedMesh)st.renderInstances(lt,Et,z.count);else if(W.isInstancedBufferGeometry){const Te=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ht=Math.min(W.instanceCount,Te);st.renderInstances(lt,Et,Ht)}else st.render(lt,Et)};function it(A,B,W){A.transparent===!0&&A.side===Hn&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,Bo(A,B,W),A.side=ri,A.needsUpdate=!0,Bo(A,B,W),A.side=Hn):Bo(A,B,W)}this.compile=function(A,B,W=null){W===null&&(W=A),u=tt.get(W),u.init(B),M.push(u),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),A!==W&&A.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights();const $=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ae=z.material;if(ae)if(Array.isArray(ae))for(let fe=0;fe<ae.length;fe++){const be=ae[fe];it(be,W,z),$.add(be)}else it(ae,W,z),$.add(ae)}),M.pop(),u=null,$},this.compileAsync=function(A,B,W=null){const $=this.compile(A,B,W);return new Promise(z=>{function ae(){if($.forEach(function(fe){Oe.get(fe).currentProgram.isReady()&&$.delete(fe)}),$.size===0){z(A);return}setTimeout(ae,10)}Xe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let sn=null;function Gn(A){sn&&sn(A)}function Pc(){Pi.stop()}function Lc(){Pi.start()}const Pi=new Vd;Pi.setAnimationLoop(Gn),typeof self!="undefined"&&Pi.setContext(self),this.setAnimationLoop=function(A){sn=A,q.setAnimationLoop(A),A===null?Pi.stop():Pi.start()},q.addEventListener("sessionstart",Pc),q.addEventListener("sessionend",Lc),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(B),B=q.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,B,_),u=tt.get(A,M.length),u.init(B),M.push(u),ve.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Be.setFromProjectionMatrix(ve),Q=this.localClippingEnabled,K=oe.init(this.clippingPlanes,Q),m=ye.get(A,g.length),m.init(),g.push(m),q.enabled===!0&&q.isPresenting===!0){const ae=w.xr.getDepthSensingMesh();ae!==null&&ar(ae,B,-1/0,w.sortObjects)}ar(A,B,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(V,ne),ut=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ut&&ke.addToRenderList(m,A),this.info.render.frame++,K===!0&&oe.beginShadows();const W=u.state.shadowsArray;_e.render(W,A,B),K===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,z=m.transmissive;if(u.setupLights(),B.isArrayCamera){const ae=B.cameras;if(z.length>0)for(let fe=0,be=ae.length;fe<be;fe++){const Se=ae[fe];Dc($,z,A,Se)}ut&&ke.render(A);for(let fe=0,be=ae.length;fe<be;fe++){const Se=ae[fe];Ic(m,A,Se,Se.viewport)}}else z.length>0&&Dc($,z,A,B),ut&&ke.render(A),Ic(m,A,B);_!==null&&(D.updateMultisampleRenderTarget(_),D.updateRenderTargetMipmap(_)),A.isScene===!0&&A.onAfterRender(w,A,B),gt.resetDefaultState(),S=-1,C=null,M.pop(),M.length>0?(u=M[M.length-1],K===!0&&oe.setGlobalState(w.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function ar(A,B,W,$){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Be.intersectsSprite(A)){$&&Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ve);const fe=J.update(A),be=A.material;be.visible&&m.push(A,fe,be,W,Le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Be.intersectsObject(A))){const fe=J.update(A),be=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Le.copy(A.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Le.copy(fe.boundingSphere.center)),Le.applyMatrix4(A.matrixWorld).applyMatrix4(ve)),Array.isArray(be)){const Se=fe.groups;for(let Pe=0,Ie=Se.length;Pe<Ie;Pe++){const Ee=Se[Pe],lt=be[Ee.materialIndex];lt&&lt.visible&&m.push(A,fe,lt,W,Le.z,Ee)}}else be.visible&&m.push(A,fe,be,W,Le.z,null)}}const ae=A.children;for(let fe=0,be=ae.length;fe<be;fe++)ar(ae[fe],B,W,$)}function Ic(A,B,W,$){const z=A.opaque,ae=A.transmissive,fe=A.transparent;u.setupLightsView(W),K===!0&&oe.setGlobalState(w.clippingPlanes,W),$&&De.viewport(v.copy($)),z.length>0&&Fo(z,B,W),ae.length>0&&Fo(ae,B,W),fe.length>0&&Fo(fe,B,W),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Dc(A,B,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[$.id]===void 0&&(u.state.transmissionRenderTarget[$.id]=new ji(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Lo:li,minFilter:Yi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const ae=u.state.transmissionRenderTarget[$.id],fe=$.viewport||v;ae.setSize(fe.z,fe.w);const be=w.getRenderTarget();w.setRenderTarget(ae),w.getClearColor(I),N=w.getClearAlpha(),N<1&&w.setClearColor(16777215,.5),w.clear(),ut&&ke.render(W);const Se=w.toneMapping;w.toneMapping=Si;const Pe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),u.setupLightsView($),K===!0&&oe.setGlobalState(w.clippingPlanes,$),Fo(A,W,$),D.updateMultisampleRenderTarget(ae),D.updateRenderTargetMipmap(ae),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ee=0,lt=B.length;Ee<lt;Ee++){const xt=B[Ee],Et=xt.object,un=xt.geometry,st=xt.material,Te=xt.group;if(st.side===Hn&&Et.layers.test($.layers)){const Ht=st.side;st.side=en,st.needsUpdate=!0,kc(Et,W,$,un,st,Te),st.side=Ht,st.needsUpdate=!0,Ie=!0}}Ie===!0&&(D.updateMultisampleRenderTarget(ae),D.updateRenderTargetMipmap(ae))}w.setRenderTarget(be),w.setClearColor(I,N),Pe!==void 0&&($.viewport=Pe),w.toneMapping=Se}function Fo(A,B,W){const $=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ae=A.length;z<ae;z++){const fe=A[z],be=fe.object,Se=fe.geometry,Pe=$===null?fe.material:$,Ie=fe.group;be.layers.test(W.layers)&&kc(be,B,W,Se,Pe,Ie)}}function kc(A,B,W,$,z,ae){A.onBeforeRender(w,B,W,$,z,ae),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(w,B,W,$,A,ae),z.transparent===!0&&z.side===Hn&&z.forceSinglePass===!1?(z.side=en,z.needsUpdate=!0,w.renderBufferDirect(W,B,$,z,A,ae),z.side=ri,z.needsUpdate=!0,w.renderBufferDirect(W,B,$,z,A,ae),z.side=Hn):w.renderBufferDirect(W,B,$,z,A,ae),A.onAfterRender(w,B,W,$,z,ae)}function Bo(A,B,W){B.isScene!==!0&&(B=je);const $=Oe.get(A),z=u.state.lights,ae=u.state.shadowsArray,fe=z.state.version,be=we.getParameters(A,z.state,ae,B,W),Se=we.getProgramCacheKey(be);let Pe=$.programs;$.environment=A.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(A.isMeshStandardMaterial?H:T).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Pe===void 0&&(A.addEventListener("dispose",Ze),Pe=new Map,$.programs=Pe);let Ie=Pe.get(Se);if(Ie!==void 0){if($.currentProgram===Ie&&$.lightsStateVersion===fe)return Uc(A,be),Ie}else be.uniforms=we.getUniforms(A),A.onBeforeCompile(be,w),Ie=we.acquireProgram(be,Se),Pe.set(Se,Ie),$.uniforms=be.uniforms;const Ee=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ee.clippingPlanes=oe.uniform),Uc(A,be),$.needsLights=ku(A),$.lightsStateVersion=fe,$.needsLights&&(Ee.ambientLightColor.value=z.state.ambient,Ee.lightProbe.value=z.state.probe,Ee.directionalLights.value=z.state.directional,Ee.directionalLightShadows.value=z.state.directionalShadow,Ee.spotLights.value=z.state.spot,Ee.spotLightShadows.value=z.state.spotShadow,Ee.rectAreaLights.value=z.state.rectArea,Ee.ltc_1.value=z.state.rectAreaLTC1,Ee.ltc_2.value=z.state.rectAreaLTC2,Ee.pointLights.value=z.state.point,Ee.pointLightShadows.value=z.state.pointShadow,Ee.hemisphereLights.value=z.state.hemi,Ee.directionalShadowMap.value=z.state.directionalShadowMap,Ee.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ee.spotShadowMap.value=z.state.spotShadowMap,Ee.spotLightMatrix.value=z.state.spotLightMatrix,Ee.spotLightMap.value=z.state.spotLightMap,Ee.pointShadowMap.value=z.state.pointShadowMap,Ee.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=Ie,$.uniformsList=null,Ie}function Nc(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Ca.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Uc(A,B){const W=Oe.get(A);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Iu(A,B,W,$,z){B.isScene!==!0&&(B=je),D.resetTextureUnits();const ae=B.fog,fe=$.isMeshStandardMaterial?B.environment:null,be=_===null?w.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Ci,Se=($.isMeshStandardMaterial?H:T).get($.envMap||fe),Pe=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ee=!!W.morphAttributes.position,lt=!!W.morphAttributes.normal,xt=!!W.morphAttributes.color;let Et=Si;$.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(Et=w.toneMapping);const un=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,st=un!==void 0?un.length:0,Te=Oe.get($),Ht=u.state.lights;if(K===!0&&(Q===!0||A!==C)){const _n=A===C&&$.id===S;oe.setState($,A,_n)}let ot=!1;$.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Ht.state.version||Te.outputColorSpace!==be||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==Se||$.fog===!0&&Te.fog!==ae||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==oe.numPlanes||Te.numIntersection!==oe.numIntersection)||Te.vertexAlphas!==Pe||Te.vertexTangents!==Ie||Te.morphTargets!==Ee||Te.morphNormals!==lt||Te.morphColors!==xt||Te.toneMapping!==Et||Te.morphTargetsCount!==st)&&(ot=!0):(ot=!0,Te.__version=$.version);let An=Te.currentProgram;ot===!0&&(An=Bo($,B,z));let is=!1,fn=!1,rr=!1;const Ct=An.getUniforms(),di=Te.uniforms;if(De.useProgram(An.program)&&(is=!0,fn=!0,rr=!0),$.id!==S&&(S=$.id,fn=!0),is||C!==A){et.reverseDepthBuffer?(Me.copy(A.projectionMatrix),Vf(Me),Wf(Me),Ct.setValue(O,"projectionMatrix",Me)):Ct.setValue(O,"projectionMatrix",A.projectionMatrix),Ct.setValue(O,"viewMatrix",A.matrixWorldInverse);const _n=Ct.map.cameraPosition;_n!==void 0&&_n.setValue(O,ze.setFromMatrixPosition(A.matrixWorld)),et.logarithmicDepthBuffer&&Ct.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ct.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,fn=!0,rr=!0)}if(z.isSkinnedMesh){Ct.setOptional(O,z,"bindMatrix"),Ct.setOptional(O,z,"bindMatrixInverse");const _n=z.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ct.setValue(O,"boneTexture",_n.boneTexture,D))}z.isBatchedMesh&&(Ct.setOptional(O,z,"batchingTexture"),Ct.setValue(O,"batchingTexture",z._matricesTexture,D),Ct.setOptional(O,z,"batchingIdTexture"),Ct.setValue(O,"batchingIdTexture",z._indirectTexture,D),Ct.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&Ct.setValue(O,"batchingColorTexture",z._colorsTexture,D));const lr=W.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&Ne.update(z,W,An),(fn||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,Ct.setValue(O,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(di.envMap.value=Se,di.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(di.envMapIntensity.value=B.environmentIntensity),fn&&(Ct.setValue(O,"toneMappingExposure",w.toneMappingExposure),Te.needsLights&&Du(di,rr),ae&&$.fog===!0&&he.refreshFogUniforms(di,ae),he.refreshMaterialUniforms(di,$,G,U,u.state.transmissionRenderTarget[A.id]),Ca.upload(O,Nc(Te),di,D)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ca.upload(O,Nc(Te),di,D),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ct.setValue(O,"center",z.center),Ct.setValue(O,"modelViewMatrix",z.modelViewMatrix),Ct.setValue(O,"normalMatrix",z.normalMatrix),Ct.setValue(O,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const _n=$.uniformsGroups;for(let cr=0,Nu=_n.length;cr<Nu;cr++){const Oc=_n[cr];F.update(Oc,An),F.bind(Oc,An)}}return An}function Du(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function ku(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(A,B,W){Oe.get(A.texture).__webglTexture=B,Oe.get(A.depthTexture).__webglTexture=W;const $=Oe.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){const W=Oe.get(A);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,W=0){_=A,L=B,b=W;let $=!0,z=null,ae=!1,fe=!1;if(A){const Se=Oe.get(A);if(Se.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(O.FRAMEBUFFER,null),$=!1;else if(Se.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(Se.__hasExternalTextures)D.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ee=A.depthTexture;if(Se.__boundDepthTexture!==Ee){if(Ee!==null&&Oe.has(Ee)&&(A.width!==Ee.image.width||A.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const Pe=A.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(fe=!0);const Ie=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ie[B])?z=Ie[B][W]:z=Ie[B],ae=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?z=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ie)?z=Ie[W]:z=Ie,v.copy(A.viewport),x.copy(A.scissor),R=A.scissorTest}else v.copy(se).multiplyScalar(G).floor(),x.copy(ce).multiplyScalar(G).floor(),R=$e;if(De.bindFramebuffer(O.FRAMEBUFFER,z)&&$&&De.drawBuffers(A,z),De.viewport(v),De.scissor(x),De.setScissorTest(R),ae){const Se=Oe.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Se.__webglTexture,W)}else if(fe){const Se=Oe.get(A.texture),Pe=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Se.__webglTexture,W||0,Pe)}S=-1},this.readRenderTargetPixels=function(A,B,W,$,z,ae,fe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&fe!==void 0&&(be=be[fe]),be){De.bindFramebuffer(O.FRAMEBUFFER,be);try{const Se=A.texture,Pe=Se.format,Ie=Se.type;if(!et.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-$&&W>=0&&W<=A.height-z&&O.readPixels(B,W,$,z,He.convert(Pe),He.convert(Ie),ae)}finally{const Se=_!==null?Oe.get(_).__webglFramebuffer:null;De.bindFramebuffer(O.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(A,B,W,$,z,ae,fe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&fe!==void 0&&(be=be[fe]),be){const Se=A.texture,Pe=Se.format,Ie=Se.type;if(!et.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-$&&W>=0&&W<=A.height-z){De.bindFramebuffer(O.FRAMEBUFFER,be);const Ee=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.bufferData(O.PIXEL_PACK_BUFFER,ae.byteLength,O.STREAM_READ),O.readPixels(B,W,$,z,He.convert(Pe),He.convert(Ie),0);const lt=_!==null?Oe.get(_).__webglFramebuffer:null;De.bindFramebuffer(O.FRAMEBUFFER,lt);const xt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Hf(O,xt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ae),O.deleteBuffer(Ee),O.deleteSync(xt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,W=0){A.isTexture!==!0&&(Aa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-W),z=Math.floor(A.image.width*$),ae=Math.floor(A.image.height*$),fe=B!==null?B.x:0,be=B!==null?B.y:0;D.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,fe,be,z,ae),De.unbindTexture()},this.copyTextureToTexture=function(A,B,W=null,$=null,z=0){A.isTexture!==!0&&(Aa("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],B=arguments[2],z=arguments[3]||0,W=null);let ae,fe,be,Se,Pe,Ie;W!==null?(ae=W.max.x-W.min.x,fe=W.max.y-W.min.y,be=W.min.x,Se=W.min.y):(ae=A.image.width,fe=A.image.height,be=0,Se=0),$!==null?(Pe=$.x,Ie=$.y):(Pe=0,Ie=0);const Ee=He.convert(B.format),lt=He.convert(B.type);D.setTexture2D(B,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const xt=O.getParameter(O.UNPACK_ROW_LENGTH),Et=O.getParameter(O.UNPACK_IMAGE_HEIGHT),un=O.getParameter(O.UNPACK_SKIP_PIXELS),st=O.getParameter(O.UNPACK_SKIP_ROWS),Te=O.getParameter(O.UNPACK_SKIP_IMAGES),Ht=A.isCompressedTexture?A.mipmaps[z]:A.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Ht.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ht.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,be),O.pixelStorei(O.UNPACK_SKIP_ROWS,Se),A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,z,Pe,Ie,ae,fe,Ee,lt,Ht.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,z,Pe,Ie,Ht.width,Ht.height,Ee,Ht.data):O.texSubImage2D(O.TEXTURE_2D,z,Pe,Ie,ae,fe,Ee,lt,Ht),O.pixelStorei(O.UNPACK_ROW_LENGTH,xt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et),O.pixelStorei(O.UNPACK_SKIP_PIXELS,un),O.pixelStorei(O.UNPACK_SKIP_ROWS,st),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Te),z===0&&B.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(A,B,W=null,$=null,z=0){A.isTexture!==!0&&(Aa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,$=arguments[1]||null,A=arguments[2],B=arguments[3],z=arguments[4]||0);let ae,fe,be,Se,Pe,Ie,Ee,lt,xt;const Et=A.isCompressedTexture?A.mipmaps[z]:A.image;W!==null?(ae=W.max.x-W.min.x,fe=W.max.y-W.min.y,be=W.max.z-W.min.z,Se=W.min.x,Pe=W.min.y,Ie=W.min.z):(ae=Et.width,fe=Et.height,be=Et.depth,Se=0,Pe=0,Ie=0),$!==null?(Ee=$.x,lt=$.y,xt=$.z):(Ee=0,lt=0,xt=0);const un=He.convert(B.format),st=He.convert(B.type);let Te;if(B.isData3DTexture)D.setTexture3D(B,0),Te=O.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)D.setTexture2DArray(B,0),Te=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const Ht=O.getParameter(O.UNPACK_ROW_LENGTH),ot=O.getParameter(O.UNPACK_IMAGE_HEIGHT),An=O.getParameter(O.UNPACK_SKIP_PIXELS),is=O.getParameter(O.UNPACK_SKIP_ROWS),fn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Et.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Se),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ie),A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Te,z,Ee,lt,xt,ae,fe,be,un,st,Et.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Te,z,Ee,lt,xt,ae,fe,be,un,Et.data):O.texSubImage3D(Te,z,Ee,lt,xt,ae,fe,be,un,st,Et),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ht),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot),O.pixelStorei(O.UNPACK_SKIP_PIXELS,An),O.pixelStorei(O.UNPACK_SKIP_ROWS,is),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fn),z===0&&B.generateMipmaps&&O.generateMipmap(Te),De.unbindTexture()},this.initRenderTarget=function(A){Oe.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),De.unbindTexture()},this.resetState=function(){L=0,b=0,_=null,De.reset(),gt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===cc?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===nr?"display-p3":"srgb"}}class pc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=i}clone(){return new pc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kd extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ey{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wl,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new P;class za{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array),o=ct(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new za(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jd extends Ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ys;const to=new P,_s=new P,xs=new P,Ms=new de,no=new de,Jd=new rt,ra=new P,io=new P,la=new P,Ih=new de,Br=new de,Dh=new de;class ty extends At{constructor(e=new jd){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new Pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ey(t,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new za(i,3,0,!1)),ys.setAttribute("uv",new za(i,2,3,!1))}this.geometry=ys,this.material=e,this.center=new de(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),Jd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-xs.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const a=this.center;ca(ra.set(-.5,-.5,0),xs,a,_s,s,o),ca(io.set(.5,-.5,0),xs,a,_s,s,o),ca(la.set(.5,.5,0),xs,a,_s,s,o),Ih.set(0,0),Br.set(1,0),Dh.set(1,1);let l=e.ray.intersectTriangle(ra,io,la,!1,to);if(l===null&&(ca(io.set(-.5,.5,0),xs,a,_s,s,o),Br.set(0,1),l=e.ray.intersectTriangle(ra,la,io,!1,to),l===null))return;const r=e.ray.origin.distanceTo(to);r<e.near||r>e.far||t.push({distance:r,point:to.clone(),uv:Sn.getInterpolation(to,ra,io,la,Ih,Br,Dh,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ca(n,e,t,i,s,o){Ms.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(no.x=o*Ms.x-s*Ms.y,no.y=s*Ms.x+o*Ms.y):no.copy(Ms),n.copy(e),n.x+=no.x,n.y+=no.y,n.applyMatrix4(Jd)}class Zd extends qt{constructor(e=null,t=1,i=1,s,o,a,l,r,c=Qt,d=Qt,p,f){super(null,a,l,r,c,d,s,o,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kh extends yn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new rt,Nh=new rt,ha=[],Uh=new Qi,ny=new rt,so=new Ae,oo=new es;class ao extends Ae{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ny)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),Uh.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(Uh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),oo.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,a=e*o+1;for(let l=0;l<i.length;l++)i[l]=s[a+l]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(i),e.ray.intersectsSphere(oo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,bs),Nh.multiplyMatrices(i,bs),so.matrixWorld=Nh,so.raycast(e,ha);for(let a=0,l=ha.length;a<l;a++){const r=ha[a];r.instanceId=o,r.object=this,t.push(r)}ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new kh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Zd(new Float32Array(s*this.count),s,this.count,tr,Vn));const o=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const l=this.geometry.morphTargetsRelative?1:1-a,r=s*e;o[r]=l,o.set(i,r+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class xo extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ha=new P,Va=new P,Oh=new rt,ro=new dc,da=new es,zr=new P,Fh=new P;class Gl extends At{constructor(e=new Pt,t=new xo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)Ha.fromBufferAttribute(t,s-1),Va.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ha.distanceTo(Va);e.setAttribute("lineDistance",new mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(s),da.radius+=o,e.ray.intersectsSphere(da)===!1)return;Oh.copy(s).invert(),ro.copy(e.ray).applyMatrix4(Oh);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),r=l*l,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const h=Math.max(0,a.start),y=Math.min(d.count,a.start+a.count);for(let m=h,u=y-1;m<u;m+=c){const g=d.getX(m),M=d.getX(m+1),w=ua(this,e,ro,r,g,M);w&&t.push(w)}if(this.isLineLoop){const m=d.getX(y-1),u=d.getX(h),g=ua(this,e,ro,r,m,u);g&&t.push(g)}}else{const h=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count);for(let m=h,u=y-1;m<u;m+=c){const g=ua(this,e,ro,r,m,m+1);g&&t.push(g)}if(this.isLineLoop){const m=ua(this,e,ro,r,y-1,h);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function ua(n,e,t,i,s,o){const a=n.geometry.attributes.position;if(Ha.fromBufferAttribute(a,s),Va.fromBufferAttribute(a,o),t.distanceSqToSegment(Ha,Va,zr,Fh)>i)return;zr.applyMatrix4(n.matrixWorld);const r=e.ray.origin.distanceTo(zr);if(!(r<e.near||r>e.far))return{distance:r,point:Fh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Bh=new P,zh=new P;class Qd extends Gl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)Bh.fromBufferAttribute(t,s),zh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Bh.distanceTo(zh);e.setAttribute("lineDistance",new mt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eu extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hh=new rt,Xl=new dc,fa=new es,pa=new P;class iy extends At{constructor(e=new Pt,t=new eu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(s),fa.radius+=o,e.ray.intersectsSphere(fa)===!1)return;Hh.copy(s).invert(),Xl.copy(e.ray).applyMatrix4(Hh);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),r=l*l,c=i.index,p=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let y=f,m=h;y<m;y++){const u=c.getX(y);pa.fromBufferAttribute(p,u),Vh(pa,u,r,s,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(p.count,a.start+a.count);for(let y=f,m=h;y<m;y++)pa.fromBufferAttribute(p,y),Vh(pa,y,r,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Vh(n,e,t,i,s,o,a){const l=Xl.distanceSqToPoint(n);if(l<t){const r=new P;Xl.closestPointToPoint(n,r),r.applyMatrix4(i);const c=s.ray.origin.distanceTo(r);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(l),point:r,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class tu extends qt{constructor(e,t,i,s,o,a,l,r,c){super(e,t,i,s,o,a,l,r,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),o=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),o+=i.distanceTo(s),t.push(o),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const o=i.length;let a;t?a=t:a=e*i[o-1];let l=0,r=o-1,c;for(;l<=r;)if(s=Math.floor(l+(r-l)/2),c=i[s]-a,c<0)l=s+1;else if(c>0)r=s-1;else{r=s;break}if(s=r,i[s]===a)return s/(o-1);const d=i[s],f=i[s+1]-d,h=(a-d)/f;return(s+h)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const a=this.getPoint(s),l=this.getPoint(o),r=t||(a.isVector2?new de:new P);return r.copy(l).sub(a).normalize(),r}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,s=[],o=[],a=[],l=new P,r=new rt;for(let h=0;h<=e;h++){const y=h/e;s[h]=this.getTangentAt(y,new P)}o[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const d=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=c&&(c=d,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),f<=c&&i.set(0,0,1),l.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],l),a[0].crossVectors(s[0],o[0]);for(let h=1;h<=e;h++){if(o[h]=o[h-1].clone(),a[h]=a[h-1].clone(),l.crossVectors(s[h-1],s[h]),l.length()>Number.EPSILON){l.normalize();const y=Math.acos(zt(s[h-1].dot(s[h]),-1,1));o[h].applyMatrix4(r.makeRotationAxis(l,y))}a[h].crossVectors(s[h],o[h])}if(t===!0){let h=Math.acos(zt(o[0].dot(o[e]),-1,1));h/=e,s[0].dot(l.crossVectors(o[0],o[e]))>0&&(h=-h);for(let y=1;y<=e;y++)o[y].applyMatrix4(r.makeRotationAxis(s[y],h*y)),a[y].crossVectors(s[y],o[y])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class mc extends $n{constructor(e=0,t=0,i=1,s=1,o=0,a=Math.PI*2,l=!1,r=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=l,this.aRotation=r}getPoint(e,t=new de){const i=t,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(a?o=0:o=s),this.aClockwise===!0&&!a&&(o===s?o=-s:o=o-s);const l=this.aStartAngle+e*o;let r=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=r-this.aX,h=c-this.aY;r=f*d-h*p+this.aX,c=f*p+h*d+this.aY}return i.set(r,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sy extends mc{constructor(e,t,i,s,o,a){super(e,t,i,i,s,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function gc(){let n=0,e=0,t=0,i=0;function s(o,a,l,r){n=o,e=l,t=-3*o+3*a-2*l-r,i=2*o-2*a+l+r}return{initCatmullRom:function(o,a,l,r,c){s(a,l,c*(l-o),c*(r-a))},initNonuniformCatmullRom:function(o,a,l,r,c,d,p){let f=(a-o)/c-(l-o)/(c+d)+(l-a)/d,h=(l-a)/d-(r-a)/(d+p)+(r-l)/p;f*=d,h*=d,s(a,l,f,h)},calc:function(o){const a=o*o,l=a*o;return n+e*o+t*a+i*l}}}const ma=new P,Hr=new gc,Vr=new gc,Wr=new gc;class oy extends $n{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){const i=t,s=this.points,o=s.length,a=(o-(this.closed?0:1))*e;let l=Math.floor(a),r=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/o)+1)*o:r===0&&l===o-1&&(l=o-2,r=1);let c,d;this.closed||l>0?c=s[(l-1)%o]:(ma.subVectors(s[0],s[1]).add(s[0]),c=ma);const p=s[l%o],f=s[(l+1)%o];if(this.closed||l+2<o?d=s[(l+2)%o]:(ma.subVectors(s[o-1],s[o-2]).add(s[o-1]),d=ma),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(p),h),m=Math.pow(p.distanceToSquared(f),h),u=Math.pow(f.distanceToSquared(d),h);m<1e-4&&(m=1),y<1e-4&&(y=m),u<1e-4&&(u=m),Hr.initNonuniformCatmullRom(c.x,p.x,f.x,d.x,y,m,u),Vr.initNonuniformCatmullRom(c.y,p.y,f.y,d.y,y,m,u),Wr.initNonuniformCatmullRom(c.z,p.z,f.z,d.z,y,m,u)}else this.curveType==="catmullrom"&&(Hr.initCatmullRom(c.x,p.x,f.x,d.x,this.tension),Vr.initCatmullRom(c.y,p.y,f.y,d.y,this.tension),Wr.initCatmullRom(c.z,p.z,f.z,d.z,this.tension));return i.set(Hr.calc(r),Vr.calc(r),Wr.calc(r)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wh(n,e,t,i,s){const o=(i-e)*.5,a=(s-t)*.5,l=n*n,r=n*l;return(2*t-2*i+o+a)*r+(-3*t+3*i-2*o-a)*l+o*n+t}function ay(n,e){const t=1-n;return t*t*e}function ry(n,e){return 2*(1-n)*n*e}function ly(n,e){return n*n*e}function Mo(n,e,t,i){return ay(n,e)+ry(n,t)+ly(n,i)}function cy(n,e){const t=1-n;return t*t*t*e}function hy(n,e){const t=1-n;return 3*t*t*n*e}function dy(n,e){return 3*(1-n)*n*n*e}function uy(n,e){return n*n*n*e}function bo(n,e,t,i,s){return cy(n,e)+hy(n,t)+dy(n,i)+uy(n,s)}class nu extends $n{constructor(e=new de,t=new de,i=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new de){const i=t,s=this.v0,o=this.v1,a=this.v2,l=this.v3;return i.set(bo(e,s.x,o.x,a.x,l.x),bo(e,s.y,o.y,a.y,l.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fy extends $n{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){const i=t,s=this.v0,o=this.v1,a=this.v2,l=this.v3;return i.set(bo(e,s.x,o.x,a.x,l.x),bo(e,s.y,o.y,a.y,l.y),bo(e,s.z,o.z,a.z,l.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class iu extends $n{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class py extends $n{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class su extends $n{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){const i=t,s=this.v0,o=this.v1,a=this.v2;return i.set(Mo(e,s.x,o.x,a.x),Mo(e,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class my extends $n{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,s=this.v0,o=this.v1,a=this.v2;return i.set(Mo(e,s.x,o.x,a.x),Mo(e,s.y,o.y,a.y),Mo(e,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ou extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const i=t,s=this.points,o=(s.length-1)*e,a=Math.floor(o),l=o-a,r=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return i.set(Wh(l,r.x,c.x,d.x,p.x),Wh(l,r.y,c.y,d.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new de().fromArray(s))}return this}}var $h=Object.freeze({__proto__:null,ArcCurve:sy,CatmullRomCurve3:oy,CubicBezierCurve:nu,CubicBezierCurve3:fy,EllipseCurve:mc,LineCurve:iu,LineCurve3:py,QuadraticBezierCurve:su,QuadraticBezierCurve3:my,SplineCurve:ou});class gy extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $h[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const a=s[o]-i,l=this.curves[o],r=l.getLength(),c=r===0?0:1-a/r;return l.getPointAt(c,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const a=o[s],l=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,r=a.getPoints(l);for(let c=0;c<r.length;c++){const d=r[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new $h[s.type]().fromJSON(s))}return this}}class vy extends gy{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new iu(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const o=new su(this.currentPoint.clone(),new de(e,t),new de(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,o,a){const l=new nu(this.currentPoint.clone(),new de(e,t),new de(i,s),new de(o,a));return this.curves.push(l),this.currentPoint.set(o,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new ou(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,o,a){const l=this.currentPoint.x,r=this.currentPoint.y;return this.absarc(e+l,t+r,i,s,o,a),this}absarc(e,t,i,s,o,a){return this.absellipse(e,t,i,i,s,o,a),this}ellipse(e,t,i,s,o,a,l,r){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,s,o,a,l,r),this}absellipse(e,t,i,s,o,a,l,r){const c=new mc(e,t,i,s,o,a,l,r);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class vc extends Pt{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=zt(s,0,Math.PI*2);const o=[],a=[],l=[],r=[],c=[],d=1/t,p=new P,f=new de,h=new P,y=new P,m=new P;let u=0,g=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:u=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,h.x=g*1,h.y=-u,h.z=g*0,m.copy(h),h.normalize(),r.push(h.x,h.y,h.z);break;case e.length-1:r.push(m.x,m.y,m.z);break;default:u=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,h.x=g*1,h.y=-u,h.z=g*0,y.copy(h),h.x+=m.x,h.y+=m.y,h.z+=m.z,h.normalize(),r.push(h.x,h.y,h.z),m.copy(y)}for(let M=0;M<=t;M++){const w=i+M*d*s,E=Math.sin(w),L=Math.cos(w);for(let b=0;b<=e.length-1;b++){p.x=e[b].x*E,p.y=e[b].y,p.z=e[b].x*L,a.push(p.x,p.y,p.z),f.x=M/t,f.y=b/(e.length-1),l.push(f.x,f.y);const _=r[3*b+0]*E,S=r[3*b+1],C=r[3*b+0]*L;c.push(_,S,C)}}for(let M=0;M<t;M++)for(let w=0;w<e.length-1;w++){const E=w+M*e.length,L=E,b=E+e.length,_=E+e.length+1,S=E+1;o.push(L,b,S),o.push(_,S,b)}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("uv",new mt(l,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.points,e.segments,e.phiStart,e.phiLength)}}class Do extends vc{constructor(e=1,t=1,i=4,s=8){const o=new vy;o.absarc(0,-t/2,e,Math.PI*1.5,0),o.absarc(0,t/2,e,0,Math.PI*.5),super(o.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new Do(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ds extends Pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const o=[],a=[],l=[],r=[],c=new P,d=new de;a.push(0,0,0),l.push(0,0,1),r.push(.5,.5);for(let p=0,f=3;p<=t;p++,f+=3){const h=i+p/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),l.push(0,0,1),d.x=(a[f]/e+1)/2,d.y=(a[f+1]/e+1)/2,r.push(d.x,d.y)}for(let p=1;p<=t;p++)o.push(p,p+1,0);this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(r,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wt extends Pt{constructor(e=1,t=1,i=1,s=32,o=1,a=!1,l=0,r=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:l,thetaLength:r};const c=this;s=Math.floor(s),o=Math.floor(o);const d=[],p=[],f=[],h=[];let y=0;const m=[],u=i/2;let g=0;M(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new mt(p,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(h,2));function M(){const E=new P,L=new P;let b=0;const _=(t-e)/i;for(let S=0;S<=o;S++){const C=[],v=S/o,x=v*(t-e)+e;for(let R=0;R<=s;R++){const I=R/s,N=I*r+l,k=Math.sin(N),U=Math.cos(N);L.x=x*k,L.y=-v*i+u,L.z=x*U,p.push(L.x,L.y,L.z),E.set(k,_,U).normalize(),f.push(E.x,E.y,E.z),h.push(I,1-v),C.push(y++)}m.push(C)}for(let S=0;S<s;S++)for(let C=0;C<o;C++){const v=m[C][S],x=m[C+1][S],R=m[C+1][S+1],I=m[C][S+1];e>0&&(d.push(v,x,I),b+=3),t>0&&(d.push(x,R,I),b+=3)}c.addGroup(g,b,0),g+=b}function w(E){const L=y,b=new de,_=new P;let S=0;const C=E===!0?e:t,v=E===!0?1:-1;for(let R=1;R<=s;R++)p.push(0,u*v,0),f.push(0,v,0),h.push(.5,.5),y++;const x=y;for(let R=0;R<=s;R++){const N=R/s*r+l,k=Math.cos(N),U=Math.sin(N);_.x=C*U,_.y=u*v,_.z=C*k,p.push(_.x,_.y,_.z),f.push(0,v,0),b.x=k*.5+.5,b.y=U*.5*v+.5,h.push(b.x,b.y),y++}for(let R=0;R<s;R++){const I=L+R,N=x+R;E===!0?d.push(N,N+1,I):d.push(N+1,N,I),S+=3}c.addGroup(g,S,E===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ko extends Wt{constructor(e=1,t=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(0,e,t,i,s,o,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l}}static fromJSON(e){return new ko(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yc extends Pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],a=[];l(s),c(i),d(),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(o.slice(),3)),this.setAttribute("uv",new mt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(M){const w=new P,E=new P,L=new P;for(let b=0;b<t.length;b+=3)h(t[b+0],w),h(t[b+1],E),h(t[b+2],L),r(w,E,L,M)}function r(M,w,E,L){const b=L+1,_=[];for(let S=0;S<=b;S++){_[S]=[];const C=M.clone().lerp(E,S/b),v=w.clone().lerp(E,S/b),x=b-S;for(let R=0;R<=x;R++)R===0&&S===b?_[S][R]=C:_[S][R]=C.clone().lerp(v,R/x)}for(let S=0;S<b;S++)for(let C=0;C<2*(b-S)-1;C++){const v=Math.floor(C/2);C%2===0?(f(_[S][v+1]),f(_[S+1][v]),f(_[S][v])):(f(_[S][v+1]),f(_[S+1][v+1]),f(_[S+1][v]))}}function c(M){const w=new P;for(let E=0;E<o.length;E+=3)w.x=o[E+0],w.y=o[E+1],w.z=o[E+2],w.normalize().multiplyScalar(M),o[E+0]=w.x,o[E+1]=w.y,o[E+2]=w.z}function d(){const M=new P;for(let w=0;w<o.length;w+=3){M.x=o[w+0],M.y=o[w+1],M.z=o[w+2];const E=u(M)/2/Math.PI+.5,L=g(M)/Math.PI+.5;a.push(E,1-L)}y(),p()}function p(){for(let M=0;M<a.length;M+=6){const w=a[M+0],E=a[M+2],L=a[M+4],b=Math.max(w,E,L),_=Math.min(w,E,L);b>.9&&_<.1&&(w<.2&&(a[M+0]+=1),E<.2&&(a[M+2]+=1),L<.2&&(a[M+4]+=1))}}function f(M){o.push(M.x,M.y,M.z)}function h(M,w){const E=M*3;w.x=e[E+0],w.y=e[E+1],w.z=e[E+2]}function y(){const M=new P,w=new P,E=new P,L=new P,b=new de,_=new de,S=new de;for(let C=0,v=0;C<o.length;C+=9,v+=6){M.set(o[C+0],o[C+1],o[C+2]),w.set(o[C+3],o[C+4],o[C+5]),E.set(o[C+6],o[C+7],o[C+8]),b.set(a[v+0],a[v+1]),_.set(a[v+2],a[v+3]),S.set(a[v+4],a[v+5]),L.copy(M).add(w).add(E).divideScalar(3);const x=u(L);m(b,v+0,M,x),m(_,v+2,w,x),m(S,v+4,E,x)}}function m(M,w,E,L){L<0&&M.x===1&&(a[w]=M.x-1),E.x===0&&E.z===0&&(a[w]=L/2/Math.PI+.5)}function u(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.vertices,e.indices,e.radius,e.details)}}class Ji extends yc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ji(e.radius,e.detail)}}class Tn extends Pt{constructor(e=1,t=32,i=16,s=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:o,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const r=Math.min(a+l,Math.PI);let c=0;const d=[],p=new P,f=new P,h=[],y=[],m=[],u=[];for(let g=0;g<=i;g++){const M=[],w=g/i;let E=0;g===0&&a===0?E=.5/t:g===i&&r===Math.PI&&(E=-.5/t);for(let L=0;L<=t;L++){const b=L/t;p.x=-e*Math.cos(s+b*o)*Math.sin(a+w*l),p.y=e*Math.cos(a+w*l),p.z=e*Math.sin(s+b*o)*Math.sin(a+w*l),y.push(p.x,p.y,p.z),f.copy(p).normalize(),m.push(f.x,f.y,f.z),u.push(b+E,1-w),M.push(c++)}d.push(M)}for(let g=0;g<i;g++)for(let M=0;M<t;M++){const w=d[g][M+1],E=d[g][M],L=d[g+1][M],b=d[g+1][M+1];(g!==0||a>0)&&h.push(w,E,b),(g!==i-1||r<Math.PI)&&h.push(E,L,b)}this.setIndex(h),this.setAttribute("position",new mt(y,3)),this.setAttribute("normal",new mt(m,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ts extends Pt{constructor(e=1,t=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const a=[],l=[],r=[],c=[],d=new P,p=new P,f=new P;for(let h=0;h<=i;h++)for(let y=0;y<=s;y++){const m=y/s*o,u=h/i*Math.PI*2;p.x=(e+t*Math.cos(u))*Math.cos(m),p.y=(e+t*Math.cos(u))*Math.sin(m),p.z=t*Math.sin(u),l.push(p.x,p.y,p.z),d.x=e*Math.cos(m),d.y=e*Math.sin(m),f.subVectors(p,d).normalize(),r.push(f.x,f.y,f.z),c.push(y/s),c.push(h/i)}for(let h=1;h<=i;h++)for(let y=1;y<=s;y++){const m=(s+1)*h+y-1,u=(s+1)*(h-1)+y-1,g=(s+1)*(h-1)+y,M=(s+1)*h+y;a.push(m,u,M),a.push(u,g,M)}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(r,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class yy extends Ri{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class _c extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class au extends _c{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $r=new rt,Gh=new P,Xh=new P;class ru{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uc,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gh),Xh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xh),t.updateMatrixWorld(),$r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($r)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yh=new rt,lo=new P,Gr=new P;class _y extends ru{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),lo.setFromMatrixPosition(e.matrixWorld),i.position.copy(lo),Gr.copy(i.position),Gr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Gr),i.updateMatrixWorld(),s.makeTranslation(-lo.x,-lo.y,-lo.z),Yh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh)}}class Wa extends _c{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new _y}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xy extends ru{constructor(){super(new Wd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lu extends _c{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new xy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class My{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qh(){return performance.now()}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tc);let Oi=null;function by(){if(!Oi){const n=new Uint8Array([110,190,255]);Oi=new Zd(n,3,1,tr),Oi.minFilter=Oi.magFilter=Qt,Oi.generateMipmaps=!1,Oi.needsUpdate=!0}return Oi}const Xr=new Map;function Y(n,e={}){var s,o,a,l,r,c;const t=[n,e.map?e.map.uuid:"",e.flat?"f":"",(s=e.opacity)!=null?s:"",(o=e.side)!=null?o:""].join("|");if(!e.unique&&Xr.has(t))return Xr.get(t);const i=new yy({color:n,gradientMap:by(),map:e.map||null,emissive:(a=e.emissive)!=null?a:0,emissiveIntensity:(l=e.emissiveIntensity)!=null?l:1,transparent:e.opacity!=null&&e.opacity<1,opacity:(r=e.opacity)!=null?r:1,side:(c=e.side)!=null?c:ri});return e.unique||Xr.set(t,i),i}const cu=new Gs({color:1380380,side:en});function Sy(n,e=.035){const t=n.geometry;t.boundingBox||t.computeBoundingBox();const i=new P,s=new P;t.boundingBox.getSize(i),t.boundingBox.getCenter(s);const o=n.scale,a=(r,c)=>r*c>1e-4?(r*c+2*e)/(r*c):1,l=new Ae(t,cu);return l.scale.set(a(i.x,Math.abs(o.x)),a(i.y,Math.abs(o.y)),a(i.z,Math.abs(o.z))),l.position.set(s.x*(1-l.scale.x),s.y*(1-l.scale.y),s.z*(1-l.scale.z)),l.castShadow=!1,l.receiveShadow=!1,l.userData.isOutline=!0,l.raycast=()=>{},n.add(l),l}function te(n,e,t={}){var s,o,a;const i=new Ae(n,e);return t.scale&&i.scale.set(...t.scale),i.castShadow=(s=t.cast)!=null?s:!0,i.receiveShadow=(o=t.receive)!=null?o:!0,t.outline!==!1&&Sy(i,(a=t.t)!=null?a:.035),i}const En=new Map;function Ys(n,e){const t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}function qs(n,e=[1,1]){const t=new tu(n);return t.colorSpace=Yt,t.wrapS=t.wrapT=ka,t.repeat.set(e[0],e[1]),t.anisotropy=4,t}const Jn="#1a1423",wy=[{id:"circles",name:"Rings"},{id:"diamonds",name:"Diamonds"},{id:"waves",name:"Waves"},{id:"kente",name:"Kente"},{id:"leaves",name:"Leaves"}];function Zi(n,e,t,i="#fff3d6",s=[2,2]){const o=["ank",n,e,t,i,s.join("x")].join("|");if(En.has(o))return En.get(o);const a=256,[l,r]=Ys(a,a);r.fillStyle=e,r.fillRect(0,0,a,a);const c=(p,f,h,y)=>{for(const m of[-a,0,a])for(const u of[-a,0,a])r.beginPath(),r.arc(p+m,f+u,h,0,Math.PI*2),r.fillStyle=y,r.fill()};switch(n){case"circles":{const f=a/4;for(let h=0;h<4;h++)for(let y=0;y<4;y++){const m=y*f+f/2+(h%2?f/2:0),u=h*f+f/2;for(const[g,M]of[[27,Jn],[23,t],[16,i],[11,Jn],[6,t]])c(m,u,g,M)}for(let h=0;h<4;h++)for(let y=0;y<4;y++)c(y*f+(h%2?0:f/2)+f/2-f/2,h*f+4,4,i);break}case"diamonds":{for(let f=0;f<4;f++)for(let h=0;h<4;h++){const y=h*64+32,m=f*64+64/2;for(const[u,g]of[[30,Jn],[25,t],[15,i],[7,Jn]])r.beginPath(),r.moveTo(y,m-u),r.lineTo(y+u,m),r.lineTo(y,m+u),r.lineTo(y-u,m),r.closePath(),r.fillStyle=g,r.fill()}r.fillStyle=i;for(let f=0;f<=4;f++)for(let h=0;h<=4;h++)r.beginPath(),r.arc(h*64,f*64,5,0,7),r.fill();break}case"waves":{for(let p=0;p<4;p++){const f=p*64+32;r.lineCap="round";for(const[h,y,m]of[[18,Jn,0],[12,t,0],[4,i,0]]){r.beginPath();for(let u=0;u<=a;u+=4){const g=f+Math.sin(u/a*Math.PI*8)*12+m;u?r.lineTo(u,g):r.moveTo(u,g)}r.lineWidth=h,r.strokeStyle=y,r.stroke()}r.fillStyle=i;for(let h=0;h<8;h++)r.beginPath(),r.arc(h*32+16,f+28*(h%2?1:-1)*0+30,4,0,7),r.fill()}break}case"kente":{const p=[t,Jn,i,t,"#2a9d8f"];for(let f=0;f<4;f++)for(let h=0;h<4;h++){const y=h*64,m=f*64;for(let u=0;u<8;u++)r.fillStyle=p[u%p.length],(h+f)%2?r.fillRect(y+u*8,m,6,64):r.fillRect(y,m+u*8,64,6);r.strokeStyle=Jn,r.lineWidth=3,r.strokeRect(y+1.5,m+1.5,61,61)}break}case"leaves":default:{for(let p=0;p<4;p++)for(let f=0;f<4;f++){const h=f*64+32+(p%2?32:0),y=p*64+32;for(const m of[-a,0])r.save(),r.translate(h+m,y),r.rotate(((f+p)%2?1:-1)*Math.PI/4),r.beginPath(),r.ellipse(0,0,26,12,0,0,Math.PI*2),r.fillStyle=Jn,r.fill(),r.beginPath(),r.ellipse(0,0,22,8,0,0,Math.PI*2),r.fillStyle=t,r.fill(),r.beginPath(),r.moveTo(-20,0),r.lineTo(20,0),r.lineWidth=2.5,r.strokeStyle=Jn,r.stroke(),r.restore()}r.fillStyle=i;for(let p=0;p<4;p++)for(let f=0;f<4;f++)r.beginPath(),r.arc(f*64+(p%2,0),p*64+0,6,0,7),r.fill()}}const d=qs(l,s);return En.set(o,d),d}function an(n,e=8,t=!0,i=[1,1]){const s=["str",n.join(","),e,t,i.join("x")].join("|");if(En.has(s))return En.get(s);const o=128,[a,l]=Ys(o,o),r=o/e;for(let d=0;d<e;d++)l.fillStyle=n[d%n.length],t?l.fillRect(d*r,0,r+1,o):l.fillRect(0,d*r,o,r+1);const c=qs(a,i);return En.set(s,c),c}function Kh(n=8){const[e,t]=Ys(512,128);t.fillStyle="#5b6070",t.fillRect(0,0,512,128),t.fillStyle="rgba(255,255,255,0.05)";for(let s=0;s<60;s++)t.fillRect(Math.random()*512,Math.random()*128,18,3);t.fillStyle="#f6f2e8",t.fillRect(0,6,512,5),t.fillRect(0,117,512,5),t.fillStyle="#ffd23f";for(let s=0;s<512;s+=128)t.fillRect(s+16,58,80,12);return qs(e,[n,1])}function Ra(n,{bg:e="#ffd23f",fg:t="#1a1423",w:i=512,h:s=128,border:o="#1a1423",sub:a=null,font:l="Trebuchet MS, Verdana, sans-serif"}={}){const r=["txt",n,e,t,i,s,a].join("|");if(En.has(r))return En.get(r);const[c,d]=Ys(i,s);d.fillStyle=e,d.fillRect(0,0,i,s),o&&(d.strokeStyle=o,d.lineWidth=Math.max(6,s*.06),d.strokeRect(d.lineWidth/2,d.lineWidth/2,i-d.lineWidth,s-d.lineWidth)),d.fillStyle=t,d.textAlign="center",d.textBaseline="middle";let p=a?s*.42:s*.6;for(d.font=`900 ${p}px ${l}`;d.measureText(n).width>i*.9&&p>8;)p-=2,d.font=`900 ${p}px ${l}`;if(d.fillText(n,i/2,a?s*.38:s*.54),a){let h=s*.22;for(d.font=`700 ${h}px ${l}`;d.measureText(a).width>i*.92&&h>8;)h-=1,d.font=`700 ${h}px ${l}`;d.fillText(a,i/2,s*.76)}const f=qs(c);return f.wrapS=f.wrapT=ti,En.set(r,f),f}function jh(n){const e="bub2|"+n;if(En.has(e))return En.get(e);const[t,i]=Ys(512,200),s=m=>`800 ${m}px Trebuchet MS, Verdana, sans-serif`;let o=40;i.font=s(o);let a=[n];if(i.measureText(n).width>440){const m=n.split(" ");let u=null;for(let g=1;g<m.length;g++){const M=m.slice(0,g).join(" "),w=m.slice(g).join(" "),E=Math.max(i.measureText(M).width,i.measureText(w).width);(!u||E<u[0])&&(u=[E,[M,w]])}u&&(a=u[1])}const l=()=>Math.max(...a.map(m=>i.measureText(m).width));for(;l()>450&&o>20;)o-=2,i.font=s(o);const r=Math.min(496,l()+48),c=a.length===1?92:150,d=(512-r)/2,p=182-c-4,f=32,h=p+c;i.beginPath(),i.moveTo(d+f,p),i.lineTo(d+r-f,p),i.quadraticCurveTo(d+r,p,d+r,p+f),i.lineTo(d+r,h-f),i.quadraticCurveTo(d+r,h,d+r-f,h),i.lineTo(276,h),i.lineTo(256,196),i.lineTo(238,h),i.lineTo(d+f,h),i.quadraticCurveTo(d,h,d,h-f),i.lineTo(d,p+f),i.quadraticCurveTo(d,p,d+f,p),i.closePath(),i.fillStyle="#fffdf5",i.fill(),i.lineWidth=7,i.strokeStyle="#1a1423",i.stroke(),i.fillStyle="#1a1423",i.textAlign="center",i.textBaseline="middle",a.forEach((m,u)=>i.fillText(m,256,p+c/2+(a.length===1?2:u?26:-26)));const y=qs(t);return y.wrapS=y.wrapT=ti,En.set(e,y),y}function Ey(){const[n,e]=Ys(128,128);e.fillStyle="#bfe6ff",e.fillRect(0,0,128,128),e.fillStyle="rgba(255,255,255,0.7)",e.beginPath(),e.moveTo(10,118),e.lineTo(60,10),e.lineTo(80,10),e.lineTo(30,118),e.fill(),e.fillStyle="#2b2d42";for(let i=0;i<5;i++)e.fillRect(8+i*26,0,6,128);return e.fillRect(0,60,128,6),qs(n)}const xc=[{name:"Caramel",hex:"#d9a066"},{name:"Honey",hex:"#c68642"},{name:"Bronze",hex:"#a86b3c"},{name:"Cocoa",hex:"#8d5524"},{name:"Chestnut",hex:"#70401f"},{name:"Mahogany",hex:"#5a3218"},{name:"Ebony",hex:"#432513"},{name:"Midnight",hex:"#311b0f"}],sr=[{id:"lowcut",name:"Low Cut"},{id:"afro",name:"Afro"},{id:"braids",name:"Braids"},{id:"cornrows",name:"Cornrows"},{id:"gele",name:"Gele"},{id:"cap",name:"Face Cap"},{id:"bald",name:"Clean Shave"}],hu=[{id:"ankaraShirt",name:"Ankara Shirt"},{id:"ankaraDress",name:"Ankara Dress"},{id:"street",name:"Streetwear"},{id:"kaftan",name:"Kaftan"}],$a=["#1b1210","#3b2416","#6b3e1f","#b5651d","#e2b04a","#7b3fa0","#e0457b"],du=["#ff6b35","#e71d36","#ffbe0b","#2ec4b6","#3a86ff","#8338ec","#06d6a0","#ff8fab","#f15bb5","#fdfcdc","#1d3557"],uu=["#ffd23f","#2ec4b6","#ff6b35","#fdfcdc","#06d6a0","#e71d36","#3a86ff","#1a1423"],fu=["#2b2d42","#3d5a80","#6b705c","#f4f1de","#9a031e","#264653","#e9c46a"],yi=(n,e=Math.random)=>n[Math.floor(e()*n.length)];function pu(){return{name:"Tunde",skin:xc[3].hex,hair:"lowcut",hairColor:$a[0],outfit:"ankaraShirt",pattern:"circles",clothColor:"#ff6b35",accentColor:"#2ec4b6",pantsColor:"#2b2d42"}}function Nn(n=Math.random){const e=yi(hu,n).id;let t=yi(sr,n).id;return{name:"NPC",skin:yi(xc,n).hex,hair:t,hairColor:n()<.8?$a[Math.floor(n()*2)]:yi($a,n),outfit:e,pattern:yi(["circles","diamonds","waves","kente","leaves"],n),clothColor:yi(du,n),accentColor:yi(uu,n),pantsColor:yi(fu,n)}}const Yr=new Map,Ti=(n,e)=>(Yr.has(n)||Yr.set(n,e()),Yr.get(n)),Vt=(n,e=20,t=14)=>Ti(`s${n}_${e}_${t}`,()=>new Tn(n,e,t)),Pa=(n,e)=>Ti(`c${n}_${e}`,()=>new Do(n,e,4,12)),Es=(n,e,t,i=18)=>Ti(`y${n}_${e}_${t}_${i}`,()=>new Wt(n,e,t,i)),Yl=(n,e)=>Ti(`d${n}_${e}`,()=>new Tn(n,28,14,0,Math.PI*2,0,e)),As=(n,e,t=Math.PI*2)=>Ti(`t${n}_${e}_${t}`,()=>new ts(n,e,8,28,t));function La(n,e){const t=new Fe(n),i={};return t.getHSL(i,Yt),t.setHSL(i.h,i.s,Math.max(0,Math.min(1,i.l+e)),Yt),"#"+t.getHexString()}const Ga=[1.06,.97,1];function co(n,e=1.25,t=-.28,i=.495,s=.025){const o=te(Yl(i,e),n,{scale:Ga,t:s});return o.rotation.x=t,o}function Ty(n,e){const t=Y(n.hairColor),i=s=>Y("#ffffff",{map:Zi(n.pattern,n.accentColor,n.clothColor,"#fff3d6",s)});switch(n.hair){case"lowcut":e.add(co(t,1.2,-.3));break;case"afro":{e.add(co(t,1.3,-.25));const s=te(Ti("afro",()=>{const o=new Ji(.6,1);return o.computeVertexNormals(),o}),Y(n.hairColor),{scale:[1.08,.92,1],t:.04});s.position.set(0,.2,-.2),e.add(s);break}case"braids":{e.add(co(t,1.4,-.3));const s=Y("#ffd23f");for(let a=0;a<11;a++){const l=Tt.degToRad(115+a*13),r=new ht;r.position.set(Math.sin(l)*.43,.02,Math.cos(l)*.43),r.rotation.set(-Math.cos(l)*.25,0,Math.sin(l)*.25);const c=te(Pa(.04,.4),t,{t:.02});c.position.y=-.2,r.add(c);const d=te(Vt(.05,10,8),s,{t:.015});d.position.y=-.44,r.add(d),e.add(r)}const o=te(Vt(.16),t,{t:.03});o.position.set(0,.42,-.22),e.add(o);break}case"cornrows":{e.add(co(t,1.25,-.32));const s=new ht;s.rotation.x=-.38;const o=Y(La(n.hairColor,.08));for(let a=-2;a<=2;a++){const l=a*.11*Ga[0],r=Math.sqrt(.5*.5-l*l)*1,c=te(As(+r.toFixed(3),.028,Math.PI),o,{t:.012,cast:!1});c.rotation.y=Math.PI/2,c.position.x=l,s.add(c)}e.add(s);break}case"gele":{const s=i([2,1]),o=te(Yl(.53,1.45),s,{scale:[1.08,1.05,1.02],t:.03});o.rotation.x=-.2,o.position.y=.02,e.add(o);const a=te(As(.49,.075),s,{scale:[1.08,1,1.02],t:.025});a.rotation.x=Math.PI/2-.3,a.position.set(0,.16,-.02),e.add(a);const l=i([1,1]);for(const c of[-1,1]){const d=te(Vt(.3,16,12),l,{scale:[1.25,.75,.32],t:.03});d.position.set(.17*c,.5,-.12),d.rotation.set(-.35,.25*c,.55*c),e.add(d)}const r=te(Vt(.14,14,10),l,{t:.025});r.position.set(0,.42,-.02),e.add(r);break}case"cap":{e.add(co(t,1.35,-.3));const s=Y(n.accentColor==="#1a1423"?"#e71d36":n.accentColor),o=te(Yl(.515,1.25),s,{scale:Ga,t:.03});o.rotation.x=-.12,o.position.y=.03,e.add(o);const a=te(Es(.27,.27,.035,24),s,{scale:[1,1,.75],t:.025});a.position.set(0,.23,.43),a.rotation.x=.22,e.add(a);const l=te(Vt(.04,8,6),s,{t:.015});l.position.set(0,.52,-.06),e.add(l);break}}}function vn(n={}){const e={...pu(),...n},t=new ht;t.name="chibi";const i=new ht;i.position.y=.03,t.add(i);const s=Y(e.skin),o=Y(La(e.skin,-.12)),l=e.outfit==="ankaraShirt"||e.outfit==="ankaraDress"?Y("#ffffff",{map:Zi(e.pattern,e.clothColor,e.accentColor,"#fff3d6",[3,1])}):Y(e.clothColor),r=Y(e.pantsColor),c=Y(e.outfit==="street"?"#f7f7f2":e.outfit==="kaftan"?"#5a3a22":"#2b2024"),d=Y(e.accentColor),p=[],f=e.outfit==="ankaraDress"?s:r;for(const _ of[-1,1]){const S=new ht;S.position.set(.115*_,.3,0);const C=te(Pa(.098,.13),f);C.position.y=-.135,S.add(C);const v=te(Vt(.1,14,10),c,{scale:[1,.55,1.35]});v.position.set(0,-.265,.035),S.add(v),i.add(S),p.push(S)}const h=new ht;if(i.add(h),e.outfit==="kaftan"){const _=te(Es(.2,.31,.6,20),l);_.position.y=.37,h.add(_);const S=te(Es(.315,.315,.05,20),d,{t:.02});S.position.y=.09,h.add(S);const C=te(Ti("emb",()=>new qe(.08,.22,.02)),d,{t:.012});C.position.set(0,.56,.235),C.rotation.x=-.18,h.add(C)}else{const _=te(Es(.2,.27,.36,20),l);_.position.y=.48,h.add(_);const S=te(Vt(.27,20,12),e.outfit==="ankaraDress"?l:r,{scale:[1,.55,.9]});S.position.y=.31,h.add(S)}const y=te(Vt(.2,20,12),l,{scale:[1.12,.55,.95]});if(y.position.y=.66,h.add(y),e.outfit==="ankaraDress"){const _=te(Es(.24,.37,.28,22),Y("#ffffff",{map:Zi(e.pattern,e.clothColor,e.accentColor,"#fff3d6",[4,1])}));_.position.y=.24,h.add(_);const S=te(Es(.25,.25,.05,22),d,{t:.02});S.position.y=.39,h.add(S)}if(e.outfit==="street"){const _=te(As(.17,.065),l,{t:.025});_.rotation.x=Math.PI/2+.5,_.position.set(0,.72,-.1),h.add(_);const S=te(Ti("pocket",()=>new qe(.26,.1,.04)),Y(La(e.clothColor,-.1)),{t:.015});S.position.set(0,.42,.24),S.rotation.x=-.18,h.add(S);const C=te(As(.13,.014),Y("#ffd23f"),{t:.01,cast:!1});C.rotation.x=Math.PI/2-.55,C.position.set(0,.62,.07),h.add(C)}if(e.outfit==="ankaraShirt"){const _=te(As(.13,.03),d,{t:.015});_.rotation.x=Math.PI/2-.3,_.position.set(0,.69,.02),h.add(_)}const m=[],u=e.outfit==="street"||e.outfit==="kaftan";for(const _ of[-1,1]){const S=new ht;S.position.set(.24*_,.64,0),S.rotation.z=.32*_;const C=te(Pa(.068,.16),u?l:s);if(C.position.y=-.12,S.add(C),!u){const x=te(Vt(.09,14,10),l,{scale:[1,1.05,1]});x.position.y=-.05,S.add(x)}const v=te(Vt(.074,14,10),s);v.position.y=-.255,S.add(v),i.add(S),m.push(S)}const g=new ht;g.position.y=1.08,i.add(g);const M=te(Vt(.48,32,24),s,{scale:Ga,t:.04});g.add(M);for(const _ of[-1,1]){const S=te(Vt(.1,14,10),s,{scale:[.55,1,.8],t:.025});S.position.set(.515*_,-.07,-.02),g.add(S);const C=new Ae(Vt(.05,10,8),o);C.scale.set(.4,.9,.6),C.position.set(.55*_,-.07,-.01),g.add(C)}const w=Y("#1a1423"),E=new Gs({color:16777215}),L=[];for(const _ of[-1,1]){const S=new ht;S.position.set(.17*_,-.04,.44),S.rotation.y=.36*_;const C=new Ae(Vt(.068,16,12),w);C.scale.set(.85,1.2,.5),S.add(C);const v=new Ae(Vt(.024,8,6),E);v.position.set(.022,.035,.03),S.add(v);const x=new Ae(Vt(.012,6,4),E);x.position.set(-.02,-.03,.03),S.add(x),g.add(S),L.push(S);const R=new Ae(Pa(.012,.07),Y(La(e.hairColor,.02)));R.rotation.z=Math.PI/2+.12*_,R.position.set(.17*_,.1,.43),R.rotation.y=.36*_,g.add(R);const I=new Ae(Vt(.06,12,8),Y("#ff7a93",{opacity:.55}));I.scale.set(1,.55,.3),I.position.set(.28*_,-.16,.36),I.rotation.y=.6*_,g.add(I)}const b=new Ae(As(.045,.012,Math.PI),Y("#4a1f1a"));return b.position.set(0,-.2,.425),b.rotation.set(-.35,0,Math.PI),g.add(b),Ty(e,g),t.userData={cfg:e,rig:i,legs:p,arms:m,head:g,eyes:L,mouth:b,body:h,phase:Math.random()*6,speed:0,seed:Math.random()*100,blinkT:2+Math.random()*3,bubble:null,bubbleT:0},t}function cn(n,e,t,i){const s=n.userData;s.speed+=(t-s.speed)*Math.min(1,e*10);const o=s.speed;s.phase+=e*(5+6*Math.min(o,1.6));const a=Math.sin(s.phase)*.7*Math.min(o,1.3);s.sitting||(s.legs[0].rotation.x=a,s.legs[1].rotation.x=-a),s.arms[0].rotation.x=-a*.9,s.arms[1].rotation.x=a*.9;const l=Math.sin(i*2.2+s.seed)*.008*(1-Math.min(o,1));if(s.rig.position.y=.03+Math.abs(Math.sin(s.phase))*.06*Math.min(o,1.3)+l,s.rig.rotation.z=Math.sin(s.phase)*.04*Math.min(o,1),s.head.rotation.z=Math.sin(i*1.3+s.seed)*.05*(1-Math.min(o,1)),s.head.rotation.x=Math.sin(i*.9+s.seed)*.03,s.talk>0){s.talk-=e;const c=Math.min(1,s.talk*3);s.arms[1].rotation.x=(-.9+Math.sin(i*7+s.seed)*.35)*c,s.arms[0].rotation.x=Math.sin(i*5+1)*.2*c,s.head.rotation.x+=Math.sin(i*9)*.07*c,s.rig.position.y+=Math.abs(Math.sin(i*7))*.015*c}else s.listen&&(s.head.rotation.x+=Math.sin(i*3+s.seed)*.06,s.head.rotation.z+=.06);s.blinkT-=e;let r=1;s.blinkT<0&&(r=.12,s.blinkT<-.12&&(s.blinkT=2+Math.random()*4));for(const c of s.eyes)c.scale.y=r;s.bubble&&(s.bubbleT-=e,s.bubbleT<=0&&(s.bubble.visible=!1))}function Ay(n,e){const t=n.userData.mouth;e<30?(t.rotation.z=0,t.position.y=-.235):(t.rotation.z=Math.PI,t.position.y=-.2)}function si(n){const e=n.userData;e.legs.forEach(t=>t.rotation.x=-1.45),e.sitting=!0}function pe(n,e,t=3){const i=n.userData;i.bubble?i.bubble.material.map=jh(e):(i.bubble=new ty(new jd({map:jh(e),depthTest:!1,transparent:!0})),i.bubble.scale.set(2.7,1.05,1),i.bubble.position.y=2.3,i.bubble.renderOrder=10,n.add(i.bubble)),i.bubble.visible=!0,i.bubbleT=t}const qr=["Road close o! Turn back!","Oga, no pass here!","Road work dey go on","Where your particulars?","Shine your eye!"],Ue=(n,e,t,i,s,o)=>({id:n,o:e,r:t,f:i,x:s,ev:o}),mu=[Ue("bbn",["You dey watch Big Brother Naija?","BBNaija house don hot again o!","Who you dey vote for BBN?"],["Ehn! That house get wahala every night","I no dey miss am, even with NEPA","Abeg, na data I dey use stream am"],["Dem evict my fav yesterday 😭","That housemate na snake for real","Na ₦100m dem dey find"],["Na cruise dem dey do 😂","BBN don scatter people relationship","I go vote 50 times today","Biggie no dey play!"]),Ue("bbl",["You see that babe wey go do BBL?","BBL don too common for Lagos o","My cousin wan go Turkey for BBL"],["Ehn? With which money?","Na Instagram dey cause am","Na boyfriend sponsor am abeg"],["She no fit even sit for Danfo 😂","E dey do like say na yam","Dem say na ₦4m"],["Natural na the best","Lagos na wa o 😂","Make she enjoy her money jare","I no talk anything o 🤐"]),Ue("crypto",["Bitcoin don go up again!","You still dey hold that your crypto?","My guy say make I enter one new coin"],["Which coin be that? Na scam!","I don lose ₦200k for crypto before 😩","Na moon e dey go abi?"],["E say e go 100x for one week","Na Telegram group e see am","He don buy Benz with am"],["Ponzi go soon crash am","Make I hold my small Naira","Buy the dip! 📈","HODL my brother 😂"]),Ue("davido",["Davido or Wizkid, who better?","Wizkid new album na fire!","OBO don drop another banger"],["Davido! 001 no get competition","Wizkid na the original Starboy","Burna Boy dey look una two 😂"],["Davido get energy for stage","Wizkid no dey shout but e sweet","Na streams we go use judge am"],["Una no go fight today 😂","Abeg play the song make we dance","FC dey fight for Twitter again","Both of dem na odogwu"]),Ue("asuu",["ASUU don strike again!","My sister still dey house, school close","You hear say ASUU wan call off strike?"],["This strike don pass eight months","Four years course don turn seven 😩","Government no send anybody"],["Students dey learn tailoring now","Lecturers sef no get salary","Dem go pay rent with promise?"],["Na so country dey go","Make dem open school abeg 🙏","Private university don jack up fees","Education na luxury now"]),Ue("traffic",["Third Mainland don lock since morning","Traffic for Ikorodu road no be here","I spend three hours for Ojota"],["Na Lagos traffic, e dey age person","Okada for don help you","BRT sef no move"],["One trailer fall for bridge","LASTMA dey everywhere today","Na police checkpoint cause am"],["Make I start dey trek 😂","Lagos na mad house","Traffic go kill person","Na ferry I go dey use"]),Ue("fuelq",["Fuel queue for Mega Fuel long o","I sleep for filling station yesterday","Black market dey sell fuel ₦1,500"],["Filling station dey hoard fuel","Na jerrycan people dey enjoy","Abeg which one get fuel?"],["Attendant say make I tip am","Dem dey sell only 10 litres","Keke people don increase fare"],["This country 😩","Na bicycle I go buy","Subsidy don go, wahala don come","Patience na virtue o"]),Ue("landlord",["My landlord don increase rent","Baba Ade wan see rent today","Landlord lock gate by 10pm!"],["Wetin e talk this time?","Lagos landlords no get heart","Na two years rent dem want"],['He say make I pay for "agreement"',"He even lock toilet","He dey call me 6am"],["Na their house we dey rent o 😂","Pay am make peace reign","Na why I wan build my own","Una go tire 😩"]),Ue("dating",["My babe say I no dey take am out","Na who dey date for this economy?","Una see my new boo for status?"],["Ehn, take am go Mama Put","Love no dey pay transport","She dey ask for weekly allowance?"],["She want shawarma every day","E don block me for WhatsApp","Na Danfo we go use for date"],["Love don cost 😂","Single life sweet pass","Shawarma don become engagement ring","Na God go give you good one"]),Ue("church",["Pastor preach fire yesterday!","You go come vigil this Friday?","Our church dey build new auditorium"],["Holy Ghost Fire na the best","Offering na the main gist 😂","I go come with my family"],["Pastor say na breakthrough season","Choir sing like angels","Dem do three offerings sha"],["Amen! 🙏","Make God answer us","Na God dey keep Lagos","I need that breakthrough"]),Ue("football",["Super Eagles go win AFCON!","Arsenal fans don start again","You watch the match yesterday?"],["Our defence na open gate","Osimhen na the man!","That referee na thief"],["VAR spoil everything","Na penalty dem give am","I bet ₦1,000 and lose"],["Next season na our season 😂","Ball na round","Make we watch for viewing center","Bet9ja go finish us"]),Ue("nollywood",["You watch that new Nollywood film?","Funke Akindele film don break record!","Nollywood don dey Netflix now"],["Nollywood don improve well well","That one long like Lagos traffic","The acting sweet me"],["Dem shoot am for Lekki","The juju scene na the best","Na three parts dem make am"],["Kai! Nollywood na wa 😂","I go watch am this weekend","Old Nollywood better","Sound effect dey do me laugh"]),Ue("japa",["Chinedu don japa go Canada","You don do your IELTS?","Everybody dey japa, na only me remain"],["Haa! E no tell anybody?","Na the way out o","UK don close visa sef"],["He post am for status ✈️","Na care work e dey do","He say snow don do am"],["Make God remember me too 😭","Japa no easy o","Nigeria go better","I go japa go my village 😂"]),Ue("inflation",["Bread price don change again!","Rice don reach ₦80k per bag","Dollar don reach how much?"],["Abeg no spoil my morning","Na slice by slice we go buy bread","Salary no dey increase sha"],["Tomato sef don cost","Garri don become luxury","Market woman dey cry too"],["We go survive 💪","This economy na wahala","Na God dey carry us","Make I start farm"]),Ue("areaboys",["Area boys dey collect money for junction","Agbero slap Keke man yesterday",'Dem dey ask for "settlement" every day'],["Dem no dey fear anybody","Na union dey back dem","Police self dey look"],["Dem collect ₦1,000 from me","Na Lucky be their oga","Dem dey smoke for junction"],["Make Chakam expose dem!","Avoid that side jare","Lagos na survival","Dem go meet their match"]),Ue("nepa",["NEPA don take light again","Light no reach our side since Tuesday","Band A, Band B, all na lie"],["My freezer don turn cupboard","Na gen dey save us","Prepaid meter dey chop money"],['DisCo say na "load shedding"',"Fuel for gen don cost","Mosquito no let me sleep"],["UP NEPA when? 😂","Solar na the future","Heat go kill person","Na candle we dey use"]),Ue("exams",["WAEC result don come out","JAMB portal crash again","My son dey prepare for exam"],["How e score?","Cyber cafe man dey collect ₦3,000","Expo dey fly for WhatsApp"],["He get 280 for JAMB!","Dem seize the result","Extra lesson don cost"],["Odogwu! 🎓","Education na key","Make he read hard","Exam malpractice no good"]),Ue("food",["Iya Basira jollof na the best","Suya for night na therapy","I wan chop amala today"],["Ghana jollof sweet pass","Abeg buy for me too","Amala with ewedu na life"],["Party jollof get smoky taste","Meat don small sha","Na ₦1,500 for one plate now"],["My belle dey sing 😋","Food na medicine","Make we go Mama Put","Hunger dey vex me"]),Ue("weather",["This sun no be here o","See as sky black, rain wan fall","Harmattan don start"],["Heat dey kill person","Make I remove my cloth from line","Lagos weather dey do anyhow"],["Gutter go overflow again","Na umbrella I forget","Sweat don soak my shirt"],["Na God dey control weather","Buy pure water for me 💧","Make NEPA bring light for fan","Rain na blessing"]),Ue("politics",["Election don dey near","Dem share rice for our area yesterday","Senator promise road again"],["Na every four years dem remember us","Rice no go pay my rent","I no go collect their money"],["Road wey dem promise since 2015","Dem dey share ₦5k for vote","Na godfather dey run am"],["Make we vote wisely","Politics na dirty game","Na same people every time","PVC na our power"]),Ue("rent",["Rent go due this Saturday","Two years rent upfront? Haba!","Agent fee no dey make sense"],["Agent dey collect 10% for showing door","Na face-me-I-face-you I fit afford","Lekki rent don pass ₦5m"],["I go borrow from LapoPay","Landlord say no pets, no pikin","Toilet na shared"],["LapoPay go chop you 😂","Lagos rent na scam","Make we move go Ikorodu","God go provide"]),Ue("lapopay",["LapoPay don dey call my mama!","You borrow from loan app?","Loan app dey send my picture to contacts"],["Na the interest dey kill person","Dem dey threaten like police","I don delete their app"],["Na 5% every day!","Agents come my shop","Dem say I be thief for status"],["Avoid loan app abeg","Pay make dem rest","Na wa for this hustle","Na shame dem dey use"]),Ue("owambe",["You dey go the owambe this Saturday?","Aso-ebi na ₦25k!","DJ for that party mad!"],["I go wear my old Ankara","Na for the jollof I dey go","Who dey celebrate?"],["Mama Tobi 60th","Dem dey spray dollar","Party go till morning"],["Takeaway go plenty 😂","Owambe na culture","I go dance till my leg pain","Make dem no forget small chops"]),Ue("phone",["My phone screen don crack","Recharge card don cost","Abeg you get charger?"],["Go GistMe Phones","Type-C or iPhone?","Data sef don cost"],["E dey charge ₦200","Na iPhone 15 I want","MTN don chop my data"],["Phone na life now","Na Tecno I dey use 😂","Make I off data","Battery na 1%"]),Ue("danfo",["Conductor no give me my change!","Danfo driver dey drive like mad man","Fare don increase to ₦300"],["How much he chop?","Na so dem be","Ask for your change first"],["He jump down for Ojuelegba","Danfo nearly enter gutter",'Dem say "no change"'],["Danfo na school of life 😂","Lagos transport na film","BRT better small","Enter with your change!"]),Ue("keke",["Keke man charge me ₦500 for short distance","Keke don ban for some roads","My cousin dey drive Keke now"],["Fuel price dey cause am","Agbero dey disturb dem","Keke money sweet sha"],["He make ₦15k yesterday","LASTMA seize one keke","Union dey collect ticket"],["Keke na the real Uber 😂","Hustle no dey finish","Make I buy one too","Shine your eye for road"]),Ue("market",["Market today no move at all","Customers dey price too much","Tomato scarce for market"],["Na economy","Small small dey fill basket","Na Mile 12 dem dey bring am"],["Una no dey give jara again?","I sell only small","Trailer don spoil for road"],["We go reach","God bless our hustle","Market na battlefield","Customer na king"]),Ue("gossip",["Shey you hear about Bisi and Emeka?","Na who that babe wey dey come Baba Ade house?","Una see wetin happen for compound?"],["No o, wetin happen?","Ehn?! Talk am!","I no dey for gossip o... continue 👀"],["Dem see dem for Yaba together","Na new wife!","Na police carry am"],["Na wa o 😂","Mouth wey no get lock","Tell me everything!","Shhh! E fit hear you"]),Ue("generator",["Neighbour gen no let me sleep","I-pass-my-neighbour don spoil","Fuel for gen don finish"],["Na noise pollution","Buy solar abeg","Mechanic go fix am"],["E dey shake my window","Smoke enter my room","Na ₦5k for repair"],["NEPA na our problem","Generator na Lagos anthem 😂","Quiet gen dey o","Make we pray for light"]),Ue("hustle",["How work today?","I dey find side hustle","I don start POS business"],["Small small, we dey push","POS money dey","Hustle na hustle"],["I do conductor work yesterday","Pure water sell well today","Customer no come at all"],["No food for lazy man!","Grind don dey pay","Slow and steady","Make God bless the work"]),Ue("scam",["One yahoo boy try scam my papa","Dem call me say I win ₦5m","Fake alert don plenty"],["Never send your OTP!","Na that BVN scam","Fake alert na wahala"],["Dem say make I pay ₦20k first","Na old people dem dey target","He use bank name"],["Shine your eye!","Chakam dem!","Yahoo no good","Report to police abeg"]),Ue("police",["Police stop me for checkpoint",'Dem ask for my "particulars"',"Officer say make I roger am"],["Dem collect anything?","Know your rights!","Na ₦200 or ₦1,000?"],["He search my phone","He collect ₦500","I tell am I be lawyer 😂"],["Police na your friend? 😂","Chakam them!","Na Nigeria be this","Make we record dem"]),Ue("wedding",["My sister wedding na December","Bride price don increase","You see that viral wedding?"],["Who dey sponsor am?","Na Owambe again!","Bride price na ₦2m?"],["Na traditional and white","Groom na Ibo, bride na Yoruba","Dem do am for Lekki"],["Love wins! 💍","Make God bless dem","Na aso-ebi again 😂","Wedding don become business"]),Ue("health",["Malaria don hold me since Monday","Pharmacy dey sell fake drug","Hospital card don cost"],["Go Alhaji Pharmacy","Drink agbo","Na mosquito net you need"],["Doctor dey strike","Paracetamol no work","Na typhoid sef"],["Health na wealth","Make you feel better","Agbo na the real drug 😂","Rest well abeg"]),Ue("tiktok",["You see that TikTok dance?","My video don go viral!","Everybody don turn content creator"],["Show me make I see","How many views?","Clout no dey pay rent"],["100k views!","Brand don DM me","Na skit I dey do"],["Odogwu! 📸","Use Clout app too","Na data e go cost","Make you no lose your shame 😂"]),Ue("school",["School fees don increase again","Teacher beat my pikin","PTA levy don come"],["Private school na business","Public school no get chair","Na who go pay?"],["Na ₦300k per term","Dem dey ask for textbooks","Na lesson teacher help am"],["Education na the key","Na God dey help parents","Make dem learn well","Na wa for this country"]),Ue("flood",["Gutter don overflow again","Water enter my room yesterday","Lekki flood na ocean"],["Rain don fall too much","Dem no clear drainage","Na canoe we go use"],["Car float for road","My shoe don spoil","Environmental sanitation no dey work"],["Lagos na Venice 😂","Clear your gutter!","Make we pray","Rain go soon stop"]),Ue("family",["My mama dey call me to come home","Village people dey find me 😂","My uncle want me to marry"],["Go visit them","Na pressure","Family na everything"],["They want grandchildren","Christmas go hot for village","Na money dem want"],["Family first","Village people no dey rest 😂","Send them small money","Respect your elders"]),Ue("lottery",["I play Baba Ijebu yesterday","Bet9ja almost cut my ticket","I don win ₦5k for bet"],["Na gambling o","You don win before?","Ticket cut for last match 😭"],["Na one game remain","I go use am buy rice","Na sure odds dem give me"],["Gambling no good","Na luck","Next time e go enter","Na lazy man investment 😂"]),Ue("mechanic",["My mechanic don spoil my car more","Okrika parts dey market","Car don break down for road"],["Mechanic village na wahala","Use original parts","Push am go side"],["He say na engine","Na ₦100k repair","He dey use my car run runs"],["Mechanic na scientist 😂","Buy Toyota abeg","Na Lagos road spoil am","Make you sell am"]),Ue("ramadan",["Ramadan don start","Sallah ram don cost!","Una go do Eid party?"],["Ramadan Kareem!","Ram na ₦300k now","Make we chop together"],["Neighbour bring jollof for me","Na unity we dey show","Fasting dey test patience"],["Barka da Sallah!","Love your neighbour","Na Lagos — we all be one","Send me meat o 😂"]),Ue("bargain",["Trader say ₦5k for small shoe","You sabi price for market?","Na half price I dey talk"],["Price am ₦2k!","Walk away, dem go call you back","Na my strategy be that"],["She call me back for ₦2,500","Na Balogun I buy am","I still dey suffer for am"],["Na skills be that 😂","Lagos market na exam","Never pay first price","Jara na must"]),Ue("rainnow",["See this rain o!","Rain don soak my cloth","Rain don stop Danfo"],["Make we hide for shade","Umbrella na life","Gutter go overflow"],["Road go flood now now","My shoe don wet","Nobody dey buy for market"],["Lagos rain no dey play 🌧️","Make e stop abeg","Na rain dey wash city","Cold go catch us"],"rain"),Ue("blackout",["NEPA don take light just now!","Light don go again!","Who get light for this street?"],["Nobody! Dem don carry am","Na gen I go on","My soup for freezer go spoil"],["DisCo dey play with us","Na transformer blow","Since morning e dey do like this"],["UP NEPA when? 😩","Heat go kill person","Na candle tonight","Light na luxury"],"blackout"),Ue("fuelhike",["Fuel price don jump again!","You see the new fuel price?","Fare don double because of fuel"],["Haba! Again?!",'Conductor go shout "no change"',"Gen fuel don cost"],["Na ₦1,500 per litre now","Keke don increase fare","Filling station dey hoard"],["This country 😩","Na trek I go dey do","Subsidy wahala","God help us"],"fuel")],Vi=n=>n[Math.floor(Math.random()*n.length)];function Cy(n={}){const e=[];for(const t of mu){let i=t.ev?0:1;t.ev==="rain"&&n.rain&&(i=8),t.ev==="blackout"&&n.blackout&&(i=6),t.ev==="fuel"&&n.fuelHike&&(i=6),t.id==="nepa"&&n.blackout&&(i=3),(t.id==="flood"||t.id==="weather")&&n.rain&&(i=3),t.id==="fuelq"&&n.fuelHike&&(i=3);for(let s=0;s<i;s++)e.push(t)}return Vi(e)}function ql(n=2,e={}){const t=Cy(e),i=[["A",Vi(t.o)],["B",Vi(t.r)],["A",Vi(t.f)],["B",Vi(t.x)]];return n>=3&&i.push(["C",Vi(t.x.filter(s=>s!==i[3][1]))]),Math.random()<.5&&i.push(["A",Vi(t.x.filter(s=>s!==i[3][1]))]),{topic:t.id,lines:i,t}}const bt=new qe(1,1,1),Ry=new Wt(.5,.5,1,16),Kr=new Wt(.5,.5,1,8),ga=new Tn(.5,14,10),ho=new ko(1,1,8),va={minX:-88.6,maxX:88.4,minZ:-32.4,maxZ:32.4},oi=[{id:"oju",name:"Ojuelegba",x:-58},{id:"yaba",name:"Yaba Market",x:-6},{id:"cms",name:"CMS",x:52}],Wn={home:new P(-30,0,-13.4),generator:new P(-20.6,0,-13.2),buka:new P(18,0,-12.6),stall:new P(-26,0,10.4),spawn:new P(-30,0,-11.5)};let jr=7;const Mn=()=>(jr=jr*16807%2147483647,(jr-1)/2147483646),Ge=(n,e)=>n+Mn()*(e-n),Fi=n=>n[Math.floor(Mn()*n.length)];class Py{constructor(e){this.scene=e,this.root=new ht,e.add(this.root),this.colliders=[],this.windowsLit=[],this.windowsDark=[],this.lampLights=[],this.vehicles=[],this.npcs=[],this.walkers=[],this.produce={tomato:[],pepper:[],onion:[],plantain:[]},this.mats={window:Y("#a8dcff",{unique:!0}),windowDark:Y("#7aa3c4",{unique:!0}),bulb:Y("#fff3b0",{unique:!0}),homeWin:Y("#a8dcff",{unique:!0}),homeBulb:Y("#fff3b0",{unique:!0}),headlight:Y("#fffbe0",{unique:!0})},this.build()}add(e,t=this.root){return t.add(e),e}box(e,t,i,s,o,a,l,r={}){var p;const c=typeof s=="string"?Y(s,r.matOpts):s,d=te(bt,c,{scale:[e,t,i],t:(p=r.t)!=null?p:.06,outline:r.outline,cast:r.cast,receive:r.receive});return d.position.set(o,a,l),r.ry&&(d.rotation.y=r.ry),r.rx&&(d.rotation.x=r.rx),r.rz&&(d.rotation.z=r.rz),this.add(d,r.parent)}cyl(e,t,i,s,o,a,l={}){var d;const r=typeof i=="string"?Y(i):i,c=te(l.low?Kr:Ry,r,{scale:[e*2,t,e*2],t:(d=l.t)!=null?d:.04,outline:l.outline,cast:l.cast});return c.position.set(s,o,a),this.add(c,l.parent)}collide(e,t,i,s){this.colliders.push({minX:e,maxX:t,minZ:i,maxZ:s})}sign(e,t,i,s,o,a,l=0,r={}){const c=Ra(e,{w:512,h:Math.round(512*i/t),...r}),d=new ht;d.position.set(s,o,a),d.rotation.y=l;const p=te(bt,Y(r.border||"#1a1423"),{scale:[t+.12,i+.12,.08],t:.03});d.add(p);const f=new Ae(new rn(t,i),Y("#ffffff",{map:c}));return f.position.z=.05,d.add(f),this.add(d)}build(){this.ground(),this.roads(),this.home(),this.buka(),this.market(),oi.forEach(e=>this.busStop(e)),this.fillers(),this.edges(),this.stage2(),this.lamps(),this.powerLines(),this.palms(),this.billboards(),this.finishInstances(),this.spawnVehicles(),this.spawnNPCs()}ground(){const e=new Ae(new rn(400,260),Y("#f0d3a0"));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.add(e);for(let t=0;t<24;t++){const i=new Ae(new Ds(Ge(1.5,4),10),Y(Fi(["#b9d98a","#e6bf86","#a7cf7b"])));i.rotation.x=-Math.PI/2,i.position.set(Ge(-80,80),.01,Fi([-1,1])*Ge(9,30)),i.receiveShadow=!0,this.add(i)}}roads(){const e=new Ae(new rn(164,10),Y("#ffffff",{map:Kh(20)})),t=Y("#5b6070");for(const l of[-1,1]){const r=new Ae(new Ds(7.2,32),t);r.rotation.x=-Math.PI/2,r.position.set(l*82,.018,0),r.receiveShadow=!0,this.add(r),this.cyl(1.4,.3,"#9be7a4",l*82,.15,0,{t:.04}),this.cyl(.08,2.2,"#4a4e5c",l*82,1.1,0,{t:.02}),this.sign("U-TURN",1.4,.5,l*82,2.3,0,l>0?-Math.PI/2:Math.PI/2,{bg:"#3a86ff",fg:"#fff"}),this.collide(l*82-1.4,l*82+1.4,-1.4,1.4);const c=new Ae(new Ds(4.6,28),t);c.rotation.x=-Math.PI/2,c.position.set(0,.022,l*29),c.receiveShadow=!0,this.add(c)}e.rotation.x=-Math.PI/2,e.position.y=.02,e.receiveShadow=!0,this.add(e);for(const l of[-1,1]){const r=new Ae(new rn(24,8),Y("#ffffff",{map:Kh(3)}));r.rotation.x=-Math.PI/2,r.rotation.z=Math.PI/2,r.position.set(0,.025,l*17),r.receiveShadow=!0,this.add(r)}for(let l=0;l<6;l++)this.box(.7,.02,8,"#f6f2e8",8+l*1.2,.03,0,{outline:!1,cast:!1});const i=Y("#ffffff",{map:an(["#ffd23f","#1a1423"],2,!0,[40,1])}),s=Y("#ddd5c4"),o=[i,i,s,s,i,i],a=(l,r,c,d)=>{const p=new Ae(bt,o);p.scale.set(c,.18,d),p.position.set(l,.09,r),p.receiveShadow=!0,this.add(p)};for(const l of[-1,1])a(-39.5,l*6.25,69,2.5),a(39.5,l*6.25,69,2.5),a(l*5.25,-18,2.5,21),a(l*5.25,18,2.5,21);for(const l of[-1,1]){const r=new Ae(new rn(148,.5),Y("#3b3f4a"));r.rotation.x=-Math.PI/2,r.position.set(0,.015,l*7.75),this.add(r)}}window(e,t,i,s,o=1.1,a=1.2,l=!0){(l?this.windowsLit:this.windowsDark).push({x:e,y:t,z:i,ry:s,w:o,h:a})}home(){const a=new ht;this.add(a),this.box(17,3.4,7,"#f6dcb4",-30,3.4/2,-19),this.box(17+.05,1,7+.05,"#7fc8c0",-30,.5,-19,{t:.02,cast:!1});const l=Y("#ffffff",{map:an(["#d9773f","#b85c2c"],16,!0,[6,1])});for(const m of[-1,1]){const u=this.box(18,.16,4.4,l,-30,3.95,-19+m*1.95,{t:.04});u.rotation.x=m*.32}this.box(17+1.1,.25,.3,"#8a3b1d",-30,3.4+1.05,-19,{t:.03});const r=-19+7/2;this.box(2,2.6,.12,"#2d2a3a",-30,1.3,r+.02,{outline:!1});const c=Y("#ffffff",{map:Zi("kente","#e71d36","#ffd23f","#fff3d6",[1,2])});this.box(1.8,2.2,.05,c,-30,1.45,r+.1,{t:.02}),this.box(2.6,.18,1.6,"#c9b79c",-30,.09,r+.8,{t:.03}),this.box(2.8,.15,1.8,"#8a3b1d",-30,2.95,r+.75,{t:.03}).rotation.x=.12;const d=Y("#ffffff",{map:Ey(),unique:!0});this.homeBars=d;for(const m of[-36.5,-33.5,-26.5,-23.5]){this.box(1.4,1.4,.1,"#1a1423",m,1.9,r+.03,{outline:!1});const u=new Ae(new rn(1.2,1.2),d);u.position.set(m,1.9,r+.1),this.add(u)}this.homeWindowMeshes=[],this.sign("FACE-ME-I-FACE-YOU",4.2,.7,-30,3.05,r+.95,0,{bg:"#fdfcdc",sub:"No. 7 • Landlord: Baba Ade"}),this.sign("NO URINATING HERE",2.4,.5,-37,.9,r+.12,0,{bg:"#fff",fg:"#e71d36",border:"#e71d36"});const p=new Ae(new Tn(.15,10,8),this.mats.homeBulb);p.position.set(-30+1.2,2.7,r+.3),this.add(p),this.homeLight=new Wa(16765562,0,12,1.6),this.homeLight.position.set(-30,2.6,r+2.2),this.add(this.homeLight),this.collide(-30-17/2,-30+17/2,-19-7/2,-19+7/2),this.cyl(.06,2.2,"#6b4f3a",-38,1.1,-12.2),this.cyl(.06,2.2,"#6b4f3a",-33,1.1,-12.2);const f=new Gl(new Pt().setFromPoints([new P(-38,2.1,-12.2),new P(-35.5,1.95,-12.2),new P(-33,2.1,-12.2)]),new xo({color:1709091}));this.add(f),["#e71d36","#2ec4b6","#ffbe0b","#8338ec"].forEach((m,u)=>{const g=Y("#ffffff",{map:Zi(["circles","waves","diamonds","leaves"][u],m,"#fff3d6","#1a1423",[1,1])});this.box(.8,.9,.04,g,-37.3+u*1.2,1.5,-12.2,{t:.02})});const h=-21.2,y=-14.6;this.box(1.2,.75,.8,"#e63946",h,.45,y,{t:.04}),this.box(.7,.4,.82,"#2b2d42",h-.15,.45,y,{t:.02}),this.box(1.3,.08,.9,"#1a1423",h,.06,y,{t:.02}),this.cyl(.05,.4,"#555",h+.45,.95,y-.2,{t:.02}),this.box(.45,.55,.3,"#ffd23f",h+1,.28,y+.1,{t:.03}),this.sign("I-PASS-MY-NEIGHBOUR",1.6,.32,h,1.15,y+.42,0,{bg:"#ffd23f"}),this.genSmoke=[];for(let m=0;m<4;m++){const u=new Ae(new Tn(.15,8,6),Y("#d6d6dc",{opacity:.8}));u.position.set(h+.45,1.2+m*.3,y-.2),u.visible=!1,this.add(u),this.genSmoke.push(u)}this.collide(h-.7,h+1.3,y-.5,y+.5),this.box(.6,.08,.6,"#e71d36",-27.6,.45,-14.2,{t:.02}),this.box(.6,.6,.08,"#e71d36",-27.6,.78,-14.5,{t:.02})}buka(){for(const[o,a]of[[-4,-2.5],[4,-2.5],[-4,2.5],[4,2.5]])this.cyl(.12,3.2,"#7a5536",18+o,1.6,-17+a,{low:!0});const i=Y("#ffffff",{map:an(["#9fb3c8","#7f93a8"],16,!0,[5,1])});this.box(9.4,.15,6.4,i,18,3.3,-17,{rx:-.08}),this.box(9,3,.2,"#ffcf99",18,1.5,-17-2.6,{}),this.box(5,1,1.2,"#8b5a3c",18,.5,-17-.6,{}),this.box(5.1,.1,1.3,"#e9c46a",18,1.04,-17-.6,{t:.02});const s=[["#ff7b29",-1.8],["#6a994e",-.6],["#c1121f",.6],["#f4d58d",1.8]];for(const[o,a]of s)this.cyl(.38,.45,"#c9ccd6",18+a,1.32,-17-.6,{t:.03}),this.cyl(.33,.04,o,18+a,1.56,-17-.6,{outline:!1,cast:!1});this.box(3.2,.12,.6,"#a0522d",16,.5,-17+1.6,{t:.03}),this.box(3.2,.12,.6,"#a0522d",18+2.2,.5,-17+1.6,{t:.03});for(const o of[-3.5,-.5,.7,3.7])this.box(.15,.5,.5,"#6b3e1f",18+o,.25,-17+1.6,{t:.02});this.sign("MAMA PUT",4.4,1,18,3.95,-14,0,{bg:"#e71d36",fg:"#fff",sub:"Iya Basira Buka • Food dey!"}),this.box(1.2,.7,.05,"#fdfcdc",18+3.2,2.1,-17-2.45,{t:.02}),this.collide(18-4.7,18+4.7,-17-2.8,-17-2.4),this.collide(18-2.6,18+2.6,-17-1.25,-17+.05),this.bukaLight=[18,3,-17+.5]}market(){const i=[an(["#e71d36","#fdfcdc"],8,!0),an(["#3a86ff","#ffd23f"],8,!0),an(["#06d6a0","#fdfcdc"],8,!0),an(["#ff6b35","#2b2d42"],8,!0)];[[0,0],[5,0],[10,0],[0,6],[5,6],[10,6],[-5,6]].forEach(([o,a],l)=>{const r=-26+o,c=12+a;this.box(2.6,.12,1.3,"#b07a4a",r,.9,c,{t:.03});for(const[f,h]of[[-1.1,-.5],[1.1,-.5],[-1.1,.5],[1.1,.5]])this.box(.1,.9,.1,"#6b4f3a",r+f,.45,c+h,{outline:!1});this.cyl(.05,2.6,"#555",r,1.3,c+.3,{t:.02});const d=te(ho,Y("#ffffff",{map:i[l%4]}),{scale:[2,.7,2],t:.04});d.position.set(r,2.75,c+.3),this.add(d);const p=["tomato","pepper","onion","plantain"];for(let f=0;f<3;f++){const h=p[(l+f)%4],y=r-.8+f*.8,m=c-.1,u=h==="plantain"?[[0,0,0],[.12,0,.1],[-.1,0,.12],[0,.1,.05]]:[[0,0,0],[.2,0,0],[-.2,0,0],[.1,0,.18],[-.1,0,.18],[0,.16,.08],[.1,.16,-.06],[-.1,.16,-.06],[0,.3,.02]];for(const g of u)this.produce[h].push([y+g[0],1.06+g[1],m+g[2]])}this.collide(r-1.35,r+1.35,c-.7,c+.7)}),this.sign("YOUR STALL",2.2,.5,-26,1.45,12-.68,Math.PI,{bg:"#06d6a0"}),this.sign("YOUR STALL",2.2,.5,-26,1.45,12-.68,0,{bg:"#06d6a0"}),this.sign("YABA MARKET",5,1,-21,4,12-1.6,0,{bg:"#ffd23f",sub:"Buy am sharp-sharp • No credit today"}),this.cyl(.1,4,"#555",-26+2.6,2,12-1.6,{t:.02}),this.cyl(.1,4,"#555",-26+7.4,2,12-1.6,{t:.02}),this.marketCenter=[-21,3,15]}busStop(e){const t=e.x,i=8.4;this.cyl(.08,2.6,"#2b2d42",t-1.8,1.3,i,{t:.02}),this.cyl(.08,2.6,"#2b2d42",t+1.8,1.3,i,{t:.02}),this.box(4.4,.15,1.8,"#3a86ff",t,2.65,i,{t:.04}),this.box(3.4,.1,.5,"#fdfcdc",t,.55,i+.2,{t:.03}),this.box(3.4,.6,.06,"#9fb3c8",t,1.4,i+.85,{t:.02}),this.sign(e.name.toUpperCase(),3.2,.6,t,3.15,i,0,{bg:"#ffd23f",sub:"BUS STOP • Danfo dey come"}),this.collide(t-2,t+2,i+.3,i+1)}building({x:e,z:t,w:i,d:s,h:o,color:a,face:l,sign:r,signBg:c="#fdfcdc",sub:d=null,awning:p=null,tank:f=!0}){const h=l>0?0:Math.PI;this.box(i,o,s,a,e,o/2,t,{t:.07}),this.box(i+.3,.45,s+.3,Jh(a,-.15),e,o+.2,t,{t:.05});const y=t+l*(s/2+.05),m=Math.max(1,Math.floor(o/3)),u=Math.max(1,Math.floor(i/2.6));for(let g=0;g<m;g++){const M=1.6+g*3;for(let w=0;w<u;w++){const E=e-i/2+i/u*(w+.5);g===0&&r&&Math.abs(E-e)<1.4||this.window(E,M,y,h,1.1,1.3,Mn()<.72)}g>0&&Mn()<.45&&this.box(i*.5,.12,.8,Jh(a,-.1),e+Ge(-i/4,i/4),M-.9,y+l*.4,{t:.03})}if(r&&(this.box(1.4,2.3,.1,"#3d2c2e",e,1.15,y,{outline:!1}),this.sign(r,Math.min(i-1,6),1,e,2.9,y+l*.1,h,{bg:c,sub:d})),p){const g=Y("#ffffff",{map:an(p,10,!0,[2,1])}),M=this.box(Math.min(i-.5,6.5),.1,1.4,g,e,2.25,y+l*.7,{t:.03});M.rotation.x=l*.3}f&&(this.cyl(.65,1.3,"#2b2d42",e+i/2-1.2,o+1,t-l*(s/2-1.2),{t:.04}),Mn()<.6&&this.box(.8,.5,.5,"#e5e5e5",e-i/2+1.2,o+.65,t,{t:.03})),this.collide(e-i/2,e+i/2,t-s/2,t+s/2)}fillers(){[{x:-62,z:-18,w:11,d:8,h:6.5,color:"#ff9eb5",face:1,sign:"GOD'S TIME IS BEST",sub:"Barbing Salon • Low cut ₦1,500",awning:["#e71d36","#fdfcdc"]},{x:-49,z:-18,w:9,d:8,h:9.5,color:"#7fd1c7",face:1},{x:-11,z:-18,w:10,d:8,h:6.5,color:"#ffe066",face:1,sign:"MAMA NKECHI",sub:"Provisions & Pure Water",awning:["#3a86ff","#fdfcdc"]},{x:34,z:-18,w:12,d:9,h:12.5,color:"#c3b1f0",face:1},{x:50,z:-18,w:10,d:8,h:6.5,color:"#9be7a4",face:1,sign:"GISTME PHONES",sub:"Repairs • Recharge card • Data",signBg:"#8338ec",awning:["#8338ec","#ffd23f"]},{x:65,z:-18,w:11,d:8,h:9.5,color:"#ffb38a",face:1},{x:-64,z:18,w:11,d:8,h:9.5,color:"#a0d8ff",face:-1},{x:-46,z:17,w:9,d:7,h:6.5,color:"#ffd6a5",face:-1,sign:"NO FOOD FOR LAZY MAN",sub:"Enterprises Ltd",awning:["#06d6a0","#fdfcdc"]},{x:13,z:18,w:11,d:8,h:6.5,color:"#fdfcdc",face:-1,sign:"HOLY GHOST FIRE",sub:"Assembly • Vigil every Friday",signBg:"#3a86ff"},{x:29,z:18,w:9,d:7,h:9.5,color:"#ff8fab",face:-1,sign:"ALHAJI PHARMACY",sub:"Paracetamol dey",signBg:"#06d6a0"},{x:46,z:18,w:12,d:9,h:6.5,color:"#b8f2e6",face:-1}].forEach(s=>this.building(s));for(let s=0;s<18;s++)for(const o of[-1,1]){const a=Ge(8,14),l=Ge(8,22),r=-84+s*9.6+Ge(-2,2),c=o*Ge(38,46),d=Fi(["#ffc8dd","#bde0fe","#cdb4db","#ffd6a5","#caffbf","#fdffb6","#a0c4ff"]);this.box(a,l,Ge(7,10),d,r,l/2,c,{t:.08,cast:!1});const p=Math.floor(l/3);for(let f=0;f<p;f++)for(let h=0;h<Math.floor(a/3);h++)this.window(r-a/2+1.5+h*3,1.6+f*3,c-o*4.5,o>0?Math.PI:0,1.1,1.3,Mn()<.6)}}lamps(){this.lampPositions=[];for(let t=-70;t<=70;t+=20)for(const i of[-1,1]){const s=t+(i>0?10:0),o=i*7.2;if(Math.abs(s)<7||s>76)continue;this.cyl(.08,5,"#4a4e5c",s,2.5,o,{t:.025,low:!0}),this.box(.1,.1,1.4,"#4a4e5c",s,4.95,o-i*.6,{t:.02}),this.box(.5,.18,.4,"#2b2d42",s,4.9,o-i*1.25,{t:.02});const a=new Ae(bt,this.mats.bulb);a.scale.set(.38,.06,.3),a.position.set(s,4.79,o-i*1.25),this.add(a),this.lampPositions.push([s,4.6,o-i*1.25])}const e=[[-30,4.2,-9],[18,4.5,-9],[-21,4.5,9],[-58,4.5,6],[-6,4.5,6],[52,4.5,6],[0,4.5,0]];for(const t of e){const i=new Wa(16762219,0,18,1.4);i.position.set(...t),this.add(i),this.lampLights.push(i)}}powerLines(){const e=[],t=[];for(let s=-76;s<=76;s+=16)this.cyl(.13,7.2,"#7a5536",s,3.6,-8.1,{t:.03,low:!0}),this.box(1.6,.12,.12,"#7a5536",s,6.8,-8.1,{t:.02}),t.push(s);this.box(.8,1,.7,"#7d8597",-12,5.4,-8.1,{t:.03});for(let s=0;s<t.length-1;s++)for(const o of[-.7,0,.7]){const a=new P(t[s],6.85,-8.1+o*.01),l=new P(t[s+1],6.85,-8.1+o*.01),r=8;for(let c=0;c<r;c++){const d=c/r,p=(c+1)/r,f=a.clone().lerp(l,d),h=a.clone().lerp(l,p);f.x+=o,h.x+=o,f.z=-8.1+o*.3,h.z=f.z,f.y-=Math.sin(Math.PI*d)*.9,h.y-=Math.sin(Math.PI*p)*.9,e.push(f,h)}}const i=new Pt().setFromPoints(e);this.add(new Qd(i,new xo({color:1709091})))}palm(e,t,i=5){const s=Y("#9c6b3e");let o=e,a=0;const l=Ge(-.15,.15);for(let c=0;c<5;c++){const d=te(Kr,s,{scale:[.36-c*.03,i/5+.05,.36-c*.03],t:.03});d.position.set(o,a+i/10,t),d.rotation.z=l,this.add(d),o-=Math.sin(l)*i/5,a+=i/5}const r=Y("#3bb273");for(let c=0;c<7;c++){const d=c/7*Math.PI*2,p=te(ho,r,{scale:[.35,2.6,.12],t:.03}),f=new ht;f.position.set(o,a,t),f.rotation.y=d,this.add(f),p.position.set(0,.2,1.1),p.rotation.x=Math.PI/2+.45,f.add(p)}this.add(te(ga,Y("#6b4f1d"),{scale:[.5,.5,.5],t:.02})).position.set(o,a-.1,t),this.collide(e-.3,e+.3,t-.3,t+.3)}palms(){[[-42,-11],[-16,-11],[26,-11],[42,-11],[-52,11],[-38,11],[8.5,11],[22,11],[38,11],[58,-11],[-70,-11],[70,11]].forEach(([e,t])=>this.palm(e,t,Ge(4.5,6.5)))}billboards(){const e=(t,i,s,o,a,l,r="#1a1423")=>(this.cyl(.18,7,"#4a4e5c",s-2.5,3.5,o,{low:!0}),this.cyl(.18,7,"#4a4e5c",s+2.5,3.5,o,{low:!0}),this.sign(t,7.5,3,s,8.3,o,a,{bg:l,fg:r,sub:i,w:768}));e("LapoPay","Quick loan sharp-sharp! *wahala dey",4,-26,0,"#06d6a0"),e("GistMe","Gist wey sweet pass suya 📱",-18,27,Math.PI,"#ffd23f")}finishInstances(){const e=new At,t=(s,o)=>{if(!s.length)return null;const a=new ao(bt,o,s.length),l=new ao(bt,Y("#2b2d42"),s.length);return s.forEach((r,c)=>{e.position.set(r.x,r.y,r.z),e.rotation.set(0,r.ry,0),e.scale.set(r.w,r.h,.08),e.translateZ(.06),e.updateMatrix(),a.setMatrixAt(c,e.matrix),e.position.set(r.x,r.y,r.z),e.scale.set(r.w+.22,r.h+.22,.06),e.updateMatrix(),l.setMatrixAt(c,e.matrix)}),this.add(a),this.add(l),a};t(this.windowsLit,this.mats.window),t(this.windowsDark,this.mats.windowDark);const i={tomato:["#e63946",.11,ga],pepper:["#d00000",.08,ga],onion:["#9d4edd",.12,ga],plantain:["#ffd23f",.1,new Do(.5,1.6,3,8)]};for(const[s,[o,a,l]]of Object.entries(i)){const r=this.produce[s];if(!r.length)continue;const c=new ao(l,Y(o),r.length),d=new ao(l,cu,r.length);r.forEach((p,f)=>{e.position.set(...p),e.rotation.set(0,f,s==="plantain"?Math.PI/2:0),e.scale.setScalar(a*2),e.updateMatrix(),c.setMatrixAt(f,e.matrix),e.scale.setScalar(a*2+.04),e.updateMatrix(),d.setMatrixAt(f,e.matrix)}),c.castShadow=!0,this.add(c),this.add(d)}}makeDanfo(){const e=new ht,t=Y("#ffc300"),i=te(bt,t,{scale:[4.6,1.75,2],t:.06});i.position.y=1.25,e.add(i);const s=te(bt,t,{scale:[.7,.9,1.9],t:.05});s.position.set(2.6,.82,0),e.add(s);for(const h of[.78,1.02]){const y=new Ae(bt,Y("#1a1423"));y.scale.set(4.62,.09,2.02),y.position.y=h,e.add(y)}const o=Y("#3d5a80"),a=new Ae(bt,o);a.scale.set(3.6,.6,2.03),a.position.set(-.3,1.65,0),e.add(a);const l=new Ae(bt,o);l.scale.set(.05,.6,1.7),l.position.set(2.31,1.65,0),e.add(l);const r=te(bt,Y("#2b2d42"),{scale:[3.4,.08,1.7],t:.03});r.position.set(-.2,2.25,0),e.add(r);const c=new Ae(bt,this.mats.headlight);c.scale.set(.06,.2,1.5),c.position.set(2.96,.95,0),e.add(c);const d=te(bt,Y("#d9d9d9"),{scale:[.15,.2,2],t:.02});d.position.set(2.98,.5,0),e.add(d);const p=new Wt(.4,.4,.3,14);for(const[h,y]of[[1.7,1],[1.7,-1],[-1.6,1],[-1.6,-1]]){const m=te(p,Y("#1a1423"),{t:.02});m.rotation.x=Math.PI/2,m.position.set(h,.4,y),e.add(m)}const f=this.signMesh("OSHODI-OYINGBO",1.8,.32,"#fdfcdc");return f.position.set(2.32,2.08,0),f.rotation.y=Math.PI/2,e.add(f),e}signMesh(e,t,i,s){const o=Ra(e,{w:512,h:Math.round(512*i/t),bg:s});return new Ae(new rn(t,i),Y("#ffffff",{map:o}))}makeKeke(e=!0){const t=new ht,i=Y("#ffd23f"),s=Y("#2a9d8f"),o=te(bt,i,{scale:[2.3,.7,1.3],t:.05});o.position.set(0,.75,0),t.add(o);const a=te(bt,s,{scale:[.6,1.1,.9],t:.04});a.position.set(1.15,1,0),t.add(a);const l=te(bt,s,{scale:[2.3,.12,1.4],t:.04});l.position.set(-.1,2.15,0),t.add(l);for(const[f,h]of[[.95,.6],[.95,-.6],[-1.15,.6],[-1.15,-.6]]){const y=te(bt,Y("#2b2d42"),{scale:[.08,1.1,.08],t:.02});y.position.set(f,1.6,h),t.add(y)}const r=te(bt,Y("#3a2a20"),{scale:[.6,.5,1.1],t:.02});r.position.set(-.6,1.25,0),t.add(r);const c=new Wt(.3,.3,.2,12);for(const[f,h]of[[1.2,0],[-.8,.65],[-.8,-.65]]){const y=te(c,Y("#1a1423"),{t:.02});y.rotation.x=Math.PI/2,y.position.set(f,.3,h),t.add(y)}const d=new Ae(bt,this.mats.headlight);if(d.scale.set(.05,.18,.4),d.position.set(1.46,1.1,0),t.add(d),!e)return t;const p=vn({...Nn(Mn),hair:"cap",outfit:"street"});return p.scale.setScalar(.8),p.position.set(.45,.95,0),p.rotation.y=Math.PI/2,si(p),t.add(p),t.userData.driver=p,t}spawnVehicles(){const e=[{z:2.4,dir:1},{z:-2.4,dir:-1}];for(let t=0;t<5;t++){const i=e[t%2],s=this.makeDanfo();s.rotation.y=i.dir>0?0:Math.PI,s.position.set(-76+t*33,0,i.z),this.add(s),this.vehicles.push({mesh:s,type:"danfo",axis:"x",dir:i.dir,speed:Ge(8,11),base:Ge(8,11),wait:0,len:3,half:1.1,lastStop:null})}for(let t=0;t<3;t++){const i=t%2?1:-1,s=this.makeKeke();s.rotation.y=i>0?-Math.PI/2:Math.PI/2,s.position.set(i>0?-1.8:1.8,0,-24+t*21),this.add(s),this.vehicles.push({mesh:s,type:"keke",axis:"z",dir:i,speed:6,base:Ge(5.5,7),wait:0,len:1.5,half:.8})}}spawnNPCs(){const e=["Chinedu","Bisi","Emeka","Aisha","Segun","Ngozi","Femi","Zainab","Kunle","Amaka","Musa","Yetunde","Obinna","Halima"];for(let r=0;r<18;r++){const c=Nn(Mn);c.name=e[r%e.length]+(r>=e.length?" Jr":"");const d=vn(c);this.add(d);const p=r%2?1:-1,f={mesh:d,z:p*Ge(5.6,6.9),x:Ge(-70,70),tx:0,speed:Ge(1.3,2),wait:Ge(0,3),talkT:Ge(4,20),name:c.name,convCD:Ge(2,12),conv:null};f.tx=f.x,d.position.set(f.x,.18,f.z),this.walkers.push(f)}const t=(r,c,d,p,f=!1,h=null,y=null)=>{const m=vn({...Nn(Mn),...r});return m.position.set(c,y!=null?y:this.groundHeight(c,d),d),m.rotation.y=p,f&&si(m),this.add(m),this.npcs.push({mesh:m,lines:h,talkT:Ge(3,12),name:r.name,cfg:r}),this.colliders.push({minX:c-.35,maxX:c+.35,minZ:d-.35,maxZ:d+.35}),m};t({name:"Iya Basira",hair:"gele",outfit:"ankaraDress",clothColor:"#e71d36",accentColor:"#ffd23f",pattern:"circles",skin:"#5a3218"},18,-18,0,!1,["Food dey!","Jollof hot!","Come chop o!"]),t({name:"Baba Ade",hair:"cap",outfit:"kaftan",clothColor:"#fdfcdc",accentColor:"#3a86ff",skin:"#432513"},-27.6,-14.1,.3,!0,["Rent na Saturday o!","My money nko?","How work?"],.2),t({name:"Mama Tomato",hair:"gele",outfit:"ankaraDress",clothColor:"#06d6a0",accentColor:"#ff6b35"},-21,13,Math.PI,!1,["Tomato dey!","Buy pepper!"]),t({name:"Iya Onions",hair:"braids",outfit:"ankaraDress",clothColor:"#8338ec",accentColor:"#ffd23f"},-16,13,Math.PI,!1,["Onions cheap!","Customer!"]),t({name:"Uncle Musa",hair:"cap",outfit:"kaftan",clothColor:"#2ec4b6",accentColor:"#fdfcdc"},-26,19,Math.PI,!1,["Plantain sweet!"]),t({name:"Conductor",hair:"lowcut",outfit:"street",clothColor:"#e71d36"},-6+2.4,7,-.4,!1,["Oshodi! Oshodi!","Enter with change!","CMS! CMS!"]),t({name:"Waiting",hair:"braids",outfit:"street",clothColor:"#3a86ff"},-58-.8,8.5,0,!0,["Danfo where?","This sun ehn"],.3),t({name:"Waiting2",hair:"afro",outfit:"ankaraShirt",clothColor:"#ffbe0b"},52+.6,8.5,0,!0,["I don late!"],.3);const i={hair:"cap",outfit:"street",clothColor:"#ffd23f",accentColor:"#7b1e3a",pantsColor:"#7b1e3a"},s={hair:"cap",outfit:"street",clothColor:"#1d2240",accentColor:"#1a1423",pantsColor:"#1a1423"};t({...i,name:"LASTMA"},87.6,3.2,-Math.PI/2,!1,qr),t({...s,name:"Police"},87.6,-3.6,-Math.PI/2,!1,qr),t({...i,name:"LASTMA 2"},2.8,32,Math.PI,!1,qr),t({hair:"cap",outfit:"kaftan",clothColor:"#6b705c",accentColor:"#264653",name:"Mai Guard"},4.6,-32.2,0,!0,["Estate close!","Who you wan see?","No entry without gate pass"],.12),this.groups=[];const o=(r,c,d)=>{const p=d.map((f,h)=>{const y=h/d.length*Math.PI*2+.4,m=r+Math.sin(y)*.95,u=c+Math.cos(y)*.95,g=t({name:f},m,u,Math.atan2(r-m,c-u),!1,null),M=this.npcs[this.npcs.length-1];return M.group=!0,{mesh:g,name:f,conv:null}});this.groups.push({members:p,cd:Ge(1,5),conv:null})};o(-9,-11,["Uncle Sola","Bros Kelechi","Aunty Rose"]),o(14,11.6,["Deacon Paul","Sister Grace","Bro Tunji"]),o(-85.5,15,["Fisherman Ade","Kunle","Ibrahim"]);const a={hair:"lowcut",outfit:"street",clothColor:"#1d3557",pantsColor:"#2b2d42"},l=["Agbero Sunday","Agbero Lucky","Agbero Taiwo"];this.agberos=l.map((r,c)=>{const d=7.6+c*.9,p=-9.2+c%2*.8;return{mesh:t({...a,clothColor:["#1d3557","#e71d36","#6b705c"][c],name:r},d,p,Math.PI,!1,["Owo union!","Oya park!","Driver, bring ₦300!"]),name:r,conv:null}}),this.groups.push({members:this.agberos,cd:Ge(2,6),conv:null}),this.junior=t({name:"Junior (ball owner)",hair:"lowcut",outfit:"street",clothColor:"#06d6a0",pantsColor:"#f4f1de"},50.2,0+27.2,-Math.PI/2,!1,["Na my ball o!","Who wan play?","Oya come join!"]),t({name:"Fan 1",hair:"afro"},40,23.4,0,!1,["Goal!!","Pass am!"]),t({name:"Fan 2",hair:"braids"},41.2,23.4,0,!1,["Shoot!","Ehen!"])}neon(e,t,i,s,o,a,l=!1){const r=Ra(e,{w:512,h:128,bg:"#1a1423",fg:a,border:a}),c=Y("#ffffff",{map:r,emissive:16777215,unique:!0});c.emissiveMap=r;const d=new Ae(new qe(2.4,.6,.08),[Y("#1a1423"),Y("#1a1423"),Y("#1a1423"),Y("#1a1423"),c,c]);d.position.set(t,i,s),d.rotation.y=o,this.add(d),this.neons.push({mat:c,bad:l})}umbrella(e,t,i,s=1.6){this.cyl(.04,2.3,"#555",e,1.15,t,{t:.015,cast:!1});const o=te(ho,Y("#ffffff",{map:an(i,8,!0)}),{scale:[s,.55,s],t:.035});o.position.set(e,2.45,t),o.rotation.y=Mn()*3,this.add(o)}stage2(){this.neons=[],this.neon("OPEN 24/7",-11,4.2,-13.85,0,"#ff4fd8",!0),this.neon("GISTME",50,4.3,-13.85,0,"#4cf0ff"),this.neon("PHARMACY +",29,4.2,14.45,Math.PI,"#4dff88"),this.neon("BUKA",21.8,2.8,-14,0,"#ffd23f",!0),this.neon("MEGA FUEL",64,5.6,12.15,Math.PI,"#ff5252");const e=[["#ff6b9a","#fdfcdc"],["#06d6a0","#ffd23f"],["#3a86ff","#ff6b35"],["#8338ec","#ffbe0b"],["#e71d36","#2ec4b6"],["#ffbe0b","#1a1423"]];[[-46,8.9],[-2,-8.9],[24,8.9],[42,-8.9],[-64,-8.9],[58,8.9],[16,-9.3],[-15,8.9]].forEach(([c,d],p)=>{this.umbrella(c,d,e[p%e.length],1.5),this.box(1.2,.08,.7,"#b07a4a",c+.3,.8,d,{t:.02}),this.box(.08,.8,.08,"#6b4f3a",c+.3,.4,d,{outline:!1}),this.collide(c-.4,c+1,d-.4,d+.4)}),this.umbrella(13,-13.2,["#ffd23f","#e71d36"],1.8),this.umbrella(23,-13.2,["#06d6a0","#fdfcdc"],1.8);const t=64,i=15.5;this.box(11,.5,6.5,"#e71d36",t,4.8,i,{t:.05}),this.box(11.1,.18,6.6,"#fdfcdc",t,4.5,i,{t:.02,cast:!1});for(const[c,d]of[[-4.5,-2.5],[4.5,-2.5],[-4.5,2.5],[4.5,2.5]])this.box(.4,4.5,.4,"#fdfcdc",t+c,2.25,i+d,{t:.03}),this.collide(t+c-.25,t+c+.25,i+d-.25,i+d+.25);for(const c of[-2,2])this.box(.8,1.6,.6,"#fdfcdc",t+c,.8,i,{t:.04}),this.box(.6,.4,.62,"#e71d36",t+c,1.3,i,{t:.02}),this.box(.9,.2,.8,"#9fb3c8",t+c,.1,i,{t:.02}),this.collide(t+c-.5,t+c+.5,i-.4,i+.4);this.box(7,3.2,3.2,"#fdfcdc",t,1.6,i+5,{t:.05}),this.collide(t-3.5,t+3.5,i+3.4,i+6.6),this.sign("MEGA FUEL",4.8,1,t,3.4,i+3.35,Math.PI,{bg:"#e71d36",fg:"#fff",sub:"Petrol • Diesel • No fuel scarcity (today)"}),this.cyl(.12,6,"#4a4e5c",t-6.5,3,i-3,{t:.02}),this.sign("PETROL",1.8,.8,t-6.5,6.2,i-3,Math.PI,{bg:"#ffd23f",sub:"Price dey change"}),this.fuelSpot=new P(t,0,i-3.2),this.playerKeke=this.makeKeke(!1),this.playerKeke.position.set(-23.5,0,-10.6),this.playerKeke.rotation.y=Math.PI,this.add(this.playerKeke),this.sign("MY KEKE",1.4,.4,-23.5,2.6,-10.6,0,{bg:"#ffd23f"});const[s]=Ly(512,256),o=s.getContext("2d");o.fillStyle="#6e717c",o.fillRect(0,0,512,256),o.fillStyle="rgba(240,211,160,0.35)";for(let c=0;c<90;c++)o.fillRect(Math.random()*512,Math.random()*256,20+Math.random()*30,6);o.strokeStyle="rgba(255,255,255,0.75)",o.lineWidth=5,o.strokeRect(8,8,496,240),o.beginPath(),o.moveTo(256,8),o.lineTo(256,248),o.stroke(),o.beginPath(),o.arc(256,128,40,0,7),o.stroke();const a=new tu(s);a.colorSpace=Yt;const l=new Ae(new rn(18,8),Y("#ffffff",{map:a}));l.rotation.x=-Math.PI/2,l.position.set(40,.03,28),l.receiveShadow=!0,this.add(l);const r=new Ji(.32,0);r.computeVertexNormals();for(const c of[31.2,48.8])for(const d of[26.6,29.4]){const p=te(r,Y("#9a9aa6"),{t:.03});p.position.set(c,.25,d),this.add(p);const f=te(r,Y("#b8b8c2"),{t:.03,scale:[.7,.7,.7]});f.position.set(c,.6,d),this.add(f)}this.sign("THE SET",2.4,.6,40,2.4,23.2,0,{bg:"#06d6a0",sub:"Winner stays • Ball na Junior own"}),this.cyl(.07,2.4,"#4a4e5c",38.6,1.2,23.2,{t:.02}),this.cyl(.07,2.4,"#4a4e5c",41.4,1.2,23.2,{t:.02}),this.box(4,.4,.6,"#c9b79c",40.6,.2,23.4,{t:.03}),this.pitch={minX:31.2,maxX:48.8,minZ:24.1,maxZ:31.9,goalMin:26.6,goalMax:29.4,cx:40,cz:28},this.ball=te(new Ji(.17,1),Y("#fdfcdc"),{t:.025}),this.ball.position.set(40,.18,28),this.add(this.ball),this.checkpointSpot=new P(30,0,-9)}edges(){this.waterTex=an(["#48bfe3","#5ccfee","#48bfe3","#72d8f2"],8,!1,[30,60]);const e=new Ae(new rn(260,400),Y("#ffffff",{map:this.waterTex}));e.rotation.x=-Math.PI/2,e.position.set(-91.4-130,.04,0),this.add(e),this.box(1.2,.8,72,"#d6cdb9",-90.9,.4,0,{t:.04});const t=Y("#3a86ff");for(let m=-33;m<=33;m+=2.5)this.cyl(.06,1.15,"#2b2d42",-90.4,1.35,m,{t:.02,low:!0,cast:!1});for(const m of[1.15,1.85])this.box(.1,.1,66.5,t,-90.4,m,0,{t:.02,cast:!1});this.sign("LAGOS LAGOON",3.6,.9,-90.2,2.6,-14,Math.PI/2,{bg:"#2ec4b6",sub:"No swimming • No dumping refuse"}),this.cyl(.07,2.2,"#2b2d42",-90.2,1.1,-15.3,{t:.02}),this.cyl(.07,2.2,"#2b2d42",-90.2,1.1,-12.7,{t:.02}),this.collide(-140,-89.9,-60,60),this.canoes=[];for(const[m,u,g]of[[-100,-8,"#9c6b3e"],[-112,12,"#e71d36"],[-126,-22,"#3a86ff"]]){const M=new ht;M.position.set(m,.1,u),M.rotation.y=Ge(0,3),M.add(te(bt,Y(g),{scale:[4.2,.5,1],t:.04}));const w=vn({...Nn(Mn),hair:"cap"});w.scale.setScalar(.8),w.position.y=.2,si(w),M.add(w),this.add(M),this.canoes.push(M)}for(let m=0;m<12;m++){const u=Ge(10,30);this.box(Ge(6,12),u,8,Fi(["#bde0fe","#cdb4db","#ffc8dd","#a0c4ff"]),-175-Ge(0,10),u/2,-70+m*12,{t:.1,cast:!1})}const i=Y("#ffffff",{map:an(["#fdfcdc","#fdfcdc","#3a86ff"],3,!1,[1,1])});this.box(.3,3.4,70,i,91.3,1.7,0,{t:.05}),this.sign("ROAD CLOSED",4.4,1.3,91.1,2,0,-Math.PI/2,{bg:"#e71d36",fg:"#fff",sub:"Lagos State Road Works • Use alternative route"}),this.sign("SAFETY FIRST",3,.8,91.1,2.2,-16,-Math.PI/2,{bg:"#ffd23f",sub:"Hard hat area"}),this.sign("POST NO BILL",2.6,.7,91.1,1.6,18,-Math.PI/2,{bg:"#fdfcdc",fg:"#e71d36"}),this.collide(88.9,140,-60,60);const s=Y("#b8b8c2");for(let m=0;m<4;m++)if(this.box(12,.35,9,s,104,.2+m*3.3,9,{t:.05,cast:!1}),m<3)for(const[u,g]of[[-5.5,-4],[5.5,-4],[-5.5,4],[5.5,4],[0,-4],[0,4]])this.box(.45,3.3,.45,s,104+u,1.85+m*3.3,9+g,{t:.03,cast:!1});for(let m=0;m<7;m++)this.cyl(.06,3,"#7a5536",98+m*1.2,11.7,4.6,{low:!0,outline:!1,cast:!1});const o=Y("#ffbe0b");this.box(1,26,1,o,100,13,-10,{t:.05,cast:!1}),this.box(26,.8,.8,o,94,26.2,-10,{t:.05,cast:!1}),this.box(2,2,1.2,"#4a4e5c",104,25,-10,{t:.04,cast:!1}),this.box(1.2,1.2,1.2,"#2b2d42",98.5,26.6,-10,{t:.03,cast:!1});const a=new Gl(new Pt().setFromPoints([new P(84,26,-10),new P(84,14,-10)]),new xo({color:1709091}));this.add(a),this.box(1.6,.6,1.6,"#e71d36",84,13.6,-10,{t:.03,cast:!1});const l=te(ho,Y("#e9c46a"),{scale:[3,2,3],t:.05,cast:!1});l.position.set(97,1,-2),this.add(l);const r=Y("#ffffff",{map:an(["#e71d36","#fdfcdc"],8,!0,[2,1])}),c=(m,u,g=0)=>{const M=new ht;M.position.set(m,0,u),M.rotation.y=g,this.add(M);const w=te(bt,r,{scale:[.15,.45,2.4],t:.03});w.position.y=1,M.add(w);const E=te(bt,r,{scale:[.15,.3,2.4],t:.03});E.position.y=.45,M.add(E);for(const L of[-1,1]){const b=te(bt,Y("#2b2d42"),{scale:[.5,1.2,.1],t:.02});b.position.set(0,.6,L*1.05),M.add(b)}},d=(m,u)=>{const g=te(ho,Y("#ff7b29"),{scale:[.3,.75,.3],t:.025});g.position.set(m,.38,u),this.add(g);const M=new Ae(Kr,Y("#fdfcdc"));M.scale.set(.38,.1,.38),M.position.set(m,.42,u),this.add(M)};for(let m=-8.4;m<=8.4;m+=2.6)c(89.3,m);for(const m of[-6,-2,2,6])d(86.4,m);this.box(184,4.4,.7,"#f3e9d2",0,2.2,-34.3,{t:.06}),this.box(184.4,.3,1,"#c9b79c",0,4.5,-34.3,{t:.03,cast:!1});const p=new ts(.28,.035,4,10),f=new ao(p,Y("#4a4e5c"),300),h=new At;for(let m=0;m<300;m++)h.position.set(-91+m*.61,4.95,-34.3),h.rotation.set(0,Math.PI/2,0),h.updateMatrix(),f.setMatrixAt(m,h.matrix);this.add(f),this.box(7,3.8,.35,"#2a9d8f",0,1.95,-33.85,{t:.05});for(let m=-3;m<=3;m++)this.box(.08,3.6,.4,"#1a1423",m*.95,1.95,-33.8,{outline:!1,cast:!1});this.sign("ROYAL GARDENS ESTATE",5.2,1,0,4.9,-33.6,0,{bg:"#fdfcdc",sub:"No Danfo • No Keke • No Okada • No Hawking"}),this.box(2.2,2.6,2.2,"#ffd6a5",6.2,1.3,-32.6,{t:.04}),this.box(2.6,.2,2.6,"#e71d36",6.2,2.7,-32.6,{t:.03}),this.collide(5.1,7.3,-33.7,-31.5),this.sign("POST NO BILL",2.6,.7,-40,2.4,-33.9,0,{bg:"#fdfcdc",fg:"#e71d36"}),this.sign("THIS HOUSE IS NOT FOR SALE",4.6,.7,40,2.4,-33.9,0,{bg:"#fdfcdc",fg:"#1a1423",border:"#e71d36"}),this.collide(-140,140,-60,-33.95);const y=Y("#ffffff",{map:an(["#9fb3c8","#7f93a8","#b5652d","#9fb3c8"],32,!0,[24,1])});this.box(184,3.2,.25,y,0,1.6,34.3,{t:.05});for(let m=-90;m<=90;m+=6)this.box(.2,3.4,.3,"#6b4f3a",m,1.7,34.1,{outline:!1,cast:!1});this.sign("BEWARE OF 419",3,.7,-50,2,34.1,Math.PI,{bg:"#ffd23f"}),this.sign("THIS LAND IS NOT FOR SALE",4.6,.7,30,2,34.1,Math.PI,{bg:"#fdfcdc",fg:"#e71d36"}),this.sign("ROAD CLOSED",3.6,1,0,2.3,33.6,Math.PI,{bg:"#e71d36",fg:"#fff",sub:"Drainage works • LASTMA dey watch"});for(let m=-3.9;m<=3.9;m+=2.6)c(m,33.2,Math.PI/2);for(const m of[-2.6,0,2.6])d(m,30.8+(m===0?.4:0));this.collide(-140,140,33.6,60)}updateConversations(e,t,i,s){var l;this.convs=this.convs||[];const o=this.walkers;for(let r=0;r<o.length;r++){const c=o[r];if(!(c.conv||c.convCD>0||c.busy))for(let d=r+1;d<o.length;d++){const p=o[d];if(p.conv||p.convCD>0||p.busy)continue;const f=p.mesh.position.x-c.mesh.position.x,h=p.mesh.position.z-c.mesh.position.z;if(Math.abs(h)<1.8&&Math.abs(f)<2.6){Mn()<.55?this.startConv([c,p],ql(2,this.evCtx)):(c.convCD=Ge(4,10),p.convCD=Ge(4,10));break}}}for(const r of this.groups)r.cd-=e,!r.conv&&r.cd<=0&&(r.conv=this.startConv(r.members,ql(r.members.length,this.evCtx)),r.conv.group=r);const a=(r,c,d,p)=>{let h=Math.atan2(c-r.position.x,d-r.position.z)-r.rotation.y;h=Math.atan2(Math.sin(h),Math.cos(h)),r.rotation.y+=h*Math.min(1,e*p)};for(let r=this.convs.length-1;r>=0;r--){const c=this.convs[r],d=c.members[c.speaker]||c.members[0];for(const y of c.members){if(y===d){const m=c.members.find(u=>u!==y);c.members.length===2&&a(y.mesh,m.mesh.position.x,m.mesh.position.z,6)}else a(y.mesh,d.mesh.position.x,d.mesh.position.z,5);y.mesh.userData.listen=y!==d}if(c.members.length===2){const[y,m]=c.members,u=m.mesh.position.x-y.mesh.position.x,g=Math.sign(u||1)*1.3,M=(u-g)*Math.min(1,e*2)*.5;y.mesh.position.x+=M,m.mesh.position.x-=M}if(c.paused||(c.t-=e,c.t>0))continue;if(c.i>=c.lines.length){for(const y of c.members)y.conv=null,y.mesh.userData.listen=!1,y.convCD!==void 0&&(y.convCD=Ge(20,45),y.wait=.4);c.group&&(c.group.conv=null,c.group.cd=Ge(6,14)),this.convs.splice(r,1);continue}const[p,f]=c.lines[c.i++];c.speaker=Math.min(c.members.length-1,"ABC".indexOf(p));const h=c.members[c.speaker];pe(h.mesh,f,2.9),h.mesh.userData.talk=2.7,c.t=2.2+f.length*.035,Math.hypot(i.x-h.mesh.position.x,i.z-h.mesh.position.z)<7&&((l=s.onOverhear)==null||l.call(s,h.name,f))}}startConv(e,t){const i={members:e,lines:t.lines,i:0,t:.3,speaker:0,topic:t.topic,T:t.t};for(const s of e)s.conv=i;return this.convs=this.convs||[],this.convs.push(i),i}update(e,t,i,s){var o,a,l;this.evCtx=s.ev||{};for(const r of this.vehicles){const c=r.mesh;let d=r.base;if(r.wait>0&&(r.wait-=e,d=0),r.hold&&(d=0),r.type==="danfo"&&!r.turn&&(r.dir>0||r.conductor||r.ride))for(const y of oi)Math.abs(c.position.x-(y.x-r.dir))<.4&&r.lastStop!==y.id&&(r.wait=2.5,r.lastStop=y.id,r.atStop=y,r.ride?(o=this.onRideStop)==null||o.call(this,r,y):r.conductor?(a=this.onConductorStop)==null||a.call(this,r,y):Math.random()<.3&&((l=this.onDanfoNear)==null||l.call(this,r)),Math.random()<.6&&(this.bark={pos:c.position.clone(),text:Fi(["Oshodi! Oshodi!","Enter with your change!",`${y.name}! Wole!`])}));r.type==="keke"&&Math.abs(c.position.z+r.dir*4)<6.5&&Math.abs(c.position.z)>3&&this.vehicles.some(m=>m.type==="danfo"&&Math.abs(m.mesh.position.x)<7)&&(d=0);const p=r.turn?-1:r.axis==="x"?(i.x-c.position.x)*r.dir:(i.z-c.position.z)*r.dir,f=r.axis==="x"?Math.abs(i.z-c.position.z):Math.abs(i.x-c.position.x),h=p>0&&p<r.len+3&&f<r.half+.6;if(h&&(d=0),r.blockT=h&&!r.ride&&!r.conductor&&!r.mesh.userData.isPlayer?(r.blockT||0)+e:0,r.speed+=(d-r.speed)*Math.min(1,e*3),r.axis==="x"?r.turn||(c.position.x+=r.speed*r.dir*e,c.position.x*r.dir>=82&&(r.turn={phi:0,e:r.dir},c.position.x=82*r.dir)):r.turn||(c.position.z+=r.speed*r.dir*e,c.position.z*r.dir>=28&&(r.turn={phi:0,e:r.dir},c.position.z=28*r.dir)),r.turn){const y=r.turn,m=r.axis==="x"?2.4:1.8,u=y.e;y.phi=Math.min(Math.PI,y.phi+Math.max(r.speed,2.5)*.7/m*e);const g=c.position.x,M=c.position.z;r.axis==="x"?c.position.set(82*u+u*m*1.6*Math.sin(y.phi),c.position.y,u*m*Math.cos(y.phi)):c.position.set(-u*m*Math.cos(y.phi),c.position.y,28*u+u*m*1.4*Math.sin(y.phi));const w=c.position.x-g,E=c.position.z-M;w*w+E*E>1e-8&&(c.rotation.y=Math.atan2(-E,w)),y.phi>=Math.PI&&(r.turn=null,r.dir=-r.dir,r.lastStop=null,c.rotation.y=r.axis==="x"?r.dir>0?0:Math.PI:r.dir>0?-Math.PI/2:Math.PI/2)}c.position.y=Math.abs(Math.sin(t*9+c.id))*.04*Math.min(1,r.speed)}for(const r of this.walkers){const c=r.mesh;let d=0;if(r.convCD-=e,!r.busy){if(!r.conv)if(r.wait>0)r.wait-=e;else{const p=r.tx-c.position.x;if(Math.abs(p)<.2)r.wait=Ge(1,5),r.tx=Tt.clamp(c.position.x+Ge(-25,25),-73,73);else{const f=Math.sign(p)*r.speed*e;Math.hypot(i.x-c.position.x,i.z-c.position.z)<1&&Math.sign(i.x-c.position.x)===Math.sign(p)||(c.position.x+=f,d=1);const y=p>0?Math.PI/2:-Math.PI/2;c.rotation.y+=(y-c.rotation.y)*Math.min(1,e*8)}}}r.talkT-=e,r.talkT<0&&!r.conv&&!r.busy&&(r.talkT=Ge(10,25),Math.hypot(i.x-c.position.x,i.z-c.position.z)<18&&pe(c,Fi(s.lines()),3)),cn(c,e,d,t)}this.updateConversations(e,t,i,s);for(const r of this.neons){const c=s.power?1:0,d=Math.random()<(r.bad?.08:.015)?.2:1;r.mat.emissiveIntensity=c*(.35+.9*(s.night||0))*d}for(const r of this.npcs)r.talkT-=e,r.talkT<0&&r.lines&&!r.group&&(r.talkT=Ge(8,18),Math.hypot(i.x-r.mesh.position.x,i.z-r.mesh.position.z)<14&&pe(r.mesh,Fi(s.power?r.lines:[...r.lines,"NEPA don take light!"]),3)),cn(r.mesh,e,0,t);for(const r of this.vehicles)r.mesh.userData.driver&&cn(r.mesh.userData.driver,e,0,t);this.waterTex&&(this.waterTex.offset.y=t*.02%1),this.canoes&&this.canoes.forEach((r,c)=>{r.position.y=.08+Math.sin(t*1.5+c)*.06,r.rotation.z=Math.sin(t*1.2+c)*.04}),this.genSmoke.forEach((r,c)=>{if(r.visible=s.genRunning,s.genRunning){const d=(t*.8+c*.25)%1;r.position.y=1.15+d*1.4,r.scale.setScalar(.6+d*1.4),r.position.x=-20.75+Math.sin(t+c)*.1}})}resolve(e,t=.35){for(const i of this.colliders){const s=Math.max(i.minX,Math.min(e.x,i.maxX)),o=Math.max(i.minZ,Math.min(e.z,i.maxZ)),a=e.x-s,l=e.z-o,r=a*a+l*l;if(r<t*t)if(r>1e-8){const c=Math.sqrt(r);e.x=s+a/c*t,e.z=o+l/c*t}else{const c=[e.x-i.minX,i.maxX-e.x,e.z-i.minZ,i.maxZ-e.z],d=c.indexOf(Math.min(...c));d===0?e.x=i.minX-t:d===1?e.x=i.maxX+t:d===2?e.z=i.minZ-t:e.z=i.maxZ+t}}for(const i of this.vehicles){const s=i.mesh.position,o=i.axis==="x"?2.9:i.half,a=i.axis==="x"?1.05:1.4,l=Math.max(s.x-o,Math.min(e.x,s.x+o)),r=Math.max(s.z-a,Math.min(e.z,s.z+a)),c=e.x-l,d=e.z-r,p=c*c+d*d;if(p<t*t)if(p>1e-8){const f=Math.sqrt(p);e.x=l+c/f*t,e.z=r+d/f*t}else i.axis==="x"?e.z=e.z>s.z?s.z+a+t:s.z-a-t:e.x=e.x>s.x?s.x+o+t:s.x-o-t}for(const i of this.walkers){const s=e.x-i.mesh.position.x,o=e.z-i.mesh.position.z,a=Math.hypot(s,o);a<.7&&a>1e-4&&(e.x=i.mesh.position.x+s/a*.7,e.z=i.mesh.position.z+o/a*.7)}e.x=Math.max(va.minX,Math.min(va.maxX,e.x)),e.z=Math.max(va.minZ,Math.min(va.maxZ,e.z))}groundHeight(e,t){const i=Math.abs(t),s=Math.abs(e);return i>5&&i<7.5||s>4&&s<6.5&&i>7.5&&i<28.5?.18:0}}function Ly(n,e){const t=document.createElement("canvas");return t.width=n,t.height=e,[t]}function Jh(n,e){const t=new Fe(n),i={};return t.getHSL(i,Yt),t.setHSL(i.h,i.s,Math.max(0,Math.min(1,i.l+e)),Yt),"#"+t.getHexString()}const So=8e3,Zh=2e3,Iy=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Dy=3,gu=.05,Xa=[{id:"Lapo",min:-1/0,label:"Lapo",blurb:"Starting from zero, hustling with everything."},{id:"Hustler",min:5e4,label:"Small Hustler",blurb:"Money don small enter. No dull."},{id:"Odogwu",min:25e4,label:"Odogwu",blurb:"Big boy/Big girl things."}],Jr=n=>Math.round(n/50)*50,Un=(n,e=0,t=100)=>Math.max(e,Math.min(t,n)),Ss=n=>n[Math.floor(Math.random()*n.length)],j=n=>"₦"+Math.round(n).toLocaleString("en-NG");function ky(n){return vu({v:1,_new:!0,name:n,t:7*60,cash:4e3,loan:0,rentOwed:So,strikes:0,warnedSat:!1,hunger:70,energy:85,mood:65,fuel:0,genOn:!0,power:!0,fuelFactor:1,marketBonus:1,marketBonusUntil:0,feed:[],unread:0,nextNews:7*60+45,stats:{earned:0,sold:0,meals:0},evicted:!1,player:null})}function vu(n){const e={karma:0,dataMB:300,followers:0,sponsorsPaid:0,posts:[],messages:[],unreadMsg:0,loanDue:0,recovery:0,quietGen:!1,hasGen:!0,genComplaints:0,items:{radio:!0},kekeFuel:6,kekeTrips:0,stock:{water:0,gala:0},tollCD:0,agberoScared:0,npcRep:{},statsV2:{trips:0,hawked:0,shifts:0,deeds:0,chakam:0,matches:0,wins:0},nextDeed:0,nextChakam:0,rel:{},rain:!1,fuelHikeT:-1e9,churchDay:-1,statsV3:{rides:0,fights:0,beaten:0,talks:0,gists:0,haircuts:0,returned:0}};for(const[t,i]of Object.entries(e))n[t]===void 0&&(n[t]=JSON.parse(JSON.stringify(i)));return n.v===1&&!n._new&&!n.messages.length&&(n.messages.push({t:n.t,from:"GistMe",text:"Your GistMe don update! New apps: Messages, Clout, Chakam. Data bundle now needed for internet things 📶",read:!1,kind:"msg"}),n.unreadMsg=1,n._migrated=!0),n.v<3&&!n._new&&(n.messages.unshift({t:n.t,from:"GistMe",text:"Update 3 🎉 You fit now enter buildings, carry things, board Danfo, and gist with anybody (press E near them).",read:!1,kind:"msg"}),n.unreadMsg++,n._migrated=!0),delete n._new,n.v=3,n}const Qh=[{id:"d",name:"Daily 100MB",mb:100,price:100},{id:"w",name:"Weekly 750MB",mb:750,price:500},{id:"m",name:"Monthly 2.5GB",mb:2500,price:1500}],ed=[[100,"Mama Nkechi Provisions",1e3],[300,"Iya Basira Buka",2500],[700,"GistMe Phones",5e3],[1500,"Silent Tiger Generators",1e4],[3e3,"Lagos Pure Water Co.",2e4]],go=45e3,Ny=[["@LagosTraffic","Third Mainland Bridge don lock. Una wey dey go Island, carry your patience 🚗🚗🚗"],["@IyaBasira","Fresh jollof don land for buka! Party jollof, smoky bottom pot 🔥🍛"],["@Danfo_Oshodi",'Conductor say "No change" — but I know say you get ₦50 for that pocket 😤'],["@YabaLeftBoy","Who get charger? My phone don dey 2% since morning"],["@MamaNkechi","Pure water don land. Cold one dey ₦50. Sharp sharp!"],["@GistMeNews","Lagos weather: Sun go shine like say e get vendetta. Drink water 💧"],["@Area_Fada","Who wan buy original iPhone 16 for ₦40k? Na from abroad 👀 (Scam alert ⚠️)"],["@PastorFire","Vigil this Friday! Holy Ghost Fire Assembly. Come with your neighbour 🙏"],["@BarberSalon","God's Time Is Best Barbing Salon: low cut ₦1,500, no shaking 💈"],["@NaijaFootball","Super Eagles go win this one. I feel am for my spirit ⚽🦅"],["@Lagos_Landlord","Tenants wey dey owe, I dey watch una o. Saturday no far 👀"]];class Uy{constructor(e,t){this.s=vu(e),this.h=t,this.acc=0,this.collapsed=!1,e.feed.length||(this.post("@GistMeNews",`Welcome to GistMe, ${e.name}! You don land Lagos. Rent na ${j(So)} every Saturday. No dull o! 🏙️`,"info"),this.post("@LapoPay","Hustle never start? LapoPay fit borrow you up to ₦15,000 — interest small (5% every day 👀).","ad"))}get day(){return Math.floor(this.s.t/1440)+1}get min(){return this.s.t%1440}get hour(){return this.min/60}get weekday(){return Math.floor(this.s.t/1440)%7}get isNight(){const e=this.hour;return e<6||e>=19}get genRunning(){return!this.s.power&&this.s.genOn&&this.s.fuel>0&&(this.s.hasGen||this.s.quietGen)}get homePowered(){return this.s.power||this.genRunning}get danfoFare(){return Jr(200*this.s.fuelFactor)}get fuelPrice(){return Jr(1200*this.s.fuelFactor)}get netWorth(){return this.s.cash-this.s.loan-this.s.rentOwed}get kekeFuelPrice(){return Jr(800*this.s.fuelFactor)}get tier(){let e=Xa[0];for(const t of Xa)this.netWorth>=t.min&&(e=t);return e}timeStr(e=this.s.t){const t=e%1440;return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}dayStr(e=this.s.t){return Iy[Math.floor(e/1440)%7]}rentCountdown(){let e=(6-this.weekday+7)%7;return e===0&&(e=7),e*1440-this.min-(this.weekday===6,0)}get statusPoints(){const e=this.s;return Math.max(0,Math.min(100,Math.round(this.netWorth/1500+e.karma*.4+e.followers/40)))}rel(e){return this.s.rel[e]||0}addRel(e,t){var s,o;if(!e)return 0;const i=Math.max(-100,Math.min(100,this.rel(e)+t));return this.s.rel[e]=i,(o=(s=this.h).onRel)==null||o.call(s,e,t,i),i}priceMul(e){return 1-Math.max(-50,Math.min(50,this.rel(e)))/250}addKarma(e,t){var i,s;this.s.karma=Math.max(-100,Math.min(100,this.s.karma+e)),(s=(i=this.h).onKarma)==null||s.call(i,e,t)}text(e,t,i="msg"){var s,o;this.s.messages.unshift({t:this.s.t,from:e,text:t,kind:i,read:!1}),this.s.messages.length>50&&(this.s.messages.length=50),this.s.unreadMsg++,(o=(s=this.h).onText)==null||o.call(s,{from:e,text:t,kind:i})}useData(e){return this.s.dataMB<e?!1:(this.s.dataMB-=e,!0)}buyData(e){return this.spend(e.price)?(this.s.dataMB+=e.mb,!0):!1}addFollowers(e){var i,s;const t=this.s;t.followers=Math.max(0,t.followers+e);for(let o=t.sponsorsPaid;o<ed.length;o++){const[a,l,r]=ed[o];if(t.followers<a)break;t.sponsorsPaid=o+1,this.earn(r,"sponsor"),this.text(l,`Hello ${t.name}! We see your Clout page (${a}+ followers 🔥). We don send ${j(r)} make you promote us small. Thank you!`,"good"),(s=(i=this.h).toast)==null||s.call(i,`Sponsorship! ${l} pay you ${j(r)} 💸`,"money")}}post(e,t,i="gist"){var s,o;this.s.feed.unshift({t:this.s.t,handle:e,text:t,kind:i}),this.s.feed.length>40&&(this.s.feed.length=40),this.s.unread++,(o=(s=this.h).onPost)==null||o.call(s,{handle:e,text:t,kind:i})}earn(e,t){var i,s;this.s.cash+=e,e>0&&(this.s.stats.earned+=e),(s=(i=this.h).onCash)==null||s.call(i,e,t)}spend(e){var t,i;return this.s.cash<e?!1:(this.s.cash-=e,(i=(t=this.h).onCash)==null||i.call(t,-e),!0)}update(e){for(this.acc+=e*Dy;this.acc>=1;)this.acc-=1,this.tick({})}advance(e,t={}){for(let i=0;i<e;i++)this.tick(t)}tick(e){var l,r;const t=this.s;if(t.evicted)return;t.t+=1;const i=c=>c/60,s=!!e.sleeping,o=!!e.working;t.hunger=Un(t.hunger-i(s?2:o?7:4.5)),s?t.energy=Un(t.energy+i(this.homePowered?13:8)):t.energy=Un(t.energy-i(o?9:3.5)-(t.hunger<=0?i(4):0));let a=62;t.hunger<25&&(a-=25),t.energy<20&&(a-=15),!t.power&&this.isNight&&!this.genRunning&&(a-=12),t.rentOwed>0&&this.weekday>=4&&(a-=8),t.loan>0&&(a-=5),t.mood=Un(t.mood+(a-t.mood)*i(.12)),s&&!this.homePowered&&(t.mood=Un(t.mood-i(1.5))),t.t%60===0&&this.onHour(e),t.t%1440===0&&this.onDay(),!s&&t.energy<=0&&!this.collapsed&&(this.collapsed=!0,(r=(l=this.h).onCollapse)==null||r.call(l))}onHour(e){var s,o,a,l,r,c,d,p,f,h;const t=this.s,i=Math.round(this.hour)%24;if(t.power){const y=this.isNight?.2:.1;Math.random()<y&&this.setPower(!1)}else Math.random()<.3&&this.setPower(!0);if(i===6&&(t.genComplaints=0),!t.rain&&Math.random()<.05?(t.rain=!0,(o=(s=this.h).onRain)==null||o.call(s,!0),this.post("@LagosWeather","Rain don start! 🌧️ Gutter go soon overflow. Carry umbrella o","alert")):t.rain&&Math.random()<.35&&(t.rain=!1,(l=(a=this.h).onRain)==null||l.call(a,!1)),i===0&&(t.dataMB=Math.max(0,t.dataMB-20)),this.genRunning&&(i>=22||i<6)&&!t.quietGen&&Math.random()<.55){t.genComplaints++;const y=Ss(["Mama Chidi (Room 2)","Bros Femi (Room 5)","Iya Ibeji (Room 3)","Mr Okon (Room 6)"]),m=["Abeg off that your gen! Na 1am! 😡",'Your "I pass my neighbour" no let my pikin sleep o',"Smoke from your gen don enter my room!","If you no off that gen, I go report you to Baba Ade!"];this.text(y,Ss(m),"bad"),t.genComplaints===3&&(t.cash=Math.max(0,t.cash-1e3),this.text("Baba Ade (Landlord)",`Neighbours don complain 3 times about your gen noise. I don fine you ${j(1e3)}. Buy quiet gen or sleep for heat!`,"bad"),(c=(r=this.h).toast)==null||c.call(r,`Landlord fine you ${j(1e3)} for gen noise! 🔊`,"bad"),this.addKarma(-3))}t.loan>0&&t.loanDue&&t.t>=t.loanDue&&i%6===0&&this.recoveryStep(),this.genRunning&&(t.fuel=Math.max(0,t.fuel-1),t.fuel===0&&((p=(d=this.h).toast)==null||p.call(d,"Generator don finish fuel! 😩","warn"),this.post("@You","Gen don off. Fuel don finish. Heat go kill me tonight 🥵","gist"))),t.marketBonusUntil&&t.t>=t.marketBonusUntil&&(t.marketBonus=1,t.marketBonusUntil=0),this.weekday===5&&i===12&&t.rentOwed>0&&!t.warnedSat&&(t.warnedSat=!0,this.post("@Baba_Ade_Landlord",`${t.name}, today na Saturday o. ${j(t.rentOwed)} rent dey due before midnight. I no wan hear story! 😠`,"alert"),(h=(f=this.h).toast)==null||h.call(f,`Rent due tonight: ${j(t.rentOwed)}!`,"bad")),t.t>=t.nextNews&&!e.sleeping&&(this.newsEvent(),t.nextNews=t.t+180+Math.floor(Math.random()*180))}setPower(e){var i,s,o,a;const t=this.s;t.power!==e&&(t.power=e,e?(this.post("@Everybody",Ss(["UP NEPA!!! 💡🎉","Light don come! Make I quickly charge my phone 🔌","NEPA bring light! Everybody shout for street 😂"]),"good"),(a=(o=this.h).onPower)==null||a.call(o,!0)):(this.post("@NEPA_Updates",Ss(["Due to technical fault, power supply don go. We regret any inconvenience 🙏","Grid don collapse again. Una get gen?","Load shedding in progress. Light go come back soon (maybe) 🕯️"]),"alert"),(s=(i=this.h).onPower)==null||s.call(i,!1)))}onDay(){var i,s,o,a;const e=this.s,t=this.weekday;if(t===6)if(e.rentOwed>0){if(e.strikes++,e.rentOwed+=Zh,e.strikes>=2){e.evicted=!0,this.post("@Baba_Ade_Landlord","Pack your load commot for my house! I don give you enough chance. 🧳","alert"),(s=(i=this.h).onEvict)==null||s.call(i);return}this.post("@Baba_Ade_Landlord",`You no pay rent! I don add ${j(Zh)} late fee. Next Saturday if you no pay, I go throw your load comot! ⚠️`,"alert"),(a=(o=this.h).onEvictionWarning)==null||a.call(o)}else this.post("@Baba_Ade_Landlord","Rent don enter. God bless you my pikin 🙏","good");if(t===0&&(e.rentOwed+=So,e.warnedSat=!1,this.post("@Baba_Ade_Landlord",`New week, new rent: ${j(So)} due Saturday. Hustle well!`,"info")),e.loan>0){const l=Math.ceil(e.loan*gu);e.loan+=l,this.post("@LapoPay",`Daily interest: +${j(l)}. Your LapoPay balance na ${j(e.loan)}. Pay quick-quick before we call your contacts 📞`,"ad")}}newsEvent(){const e=this.s,t=[{w:3,run:()=>{var a,l;const o=Ss([1.2,1.3,1.5]);e.fuelFactor=Math.min(3,+(e.fuelFactor*o).toFixed(2)),e.fuelHikeT=e.t,this.post("@GistMeNews",`BREAKING: Petrol price don jump again! ⛽ Danfo fare don rise to ${j(this.danfoFare)}. Gen fuel now ${j(this.fuelPrice)}. Conductors dey shout "No change!" 😩`,"alert"),(l=(a=this.h).toast)==null||l.call(a,`Fuel price hike! Danfo fare now ${j(this.danfoFare)}`,"bad")}},{w:e.fuelFactor>1.1?1.5:0,run:()=>{e.fuelFactor=Math.max(1,+(e.fuelFactor*.85).toFixed(2)),this.post("@GistMeNews",`Petrol price don small drop. Danfo fare now ${j(this.danfoFare)}. We thank God 🙏`,"good")}},{w:2,run:()=>{var o,a;e.marketBonus=1.5,e.marketBonusUntil=e.t+1440,this.post("@Mile12Market","Tomato scarcity for Mile 12! 🍅 Prices up 50% for next 24 hours. Market people, una time don reach!","good"),(a=(o=this.h).toast)==null||a.call(o,"Market prices up 50% today! 🍅","good")}},{w:e.cash>400?1:0,run:()=>{var o,a;e.cash-=200,e.mood=Un(e.mood-6),this.post("@You",'Agbero collect ₦200 "owo ile" from me for junction. E pain me but wetin I go do? 😤',"alert"),(a=(o=this.h).toast)==null||a.call(o,"Agbero collect ₦200 from you 😤","bad")}},{w:1,run:()=>{var o,a;e.hunger=Un(e.hunger+15),e.mood=Un(e.mood+10),this.post("@AdeniranStreet","Owambe for street! 🎉 Dem share small chops and asun — you collect your own. Belle don sweet!","good"),(a=(o=this.h).toast)==null||a.call(o,"Owambe small chops! +Belle +Mood","good")}},{w:1,run:()=>{e.mood=Un(e.mood-5),this.post("@LagosWeather","Rain don fall! 🌧️ Gutter don overflow for Ojuelegba. Traffic for Ikorodu Road na 3 hours.","info")}},{w:1,run:()=>{e.mood=Un(e.mood+8),this.post("@GistMeTrends",`${e.name} Ankara fit don trend for GistMe! 🔥 312 likes. Odogwu!`,"good")}},{w:1,run:()=>this.post("@MinistryOfPower","Government promise 24 hours light from next week. 💡 Lagos people: 😂😂😂","info")},{w:1,run:()=>this.post("@NairaWatch","Naira don fall again for parallel market 📉. Mama Nkechi don increase bread price by ₦100.","info")},{w:3,run:()=>{const[o,a]=Ss(Ny);this.post(o,a,"gist")}}],i=t.reduce((o,a)=>o+a.w,0);let s=Math.random()*i;for(const o of t)if(s-=o.w,s<=0){o.run();break}}recoveryStep(){var t,i,s,o;const e=this.s;e.recovery++,e.recovery===1?this.text("LapoPay Recovery",`Dear ${e.name}, your repayment of ${j(e.loan)} don pass due date. Pay now to avoid "further action" 🙂`,"bad"):e.recovery===2?(this.text("LapoPay Recovery","We don call you 3 times. You no pick. We go soon contact your family and friends 📞","bad"),(i=(t=this.h).onRecoveryCall)==null||i.call(t)):e.recovery>=3&&(this.text("LapoPay Recovery","Our field agents dey come meet you NOW. 🕶️","bad"),(o=(s=this.h).onRecoveryVisit)==null||o.call(s))}borrow(e){const t=this.s;return t.loan+e>15e3?!1:((!t.loanDue||t.loan===0)&&(t.loanDue=t.t+3*1440),t.loan+=Math.round(e*1.1),this.earn(e,"LapoPay loan"),this.post("@LapoPay",`Congrats! ${j(e)} don land your wallet. (10% processing fee added — na small thing 😅)`,"ad"),!0)}repay(e){const t=this.s;return e=Math.min(e,t.loan,t.cash),e<=0?0:(t.cash-=e,t.loan-=e,(e>=1e3||t.loan===0)&&(t.loanDue=t.t+3*1440,t.recovery=0),t.loan===0&&(t.loanDue=0,this.addKarma(2)),t.loan===0&&this.post("@LapoPay","Loan cleared! You be correct customer 👏 Come borrow again anytime.","ad"),e)}payRent(e){const t=this.s;return e=Math.min(e,t.rentOwed,t.cash),e<=0?0:(t.cash-=e,t.rentOwed-=e,t.rentOwed===0&&(t.strikes=0,this.post("@Baba_Ade_Landlord","Rent don complete. Correct tenant! 🙏","good")),e)}buyFuel(){return!Oy(this.s)||!this.spend(this.fuelPrice)?!1:(this.s.fuel=Math.min(24,this.s.fuel+5),!0)}}const Oy=n=>n.hasGen||n.quietGen;class Fy{constructor(){this.muted=localStorage.getItem("wahala.muted")==="1",this.radioOn=!1,this.ctx=null,this.loops={}}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.muted?0:.8,this.master.connect(t.destination);const i=t.sampleRate*2,s=t.createBuffer(1,i,t.sampleRate),o=s.getChannelData(0);for(let a=0;a<i;a++)o[a]=Math.random()*2-1;this.noiseBuf=s,this.loops.gen=this.makeLoop(()=>{const a=t.createGain();a.gain.value=0;const l=t.createOscillator();l.type="sawtooth",l.frequency.value=52;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=260;const c=t.createOscillator();c.frequency.value=11;const d=t.createGain();d.gain.value=.4;const p=t.createGain();p.gain.value=.6,c.connect(d),d.connect(p.gain),l.connect(r),r.connect(p),p.connect(a),l.start(),c.start();const f=this.noise(),h=t.createBiquadFilter();h.type="bandpass",h.frequency.value=900,h.Q.value=.8;const y=t.createGain();return y.gain.value=.12,f.connect(h),h.connect(y),y.connect(a),a.connect(this.master),a}),this.loops.crowd=this.makeLoop(()=>{const a=t.createGain();a.gain.value=0;const l=this.noise(),r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=700,r.Q.value=.6;const c=t.createOscillator();c.frequency.value=.7;const d=t.createGain();return d.gain.value=300,c.connect(d),d.connect(r.frequency),c.start(),l.connect(r),r.connect(a),a.connect(this.master),a}),this.loops.engine=this.makeLoop(()=>{const a=t.createGain();a.gain.value=0;const l=t.createOscillator();l.type="square",l.frequency.value=38;const r=t.createBiquadFilter();return r.type="lowpass",r.frequency.value=420,l.connect(r),r.connect(a),a.connect(this.master),l.start(),a.osc=l,a}),this.radioGain=t.createGain(),this.radioGain.gain.value=0,this.radioGain.connect(this.master),this.nextBeat=0,this.step=0}makeLoop(e){return e()}noise(){const e=this.ctx.createBufferSource();return e.buffer=this.noiseBuf,e.loop=!0,e.start(),e}setMuted(e){this.muted=e,localStorage.setItem("wahala.muted",e?"1":"0"),this.master&&this.master.gain.setTargetAtTime(e?0:.8,this.ctx.currentTime,.05)}level(e,t){const i=this.loops[e];i&&i.gain.setTargetAtTime(Math.max(0,t),this.ctx.currentTime,.15)}engineRate(e){const t=this.loops.engine;t&&t.osc.frequency.setTargetAtTime(34+Math.abs(e)*5,this.ctx.currentTime,.1)}env(e,t,i,s,o){e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(s,t+i),e.gain.exponentialRampToValueAtTime(1e-4,t+o)}tone(e,t=.15,i="sine",s=.2,o=0,a=0){if(!this.ctx)return;const l=this.ctx,r=l.currentTime+o,c=l.createOscillator(),d=l.createGain();c.type=i,c.frequency.setValueAtTime(e,r),a&&c.frequency.exponentialRampToValueAtTime(Math.max(20,e+a),r+t),this.env(d,r,.01,s,t),c.connect(d),d.connect(this.master),c.start(r),c.stop(r+t+.05)}click(){this.tone(900,.05,"triangle",.08)}cash(){this.tone(1320,.08,"square",.07),this.tone(1760,.18,"square",.07,.07)}ping(){this.tone(880,.1,"sine",.15),this.tone(1175,.16,"sine",.15,.1)}bad(){this.tone(300,.2,"sawtooth",.08,0,-120)}ring(){for(let e=0;e<3;e++)this.tone(740,.12,"square",.06,e*.5),this.tone(988,.12,"square",.06,e*.5+.14)}horn(e=.18){this.tone(415,.45,"square",e*.5),this.tone(523,.45,"square",e*.5),this.tone(415,.25,"square",e*.5,.55),this.tone(523,.25,"square",e*.5,.55)}conductor(e=.25){if(!this.ctx)return;const t=this.ctx,i=[[300,.18],[420,.14],[360,.24]];for(let s=0;s<2;s++)i.forEach(([o,a],l)=>{const r=t.currentTime+s*.75+l*.2,c=t.createOscillator();c.type="sawtooth",c.frequency.setValueAtTime(o,r),c.frequency.linearRampToValueAtTime(o*.92,r+a);const d=t.createBiquadFilter();d.type="bandpass",d.frequency.value=l===1?1800:700,d.Q.value=5;const p=t.createGain();this.env(p,r,.02,e,a),c.connect(d),d.connect(p),p.connect(this.master),c.start(r),c.stop(r+a+.05)})}step_(){if(!this.ctx)return;const e=this.ctx,t=e.currentTime,i=e.createBufferSource();i.buffer=this.noiseBuf;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=600;const o=e.createGain();this.env(o,t,.005,.12,.07),i.connect(s),s.connect(o),o.connect(this.master),i.start(t,Math.random()),i.stop(t+.1)}kick(){this.tone(160,.12,"sine",.3,0,-110)}whistle(){this.tone(2200,.25,"sine",.12),this.tone(2400,.35,"sine",.12,.28)}cheer(){if(!this.ctx)return;const e=this.ctx,t=e.currentTime,i=e.createBufferSource();i.buffer=this.noiseBuf;const s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=1200;const o=e.createGain();this.env(o,t,.1,.25,1.6),i.connect(s),s.connect(o),o.connect(this.master),i.start(t),i.stop(t+1.8)}setRadio(e){this.radioOn=e,this.radioGain&&this.radioGain.gain.setTargetAtTime(e?.5:0,this.ctx.currentTime,.2),e&&this.ctx&&(this.nextBeat=Math.max(this.nextBeat,this.ctx.currentTime+.05))}schedule(){if(!this.ctx||!this.radioOn)return;const e=this.ctx,t=60/104/4,i=[[220,277,330],[196,247,294],[175,220,262],[196,247,294]],s=[55,49,43.65,49];for(;this.nextBeat<e.currentTime+.2;){const o=this.nextBeat,a=this.step%16,l=Math.floor(this.step/16)%4,r=this.radioGain,c=(p,f,h,y,m=0)=>{const u=e.createOscillator(),g=e.createGain();u.type=h,u.frequency.setValueAtTime(p,o),m&&u.frequency.exponentialRampToValueAtTime(Math.max(20,p+m),o+f),this.env(g,o,.005,y,f),u.connect(g),g.connect(r),u.start(o),u.stop(o+f+.05)},d=(p,f,h)=>{const y=e.createBufferSource();y.buffer=this.noiseBuf;const m=e.createBiquadFilter();m.type="highpass",m.frequency.value=p;const u=e.createGain();this.env(u,o,.002,h,f),y.connect(m),m.connect(u),u.connect(r),y.start(o,Math.random()),y.stop(o+f+.02)};[0,7,10].includes(a)&&c(110,.18,"sine",.5,-70),[4,12].includes(a)&&d(1500,.12,.25),d(7e3,.03,a%2?.05:.09),[3,6,11,14].includes(a)&&c(s[l]*2,.22,"sine",.35,-30),[2,5,9,13].includes(a)&&i[l].forEach(p=>c(p*2,.12,"triangle",.05)),a===0&&l%2===0&&[660,587,494,440].forEach((p,f)=>{const h=f*t*3,y=e.createOscillator(),m=e.createGain();y.type="sine",y.frequency.value=p,m.gain.setValueAtTime(1e-4,o+h),m.gain.exponentialRampToValueAtTime(.06,o+h+.02),m.gain.exponentialRampToValueAtTime(1e-4,o+h+.3),y.connect(m),m.connect(r),y.start(o+h),y.stop(o+h+.35)}),this.nextBeat+=t,this.step++}}}const Zn=n=>Math.max(50,Math.round(n/50)*50),_i=n=>n[Math.floor(Math.random()*n.length)],td=[["Ojuelegba Stop",-58,3.6],["Yaba Market",-24,3.6],["CMS",52,3.6],["Mama Put Buka",18,-3.6],["Face-me-I-face-you",-30,-3.6],["Holy Ghost Fire",13,3.6],["Mega Fuel",64,3.6],["Estate Gate",1.8,-24],["The Set",1.8,22],["Lagoon",-78,-3.6]],ya=10;function By(n){const{world:e}=n,t={G:n},i={mesh:e.playerKeke,pos:e.playerKeke.position,h:Math.PI,speed:0,passenger:null,requests:[],driving:!1};e.playerKeke.rotation.y=i.h;const s={minX:0,maxX:0,minZ:0,maxZ:0};e.colliders.push(s);const o=()=>{const v=i.pos;Object.assign(s,i.driving?{minX:1e4,maxX:1e4,minZ:1e4,maxZ:1e4}:{minX:v.x-.9,maxX:v.x+.9,minZ:v.z-.9,maxZ:v.z+.9})};o();const a=new ts(1.5,.12,6,28),l=v=>{const x=new Ae(a,Y(v,{emissive:v,unique:!0}));x.rotation.x=Math.PI/2,x.position.y=.15;const R=new Ae(new Wt(1.4,1.4,6,20,1,!0),new Gs({color:v,transparent:!0,opacity:.18,depthWrite:!1,side:Hn}));return R.rotation.x=-Math.PI/2,R.position.z=-3,x.add(R),e.root.add(x),x},r=new Ae(new ko(.35,.9,8),Y("#ffd23f",{emissive:"#ffb000",unique:!0}));r.visible=!1,e.root.add(r);const c=v=>new P(v[1],0,v[2]);function d(){const v=_i(td.filter(I=>!i.requests.some(N=>N.spot===I))),x=l("#ffd23f");x.position.set(v[1],.15,v[2]);const R=vn({...Nn(),name:"Passenger"});R.position.set(v[1],0,v[2]+Math.sign(v[2]||1)*2.2),e.root.add(R),i.requests.push({spot:v,ring:x,npc:R,t:0})}function p(){for(const v of i.requests)e.root.remove(v.ring),e.root.remove(v.npc);i.requests=[]}t.enterKeke=()=>{for(i.driving=!0,o(),n.player.position.set(.45,.85,0),n.player.rotation.set(0,Math.PI/2,0),n.player.scale.setScalar(.85),si(n.player),i.mesh.add(n.player),n.audio.init(),n.audio.level("engine",.12);i.requests.length<2;)d();n.startActivity(f),n.toast("You don enter your Keke! Find passengers for yellow rings 🛺","good")},t.exitKeke=()=>{if(i.passenger){n.toast("Drop your passenger first o!","bad");return}i.driving=!1,i.speed=0,i.mesh.remove(n.player),n.scene.add(n.player),n.player.scale.setScalar(1),n.player.userData.sitting=!1;const v=new P(-Math.sin(i.h),0,-Math.cos(i.h)).multiplyScalar(1.6);n.pos.copy(i.pos).add(v),n.pos.y=0,o(),n.audio.level("engine",0),p(),r.visible=!1,n.endActivity(),n.save()};const f={name:"keke",camDist:11,camPitch:.5,buttons:()=>[{label:"Comot 🚶",key:"x",onClick:t.exitKeke}],update(v){const x=n.sim.s,R=n.input(),I=x.kekeFuel>0;let N=R.iy;I||(N=Math.min(0,N)),N>0?i.speed+=N*6.5*v:N<0?i.speed+=N*(i.speed>0?12:4)*v:i.speed*=Math.exp(-1.1*v);const k=R.run?12.5:10;i.speed=Tt.clamp(i.speed,-3,k),i.h+=-R.ix*1.9*v*Tt.clamp(i.speed/4,-1,1);const U=new P(Math.cos(i.h),0,-Math.sin(i.h)),G=i.pos.clone();i.pos.addScaledVector(U,i.speed*v);const V=i.pos.clone();e.resolve(i.pos,1.05),V.distanceTo(i.pos)>.02&&(i.speed*=.6),i.pos.y=Math.abs(Math.sin(n.time*14))*.03*Math.min(1,Math.abs(i.speed)),i.mesh.rotation.y=i.h,x.kekeFuel=Math.max(0,x.kekeFuel-G.distanceTo(i.pos)*.011),!I&&Math.random()<.01&&n.toast("Fuel don finish! Push am go Mega Fuel 😩","bad"),n.pos.copy(i.pos),n.moveAmt=0,n.camYawTo(Math.atan2(-Math.cos(i.h),Math.sin(i.h)),v*2.5),n.audio.engineRate(i.speed),n.audio.level("engine",.06+Math.abs(i.speed)*.012);const ne=Math.abs(i.speed)<3.5;let se=null;if(i.passenger){const Be=i.passenger;Be.ring.rotation.z+=v,Be.time+=v,se=c(Be.dest),i.pos.distanceTo(se)<3.4&&ne&&y()}else{let Be=1e9;for(const K of i.requests){K.ring.rotation.z+=v,K.t+=v,K.t>4&&Math.random()<v*.3&&pe(K.npc,_i(["Keke! Keke!","Wait o!","I dey go somewhere!"]),2);const Q=i.pos.distanceTo(c(K.spot));if(Q<Be&&(Be=Q,se=c(K.spot)),Q<3.2&&ne){h(K);break}}}if(se){r.visible=!0,r.position.set(i.pos.x,3.2+Math.sin(n.time*4)*.15,i.pos.z);const Be=se.clone().sub(i.pos);Be.y=0,r.rotation.set(0,0,0),r.quaternion.setFromUnitVectors(new P(0,1,0),Be.normalize())}Math.abs(i.pos.x)<6.5&&Math.abs(i.pos.z)<6.5&&x.t>x.tollCD&&!n.isBusy()&&u(!1);const ce=i.pos.distanceTo(e.fuelSpot)<4.5&&ne;n.ctxHot(ce?{label:`Buy fuel ⛽ (${j(n.sim.kekeFuelPrice)}/L)`,act:m}:null);const $e=Math.round(x.kekeFuel/ya*100);n.actHud(`<b>🛺 Keke</b> • ${Math.round(Math.abs(i.speed)*3.6)} km/h<div class="mini-bar"><i style="width:${$e}%;background:${$e>30?"#06d6a0":"#e71d36"}"></i></div><small>Fuel ${x.kekeFuel.toFixed(1)}L / ${ya}L</small><br>${i.passenger?`👤 Passenger to <b>${i.passenger.dest[0]}</b> • ${j(i.passenger.fare)}`:"🟡 Pick passenger for yellow ring"}`)},onEnd(){n.actHud(""),n.ctxHot(null)}};function h(v){const x=td.filter(U=>U!==v.spot&&Math.hypot(U[1]-v.spot[1],U[2]-v.spot[2])>25),R=_i(x),I=Math.hypot(R[1]-v.spot[1],R[2]-v.spot[2]),N=Zn((150+I*6)*Math.sqrt(n.sim.s.fuelFactor));e.root.remove(v.ring),i.requests=i.requests.filter(U=>U!==v),v.npc.position.set(-.55,.85,0),v.npc.rotation.set(0,Math.PI/2,0),v.npc.scale.setScalar(.8),si(v.npc),i.mesh.add(v.npc);const k=l("#06d6a0");k.position.set(R[1],.15,R[2]),i.passenger={npc:v.npc,dest:R,fare:N,ring:k,time:0,limit:I/6+18},pe(v.npc,`Take me go ${R[0]}!`,3),n.audio.ping(),n.toast(`Passenger: "${R[0]}, ${j(N)}. Oya quick!"`,"good")}function y(){const v=i.passenger,x=n.sim.s,R=v.time<v.limit?Zn(v.fare*.2):0;for(n.sim.earn(v.fare+R,"keke"),x.statsV2.trips++,x.kekeTrips++,R&&n.sim.addKarma(1),i.mesh.remove(v.npc),e.root.remove(v.ring),n.audio.cash(),n.toast(`+${j(v.fare)}${R?` +${j(R)} tip (you fast!)`:""} 🛺`,"money"),i.passenger=null,n.sim.advance(15);i.requests.length<2;)d();n.save()}function m(){const v=n.sim.s,x=n.sim.kekeFuelPrice,R=Math.max(0,ya-v.kekeFuel),I=N=>{N=Math.min(N,R);const k=Zn(N*x);if(!n.sim.spend(k))return n.toast("Money no reach 😩","bad");v.kekeFuel+=N,n.audio.cash(),n.toast(`+${N.toFixed(1)}L fuel ⛽`,"good"),n.save()};n.modal("Mega Fuel ⛽",`Attendant: "How many litres?" • Price ${j(x)}/L • Tank ${v.kekeFuel.toFixed(1)}/${ya}L`,[{label:"2 litres",price:j(Zn(2*x)),disabled:R<.1||v.cash<Zn(2*x),onClick:()=>I(2)},{label:"5 litres",price:j(Zn(5*x)),disabled:R<.1||v.cash<Zn(Math.min(5,R)*x),onClick:()=>I(5)},{label:"Fill tank",price:j(Zn(R*x)),disabled:R<.1||v.cash<Zn(R*x),onClick:()=>I(R)},{label:"Later",close:!0}])}t.fuelMenu=m;function u(v,x){var k;const R=n.sim.s;R.tollCD=R.t+180,i.speed=0;const I=R.agberoScared>R.t,N=v?500:I?150:300;return(k=e.agberos)==null||k.forEach((U,G)=>setTimeout(()=>pe(U.mesh,_i(["Owo union! Bring am!","Driver, you no see us?","Na ₦"+N+" o!"]),2.5),G*400)),n.audio.horn(.1),new Promise(U=>{const G=(ne,se)=>{n.toast(ne,se),n.save(),U()},V=ne=>{if(v)x.v=Math.max(0,x.v-ne);else{const se=Math.min(ne,R.cash);R.cash-=se}};n.modal("Agbero Union 🧾",`${v?"Danfo":"Keke"} toll! Agbero Sunday: "${I?"Ehen, na you get camera... just ₦"+N+", abeg":"Oya bring owo union ₦"+N+"! No story!"}"`,[{label:`Pay ${j(N)}`,sub:"Peace of mind • -2 Mind",onClick:()=>{V(N),R.mood=Math.max(0,R.mood-2),G("You pay agbero. Lagos tax 🙄","")}},{label:"Zoom comot (evade) 🏃",sub:"Risky: dem fit chase you",onClick:()=>{const ne=.5+R.karma/400;Math.random()<ne?(R.mood=Math.min(100,R.mood+3),n.sim.addKarma(-1),G("You escape! Agbero dey curse your generation 😂","good")):(V(N*2),R.mood=Math.max(0,R.mood-10),R.energy=Math.max(0,R.energy-5),G(`Dem catch you! Collect ${j(N*2)} and slap your Keke 😭`,"bad"))}},{label:"Argue / fight 👊",sub:"Roll based on your Mind & karma",onClick:()=>{const ne=.35+R.mood/400+(R.karma>20?.1:0);Math.random()<ne?(R.mood=Math.min(100,R.mood+6),n.sim.addKarma(-2),G("You shout dem down! Dem fear you today 💪","good")):(V(Math.round(N*2.5)),R.energy=Math.max(0,R.energy-15),R.mood=Math.max(0,R.mood-15),n.sim.addKarma(-3),G(`Dem beat you small and collect ${j(N*2.5)} 🤕`,"bad"))}}])})}t.agberoToll=u;const g={active:!1};t.startShift=()=>{const v=n.sim.s,x=n.sim.hour;if(x<6||x>=20)return n.modal("No work now 🌙","Oga Driver don park. Conductor shift na 6am – 8pm.",[{label:"Okay",close:!0}]);if(v.energy<25)return n.modal("Your body don tire 😮‍💨","Conductor work need at least 25% Body.",[{label:"Okay",close:!0}]);n.modal("Oga Driver needs conductor 🚌",'"My conductor no come today. You fit hang for door? You go collect fare, give correct change. I go pay you ₦1,000 + 35% of wetin you collect."',[{label:"Oya, I dey hang! 🙋🏾",onClick:M},{label:"No be today",close:!0}])};function M(){const v=e.vehicles.find(x=>x.type==="danfo");v.conductor=!0,v.turn=null,v.dir=1,v.lastStop=null,v.wait=0,v.speed=0,v.mesh.position.set(-70,0,2.4),v.mesh.rotation.y=0,Object.assign(g,{active:!0,v,purse:{v:0},stops:0,tolled:!1,served:0,wrong:0}),n.player.position.set(.7,.4,1.12),n.player.rotation.set(0,0,0),n.player.scale.setScalar(.9),v.mesh.add(n.player),n.audio.init(),n.audio.conductor(),n.startActivity(w)}e.onConductorStop=(v,x)=>{if(!g.active||v!==g.v)return;v.wait=9999,n.audio.conductor();const R=2+Math.floor(Math.random()*2);L(x,R).then(()=>{g.stops++,n.sim.advance(20,{working:!0}),g.stops>=4?E():v.wait=.6})};const w={name:"conductor",camDist:12,camPitch:.45,buttons:()=>[{label:"End shift 🛑",key:"x",onClick:()=>{n.isBusy()||E()}}],update(v){const x=g.v;n.pos.copy(x.mesh.position),n.moveAmt=0,n.camYawTo(Math.atan2(-Math.cos(x.mesh.rotation.y),Math.sin(x.mesh.rotation.y))+.5,v*2),!g.tolled&&Math.abs(x.mesh.position.x)<4&&!x.turn&&(g.tolled=!0,x.wait=9999,u(!0,g.purse).then(()=>x.wait=.4)),n.actHud(`<b>🚌 Conductor shift</b><br>Stops: ${g.stops}/4 • Purse: <b>${j(g.purse.v)}</b><br><small>Served ${g.served} • Wahala ${g.wrong}</small>`)},onEnd(){n.actHud("")}};function E(){if(!g.active)return;const v=g.v;g.active=!1,v.conductor=!1,v.wait=.5,v.mesh.remove(n.player),n.scene.add(n.player),n.player.scale.setScalar(1);const x=1e3+Math.round(g.purse.v*.35);n.pos.set(v.mesh.position.x,.18,v.dir>0?5.6:-5.6),n.sim.earn(x,"conductor"),n.sim.s.statsV2.shifts++,n.sim.s.energy=Math.max(0,n.sim.s.energy-15),n.endActivity(),n.audio.cash(),n.modal("Shift don end 🚌",`You serve <b>${g.served}</b> passengers (${g.wrong} wahala). Purse: ${j(g.purse.v)}. Oga Driver pay you <b>${j(x)}</b>.`,[{label:"Collect ➜",close:!0}]),n.save()}function L(v,x){return new Promise(R=>{n.setBusy(!0);const I=document.getElementById("market");I.classList.remove("hidden");let N=0,k=null;const U=()=>{if(N>=x){clearInterval(k),I.classList.add("hidden"),I.innerHTML="",n.setBusy(!1),R();return}N++;const G=n.sim.danfoFare*(1+Math.floor(Math.random()*2)),V=_i([500,1e3].filter(Q=>Q>G).concat(G<200?[200]:[])),ne=V-G;let se=0,ce=10;const $e=_i(["👩🏾","👨🏿","👵🏾","👴🏿","🧕🏾","🧔🏾"]);I.innerHTML=`<div class="mk"><div class="mk-top"><span>🚌 ${v.name} stop • Passenger ${N}/${x}</span><span class="timer" id="cgT">10s</span></div>
          <div class="cust"><div class="face">${$e}</div><div><div class="say">"Fare na ${j(G)}. Take ${j(V)}, give me my change!"</div><div class="who">Change wey you owe: ? 🤔</div></div></div>
          <div class="items" style="grid-template-columns:repeat(4,1fr)">${[50,100,200,500].map(Q=>`<button class="item" data-c="${Q}"><span class="ic" style="background:#9be7a4">₦</span>${j(Q)}</button>`).join("")}</div>
          <div class="basket" id="cgB">Change: ₦0</div>
          <div class="btn-row"><button class="btn" id="cgC">↺ Clear</button><button class="btn green" id="cgG">✔ Give change</button></div></div>`;const Be=I.querySelector("#cgB");I.querySelectorAll("[data-c]").forEach(Q=>Q.addEventListener("pointerdown",Me=>{Me.preventDefault(),se+=+Q.dataset.c,Be.textContent="Change: "+j(se),n.audio.click()})),I.querySelector("#cgC").onclick=()=>{se=0,Be.textContent="Change: ₦0"};const K=Q=>{clearInterval(k),g.served++,n.toast(Q[0],Q[1]),setTimeout(U,250)};I.querySelector("#cgG").onclick=()=>{se===ne?(g.purse.v+=G,K([`Correct change! +${j(G)} for purse`,"good"])):se<ne?(g.purse.v+=G,g.wrong++,n.sim.addKarma(-1),n.sim.s.mood=Math.max(0,n.sim.s.mood-2),K(['Passenger: "My change no complete o! Thief!" 😤 (-karma)',"bad"])):(g.purse.v+=Math.max(0,G-(se-ne)),g.wrong++,K([`You give extra ${j(se-ne)}! Passenger don waka 😅`,"warn"]))},clearInterval(k),k=setInterval(()=>{ce--;const Q=I.querySelector("#cgT");Q&&(Q.textContent=ce+"s"),ce<=0&&(g.wrong++,K(['Passenger vex: "You too slow!" no pay 😒',"bad"]))},1e3)};U()})}const b=new ht,_=new Ae(new Wt(.32,.28,.06,16),Y("#c0c4cc"));b.add(_);for(let v=0;v<6;v++){const x=new Ae(new qe(.1,.06,.14),Y(v%2?"#bde0fe":"#ffd23f"));x.position.set(Math.cos(v)*.16,.06,Math.sin(v)*.16),b.add(x)}b.position.y=.52,n.player.userData.head.add(b),t.attachTray=v=>{v.userData.head.add(b)},t.stockMenu=()=>{const v=n.sim.s;n.modal("Mama Nkechi Provisions 🛍️",`Buy stock to hawk. You get: 💧 ${v.stock.water} pure water • 🍪 ${v.stock.gala} gala`,[{label:"Bag of pure water (20 sachets)",sub:"Sell ₦50 each",price:j(400),disabled:v.cash<400,onClick:()=>{n.sim.spend(400),v.stock.water+=20,n.toast("Pure water don land your tray 💧","good")}},{label:"Pack of gala (10)",sub:"Sell ₦150 each",price:j(700),disabled:v.cash<700,onClick:()=>{n.sim.spend(700),v.stock.gala+=10,n.toast("Gala don land your tray 🍪","good")}},{label:"Comot",close:!0}])};const S=new WeakMap;t.hawkHot=()=>{const v=n.sim.s;if(v.stock.water+v.stock.gala<=0)return null;const x=n.pos;let R=null,I=1e9;for(const k of e.walkers){if(k.conv)continue;const U=Math.hypot(k.mesh.position.x-x.x,k.mesh.position.z-x.z);U<1.9&&U<I&&(S.get(k)||0)<n.time&&(I=U,R={kind:"walker",w:k})}for(const k of e.vehicles){if(k.speed>.6||k.mesh.userData.isPlayer)continue;const U=Math.hypot(k.mesh.position.x-x.x,k.mesh.position.z-x.z);U<3.6&&U<I&&(S.get(k)||0)<n.time&&(I=U,R={kind:"vehicle",v:k})}if(!R)return null;const N=v.stock.water?"💧 Pure water":"🍪 Gala";return{label:R.kind==="walker"?`Hawk ${N} to ${R.w.name}`:`Hawk ${N} for traffic 🚦`,act:()=>C(R)}};function C(v){const x=n.sim.s,R=v.w||v.v;S.set(R,n.time+40);const I=.55+x.karma/300,N=v.kind==="vehicle"?1+Math.floor(Math.random()*4):1+Math.floor(Math.random()*2);if(Math.random()>I){v.w&&pe(v.w.mesh,_i(["I no need am","Abeg comot","Next time"]),2),n.toast("Dem no buy 🙅🏾");return}let k=0,U=0;for(let G=0;G<N;G++)x.stock.water>0&&(Math.random()<.6||!x.stock.gala)?(x.stock.water--,k+=50,U++):x.stock.gala>0&&(x.stock.gala--,k+=150,U++);U&&(n.sim.earn(k,"hawk"),x.statsV2.hawked+=U,n.sim.advance(3),x.energy=Math.max(0,x.energy-.5),v.w&&pe(v.w.mesh,_i(["Give me one!","Is it cold?","Correct!"]),2),n.audio.cash(),n.toast(`Sold ${U} → +${j(k)} 💧`,"money"))}return t.update=()=>{b.visible=n.sim.s.stock.water+n.sim.s.stock.gala>0&&!i.driving&&!g.active},t.keke=i,t.kekeHot=()=>!i.driving&&n.pos.distanceTo(i.pos)<2.6?{label:"Enter your Keke 🛺",act:t.enterKeke}:null,t}const Bi=n=>n[Math.floor(Math.random()*n.length)],nd=[["Yaba Market",-24,9.5],["Ojuelegba Stop",-58,6.6],["Mama Put Buka",18,-12.5],["CMS Stop",52,6.6],["Holy Ghost Fire",13,12.5]];function zy(n){const{world:e}=n,t={deed:null,chakam:null,agents:null},i=e.root,s=(h,y,m,u=0)=>{const g=vn({...Nn(),...h});return g.position.set(y,e.groundHeight(y,m),m),g.rotation.y=u,i.add(g),g},o=h=>h.forEach(y=>i.remove(y));function a(h){const y=new ht,m=te(new qe(3.4,.8,1.6),Y(h),{t:.05});m.position.y=.7,y.add(m);const u=te(new qe(1.8,.7,1.4),Y("#3d5a80"),{t:.04});u.position.set(-.2,1.4,0),y.add(u);for(const[g,M]of[[1.1,.8],[1.1,-.8],[-1.1,.8],[-1.1,-.8]]){const w=te(new Wt(.32,.32,.25,12),Y("#1a1423"),{t:.02});w.rotation.x=Math.PI/2,w.position.set(g,.32,M),y.add(w)}y.smoke=[];for(let g=0;g<3;g++){const M=new Ae(new Tn(.2,8,6),Y("#cfcfd6",{opacity:.8}));M.position.set(1.7,1,0),y.add(M),y.smoke.push(M)}return y}function l(){const h=n.sim.s,y=Bi(["car","change","load"]),m=[];for(let L=-70;L<=70;L+=10)for(const b of[-9.4,9.4])Math.abs(L)>8&&m.push([L,b]);const u=m.filter(([L,b])=>{const _=Math.hypot(L-n.pos.x,b-n.pos.z);return _>8&&_<35}),[g,M]=Bi(u.length?u:m),w=[],E={type:y,x:g,z:M,objs:w,expires:h.t+240,pos:new P(g,0,M)};if(y==="car"){const L=a(Bi(["#ff8fab","#bde0fe","#caffbf","#ffd6a5"]));L.position.set(g,0,M+Math.sign(M)*.6),L.rotation.z=Math.sign(M)*.06,i.add(L),w.push(L),E.car=L;const b=s({name:"Oga Car"},g-2.4,M,Math.PI/2);w.push(b),E.npc=b,E.lines=["My motor don jam! Abeg help me push!","Who fit help me push?"],e.colliders.push(E.col={minX:g-1.8,maxX:g+1.8,minZ:L.position.z-.9,maxZ:L.position.z+.9})}else if(y==="change"){const L=s({name:"Aunty"},g,M,M>0?Math.PI:0);w.push(L),E.npc=L,E.lines=["Who get change for ₦1,000?","Abeg change, I wan enter Danfo!"]}else{const L=s({name:"Mama Iyabo",hair:"gele",outfit:"ankaraDress"},g,M,M>0?Math.PI:0);w.push(L),E.npc=L;const b=te(new qe(.7,.45,.6),Y("#c68642"),{t:.03});b.position.y=.6,L.userData.head.add(b),E.load=b,E.dest=Bi(nd.filter(_=>Math.hypot(_[1]-g,_[2]-M)>15&&Math.hypot(_[1]-g,_[2]-M)<60))||nd[0],E.lines=[`My pikin, help me carry this load go ${E.dest[0]}!`,"This load heavy o!"]}E.talkT=1,t.deed=E}function r(){const h=t.deed;h&&(o(h.objs),h.col&&e.colliders.splice(e.colliders.indexOf(h.col),1),h.ring&&i.remove(h.ring),h.carrying&&n.player.userData.head.remove(h.load),t.deed=null,n.sim.s.nextDeed=n.sim.s.t+120+Math.floor(Math.random()*150))}function c(h,y,m){const u=n.sim.s;n.sim.addKarma(h),u.mood=Math.min(100,u.mood+4),u.statsV2.deeds++,y&&n.sim.earn(y,"tip"),n.audio.ping(),n.toast(`${m} +${h} karma${y?` • tip ${j(y)}`:""} 🙏`,"good")}t.deedHot=()=>{const h=t.deed;if(!h)return null;const y=n.pos.distanceTo(h.pos);if(h.type==="load"&&h.carrying){const m=new P(h.dest[1],0,h.dest[2]);return n.pos.distanceTo(m)<3?{label:`Drop load for ${h.dest[0]} 📦`,act:()=>{c(6,200,'Mama Iyabo: "God go bless you!"'),r()}}:null}return y>2.8?null:h.type==="car"?{label:"Help push car 🚗",act:()=>n.mash({label:"PUSH! Tap fast fast!",taps:14,secs:6}).then(m=>{m?(n.audio.tone(90,.8,"sawtooth",.15),c(5,Math.random()<.5?300:0,'Engine start! Oga Car: "Thank you!"'),r()):(n.sim.s.mood=Math.max(0,n.sim.s.mood-2),n.toast("Una no strong reach. Try again! 💪"))})}:h.type==="change"?{label:"Give change for ₦1,000 💵",act:()=>{if(n.sim.s.cash<1e3)return n.toast("You no get ₦1,000 change 😅","bad");c(3,Math.random()<.3?50:0,'Aunty: "You save my life!"'),r()}}:{label:"Help Mama carry load 📦",act:()=>{h.carrying=!0,h.npc.userData.head.remove(h.load),n.player.userData.head.add(h.load),h.load.position.y=.62;const m=new Ae(new ts(1.5,.12,6,28),Y("#06d6a0",{emissive:"#06d6a0",unique:!0}));m.rotation.x=Math.PI/2,m.position.set(h.dest[1],.2,h.dest[2]),i.add(m),h.ring=m,n.toast(`Carry am go ${h.dest[0]} (green ring) 📦`,"good")}}};const d={agbero:{name:"Agbero extortion",at:[9.5,9.6],spot:"junction (south-east corner)",a:{name:"Agbero Lucky",hair:"lowcut",outfit:"street",clothColor:"#1d3557"},b:{name:"Keke Driver",hair:"cap",outfit:"street"},lines:[["a","Oya bring ₦1,000 now now!"],["b","Abeg, I never make sales today!"],["a","You wan make we scatter your Keke?"],["b","Haba! Take ₦500 abeg..."]]},scammer:{name:"Yahoo scammer",at:[55.5,10.2],spot:"CMS bus stop",a:{name:"Scammer",hair:"afro",outfit:"street",clothColor:"#1a1423"},b:{name:"Old Man",hair:"bald",outfit:"kaftan"},lines:[["a","Baba, send me your BVN and OTP"],["b","Why you need am?"],["a","Make I upgrade your bank account"],["b","Okay o, make I check my phone..."]]},bribe:{name:"Checkpoint bribe",at:[30,-9.4],spot:"police checkpoint near Pharmacy",a:{name:"Officer",hair:"cap",outfit:"street",clothColor:"#1d2240",accentColor:"#1a1423",pantsColor:"#1a1423"},b:{name:"Danfo Driver",hair:"lowcut",outfit:"ankaraShirt"},lines:[["a","Driver, roger me!"],["b","Oga, take ₦200 abeg"],["a","₦200? You dey whine me? ₦1,000!"],["b","Na God go judge una..."]]}};function p(){const h=n.sim.s,y=Bi(Object.keys(d)),m=d[y],[u,g]=m.at,M=[],w=s(m.a,u,g,Math.PI/2),E=s(m.b,u+1.2,g,-Math.PI/2);if(M.push(w,E),y==="bribe"){const L=te(new ko(.3,.75,8),Y("#ff7b29"),{t:.025});L.position.set(u-1.2,.38,g+.6),i.add(L),M.push(L);const b=e.signMesh("POLICE CHECKPOINT",1.8,.4,"#1d2240");b.position.set(u-1.4,1.4,g+.62),i.add(b),M.push(b)}t.chakam={key:y,e:m,objs:M,a:w,b:E,i:0,t:1,expires:h.t+120,pos:new P(u+.6,1.1,g)},n.sim.text(Bi(["Bisi (Friend)","Emeka (Friend)","Tayo (Neighbour)"]),`Chakam alert 👀: ${m.name} dey happen now for ${m.spot}. Carry your phone go snap am!`,"tip")}t.chakamCheck=h=>{const y=t.chakam;if(!y)return null;const m=y.pos.clone(),u=h.position.distanceTo(m);return m.project(h),Math.abs(m.x)<.9&&Math.abs(m.y)<.9&&m.z<1&&u<30?y:null},t.resolveChakam=h=>{const y=t.chakam,m=n.sim.s;if(y){if(h){const u=40+Math.floor(Math.random()*50);n.sim.addKarma(8),n.sim.addFollowers(u),m.statsV2.chakam++,m.npcRep[y.key]=(m.npcRep[y.key]||0)-1,y.key==="agbero"&&(m.agberoScared=m.t+2*1440),n.sim.post("@ChakamNG",`🎥 VIRAL: ${y.e.name} caught on camera by @${m.name}! Lagos people dey vex. ${y.key==="agbero"?"Agbero union toll don reduce 😂":y.key==="bribe"?"Checkpoint don disappear sharp sharp 🏃":"Scammer don run comot 🏃"}`,"good"),n.toast(`Uploaded to Chakam! +8 karma, +${u} followers 📈`,"good")}else{const u=1500+Math.floor(Math.random()*3)*500;n.sim.earn(u,"settle"),n.sim.addKarma(-10),n.toast(`"Abeg delete am" — dem settle you ${j(u)}. -10 karma 🤐`,"warn")}o(y.objs),t.chakam=null,m.nextChakam=m.t+180+Math.floor(Math.random()*180)}},t.spawnAgents=()=>{if(t.agents)return;const h=Math.random()*Math.PI*2,y=[],m={hair:"lowcut",outfit:"street",clothColor:"#14101c",pantsColor:"#14101c",accentColor:"#8338ec"};for(let u=0;u<2;u++){const g=Tt.clamp(n.pos.x+Math.cos(h)*14+u,-85,85),M=Tt.clamp(n.pos.z+Math.sin(h)*14,-30,30);y.push(s({...m,name:"LapoPay Agent"},g,M))}t.agents={objs:y,t:0,leaving:0},n.toast("🕶️ LapoPay recovery agents dey come for you!","bad"),n.audio.bad()};function f(){const h=n.sim.s,y=h.loan;n.audio.bad();const m=()=>{h.hasGen?(h.hasGen=!1,h.fuel=0,h.loan=Math.max(0,h.loan-6e3),n.toast('Dem seize your "I-pass-my-neighbour" generator! 😭 (-₦6,000 from loan)',"bad"),n.sim.text("LapoPay Recovery","We don carry your generator as part payment. Balance remain "+j(h.loan),"bad")):h.items.radio?(h.items.radio=!1,n.audio.setRadio(!1),h.loan=Math.max(0,h.loan-2e3),n.toast("Dem seize your radio! 📻 (-₦2,000 from loan)","bad")):(n.sim.addKarma(-10),h.mood=Math.max(0,h.mood-15),h.followers=Math.floor(h.followers*.8),n.sim.post("@LapoPay_Recovery",`🚨 DEBTOR ALERT: ${h.name} dey owe ${j(h.loan)}. If you see am, tell am make e pay! 📢`,"alert"),n.toast("Dem shame you for GistMe! -10 karma, followers drop 😩","bad")),h.loanDue=h.t+2*1440,h.recovery=0},u=()=>{t.agents.leaving=1,n.save()};n.modal("🕶️ LapoPay Recovery Agents",`"Good day ${h.name}. You owe <b>${j(y)}</b>. We no come play. Pay now or we go take something."`,[{label:"Pay everything",price:j(y),disabled:h.cash<y,onClick:()=>{n.sim.repay(y),n.toast("Loan cleared! Agents don go 😮‍💨","good"),u()}},{label:"Pay wetin I get",sub:"If e reach half, dem go give you 2 more days",price:j(Math.min(h.cash,y)),disabled:h.cash<100,onClick:()=>{n.sim.repay(Math.min(h.cash,y))>=y/2?(h.loanDue=h.t+2*1440,h.recovery=0,n.toast("Dem collect am, give you 2 days 🙏","warn")):m(),u()}},{label:"Beg for more time 🙏",sub:h.karma>=15?"Your good name fit save you":"Dem no too dey hear word",onClick:()=>{h.karma>=15&&Math.random()<.8?(h.loanDue=h.t+2*1440,h.recovery=1,n.toast('Agent: "Because you get good name... 2 days."',"good")):m(),u()}}],"warn")}return t.update=h=>{const y=n.sim.s;if(!t.deed&&y.t>=y.nextDeed&&!n.activityName()&&l(),t.deed){const m=t.deed;m.talkT-=h,m.talkT<0&&(m.talkT=6,m.carrying||pe(m.npc,Bi(m.lines),3)),m.car&&m.car.smoke.forEach((u,g)=>{const M=(n.time*.7+g/3)%1;u.position.set(1.7+M*.3,.9+M*1.3,0),u.scale.setScalar(.6+M*1.5)}),m.npc&&cn(m.npc,h,0,n.time),m.ring&&(m.ring.rotation.z+=h),y.t>m.expires&&!m.carrying&&r()}if(!t.chakam&&y.t>=y.nextChakam&&y.t>8*60&&n.sim.hour>7&&n.sim.hour<21&&p(),t.chakam){const m=t.chakam;if(m.t-=h,m.t<=0){const[u,g]=m.e.lines[m.i%m.e.lines.length],M=u==="a"?m.a:m.b;pe(M,g,3),M.userData.talk=2.6,(u==="a"?m.b:m.a).userData.listen=!0,m.i++,m.t=3.2}cn(m.a,h,0,n.time),cn(m.b,h,0,n.time),y.t>m.expires&&(o(m.objs),t.chakam=null,y.nextChakam=y.t+200)}if(t.agents){const m=t.agents;m.objs.forEach((u,g)=>{const M=m.leaving?new P(u.position.x+(g?30:-30),0,u.position.z):n.pos,w=M.x-u.position.x,E=M.z-u.position.z,L=Math.hypot(w,E);L>1.3&&(u.position.x+=w/L*2.6*h,u.position.z+=E/L*2.6*h,u.rotation.y=Math.atan2(w,E)),cn(u,h,L>1.3?1:0,n.time)}),m.t+=h,m.leaving?(m.leaving+=h,m.leaving>8&&(o(m.objs),t.agents=null)):!m.arrived&&!n.isBusy()&&(m.t>60||m.objs.some(u=>Math.hypot(u.position.x-n.pos.x,u.position.z-n.pos.z)<1.6))?(m.arrived=!0,f()):m.arrived&&!n.isBusy()&&(m.leaving=1)}},t}const Qn=n=>n[Math.floor(Math.random()*n.length)],On=(n,e)=>new P(n,0,e);function Hy(n){const{world:e}=n,t=e.pitch,i=e.ball,s={};let o=null;s.hot=()=>{if(n.activityName()||n.inside())return null;const b=Math.hypot(n.pos.x-50.2,n.pos.z-27.2),_=n.pos.x>t.minX&&n.pos.x<t.maxX&&n.pos.z>t.minZ&&n.pos.z<t.maxZ;return b<2.6||_?{label:"Play ball for The Set ⚽",act:s.offer}:null},s.offer=async()=>{const b=n.sim.hour;if(b<7||b>=19)return n.modal("Junior don carry ball go house 🌙","Set dey play 7am – 7pm.",[{label:"Okay",close:!0}]);if(n.sim.s.energy<15)return n.modal("Your body no fit run 😮‍💨","You need 15% Body to play.",[{label:"Okay",close:!0}]);const _=await n.rivals.askWager("football","Junior");_!==null&&l(_)};function a(b,_,S,C,v){const x=vn({...Nn(),outfit:"street",...b});return x.position.set(C,0,v),e.root.add(x),{mesh:x,team:_,role:S,home:On(C,v),name:b.name,pos:x.position,cd:0}}function l(b){const _=n.rivals.diff("football");e.junior.visible=!1;const S={me:!0,team:0,role:"fwd",pos:n.pos,name:n.sim.s.name,cd:0,home:On(37,28)},C=[a({name:"Tobi",clothColor:"#ffd23f"},0,"mid",35,25.6),a({name:"Keeper Uche",clothColor:"#ff8fab",hair:"cap"},0,"gk",t.minX+.6,t.cz)],v=[a({name:"Junior",hair:"lowcut",clothColor:"#06d6a0",pantsColor:"#f4f1de"},1,"fwd",43,28),a({name:"Sege",clothColor:"#06d6a0"},1,"mid",45,30.4),a({name:"Keeper Bayo",clothColor:"#1a1423",hair:"cap"},1,"gk",t.maxX-.6,t.cz)];o={me:S,all:[S,...C,...v],score:[0,0],time:90,vel:new P,owner:null,upset:0,over:!1,diff:_,wager:b,lastTouch:null,freeze:0,tackles:0},r(1),n.audio.init(),n.audio.whistle();for(const x of v)Math.random()<.6&&pe(x.mesh,n.rivals.talk("pre"),2.5);n.startActivity(m)}function r(b){o.all.forEach(_=>{_.me||_.pos.copy(_.home)}),n.pos.set(b===0?39.4:36,0,28),o.vel.set(0,0,0),i.position.set(t.cx,.18,t.cz),o.owner=b===0?o.me:o.all.find(_=>_.team===1&&_.role==="fwd"),o.freeze=.8}const c=b=>b===0?t.maxX:t.minX,d=b=>o.all.filter(_=>_.team!==b),p=b=>o.all.filter(_=>_.team===b);function f(b,_,S,C=0){const v=_.clone().sub(i.position);v.y=0,v.normalize(),o.vel.copy(v.multiplyScalar(S)),o.vel.y=C,o.owner=null,o.lastTouch=b,b.cd=.35,n.audio.kick()}function h(b,_){const S=t.cz+(Math.random()-.5)*(t.goalMax-t.goalMin)*(1.6-_);return On(c(b)+Math.sign(c(b)-t.cx),S)}const y=b=>{if(!(o.over||o.freeze>0)){if(b==="tackle"){const _=o.owner;if(!_||_.team===0||_.pos.distanceTo(n.pos)>1.3||o.me.cd>0)return;o.me.cd=.8,Math.random()<.55-o.diff*.2?(o.owner=o.me,pe(_.mesh,Qn(["Ehn?! Foul!","Who teach you that?!","Haba!"]),2),n.audio.tone(300,.08,"square",.1)):(pe(_.mesh,"You no fit! 😂",2),o.me.stun=.6,_.name==="Junior"&&++o.tackles%3===0&&E("Stop to dey kick my leg!"));return}if(o.owner===o.me)if(b==="shoot")f(o.me,h(0,.9),15,1.5);else{const _=o.all.find(S=>S.team===0&&S.role==="mid");f(o.me,_.pos.clone().add(On(1.4,0)),10)}}};s.playerAct=y;const m={name:"football",camDist:13,camPitch:.8,buttons:()=>[{label:"Pass ➡️",key:"j",onClick:()=>y("pass")},{label:"Shoot ⚽",key:"k",onClick:()=>y("shoot")},{label:"Tackle 🦵",key:"l",onClick:()=>y("tackle")},{label:"Quit",key:"x",onClick:()=>L("quit")}],update(b){var N;if(o.over)return;o.freeze=Math.max(0,o.freeze-b),o.freeze<=0&&(o.time-=b);const _=n.input(),S=On(_.ix,-_.iy),C=Math.min(1,S.length());o.me.stun=Math.max(0,(o.me.stun||0)-b),o.me.cd-=b,C>.08&&!o.me.stun&&(S.normalize(),n.pos.addScaledVector(S,(_.run?6.2:5.2)*C*b*(o.owner===o.me?.9:1)),n.setRot(Math.atan2(S.x,S.z))),u(n.pos),n.pos.y=0,n.moveAmt=C>.08?_.run?1.5:1:0,n.camYawTo(0,b*3);const v=i.position,x=3.5+o.diff*1.8;for(const k of o.all){if(k.me)continue;k.cd-=b;const G=g(k).clone().sub(k.pos);G.y=0;const V=G.length(),ne=k.role==="gk"?x*.9:x*(o.owner===k?.85:1);V>.15&&o.freeze<=0&&(G.normalize(),k.pos.addScaledVector(G,Math.min(V,ne*b)),k.mesh.rotation.y=Math.atan2(G.x,G.z)),u(k.pos,k.role==="gk"),k.mesh.position.y=k.jump?Math.abs(Math.sin(n.time*10))*.4:0,cn(k.mesh,b,V>.15?1.3:0,n.time),o.freeze<=0&&M(k,b)}if(o.owner){const k=o.owner,U=k.me?n.rotY():k.mesh.rotation.y;v.set(k.pos.x+Math.sin(U)*.55,.18,k.pos.z+Math.cos(U)*.55),o.vel.set(0,0,0),i.rotation.x+=b*8}else{if(v.addScaledVector(o.vel,b),o.vel.x*=Math.exp(-1.1*b),o.vel.z*=Math.exp(-1.1*b),o.vel.y-=14*b,v.y<.18&&(v.y=.18,o.vel.y=Math.abs(o.vel.y)>1.5?-o.vel.y*.5:0),i.rotation.x+=o.vel.z*b*3,i.rotation.z-=o.vel.x*b*3,v.x>t.maxX||v.x<t.minX){if(v.z>t.goalMin&&v.z<t.goalMax&&v.y<1.2)return w(v.x>t.maxX?0:1);v.x=Tt.clamp(v.x,t.minX,t.maxX),o.vel.x*=-.7,n.audio.tone(120,.06,"triangle",.08)}if((v.z>t.maxZ||v.z<t.minZ)&&(v.z=Tt.clamp(v.z,t.minZ,t.maxZ),o.vel.z*=-.7,n.audio.tone(120,.06,"triangle",.08)),v.y<.7){if(Math.hypot(n.pos.x-v.x,n.pos.z-v.z)<.6&&o.me.cd<=0&&!o.me.stun)o.owner=o.me,o.lastTouch=o.me;else for(const k of o.all)if(!k.me&&k.cd<=0&&Math.hypot(k.pos.x-v.x,k.pos.z-v.z)<(k.role==="gk"?.9+o.diff*.4:.55)){o.owner=k,o.lastTouch=k,k.role==="gk"&&o.vel.length()>6&&pe(k.mesh,Qn(["SAVE! 🧤","No way!","Na wall I be!"]),2);break}}}const[R,I]=o.score;n.actHud(`<b>⚽ The Set</b> • ⏱ ${Math.max(0,Math.ceil(o.time))}s${o.wager?` • 💰 ${j(o.wager)}`:""}<div class="score"><span style="color:#b8860b">You ${R}</span> – <span style="color:#0a9b74">${I} Junior FC</span></div><small>${o.owner===o.me?"🟡 You get ball!":((N=o.owner)==null?void 0:N.team)===1?"🟢 Dem get ball — tackle!":""} • Junior vex ${"😠".repeat(o.upset)}${"·".repeat(3-o.upset)}</small>`),o.time<=0&&L("time")},onEnd(){n.actHud("")}};function u(b,_){b.x=Tt.clamp(b.x,t.minX+.3,t.maxX-.3),b.z=Tt.clamp(b.z,t.minZ+.3,t.maxZ-.3)}function g(b){const _=i.position,S=b.team,C=c(1-S),v=c(S),x=Math.sign(v-t.cx);if(b.role==="gk"){const k=Tt.clamp(_.z,t.goalMin+.2,t.goalMax-.2),U=Math.abs(_.x-C)<5&&!o.owner?1.6:.5;return On(C-Math.sign(C-t.cx)*U,k)}if(o.owner===b){const k=d(S).filter(G=>G.role!=="gk").sort((G,V)=>G.pos.distanceTo(b.pos)-V.pos.distanceTo(b.pos))[0],U=k&&k.pos.distanceTo(b.pos)<2?Math.sign(b.pos.z-k.pos.z||1)*2:0;return On(v,t.cz+U+(b.pos.z-t.cz)*.3)}if(o.owner&&o.owner.team===S)return On(Tt.clamp(_.x+x*3,t.minX+1,t.maxX-1.5),b.role==="mid"?_.z>t.cz?t.cz-2:t.cz+2:t.cz);const N=p(S).filter(k=>k.role!=="gk"&&!k.me).sort((k,U)=>k.pos.distanceTo(_)-U.pos.distanceTo(_))[0];return b===N||S===1&&b.role==="fwd"&&o.diff>.6?_.clone().setY(0):On((_.x+C)/2,(_.z+t.cz)/2)}function M(b,_){const S=b.team;if(i.position,o.owner===b){const v=c(S),x=Math.abs(v-b.pos.x),R=d(S).some(I=>I.role!=="gk"&&I.pos.distanceTo(b.pos)<1.3);if(b.role==="gk"){const I=p(S).find(N=>N.role==="mid"||N.me)||p(S)[0];b.cd=0,f(b,I.pos.clone(),11,2);return}if(x<6+o.diff*2&&Math.random()<_*3){f(b,h(S,.5+o.diff*.45),12+o.diff*4,1.2),S===1&&Math.random()<.5&&pe(b.mesh,Qn(["Shoot!!","Goal dey come!","Catch this one!"]),1.5);return}if(R&&Math.random()<_*(2+o.diff*3)){const I=p(S).find(N=>N!==b&&N.role!=="gk");I&&f(b,I.me?n.pos.clone():I.pos.clone().add(On(Math.sign(v-t.cx),0)),9)}return}const C=o.owner;C&&C.team!==S&&b.role!=="gk"&&b.cd<=0&&C.pos.distanceTo(b.pos)<.8&&(b.cd=1.1-o.diff*.4,Math.random()<.35+o.diff*.4&&(o.owner=b,C.me&&(o.me.stun=.4,pe(b.mesh,Qn(["Collect! 😂","Too slow!","Na my ball now!"]),1.8))))}function w(b){o.score[b]++,n.audio.cheer(),n.audio.whistle(),n.toast(b===0?"GOOOAL!! ⚽🔥":"Junior FC score! 😩",b===0?"good":"bad");const _=p(b).filter(C=>!C.me),S=p(1-b).filter(C=>!C.me);_.forEach(C=>{C.jump=!0,pe(C.mesh,Qn(b===0?["GOAL! 🎉","Odogwu!!","Na so!"]:["GOAL! Feel am! 😂","Junior FC!!",n.rivals.talk("lead")]),2.5)}),S.forEach(C=>pe(C.mesh,Qn(b===0?["Ehn?! Keeper wetin you dey do?!","Na luck!",n.rivals.talk("behind")]:["Defend now!","Ah!"]),2.5)),setTimeout(()=>o&&o.all.forEach(C=>C.jump=!1),1600),b===0&&o.score[0]-o.score[1]>=3&&E(Qn(["Una dey cheat!","This one na offside!"])),o.over||(r(1-b),o.freeze=1.6)}function E(b){o.upset++,pe(o.all.find(_=>_.name==="Junior").mesh,b+(o.upset>=2?" I go carry my ball go house o!":""),3),o.upset>=3&&L("junior")}function L(b){if(!o||o.over)return;o.over=!0;const _=n.sim.s,[S,C]=o.score;o.all.forEach(N=>{N.me||e.root.remove(N.mesh)}),e.junior.visible=!0,i.position.set(t.cx,.18,t.cz),n.endActivity(),n.pos.set(50.2-1.6,0,27.2),_.energy=Math.max(0,_.energy-15),_.statsV2.matches++,n.sim.advance(60,{working:!0});let v,x,R;b==="junior"?(R="d",_.mood=Math.max(0,_.mood-5),v="Junior carry him ball go house! 😤",x=`"I no dey play again!" Match end ${S}–${C}. Wager refunded.`):b==="quit"?(R="l",v="You comot from match 🏳️",x=`Score ${S}–${C}. Na forfeit be that${o.wager?" — you lose your wager":""}.`):S>C?(R="w",_.mood=Math.min(100,_.mood+20),_.statsV2.wins++,n.sim.addFollowers(5),v="You WIN! 🏆",x=`${S}–${C}! +20 Mind${o.wager?` • +${j(o.wager*2)}`:""}. Junior: "${n.rivals.talk("lose")}"`,n.audio.cheer()):S===C?(R="d",_.mood=Math.min(100,_.mood+8),v="Draw 🤝",x=`${S}–${C}. +8 Mind. Wager refunded.`):(R="l",_.mood=Math.min(100,_.mood+2),v="You lose 😅",x=`${S}–${C}. Junior: "${n.rivals.talk("win")}"`);const I=n.rivals.record("football","Junior",R,o.wager);n.modal(v,x+`<br><small>Streak: ${I} 🔥 • Next difficulty ${Math.round(n.rivals.diff("football")*100)}%</small>`,[{label:"Rematch! ⚽",onClick:()=>setTimeout(s.offer,50)},{label:"Okay ➜",close:!0}]),o=null,n.save()}return s.active=()=>!!o,s.state=()=>o,s}function Vy(n){const e={},t=new P,i=(a,l=32)=>{const r=n.camera.position.distanceTo(a);return t.copy(a).project(n.camera),Math.abs(t.x)<.95&&Math.abs(t.y)<.95&&t.z<1&&r<l};function s(){const a=n.world,l=[];let r=0,c=0;for(const g of[...a.walkers.map(M=>M.mesh),...a.npcs.map(M=>M.mesh)])g.visible&&i(g.position.clone().setY(1),25)&&c++;c&&(r+=Math.min(8,c)*3,l.push(`${c} people`));let d=0;for(const g of a.vehicles)i(g.mesh.position.clone().setY(1.2),30)&&(r+=g.type==="danfo"?6:4,d++);d&&l.push(`${d} Danfo/Keke`);const p=[["market umbrellas",new P(-21,2.5,15),5],["Lagos lagoon",new P(-96,0,0),8],["construction crane",new P(100,20,-10),4],["The Set",new P(40,.5,28),4],["Mama Put",new P(18,2,-16),4],["Mega Fuel",new P(64,3,15),3]];for(const[g,M,w]of p)i(M,45)&&(r+=w,l.push(g));const f=n.sim.isNight,h=n.sim.s.power,y=n.sim.hour;f&&h&&a.neons.some((g,M)=>i(new P(...[[-11,4.2,-13.8],[50,4.3,-13.8],[29,4.2,14.4],[21.8,2.8,-14],[64,5.6,12.1]][M]),40))&&(r+=6,l.push("neon signs")),i(n.pos.clone().setY(1.1),15)&&(r+=6,l.push("selfie"));let m=1,u="midday";return y>=17&&y<19.5?(m=1.6,u="golden hour ✨"):y>=6&&y<8?(m=1.2,u="morning glow"):f&&h?(m=1.2,u="city lights"):f&&(m=.6,u="too dark (NEPA)"),{pts:Math.round(r*m),hits:l,light:u}}function o(){n.renderNow();const a=n.renderer.domElement,l=document.createElement("canvas");l.width=192,l.height=120;const r=l.getContext("2d");a.width/a.height;const c=a.height*(192/120);return r.drawImage(a,(a.width-Math.min(a.width,c))/2,0,Math.min(a.width,c),a.height,0,0,192,120),l.toDataURL("image/jpeg",.6)}return e.start=a=>{n.closePhone(),document.body.classList.add("photo-mode");const l=document.getElementById("flash"),r={name:"photo",camDist:6.5,camPitch:.22,allowWalk:!0,buttons:()=>[{label:a==="chakam"?"🎥 Snap evidence":"📸 Snap",key:" ",onClick:d},{label:"➕",key:"=",onClick:()=>n.zoom(-1.5)},{label:"➖",key:"-",onClick:()=>n.zoom(1.5)},{label:"✕ Cancel",key:"x",onClick:c}],update(){n.actHud(a==="chakam"?"<b>🎥 Chakam</b><br><small>Point camera at the wahala (drag to turn), then snap</small>":"<b>📸 Clout camera</b><br><small>Drag to frame • walk to move • golden hour = more clout</small>")},onEnd(){document.body.classList.remove("photo-mode"),n.actHud("")}};function c(){n.endActivity()}function d(){if(n.isBusy())return;l.classList.remove("on"),l.offsetWidth,l.classList.add("on"),n.audio.tone(1800,.05,"square",.08);const p=o(),f=n.sim.s;if(a==="chakam"){const m=n.events.chakamCheck(n.camera);if(!m)return n.modal("No evidence 🤷🏾","Nothing chakam-worthy for this frame. Check Messages for tips about wahala wey dey happen.",[{label:"Try again",close:!0}]);n.modal(`🎥 You chakam: ${m.e.name}!`,`<img class="snap" src="${p}"><br>Upload go expose dem (karma + clout), or "settle" privately for cash (karma loss).`,[{label:"Upload to Chakam 📤",sub:"Needs 30MB data • +8 karma",disabled:f.dataMB<30,onClick:()=>{n.sim.useData(30),n.events.resolveChakam(!0),c()}},{label:"Settle privately 🤫",sub:"Dem go beg you with money • -10 karma",onClick:()=>{n.events.resolveChakam(!1),c()}},{label:"Keep am for now",close:!0}]);return}const h=s(),y=Math.max(1,Math.round(h.pts*(.7+Math.random()*.6)*(1+f.followers/800)));n.modal("📸 Post to Clout?",`<img class="snap" src="${p}"><br>In frame: <b>${h.hits.join(", ")||"nothing special"}</b> • Light: <b>${h.light}</b><br>Clout score: <b>${h.pts}</b>`,[{label:"Post am! 🚀",sub:"Uses 25MB data",disabled:f.dataMB<25,onClick:()=>{n.sim.useData(25),f.posts.unshift({t:f.t,img:p,gain:y,likes:y*3+Math.floor(Math.random()*20),hits:h.hits.slice(0,3)}),f.posts.length>6&&(f.posts.length=6),n.sim.addFollowers(y),f.mood=Math.min(100,f.mood+3),n.audio.ping(),n.toast(`Posted! +${y} followers (${f.followers} total) 📈`,"good"),n.save()}},{label:"Discard",close:!0}])}n.startActivity(r)},e}const Wy=[["wallet","💰","Wallet"],["msgs","💬","Messages"],["feed","📰","Gist"],["clout","📸","Clout"],["chakam","🎥","Chakam"],["lapo","🏦","LapoPay"],["data","📶","Data"],["rivals","🏆","Rivals"]],_a={feed:2,clout:3,chakam:3,lapo:1};function $y(n){const e=l=>document.getElementById(l);let t="wallet";const i=document.querySelector(".phone-tabs");i.innerHTML=Wy.map(([l,r,c])=>`<button data-tab="${l}"><span>${r}</span><small>${c}</small><i class="dot" data-dot="${l}"></i></button>`).join(""),i.querySelectorAll("button").forEach(l=>l.addEventListener("click",()=>{t=l.dataset.tab,n.audio.click(),a(!0)}));const s=l=>{const r=Math.floor(l/1440),c=Math.floor(l%1440/60);return r?`${r}d ${c}h`:`${c}h ${l%60}m`},o=()=>'<div class="wcard" style="text-align:center"><div style="font-size:44px">📵</div><b>No data o!</b><p class="fine">This app need internet. Buy data bundle for the Data app.</p><button class="btn primary" id="goData">Buy data</button></div>';function a(l=!1){const r=n.sim,c=r.s,d=e("phoneBody");if(i.querySelectorAll("button").forEach(h=>h.classList.toggle("active",h.dataset.tab===t)),i.querySelector('[data-dot="msgs"]').classList.toggle("on",c.unreadMsg>0),i.querySelector('[data-dot="feed"]').classList.toggle("on",c.unread>0),_a[t]&&c.dataMB<_a[t]){d.innerHTML=o(),e("goData").onclick=()=>{t="data",a()};return}l&&_a[t]&&r.useData(_a[t]);const p=r.tier,f=Xa[Xa.indexOf(p)+1];if(t==="wallet")d.innerHTML=`
        <div class="wcard bal"><div class="k">Wallet balance</div><div class="v">${j(c.cash)}</div><div class="k">Tier: Lapo • Status to Nepo: ${r.statusPoints}%</div><div class="mini-bar"><i style="width:${r.statusPoints}%;background:#ffd23f"></i></div></div>
        <div class="wgrid">
          <div class="wcard"><div class="k">Rent owed</div><div class="v" style="color:${c.rentOwed?"#e71d36":"#0a9b74"}">${j(c.rentOwed)}</div></div>
          <div class="wcard"><div class="k">Due (Sat 11:59pm)</div><div class="v">${s(r.rentCountdown())}</div></div>
          <div class="wcard"><div class="k">LapoPay loan</div><div class="v" style="color:#8338ec">${j(c.loan)}</div></div>
          <div class="wcard"><div class="k">Karma 🙏</div><div class="v" style="color:${c.karma>=0?"#0a9b74":"#e71d36"}">${c.karma>0?"+":""}${c.karma}</div></div>
          <div class="wcard"><div class="k">Data</div><div class="v">${c.dataMB}MB</div></div>
          <div class="wcard"><div class="k">Followers</div><div class="v">${c.followers}</div></div>
          <div class="wcard"><div class="k">Danfo fare</div><div class="v">${j(r.danfoFare)}</div></div>
          <div class="wcard"><div class="k">Keke fuel</div><div class="v">${c.kekeFuel.toFixed(1)}L</div></div>
        </div>
        <div class="btn-row"><button class="btn primary" id="phRent" ${!c.rentOwed||c.cash<c.rentOwed?"disabled":""}>Transfer rent to Baba Ade</button></div>
        <p class="fine">Earned ${j(c.stats.earned)} • Keke trips ${c.statsV2.trips} • Hawked ${c.statsV2.hawked} • Shifts ${c.statsV2.shifts} • Good deeds ${c.statsV2.deeds} • Matches won ${c.statsV2.wins}/${c.statsV2.matches}${c.strikes?` • ⚠️ Eviction strikes ${c.strikes}/2`:""}${f?`<br>Next money tier: ${f.label} @ ${j(f.min)}`:""}</p>`,e("phRent").onclick=()=>{const h=r.payRent(c.rentOwed);n.toast(`Rent transfer successful: ${j(h)} ✔`,"good"),a(),n.save()};else if(t==="msgs")c.unreadMsg=0,c.messages.forEach(h=>h.read=!0),d.innerHTML=c.messages.map(h=>`<div class="post msg ${h.kind}"><span class="h">${h.from}</span><span class="tm">${r.dayStr(h.t).slice(0,3)} ${r.timeStr(h.t)}</span><div>${h.text}</div></div>`).join("")||'<p class="fine">No messages yet. Your phone dey quiet 🤫</p>';else if(t==="feed")c.unread=0,d.innerHTML=c.feed.map(h=>`<div class="post ${h.kind}"><span class="h">${h.handle}</span><span class="tm">${r.dayStr(h.t).slice(0,3)} ${r.timeStr(h.t)}</span><div>${h.text}</div></div>`).join("");else if(t==="clout")d.innerHTML=`<div class="lapo-hero" style="background:#ff4fa3"><div class="k">Clout followers</div><div class="v">${c.followers.toLocaleString()}</div><div style="font-size:12px;font-weight:700">Snap Lagos life: people, Danfo, market, lagoon, neon at night. Golden hour (5–7pm) = more clout. Big followers = sponsorship 💸</div></div>
        <button class="btn primary" id="openCam" style="width:100%">📸 Open camera</button>
        <div class="posts">${c.posts.map(h=>`<div class="pcard"><img src="${h.img}"><div><b>+${h.gain}</b> followers • ❤️ ${h.likes}<br><small>${(h.hits||[]).join(", ")}</small></div></div>`).join("")||'<p class="fine">No posts yet.</p>'}</div>`,e("openCam").onclick=()=>n.photo.start("clout");else if(t==="chakam"){const h=n.events.chakam;d.innerHTML=`<div class="lapo-hero" style="background:#1a1423"><div class="k">Chakam 🎥</div><div style="font-size:13px;font-weight:700">Snap evidence of wahala (agbero extortion, scammers, checkpoint bribes). Upload = karma + clout. Settle = cash, but your karma go suffer.</div></div>
        <div class="wcard">${h?`🔴 <b>Live tip:</b> ${h.e.name} near the <b>${h.e.spot}</b>. Go there and snap!`:"🟢 No active wahala reported. Check Messages for tips."}</div>
        <button class="btn primary" id="openCh" style="width:100%">🎥 Open Chakam camera</button><p class="fine">Exposed so far: ${c.statsV2.chakam}</p>`,e("openCh").onclick=()=>n.photo.start("chakam")}else if(t==="lapo"){const h=c.loanDue?Math.max(0,c.loanDue-c.t):0;d.innerHTML=`
        <div class="lapo-hero"><div class="k">LapoPay balance owed</div><div class="v">${j(c.loan)}</div><div style="font-size:12px;font-weight:700">Interest: ${Math.round(gu*100)}% every day + 10% "processing fee" 👀 • Max ₦15,000<br>${c.loan?h?`Next payment due in ${s(h)} (pay ≥ ₦1,000 to extend 3 days)`:"⚠️ OVERDUE — recovery agents dey come!":"No active loan"}</div></div>
        <div class="btn-row"><button class="btn green" id="lp5">Borrow ₦5,000</button><button class="btn green" id="lp10">Borrow ₦10,000</button></div>
        <div class="btn-row"><button class="btn" id="lpr1" ${!c.loan||c.cash<1?"disabled":""}>Repay ₦1,000</button><button class="btn primary" id="lpra" ${!c.loan||c.cash<1?"disabled":""}>Repay all</button></div>
        <p class="fine">Miss repayment: recovery texts → calls → agents go come meet you to collect, seize your things or shame you for GistMe. (Na game money only.)</p>`;const y=m=>{r.borrow(m)?(n.toast(`LapoPay: ${j(m)} don land 💸`,"money"),n.audio.cash()):n.toast("LapoPay: Limit reach! Pay first 🙅🏾","bad"),a(),n.save()};e("lp5").onclick=()=>y(5e3),e("lp10").onclick=()=>y(1e4),e("lpr1").onclick=()=>{const m=r.repay(1e3);n.toast(`Repaid ${j(m)}`,"good"),a(),n.save()},e("lpra").onclick=()=>{const m=r.repay(c.loan);n.toast(`Repaid ${j(m)}`,"good"),a(),n.save()}}else if(t==="rivals"){const h=n.rivals.board(),y=c.streaks||{},m=c.bestStreak||{},u=Object.entries(c.rel||{}).sort((g,M)=>M[1]-g[1]);d.innerHTML=`<div class="lapo-hero" style="background:#ff6b35"><div class="k">Street Games Rivals 🏆</div><div style="font-size:12px;font-weight:700">⚽ Football streak ${y.football||0} (best ${m.football||0}) • ⚫ Draughts ${y.draughts||0} (best ${m.draughts||0}) • 🌰 Ayo ${y.ayo||0} (best ${m.ayo||0})</div></div>
        <div class="wcard"><table class="lb"><tr><th>#</th><th>Rival</th><th>W</th><th>D</th><th>L</th></tr>${h.map((g,M)=>`<tr><td>${M+1}</td><td>${g.name}</td><td>${g.w}</td><td>${g.d}</td><td>${g.l}</td></tr>`).join("")||"<tr><td colspan=5>No matches yet. Go The Set or the tree by Ojuelegba road!</td></tr>"}</table></div>
        <div class="wcard"><div class="k">People wey know you</div>${u.map(([g,M])=>`<div style="display:flex;justify-content:space-between;font-size:12px"><span>${g}</span><span>${n.social.relWord(M)} ${M}</span></div>`).join("")||"<small>Talk to people (E) to build relationships</small>"}</div>`}else d.innerHTML=`<div class="wcard bal"><div class="k">Data balance</div><div class="v">${c.dataMB} MB</div><div class="k">Gist 2MB/open • Clout post 25MB • Chakam upload 30MB • Background 20MB/day</div></div>
        ${Qh.map(h=>`<button class="opt" data-plan="${h.id}" ${c.cash<h.price?"disabled":""}><span>${h.name}<small>Pay from wallet</small></span><span class="price">${j(h.price)}</span></button>`).join("")}`,d.querySelectorAll("[data-plan]").forEach(h=>h.onclick=()=>{const y=Qh.find(m=>m.id===h.dataset.plan);r.buyData(y)&&(n.toast(`${y.name} activated 📶`,"good"),n.audio.ping()),a(),n.save()})}return{render:a,open(l){l&&(t=l),e("phone").classList.remove("hidden"),a(!0)},get tab(){return t}}}const xi=(n,e)=>new P(n,0,e);function Gy(n){const{world:e}=n,t={list:{},cur:null},i=e.root;function s(a,{ox:l,w:r=10,d:c=7,wall:d="#f6dcb4",floor:p="#c99a6b",name:f,door:h,light:y="#ffe6b0",floorMap:m}){const u=new ht;u.position.set(l,0,0),i.add(u);const g=te(new qe(r,.2,c),Y(m?"#ffffff":p,m?{map:m}:{}),{t:.02,receive:!0,cast:!1});g.position.y=-.1,u.add(g);const M=Y(d),w=te(new qe(r,3.2,.25),M,{t:.02});w.position.set(0,1.6,-c/2),u.add(w);for(const S of[-1,1]){const C=te(new qe(.25,3.2,c),M,{t:.02});C.position.set(S*r/2,1.6,0),u.add(C)}for(const S of[-1,1]){const C=te(new qe(r/2-.8,.5,.2),M,{t:.02});C.position.set(S*(r/4+.4),.25,c/2),u.add(C)}const E=te(new qe(1.4,.03,.7),Y("#e71d36"),{outline:!1});E.position.set(0,.02,c/2-.5),u.add(E);const L=new Ae(new rn(4.2,.8),Y("#ffffff",{map:Ra(f,{bg:"#ffd23f"})}));L.position.set(0,2.7,-c/2+.14),u.add(L);const b=new Wa(y,18,16,1.4);b.position.set(0,3.2,.5),u.add(b);const _={id:a,g:u,ox:l,w:r,d:c,name:f,door:h,light:b,cols:[],hots:[],npcs:[],spin:[]};return _.toLocal=(S,C)=>xi(l+S,C),_.col=(S,C,v,x)=>_.cols.push({minX:l+S-v,maxX:l+S+v,minZ:C-x,maxZ:C+x}),_.box=(S,C,v,x,R,I,N,k={})=>{const U=te(new qe(S,C,v),typeof x=="string"?Y(x):x,{t:.03,...k});return U.position.set(R,I,N),u.add(U),k.col!==!1&&I-C/2<.6&&_.col(R,N,S/2,v/2),U},_.hot=(S,C,v,x,R)=>_.hots.push({pos:xi(l+S,C),r:v,label:x,act:R}),_.npc=(S,C,v,x,R)=>{const I=vn({...Nn(),...S});I.position.set(l+C,0,v),I.rotation.y=x,R&&si(I),i.add(I);const N={mesh:I,name:S.name,lines:S.lines,talkT:Math.random()*6};return _.npcs.push(N),n.social.register(N),R||_.col(C,v,.35,.35),N},_.hot(0,c/2-.3,1.2,"Comot outside 🚪",()=>t.exit()),t.list[a]=_,_}const o=an(["#c99a6b","#b8875a"],10,!1,[1,3]);{const a=s("room",{ox:300,w:9,d:6.5,wall:"#f6dcb4",name:"ROOM 4 🏠",door:xi(-30,-13.6),floorMap:o});a.box(2.2,.5,1.4,Y("#ffffff",{map:Zi("circles","#3a86ff","#ffd23f","#e71d36",[2,1])}),-2.8,.35,-2.2),a.box(2.2,.25,1.4,"#8d5a2b",-2.8,.1,-2.2,{col:!1}),a.box(.5,.2,1,"#fdfcdc",-3.6,.7,-2.2,{col:!1}),a.hot(-2.8,-1.2,1.4,"Bed: sleep / nap 😴",()=>n.homeMenu()),a.box(.08,1.4,.08,"#555",2.6,.7,-2.5);const l=new ht;l.position.set(a.ox+2.6,1.5,-2.4),i.add(l);for(let c=0;c<3;c++){const d=te(new qe(.12,.5,.02),Y("#7ec8e3"),{t:.02});d.rotation.z=c*2.094,d.position.set(Math.sin(c*2.094)*.22,Math.cos(c*2.094)*.22,0),d.rotation.z=-c*2.094,l.add(d)}a.fan=l,a.box(1.2,.08,.7,"#8d5a2b",2.6,.75,.2),a.box(.1,.75,.1,"#5a3a1a",2.6,.37,.2,{col:!1});const r=te(new Tn(.16,10,8),Y("#fff3b0",{emissive:"#ffd27a",unique:!0}),{t:.02});r.position.set(a.ox+2.6,1.1,.2),i.add(r),a.bulb=r,a.hot(2.6,.9,1.3,"Pay rent / check room 🏠",()=>n.homeMenu()),a.box(.6,.8,.2,"#e71d36",4.2,1.4,-1,{col:!1}),a.box(.3,.12,.05,"#ffd23f",4.08,1.5,-1,{col:!1}),a.hot(3.7,-1,1.3,"Gen switch & fuel ⛽",()=>n.genMenu()),a.box(1.2,1.8,.6,"#a0522d",-.6,.9,-2.9),a.box(.9,.55,.08,"#1a1423",.9,1.6,-3.1,{col:!1}),a.room=!0,a.update=()=>{const c=n.sim.homePowered;l.rotation.z+=c?.3:0,r.material.emissiveIntensity=c?1.5:.05,a.light.intensity=c?18:3,a.light.color.set(c?"#ffe6b0":"#ff9a4a")}}{const a=s("buka",{ox:330,w:11,d:7.5,wall:"#ffd6a5",name:"MAMA PUT 🍛",door:xi(18,-13.2),floor:"#d9b48f"});a.box(4,1,.8,"#e76f51",0,.5,-2.6);for(const[l,r]of[[-1.2,"#555"],[0,"#e71d36"],[1.2,"#3a86ff"]]){const c=te(new Wt(.35,.3,.5,12),Y(r),{t:.02});c.position.set(a.ox+l,1.25,-2.6),i.add(c)}a.npc({name:"Iya Basira",hair:"gele",outfit:"ankaraDress",clothColor:"#e71d36",accentColor:"#ffd23f",lines:["Food dey!","Jollof hot!"]},0,-3.3,0),a.hot(0,-1.6,1.5,"Order food from Iya Basira 🍛",()=>n.bukaMenu());for(const[l,r]of[[-3,.5],[3,.5],[-3,2.4],[3,2.4]]){a.box(1.6,.08,.9,"#2ec4b6",l,.75,r),a.box(.1,.75,.1,"#1a1423",l,.37,r,{col:!1});for(const c of[-1,1])a.box(1.6,.4,.35,"#8d5a2b",l,.2,r+c*.75,{col:!1})}a.npc({name:"Tunde",outfit:"street",lines:["This stew sweet!"]},-3.3,-.25,0,!0),a.npc({name:"Kemi",outfit:"ankaraDress",lines:["Add more meat abeg"]},3.2,3.15,Math.PI,!0),a.hot(-2.6,1.25,1,"Sit down & chop 🍽️",()=>n.sitEat(a.toLocal(-2.6,1.25))),a.hot(2.8,-.25,1,"Sit down & chop 🍽️",()=>n.sitEat(a.toLocal(2.8,-.25)))}{const a=s("shop",{ox:360,w:10,d:7,wall:"#ffe066",name:"MAMA NKECHI 🛒",door:xi(-11,-13.3),floor:"#c9c3b6"});for(const l of[-3.6,3.6]){a.box(1.2,2.4,.6,"#8d5a2b",l,1.2,-2.9);for(let r=0;r<4;r++)for(let c=0;c<3;c++){const d=te(new qe(.28,.35,.3),Y(["#e71d36","#06d6a0","#3a86ff","#ffd23f","#ff8fab"][(r+c)%5]),{t:.02});d.position.set(a.ox+l-.35+c*.35,.45+r*.55,-2.55),i.add(d)}}a.box(1,1.9,.8,"#e0f7ff",0,.95,-3),a.box(3.6,1,.8,"#3a86ff",0,.5,-1.2),a.npc({name:"Mama Nkechi",hair:"gele",outfit:"ankaraDress",clothColor:"#3a86ff",lines:["Wetin you wan buy?","Pure water cold!"]},0,-2.1,0),a.hot(0,-.2,1.5,"Buy from Mama Nkechi 🛒",()=>n.shopMenu())}{const a=s("church",{ox:390,w:13,d:10,wall:"#fdfcdc",name:"HOLY GHOST FIRE ⛪",door:xi(13,13.3),floor:"#b23a48"});a.box(4,.5,1.6,"#e9c46a",0,.25,-3.8),a.box(.8,1.1,.5,"#8d5a2b",0,1.05,-3.6,{col:!1});const l=new ht;l.position.set(a.ox,2.4,-4.85),i.add(l),l.add(te(new qe(.18,1.3,.1),Y("#ffd23f",{emissive:"#ffb000"}),{t:.02}));const r=te(new qe(.8,.18,.1),Y("#ffd23f",{emissive:"#ffb000"}),{t:.02});r.position.y=.2,l.add(r),a.npc({name:"Pastor Fire",hair:"bald",outfit:"kaftan",clothColor:"#1a1423",accentColor:"#ffd23f",lines:["Receive your breakthrough!","Somebody shout Hallelujah!","Holy Ghost FIRE! 🔥"]},0,-3.3,0),a.npc({name:"Choir Sis Ada",hair:"braids",outfit:"ankaraDress",clothColor:"#8338ec",lines:["🎶 Alpha and Omega 🎶"]},-4.5,-3.2,.3),a.npc({name:"Choir Bro Tayo",hair:"lowcut",outfit:"kaftan",clothColor:"#8338ec",lines:["🎶 Hallelujah! 🎶"]},4.5,-3.2,-.3);for(let c=0;c<3;c++)for(const d of[-1,1])a.box(4,.45,.5,"#8d5a2b",d*3,.23,-.8+c*1.7);a.npc({name:"Mama Joy",hair:"gele",outfit:"ankaraDress",lines:["Amen! 🙏"]},-4,-1.3,0,!0),a.npc({name:"Bro Sunday",hair:"cap",outfit:"kaftan",lines:["Hallelujah!"]},3.5,.4,0,!0),a.hot(-2.2,.4,1.2,"Sit & pray 🙏",()=>n.pray(a.toLocal(-2.2,.4-.45))),a.hot(0,-2.2,1.4,"Drop offering ₦200 💸",()=>{if(!n.sim.spend(200))return n.toast("You no get ₦200 😅","bad");n.sim.addKarma(2,"offering"),n.toast('Pastor: "God go double am!" 🙏',"good")})}{const a=s("barber",{ox:420,w:10,d:7,wall:"#ff9eb5",name:"GOD'S TIME IS BEST ✂️",door:xi(-62,-13.3),floor:"#f4f1de"});for(const l of[-2,2])a.box(.9,.5,.9,"#1a1423",l,.45,-1.6),a.box(1.6,1,.08,"#bde0fe",l,1.7,-3.15,{col:!1});a.npc({name:"Barber Kola",hair:"lowcut",outfit:"street",clothColor:"#06d6a0",lines:["Low cut na ₦1,500","Next customer!"]},-2,-.6,Math.PI),a.npc({name:"Customer Femi",hair:"afro",outfit:"street",lines:["Make e clean o"]},2,-1.6,0,!0),a.box(3,.4,.5,"#8d5a2b",0,.2,2,{col:!1}),a.hot(-2,-1,1.3,"Barb hair ₦1,500 ✂️",()=>n.haircut())}{const a=s("pharmacy",{ox:450,w:9,d:6.5,wall:"#e0fff0",name:"ALHAJI PHARMACY ➕",door:xi(29,13.8),floor:"#ffffff"});a.box(3.4,1,.8,"#06d6a0",0,.5,-1.2);for(let l=0;l<6;l++){const r=te(new qe(.3,.3,.2),Y(["#ff8fab","#ffffff","#3a86ff"][l%3]),{t:.02});r.position.set(a.ox-1.6+l*.6,1.7,-3.05),i.add(r)}a.npc({name:"Alhaji Musa",hair:"cap",outfit:"kaftan",clothColor:"#ffffff",accentColor:"#06d6a0",lines:["Paracetamol dey","Wetin dey do you?"]},0,-2.1,0),a.hot(0,-.2,1.4,"Buy medicine 💊",()=>n.modal("Alhaji Pharmacy ➕",'"Wetin dey do you, my pikin?"',[{label:"Paracetamol & Lucozade",sub:"+20 Body",price:j(800),disabled:n.sim.s.cash<800,onClick:()=>{n.sim.spend(800),n.sim.s.energy=Math.min(100,n.sim.s.energy+20),n.toast("Body don dey better 💊","good")}},{label:"Vitamin C",sub:"+8 Mind",price:j(400),disabled:n.sim.s.cash<400,onClick:()=>{n.sim.spend(400),n.sim.s.mood=Math.min(100,n.sim.s.mood+8)}},{label:"Comot",close:!0}]))}return t.doorHot=()=>{if(t.cur||n.activityName())return null;for(const a of Object.values(t.list))if(Math.hypot(n.pos.x-a.door.x,n.pos.z-a.door.z)<2)return{label:`Enter ${a.name}`,act:()=>t.enter(a.id)};return null},t.enter=(a,l=!1)=>{const r=t.list[a];if(t.entering)return;t.entering=!0;const c=()=>{t.entering=!1,t.cur=r,n.pos.set(r.ox,0,r.d/2-1.1),n.setRot(Math.PI),n.carry.drop(),n.snapCam(),n.audio.tone(660,.1,"sine",.08)};return l?c():n.fade(`🚪 ${r.name}`,250,c)},t.exit=()=>{const a=t.cur;if(!(!a||t.exiting))return t.exiting=!0,n.fade("🚪 Outside",250,()=>{t.exiting=!1,t.cur===a&&(t.cur=null,n.pos.set(a.door.x,0,a.door.z+(a.door.z<0?1.4:-1.4)),n.setRot(a.door.z<0?0:Math.PI),n.snapCam())})},t.hot=()=>{if(!t.cur||n.activityName())return null;let a=null,l=1e9;for(const r of t.cur.hots){const c=Math.hypot(n.pos.x-r.pos.x,n.pos.z-r.pos.z);c<r.r&&c<l&&(l=c,a=r)}return a},t.resolve=(a,l=.35)=>{const r=t.cur;if(r){a.x=Tt.clamp(a.x,r.ox-r.w/2+.3+l,r.ox+r.w/2-.3-l),a.z=Tt.clamp(a.z,-r.d/2+.3+l,r.d/2-.25);for(const c of r.cols){const d=Tt.clamp(a.x,c.minX,c.maxX),p=Tt.clamp(a.z,c.minZ,c.maxZ),f=a.x-d,h=a.z-p,y=Math.hypot(f,h);y<l&&(y>1e-5?(a.x=d+f/y*l,a.z=p+h/y*l):a.z=c.maxZ+l)}}},t.update=a=>{var l;for(const r of Object.values(t.list))if((l=r.update)==null||l.call(r),r===t.cur)for(const c of r.npcs)cn(c.mesh,a,0,n.time),c.talkT-=a,c.talkT<0&&c.lines&&(c.talkT=7+Math.random()*8,pe(c.mesh,c.lines[Math.floor(Math.random()*c.lines.length)],3))},t.hairStyles=sr,t}const id=n=>n[Math.floor(Math.random()*n.length)];function Xy(n){const e=new ht;if(n==="crate"){e.add(te(new qe(.7,.5,.55),Y("#c68642"),{t:.03}));const t=te(new qe(.72,.08,.57),Y("#8d5a2b"),{outline:!1});t.position.y=.1,e.add(t)}else if(n==="water")for(let t=0;t<4;t++){const i=te(new Tn(.17,8,6),Y("#bfe9ff",{opacity:.85}),{t:.02});i.scale.y=.6,i.position.set(t%2*.28-.14,0,Math.floor(t/2)*.28-.14),e.add(i)}else if(n==="ball")e.add(te(new Ji(.2,1),Y("#ff6b35"),{t:.02}));else if(n==="chair"){const t=Y("#3a86ff"),i=te(new qe(.5,.06,.5),t,{t:.02});i.position.y=.42,e.add(i);const s=te(new qe(.5,.5,.06),t,{t:.02});s.position.set(0,.68,-.22),e.add(s);for(const[o,a]of[[-.21,-.21],[.21,-.21],[-.21,.21],[.21,.21]]){const l=te(new Wt(.03,.03,.42,5),t,{outline:!1});l.position.set(o,.21,a),e.add(l)}}else if(n==="bucket"){e.add(te(new Wt(.25,.19,.4,12),Y("#ffd23f"),{t:.03}));const t=te(new Wt(.22,.22,.02,12),Y("#7ec8e3"),{outline:!1});t.position.y=.15,e.add(t)}else if(n==="phone"){e.add(te(new qe(.16,.03,.3),Y("#1a1423"),{t:.02}));const t=te(new qe(.13,.01,.25),Y("#5ad1ff",{emissive:"#3aa0ff"}),{outline:!1});t.position.y=.02,e.add(t)}else if(n==="bread"){const t=te(new Do(.13,.35,4,8),Y("#e9a94f"),{t:.02});t.rotation.z=Math.PI/2,e.add(t)}return e}const uo={crate:{name:"crate",ic:"📦",head:!0,h:.25},water:{name:"pure water bag",ic:"💧",head:!0,h:.1},ball:{name:"ball",ic:"⚽",h:.2},chair:{name:"plastic chair",ic:"🪑",h:0},bucket:{name:"bucket",ic:"🪣",head:!0,h:.2},phone:{name:"lost phone",ic:"📱",h:.02},bread:{name:"Agege bread",ic:"🍞",h:.13}};function Yy(n){const{world:e}=n,t={props:[],held:null},i=e.root;t.spawn=(m,u,g,M={})=>{const w=Xy(m);w.position.set(u,0,g),i.add(w);const E={type:m,mesh:w,vel:new P,flying:!1,...M};return t.props.push(E),E},[[-24.5,11.6],[-23.6,11.8],[-19.2,11.4]].forEach(([m,u])=>t.spawn("crate",m,u)),[[-9.4,-12.4],[-12.8,-12.2]].forEach(([m,u])=>t.spawn("water",m,u)),t.spawn("ball",36,22.6),t.spawn("ball",-2,-22),[[15.6,-12.4],[20.4,-12.6]].forEach(([m,u])=>t.spawn("chair",m,u)),t.spawn("bucket",-32.6,-12.6),t.spawn("bucket",3.5,12.4);const s=["Bisi","Emeka","Ngozi","Kunle","Aisha"];t.spawn("phone",-40,5.6,{owner:id(s)});const o=new ts(1.2,.1,6,24);let a=null;t.errand=m=>{t.held&&p();const u=t.spawn("crate",n.pos.x+.6,n.pos.z,{errand:{from:m.name,to:"Mama Tomato"}});r(u);const g=e.npcs.find(M=>M.name==="Mama Tomato");g&&(a=new Ae(o,Y("#06d6a0",{emissive:"#06d6a0",unique:!0})),a.rotation.x=Math.PI/2,a.position.set(g.mesh.position.x,.15,g.mesh.position.z-1.4),i.add(a)),n.toast("Errand: carry the crate go Mama Tomato for Yaba Market 📦","good")};function l(){let m=null,u=1.5;for(const g of t.props){if(g===t.held||g.flying)continue;const M=Math.hypot(g.mesh.position.x-n.pos.x,g.mesh.position.z-n.pos.z);M<u&&(u=M,m=g)}return m}function r(m){const u=n.player.userData,g=uo[m.type],M=n.sim.s.stock.water+n.sim.s.stock.gala>0;m.onHead=g.head&&!M&&!u.head.children.some(w=>w.userData.isLoad),i.remove(m.mesh),m.vel.set(0,0,0),m.flying=!1,m.onHead?(u.head.add(m.mesh),m.mesh.position.set(0,.62+g.h*.3,0),m.mesh.rotation.set(0,0,0)):(n.player.add(m.mesh),m.mesh.position.set(0,.72,.42),m.mesh.rotation.set(0,0,0)),t.held=m,n.audio.click(),n.toast(`You carry ${g.name} ${g.ic}`)}function c(){var u;const m=t.held;return m?((u=m.mesh.parent)==null||u.remove(m.mesh),i.add(m.mesh),t.held=null,m):null}function d(){const m=n.rotY();return new P(Math.sin(m),0,Math.cos(m))}function p(){const m=c();m&&(m.mesh.position.copy(n.pos).addScaledVector(d(),.7),m.mesh.position.y=0,n.audio.tone(160,.08,"triangle",.08))}function f(){const m=c();if(!m)return;const u=d();m.mesh.position.copy(n.pos).addScaledVector(u,.5),m.mesh.position.y=1.3;const g=m.type==="ball"?11:m.type==="chair"||m.type==="crate"?5:8;m.vel.copy(u).multiplyScalar(g),m.vel.y=4,m.flying=!0,m.hit=!1,n.audio.kick()}t.drop=p;const h=()=>{const m=t.held;if(!m)return null;const u=n.sim.s,g=n.social.nearest(2.2);return m.errand&&g&&g.name===m.errand.to?{label:`Give crate to ${g.name} 📦`,fn:()=>{c(),y(m),a&&(i.remove(a),a=null),n.sim.earn(400,"errand"),n.sim.addRel(m.errand.from,8),n.sim.addRel(g.name,4),n.sim.addKarma(2,"errand"),pe(g.mesh,`Ah! ${m.errand.from} send am? Thank you!`,3),n.toast(`Errand done +${j(400)} 📦`,"money")}}:m.type==="phone"&&g?{label:`Give phone to ${g.name}`,fn:()=>{c(),y(m),g.name===m.owner?(n.sim.addKarma(5,"returned phone"),n.sim.addRel(g.name,20),n.sim.earn(500,"reward"),u.statsV3.returned++,pe(g.mesh,"My phone!!! God bless you! Take ₦500 🙏",3.5)):(n.sim.addKarma(1),pe(g.mesh,`No be my own o. Na ${m.owner} get am, I go give am`,3.5))}}:m.type==="phone"&&Math.hypot(n.pos.x-50,n.pos.z+13.8)<4?{label:"Sell phone to GistMe Phones 🤫",fn:()=>{c(),y(m),n.sim.earn(3e3,"phone"),n.sim.addKarma(-8,"sold stolen phone"),n.toast("Sold for ₦3,000... your conscience dey shout 😬","bad")}}:(m.type==="water"||m.type==="bread")&&g?{label:`Give ${uo[m.type].name} to ${g.name}`,fn:()=>{c(),y(m),n.sim.addRel(g.name,10),n.sim.addKarma(1),pe(g.mesh,"Ah thank you! You get good heart 😊",3)}}:m.type==="water"?{label:"Drink pure water 💧",fn:()=>{c(),y(m),u.hunger=Math.min(100,u.hunger+4),u.mood=Math.min(100,u.mood+4),u.energy=Math.min(100,u.energy+3),n.toast("Cold water! 💧 +Mind +Body","good")}}:m.type==="bread"?{label:"Chop the bread 🍞",fn:()=>{c(),y(m),u.hunger=Math.min(100,u.hunger+20),n.toast("Agege bread sweet! +20 Belle 🍞","good")}}:m.type==="chair"?{label:"Sit for chair 🪑",fn:()=>{p(),n.sitChair(m)}}:m.type==="crate"&&g&&/Mama|Iya|Uncle/.test(g.name)?{label:`Sell crate to ${g.name}`,fn:()=>{c(),y(m),n.sim.earn(200,"crate"),pe(g.mesh,"I go use am for market. Take ₦200",3)}}:m.type==="bucket"?{label:"Pour water (cool down) 🪣",fn:()=>{u.mood=Math.min(100,u.mood+3),n.toast("Ahh, cold water for head 😌")}}:null};function y(m){var u;i.remove(m.mesh),(u=m.mesh.parent)==null||u.remove(m.mesh),t.props.splice(t.props.indexOf(m),1)}return t.give=m=>{t.held&&p();const u=t.spawn(m,n.pos.x,n.pos.z);r(u)},t.buttons=()=>{if(t.held){const u=h(),g=uo[t.held.type];return[...u?[{label:u.label,key:"u",onClick:u.fn}]:[],{label:`Throw ${g.ic}`,key:"t",onClick:f},{label:`Drop ${g.ic}`,key:"g",onClick:p}]}const m=l();return m?[{label:`Pick up ${uo[m.type].name} ${uo[m.type].ic}`,key:"g",onClick:()=>r(m)}]:[]},t.update=m=>{for(const u of t.props){if(!u.flying)continue;u.vel.y-=14*m,u.mesh.position.addScaledVector(u.vel,m),u.mesh.rotation.x+=m*6;const g=u.mesh.position.clone();if(n.resolve(u.mesh.position,.2),g.distanceToSquared(u.mesh.position)>1e-4&&(u.vel.x*=-.4,u.vel.z*=-.4),!u.hit)for(const M of n.social.people())M.mesh.position.distanceTo(u.mesh.position.clone().setY(M.mesh.position.y+1))<.9&&(u.hit=!0,n.sim.addRel(M.name,-6),pe(M.mesh,id(["Who throw am?! 😡","Ah! My head!","You wan kill me?!"]),3),n.audio.tone(220,.1,"square",.1),u.vel.multiplyScalar(-.3));if(!u.hit)for(const M of e.vehicles)M.mesh.position.distanceTo(u.mesh.position)<1.8&&(u.hit=!0,n.audio.horn(),u.vel.multiplyScalar(-.3));u.mesh.position.y<=0&&(u.mesh.position.y=0,Math.abs(u.vel.y)>2&&u.type==="ball"?u.vel.y*=-.55:(u.vel.y=0,u.vel.x*=.6,u.vel.z*=.6),u.vel.length()<.4&&(u.flying=!1,u.mesh.rotation.x=0))}a&&(a.rotation.z+=m)},t.pose=m=>{if(t.held&&!t.held.onHead){const u=m.userData.arms;u[0].rotation.x=u[1].rotation.x=-1.3}else if(t.held&&t.held.onHead){const u=m.userData.arms;u[0].rotation.x=-2.8}},t}const St=n=>n[Math.floor(Math.random()*n.length)],qy={polite:["Good morning, how una dey?","Good day sir/ma, hope family dey fine?","Well done o! How work?"],joke:["Who send you to fine like this today? 😂","This sun go turn us to suya o 😂","You don chop? Because I never see food since Monday 😂"],pidgin:["How far now, my person?","Wetin dey sup? You dey kampe?","Area! Shey you dey hold body?"],rude:["Comot for my front jare!","Why you dey look me like that?","Your face be like say you owe me money"],help:["Abeg, you fit help me with small money?","I dey hungry, abeg you get anything?"],job:["You get any work for me? I dey find hustle","Abeg you know where dem dey find worker?"],gossip:["Wetin dey happen for this area? Give me gist!","You hear anything new?"]},xa={polite:{good:["Ah, we thank God! You too dey try 😊","Fine o, God bless you my pikin","We dey kampe! Thank you for asking"],bad:["Hmm. We dey.","Okay.","Wetin you want?"]},joke:{good:["😂😂 You no well!","Hahaha! You go kill me with laugh","Ehn! You be comedian 😂"],bad:["That one no funny","I no get time for play","🙄"]},pidgin:{good:["I dey kampe my guy! You nko?","Body dey inside cloth 💪","We dey push, no shaking!"],bad:["Who be your guy?","I no know you o","Hmm, waka pass"]},rude:{good:["Ehn?! Na me you dey talk to like that?","Watch your mouth o!","Wetin I do you?"],bad:["You get mouth o! Comot!","Na your papa face! 😤","If you try me again ehn..."]}},sd=["Ah my person! How you dey?","Odogwu! Long time","My guy! 👋","See my favourite customer!"],od=["See this one again 🙄","Na you again?","Hmm, waka pass","Rude person dey come"];function Ky(n){const{world:e}=n,t={},i=new Map,s=[];t.register=p=>s.push(p);function o(){const p=[];for(const f of e.walkers)p.push({ref:f,mesh:f.mesh,name:f.name,walker:!0});for(const f of e.npcs)f.name&&f.mesh.visible&&p.push({ref:f,mesh:f.mesh,name:f.name.replace(/ \(.*\)/,"")});for(const f of s)f.mesh.visible&&p.push({ref:f,mesh:f.mesh,name:f.name});return p}t.people=o,t.nearest=(p=1.9)=>{let f=null,h=p;const y=new P;for(const m of o()){m.mesh.getWorldPosition(y);const u=Math.hypot(y.x-n.pos.x,y.z-n.pos.z);u<h&&(h=u,f=m)}return f};const a=(p,f,h)=>{const y=new P;p.getWorldPosition(y),p.rotation.y=Math.atan2(f-y.x,h-y.z)};t.hot=()=>{if(n.activityName())return null;const p=(e.convs||[]).find(h=>!h.paused&&h.T&&h.members.some(y=>Math.hypot(y.mesh.position.x-n.pos.x,y.mesh.position.z-n.pos.z)<2.4));if(p)return{label:`Join their gist 💬 (${p.T.id})`,act:()=>d(p)};const f=t.nearest(1.9);return f&&!f.ref.conv?{label:`Talk to ${f.name} 💬`,act:()=>r(f)}:null};function l(p){return p>=40?"Paddy 🤝":p>=15?"Friendly 🙂":p<=-40?"Enemy 😡":p<=-15?"Vexed 😒":"Neutral 😐"}t.relWord=l;async function r(p){const f=n.sim,h=f.s;p.walker&&(p.ref.busy=!0),a(p.mesh,n.pos.x,n.pos.z),h.statsV3.talks++;const y=f.rel(p.name)>=15?St(sd):f.rel(p.name)<=-15?St(od):St(["Hello?","Yes? How far?","Good day o"]);pe(p.mesh,y,3);let m=0,u=new Set;for(;m<3;){const g=St(["help","job","gossip"].filter(b=>!u.has(b)))||"gossip",w=[Math.random()<.5?"polite":"pidgin","joke","rude",g].filter(b=>!u.has(b)||b==="rude").map(b=>({id:b,label:St(qy[b]),tag:{polite:"Polite",pidgin:"Pidgin",joke:"Joke",rude:"Rude",help:"Ask help",job:"Ask job",gossip:"Gossip"}[b]}));w.push({id:"bye",label:"Okay, later o 👋",tag:"Bye"});const E=await n.wheel({who:p.name,text:m?"Wetin else?":y,sub:`Relationship: ${l(f.rel(p.name))} (${f.rel(p.name)})`,options:w});if(!E||E.id==="bye")break;u.add(E.id),m++,pe(n.player,E.label,2.6),await n.wait(900);const L=c(p,E.id);if(pe(p.mesh,L,3.5),await n.wait(1100),E.id==="rude"&&f.rel(p.name)<-30)break}p.walker&&setTimeout(()=>p.ref.busy=!1,600),n.save()}function c(p,f){var M;const h=n.sim,y=h.s,m=p.name,u=h.rel(m),g=Math.random()+u/200+(y.mood-50)/300+y.karma/300;if(f==="polite"||f==="pidgin")return h.addRel(m,3+(g>.7?2:0)),St(xa[f][u>=-15?"good":"bad"]);if(f==="joke")return g>.45?(h.addRel(m,4),y.mood=Math.min(100,y.mood+2),St(xa.joke.good)):(h.addRel(m,-1),St(xa.joke.bad));if(f==="rude")return h.addRel(m,-8),h.addKarma(-1),St(xa.rude[u>0?"good":"bad"]);if(f==="gossip"){if(h.addRel(m,2),(M=n.events)!=null&&M.chakam&&Math.random()<.6)return`I hear say ${n.events.chakam.e.name.toLowerCase()} dey happen for ${n.events.chakam.e.spot} 👀`;const w=St(mu);return`${St(w.o)} ${St(w.f)}`}if(f==="help"){if(u>=20&&g>.6){const w=St([200,300,500]);return h.earn(w,"help"),h.addRel(m,-3),`Take ${j(w)}, buy food. No tell anybody 🤫`}return h.addRel(m,-1),St(["Me sef dey find help 😩","Abeg, I no get o","Go hustle, no food for lazy man!"])}return f==="job"?u>=10&&n.carry&&Math.random()<.7?(n.carry.errand(p),"Carry this crate go give Mama Tomato for market. I go settle you!"):St(["Go Ojuelegba, Danfo driver dey find conductor","Buy pure water from Mama Nkechi go hawk am","Your Keke dey house, go drive am!","Pastor dey find people wey go clean church"]):"..."}async function d(p){const f=n.sim,h=f.s,y=p.T;p.paused=!0,h.statsV3.gists++;for(const M of p.members)a(M.mesh,n.pos.x,n.pos.z);const m=p.members.map(M=>M.name).filter(Boolean);pe(p.members[0].mesh,St(["Ehen! Come join us","You don hear this gist?",`We dey talk about ${y.id}`]),3);let u=0,g=y;for(;u<3;){const M=await n.wheel({who:m.join(" & "),text:`Gist: ${g.id.toUpperCase()}`,sub:"Join the gist",options:[{id:"agree",tag:"Agree",label:St(g.x)},{id:"disagree",tag:"Disagree",label:St(["Abeg, no be so!","Una no know anything 😂","I no gree with that one"])},{id:"joke",tag:"Joke",label:St(["😂 Na una go cause wahala for this street","If na me, I go don japa 😂","This gist sweet pass jollof"])},{id:"change",tag:"New topic",label:"Leave that one, una hear about..."},{id:"leave",tag:"Leave",label:"Make I dey go o 👋"}]});if(!M||M.id==="leave")break;u++,pe(n.player,M.id==="change"?"Leave that one... 👀":M.label,2.6),await n.wait(900);const w=St(p.members);if(M.id==="agree")m.forEach(E=>f.addRel(E,2)),pe(w.mesh,St(["Na correct talk!","You sabi! 👏","Exactly my point!"]),3);else if(M.id==="disagree")m.forEach(E=>f.addRel(E,Math.random()<.5?1:-3)),pe(w.mesh,St(["Ehn? Explain yourself!","You dey whine?","Okay o, your opinion 😒"]),3);else if(M.id==="joke"){const E=Math.random()+h.mood/200>.6;m.forEach(L=>f.addRel(L,E?3:-1)),pe(w.mesh,E?"😂😂 This one no well!":"Hmm, no be time for play",3),E&&(h.mood=Math.min(100,h.mood+2))}else if(M.id==="change"){const E=ql(2,n.evCtx());g=E.t,pe(n.player,E.lines[0][1],3),await n.wait(1e3),pe(w.mesh,E.lines[1][1],3)}await n.wait(1100)}p.paused=!1,p.i=p.lines.length,n.save()}return t.update=p=>{if(n.activityName()||n.isBusy())return;const f=n.sim;for(const h of o()){const y=f.rel(h.name);if(Math.abs(y)<15||h.ref.conv)continue;Math.hypot(h.mesh.position.x-n.pos.x,h.mesh.position.z-n.pos.z)<3.2&&(i.get(h.name)||0)<n.time&&(i.set(h.name,n.time+45),pe(h.mesh,St(y>0?sd:od),2.8))}},t}const on=n=>n[Math.floor(Math.random()*n.length)],Zr=(n,e)=>n+Math.random()*(e-n);function jy(n){const{world:e}=n,t={},i={v:null,dest:null};t.ride=i;const s=()=>e.vehicles.find(_=>_.type==="danfo"&&!_.conductor&&!_.ride&&!_.turn&&_.speed<.8&&_.mesh.position.distanceTo(new P(n.pos.x,0,n.pos.z))<3.4);t.hot=()=>{if(n.activityName())return null;const _=s();return _?{label:"Enter Danfo 🚌",act:()=>o(_)}:null};async function o(_){const S=n.sim,C=S.s;_.hold=!0;const v=_.mesh.userData.driver,x=oi.reduce((ne,se)=>Math.abs(se.x-_.mesh.position.x)<Math.abs(ne.x-_.mesh.position.x)?se:ne),R=oi.filter(ne=>ne!==x),I=await n.wheel({who:"Conductor",text:on(["Where you dey go? Quick quick!","Enter with your change o!",`${x.name}! Wetin be your stop?`]),sub:`Normal fare ${j(S.danfoFare)}`,options:[...R.map(ne=>({id:ne.id,tag:"Stop",label:`${ne.name} 📍`})),{id:"no",tag:"Comot",label:"No mind me, I no dey go"}]});if(!I||I.id==="no"){_.hold=!1;return}const N=oi.find(ne=>ne.id===I.id),k=Math.random()-C.karma/200;if(k>.85){pe(v||_.mesh,"We no dey go there! Comot! 🙅🏾",3),n.toast("Conductor refuse to carry you 😒","bad"),_.hold=!1;return}let U=S.danfoFare,G=k>.5;G&&(U=Math.round(U*on([1.5,2])/50)*50);const V=await n.wheel({who:"Conductor",text:G?`Na ${j(U)}! Fuel don cost, no argue 😤`:`${N.name}? ${j(U)}. Enter!`,sub:G?`He dey overcharge (normal ${j(S.danfoFare)})`:"Fair fare",options:[{id:"pay",tag:"Pay",label:`Take ${j(U)}`,disabled:C.cash<U},...G?[{id:"barg",tag:"Bargain",label:`Abeg, na ${j(S.danfoFare)} be the price!`}]:[],{id:"no",tag:"Comot",label:"Forget am, I go trek"}]});if(!V||V.id==="no"){_.hold=!1;return}if(V.id==="barg")if(pe(n.player,`Abeg na ${j(S.danfoFare)}!`,2.5),await n.wait(900),Math.random()+C.karma/150+S.rel("Conductor")/100>.5)U=S.danfoFare,pe(v||_.mesh,"Oya enter, no talk too much 🙄",3),S.addRel("Conductor",-1);else{pe(v||_.mesh,"Na wetin I talk be the price! Comot!",3),_.hold=!1;return}if(!S.spend(U)){_.hold=!1;return}C.statsV3.rides++,n.carry.held&&n.carry.drop(),Object.assign(i,{v:_,dest:N,fare:U}),_.ride=!0,_.hold=!1,_.wait=.8,_.lastStop=x.id,n.player.position.set(-.5,.55,.45),n.player.rotation.set(0,Math.PI/2,0),n.player.scale.setScalar(.8),si(n.player),_.mesh.add(n.player),n.audio.conductor(),n.toast(`You don enter Danfo to ${N.name} 🚌 (${j(U)})`,"good"),n.startActivity(a)}const a={name:"ride",camDist:12,camPitch:.5,buttons:()=>[{label:"Owa o! (I dey drop) 🛑",key:"x",onClick:()=>{i.early=!0,pe(n.player,"Owa o! Conductor, I dey drop!",2.5)}}],update(_){const S=i.v;if(n.pos.copy(S.mesh.position),n.moveAmt=0,n.camYawTo(Math.atan2(-Math.cos(S.mesh.rotation.y),Math.sin(S.mesh.rotation.y))+.3,_*2),i.early&&!S.turn&&S.speed<3){i.early=!1,S.wait=2,l();return}i.early&&(S.hold=!0),Math.random()<_*.08&&pe(S.mesh.userData.driver||S.mesh,on(["Shift for front!","Who never pay?","Owa! Owa!","Change dey?"]),2.5),n.actHud(`<b>🚌 Danfo to ${i.dest.name}</b><br><small>Sit tight... conductor dey shout. Fare paid ${j(i.fare)}</small>`)},onEnd(){n.actHud("")}};e.onRideStop=(_,S)=>{_===i.v&&S.id===i.dest.id&&(pe(_.mesh.userData.driver||_.mesh,`${S.name}! Owa! Owa!`,3),l())};function l(){const _=i.v;_&&(_.ride=!1,_.hold=!1,_.wait=1.2,_.mesh.remove(n.player),n.scene.add(n.player),n.player.scale.setScalar(1),n.player.userData.sitting=!1,n.pos.set(_.mesh.position.x-_.dir*.5,0,_.dir>0?6.4:-6.4),n.setRot(_.dir>0?0:Math.PI),i.v=null,n.endActivity(),n.audio.tone(500,.1,"triangle",.1),n.save())}t.alight=l;const r=_=>Math.abs(_.z)<4.6&&Math.abs(_.x)<82||Math.abs(_.x)<3.8&&Math.abs(_.z)<29;t.onRoad=r;let c=null,d=0;t.rage=()=>c,t.update=_=>{if(d-=_,c)return u(_);if(!(n.activityName()||n.isBusy()||n.inside()||d>0||!r(n.pos))){for(const S of e.vehicles)if(!(!S.blockT||S.mesh.userData.isPlayer)&&(S.blockT>.6&&(S.honkT||0)<n.time&&(S.honkT=n.time+1.4,n.audio.horn(),pe(S.mesh.userData.driver||S.mesh,on(["Comot for road!","Oya shift!","You dey craze?!","PIM PIM! 📯"]),1.6)),S.blockT>4)){f(S);break}}};function p(_,S,C){const v=vn({...Nn(),outfit:"street",..._});return v.position.set(S,0,C),e.root.add(v),v}function f(_){_.hold=!0,_.blockT=0;const S=_.mesh.position,C=_.axis==="x"?new P(0,0,_.dir>0?-1.5:1.5):new P(1.5,0,0),v=[{mesh:p({name:"Driver",hair:"cap"},S.x+C.x,S.z+C.z),name:_.type==="danfo"?"Danfo Driver":"Keke Driver"}];_.type==="danfo"&&v.push({mesh:p({name:"Conductor",hair:"lowcut",clothColor:"#e71d36"},S.x-C.x,S.z-C.z),name:"Conductor"});const x=e.walkers.filter(R=>!R.conv&&!R.busy).sort((R,I)=>R.mesh.position.distanceTo(n.pos)-I.mesh.position.distanceTo(n.pos)).slice(0,4);x.forEach((R,I)=>{R.busy=!0,R.ring=I/x.length*Math.PI*2+.5}),c={v:_,crew:v,look:x,t:0,phase:"approach",hits:0},n.startActivity(h),n.audio.horn(),pe(v[0].mesh,on(["You dey mad?! You wan make I jam you?!","Na your papa get this road?!","Who born you?!"]),3)}const h={name:"confront",camDist:9,camPitch:.6,buttons:()=>[],update(){},onEnd(){}},y=["You go pay for my time!","Oya talk! Wetin you dey find for road?","Today na today!","I go show you pepper!"],m=["Fight! Fight! 😱","Leave am, e no know road","Na wa o!","Una no go settle?","Film am! 📸","Ah, beat am small 😂","Peace! Peace!"];function u(_){const S=c;S.t+=_;const C=n.pos;S.crew.forEach((v,x)=>{const I=new P(C.x+(x?-1.1:1.1),0,C.z+.4).clone().sub(v.mesh.position);I.y=0;const N=I.length();if(S.phase!=="leave"&&N>.15&&v.mesh.position.addScaledVector(I.normalize(),Math.min(N,3.2*_)),S.phase==="leave"){const k=S.v.mesh.position.clone().sub(v.mesh.position);k.y=0,k.length()>.3&&v.mesh.position.addScaledVector(k.normalize(),3*_)}v.mesh.rotation.y=Math.atan2(C.x-v.mesh.position.x,C.z-v.mesh.position.z),S.phase==="leave"&&(v.mesh.rotation.y+=Math.PI),v.mesh.userData.talk=S.phase==="beat"?1:v.mesh.userData.talk,cn(v.mesh,_,N>.15?1:0,n.time)}),S.look.forEach(v=>{const x=v.ring+S.t*.05,R=C.x+Math.cos(x)*3.6,I=C.z+Math.sin(x)*3.6,N=new P(R-v.mesh.position.x,0,I-v.mesh.position.z),k=N.length();k>.2&&S.phase!=="leave"&&v.mesh.position.addScaledVector(N.normalize(),Math.min(k,2.4*_)),v.mesh.rotation.y=Math.atan2(C.x-v.mesh.position.x,C.z-v.mesh.position.z),cn(v.mesh,_,k>.2?1:0,n.time),Math.random()<_*.25&&pe(v.mesh,on(m),2.2)}),S.phase==="approach"&&(Math.random()<_*.6&&pe(on(S.crew).mesh,on(y),2.4),S.t>2.2&&(S.phase="choose",g())),S.phase==="beat"&&L(_),S.phase==="leave"&&(S.leaveT-=_)<=0&&b()}async function g(){const _=n.sim.s,S=c,C=S.v.type==="danfo"?1e3:500,v=await n.wheel({who:S.crew.map(N=>N.name).join(" & "),text:on(["Wetin you get to talk?! 😡","Explain yourself now now!","You block our road! Answer!"]),sub:"Dem don vex. Choose wisely...",options:[{id:"beg",tag:"Apologise",label:"Abeg, I no see una. Na my fault 🙏"},{id:"argue",tag:"Argue",label:"Na una dey drive like mad people!"},{id:"insult",tag:"Insult",label:"Your Danfo be like coffin on wheels 😂"},{id:"fight",tag:"Fight back",label:"Oya come! I no dey fear! 👊"},{id:"run",tag:"Run",label:"Zoom comot! 🏃🏾"},{id:"pay",tag:"Pay off",label:`Take ${j(C)}, make peace reign`,disabled:_.cash<C}]}),x=(v==null?void 0:v.id)||"beg";pe(n.player,(v==null?void 0:v.label)||"...",2.4),await n.wait(800);const R=Math.random()+_.karma/200+(_.mood-50)/300,I=S.crew[0].mesh;if(x==="beg")return R>.35?(pe(I,"Next time shine your eye! Mumu 🙄",3),_.mood=Math.max(0,_.mood-3),M("Dem forgive you. Shine your eye for road 😅")):(pe(I,"Sorry no dey cook food! Na slap you go collect!",3),w(2));if(x==="argue")return R>.6?(pe(I,"Hmm... you get mouth. Waka!",3),M("You talk your way out! 🗣️")):(pe(I,"You dey argue with me?!",3),w(3));if(x==="insult")return n.sim.addKarma(-2,"insult"),R>.92?(pe(I,"😂😂 This one craze. Leave am",3),M("Your insult make dem laugh. Lucky you!")):(pe(I,"COFFIN?! Hold am!!",3),w(5));if(x==="fight")return _.statsV3.fights++,R+(_.energy-50)/200>.62?(pe(I,"Haa! This one get power! Run!",3),n.sim.addKarma(-3,"fight"),_.mood=Math.min(100,_.mood+6),S.crew.forEach(N=>pe(N.mesh,"😱",1.5)),n.toast("You win the fight! Crowd dey hail you 👊","good"),M(null,!0)):(pe(I,"You wan fight? Oya!",2.5),w(4));if(x==="run")return await n.mash({label:"RUN! Tap fast to escape! 🏃🏾",taps:12,secs:3.5})?(n.pos.z=n.pos.z>0?7.4:-7.4,n.pos.x+=5,_.mood=Math.max(0,_.mood-2),pe(I,"Run! We go see you again!",3),M("You escape! 🏃🏾💨")):(pe(I,"Where you dey go?! Hold am!",2.5),w(4));if(x==="pay")return n.sim.spend(C),pe(I,"Oya, God bless you. Next time no block road",3),M(`You pay ${j(C)} to settle 💸`)}function M(_,S){const C=c;C.phase="leave",C.leaveT=2.5,_&&n.toast(_,S?"good":""),n.pos.z=Math.abs(n.pos.z)<4.6?Math.sign(n.pos.z||1)*6:n.pos.z}function w(_){const S=c;S.phase="beat",S.hits=_,S.hitT=.2,n.sim.s.statsV3.beaten++}const E=["💥 SLAP!","👋 PAH!","💢 SHOVE!","⭐ POW!","💥 GBAM!"];function L(_){const S=c;if(S.hitT-=_,S.hitT>0)return;if(S.hits<=0){const R=n.sim.s,I=Math.min(R.cash,Math.round(Zr(200,800)/50)*50);R.energy=Math.max(0,R.energy-20),R.mood=Math.max(0,R.mood-15),R.cash-=I,n.modal("Dem beat you small 🤕",`Driver and conductor don give you slap and shove. You lose <b>-20 Body</b>, <b>-15 Mind</b>${I?` and ₦${I} fall comot for your pocket`:""}. Onlookers dey laugh. Next time comot for road!`,[{label:"Ouch... okay 😵",close:!0}]),M(null);return}S.hits--,S.hitT=.55;const C=on(S.crew),v=n.pos.clone().sub(C.mesh.position);v.y=0,v.normalize(),C.mesh.position.addScaledVector(v,.4),n.pos.addScaledVector(v,.35),n.shake(.35),pe(n.player,on(E),.5),pe(C.mesh,on(["Take!","Mumu!","Next time!","Ehen!"]),.6),n.audio.tone(Zr(150,260),.12,"square",.18),n.audio.tone(Zr(800,1200),.05,"sawtooth",.08);const x=on(S.look);x&&pe(x.mesh,on(["Ehh!! 😱","Haa! Leave am!","E don collect 😂"]),1.5)}function b(){const _=c;_.crew.forEach(S=>e.root.remove(S.mesh)),_.look.forEach(S=>{S.busy=!1,S.mesh.position.z=Tt.clamp(S.mesh.position.z,S.z-.01,S.z+.01),S.mesh.position.z=S.z,S.tx=S.mesh.position.x}),_.v.hold=!1,_.v.blockT=0,c=null,d=25,n.activityName()==="confront"&&n.endActivity(),n.save()}return t}const Jy=n=>n[Math.floor(Math.random()*n.length)],Zy={pre:["You? You wan play me? 😂","I go wash you today!","Bring your money, na my own now","Your papa no fit beat me sef","Today na your judgement day"],lead:["Ehen! Feel am! 😂","You dey learn work!","Na so I dey do am!","Call your mama make she come see"],behind:["Na luck you dey use!","Wait, I never start!","Ehn?! E no go happen again","Na beginner luck"],win:["I tell you! Odogwu! 🏆","Go home and practice 😂","Thank you for your money!","Who next?!"],lose:["You cheat! 😤","Na this sun cause am","Rematch! Now now!","I no dey feel fine today","You go see me tomorrow!"]};function Qy(n){const e={},t=()=>{const i=n.sim.s;return i.rivals||(i.rivals={}),i.streaks||(i.streaks={}),i.bestStreak||(i.bestStreak={}),i};return e.diff=i=>{const s=t(),o=Object.values(s.rivals).reduce((a,l)=>{var r,c;return a+(((c=(r=l.games)==null?void 0:r[i])==null?void 0:c.w)||0)},0);return Math.min(1,.25+o*.12+(s.streaks[i]||0)*.08)},e.record=(i,s,o,a)=>{var p,f;const l=t(),r=(p=l.rivals)[s]||(p[s]={w:0,l:0,d:0,games:{}}),c=(f=r.games)[i]||(f[i]={w:0,l:0,d:0});r[o]++,c[o]++,o==="w"?(l.streaks[i]=(l.streaks[i]||0)+1,l.bestStreak[i]=Math.max(l.bestStreak[i]||0,l.streaks[i])):o==="l"&&(l.streaks[i]=0),a&&(o==="w"?n.sim.earn(a*2,"wager"):o==="d"&&n.sim.earn(a,"wager refund")),n.sim.addRel(s,o==="w"?-2:o==="l"?2:1);const d=l.streaks[i]||0;return o==="w"&&d>=3&&n.toast(`🔥 ${d} wins in a row for ${i}! Area dey hail you`,"good"),n.save(),d},e.board=()=>{const i=t();return Object.entries(i.rivals).map(([s,o])=>({name:s,...o,score:o.l*3+o.d-o.w})).sort((s,o)=>o.score-s.score||o.w+o.l-(s.w+s.l))},e.talk=i=>Jy(Zy[i]),e.askWager=async(i,s)=>{const o=n.sim.s,a=e.diff(i),l=await n.wheel({who:s,text:e.talk("pre"),sub:`${i} • Difficulty ${Math.round(a*100)}% • Your streak ${t().streaks[i]||0} 🔥`,options:[{id:0,tag:"Friendly",label:"Just play for fun"},{id:200,tag:"Bet",label:`Bet ${j(200)}`,disabled:o.cash<200},{id:500,tag:"Bet",label:`Bet ${j(500)}`,disabled:o.cash<500},{id:1e3,tag:"Big bet",label:`Bet ${j(1e3)} 💰`,disabled:o.cash<1e3},{id:-1,tag:"Comot",label:"Not now"}]});return!l||l.id===-1||l.id>0&&!n.sim.spend(l.id)?null:(l.id>0&&n.toast(`Wager ${j(l.id)} on the table 💰 — win double!`,"money"),l.id)},e}const e_=n=>n[Math.floor(Math.random()*n.length)];function t_(){const n=[];for(let e=0;e<8;e++){n.push([]);for(let t=0;t<8;t++)n[e].push((e+t)%2===1?e<3?-1:e>4?1:0:0)}return n}const ad=(n,e)=>n!==0&&Math.sign(n)===e;function Cs(n,e){const t=[],i=[];for(let s=0;s<8;s++)for(let o=0;o<8;o++){const a=n[s][o];if(!ad(a,e))continue;const l=Math.abs(a)===2?[[-1,-1],[-1,1],[1,-1],[1,1]]:e===1?[[-1,-1],[-1,1]]:[[1,-1],[1,1]],r=(c,d,p,f,h)=>{let y=!1;const m=c[d][p],u=Math.abs(m)===2?[[-1,-1],[-1,1],[1,-1],[1,1]]:l;for(const[g,M]of u){const w=d+g,E=p+M,L=d+2*g,b=p+2*M;if(!(L<0||L>7||b<0||b>7)&&ad(c[w][E],-e)&&c[L][b]===0&&!h.some(_=>_[0]===w&&_[1]===E)){const _=c.map(S=>S.slice());_[L][b]=_[d][p],_[d][p]=0,_[w][E]=0,y=!0,r(_,L,b,[...f,[L,b]],[...h,[w,E]])||t.push({from:[s,o],path:[...f,[L,b]],taken:[...h,[w,E]]})}}return y};r(n,s,o,[],[]);for(const[c,d]of l){const p=s+c,f=o+d;p>=0&&p<8&&f>=0&&f<8&&n[p][f]===0&&i.push({from:[s,o],path:[[p,f]],taken:[]})}}return t.length?t:i}function Mc(n,e){const t=n.map(r=>r.slice()),[i,s]=e.from,o=t[i][s];t[i][s]=0;for(const[r,c]of e.taken)t[r][c]=0;const[a,l]=e.path[e.path.length-1];return t[a][l]=o===1&&a===0?2:o===-1&&a===7?-2:o,t}function n_(n){let e=0;for(const t of n)for(const i of t)e+=i===0?0:Math.sign(i)*(Math.abs(i)===2?1.7:1);return-e}function yu(n,e,t,i,s){const o=Cs(n,t);if(!o.length)return t===-1?-99:99;if(e===0)return n_(n);let a=t===-1?-1e9:1e9;for(const l of o){const r=yu(Mc(n,l),e-1,-t,i,s);if(t===-1?(a=Math.max(a,r),i=Math.max(i,r)):(a=Math.min(a,r),s=Math.min(s,r)),s<=i)break}return a}function i_(n,e){const t=Cs(n,-1);if(!t.length)return null;const i=e>.75?4:e>.45?3:2,s=(1-e)*1.2;let o=null,a=-1e9;for(const l of t){const r=yu(Mc(n,l),i-1,1,-1e9,1e9)+Math.random()*s;r>a&&(a=r,o=l)}return o}function s_(){return{pits:Array(12).fill(4),store:[0,0]}}const Hs=(n,e)=>{const t=e*6,i=[];for(let s=t;s<t+6;s++)n.pits[s]>0&&i.push(s);return i};function bc(n,e){const t=n.pits.slice(),i=n.store.slice(),s=e<6?0:1;let o=t[e];t[e]=0;let a=e;for(;o>0;)a=(a+1)%12,a!==e&&(t[a]++,o--);const l=s===0?6:0,r=t.slice();let c=0;for(;a>=l&&a<l+6&&(t[a]===2||t[a]===3);)c+=t[a],t[a]=0,a--;return c&&t.slice(l,l+6).every(d=>d===0)?{pits:r,store:i,last:e,cap:0}:(i[s]+=c,{pits:t,store:i,last:e,cap:c})}function _u(n,e,t){const i=Hs(n,t);if(e===0||!i.length||n.store[0]>24||n.store[1]>24)return n.store[1]-n.store[0];let s=t===1?-1e9:1e9;for(const o of i){const a=_u(bc(n,o),e-1,1-t);s=t===1?Math.max(s,a):Math.min(s,a)}return s}function o_(n,e){const t=Hs(n,1);if(!t.length)return null;const i=e>.75?5:e>.45?3:1;let s=t[0],o=-1e9;for(const a of t){const l=_u(bc(n,a),i-1,0)+Math.random()*(1-e)*3;l>o&&(o=l,s=a)}return s}const a_=n=>n.store[0]>24||n.store[1]>24||!Hs(n,0).length&&!Hs(n,1).length;function r_(n){const{world:e}=n,t={},i=-38,s=10.8,o=new ht;o.position.set(i-2.2,0,s+1.4),e.root.add(o);const a=te(new Wt(.35,.5,3.2,8),Y("#8d5a2b"),{t:.03});a.position.y=1.6,o.add(a);for(const[C,v,x,R]of[[0,3.6,0,2.2],[1.3,3.3,.4,1.6],[-1.2,3.4,-.3,1.7],[.3,4.4,-.5,1.5]]){const I=te(new Ji(R,0),Y("#3fa34d"),{t:.03});I.position.set(C,v,x),o.add(I)}e.colliders.push({minX:i-2.6,maxX:i-1.8,minZ:s+1,maxZ:s+1.8});const l=[];function r(C,v,x,R){const I=new ht;I.position.set(C,0,v),e.root.add(I);const N=te(new qe(1.2,.1,.8),Y("#a0522d"),{t:.03});N.position.y=.7,I.add(N);const k=te(new qe(.15,.7,.15),Y("#5a3a1a"),{t:.02});k.position.y=.35,I.add(k);const U=te(new qe(x==="ayo"?1:.7,.06,x==="ayo"?.4:.7),Y(R),{t:.02});U.position.y=.78,I.add(U);for(const G of[-1,1]){const V=te(new qe(.5,.4,.5),Y("#3a86ff"),{t:.02});V.position.set(0,.2,G*.85),I.add(V)}return e.colliders.push({minX:C-.6,maxX:C+.6,minZ:v-.4,maxZ:v+.4}),l.push({x:C,z:v,kind:x}),I}r(i,s,"draughts","#fdfcdc"),r(i+3,s,"ayo","#c68642");const c=(C,v,x,R)=>{const I=vn({...Nn(),...C});I.position.set(v,.1,x),I.rotation.y=R,si(I),e.root.add(I);const N={mesh:I,name:C.name,lines:C.lines,talkT:4};return n.social.register(N),N},d=c({name:"Oga Draft",hair:"cap",outfit:"kaftan",clothColor:"#ffd23f",lines:["Who wan try me for draft?","Na champion I be!"]},i,s-.85,0),p=c({name:"Baba Ayo",hair:"bald",outfit:"kaftan",clothColor:"#fdfcdc",accentColor:"#06d6a0",lines:["Ayo na game for sharp brain","Come lose your money 😂"]},i+3,s-.85,0),f=c({name:"Iya Ibeji",hair:"gele",outfit:"ankaraDress",lines:["I dey watch o 👀"]},i+1.5,s-1.8,.3);t.npcs=[d,p,f],t.update=C=>{for(const v of t.npcs)cn(v.mesh,C,0,n.time),v.talkT-=C,v.talkT<0&&(v.talkT=12+Math.random()*10,Math.hypot(n.pos.x-v.mesh.position.x,n.pos.z-v.mesh.position.z)<12&&!t.open&&pe(v.mesh,e_(v.lines),3))},t.hot=()=>{if(n.activityName()||n.inside())return null;for(const C of l)if(Math.hypot(n.pos.x-C.x,n.pos.z-(C.z+.9))<1.6)return{label:C.kind==="ayo"?"Play Ayo with Baba Ayo 🌰":"Play Draughts with Oga Draft ⚫",act:()=>t.play(C.kind)};return null};const h=()=>document.getElementById("board");t.play=async C=>{const v=C==="ayo"?p:d,x=await n.rivals.askWager(C,v.name);x!==null&&(n.pos.set(v.mesh.position.x,0,v.mesh.position.z+1.7),n.setRot(Math.PI),t.open={kind:C,opp:v,wager:x,diff:n.rivals.diff(C)},n.startActivity({name:C,camDist:5,camPitch:.7,buttons:()=>[{label:"Resign 🏳️",key:"x",onClick:()=>m("l","You resign")}],update(){},onEnd(){h().classList.add("hidden"),t.open=null}}),n.camYawTo(0,1),h().classList.remove("hidden"),C==="ayo"?b():g())};function y(C){const v=h().querySelector(".bg-talk");v&&(v.textContent=`${t.open.opp.name}: "${C}"`),pe(t.open.opp.mesh,C,2.6)}function m(C,v){const x=t.open;if(!x)return;const R=n.rivals.record(x.kind,x.opp.name,C,x.wager),I=n.sim.s;C==="w"?(I.mood=Math.min(100,I.mood+12),n.audio.cheer(),pe(x.opp.mesh,n.rivals.talk("lose"),3)):C==="l"?(I.mood=Math.max(0,I.mood-4),pe(x.opp.mesh,n.rivals.talk("win"),3)):n.audio.ping(),n.sim.advance(30);const N=x.kind==="ayo"?"Ayo":"Draughts",k=x.opp.name;n.endActivity(),n.modal(C==="w"?`You beat ${k}! 🏆`:C==="d"?"Draw 🤝":`${k} win you 😅`,`${v}. ${C==="w"&&x.wager?`+${j(x.wager*2)} 💰 `:""}${N} streak: ${R} 🔥 • Next difficulty ${Math.round(n.rivals.diff(x.kind)*100)}%`,[{label:"Rematch!",onClick:()=>setTimeout(()=>t.play(x.kind),50)},{label:"Okay ➜",close:!0}])}t.finish=m;let u=null;function g(){u={b:t_(),sel:null,turn:1,busy:!1},t.D=u,M(),y(n.rivals.talk("pre"))}function M(){var I,N;const C=u.turn===1?Cs(u.b,1):[],v=k=>u.b.flat().filter(U=>Math.sign(U)===k).length;let x=`<div class="bg-head"><b>⚫ Draughts vs ${t.open.opp.name}</b><span>You ${12-v(-1)} : ${12-v(1)} ${t.open.opp.name}${t.open.wager?` • 💰 ${j(t.open.wager)}`:""}</span></div><div class="bg-talk"></div><div class="dboard">`;for(let k=0;k<8;k++)for(let U=0;U<8;U++){const G=u.b[k][U],V=(k+U)%2===1,ne=C.some(ce=>ce.from[0]===k&&ce.from[1]===U),se=u.sel&&C.some(ce=>ce.from[0]===u.sel[0]&&ce.from[1]===u.sel[1]&&ce.path[ce.path.length-1][0]===k&&ce.path[ce.path.length-1][1]===U);x+=`<button class="sq ${V?"dk":"lt"} ${ne?"can":""} ${se?"to":""} ${u.sel&&u.sel[0]===k&&u.sel[1]===U?"sel":""}" data-r="${k}" data-c="${U}">${G?`<i class="pc ${G>0?"me":"ai"} ${Math.abs(G)===2?"king":""}"></i>`:""}</button>`}x+=`</div><div class="bg-hint">${u.turn===1?(I=C[0])!=null&&I.taken.length?"You must capture! Tap a glowing piece":"Your move — tap a piece, then a square":`${t.open.opp.name} dey think... 🤔`}</div>`;const R=((N=h().querySelector(".bg-talk"))==null?void 0:N.textContent)||"";h().innerHTML=x,h().querySelector(".bg-talk").textContent=R,h().querySelectorAll(".sq").forEach(k=>k.addEventListener("click",()=>w(+k.dataset.r,+k.dataset.c)))}function w(C,v){if(u.turn!==1||u.busy)return;const x=Cs(u.b,1);if(u.sel){const R=x.find(I=>I.from[0]===u.sel[0]&&I.from[1]===u.sel[1]&&I.path.at(-1)[0]===C&&I.path.at(-1)[1]===v);if(R)return E(R,1)}u.sel=x.some(R=>R.from[0]===C&&R.from[1]===v)?[C,v]:null,n.audio.click(),M()}t.draftMove=(C=0)=>{const v=Cs(u.b,1);v[C]&&E(v[C],1)};function E(C,v){if(u.b=Mc(u.b,C),u.sel=null,n.audio.tone(v===1?520:380,.06,"triangle",.1),C.taken.length&&y(v===1?n.rivals.talk("behind"):n.rivals.talk("lead")),u.quiet=C.taken.length?0:(u.quiet||0)+1,u.turn=-v,M(),u.quiet>=60)return m("d","30 moves without capture");if(!Cs(u.b,u.turn).length)return m(u.turn===-1?"w":"l",u.turn===-1?`${t.open.opp.name} no get move again`:"You no get move again");u.turn===-1&&(u.busy=!0,setTimeout(()=>{if(!t.open)return;u.busy=!1;const x=i_(u.b,t.open.diff);x&&E(x,-1)},650))}let L=null;function b(){L={st:s_(),turn:0,busy:!1,moves:0},t.A=L,_(),y(n.rivals.talk("pre"))}function _(){var N;const C=L.st.pits,v=(k,U)=>`<button class="pit ${U&&L.turn===0&&C[k]?"can":""}" data-i="${k}" ${U?"":"disabled"}><b>${C[k]}</b><span>${"•".repeat(Math.min(C[k],12))}</span></button>`,x=[11,10,9,8,7,6].map(k=>v(k,!1)).join(""),R=[0,1,2,3,4,5].map(k=>v(k,!0)).join(""),I=((N=h().querySelector(".bg-talk"))==null?void 0:N.textContent)||"";h().innerHTML=`<div class="bg-head"><b>🌰 Ayo vs ${t.open.opp.name}</b><span>You ${L.st.store[0]} : ${L.st.store[1]} ${t.open.opp.name}${t.open.wager?` • 💰 ${j(t.open.wager)}`:""}</span></div><div class="bg-talk"></div>
      <div class="ayo"><div class="store">${L.st.store[1]}</div><div class="rows"><div class="row">${x}</div><div class="row">${R}</div></div><div class="store me">${L.st.store[0]}</div></div>
      <div class="bg-hint">${L.turn===0?"Your turn — tap one of your pits (bottom row). Capture 2s & 3s for their side!":`${t.open.opp.name} dey count seeds... 🤔`} First to 25 seeds wins.</div>`,h().querySelector(".bg-talk").textContent=I,h().querySelectorAll(".pit[data-i]").forEach(k=>k.addEventListener("click",()=>{const U=+k.dataset.i;L.turn===0&&!L.busy&&U<6&&C[U]&&S(U)}))}t.ayoMove=()=>{const C=Hs(L.st,0);C.length&&S(C[0])};function S(C){const v=C<6?0:1;if(L.st=bc(L.st,C),L.moves++,n.audio.tone(v?380:520,.05,"triangle",.1),L.st.cap&&y(v?n.rivals.talk("lead"):n.rivals.talk("behind")),L.turn=1-v,!Hs(L.st,L.turn).length){const x=L.st.pits.reduce((R,I)=>R+I,0);L.st.store[1-L.turn]+=x,L.st.pits.fill(0)}if(_(),a_(L.st)||L.moves>200){const[x,R]=L.st.store;return m(x>R?"w":x<R?"l":"d",`Seeds ${x} – ${R}`)}L.turn===1&&(L.busy=!0,setTimeout(()=>{if(!t.open)return;L.busy=!1;const x=o_(L.st,t.open.diff);x!==null&&S(x)},700))}return t}const ws=[{id:"tomato",e:"🍅",name:"Tomato",price:70,col:"#e63946"},{id:"pepper",e:"🌶️",name:"Pepper",price:50,col:"#d00000"},{id:"onion",e:"🧅",name:"Onions",price:60,col:"#9d4edd"},{id:"plantain",e:"🍌",name:"Plantain",price:120,col:"#ffd23f"},{id:"egg",e:"🥚",name:"Egg",price:40,col:"#fdfcdc"}],rd=["👩🏾","👨🏿","👵🏾","👴🏿","🧕🏾","👨🏾‍🦱","👩🏿‍🦱","🧔🏾"],l_=["Mama Tobi","Oga Emeka","Aunty Funke","Baba Sule","Sister Ngozi","Bro Tayo","Iya Ibeji","Mr Okon"],c_=["Abeg give me","I wan buy","Oya sell me","How much for","Quick quick, give me"],h_=["Thank you o! 🙏","God bless your market!","Correct seller! 👌","I go come back tomorrow!"],d_=["Na wetin I ask for be this?! 😤","You dey whine me?","Abeg focus! 🙄"],u_=["You too slow! I don go another stall 😒","Time no dey for me o!"],Ma=n=>n[Math.floor(Math.random()*n.length)];function f_(n,{bonus:e=1,onDone:t}){let s=45,o=0,a=0,l=0,r=null,c={},d=!0,p=performance.now();n.classList.remove("hidden"),n.innerHTML=`
    <div class="mk">
      <div class="mk-top"><span>🛒 Your Stall ${e>1?'<small style="color:#e71d36">• Prices up!</small>':""}</span><span class="timer" id="mkTime">45s</span><span>₦<span id="mkEarn">0</span></span></div>
      <div class="cust" id="mkCust"></div>
      <div class="items">${ws.map((b,_)=>`<button class="item" data-id="${b.id}"><span class="ic" style="background:${b.col}">${b.e}</span>${b.name}<small>${j(b.price*e)}</small><small style="opacity:.5">[${_+1}]</small></button>`).join("")}</div>
      <div class="basket" id="mkBasket"></div>
      <div class="mk-msg" id="mkMsg"></div>
      <div class="btn-row"><button class="btn" id="mkClear">↺ Clear</button><button class="btn green" id="mkSell">✔ Sell (Enter)</button></div>
      <p class="fine">Pack exactly wetin customer ask, then press Sell. Fast service = bigger tip.</p>
    </div>`;const f=b=>n.querySelector("#"+b),h=()=>{const b=1+Math.floor(Math.random()*3),_=[...ws].sort(()=>Math.random()-.5).slice(0,b),S={};_.forEach(v=>S[v.id]=1+Math.floor(Math.random()*3));const C=Math.floor(Math.random()*rd.length);r={want:S,face:rd[C],name:l_[C],patience:11+Math.random()*4,max:0},r.max=r.patience,c={},y()},y=()=>{if(!r)return;const b=Object.entries(r.want).map(([_,S])=>{const C=ws.find(v=>v.id===_);return`<span class="qty">${S} × ${C.e} ${C.name}</span>`}).join("");f("mkCust").innerHTML=`<div class="face">${r.face}</div><div style="flex:1"><div class="who">${r.name}</div><div class="say">${Ma(c_)}:</div><div style="margin-top:4px">${b}</div><div class="patience"><i id="mkPat" style="width:${r.patience/r.max*100}%"></i></div></div>`,m()},m=()=>{const b=Object.entries(c).filter(([,_])=>_>0);f("mkBasket").innerHTML=b.length?b.map(([_,S])=>{const C=ws.find(v=>v.id===_);return`<span class="b">${S} × ${C.e} ${C.name}</span>`}).join(""):'<span style="opacity:.5">Basket empty — tap items to pack</span>'},u=b=>{f("mkMsg").textContent=b},g=b=>{d&&(c[b]=(c[b]||0)+1,m())},M=()=>{if(!d||!r)return;if(Object.keys({...r.want,...c}).every(_=>(r.want[_]||0)===(c[_]||0))){let _=0;for(const[v,x]of Object.entries(r.want))_+=ws.find(R=>R.id===v).price*x;const S=Math.round(r.patience/r.max*60/10)*10,C=Math.round(_*e)+S;o+=C,a++,u(`${Ma(h_)} +${j(C)}${S?` (tip ${j(S)})`:""}`),f("mkEarn").textContent=o.toLocaleString("en-NG"),h()}else r.patience-=3,c={},m(),u(Ma(d_))};n.querySelectorAll(".item").forEach(b=>b.addEventListener("pointerdown",_=>{_.preventDefault(),g(b.dataset.id)})),f("mkClear").onclick=()=>{c={},m()},f("mkSell").onclick=M;const w=b=>{const _=parseInt(b.key,10);_>=1&&_<=5?g(ws[_-1].id):b.key==="Enter"||b.key===" "?(b.preventDefault(),M()):b.key==="Backspace"&&(c={},m()),b.stopPropagation()};window.addEventListener("keydown",w,!0),h();const E=()=>{if(!d)return;const b=performance.now(),_=Math.min(.5,(b-p)/1e3);if(p=b,s-=_,r){r.patience-=_;const S=f("mkPat");S&&(S.style.width=Math.max(0,r.patience/r.max*100)+"%"),r.patience<=0&&(l++,u(Ma(u_)),h())}if(f("mkTime").textContent=Math.max(0,Math.ceil(s))+"s",s<=0)return L();requestAnimationFrame(E)};requestAnimationFrame(E);function L(){d=!1,window.removeEventListener("keydown",w,!0),n.innerHTML=`<div class="mk" style="text-align:center"><h2 style="margin:6px 0">Market don close! 🧺</h2>
      <p style="font-size:44px;margin:4px 0">${a>=5?"🤑":a>=2?"🙂":"😮‍💨"}</p>
      <p><b>${a}</b> customers served • <b>${l}</b> waka comot</p>
      <p style="font-size:30px;font-weight:900;margin:6px 0">+${j(o)}</p>
      <p class="fine">2 hours don pass. Your body don tire small.</p>
      <button class="btn primary" id="mkDone" style="width:100%">Collect money ➜</button></div>`,n.querySelector("#mkDone").onclick=()=>{n.classList.add("hidden"),n.innerHTML="",t({earned:o,served:a,lost:l})}}}const Sc="wahala.char.v1",ks="wahala.save.v1",re=n=>document.getElementById(n),Vs=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,Ya=Math.min(innerWidth,innerHeight)<820,qa=n=>{try{return JSON.parse(localStorage.getItem(n))}catch{return null}},wc=(n,e)=>{try{localStorage.setItem(n,JSON.stringify(e))}catch{}},Wi=re("c"),hi=new Qv({canvas:Wi,antialias:!0,powerPreference:"high-performance"});hi.setPixelRatio(Math.min(devicePixelRatio,Ya?1.75:2));hi.setSize(innerWidth,innerHeight);hi.shadowMap.enabled=!0;hi.shadowMap.type=nc;const ai=new Kd;ai.background=new Fe("#ffe3a3");const zn=new ln(30,innerWidth/innerHeight,.1,100);zn.position.set(0,1.25,5.4);zn.lookAt(0,.85,0);ai.add(new au(16777215,16767408,1.3));const or=new lu(16777215,2.2);or.position.set(2.5,5,4);or.castShadow=!0;or.shadow.mapSize.set(1024,1024);ai.add(or);{const n=te(new Wt(1.1,1.2,.25,40),Y("#ffffff",{map:Zi("circles","#ff6b35","#2ec4b6","#fff3d6",[6,1])}),{t:.05});n.position.y=-.125,ai.add(n);const e=new Ae(new Ds(1.1,40),Y("#fff3d6"));e.rotation.x=-Math.PI/2,e.position.y=.005,e.receiveShadow=!0,ai.add(e);const t=[["#ff9eb5",-2.6,2.2,-4,1.6],["#7fd1c7",2.8,1.4,-5,2.2],["#c3b1f0",-1.2,3.4,-6,1.2],["#ffd23f",1.5,3.6,-7,1]];for(const[i,s,o,a,l]of t){const r=te(new Tn(l,20,14),Y(i),{t:.06,cast:!1});r.position.set(s,o,a),ai.add(r)}}let bn=null,Dt={...pu(),...qa(Sc)||{}};function p_(){const n=bn?bn.rotation.y:-.35;bn&&ai.remove(bn),bn=vn(Dt),bn.rotation.y=n,ai.add(bn)}function xu(){const n=innerWidth,e=innerHeight;zn.aspect=n/e,n>760?(zn.setViewOffset(n,e,-Math.min(220,n*.2),0,n,e),zn.fov=30):(zn.setViewOffset(n,e,0,e*.26,n,e),zn.fov=n/e<.7?58:44),zn.updateProjectionMatrix()}const nt=new Kd;nt.background=new Fe("#8fd3ff");nt.fog=new pc("#8fd3ff",70,170);const gn=new ln(50,innerWidth/innerHeight,.1,400),qi=new au(15136511,15782816,1.1);nt.add(qi);const wn=new lu(16774108,2.4);wn.castShadow=!0;wn.shadow.mapSize.set(Ya?1024:2048,Ya?1024:2048);Object.assign(wn.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:140});wn.shadow.bias=-6e-4;wn.shadow.normalBias=.03;nt.add(wn);nt.add(wn.target);const Kl=new Wa(16773320,0,11,1.3);nt.add(Kl);const ld=(()=>{const n=[];for(let i=0;i<500;i++){const s=Math.random()*Math.PI*2,o=.15+Math.random()*1.3;n.push(Math.cos(s)*Math.cos(o)*180,Math.sin(o)*180,Math.sin(s)*Math.cos(o)*180)}const e=new Pt;e.setAttribute("position",new mt(n,3));const t=new iy(e,new eu({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1}));return nt.add(t),t})(),Ia=new Ae(new Tn(6,20,14),new Gs({color:16643800,fog:!1,transparent:!0}));nt.add(Ia);let kt=null,dt=null,X=null;const Ce=new P().copy(Wn.spawn);let Kt=0,Xt=0,Ka=.52,ja=Ya?11:10,Ks="creator",yt=!1,Ec=!1;const Rt=n=>new Fe(n),fo=[[0,"night"],[5,"night"],[6.3,"dawn"],[8,"day"],[17,"day"],[18.6,"dusk"],[19.8,"night"],[24,"night"]],cd={night:{sky:Rt("#2b2f6e"),hs:Rt("#7383db"),hg:Rt("#3a2f5a"),hi:.95,si:.45,sc:Rt("#a9bbff")},dawn:{sky:Rt("#ffb38a"),hs:Rt("#ffd1b3"),hg:Rt("#e0b080"),hi:1,si:1.5,sc:Rt("#ffb27a")},day:{sky:Rt("#8fd3ff"),hs:Rt("#e6f6ff"),hg:Rt("#f0d3a0"),hi:1.15,si:2.5,sc:Rt("#fff3dc")},dusk:{sky:Rt("#ff9470"),hs:Rt("#ffb8a0"),hg:Rt("#b08070"),hi:.95,si:1.3,sc:Rt("#ff9a5c")}},m_=new Fe,g_=new Fe,v_=Rt("#151838");function y_(n){let e=0;for(;e<fo.length-1&&fo[e+1][0]<=n;)e++;const[t,i]=fo[e],[s,o]=fo[Math.min(e+1,fo.length-1)],a=s>t?(n-t)/(s-t):0,l=cd[i],r=cd[o];return{sky:l.sky.clone().lerp(r.sky,a),hs:l.hs.clone().lerp(r.hs,a),hg:l.hg.clone().lerp(r.hg,a),hi:l.hi+(r.hi-l.hi)*a,si:l.si+(r.si-l.si)*a,sc:l.sc.clone().lerp(r.sc,a)}}let $i=1,Qr=0;const hd=Rt("#a8dcff"),__=Rt("#ffe39a"),dd=Rt("#39406b"),x_=Rt("#ffae42");function M_(n){const e=X.hour+X.acc/60,t=y_(e%24),i=e<5.5?1:e<7?1-(e-5.5)/1.5:e<18?0:e<19.5?(e-18)/1.5:1;$i+=((X.s.power?1:0)-$i)*Math.min(1,n*6),Qr+=((X.genRunning?1:0)-Qr)*Math.min(1,n*4);const s=(1-$i)*i;t.sky.lerp(v_,s*.85),nt.background.copy(t.sky),nt.fog.color.copy(t.sky),nt.fog.near=70-s*40,nt.fog.far=170-s*80,qi.color.copy(t.hs),qi.groundColor.copy(t.hg),qi.intensity=t.hi*(1-s*.68),wn.color.copy(t.sc),wn.intensity=t.si*(1-s*.4);let o;if(e>=6&&e<=18.6){const d=(e-6)/12.6*Math.PI;o=new P(-Math.cos(d),Math.max(.25,Math.sin(d)),.45).normalize()}else o=new P(.45,.9,.35).normalize();wn.position.copy(Ce).addScaledVector(o,60),wn.target.position.copy(Ce),Ia.position.copy(Ce).add(new P(60,75,-120)),Ia.material.opacity=i,Ia.visible=i>.05,ld.material.opacity=i*(.35+s*.65),ld.position.set(Ce.x,0,Ce.z);const a=kt.mats,l=i*$i;a.window.color.copy(hd).lerp(m_.copy(__).lerp(dd,1-$i),i),a.window.emissive.copy(x_),a.window.emissiveIntensity=l*.75,a.windowDark.color.copy(hd).lerp(dd,i),a.bulb.emissive.set("#ffd27a"),a.bulb.emissiveIntensity=l*1.2,a.bulb.color.set(l>.3?"#fff3b0":"#8a8fa3"),kt.lampLights.forEach(d=>d.intensity=l*22);const r=Math.max($i,Qr);a.homeBulb.emissive.set("#ffd27a"),a.homeBulb.emissiveIntensity=r*i*1.4,a.homeBulb.color.set(r>.5?"#fff3b0":"#6b6f80"),kt.homeLight.intensity=r*i*22,kt.homeBars.emissive.set("#ffb347"),kt.homeBars.emissiveIntensity=r*i*.8,a.headlight.emissive.set("#fff4c2"),a.headlight.emissiveIntensity=i*1.2,Kl.intensity=s>.4?s*7:0;const c=new P(Math.sin(Kt),0,Math.cos(Kt));Kl.position.copy(Ce).addScaledVector(c,1.2).add(new P(0,2,0)),re("blackoutTint").style.opacity=(s*.85).toFixed(2)}const wt=new Set,Ft={x:0,y:0,active:!1,id:null};addEventListener("keydown",n=>{if(n.target.tagName==="INPUT")return;const e=n.key.toLowerCase();if(wt.add(e),Ks==="game"){if(Qe.init(),(e==="e"||e==="enter")&&!yt&&!n.repeat&&Mu(),Bt&&!n.repeat){const t=parseInt(e,10);t>=1&&t<=Bt.opts.length&&(n.preventDefault(),Bt.pick(t-1));return}if(!n.repeat&&!yt){const t=Ac().find(i=>i.key===e||i.key===" "&&e===" ");t&&!t.disabled&&(e===" "&&n.preventDefault(),t.onClick(),Oo())}if(e==="m"&&!n.repeat&&Pu(),(e==="p"||e==="tab")&&(n.preventDefault(),wu()),e==="escape"){if(!re("mash").classList.contains("hidden"))return;No(),ns()}}});addEventListener("keyup",n=>wt.delete(n.key.toLowerCase()));addEventListener("blur",()=>wt.clear());{const n=re("joystick"),e=re("knob"),t=(o,a)=>{e.style.transform=`translate(${o}px, ${a}px)`},i=o=>{const a=n.getBoundingClientRect(),l=a.left+a.width/2,r=a.top+a.height/2;let c=o.clientX-l,d=o.clientY-r;const p=a.width/2-10,f=Math.hypot(c,d);f>p&&(c*=p/f,d*=p/f),Ft.x=c/p,Ft.y=-d/p,t(c,d)};n.addEventListener("pointerdown",o=>{Ft.active=!0,Ft.id=o.pointerId,n.setPointerCapture(o.pointerId),i(o),o.preventDefault()}),n.addEventListener("pointermove",o=>{Ft.active&&o.pointerId===Ft.id&&i(o)});const s=o=>{o.pointerId===Ft.id&&(Ft.active=!1,Ft.x=Ft.y=0,t(0,0))};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s)}{let n=null;Wi.addEventListener("pointerdown",t=>{n={id:t.pointerId,x:t.clientX,y:t.clientY},Wi.setPointerCapture(t.pointerId)}),Wi.addEventListener("pointermove",t=>{if(!n||n.id!==t.pointerId)return;const i=t.clientX-n.x,s=t.clientY-n.y;n.x=t.clientX,n.y=t.clientY,Ks==="creator"&&bn?bn.rotation.y+=i*.012:Re!=null&&Re.lockCam||(Xt-=i*.006,Ka=Tt.clamp(Ka+s*.004,.25,1.15))});const e=t=>{n&&n.id===t.pointerId&&(n=null)};Wi.addEventListener("pointerup",e),Wi.addEventListener("pointercancel",e),Wi.addEventListener("wheel",t=>{ja=Tt.clamp(ja+t.deltaY*.01,5,20)},{passive:!0})}function ft(n,e=""){const t=document.createElement("div");for(t.className="toast "+e,t.textContent=n,re("toasts").appendChild(t);re("toasts").children.length>4;)re("toasts").firstChild.remove();setTimeout(()=>t.remove(),3600)}function jt(n,e,t,i=""){yt=!0;const s=re("modalCard");s.className="modal-card "+i,s.innerHTML=`<h2>${n}</h2>${e?`<p class="sub">${e}</p>`:""}`;for(const o of t){const a=document.createElement("button");a.className="opt"+(o.close?" close":""),a.innerHTML=`<span>${o.label}${o.sub?`<small>${o.sub}</small>`:""}</span>${o.price?`<span class="price">${o.price}</span>`:""}`,a.disabled=!!o.disabled,a.onclick=()=>{var l;o.keep||No(),(l=o.onClick)==null||l.call(o)},s.appendChild(a)}re("modal").classList.remove("hidden")}function No(){re("modal").classList.add("hidden"),!re("market").innerHTML&&!Ai&&(yt=!1)}let Ai=!1;re("modal").addEventListener("pointerdown",n=>{n.target.id==="modal"&&No()});function Uo(n,e,t){return new Promise(i=>{yt=!0,Ai=!0;const s=re("fade");s.textContent=n,s.classList.add("on"),setTimeout(()=>{t==null||t(),setTimeout(()=>{s.classList.remove("on"),setTimeout(()=>{Ai=!1,yt=!1,i()},450)},e)},520)})}const b_=n=>{const e=Math.floor(n/1440),t=Math.floor(n%1440/60);return e?`${e}d ${t}h`:`${t}h ${n%60}m`},S_=(n,e)=>new P(n,0,e),w_=[{id:"gen",pos:Wn.generator,r:1.9,label:()=>"Generator ⛽",act:bu},{id:"stall",pos:Wn.stall,r:2.2,label:()=>"Sell for stall 🍅",act:A_},...oi.map(n=>({id:"stop-"+n.id,pos:S_(n.x,6.6),r:2.8,label:()=>`Danfo @ ${n.name} 🚌`,act:()=>R_(n)}))];let Ja=null;function Mu(){Ja&&!yt&&(Qe.click(),Ja.act())}re("actionBtn").addEventListener("click",Mu);function E_(){const n=X.s,e=X.hour,t=X.s.power?"💡 NEPA light dey":X.genRunning?"⛽ Gen dey run":"🕯️ No light",i=e>=19||e<5;jt("Room 4 🏠",`Face-me-I-face-you, No. 7. ${t}. Rent owed: <b>${j(n.rentOwed)}</b>${n.strikes?` • ⚠️ Strike ${n.strikes}/2`:""}`,[{label:"Sleep till morning 😴",sub:i?"Restores Body. Better with light (fan dey work).":"E never late, but you fit sleep",onClick:()=>ud(!0)},{label:"Take nap (2 hours)",sub:"+Body small",onClick:()=>ud(!1)},{label:"Pay full rent",sub:n.rentOwed?"Baba Ade go happy":"You don pay finish 👏",price:j(n.rentOwed),disabled:!n.rentOwed||n.cash<n.rentOwed,onClick:()=>{const s=X.payRent(n.rentOwed);ft(`Rent paid: ${j(s)} ✔`,"good"),tn()}},{label:"Pay part of rent",sub:"Small small dey fill basket",price:j(Math.min(2e3,n.rentOwed)),disabled:!n.rentOwed||n.cash<Math.min(2e3,n.rentOwed),onClick:()=>{const s=X.payRent(2e3);ft(`Paid ${j(s)} — balance ${j(n.rentOwed)}`,"good"),tn()}},{label:"Comot",close:!0}])}async function ud(n){const e=X.hour;let t=n?(e<6.5?6.5-e:24-e+6.5)*60:120;t=Math.round(t);let i=0;await Uo(n?"😴 Zzz... Sleeping till morning":"😴 Small nap...",900,()=>{var s;for(let o=0;o<t&&(X.tick({sleeping:!0}),X.homePowered&&i++,!X.s.evicted);o++);X.collapsed=!1,((s=Ke==null?void 0:Ke.cur)==null?void 0:s.id)==="room"?Ce.set(Ke.cur.ox-2.8,0,-.9):Ke!=null&&Ke.cur||(Ce.copy(Wn.spawn),Kt=0,Xt=0)}),n&&(i/Math.max(1,t)>.7?(X.s.mood=Math.min(100,X.s.mood+10),ft("You wake up fresh! Fan dey blow all night 😌","good")):ft("NEPA take light — heat & mosquito no let you sleep well 🥵🦟","warn")),tn()}function bu(){const n=X.s;if(!n.hasGen&&!n.quietGen)return jt("No generator 😩",'Recovery agents don carry your "I-Pass-My-Neighbour". You fit buy quiet inverter-gen.',[{label:"Buy quiet generator 🤫",sub:"No neighbour wahala at night",price:j(go),disabled:n.cash<go,onClick:fd},{label:"Comot",close:!0}]);jt(n.quietGen?"Quiet Gen 🤫⛽":'"I-Pass-My-Neighbour" ⛽',`${n.quietGen?"":"Loud! Running am 10pm–6am go make neighbours vex. "}Fuel: <b>${n.fuel} hrs</b> • Gen switch: <b>${n.genOn?"ON":"OFF"}</b>. E go run automatically when NEPA take light.`,[{label:"Buy 5 hours fuel",sub:"Jerrycan from roadside seller (price follow petrol price)",price:j(X.fuelPrice),disabled:n.cash<X.fuelPrice||n.fuel>=24,onClick:()=>{X.buyFuel(),ft("Fuel don enter gen ⛽","good"),tn()}},{label:n.genOn?"Switch gen OFF":"Switch gen ON",sub:n.genOn?"Save fuel":"Make e run when light go",onClick:()=>{n.genOn=!n.genOn,ft(n.genOn?"Gen switch ON":"Gen switch OFF")}},...n.quietGen?[]:[{label:"Buy quiet generator 🤫",sub:`Neighbour complaints this night: ${n.genComplaints}/3`,price:j(go),disabled:n.cash<go,onClick:fd}],{label:"Comot",close:!0}])}function fd(){X.spend(go)&&(X.s.quietGen=!0,X.s.hasGen=!0,ft("Quiet gen installed 🤫 Neighbours go sleep well now","good"),X.addKarma(2),Qe.cash(),tn())}const T_=[{name:"Jollof rice & chicken",price:1500,hunger:45,mood:8,mins:25},{name:"Amala & ewedu",price:1e3,hunger:38,mood:4,mins:20},{name:"Eba & egusi soup",price:1200,hunger:42,mood:5,mins:25},{name:"Puff-puff (5 pieces)",price:300,hunger:12,mood:3,mins:5},{name:"Pure water (sachet)",price:50,hunger:3,mood:2,mins:1}];function Su(){const n=X.hour;if(n<6||n>=22)return jt("Buka don close 🌙","Iya Basira don go house. Come back from 6am.",[{label:"Okay",close:!0}]);jt("Mama Put — Iya Basira 🍛",`"My pikin, wetin you go chop today?" • Belle: ${Math.round(X.s.hunger)}%`,[...T_.map(e=>({...e,price:Math.round(e.price*X.priceMul("Iya Basira")/50)*50})).map(e=>({label:e.name,sub:`+${e.hunger} Belle • +${e.mood} Mind`,price:j(e.price),disabled:X.s.cash<e.price,onClick:()=>{X.spend(e.price),X.addRel("Iya Basira",1),X.s.hunger=Math.min(100,X.s.hunger+e.hunger),X.s.mood=Math.min(100,X.s.mood+e.mood),X.s.stats.meals++,X.advance(e.mins),ft(`${e.name} — e sweet die! 😋`,"good"),tn()}})),{label:"I no hungry",close:!0}])}function A_(){const n=X.hour;if(n<7||n>=19)return jt("Market don close 🌙","Market dey open 7am – 7pm. Go rest.",[{label:"Okay",close:!0}]);if(X.s.energy<15)return jt("Your body don tire 😮‍💨","You need at least 15% Body to sell. Go chop or sleep.",[{label:"Okay",close:!0}]);jt("Your Market Stall 🍅",`Sell tomato, pepper, onions, plantain & egg. 45 seconds = 2 game hours.${X.s.marketBonus>1?' <b style="color:#e71d36">Prices up 50% today!</b>':""}`,[{label:"Open shop! 🛒",sub:"Uses Body & Belle",onClick:C_},{label:"Later",close:!0}])}function C_(){yt=!0,f_(re("market"),{bonus:X.s.marketBonus,onDone:({earned:n,served:e})=>{X.advance(120,{working:!0}),X.earn(n,"market"),X.s.stats.sold+=e,e>=4&&(X.s.mood=Math.min(100,X.s.mood+6)),yt=!1,ft(`+${j(n)} from market 💰`,"money"),tn()}})}function R_(n){const e=X.hour;if(e<5||e>=23)return jt("No Danfo now 🌙","Danfo dey run 5am – 11pm. Na trek remain.",[{label:"Okay",close:!0}]);const t=oi.indexOf(n);jt(`${n.name} Bus Stop 🚌`,`Conductor: "Enter with your change o!" • Base fare ${j(X.danfoFare)}${X.s.fuelFactor>1?" (fuel price don raise am)":""}`,[...oi.filter(i=>i!==n).map(i=>{const s=Math.abs(oi.indexOf(i)-t),o=X.danfoFare*s;return{label:`To ${i.name}`,sub:`~${s*15}–${s*15+30} mins (traffic dey)`,price:j(o),disabled:X.s.cash<o,onClick:()=>P_(i,o,s)}}),{label:"I go trek",close:!0}])}async function P_(n,e,t){X.spend(e);const i=t*15+Math.floor(Math.random()*30),s=['Conductor: "Shift! Shift! Make una shift!" 🚌',"Driver dey play Fuji music full blast 🎶","Traffic for road... hawker dey sell gala 🥖",'Conductor: "Who never pay?" 👀'][Math.floor(Math.random()*4)];await Uo(s,1300,()=>{X.advance(i),Ce.set(n.x+1.8,.18,6.3),Kt=0,Xt=0}),ft(`You don reach ${n.name}! (${i} mins, ${j(e)})`,"good"),tn()}async function L_(){Ec=!1,await Uo("😵 You don faint for road!",1400,()=>{for(let e=0;e<360;e++)X.tick({sleeping:!0});X.s.energy=Math.max(X.s.energy,40),X.s.mood=Math.max(0,X.s.mood-15);const n=Math.min(500,X.s.cash);X.s.cash-=n,X.collapsed=!1,Ce.copy(Wn.spawn),setTimeout(()=>ft(`Neighbours carry you go house. You dash them ${j(n)} 🙏`,"bad"),800)}),tn()}let Ro=null;function wu(){re("phone").classList.contains("hidden")?Tc():ns()}function Tc(n){!Ro||Re&&Re.name!=="photo"&&Re.name!=="keke"||(Qe.click(),(Re==null?void 0:Re.name)==="photo"&&Po(),Ro.open(n))}function ns(){re("phone").classList.add("hidden")}function pd(){Ro&&!re("phone").classList.contains("hidden")&&Ro.render()}re("phoneBtn").addEventListener("click",()=>wu());re("phoneClose").addEventListener("click",ns);re("phone").addEventListener("pointerdown",n=>{n.target.id==="phone"&&ns()});function I_(n){return n>55?"#06d6a0":n>25?"#ffbe0b":"#e71d36"}function Eu(){const n=X.s;re("hudDay").textContent=`${X.dayStr().slice(0,3)} • Day ${X.day}`,re("hudTime").textContent=X.timeStr(),re("hudCash").textContent=Math.round(n.cash).toLocaleString("en-NG");for(const[l,r]of[["barHunger",n.hunger],["barEnergy",n.energy],["barMood",n.mood]]){const c=re(l);c.style.width=r+"%",c.style.background=I_(r)}const e=re("hudPower");n.power?(e.className="power on",e.textContent="💡 NEPA"):X.genRunning?(e.className="power gen",e.textContent="⛽ Gen"):(e.className="power off",e.textContent="🕯️ No light");const t=re("hudRent"),i=X.rentCountdown();n.rentOwed>0?(t.textContent=`🏠 Rent ${j(n.rentOwed)} • due in ${b_(i)}`,t.className="rent-chip"+(i<1440||n.strikes?" bad":"")):(t.textContent="🏠 Rent paid ✔ • Lapo tier",t.className="rent-chip"),n.loan>0&&(t.textContent+=` • Loan ${j(n.loan)}`);const s=X.statusPoints;re("hudKarma").textContent=`🙏 ${n.karma>0?"+":""}${n.karma}`,re("hudKarma").className="chip "+(n.karma>=0?"good":"bad"),re("hudFollow").textContent=`📸 ${n.followers}`,re("hudData").textContent=`📶 ${n.dataMB}MB`,re("hudData").className="chip"+(n.dataMB<25?" bad":""),re("statusFill").style.width=s+"%",re("statusPct").textContent=s+"%";const o=n.unread+n.unreadMsg,a=re("badge");a.textContent=o,a.classList.toggle("hidden",!o),re("phTime").textContent=X.timeStr(),re("phPower").textContent=n.power?"💡":X.genRunning?"⛽":"🕯️"}function tn(){if(!X)return;const n=Ke!=null&&Ke.cur?{x:Ke.cur.door.x,z:Ke.cur.door.z+(Ke.cur.door.z<0?1.4:-1.4)}:(dt==null?void 0:dt.parent)===nt?{x:Ce.x,z:Ce.z}:{x:Wn.spawn.x,z:Wn.spawn.z};X.s.player={...n,rotY:Kt},wc(ks,X.s)}function jl(n){wc(Sc,Dt);let e=n?null:qa(ks);(!e||!(e.v>=1)||e.evicted)&&(e=ky(Dt.name||"Tunde")),e.name=Dt.name||e.name,X=new Uy(e,{toast:ft,onPost:t=>{re("phone").classList.contains("hidden")||pd(),t.kind==="alert"&&ft(`📱 ${t.handle}: ${t.text.slice(0,70)}${t.text.length>70?"…":""}`,"warn")},onPower:t=>ft(t?"UP NEPA! Light don come 💡🎉":"NEPA don take light! 🕯️",t?"good":"bad"),onCollapse:()=>{Ec=!0},onEvictionWarning:()=>setTimeout(()=>jt("⚠️ EVICTION WARNING",`Baba Ade: "You no pay rent this week! I don add late fee. If you no pay everything by next Saturday, I go throw your load comot!" Owed: <b>${j(X.s.rentOwed)}</b>`,[{label:"I go pay, abeg 🙏",close:!0}],"warn"),600),onEvict:()=>setTimeout(D_,600),onText:t=>{Qe.ping(),ft(`💬 ${t.from}: ${t.text.slice(0,60)}${t.text.length>60?"…":""}`,t.kind==="bad"?"bad":t.kind==="good"?"good":""),pd()},onKarma:(t,i)=>{t&&ft(`Karma ${t>0?"+":""}${t}${i?" • "+i:""} 🙏`,t>0?"good":"bad")},onCash:t=>{t>0&&Qe.cash()},onRecoveryCall:()=>setTimeout(Ru,400),onRecoveryVisit:()=>setTimeout(()=>wi==null?void 0:wi.spawnAgents(),400),onRain:t=>ft(t?"Rain don start! 🌧️ Find shade":"Rain don stop ☀️",t?"warn":"good"),onRel:(t,i,s)=>{Math.abs(i)>=5&&ft(`${t}: ${i>0?"❤️ +":"💔 "}${i} (${Ws.relWord(s)})`,i>0?"good":"bad")}}),kt||(kt=new Py(nt)),dt&&nt.remove(dt),dt=vn(Dt),nt.add(dt),Dn?Dn.attachTray(dt):Y_(),e.player?(Ce.set(e.player.x,0,e.player.z),Kt=e.player.rotY||0):(Ce.copy(Wn.spawn),Kt=0),Xt=0,Ks="game",re("creator").classList.add("hidden"),["hud","phoneBtn","sysBtns"].forEach(t=>re(t).classList.remove("hidden")),Vs&&re("joystick").classList.remove("hidden"),Vs&&re("keysHint").classList.add("hidden"),zn.clearViewOffset(),Eu(),e._migrated&&(delete e._migrated,setTimeout(()=>ft("Save upgraded to Stage 2 ✔ — check your GistMe Messages","good"),800)),e.player||setTimeout(()=>jt(`Welcome to Lagos, ${e.name}! 🏙️`,`You don rent one room for face-me-I-face-you. You get <b>${j(e.cash)}</b> for pocket and rent na <b>${j(So)}</b> every Saturday. Hustle for <b>Yaba Market</b> stall, chop for <b>Mama Put</b>, and no forget — NEPA fit take light anytime. 😅`,[{label:"Oya, make we go! ➜",close:!0}]),300)}function D_(){const n=X.s;jt("🧳 You don be evicted!",`Baba Ade don throw your load comot for Room 4. You survive ${X.day} days, earn ${j(n.stats.earned)}. Lagos no easy o!`,[{label:"Start new life ➜",onClick:()=>{localStorage.removeItem(ks),location.reload()}}],"warn")}setInterval(()=>{Ks==="game"&&!yt&&tn()},8e3);addEventListener("pagehide",tn);function k_(){re("ccName").value=Dt.name,re("ccName").addEventListener("input",s=>{Dt.name=s.target.value.trim()||"Tunde"});const n=(s,o,a,l=r=>r)=>{s.innerHTML="",o.forEach(r=>{const c=l(r),d=document.createElement("button");d.className="sw"+(Dt[a]===c?" sel":""),d.style.background=c,d.title=r.name||c,d.onclick=()=>{Dt[a]=c,t()},s.appendChild(d)})},e=(s,o,a)=>{s.innerHTML="",o.forEach(l=>{const r=document.createElement("button");r.className="chip"+(Dt[a]===l.id?" sel":""),r.textContent=l.name,r.onclick=()=>{Dt[a]=l.id,t()},s.appendChild(r)})},t=()=>{n(re("ccSkin"),xc,"skin",s=>s.hex),e(re("ccHair"),sr,"hair"),n(re("ccHairColor"),$a,"hairColor"),e(re("ccOutfit"),hu,"outfit"),e(re("ccPattern"),wy,"pattern"),re("ccPatternGroup").style.opacity=Dt.outfit.startsWith("ankara")||Dt.hair==="gele"?1:.4,n(re("ccCloth"),du,"clothColor"),n(re("ccAccent"),uu,"accentColor"),n(re("ccPants"),fu,"pantsColor"),p_()};re("ccRandom").onclick=()=>{const s=Dt.name;Dt={...Nn(),name:s},t()},!!qa(ks)&&!qa(ks).evicted&&(re("ccStart").textContent="Continue Hustle ➜",re("ccNew").classList.remove("hidden")),re("ccStart").onclick=()=>jl(!1),re("ccNew").onclick=()=>{confirm("Wipe your save and start fresh?")&&(localStorage.removeItem(ks),jl(!0))},t()}k_();xu();let md=null;function N_(n,e){const t=re("overhear");t.innerHTML=`<span>👂 ${n}:</span> ${e}`,t.classList.add("on"),clearTimeout(md),md=setTimeout(()=>t.classList.remove("on"),3200)}const U_=new My;let el=0,vo=0;const gd=new P,tl=new P,O_=()=>X.s.power?["How far?","Wetin dey sup?","Traffic no go kill person","E choke!","Na God o","This sun no be here o","Jollof dey buka","Abeg shift"]:["NEPA don take light!","Who get gen?","Heat wan kill me","UP NEPA when?"];function Tu(){var d,p;requestAnimationFrame(Tu);const n=Math.min(.1,U_.getDelta());if(vo+=n,Ks==="creator"){bn&&(bn.rotation.y+=n*.25,cn(bn,n,0,vo)),hi.render(ai,zn);return}!yt&&!X.s.evicted&&X.update(n),Ec&&!yt&&L_();let e=0,t=0;Re&&!yt&&Re.update(n);const i=!Re||Re.allowWalk;!yt&&i&&((wt.has("w")||wt.has("arrowup"))&&(t+=1),(wt.has("s")||wt.has("arrowdown"))&&(t-=1),(wt.has("a")||wt.has("arrowleft"))&&(e-=1),(wt.has("d")||wt.has("arrowright"))&&(e+=1),wt.has("q")&&(Xt+=n*1.8),wt.has("r")&&(Xt-=n*1.8),e+=Ft.x,t+=Ft.y);const s=Math.min(1,Math.hypot(e,t));let o=0;if(s>.08&&i){const f=-Math.sin(Xt),h=-Math.cos(Xt),y=Math.cos(Xt),m=-Math.sin(Xt);let u=y*e+f*t,g=m*e+h*t;const M=Math.hypot(u,g);u/=M,g/=M;const w=wt.has("shift")||Ft.active&&s>.95;let E=(w?7:4.3)*s;(X.s.hunger<=0||X.s.energy<10)&&(E*=.65),Ce.x+=u*E*n,Ce.z+=g*E*n;let b=Math.atan2(u,g)-Kt;b=Math.atan2(Math.sin(b),Math.cos(b)),Kt+=b*Math.min(1,n*12),o=w?1.5:Math.max(.5,s)}i&&vt.resolve(Ce),i||(o=vt.moveAmt),Ce.y+=((Ke.cur?0:kt.groundHeight(Ce.x,Ce.z))-Ce.y)*Math.min(1,n*15),dt.parent===nt&&(dt.position.copy(Ce),dt.rotation.y=Kt),cn(dt,n,dt.parent===nt?o:0,vo),Ay(dt,X.s.mood),dt.parent===nt&&hn.pose(dt),kt.update(n,vo,Ce,{power:X.s.power,genRunning:X.genRunning,lines:O_,onOverhear:N_,night:X.isNight,ev:vt.evCtx()}),Dn.update(n),wi.update(n),hn.update(n),Ke.update(n),Eo.update(n),Ws.update(n),To.update(n),X_(n);{const f=Ac().map(h=>h.label+(h.disabled?0:1)).join("|");f!==vd&&(vd=f,Oo())}q_(n,o),kt.bark&&(kt.bark.pos.distanceTo(Ce)<22&&ft(`🚌 ${kt.bark.text}`),kt.bark=null);let a=null,l=1e9;if(!Re)for(const f of w_){const h=Math.hypot(Ce.x-f.pos.x,Ce.z-f.pos.z);h<f.r&&h<l&&(l=h,a=f)}if(Za)a=Za;else if(!Re||Re.allowHots){for(const f of Zl){const h=f();if(h){a=h;break}}!a&&!Re&&(a=Ws.hot())}a!==Ja&&(Ja=a,re("actionBtn").classList.toggle("hidden",!a)),a&&(re("actionLabel").textContent=typeof a.label=="function"?a.label():a.label),yt?re("actionBtn").classList.add("hidden"):a&&re("actionBtn").classList.remove("hidden"),re("actionBtn").querySelector(".key").style.display=Vs?"none":"",Ke.cur&&!Re&&vt.camYawTo(0,n*4);const r=(d=Re==null?void 0:Re.camDist)!=null?d:Ke.cur?8.5:ja,c=(p=Re==null?void 0:Re.camPitch)!=null?p:Ke.cur?.95:Ka;gd.set(Ce.x,Ce.y+1.1,Ce.z),tl.set(Ce.x+Math.sin(Xt)*Math.cos(c)*r,Ce.y+1.1+Math.sin(c)*r,Ce.z+Math.cos(Xt)*Math.cos(c)*r),Ql?(gn.position.copy(tl),Ql=!1):gn.position.lerp(tl,Math.min(1,n*6)),Rs>0&&(Rs-=n,gn.position.x+=(Math.random()-.5)*Rs,gn.position.y+=(Math.random()-.5)*Rs),gn.lookAt(gd),M_(n),el-=n,el<=0&&(el=.25,Eu()),hi.render(nt,gn)}const Qe=new Fy;let Re=null,Za=null,Dn=null,wi=null,Da=null,Jl=null;const Zl=[];function Au(n){Re&&Po(),hn!=null&&hn.held&&!["photo"].includes(n.name)&&hn.drop(),Re=n,ns(),Oo()}function Po(){var e;const n=Re;Re=null,Za=null,(e=n==null?void 0:n.onEnd)==null||e.call(n),Oo()}function Ac(){var n;return Re?((n=Re.buttons)==null?void 0:n.call(Re))||[]:!hn||yt||(dt==null?void 0:dt.parent)!==nt?[]:hn.buttons()}let vd="",Ql=!1,Rs=0,Bt=null;function Oo(){const n=re("ctxBtns");n.innerHTML="";for(const e of Ac()){const t=document.createElement("button");t.className="ctx-btn",t.disabled=!!e.disabled,t.innerHTML=`${e.label}${!Vs&&e.key?`<span class="key">${e.key===" "?"Space":e.key.toUpperCase()}</span>`:""}`,t.addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation(),Qe.init(),yt||(e.onClick(),Oo())}),n.appendChild(t)}n.classList.toggle("hidden",!n.children.length)}function F_(n){const e=re("actHud");e._h!==n&&(e._h=n,e.innerHTML=n,e.classList.toggle("hidden",!n))}function B_({label:n,taps:e=12,secs:t=4}){return new Promise(i=>{yt=!0,Ai=!0;const s=re("mash"),o=re("mashFill"),a=re("mashBtn");re("mashLabel").textContent=n,s.classList.remove("hidden");let l=0,r=performance.now(),c=!1;const d=y=>{c||(c=!0,s.classList.add("hidden"),removeEventListener("keydown",f),a.onpointerdown=null,Ai=!1,yt=!1,i(y))},p=()=>{l++,Qe.tone(300+l*25,.05,"triangle",.08),o.style.width=Math.min(100,l/e*100)+"%",l>=e&&d(!0)},f=y=>{(y.key===" "||y.key.toLowerCase()==="e")&&(y.preventDefault(),y.repeat||p())};addEventListener("keydown",f),a.onpointerdown=y=>{y.preventDefault(),p()},o.style.width="0%";const h=()=>{if(c)return;const y=t-(performance.now()-r)/1e3;re("mashTime").textContent=Math.max(0,y).toFixed(1)+"s",y<=0?d(!1):requestAnimationFrame(h)};h()})}const vt={get world(){return kt},get sim(){return X},scene:nt,camera:gn,renderer:hi,pos:Ce,get player(){return dt},audio:Qe,get time(){return vo},moveAmt:0,isTouch:Vs,input(){let n=Ft.x,e=Ft.y;return yt?(n=0,e=0):((wt.has("w")||wt.has("arrowup"))&&(e+=1),(wt.has("s")||wt.has("arrowdown"))&&(e-=1),(wt.has("a")||wt.has("arrowleft"))&&(n-=1),(wt.has("d")||wt.has("arrowright"))&&(n+=1)),{ix:Tt.clamp(n,-1,1),iy:Tt.clamp(e,-1,1),run:wt.has("shift")||Ft.active&&Math.hypot(Ft.x,Ft.y)>.95}},camYawTo(n,e){let t=n-Xt;t=Math.atan2(Math.sin(t),Math.cos(t)),Xt+=t*Math.min(1,e)},setRot(n){Kt=n},zoom(n){Re&&(Re.camDist=Tt.clamp(Re.camDist+n,2.5,14))},startActivity:Au,endActivity:Po,activityName:()=>(Re==null?void 0:Re.name)||null,toast:ft,modal:jt,closeModal:No,fade:Uo,save:()=>tn(),setBusy(n){yt=n,Ai=n},isBusy:()=>yt,ctxHot(n){Za=n},actHud:F_,mash:B_,closePhone:ns,renderNow(){hi.render(nt,gn)},wheel:Cu,wait:n=>new Promise(e=>setTimeout(e,n)),rotY:()=>Kt,inside:()=>!!(Ke!=null&&Ke.cur),resolve(n,e){Ke!=null&&Ke.cur?Ke.resolve(n,e):kt.resolve(n,e)},snapCam(){Ql=!0},shake(n){Rs=Math.max(Rs,n)},homeMenu:()=>E_(),genMenu:()=>bu(),bukaMenu:()=>Su(),shopMenu:()=>z_(),sitEat:n=>H_(n),pray:n=>V_(n),haircut:()=>W_(),sitChair:n=>$_(n),evCtx:()=>({rain:!!(X!=null&&X.s.rain),blackout:!(X!=null&&X.s.power),fuelHike:X?X.s.t-X.s.fuelHikeT<600:!1})};function Cu({who:n,text:e,sub:t,options:i}){return new Promise(s=>{Bt&&Bt.pick(-1),yt=!0,Ai=!0;const o=re("wheel");o.classList.remove("hidden");const a=i.length;o.innerHTML=`<div class="wh-center"><b>${n||""}</b><div>${e||""}</div>${t?`<small>${t}</small>`:""}</div>`+i.map((r,c)=>{const d=-Math.PI/2+c/a*Math.PI*2;return`<button class="wh-opt t-${(r.tag||"").toLowerCase().replace(/[^a-z]/g,"")}" style="--x:${Math.cos(d).toFixed(3)};--y:${Math.sin(d).toFixed(3)}" data-i="${c}" ${r.disabled?"disabled":""}><em>${Vs?"":c+1+" • "}${r.tag||""}</em>${r.label}</button>`}).join("");const l=r=>{Bt&&(Bt=null,o.classList.add("hidden"),o.innerHTML="",Ai=!1,yt=!1,Qe.click(),s(r>=0?i[r]:null))};Bt={opts:i,pick:r=>{var c;r>=0&&((c=i[r])!=null&&c.disabled)||l(r)}},o.querySelectorAll(".wh-opt").forEach(r=>r.addEventListener("pointerdown",c=>{c.preventDefault(),c.stopPropagation(),Bt==null||Bt.pick(+r.dataset.i)}))})}function z_(){const n=X.priceMul("Mama Nkechi"),e=t=>Math.round(t*n/50)*50;jt("Mama Nkechi Provisions 🛒",`"Wetin you wan buy, my dear?" ${n<1?"(She dey give you discount ❤️)":n>1?"(She dey price you high 😒)":""}`,[{label:"Pure water & gala to hawk 🧺",sub:"Stock up your tray",onClick:()=>setTimeout(()=>Dn.stockMenu(),50)},{label:"Agege bread 🍞",sub:"Carry & chop (+20 Belle)",price:j(e(500)),disabled:X.s.cash<e(500),onClick:()=>{X.spend(e(500)),hn.give("bread")}},{label:"Cold pure water 💧",sub:"Carry & drink",price:j(e(100)),disabled:X.s.cash<e(100),onClick:()=>{X.spend(e(100)),hn.give("water")}},{label:"Plastic bucket 🪣",price:j(e(800)),disabled:X.s.cash<e(800),onClick:()=>{X.spend(e(800)),hn.give("bucket")}},{label:"Data recharge 📶",sub:"Open GistMe Data app",onClick:()=>setTimeout(()=>Tc("data"),50)},{label:"Comot",close:!0}])}let po=null;function Cc(n,e,t,i){po={up:()=>{dt.userData.sitting=!1,po=null,i==null||i()}},Ce.copy(n),Kt=e,Au({name:"sit",camDist:6.5,camPitch:.7,buttons:()=>[{label:"Stand up 🧍",key:"x",onClick:()=>Po()}],update(){dt.userData.sitting||yd()},onEnd(){po==null||po.up()}}),yd(),t&&setTimeout(()=>{(Re==null?void 0:Re.name)==="sit"&&Po()},t*1e3)}function yd(){si(dt),dt.position.copy(Ce)}function H_(n){Cc(n,Math.PI,0),setTimeout(()=>Su(),300)}function V_(n){const e=X.s,t=X.day;Cc(n,Math.PI,3.5,()=>{}),setTimeout(()=>{X.advance(30),e.mood=Math.min(100,e.mood+8),e.churchDay!==t?(e.churchDay=t,X.addKarma(1,"prayer"),ft('Pastor: "Your breakthrough don land!" 🙏 +8 Mind +1 karma',"good")):ft("You pray small 🙏 +8 Mind","good"),tn()},1500)}function W_(){const n=Math.round(1500*X.priceMul("Barber Kola")/50)*50;if(X.s.cash<n)return ft(`Barbing na ${j(n)} — you no get am 😅`,"bad");Cu({who:"Barber Kola",text:"Which style you want?",sub:`${j(n)} • +10 Mind`,options:[...sr.filter(e=>e.id!==Dt.hair).slice(0,5).map(e=>({id:e.id,tag:"Style",label:e.name})),{id:null,tag:"Comot",label:"No mind"}]}).then(e=>{!e||!e.id||(X.spend(n),Uo("✂️ Bzzzz... Barber dey work",700,()=>{Dt={...Dt,hair:e.id},wc(Sc,Dt);const t=dt,i=t.parent;i.remove(t),dt=vn(Dt),i.add(dt),Dn.attachTray(dt),X.s.mood=Math.min(100,X.s.mood+10),X.s.statsV3.haircuts++,X.addRel("Barber Kola",3)}).then(()=>ft(`Fresh ${e.label}! You fine die 😎 +10 Mind`,"good")))})}function $_(n){Cc(n.mesh.position.clone(),Kt,0,()=>{Ce.addScaledVector(new P(Math.sin(Kt),0,Math.cos(Kt)),.7)}),X.s.mood=Math.min(100,X.s.mood+1)}const Rc=1400,Qa=new Pt;Qa.setAttribute("position",new yn(new Float32Array(Rc*6),3));const wo=new Qd(Qa,new xo({color:12573183,transparent:!0,opacity:.55}));wo.frustumCulled=!1;nt.add(wo);const G_=Array.from({length:Rc},()=>[Math.random()*60-30,Math.random()*18,Math.random()*60-30]);let Fn=0;function X_(n){if(Fn+=((X.s.rain&&!Ke.cur?1:0)-Fn)*Math.min(1,n*1.5),wo.visible=Fn>.02,wo.material.opacity=.55*Fn,wo.visible){const e=Qa.attributes.position.array;for(let t=0;t<Rc;t++){const i=G_[t];i[1]-=n*22,i[1]<0&&(i[1]+=18);const s=Ce.x+i[0],o=i[1],a=Ce.z+i[2];e.set([s,o,a,s+.05,o+.6,a],t*6)}Qa.attributes.position.needsUpdate=!0,Qe.level("crowd",.12*Fn)}Fn>.02&&(qi.intensity*=1-.3*Fn,wn.intensity*=1-.55*Fn,nt.background.lerp(g_.set("#7d8aa0"),.5*Fn),nt.fog.color.copy(nt.background),nt.fog.far*=1-.35*Fn),Ke.cur&&(nt.background.set("#2a2030"),nt.fog.color.set("#2a2030"),nt.fog.far=400,qi.intensity=Math.max(qi.intensity,.85))}let Ke=null,hn=null,Ws=null,Eo=null,ec=null,To=null;function Y_(){Ws=Ky(vt),vt.social=Ws,ec=Qy(vt),vt.rivals=ec,hn=Yy(vt),vt.carry=hn,Ke=Gy(vt),vt.interiors=Ke,Eo=jy(vt),vt.traffic=Eo,To=r_(vt),vt.board=To,Dn=By(vt),wi=zy(vt),Da=Hy(vt),Jl=Vy(vt),vt.hustles=Dn,vt.events=wi,vt.photo=Jl,vt.football=Da,Ro=$y(vt),kt.onDanfoNear=e=>{e.mesh.position.distanceTo(Ce)<18&&Qe.horn()};const n=(e,t,i)=>Math.hypot(Ce.x-e,Ce.z-t)<i;Zl.push(()=>Dn.kekeHot(),()=>wi.deedHot(),()=>Dn.hawkHot(),()=>Da.hot(),()=>n(-58,6.6,2.8)&&X.hour>=6&&X.hour<21?{label:"Work as Danfo conductor 🚌",act:Dn.startShift}:null),Zl.unshift(()=>Ke.hot(),()=>Ke.doorHot(),()=>Eo.hot(),()=>To.hot())}function Ru(){if(yt)return setTimeout(Ru,3e3);Qe.ring(),jt("📞 Incoming call: LapoPay Recovery",`"Hello ${X.s.name}, this na LapoPay. You owe <b>${j(X.s.loan)}</b> and you don pass due date. Pay today or our field agents go visit you. We fit even call your contacts o." 😬`,[{label:"Pay ₦1,000 now",disabled:X.s.cash<1e3,onClick:()=>{X.repay(1e3),ft('Agent: "Okay, we go extend am small." 3 more days',"good"),tn()}},{label:"Pay everything",disabled:X.s.cash<X.s.loan,onClick:()=>{X.repay(X.s.loan),tn()}},{label:"Abeg give me time 🙏",sub:"Dem go still come",close:!0},{label:"Hang up 📵",sub:"-1 mind",onClick:()=>{X.s.mood=Math.max(0,X.s.mood-1)}}],"warn")}function Pu(){Qe.setMuted(!Qe.muted),re("muteBtn").textContent=Qe.muted?"🔇":"🔊"}re("muteBtn").addEventListener("click",()=>{Qe.init(),Pu()});re("radioBtn").addEventListener("click",()=>{if(Qe.init(),!X.s.items.radio)return ft("Your radio don seize by LapoPay agents 😭","bad");Qe.setRadio(!Qe.radioOn),re("radioBtn").classList.toggle("on",Qe.radioOn),ft(Qe.radioOn?"📻 Wahala FM 104.0 — Afro vibes":"📻 Radio off")});addEventListener("pointerdown",()=>Qe.init(),{once:!1,passive:!0});let nl=0,il=6,sl=4;function q_(n,e){if(!Qe.ctx)return;const t=Math.hypot(Ce.x-Wn.generator.x,Ce.z-Wn.generator.z);Qe.level("gen",X.genRunning?(X.s.quietGen?.15:1)*.25*Math.max(0,1-t/30):0);const i=Math.min(Math.hypot(Ce.x+21,Ce.z-15),Math.hypot(Ce.x-40,Ce.z-28)*1.3,Math.hypot(Ce.x-18,Ce.z+16)*1.4);Qe.level("crowd",.14*Math.max(0,1-i/26)*(X.isNight?.4:1)),(Re==null?void 0:Re.name)!=="keke"&&Qe.level("engine",(Re==null?void 0:Re.name)==="conductor"?.1:0),e>0&&dt.parent===nt&&(nl-=n*e*2.2,nl<=0&&(nl=1,Qe.step_())),il-=n,sl-=n,il<=0&&(il=5+Math.random()*9,kt.vehicles.some(s=>s.mesh.position.distanceTo(Ce)<16)&&Qe.horn()),sl<=0&&(sl=6+Math.random()*8,kt.vehicles.some(s=>s.type==="danfo"&&s.wait>0&&s.mesh.position.distanceTo(Ce)<18)&&Qe.conductor()),Qe.radioOn&&!X.s.items.radio&&(Qe.setRadio(!1),re("radioBtn").classList.remove("on")),Qe.schedule()}Tu();function Lu(){gn.aspect=innerWidth/innerHeight,gn.fov=gn.aspect<1?62:50,gn.updateProjectionMatrix()}Lu();addEventListener("resize",()=>{hi.setSize(innerWidth,innerHeight),Lu(),Ks==="creator"&&xu()});window.wahala={get sim(){return X},start:(n=!0)=>jl(n),setHour(n){const e=X.s;e.t=Math.floor(e.t/1440)*1440+Math.round(n*60),X.acc=0},setPower(n){X.setPower(n),$i=n?1:0},teleport(n,e,t=0){Ke&&n<200&&(Ke.cur=null),Ce.set(n,0,e),Xt=t,gn.position.set(n+Math.sin(t)*9,7,e+Math.cos(t)*9)},get world(){return kt},get pos(){return Ce},openPhone:Tc,closePhone:ns,closeModal:No,get G(){return vt},get H(){return Dn},get E(){return wi},get F(){return Da},get P(){return Jl},get activity(){return(Re==null?void 0:Re.name)||null},get I(){return Ke},get C(){return hn},get S(){return Ws},get T(){return Eo},get R(){return ec},get B(){return To},get wheelOpen(){return!!Bt},pickWheel(n){Bt==null||Bt.pick(n)},wheelOpts(){return(Bt==null?void 0:Bt.opts.map(n=>n.tag+": "+n.label))||null},get busy(){return yt},setCam(n,e,t){Xt=n,e&&(Ka=e),t&&(ja=t)}};
