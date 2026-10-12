(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hc="169",Xu=0,qc=1,Yu=2,dc=1,qu=2,ti=3,li=0,en=1,Vn=2,wi=0,ks=1,Kc=2,jc=3,Jc=4,Ku=5,Xi=100,ju=101,Ju=102,Zu=103,Qu=104,ef=200,tf=201,nf=202,sf=203,hl=204,dl=205,of=206,af=207,rf=208,lf=209,cf=210,hf=211,df=212,uf=213,ff=214,ul=0,fl=1,pl=2,Fs=3,ml=4,gl=5,vl=6,yl=7,Rd=0,pf=1,mf=2,Si=0,gf=1,vf=2,yf=3,_f=4,xf=5,Mf=6,bf=7,Pd=300,Bs=301,zs=302,_l=303,xl=304,or=306,Ba=1e3,ni=1001,Ml=1002,Qt=1003,wf=1004,Go=1005,In=1006,mr=1007,qi=1008,ci=1009,Ld=1010,Id=1011,Lo=1012,uc=1013,Ji=1014,Wn=1015,Uo=1016,fc=1017,pc=1018,Hs=1020,kd=35902,Dd=1021,Nd=1022,Nn=1023,Ud=1024,Od=1025,Ds=1026,Vs=1027,ar=1028,mc=1029,Fd=1030,gc=1031,vc=1033,Aa=33776,Ca=33777,Ra=33778,Pa=33779,bl=35840,wl=35841,Sl=35842,El=35843,Tl=36196,Al=37492,Cl=37496,Rl=37808,Pl=37809,Ll=37810,Il=37811,kl=37812,Dl=37813,Nl=37814,Ul=37815,Ol=37816,Fl=37817,Bl=37818,zl=37819,Hl=37820,Vl=37821,La=36492,Wl=36494,$l=36495,Bd=36283,Gl=36284,Xl=36285,Yl=36286,Sf=3200,Ef=3201,zd=0,Tf=1,bi="",Yt="srgb",Ri="srgb-linear",yc="display-p3",rr="display-p3-linear",za="linear",Mt="srgb",Ha="rec709",Va="p3",as=7680,Zc=519,Af=512,Cf=513,Rf=514,Hd=515,Pf=516,Lf=517,If=518,kf=519,ql=35044,Qc="300 es",ii=2e3,Wa=2001;class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eh=1234567;const bo=Math.PI/180,Io=180/Math.PI;function si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function zt(n,e,t){return Math.max(e,Math.min(t,n))}function _c(n,e){return(n%e+e)%e}function Df(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Nf(n,e,t){return n!==e?(t-n)/(e-n):0}function wo(n,e,t){return(1-t)*n+t*e}function Uf(n,e,t,i){return wo(n,e,1-Math.exp(-t*i))}function Of(n,e=1){return e-Math.abs(_c(n,e*2)-e)}function Ff(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Bf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Hf(n,e){return n+Math.random()*(e-n)}function Vf(n){return n*(.5-Math.random())}function Wf(n){n!==void 0&&(eh=n);let e=eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $f(n){return n*bo}function Gf(n){return n*Io}function Xf(n){return(n&n-1)===0&&n!==0}function Yf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Kf(n,e,t,i,s){const o=Math.cos,a=Math.sin,l=o(t/2),r=a(t/2),c=o((e+i)/2),d=a((e+i)/2),f=o((e-i)/2),p=a((e-i)/2),h=o((i-e)/2),v=a((i-e)/2);switch(s){case"XYX":n.set(l*d,r*f,r*p,l*c);break;case"YZY":n.set(r*p,l*d,r*f,l*c);break;case"ZXZ":n.set(r*f,r*p,l*d,l*c);break;case"XZX":n.set(l*d,r*v,r*h,l*c);break;case"YXY":n.set(r*h,l*d,r*v,l*c);break;case"ZYZ":n.set(r*v,r*h,l*d,l*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Tt={DEG2RAD:bo,RAD2DEG:Io,generateUUID:si,clamp:zt,euclideanModulo:_c,mapLinear:Df,inverseLerp:Nf,lerp:wo,damp:Uf,pingpong:Of,smoothstep:Ff,smootherstep:Bf,randInt:zf,randFloat:Hf,randFloatSpread:Vf,seededRandom:Wf,degToRad:$f,radToDeg:Gf,isPowerOfTwo:Xf,ceilPowerOfTwo:Yf,floorPowerOfTwo:qf,setQuaternionFromProperEuler:Kf,normalize:ct,denormalize:kn};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*s+e.x,this.y=o*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,s,o,a,l,r,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,a,l,r,c)}set(e,t,i,s,o,a,l,r,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=l,d[3]=t,d[4]=o,d[5]=r,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,a=i[0],l=i[3],r=i[6],c=i[1],d=i[4],f=i[7],p=i[2],h=i[5],v=i[8],m=s[0],u=s[3],g=s[6],w=s[1],b=s[4],S=s[7],C=s[2],x=s[5],_=s[8];return o[0]=a*m+l*w+r*C,o[3]=a*u+l*b+r*x,o[6]=a*g+l*S+r*_,o[1]=c*m+d*w+f*C,o[4]=c*u+d*b+f*x,o[7]=c*g+d*S+f*_,o[2]=p*m+h*w+v*C,o[5]=p*u+h*b+v*x,o[8]=p*g+h*S+v*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],r=e[6],c=e[7],d=e[8];return t*a*d-t*l*c-i*o*d+i*l*r+s*o*c-s*a*r}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],r=e[6],c=e[7],d=e[8],f=d*a-l*c,p=l*r-d*o,h=c*o-a*r,v=t*f+i*p+s*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return e[0]=f*m,e[1]=(s*c-d*i)*m,e[2]=(l*i-s*a)*m,e[3]=p*m,e[4]=(d*t-s*r)*m,e[5]=(s*o-l*t)*m,e[6]=h*m,e[7]=(i*r-c*t)*m,e[8]=(a*t-i*o)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,a,l){const r=Math.cos(o),c=Math.sin(o);return this.set(i*r,i*c,-i*(r*a+c*l)+a+e,-s*c,s*r,-s*(-c*a+r*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(gr.makeScale(e,t)),this}rotate(e){return this.premultiply(gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new $e;function Vd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jf(){const n=$a("canvas");return n.style.display="block",n}const th={};function Ia(n){n in th||(th[n]=!0,console.warn(n))}function Jf(n,e,t){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}function Zf(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Qf(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nh=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ih=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qs={[Ri]:{transfer:za,primaries:Ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Yt]:{transfer:Mt,primaries:Ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[rr]:{transfer:za,primaries:Va,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(ih),fromReference:n=>n.applyMatrix3(nh)},[yc]:{transfer:Mt,primaries:Va,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(ih),fromReference:n=>n.applyMatrix3(nh).convertLinearToSRGB()}},ep=new Set([Ri,rr]),at={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ep.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Qs[e].toReference,s=Qs[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Qs[n].primaries},getTransfer:function(n){return n===bi?za:Qs[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Qs[e].luminanceCoefficients)}};function Ns(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rs;class tp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=$a("canvas")),rs.width=e.width,rs.height=e.height;const i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=$a("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=Ns(o[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ns(t[i]/255)*255):t[i]=Ns(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let np=0;class Wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?o.push(yr(s[a].image)):o.push(yr(s[a]))}else o=yr(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function yr(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?tp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ip=0;class qt extends Ys{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=ni,s=ni,o=In,a=qi,l=Nn,r=ci,c=qt.DEFAULT_ANISOTROPY,d=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=si(),this.name="",this.source=new Wd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=r,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ba:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ba:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Pd;qt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*o,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*o,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*o,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const r=e.elements,c=r[0],d=r[4],f=r[8],p=r[1],h=r[5],v=r[9],m=r[2],u=r[6],g=r[10];if(Math.abs(d-p)<.01&&Math.abs(f-m)<.01&&Math.abs(v-u)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+m)<.1&&Math.abs(v+u)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(h+1)/2,C=(g+1)/2,x=(d+p)/4,_=(f+m)/4,E=(v+u)/4;return b>S&&b>C?b<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(b),s=x/i,o=_/i):S>C?S<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),i=x/s,o=E/s):C<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(C),i=_/o,s=E/o),this.set(i,s,o,t),this}let w=Math.sqrt((u-v)*(u-v)+(f-m)*(f-m)+(p-d)*(p-d));return Math.abs(w)<.001&&(w=1),this.x=(u-v)/w,this.y=(f-m)/w,this.z=(p-d)/w,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sp extends Ys{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new qt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends sp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $d extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class op extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,a,l){let r=i[s+0],c=i[s+1],d=i[s+2],f=i[s+3];const p=o[a+0],h=o[a+1],v=o[a+2],m=o[a+3];if(l===0){e[t+0]=r,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(l===1){e[t+0]=p,e[t+1]=h,e[t+2]=v,e[t+3]=m;return}if(f!==m||r!==p||c!==h||d!==v){let u=1-l;const g=r*p+c*h+d*v+f*m,w=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const C=Math.sqrt(b),x=Math.atan2(C,g*w);u=Math.sin(u*x)/C,l=Math.sin(l*x)/C}const S=l*w;if(r=r*u+p*S,c=c*u+h*S,d=d*u+v*S,f=f*u+m*S,u===1-l){const C=1/Math.sqrt(r*r+c*c+d*d+f*f);r*=C,c*=C,d*=C,f*=C}}e[t]=r,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,o,a){const l=i[s],r=i[s+1],c=i[s+2],d=i[s+3],f=o[a],p=o[a+1],h=o[a+2],v=o[a+3];return e[t]=l*v+d*f+r*h-c*p,e[t+1]=r*v+d*p+c*f-l*h,e[t+2]=c*v+d*h+l*p-r*f,e[t+3]=d*v-l*f-r*p-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,a=e._order,l=Math.cos,r=Math.sin,c=l(i/2),d=l(s/2),f=l(o/2),p=r(i/2),h=r(s/2),v=r(o/2);switch(a){case"XYZ":this._x=p*d*f+c*h*v,this._y=c*h*f-p*d*v,this._z=c*d*v+p*h*f,this._w=c*d*f-p*h*v;break;case"YXZ":this._x=p*d*f+c*h*v,this._y=c*h*f-p*d*v,this._z=c*d*v-p*h*f,this._w=c*d*f+p*h*v;break;case"ZXY":this._x=p*d*f-c*h*v,this._y=c*h*f+p*d*v,this._z=c*d*v+p*h*f,this._w=c*d*f-p*h*v;break;case"ZYX":this._x=p*d*f-c*h*v,this._y=c*h*f+p*d*v,this._z=c*d*v-p*h*f,this._w=c*d*f+p*h*v;break;case"YZX":this._x=p*d*f+c*h*v,this._y=c*h*f+p*d*v,this._z=c*d*v-p*h*f,this._w=c*d*f-p*h*v;break;case"XZY":this._x=p*d*f-c*h*v,this._y=c*h*f-p*d*v,this._z=c*d*v+p*h*f,this._w=c*d*f+p*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],a=t[1],l=t[5],r=t[9],c=t[2],d=t[6],f=t[10],p=i+l+f;if(p>0){const h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(d-r)*h,this._y=(o-c)*h,this._z=(a-s)*h}else if(i>l&&i>f){const h=2*Math.sqrt(1+i-l-f);this._w=(d-r)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(o+c)/h}else if(l>f){const h=2*Math.sqrt(1+l-i-f);this._w=(o-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(r+d)/h}else{const h=2*Math.sqrt(1+f-i-l);this._w=(a-s)/h,this._x=(o+c)/h,this._y=(r+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,a=e._w,l=t._x,r=t._y,c=t._z,d=t._w;return this._x=i*d+a*l+s*c-o*r,this._y=s*d+a*r+o*l-i*c,this._z=o*d+a*c+i*r-s*l,this._w=a*d-i*l-s*r-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,a=this._w;let l=a*e._w+i*e._x+s*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=i,this._y=s,this._z=o,this;const r=1-l*l;if(r<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*o+t*this._z,this.normalize(),this}const c=Math.sqrt(r),d=Math.atan2(c,l),f=Math.sin((1-t)*d)/c,p=Math.sin(t*d)/c;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=o*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,a=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*a,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*a,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,a=e.y,l=e.z,r=e.w,c=2*(a*s-l*i),d=2*(l*t-o*s),f=2*(o*i-a*t);return this.x=t+r*c+a*f-l*d,this.y=i+r*d+l*c-o*f,this.z=s+r*f+o*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,a=t.x,l=t.y,r=t.z;return this.x=s*r-o*l,this.y=o*a-i*r,this.z=i*l-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _r.copy(this).projectOnVector(e),this.sub(_r)}reflect(e){return this.sub(_r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new P,sh=new Oo;class ts{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=o.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(o,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xo.copy(i.boundingBox)),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}const s=e.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Yo.subVectors(this.max,eo),ls.subVectors(e.a,eo),cs.subVectors(e.b,eo),hs.subVectors(e.c,eo),fi.subVectors(cs,ls),pi.subVectors(hs,cs),Ii.subVectors(ls,hs);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ii.z,Ii.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ii.z,0,-Ii.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ii.y,Ii.x,0];return!xr(t,ls,cs,hs,Yo)||(t=[1,0,0,0,1,0,0,0,1],!xr(t,ls,cs,hs,Yo))?!1:(qo.crossVectors(fi,pi),t=[qo.x,qo.y,qo.z],xr(t,ls,cs,hs,Yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new P,new P,new P,new P,new P,new P,new P,new P],Rn=new P,Xo=new ts,ls=new P,cs=new P,hs=new P,fi=new P,pi=new P,Ii=new P,eo=new P,Yo=new P,qo=new P,ki=new P;function xr(n,e,t,i,s){for(let o=0,a=n.length-3;o<=a;o+=3){ki.fromArray(n,o);const l=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),r=e.dot(ki),c=t.dot(ki),d=i.dot(ki);if(Math.max(-Math.max(r,c,d),Math.min(r,c,d))>l)return!1}return!0}const ap=new ts,to=new P,Mr=new P;class ns{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ap.setFromPoints(e).getCenter(i);let s=0;for(let o=0,a=e.length;o<a;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(to,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Mr)),this.expandByPoint(to.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new P,br=new P,Ko=new P,mi=new P,wr=new P,jo=new P,Sr=new P;class xc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){br.copy(e).add(t).multiplyScalar(.5),Ko.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(br);const o=e.distanceTo(t)*.5,a=-this.direction.dot(Ko),l=mi.dot(this.direction),r=-mi.dot(Ko),c=mi.lengthSq(),d=Math.abs(1-a*a);let f,p,h,v;if(d>0)if(f=a*r-l,p=a*l-r,v=o*d,f>=0)if(p>=-v)if(p<=v){const m=1/d;f*=m,p*=m,h=f*(f+a*p+2*l)+p*(a*f+p+2*r)+c}else p=o,f=Math.max(0,-(a*p+l)),h=-f*f+p*(p+2*r)+c;else p=-o,f=Math.max(0,-(a*p+l)),h=-f*f+p*(p+2*r)+c;else p<=-v?(f=Math.max(0,-(-a*o+l)),p=f>0?-o:Math.min(Math.max(-o,-r),o),h=-f*f+p*(p+2*r)+c):p<=v?(f=0,p=Math.min(Math.max(-o,-r),o),h=p*(p+2*r)+c):(f=Math.max(0,-(a*o+l)),p=f>0?o:Math.min(Math.max(-o,-r),o),h=-f*f+p*(p+2*r)+c);else p=a>0?-o:o,f=Math.max(0,-(a*p+l)),h=-f*f+p*(p+2*r)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(br).addScaledVector(Ko,p),h}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),s=qn.dot(qn)-i*i,o=e.radius*e.radius;if(s>o)return null;const a=Math.sqrt(o-s),l=i-a,r=i+a;return r<0?null:l<0?this.at(r,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,a,l,r;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),d>=0?(o=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(o=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),i>a||o>s||((o>i||isNaN(i))&&(i=o),(a<s||isNaN(s))&&(s=a),f>=0?(l=(e.min.z-p.z)*f,r=(e.max.z-p.z)*f):(l=(e.max.z-p.z)*f,r=(e.min.z-p.z)*f),i>r||l>s)||((l>i||i!==i)&&(i=l),(r<s||s!==s)&&(s=r),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,s,o){wr.subVectors(t,e),jo.subVectors(i,e),Sr.crossVectors(wr,jo);let a=this.direction.dot(Sr),l;if(a>0){if(s)return null;l=1}else if(a<0)l=-1,a=-a;else return null;mi.subVectors(this.origin,e);const r=l*this.direction.dot(jo.crossVectors(mi,jo));if(r<0)return null;const c=l*this.direction.dot(wr.cross(mi));if(c<0||r+c>a)return null;const d=-l*mi.dot(Sr);return d<0?null:this.at(d/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,s,o,a,l,r,c,d,f,p,h,v,m,u){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,a,l,r,c,d,f,p,h,v,m,u)}set(e,t,i,s,o,a,l,r,c,d,f,p,h,v,m,u){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=o,g[5]=a,g[9]=l,g[13]=r,g[2]=c,g[6]=d,g[10]=f,g[14]=p,g[3]=h,g[7]=v,g[11]=m,g[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),o=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,a=Math.cos(i),l=Math.sin(i),r=Math.cos(s),c=Math.sin(s),d=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const p=a*d,h=a*f,v=l*d,m=l*f;t[0]=r*d,t[4]=-r*f,t[8]=c,t[1]=h+v*c,t[5]=p-m*c,t[9]=-l*r,t[2]=m-p*c,t[6]=v+h*c,t[10]=a*r}else if(e.order==="YXZ"){const p=r*d,h=r*f,v=c*d,m=c*f;t[0]=p+m*l,t[4]=v*l-h,t[8]=a*c,t[1]=a*f,t[5]=a*d,t[9]=-l,t[2]=h*l-v,t[6]=m+p*l,t[10]=a*r}else if(e.order==="ZXY"){const p=r*d,h=r*f,v=c*d,m=c*f;t[0]=p-m*l,t[4]=-a*f,t[8]=v+h*l,t[1]=h+v*l,t[5]=a*d,t[9]=m-p*l,t[2]=-a*c,t[6]=l,t[10]=a*r}else if(e.order==="ZYX"){const p=a*d,h=a*f,v=l*d,m=l*f;t[0]=r*d,t[4]=v*c-h,t[8]=p*c+m,t[1]=r*f,t[5]=m*c+p,t[9]=h*c-v,t[2]=-c,t[6]=l*r,t[10]=a*r}else if(e.order==="YZX"){const p=a*r,h=a*c,v=l*r,m=l*c;t[0]=r*d,t[4]=m-p*f,t[8]=v*f+h,t[1]=f,t[5]=a*d,t[9]=-l*d,t[2]=-c*d,t[6]=h*f+v,t[10]=p-m*f}else if(e.order==="XZY"){const p=a*r,h=a*c,v=l*r,m=l*c;t[0]=r*d,t[4]=-f,t[8]=c*d,t[1]=p*f+m,t[5]=a*d,t[9]=h*f-v,t[2]=v*f-h,t[6]=l*d,t[10]=m*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rp,e,lp)}lookAt(e,t,i){const s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),gi.crossVectors(i,mn),gi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),gi.crossVectors(i,mn)),gi.normalize(),Jo.crossVectors(mn,gi),s[0]=gi.x,s[4]=Jo.x,s[8]=mn.x,s[1]=gi.y,s[5]=Jo.y,s[9]=mn.y,s[2]=gi.z,s[6]=Jo.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,a=i[0],l=i[4],r=i[8],c=i[12],d=i[1],f=i[5],p=i[9],h=i[13],v=i[2],m=i[6],u=i[10],g=i[14],w=i[3],b=i[7],S=i[11],C=i[15],x=s[0],_=s[4],E=s[8],k=s[12],y=s[1],M=s[5],R=s[9],N=s[13],U=s[2],L=s[6],D=s[10],F=s[14],H=s[3],q=s[7],ie=s[11],se=s[15];return o[0]=a*x+l*y+r*U+c*H,o[4]=a*_+l*M+r*L+c*q,o[8]=a*E+l*R+r*D+c*ie,o[12]=a*k+l*N+r*F+c*se,o[1]=d*x+f*y+p*U+h*H,o[5]=d*_+f*M+p*L+h*q,o[9]=d*E+f*R+p*D+h*ie,o[13]=d*k+f*N+p*F+h*se,o[2]=v*x+m*y+u*U+g*H,o[6]=v*_+m*M+u*L+g*q,o[10]=v*E+m*R+u*D+g*ie,o[14]=v*k+m*N+u*F+g*se,o[3]=w*x+b*y+S*U+C*H,o[7]=w*_+b*M+S*L+C*q,o[11]=w*E+b*R+S*D+C*ie,o[15]=w*k+b*N+S*F+C*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],a=e[1],l=e[5],r=e[9],c=e[13],d=e[2],f=e[6],p=e[10],h=e[14],v=e[3],m=e[7],u=e[11],g=e[15];return v*(+o*r*f-s*c*f-o*l*p+i*c*p+s*l*h-i*r*h)+m*(+t*r*h-t*c*p+o*a*p-s*a*h+s*c*d-o*r*d)+u*(+t*c*f-t*l*h-o*a*f+i*a*h+o*l*d-i*c*d)+g*(-s*l*d-t*r*f+t*l*p+s*a*f-i*a*p+i*r*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],a=e[4],l=e[5],r=e[6],c=e[7],d=e[8],f=e[9],p=e[10],h=e[11],v=e[12],m=e[13],u=e[14],g=e[15],w=f*u*c-m*p*c+m*r*h-l*u*h-f*r*g+l*p*g,b=v*p*c-d*u*c-v*r*h+a*u*h+d*r*g-a*p*g,S=d*m*c-v*f*c+v*l*h-a*m*h-d*l*g+a*f*g,C=v*f*r-d*m*r-v*l*p+a*m*p+d*l*u-a*f*u,x=t*w+i*b+s*S+o*C;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=w*_,e[1]=(m*p*o-f*u*o-m*s*h+i*u*h+f*s*g-i*p*g)*_,e[2]=(l*u*o-m*r*o+m*s*c-i*u*c-l*s*g+i*r*g)*_,e[3]=(f*r*o-l*p*o-f*s*c+i*p*c+l*s*h-i*r*h)*_,e[4]=b*_,e[5]=(d*u*o-v*p*o+v*s*h-t*u*h-d*s*g+t*p*g)*_,e[6]=(v*r*o-a*u*o-v*s*c+t*u*c+a*s*g-t*r*g)*_,e[7]=(a*p*o-d*r*o+d*s*c-t*p*c-a*s*h+t*r*h)*_,e[8]=S*_,e[9]=(v*f*o-d*m*o-v*i*h+t*m*h+d*i*g-t*f*g)*_,e[10]=(a*m*o-v*l*o+v*i*c-t*m*c-a*i*g+t*l*g)*_,e[11]=(d*l*o-a*f*o-d*i*c+t*f*c+a*i*h-t*l*h)*_,e[12]=C*_,e[13]=(d*m*s-v*f*s+v*i*p-t*m*p-d*i*u+t*f*u)*_,e[14]=(v*l*s-a*m*s-v*i*r+t*m*r+a*i*u-t*l*u)*_,e[15]=(a*f*s-d*l*s+d*i*r-t*f*r-a*i*p+t*l*p)*_,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,a=e.x,l=e.y,r=e.z,c=o*a,d=o*l;return this.set(c*a+i,c*l-s*r,c*r+s*l,0,c*l+s*r,d*l+i,d*r-s*a,0,c*r-s*l,d*r+s*a,o*r*r+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,a){return this.set(1,i,o,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,a=t._y,l=t._z,r=t._w,c=o+o,d=a+a,f=l+l,p=o*c,h=o*d,v=o*f,m=a*d,u=a*f,g=l*f,w=r*c,b=r*d,S=r*f,C=i.x,x=i.y,_=i.z;return s[0]=(1-(m+g))*C,s[1]=(h+S)*C,s[2]=(v-b)*C,s[3]=0,s[4]=(h-S)*x,s[5]=(1-(p+g))*x,s[6]=(u+w)*x,s[7]=0,s[8]=(v+b)*_,s[9]=(u-w)*_,s[10]=(1-(p+m))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=ds.set(s[0],s[1],s[2]).length();const a=ds.set(s[4],s[5],s[6]).length(),l=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);const c=1/o,d=1/a,f=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=d,Pn.elements[5]*=d,Pn.elements[6]*=d,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,t.setFromRotationMatrix(Pn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,o,a,l=ii){const r=this.elements,c=2*o/(t-e),d=2*o/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let h,v;if(l===ii)h=-(a+o)/(a-o),v=-2*a*o/(a-o);else if(l===Wa)h=-a/(a-o),v=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return r[0]=c,r[4]=0,r[8]=f,r[12]=0,r[1]=0,r[5]=d,r[9]=p,r[13]=0,r[2]=0,r[6]=0,r[10]=h,r[14]=v,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,i,s,o,a,l=ii){const r=this.elements,c=1/(t-e),d=1/(i-s),f=1/(a-o),p=(t+e)*c,h=(i+s)*d;let v,m;if(l===ii)v=(a+o)*f,m=-2*f;else if(l===Wa)v=o*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return r[0]=2*c,r[4]=0,r[8]=0,r[12]=-p,r[1]=0,r[5]=2*d,r[9]=0,r[13]=-h,r[2]=0,r[6]=0,r[10]=m,r[14]=-v,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ds=new P,Pn=new rt,rp=new P(0,0,0),lp=new P(1,1,1),gi=new P,Jo=new P,mn=new P,oh=new rt,ah=new Oo;class hi{constructor(e=0,t=0,i=0,s=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],a=s[4],l=s[8],r=s[1],c=s[5],d=s[9],f=s[2],p=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,h),this._z=Math.atan2(r,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(zt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(r,o));break;case"ZYX":this._y=Math.asin(-zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,h),this._z=Math.atan2(r,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,h));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class Gd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cp=0;const rh=new P,us=new Oo,Kn=new rt,Zo=new P,no=new P,hp=new P,dp=new Oo,lh=new P(1,0,0),ch=new P(0,1,0),hh=new P(0,0,1),dh={type:"added"},up={type:"removed"},fs={type:"childadded",child:null},Er={type:"childremoved",child:null};class At extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new P,t=new hi,i=new Oo,s=new P(1,1,1);function o(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new $e}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return rh.copy(e).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zo.copy(e):Zo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(no,Zo,this.up):Kn.lookAt(Zo,no,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),us.setFromRotationMatrix(Kn),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dh),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(up),Er.child=e,this.dispatchEvent(Er),Er.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dh),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,hp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(l,r){return l[r.uuid]===void 0&&(l[r.uuid]=r.toJSON(e)),r.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const r=l.shapes;if(Array.isArray(r))for(let c=0,d=r.length;c<d;c++){const f=r[c];o(e.shapes,f)}else o(e.shapes,r)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let r=0,c=this.material.length;r<c;r++)l.push(o(e.materials,this.material[r]));s.material=l}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const r=this.animations[l];s.animations.push(o(e.animations,r))}}if(t){const l=a(e.geometries),r=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),p=a(e.skeletons),h=a(e.animations),v=a(e.nodes);l.length>0&&(i.geometries=l),r.length>0&&(i.materials=r),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(l){const r=[];for(const c in l){const d=l[c];delete d.metadata,r.push(d)}return r}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}At.DEFAULT_UP=new P(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new P,jn=new P,Tr=new P,Jn=new P,ps=new P,ms=new P,uh=new P,Ar=new P,Cr=new P,Rr=new P,Pr=new pt,Lr=new pt,Ir=new pt;class wn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ln.subVectors(e,t),s.cross(Ln);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Ln.subVectors(s,t),jn.subVectors(i,t),Tr.subVectors(e,t);const a=Ln.dot(Ln),l=Ln.dot(jn),r=Ln.dot(Tr),c=jn.dot(jn),d=jn.dot(Tr),f=a*c-l*l;if(f===0)return o.set(0,0,0),null;const p=1/f,h=(c*r-l*d)*p,v=(a*d-l*r)*p;return o.set(1-h-v,v,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,s,o,a,l,r){return this.getBarycoord(e,t,i,s,Jn)===null?(r.x=0,r.y=0,"z"in r&&(r.z=0),"w"in r&&(r.w=0),null):(r.setScalar(0),r.addScaledVector(o,Jn.x),r.addScaledVector(a,Jn.y),r.addScaledVector(l,Jn.z),r)}static getInterpolatedAttribute(e,t,i,s,o,a){return Pr.setScalar(0),Lr.setScalar(0),Ir.setScalar(0),Pr.fromBufferAttribute(e,t),Lr.fromBufferAttribute(e,i),Ir.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Pr,o.x),a.addScaledVector(Lr,o.y),a.addScaledVector(Ir,o.z),a}static isFrontFacing(e,t,i,s){return Ln.subVectors(i,t),jn.subVectors(e,t),Ln.cross(jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Ln.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let a,l;ps.subVectors(s,i),ms.subVectors(o,i),Ar.subVectors(e,i);const r=ps.dot(Ar),c=ms.dot(Ar);if(r<=0&&c<=0)return t.copy(i);Cr.subVectors(e,s);const d=ps.dot(Cr),f=ms.dot(Cr);if(d>=0&&f<=d)return t.copy(s);const p=r*f-d*c;if(p<=0&&r>=0&&d<=0)return a=r/(r-d),t.copy(i).addScaledVector(ps,a);Rr.subVectors(e,o);const h=ps.dot(Rr),v=ms.dot(Rr);if(v>=0&&h<=v)return t.copy(o);const m=h*c-r*v;if(m<=0&&c>=0&&v<=0)return l=c/(c-v),t.copy(i).addScaledVector(ms,l);const u=d*v-h*f;if(u<=0&&f-d>=0&&h-v>=0)return uh.subVectors(o,s),l=(f-d)/(f-d+(h-v)),t.copy(s).addScaledVector(uh,l);const g=1/(u+m+p);return a=m*g,l=p*g,t.copy(i).addScaledVector(ps,a).addScaledVector(ms,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function kr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=_c(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,a=2*i-o;this.r=kr(a,o,e+1/3),this.g=kr(a,o,e),this.b=kr(a,o,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=Xd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return at.fromWorkingColorSpace(Gt.copy(this),e),Math.round(zt(Gt.r*255,0,255))*65536+Math.round(zt(Gt.g*255,0,255))*256+Math.round(zt(Gt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,s=Gt.g,o=Gt.b,a=Math.max(i,s,o),l=Math.min(i,s,o);let r,c;const d=(l+a)/2;if(l===a)r=0,c=0;else{const f=a-l;switch(c=d<=.5?f/(a+l):f/(2-a-l),a){case i:r=(s-o)/f+(s<o?6:0);break;case s:r=(o-i)/f+2;break;case o:r=(i-s)/f+4;break}r/=6}return e.h=r,e.s=c,e.l=d,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Yt){at.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,s=Gt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Qo);const i=wo(vi.h,Qo.h,t),s=wo(vi.s,Qo.s,t),o=wo(vi.l,Qo.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new ze;ze.NAMES=Xd;let fp=0;class Pi extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=si(),this.name="",this.type="Material",this.blending=ks,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=dl,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hl&&(i.blendSrc=this.blendSrc),this.blendDst!==dl&&(i.blendDst=this.blendDst),this.blendEquation!==Xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const a=[];for(const l in o){const r=o[l];delete r.metadata,a.push(r)}return a}if(t){const o=s(e.textures),a=s(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qs extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new P,ea=new ue;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ql,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ea.fromBufferAttribute(this,t),ea.applyMatrix3(e),this.setXY(t,ea.x,ea.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array),o=ct(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ql&&(e.usage=this.usage),e}}class Yd extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qd extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mt extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let pp=0;const xn=new rt,Dr=new At,gs=new P,gn=new ts,io=new ts,Ot=new P;class Pt extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vd(e)?qd:Yd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new $e().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return Dr.lookAt(e),Dr.updateMatrix(),this.applyMatrix4(Dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];gn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const l=t[o];io.setFromBufferAttribute(l),this.morphTargetsRelative?(Ot.addVectors(gn.min,io.min),gn.expandByPoint(Ot),Ot.addVectors(gn.max,io.max),gn.expandByPoint(Ot)):(gn.expandByPoint(io.min),gn.expandByPoint(io.max))}gn.getCenter(i);let s=0;for(let o=0,a=e.count;o<a;o++)Ot.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let o=0,a=t.length;o<a;o++){const l=t[o],r=this.morphTargetsRelative;for(let c=0,d=l.count;c<d;c++)Ot.fromBufferAttribute(l,c),r&&(gs.fromBufferAttribute(e,c),Ot.add(gs)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],r=[];for(let E=0;E<i.count;E++)l[E]=new P,r[E]=new P;const c=new P,d=new P,f=new P,p=new ue,h=new ue,v=new ue,m=new P,u=new P;function g(E,k,y){c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,k),f.fromBufferAttribute(i,y),p.fromBufferAttribute(o,E),h.fromBufferAttribute(o,k),v.fromBufferAttribute(o,y),d.sub(c),f.sub(c),h.sub(p),v.sub(p);const M=1/(h.x*v.y-v.x*h.y);isFinite(M)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(f,-h.y).multiplyScalar(M),u.copy(f).multiplyScalar(h.x).addScaledVector(d,-v.x).multiplyScalar(M),l[E].add(m),l[k].add(m),l[y].add(m),r[E].add(u),r[k].add(u),r[y].add(u))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,k=w.length;E<k;++E){const y=w[E],M=y.start,R=y.count;for(let N=M,U=M+R;N<U;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const b=new P,S=new P,C=new P,x=new P;function _(E){C.fromBufferAttribute(s,E),x.copy(C);const k=l[E];b.copy(k),b.sub(C.multiplyScalar(C.dot(k))).normalize(),S.crossVectors(x,k);const M=S.dot(r[E])<0?-1:1;a.setXYZW(E,b.x,b.y,b.z,M)}for(let E=0,k=w.length;E<k;++E){const y=w[E],M=y.start,R=y.count;for(let N=M,U=M+R;N<U;N+=3)_(e.getX(N+0)),_(e.getX(N+1)),_(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,h=i.count;p<h;p++)i.setXYZ(p,0,0,0);const s=new P,o=new P,a=new P,l=new P,r=new P,c=new P,d=new P,f=new P;if(e)for(let p=0,h=e.count;p<h;p+=3){const v=e.getX(p+0),m=e.getX(p+1),u=e.getX(p+2);s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),a.fromBufferAttribute(t,u),d.subVectors(a,o),f.subVectors(s,o),d.cross(f),l.fromBufferAttribute(i,v),r.fromBufferAttribute(i,m),c.fromBufferAttribute(i,u),l.add(d),r.add(d),c.add(d),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,r.x,r.y,r.z),i.setXYZ(u,c.x,c.y,c.z)}else for(let p=0,h=t.count;p<h;p+=3)s.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),d.subVectors(a,o),f.subVectors(s,o),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(l,r){const c=l.array,d=l.itemSize,f=l.normalized,p=new c.constructor(r.length*d);let h=0,v=0;for(let m=0,u=r.length;m<u;m++){l.isInterleavedBufferAttribute?h=r[m]*l.data.stride+l.offset:h=r[m]*d;for(let g=0;g<d;g++)p[v++]=c[h++]}return new yn(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,i=this.index.array,s=this.attributes;for(const l in s){const r=s[l],c=e(r,i);t.setAttribute(l,c)}const o=this.morphAttributes;for(const l in o){const r=[],c=o[l];for(let d=0,f=c.length;d<f;d++){const p=c[d],h=e(p,i);r.push(h)}t.morphAttributes[l]=r}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,r=a.length;l<r;l++){const c=a[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const r=this.parameters;for(const c in r)r[c]!==void 0&&(e[c]=r[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const r in i){const c=i[r];e.data.attributes[r]=c.toJSON(e.data)}const s={};let o=!1;for(const r in this.morphAttributes){const c=this.morphAttributes[r],d=[];for(let f=0,p=c.length;f<p;f++){const h=c[f];d.push(h.toJSON(e.data))}d.length>0&&(s[r]=d,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const o=e.morphAttributes;for(const c in o){const d=[],f=o[c];for(let p=0,h=f.length;p<h;p++)d.push(f[p].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const r=e.boundingSphere;return r!==null&&(this.boundingSphere=r.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fh=new rt,Di=new xc,ta=new ns,ph=new P,na=new P,ia=new P,sa=new P,Nr=new P,oa=new P,mh=new P,aa=new P;class Ce extends At{constructor(e=new Pt,t=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(o&&l){oa.set(0,0,0);for(let r=0,c=o.length;r<c;r++){const d=l[r],f=o[r];d!==0&&(Nr.fromBufferAttribute(f,e),a?oa.addScaledVector(Nr,d):oa.addScaledVector(Nr.sub(t),d))}t.add(oa)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(o),Di.copy(e.ray).recast(e.near),!(ta.containsPoint(Di.origin)===!1&&(Di.intersectSphere(ta,ph)===null||Di.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(fh.copy(o).invert(),Di.copy(e.ray).applyMatrix4(fh),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,i){let s;const o=this.geometry,a=this.material,l=o.index,r=o.attributes.position,c=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,p=o.groups,h=o.drawRange;if(l!==null)if(Array.isArray(a))for(let v=0,m=p.length;v<m;v++){const u=p[v],g=a[u.materialIndex],w=Math.max(u.start,h.start),b=Math.min(l.count,Math.min(u.start+u.count,h.start+h.count));for(let S=w,C=b;S<C;S+=3){const x=l.getX(S),_=l.getX(S+1),E=l.getX(S+2);s=ra(this,g,e,i,c,d,f,x,_,E),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const v=Math.max(0,h.start),m=Math.min(l.count,h.start+h.count);for(let u=v,g=m;u<g;u+=3){const w=l.getX(u),b=l.getX(u+1),S=l.getX(u+2);s=ra(this,a,e,i,c,d,f,w,b,S),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}else if(r!==void 0)if(Array.isArray(a))for(let v=0,m=p.length;v<m;v++){const u=p[v],g=a[u.materialIndex],w=Math.max(u.start,h.start),b=Math.min(r.count,Math.min(u.start+u.count,h.start+h.count));for(let S=w,C=b;S<C;S+=3){const x=S,_=S+1,E=S+2;s=ra(this,g,e,i,c,d,f,x,_,E),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const v=Math.max(0,h.start),m=Math.min(r.count,h.start+h.count);for(let u=v,g=m;u<g;u+=3){const w=u,b=u+1,S=u+2;s=ra(this,a,e,i,c,d,f,w,b,S),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}}}function mp(n,e,t,i,s,o,a,l){let r;if(e.side===en?r=i.intersectTriangle(a,o,s,!0,l):r=i.intersectTriangle(s,o,a,e.side===li,l),r===null)return null;aa.copy(l),aa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:n}}function ra(n,e,t,i,s,o,a,l,r,c){n.getVertexPosition(l,na),n.getVertexPosition(r,ia),n.getVertexPosition(c,sa);const d=mp(n,e,t,i,na,ia,sa,mh);if(d){const f=new P;wn.getBarycoord(mh,na,ia,sa,f),s&&(d.uv=wn.getInterpolatedAttribute(s,l,r,c,f,new ue)),o&&(d.uv1=wn.getInterpolatedAttribute(o,l,r,c,f,new ue)),a&&(d.normal=wn.getInterpolatedAttribute(a,l,r,c,f,new P),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:l,b:r,c,normal:new P,materialIndex:0};wn.getNormal(na,ia,sa,p.normal),d.face=p,d.barycoord=f}return d}class Ge extends Pt{constructor(e=1,t=1,i=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:a};const l=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const r=[],c=[],d=[],f=[];let p=0,h=0;v("z","y","x",-1,-1,i,t,e,a,o,0),v("z","y","x",1,-1,i,t,-e,a,o,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,o,4),v("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(r),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function v(m,u,g,w,b,S,C,x,_,E,k){const y=S/_,M=C/E,R=S/2,N=C/2,U=x/2,L=_+1,D=E+1;let F=0,H=0;const q=new P;for(let ie=0;ie<D;ie++){const se=ie*M-N;for(let Se=0;Se<L;Se++){const Le=Se*y-R;q[m]=Le*w,q[u]=se*b,q[g]=U,c.push(q.x,q.y,q.z),q[m]=0,q[u]=0,q[g]=x>0?1:-1,d.push(q.x,q.y,q.z),f.push(Se/_),f.push(1-ie/E),F+=1}}for(let ie=0;ie<E;ie++)for(let se=0;se<_;se++){const Se=p+se+L*ie,Le=p+se+L*(ie+1),K=p+(se+1)+L*(ie+1),ee=p+(se+1)+L*ie;r.push(Se,Le,ee),r.push(Le,K,ee),H+=6}l.addGroup(h,H,k),h+=H,p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ge(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=Ws(n[t]);for(const s in i)e[s]=i[s]}return e}function gp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const vp={clone:Ws,merge:Zt};var yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yp,this.fragmentShader=_p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=gp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class jd extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new P,gh=new ue,vh=new ue;class ln extends jd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,gh,vh),t.subVectors(vh,gh)}setViewOffset(e,t,i,s,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const r=a.fullWidth,c=a.fullHeight;o+=a.offsetX*s/r,t-=a.offsetY*i/c,s*=a.width/r,i*=a.height/c}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,ys=1;class xp extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(vs,ys,e,t);s.layers=this.layers,this.add(s);const o=new ln(vs,ys,e,t);o.layers=this.layers,this.add(o);const a=new ln(vs,ys,e,t);a.layers=this.layers,this.add(a);const l=new ln(vs,ys,e,t);l.layers=this.layers,this.add(l);const r=new ln(vs,ys,e,t);r.layers=this.layers,this.add(r);const c=new ln(vs,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,a,l,r]=t;for(const c of t)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),r.up.set(0,1,0),r.lookAt(0,0,-1);else if(e===Wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),r.up.set(0,-1,0),r.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,l,r,c,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,o),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,l),e.setRenderTarget(i,3,s),e.render(t,r),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,s),e.render(t,d),e.setRenderTarget(f,p,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Jd extends qt{constructor(e,t,i,s,o,a,l,r,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,i,s,o,a,l,r,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mp extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Jd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ge(5,5,5),o=new Ti({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:wi});o.uniforms.tEquirect.value=t;const a=new Ce(s,o),l=t.minFilter;return t.minFilter===qi&&(t.minFilter=In),new xp(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(o)}}const Ur=new P,bp=new P,wp=new $e;class Hi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ur.subVectors(i,t).cross(bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ur),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wp.getNormalMatrix(e),s=this.coplanarPoint(Ur).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new ns,la=new P;class Mc{constructor(e=new Hi,t=new Hi,i=new Hi,s=new Hi,o=new Hi,a=new Hi){this.planes=[e,t,i,s,o,a]}set(e,t,i,s,o,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(s),l[4].copy(o),l[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],r=s[3],c=s[4],d=s[5],f=s[6],p=s[7],h=s[8],v=s[9],m=s[10],u=s[11],g=s[12],w=s[13],b=s[14],S=s[15];if(i[0].setComponents(r-o,p-c,u-h,S-g).normalize(),i[1].setComponents(r+o,p+c,u+h,S+g).normalize(),i[2].setComponents(r+a,p+d,u+v,S+w).normalize(),i[3].setComponents(r-a,p-d,u-v,S-w).normalize(),i[4].setComponents(r-l,p-f,u-m,S-b).normalize(),t===ii)i[5].setComponents(r+l,p+f,u+m,S+b).normalize();else if(t===Wa)i[5].setComponents(l,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(la.x=s.normal.x>0?e.max.x:e.min.x,la.y=s.normal.y>0?e.max.y:e.min.y,la.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zd(){let n=null,e=!1,t=null,i=null;function s(o,a){t(o,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function Sp(n){const e=new WeakMap;function t(l,r){const c=l.array,d=l.usage,f=c.byteLength,p=n.createBuffer();n.bindBuffer(r,p),n.bufferData(r,c,d),l.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:f}}function i(l,r,c){const d=r.array,f=r.updateRanges;if(n.bindBuffer(c,l),f.length===0)n.bufferSubData(c,0,d);else{f.sort((h,v)=>h.start-v.start);let p=0;for(let h=1;h<f.length;h++){const v=f[p],m=f[h];m.start<=v.start+v.count+1?v.count=Math.max(v.count,m.start+m.count-v.start):(++p,f[p]=m)}f.length=p+1;for(let h=0,v=f.length;h<v;h++){const m=f[h];n.bufferSubData(c,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count)}r.clearUpdateRanges()}r.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const r=e.get(l);r&&(n.deleteBuffer(r.buffer),e.delete(l))}function a(l,r){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,r));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,r),c.version=l.version}}return{get:s,remove:o,update:a}}class rn extends Pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,a=t/2,l=Math.floor(i),r=Math.floor(s),c=l+1,d=r+1,f=e/l,p=t/r,h=[],v=[],m=[],u=[];for(let g=0;g<d;g++){const w=g*p-a;for(let b=0;b<c;b++){const S=b*f-o;v.push(S,-w,0),m.push(0,0,1),u.push(b/l),u.push(1-g/r)}}for(let g=0;g<r;g++)for(let w=0;w<l;w++){const b=w+c*g,S=w+c*(g+1),C=w+1+c*(g+1),x=w+1+c*g;h.push(b,S,x),h.push(S,C,x)}this.setIndex(h),this.setAttribute("position",new mt(v,3)),this.setAttribute("normal",new mt(m,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
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
#endif`,Ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kp=`#ifdef USE_BATCHING
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
#endif`,Dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fp=`#ifdef USE_IRIDESCENCE
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
#endif`,Bp=`#ifdef USE_BUMPMAP
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qp=`#define PI 3.141592653589793
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
} // validated`,Kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jp=`vec3 transformedNormal = objectNormal;
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
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",nm=`
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
}`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,um=`#ifdef USE_GRADIENTMAP
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
}`,fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
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
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
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
#endif`,wm=`struct PhysicalMaterial {
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
}`,Sm=`
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dm=`#if defined( USE_POINTS_UV )
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
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
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
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c0=`float getShadowMask() {
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
}`,h0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,u0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,p0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E0=`uniform sampler2D t2D;
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
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
}`,L0=`#if DEPTH_PACKING == 3200
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
}`,I0=`#define DISTANCE
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
}`,k0=`#define DISTANCE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
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
}`,O0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#define LAMBERT
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
}`,H0=`#define LAMBERT
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
}`,V0=`#define MATCAP
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
}`,W0=`#define MATCAP
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
}`,$0=`#define NORMAL
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
}`,G0=`#define NORMAL
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
}`,X0=`#define PHONG
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
}`,Y0=`#define PHONG
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
}`,q0=`#define STANDARD
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
}`,K0=`#define STANDARD
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
}`,j0=`#define TOON
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
}`,J0=`#define TOON
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
}`,Z0=`uniform float size;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,tg=`uniform vec3 color;
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
}`,ng=`uniform float rotation;
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
}`,ig=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Ep,alphahash_pars_fragment:Tp,alphamap_fragment:Ap,alphamap_pars_fragment:Cp,alphatest_fragment:Rp,alphatest_pars_fragment:Pp,aomap_fragment:Lp,aomap_pars_fragment:Ip,batching_pars_vertex:kp,batching_vertex:Dp,begin_vertex:Np,beginnormal_vertex:Up,bsdfs:Op,iridescence_fragment:Fp,bumpmap_pars_fragment:Bp,clipping_planes_fragment:zp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Wp,color_fragment:$p,color_pars_fragment:Gp,color_pars_vertex:Xp,color_vertex:Yp,common:qp,cube_uv_reflection_fragment:Kp,defaultnormal_vertex:jp,displacementmap_pars_vertex:Jp,displacementmap_vertex:Zp,emissivemap_fragment:Qp,emissivemap_pars_fragment:em,colorspace_fragment:tm,colorspace_pars_fragment:nm,envmap_fragment:im,envmap_common_pars_fragment:sm,envmap_pars_fragment:om,envmap_pars_vertex:am,envmap_physical_pars_fragment:vm,envmap_vertex:rm,fog_vertex:lm,fog_pars_vertex:cm,fog_fragment:hm,fog_pars_fragment:dm,gradientmap_pars_fragment:um,lightmap_pars_fragment:fm,lights_lambert_fragment:pm,lights_lambert_pars_fragment:mm,lights_pars_begin:gm,lights_toon_fragment:ym,lights_toon_pars_fragment:_m,lights_phong_fragment:xm,lights_phong_pars_fragment:Mm,lights_physical_fragment:bm,lights_physical_pars_fragment:wm,lights_fragment_begin:Sm,lights_fragment_maps:Em,lights_fragment_end:Tm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Rm,logdepthbuf_vertex:Pm,map_fragment:Lm,map_pars_fragment:Im,map_particle_fragment:km,map_particle_pars_fragment:Dm,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:Um,morphinstance_vertex:Om,morphcolor_vertex:Fm,morphnormal_vertex:Bm,morphtarget_pars_vertex:zm,morphtarget_vertex:Hm,normal_fragment_begin:Vm,normal_fragment_maps:Wm,normal_pars_fragment:$m,normal_pars_vertex:Gm,normal_vertex:Xm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:qm,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Jm,opaque_fragment:Zm,packing:Qm,premultiplied_alpha_fragment:e0,project_vertex:t0,dithering_fragment:n0,dithering_pars_fragment:i0,roughnessmap_fragment:s0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:r0,shadowmap_vertex:l0,shadowmask_pars_fragment:c0,skinbase_vertex:h0,skinning_pars_vertex:d0,skinning_vertex:u0,skinnormal_vertex:f0,specularmap_fragment:p0,specularmap_pars_fragment:m0,tonemapping_fragment:g0,tonemapping_pars_fragment:v0,transmission_fragment:y0,transmission_pars_fragment:_0,uv_pars_fragment:x0,uv_pars_vertex:M0,uv_vertex:b0,worldpos_vertex:w0,background_vert:S0,background_frag:E0,backgroundCube_vert:T0,backgroundCube_frag:A0,cube_vert:C0,cube_frag:R0,depth_vert:P0,depth_frag:L0,distanceRGBA_vert:I0,distanceRGBA_frag:k0,equirect_vert:D0,equirect_frag:N0,linedashed_vert:U0,linedashed_frag:O0,meshbasic_vert:F0,meshbasic_frag:B0,meshlambert_vert:z0,meshlambert_frag:H0,meshmatcap_vert:V0,meshmatcap_frag:W0,meshnormal_vert:$0,meshnormal_frag:G0,meshphong_vert:X0,meshphong_frag:Y0,meshphysical_vert:q0,meshphysical_frag:K0,meshtoon_vert:j0,meshtoon_frag:J0,points_vert:Z0,points_frag:Q0,shadow_vert:eg,shadow_frag:tg,sprite_vert:ng,sprite_frag:ig},ce={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},zn={basic:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ze(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Zt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Zt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ze(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Zt([ce.points,ce.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Zt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Zt([ce.common,ce.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Zt([ce.sprite,ce.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Zt([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Zt([ce.lights,ce.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};zn.physical={uniforms:Zt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const ca={r:0,b:0,g:0},Ui=new hi,sg=new rt;function og(n,e,t,i,s,o,a){const l=new ze(0);let r=o===!0?0:1,c,d,f=null,p=0,h=null;function v(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function m(w){let b=!1;const S=v(w);S===null?g(l,r):S&&S.isColor&&(g(S,1),b=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function u(w,b){const S=v(b);S&&(S.isCubeTexture||S.mapping===or)?(d===void 0&&(d=new Ce(new Ge(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Ws(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,x,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Ui.copy(b.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(Ui)),d.material.toneMapped=at.getTransfer(S.colorSpace)!==Mt,(f!==S||p!==S.version||h!==n.toneMapping)&&(d.material.needsUpdate=!0,f=S,p=S.version,h=n.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ce(new rn(2,2),new Ti({name:"BackgroundMaterial",uniforms:Ws(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=at.getTransfer(S.colorSpace)!==Mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||p!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,p=S.version,h=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,b){w.getRGB(ca,Kd(n)),i.buffers.color.setClear(ca.r,ca.g,ca.b,b,a)}return{getClearColor:function(){return l},setClearColor:function(w,b=1){l.set(w),r=b,g(l,r)},getClearAlpha:function(){return r},setClearAlpha:function(w){r=w,g(l,r)},render:m,addToRenderList:u}}function ag(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let o=s,a=!1;function l(y,M,R,N,U){let L=!1;const D=f(N,R,M);o!==D&&(o=D,c(o.object)),L=h(y,N,R,U),L&&v(y,N,R,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,S(y,M,R,N),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function r(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function d(y){return n.deleteVertexArray(y)}function f(y,M,R){const N=R.wireframe===!0;let U=i[y.id];U===void 0&&(U={},i[y.id]=U);let L=U[M.id];L===void 0&&(L={},U[M.id]=L);let D=L[N];return D===void 0&&(D=p(r()),L[N]=D),D}function p(y){const M=[],R=[],N=[];for(let U=0;U<t;U++)M[U]=0,R[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:R,attributeDivisors:N,object:y,attributes:{},index:null}}function h(y,M,R,N){const U=o.attributes,L=M.attributes;let D=0;const F=R.getAttributes();for(const H in F)if(F[H].location>=0){const ie=U[H];let se=L[H];if(se===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),ie===void 0||ie.attribute!==se||se&&ie.data!==se.data)return!0;D++}return o.attributesNum!==D||o.index!==N}function v(y,M,R,N){const U={},L=M.attributes;let D=0;const F=R.getAttributes();for(const H in F)if(F[H].location>=0){let ie=L[H];ie===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor));const se={};se.attribute=ie,ie&&ie.data&&(se.data=ie.data),U[H]=se,D++}o.attributes=U,o.attributesNum=D,o.index=N}function m(){const y=o.newAttributes;for(let M=0,R=y.length;M<R;M++)y[M]=0}function u(y){g(y,0)}function g(y,M){const R=o.newAttributes,N=o.enabledAttributes,U=o.attributeDivisors;R[y]=1,N[y]===0&&(n.enableVertexAttribArray(y),N[y]=1),U[y]!==M&&(n.vertexAttribDivisor(y,M),U[y]=M)}function w(){const y=o.newAttributes,M=o.enabledAttributes;for(let R=0,N=M.length;R<N;R++)M[R]!==y[R]&&(n.disableVertexAttribArray(R),M[R]=0)}function b(y,M,R,N,U,L,D){D===!0?n.vertexAttribIPointer(y,M,R,U,L):n.vertexAttribPointer(y,M,R,N,U,L)}function S(y,M,R,N){m();const U=N.attributes,L=R.getAttributes(),D=M.defaultAttributeValues;for(const F in L){const H=L[F];if(H.location>=0){let q=U[F];if(q===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){const ie=q.normalized,se=q.itemSize,Se=e.get(q);if(Se===void 0)continue;const Le=Se.buffer,K=Se.type,ee=Se.bytesPerElement,ye=K===n.INT||K===n.UNSIGNED_INT||q.gpuType===uc;if(q.isInterleavedBufferAttribute){const he=q.data,He=he.stride,ke=q.offset;if(he.isInstancedInterleavedBuffer){for(let je=0;je<H.locationSize;je++)g(H.location+je,he.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let je=0;je<H.locationSize;je++)u(H.location+je);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let je=0;je<H.locationSize;je++)b(H.location+je,se/H.locationSize,K,ie,He*ee,(ke+se/H.locationSize*je)*ee,ye)}else{if(q.isInstancedBufferAttribute){for(let he=0;he<H.locationSize;he++)g(H.location+he,q.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let he=0;he<H.locationSize;he++)u(H.location+he);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let he=0;he<H.locationSize;he++)b(H.location+he,se/H.locationSize,K,ie,se*ee,se/H.locationSize*he*ee,ye)}}else if(D!==void 0){const ie=D[F];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(H.location,ie);break;case 3:n.vertexAttrib3fv(H.location,ie);break;case 4:n.vertexAttrib4fv(H.location,ie);break;default:n.vertexAttrib1fv(H.location,ie)}}}}w()}function C(){E();for(const y in i){const M=i[y];for(const R in M){const N=M[R];for(const U in N)d(N[U].object),delete N[U];delete M[R]}delete i[y]}}function x(y){if(i[y.id]===void 0)return;const M=i[y.id];for(const R in M){const N=M[R];for(const U in N)d(N[U].object),delete N[U];delete M[R]}delete i[y.id]}function _(y){for(const M in i){const R=i[M];if(R[y.id]===void 0)continue;const N=R[y.id];for(const U in N)d(N[U].object),delete N[U];delete R[y.id]}}function E(){k(),a=!0,o!==s&&(o=s,c(o.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:E,resetDefaultState:k,dispose:C,releaseStatesOfGeometry:x,releaseStatesOfProgram:_,initAttributes:m,enableAttribute:u,disableUnusedAttributes:w}}function rg(n,e,t){let i;function s(c){i=c}function o(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function a(c,d,f){f!==0&&(n.drawArraysInstanced(i,c,d,f),t.update(d,i,f))}function l(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let h=0;for(let v=0;v<f;v++)h+=d[v];t.update(h,i,1)}function r(c,d,f,p){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<c.length;v++)a(c[v],d[v],p[v]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,d,0,p,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];for(let m=0;m<p.length;m++)t.update(v,i,p[m])}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=r}function lg(n,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Nn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(_){const E=_===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==ci&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==Wn&&!E)}function r(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=r(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const _=e.get("EXT_clip_control");_.clipControlEXT(_.LOWER_LEFT_EXT,_.ZERO_TO_ONE_EXT)}const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),u=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,x=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:r,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:h,maxVertexTextures:v,maxTextureSize:m,maxCubemapSize:u,maxAttributes:g,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:C,maxSamples:x}}function cg(n){const e=this;let t=null,i=0,s=!1,o=!1;const a=new Hi,l=new $e,r={value:null,needsUpdate:!1};this.uniform=r,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const h=f.length!==0||p||i!==0||s;return s=p,i=f.length,h},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,p){t=d(f,p,0)},this.setState=function(f,p,h){const v=f.clippingPlanes,m=f.clipIntersection,u=f.clipShadows,g=n.get(f);if(!s||v===null||v.length===0||o&&!u)o?d(null):c();else{const w=o?0:i,b=w*4;let S=g.clippingState||null;r.value=S,S=d(v,p,b,h);for(let C=0;C!==b;++C)S[C]=t[C];g.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=w}};function c(){r.value!==t&&(r.value=t,r.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,h,v){const m=f!==null?f.length:0;let u=null;if(m!==0){if(u=r.value,v!==!0||u===null){const g=h+m*4,w=p.matrixWorldInverse;l.getNormalMatrix(w),(u===null||u.length<g)&&(u=new Float32Array(g));for(let b=0,S=h;b!==m;++b,S+=4)a.copy(f[b]).applyMatrix4(w,l),a.normal.toArray(u,S),u[S+3]=a.constant}r.value=u,r.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,u}}function hg(n){let e=new WeakMap;function t(a,l){return l===_l?a.mapping=Bs:l===xl&&(a.mapping=zs),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===_l||l===xl)if(e.has(a)){const r=e.get(a).texture;return t(r,a.mapping)}else{const r=a.image;if(r&&r.height>0){const c=new Mp(r.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const l=a.target;l.removeEventListener("dispose",s);const r=e.get(l);r!==void 0&&(e.delete(l),r.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Qd extends jd{constructor(e=-1,t=1,i=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,a=i+e,l=s+t,r=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,l-=d*this.view.offsetY,r=l-d*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,r,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cs=4,yh=[.125,.215,.35,.446,.526,.582],Yi=20,Or=new Qd,_h=new ze;let Fr=null,Br=0,zr=0,Hr=!1;const Vi=(1+Math.sqrt(5))/2,_s=1/Vi,xh=[new P(-Vi,_s,0),new P(Vi,_s,0),new P(-_s,0,Vi),new P(_s,0,Vi),new P(0,Vi,-_s),new P(0,Vi,_s),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Mh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Fr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fr,Br,zr),this._renderer.xr.enabled=Hr,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:Uo,format:Nn,colorSpace:Ri,depthBuffer:!1},s=bh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(o)),this._blurMaterial=ug(o,e,t)}return s}_compileMaterial(e){const t=new Ce(this._lodPlanes[0],e);this._renderer.compile(t,Or)}_sceneToCubeUV(e,t,i,s){const l=new ln(90,1,t,i),r=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(_h),d.toneMapping=Si,d.autoClear=!1;const h=new qs({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),v=new Ce(new Ge,h);let m=!1;const u=e.background;u?u.isColor&&(h.color.copy(u),e.background=null,m=!0):(h.color.copy(_h),m=!0);for(let g=0;g<6;g++){const w=g%3;w===0?(l.up.set(0,r[g],0),l.lookAt(c[g],0,0)):w===1?(l.up.set(0,0,r[g]),l.lookAt(0,c[g],0)):(l.up.set(0,r[g],0),l.lookAt(0,0,c[g]));const b=this._cubeSize;ha(s,w*b,g>2?b:0,b,b),d.setRenderTarget(s),m&&d.render(v,l),d.render(e,l)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=u}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Bs||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new Ce(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const r=this._cubeSize;ha(t,0,0,3*r,2*r),i.setRenderTarget(t),i.render(a,Or)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=xh[(s-o-1)%xh.length];this._blur(e,o-1,o,a,l)}t.autoClear=i}_blur(e,t,i,s,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",o),this._halfBlur(a,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,a,l){const r=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ce(this._lodPlanes[s],c),p=c.uniforms,h=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*Yi-1),m=o/v,u=isFinite(o)?1+Math.floor(d*m):Yi;u>Yi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Yi}`);const g=[];let w=0;for(let _=0;_<Yi;++_){const E=_/m,k=Math.exp(-E*E/2);g.push(k),_===0?w+=k:_<u&&(w+=2*k)}for(let _=0;_<g.length;_++)g[_]=g[_]/w;p.envMap.value=e.texture,p.samples.value=u,p.weights.value=g,p.latitudinal.value=a==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:b}=this;p.dTheta.value=v,p.mipInt.value=b-i;const S=this._sizeLods[s],C=3*S*(s>b-Cs?s-b+Cs:0),x=4*(this._cubeSize-S);ha(t,C,x,3*S,2*S),r.setRenderTarget(t),r.render(f,Or)}}function dg(n){const e=[],t=[],i=[];let s=n;const o=n-Cs+1+yh.length;for(let a=0;a<o;a++){const l=Math.pow(2,s);t.push(l);let r=1/l;a>n-Cs?r=yh[a-n+Cs-1]:a===0&&(r=0),i.push(r);const c=1/(l-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],h=6,v=6,m=3,u=2,g=1,w=new Float32Array(m*v*h),b=new Float32Array(u*v*h),S=new Float32Array(g*v*h);for(let x=0;x<h;x++){const _=x%3*2/3-1,E=x>2?0:-1,k=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];w.set(k,m*v*x),b.set(p,u*v*x);const y=[x,x,x,x,x,x];S.set(y,g*v*x)}const C=new Pt;C.setAttribute("position",new yn(w,m)),C.setAttribute("uv",new yn(b,u)),C.setAttribute("faceIndex",new yn(S,g)),e.push(C),s>Cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bh(n,e,t){const i=new Zi(n,e,t);return i.texture.mapping=or,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ug(n,e,t){const i=new Float32Array(Yi),s=new P(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function wh(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Sh(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}function fg(n){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const r=l.mapping,c=r===_l||r===xl,d=r===Bs||r===zs;if(c||d){let f=e.get(l);const p=f!==void 0?f.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return t===null&&(t=new Mh(n)),f=c?t.fromEquirectangular(l,f):t.fromCubemap(l,f),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),f.texture;if(f!==void 0)return f.texture;{const h=l.image;return c&&h&&h.height>0||d&&h&&s(h)?(t===null&&(t=new Mh(n)),f=c?t.fromEquirectangular(l):t.fromCubemap(l),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),l.addEventListener("dispose",o),f.texture):null}}}return l}function s(l){let r=0;const c=6;for(let d=0;d<c;d++)l[d]!==void 0&&r++;return r===c}function o(l){const r=l.target;r.removeEventListener("dispose",o);const c=e.get(r);c!==void 0&&(e.delete(r),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function pg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ia("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function mg(n,e,t,i){const s={},o=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const m=p.morphAttributes[v];for(let u=0,g=m.length;u<g;u++)e.remove(m[u])}p.removeEventListener("dispose",a),delete s[p.id];const h=o.get(p);h&&(e.remove(h),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function r(f){const p=f.attributes;for(const v in p)e.update(p[v],n.ARRAY_BUFFER);const h=f.morphAttributes;for(const v in h){const m=h[v];for(let u=0,g=m.length;u<g;u++)e.update(m[u],n.ARRAY_BUFFER)}}function c(f){const p=[],h=f.index,v=f.attributes.position;let m=0;if(h!==null){const w=h.array;m=h.version;for(let b=0,S=w.length;b<S;b+=3){const C=w[b+0],x=w[b+1],_=w[b+2];p.push(C,x,x,_,_,C)}}else if(v!==void 0){const w=v.array;m=v.version;for(let b=0,S=w.length/3-1;b<S;b+=3){const C=b+0,x=b+1,_=b+2;p.push(C,x,x,_,_,C)}}else return;const u=new(Vd(p)?qd:Yd)(p,1);u.version=m;const g=o.get(f);g&&e.remove(g),o.set(f,u)}function d(f){const p=o.get(f);if(p){const h=f.index;h!==null&&p.version<h.version&&c(f)}else c(f);return o.get(f)}return{get:l,update:r,getWireframeAttribute:d}}function gg(n,e,t){let i;function s(p){i=p}let o,a;function l(p){o=p.type,a=p.bytesPerElement}function r(p,h){n.drawElements(i,h,o,p*a),t.update(h,i,1)}function c(p,h,v){v!==0&&(n.drawElementsInstanced(i,h,o,p*a,v),t.update(h,i,v))}function d(p,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,o,p,0,v);let u=0;for(let g=0;g<v;g++)u+=h[g];t.update(u,i,1)}function f(p,h,v,m){if(v===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<p.length;g++)c(p[g]/a,h[g],m[g]);else{u.multiDrawElementsInstancedWEBGL(i,h,0,o,p,0,m,0,v);let g=0;for(let w=0;w<v;w++)g+=h[w];for(let w=0;w<m.length;w++)t.update(g,i,m[w])}}this.setMode=s,this.setIndex=l,this.render=r,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function vg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(o/3);break;case n.LINES:t.lines+=l*(o/2);break;case n.LINE_STRIP:t.lines+=l*(o-1);break;case n.LINE_LOOP:t.lines+=l*o;break;case n.POINTS:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function yg(n,e,t){const i=new WeakMap,s=new pt;function o(a,l,r){const c=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=d!==void 0?d.length:0;let p=i.get(l);if(p===void 0||p.count!==f){let y=function(){E.dispose(),i.delete(l),l.removeEventListener("dispose",y)};var h=y;p!==void 0&&p.texture.dispose();const v=l.morphAttributes.position!==void 0,m=l.morphAttributes.normal!==void 0,u=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],w=l.morphAttributes.normal||[],b=l.morphAttributes.color||[];let S=0;v===!0&&(S=1),m===!0&&(S=2),u===!0&&(S=3);let C=l.attributes.position.count*S,x=1;C>e.maxTextureSize&&(x=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const _=new Float32Array(C*x*4*f),E=new $d(_,C,x,f);E.type=Wn,E.needsUpdate=!0;const k=S*4;for(let M=0;M<f;M++){const R=g[M],N=w[M],U=b[M],L=C*x*4*M;for(let D=0;D<R.count;D++){const F=D*k;v===!0&&(s.fromBufferAttribute(R,D),_[L+F+0]=s.x,_[L+F+1]=s.y,_[L+F+2]=s.z,_[L+F+3]=0),m===!0&&(s.fromBufferAttribute(N,D),_[L+F+4]=s.x,_[L+F+5]=s.y,_[L+F+6]=s.z,_[L+F+7]=0),u===!0&&(s.fromBufferAttribute(U,D),_[L+F+8]=s.x,_[L+F+9]=s.y,_[L+F+10]=s.z,_[L+F+11]=U.itemSize===4?s.w:1)}}p={count:f,texture:E,size:new ue(C,x)},i.set(l,p),l.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)r.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let u=0;u<c.length;u++)v+=c[u];const m=l.morphTargetsRelative?1:1-v;r.getUniforms().setValue(n,"morphTargetBaseInfluence",m),r.getUniforms().setValue(n,"morphTargetInfluences",c)}r.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),r.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:o}}function _g(n,e,t,i){let s=new WeakMap;function o(r){const c=i.render.frame,d=r.geometry,f=e.get(r,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),r.isInstancedMesh&&(r.hasEventListener("dispose",l)===!1&&r.addEventListener("dispose",l),s.get(r)!==c&&(t.update(r.instanceMatrix,n.ARRAY_BUFFER),r.instanceColor!==null&&t.update(r.instanceColor,n.ARRAY_BUFFER),s.set(r,c))),r.isSkinnedMesh){const p=r.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function a(){s=new WeakMap}function l(r){const c=r.target;c.removeEventListener("dispose",l),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}class eu extends qt{constructor(e,t,i,s,o,a,l,r,c,d=Ds){if(d!==Ds&&d!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ds&&(i=Ji),i===void 0&&d===Vs&&(i=Hs),super(null,s,o,a,l,r,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Qt,this.minFilter=r!==void 0?r:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const tu=new qt,Eh=new eu(1,1),nu=new $d,iu=new op,su=new Jd,Th=[],Ah=[],Ch=new Float32Array(16),Rh=new Float32Array(9),Ph=new Float32Array(4);function Ks(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let o=Th[s];if(o===void 0&&(o=new Float32Array(s),Th[s]=o),e!==0){i.toArray(o,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(o,l)}return o}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function lr(n,e){let t=Ah[e];t===void 0&&(t=new Int32Array(e),Ah[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function Sg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;Ph.set(i),n.uniformMatrix2fv(this.addr,!1,Ph),Ut(t,i)}}function Eg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;Rh.set(i),n.uniformMatrix3fv(this.addr,!1,Rh),Ut(t,i)}}function Tg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;Ch.set(i),n.uniformMatrix4fv(this.addr,!1,Ch),Ut(t,i)}}function Ag(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Lg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Ng(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Eh.compareFunction=Hd,o=Eh):o=tu,t.setTexture2D(e||o,s)}function Ug(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||iu,s)}function Og(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||su,s)}function Fg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||nu,s)}function Bg(n){switch(n){case 5126:return xg;case 35664:return Mg;case 35665:return bg;case 35666:return wg;case 35674:return Sg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Cg;case 35668:case 35672:return Rg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Ig;case 36295:return kg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Fg}}function zg(n,e){n.uniform1fv(this.addr,e)}function Hg(n,e){const t=Ks(e,this.size,2);n.uniform2fv(this.addr,t)}function Vg(n,e){const t=Ks(e,this.size,3);n.uniform3fv(this.addr,t)}function Wg(n,e){const t=Ks(e,this.size,4);n.uniform4fv(this.addr,t)}function $g(n,e){const t=Ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Gg(n,e){const t=Ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Xg(n,e){const t=Ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Yg(n,e){n.uniform1iv(this.addr,e)}function qg(n,e){n.uniform2iv(this.addr,e)}function Kg(n,e){n.uniform3iv(this.addr,e)}function jg(n,e){n.uniform4iv(this.addr,e)}function Jg(n,e){n.uniform1uiv(this.addr,e)}function Zg(n,e){n.uniform2uiv(this.addr,e)}function Qg(n,e){n.uniform3uiv(this.addr,e)}function ev(n,e){n.uniform4uiv(this.addr,e)}function tv(n,e,t){const i=this.cache,s=e.length,o=lr(t,s);Nt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||tu,o[a])}function nv(n,e,t){const i=this.cache,s=e.length,o=lr(t,s);Nt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||iu,o[a])}function iv(n,e,t){const i=this.cache,s=e.length,o=lr(t,s);Nt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||su,o[a])}function sv(n,e,t){const i=this.cache,s=e.length,o=lr(t,s);Nt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||nu,o[a])}function ov(n){switch(n){case 5126:return zg;case 35664:return Hg;case 35665:return Vg;case 35666:return Wg;case 35674:return $g;case 35675:return Gg;case 35676:return Xg;case 5124:case 35670:return Yg;case 35667:case 35671:return qg;case 35668:case 35672:return Kg;case 35669:case 35673:return jg;case 5125:return Jg;case 36294:return Zg;case 36295:return Qg;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return sv}}class av{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Bg(t.type)}}class rv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ov(t.type)}}class lv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const l=s[o];l.setValue(e,t[l.id],i)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function Lh(n,e){n.seq.push(e),n.map[e.id]=e}function cv(n,e,t){const i=n.name,s=i.length;for(Vr.lastIndex=0;;){const o=Vr.exec(i),a=Vr.lastIndex;let l=o[1];const r=o[2]==="]",c=o[3];if(r&&(l=l|0),c===void 0||c==="["&&a+2===s){Lh(t,c===void 0?new av(l,n,e):new rv(l,n,e));break}else{let f=t.map[l];f===void 0&&(f=new lv(l),Lh(t,f)),t=f}}}class ka{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);cv(o,a,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,a=t.length;o!==a;++o){const l=t[o],r=i[l.id];r.needsUpdate!==!1&&l.setValue(e,r.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Ih(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const hv=37297;let dv=0;function uv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=s;a<o;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}function fv(n){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(n);let i;switch(e===t?i="":e===Va&&t===Ha?i="LinearDisplayP3ToLinearSRGB":e===Ha&&t===Va&&(i="LinearSRGBToLinearDisplayP3"),n){case Ri:case rr:return[i,"LinearTransferOETF"];case Yt:case yc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function kh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+uv(n.getShaderSource(e),a)}else return s}function pv(n,e){const t=fv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mv(n,e){let t;switch(e){case gf:t="Linear";break;case vf:t="Reinhard";break;case yf:t="Cineon";break;case _f:t="ACESFilmic";break;case Mf:t="AgX";break;case bf:t="Neutral";break;case xf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const da=new P;function gv(){at.getLuminanceCoefficients(da);const n=da.x.toFixed(4),e=da.y.toFixed(4),t=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function yv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _v(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(e,s),a=o.name;let l=1;o.type===n.FLOAT_MAT2&&(l=2),o.type===n.FLOAT_MAT3&&(l=3),o.type===n.FLOAT_MAT4&&(l=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function _o(n){return n!==""}function Dh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(n){return n.replace(xv,bv)}const Mv=new Map;function bv(n,e){let t=We[e];if(t===void 0){const i=Mv.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kl(t)}const wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(n){return n.replace(wv,Sv)}function Sv(n,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Oh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Ev(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Tv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Av(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function Cv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rd:e="ENVMAP_BLENDING_MULTIPLY";break;case pf:e="ENVMAP_BLENDING_MIX";break;case mf:e="ENVMAP_BLENDING_ADD";break}return e}function Rv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Pv(n,e,t,i){const s=n.getContext(),o=t.defines;let a=t.vertexShader,l=t.fragmentShader;const r=Ev(t),c=Tv(t),d=Av(t),f=Cv(t),p=Rv(t),h=vv(t),v=yv(o),m=s.createProgram();let u,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(_o).join(`
`),u.length>0&&(u+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(_o).join(`
`),g.length>0&&(g+=`
`)):(u=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+r:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),g=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+r:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?We.tonemapping_pars_fragment:"",t.toneMapping!==Si?mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,pv("linearToOutputTexel",t.outputColorSpace),gv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_o).join(`
`)),a=Kl(a),a=Dh(a,t),a=Nh(a,t),l=Kl(l),l=Dh(l,t),l=Nh(l,t),a=Uh(a),l=Uh(l),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,u=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=w+u+a,S=w+g+l,C=Ih(s,s.VERTEX_SHADER,b),x=Ih(s,s.FRAGMENT_SHADER,S);s.attachShader(m,C),s.attachShader(m,x),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function _(M){if(n.debug.checkShaderErrors){const R=s.getProgramInfoLog(m).trim(),N=s.getShaderInfoLog(C).trim(),U=s.getShaderInfoLog(x).trim();let L=!0,D=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,C,x);else{const F=kh(s,C,"vertex"),H=kh(s,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+R+`
`+F+`
`+H)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(N===""||U==="")&&(D=!1);D&&(M.diagnostics={runnable:L,programLog:R,vertexShader:{log:N,prefix:u},fragmentShader:{log:U,prefix:g}})}s.deleteShader(C),s.deleteShader(x),E=new ka(s,m),k=_v(s,m)}let E;this.getUniforms=function(){return E===void 0&&_(this),E};let k;this.getAttributes=function(){return k===void 0&&_(this),k};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(m,hv)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=x,this}let Lv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kv(e),t.set(e,i)),i}}class kv{constructor(e){this.id=Lv++,this.code=e,this.usedTimes=0}}function Dv(n,e,t,i,s,o,a){const l=new Gd,r=new Iv,c=new Set,d=[],f=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,h=s.vertexTextures;let v=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,M,R,N,U){const L=N.fog,D=U.geometry,F=y.isMeshStandardMaterial?N.environment:null,H=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),q=H&&H.mapping===or?H.image.height:null,ie=m[y.type];y.precision!==null&&(v=s.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const se=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Se=se!==void 0?se.length:0;let Le=0;D.morphAttributes.position!==void 0&&(Le=1),D.morphAttributes.normal!==void 0&&(Le=2),D.morphAttributes.color!==void 0&&(Le=3);let K,ee,ye,he;if(ie){const sn=zn[ie];K=sn.vertexShader,ee=sn.fragmentShader}else K=y.vertexShader,ee=y.fragmentShader,r.update(y),ye=r.getVertexShaderID(y),he=r.getFragmentShaderID(y);const He=n.getRenderTarget(),ke=U.isInstancedMesh===!0,je=U.isBatchedMesh===!0,ut=!!y.map,Je=!!y.matcap,O=!!H,un=!!y.aoMap,Ye=!!y.lightMap,et=!!y.bumpMap,Ne=!!y.normalMap,_t=!!y.displacementMap,Be=!!y.emissiveMap,I=!!y.metalnessMap,T=!!y.roughnessMap,W=y.anisotropy>0,Q=y.clearcoat>0,oe=y.dispersion>0,Z=y.iridescence>0,Ee=y.sheen>0,de=y.transmission>0,_e=W&&!!y.anisotropyMap,tt=Q&&!!y.clearcoatMap,ae=Q&&!!y.clearcoatNormalMap,xe=Q&&!!y.clearcoatRoughnessMap,Ue=Z&&!!y.iridescenceMap,Oe=Z&&!!y.iridescenceThicknessMap,Me=Ee&&!!y.sheenColorMap,qe=Ee&&!!y.sheenRoughnessMap,Ve=!!y.specularMap,gt=!!y.specularColorMap,B=!!y.specularIntensityMap,ge=de&&!!y.transmissionMap,j=de&&!!y.thicknessMap,te=!!y.gradientMap,fe=!!y.alphaMap,ve=y.alphaTest>0,Ze=!!y.alphaHash,Lt=!!y.extensions;let nn=Si;y.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(nn=n.toneMapping);const it={shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:K,fragmentShader:ee,defines:y.defines,customVertexShaderID:ye,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:je,batchingColor:je&&U._colorsTexture!==null,instancing:ke,instancingColor:ke&&U.instanceColor!==null,instancingMorph:ke&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:He===null?n.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:Ri,alphaToCoverage:!!y.alphaToCoverage,map:ut,matcap:Je,envMap:O,envMapMode:O&&H.mapping,envMapCubeUVHeight:q,aoMap:un,lightMap:Ye,bumpMap:et,normalMap:Ne,displacementMap:h&&_t,emissiveMap:Be,normalMapObjectSpace:Ne&&y.normalMapType===Tf,normalMapTangentSpace:Ne&&y.normalMapType===zd,metalnessMap:I,roughnessMap:T,anisotropy:W,anisotropyMap:_e,clearcoat:Q,clearcoatMap:tt,clearcoatNormalMap:ae,clearcoatRoughnessMap:xe,dispersion:oe,iridescence:Z,iridescenceMap:Ue,iridescenceThicknessMap:Oe,sheen:Ee,sheenColorMap:Me,sheenRoughnessMap:qe,specularMap:Ve,specularColorMap:gt,specularIntensityMap:B,transmission:de,transmissionMap:ge,thicknessMap:j,gradientMap:te,opaque:y.transparent===!1&&y.blending===ks&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:ve,alphaHash:Ze,combine:y.combine,mapUv:ut&&u(y.map.channel),aoMapUv:un&&u(y.aoMap.channel),lightMapUv:Ye&&u(y.lightMap.channel),bumpMapUv:et&&u(y.bumpMap.channel),normalMapUv:Ne&&u(y.normalMap.channel),displacementMapUv:_t&&u(y.displacementMap.channel),emissiveMapUv:Be&&u(y.emissiveMap.channel),metalnessMapUv:I&&u(y.metalnessMap.channel),roughnessMapUv:T&&u(y.roughnessMap.channel),anisotropyMapUv:_e&&u(y.anisotropyMap.channel),clearcoatMapUv:tt&&u(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&u(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&u(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&u(y.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&u(y.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&u(y.sheenColorMap.channel),sheenRoughnessMapUv:qe&&u(y.sheenRoughnessMap.channel),specularMapUv:Ve&&u(y.specularMap.channel),specularColorMapUv:gt&&u(y.specularColorMap.channel),specularIntensityMapUv:B&&u(y.specularIntensityMap.channel),transmissionMapUv:ge&&u(y.transmissionMap.channel),thicknessMapUv:j&&u(y.thicknessMap.channel),alphaMapUv:fe&&u(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ne||W),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(ut||fe),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:U.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Le,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:nn,decodeVideoTexture:ut&&y.map.isVideoTexture===!0&&at.getTransfer(y.map.colorSpace)===Mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vn,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Lt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&y.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function w(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(b(M,y),S(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){l.disableAll(),M.supportsVertexTextures&&l.enable(0),M.instancing&&l.enable(1),M.instancingColor&&l.enable(2),M.instancingMorph&&l.enable(3),M.matcap&&l.enable(4),M.envMap&&l.enable(5),M.normalMapObjectSpace&&l.enable(6),M.normalMapTangentSpace&&l.enable(7),M.clearcoat&&l.enable(8),M.iridescence&&l.enable(9),M.alphaTest&&l.enable(10),M.vertexColors&&l.enable(11),M.vertexAlphas&&l.enable(12),M.vertexUv1s&&l.enable(13),M.vertexUv2s&&l.enable(14),M.vertexUv3s&&l.enable(15),M.vertexTangents&&l.enable(16),M.anisotropy&&l.enable(17),M.alphaHash&&l.enable(18),M.batching&&l.enable(19),M.dispersion&&l.enable(20),M.batchingColor&&l.enable(21),y.push(l.mask),l.disableAll(),M.fog&&l.enable(0),M.useFog&&l.enable(1),M.flatShading&&l.enable(2),M.logarithmicDepthBuffer&&l.enable(3),M.reverseDepthBuffer&&l.enable(4),M.skinning&&l.enable(5),M.morphTargets&&l.enable(6),M.morphNormals&&l.enable(7),M.morphColors&&l.enable(8),M.premultipliedAlpha&&l.enable(9),M.shadowMapEnabled&&l.enable(10),M.doubleSided&&l.enable(11),M.flipSided&&l.enable(12),M.useDepthPacking&&l.enable(13),M.dithering&&l.enable(14),M.transmission&&l.enable(15),M.sheen&&l.enable(16),M.opaque&&l.enable(17),M.pointsUvs&&l.enable(18),M.decodeVideoTexture&&l.enable(19),M.alphaToCoverage&&l.enable(20),y.push(l.mask)}function C(y){const M=m[y.type];let R;if(M){const N=zn[M];R=vp.clone(N.uniforms)}else R=y.uniforms;return R}function x(y,M){let R;for(let N=0,U=d.length;N<U;N++){const L=d[N];if(L.cacheKey===M){R=L,++R.usedTimes;break}}return R===void 0&&(R=new Pv(n,M,y,o),d.push(R)),R}function _(y){if(--y.usedTimes===0){const M=d.indexOf(y);d[M]=d[d.length-1],d.pop(),y.destroy()}}function E(y){r.remove(y)}function k(){r.dispose()}return{getParameters:g,getProgramCacheKey:w,getUniforms:C,acquireProgram:x,releaseProgram:_,releaseShaderCache:E,programs:d,dispose:k}}function Nv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,r){n.get(a)[l]=r}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function Uv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bh(){const n=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function a(f,p,h,v,m,u){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:p,material:h,groupOrder:v,renderOrder:f.renderOrder,z:m,group:u},n[e]=g):(g.id=f.id,g.object=f,g.geometry=p,g.material=h,g.groupOrder=v,g.renderOrder=f.renderOrder,g.z=m,g.group=u),e++,g}function l(f,p,h,v,m,u){const g=a(f,p,h,v,m,u);h.transmission>0?i.push(g):h.transparent===!0?s.push(g):t.push(g)}function r(f,p,h,v,m,u){const g=a(f,p,h,v,m,u);h.transmission>0?i.unshift(g):h.transparent===!0?s.unshift(g):t.unshift(g)}function c(f,p){t.length>1&&t.sort(f||Uv),i.length>1&&i.sort(p||Fh),s.length>1&&s.sort(p||Fh)}function d(){for(let f=e,p=n.length;f<p;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:l,unshift:r,finish:d,sort:c}}function Ov(){let n=new WeakMap;function e(i,s){const o=n.get(i);let a;return o===void 0?(a=new Bh,n.set(i,[a])):s>=o.length?(a=new Bh,o.push(a)):a=o[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Fv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ze};break;case"SpotLight":t={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Bv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zv=0;function Hv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vv(n){const e=new Fv,t=Bv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const s=new P,o=new rt,a=new rt;function l(c){let d=0,f=0,p=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let h=0,v=0,m=0,u=0,g=0,w=0,b=0,S=0,C=0,x=0,_=0;c.sort(Hv);for(let k=0,y=c.length;k<y;k++){const M=c[k],R=M.color,N=M.intensity,U=M.distance,L=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)d+=R.r*N,f+=R.g*N,p+=R.b*N;else if(M.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(M.sh.coefficients[D],N);_++}else if(M.isDirectionalLight){const D=e.get(M);if(D.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const F=M.shadow,H=t.get(M);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=L,i.directionalShadowMatrix[h]=M.shadow.matrix,w++}i.directional[h]=D,h++}else if(M.isSpotLight){const D=e.get(M);D.position.setFromMatrixPosition(M.matrixWorld),D.color.copy(R).multiplyScalar(N),D.distance=U,D.coneCos=Math.cos(M.angle),D.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),D.decay=M.decay,i.spot[m]=D;const F=M.shadow;if(M.map&&(i.spotLightMap[C]=M.map,C++,F.updateMatrices(M),M.castShadow&&x++),i.spotLightMatrix[m]=F.matrix,M.castShadow){const H=t.get(M);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,i.spotShadow[m]=H,i.spotShadowMap[m]=L,S++}m++}else if(M.isRectAreaLight){const D=e.get(M);D.color.copy(R).multiplyScalar(N),D.halfWidth.set(M.width*.5,0,0),D.halfHeight.set(0,M.height*.5,0),i.rectArea[u]=D,u++}else if(M.isPointLight){const D=e.get(M);if(D.color.copy(M.color).multiplyScalar(M.intensity),D.distance=M.distance,D.decay=M.decay,M.castShadow){const F=M.shadow,H=t.get(M);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,H.shadowCameraNear=F.camera.near,H.shadowCameraFar=F.camera.far,i.pointShadow[v]=H,i.pointShadowMap[v]=L,i.pointShadowMatrix[v]=M.shadow.matrix,b++}i.point[v]=D,v++}else if(M.isHemisphereLight){const D=e.get(M);D.skyColor.copy(M.color).multiplyScalar(N),D.groundColor.copy(M.groundColor).multiplyScalar(N),i.hemi[g]=D,g++}}u>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const E=i.hash;(E.directionalLength!==h||E.pointLength!==v||E.spotLength!==m||E.rectAreaLength!==u||E.hemiLength!==g||E.numDirectionalShadows!==w||E.numPointShadows!==b||E.numSpotShadows!==S||E.numSpotMaps!==C||E.numLightProbes!==_)&&(i.directional.length=h,i.spot.length=m,i.rectArea.length=u,i.point.length=v,i.hemi.length=g,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=_,E.directionalLength=h,E.pointLength=v,E.spotLength=m,E.rectAreaLength=u,E.hemiLength=g,E.numDirectionalShadows=w,E.numPointShadows=b,E.numSpotShadows=S,E.numSpotMaps=C,E.numLightProbes=_,i.version=zv++)}function r(c,d){let f=0,p=0,h=0,v=0,m=0;const u=d.matrixWorldInverse;for(let g=0,w=c.length;g<w;g++){const b=c[g];if(b.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(u),f++}else if(b.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(u),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(u),h++}else if(b.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(u),a.identity(),o.copy(b.matrixWorld),o.premultiply(u),a.extractRotation(o),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(u),p++}else if(b.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(u),m++}}}return{setup:l,setupView:r,state:i}}function zh(n){const e=new Vv(n),t=[],i=[];function s(d){c.camera=d,t.length=0,i.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function l(){e.setup(t)}function r(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:l,setupLightsView:r,pushLight:o,pushShadow:a}}function Wv(n){let e=new WeakMap;function t(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new zh(n),e.set(s,[l])):o>=a.length?(l=new zh(n),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:t,dispose:i}}class $v extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gv extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
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
}`;function qv(n,e,t){let i=new Mc;const s=new ue,o=new ue,a=new pt,l=new $v({depthPacking:Ef}),r=new Gv,c={},d=t.maxTextureSize,f={[li]:en,[en]:li,[Vn]:Vn},p=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Xv,fragmentShader:Yv}),h=p.clone();h.defines.HORIZONTAL_PASS=1;const v=new Pt;v.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ce(v,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let g=this.type;this.render=function(x,_,E){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||x.length===0)return;const k=n.getRenderTarget(),y=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),R=n.state;R.setBlending(wi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const N=g!==ti&&this.type===ti,U=g===ti&&this.type!==ti;for(let L=0,D=x.length;L<D;L++){const F=x[L],H=F.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const q=H.getFrameExtents();if(s.multiply(q),o.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(o.x=Math.floor(d/q.x),s.x=o.x*q.x,H.mapSize.x=o.x),s.y>d&&(o.y=Math.floor(d/q.y),s.y=o.y*q.y,H.mapSize.y=o.y)),H.map===null||N===!0||U===!0){const se=this.type!==ti?{minFilter:Qt,magFilter:Qt}:{};H.map!==null&&H.map.dispose(),H.map=new Zi(s.x,s.y,se),H.map.texture.name=F.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ie=H.getViewportCount();for(let se=0;se<ie;se++){const Se=H.getViewport(se);a.set(o.x*Se.x,o.y*Se.y,o.x*Se.z,o.y*Se.w),R.viewport(a),H.updateMatrices(F,se),i=H.getFrustum(),S(_,E,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===ti&&w(H,E),H.needsUpdate=!1}g=this.type,u.needsUpdate=!1,n.setRenderTarget(k,y,M)};function w(x,_){const E=e.update(m);p.defines.VSM_SAMPLES!==x.blurSamples&&(p.defines.VSM_SAMPLES=x.blurSamples,h.defines.VSM_SAMPLES=x.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Zi(s.x,s.y)),p.uniforms.shadow_pass.value=x.map.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(_,null,E,p,m,null),h.uniforms.shadow_pass.value=x.mapPass.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(_,null,E,h,m,null)}function b(x,_,E,k){let y=null;const M=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(M!==void 0)y=M;else if(y=E.isPointLight===!0?r:l,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){const R=y.uuid,N=_.uuid;let U=c[R];U===void 0&&(U={},c[R]=U);let L=U[N];L===void 0&&(L=y.clone(),U[N]=L,_.addEventListener("dispose",C)),y=L}if(y.visible=_.visible,y.wireframe=_.wireframe,k===ti?y.side=_.shadowSide!==null?_.shadowSide:_.side:y.side=_.shadowSide!==null?_.shadowSide:f[_.side],y.alphaMap=_.alphaMap,y.alphaTest=_.alphaTest,y.map=_.map,y.clipShadows=_.clipShadows,y.clippingPlanes=_.clippingPlanes,y.clipIntersection=_.clipIntersection,y.displacementMap=_.displacementMap,y.displacementScale=_.displacementScale,y.displacementBias=_.displacementBias,y.wireframeLinewidth=_.wireframeLinewidth,y.linewidth=_.linewidth,E.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const R=n.properties.get(y);R.light=E}return y}function S(x,_,E,k,y){if(x.visible===!1)return;if(x.layers.test(_.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&y===ti)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const N=e.update(x),U=x.material;if(Array.isArray(U)){const L=N.groups;for(let D=0,F=L.length;D<F;D++){const H=L[D],q=U[H.materialIndex];if(q&&q.visible){const ie=b(x,q,k,y);x.onBeforeShadow(n,x,_,E,N,ie,H),n.renderBufferDirect(E,null,N,ie,x,H),x.onAfterShadow(n,x,_,E,N,ie,H)}}}else if(U.visible){const L=b(x,U,k,y);x.onBeforeShadow(n,x,_,E,N,L,null),n.renderBufferDirect(E,null,N,L,x,null),x.onAfterShadow(n,x,_,E,N,L,null)}}const R=x.children;for(let N=0,U=R.length;N<U;N++)S(R[N],_,E,k,y)}function C(x){x.target.removeEventListener("dispose",C);for(const E in c){const k=c[E],y=x.target.uuid;y in k&&(k[y].dispose(),delete k[y])}}}const Kv={[ul]:fl,[pl]:vl,[ml]:yl,[Fs]:gl,[fl]:ul,[vl]:pl,[yl]:ml,[gl]:Fs};function jv(n){function e(){let B=!1;const ge=new pt;let j=null;const te=new pt(0,0,0,0);return{setMask:function(fe){j!==fe&&!B&&(n.colorMask(fe,fe,fe,fe),j=fe)},setLocked:function(fe){B=fe},setClear:function(fe,ve,Ze,Lt,nn){nn===!0&&(fe*=Lt,ve*=Lt,Ze*=Lt),ge.set(fe,ve,Ze,Lt),te.equals(ge)===!1&&(n.clearColor(fe,ve,Ze,Lt),te.copy(ge))},reset:function(){B=!1,j=null,te.set(-1,0,0,0)}}}function t(){let B=!1,ge=!1,j=null,te=null,fe=null;return{setReversed:function(ve){ge=ve},setTest:function(ve){ve?ye(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(ve){j!==ve&&!B&&(n.depthMask(ve),j=ve)},setFunc:function(ve){if(ge&&(ve=Kv[ve]),te!==ve){switch(ve){case ul:n.depthFunc(n.NEVER);break;case fl:n.depthFunc(n.ALWAYS);break;case pl:n.depthFunc(n.LESS);break;case Fs:n.depthFunc(n.LEQUAL);break;case ml:n.depthFunc(n.EQUAL);break;case gl:n.depthFunc(n.GEQUAL);break;case vl:n.depthFunc(n.GREATER);break;case yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=ve}},setLocked:function(ve){B=ve},setClear:function(ve){fe!==ve&&(n.clearDepth(ve),fe=ve)},reset:function(){B=!1,j=null,te=null,fe=null}}}function i(){let B=!1,ge=null,j=null,te=null,fe=null,ve=null,Ze=null,Lt=null,nn=null;return{setTest:function(it){B||(it?ye(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(it){ge!==it&&!B&&(n.stencilMask(it),ge=it)},setFunc:function(it,sn,Xn){(j!==it||te!==sn||fe!==Xn)&&(n.stencilFunc(it,sn,Xn),j=it,te=sn,fe=Xn)},setOp:function(it,sn,Xn){(ve!==it||Ze!==sn||Lt!==Xn)&&(n.stencilOp(it,sn,Xn),ve=it,Ze=sn,Lt=Xn)},setLocked:function(it){B=it},setClear:function(it){nn!==it&&(n.clearStencil(it),nn=it)},reset:function(){B=!1,ge=null,j=null,te=null,fe=null,ve=null,Ze=null,Lt=null,nn=null}}}const s=new e,o=new t,a=new i,l=new WeakMap,r=new WeakMap;let c={},d={},f=new WeakMap,p=[],h=null,v=!1,m=null,u=null,g=null,w=null,b=null,S=null,C=null,x=new ze(0,0,0),_=0,E=!1,k=null,y=null,M=null,R=null,N=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,D=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(F)[1]),L=D>=1):F.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),L=D>=2);let H=null,q={};const ie=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),Se=new pt().fromArray(ie),Le=new pt().fromArray(se);function K(B,ge,j,te){const fe=new Uint8Array(4),ve=n.createTexture();n.bindTexture(B,ve),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<j;Ze++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(ge+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return ve}const ee={};ee[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(n.DEPTH_TEST),o.setFunc(Fs),Ye(!1),et(qc),ye(n.CULL_FACE),O(wi);function ye(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function he(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function He(B,ge){return d[B]!==ge?(n.bindFramebuffer(B,ge),d[B]=ge,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ge),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function ke(B,ge){let j=p,te=!1;if(B){j=f.get(ge),j===void 0&&(j=[],f.set(ge,j));const fe=B.textures;if(j.length!==fe.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Ze=fe.length;ve<Ze;ve++)j[ve]=n.COLOR_ATTACHMENT0+ve;j.length=fe.length,te=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,te=!0);te&&n.drawBuffers(j)}function je(B){return h!==B?(n.useProgram(B),h=B,!0):!1}const ut={[Xi]:n.FUNC_ADD,[ju]:n.FUNC_SUBTRACT,[Ju]:n.FUNC_REVERSE_SUBTRACT};ut[Zu]=n.MIN,ut[Qu]=n.MAX;const Je={[ef]:n.ZERO,[tf]:n.ONE,[nf]:n.SRC_COLOR,[hl]:n.SRC_ALPHA,[cf]:n.SRC_ALPHA_SATURATE,[rf]:n.DST_COLOR,[of]:n.DST_ALPHA,[sf]:n.ONE_MINUS_SRC_COLOR,[dl]:n.ONE_MINUS_SRC_ALPHA,[lf]:n.ONE_MINUS_DST_COLOR,[af]:n.ONE_MINUS_DST_ALPHA,[hf]:n.CONSTANT_COLOR,[df]:n.ONE_MINUS_CONSTANT_COLOR,[uf]:n.CONSTANT_ALPHA,[ff]:n.ONE_MINUS_CONSTANT_ALPHA};function O(B,ge,j,te,fe,ve,Ze,Lt,nn,it){if(B===wi){v===!0&&(he(n.BLEND),v=!1);return}if(v===!1&&(ye(n.BLEND),v=!0),B!==Ku){if(B!==m||it!==E){if((u!==Xi||b!==Xi)&&(n.blendEquation(n.FUNC_ADD),u=Xi,b=Xi),it)switch(B){case ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.ONE,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}g=null,w=null,S=null,C=null,x.set(0,0,0),_=0,m=B,E=it}return}fe=fe||ge,ve=ve||j,Ze=Ze||te,(ge!==u||fe!==b)&&(n.blendEquationSeparate(ut[ge],ut[fe]),u=ge,b=fe),(j!==g||te!==w||ve!==S||Ze!==C)&&(n.blendFuncSeparate(Je[j],Je[te],Je[ve],Je[Ze]),g=j,w=te,S=ve,C=Ze),(Lt.equals(x)===!1||nn!==_)&&(n.blendColor(Lt.r,Lt.g,Lt.b,nn),x.copy(Lt),_=nn),m=B,E=!1}function un(B,ge){B.side===Vn?he(n.CULL_FACE):ye(n.CULL_FACE);let j=B.side===en;ge&&(j=!j),Ye(j),B.blending===ks&&B.transparent===!1?O(wi):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const te=B.stencilWrite;a.setTest(te),te&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),_t(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(B){k!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),k=B)}function et(B){B!==Xu?(ye(n.CULL_FACE),B!==y&&(B===qc?n.cullFace(n.BACK):B===Yu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),y=B}function Ne(B){B!==M&&(L&&n.lineWidth(B),M=B)}function _t(B,ge,j){B?(ye(n.POLYGON_OFFSET_FILL),(R!==ge||N!==j)&&(n.polygonOffset(ge,j),R=ge,N=j)):he(n.POLYGON_OFFSET_FILL)}function Be(B){B?ye(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function I(B){B===void 0&&(B=n.TEXTURE0+U-1),H!==B&&(n.activeTexture(B),H=B)}function T(B,ge,j){j===void 0&&(H===null?j=n.TEXTURE0+U-1:j=H);let te=q[j];te===void 0&&(te={type:void 0,texture:void 0},q[j]=te),(te.type!==B||te.texture!==ge)&&(H!==j&&(n.activeTexture(j),H=j),n.bindTexture(B,ge||ee[B]),te.type=B,te.texture=ge)}function W(){const B=q[H];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(B){Se.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Se.copy(B))}function Me(B){Le.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Le.copy(B))}function qe(B,ge){let j=r.get(ge);j===void 0&&(j=new WeakMap,r.set(ge,j));let te=j.get(B);te===void 0&&(te=n.getUniformBlockIndex(ge,B.name),j.set(B,te))}function Ve(B,ge){const te=r.get(ge).get(B);l.get(ge)!==te&&(n.uniformBlockBinding(ge,te,B.__bindingPointIndex),l.set(ge,te))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},H=null,q={},d={},f=new WeakMap,p=[],h=null,v=!1,m=null,u=null,g=null,w=null,b=null,S=null,C=null,x=new ze(0,0,0),_=0,E=!1,k=null,y=null,M=null,R=null,N=null,Se.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ye,disable:he,bindFramebuffer:He,drawBuffers:ke,useProgram:je,setBlending:O,setMaterial:un,setFlipSided:Ye,setCullFace:et,setLineWidth:Ne,setPolygonOffset:_t,setScissorTest:Be,activeTexture:I,bindTexture:T,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:oe,texImage2D:xe,texImage3D:Ue,updateUBOMapping:qe,uniformBlockBinding:Ve,texStorage2D:tt,texStorage3D:ae,texSubImage2D:Z,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:Oe,viewport:Me,reset:gt}}function Hh(n,e,t,i){const s=Jv(i);switch(t){case Dd:return n*e;case Ud:return n*e;case Od:return n*e*2;case ar:return n*e/s.components*s.byteLength;case mc:return n*e/s.components*s.byteLength;case Fd:return n*e*2/s.components*s.byteLength;case gc:return n*e*2/s.components*s.byteLength;case Nd:return n*e*3/s.components*s.byteLength;case Nn:return n*e*4/s.components*s.byteLength;case vc:return n*e*4/s.components*s.byteLength;case Aa:case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ra:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wl:case El:return Math.max(n,16)*Math.max(e,8)/4;case bl:case Sl:return Math.max(n,8)*Math.max(e,8)/2;case Tl:case Al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case La:case Wl:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Bd:case Gl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xl:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jv(n){switch(n){case ci:case Ld:return{byteLength:1,components:1};case Lo:case Id:case Uo:return{byteLength:2,components:1};case fc:case pc:return{byteLength:2,components:4};case Ji:case uc:case Wn:return{byteLength:4,components:1};case kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Zv(n,e,t,i,s,o,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,r=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,d=new WeakMap;let f;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,T){return h?new OffscreenCanvas(I,T):$a("canvas")}function m(I,T,W){let Q=1;const oe=Be(I);if((oe.width>W||oe.height>W)&&(Q=W/Math.max(oe.width,oe.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){const Z=Math.floor(Q*oe.width),Ee=Math.floor(Q*oe.height);f===void 0&&(f=v(Z,Ee));const de=T?v(Z,Ee):f;return de.width=Z,de.height=Ee,de.getContext("2d").drawImage(I,0,0,Z,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Z+"x"+Ee+")."),de}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),I;return I}function u(I){return I.generateMipmaps&&I.minFilter!==Qt&&I.minFilter!==In}function g(I){n.generateMipmap(I)}function w(I,T,W,Q,oe=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Z=T;if(T===n.RED&&(W===n.FLOAT&&(Z=n.R32F),W===n.HALF_FLOAT&&(Z=n.R16F),W===n.UNSIGNED_BYTE&&(Z=n.R8)),T===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.R8UI),W===n.UNSIGNED_SHORT&&(Z=n.R16UI),W===n.UNSIGNED_INT&&(Z=n.R32UI),W===n.BYTE&&(Z=n.R8I),W===n.SHORT&&(Z=n.R16I),W===n.INT&&(Z=n.R32I)),T===n.RG&&(W===n.FLOAT&&(Z=n.RG32F),W===n.HALF_FLOAT&&(Z=n.RG16F),W===n.UNSIGNED_BYTE&&(Z=n.RG8)),T===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.RG8UI),W===n.UNSIGNED_SHORT&&(Z=n.RG16UI),W===n.UNSIGNED_INT&&(Z=n.RG32UI),W===n.BYTE&&(Z=n.RG8I),W===n.SHORT&&(Z=n.RG16I),W===n.INT&&(Z=n.RG32I)),T===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),W===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),W===n.UNSIGNED_INT&&(Z=n.RGB32UI),W===n.BYTE&&(Z=n.RGB8I),W===n.SHORT&&(Z=n.RGB16I),W===n.INT&&(Z=n.RGB32I)),T===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),W===n.UNSIGNED_INT&&(Z=n.RGBA32UI),W===n.BYTE&&(Z=n.RGBA8I),W===n.SHORT&&(Z=n.RGBA16I),W===n.INT&&(Z=n.RGBA32I)),T===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),T===n.RGBA){const Ee=oe?za:at.getTransfer(Q);W===n.FLOAT&&(Z=n.RGBA32F),W===n.HALF_FLOAT&&(Z=n.RGBA16F),W===n.UNSIGNED_BYTE&&(Z=Ee===Mt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function b(I,T){let W;return I?T===null||T===Ji||T===Hs?W=n.DEPTH24_STENCIL8:T===Wn?W=n.DEPTH32F_STENCIL8:T===Lo&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ji||T===Hs?W=n.DEPTH_COMPONENT24:T===Wn?W=n.DEPTH_COMPONENT32F:T===Lo&&(W=n.DEPTH_COMPONENT16),W}function S(I,T){return u(I)===!0||I.isFramebufferTexture&&I.minFilter!==Qt&&I.minFilter!==In?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function C(I){const T=I.target;T.removeEventListener("dispose",C),_(T),T.isVideoTexture&&d.delete(T)}function x(I){const T=I.target;T.removeEventListener("dispose",x),k(T)}function _(I){const T=i.get(I);if(T.__webglInit===void 0)return;const W=I.source,Q=p.get(W);if(Q){const oe=Q[T.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&E(I),Object.keys(Q).length===0&&p.delete(W)}i.remove(I)}function E(I){const T=i.get(I);n.deleteTexture(T.__webglTexture);const W=I.source,Q=p.get(W);delete Q[T.__cacheKey],a.memory.textures--}function k(I){const T=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let oe=0;oe<T.__webglFramebuffer[Q].length;oe++)n.deleteFramebuffer(T.__webglFramebuffer[Q][oe]);else n.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)n.deleteFramebuffer(T.__webglFramebuffer[Q]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=I.textures;for(let Q=0,oe=W.length;Q<oe;Q++){const Z=i.get(W[Q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(W[Q])}i.remove(I)}let y=0;function M(){y=0}function R(){const I=y;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),y+=1,I}function N(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function U(I,T){const W=i.get(I);if(I.isVideoTexture&&Ne(I),I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){const Q=I.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(W,I,T);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+T)}function L(I,T){const W=i.get(I);if(I.version>0&&W.__version!==I.version){Le(W,I,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+T)}function D(I,T){const W=i.get(I);if(I.version>0&&W.__version!==I.version){Le(W,I,T);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+T)}function F(I,T){const W=i.get(I);if(I.version>0&&W.__version!==I.version){K(W,I,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+T)}const H={[Ba]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[Ml]:n.MIRRORED_REPEAT},q={[Qt]:n.NEAREST,[wf]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[mr]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},ie={[Af]:n.NEVER,[kf]:n.ALWAYS,[Cf]:n.LESS,[Hd]:n.LEQUAL,[Rf]:n.EQUAL,[If]:n.GEQUAL,[Pf]:n.GREATER,[Lf]:n.NOTEQUAL};function se(I,T){if(T.type===Wn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===In||T.magFilter===mr||T.magFilter===Go||T.magFilter===qi||T.minFilter===In||T.minFilter===mr||T.minFilter===Go||T.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,H[T.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,H[T.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,H[T.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,q[T.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,q[T.minFilter]),T.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ie[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qt||T.minFilter!==Go&&T.minFilter!==qi||T.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Se(I,T){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",C));const Q=T.source;let oe=p.get(Q);oe===void 0&&(oe={},p.set(Q,oe));const Z=N(T);if(Z!==I.__cacheKey){oe[Z]===void 0&&(oe[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),oe[Z].usedTimes++;const Ee=oe[I.__cacheKey];Ee!==void 0&&(oe[I.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(T)),I.__cacheKey=Z,I.__webglTexture=oe[Z].texture}return W}function Le(I,T,W){let Q=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=n.TEXTURE_3D);const oe=Se(I,T),Z=T.source;t.bindTexture(Q,I.__webglTexture,n.TEXTURE0+W);const Ee=i.get(Z);if(Z.version!==Ee.__version||oe===!0){t.activeTexture(n.TEXTURE0+W);const de=at.getPrimaries(at.workingColorSpace),_e=T.colorSpace===bi?null:at.getPrimaries(T.colorSpace),tt=T.colorSpace===bi||de===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ae=m(T.image,!1,s.maxTextureSize);ae=_t(T,ae);const xe=o.convert(T.format,T.colorSpace),Ue=o.convert(T.type);let Oe=w(T.internalFormat,xe,Ue,T.colorSpace,T.isVideoTexture);se(Q,T);let Me;const qe=T.mipmaps,Ve=T.isVideoTexture!==!0,gt=Ee.__version===void 0||oe===!0,B=Z.dataReady,ge=S(T,ae);if(T.isDepthTexture)Oe=b(T.format===Vs,T.type),gt&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Oe,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Oe,ae.width,ae.height,0,xe,Ue,null));else if(T.isDataTexture)if(qe.length>0){Ve&&gt&&t.texStorage2D(n.TEXTURE_2D,ge,Oe,qe[0].width,qe[0].height);for(let j=0,te=qe.length;j<te;j++)Me=qe[j],Ve?B&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Me.width,Me.height,xe,Ue,Me.data):t.texImage2D(n.TEXTURE_2D,j,Oe,Me.width,Me.height,0,xe,Ue,Me.data);T.generateMipmaps=!1}else Ve?(gt&&t.texStorage2D(n.TEXTURE_2D,ge,Oe,ae.width,ae.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,xe,Ue,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,ae.width,ae.height,0,xe,Ue,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ve&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Oe,qe[0].width,qe[0].height,ae.depth);for(let j=0,te=qe.length;j<te;j++)if(Me=qe[j],T.format!==Nn)if(xe!==null)if(Ve){if(B)if(T.layerUpdates.size>0){const fe=Hh(Me.width,Me.height,T.format,T.type);for(const ve of T.layerUpdates){const Ze=Me.data.subarray(ve*fe/Me.data.BYTES_PER_ELEMENT,(ve+1)*fe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,ve,Me.width,Me.height,1,xe,Ze,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Me.width,Me.height,ae.depth,xe,Me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Oe,Me.width,Me.height,ae.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Me.width,Me.height,ae.depth,xe,Ue,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Oe,Me.width,Me.height,ae.depth,0,xe,Ue,Me.data)}else{Ve&&gt&&t.texStorage2D(n.TEXTURE_2D,ge,Oe,qe[0].width,qe[0].height);for(let j=0,te=qe.length;j<te;j++)Me=qe[j],T.format!==Nn?xe!==null?Ve?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,Me.width,Me.height,xe,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Oe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?B&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Me.width,Me.height,xe,Ue,Me.data):t.texImage2D(n.TEXTURE_2D,j,Oe,Me.width,Me.height,0,xe,Ue,Me.data)}else if(T.isDataArrayTexture)if(Ve){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Oe,ae.width,ae.height,ae.depth),B)if(T.layerUpdates.size>0){const j=Hh(ae.width,ae.height,T.format,T.type);for(const te of T.layerUpdates){const fe=ae.data.subarray(te*j/ae.data.BYTES_PER_ELEMENT,(te+1)*j/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,xe,Ue,fe)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,xe,Ue,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,ae.width,ae.height,ae.depth,0,xe,Ue,ae.data);else if(T.isData3DTexture)Ve?(gt&&t.texStorage3D(n.TEXTURE_3D,ge,Oe,ae.width,ae.height,ae.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,xe,Ue,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,ae.width,ae.height,ae.depth,0,xe,Ue,ae.data);else if(T.isFramebufferTexture){if(gt)if(Ve)t.texStorage2D(n.TEXTURE_2D,ge,Oe,ae.width,ae.height);else{let j=ae.width,te=ae.height;for(let fe=0;fe<ge;fe++)t.texImage2D(n.TEXTURE_2D,fe,Oe,j,te,0,xe,Ue,null),j>>=1,te>>=1}}else if(qe.length>0){if(Ve&&gt){const j=Be(qe[0]);t.texStorage2D(n.TEXTURE_2D,ge,Oe,j.width,j.height)}for(let j=0,te=qe.length;j<te;j++)Me=qe[j],Ve?B&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,xe,Ue,Me):t.texImage2D(n.TEXTURE_2D,j,Oe,xe,Ue,Me);T.generateMipmaps=!1}else if(Ve){if(gt){const j=Be(ae);t.texStorage2D(n.TEXTURE_2D,ge,Oe,j.width,j.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ue,ae)}else t.texImage2D(n.TEXTURE_2D,0,Oe,xe,Ue,ae);u(T)&&g(Q),Ee.__version=Z.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function K(I,T,W){if(T.image.length!==6)return;const Q=Se(I,T),oe=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+W);const Z=i.get(oe);if(oe.version!==Z.__version||Q===!0){t.activeTexture(n.TEXTURE0+W);const Ee=at.getPrimaries(at.workingColorSpace),de=T.colorSpace===bi?null:at.getPrimaries(T.colorSpace),_e=T.colorSpace===bi||Ee===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const tt=T.isCompressedTexture||T.image[0].isCompressedTexture,ae=T.image[0]&&T.image[0].isDataTexture,xe=[];for(let te=0;te<6;te++)!tt&&!ae?xe[te]=m(T.image[te],!0,s.maxCubemapSize):xe[te]=ae?T.image[te].image:T.image[te],xe[te]=_t(T,xe[te]);const Ue=xe[0],Oe=o.convert(T.format,T.colorSpace),Me=o.convert(T.type),qe=w(T.internalFormat,Oe,Me,T.colorSpace),Ve=T.isVideoTexture!==!0,gt=Z.__version===void 0||Q===!0,B=oe.dataReady;let ge=S(T,Ue);se(n.TEXTURE_CUBE_MAP,T);let j;if(tt){Ve&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,qe,Ue.width,Ue.height);for(let te=0;te<6;te++){j=xe[te].mipmaps;for(let fe=0;fe<j.length;fe++){const ve=j[fe];T.format!==Nn?Oe!==null?Ve?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,0,0,ve.width,ve.height,Oe,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,qe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,0,0,ve.width,ve.height,Oe,Me,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,qe,ve.width,ve.height,0,Oe,Me,ve.data)}}}else{if(j=T.mipmaps,Ve&&gt){j.length>0&&ge++;const te=Be(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,qe,te.width,te.height)}for(let te=0;te<6;te++)if(ae){Ve?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,xe[te].width,xe[te].height,Oe,Me,xe[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,xe[te].width,xe[te].height,0,Oe,Me,xe[te].data);for(let fe=0;fe<j.length;fe++){const Ze=j[fe].image[te].image;Ve?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,0,0,Ze.width,Ze.height,Oe,Me,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,qe,Ze.width,Ze.height,0,Oe,Me,Ze.data)}}else{Ve?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Oe,Me,xe[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,Oe,Me,xe[te]);for(let fe=0;fe<j.length;fe++){const ve=j[fe];Ve?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,0,0,Oe,Me,ve.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,qe,Oe,Me,ve.image[te])}}}u(T)&&g(n.TEXTURE_CUBE_MAP),Z.__version=oe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ee(I,T,W,Q,oe,Z){const Ee=o.convert(W.format,W.colorSpace),de=o.convert(W.type),_e=w(W.internalFormat,Ee,de,W.colorSpace);if(!i.get(T).__hasExternalTextures){const ae=Math.max(1,T.width>>Z),xe=Math.max(1,T.height>>Z);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,Z,_e,ae,xe,T.depth,0,Ee,de,null):t.texImage2D(oe,Z,_e,ae,xe,0,Ee,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),et(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,oe,i.get(W).__webglTexture,0,Ye(T)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,oe,i.get(W).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(I,T,W){if(n.bindRenderbuffer(n.RENDERBUFFER,I),T.depthBuffer){const Q=T.depthTexture,oe=Q&&Q.isDepthTexture?Q.type:null,Z=b(T.stencilBuffer,oe),Ee=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=Ye(T);et(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,Z,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,Z,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Z,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,I)}else{const Q=T.textures;for(let oe=0;oe<Q.length;oe++){const Z=Q[oe],Ee=o.convert(Z.format,Z.colorSpace),de=o.convert(Z.type),_e=w(Z.internalFormat,Ee,de,Z.colorSpace),tt=Ye(T);W&&et(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,_e,T.width,T.height):et(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,_e,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,_e,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),U(T.depthTexture,0);const Q=i.get(T.depthTexture).__webglTexture,oe=Ye(T);if(T.depthTexture.format===Ds)et(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(T.depthTexture.format===Vs)et(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function He(I){const T=i.get(I),W=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const Q=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const oe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",oe)};Q.addEventListener("dispose",oe),T.__depthDisposeCallback=oe}T.__boundDepthTexture=Q}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");he(T.__webglFramebuffer,I)}else if(W){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=n.createRenderbuffer(),ye(T.__webglDepthbuffer[Q],I,!1);else{const oe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ye(T.__webglDepthbuffer,I,!1);else{const Q=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(I,T,W){const Q=i.get(I);T!==void 0&&ee(Q.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&He(I)}function je(I){const T=I.texture,W=i.get(I),Q=i.get(T);I.addEventListener("dispose",x);const oe=I.textures,Z=I.isWebGLCubeRenderTarget===!0,Ee=oe.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=T.version,a.memory.textures++),Z){W.__webglFramebuffer=[];for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[de]=[];for(let _e=0;_e<T.mipmaps.length;_e++)W.__webglFramebuffer[de][_e]=n.createFramebuffer()}else W.__webglFramebuffer[de]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)W.__webglFramebuffer[de]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let de=0,_e=oe.length;de<_e;de++){const tt=i.get(oe[de]);tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&et(I)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let de=0;de<oe.length;de++){const _e=oe[de];W.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[de]);const tt=o.convert(_e.format,_e.colorSpace),ae=o.convert(_e.type),xe=w(_e.internalFormat,tt,ae,_e.colorSpace,I.isXRRenderTarget===!0),Ue=Ye(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,xe,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,W.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(W.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),se(n.TEXTURE_CUBE_MAP,T);for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)ee(W.__webglFramebuffer[de][_e],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else ee(W.__webglFramebuffer[de],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);u(T)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let de=0,_e=oe.length;de<_e;de++){const tt=oe[de],ae=i.get(tt);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),se(n.TEXTURE_2D,tt),ee(W.__webglFramebuffer,I,tt,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),u(tt)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(de=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Q.__webglTexture),se(de,T),T.mipmaps&&T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)ee(W.__webglFramebuffer[_e],I,T,n.COLOR_ATTACHMENT0,de,_e);else ee(W.__webglFramebuffer,I,T,n.COLOR_ATTACHMENT0,de,0);u(T)&&g(de),t.unbindTexture()}I.depthBuffer&&He(I)}function ut(I){const T=I.textures;for(let W=0,Q=T.length;W<Q;W++){const oe=T[W];if(u(oe)){const Z=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ee=i.get(oe).__webglTexture;t.bindTexture(Z,Ee),g(Z),t.unbindTexture()}}}const Je=[],O=[];function un(I){if(I.samples>0){if(et(I)===!1){const T=I.textures,W=I.width,Q=I.height;let oe=n.COLOR_BUFFER_BIT;const Z=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(I),de=T.length>1;if(de)for(let _e=0;_e<T.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let _e=0;_e<T.length;_e++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);const tt=i.get(T[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,W,Q,0,0,W,Q,oe,n.NEAREST),r===!0&&(Je.length=0,O.length=0,Je.push(n.COLOR_ATTACHMENT0+_e),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Je.push(Z),O.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<T.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);const tt=i.get(T[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,tt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&r){const T=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ye(I){return Math.min(s.maxSamples,I.samples)}function et(I){const T=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ne(I){const T=a.render.frame;d.get(I)!==T&&(d.set(I,T),I.update())}function _t(I,T){const W=I.colorSpace,Q=I.format,oe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==Ri&&W!==bi&&(at.getTransfer(W)===Mt?(Q!==Nn||oe!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function Be(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=M,this.setTexture2D=U,this.setTexture2DArray=L,this.setTexture3D=D,this.setTextureCube=F,this.rebindTextures=ke,this.setupRenderTarget=je,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=et}function Qv(n,e){function t(i,s=bi){let o;const a=at.getTransfer(s);if(i===ci)return n.UNSIGNED_BYTE;if(i===fc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ld)return n.BYTE;if(i===Id)return n.SHORT;if(i===Lo)return n.UNSIGNED_SHORT;if(i===uc)return n.INT;if(i===Ji)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Uo)return n.HALF_FLOAT;if(i===Dd)return n.ALPHA;if(i===Nd)return n.RGB;if(i===Nn)return n.RGBA;if(i===Ud)return n.LUMINANCE;if(i===Od)return n.LUMINANCE_ALPHA;if(i===Ds)return n.DEPTH_COMPONENT;if(i===Vs)return n.DEPTH_STENCIL;if(i===ar)return n.RED;if(i===mc)return n.RED_INTEGER;if(i===Fd)return n.RG;if(i===gc)return n.RG_INTEGER;if(i===vc)return n.RGBA_INTEGER;if(i===Aa||i===Ca||i===Ra||i===Pa)if(a===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Aa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Aa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ca)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bl||i===wl||i===Sl||i===El)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===bl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===Al||i===Cl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Tl||i===Al)return a===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Cl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rl||i===Pl||i===Ll||i===Il||i===kl||i===Dl||i===Nl||i===Ul||i===Ol||i===Fl||i===Bl||i===zl||i===Hl||i===Vl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Rl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ll)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Il)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ul)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ol)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vl)return a===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===La||i===Wl||i===$l)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===La)return a===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$l)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bd||i===Gl||i===Xl||i===Yl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===La)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Gl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ey extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ht extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ty={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,a=null;const l=this._targetRay,r=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const u=t.getJointPose(m,i),g=this._getHandJoint(c,m);u!==null&&(g.matrix.fromArray(u.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=u.radius),g.visible=u!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),h=.02,v=.005;c.inputState.pinching&&p>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else r!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(r.matrix.fromArray(o.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,o.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(o.linearVelocity)):r.hasLinearVelocity=!1,o.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(o.angularVelocity)):r.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(ty)))}return l!==null&&(l.visible=s!==null),r!==null&&(r.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iy=`
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

}`;class sy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new qt,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ti({vertexShader:ny,fragmentShader:iy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ce(new rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oy extends Ys{constructor(e,t){super();const i=this;let s=null,o=1,a=null,l="local-floor",r=1,c=null,d=null,f=null,p=null,h=null,v=null;const m=new sy,u=t.getContextAttributes();let g=null,w=null;const b=[],S=[],C=new ue;let x=null;const _=new ln;_.layers.enable(1),_.viewport=new pt;const E=new ln;E.layers.enable(2),E.viewport=new pt;const k=[_,E],y=new ey;y.layers.enable(1),y.layers.enable(2);let M=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=b[K];return ee===void 0&&(ee=new Wr,b[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=b[K];return ee===void 0&&(ee=new Wr,b[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=b[K];return ee===void 0&&(ee=new Wr,b[K]=ee),ee.getHandSpace()};function N(K){const ee=S.indexOf(K.inputSource);if(ee===-1)return;const ye=b[ee];ye!==void 0&&(ye.update(K.inputSource,K.frame,c||a),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",L);for(let K=0;K<b.length;K++){const ee=S[K];ee!==null&&(S[K]=null,b[K].disconnect(ee))}M=null,R=null,m.reset(),e.setRenderTarget(g),h=null,p=null,f=null,s=null,w=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",L),u.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const ee={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new Zi(h.framebufferWidth,h.framebufferHeight,{format:Nn,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let ee=null,ye=null,he=null;u.depth&&(he=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=u.stencil?Vs:Ds,ye=u.stencil?Hs:Ji);const He={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:o};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(He),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new Zi(p.textureWidth,p.textureHeight,{format:Nn,type:ci,depthTexture:new eu(p.textureWidth,p.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(r),c=null,a=await s.requestReferenceSpace(l),Le.setContext(s),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function L(K){for(let ee=0;ee<K.removed.length;ee++){const ye=K.removed[ee],he=S.indexOf(ye);he>=0&&(S[he]=null,b[he].disconnect(ye))}for(let ee=0;ee<K.added.length;ee++){const ye=K.added[ee];let he=S.indexOf(ye);if(he===-1){for(let ke=0;ke<b.length;ke++)if(ke>=S.length){S.push(ye),he=ke;break}else if(S[ke]===null){S[ke]=ye,he=ke;break}if(he===-1)break}const He=b[he];He&&He.connect(ye)}}const D=new P,F=new P;function H(K,ee,ye){D.setFromMatrixPosition(ee.matrixWorld),F.setFromMatrixPosition(ye.matrixWorld);const he=D.distanceTo(F),He=ee.projectionMatrix.elements,ke=ye.projectionMatrix.elements,je=He[14]/(He[10]-1),ut=He[14]/(He[10]+1),Je=(He[9]+1)/He[5],O=(He[9]-1)/He[5],un=(He[8]-1)/He[0],Ye=(ke[8]+1)/ke[0],et=je*un,Ne=je*Ye,_t=he/(-un+Ye),Be=_t*-un;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Be),K.translateZ(_t),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),He[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const I=je+_t,T=ut+_t,W=et-Be,Q=Ne+(he-Be),oe=Je*ut/T*I,Z=O*ut/T*I;K.projectionMatrix.makePerspective(W,Q,oe,Z,I,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function q(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ee=K.near,ye=K.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),y.near=E.near=_.near=ee,y.far=E.far=_.far=ye,(M!==y.near||R!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,R=y.far);const he=K.parent,He=y.cameras;q(y,he);for(let ke=0;ke<He.length;ke++)q(He[ke],he);He.length===2?H(y,_,E):y.projectionMatrix.copy(_.projectionMatrix),ie(K,y,he)};function ie(K,ee,ye){ye===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Io*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&h===null))return r},this.setFoveation=function(K){r=K,p!==null&&(p.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(y)};let se=null;function Se(K,ee){if(d=ee.getViewerPose(c||a),v=ee,d!==null){const ye=d.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let he=!1;ye.length!==y.cameras.length&&(y.cameras.length=0,he=!0);for(let ke=0;ke<ye.length;ke++){const je=ye[ke];let ut=null;if(h!==null)ut=h.getViewport(je);else{const O=f.getViewSubImage(p,je);ut=O.viewport,ke===0&&(e.setRenderTargetTextures(w,O.colorTexture,p.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(w))}let Je=k[ke];Je===void 0&&(Je=new ln,Je.layers.enable(ke),Je.viewport=new pt,k[ke]=Je),Je.matrix.fromArray(je.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(je.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(ut.x,ut.y,ut.width,ut.height),ke===0&&(y.matrix.copy(Je.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),he===!0&&y.cameras.push(Je)}const He=s.enabledFeatures;if(He&&He.includes("depth-sensing")){const ke=f.getDepthInformation(ye[0]);ke&&ke.isValid&&ke.texture&&m.init(e,ke,s.renderState)}}for(let ye=0;ye<b.length;ye++){const he=S[ye],He=b[ye];he!==null&&He!==void 0&&He.update(he,ee,c||a)}se&&se(K,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),v=null}const Le=new Zd;Le.setAnimationLoop(Se),this.setAnimationLoop=function(K){se=K},this.dispose=function(){}}}const Oi=new hi,ay=new rt;function ry(n,e){function t(u,g){u.matrixAutoUpdate===!0&&u.updateMatrix(),g.value.copy(u.matrix)}function i(u,g){g.color.getRGB(u.fogColor.value,Kd(n)),g.isFog?(u.fogNear.value=g.near,u.fogFar.value=g.far):g.isFogExp2&&(u.fogDensity.value=g.density)}function s(u,g,w,b,S){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(u,g):g.isMeshToonMaterial?(o(u,g),f(u,g)):g.isMeshPhongMaterial?(o(u,g),d(u,g)):g.isMeshStandardMaterial?(o(u,g),p(u,g),g.isMeshPhysicalMaterial&&h(u,g,S)):g.isMeshMatcapMaterial?(o(u,g),v(u,g)):g.isMeshDepthMaterial?o(u,g):g.isMeshDistanceMaterial?(o(u,g),m(u,g)):g.isMeshNormalMaterial?o(u,g):g.isLineBasicMaterial?(a(u,g),g.isLineDashedMaterial&&l(u,g)):g.isPointsMaterial?r(u,g,w,b):g.isSpriteMaterial?c(u,g):g.isShadowMaterial?(u.color.value.copy(g.color),u.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(u,g){u.opacity.value=g.opacity,g.color&&u.diffuse.value.copy(g.color),g.emissive&&u.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(u.map.value=g.map,t(g.map,u.mapTransform)),g.alphaMap&&(u.alphaMap.value=g.alphaMap,t(g.alphaMap,u.alphaMapTransform)),g.bumpMap&&(u.bumpMap.value=g.bumpMap,t(g.bumpMap,u.bumpMapTransform),u.bumpScale.value=g.bumpScale,g.side===en&&(u.bumpScale.value*=-1)),g.normalMap&&(u.normalMap.value=g.normalMap,t(g.normalMap,u.normalMapTransform),u.normalScale.value.copy(g.normalScale),g.side===en&&u.normalScale.value.negate()),g.displacementMap&&(u.displacementMap.value=g.displacementMap,t(g.displacementMap,u.displacementMapTransform),u.displacementScale.value=g.displacementScale,u.displacementBias.value=g.displacementBias),g.emissiveMap&&(u.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,u.emissiveMapTransform)),g.specularMap&&(u.specularMap.value=g.specularMap,t(g.specularMap,u.specularMapTransform)),g.alphaTest>0&&(u.alphaTest.value=g.alphaTest);const w=e.get(g),b=w.envMap,S=w.envMapRotation;b&&(u.envMap.value=b,Oi.copy(S),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),u.envMapRotation.value.setFromMatrix4(ay.makeRotationFromEuler(Oi)),u.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=g.reflectivity,u.ior.value=g.ior,u.refractionRatio.value=g.refractionRatio),g.lightMap&&(u.lightMap.value=g.lightMap,u.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,u.lightMapTransform)),g.aoMap&&(u.aoMap.value=g.aoMap,u.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,u.aoMapTransform))}function a(u,g){u.diffuse.value.copy(g.color),u.opacity.value=g.opacity,g.map&&(u.map.value=g.map,t(g.map,u.mapTransform))}function l(u,g){u.dashSize.value=g.dashSize,u.totalSize.value=g.dashSize+g.gapSize,u.scale.value=g.scale}function r(u,g,w,b){u.diffuse.value.copy(g.color),u.opacity.value=g.opacity,u.size.value=g.size*w,u.scale.value=b*.5,g.map&&(u.map.value=g.map,t(g.map,u.uvTransform)),g.alphaMap&&(u.alphaMap.value=g.alphaMap,t(g.alphaMap,u.alphaMapTransform)),g.alphaTest>0&&(u.alphaTest.value=g.alphaTest)}function c(u,g){u.diffuse.value.copy(g.color),u.opacity.value=g.opacity,u.rotation.value=g.rotation,g.map&&(u.map.value=g.map,t(g.map,u.mapTransform)),g.alphaMap&&(u.alphaMap.value=g.alphaMap,t(g.alphaMap,u.alphaMapTransform)),g.alphaTest>0&&(u.alphaTest.value=g.alphaTest)}function d(u,g){u.specular.value.copy(g.specular),u.shininess.value=Math.max(g.shininess,1e-4)}function f(u,g){g.gradientMap&&(u.gradientMap.value=g.gradientMap)}function p(u,g){u.metalness.value=g.metalness,g.metalnessMap&&(u.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,u.metalnessMapTransform)),u.roughness.value=g.roughness,g.roughnessMap&&(u.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,u.roughnessMapTransform)),g.envMap&&(u.envMapIntensity.value=g.envMapIntensity)}function h(u,g,w){u.ior.value=g.ior,g.sheen>0&&(u.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),u.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(u.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,u.sheenColorMapTransform)),g.sheenRoughnessMap&&(u.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,u.sheenRoughnessMapTransform))),g.clearcoat>0&&(u.clearcoat.value=g.clearcoat,u.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(u.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,u.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(u.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===en&&u.clearcoatNormalScale.value.negate())),g.dispersion>0&&(u.dispersion.value=g.dispersion),g.iridescence>0&&(u.iridescence.value=g.iridescence,u.iridescenceIOR.value=g.iridescenceIOR,u.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(u.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,u.iridescenceMapTransform)),g.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),g.transmission>0&&(u.transmission.value=g.transmission,u.transmissionSamplerMap.value=w.texture,u.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(u.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,u.transmissionMapTransform)),u.thickness.value=g.thickness,g.thicknessMap&&(u.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=g.attenuationDistance,u.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(u.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(u.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=g.specularIntensity,u.specularColor.value.copy(g.specularColor),g.specularColorMap&&(u.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,u.specularColorMapTransform)),g.specularIntensityMap&&(u.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,u.specularIntensityMapTransform))}function v(u,g){g.matcap&&(u.matcap.value=g.matcap)}function m(u,g){const w=e.get(g).light;u.referencePosition.value.setFromMatrixPosition(w.matrixWorld),u.nearDistance.value=w.shadow.camera.near,u.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ly(n,e,t,i){let s={},o={},a=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function r(w,b){const S=b.program;i.uniformBlockBinding(w,S)}function c(w,b){let S=s[w.id];S===void 0&&(v(w),S=d(w),s[w.id]=S,w.addEventListener("dispose",u));const C=b.program;i.updateUBOMapping(w,C);const x=e.render.frame;o[w.id]!==x&&(p(w),o[w.id]=x)}function d(w){const b=f();w.__bindingPointIndex=b;const S=n.createBuffer(),C=w.__size,x=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function f(){for(let w=0;w<l;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const b=s[w.id],S=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let x=0,_=S.length;x<_;x++){const E=Array.isArray(S[x])?S[x]:[S[x]];for(let k=0,y=E.length;k<y;k++){const M=E[k];if(h(M,x,k,C)===!0){const R=M.__offset,N=Array.isArray(M.value)?M.value:[M.value];let U=0;for(let L=0;L<N.length;L++){const D=N[L],F=m(D);typeof D=="number"||typeof D=="boolean"?(M.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,R+U,M.__data)):D.isMatrix3?(M.__data[0]=D.elements[0],M.__data[1]=D.elements[1],M.__data[2]=D.elements[2],M.__data[3]=0,M.__data[4]=D.elements[3],M.__data[5]=D.elements[4],M.__data[6]=D.elements[5],M.__data[7]=0,M.__data[8]=D.elements[6],M.__data[9]=D.elements[7],M.__data[10]=D.elements[8],M.__data[11]=0):(D.toArray(M.__data,U),U+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(w,b,S,C){const x=w.value,_=b+"_"+S;if(C[_]===void 0)return typeof x=="number"||typeof x=="boolean"?C[_]=x:C[_]=x.clone(),!0;{const E=C[_];if(typeof x=="number"||typeof x=="boolean"){if(E!==x)return C[_]=x,!0}else if(E.equals(x)===!1)return E.copy(x),!0}return!1}function v(w){const b=w.uniforms;let S=0;const C=16;for(let _=0,E=b.length;_<E;_++){const k=Array.isArray(b[_])?b[_]:[b[_]];for(let y=0,M=k.length;y<M;y++){const R=k[y],N=Array.isArray(R.value)?R.value:[R.value];for(let U=0,L=N.length;U<L;U++){const D=N[U],F=m(D),H=S%C,q=H%F.boundary,ie=H+q;S+=q,ie!==0&&C-ie<F.storage&&(S+=C-ie),R.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=F.storage}}}const x=S%C;return x>0&&(S+=C-x),w.__size=S,w.__cache={},this}function m(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function u(w){const b=w.target;b.removeEventListener("dispose",u);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete o[b.id]}function g(){for(const w in s)n.deleteBuffer(s[w]);a=[],s={},o={}}return{bind:r,update:c,dispose:g}}class cy{constructor(e={}){const{canvas:t=jf(),context:i=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:r=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const h=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const g=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=Si,this.toneMappingExposure=1;const b=this;let S=!1,C=0,x=0,_=null,E=-1,k=null;const y=new pt,M=new pt;let R=null;const N=new ze(0);let U=0,L=t.width,D=t.height,F=1,H=null,q=null;const ie=new pt(0,0,L,D),se=new pt(0,0,L,D);let Se=!1;const Le=new Mc;let K=!1,ee=!1;const ye=new rt,he=new rt,He=new P,ke=new pt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Je(){return _===null?F:1}let O=i;function un(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:s,stencil:o,antialias:l,premultipliedAlpha:r,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ve,!1),O===null){const z="webgl2";if(O=un(z,A),O===null)throw un(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ye,et,Ne,_t,Be,I,T,W,Q,oe,Z,Ee,de,_e,tt,ae,xe,Ue,Oe,Me,qe,Ve,gt,B;function ge(){Ye=new pg(O),Ye.init(),Ve=new Qv(O,Ye),et=new lg(O,Ye,e,Ve),Ne=new jv(O),et.reverseDepthBuffer&&Ne.buffers.depth.setReversed(!0),_t=new vg(O),Be=new Nv,I=new Zv(O,Ye,Ne,Be,et,Ve,_t),T=new hg(b),W=new fg(b),Q=new Sp(O),gt=new ag(O,Q),oe=new mg(O,Q,_t,gt),Z=new _g(O,oe,Q,_t),Oe=new yg(O,et,I),ae=new cg(Be),Ee=new Dv(b,T,W,Ye,et,gt,ae),de=new ry(b,Be),_e=new Ov,tt=new Wv(Ye),Ue=new og(b,T,W,Ne,Z,p,r),xe=new qv(b,Z,et),B=new ly(O,_t,et,Ne),Me=new rg(O,Ye,_t),qe=new gg(O,Ye,_t),_t.programs=Ee.programs,b.capabilities=et,b.extensions=Ye,b.properties=Be,b.renderLists=_e,b.shadowMap=xe,b.state=Ne,b.info=_t}ge();const j=new oy(b,O);this.xr=j,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(L,D,!1))},this.getSize=function(A){return A.set(L,D)},this.setSize=function(A,z,$=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,D=z,t.width=Math.floor(A*F),t.height=Math.floor(z*F),$===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(L*F,D*F).floor()},this.setDrawingBufferSize=function(A,z,$){L=A,D=z,F=$,t.width=Math.floor(A*$),t.height=Math.floor(z*$),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(ie)},this.setViewport=function(A,z,$,G){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,z,$,G),Ne.viewport(y.copy(ie).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(se)},this.setScissor=function(A,z,$,G){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,z,$,G),Ne.scissor(M.copy(se).multiplyScalar(F).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(A){Ne.setScissorTest(Se=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){q=A},this.getClearColor=function(A){return A.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(A=!0,z=!0,$=!0){let G=0;if(A){let V=!1;if(_!==null){const re=_.texture.format;V=re===vc||re===gc||re===mc}if(V){const re=_.texture.type,pe=re===ci||re===Ji||re===Lo||re===Hs||re===fc||re===pc,be=Ue.getClearColor(),we=Ue.getClearAlpha(),Ie=be.r,De=be.g,Te=be.b;pe?(h[0]=Ie,h[1]=De,h[2]=Te,h[3]=we,O.clearBufferuiv(O.COLOR,0,h)):(v[0]=Ie,v[1]=De,v[2]=Te,v[3]=we,O.clearBufferiv(O.COLOR,0,v))}else G|=O.COLOR_BUFFER_BIT}z&&(G|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),_e.dispose(),tt.dispose(),Be.dispose(),T.dispose(),W.dispose(),Z.dispose(),gt.dispose(),B.dispose(),Ee.dispose(),j.dispose(),j.removeEventListener("sessionstart",zc),j.removeEventListener("sessionend",Hc),Li.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=_t.autoReset,z=xe.enabled,$=xe.autoUpdate,G=xe.needsUpdate,V=xe.type;ge(),_t.autoReset=A,xe.enabled=z,xe.autoUpdate=$,xe.needsUpdate=G,xe.type=V}function ve(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ze(A){const z=A.target;z.removeEventListener("dispose",Ze),Lt(z)}function Lt(A){nn(A),Be.remove(A)}function nn(A){const z=Be.get(A).programs;z!==void 0&&(z.forEach(function($){Ee.releaseProgram($)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,$,G,V,re){z===null&&(z=je);const pe=V.isMesh&&V.matrixWorld.determinant()<0,be=Vu(A,z,$,G,V);Ne.setMaterial(G,pe);let we=$.index,Ie=1;if(G.wireframe===!0){if(we=oe.getWireframeAttribute($),we===void 0)return;Ie=2}const De=$.drawRange,Te=$.attributes.position;let lt=De.start*Ie,xt=(De.start+De.count)*Ie;re!==null&&(lt=Math.max(lt,re.start*Ie),xt=Math.min(xt,(re.start+re.count)*Ie)),we!==null?(lt=Math.max(lt,0),xt=Math.min(xt,we.count)):Te!=null&&(lt=Math.max(lt,0),xt=Math.min(xt,Te.count));const Et=xt-lt;if(Et<0||Et===1/0)return;gt.setup(V,G,be,$,we);let fn,st=Me;if(we!==null&&(fn=Q.get(we),st=qe,st.setIndex(fn)),V.isMesh)G.wireframe===!0?(Ne.setLineWidth(G.wireframeLinewidth*Je()),st.setMode(O.LINES)):st.setMode(O.TRIANGLES);else if(V.isLine){let Ae=G.linewidth;Ae===void 0&&(Ae=1),Ne.setLineWidth(Ae*Je()),V.isLineSegments?st.setMode(O.LINES):V.isLineLoop?st.setMode(O.LINE_LOOP):st.setMode(O.LINE_STRIP)}else V.isPoints?st.setMode(O.POINTS):V.isSprite&&st.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)st.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))st.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ae=V._multiDrawStarts,Ht=V._multiDrawCounts,ot=V._multiDrawCount,Cn=we?Q.get(we).bytesPerElement:1,os=Be.get(G).currentProgram.getUniforms();for(let pn=0;pn<ot;pn++)os.setValue(O,"_gl_DrawID",pn),st.render(Ae[pn]/Cn,Ht[pn])}else if(V.isInstancedMesh)st.renderInstances(lt,Et,V.count);else if($.isInstancedBufferGeometry){const Ae=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ht=Math.min($.instanceCount,Ae);st.renderInstances(lt,Et,Ht)}else st.render(lt,Et)};function it(A,z,$){A.transparent===!0&&A.side===Vn&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,$o(A,z,$),A.side=li,A.needsUpdate=!0,$o(A,z,$),A.side=Vn):$o(A,z,$)}this.compile=function(A,z,$=null){$===null&&($=A),u=tt.get($),u.init(z),w.push(u),$.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(u.pushLight(V),V.castShadow&&u.pushShadow(V))}),A!==$&&A.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(u.pushLight(V),V.castShadow&&u.pushShadow(V))}),u.setupLights();const G=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const re=V.material;if(re)if(Array.isArray(re))for(let pe=0;pe<re.length;pe++){const be=re[pe];it(be,$,V),G.add(be)}else it(re,$,V),G.add(re)}),w.pop(),u=null,G},this.compileAsync=function(A,z,$=null){const G=this.compile(A,z,$);return new Promise(V=>{function re(){if(G.forEach(function(pe){Be.get(pe).currentProgram.isReady()&&G.delete(pe)}),G.size===0){V(A);return}setTimeout(re,10)}Ye.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let sn=null;function Xn(A){sn&&sn(A)}function zc(){Li.stop()}function Hc(){Li.start()}const Li=new Zd;Li.setAnimationLoop(Xn),typeof self!="undefined"&&Li.setContext(self),this.setAnimationLoop=function(A){sn=A,j.setAnimationLoop(A),A===null?Li.stop():Li.start()},j.addEventListener("sessionstart",zc),j.addEventListener("sessionend",Hc),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(z),z=j.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,z,_),u=tt.get(A,w.length),u.init(z),w.push(u),he.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Le.setFromProjectionMatrix(he),ee=this.localClippingEnabled,K=ae.init(this.clippingPlanes,ee),m=_e.get(A,g.length),m.init(),g.push(m),j.enabled===!0&&j.isPresenting===!0){const re=b.xr.getDepthSensingMesh();re!==null&&dr(re,z,-1/0,b.sortObjects)}dr(A,z,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(H,q),ut=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ut&&Ue.addToRenderList(m,A),this.info.render.frame++,K===!0&&ae.beginShadows();const $=u.state.shadowsArray;xe.render($,A,z),K===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,V=m.transmissive;if(u.setupLights(),z.isArrayCamera){const re=z.cameras;if(V.length>0)for(let pe=0,be=re.length;pe<be;pe++){const we=re[pe];Wc(G,V,A,we)}ut&&Ue.render(A);for(let pe=0,be=re.length;pe<be;pe++){const we=re[pe];Vc(m,A,we,we.viewport)}}else V.length>0&&Wc(G,V,A,z),ut&&Ue.render(A),Vc(m,A,z);_!==null&&(I.updateMultisampleRenderTarget(_),I.updateRenderTargetMipmap(_)),A.isScene===!0&&A.onAfterRender(b,A,z),gt.resetDefaultState(),E=-1,k=null,w.pop(),w.length>0?(u=w[w.length-1],K===!0&&ae.setGlobalState(b.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function dr(A,z,$,G){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Le.intersectsSprite(A)){G&&ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(he);const pe=Z.update(A),be=A.material;be.visible&&m.push(A,pe,be,$,ke.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Le.intersectsObject(A))){const pe=Z.update(A),be=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ke.copy(A.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ke.copy(pe.boundingSphere.center)),ke.applyMatrix4(A.matrixWorld).applyMatrix4(he)),Array.isArray(be)){const we=pe.groups;for(let Ie=0,De=we.length;Ie<De;Ie++){const Te=we[Ie],lt=be[Te.materialIndex];lt&&lt.visible&&m.push(A,pe,lt,$,ke.z,Te)}}else be.visible&&m.push(A,pe,be,$,ke.z,null)}}const re=A.children;for(let pe=0,be=re.length;pe<be;pe++)dr(re[pe],z,$,G)}function Vc(A,z,$,G){const V=A.opaque,re=A.transmissive,pe=A.transparent;u.setupLightsView($),K===!0&&ae.setGlobalState(b.clippingPlanes,$),G&&Ne.viewport(y.copy(G)),V.length>0&&Wo(V,z,$),re.length>0&&Wo(re,z,$),pe.length>0&&Wo(pe,z,$),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Wc(A,z,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new Zi(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Uo:ci,minFilter:qi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const re=u.state.transmissionRenderTarget[G.id],pe=G.viewport||y;re.setSize(pe.z,pe.w);const be=b.getRenderTarget();b.setRenderTarget(re),b.getClearColor(N),U=b.getClearAlpha(),U<1&&b.setClearColor(16777215,.5),b.clear(),ut&&Ue.render($);const we=b.toneMapping;b.toneMapping=Si;const Ie=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),K===!0&&ae.setGlobalState(b.clippingPlanes,G),Wo(A,$,G),I.updateMultisampleRenderTarget(re),I.updateRenderTargetMipmap(re),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Te=0,lt=z.length;Te<lt;Te++){const xt=z[Te],Et=xt.object,fn=xt.geometry,st=xt.material,Ae=xt.group;if(st.side===Vn&&Et.layers.test(G.layers)){const Ht=st.side;st.side=en,st.needsUpdate=!0,$c(Et,$,G,fn,st,Ae),st.side=Ht,st.needsUpdate=!0,De=!0}}De===!0&&(I.updateMultisampleRenderTarget(re),I.updateRenderTargetMipmap(re))}b.setRenderTarget(be),b.setClearColor(N,U),Ie!==void 0&&(G.viewport=Ie),b.toneMapping=we}function Wo(A,z,$){const G=z.isScene===!0?z.overrideMaterial:null;for(let V=0,re=A.length;V<re;V++){const pe=A[V],be=pe.object,we=pe.geometry,Ie=G===null?pe.material:G,De=pe.group;be.layers.test($.layers)&&$c(be,z,$,we,Ie,De)}}function $c(A,z,$,G,V,re){A.onBeforeRender(b,z,$,G,V,re),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(b,z,$,G,A,re),V.transparent===!0&&V.side===Vn&&V.forceSinglePass===!1?(V.side=en,V.needsUpdate=!0,b.renderBufferDirect($,z,G,V,A,re),V.side=li,V.needsUpdate=!0,b.renderBufferDirect($,z,G,V,A,re),V.side=Vn):b.renderBufferDirect($,z,G,V,A,re),A.onAfterRender(b,z,$,G,V,re)}function $o(A,z,$){z.isScene!==!0&&(z=je);const G=Be.get(A),V=u.state.lights,re=u.state.shadowsArray,pe=V.state.version,be=Ee.getParameters(A,V.state,re,z,$),we=Ee.getProgramCacheKey(be);let Ie=G.programs;G.environment=A.isMeshStandardMaterial?z.environment:null,G.fog=z.fog,G.envMap=(A.isMeshStandardMaterial?W:T).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ie===void 0&&(A.addEventListener("dispose",Ze),Ie=new Map,G.programs=Ie);let De=Ie.get(we);if(De!==void 0){if(G.currentProgram===De&&G.lightsStateVersion===pe)return Xc(A,be),De}else be.uniforms=Ee.getUniforms(A),A.onBeforeCompile(be,b),De=Ee.acquireProgram(be,we),Ie.set(we,De),G.uniforms=be.uniforms;const Te=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Te.clippingPlanes=ae.uniform),Xc(A,be),G.needsLights=$u(A),G.lightsStateVersion=pe,G.needsLights&&(Te.ambientLightColor.value=V.state.ambient,Te.lightProbe.value=V.state.probe,Te.directionalLights.value=V.state.directional,Te.directionalLightShadows.value=V.state.directionalShadow,Te.spotLights.value=V.state.spot,Te.spotLightShadows.value=V.state.spotShadow,Te.rectAreaLights.value=V.state.rectArea,Te.ltc_1.value=V.state.rectAreaLTC1,Te.ltc_2.value=V.state.rectAreaLTC2,Te.pointLights.value=V.state.point,Te.pointLightShadows.value=V.state.pointShadow,Te.hemisphereLights.value=V.state.hemi,Te.directionalShadowMap.value=V.state.directionalShadowMap,Te.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Te.spotShadowMap.value=V.state.spotShadowMap,Te.spotLightMatrix.value=V.state.spotLightMatrix,Te.spotLightMap.value=V.state.spotLightMap,Te.pointShadowMap.value=V.state.pointShadowMap,Te.pointShadowMatrix.value=V.state.pointShadowMatrix),G.currentProgram=De,G.uniformsList=null,De}function Gc(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=ka.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Xc(A,z){const $=Be.get(A);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function Vu(A,z,$,G,V){z.isScene!==!0&&(z=je),I.resetTextureUnits();const re=z.fog,pe=G.isMeshStandardMaterial?z.environment:null,be=_===null?b.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Ri,we=(G.isMeshStandardMaterial?W:T).get(G.envMap||pe),Ie=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,De=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!$.morphAttributes.position,lt=!!$.morphAttributes.normal,xt=!!$.morphAttributes.color;let Et=Si;G.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(Et=b.toneMapping);const fn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,st=fn!==void 0?fn.length:0,Ae=Be.get(G),Ht=u.state.lights;if(K===!0&&(ee===!0||A!==k)){const _n=A===k&&G.id===E;ae.setState(G,A,_n)}let ot=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ht.state.version||Ae.outputColorSpace!==be||V.isBatchedMesh&&Ae.batching===!1||!V.isBatchedMesh&&Ae.batching===!0||V.isBatchedMesh&&Ae.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ae.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ae.instancing===!1||!V.isInstancedMesh&&Ae.instancing===!0||V.isSkinnedMesh&&Ae.skinning===!1||!V.isSkinnedMesh&&Ae.skinning===!0||V.isInstancedMesh&&Ae.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ae.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ae.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ae.instancingMorph===!1&&V.morphTexture!==null||Ae.envMap!==we||G.fog===!0&&Ae.fog!==re||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ae.numPlanes||Ae.numIntersection!==ae.numIntersection)||Ae.vertexAlphas!==Ie||Ae.vertexTangents!==De||Ae.morphTargets!==Te||Ae.morphNormals!==lt||Ae.morphColors!==xt||Ae.toneMapping!==Et||Ae.morphTargetsCount!==st)&&(ot=!0):(ot=!0,Ae.__version=G.version);let Cn=Ae.currentProgram;ot===!0&&(Cn=$o(G,z,V));let os=!1,pn=!1,ur=!1;const Ct=Cn.getUniforms(),ui=Ae.uniforms;if(Ne.useProgram(Cn.program)&&(os=!0,pn=!0,ur=!0),G.id!==E&&(E=G.id,pn=!0),os||k!==A){et.reverseDepthBuffer?(ye.copy(A.projectionMatrix),Zf(ye),Qf(ye),Ct.setValue(O,"projectionMatrix",ye)):Ct.setValue(O,"projectionMatrix",A.projectionMatrix),Ct.setValue(O,"viewMatrix",A.matrixWorldInverse);const _n=Ct.map.cameraPosition;_n!==void 0&&_n.setValue(O,He.setFromMatrixPosition(A.matrixWorld)),et.logarithmicDepthBuffer&&Ct.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ct.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),k!==A&&(k=A,pn=!0,ur=!0)}if(V.isSkinnedMesh){Ct.setOptional(O,V,"bindMatrix"),Ct.setOptional(O,V,"bindMatrixInverse");const _n=V.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ct.setValue(O,"boneTexture",_n.boneTexture,I))}V.isBatchedMesh&&(Ct.setOptional(O,V,"batchingTexture"),Ct.setValue(O,"batchingTexture",V._matricesTexture,I),Ct.setOptional(O,V,"batchingIdTexture"),Ct.setValue(O,"batchingIdTexture",V._indirectTexture,I),Ct.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&Ct.setValue(O,"batchingColorTexture",V._colorsTexture,I));const fr=$.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&Oe.update(V,$,Cn),(pn||Ae.receiveShadow!==V.receiveShadow)&&(Ae.receiveShadow=V.receiveShadow,Ct.setValue(O,"receiveShadow",V.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ui.envMap.value=we,ui.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&z.environment!==null&&(ui.envMapIntensity.value=z.environmentIntensity),pn&&(Ct.setValue(O,"toneMappingExposure",b.toneMappingExposure),Ae.needsLights&&Wu(ui,ur),re&&G.fog===!0&&de.refreshFogUniforms(ui,re),de.refreshMaterialUniforms(ui,G,F,D,u.state.transmissionRenderTarget[A.id]),ka.upload(O,Gc(Ae),ui,I)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ka.upload(O,Gc(Ae),ui,I),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ct.setValue(O,"center",V.center),Ct.setValue(O,"modelViewMatrix",V.modelViewMatrix),Ct.setValue(O,"normalMatrix",V.normalMatrix),Ct.setValue(O,"modelMatrix",V.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const _n=G.uniformsGroups;for(let pr=0,Gu=_n.length;pr<Gu;pr++){const Yc=_n[pr];B.update(Yc,Cn),B.bind(Yc,Cn)}}return Cn}function Wu(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function $u(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(A,z,$){Be.get(A.texture).__webglTexture=z,Be.get(A.depthTexture).__webglTexture=$;const G=Be.get(A);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=$===void 0,G.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const $=Be.get(A);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,$=0){_=A,C=z,x=$;let G=!0,V=null,re=!1,pe=!1;if(A){const we=Be.get(A);if(we.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(O.FRAMEBUFFER,null),G=!1;else if(we.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(we.__hasExternalTextures)I.rebindTextures(A,Be.get(A.texture).__webglTexture,Be.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Te=A.depthTexture;if(we.__boundDepthTexture!==Te){if(Te!==null&&Be.has(Te)&&(A.width!==Te.image.width||A.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}const Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(pe=!0);const De=Be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(De[z])?V=De[z][$]:V=De[z],re=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?V=Be.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?V=De[$]:V=De,y.copy(A.viewport),M.copy(A.scissor),R=A.scissorTest}else y.copy(ie).multiplyScalar(F).floor(),M.copy(se).multiplyScalar(F).floor(),R=Se;if(Ne.bindFramebuffer(O.FRAMEBUFFER,V)&&G&&Ne.drawBuffers(A,V),Ne.viewport(y),Ne.scissor(M),Ne.setScissorTest(R),re){const we=Be.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,$)}else if(pe){const we=Be.get(A.texture),Ie=z||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.__webglTexture,$||0,Ie)}E=-1},this.readRenderTargetPixels=function(A,z,$,G,V,re,pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(be=be[pe]),be){Ne.bindFramebuffer(O.FRAMEBUFFER,be);try{const we=A.texture,Ie=we.format,De=we.type;if(!et.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-G&&$>=0&&$<=A.height-V&&O.readPixels(z,$,G,V,Ve.convert(Ie),Ve.convert(De),re)}finally{const we=_!==null?Be.get(_).__webglFramebuffer:null;Ne.bindFramebuffer(O.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(A,z,$,G,V,re,pe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(be=be[pe]),be){const we=A.texture,Ie=we.format,De=we.type;if(!et.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-G&&$>=0&&$<=A.height-V){Ne.bindFramebuffer(O.FRAMEBUFFER,be);const Te=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Te),O.bufferData(O.PIXEL_PACK_BUFFER,re.byteLength,O.STREAM_READ),O.readPixels(z,$,G,V,Ve.convert(Ie),Ve.convert(De),0);const lt=_!==null?Be.get(_).__webglFramebuffer:null;Ne.bindFramebuffer(O.FRAMEBUFFER,lt);const xt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Jf(O,xt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Te),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,re),O.deleteBuffer(Te),O.deleteSync(xt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,$=0){A.isTexture!==!0&&(Ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);const G=Math.pow(2,-$),V=Math.floor(A.image.width*G),re=Math.floor(A.image.height*G),pe=z!==null?z.x:0,be=z!==null?z.y:0;I.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,pe,be,V,re),Ne.unbindTexture()},this.copyTextureToTexture=function(A,z,$=null,G=null,V=0){A.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1],z=arguments[2],V=arguments[3]||0,$=null);let re,pe,be,we,Ie,De;$!==null?(re=$.max.x-$.min.x,pe=$.max.y-$.min.y,be=$.min.x,we=$.min.y):(re=A.image.width,pe=A.image.height,be=0,we=0),G!==null?(Ie=G.x,De=G.y):(Ie=0,De=0);const Te=Ve.convert(z.format),lt=Ve.convert(z.type);I.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const xt=O.getParameter(O.UNPACK_ROW_LENGTH),Et=O.getParameter(O.UNPACK_IMAGE_HEIGHT),fn=O.getParameter(O.UNPACK_SKIP_PIXELS),st=O.getParameter(O.UNPACK_SKIP_ROWS),Ae=O.getParameter(O.UNPACK_SKIP_IMAGES),Ht=A.isCompressedTexture?A.mipmaps[V]:A.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Ht.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ht.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,be),O.pixelStorei(O.UNPACK_SKIP_ROWS,we),A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,V,Ie,De,re,pe,Te,lt,Ht.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,V,Ie,De,Ht.width,Ht.height,Te,Ht.data):O.texSubImage2D(O.TEXTURE_2D,V,Ie,De,re,pe,Te,lt,Ht),O.pixelStorei(O.UNPACK_ROW_LENGTH,xt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et),O.pixelStorei(O.UNPACK_SKIP_PIXELS,fn),O.pixelStorei(O.UNPACK_SKIP_ROWS,st),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ae),V===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(A,z,$=null,G=null,V=0){A.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,G=arguments[1]||null,A=arguments[2],z=arguments[3],V=arguments[4]||0);let re,pe,be,we,Ie,De,Te,lt,xt;const Et=A.isCompressedTexture?A.mipmaps[V]:A.image;$!==null?(re=$.max.x-$.min.x,pe=$.max.y-$.min.y,be=$.max.z-$.min.z,we=$.min.x,Ie=$.min.y,De=$.min.z):(re=Et.width,pe=Et.height,be=Et.depth,we=0,Ie=0,De=0),G!==null?(Te=G.x,lt=G.y,xt=G.z):(Te=0,lt=0,xt=0);const fn=Ve.convert(z.format),st=Ve.convert(z.type);let Ae;if(z.isData3DTexture)I.setTexture3D(z,0),Ae=O.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)I.setTexture2DArray(z,0),Ae=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const Ht=O.getParameter(O.UNPACK_ROW_LENGTH),ot=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Cn=O.getParameter(O.UNPACK_SKIP_PIXELS),os=O.getParameter(O.UNPACK_SKIP_ROWS),pn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Et.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,we),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ie),O.pixelStorei(O.UNPACK_SKIP_IMAGES,De),A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Ae,V,Te,lt,xt,re,pe,be,fn,st,Et.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Ae,V,Te,lt,xt,re,pe,be,fn,Et.data):O.texSubImage3D(Ae,V,Te,lt,xt,re,pe,be,fn,st,Et),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ht),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Cn),O.pixelStorei(O.UNPACK_SKIP_ROWS,os),O.pixelStorei(O.UNPACK_SKIP_IMAGES,pn),V===0&&z.generateMipmaps&&O.generateMipmap(Ae),Ne.unbindTexture()},this.initRenderTarget=function(A){Be.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),Ne.unbindTexture()},this.resetState=function(){C=0,x=0,_=null,Ne.reset(),gt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===yc?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===rr?"display-p3":"srgb"}}class wc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=i}clone(){return new wc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ou extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new P;class Ga{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array),o=ct(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ga(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class au extends Pi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xs;const so=new P,Ms=new P,bs=new P,ws=new ue,oo=new ue,ru=new rt,ua=new P,ao=new P,fa=new P,Vh=new ue,$r=new ue,Wh=new ue;class dy extends At{constructor(e=new au){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new Pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new hy(t,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Ga(i,3,0,!1)),xs.setAttribute("uv",new Ga(i,2,3,!1))}this.geometry=xs,this.material=e,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),ru.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-bs.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const a=this.center;pa(ua.set(-.5,-.5,0),bs,a,Ms,s,o),pa(ao.set(.5,-.5,0),bs,a,Ms,s,o),pa(fa.set(.5,.5,0),bs,a,Ms,s,o),Vh.set(0,0),$r.set(1,0),Wh.set(1,1);let l=e.ray.intersectTriangle(ua,ao,fa,!1,so);if(l===null&&(pa(ao.set(-.5,.5,0),bs,a,Ms,s,o),$r.set(0,1),l=e.ray.intersectTriangle(ua,fa,ao,!1,so),l===null))return;const r=e.ray.origin.distanceTo(so);r<e.near||r>e.far||t.push({distance:r,point:so.clone(),uv:wn.getInterpolation(so,ua,ao,fa,Vh,$r,Wh,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function pa(n,e,t,i,s,o){ws.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(oo.x=o*ws.x-s*ws.y,oo.y=s*ws.x+o*ws.y):oo.copy(ws),n.copy(e),n.x+=oo.x,n.y+=oo.y,n.applyMatrix4(ru)}class lu extends qt{constructor(e=null,t=1,i=1,s,o,a,l,r,c=Qt,d=Qt,f,p){super(null,a,l,r,c,d,s,o,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $h extends yn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ss=new rt,Gh=new rt,ma=[],Xh=new ts,uy=new rt,ro=new Ce,lo=new ns;class co extends Ce{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $h(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,uy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ts),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),Xh.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Xh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),lo.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(lo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,a=e*o+1;for(let l=0;l<i.length;l++)i[l]=s[a+l]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(i),e.ray.intersectsSphere(lo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ss),Gh.multiplyMatrices(i,Ss),ro.matrixWorld=Gh,ro.raycast(e,ma);for(let a=0,l=ma.length;a<l;a++){const r=ma[a];r.instanceId=o,r.object=this,t.push(r)}ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $h(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new lu(new Float32Array(s*this.count),s,this.count,ar,Wn));const o=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const l=this.geometry.morphTargetsRelative?1:1-a,r=s*e;o[r]=l,o.set(i,r+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class So extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xa=new P,Ya=new P,Yh=new rt,ho=new xc,ga=new ns,Gr=new P,qh=new P;class jl extends At{constructor(e=new Pt,t=new So){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)Xa.fromBufferAttribute(t,s-1),Ya.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Xa.distanceTo(Ya);e.setAttribute("lineDistance",new mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),ga.radius+=o,e.ray.intersectsSphere(ga)===!1)return;Yh.copy(s).invert(),ho.copy(e.ray).applyMatrix4(Yh);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),r=l*l,c=this.isLineSegments?2:1,d=i.index,p=i.attributes.position;if(d!==null){const h=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let m=h,u=v-1;m<u;m+=c){const g=d.getX(m),w=d.getX(m+1),b=va(this,e,ho,r,g,w);b&&t.push(b)}if(this.isLineLoop){const m=d.getX(v-1),u=d.getX(h),g=va(this,e,ho,r,m,u);g&&t.push(g)}}else{const h=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let m=h,u=v-1;m<u;m+=c){const g=va(this,e,ho,r,m,m+1);g&&t.push(g)}if(this.isLineLoop){const m=va(this,e,ho,r,v-1,h);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function va(n,e,t,i,s,o){const a=n.geometry.attributes.position;if(Xa.fromBufferAttribute(a,s),Ya.fromBufferAttribute(a,o),t.distanceSqToSegment(Xa,Ya,Gr,qh)>i)return;Gr.applyMatrix4(n.matrixWorld);const r=e.ray.origin.distanceTo(Gr);if(!(r<e.near||r>e.far))return{distance:r,point:qh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Kh=new P,jh=new P;class cu extends jl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)Kh.fromBufferAttribute(t,s),jh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Kh.distanceTo(jh);e.setAttribute("lineDistance",new mt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hu extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jh=new rt,Jl=new xc,ya=new ns,_a=new P;class fy extends At{constructor(e=new Pt,t=new hu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),ya.radius+=o,e.ray.intersectsSphere(ya)===!1)return;Jh.copy(s).invert(),Jl.copy(e.ray).applyMatrix4(Jh);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),r=l*l,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let v=p,m=h;v<m;v++){const u=c.getX(v);_a.fromBufferAttribute(f,u),Zh(_a,u,r,s,e,t,this)}}else{const p=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let v=p,m=h;v<m;v++)_a.fromBufferAttribute(f,v),Zh(_a,v,r,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Zh(n,e,t,i,s,o,a){const l=Jl.distanceSqToPoint(n);if(l<t){const r=new P;Jl.closestPointToPoint(n,r),r.applyMatrix4(i);const c=s.ray.origin.distanceTo(r);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(l),point:r,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class du extends qt{constructor(e,t,i,s,o,a,l,r,c){super(e,t,i,s,o,a,l,r,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),o=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),o+=i.distanceTo(s),t.push(o),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const o=i.length;let a;t?a=t:a=e*i[o-1];let l=0,r=o-1,c;for(;l<=r;)if(s=Math.floor(l+(r-l)/2),c=i[s]-a,c<0)l=s+1;else if(c>0)r=s-1;else{r=s;break}if(s=r,i[s]===a)return s/(o-1);const d=i[s],p=i[s+1]-d,h=(a-d)/p;return(s+h)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const a=this.getPoint(s),l=this.getPoint(o),r=t||(a.isVector2?new ue:new P);return r.copy(l).sub(a).normalize(),r}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,s=[],o=[],a=[],l=new P,r=new rt;for(let h=0;h<=e;h++){const v=h/e;s[h]=this.getTangentAt(v,new P)}o[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const d=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),p<=c&&i.set(0,0,1),l.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],l),a[0].crossVectors(s[0],o[0]);for(let h=1;h<=e;h++){if(o[h]=o[h-1].clone(),a[h]=a[h-1].clone(),l.crossVectors(s[h-1],s[h]),l.length()>Number.EPSILON){l.normalize();const v=Math.acos(zt(s[h-1].dot(s[h]),-1,1));o[h].applyMatrix4(r.makeRotationAxis(l,v))}a[h].crossVectors(s[h],o[h])}if(t===!0){let h=Math.acos(zt(o[0].dot(o[e]),-1,1));h/=e,s[0].dot(l.crossVectors(o[0],o[e]))>0&&(h=-h);for(let v=1;v<=e;v++)o[v].applyMatrix4(r.makeRotationAxis(s[v],h*v)),a[v].crossVectors(s[v],o[v])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sc extends Gn{constructor(e=0,t=0,i=1,s=1,o=0,a=Math.PI*2,l=!1,r=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=l,this.aRotation=r}getPoint(e,t=new ue){const i=t,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(a?o=0:o=s),this.aClockwise===!0&&!a&&(o===s?o=-s:o=o-s);const l=this.aStartAngle+e*o;let r=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=r-this.aX,h=c-this.aY;r=p*d-h*f+this.aX,c=p*f+h*d+this.aY}return i.set(r,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class py extends Sc{constructor(e,t,i,s,o,a){super(e,t,i,i,s,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ec(){let n=0,e=0,t=0,i=0;function s(o,a,l,r){n=o,e=l,t=-3*o+3*a-2*l-r,i=2*o-2*a+l+r}return{initCatmullRom:function(o,a,l,r,c){s(a,l,c*(l-o),c*(r-a))},initNonuniformCatmullRom:function(o,a,l,r,c,d,f){let p=(a-o)/c-(l-o)/(c+d)+(l-a)/d,h=(l-a)/d-(r-a)/(d+f)+(r-l)/f;p*=d,h*=d,s(a,l,p,h)},calc:function(o){const a=o*o,l=a*o;return n+e*o+t*a+i*l}}}const xa=new P,Xr=new Ec,Yr=new Ec,qr=new Ec;class my extends Gn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){const i=t,s=this.points,o=s.length,a=(o-(this.closed?0:1))*e;let l=Math.floor(a),r=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/o)+1)*o:r===0&&l===o-1&&(l=o-2,r=1);let c,d;this.closed||l>0?c=s[(l-1)%o]:(xa.subVectors(s[0],s[1]).add(s[0]),c=xa);const f=s[l%o],p=s[(l+1)%o];if(this.closed||l+2<o?d=s[(l+2)%o]:(xa.subVectors(s[o-1],s[o-2]).add(s[o-1]),d=xa),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(p),h),u=Math.pow(p.distanceToSquared(d),h);m<1e-4&&(m=1),v<1e-4&&(v=m),u<1e-4&&(u=m),Xr.initNonuniformCatmullRom(c.x,f.x,p.x,d.x,v,m,u),Yr.initNonuniformCatmullRom(c.y,f.y,p.y,d.y,v,m,u),qr.initNonuniformCatmullRom(c.z,f.z,p.z,d.z,v,m,u)}else this.curveType==="catmullrom"&&(Xr.initCatmullRom(c.x,f.x,p.x,d.x,this.tension),Yr.initCatmullRom(c.y,f.y,p.y,d.y,this.tension),qr.initCatmullRom(c.z,f.z,p.z,d.z,this.tension));return i.set(Xr.calc(r),Yr.calc(r),qr.calc(r)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qh(n,e,t,i,s){const o=(i-e)*.5,a=(s-t)*.5,l=n*n,r=n*l;return(2*t-2*i+o+a)*r+(-3*t+3*i-2*o-a)*l+o*n+t}function gy(n,e){const t=1-n;return t*t*e}function vy(n,e){return 2*(1-n)*n*e}function yy(n,e){return n*n*e}function Eo(n,e,t,i){return gy(n,e)+vy(n,t)+yy(n,i)}function _y(n,e){const t=1-n;return t*t*t*e}function xy(n,e){const t=1-n;return 3*t*t*n*e}function My(n,e){return 3*(1-n)*n*n*e}function by(n,e){return n*n*n*e}function To(n,e,t,i,s){return _y(n,e)+xy(n,t)+My(n,i)+by(n,s)}class uu extends Gn{constructor(e=new ue,t=new ue,i=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ue){const i=t,s=this.v0,o=this.v1,a=this.v2,l=this.v3;return i.set(To(e,s.x,o.x,a.x,l.x),To(e,s.y,o.y,a.y,l.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wy extends Gn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){const i=t,s=this.v0,o=this.v1,a=this.v2,l=this.v3;return i.set(To(e,s.x,o.x,a.x,l.x),To(e,s.y,o.y,a.y,l.y),To(e,s.z,o.z,a.z,l.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fu extends Gn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sy extends Gn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pu extends Gn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){const i=t,s=this.v0,o=this.v1,a=this.v2;return i.set(Eo(e,s.x,o.x,a.x),Eo(e,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ey extends Gn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,s=this.v0,o=this.v1,a=this.v2;return i.set(Eo(e,s.x,o.x,a.x),Eo(e,s.y,o.y,a.y),Eo(e,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mu extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const i=t,s=this.points,o=(s.length-1)*e,a=Math.floor(o),l=o-a,r=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(Qh(l,r.x,c.x,d.x,f.x),Qh(l,r.y,c.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ue().fromArray(s))}return this}}var ed=Object.freeze({__proto__:null,ArcCurve:py,CatmullRomCurve3:my,CubicBezierCurve:uu,CubicBezierCurve3:wy,EllipseCurve:Sc,LineCurve:fu,LineCurve3:Sy,QuadraticBezierCurve:pu,QuadraticBezierCurve3:Ey,SplineCurve:mu});class Ty extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ed[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const a=s[o]-i,l=this.curves[o],r=l.getLength(),c=r===0?0:1-a/r;return l.getPointAt(c,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const a=o[s],l=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,r=a.getPoints(l);for(let c=0;c<r.length;c++){const d=r[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new ed[s.type]().fromJSON(s))}return this}}class Ay extends Ty{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new fu(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const o=new pu(this.currentPoint.clone(),new ue(e,t),new ue(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,o,a){const l=new uu(this.currentPoint.clone(),new ue(e,t),new ue(i,s),new ue(o,a));return this.curves.push(l),this.currentPoint.set(o,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new mu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,o,a){const l=this.currentPoint.x,r=this.currentPoint.y;return this.absarc(e+l,t+r,i,s,o,a),this}absarc(e,t,i,s,o,a){return this.absellipse(e,t,i,i,s,o,a),this}ellipse(e,t,i,s,o,a,l,r){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,s,o,a,l,r),this}absellipse(e,t,i,s,o,a,l,r){const c=new Sc(e,t,i,s,o,a,l,r);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Tc extends Pt{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=zt(s,0,Math.PI*2);const o=[],a=[],l=[],r=[],c=[],d=1/t,f=new P,p=new ue,h=new P,v=new P,m=new P;let u=0,g=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:u=e[w+1].x-e[w].x,g=e[w+1].y-e[w].y,h.x=g*1,h.y=-u,h.z=g*0,m.copy(h),h.normalize(),r.push(h.x,h.y,h.z);break;case e.length-1:r.push(m.x,m.y,m.z);break;default:u=e[w+1].x-e[w].x,g=e[w+1].y-e[w].y,h.x=g*1,h.y=-u,h.z=g*0,v.copy(h),h.x+=m.x,h.y+=m.y,h.z+=m.z,h.normalize(),r.push(h.x,h.y,h.z),m.copy(v)}for(let w=0;w<=t;w++){const b=i+w*d*s,S=Math.sin(b),C=Math.cos(b);for(let x=0;x<=e.length-1;x++){f.x=e[x].x*S,f.y=e[x].y,f.z=e[x].x*C,a.push(f.x,f.y,f.z),p.x=w/t,p.y=x/(e.length-1),l.push(p.x,p.y);const _=r[3*x+0]*S,E=r[3*x+1],k=r[3*x+0]*C;c.push(_,E,k)}}for(let w=0;w<t;w++)for(let b=0;b<e.length-1;b++){const S=b+w*e.length,C=S,x=S+e.length,_=S+e.length+1,E=S+1;o.push(C,x,E),o.push(_,E,x)}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("uv",new mt(l,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.points,e.segments,e.phiStart,e.phiLength)}}class Fo extends Tc{constructor(e=1,t=1,i=4,s=8){const o=new Ay;o.absarc(0,-t/2,e,Math.PI*1.5,0),o.absarc(0,t/2,e,0,Math.PI*.5),super(o.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new Fo(e.radius,e.length,e.capSegments,e.radialSegments)}}class Us extends Pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const o=[],a=[],l=[],r=[],c=new P,d=new ue;a.push(0,0,0),l.push(0,0,1),r.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){const h=i+f/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),l.push(0,0,1),d.x=(a[p]/e+1)/2,d.y=(a[p+1]/e+1)/2,r.push(d.x,d.y)}for(let f=1;f<=t;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(r,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wt extends Pt{constructor(e=1,t=1,i=1,s=32,o=1,a=!1,l=0,r=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:l,thetaLength:r};const c=this;s=Math.floor(s),o=Math.floor(o);const d=[],f=[],p=[],h=[];let v=0;const m=[],u=i/2;let g=0;w(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(p,3)),this.setAttribute("uv",new mt(h,2));function w(){const S=new P,C=new P;let x=0;const _=(t-e)/i;for(let E=0;E<=o;E++){const k=[],y=E/o,M=y*(t-e)+e;for(let R=0;R<=s;R++){const N=R/s,U=N*r+l,L=Math.sin(U),D=Math.cos(U);C.x=M*L,C.y=-y*i+u,C.z=M*D,f.push(C.x,C.y,C.z),S.set(L,_,D).normalize(),p.push(S.x,S.y,S.z),h.push(N,1-y),k.push(v++)}m.push(k)}for(let E=0;E<s;E++)for(let k=0;k<o;k++){const y=m[k][E],M=m[k+1][E],R=m[k+1][E+1],N=m[k][E+1];e>0&&(d.push(y,M,N),x+=3),t>0&&(d.push(M,R,N),x+=3)}c.addGroup(g,x,0),g+=x}function b(S){const C=v,x=new ue,_=new P;let E=0;const k=S===!0?e:t,y=S===!0?1:-1;for(let R=1;R<=s;R++)f.push(0,u*y,0),p.push(0,y,0),h.push(.5,.5),v++;const M=v;for(let R=0;R<=s;R++){const U=R/s*r+l,L=Math.cos(U),D=Math.sin(U);_.x=k*D,_.y=u*y,_.z=k*L,f.push(_.x,_.y,_.z),p.push(0,y,0),x.x=L*.5+.5,x.y=D*.5*y+.5,h.push(x.x,x.y),v++}for(let R=0;R<s;R++){const N=C+R,U=M+R;S===!0?d.push(U,U+1,N):d.push(U+1,U,N),E+=3}c.addGroup(g,E,S===!0?1:2),g+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bo extends Wt{constructor(e=1,t=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(0,e,t,i,s,o,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l}}static fromJSON(e){return new Bo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ac extends Pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],a=[];l(s),c(i),d(),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(o.slice(),3)),this.setAttribute("uv",new mt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(w){const b=new P,S=new P,C=new P;for(let x=0;x<t.length;x+=3)h(t[x+0],b),h(t[x+1],S),h(t[x+2],C),r(b,S,C,w)}function r(w,b,S,C){const x=C+1,_=[];for(let E=0;E<=x;E++){_[E]=[];const k=w.clone().lerp(S,E/x),y=b.clone().lerp(S,E/x),M=x-E;for(let R=0;R<=M;R++)R===0&&E===x?_[E][R]=k:_[E][R]=k.clone().lerp(y,R/M)}for(let E=0;E<x;E++)for(let k=0;k<2*(x-E)-1;k++){const y=Math.floor(k/2);k%2===0?(p(_[E][y+1]),p(_[E+1][y]),p(_[E][y])):(p(_[E][y+1]),p(_[E+1][y+1]),p(_[E+1][y]))}}function c(w){const b=new P;for(let S=0;S<o.length;S+=3)b.x=o[S+0],b.y=o[S+1],b.z=o[S+2],b.normalize().multiplyScalar(w),o[S+0]=b.x,o[S+1]=b.y,o[S+2]=b.z}function d(){const w=new P;for(let b=0;b<o.length;b+=3){w.x=o[b+0],w.y=o[b+1],w.z=o[b+2];const S=u(w)/2/Math.PI+.5,C=g(w)/Math.PI+.5;a.push(S,1-C)}v(),f()}function f(){for(let w=0;w<a.length;w+=6){const b=a[w+0],S=a[w+2],C=a[w+4],x=Math.max(b,S,C),_=Math.min(b,S,C);x>.9&&_<.1&&(b<.2&&(a[w+0]+=1),S<.2&&(a[w+2]+=1),C<.2&&(a[w+4]+=1))}}function p(w){o.push(w.x,w.y,w.z)}function h(w,b){const S=w*3;b.x=e[S+0],b.y=e[S+1],b.z=e[S+2]}function v(){const w=new P,b=new P,S=new P,C=new P,x=new ue,_=new ue,E=new ue;for(let k=0,y=0;k<o.length;k+=9,y+=6){w.set(o[k+0],o[k+1],o[k+2]),b.set(o[k+3],o[k+4],o[k+5]),S.set(o[k+6],o[k+7],o[k+8]),x.set(a[y+0],a[y+1]),_.set(a[y+2],a[y+3]),E.set(a[y+4],a[y+5]),C.copy(w).add(b).add(S).divideScalar(3);const M=u(C);m(x,y+0,w,M),m(_,y+2,b,M),m(E,y+4,S,M)}}function m(w,b,S,C){C<0&&w.x===1&&(a[b]=w.x-1),S.x===0&&S.z===0&&(a[b]=C/2/Math.PI+.5)}function u(w){return Math.atan2(w.z,-w.x)}function g(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.vertices,e.indices,e.radius,e.details)}}class Qi extends Ac{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qi(e.radius,e.detail)}}class An extends Pt{constructor(e=1,t=32,i=16,s=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:o,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const r=Math.min(a+l,Math.PI);let c=0;const d=[],f=new P,p=new P,h=[],v=[],m=[],u=[];for(let g=0;g<=i;g++){const w=[],b=g/i;let S=0;g===0&&a===0?S=.5/t:g===i&&r===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const x=C/t;f.x=-e*Math.cos(s+x*o)*Math.sin(a+b*l),f.y=e*Math.cos(a+b*l),f.z=e*Math.sin(s+x*o)*Math.sin(a+b*l),v.push(f.x,f.y,f.z),p.copy(f).normalize(),m.push(p.x,p.y,p.z),u.push(x+S,1-b),w.push(c++)}d.push(w)}for(let g=0;g<i;g++)for(let w=0;w<t;w++){const b=d[g][w+1],S=d[g][w],C=d[g+1][w],x=d[g+1][w+1];(g!==0||a>0)&&h.push(b,S,x),(g!==i-1||r<Math.PI)&&h.push(S,C,x)}this.setIndex(h),this.setAttribute("position",new mt(v,3)),this.setAttribute("normal",new mt(m,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class is extends Pt{constructor(e=1,t=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const a=[],l=[],r=[],c=[],d=new P,f=new P,p=new P;for(let h=0;h<=i;h++)for(let v=0;v<=s;v++){const m=v/s*o,u=h/i*Math.PI*2;f.x=(e+t*Math.cos(u))*Math.cos(m),f.y=(e+t*Math.cos(u))*Math.sin(m),f.z=t*Math.sin(u),l.push(f.x,f.y,f.z),d.x=e*Math.cos(m),d.y=e*Math.sin(m),p.subVectors(f,d).normalize(),r.push(p.x,p.y,p.z),c.push(v/s),c.push(h/i)}for(let h=1;h<=i;h++)for(let v=1;v<=s;v++){const m=(s+1)*h+v-1,u=(s+1)*(h-1)+v-1,g=(s+1)*(h-1)+v,w=(s+1)*h+v;a.push(m,u,w),a.push(u,g,w)}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(r,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Cy extends Pi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ze(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zd,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Cc extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class gu extends Cc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Kr=new rt,td=new P,nd=new P;class vu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mc,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;td.setFromMatrixPosition(e.matrixWorld),t.position.copy(td),nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nd),t.updateMatrixWorld(),Kr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const id=new rt,uo=new P,jr=new P;class Ry extends vu{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),uo.setFromMatrixPosition(e.matrixWorld),i.position.copy(uo),jr.copy(i.position),jr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(jr),i.updateMatrixWorld(),s.makeTranslation(-uo.x,-uo.y,-uo.z),id.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id)}}class qa extends Cc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ry}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Py extends vu{constructor(){super(new Qd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yu extends Cc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Py}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ly{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=sd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function sd(){return performance.now()}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);let Fi=null;function Iy(){if(!Fi){const n=new Uint8Array([110,190,255]);Fi=new lu(n,3,1,ar),Fi.minFilter=Fi.magFilter=Qt,Fi.generateMipmaps=!1,Fi.needsUpdate=!0}return Fi}const Jr=new Map;function Y(n,e={}){var s,o,a,l,r,c;const t=[n,e.map?e.map.uuid:"",e.flat?"f":"",(s=e.opacity)!=null?s:"",(o=e.side)!=null?o:""].join("|");if(!e.unique&&Jr.has(t))return Jr.get(t);const i=new Cy({color:n,gradientMap:Iy(),map:e.map||null,emissive:(a=e.emissive)!=null?a:0,emissiveIntensity:(l=e.emissiveIntensity)!=null?l:1,transparent:e.opacity!=null&&e.opacity<1,opacity:(r=e.opacity)!=null?r:1,side:(c=e.side)!=null?c:li});return e.unique||Jr.set(t,i),i}const _u=new qs({color:1380380,side:en});function ky(n,e=.035){const t=n.geometry;t.boundingBox||t.computeBoundingBox();const i=new P,s=new P;t.boundingBox.getSize(i),t.boundingBox.getCenter(s);const o=n.scale,a=(r,c)=>r*c>1e-4?(r*c+2*e)/(r*c):1,l=new Ce(t,_u);return l.scale.set(a(i.x,Math.abs(o.x)),a(i.y,Math.abs(o.y)),a(i.z,Math.abs(o.z))),l.position.set(s.x*(1-l.scale.x),s.y*(1-l.scale.y),s.z*(1-l.scale.z)),l.castShadow=!1,l.receiveShadow=!1,l.userData.isOutline=!0,l.raycast=()=>{},n.add(l),l}function ne(n,e,t={}){var s,o,a;const i=new Ce(n,e);return t.scale&&i.scale.set(...t.scale),i.castShadow=(s=t.cast)!=null?s:!0,i.receiveShadow=(o=t.receive)!=null?o:!0,t.outline!==!1&&ky(i,(a=t.t)!=null?a:.035),i}const Tn=new Map;function js(n,e){const t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}function Js(n,e=[1,1]){const t=new du(n);return t.colorSpace=Yt,t.wrapS=t.wrapT=Ba,t.repeat.set(e[0],e[1]),t.anisotropy=4,t}const Zn="#1a1423",Dy=[{id:"circles",name:"Rings"},{id:"diamonds",name:"Diamonds"},{id:"waves",name:"Waves"},{id:"kente",name:"Kente"},{id:"leaves",name:"Leaves"}];function es(n,e,t,i="#fff3d6",s=[2,2]){const o=["ank",n,e,t,i,s.join("x")].join("|");if(Tn.has(o))return Tn.get(o);const a=256,[l,r]=js(a,a);r.fillStyle=e,r.fillRect(0,0,a,a);const c=(f,p,h,v)=>{for(const m of[-a,0,a])for(const u of[-a,0,a])r.beginPath(),r.arc(f+m,p+u,h,0,Math.PI*2),r.fillStyle=v,r.fill()};switch(n){case"circles":{const p=a/4;for(let h=0;h<4;h++)for(let v=0;v<4;v++){const m=v*p+p/2+(h%2?p/2:0),u=h*p+p/2;for(const[g,w]of[[27,Zn],[23,t],[16,i],[11,Zn],[6,t]])c(m,u,g,w)}for(let h=0;h<4;h++)for(let v=0;v<4;v++)c(v*p+(h%2?0:p/2)+p/2-p/2,h*p+4,4,i);break}case"diamonds":{for(let p=0;p<4;p++)for(let h=0;h<4;h++){const v=h*64+32,m=p*64+64/2;for(const[u,g]of[[30,Zn],[25,t],[15,i],[7,Zn]])r.beginPath(),r.moveTo(v,m-u),r.lineTo(v+u,m),r.lineTo(v,m+u),r.lineTo(v-u,m),r.closePath(),r.fillStyle=g,r.fill()}r.fillStyle=i;for(let p=0;p<=4;p++)for(let h=0;h<=4;h++)r.beginPath(),r.arc(h*64,p*64,5,0,7),r.fill();break}case"waves":{for(let f=0;f<4;f++){const p=f*64+32;r.lineCap="round";for(const[h,v,m]of[[18,Zn,0],[12,t,0],[4,i,0]]){r.beginPath();for(let u=0;u<=a;u+=4){const g=p+Math.sin(u/a*Math.PI*8)*12+m;u?r.lineTo(u,g):r.moveTo(u,g)}r.lineWidth=h,r.strokeStyle=v,r.stroke()}r.fillStyle=i;for(let h=0;h<8;h++)r.beginPath(),r.arc(h*32+16,p+28*(h%2?1:-1)*0+30,4,0,7),r.fill()}break}case"kente":{const f=[t,Zn,i,t,"#2a9d8f"];for(let p=0;p<4;p++)for(let h=0;h<4;h++){const v=h*64,m=p*64;for(let u=0;u<8;u++)r.fillStyle=f[u%f.length],(h+p)%2?r.fillRect(v+u*8,m,6,64):r.fillRect(v,m+u*8,64,6);r.strokeStyle=Zn,r.lineWidth=3,r.strokeRect(v+1.5,m+1.5,61,61)}break}case"leaves":default:{for(let f=0;f<4;f++)for(let p=0;p<4;p++){const h=p*64+32+(f%2?32:0),v=f*64+32;for(const m of[-a,0])r.save(),r.translate(h+m,v),r.rotate(((p+f)%2?1:-1)*Math.PI/4),r.beginPath(),r.ellipse(0,0,26,12,0,0,Math.PI*2),r.fillStyle=Zn,r.fill(),r.beginPath(),r.ellipse(0,0,22,8,0,0,Math.PI*2),r.fillStyle=t,r.fill(),r.beginPath(),r.moveTo(-20,0),r.lineTo(20,0),r.lineWidth=2.5,r.strokeStyle=Zn,r.stroke(),r.restore()}r.fillStyle=i;for(let f=0;f<4;f++)for(let p=0;p<4;p++)r.beginPath(),r.arc(p*64+(f%2,0),f*64+0,6,0,7),r.fill()}}const d=Js(l,s);return Tn.set(o,d),d}function an(n,e=8,t=!0,i=[1,1]){const s=["str",n.join(","),e,t,i.join("x")].join("|");if(Tn.has(s))return Tn.get(s);const o=128,[a,l]=js(o,o),r=o/e;for(let d=0;d<e;d++)l.fillStyle=n[d%n.length],t?l.fillRect(d*r,0,r+1,o):l.fillRect(0,d*r,o,r+1);const c=Js(a,i);return Tn.set(s,c),c}function od(n=8){const[e,t]=js(512,128);t.fillStyle="#5b6070",t.fillRect(0,0,512,128),t.fillStyle="rgba(255,255,255,0.05)";for(let s=0;s<60;s++)t.fillRect(Math.random()*512,Math.random()*128,18,3);t.fillStyle="#f6f2e8",t.fillRect(0,6,512,5),t.fillRect(0,117,512,5),t.fillStyle="#ffd23f";for(let s=0;s<512;s+=128)t.fillRect(s+16,58,80,12);return Js(e,[n,1])}function Da(n,{bg:e="#ffd23f",fg:t="#1a1423",w:i=512,h:s=128,border:o="#1a1423",sub:a=null,font:l="Trebuchet MS, Verdana, sans-serif"}={}){const r=["txt",n,e,t,i,s,a].join("|");if(Tn.has(r))return Tn.get(r);const[c,d]=js(i,s);d.fillStyle=e,d.fillRect(0,0,i,s),o&&(d.strokeStyle=o,d.lineWidth=Math.max(6,s*.06),d.strokeRect(d.lineWidth/2,d.lineWidth/2,i-d.lineWidth,s-d.lineWidth)),d.fillStyle=t,d.textAlign="center",d.textBaseline="middle";let f=a?s*.42:s*.6;for(d.font=`900 ${f}px ${l}`;d.measureText(n).width>i*.9&&f>8;)f-=2,d.font=`900 ${f}px ${l}`;if(d.fillText(n,i/2,a?s*.38:s*.54),a){let h=s*.22;for(d.font=`700 ${h}px ${l}`;d.measureText(a).width>i*.92&&h>8;)h-=1,d.font=`700 ${h}px ${l}`;d.fillText(a,i/2,s*.76)}const p=Js(c);return p.wrapS=p.wrapT=ni,Tn.set(r,p),p}function ad(n){const e="bub2|"+n;if(Tn.has(e))return Tn.get(e);const[t,i]=js(512,200),s=m=>`800 ${m}px Trebuchet MS, Verdana, sans-serif`;let o=40;i.font=s(o);let a=[n];if(i.measureText(n).width>440){const m=n.split(" ");let u=null;for(let g=1;g<m.length;g++){const w=m.slice(0,g).join(" "),b=m.slice(g).join(" "),S=Math.max(i.measureText(w).width,i.measureText(b).width);(!u||S<u[0])&&(u=[S,[w,b]])}u&&(a=u[1])}const l=()=>Math.max(...a.map(m=>i.measureText(m).width));for(;l()>450&&o>20;)o-=2,i.font=s(o);const r=Math.min(496,l()+48),c=a.length===1?92:150,d=(512-r)/2,f=182-c-4,p=32,h=f+c;i.beginPath(),i.moveTo(d+p,f),i.lineTo(d+r-p,f),i.quadraticCurveTo(d+r,f,d+r,f+p),i.lineTo(d+r,h-p),i.quadraticCurveTo(d+r,h,d+r-p,h),i.lineTo(276,h),i.lineTo(256,196),i.lineTo(238,h),i.lineTo(d+p,h),i.quadraticCurveTo(d,h,d,h-p),i.lineTo(d,f+p),i.quadraticCurveTo(d,f,d+p,f),i.closePath(),i.fillStyle="#fffdf5",i.fill(),i.lineWidth=7,i.strokeStyle="#1a1423",i.stroke(),i.fillStyle="#1a1423",i.textAlign="center",i.textBaseline="middle",a.forEach((m,u)=>i.fillText(m,256,f+c/2+(a.length===1?2:u?26:-26)));const v=Js(t);return v.wrapS=v.wrapT=ni,Tn.set(e,v),v}function Ny(){const[n,e]=js(128,128);e.fillStyle="#bfe6ff",e.fillRect(0,0,128,128),e.fillStyle="rgba(255,255,255,0.7)",e.beginPath(),e.moveTo(10,118),e.lineTo(60,10),e.lineTo(80,10),e.lineTo(30,118),e.fill(),e.fillStyle="#2b2d42";for(let i=0;i<5;i++)e.fillRect(8+i*26,0,6,128);return e.fillRect(0,60,128,6),Js(n)}const Rc=[{name:"Caramel",hex:"#d9a066"},{name:"Honey",hex:"#c68642"},{name:"Bronze",hex:"#a86b3c"},{name:"Cocoa",hex:"#8d5524"},{name:"Chestnut",hex:"#70401f"},{name:"Mahogany",hex:"#5a3218"},{name:"Ebony",hex:"#432513"},{name:"Midnight",hex:"#311b0f"}],cr=[{id:"lowcut",name:"Low Cut"},{id:"afro",name:"Afro"},{id:"braids",name:"Braids"},{id:"cornrows",name:"Cornrows"},{id:"gele",name:"Gele"},{id:"cap",name:"Face Cap"},{id:"bald",name:"Clean Shave"}],xu=[{id:"ankaraShirt",name:"Ankara Shirt"},{id:"ankaraDress",name:"Ankara Dress"},{id:"street",name:"Streetwear"},{id:"kaftan",name:"Kaftan"}],Ka=["#1b1210","#3b2416","#6b3e1f","#b5651d","#e2b04a","#7b3fa0","#e0457b"],Mu=["#ff6b35","#e71d36","#ffbe0b","#2ec4b6","#3a86ff","#8338ec","#06d6a0","#ff8fab","#f15bb5","#fdfcdc","#1d3557"],bu=["#ffd23f","#2ec4b6","#ff6b35","#fdfcdc","#06d6a0","#e71d36","#3a86ff","#1a1423"],wu=["#2b2d42","#3d5a80","#6b705c","#f4f1de","#9a031e","#264653","#e9c46a"],_i=(n,e=Math.random)=>n[Math.floor(e()*n.length)];function Su(){return{name:"Tunde",skin:Rc[3].hex,hair:"lowcut",hairColor:Ka[0],outfit:"ankaraShirt",pattern:"circles",clothColor:"#ff6b35",accentColor:"#2ec4b6",pantsColor:"#2b2d42"}}function Sn(n=Math.random){const e=_i(xu,n).id;let t=_i(cr,n).id;return{name:"NPC",skin:_i(Rc,n).hex,hair:t,hairColor:n()<.8?Ka[Math.floor(n()*2)]:_i(Ka,n),outfit:e,pattern:_i(["circles","diamonds","waves","kente","leaves"],n),clothColor:_i(Mu,n),accentColor:_i(bu,n),pantsColor:_i(wu,n)}}const Zr=new Map,Ai=(n,e)=>(Zr.has(n)||Zr.set(n,e()),Zr.get(n)),Vt=(n,e=20,t=14)=>Ai(`s${n}_${e}_${t}`,()=>new An(n,e,t)),Na=(n,e)=>Ai(`c${n}_${e}`,()=>new Fo(n,e,4,12)),As=(n,e,t,i=18)=>Ai(`y${n}_${e}_${t}_${i}`,()=>new Wt(n,e,t,i)),Zl=(n,e)=>Ai(`d${n}_${e}`,()=>new An(n,28,14,0,Math.PI*2,0,e)),Rs=(n,e,t=Math.PI*2)=>Ai(`t${n}_${e}_${t}`,()=>new is(n,e,8,28,t));function Ua(n,e){const t=new ze(n),i={};return t.getHSL(i,Yt),t.setHSL(i.h,i.s,Math.max(0,Math.min(1,i.l+e)),Yt),"#"+t.getHexString()}const ja=[1.06,.97,1];function fo(n,e=1.25,t=-.28,i=.495,s=.025){const o=ne(Zl(i,e),n,{scale:ja,t:s});return o.rotation.x=t,o}function Uy(n,e){const t=Y(n.hairColor),i=s=>Y("#ffffff",{map:es(n.pattern,n.accentColor,n.clothColor,"#fff3d6",s)});switch(n.hair){case"lowcut":e.add(fo(t,1.2,-.3));break;case"afro":{e.add(fo(t,1.3,-.25));const s=ne(Ai("afro",()=>{const o=new Qi(.6,1);return o.computeVertexNormals(),o}),Y(n.hairColor),{scale:[1.08,.92,1],t:.04});s.position.set(0,.2,-.2),e.add(s);break}case"braids":{e.add(fo(t,1.4,-.3));const s=Y("#ffd23f");for(let a=0;a<11;a++){const l=Tt.degToRad(115+a*13),r=new ht;r.position.set(Math.sin(l)*.43,.02,Math.cos(l)*.43),r.rotation.set(-Math.cos(l)*.25,0,Math.sin(l)*.25);const c=ne(Na(.04,.4),t,{t:.02});c.position.y=-.2,r.add(c);const d=ne(Vt(.05,10,8),s,{t:.015});d.position.y=-.44,r.add(d),e.add(r)}const o=ne(Vt(.16),t,{t:.03});o.position.set(0,.42,-.22),e.add(o);break}case"cornrows":{e.add(fo(t,1.25,-.32));const s=new ht;s.rotation.x=-.38;const o=Y(Ua(n.hairColor,.08));for(let a=-2;a<=2;a++){const l=a*.11*ja[0],r=Math.sqrt(.5*.5-l*l)*1,c=ne(Rs(+r.toFixed(3),.028,Math.PI),o,{t:.012,cast:!1});c.rotation.y=Math.PI/2,c.position.x=l,s.add(c)}e.add(s);break}case"gele":{const s=i([2,1]),o=ne(Zl(.53,1.45),s,{scale:[1.08,1.05,1.02],t:.03});o.rotation.x=-.2,o.position.y=.02,e.add(o);const a=ne(Rs(.49,.075),s,{scale:[1.08,1,1.02],t:.025});a.rotation.x=Math.PI/2-.3,a.position.set(0,.16,-.02),e.add(a);const l=i([1,1]);for(const c of[-1,1]){const d=ne(Vt(.3,16,12),l,{scale:[1.25,.75,.32],t:.03});d.position.set(.17*c,.5,-.12),d.rotation.set(-.35,.25*c,.55*c),e.add(d)}const r=ne(Vt(.14,14,10),l,{t:.025});r.position.set(0,.42,-.02),e.add(r);break}case"cap":{e.add(fo(t,1.35,-.3));const s=Y(n.accentColor==="#1a1423"?"#e71d36":n.accentColor),o=ne(Zl(.515,1.25),s,{scale:ja,t:.03});o.rotation.x=-.12,o.position.y=.03,e.add(o);const a=ne(As(.27,.27,.035,24),s,{scale:[1,1,.75],t:.025});a.position.set(0,.23,.43),a.rotation.x=.22,e.add(a);const l=ne(Vt(.04,8,6),s,{t:.015});l.position.set(0,.52,-.06),e.add(l);break}}}function cn(n={}){const e={...Su(),...n},t=new ht;t.name="chibi";const i=new ht;i.position.y=.03,t.add(i);const s=Y(e.skin),o=Y(Ua(e.skin,-.12)),l=e.outfit==="ankaraShirt"||e.outfit==="ankaraDress"?Y("#ffffff",{map:es(e.pattern,e.clothColor,e.accentColor,"#fff3d6",[3,1])}):Y(e.clothColor),r=Y(e.pantsColor),c=Y(e.outfit==="street"?"#f7f7f2":e.outfit==="kaftan"?"#5a3a22":"#2b2024"),d=Y(e.accentColor),f=[],p=e.outfit==="ankaraDress"?s:r;for(const _ of[-1,1]){const E=new ht;E.position.set(.115*_,.3,0);const k=ne(Na(.098,.13),p);k.position.y=-.135,E.add(k);const y=ne(Vt(.1,14,10),c,{scale:[1,.55,1.35]});y.position.set(0,-.265,.035),E.add(y),i.add(E),f.push(E)}const h=new ht;if(i.add(h),e.outfit==="kaftan"){const _=ne(As(.2,.31,.6,20),l);_.position.y=.37,h.add(_);const E=ne(As(.315,.315,.05,20),d,{t:.02});E.position.y=.09,h.add(E);const k=ne(Ai("emb",()=>new Ge(.08,.22,.02)),d,{t:.012});k.position.set(0,.56,.235),k.rotation.x=-.18,h.add(k)}else{const _=ne(As(.2,.27,.36,20),l);_.position.y=.48,h.add(_);const E=ne(Vt(.27,20,12),e.outfit==="ankaraDress"?l:r,{scale:[1,.55,.9]});E.position.y=.31,h.add(E)}const v=ne(Vt(.2,20,12),l,{scale:[1.12,.55,.95]});if(v.position.y=.66,h.add(v),e.outfit==="ankaraDress"){const _=ne(As(.24,.37,.28,22),Y("#ffffff",{map:es(e.pattern,e.clothColor,e.accentColor,"#fff3d6",[4,1])}));_.position.y=.24,h.add(_);const E=ne(As(.25,.25,.05,22),d,{t:.02});E.position.y=.39,h.add(E)}if(e.outfit==="street"){const _=ne(Rs(.17,.065),l,{t:.025});_.rotation.x=Math.PI/2+.5,_.position.set(0,.72,-.1),h.add(_);const E=ne(Ai("pocket",()=>new Ge(.26,.1,.04)),Y(Ua(e.clothColor,-.1)),{t:.015});E.position.set(0,.42,.24),E.rotation.x=-.18,h.add(E);const k=ne(Rs(.13,.014),Y("#ffd23f"),{t:.01,cast:!1});k.rotation.x=Math.PI/2-.55,k.position.set(0,.62,.07),h.add(k)}if(e.outfit==="ankaraShirt"){const _=ne(Rs(.13,.03),d,{t:.015});_.rotation.x=Math.PI/2-.3,_.position.set(0,.69,.02),h.add(_)}const m=[],u=e.outfit==="street"||e.outfit==="kaftan";for(const _ of[-1,1]){const E=new ht;E.position.set(.24*_,.64,0),E.rotation.z=.32*_;const k=ne(Na(.068,.16),u?l:s);if(k.position.y=-.12,E.add(k),!u){const M=ne(Vt(.09,14,10),l,{scale:[1,1.05,1]});M.position.y=-.05,E.add(M)}const y=ne(Vt(.074,14,10),s);y.position.y=-.255,E.add(y),i.add(E),m.push(E)}const g=new ht;g.position.y=1.08,i.add(g);const w=ne(Vt(.48,32,24),s,{scale:ja,t:.04});g.add(w);for(const _ of[-1,1]){const E=ne(Vt(.1,14,10),s,{scale:[.55,1,.8],t:.025});E.position.set(.515*_,-.07,-.02),g.add(E);const k=new Ce(Vt(.05,10,8),o);k.scale.set(.4,.9,.6),k.position.set(.55*_,-.07,-.01),g.add(k)}const b=Y("#1a1423"),S=new qs({color:16777215}),C=[];for(const _ of[-1,1]){const E=new ht;E.position.set(.17*_,-.04,.44),E.rotation.y=.36*_;const k=new Ce(Vt(.068,16,12),b);k.scale.set(.85,1.2,.5),E.add(k);const y=new Ce(Vt(.024,8,6),S);y.position.set(.022,.035,.03),E.add(y);const M=new Ce(Vt(.012,6,4),S);M.position.set(-.02,-.03,.03),E.add(M),g.add(E),C.push(E);const R=new Ce(Na(.012,.07),Y(Ua(e.hairColor,.02)));R.rotation.z=Math.PI/2+.12*_,R.position.set(.17*_,.1,.43),R.rotation.y=.36*_,g.add(R);const N=new Ce(Vt(.06,12,8),Y("#ff7a93",{opacity:.55}));N.scale.set(1,.55,.3),N.position.set(.28*_,-.16,.36),N.rotation.y=.6*_,g.add(N)}const x=new Ce(Rs(.045,.012,Math.PI),Y("#4a1f1a"));return x.position.set(0,-.2,.425),x.rotation.set(-.35,0,Math.PI),g.add(x),Uy(e,g),t.userData={cfg:e,rig:i,legs:f,arms:m,head:g,eyes:C,mouth:x,body:h,phase:Math.random()*6,speed:0,seed:Math.random()*100,blinkT:2+Math.random()*3,bubble:null,bubbleT:0},t}function hn(n,e,t,i){const s=n.userData;s.speed+=(t-s.speed)*Math.min(1,e*10);const o=s.speed;s.phase+=e*(5+6*Math.min(o,1.6));const a=Math.sin(s.phase)*.7*Math.min(o,1.3);s.sitting||(s.legs[0].rotation.x=a,s.legs[1].rotation.x=-a),s.arms[0].rotation.x=-a*.9,s.arms[1].rotation.x=a*.9;const l=Math.sin(i*2.2+s.seed)*.008*(1-Math.min(o,1));if(s.rig.position.y=.03+Math.abs(Math.sin(s.phase))*.06*Math.min(o,1.3)+l,s.rig.rotation.z=Math.sin(s.phase)*.04*Math.min(o,1),s.head.rotation.z=Math.sin(i*1.3+s.seed)*.05*(1-Math.min(o,1)),s.head.rotation.x=Math.sin(i*.9+s.seed)*.03,s.talk>0){s.talk-=e;const c=Math.min(1,s.talk*3);s.arms[1].rotation.x=(-.9+Math.sin(i*7+s.seed)*.35)*c,s.arms[0].rotation.x=Math.sin(i*5+1)*.2*c,s.head.rotation.x+=Math.sin(i*9)*.07*c,s.rig.position.y+=Math.abs(Math.sin(i*7))*.015*c}else s.listen&&(s.head.rotation.x+=Math.sin(i*3+s.seed)*.06,s.head.rotation.z+=.06);s.blinkT-=e;let r=1;s.blinkT<0&&(r=.12,s.blinkT<-.12&&(s.blinkT=2+Math.random()*4));for(const c of s.eyes)c.scale.y=r;s.bubble&&(s.bubbleT-=e,s.bubbleT<=0&&(s.bubble.visible=!1))}function Oy(n,e){const t=n.userData.mouth;e<30?(t.rotation.z=0,t.position.y=-.235):(t.rotation.z=Math.PI,t.position.y=-.2)}function oi(n){const e=n.userData;e.legs.forEach(t=>t.rotation.x=-1.45),e.sitting=!0}function me(n,e,t=3){const i=n.userData;i.bubble?i.bubble.material.map=ad(e):(i.bubble=new dy(new au({map:ad(e),depthTest:!1,transparent:!0})),i.bubble.scale.set(2.7,1.05,1),i.bubble.position.y=2.3,i.bubble.renderOrder=10,n.add(i.bubble)),i.bubble.visible=!0,i.bubbleT=t}const Qr=["Road close o! Turn back!","Oga, no pass here!","Road work dey go on","Where your particulars?","Shine your eye!"],Fe=(n,e,t,i,s,o)=>({id:n,o:e,r:t,f:i,x:s,ev:o}),Eu=[Fe("bbn",["You dey watch Big Brother Naija?","BBNaija house don hot again o!","Who you dey vote for BBN?"],["Ehn! That house get wahala every night","I no dey miss am, even with NEPA","Abeg, na data I dey use stream am"],["Dem evict my fav yesterday 😭","That housemate na snake for real","Na ₦100m dem dey find"],["Na cruise dem dey do 😂","BBN don scatter people relationship","I go vote 50 times today","Biggie no dey play!"]),Fe("bbl",["You see that babe wey go do BBL?","BBL don too common for Lagos o","My cousin wan go Turkey for BBL"],["Ehn? With which money?","Na Instagram dey cause am","Na boyfriend sponsor am abeg"],["She no fit even sit for Danfo 😂","E dey do like say na yam","Dem say na ₦4m"],["Natural na the best","Lagos na wa o 😂","Make she enjoy her money jare","I no talk anything o 🤐"]),Fe("crypto",["Bitcoin don go up again!","You still dey hold that your crypto?","My guy say make I enter one new coin"],["Which coin be that? Na scam!","I don lose ₦200k for crypto before 😩","Na moon e dey go abi?"],["E say e go 100x for one week","Na Telegram group e see am","He don buy Benz with am"],["Ponzi go soon crash am","Make I hold my small Naira","Buy the dip! 📈","HODL my brother 😂"]),Fe("davido",["Davido or Wizkid, who better?","Wizkid new album na fire!","OBO don drop another banger"],["Davido! 001 no get competition","Wizkid na the original Starboy","Burna Boy dey look una two 😂"],["Davido get energy for stage","Wizkid no dey shout but e sweet","Na streams we go use judge am"],["Una no go fight today 😂","Abeg play the song make we dance","FC dey fight for Twitter again","Both of dem na odogwu"]),Fe("asuu",["ASUU don strike again!","My sister still dey house, school close","You hear say ASUU wan call off strike?"],["This strike don pass eight months","Four years course don turn seven 😩","Government no send anybody"],["Students dey learn tailoring now","Lecturers sef no get salary","Dem go pay rent with promise?"],["Na so country dey go","Make dem open school abeg 🙏","Private university don jack up fees","Education na luxury now"]),Fe("traffic",["Third Mainland don lock since morning","Traffic for Ikorodu road no be here","I spend three hours for Ojota"],["Na Lagos traffic, e dey age person","Okada for don help you","BRT sef no move"],["One trailer fall for bridge","LASTMA dey everywhere today","Na police checkpoint cause am"],["Make I start dey trek 😂","Lagos na mad house","Traffic go kill person","Na ferry I go dey use"]),Fe("fuelq",["Fuel queue for Mega Fuel long o","I sleep for filling station yesterday","Black market dey sell fuel ₦1,500"],["Filling station dey hoard fuel","Na jerrycan people dey enjoy","Abeg which one get fuel?"],["Attendant say make I tip am","Dem dey sell only 10 litres","Keke people don increase fare"],["This country 😩","Na bicycle I go buy","Subsidy don go, wahala don come","Patience na virtue o"]),Fe("landlord",["My landlord don increase rent","Baba Ade wan see rent today","Landlord lock gate by 10pm!"],["Wetin e talk this time?","Lagos landlords no get heart","Na two years rent dem want"],['He say make I pay for "agreement"',"He even lock toilet","He dey call me 6am"],["Na their house we dey rent o 😂","Pay am make peace reign","Na why I wan build my own","Una go tire 😩"]),Fe("dating",["My babe say I no dey take am out","Na who dey date for this economy?","Una see my new boo for status?"],["Ehn, take am go Mama Put","Love no dey pay transport","She dey ask for weekly allowance?"],["She want shawarma every day","E don block me for WhatsApp","Na Danfo we go use for date"],["Love don cost 😂","Single life sweet pass","Shawarma don become engagement ring","Na God go give you good one"]),Fe("church",["Pastor preach fire yesterday!","You go come vigil this Friday?","Our church dey build new auditorium"],["Holy Ghost Fire na the best","Offering na the main gist 😂","I go come with my family"],["Pastor say na breakthrough season","Choir sing like angels","Dem do three offerings sha"],["Amen! 🙏","Make God answer us","Na God dey keep Lagos","I need that breakthrough"]),Fe("football",["Super Eagles go win AFCON!","Arsenal fans don start again","You watch the match yesterday?"],["Our defence na open gate","Osimhen na the man!","That referee na thief"],["VAR spoil everything","Na penalty dem give am","I bet ₦1,000 and lose"],["Next season na our season 😂","Ball na round","Make we watch for viewing center","Bet9ja go finish us"]),Fe("nollywood",["You watch that new Nollywood film?","Funke Akindele film don break record!","Nollywood don dey Netflix now"],["Nollywood don improve well well","That one long like Lagos traffic","The acting sweet me"],["Dem shoot am for Lekki","The juju scene na the best","Na three parts dem make am"],["Kai! Nollywood na wa 😂","I go watch am this weekend","Old Nollywood better","Sound effect dey do me laugh"]),Fe("japa",["Chinedu don japa go Canada","You don do your IELTS?","Everybody dey japa, na only me remain"],["Haa! E no tell anybody?","Na the way out o","UK don close visa sef"],["He post am for status ✈️","Na care work e dey do","He say snow don do am"],["Make God remember me too 😭","Japa no easy o","Nigeria go better","I go japa go my village 😂"]),Fe("inflation",["Bread price don change again!","Rice don reach ₦80k per bag","Dollar don reach how much?"],["Abeg no spoil my morning","Na slice by slice we go buy bread","Salary no dey increase sha"],["Tomato sef don cost","Garri don become luxury","Market woman dey cry too"],["We go survive 💪","This economy na wahala","Na God dey carry us","Make I start farm"]),Fe("areaboys",["Area boys dey collect money for junction","Agbero slap Keke man yesterday",'Dem dey ask for "settlement" every day'],["Dem no dey fear anybody","Na union dey back dem","Police self dey look"],["Dem collect ₦1,000 from me","Na Lucky be their oga","Dem dey smoke for junction"],["Make Chakam expose dem!","Avoid that side jare","Lagos na survival","Dem go meet their match"]),Fe("nepa",["NEPA don take light again","Light no reach our side since Tuesday","Band A, Band B, all na lie"],["My freezer don turn cupboard","Na gen dey save us","Prepaid meter dey chop money"],['DisCo say na "load shedding"',"Fuel for gen don cost","Mosquito no let me sleep"],["UP NEPA when? 😂","Solar na the future","Heat go kill person","Na candle we dey use"]),Fe("exams",["WAEC result don come out","JAMB portal crash again","My son dey prepare for exam"],["How e score?","Cyber cafe man dey collect ₦3,000","Expo dey fly for WhatsApp"],["He get 280 for JAMB!","Dem seize the result","Extra lesson don cost"],["Odogwu! 🎓","Education na key","Make he read hard","Exam malpractice no good"]),Fe("food",["Iya Basira jollof na the best","Suya for night na therapy","I wan chop amala today"],["Ghana jollof sweet pass","Abeg buy for me too","Amala with ewedu na life"],["Party jollof get smoky taste","Meat don small sha","Na ₦1,500 for one plate now"],["My belle dey sing 😋","Food na medicine","Make we go Mama Put","Hunger dey vex me"]),Fe("weather",["This sun no be here o","See as sky black, rain wan fall","Harmattan don start"],["Heat dey kill person","Make I remove my cloth from line","Lagos weather dey do anyhow"],["Gutter go overflow again","Na umbrella I forget","Sweat don soak my shirt"],["Na God dey control weather","Buy pure water for me 💧","Make NEPA bring light for fan","Rain na blessing"]),Fe("politics",["Election don dey near","Dem share rice for our area yesterday","Senator promise road again"],["Na every four years dem remember us","Rice no go pay my rent","I no go collect their money"],["Road wey dem promise since 2015","Dem dey share ₦5k for vote","Na godfather dey run am"],["Make we vote wisely","Politics na dirty game","Na same people every time","PVC na our power"]),Fe("rent",["Rent go due this Saturday","Two years rent upfront? Haba!","Agent fee no dey make sense"],["Agent dey collect 10% for showing door","Na face-me-I-face-you I fit afford","Lekki rent don pass ₦5m"],["I go borrow from LapoPay","Landlord say no pets, no pikin","Toilet na shared"],["LapoPay go chop you 😂","Lagos rent na scam","Make we move go Ikorodu","God go provide"]),Fe("lapopay",["LapoPay don dey call my mama!","You borrow from loan app?","Loan app dey send my picture to contacts"],["Na the interest dey kill person","Dem dey threaten like police","I don delete their app"],["Na 5% every day!","Agents come my shop","Dem say I be thief for status"],["Avoid loan app abeg","Pay make dem rest","Na wa for this hustle","Na shame dem dey use"]),Fe("owambe",["You dey go the owambe this Saturday?","Aso-ebi na ₦25k!","DJ for that party mad!"],["I go wear my old Ankara","Na for the jollof I dey go","Who dey celebrate?"],["Mama Tobi 60th","Dem dey spray dollar","Party go till morning"],["Takeaway go plenty 😂","Owambe na culture","I go dance till my leg pain","Make dem no forget small chops"]),Fe("phone",["My phone screen don crack","Recharge card don cost","Abeg you get charger?"],["Go GistMe Phones","Type-C or iPhone?","Data sef don cost"],["E dey charge ₦200","Na iPhone 15 I want","MTN don chop my data"],["Phone na life now","Na Tecno I dey use 😂","Make I off data","Battery na 1%"]),Fe("danfo",["Conductor no give me my change!","Danfo driver dey drive like mad man","Fare don increase to ₦300"],["How much he chop?","Na so dem be","Ask for your change first"],["He jump down for Ojuelegba","Danfo nearly enter gutter",'Dem say "no change"'],["Danfo na school of life 😂","Lagos transport na film","BRT better small","Enter with your change!"]),Fe("keke",["Keke man charge me ₦500 for short distance","Keke don ban for some roads","My cousin dey drive Keke now"],["Fuel price dey cause am","Agbero dey disturb dem","Keke money sweet sha"],["He make ₦15k yesterday","LASTMA seize one keke","Union dey collect ticket"],["Keke na the real Uber 😂","Hustle no dey finish","Make I buy one too","Shine your eye for road"]),Fe("market",["Market today no move at all","Customers dey price too much","Tomato scarce for market"],["Na economy","Small small dey fill basket","Na Mile 12 dem dey bring am"],["Una no dey give jara again?","I sell only small","Trailer don spoil for road"],["We go reach","God bless our hustle","Market na battlefield","Customer na king"]),Fe("gossip",["Shey you hear about Bisi and Emeka?","Na who that babe wey dey come Baba Ade house?","Una see wetin happen for compound?"],["No o, wetin happen?","Ehn?! Talk am!","I no dey for gossip o... continue 👀"],["Dem see dem for Yaba together","Na new wife!","Na police carry am"],["Na wa o 😂","Mouth wey no get lock","Tell me everything!","Shhh! E fit hear you"]),Fe("generator",["Neighbour gen no let me sleep","I-pass-my-neighbour don spoil","Fuel for gen don finish"],["Na noise pollution","Buy solar abeg","Mechanic go fix am"],["E dey shake my window","Smoke enter my room","Na ₦5k for repair"],["NEPA na our problem","Generator na Lagos anthem 😂","Quiet gen dey o","Make we pray for light"]),Fe("hustle",["How work today?","I dey find side hustle","I don start POS business"],["Small small, we dey push","POS money dey","Hustle na hustle"],["I do conductor work yesterday","Pure water sell well today","Customer no come at all"],["No food for lazy man!","Grind don dey pay","Slow and steady","Make God bless the work"]),Fe("scam",["One yahoo boy try scam my papa","Dem call me say I win ₦5m","Fake alert don plenty"],["Never send your OTP!","Na that BVN scam","Fake alert na wahala"],["Dem say make I pay ₦20k first","Na old people dem dey target","He use bank name"],["Shine your eye!","Chakam dem!","Yahoo no good","Report to police abeg"]),Fe("police",["Police stop me for checkpoint",'Dem ask for my "particulars"',"Officer say make I roger am"],["Dem collect anything?","Know your rights!","Na ₦200 or ₦1,000?"],["He search my phone","He collect ₦500","I tell am I be lawyer 😂"],["Police na your friend? 😂","Chakam them!","Na Nigeria be this","Make we record dem"]),Fe("wedding",["My sister wedding na December","Bride price don increase","You see that viral wedding?"],["Who dey sponsor am?","Na Owambe again!","Bride price na ₦2m?"],["Na traditional and white","Groom na Ibo, bride na Yoruba","Dem do am for Lekki"],["Love wins! 💍","Make God bless dem","Na aso-ebi again 😂","Wedding don become business"]),Fe("health",["Malaria don hold me since Monday","Pharmacy dey sell fake drug","Hospital card don cost"],["Go Alhaji Pharmacy","Drink agbo","Na mosquito net you need"],["Doctor dey strike","Paracetamol no work","Na typhoid sef"],["Health na wealth","Make you feel better","Agbo na the real drug 😂","Rest well abeg"]),Fe("tiktok",["You see that TikTok dance?","My video don go viral!","Everybody don turn content creator"],["Show me make I see","How many views?","Clout no dey pay rent"],["100k views!","Brand don DM me","Na skit I dey do"],["Odogwu! 📸","Use Clout app too","Na data e go cost","Make you no lose your shame 😂"]),Fe("school",["School fees don increase again","Teacher beat my pikin","PTA levy don come"],["Private school na business","Public school no get chair","Na who go pay?"],["Na ₦300k per term","Dem dey ask for textbooks","Na lesson teacher help am"],["Education na the key","Na God dey help parents","Make dem learn well","Na wa for this country"]),Fe("flood",["Gutter don overflow again","Water enter my room yesterday","Lekki flood na ocean"],["Rain don fall too much","Dem no clear drainage","Na canoe we go use"],["Car float for road","My shoe don spoil","Environmental sanitation no dey work"],["Lagos na Venice 😂","Clear your gutter!","Make we pray","Rain go soon stop"]),Fe("family",["My mama dey call me to come home","Village people dey find me 😂","My uncle want me to marry"],["Go visit them","Na pressure","Family na everything"],["They want grandchildren","Christmas go hot for village","Na money dem want"],["Family first","Village people no dey rest 😂","Send them small money","Respect your elders"]),Fe("lottery",["I play Baba Ijebu yesterday","Bet9ja almost cut my ticket","I don win ₦5k for bet"],["Na gambling o","You don win before?","Ticket cut for last match 😭"],["Na one game remain","I go use am buy rice","Na sure odds dem give me"],["Gambling no good","Na luck","Next time e go enter","Na lazy man investment 😂"]),Fe("mechanic",["My mechanic don spoil my car more","Okrika parts dey market","Car don break down for road"],["Mechanic village na wahala","Use original parts","Push am go side"],["He say na engine","Na ₦100k repair","He dey use my car run runs"],["Mechanic na scientist 😂","Buy Toyota abeg","Na Lagos road spoil am","Make you sell am"]),Fe("ramadan",["Ramadan don start","Sallah ram don cost!","Una go do Eid party?"],["Ramadan Kareem!","Ram na ₦300k now","Make we chop together"],["Neighbour bring jollof for me","Na unity we dey show","Fasting dey test patience"],["Barka da Sallah!","Love your neighbour","Na Lagos — we all be one","Send me meat o 😂"]),Fe("bargain",["Trader say ₦5k for small shoe","You sabi price for market?","Na half price I dey talk"],["Price am ₦2k!","Walk away, dem go call you back","Na my strategy be that"],["She call me back for ₦2,500","Na Balogun I buy am","I still dey suffer for am"],["Na skills be that 😂","Lagos market na exam","Never pay first price","Jara na must"]),Fe("rainnow",["See this rain o!","Rain don soak my cloth","Rain don stop Danfo"],["Make we hide for shade","Umbrella na life","Gutter go overflow"],["Road go flood now now","My shoe don wet","Nobody dey buy for market"],["Lagos rain no dey play 🌧️","Make e stop abeg","Na rain dey wash city","Cold go catch us"],"rain"),Fe("blackout",["NEPA don take light just now!","Light don go again!","Who get light for this street?"],["Nobody! Dem don carry am","Na gen I go on","My soup for freezer go spoil"],["DisCo dey play with us","Na transformer blow","Since morning e dey do like this"],["UP NEPA when? 😩","Heat go kill person","Na candle tonight","Light na luxury"],"blackout"),Fe("fuelhike",["Fuel price don jump again!","You see the new fuel price?","Fare don double because of fuel"],["Haba! Again?!",'Conductor go shout "no change"',"Gen fuel don cost"],["Na ₦1,500 per litre now","Keke don increase fare","Filling station dey hoard"],["This country 😩","Na trek I go dey do","Subsidy wahala","God help us"],"fuel")],Wi=n=>n[Math.floor(Math.random()*n.length)];function Fy(n={}){const e=[];for(const t of Eu){let i=t.ev?0:1;t.ev==="rain"&&n.rain&&(i=8),t.ev==="blackout"&&n.blackout&&(i=6),t.ev==="fuel"&&n.fuelHike&&(i=6),t.id==="nepa"&&n.blackout&&(i=3),(t.id==="flood"||t.id==="weather")&&n.rain&&(i=3),t.id==="fuelq"&&n.fuelHike&&(i=3);for(let s=0;s<i;s++)e.push(t)}return Wi(e)}function Ql(n=2,e={}){const t=Fy(e),i=[["A",Wi(t.o)],["B",Wi(t.r)],["A",Wi(t.f)],["B",Wi(t.x)]];return n>=3&&i.push(["C",Wi(t.x.filter(s=>s!==i[3][1]))]),Math.random()<.5&&i.push(["A",Wi(t.x.filter(s=>s!==i[3][1]))]),{topic:t.id,lines:i,t}}const bt=new Ge(1,1,1),By=new Wt(.5,.5,1,16),el=new Wt(.5,.5,1,8),Ma=new An(.5,14,10),po=new Bo(1,1,8),ba={minX:-88.6,maxX:88.4,minZ:-32.4,maxZ:32.4},ai=[{id:"oju",name:"Ojuelegba",x:-58},{id:"yaba",name:"Yaba Market",x:-6},{id:"cms",name:"CMS",x:52}],$n={home:new P(-30,0,-13.4),generator:new P(-20.6,0,-13.2),buka:new P(18,0,-12.6),stall:new P(-26,0,10.4),spawn:new P(-30,0,-11.5)};let tl=7;const Mn=()=>(tl=tl*16807%2147483647,(tl-1)/2147483646),Xe=(n,e)=>n+Mn()*(e-n),Bi=n=>n[Math.floor(Mn()*n.length)];class zy{constructor(e){this.scene=e,this.root=new ht,e.add(this.root),this.colliders=[],this.windowsLit=[],this.windowsDark=[],this.lampLights=[],this.vehicles=[],this.npcs=[],this.walkers=[],this.produce={tomato:[],pepper:[],onion:[],plantain:[]},this.mats={window:Y("#a8dcff",{unique:!0}),windowDark:Y("#7aa3c4",{unique:!0}),bulb:Y("#fff3b0",{unique:!0}),homeWin:Y("#a8dcff",{unique:!0}),homeBulb:Y("#fff3b0",{unique:!0}),headlight:Y("#fffbe0",{unique:!0})},this.build()}add(e,t=this.root){return t.add(e),e}box(e,t,i,s,o,a,l,r={}){var f;const c=typeof s=="string"?Y(s,r.matOpts):s,d=ne(bt,c,{scale:[e,t,i],t:(f=r.t)!=null?f:.06,outline:r.outline,cast:r.cast,receive:r.receive});return d.position.set(o,a,l),r.ry&&(d.rotation.y=r.ry),r.rx&&(d.rotation.x=r.rx),r.rz&&(d.rotation.z=r.rz),this.add(d,r.parent)}cyl(e,t,i,s,o,a,l={}){var d;const r=typeof i=="string"?Y(i):i,c=ne(l.low?el:By,r,{scale:[e*2,t,e*2],t:(d=l.t)!=null?d:.04,outline:l.outline,cast:l.cast});return c.position.set(s,o,a),this.add(c,l.parent)}collide(e,t,i,s){this.colliders.push({minX:e,maxX:t,minZ:i,maxZ:s})}sign(e,t,i,s,o,a,l=0,r={}){const c=Da(e,{w:512,h:Math.round(512*i/t),...r}),d=new ht;d.position.set(s,o,a),d.rotation.y=l;const f=ne(bt,Y(r.border||"#1a1423"),{scale:[t+.12,i+.12,.08],t:.03});d.add(f);const p=new Ce(new rn(t,i),Y("#ffffff",{map:c}));return p.position.z=.05,d.add(p),this.add(d)}build(){this.ground(),this.roads(),this.home(),this.buka(),this.market(),ai.forEach(e=>this.busStop(e)),this.fillers(),this.edges(),this.stage2(),this.lamps(),this.powerLines(),this.palms(),this.billboards(),this.finishInstances(),this.spawnVehicles(),this.spawnNPCs()}ground(){const e=new Ce(new rn(400,260),Y("#f0d3a0"));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.add(e);for(let t=0;t<24;t++){const i=new Ce(new Us(Xe(1.5,4),10),Y(Bi(["#b9d98a","#e6bf86","#a7cf7b"])));i.rotation.x=-Math.PI/2,i.position.set(Xe(-80,80),.01,Bi([-1,1])*Xe(9,30)),i.receiveShadow=!0,this.add(i)}}roads(){const e=new Ce(new rn(164,10),Y("#ffffff",{map:od(20)})),t=Y("#5b6070");for(const l of[-1,1]){const r=new Ce(new Us(7.2,32),t);r.rotation.x=-Math.PI/2,r.position.set(l*82,.018,0),r.receiveShadow=!0,this.add(r),this.cyl(1.4,.3,"#9be7a4",l*82,.15,0,{t:.04}),this.cyl(.08,2.2,"#4a4e5c",l*82,1.1,0,{t:.02}),this.sign("U-TURN",1.4,.5,l*82,2.3,0,l>0?-Math.PI/2:Math.PI/2,{bg:"#3a86ff",fg:"#fff"}),this.collide(l*82-1.4,l*82+1.4,-1.4,1.4);const c=new Ce(new Us(4.6,28),t);c.rotation.x=-Math.PI/2,c.position.set(0,.022,l*29),c.receiveShadow=!0,this.add(c)}e.rotation.x=-Math.PI/2,e.position.y=.02,e.receiveShadow=!0,this.add(e);for(const l of[-1,1]){const r=new Ce(new rn(24,8),Y("#ffffff",{map:od(3)}));r.rotation.x=-Math.PI/2,r.rotation.z=Math.PI/2,r.position.set(0,.025,l*17),r.receiveShadow=!0,this.add(r)}for(let l=0;l<6;l++)this.box(.7,.02,8,"#f6f2e8",8+l*1.2,.03,0,{outline:!1,cast:!1});const i=Y("#ffffff",{map:an(["#ffd23f","#1a1423"],2,!0,[40,1])}),s=Y("#ddd5c4"),o=[i,i,s,s,i,i],a=(l,r,c,d)=>{const f=new Ce(bt,o);f.scale.set(c,.18,d),f.position.set(l,.09,r),f.receiveShadow=!0,this.add(f)};for(const l of[-1,1])a(-39.5,l*6.25,69,2.5),a(39.5,l*6.25,69,2.5),a(l*5.25,-18,2.5,21),a(l*5.25,18,2.5,21);for(const l of[-1,1]){const r=new Ce(new rn(148,.5),Y("#3b3f4a"));r.rotation.x=-Math.PI/2,r.position.set(0,.015,l*7.75),this.add(r)}}window(e,t,i,s,o=1.1,a=1.2,l=!0){(l?this.windowsLit:this.windowsDark).push({x:e,y:t,z:i,ry:s,w:o,h:a})}home(){const a=new ht;this.add(a),this.box(17,3.4,7,"#f6dcb4",-30,3.4/2,-19),this.box(17+.05,1,7+.05,"#7fc8c0",-30,.5,-19,{t:.02,cast:!1});const l=Y("#ffffff",{map:an(["#d9773f","#b85c2c"],16,!0,[6,1])});for(const m of[-1,1]){const u=this.box(18,.16,4.4,l,-30,3.95,-19+m*1.95,{t:.04});u.rotation.x=m*.32}this.box(17+1.1,.25,.3,"#8a3b1d",-30,3.4+1.05,-19,{t:.03});const r=-19+7/2;this.box(2,2.6,.12,"#2d2a3a",-30,1.3,r+.02,{outline:!1});const c=Y("#ffffff",{map:es("kente","#e71d36","#ffd23f","#fff3d6",[1,2])});this.box(1.8,2.2,.05,c,-30,1.45,r+.1,{t:.02}),this.box(2.6,.18,1.6,"#c9b79c",-30,.09,r+.8,{t:.03}),this.box(2.8,.15,1.8,"#8a3b1d",-30,2.95,r+.75,{t:.03}).rotation.x=.12;const d=Y("#ffffff",{map:Ny(),unique:!0});this.homeBars=d;for(const m of[-36.5,-33.5,-26.5,-23.5]){this.box(1.4,1.4,.1,"#1a1423",m,1.9,r+.03,{outline:!1});const u=new Ce(new rn(1.2,1.2),d);u.position.set(m,1.9,r+.1),this.add(u)}this.homeWindowMeshes=[],this.sign("FACE-ME-I-FACE-YOU",4.2,.7,-30,3.05,r+.95,0,{bg:"#fdfcdc",sub:"No. 7 • Landlord: Baba Ade"}),this.sign("NO URINATING HERE",2.4,.5,-37,.9,r+.12,0,{bg:"#fff",fg:"#e71d36",border:"#e71d36"});const f=new Ce(new An(.15,10,8),this.mats.homeBulb);f.position.set(-30+1.2,2.7,r+.3),this.add(f),this.homeLight=new qa(16765562,0,12,1.6),this.homeLight.position.set(-30,2.6,r+2.2),this.add(this.homeLight),this.collide(-30-17/2,-30+17/2,-19-7/2,-19+7/2),this.cyl(.06,2.2,"#6b4f3a",-38,1.1,-12.2),this.cyl(.06,2.2,"#6b4f3a",-33,1.1,-12.2);const p=new jl(new Pt().setFromPoints([new P(-38,2.1,-12.2),new P(-35.5,1.95,-12.2),new P(-33,2.1,-12.2)]),new So({color:1709091}));this.add(p),["#e71d36","#2ec4b6","#ffbe0b","#8338ec"].forEach((m,u)=>{const g=Y("#ffffff",{map:es(["circles","waves","diamonds","leaves"][u],m,"#fff3d6","#1a1423",[1,1])});this.box(.8,.9,.04,g,-37.3+u*1.2,1.5,-12.2,{t:.02})});const h=-21.2,v=-14.6;this.box(1.2,.75,.8,"#e63946",h,.45,v,{t:.04}),this.box(.7,.4,.82,"#2b2d42",h-.15,.45,v,{t:.02}),this.box(1.3,.08,.9,"#1a1423",h,.06,v,{t:.02}),this.cyl(.05,.4,"#555",h+.45,.95,v-.2,{t:.02}),this.box(.45,.55,.3,"#ffd23f",h+1,.28,v+.1,{t:.03}),this.sign("I-PASS-MY-NEIGHBOUR",1.6,.32,h,1.15,v+.42,0,{bg:"#ffd23f"}),this.genSmoke=[];for(let m=0;m<4;m++){const u=new Ce(new An(.15,8,6),Y("#d6d6dc",{opacity:.8}));u.position.set(h+.45,1.2+m*.3,v-.2),u.visible=!1,this.add(u),this.genSmoke.push(u)}this.collide(h-.7,h+1.3,v-.5,v+.5),this.box(.6,.08,.6,"#e71d36",-27.6,.45,-14.2,{t:.02}),this.box(.6,.6,.08,"#e71d36",-27.6,.78,-14.5,{t:.02})}buka(){for(const[o,a]of[[-4,-2.5],[4,-2.5],[-4,2.5],[4,2.5]])this.cyl(.12,3.2,"#7a5536",18+o,1.6,-17+a,{low:!0});const i=Y("#ffffff",{map:an(["#9fb3c8","#7f93a8"],16,!0,[5,1])});this.box(9.4,.15,6.4,i,18,3.3,-17,{rx:-.08}),this.box(9,3,.2,"#ffcf99",18,1.5,-17-2.6,{}),this.box(5,1,1.2,"#8b5a3c",18,.5,-17-.6,{}),this.box(5.1,.1,1.3,"#e9c46a",18,1.04,-17-.6,{t:.02});const s=[["#ff7b29",-1.8],["#6a994e",-.6],["#c1121f",.6],["#f4d58d",1.8]];for(const[o,a]of s)this.cyl(.38,.45,"#c9ccd6",18+a,1.32,-17-.6,{t:.03}),this.cyl(.33,.04,o,18+a,1.56,-17-.6,{outline:!1,cast:!1});this.box(3.2,.12,.6,"#a0522d",16,.5,-17+1.6,{t:.03}),this.box(3.2,.12,.6,"#a0522d",18+2.2,.5,-17+1.6,{t:.03});for(const o of[-3.5,-.5,.7,3.7])this.box(.15,.5,.5,"#6b3e1f",18+o,.25,-17+1.6,{t:.02});this.sign("MAMA PUT",4.4,1,18,3.95,-14,0,{bg:"#e71d36",fg:"#fff",sub:"Iya Basira Buka • Food dey!"}),this.box(1.2,.7,.05,"#fdfcdc",18+3.2,2.1,-17-2.45,{t:.02}),this.collide(18-4.7,18+4.7,-17-2.8,-17-2.4),this.collide(18-2.6,18+2.6,-17-1.25,-17+.05),this.bukaLight=[18,3,-17+.5]}market(){const i=[an(["#e71d36","#fdfcdc"],8,!0),an(["#3a86ff","#ffd23f"],8,!0),an(["#06d6a0","#fdfcdc"],8,!0),an(["#ff6b35","#2b2d42"],8,!0)];[[0,0],[5,0],[10,0],[0,6],[5,6],[10,6],[-5,6]].forEach(([o,a],l)=>{const r=-26+o,c=12+a;this.box(2.6,.12,1.3,"#b07a4a",r,.9,c,{t:.03});for(const[p,h]of[[-1.1,-.5],[1.1,-.5],[-1.1,.5],[1.1,.5]])this.box(.1,.9,.1,"#6b4f3a",r+p,.45,c+h,{outline:!1});this.cyl(.05,2.6,"#555",r,1.3,c+.3,{t:.02});const d=ne(po,Y("#ffffff",{map:i[l%4]}),{scale:[2,.7,2],t:.04});d.position.set(r,2.75,c+.3),this.add(d);const f=["tomato","pepper","onion","plantain"];for(let p=0;p<3;p++){const h=f[(l+p)%4],v=r-.8+p*.8,m=c-.1,u=h==="plantain"?[[0,0,0],[.12,0,.1],[-.1,0,.12],[0,.1,.05]]:[[0,0,0],[.2,0,0],[-.2,0,0],[.1,0,.18],[-.1,0,.18],[0,.16,.08],[.1,.16,-.06],[-.1,.16,-.06],[0,.3,.02]];for(const g of u)this.produce[h].push([v+g[0],1.06+g[1],m+g[2]])}this.collide(r-1.35,r+1.35,c-.7,c+.7)}),this.sign("YOUR STALL",2.2,.5,-26,1.45,12-.68,Math.PI,{bg:"#06d6a0"}),this.sign("YOUR STALL",2.2,.5,-26,1.45,12-.68,0,{bg:"#06d6a0"}),this.sign("YABA MARKET",5,1,-21,4,12-1.6,0,{bg:"#ffd23f",sub:"Buy am sharp-sharp • No credit today"}),this.cyl(.1,4,"#555",-26+2.6,2,12-1.6,{t:.02}),this.cyl(.1,4,"#555",-26+7.4,2,12-1.6,{t:.02}),this.marketCenter=[-21,3,15]}busStop(e){const t=e.x,i=8.4;this.cyl(.08,2.6,"#2b2d42",t-1.8,1.3,i,{t:.02}),this.cyl(.08,2.6,"#2b2d42",t+1.8,1.3,i,{t:.02}),this.box(4.4,.15,1.8,"#3a86ff",t,2.65,i,{t:.04}),this.box(3.4,.1,.5,"#fdfcdc",t,.55,i+.2,{t:.03}),this.box(3.4,.6,.06,"#9fb3c8",t,1.4,i+.85,{t:.02}),this.sign(e.name.toUpperCase(),3.2,.6,t,3.15,i,0,{bg:"#ffd23f",sub:"BUS STOP • Danfo dey come"}),this.collide(t-2,t+2,i+.3,i+1)}building({x:e,z:t,w:i,d:s,h:o,color:a,face:l,sign:r,signBg:c="#fdfcdc",sub:d=null,awning:f=null,tank:p=!0}){const h=l>0?0:Math.PI;this.box(i,o,s,a,e,o/2,t,{t:.07}),this.box(i+.3,.45,s+.3,rd(a,-.15),e,o+.2,t,{t:.05});const v=t+l*(s/2+.05),m=Math.max(1,Math.floor(o/3)),u=Math.max(1,Math.floor(i/2.6));for(let g=0;g<m;g++){const w=1.6+g*3;for(let b=0;b<u;b++){const S=e-i/2+i/u*(b+.5);g===0&&r&&Math.abs(S-e)<1.4||this.window(S,w,v,h,1.1,1.3,Mn()<.72)}g>0&&Mn()<.45&&this.box(i*.5,.12,.8,rd(a,-.1),e+Xe(-i/4,i/4),w-.9,v+l*.4,{t:.03})}if(r&&(this.box(1.4,2.3,.1,"#3d2c2e",e,1.15,v,{outline:!1}),this.sign(r,Math.min(i-1,6),1,e,2.9,v+l*.1,h,{bg:c,sub:d})),f){const g=Y("#ffffff",{map:an(f,10,!0,[2,1])}),w=this.box(Math.min(i-.5,6.5),.1,1.4,g,e,2.25,v+l*.7,{t:.03});w.rotation.x=l*.3}p&&(this.cyl(.65,1.3,"#2b2d42",e+i/2-1.2,o+1,t-l*(s/2-1.2),{t:.04}),Mn()<.6&&this.box(.8,.5,.5,"#e5e5e5",e-i/2+1.2,o+.65,t,{t:.03})),this.collide(e-i/2,e+i/2,t-s/2,t+s/2)}fillers(){[{x:-62,z:-18,w:11,d:8,h:6.5,color:"#ff9eb5",face:1,sign:"GOD'S TIME IS BEST",sub:"Barbing Salon • Low cut ₦1,500",awning:["#e71d36","#fdfcdc"]},{x:-49,z:-18,w:9,d:8,h:9.5,color:"#7fd1c7",face:1},{x:-11,z:-18,w:10,d:8,h:6.5,color:"#ffe066",face:1,sign:"MAMA NKECHI",sub:"Provisions & Pure Water",awning:["#3a86ff","#fdfcdc"]},{x:34,z:-18,w:12,d:9,h:12.5,color:"#c3b1f0",face:1},{x:50,z:-18,w:10,d:8,h:6.5,color:"#9be7a4",face:1,sign:"GISTME PHONES",sub:"Repairs • Recharge card • Data",signBg:"#8338ec",awning:["#8338ec","#ffd23f"]},{x:65,z:-18,w:11,d:8,h:9.5,color:"#ffb38a",face:1},{x:-64,z:18,w:11,d:8,h:9.5,color:"#a0d8ff",face:-1},{x:-46,z:17,w:9,d:7,h:6.5,color:"#ffd6a5",face:-1,sign:"NO FOOD FOR LAZY MAN",sub:"Enterprises Ltd",awning:["#06d6a0","#fdfcdc"]},{x:13,z:18,w:11,d:8,h:6.5,color:"#fdfcdc",face:-1,sign:"HOLY GHOST FIRE",sub:"Assembly • Vigil every Friday",signBg:"#3a86ff"},{x:29,z:18,w:9,d:7,h:9.5,color:"#ff8fab",face:-1,sign:"ALHAJI PHARMACY",sub:"Paracetamol dey",signBg:"#06d6a0"},{x:46,z:18,w:12,d:9,h:6.5,color:"#b8f2e6",face:-1}].forEach(s=>this.building(s));for(let s=0;s<18;s++)for(const o of[-1,1]){const a=Xe(8,14),l=Xe(8,22),r=-84+s*9.6+Xe(-2,2),c=o*Xe(38,46),d=Bi(["#ffc8dd","#bde0fe","#cdb4db","#ffd6a5","#caffbf","#fdffb6","#a0c4ff"]);this.box(a,l,Xe(7,10),d,r,l/2,c,{t:.08,cast:!1});const f=Math.floor(l/3);for(let p=0;p<f;p++)for(let h=0;h<Math.floor(a/3);h++)this.window(r-a/2+1.5+h*3,1.6+p*3,c-o*4.5,o>0?Math.PI:0,1.1,1.3,Mn()<.6)}}lamps(){this.lampPositions=[];for(let t=-70;t<=70;t+=20)for(const i of[-1,1]){const s=t+(i>0?10:0),o=i*7.2;if(Math.abs(s)<7||s>76)continue;this.cyl(.08,5,"#4a4e5c",s,2.5,o,{t:.025,low:!0}),this.box(.1,.1,1.4,"#4a4e5c",s,4.95,o-i*.6,{t:.02}),this.box(.5,.18,.4,"#2b2d42",s,4.9,o-i*1.25,{t:.02});const a=new Ce(bt,this.mats.bulb);a.scale.set(.38,.06,.3),a.position.set(s,4.79,o-i*1.25),this.add(a),this.lampPositions.push([s,4.6,o-i*1.25])}const e=[[-30,4.2,-9],[18,4.5,-9],[-21,4.5,9],[-58,4.5,6],[-6,4.5,6],[52,4.5,6],[0,4.5,0]];for(const t of e){const i=new qa(16762219,0,18,1.4);i.position.set(...t),this.add(i),this.lampLights.push(i)}}powerLines(){const e=[],t=[];for(let s=-76;s<=76;s+=16)this.cyl(.13,7.2,"#7a5536",s,3.6,-8.1,{t:.03,low:!0}),this.box(1.6,.12,.12,"#7a5536",s,6.8,-8.1,{t:.02}),t.push(s);this.box(.8,1,.7,"#7d8597",-12,5.4,-8.1,{t:.03});for(let s=0;s<t.length-1;s++)for(const o of[-.7,0,.7]){const a=new P(t[s],6.85,-8.1+o*.01),l=new P(t[s+1],6.85,-8.1+o*.01),r=8;for(let c=0;c<r;c++){const d=c/r,f=(c+1)/r,p=a.clone().lerp(l,d),h=a.clone().lerp(l,f);p.x+=o,h.x+=o,p.z=-8.1+o*.3,h.z=p.z,p.y-=Math.sin(Math.PI*d)*.9,h.y-=Math.sin(Math.PI*f)*.9,e.push(p,h)}}const i=new Pt().setFromPoints(e);this.add(new cu(i,new So({color:1709091})))}palm(e,t,i=5){const s=Y("#9c6b3e");let o=e,a=0;const l=Xe(-.15,.15);for(let c=0;c<5;c++){const d=ne(el,s,{scale:[.36-c*.03,i/5+.05,.36-c*.03],t:.03});d.position.set(o,a+i/10,t),d.rotation.z=l,this.add(d),o-=Math.sin(l)*i/5,a+=i/5}const r=Y("#3bb273");for(let c=0;c<7;c++){const d=c/7*Math.PI*2,f=ne(po,r,{scale:[.35,2.6,.12],t:.03}),p=new ht;p.position.set(o,a,t),p.rotation.y=d,this.add(p),f.position.set(0,.2,1.1),f.rotation.x=Math.PI/2+.45,p.add(f)}this.add(ne(Ma,Y("#6b4f1d"),{scale:[.5,.5,.5],t:.02})).position.set(o,a-.1,t),this.collide(e-.3,e+.3,t-.3,t+.3)}palms(){[[-42,-11],[-16,-11],[26,-11],[42,-11],[-52,11],[-38,11],[8.5,11],[22,11],[38,11],[58,-11],[-70,-11],[70,11]].forEach(([e,t])=>this.palm(e,t,Xe(4.5,6.5)))}billboards(){const e=(t,i,s,o,a,l,r="#1a1423")=>(this.cyl(.18,7,"#4a4e5c",s-2.5,3.5,o,{low:!0}),this.cyl(.18,7,"#4a4e5c",s+2.5,3.5,o,{low:!0}),this.sign(t,7.5,3,s,8.3,o,a,{bg:l,fg:r,sub:i,w:768}));e("LapoPay","Quick loan sharp-sharp! *wahala dey",4,-26,0,"#06d6a0"),e("GistMe","Gist wey sweet pass suya 📱",-18,27,Math.PI,"#ffd23f")}finishInstances(){const e=new At,t=(s,o)=>{if(!s.length)return null;const a=new co(bt,o,s.length),l=new co(bt,Y("#2b2d42"),s.length);return s.forEach((r,c)=>{e.position.set(r.x,r.y,r.z),e.rotation.set(0,r.ry,0),e.scale.set(r.w,r.h,.08),e.translateZ(.06),e.updateMatrix(),a.setMatrixAt(c,e.matrix),e.position.set(r.x,r.y,r.z),e.scale.set(r.w+.22,r.h+.22,.06),e.updateMatrix(),l.setMatrixAt(c,e.matrix)}),this.add(a),this.add(l),a};t(this.windowsLit,this.mats.window),t(this.windowsDark,this.mats.windowDark);const i={tomato:["#e63946",.11,Ma],pepper:["#d00000",.08,Ma],onion:["#9d4edd",.12,Ma],plantain:["#ffd23f",.1,new Fo(.5,1.6,3,8)]};for(const[s,[o,a,l]]of Object.entries(i)){const r=this.produce[s];if(!r.length)continue;const c=new co(l,Y(o),r.length),d=new co(l,_u,r.length);r.forEach((f,p)=>{e.position.set(...f),e.rotation.set(0,p,s==="plantain"?Math.PI/2:0),e.scale.setScalar(a*2),e.updateMatrix(),c.setMatrixAt(p,e.matrix),e.scale.setScalar(a*2+.04),e.updateMatrix(),d.setMatrixAt(p,e.matrix)}),c.castShadow=!0,this.add(c),this.add(d)}}makeDanfo(){const e=new ht,t=Y("#ffc300"),i=ne(bt,t,{scale:[4.6,1.75,2],t:.06});i.position.y=1.25,e.add(i);const s=ne(bt,t,{scale:[.7,.9,1.9],t:.05});s.position.set(2.6,.82,0),e.add(s);for(const h of[.78,1.02]){const v=new Ce(bt,Y("#1a1423"));v.scale.set(4.62,.09,2.02),v.position.y=h,e.add(v)}const o=Y("#3d5a80"),a=new Ce(bt,o);a.scale.set(3.6,.6,2.03),a.position.set(-.3,1.65,0),e.add(a);const l=new Ce(bt,o);l.scale.set(.05,.6,1.7),l.position.set(2.31,1.65,0),e.add(l);const r=ne(bt,Y("#2b2d42"),{scale:[3.4,.08,1.7],t:.03});r.position.set(-.2,2.25,0),e.add(r);const c=new Ce(bt,this.mats.headlight);c.scale.set(.06,.2,1.5),c.position.set(2.96,.95,0),e.add(c);const d=ne(bt,Y("#d9d9d9"),{scale:[.15,.2,2],t:.02});d.position.set(2.98,.5,0),e.add(d);const f=new Wt(.4,.4,.3,14);for(const[h,v]of[[1.7,1],[1.7,-1],[-1.6,1],[-1.6,-1]]){const m=ne(f,Y("#1a1423"),{t:.02});m.rotation.x=Math.PI/2,m.position.set(h,.4,v),e.add(m)}const p=this.signMesh("OSHODI-OYINGBO",1.8,.32,"#fdfcdc");return p.position.set(2.32,2.08,0),p.rotation.y=Math.PI/2,e.add(p),e}signMesh(e,t,i,s){const o=Da(e,{w:512,h:Math.round(512*i/t),bg:s});return new Ce(new rn(t,i),Y("#ffffff",{map:o}))}makeKeke(e=!0){const t=new ht,i=Y("#ffd23f"),s=Y("#2a9d8f"),o=ne(bt,i,{scale:[2.3,.7,1.3],t:.05});o.position.set(0,.75,0),t.add(o);const a=ne(bt,s,{scale:[.6,1.1,.9],t:.04});a.position.set(1.15,1,0),t.add(a);const l=ne(bt,s,{scale:[2.3,.12,1.4],t:.04});l.position.set(-.1,2.15,0),t.add(l);for(const[p,h]of[[.95,.6],[.95,-.6],[-1.15,.6],[-1.15,-.6]]){const v=ne(bt,Y("#2b2d42"),{scale:[.08,1.1,.08],t:.02});v.position.set(p,1.6,h),t.add(v)}const r=ne(bt,Y("#3a2a20"),{scale:[.6,.5,1.1],t:.02});r.position.set(-.6,1.25,0),t.add(r);const c=new Wt(.3,.3,.2,12);for(const[p,h]of[[1.2,0],[-.8,.65],[-.8,-.65]]){const v=ne(c,Y("#1a1423"),{t:.02});v.rotation.x=Math.PI/2,v.position.set(p,.3,h),t.add(v)}const d=new Ce(bt,this.mats.headlight);if(d.scale.set(.05,.18,.4),d.position.set(1.46,1.1,0),t.add(d),!e)return t;const f=cn({...Sn(Mn),hair:"cap",outfit:"street"});return f.scale.setScalar(.8),f.position.set(.45,.95,0),f.rotation.y=Math.PI/2,oi(f),t.add(f),t.userData.driver=f,t}spawnVehicles(){const e=[{z:2.4,dir:1},{z:-2.4,dir:-1}];for(let t=0;t<5;t++){const i=e[t%2],s=this.makeDanfo();s.rotation.y=i.dir>0?0:Math.PI,s.position.set(-76+t*33,0,i.z),this.add(s),this.vehicles.push({mesh:s,type:"danfo",axis:"x",dir:i.dir,speed:Xe(8,11),base:Xe(8,11),wait:0,len:3,half:1.1,lastStop:null})}for(let t=0;t<3;t++){const i=t%2?1:-1,s=this.makeKeke();s.rotation.y=i>0?-Math.PI/2:Math.PI/2,s.position.set(i>0?-1.8:1.8,0,-24+t*21),this.add(s),this.vehicles.push({mesh:s,type:"keke",axis:"z",dir:i,speed:6,base:Xe(5.5,7),wait:0,len:1.5,half:.8})}}spawnNPCs(){const e=["Chinedu","Bisi","Emeka","Aisha","Segun","Ngozi","Femi","Zainab","Kunle","Amaka","Musa","Yetunde","Obinna","Halima"];for(let r=0;r<18;r++){const c=Sn(Mn);c.name=e[r%e.length]+(r>=e.length?" Jr":"");const d=cn(c);this.add(d);const f=r%2?1:-1,p={mesh:d,z:f*Xe(5.6,6.9),x:Xe(-70,70),tx:0,speed:Xe(1.3,2),wait:Xe(0,3),talkT:Xe(4,20),name:c.name,convCD:Xe(2,12),conv:null};p.tx=p.x,d.position.set(p.x,.18,p.z),this.walkers.push(p)}const t=(r,c,d,f,p=!1,h=null,v=null)=>{const m=cn({...Sn(Mn),...r});return m.position.set(c,v!=null?v:this.groundHeight(c,d),d),m.rotation.y=f,p&&oi(m),this.add(m),this.npcs.push({mesh:m,lines:h,talkT:Xe(3,12),name:r.name,cfg:r}),this.colliders.push({minX:c-.35,maxX:c+.35,minZ:d-.35,maxZ:d+.35}),m};t({name:"Iya Basira",hair:"gele",outfit:"ankaraDress",clothColor:"#e71d36",accentColor:"#ffd23f",pattern:"circles",skin:"#5a3218"},18,-18,0,!1,["Food dey!","Jollof hot!","Come chop o!"]),t({name:"Baba Ade",hair:"cap",outfit:"kaftan",clothColor:"#fdfcdc",accentColor:"#3a86ff",skin:"#432513"},-27.6,-14.1,.3,!0,["Rent na Saturday o!","My money nko?","How work?"],.2),t({name:"Mama Tomato",hair:"gele",outfit:"ankaraDress",clothColor:"#06d6a0",accentColor:"#ff6b35"},-21,13,Math.PI,!1,["Tomato dey!","Buy pepper!"]),t({name:"Iya Onions",hair:"braids",outfit:"ankaraDress",clothColor:"#8338ec",accentColor:"#ffd23f"},-16,13,Math.PI,!1,["Onions cheap!","Customer!"]),t({name:"Uncle Musa",hair:"cap",outfit:"kaftan",clothColor:"#2ec4b6",accentColor:"#fdfcdc"},-26,19,Math.PI,!1,["Plantain sweet!"]),t({name:"Conductor",hair:"lowcut",outfit:"street",clothColor:"#e71d36"},-6+2.4,7,-.4,!1,["Oshodi! Oshodi!","Enter with change!","CMS! CMS!"]),t({name:"Waiting",hair:"braids",outfit:"street",clothColor:"#3a86ff"},-58-.8,8.5,0,!0,["Danfo where?","This sun ehn"],.3),t({name:"Waiting2",hair:"afro",outfit:"ankaraShirt",clothColor:"#ffbe0b"},52+.6,8.5,0,!0,["I don late!"],.3);const i={hair:"cap",outfit:"street",clothColor:"#ffd23f",accentColor:"#7b1e3a",pantsColor:"#7b1e3a"},s={hair:"cap",outfit:"street",clothColor:"#1d2240",accentColor:"#1a1423",pantsColor:"#1a1423"};t({...i,name:"LASTMA"},87.6,3.2,-Math.PI/2,!1,Qr),t({...s,name:"Police"},87.6,-3.6,-Math.PI/2,!1,Qr),t({...i,name:"LASTMA 2"},2.8,32,Math.PI,!1,Qr),t({hair:"cap",outfit:"kaftan",clothColor:"#6b705c",accentColor:"#264653",name:"Mai Guard"},4.6,-32.2,0,!0,["Estate close!","Who you wan see?","No entry without gate pass"],.12),this.groups=[];const o=(r,c,d)=>{const f=d.map((p,h)=>{const v=h/d.length*Math.PI*2+.4,m=r+Math.sin(v)*.95,u=c+Math.cos(v)*.95,g=t({name:p},m,u,Math.atan2(r-m,c-u),!1,null),w=this.npcs[this.npcs.length-1];return w.group=!0,{mesh:g,name:p,conv:null}});this.groups.push({members:f,cd:Xe(1,5),conv:null})};o(-9,-11,["Uncle Sola","Bros Kelechi","Aunty Rose"]),o(14,11.6,["Deacon Paul","Sister Grace","Bro Tunji"]),o(-85.5,15,["Fisherman Ade","Kunle","Ibrahim"]);const a={hair:"lowcut",outfit:"street",clothColor:"#1d3557",pantsColor:"#2b2d42"},l=["Agbero Sunday","Agbero Lucky","Agbero Taiwo"];this.agberos=l.map((r,c)=>{const d=7.6+c*.9,f=-9.2+c%2*.8;return{mesh:t({...a,clothColor:["#1d3557","#e71d36","#6b705c"][c],name:r},d,f,Math.PI,!1,["Owo union!","Oya park!","Driver, bring ₦300!"]),name:r,conv:null}}),this.groups.push({members:this.agberos,cd:Xe(2,6),conv:null}),this.junior=t({name:"Junior (ball owner)",hair:"lowcut",outfit:"street",clothColor:"#06d6a0",pantsColor:"#f4f1de"},50.2,0+27.2,-Math.PI/2,!1,["Na my ball o!","Who wan play?","Oya come join!"]),t({name:"Fan 1",hair:"afro"},40,23.4,0,!1,["Goal!!","Pass am!"]),t({name:"Fan 2",hair:"braids"},41.2,23.4,0,!1,["Shoot!","Ehen!"])}neon(e,t,i,s,o,a,l=!1){const r=Da(e,{w:512,h:128,bg:"#1a1423",fg:a,border:a}),c=Y("#ffffff",{map:r,emissive:16777215,unique:!0});c.emissiveMap=r;const d=new Ce(new Ge(2.4,.6,.08),[Y("#1a1423"),Y("#1a1423"),Y("#1a1423"),Y("#1a1423"),c,c]);d.position.set(t,i,s),d.rotation.y=o,this.add(d),this.neons.push({mat:c,bad:l})}umbrella(e,t,i,s=1.6){this.cyl(.04,2.3,"#555",e,1.15,t,{t:.015,cast:!1});const o=ne(po,Y("#ffffff",{map:an(i,8,!0)}),{scale:[s,.55,s],t:.035});o.position.set(e,2.45,t),o.rotation.y=Mn()*3,this.add(o)}stage2(){this.neons=[],this.neon("OPEN 24/7",-11,4.2,-13.85,0,"#ff4fd8",!0),this.neon("GISTME",50,4.3,-13.85,0,"#4cf0ff"),this.neon("PHARMACY +",29,4.2,14.45,Math.PI,"#4dff88"),this.neon("BUKA",21.8,2.8,-14,0,"#ffd23f",!0),this.neon("MEGA FUEL",64,5.6,12.15,Math.PI,"#ff5252");const e=[["#ff6b9a","#fdfcdc"],["#06d6a0","#ffd23f"],["#3a86ff","#ff6b35"],["#8338ec","#ffbe0b"],["#e71d36","#2ec4b6"],["#ffbe0b","#1a1423"]];[[-46,8.9],[-2,-8.9],[24,8.9],[42,-8.9],[-64,-8.9],[58,8.9],[16,-9.3],[-15,8.9]].forEach(([c,d],f)=>{this.umbrella(c,d,e[f%e.length],1.5),this.box(1.2,.08,.7,"#b07a4a",c+.3,.8,d,{t:.02}),this.box(.08,.8,.08,"#6b4f3a",c+.3,.4,d,{outline:!1}),this.collide(c-.4,c+1,d-.4,d+.4)}),this.umbrella(13,-13.2,["#ffd23f","#e71d36"],1.8),this.umbrella(23,-13.2,["#06d6a0","#fdfcdc"],1.8);const t=64,i=15.5;this.box(11,.5,6.5,"#e71d36",t,4.8,i,{t:.05}),this.box(11.1,.18,6.6,"#fdfcdc",t,4.5,i,{t:.02,cast:!1});for(const[c,d]of[[-4.5,-2.5],[4.5,-2.5],[-4.5,2.5],[4.5,2.5]])this.box(.4,4.5,.4,"#fdfcdc",t+c,2.25,i+d,{t:.03}),this.collide(t+c-.25,t+c+.25,i+d-.25,i+d+.25);for(const c of[-2,2])this.box(.8,1.6,.6,"#fdfcdc",t+c,.8,i,{t:.04}),this.box(.6,.4,.62,"#e71d36",t+c,1.3,i,{t:.02}),this.box(.9,.2,.8,"#9fb3c8",t+c,.1,i,{t:.02}),this.collide(t+c-.5,t+c+.5,i-.4,i+.4);this.box(7,3.2,3.2,"#fdfcdc",t,1.6,i+5,{t:.05}),this.collide(t-3.5,t+3.5,i+3.4,i+6.6),this.sign("MEGA FUEL",4.8,1,t,3.4,i+3.35,Math.PI,{bg:"#e71d36",fg:"#fff",sub:"Petrol • Diesel • No fuel scarcity (today)"}),this.cyl(.12,6,"#4a4e5c",t-6.5,3,i-3,{t:.02}),this.sign("PETROL",1.8,.8,t-6.5,6.2,i-3,Math.PI,{bg:"#ffd23f",sub:"Price dey change"}),this.fuelSpot=new P(t,0,i-3.2),this.playerKeke=this.makeKeke(!1),this.playerKeke.position.set(-23.5,0,-10.6),this.playerKeke.rotation.y=Math.PI,this.add(this.playerKeke),this.sign("MY KEKE",1.4,.4,-23.5,2.6,-10.6,0,{bg:"#ffd23f"});const[s]=Hy(512,256),o=s.getContext("2d");o.fillStyle="#6e717c",o.fillRect(0,0,512,256),o.fillStyle="rgba(240,211,160,0.35)";for(let c=0;c<90;c++)o.fillRect(Math.random()*512,Math.random()*256,20+Math.random()*30,6);o.strokeStyle="rgba(255,255,255,0.75)",o.lineWidth=5,o.strokeRect(8,8,496,240),o.beginPath(),o.moveTo(256,8),o.lineTo(256,248),o.stroke(),o.beginPath(),o.arc(256,128,40,0,7),o.stroke();const a=new du(s);a.colorSpace=Yt;const l=new Ce(new rn(18,8),Y("#ffffff",{map:a}));l.rotation.x=-Math.PI/2,l.position.set(40,.03,28),l.receiveShadow=!0,this.add(l);const r=new Qi(.32,0);r.computeVertexNormals();for(const c of[31.2,48.8])for(const d of[26.6,29.4]){const f=ne(r,Y("#9a9aa6"),{t:.03});f.position.set(c,.25,d),this.add(f);const p=ne(r,Y("#b8b8c2"),{t:.03,scale:[.7,.7,.7]});p.position.set(c,.6,d),this.add(p)}this.sign("THE SET",2.4,.6,40,2.4,23.2,0,{bg:"#06d6a0",sub:"Winner stays • Ball na Junior own"}),this.cyl(.07,2.4,"#4a4e5c",38.6,1.2,23.2,{t:.02}),this.cyl(.07,2.4,"#4a4e5c",41.4,1.2,23.2,{t:.02}),this.box(4,.4,.6,"#c9b79c",40.6,.2,23.4,{t:.03}),this.pitch={minX:31.2,maxX:48.8,minZ:24.1,maxZ:31.9,goalMin:26.6,goalMax:29.4,cx:40,cz:28},this.ball=ne(new Qi(.17,1),Y("#fdfcdc"),{t:.025}),this.ball.position.set(40,.18,28),this.add(this.ball),this.checkpointSpot=new P(30,0,-9)}edges(){this.waterTex=an(["#48bfe3","#5ccfee","#48bfe3","#72d8f2"],8,!1,[30,60]);const e=new Ce(new rn(260,400),Y("#ffffff",{map:this.waterTex}));e.rotation.x=-Math.PI/2,e.position.set(-91.4-130,.04,0),this.add(e),this.box(1.2,.8,72,"#d6cdb9",-90.9,.4,0,{t:.04});const t=Y("#3a86ff");for(let m=-33;m<=33;m+=2.5)this.cyl(.06,1.15,"#2b2d42",-90.4,1.35,m,{t:.02,low:!0,cast:!1});for(const m of[1.15,1.85])this.box(.1,.1,66.5,t,-90.4,m,0,{t:.02,cast:!1});this.sign("LAGOS LAGOON",3.6,.9,-90.2,2.6,-14,Math.PI/2,{bg:"#2ec4b6",sub:"No swimming • No dumping refuse"}),this.cyl(.07,2.2,"#2b2d42",-90.2,1.1,-15.3,{t:.02}),this.cyl(.07,2.2,"#2b2d42",-90.2,1.1,-12.7,{t:.02}),this.collide(-140,-89.9,-60,60),this.canoes=[];for(const[m,u,g]of[[-100,-8,"#9c6b3e"],[-112,12,"#e71d36"],[-126,-22,"#3a86ff"]]){const w=new ht;w.position.set(m,.1,u),w.rotation.y=Xe(0,3),w.add(ne(bt,Y(g),{scale:[4.2,.5,1],t:.04}));const b=cn({...Sn(Mn),hair:"cap"});b.scale.setScalar(.8),b.position.y=.2,oi(b),w.add(b),this.add(w),this.canoes.push(w)}for(let m=0;m<12;m++){const u=Xe(10,30);this.box(Xe(6,12),u,8,Bi(["#bde0fe","#cdb4db","#ffc8dd","#a0c4ff"]),-175-Xe(0,10),u/2,-70+m*12,{t:.1,cast:!1})}const i=Y("#ffffff",{map:an(["#fdfcdc","#fdfcdc","#3a86ff"],3,!1,[1,1])});this.box(.3,3.4,70,i,91.3,1.7,0,{t:.05}),this.sign("ROAD CLOSED",4.4,1.3,91.1,2,0,-Math.PI/2,{bg:"#e71d36",fg:"#fff",sub:"Lagos State Road Works • Use alternative route"}),this.sign("SAFETY FIRST",3,.8,91.1,2.2,-16,-Math.PI/2,{bg:"#ffd23f",sub:"Hard hat area"}),this.sign("POST NO BILL",2.6,.7,91.1,1.6,18,-Math.PI/2,{bg:"#fdfcdc",fg:"#e71d36"}),this.collide(88.9,140,-60,60);const s=Y("#b8b8c2");for(let m=0;m<4;m++)if(this.box(12,.35,9,s,104,.2+m*3.3,9,{t:.05,cast:!1}),m<3)for(const[u,g]of[[-5.5,-4],[5.5,-4],[-5.5,4],[5.5,4],[0,-4],[0,4]])this.box(.45,3.3,.45,s,104+u,1.85+m*3.3,9+g,{t:.03,cast:!1});for(let m=0;m<7;m++)this.cyl(.06,3,"#7a5536",98+m*1.2,11.7,4.6,{low:!0,outline:!1,cast:!1});const o=Y("#ffbe0b");this.box(1,26,1,o,100,13,-10,{t:.05,cast:!1}),this.box(26,.8,.8,o,94,26.2,-10,{t:.05,cast:!1}),this.box(2,2,1.2,"#4a4e5c",104,25,-10,{t:.04,cast:!1}),this.box(1.2,1.2,1.2,"#2b2d42",98.5,26.6,-10,{t:.03,cast:!1});const a=new jl(new Pt().setFromPoints([new P(84,26,-10),new P(84,14,-10)]),new So({color:1709091}));this.add(a),this.box(1.6,.6,1.6,"#e71d36",84,13.6,-10,{t:.03,cast:!1});const l=ne(po,Y("#e9c46a"),{scale:[3,2,3],t:.05,cast:!1});l.position.set(97,1,-2),this.add(l);const r=Y("#ffffff",{map:an(["#e71d36","#fdfcdc"],8,!0,[2,1])}),c=(m,u,g=0)=>{const w=new ht;w.position.set(m,0,u),w.rotation.y=g,this.add(w);const b=ne(bt,r,{scale:[.15,.45,2.4],t:.03});b.position.y=1,w.add(b);const S=ne(bt,r,{scale:[.15,.3,2.4],t:.03});S.position.y=.45,w.add(S);for(const C of[-1,1]){const x=ne(bt,Y("#2b2d42"),{scale:[.5,1.2,.1],t:.02});x.position.set(0,.6,C*1.05),w.add(x)}},d=(m,u)=>{const g=ne(po,Y("#ff7b29"),{scale:[.3,.75,.3],t:.025});g.position.set(m,.38,u),this.add(g);const w=new Ce(el,Y("#fdfcdc"));w.scale.set(.38,.1,.38),w.position.set(m,.42,u),this.add(w)};for(let m=-8.4;m<=8.4;m+=2.6)c(89.3,m);for(const m of[-6,-2,2,6])d(86.4,m);this.box(184,4.4,.7,"#f3e9d2",0,2.2,-34.3,{t:.06}),this.box(184.4,.3,1,"#c9b79c",0,4.5,-34.3,{t:.03,cast:!1});const f=new is(.28,.035,4,10),p=new co(f,Y("#4a4e5c"),300),h=new At;for(let m=0;m<300;m++)h.position.set(-91+m*.61,4.95,-34.3),h.rotation.set(0,Math.PI/2,0),h.updateMatrix(),p.setMatrixAt(m,h.matrix);this.add(p),this.box(7,3.8,.35,"#2a9d8f",0,1.95,-33.85,{t:.05});for(let m=-3;m<=3;m++)this.box(.08,3.6,.4,"#1a1423",m*.95,1.95,-33.8,{outline:!1,cast:!1});this.sign("ROYAL GARDENS ESTATE",5.2,1,0,4.9,-33.6,0,{bg:"#fdfcdc",sub:"No Danfo • No Keke • No Okada • No Hawking"}),this.box(2.2,2.6,2.2,"#ffd6a5",6.2,1.3,-32.6,{t:.04}),this.box(2.6,.2,2.6,"#e71d36",6.2,2.7,-32.6,{t:.03}),this.collide(5.1,7.3,-33.7,-31.5),this.sign("POST NO BILL",2.6,.7,-40,2.4,-33.9,0,{bg:"#fdfcdc",fg:"#e71d36"}),this.sign("THIS HOUSE IS NOT FOR SALE",4.6,.7,40,2.4,-33.9,0,{bg:"#fdfcdc",fg:"#1a1423",border:"#e71d36"}),this.collide(-140,140,-60,-33.95);const v=Y("#ffffff",{map:an(["#9fb3c8","#7f93a8","#b5652d","#9fb3c8"],32,!0,[24,1])});this.box(184,3.2,.25,v,0,1.6,34.3,{t:.05});for(let m=-90;m<=90;m+=6)this.box(.2,3.4,.3,"#6b4f3a",m,1.7,34.1,{outline:!1,cast:!1});this.sign("BEWARE OF 419",3,.7,-50,2,34.1,Math.PI,{bg:"#ffd23f"}),this.sign("THIS LAND IS NOT FOR SALE",4.6,.7,30,2,34.1,Math.PI,{bg:"#fdfcdc",fg:"#e71d36"}),this.sign("ROAD CLOSED",3.6,1,0,2.3,33.6,Math.PI,{bg:"#e71d36",fg:"#fff",sub:"Drainage works • LASTMA dey watch"});for(let m=-3.9;m<=3.9;m+=2.6)c(m,33.2,Math.PI/2);for(const m of[-2.6,0,2.6])d(m,30.8+(m===0?.4:0));this.collide(-140,140,33.6,60)}updateConversations(e,t,i,s){var l;this.convs=this.convs||[];const o=this.walkers;for(let r=0;r<o.length;r++){const c=o[r];if(!(c.conv||c.convCD>0||c.busy))for(let d=r+1;d<o.length;d++){const f=o[d];if(f.conv||f.convCD>0||f.busy)continue;const p=f.mesh.position.x-c.mesh.position.x,h=f.mesh.position.z-c.mesh.position.z;if(Math.abs(h)<1.8&&Math.abs(p)<2.6){Mn()<.55?this.startConv([c,f],Ql(2,this.evCtx)):(c.convCD=Xe(4,10),f.convCD=Xe(4,10));break}}}for(const r of this.groups)r.cd-=e,!r.conv&&r.cd<=0&&(r.conv=this.startConv(r.members,Ql(r.members.length,this.evCtx)),r.conv.group=r);const a=(r,c,d,f)=>{let h=Math.atan2(c-r.position.x,d-r.position.z)-r.rotation.y;h=Math.atan2(Math.sin(h),Math.cos(h)),r.rotation.y+=h*Math.min(1,e*f)};for(let r=this.convs.length-1;r>=0;r--){const c=this.convs[r],d=c.members[c.speaker]||c.members[0];for(const v of c.members){if(v===d){const m=c.members.find(u=>u!==v);c.members.length===2&&a(v.mesh,m.mesh.position.x,m.mesh.position.z,6)}else a(v.mesh,d.mesh.position.x,d.mesh.position.z,5);v.mesh.userData.listen=v!==d}if(c.members.length===2){const[v,m]=c.members,u=m.mesh.position.x-v.mesh.position.x,g=Math.sign(u||1)*1.3,w=(u-g)*Math.min(1,e*2)*.5;v.mesh.position.x+=w,m.mesh.position.x-=w}if(c.paused||(c.t-=e,c.t>0))continue;if(c.i>=c.lines.length){for(const v of c.members)v.conv=null,v.mesh.userData.listen=!1,v.convCD!==void 0&&(v.convCD=Xe(20,45),v.wait=.4);c.group&&(c.group.conv=null,c.group.cd=Xe(6,14)),this.convs.splice(r,1);continue}const[f,p]=c.lines[c.i++];c.speaker=Math.min(c.members.length-1,"ABC".indexOf(f));const h=c.members[c.speaker];me(h.mesh,p,2.9),h.mesh.userData.talk=2.7,c.t=2.2+p.length*.035,Math.hypot(i.x-h.mesh.position.x,i.z-h.mesh.position.z)<7&&((l=s.onOverhear)==null||l.call(s,h.name,p))}}startConv(e,t){const i={members:e,lines:t.lines,i:0,t:.3,speaker:0,topic:t.topic,T:t.t};for(const s of e)s.conv=i;return this.convs=this.convs||[],this.convs.push(i),i}update(e,t,i,s){var o,a,l;this.evCtx=s.ev||{};for(const r of this.vehicles){const c=r.mesh;let d=r.base;if(r.wait>0&&(r.wait-=e,d=0),r.hold&&(d=0),r.type==="danfo"&&!r.turn&&(r.dir>0||r.conductor||r.ride))for(const v of ai)Math.abs(c.position.x-(v.x-r.dir))<.4&&r.lastStop!==v.id&&(r.wait=2.5,r.lastStop=v.id,r.atStop=v,r.ride?(o=this.onRideStop)==null||o.call(this,r,v):r.conductor?(a=this.onConductorStop)==null||a.call(this,r,v):Math.random()<.3&&((l=this.onDanfoNear)==null||l.call(this,r)),Math.random()<.6&&(this.bark={pos:c.position.clone(),text:Bi(["Oshodi! Oshodi!","Enter with your change!",`${v.name}! Wole!`])}));r.type==="keke"&&Math.abs(c.position.z+r.dir*4)<6.5&&Math.abs(c.position.z)>3&&this.vehicles.some(m=>m.type==="danfo"&&Math.abs(m.mesh.position.x)<7)&&(d=0);const f=r.turn?-1:r.axis==="x"?(i.x-c.position.x)*r.dir:(i.z-c.position.z)*r.dir,p=r.axis==="x"?Math.abs(i.z-c.position.z):Math.abs(i.x-c.position.x),h=f>0&&f<r.len+3&&p<r.half+.6;if(h&&(d=0),r.blockT=h&&!r.ride&&!r.conductor&&!r.mesh.userData.isPlayer?(r.blockT||0)+e:0,r.speed+=(d-r.speed)*Math.min(1,e*3),r.axis==="x"?r.turn||(c.position.x+=r.speed*r.dir*e,c.position.x*r.dir>=82&&(r.turn={phi:0,e:r.dir},c.position.x=82*r.dir)):r.turn||(c.position.z+=r.speed*r.dir*e,c.position.z*r.dir>=28&&(r.turn={phi:0,e:r.dir},c.position.z=28*r.dir)),r.turn){const v=r.turn,m=r.axis==="x"?2.4:1.8,u=v.e;v.phi=Math.min(Math.PI,v.phi+Math.max(r.speed,2.5)*.7/m*e);const g=c.position.x,w=c.position.z;r.axis==="x"?c.position.set(82*u+u*m*1.6*Math.sin(v.phi),c.position.y,u*m*Math.cos(v.phi)):c.position.set(-u*m*Math.cos(v.phi),c.position.y,28*u+u*m*1.4*Math.sin(v.phi));const b=c.position.x-g,S=c.position.z-w;b*b+S*S>1e-8&&(c.rotation.y=Math.atan2(-S,b)),v.phi>=Math.PI&&(r.turn=null,r.dir=-r.dir,r.lastStop=null,c.rotation.y=r.axis==="x"?r.dir>0?0:Math.PI:r.dir>0?-Math.PI/2:Math.PI/2)}c.position.y=Math.abs(Math.sin(t*9+c.id))*.04*Math.min(1,r.speed)}for(const r of this.walkers){const c=r.mesh;let d=0;if(r.convCD-=e,!r.busy){if(!r.conv)if(r.wait>0)r.wait-=e;else{const f=r.tx-c.position.x;if(Math.abs(f)<.2)r.wait=Xe(1,5),r.tx=Tt.clamp(c.position.x+Xe(-25,25),-73,73);else{const p=Math.sign(f)*r.speed*e;Math.hypot(i.x-c.position.x,i.z-c.position.z)<1&&Math.sign(i.x-c.position.x)===Math.sign(f)||(c.position.x+=p,d=1);const v=f>0?Math.PI/2:-Math.PI/2;c.rotation.y+=(v-c.rotation.y)*Math.min(1,e*8)}}}r.talkT-=e,r.talkT<0&&!r.conv&&!r.busy&&(r.talkT=Xe(10,25),Math.hypot(i.x-c.position.x,i.z-c.position.z)<18&&me(c,Bi(s.lines()),3)),hn(c,e,d,t)}this.updateConversations(e,t,i,s);for(const r of this.neons){const c=s.power?1:0,d=Math.random()<(r.bad?.08:.015)?.2:1;r.mat.emissiveIntensity=c*(.35+.9*(s.night||0))*d}for(const r of this.npcs)r.talkT-=e,r.talkT<0&&r.lines&&!r.group&&(r.talkT=Xe(8,18),Math.hypot(i.x-r.mesh.position.x,i.z-r.mesh.position.z)<14&&me(r.mesh,Bi(s.power?r.lines:[...r.lines,"NEPA don take light!"]),3)),hn(r.mesh,e,0,t);for(const r of this.vehicles)r.mesh.userData.driver&&hn(r.mesh.userData.driver,e,0,t);this.waterTex&&(this.waterTex.offset.y=t*.02%1),this.canoes&&this.canoes.forEach((r,c)=>{r.position.y=.08+Math.sin(t*1.5+c)*.06,r.rotation.z=Math.sin(t*1.2+c)*.04}),this.genSmoke.forEach((r,c)=>{if(r.visible=s.genRunning,s.genRunning){const d=(t*.8+c*.25)%1;r.position.y=1.15+d*1.4,r.scale.setScalar(.6+d*1.4),r.position.x=-20.75+Math.sin(t+c)*.1}})}resolve(e,t=.35){for(const i of this.colliders){const s=Math.max(i.minX,Math.min(e.x,i.maxX)),o=Math.max(i.minZ,Math.min(e.z,i.maxZ)),a=e.x-s,l=e.z-o,r=a*a+l*l;if(r<t*t)if(r>1e-8){const c=Math.sqrt(r);e.x=s+a/c*t,e.z=o+l/c*t}else{const c=[e.x-i.minX,i.maxX-e.x,e.z-i.minZ,i.maxZ-e.z],d=c.indexOf(Math.min(...c));d===0?e.x=i.minX-t:d===1?e.x=i.maxX+t:d===2?e.z=i.minZ-t:e.z=i.maxZ+t}}for(const i of this.vehicles){const s=i.mesh.position,o=i.axis==="x"?2.9:i.half,a=i.axis==="x"?1.05:1.4,l=Math.max(s.x-o,Math.min(e.x,s.x+o)),r=Math.max(s.z-a,Math.min(e.z,s.z+a)),c=e.x-l,d=e.z-r,f=c*c+d*d;if(f<t*t)if(f>1e-8){const p=Math.sqrt(f);e.x=l+c/p*t,e.z=r+d/p*t}else i.axis==="x"?e.z=e.z>s.z?s.z+a+t:s.z-a-t:e.x=e.x>s.x?s.x+o+t:s.x-o-t}for(const i of this.walkers){const s=e.x-i.mesh.position.x,o=e.z-i.mesh.position.z,a=Math.hypot(s,o);a<.7&&a>1e-4&&(e.x=i.mesh.position.x+s/a*.7,e.z=i.mesh.position.z+o/a*.7)}e.x=Math.max(ba.minX,Math.min(ba.maxX,e.x)),e.z=Math.max(ba.minZ,Math.min(ba.maxZ,e.z))}groundHeight(e,t){const i=Math.abs(t),s=Math.abs(e);return i>5&&i<7.5||s>4&&s<6.5&&i>7.5&&i<28.5?.18:0}}function Hy(n,e){const t=document.createElement("canvas");return t.width=n,t.height=e,[t]}function rd(n,e){const t=new ze(n),i={};return t.getHSL(i,Yt),t.setHSL(i.h,i.s,Math.max(0,Math.min(1,i.l+e)),Yt),"#"+t.getHexString()}const Ao=8e3,ld=2e3,Vy=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Wy=3,Tu=.05,Ja=[{id:"Lapo",min:-1/0,label:"Lapo",blurb:"Starting from zero, hustling with everything."},{id:"Hustler",min:5e4,label:"Small Hustler",blurb:"Money don small enter. No dull."},{id:"Odogwu",min:25e4,label:"Odogwu",blurb:"Big boy/Big girl things."}],nl=n=>Math.round(n/50)*50,Un=(n,e=0,t=100)=>Math.max(e,Math.min(t,n)),Es=n=>n[Math.floor(Math.random()*n.length)],J=n=>"₦"+Math.round(n).toLocaleString("en-NG");function $y(n){return Au({v:1,_new:!0,name:n,t:7*60,cash:4e3,loan:0,rentOwed:Ao,strikes:0,warnedSat:!1,hunger:70,energy:85,mood:65,fuel:0,genOn:!0,power:!0,fuelFactor:1,marketBonus:1,marketBonusUntil:0,feed:[],unread:0,nextNews:7*60+45,stats:{earned:0,sold:0,meals:0},evicted:!1,player:null})}function Au(n){const e={karma:0,dataMB:300,followers:0,sponsorsPaid:0,posts:[],messages:[],unreadMsg:0,loanDue:0,recovery:0,quietGen:!1,hasGen:!0,genComplaints:0,items:{radio:!0},kekeFuel:6,kekeTrips:0,stock:{water:0,gala:0},tollCD:0,agberoScared:0,npcRep:{},statsV2:{trips:0,hawked:0,shifts:0,deeds:0,chakam:0,matches:0,wins:0},nextDeed:0,nextChakam:0,rel:{},rain:!1,fuelHikeT:-1e9,churchDay:-1,statsV3:{rides:0,fights:0,beaten:0,talks:0,gists:0,haircuts:0,returned:0}};for(const[t,i]of Object.entries(e))n[t]===void 0&&(n[t]=JSON.parse(JSON.stringify(i)));return n.v===1&&!n._new&&!n.messages.length&&(n.messages.push({t:n.t,from:"GistMe",text:"Your GistMe don update! New apps: Messages, Clout, Chakam. Data bundle now needed for internet things 📶",read:!1,kind:"msg"}),n.unreadMsg=1,n._migrated=!0),n.v<3&&!n._new&&(n.messages.unshift({t:n.t,from:"GistMe",text:"Update 3 🎉 You fit now enter buildings, carry things, board Danfo, and gist with anybody (press E near them).",read:!1,kind:"msg"}),n.unreadMsg++,n._migrated=!0),delete n._new,n.v=3,n}const cd=[{id:"d",name:"Daily 100MB",mb:100,price:100},{id:"w",name:"Weekly 750MB",mb:750,price:500},{id:"m",name:"Monthly 2.5GB",mb:2500,price:1500}],hd=[[100,"Mama Nkechi Provisions",1e3],[300,"Iya Basira Buka",2500],[700,"GistMe Phones",5e3],[1500,"Silent Tiger Generators",1e4],[3e3,"Lagos Pure Water Co.",2e4]],xo=45e3,Gy=[["@LagosTraffic","Third Mainland Bridge don lock. Una wey dey go Island, carry your patience 🚗🚗🚗"],["@IyaBasira","Fresh jollof don land for buka! Party jollof, smoky bottom pot 🔥🍛"],["@Danfo_Oshodi",'Conductor say "No change" — but I know say you get ₦50 for that pocket 😤'],["@YabaLeftBoy","Who get charger? My phone don dey 2% since morning"],["@MamaNkechi","Pure water don land. Cold one dey ₦50. Sharp sharp!"],["@GistMeNews","Lagos weather: Sun go shine like say e get vendetta. Drink water 💧"],["@Area_Fada","Who wan buy original iPhone 16 for ₦40k? Na from abroad 👀 (Scam alert ⚠️)"],["@PastorFire","Vigil this Friday! Holy Ghost Fire Assembly. Come with your neighbour 🙏"],["@BarberSalon","God's Time Is Best Barbing Salon: low cut ₦1,500, no shaking 💈"],["@NaijaFootball","Super Eagles go win this one. I feel am for my spirit ⚽🦅"],["@Lagos_Landlord","Tenants wey dey owe, I dey watch una o. Saturday no far 👀"]];class Xy{constructor(e,t){this.s=Au(e),this.h=t,this.acc=0,this.collapsed=!1,e.feed.length||(this.post("@GistMeNews",`Welcome to GistMe, ${e.name}! You don land Lagos. Rent na ${J(Ao)} every Saturday. No dull o! 🏙️`,"info"),this.post("@LapoPay","Hustle never start? LapoPay fit borrow you up to ₦15,000 — interest small (5% every day 👀).","ad"))}get day(){return Math.floor(this.s.t/1440)+1}get min(){return this.s.t%1440}get hour(){return this.min/60}get weekday(){return Math.floor(this.s.t/1440)%7}get isNight(){const e=this.hour;return e<6||e>=19}get genRunning(){return!this.s.power&&this.s.genOn&&this.s.fuel>0&&(this.s.hasGen||this.s.quietGen)}get homePowered(){return this.s.power||this.genRunning}get danfoFare(){return nl(200*this.s.fuelFactor)}get fuelPrice(){return nl(1200*this.s.fuelFactor)}get netWorth(){return this.s.cash-this.s.loan-this.s.rentOwed}get kekeFuelPrice(){return nl(800*this.s.fuelFactor)}get tier(){let e=Ja[0];for(const t of Ja)this.netWorth>=t.min&&(e=t);return e}timeStr(e=this.s.t){const t=e%1440;return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}dayStr(e=this.s.t){return Vy[Math.floor(e/1440)%7]}rentCountdown(){let e=(6-this.weekday+7)%7;return e===0&&(e=7),e*1440-this.min-(this.weekday===6,0)}get statusPoints(){const e=this.s;return Math.max(0,Math.min(100,Math.round(this.netWorth/1500+e.karma*.4+e.followers/40)))}rel(e){return this.s.rel[e]||0}addRel(e,t){var s,o;if(!e)return 0;const i=Math.max(-100,Math.min(100,this.rel(e)+t));return this.s.rel[e]=i,(o=(s=this.h).onRel)==null||o.call(s,e,t,i),i}priceMul(e){return 1-Math.max(-50,Math.min(50,this.rel(e)))/250}addKarma(e,t){var i,s;this.s.karma=Math.max(-100,Math.min(100,this.s.karma+e)),(s=(i=this.h).onKarma)==null||s.call(i,e,t)}text(e,t,i="msg"){var s,o;this.s.messages.unshift({t:this.s.t,from:e,text:t,kind:i,read:!1}),this.s.messages.length>50&&(this.s.messages.length=50),this.s.unreadMsg++,(o=(s=this.h).onText)==null||o.call(s,{from:e,text:t,kind:i})}useData(e){return this.s.dataMB<e?!1:(this.s.dataMB-=e,!0)}buyData(e){return this.spend(e.price)?(this.s.dataMB+=e.mb,!0):!1}addFollowers(e){var i,s;const t=this.s;t.followers=Math.max(0,t.followers+e);for(let o=t.sponsorsPaid;o<hd.length;o++){const[a,l,r]=hd[o];if(t.followers<a)break;t.sponsorsPaid=o+1,this.earn(r,"sponsor"),this.text(l,`Hello ${t.name}! We see your Clout page (${a}+ followers 🔥). We don send ${J(r)} make you promote us small. Thank you!`,"good"),(s=(i=this.h).toast)==null||s.call(i,`Sponsorship! ${l} pay you ${J(r)} 💸`,"money")}}post(e,t,i="gist"){var s,o;this.s.feed.unshift({t:this.s.t,handle:e,text:t,kind:i}),this.s.feed.length>40&&(this.s.feed.length=40),this.s.unread++,(o=(s=this.h).onPost)==null||o.call(s,{handle:e,text:t,kind:i})}earn(e,t){var i,s;this.s.cash+=e,e>0&&(this.s.stats.earned+=e),(s=(i=this.h).onCash)==null||s.call(i,e,t)}spend(e){var t,i;return this.s.cash<e?!1:(this.s.cash-=e,(i=(t=this.h).onCash)==null||i.call(t,-e),!0)}update(e){for(this.acc+=e*Wy;this.acc>=1;)this.acc-=1,this.tick({})}advance(e,t={}){for(let i=0;i<e;i++)this.tick(t)}tick(e){var l,r;const t=this.s;if(t.evicted)return;t.t+=1;const i=c=>c/60,s=!!e.sleeping,o=!!e.working;t.hunger=Un(t.hunger-i(s?2:o?7:4.5)),s?t.energy=Un(t.energy+i(this.homePowered?13:8)):t.energy=Un(t.energy-i(o?9:3.5)-(t.hunger<=0?i(4):0));let a=62;t.hunger<25&&(a-=25),t.energy<20&&(a-=15),!t.power&&this.isNight&&!this.genRunning&&(a-=12),t.rentOwed>0&&this.weekday>=4&&(a-=8),t.loan>0&&(a-=5),t.mood=Un(t.mood+(a-t.mood)*i(.12)),s&&!this.homePowered&&(t.mood=Un(t.mood-i(1.5))),t.t%60===0&&this.onHour(e),t.t%1440===0&&this.onDay(),!s&&t.energy<=0&&!this.collapsed&&(this.collapsed=!0,(r=(l=this.h).onCollapse)==null||r.call(l))}onHour(e){var s,o,a,l,r,c,d,f,p,h;const t=this.s,i=Math.round(this.hour)%24;if(t.power){const v=this.isNight?.2:.1;Math.random()<v&&this.setPower(!1)}else Math.random()<.3&&this.setPower(!0);if(i===6&&(t.genComplaints=0),!t.rain&&Math.random()<.05?(t.rain=!0,(o=(s=this.h).onRain)==null||o.call(s,!0),this.post("@LagosWeather","Rain don start! 🌧️ Gutter go soon overflow. Carry umbrella o","alert")):t.rain&&Math.random()<.35&&(t.rain=!1,(l=(a=this.h).onRain)==null||l.call(a,!1)),i===0&&(t.dataMB=Math.max(0,t.dataMB-20)),this.genRunning&&(i>=22||i<6)&&!t.quietGen&&Math.random()<.55){t.genComplaints++;const v=Es(["Mama Chidi (Room 2)","Bros Femi (Room 5)","Iya Ibeji (Room 3)","Mr Okon (Room 6)"]),m=["Abeg off that your gen! Na 1am! 😡",'Your "I pass my neighbour" no let my pikin sleep o',"Smoke from your gen don enter my room!","If you no off that gen, I go report you to Baba Ade!"];this.text(v,Es(m),"bad"),t.genComplaints===3&&(t.cash=Math.max(0,t.cash-1e3),this.text("Baba Ade (Landlord)",`Neighbours don complain 3 times about your gen noise. I don fine you ${J(1e3)}. Buy quiet gen or sleep for heat!`,"bad"),(c=(r=this.h).toast)==null||c.call(r,`Landlord fine you ${J(1e3)} for gen noise! 🔊`,"bad"),this.addKarma(-3))}t.loan>0&&t.loanDue&&t.t>=t.loanDue&&i%6===0&&this.recoveryStep(),this.genRunning&&(t.fuel=Math.max(0,t.fuel-1),t.fuel===0&&((f=(d=this.h).toast)==null||f.call(d,"Generator don finish fuel! 😩","warn"),this.post("@You","Gen don off. Fuel don finish. Heat go kill me tonight 🥵","gist"))),t.marketBonusUntil&&t.t>=t.marketBonusUntil&&(t.marketBonus=1,t.marketBonusUntil=0),this.weekday===5&&i===12&&t.rentOwed>0&&!t.warnedSat&&(t.warnedSat=!0,this.post("@Baba_Ade_Landlord",`${t.name}, today na Saturday o. ${J(t.rentOwed)} rent dey due before midnight. I no wan hear story! 😠`,"alert"),(h=(p=this.h).toast)==null||h.call(p,`Rent due tonight: ${J(t.rentOwed)}!`,"bad")),t.t>=t.nextNews&&!e.sleeping&&(this.newsEvent(),t.nextNews=t.t+180+Math.floor(Math.random()*180))}setPower(e){var i,s,o,a;const t=this.s;t.power!==e&&(t.power=e,e?(this.post("@Everybody",Es(["UP NEPA!!! 💡🎉","Light don come! Make I quickly charge my phone 🔌","NEPA bring light! Everybody shout for street 😂"]),"good"),(a=(o=this.h).onPower)==null||a.call(o,!0)):(this.post("@NEPA_Updates",Es(["Due to technical fault, power supply don go. We regret any inconvenience 🙏","Grid don collapse again. Una get gen?","Load shedding in progress. Light go come back soon (maybe) 🕯️"]),"alert"),(s=(i=this.h).onPower)==null||s.call(i,!1)))}onDay(){var i,s,o,a;const e=this.s,t=this.weekday;if(t===6)if(e.rentOwed>0){if(e.strikes++,e.rentOwed+=ld,e.strikes>=2){e.evicted=!0,this.post("@Baba_Ade_Landlord","Pack your load commot for my house! I don give you enough chance. 🧳","alert"),(s=(i=this.h).onEvict)==null||s.call(i);return}this.post("@Baba_Ade_Landlord",`You no pay rent! I don add ${J(ld)} late fee. Next Saturday if you no pay, I go throw your load comot! ⚠️`,"alert"),(a=(o=this.h).onEvictionWarning)==null||a.call(o)}else this.post("@Baba_Ade_Landlord","Rent don enter. God bless you my pikin 🙏","good");if(t===0&&(e.rentOwed+=Ao,e.warnedSat=!1,this.post("@Baba_Ade_Landlord",`New week, new rent: ${J(Ao)} due Saturday. Hustle well!`,"info")),e.loan>0){const l=Math.ceil(e.loan*Tu);e.loan+=l,this.post("@LapoPay",`Daily interest: +${J(l)}. Your LapoPay balance na ${J(e.loan)}. Pay quick-quick before we call your contacts 📞`,"ad")}}newsEvent(){const e=this.s,t=[{w:3,run:()=>{var a,l;const o=Es([1.2,1.3,1.5]);e.fuelFactor=Math.min(3,+(e.fuelFactor*o).toFixed(2)),e.fuelHikeT=e.t,this.post("@GistMeNews",`BREAKING: Petrol price don jump again! ⛽ Danfo fare don rise to ${J(this.danfoFare)}. Gen fuel now ${J(this.fuelPrice)}. Conductors dey shout "No change!" 😩`,"alert"),(l=(a=this.h).toast)==null||l.call(a,`Fuel price hike! Danfo fare now ${J(this.danfoFare)}`,"bad")}},{w:e.fuelFactor>1.1?1.5:0,run:()=>{e.fuelFactor=Math.max(1,+(e.fuelFactor*.85).toFixed(2)),this.post("@GistMeNews",`Petrol price don small drop. Danfo fare now ${J(this.danfoFare)}. We thank God 🙏`,"good")}},{w:2,run:()=>{var o,a;e.marketBonus=1.5,e.marketBonusUntil=e.t+1440,this.post("@Mile12Market","Tomato scarcity for Mile 12! 🍅 Prices up 50% for next 24 hours. Market people, una time don reach!","good"),(a=(o=this.h).toast)==null||a.call(o,"Market prices up 50% today! 🍅","good")}},{w:e.cash>400?1:0,run:()=>{var o,a;e.cash-=200,e.mood=Un(e.mood-6),this.post("@You",'Agbero collect ₦200 "owo ile" from me for junction. E pain me but wetin I go do? 😤',"alert"),(a=(o=this.h).toast)==null||a.call(o,"Agbero collect ₦200 from you 😤","bad")}},{w:1,run:()=>{var o,a;e.hunger=Un(e.hunger+15),e.mood=Un(e.mood+10),this.post("@AdeniranStreet","Owambe for street! 🎉 Dem share small chops and asun — you collect your own. Belle don sweet!","good"),(a=(o=this.h).toast)==null||a.call(o,"Owambe small chops! +Belle +Mood","good")}},{w:1,run:()=>{e.mood=Un(e.mood-5),this.post("@LagosWeather","Rain don fall! 🌧️ Gutter don overflow for Ojuelegba. Traffic for Ikorodu Road na 3 hours.","info")}},{w:1,run:()=>{e.mood=Un(e.mood+8),this.post("@GistMeTrends",`${e.name} Ankara fit don trend for GistMe! 🔥 312 likes. Odogwu!`,"good")}},{w:1,run:()=>this.post("@MinistryOfPower","Government promise 24 hours light from next week. 💡 Lagos people: 😂😂😂","info")},{w:1,run:()=>this.post("@NairaWatch","Naira don fall again for parallel market 📉. Mama Nkechi don increase bread price by ₦100.","info")},{w:3,run:()=>{const[o,a]=Es(Gy);this.post(o,a,"gist")}}],i=t.reduce((o,a)=>o+a.w,0);let s=Math.random()*i;for(const o of t)if(s-=o.w,s<=0){o.run();break}}recoveryStep(){var t,i,s,o;const e=this.s;e.recovery++,e.recovery===1?this.text("LapoPay Recovery",`Dear ${e.name}, your repayment of ${J(e.loan)} don pass due date. Pay now to avoid "further action" 🙂`,"bad"):e.recovery===2?(this.text("LapoPay Recovery","We don call you 3 times. You no pick. We go soon contact your family and friends 📞","bad"),(i=(t=this.h).onRecoveryCall)==null||i.call(t)):e.recovery>=3&&(this.text("LapoPay Recovery","Our field agents dey come meet you NOW. 🕶️","bad"),(o=(s=this.h).onRecoveryVisit)==null||o.call(s))}borrow(e){const t=this.s;return t.loan+e>15e3?!1:((!t.loanDue||t.loan===0)&&(t.loanDue=t.t+3*1440),t.loan+=Math.round(e*1.1),this.earn(e,"LapoPay loan"),this.post("@LapoPay",`Congrats! ${J(e)} don land your wallet. (10% processing fee added — na small thing 😅)`,"ad"),!0)}repay(e){const t=this.s;return e=Math.min(e,t.loan,t.cash),e<=0?0:(t.cash-=e,t.loan-=e,(e>=1e3||t.loan===0)&&(t.loanDue=t.t+3*1440,t.recovery=0),t.loan===0&&(t.loanDue=0,this.addKarma(2)),t.loan===0&&this.post("@LapoPay","Loan cleared! You be correct customer 👏 Come borrow again anytime.","ad"),e)}payRent(e){const t=this.s;return e=Math.min(e,t.rentOwed,t.cash),e<=0?0:(t.cash-=e,t.rentOwed-=e,t.rentOwed===0&&(t.strikes=0,this.post("@Baba_Ade_Landlord","Rent don complete. Correct tenant! 🙏","good")),e)}buyFuel(){return!Yy(this.s)||!this.spend(this.fuelPrice)?!1:(this.s.fuel=Math.min(24,this.s.fuel+5),!0)}}const Yy=n=>n.hasGen||n.quietGen;class qy{constructor(){this.muted=localStorage.getItem("wahala.muted")==="1",this.radioOn=!1,this.ctx=null,this.loops={}}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.muted?0:.8,this.master.connect(t.destination);const i=t.sampleRate*2,s=t.createBuffer(1,i,t.sampleRate),o=s.getChannelData(0);for(let a=0;a<i;a++)o[a]=Math.random()*2-1;this.noiseBuf=s,this.loops.gen=this.makeLoop(()=>{const a=t.createGain();a.gain.value=0;const l=t.createOscillator();l.type="sawtooth",l.frequency.value=52;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=260;const c=t.createOscillator();c.frequency.value=11;const d=t.createGain();d.gain.value=.4;const f=t.createGain();f.gain.value=.6,c.connect(d),d.connect(f.gain),l.connect(r),r.connect(f),f.connect(a),l.start(),c.start();const p=this.noise(),h=t.createBiquadFilter();h.type="bandpass",h.frequency.value=900,h.Q.value=.8;const v=t.createGain();return v.gain.value=.12,p.connect(h),h.connect(v),v.connect(a),a.connect(this.master),a}),this.loops.crowd=this.makeLoop(()=>{const a=t.createGain();a.gain.value=0;const l=this.noise(),r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=700,r.Q.value=.6;const c=t.createOscillator();c.frequency.value=.7;const d=t.createGain();return d.gain.value=300,c.connect(d),d.connect(r.frequency),c.start(),l.connect(r),r.connect(a),a.connect(this.master),a}),this.loops.engine=this.makeLoop(()=>{const a=t.createGain();a.gain.value=0;const l=t.createOscillator();l.type="square",l.frequency.value=38;const r=t.createBiquadFilter();return r.type="lowpass",r.frequency.value=420,l.connect(r),r.connect(a),a.connect(this.master),l.start(),a.osc=l,a}),this.radioGain=t.createGain(),this.radioGain.gain.value=0,this.radioGain.connect(this.master),this.nextBeat=0,this.step=0}makeLoop(e){return e()}noise(){const e=this.ctx.createBufferSource();return e.buffer=this.noiseBuf,e.loop=!0,e.start(),e}setMuted(e){this.muted=e,localStorage.setItem("wahala.muted",e?"1":"0"),this.master&&this.master.gain.setTargetAtTime(e?0:.8,this.ctx.currentTime,.05)}level(e,t){const i=this.loops[e];i&&i.gain.setTargetAtTime(Math.max(0,t),this.ctx.currentTime,.15)}engineRate(e){const t=this.loops.engine;t&&t.osc.frequency.setTargetAtTime(34+Math.abs(e)*5,this.ctx.currentTime,.1)}env(e,t,i,s,o){e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(s,t+i),e.gain.exponentialRampToValueAtTime(1e-4,t+o)}tone(e,t=.15,i="sine",s=.2,o=0,a=0){if(!this.ctx)return;const l=this.ctx,r=l.currentTime+o,c=l.createOscillator(),d=l.createGain();c.type=i,c.frequency.setValueAtTime(e,r),a&&c.frequency.exponentialRampToValueAtTime(Math.max(20,e+a),r+t),this.env(d,r,.01,s,t),c.connect(d),d.connect(this.master),c.start(r),c.stop(r+t+.05)}click(){this.tone(900,.05,"triangle",.08)}cash(){this.tone(1320,.08,"square",.07),this.tone(1760,.18,"square",.07,.07)}ping(){this.tone(880,.1,"sine",.15),this.tone(1175,.16,"sine",.15,.1)}bad(){this.tone(300,.2,"sawtooth",.08,0,-120)}ring(){for(let e=0;e<3;e++)this.tone(740,.12,"square",.06,e*.5),this.tone(988,.12,"square",.06,e*.5+.14)}horn(e=.18){this.tone(415,.45,"square",e*.5),this.tone(523,.45,"square",e*.5),this.tone(415,.25,"square",e*.5,.55),this.tone(523,.25,"square",e*.5,.55)}conductor(e=.25){if(!this.ctx)return;const t=this.ctx,i=[[300,.18],[420,.14],[360,.24]];for(let s=0;s<2;s++)i.forEach(([o,a],l)=>{const r=t.currentTime+s*.75+l*.2,c=t.createOscillator();c.type="sawtooth",c.frequency.setValueAtTime(o,r),c.frequency.linearRampToValueAtTime(o*.92,r+a);const d=t.createBiquadFilter();d.type="bandpass",d.frequency.value=l===1?1800:700,d.Q.value=5;const f=t.createGain();this.env(f,r,.02,e,a),c.connect(d),d.connect(f),f.connect(this.master),c.start(r),c.stop(r+a+.05)})}step_(){if(!this.ctx)return;const e=this.ctx,t=e.currentTime,i=e.createBufferSource();i.buffer=this.noiseBuf;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=600;const o=e.createGain();this.env(o,t,.005,.12,.07),i.connect(s),s.connect(o),o.connect(this.master),i.start(t,Math.random()),i.stop(t+.1)}kick(){this.tone(160,.12,"sine",.3,0,-110)}whistle(){this.tone(2200,.25,"sine",.12),this.tone(2400,.35,"sine",.12,.28)}cheer(){if(!this.ctx)return;const e=this.ctx,t=e.currentTime,i=e.createBufferSource();i.buffer=this.noiseBuf;const s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=1200;const o=e.createGain();this.env(o,t,.1,.25,1.6),i.connect(s),s.connect(o),o.connect(this.master),i.start(t),i.stop(t+1.8)}setRadio(e){this.radioOn=e,this.radioGain&&this.radioGain.gain.setTargetAtTime(e?.5:0,this.ctx.currentTime,.2),e&&this.ctx&&(this.nextBeat=Math.max(this.nextBeat,this.ctx.currentTime+.05))}schedule(){if(!this.ctx||!this.radioOn)return;const e=this.ctx,t=60/104/4,i=[[220,277,330],[196,247,294],[175,220,262],[196,247,294]],s=[55,49,43.65,49];for(;this.nextBeat<e.currentTime+.2;){const o=this.nextBeat,a=this.step%16,l=Math.floor(this.step/16)%4,r=this.radioGain,c=(f,p,h,v,m=0)=>{const u=e.createOscillator(),g=e.createGain();u.type=h,u.frequency.setValueAtTime(f,o),m&&u.frequency.exponentialRampToValueAtTime(Math.max(20,f+m),o+p),this.env(g,o,.005,v,p),u.connect(g),g.connect(r),u.start(o),u.stop(o+p+.05)},d=(f,p,h)=>{const v=e.createBufferSource();v.buffer=this.noiseBuf;const m=e.createBiquadFilter();m.type="highpass",m.frequency.value=f;const u=e.createGain();this.env(u,o,.002,h,p),v.connect(m),m.connect(u),u.connect(r),v.start(o,Math.random()),v.stop(o+p+.02)};[0,7,10].includes(a)&&c(110,.18,"sine",.5,-70),[4,12].includes(a)&&d(1500,.12,.25),d(7e3,.03,a%2?.05:.09),[3,6,11,14].includes(a)&&c(s[l]*2,.22,"sine",.35,-30),[2,5,9,13].includes(a)&&i[l].forEach(f=>c(f*2,.12,"triangle",.05)),a===0&&l%2===0&&[660,587,494,440].forEach((f,p)=>{const h=p*t*3,v=e.createOscillator(),m=e.createGain();v.type="sine",v.frequency.value=f,m.gain.setValueAtTime(1e-4,o+h),m.gain.exponentialRampToValueAtTime(.06,o+h+.02),m.gain.exponentialRampToValueAtTime(1e-4,o+h+.3),v.connect(m),m.connect(r),v.start(o+h),v.stop(o+h+.35)}),this.nextBeat+=t,this.step++}}}const Qn=n=>Math.max(50,Math.round(n/50)*50),xi=n=>n[Math.floor(Math.random()*n.length)],dd=[["Ojuelegba Stop",-58,3.6],["Yaba Market",-24,3.6],["CMS",52,3.6],["Mama Put Buka",18,-3.6],["Face-me-I-face-you",-30,-3.6],["Holy Ghost Fire",13,3.6],["Mega Fuel",64,3.6],["Estate Gate",1.8,-24],["The Set",1.8,22],["Lagoon",-78,-3.6]],wa=10;function Ky(n){const{world:e}=n,t={G:n},i={mesh:e.playerKeke,pos:e.playerKeke.position,h:Math.PI,speed:0,passenger:null,requests:[],driving:!1};e.playerKeke.rotation.y=i.h;const s={minX:0,maxX:0,minZ:0,maxZ:0};e.colliders.push(s);const o=()=>{const y=i.pos;Object.assign(s,i.driving?{minX:1e4,maxX:1e4,minZ:1e4,maxZ:1e4}:{minX:y.x-.9,maxX:y.x+.9,minZ:y.z-.9,maxZ:y.z+.9})};o();const a=new is(1.5,.12,6,28),l=y=>{const M=new Ce(a,Y(y,{emissive:y,unique:!0}));M.rotation.x=Math.PI/2,M.position.y=.15;const R=new Ce(new Wt(1.4,1.4,6,20,1,!0),new qs({color:y,transparent:!0,opacity:.18,depthWrite:!1,side:Vn}));return R.rotation.x=-Math.PI/2,R.position.z=-3,M.add(R),e.root.add(M),M},r=new Ce(new Bo(.35,.9,8),Y("#ffd23f",{emissive:"#ffb000",unique:!0}));r.visible=!1,e.root.add(r);const c=y=>new P(y[1],0,y[2]);function d(){const y=xi(dd.filter(N=>!i.requests.some(U=>U.spot===N))),M=l("#ffd23f");M.position.set(y[1],.15,y[2]);const R=cn({...Sn(),name:"Passenger"});R.position.set(y[1],0,y[2]+Math.sign(y[2]||1)*2.2),e.root.add(R),i.requests.push({spot:y,ring:M,npc:R,t:0})}function f(){for(const y of i.requests)e.root.remove(y.ring),e.root.remove(y.npc);i.requests=[]}t.enterKeke=()=>{for(i.driving=!0,o(),n.player.position.set(.45,.85,0),n.player.rotation.set(0,Math.PI/2,0),n.player.scale.setScalar(.85),oi(n.player),i.mesh.add(n.player),n.audio.init(),n.audio.level("engine",.12);i.requests.length<2;)d();n.startActivity(p),n.toast("You don enter your Keke! Find passengers for yellow rings 🛺","good")},t.exitKeke=()=>{if(i.passenger){n.toast("Drop your passenger first o!","bad");return}i.driving=!1,i.speed=0,i.mesh.remove(n.player),n.scene.add(n.player),n.player.scale.setScalar(1),n.player.userData.sitting=!1;const y=new P(-Math.sin(i.h),0,-Math.cos(i.h)).multiplyScalar(1.6);n.pos.copy(i.pos).add(y),n.pos.y=0,o(),n.audio.level("engine",0),f(),r.visible=!1,n.endActivity(),n.save()};const p={name:"keke",camDist:11,camPitch:.5,buttons:()=>[{label:"Comot 🚶",key:"x",onClick:t.exitKeke}],update(y){const M=n.sim.s,R=n.input(),N=M.kekeFuel>0;let U=R.iy;N||(U=Math.min(0,U)),U>0?i.speed+=U*6.5*y:U<0?i.speed+=U*(i.speed>0?12:4)*y:i.speed*=Math.exp(-1.1*y);const L=R.run?12.5:10;i.speed=Tt.clamp(i.speed,-3,L),i.h+=-R.ix*1.9*y*Tt.clamp(i.speed/4,-1,1);const D=new P(Math.cos(i.h),0,-Math.sin(i.h)),F=i.pos.clone();i.pos.addScaledVector(D,i.speed*y);const H=i.pos.clone();e.resolve(i.pos,1.05),H.distanceTo(i.pos)>.02&&(i.speed*=.6),i.pos.y=Math.abs(Math.sin(n.time*14))*.03*Math.min(1,Math.abs(i.speed)),i.mesh.rotation.y=i.h,M.kekeFuel=Math.max(0,M.kekeFuel-F.distanceTo(i.pos)*.011),!N&&Math.random()<.01&&n.toast("Fuel don finish! Push am go Mega Fuel 😩","bad"),n.pos.copy(i.pos),n.moveAmt=0,n.camYawTo(Math.atan2(-Math.cos(i.h),Math.sin(i.h)),y*2.5),n.audio.engineRate(i.speed),n.audio.level("engine",.06+Math.abs(i.speed)*.012);const q=Math.abs(i.speed)<3.5;let ie=null;if(i.passenger){const Le=i.passenger;Le.ring.rotation.z+=y,Le.time+=y,ie=c(Le.dest),i.pos.distanceTo(ie)<3.4&&q&&v()}else{let Le=1e9;for(const K of i.requests){K.ring.rotation.z+=y,K.t+=y,K.t>4&&Math.random()<y*.3&&me(K.npc,xi(["Keke! Keke!","Wait o!","I dey go somewhere!"]),2);const ee=i.pos.distanceTo(c(K.spot));if(ee<Le&&(Le=ee,ie=c(K.spot)),ee<3.2&&q){h(K);break}}}if(ie){r.visible=!0,r.position.set(i.pos.x,3.2+Math.sin(n.time*4)*.15,i.pos.z);const Le=ie.clone().sub(i.pos);Le.y=0,r.rotation.set(0,0,0),r.quaternion.setFromUnitVectors(new P(0,1,0),Le.normalize())}Math.abs(i.pos.x)<6.5&&Math.abs(i.pos.z)<6.5&&M.t>M.tollCD&&!n.isBusy()&&u(!1);const se=i.pos.distanceTo(e.fuelSpot)<4.5&&q;n.ctxHot(se?{label:`Buy fuel ⛽ (${J(n.sim.kekeFuelPrice)}/L)`,act:m}:null);const Se=Math.round(M.kekeFuel/wa*100);n.actHud(`<b>🛺 Keke</b> • ${Math.round(Math.abs(i.speed)*3.6)} km/h<div class="mini-bar"><i style="width:${Se}%;background:${Se>30?"#06d6a0":"#e71d36"}"></i></div><small>Fuel ${M.kekeFuel.toFixed(1)}L / ${wa}L</small><br>${i.passenger?`👤 Passenger to <b>${i.passenger.dest[0]}</b> • ${J(i.passenger.fare)}`:"🟡 Pick passenger for yellow ring"}`)},onEnd(){n.actHud(""),n.ctxHot(null)}};function h(y){const M=dd.filter(D=>D!==y.spot&&Math.hypot(D[1]-y.spot[1],D[2]-y.spot[2])>25),R=xi(M),N=Math.hypot(R[1]-y.spot[1],R[2]-y.spot[2]),U=Qn((150+N*6)*Math.sqrt(n.sim.s.fuelFactor));e.root.remove(y.ring),i.requests=i.requests.filter(D=>D!==y),y.npc.position.set(-.55,.85,0),y.npc.rotation.set(0,Math.PI/2,0),y.npc.scale.setScalar(.8),oi(y.npc),i.mesh.add(y.npc);const L=l("#06d6a0");L.position.set(R[1],.15,R[2]),i.passenger={npc:y.npc,dest:R,fare:U,ring:L,time:0,limit:N/6+18},me(y.npc,`Take me go ${R[0]}!`,3),n.audio.ping(),n.toast(`Passenger: "${R[0]}, ${J(U)}. Oya quick!"`,"good")}function v(){const y=i.passenger,M=n.sim.s,R=y.time<y.limit?Qn(y.fare*.2):0;for(n.sim.earn(y.fare+R,"keke"),M.statsV2.trips++,M.kekeTrips++,R&&n.sim.addKarma(1),i.mesh.remove(y.npc),e.root.remove(y.ring),n.audio.cash(),n.toast(`+${J(y.fare)}${R?` +${J(R)} tip (you fast!)`:""} 🛺`,"money"),i.passenger=null,n.sim.advance(15);i.requests.length<2;)d();n.save()}function m(){const y=n.sim.s,M=n.sim.kekeFuelPrice,R=Math.max(0,wa-y.kekeFuel),N=U=>{U=Math.min(U,R);const L=Qn(U*M);if(!n.sim.spend(L))return n.toast("Money no reach 😩","bad");y.kekeFuel+=U,n.audio.cash(),n.toast(`+${U.toFixed(1)}L fuel ⛽`,"good"),n.save()};n.modal("Mega Fuel ⛽",`Attendant: "How many litres?" • Price ${J(M)}/L • Tank ${y.kekeFuel.toFixed(1)}/${wa}L`,[{label:"2 litres",price:J(Qn(2*M)),disabled:R<.1||y.cash<Qn(2*M),onClick:()=>N(2)},{label:"5 litres",price:J(Qn(5*M)),disabled:R<.1||y.cash<Qn(Math.min(5,R)*M),onClick:()=>N(5)},{label:"Fill tank",price:J(Qn(R*M)),disabled:R<.1||y.cash<Qn(R*M),onClick:()=>N(R)},{label:"Later",close:!0}])}t.fuelMenu=m;function u(y,M){var L;const R=n.sim.s;R.tollCD=R.t+180,i.speed=0;const N=R.agberoScared>R.t,U=y?500:N?150:300;return(L=e.agberos)==null||L.forEach((D,F)=>setTimeout(()=>me(D.mesh,xi(["Owo union! Bring am!","Driver, you no see us?","Na ₦"+U+" o!"]),2.5),F*400)),n.audio.horn(.1),new Promise(D=>{const F=(q,ie)=>{n.toast(q,ie),n.save(),D()},H=q=>{if(y)M.v=Math.max(0,M.v-q);else{const ie=Math.min(q,R.cash);R.cash-=ie}};n.modal("Agbero Union 🧾",`${y?"Danfo":"Keke"} toll! Agbero Sunday: "${N?"Ehen, na you get camera... just ₦"+U+", abeg":"Oya bring owo union ₦"+U+"! No story!"}"`,[{label:`Pay ${J(U)}`,sub:"Peace of mind • -2 Mind",onClick:()=>{H(U),R.mood=Math.max(0,R.mood-2),F("You pay agbero. Lagos tax 🙄","")}},{label:"Zoom comot (evade) 🏃",sub:"Risky: dem fit chase you",onClick:()=>{const q=.5+R.karma/400;Math.random()<q?(R.mood=Math.min(100,R.mood+3),n.sim.addKarma(-1),F("You escape! Agbero dey curse your generation 😂","good")):(H(U*2),R.mood=Math.max(0,R.mood-10),R.energy=Math.max(0,R.energy-5),F(`Dem catch you! Collect ${J(U*2)} and slap your Keke 😭`,"bad"))}},{label:"Argue / fight 👊",sub:"Roll based on your Mind & karma",onClick:()=>{const q=.35+R.mood/400+(R.karma>20?.1:0);Math.random()<q?(R.mood=Math.min(100,R.mood+6),n.sim.addKarma(-2),F("You shout dem down! Dem fear you today 💪","good")):(H(Math.round(U*2.5)),R.energy=Math.max(0,R.energy-15),R.mood=Math.max(0,R.mood-15),n.sim.addKarma(-3),F(`Dem beat you small and collect ${J(U*2.5)} 🤕`,"bad"))}}])})}t.agberoToll=u;const g={active:!1};t.startShift=()=>{const y=n.sim.s,M=n.sim.hour;if(M<6||M>=20)return n.modal("No work now 🌙","Oga Driver don park. Conductor shift na 6am – 8pm.",[{label:"Okay",close:!0}]);if(y.energy<25)return n.modal("Your body don tire 😮‍💨","Conductor work need at least 25% Body.",[{label:"Okay",close:!0}]);n.modal("Oga Driver needs conductor 🚌",'"My conductor no come today. You fit hang for door? You go collect fare, give correct change. I go pay you ₦1,000 + 35% of wetin you collect."',[{label:"Oya, I dey hang! 🙋🏾",onClick:w},{label:"No be today",close:!0}])};function w(){const y=e.vehicles.find(M=>M.type==="danfo");y.conductor=!0,y.turn=null,y.dir=1,y.lastStop=null,y.wait=0,y.speed=0,y.mesh.position.set(-70,0,2.4),y.mesh.rotation.y=0,Object.assign(g,{active:!0,v:y,purse:{v:0},stops:0,tolled:!1,served:0,wrong:0}),n.player.position.set(.7,.4,1.12),n.player.rotation.set(0,0,0),n.player.scale.setScalar(.9),y.mesh.add(n.player),n.audio.init(),n.audio.conductor(),n.startActivity(b)}e.onConductorStop=(y,M)=>{if(!g.active||y!==g.v)return;y.wait=9999,n.audio.conductor();const R=2+Math.floor(Math.random()*2);C(M,R).then(()=>{g.stops++,n.sim.advance(20,{working:!0}),g.stops>=4?S():y.wait=.6})};const b={name:"conductor",camDist:12,camPitch:.45,buttons:()=>[{label:"End shift 🛑",key:"x",onClick:()=>{n.isBusy()||S()}}],update(y){const M=g.v;n.pos.copy(M.mesh.position),n.moveAmt=0,n.camYawTo(Math.atan2(-Math.cos(M.mesh.rotation.y),Math.sin(M.mesh.rotation.y))+.5,y*2),!g.tolled&&Math.abs(M.mesh.position.x)<4&&!M.turn&&(g.tolled=!0,M.wait=9999,u(!0,g.purse).then(()=>M.wait=.4)),n.actHud(`<b>🚌 Conductor shift</b><br>Stops: ${g.stops}/4 • Purse: <b>${J(g.purse.v)}</b><br><small>Served ${g.served} • Wahala ${g.wrong}</small>`)},onEnd(){n.actHud("")}};function S(){if(!g.active)return;const y=g.v;g.active=!1,y.conductor=!1,y.wait=.5,y.mesh.remove(n.player),n.scene.add(n.player),n.player.scale.setScalar(1);const M=1e3+Math.round(g.purse.v*.35);n.pos.set(y.mesh.position.x,.18,y.dir>0?5.6:-5.6),n.sim.earn(M,"conductor"),n.sim.s.statsV2.shifts++,n.sim.s.energy=Math.max(0,n.sim.s.energy-15),n.endActivity(),n.audio.cash(),n.modal("Shift don end 🚌",`You serve <b>${g.served}</b> passengers (${g.wrong} wahala). Purse: ${J(g.purse.v)}. Oga Driver pay you <b>${J(M)}</b>.`,[{label:"Collect ➜",close:!0}]),n.save()}function C(y,M){return new Promise(R=>{n.setBusy(!0);const N=document.getElementById("market");N.classList.remove("hidden");let U=0,L=null;const D=()=>{if(U>=M){clearInterval(L),N.classList.add("hidden"),N.innerHTML="",n.setBusy(!1),R();return}U++;const F=n.sim.danfoFare*(1+Math.floor(Math.random()*2)),H=xi([500,1e3].filter(ee=>ee>F).concat(F<200?[200]:[])),q=H-F;let ie=0,se=10;const Se=xi(["👩🏾","👨🏿","👵🏾","👴🏿","🧕🏾","🧔🏾"]);N.innerHTML=`<div class="mk"><div class="mk-top"><span>🚌 ${y.name} stop • Passenger ${U}/${M}</span><span class="timer" id="cgT">10s</span></div>
          <div class="cust"><div class="face">${Se}</div><div><div class="say">"Fare na ${J(F)}. Take ${J(H)}, give me my change!"</div><div class="who">Change wey you owe: ? 🤔</div></div></div>
          <div class="items" style="grid-template-columns:repeat(4,1fr)">${[50,100,200,500].map(ee=>`<button class="item" data-c="${ee}"><span class="ic" style="background:#9be7a4">₦</span>${J(ee)}</button>`).join("")}</div>
          <div class="basket" id="cgB">Change: ₦0</div>
          <div class="btn-row"><button class="btn" id="cgC">↺ Clear</button><button class="btn green" id="cgG">✔ Give change</button></div></div>`;const Le=N.querySelector("#cgB");N.querySelectorAll("[data-c]").forEach(ee=>ee.addEventListener("pointerdown",ye=>{ye.preventDefault(),ie+=+ee.dataset.c,Le.textContent="Change: "+J(ie),n.audio.click()})),N.querySelector("#cgC").onclick=()=>{ie=0,Le.textContent="Change: ₦0"};const K=ee=>{clearInterval(L),g.served++,n.toast(ee[0],ee[1]),setTimeout(D,250)};N.querySelector("#cgG").onclick=()=>{ie===q?(g.purse.v+=F,K([`Correct change! +${J(F)} for purse`,"good"])):ie<q?(g.purse.v+=F,g.wrong++,n.sim.addKarma(-1),n.sim.s.mood=Math.max(0,n.sim.s.mood-2),K(['Passenger: "My change no complete o! Thief!" 😤 (-karma)',"bad"])):(g.purse.v+=Math.max(0,F-(ie-q)),g.wrong++,K([`You give extra ${J(ie-q)}! Passenger don waka 😅`,"warn"]))},clearInterval(L),L=setInterval(()=>{se--;const ee=N.querySelector("#cgT");ee&&(ee.textContent=se+"s"),se<=0&&(g.wrong++,K(['Passenger vex: "You too slow!" no pay 😒',"bad"]))},1e3)};D()})}const x=new ht,_=new Ce(new Wt(.32,.28,.06,16),Y("#c0c4cc"));x.add(_);for(let y=0;y<6;y++){const M=new Ce(new Ge(.1,.06,.14),Y(y%2?"#bde0fe":"#ffd23f"));M.position.set(Math.cos(y)*.16,.06,Math.sin(y)*.16),x.add(M)}x.position.y=.52,n.player.userData.head.add(x),t.attachTray=y=>{y.userData.head.add(x)},t.stockMenu=()=>{const y=n.sim.s;n.modal("Mama Nkechi Provisions 🛍️",`Buy stock to hawk. You get: 💧 ${y.stock.water} pure water • 🍪 ${y.stock.gala} gala`,[{label:"Bag of pure water (20 sachets)",sub:"Sell ₦50 each",price:J(400),disabled:y.cash<400,onClick:()=>{n.sim.spend(400),y.stock.water+=20,n.toast("Pure water don land your tray 💧","good")}},{label:"Pack of gala (10)",sub:"Sell ₦150 each",price:J(700),disabled:y.cash<700,onClick:()=>{n.sim.spend(700),y.stock.gala+=10,n.toast("Gala don land your tray 🍪","good")}},{label:"Comot",close:!0}])};const E=new WeakMap;t.hawkHot=()=>{const y=n.sim.s;if(y.stock.water+y.stock.gala<=0)return null;const M=n.pos;let R=null,N=1e9;for(const L of e.walkers){if(L.conv)continue;const D=Math.hypot(L.mesh.position.x-M.x,L.mesh.position.z-M.z);D<1.9&&D<N&&(E.get(L)||0)<n.time&&(N=D,R={kind:"walker",w:L})}for(const L of e.vehicles){if(L.speed>.6||L.mesh.userData.isPlayer)continue;const D=Math.hypot(L.mesh.position.x-M.x,L.mesh.position.z-M.z);D<3.6&&D<N&&(E.get(L)||0)<n.time&&(N=D,R={kind:"vehicle",v:L})}if(!R)return null;const U=y.stock.water?"💧 Pure water":"🍪 Gala";return{label:R.kind==="walker"?`Hawk ${U} to ${R.w.name}`:`Hawk ${U} for traffic 🚦`,act:()=>k(R)}};function k(y){const M=n.sim.s,R=y.w||y.v;E.set(R,n.time+40);const N=.55+M.karma/300,U=y.kind==="vehicle"?1+Math.floor(Math.random()*4):1+Math.floor(Math.random()*2);if(Math.random()>N){y.w&&me(y.w.mesh,xi(["I no need am","Abeg comot","Next time"]),2),n.toast("Dem no buy 🙅🏾");return}let L=0,D=0;for(let F=0;F<U;F++)M.stock.water>0&&(Math.random()<.6||!M.stock.gala)?(M.stock.water--,L+=50,D++):M.stock.gala>0&&(M.stock.gala--,L+=150,D++);D&&(n.sim.earn(L,"hawk"),M.statsV2.hawked+=D,n.sim.advance(3),M.energy=Math.max(0,M.energy-.5),y.w&&me(y.w.mesh,xi(["Give me one!","Is it cold?","Correct!"]),2),n.audio.cash(),n.toast(`Sold ${D} → +${J(L)} 💧`,"money"))}return t.update=()=>{x.visible=n.sim.s.stock.water+n.sim.s.stock.gala>0&&!i.driving&&!g.active},t.keke=i,t.kekeHot=()=>!i.driving&&n.pos.distanceTo(i.pos)<2.6?{label:"Enter your Keke 🛺",act:t.enterKeke}:null,t}const zi=n=>n[Math.floor(Math.random()*n.length)],ud=[["Yaba Market",-24,9.5],["Ojuelegba Stop",-58,6.6],["Mama Put Buka",18,-12.5],["CMS Stop",52,6.6],["Holy Ghost Fire",13,12.5]];function jy(n){const{world:e}=n,t={deed:null,chakam:null,agents:null},i=e.root,s=(h,v,m,u=0)=>{const g=cn({...Sn(),...h});return g.position.set(v,e.groundHeight(v,m),m),g.rotation.y=u,i.add(g),g},o=h=>h.forEach(v=>i.remove(v));function a(h){const v=new ht,m=ne(new Ge(3.4,.8,1.6),Y(h),{t:.05});m.position.y=.7,v.add(m);const u=ne(new Ge(1.8,.7,1.4),Y("#3d5a80"),{t:.04});u.position.set(-.2,1.4,0),v.add(u);for(const[g,w]of[[1.1,.8],[1.1,-.8],[-1.1,.8],[-1.1,-.8]]){const b=ne(new Wt(.32,.32,.25,12),Y("#1a1423"),{t:.02});b.rotation.x=Math.PI/2,b.position.set(g,.32,w),v.add(b)}v.smoke=[];for(let g=0;g<3;g++){const w=new Ce(new An(.2,8,6),Y("#cfcfd6",{opacity:.8}));w.position.set(1.7,1,0),v.add(w),v.smoke.push(w)}return v}function l(){const h=n.sim.s,v=zi(["car","change","load"]),m=[];for(let C=-70;C<=70;C+=10)for(const x of[-9.4,9.4])Math.abs(C)>8&&m.push([C,x]);const u=m.filter(([C,x])=>{const _=Math.hypot(C-n.pos.x,x-n.pos.z);return _>8&&_<35}),[g,w]=zi(u.length?u:m),b=[],S={type:v,x:g,z:w,objs:b,expires:h.t+240,pos:new P(g,0,w)};if(v==="car"){const C=a(zi(["#ff8fab","#bde0fe","#caffbf","#ffd6a5"]));C.position.set(g,0,w+Math.sign(w)*.6),C.rotation.z=Math.sign(w)*.06,i.add(C),b.push(C),S.car=C;const x=s({name:"Oga Car"},g-2.4,w,Math.PI/2);b.push(x),S.npc=x,S.lines=["My motor don jam! Abeg help me push!","Who fit help me push?"],e.colliders.push(S.col={minX:g-1.8,maxX:g+1.8,minZ:C.position.z-.9,maxZ:C.position.z+.9})}else if(v==="change"){const C=s({name:"Aunty"},g,w,w>0?Math.PI:0);b.push(C),S.npc=C,S.lines=["Who get change for ₦1,000?","Abeg change, I wan enter Danfo!"]}else{const C=s({name:"Mama Iyabo",hair:"gele",outfit:"ankaraDress"},g,w,w>0?Math.PI:0);b.push(C),S.npc=C;const x=ne(new Ge(.7,.45,.6),Y("#c68642"),{t:.03});x.position.y=.6,C.userData.head.add(x),S.load=x,S.dest=zi(ud.filter(_=>Math.hypot(_[1]-g,_[2]-w)>15&&Math.hypot(_[1]-g,_[2]-w)<60))||ud[0],S.lines=[`My pikin, help me carry this load go ${S.dest[0]}!`,"This load heavy o!"]}S.talkT=1,t.deed=S}function r(){const h=t.deed;h&&(o(h.objs),h.col&&e.colliders.splice(e.colliders.indexOf(h.col),1),h.ring&&i.remove(h.ring),h.carrying&&n.player.userData.head.remove(h.load),t.deed=null,n.sim.s.nextDeed=n.sim.s.t+120+Math.floor(Math.random()*150))}function c(h,v,m){const u=n.sim.s;n.sim.addKarma(h),u.mood=Math.min(100,u.mood+4),u.statsV2.deeds++,v&&n.sim.earn(v,"tip"),n.audio.ping(),n.toast(`${m} +${h} karma${v?` • tip ${J(v)}`:""} 🙏`,"good")}t.deedHot=()=>{const h=t.deed;if(!h)return null;const v=n.pos.distanceTo(h.pos);if(h.type==="load"&&h.carrying){const m=new P(h.dest[1],0,h.dest[2]);return n.pos.distanceTo(m)<3?{label:`Drop load for ${h.dest[0]} 📦`,act:()=>{c(6,200,'Mama Iyabo: "God go bless you!"'),r()}}:null}return v>2.8?null:h.type==="car"?{label:"Help push car 🚗",act:()=>n.mash({label:"PUSH! Tap fast fast!",taps:14,secs:6}).then(m=>{m?(n.audio.tone(90,.8,"sawtooth",.15),c(5,Math.random()<.5?300:0,'Engine start! Oga Car: "Thank you!"'),r()):(n.sim.s.mood=Math.max(0,n.sim.s.mood-2),n.toast("Una no strong reach. Try again! 💪"))})}:h.type==="change"?{label:"Give change for ₦1,000 💵",act:()=>{if(n.sim.s.cash<1e3)return n.toast("You no get ₦1,000 change 😅","bad");c(3,Math.random()<.3?50:0,'Aunty: "You save my life!"'),r()}}:{label:"Help Mama carry load 📦",act:()=>{h.carrying=!0,h.npc.userData.head.remove(h.load),n.player.userData.head.add(h.load),h.load.position.y=.62;const m=new Ce(new is(1.5,.12,6,28),Y("#06d6a0",{emissive:"#06d6a0",unique:!0}));m.rotation.x=Math.PI/2,m.position.set(h.dest[1],.2,h.dest[2]),i.add(m),h.ring=m,n.toast(`Carry am go ${h.dest[0]} (green ring) 📦`,"good")}}};const d={agbero:{name:"Agbero extortion",at:[9.5,9.6],spot:"junction (south-east corner)",a:{name:"Agbero Lucky",hair:"lowcut",outfit:"street",clothColor:"#1d3557"},b:{name:"Keke Driver",hair:"cap",outfit:"street"},lines:[["a","Oya bring ₦1,000 now now!"],["b","Abeg, I never make sales today!"],["a","You wan make we scatter your Keke?"],["b","Haba! Take ₦500 abeg..."]]},scammer:{name:"Yahoo scammer",at:[55.5,10.2],spot:"CMS bus stop",a:{name:"Scammer",hair:"afro",outfit:"street",clothColor:"#1a1423"},b:{name:"Old Man",hair:"bald",outfit:"kaftan"},lines:[["a","Baba, send me your BVN and OTP"],["b","Why you need am?"],["a","Make I upgrade your bank account"],["b","Okay o, make I check my phone..."]]},bribe:{name:"Checkpoint bribe",at:[30,-9.4],spot:"police checkpoint near Pharmacy",a:{name:"Officer",hair:"cap",outfit:"street",clothColor:"#1d2240",accentColor:"#1a1423",pantsColor:"#1a1423"},b:{name:"Danfo Driver",hair:"lowcut",outfit:"ankaraShirt"},lines:[["a","Driver, roger me!"],["b","Oga, take ₦200 abeg"],["a","₦200? You dey whine me? ₦1,000!"],["b","Na God go judge una..."]]}};function f(){const h=n.sim.s,v=zi(Object.keys(d)),m=d[v],[u,g]=m.at,w=[],b=s(m.a,u,g,Math.PI/2),S=s(m.b,u+1.2,g,-Math.PI/2);if(w.push(b,S),v==="bribe"){const C=ne(new Bo(.3,.75,8),Y("#ff7b29"),{t:.025});C.position.set(u-1.2,.38,g+.6),i.add(C),w.push(C);const x=e.signMesh("POLICE CHECKPOINT",1.8,.4,"#1d2240");x.position.set(u-1.4,1.4,g+.62),i.add(x),w.push(x)}t.chakam={key:v,e:m,objs:w,a:b,b:S,i:0,t:1,expires:h.t+120,pos:new P(u+.6,1.1,g)},n.sim.text(zi(["Bisi (Friend)","Emeka (Friend)","Tayo (Neighbour)"]),`Chakam alert 👀: ${m.name} dey happen now for ${m.spot}. Carry your phone go snap am!`,"tip")}t.chakamCheck=h=>{const v=t.chakam;if(!v)return null;const m=v.pos.clone(),u=h.position.distanceTo(m);return m.project(h),Math.abs(m.x)<.9&&Math.abs(m.y)<.9&&m.z<1&&u<30?v:null},t.resolveChakam=h=>{const v=t.chakam,m=n.sim.s;if(v){if(h){const u=40+Math.floor(Math.random()*50);n.sim.addKarma(8),n.sim.addFollowers(u),m.statsV2.chakam++,m.npcRep[v.key]=(m.npcRep[v.key]||0)-1,v.key==="agbero"&&(m.agberoScared=m.t+2*1440),n.sim.post("@ChakamNG",`🎥 VIRAL: ${v.e.name} caught on camera by @${m.name}! Lagos people dey vex. ${v.key==="agbero"?"Agbero union toll don reduce 😂":v.key==="bribe"?"Checkpoint don disappear sharp sharp 🏃":"Scammer don run comot 🏃"}`,"good"),n.toast(`Uploaded to Chakam! +8 karma, +${u} followers 📈`,"good")}else{const u=1500+Math.floor(Math.random()*3)*500;n.sim.earn(u,"settle"),n.sim.addKarma(-10),n.toast(`"Abeg delete am" — dem settle you ${J(u)}. -10 karma 🤐`,"warn")}o(v.objs),t.chakam=null,m.nextChakam=m.t+180+Math.floor(Math.random()*180)}},t.spawnAgents=()=>{if(t.agents)return;const h=Math.random()*Math.PI*2,v=[],m={hair:"lowcut",outfit:"street",clothColor:"#14101c",pantsColor:"#14101c",accentColor:"#8338ec"};for(let u=0;u<2;u++){const g=Tt.clamp(n.pos.x+Math.cos(h)*14+u,-85,85),w=Tt.clamp(n.pos.z+Math.sin(h)*14,-30,30);v.push(s({...m,name:"LapoPay Agent"},g,w))}t.agents={objs:v,t:0,leaving:0},n.toast("🕶️ LapoPay recovery agents dey come for you!","bad"),n.audio.bad()};function p(){const h=n.sim.s,v=h.loan;n.audio.bad();const m=()=>{h.hasGen?(h.hasGen=!1,h.fuel=0,h.loan=Math.max(0,h.loan-6e3),n.toast('Dem seize your "I-pass-my-neighbour" generator! 😭 (-₦6,000 from loan)',"bad"),n.sim.text("LapoPay Recovery","We don carry your generator as part payment. Balance remain "+J(h.loan),"bad")):h.items.radio?(h.items.radio=!1,n.audio.setRadio(!1),h.loan=Math.max(0,h.loan-2e3),n.toast("Dem seize your radio! 📻 (-₦2,000 from loan)","bad")):(n.sim.addKarma(-10),h.mood=Math.max(0,h.mood-15),h.followers=Math.floor(h.followers*.8),n.sim.post("@LapoPay_Recovery",`🚨 DEBTOR ALERT: ${h.name} dey owe ${J(h.loan)}. If you see am, tell am make e pay! 📢`,"alert"),n.toast("Dem shame you for GistMe! -10 karma, followers drop 😩","bad")),h.loanDue=h.t+2*1440,h.recovery=0},u=()=>{t.agents.leaving=1,n.save()};n.modal("🕶️ LapoPay Recovery Agents",`"Good day ${h.name}. You owe <b>${J(v)}</b>. We no come play. Pay now or we go take something."`,[{label:"Pay everything",price:J(v),disabled:h.cash<v,onClick:()=>{n.sim.repay(v),n.toast("Loan cleared! Agents don go 😮‍💨","good"),u()}},{label:"Pay wetin I get",sub:"If e reach half, dem go give you 2 more days",price:J(Math.min(h.cash,v)),disabled:h.cash<100,onClick:()=>{n.sim.repay(Math.min(h.cash,v))>=v/2?(h.loanDue=h.t+2*1440,h.recovery=0,n.toast("Dem collect am, give you 2 days 🙏","warn")):m(),u()}},{label:"Beg for more time 🙏",sub:h.karma>=15?"Your good name fit save you":"Dem no too dey hear word",onClick:()=>{h.karma>=15&&Math.random()<.8?(h.loanDue=h.t+2*1440,h.recovery=1,n.toast('Agent: "Because you get good name... 2 days."',"good")):m(),u()}}],"warn")}return t.update=h=>{const v=n.sim.s;if(!t.deed&&v.t>=v.nextDeed&&!n.activityName()&&l(),t.deed){const m=t.deed;m.talkT-=h,m.talkT<0&&(m.talkT=6,m.carrying||me(m.npc,zi(m.lines),3)),m.car&&m.car.smoke.forEach((u,g)=>{const w=(n.time*.7+g/3)%1;u.position.set(1.7+w*.3,.9+w*1.3,0),u.scale.setScalar(.6+w*1.5)}),m.npc&&hn(m.npc,h,0,n.time),m.ring&&(m.ring.rotation.z+=h),v.t>m.expires&&!m.carrying&&r()}if(!t.chakam&&v.t>=v.nextChakam&&v.t>8*60&&n.sim.hour>7&&n.sim.hour<21&&f(),t.chakam){const m=t.chakam;if(m.t-=h,m.t<=0){const[u,g]=m.e.lines[m.i%m.e.lines.length],w=u==="a"?m.a:m.b;me(w,g,3),w.userData.talk=2.6,(u==="a"?m.b:m.a).userData.listen=!0,m.i++,m.t=3.2}hn(m.a,h,0,n.time),hn(m.b,h,0,n.time),v.t>m.expires&&(o(m.objs),t.chakam=null,v.nextChakam=v.t+200)}if(t.agents){const m=t.agents;m.objs.forEach((u,g)=>{const w=m.leaving?new P(u.position.x+(g?30:-30),0,u.position.z):n.pos,b=w.x-u.position.x,S=w.z-u.position.z,C=Math.hypot(b,S);C>1.3&&(u.position.x+=b/C*2.6*h,u.position.z+=S/C*2.6*h,u.rotation.y=Math.atan2(b,S)),hn(u,h,C>1.3?1:0,n.time)}),m.t+=h,m.leaving?(m.leaving+=h,m.leaving>8&&(o(m.objs),t.agents=null)):!m.arrived&&!n.isBusy()&&(m.t>60||m.objs.some(u=>Math.hypot(u.position.x-n.pos.x,u.position.z-n.pos.z)<1.6))?(m.arrived=!0,p()):m.arrived&&!n.isBusy()&&(m.leaving=1)}},t}const ei=n=>n[Math.floor(Math.random()*n.length)],On=(n,e)=>new P(n,0,e);function Jy(n){const{world:e}=n,t=e.pitch,i=e.ball,s={};let o=null;s.hot=()=>{if(n.activityName()||n.inside())return null;const x=Math.hypot(n.pos.x-50.2,n.pos.z-27.2),_=n.pos.x>t.minX&&n.pos.x<t.maxX&&n.pos.z>t.minZ&&n.pos.z<t.maxZ;return x<2.6||_?{label:"Play ball for The Set ⚽",act:s.offer}:null},s.offer=async()=>{const x=n.sim.hour;if(x<7||x>=19)return n.modal("Junior don carry ball go house 🌙","Set dey play 7am – 7pm.",[{label:"Okay",close:!0}]);if(n.sim.s.energy<15)return n.modal("Your body no fit run 😮‍💨","You need 15% Body to play.",[{label:"Okay",close:!0}]);const _=await n.rivals.askWager("football","Junior");_!==null&&l(_)};function a(x,_,E,k,y){const M=cn({...Sn(),outfit:"street",...x});return M.position.set(k,0,y),e.root.add(M),{mesh:M,team:_,role:E,home:On(k,y),name:x.name,pos:M.position,cd:0}}function l(x){const _=n.rivals.diff("football");e.junior.visible=!1;const E={me:!0,team:0,role:"fwd",pos:n.pos,name:n.sim.s.name,cd:0,home:On(37,28)},k=[a({name:"Tobi",clothColor:"#ffd23f"},0,"mid",35,25.6),a({name:"Keeper Uche",clothColor:"#ff8fab",hair:"cap"},0,"gk",t.minX+.6,t.cz)],y=[a({name:"Junior",hair:"lowcut",clothColor:"#06d6a0",pantsColor:"#f4f1de"},1,"fwd",43,28),a({name:"Sege",clothColor:"#06d6a0"},1,"mid",45,30.4),a({name:"Keeper Bayo",clothColor:"#1a1423",hair:"cap"},1,"gk",t.maxX-.6,t.cz)];o={me:E,all:[E,...k,...y],score:[0,0],time:90,vel:new P,owner:null,upset:0,over:!1,diff:_,wager:x,lastTouch:null,freeze:0,tackles:0},r(1),n.audio.init(),n.audio.whistle();for(const M of y)Math.random()<.6&&me(M.mesh,n.rivals.talk("pre"),2.5);n.startActivity(m)}function r(x){o.all.forEach(_=>{_.me||_.pos.copy(_.home)}),n.pos.set(x===0?39.4:36,0,28),o.vel.set(0,0,0),i.position.set(t.cx,.18,t.cz),o.owner=x===0?o.me:o.all.find(_=>_.team===1&&_.role==="fwd"),o.freeze=.8}const c=x=>x===0?t.maxX:t.minX,d=x=>o.all.filter(_=>_.team!==x),f=x=>o.all.filter(_=>_.team===x);function p(x,_,E,k=0){const y=_.clone().sub(i.position);y.y=0,y.normalize(),o.vel.copy(y.multiplyScalar(E)),o.vel.y=k,o.owner=null,o.lastTouch=x,x.cd=.35,n.audio.kick()}function h(x,_){const E=t.cz+(Math.random()-.5)*(t.goalMax-t.goalMin)*(1.6-_);return On(c(x)+Math.sign(c(x)-t.cx),E)}const v=x=>{if(!(o.over||o.freeze>0)){if(x==="tackle"){const _=o.owner;if(!_||_.team===0||_.pos.distanceTo(n.pos)>1.3||o.me.cd>0)return;o.me.cd=.8,Math.random()<.55-o.diff*.2?(o.owner=o.me,me(_.mesh,ei(["Ehn?! Foul!","Who teach you that?!","Haba!"]),2),n.audio.tone(300,.08,"square",.1)):(me(_.mesh,"You no fit! 😂",2),o.me.stun=.6,_.name==="Junior"&&++o.tackles%3===0&&S("Stop to dey kick my leg!"));return}if(o.owner===o.me)if(x==="shoot")p(o.me,h(0,.9),15,1.5);else{const _=o.all.find(E=>E.team===0&&E.role==="mid");p(o.me,_.pos.clone().add(On(1.4,0)),10)}}};s.playerAct=v;const m={name:"football",camDist:13,camPitch:.8,buttons:()=>[{label:"Pass ➡️",key:"j",onClick:()=>v("pass")},{label:"Shoot ⚽",key:"k",onClick:()=>v("shoot")},{label:"Tackle 🦵",key:"l",onClick:()=>v("tackle")},{label:"Quit",key:"x",onClick:()=>C("quit")}],update(x){var U;if(o.over)return;o.freeze=Math.max(0,o.freeze-x),o.freeze<=0&&(o.time-=x);const _=n.input(),E=On(_.ix,-_.iy),k=Math.min(1,E.length());o.me.stun=Math.max(0,(o.me.stun||0)-x),o.me.cd-=x,k>.08&&!o.me.stun&&(E.normalize(),n.pos.addScaledVector(E,(_.run?6.2:5.2)*k*x*(o.owner===o.me?.9:1)),n.setRot(Math.atan2(E.x,E.z))),u(n.pos),n.pos.y=0,n.moveAmt=k>.08?_.run?1.5:1:0,n.camYawTo(0,x*3);const y=i.position,M=3.5+o.diff*1.8;for(const L of o.all){if(L.me)continue;L.cd-=x;const F=g(L).clone().sub(L.pos);F.y=0;const H=F.length(),q=L.role==="gk"?M*.9:M*(o.owner===L?.85:1);H>.15&&o.freeze<=0&&(F.normalize(),L.pos.addScaledVector(F,Math.min(H,q*x)),L.mesh.rotation.y=Math.atan2(F.x,F.z)),u(L.pos,L.role==="gk"),L.mesh.position.y=L.jump?Math.abs(Math.sin(n.time*10))*.4:0,hn(L.mesh,x,H>.15?1.3:0,n.time),o.freeze<=0&&w(L,x)}if(o.owner){const L=o.owner,D=L.me?n.rotY():L.mesh.rotation.y;y.set(L.pos.x+Math.sin(D)*.55,.18,L.pos.z+Math.cos(D)*.55),o.vel.set(0,0,0),i.rotation.x+=x*8}else{if(y.addScaledVector(o.vel,x),o.vel.x*=Math.exp(-1.1*x),o.vel.z*=Math.exp(-1.1*x),o.vel.y-=14*x,y.y<.18&&(y.y=.18,o.vel.y=Math.abs(o.vel.y)>1.5?-o.vel.y*.5:0),i.rotation.x+=o.vel.z*x*3,i.rotation.z-=o.vel.x*x*3,y.x>t.maxX||y.x<t.minX){if(y.z>t.goalMin&&y.z<t.goalMax&&y.y<1.2)return b(y.x>t.maxX?0:1);y.x=Tt.clamp(y.x,t.minX,t.maxX),o.vel.x*=-.7,n.audio.tone(120,.06,"triangle",.08)}if((y.z>t.maxZ||y.z<t.minZ)&&(y.z=Tt.clamp(y.z,t.minZ,t.maxZ),o.vel.z*=-.7,n.audio.tone(120,.06,"triangle",.08)),y.y<.7){if(Math.hypot(n.pos.x-y.x,n.pos.z-y.z)<.6&&o.me.cd<=0&&!o.me.stun)o.owner=o.me,o.lastTouch=o.me;else for(const L of o.all)if(!L.me&&L.cd<=0&&Math.hypot(L.pos.x-y.x,L.pos.z-y.z)<(L.role==="gk"?.9+o.diff*.4:.55)){o.owner=L,o.lastTouch=L,L.role==="gk"&&o.vel.length()>6&&me(L.mesh,ei(["SAVE! 🧤","No way!","Na wall I be!"]),2);break}}}const[R,N]=o.score;n.actHud(`<b>⚽ The Set</b> • ⏱ ${Math.max(0,Math.ceil(o.time))}s${o.wager?` • 💰 ${J(o.wager)}`:""}<div class="score"><span style="color:#b8860b">You ${R}</span> – <span style="color:#0a9b74">${N} Junior FC</span></div><small>${o.owner===o.me?"🟡 You get ball!":((U=o.owner)==null?void 0:U.team)===1?"🟢 Dem get ball — tackle!":""} • Junior vex ${"😠".repeat(o.upset)}${"·".repeat(3-o.upset)}</small>`),o.time<=0&&C("time")},onEnd(){n.actHud("")}};function u(x,_){x.x=Tt.clamp(x.x,t.minX+.3,t.maxX-.3),x.z=Tt.clamp(x.z,t.minZ+.3,t.maxZ-.3)}function g(x){const _=i.position,E=x.team,k=c(1-E),y=c(E),M=Math.sign(y-t.cx);if(x.role==="gk"){const L=Tt.clamp(_.z,t.goalMin+.2,t.goalMax-.2),D=Math.abs(_.x-k)<5&&!o.owner?1.6:.5;return On(k-Math.sign(k-t.cx)*D,L)}if(o.owner===x){const L=d(E).filter(F=>F.role!=="gk").sort((F,H)=>F.pos.distanceTo(x.pos)-H.pos.distanceTo(x.pos))[0],D=L&&L.pos.distanceTo(x.pos)<2?Math.sign(x.pos.z-L.pos.z||1)*2:0;return On(y,t.cz+D+(x.pos.z-t.cz)*.3)}if(o.owner&&o.owner.team===E)return On(Tt.clamp(_.x+M*3,t.minX+1,t.maxX-1.5),x.role==="mid"?_.z>t.cz?t.cz-2:t.cz+2:t.cz);const U=f(E).filter(L=>L.role!=="gk"&&!L.me).sort((L,D)=>L.pos.distanceTo(_)-D.pos.distanceTo(_))[0];return x===U||E===1&&x.role==="fwd"&&o.diff>.6?_.clone().setY(0):On((_.x+k)/2,(_.z+t.cz)/2)}function w(x,_){const E=x.team;if(i.position,o.owner===x){const y=c(E),M=Math.abs(y-x.pos.x),R=d(E).some(N=>N.role!=="gk"&&N.pos.distanceTo(x.pos)<1.3);if(x.role==="gk"){const N=f(E).find(U=>U.role==="mid"||U.me)||f(E)[0];x.cd=0,p(x,N.pos.clone(),11,2);return}if(M<6+o.diff*2&&Math.random()<_*3){p(x,h(E,.5+o.diff*.45),12+o.diff*4,1.2),E===1&&Math.random()<.5&&me(x.mesh,ei(["Shoot!!","Goal dey come!","Catch this one!"]),1.5);return}if(R&&Math.random()<_*(2+o.diff*3)){const N=f(E).find(U=>U!==x&&U.role!=="gk");N&&p(x,N.me?n.pos.clone():N.pos.clone().add(On(Math.sign(y-t.cx),0)),9)}return}const k=o.owner;k&&k.team!==E&&x.role!=="gk"&&x.cd<=0&&k.pos.distanceTo(x.pos)<.8&&(x.cd=1.1-o.diff*.4,Math.random()<.35+o.diff*.4&&(o.owner=x,k.me&&(o.me.stun=.4,me(x.mesh,ei(["Collect! 😂","Too slow!","Na my ball now!"]),1.8))))}function b(x){o.score[x]++,n.audio.cheer(),n.audio.whistle(),n.toast(x===0?"GOOOAL!! ⚽🔥":"Junior FC score! 😩",x===0?"good":"bad");const _=f(x).filter(k=>!k.me),E=f(1-x).filter(k=>!k.me);_.forEach(k=>{k.jump=!0,me(k.mesh,ei(x===0?["GOAL! 🎉","Odogwu!!","Na so!"]:["GOAL! Feel am! 😂","Junior FC!!",n.rivals.talk("lead")]),2.5)}),E.forEach(k=>me(k.mesh,ei(x===0?["Ehn?! Keeper wetin you dey do?!","Na luck!",n.rivals.talk("behind")]:["Defend now!","Ah!"]),2.5)),setTimeout(()=>o&&o.all.forEach(k=>k.jump=!1),1600),x===0&&o.score[0]-o.score[1]>=3&&S(ei(["Una dey cheat!","This one na offside!"])),o.over||(r(1-x),o.freeze=1.6)}function S(x){o.upset++,me(o.all.find(_=>_.name==="Junior").mesh,x+(o.upset>=2?" I go carry my ball go house o!":""),3),o.upset>=3&&C("junior")}function C(x){if(!o||o.over)return;o.over=!0;const _=n.sim.s,[E,k]=o.score;o.all.forEach(U=>{U.me||e.root.remove(U.mesh)}),e.junior.visible=!0,i.position.set(t.cx,.18,t.cz),n.endActivity(),n.pos.set(50.2-1.6,0,27.2),_.energy=Math.max(0,_.energy-15),_.statsV2.matches++,n.sim.advance(60,{working:!0});let y,M,R;x==="junior"?(R="d",_.mood=Math.max(0,_.mood-5),y="Junior carry him ball go house! 😤",M=`"I no dey play again!" Match end ${E}–${k}. Wager refunded.`):x==="quit"?(R="l",y="You comot from match 🏳️",M=`Score ${E}–${k}. Na forfeit be that${o.wager?" — you lose your wager":""}.`):E>k?(R="w",_.mood=Math.min(100,_.mood+20),_.statsV2.wins++,n.sim.addFollowers(5),y="You WIN! 🏆",M=`${E}–${k}! +20 Mind${o.wager?` • +${J(o.wager*2)}`:""}. Junior: "${n.rivals.talk("lose")}"`,n.audio.cheer()):E===k?(R="d",_.mood=Math.min(100,_.mood+8),y="Draw 🤝",M=`${E}–${k}. +8 Mind. Wager refunded.`):(R="l",_.mood=Math.min(100,_.mood+2),y="You lose 😅",M=`${E}–${k}. Junior: "${n.rivals.talk("win")}"`);const N=n.rivals.record("football","Junior",R,o.wager);n.modal(y,M+`<br><small>Streak: ${N} 🔥 • Next difficulty ${Math.round(n.rivals.diff("football")*100)}%</small>`,[{label:"Rematch! ⚽",onClick:()=>setTimeout(s.offer,50)},{label:"Okay ➜",close:!0}]),o=null,n.save()}return s.active=()=>!!o,s.state=()=>o,s}function Zy(n){const e={},t=new P,i=(a,l=32)=>{const r=n.camera.position.distanceTo(a);return t.copy(a).project(n.camera),Math.abs(t.x)<.95&&Math.abs(t.y)<.95&&t.z<1&&r<l};function s(){const a=n.world,l=[];let r=0,c=0;for(const g of[...a.walkers.map(w=>w.mesh),...a.npcs.map(w=>w.mesh)])g.visible&&i(g.position.clone().setY(1),25)&&c++;c&&(r+=Math.min(8,c)*3,l.push(`${c} people`));let d=0;for(const g of a.vehicles)i(g.mesh.position.clone().setY(1.2),30)&&(r+=g.type==="danfo"?6:4,d++);d&&l.push(`${d} Danfo/Keke`);const f=[["market umbrellas",new P(-21,2.5,15),5],["Lagos lagoon",new P(-96,0,0),8],["construction crane",new P(100,20,-10),4],["The Set",new P(40,.5,28),4],["Mama Put",new P(18,2,-16),4],["Mega Fuel",new P(64,3,15),3]];for(const[g,w,b]of f)i(w,45)&&(r+=b,l.push(g));const p=n.sim.isNight,h=n.sim.s.power,v=n.sim.hour;p&&h&&a.neons.some((g,w)=>i(new P(...[[-11,4.2,-13.8],[50,4.3,-13.8],[29,4.2,14.4],[21.8,2.8,-14],[64,5.6,12.1]][w]),40))&&(r+=6,l.push("neon signs")),i(n.pos.clone().setY(1.1),15)&&(r+=6,l.push("selfie"));let m=1,u="midday";return v>=17&&v<19.5?(m=1.6,u="golden hour ✨"):v>=6&&v<8?(m=1.2,u="morning glow"):p&&h?(m=1.2,u="city lights"):p&&(m=.6,u="too dark (NEPA)"),{pts:Math.round(r*m),hits:l,light:u}}function o(){n.renderNow();const a=n.renderer.domElement,l=document.createElement("canvas");l.width=192,l.height=120;const r=l.getContext("2d");a.width/a.height;const c=a.height*(192/120);return r.drawImage(a,(a.width-Math.min(a.width,c))/2,0,Math.min(a.width,c),a.height,0,0,192,120),l.toDataURL("image/jpeg",.6)}return e.start=a=>{n.closePhone(),document.body.classList.add("photo-mode");const l=document.getElementById("flash"),r={name:"photo",camDist:6.5,camPitch:.22,allowWalk:!0,buttons:()=>[{label:a==="chakam"?"🎥 Snap evidence":"📸 Snap",key:" ",onClick:d},{label:"➕",key:"=",onClick:()=>n.zoom(-1.5)},{label:"➖",key:"-",onClick:()=>n.zoom(1.5)},{label:"✕ Cancel",key:"x",onClick:c}],update(){n.actHud(a==="chakam"?"<b>🎥 Chakam</b><br><small>Point camera at the wahala (drag to turn), then snap</small>":"<b>📸 Clout camera</b><br><small>Drag to frame • walk to move • golden hour = more clout</small>")},onEnd(){document.body.classList.remove("photo-mode"),n.actHud("")}};function c(){n.endActivity()}function d(){if(n.isBusy())return;l.classList.remove("on"),l.offsetWidth,l.classList.add("on"),n.audio.tone(1800,.05,"square",.08);const f=o(),p=n.sim.s;if(a==="chakam"){const m=n.events.chakamCheck(n.camera);if(!m)return n.modal("No evidence 🤷🏾","Nothing chakam-worthy for this frame. Check Messages for tips about wahala wey dey happen.",[{label:"Try again",close:!0}]);n.modal(`🎥 You chakam: ${m.e.name}!`,`<img class="snap" src="${f}"><br>Upload go expose dem (karma + clout), or "settle" privately for cash (karma loss).`,[{label:"Upload to Chakam 📤",sub:"Needs 30MB data • +8 karma",disabled:p.dataMB<30,onClick:()=>{n.sim.useData(30),n.events.resolveChakam(!0),c()}},{label:"Settle privately 🤫",sub:"Dem go beg you with money • -10 karma",onClick:()=>{n.events.resolveChakam(!1),c()}},{label:"Keep am for now",close:!0}]);return}const h=s(),v=Math.max(1,Math.round(h.pts*(.7+Math.random()*.6)*(1+p.followers/800)));n.modal("📸 Post to Clout?",`<img class="snap" src="${f}"><br>In frame: <b>${h.hits.join(", ")||"nothing special"}</b> • Light: <b>${h.light}</b><br>Clout score: <b>${h.pts}</b>`,[{label:"Post am! 🚀",sub:"Uses 25MB data",disabled:p.dataMB<25,onClick:()=>{n.sim.useData(25),p.posts.unshift({t:p.t,img:f,gain:v,likes:v*3+Math.floor(Math.random()*20),hits:h.hits.slice(0,3)}),p.posts.length>6&&(p.posts.length=6),n.sim.addFollowers(v),p.mood=Math.min(100,p.mood+3),n.audio.ping(),n.toast(`Posted! +${v} followers (${p.followers} total) 📈`,"good"),n.save()}},{label:"Discard",close:!0}])}n.startActivity(r)},e}const Qy=[["wallet","💰","Wallet"],["msgs","💬","Messages"],["feed","📰","Gist"],["clout","📸","Clout"],["chakam","🎥","Chakam"],["lapo","🏦","LapoPay"],["data","📶","Data"],["rivals","🏆","Rivals"]],Sa={feed:2,clout:3,chakam:3,lapo:1};function e_(n){const e=l=>document.getElementById(l);let t="wallet";const i=document.querySelector(".phone-tabs");i.innerHTML=Qy.map(([l,r,c])=>`<button data-tab="${l}"><span>${r}</span><small>${c}</small><i class="dot" data-dot="${l}"></i></button>`).join(""),i.querySelectorAll("button").forEach(l=>l.addEventListener("click",()=>{t=l.dataset.tab,n.audio.click(),a(!0)}));const s=l=>{const r=Math.floor(l/1440),c=Math.floor(l%1440/60);return r?`${r}d ${c}h`:`${c}h ${l%60}m`},o=()=>'<div class="wcard" style="text-align:center"><div style="font-size:44px">📵</div><b>No data o!</b><p class="fine">This app need internet. Buy data bundle for the Data app.</p><button class="btn primary" id="goData">Buy data</button></div>';function a(l=!1){const r=n.sim,c=r.s,d=e("phoneBody");if(i.querySelectorAll("button").forEach(h=>h.classList.toggle("active",h.dataset.tab===t)),i.querySelector('[data-dot="msgs"]').classList.toggle("on",c.unreadMsg>0),i.querySelector('[data-dot="feed"]').classList.toggle("on",c.unread>0),Sa[t]&&c.dataMB<Sa[t]){d.innerHTML=o(),e("goData").onclick=()=>{t="data",a()};return}l&&Sa[t]&&r.useData(Sa[t]);const f=r.tier,p=Ja[Ja.indexOf(f)+1];if(t==="wallet")d.innerHTML=`
        <div class="wcard bal"><div class="k">Wallet balance</div><div class="v">${J(c.cash)}</div><div class="k">Tier: Lapo • Status to Nepo: ${r.statusPoints}%</div><div class="mini-bar"><i style="width:${r.statusPoints}%;background:#ffd23f"></i></div></div>
        <div class="wgrid">
          <div class="wcard"><div class="k">Rent owed</div><div class="v" style="color:${c.rentOwed?"#e71d36":"#0a9b74"}">${J(c.rentOwed)}</div></div>
          <div class="wcard"><div class="k">Due (Sat 11:59pm)</div><div class="v">${s(r.rentCountdown())}</div></div>
          <div class="wcard"><div class="k">LapoPay loan</div><div class="v" style="color:#8338ec">${J(c.loan)}</div></div>
          <div class="wcard"><div class="k">Karma 🙏</div><div class="v" style="color:${c.karma>=0?"#0a9b74":"#e71d36"}">${c.karma>0?"+":""}${c.karma}</div></div>
          <div class="wcard"><div class="k">Data</div><div class="v">${c.dataMB}MB</div></div>
          <div class="wcard"><div class="k">Followers</div><div class="v">${c.followers}</div></div>
          <div class="wcard"><div class="k">Danfo fare</div><div class="v">${J(r.danfoFare)}</div></div>
          <div class="wcard"><div class="k">Keke fuel</div><div class="v">${c.kekeFuel.toFixed(1)}L</div></div>
        </div>
        <div class="btn-row"><button class="btn primary" id="phRent" ${!c.rentOwed||c.cash<c.rentOwed?"disabled":""}>Transfer rent to Baba Ade</button></div>
        <p class="fine">Earned ${J(c.stats.earned)} • Keke trips ${c.statsV2.trips} • Hawked ${c.statsV2.hawked} • Shifts ${c.statsV2.shifts} • Good deeds ${c.statsV2.deeds} • Matches won ${c.statsV2.wins}/${c.statsV2.matches}${c.strikes?` • ⚠️ Eviction strikes ${c.strikes}/2`:""}${p?`<br>Next money tier: ${p.label} @ ${J(p.min)}`:""}</p>`,e("phRent").onclick=()=>{const h=r.payRent(c.rentOwed);n.toast(`Rent transfer successful: ${J(h)} ✔`,"good"),a(),n.save()};else if(t==="msgs")c.unreadMsg=0,c.messages.forEach(h=>h.read=!0),d.innerHTML=c.messages.map(h=>`<div class="post msg ${h.kind}"><span class="h">${h.from}</span><span class="tm">${r.dayStr(h.t).slice(0,3)} ${r.timeStr(h.t)}</span><div>${h.text}</div></div>`).join("")||'<p class="fine">No messages yet. Your phone dey quiet 🤫</p>';else if(t==="feed")c.unread=0,d.innerHTML=c.feed.map(h=>`<div class="post ${h.kind}"><span class="h">${h.handle}</span><span class="tm">${r.dayStr(h.t).slice(0,3)} ${r.timeStr(h.t)}</span><div>${h.text}</div></div>`).join("");else if(t==="clout")d.innerHTML=`<div class="lapo-hero" style="background:#ff4fa3"><div class="k">Clout followers</div><div class="v">${c.followers.toLocaleString()}</div><div style="font-size:12px;font-weight:700">Snap Lagos life: people, Danfo, market, lagoon, neon at night. Golden hour (5–7pm) = more clout. Big followers = sponsorship 💸</div></div>
        <button class="btn primary" id="openCam" style="width:100%">📸 Open camera</button>
        <div class="posts">${c.posts.map(h=>`<div class="pcard"><img src="${h.img}"><div><b>+${h.gain}</b> followers • ❤️ ${h.likes}<br><small>${(h.hits||[]).join(", ")}</small></div></div>`).join("")||'<p class="fine">No posts yet.</p>'}</div>`,e("openCam").onclick=()=>n.photo.start("clout");else if(t==="chakam"){const h=n.events.chakam;d.innerHTML=`<div class="lapo-hero" style="background:#1a1423"><div class="k">Chakam 🎥</div><div style="font-size:13px;font-weight:700">Snap evidence of wahala (agbero extortion, scammers, checkpoint bribes). Upload = karma + clout. Settle = cash, but your karma go suffer.</div></div>
        <div class="wcard">${h?`🔴 <b>Live tip:</b> ${h.e.name} near the <b>${h.e.spot}</b>. Go there and snap!`:"🟢 No active wahala reported. Check Messages for tips."}</div>
        <button class="btn primary" id="openCh" style="width:100%">🎥 Open Chakam camera</button><p class="fine">Exposed so far: ${c.statsV2.chakam}</p>`,e("openCh").onclick=()=>n.photo.start("chakam")}else if(t==="lapo"){const h=c.loanDue?Math.max(0,c.loanDue-c.t):0;d.innerHTML=`
        <div class="lapo-hero"><div class="k">LapoPay balance owed</div><div class="v">${J(c.loan)}</div><div style="font-size:12px;font-weight:700">Interest: ${Math.round(Tu*100)}% every day + 10% "processing fee" 👀 • Max ₦15,000<br>${c.loan?h?`Next payment due in ${s(h)} (pay ≥ ₦1,000 to extend 3 days)`:"⚠️ OVERDUE — recovery agents dey come!":"No active loan"}</div></div>
        <div class="btn-row"><button class="btn green" id="lp5">Borrow ₦5,000</button><button class="btn green" id="lp10">Borrow ₦10,000</button></div>
        <div class="btn-row"><button class="btn" id="lpr1" ${!c.loan||c.cash<1?"disabled":""}>Repay ₦1,000</button><button class="btn primary" id="lpra" ${!c.loan||c.cash<1?"disabled":""}>Repay all</button></div>
        <p class="fine">Miss repayment: recovery texts → calls → agents go come meet you to collect, seize your things or shame you for GistMe. (Na game money only.)</p>`;const v=m=>{r.borrow(m)?(n.toast(`LapoPay: ${J(m)} don land 💸`,"money"),n.audio.cash()):n.toast("LapoPay: Limit reach! Pay first 🙅🏾","bad"),a(),n.save()};e("lp5").onclick=()=>v(5e3),e("lp10").onclick=()=>v(1e4),e("lpr1").onclick=()=>{const m=r.repay(1e3);n.toast(`Repaid ${J(m)}`,"good"),a(),n.save()},e("lpra").onclick=()=>{const m=r.repay(c.loan);n.toast(`Repaid ${J(m)}`,"good"),a(),n.save()}}else if(t==="rivals"){const h=n.rivals.board(),v=c.streaks||{},m=c.bestStreak||{},u=Object.entries(c.rel||{}).sort((g,w)=>w[1]-g[1]);d.innerHTML=`<div class="lapo-hero" style="background:#ff6b35"><div class="k">Street Games Rivals 🏆</div><div style="font-size:12px;font-weight:700">⚽ Football streak ${v.football||0} (best ${m.football||0}) • ⚫ Draughts ${v.draughts||0} (best ${m.draughts||0}) • 🌰 Ayo ${v.ayo||0} (best ${m.ayo||0}) • 🎲 Ludo ${v.ludo||0} • 🃏 Whot ${v.whot||0} • 🏓 Table tennis ${v.pingpong||0} (best ${Math.max(m.ludo||0,m.whot||0,m.pingpong||0)})</div></div>
        <div class="wcard"><table class="lb"><tr><th>#</th><th>Rival</th><th>W</th><th>D</th><th>L</th></tr>${h.map((g,w)=>`<tr><td>${w+1}</td><td>${g.name}</td><td>${g.w}</td><td>${g.d}</td><td>${g.l}</td></tr>`).join("")||"<tr><td colspan=5>No matches yet. Go The Set or the tree by Ojuelegba road!</td></tr>"}</table></div>
        <div class="wcard"><div class="k">People wey know you</div>${u.map(([g,w])=>`<div style="display:flex;justify-content:space-between;font-size:12px"><span>${g}</span><span>${n.social.relWord(w)} ${w}</span></div>`).join("")||"<small>Talk to people (E) to build relationships</small>"}</div>`}else d.innerHTML=`<div class="wcard bal"><div class="k">Data balance</div><div class="v">${c.dataMB} MB</div><div class="k">Gist 2MB/open • Clout post 25MB • Chakam upload 30MB • Background 20MB/day</div></div>
        ${cd.map(h=>`<button class="opt" data-plan="${h.id}" ${c.cash<h.price?"disabled":""}><span>${h.name}<small>Pay from wallet</small></span><span class="price">${J(h.price)}</span></button>`).join("")}`,d.querySelectorAll("[data-plan]").forEach(h=>h.onclick=()=>{const v=cd.find(m=>m.id===h.dataset.plan);r.buyData(v)&&(n.toast(`${v.name} activated 📶`,"good"),n.audio.ping()),a(),n.save()})}return{render:a,open(l){l&&(t=l),e("phone").classList.remove("hidden"),a(!0)},get tab(){return t}}}const Mi=(n,e)=>new P(n,0,e);function t_(n){const{world:e}=n,t={list:{},cur:null},i=e.root;function s(a,{ox:l,w:r=10,d:c=7,wall:d="#f6dcb4",floor:f="#c99a6b",name:p,door:h,light:v="#ffe6b0",floorMap:m}){const u=new ht;u.position.set(l,0,0),i.add(u);const g=ne(new Ge(r,.2,c),Y(m?"#ffffff":f,m?{map:m}:{}),{t:.02,receive:!0,cast:!1});g.position.y=-.1,u.add(g);const w=Y(d),b=ne(new Ge(r,3.2,.25),w,{t:.02});b.position.set(0,1.6,-c/2),u.add(b);for(const E of[-1,1]){const k=ne(new Ge(.25,3.2,c),w,{t:.02});k.position.set(E*r/2,1.6,0),u.add(k)}for(const E of[-1,1]){const k=ne(new Ge(r/2-.8,.5,.2),w,{t:.02});k.position.set(E*(r/4+.4),.25,c/2),u.add(k)}const S=ne(new Ge(1.4,.03,.7),Y("#e71d36"),{outline:!1});S.position.set(0,.02,c/2-.5),u.add(S);const C=new Ce(new rn(4.2,.8),Y("#ffffff",{map:Da(p,{bg:"#ffd23f"})}));C.position.set(0,2.7,-c/2+.14),u.add(C);const x=new qa(v,18,16,1.4);x.position.set(0,3.2,.5),u.add(x);const _={id:a,g:u,ox:l,w:r,d:c,name:p,door:h,light:x,cols:[],hots:[],npcs:[],spin:[]};return _.toLocal=(E,k)=>Mi(l+E,k),_.col=(E,k,y,M)=>_.cols.push({minX:l+E-y,maxX:l+E+y,minZ:k-M,maxZ:k+M}),_.box=(E,k,y,M,R,N,U,L={})=>{const D=ne(new Ge(E,k,y),typeof M=="string"?Y(M):M,{t:.03,...L});return D.position.set(R,N,U),u.add(D),L.col!==!1&&N-k/2<.6&&_.col(R,U,E/2,y/2),D},_.hot=(E,k,y,M,R)=>_.hots.push({pos:Mi(l+E,k),r:y,label:M,act:R}),_.npc=(E,k,y,M,R)=>{const N=cn({...Sn(),...E});N.position.set(l+k,0,y),N.rotation.y=M,R&&oi(N),i.add(N);const U={mesh:N,name:E.name,lines:E.lines,talkT:Math.random()*6};return _.npcs.push(U),n.social.register(U),R||_.col(k,y,.35,.35),U},_.hot(0,c/2-.3,1.2,"Comot outside 🚪",()=>t.exit()),t.list[a]=_,_}const o=an(["#c99a6b","#b8875a"],10,!1,[1,3]);{const a=s("room",{ox:300,w:9,d:6.5,wall:"#f6dcb4",name:"ROOM 4 🏠",door:Mi(-30,-13.6),floorMap:o});a.box(2.2,.5,1.4,Y("#ffffff",{map:es("circles","#3a86ff","#ffd23f","#e71d36",[2,1])}),-2.8,.35,-2.2),a.box(2.2,.25,1.4,"#8d5a2b",-2.8,.1,-2.2,{col:!1}),a.box(.5,.2,1,"#fdfcdc",-3.6,.7,-2.2,{col:!1}),a.hot(-2.8,-1.2,1.4,"Bed: sleep / nap 😴",()=>n.homeMenu()),a.box(.08,1.4,.08,"#555",2.6,.7,-2.5);const l=new ht;l.position.set(a.ox+2.6,1.5,-2.4),i.add(l);for(let c=0;c<3;c++){const d=ne(new Ge(.12,.5,.02),Y("#7ec8e3"),{t:.02});d.rotation.z=c*2.094,d.position.set(Math.sin(c*2.094)*.22,Math.cos(c*2.094)*.22,0),d.rotation.z=-c*2.094,l.add(d)}a.fan=l,a.box(1.2,.08,.7,"#8d5a2b",2.6,.75,.2),a.box(.1,.75,.1,"#5a3a1a",2.6,.37,.2,{col:!1});const r=ne(new An(.16,10,8),Y("#fff3b0",{emissive:"#ffd27a",unique:!0}),{t:.02});r.position.set(a.ox+2.6,1.1,.2),i.add(r),a.bulb=r,a.hot(2.6,.9,1.3,"Pay rent / check room 🏠",()=>n.homeMenu()),a.box(.6,.8,.2,"#e71d36",4.2,1.4,-1,{col:!1}),a.box(.3,.12,.05,"#ffd23f",4.08,1.5,-1,{col:!1}),a.hot(3.7,-1,1.3,"Gen switch & fuel ⛽",()=>n.genMenu()),a.box(1.2,1.8,.6,"#a0522d",-.6,.9,-2.9),a.box(.9,.55,.08,"#1a1423",.9,1.6,-3.1,{col:!1}),a.room=!0,a.update=()=>{const c=n.sim.homePowered;l.rotation.z+=c?.3:0,r.material.emissiveIntensity=c?1.5:.05,a.light.intensity=c?18:3,a.light.color.set(c?"#ffe6b0":"#ff9a4a")}}{const a=s("buka",{ox:330,w:11,d:7.5,wall:"#ffd6a5",name:"MAMA PUT 🍛",door:Mi(18,-13.2),floor:"#d9b48f"});a.box(4,1,.8,"#e76f51",0,.5,-2.6);for(const[l,r]of[[-1.2,"#555"],[0,"#e71d36"],[1.2,"#3a86ff"]]){const c=ne(new Wt(.35,.3,.5,12),Y(r),{t:.02});c.position.set(a.ox+l,1.25,-2.6),i.add(c)}a.npc({name:"Iya Basira",hair:"gele",outfit:"ankaraDress",clothColor:"#e71d36",accentColor:"#ffd23f",lines:["Food dey!","Jollof hot!"]},0,-3.3,0),a.hot(0,-1.6,1.5,"Order food from Iya Basira 🍛",()=>n.bukaMenu());for(const[l,r]of[[-3,.5],[3,.5],[-3,2.4],[3,2.4]]){a.box(1.6,.08,.9,"#2ec4b6",l,.75,r),a.box(.1,.75,.1,"#1a1423",l,.37,r,{col:!1});for(const c of[-1,1])a.box(1.6,.4,.35,"#8d5a2b",l,.2,r+c*.75,{col:!1})}a.npc({name:"Tunde",outfit:"street",lines:["This stew sweet!"]},-3.3,-.25,0,!0),a.npc({name:"Kemi",outfit:"ankaraDress",lines:["Add more meat abeg"]},3.2,3.15,Math.PI,!0),a.hot(-2.6,1.25,1,"Sit down & chop 🍽️",()=>n.sitEat(a.toLocal(-2.6,1.25))),a.hot(2.8,-.25,1,"Sit down & chop 🍽️",()=>n.sitEat(a.toLocal(2.8,-.25)))}{const a=s("shop",{ox:360,w:10,d:7,wall:"#ffe066",name:"MAMA NKECHI 🛒",door:Mi(-11,-13.3),floor:"#c9c3b6"});for(const l of[-3.6,3.6]){a.box(1.2,2.4,.6,"#8d5a2b",l,1.2,-2.9);for(let r=0;r<4;r++)for(let c=0;c<3;c++){const d=ne(new Ge(.28,.35,.3),Y(["#e71d36","#06d6a0","#3a86ff","#ffd23f","#ff8fab"][(r+c)%5]),{t:.02});d.position.set(a.ox+l-.35+c*.35,.45+r*.55,-2.55),i.add(d)}}a.box(1,1.9,.8,"#e0f7ff",0,.95,-3),a.box(3.6,1,.8,"#3a86ff",0,.5,-1.2),a.npc({name:"Mama Nkechi",hair:"gele",outfit:"ankaraDress",clothColor:"#3a86ff",lines:["Wetin you wan buy?","Pure water cold!"]},0,-2.1,0),a.hot(0,-.2,1.5,"Buy from Mama Nkechi 🛒",()=>n.shopMenu())}{const a=s("church",{ox:390,w:13,d:10,wall:"#fdfcdc",name:"HOLY GHOST FIRE ⛪",door:Mi(13,13.3),floor:"#b23a48"});a.box(4,.5,1.6,"#e9c46a",0,.25,-3.8),a.box(.8,1.1,.5,"#8d5a2b",0,1.05,-3.6,{col:!1});const l=new ht;l.position.set(a.ox,2.4,-4.85),i.add(l),l.add(ne(new Ge(.18,1.3,.1),Y("#ffd23f",{emissive:"#ffb000"}),{t:.02}));const r=ne(new Ge(.8,.18,.1),Y("#ffd23f",{emissive:"#ffb000"}),{t:.02});r.position.y=.2,l.add(r),a.npc({name:"Pastor Fire",hair:"bald",outfit:"kaftan",clothColor:"#1a1423",accentColor:"#ffd23f",lines:["Receive your breakthrough!","Somebody shout Hallelujah!","Holy Ghost FIRE! 🔥"]},0,-3.3,0),a.npc({name:"Choir Sis Ada",hair:"braids",outfit:"ankaraDress",clothColor:"#8338ec",lines:["🎶 Alpha and Omega 🎶"]},-4.5,-3.2,.3),a.npc({name:"Choir Bro Tayo",hair:"lowcut",outfit:"kaftan",clothColor:"#8338ec",lines:["🎶 Hallelujah! 🎶"]},4.5,-3.2,-.3);for(let c=0;c<3;c++)for(const d of[-1,1])a.box(4,.45,.5,"#8d5a2b",d*3,.23,-.8+c*1.7);a.npc({name:"Mama Joy",hair:"gele",outfit:"ankaraDress",lines:["Amen! 🙏"]},-4,-1.3,0,!0),a.npc({name:"Bro Sunday",hair:"cap",outfit:"kaftan",lines:["Hallelujah!"]},3.5,.4,0,!0),a.hot(-2.2,.4,1.2,"Sit & pray 🙏",()=>n.pray(a.toLocal(-2.2,.4-.45))),a.hot(0,-2.2,1.4,"Drop offering ₦200 💸",()=>{if(!n.sim.spend(200))return n.toast("You no get ₦200 😅","bad");n.sim.addKarma(2,"offering"),n.toast('Pastor: "God go double am!" 🙏',"good")})}{const a=s("barber",{ox:420,w:10,d:7,wall:"#ff9eb5",name:"GOD'S TIME IS BEST ✂️",door:Mi(-62,-13.3),floor:"#f4f1de"});for(const l of[-2,2])a.box(.9,.5,.9,"#1a1423",l,.45,-1.6),a.box(1.6,1,.08,"#bde0fe",l,1.7,-3.15,{col:!1});a.npc({name:"Barber Kola",hair:"lowcut",outfit:"street",clothColor:"#06d6a0",lines:["Low cut na ₦1,500","Next customer!"]},-2,-.6,Math.PI),a.npc({name:"Customer Femi",hair:"afro",outfit:"street",lines:["Make e clean o"]},2,-1.6,0,!0),a.box(3,.4,.5,"#8d5a2b",0,.2,2,{col:!1}),a.hot(-2,-1,1.3,"Barb hair ₦1,500 ✂️",()=>n.haircut())}{const a=s("pharmacy",{ox:450,w:9,d:6.5,wall:"#e0fff0",name:"ALHAJI PHARMACY ➕",door:Mi(29,13.8),floor:"#ffffff"});a.box(3.4,1,.8,"#06d6a0",0,.5,-1.2);for(let l=0;l<6;l++){const r=ne(new Ge(.3,.3,.2),Y(["#ff8fab","#ffffff","#3a86ff"][l%3]),{t:.02});r.position.set(a.ox-1.6+l*.6,1.7,-3.05),i.add(r)}a.npc({name:"Alhaji Musa",hair:"cap",outfit:"kaftan",clothColor:"#ffffff",accentColor:"#06d6a0",lines:["Paracetamol dey","Wetin dey do you?"]},0,-2.1,0),a.hot(0,-.2,1.4,"Buy medicine 💊",()=>n.modal("Alhaji Pharmacy ➕",'"Wetin dey do you, my pikin?"',[{label:"Paracetamol & Lucozade",sub:"+20 Body",price:J(800),disabled:n.sim.s.cash<800,onClick:()=>{n.sim.spend(800),n.sim.s.energy=Math.min(100,n.sim.s.energy+20),n.toast("Body don dey better 💊","good")}},{label:"Vitamin C",sub:"+8 Mind",price:J(400),disabled:n.sim.s.cash<400,onClick:()=>{n.sim.spend(400),n.sim.s.mood=Math.min(100,n.sim.s.mood+8)}},{label:"Comot",close:!0}]))}return t.doorHot=()=>{if(t.cur||n.activityName())return null;for(const a of Object.values(t.list))if(Math.hypot(n.pos.x-a.door.x,n.pos.z-a.door.z)<2)return{label:`Enter ${a.name}`,act:()=>t.enter(a.id)};return null},t.enter=(a,l=!1)=>{const r=t.list[a];if(t.entering)return;t.entering=!0;const c=()=>{t.entering=!1,t.cur=r,n.pos.set(r.ox,0,r.d/2-1.1),n.setRot(Math.PI),n.carry.drop(),n.snapCam(),n.audio.tone(660,.1,"sine",.08)};return l?c():n.fade(`🚪 ${r.name}`,250,c)},t.exit=()=>{const a=t.cur;if(!(!a||t.exiting))return t.exiting=!0,n.fade("🚪 Outside",250,()=>{t.exiting=!1,t.cur===a&&(t.cur=null,n.pos.set(a.door.x,0,a.door.z+(a.door.z<0?1.4:-1.4)),n.setRot(a.door.z<0?0:Math.PI),n.snapCam())})},t.hot=()=>{if(!t.cur||n.activityName())return null;let a=null,l=1e9;for(const r of t.cur.hots){const c=Math.hypot(n.pos.x-r.pos.x,n.pos.z-r.pos.z);c<r.r&&c<l&&(l=c,a=r)}return a},t.resolve=(a,l=.35)=>{const r=t.cur;if(r){a.x=Tt.clamp(a.x,r.ox-r.w/2+.3+l,r.ox+r.w/2-.3-l),a.z=Tt.clamp(a.z,-r.d/2+.3+l,r.d/2-.25);for(const c of r.cols){const d=Tt.clamp(a.x,c.minX,c.maxX),f=Tt.clamp(a.z,c.minZ,c.maxZ),p=a.x-d,h=a.z-f,v=Math.hypot(p,h);v<l&&(v>1e-5?(a.x=d+p/v*l,a.z=f+h/v*l):a.z=c.maxZ+l)}}},t.update=a=>{var l;for(const r of Object.values(t.list))if((l=r.update)==null||l.call(r),r===t.cur)for(const c of r.npcs)hn(c.mesh,a,0,n.time),c.talkT-=a,c.talkT<0&&c.lines&&(c.talkT=7+Math.random()*8,me(c.mesh,c.lines[Math.floor(Math.random()*c.lines.length)],3))},t.hairStyles=cr,t}const fd=n=>n[Math.floor(Math.random()*n.length)];function n_(n){const e=new ht;if(n==="crate"){e.add(ne(new Ge(.7,.5,.55),Y("#c68642"),{t:.03}));const t=ne(new Ge(.72,.08,.57),Y("#8d5a2b"),{outline:!1});t.position.y=.1,e.add(t)}else if(n==="water")for(let t=0;t<4;t++){const i=ne(new An(.17,8,6),Y("#bfe9ff",{opacity:.85}),{t:.02});i.scale.y=.6,i.position.set(t%2*.28-.14,0,Math.floor(t/2)*.28-.14),e.add(i)}else if(n==="ball")e.add(ne(new Qi(.2,1),Y("#ff6b35"),{t:.02}));else if(n==="chair"){const t=Y("#3a86ff"),i=ne(new Ge(.5,.06,.5),t,{t:.02});i.position.y=.42,e.add(i);const s=ne(new Ge(.5,.5,.06),t,{t:.02});s.position.set(0,.68,-.22),e.add(s);for(const[o,a]of[[-.21,-.21],[.21,-.21],[-.21,.21],[.21,.21]]){const l=ne(new Wt(.03,.03,.42,5),t,{outline:!1});l.position.set(o,.21,a),e.add(l)}}else if(n==="bucket"){e.add(ne(new Wt(.25,.19,.4,12),Y("#ffd23f"),{t:.03}));const t=ne(new Wt(.22,.22,.02,12),Y("#7ec8e3"),{outline:!1});t.position.y=.15,e.add(t)}else if(n==="phone"){e.add(ne(new Ge(.16,.03,.3),Y("#1a1423"),{t:.02}));const t=ne(new Ge(.13,.01,.25),Y("#5ad1ff",{emissive:"#3aa0ff"}),{outline:!1});t.position.y=.02,e.add(t)}else if(n==="bread"){const t=ne(new Fo(.13,.35,4,8),Y("#e9a94f"),{t:.02});t.rotation.z=Math.PI/2,e.add(t)}return e}const mo={crate:{name:"crate",ic:"📦",head:!0,h:.25},water:{name:"pure water bag",ic:"💧",head:!0,h:.1},ball:{name:"ball",ic:"⚽",h:.2},chair:{name:"plastic chair",ic:"🪑",h:0},bucket:{name:"bucket",ic:"🪣",head:!0,h:.2},phone:{name:"lost phone",ic:"📱",h:.02},bread:{name:"Agege bread",ic:"🍞",h:.13}};function i_(n){const{world:e}=n,t={props:[],held:null},i=e.root;t.spawn=(m,u,g,w={})=>{const b=n_(m);b.position.set(u,0,g),i.add(b);const S={type:m,mesh:b,vel:new P,flying:!1,...w};return t.props.push(S),S},[[-24.5,11.6],[-23.6,11.8],[-19.2,11.4]].forEach(([m,u])=>t.spawn("crate",m,u)),[[-9.4,-12.4],[-12.8,-12.2]].forEach(([m,u])=>t.spawn("water",m,u)),t.spawn("ball",36,22.6),t.spawn("ball",-2,-22),[[15.6,-12.4],[20.4,-12.6]].forEach(([m,u])=>t.spawn("chair",m,u)),t.spawn("bucket",-32.6,-12.6),t.spawn("bucket",3.5,12.4);const s=["Bisi","Emeka","Ngozi","Kunle","Aisha"];t.spawn("phone",-40,5.6,{owner:fd(s)});const o=new is(1.2,.1,6,24);let a=null;t.errand=m=>{t.held&&f();const u=t.spawn("crate",n.pos.x+.6,n.pos.z,{errand:{from:m.name,to:"Mama Tomato"}});r(u);const g=e.npcs.find(w=>w.name==="Mama Tomato");g&&(a=new Ce(o,Y("#06d6a0",{emissive:"#06d6a0",unique:!0})),a.rotation.x=Math.PI/2,a.position.set(g.mesh.position.x,.15,g.mesh.position.z-1.4),i.add(a)),n.toast("Errand: carry the crate go Mama Tomato for Yaba Market 📦","good")};function l(){let m=null,u=1.5;for(const g of t.props){if(g===t.held||g.flying)continue;const w=Math.hypot(g.mesh.position.x-n.pos.x,g.mesh.position.z-n.pos.z);w<u&&(u=w,m=g)}return m}function r(m){const u=n.player.userData,g=mo[m.type],w=n.sim.s.stock.water+n.sim.s.stock.gala>0;m.onHead=g.head&&!w&&!u.head.children.some(b=>b.userData.isLoad),i.remove(m.mesh),m.vel.set(0,0,0),m.flying=!1,m.onHead?(u.head.add(m.mesh),m.mesh.position.set(0,.62+g.h*.3,0),m.mesh.rotation.set(0,0,0)):(n.player.add(m.mesh),m.mesh.position.set(0,.72,.42),m.mesh.rotation.set(0,0,0)),t.held=m,n.audio.click(),n.toast(`You carry ${g.name} ${g.ic}`)}function c(){var u;const m=t.held;return m?((u=m.mesh.parent)==null||u.remove(m.mesh),i.add(m.mesh),t.held=null,m):null}function d(){const m=n.rotY();return new P(Math.sin(m),0,Math.cos(m))}function f(){const m=c();m&&(m.mesh.position.copy(n.pos).addScaledVector(d(),.7),m.mesh.position.y=0,n.audio.tone(160,.08,"triangle",.08))}function p(){const m=c();if(!m)return;const u=d();m.mesh.position.copy(n.pos).addScaledVector(u,.5),m.mesh.position.y=1.3;const g=m.type==="ball"?11:m.type==="chair"||m.type==="crate"?5:8;m.vel.copy(u).multiplyScalar(g),m.vel.y=4,m.flying=!0,m.hit=!1,n.audio.kick()}t.drop=f;const h=()=>{const m=t.held;if(!m)return null;const u=n.sim.s;let g=n.social.nearest(2.2);if(m.errand&&g&&g.name===m.errand.to)return{label:`Give crate to ${g.name} 📦`,fn:()=>{c(),v(m),a&&(i.remove(a),a=null),n.sim.earn(400,"errand"),n.sim.addRel(m.errand.from,8),n.sim.addRel(g.name,4),n.sim.addKarma(2,"errand"),me(g.mesh,`Ah! ${m.errand.from} send am? Thank you!`,3),n.toast(`Errand done +${J(400)} 📦`,"money")}};if(m.type==="phone"){const w=n.social.people().find(b=>b.name===m.owner);if(w){const b=new P;w.mesh.getWorldPosition(b),Math.hypot(b.x-n.pos.x,b.z-n.pos.z)<2.6&&(g=w)}}return m.type==="phone"&&g?{label:`Give phone to ${g.name}`,fn:()=>{c(),v(m),g.name===m.owner?(n.sim.addKarma(5,"returned phone"),n.sim.addRel(g.name,20),n.sim.earn(500,"reward"),u.statsV3.returned++,me(g.mesh,"My phone!!! God bless you! Take ₦500 🙏",3.5)):(n.sim.addKarma(1),me(g.mesh,`No be my own o. Na ${m.owner} get am, I go give am`,3.5))}}:m.type==="phone"&&Math.hypot(n.pos.x-50,n.pos.z+13.8)<4?{label:"Sell phone to GistMe Phones 🤫",fn:()=>{c(),v(m),n.sim.earn(3e3,"phone"),n.sim.addKarma(-8,"sold stolen phone"),n.toast("Sold for ₦3,000... your conscience dey shout 😬","bad")}}:(m.type==="water"||m.type==="bread")&&g?{label:`Give ${mo[m.type].name} to ${g.name}`,fn:()=>{c(),v(m),n.sim.addRel(g.name,10),n.sim.addKarma(1),me(g.mesh,"Ah thank you! You get good heart 😊",3)}}:m.type==="water"?{label:"Drink pure water 💧",fn:()=>{c(),v(m),u.hunger=Math.min(100,u.hunger+4),u.mood=Math.min(100,u.mood+4),u.energy=Math.min(100,u.energy+3),n.toast("Cold water! 💧 +Mind +Body","good")}}:m.type==="bread"?{label:"Chop the bread 🍞",fn:()=>{c(),v(m),u.hunger=Math.min(100,u.hunger+20),n.toast("Agege bread sweet! +20 Belle 🍞","good")}}:m.type==="chair"?{label:"Sit for chair 🪑",fn:()=>{f(),n.sitChair(m)}}:m.type==="crate"&&g&&/Mama|Iya|Uncle/.test(g.name)?{label:`Sell crate to ${g.name}`,fn:()=>{c(),v(m),n.sim.earn(200,"crate"),me(g.mesh,"I go use am for market. Take ₦200",3)}}:m.type==="bucket"?{label:"Pour water (cool down) 🪣",fn:()=>{u.mood=Math.min(100,u.mood+3),n.toast("Ahh, cold water for head 😌")}}:null};function v(m){var u;i.remove(m.mesh),(u=m.mesh.parent)==null||u.remove(m.mesh),t.props.splice(t.props.indexOf(m),1)}return t.give=m=>{t.held&&f();const u=t.spawn(m,n.pos.x,n.pos.z);r(u)},t.buttons=()=>{if(t.held){const u=h(),g=mo[t.held.type];return[...u?[{label:u.label,key:"u",onClick:u.fn}]:[],{label:`Throw ${g.ic}`,key:"t",onClick:p},{label:`Drop ${g.ic}`,key:"g",onClick:f}]}const m=l();return m?[{label:`Pick up ${mo[m.type].name} ${mo[m.type].ic}`,key:"g",onClick:()=>r(m)}]:[]},t.update=m=>{for(const u of t.props){if(!u.flying)continue;u.vel.y-=14*m,u.mesh.position.addScaledVector(u.vel,m),u.mesh.rotation.x+=m*6;const g=u.mesh.position.clone();if(n.resolve(u.mesh.position,.2),g.distanceToSquared(u.mesh.position)>1e-4&&(u.vel.x*=-.4,u.vel.z*=-.4),!u.hit)for(const w of n.social.people())w.mesh.position.distanceTo(u.mesh.position.clone().setY(w.mesh.position.y+1))<.9&&(u.hit=!0,n.sim.addRel(w.name,-6),me(w.mesh,fd(["Who throw am?! 😡","Ah! My head!","You wan kill me?!"]),3),n.audio.tone(220,.1,"square",.1),u.vel.multiplyScalar(-.3));if(!u.hit)for(const w of e.vehicles)w.mesh.position.distanceTo(u.mesh.position)<1.8&&(u.hit=!0,n.audio.horn(),u.vel.multiplyScalar(-.3));u.mesh.position.y<=0&&(u.mesh.position.y=0,Math.abs(u.vel.y)>2&&u.type==="ball"?u.vel.y*=-.55:(u.vel.y=0,u.vel.x*=.6,u.vel.z*=.6),u.vel.length()<.4&&(u.flying=!1,u.mesh.rotation.x=0))}a&&(a.rotation.z+=m)},t.pose=m=>{if(t.held&&!t.held.onHead){const u=m.userData.arms;u[0].rotation.x=u[1].rotation.x=-1.3}else if(t.held&&t.held.onHead){const u=m.userData.arms;u[0].rotation.x=-2.8}},t}const wt=n=>n[Math.floor(Math.random()*n.length)],s_={polite:["Good morning, how una dey?","Good day sir/ma, hope family dey fine?","Well done o! How work?"],joke:["Who send you to fine like this today? 😂","This sun go turn us to suya o 😂","You don chop? Because I never see food since Monday 😂"],pidgin:["How far now, my person?","Wetin dey sup? You dey kampe?","Area! Shey you dey hold body?"],rude:["Comot for my front jare!","Why you dey look me like that?","Your face be like say you owe me money"],help:["Abeg, you fit help me with small money?","I dey hungry, abeg you get anything?"],job:["You get any work for me? I dey find hustle","Abeg you know where dem dey find worker?"],gossip:["Wetin dey happen for this area? Give me gist!","You hear anything new?"]},Ea={polite:{good:["Ah, we thank God! You too dey try 😊","Fine o, God bless you my pikin","We dey kampe! Thank you for asking"],bad:["Hmm. We dey.","Okay.","Wetin you want?"]},joke:{good:["😂😂 You no well!","Hahaha! You go kill me with laugh","Ehn! You be comedian 😂"],bad:["That one no funny","I no get time for play","🙄"]},pidgin:{good:["I dey kampe my guy! You nko?","Body dey inside cloth 💪","We dey push, no shaking!"],bad:["Who be your guy?","I no know you o","Hmm, waka pass"]},rude:{good:["Ehn?! Na me you dey talk to like that?","Watch your mouth o!","Wetin I do you?"],bad:["You get mouth o! Comot!","Na your papa face! 😤","If you try me again ehn..."]}},pd=["Ah my person! How you dey?","Odogwu! Long time","My guy! 👋","See my favourite customer!"],md=["See this one again 🙄","Na you again?","Hmm, waka pass","Rude person dey come"];function o_(n){const{world:e}=n,t={},i=new Map,s=[];t.register=f=>s.push(f);function o(){const f=[];for(const p of e.walkers)f.push({ref:p,mesh:p.mesh,name:p.name,walker:!0});for(const p of e.npcs)p.name&&p.mesh.visible&&f.push({ref:p,mesh:p.mesh,name:p.name.replace(/ \(.*\)/,"")});for(const p of s)p.mesh.visible&&f.push({ref:p,mesh:p.mesh,name:p.name});return f}t.people=o,t.nearest=(f=1.9)=>{let p=null,h=f;const v=new P;for(const m of o()){m.mesh.getWorldPosition(v);const u=Math.hypot(v.x-n.pos.x,v.z-n.pos.z);u<h&&(h=u,p=m)}return p};const a=(f,p,h)=>{const v=new P;f.getWorldPosition(v),f.rotation.y=Math.atan2(p-v.x,h-v.z)};t.hot=()=>{if(n.activityName())return null;const f=(e.convs||[]).find(h=>!h.paused&&h.T&&h.members.some(v=>Math.hypot(v.mesh.position.x-n.pos.x,v.mesh.position.z-n.pos.z)<2.4));if(f)return{label:`Join their gist 💬 (${f.T.id})`,act:()=>d(f),join:!0};const p=t.nearest(1.9);return p&&!p.ref.conv?{label:`Talk to ${p.name} 💬`,act:()=>r(p)}:null};function l(f){return f>=40?"Paddy 🤝":f>=15?"Friendly 🙂":f<=-40?"Enemy 😡":f<=-15?"Vexed 😒":"Neutral 😐"}t.relWord=l;async function r(f){const p=n.sim,h=p.s;f.walker&&(f.ref.busy=!0),a(f.mesh,n.pos.x,n.pos.z),h.statsV3.talks++;const v=p.rel(f.name)>=15?wt(pd):p.rel(f.name)<=-15?wt(md):wt(["Hello?","Yes? How far?","Good day o"]);me(f.mesh,v,3);let m=0,u=new Set;for(;m<3;){const g=wt(["help","job","gossip"].filter(x=>!u.has(x)))||"gossip",b=[Math.random()<.5?"polite":"pidgin","joke","rude",g].filter(x=>!u.has(x)||x==="rude").map(x=>({id:x,label:wt(s_[x]),tag:{polite:"Polite",pidgin:"Pidgin",joke:"Joke",rude:"Rude",help:"Ask help",job:"Ask job",gossip:"Gossip"}[x]}));b.push({id:"bye",label:"Okay, later o 👋",tag:"Bye"});const S=await n.wheel({who:f.name,text:m?"Wetin else?":v,sub:`Relationship: ${l(p.rel(f.name))} (${p.rel(f.name)})`,options:b});if(!S||S.id==="bye")break;u.add(S.id),m++,me(n.player,S.label,2.6),await n.wait(900);const C=c(f,S.id);if(me(f.mesh,C,3.5),await n.wait(1100),S.id==="rude"&&p.rel(f.name)<-30)break}f.walker&&setTimeout(()=>f.ref.busy=!1,600),n.save()}function c(f,p){var w;const h=n.sim,v=h.s,m=f.name,u=h.rel(m),g=Math.random()+u/200+(v.mood-50)/300+v.karma/300;if(p==="polite"||p==="pidgin")return h.addRel(m,3+(g>.7?2:0)),wt(Ea[p][u>=-15?"good":"bad"]);if(p==="joke")return g>.45?(h.addRel(m,4),v.mood=Math.min(100,v.mood+2),wt(Ea.joke.good)):(h.addRel(m,-1),wt(Ea.joke.bad));if(p==="rude")return h.addRel(m,-8),h.addKarma(-1),wt(Ea.rude[u>0?"good":"bad"]);if(p==="gossip"){if(h.addRel(m,2),(w=n.events)!=null&&w.chakam&&Math.random()<.6)return`I hear say ${n.events.chakam.e.name.toLowerCase()} dey happen for ${n.events.chakam.e.spot} 👀`;const b=wt(Eu);return`${wt(b.o)} ${wt(b.f)}`}if(p==="help"){if(u>=20&&g>.6){const b=wt([200,300,500]);return h.earn(b,"help"),h.addRel(m,-3),`Take ${J(b)}, buy food. No tell anybody 🤫`}return h.addRel(m,-1),wt(["Me sef dey find help 😩","Abeg, I no get o","Go hustle, no food for lazy man!"])}return p==="job"?u>=10&&n.carry&&Math.random()<.7?(n.carry.errand(f),"Carry this crate go give Mama Tomato for market. I go settle you!"):wt(["Go Ojuelegba, Danfo driver dey find conductor","Buy pure water from Mama Nkechi go hawk am","Your Keke dey house, go drive am!","Pastor dey find people wey go clean church"]):"..."}async function d(f){const p=n.sim,h=p.s,v=f.T;f.paused=!0,h.statsV3.gists++;for(const w of f.members)a(w.mesh,n.pos.x,n.pos.z);const m=f.members.map(w=>w.name).filter(Boolean);me(f.members[0].mesh,wt(["Ehen! Come join us","You don hear this gist?",`We dey talk about ${v.id}`]),3);let u=0,g=v;for(;u<3;){const w=await n.wheel({who:m.join(" & "),text:`Gist: ${g.id.toUpperCase()}`,sub:"Join the gist",options:[{id:"agree",tag:"Agree",label:wt(g.x)},{id:"disagree",tag:"Disagree",label:wt(["Abeg, no be so!","Una no know anything 😂","I no gree with that one"])},{id:"joke",tag:"Joke",label:wt(["😂 Na una go cause wahala for this street","If na me, I go don japa 😂","This gist sweet pass jollof"])},{id:"change",tag:"New topic",label:"Leave that one, una hear about..."},{id:"leave",tag:"Leave",label:"Make I dey go o 👋"}]});if(!w||w.id==="leave")break;u++,me(n.player,w.id==="change"?"Leave that one... 👀":w.label,2.6),await n.wait(900);const b=wt(f.members);if(w.id==="agree")m.forEach(S=>p.addRel(S,2)),me(b.mesh,wt(["Na correct talk!","You sabi! 👏","Exactly my point!"]),3);else if(w.id==="disagree")m.forEach(S=>p.addRel(S,Math.random()<.5?1:-3)),me(b.mesh,wt(["Ehn? Explain yourself!","You dey whine?","Okay o, your opinion 😒"]),3);else if(w.id==="joke"){const S=Math.random()+h.mood/200>.6;m.forEach(C=>p.addRel(C,S?3:-1)),me(b.mesh,S?"😂😂 This one no well!":"Hmm, no be time for play",3),S&&(h.mood=Math.min(100,h.mood+2))}else if(w.id==="change"){const S=Ql(2,n.evCtx());g=S.t,me(n.player,S.lines[0][1],3),await n.wait(1e3),me(b.mesh,S.lines[1][1],3)}await n.wait(1100)}f.paused=!1,f.i=f.lines.length,n.save()}return t.update=f=>{if(n.activityName()||n.isBusy())return;const p=n.sim;for(const h of o()){const v=p.rel(h.name);if(Math.abs(v)<15||h.ref.conv)continue;Math.hypot(h.mesh.position.x-n.pos.x,h.mesh.position.z-n.pos.z)<3.2&&(i.get(h.name)||0)<n.time&&(i.set(h.name,n.time+45),me(h.mesh,wt(v>0?pd:md),2.8))}},t}const on=n=>n[Math.floor(Math.random()*n.length)],il=(n,e)=>n+Math.random()*(e-n);function a_(n){const{world:e}=n,t={},i={v:null,dest:null};t.ride=i;const s=()=>e.vehicles.find(_=>_.type==="danfo"&&!_.conductor&&!_.ride&&!_.turn&&_.speed<.8&&_.mesh.position.distanceTo(new P(n.pos.x,0,n.pos.z))<3.4);t.hot=()=>{if(n.activityName())return null;const _=s();return _?{label:"Enter Danfo 🚌",act:()=>o(_)}:null};async function o(_){const E=n.sim,k=E.s;_.hold=!0;const y=_.mesh.userData.driver,M=ai.reduce((q,ie)=>Math.abs(ie.x-_.mesh.position.x)<Math.abs(q.x-_.mesh.position.x)?ie:q),R=ai.filter(q=>q!==M),N=await n.wheel({who:"Conductor",text:on(["Where you dey go? Quick quick!","Enter with your change o!",`${M.name}! Wetin be your stop?`]),sub:`Normal fare ${J(E.danfoFare)}`,options:[...R.map(q=>({id:q.id,tag:"Stop",label:`${q.name} 📍`})),{id:"no",tag:"Comot",label:"No mind me, I no dey go"}]});if(!N||N.id==="no"){_.hold=!1;return}const U=ai.find(q=>q.id===N.id),L=Math.random()-k.karma/200;if(L>.85){me(y||_.mesh,"We no dey go there! Comot! 🙅🏾",3),n.toast("Conductor refuse to carry you 😒","bad"),_.hold=!1;return}let D=E.danfoFare,F=L>.5;F&&(D=Math.round(D*on([1.5,2])/50)*50);const H=await n.wheel({who:"Conductor",text:F?`Na ${J(D)}! Fuel don cost, no argue 😤`:`${U.name}? ${J(D)}. Enter!`,sub:F?`He dey overcharge (normal ${J(E.danfoFare)})`:"Fair fare",options:[{id:"pay",tag:"Pay",label:`Take ${J(D)}`,disabled:k.cash<D},...F?[{id:"barg",tag:"Bargain",label:`Abeg, na ${J(E.danfoFare)} be the price!`}]:[],{id:"no",tag:"Comot",label:"Forget am, I go trek"}]});if(!H||H.id==="no"){_.hold=!1;return}if(H.id==="barg")if(me(n.player,`Abeg na ${J(E.danfoFare)}!`,2.5),await n.wait(900),Math.random()+k.karma/150+E.rel("Conductor")/100>.5)D=E.danfoFare,me(y||_.mesh,"Oya enter, no talk too much 🙄",3),E.addRel("Conductor",-1);else{me(y||_.mesh,"Na wetin I talk be the price! Comot!",3),_.hold=!1;return}if(!E.spend(D)){_.hold=!1;return}k.statsV3.rides++,n.carry.held&&n.carry.drop(),Object.assign(i,{v:_,dest:U,fare:D}),_.ride=!0,_.hold=!1,_.wait=.8,_.lastStop=M.id,n.player.position.set(-.5,.55,.45),n.player.rotation.set(0,Math.PI/2,0),n.player.scale.setScalar(.8),oi(n.player),_.mesh.add(n.player),n.audio.conductor(),n.toast(`You don enter Danfo to ${U.name} 🚌 (${J(D)})`,"good"),n.startActivity(a)}const a={name:"ride",camDist:12,camPitch:.5,buttons:()=>[{label:"Owa o! (I dey drop) 🛑",key:"x",onClick:()=>{i.early=!0,me(n.player,"Owa o! Conductor, I dey drop!",2.5)}}],update(_){const E=i.v;if(n.pos.copy(E.mesh.position),n.moveAmt=0,n.camYawTo(Math.atan2(-Math.cos(E.mesh.rotation.y),Math.sin(E.mesh.rotation.y))+.3,_*2),i.early&&!E.turn&&E.speed<3){i.early=!1,E.wait=2,l();return}i.early&&(E.hold=!0),Math.random()<_*.08&&me(E.mesh.userData.driver||E.mesh,on(["Shift for front!","Who never pay?","Owa! Owa!","Change dey?"]),2.5),n.actHud(`<b>🚌 Danfo to ${i.dest.name}</b><br><small>Sit tight... conductor dey shout. Fare paid ${J(i.fare)}</small>`)},onEnd(){n.actHud("")}};e.onRideStop=(_,E)=>{_===i.v&&E.id===i.dest.id&&(me(_.mesh.userData.driver||_.mesh,`${E.name}! Owa! Owa!`,3),l())};function l(){const _=i.v;_&&(_.ride=!1,_.hold=!1,_.wait=1.2,_.mesh.remove(n.player),n.scene.add(n.player),n.player.scale.setScalar(1),n.player.userData.sitting=!1,n.pos.set(_.mesh.position.x-_.dir*.5,0,_.dir>0?6.4:-6.4),n.setRot(_.dir>0?0:Math.PI),i.v=null,n.endActivity(),n.audio.tone(500,.1,"triangle",.1),n.save())}t.alight=l;const r=_=>Math.abs(_.z)<4.6&&Math.abs(_.x)<82||Math.abs(_.x)<3.8&&Math.abs(_.z)<29;t.onRoad=r;let c=null,d=0;t.rage=()=>c,t.update=_=>{if(d-=_,c)return u(_);if(!(n.activityName()||n.isBusy()||n.inside()||d>0||!r(n.pos))){for(const E of e.vehicles)if(!(!E.blockT||E.mesh.userData.isPlayer)&&(E.blockT>.6&&(E.honkT||0)<n.time&&(E.honkT=n.time+1.4,n.audio.horn(),me(E.mesh.userData.driver||E.mesh,on(["Comot for road!","Oya shift!","You dey craze?!","PIM PIM! 📯"]),1.6)),E.blockT>4)){p(E);break}}};function f(_,E,k){const y=cn({...Sn(),outfit:"street",..._});return y.position.set(E,0,k),e.root.add(y),y}function p(_){_.hold=!0,_.blockT=0;const E=_.mesh.position,k=_.axis==="x"?new P(0,0,_.dir>0?-1.5:1.5):new P(1.5,0,0),y=[{mesh:f({name:"Driver",hair:"cap"},E.x+k.x,E.z+k.z),name:_.type==="danfo"?"Danfo Driver":"Keke Driver"}];_.type==="danfo"&&y.push({mesh:f({name:"Conductor",hair:"lowcut",clothColor:"#e71d36"},E.x-k.x,E.z-k.z),name:"Conductor"});const M=e.walkers.filter(R=>!R.conv&&!R.busy).sort((R,N)=>R.mesh.position.distanceTo(n.pos)-N.mesh.position.distanceTo(n.pos)).slice(0,4);M.forEach((R,N)=>{R.busy=!0,R.ring=N/M.length*Math.PI*2+.5}),c={v:_,crew:y,look:M,t:0,phase:"approach",hits:0},n.startActivity(h),n.audio.horn(),me(y[0].mesh,on(["You dey mad?! You wan make I jam you?!","Na your papa get this road?!","Who born you?!"]),3)}const h={name:"confront",camDist:9,camPitch:.6,buttons:()=>[],update(){},onEnd(){}},v=["You go pay for my time!","Oya talk! Wetin you dey find for road?","Today na today!","I go show you pepper!"],m=["Fight! Fight! 😱","Leave am, e no know road","Na wa o!","Una no go settle?","Film am! 📸","Ah, beat am small 😂","Peace! Peace!"];function u(_){const E=c;E.t+=_;const k=n.pos;E.crew.forEach((y,M)=>{const N=new P(k.x+(M?-1.1:1.1),0,k.z+.4).clone().sub(y.mesh.position);N.y=0;const U=N.length();if(E.phase!=="leave"&&U>.15&&y.mesh.position.addScaledVector(N.normalize(),Math.min(U,3.2*_)),E.phase==="leave"){const L=E.v.mesh.position.clone().sub(y.mesh.position);L.y=0,L.length()>.3&&y.mesh.position.addScaledVector(L.normalize(),3*_)}y.mesh.rotation.y=Math.atan2(k.x-y.mesh.position.x,k.z-y.mesh.position.z),E.phase==="leave"&&(y.mesh.rotation.y+=Math.PI),y.mesh.userData.talk=E.phase==="beat"?1:y.mesh.userData.talk,hn(y.mesh,_,U>.15?1:0,n.time)}),E.look.forEach(y=>{const M=y.ring+E.t*.05,R=k.x+Math.cos(M)*3.6,N=k.z+Math.sin(M)*3.6,U=new P(R-y.mesh.position.x,0,N-y.mesh.position.z),L=U.length();L>.2&&E.phase!=="leave"&&y.mesh.position.addScaledVector(U.normalize(),Math.min(L,2.4*_)),y.mesh.rotation.y=Math.atan2(k.x-y.mesh.position.x,k.z-y.mesh.position.z),hn(y.mesh,_,L>.2?1:0,n.time),Math.random()<_*.25&&me(y.mesh,on(m),2.2)}),E.phase==="approach"&&(Math.random()<_*.6&&me(on(E.crew).mesh,on(v),2.4),E.t>2.2&&(E.phase="choose",g())),E.phase==="beat"&&C(_),E.phase==="leave"&&(E.leaveT-=_)<=0&&x()}async function g(){const _=n.sim.s,E=c,k=E.v.type==="danfo"?1e3:500,y=await n.wheel({who:E.crew.map(U=>U.name).join(" & "),text:on(["Wetin you get to talk?! 😡","Explain yourself now now!","You block our road! Answer!"]),sub:"Dem don vex. Choose wisely...",options:[{id:"beg",tag:"Apologise",label:"Abeg, I no see una. Na my fault 🙏"},{id:"argue",tag:"Argue",label:"Na una dey drive like mad people!"},{id:"insult",tag:"Insult",label:"Your Danfo be like coffin on wheels 😂"},{id:"fight",tag:"Fight back",label:"Oya come! I no dey fear! 👊"},{id:"run",tag:"Run",label:"Zoom comot! 🏃🏾"},{id:"pay",tag:"Pay off",label:`Take ${J(k)}, make peace reign`,disabled:_.cash<k}]}),M=(y==null?void 0:y.id)||"beg";me(n.player,(y==null?void 0:y.label)||"...",2.4),await n.wait(800);const R=Math.random()+_.karma/200+(_.mood-50)/300,N=E.crew[0].mesh;if(M==="beg")return R>.35?(me(N,"Next time shine your eye! Mumu 🙄",3),_.mood=Math.max(0,_.mood-3),w("Dem forgive you. Shine your eye for road 😅")):(me(N,"Sorry no dey cook food! Na slap you go collect!",3),b(2));if(M==="argue")return R>.6?(me(N,"Hmm... you get mouth. Waka!",3),w("You talk your way out! 🗣️")):(me(N,"You dey argue with me?!",3),b(3));if(M==="insult")return n.sim.addKarma(-2,"insult"),R>.92?(me(N,"😂😂 This one craze. Leave am",3),w("Your insult make dem laugh. Lucky you!")):(me(N,"COFFIN?! Hold am!!",3),b(5));if(M==="fight")return _.statsV3.fights++,R+(_.energy-50)/200>.62?(me(N,"Haa! This one get power! Run!",3),n.sim.addKarma(-3,"fight"),_.mood=Math.min(100,_.mood+6),E.crew.forEach(U=>me(U.mesh,"😱",1.5)),n.toast("You win the fight! Crowd dey hail you 👊","good"),w(null,!0)):(me(N,"You wan fight? Oya!",2.5),b(4));if(M==="run")return await n.mash({label:"RUN! Tap fast to escape! 🏃🏾",taps:12,secs:3.5})?(n.pos.z=n.pos.z>0?7.4:-7.4,n.pos.x+=5,_.mood=Math.max(0,_.mood-2),me(N,"Run! We go see you again!",3),w("You escape! 🏃🏾💨")):(me(N,"Where you dey go?! Hold am!",2.5),b(4));if(M==="pay")return n.sim.spend(k),me(N,"Oya, God bless you. Next time no block road",3),w(`You pay ${J(k)} to settle 💸`)}function w(_,E){const k=c;k.phase="leave",k.leaveT=2.5,_&&n.toast(_,E?"good":""),n.pos.z=Math.abs(n.pos.z)<4.6?Math.sign(n.pos.z||1)*6:n.pos.z}function b(_){const E=c;E.phase="beat",E.hits=_,E.hitT=.2,n.sim.s.statsV3.beaten++}const S=["💥 SLAP!","👋 PAH!","💢 SHOVE!","⭐ POW!","💥 GBAM!"];function C(_){const E=c;if(E.hitT-=_,E.hitT>0)return;if(E.hits<=0){const R=n.sim.s,N=Math.min(R.cash,Math.round(il(200,800)/50)*50);R.energy=Math.max(0,R.energy-20),R.mood=Math.max(0,R.mood-15),R.cash-=N,n.modal("Dem beat you small 🤕",`Driver and conductor don give you slap and shove. You lose <b>-20 Body</b>, <b>-15 Mind</b>${N?` and ₦${N} fall comot for your pocket`:""}. Onlookers dey laugh. Next time comot for road!`,[{label:"Ouch... okay 😵",close:!0}]),w(null);return}E.hits--,E.hitT=.55;const k=on(E.crew),y=n.pos.clone().sub(k.mesh.position);y.y=0,y.normalize(),k.mesh.position.addScaledVector(y,.4),n.pos.addScaledVector(y,.35),n.shake(.35),me(n.player,on(S),.5),me(k.mesh,on(["Take!","Mumu!","Next time!","Ehen!"]),.6),n.audio.tone(il(150,260),.12,"square",.18),n.audio.tone(il(800,1200),.05,"sawtooth",.08);const M=on(E.look);M&&me(M.mesh,on(["Ehh!! 😱","Haa! Leave am!","E don collect 😂"]),1.5)}function x(){const _=c;_.crew.forEach(E=>e.root.remove(E.mesh)),_.look.forEach(E=>{E.busy=!1,E.mesh.position.z=Tt.clamp(E.mesh.position.z,E.z-.01,E.z+.01),E.mesh.position.z=E.z,E.tx=E.mesh.position.x}),_.v.hold=!1,_.v.blockT=0,c=null,d=25,n.activityName()==="confront"&&n.endActivity(),n.save()}return t}const r_=n=>n[Math.floor(Math.random()*n.length)],l_={pre:["You? You wan play me? 😂","I go wash you today!","Bring your money, na my own now","Your papa no fit beat me sef","Today na your judgement day"],lead:["Ehen! Feel am! 😂","You dey learn work!","Na so I dey do am!","Call your mama make she come see"],behind:["Na luck you dey use!","Wait, I never start!","Ehn?! E no go happen again","Na beginner luck"],win:["I tell you! Odogwu! 🏆","Go home and practice 😂","Thank you for your money!","Who next?!"],lose:["You cheat! 😤","Na this sun cause am","Rematch! Now now!","I no dey feel fine today","You go see me tomorrow!"]};function c_(n){const e={},t=()=>{const i=n.sim.s;return i.rivals||(i.rivals={}),i.streaks||(i.streaks={}),i.bestStreak||(i.bestStreak={}),i};return e.diff=i=>{const s=t(),o=Object.values(s.rivals).reduce((a,l)=>{var r,c;return a+(((c=(r=l.games)==null?void 0:r[i])==null?void 0:c.w)||0)},0);return Math.min(1,.25+o*.12+(s.streaks[i]||0)*.08)},e.record=(i,s,o,a)=>{var f,p;const l=t(),r=(f=l.rivals)[s]||(f[s]={w:0,l:0,d:0,games:{}}),c=(p=r.games)[i]||(p[i]={w:0,l:0,d:0});r[o]++,c[o]++,o==="w"?(l.streaks[i]=(l.streaks[i]||0)+1,l.bestStreak[i]=Math.max(l.bestStreak[i]||0,l.streaks[i])):o==="l"&&(l.streaks[i]=0),a&&(o==="w"?n.sim.earn(a*2,"wager"):o==="d"&&n.sim.earn(a,"wager refund")),n.sim.addRel(s,o==="w"?-2:o==="l"?2:1);const d=l.streaks[i]||0;return o==="w"&&d>=3&&n.toast(`🔥 ${d} wins in a row for ${i}! Area dey hail you`,"good"),n.save(),d},e.board=()=>{const i=t();return Object.entries(i.rivals).map(([s,o])=>({name:s,...o,score:o.l*3+o.d-o.w})).sort((s,o)=>o.score-s.score||o.w+o.l-(s.w+s.l))},e.talk=i=>r_(l_[i]),e.askWager=async(i,s)=>{const o=n.sim.s,a=e.diff(i),l=await n.wheel({who:s,text:e.talk("pre"),sub:`${i} • Difficulty ${Math.round(a*100)}% • Your streak ${t().streaks[i]||0} 🔥`,options:[{id:0,tag:"Friendly",label:"Just play for fun"},{id:200,tag:"Bet",label:`Bet ${J(200)}`,disabled:o.cash<200},{id:500,tag:"Bet",label:`Bet ${J(500)}`,disabled:o.cash<500},{id:1e3,tag:"Big bet",label:`Bet ${J(1e3)} 💰`,disabled:o.cash<1e3},{id:-1,tag:"Comot",label:"Not now"}]});return!l||l.id===-1||l.id>0&&!n.sim.spend(l.id)?null:(l.id>0&&n.toast(`Wager ${J(l.id)} on the table 💰 — win double!`,"money"),l.id)},e}const Ki=n=>n[Math.floor(Math.random()*n.length)],ec=n=>Math.floor(Math.random()*n);function h_(n){const{el:e,G:t,diff:i,talk:s,finish:o,opp:a}=n;e.innerHTML=`<div class="bg-head"><b>🏓 Table Tennis vs ${a}</b><span id="ppScore">0 : 0</span></div><div class="bg-talk"></div><canvas id="pp" width="300" height="420" style="width:100%;max-width:300px;display:block;margin:auto;border:3px solid #1a1423;border-radius:10px;background:#1d7a4e;touch-action:none"></canvas><div class="bg-hint">Move with ← → / A D, joystick, or drag on the table. First to 7.</div>`;const l=e.querySelector("#pp"),r=l.getContext("2d"),c=300,d=420,f={px:150,ax:150,b:{x:150,y:210,vx:0,vy:0},s:[0,0],serve:1,wait:1,over:!1,t:0};n.state=f;let p=null;l.addEventListener("pointerdown",b=>{p=b,f.px=b.offsetX/l.clientWidth*c}),l.addEventListener("pointermove",b=>{p&&(f.px=b.offsetX/l.clientWidth*c)}),window.addEventListener("pointerup",()=>p=null);const h=60,v=120+i*220,m=(1-i)*40;function u(){const b=f.b;b.x=150,b.y=210;const S=190+i*60;b.vx=(Math.random()-.5)*160,b.vy=f.serve*S,f.wait=.8}u();let g=performance.now();function w(b){if(f.over||!n.alive())return;const S=Math.min(.05,(b-g)/1e3);g=b;const C=t.input();f.px+=C.ix*380*S,f.px=Math.max(h/2,Math.min(c-h/2,f.px));const x=f.b;f.wait>0?f.wait-=S:(x.x+=x.vx*S,x.y+=x.vy*S);const _=x.vy<0?x.x+Math.sin(b/300)*m:150;f.ax+=Math.max(-v*S,Math.min(v*S,_-f.ax)),f.ax=Math.max(h/2,Math.min(c-h/2,f.ax)),(x.x<6||x.x>c-6)&&(x.vx*=-1,x.x=Math.max(6,Math.min(c-6,x.x)));const E=(k,y,M)=>{if(Math.abs(x.y-y)<8&&Math.abs(x.x-k)<h/2+6&&Math.sign(x.vy)===-M)return x.vy=M*Math.min(520,Math.abs(x.vy)*1.07),x.vx=(x.x-k)*6+(Math.random()-.5)*40,t.audio.tone(M>0?700:520,.04,"square",.08),!0};if(E(f.px,d-24,-1),E(f.ax,24,1)&&Math.random()<.15&&s(Ki(["Smash!","Return that one!","Na spin be this 😏"])),x.y<-10||x.y>d+10){const k=x.y<0;if(f.s[k?0:1]++,f.serve=k?1:-1,s(k?n.R.talk("behind"):n.R.talk("lead")),t.audio.ping(),e.querySelector("#ppScore").textContent=`${f.s[0]} : ${f.s[1]}`,f.s[0]>=7||f.s[1]>=7)return f.over=!0,o(f.s[0]>f.s[1]?"w":"l",`Score ${f.s[0]} – ${f.s[1]}`);u()}r.fillStyle="#1d7a4e",r.fillRect(0,0,c,d),r.strokeStyle="#fff",r.lineWidth=3,r.strokeRect(4,4,c-8,d-8),r.beginPath(),r.moveTo(0,d/2),r.lineTo(c,d/2),r.stroke(),r.fillStyle="#e71d36",r.fillRect(f.px-h/2,d-28,h,10),r.fillStyle="#1a1423",r.fillRect(f.ax-h/2,18,h,10),r.fillStyle="#ffd23f",r.beginPath(),r.arc(x.x,x.y,6,0,7),r.fill(),requestAnimationFrame(w)}requestAnimationFrame(w),n.cheat=()=>{f.s[0]=6,f.b.y=-20,f.b.vy=-1,f.wait=0}}const Ps=40,Bn=44,Pc=new Set([0,8,13,20,28,33]);function d_(){return{tok:[[-1,-1],[-1,-1]],turn:0,roll:0}}const ko=(n,e)=>e<0||e>=Ps?null:(e+n*20)%Ps;function tc(n,e,t){const i=[];return n.tok[e].forEach((s,o)=>{s!==Bn&&(s<0?t===6&&i.push(o):s+t<=Bn&&i.push(o))}),i}function nc(n,e,t,i){const s=n.tok.map(r=>r.slice()),o=s[e][t];s[e][t]=o<0?0:o+i;let a=!1;const l=ko(e,s[e][t]);return l!==null&&!Pc.has(l)&&s[1-e].forEach((r,c)=>{ko(1-e,r)===l&&(s[1-e][c]=-1,a=!0)}),{tok:s,cap:a}}function u_(n,e,t){const i=tc(n,1,e);if(!i.length)return null;if(Math.random()>.35+t*.65)return Ki(i);let s=i[0],o=-1e9;for(const a of i){const l=nc(n,1,a,e),r=l.tok[1][a];let c=r;l.cap&&(c+=40),r===Bn&&(c+=30),n.tok[1][a]<0&&(c+=25);const d=ko(1,r);d!==null&&!Pc.has(d)&&l.tok[0].some(f=>{const p=ko(0,f);return p!==null&&(d-p+Ps)%Ps<=6&&(d-p+Ps)%Ps>0})&&(c-=15*t),c>o&&(o=c,s=a)}return s}function f_(n){const{el:e,G:t,diff:i,talk:s,finish:o,opp:a}=n;let l=d_();n.state=l;let r=!1,c=0;const d=[];for(let u=0;u<10;u++)d.push([0,u]);for(let u=0;u<10;u++)d.push([u,10]);for(let u=10;u>0;u--)d.push([10,u]);for(let u=10;u>0;u--)d.push([u,0]);function f(){var b;const u=Array.from({length:11},()=>Array(11).fill(""));d.forEach(([S,C],x)=>u[S][C]=`<div class="lc ${Pc.has(x)?"safe":""} ${x===0?"sr":x===20?"sy":""}" data-a="${x}"></div>`);let g=`<div class="bg-head"><b>🎲 Ludo vs ${a}</b><span>Home: You ${l.tok[0].filter(S=>S===Bn).length}/2 • ${a} ${l.tok[1].filter(S=>S===Bn).length}/2</span></div><div class="bg-talk"></div><div class="ludo">`;for(const S of u)for(const C of S)g+=C||'<div class="lx"></div>';g+=`</div><div class="ludo-ctl"><button class="opt" id="ldRoll" ${l.turn!==0||c||r?"disabled":""}>🎲 Roll${c?`: ${c}`:""}</button>${[0,1].map(S=>`<button class="opt ldTok" data-i="${S}" ${c&&tc(l,0,c).includes(S)?"":"disabled"}>Move 🔴${S+1} (${l.tok[0][S]<0?"base":l.tok[0][S]===Bn?"home":l.tok[0][S]})</button>`).join("")}</div><div class="bg-hint">Roll 6 to bring token out. Land on ${a}'s token to send am back to base (★ = safe). Get both tokens home (44 steps).</div>`;const w=((b=e.querySelector(".bg-talk"))==null?void 0:b.textContent)||"";e.innerHTML=g,e.querySelector(".bg-talk").textContent=w;for(const S of[0,1])l.tok[S].forEach((C,x)=>{const _=ko(S,C),E=_!==null?e.querySelector(`[data-a="${_}"]`):null;E&&E.insertAdjacentHTML("beforeend",`<i class="lt ${S?"y":"r"}">${x+1}</i>`)});e.querySelector("#ldRoll").onclick=()=>p(),e.querySelectorAll(".ldTok").forEach(S=>S.onclick=()=>h(+S.dataset.i))}function p(){if(!(l.turn!==0||c||r)){if(c=1+ec(6),t.audio.click(),!tc(l,0,c).length){s(c===6?"Ehen?":Ki(["No move! 😂","Your dice no like you"])),c=0,f(),setTimeout(()=>v(),600);return}f()}}function h(u){if(!c)return;const g=c,w=nc(l,0,u,g);l=w.tok?{...l,tok:w.tok}:l,n.state=l,c=0,w.cap&&s(n.R.talk("behind")),!m()&&(f(),g!==6&&setTimeout(v,500))}function v(){n.alive()&&(r=!0,l.turn=1,f(),setTimeout(()=>{if(!n.alive())return;const u=1+ec(6),g=u_(l,u,i);if(g!==null){const w=nc(l,1,g,u);l={...l,tok:w.tok},n.state=l,w.cap&&s(n.R.talk("lead"))}if(s(`I roll ${u}${g===null?" — no move":""}`),!m()){if(r=!1,u===6&&g!==null)return v();l.turn=0,f()}},700))}function m(){return l.tok[0].every(u=>u===Bn)?(o("w","Both your tokens reach home"),!0):l.tok[1].every(u=>u===Bn)?(o("l",`${a} tokens reach home first`),!0):!1}n.roll=p,n.move=h,n.cheat=()=>{l.tok[0]=[Bn,Bn-1],c=1,h(1)},f(),s(n.R.talk("pre"))}const ic=["●","▲","✚","■","★"],p_={"●":[1,2,3,4,5,7,8,10,11,12,13,14],"▲":[1,2,3,4,5,7,8,10,11,12,13,14],"✚":[1,2,3,5,7,10,11,13,14],"■":[1,2,3,5,7,10,11,13,14],"★":[1,2,3,4,5,7,8]};function m_(){const n=[];for(const e of ic)for(const t of p_[e])n.push({s:e,n:t});for(let e=0;e<5;e++)n.push({s:"W",n:20});for(let e=n.length-1;e>0;e--){const t=ec(e+1);[n[e],n[t]]=[n[t],n[e]]}return n}const go=(n,e,t)=>n.n===20||n.s===(e.n===20?t:e.s)||e.n!==20&&n.n===e.n;function g_(n){const{el:e,G:t,diff:i,talk:s,finish:o,opp:a}=n,l=m_(),r={hand:[l.splice(0,5),l.splice(0,5)],deck:l,top:null,call:null,turn:0,pending:0};do r.top=l.shift(),(r.top.n===20||[1,2,14].includes(r.top.n))&&l.push(r.top);while(r.top.n===20||[1,2,14].includes(r.top.n));n.state=r;let c=null;const d=(b,S)=>{for(let C=0;C<S&&r.deck.length;C++)r.hand[b].push(r.deck.shift())},f=(b,S,C)=>`<button class="wcard2 ${b.n===20?"w":""} ${C?"can":""}" data-i="${S}" ${C?"":"disabled"}><b>${b.n}</b><span>${b.n===20?"WHOT":b.s}</span></button>`;function p(){var C;const b=((C=e.querySelector(".bg-talk"))==null?void 0:C.textContent)||"",S=r.turn===0&&!c;e.innerHTML=`<div class="bg-head"><b>🃏 Whot vs ${a}</b><span>${a}: ${r.hand[1].length} cards • Market ${r.deck.length}</span></div><div class="bg-talk"></div>
      <div class="whot-mid"><div class="wback">${"🂠".repeat(Math.min(8,r.hand[1].length))}</div>${f(r.top,-1,!1)}${r.call?`<div class="wcall">Call: ${r.call}</div>`:""}</div>
      ${c?`<div class="whot-call">I need: ${ic.map(x=>`<button class="opt wsh" data-s="${x}">${x}</button>`).join("")}</div>`:""}
      <div class="whot-hand">${r.hand[0].map((x,_)=>f(x,_,S&&go(x,r.top,r.call))).join("")}</div>
      <div class="ludo-ctl"><button class="opt" id="wMarket" ${S?"":"disabled"}>Go market 🛒${r.pending?` (pick ${r.pending})`:""}</button></div>
      <div class="bg-hint">Match shape or number. 1 = Hold on (play again) • 2 = Pick two • 14 = General market • 20 = WHOT (call shape). Finish your cards first!</div>`,e.querySelector(".bg-talk").textContent=b,e.querySelectorAll(".wcard2[data-i]").forEach(x=>{const _=+x.dataset.i;_>=0&&(x.onclick=()=>v(0,_))}),e.querySelectorAll(".wsh").forEach(x=>x.onclick=()=>{r.call=x.dataset.s,c=null,m(0,r.top)}),e.querySelector("#wMarket").onclick=()=>h(0)}function h(b){d(b,r.pending||1),r.pending=0,b===0&&s(Ki(["Go market jare 😂","Carry am!"])),u(b,!1)}function v(b,S){const C=r.hand[b][S];if(go(C,r.top,r.call)&&!(r.pending&&C.n!==2)){if(r.hand[b].splice(S,1),r.top=C,r.call=null,t.audio.click(),!r.hand[b].length)return o(b===0?"w":"l",b===0?"Check up! You finish your cards":`${a} shout "Check up!"`);if(r.hand[b].length===1&&s(b?"Last card! 😏":Ki(["Last card?! Haba!","Wait o!"])),C.n===20){if(b===0)return c=!0,p();const x={};r.hand[1].forEach(_=>x[_.s]=(x[_.s]||0)+1),r.call=Object.keys(x).filter(_=>_!=="W").sort((_,E)=>x[E]-x[_])[0]||Ki(ic),s(`WHOT! I need ${r.call}`)}m(b,C)}}function m(b,S){if(S.n===2&&(r.pending+=2),S.n===14&&(d(1-b,1),s(b?"General market! 😂":"Ehn?!")),S.n===1||S.n===14)return u(b,!0);u(b,!1)}function u(b,S){if(r.turn=S?b:1-b,!r.deck.length&&r.turn===0&&!r.hand[0].some(C=>go(C,r.top,r.call))){const C=r.hand[0].length,x=r.hand[1].length;return o(C<x?"w":C>x?"l":"d","Market finish — fewest cards wins")}p(),r.turn===1&&setTimeout(g,750)}function g(){if(!n.alive()||r.turn!==1)return;let b=r.hand[1].map((S,C)=>[S,C]).filter(([S])=>go(S,r.top,r.call)&&(!r.pending||S.n===2));if(!b.length)return h(1);Math.random()<.3+i*.7?b.sort(([S],[C])=>w(C)-w(S)):b=[Ki(b)],v(1,b[0][1])}const w=b=>(b.n===20?-5:0)+([2,14].includes(b.n)?6+(r.hand[0].length<=2?6:0):0)+(b.n===1?4:0)+(b.n!==20?r.hand[1].filter(S=>S.s===b.s).length:0);n.playFirst=()=>{const b=r.hand[0].findIndex(S=>go(S,r.top,r.call)&&(!r.pending||S.n===2));b>=0?v(0,b):h(0)},n.cheat=()=>{r.hand[0]=[{s:"W",n:20}],p()},p(),s(n.R.talk("pre"))}const v_=n=>n[Math.floor(Math.random()*n.length)];function y_(){const n=[];for(let e=0;e<8;e++){n.push([]);for(let t=0;t<8;t++)n[e].push((e+t)%2===1?e<3?-1:e>4?1:0:0)}return n}const gd=(n,e)=>n!==0&&Math.sign(n)===e;function Ls(n,e){const t=[],i=[];for(let s=0;s<8;s++)for(let o=0;o<8;o++){const a=n[s][o];if(!gd(a,e))continue;const l=Math.abs(a)===2?[[-1,-1],[-1,1],[1,-1],[1,1]]:e===1?[[-1,-1],[-1,1]]:[[1,-1],[1,1]],r=(c,d,f,p,h)=>{let v=!1;const m=c[d][f],u=Math.abs(m)===2?[[-1,-1],[-1,1],[1,-1],[1,1]]:l;for(const[g,w]of u){const b=d+g,S=f+w,C=d+2*g,x=f+2*w;if(!(C<0||C>7||x<0||x>7)&&gd(c[b][S],-e)&&c[C][x]===0&&!h.some(_=>_[0]===b&&_[1]===S)){const _=c.map(E=>E.slice());_[C][x]=_[d][f],_[d][f]=0,_[b][S]=0,v=!0,r(_,C,x,[...p,[C,x]],[...h,[b,S]])||t.push({from:[s,o],path:[...p,[C,x]],taken:[...h,[b,S]]})}}return v};r(n,s,o,[],[]);for(const[c,d]of l){const f=s+c,p=o+d;f>=0&&f<8&&p>=0&&p<8&&n[f][p]===0&&i.push({from:[s,o],path:[[f,p]],taken:[]})}}return t.length?t:i}function Lc(n,e){const t=n.map(r=>r.slice()),[i,s]=e.from,o=t[i][s];t[i][s]=0;for(const[r,c]of e.taken)t[r][c]=0;const[a,l]=e.path[e.path.length-1];return t[a][l]=o===1&&a===0?2:o===-1&&a===7?-2:o,t}function __(n){let e=0;for(const t of n)for(const i of t)e+=i===0?0:Math.sign(i)*(Math.abs(i)===2?1.7:1);return-e}function Cu(n,e,t,i,s){const o=Ls(n,t);if(!o.length)return t===-1?-99:99;if(e===0)return __(n);let a=t===-1?-1e9:1e9;for(const l of o){const r=Cu(Lc(n,l),e-1,-t,i,s);if(t===-1?(a=Math.max(a,r),i=Math.max(i,r)):(a=Math.min(a,r),s=Math.min(s,r)),s<=i)break}return a}function x_(n,e){const t=Ls(n,-1);if(!t.length)return null;const i=e>.75?4:e>.45?3:2,s=(1-e)*1.2;let o=null,a=-1e9;for(const l of t){const r=Cu(Lc(n,l),i-1,1,-1e9,1e9)+Math.random()*s;r>a&&(a=r,o=l)}return o}function M_(){return{pits:Array(12).fill(4),store:[0,0]}}const $s=(n,e)=>{const t=e*6,i=[];for(let s=t;s<t+6;s++)n.pits[s]>0&&i.push(s);return i};function Ic(n,e){const t=n.pits.slice(),i=n.store.slice(),s=e<6?0:1;let o=t[e];t[e]=0;let a=e;for(;o>0;)a=(a+1)%12,a!==e&&(t[a]++,o--);const l=s===0?6:0,r=t.slice();let c=0;for(;a>=l&&a<l+6&&(t[a]===2||t[a]===3);)c+=t[a],t[a]=0,a--;return c&&t.slice(l,l+6).every(d=>d===0)?{pits:r,store:i,last:e,cap:0}:(i[s]+=c,{pits:t,store:i,last:e,cap:c})}function Ru(n,e,t){const i=$s(n,t);if(e===0||!i.length||n.store[0]>24||n.store[1]>24)return n.store[1]-n.store[0];let s=t===1?-1e9:1e9;for(const o of i){const a=Ru(Ic(n,o),e-1,1-t);s=t===1?Math.max(s,a):Math.min(s,a)}return s}function b_(n,e){const t=$s(n,1);if(!t.length)return null;const i=e>.75?5:e>.45?3:1;let s=t[0],o=-1e9;for(const a of t){const l=Ru(Ic(n,a),i-1,0)+Math.random()*(1-e)*3;l>o&&(o=l,s=a)}return s}const w_=n=>n.store[0]>24||n.store[1]>24||!$s(n,0).length&&!$s(n,1).length;function S_(n){const{world:e}=n,t={},i=-38,s=10.8,o=new ht;o.position.set(i-2.2,0,s+1.4),e.root.add(o);const a=ne(new Wt(.35,.5,3.2,8),Y("#8d5a2b"),{t:.03});a.position.y=1.6,o.add(a);for(const[L,D,F,H]of[[0,3.6,0,2.2],[1.3,3.3,.4,1.6],[-1.2,3.4,-.3,1.7],[.3,4.4,-.5,1.5]]){const q=ne(new Qi(H,0),Y("#3fa34d"),{t:.03});q.position.set(L,D,F),o.add(q)}e.colliders.push({minX:i-2.6,maxX:i-1.8,minZ:s+1,maxZ:s+1.8});const l=[];function r(L,D,F,H){const q=new ht;q.position.set(L,0,D),e.root.add(q);const ie=ne(new Ge(1.2,.1,.8),Y("#a0522d"),{t:.03});ie.position.y=.7,q.add(ie);const se=ne(new Ge(.15,.7,.15),Y("#5a3a1a"),{t:.02});se.position.y=.35,q.add(se);const Se=ne(new Ge(F==="ayo"?1:.7,.06,F==="ayo"?.4:.7),Y(H),{t:.02});Se.position.y=.78,q.add(Se);for(const Le of[-1,1]){const K=ne(new Ge(.5,.4,.5),Y("#3a86ff"),{t:.02});K.position.set(0,.2,Le*.85),q.add(K)}return e.colliders.push({minX:L-.6,maxX:L+.6,minZ:D-.4,maxZ:D+.4}),l.push({x:L,z:D,kind:F}),q}r(i,s,"draughts","#fdfcdc"),r(i+3,s,"ayo","#c68642"),r(i-3.5,s,"ludo","#e71d36"),r(i+6,s,"whot","#8b1e3f");{const L=ne(new Ge(2.6,.08,1.4),Y("#1d7a4e"),{t:.03});L.position.set(i+2,.76,s+5),e.root.add(L);const D=ne(new Ge(.04,.16,1.4),Y("#fdfcdc"),{t:.01});D.position.set(i+2,.88,s+5),e.root.add(D);for(const F of[-1,1]){const H=ne(new Ge(.1,.76,1.2),Y("#1a1423"),{t:.02});H.position.set(i+2+F*1.1,.38,s+5),e.root.add(H)}e.colliders.push({minX:i+.7,maxX:i+3.3,minZ:s+4.3,maxZ:s+5.7}),l.push({x:i+4.4,z:s+4.1,kind:"pingpong"})}const c=(L,D,F,H)=>{const q=cn({...Sn(),...L});q.position.set(D,.1,F),q.rotation.y=H,oi(q),e.root.add(q);const ie={mesh:q,name:L.name,lines:L.lines,talkT:4};return n.social.register(ie),ie},d=c({name:"Oga Draft",hair:"cap",outfit:"kaftan",clothColor:"#ffd23f",lines:["Who wan try me for draft?","Na champion I be!"]},i,s-.85,0),f=c({name:"Baba Ayo",hair:"bald",outfit:"kaftan",clothColor:"#fdfcdc",accentColor:"#06d6a0",lines:["Ayo na game for sharp brain","Come lose your money 😂"]},i+3,s-.85,0),p=c({name:"Iya Ibeji",hair:"gele",outfit:"ankaraDress",lines:["I dey watch o 👀"]},i+1.5,s-1.8,.3),h=c({name:"Aunty Ngozi",hair:"braids",outfit:"ankaraDress",clothColor:"#e71d36",lines:["Ludo na my village game!","Who wan chop my six?"]},i-3.5,s-.85,0),v=c({name:"Whot King Dayo",hair:"afro",outfit:"street",clothColor:"#8b1e3f",lines:["Check up! 😎","General market dey wait you"]},i+6,s-.85,0),m={...Sn(),name:"Coach Emeka",hair:"lowcut",outfit:"street",clothColor:"#3a86ff"},u=cn(m);u.position.set(i-.4,0,s+5),u.rotation.y=Math.PI/2,e.root.add(u);const g={mesh:u,name:"Coach Emeka",lines:["Ping pong! Who dey?","My backhand na fire 🔥"],talkT:6,stand:!0};n.social.register(g),t.npcs=[d,f,p,h,v,g],t.update=L=>{for(const D of t.npcs)hn(D.mesh,L,0,n.time),D.talkT-=L,D.talkT<0&&(D.talkT=12+Math.random()*10,Math.hypot(n.pos.x-D.mesh.position.x,n.pos.z-D.mesh.position.z)<12&&!t.open&&me(D.mesh,v_(D.lines),3))},t.hot=()=>{if(n.activityName()||n.inside())return null;for(const L of l)if(Math.hypot(n.pos.x-L.x,n.pos.z-(L.z+.9))<1.6)return{label:w[L.kind],act:()=>t.play(L.kind)};return null};const w={ayo:"Play Ayo with Baba Ayo 🌰",draughts:"Play Draughts with Oga Draft ⚫",ludo:"Play Ludo with Aunty Ngozi 🎲",whot:"Play Whot with Whot King Dayo 🃏",pingpong:"Play Table Tennis with Coach Emeka 🏓"},b=()=>document.getElementById("board");t.play=async L=>{const D={ayo:f,draughts:d,ludo:h,whot:v,pingpong:g}[L],F=await n.rivals.askWager(L,D.name);if(F!==null)if(L==="pingpong"?(n.pos.set(i+4.4,0,s+5),n.setRot(-Math.PI/2)):(n.pos.set(D.mesh.position.x,0,D.mesh.position.z+1.7),n.setRot(Math.PI)),t.open={kind:L,opp:D,wager:F,diff:n.rivals.diff(L)},n.startActivity({name:L,camDist:5,camPitch:.7,buttons:()=>[{label:"Resign 🏳️",key:"x",onClick:()=>C("l","You resign")}],update(){},onEnd(){b().classList.add("hidden"),t.open=null}}),n.camYawTo(0,1),b().classList.remove("hidden"),L==="ayo")R();else if(L==="draughts")_();else{const H=t.open,q={el:b(),G:n,diff:H.diff,opp:D.name,R:n.rivals,talk:S,finish:C,alive:()=>t.open===H};t.ctx=q,{pingpong:h_,ludo:f_,whot:g_}[L](q)}};function S(L){const D=b().querySelector(".bg-talk");D&&(D.textContent=`${t.open.opp.name}: "${L}"`),me(t.open.opp.mesh,L,2.6)}function C(L,D){const F=t.open;if(!F)return;const H=n.rivals.record(F.kind,F.opp.name,L,F.wager),q=n.sim.s;L==="w"?(q.mood=Math.min(100,q.mood+12),n.audio.cheer(),me(F.opp.mesh,n.rivals.talk("lose"),3)):L==="l"?(q.mood=Math.max(0,q.mood-4),me(F.opp.mesh,n.rivals.talk("win"),3)):n.audio.ping(),n.sim.advance(30);const ie={ayo:"Ayo",draughts:"Draughts",ludo:"Ludo",whot:"Whot",pingpong:"Table tennis"}[F.kind],se=F.opp.name;n.endActivity(),n.modal(L==="w"?`You beat ${se}! 🏆`:L==="d"?"Draw 🤝":`${se} win you 😅`,`${D}. ${L==="w"&&F.wager?`+${J(F.wager*2)} 💰 `:""}${ie} streak: ${H} 🔥 • Next difficulty ${Math.round(n.rivals.diff(F.kind)*100)}%`,[{label:"Rematch!",onClick:()=>setTimeout(()=>t.play(F.kind),50)},{label:"Okay ➜",close:!0}])}t.finish=C;let x=null;function _(){x={b:y_(),sel:null,turn:1,busy:!1},t.D=x,E(),S(n.rivals.talk("pre"))}function E(){var q,ie;const L=x.turn===1?Ls(x.b,1):[],D=se=>x.b.flat().filter(Se=>Math.sign(Se)===se).length;let F=`<div class="bg-head"><b>⚫ Draughts vs ${t.open.opp.name}</b><span>You ${12-D(-1)} : ${12-D(1)} ${t.open.opp.name}${t.open.wager?` • 💰 ${J(t.open.wager)}`:""}</span></div><div class="bg-talk"></div><div class="dboard">`;for(let se=0;se<8;se++)for(let Se=0;Se<8;Se++){const Le=x.b[se][Se],K=(se+Se)%2===1,ee=L.some(he=>he.from[0]===se&&he.from[1]===Se),ye=x.sel&&L.some(he=>he.from[0]===x.sel[0]&&he.from[1]===x.sel[1]&&he.path[he.path.length-1][0]===se&&he.path[he.path.length-1][1]===Se);F+=`<button class="sq ${K?"dk":"lt"} ${ee?"can":""} ${ye?"to":""} ${x.sel&&x.sel[0]===se&&x.sel[1]===Se?"sel":""}" data-r="${se}" data-c="${Se}">${Le?`<i class="pc ${Le>0?"me":"ai"} ${Math.abs(Le)===2?"king":""}"></i>`:""}</button>`}F+=`</div><div class="bg-hint">${x.turn===1?(q=L[0])!=null&&q.taken.length?"You must capture! Tap a glowing piece":"Your move — tap a piece, then a square":`${t.open.opp.name} dey think... 🤔`}</div>`;const H=((ie=b().querySelector(".bg-talk"))==null?void 0:ie.textContent)||"";b().innerHTML=F,b().querySelector(".bg-talk").textContent=H,b().querySelectorAll(".sq").forEach(se=>se.addEventListener("click",()=>k(+se.dataset.r,+se.dataset.c)))}function k(L,D){if(x.turn!==1||x.busy)return;const F=Ls(x.b,1);if(x.sel){const H=F.find(q=>q.from[0]===x.sel[0]&&q.from[1]===x.sel[1]&&q.path.at(-1)[0]===L&&q.path.at(-1)[1]===D);if(H)return y(H,1)}x.sel=F.some(H=>H.from[0]===L&&H.from[1]===D)?[L,D]:null,n.audio.click(),E()}t.draftMove=(L=0)=>{const D=Ls(x.b,1);D[L]&&y(D[L],1)};function y(L,D){if(x.b=Lc(x.b,L),x.sel=null,n.audio.tone(D===1?520:380,.06,"triangle",.1),L.taken.length&&S(D===1?n.rivals.talk("behind"):n.rivals.talk("lead")),x.quiet=L.taken.length?0:(x.quiet||0)+1,x.turn=-D,E(),x.quiet>=60)return C("d","30 moves without capture");if(!Ls(x.b,x.turn).length)return C(x.turn===-1?"w":"l",x.turn===-1?`${t.open.opp.name} no get move again`:"You no get move again");x.turn===-1&&(x.busy=!0,setTimeout(()=>{if(!t.open)return;x.busy=!1;const F=x_(x.b,t.open.diff);F&&y(F,-1)},650))}let M=null;function R(){M={st:M_(),turn:0,busy:!1,moves:0},t.A=M,N(),S(n.rivals.talk("pre"))}function N(){var ie;const L=M.st.pits,D=(se,Se)=>`<button class="pit ${Se&&M.turn===0&&L[se]?"can":""}" data-i="${se}" ${Se?"":"disabled"}><b>${L[se]}</b><span>${"•".repeat(Math.min(L[se],12))}</span></button>`,F=[11,10,9,8,7,6].map(se=>D(se,!1)).join(""),H=[0,1,2,3,4,5].map(se=>D(se,!0)).join(""),q=((ie=b().querySelector(".bg-talk"))==null?void 0:ie.textContent)||"";b().innerHTML=`<div class="bg-head"><b>🌰 Ayo vs ${t.open.opp.name}</b><span>You ${M.st.store[0]} : ${M.st.store[1]} ${t.open.opp.name}${t.open.wager?` • 💰 ${J(t.open.wager)}`:""}</span></div><div class="bg-talk"></div>
      <div class="ayo"><div class="store">${M.st.store[1]}</div><div class="rows"><div class="row">${F}</div><div class="row">${H}</div></div><div class="store me">${M.st.store[0]}</div></div>
      <div class="bg-hint">${M.turn===0?"Your turn — tap one of your pits (bottom row). Capture 2s & 3s for their side!":`${t.open.opp.name} dey count seeds... 🤔`} First to 25 seeds wins.</div>`,b().querySelector(".bg-talk").textContent=q,b().querySelectorAll(".pit[data-i]").forEach(se=>se.addEventListener("click",()=>{const Se=+se.dataset.i;M.turn===0&&!M.busy&&Se<6&&L[Se]&&U(Se)}))}t.ayoMove=()=>{const L=$s(M.st,0);L.length&&U(L[0])};function U(L){const D=L<6?0:1;if(M.st=Ic(M.st,L),M.moves++,n.audio.tone(D?380:520,.05,"triangle",.1),M.st.cap&&S(D?n.rivals.talk("lead"):n.rivals.talk("behind")),M.turn=1-D,!$s(M.st,M.turn).length){const F=M.st.pits.reduce((H,q)=>H+q,0);M.st.store[1-M.turn]+=F,M.st.pits.fill(0)}if(N(),w_(M.st)||M.moves>200){const[F,H]=M.st.store;return C(F>H?"w":F<H?"l":"d",`Seeds ${F} – ${H}`)}M.turn===1&&(M.busy=!0,setTimeout(()=>{if(!t.open)return;M.busy=!1;const F=b_(M.st,t.open.diff);F!==null&&U(F)},700))}return t}const Ts=[{id:"tomato",e:"🍅",name:"Tomato",price:70,col:"#e63946"},{id:"pepper",e:"🌶️",name:"Pepper",price:50,col:"#d00000"},{id:"onion",e:"🧅",name:"Onions",price:60,col:"#9d4edd"},{id:"plantain",e:"🍌",name:"Plantain",price:120,col:"#ffd23f"},{id:"egg",e:"🥚",name:"Egg",price:40,col:"#fdfcdc"}],vd=["👩🏾","👨🏿","👵🏾","👴🏿","🧕🏾","👨🏾‍🦱","👩🏿‍🦱","🧔🏾"],E_=["Mama Tobi","Oga Emeka","Aunty Funke","Baba Sule","Sister Ngozi","Bro Tayo","Iya Ibeji","Mr Okon"],T_=["Abeg give me","I wan buy","Oya sell me","How much for","Quick quick, give me"],A_=["Thank you o! 🙏","God bless your market!","Correct seller! 👌","I go come back tomorrow!"],C_=["Na wetin I ask for be this?! 😤","You dey whine me?","Abeg focus! 🙄"],R_=["You too slow! I don go another stall 😒","Time no dey for me o!"],Ta=n=>n[Math.floor(Math.random()*n.length)];function P_(n,{bonus:e=1,onDone:t}){let s=45,o=0,a=0,l=0,r=null,c={},d=!0,f=performance.now();n.classList.remove("hidden"),n.innerHTML=`
    <div class="mk">
      <div class="mk-top"><span>🛒 Your Stall ${e>1?'<small style="color:#e71d36">• Prices up!</small>':""}</span><span class="timer" id="mkTime">45s</span><span>₦<span id="mkEarn">0</span></span></div>
      <div class="cust" id="mkCust"></div>
      <div class="items">${Ts.map((x,_)=>`<button class="item" data-id="${x.id}"><span class="ic" style="background:${x.col}">${x.e}</span>${x.name}<small>${J(x.price*e)}</small><small style="opacity:.5">[${_+1}]</small></button>`).join("")}</div>
      <div class="basket" id="mkBasket"></div>
      <div class="mk-msg" id="mkMsg"></div>
      <div class="btn-row"><button class="btn" id="mkClear">↺ Clear</button><button class="btn green" id="mkSell">✔ Sell (Enter)</button></div>
      <p class="fine">Pack exactly wetin customer ask, then press Sell. Fast service = bigger tip.</p>
    </div>`;const p=x=>n.querySelector("#"+x),h=()=>{const x=1+Math.floor(Math.random()*3),_=[...Ts].sort(()=>Math.random()-.5).slice(0,x),E={};_.forEach(y=>E[y.id]=1+Math.floor(Math.random()*3));const k=Math.floor(Math.random()*vd.length);r={want:E,face:vd[k],name:E_[k],patience:11+Math.random()*4,max:0},r.max=r.patience,c={},v()},v=()=>{if(!r)return;const x=Object.entries(r.want).map(([_,E])=>{const k=Ts.find(y=>y.id===_);return`<span class="qty">${E} × ${k.e} ${k.name}</span>`}).join("");p("mkCust").innerHTML=`<div class="face">${r.face}</div><div style="flex:1"><div class="who">${r.name}</div><div class="say">${Ta(T_)}:</div><div style="margin-top:4px">${x}</div><div class="patience"><i id="mkPat" style="width:${r.patience/r.max*100}%"></i></div></div>`,m()},m=()=>{const x=Object.entries(c).filter(([,_])=>_>0);p("mkBasket").innerHTML=x.length?x.map(([_,E])=>{const k=Ts.find(y=>y.id===_);return`<span class="b">${E} × ${k.e} ${k.name}</span>`}).join(""):'<span style="opacity:.5">Basket empty — tap items to pack</span>'},u=x=>{p("mkMsg").textContent=x},g=x=>{d&&(c[x]=(c[x]||0)+1,m())},w=()=>{if(!d||!r)return;if(Object.keys({...r.want,...c}).every(_=>(r.want[_]||0)===(c[_]||0))){let _=0;for(const[y,M]of Object.entries(r.want))_+=Ts.find(R=>R.id===y).price*M;const E=Math.round(r.patience/r.max*60/10)*10,k=Math.round(_*e)+E;o+=k,a++,u(`${Ta(A_)} +${J(k)}${E?` (tip ${J(E)})`:""}`),p("mkEarn").textContent=o.toLocaleString("en-NG"),h()}else r.patience-=3,c={},m(),u(Ta(C_))};n.querySelectorAll(".item").forEach(x=>x.addEventListener("pointerdown",_=>{_.preventDefault(),g(x.dataset.id)})),p("mkClear").onclick=()=>{c={},m()},p("mkSell").onclick=w;const b=x=>{const _=parseInt(x.key,10);_>=1&&_<=5?g(Ts[_-1].id):x.key==="Enter"||x.key===" "?(x.preventDefault(),w()):x.key==="Backspace"&&(c={},m()),x.stopPropagation()};window.addEventListener("keydown",b,!0),h();const S=()=>{if(!d)return;const x=performance.now(),_=Math.min(.5,(x-f)/1e3);if(f=x,s-=_,r){r.patience-=_;const E=p("mkPat");E&&(E.style.width=Math.max(0,r.patience/r.max*100)+"%"),r.patience<=0&&(l++,u(Ta(R_)),h())}if(p("mkTime").textContent=Math.max(0,Math.ceil(s))+"s",s<=0)return C();requestAnimationFrame(S)};requestAnimationFrame(S);function C(){d=!1,window.removeEventListener("keydown",b,!0),n.innerHTML=`<div class="mk" style="text-align:center"><h2 style="margin:6px 0">Market don close! 🧺</h2>
      <p style="font-size:44px;margin:4px 0">${a>=5?"🤑":a>=2?"🙂":"😮‍💨"}</p>
      <p><b>${a}</b> customers served • <b>${l}</b> waka comot</p>
      <p style="font-size:30px;font-weight:900;margin:6px 0">+${J(o)}</p>
      <p class="fine">2 hours don pass. Your body don tire small.</p>
      <button class="btn primary" id="mkDone" style="width:100%">Collect money ➜</button></div>`,n.querySelector("#mkDone").onclick=()=>{n.classList.add("hidden"),n.innerHTML="",t({earned:o,served:a,lost:l})}}}const kc="wahala.char.v1",Os="wahala.save.v1",le=n=>document.getElementById(n),Gs=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,Za=Math.min(innerWidth,innerHeight)<820,Qa=n=>{try{return JSON.parse(localStorage.getItem(n))}catch{return null}},Dc=(n,e)=>{try{localStorage.setItem(n,JSON.stringify(e))}catch{}},$i=le("c"),di=new cy({canvas:$i,antialias:!0,powerPreference:"high-performance"});di.setPixelRatio(Math.min(devicePixelRatio,Za?1.75:2));di.setSize(innerWidth,innerHeight);di.shadowMap.enabled=!0;di.shadowMap.type=dc;const ri=new ou;ri.background=new ze("#ffe3a3");const Hn=new ln(30,innerWidth/innerHeight,.1,100);Hn.position.set(0,1.25,5.4);Hn.lookAt(0,.85,0);ri.add(new gu(16777215,16767408,1.3));const hr=new yu(16777215,2.2);hr.position.set(2.5,5,4);hr.castShadow=!0;hr.shadow.mapSize.set(1024,1024);ri.add(hr);{const n=ne(new Wt(1.1,1.2,.25,40),Y("#ffffff",{map:es("circles","#ff6b35","#2ec4b6","#fff3d6",[6,1])}),{t:.05});n.position.y=-.125,ri.add(n);const e=new Ce(new Us(1.1,40),Y("#fff3d6"));e.rotation.x=-Math.PI/2,e.position.y=.005,e.receiveShadow=!0,ri.add(e);const t=[["#ff9eb5",-2.6,2.2,-4,1.6],["#7fd1c7",2.8,1.4,-5,2.2],["#c3b1f0",-1.2,3.4,-6,1.2],["#ffd23f",1.5,3.6,-7,1]];for(const[i,s,o,a,l]of t){const r=ne(new An(l,20,14),Y(i),{t:.06,cast:!1});r.position.set(s,o,a),ri.add(r)}}let bn=null,kt={...Su(),...Qa(kc)||{}};function L_(){const n=bn?bn.rotation.y:-.35;bn&&ri.remove(bn),bn=cn(kt),bn.rotation.y=n,ri.add(bn)}function Pu(){const n=innerWidth,e=innerHeight;Hn.aspect=n/e,n>760?(Hn.setViewOffset(n,e,-Math.min(220,n*.2),0,n,e),Hn.fov=30):(Hn.setViewOffset(n,e,0,e*.26,n,e),Hn.fov=n/e<.7?58:44),Hn.updateProjectionMatrix()}const nt=new ou;nt.background=new ze("#8fd3ff");nt.fog=new wc("#8fd3ff",70,170);const vn=new ln(50,innerWidth/innerHeight,.1,400),ji=new gu(15136511,15782816,1.1);nt.add(ji);const En=new yu(16774108,2.4);En.castShadow=!0;En.shadow.mapSize.set(Za?1024:2048,Za?1024:2048);Object.assign(En.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:140});En.shadow.bias=-6e-4;En.shadow.normalBias=.03;nt.add(En);nt.add(En.target);const sc=new qa(16773320,0,11,1.3);nt.add(sc);const yd=(()=>{const n=[];for(let i=0;i<500;i++){const s=Math.random()*Math.PI*2,o=.15+Math.random()*1.3;n.push(Math.cos(s)*Math.cos(o)*180,Math.sin(o)*180,Math.sin(s)*Math.cos(o)*180)}const e=new Pt;e.setAttribute("position",new mt(n,3));const t=new fy(e,new hu({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1}));return nt.add(t),t})(),Oa=new Ce(new An(6,20,14),new qs({color:16643800,fog:!1,transparent:!0}));nt.add(Oa);let Dt=null,dt=null,X=null;const Re=new P().copy($n.spawn);let Kt=0,Xt=0,er=.52,tr=Za?11:10,Zs="creator",yt=!1,Nc=!1;const Rt=n=>new ze(n),vo=[[0,"night"],[5,"night"],[6.3,"dawn"],[8,"day"],[17,"day"],[18.6,"dusk"],[19.8,"night"],[24,"night"]],_d={night:{sky:Rt("#2b2f6e"),hs:Rt("#7383db"),hg:Rt("#3a2f5a"),hi:.95,si:.45,sc:Rt("#a9bbff")},dawn:{sky:Rt("#ffb38a"),hs:Rt("#ffd1b3"),hg:Rt("#e0b080"),hi:1,si:1.5,sc:Rt("#ffb27a")},day:{sky:Rt("#8fd3ff"),hs:Rt("#e6f6ff"),hg:Rt("#f0d3a0"),hi:1.15,si:2.5,sc:Rt("#fff3dc")},dusk:{sky:Rt("#ff9470"),hs:Rt("#ffb8a0"),hg:Rt("#b08070"),hi:.95,si:1.3,sc:Rt("#ff9a5c")}},I_=new ze,k_=new ze,D_=Rt("#151838");function N_(n){let e=0;for(;e<vo.length-1&&vo[e+1][0]<=n;)e++;const[t,i]=vo[e],[s,o]=vo[Math.min(e+1,vo.length-1)],a=s>t?(n-t)/(s-t):0,l=_d[i],r=_d[o];return{sky:l.sky.clone().lerp(r.sky,a),hs:l.hs.clone().lerp(r.hs,a),hg:l.hg.clone().lerp(r.hg,a),hi:l.hi+(r.hi-l.hi)*a,si:l.si+(r.si-l.si)*a,sc:l.sc.clone().lerp(r.sc,a)}}let Gi=1,sl=0;const xd=Rt("#a8dcff"),U_=Rt("#ffe39a"),Md=Rt("#39406b"),O_=Rt("#ffae42");function F_(n){const e=X.hour+X.acc/60,t=N_(e%24),i=e<5.5?1:e<7?1-(e-5.5)/1.5:e<18?0:e<19.5?(e-18)/1.5:1;Gi+=((X.s.power?1:0)-Gi)*Math.min(1,n*6),sl+=((X.genRunning?1:0)-sl)*Math.min(1,n*4);const s=(1-Gi)*i;t.sky.lerp(D_,s*.85),nt.background.copy(t.sky),nt.fog.color.copy(t.sky),nt.fog.near=70-s*40,nt.fog.far=170-s*80,ji.color.copy(t.hs),ji.groundColor.copy(t.hg),ji.intensity=t.hi*(1-s*.68),En.color.copy(t.sc),En.intensity=t.si*(1-s*.4);let o;if(e>=6&&e<=18.6){const d=(e-6)/12.6*Math.PI;o=new P(-Math.cos(d),Math.max(.25,Math.sin(d)),.45).normalize()}else o=new P(.45,.9,.35).normalize();En.position.copy(Re).addScaledVector(o,60),En.target.position.copy(Re),Oa.position.copy(Re).add(new P(60,75,-120)),Oa.material.opacity=i,Oa.visible=i>.05,yd.material.opacity=i*(.35+s*.65),yd.position.set(Re.x,0,Re.z);const a=Dt.mats,l=i*Gi;a.window.color.copy(xd).lerp(I_.copy(U_).lerp(Md,1-Gi),i),a.window.emissive.copy(O_),a.window.emissiveIntensity=l*.75,a.windowDark.color.copy(xd).lerp(Md,i),a.bulb.emissive.set("#ffd27a"),a.bulb.emissiveIntensity=l*1.2,a.bulb.color.set(l>.3?"#fff3b0":"#8a8fa3"),Dt.lampLights.forEach(d=>d.intensity=l*22);const r=Math.max(Gi,sl);a.homeBulb.emissive.set("#ffd27a"),a.homeBulb.emissiveIntensity=r*i*1.4,a.homeBulb.color.set(r>.5?"#fff3b0":"#6b6f80"),Dt.homeLight.intensity=r*i*22,Dt.homeBars.emissive.set("#ffb347"),Dt.homeBars.emissiveIntensity=r*i*.8,a.headlight.emissive.set("#fff4c2"),a.headlight.emissiveIntensity=i*1.2,sc.intensity=s>.4?s*7:0;const c=new P(Math.sin(Kt),0,Math.cos(Kt));sc.position.copy(Re).addScaledVector(c,1.2).add(new P(0,2,0)),le("blackoutTint").style.opacity=(s*.85).toFixed(2)}const St=new Set,Ft={x:0,y:0,active:!1,id:null};addEventListener("keydown",n=>{if(n.target.tagName==="INPUT")return;const e=n.key.toLowerCase();if(St.add(e),Zs==="game"){if(Qe.init(),(e==="e"||e==="enter")&&!yt&&!n.repeat&&Lu(),Bt&&!n.repeat){const t=parseInt(e,10);t>=1&&t<=Bt.opts.length&&(n.preventDefault(),Bt.pick(t-1));return}if(!n.repeat&&!yt){const t=Oc().find(i=>i.key===e||i.key===" "&&e===" ");t&&!t.disabled&&(e===" "&&n.preventDefault(),t.onClick(),Vo())}if(e==="m"&&!n.repeat&&zu(),(e==="p"||e==="tab")&&(n.preventDefault(),Du()),e==="escape"){if(!le("mash").classList.contains("hidden"))return;zo(),ss()}}});addEventListener("keyup",n=>St.delete(n.key.toLowerCase()));addEventListener("blur",()=>St.clear());{const n=le("joystick"),e=le("knob"),t=(o,a)=>{e.style.transform=`translate(${o}px, ${a}px)`},i=o=>{const a=n.getBoundingClientRect(),l=a.left+a.width/2,r=a.top+a.height/2;let c=o.clientX-l,d=o.clientY-r;const f=a.width/2-10,p=Math.hypot(c,d);p>f&&(c*=f/p,d*=f/p),Ft.x=c/f,Ft.y=-d/f,t(c,d)};n.addEventListener("pointerdown",o=>{Ft.active=!0,Ft.id=o.pointerId,n.setPointerCapture(o.pointerId),i(o),o.preventDefault()}),n.addEventListener("pointermove",o=>{Ft.active&&o.pointerId===Ft.id&&i(o)});const s=o=>{o.pointerId===Ft.id&&(Ft.active=!1,Ft.x=Ft.y=0,t(0,0))};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s)}{let n=null;$i.addEventListener("pointerdown",t=>{n={id:t.pointerId,x:t.clientX,y:t.clientY},$i.setPointerCapture(t.pointerId)}),$i.addEventListener("pointermove",t=>{if(!n||n.id!==t.pointerId)return;const i=t.clientX-n.x,s=t.clientY-n.y;n.x=t.clientX,n.y=t.clientY,Zs==="creator"&&bn?bn.rotation.y+=i*.012:Pe!=null&&Pe.lockCam||(Xt-=i*.006,er=Tt.clamp(er+s*.004,.25,1.15))});const e=t=>{n&&n.id===t.pointerId&&(n=null)};$i.addEventListener("pointerup",e),$i.addEventListener("pointercancel",e),$i.addEventListener("wheel",t=>{tr=Tt.clamp(tr+t.deltaY*.01,5,20)},{passive:!0})}function ft(n,e=""){const t=document.createElement("div");for(t.className="toast "+e,t.textContent=n,le("toasts").appendChild(t);le("toasts").children.length>4;)le("toasts").firstChild.remove();setTimeout(()=>t.remove(),3600)}function jt(n,e,t,i=""){yt=!0;const s=le("modalCard");s.className="modal-card "+i,s.innerHTML=`<h2>${n}</h2>${e?`<p class="sub">${e}</p>`:""}`;for(const o of t){const a=document.createElement("button");a.className="opt"+(o.close?" close":""),a.innerHTML=`<span>${o.label}${o.sub?`<small>${o.sub}</small>`:""}</span>${o.price?`<span class="price">${o.price}</span>`:""}`,a.disabled=!!o.disabled,a.onclick=()=>{var l;o.keep||zo(),(l=o.onClick)==null||l.call(o)},s.appendChild(a)}le("modal").classList.remove("hidden")}function zo(){le("modal").classList.add("hidden"),!le("market").innerHTML&&!Ci&&(yt=!1)}let Ci=!1;le("modal").addEventListener("pointerdown",n=>{n.target.id==="modal"&&zo()});function Ho(n,e,t){return new Promise(i=>{yt=!0,Ci=!0;const s=le("fade");s.textContent=n,s.classList.add("on"),setTimeout(()=>{t==null||t(),setTimeout(()=>{s.classList.remove("on"),setTimeout(()=>{Ci=!1,yt=!1,i()},450)},e)},520)})}const B_=n=>{const e=Math.floor(n/1440),t=Math.floor(n%1440/60);return e?`${e}d ${t}h`:`${t}h ${n%60}m`},z_=(n,e)=>new P(n,0,e),H_=[{id:"gen",pos:$n.generator,r:1.9,label:()=>"Generator ⛽",act:Iu},{id:"stall",pos:$n.stall,r:2.2,label:()=>"Sell for stall 🍅",act:$_},...ai.map(n=>({id:"stop-"+n.id,pos:z_(n.x,6.6),r:2.8,label:()=>`Danfo @ ${n.name} 🚌`,act:()=>X_(n)}))];let nr=null;function Lu(){nr&&!yt&&(Qe.click(),nr.act())}le("actionBtn").addEventListener("click",Lu);function V_(){const n=X.s,e=X.hour,t=X.s.power?"💡 NEPA light dey":X.genRunning?"⛽ Gen dey run":"🕯️ No light",i=e>=19||e<5;jt("Room 4 🏠",`Face-me-I-face-you, No. 7. ${t}. Rent owed: <b>${J(n.rentOwed)}</b>${n.strikes?` • ⚠️ Strike ${n.strikes}/2`:""}`,[{label:"Sleep till morning 😴",sub:i?"Restores Body. Better with light (fan dey work).":"E never late, but you fit sleep",onClick:()=>bd(!0)},{label:"Take nap (2 hours)",sub:"+Body small",onClick:()=>bd(!1)},{label:"Pay full rent",sub:n.rentOwed?"Baba Ade go happy":"You don pay finish 👏",price:J(n.rentOwed),disabled:!n.rentOwed||n.cash<n.rentOwed,onClick:()=>{const s=X.payRent(n.rentOwed);ft(`Rent paid: ${J(s)} ✔`,"good"),tn()}},{label:"Pay part of rent",sub:"Small small dey fill basket",price:J(Math.min(2e3,n.rentOwed)),disabled:!n.rentOwed||n.cash<Math.min(2e3,n.rentOwed),onClick:()=>{const s=X.payRent(2e3);ft(`Paid ${J(s)} — balance ${J(n.rentOwed)}`,"good"),tn()}},{label:"Comot",close:!0}])}async function bd(n){const e=X.hour;let t=n?(e<6.5?6.5-e:24-e+6.5)*60:120;t=Math.round(t);let i=0;await Ho(n?"😴 Zzz... Sleeping till morning":"😴 Small nap...",900,()=>{var s;for(let o=0;o<t&&(X.tick({sleeping:!0}),X.homePowered&&i++,!X.s.evicted);o++);X.collapsed=!1,((s=Ke==null?void 0:Ke.cur)==null?void 0:s.id)==="room"?Re.set(Ke.cur.ox-2.8,0,-.9):Ke!=null&&Ke.cur||(Re.copy($n.spawn),Kt=0,Xt=0)}),n&&(i/Math.max(1,t)>.7?(X.s.mood=Math.min(100,X.s.mood+10),ft("You wake up fresh! Fan dey blow all night 😌","good")):ft("NEPA take light — heat & mosquito no let you sleep well 🥵🦟","warn")),tn()}function Iu(){const n=X.s;if(!n.hasGen&&!n.quietGen)return jt("No generator 😩",'Recovery agents don carry your "I-Pass-My-Neighbour". You fit buy quiet inverter-gen.',[{label:"Buy quiet generator 🤫",sub:"No neighbour wahala at night",price:J(xo),disabled:n.cash<xo,onClick:wd},{label:"Comot",close:!0}]);jt(n.quietGen?"Quiet Gen 🤫⛽":'"I-Pass-My-Neighbour" ⛽',`${n.quietGen?"":"Loud! Running am 10pm–6am go make neighbours vex. "}Fuel: <b>${n.fuel} hrs</b> • Gen switch: <b>${n.genOn?"ON":"OFF"}</b>. E go run automatically when NEPA take light.`,[{label:"Buy 5 hours fuel",sub:"Jerrycan from roadside seller (price follow petrol price)",price:J(X.fuelPrice),disabled:n.cash<X.fuelPrice||n.fuel>=24,onClick:()=>{X.buyFuel(),ft("Fuel don enter gen ⛽","good"),tn()}},{label:n.genOn?"Switch gen OFF":"Switch gen ON",sub:n.genOn?"Save fuel":"Make e run when light go",onClick:()=>{n.genOn=!n.genOn,ft(n.genOn?"Gen switch ON":"Gen switch OFF")}},...n.quietGen?[]:[{label:"Buy quiet generator 🤫",sub:`Neighbour complaints this night: ${n.genComplaints}/3`,price:J(xo),disabled:n.cash<xo,onClick:wd}],{label:"Comot",close:!0}])}function wd(){X.spend(xo)&&(X.s.quietGen=!0,X.s.hasGen=!0,ft("Quiet gen installed 🤫 Neighbours go sleep well now","good"),X.addKarma(2),Qe.cash(),tn())}const W_=[{name:"Jollof rice & chicken",price:1500,hunger:45,mood:8,mins:25},{name:"Amala & ewedu",price:1e3,hunger:38,mood:4,mins:20},{name:"Eba & egusi soup",price:1200,hunger:42,mood:5,mins:25},{name:"Puff-puff (5 pieces)",price:300,hunger:12,mood:3,mins:5},{name:"Pure water (sachet)",price:50,hunger:3,mood:2,mins:1}];function ku(){const n=X.hour;if(n<6||n>=22)return jt("Buka don close 🌙","Iya Basira don go house. Come back from 6am.",[{label:"Okay",close:!0}]);jt("Mama Put — Iya Basira 🍛",`"My pikin, wetin you go chop today?" • Belle: ${Math.round(X.s.hunger)}%`,[...W_.map(e=>({...e,price:Math.round(e.price*X.priceMul("Iya Basira")/50)*50})).map(e=>({label:e.name,sub:`+${e.hunger} Belle • +${e.mood} Mind`,price:J(e.price),disabled:X.s.cash<e.price,onClick:()=>{X.spend(e.price),X.addRel("Iya Basira",1),X.s.hunger=Math.min(100,X.s.hunger+e.hunger),X.s.mood=Math.min(100,X.s.mood+e.mood),X.s.stats.meals++,X.advance(e.mins),ft(`${e.name} — e sweet die! 😋`,"good"),tn()}})),{label:"I no hungry",close:!0}])}function $_(){const n=X.hour;if(n<7||n>=19)return jt("Market don close 🌙","Market dey open 7am – 7pm. Go rest.",[{label:"Okay",close:!0}]);if(X.s.energy<15)return jt("Your body don tire 😮‍💨","You need at least 15% Body to sell. Go chop or sleep.",[{label:"Okay",close:!0}]);jt("Your Market Stall 🍅",`Sell tomato, pepper, onions, plantain & egg. 45 seconds = 2 game hours.${X.s.marketBonus>1?' <b style="color:#e71d36">Prices up 50% today!</b>':""}`,[{label:"Open shop! 🛒",sub:"Uses Body & Belle",onClick:G_},{label:"Later",close:!0}])}function G_(){yt=!0,P_(le("market"),{bonus:X.s.marketBonus,onDone:({earned:n,served:e})=>{X.advance(120,{working:!0}),X.earn(n,"market"),X.s.stats.sold+=e,e>=4&&(X.s.mood=Math.min(100,X.s.mood+6)),yt=!1,ft(`+${J(n)} from market 💰`,"money"),tn()}})}function X_(n){const e=X.hour;if(e<5||e>=23)return jt("No Danfo now 🌙","Danfo dey run 5am – 11pm. Na trek remain.",[{label:"Okay",close:!0}]);const t=ai.indexOf(n);jt(`${n.name} Bus Stop 🚌`,`Conductor: "Enter with your change o!" • Base fare ${J(X.danfoFare)}${X.s.fuelFactor>1?" (fuel price don raise am)":""}`,[...ai.filter(i=>i!==n).map(i=>{const s=Math.abs(ai.indexOf(i)-t),o=X.danfoFare*s;return{label:`To ${i.name}`,sub:`~${s*15}–${s*15+30} mins (traffic dey)`,price:J(o),disabled:X.s.cash<o,onClick:()=>Y_(i,o,s)}}),{label:"I go trek",close:!0}])}async function Y_(n,e,t){X.spend(e);const i=t*15+Math.floor(Math.random()*30),s=['Conductor: "Shift! Shift! Make una shift!" 🚌',"Driver dey play Fuji music full blast 🎶","Traffic for road... hawker dey sell gala 🥖",'Conductor: "Who never pay?" 👀'][Math.floor(Math.random()*4)];await Ho(s,1300,()=>{X.advance(i),Re.set(n.x+1.8,.18,6.3),Kt=0,Xt=0}),ft(`You don reach ${n.name}! (${i} mins, ${J(e)})`,"good"),tn()}async function q_(){Nc=!1,await Ho("😵 You don faint for road!",1400,()=>{for(let e=0;e<360;e++)X.tick({sleeping:!0});X.s.energy=Math.max(X.s.energy,40),X.s.mood=Math.max(0,X.s.mood-15);const n=Math.min(500,X.s.cash);X.s.cash-=n,X.collapsed=!1,Re.copy($n.spawn),setTimeout(()=>ft(`Neighbours carry you go house. You dash them ${J(n)} 🙏`,"bad"),800)}),tn()}let Do=null;function Du(){le("phone").classList.contains("hidden")?Uc():ss()}function Uc(n){!Do||Pe&&Pe.name!=="photo"&&Pe.name!=="keke"||(Qe.click(),(Pe==null?void 0:Pe.name)==="photo"&&No(),Do.open(n))}function ss(){le("phone").classList.add("hidden")}function Sd(){Do&&!le("phone").classList.contains("hidden")&&Do.render()}le("phoneBtn").addEventListener("click",()=>Du());le("phoneClose").addEventListener("click",ss);le("phone").addEventListener("pointerdown",n=>{n.target.id==="phone"&&ss()});function K_(n){return n>55?"#06d6a0":n>25?"#ffbe0b":"#e71d36"}function Nu(){const n=X.s;le("hudDay").textContent=`${X.dayStr().slice(0,3)} • Day ${X.day}`,le("hudTime").textContent=X.timeStr(),le("hudCash").textContent=Math.round(n.cash).toLocaleString("en-NG");for(const[l,r]of[["barHunger",n.hunger],["barEnergy",n.energy],["barMood",n.mood]]){const c=le(l);c.style.width=r+"%",c.style.background=K_(r)}const e=le("hudPower");n.power?(e.className="power on",e.textContent="💡 NEPA"):X.genRunning?(e.className="power gen",e.textContent="⛽ Gen"):(e.className="power off",e.textContent="🕯️ No light");const t=le("hudRent"),i=X.rentCountdown();n.rentOwed>0?(t.textContent=`🏠 Rent ${J(n.rentOwed)} • due in ${B_(i)}`,t.className="rent-chip"+(i<1440||n.strikes?" bad":"")):(t.textContent="🏠 Rent paid ✔ • Lapo tier",t.className="rent-chip"),n.loan>0&&(t.textContent+=` • Loan ${J(n.loan)}`);const s=X.statusPoints;le("hudKarma").textContent=`🙏 ${n.karma>0?"+":""}${n.karma}`,le("hudKarma").className="chip "+(n.karma>=0?"good":"bad"),le("hudFollow").textContent=`📸 ${n.followers}`,le("hudData").textContent=`📶 ${n.dataMB}MB`,le("hudData").className="chip"+(n.dataMB<25?" bad":""),le("statusFill").style.width=s+"%",le("statusPct").textContent=s+"%";const o=n.unread+n.unreadMsg,a=le("badge");a.textContent=o,a.classList.toggle("hidden",!o),le("phTime").textContent=X.timeStr(),le("phPower").textContent=n.power?"💡":X.genRunning?"⛽":"🕯️"}function tn(){if(!X)return;const n=Ke!=null&&Ke.cur?{x:Ke.cur.door.x,z:Ke.cur.door.z+(Ke.cur.door.z<0?1.4:-1.4)}:(dt==null?void 0:dt.parent)===nt?{x:Re.x,z:Re.z}:{x:$n.spawn.x,z:$n.spawn.z};X.s.player={...n,rotY:Kt},Dc(Os,X.s)}function oc(n){Dc(kc,kt);let e=n?null:Qa(Os);(!e||!(e.v>=1)||e.evicted)&&(e=$y(kt.name||"Tunde")),e.name=kt.name||e.name,X=new Xy(e,{toast:ft,onPost:t=>{le("phone").classList.contains("hidden")||Sd(),t.kind==="alert"&&ft(`📱 ${t.handle}: ${t.text.slice(0,70)}${t.text.length>70?"…":""}`,"warn")},onPower:t=>ft(t?"UP NEPA! Light don come 💡🎉":"NEPA don take light! 🕯️",t?"good":"bad"),onCollapse:()=>{Nc=!0},onEvictionWarning:()=>setTimeout(()=>jt("⚠️ EVICTION WARNING",`Baba Ade: "You no pay rent this week! I don add late fee. If you no pay everything by next Saturday, I go throw your load comot!" Owed: <b>${J(X.s.rentOwed)}</b>`,[{label:"I go pay, abeg 🙏",close:!0}],"warn"),600),onEvict:()=>setTimeout(j_,600),onText:t=>{Qe.ping(),ft(`💬 ${t.from}: ${t.text.slice(0,60)}${t.text.length>60?"…":""}`,t.kind==="bad"?"bad":t.kind==="good"?"good":""),Sd()},onKarma:(t,i)=>{t&&ft(`Karma ${t>0?"+":""}${t}${i?" • "+i:""} 🙏`,t>0?"good":"bad")},onCash:t=>{t>0&&Qe.cash()},onRecoveryCall:()=>setTimeout(Bu,400),onRecoveryVisit:()=>setTimeout(()=>Ei==null?void 0:Ei.spawnAgents(),400),onRain:t=>ft(t?"Rain don start! 🌧️ Find shade":"Rain don stop ☀️",t?"warn":"good"),onRel:(t,i,s)=>{Math.abs(i)>=5&&ft(`${t}: ${i>0?"❤️ +":"💔 "}${i} (${Xs.relWord(s)})`,i>0?"good":"bad")}}),Dt||(Dt=new zy(nt)),dt&&nt.remove(dt),dt=cn(kt),nt.add(dt),Dn?Dn.attachTray(dt):hx(),e.player?(Re.set(e.player.x,0,e.player.z),Kt=e.player.rotY||0):(Re.copy($n.spawn),Kt=0),Xt=0,Zs="game",le("creator").classList.add("hidden"),["hud","phoneBtn","sysBtns"].forEach(t=>le(t).classList.remove("hidden")),Gs&&le("joystick").classList.remove("hidden"),Gs&&le("keysHint").classList.add("hidden"),Hn.clearViewOffset(),Nu(),e._migrated&&(delete e._migrated,setTimeout(()=>ft("Save upgraded to Stage 2 ✔ — check your GistMe Messages","good"),800)),e.player||setTimeout(()=>jt(`Welcome to Lagos, ${e.name}! 🏙️`,`You don rent one room for face-me-I-face-you. You get <b>${J(e.cash)}</b> for pocket and rent na <b>${J(Ao)}</b> every Saturday. Hustle for <b>Yaba Market</b> stall, chop for <b>Mama Put</b>, and no forget — NEPA fit take light anytime. 😅`,[{label:"Oya, make we go! ➜",close:!0}]),300)}function j_(){const n=X.s;jt("🧳 You don be evicted!",`Baba Ade don throw your load comot for Room 4. You survive ${X.day} days, earn ${J(n.stats.earned)}. Lagos no easy o!`,[{label:"Start new life ➜",onClick:()=>{localStorage.removeItem(Os),location.reload()}}],"warn")}setInterval(()=>{Zs==="game"&&!yt&&tn()},8e3);addEventListener("pagehide",tn);function J_(){le("ccName").value=kt.name,le("ccName").addEventListener("input",s=>{kt.name=s.target.value.trim()||"Tunde"});const n=(s,o,a,l=r=>r)=>{s.innerHTML="",o.forEach(r=>{const c=l(r),d=document.createElement("button");d.className="sw"+(kt[a]===c?" sel":""),d.style.background=c,d.title=r.name||c,d.onclick=()=>{kt[a]=c,t()},s.appendChild(d)})},e=(s,o,a)=>{s.innerHTML="",o.forEach(l=>{const r=document.createElement("button");r.className="chip"+(kt[a]===l.id?" sel":""),r.textContent=l.name,r.onclick=()=>{kt[a]=l.id,t()},s.appendChild(r)})},t=()=>{n(le("ccSkin"),Rc,"skin",s=>s.hex),e(le("ccHair"),cr,"hair"),n(le("ccHairColor"),Ka,"hairColor"),e(le("ccOutfit"),xu,"outfit"),e(le("ccPattern"),Dy,"pattern"),le("ccPatternGroup").style.opacity=kt.outfit.startsWith("ankara")||kt.hair==="gele"?1:.4,n(le("ccCloth"),Mu,"clothColor"),n(le("ccAccent"),bu,"accentColor"),n(le("ccPants"),wu,"pantsColor"),L_()};le("ccRandom").onclick=()=>{const s=kt.name;kt={...Sn(),name:s},t()},!!Qa(Os)&&!Qa(Os).evicted&&(le("ccStart").textContent="Continue Hustle ➜",le("ccNew").classList.remove("hidden")),le("ccStart").onclick=()=>oc(!1),le("ccNew").onclick=()=>{confirm("Wipe your save and start fresh?")&&(localStorage.removeItem(Os),oc(!0))},t()}J_();Pu();let Ed=null;function Z_(n,e){const t=le("overhear");t.innerHTML=`<span>👂 ${n}:</span> ${e}`,t.classList.add("on"),clearTimeout(Ed),Ed=setTimeout(()=>t.classList.remove("on"),3200)}const Q_=new Ly;let ol=0,Mo=0;const Td=new P,al=new P,ex=()=>X.s.power?["How far?","Wetin dey sup?","Traffic no go kill person","E choke!","Na God o","This sun no be here o","Jollof dey buka","Abeg shift"]:["NEPA don take light!","Who get gen?","Heat wan kill me","UP NEPA when?"];function Uu(){var d,f;requestAnimationFrame(Uu);const n=Math.min(.1,Q_.getDelta());if(Mo+=n,Zs==="creator"){bn&&(bn.rotation.y+=n*.25,hn(bn,n,0,Mo)),di.render(ri,Hn);return}!yt&&!X.s.evicted&&X.update(n),Nc&&!yt&&q_();let e=0,t=0;Pe&&!yt&&Pe.update(n);const i=!Pe||Pe.allowWalk;!yt&&i&&((St.has("w")||St.has("arrowup"))&&(t+=1),(St.has("s")||St.has("arrowdown"))&&(t-=1),(St.has("a")||St.has("arrowleft"))&&(e-=1),(St.has("d")||St.has("arrowright"))&&(e+=1),St.has("q")&&(Xt+=n*1.8),St.has("r")&&(Xt-=n*1.8),e+=Ft.x,t+=Ft.y);const s=Math.min(1,Math.hypot(e,t));let o=0;if(s>.08&&i){const p=-Math.sin(Xt),h=-Math.cos(Xt),v=Math.cos(Xt),m=-Math.sin(Xt);let u=v*e+p*t,g=m*e+h*t;const w=Math.hypot(u,g);u/=w,g/=w;const b=St.has("shift")||Ft.active&&s>.95;let S=(b?7:4.3)*s;(X.s.hunger<=0||X.s.energy<10)&&(S*=.65),Re.x+=u*S*n,Re.z+=g*S*n;let x=Math.atan2(u,g)-Kt;x=Math.atan2(Math.sin(x),Math.cos(x)),Kt+=x*Math.min(1,n*12),o=b?1.5:Math.max(.5,s)}i&&vt.resolve(Re),i||(o=vt.moveAmt),Re.y+=((Ke.cur?0:Dt.groundHeight(Re.x,Re.z))-Re.y)*Math.min(1,n*15),dt.parent===nt&&(dt.position.copy(Re),dt.rotation.y=Kt),hn(dt,n,dt.parent===nt?o:0,Mo),Oy(dt,X.s.mood),dt.parent===nt&&dn.pose(dt),Dt.update(n,Mo,Re,{power:X.s.power,genRunning:X.genRunning,lines:ex,onOverhear:Z_,night:X.isNight,ev:vt.evCtx()}),Dn.update(n),Ei.update(n),dn.update(n),Ke.update(n),Ro.update(n),Xs.update(n),Po.update(n),cx(n);{const p=Oc().map(h=>h.label+(h.disabled?0:1)).join("|");p!==Ad&&(Ad=p,Vo())}dx(n,o),Dt.bark&&(Dt.bark.pos.distanceTo(Re)<22&&ft(`🚌 ${Dt.bark.text}`),Dt.bark=null);let a=null,l=1e9;if(!Pe)for(const p of H_){const h=Math.hypot(Re.x-p.pos.x,Re.z-p.pos.z);h<p.r&&h<l&&(l=h,a=p)}if(ir)a=ir;else if(!Pe||Pe.allowHots){for(const p of rc){const h=p();if(h){a=h;break}}if(!Pe){const p=Xs.hot();p&&(!a||p.join&&a.id!==void 0)&&(a=p)}}a!==nr&&(nr=a,le("actionBtn").classList.toggle("hidden",!a)),a&&(le("actionLabel").textContent=typeof a.label=="function"?a.label():a.label),yt?le("actionBtn").classList.add("hidden"):a&&le("actionBtn").classList.remove("hidden"),le("actionBtn").querySelector(".key").style.display=Gs?"none":"",Ke.cur&&!Pe&&vt.camYawTo(0,n*4);const r=(d=Pe==null?void 0:Pe.camDist)!=null?d:Ke.cur?8.5:tr,c=(f=Pe==null?void 0:Pe.camPitch)!=null?f:Ke.cur?.95:er;Td.set(Re.x,Re.y+1.1,Re.z),al.set(Re.x+Math.sin(Xt)*Math.cos(c)*r,Re.y+1.1+Math.sin(c)*r,Re.z+Math.cos(Xt)*Math.cos(c)*r),lc?(vn.position.copy(al),lc=!1):vn.position.lerp(al,Math.min(1,n*6)),Is>0&&(Is-=n,vn.position.x+=(Math.random()-.5)*Is,vn.position.y+=(Math.random()-.5)*Is),vn.lookAt(Td),F_(n),ol-=n,ol<=0&&(ol=.25,Nu()),di.render(nt,vn)}const Qe=new qy;let Pe=null,ir=null,Dn=null,Ei=null,Fa=null,ac=null;const rc=[];function Ou(n){Pe&&No(),dn!=null&&dn.held&&!["photo"].includes(n.name)&&dn.drop(),Pe=n,ss(),Vo()}function No(){var e;const n=Pe;Pe=null,ir=null,(e=n==null?void 0:n.onEnd)==null||e.call(n),Vo()}function Oc(){var n;return Pe?((n=Pe.buttons)==null?void 0:n.call(Pe))||[]:!dn||yt||(dt==null?void 0:dt.parent)!==nt?[]:dn.buttons()}let Ad="",lc=!1,Is=0,Bt=null;function Vo(){const n=le("ctxBtns");n.innerHTML="";for(const e of Oc()){const t=document.createElement("button");t.className="ctx-btn",t.disabled=!!e.disabled,t.innerHTML=`${e.label}${!Gs&&e.key?`<span class="key">${e.key===" "?"Space":e.key.toUpperCase()}</span>`:""}`,t.addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation(),Qe.init(),yt||(e.onClick(),Vo())}),n.appendChild(t)}n.classList.toggle("hidden",!n.children.length)}function tx(n){const e=le("actHud");e._h!==n&&(e._h=n,e.innerHTML=n,e.classList.toggle("hidden",!n))}function nx({label:n,taps:e=12,secs:t=4}){return new Promise(i=>{yt=!0,Ci=!0;const s=le("mash"),o=le("mashFill"),a=le("mashBtn");le("mashLabel").textContent=n,s.classList.remove("hidden");let l=0,r=performance.now(),c=!1;const d=v=>{c||(c=!0,s.classList.add("hidden"),removeEventListener("keydown",p),a.onpointerdown=null,Ci=!1,yt=!1,i(v))},f=()=>{l++,Qe.tone(300+l*25,.05,"triangle",.08),o.style.width=Math.min(100,l/e*100)+"%",l>=e&&d(!0)},p=v=>{(v.key===" "||v.key.toLowerCase()==="e")&&(v.preventDefault(),v.repeat||f())};addEventListener("keydown",p),a.onpointerdown=v=>{v.preventDefault(),f()},o.style.width="0%";const h=()=>{if(c)return;const v=t-(performance.now()-r)/1e3;le("mashTime").textContent=Math.max(0,v).toFixed(1)+"s",v<=0?d(!1):requestAnimationFrame(h)};h()})}const vt={get world(){return Dt},get sim(){return X},scene:nt,camera:vn,renderer:di,pos:Re,get player(){return dt},audio:Qe,get time(){return Mo},moveAmt:0,isTouch:Gs,input(){let n=Ft.x,e=Ft.y;return yt?(n=0,e=0):((St.has("w")||St.has("arrowup"))&&(e+=1),(St.has("s")||St.has("arrowdown"))&&(e-=1),(St.has("a")||St.has("arrowleft"))&&(n-=1),(St.has("d")||St.has("arrowright"))&&(n+=1)),{ix:Tt.clamp(n,-1,1),iy:Tt.clamp(e,-1,1),run:St.has("shift")||Ft.active&&Math.hypot(Ft.x,Ft.y)>.95}},camYawTo(n,e){let t=n-Xt;t=Math.atan2(Math.sin(t),Math.cos(t)),Xt+=t*Math.min(1,e)},setRot(n){Kt=n},zoom(n){Pe&&(Pe.camDist=Tt.clamp(Pe.camDist+n,2.5,14))},startActivity:Ou,endActivity:No,activityName:()=>(Pe==null?void 0:Pe.name)||null,toast:ft,modal:jt,closeModal:zo,fade:Ho,save:()=>tn(),setBusy(n){yt=n,Ci=n},isBusy:()=>yt,ctxHot(n){ir=n},actHud:tx,mash:nx,closePhone:ss,renderNow(){di.render(nt,vn)},wheel:Fu,wait:n=>new Promise(e=>setTimeout(e,n)),rotY:()=>Kt,inside:()=>!!(Ke!=null&&Ke.cur),resolve(n,e){Ke!=null&&Ke.cur?Ke.resolve(n,e):Dt.resolve(n,e)},snapCam(){lc=!0},shake(n){Is=Math.max(Is,n)},homeMenu:()=>V_(),genMenu:()=>Iu(),bukaMenu:()=>ku(),shopMenu:()=>ix(),sitEat:n=>sx(n),pray:n=>ox(n),haircut:()=>ax(),sitChair:n=>rx(n),evCtx:()=>({rain:!!(X!=null&&X.s.rain),blackout:!(X!=null&&X.s.power),fuelHike:X?X.s.t-X.s.fuelHikeT<600:!1})};function Fu({who:n,text:e,sub:t,options:i}){return new Promise(s=>{Bt&&Bt.pick(-1),yt=!0,Ci=!0;const o=le("wheel");o.classList.remove("hidden");const a=i.length;o.innerHTML=`<div class="wh-center"><b>${n||""}</b><div>${e||""}</div>${t?`<small>${t}</small>`:""}</div>`+i.map((r,c)=>{const d=-Math.PI/2+c/a*Math.PI*2;return`<button class="wh-opt t-${(r.tag||"").toLowerCase().replace(/[^a-z]/g,"")}" style="--x:${Math.cos(d).toFixed(3)};--y:${Math.sin(d).toFixed(3)}" data-i="${c}" ${r.disabled?"disabled":""}><em>${Gs?"":c+1+" • "}${r.tag||""}</em>${r.label}</button>`}).join("");const l=r=>{Bt&&(Bt=null,o.classList.add("hidden"),o.innerHTML="",Ci=!1,yt=!1,Qe.click(),s(r>=0?i[r]:null))};Bt={opts:i,pick:r=>{var c;r>=0&&((c=i[r])!=null&&c.disabled)||l(r)}},o.querySelectorAll(".wh-opt").forEach(r=>r.addEventListener("pointerdown",c=>{c.preventDefault(),c.stopPropagation(),Bt==null||Bt.pick(+r.dataset.i)}))})}function ix(){const n=X.priceMul("Mama Nkechi"),e=t=>Math.round(t*n/50)*50;jt("Mama Nkechi Provisions 🛒",`"Wetin you wan buy, my dear?" ${n<1?"(She dey give you discount ❤️)":n>1?"(She dey price you high 😒)":""}`,[{label:"Pure water & gala to hawk 🧺",sub:"Stock up your tray",onClick:()=>setTimeout(()=>Dn.stockMenu(),50)},{label:"Agege bread 🍞",sub:"Carry & chop (+20 Belle)",price:J(e(500)),disabled:X.s.cash<e(500),onClick:()=>{X.spend(e(500)),dn.give("bread")}},{label:"Cold pure water 💧",sub:"Carry & drink",price:J(e(100)),disabled:X.s.cash<e(100),onClick:()=>{X.spend(e(100)),dn.give("water")}},{label:"Plastic bucket 🪣",price:J(e(800)),disabled:X.s.cash<e(800),onClick:()=>{X.spend(e(800)),dn.give("bucket")}},{label:"Data recharge 📶",sub:"Open GistMe Data app",onClick:()=>setTimeout(()=>Uc("data"),50)},{label:"Comot",close:!0}])}let yo=null;function Fc(n,e,t,i){yo={up:()=>{dt.userData.sitting=!1,yo=null,i==null||i()}},Re.copy(n),Kt=e,Ou({name:"sit",camDist:6.5,camPitch:.7,buttons:()=>[{label:"Stand up 🧍",key:"x",onClick:()=>No()}],update(){dt.userData.sitting||Cd()},onEnd(){yo==null||yo.up()}}),Cd(),t&&setTimeout(()=>{(Pe==null?void 0:Pe.name)==="sit"&&No()},t*1e3)}function Cd(){oi(dt),dt.position.copy(Re)}function sx(n){Fc(n,Math.PI,0),setTimeout(()=>ku(),300)}function ox(n){const e=X.s,t=X.day;Fc(n,Math.PI,3.5,()=>{}),setTimeout(()=>{X.advance(30),e.mood=Math.min(100,e.mood+8),e.churchDay!==t?(e.churchDay=t,X.addKarma(1,"prayer"),ft('Pastor: "Your breakthrough don land!" 🙏 +8 Mind +1 karma',"good")):ft("You pray small 🙏 +8 Mind","good"),tn()},1500)}function ax(){const n=Math.round(1500*X.priceMul("Barber Kola")/50)*50;if(X.s.cash<n)return ft(`Barbing na ${J(n)} — you no get am 😅`,"bad");Fu({who:"Barber Kola",text:"Which style you want?",sub:`${J(n)} • +10 Mind`,options:[...cr.filter(e=>e.id!==kt.hair).slice(0,5).map(e=>({id:e.id,tag:"Style",label:e.name})),{id:null,tag:"Comot",label:"No mind"}]}).then(e=>{!e||!e.id||(X.spend(n),Ho("✂️ Bzzzz... Barber dey work",700,()=>{kt={...kt,hair:e.id},Dc(kc,kt);const t=dt,i=t.parent;i.remove(t),dt=cn(kt),i.add(dt),Dn.attachTray(dt),X.s.mood=Math.min(100,X.s.mood+10),X.s.statsV3.haircuts++,X.addRel("Barber Kola",3)}).then(()=>ft(`Fresh ${e.label}! You fine die 😎 +10 Mind`,"good")))})}function rx(n){Fc(n.mesh.position.clone(),Kt,0,()=>{Re.addScaledVector(new P(Math.sin(Kt),0,Math.cos(Kt)),.7)}),X.s.mood=Math.min(100,X.s.mood+1)}const Bc=1400,sr=new Pt;sr.setAttribute("position",new yn(new Float32Array(Bc*6),3));const Co=new cu(sr,new So({color:12573183,transparent:!0,opacity:.55}));Co.frustumCulled=!1;nt.add(Co);const lx=Array.from({length:Bc},()=>[Math.random()*60-30,Math.random()*18,Math.random()*60-30]);let Fn=0;function cx(n){if(Fn+=((X.s.rain&&!Ke.cur?1:0)-Fn)*Math.min(1,n*1.5),Co.visible=Fn>.02,Co.material.opacity=.55*Fn,Co.visible){const e=sr.attributes.position.array;for(let t=0;t<Bc;t++){const i=lx[t];i[1]-=n*22,i[1]<0&&(i[1]+=18);const s=Re.x+i[0],o=i[1],a=Re.z+i[2];e.set([s,o,a,s+.05,o+.6,a],t*6)}sr.attributes.position.needsUpdate=!0,Qe.level("crowd",.12*Fn)}Fn>.02&&(ji.intensity*=1-.3*Fn,En.intensity*=1-.55*Fn,nt.background.lerp(k_.set("#7d8aa0"),.5*Fn),nt.fog.color.copy(nt.background),nt.fog.far*=1-.35*Fn),Ke.cur&&(nt.background.set("#2a2030"),nt.fog.color.set("#2a2030"),nt.fog.far=400,ji.intensity=Math.max(ji.intensity,.85))}let Ke=null,dn=null,Xs=null,Ro=null,cc=null,Po=null;function hx(){Xs=o_(vt),vt.social=Xs,cc=c_(vt),vt.rivals=cc,dn=i_(vt),vt.carry=dn,Ke=t_(vt),vt.interiors=Ke,Ro=a_(vt),vt.traffic=Ro,Po=S_(vt),vt.board=Po,Dn=Ky(vt),Ei=jy(vt),Fa=Jy(vt),ac=Zy(vt),vt.hustles=Dn,vt.events=Ei,vt.photo=ac,vt.football=Fa,Do=e_(vt),Dt.onDanfoNear=e=>{e.mesh.position.distanceTo(Re)<18&&Qe.horn()};const n=(e,t,i)=>Math.hypot(Re.x-e,Re.z-t)<i;rc.push(()=>Dn.kekeHot(),()=>Ei.deedHot(),()=>Dn.hawkHot(),()=>Fa.hot(),()=>n(-58,6.6,2.8)&&X.hour>=6&&X.hour<21?{label:"Work as Danfo conductor 🚌",act:Dn.startShift}:null),rc.unshift(()=>Ke.hot(),()=>Ke.doorHot(),()=>Ro.hot(),()=>Po.hot())}function Bu(){if(yt)return setTimeout(Bu,3e3);Qe.ring(),jt("📞 Incoming call: LapoPay Recovery",`"Hello ${X.s.name}, this na LapoPay. You owe <b>${J(X.s.loan)}</b> and you don pass due date. Pay today or our field agents go visit you. We fit even call your contacts o." 😬`,[{label:"Pay ₦1,000 now",disabled:X.s.cash<1e3,onClick:()=>{X.repay(1e3),ft('Agent: "Okay, we go extend am small." 3 more days',"good"),tn()}},{label:"Pay everything",disabled:X.s.cash<X.s.loan,onClick:()=>{X.repay(X.s.loan),tn()}},{label:"Abeg give me time 🙏",sub:"Dem go still come",close:!0},{label:"Hang up 📵",sub:"-1 mind",onClick:()=>{X.s.mood=Math.max(0,X.s.mood-1)}}],"warn")}function zu(){Qe.setMuted(!Qe.muted),le("muteBtn").textContent=Qe.muted?"🔇":"🔊"}le("muteBtn").addEventListener("click",()=>{Qe.init(),zu()});le("radioBtn").addEventListener("click",()=>{if(Qe.init(),!X.s.items.radio)return ft("Your radio don seize by LapoPay agents 😭","bad");Qe.setRadio(!Qe.radioOn),le("radioBtn").classList.toggle("on",Qe.radioOn),ft(Qe.radioOn?"📻 Wahala FM 104.0 — Afro vibes":"📻 Radio off")});addEventListener("pointerdown",()=>Qe.init(),{once:!1,passive:!0});let rl=0,ll=6,cl=4;function dx(n,e){if(!Qe.ctx)return;const t=Math.hypot(Re.x-$n.generator.x,Re.z-$n.generator.z);Qe.level("gen",X.genRunning?(X.s.quietGen?.15:1)*.25*Math.max(0,1-t/30):0);const i=Math.min(Math.hypot(Re.x+21,Re.z-15),Math.hypot(Re.x-40,Re.z-28)*1.3,Math.hypot(Re.x-18,Re.z+16)*1.4);Qe.level("crowd",.14*Math.max(0,1-i/26)*(X.isNight?.4:1)),(Pe==null?void 0:Pe.name)!=="keke"&&Qe.level("engine",(Pe==null?void 0:Pe.name)==="conductor"?.1:0),e>0&&dt.parent===nt&&(rl-=n*e*2.2,rl<=0&&(rl=1,Qe.step_())),ll-=n,cl-=n,ll<=0&&(ll=5+Math.random()*9,Dt.vehicles.some(s=>s.mesh.position.distanceTo(Re)<16)&&Qe.horn()),cl<=0&&(cl=6+Math.random()*8,Dt.vehicles.some(s=>s.type==="danfo"&&s.wait>0&&s.mesh.position.distanceTo(Re)<18)&&Qe.conductor()),Qe.radioOn&&!X.s.items.radio&&(Qe.setRadio(!1),le("radioBtn").classList.remove("on")),Qe.schedule()}Uu();function Hu(){vn.aspect=innerWidth/innerHeight,vn.fov=vn.aspect<1?62:50,vn.updateProjectionMatrix()}Hu();addEventListener("resize",()=>{di.setSize(innerWidth,innerHeight),Hu(),Zs==="creator"&&Pu()});window.wahala={get sim(){return X},start:(n=!0)=>oc(n),setHour(n){const e=X.s;e.t=Math.floor(e.t/1440)*1440+Math.round(n*60),X.acc=0},setPower(n){X.setPower(n),Gi=n?1:0},teleport(n,e,t=0){Ke&&n<200&&(Ke.cur=null),Re.set(n,0,e),Xt=t,vn.position.set(n+Math.sin(t)*9,7,e+Math.cos(t)*9)},get world(){return Dt},get pos(){return Re},openPhone:Uc,closePhone:ss,closeModal:zo,get G(){return vt},get H(){return Dn},get E(){return Ei},get F(){return Fa},get P(){return ac},get activity(){return(Pe==null?void 0:Pe.name)||null},get I(){return Ke},get C(){return dn},get S(){return Xs},get T(){return Ro},get R(){return cc},get B(){return Po},get wheelOpen(){return!!Bt},pickWheel(n){Bt==null||Bt.pick(n)},wheelOpts(){return(Bt==null?void 0:Bt.opts.map(n=>n.tag+": "+n.label))||null},get busy(){return yt},setCam(n,e,t){Xt=n,e&&(er=e),t&&(tr=t)}};
