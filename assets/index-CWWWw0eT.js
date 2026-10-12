(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ko="169",mu=0,Cc=1,gu=2,Jo=1,_u=2,Tn=3,Dn=0,Ne=1,Cn=2,Jn=0,Zi=1,Rc=2,Pc=3,Lc=4,vu=5,mi=100,xu=101,Mu=102,yu=103,Su=104,bu=200,Eu=201,wu=202,Tu=203,eo=204,no=205,Au=206,Cu=207,Ru=208,Pu=209,Lu=210,Iu=211,Du=212,Uu=213,Nu=214,io=0,so=1,ro=2,ss=3,ao=4,oo=5,co=6,lo=7,sh=0,Ou=1,Fu=2,Zn=0,Bu=1,zu=2,ku=3,Hu=4,Gu=5,Vu=6,Wu=7,rh=300,rs=301,as=302,ho=303,uo=304,na=306,kr=1e3,Rn=1001,fo=1002,Ue=1003,Xu=1004,Ys=1005,ln=1006,pa=1007,_i=1008,Un=1009,ah=1010,oh=1011,Bs=1012,Zo=1013,Mi=1014,gn=1015,ks=1016,jo=1017,Qo=1018,os=1020,ch=35902,lh=1021,hh=1022,un=1023,uh=1024,dh=1025,ji=1026,cs=1027,ia=1028,tc=1029,fh=1030,ec=1031,nc=1033,Cr=33776,Rr=33777,Pr=33778,Lr=33779,po=35840,mo=35841,go=35842,_o=35843,vo=36196,xo=37492,Mo=37496,yo=37808,So=37809,bo=37810,Eo=37811,wo=37812,To=37813,Ao=37814,Co=37815,Ro=37816,Po=37817,Lo=37818,Io=37819,Do=37820,Uo=37821,Ir=36492,No=36494,Oo=36495,ph=36283,Fo=36284,Bo=36285,zo=36286,Yu=3200,qu=3201,mh=0,$u=1,qn="",De="srgb",ei="srgb-linear",ic="display-p3",sa="display-p3-linear",Hr="linear",ce="srgb",Gr="rec709",Vr="p3",Ti=7680,Ic=519,Ku=512,Ju=513,Zu=514,gh=515,ju=516,Qu=517,td=518,ed=519,ko=35044,Dc="300 es",Pn=2e3,Wr=2001;class us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uc=1234567;const Ls=Math.PI/180,zs=180/Math.PI;function Ln(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function sc(i,t){return(i%t+t)%t}function nd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function id(i,t,e){return i!==t?(e-i)/(t-i):0}function Is(i,t,e){return(1-e)*i+e*t}function sd(i,t,e,n){return Is(i,t,1-Math.exp(-e*n))}function rd(i,t=1){return t-Math.abs(sc(i,t*2)-t)}function ad(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function od(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function cd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ld(i,t){return i+Math.random()*(t-i)}function hd(i){return i*(.5-Math.random())}function ud(i){i!==void 0&&(Uc=i);let t=Uc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dd(i){return i*Ls}function fd(i){return i*zs}function pd(i){return(i&i-1)===0&&i!==0}function md(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _d(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*f,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*f,o*l);break;case"ZXZ":i.set(c*f,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xr={DEG2RAD:Ls,RAD2DEG:zs,generateUUID:Ln,clamp:be,euclideanModulo:sc,mapLinear:nd,inverseLerp:id,lerp:Is,damp:sd,pingpong:rd,smoothstep:ad,smootherstep:od,randInt:cd,randFloat:ld,randFloatSpread:hd,seededRandom:ud,degToRad:dd,radToDeg:fd,isPowerOfTwo:pd,ceilPowerOfTwo:md,floorPowerOfTwo:gd,setQuaternionFromProperEuler:_d,normalize:ee,denormalize:hn};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,a,o,c,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],v=s[0],p=s[3],m=s[6],b=s[1],M=s[4],w=s[7],D=s[2],T=s[5],E=s[8];return r[0]=a*v+o*b+c*D,r[3]=a*p+o*M+c*T,r[6]=a*m+o*w+c*E,r[1]=l*v+h*b+f*D,r[4]=l*p+h*M+f*T,r[7]=l*m+h*w+f*E,r[2]=u*v+d*b+g*D,r[5]=u*p+d*M+g*T,r[8]=u*m+d*w+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,d=l*r-a*c,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new Ft;function _h(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vd(){const i=Yr("canvas");return i.style.display="block",i}const Nc={};function Dr(i){i in Nc||(Nc[i]=!0,console.warn(i))}function xd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Md(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Oc=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fc=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gs={[ei]:{transfer:Hr,primaries:Gr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[De]:{transfer:ce,primaries:Gr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[sa]:{transfer:Hr,primaries:Vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Fc),fromReference:i=>i.applyMatrix3(Oc)},[ic]:{transfer:ce,primaries:Vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Fc),fromReference:i=>i.applyMatrix3(Oc).convertLinearToSRGB()}},Sd=new Set([ei,sa]),Zt={enabled:!0,_workingColorSpace:ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Sd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=gs[t].toReference,s=gs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return gs[i].primaries},getTransfer:function(i){return i===qn?Hr:gs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(gs[t].luminanceCoefficients)}};function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ga(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class bd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=Yr("canvas")),Ai.width=t.width,Ai.height=t.height;const n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ed=0;class vh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Ln(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_a(s[a].image)):r.push(_a(s[a]))}else r=_a(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function _a(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?bd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wd=0;class Re extends us{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Rn,s=Rn,r=ln,a=_i,o=un,c=Un,l=Re.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Ln(),this.name="",this.source=new vh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kr:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kr:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=rh;Re.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,s=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,w=(d+1)/2,D=(m+1)/2,T=(h+u)/4,E=(f+v)/4,C=(g+p)/4;return M>w&&M>D?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=E/n):w>D?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=T/s,r=C/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=E/r,s=C/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-v)/b,this.z=(u-h)/b,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Td extends us{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Re(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new vh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends Td{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xh extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ad extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3];const u=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(f!==v||c!==u||l!==d||h!==g){let p=1-o;const m=c*u+l*d+h*g+f*v,b=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const D=Math.sqrt(M),T=Math.atan2(D,m*b);p=Math.sin(p*T)/D,o=Math.sin(o*T)/D}const w=o*b;if(c=c*p+u*w,l=l*p+d*w,h=h*p+g*w,f=f*p+v*w,p===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=D,l*=D,h*=D,f*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-o*d,t[e+2]=l*g+h*d+o*u-c*f,t[e+3]=h*g-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),u=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new R,Bc=new Hs;class bi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),$s.subVectors(this.max,_s),Ci.subVectors(t.a,_s),Ri.subVectors(t.b,_s),Pi.subVectors(t.c,_s),zn.subVectors(Ri,Ci),kn.subVectors(Pi,Ri),si.subVectors(Ci,Pi);let e=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-si.z,si.y,zn.z,0,-zn.x,kn.z,0,-kn.x,si.z,0,-si.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-si.y,si.x,0];return!xa(e,Ci,Ri,Pi,$s)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,Ci,Ri,Pi,$s))?!1:(Ks.crossVectors(zn,kn),e=[Ks.x,Ks.y,Ks.z],xa(e,Ci,Ri,Pi,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new R,new R,new R,new R,new R,new R,new R,new R],rn=new R,qs=new bi,Ci=new R,Ri=new R,Pi=new R,zn=new R,kn=new R,si=new R,_s=new R,$s=new R,Ks=new R,ri=new R;function xa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ri.fromArray(i,r);const o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),c=t.dot(ri),l=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Cd=new bi,vs=new R,Ma=new R;class Ei{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Cd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(Ma)),this.expandByPoint(vs.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new R,ya=new R,Js=new R,Hn=new R,Sa=new R,Zs=new R,ba=new R;class rc{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ya.copy(t).add(e).multiplyScalar(.5),Js.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(ya);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Js),o=Hn.dot(this.direction),c=-Hn.dot(Js),l=Hn.lengthSq(),h=Math.abs(1-a*a);let f,u,d,g;if(h>0)if(f=a*c-o,u=a*o-c,g=r*h,f>=0)if(u>=-g)if(u<=g){const v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ya).addScaledVector(Js,u),d}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){Sa.subVectors(e,t),Zs.subVectors(n,t),ba.crossVectors(Sa,Zs);let a=this.direction.dot(ba),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const c=o*this.direction.dot(Zs.crossVectors(Hn,Zs));if(c<0)return null;const l=o*this.direction.dot(Sa.cross(Hn));if(l<0||c+l>a)return null;const h=-o*Hn.dot(ba);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,s,r,a,o,c,l,h,f,u,d,g,v,p){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,u,d,g,v,p)}set(t,e,n,s,r,a,o,c,l,h,f,u,d,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),a=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,g=o*h,v=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-v*l,e[9]=-o*c,e[2]=v-u*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,g=l*h,v=l*f;e[0]=u+v*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=v+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,g=l*h,v=l*f;e[0]=u-v*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,d=a*f,g=o*h,v=o*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+v,e[1]=c*f,e[5]=v*l+u,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-v*f}else if(t.order==="XZY"){const u=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+v,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rd,t,Pd)}lookAt(t,e,n){const s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Gn.crossVectors(n,Ye),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Gn.crossVectors(n,Ye)),Gn.normalize(),js.crossVectors(Ye,Gn),s[0]=Gn.x,s[4]=js.x,s[8]=Ye.x,s[1]=Gn.y,s[5]=js.y,s[9]=Ye.y,s[2]=Gn.z,s[6]=js.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],b=n[3],M=n[7],w=n[11],D=n[15],T=s[0],E=s[4],C=s[8],F=s[12],_=s[1],S=s[5],N=s[9],k=s[13],W=s[2],K=s[6],H=s[10],J=s[14],V=s[3],ht=s[7],ut=s[11],Mt=s[15];return r[0]=a*T+o*_+c*W+l*V,r[4]=a*E+o*S+c*K+l*ht,r[8]=a*C+o*N+c*H+l*ut,r[12]=a*F+o*k+c*J+l*Mt,r[1]=h*T+f*_+u*W+d*V,r[5]=h*E+f*S+u*K+d*ht,r[9]=h*C+f*N+u*H+d*ut,r[13]=h*F+f*k+u*J+d*Mt,r[2]=g*T+v*_+p*W+m*V,r[6]=g*E+v*S+p*K+m*ht,r[10]=g*C+v*N+p*H+m*ut,r[14]=g*F+v*k+p*J+m*Mt,r[3]=b*T+M*_+w*W+D*V,r[7]=b*E+M*S+w*K+D*ht,r[11]=b*C+M*N+w*H+D*ut,r[15]=b*F+M*k+w*J+D*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*c*f-s*l*f-r*o*u+n*l*u+s*o*d-n*c*d)+v*(+e*c*d-e*l*u+r*a*u-s*a*d+s*l*h-r*c*h)+p*(+e*l*f-e*o*d-r*a*f+n*a*d+r*o*h-n*l*h)+m*(-s*o*h-e*c*f+e*o*u+s*a*f-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],v=t[13],p=t[14],m=t[15],b=f*p*l-v*u*l+v*c*d-o*p*d-f*c*m+o*u*m,M=g*u*l-h*p*l-g*c*d+a*p*d+h*c*m-a*u*m,w=h*v*l-g*f*l+g*o*d-a*v*d-h*o*m+a*f*m,D=g*f*c-h*v*c-g*o*u+a*v*u+h*o*p-a*f*p,T=e*b+n*M+s*w+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=b*E,t[1]=(v*u*r-f*p*r-v*s*d+n*p*d+f*s*m-n*u*m)*E,t[2]=(o*p*r-v*c*r+v*s*l-n*p*l-o*s*m+n*c*m)*E,t[3]=(f*c*r-o*u*r-f*s*l+n*u*l+o*s*d-n*c*d)*E,t[4]=M*E,t[5]=(h*p*r-g*u*r+g*s*d-e*p*d-h*s*m+e*u*m)*E,t[6]=(g*c*r-a*p*r-g*s*l+e*p*l+a*s*m-e*c*m)*E,t[7]=(a*u*r-h*c*r+h*s*l-e*u*l-a*s*d+e*c*d)*E,t[8]=w*E,t[9]=(g*f*r-h*v*r-g*n*d+e*v*d+h*n*m-e*f*m)*E,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*m+e*o*m)*E,t[11]=(h*o*r-a*f*r-h*n*l+e*f*l+a*n*d-e*o*d)*E,t[12]=D*E,t[13]=(h*v*s-g*f*s+g*n*u-e*v*u-h*n*p+e*f*p)*E,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*p-e*o*p)*E,t[15]=(a*f*s-h*o*s+h*n*c-e*f*c-a*n*u+e*o*u)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,d=r*h,g=r*f,v=a*h,p=a*f,m=o*f,b=c*l,M=c*h,w=c*f,D=n.x,T=n.y,E=n.z;return s[0]=(1-(v+m))*D,s[1]=(d+w)*D,s[2]=(g-M)*D,s[3]=0,s[4]=(d-w)*T,s[5]=(1-(u+m))*T,s[6]=(p+b)*T,s[7]=0,s[8]=(g+M)*E,s[9]=(p-b)*E,s[10]=(1-(u+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Li.set(s[0],s[1],s[2]).length();const a=Li.set(s[4],s[5],s[6]).length(),o=Li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);const l=1/r,h=1/a,f=1/o;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,e.setFromRotationMatrix(an),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Pn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let d,g;if(o===Pn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Wr)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Pn){const c=this.elements,l=1/(e-t),h=1/(n-s),f=1/(a-r),u=(e+t)*l,d=(n+s)*h;let g,v;if(o===Pn)g=(a+r)*f,v=-2*f;else if(o===Wr)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Li=new R,an=new jt,Rd=new R(0,0,0),Pd=new R(1,1,1),Gn=new R,js=new R,Ye=new R,zc=new jt,kc=new Hs;class Nn{constructor(t=0,e=0,n=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kc.setFromEuler(this),this.setFromQuaternion(kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Mh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ld=0;const Hc=new R,Ii=new Hs,Sn=new jt,Qs=new R,xs=new R,Id=new R,Dd=new Hs,Gc=new R(1,0,0),Vc=new R(0,1,0),Wc=new R(0,0,1),Xc={type:"added"},Ud={type:"removed"},Di={type:"childadded",child:null},Ea={type:"childremoved",child:null};class fe extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new R,e=new Nn,n=new Hs,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ft}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(Gc,t)}rotateY(t){return this.rotateOnAxis(Vc,t)}rotateZ(t){return this.rotateOnAxis(Wc,t)}translateOnAxis(t,e){return Hc.copy(t).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gc,t)}translateY(t){return this.translateOnAxis(Vc,t)}translateZ(t){return this.translateOnAxis(Wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(xs,Qs,this.up):Sn.lookAt(Qs,xs,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xc),Di.child=t,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ud),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xc),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}fe.DEFAULT_UP=new R(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new R,bn=new R,wa=new R,En=new R,Ui=new R,Ni=new R,Yc=new R,Ta=new R,Aa=new R,Ca=new R,Ra=new ie,Pa=new ie,La=new ie;class Qe{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),bn.subVectors(n,e),wa.subVectors(t,e);const a=on.dot(on),o=on.dot(bn),c=on.dot(wa),l=bn.dot(bn),h=bn.dot(wa),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(a,En.y),c.addScaledVector(o,En.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ra.setScalar(0),Pa.setScalar(0),La.setScalar(0),Ra.fromBufferAttribute(t,e),Pa.fromBufferAttribute(t,n),La.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ra,r.x),a.addScaledVector(Pa,r.y),a.addScaledVector(La,r.z),a}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),bn.subVectors(t,e),on.cross(bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),on.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ui.subVectors(s,n),Ni.subVectors(r,n),Ta.subVectors(t,n);const c=Ui.dot(Ta),l=Ni.dot(Ta);if(c<=0&&l<=0)return e.copy(n);Aa.subVectors(t,s);const h=Ui.dot(Aa),f=Ni.dot(Aa);if(h>=0&&f<=h)return e.copy(s);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ui,a);Ca.subVectors(t,r);const d=Ui.dot(Ca),g=Ni.dot(Ca);if(g>=0&&d<=g)return e.copy(r);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ni,o);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return Yc.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(Yc,o);const m=1/(p+v+u);return a=v*m,o=u*m,e.copy(n).addScaledVector(Ui,a).addScaledVector(Ni,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function Ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=sc(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ia(a,r,t+1/3),this.g=Ia(a,r,t),this.b=Ia(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Zt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(be(Ae.r*255,0,255))*65536+Math.round(be(Ae.g*255,0,255))*256+Math.round(be(Ae.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=De){Zt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,s=Ae.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(tr);const n=Is(Vn.h,tr.h,e),s=Is(Vn.s,tr.s,e),r=Is(Vn.l,tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Dt;Dt.NAMES=yh;let Nd=0;class ni extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Zi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=no,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==eo&&(n.blendSrc=this.blendSrc),this.blendDst!==no&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gs extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new R,er=new st;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ko,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ko&&(t.usage=this.usage),t}}class Sh extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bh extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Od=0;const Ze=new jt,Da=new fe,Oi=new R,qe=new bi,Ms=new bi,Se=new R;class xe extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_h(t)?bh:Sh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return Da.lookAt(t),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(qe.min,Ms.min),qe.expandByPoint(Se),Se.addVectors(qe.max,Ms.max),qe.expandByPoint(Se)):(qe.expandByPoint(Ms.min),qe.expandByPoint(Ms.max))}qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Se.fromBufferAttribute(o,l),c&&(Oi.fromBufferAttribute(t,l),Se.add(Oi)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new R,c[C]=new R;const l=new R,h=new R,f=new R,u=new st,d=new st,g=new st,v=new R,p=new R;function m(C,F,_){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,F),f.fromBufferAttribute(n,_),u.fromBufferAttribute(r,C),d.fromBufferAttribute(r,F),g.fromBufferAttribute(r,_),h.sub(l),f.sub(l),d.sub(u),g.sub(u);const S=1/(d.x*g.y-g.x*d.y);isFinite(S)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(S),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(S),o[C].add(v),o[F].add(v),o[_].add(v),c[C].add(p),c[F].add(p),c[_].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,F=b.length;C<F;++C){const _=b[C],S=_.start,N=_.count;for(let k=S,W=S+N;k<W;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new R,w=new R,D=new R,T=new R;function E(C){D.fromBufferAttribute(s,C),T.copy(D);const F=o[C];M.copy(F),M.sub(D.multiplyScalar(D.dot(F))).normalize(),w.crossVectors(T,F);const S=w.dot(c[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,S)}for(let C=0,F=b.length;C<F;++C){const _=b[C],S=_.start,N=_.count;for(let k=S,W=S+N;k<W;k+=3)E(t.getX(k+0)),E(t.getX(k+1)),E(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,f=new R;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let d=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let m=0;m<h;m++)u[g++]=l[d++]}return new tn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qc=new jt,ai=new rc,nr=new Ei,$c=new R,ir=new R,sr=new R,rr=new R,Ua=new R,ar=new R,Kc=new R,or=new R;class Bt extends fe{constructor(t=new xe,e=new Gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],f=r[c];h!==0&&(Ua.fromBufferAttribute(f,t),a?ar.addScaledVector(Ua,h):ar.addScaledVector(Ua.sub(e),h))}e.add(ar)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(nr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(nr,$c)===null||ai.origin.distanceToSquared($c)>(t.far-t.near)**2))&&(qc.copy(r).invert(),ai.copy(t.ray).applyMatrix4(qc),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=a[p.materialIndex],b=Math.max(p.start,d.start),M=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let w=b,D=M;w<D;w+=3){const T=o.getX(w),E=o.getX(w+1),C=o.getX(w+2);s=cr(this,m,t,n,l,h,f,T,E,C),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const b=o.getX(p),M=o.getX(p+1),w=o.getX(p+2);s=cr(this,a,t,n,l,h,f,b,M,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=a[p.materialIndex],b=Math.max(p.start,d.start),M=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let w=b,D=M;w<D;w+=3){const T=w,E=w+1,C=w+2;s=cr(this,m,t,n,l,h,f,T,E,C),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const b=p,M=p+1,w=p+2;s=cr(this,a,t,n,l,h,f,b,M,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Fd(i,t,e,n,s,r,a,o){let c;if(t.side===Ne?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Dn,o),c===null)return null;or.copy(o),or.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(or);return l<e.near||l>e.far?null:{distance:l,point:or.clone(),object:i}}function cr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ir),i.getVertexPosition(c,sr),i.getVertexPosition(l,rr);const h=Fd(i,t,e,n,ir,sr,rr,Kc);if(h){const f=new R;Qe.getBarycoord(Kc,ir,sr,rr,f),s&&(h.uv=Qe.getInterpolatedAttribute(s,o,c,l,f,new st)),r&&(h.uv1=Qe.getInterpolatedAttribute(r,o,c,l,f,new st)),a&&(h.normal=Qe.getInterpolatedAttribute(a,o,c,l,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new R,materialIndex:0};Qe.getNormal(ir,sr,rr,u.normal),h.face=u,h.barycoord=f}return h}class jn extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(f,2));function g(v,p,m,b,M,w,D,T,E,C,F){const _=w/E,S=D/C,N=w/2,k=D/2,W=T/2,K=E+1,H=C+1;let J=0,V=0;const ht=new R;for(let ut=0;ut<H;ut++){const Mt=ut*S-k;for(let qt=0;qt<K;qt++){const Qt=qt*_-N;ht[v]=Qt*b,ht[p]=Mt*M,ht[m]=W,l.push(ht.x,ht.y,ht.z),ht[v]=0,ht[p]=0,ht[m]=T>0?1:-1,h.push(ht.x,ht.y,ht.z),f.push(qt/E),f.push(1-ut/C),J+=1}}for(let ut=0;ut<C;ut++)for(let Mt=0;Mt<E;Mt++){const qt=u+Mt+K*ut,Qt=u+Mt+K*(ut+1),X=u+(Mt+1)+K*(ut+1),Q=u+(Mt+1)+K*ut;c.push(qt,Qt,Q),c.push(Qt,X,Q),V+=6}o.addGroup(d,V,F),d+=V,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Le(i){const t={};for(let e=0;e<i.length;e++){const n=ls(i[e]);for(const s in n)t[s]=n[s]}return t}function Bd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Eh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const zd={clone:ls,merge:Le};var kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=Hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Bd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wh extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new R,Jc=new st,Zc=new st;class He extends wh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Jc,Zc),e.subVectors(Zc,Jc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90,Bi=1;class Gd extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(Fi,Bi,t,e);s.layers=this.layers,this.add(s);const r=new He(Fi,Bi,t,e);r.layers=this.layers,this.add(r);const a=new He(Fi,Bi,t,e);a.layers=this.layers,this.add(a);const o=new He(Fi,Bi,t,e);o.layers=this.layers,this.add(o);const c=new He(Fi,Bi,t,e);c.layers=this.layers,this.add(c);const l=new He(Fi,Bi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Th extends Re{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:rs,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vd extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Th(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jn(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Jn});r.uniforms.tEquirect.value=e;const a=new Bt(s,r),o=e.minFilter;return e.minFilter===_i&&(e.minFilter=ln),new Gd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Na=new R,Wd=new R,Xd=new Ft;class ui{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Na.subVectors(n,e).cross(Wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xd.getNormalMatrix(t),s=this.coplanarPoint(Na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Ei,lr=new R;class ac{constructor(t=new ui,e=new ui,n=new ui,s=new ui,r=new ui,a=new ui){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],v=s[10],p=s[11],m=s[12],b=s[13],M=s[14],w=s[15];if(n[0].setComponents(c-r,u-l,p-d,w-m).normalize(),n[1].setComponents(c+r,u+l,p+d,w+m).normalize(),n[2].setComponents(c+a,u+h,p+g,w+b).normalize(),n[3].setComponents(c-a,u-h,p-g,w-b).normalize(),n[4].setComponents(c-o,u-f,p-v,w-M).normalize(),e===Pn)n[5].setComponents(c+o,u+f,p+v,w+M).normalize();else if(e===Wr)n[5].setComponents(o,f,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(lr.x=s.normal.x>0?t.max.x:t.min.x,lr.y=s.normal.y>0?t.max.y:t.min.y,lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ah(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yd(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const v=f[d];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class cn extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,d=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const b=m*u-a;for(let M=0;M<l;M++){const w=M*f-r;g.push(w,-b,0),v.push(0,0,1),p.push(M/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<o;b++){const M=b+l*m,w=b+l*(m+1),D=b+1+l*(m+1),T=b+1+l*m;d.push(M,w,T),d.push(w,D,T)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.widthSegments,t.heightSegments)}}var qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$d=`#ifdef USE_ALPHAHASH
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
#endif`,Kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
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
#endif`,tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ef=`#ifdef USE_BATCHING
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
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,of=`#ifdef USE_IRIDESCENCE
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
#endif`,cf=`#ifdef USE_BUMPMAP
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_f=`#define PI 3.141592653589793
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
} // validated`,vf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xf=`vec3 transformedNormal = objectNormal;
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
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`
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
}`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,If=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,Of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
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
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xf=`PhysicalMaterial material;
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
#endif`,Yf=`struct PhysicalMaterial {
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
}`,qf=`
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
#endif`,$f=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ip=`float getShadowMask() {
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
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Op=`#ifdef USE_SKINNING
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
#endif`,Fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
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
}`,tm=`#if DEPTH_PACKING == 3200
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
}`,em=`#define DISTANCE
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
}`,nm=`#define DISTANCE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,cm=`uniform vec3 diffuse;
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
}`,lm=`#define LAMBERT
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
}`,hm=`#define LAMBERT
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
}`,um=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,fm=`#define NORMAL
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
}`,pm=`#define NORMAL
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
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
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
}`,_m=`#define STANDARD
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
}`,vm=`#define STANDARD
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
}`,xm=`#define TOON
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
}`,Mm=`#define TOON
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
}`,ym=`uniform float size;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,Em=`uniform vec3 color;
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
}`,wm=`uniform float rotation;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:qd,alphahash_pars_fragment:$d,alphamap_fragment:Kd,alphamap_pars_fragment:Jd,alphatest_fragment:Zd,alphatest_pars_fragment:jd,aomap_fragment:Qd,aomap_pars_fragment:tf,batching_pars_vertex:ef,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:rf,bsdfs:af,iridescence_fragment:of,bumpmap_pars_fragment:cf,clipping_planes_fragment:lf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:df,color_fragment:ff,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:_f,cube_uv_reflection_fragment:vf,defaultnormal_vertex:xf,displacementmap_pars_vertex:Mf,displacementmap_vertex:yf,emissivemap_fragment:Sf,emissivemap_pars_fragment:bf,colorspace_fragment:Ef,colorspace_pars_fragment:wf,envmap_fragment:Tf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Cf,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:kf,envmap_vertex:Pf,fog_vertex:Lf,fog_pars_vertex:If,fog_fragment:Df,fog_pars_fragment:Uf,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Of,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:Bf,lights_pars_begin:zf,lights_toon_fragment:Hf,lights_toon_pars_fragment:Gf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Xf,lights_physical_pars_fragment:Yf,lights_fragment_begin:qf,lights_fragment_maps:$f,lights_fragment_end:Kf,logdepthbuf_fragment:Jf,logdepthbuf_pars_fragment:Zf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Qf,map_fragment:tp,map_pars_fragment:ep,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:ap,morphcolor_vertex:op,morphnormal_vertex:cp,morphtarget_pars_vertex:lp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:vp,clearcoat_pars_fragment:xp,iridescence_pars_fragment:Mp,opaque_fragment:yp,packing:Sp,premultiplied_alpha_fragment:bp,project_vertex:Ep,dithering_fragment:wp,dithering_pars_fragment:Tp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Cp,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Lp,shadowmask_pars_fragment:Ip,skinbase_vertex:Dp,skinning_pars_vertex:Up,skinning_vertex:Np,skinnormal_vertex:Op,specularmap_fragment:Fp,specularmap_pars_fragment:Bp,tonemapping_fragment:zp,tonemapping_pars_fragment:kp,transmission_fragment:Hp,transmission_pars_fragment:Gp,uv_pars_fragment:Vp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:Yp,background_vert:qp,background_frag:$p,backgroundCube_vert:Kp,backgroundCube_frag:Jp,cube_vert:Zp,cube_frag:jp,depth_vert:Qp,depth_frag:tm,distanceRGBA_vert:em,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:am,meshbasic_vert:om,meshbasic_frag:cm,meshlambert_vert:lm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:_m,meshphysical_frag:vm,meshtoon_vert:xm,meshtoon_frag:Mm,points_vert:ym,points_frag:Sm,shadow_vert:bm,shadow_frag:Em,sprite_vert:wm,sprite_frag:Tm},nt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},pn={basic:{uniforms:Le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Le([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Le([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Le([nt.points,nt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Le([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Le([nt.common,nt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Le([nt.sprite,nt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Le([nt.common,nt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Le([nt.lights,nt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};pn.physical={uniforms:Le([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const hr={r:0,b:0,g:0},ci=new Nn,Am=new jt;function Cm(i,t,e,n,s,r,a){const o=new Dt(0);let c=r===!0?0:1,l,h,f=null,u=0,d=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function v(b){let M=!1;const w=g(b);w===null?m(o,c):w&&w.isColor&&(m(w,1),M=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,M){const w=g(M);w&&(w.isCubeTexture||w.mapping===na)?(h===void 0&&(h=new Bt(new jn(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:ls(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ci.copy(M.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(ci)),h.material.toneMapped=Zt.getTransfer(w.colorSpace)!==ce,(f!==w||u!==w.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=w,u=w.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Bt(new cn(2,2),new Qn({name:"BackgroundMaterial",uniforms:ls(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(w.colorSpace)!==ce,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||u!==w.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=w,u=w.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,M){b.getRGB(hr,Eh(i)),n.buffers.color.setClear(hr.r,hr.g,hr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),c=M,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(o,c)},render:v,addToRenderList:p}}function Rm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(_,S,N,k,W){let K=!1;const H=f(k,N,S);r!==H&&(r=H,l(r.object)),K=d(_,k,N,W),K&&g(_,k,N,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,w(_,S,N,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function f(_,S,N){const k=N.wireframe===!0;let W=n[_.id];W===void 0&&(W={},n[_.id]=W);let K=W[S.id];K===void 0&&(K={},W[S.id]=K);let H=K[k];return H===void 0&&(H=u(c()),K[k]=H),H}function u(_){const S=[],N=[],k=[];for(let W=0;W<e;W++)S[W]=0,N[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:N,attributeDivisors:k,object:_,attributes:{},index:null}}function d(_,S,N,k){const W=r.attributes,K=S.attributes;let H=0;const J=N.getAttributes();for(const V in J)if(J[V].location>=0){const ut=W[V];let Mt=K[V];if(Mt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(Mt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(Mt=_.instanceColor)),ut===void 0||ut.attribute!==Mt||Mt&&ut.data!==Mt.data)return!0;H++}return r.attributesNum!==H||r.index!==k}function g(_,S,N,k){const W={},K=S.attributes;let H=0;const J=N.getAttributes();for(const V in J)if(J[V].location>=0){let ut=K[V];ut===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(ut=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(ut=_.instanceColor));const Mt={};Mt.attribute=ut,ut&&ut.data&&(Mt.data=ut.data),W[V]=Mt,H++}r.attributes=W,r.attributesNum=H,r.index=k}function v(){const _=r.newAttributes;for(let S=0,N=_.length;S<N;S++)_[S]=0}function p(_){m(_,0)}function m(_,S){const N=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;N[_]=1,k[_]===0&&(i.enableVertexAttribArray(_),k[_]=1),W[_]!==S&&(i.vertexAttribDivisor(_,S),W[_]=S)}function b(){const _=r.newAttributes,S=r.enabledAttributes;for(let N=0,k=S.length;N<k;N++)S[N]!==_[N]&&(i.disableVertexAttribArray(N),S[N]=0)}function M(_,S,N,k,W,K,H){H===!0?i.vertexAttribIPointer(_,S,N,W,K):i.vertexAttribPointer(_,S,N,k,W,K)}function w(_,S,N,k){v();const W=k.attributes,K=N.getAttributes(),H=S.defaultAttributeValues;for(const J in K){const V=K[J];if(V.location>=0){let ht=W[J];if(ht===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor)),ht!==void 0){const ut=ht.normalized,Mt=ht.itemSize,qt=t.get(ht);if(qt===void 0)continue;const Qt=qt.buffer,X=qt.type,Q=qt.bytesPerElement,vt=X===i.INT||X===i.UNSIGNED_INT||ht.gpuType===Zo;if(ht.isInterleavedBufferAttribute){const dt=ht.data,Ut=dt.stride,At=ht.offset;if(dt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<V.locationSize;Ht++)m(V.location+Ht,dt.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ht=0;Ht<V.locationSize;Ht++)p(V.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Ht=0;Ht<V.locationSize;Ht++)M(V.location+Ht,Mt/V.locationSize,X,ut,Ut*Q,(At+Mt/V.locationSize*Ht)*Q,vt)}else{if(ht.isInstancedBufferAttribute){for(let dt=0;dt<V.locationSize;dt++)m(V.location+dt,ht.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let dt=0;dt<V.locationSize;dt++)p(V.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let dt=0;dt<V.locationSize;dt++)M(V.location+dt,Mt/V.locationSize,X,ut,Mt*Q,Mt/V.locationSize*dt*Q,vt)}}else if(H!==void 0){const ut=H[J];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(V.location,ut);break;case 3:i.vertexAttrib3fv(V.location,ut);break;case 4:i.vertexAttrib4fv(V.location,ut);break;default:i.vertexAttrib1fv(V.location,ut)}}}}b()}function D(){C();for(const _ in n){const S=n[_];for(const N in S){const k=S[N];for(const W in k)h(k[W].object),delete k[W];delete S[N]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const S=n[_.id];for(const N in S){const k=S[N];for(const W in k)h(k[W].object),delete k[W];delete S[N]}delete n[_.id]}function E(_){for(const S in n){const N=n[S];if(N[_.id]===void 0)continue;const k=N[_.id];for(const W in k)h(k[W].object),delete k[W];delete N[_.id]}}function C(){F(),a=!0,r!==s&&(r=s,l(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:F,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function Pm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function o(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,n,1)}function c(l,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v];for(let v=0;v<u.length;v++)e.update(g,n,u[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Lm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==un&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Un&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==gn&&!C)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:D,maxSamples:T}}function Im(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ui,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const b=r?0:n,M=b*4;let w=m.clippingState||null;c.value=w,w=h(g,u,M,d);for(let D=0;D!==M;++D)w[D]=e[D];m.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const m=d+v*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,w=d;M!==v;++M,w+=4)a.copy(f[M]).applyMatrix4(b,o),a.normal.toArray(p,w),p[w+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Dm(i){let t=new WeakMap;function e(a,o){return o===ho?a.mapping=rs:o===uo&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ho||o===uo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Vd(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ch extends wh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $i=4,jc=[.125,.215,.35,.446,.526,.582],gi=20,Oa=new Ch,Qc=new Dt;let Fa=null,Ba=0,za=0,ka=!1;const di=(1+Math.sqrt(5))/2,zi=1/di,tl=[new R(-di,zi,0),new R(di,zi,0),new R(-zi,0,di),new R(zi,0,di),new R(0,di,-zi),new R(0,di,zi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class el{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Fa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa,Ba,za),this._renderer.xr.enabled=ka,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:ks,format:un,colorSpace:ei,depthBuffer:!1},s=nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Um(r)),this._blurMaterial=Nm(r,t,e)}return s}_compileMaterial(t){const e=new Bt(this._lodPlanes[0],t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,n,s){const o=new He(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Qc),h.toneMapping=Zn,h.autoClear=!1;const d=new Gs({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new Bt(new jn,d);let v=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,v=!0):(d.color.copy(Qc),v=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):b===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const M=this._cubeSize;ur(s,b*M,m>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===rs||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;ur(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=tl[(s-r-1)%tl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Bt(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*gi-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):gi;p>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gi}`);const m=[];let b=0;for(let E=0;E<gi;++E){const C=E/v,F=Math.exp(-C*C/2);m.push(F),E===0?b+=F:E<p&&(b+=2*F)}for(let E=0;E<m.length;E++)m[E]=m[E]/b;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const w=this._sizeLods[s],D=3*w*(s>M-$i?s-M+$i:0),T=4*(this._cubeSize-w);ur(e,D,T,3*w,2*w),c.setRenderTarget(e),c.render(f,Oa)}}function Um(i){const t=[],e=[],n=[];let s=i;const r=i-$i+1+jc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-$i?c=jc[a-i+$i-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,v=3,p=2,m=1,b=new Float32Array(v*g*d),M=new Float32Array(p*g*d),w=new Float32Array(m*g*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,C=T>2?0:-1,F=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];b.set(F,v*g*T),M.set(u,p*g*T);const _=[T,T,T,T,T,T];w.set(_,m*g*T)}const D=new xe;D.setAttribute("position",new tn(b,v)),D.setAttribute("uv",new tn(M,p)),D.setAttribute("faceIndex",new tn(w,m)),t.push(D),s>$i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nl(i,t,e){const n=new yi(i,t,e);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Nm(i,t,e){const n=new Float32Array(gi),s=new R(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function il(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function sl(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function Om(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ho||c===uo,h=c===rs||c===as;if(l||h){let f=t.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new el(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new el(i)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Fm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Dr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bm(i,t,e,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const v=d[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],i.ARRAY_BUFFER)}}function l(f){const u=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const b=d.array;v=d.version;for(let M=0,w=b.length;M<w;M+=3){const D=b[M+0],T=b[M+1],E=b[M+2];u.push(D,T,T,E,E,D)}}else if(g!==void 0){const b=g.array;v=g.version;for(let M=0,w=b.length/3-1;M<w;M+=3){const D=M+0,T=M+1,E=M+2;u.push(D,T,T,E,E,D)}}else return;const p=new(_h(u)?bh:Sh)(u,1);p.version=v;const m=r.get(f);m&&t.remove(m),r.set(f,p)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function zm(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function l(u,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,u*a,g),e.update(d,n,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function f(u,d,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)l(u[m]/a,d[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,v,0,g);let m=0;for(let b=0;b<g;b++)m+=d[b];for(let b=0;b<v.length;b++)e.update(m,n,v[b])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function km(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hm(i,t,e){const n=new WeakMap,s=new ie;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let _=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var d=_;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),v===!0&&(w=2),p===!0&&(w=3);let D=o.attributes.position.count*w,T=1;D>t.maxTextureSize&&(T=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const E=new Float32Array(D*T*4*f),C=new xh(E,D,T,f);C.type=gn,C.needsUpdate=!0;const F=w*4;for(let S=0;S<f;S++){const N=m[S],k=b[S],W=M[S],K=D*T*4*S;for(let H=0;H<N.count;H++){const J=H*F;g===!0&&(s.fromBufferAttribute(N,H),E[K+J+0]=s.x,E[K+J+1]=s.y,E[K+J+2]=s.z,E[K+J+3]=0),v===!0&&(s.fromBufferAttribute(k,H),E[K+J+4]=s.x,E[K+J+5]=s.y,E[K+J+6]=s.z,E[K+J+7]=0),p===!0&&(s.fromBufferAttribute(W,H),E[K+J+8]=s.x,E[K+J+9]=s.y,E[K+J+10]=s.z,E[K+J+11]=W.itemSize===4?s.w:1)}}u={count:f,texture:C,size:new st(D,T)},n.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Gm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Rh extends Re{constructor(t,e,n,s,r,a,o,c,l,h=ji){if(h!==ji&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=Mi),n===void 0&&h===cs&&(n=os),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ue,this.minFilter=c!==void 0?c:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ph=new Re,rl=new Rh(1,1),Lh=new xh,Ih=new Ad,Dh=new Th,al=[],ol=[],cl=new Float32Array(16),ll=new Float32Array(9),hl=new Float32Array(4);function ds(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=al[s];if(r===void 0&&(r=new Float32Array(s),al[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ra(i,t){let e=ol[t];e===void 0&&(e=new Int32Array(t),ol[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;hl.set(n),i.uniformMatrix2fv(this.addr,!1,hl),ye(e,n)}}function $m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),ye(e,n)}}function Km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;cl.set(n),i.uniformMatrix4fv(this.addr,!1,cl),ye(e,n)}}function Jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function t0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function s0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rl.compareFunction=gh,r=rl):r=Ph,e.setTexture2D(t||r,s)}function r0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ih,s)}function a0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dh,s)}function o0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Lh,s)}function c0(i){switch(i){case 5126:return Vm;case 35664:return Wm;case 35665:return Xm;case 35666:return Ym;case 35674:return qm;case 35675:return $m;case 35676:return Km;case 5124:case 35670:return Jm;case 35667:case 35671:return Zm;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return t0;case 36294:return e0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return o0}}function l0(i,t){i.uniform1fv(this.addr,t)}function h0(i,t){const e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function u0(i,t){const e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function d0(i,t){const e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function f0(i,t){const e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function p0(i,t){const e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function m0(i,t){const e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function g0(i,t){i.uniform1iv(this.addr,t)}function _0(i,t){i.uniform2iv(this.addr,t)}function v0(i,t){i.uniform3iv(this.addr,t)}function x0(i,t){i.uniform4iv(this.addr,t)}function M0(i,t){i.uniform1uiv(this.addr,t)}function y0(i,t){i.uniform2uiv(this.addr,t)}function S0(i,t){i.uniform3uiv(this.addr,t)}function b0(i,t){i.uniform4uiv(this.addr,t)}function E0(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ph,r[a])}function w0(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ih,r[a])}function T0(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Dh,r[a])}function A0(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Lh,r[a])}function C0(i){switch(i){case 5126:return l0;case 35664:return h0;case 35665:return u0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return x0;case 5125:return M0;case 36294:return y0;case 36295:return S0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return A0}}class R0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=c0(e.type)}}class P0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=C0(e.type)}}class L0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function ul(i,t){i.seq.push(t),i.map[t.id]=t}function I0(i,t,e){const n=i.name,s=n.length;for(Ha.lastIndex=0;;){const r=Ha.exec(n),a=Ha.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ul(e,l===void 0?new R0(o,i,t):new P0(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new L0(o),ul(e,f)),e=f}}}class Ur{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);I0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function dl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const D0=37297;let U0=0;function N0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function O0(i){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i);let n;switch(t===e?n="":t===Vr&&e===Gr?n="LinearDisplayP3ToLinearSRGB":t===Gr&&e===Vr&&(n="LinearSRGBToLinearDisplayP3"),i){case ei:case sa:return[n,"LinearTransferOETF"];case De:case ic:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function fl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+N0(i.getShaderSource(t),a)}else return s}function F0(i,t){const e=O0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function B0(i,t){let e;switch(t){case Bu:e="Linear";break;case zu:e="Reinhard";break;case ku:e="Cineon";break;case Hu:e="ACESFilmic";break;case Vu:e="AgX";break;case Wu:e="Neutral";break;case Gu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const dr=new R;function z0(){Zt.getLuminanceCoefficients(dr);const i=dr.x.toFixed(4),t=dr.y.toFixed(4),e=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function H0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function G0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ps(i){return i!==""}function pl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ml(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(i){return i.replace(V0,X0)}const W0=new Map;function X0(i,t){let e=Ot[t];if(e===void 0){const n=W0.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ho(e)}const Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(i){return i.replace(Y0,q0)}function q0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _l(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_u?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function K0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rs:case as:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function J0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function Z0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sh:t="ENVMAP_BLENDING_MULTIPLY";break;case Ou:t="ENVMAP_BLENDING_MIX";break;case Fu:t="ENVMAP_BLENDING_ADD";break}return t}function j0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Q0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=$0(e),l=K0(e),h=J0(e),f=Z0(e),u=j0(e),d=k0(e),g=H0(r),v=s.createProgram();let p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),m.length>0&&(m+=`
`)):(p=[_l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),m=[_l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Zn?B0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,F0("linearToOutputTexel",e.outputColorSpace),z0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),a=Ho(a),a=pl(a,e),a=ml(a,e),o=Ho(o),o=pl(o,e),o=ml(o,e),a=gl(a),o=gl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=b+p+a,w=b+m+o,D=dl(s,s.VERTEX_SHADER,M),T=dl(s,s.FRAGMENT_SHADER,w);s.attachShader(v,D),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(S){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(T).trim();let K=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,D,T);else{const J=fl(s,D,"vertex"),V=fl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+J+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||W==="")&&(H=!1);H&&(S.diagnostics={runnable:K,programLog:N,vertexShader:{log:k,prefix:p},fragmentShader:{log:W,prefix:m}})}s.deleteShader(D),s.deleteShader(T),C=new Ur(s,v),F=G0(s,v)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let F;this.getAttributes=function(){return F===void 0&&E(this),F};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,D0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=T,this}let tg=0;class eg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ng(t),e.set(t,n)),n}}class ng{constructor(t){this.id=tg++,this.code=t,this.usedTimes=0}}function ig(i,t,e,n,s,r,a){const o=new Mh,c=new eg,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,S,N,k,W){const K=k.fog,H=W.geometry,J=_.isMeshStandardMaterial?k.environment:null,V=(_.isMeshStandardMaterial?e:t).get(_.envMap||J),ht=V&&V.mapping===na?V.image.height:null,ut=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const Mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,qt=Mt!==void 0?Mt.length:0;let Qt=0;H.morphAttributes.position!==void 0&&(Qt=1),H.morphAttributes.normal!==void 0&&(Qt=2),H.morphAttributes.color!==void 0&&(Qt=3);let X,Q,vt,dt;if(ut){const Fe=pn[ut];X=Fe.vertexShader,Q=Fe.fragmentShader}else X=_.vertexShader,Q=_.fragmentShader,c.update(_),vt=c.getVertexShaderID(_),dt=c.getFragmentShaderID(_);const Ut=i.getRenderTarget(),At=W.isInstancedMesh===!0,Ht=W.isBatchedMesh===!0,ne=!!_.map,Gt=!!_.matcap,P=!!V,Ve=!!_.aoMap,zt=!!_.lightMap,Wt=!!_.bumpMap,Rt=!!_.normalMap,ae=!!_.displacementMap,It=!!_.emissiveMap,A=!!_.metalnessMap,x=!!_.roughnessMap,O=_.anisotropy>0,q=_.clearcoat>0,Z=_.dispersion>0,Y=_.iridescence>0,yt=_.sheen>0,it=_.transmission>0,ft=O&&!!_.anisotropyMap,Xt=q&&!!_.clearcoatMap,tt=q&&!!_.clearcoatNormalMap,pt=q&&!!_.clearcoatRoughnessMap,Pt=Y&&!!_.iridescenceMap,Lt=Y&&!!_.iridescenceThicknessMap,mt=yt&&!!_.sheenColorMap,kt=yt&&!!_.sheenRoughnessMap,Nt=!!_.specularMap,re=!!_.specularColorMap,L=!!_.specularIntensityMap,ot=it&&!!_.transmissionMap,G=it&&!!_.thicknessMap,$=!!_.gradientMap,rt=!!_.alphaMap,ct=_.alphaTest>0,Vt=!!_.alphaHash,pe=!!_.extensions;let Oe=Zn;_.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const $t={shaderID:ut,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:Q,defines:_.defines,customVertexShaderID:vt,customFragmentShaderID:dt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ht,batchingColor:Ht&&W._colorsTexture!==null,instancing:At,instancingColor:At&&W.instanceColor!==null,instancingMorph:At&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ut===null?i.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:ei,alphaToCoverage:!!_.alphaToCoverage,map:ne,matcap:Gt,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:ht,aoMap:Ve,lightMap:zt,bumpMap:Wt,normalMap:Rt,displacementMap:d&&ae,emissiveMap:It,normalMapObjectSpace:Rt&&_.normalMapType===$u,normalMapTangentSpace:Rt&&_.normalMapType===mh,metalnessMap:A,roughnessMap:x,anisotropy:O,anisotropyMap:ft,clearcoat:q,clearcoatMap:Xt,clearcoatNormalMap:tt,clearcoatRoughnessMap:pt,dispersion:Z,iridescence:Y,iridescenceMap:Pt,iridescenceThicknessMap:Lt,sheen:yt,sheenColorMap:mt,sheenRoughnessMap:kt,specularMap:Nt,specularColorMap:re,specularIntensityMap:L,transmission:it,transmissionMap:ot,thicknessMap:G,gradientMap:$,opaque:_.transparent===!1&&_.blending===Zi&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:ct,alphaHash:Vt,combine:_.combine,mapUv:ne&&p(_.map.channel),aoMapUv:Ve&&p(_.aoMap.channel),lightMapUv:zt&&p(_.lightMap.channel),bumpMapUv:Wt&&p(_.bumpMap.channel),normalMapUv:Rt&&p(_.normalMap.channel),displacementMapUv:ae&&p(_.displacementMap.channel),emissiveMapUv:It&&p(_.emissiveMap.channel),metalnessMapUv:A&&p(_.metalnessMap.channel),roughnessMapUv:x&&p(_.roughnessMap.channel),anisotropyMapUv:ft&&p(_.anisotropyMap.channel),clearcoatMapUv:Xt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:tt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:kt&&p(_.sheenRoughnessMap.channel),specularMapUv:Nt&&p(_.specularMap.channel),specularColorMapUv:re&&p(_.specularColorMap.channel),specularIntensityMapUv:L&&p(_.specularIntensityMap.channel),transmissionMapUv:ot&&p(_.transmissionMap.channel),thicknessMapUv:G&&p(_.thicknessMap.channel),alphaMapUv:rt&&p(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Rt||O),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!H.attributes.uv&&(ne||rt),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:Qt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ne&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Cn,flipSided:_.side===Ne,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&_.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function b(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)S.push(N),S.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(M(S,_),w(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function M(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function w(_,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),_.push(o.mask)}function D(_){const S=v[_.type];let N;if(S){const k=pn[S];N=zd.clone(k.uniforms)}else N=_.uniforms;return N}function T(_,S){let N;for(let k=0,W=h.length;k<W;k++){const K=h[k];if(K.cacheKey===S){N=K,++N.usedTimes;break}}return N===void 0&&(N=new Q0(i,S,_,r),h.push(N)),N}function E(_){if(--_.usedTimes===0){const S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function C(_){c.remove(_)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:D,acquireProgram:T,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:F}}function sg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,u,d,g,v,p){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},i[t]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=v,m.group=p),t++,m}function o(f,u,d,g,v,p){const m=a(f,u,d,g,v,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function c(f,u,d,g,v,p){const m=a(f,u,d,g,v,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function l(f,u){e.length>1&&e.sort(f||rg),n.length>1&&n.sort(u||vl),s.length>1&&s.sort(u||vl)}function h(){for(let f=t,u=i.length;f<u;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function ag(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new xl,i.set(n,[a])):s>=r.length?(a=new xl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function og(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Dt};break;case"SpotLight":e={position:new R,direction:new R,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function cg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let lg=0;function hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ug(i){const t=new og,e=cg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new jt,a=new jt;function o(l){let h=0,f=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,b=0,M=0,w=0,D=0,T=0,E=0;l.sort(hg);for(let F=0,_=l.length;F<_;F++){const S=l[F],N=S.color,k=S.intensity,W=S.distance,K=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=N.r*k,f+=N.g*k,u+=N.b*k;else if(S.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(S.sh.coefficients[H],k);E++}else if(S.isDirectionalLight){const H=t.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const J=S.shadow,V=e.get(S);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=S.shadow.matrix,b++}n.directional[d]=H,d++}else if(S.isSpotLight){const H=t.get(S);H.position.setFromMatrixPosition(S.matrixWorld),H.color.copy(N).multiplyScalar(k),H.distance=W,H.coneCos=Math.cos(S.angle),H.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),H.decay=S.decay,n.spot[v]=H;const J=S.shadow;if(S.map&&(n.spotLightMap[D]=S.map,D++,J.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[v]=J.matrix,S.castShadow){const V=e.get(S);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=K,w++}v++}else if(S.isRectAreaLight){const H=t.get(S);H.color.copy(N).multiplyScalar(k),H.halfWidth.set(S.width*.5,0,0),H.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=H,p++}else if(S.isPointLight){const H=t.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),H.distance=S.distance,H.decay=S.decay,S.castShadow){const J=S.shadow,V=e.get(S);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=S.shadow.matrix,M++}n.point[g]=H,g++}else if(S.isHemisphereLight){const H=t.get(S);H.skyColor.copy(S.color).multiplyScalar(k),H.groundColor.copy(S.groundColor).multiplyScalar(k),n.hemi[m]=H,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==b||C.numPointShadows!==M||C.numSpotShadows!==w||C.numSpotMaps!==D||C.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,C.directionalLength=d,C.pointLength=g,C.spotLength=v,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=b,C.numPointShadows=M,C.numSpotShadows=w,C.numSpotMaps=D,C.numLightProbes=E,n.version=lg++)}function c(l,h){let f=0,u=0,d=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){const M=l[m];if(M.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(M.isSpotLight){const w=n.spot[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const w=n.point[u];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),u++}else if(M.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),v++}}}return{setup:o,setupView:c,state:n}}function Ml(i){const t=new ug(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function dg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ml(i),t.set(s,[o])):r>=a.length?(o=new Ml(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class fg extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pg extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gg=`uniform sampler2D shadow_pass;
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
}`;function _g(i,t,e){let n=new ac;const s=new st,r=new st,a=new ie,o=new fg({depthPacking:qu}),c=new pg,l={},h=e.maxTextureSize,f={[Dn]:Ne,[Ne]:Dn,[Cn]:Cn},u=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:mg,fragmentShader:gg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let m=this.type;this.render=function(T,E,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const F=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Jn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=m!==Tn&&this.type===Tn,W=m===Tn&&this.type!==Tn;for(let K=0,H=T.length;K<H;K++){const J=T[K],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ht=V.getFrameExtents();if(s.multiply(ht),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,V.mapSize.y=r.y)),V.map===null||k===!0||W===!0){const Mt=this.type!==Tn?{minFilter:Ue,magFilter:Ue}:{};V.map!==null&&V.map.dispose(),V.map=new yi(s.x,s.y,Mt),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ut=V.getViewportCount();for(let Mt=0;Mt<ut;Mt++){const qt=V.getViewport(Mt);a.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),N.viewport(a),V.updateMatrices(J,Mt),n=V.getFrustum(),w(E,C,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===Tn&&b(V,C),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(F,_,S)};function b(T,E){const C=t.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yi(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,C,u,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,C,d,v,null)}function M(T,E,C,F){let _=null;const S=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)_=S;else if(_=C.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=_.uuid,k=E.uuid;let W=l[N];W===void 0&&(W={},l[N]=W);let K=W[k];K===void 0&&(K=_.clone(),W[k]=K,E.addEventListener("dispose",D)),_=K}if(_.visible=E.visible,_.wireframe=E.wireframe,F===Tn?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:f[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const N=i.properties.get(_);N.light=C}return _}function w(T,E,C,F,_){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Tn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const k=t.update(T),W=T.material;if(Array.isArray(W)){const K=k.groups;for(let H=0,J=K.length;H<J;H++){const V=K[H],ht=W[V.materialIndex];if(ht&&ht.visible){const ut=M(T,ht,F,_);T.onBeforeShadow(i,T,E,C,k,ut,V),i.renderBufferDirect(C,null,k,ut,T,V),T.onAfterShadow(i,T,E,C,k,ut,V)}}}else if(W.visible){const K=M(T,W,F,_);T.onBeforeShadow(i,T,E,C,k,K,null),i.renderBufferDirect(C,null,k,K,T,null),T.onAfterShadow(i,T,E,C,k,K,null)}}const N=T.children;for(let k=0,W=N.length;k<W;k++)w(N[k],E,C,F,_)}function D(T){T.target.removeEventListener("dispose",D);for(const C in l){const F=l[C],_=T.target.uuid;_ in F&&(F[_].dispose(),delete F[_])}}}const vg={[io]:so,[ro]:co,[ao]:lo,[ss]:oo,[so]:io,[co]:ro,[lo]:ao,[oo]:ss};function xg(i){function t(){let L=!1;const ot=new ie;let G=null;const $=new ie(0,0,0,0);return{setMask:function(rt){G!==rt&&!L&&(i.colorMask(rt,rt,rt,rt),G=rt)},setLocked:function(rt){L=rt},setClear:function(rt,ct,Vt,pe,Oe){Oe===!0&&(rt*=pe,ct*=pe,Vt*=pe),ot.set(rt,ct,Vt,pe),$.equals(ot)===!1&&(i.clearColor(rt,ct,Vt,pe),$.copy(ot))},reset:function(){L=!1,G=null,$.set(-1,0,0,0)}}}function e(){let L=!1,ot=!1,G=null,$=null,rt=null;return{setReversed:function(ct){ot=ct},setTest:function(ct){ct?vt(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(ct){G!==ct&&!L&&(i.depthMask(ct),G=ct)},setFunc:function(ct){if(ot&&(ct=vg[ct]),$!==ct){switch(ct){case io:i.depthFunc(i.NEVER);break;case so:i.depthFunc(i.ALWAYS);break;case ro:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case ao:i.depthFunc(i.EQUAL);break;case oo:i.depthFunc(i.GEQUAL);break;case co:i.depthFunc(i.GREATER);break;case lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ct}},setLocked:function(ct){L=ct},setClear:function(ct){rt!==ct&&(i.clearDepth(ct),rt=ct)},reset:function(){L=!1,G=null,$=null,rt=null}}}function n(){let L=!1,ot=null,G=null,$=null,rt=null,ct=null,Vt=null,pe=null,Oe=null;return{setTest:function($t){L||($t?vt(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function($t){ot!==$t&&!L&&(i.stencilMask($t),ot=$t)},setFunc:function($t,Fe,xn){(G!==$t||$!==Fe||rt!==xn)&&(i.stencilFunc($t,Fe,xn),G=$t,$=Fe,rt=xn)},setOp:function($t,Fe,xn){(ct!==$t||Vt!==Fe||pe!==xn)&&(i.stencilOp($t,Fe,xn),ct=$t,Vt=Fe,pe=xn)},setLocked:function($t){L=$t},setClear:function($t){Oe!==$t&&(i.clearStencil($t),Oe=$t)},reset:function(){L=!1,ot=null,G=null,$=null,rt=null,ct=null,Vt=null,pe=null,Oe=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},f=new WeakMap,u=[],d=null,g=!1,v=null,p=null,m=null,b=null,M=null,w=null,D=null,T=new Dt(0,0,0),E=0,C=!1,F=null,_=null,S=null,N=null,k=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),K=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),K=H>=2);let V=null,ht={};const ut=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),qt=new ie().fromArray(ut),Qt=new ie().fromArray(Mt);function X(L,ot,G,$){const rt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(L,ct),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<G;Vt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(ot+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return ct}const Q={};Q[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),vt(i.DEPTH_TEST),r.setFunc(ss),zt(!1),Wt(Cc),vt(i.CULL_FACE),P(Jn);function vt(L){l[L]!==!0&&(i.enable(L),l[L]=!0)}function dt(L){l[L]!==!1&&(i.disable(L),l[L]=!1)}function Ut(L,ot){return h[L]!==ot?(i.bindFramebuffer(L,ot),h[L]=ot,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function At(L,ot){let G=u,$=!1;if(L){G=f.get(ot),G===void 0&&(G=[],f.set(ot,G));const rt=L.textures;if(G.length!==rt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Vt=rt.length;ct<Vt;ct++)G[ct]=i.COLOR_ATTACHMENT0+ct;G.length=rt.length,$=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,$=!0);$&&i.drawBuffers(G)}function Ht(L){return d!==L?(i.useProgram(L),d=L,!0):!1}const ne={[mi]:i.FUNC_ADD,[xu]:i.FUNC_SUBTRACT,[Mu]:i.FUNC_REVERSE_SUBTRACT};ne[yu]=i.MIN,ne[Su]=i.MAX;const Gt={[bu]:i.ZERO,[Eu]:i.ONE,[wu]:i.SRC_COLOR,[eo]:i.SRC_ALPHA,[Lu]:i.SRC_ALPHA_SATURATE,[Ru]:i.DST_COLOR,[Au]:i.DST_ALPHA,[Tu]:i.ONE_MINUS_SRC_COLOR,[no]:i.ONE_MINUS_SRC_ALPHA,[Pu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Iu]:i.CONSTANT_COLOR,[Du]:i.ONE_MINUS_CONSTANT_COLOR,[Uu]:i.CONSTANT_ALPHA,[Nu]:i.ONE_MINUS_CONSTANT_ALPHA};function P(L,ot,G,$,rt,ct,Vt,pe,Oe,$t){if(L===Jn){g===!0&&(dt(i.BLEND),g=!1);return}if(g===!1&&(vt(i.BLEND),g=!0),L!==vu){if(L!==v||$t!==C){if((p!==mi||M!==mi)&&(i.blendEquation(i.FUNC_ADD),p=mi,M=mi),$t)switch(L){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rc:i.blendFunc(i.ONE,i.ONE);break;case Pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,b=null,w=null,D=null,T.set(0,0,0),E=0,v=L,C=$t}return}rt=rt||ot,ct=ct||G,Vt=Vt||$,(ot!==p||rt!==M)&&(i.blendEquationSeparate(ne[ot],ne[rt]),p=ot,M=rt),(G!==m||$!==b||ct!==w||Vt!==D)&&(i.blendFuncSeparate(Gt[G],Gt[$],Gt[ct],Gt[Vt]),m=G,b=$,w=ct,D=Vt),(pe.equals(T)===!1||Oe!==E)&&(i.blendColor(pe.r,pe.g,pe.b,Oe),T.copy(pe),E=Oe),v=L,C=!1}function Ve(L,ot){L.side===Cn?dt(i.CULL_FACE):vt(i.CULL_FACE);let G=L.side===Ne;ot&&(G=!G),zt(G),L.blending===Zi&&L.transparent===!1?P(Jn):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const $=L.stencilWrite;a.setTest($),$&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ae(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(L){F!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),F=L)}function Wt(L){L!==mu?(vt(i.CULL_FACE),L!==_&&(L===Cc?i.cullFace(i.BACK):L===gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),_=L}function Rt(L){L!==S&&(K&&i.lineWidth(L),S=L)}function ae(L,ot,G){L?(vt(i.POLYGON_OFFSET_FILL),(N!==ot||k!==G)&&(i.polygonOffset(ot,G),N=ot,k=G)):dt(i.POLYGON_OFFSET_FILL)}function It(L){L?vt(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+W-1),V!==L&&(i.activeTexture(L),V=L)}function x(L,ot,G){G===void 0&&(V===null?G=i.TEXTURE0+W-1:G=V);let $=ht[G];$===void 0&&($={type:void 0,texture:void 0},ht[G]=$),($.type!==L||$.texture!==ot)&&(V!==G&&(i.activeTexture(G),V=G),i.bindTexture(L,ot||Q[L]),$.type=L,$.texture=ot)}function O(){const L=ht[V];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){qt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),qt.copy(L))}function mt(L){Qt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Qt.copy(L))}function kt(L,ot){let G=c.get(ot);G===void 0&&(G=new WeakMap,c.set(ot,G));let $=G.get(L);$===void 0&&($=i.getUniformBlockIndex(ot,L.name),G.set(L,$))}function Nt(L,ot){const $=c.get(ot).get(L);o.get(ot)!==$&&(i.uniformBlockBinding(ot,$,L.__bindingPointIndex),o.set(ot,$))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},V=null,ht={},h={},f=new WeakMap,u=[],d=null,g=!1,v=null,p=null,m=null,b=null,M=null,w=null,D=null,T=new Dt(0,0,0),E=0,C=!1,F=null,_=null,S=null,N=null,k=null,qt.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:vt,disable:dt,bindFramebuffer:Ut,drawBuffers:At,useProgram:Ht,setBlending:P,setMaterial:Ve,setFlipSided:zt,setCullFace:Wt,setLineWidth:Rt,setPolygonOffset:ae,setScissorTest:It,activeTexture:A,bindTexture:x,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:Z,texImage2D:pt,texImage3D:Pt,updateUBOMapping:kt,uniformBlockBinding:Nt,texStorage2D:Xt,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:yt,compressedTexSubImage2D:it,compressedTexSubImage3D:ft,scissor:Lt,viewport:mt,reset:re}}function yl(i,t,e,n){const s=Mg(n);switch(e){case lh:return i*t;case uh:return i*t;case dh:return i*t*2;case ia:return i*t/s.components*s.byteLength;case tc:return i*t/s.components*s.byteLength;case fh:return i*t*2/s.components*s.byteLength;case ec:return i*t*2/s.components*s.byteLength;case hh:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case nc:return i*t*4/s.components*s.byteLength;case Cr:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:case _o:return Math.max(i,16)*Math.max(t,8)/4;case po:case go:return Math.max(i,8)*Math.max(t,8)/2;case vo:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case To:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Do:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ir:case No:case Oo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ph:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Bo:case zo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mg(i){switch(i){case Un:case ah:return{byteLength:1,components:1};case Bs:case oh:case ks:return{byteLength:2,components:1};case jo:case Qo:return{byteLength:2,components:4};case Mi:case Zo:case gn:return{byteLength:4,components:1};case ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function yg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new st,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return d?new OffscreenCanvas(A,x):Yr("canvas")}function v(A,x,O){let q=1;const Z=It(A);if((Z.width>O||Z.height>O)&&(q=O/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){const Y=Math.floor(q*Z.width),yt=Math.floor(q*Z.height);f===void 0&&(f=g(Y,yt));const it=x?g(Y,yt):f;return it.width=Y,it.height=yt,it.getContext("2d").drawImage(A,0,0,Y,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+yt+")."),it}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Ue&&A.minFilter!==ln}function m(A){i.generateMipmap(A)}function b(A,x,O,q,Z=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=x;if(x===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),x===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){const yt=Z?Hr:Zt.getTransfer(q);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=yt===ce?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(A,x){let O;return A?x===null||x===Mi||x===os?O=i.DEPTH24_STENCIL8:x===gn?O=i.DEPTH32F_STENCIL8:x===Bs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Mi||x===os?O=i.DEPTH_COMPONENT24:x===gn?O=i.DEPTH_COMPONENT32F:x===Bs&&(O=i.DEPTH_COMPONENT16),O}function w(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ue&&A.minFilter!==ln?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function D(A){const x=A.target;x.removeEventListener("dispose",D),E(x),x.isVideoTexture&&h.delete(x)}function T(A){const x=A.target;x.removeEventListener("dispose",T),F(x)}function E(A){const x=n.get(A);if(x.__webglInit===void 0)return;const O=A.source,q=u.get(O);if(q){const Z=q[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(A),Object.keys(q).length===0&&u.delete(O)}n.remove(A)}function C(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const O=A.source,q=u.get(O);delete q[x.__cacheKey],a.memory.textures--}function F(A){const x=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let Z=0;Z<x.__webglFramebuffer[q].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[q][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=A.textures;for(let q=0,Z=O.length;q<Z;q++){const Y=n.get(O[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(A)}let _=0;function S(){_=0}function N(){const A=_;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),_+=1,A}function k(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function W(A,x){const O=n.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qt(O,A,x);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function K(A,x){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Qt(O,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function H(A,x){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Qt(O,A,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function J(A,x){const O=n.get(A);if(A.version>0&&O.__version!==A.version){X(O,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const V={[kr]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[fo]:i.MIRRORED_REPEAT},ht={[Ue]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},ut={[Ku]:i.NEVER,[ed]:i.ALWAYS,[Ju]:i.LESS,[gh]:i.LEQUAL,[Zu]:i.EQUAL,[td]:i.GEQUAL,[ju]:i.GREATER,[Qu]:i.NOTEQUAL};function Mt(A,x){if(x.type===gn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ln||x.magFilter===pa||x.magFilter===Ys||x.magFilter===_i||x.minFilter===ln||x.minFilter===pa||x.minFilter===Ys||x.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,V[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,V[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,V[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ht[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ut[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ue||x.minFilter!==Ys&&x.minFilter!==_i||x.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function qt(A,x){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",D));const q=x.source;let Z=u.get(q);Z===void 0&&(Z={},u.set(q,Z));const Y=k(x);if(Y!==A.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[Y].usedTimes++;const yt=Z[A.__cacheKey];yt!==void 0&&(Z[A.__cacheKey].usedTimes--,yt.usedTimes===0&&C(x)),A.__cacheKey=Y,A.__webglTexture=Z[Y].texture}return O}function Qt(A,x,O){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const Z=qt(A,x),Y=x.source;e.bindTexture(q,A.__webglTexture,i.TEXTURE0+O);const yt=n.get(Y);if(Y.version!==yt.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);const it=Zt.getPrimaries(Zt.workingColorSpace),ft=x.colorSpace===qn?null:Zt.getPrimaries(x.colorSpace),Xt=x.colorSpace===qn||it===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let tt=v(x.image,!1,s.maxTextureSize);tt=ae(x,tt);const pt=r.convert(x.format,x.colorSpace),Pt=r.convert(x.type);let Lt=b(x.internalFormat,pt,Pt,x.colorSpace,x.isVideoTexture);Mt(q,x);let mt;const kt=x.mipmaps,Nt=x.isVideoTexture!==!0,re=yt.__version===void 0||Z===!0,L=Y.dataReady,ot=w(x,tt);if(x.isDepthTexture)Lt=M(x.format===cs,x.type),re&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Lt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,tt.width,tt.height,0,pt,Pt,null));else if(x.isDataTexture)if(kt.length>0){Nt&&re&&e.texStorage2D(i.TEXTURE_2D,ot,Lt,kt[0].width,kt[0].height);for(let G=0,$=kt.length;G<$;G++)mt=kt[G],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Pt,mt.data):e.texImage2D(i.TEXTURE_2D,G,Lt,mt.width,mt.height,0,pt,Pt,mt.data);x.generateMipmaps=!1}else Nt?(re&&e.texStorage2D(i.TEXTURE_2D,ot,Lt,tt.width,tt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,Pt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,tt.width,tt.height,0,pt,Pt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Nt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Lt,kt[0].width,kt[0].height,tt.depth);for(let G=0,$=kt.length;G<$;G++)if(mt=kt[G],x.format!==un)if(pt!==null)if(Nt){if(L)if(x.layerUpdates.size>0){const rt=yl(mt.width,mt.height,x.format,x.type);for(const ct of x.layerUpdates){const Vt=mt.data.subarray(ct*rt/mt.data.BYTES_PER_ELEMENT,(ct+1)*rt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ct,mt.width,mt.height,1,pt,Vt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Lt,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,tt.depth,pt,Pt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Lt,mt.width,mt.height,tt.depth,0,pt,Pt,mt.data)}else{Nt&&re&&e.texStorage2D(i.TEXTURE_2D,ot,Lt,kt[0].width,kt[0].height);for(let G=0,$=kt.length;G<$;G++)mt=kt[G],x.format!==un?pt!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Lt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Pt,mt.data):e.texImage2D(i.TEXTURE_2D,G,Lt,mt.width,mt.height,0,pt,Pt,mt.data)}else if(x.isDataArrayTexture)if(Nt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Lt,tt.width,tt.height,tt.depth),L)if(x.layerUpdates.size>0){const G=yl(tt.width,tt.height,x.format,x.type);for(const $ of x.layerUpdates){const rt=tt.data.subarray($*G/tt.data.BYTES_PER_ELEMENT,($+1)*G/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,pt,Pt,rt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,Pt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,tt.width,tt.height,tt.depth,0,pt,Pt,tt.data);else if(x.isData3DTexture)Nt?(re&&e.texStorage3D(i.TEXTURE_3D,ot,Lt,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,Pt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,tt.width,tt.height,tt.depth,0,pt,Pt,tt.data);else if(x.isFramebufferTexture){if(re)if(Nt)e.texStorage2D(i.TEXTURE_2D,ot,Lt,tt.width,tt.height);else{let G=tt.width,$=tt.height;for(let rt=0;rt<ot;rt++)e.texImage2D(i.TEXTURE_2D,rt,Lt,G,$,0,pt,Pt,null),G>>=1,$>>=1}}else if(kt.length>0){if(Nt&&re){const G=It(kt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Lt,G.width,G.height)}for(let G=0,$=kt.length;G<$;G++)mt=kt[G],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,pt,Pt,mt):e.texImage2D(i.TEXTURE_2D,G,Lt,pt,Pt,mt);x.generateMipmaps=!1}else if(Nt){if(re){const G=It(tt);e.texStorage2D(i.TEXTURE_2D,ot,Lt,G.width,G.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Pt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,pt,Pt,tt);p(x)&&m(q),yt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function X(A,x,O){if(x.image.length!==6)return;const q=qt(A,x),Z=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const Y=n.get(Z);if(Z.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+O);const yt=Zt.getPrimaries(Zt.workingColorSpace),it=x.colorSpace===qn?null:Zt.getPrimaries(x.colorSpace),ft=x.colorSpace===qn||yt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Xt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let $=0;$<6;$++)!Xt&&!tt?pt[$]=v(x.image[$],!0,s.maxCubemapSize):pt[$]=tt?x.image[$].image:x.image[$],pt[$]=ae(x,pt[$]);const Pt=pt[0],Lt=r.convert(x.format,x.colorSpace),mt=r.convert(x.type),kt=b(x.internalFormat,Lt,mt,x.colorSpace),Nt=x.isVideoTexture!==!0,re=Y.__version===void 0||q===!0,L=Z.dataReady;let ot=w(x,Pt);Mt(i.TEXTURE_CUBE_MAP,x);let G;if(Xt){Nt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,kt,Pt.width,Pt.height);for(let $=0;$<6;$++){G=pt[$].mipmaps;for(let rt=0;rt<G.length;rt++){const ct=G[rt];x.format!==un?Lt!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt,0,0,ct.width,ct.height,Lt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt,kt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt,0,0,ct.width,ct.height,Lt,mt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt,kt,ct.width,ct.height,0,Lt,mt,ct.data)}}}else{if(G=x.mipmaps,Nt&&re){G.length>0&&ot++;const $=It(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,kt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pt[$].width,pt[$].height,Lt,mt,pt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,kt,pt[$].width,pt[$].height,0,Lt,mt,pt[$].data);for(let rt=0;rt<G.length;rt++){const Vt=G[rt].image[$].image;Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt+1,0,0,Vt.width,Vt.height,Lt,mt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt+1,kt,Vt.width,Vt.height,0,Lt,mt,Vt.data)}}else{Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Lt,mt,pt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,kt,Lt,mt,pt[$]);for(let rt=0;rt<G.length;rt++){const ct=G[rt];Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt+1,0,0,Lt,mt,ct.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt+1,kt,Lt,mt,ct.image[$])}}}p(x)&&m(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Q(A,x,O,q,Z,Y){const yt=r.convert(O.format,O.colorSpace),it=r.convert(O.type),ft=b(O.internalFormat,yt,it,O.colorSpace);if(!n.get(x).__hasExternalTextures){const tt=Math.max(1,x.width>>Y),pt=Math.max(1,x.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,ft,tt,pt,x.depth,0,yt,it,null):e.texImage2D(Z,Y,ft,tt,pt,0,yt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Wt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Z,n.get(O).__webglTexture,0,zt(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Z,n.get(O).__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(A,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const q=x.depthTexture,Z=q&&q.isDepthTexture?q.type:null,Y=M(x.stencilBuffer,Z),yt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=zt(x);Wt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,Y,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,A)}else{const q=x.textures;for(let Z=0;Z<q.length;Z++){const Y=q[Z],yt=r.convert(Y.format,Y.colorSpace),it=r.convert(Y.type),ft=b(Y.internalFormat,yt,it,Y.colorSpace),Xt=zt(x);O&&Wt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,ft,x.width,x.height):Wt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ft,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const q=n.get(x.depthTexture).__webglTexture,Z=zt(x);if(x.depthTexture.format===ji)Wt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(x.depthTexture.format===cs)Wt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ut(A){const x=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=q}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");dt(x.__webglFramebuffer,A)}else if(O){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),vt(x.__webglDepthbuffer[q],A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),vt(x.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(A,x,O){const q=n.get(A);x!==void 0&&Q(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ut(A)}function Ht(A){const x=A.texture,O=n.get(A),q=n.get(x);A.addEventListener("dispose",T);const Z=A.textures,Y=A.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),Y){O.__webglFramebuffer=[];for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[it]=[];for(let ft=0;ft<x.mipmaps.length;ft++)O.__webglFramebuffer[it][ft]=i.createFramebuffer()}else O.__webglFramebuffer[it]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let it=0;it<x.mipmaps.length;it++)O.__webglFramebuffer[it]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(yt)for(let it=0,ft=Z.length;it<ft;it++){const Xt=n.get(Z[it]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Wt(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let it=0;it<Z.length;it++){const ft=Z[it];O.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[it]);const Xt=r.convert(ft.format,ft.colorSpace),tt=r.convert(ft.type),pt=b(ft.internalFormat,Xt,tt,ft.colorSpace,A.isXRRenderTarget===!0),Pt=zt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,O.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,x);for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)Q(O.__webglFramebuffer[it][ft],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ft);else Q(O.__webglFramebuffer[it],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(x)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let it=0,ft=Z.length;it<ft;it++){const Xt=Z[it],tt=n.get(Xt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Mt(i.TEXTURE_2D,Xt),Q(O.__webglFramebuffer,A,Xt,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,0),p(Xt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(it=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,q.__webglTexture),Mt(it,x),x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)Q(O.__webglFramebuffer[ft],A,x,i.COLOR_ATTACHMENT0,it,ft);else Q(O.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,it,0);p(x)&&m(it),e.unbindTexture()}A.depthBuffer&&Ut(A)}function ne(A){const x=A.textures;for(let O=0,q=x.length;O<q;O++){const Z=x[O];if(p(Z)){const Y=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,yt=n.get(Z).__webglTexture;e.bindTexture(Y,yt),m(Y),e.unbindTexture()}}}const Gt=[],P=[];function Ve(A){if(A.samples>0){if(Wt(A)===!1){const x=A.textures,O=A.width,q=A.height;let Z=i.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(A),it=x.length>1;if(it)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ft]);const Xt=n.get(x[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,Z,i.NEAREST),c===!0&&(Gt.length=0,P.length=0,Gt.push(i.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Gt.push(Y),P.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ft]);const Xt=n.get(x[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function zt(A){return Math.min(s.maxSamples,A.samples)}function Wt(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Rt(A){const x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function ae(A,x){const O=A.colorSpace,q=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==ei&&O!==qn&&(Zt.getTransfer(O)===ce?(q!==un||Z!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function It(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=S,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=At,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Wt}function Sg(i,t){function e(n,s=qn){let r;const a=Zt.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ah)return i.BYTE;if(n===oh)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Zo)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===ks)return i.HALF_FLOAT;if(n===lh)return i.ALPHA;if(n===hh)return i.RGB;if(n===un)return i.RGBA;if(n===uh)return i.LUMINANCE;if(n===dh)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===ia)return i.RED;if(n===tc)return i.RED_INTEGER;if(n===fh)return i.RG;if(n===ec)return i.RG_INTEGER;if(n===nc)return i.RGBA_INTEGER;if(n===Cr||n===Rr||n===Pr||n===Lr)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===po||n===mo||n===go||n===_o)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vo||n===xo||n===Mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vo||n===xo)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yo||n===So||n===bo||n===Eo||n===wo||n===To||n===Ao||n===Co||n===Ro||n===Po||n===Lo||n===Io||n===Do||n===Uo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===So)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===To)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ao)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Co)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ro)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Po)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Io)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Do)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ir||n===No||n===Oo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ir)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ph||n===Fo||n===Bo||n===zo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ir)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class bg extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _e extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eg={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Eg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
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

}`;class Ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Re,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Qn({vertexShader:wg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bt(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cg extends us{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null;const v=new Ag,p=e.getContextAttributes();let m=null,b=null;const M=[],w=[],D=new st;let T=null;const E=new He;E.layers.enable(1),E.viewport=new ie;const C=new He;C.layers.enable(2),C.viewport=new ie;const F=[E,C],_=new bg;_.layers.enable(1),_.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=M[X];return Q===void 0&&(Q=new Ga,M[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=M[X];return Q===void 0&&(Q=new Ga,M[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=M[X];return Q===void 0&&(Q=new Ga,M[X]=Q),Q.getHandSpace()};function k(X){const Q=w.indexOf(X.inputSource);if(Q===-1)return;const vt=M[Q];vt!==void 0&&(vt.update(X.inputSource,X.frame,l||a),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",K);for(let X=0;X<M.length;X++){const Q=w[X];Q!==null&&(w[X]=null,M[X].disconnect(Q))}S=null,N=null,v.reset(),t.setRenderTarget(m),d=null,u=null,f=null,s=null,b=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new yi(d.framebufferWidth,d.framebufferHeight,{format:un,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,vt=null,dt=null;p.depth&&(dt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?cs:ji,vt=p.stencil?os:Mi);const Ut={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new yi(u.textureWidth,u.textureHeight,{format:un,type:Un,depthTexture:new Rh(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(X){for(let Q=0;Q<X.removed.length;Q++){const vt=X.removed[Q],dt=w.indexOf(vt);dt>=0&&(w[dt]=null,M[dt].disconnect(vt))}for(let Q=0;Q<X.added.length;Q++){const vt=X.added[Q];let dt=w.indexOf(vt);if(dt===-1){for(let At=0;At<M.length;At++)if(At>=w.length){w.push(vt),dt=At;break}else if(w[At]===null){w[At]=vt,dt=At;break}if(dt===-1)break}const Ut=M[dt];Ut&&Ut.connect(vt)}}const H=new R,J=new R;function V(X,Q,vt){H.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(vt.matrixWorld);const dt=H.distanceTo(J),Ut=Q.projectionMatrix.elements,At=vt.projectionMatrix.elements,Ht=Ut[14]/(Ut[10]-1),ne=Ut[14]/(Ut[10]+1),Gt=(Ut[9]+1)/Ut[5],P=(Ut[9]-1)/Ut[5],Ve=(Ut[8]-1)/Ut[0],zt=(At[8]+1)/At[0],Wt=Ht*Ve,Rt=Ht*zt,ae=dt/(-Ve+zt),It=ae*-Ve;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(It),X.translateZ(ae),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ut[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const A=Ht+ae,x=ne+ae,O=Wt-It,q=Rt+(dt-It),Z=Gt*ne/x*A,Y=P*ne/x*A;X.projectionMatrix.makePerspective(O,q,Z,Y,A,x),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ht(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,vt=X.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(vt=v.depthFar)),_.near=C.near=E.near=Q,_.far=C.far=E.far=vt,(S!==_.near||N!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,N=_.far);const dt=X.parent,Ut=_.cameras;ht(_,dt);for(let At=0;At<Ut.length;At++)ht(Ut[At],dt);Ut.length===2?V(_,E,C):_.projectionMatrix.copy(E.projectionMatrix),ut(X,_,dt)};function ut(X,Q,vt){vt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=zs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(X){c=X,u!==null&&(u.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let Mt=null;function qt(X,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){const vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let dt=!1;vt.length!==_.cameras.length&&(_.cameras.length=0,dt=!0);for(let At=0;At<vt.length;At++){const Ht=vt[At];let ne=null;if(d!==null)ne=d.getViewport(Ht);else{const P=f.getViewSubImage(u,Ht);ne=P.viewport,At===0&&(t.setRenderTargetTextures(b,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(b))}let Gt=F[At];Gt===void 0&&(Gt=new He,Gt.layers.enable(At),Gt.viewport=new ie,F[At]=Gt),Gt.matrix.fromArray(Ht.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ht.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ne.x,ne.y,ne.width,ne.height),At===0&&(_.matrix.copy(Gt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),dt===!0&&_.cameras.push(Gt)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const At=f.getDepthInformation(vt[0]);At&&At.isValid&&At.texture&&v.init(t,At,s.renderState)}}for(let vt=0;vt<M.length;vt++){const dt=w[vt],Ut=M[vt];dt!==null&&Ut!==void 0&&Ut.update(dt,Q,l||a)}Mt&&Mt(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Qt=new Ah;Qt.setAnimationLoop(qt),this.setAnimationLoop=function(X){Mt=X},this.dispose=function(){}}}const li=new Nn,Rg=new jt;function Pg(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Eh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,M,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,b,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ne&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ne&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=t.get(m),M=b.envMap,w=b.envMapRotation;M&&(p.envMap.value=M,li.copy(w),li.x*=-1,li.y*=-1,li.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),p.envMapRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(li)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,b,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ne&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){const w=M.program;n.uniformBlockBinding(b,w)}function l(b,M){let w=s[b.id];w===void 0&&(g(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",p));const D=M.program;n.updateUBOMapping(b,D);const T=t.render.frame;r[b.id]!==T&&(u(b),r[b.id]=T)}function h(b){const M=f();b.__bindingPointIndex=M;const w=i.createBuffer(),D=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const M=s[b.id],w=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,E=w.length;T<E;T++){const C=Array.isArray(w[T])?w[T]:[w[T]];for(let F=0,_=C.length;F<_;F++){const S=C[F];if(d(S,T,F,D)===!0){const N=S.__offset,k=Array.isArray(S.value)?S.value:[S.value];let W=0;for(let K=0;K<k.length;K++){const H=k[K],J=v(H);typeof H=="number"||typeof H=="boolean"?(S.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+W,S.__data)):H.isMatrix3?(S.__data[0]=H.elements[0],S.__data[1]=H.elements[1],S.__data[2]=H.elements[2],S.__data[3]=0,S.__data[4]=H.elements[3],S.__data[5]=H.elements[4],S.__data[6]=H.elements[5],S.__data[7]=0,S.__data[8]=H.elements[6],S.__data[9]=H.elements[7],S.__data[10]=H.elements[8],S.__data[11]=0):(H.toArray(S.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,M,w,D){const T=b.value,E=M+"_"+w;if(D[E]===void 0)return typeof T=="number"||typeof T=="boolean"?D[E]=T:D[E]=T.clone(),!0;{const C=D[E];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return D[E]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(b){const M=b.uniforms;let w=0;const D=16;for(let E=0,C=M.length;E<C;E++){const F=Array.isArray(M[E])?M[E]:[M[E]];for(let _=0,S=F.length;_<S;_++){const N=F[_],k=Array.isArray(N.value)?N.value:[N.value];for(let W=0,K=k.length;W<K;W++){const H=k[W],J=v(H),V=w%D,ht=V%J.boundary,ut=V+ht;w+=ht,ut!==0&&D-ut<J.storage&&(w+=D-ut),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=J.storage}}}const T=w%D;return T>0&&(w+=D-T),b.__size=w,b.__cache={},this}function v(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){const M=b.target;M.removeEventListener("dispose",p);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}class Ig{constructor(t={}){const{canvas:e=vd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=Zn,this.toneMappingExposure=1;const M=this;let w=!1,D=0,T=0,E=null,C=-1,F=null;const _=new ie,S=new ie;let N=null;const k=new Dt(0);let W=0,K=e.width,H=e.height,J=1,V=null,ht=null;const ut=new ie(0,0,K,H),Mt=new ie(0,0,K,H);let qt=!1;const Qt=new ac;let X=!1,Q=!1;const vt=new jt,dt=new jt,Ut=new R,At=new ie,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Gt(){return E===null?J:1}let P=n;function Ve(y,I){return e.getContext(y,I)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ko}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),P===null){const I="webgl2";if(P=Ve(I,y),P===null)throw Ve(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let zt,Wt,Rt,ae,It,A,x,O,q,Z,Y,yt,it,ft,Xt,tt,pt,Pt,Lt,mt,kt,Nt,re,L;function ot(){zt=new Fm(P),zt.init(),Nt=new Sg(P,zt),Wt=new Lm(P,zt,t,Nt),Rt=new xg(P),Wt.reverseDepthBuffer&&Rt.buffers.depth.setReversed(!0),ae=new km(P),It=new sg,A=new yg(P,zt,Rt,It,Wt,Nt,ae),x=new Dm(M),O=new Om(M),q=new Yd(P),re=new Rm(P,q),Z=new Bm(P,q,ae,re),Y=new Gm(P,Z,q,ae),Lt=new Hm(P,Wt,A),tt=new Im(It),yt=new ig(M,x,O,zt,Wt,re,tt),it=new Pg(M,It),ft=new ag,Xt=new dg(zt),Pt=new Cm(M,x,O,Rt,Y,u,c),pt=new _g(M,Y,Wt),L=new Lg(P,ae,Wt,Rt),mt=new Pm(P,zt,ae),kt=new zm(P,zt,ae),ae.programs=yt.programs,M.capabilities=Wt,M.extensions=zt,M.properties=It,M.renderLists=ft,M.shadowMap=pt,M.state=Rt,M.info=ae}ot();const G=new Cg(M,P);this.xr=G,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=zt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=zt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(y){y!==void 0&&(J=y,this.setSize(K,H,!1))},this.getSize=function(y){return y.set(K,H)},this.setSize=function(y,I,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,H=I,e.width=Math.floor(y*J),e.height=Math.floor(I*J),B===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(K*J,H*J).floor()},this.setDrawingBufferSize=function(y,I,B){K=y,H=I,J=B,e.width=Math.floor(y*B),e.height=Math.floor(I*B),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(_)},this.getViewport=function(y){return y.copy(ut)},this.setViewport=function(y,I,B,z){y.isVector4?ut.set(y.x,y.y,y.z,y.w):ut.set(y,I,B,z),Rt.viewport(_.copy(ut).multiplyScalar(J).round())},this.getScissor=function(y){return y.copy(Mt)},this.setScissor=function(y,I,B,z){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,I,B,z),Rt.scissor(S.copy(Mt).multiplyScalar(J).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(y){Rt.setScissorTest(qt=y)},this.setOpaqueSort=function(y){V=y},this.setTransparentSort=function(y){ht=y},this.getClearColor=function(y){return y.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(y=!0,I=!0,B=!0){let z=0;if(y){let U=!1;if(E!==null){const et=E.texture.format;U=et===nc||et===ec||et===tc}if(U){const et=E.texture.type,at=et===Un||et===Mi||et===Bs||et===os||et===jo||et===Qo,_t=Pt.getClearColor(),xt=Pt.getClearAlpha(),wt=_t.r,Ct=_t.g,St=_t.b;at?(d[0]=wt,d[1]=Ct,d[2]=St,d[3]=xt,P.clearBufferuiv(P.COLOR,0,d)):(g[0]=wt,g[1]=Ct,g[2]=St,g[3]=xt,P.clearBufferiv(P.COLOR,0,g))}else z|=P.COLOR_BUFFER_BIT}I&&(z|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ft.dispose(),Xt.dispose(),It.dispose(),x.dispose(),O.dispose(),Y.dispose(),re.dispose(),L.dispose(),yt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Mc),G.removeEventListener("sessionend",yc),ii.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const y=ae.autoReset,I=pt.enabled,B=pt.autoUpdate,z=pt.needsUpdate,U=pt.type;ot(),ae.autoReset=y,pt.enabled=I,pt.autoUpdate=B,pt.needsUpdate=z,pt.type=U}function ct(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Vt(y){const I=y.target;I.removeEventListener("dispose",Vt),pe(I)}function pe(y){Oe(y),It.remove(y)}function Oe(y){const I=It.get(y).programs;I!==void 0&&(I.forEach(function(B){yt.releaseProgram(B)}),y.isShaderMaterial&&yt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,B,z,U,et){I===null&&(I=Ht);const at=U.isMesh&&U.matrixWorld.determinant()<0,_t=uu(y,I,B,z,U);Rt.setMaterial(z,at);let xt=B.index,wt=1;if(z.wireframe===!0){if(xt=Z.getWireframeAttribute(B),xt===void 0)return;wt=2}const Ct=B.drawRange,St=B.attributes.position;let te=Ct.start*wt,oe=(Ct.start+Ct.count)*wt;et!==null&&(te=Math.max(te,et.start*wt),oe=Math.min(oe,(et.start+et.count)*wt)),xt!==null?(te=Math.max(te,0),oe=Math.min(oe,xt.count)):St!=null&&(te=Math.max(te,0),oe=Math.min(oe,St.count));const he=oe-te;if(he<0||he===1/0)return;re.setup(U,z,_t,B,xt);let We,Kt=mt;if(xt!==null&&(We=q.get(xt),Kt=kt,Kt.setIndex(We)),U.isMesh)z.wireframe===!0?(Rt.setLineWidth(z.wireframeLinewidth*Gt()),Kt.setMode(P.LINES)):Kt.setMode(P.TRIANGLES);else if(U.isLine){let bt=z.linewidth;bt===void 0&&(bt=1),Rt.setLineWidth(bt*Gt()),U.isLineSegments?Kt.setMode(P.LINES):U.isLineLoop?Kt.setMode(P.LINE_LOOP):Kt.setMode(P.LINE_STRIP)}else U.isPoints?Kt.setMode(P.POINTS):U.isSprite&&Kt.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const bt=U._multiDrawStarts,Ee=U._multiDrawCounts,Jt=U._multiDrawCount,sn=xt?q.get(xt).bytesPerElement:1,wi=It.get(z).currentProgram.getUniforms();for(let Xe=0;Xe<Jt;Xe++)wi.setValue(P,"_gl_DrawID",Xe),Kt.render(bt[Xe]/sn,Ee[Xe])}else if(U.isInstancedMesh)Kt.renderInstances(te,he,U.count);else if(B.isInstancedBufferGeometry){const bt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ee=Math.min(B.instanceCount,bt);Kt.renderInstances(te,he,Ee)}else Kt.render(te,he)};function $t(y,I,B){y.transparent===!0&&y.side===Cn&&y.forceSinglePass===!1?(y.side=Ne,y.needsUpdate=!0,Xs(y,I,B),y.side=Dn,y.needsUpdate=!0,Xs(y,I,B),y.side=Cn):Xs(y,I,B)}this.compile=function(y,I,B=null){B===null&&(B=y),p=Xt.get(B),p.init(I),b.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const et=U.material;if(et)if(Array.isArray(et))for(let at=0;at<et.length;at++){const _t=et[at];$t(_t,B,U),z.add(_t)}else $t(et,B,U),z.add(et)}),b.pop(),p=null,z},this.compileAsync=function(y,I,B=null){const z=this.compile(y,I,B);return new Promise(U=>{function et(){if(z.forEach(function(at){It.get(at).currentProgram.isReady()&&z.delete(at)}),z.size===0){U(y);return}setTimeout(et,10)}zt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Fe=null;function xn(y){Fe&&Fe(y)}function Mc(){ii.stop()}function yc(){ii.start()}const ii=new Ah;ii.setAnimationLoop(xn),typeof self!="undefined"&&ii.setContext(self),this.setAnimationLoop=function(y){Fe=y,G.setAnimationLoop(y),y===null?ii.stop():ii.start()},G.addEventListener("sessionstart",Mc),G.addEventListener("sessionend",yc),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(I),I=G.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,I,E),p=Xt.get(y,b.length),p.init(I),b.push(p),dt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Qt.setFromProjectionMatrix(dt),Q=this.localClippingEnabled,X=tt.init(this.clippingPlanes,Q),v=ft.get(y,m.length),v.init(),m.push(v),G.enabled===!0&&G.isPresenting===!0){const et=M.xr.getDepthSensingMesh();et!==null&&ha(et,I,-1/0,M.sortObjects)}ha(y,I,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(V,ht),ne=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,ne&&Pt.addToRenderList(v,y),this.info.render.frame++,X===!0&&tt.beginShadows();const B=p.state.shadowsArray;pt.render(B,y,I),X===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=v.opaque,U=v.transmissive;if(p.setupLights(),I.isArrayCamera){const et=I.cameras;if(U.length>0)for(let at=0,_t=et.length;at<_t;at++){const xt=et[at];bc(z,U,y,xt)}ne&&Pt.render(y);for(let at=0,_t=et.length;at<_t;at++){const xt=et[at];Sc(v,y,xt,xt.viewport)}}else U.length>0&&bc(z,U,y,I),ne&&Pt.render(y),Sc(v,y,I);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),y.isScene===!0&&y.onAfterRender(M,y,I),re.resetDefaultState(),C=-1,F=null,b.pop(),b.length>0?(p=b[b.length-1],X===!0&&tt.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function ha(y,I,B,z){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Qt.intersectsSprite(y)){z&&At.setFromMatrixPosition(y.matrixWorld).applyMatrix4(dt);const at=Y.update(y),_t=y.material;_t.visible&&v.push(y,at,_t,B,At.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Qt.intersectsObject(y))){const at=Y.update(y),_t=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),At.copy(y.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),At.copy(at.boundingSphere.center)),At.applyMatrix4(y.matrixWorld).applyMatrix4(dt)),Array.isArray(_t)){const xt=at.groups;for(let wt=0,Ct=xt.length;wt<Ct;wt++){const St=xt[wt],te=_t[St.materialIndex];te&&te.visible&&v.push(y,at,te,B,At.z,St)}}else _t.visible&&v.push(y,at,_t,B,At.z,null)}}const et=y.children;for(let at=0,_t=et.length;at<_t;at++)ha(et[at],I,B,z)}function Sc(y,I,B,z){const U=y.opaque,et=y.transmissive,at=y.transparent;p.setupLightsView(B),X===!0&&tt.setGlobalState(M.clippingPlanes,B),z&&Rt.viewport(_.copy(z)),U.length>0&&Ws(U,I,B),et.length>0&&Ws(et,I,B),at.length>0&&Ws(at,I,B),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function bc(y,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new yi(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?ks:Un,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const et=p.state.transmissionRenderTarget[z.id],at=z.viewport||_;et.setSize(at.z,at.w);const _t=M.getRenderTarget();M.setRenderTarget(et),M.getClearColor(k),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),ne&&Pt.render(B);const xt=M.toneMapping;M.toneMapping=Zn;const wt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),X===!0&&tt.setGlobalState(M.clippingPlanes,z),Ws(y,B,z),A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let St=0,te=I.length;St<te;St++){const oe=I[St],he=oe.object,We=oe.geometry,Kt=oe.material,bt=oe.group;if(Kt.side===Cn&&he.layers.test(z.layers)){const Ee=Kt.side;Kt.side=Ne,Kt.needsUpdate=!0,Ec(he,B,z,We,Kt,bt),Kt.side=Ee,Kt.needsUpdate=!0,Ct=!0}}Ct===!0&&(A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et))}M.setRenderTarget(_t),M.setClearColor(k,W),wt!==void 0&&(z.viewport=wt),M.toneMapping=xt}function Ws(y,I,B){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,et=y.length;U<et;U++){const at=y[U],_t=at.object,xt=at.geometry,wt=z===null?at.material:z,Ct=at.group;_t.layers.test(B.layers)&&Ec(_t,I,B,xt,wt,Ct)}}function Ec(y,I,B,z,U,et){y.onBeforeRender(M,I,B,z,U,et),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(M,I,B,z,y,et),U.transparent===!0&&U.side===Cn&&U.forceSinglePass===!1?(U.side=Ne,U.needsUpdate=!0,M.renderBufferDirect(B,I,z,U,y,et),U.side=Dn,U.needsUpdate=!0,M.renderBufferDirect(B,I,z,U,y,et),U.side=Cn):M.renderBufferDirect(B,I,z,U,y,et),y.onAfterRender(M,I,B,z,U,et)}function Xs(y,I,B){I.isScene!==!0&&(I=Ht);const z=It.get(y),U=p.state.lights,et=p.state.shadowsArray,at=U.state.version,_t=yt.getParameters(y,U.state,et,I,B),xt=yt.getProgramCacheKey(_t);let wt=z.programs;z.environment=y.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(y.isMeshStandardMaterial?O:x).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,wt===void 0&&(y.addEventListener("dispose",Vt),wt=new Map,z.programs=wt);let Ct=wt.get(xt);if(Ct!==void 0){if(z.currentProgram===Ct&&z.lightsStateVersion===at)return Tc(y,_t),Ct}else _t.uniforms=yt.getUniforms(y),y.onBeforeCompile(_t,M),Ct=yt.acquireProgram(_t,xt),wt.set(xt,Ct),z.uniforms=_t.uniforms;const St=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(St.clippingPlanes=tt.uniform),Tc(y,_t),z.needsLights=fu(y),z.lightsStateVersion=at,z.needsLights&&(St.ambientLightColor.value=U.state.ambient,St.lightProbe.value=U.state.probe,St.directionalLights.value=U.state.directional,St.directionalLightShadows.value=U.state.directionalShadow,St.spotLights.value=U.state.spot,St.spotLightShadows.value=U.state.spotShadow,St.rectAreaLights.value=U.state.rectArea,St.ltc_1.value=U.state.rectAreaLTC1,St.ltc_2.value=U.state.rectAreaLTC2,St.pointLights.value=U.state.point,St.pointLightShadows.value=U.state.pointShadow,St.hemisphereLights.value=U.state.hemi,St.directionalShadowMap.value=U.state.directionalShadowMap,St.directionalShadowMatrix.value=U.state.directionalShadowMatrix,St.spotShadowMap.value=U.state.spotShadowMap,St.spotLightMatrix.value=U.state.spotLightMatrix,St.spotLightMap.value=U.state.spotLightMap,St.pointShadowMap.value=U.state.pointShadowMap,St.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ct,z.uniformsList=null,Ct}function wc(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Ur.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Tc(y,I){const B=It.get(y);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function uu(y,I,B,z,U){I.isScene!==!0&&(I=Ht),A.resetTextureUnits();const et=I.fog,at=z.isMeshStandardMaterial?I.environment:null,_t=E===null?M.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ei,xt=(z.isMeshStandardMaterial?O:x).get(z.envMap||at),wt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ct=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),St=!!B.morphAttributes.position,te=!!B.morphAttributes.normal,oe=!!B.morphAttributes.color;let he=Zn;z.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(he=M.toneMapping);const We=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Kt=We!==void 0?We.length:0,bt=It.get(z),Ee=p.state.lights;if(X===!0&&(Q===!0||y!==F)){const Je=y===F&&z.id===C;tt.setState(z,y,Je)}let Jt=!1;z.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ee.state.version||bt.outputColorSpace!==_t||U.isBatchedMesh&&bt.batching===!1||!U.isBatchedMesh&&bt.batching===!0||U.isBatchedMesh&&bt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&bt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&bt.instancing===!1||!U.isInstancedMesh&&bt.instancing===!0||U.isSkinnedMesh&&bt.skinning===!1||!U.isSkinnedMesh&&bt.skinning===!0||U.isInstancedMesh&&bt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&bt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&bt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&bt.instancingMorph===!1&&U.morphTexture!==null||bt.envMap!==xt||z.fog===!0&&bt.fog!==et||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==tt.numPlanes||bt.numIntersection!==tt.numIntersection)||bt.vertexAlphas!==wt||bt.vertexTangents!==Ct||bt.morphTargets!==St||bt.morphNormals!==te||bt.morphColors!==oe||bt.toneMapping!==he||bt.morphTargetsCount!==Kt)&&(Jt=!0):(Jt=!0,bt.__version=z.version);let sn=bt.currentProgram;Jt===!0&&(sn=Xs(z,I,U));let wi=!1,Xe=!1,ua=!1;const ue=sn.getUniforms(),Bn=bt.uniforms;if(Rt.useProgram(sn.program)&&(wi=!0,Xe=!0,ua=!0),z.id!==C&&(C=z.id,Xe=!0),wi||F!==y){Wt.reverseDepthBuffer?(vt.copy(y.projectionMatrix),Md(vt),yd(vt),ue.setValue(P,"projectionMatrix",vt)):ue.setValue(P,"projectionMatrix",y.projectionMatrix),ue.setValue(P,"viewMatrix",y.matrixWorldInverse);const Je=ue.map.cameraPosition;Je!==void 0&&Je.setValue(P,Ut.setFromMatrixPosition(y.matrixWorld)),Wt.logarithmicDepthBuffer&&ue.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ue.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),F!==y&&(F=y,Xe=!0,ua=!0)}if(U.isSkinnedMesh){ue.setOptional(P,U,"bindMatrix"),ue.setOptional(P,U,"bindMatrixInverse");const Je=U.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),ue.setValue(P,"boneTexture",Je.boneTexture,A))}U.isBatchedMesh&&(ue.setOptional(P,U,"batchingTexture"),ue.setValue(P,"batchingTexture",U._matricesTexture,A),ue.setOptional(P,U,"batchingIdTexture"),ue.setValue(P,"batchingIdTexture",U._indirectTexture,A),ue.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&ue.setValue(P,"batchingColorTexture",U._colorsTexture,A));const da=B.morphAttributes;if((da.position!==void 0||da.normal!==void 0||da.color!==void 0)&&Lt.update(U,B,sn),(Xe||bt.receiveShadow!==U.receiveShadow)&&(bt.receiveShadow=U.receiveShadow,ue.setValue(P,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Bn.envMap.value=xt,Bn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(Bn.envMapIntensity.value=I.environmentIntensity),Xe&&(ue.setValue(P,"toneMappingExposure",M.toneMappingExposure),bt.needsLights&&du(Bn,ua),et&&z.fog===!0&&it.refreshFogUniforms(Bn,et),it.refreshMaterialUniforms(Bn,z,J,H,p.state.transmissionRenderTarget[y.id]),Ur.upload(P,wc(bt),Bn,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ur.upload(P,wc(bt),Bn,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ue.setValue(P,"center",U.center),ue.setValue(P,"modelViewMatrix",U.modelViewMatrix),ue.setValue(P,"normalMatrix",U.normalMatrix),ue.setValue(P,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Je=z.uniformsGroups;for(let fa=0,pu=Je.length;fa<pu;fa++){const Ac=Je[fa];L.update(Ac,sn),L.bind(Ac,sn)}}return sn}function du(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function fu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(y,I,B){It.get(y.texture).__webglTexture=I,It.get(y.depthTexture).__webglTexture=B;const z=It.get(y);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const B=It.get(y);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,B=0){E=y,D=I,T=B;let z=!0,U=null,et=!1,at=!1;if(y){const xt=It.get(y);if(xt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(xt.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(xt.__hasExternalTextures)A.rebindTextures(y,It.get(y.texture).__webglTexture,It.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const St=y.depthTexture;if(xt.__boundDepthTexture!==St){if(St!==null&&It.has(St)&&(y.width!==St.image.width||y.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const wt=y.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(at=!0);const Ct=It.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ct[I])?U=Ct[I][B]:U=Ct[I],et=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?U=It.get(y).__webglMultisampledFramebuffer:Array.isArray(Ct)?U=Ct[B]:U=Ct,_.copy(y.viewport),S.copy(y.scissor),N=y.scissorTest}else _.copy(ut).multiplyScalar(J).floor(),S.copy(Mt).multiplyScalar(J).floor(),N=qt;if(Rt.bindFramebuffer(P.FRAMEBUFFER,U)&&z&&Rt.drawBuffers(y,U),Rt.viewport(_),Rt.scissor(S),Rt.setScissorTest(N),et){const xt=It.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,xt.__webglTexture,B)}else if(at){const xt=It.get(y.texture),wt=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,xt.__webglTexture,B||0,wt)}C=-1},this.readRenderTargetPixels=function(y,I,B,z,U,et,at){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=It.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&at!==void 0&&(_t=_t[at]),_t){Rt.bindFramebuffer(P.FRAMEBUFFER,_t);try{const xt=y.texture,wt=xt.format,Ct=xt.type;if(!Wt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-z&&B>=0&&B<=y.height-U&&P.readPixels(I,B,z,U,Nt.convert(wt),Nt.convert(Ct),et)}finally{const xt=E!==null?It.get(E).__webglFramebuffer:null;Rt.bindFramebuffer(P.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(y,I,B,z,U,et,at){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=It.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&at!==void 0&&(_t=_t[at]),_t){const xt=y.texture,wt=xt.format,Ct=xt.type;if(!Wt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-z&&B>=0&&B<=y.height-U){Rt.bindFramebuffer(P.FRAMEBUFFER,_t);const St=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.bufferData(P.PIXEL_PACK_BUFFER,et.byteLength,P.STREAM_READ),P.readPixels(I,B,z,U,Nt.convert(wt),Nt.convert(Ct),0);const te=E!==null?It.get(E).__webglFramebuffer:null;Rt.bindFramebuffer(P.FRAMEBUFFER,te);const oe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await xd(P,oe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,et),P.deleteBuffer(St),P.deleteSync(oe),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,B=0){y.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(y.image.width*z),et=Math.floor(y.image.height*z),at=I!==null?I.x:0,_t=I!==null?I.y:0;A.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,at,_t,U,et),Rt.unbindTexture()},this.copyTextureToTexture=function(y,I,B=null,z=null,U=0){y.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,y=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let et,at,_t,xt,wt,Ct;B!==null?(et=B.max.x-B.min.x,at=B.max.y-B.min.y,_t=B.min.x,xt=B.min.y):(et=y.image.width,at=y.image.height,_t=0,xt=0),z!==null?(wt=z.x,Ct=z.y):(wt=0,Ct=0);const St=Nt.convert(I.format),te=Nt.convert(I.type);A.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const oe=P.getParameter(P.UNPACK_ROW_LENGTH),he=P.getParameter(P.UNPACK_IMAGE_HEIGHT),We=P.getParameter(P.UNPACK_SKIP_PIXELS),Kt=P.getParameter(P.UNPACK_SKIP_ROWS),bt=P.getParameter(P.UNPACK_SKIP_IMAGES),Ee=y.isCompressedTexture?y.mipmaps[U]:y.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ee.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ee.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_t),P.pixelStorei(P.UNPACK_SKIP_ROWS,xt),y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,wt,Ct,et,at,St,te,Ee.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,wt,Ct,Ee.width,Ee.height,St,Ee.data):P.texSubImage2D(P.TEXTURE_2D,U,wt,Ct,et,at,St,te,Ee),P.pixelStorei(P.UNPACK_ROW_LENGTH,oe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,he),P.pixelStorei(P.UNPACK_SKIP_PIXELS,We),P.pixelStorei(P.UNPACK_SKIP_ROWS,Kt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,bt),U===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(y,I,B=null,z=null,U=0){y.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,y=arguments[2],I=arguments[3],U=arguments[4]||0);let et,at,_t,xt,wt,Ct,St,te,oe;const he=y.isCompressedTexture?y.mipmaps[U]:y.image;B!==null?(et=B.max.x-B.min.x,at=B.max.y-B.min.y,_t=B.max.z-B.min.z,xt=B.min.x,wt=B.min.y,Ct=B.min.z):(et=he.width,at=he.height,_t=he.depth,xt=0,wt=0,Ct=0),z!==null?(St=z.x,te=z.y,oe=z.z):(St=0,te=0,oe=0);const We=Nt.convert(I.format),Kt=Nt.convert(I.type);let bt;if(I.isData3DTexture)A.setTexture3D(I,0),bt=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)A.setTexture2DArray(I,0),bt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Ee=P.getParameter(P.UNPACK_ROW_LENGTH),Jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),sn=P.getParameter(P.UNPACK_SKIP_PIXELS),wi=P.getParameter(P.UNPACK_SKIP_ROWS),Xe=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,he.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,he.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xt),P.pixelStorei(P.UNPACK_SKIP_ROWS,wt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ct),y.isDataTexture||y.isData3DTexture?P.texSubImage3D(bt,U,St,te,oe,et,at,_t,We,Kt,he.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(bt,U,St,te,oe,et,at,_t,We,he.data):P.texSubImage3D(bt,U,St,te,oe,et,at,_t,We,Kt,he),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ee),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,sn),P.pixelStorei(P.UNPACK_SKIP_ROWS,wi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xe),U===0&&I.generateMipmaps&&P.generateMipmap(bt),Rt.unbindTexture()},this.initRenderTarget=function(y){It.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),Rt.unbindTexture()},this.resetState=function(){D=0,T=0,E=null,Rt.reset(),re.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ic?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===sa?"display-p3":"srgb"}}class cc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new cc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Uh extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Dg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ko,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new R;class qr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Nh extends ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ki;const ys=new R,Hi=new R,Gi=new R,Vi=new st,Ss=new st,Oh=new jt,fr=new R,bs=new R,pr=new R,Sl=new st,Va=new st,bl=new st;class Ug extends fe{constructor(t=new Nh){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Dg(e,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new qr(n,3,0,!1)),ki.setAttribute("uv",new qr(n,2,3,!1))}this.geometry=ki,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),Oh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Gi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;mr(fr.set(-.5,-.5,0),Gi,a,Hi,s,r),mr(bs.set(.5,-.5,0),Gi,a,Hi,s,r),mr(pr.set(.5,.5,0),Gi,a,Hi,s,r),Sl.set(0,0),Va.set(1,0),bl.set(1,1);let o=t.ray.intersectTriangle(fr,bs,pr,!1,ys);if(o===null&&(mr(bs.set(-.5,.5,0),Gi,a,Hi,s,r),Va.set(0,1),o=t.ray.intersectTriangle(fr,pr,bs,!1,ys),o===null))return;const c=t.ray.origin.distanceTo(ys);c<t.near||c>t.far||e.push({distance:c,point:ys.clone(),uv:Qe.getInterpolation(ys,fr,bs,pr,Sl,Va,bl,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function mr(i,t,e,n,s,r){Vi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ss.x=r*Vi.x-s*Vi.y,Ss.y=s*Vi.x+r*Vi.y):Ss.copy(Vi),i.copy(t),i.x+=Ss.x,i.y+=Ss.y,i.applyMatrix4(Oh)}class Fh extends Re{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ue,h=Ue,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class El extends tn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wi=new jt,wl=new jt,gr=[],Tl=new bi,Ng=new jt,Es=new Bt,ws=new Ei;class _r extends Bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ng)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),Tl.copy(t.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Tl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),ws.copy(t.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(n),t.ray.intersectsSphere(ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wi),wl.multiplyMatrices(n,Wi),Es.matrixWorld=wl,Es.raycast(t,gr);for(let a=0,o=gr.length;a<o;a++){const c=gr[a];c.instanceId=r,c.object=this,e.push(c)}gr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fh(new Float32Array(s*this.count),s,this.count,ia,gn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Go extends ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $r=new R,Kr=new R,Al=new jt,Ts=new rc,vr=new Ei,Wa=new R,Cl=new R;class Bh extends fe{constructor(t=new xe,e=new Go){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)$r.fromBufferAttribute(e,s-1),Kr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=$r.distanceTo(Kr);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(s),vr.radius+=r,t.ray.intersectsSphere(vr)===!1)return;Al.copy(s).invert(),Ts.copy(t.ray).applyMatrix4(Al);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,p=g-1;v<p;v+=l){const m=h.getX(v),b=h.getX(v+1),M=xr(this,t,Ts,c,m,b);M&&e.push(M)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(d),m=xr(this,t,Ts,c,v,p);m&&e.push(m)}}else{const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=d,p=g-1;v<p;v+=l){const m=xr(this,t,Ts,c,v,v+1);m&&e.push(m)}if(this.isLineLoop){const v=xr(this,t,Ts,c,g-1,d);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if($r.fromBufferAttribute(a,s),Kr.fromBufferAttribute(a,r),e.distanceSqToSegment($r,Kr,Wa,Cl)>n)return;Wa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Wa);if(!(c<t.near||c>t.far))return{distance:c,point:Cl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Rl=new R,Pl=new R;class Og extends Bh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Rl.fromBufferAttribute(e,s),Pl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Rl.distanceTo(Pl);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zh extends ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ll=new jt,Vo=new rc,Mr=new Ei,yr=new R;class Fg extends fe{constructor(t=new xe,e=new zh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,t.ray.intersectsSphere(Mr)===!1)return;Ll.copy(s).invert(),Vo.copy(t.ray).applyMatrix4(Ll);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=u,v=d;g<v;g++){const p=l.getX(g);yr.fromBufferAttribute(f,p),Il(yr,p,c,s,t,e,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=u,v=d;g<v;g++)yr.fromBufferAttribute(f,g),Il(yr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Il(i,t,e,n,s,r,a){const o=Vo.distanceSqToPoint(i);if(o<e){const c=new R;Vo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Bg extends Re{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new st:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],a=[],o=new R,c=new jt;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(be(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(be(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class lc extends vn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new st){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zg extends lc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function hc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Sr=new R,Xa=new hc,Ya=new hc,qa=new hc;class kg extends vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Sr.subVectors(s[0],s[1]).add(s[0]),l=Sr);const f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Sr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Xa.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,v,p),Ya.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,v,p),qa.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Ya.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),qa.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(Xa.calc(c),Ya.calc(c),qa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Hg(i,t){const e=1-i;return e*e*t}function Gg(i,t){return 2*(1-i)*i*t}function Vg(i,t){return i*i*t}function Ds(i,t,e,n){return Hg(i,t)+Gg(i,e)+Vg(i,n)}function Wg(i,t){const e=1-i;return e*e*e*t}function Xg(i,t){const e=1-i;return 3*e*e*i*t}function Yg(i,t){return 3*(1-i)*i*i*t}function qg(i,t){return i*i*i*t}function Us(i,t,e,n,s){return Wg(i,t)+Xg(i,e)+Yg(i,n)+qg(i,s)}class kh extends vn{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Us(t,s.x,r.x,a.x,o.x),Us(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $g extends vn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Us(t,s.x,r.x,a.x,o.x),Us(t,s.y,r.y,a.y,o.y),Us(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hh extends vn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kg extends vn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gh extends vn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ds(t,s.x,r.x,a.x),Ds(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jg extends vn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ds(t,s.x,r.x,a.x),Ds(t,s.y,r.y,a.y),Ds(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vh extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Dl(o,c.x,l.x,h.x,f.x),Dl(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var Ul=Object.freeze({__proto__:null,ArcCurve:zg,CatmullRomCurve3:kg,CubicBezierCurve:kh,CubicBezierCurve3:$g,EllipseCurve:lc,LineCurve:Hh,LineCurve3:Kg,QuadraticBezierCurve:Gh,QuadraticBezierCurve3:Jg,SplineCurve:Vh});class Zg extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ul[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ul[s.type]().fromJSON(s))}return this}}class jg extends Zg{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Hh(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Gh(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new kh(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Vh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new lc(t,e,n,s,r,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class uc extends xe{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,f=new R,u=new st,d=new R,g=new R,v=new R;let p=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,d.x=m*1,d.y=-p,d.z=m*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let b=0;b<=e;b++){const M=n+b*h*s,w=Math.sin(M),D=Math.cos(M);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*w,f.y=t[T].y,f.z=t[T].x*D,a.push(f.x,f.y,f.z),u.x=b/e,u.y=T/(t.length-1),o.push(u.x,u.y);const E=c[3*T+0]*w,C=c[3*T+1],F=c[3*T+0]*D;l.push(E,C,F)}}for(let b=0;b<e;b++)for(let M=0;M<t.length-1;M++){const w=M+b*t.length,D=w,T=w+t.length,E=w+t.length+1,C=w+1;r.push(D,T,C),r.push(E,C,T)}this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("uv",new se(o,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uc(t.points,t.segments,t.phiStart,t.phiLength)}}class aa extends uc{constructor(t=1,e=1,n=4,s=8){const r=new jg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new aa(t.radius,t.length,t.capSegments,t.radialSegments)}}class oa extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new R,h=new st;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class On extends xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const v=[],p=n/2;let m=0;b(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(d,2));function b(){const w=new R,D=new R;let T=0;const E=(e-t)/n;for(let C=0;C<=r;C++){const F=[],_=C/r,S=_*(e-t)+t;for(let N=0;N<=s;N++){const k=N/s,W=k*c+o,K=Math.sin(W),H=Math.cos(W);D.x=S*K,D.y=-_*n+p,D.z=S*H,f.push(D.x,D.y,D.z),w.set(K,E,H).normalize(),u.push(w.x,w.y,w.z),d.push(k,1-_),F.push(g++)}v.push(F)}for(let C=0;C<s;C++)for(let F=0;F<r;F++){const _=v[F][C],S=v[F+1][C],N=v[F+1][C+1],k=v[F][C+1];t>0&&(h.push(_,S,k),T+=3),e>0&&(h.push(S,N,k),T+=3)}l.addGroup(m,T,0),m+=T}function M(w){const D=g,T=new st,E=new R;let C=0;const F=w===!0?t:e,_=w===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,p*_,0),u.push(0,_,0),d.push(.5,.5),g++;const S=g;for(let N=0;N<=s;N++){const W=N/s*c+o,K=Math.cos(W),H=Math.sin(W);E.x=F*H,E.y=p*_,E.z=F*K,f.push(E.x,E.y,E.z),u.push(0,_,0),T.x=K*.5+.5,T.y=H*.5*_+.5,d.push(T.x,T.y),g++}for(let N=0;N<s;N++){const k=D+N,W=S+N;w===!0?h.push(W,W+1,k):h.push(W+1,W,k),C+=3}l.addGroup(m,C,w===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dc extends On{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new dc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fc extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const M=new R,w=new R,D=new R;for(let T=0;T<e.length;T+=3)d(e[T+0],M),d(e[T+1],w),d(e[T+2],D),c(M,w,D,b)}function c(b,M,w,D){const T=D+1,E=[];for(let C=0;C<=T;C++){E[C]=[];const F=b.clone().lerp(w,C/T),_=M.clone().lerp(w,C/T),S=T-C;for(let N=0;N<=S;N++)N===0&&C===T?E[C][N]=F:E[C][N]=F.clone().lerp(_,N/S)}for(let C=0;C<T;C++)for(let F=0;F<2*(T-C)-1;F++){const _=Math.floor(F/2);F%2===0?(u(E[C][_+1]),u(E[C+1][_]),u(E[C][_])):(u(E[C][_+1]),u(E[C+1][_+1]),u(E[C+1][_]))}}function l(b){const M=new R;for(let w=0;w<r.length;w+=3)M.x=r[w+0],M.y=r[w+1],M.z=r[w+2],M.normalize().multiplyScalar(b),r[w+0]=M.x,r[w+1]=M.y,r[w+2]=M.z}function h(){const b=new R;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];const w=p(b)/2/Math.PI+.5,D=m(b)/Math.PI+.5;a.push(w,1-D)}g(),f()}function f(){for(let b=0;b<a.length;b+=6){const M=a[b+0],w=a[b+2],D=a[b+4],T=Math.max(M,w,D),E=Math.min(M,w,D);T>.9&&E<.1&&(M<.2&&(a[b+0]+=1),w<.2&&(a[b+2]+=1),D<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function d(b,M){const w=b*3;M.x=t[w+0],M.y=t[w+1],M.z=t[w+2]}function g(){const b=new R,M=new R,w=new R,D=new R,T=new st,E=new st,C=new st;for(let F=0,_=0;F<r.length;F+=9,_+=6){b.set(r[F+0],r[F+1],r[F+2]),M.set(r[F+3],r[F+4],r[F+5]),w.set(r[F+6],r[F+7],r[F+8]),T.set(a[_+0],a[_+1]),E.set(a[_+2],a[_+3]),C.set(a[_+4],a[_+5]),D.copy(b).add(M).add(w).divideScalar(3);const S=p(D);v(T,_+0,b,S),v(E,_+2,M,S),v(C,_+4,w,S)}}function v(b,M,w,D){D<0&&b.x===1&&(a[M]=b.x-1),w.x===0&&w.z===0&&(a[M]=D/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fc(t.vertices,t.indices,t.radius,t.details)}}class pc extends fc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new pc(t.radius,t.detail)}}class Fn extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new R,u=new R,d=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const b=[],M=m/n;let w=0;m===0&&a===0?w=.5/e:m===n&&c===Math.PI&&(w=-.5/e);for(let D=0;D<=e;D++){const T=D/e;f.x=-t*Math.cos(s+T*r)*Math.sin(a+M*o),f.y=t*Math.cos(a+M*o),f.z=t*Math.sin(s+T*r)*Math.sin(a+M*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),p.push(T+w,1-M),b.push(l++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){const M=h[m][b+1],w=h[m][b],D=h[m+1][b],T=h[m+1][b+1];(m!==0||a>0)&&d.push(M,w,T),(m!==n-1||c<Math.PI)&&d.push(w,D,T)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mc extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new R,f=new R,u=new R;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*r,p=d/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(v),f.y=(t+e*Math.cos(p))*Math.sin(v),f.z=e*Math.sin(p),o.push(f.x,f.y,f.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,b=(s+1)*d+g;a.push(v,p,b),a.push(p,m,b)}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qg extends ni{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Dt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class gc extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Wh extends gc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $a=new jt,Nl=new R,Ol=new R;class Xh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ac,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Nl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nl),Ol.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ol),e.updateMatrixWorld(),$a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fl=new jt,As=new R,Ka=new R;class t_ extends Xh{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),As.setFromMatrixPosition(t.matrixWorld),n.position.copy(As),Ka.copy(n.position),Ka.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ka),n.updateMatrixWorld(),s.makeTranslation(-As.x,-As.y,-As.z),Fl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl)}}class Wo extends gc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new t_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class e_ extends Xh{constructor(){super(new Ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yh extends gc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new e_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class n_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Bl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bl(){return performance.now()}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);let hi=null;function i_(){if(!hi){const i=new Uint8Array([110,190,255]);hi=new Fh(i,3,1,ia),hi.minFilter=hi.magFilter=Ue,hi.generateMipmaps=!1,hi.needsUpdate=!0}return hi}const Ja=new Map;function lt(i,t={}){var s,r,a,o,c,l;const e=[i,t.map?t.map.uuid:"",t.flat?"f":"",(s=t.opacity)!=null?s:"",(r=t.side)!=null?r:""].join("|");if(!t.unique&&Ja.has(e))return Ja.get(e);const n=new Qg({color:i,gradientMap:i_(),map:t.map||null,emissive:(a=t.emissive)!=null?a:0,emissiveIntensity:(o=t.emissiveIntensity)!=null?o:1,transparent:t.opacity!=null&&t.opacity<1,opacity:(c=t.opacity)!=null?c:1,side:(l=t.side)!=null?l:Dn});return t.unique||Ja.set(e,n),n}const qh=new Gs({color:1380380,side:Ne});function s_(i,t=.035){const e=i.geometry;e.boundingBox||e.computeBoundingBox();const n=new R,s=new R;e.boundingBox.getSize(n),e.boundingBox.getCenter(s);const r=i.scale,a=(c,l)=>c*l>1e-4?(c*l+2*t)/(c*l):1,o=new Bt(e,qh);return o.scale.set(a(n.x,Math.abs(r.x)),a(n.y,Math.abs(r.y)),a(n.z,Math.abs(r.z))),o.position.set(s.x*(1-o.scale.x),s.y*(1-o.scale.y),s.z*(1-o.scale.z)),o.castShadow=!1,o.receiveShadow=!1,o.userData.isOutline=!0,o.raycast=()=>{},i.add(o),o}function Et(i,t,e={}){var s,r,a;const n=new Bt(i,t);return e.scale&&n.scale.set(...e.scale),n.castShadow=(s=e.cast)!=null?s:!0,n.receiveShadow=(r=e.receive)!=null?r:!0,e.outline!==!1&&s_(n,(a=e.t)!=null?a:.035),n}const en=new Map;function fs(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function ps(i,t=[1,1]){const e=new Bg(i);return e.colorSpace=De,e.wrapS=e.wrapT=kr,e.repeat.set(t[0],t[1]),e.anisotropy=4,e}const wn="#1a1423",r_=[{id:"circles",name:"Rings"},{id:"diamonds",name:"Diamonds"},{id:"waves",name:"Waves"},{id:"kente",name:"Kente"},{id:"leaves",name:"Leaves"}];function hs(i,t,e,n="#fff3d6",s=[2,2]){const r=["ank",i,t,e,n,s.join("x")].join("|");if(en.has(r))return en.get(r);const a=256,[o,c]=fs(a,a);c.fillStyle=t,c.fillRect(0,0,a,a);const l=(f,u,d,g)=>{for(const v of[-a,0,a])for(const p of[-a,0,a])c.beginPath(),c.arc(f+v,u+p,d,0,Math.PI*2),c.fillStyle=g,c.fill()};switch(i){case"circles":{const u=a/4;for(let d=0;d<4;d++)for(let g=0;g<4;g++){const v=g*u+u/2+(d%2?u/2:0),p=d*u+u/2;for(const[m,b]of[[27,wn],[23,e],[16,n],[11,wn],[6,e]])l(v,p,m,b)}for(let d=0;d<4;d++)for(let g=0;g<4;g++)l(g*u+(d%2?0:u/2)+u/2-u/2,d*u+4,4,n);break}case"diamonds":{for(let u=0;u<4;u++)for(let d=0;d<4;d++){const g=d*64+32,v=u*64+64/2;for(const[p,m]of[[30,wn],[25,e],[15,n],[7,wn]])c.beginPath(),c.moveTo(g,v-p),c.lineTo(g+p,v),c.lineTo(g,v+p),c.lineTo(g-p,v),c.closePath(),c.fillStyle=m,c.fill()}c.fillStyle=n;for(let u=0;u<=4;u++)for(let d=0;d<=4;d++)c.beginPath(),c.arc(d*64,u*64,5,0,7),c.fill();break}case"waves":{for(let f=0;f<4;f++){const u=f*64+32;c.lineCap="round";for(const[d,g,v]of[[18,wn,0],[12,e,0],[4,n,0]]){c.beginPath();for(let p=0;p<=a;p+=4){const m=u+Math.sin(p/a*Math.PI*8)*12+v;p?c.lineTo(p,m):c.moveTo(p,m)}c.lineWidth=d,c.strokeStyle=g,c.stroke()}c.fillStyle=n;for(let d=0;d<8;d++)c.beginPath(),c.arc(d*32+16,u+28*(d%2?1:-1)*0+30,4,0,7),c.fill()}break}case"kente":{const f=[e,wn,n,e,"#2a9d8f"];for(let u=0;u<4;u++)for(let d=0;d<4;d++){const g=d*64,v=u*64;for(let p=0;p<8;p++)c.fillStyle=f[p%f.length],(d+u)%2?c.fillRect(g+p*8,v,6,64):c.fillRect(g,v+p*8,64,6);c.strokeStyle=wn,c.lineWidth=3,c.strokeRect(g+1.5,v+1.5,61,61)}break}case"leaves":default:{for(let f=0;f<4;f++)for(let u=0;u<4;u++){const d=u*64+32+(f%2?32:0),g=f*64+32;for(const v of[-a,0])c.save(),c.translate(d+v,g),c.rotate(((u+f)%2?1:-1)*Math.PI/4),c.beginPath(),c.ellipse(0,0,26,12,0,0,Math.PI*2),c.fillStyle=wn,c.fill(),c.beginPath(),c.ellipse(0,0,22,8,0,0,Math.PI*2),c.fillStyle=e,c.fill(),c.beginPath(),c.moveTo(-20,0),c.lineTo(20,0),c.lineWidth=2.5,c.strokeStyle=wn,c.stroke(),c.restore()}c.fillStyle=n;for(let f=0;f<4;f++)for(let u=0;u<4;u++)c.beginPath(),c.arc(u*64+(f%2,0),f*64+0,6,0,7),c.fill()}}const h=ps(o,s);return en.set(r,h),h}function Xn(i,t=8,e=!0,n=[1,1]){const s=["str",i.join(","),t,e,n.join("x")].join("|");if(en.has(s))return en.get(s);const r=128,[a,o]=fs(r,r),c=r/t;for(let h=0;h<t;h++)o.fillStyle=i[h%i.length],e?o.fillRect(h*c,0,c+1,r):o.fillRect(0,h*c,r,c+1);const l=ps(a,n);return en.set(s,l),l}function zl(i=8){const[t,e]=fs(512,128);e.fillStyle="#5b6070",e.fillRect(0,0,512,128),e.fillStyle="rgba(255,255,255,0.05)";for(let s=0;s<60;s++)e.fillRect(Math.random()*512,Math.random()*128,18,3);e.fillStyle="#f6f2e8",e.fillRect(0,6,512,5),e.fillRect(0,117,512,5),e.fillStyle="#ffd23f";for(let s=0;s<512;s+=128)e.fillRect(s+16,58,80,12);return ps(t,[i,1])}function kl(i,{bg:t="#ffd23f",fg:e="#1a1423",w:n=512,h:s=128,border:r="#1a1423",sub:a=null,font:o="Trebuchet MS, Verdana, sans-serif"}={}){const c=["txt",i,t,e,n,s,a].join("|");if(en.has(c))return en.get(c);const[l,h]=fs(n,s);h.fillStyle=t,h.fillRect(0,0,n,s),r&&(h.strokeStyle=r,h.lineWidth=Math.max(6,s*.06),h.strokeRect(h.lineWidth/2,h.lineWidth/2,n-h.lineWidth,s-h.lineWidth)),h.fillStyle=e,h.textAlign="center",h.textBaseline="middle";let f=a?s*.42:s*.6;for(h.font=`900 ${f}px ${o}`;h.measureText(i).width>n*.9&&f>8;)f-=2,h.font=`900 ${f}px ${o}`;if(h.fillText(i,n/2,a?s*.38:s*.54),a){let d=s*.22;for(h.font=`700 ${d}px ${o}`;h.measureText(a).width>n*.92&&d>8;)d-=1,h.font=`700 ${d}px ${o}`;h.fillText(a,n/2,s*.76)}const u=ps(l);return u.wrapS=u.wrapT=Rn,en.set(c,u),u}function Hl(i){const t="bub|"+i;if(en.has(t))return en.get(t);const[e,n]=fs(512,160);n.font="800 44px Trebuchet MS, Verdana, sans-serif";const s=Math.min(480,n.measureText(i).width+50),r=(512-s)/2,a=10,o=100,c=36;n.beginPath(),n.moveTo(r+c,a),n.lineTo(r+s-c,a),n.quadraticCurveTo(r+s,a,r+s,a+c),n.lineTo(r+s,a+o-c),n.quadraticCurveTo(r+s,a+o,r+s-c,a+o),n.lineTo(276,a+o),n.lineTo(256,148),n.lineTo(240,a+o),n.lineTo(r+c,a+o),n.quadraticCurveTo(r,a+o,r,a+o-c),n.lineTo(r,a+c),n.quadraticCurveTo(r,a,r+c,a),n.closePath(),n.fillStyle="#fffdf5",n.fill(),n.lineWidth=8,n.strokeStyle="#1a1423",n.stroke(),n.fillStyle="#1a1423",n.textAlign="center",n.textBaseline="middle";let l=44;for(;n.measureText(i).width>440&&l>18;)l-=2,n.font=`800 ${l}px Trebuchet MS, Verdana, sans-serif`;n.fillText(i,256,a+o/2+2);const h=ps(e);return h.wrapS=h.wrapT=Rn,en.set(t,h),h}function a_(){const[i,t]=fs(128,128);t.fillStyle="#bfe6ff",t.fillRect(0,0,128,128),t.fillStyle="rgba(255,255,255,0.7)",t.beginPath(),t.moveTo(10,118),t.lineTo(60,10),t.lineTo(80,10),t.lineTo(30,118),t.fill(),t.fillStyle="#2b2d42";for(let n=0;n<5;n++)t.fillRect(8+n*26,0,6,128);return t.fillRect(0,60,128,6),ps(i)}const _c=[{name:"Caramel",hex:"#d9a066"},{name:"Honey",hex:"#c68642"},{name:"Bronze",hex:"#a86b3c"},{name:"Cocoa",hex:"#8d5524"},{name:"Chestnut",hex:"#70401f"},{name:"Mahogany",hex:"#5a3218"},{name:"Ebony",hex:"#432513"},{name:"Midnight",hex:"#311b0f"}],$h=[{id:"lowcut",name:"Low Cut"},{id:"afro",name:"Afro"},{id:"braids",name:"Braids"},{id:"cornrows",name:"Cornrows"},{id:"gele",name:"Gele"},{id:"cap",name:"Face Cap"},{id:"bald",name:"Clean Shave"}],Kh=[{id:"ankaraShirt",name:"Ankara Shirt"},{id:"ankaraDress",name:"Ankara Dress"},{id:"street",name:"Streetwear"},{id:"kaftan",name:"Kaftan"}],Jr=["#1b1210","#3b2416","#6b3e1f","#b5651d","#e2b04a","#7b3fa0","#e0457b"],Jh=["#ff6b35","#e71d36","#ffbe0b","#2ec4b6","#3a86ff","#8338ec","#06d6a0","#ff8fab","#f15bb5","#fdfcdc","#1d3557"],Zh=["#ffd23f","#2ec4b6","#ff6b35","#fdfcdc","#06d6a0","#e71d36","#3a86ff","#1a1423"],jh=["#2b2d42","#3d5a80","#6b705c","#f4f1de","#9a031e","#264653","#e9c46a"],Yn=(i,t=Math.random)=>i[Math.floor(t()*i.length)];function Qh(){return{name:"Tunde",skin:_c[3].hex,hair:"lowcut",hairColor:Jr[0],outfit:"ankaraShirt",pattern:"circles",clothColor:"#ff6b35",accentColor:"#2ec4b6",pantsColor:"#2b2d42"}}function Nr(i=Math.random){const t=Yn(Kh,i).id;let e=Yn($h,i).id;return{name:"NPC",skin:Yn(_c,i).hex,hair:e,hairColor:i()<.8?Jr[Math.floor(i()*2)]:Yn(Jr,i),outfit:t,pattern:Yn(["circles","diamonds","waves","kente","leaves"],i),clothColor:Yn(Jh,i),accentColor:Yn(Zh,i),pantsColor:Yn(jh,i)}}const Za=new Map,ti=(i,t)=>(Za.has(i)||Za.set(i,t()),Za.get(i)),we=(i,t=20,e=14)=>ti(`s${i}_${t}_${e}`,()=>new Fn(i,t,e)),Or=(i,t)=>ti(`c${i}_${t}`,()=>new aa(i,t,4,12)),qi=(i,t,e,n=18)=>ti(`y${i}_${t}_${e}_${n}`,()=>new On(i,t,e,n)),Xo=(i,t)=>ti(`d${i}_${t}`,()=>new Fn(i,28,14,0,Math.PI*2,0,t)),Ki=(i,t,e=Math.PI*2)=>ti(`t${i}_${t}_${e}`,()=>new mc(i,t,8,28,e));function Fr(i,t){const e=new Dt(i),n={};return e.getHSL(n,De),e.setHSL(n.h,n.s,Math.max(0,Math.min(1,n.l+t)),De),"#"+e.getHexString()}const Zr=[1.06,.97,1];function Cs(i,t=1.25,e=-.28,n=.495,s=.025){const r=Et(Xo(n,t),i,{scale:Zr,t:s});return r.rotation.x=e,r}function o_(i,t){const e=lt(i.hairColor),n=s=>lt("#ffffff",{map:hs(i.pattern,i.accentColor,i.clothColor,"#fff3d6",s)});switch(i.hair){case"lowcut":t.add(Cs(e,1.2,-.3));break;case"afro":{t.add(Cs(e,1.3,-.25));const s=Et(ti("afro",()=>{const r=new pc(.6,1);return r.computeVertexNormals(),r}),lt(i.hairColor),{scale:[1.08,.92,1],t:.04});s.position.set(0,.2,-.2),t.add(s);break}case"braids":{t.add(Cs(e,1.4,-.3));const s=lt("#ffd23f");for(let a=0;a<11;a++){const o=Xr.degToRad(115+a*13),c=new _e;c.position.set(Math.sin(o)*.43,.02,Math.cos(o)*.43),c.rotation.set(-Math.cos(o)*.25,0,Math.sin(o)*.25);const l=Et(Or(.04,.4),e,{t:.02});l.position.y=-.2,c.add(l);const h=Et(we(.05,10,8),s,{t:.015});h.position.y=-.44,c.add(h),t.add(c)}const r=Et(we(.16),e,{t:.03});r.position.set(0,.42,-.22),t.add(r);break}case"cornrows":{t.add(Cs(e,1.25,-.32));const s=new _e;s.rotation.x=-.38;const r=lt(Fr(i.hairColor,.08));for(let a=-2;a<=2;a++){const o=a*.11*Zr[0],c=Math.sqrt(.5*.5-o*o)*1,l=Et(Ki(+c.toFixed(3),.028,Math.PI),r,{t:.012,cast:!1});l.rotation.y=Math.PI/2,l.position.x=o,s.add(l)}t.add(s);break}case"gele":{const s=n([2,1]),r=Et(Xo(.53,1.45),s,{scale:[1.08,1.05,1.02],t:.03});r.rotation.x=-.2,r.position.y=.02,t.add(r);const a=Et(Ki(.49,.075),s,{scale:[1.08,1,1.02],t:.025});a.rotation.x=Math.PI/2-.3,a.position.set(0,.16,-.02),t.add(a);const o=n([1,1]);for(const l of[-1,1]){const h=Et(we(.3,16,12),o,{scale:[1.25,.75,.32],t:.03});h.position.set(.17*l,.5,-.12),h.rotation.set(-.35,.25*l,.55*l),t.add(h)}const c=Et(we(.14,14,10),o,{t:.025});c.position.set(0,.42,-.02),t.add(c);break}case"cap":{t.add(Cs(e,1.35,-.3));const s=lt(i.accentColor==="#1a1423"?"#e71d36":i.accentColor),r=Et(Xo(.515,1.25),s,{scale:Zr,t:.03});r.rotation.x=-.12,r.position.y=.03,t.add(r);const a=Et(qi(.27,.27,.035,24),s,{scale:[1,1,.75],t:.025});a.position.set(0,.23,.43),a.rotation.x=.22,t.add(a);const o=Et(we(.04,8,6),s,{t:.015});o.position.set(0,.52,-.06),t.add(o);break}}}function Ns(i={}){const t={...Qh(),...i},e=new _e;e.name="chibi";const n=new _e;n.position.y=.03,e.add(n);const s=lt(t.skin),r=lt(Fr(t.skin,-.12)),o=t.outfit==="ankaraShirt"||t.outfit==="ankaraDress"?lt("#ffffff",{map:hs(t.pattern,t.clothColor,t.accentColor,"#fff3d6",[3,1])}):lt(t.clothColor),c=lt(t.pantsColor),l=lt(t.outfit==="street"?"#f7f7f2":t.outfit==="kaftan"?"#5a3a22":"#2b2024"),h=lt(t.accentColor),f=[],u=t.outfit==="ankaraDress"?s:c;for(const E of[-1,1]){const C=new _e;C.position.set(.115*E,.3,0);const F=Et(Or(.098,.13),u);F.position.y=-.135,C.add(F);const _=Et(we(.1,14,10),l,{scale:[1,.55,1.35]});_.position.set(0,-.265,.035),C.add(_),n.add(C),f.push(C)}const d=new _e;if(n.add(d),t.outfit==="kaftan"){const E=Et(qi(.2,.31,.6,20),o);E.position.y=.37,d.add(E);const C=Et(qi(.315,.315,.05,20),h,{t:.02});C.position.y=.09,d.add(C);const F=Et(ti("emb",()=>new jn(.08,.22,.02)),h,{t:.012});F.position.set(0,.56,.235),F.rotation.x=-.18,d.add(F)}else{const E=Et(qi(.2,.27,.36,20),o);E.position.y=.48,d.add(E);const C=Et(we(.27,20,12),t.outfit==="ankaraDress"?o:c,{scale:[1,.55,.9]});C.position.y=.31,d.add(C)}const g=Et(we(.2,20,12),o,{scale:[1.12,.55,.95]});if(g.position.y=.66,d.add(g),t.outfit==="ankaraDress"){const E=Et(qi(.24,.37,.28,22),lt("#ffffff",{map:hs(t.pattern,t.clothColor,t.accentColor,"#fff3d6",[4,1])}));E.position.y=.24,d.add(E);const C=Et(qi(.25,.25,.05,22),h,{t:.02});C.position.y=.39,d.add(C)}if(t.outfit==="street"){const E=Et(Ki(.17,.065),o,{t:.025});E.rotation.x=Math.PI/2+.5,E.position.set(0,.72,-.1),d.add(E);const C=Et(ti("pocket",()=>new jn(.26,.1,.04)),lt(Fr(t.clothColor,-.1)),{t:.015});C.position.set(0,.42,.24),C.rotation.x=-.18,d.add(C);const F=Et(Ki(.13,.014),lt("#ffd23f"),{t:.01,cast:!1});F.rotation.x=Math.PI/2-.55,F.position.set(0,.62,.07),d.add(F)}if(t.outfit==="ankaraShirt"){const E=Et(Ki(.13,.03),h,{t:.015});E.rotation.x=Math.PI/2-.3,E.position.set(0,.69,.02),d.add(E)}const v=[],p=t.outfit==="street"||t.outfit==="kaftan";for(const E of[-1,1]){const C=new _e;C.position.set(.24*E,.64,0),C.rotation.z=.32*E;const F=Et(Or(.068,.16),p?o:s);if(F.position.y=-.12,C.add(F),!p){const S=Et(we(.09,14,10),o,{scale:[1,1.05,1]});S.position.y=-.05,C.add(S)}const _=Et(we(.074,14,10),s);_.position.y=-.255,C.add(_),n.add(C),v.push(C)}const m=new _e;m.position.y=1.08,n.add(m);const b=Et(we(.48,32,24),s,{scale:Zr,t:.04});m.add(b);for(const E of[-1,1]){const C=Et(we(.1,14,10),s,{scale:[.55,1,.8],t:.025});C.position.set(.515*E,-.07,-.02),m.add(C);const F=new Bt(we(.05,10,8),r);F.scale.set(.4,.9,.6),F.position.set(.55*E,-.07,-.01),m.add(F)}const M=lt("#1a1423"),w=new Gs({color:16777215}),D=[];for(const E of[-1,1]){const C=new _e;C.position.set(.17*E,-.04,.44),C.rotation.y=.36*E;const F=new Bt(we(.068,16,12),M);F.scale.set(.85,1.2,.5),C.add(F);const _=new Bt(we(.024,8,6),w);_.position.set(.022,.035,.03),C.add(_);const S=new Bt(we(.012,6,4),w);S.position.set(-.02,-.03,.03),C.add(S),m.add(C),D.push(C);const N=new Bt(Or(.012,.07),lt(Fr(t.hairColor,.02)));N.rotation.z=Math.PI/2+.12*E,N.position.set(.17*E,.1,.43),N.rotation.y=.36*E,m.add(N);const k=new Bt(we(.06,12,8),lt("#ff7a93",{opacity:.55}));k.scale.set(1,.55,.3),k.position.set(.28*E,-.16,.36),k.rotation.y=.6*E,m.add(k)}const T=new Bt(Ki(.045,.012,Math.PI),lt("#4a1f1a"));return T.position.set(0,-.2,.425),T.rotation.set(-.35,0,Math.PI),m.add(T),o_(t,m),e.userData={cfg:t,rig:n,legs:f,arms:v,head:m,eyes:D,mouth:T,body:d,phase:Math.random()*6,speed:0,seed:Math.random()*100,blinkT:2+Math.random()*3,bubble:null,bubbleT:0},e}function Os(i,t,e,n){const s=i.userData;s.speed+=(e-s.speed)*Math.min(1,t*10);const r=s.speed;s.phase+=t*(5+6*Math.min(r,1.6));const a=Math.sin(s.phase)*.7*Math.min(r,1.3);s.sitting||(s.legs[0].rotation.x=a,s.legs[1].rotation.x=-a),s.arms[0].rotation.x=-a*.9,s.arms[1].rotation.x=a*.9;const o=Math.sin(n*2.2+s.seed)*.008*(1-Math.min(r,1));s.rig.position.y=.03+Math.abs(Math.sin(s.phase))*.06*Math.min(r,1.3)+o,s.rig.rotation.z=Math.sin(s.phase)*.04*Math.min(r,1),s.head.rotation.z=Math.sin(n*1.3+s.seed)*.05*(1-Math.min(r,1)),s.head.rotation.x=Math.sin(n*.9+s.seed)*.03,s.blinkT-=t;let c=1;s.blinkT<0&&(c=.12,s.blinkT<-.12&&(s.blinkT=2+Math.random()*4));for(const l of s.eyes)l.scale.y=c;s.bubble&&(s.bubbleT-=t,s.bubbleT<=0&&(s.bubble.visible=!1))}function c_(i,t){const e=i.userData.mouth;t<30?(e.rotation.z=0,e.position.y=-.235):(e.rotation.z=Math.PI,e.position.y=-.2)}function Gl(i){const t=i.userData;t.legs.forEach(e=>e.rotation.x=-1.45),t.sitting=!0}function Vl(i,t,e=3){const n=i.userData;n.bubble?n.bubble.material.map=Hl(t):(n.bubble=new Ug(new Nh({map:Hl(t),depthTest:!1,transparent:!0})),n.bubble.scale.set(2.4,.75,1),n.bubble.position.y=2.15,n.bubble.renderOrder=10,i.add(n.bubble)),n.bubble.visible=!0,n.bubbleT=e}const ge=new jn(1,1,1),l_=new On(.5,.5,1,16),Wl=new On(.5,.5,1,8),br=new Fn(.5,14,10),Xl=new dc(1,1,8),Er={minX:-78,maxX:78,minZ:-27,maxZ:27},ts=[{id:"oju",name:"Ojuelegba",x:-58},{id:"yaba",name:"Yaba Market",x:-6},{id:"cms",name:"CMS",x:52}],xi={home:new R(-30,0,-13.4),generator:new R(-20.6,0,-13.2),buka:new R(18,0,-12.6),stall:new R(-26,0,10.4),spawn:new R(-30,0,-11.5)};let ja=7;const An=()=>(ja=ja*16807%2147483647,(ja-1)/2147483646),le=(i,t)=>i+An()*(t-i),Xi=i=>i[Math.floor(An()*i.length)];class h_{constructor(t){this.scene=t,this.root=new _e,t.add(this.root),this.colliders=[],this.windowsLit=[],this.windowsDark=[],this.lampLights=[],this.vehicles=[],this.npcs=[],this.walkers=[],this.produce={tomato:[],pepper:[],onion:[],plantain:[]},this.mats={window:lt("#a8dcff",{unique:!0}),windowDark:lt("#7aa3c4",{unique:!0}),bulb:lt("#fff3b0",{unique:!0}),homeWin:lt("#a8dcff",{unique:!0}),homeBulb:lt("#fff3b0",{unique:!0}),headlight:lt("#fffbe0",{unique:!0})},this.build()}add(t,e=this.root){return e.add(t),t}box(t,e,n,s,r,a,o,c={}){var f;const l=typeof s=="string"?lt(s,c.matOpts):s,h=Et(ge,l,{scale:[t,e,n],t:(f=c.t)!=null?f:.06,outline:c.outline,cast:c.cast,receive:c.receive});return h.position.set(r,a,o),c.ry&&(h.rotation.y=c.ry),c.rx&&(h.rotation.x=c.rx),c.rz&&(h.rotation.z=c.rz),this.add(h,c.parent)}cyl(t,e,n,s,r,a,o={}){var h;const c=typeof n=="string"?lt(n):n,l=Et(o.low?Wl:l_,c,{scale:[t*2,e,t*2],t:(h=o.t)!=null?h:.04,outline:o.outline,cast:o.cast});return l.position.set(s,r,a),this.add(l,o.parent)}collide(t,e,n,s){this.colliders.push({minX:t,maxX:e,minZ:n,maxZ:s})}sign(t,e,n,s,r,a,o=0,c={}){const l=kl(t,{w:512,h:Math.round(512*n/e),...c}),h=new _e;h.position.set(s,r,a),h.rotation.y=o;const f=Et(ge,lt(c.border||"#1a1423"),{scale:[e+.12,n+.12,.08],t:.03});h.add(f);const u=new Bt(new cn(e,n),lt("#ffffff",{map:l}));return u.position.z=.05,h.add(u),this.add(h)}build(){this.ground(),this.roads(),this.home(),this.buka(),this.market(),ts.forEach(t=>this.busStop(t)),this.fillers(),this.lamps(),this.powerLines(),this.palms(),this.billboards(),this.finishInstances(),this.spawnVehicles(),this.spawnNPCs()}ground(){const t=new Bt(new cn(400,260),lt("#f0d3a0"));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.add(t);for(let e=0;e<24;e++){const n=new Bt(new oa(le(1.5,4),10),lt(Xi(["#b9d98a","#e6bf86","#a7cf7b"])));n.rotation.x=-Math.PI/2,n.position.set(le(-80,80),.01,Xi([-1,1])*le(9,30)),n.receiveShadow=!0,this.add(n)}}roads(){const t=new Bt(new cn(240,10),lt("#ffffff",{map:zl(30)}));t.rotation.x=-Math.PI/2,t.position.y=.02,t.receiveShadow=!0,this.add(t);for(const a of[-1,1]){const o=new Bt(new cn(60,8),lt("#ffffff",{map:zl(7)}));o.rotation.x=-Math.PI/2,o.rotation.z=Math.PI/2,o.position.set(0,.025,a*35),o.receiveShadow=!0,this.add(o)}for(let a=0;a<6;a++)this.box(.7,.02,8,"#f6f2e8",8+a*1.2,.03,0,{outline:!1,cast:!1});const e=lt("#ffffff",{map:Xn(["#ffd23f","#1a1423"],2,!0,[40,1])}),n=lt("#ddd5c4"),s=[e,e,n,n,e,e],r=(a,o,c,l)=>{const h=new Bt(ge,s);h.scale.set(c,.18,l),h.position.set(a,.09,o),h.receiveShadow=!0,this.add(h)};for(const a of[-1,1])r(-42.5,a*6.25,75,2.5),r(42.5,a*6.25,75,2.5),r(a*5.25,-18,2.5,21),r(a*5.25,18,2.5,21);for(const a of[-1,1]){const o=new Bt(new cn(240,.5),lt("#3b3f4a"));o.rotation.x=-Math.PI/2,o.position.set(0,.015,a*7.75),this.add(o)}}window(t,e,n,s,r=1.1,a=1.2,o=!0){(o?this.windowsLit:this.windowsDark).push({x:t,y:e,z:n,ry:s,w:r,h:a})}home(){const a=new _e;this.add(a),this.box(17,3.4,7,"#f6dcb4",-30,3.4/2,-19),this.box(17+.05,1,7+.05,"#7fc8c0",-30,.5,-19,{t:.02,cast:!1});const o=lt("#ffffff",{map:Xn(["#d9773f","#b85c2c"],16,!0,[6,1])});for(const v of[-1,1]){const p=this.box(18,.16,4.4,o,-30,3.95,-19+v*1.95,{t:.04});p.rotation.x=v*.32}this.box(17+1.1,.25,.3,"#8a3b1d",-30,3.4+1.05,-19,{t:.03});const c=-19+7/2;this.box(2,2.6,.12,"#2d2a3a",-30,1.3,c+.02,{outline:!1});const l=lt("#ffffff",{map:hs("kente","#e71d36","#ffd23f","#fff3d6",[1,2])});this.box(1.8,2.2,.05,l,-30,1.45,c+.1,{t:.02}),this.box(2.6,.18,1.6,"#c9b79c",-30,.09,c+.8,{t:.03}),this.box(2.8,.15,1.8,"#8a3b1d",-30,2.95,c+.75,{t:.03}).rotation.x=.12;const h=lt("#ffffff",{map:a_(),unique:!0});this.homeBars=h;for(const v of[-36.5,-33.5,-26.5,-23.5]){this.box(1.4,1.4,.1,"#1a1423",v,1.9,c+.03,{outline:!1});const p=new Bt(new cn(1.2,1.2),h);p.position.set(v,1.9,c+.1),this.add(p)}this.homeWindowMeshes=[],this.sign("FACE-ME-I-FACE-YOU",4.2,.7,-30,3.05,c+.95,0,{bg:"#fdfcdc",sub:"No. 7 • Landlord: Baba Ade"}),this.sign("NO URINATING HERE",2.4,.5,-37,.9,c+.12,0,{bg:"#fff",fg:"#e71d36",border:"#e71d36"});const f=new Bt(new Fn(.15,10,8),this.mats.homeBulb);f.position.set(-30+1.2,2.7,c+.3),this.add(f),this.homeLight=new Wo(16765562,0,12,1.6),this.homeLight.position.set(-30,2.6,c+2.2),this.add(this.homeLight),this.collide(-30-17/2,-30+17/2,-19-7/2,-19+7/2),this.cyl(.06,2.2,"#6b4f3a",-38,1.1,-12.2),this.cyl(.06,2.2,"#6b4f3a",-33,1.1,-12.2);const u=new Bh(new xe().setFromPoints([new R(-38,2.1,-12.2),new R(-35.5,1.95,-12.2),new R(-33,2.1,-12.2)]),new Go({color:1709091}));this.add(u),["#e71d36","#2ec4b6","#ffbe0b","#8338ec"].forEach((v,p)=>{const m=lt("#ffffff",{map:hs(["circles","waves","diamonds","leaves"][p],v,"#fff3d6","#1a1423",[1,1])});this.box(.8,.9,.04,m,-37.3+p*1.2,1.5,-12.2,{t:.02})});const d=-21.2,g=-14.6;this.box(1.2,.75,.8,"#e63946",d,.45,g,{t:.04}),this.box(.7,.4,.82,"#2b2d42",d-.15,.45,g,{t:.02}),this.box(1.3,.08,.9,"#1a1423",d,.06,g,{t:.02}),this.cyl(.05,.4,"#555",d+.45,.95,g-.2,{t:.02}),this.box(.45,.55,.3,"#ffd23f",d+1,.28,g+.1,{t:.03}),this.sign("I-PASS-MY-NEIGHBOUR",1.6,.32,d,1.15,g+.42,0,{bg:"#ffd23f"}),this.genSmoke=[];for(let v=0;v<4;v++){const p=new Bt(new Fn(.15,8,6),lt("#d6d6dc",{opacity:.8}));p.position.set(d+.45,1.2+v*.3,g-.2),p.visible=!1,this.add(p),this.genSmoke.push(p)}this.collide(d-.7,d+1.3,g-.5,g+.5),this.box(.6,.08,.6,"#e71d36",-27.6,.45,-14.2,{t:.02}),this.box(.6,.6,.08,"#e71d36",-27.6,.78,-14.5,{t:.02})}buka(){for(const[r,a]of[[-4,-2.5],[4,-2.5],[-4,2.5],[4,2.5]])this.cyl(.12,3.2,"#7a5536",18+r,1.6,-17+a,{low:!0});const n=lt("#ffffff",{map:Xn(["#9fb3c8","#7f93a8"],16,!0,[5,1])});this.box(9.4,.15,6.4,n,18,3.3,-17,{rx:-.08}),this.box(9,3,.2,"#ffcf99",18,1.5,-17-2.6,{}),this.box(5,1,1.2,"#8b5a3c",18,.5,-17-.6,{}),this.box(5.1,.1,1.3,"#e9c46a",18,1.04,-17-.6,{t:.02});const s=[["#ff7b29",-1.8],["#6a994e",-.6],["#c1121f",.6],["#f4d58d",1.8]];for(const[r,a]of s)this.cyl(.38,.45,"#c9ccd6",18+a,1.32,-17-.6,{t:.03}),this.cyl(.33,.04,r,18+a,1.56,-17-.6,{outline:!1,cast:!1});this.box(3.2,.12,.6,"#a0522d",16,.5,-17+1.6,{t:.03}),this.box(3.2,.12,.6,"#a0522d",18+2.2,.5,-17+1.6,{t:.03});for(const r of[-3.5,-.5,.7,3.7])this.box(.15,.5,.5,"#6b3e1f",18+r,.25,-17+1.6,{t:.02});this.sign("MAMA PUT",4.4,1,18,3.95,-14,0,{bg:"#e71d36",fg:"#fff",sub:"Iya Basira Buka • Food dey!"}),this.box(1.2,.7,.05,"#fdfcdc",18+3.2,2.1,-17-2.45,{t:.02}),this.collide(18-4.7,18+4.7,-17-2.8,-17-2.4),this.collide(18-2.6,18+2.6,-17-1.25,-17+.05),this.bukaLight=[18,3,-17+.5]}market(){const n=[Xn(["#e71d36","#fdfcdc"],8,!0),Xn(["#3a86ff","#ffd23f"],8,!0),Xn(["#06d6a0","#fdfcdc"],8,!0),Xn(["#ff6b35","#2b2d42"],8,!0)];[[0,0],[5,0],[10,0],[0,6],[5,6],[10,6],[-5,6]].forEach(([r,a],o)=>{const c=-26+r,l=12+a;this.box(2.6,.12,1.3,"#b07a4a",c,.9,l,{t:.03});for(const[u,d]of[[-1.1,-.5],[1.1,-.5],[-1.1,.5],[1.1,.5]])this.box(.1,.9,.1,"#6b4f3a",c+u,.45,l+d,{outline:!1});this.cyl(.05,2.6,"#555",c,1.3,l+.3,{t:.02});const h=Et(Xl,lt("#ffffff",{map:n[o%4]}),{scale:[2,.7,2],t:.04});h.position.set(c,2.75,l+.3),this.add(h);const f=["tomato","pepper","onion","plantain"];for(let u=0;u<3;u++){const d=f[(o+u)%4],g=c-.8+u*.8,v=l-.1,p=d==="plantain"?[[0,0,0],[.12,0,.1],[-.1,0,.12],[0,.1,.05]]:[[0,0,0],[.2,0,0],[-.2,0,0],[.1,0,.18],[-.1,0,.18],[0,.16,.08],[.1,.16,-.06],[-.1,.16,-.06],[0,.3,.02]];for(const m of p)this.produce[d].push([g+m[0],1.06+m[1],v+m[2]])}this.collide(c-1.35,c+1.35,l-.7,l+.7)}),this.sign("YOUR STALL",2.2,.5,-26,1.45,12-.68,Math.PI,{bg:"#06d6a0"}),this.sign("YOUR STALL",2.2,.5,-26,1.45,12-.68,0,{bg:"#06d6a0"}),this.sign("YABA MARKET",5,1,-21,4,12-1.6,0,{bg:"#ffd23f",sub:"Buy am sharp-sharp • No credit today"}),this.cyl(.1,4,"#555",-26+2.6,2,12-1.6,{t:.02}),this.cyl(.1,4,"#555",-26+7.4,2,12-1.6,{t:.02}),this.marketCenter=[-21,3,15]}busStop(t){const e=t.x,n=8.4;this.cyl(.08,2.6,"#2b2d42",e-1.8,1.3,n,{t:.02}),this.cyl(.08,2.6,"#2b2d42",e+1.8,1.3,n,{t:.02}),this.box(4.4,.15,1.8,"#3a86ff",e,2.65,n,{t:.04}),this.box(3.4,.1,.5,"#fdfcdc",e,.55,n+.2,{t:.03}),this.box(3.4,.6,.06,"#9fb3c8",e,1.4,n+.85,{t:.02}),this.sign(t.name.toUpperCase(),3.2,.6,e,3.15,n,0,{bg:"#ffd23f",sub:"BUS STOP • Danfo dey come"}),this.collide(e-2,e+2,n+.3,n+1)}building({x:t,z:e,w:n,d:s,h:r,color:a,face:o,sign:c,signBg:l="#fdfcdc",sub:h=null,awning:f=null,tank:u=!0}){const d=o>0?0:Math.PI;this.box(n,r,s,a,t,r/2,e,{t:.07}),this.box(n+.3,.45,s+.3,Yl(a,-.15),t,r+.2,e,{t:.05});const g=e+o*(s/2+.05),v=Math.max(1,Math.floor(r/3)),p=Math.max(1,Math.floor(n/2.6));for(let m=0;m<v;m++){const b=1.6+m*3;for(let M=0;M<p;M++){const w=t-n/2+n/p*(M+.5);m===0&&c&&Math.abs(w-t)<1.4||this.window(w,b,g,d,1.1,1.3,An()<.72)}m>0&&An()<.45&&this.box(n*.5,.12,.8,Yl(a,-.1),t+le(-n/4,n/4),b-.9,g+o*.4,{t:.03})}if(c&&(this.box(1.4,2.3,.1,"#3d2c2e",t,1.15,g,{outline:!1}),this.sign(c,Math.min(n-1,6),1,t,2.9,g+o*.1,d,{bg:l,sub:h})),f){const m=lt("#ffffff",{map:Xn(f,10,!0,[2,1])}),b=this.box(Math.min(n-.5,6.5),.1,1.4,m,t,2.25,g+o*.7,{t:.03});b.rotation.x=o*.3}u&&(this.cyl(.65,1.3,"#2b2d42",t+n/2-1.2,r+1,e-o*(s/2-1.2),{t:.04}),An()<.6&&this.box(.8,.5,.5,"#e5e5e5",t-n/2+1.2,r+.65,e,{t:.03})),this.collide(t-n/2,t+n/2,e-s/2,e+s/2)}fillers(){[{x:-62,z:-18,w:11,d:8,h:6.5,color:"#ff9eb5",face:1,sign:"GOD'S TIME IS BEST",sub:"Barbing Salon • Low cut ₦1,500",awning:["#e71d36","#fdfcdc"]},{x:-49,z:-18,w:9,d:8,h:9.5,color:"#7fd1c7",face:1},{x:-11,z:-18,w:10,d:8,h:6.5,color:"#ffe066",face:1,sign:"MAMA NKECHI",sub:"Provisions & Pure Water",awning:["#3a86ff","#fdfcdc"]},{x:34,z:-18,w:12,d:9,h:12.5,color:"#c3b1f0",face:1},{x:50,z:-18,w:10,d:8,h:6.5,color:"#9be7a4",face:1,sign:"GISTME PHONES",sub:"Repairs • Recharge card • Data",signBg:"#8338ec",awning:["#8338ec","#ffd23f"]},{x:65,z:-18,w:11,d:8,h:9.5,color:"#ffb38a",face:1},{x:-64,z:18,w:11,d:8,h:9.5,color:"#a0d8ff",face:-1},{x:-46,z:17,w:9,d:7,h:6.5,color:"#ffd6a5",face:-1,sign:"NO FOOD FOR LAZY MAN",sub:"Enterprises Ltd",awning:["#06d6a0","#fdfcdc"]},{x:13,z:18,w:11,d:8,h:6.5,color:"#fdfcdc",face:-1,sign:"HOLY GHOST FIRE",sub:"Assembly • Vigil every Friday",signBg:"#3a86ff"},{x:29,z:18,w:9,d:7,h:9.5,color:"#ff8fab",face:-1,sign:"ALHAJI PHARMACY",sub:"Paracetamol dey",signBg:"#06d6a0"},{x:46,z:18,w:12,d:9,h:6.5,color:"#b8f2e6",face:-1},{x:64,z:18,w:11,d:8,h:12.5,color:"#ffe066",face:-1}].forEach(s=>this.building(s));for(let s=0;s<18;s++)for(const r of[-1,1]){const a=le(8,14),o=le(8,22),c=-90+s*10.5+le(-2,2),l=r*le(36,44),h=Xi(["#ffc8dd","#bde0fe","#cdb4db","#ffd6a5","#caffbf","#fdffb6","#a0c4ff"]);this.box(a,o,le(7,10),h,c,o/2,l,{t:.08,cast:!1});const f=Math.floor(o/3);for(let u=0;u<f;u++)for(let d=0;d<Math.floor(a/3);d++)this.window(c-a/2+1.5+d*3,1.6+u*3,l-r*4.5,r>0?Math.PI:0,1.1,1.3,An()<.6)}}lamps(){this.lampPositions=[];for(let e=-70;e<=70;e+=20)for(const n of[-1,1]){const s=e+(n>0?10:0),r=n*7.2;if(Math.abs(s)<7||s>76)continue;this.cyl(.08,5,"#4a4e5c",s,2.5,r,{t:.025,low:!0}),this.box(.1,.1,1.4,"#4a4e5c",s,4.95,r-n*.6,{t:.02}),this.box(.5,.18,.4,"#2b2d42",s,4.9,r-n*1.25,{t:.02});const a=new Bt(ge,this.mats.bulb);a.scale.set(.38,.06,.3),a.position.set(s,4.79,r-n*1.25),this.add(a),this.lampPositions.push([s,4.6,r-n*1.25])}const t=[[-30,4.2,-9],[18,4.5,-9],[-21,4.5,9],[-58,4.5,6],[-6,4.5,6],[52,4.5,6],[0,4.5,0]];for(const e of t){const n=new Wo(16762219,0,18,1.4);n.position.set(...e),this.add(n),this.lampLights.push(n)}}powerLines(){const t=[],e=[];for(let s=-76;s<=76;s+=16)this.cyl(.13,7.2,"#7a5536",s,3.6,-8.1,{t:.03,low:!0}),this.box(1.6,.12,.12,"#7a5536",s,6.8,-8.1,{t:.02}),e.push(s);this.box(.8,1,.7,"#7d8597",-12,5.4,-8.1,{t:.03});for(let s=0;s<e.length-1;s++)for(const r of[-.7,0,.7]){const a=new R(e[s],6.85,-8.1+r*.01),o=new R(e[s+1],6.85,-8.1+r*.01),c=8;for(let l=0;l<c;l++){const h=l/c,f=(l+1)/c,u=a.clone().lerp(o,h),d=a.clone().lerp(o,f);u.x+=r,d.x+=r,u.z=-8.1+r*.3,d.z=u.z,u.y-=Math.sin(Math.PI*h)*.9,d.y-=Math.sin(Math.PI*f)*.9,t.push(u,d)}}const n=new xe().setFromPoints(t);this.add(new Og(n,new Go({color:1709091})))}palm(t,e,n=5){const s=lt("#9c6b3e");let r=t,a=0;const o=le(-.15,.15);for(let l=0;l<5;l++){const h=Et(Wl,s,{scale:[.36-l*.03,n/5+.05,.36-l*.03],t:.03});h.position.set(r,a+n/10,e),h.rotation.z=o,this.add(h),r-=Math.sin(o)*n/5,a+=n/5}const c=lt("#3bb273");for(let l=0;l<7;l++){const h=l/7*Math.PI*2,f=Et(Xl,c,{scale:[.35,2.6,.12],t:.03}),u=new _e;u.position.set(r,a,e),u.rotation.y=h,this.add(u),f.position.set(0,.2,1.1),f.rotation.x=Math.PI/2+.45,u.add(f)}this.add(Et(br,lt("#6b4f1d"),{scale:[.5,.5,.5],t:.02})).position.set(r,a-.1,e),this.collide(t-.3,t+.3,e-.3,e+.3)}palms(){[[-42,-11],[-16,-11],[26,-11],[42,-11],[-52,11],[-38,11],[8.5,11],[22,11],[38,11],[58,-11],[-70,-11],[70,11]].forEach(([t,e])=>this.palm(t,e,le(4.5,6.5)))}billboards(){const t=(e,n,s,r,a,o,c="#1a1423")=>(this.cyl(.18,7,"#4a4e5c",s-2.5,3.5,r,{low:!0}),this.cyl(.18,7,"#4a4e5c",s+2.5,3.5,r,{low:!0}),this.sign(e,7.5,3,s,8.3,r,a,{bg:o,fg:c,sub:n,w:768}));t("LapoPay","Quick loan sharp-sharp! *wahala dey",4,-26,0,"#06d6a0"),t("GistMe","Gist wey sweet pass suya 📱",-18,27,Math.PI,"#ffd23f")}finishInstances(){const t=new fe,e=(s,r)=>{if(!s.length)return null;const a=new _r(ge,r,s.length),o=new _r(ge,lt("#2b2d42"),s.length);return s.forEach((c,l)=>{t.position.set(c.x,c.y,c.z),t.rotation.set(0,c.ry,0),t.scale.set(c.w,c.h,.08),t.translateZ(.06),t.updateMatrix(),a.setMatrixAt(l,t.matrix),t.position.set(c.x,c.y,c.z),t.scale.set(c.w+.22,c.h+.22,.06),t.updateMatrix(),o.setMatrixAt(l,t.matrix)}),this.add(a),this.add(o),a};e(this.windowsLit,this.mats.window),e(this.windowsDark,this.mats.windowDark);const n={tomato:["#e63946",.11,br],pepper:["#d00000",.08,br],onion:["#9d4edd",.12,br],plantain:["#ffd23f",.1,new aa(.5,1.6,3,8)]};for(const[s,[r,a,o]]of Object.entries(n)){const c=this.produce[s];if(!c.length)continue;const l=new _r(o,lt(r),c.length),h=new _r(o,qh,c.length);c.forEach((f,u)=>{t.position.set(...f),t.rotation.set(0,u,s==="plantain"?Math.PI/2:0),t.scale.setScalar(a*2),t.updateMatrix(),l.setMatrixAt(u,t.matrix),t.scale.setScalar(a*2+.04),t.updateMatrix(),h.setMatrixAt(u,t.matrix)}),l.castShadow=!0,this.add(l),this.add(h)}}makeDanfo(){const t=new _e,e=lt("#ffc300"),n=Et(ge,e,{scale:[4.6,1.75,2],t:.06});n.position.y=1.25,t.add(n);const s=Et(ge,e,{scale:[.7,.9,1.9],t:.05});s.position.set(2.6,.82,0),t.add(s);for(const d of[.78,1.02]){const g=new Bt(ge,lt("#1a1423"));g.scale.set(4.62,.09,2.02),g.position.y=d,t.add(g)}const r=lt("#3d5a80"),a=new Bt(ge,r);a.scale.set(3.6,.6,2.03),a.position.set(-.3,1.65,0),t.add(a);const o=new Bt(ge,r);o.scale.set(.05,.6,1.7),o.position.set(2.31,1.65,0),t.add(o);const c=Et(ge,lt("#2b2d42"),{scale:[3.4,.08,1.7],t:.03});c.position.set(-.2,2.25,0),t.add(c);const l=new Bt(ge,this.mats.headlight);l.scale.set(.06,.2,1.5),l.position.set(2.96,.95,0),t.add(l);const h=Et(ge,lt("#d9d9d9"),{scale:[.15,.2,2],t:.02});h.position.set(2.98,.5,0),t.add(h);const f=new On(.4,.4,.3,14);for(const[d,g]of[[1.7,1],[1.7,-1],[-1.6,1],[-1.6,-1]]){const v=Et(f,lt("#1a1423"),{t:.02});v.rotation.x=Math.PI/2,v.position.set(d,.4,g),t.add(v)}const u=this.signMesh("OSHODI-OYINGBO",1.8,.32,"#fdfcdc");return u.position.set(2.32,2.08,0),u.rotation.y=Math.PI/2,t.add(u),t}signMesh(t,e,n,s){const r=kl(t,{w:512,h:Math.round(512*n/e),bg:s});return new Bt(new cn(e,n),lt("#ffffff",{map:r}))}makeKeke(){const t=new _e,e=lt("#ffd23f"),n=lt("#2a9d8f"),s=Et(ge,e,{scale:[2.3,.7,1.3],t:.05});s.position.set(0,.75,0),t.add(s);const r=Et(ge,n,{scale:[.6,1.1,.9],t:.04});r.position.set(1.15,1,0),t.add(r);const a=Et(ge,n,{scale:[2.3,.12,1.4],t:.04});a.position.set(-.1,2.15,0),t.add(a);for(const[f,u]of[[.95,.6],[.95,-.6],[-1.15,.6],[-1.15,-.6]]){const d=Et(ge,lt("#2b2d42"),{scale:[.08,1.1,.08],t:.02});d.position.set(f,1.6,u),t.add(d)}const o=Et(ge,lt("#3a2a20"),{scale:[.6,.5,1.1],t:.02});o.position.set(-.6,1.25,0),t.add(o);const c=new On(.3,.3,.2,12);for(const[f,u]of[[1.2,0],[-.8,.65],[-.8,-.65]]){const d=Et(c,lt("#1a1423"),{t:.02});d.rotation.x=Math.PI/2,d.position.set(f,.3,u),t.add(d)}const l=new Bt(ge,this.mats.headlight);l.scale.set(.05,.18,.4),l.position.set(1.46,1.1,0),t.add(l);const h=Ns({...Nr(An),hair:"cap",outfit:"street"});return h.scale.setScalar(.8),h.position.set(.45,.95,0),h.rotation.y=Math.PI/2,Gl(h),t.add(h),t.userData.driver=h,t}spawnVehicles(){const t=[{z:2.4,dir:1},{z:-2.4,dir:-1}];for(let e=0;e<5;e++){const n=t[e%2],s=this.makeDanfo();s.rotation.y=n.dir>0?0:Math.PI,s.position.set(-85+e*37,0,n.z),this.add(s),this.vehicles.push({mesh:s,type:"danfo",axis:"x",dir:n.dir,speed:le(8,11),base:le(8,11),wait:0,len:3,half:1.1,lastStop:null})}for(let e=0;e<3;e++){const n=e%2?1:-1,s=this.makeKeke();s.rotation.y=n>0?-Math.PI/2:Math.PI/2,s.position.set(n>0?-1.8:1.8,0,-45+e*30),this.add(s),this.vehicles.push({mesh:s,type:"keke",axis:"z",dir:n,speed:6,base:le(5.5,7),wait:0,len:1.5,half:.8})}}spawnNPCs(){const t=["Chinedu","Bisi","Emeka","Aisha","Segun","Ngozi","Femi","Zainab","Kunle","Amaka","Musa","Yetunde","Obinna","Halima"];for(let n=0;n<14;n++){const s=Nr(An);s.name=t[n];const r=Ns(s);this.add(r);const a=n%2?1:-1,o={mesh:r,z:a*le(5.6,6.9),x:le(-70,70),tx:0,speed:le(1.3,2),wait:le(0,3),talkT:le(4,20)};o.tx=o.x,r.position.set(o.x,.18,o.z),this.walkers.push(o)}const e=(n,s,r,a,o=!1,c=null,l=null)=>{const h=Ns({...Nr(An),...n});return h.position.set(s,l!=null?l:this.groundHeight(s,r),r),h.rotation.y=a,o&&Gl(h),this.add(h),this.npcs.push({mesh:h,lines:c,talkT:le(3,12)}),this.colliders.push({minX:s-.35,maxX:s+.35,minZ:r-.35,maxZ:r+.35}),h};e({name:"Iya Basira",hair:"gele",outfit:"ankaraDress",clothColor:"#e71d36",accentColor:"#ffd23f",pattern:"circles",skin:"#5a3218"},18,-18,0,!1,["Food dey!","Jollof hot!","Come chop o!"]),e({name:"Baba Ade",hair:"cap",outfit:"kaftan",clothColor:"#fdfcdc",accentColor:"#3a86ff",skin:"#432513"},-27.6,-14.1,.3,!0,["Rent na Saturday o!","My money nko?","How work?"],.2),e({name:"Mama Tomato",hair:"gele",outfit:"ankaraDress",clothColor:"#06d6a0",accentColor:"#ff6b35"},-21,13,Math.PI,!1,["Tomato dey!","Buy pepper!"]),e({name:"Iya Onions",hair:"braids",outfit:"ankaraDress",clothColor:"#8338ec",accentColor:"#ffd23f"},-16,13,Math.PI,!1,["Onions cheap!","Customer!"]),e({name:"Uncle Musa",hair:"cap",outfit:"kaftan",clothColor:"#2ec4b6",accentColor:"#fdfcdc"},-26,19,Math.PI,!1,["Plantain sweet!"]),e({name:"Conductor",hair:"lowcut",outfit:"street",clothColor:"#e71d36"},-6+2.4,7,-.4,!1,["Oshodi! Oshodi!","Enter with change!","CMS! CMS!"]),e({name:"Waiting",hair:"braids",outfit:"street",clothColor:"#3a86ff"},-58-.8,8.5,0,!0,["Danfo where?","This sun ehn"],.3),e({name:"Waiting2",hair:"afro",outfit:"ankaraShirt",clothColor:"#ffbe0b"},52+.6,8.5,0,!0,["I don late!"],.3)}update(t,e,n,s){for(const r of this.vehicles){const a=r.mesh;let o=r.base;if(r.wait>0&&(r.wait-=t,o=0),r.type==="danfo"&&r.dir>0)for(const h of ts)Math.abs(a.position.x-(h.x-1))<.4&&r.lastStop!==h.id&&(r.wait=2.5,r.lastStop=h.id,Math.random()<.6&&(this.bark={pos:a.position.clone(),text:Xi(["Oshodi! Oshodi!","Enter with your change!",`${h.name}! Wole!`])}));r.type==="keke"&&Math.abs(a.position.z+r.dir*4)<6.5&&this.vehicles.some(f=>f.type==="danfo"&&Math.abs(f.mesh.position.x)<7)&&(o=0);const c=r.axis==="x"?(n.x-a.position.x)*r.dir:(n.z-a.position.z)*r.dir,l=r.axis==="x"?Math.abs(n.z-a.position.z):Math.abs(n.x-a.position.x);c>0&&c<r.len+3&&l<r.half+.6&&(o=0),r.speed+=(o-r.speed)*Math.min(1,t*3),r.axis==="x"?(a.position.x+=r.speed*r.dir*t,a.position.x>95&&(a.position.x=-95,r.lastStop=null),a.position.x<-95&&(a.position.x=95,r.lastStop=null)):(a.position.z+=r.speed*r.dir*t,a.position.z>50&&(a.position.z=-50),a.position.z<-50&&(a.position.z=50)),a.position.y=Math.abs(Math.sin(e*9+a.id))*.04*Math.min(1,r.speed)}for(const r of this.walkers){const a=r.mesh;let o=0;if(r.wait>0)r.wait-=t;else{const c=r.tx-a.position.x;if(Math.abs(c)<.2)r.wait=le(1,5),r.tx=Xr.clamp(a.position.x+le(-25,25),-74,74);else{const l=Math.sign(c)*r.speed*t;Math.hypot(n.x-a.position.x,n.z-a.position.z)<1&&Math.sign(n.x-a.position.x)===Math.sign(c)||(a.position.x+=l,o=1);const f=c>0?Math.PI/2:-Math.PI/2;a.rotation.y+=(f-a.rotation.y)*Math.min(1,t*8)}}r.talkT-=t,r.talkT<0&&(r.talkT=le(10,25),Math.hypot(n.x-a.position.x,n.z-a.position.z)<18&&Vl(a,Xi(s.lines()),3)),Os(a,t,o,e)}for(const r of this.npcs)r.talkT-=t,r.talkT<0&&r.lines&&(r.talkT=le(8,18),Math.hypot(n.x-r.mesh.position.x,n.z-r.mesh.position.z)<14&&Vl(r.mesh,Xi(s.power?r.lines:[...r.lines,"NEPA don take light!"]),3)),Os(r.mesh,t,0,e);for(const r of this.vehicles)r.mesh.userData.driver&&Os(r.mesh.userData.driver,t,0,e);this.genSmoke.forEach((r,a)=>{if(r.visible=s.genRunning,s.genRunning){const o=(e*.8+a*.25)%1;r.position.y=1.15+o*1.4,r.scale.setScalar(.6+o*1.4),r.position.x=-20.75+Math.sin(e+a)*.1}})}resolve(t,e=.35){for(const n of this.colliders){const s=Math.max(n.minX,Math.min(t.x,n.maxX)),r=Math.max(n.minZ,Math.min(t.z,n.maxZ)),a=t.x-s,o=t.z-r,c=a*a+o*o;if(c<e*e)if(c>1e-8){const l=Math.sqrt(c);t.x=s+a/l*e,t.z=r+o/l*e}else{const l=[t.x-n.minX,n.maxX-t.x,t.z-n.minZ,n.maxZ-t.z],h=l.indexOf(Math.min(...l));h===0?t.x=n.minX-e:h===1?t.x=n.maxX+e:h===2?t.z=n.minZ-e:t.z=n.maxZ+e}}for(const n of this.vehicles){const s=n.mesh.position,r=n.axis==="x"?2.9:n.half,a=n.axis==="x"?1.05:1.4,o=Math.max(s.x-r,Math.min(t.x,s.x+r)),c=Math.max(s.z-a,Math.min(t.z,s.z+a)),l=t.x-o,h=t.z-c,f=l*l+h*h;if(f<e*e)if(f>1e-8){const u=Math.sqrt(f);t.x=o+l/u*e,t.z=c+h/u*e}else n.axis==="x"?t.z=t.z>s.z?s.z+a+e:s.z-a-e:t.x=t.x>s.x?s.x+r+e:s.x-r-e}for(const n of this.walkers){const s=t.x-n.mesh.position.x,r=t.z-n.mesh.position.z,a=Math.hypot(s,r);a<.7&&a>1e-4&&(t.x=n.mesh.position.x+s/a*.7,t.z=n.mesh.position.z+r/a*.7)}t.x=Math.max(Er.minX,Math.min(Er.maxX,t.x)),t.z=Math.max(Er.minZ,Math.min(Er.maxZ,t.z))}groundHeight(t,e){const n=Math.abs(e),s=Math.abs(t);return n>5&&n<7.5||s>4&&s<6.5&&n>7.5&&n<28.5?.18:0}}function Yl(i,t){const e=new Dt(i),n={};return e.getHSL(n,De),e.setHSL(n.h,n.s,Math.max(0,Math.min(1,n.l+t)),De),"#"+e.getHexString()}const Fs=8e3,ql=2e3,u_=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],d_=3,tu=.05,jr=[{id:"Lapo",min:-1/0,label:"Lapo",blurb:"Starting from zero, hustling with everything."},{id:"Hustler",min:5e4,label:"Small Hustler",blurb:"Money don small enter. No dull."},{id:"Odogwu",min:25e4,label:"Odogwu",blurb:"Big boy/Big girl things."}],$l=i=>Math.round(i/50)*50,fn=(i,t=0,e=100)=>Math.max(t,Math.min(e,i)),wr=i=>i[Math.floor(Math.random()*i.length)],Tt=i=>"₦"+Math.round(i).toLocaleString("en-NG");function f_(i){return{v:1,name:i,t:7*60,cash:4e3,loan:0,rentOwed:Fs,strikes:0,warnedSat:!1,hunger:70,energy:85,mood:65,fuel:0,genOn:!0,power:!0,fuelFactor:1,marketBonus:1,marketBonusUntil:0,feed:[],unread:0,nextNews:7*60+45,stats:{earned:0,sold:0,meals:0},evicted:!1,player:null}}const p_=[["@LagosTraffic","Third Mainland Bridge don lock. Una wey dey go Island, carry your patience 🚗🚗🚗"],["@IyaBasira","Fresh jollof don land for buka! Party jollof, smoky bottom pot 🔥🍛"],["@Danfo_Oshodi",'Conductor say "No change" — but I know say you get ₦50 for that pocket 😤'],["@YabaLeftBoy","Who get charger? My phone don dey 2% since morning"],["@MamaNkechi","Pure water don land. Cold one dey ₦50. Sharp sharp!"],["@GistMeNews","Lagos weather: Sun go shine like say e get vendetta. Drink water 💧"],["@Area_Fada","Who wan buy original iPhone 16 for ₦40k? Na from abroad 👀 (Scam alert ⚠️)"],["@PastorFire","Vigil this Friday! Holy Ghost Fire Assembly. Come with your neighbour 🙏"],["@BarberSalon","God's Time Is Best Barbing Salon: low cut ₦1,500, no shaking 💈"],["@NaijaFootball","Super Eagles go win this one. I feel am for my spirit ⚽🦅"],["@Lagos_Landlord","Tenants wey dey owe, I dey watch una o. Saturday no far 👀"]];class m_{constructor(t,e){this.s=t,this.h=e,this.acc=0,this.collapsed=!1,t.feed.length||(this.post("@GistMeNews",`Welcome to GistMe, ${t.name}! You don land Lagos. Rent na ${Tt(Fs)} every Saturday. No dull o! 🏙️`,"info"),this.post("@LapoPay","Hustle never start? LapoPay fit borrow you up to ₦15,000 — interest small (5% every day 👀).","ad"))}get day(){return Math.floor(this.s.t/1440)+1}get min(){return this.s.t%1440}get hour(){return this.min/60}get weekday(){return Math.floor(this.s.t/1440)%7}get isNight(){const t=this.hour;return t<6||t>=19}get genRunning(){return!this.s.power&&this.s.genOn&&this.s.fuel>0}get homePowered(){return this.s.power||this.genRunning}get danfoFare(){return $l(200*this.s.fuelFactor)}get fuelPrice(){return $l(1200*this.s.fuelFactor)}get netWorth(){return this.s.cash-this.s.loan-this.s.rentOwed}get tier(){let t=jr[0];for(const e of jr)this.netWorth>=e.min&&(t=e);return t}timeStr(t=this.s.t){const e=t%1440;return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}dayStr(t=this.s.t){return u_[Math.floor(t/1440)%7]}rentCountdown(){let t=(6-this.weekday+7)%7;return t===0&&(t=7),t*1440-this.min-(this.weekday===6,0)}post(t,e,n="gist"){var s,r;this.s.feed.unshift({t:this.s.t,handle:t,text:e,kind:n}),this.s.feed.length>40&&(this.s.feed.length=40),this.s.unread++,(r=(s=this.h).onPost)==null||r.call(s,{handle:t,text:e,kind:n})}earn(t,e){var n,s;this.s.cash+=t,t>0&&(this.s.stats.earned+=t),(s=(n=this.h).onCash)==null||s.call(n,t,e)}spend(t){var e,n;return this.s.cash<t?!1:(this.s.cash-=t,(n=(e=this.h).onCash)==null||n.call(e,-t),!0)}update(t){for(this.acc+=t*d_;this.acc>=1;)this.acc-=1,this.tick({})}advance(t,e={}){for(let n=0;n<t;n++)this.tick(e)}tick(t){var o,c;const e=this.s;if(e.evicted)return;e.t+=1;const n=l=>l/60,s=!!t.sleeping,r=!!t.working;e.hunger=fn(e.hunger-n(s?2:r?7:4.5)),s?e.energy=fn(e.energy+n(this.homePowered?13:8)):e.energy=fn(e.energy-n(r?9:3.5)-(e.hunger<=0?n(4):0));let a=62;e.hunger<25&&(a-=25),e.energy<20&&(a-=15),!e.power&&this.isNight&&!this.genRunning&&(a-=12),e.rentOwed>0&&this.weekday>=4&&(a-=8),e.loan>0&&(a-=5),e.mood=fn(e.mood+(a-e.mood)*n(.12)),s&&!this.homePowered&&(e.mood=fn(e.mood-n(1.5))),e.t%60===0&&this.onHour(t),e.t%1440===0&&this.onDay(),!s&&e.energy<=0&&!this.collapsed&&(this.collapsed=!0,(c=(o=this.h).onCollapse)==null||c.call(o))}onHour(t){var s,r,a,o;const e=this.s,n=Math.round(this.hour)%24;if(e.power){const c=this.isNight?.2:.1;Math.random()<c&&this.setPower(!1)}else Math.random()<.3&&this.setPower(!0);this.genRunning&&(e.fuel=Math.max(0,e.fuel-1),e.fuel===0&&((r=(s=this.h).toast)==null||r.call(s,"Generator don finish fuel! 😩","warn"),this.post("@You","Gen don off. Fuel don finish. Heat go kill me tonight 🥵","gist"))),e.marketBonusUntil&&e.t>=e.marketBonusUntil&&(e.marketBonus=1,e.marketBonusUntil=0),this.weekday===5&&n===12&&e.rentOwed>0&&!e.warnedSat&&(e.warnedSat=!0,this.post("@Baba_Ade_Landlord",`${e.name}, today na Saturday o. ${Tt(e.rentOwed)} rent dey due before midnight. I no wan hear story! 😠`,"alert"),(o=(a=this.h).toast)==null||o.call(a,`Rent due tonight: ${Tt(e.rentOwed)}!`,"bad")),e.t>=e.nextNews&&!t.sleeping&&(this.newsEvent(),e.nextNews=e.t+180+Math.floor(Math.random()*180))}setPower(t){var n,s,r,a;const e=this.s;e.power!==t&&(e.power=t,t?(this.post("@Everybody",wr(["UP NEPA!!! 💡🎉","Light don come! Make I quickly charge my phone 🔌","NEPA bring light! Everybody shout for street 😂"]),"good"),(a=(r=this.h).onPower)==null||a.call(r,!0)):(this.post("@NEPA_Updates",wr(["Due to technical fault, power supply don go. We regret any inconvenience 🙏","Grid don collapse again. Una get gen?","Load shedding in progress. Light go come back soon (maybe) 🕯️"]),"alert"),(s=(n=this.h).onPower)==null||s.call(n,!1)))}onDay(){var n,s,r,a;const t=this.s,e=this.weekday;if(e===6)if(t.rentOwed>0){if(t.strikes++,t.rentOwed+=ql,t.strikes>=2){t.evicted=!0,this.post("@Baba_Ade_Landlord","Pack your load commot for my house! I don give you enough chance. 🧳","alert"),(s=(n=this.h).onEvict)==null||s.call(n);return}this.post("@Baba_Ade_Landlord",`You no pay rent! I don add ${Tt(ql)} late fee. Next Saturday if you no pay, I go throw your load comot! ⚠️`,"alert"),(a=(r=this.h).onEvictionWarning)==null||a.call(r)}else this.post("@Baba_Ade_Landlord","Rent don enter. God bless you my pikin 🙏","good");if(e===0&&(t.rentOwed+=Fs,t.warnedSat=!1,this.post("@Baba_Ade_Landlord",`New week, new rent: ${Tt(Fs)} due Saturday. Hustle well!`,"info")),t.loan>0){const o=Math.ceil(t.loan*tu);t.loan+=o,this.post("@LapoPay",`Daily interest: +${Tt(o)}. Your LapoPay balance na ${Tt(t.loan)}. Pay quick-quick before we call your contacts 📞`,"ad")}}newsEvent(){const t=this.s,e=[{w:3,run:()=>{var a,o;const r=wr([1.2,1.3,1.5]);t.fuelFactor=Math.min(3,+(t.fuelFactor*r).toFixed(2)),this.post("@GistMeNews",`BREAKING: Petrol price don jump again! ⛽ Danfo fare don rise to ${Tt(this.danfoFare)}. Gen fuel now ${Tt(this.fuelPrice)}. Conductors dey shout "No change!" 😩`,"alert"),(o=(a=this.h).toast)==null||o.call(a,`Fuel price hike! Danfo fare now ${Tt(this.danfoFare)}`,"bad")}},{w:t.fuelFactor>1.1?1.5:0,run:()=>{t.fuelFactor=Math.max(1,+(t.fuelFactor*.85).toFixed(2)),this.post("@GistMeNews",`Petrol price don small drop. Danfo fare now ${Tt(this.danfoFare)}. We thank God 🙏`,"good")}},{w:2,run:()=>{var r,a;t.marketBonus=1.5,t.marketBonusUntil=t.t+1440,this.post("@Mile12Market","Tomato scarcity for Mile 12! 🍅 Prices up 50% for next 24 hours. Market people, una time don reach!","good"),(a=(r=this.h).toast)==null||a.call(r,"Market prices up 50% today! 🍅","good")}},{w:t.cash>400?1:0,run:()=>{var r,a;t.cash-=200,t.mood=fn(t.mood-6),this.post("@You",'Agbero collect ₦200 "owo ile" from me for junction. E pain me but wetin I go do? 😤',"alert"),(a=(r=this.h).toast)==null||a.call(r,"Agbero collect ₦200 from you 😤","bad")}},{w:1,run:()=>{var r,a;t.hunger=fn(t.hunger+15),t.mood=fn(t.mood+10),this.post("@AdeniranStreet","Owambe for street! 🎉 Dem share small chops and asun — you collect your own. Belle don sweet!","good"),(a=(r=this.h).toast)==null||a.call(r,"Owambe small chops! +Belle +Mood","good")}},{w:1,run:()=>{t.mood=fn(t.mood-5),this.post("@LagosWeather","Rain don fall! 🌧️ Gutter don overflow for Ojuelegba. Traffic for Ikorodu Road na 3 hours.","info")}},{w:1,run:()=>{t.mood=fn(t.mood+8),this.post("@GistMeTrends",`${t.name} Ankara fit don trend for GistMe! 🔥 312 likes. Odogwu!`,"good")}},{w:1,run:()=>this.post("@MinistryOfPower","Government promise 24 hours light from next week. 💡 Lagos people: 😂😂😂","info")},{w:1,run:()=>this.post("@NairaWatch","Naira don fall again for parallel market 📉. Mama Nkechi don increase bread price by ₦100.","info")},{w:3,run:()=>{const[r,a]=wr(p_);this.post(r,a,"gist")}}],n=e.reduce((r,a)=>r+a.w,0);let s=Math.random()*n;for(const r of e)if(s-=r.w,s<=0){r.run();break}}borrow(t){const e=this.s;return e.loan+t>15e3?!1:(e.loan+=Math.round(t*1.1),this.earn(t,"LapoPay loan"),this.post("@LapoPay",`Congrats! ${Tt(t)} don land your wallet. (10% processing fee added — na small thing 😅)`,"ad"),!0)}repay(t){const e=this.s;return t=Math.min(t,e.loan,e.cash),t<=0?0:(e.cash-=t,e.loan-=t,e.loan===0&&this.post("@LapoPay","Loan cleared! You be correct customer 👏 Come borrow again anytime.","ad"),t)}payRent(t){const e=this.s;return t=Math.min(t,e.rentOwed,e.cash),t<=0?0:(e.cash-=t,e.rentOwed-=t,e.rentOwed===0&&(e.strikes=0,this.post("@Baba_Ade_Landlord","Rent don complete. Correct tenant! 🙏","good")),t)}buyFuel(){return this.spend(this.fuelPrice)?(this.s.fuel=Math.min(24,this.s.fuel+5),!0):!1}}const Yi=[{id:"tomato",e:"🍅",name:"Tomato",price:70,col:"#e63946"},{id:"pepper",e:"🌶️",name:"Pepper",price:50,col:"#d00000"},{id:"onion",e:"🧅",name:"Onions",price:60,col:"#9d4edd"},{id:"plantain",e:"🍌",name:"Plantain",price:120,col:"#ffd23f"},{id:"egg",e:"🥚",name:"Egg",price:40,col:"#fdfcdc"}],Kl=["👩🏾","👨🏿","👵🏾","👴🏿","🧕🏾","👨🏾‍🦱","👩🏿‍🦱","🧔🏾"],g_=["Mama Tobi","Oga Emeka","Aunty Funke","Baba Sule","Sister Ngozi","Bro Tayo","Iya Ibeji","Mr Okon"],__=["Abeg give me","I wan buy","Oya sell me","How much for","Quick quick, give me"],v_=["Thank you o! 🙏","God bless your market!","Correct seller! 👌","I go come back tomorrow!"],x_=["Na wetin I ask for be this?! 😤","You dey whine me?","Abeg focus! 🙄"],M_=["You too slow! I don go another stall 😒","Time no dey for me o!"],Tr=i=>i[Math.floor(Math.random()*i.length)];function y_(i,{bonus:t=1,onDone:e}){let s=45,r=0,a=0,o=0,c=null,l={},h=!0,f=performance.now();i.classList.remove("hidden"),i.innerHTML=`
    <div class="mk">
      <div class="mk-top"><span>🛒 Your Stall ${t>1?'<small style="color:#e71d36">• Prices up!</small>':""}</span><span class="timer" id="mkTime">45s</span><span>₦<span id="mkEarn">0</span></span></div>
      <div class="cust" id="mkCust"></div>
      <div class="items">${Yi.map((T,E)=>`<button class="item" data-id="${T.id}"><span class="ic" style="background:${T.col}">${T.e}</span>${T.name}<small>${Tt(T.price*t)}</small><small style="opacity:.5">[${E+1}]</small></button>`).join("")}</div>
      <div class="basket" id="mkBasket"></div>
      <div class="mk-msg" id="mkMsg"></div>
      <div class="btn-row"><button class="btn" id="mkClear">↺ Clear</button><button class="btn green" id="mkSell">✔ Sell (Enter)</button></div>
      <p class="fine">Pack exactly wetin customer ask, then press Sell. Fast service = bigger tip.</p>
    </div>`;const u=T=>i.querySelector("#"+T),d=()=>{const T=1+Math.floor(Math.random()*3),E=[...Yi].sort(()=>Math.random()-.5).slice(0,T),C={};E.forEach(_=>C[_.id]=1+Math.floor(Math.random()*3));const F=Math.floor(Math.random()*Kl.length);c={want:C,face:Kl[F],name:g_[F],patience:11+Math.random()*4,max:0},c.max=c.patience,l={},g()},g=()=>{if(!c)return;const T=Object.entries(c.want).map(([E,C])=>{const F=Yi.find(_=>_.id===E);return`<span class="qty">${C} × ${F.e} ${F.name}</span>`}).join("");u("mkCust").innerHTML=`<div class="face">${c.face}</div><div style="flex:1"><div class="who">${c.name}</div><div class="say">${Tr(__)}:</div><div style="margin-top:4px">${T}</div><div class="patience"><i id="mkPat" style="width:${c.patience/c.max*100}%"></i></div></div>`,v()},v=()=>{const T=Object.entries(l).filter(([,E])=>E>0);u("mkBasket").innerHTML=T.length?T.map(([E,C])=>{const F=Yi.find(_=>_.id===E);return`<span class="b">${C} × ${F.e} ${F.name}</span>`}).join(""):'<span style="opacity:.5">Basket empty — tap items to pack</span>'},p=T=>{u("mkMsg").textContent=T},m=T=>{h&&(l[T]=(l[T]||0)+1,v())},b=()=>{if(!h||!c)return;if(Object.keys({...c.want,...l}).every(E=>(c.want[E]||0)===(l[E]||0))){let E=0;for(const[_,S]of Object.entries(c.want))E+=Yi.find(N=>N.id===_).price*S;const C=Math.round(c.patience/c.max*60/10)*10,F=Math.round(E*t)+C;r+=F,a++,p(`${Tr(v_)} +${Tt(F)}${C?` (tip ${Tt(C)})`:""}`),u("mkEarn").textContent=r.toLocaleString("en-NG"),d()}else c.patience-=3,l={},v(),p(Tr(x_))};i.querySelectorAll(".item").forEach(T=>T.addEventListener("pointerdown",E=>{E.preventDefault(),m(T.dataset.id)})),u("mkClear").onclick=()=>{l={},v()},u("mkSell").onclick=b;const M=T=>{const E=parseInt(T.key,10);E>=1&&E<=5?m(Yi[E-1].id):T.key==="Enter"||T.key===" "?(T.preventDefault(),b()):T.key==="Backspace"&&(l={},v()),T.stopPropagation()};window.addEventListener("keydown",M,!0),d();const w=()=>{if(!h)return;const T=performance.now(),E=Math.min(.1,(T-f)/1e3);if(f=T,s-=E,c){c.patience-=E;const C=u("mkPat");C&&(C.style.width=Math.max(0,c.patience/c.max*100)+"%"),c.patience<=0&&(o++,p(Tr(M_)),d())}if(u("mkTime").textContent=Math.max(0,Math.ceil(s))+"s",s<=0)return D();requestAnimationFrame(w)};requestAnimationFrame(w);function D(){h=!1,window.removeEventListener("keydown",M,!0),i.innerHTML=`<div class="mk" style="text-align:center"><h2 style="margin:6px 0">Market don close! 🧺</h2>
      <p style="font-size:44px;margin:4px 0">${a>=5?"🤑":a>=2?"🙂":"😮‍💨"}</p>
      <p><b>${a}</b> customers served • <b>${o}</b> waka comot</p>
      <p style="font-size:30px;font-weight:900;margin:6px 0">+${Tt(r)}</p>
      <p class="fine">2 hours don pass. Your body don tire small.</p>
      <button class="btn primary" id="mkDone" style="width:100%">Collect money ➜</button></div>`,i.querySelector("#mkDone").onclick=()=>{i.classList.add("hidden"),i.innerHTML="",e({earned:r,served:a,lost:o})}}}const eu="wahala.char.v1",es="wahala.save.v1",gt=i=>document.getElementById(i),Yo=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,Qr=Math.min(innerWidth,innerHeight)<820,ta=i=>{try{return JSON.parse(localStorage.getItem(i))}catch{return null}},nu=(i,t)=>{try{localStorage.setItem(i,JSON.stringify(t))}catch{}},fi=gt("c"),Si=new Ig({canvas:fi,antialias:!0,powerPreference:"high-performance"});Si.setPixelRatio(Math.min(devicePixelRatio,Qr?1.75:2));Si.setSize(innerWidth,innerHeight);Si.shadowMap.enabled=!0;Si.shadowMap.type=Jo;const In=new Uh;In.background=new Dt("#ffe3a3");const mn=new He(30,innerWidth/innerHeight,.1,100);mn.position.set(0,1.25,5.4);mn.lookAt(0,.85,0);In.add(new Wh(16777215,16767408,1.3));const ca=new Yh(16777215,2.2);ca.position.set(2.5,5,4);ca.castShadow=!0;ca.shadow.mapSize.set(1024,1024);In.add(ca);{const i=Et(new On(1.1,1.2,.25,40),lt("#ffffff",{map:hs("circles","#ff6b35","#2ec4b6","#fff3d6",[6,1])}),{t:.05});i.position.y=-.125,In.add(i);const t=new Bt(new oa(1.1,40),lt("#fff3d6"));t.rotation.x=-Math.PI/2,t.position.y=.005,t.receiveShadow=!0,In.add(t);const e=[["#ff9eb5",-2.6,2.2,-4,1.6],["#7fd1c7",2.8,1.4,-5,2.2],["#c3b1f0",-1.2,3.4,-6,1.2],["#ffd23f",1.5,3.6,-7,1]];for(const[n,s,r,a,o]of e){const c=Et(new Fn(o,20,14),lt(n),{t:.06,cast:!1});c.position.set(s,r,a),In.add(c)}}let je=null,Ie={...Qh(),...ta(eu)||{}};function S_(){const i=je?je.rotation.y:-.35;je&&In.remove(je),je=Ns(Ie),je.rotation.y=i,In.add(je)}function iu(){const i=innerWidth,t=innerHeight;mn.aspect=i/t,i>760?(mn.setViewOffset(i,t,-Math.min(220,i*.2),0,i,t),mn.fov=30):(mn.setViewOffset(i,t,0,t*.26,i,t),mn.fov=i/t<.7?58:44),mn.updateProjectionMatrix()}const Ce=new Uh;Ce.background=new Dt("#8fd3ff");Ce.fog=new cc("#8fd3ff",70,170);const $n=new He(50,innerWidth/innerHeight,.1,400),Br=new Wh(15136511,15782816,1.1);Ce.add(Br);const dn=new Yh(16774108,2.4);dn.castShadow=!0;dn.shadow.mapSize.set(Qr?1024:2048,Qr?1024:2048);Object.assign(dn.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:140});dn.shadow.bias=-6e-4;dn.shadow.normalBias=.03;Ce.add(dn);Ce.add(dn.target);const qo=new Wo(16773320,0,11,1.3);Ce.add(qo);const Jl=(()=>{const i=[];for(let n=0;n<500;n++){const s=Math.random()*Math.PI*2,r=.15+Math.random()*1.3;i.push(Math.cos(s)*Math.cos(r)*180,Math.sin(r)*180,Math.sin(s)*Math.cos(r)*180)}const t=new xe;t.setAttribute("position",new se(i,3));const e=new Fg(t,new zh({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1}));return Ce.add(e),e})(),zr=new Bt(new Fn(6,20,14),new Gs({color:16643800,fog:!1,transparent:!0}));Ce.add(zr);let ke=null,Kn=null,j=null;const Yt=new R().copy(xi.spawn);let _n=0,ze=0,ns=.52,is=Qr?11:10,ms="creator",Ke=!1,vc=!1;const de=i=>new Dt(i),Rs=[[0,"night"],[5,"night"],[6.3,"dawn"],[8,"day"],[17,"day"],[18.6,"dusk"],[19.8,"night"],[24,"night"]],Zl={night:{sky:de("#2b2f6e"),hs:de("#7383db"),hg:de("#3a2f5a"),hi:.95,si:.45,sc:de("#a9bbff")},dawn:{sky:de("#ffb38a"),hs:de("#ffd1b3"),hg:de("#e0b080"),hi:1,si:1.5,sc:de("#ffb27a")},day:{sky:de("#8fd3ff"),hs:de("#e6f6ff"),hg:de("#f0d3a0"),hi:1.15,si:2.5,sc:de("#fff3dc")},dusk:{sky:de("#ff9470"),hs:de("#ffb8a0"),hg:de("#b08070"),hi:.95,si:1.3,sc:de("#ff9a5c")}},b_=new Dt;new Dt;const E_=de("#151838");function w_(i){let t=0;for(;t<Rs.length-1&&Rs[t+1][0]<=i;)t++;const[e,n]=Rs[t],[s,r]=Rs[Math.min(t+1,Rs.length-1)],a=s>e?(i-e)/(s-e):0,o=Zl[n],c=Zl[r];return{sky:o.sky.clone().lerp(c.sky,a),hs:o.hs.clone().lerp(c.hs,a),hg:o.hg.clone().lerp(c.hg,a),hi:o.hi+(c.hi-o.hi)*a,si:o.si+(c.si-o.si)*a,sc:o.sc.clone().lerp(c.sc,a)}}let pi=1,Qa=0;const jl=de("#a8dcff"),T_=de("#ffe39a"),Ql=de("#39406b"),A_=de("#ffae42");function C_(i){const t=j.hour+j.acc/60,e=w_(t%24),n=t<5.5?1:t<7?1-(t-5.5)/1.5:t<18?0:t<19.5?(t-18)/1.5:1;pi+=((j.s.power?1:0)-pi)*Math.min(1,i*6),Qa+=((j.genRunning?1:0)-Qa)*Math.min(1,i*4);const s=(1-pi)*n;e.sky.lerp(E_,s*.85),Ce.background.copy(e.sky),Ce.fog.color.copy(e.sky),Ce.fog.near=70-s*40,Ce.fog.far=170-s*80,Br.color.copy(e.hs),Br.groundColor.copy(e.hg),Br.intensity=e.hi*(1-s*.68),dn.color.copy(e.sc),dn.intensity=e.si*(1-s*.4);let r;if(t>=6&&t<=18.6){const h=(t-6)/12.6*Math.PI;r=new R(-Math.cos(h),Math.max(.25,Math.sin(h)),.45).normalize()}else r=new R(.45,.9,.35).normalize();dn.position.copy(Yt).addScaledVector(r,60),dn.target.position.copy(Yt),zr.position.copy(Yt).add(new R(60,75,-120)),zr.material.opacity=n,zr.visible=n>.05,Jl.material.opacity=n*(.35+s*.65),Jl.position.set(Yt.x,0,Yt.z);const a=ke.mats,o=n*pi;a.window.color.copy(jl).lerp(b_.copy(T_).lerp(Ql,1-pi),n),a.window.emissive.copy(A_),a.window.emissiveIntensity=o*.75,a.windowDark.color.copy(jl).lerp(Ql,n),a.bulb.emissive.set("#ffd27a"),a.bulb.emissiveIntensity=o*1.2,a.bulb.color.set(o>.3?"#fff3b0":"#8a8fa3"),ke.lampLights.forEach(h=>h.intensity=o*22);const c=Math.max(pi,Qa);a.homeBulb.emissive.set("#ffd27a"),a.homeBulb.emissiveIntensity=c*n*1.4,a.homeBulb.color.set(c>.5?"#fff3b0":"#6b6f80"),ke.homeLight.intensity=c*n*22,ke.homeBars.emissive.set("#ffb347"),ke.homeBars.emissiveIntensity=c*n*.8,a.headlight.emissive.set("#fff4c2"),a.headlight.emissiveIntensity=n*1.2,qo.intensity=s>.4?s*7:0;const l=new R(Math.sin(_n),0,Math.cos(_n));qo.position.copy(Yt).addScaledVector(l,1.2).add(new R(0,2,0)),gt("blackoutTint").style.opacity=(s*.85).toFixed(2)}const Be=new Set,$e={x:0,y:0,active:!1,id:null};addEventListener("keydown",i=>{if(i.target.tagName==="INPUT")return;const t=i.key.toLowerCase();Be.add(t),ms==="game"&&((t==="e"||t==="enter")&&!Ke&&!i.repeat&&ru(),(t==="p"||t==="tab")&&(i.preventDefault(),au()),t==="escape"&&(la(),Vs()))});addEventListener("keyup",i=>Be.delete(i.key.toLowerCase()));addEventListener("blur",()=>Be.clear());{const i=gt("joystick"),t=gt("knob"),e=(r,a)=>{t.style.transform=`translate(${r}px, ${a}px)`},n=r=>{const a=i.getBoundingClientRect(),o=a.left+a.width/2,c=a.top+a.height/2;let l=r.clientX-o,h=r.clientY-c;const f=a.width/2-10,u=Math.hypot(l,h);u>f&&(l*=f/u,h*=f/u),$e.x=l/f,$e.y=-h/f,e(l,h)};i.addEventListener("pointerdown",r=>{$e.active=!0,$e.id=r.pointerId,i.setPointerCapture(r.pointerId),n(r),r.preventDefault()}),i.addEventListener("pointermove",r=>{$e.active&&r.pointerId===$e.id&&n(r)});const s=r=>{r.pointerId===$e.id&&($e.active=!1,$e.x=$e.y=0,e(0,0))};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s)}{let i=null;fi.addEventListener("pointerdown",e=>{i={id:e.pointerId,x:e.clientX,y:e.clientY},fi.setPointerCapture(e.pointerId)}),fi.addEventListener("pointermove",e=>{if(!i||i.id!==e.pointerId)return;const n=e.clientX-i.x,s=e.clientY-i.y;i.x=e.clientX,i.y=e.clientY,ms==="creator"&&je?je.rotation.y+=n*.012:(ze-=n*.006,ns=Xr.clamp(ns+s*.004,.25,1.15))});const t=e=>{i&&i.id===e.pointerId&&(i=null)};fi.addEventListener("pointerup",t),fi.addEventListener("pointercancel",t),fi.addEventListener("wheel",e=>{is=Xr.clamp(is+e.deltaY*.01,5,20)},{passive:!0})}function ve(i,t=""){const e=document.createElement("div");for(e.className="toast "+t,e.textContent=i,gt("toasts").appendChild(e);gt("toasts").children.length>4;)gt("toasts").firstChild.remove();setTimeout(()=>e.remove(),3600)}function nn(i,t,e,n=""){Ke=!0;const s=gt("modalCard");s.className="modal-card "+n,s.innerHTML=`<h2>${i}</h2>${t?`<p class="sub">${t}</p>`:""}`;for(const r of e){const a=document.createElement("button");a.className="opt"+(r.close?" close":""),a.innerHTML=`<span>${r.label}${r.sub?`<small>${r.sub}</small>`:""}</span>${r.price?`<span class="price">${r.price}</span>`:""}`,a.disabled=!!r.disabled,a.onclick=()=>{var o;r.keep||la(),(o=r.onClick)==null||o.call(r)},s.appendChild(a)}gt("modal").classList.remove("hidden")}function la(){gt("modal").classList.add("hidden"),gt("market").innerHTML||(Ke=!1)}gt("modal").addEventListener("pointerdown",i=>{i.target.id==="modal"&&la()});function xc(i,t,e){return new Promise(n=>{Ke=!0;const s=gt("fade");s.textContent=i,s.classList.add("on"),setTimeout(()=>{e==null||e(),setTimeout(()=>{s.classList.remove("on"),setTimeout(()=>{Ke=!1,n()},450)},t)},520)})}const su=i=>{const t=Math.floor(i/1440),e=Math.floor(i%1440/60);return t?`${t}d ${e}h`:`${e}h ${i%60}m`},th=(i,t)=>new R(i,0,t),R_=[{id:"home",pos:xi.home,r:2.6,label:()=>"Enter your room 🏠",act:P_},{id:"gen",pos:xi.generator,r:1.9,label:()=>"Generator ⛽",act:L_},{id:"buka",pos:th(18,-14.6),r:3.2,label:()=>"Buy food 🍛",act:D_},{id:"stall",pos:xi.stall,r:2.2,label:()=>"Sell for stall 🍅",act:U_},...ts.map(i=>({id:"stop-"+i.id,pos:th(i.x,6.6),r:2.8,label:()=>`Danfo @ ${i.name} 🚌`,act:()=>O_(i)}))];let ea=null;function ru(){ea&&!Ke&&ea.act()}gt("actionBtn").addEventListener("click",ru);function P_(){const i=j.s,t=j.hour,e=j.s.power?"💡 NEPA light dey":j.genRunning?"⛽ Gen dey run":"🕯️ No light",n=t>=19||t<5;nn("Room 4 🏠",`Face-me-I-face-you, No. 7. ${e}. Rent owed: <b>${Tt(i.rentOwed)}</b>${i.strikes?` • ⚠️ Strike ${i.strikes}/2`:""}`,[{label:"Sleep till morning 😴",sub:n?"Restores Body. Better with light (fan dey work).":"E never late, but you fit sleep",onClick:()=>eh(!0)},{label:"Take nap (2 hours)",sub:"+Body small",onClick:()=>eh(!1)},{label:"Pay full rent",sub:i.rentOwed?"Baba Ade go happy":"You don pay finish 👏",price:Tt(i.rentOwed),disabled:!i.rentOwed||i.cash<i.rentOwed,onClick:()=>{const s=j.payRent(i.rentOwed);ve(`Rent paid: ${Tt(s)} ✔`,"good"),Ge()}},{label:"Pay part of rent",sub:"Small small dey fill basket",price:Tt(Math.min(2e3,i.rentOwed)),disabled:!i.rentOwed||i.cash<Math.min(2e3,i.rentOwed),onClick:()=>{const s=j.payRent(2e3);ve(`Paid ${Tt(s)} — balance ${Tt(i.rentOwed)}`,"good"),Ge()}},{label:"Comot",close:!0}])}async function eh(i){const t=j.hour;let e=i?(t<6.5?6.5-t:24-t+6.5)*60:120;e=Math.round(e);let n=0;await xc(i?"😴 Zzz... Sleeping till morning":"😴 Small nap...",900,()=>{for(let s=0;s<e&&(j.tick({sleeping:!0}),j.homePowered&&n++,!j.s.evicted);s++);j.collapsed=!1,Yt.copy(xi.spawn),_n=0,ze=0}),i&&(n/Math.max(1,e)>.7?(j.s.mood=Math.min(100,j.s.mood+10),ve("You wake up fresh! Fan dey blow all night 😌","good")):ve("NEPA take light — heat & mosquito no let you sleep well 🥵🦟","warn")),Ge()}function L_(){const i=j.s;nn('"I-Pass-My-Neighbour" ⛽',`Fuel: <b>${i.fuel} hrs</b> • Gen switch: <b>${i.genOn?"ON":"OFF"}</b>. E go run automatically when NEPA take light.`,[{label:"Buy 5 hours fuel",sub:"Jerrycan from roadside seller (price follow petrol price)",price:Tt(j.fuelPrice),disabled:i.cash<j.fuelPrice||i.fuel>=24,onClick:()=>{j.buyFuel(),ve("Fuel don enter gen ⛽","good"),Ge()}},{label:i.genOn?"Switch gen OFF":"Switch gen ON",sub:i.genOn?"Save fuel":"Make e run when light go",onClick:()=>{i.genOn=!i.genOn,ve(i.genOn?"Gen switch ON":"Gen switch OFF")}},{label:"Comot",close:!0}])}const I_=[{name:"Jollof rice & chicken",price:1500,hunger:45,mood:8,mins:25},{name:"Amala & ewedu",price:1e3,hunger:38,mood:4,mins:20},{name:"Eba & egusi soup",price:1200,hunger:42,mood:5,mins:25},{name:"Puff-puff (5 pieces)",price:300,hunger:12,mood:3,mins:5},{name:"Pure water (sachet)",price:50,hunger:3,mood:2,mins:1}];function D_(){const i=j.hour;if(i<6||i>=22)return nn("Buka don close 🌙","Iya Basira don go house. Come back from 6am.",[{label:"Okay",close:!0}]);nn("Mama Put — Iya Basira 🍛",`"My pikin, wetin you go chop today?" • Belle: ${Math.round(j.s.hunger)}%`,[...I_.map(t=>({label:t.name,sub:`+${t.hunger} Belle • +${t.mood} Mind`,price:Tt(t.price),disabled:j.s.cash<t.price,onClick:()=>{j.spend(t.price),j.s.hunger=Math.min(100,j.s.hunger+t.hunger),j.s.mood=Math.min(100,j.s.mood+t.mood),j.s.stats.meals++,j.advance(t.mins),ve(`${t.name} — e sweet die! 😋`,"good"),Ge()}})),{label:"I no hungry",close:!0}])}function U_(){const i=j.hour;if(i<7||i>=19)return nn("Market don close 🌙","Market dey open 7am – 7pm. Go rest.",[{label:"Okay",close:!0}]);if(j.s.energy<15)return nn("Your body don tire 😮‍💨","You need at least 15% Body to sell. Go chop or sleep.",[{label:"Okay",close:!0}]);nn("Your Market Stall 🍅",`Sell tomato, pepper, onions, plantain & egg. 45 seconds = 2 game hours.${j.s.marketBonus>1?' <b style="color:#e71d36">Prices up 50% today!</b>':""}`,[{label:"Open shop! 🛒",sub:"Uses Body & Belle",onClick:N_},{label:"Later",close:!0}])}function N_(){Ke=!0,y_(gt("market"),{bonus:j.s.marketBonus,onDone:({earned:i,served:t})=>{j.advance(120,{working:!0}),j.earn(i,"market"),j.s.stats.sold+=t,t>=4&&(j.s.mood=Math.min(100,j.s.mood+6)),Ke=!1,ve(`+${Tt(i)} from market 💰`,"money"),Ge()}})}function O_(i){const t=j.hour;if(t<5||t>=23)return nn("No Danfo now 🌙","Danfo dey run 5am – 11pm. Na trek remain.",[{label:"Okay",close:!0}]);const e=ts.indexOf(i);nn(`${i.name} Bus Stop 🚌`,`Conductor: "Enter with your change o!" • Base fare ${Tt(j.danfoFare)}${j.s.fuelFactor>1?" (fuel price don raise am)":""}`,[...ts.filter(n=>n!==i).map(n=>{const s=Math.abs(ts.indexOf(n)-e),r=j.danfoFare*s;return{label:`To ${n.name}`,sub:`~${s*15}–${s*15+30} mins (traffic dey)`,price:Tt(r),disabled:j.s.cash<r,onClick:()=>F_(n,r,s)}}),{label:"I go trek",close:!0}])}async function F_(i,t,e){j.spend(t);const n=e*15+Math.floor(Math.random()*30),s=['Conductor: "Shift! Shift! Make una shift!" 🚌',"Driver dey play Fuji music full blast 🎶","Traffic for road... hawker dey sell gala 🥖",'Conductor: "Who never pay?" 👀'][Math.floor(Math.random()*4)];await xc(s,1300,()=>{j.advance(n),Yt.set(i.x+1.8,.18,6.3),_n=0,ze=0}),ve(`You don reach ${i.name}! (${n} mins, ${Tt(t)})`,"good"),Ge()}async function B_(){vc=!1,await xc("😵 You don faint for road!",1400,()=>{for(let t=0;t<360;t++)j.tick({sleeping:!0});j.s.energy=Math.max(j.s.energy,40),j.s.mood=Math.max(0,j.s.mood-15);const i=Math.min(500,j.s.cash);j.s.cash-=i,j.collapsed=!1,Yt.copy(xi.spawn),setTimeout(()=>ve(`Neighbours carry you go house. You dash them ${Tt(i)} 🙏`,"bad"),800)}),Ge()}let Ji="wallet";function au(){gt("phone").classList.contains("hidden")?ou():Vs()}function ou(i){i&&(Ji=i),gt("phone").classList.remove("hidden"),vi()}function Vs(){gt("phone").classList.add("hidden")}gt("phoneBtn").addEventListener("click",()=>au());gt("phoneClose").addEventListener("click",Vs);gt("phone").addEventListener("pointerdown",i=>{i.target.id==="phone"&&Vs()});document.querySelectorAll(".phone-tabs button").forEach(i=>i.addEventListener("click",()=>{Ji=i.dataset.tab,vi()}));function vi(){const i=j.s,t=gt("phoneBody");document.querySelectorAll(".phone-tabs button").forEach(s=>s.classList.toggle("active",s.dataset.tab===Ji)),Ji==="feed"&&(i.unread=0);const e=j.tier,n=jr[jr.indexOf(e)+1];if(Ji==="wallet")t.innerHTML=`
      <div class="wcard bal"><div class="k">Wallet balance</div><div class="v">${Tt(i.cash)}</div><div class="k">Tier: ${e.label}${n?` • next: ${n.label} @ ${Tt(n.min)} net worth`:""}</div></div>
      <div class="wgrid">
        <div class="wcard"><div class="k">Rent owed</div><div class="v" style="color:${i.rentOwed?"#e71d36":"#0a9b74"}">${Tt(i.rentOwed)}</div></div>
        <div class="wcard"><div class="k">Due (Sat 11:59pm)</div><div class="v">${su(j.rentCountdown())}</div></div>
        <div class="wcard"><div class="k">LapoPay loan</div><div class="v" style="color:#8338ec">${Tt(i.loan)}</div></div>
        <div class="wcard"><div class="k">Net worth</div><div class="v">${Tt(j.netWorth)}</div></div>
        <div class="wcard"><div class="k">Danfo fare</div><div class="v">${Tt(j.danfoFare)}</div></div>
        <div class="wcard"><div class="k">Gen fuel</div><div class="v">${i.fuel} hrs</div></div>
      </div>
      <div class="btn-row"><button class="btn primary" id="phRent" ${!i.rentOwed||i.cash<i.rentOwed?"disabled":""}>Transfer rent to Baba Ade</button></div>
      <p class="fine">Earned so far: ${Tt(i.stats.earned)} • Customers served: ${i.stats.sold} • Meals: ${i.stats.meals}${i.strikes?` • ⚠️ Eviction strikes: ${i.strikes}/2`:""}</p>`,gt("phRent").onclick=()=>{const s=j.payRent(i.rentOwed);ve(`Rent transfer successful: ${Tt(s)} ✔`,"good"),vi(),Ge()};else if(Ji==="feed")t.innerHTML=i.feed.map(s=>`<div class="post ${s.kind}"><span class="h">${s.handle}</span><span class="tm">${j.dayStr(s.t).slice(0,3)} ${j.timeStr(s.t)}</span><div>${s.text}</div></div>`).join("")||"<p>No gist yet.</p>";else{t.innerHTML=`
      <div class="lapo-hero"><div class="k">LapoPay balance owed</div><div class="v">${Tt(i.loan)}</div><div style="font-size:12px;font-weight:700">Interest: ${Math.round(tu*100)}% every day + 10% "processing fee" 👀 • Max ₦15,000</div></div>
      <div class="btn-row"><button class="btn green" id="lp5">Borrow ₦5,000</button><button class="btn green" id="lp10">Borrow ₦10,000</button></div>
      <div class="btn-row"><button class="btn" id="lpr1" ${!i.loan||i.cash<1?"disabled":""}>Repay ₦1,000</button><button class="btn primary" id="lpra" ${!i.loan||i.cash<1?"disabled":""}>Repay all</button></div>
      <p class="fine">LapoPay: "Quick loan, no collateral!" — but if you no pay, interest go dey climb every day like Lagos traffic. (Na game money only — no real money for here.)</p>`;const s=r=>{j.borrow(r)?ve(`LapoPay: ${Tt(r)} don land 💸`,"money"):ve("LapoPay: Limit reach! Pay first 🙅🏾","bad"),vi(),Ge()};gt("lp5").onclick=()=>s(5e3),gt("lp10").onclick=()=>s(1e4),gt("lpr1").onclick=()=>{const r=j.repay(1e3);ve(`Repaid ${Tt(r)}`,"good"),vi(),Ge()},gt("lpra").onclick=()=>{const r=j.repay(i.loan);ve(`Repaid ${Tt(r)}`,"good"),vi(),Ge()}}}function z_(i){return i>55?"#06d6a0":i>25?"#ffbe0b":"#e71d36"}function cu(){const i=j.s;gt("hudDay").textContent=`${j.dayStr().slice(0,3)} • Day ${j.day}`,gt("hudTime").textContent=j.timeStr(),gt("hudCash").textContent=Math.round(i.cash).toLocaleString("en-NG");for(const[r,a]of[["barHunger",i.hunger],["barEnergy",i.energy],["barMood",i.mood]]){const o=gt(r);o.style.width=a+"%",o.style.background=z_(a)}const t=gt("hudPower");i.power?(t.className="power on",t.textContent="💡 NEPA"):j.genRunning?(t.className="power gen",t.textContent="⛽ Gen"):(t.className="power off",t.textContent="🕯️ No light");const e=gt("hudRent"),n=j.rentCountdown();i.rentOwed>0?(e.textContent=`🏠 Rent ${Tt(i.rentOwed)} • due in ${su(n)}`,e.className="rent-chip"+(n<1440||i.strikes?" bad":"")):(e.textContent="🏠 Rent paid ✔ • Lapo tier",e.className="rent-chip"),i.loan>0&&(e.textContent+=` • Loan ${Tt(i.loan)}`);const s=gt("badge");s.textContent=i.unread,s.classList.toggle("hidden",!i.unread),gt("feedBadge").textContent=i.unread?`(${i.unread})`:"",gt("phTime").textContent=j.timeStr(),gt("phPower").textContent=i.power?"💡":j.genRunning?"⛽":"🕯️"}function Ge(){j&&(j.s.player={x:Yt.x,z:Yt.z,rotY:_n},nu(es,j.s))}function $o(i){nu(eu,Ie);let t=i?null:ta(es);(!t||t.v!==1||t.evicted)&&(t=f_(Ie.name||"Tunde")),t.name=Ie.name||t.name,j=new m_(t,{toast:ve,onPost:e=>{gt("phone").classList.contains("hidden")||vi(),e.kind==="alert"&&ve(`📱 ${e.handle}: ${e.text.slice(0,70)}${e.text.length>70?"…":""}`,"warn")},onPower:e=>ve(e?"UP NEPA! Light don come 💡🎉":"NEPA don take light! 🕯️",e?"good":"bad"),onCollapse:()=>{vc=!0},onEvictionWarning:()=>setTimeout(()=>nn("⚠️ EVICTION WARNING",`Baba Ade: "You no pay rent this week! I don add late fee. If you no pay everything by next Saturday, I go throw your load comot!" Owed: <b>${Tt(j.s.rentOwed)}</b>`,[{label:"I go pay, abeg 🙏",close:!0}],"warn"),600),onEvict:()=>setTimeout(k_,600)}),ke||(ke=new h_(Ce)),Kn&&Ce.remove(Kn),Kn=Ns(Ie),Ce.add(Kn),t.player?(Yt.set(t.player.x,0,t.player.z),_n=t.player.rotY||0):(Yt.copy(xi.spawn),_n=0),ze=0,ms="game",gt("creator").classList.add("hidden"),["hud","phoneBtn"].forEach(e=>gt(e).classList.remove("hidden")),Yo&&gt("joystick").classList.remove("hidden"),Yo&&gt("keysHint").classList.add("hidden"),mn.clearViewOffset(),cu(),t.player||setTimeout(()=>nn(`Welcome to Lagos, ${t.name}! 🏙️`,`You don rent one room for face-me-I-face-you. You get <b>${Tt(t.cash)}</b> for pocket and rent na <b>${Tt(Fs)}</b> every Saturday. Hustle for <b>Yaba Market</b> stall, chop for <b>Mama Put</b>, and no forget — NEPA fit take light anytime. 😅`,[{label:"Oya, make we go! ➜",close:!0}]),300)}function k_(){const i=j.s;nn("🧳 You don be evicted!",`Baba Ade don throw your load comot for Room 4. You survive ${j.day} days, earn ${Tt(i.stats.earned)}. Lagos no easy o!`,[{label:"Start new life ➜",onClick:()=>{localStorage.removeItem(es),location.reload()}}],"warn")}setInterval(()=>{ms==="game"&&!Ke&&Ge()},8e3);addEventListener("pagehide",Ge);function H_(){gt("ccName").value=Ie.name,gt("ccName").addEventListener("input",s=>{Ie.name=s.target.value.trim()||"Tunde"});const i=(s,r,a,o=c=>c)=>{s.innerHTML="",r.forEach(c=>{const l=o(c),h=document.createElement("button");h.className="sw"+(Ie[a]===l?" sel":""),h.style.background=l,h.title=c.name||l,h.onclick=()=>{Ie[a]=l,e()},s.appendChild(h)})},t=(s,r,a)=>{s.innerHTML="",r.forEach(o=>{const c=document.createElement("button");c.className="chip"+(Ie[a]===o.id?" sel":""),c.textContent=o.name,c.onclick=()=>{Ie[a]=o.id,e()},s.appendChild(c)})},e=()=>{i(gt("ccSkin"),_c,"skin",s=>s.hex),t(gt("ccHair"),$h,"hair"),i(gt("ccHairColor"),Jr,"hairColor"),t(gt("ccOutfit"),Kh,"outfit"),t(gt("ccPattern"),r_,"pattern"),gt("ccPatternGroup").style.opacity=Ie.outfit.startsWith("ankara")||Ie.hair==="gele"?1:.4,i(gt("ccCloth"),Jh,"clothColor"),i(gt("ccAccent"),Zh,"accentColor"),i(gt("ccPants"),jh,"pantsColor"),S_()};gt("ccRandom").onclick=()=>{const s=Ie.name;Ie={...Nr(),name:s},e()},!!ta(es)&&!ta(es).evicted&&(gt("ccStart").textContent="Continue Hustle ➜",gt("ccNew").classList.remove("hidden")),gt("ccStart").onclick=()=>$o(!1),gt("ccNew").onclick=()=>{confirm("Wipe your save and start fresh?")&&(localStorage.removeItem(es),$o(!0))},e()}H_();iu();const G_=new n_;let to=0,Ar=0;const nh=new R,ih=new R,V_=()=>j.s.power?["How far?","Wetin dey sup?","Traffic no go kill person","E choke!","Na God o","This sun no be here o","Jollof dey buka","Abeg shift"]:["NEPA don take light!","Who get gen?","Heat wan kill me","UP NEPA when?"];function lu(){requestAnimationFrame(lu);const i=Math.min(.05,G_.getDelta());if(Ar+=i,ms==="creator"){je&&(je.rotation.y+=i*.25,Os(je,i,0,Ar)),Si.render(In,mn);return}!Ke&&!j.s.evicted&&j.update(i),vc&&!Ke&&B_();let t=0,e=0;Ke||((Be.has("w")||Be.has("arrowup"))&&(e+=1),(Be.has("s")||Be.has("arrowdown"))&&(e-=1),(Be.has("a")||Be.has("arrowleft"))&&(t-=1),(Be.has("d")||Be.has("arrowright"))&&(t+=1),Be.has("q")&&(ze+=i*1.8),Be.has("r")&&(ze-=i*1.8),t+=$e.x,e+=$e.y);const n=Math.min(1,Math.hypot(t,e));let s=0;if(n>.08){const o=-Math.sin(ze),c=-Math.cos(ze),l=Math.cos(ze),h=-Math.sin(ze);let f=l*t+o*e,u=h*t+c*e;const d=Math.hypot(f,u);f/=d,u/=d;const g=Be.has("shift")||$e.active&&n>.95;let v=(g?7:4.3)*n;(j.s.hunger<=0||j.s.energy<10)&&(v*=.65),Yt.x+=f*v*i,Yt.z+=u*v*i;let m=Math.atan2(f,u)-_n;m=Math.atan2(Math.sin(m),Math.cos(m)),_n+=m*Math.min(1,i*12),s=g?1.5:Math.max(.5,n)}ke.resolve(Yt),Yt.y+=(ke.groundHeight(Yt.x,Yt.z)-Yt.y)*Math.min(1,i*15),Kn.position.copy(Yt),Kn.rotation.y=_n,Os(Kn,i,s,Ar),c_(Kn,j.s.mood),ke.update(i,Ar,Yt,{power:j.s.power,genRunning:j.genRunning,lines:V_}),ke.bark&&(ke.bark.pos.distanceTo(Yt)<22&&ve(`🚌 ${ke.bark.text}`),ke.bark=null);let r=null,a=1e9;for(const o of R_){const c=Math.hypot(Yt.x-o.pos.x,Yt.z-o.pos.z);c<o.r&&c<a&&(a=c,r=o)}r!==ea&&(ea=r,gt("actionBtn").classList.toggle("hidden",!r)),r&&(gt("actionLabel").textContent=r.label()),Ke?gt("actionBtn").classList.add("hidden"):r&&gt("actionBtn").classList.remove("hidden"),gt("actionBtn").querySelector(".key").style.display=Yo?"none":"",nh.set(Yt.x,Yt.y+1.1,Yt.z),ih.set(Yt.x+Math.sin(ze)*Math.cos(ns)*is,Yt.y+1.1+Math.sin(ns)*is,Yt.z+Math.cos(ze)*Math.cos(ns)*is),$n.position.lerp(ih,Math.min(1,i*6)),$n.lookAt(nh),C_(i),to-=i,to<=0&&(to=.25,cu()),Si.render(Ce,$n)}lu();function hu(){$n.aspect=innerWidth/innerHeight,$n.fov=$n.aspect<1?62:50,$n.updateProjectionMatrix()}hu();addEventListener("resize",()=>{Si.setSize(innerWidth,innerHeight),hu(),ms==="creator"&&iu()});window.wahala={get sim(){return j},start:(i=!0)=>$o(i),setHour(i){const t=j.s;t.t=Math.floor(t.t/1440)*1440+Math.round(i*60),j.acc=0},setPower(i){j.setPower(i),pi=i?1:0},teleport(i,t,e=0){Yt.set(i,0,t),ze=e,$n.position.set(i+Math.sin(e)*9,7,t+Math.cos(e)*9)},openPhone:ou,closePhone:Vs,closeModal:la,setCam(i,t,e){ze=i,t&&(ns=t),e&&(is=e)}};
