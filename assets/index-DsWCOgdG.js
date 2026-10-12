(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ec="169",qu=0,el=1,Yu=2,Tc=1,Ku=2,Wn=3,Jn=0,Ve=1,Rn=2,ui=0,hs=1,nl=2,il=3,sl=4,ju=5,Li=100,Ju=101,Zu=102,Qu=103,td=104,ed=200,nd=201,id=202,sd=203,Ir=204,Dr=205,ad=206,od=207,rd=208,cd=209,ld=210,hd=211,ud=212,dd=213,fd=214,Nr=0,Ur=1,Or=2,gs=3,kr=4,Fr=5,Br=6,zr=7,Dh=0,pd=1,md=2,di=0,gd=1,_d=2,vd=3,xd=4,yd=5,Md=6,bd=7,Nh=300,_s=301,vs=302,Hr=303,Vr=304,To=306,oo=1e3,Xn=1001,Gr=1002,He=1003,Sd=1004,da=1005,yn=1006,Fo=1007,Di=1008,Zn=1009,Uh=1010,Oh=1011,ea=1012,Ac=1013,Ni=1014,Pn=1015,oa=1016,Cc=1017,Rc=1018,xs=1020,kh=35902,Fh=1021,Bh=1022,bn=1023,zh=1024,Hh=1025,us=1026,ys=1027,Ao=1028,Pc=1029,Vh=1030,Lc=1031,Ic=1033,qa=33776,Ya=33777,Ka=33778,ja=33779,Wr=35840,Xr=35841,$r=35842,qr=35843,Yr=36196,Kr=37492,jr=37496,Jr=37808,Zr=37809,Qr=37810,tc=37811,ec=37812,nc=37813,ic=37814,sc=37815,ac=37816,oc=37817,rc=37818,cc=37819,lc=37820,hc=37821,Ja=36492,uc=36494,dc=36495,Gh=36283,fc=36284,pc=36285,mc=36286,wd=3200,Ed=3201,Wh=0,Td=1,hi="",Oe="srgb",gi="srgb-linear",Dc="display-p3",Co="display-p3-linear",ro="linear",ue="srgb",co="rec709",lo="p3",zi=7680,al=519,Ad=512,Cd=513,Rd=514,Xh=515,Pd=516,Ld=517,Id=518,Dd=519,gc=35044,ol="300 es",$n=2e3,ho=2001;class Ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rl=1234567;const Ks=Math.PI/180,na=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function Nc(i,t){return(i%t+t)%t}function Nd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ud(i,t,e){return i!==t?(e-i)/(t-i):0}function js(i,t,e){return(1-e)*i+e*t}function Od(i,t,e,n){return js(i,t,1-Math.exp(-e*n))}function kd(i,t=1){return t-Math.abs(Nc(i,t*2)-t)}function Fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function zd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Hd(i,t){return i+Math.random()*(t-i)}function Vd(i){return i*(.5-Math.random())}function Gd(i){i!==void 0&&(rl=i);let t=rl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wd(i){return i*Ks}function Xd(i){return i*na}function $d(i){return(i&i-1)===0&&i!==0}function qd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kd(i,t,e,n,s){const a=Math.cos,o=Math.sin,r=a(e/2),c=o(e/2),l=a((t+n)/2),u=o((t+n)/2),m=a((t-n)/2),d=o((t-n)/2),h=a((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(r*u,c*m,c*d,r*l);break;case"YZY":i.set(c*d,r*u,c*m,r*l);break;case"ZXZ":i.set(c*m,c*d,r*u,r*l);break;case"XZX":i.set(r*u,c*_,c*h,r*l);break;case"YXY":i.set(c*h,r*u,c*_,r*l);break;case"ZYZ":i.set(c*_,c*h,r*u,r*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qe={DEG2RAD:Ks,RAD2DEG:na,generateUUID:Yn,clamp:Pe,euclideanModulo:Nc,mapLinear:Nd,inverseLerp:Ud,lerp:js,damp:Od,pingpong:kd,smoothstep:Fd,smootherstep:Bd,randInt:zd,randFloat:Hd,randFloatSpread:Vd,seededRandom:Gd,degToRad:Wd,radToDeg:Xd,isPowerOfTwo:$d,ceilPowerOfTwo:qd,floorPowerOfTwo:Yd,setQuaternionFromProperEuler:Kd,normalize:se,denormalize:Mn};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*n-o*s+t.x,this.y=a*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,s,a,o,r,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,o,r,c,l)}set(t,e,n,s,a,o,r,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=r,u[3]=e,u[4]=a,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,o=n[0],r=n[3],c=n[6],l=n[1],u=n[4],m=n[7],d=n[2],h=n[5],_=n[8],g=s[0],f=s[3],p=s[6],x=s[1],M=s[4],b=s[7],P=s[2],T=s[5],E=s[8];return a[0]=o*g+r*x+c*P,a[3]=o*f+r*M+c*T,a[6]=o*p+r*b+c*E,a[1]=l*g+u*x+m*P,a[4]=l*f+u*M+m*T,a[7]=l*p+u*b+m*E,a[2]=d*g+h*x+_*P,a[5]=d*f+h*M+_*T,a[8]=d*p+h*b+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*r*l-n*a*u+n*r*c+s*a*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8],m=u*o-r*l,d=r*c-u*a,h=l*a-o*c,_=e*m+n*d+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=m*g,t[1]=(s*l-u*n)*g,t[2]=(r*n-s*o)*g,t[3]=d*g,t[4]=(u*e-s*c)*g,t[5]=(s*a-r*e)*g,t[6]=h*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*a)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,o,r){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*o+l*r)+o+t,-s*l,s*c,-s*(-l*o+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Bo.makeScale(t,e)),this}rotate(t){return this.premultiply(Bo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bo=new Ht;function $h(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jd(){const i=uo("canvas");return i.style.display="block",i}const cl={};function Za(i){i in cl||(cl[i]=!0,console.warn(i))}function Jd(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function Zd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ll=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hl=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ps={[gi]:{transfer:ro,primaries:co,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Oe]:{transfer:ue,primaries:co,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Co]:{transfer:ro,primaries:lo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(hl),fromReference:i=>i.applyMatrix3(ll)},[Dc]:{transfer:ue,primaries:lo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(hl),fromReference:i=>i.applyMatrix3(ll).convertLinearToSRGB()}},tf=new Set([gi,Co]),ee={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!tf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ps[t].toReference,s=Ps[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ps[i].primaries},getTransfer:function(i){return i===hi?ro:Ps[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ps[t].luminanceCoefficients)}};function ds(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hi;class ef{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=uo("canvas")),Hi.width=t.width,Hi.height=t.height;const n=Hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=uo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=ds(a[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ds(e[n]/255)*255):e[n]=ds(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nf=0;class qh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,r=s.length;o<r;o++)s[o].isDataTexture?a.push(Ho(s[o].image)):a.push(Ho(s[o]))}else a=Ho(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function Ho(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ef.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sf=0;class ke extends Ss{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Xn,s=Xn,a=yn,o=Di,r=bn,c=Zn,l=ke.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Yn(),this.name="",this.source=new qh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oo:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oo:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Nh;ke.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,s=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*a,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*a,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*a,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const c=t.elements,l=c[0],u=c[4],m=c[8],d=c[1],h=c[5],_=c[9],g=c[2],f=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(m-g)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(m+g)<.1&&Math.abs(_+f)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,b=(h+1)/2,P=(p+1)/2,T=(u+d)/4,E=(m+g)/4,R=(_+f)/4;return M>b&&M>P?M<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(M),s=T/n,a=E/n):b>P?b<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),n=T/s,a=R/s):P<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(P),n=E/a,s=R/a),this.set(n,s,a,e),this}let x=Math.sqrt((f-_)*(f-_)+(m-g)*(m-g)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(f-_)/x,this.y=(m-g)/x,this.z=(d-u)/x,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class af extends Ss{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let r=0;r<o;r++)this.textures[r]=a.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends af{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yh extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class of extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,o,r){let c=n[s+0],l=n[s+1],u=n[s+2],m=n[s+3];const d=a[o+0],h=a[o+1],_=a[o+2],g=a[o+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=m;return}if(r===1){t[e+0]=d,t[e+1]=h,t[e+2]=_,t[e+3]=g;return}if(m!==g||c!==d||l!==h||u!==_){let f=1-r;const p=c*d+l*h+u*_+m*g,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const P=Math.sqrt(M),T=Math.atan2(P,p*x);f=Math.sin(f*T)/P,r=Math.sin(r*T)/P}const b=r*x;if(c=c*f+d*b,l=l*f+h*b,u=u*f+_*b,m=m*f+g*b,f===1-r){const P=1/Math.sqrt(c*c+l*l+u*u+m*m);c*=P,l*=P,u*=P,m*=P}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,a,o){const r=n[s],c=n[s+1],l=n[s+2],u=n[s+3],m=a[o],d=a[o+1],h=a[o+2],_=a[o+3];return t[e]=r*_+u*m+c*h-l*d,t[e+1]=c*_+u*d+l*m-r*h,t[e+2]=l*_+u*h+r*d-c*m,t[e+3]=u*_-r*m-c*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,o=t._order,r=Math.cos,c=Math.sin,l=r(n/2),u=r(s/2),m=r(a/2),d=c(n/2),h=c(s/2),_=c(a/2);switch(o){case"XYZ":this._x=d*u*m+l*h*_,this._y=l*h*m-d*u*_,this._z=l*u*_+d*h*m,this._w=l*u*m-d*h*_;break;case"YXZ":this._x=d*u*m+l*h*_,this._y=l*h*m-d*u*_,this._z=l*u*_-d*h*m,this._w=l*u*m+d*h*_;break;case"ZXY":this._x=d*u*m-l*h*_,this._y=l*h*m+d*u*_,this._z=l*u*_+d*h*m,this._w=l*u*m-d*h*_;break;case"ZYX":this._x=d*u*m-l*h*_,this._y=l*h*m+d*u*_,this._z=l*u*_-d*h*m,this._w=l*u*m+d*h*_;break;case"YZX":this._x=d*u*m+l*h*_,this._y=l*h*m+d*u*_,this._z=l*u*_-d*h*m,this._w=l*u*m-d*h*_;break;case"XZY":this._x=d*u*m-l*h*_,this._y=l*h*m-d*u*_,this._z=l*u*_+d*h*m,this._w=l*u*m+d*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],o=e[1],r=e[5],c=e[9],l=e[2],u=e[6],m=e[10],d=n+r+m;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(a-l)*h,this._z=(o-s)*h}else if(n>r&&n>m){const h=2*Math.sqrt(1+n-r-m);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(a+l)/h}else if(r>m){const h=2*Math.sqrt(1+r-n-m);this._w=(a-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+m-n-r);this._w=(o-s)/h,this._x=(a+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,o=t._w,r=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*r+s*l-a*c,this._y=s*u+o*c+a*r-n*l,this._z=a*u+o*l+n*c-s*r,this._w=o*u-n*r-s*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,o=this._w;let r=o*t._w+n*t._x+s*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=n,this._y=s,this._z=a,this;const c=1-r*r;if(c<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*n+e*this._x,this._y=h*s+e*this._y,this._z=h*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,r),m=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*m+this._w*d,this._x=n*m+this._x*d,this._y=s*m+this._y*d,this._z=a*m+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ul.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,o=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*o,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*o,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,o=t.y,r=t.z,c=t.w,l=2*(o*s-r*n),u=2*(r*e-a*s),m=2*(a*n-o*e);return this.x=e+c*l+o*m-r*u,this.y=n+c*u+r*l-a*m,this.z=s+c*m+a*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,o=e.x,r=e.y,c=e.z;return this.x=s*c-a*r,this.y=a*o-n*c,this.z=n*r-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vo.copy(this).projectOnVector(t),this.sub(Vo)}reflect(t){return this.sub(Vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new A,ul=new ra;class Oi{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(a,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(t.matrixWorld),this.union(fa)}const s=t.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),pa.subVectors(this.max,Ls),Vi.subVectors(t.a,Ls),Gi.subVectors(t.b,Ls),Wi.subVectors(t.c,Ls),ni.subVectors(Gi,Vi),ii.subVectors(Wi,Gi),xi.subVectors(Vi,Wi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-xi.z,xi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,xi.z,0,-xi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-xi.y,xi.x,0];return!Go(e,Vi,Gi,Wi,pa)||(e=[1,0,0,0,1,0,0,0,1],!Go(e,Vi,Gi,Wi,pa))?!1:(ma.crossVectors(ni,ii),e=[ma.x,ma.y,ma.z],Go(e,Vi,Gi,Wi,pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new A,new A,new A,new A,new A,new A,new A,new A],gn=new A,fa=new Oi,Vi=new A,Gi=new A,Wi=new A,ni=new A,ii=new A,xi=new A,Ls=new A,pa=new A,ma=new A,yi=new A;function Go(i,t,e,n,s){for(let a=0,o=i.length-3;a<=o;a+=3){yi.fromArray(i,a);const r=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),c=t.dot(yi),l=e.dot(yi),u=n.dot(yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>r)return!1}return!0}const rf=new Oi,Is=new A,Wo=new A;class ki{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rf.setFromPoints(t).getCenter(n);let s=0;for(let a=0,o=t.length;a<o;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const e=Is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(Wo)),this.expandByPoint(Is.copy(t.center).sub(Wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new A,Xo=new A,ga=new A,si=new A,$o=new A,_a=new A,qo=new A;class Uc{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xo.copy(t).add(e).multiplyScalar(.5),ga.copy(e).sub(t).normalize(),si.copy(this.origin).sub(Xo);const a=t.distanceTo(e)*.5,o=-this.direction.dot(ga),r=si.dot(this.direction),c=-si.dot(ga),l=si.lengthSq(),u=Math.abs(1-o*o);let m,d,h,_;if(u>0)if(m=o*c-r,d=o*r-c,_=a*u,m>=0)if(d>=-_)if(d<=_){const g=1/u;m*=g,d*=g,h=m*(m+o*d+2*r)+d*(o*m+d+2*c)+l}else d=a,m=Math.max(0,-(o*d+r)),h=-m*m+d*(d+2*c)+l;else d=-a,m=Math.max(0,-(o*d+r)),h=-m*m+d*(d+2*c)+l;else d<=-_?(m=Math.max(0,-(-o*a+r)),d=m>0?-a:Math.min(Math.max(-a,-c),a),h=-m*m+d*(d+2*c)+l):d<=_?(m=0,d=Math.min(Math.max(-a,-c),a),h=d*(d+2*c)+l):(m=Math.max(0,-(o*a+r)),d=m>0?a:Math.min(Math.max(-a,-c),a),h=-m*m+d*(d+2*c)+l);else d=o>0?-a:a,m=Math.max(0,-(o*d+r)),h=-m*m+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Xo).addScaledVector(ga,d),h}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,a=t.radius*t.radius;if(s>a)return null;const o=Math.sqrt(a-s),r=n-o,c=n+o;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,o,r,c;const l=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(a=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(a=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||a>s||((a>n||isNaN(n))&&(n=a),(o<s||isNaN(s))&&(s=o),m>=0?(r=(t.min.z-d.z)*m,c=(t.max.z-d.z)*m):(r=(t.max.z-d.z)*m,c=(t.min.z-d.z)*m),n>c||r>s)||((r>n||n!==n)&&(n=r),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,a){$o.subVectors(e,t),_a.subVectors(n,t),qo.crossVectors($o,_a);let o=this.direction.dot(qo),r;if(o>0){if(s)return null;r=1}else if(o<0)r=-1,o=-o;else return null;si.subVectors(this.origin,t);const c=r*this.direction.dot(_a.crossVectors(si,_a));if(c<0)return null;const l=r*this.direction.dot($o.cross(si));if(l<0||c+l>o)return null;const u=-r*si.dot(qo);return u<0?null:this.at(u/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,a,o,r,c,l,u,m,d,h,_,g,f){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,o,r,c,l,u,m,d,h,_,g,f)}set(t,e,n,s,a,o,r,c,l,u,m,d,h,_,g,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=a,p[5]=o,p[9]=r,p[13]=c,p[2]=l,p[6]=u,p[10]=m,p[14]=d,p[3]=h,p[7]=_,p[11]=g,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),a=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,o=Math.cos(n),r=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(a),m=Math.sin(a);if(t.order==="XYZ"){const d=o*u,h=o*m,_=r*u,g=r*m;e[0]=c*u,e[4]=-c*m,e[8]=l,e[1]=h+_*l,e[5]=d-g*l,e[9]=-r*c,e[2]=g-d*l,e[6]=_+h*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,h=c*m,_=l*u,g=l*m;e[0]=d+g*r,e[4]=_*r-h,e[8]=o*l,e[1]=o*m,e[5]=o*u,e[9]=-r,e[2]=h*r-_,e[6]=g+d*r,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,h=c*m,_=l*u,g=l*m;e[0]=d-g*r,e[4]=-o*m,e[8]=_+h*r,e[1]=h+_*r,e[5]=o*u,e[9]=g-d*r,e[2]=-o*l,e[6]=r,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,h=o*m,_=r*u,g=r*m;e[0]=c*u,e[4]=_*l-h,e[8]=d*l+g,e[1]=c*m,e[5]=g*l+d,e[9]=h*l-_,e[2]=-l,e[6]=r*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,h=o*l,_=r*c,g=r*l;e[0]=c*u,e[4]=g-d*m,e[8]=_*m+h,e[1]=m,e[5]=o*u,e[9]=-r*u,e[2]=-l*u,e[6]=h*m+_,e[10]=d-g*m}else if(t.order==="XZY"){const d=o*c,h=o*l,_=r*c,g=r*l;e[0]=c*u,e[4]=-m,e[8]=l*u,e[1]=d*m+g,e[5]=o*u,e[9]=h*m-_,e[2]=_*m-h,e[6]=r*u,e[10]=g*m+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cf,t,lf)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),ai.crossVectors(n,Ze),ai.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),ai.crossVectors(n,Ze)),ai.normalize(),va.crossVectors(Ze,ai),s[0]=ai.x,s[4]=va.x,s[8]=Ze.x,s[1]=ai.y,s[5]=va.y,s[9]=Ze.y,s[2]=ai.z,s[6]=va.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,o=n[0],r=n[4],c=n[8],l=n[12],u=n[1],m=n[5],d=n[9],h=n[13],_=n[2],g=n[6],f=n[10],p=n[14],x=n[3],M=n[7],b=n[11],P=n[15],T=s[0],E=s[4],R=s[8],B=s[12],v=s[1],y=s[5],L=s[9],U=s[13],k=s[2],G=s[6],F=s[10],q=s[14],W=s[3],st=s[7],at=s[11],mt=s[15];return a[0]=o*T+r*v+c*k+l*W,a[4]=o*E+r*y+c*G+l*st,a[8]=o*R+r*L+c*F+l*at,a[12]=o*B+r*U+c*q+l*mt,a[1]=u*T+m*v+d*k+h*W,a[5]=u*E+m*y+d*G+h*st,a[9]=u*R+m*L+d*F+h*at,a[13]=u*B+m*U+d*q+h*mt,a[2]=_*T+g*v+f*k+p*W,a[6]=_*E+g*y+f*G+p*st,a[10]=_*R+g*L+f*F+p*at,a[14]=_*B+g*U+f*q+p*mt,a[3]=x*T+M*v+b*k+P*W,a[7]=x*E+M*y+b*G+P*st,a[11]=x*R+M*L+b*F+P*at,a[15]=x*B+M*U+b*q+P*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],o=t[1],r=t[5],c=t[9],l=t[13],u=t[2],m=t[6],d=t[10],h=t[14],_=t[3],g=t[7],f=t[11],p=t[15];return _*(+a*c*m-s*l*m-a*r*d+n*l*d+s*r*h-n*c*h)+g*(+e*c*h-e*l*d+a*o*d-s*o*h+s*l*u-a*c*u)+f*(+e*l*m-e*r*h-a*o*m+n*o*h+a*r*u-n*l*u)+p*(-s*r*u-e*c*m+e*r*d+s*o*m-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8],m=t[9],d=t[10],h=t[11],_=t[12],g=t[13],f=t[14],p=t[15],x=m*f*l-g*d*l+g*c*h-r*f*h-m*c*p+r*d*p,M=_*d*l-u*f*l-_*c*h+o*f*h+u*c*p-o*d*p,b=u*g*l-_*m*l+_*r*h-o*g*h-u*r*p+o*m*p,P=_*m*c-u*g*c-_*r*d+o*g*d+u*r*f-o*m*f,T=e*x+n*M+s*b+a*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=x*E,t[1]=(g*d*a-m*f*a-g*s*h+n*f*h+m*s*p-n*d*p)*E,t[2]=(r*f*a-g*c*a+g*s*l-n*f*l-r*s*p+n*c*p)*E,t[3]=(m*c*a-r*d*a-m*s*l+n*d*l+r*s*h-n*c*h)*E,t[4]=M*E,t[5]=(u*f*a-_*d*a+_*s*h-e*f*h-u*s*p+e*d*p)*E,t[6]=(_*c*a-o*f*a-_*s*l+e*f*l+o*s*p-e*c*p)*E,t[7]=(o*d*a-u*c*a+u*s*l-e*d*l-o*s*h+e*c*h)*E,t[8]=b*E,t[9]=(_*m*a-u*g*a-_*n*h+e*g*h+u*n*p-e*m*p)*E,t[10]=(o*g*a-_*r*a+_*n*l-e*g*l-o*n*p+e*r*p)*E,t[11]=(u*r*a-o*m*a-u*n*l+e*m*l+o*n*h-e*r*h)*E,t[12]=P*E,t[13]=(u*g*s-_*m*s+_*n*d-e*g*d-u*n*f+e*m*f)*E,t[14]=(_*r*s-o*g*s-_*n*c+e*g*c+o*n*f-e*r*f)*E,t[15]=(o*m*s-u*r*s+u*n*c-e*m*c-o*n*d+e*r*d)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,o=t.x,r=t.y,c=t.z,l=a*o,u=a*r;return this.set(l*o+n,l*r-s*c,l*c+s*r,0,l*r+s*c,u*r+n,u*c-s*o,0,l*c-s*r,u*c+s*o,a*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,o){return this.set(1,n,a,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,o=e._y,r=e._z,c=e._w,l=a+a,u=o+o,m=r+r,d=a*l,h=a*u,_=a*m,g=o*u,f=o*m,p=r*m,x=c*l,M=c*u,b=c*m,P=n.x,T=n.y,E=n.z;return s[0]=(1-(g+p))*P,s[1]=(h+b)*P,s[2]=(_-M)*P,s[3]=0,s[4]=(h-b)*T,s[5]=(1-(d+p))*T,s[6]=(f+x)*T,s[7]=0,s[8]=(_+M)*E,s[9]=(f-x)*E,s[10]=(1-(d+g))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=Xi.set(s[0],s[1],s[2]).length();const o=Xi.set(s[4],s[5],s[6]).length(),r=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);const l=1/a,u=1/o,m=1/r;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=m,_n.elements[9]*=m,_n.elements[10]*=m,e.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=r,this}makePerspective(t,e,n,s,a,o,r=$n){const c=this.elements,l=2*a/(e-t),u=2*a/(n-s),m=(e+t)/(e-t),d=(n+s)/(n-s);let h,_;if(r===$n)h=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(r===ho)h=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,a,o,r=$n){const c=this.elements,l=1/(e-t),u=1/(n-s),m=1/(o-a),d=(e+t)*l,h=(n+s)*u;let _,g;if(r===$n)_=(o+a)*m,g=-2*m;else if(r===ho)_=a*m,g=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xi=new A,_n=new ne,cf=new A(0,0,0),lf=new A(1,1,1),ai=new A,va=new A,Ze=new A,dl=new ne,fl=new ra;class Qn{constructor(t=0,e=0,n=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],o=s[4],r=s[8],c=s[1],l=s[5],u=s[9],m=s[2],d=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Pe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(r,h));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fl.setFromEuler(this),this.setFromQuaternion(fl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Kh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hf=0;const pl=new A,$i=new ra,Fn=new ne,xa=new A,Ds=new A,uf=new A,df=new ra,ml=new A(1,0,0),gl=new A(0,1,0),_l=new A(0,0,1),vl={type:"added"},ff={type:"removed"},qi={type:"childadded",child:null},Yo={type:"childremoved",child:null};class ve extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new A,e=new Qn,n=new ra,s=new A(1,1,1);function a(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Ht}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(ml,t)}rotateY(t){return this.rotateOnAxis(gl,t)}rotateZ(t){return this.rotateOnAxis(_l,t)}translateOnAxis(t,e){return pl.copy(t).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ml,t)}translateY(t){return this.translateOnAxis(gl,t)}translateZ(t){return this.translateOnAxis(_l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xa.copy(t):xa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ds,xa,this.up):Fn.lookAt(xa,Ds,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Fn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vl),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ff),Yo.child=t,this.dispatchEvent(Yo),Yo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vl),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,uf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,df,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const m=c[l];a(t.shapes,m)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(a(t.materials,this.material[c]));s.material=r}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];s.animations.push(a(t.animations,c))}}if(e){const r=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),m=o(t.shapes),d=o(t.skeletons),h=o(t.animations),_=o(t.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(r){const c=[];for(const l in r){const u=r[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ve.DEFAULT_UP=new A(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new A,Bn=new A,Ko=new A,zn=new A,Yi=new A,Ki=new A,xl=new A,jo=new A,Jo=new A,Zo=new A,Qo=new oe,tr=new oe,er=new oe;class hn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){vn.subVectors(s,e),Bn.subVectors(n,e),Ko.subVectors(t,e);const o=vn.dot(vn),r=vn.dot(Bn),c=vn.dot(Ko),l=Bn.dot(Bn),u=Bn.dot(Ko),m=o*l-r*r;if(m===0)return a.set(0,0,0),null;const d=1/m,h=(l*c-r*u)*d,_=(o*u-r*c)*d;return a.set(1-h-_,_,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,a,o,r,c){return this.getBarycoord(t,e,n,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(r,zn.z),c)}static getInterpolatedAttribute(t,e,n,s,a,o){return Qo.setScalar(0),tr.setScalar(0),er.setScalar(0),Qo.fromBufferAttribute(t,e),tr.fromBufferAttribute(t,n),er.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Qo,a.x),o.addScaledVector(tr,a.y),o.addScaledVector(er,a.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Bn.subVectors(t,e),vn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),vn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let o,r;Yi.subVectors(s,n),Ki.subVectors(a,n),jo.subVectors(t,n);const c=Yi.dot(jo),l=Ki.dot(jo);if(c<=0&&l<=0)return e.copy(n);Jo.subVectors(t,s);const u=Yi.dot(Jo),m=Ki.dot(Jo);if(u>=0&&m<=u)return e.copy(s);const d=c*m-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Yi,o);Zo.subVectors(t,a);const h=Yi.dot(Zo),_=Ki.dot(Zo);if(_>=0&&h<=_)return e.copy(a);const g=h*l-c*_;if(g<=0&&l>=0&&_<=0)return r=l/(l-_),e.copy(n).addScaledVector(Ki,r);const f=u*_-h*m;if(f<=0&&m-u>=0&&h-_>=0)return xl.subVectors(a,s),r=(m-u)/(m-u+(h-_)),e.copy(s).addScaledVector(xl,r);const p=1/(f+g+d);return o=g*p,r=d*p,e.copy(n).addScaledVector(Yi,o).addScaledVector(Ki,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},ya={h:0,s:0,l:0};function nr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Nc(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,o=2*n-a;this.r=nr(o,a,t+1/3),this.g=nr(o,a,t),this.b=nr(o,a,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=s[1],r=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}copyLinearToSRGB(t){return this.r=zo(t.r),this.g=zo(t.g),this.b=zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return ee.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Pe(Ne.r*255,0,255))*65536+Math.round(Pe(Ne.g*255,0,255))*256+Math.round(Pe(Ne.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,s=Ne.g,a=Ne.b,o=Math.max(n,s,a),r=Math.min(n,s,a);let c,l;const u=(r+o)/2;if(r===o)c=0,l=0;else{const m=o-r;switch(l=u<=.5?m/(o+r):m/(2-o-r),o){case n:c=(s-a)/m+(s<a?6:0);break;case s:c=(a-n)/m+2;break;case a:c=(n-s)/m+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Oe){ee.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,s=Ne.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(ya);const n=js(oi.h,ya.h,e),s=js(oi.s,ya.s,e),a=js(oi.l,ya.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Ot;Ot.NAMES=jh;let pf=0;class _i extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=hs,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ir,this.blendDst=Dr,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ir&&(n.blendSrc=this.blendSrc),this.blendDst!==Dr&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const o=[];for(const r in a){const c=a[r];delete c.metadata,o.push(c)}return o}if(e){const a=s(t.textures),o=s(t.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ws extends _i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new A,Ma=new lt;class dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ma.fromBufferAttribute(this,e),Ma.applyMatrix3(t),this.setXY(e,Ma.x,Ma.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),a=se(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gc&&(t.usage=this.usage),t}}class Jh extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zh extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let mf=0;const rn=new ne,ir=new ve,ji=new A,Qe=new Oi,Ns=new Oi,Ce=new A;class we extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($h(t)?Zh:Jh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ht().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return ir.lookAt(t),ir.updateMatrix(),this.applyMatrix4(ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];Qe.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];Ns.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(Qe.min,Ns.min),Qe.expandByPoint(Ce),Ce.addVectors(Qe.max,Ns.max),Qe.expandByPoint(Ce)):(Qe.expandByPoint(Ns.min),Qe.expandByPoint(Ns.max))}Qe.getCenter(n);let s=0;for(let a=0,o=t.count;a<o;a++)Ce.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],c=this.morphTargetsRelative;for(let l=0,u=r.count;l<u;l++)Ce.fromBufferAttribute(r,l),c&&(ji.fromBufferAttribute(t,l),Ce.add(ji)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),r=[],c=[];for(let R=0;R<n.count;R++)r[R]=new A,c[R]=new A;const l=new A,u=new A,m=new A,d=new lt,h=new lt,_=new lt,g=new A,f=new A;function p(R,B,v){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,B),m.fromBufferAttribute(n,v),d.fromBufferAttribute(a,R),h.fromBufferAttribute(a,B),_.fromBufferAttribute(a,v),u.sub(l),m.sub(l),h.sub(d),_.sub(d);const y=1/(h.x*_.y-_.x*h.y);isFinite(y)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(m,-h.y).multiplyScalar(y),f.copy(m).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(y),r[R].add(g),r[B].add(g),r[v].add(g),c[R].add(f),c[B].add(f),c[v].add(f))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,B=x.length;R<B;++R){const v=x[R],y=v.start,L=v.count;for(let U=y,k=y+L;U<k;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const M=new A,b=new A,P=new A,T=new A;function E(R){P.fromBufferAttribute(s,R),T.copy(P);const B=r[R];M.copy(B),M.sub(P.multiplyScalar(P.dot(B))).normalize(),b.crossVectors(T,B);const y=b.dot(c[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,y)}for(let R=0,B=x.length;R<B;++R){const v=x[R],y=v.start,L=v.count;for(let U=y,k=y+L;U<k;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const s=new A,a=new A,o=new A,r=new A,c=new A,l=new A,u=new A,m=new A;if(t)for(let d=0,h=t.count;d<h;d+=3){const _=t.getX(d+0),g=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),o.fromBufferAttribute(e,f),u.subVectors(o,a),m.subVectors(s,a),u.cross(m),r.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),r.add(u),c.add(u),l.add(u),n.setXYZ(_,r.x,r.y,r.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,h=e.count;d<h;d+=3)s.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,a),m.subVectors(s,a),u.cross(m),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(r,c){const l=r.array,u=r.itemSize,m=r.normalized,d=new l.constructor(c.length*u);let h=0,_=0;for(let g=0,f=c.length;g<f;g++){r.isInterleavedBufferAttribute?h=c[g]*r.data.stride+r.offset:h=c[g]*u;for(let p=0;p<u;p++)d[_++]=l[h++]}return new dn(d,u,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const r in s){const c=s[r],l=t(c,n);e.setAttribute(r,l)}const a=this.morphAttributes;for(const r in a){const c=[],l=a[r];for(let u=0,m=l.length;u<m;u++){const d=l[u],h=t(d,n);c.push(h)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let m=0,d=l.length;m<d;m++){const h=l[m];u.push(h.toJSON(t.data))}u.length>0&&(s[c]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const a=t.morphAttributes;for(const l in a){const u=[],m=a[l];for(let d=0,h=m.length;d<h;d++)u.push(m[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const m=o[l];this.addGroup(m.start,m.count,m.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new ne,Mi=new Uc,ba=new ki,Ml=new A,Sa=new A,wa=new A,Ea=new A,sr=new A,Ta=new A,bl=new A,Aa=new A;class Tt extends ve{constructor(t=new we,e=new ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const r=this.morphTargetInfluences;if(a&&r){Ta.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=r[c],m=a[c];u!==0&&(sr.fromBufferAttribute(m,t),o?Ta.addScaledVector(sr,u):Ta.addScaledVector(sr.sub(e),u))}e.add(Ta)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(a),Mi.copy(t.ray).recast(t.near),!(ba.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(ba,Ml)===null||Mi.origin.distanceToSquared(Ml)>(t.far-t.near)**2))&&(yl.copy(a).invert(),Mi.copy(t.ray).applyMatrix4(yl),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s;const a=this.geometry,o=this.material,r=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,m=a.attributes.normal,d=a.groups,h=a.drawRange;if(r!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const f=d[_],p=o[f.materialIndex],x=Math.max(f.start,h.start),M=Math.min(r.count,Math.min(f.start+f.count,h.start+h.count));for(let b=x,P=M;b<P;b+=3){const T=r.getX(b),E=r.getX(b+1),R=r.getX(b+2);s=Ca(this,p,t,n,l,u,m,T,E,R),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const _=Math.max(0,h.start),g=Math.min(r.count,h.start+h.count);for(let f=_,p=g;f<p;f+=3){const x=r.getX(f),M=r.getX(f+1),b=r.getX(f+2);s=Ca(this,o,t,n,l,u,m,x,M,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const f=d[_],p=o[f.materialIndex],x=Math.max(f.start,h.start),M=Math.min(c.count,Math.min(f.start+f.count,h.start+h.count));for(let b=x,P=M;b<P;b+=3){const T=b,E=b+1,R=b+2;s=Ca(this,p,t,n,l,u,m,T,E,R),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const _=Math.max(0,h.start),g=Math.min(c.count,h.start+h.count);for(let f=_,p=g;f<p;f+=3){const x=f,M=f+1,b=f+2;s=Ca(this,o,t,n,l,u,m,x,M,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function gf(i,t,e,n,s,a,o,r){let c;if(t.side===Ve?c=n.intersectTriangle(o,a,s,!0,r):c=n.intersectTriangle(s,a,o,t.side===Jn,r),c===null)return null;Aa.copy(r),Aa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Aa);return l<e.near||l>e.far?null:{distance:l,point:Aa.clone(),object:i}}function Ca(i,t,e,n,s,a,o,r,c,l){i.getVertexPosition(r,Sa),i.getVertexPosition(c,wa),i.getVertexPosition(l,Ea);const u=gf(i,t,e,n,Sa,wa,Ea,bl);if(u){const m=new A;hn.getBarycoord(bl,Sa,wa,Ea,m),s&&(u.uv=hn.getInterpolatedAttribute(s,r,c,l,m,new lt)),a&&(u.uv1=hn.getInterpolatedAttribute(a,r,c,l,m,new lt)),o&&(u.normal=hn.getInterpolatedAttribute(o,r,c,l,m,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:r,b:c,c:l,normal:new A,materialIndex:0};hn.getNormal(Sa,wa,Ea,d.normal),u.face=d,u.barycoord=m}return u}class an extends we{constructor(t=1,e=1,n=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:o};const r=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],u=[],m=[];let d=0,h=0;_("z","y","x",-1,-1,n,e,t,o,a,0),_("z","y","x",1,-1,n,e,-t,o,a,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,a,4),_("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(m,2));function _(g,f,p,x,M,b,P,T,E,R,B){const v=b/E,y=P/R,L=b/2,U=P/2,k=T/2,G=E+1,F=R+1;let q=0,W=0;const st=new A;for(let at=0;at<F;at++){const mt=at*y-U;for(let Vt=0;Vt<G;Vt++){const kt=Vt*v-L;st[g]=kt*x,st[f]=mt*M,st[p]=k,l.push(st.x,st.y,st.z),st[g]=0,st[f]=0,st[p]=T>0?1:-1,u.push(st.x,st.y,st.z),m.push(Vt/E),m.push(1-at/R),q+=1}}for(let at=0;at<R;at++)for(let mt=0;mt<E;mt++){const Vt=d+mt+G*at,kt=d+mt+G*(at+1),$=d+(mt+1)+G*(at+1),J=d+(mt+1)+G*at;c.push(Vt,kt,J),c.push(kt,$,J),W+=6}r.addGroup(h,W,B),h+=W,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=Ms(i[e]);for(const s in n)t[s]=n[s]}return t}function _f(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const vf={clone:Ms,merge:Be};var xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends _i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xf,this.fragmentShader=yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=_f(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class tu extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=$n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new A,Sl=new lt,wl=new lt;class $e extends tu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=na*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Sl,wl),e.subVectors(wl,Sl)}setViewOffset(t,e,n,s,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Zi=1;class Mf extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(Ji,Zi,t,e);s.layers=this.layers,this.add(s);const a=new $e(Ji,Zi,t,e);a.layers=this.layers,this.add(a);const o=new $e(Ji,Zi,t,e);o.layers=this.layers,this.add(o);const r=new $e(Ji,Zi,t,e);r.layers=this.layers,this.add(r);const c=new $e(Ji,Zi,t,e);c.layers=this.layers,this.add(c);const l=new $e(Ji,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,o,r,c]=e;for(const l of e)this.remove(l);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,c,l,u]=this.children,m=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,r),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(m,d,h),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class eu extends ke{constructor(t,e,n,s,a,o,r,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,n,s,a,o,r,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bf extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new eu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new an(5,5,5),a=new pi({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:ui});a.uniforms.tEquirect.value=e;const o=new Tt(s,a),r=e.minFilter;return e.minFilter===Di&&(e.minFilter=yn),new Mf(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(a)}}const ar=new A,Sf=new A,wf=new Ht;class Ai{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ar.subVectors(n,e).cross(Sf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ar),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wf.getNormalMatrix(t),s=this.coplanarPoint(ar).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new ki,Ra=new A;class Oc{constructor(t=new Ai,e=new Ai,n=new Ai,s=new Ai,a=new Ai,o=new Ai){this.planes=[t,e,n,s,a,o]}set(t,e,n,s,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(s),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n){const n=this.planes,s=t.elements,a=s[0],o=s[1],r=s[2],c=s[3],l=s[4],u=s[5],m=s[6],d=s[7],h=s[8],_=s[9],g=s[10],f=s[11],p=s[12],x=s[13],M=s[14],b=s[15];if(n[0].setComponents(c-a,d-l,f-h,b-p).normalize(),n[1].setComponents(c+a,d+l,f+h,b+p).normalize(),n[2].setComponents(c+o,d+u,f+_,b+x).normalize(),n[3].setComponents(c-o,d-u,f-_,b-x).normalize(),n[4].setComponents(c-r,d-m,f-g,b-M).normalize(),e===$n)n[5].setComponents(c+r,d+m,f+g,b+M).normalize();else if(e===ho)n[5].setComponents(r,m,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ra.x=s.normal.x>0?t.max.x:t.min.x,Ra.y=s.normal.y>0?t.max.y:t.min.y,Ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nu(){let i=null,t=!1,e=null,n=null;function s(a,o){e(a,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function Ef(i){const t=new WeakMap;function e(r,c){const l=r.array,u=r.usage,m=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),r.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(l instanceof Uint16Array)r.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:r.version,size:m}}function n(r,c,l){const u=c.array,m=c.updateRanges;if(i.bindBuffer(l,r),m.length===0)i.bufferSubData(l,0,u);else{m.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<m.length;h++){const _=m[d],g=m[h];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,m[d]=g)}m.length=d+1;for(let h=0,_=m.length;h<_;h++){const g=m[h];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function a(r){r.isInterleavedBufferAttribute&&(r=r.data);const c=t.get(r);c&&(i.deleteBuffer(c.buffer),t.delete(r))}function o(r,c){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const u=t.get(r);(!u||u.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const l=t.get(r);if(l===void 0)t.set(r,e(r,c));else if(l.version<r.version){if(l.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,r,c),l.version=r.version}}return{get:s,remove:a,update:o}}class en extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,o=e/2,r=Math.floor(n),c=Math.floor(s),l=r+1,u=c+1,m=t/r,d=e/c,h=[],_=[],g=[],f=[];for(let p=0;p<u;p++){const x=p*d-o;for(let M=0;M<l;M++){const b=M*m-a;_.push(b,-x,0),g.push(0,0,1),f.push(M/r),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<r;x++){const M=x+l*p,b=x+l*(p+1),P=x+1+l*(p+1),T=x+1+l*p;h.push(M,b,T),h.push(b,P,T)}this.setIndex(h),this.setAttribute("position",new re(_,3)),this.setAttribute("normal",new re(g,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.width,t.height,t.widthSegments,t.heightSegments)}}var Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Af=`#ifdef USE_ALPHAHASH
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
#endif`,Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
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
#endif`,Df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
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
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ff=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bf=`#ifdef USE_IRIDESCENCE
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
#endif`,zf=`#ifdef USE_BUMPMAP
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kf=`#define PI 3.141592653589793
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
} // validated`,jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`
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
}`,sp=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
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
}`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_p=`uniform bool receiveShadow;
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
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sp=`PhysicalMaterial material;
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
#endif`,wp=`struct PhysicalMaterial {
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
}`,Ep=`
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Up=`#if defined( USE_POINTS_UV )
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
#endif`,Op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
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
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yp=`#ifdef USE_NORMALMAP
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
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hm=`float getShadowMask() {
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
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
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
}`,Im=`#if DEPTH_PACKING == 3200
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
}`,Dm=`#define DISTANCE
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
}`,Nm=`#define DISTANCE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`uniform float scale;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,zm=`uniform vec3 diffuse;
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
}`,Hm=`#define LAMBERT
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
}`,Vm=`#define LAMBERT
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
}`,Gm=`#define MATCAP
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define NORMAL
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
}`,$m=`#define NORMAL
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
}`,qm=`#define PHONG
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
}`,Ym=`#define PHONG
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
}`,Km=`#define STANDARD
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
}`,jm=`#define STANDARD
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
}`,Jm=`#define TOON
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
}`,Zm=`#define TOON
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
}`,Qm=`uniform float size;
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,n0=`uniform vec3 color;
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
}`,i0=`uniform float rotation;
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
}`,s0=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Tf,alphahash_pars_fragment:Af,alphamap_fragment:Cf,alphamap_pars_fragment:Rf,alphatest_fragment:Pf,alphatest_pars_fragment:Lf,aomap_fragment:If,aomap_pars_fragment:Df,batching_pars_vertex:Nf,batching_vertex:Uf,begin_vertex:Of,beginnormal_vertex:kf,bsdfs:Ff,iridescence_fragment:Bf,bumpmap_pars_fragment:zf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Gf,clipping_planes_vertex:Wf,color_fragment:Xf,color_pars_fragment:$f,color_pars_vertex:qf,color_vertex:Yf,common:Kf,cube_uv_reflection_fragment:jf,defaultnormal_vertex:Jf,displacementmap_pars_vertex:Zf,displacementmap_vertex:Qf,emissivemap_fragment:tp,emissivemap_pars_fragment:ep,colorspace_fragment:np,colorspace_pars_fragment:ip,envmap_fragment:sp,envmap_common_pars_fragment:ap,envmap_pars_fragment:op,envmap_pars_vertex:rp,envmap_physical_pars_fragment:vp,envmap_vertex:cp,fog_vertex:lp,fog_pars_vertex:hp,fog_fragment:up,fog_pars_fragment:dp,gradientmap_pars_fragment:fp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:_p,lights_toon_fragment:xp,lights_toon_pars_fragment:yp,lights_phong_fragment:Mp,lights_phong_pars_fragment:bp,lights_physical_fragment:Sp,lights_physical_pars_fragment:wp,lights_fragment_begin:Ep,lights_fragment_maps:Tp,lights_fragment_end:Ap,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Lp,map_fragment:Ip,map_pars_fragment:Dp,map_particle_fragment:Np,map_particle_pars_fragment:Up,metalnessmap_fragment:Op,metalnessmap_pars_fragment:kp,morphinstance_vertex:Fp,morphcolor_vertex:Bp,morphnormal_vertex:zp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Vp,normal_fragment_begin:Gp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:$p,normal_vertex:qp,normalmap_pars_fragment:Yp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:jp,clearcoat_pars_fragment:Jp,iridescence_pars_fragment:Zp,opaque_fragment:Qp,packing:tm,premultiplied_alpha_fragment:em,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:am,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:rm,shadowmap_pars_vertex:cm,shadowmap_vertex:lm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:dm,skinning_vertex:fm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:_m,tonemapping_pars_fragment:vm,transmission_fragment:xm,transmission_pars_fragment:ym,uv_pars_fragment:Mm,uv_pars_vertex:bm,uv_vertex:Sm,worldpos_vertex:wm,background_vert:Em,background_frag:Tm,backgroundCube_vert:Am,backgroundCube_frag:Cm,cube_vert:Rm,cube_frag:Pm,depth_vert:Lm,depth_frag:Im,distanceRGBA_vert:Dm,distanceRGBA_frag:Nm,equirect_vert:Um,equirect_frag:Om,linedashed_vert:km,linedashed_frag:Fm,meshbasic_vert:Bm,meshbasic_frag:zm,meshlambert_vert:Hm,meshlambert_frag:Vm,meshmatcap_vert:Gm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:$m,meshphong_vert:qm,meshphong_frag:Ym,meshphysical_vert:Km,meshphysical_frag:jm,meshtoon_vert:Jm,meshtoon_frag:Zm,points_vert:Qm,points_frag:t0,shadow_vert:e0,shadow_frag:n0,sprite_vert:i0,sprite_frag:s0},rt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Tn={basic:{uniforms:Be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Be([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Be([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Be([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Be([rt.points,rt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Be([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Be([rt.common,rt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Be([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Be([rt.sprite,rt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Be([rt.common,rt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Be([rt.lights,rt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Tn.physical={uniforms:Be([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Pa={r:0,b:0,g:0},Si=new Qn,a0=new ne;function o0(i,t,e,n,s,a,o){const r=new Ot(0);let c=a===!0?0:1,l,u,m=null,d=0,h=null;function _(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function g(x){let M=!1;const b=_(x);b===null?p(r,c):b&&b.isColor&&(p(b,1),M=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(x,M){const b=_(M);b&&(b.isCubeTexture||b.mapping===To)?(u===void 0&&(u=new Tt(new an(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Ms(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Si.copy(M.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(a0.makeRotationFromEuler(Si)),u.material.toneMapped=ee.getTransfer(b.colorSpace)!==ue,(m!==b||d!==b.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,m=b,d=b.version,h=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Tt(new en(2,2),new pi({name:"BackgroundMaterial",uniforms:Ms(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ee.getTransfer(b.colorSpace)!==ue,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(m!==b||d!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,m=b,d=b.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,M){x.getRGB(Pa,Qh(i)),n.buffers.color.setClear(Pa.r,Pa.g,Pa.b,M,o)}return{getClearColor:function(){return r},setClearColor:function(x,M=1){r.set(x),c=M,p(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(r,c)},render:g,addToRenderList:f}}function r0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let a=s,o=!1;function r(v,y,L,U,k){let G=!1;const F=m(U,L,y);a!==F&&(a=F,l(a.object)),G=h(v,U,L,k),G&&_(v,U,L,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,b(v,y,L,U),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function m(v,y,L){const U=L.wireframe===!0;let k=n[v.id];k===void 0&&(k={},n[v.id]=k);let G=k[y.id];G===void 0&&(G={},k[y.id]=G);let F=G[U];return F===void 0&&(F=d(c()),G[U]=F),F}function d(v){const y=[],L=[],U=[];for(let k=0;k<e;k++)y[k]=0,L[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:L,attributeDivisors:U,object:v,attributes:{},index:null}}function h(v,y,L,U){const k=a.attributes,G=y.attributes;let F=0;const q=L.getAttributes();for(const W in q)if(q[W].location>=0){const at=k[W];let mt=G[W];if(mt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(mt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(mt=v.instanceColor)),at===void 0||at.attribute!==mt||mt&&at.data!==mt.data)return!0;F++}return a.attributesNum!==F||a.index!==U}function _(v,y,L,U){const k={},G=y.attributes;let F=0;const q=L.getAttributes();for(const W in q)if(q[W].location>=0){let at=G[W];at===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(at=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(at=v.instanceColor));const mt={};mt.attribute=at,at&&at.data&&(mt.data=at.data),k[W]=mt,F++}a.attributes=k,a.attributesNum=F,a.index=U}function g(){const v=a.newAttributes;for(let y=0,L=v.length;y<L;y++)v[y]=0}function f(v){p(v,0)}function p(v,y){const L=a.newAttributes,U=a.enabledAttributes,k=a.attributeDivisors;L[v]=1,U[v]===0&&(i.enableVertexAttribArray(v),U[v]=1),k[v]!==y&&(i.vertexAttribDivisor(v,y),k[v]=y)}function x(){const v=a.newAttributes,y=a.enabledAttributes;for(let L=0,U=y.length;L<U;L++)y[L]!==v[L]&&(i.disableVertexAttribArray(L),y[L]=0)}function M(v,y,L,U,k,G,F){F===!0?i.vertexAttribIPointer(v,y,L,k,G):i.vertexAttribPointer(v,y,L,U,k,G)}function b(v,y,L,U){g();const k=U.attributes,G=L.getAttributes(),F=y.defaultAttributeValues;for(const q in G){const W=G[q];if(W.location>=0){let st=k[q];if(st===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),st!==void 0){const at=st.normalized,mt=st.itemSize,Vt=t.get(st);if(Vt===void 0)continue;const kt=Vt.buffer,$=Vt.type,J=Vt.bytesPerElement,yt=$===i.INT||$===i.UNSIGNED_INT||st.gpuType===Ac;if(st.isInterleavedBufferAttribute){const gt=st.data,Ft=gt.stride,Pt=st.offset;if(gt.isInstancedInterleavedBuffer){for(let $t=0;$t<W.locationSize;$t++)p(W.location+$t,gt.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let $t=0;$t<W.locationSize;$t++)f(W.location+$t);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let $t=0;$t<W.locationSize;$t++)M(W.location+$t,mt/W.locationSize,$,at,Ft*J,(Pt+mt/W.locationSize*$t)*J,yt)}else{if(st.isInstancedBufferAttribute){for(let gt=0;gt<W.locationSize;gt++)p(W.location+gt,st.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let gt=0;gt<W.locationSize;gt++)f(W.location+gt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let gt=0;gt<W.locationSize;gt++)M(W.location+gt,mt/W.locationSize,$,at,mt*J,mt/W.locationSize*gt*J,yt)}}else if(F!==void 0){const at=F[q];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(W.location,at);break;case 3:i.vertexAttrib3fv(W.location,at);break;case 4:i.vertexAttrib4fv(W.location,at);break;default:i.vertexAttrib1fv(W.location,at)}}}}x()}function P(){R();for(const v in n){const y=n[v];for(const L in y){const U=y[L];for(const k in U)u(U[k].object),delete U[k];delete y[L]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const y=n[v.id];for(const L in y){const U=y[L];for(const k in U)u(U[k].object),delete U[k];delete y[L]}delete n[v.id]}function E(v){for(const y in n){const L=n[y];if(L[v.id]===void 0)continue;const U=L[v.id];for(const k in U)u(U[k].object),delete U[k];delete L[v.id]}}function R(){B(),o=!0,a!==s&&(a=s,l(a.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:R,resetDefaultState:B,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:f,disableUnusedAttributes:x}}function c0(i,t,e){let n;function s(l){n=l}function a(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,m){m!==0&&(i.drawArraysInstanced(n,l,u,m),e.update(u,n,m))}function r(l,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,m);let h=0;for(let _=0;_<m;_++)h+=u[_];e.update(h,n,1)}function c(l,u,m,d){if(m===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<l.length;_++)o(l[_],u[_],d[_]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,m);let _=0;for(let g=0;g<m;g++)_+=u[g];for(let g=0;g<d.length;g++)e.update(_,n,d[g])}}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=c}function l0(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==bn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(E){const R=E===oa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Zn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Pn&&!R)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const m=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:r,precision:l,logarithmicDepthBuffer:m,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:P,maxSamples:T}}function h0(i){const t=this;let e=null,n=0,s=!1,a=!1;const o=new Ai,r=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){const h=m.length!==0||d||n!==0||s;return s=d,n=m.length,h},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,d){e=u(m,d,0)},this.setState=function(m,d,h){const _=m.clippingPlanes,g=m.clipIntersection,f=m.clipShadows,p=i.get(m);if(!s||_===null||_.length===0||a&&!f)a?u(null):l();else{const x=a?0:n,M=x*4;let b=p.clippingState||null;c.value=b,b=u(_,d,M,h);for(let P=0;P!==M;++P)b[P]=e[P];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(m,d,h,_){const g=m!==null?m.length:0;let f=null;if(g!==0){if(f=c.value,_!==!0||f===null){const p=h+g*4,x=d.matrixWorldInverse;r.getNormalMatrix(x),(f===null||f.length<p)&&(f=new Float32Array(p));for(let M=0,b=h;M!==g;++M,b+=4)o.copy(m[M]).applyMatrix4(x,r),o.normal.toArray(f,b),f[b+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function u0(i){let t=new WeakMap;function e(o,r){return r===Hr?o.mapping=_s:r===Vr&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){const r=o.mapping;if(r===Hr||r===Vr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new bf(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const r=o.target;r.removeEventListener("dispose",s);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class iu extends tu{constructor(t=-1,e=1,n=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,o=n+t,r=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,r-=u*this.view.offsetY,c=r-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cs=4,El=[.125,.215,.35,.446,.526,.582],Ii=20,or=new iu,Tl=new Ot;let rr=null,cr=0,lr=0,hr=!1;const Ci=(1+Math.sqrt(5))/2,Qi=1/Ci,Al=[new A(-Ci,Qi,0),new A(Ci,Qi,0),new A(-Qi,0,Ci),new A(Qi,0,Ci),new A(0,Ci,-Qi),new A(0,Ci,Qi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){rr=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rr,cr,lr),this._renderer.xr.enabled=hr,t.scissorTest=!1,La(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rr=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:oa,format:bn,colorSpace:gi,depthBuffer:!1},s=Rl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(a)),this._blurMaterial=f0(a,t,e)}return s}_compileMaterial(t){const e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,or)}_sceneToCubeUV(t,e,n,s){const r=new $e(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,m=u.autoClear,d=u.toneMapping;u.getClearColor(Tl),u.toneMapping=di,u.autoClear=!1;const h=new ws({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),_=new Tt(new an,h);let g=!1;const f=t.background;f?f.isColor&&(h.color.copy(f),t.background=null,g=!0):(h.color.copy(Tl),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(r.up.set(0,c[p],0),r.lookAt(l[p],0,0)):x===1?(r.up.set(0,0,c[p]),r.lookAt(0,l[p],0)):(r.up.set(0,c[p],0),r.lookAt(0,0,l[p]));const M=this._cubeSize;La(s,x*M,p>2?M:0,M,M),u.setRenderTarget(s),g&&u.render(_,r),u.render(t,r)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=m,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===_s||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());const a=s?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;const c=this._cubeSize;La(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=Al[(s-a-1)%Al.length];this._blur(t,a-1,a,o,r)}e.autoClear=n}_blur(t,e,n,s,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",a),this._halfBlur(o,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,m=new Tt(this._lodPlanes[s],l),d=l.uniforms,h=this._sizeLods[n]-1,_=isFinite(a)?Math.PI/(2*h):2*Math.PI/(2*Ii-1),g=a/_,f=isFinite(a)?1+Math.floor(u*g):Ii;f>Ii&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ii}`);const p=[];let x=0;for(let E=0;E<Ii;++E){const R=E/g,B=Math.exp(-R*R/2);p.push(B),E===0?x+=B:E<f&&(x+=2*B)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;const b=this._sizeLods[s],P=3*b*(s>M-cs?s-M+cs:0),T=4*(this._cubeSize-b);La(e,P,T,3*b,2*b),c.setRenderTarget(e),c.render(m,or)}}function d0(i){const t=[],e=[],n=[];let s=i;const a=i-cs+1+El.length;for(let o=0;o<a;o++){const r=Math.pow(2,s);e.push(r);let c=1/r;o>i-cs?c=El[o-i+cs-1]:o===0&&(c=0),n.push(c);const l=1/(r-2),u=-l,m=1+l,d=[u,u,m,u,m,m,u,u,m,m,u,m],h=6,_=6,g=3,f=2,p=1,x=new Float32Array(g*_*h),M=new Float32Array(f*_*h),b=new Float32Array(p*_*h);for(let T=0;T<h;T++){const E=T%3*2/3-1,R=T>2?0:-1,B=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];x.set(B,g*_*T),M.set(d,f*_*T);const v=[T,T,T,T,T,T];b.set(v,p*_*T)}const P=new we;P.setAttribute("position",new dn(x,g)),P.setAttribute("uv",new dn(M,f)),P.setAttribute("faceIndex",new dn(b,p)),t.push(P),s>cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rl(i,t,e){const n=new Ui(i,t,e);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function La(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function f0(i,t,e){const n=new Float32Array(Ii),s=new A(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Pl(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ll(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function p0(i){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const c=r.mapping,l=c===Hr||c===Vr,u=c===_s||c===vs;if(l||u){let m=t.get(r);const d=m!==void 0?m.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==d)return e===null&&(e=new Cl(i)),m=l?e.fromEquirectangular(r,m):e.fromCubemap(r,m),m.texture.pmremVersion=r.pmremVersion,t.set(r,m),m.texture;if(m!==void 0)return m.texture;{const h=r.image;return l&&h&&h.height>0||u&&h&&s(h)?(e===null&&(e=new Cl(i)),m=l?e.fromEquirectangular(r):e.fromCubemap(r),m.texture.pmremVersion=r.pmremVersion,t.set(r,m),r.addEventListener("dispose",a),m.texture):null}}}return r}function s(r){let c=0;const l=6;for(let u=0;u<l;u++)r[u]!==void 0&&c++;return c===l}function a(r){const c=r.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function m0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Za("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function g0(i,t,e,n){const s={},a=new WeakMap;function o(m){const d=m.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let f=0,p=g.length;f<p;f++)t.remove(g[f])}d.removeEventListener("dispose",o),delete s[d.id];const h=a.get(d);h&&(t.remove(h),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function r(m,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(m){const d=m.attributes;for(const _ in d)t.update(d[_],i.ARRAY_BUFFER);const h=m.morphAttributes;for(const _ in h){const g=h[_];for(let f=0,p=g.length;f<p;f++)t.update(g[f],i.ARRAY_BUFFER)}}function l(m){const d=[],h=m.index,_=m.attributes.position;let g=0;if(h!==null){const x=h.array;g=h.version;for(let M=0,b=x.length;M<b;M+=3){const P=x[M+0],T=x[M+1],E=x[M+2];d.push(P,T,T,E,E,P)}}else if(_!==void 0){const x=_.array;g=_.version;for(let M=0,b=x.length/3-1;M<b;M+=3){const P=M+0,T=M+1,E=M+2;d.push(P,T,T,E,E,P)}}else return;const f=new($h(d)?Zh:Jh)(d,1);f.version=g;const p=a.get(m);p&&t.remove(p),a.set(m,f)}function u(m){const d=a.get(m);if(d){const h=m.index;h!==null&&d.version<h.version&&l(m)}else l(m);return a.get(m)}return{get:r,update:c,getWireframeAttribute:u}}function _0(i,t,e){let n;function s(d){n=d}let a,o;function r(d){a=d.type,o=d.bytesPerElement}function c(d,h){i.drawElements(n,h,a,d*o),e.update(h,n,1)}function l(d,h,_){_!==0&&(i.drawElementsInstanced(n,h,a,d*o,_),e.update(h,n,_))}function u(d,h,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,a,d,0,_);let f=0;for(let p=0;p<_;p++)f+=h[p];e.update(f,n,1)}function m(d,h,_,g){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)l(d[p]/o,h[p],g[p]);else{f.multiDrawElementsInstancedWEBGL(n,h,0,a,d,0,g,0,_);let p=0;for(let x=0;x<_;x++)p+=h[x];for(let x=0;x<g.length;x++)e.update(p,n,g[x])}}this.setMode=s,this.setIndex=r,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=m}function v0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,r){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=r*(a/3);break;case i.LINES:e.lines+=r*(a/2);break;case i.LINE_STRIP:e.lines+=r*(a-1);break;case i.LINE_LOOP:e.lines+=r*a;break;case i.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function x0(i,t,e){const n=new WeakMap,s=new oe;function a(o,r,c){const l=o.morphTargetInfluences,u=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,m=u!==void 0?u.length:0;let d=n.get(r);if(d===void 0||d.count!==m){let v=function(){R.dispose(),n.delete(r),r.removeEventListener("dispose",v)};var h=v;d!==void 0&&d.texture.dispose();const _=r.morphAttributes.position!==void 0,g=r.morphAttributes.normal!==void 0,f=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],x=r.morphAttributes.normal||[],M=r.morphAttributes.color||[];let b=0;_===!0&&(b=1),g===!0&&(b=2),f===!0&&(b=3);let P=r.attributes.position.count*b,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const E=new Float32Array(P*T*4*m),R=new Yh(E,P,T,m);R.type=Pn,R.needsUpdate=!0;const B=b*4;for(let y=0;y<m;y++){const L=p[y],U=x[y],k=M[y],G=P*T*4*y;for(let F=0;F<L.count;F++){const q=F*B;_===!0&&(s.fromBufferAttribute(L,F),E[G+q+0]=s.x,E[G+q+1]=s.y,E[G+q+2]=s.z,E[G+q+3]=0),g===!0&&(s.fromBufferAttribute(U,F),E[G+q+4]=s.x,E[G+q+5]=s.y,E[G+q+6]=s.z,E[G+q+7]=0),f===!0&&(s.fromBufferAttribute(k,F),E[G+q+8]=s.x,E[G+q+9]=s.y,E[G+q+10]=s.z,E[G+q+11]=k.itemSize===4?s.w:1)}}d={count:m,texture:R,size:new lt(P,T)},n.set(r,d),r.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let f=0;f<l.length;f++)_+=l[f];const g=r.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function y0(i,t,e,n){let s=new WeakMap;function a(c){const l=n.render.frame,u=c.geometry,m=t.get(c,u);if(s.get(m)!==l&&(t.update(m),s.set(m,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return m}function o(){s=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}class su extends ke{constructor(t,e,n,s,a,o,r,c,l,u=us){if(u!==us&&u!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===us&&(n=Ni),n===void 0&&u===ys&&(n=xs),super(null,s,a,o,r,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:He,this.minFilter=c!==void 0?c:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const au=new ke,Il=new su(1,1),ou=new Yh,ru=new of,cu=new eu,Dl=[],Nl=[],Ul=new Float32Array(16),Ol=new Float32Array(9),kl=new Float32Array(4);function Es(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=Dl[s];if(a===void 0&&(a=new Float32Array(s),Dl[s]=a),t!==0){n.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,i[o].toArray(a,r)}return a}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ro(i,t){let e=Nl[t];e===void 0&&(e=new Int32Array(t),Nl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function M0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function E0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;kl.set(n),i.uniformMatrix2fv(this.addr,!1,kl),Ae(e,n)}}function T0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Ol.set(n),i.uniformMatrix3fv(this.addr,!1,Ol),Ae(e,n)}}function A0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Ul.set(n),i.uniformMatrix4fv(this.addr,!1,Ul),Ae(e,n)}}function C0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function I0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function O0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Il.compareFunction=Xh,a=Il):a=au,e.setTexture2D(t||a,s)}function k0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ru,s)}function F0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cu,s)}function B0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ou,s)}function z0(i){switch(i){case 5126:return M0;case 35664:return b0;case 35665:return S0;case 35666:return w0;case 35674:return E0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return C0;case 35667:case 35671:return R0;case 35668:case 35672:return P0;case 35669:case 35673:return L0;case 5125:return I0;case 36294:return D0;case 36295:return N0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return B0}}function H0(i,t){i.uniform1fv(this.addr,t)}function V0(i,t){const e=Es(t,this.size,2);i.uniform2fv(this.addr,e)}function G0(i,t){const e=Es(t,this.size,3);i.uniform3fv(this.addr,e)}function W0(i,t){const e=Es(t,this.size,4);i.uniform4fv(this.addr,e)}function X0(i,t){const e=Es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $0(i,t){const e=Es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function q0(i,t){const e=Es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Y0(i,t){i.uniform1iv(this.addr,t)}function K0(i,t){i.uniform2iv(this.addr,t)}function j0(i,t){i.uniform3iv(this.addr,t)}function J0(i,t){i.uniform4iv(this.addr,t)}function Z0(i,t){i.uniform1uiv(this.addr,t)}function Q0(i,t){i.uniform2uiv(this.addr,t)}function tg(i,t){i.uniform3uiv(this.addr,t)}function eg(i,t){i.uniform4uiv(this.addr,t)}function ng(i,t,e){const n=this.cache,s=t.length,a=Ro(e,s);Te(n,a)||(i.uniform1iv(this.addr,a),Ae(n,a));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||au,a[o])}function ig(i,t,e){const n=this.cache,s=t.length,a=Ro(e,s);Te(n,a)||(i.uniform1iv(this.addr,a),Ae(n,a));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ru,a[o])}function sg(i,t,e){const n=this.cache,s=t.length,a=Ro(e,s);Te(n,a)||(i.uniform1iv(this.addr,a),Ae(n,a));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cu,a[o])}function ag(i,t,e){const n=this.cache,s=t.length,a=Ro(e,s);Te(n,a)||(i.uniform1iv(this.addr,a),Ae(n,a));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ou,a[o])}function og(i){switch(i){case 5126:return H0;case 35664:return V0;case 35665:return G0;case 35666:return W0;case 35674:return X0;case 35675:return $0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return K0;case 35668:case 35672:return j0;case 35669:case 35673:return J0;case 5125:return Z0;case 36294:return Q0;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return ag}}class rg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=z0(e.type)}}class cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=og(e.type)}}class lg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const r=s[a];r.setValue(t,e[r.id],n)}}}const ur=/(\w+)(\])?(\[|\.)?/g;function Fl(i,t){i.seq.push(t),i.map[t.id]=t}function hg(i,t,e){const n=i.name,s=n.length;for(ur.lastIndex=0;;){const a=ur.exec(n),o=ur.lastIndex;let r=a[1];const c=a[2]==="]",l=a[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===s){Fl(e,l===void 0?new rg(r,i,t):new cg(r,i,t));break}else{let m=e.map[r];m===void 0&&(m=new lg(r),Fl(e,m)),e=m}}}class Qa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),o=t.getUniformLocation(e,a.name);hg(a,o,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,o=e.length;a!==o;++a){const r=e[a],c=n[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Bl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ug=37297;let dg=0;function fg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=s;o<a;o++){const r=o+1;n.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return n.join(`
`)}function pg(i){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(i);let n;switch(t===e?n="":t===lo&&e===co?n="LinearDisplayP3ToLinearSRGB":t===co&&e===lo&&(n="LinearSRGBToLinearDisplayP3"),i){case gi:case Co:return[n,"LinearTransferOETF"];case Oe:case Dc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function zl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+fg(i.getShaderSource(t),o)}else return s}function mg(i,t){const e=pg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function gg(i,t){let e;switch(t){case gd:e="Linear";break;case _d:e="Reinhard";break;case vd:e="Cineon";break;case xd:e="ACESFilmic";break;case Md:e="AgX";break;case bd:e="Neutral";break;case yd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ia=new A;function _g(){ee.getLuminanceCoefficients(Ia);const i=Ia.x.toFixed(4),t=Ia.y.toFixed(4),e=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function xg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),o=a.name;let r=1;a.type===i.FLOAT_MAT2&&(r=2),a.type===i.FLOAT_MAT3&&(r=3),a.type===i.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:i.getAttribLocation(t,o),locationSize:r}}return e}function $s(i){return i!==""}function Hl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(i){return i.replace(Mg,Sg)}const bg=new Map;function Sg(i,t){let e=zt[t];if(e===void 0){const n=bg.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _c(e)}const wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(i){return i.replace(wg,Eg)}function Eg(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Wl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Tg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ku?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ag(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case vs:t="ENVMAP_TYPE_CUBE";break;case To:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function Rg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dh:t="ENVMAP_BLENDING_MULTIPLY";break;case pd:t="ENVMAP_BLENDING_MIX";break;case md:t="ENVMAP_BLENDING_ADD";break}return t}function Pg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Lg(i,t,e,n){const s=i.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const c=Tg(e),l=Ag(e),u=Cg(e),m=Rg(e),d=Pg(e),h=vg(e),_=xg(a),g=s.createProgram();let f,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter($s).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter($s).join(`
`),p.length>0&&(p+=`
`)):(f=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),p=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?zt.tonemapping_pars_fragment:"",e.toneMapping!==di?gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,mg("linearToOutputTexel",e.outputColorSpace),_g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($s).join(`
`)),o=_c(o),o=Hl(o,e),o=Vl(o,e),r=_c(r),r=Hl(r,e),r=Vl(r,e),o=Gl(o),r=Gl(r),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+f+o,b=x+p+r,P=Bl(s,s.VERTEX_SHADER,M),T=Bl(s,s.FRAGMENT_SHADER,b);s.attachShader(g,P),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(y){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(g).trim(),U=s.getShaderInfoLog(P).trim(),k=s.getShaderInfoLog(T).trim();let G=!0,F=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,P,T);else{const q=zl(s,P,"vertex"),W=zl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+L+`
`+q+`
`+W)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(U===""||k==="")&&(F=!1);F&&(y.diagnostics={runnable:G,programLog:L,vertexShader:{log:U,prefix:f},fragmentShader:{log:k,prefix:p}})}s.deleteShader(P),s.deleteShader(T),R=new Qa(s,g),B=yg(s,g)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let B;this.getAttributes=function(){return B===void 0&&E(this),B};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,ug)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=T,this}let Ig=0;class Dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ng(t),e.set(t,n)),n}}class Ng{constructor(t){this.id=Ig++,this.code=t,this.usedTimes=0}}function Ug(i,t,e,n,s,a,o){const r=new Kh,c=new Dg,l=new Set,u=[],m=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,h=s.vertexTextures;let _=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,y,L,U,k){const G=U.fog,F=k.geometry,q=v.isMeshStandardMaterial?U.environment:null,W=(v.isMeshStandardMaterial?e:t).get(v.envMap||q),st=W&&W.mapping===To?W.image.height:null,at=g[v.type];v.precision!==null&&(_=s.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const mt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Vt=mt!==void 0?mt.length:0;let kt=0;F.morphAttributes.position!==void 0&&(kt=1),F.morphAttributes.normal!==void 0&&(kt=2),F.morphAttributes.color!==void 0&&(kt=3);let $,J,yt,gt;if(at){const Xe=Tn[at];$=Xe.vertexShader,J=Xe.fragmentShader}else $=v.vertexShader,J=v.fragmentShader,c.update(v),yt=c.getVertexShaderID(v),gt=c.getFragmentShaderID(v);const Ft=i.getRenderTarget(),Pt=k.isInstancedMesh===!0,$t=k.isBatchedMesh===!0,ae=!!v.map,qt=!!v.matcap,I=!!W,Ke=!!v.aoMap,Wt=!!v.lightMap,Kt=!!v.bumpMap,It=!!v.normalMap,le=!!v.displacementMap,Ut=!!v.emissiveMap,C=!!v.metalnessMap,S=!!v.roughnessMap,z=v.anisotropy>0,K=v.clearcoat>0,tt=v.dispersion>0,Y=v.iridescence>0,St=v.sheen>0,ct=v.transmission>0,_t=z&&!!v.anisotropyMap,jt=K&&!!v.clearcoatMap,nt=K&&!!v.clearcoatNormalMap,vt=K&&!!v.clearcoatRoughnessMap,Dt=Y&&!!v.iridescenceMap,Nt=Y&&!!v.iridescenceThicknessMap,xt=St&&!!v.sheenColorMap,Xt=St&&!!v.sheenRoughnessMap,Bt=!!v.specularMap,ce=!!v.specularColorMap,D=!!v.specularIntensityMap,dt=ct&&!!v.transmissionMap,X=ct&&!!v.thicknessMap,Z=!!v.gradientMap,ht=!!v.alphaMap,ft=v.alphaTest>0,Yt=!!v.alphaHash,be=!!v.extensions;let We=di;v.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(We=i.toneMapping);const Jt={shaderID:at,shaderType:v.type,shaderName:v.name,vertexShader:$,fragmentShader:J,defines:v.defines,customVertexShaderID:yt,customFragmentShaderID:gt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:$t,batchingColor:$t&&k._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&k.instanceColor!==null,instancingMorph:Pt&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Ft===null?i.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:gi,alphaToCoverage:!!v.alphaToCoverage,map:ae,matcap:qt,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:st,aoMap:Ke,lightMap:Wt,bumpMap:Kt,normalMap:It,displacementMap:h&&le,emissiveMap:Ut,normalMapObjectSpace:It&&v.normalMapType===Td,normalMapTangentSpace:It&&v.normalMapType===Wh,metalnessMap:C,roughnessMap:S,anisotropy:z,anisotropyMap:_t,clearcoat:K,clearcoatMap:jt,clearcoatNormalMap:nt,clearcoatRoughnessMap:vt,dispersion:tt,iridescence:Y,iridescenceMap:Dt,iridescenceThicknessMap:Nt,sheen:St,sheenColorMap:xt,sheenRoughnessMap:Xt,specularMap:Bt,specularColorMap:ce,specularIntensityMap:D,transmission:ct,transmissionMap:dt,thicknessMap:X,gradientMap:Z,opaque:v.transparent===!1&&v.blending===hs&&v.alphaToCoverage===!1,alphaMap:ht,alphaTest:ft,alphaHash:Yt,combine:v.combine,mapUv:ae&&f(v.map.channel),aoMapUv:Ke&&f(v.aoMap.channel),lightMapUv:Wt&&f(v.lightMap.channel),bumpMapUv:Kt&&f(v.bumpMap.channel),normalMapUv:It&&f(v.normalMap.channel),displacementMapUv:le&&f(v.displacementMap.channel),emissiveMapUv:Ut&&f(v.emissiveMap.channel),metalnessMapUv:C&&f(v.metalnessMap.channel),roughnessMapUv:S&&f(v.roughnessMap.channel),anisotropyMapUv:_t&&f(v.anisotropyMap.channel),clearcoatMapUv:jt&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:nt&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&f(v.sheenRoughnessMap.channel),specularMapUv:Bt&&f(v.specularMap.channel),specularColorMapUv:ce&&f(v.specularColorMap.channel),specularIntensityMapUv:D&&f(v.specularIntensityMap.channel),transmissionMapUv:dt&&f(v.transmissionMap.channel),thicknessMapUv:X&&f(v.thicknessMap.channel),alphaMapUv:ht&&f(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(It||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&(ae||ht),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:kt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:ae&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===Ve,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:be&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&v.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function x(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)y.push(L),y.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(M(y,v),b(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function M(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function b(v,y){r.disableAll(),y.supportsVertexTextures&&r.enable(0),y.instancing&&r.enable(1),y.instancingColor&&r.enable(2),y.instancingMorph&&r.enable(3),y.matcap&&r.enable(4),y.envMap&&r.enable(5),y.normalMapObjectSpace&&r.enable(6),y.normalMapTangentSpace&&r.enable(7),y.clearcoat&&r.enable(8),y.iridescence&&r.enable(9),y.alphaTest&&r.enable(10),y.vertexColors&&r.enable(11),y.vertexAlphas&&r.enable(12),y.vertexUv1s&&r.enable(13),y.vertexUv2s&&r.enable(14),y.vertexUv3s&&r.enable(15),y.vertexTangents&&r.enable(16),y.anisotropy&&r.enable(17),y.alphaHash&&r.enable(18),y.batching&&r.enable(19),y.dispersion&&r.enable(20),y.batchingColor&&r.enable(21),v.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.reverseDepthBuffer&&r.enable(4),y.skinning&&r.enable(5),y.morphTargets&&r.enable(6),y.morphNormals&&r.enable(7),y.morphColors&&r.enable(8),y.premultipliedAlpha&&r.enable(9),y.shadowMapEnabled&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),y.alphaToCoverage&&r.enable(20),v.push(r.mask)}function P(v){const y=g[v.type];let L;if(y){const U=Tn[y];L=vf.clone(U.uniforms)}else L=v.uniforms;return L}function T(v,y){let L;for(let U=0,k=u.length;U<k;U++){const G=u[U];if(G.cacheKey===y){L=G,++L.usedTimes;break}}return L===void 0&&(L=new Lg(i,y,v,a),u.push(L)),L}function E(v){if(--v.usedTimes===0){const y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),v.destroy()}}function R(v){c.remove(v)}function B(){c.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:P,acquireProgram:T,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:B}}function Og(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function n(o){i.delete(o)}function s(o,r,c){i.get(o)[r]=c}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function kg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $l(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function o(m,d,h,_,g,f){let p=i[t];return p===void 0?(p={id:m.id,object:m,geometry:d,material:h,groupOrder:_,renderOrder:m.renderOrder,z:g,group:f},i[t]=p):(p.id=m.id,p.object=m,p.geometry=d,p.material=h,p.groupOrder=_,p.renderOrder=m.renderOrder,p.z=g,p.group=f),t++,p}function r(m,d,h,_,g,f){const p=o(m,d,h,_,g,f);h.transmission>0?n.push(p):h.transparent===!0?s.push(p):e.push(p)}function c(m,d,h,_,g,f){const p=o(m,d,h,_,g,f);h.transmission>0?n.unshift(p):h.transparent===!0?s.unshift(p):e.unshift(p)}function l(m,d){e.length>1&&e.sort(m||kg),n.length>1&&n.sort(d||Xl),s.length>1&&s.sort(d||Xl)}function u(){for(let m=t,d=i.length;m<d;m++){const h=i[m];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:r,unshift:c,finish:u,sort:l}}function Fg(){let i=new WeakMap;function t(n,s){const a=i.get(n);let o;return a===void 0?(o=new $l,i.set(n,[o])):s>=a.length?(o=new $l,a.push(o)):o=a[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Bg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Ot};break;case"SpotLight":e={position:new A,direction:new A,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function zg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Hg=0;function Vg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gg(i){const t=new Bg,e=zg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,a=new ne,o=new ne;function r(l){let u=0,m=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let h=0,_=0,g=0,f=0,p=0,x=0,M=0,b=0,P=0,T=0,E=0;l.sort(Vg);for(let B=0,v=l.length;B<v;B++){const y=l[B],L=y.color,U=y.intensity,k=y.distance,G=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=L.r*U,m+=L.g*U,d+=L.b*U;else if(y.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(y.sh.coefficients[F],U);E++}else if(y.isDirectionalLight){const F=t.get(y);if(F.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const q=y.shadow,W=e.get(y);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.directionalShadow[h]=W,n.directionalShadowMap[h]=G,n.directionalShadowMatrix[h]=y.shadow.matrix,x++}n.directional[h]=F,h++}else if(y.isSpotLight){const F=t.get(y);F.position.setFromMatrixPosition(y.matrixWorld),F.color.copy(L).multiplyScalar(U),F.distance=k,F.coneCos=Math.cos(y.angle),F.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),F.decay=y.decay,n.spot[g]=F;const q=y.shadow;if(y.map&&(n.spotLightMap[P]=y.map,P++,q.updateMatrices(y),y.castShadow&&T++),n.spotLightMatrix[g]=q.matrix,y.castShadow){const W=e.get(y);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=G,b++}g++}else if(y.isRectAreaLight){const F=t.get(y);F.color.copy(L).multiplyScalar(U),F.halfWidth.set(y.width*.5,0,0),F.halfHeight.set(0,y.height*.5,0),n.rectArea[f]=F,f++}else if(y.isPointLight){const F=t.get(y);if(F.color.copy(y.color).multiplyScalar(y.intensity),F.distance=y.distance,F.decay=y.decay,y.castShadow){const q=y.shadow,W=e.get(y);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=y.shadow.matrix,M++}n.point[_]=F,_++}else if(y.isHemisphereLight){const F=t.get(y);F.skyColor.copy(y.color).multiplyScalar(U),F.groundColor.copy(y.groundColor).multiplyScalar(U),n.hemi[p]=F,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==h||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==f||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==M||R.numSpotShadows!==b||R.numSpotMaps!==P||R.numLightProbes!==E)&&(n.directional.length=h,n.spot.length=g,n.rectArea.length=f,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,R.directionalLength=h,R.pointLength=_,R.spotLength=g,R.rectAreaLength=f,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=M,R.numSpotShadows=b,R.numSpotMaps=P,R.numLightProbes=E,n.version=Hg++)}function c(l,u){let m=0,d=0,h=0,_=0,g=0;const f=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const M=l[p];if(M.isDirectionalLight){const b=n.directional[m];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),m++}else if(M.isSpotLight){const b=n.spot[h];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),h++}else if(M.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),g++}}}return{setup:r,setupView:c,state:n}}function ql(i){const t=new Gg(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function r(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:r,setupLightsView:c,pushLight:a,pushShadow:o}}function Wg(i){let t=new WeakMap;function e(s,a=0){const o=t.get(s);let r;return o===void 0?(r=new ql(i),t.set(s,[r])):a>=o.length?(r=new ql(i),o.push(r)):r=o[a],r}function n(){t=new WeakMap}return{get:e,dispose:n}}class Xg extends _i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $g extends _i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
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
}`;function Kg(i,t,e){let n=new Oc;const s=new lt,a=new lt,o=new oe,r=new Xg({depthPacking:Ed}),c=new $g,l={},u=e.maxTextureSize,m={[Jn]:Ve,[Ve]:Jn,[Rn]:Rn},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:qg,fragmentShader:Yg}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new we;_.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Tt(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let p=this.type;this.render=function(T,E,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;const B=i.getRenderTarget(),v=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ui),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=p!==Wn&&this.type===Wn,k=p===Wn&&this.type!==Wn;for(let G=0,F=T.length;G<F;G++){const q=T[G],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const st=W.getFrameExtents();if(s.multiply(st),a.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/st.x),s.x=a.x*st.x,W.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/st.y),s.y=a.y*st.y,W.mapSize.y=a.y)),W.map===null||U===!0||k===!0){const mt=this.type!==Wn?{minFilter:He,magFilter:He}:{};W.map!==null&&W.map.dispose(),W.map=new Ui(s.x,s.y,mt),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const at=W.getViewportCount();for(let mt=0;mt<at;mt++){const Vt=W.getViewport(mt);o.set(a.x*Vt.x,a.y*Vt.y,a.x*Vt.z,a.y*Vt.w),L.viewport(o),W.updateMatrices(q,mt),n=W.getFrustum(),b(E,R,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Wn&&x(W,R),W.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(B,v,y)};function x(T,E){const R=t.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ui(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,R,d,g,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,R,h,g,null)}function M(T,E,R,B){let v=null;const y=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(y!==void 0)v=y;else if(v=R.isPointLight===!0?c:r,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const L=v.uuid,U=E.uuid;let k=l[L];k===void 0&&(k={},l[L]=k);let G=k[U];G===void 0&&(G=v.clone(),k[U]=G,E.addEventListener("dispose",P)),v=G}if(v.visible=E.visible,v.wireframe=E.wireframe,B===Wn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:m[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=i.properties.get(v);L.light=R}return v}function b(T,E,R,B,v){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Wn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const U=t.update(T),k=T.material;if(Array.isArray(k)){const G=U.groups;for(let F=0,q=G.length;F<q;F++){const W=G[F],st=k[W.materialIndex];if(st&&st.visible){const at=M(T,st,B,v);T.onBeforeShadow(i,T,E,R,U,at,W),i.renderBufferDirect(R,null,U,at,T,W),T.onAfterShadow(i,T,E,R,U,at,W)}}}else if(k.visible){const G=M(T,k,B,v);T.onBeforeShadow(i,T,E,R,U,G,null),i.renderBufferDirect(R,null,U,G,T,null),T.onAfterShadow(i,T,E,R,U,G,null)}}const L=T.children;for(let U=0,k=L.length;U<k;U++)b(L[U],E,R,B,v)}function P(T){T.target.removeEventListener("dispose",P);for(const R in l){const B=l[R],v=T.target.uuid;v in B&&(B[v].dispose(),delete B[v])}}}const jg={[Nr]:Ur,[Or]:Br,[kr]:zr,[gs]:Fr,[Ur]:Nr,[Br]:Or,[zr]:kr,[Fr]:gs};function Jg(i){function t(){let D=!1;const dt=new oe;let X=null;const Z=new oe(0,0,0,0);return{setMask:function(ht){X!==ht&&!D&&(i.colorMask(ht,ht,ht,ht),X=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ft,Yt,be,We){We===!0&&(ht*=be,ft*=be,Yt*=be),dt.set(ht,ft,Yt,be),Z.equals(dt)===!1&&(i.clearColor(ht,ft,Yt,be),Z.copy(dt))},reset:function(){D=!1,X=null,Z.set(-1,0,0,0)}}}function e(){let D=!1,dt=!1,X=null,Z=null,ht=null;return{setReversed:function(ft){dt=ft},setTest:function(ft){ft?yt(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(ft){X!==ft&&!D&&(i.depthMask(ft),X=ft)},setFunc:function(ft){if(dt&&(ft=jg[ft]),Z!==ft){switch(ft){case Nr:i.depthFunc(i.NEVER);break;case Ur:i.depthFunc(i.ALWAYS);break;case Or:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case kr:i.depthFunc(i.EQUAL);break;case Fr:i.depthFunc(i.GEQUAL);break;case Br:i.depthFunc(i.GREATER);break;case zr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ft}},setLocked:function(ft){D=ft},setClear:function(ft){ht!==ft&&(i.clearDepth(ft),ht=ft)},reset:function(){D=!1,X=null,Z=null,ht=null}}}function n(){let D=!1,dt=null,X=null,Z=null,ht=null,ft=null,Yt=null,be=null,We=null;return{setTest:function(Jt){D||(Jt?yt(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(Jt){dt!==Jt&&!D&&(i.stencilMask(Jt),dt=Jt)},setFunc:function(Jt,Xe,Un){(X!==Jt||Z!==Xe||ht!==Un)&&(i.stencilFunc(Jt,Xe,Un),X=Jt,Z=Xe,ht=Un)},setOp:function(Jt,Xe,Un){(ft!==Jt||Yt!==Xe||be!==Un)&&(i.stencilOp(Jt,Xe,Un),ft=Jt,Yt=Xe,be=Un)},setLocked:function(Jt){D=Jt},setClear:function(Jt){We!==Jt&&(i.clearStencil(Jt),We=Jt)},reset:function(){D=!1,dt=null,X=null,Z=null,ht=null,ft=null,Yt=null,be=null,We=null}}}const s=new t,a=new e,o=new n,r=new WeakMap,c=new WeakMap;let l={},u={},m=new WeakMap,d=[],h=null,_=!1,g=null,f=null,p=null,x=null,M=null,b=null,P=null,T=new Ot(0,0,0),E=0,R=!1,B=null,v=null,y=null,L=null,U=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,F=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=F>=1):q.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=F>=2);let W=null,st={};const at=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Vt=new oe().fromArray(at),kt=new oe().fromArray(mt);function $(D,dt,X,Z){const ht=new Uint8Array(4),ft=i.createTexture();i.bindTexture(D,ft),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<X;Yt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(dt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ft}const J={};J[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),yt(i.DEPTH_TEST),a.setFunc(gs),Wt(!1),Kt(el),yt(i.CULL_FACE),I(ui);function yt(D){l[D]!==!0&&(i.enable(D),l[D]=!0)}function gt(D){l[D]!==!1&&(i.disable(D),l[D]=!1)}function Ft(D,dt){return u[D]!==dt?(i.bindFramebuffer(D,dt),u[D]=dt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Pt(D,dt){let X=d,Z=!1;if(D){X=m.get(dt),X===void 0&&(X=[],m.set(dt,X));const ht=D.textures;if(X.length!==ht.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Yt=ht.length;ft<Yt;ft++)X[ft]=i.COLOR_ATTACHMENT0+ft;X.length=ht.length,Z=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Z=!0);Z&&i.drawBuffers(X)}function $t(D){return h!==D?(i.useProgram(D),h=D,!0):!1}const ae={[Li]:i.FUNC_ADD,[Ju]:i.FUNC_SUBTRACT,[Zu]:i.FUNC_REVERSE_SUBTRACT};ae[Qu]=i.MIN,ae[td]=i.MAX;const qt={[ed]:i.ZERO,[nd]:i.ONE,[id]:i.SRC_COLOR,[Ir]:i.SRC_ALPHA,[ld]:i.SRC_ALPHA_SATURATE,[rd]:i.DST_COLOR,[ad]:i.DST_ALPHA,[sd]:i.ONE_MINUS_SRC_COLOR,[Dr]:i.ONE_MINUS_SRC_ALPHA,[cd]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[hd]:i.CONSTANT_COLOR,[ud]:i.ONE_MINUS_CONSTANT_COLOR,[dd]:i.CONSTANT_ALPHA,[fd]:i.ONE_MINUS_CONSTANT_ALPHA};function I(D,dt,X,Z,ht,ft,Yt,be,We,Jt){if(D===ui){_===!0&&(gt(i.BLEND),_=!1);return}if(_===!1&&(yt(i.BLEND),_=!0),D!==ju){if(D!==g||Jt!==R){if((f!==Li||M!==Li)&&(i.blendEquation(i.FUNC_ADD),f=Li,M=Li),Jt)switch(D){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,x=null,b=null,P=null,T.set(0,0,0),E=0,g=D,R=Jt}return}ht=ht||dt,ft=ft||X,Yt=Yt||Z,(dt!==f||ht!==M)&&(i.blendEquationSeparate(ae[dt],ae[ht]),f=dt,M=ht),(X!==p||Z!==x||ft!==b||Yt!==P)&&(i.blendFuncSeparate(qt[X],qt[Z],qt[ft],qt[Yt]),p=X,x=Z,b=ft,P=Yt),(be.equals(T)===!1||We!==E)&&(i.blendColor(be.r,be.g,be.b,We),T.copy(be),E=We),g=D,R=!1}function Ke(D,dt){D.side===Rn?gt(i.CULL_FACE):yt(i.CULL_FACE);let X=D.side===Ve;dt&&(X=!X),Wt(X),D.blending===hs&&D.transparent===!1?I(ui):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),le(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(D){B!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),B=D)}function Kt(D){D!==qu?(yt(i.CULL_FACE),D!==v&&(D===el?i.cullFace(i.BACK):D===Yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),v=D}function It(D){D!==y&&(G&&i.lineWidth(D),y=D)}function le(D,dt,X){D?(yt(i.POLYGON_OFFSET_FILL),(L!==dt||U!==X)&&(i.polygonOffset(dt,X),L=dt,U=X)):gt(i.POLYGON_OFFSET_FILL)}function Ut(D){D?yt(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function C(D){D===void 0&&(D=i.TEXTURE0+k-1),W!==D&&(i.activeTexture(D),W=D)}function S(D,dt,X){X===void 0&&(W===null?X=i.TEXTURE0+k-1:X=W);let Z=st[X];Z===void 0&&(Z={type:void 0,texture:void 0},st[X]=Z),(Z.type!==D||Z.texture!==dt)&&(W!==X&&(i.activeTexture(X),W=X),i.bindTexture(D,dt||J[D]),Z.type=D,Z.texture=dt)}function z(){const D=st[W];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(D){Vt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Vt.copy(D))}function xt(D){kt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),kt.copy(D))}function Xt(D,dt){let X=c.get(dt);X===void 0&&(X=new WeakMap,c.set(dt,X));let Z=X.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(dt,D.name),X.set(D,Z))}function Bt(D,dt){const Z=c.get(dt).get(D);r.get(dt)!==Z&&(i.uniformBlockBinding(dt,Z,D.__bindingPointIndex),r.set(dt,Z))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},W=null,st={},u={},m=new WeakMap,d=[],h=null,_=!1,g=null,f=null,p=null,x=null,M=null,b=null,P=null,T=new Ot(0,0,0),E=0,R=!1,B=null,v=null,y=null,L=null,U=null,Vt.set(0,0,i.canvas.width,i.canvas.height),kt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:yt,disable:gt,bindFramebuffer:Ft,drawBuffers:Pt,useProgram:$t,setBlending:I,setMaterial:Ke,setFlipSided:Wt,setCullFace:Kt,setLineWidth:It,setPolygonOffset:le,setScissorTest:Ut,activeTexture:C,bindTexture:S,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:tt,texImage2D:vt,texImage3D:Dt,updateUBOMapping:Xt,uniformBlockBinding:Bt,texStorage2D:jt,texStorage3D:nt,texSubImage2D:Y,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:_t,scissor:Nt,viewport:xt,reset:ce}}function Yl(i,t,e,n){const s=Zg(n);switch(e){case Fh:return i*t;case zh:return i*t;case Hh:return i*t*2;case Ao:return i*t/s.components*s.byteLength;case Pc:return i*t/s.components*s.byteLength;case Vh:return i*t*2/s.components*s.byteLength;case Lc:return i*t*2/s.components*s.byteLength;case Bh:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case Ic:return i*t*4/s.components*s.byteLength;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ka:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xr:case qr:return Math.max(i,16)*Math.max(t,8)/4;case Wr:case $r:return Math.max(i,8)*Math.max(t,8)/2;case Yr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case lc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ja:case uc:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gh:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pc:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zg(i){switch(i){case Zn:case Uh:return{byteLength:1,components:1};case ea:case Oh:case oa:return{byteLength:2,components:1};case Cc:case Rc:return{byteLength:2,components:4};case Ni:case Ac:case Pn:return{byteLength:4,components:1};case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Qg(i,t,e,n,s,a,o){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,u=new WeakMap;let m;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return h?new OffscreenCanvas(C,S):uo("canvas")}function g(C,S,z){let K=1;const tt=Ut(C);if((tt.width>z||tt.height>z)&&(K=z/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){const Y=Math.floor(K*tt.width),St=Math.floor(K*tt.height);m===void 0&&(m=_(Y,St));const ct=S?_(Y,St):m;return ct.width=Y,ct.height=St,ct.getContext("2d").drawImage(C,0,0,Y,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+St+")."),ct}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function f(C){return C.generateMipmaps&&C.minFilter!==He&&C.minFilter!==yn}function p(C){i.generateMipmap(C)}function x(C,S,z,K,tt=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=S;if(S===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),S===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),S===i.RGBA){const St=tt?ro:ee.getTransfer(K);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=St===ue?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(C,S){let z;return C?S===null||S===Ni||S===xs?z=i.DEPTH24_STENCIL8:S===Pn?z=i.DEPTH32F_STENCIL8:S===ea&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ni||S===xs?z=i.DEPTH_COMPONENT24:S===Pn?z=i.DEPTH_COMPONENT32F:S===ea&&(z=i.DEPTH_COMPONENT16),z}function b(C,S){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==He&&C.minFilter!==yn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){const S=C.target;S.removeEventListener("dispose",P),E(S),S.isVideoTexture&&u.delete(S)}function T(C){const S=C.target;S.removeEventListener("dispose",T),B(S)}function E(C){const S=n.get(C);if(S.__webglInit===void 0)return;const z=C.source,K=d.get(z);if(K){const tt=K[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&R(C),Object.keys(K).length===0&&d.delete(z)}n.remove(C)}function R(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const z=C.source,K=d.get(z);delete K[S.__cacheKey],o.memory.textures--}function B(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let tt=0;tt<S.__webglFramebuffer[K].length;tt++)i.deleteFramebuffer(S.__webglFramebuffer[K][tt]);else i.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)i.deleteFramebuffer(S.__webglFramebuffer[K]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=C.textures;for(let K=0,tt=z.length;K<tt;K++){const Y=n.get(z[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(C)}let v=0;function y(){v=0}function L(){const C=v;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),v+=1,C}function U(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function k(C,S){const z=n.get(C);if(C.isVideoTexture&&It(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{kt(z,C,S);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function G(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){kt(z,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function F(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){kt(z,C,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function q(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){$(z,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const W={[oo]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Gr]:i.MIRRORED_REPEAT},st={[He]:i.NEAREST,[Sd]:i.NEAREST_MIPMAP_NEAREST,[da]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Fo]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},at={[Ad]:i.NEVER,[Dd]:i.ALWAYS,[Cd]:i.LESS,[Xh]:i.LEQUAL,[Rd]:i.EQUAL,[Id]:i.GEQUAL,[Pd]:i.GREATER,[Ld]:i.NOTEQUAL};function mt(C,S){if(S.type===Pn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===yn||S.magFilter===Fo||S.magFilter===da||S.magFilter===Di||S.minFilter===yn||S.minFilter===Fo||S.minFilter===da||S.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,W[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,W[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,W[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,st[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,st[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,at[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===He||S.minFilter!==da&&S.minFilter!==Di||S.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Vt(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));const K=S.source;let tt=d.get(K);tt===void 0&&(tt={},d.set(K,tt));const Y=U(S);if(Y!==C.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),tt[Y].usedTimes++;const St=tt[C.__cacheKey];St!==void 0&&(tt[C.__cacheKey].usedTimes--,St.usedTimes===0&&R(S)),C.__cacheKey=Y,C.__webglTexture=tt[Y].texture}return z}function kt(C,S,z){let K=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=i.TEXTURE_3D);const tt=Vt(C,S),Y=S.source;e.bindTexture(K,C.__webglTexture,i.TEXTURE0+z);const St=n.get(Y);if(Y.version!==St.__version||tt===!0){e.activeTexture(i.TEXTURE0+z);const ct=ee.getPrimaries(ee.workingColorSpace),_t=S.colorSpace===hi?null:ee.getPrimaries(S.colorSpace),jt=S.colorSpace===hi||ct===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let nt=g(S.image,!1,s.maxTextureSize);nt=le(S,nt);const vt=a.convert(S.format,S.colorSpace),Dt=a.convert(S.type);let Nt=x(S.internalFormat,vt,Dt,S.colorSpace,S.isVideoTexture);mt(K,S);let xt;const Xt=S.mipmaps,Bt=S.isVideoTexture!==!0,ce=St.__version===void 0||tt===!0,D=Y.dataReady,dt=b(S,nt);if(S.isDepthTexture)Nt=M(S.format===ys,S.type),ce&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Nt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,nt.width,nt.height,0,vt,Dt,null));else if(S.isDataTexture)if(Xt.length>0){Bt&&ce&&e.texStorage2D(i.TEXTURE_2D,dt,Nt,Xt[0].width,Xt[0].height);for(let X=0,Z=Xt.length;X<Z;X++)xt=Xt[X],Bt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,xt.width,xt.height,vt,Dt,xt.data):e.texImage2D(i.TEXTURE_2D,X,Nt,xt.width,xt.height,0,vt,Dt,xt.data);S.generateMipmaps=!1}else Bt?(ce&&e.texStorage2D(i.TEXTURE_2D,dt,Nt,nt.width,nt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,vt,Dt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,nt.width,nt.height,0,vt,Dt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Bt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Nt,Xt[0].width,Xt[0].height,nt.depth);for(let X=0,Z=Xt.length;X<Z;X++)if(xt=Xt[X],S.format!==bn)if(vt!==null)if(Bt){if(D)if(S.layerUpdates.size>0){const ht=Yl(xt.width,xt.height,S.format,S.type);for(const ft of S.layerUpdates){const Yt=xt.data.subarray(ft*ht/xt.data.BYTES_PER_ELEMENT,(ft+1)*ht/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ft,xt.width,xt.height,1,vt,Yt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,xt.width,xt.height,nt.depth,vt,xt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Nt,xt.width,xt.height,nt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,xt.width,xt.height,nt.depth,vt,Dt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Nt,xt.width,xt.height,nt.depth,0,vt,Dt,xt.data)}else{Bt&&ce&&e.texStorage2D(i.TEXTURE_2D,dt,Nt,Xt[0].width,Xt[0].height);for(let X=0,Z=Xt.length;X<Z;X++)xt=Xt[X],S.format!==bn?vt!==null?Bt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Nt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,xt.width,xt.height,vt,Dt,xt.data):e.texImage2D(i.TEXTURE_2D,X,Nt,xt.width,xt.height,0,vt,Dt,xt.data)}else if(S.isDataArrayTexture)if(Bt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Nt,nt.width,nt.height,nt.depth),D)if(S.layerUpdates.size>0){const X=Yl(nt.width,nt.height,S.format,S.type);for(const Z of S.layerUpdates){const ht=nt.data.subarray(Z*X/nt.data.BYTES_PER_ELEMENT,(Z+1)*X/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,vt,Dt,ht)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,Dt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,nt.width,nt.height,nt.depth,0,vt,Dt,nt.data);else if(S.isData3DTexture)Bt?(ce&&e.texStorage3D(i.TEXTURE_3D,dt,Nt,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,Dt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,nt.width,nt.height,nt.depth,0,vt,Dt,nt.data);else if(S.isFramebufferTexture){if(ce)if(Bt)e.texStorage2D(i.TEXTURE_2D,dt,Nt,nt.width,nt.height);else{let X=nt.width,Z=nt.height;for(let ht=0;ht<dt;ht++)e.texImage2D(i.TEXTURE_2D,ht,Nt,X,Z,0,vt,Dt,null),X>>=1,Z>>=1}}else if(Xt.length>0){if(Bt&&ce){const X=Ut(Xt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Nt,X.width,X.height)}for(let X=0,Z=Xt.length;X<Z;X++)xt=Xt[X],Bt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,vt,Dt,xt):e.texImage2D(i.TEXTURE_2D,X,Nt,vt,Dt,xt);S.generateMipmaps=!1}else if(Bt){if(ce){const X=Ut(nt);e.texStorage2D(i.TEXTURE_2D,dt,Nt,X.width,X.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Dt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,vt,Dt,nt);f(S)&&p(K),St.__version=Y.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function $(C,S,z){if(S.image.length!==6)return;const K=Vt(C,S),tt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);const Y=n.get(tt);if(tt.version!==Y.__version||K===!0){e.activeTexture(i.TEXTURE0+z);const St=ee.getPrimaries(ee.workingColorSpace),ct=S.colorSpace===hi?null:ee.getPrimaries(S.colorSpace),_t=S.colorSpace===hi||St===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const jt=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,vt=[];for(let Z=0;Z<6;Z++)!jt&&!nt?vt[Z]=g(S.image[Z],!0,s.maxCubemapSize):vt[Z]=nt?S.image[Z].image:S.image[Z],vt[Z]=le(S,vt[Z]);const Dt=vt[0],Nt=a.convert(S.format,S.colorSpace),xt=a.convert(S.type),Xt=x(S.internalFormat,Nt,xt,S.colorSpace),Bt=S.isVideoTexture!==!0,ce=Y.__version===void 0||K===!0,D=tt.dataReady;let dt=b(S,Dt);mt(i.TEXTURE_CUBE_MAP,S);let X;if(jt){Bt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Xt,Dt.width,Dt.height);for(let Z=0;Z<6;Z++){X=vt[Z].mipmaps;for(let ht=0;ht<X.length;ht++){const ft=X[ht];S.format!==bn?Nt!==null?Bt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ft.width,ft.height,Nt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Xt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ft.width,ft.height,Nt,xt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Xt,ft.width,ft.height,0,Nt,xt,ft.data)}}}else{if(X=S.mipmaps,Bt&&ce){X.length>0&&dt++;const Z=Ut(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Xt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,vt[Z].width,vt[Z].height,Nt,xt,vt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,vt[Z].width,vt[Z].height,0,Nt,xt,vt[Z].data);for(let ht=0;ht<X.length;ht++){const Yt=X[ht].image[Z].image;Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Yt.width,Yt.height,Nt,xt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Xt,Yt.width,Yt.height,0,Nt,xt,Yt.data)}}else{Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Nt,xt,vt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,Nt,xt,vt[Z]);for(let ht=0;ht<X.length;ht++){const ft=X[ht];Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Nt,xt,ft.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Xt,Nt,xt,ft.image[Z])}}}f(S)&&p(i.TEXTURE_CUBE_MAP),Y.__version=tt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function J(C,S,z,K,tt,Y){const St=a.convert(z.format,z.colorSpace),ct=a.convert(z.type),_t=x(z.internalFormat,St,ct,z.colorSpace);if(!n.get(S).__hasExternalTextures){const nt=Math.max(1,S.width>>Y),vt=Math.max(1,S.height>>Y);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Y,_t,nt,vt,S.depth,0,St,ct,null):e.texImage2D(tt,Y,_t,nt,vt,0,St,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Kt(S)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,tt,n.get(z).__webglTexture,0,Wt(S)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,tt,n.get(z).__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(C,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const K=S.depthTexture,tt=K&&K.isDepthTexture?K.type:null,Y=M(S.stencilBuffer,tt),St=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Wt(S);Kt(S)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Y,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,C)}else{const K=S.textures;for(let tt=0;tt<K.length;tt++){const Y=K[tt],St=a.convert(Y.format,Y.colorSpace),ct=a.convert(Y.type),_t=x(Y.internalFormat,St,ct,Y.colorSpace),jt=Wt(S);z&&Kt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,_t,S.width,S.height):Kt(S)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,_t,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,_t,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const K=n.get(S.depthTexture).__webglTexture,tt=Wt(S);if(S.depthTexture.format===us)Kt(S)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(S.depthTexture.format===ys)Kt(S)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ft(C){const S=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=K}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");gt(S.__webglFramebuffer,C)}else if(z){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=i.createRenderbuffer(),yt(S.__webglDepthbuffer[K],C,!1);else{const tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),yt(S.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(C,S,z){const K=n.get(C);S!==void 0&&J(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ft(C)}function $t(C){const S=C.texture,z=n.get(C),K=n.get(S);C.addEventListener("dispose",T);const tt=C.textures,Y=C.isWebGLCubeRenderTarget===!0,St=tt.length>1;if(St||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ct]=[];for(let _t=0;_t<S.mipmaps.length;_t++)z.__webglFramebuffer[ct][_t]=i.createFramebuffer()}else z.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ct=0;ct<S.mipmaps.length;ct++)z.__webglFramebuffer[ct]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(St)for(let ct=0,_t=tt.length;ct<_t;ct++){const jt=n.get(tt[ct]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Kt(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ct=0;ct<tt.length;ct++){const _t=tt[ct];z.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ct]);const jt=a.convert(_t.format,_t.colorSpace),nt=a.convert(_t.type),vt=x(_t.internalFormat,jt,nt,_t.colorSpace,C.isXRRenderTarget===!0),Dt=Wt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,vt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,z.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),mt(i.TEXTURE_CUBE_MAP,S);for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)J(z.__webglFramebuffer[ct][_t],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t);else J(z.__webglFramebuffer[ct],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);f(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ct=0,_t=tt.length;ct<_t;ct++){const jt=tt[ct],nt=n.get(jt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),mt(i.TEXTURE_2D,jt),J(z.__webglFramebuffer,C,jt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),f(jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,K.__webglTexture),mt(ct,S),S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)J(z.__webglFramebuffer[_t],C,S,i.COLOR_ATTACHMENT0,ct,_t);else J(z.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ct,0);f(S)&&p(ct),e.unbindTexture()}C.depthBuffer&&Ft(C)}function ae(C){const S=C.textures;for(let z=0,K=S.length;z<K;z++){const tt=S[z];if(f(tt)){const Y=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,St=n.get(tt).__webglTexture;e.bindTexture(Y,St),p(Y),e.unbindTexture()}}}const qt=[],I=[];function Ke(C){if(C.samples>0){if(Kt(C)===!1){const S=C.textures,z=C.width,K=C.height;let tt=i.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(C),ct=S.length>1;if(ct)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[_t]);const jt=n.get(S[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,tt,i.NEAREST),c===!0&&(qt.length=0,I.length=0,qt.push(i.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.resolveDepthBuffer===!1&&(qt.push(Y),I.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,St.__webglColorRenderbuffer[_t]);const jt=n.get(S[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Wt(C){return Math.min(s.maxSamples,C.samples)}function Kt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function It(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function le(C,S){const z=C.colorSpace,K=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==gi&&z!==hi&&(ee.getTransfer(z)===ue?(K!==bn||tt!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Ut(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=y,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=F,this.setTextureCube=q,this.rebindTextures=Pt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Kt}function t_(i,t){function e(n,s=hi){let a;const o=ee.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uh)return i.BYTE;if(n===Oh)return i.SHORT;if(n===ea)return i.UNSIGNED_SHORT;if(n===Ac)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===oa)return i.HALF_FLOAT;if(n===Fh)return i.ALPHA;if(n===Bh)return i.RGB;if(n===bn)return i.RGBA;if(n===zh)return i.LUMINANCE;if(n===Hh)return i.LUMINANCE_ALPHA;if(n===us)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===Ao)return i.RED;if(n===Pc)return i.RED_INTEGER;if(n===Vh)return i.RG;if(n===Lc)return i.RG_INTEGER;if(n===Ic)return i.RGBA_INTEGER;if(n===qa||n===Ya||n===Ka||n===ja)if(o===ue)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===qa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===qa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ya)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ka)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ja)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wr||n===Xr||n===$r||n===qr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Wr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$r)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yr||n===Kr||n===jr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Yr||n===Kr)return o===ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===jr)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jr||n===Zr||n===Qr||n===tc||n===ec||n===nc||n===ic||n===sc||n===ac||n===oc||n===rc||n===cc||n===lc||n===hc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Jr)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zr)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qr)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oc)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rc)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cc)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lc)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ja||n===uc||n===dc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Ja)return o===ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gh||n===fc||n===pc||n===mc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ja)return a.COMPRESSED_RED_RGTC1_EXT;if(n===fc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class e_ extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pe extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n_={type:"move"};class dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const f=e.getJointPose(g,n),p=this._getHandJoint(l,g);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],d=u.position.distanceTo(m.position),h=.02,_=.005;l.inputState.pinching&&d>h+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=h-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(n_)))}return r!==null&&(r.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const i_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s_=`
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

}`;class a_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ke,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pi({vertexShader:i_,fragmentShader:s_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o_ extends Ss{constructor(t,e){super();const n=this;let s=null,a=1,o=null,r="local-floor",c=1,l=null,u=null,m=null,d=null,h=null,_=null;const g=new a_,f=e.getContextAttributes();let p=null,x=null;const M=[],b=[],P=new lt;let T=null;const E=new $e;E.layers.enable(1),E.viewport=new oe;const R=new $e;R.layers.enable(2),R.viewport=new oe;const B=[E,R],v=new e_;v.layers.enable(1),v.layers.enable(2);let y=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=M[$];return J===void 0&&(J=new dr,M[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=M[$];return J===void 0&&(J=new dr,M[$]=J),J.getGripSpace()},this.getHand=function($){let J=M[$];return J===void 0&&(J=new dr,M[$]=J),J.getHandSpace()};function U($){const J=b.indexOf($.inputSource);if(J===-1)return;const yt=M[J];yt!==void 0&&(yt.update($.inputSource,$.frame,l||o),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",G);for(let $=0;$<M.length;$++){const J=b[$];J!==null&&(b[$]=null,M[$].disconnect(J))}y=null,L=null,g.reset(),t.setRenderTarget(p),h=null,d=null,m=null,s=null,x=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",k),s.addEventListener("inputsourceschange",G),f.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const J={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new Ui(h.framebufferWidth,h.framebufferHeight,{format:bn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let J=null,yt=null,gt=null;f.depth&&(gt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=f.stencil?ys:us,yt=f.stencil?xs:Ni);const Ft={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:a};m=new XRWebGLBinding(s,e),d=m.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Ui(d.textureWidth,d.textureHeight,{format:bn,type:Zn,depthTexture:new su(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(r),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G($){for(let J=0;J<$.removed.length;J++){const yt=$.removed[J],gt=b.indexOf(yt);gt>=0&&(b[gt]=null,M[gt].disconnect(yt))}for(let J=0;J<$.added.length;J++){const yt=$.added[J];let gt=b.indexOf(yt);if(gt===-1){for(let Pt=0;Pt<M.length;Pt++)if(Pt>=b.length){b.push(yt),gt=Pt;break}else if(b[Pt]===null){b[Pt]=yt,gt=Pt;break}if(gt===-1)break}const Ft=M[gt];Ft&&Ft.connect(yt)}}const F=new A,q=new A;function W($,J,yt){F.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(yt.matrixWorld);const gt=F.distanceTo(q),Ft=J.projectionMatrix.elements,Pt=yt.projectionMatrix.elements,$t=Ft[14]/(Ft[10]-1),ae=Ft[14]/(Ft[10]+1),qt=(Ft[9]+1)/Ft[5],I=(Ft[9]-1)/Ft[5],Ke=(Ft[8]-1)/Ft[0],Wt=(Pt[8]+1)/Pt[0],Kt=$t*Ke,It=$t*Wt,le=gt/(-Ke+Wt),Ut=le*-Ke;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ut),$.translateZ(le),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ft[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const C=$t+le,S=ae+le,z=Kt-Ut,K=It+(gt-Ut),tt=qt*ae/S*C,Y=I*ae/S*C;$.projectionMatrix.makePerspective(z,K,tt,Y,C,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function st($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let J=$.near,yt=$.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),v.near=R.near=E.near=J,v.far=R.far=E.far=yt,(y!==v.near||L!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),y=v.near,L=v.far);const gt=$.parent,Ft=v.cameras;st(v,gt);for(let Pt=0;Pt<Ft.length;Pt++)st(Ft[Pt],gt);Ft.length===2?W(v,E,R):v.projectionMatrix.copy(E.projectionMatrix),at($,v,gt)};function at($,J,yt){yt===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=na*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let mt=null;function Vt($,J){if(u=J.getViewerPose(l||o),_=J,u!==null){const yt=u.views;h!==null&&(t.setRenderTargetFramebuffer(x,h.framebuffer),t.setRenderTarget(x));let gt=!1;yt.length!==v.cameras.length&&(v.cameras.length=0,gt=!0);for(let Pt=0;Pt<yt.length;Pt++){const $t=yt[Pt];let ae=null;if(h!==null)ae=h.getViewport($t);else{const I=m.getViewSubImage(d,$t);ae=I.viewport,Pt===0&&(t.setRenderTargetTextures(x,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(x))}let qt=B[Pt];qt===void 0&&(qt=new $e,qt.layers.enable(Pt),qt.viewport=new oe,B[Pt]=qt),qt.matrix.fromArray($t.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray($t.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(ae.x,ae.y,ae.width,ae.height),Pt===0&&(v.matrix.copy(qt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),gt===!0&&v.cameras.push(qt)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Pt=m.getDepthInformation(yt[0]);Pt&&Pt.isValid&&Pt.texture&&g.init(t,Pt,s.renderState)}}for(let yt=0;yt<M.length;yt++){const gt=b[yt],Ft=M[yt];gt!==null&&Ft!==void 0&&Ft.update(gt,J,l||o)}mt&&mt($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const kt=new nu;kt.setAnimationLoop(Vt),this.setAnimationLoop=function($){mt=$},this.dispose=function(){}}}const wi=new Qn,r_=new ne;function c_(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Qh(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,x,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(f,p):p.isMeshToonMaterial?(a(f,p),m(f,p)):p.isMeshPhongMaterial?(a(f,p),u(f,p)):p.isMeshStandardMaterial?(a(f,p),d(f,p),p.isMeshPhysicalMaterial&&h(f,p,b)):p.isMeshMatcapMaterial?(a(f,p),_(f,p)):p.isMeshDepthMaterial?a(f,p):p.isMeshDistanceMaterial?(a(f,p),g(f,p)):p.isMeshNormalMaterial?a(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&r(f,p)):p.isPointsMaterial?c(f,p,x,M):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ve&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ve&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,b=x.envMapRotation;M&&(f.envMap.value=M,wi.copy(b),wi.x*=-1,wi.y*=-1,wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),f.envMapRotation.value.setFromMatrix4(r_.makeRotationFromEuler(wi)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function r(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,x,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*x,f.scale.value=M*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function m(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function h(f,p,x){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){const x=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l_(i,t,e,n){let s={},a={},o=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const b=M.program;n.uniformBlockBinding(x,b)}function l(x,M){let b=s[x.id];b===void 0&&(_(x),b=u(x),s[x.id]=b,x.addEventListener("dispose",f));const P=M.program;n.updateUBOMapping(x,P);const T=t.render.frame;a[x.id]!==T&&(d(x),a[x.id]=T)}function u(x){const M=m();x.__bindingPointIndex=M;const b=i.createBuffer(),P=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function m(){for(let x=0;x<r;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=s[x.id],b=x.uniforms,P=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,E=b.length;T<E;T++){const R=Array.isArray(b[T])?b[T]:[b[T]];for(let B=0,v=R.length;B<v;B++){const y=R[B];if(h(y,T,B,P)===!0){const L=y.__offset,U=Array.isArray(y.value)?y.value:[y.value];let k=0;for(let G=0;G<U.length;G++){const F=U[G],q=g(F);typeof F=="number"||typeof F=="boolean"?(y.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,L+k,y.__data)):F.isMatrix3?(y.__data[0]=F.elements[0],y.__data[1]=F.elements[1],y.__data[2]=F.elements[2],y.__data[3]=0,y.__data[4]=F.elements[3],y.__data[5]=F.elements[4],y.__data[6]=F.elements[5],y.__data[7]=0,y.__data[8]=F.elements[6],y.__data[9]=F.elements[7],y.__data[10]=F.elements[8],y.__data[11]=0):(F.toArray(y.__data,k),k+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,M,b,P){const T=x.value,E=M+"_"+b;if(P[E]===void 0)return typeof T=="number"||typeof T=="boolean"?P[E]=T:P[E]=T.clone(),!0;{const R=P[E];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return P[E]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function _(x){const M=x.uniforms;let b=0;const P=16;for(let E=0,R=M.length;E<R;E++){const B=Array.isArray(M[E])?M[E]:[M[E]];for(let v=0,y=B.length;v<y;v++){const L=B[v],U=Array.isArray(L.value)?L.value:[L.value];for(let k=0,G=U.length;k<G;k++){const F=U[k],q=g(F),W=b%P,st=W%q.boundary,at=W+st;b+=st,at!==0&&P-at<q.storage&&(b+=P-at),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=q.storage}}}const T=b%P;return T>0&&(b+=P-T),x.__size=b,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function f(x){const M=x.target;M.removeEventListener("dispose",f);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete a[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},a={}}return{bind:c,update:l,dispose:p}}class h_{constructor(t={}){const{canvas:e=jd(),context:n=null,depth:s=!0,stencil:a=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const h=new Uint32Array(4),_=new Int32Array(4);let g=null,f=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=di,this.toneMappingExposure=1;const M=this;let b=!1,P=0,T=0,E=null,R=-1,B=null;const v=new oe,y=new oe;let L=null;const U=new Ot(0);let k=0,G=e.width,F=e.height,q=1,W=null,st=null;const at=new oe(0,0,G,F),mt=new oe(0,0,G,F);let Vt=!1;const kt=new Oc;let $=!1,J=!1;const yt=new ne,gt=new ne,Ft=new A,Pt=new oe,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function qt(){return E===null?q:1}let I=n;function Ke(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:a,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ec}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ft,!1),I===null){const N="webgl2";if(I=Ke(N,w),I===null)throw Ke(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Wt,Kt,It,le,Ut,C,S,z,K,tt,Y,St,ct,_t,jt,nt,vt,Dt,Nt,xt,Xt,Bt,ce,D;function dt(){Wt=new m0(I),Wt.init(),Bt=new t_(I,Wt),Kt=new l0(I,Wt,t,Bt),It=new Jg(I),Kt.reverseDepthBuffer&&It.buffers.depth.setReversed(!0),le=new v0(I),Ut=new Og,C=new Qg(I,Wt,It,Ut,Kt,Bt,le),S=new u0(M),z=new p0(M),K=new Ef(I),ce=new r0(I,K),tt=new g0(I,K,le,ce),Y=new y0(I,tt,K,le),Nt=new x0(I,Kt,C),nt=new h0(Ut),St=new Ug(M,S,z,Wt,Kt,ce,nt),ct=new c_(M,Ut),_t=new Fg,jt=new Wg(Wt),Dt=new o0(M,S,z,It,Y,d,c),vt=new Kg(M,Y,Kt),D=new l_(I,le,Kt,It),xt=new c0(I,Wt,le),Xt=new _0(I,Wt,le),le.programs=St.programs,M.capabilities=Kt,M.extensions=Wt,M.properties=Ut,M.renderLists=_t,M.shadowMap=vt,M.state=It,M.info=le}dt();const X=new o_(M,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Wt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Wt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(G,F,!1))},this.getSize=function(w){return w.set(G,F)},this.setSize=function(w,N,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,F=N,e.width=Math.floor(w*q),e.height=Math.floor(N*q),H===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(G*q,F*q).floor()},this.setDrawingBufferSize=function(w,N,H){G=w,F=N,q=H,e.width=Math.floor(w*H),e.height=Math.floor(N*H),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(at)},this.setViewport=function(w,N,H,V){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,N,H,V),It.viewport(v.copy(at).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(mt)},this.setScissor=function(w,N,H,V){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,N,H,V),It.scissor(y.copy(mt).multiplyScalar(q).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(w){It.setScissorTest(Vt=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){st=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(w=!0,N=!0,H=!0){let V=0;if(w){let O=!1;if(E!==null){const it=E.texture.format;O=it===Ic||it===Lc||it===Pc}if(O){const it=E.texture.type,ut=it===Zn||it===Ni||it===ea||it===xs||it===Cc||it===Rc,Mt=Dt.getClearColor(),bt=Dt.getClearAlpha(),Ct=Mt.r,Lt=Mt.g,wt=Mt.b;ut?(h[0]=Ct,h[1]=Lt,h[2]=wt,h[3]=bt,I.clearBufferuiv(I.COLOR,0,h)):(_[0]=Ct,_[1]=Lt,_[2]=wt,_[3]=bt,I.clearBufferiv(I.COLOR,0,_))}else V|=I.COLOR_BUFFER_BIT}N&&(V|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),_t.dispose(),jt.dispose(),Ut.dispose(),S.dispose(),z.dispose(),Y.dispose(),ce.dispose(),D.dispose(),St.dispose(),X.dispose(),X.removeEventListener("sessionstart",qc),X.removeEventListener("sessionend",Yc),vi.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=le.autoReset,N=vt.enabled,H=vt.autoUpdate,V=vt.needsUpdate,O=vt.type;dt(),le.autoReset=w,vt.enabled=N,vt.autoUpdate=H,vt.needsUpdate=V,vt.type=O}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Yt(w){const N=w.target;N.removeEventListener("dispose",Yt),be(N)}function be(w){We(w),Ut.remove(w)}function We(w){const N=Ut.get(w).programs;N!==void 0&&(N.forEach(function(H){St.releaseProgram(H)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,H,V,O,it){N===null&&(N=$t);const ut=O.isMesh&&O.matrixWorld.determinant()<0,Mt=Gu(w,N,H,V,O);It.setMaterial(V,ut);let bt=H.index,Ct=1;if(V.wireframe===!0){if(bt=tt.getWireframeAttribute(H),bt===void 0)return;Ct=2}const Lt=H.drawRange,wt=H.attributes.position;let ie=Lt.start*Ct,he=(Lt.start+Lt.count)*Ct;it!==null&&(ie=Math.max(ie,it.start*Ct),he=Math.min(he,(it.start+it.count)*Ct)),bt!==null?(ie=Math.max(ie,0),he=Math.min(he,bt.count)):wt!=null&&(ie=Math.max(ie,0),he=Math.min(he,wt.count));const ge=he-ie;if(ge<0||ge===1/0)return;ce.setup(O,V,Mt,H,bt);let je,Qt=xt;if(bt!==null&&(je=K.get(bt),Qt=Xt,Qt.setIndex(je)),O.isMesh)V.wireframe===!0?(It.setLineWidth(V.wireframeLinewidth*qt()),Qt.setMode(I.LINES)):Qt.setMode(I.TRIANGLES);else if(O.isLine){let Et=V.linewidth;Et===void 0&&(Et=1),It.setLineWidth(Et*qt()),O.isLineSegments?Qt.setMode(I.LINES):O.isLineLoop?Qt.setMode(I.LINE_LOOP):Qt.setMode(I.LINE_STRIP)}else O.isPoints?Qt.setMode(I.POINTS):O.isSprite&&Qt.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Et=O._multiDrawStarts,Le=O._multiDrawCounts,te=O._multiDrawCount,mn=bt?K.get(bt).bytesPerElement:1,Bi=Ut.get(V).currentProgram.getUniforms();for(let Je=0;Je<te;Je++)Bi.setValue(I,"_gl_DrawID",Je),Qt.render(Et[Je]/mn,Le[Je])}else if(O.isInstancedMesh)Qt.renderInstances(ie,ge,O.count);else if(H.isInstancedBufferGeometry){const Et=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Le=Math.min(H.instanceCount,Et);Qt.renderInstances(ie,ge,Le)}else Qt.render(ie,ge)};function Jt(w,N,H){w.transparent===!0&&w.side===Rn&&w.forceSinglePass===!1?(w.side=Ve,w.needsUpdate=!0,ua(w,N,H),w.side=Jn,w.needsUpdate=!0,ua(w,N,H),w.side=Rn):ua(w,N,H)}this.compile=function(w,N,H=null){H===null&&(H=w),f=jt.get(H),f.init(N),x.push(f),H.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),w!==H&&w.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const V=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const it=O.material;if(it)if(Array.isArray(it))for(let ut=0;ut<it.length;ut++){const Mt=it[ut];Jt(Mt,H,O),V.add(Mt)}else Jt(it,H,O),V.add(it)}),x.pop(),f=null,V},this.compileAsync=function(w,N,H=null){const V=this.compile(w,N,H);return new Promise(O=>{function it(){if(V.forEach(function(ut){Ut.get(ut).currentProgram.isReady()&&V.delete(ut)}),V.size===0){O(w);return}setTimeout(it,10)}Wt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Xe=null;function Un(w){Xe&&Xe(w)}function qc(){vi.stop()}function Yc(){vi.start()}const vi=new nu;vi.setAnimationLoop(Un),typeof self!="undefined"&&vi.setContext(self),this.setAnimationLoop=function(w){Xe=w,X.setAnimationLoop(w),w===null?vi.stop():vi.start()},X.addEventListener("sessionstart",qc),X.addEventListener("sessionend",Yc),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,N,E),f=jt.get(w,x.length),f.init(N),x.push(f),gt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),kt.setFromProjectionMatrix(gt),J=this.localClippingEnabled,$=nt.init(this.clippingPlanes,J),g=_t.get(w,p.length),g.init(),p.push(g),X.enabled===!0&&X.isPresenting===!0){const it=M.xr.getDepthSensingMesh();it!==null&&No(it,N,-1/0,M.sortObjects)}No(w,N,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(W,st),ae=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ae&&Dt.addToRenderList(g,w),this.info.render.frame++,$===!0&&nt.beginShadows();const H=f.state.shadowsArray;vt.render(H,w,N),$===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,O=g.transmissive;if(f.setupLights(),N.isArrayCamera){const it=N.cameras;if(O.length>0)for(let ut=0,Mt=it.length;ut<Mt;ut++){const bt=it[ut];jc(V,O,w,bt)}ae&&Dt.render(w);for(let ut=0,Mt=it.length;ut<Mt;ut++){const bt=it[ut];Kc(g,w,bt,bt.viewport)}}else O.length>0&&jc(V,O,w,N),ae&&Dt.render(w),Kc(g,w,N);E!==null&&(C.updateMultisampleRenderTarget(E),C.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(M,w,N),ce.resetDefaultState(),R=-1,B=null,x.pop(),x.length>0?(f=x[x.length-1],$===!0&&nt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function No(w,N,H,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||kt.intersectsSprite(w)){V&&Pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(gt);const ut=Y.update(w),Mt=w.material;Mt.visible&&g.push(w,ut,Mt,H,Pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||kt.intersectsObject(w))){const ut=Y.update(w),Mt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pt.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Pt.copy(ut.boundingSphere.center)),Pt.applyMatrix4(w.matrixWorld).applyMatrix4(gt)),Array.isArray(Mt)){const bt=ut.groups;for(let Ct=0,Lt=bt.length;Ct<Lt;Ct++){const wt=bt[Ct],ie=Mt[wt.materialIndex];ie&&ie.visible&&g.push(w,ut,ie,H,Pt.z,wt)}}else Mt.visible&&g.push(w,ut,Mt,H,Pt.z,null)}}const it=w.children;for(let ut=0,Mt=it.length;ut<Mt;ut++)No(it[ut],N,H,V)}function Kc(w,N,H,V){const O=w.opaque,it=w.transmissive,ut=w.transparent;f.setupLightsView(H),$===!0&&nt.setGlobalState(M.clippingPlanes,H),V&&It.viewport(v.copy(V)),O.length>0&&ha(O,N,H),it.length>0&&ha(it,N,H),ut.length>0&&ha(ut,N,H),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function jc(w,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Ui(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?oa:Zn,minFilter:Di,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const it=f.state.transmissionRenderTarget[V.id],ut=V.viewport||v;it.setSize(ut.z,ut.w);const Mt=M.getRenderTarget();M.setRenderTarget(it),M.getClearColor(U),k=M.getClearAlpha(),k<1&&M.setClearColor(16777215,.5),M.clear(),ae&&Dt.render(H);const bt=M.toneMapping;M.toneMapping=di;const Ct=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),$===!0&&nt.setGlobalState(M.clippingPlanes,V),ha(w,H,V),C.updateMultisampleRenderTarget(it),C.updateRenderTargetMipmap(it),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let wt=0,ie=N.length;wt<ie;wt++){const he=N[wt],ge=he.object,je=he.geometry,Qt=he.material,Et=he.group;if(Qt.side===Rn&&ge.layers.test(V.layers)){const Le=Qt.side;Qt.side=Ve,Qt.needsUpdate=!0,Jc(ge,H,V,je,Qt,Et),Qt.side=Le,Qt.needsUpdate=!0,Lt=!0}}Lt===!0&&(C.updateMultisampleRenderTarget(it),C.updateRenderTargetMipmap(it))}M.setRenderTarget(Mt),M.setClearColor(U,k),Ct!==void 0&&(V.viewport=Ct),M.toneMapping=bt}function ha(w,N,H){const V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,it=w.length;O<it;O++){const ut=w[O],Mt=ut.object,bt=ut.geometry,Ct=V===null?ut.material:V,Lt=ut.group;Mt.layers.test(H.layers)&&Jc(Mt,N,H,bt,Ct,Lt)}}function Jc(w,N,H,V,O,it){w.onBeforeRender(M,N,H,V,O,it),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(M,N,H,V,w,it),O.transparent===!0&&O.side===Rn&&O.forceSinglePass===!1?(O.side=Ve,O.needsUpdate=!0,M.renderBufferDirect(H,N,V,O,w,it),O.side=Jn,O.needsUpdate=!0,M.renderBufferDirect(H,N,V,O,w,it),O.side=Rn):M.renderBufferDirect(H,N,V,O,w,it),w.onAfterRender(M,N,H,V,O,it)}function ua(w,N,H){N.isScene!==!0&&(N=$t);const V=Ut.get(w),O=f.state.lights,it=f.state.shadowsArray,ut=O.state.version,Mt=St.getParameters(w,O.state,it,N,H),bt=St.getProgramCacheKey(Mt);let Ct=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?z:S).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ct===void 0&&(w.addEventListener("dispose",Yt),Ct=new Map,V.programs=Ct);let Lt=Ct.get(bt);if(Lt!==void 0){if(V.currentProgram===Lt&&V.lightsStateVersion===ut)return Qc(w,Mt),Lt}else Mt.uniforms=St.getUniforms(w),w.onBeforeCompile(Mt,M),Lt=St.acquireProgram(Mt,bt),Ct.set(bt,Lt),V.uniforms=Mt.uniforms;const wt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(wt.clippingPlanes=nt.uniform),Qc(w,Mt),V.needsLights=Xu(w),V.lightsStateVersion=ut,V.needsLights&&(wt.ambientLightColor.value=O.state.ambient,wt.lightProbe.value=O.state.probe,wt.directionalLights.value=O.state.directional,wt.directionalLightShadows.value=O.state.directionalShadow,wt.spotLights.value=O.state.spot,wt.spotLightShadows.value=O.state.spotShadow,wt.rectAreaLights.value=O.state.rectArea,wt.ltc_1.value=O.state.rectAreaLTC1,wt.ltc_2.value=O.state.rectAreaLTC2,wt.pointLights.value=O.state.point,wt.pointLightShadows.value=O.state.pointShadow,wt.hemisphereLights.value=O.state.hemi,wt.directionalShadowMap.value=O.state.directionalShadowMap,wt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,wt.spotShadowMap.value=O.state.spotShadowMap,wt.spotLightMatrix.value=O.state.spotLightMatrix,wt.spotLightMap.value=O.state.spotLightMap,wt.pointShadowMap.value=O.state.pointShadowMap,wt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Lt,V.uniformsList=null,Lt}function Zc(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Qa.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Qc(w,N){const H=Ut.get(w);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Gu(w,N,H,V,O){N.isScene!==!0&&(N=$t),C.resetTextureUnits();const it=N.fog,ut=V.isMeshStandardMaterial?N.environment:null,Mt=E===null?M.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:gi,bt=(V.isMeshStandardMaterial?z:S).get(V.envMap||ut),Ct=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Lt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!H.morphAttributes.position,ie=!!H.morphAttributes.normal,he=!!H.morphAttributes.color;let ge=di;V.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ge=M.toneMapping);const je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qt=je!==void 0?je.length:0,Et=Ut.get(V),Le=f.state.lights;if($===!0&&(J===!0||w!==B)){const on=w===B&&V.id===R;nt.setState(V,w,on)}let te=!1;V.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Le.state.version||Et.outputColorSpace!==Mt||O.isBatchedMesh&&Et.batching===!1||!O.isBatchedMesh&&Et.batching===!0||O.isBatchedMesh&&Et.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Et.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Et.instancing===!1||!O.isInstancedMesh&&Et.instancing===!0||O.isSkinnedMesh&&Et.skinning===!1||!O.isSkinnedMesh&&Et.skinning===!0||O.isInstancedMesh&&Et.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Et.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Et.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Et.instancingMorph===!1&&O.morphTexture!==null||Et.envMap!==bt||V.fog===!0&&Et.fog!==it||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==nt.numPlanes||Et.numIntersection!==nt.numIntersection)||Et.vertexAlphas!==Ct||Et.vertexTangents!==Lt||Et.morphTargets!==wt||Et.morphNormals!==ie||Et.morphColors!==he||Et.toneMapping!==ge||Et.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Et.__version=V.version);let mn=Et.currentProgram;te===!0&&(mn=ua(V,N,O));let Bi=!1,Je=!1,Uo=!1;const xe=mn.getUniforms(),ei=Et.uniforms;if(It.useProgram(mn.program)&&(Bi=!0,Je=!0,Uo=!0),V.id!==R&&(R=V.id,Je=!0),Bi||B!==w){Kt.reverseDepthBuffer?(yt.copy(w.projectionMatrix),Zd(yt),Qd(yt),xe.setValue(I,"projectionMatrix",yt)):xe.setValue(I,"projectionMatrix",w.projectionMatrix),xe.setValue(I,"viewMatrix",w.matrixWorldInverse);const on=xe.map.cameraPosition;on!==void 0&&on.setValue(I,Ft.setFromMatrixPosition(w.matrixWorld)),Kt.logarithmicDepthBuffer&&xe.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xe.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),B!==w&&(B=w,Je=!0,Uo=!0)}if(O.isSkinnedMesh){xe.setOptional(I,O,"bindMatrix"),xe.setOptional(I,O,"bindMatrixInverse");const on=O.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),xe.setValue(I,"boneTexture",on.boneTexture,C))}O.isBatchedMesh&&(xe.setOptional(I,O,"batchingTexture"),xe.setValue(I,"batchingTexture",O._matricesTexture,C),xe.setOptional(I,O,"batchingIdTexture"),xe.setValue(I,"batchingIdTexture",O._indirectTexture,C),xe.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&xe.setValue(I,"batchingColorTexture",O._colorsTexture,C));const Oo=H.morphAttributes;if((Oo.position!==void 0||Oo.normal!==void 0||Oo.color!==void 0)&&Nt.update(O,H,mn),(Je||Et.receiveShadow!==O.receiveShadow)&&(Et.receiveShadow=O.receiveShadow,xe.setValue(I,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ei.envMap.value=bt,ei.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(ei.envMapIntensity.value=N.environmentIntensity),Je&&(xe.setValue(I,"toneMappingExposure",M.toneMappingExposure),Et.needsLights&&Wu(ei,Uo),it&&V.fog===!0&&ct.refreshFogUniforms(ei,it),ct.refreshMaterialUniforms(ei,V,q,F,f.state.transmissionRenderTarget[w.id]),Qa.upload(I,Zc(Et),ei,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Qa.upload(I,Zc(Et),ei,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xe.setValue(I,"center",O.center),xe.setValue(I,"modelViewMatrix",O.modelViewMatrix),xe.setValue(I,"normalMatrix",O.normalMatrix),xe.setValue(I,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const on=V.uniformsGroups;for(let ko=0,$u=on.length;ko<$u;ko++){const tl=on[ko];D.update(tl,mn),D.bind(tl,mn)}}return mn}function Wu(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Xu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,N,H){Ut.get(w.texture).__webglTexture=N,Ut.get(w.depthTexture).__webglTexture=H;const V=Ut.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const H=Ut.get(w);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,H=0){E=w,P=N,T=H;let V=!0,O=null,it=!1,ut=!1;if(w){const bt=Ut.get(w);if(bt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(bt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(bt.__hasExternalTextures)C.rebindTextures(w,Ut.get(w.texture).__webglTexture,Ut.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const wt=w.depthTexture;if(bt.__boundDepthTexture!==wt){if(wt!==null&&Ut.has(wt)&&(w.width!==wt.image.width||w.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Ct=w.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ut=!0);const Lt=Ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Lt[N])?O=Lt[N][H]:O=Lt[N],it=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?O=Ut.get(w).__webglMultisampledFramebuffer:Array.isArray(Lt)?O=Lt[H]:O=Lt,v.copy(w.viewport),y.copy(w.scissor),L=w.scissorTest}else v.copy(at).multiplyScalar(q).floor(),y.copy(mt).multiplyScalar(q).floor(),L=Vt;if(It.bindFramebuffer(I.FRAMEBUFFER,O)&&V&&It.drawBuffers(w,O),It.viewport(v),It.scissor(y),It.setScissorTest(L),it){const bt=Ut.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt.__webglTexture,H)}else if(ut){const bt=Ut.get(w.texture),Ct=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.__webglTexture,H||0,Ct)}R=-1},this.readRenderTargetPixels=function(w,N,H,V,O,it,ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(Mt=Mt[ut]),Mt){It.bindFramebuffer(I.FRAMEBUFFER,Mt);try{const bt=w.texture,Ct=bt.format,Lt=bt.type;if(!Kt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&H>=0&&H<=w.height-O&&I.readPixels(N,H,V,O,Bt.convert(Ct),Bt.convert(Lt),it)}finally{const bt=E!==null?Ut.get(E).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(w,N,H,V,O,it,ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(Mt=Mt[ut]),Mt){const bt=w.texture,Ct=bt.format,Lt=bt.type;if(!Kt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&H>=0&&H<=w.height-O){It.bindFramebuffer(I.FRAMEBUFFER,Mt);const wt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,wt),I.bufferData(I.PIXEL_PACK_BUFFER,it.byteLength,I.STREAM_READ),I.readPixels(N,H,V,O,Bt.convert(Ct),Bt.convert(Lt),0);const ie=E!==null?Ut.get(E).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,ie);const he=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Jd(I,he,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,wt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,it),I.deleteBuffer(wt),I.deleteSync(he),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,H=0){w.isTexture!==!0&&(Za("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-H),O=Math.floor(w.image.width*V),it=Math.floor(w.image.height*V),ut=N!==null?N.x:0,Mt=N!==null?N.y:0;C.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,ut,Mt,O,it),It.unbindTexture()},this.copyTextureToTexture=function(w,N,H=null,V=null,O=0){w.isTexture!==!0&&(Za("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],O=arguments[3]||0,H=null);let it,ut,Mt,bt,Ct,Lt;H!==null?(it=H.max.x-H.min.x,ut=H.max.y-H.min.y,Mt=H.min.x,bt=H.min.y):(it=w.image.width,ut=w.image.height,Mt=0,bt=0),V!==null?(Ct=V.x,Lt=V.y):(Ct=0,Lt=0);const wt=Bt.convert(N.format),ie=Bt.convert(N.type);C.setTexture2D(N,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const he=I.getParameter(I.UNPACK_ROW_LENGTH),ge=I.getParameter(I.UNPACK_IMAGE_HEIGHT),je=I.getParameter(I.UNPACK_SKIP_PIXELS),Qt=I.getParameter(I.UNPACK_SKIP_ROWS),Et=I.getParameter(I.UNPACK_SKIP_IMAGES),Le=w.isCompressedTexture?w.mipmaps[O]:w.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mt),I.pixelStorei(I.UNPACK_SKIP_ROWS,bt),w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,Ct,Lt,it,ut,wt,ie,Le.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,Ct,Lt,Le.width,Le.height,wt,Le.data):I.texSubImage2D(I.TEXTURE_2D,O,Ct,Lt,it,ut,wt,ie,Le),I.pixelStorei(I.UNPACK_ROW_LENGTH,he),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge),I.pixelStorei(I.UNPACK_SKIP_PIXELS,je),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Et),O===0&&N.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),It.unbindTexture()},this.copyTextureToTexture3D=function(w,N,H=null,V=null,O=0){w.isTexture!==!0&&(Za("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],O=arguments[4]||0);let it,ut,Mt,bt,Ct,Lt,wt,ie,he;const ge=w.isCompressedTexture?w.mipmaps[O]:w.image;H!==null?(it=H.max.x-H.min.x,ut=H.max.y-H.min.y,Mt=H.max.z-H.min.z,bt=H.min.x,Ct=H.min.y,Lt=H.min.z):(it=ge.width,ut=ge.height,Mt=ge.depth,bt=0,Ct=0,Lt=0),V!==null?(wt=V.x,ie=V.y,he=V.z):(wt=0,ie=0,he=0);const je=Bt.convert(N.format),Qt=Bt.convert(N.type);let Et;if(N.isData3DTexture)C.setTexture3D(N,0),Et=I.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)C.setTexture2DArray(N,0),Et=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const Le=I.getParameter(I.UNPACK_ROW_LENGTH),te=I.getParameter(I.UNPACK_IMAGE_HEIGHT),mn=I.getParameter(I.UNPACK_SKIP_PIXELS),Bi=I.getParameter(I.UNPACK_SKIP_ROWS),Je=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ct),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Lt),w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Et,O,wt,ie,he,it,ut,Mt,je,Qt,ge.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Et,O,wt,ie,he,it,ut,Mt,je,ge.data):I.texSubImage3D(Et,O,wt,ie,he,it,ut,Mt,je,Qt,ge),I.pixelStorei(I.UNPACK_ROW_LENGTH,Le),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,te),I.pixelStorei(I.UNPACK_SKIP_PIXELS,mn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Bi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Je),O===0&&N.generateMipmaps&&I.generateMipmap(Et),It.unbindTexture()},this.initRenderTarget=function(w){Ut.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),It.unbindTexture()},this.resetState=function(){P=0,T=0,E=null,It.reset(),ce.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Dc?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===Co?"display-p3":"srgb"}}class Fc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new Fc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class lu extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class u_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=gc,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new A;class fo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),a=se(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new fo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hu extends _i{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ts;const Us=new A,es=new A,ns=new A,is=new lt,Os=new lt,uu=new ne,Da=new A,ks=new A,Na=new A,Kl=new lt,fr=new lt,jl=new lt;class d_ extends ve{constructor(t=new hu){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new u_(e,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new fo(n,3,0,!1)),ts.setAttribute("uv",new fo(n,2,3,!1))}this.geometry=ts,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),uu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ns.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const o=this.center;Ua(Da.set(-.5,-.5,0),ns,o,es,s,a),Ua(ks.set(.5,-.5,0),ns,o,es,s,a),Ua(Na.set(.5,.5,0),ns,o,es,s,a),Kl.set(0,0),fr.set(1,0),jl.set(1,1);let r=t.ray.intersectTriangle(Da,ks,Na,!1,Us);if(r===null&&(Ua(ks.set(-.5,.5,0),ns,o,es,s,a),fr.set(0,1),r=t.ray.intersectTriangle(Da,Na,ks,!1,Us),r===null))return;const c=t.ray.origin.distanceTo(Us);c<t.near||c>t.far||e.push({distance:c,point:Us.clone(),uv:hn.getInterpolation(Us,Da,ks,Na,Kl,fr,jl,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ua(i,t,e,n,s,a){is.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Os.x=a*is.x-s*is.y,Os.y=s*is.x+a*is.y):Os.copy(is),i.copy(t),i.x+=Os.x,i.y+=Os.y,i.applyMatrix4(uu)}class du extends ke{constructor(t=null,e=1,n=1,s,a,o,r,c,l=He,u=He,m,d){super(null,o,r,c,l,u,s,a,m,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jl extends dn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ss=new ne,Zl=new ne,Oa=[],Ql=new Oi,f_=new ne,Fs=new Tt,Bs=new ki;class zs extends Tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Jl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,f_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Ql.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(Ql)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Bs.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,o=t*a+1;for(let r=0;r<n.length;r++)n[r]=s[o+r]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),t.ray.intersectsSphere(Bs)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,ss),Zl.multiplyMatrices(n,ss),Fs.matrixWorld=Zl,Fs.raycast(t,Oa);for(let o=0,r=Oa.length;o<r;o++){const c=Oa[o];c.instanceId=a,c.object=this,e.push(c)}Oa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Jl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new du(new Float32Array(s*this.count),s,this.count,Ao,Pn));const a=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const r=this.geometry.morphTargetsRelative?1:1-o,c=s*t;a[c]=r,a.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class to extends _i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const po=new A,mo=new A,th=new ne,Hs=new Uc,ka=new ki,pr=new A,eh=new A;class vc extends ve{constructor(t=new we,e=new to){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,a=e.count;s<a;s++)po.fromBufferAttribute(e,s-1),mo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=po.distanceTo(mo);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(s),ka.radius+=a,t.ray.intersectsSphere(ka)===!1)return;th.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(th);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=h,f=_-1;g<f;g+=l){const p=u.getX(g),x=u.getX(g+1),M=Fa(this,t,Hs,c,p,x);M&&e.push(M)}if(this.isLineLoop){const g=u.getX(_-1),f=u.getX(h),p=Fa(this,t,Hs,c,g,f);p&&e.push(p)}}else{const h=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=h,f=_-1;g<f;g+=l){const p=Fa(this,t,Hs,c,g,g+1);p&&e.push(p)}if(this.isLineLoop){const g=Fa(this,t,Hs,c,_-1,h);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function Fa(i,t,e,n,s,a){const o=i.geometry.attributes.position;if(po.fromBufferAttribute(o,s),mo.fromBufferAttribute(o,a),e.distanceSqToSegment(po,mo,pr,eh)>n)return;pr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(pr);if(!(c<t.near||c>t.far))return{distance:c,point:eh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const nh=new A,ih=new A;class p_ extends vc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,a=e.count;s<a;s+=2)nh.fromBufferAttribute(e,s),ih.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+nh.distanceTo(ih);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fu extends _i{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sh=new ne,xc=new Uc,Ba=new ki,za=new A;class m_ extends ve{constructor(t=new we,e=new fu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=a,t.ray.intersectsSphere(Ba)===!1)return;sh.copy(s).invert(),xc.copy(t.ray).applyMatrix4(sh);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=n.index,m=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let _=d,g=h;_<g;_++){const f=l.getX(_);za.fromBufferAttribute(m,f),ah(za,f,c,s,t,e,this)}}else{const d=Math.max(0,o.start),h=Math.min(m.count,o.start+o.count);for(let _=d,g=h;_<g;_++)za.fromBufferAttribute(m,_),ah(za,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function ah(i,t,e,n,s,a,o){const r=xc.distanceSqToPoint(i);if(r<e){const c=new A;xc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;a.push({distance:l,distanceToRay:Math.sqrt(r),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class pu extends ke{constructor(t,e,n,s,a,o,r,c,l){super(t,e,n,s,a,o,r,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),a=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),a+=n.distanceTo(s),e.push(a),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const a=n.length;let o;e?o=e:o=t*n[a-1];let r=0,c=a-1,l;for(;r<=c;)if(s=Math.floor(r+(c-r)/2),l=n[s]-o,l<0)r=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(a-1);const u=n[s],d=n[s+1]-u,h=(o-u)/d;return(s+h)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const o=this.getPoint(s),r=this.getPoint(a),c=e||(o.isVector2?new lt:new A);return c.copy(r).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],a=[],o=[],r=new A,c=new ne;for(let h=0;h<=t;h++){const _=h/t;s[h]=this.getTangentAt(_,new A)}a[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),m=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),m<=l&&(l=m,n.set(0,1,0)),d<=l&&n.set(0,0,1),r.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],r),o[0].crossVectors(s[0],a[0]);for(let h=1;h<=t;h++){if(a[h]=a[h-1].clone(),o[h]=o[h-1].clone(),r.crossVectors(s[h-1],s[h]),r.length()>Number.EPSILON){r.normalize();const _=Math.acos(Pe(s[h-1].dot(s[h]),-1,1));a[h].applyMatrix4(c.makeRotationAxis(r,_))}o[h].crossVectors(s[h],a[h])}if(e===!0){let h=Math.acos(Pe(a[0].dot(a[t]),-1,1));h/=t,s[0].dot(r.crossVectors(a[0],a[t]))>0&&(h=-h);for(let _=1;_<=t;_++)a[_].applyMatrix4(c.makeRotationAxis(s[_],h*_)),o[_].crossVectors(s[_],a[_])}return{tangents:s,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bc extends Nn{constructor(t=0,e=0,n=1,s=1,a=0,o=Math.PI*2,r=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=r,this.aRotation=c}getPoint(t,e=new lt){const n=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(o?a=0:a=s),this.aClockwise===!0&&!o&&(a===s?a=-s:a=a-s);const r=this.aStartAngle+t*a;let c=this.aX+this.xRadius*Math.cos(r),l=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const u=Math.cos(this.aRotation),m=Math.sin(this.aRotation),d=c-this.aX,h=l-this.aY;c=d*u-h*m+this.aX,l=d*m+h*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class g_ extends Bc{constructor(t,e,n,s,a,o){super(t,e,n,n,s,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zc(){let i=0,t=0,e=0,n=0;function s(a,o,r,c){i=a,t=r,e=-3*a+3*o-2*r-c,n=2*a-2*o+r+c}return{initCatmullRom:function(a,o,r,c,l){s(o,r,l*(r-a),l*(c-o))},initNonuniformCatmullRom:function(a,o,r,c,l,u,m){let d=(o-a)/l-(r-a)/(l+u)+(r-o)/u,h=(r-o)/u-(c-o)/(u+m)+(c-r)/m;d*=u,h*=u,s(o,r,d,h)},calc:function(a){const o=a*a,r=o*a;return i+t*a+e*o+n*r}}}const Ha=new A,mr=new zc,gr=new zc,_r=new zc;class __ extends Nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,a=s.length,o=(a-(this.closed?0:1))*t;let r=Math.floor(o),c=o-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/a)+1)*a:c===0&&r===a-1&&(r=a-2,c=1);let l,u;this.closed||r>0?l=s[(r-1)%a]:(Ha.subVectors(s[0],s[1]).add(s[0]),l=Ha);const m=s[r%a],d=s[(r+1)%a];if(this.closed||r+2<a?u=s[(r+2)%a]:(Ha.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(m),h),g=Math.pow(m.distanceToSquared(d),h),f=Math.pow(d.distanceToSquared(u),h);g<1e-4&&(g=1),_<1e-4&&(_=g),f<1e-4&&(f=g),mr.initNonuniformCatmullRom(l.x,m.x,d.x,u.x,_,g,f),gr.initNonuniformCatmullRom(l.y,m.y,d.y,u.y,_,g,f),_r.initNonuniformCatmullRom(l.z,m.z,d.z,u.z,_,g,f)}else this.curveType==="catmullrom"&&(mr.initCatmullRom(l.x,m.x,d.x,u.x,this.tension),gr.initCatmullRom(l.y,m.y,d.y,u.y,this.tension),_r.initCatmullRom(l.z,m.z,d.z,u.z,this.tension));return n.set(mr.calc(c),gr.calc(c),_r.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function oh(i,t,e,n,s){const a=(n-t)*.5,o=(s-e)*.5,r=i*i,c=i*r;return(2*e-2*n+a+o)*c+(-3*e+3*n-2*a-o)*r+a*i+e}function v_(i,t){const e=1-i;return e*e*t}function x_(i,t){return 2*(1-i)*i*t}function y_(i,t){return i*i*t}function Js(i,t,e,n){return v_(i,t)+x_(i,e)+y_(i,n)}function M_(i,t){const e=1-i;return e*e*e*t}function b_(i,t){const e=1-i;return 3*e*e*i*t}function S_(i,t){return 3*(1-i)*i*i*t}function w_(i,t){return i*i*i*t}function Zs(i,t,e,n,s){return M_(i,t)+b_(i,e)+S_(i,n)+w_(i,s)}class mu extends Nn{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){const n=e,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return n.set(Zs(t,s.x,a.x,o.x,r.x),Zs(t,s.y,a.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class E_ extends Nn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return n.set(Zs(t,s.x,a.x,o.x,r.x),Zs(t,s.y,a.y,o.y,r.y),Zs(t,s.z,a.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gu extends Nn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class T_ extends Nn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _u extends Nn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,s=this.v0,a=this.v1,o=this.v2;return n.set(Js(t,s.x,a.x,o.x),Js(t,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class A_ extends Nn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,a=this.v1,o=this.v2;return n.set(Js(t,s.x,a.x,o.x),Js(t,s.y,a.y,o.y),Js(t,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vu extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,s=this.points,a=(s.length-1)*t,o=Math.floor(a),r=a-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],m=s[o>s.length-3?s.length-1:o+2];return n.set(oh(r,c.x,l.x,u.x,m.x),oh(r,c.y,l.y,u.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var rh=Object.freeze({__proto__:null,ArcCurve:g_,CatmullRomCurve3:__,CubicBezierCurve:mu,CubicBezierCurve3:E_,EllipseCurve:Bc,LineCurve:gu,LineCurve3:T_,QuadraticBezierCurve:_u,QuadraticBezierCurve3:A_,SplineCurve:vu});class C_ extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const o=s[a]-n,r=this.curves[a],c=r.getLength(),l=c===0?0:1-o/c;return r.getPointAt(l,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const o=a[s],r=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(r);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new rh[s.type]().fromJSON(s))}return this}}class R_ extends C_{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new gu(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const a=new _u(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,a,o){const r=new mu(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(a,o));return this.curves.push(r),this.currentPoint.set(a,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new vu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,a,o){const r=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+r,e+c,n,s,a,o),this}absarc(t,e,n,s,a,o){return this.absellipse(t,e,n,n,s,a,o),this}ellipse(t,e,n,s,a,o,r,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,a,o,r,c),this}absellipse(t,e,n,s,a,o,r,c){const l=new Bc(t,e,n,s,a,o,r,c);if(this.curves.length>0){const m=l.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hc extends we{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Pe(s,0,Math.PI*2);const a=[],o=[],r=[],c=[],l=[],u=1/e,m=new A,d=new lt,h=new A,_=new A,g=new A;let f=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:f=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,h.x=p*1,h.y=-f,h.z=p*0,g.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case t.length-1:c.push(g.x,g.y,g.z);break;default:f=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,h.x=p*1,h.y=-f,h.z=p*0,_.copy(h),h.x+=g.x,h.y+=g.y,h.z+=g.z,h.normalize(),c.push(h.x,h.y,h.z),g.copy(_)}for(let x=0;x<=e;x++){const M=n+x*u*s,b=Math.sin(M),P=Math.cos(M);for(let T=0;T<=t.length-1;T++){m.x=t[T].x*b,m.y=t[T].y,m.z=t[T].x*P,o.push(m.x,m.y,m.z),d.x=x/e,d.y=T/(t.length-1),r.push(d.x,d.y);const E=c[3*T+0]*b,R=c[3*T+1],B=c[3*T+0]*P;l.push(E,R,B)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){const b=M+x*t.length,P=b,T=b+t.length,E=b+t.length+1,R=b+1;a.push(P,T,R),a.push(E,R,T)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("uv",new re(r,2)),this.setAttribute("normal",new re(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.points,t.segments,t.phiStart,t.phiLength)}}class Po extends Hc{constructor(t=1,e=1,n=4,s=8){const a=new R_;a.absarc(0,-e/2,t,Math.PI*1.5,0),a.absarc(0,e/2,t,0,Math.PI*.5),super(a.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Po(t.radius,t.length,t.capSegments,t.radialSegments)}}class fs extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const a=[],o=[],r=[],c=[],l=new A,u=new lt;o.push(0,0,0),r.push(0,0,1),c.push(.5,.5);for(let m=0,d=3;m<=e;m++,d+=3){const h=n+m/e*s;l.x=t*Math.cos(h),l.y=t*Math.sin(h),o.push(l.x,l.y,l.z),r.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let m=1;m<=e;m++)a.push(m,m+1,0);this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(r,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class pn extends we{constructor(t=1,e=1,n=1,s=32,a=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const u=[],m=[],d=[],h=[];let _=0;const g=[],f=n/2;let p=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(h,2));function x(){const b=new A,P=new A;let T=0;const E=(e-t)/n;for(let R=0;R<=a;R++){const B=[],v=R/a,y=v*(e-t)+t;for(let L=0;L<=s;L++){const U=L/s,k=U*c+r,G=Math.sin(k),F=Math.cos(k);P.x=y*G,P.y=-v*n+f,P.z=y*F,m.push(P.x,P.y,P.z),b.set(G,E,F).normalize(),d.push(b.x,b.y,b.z),h.push(U,1-v),B.push(_++)}g.push(B)}for(let R=0;R<s;R++)for(let B=0;B<a;B++){const v=g[B][R],y=g[B+1][R],L=g[B+1][R+1],U=g[B][R+1];t>0&&(u.push(v,y,U),T+=3),e>0&&(u.push(y,L,U),T+=3)}l.addGroup(p,T,0),p+=T}function M(b){const P=_,T=new lt,E=new A;let R=0;const B=b===!0?t:e,v=b===!0?1:-1;for(let L=1;L<=s;L++)m.push(0,f*v,0),d.push(0,v,0),h.push(.5,.5),_++;const y=_;for(let L=0;L<=s;L++){const k=L/s*c+r,G=Math.cos(k),F=Math.sin(k);E.x=B*F,E.y=f*v,E.z=B*G,m.push(E.x,E.y,E.z),d.push(0,v,0),T.x=G*.5+.5,T.y=F*.5*v+.5,h.push(T.x,T.y),_++}for(let L=0;L<s;L++){const U=P+L,k=y+L;b===!0?u.push(k,k+1,U):u.push(k+1,k,U),R+=3}l.addGroup(p,R,b===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ca extends pn{constructor(t=1,e=1,n=32,s=1,a=!1,o=0,r=Math.PI*2){super(0,t,e,n,s,a,o,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:r}}static fromJSON(t){return new ca(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vc extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const a=[],o=[];r(s),l(n),u(),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(a.slice(),3)),this.setAttribute("uv",new re(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function r(x){const M=new A,b=new A,P=new A;for(let T=0;T<e.length;T+=3)h(e[T+0],M),h(e[T+1],b),h(e[T+2],P),c(M,b,P,x)}function c(x,M,b,P){const T=P+1,E=[];for(let R=0;R<=T;R++){E[R]=[];const B=x.clone().lerp(b,R/T),v=M.clone().lerp(b,R/T),y=T-R;for(let L=0;L<=y;L++)L===0&&R===T?E[R][L]=B:E[R][L]=B.clone().lerp(v,L/y)}for(let R=0;R<T;R++)for(let B=0;B<2*(T-R)-1;B++){const v=Math.floor(B/2);B%2===0?(d(E[R][v+1]),d(E[R+1][v]),d(E[R][v])):(d(E[R][v+1]),d(E[R+1][v+1]),d(E[R+1][v]))}}function l(x){const M=new A;for(let b=0;b<a.length;b+=3)M.x=a[b+0],M.y=a[b+1],M.z=a[b+2],M.normalize().multiplyScalar(x),a[b+0]=M.x,a[b+1]=M.y,a[b+2]=M.z}function u(){const x=new A;for(let M=0;M<a.length;M+=3){x.x=a[M+0],x.y=a[M+1],x.z=a[M+2];const b=f(x)/2/Math.PI+.5,P=p(x)/Math.PI+.5;o.push(b,1-P)}_(),m()}function m(){for(let x=0;x<o.length;x+=6){const M=o[x+0],b=o[x+2],P=o[x+4],T=Math.max(M,b,P),E=Math.min(M,b,P);T>.9&&E<.1&&(M<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),P<.2&&(o[x+4]+=1))}}function d(x){a.push(x.x,x.y,x.z)}function h(x,M){const b=x*3;M.x=t[b+0],M.y=t[b+1],M.z=t[b+2]}function _(){const x=new A,M=new A,b=new A,P=new A,T=new lt,E=new lt,R=new lt;for(let B=0,v=0;B<a.length;B+=9,v+=6){x.set(a[B+0],a[B+1],a[B+2]),M.set(a[B+3],a[B+4],a[B+5]),b.set(a[B+6],a[B+7],a[B+8]),T.set(o[v+0],o[v+1]),E.set(o[v+2],o[v+3]),R.set(o[v+4],o[v+5]),P.copy(x).add(M).add(b).divideScalar(3);const y=f(P);g(T,v+0,x,y),g(E,v+2,M,y),g(R,v+4,b,y)}}function g(x,M,b,P){P<0&&x.x===1&&(o[M]=x.x-1),b.x===0&&b.z===0&&(o[M]=P/2/Math.PI+.5)}function f(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.vertices,t.indices,t.radius,t.details)}}class ia extends Vc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ia(t.radius,t.detail)}}class Dn extends we{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+r,Math.PI);let l=0;const u=[],m=new A,d=new A,h=[],_=[],g=[],f=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let b=0;p===0&&o===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let P=0;P<=e;P++){const T=P/e;m.x=-t*Math.cos(s+T*a)*Math.sin(o+M*r),m.y=t*Math.cos(o+M*r),m.z=t*Math.sin(s+T*a)*Math.sin(o+M*r),_.push(m.x,m.y,m.z),d.copy(m).normalize(),g.push(d.x,d.y,d.z),f.push(T+b,1-M),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=u[p][x+1],b=u[p][x],P=u[p+1][x],T=u[p+1][x+1];(p!==0||o>0)&&h.push(M,b,T),(p!==n-1||c<Math.PI)&&h.push(b,P,T)}this.setIndex(h),this.setAttribute("position",new re(_,3)),this.setAttribute("normal",new re(g,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ts extends we{constructor(t=1,e=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const o=[],r=[],c=[],l=[],u=new A,m=new A,d=new A;for(let h=0;h<=n;h++)for(let _=0;_<=s;_++){const g=_/s*a,f=h/n*Math.PI*2;m.x=(t+e*Math.cos(f))*Math.cos(g),m.y=(t+e*Math.cos(f))*Math.sin(g),m.z=e*Math.sin(f),r.push(m.x,m.y,m.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),d.subVectors(m,u).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(h/n)}for(let h=1;h<=n;h++)for(let _=1;_<=s;_++){const g=(s+1)*h+_-1,f=(s+1)*(h-1)+_-1,p=(s+1)*(h-1)+_,x=(s+1)*h+_;o.push(g,f,x),o.push(f,p,x)}this.setIndex(o),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class P_ extends _i{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ot(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wh,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Gc extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class xu extends Gc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const vr=new ne,ch=new A,lh=new A;class yu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oc,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(ch),lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lh),e.updateMatrixWorld(),vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hh=new ne,Vs=new A,xr=new A;class L_ extends yu{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vs),xr.copy(n.position),xr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xr),n.updateMatrixWorld(),s.makeTranslation(-Vs.x,-Vs.y,-Vs.z),hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh)}}class yc extends Gc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new L_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class I_ extends yu{constructor(){super(new iu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mu extends Gc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new I_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class D_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=uh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function uh(){return performance.now()}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);let Ei=null;function N_(){if(!Ei){const i=new Uint8Array([110,190,255]);Ei=new du(i,3,1,Ao),Ei.minFilter=Ei.magFilter=He,Ei.generateMipmaps=!1,Ei.needsUpdate=!0}return Ei}const yr=new Map;function Q(i,t={}){var s,a,o,r,c,l;const e=[i,t.map?t.map.uuid:"",t.flat?"f":"",(s=t.opacity)!=null?s:"",(a=t.side)!=null?a:""].join("|");if(!t.unique&&yr.has(e))return yr.get(e);const n=new P_({color:i,gradientMap:N_(),map:t.map||null,emissive:(o=t.emissive)!=null?o:0,emissiveIntensity:(r=t.emissiveIntensity)!=null?r:1,transparent:t.opacity!=null&&t.opacity<1,opacity:(c=t.opacity)!=null?c:1,side:(l=t.side)!=null?l:Jn});return t.unique||yr.set(e,n),n}const bu=new ws({color:1380380,side:Ve});function U_(i,t=.035){const e=i.geometry;e.boundingBox||e.computeBoundingBox();const n=new A,s=new A;e.boundingBox.getSize(n),e.boundingBox.getCenter(s);const a=i.scale,o=(c,l)=>c*l>1e-4?(c*l+2*t)/(c*l):1,r=new Tt(e,bu);return r.scale.set(o(n.x,Math.abs(a.x)),o(n.y,Math.abs(a.y)),o(n.z,Math.abs(a.z))),r.position.set(s.x*(1-r.scale.x),s.y*(1-r.scale.y),s.z*(1-r.scale.z)),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.raycast=()=>{},i.add(r),r}function pt(i,t,e={}){var s,a,o;const n=new Tt(i,t);return e.scale&&n.scale.set(...e.scale),n.castShadow=(s=e.cast)!=null?s:!0,n.receiveShadow=(a=e.receive)!=null?a:!0,e.outline!==!1&&U_(n,(o=e.t)!=null?o:.035),n}const fn=new Map;function As(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Cs(i,t=[1,1]){const e=new pu(i);return e.colorSpace=Oe,e.wrapS=e.wrapT=oo,e.repeat.set(t[0],t[1]),e.anisotropy=4,e}const Hn="#1a1423",O_=[{id:"circles",name:"Rings"},{id:"diamonds",name:"Diamonds"},{id:"waves",name:"Waves"},{id:"kente",name:"Kente"},{id:"leaves",name:"Leaves"}];function bs(i,t,e,n="#fff3d6",s=[2,2]){const a=["ank",i,t,e,n,s.join("x")].join("|");if(fn.has(a))return fn.get(a);const o=256,[r,c]=As(o,o);c.fillStyle=t,c.fillRect(0,0,o,o);const l=(m,d,h,_)=>{for(const g of[-o,0,o])for(const f of[-o,0,o])c.beginPath(),c.arc(m+g,d+f,h,0,Math.PI*2),c.fillStyle=_,c.fill()};switch(i){case"circles":{const d=o/4;for(let h=0;h<4;h++)for(let _=0;_<4;_++){const g=_*d+d/2+(h%2?d/2:0),f=h*d+d/2;for(const[p,x]of[[27,Hn],[23,e],[16,n],[11,Hn],[6,e]])l(g,f,p,x)}for(let h=0;h<4;h++)for(let _=0;_<4;_++)l(_*d+(h%2?0:d/2)+d/2-d/2,h*d+4,4,n);break}case"diamonds":{for(let d=0;d<4;d++)for(let h=0;h<4;h++){const _=h*64+32,g=d*64+64/2;for(const[f,p]of[[30,Hn],[25,e],[15,n],[7,Hn]])c.beginPath(),c.moveTo(_,g-f),c.lineTo(_+f,g),c.lineTo(_,g+f),c.lineTo(_-f,g),c.closePath(),c.fillStyle=p,c.fill()}c.fillStyle=n;for(let d=0;d<=4;d++)for(let h=0;h<=4;h++)c.beginPath(),c.arc(h*64,d*64,5,0,7),c.fill();break}case"waves":{for(let m=0;m<4;m++){const d=m*64+32;c.lineCap="round";for(const[h,_,g]of[[18,Hn,0],[12,e,0],[4,n,0]]){c.beginPath();for(let f=0;f<=o;f+=4){const p=d+Math.sin(f/o*Math.PI*8)*12+g;f?c.lineTo(f,p):c.moveTo(f,p)}c.lineWidth=h,c.strokeStyle=_,c.stroke()}c.fillStyle=n;for(let h=0;h<8;h++)c.beginPath(),c.arc(h*32+16,d+28*(h%2?1:-1)*0+30,4,0,7),c.fill()}break}case"kente":{const m=[e,Hn,n,e,"#2a9d8f"];for(let d=0;d<4;d++)for(let h=0;h<4;h++){const _=h*64,g=d*64;for(let f=0;f<8;f++)c.fillStyle=m[f%m.length],(h+d)%2?c.fillRect(_+f*8,g,6,64):c.fillRect(_,g+f*8,64,6);c.strokeStyle=Hn,c.lineWidth=3,c.strokeRect(_+1.5,g+1.5,61,61)}break}case"leaves":default:{for(let m=0;m<4;m++)for(let d=0;d<4;d++){const h=d*64+32+(m%2?32:0),_=m*64+32;for(const g of[-o,0])c.save(),c.translate(h+g,_),c.rotate(((d+m)%2?1:-1)*Math.PI/4),c.beginPath(),c.ellipse(0,0,26,12,0,0,Math.PI*2),c.fillStyle=Hn,c.fill(),c.beginPath(),c.ellipse(0,0,22,8,0,0,Math.PI*2),c.fillStyle=e,c.fill(),c.beginPath(),c.moveTo(-20,0),c.lineTo(20,0),c.lineWidth=2.5,c.strokeStyle=Hn,c.stroke(),c.restore()}c.fillStyle=n;for(let m=0;m<4;m++)for(let d=0;d<4;d++)c.beginPath(),c.arc(d*64+(m%2,0),m*64+0,6,0,7),c.fill()}}const u=Cs(r,s);return fn.set(a,u),u}function tn(i,t=8,e=!0,n=[1,1]){const s=["str",i.join(","),t,e,n.join("x")].join("|");if(fn.has(s))return fn.get(s);const a=128,[o,r]=As(a,a),c=a/t;for(let u=0;u<t;u++)r.fillStyle=i[u%i.length],e?r.fillRect(u*c,0,c+1,a):r.fillRect(0,u*c,a,c+1);const l=Cs(o,n);return fn.set(s,l),l}function dh(i=8){const[t,e]=As(512,128);e.fillStyle="#5b6070",e.fillRect(0,0,512,128),e.fillStyle="rgba(255,255,255,0.05)";for(let s=0;s<60;s++)e.fillRect(Math.random()*512,Math.random()*128,18,3);e.fillStyle="#f6f2e8",e.fillRect(0,6,512,5),e.fillRect(0,117,512,5),e.fillStyle="#ffd23f";for(let s=0;s<512;s+=128)e.fillRect(s+16,58,80,12);return Cs(t,[i,1])}function Mr(i,{bg:t="#ffd23f",fg:e="#1a1423",w:n=512,h:s=128,border:a="#1a1423",sub:o=null,font:r="Trebuchet MS, Verdana, sans-serif"}={}){const c=["txt",i,t,e,n,s,o].join("|");if(fn.has(c))return fn.get(c);const[l,u]=As(n,s);u.fillStyle=t,u.fillRect(0,0,n,s),a&&(u.strokeStyle=a,u.lineWidth=Math.max(6,s*.06),u.strokeRect(u.lineWidth/2,u.lineWidth/2,n-u.lineWidth,s-u.lineWidth)),u.fillStyle=e,u.textAlign="center",u.textBaseline="middle";let m=o?s*.42:s*.6;for(u.font=`900 ${m}px ${r}`;u.measureText(i).width>n*.9&&m>8;)m-=2,u.font=`900 ${m}px ${r}`;if(u.fillText(i,n/2,o?s*.38:s*.54),o){let h=s*.22;for(u.font=`700 ${h}px ${r}`;u.measureText(o).width>n*.92&&h>8;)h-=1,u.font=`700 ${h}px ${r}`;u.fillText(o,n/2,s*.76)}const d=Cs(l);return d.wrapS=d.wrapT=Xn,fn.set(c,d),d}function fh(i){const t="bub2|"+i;if(fn.has(t))return fn.get(t);const[e,n]=As(512,200),s=g=>`800 ${g}px Trebuchet MS, Verdana, sans-serif`;let a=40;n.font=s(a);let o=[i];if(n.measureText(i).width>440){const g=i.split(" ");let f=null;for(let p=1;p<g.length;p++){const x=g.slice(0,p).join(" "),M=g.slice(p).join(" "),b=Math.max(n.measureText(x).width,n.measureText(M).width);(!f||b<f[0])&&(f=[b,[x,M]])}f&&(o=f[1])}const r=()=>Math.max(...o.map(g=>n.measureText(g).width));for(;r()>450&&a>20;)a-=2,n.font=s(a);const c=Math.min(496,r()+48),l=o.length===1?92:150,u=(512-c)/2,m=182-l-4,d=32,h=m+l;n.beginPath(),n.moveTo(u+d,m),n.lineTo(u+c-d,m),n.quadraticCurveTo(u+c,m,u+c,m+d),n.lineTo(u+c,h-d),n.quadraticCurveTo(u+c,h,u+c-d,h),n.lineTo(276,h),n.lineTo(256,196),n.lineTo(238,h),n.lineTo(u+d,h),n.quadraticCurveTo(u,h,u,h-d),n.lineTo(u,m+d),n.quadraticCurveTo(u,m,u+d,m),n.closePath(),n.fillStyle="#fffdf5",n.fill(),n.lineWidth=7,n.strokeStyle="#1a1423",n.stroke(),n.fillStyle="#1a1423",n.textAlign="center",n.textBaseline="middle",o.forEach((g,f)=>n.fillText(g,256,m+l/2+(o.length===1?2:f?26:-26)));const _=Cs(e);return _.wrapS=_.wrapT=Xn,fn.set(t,_),_}function k_(){const[i,t]=As(128,128);t.fillStyle="#bfe6ff",t.fillRect(0,0,128,128),t.fillStyle="rgba(255,255,255,0.7)",t.beginPath(),t.moveTo(10,118),t.lineTo(60,10),t.lineTo(80,10),t.lineTo(30,118),t.fill(),t.fillStyle="#2b2d42";for(let n=0;n<5;n++)t.fillRect(8+n*26,0,6,128);return t.fillRect(0,60,128,6),Cs(i)}const Wc=[{name:"Caramel",hex:"#d9a066"},{name:"Honey",hex:"#c68642"},{name:"Bronze",hex:"#a86b3c"},{name:"Cocoa",hex:"#8d5524"},{name:"Chestnut",hex:"#70401f"},{name:"Mahogany",hex:"#5a3218"},{name:"Ebony",hex:"#432513"},{name:"Midnight",hex:"#311b0f"}],Su=[{id:"lowcut",name:"Low Cut"},{id:"afro",name:"Afro"},{id:"braids",name:"Braids"},{id:"cornrows",name:"Cornrows"},{id:"gele",name:"Gele"},{id:"cap",name:"Face Cap"},{id:"bald",name:"Clean Shave"}],wu=[{id:"ankaraShirt",name:"Ankara Shirt"},{id:"ankaraDress",name:"Ankara Dress"},{id:"street",name:"Streetwear"},{id:"kaftan",name:"Kaftan"}],go=["#1b1210","#3b2416","#6b3e1f","#b5651d","#e2b04a","#7b3fa0","#e0457b"],Eu=["#ff6b35","#e71d36","#ffbe0b","#2ec4b6","#3a86ff","#8338ec","#06d6a0","#ff8fab","#f15bb5","#fdfcdc","#1d3557"],Tu=["#ffd23f","#2ec4b6","#ff6b35","#fdfcdc","#06d6a0","#e71d36","#3a86ff","#1a1423"],Au=["#2b2d42","#3d5a80","#6b705c","#f4f1de","#9a031e","#264653","#e9c46a"],ci=(i,t=Math.random)=>i[Math.floor(t()*i.length)];function Cu(){return{name:"Tunde",skin:Wc[3].hex,hair:"lowcut",hairColor:go[0],outfit:"ankaraShirt",pattern:"circles",clothColor:"#ff6b35",accentColor:"#2ec4b6",pantsColor:"#2b2d42"}}function un(i=Math.random){const t=ci(wu,i).id;let e=ci(Su,i).id;return{name:"NPC",skin:ci(Wc,i).hex,hair:e,hairColor:i()<.8?go[Math.floor(i()*2)]:ci(go,i),outfit:t,pattern:ci(["circles","diamonds","waves","kente","leaves"],i),clothColor:ci(Eu,i),accentColor:ci(Tu,i),pantsColor:ci(Au,i)}}const br=new Map,mi=(i,t)=>(br.has(i)||br.set(i,t()),br.get(i)),Ie=(i,t=20,e=14)=>mi(`s${i}_${t}_${e}`,()=>new Dn(i,t,e)),eo=(i,t)=>mi(`c${i}_${t}`,()=>new Po(i,t,4,12)),rs=(i,t,e,n=18)=>mi(`y${i}_${t}_${e}_${n}`,()=>new pn(i,t,e,n)),Mc=(i,t)=>mi(`d${i}_${t}`,()=>new Dn(i,28,14,0,Math.PI*2,0,t)),ls=(i,t,e=Math.PI*2)=>mi(`t${i}_${t}_${e}`,()=>new Ts(i,t,8,28,e));function no(i,t){const e=new Ot(i),n={};return e.getHSL(n,Oe),e.setHSL(n.h,n.s,Math.max(0,Math.min(1,n.l+t)),Oe),"#"+e.getHexString()}const _o=[1.06,.97,1];function Gs(i,t=1.25,e=-.28,n=.495,s=.025){const a=pt(Mc(n,t),i,{scale:_o,t:s});return a.rotation.x=e,a}function F_(i,t){const e=Q(i.hairColor),n=s=>Q("#ffffff",{map:bs(i.pattern,i.accentColor,i.clothColor,"#fff3d6",s)});switch(i.hair){case"lowcut":t.add(Gs(e,1.2,-.3));break;case"afro":{t.add(Gs(e,1.3,-.25));const s=pt(mi("afro",()=>{const a=new ia(.6,1);return a.computeVertexNormals(),a}),Q(i.hairColor),{scale:[1.08,.92,1],t:.04});s.position.set(0,.2,-.2),t.add(s);break}case"braids":{t.add(Gs(e,1.4,-.3));const s=Q("#ffd23f");for(let o=0;o<11;o++){const r=qe.degToRad(115+o*13),c=new pe;c.position.set(Math.sin(r)*.43,.02,Math.cos(r)*.43),c.rotation.set(-Math.cos(r)*.25,0,Math.sin(r)*.25);const l=pt(eo(.04,.4),e,{t:.02});l.position.y=-.2,c.add(l);const u=pt(Ie(.05,10,8),s,{t:.015});u.position.y=-.44,c.add(u),t.add(c)}const a=pt(Ie(.16),e,{t:.03});a.position.set(0,.42,-.22),t.add(a);break}case"cornrows":{t.add(Gs(e,1.25,-.32));const s=new pe;s.rotation.x=-.38;const a=Q(no(i.hairColor,.08));for(let o=-2;o<=2;o++){const r=o*.11*_o[0],c=Math.sqrt(.5*.5-r*r)*1,l=pt(ls(+c.toFixed(3),.028,Math.PI),a,{t:.012,cast:!1});l.rotation.y=Math.PI/2,l.position.x=r,s.add(l)}t.add(s);break}case"gele":{const s=n([2,1]),a=pt(Mc(.53,1.45),s,{scale:[1.08,1.05,1.02],t:.03});a.rotation.x=-.2,a.position.y=.02,t.add(a);const o=pt(ls(.49,.075),s,{scale:[1.08,1,1.02],t:.025});o.rotation.x=Math.PI/2-.3,o.position.set(0,.16,-.02),t.add(o);const r=n([1,1]);for(const l of[-1,1]){const u=pt(Ie(.3,16,12),r,{scale:[1.25,.75,.32],t:.03});u.position.set(.17*l,.5,-.12),u.rotation.set(-.35,.25*l,.55*l),t.add(u)}const c=pt(Ie(.14,14,10),r,{t:.025});c.position.set(0,.42,-.02),t.add(c);break}case"cap":{t.add(Gs(e,1.35,-.3));const s=Q(i.accentColor==="#1a1423"?"#e71d36":i.accentColor),a=pt(Mc(.515,1.25),s,{scale:_o,t:.03});a.rotation.x=-.12,a.position.y=.03,t.add(a);const o=pt(rs(.27,.27,.035,24),s,{scale:[1,1,.75],t:.025});o.position.set(0,.23,.43),o.rotation.x=.22,t.add(o);const r=pt(Ie(.04,8,6),s,{t:.015});r.position.set(0,.52,-.06),t.add(r);break}}}function qn(i={}){const t={...Cu(),...i},e=new pe;e.name="chibi";const n=new pe;n.position.y=.03,e.add(n);const s=Q(t.skin),a=Q(no(t.skin,-.12)),r=t.outfit==="ankaraShirt"||t.outfit==="ankaraDress"?Q("#ffffff",{map:bs(t.pattern,t.clothColor,t.accentColor,"#fff3d6",[3,1])}):Q(t.clothColor),c=Q(t.pantsColor),l=Q(t.outfit==="street"?"#f7f7f2":t.outfit==="kaftan"?"#5a3a22":"#2b2024"),u=Q(t.accentColor),m=[],d=t.outfit==="ankaraDress"?s:c;for(const E of[-1,1]){const R=new pe;R.position.set(.115*E,.3,0);const B=pt(eo(.098,.13),d);B.position.y=-.135,R.add(B);const v=pt(Ie(.1,14,10),l,{scale:[1,.55,1.35]});v.position.set(0,-.265,.035),R.add(v),n.add(R),m.push(R)}const h=new pe;if(n.add(h),t.outfit==="kaftan"){const E=pt(rs(.2,.31,.6,20),r);E.position.y=.37,h.add(E);const R=pt(rs(.315,.315,.05,20),u,{t:.02});R.position.y=.09,h.add(R);const B=pt(mi("emb",()=>new an(.08,.22,.02)),u,{t:.012});B.position.set(0,.56,.235),B.rotation.x=-.18,h.add(B)}else{const E=pt(rs(.2,.27,.36,20),r);E.position.y=.48,h.add(E);const R=pt(Ie(.27,20,12),t.outfit==="ankaraDress"?r:c,{scale:[1,.55,.9]});R.position.y=.31,h.add(R)}const _=pt(Ie(.2,20,12),r,{scale:[1.12,.55,.95]});if(_.position.y=.66,h.add(_),t.outfit==="ankaraDress"){const E=pt(rs(.24,.37,.28,22),Q("#ffffff",{map:bs(t.pattern,t.clothColor,t.accentColor,"#fff3d6",[4,1])}));E.position.y=.24,h.add(E);const R=pt(rs(.25,.25,.05,22),u,{t:.02});R.position.y=.39,h.add(R)}if(t.outfit==="street"){const E=pt(ls(.17,.065),r,{t:.025});E.rotation.x=Math.PI/2+.5,E.position.set(0,.72,-.1),h.add(E);const R=pt(mi("pocket",()=>new an(.26,.1,.04)),Q(no(t.clothColor,-.1)),{t:.015});R.position.set(0,.42,.24),R.rotation.x=-.18,h.add(R);const B=pt(ls(.13,.014),Q("#ffd23f"),{t:.01,cast:!1});B.rotation.x=Math.PI/2-.55,B.position.set(0,.62,.07),h.add(B)}if(t.outfit==="ankaraShirt"){const E=pt(ls(.13,.03),u,{t:.015});E.rotation.x=Math.PI/2-.3,E.position.set(0,.69,.02),h.add(E)}const g=[],f=t.outfit==="street"||t.outfit==="kaftan";for(const E of[-1,1]){const R=new pe;R.position.set(.24*E,.64,0),R.rotation.z=.32*E;const B=pt(eo(.068,.16),f?r:s);if(B.position.y=-.12,R.add(B),!f){const y=pt(Ie(.09,14,10),r,{scale:[1,1.05,1]});y.position.y=-.05,R.add(y)}const v=pt(Ie(.074,14,10),s);v.position.y=-.255,R.add(v),n.add(R),g.push(R)}const p=new pe;p.position.y=1.08,n.add(p);const x=pt(Ie(.48,32,24),s,{scale:_o,t:.04});p.add(x);for(const E of[-1,1]){const R=pt(Ie(.1,14,10),s,{scale:[.55,1,.8],t:.025});R.position.set(.515*E,-.07,-.02),p.add(R);const B=new Tt(Ie(.05,10,8),a);B.scale.set(.4,.9,.6),B.position.set(.55*E,-.07,-.01),p.add(B)}const M=Q("#1a1423"),b=new ws({color:16777215}),P=[];for(const E of[-1,1]){const R=new pe;R.position.set(.17*E,-.04,.44),R.rotation.y=.36*E;const B=new Tt(Ie(.068,16,12),M);B.scale.set(.85,1.2,.5),R.add(B);const v=new Tt(Ie(.024,8,6),b);v.position.set(.022,.035,.03),R.add(v);const y=new Tt(Ie(.012,6,4),b);y.position.set(-.02,-.03,.03),R.add(y),p.add(R),P.push(R);const L=new Tt(eo(.012,.07),Q(no(t.hairColor,.02)));L.rotation.z=Math.PI/2+.12*E,L.position.set(.17*E,.1,.43),L.rotation.y=.36*E,p.add(L);const U=new Tt(Ie(.06,12,8),Q("#ff7a93",{opacity:.55}));U.scale.set(1,.55,.3),U.position.set(.28*E,-.16,.36),U.rotation.y=.6*E,p.add(U)}const T=new Tt(ls(.045,.012,Math.PI),Q("#4a1f1a"));return T.position.set(0,-.2,.425),T.rotation.set(-.35,0,Math.PI),p.add(T),F_(t,p),e.userData={cfg:t,rig:n,legs:m,arms:g,head:p,eyes:P,mouth:T,body:h,phase:Math.random()*6,speed:0,seed:Math.random()*100,blinkT:2+Math.random()*3,bubble:null,bubbleT:0},e}function Ln(i,t,e,n){const s=i.userData;s.speed+=(e-s.speed)*Math.min(1,t*10);const a=s.speed;s.phase+=t*(5+6*Math.min(a,1.6));const o=Math.sin(s.phase)*.7*Math.min(a,1.3);s.sitting||(s.legs[0].rotation.x=o,s.legs[1].rotation.x=-o),s.arms[0].rotation.x=-o*.9,s.arms[1].rotation.x=o*.9;const r=Math.sin(n*2.2+s.seed)*.008*(1-Math.min(a,1));if(s.rig.position.y=.03+Math.abs(Math.sin(s.phase))*.06*Math.min(a,1.3)+r,s.rig.rotation.z=Math.sin(s.phase)*.04*Math.min(a,1),s.head.rotation.z=Math.sin(n*1.3+s.seed)*.05*(1-Math.min(a,1)),s.head.rotation.x=Math.sin(n*.9+s.seed)*.03,s.talk>0){s.talk-=t;const l=Math.min(1,s.talk*3);s.arms[1].rotation.x=(-.9+Math.sin(n*7+s.seed)*.35)*l,s.arms[0].rotation.x=Math.sin(n*5+1)*.2*l,s.head.rotation.x+=Math.sin(n*9)*.07*l,s.rig.position.y+=Math.abs(Math.sin(n*7))*.015*l}else s.listen&&(s.head.rotation.x+=Math.sin(n*3+s.seed)*.06,s.head.rotation.z+=.06);s.blinkT-=t;let c=1;s.blinkT<0&&(c=.12,s.blinkT<-.12&&(s.blinkT=2+Math.random()*4));for(const l of s.eyes)l.scale.y=c;s.bubble&&(s.bubbleT-=t,s.bubbleT<=0&&(s.bubble.visible=!1))}function B_(i,t){const e=i.userData.mouth;t<30?(e.rotation.z=0,e.position.y=-.235):(e.rotation.z=Math.PI,e.position.y=-.2)}function Qs(i){const t=i.userData;t.legs.forEach(e=>e.rotation.x=-1.45),t.sitting=!0}function sn(i,t,e=3){const n=i.userData;n.bubble?n.bubble.material.map=fh(t):(n.bubble=new d_(new hu({map:fh(t),depthTest:!1,transparent:!0})),n.bubble.scale.set(2.7,1.05,1),n.bubble.position.y=2.3,n.bubble.renderOrder=10,i.add(n.bubble)),n.bubble.visible=!0,n.bubbleT=e}const z_=[{topic:"fuel",lines:[["A","You don hear? Fuel don cost again!"],["B","Again?! Which one be this one now?"],["A","Danfo conductor dey collect double fare"],["B","Lagos go finish us o 😩"],["A","Na trek I go dey do from tomorrow"]]},{topic:"nepa",lines:[["A","NEPA bring light for una side?"],["B","Light? Since Tuesday we no see am"],["A","Ehen! My freezer don turn cupboard"],["B","I don sell my fan, na hand fan remain 😂"]]},{topic:"rent",lines:[["A","My landlord don increase rent again"],["B","Which kain wahala be this?"],["A",'He say na because of "economy"'],["B","Economy wey no reach our pocket 🙄"],["A","Saturday dey come like Danfo wey no get brake"]]},{topic:"football",lines:[["A","Super Eagles go win this match!"],["B","You dey dream? Our defence na open gate"],["A","Osimhen go score two, watch am!"],["B","If dem win, I go buy you suya 🍢"],["A","Deal! Prepare your money"]]},{topic:"arsenal",lines:[["A","Arsenal fans don start their noise again"],["B","This season na our season! 🔴"],["A","Una talk am last year too 😂"],["B","Abeg leave me with my hope"]]},{topic:"gossip",lines:[["A","Shey you hear about Bisi and Emeka?"],["B","No o, wetin happen?"],["A","Dem see them for Yaba Market together 👀"],["B","Ehn?! Na wa o. Tell me everything!"],["A","Shhh, make person no hear us"]]},{topic:"jollof",lines:[["A","Iya Basira jollof na the best for Lagos"],["B","Lie! Ghana jollof sweet pass"],["A","Repeat wetin you talk? 😤"],["B","I dey play o, I dey play! 😂"],["A","Better. Na party jollof we dey talk"]]},{topic:"traffic",lines:[["A","Na why you late this morning?"],["B","Third Mainland Bridge, my brother"],["A","Three hours for one spot?"],["B","I fit don reach Abuja with that time 😩"]]},{topic:"owambe",lines:[["A","You dey go the owambe this Saturday?"],["B","Which one? Mama Tobi 60th?"],["A","Yes! Aso-ebi na ₦25k"],["B","Haba! I go wear my old Ankara"],["A","Abeg just come for the small chops 😋"]]},{topic:"jamb",lines:[["A","My junior brother write JAMB"],["B","How e score?"],["A","280! He wan read Medicine for UNILAG"],["B","Odogwu! Una go soon get doctor for house 🎓"],["A","Na God o, school fees na the next wahala"]]},{topic:"jamb2",lines:[["A","JAMB portal don crash again"],["B","Na every year this thing dey happen"],["A","Cyber cafe man collect ₦3,000"],["B","Na hustle e dey hustle too 😂"]]},{topic:"naira",lines:[["A","Dollar don reach how much today?"],["B","Abeg no spoil my morning"],["A","Bread price don change again"],["B","Soon we go dey buy bread by slice 🍞"]]},{topic:"danfo",lines:[["A","Conductor no give me my change!"],["B","How much?"],["A","₦50! E just jump down for Ojuelegba"],["B","Na ₦50 e take build house 😂"]]},{topic:"church",lines:[["A","You go come vigil this Friday?"],["B","Which church again?"],["A","Holy Ghost Fire! Pastor say na breakthrough night"],["B","If my breakthrough fit pay rent, I dey come 🙏"]]},{topic:"hustle",lines:[["A","How market today?"],["B","Customer dey, but dem dey price too much"],["A","Na so Lagos be. Small small"],["B","Slow and steady, we go reach"]]},{topic:"japa",lines:[["A","Chinedu don japa go Canada o"],["B","Haa! E no tell anybody?"],["A","Na for status I see am ✈️"],["B","Make God remember me too 😭"]]},{topic:"rain",lines:[["A","See as sky black. Rain wan fall"],["B","Make I quick go remove my cloth from line"],["A","Gutter go overflow again today"],["B","Lagos rain no dey play 🌧️"]]},{topic:"phone",lines:[["A","Abeg you get charger?"],["B","Which one? Type-C?"],["A","Ehn, my phone don dey 1%"],["B","Go GistMe Phones, dem dey charge ₦200 🔌"]]}],H_=[{topic:"nepa",lines:[["A","Who get light for this street?"],["B","Nobody! NEPA don carry am go"],["C","Na gen I dey use since Monday"],["A","You get money buy fuel? 😂"],["C","Na borrow I borrow am o"]]},{topic:"football",lines:[["A","Who go win Champions League?"],["B","Madrid! Dem get the DNA"],["C","Abeg, City go collect am"],["A","Una two no know ball 😂"],["B","Oya bet ₦500 make we see"]]},{topic:"fuel",lines:[["A","Fuel price don pass ₦1,000 per litre"],["B","Keke people don increase fare"],["C","Me I go buy bicycle 🚲"],["A","For this Lagos traffic? You go reach before Danfo sef"]]},{topic:"gossip",lines:[["A","Una see Baba Ade new car?"],["B","Na our rent money e take buy am!"],["C","Shhh! E fit hear you 👀"],["B","Make e hear! Na true I talk"]]},{topic:"jollof",lines:[["A","Who dey cook for the owambe?"],["B","Iya Basira! Smoky party jollof"],["C","I go carry two takeaway 😋"],["A","Them go dey watch you o"]]},{topic:"jamb",lines:[["A","JAMB result don come out"],["B","My daughter score 300!"],["C","Congrats! Make she come teach my son"],["A","Na celebration be this — who dey buy malt? 🥤"]]}],Sr=["Road close o! Turn back!","Oga, no pass here!","Road work dey go on","Where your particulars?","Shine your eye!"],de=new an(1,1,1),V_=new pn(.5,.5,1,16),wr=new pn(.5,.5,1,8),Va=new Dn(.5,14,10),Ws=new ca(1,1,8),Ga={minX:-88.6,maxX:88.4,minZ:-32.4,maxZ:32.4},ps=[{id:"oju",name:"Ojuelegba",x:-58},{id:"yaba",name:"Yaba Market",x:-6},{id:"cms",name:"CMS",x:52}],Kn={home:new A(-30,0,-13.4),generator:new A(-20.6,0,-13.2),buka:new A(18,0,-12.6),stall:new A(-26,0,10.4),spawn:new A(-30,0,-11.5)};let Er=7;const cn=()=>(Er=Er*16807%2147483647,(Er-1)/2147483646),Gt=(i,t)=>i+cn()*(t-i),Vn=i=>i[Math.floor(cn()*i.length)];class G_{constructor(t){this.scene=t,this.root=new pe,t.add(this.root),this.colliders=[],this.windowsLit=[],this.windowsDark=[],this.lampLights=[],this.vehicles=[],this.npcs=[],this.walkers=[],this.produce={tomato:[],pepper:[],onion:[],plantain:[]},this.mats={window:Q("#a8dcff",{unique:!0}),windowDark:Q("#7aa3c4",{unique:!0}),bulb:Q("#fff3b0",{unique:!0}),homeWin:Q("#a8dcff",{unique:!0}),homeBulb:Q("#fff3b0",{unique:!0}),headlight:Q("#fffbe0",{unique:!0})},this.build()}add(t,e=this.root){return e.add(t),t}box(t,e,n,s,a,o,r,c={}){var m;const l=typeof s=="string"?Q(s,c.matOpts):s,u=pt(de,l,{scale:[t,e,n],t:(m=c.t)!=null?m:.06,outline:c.outline,cast:c.cast,receive:c.receive});return u.position.set(a,o,r),c.ry&&(u.rotation.y=c.ry),c.rx&&(u.rotation.x=c.rx),c.rz&&(u.rotation.z=c.rz),this.add(u,c.parent)}cyl(t,e,n,s,a,o,r={}){var u;const c=typeof n=="string"?Q(n):n,l=pt(r.low?wr:V_,c,{scale:[t*2,e,t*2],t:(u=r.t)!=null?u:.04,outline:r.outline,cast:r.cast});return l.position.set(s,a,o),this.add(l,r.parent)}collide(t,e,n,s){this.colliders.push({minX:t,maxX:e,minZ:n,maxZ:s})}sign(t,e,n,s,a,o,r=0,c={}){const l=Mr(t,{w:512,h:Math.round(512*n/e),...c}),u=new pe;u.position.set(s,a,o),u.rotation.y=r;const m=pt(de,Q(c.border||"#1a1423"),{scale:[e+.12,n+.12,.08],t:.03});u.add(m);const d=new Tt(new en(e,n),Q("#ffffff",{map:l}));return d.position.z=.05,u.add(d),this.add(u)}build(){this.ground(),this.roads(),this.home(),this.buka(),this.market(),ps.forEach(t=>this.busStop(t)),this.fillers(),this.edges(),this.stage2(),this.lamps(),this.powerLines(),this.palms(),this.billboards(),this.finishInstances(),this.spawnVehicles(),this.spawnNPCs()}ground(){const t=new Tt(new en(400,260),Q("#f0d3a0"));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.add(t);for(let e=0;e<24;e++){const n=new Tt(new fs(Gt(1.5,4),10),Q(Vn(["#b9d98a","#e6bf86","#a7cf7b"])));n.rotation.x=-Math.PI/2,n.position.set(Gt(-80,80),.01,Vn([-1,1])*Gt(9,30)),n.receiveShadow=!0,this.add(n)}}roads(){const t=new Tt(new en(164,10),Q("#ffffff",{map:dh(20)})),e=Q("#5b6070");for(const r of[-1,1]){const c=new Tt(new fs(7.2,32),e);c.rotation.x=-Math.PI/2,c.position.set(r*82,.018,0),c.receiveShadow=!0,this.add(c),this.cyl(1.4,.3,"#9be7a4",r*82,.15,0,{t:.04}),this.cyl(.08,2.2,"#4a4e5c",r*82,1.1,0,{t:.02}),this.sign("U-TURN",1.4,.5,r*82,2.3,0,r>0?-Math.PI/2:Math.PI/2,{bg:"#3a86ff",fg:"#fff"}),this.collide(r*82-1.4,r*82+1.4,-1.4,1.4);const l=new Tt(new fs(4.6,28),e);l.rotation.x=-Math.PI/2,l.position.set(0,.022,r*29),l.receiveShadow=!0,this.add(l)}t.rotation.x=-Math.PI/2,t.position.y=.02,t.receiveShadow=!0,this.add(t);for(const r of[-1,1]){const c=new Tt(new en(24,8),Q("#ffffff",{map:dh(3)}));c.rotation.x=-Math.PI/2,c.rotation.z=Math.PI/2,c.position.set(0,.025,r*17),c.receiveShadow=!0,this.add(c)}for(let r=0;r<6;r++)this.box(.7,.02,8,"#f6f2e8",8+r*1.2,.03,0,{outline:!1,cast:!1});const n=Q("#ffffff",{map:tn(["#ffd23f","#1a1423"],2,!0,[40,1])}),s=Q("#ddd5c4"),a=[n,n,s,s,n,n],o=(r,c,l,u)=>{const m=new Tt(de,a);m.scale.set(l,.18,u),m.position.set(r,.09,c),m.receiveShadow=!0,this.add(m)};for(const r of[-1,1])o(-39.5,r*6.25,69,2.5),o(39.5,r*6.25,69,2.5),o(r*5.25,-18,2.5,21),o(r*5.25,18,2.5,21);for(const r of[-1,1]){const c=new Tt(new en(148,.5),Q("#3b3f4a"));c.rotation.x=-Math.PI/2,c.position.set(0,.015,r*7.75),this.add(c)}}window(t,e,n,s,a=1.1,o=1.2,r=!0){(r?this.windowsLit:this.windowsDark).push({x:t,y:e,z:n,ry:s,w:a,h:o})}home(){const o=new pe;this.add(o),this.box(17,3.4,7,"#f6dcb4",-30,3.4/2,-19),this.box(17+.05,1,7+.05,"#7fc8c0",-30,.5,-19,{t:.02,cast:!1});const r=Q("#ffffff",{map:tn(["#d9773f","#b85c2c"],16,!0,[6,1])});for(const g of[-1,1]){const f=this.box(18,.16,4.4,r,-30,3.95,-19+g*1.95,{t:.04});f.rotation.x=g*.32}this.box(17+1.1,.25,.3,"#8a3b1d",-30,3.4+1.05,-19,{t:.03});const c=-19+7/2;this.box(2,2.6,.12,"#2d2a3a",-30,1.3,c+.02,{outline:!1});const l=Q("#ffffff",{map:bs("kente","#e71d36","#ffd23f","#fff3d6",[1,2])});this.box(1.8,2.2,.05,l,-30,1.45,c+.1,{t:.02}),this.box(2.6,.18,1.6,"#c9b79c",-30,.09,c+.8,{t:.03}),this.box(2.8,.15,1.8,"#8a3b1d",-30,2.95,c+.75,{t:.03}).rotation.x=.12;const u=Q("#ffffff",{map:k_(),unique:!0});this.homeBars=u;for(const g of[-36.5,-33.5,-26.5,-23.5]){this.box(1.4,1.4,.1,"#1a1423",g,1.9,c+.03,{outline:!1});const f=new Tt(new en(1.2,1.2),u);f.position.set(g,1.9,c+.1),this.add(f)}this.homeWindowMeshes=[],this.sign("FACE-ME-I-FACE-YOU",4.2,.7,-30,3.05,c+.95,0,{bg:"#fdfcdc",sub:"No. 7 • Landlord: Baba Ade"}),this.sign("NO URINATING HERE",2.4,.5,-37,.9,c+.12,0,{bg:"#fff",fg:"#e71d36",border:"#e71d36"});const m=new Tt(new Dn(.15,10,8),this.mats.homeBulb);m.position.set(-30+1.2,2.7,c+.3),this.add(m),this.homeLight=new yc(16765562,0,12,1.6),this.homeLight.position.set(-30,2.6,c+2.2),this.add(this.homeLight),this.collide(-30-17/2,-30+17/2,-19-7/2,-19+7/2),this.cyl(.06,2.2,"#6b4f3a",-38,1.1,-12.2),this.cyl(.06,2.2,"#6b4f3a",-33,1.1,-12.2);const d=new vc(new we().setFromPoints([new A(-38,2.1,-12.2),new A(-35.5,1.95,-12.2),new A(-33,2.1,-12.2)]),new to({color:1709091}));this.add(d),["#e71d36","#2ec4b6","#ffbe0b","#8338ec"].forEach((g,f)=>{const p=Q("#ffffff",{map:bs(["circles","waves","diamonds","leaves"][f],g,"#fff3d6","#1a1423",[1,1])});this.box(.8,.9,.04,p,-37.3+f*1.2,1.5,-12.2,{t:.02})});const h=-21.2,_=-14.6;this.box(1.2,.75,.8,"#e63946",h,.45,_,{t:.04}),this.box(.7,.4,.82,"#2b2d42",h-.15,.45,_,{t:.02}),this.box(1.3,.08,.9,"#1a1423",h,.06,_,{t:.02}),this.cyl(.05,.4,"#555",h+.45,.95,_-.2,{t:.02}),this.box(.45,.55,.3,"#ffd23f",h+1,.28,_+.1,{t:.03}),this.sign("I-PASS-MY-NEIGHBOUR",1.6,.32,h,1.15,_+.42,0,{bg:"#ffd23f"}),this.genSmoke=[];for(let g=0;g<4;g++){const f=new Tt(new Dn(.15,8,6),Q("#d6d6dc",{opacity:.8}));f.position.set(h+.45,1.2+g*.3,_-.2),f.visible=!1,this.add(f),this.genSmoke.push(f)}this.collide(h-.7,h+1.3,_-.5,_+.5),this.box(.6,.08,.6,"#e71d36",-27.6,.45,-14.2,{t:.02}),this.box(.6,.6,.08,"#e71d36",-27.6,.78,-14.5,{t:.02})}buka(){for(const[a,o]of[[-4,-2.5],[4,-2.5],[-4,2.5],[4,2.5]])this.cyl(.12,3.2,"#7a5536",18+a,1.6,-17+o,{low:!0});const n=Q("#ffffff",{map:tn(["#9fb3c8","#7f93a8"],16,!0,[5,1])});this.box(9.4,.15,6.4,n,18,3.3,-17,{rx:-.08}),this.box(9,3,.2,"#ffcf99",18,1.5,-17-2.6,{}),this.box(5,1,1.2,"#8b5a3c",18,.5,-17-.6,{}),this.box(5.1,.1,1.3,"#e9c46a",18,1.04,-17-.6,{t:.02});const s=[["#ff7b29",-1.8],["#6a994e",-.6],["#c1121f",.6],["#f4d58d",1.8]];for(const[a,o]of s)this.cyl(.38,.45,"#c9ccd6",18+o,1.32,-17-.6,{t:.03}),this.cyl(.33,.04,a,18+o,1.56,-17-.6,{outline:!1,cast:!1});this.box(3.2,.12,.6,"#a0522d",16,.5,-17+1.6,{t:.03}),this.box(3.2,.12,.6,"#a0522d",18+2.2,.5,-17+1.6,{t:.03});for(const a of[-3.5,-.5,.7,3.7])this.box(.15,.5,.5,"#6b3e1f",18+a,.25,-17+1.6,{t:.02});this.sign("MAMA PUT",4.4,1,18,3.95,-14,0,{bg:"#e71d36",fg:"#fff",sub:"Iya Basira Buka • Food dey!"}),this.box(1.2,.7,.05,"#fdfcdc",18+3.2,2.1,-17-2.45,{t:.02}),this.collide(18-4.7,18+4.7,-17-2.8,-17-2.4),this.collide(18-2.6,18+2.6,-17-1.25,-17+.05),this.bukaLight=[18,3,-17+.5]}market(){const n=[tn(["#e71d36","#fdfcdc"],8,!0),tn(["#3a86ff","#ffd23f"],8,!0),tn(["#06d6a0","#fdfcdc"],8,!0),tn(["#ff6b35","#2b2d42"],8,!0)];[[0,0],[5,0],[10,0],[0,6],[5,6],[10,6],[-5,6]].forEach(([a,o],r)=>{const c=-26+a,l=12+o;this.box(2.6,.12,1.3,"#b07a4a",c,.9,l,{t:.03});for(const[d,h]of[[-1.1,-.5],[1.1,-.5],[-1.1,.5],[1.1,.5]])this.box(.1,.9,.1,"#6b4f3a",c+d,.45,l+h,{outline:!1});this.cyl(.05,2.6,"#555",c,1.3,l+.3,{t:.02});const u=pt(Ws,Q("#ffffff",{map:n[r%4]}),{scale:[2,.7,2],t:.04});u.position.set(c,2.75,l+.3),this.add(u);const m=["tomato","pepper","onion","plantain"];for(let d=0;d<3;d++){const h=m[(r+d)%4],_=c-.8+d*.8,g=l-.1,f=h==="plantain"?[[0,0,0],[.12,0,.1],[-.1,0,.12],[0,.1,.05]]:[[0,0,0],[.2,0,0],[-.2,0,0],[.1,0,.18],[-.1,0,.18],[0,.16,.08],[.1,.16,-.06],[-.1,.16,-.06],[0,.3,.02]];for(const p of f)this.produce[h].push([_+p[0],1.06+p[1],g+p[2]])}this.collide(c-1.35,c+1.35,l-.7,l+.7)}),this.sign("YOUR STALL",2.2,.5,-26,1.45,12-.68,Math.PI,{bg:"#06d6a0"}),this.sign("YOUR STALL",2.2,.5,-26,1.45,12-.68,0,{bg:"#06d6a0"}),this.sign("YABA MARKET",5,1,-21,4,12-1.6,0,{bg:"#ffd23f",sub:"Buy am sharp-sharp • No credit today"}),this.cyl(.1,4,"#555",-26+2.6,2,12-1.6,{t:.02}),this.cyl(.1,4,"#555",-26+7.4,2,12-1.6,{t:.02}),this.marketCenter=[-21,3,15]}busStop(t){const e=t.x,n=8.4;this.cyl(.08,2.6,"#2b2d42",e-1.8,1.3,n,{t:.02}),this.cyl(.08,2.6,"#2b2d42",e+1.8,1.3,n,{t:.02}),this.box(4.4,.15,1.8,"#3a86ff",e,2.65,n,{t:.04}),this.box(3.4,.1,.5,"#fdfcdc",e,.55,n+.2,{t:.03}),this.box(3.4,.6,.06,"#9fb3c8",e,1.4,n+.85,{t:.02}),this.sign(t.name.toUpperCase(),3.2,.6,e,3.15,n,0,{bg:"#ffd23f",sub:"BUS STOP • Danfo dey come"}),this.collide(e-2,e+2,n+.3,n+1)}building({x:t,z:e,w:n,d:s,h:a,color:o,face:r,sign:c,signBg:l="#fdfcdc",sub:u=null,awning:m=null,tank:d=!0}){const h=r>0?0:Math.PI;this.box(n,a,s,o,t,a/2,e,{t:.07}),this.box(n+.3,.45,s+.3,ph(o,-.15),t,a+.2,e,{t:.05});const _=e+r*(s/2+.05),g=Math.max(1,Math.floor(a/3)),f=Math.max(1,Math.floor(n/2.6));for(let p=0;p<g;p++){const x=1.6+p*3;for(let M=0;M<f;M++){const b=t-n/2+n/f*(M+.5);p===0&&c&&Math.abs(b-t)<1.4||this.window(b,x,_,h,1.1,1.3,cn()<.72)}p>0&&cn()<.45&&this.box(n*.5,.12,.8,ph(o,-.1),t+Gt(-n/4,n/4),x-.9,_+r*.4,{t:.03})}if(c&&(this.box(1.4,2.3,.1,"#3d2c2e",t,1.15,_,{outline:!1}),this.sign(c,Math.min(n-1,6),1,t,2.9,_+r*.1,h,{bg:l,sub:u})),m){const p=Q("#ffffff",{map:tn(m,10,!0,[2,1])}),x=this.box(Math.min(n-.5,6.5),.1,1.4,p,t,2.25,_+r*.7,{t:.03});x.rotation.x=r*.3}d&&(this.cyl(.65,1.3,"#2b2d42",t+n/2-1.2,a+1,e-r*(s/2-1.2),{t:.04}),cn()<.6&&this.box(.8,.5,.5,"#e5e5e5",t-n/2+1.2,a+.65,e,{t:.03})),this.collide(t-n/2,t+n/2,e-s/2,e+s/2)}fillers(){[{x:-62,z:-18,w:11,d:8,h:6.5,color:"#ff9eb5",face:1,sign:"GOD'S TIME IS BEST",sub:"Barbing Salon • Low cut ₦1,500",awning:["#e71d36","#fdfcdc"]},{x:-49,z:-18,w:9,d:8,h:9.5,color:"#7fd1c7",face:1},{x:-11,z:-18,w:10,d:8,h:6.5,color:"#ffe066",face:1,sign:"MAMA NKECHI",sub:"Provisions & Pure Water",awning:["#3a86ff","#fdfcdc"]},{x:34,z:-18,w:12,d:9,h:12.5,color:"#c3b1f0",face:1},{x:50,z:-18,w:10,d:8,h:6.5,color:"#9be7a4",face:1,sign:"GISTME PHONES",sub:"Repairs • Recharge card • Data",signBg:"#8338ec",awning:["#8338ec","#ffd23f"]},{x:65,z:-18,w:11,d:8,h:9.5,color:"#ffb38a",face:1},{x:-64,z:18,w:11,d:8,h:9.5,color:"#a0d8ff",face:-1},{x:-46,z:17,w:9,d:7,h:6.5,color:"#ffd6a5",face:-1,sign:"NO FOOD FOR LAZY MAN",sub:"Enterprises Ltd",awning:["#06d6a0","#fdfcdc"]},{x:13,z:18,w:11,d:8,h:6.5,color:"#fdfcdc",face:-1,sign:"HOLY GHOST FIRE",sub:"Assembly • Vigil every Friday",signBg:"#3a86ff"},{x:29,z:18,w:9,d:7,h:9.5,color:"#ff8fab",face:-1,sign:"ALHAJI PHARMACY",sub:"Paracetamol dey",signBg:"#06d6a0"},{x:46,z:18,w:12,d:9,h:6.5,color:"#b8f2e6",face:-1}].forEach(s=>this.building(s));for(let s=0;s<18;s++)for(const a of[-1,1]){const o=Gt(8,14),r=Gt(8,22),c=-84+s*9.6+Gt(-2,2),l=a*Gt(38,46),u=Vn(["#ffc8dd","#bde0fe","#cdb4db","#ffd6a5","#caffbf","#fdffb6","#a0c4ff"]);this.box(o,r,Gt(7,10),u,c,r/2,l,{t:.08,cast:!1});const m=Math.floor(r/3);for(let d=0;d<m;d++)for(let h=0;h<Math.floor(o/3);h++)this.window(c-o/2+1.5+h*3,1.6+d*3,l-a*4.5,a>0?Math.PI:0,1.1,1.3,cn()<.6)}}lamps(){this.lampPositions=[];for(let e=-70;e<=70;e+=20)for(const n of[-1,1]){const s=e+(n>0?10:0),a=n*7.2;if(Math.abs(s)<7||s>76)continue;this.cyl(.08,5,"#4a4e5c",s,2.5,a,{t:.025,low:!0}),this.box(.1,.1,1.4,"#4a4e5c",s,4.95,a-n*.6,{t:.02}),this.box(.5,.18,.4,"#2b2d42",s,4.9,a-n*1.25,{t:.02});const o=new Tt(de,this.mats.bulb);o.scale.set(.38,.06,.3),o.position.set(s,4.79,a-n*1.25),this.add(o),this.lampPositions.push([s,4.6,a-n*1.25])}const t=[[-30,4.2,-9],[18,4.5,-9],[-21,4.5,9],[-58,4.5,6],[-6,4.5,6],[52,4.5,6],[0,4.5,0]];for(const e of t){const n=new yc(16762219,0,18,1.4);n.position.set(...e),this.add(n),this.lampLights.push(n)}}powerLines(){const t=[],e=[];for(let s=-76;s<=76;s+=16)this.cyl(.13,7.2,"#7a5536",s,3.6,-8.1,{t:.03,low:!0}),this.box(1.6,.12,.12,"#7a5536",s,6.8,-8.1,{t:.02}),e.push(s);this.box(.8,1,.7,"#7d8597",-12,5.4,-8.1,{t:.03});for(let s=0;s<e.length-1;s++)for(const a of[-.7,0,.7]){const o=new A(e[s],6.85,-8.1+a*.01),r=new A(e[s+1],6.85,-8.1+a*.01),c=8;for(let l=0;l<c;l++){const u=l/c,m=(l+1)/c,d=o.clone().lerp(r,u),h=o.clone().lerp(r,m);d.x+=a,h.x+=a,d.z=-8.1+a*.3,h.z=d.z,d.y-=Math.sin(Math.PI*u)*.9,h.y-=Math.sin(Math.PI*m)*.9,t.push(d,h)}}const n=new we().setFromPoints(t);this.add(new p_(n,new to({color:1709091})))}palm(t,e,n=5){const s=Q("#9c6b3e");let a=t,o=0;const r=Gt(-.15,.15);for(let l=0;l<5;l++){const u=pt(wr,s,{scale:[.36-l*.03,n/5+.05,.36-l*.03],t:.03});u.position.set(a,o+n/10,e),u.rotation.z=r,this.add(u),a-=Math.sin(r)*n/5,o+=n/5}const c=Q("#3bb273");for(let l=0;l<7;l++){const u=l/7*Math.PI*2,m=pt(Ws,c,{scale:[.35,2.6,.12],t:.03}),d=new pe;d.position.set(a,o,e),d.rotation.y=u,this.add(d),m.position.set(0,.2,1.1),m.rotation.x=Math.PI/2+.45,d.add(m)}this.add(pt(Va,Q("#6b4f1d"),{scale:[.5,.5,.5],t:.02})).position.set(a,o-.1,e),this.collide(t-.3,t+.3,e-.3,e+.3)}palms(){[[-42,-11],[-16,-11],[26,-11],[42,-11],[-52,11],[-38,11],[8.5,11],[22,11],[38,11],[58,-11],[-70,-11],[70,11]].forEach(([t,e])=>this.palm(t,e,Gt(4.5,6.5)))}billboards(){const t=(e,n,s,a,o,r,c="#1a1423")=>(this.cyl(.18,7,"#4a4e5c",s-2.5,3.5,a,{low:!0}),this.cyl(.18,7,"#4a4e5c",s+2.5,3.5,a,{low:!0}),this.sign(e,7.5,3,s,8.3,a,o,{bg:r,fg:c,sub:n,w:768}));t("LapoPay","Quick loan sharp-sharp! *wahala dey",4,-26,0,"#06d6a0"),t("GistMe","Gist wey sweet pass suya 📱",-18,27,Math.PI,"#ffd23f")}finishInstances(){const t=new ve,e=(s,a)=>{if(!s.length)return null;const o=new zs(de,a,s.length),r=new zs(de,Q("#2b2d42"),s.length);return s.forEach((c,l)=>{t.position.set(c.x,c.y,c.z),t.rotation.set(0,c.ry,0),t.scale.set(c.w,c.h,.08),t.translateZ(.06),t.updateMatrix(),o.setMatrixAt(l,t.matrix),t.position.set(c.x,c.y,c.z),t.scale.set(c.w+.22,c.h+.22,.06),t.updateMatrix(),r.setMatrixAt(l,t.matrix)}),this.add(o),this.add(r),o};e(this.windowsLit,this.mats.window),e(this.windowsDark,this.mats.windowDark);const n={tomato:["#e63946",.11,Va],pepper:["#d00000",.08,Va],onion:["#9d4edd",.12,Va],plantain:["#ffd23f",.1,new Po(.5,1.6,3,8)]};for(const[s,[a,o,r]]of Object.entries(n)){const c=this.produce[s];if(!c.length)continue;const l=new zs(r,Q(a),c.length),u=new zs(r,bu,c.length);c.forEach((m,d)=>{t.position.set(...m),t.rotation.set(0,d,s==="plantain"?Math.PI/2:0),t.scale.setScalar(o*2),t.updateMatrix(),l.setMatrixAt(d,t.matrix),t.scale.setScalar(o*2+.04),t.updateMatrix(),u.setMatrixAt(d,t.matrix)}),l.castShadow=!0,this.add(l),this.add(u)}}makeDanfo(){const t=new pe,e=Q("#ffc300"),n=pt(de,e,{scale:[4.6,1.75,2],t:.06});n.position.y=1.25,t.add(n);const s=pt(de,e,{scale:[.7,.9,1.9],t:.05});s.position.set(2.6,.82,0),t.add(s);for(const h of[.78,1.02]){const _=new Tt(de,Q("#1a1423"));_.scale.set(4.62,.09,2.02),_.position.y=h,t.add(_)}const a=Q("#3d5a80"),o=new Tt(de,a);o.scale.set(3.6,.6,2.03),o.position.set(-.3,1.65,0),t.add(o);const r=new Tt(de,a);r.scale.set(.05,.6,1.7),r.position.set(2.31,1.65,0),t.add(r);const c=pt(de,Q("#2b2d42"),{scale:[3.4,.08,1.7],t:.03});c.position.set(-.2,2.25,0),t.add(c);const l=new Tt(de,this.mats.headlight);l.scale.set(.06,.2,1.5),l.position.set(2.96,.95,0),t.add(l);const u=pt(de,Q("#d9d9d9"),{scale:[.15,.2,2],t:.02});u.position.set(2.98,.5,0),t.add(u);const m=new pn(.4,.4,.3,14);for(const[h,_]of[[1.7,1],[1.7,-1],[-1.6,1],[-1.6,-1]]){const g=pt(m,Q("#1a1423"),{t:.02});g.rotation.x=Math.PI/2,g.position.set(h,.4,_),t.add(g)}const d=this.signMesh("OSHODI-OYINGBO",1.8,.32,"#fdfcdc");return d.position.set(2.32,2.08,0),d.rotation.y=Math.PI/2,t.add(d),t}signMesh(t,e,n,s){const a=Mr(t,{w:512,h:Math.round(512*n/e),bg:s});return new Tt(new en(e,n),Q("#ffffff",{map:a}))}makeKeke(t=!0){const e=new pe,n=Q("#ffd23f"),s=Q("#2a9d8f"),a=pt(de,n,{scale:[2.3,.7,1.3],t:.05});a.position.set(0,.75,0),e.add(a);const o=pt(de,s,{scale:[.6,1.1,.9],t:.04});o.position.set(1.15,1,0),e.add(o);const r=pt(de,s,{scale:[2.3,.12,1.4],t:.04});r.position.set(-.1,2.15,0),e.add(r);for(const[d,h]of[[.95,.6],[.95,-.6],[-1.15,.6],[-1.15,-.6]]){const _=pt(de,Q("#2b2d42"),{scale:[.08,1.1,.08],t:.02});_.position.set(d,1.6,h),e.add(_)}const c=pt(de,Q("#3a2a20"),{scale:[.6,.5,1.1],t:.02});c.position.set(-.6,1.25,0),e.add(c);const l=new pn(.3,.3,.2,12);for(const[d,h]of[[1.2,0],[-.8,.65],[-.8,-.65]]){const _=pt(l,Q("#1a1423"),{t:.02});_.rotation.x=Math.PI/2,_.position.set(d,.3,h),e.add(_)}const u=new Tt(de,this.mats.headlight);if(u.scale.set(.05,.18,.4),u.position.set(1.46,1.1,0),e.add(u),!t)return e;const m=qn({...un(cn),hair:"cap",outfit:"street"});return m.scale.setScalar(.8),m.position.set(.45,.95,0),m.rotation.y=Math.PI/2,Qs(m),e.add(m),e.userData.driver=m,e}spawnVehicles(){const t=[{z:2.4,dir:1},{z:-2.4,dir:-1}];for(let e=0;e<5;e++){const n=t[e%2],s=this.makeDanfo();s.rotation.y=n.dir>0?0:Math.PI,s.position.set(-76+e*33,0,n.z),this.add(s),this.vehicles.push({mesh:s,type:"danfo",axis:"x",dir:n.dir,speed:Gt(8,11),base:Gt(8,11),wait:0,len:3,half:1.1,lastStop:null})}for(let e=0;e<3;e++){const n=e%2?1:-1,s=this.makeKeke();s.rotation.y=n>0?-Math.PI/2:Math.PI/2,s.position.set(n>0?-1.8:1.8,0,-24+e*21),this.add(s),this.vehicles.push({mesh:s,type:"keke",axis:"z",dir:n,speed:6,base:Gt(5.5,7),wait:0,len:1.5,half:.8})}}spawnNPCs(){const t=["Chinedu","Bisi","Emeka","Aisha","Segun","Ngozi","Femi","Zainab","Kunle","Amaka","Musa","Yetunde","Obinna","Halima"];for(let c=0;c<18;c++){const l=un(cn);l.name=t[c%t.length]+(c>=t.length?" Jr":"");const u=qn(l);this.add(u);const m=c%2?1:-1,d={mesh:u,z:m*Gt(5.6,6.9),x:Gt(-70,70),tx:0,speed:Gt(1.3,2),wait:Gt(0,3),talkT:Gt(4,20),name:l.name,convCD:Gt(2,12),conv:null};d.tx=d.x,u.position.set(d.x,.18,d.z),this.walkers.push(d)}const e=(c,l,u,m,d=!1,h=null,_=null)=>{const g=qn({...un(cn),...c});return g.position.set(l,_!=null?_:this.groundHeight(l,u),u),g.rotation.y=m,d&&Qs(g),this.add(g),this.npcs.push({mesh:g,lines:h,talkT:Gt(3,12)}),this.colliders.push({minX:l-.35,maxX:l+.35,minZ:u-.35,maxZ:u+.35}),g};e({name:"Iya Basira",hair:"gele",outfit:"ankaraDress",clothColor:"#e71d36",accentColor:"#ffd23f",pattern:"circles",skin:"#5a3218"},18,-18,0,!1,["Food dey!","Jollof hot!","Come chop o!"]),e({name:"Baba Ade",hair:"cap",outfit:"kaftan",clothColor:"#fdfcdc",accentColor:"#3a86ff",skin:"#432513"},-27.6,-14.1,.3,!0,["Rent na Saturday o!","My money nko?","How work?"],.2),e({name:"Mama Tomato",hair:"gele",outfit:"ankaraDress",clothColor:"#06d6a0",accentColor:"#ff6b35"},-21,13,Math.PI,!1,["Tomato dey!","Buy pepper!"]),e({name:"Iya Onions",hair:"braids",outfit:"ankaraDress",clothColor:"#8338ec",accentColor:"#ffd23f"},-16,13,Math.PI,!1,["Onions cheap!","Customer!"]),e({name:"Uncle Musa",hair:"cap",outfit:"kaftan",clothColor:"#2ec4b6",accentColor:"#fdfcdc"},-26,19,Math.PI,!1,["Plantain sweet!"]),e({name:"Conductor",hair:"lowcut",outfit:"street",clothColor:"#e71d36"},-6+2.4,7,-.4,!1,["Oshodi! Oshodi!","Enter with change!","CMS! CMS!"]),e({name:"Waiting",hair:"braids",outfit:"street",clothColor:"#3a86ff"},-58-.8,8.5,0,!0,["Danfo where?","This sun ehn"],.3),e({name:"Waiting2",hair:"afro",outfit:"ankaraShirt",clothColor:"#ffbe0b"},52+.6,8.5,0,!0,["I don late!"],.3);const n={hair:"cap",outfit:"street",clothColor:"#ffd23f",accentColor:"#7b1e3a",pantsColor:"#7b1e3a"},s={hair:"cap",outfit:"street",clothColor:"#1d2240",accentColor:"#1a1423",pantsColor:"#1a1423"};e({...n,name:"LASTMA"},87.6,3.2,-Math.PI/2,!1,Sr),e({...s,name:"Police"},87.6,-3.6,-Math.PI/2,!1,Sr),e({...n,name:"LASTMA 2"},2.8,32,Math.PI,!1,Sr),e({hair:"cap",outfit:"kaftan",clothColor:"#6b705c",accentColor:"#264653",name:"Mai Guard"},4.6,-32.2,0,!0,["Estate close!","Who you wan see?","No entry without gate pass"],.12),this.groups=[];const a=(c,l,u)=>{const m=u.map((d,h)=>{const _=h/u.length*Math.PI*2+.4,g=c+Math.sin(_)*.95,f=l+Math.cos(_)*.95,p=e({name:d},g,f,Math.atan2(c-g,l-f),!1,null),x=this.npcs[this.npcs.length-1];return x.group=!0,{mesh:p,name:d,conv:null}});this.groups.push({members:m,cd:Gt(1,5),conv:null})};a(-9,-11,["Uncle Sola","Bros Kelechi","Aunty Rose"]),a(14,11.6,["Deacon Paul","Sister Grace","Bro Tunji"]),a(-85.5,15,["Fisherman Ade","Kunle","Ibrahim"]);const o={hair:"lowcut",outfit:"street",clothColor:"#1d3557",pantsColor:"#2b2d42"},r=["Agbero Sunday","Agbero Lucky","Agbero Taiwo"];this.agberos=r.map((c,l)=>{const u=7.6+l*.9,m=-9.2+l%2*.8;return{mesh:e({...o,clothColor:["#1d3557","#e71d36","#6b705c"][l],name:c},u,m,Math.PI,!1,["Owo union!","Oya park!","Driver, bring ₦300!"]),name:c,conv:null}}),this.groups.push({members:this.agberos,cd:Gt(2,6),conv:null}),this.junior=e({name:"Junior (ball owner)",hair:"lowcut",outfit:"street",clothColor:"#06d6a0",pantsColor:"#f4f1de"},50.2,0+27.2,-Math.PI/2,!1,["Na my ball o!","Who wan play?","Oya come join!"]),e({name:"Fan 1",hair:"afro"},40,23.4,0,!1,["Goal!!","Pass am!"]),e({name:"Fan 2",hair:"braids"},41.2,23.4,0,!1,["Shoot!","Ehen!"])}neon(t,e,n,s,a,o,r=!1){const c=Mr(t,{w:512,h:128,bg:"#1a1423",fg:o,border:o}),l=Q("#ffffff",{map:c,emissive:16777215,unique:!0});l.emissiveMap=c;const u=new Tt(new an(2.4,.6,.08),[Q("#1a1423"),Q("#1a1423"),Q("#1a1423"),Q("#1a1423"),l,l]);u.position.set(e,n,s),u.rotation.y=a,this.add(u),this.neons.push({mat:l,bad:r})}umbrella(t,e,n,s=1.6){this.cyl(.04,2.3,"#555",t,1.15,e,{t:.015,cast:!1});const a=pt(Ws,Q("#ffffff",{map:tn(n,8,!0)}),{scale:[s,.55,s],t:.035});a.position.set(t,2.45,e),a.rotation.y=cn()*3,this.add(a)}stage2(){this.neons=[],this.neon("OPEN 24/7",-11,4.2,-13.85,0,"#ff4fd8",!0),this.neon("GISTME",50,4.3,-13.85,0,"#4cf0ff"),this.neon("PHARMACY +",29,4.2,14.45,Math.PI,"#4dff88"),this.neon("BUKA",21.8,2.8,-14,0,"#ffd23f",!0),this.neon("MEGA FUEL",64,5.6,12.15,Math.PI,"#ff5252");const t=[["#ff6b9a","#fdfcdc"],["#06d6a0","#ffd23f"],["#3a86ff","#ff6b35"],["#8338ec","#ffbe0b"],["#e71d36","#2ec4b6"],["#ffbe0b","#1a1423"]];[[-46,8.9],[-2,-8.9],[24,8.9],[42,-8.9],[-64,-8.9],[58,8.9],[16,-9.3],[-15,8.9]].forEach(([l,u],m)=>{this.umbrella(l,u,t[m%t.length],1.5),this.box(1.2,.08,.7,"#b07a4a",l+.3,.8,u,{t:.02}),this.box(.08,.8,.08,"#6b4f3a",l+.3,.4,u,{outline:!1}),this.collide(l-.4,l+1,u-.4,u+.4)}),this.umbrella(13,-13.2,["#ffd23f","#e71d36"],1.8),this.umbrella(23,-13.2,["#06d6a0","#fdfcdc"],1.8);const e=64,n=15.5;this.box(11,.5,6.5,"#e71d36",e,4.8,n,{t:.05}),this.box(11.1,.18,6.6,"#fdfcdc",e,4.5,n,{t:.02,cast:!1});for(const[l,u]of[[-4.5,-2.5],[4.5,-2.5],[-4.5,2.5],[4.5,2.5]])this.box(.4,4.5,.4,"#fdfcdc",e+l,2.25,n+u,{t:.03}),this.collide(e+l-.25,e+l+.25,n+u-.25,n+u+.25);for(const l of[-2,2])this.box(.8,1.6,.6,"#fdfcdc",e+l,.8,n,{t:.04}),this.box(.6,.4,.62,"#e71d36",e+l,1.3,n,{t:.02}),this.box(.9,.2,.8,"#9fb3c8",e+l,.1,n,{t:.02}),this.collide(e+l-.5,e+l+.5,n-.4,n+.4);this.box(7,3.2,3.2,"#fdfcdc",e,1.6,n+5,{t:.05}),this.collide(e-3.5,e+3.5,n+3.4,n+6.6),this.sign("MEGA FUEL",4.8,1,e,3.4,n+3.35,Math.PI,{bg:"#e71d36",fg:"#fff",sub:"Petrol • Diesel • No fuel scarcity (today)"}),this.cyl(.12,6,"#4a4e5c",e-6.5,3,n-3,{t:.02}),this.sign("PETROL",1.8,.8,e-6.5,6.2,n-3,Math.PI,{bg:"#ffd23f",sub:"Price dey change"}),this.fuelSpot=new A(e,0,n-3.2),this.playerKeke=this.makeKeke(!1),this.playerKeke.position.set(-23.5,0,-10.6),this.playerKeke.rotation.y=Math.PI,this.add(this.playerKeke),this.sign("MY KEKE",1.4,.4,-23.5,2.6,-10.6,0,{bg:"#ffd23f"});const[s]=W_(512,256),a=s.getContext("2d");a.fillStyle="#6e717c",a.fillRect(0,0,512,256),a.fillStyle="rgba(240,211,160,0.35)";for(let l=0;l<90;l++)a.fillRect(Math.random()*512,Math.random()*256,20+Math.random()*30,6);a.strokeStyle="rgba(255,255,255,0.75)",a.lineWidth=5,a.strokeRect(8,8,496,240),a.beginPath(),a.moveTo(256,8),a.lineTo(256,248),a.stroke(),a.beginPath(),a.arc(256,128,40,0,7),a.stroke();const o=new pu(s);o.colorSpace=Oe;const r=new Tt(new en(18,8),Q("#ffffff",{map:o}));r.rotation.x=-Math.PI/2,r.position.set(40,.03,28),r.receiveShadow=!0,this.add(r);const c=new ia(.32,0);c.computeVertexNormals();for(const l of[31.2,48.8])for(const u of[26.6,29.4]){const m=pt(c,Q("#9a9aa6"),{t:.03});m.position.set(l,.25,u),this.add(m);const d=pt(c,Q("#b8b8c2"),{t:.03,scale:[.7,.7,.7]});d.position.set(l,.6,u),this.add(d)}this.sign("THE SET",2.4,.6,40,2.4,23.2,0,{bg:"#06d6a0",sub:"Winner stays • Ball na Junior own"}),this.cyl(.07,2.4,"#4a4e5c",38.6,1.2,23.2,{t:.02}),this.cyl(.07,2.4,"#4a4e5c",41.4,1.2,23.2,{t:.02}),this.box(4,.4,.6,"#c9b79c",40.6,.2,23.4,{t:.03}),this.pitch={minX:31.2,maxX:48.8,minZ:24.1,maxZ:31.9,goalMin:26.6,goalMax:29.4,cx:40,cz:28},this.ball=pt(new ia(.17,1),Q("#fdfcdc"),{t:.025}),this.ball.position.set(40,.18,28),this.add(this.ball),this.checkpointSpot=new A(30,0,-9)}edges(){this.waterTex=tn(["#48bfe3","#5ccfee","#48bfe3","#72d8f2"],8,!1,[30,60]);const t=new Tt(new en(260,400),Q("#ffffff",{map:this.waterTex}));t.rotation.x=-Math.PI/2,t.position.set(-91.4-130,.04,0),this.add(t),this.box(1.2,.8,72,"#d6cdb9",-90.9,.4,0,{t:.04});const e=Q("#3a86ff");for(let g=-33;g<=33;g+=2.5)this.cyl(.06,1.15,"#2b2d42",-90.4,1.35,g,{t:.02,low:!0,cast:!1});for(const g of[1.15,1.85])this.box(.1,.1,66.5,e,-90.4,g,0,{t:.02,cast:!1});this.sign("LAGOS LAGOON",3.6,.9,-90.2,2.6,-14,Math.PI/2,{bg:"#2ec4b6",sub:"No swimming • No dumping refuse"}),this.cyl(.07,2.2,"#2b2d42",-90.2,1.1,-15.3,{t:.02}),this.cyl(.07,2.2,"#2b2d42",-90.2,1.1,-12.7,{t:.02}),this.collide(-140,-89.9,-60,60),this.canoes=[];for(const[g,f,p]of[[-100,-8,"#9c6b3e"],[-112,12,"#e71d36"],[-126,-22,"#3a86ff"]]){const x=new pe;x.position.set(g,.1,f),x.rotation.y=Gt(0,3),x.add(pt(de,Q(p),{scale:[4.2,.5,1],t:.04}));const M=qn({...un(cn),hair:"cap"});M.scale.setScalar(.8),M.position.y=.2,Qs(M),x.add(M),this.add(x),this.canoes.push(x)}for(let g=0;g<12;g++){const f=Gt(10,30);this.box(Gt(6,12),f,8,Vn(["#bde0fe","#cdb4db","#ffc8dd","#a0c4ff"]),-175-Gt(0,10),f/2,-70+g*12,{t:.1,cast:!1})}const n=Q("#ffffff",{map:tn(["#fdfcdc","#fdfcdc","#3a86ff"],3,!1,[1,1])});this.box(.3,3.4,70,n,91.3,1.7,0,{t:.05}),this.sign("ROAD CLOSED",4.4,1.3,91.1,2,0,-Math.PI/2,{bg:"#e71d36",fg:"#fff",sub:"Lagos State Road Works • Use alternative route"}),this.sign("SAFETY FIRST",3,.8,91.1,2.2,-16,-Math.PI/2,{bg:"#ffd23f",sub:"Hard hat area"}),this.sign("POST NO BILL",2.6,.7,91.1,1.6,18,-Math.PI/2,{bg:"#fdfcdc",fg:"#e71d36"}),this.collide(88.9,140,-60,60);const s=Q("#b8b8c2");for(let g=0;g<4;g++)if(this.box(12,.35,9,s,104,.2+g*3.3,9,{t:.05,cast:!1}),g<3)for(const[f,p]of[[-5.5,-4],[5.5,-4],[-5.5,4],[5.5,4],[0,-4],[0,4]])this.box(.45,3.3,.45,s,104+f,1.85+g*3.3,9+p,{t:.03,cast:!1});for(let g=0;g<7;g++)this.cyl(.06,3,"#7a5536",98+g*1.2,11.7,4.6,{low:!0,outline:!1,cast:!1});const a=Q("#ffbe0b");this.box(1,26,1,a,100,13,-10,{t:.05,cast:!1}),this.box(26,.8,.8,a,94,26.2,-10,{t:.05,cast:!1}),this.box(2,2,1.2,"#4a4e5c",104,25,-10,{t:.04,cast:!1}),this.box(1.2,1.2,1.2,"#2b2d42",98.5,26.6,-10,{t:.03,cast:!1});const o=new vc(new we().setFromPoints([new A(84,26,-10),new A(84,14,-10)]),new to({color:1709091}));this.add(o),this.box(1.6,.6,1.6,"#e71d36",84,13.6,-10,{t:.03,cast:!1});const r=pt(Ws,Q("#e9c46a"),{scale:[3,2,3],t:.05,cast:!1});r.position.set(97,1,-2),this.add(r);const c=Q("#ffffff",{map:tn(["#e71d36","#fdfcdc"],8,!0,[2,1])}),l=(g,f,p=0)=>{const x=new pe;x.position.set(g,0,f),x.rotation.y=p,this.add(x);const M=pt(de,c,{scale:[.15,.45,2.4],t:.03});M.position.y=1,x.add(M);const b=pt(de,c,{scale:[.15,.3,2.4],t:.03});b.position.y=.45,x.add(b);for(const P of[-1,1]){const T=pt(de,Q("#2b2d42"),{scale:[.5,1.2,.1],t:.02});T.position.set(0,.6,P*1.05),x.add(T)}},u=(g,f)=>{const p=pt(Ws,Q("#ff7b29"),{scale:[.3,.75,.3],t:.025});p.position.set(g,.38,f),this.add(p);const x=new Tt(wr,Q("#fdfcdc"));x.scale.set(.38,.1,.38),x.position.set(g,.42,f),this.add(x)};for(let g=-8.4;g<=8.4;g+=2.6)l(89.3,g);for(const g of[-6,-2,2,6])u(86.4,g);this.box(184,4.4,.7,"#f3e9d2",0,2.2,-34.3,{t:.06}),this.box(184.4,.3,1,"#c9b79c",0,4.5,-34.3,{t:.03,cast:!1});const m=new Ts(.28,.035,4,10),d=new zs(m,Q("#4a4e5c"),300),h=new ve;for(let g=0;g<300;g++)h.position.set(-91+g*.61,4.95,-34.3),h.rotation.set(0,Math.PI/2,0),h.updateMatrix(),d.setMatrixAt(g,h.matrix);this.add(d),this.box(7,3.8,.35,"#2a9d8f",0,1.95,-33.85,{t:.05});for(let g=-3;g<=3;g++)this.box(.08,3.6,.4,"#1a1423",g*.95,1.95,-33.8,{outline:!1,cast:!1});this.sign("ROYAL GARDENS ESTATE",5.2,1,0,4.9,-33.6,0,{bg:"#fdfcdc",sub:"No Danfo • No Keke • No Okada • No Hawking"}),this.box(2.2,2.6,2.2,"#ffd6a5",6.2,1.3,-32.6,{t:.04}),this.box(2.6,.2,2.6,"#e71d36",6.2,2.7,-32.6,{t:.03}),this.collide(5.1,7.3,-33.7,-31.5),this.sign("POST NO BILL",2.6,.7,-40,2.4,-33.9,0,{bg:"#fdfcdc",fg:"#e71d36"}),this.sign("THIS HOUSE IS NOT FOR SALE",4.6,.7,40,2.4,-33.9,0,{bg:"#fdfcdc",fg:"#1a1423",border:"#e71d36"}),this.collide(-140,140,-60,-33.95);const _=Q("#ffffff",{map:tn(["#9fb3c8","#7f93a8","#b5652d","#9fb3c8"],32,!0,[24,1])});this.box(184,3.2,.25,_,0,1.6,34.3,{t:.05});for(let g=-90;g<=90;g+=6)this.box(.2,3.4,.3,"#6b4f3a",g,1.7,34.1,{outline:!1,cast:!1});this.sign("BEWARE OF 419",3,.7,-50,2,34.1,Math.PI,{bg:"#ffd23f"}),this.sign("THIS LAND IS NOT FOR SALE",4.6,.7,30,2,34.1,Math.PI,{bg:"#fdfcdc",fg:"#e71d36"}),this.sign("ROAD CLOSED",3.6,1,0,2.3,33.6,Math.PI,{bg:"#e71d36",fg:"#fff",sub:"Drainage works • LASTMA dey watch"});for(let g=-3.9;g<=3.9;g+=2.6)l(g,33.2,Math.PI/2);for(const g of[-2.6,0,2.6])u(g,30.8+(g===0?.4:0));this.collide(-140,140,33.6,60)}updateConversations(t,e,n,s){var r;this.convs=this.convs||[];const a=this.walkers;for(let c=0;c<a.length;c++){const l=a[c];if(!(l.conv||l.convCD>0))for(let u=c+1;u<a.length;u++){const m=a[u];if(m.conv||m.convCD>0)continue;const d=m.mesh.position.x-l.mesh.position.x,h=m.mesh.position.z-l.mesh.position.z;if(Math.abs(h)<1.8&&Math.abs(d)<2.6){cn()<.55?this.startConv([l,m],Vn(z_)):(l.convCD=Gt(4,10),m.convCD=Gt(4,10));break}}}for(const c of this.groups)c.cd-=t,!c.conv&&c.cd<=0&&(c.conv=this.startConv(c.members,Vn(H_)),c.conv.group=c);const o=(c,l,u,m)=>{let h=Math.atan2(l-c.position.x,u-c.position.z)-c.rotation.y;h=Math.atan2(Math.sin(h),Math.cos(h)),c.rotation.y+=h*Math.min(1,t*m)};for(let c=this.convs.length-1;c>=0;c--){const l=this.convs[c],u=l.members[l.speaker]||l.members[0];for(const _ of l.members){if(_===u){const g=l.members.find(f=>f!==_);l.members.length===2&&o(_.mesh,g.mesh.position.x,g.mesh.position.z,6)}else o(_.mesh,u.mesh.position.x,u.mesh.position.z,5);_.mesh.userData.listen=_!==u}if(l.members.length===2){const[_,g]=l.members,f=g.mesh.position.x-_.mesh.position.x,p=Math.sign(f||1)*1.3,x=(f-p)*Math.min(1,t*2)*.5;_.mesh.position.x+=x,g.mesh.position.x-=x}if(l.t-=t,l.t>0)continue;if(l.i>=l.lines.length){for(const _ of l.members)_.conv=null,_.mesh.userData.listen=!1,_.convCD!==void 0&&(_.convCD=Gt(20,45),_.wait=.4);l.group&&(l.group.conv=null,l.group.cd=Gt(6,14)),this.convs.splice(c,1);continue}const[m,d]=l.lines[l.i++];l.speaker=Math.min(l.members.length-1,"ABC".indexOf(m));const h=l.members[l.speaker];sn(h.mesh,d,2.9),h.mesh.userData.talk=2.7,l.t=2.2+d.length*.035,Math.hypot(n.x-h.mesh.position.x,n.z-h.mesh.position.z)<7&&((r=s.onOverhear)==null||r.call(s,h.name,d))}}startConv(t,e){const n={members:t,lines:e.lines,i:0,t:.3,speaker:0,topic:e.topic};for(const s of t)s.conv=n;return this.convs=this.convs||[],this.convs.push(n),n}update(t,e,n,s){var a,o;for(const r of this.vehicles){const c=r.mesh;let l=r.base;if(r.wait>0&&(r.wait-=t,l=0),r.type==="danfo"&&!r.turn&&(r.dir>0||r.conductor))for(const d of ps)Math.abs(c.position.x-(d.x-r.dir))<.4&&r.lastStop!==d.id&&(r.wait=2.5,r.lastStop=d.id,r.conductor?(a=this.onConductorStop)==null||a.call(this,r,d):Math.random()<.3&&((o=this.onDanfoNear)==null||o.call(this,r)),Math.random()<.6&&(this.bark={pos:c.position.clone(),text:Vn(["Oshodi! Oshodi!","Enter with your change!",`${d.name}! Wole!`])}));r.type==="keke"&&Math.abs(c.position.z+r.dir*4)<6.5&&Math.abs(c.position.z)>3&&this.vehicles.some(h=>h.type==="danfo"&&Math.abs(h.mesh.position.x)<7)&&(l=0);const u=r.turn?-1:r.axis==="x"?(n.x-c.position.x)*r.dir:(n.z-c.position.z)*r.dir,m=r.axis==="x"?Math.abs(n.z-c.position.z):Math.abs(n.x-c.position.x);if(u>0&&u<r.len+3&&m<r.half+.6&&(l=0),r.speed+=(l-r.speed)*Math.min(1,t*3),r.axis==="x"?r.turn||(c.position.x+=r.speed*r.dir*t,c.position.x*r.dir>=82&&(r.turn={phi:0,e:r.dir},c.position.x=82*r.dir)):r.turn||(c.position.z+=r.speed*r.dir*t,c.position.z*r.dir>=28&&(r.turn={phi:0,e:r.dir},c.position.z=28*r.dir)),r.turn){const d=r.turn,h=r.axis==="x"?2.4:1.8,_=d.e;d.phi=Math.min(Math.PI,d.phi+Math.max(r.speed,2.5)*.7/h*t);const g=c.position.x,f=c.position.z;r.axis==="x"?c.position.set(82*_+_*h*1.6*Math.sin(d.phi),c.position.y,_*h*Math.cos(d.phi)):c.position.set(-_*h*Math.cos(d.phi),c.position.y,28*_+_*h*1.4*Math.sin(d.phi));const p=c.position.x-g,x=c.position.z-f;p*p+x*x>1e-8&&(c.rotation.y=Math.atan2(-x,p)),d.phi>=Math.PI&&(r.turn=null,r.dir=-r.dir,r.lastStop=null,c.rotation.y=r.axis==="x"?r.dir>0?0:Math.PI:r.dir>0?-Math.PI/2:Math.PI/2)}c.position.y=Math.abs(Math.sin(e*9+c.id))*.04*Math.min(1,r.speed)}for(const r of this.walkers){const c=r.mesh;let l=0;if(r.convCD-=t,!r.conv)if(r.wait>0)r.wait-=t;else{const u=r.tx-c.position.x;if(Math.abs(u)<.2)r.wait=Gt(1,5),r.tx=qe.clamp(c.position.x+Gt(-25,25),-73,73);else{const m=Math.sign(u)*r.speed*t;Math.hypot(n.x-c.position.x,n.z-c.position.z)<1&&Math.sign(n.x-c.position.x)===Math.sign(u)||(c.position.x+=m,l=1);const h=u>0?Math.PI/2:-Math.PI/2;c.rotation.y+=(h-c.rotation.y)*Math.min(1,t*8)}}r.talkT-=t,r.talkT<0&&!r.conv&&(r.talkT=Gt(10,25),Math.hypot(n.x-c.position.x,n.z-c.position.z)<18&&sn(c,Vn(s.lines()),3)),Ln(c,t,l,e)}this.updateConversations(t,e,n,s);for(const r of this.neons){const c=s.power?1:0,l=Math.random()<(r.bad?.08:.015)?.2:1;r.mat.emissiveIntensity=c*(.35+.9*(s.night||0))*l}for(const r of this.npcs)r.talkT-=t,r.talkT<0&&r.lines&&!r.group&&(r.talkT=Gt(8,18),Math.hypot(n.x-r.mesh.position.x,n.z-r.mesh.position.z)<14&&sn(r.mesh,Vn(s.power?r.lines:[...r.lines,"NEPA don take light!"]),3)),Ln(r.mesh,t,0,e);for(const r of this.vehicles)r.mesh.userData.driver&&Ln(r.mesh.userData.driver,t,0,e);this.waterTex&&(this.waterTex.offset.y=e*.02%1),this.canoes&&this.canoes.forEach((r,c)=>{r.position.y=.08+Math.sin(e*1.5+c)*.06,r.rotation.z=Math.sin(e*1.2+c)*.04}),this.genSmoke.forEach((r,c)=>{if(r.visible=s.genRunning,s.genRunning){const l=(e*.8+c*.25)%1;r.position.y=1.15+l*1.4,r.scale.setScalar(.6+l*1.4),r.position.x=-20.75+Math.sin(e+c)*.1}})}resolve(t,e=.35){for(const n of this.colliders){const s=Math.max(n.minX,Math.min(t.x,n.maxX)),a=Math.max(n.minZ,Math.min(t.z,n.maxZ)),o=t.x-s,r=t.z-a,c=o*o+r*r;if(c<e*e)if(c>1e-8){const l=Math.sqrt(c);t.x=s+o/l*e,t.z=a+r/l*e}else{const l=[t.x-n.minX,n.maxX-t.x,t.z-n.minZ,n.maxZ-t.z],u=l.indexOf(Math.min(...l));u===0?t.x=n.minX-e:u===1?t.x=n.maxX+e:u===2?t.z=n.minZ-e:t.z=n.maxZ+e}}for(const n of this.vehicles){const s=n.mesh.position,a=n.axis==="x"?2.9:n.half,o=n.axis==="x"?1.05:1.4,r=Math.max(s.x-a,Math.min(t.x,s.x+a)),c=Math.max(s.z-o,Math.min(t.z,s.z+o)),l=t.x-r,u=t.z-c,m=l*l+u*u;if(m<e*e)if(m>1e-8){const d=Math.sqrt(m);t.x=r+l/d*e,t.z=c+u/d*e}else n.axis==="x"?t.z=t.z>s.z?s.z+o+e:s.z-o-e:t.x=t.x>s.x?s.x+a+e:s.x-a-e}for(const n of this.walkers){const s=t.x-n.mesh.position.x,a=t.z-n.mesh.position.z,o=Math.hypot(s,a);o<.7&&o>1e-4&&(t.x=n.mesh.position.x+s/o*.7,t.z=n.mesh.position.z+a/o*.7)}t.x=Math.max(Ga.minX,Math.min(Ga.maxX,t.x)),t.z=Math.max(Ga.minZ,Math.min(Ga.maxZ,t.z))}groundHeight(t,e){const n=Math.abs(e),s=Math.abs(t);return n>5&&n<7.5||s>4&&s<6.5&&n>7.5&&n<28.5?.18:0}}function W_(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,[e]}function ph(i,t){const e=new Ot(i),n={};return e.getHSL(n,Oe),e.setHSL(n.h,n.s,Math.max(0,Math.min(1,n.l+t)),Oe),"#"+e.getHexString()}const ta=8e3,mh=2e3,X_=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],$_=3,Ru=.05,vo=[{id:"Lapo",min:-1/0,label:"Lapo",blurb:"Starting from zero, hustling with everything."},{id:"Hustler",min:5e4,label:"Small Hustler",blurb:"Money don small enter. No dull."},{id:"Odogwu",min:25e4,label:"Odogwu",blurb:"Big boy/Big girl things."}],Tr=i=>Math.round(i/50)*50,En=(i,t=0,e=100)=>Math.max(t,Math.min(e,i)),as=i=>i[Math.floor(Math.random()*i.length)],et=i=>"₦"+Math.round(i).toLocaleString("en-NG");function q_(i){return Pu({v:1,name:i,t:7*60,cash:4e3,loan:0,rentOwed:ta,strikes:0,warnedSat:!1,hunger:70,energy:85,mood:65,fuel:0,genOn:!0,power:!0,fuelFactor:1,marketBonus:1,marketBonusUntil:0,feed:[],unread:0,nextNews:7*60+45,stats:{earned:0,sold:0,meals:0},evicted:!1,player:null})}function Pu(i){const t={karma:0,dataMB:300,followers:0,sponsorsPaid:0,posts:[],messages:[],unreadMsg:0,loanDue:0,recovery:0,quietGen:!1,hasGen:!0,genComplaints:0,items:{radio:!0},kekeFuel:6,kekeTrips:0,stock:{water:0,gala:0},tollCD:0,agberoScared:0,npcRep:{},statsV2:{trips:0,hawked:0,shifts:0,deeds:0,chakam:0,matches:0,wins:0},nextDeed:0,nextChakam:0};for(const[e,n]of Object.entries(t))i[e]===void 0&&(i[e]=JSON.parse(JSON.stringify(n)));return i.v===1&&!i.messages.length&&(i.messages.push({t:i.t,from:"GistMe",text:"Your GistMe don update! New apps: Messages, Clout, Chakam. Data bundle now needed for internet things 📶",read:!1,kind:"msg"}),i.unreadMsg=1,i._migrated=!0),i.v=2,i._migrated&&i._shown&&delete i._migrated,i}const gh=[{id:"d",name:"Daily 100MB",mb:100,price:100},{id:"w",name:"Weekly 750MB",mb:750,price:500},{id:"m",name:"Monthly 2.5GB",mb:2500,price:1500}],_h=[[100,"Mama Nkechi Provisions",1e3],[300,"Iya Basira Buka",2500],[700,"GistMe Phones",5e3],[1500,"Silent Tiger Generators",1e4],[3e3,"Lagos Pure Water Co.",2e4]],qs=45e3,Y_=[["@LagosTraffic","Third Mainland Bridge don lock. Una wey dey go Island, carry your patience 🚗🚗🚗"],["@IyaBasira","Fresh jollof don land for buka! Party jollof, smoky bottom pot 🔥🍛"],["@Danfo_Oshodi",'Conductor say "No change" — but I know say you get ₦50 for that pocket 😤'],["@YabaLeftBoy","Who get charger? My phone don dey 2% since morning"],["@MamaNkechi","Pure water don land. Cold one dey ₦50. Sharp sharp!"],["@GistMeNews","Lagos weather: Sun go shine like say e get vendetta. Drink water 💧"],["@Area_Fada","Who wan buy original iPhone 16 for ₦40k? Na from abroad 👀 (Scam alert ⚠️)"],["@PastorFire","Vigil this Friday! Holy Ghost Fire Assembly. Come with your neighbour 🙏"],["@BarberSalon","God's Time Is Best Barbing Salon: low cut ₦1,500, no shaking 💈"],["@NaijaFootball","Super Eagles go win this one. I feel am for my spirit ⚽🦅"],["@Lagos_Landlord","Tenants wey dey owe, I dey watch una o. Saturday no far 👀"]];class K_{constructor(t,e){this.s=Pu(t),this.h=e,this.acc=0,this.collapsed=!1,t.feed.length||(this.post("@GistMeNews",`Welcome to GistMe, ${t.name}! You don land Lagos. Rent na ${et(ta)} every Saturday. No dull o! 🏙️`,"info"),this.post("@LapoPay","Hustle never start? LapoPay fit borrow you up to ₦15,000 — interest small (5% every day 👀).","ad"))}get day(){return Math.floor(this.s.t/1440)+1}get min(){return this.s.t%1440}get hour(){return this.min/60}get weekday(){return Math.floor(this.s.t/1440)%7}get isNight(){const t=this.hour;return t<6||t>=19}get genRunning(){return!this.s.power&&this.s.genOn&&this.s.fuel>0&&(this.s.hasGen||this.s.quietGen)}get homePowered(){return this.s.power||this.genRunning}get danfoFare(){return Tr(200*this.s.fuelFactor)}get fuelPrice(){return Tr(1200*this.s.fuelFactor)}get netWorth(){return this.s.cash-this.s.loan-this.s.rentOwed}get kekeFuelPrice(){return Tr(800*this.s.fuelFactor)}get tier(){let t=vo[0];for(const e of vo)this.netWorth>=e.min&&(t=e);return t}timeStr(t=this.s.t){const e=t%1440;return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}dayStr(t=this.s.t){return X_[Math.floor(t/1440)%7]}rentCountdown(){let t=(6-this.weekday+7)%7;return t===0&&(t=7),t*1440-this.min-(this.weekday===6,0)}get statusPoints(){const t=this.s;return Math.max(0,Math.min(100,Math.round(this.netWorth/1500+t.karma*.4+t.followers/40)))}addKarma(t,e){var n,s;this.s.karma=Math.max(-100,Math.min(100,this.s.karma+t)),(s=(n=this.h).onKarma)==null||s.call(n,t,e)}text(t,e,n="msg"){var s,a;this.s.messages.unshift({t:this.s.t,from:t,text:e,kind:n,read:!1}),this.s.messages.length>50&&(this.s.messages.length=50),this.s.unreadMsg++,(a=(s=this.h).onText)==null||a.call(s,{from:t,text:e,kind:n})}useData(t){return this.s.dataMB<t?!1:(this.s.dataMB-=t,!0)}buyData(t){return this.spend(t.price)?(this.s.dataMB+=t.mb,!0):!1}addFollowers(t){var n,s;const e=this.s;e.followers=Math.max(0,e.followers+t);for(let a=e.sponsorsPaid;a<_h.length;a++){const[o,r,c]=_h[a];if(e.followers<o)break;e.sponsorsPaid=a+1,this.earn(c,"sponsor"),this.text(r,`Hello ${e.name}! We see your Clout page (${o}+ followers 🔥). We don send ${et(c)} make you promote us small. Thank you!`,"good"),(s=(n=this.h).toast)==null||s.call(n,`Sponsorship! ${r} pay you ${et(c)} 💸`,"money")}}post(t,e,n="gist"){var s,a;this.s.feed.unshift({t:this.s.t,handle:t,text:e,kind:n}),this.s.feed.length>40&&(this.s.feed.length=40),this.s.unread++,(a=(s=this.h).onPost)==null||a.call(s,{handle:t,text:e,kind:n})}earn(t,e){var n,s;this.s.cash+=t,t>0&&(this.s.stats.earned+=t),(s=(n=this.h).onCash)==null||s.call(n,t,e)}spend(t){var e,n;return this.s.cash<t?!1:(this.s.cash-=t,(n=(e=this.h).onCash)==null||n.call(e,-t),!0)}update(t){for(this.acc+=t*$_;this.acc>=1;)this.acc-=1,this.tick({})}advance(t,e={}){for(let n=0;n<t;n++)this.tick(e)}tick(t){var r,c;const e=this.s;if(e.evicted)return;e.t+=1;const n=l=>l/60,s=!!t.sleeping,a=!!t.working;e.hunger=En(e.hunger-n(s?2:a?7:4.5)),s?e.energy=En(e.energy+n(this.homePowered?13:8)):e.energy=En(e.energy-n(a?9:3.5)-(e.hunger<=0?n(4):0));let o=62;e.hunger<25&&(o-=25),e.energy<20&&(o-=15),!e.power&&this.isNight&&!this.genRunning&&(o-=12),e.rentOwed>0&&this.weekday>=4&&(o-=8),e.loan>0&&(o-=5),e.mood=En(e.mood+(o-e.mood)*n(.12)),s&&!this.homePowered&&(e.mood=En(e.mood-n(1.5))),e.t%60===0&&this.onHour(t),e.t%1440===0&&this.onDay(),!s&&e.energy<=0&&!this.collapsed&&(this.collapsed=!0,(c=(r=this.h).onCollapse)==null||c.call(r))}onHour(t){var s,a,o,r,c,l;const e=this.s,n=Math.round(this.hour)%24;if(e.power){const u=this.isNight?.2:.1;Math.random()<u&&this.setPower(!1)}else Math.random()<.3&&this.setPower(!0);if(n===6&&(e.genComplaints=0),n===0&&(e.dataMB=Math.max(0,e.dataMB-20)),this.genRunning&&(n>=22||n<6)&&!e.quietGen&&Math.random()<.55){e.genComplaints++;const u=as(["Mama Chidi (Room 2)","Bros Femi (Room 5)","Iya Ibeji (Room 3)","Mr Okon (Room 6)"]),m=["Abeg off that your gen! Na 1am! 😡",'Your "I pass my neighbour" no let my pikin sleep o',"Smoke from your gen don enter my room!","If you no off that gen, I go report you to Baba Ade!"];this.text(u,as(m),"bad"),e.genComplaints===3&&(e.cash=Math.max(0,e.cash-1e3),this.text("Baba Ade (Landlord)",`Neighbours don complain 3 times about your gen noise. I don fine you ${et(1e3)}. Buy quiet gen or sleep for heat!`,"bad"),(a=(s=this.h).toast)==null||a.call(s,`Landlord fine you ${et(1e3)} for gen noise! 🔊`,"bad"),this.addKarma(-3))}e.loan>0&&e.loanDue&&e.t>=e.loanDue&&n%6===0&&this.recoveryStep(),this.genRunning&&(e.fuel=Math.max(0,e.fuel-1),e.fuel===0&&((r=(o=this.h).toast)==null||r.call(o,"Generator don finish fuel! 😩","warn"),this.post("@You","Gen don off. Fuel don finish. Heat go kill me tonight 🥵","gist"))),e.marketBonusUntil&&e.t>=e.marketBonusUntil&&(e.marketBonus=1,e.marketBonusUntil=0),this.weekday===5&&n===12&&e.rentOwed>0&&!e.warnedSat&&(e.warnedSat=!0,this.post("@Baba_Ade_Landlord",`${e.name}, today na Saturday o. ${et(e.rentOwed)} rent dey due before midnight. I no wan hear story! 😠`,"alert"),(l=(c=this.h).toast)==null||l.call(c,`Rent due tonight: ${et(e.rentOwed)}!`,"bad")),e.t>=e.nextNews&&!t.sleeping&&(this.newsEvent(),e.nextNews=e.t+180+Math.floor(Math.random()*180))}setPower(t){var n,s,a,o;const e=this.s;e.power!==t&&(e.power=t,t?(this.post("@Everybody",as(["UP NEPA!!! 💡🎉","Light don come! Make I quickly charge my phone 🔌","NEPA bring light! Everybody shout for street 😂"]),"good"),(o=(a=this.h).onPower)==null||o.call(a,!0)):(this.post("@NEPA_Updates",as(["Due to technical fault, power supply don go. We regret any inconvenience 🙏","Grid don collapse again. Una get gen?","Load shedding in progress. Light go come back soon (maybe) 🕯️"]),"alert"),(s=(n=this.h).onPower)==null||s.call(n,!1)))}onDay(){var n,s,a,o;const t=this.s,e=this.weekday;if(e===6)if(t.rentOwed>0){if(t.strikes++,t.rentOwed+=mh,t.strikes>=2){t.evicted=!0,this.post("@Baba_Ade_Landlord","Pack your load commot for my house! I don give you enough chance. 🧳","alert"),(s=(n=this.h).onEvict)==null||s.call(n);return}this.post("@Baba_Ade_Landlord",`You no pay rent! I don add ${et(mh)} late fee. Next Saturday if you no pay, I go throw your load comot! ⚠️`,"alert"),(o=(a=this.h).onEvictionWarning)==null||o.call(a)}else this.post("@Baba_Ade_Landlord","Rent don enter. God bless you my pikin 🙏","good");if(e===0&&(t.rentOwed+=ta,t.warnedSat=!1,this.post("@Baba_Ade_Landlord",`New week, new rent: ${et(ta)} due Saturday. Hustle well!`,"info")),t.loan>0){const r=Math.ceil(t.loan*Ru);t.loan+=r,this.post("@LapoPay",`Daily interest: +${et(r)}. Your LapoPay balance na ${et(t.loan)}. Pay quick-quick before we call your contacts 📞`,"ad")}}newsEvent(){const t=this.s,e=[{w:3,run:()=>{var o,r;const a=as([1.2,1.3,1.5]);t.fuelFactor=Math.min(3,+(t.fuelFactor*a).toFixed(2)),this.post("@GistMeNews",`BREAKING: Petrol price don jump again! ⛽ Danfo fare don rise to ${et(this.danfoFare)}. Gen fuel now ${et(this.fuelPrice)}. Conductors dey shout "No change!" 😩`,"alert"),(r=(o=this.h).toast)==null||r.call(o,`Fuel price hike! Danfo fare now ${et(this.danfoFare)}`,"bad")}},{w:t.fuelFactor>1.1?1.5:0,run:()=>{t.fuelFactor=Math.max(1,+(t.fuelFactor*.85).toFixed(2)),this.post("@GistMeNews",`Petrol price don small drop. Danfo fare now ${et(this.danfoFare)}. We thank God 🙏`,"good")}},{w:2,run:()=>{var a,o;t.marketBonus=1.5,t.marketBonusUntil=t.t+1440,this.post("@Mile12Market","Tomato scarcity for Mile 12! 🍅 Prices up 50% for next 24 hours. Market people, una time don reach!","good"),(o=(a=this.h).toast)==null||o.call(a,"Market prices up 50% today! 🍅","good")}},{w:t.cash>400?1:0,run:()=>{var a,o;t.cash-=200,t.mood=En(t.mood-6),this.post("@You",'Agbero collect ₦200 "owo ile" from me for junction. E pain me but wetin I go do? 😤',"alert"),(o=(a=this.h).toast)==null||o.call(a,"Agbero collect ₦200 from you 😤","bad")}},{w:1,run:()=>{var a,o;t.hunger=En(t.hunger+15),t.mood=En(t.mood+10),this.post("@AdeniranStreet","Owambe for street! 🎉 Dem share small chops and asun — you collect your own. Belle don sweet!","good"),(o=(a=this.h).toast)==null||o.call(a,"Owambe small chops! +Belle +Mood","good")}},{w:1,run:()=>{t.mood=En(t.mood-5),this.post("@LagosWeather","Rain don fall! 🌧️ Gutter don overflow for Ojuelegba. Traffic for Ikorodu Road na 3 hours.","info")}},{w:1,run:()=>{t.mood=En(t.mood+8),this.post("@GistMeTrends",`${t.name} Ankara fit don trend for GistMe! 🔥 312 likes. Odogwu!`,"good")}},{w:1,run:()=>this.post("@MinistryOfPower","Government promise 24 hours light from next week. 💡 Lagos people: 😂😂😂","info")},{w:1,run:()=>this.post("@NairaWatch","Naira don fall again for parallel market 📉. Mama Nkechi don increase bread price by ₦100.","info")},{w:3,run:()=>{const[a,o]=as(Y_);this.post(a,o,"gist")}}],n=e.reduce((a,o)=>a+o.w,0);let s=Math.random()*n;for(const a of e)if(s-=a.w,s<=0){a.run();break}}recoveryStep(){var e,n,s,a;const t=this.s;t.recovery++,t.recovery===1?this.text("LapoPay Recovery",`Dear ${t.name}, your repayment of ${et(t.loan)} don pass due date. Pay now to avoid "further action" 🙂`,"bad"):t.recovery===2?(this.text("LapoPay Recovery","We don call you 3 times. You no pick. We go soon contact your family and friends 📞","bad"),(n=(e=this.h).onRecoveryCall)==null||n.call(e)):t.recovery>=3&&(this.text("LapoPay Recovery","Our field agents dey come meet you NOW. 🕶️","bad"),(a=(s=this.h).onRecoveryVisit)==null||a.call(s))}borrow(t){const e=this.s;return e.loan+t>15e3?!1:((!e.loanDue||e.loan===0)&&(e.loanDue=e.t+3*1440),e.loan+=Math.round(t*1.1),this.earn(t,"LapoPay loan"),this.post("@LapoPay",`Congrats! ${et(t)} don land your wallet. (10% processing fee added — na small thing 😅)`,"ad"),!0)}repay(t){const e=this.s;return t=Math.min(t,e.loan,e.cash),t<=0?0:(e.cash-=t,e.loan-=t,(t>=1e3||e.loan===0)&&(e.loanDue=e.t+3*1440,e.recovery=0),e.loan===0&&(e.loanDue=0,this.addKarma(2)),e.loan===0&&this.post("@LapoPay","Loan cleared! You be correct customer 👏 Come borrow again anytime.","ad"),t)}payRent(t){const e=this.s;return t=Math.min(t,e.rentOwed,e.cash),t<=0?0:(e.cash-=t,e.rentOwed-=t,e.rentOwed===0&&(e.strikes=0,this.post("@Baba_Ade_Landlord","Rent don complete. Correct tenant! 🙏","good")),t)}buyFuel(){return!j_(this.s)||!this.spend(this.fuelPrice)?!1:(this.s.fuel=Math.min(24,this.s.fuel+5),!0)}}const j_=i=>i.hasGen||i.quietGen;class J_{constructor(){this.muted=localStorage.getItem("wahala.muted")==="1",this.radioOn=!1,this.ctx=null,this.loops={}}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.8,this.master.connect(e.destination);const n=e.sampleRate*2,s=e.createBuffer(1,n,e.sampleRate),a=s.getChannelData(0);for(let o=0;o<n;o++)a[o]=Math.random()*2-1;this.noiseBuf=s,this.loops.gen=this.makeLoop(()=>{const o=e.createGain();o.gain.value=0;const r=e.createOscillator();r.type="sawtooth",r.frequency.value=52;const c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=260;const l=e.createOscillator();l.frequency.value=11;const u=e.createGain();u.gain.value=.4;const m=e.createGain();m.gain.value=.6,l.connect(u),u.connect(m.gain),r.connect(c),c.connect(m),m.connect(o),r.start(),l.start();const d=this.noise(),h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=900,h.Q.value=.8;const _=e.createGain();return _.gain.value=.12,d.connect(h),h.connect(_),_.connect(o),o.connect(this.master),o}),this.loops.crowd=this.makeLoop(()=>{const o=e.createGain();o.gain.value=0;const r=this.noise(),c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=700,c.Q.value=.6;const l=e.createOscillator();l.frequency.value=.7;const u=e.createGain();return u.gain.value=300,l.connect(u),u.connect(c.frequency),l.start(),r.connect(c),c.connect(o),o.connect(this.master),o}),this.loops.engine=this.makeLoop(()=>{const o=e.createGain();o.gain.value=0;const r=e.createOscillator();r.type="square",r.frequency.value=38;const c=e.createBiquadFilter();return c.type="lowpass",c.frequency.value=420,r.connect(c),c.connect(o),o.connect(this.master),r.start(),o.osc=r,o}),this.radioGain=e.createGain(),this.radioGain.gain.value=0,this.radioGain.connect(this.master),this.nextBeat=0,this.step=0}makeLoop(t){return t()}noise(){const t=this.ctx.createBufferSource();return t.buffer=this.noiseBuf,t.loop=!0,t.start(),t}setMuted(t){this.muted=t,localStorage.setItem("wahala.muted",t?"1":"0"),this.master&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.05)}level(t,e){const n=this.loops[t];n&&n.gain.setTargetAtTime(Math.max(0,e),this.ctx.currentTime,.15)}engineRate(t){const e=this.loops.engine;e&&e.osc.frequency.setTargetAtTime(34+Math.abs(t)*5,this.ctx.currentTime,.1)}env(t,e,n,s,a){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(s,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+a)}tone(t,e=.15,n="sine",s=.2,a=0,o=0){if(!this.ctx)return;const r=this.ctx,c=r.currentTime+a,l=r.createOscillator(),u=r.createGain();l.type=n,l.frequency.setValueAtTime(t,c),o&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t+o),c+e),this.env(u,c,.01,s,e),l.connect(u),u.connect(this.master),l.start(c),l.stop(c+e+.05)}click(){this.tone(900,.05,"triangle",.08)}cash(){this.tone(1320,.08,"square",.07),this.tone(1760,.18,"square",.07,.07)}ping(){this.tone(880,.1,"sine",.15),this.tone(1175,.16,"sine",.15,.1)}bad(){this.tone(300,.2,"sawtooth",.08,0,-120)}ring(){for(let t=0;t<3;t++)this.tone(740,.12,"square",.06,t*.5),this.tone(988,.12,"square",.06,t*.5+.14)}horn(t=.18){this.tone(415,.45,"square",t*.5),this.tone(523,.45,"square",t*.5),this.tone(415,.25,"square",t*.5,.55),this.tone(523,.25,"square",t*.5,.55)}conductor(t=.25){if(!this.ctx)return;const e=this.ctx,n=[[300,.18],[420,.14],[360,.24]];for(let s=0;s<2;s++)n.forEach(([a,o],r)=>{const c=e.currentTime+s*.75+r*.2,l=e.createOscillator();l.type="sawtooth",l.frequency.setValueAtTime(a,c),l.frequency.linearRampToValueAtTime(a*.92,c+o);const u=e.createBiquadFilter();u.type="bandpass",u.frequency.value=r===1?1800:700,u.Q.value=5;const m=e.createGain();this.env(m,c,.02,t,o),l.connect(u),u.connect(m),m.connect(this.master),l.start(c),l.stop(c+o+.05)})}step_(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuf;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=600;const a=t.createGain();this.env(a,e,.005,.12,.07),n.connect(s),s.connect(a),a.connect(this.master),n.start(e,Math.random()),n.stop(e+.1)}kick(){this.tone(160,.12,"sine",.3,0,-110)}whistle(){this.tone(2200,.25,"sine",.12),this.tone(2400,.35,"sine",.12,.28)}cheer(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuf;const s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=1200;const a=t.createGain();this.env(a,e,.1,.25,1.6),n.connect(s),s.connect(a),a.connect(this.master),n.start(e),n.stop(e+1.8)}setRadio(t){this.radioOn=t,this.radioGain&&this.radioGain.gain.setTargetAtTime(t?.5:0,this.ctx.currentTime,.2),t&&this.ctx&&(this.nextBeat=Math.max(this.nextBeat,this.ctx.currentTime+.05))}schedule(){if(!this.ctx||!this.radioOn)return;const t=this.ctx,e=60/104/4,n=[[220,277,330],[196,247,294],[175,220,262],[196,247,294]],s=[55,49,43.65,49];for(;this.nextBeat<t.currentTime+.2;){const a=this.nextBeat,o=this.step%16,r=Math.floor(this.step/16)%4,c=this.radioGain,l=(m,d,h,_,g=0)=>{const f=t.createOscillator(),p=t.createGain();f.type=h,f.frequency.setValueAtTime(m,a),g&&f.frequency.exponentialRampToValueAtTime(Math.max(20,m+g),a+d),this.env(p,a,.005,_,d),f.connect(p),p.connect(c),f.start(a),f.stop(a+d+.05)},u=(m,d,h)=>{const _=t.createBufferSource();_.buffer=this.noiseBuf;const g=t.createBiquadFilter();g.type="highpass",g.frequency.value=m;const f=t.createGain();this.env(f,a,.002,h,d),_.connect(g),g.connect(f),f.connect(c),_.start(a,Math.random()),_.stop(a+d+.02)};[0,7,10].includes(o)&&l(110,.18,"sine",.5,-70),[4,12].includes(o)&&u(1500,.12,.25),u(7e3,.03,o%2?.05:.09),[3,6,11,14].includes(o)&&l(s[r]*2,.22,"sine",.35,-30),[2,5,9,13].includes(o)&&n[r].forEach(m=>l(m*2,.12,"triangle",.05)),o===0&&r%2===0&&[660,587,494,440].forEach((m,d)=>{const h=d*e*3,_=t.createOscillator(),g=t.createGain();_.type="sine",_.frequency.value=m,g.gain.setValueAtTime(1e-4,a+h),g.gain.exponentialRampToValueAtTime(.06,a+h+.02),g.gain.exponentialRampToValueAtTime(1e-4,a+h+.3),_.connect(g),g.connect(c),_.start(a+h),_.stop(a+h+.35)}),this.nextBeat+=e,this.step++}}}const Gn=i=>Math.max(50,Math.round(i/50)*50),li=i=>i[Math.floor(Math.random()*i.length)],vh=[["Ojuelegba Stop",-58,3.6],["Yaba Market",-24,3.6],["CMS",52,3.6],["Mama Put Buka",18,-3.6],["Face-me-I-face-you",-30,-3.6],["Holy Ghost Fire",13,3.6],["Mega Fuel",64,3.6],["Estate Gate",1.8,-24],["The Set",1.8,22],["Lagoon",-78,-3.6]],Wa=10;function Z_(i){const{world:t}=i,e={G:i},n={mesh:t.playerKeke,pos:t.playerKeke.position,h:Math.PI,speed:0,passenger:null,requests:[],driving:!1};t.playerKeke.rotation.y=n.h;const s={minX:0,maxX:0,minZ:0,maxZ:0};t.colliders.push(s);const a=()=>{const v=n.pos;Object.assign(s,n.driving?{minX:1e4,maxX:1e4,minZ:1e4,maxZ:1e4}:{minX:v.x-.9,maxX:v.x+.9,minZ:v.z-.9,maxZ:v.z+.9})};a();const o=new Ts(1.5,.12,6,28),r=v=>{const y=new Tt(o,Q(v,{emissive:v,unique:!0}));y.rotation.x=Math.PI/2,y.position.y=.15;const L=new Tt(new pn(1.4,1.4,6,20,1,!0),new ws({color:v,transparent:!0,opacity:.18,depthWrite:!1,side:Rn}));return L.rotation.x=-Math.PI/2,L.position.z=-3,y.add(L),t.root.add(y),y},c=new Tt(new ca(.35,.9,8),Q("#ffd23f",{emissive:"#ffb000",unique:!0}));c.visible=!1,t.root.add(c);const l=v=>new A(v[1],0,v[2]);function u(){const v=li(vh.filter(U=>!n.requests.some(k=>k.spot===U))),y=r("#ffd23f");y.position.set(v[1],.15,v[2]);const L=qn({...un(),name:"Passenger"});L.position.set(v[1],0,v[2]+Math.sign(v[2]||1)*2.2),t.root.add(L),n.requests.push({spot:v,ring:y,npc:L,t:0})}function m(){for(const v of n.requests)t.root.remove(v.ring),t.root.remove(v.npc);n.requests=[]}e.enterKeke=()=>{for(n.driving=!0,a(),i.player.position.set(.45,.85,0),i.player.rotation.set(0,Math.PI/2,0),i.player.scale.setScalar(.85),Qs(i.player),n.mesh.add(i.player),i.audio.init(),i.audio.level("engine",.12);n.requests.length<2;)u();i.startActivity(d),i.toast("You don enter your Keke! Find passengers for yellow rings 🛺","good")},e.exitKeke=()=>{if(n.passenger){i.toast("Drop your passenger first o!","bad");return}n.driving=!1,n.speed=0,n.mesh.remove(i.player),i.scene.add(i.player),i.player.scale.setScalar(1),i.player.userData.sitting=!1;const v=new A(-Math.sin(n.h),0,-Math.cos(n.h)).multiplyScalar(1.6);i.pos.copy(n.pos).add(v),i.pos.y=0,a(),i.audio.level("engine",0),m(),c.visible=!1,i.endActivity(),i.save()};const d={name:"keke",camDist:11,camPitch:.5,buttons:()=>[{label:"Comot 🚶",key:"x",onClick:e.exitKeke}],update(v){const y=i.sim.s,L=i.input(),U=y.kekeFuel>0;let k=L.iy;U||(k=Math.min(0,k)),k>0?n.speed+=k*6.5*v:k<0?n.speed+=k*(n.speed>0?12:4)*v:n.speed*=Math.exp(-1.1*v);const G=L.run?12.5:10;n.speed=qe.clamp(n.speed,-3,G),n.h+=-L.ix*1.9*v*qe.clamp(n.speed/4,-1,1);const F=new A(Math.cos(n.h),0,-Math.sin(n.h)),q=n.pos.clone();n.pos.addScaledVector(F,n.speed*v);const W=n.pos.clone();t.resolve(n.pos,1.05),W.distanceTo(n.pos)>.02&&(n.speed*=.6),n.pos.y=Math.abs(Math.sin(i.time*14))*.03*Math.min(1,Math.abs(n.speed)),n.mesh.rotation.y=n.h,y.kekeFuel=Math.max(0,y.kekeFuel-q.distanceTo(n.pos)*.011),!U&&Math.random()<.01&&i.toast("Fuel don finish! Push am go Mega Fuel 😩","bad"),i.pos.copy(n.pos),i.moveAmt=0,i.camYawTo(Math.atan2(-Math.cos(n.h),Math.sin(n.h)),v*2.5),i.audio.engineRate(n.speed),i.audio.level("engine",.06+Math.abs(n.speed)*.012);const st=Math.abs(n.speed)<3.5;let at=null;if(n.passenger){const kt=n.passenger;kt.ring.rotation.z+=v,kt.time+=v,at=l(kt.dest),n.pos.distanceTo(at)<3.4&&st&&_()}else{let kt=1e9;for(const $ of n.requests){$.ring.rotation.z+=v,$.t+=v,$.t>4&&Math.random()<v*.3&&sn($.npc,li(["Keke! Keke!","Wait o!","I dey go somewhere!"]),2);const J=n.pos.distanceTo(l($.spot));if(J<kt&&(kt=J,at=l($.spot)),J<3.2&&st){h($);break}}}if(at){c.visible=!0,c.position.set(n.pos.x,3.2+Math.sin(i.time*4)*.15,n.pos.z);const kt=at.clone().sub(n.pos);kt.y=0,c.rotation.set(0,0,0),c.quaternion.setFromUnitVectors(new A(0,1,0),kt.normalize())}Math.abs(n.pos.x)<6.5&&Math.abs(n.pos.z)<6.5&&y.t>y.tollCD&&!i.isBusy()&&f(!1);const mt=n.pos.distanceTo(t.fuelSpot)<4.5&&st;i.ctxHot(mt?{label:`Buy fuel ⛽ (${et(i.sim.kekeFuelPrice)}/L)`,act:g}:null);const Vt=Math.round(y.kekeFuel/Wa*100);i.actHud(`<b>🛺 Keke</b> • ${Math.round(Math.abs(n.speed)*3.6)} km/h<div class="mini-bar"><i style="width:${Vt}%;background:${Vt>30?"#06d6a0":"#e71d36"}"></i></div><small>Fuel ${y.kekeFuel.toFixed(1)}L / ${Wa}L</small><br>${n.passenger?`👤 Passenger to <b>${n.passenger.dest[0]}</b> • ${et(n.passenger.fare)}`:"🟡 Pick passenger for yellow ring"}`)},onEnd(){i.actHud(""),i.ctxHot(null)}};function h(v){const y=vh.filter(F=>F!==v.spot&&Math.hypot(F[1]-v.spot[1],F[2]-v.spot[2])>25),L=li(y),U=Math.hypot(L[1]-v.spot[1],L[2]-v.spot[2]),k=Gn((150+U*6)*Math.sqrt(i.sim.s.fuelFactor));t.root.remove(v.ring),n.requests=n.requests.filter(F=>F!==v),v.npc.position.set(-.55,.85,0),v.npc.rotation.set(0,Math.PI/2,0),v.npc.scale.setScalar(.8),Qs(v.npc),n.mesh.add(v.npc);const G=r("#06d6a0");G.position.set(L[1],.15,L[2]),n.passenger={npc:v.npc,dest:L,fare:k,ring:G,time:0,limit:U/6+18},sn(v.npc,`Take me go ${L[0]}!`,3),i.audio.ping(),i.toast(`Passenger: "${L[0]}, ${et(k)}. Oya quick!"`,"good")}function _(){const v=n.passenger,y=i.sim.s,L=v.time<v.limit?Gn(v.fare*.2):0;for(i.sim.earn(v.fare+L,"keke"),y.statsV2.trips++,y.kekeTrips++,L&&i.sim.addKarma(1),n.mesh.remove(v.npc),t.root.remove(v.ring),i.audio.cash(),i.toast(`+${et(v.fare)}${L?` +${et(L)} tip (you fast!)`:""} 🛺`,"money"),n.passenger=null,i.sim.advance(15);n.requests.length<2;)u();i.save()}function g(){const v=i.sim.s,y=i.sim.kekeFuelPrice,L=Math.max(0,Wa-v.kekeFuel),U=k=>{k=Math.min(k,L);const G=Gn(k*y);if(!i.sim.spend(G))return i.toast("Money no reach 😩","bad");v.kekeFuel+=k,i.audio.cash(),i.toast(`+${k.toFixed(1)}L fuel ⛽`,"good"),i.save()};i.modal("Mega Fuel ⛽",`Attendant: "How many litres?" • Price ${et(y)}/L • Tank ${v.kekeFuel.toFixed(1)}/${Wa}L`,[{label:"2 litres",price:et(Gn(2*y)),disabled:L<.1||v.cash<Gn(2*y),onClick:()=>U(2)},{label:"5 litres",price:et(Gn(5*y)),disabled:L<.1||v.cash<Gn(Math.min(5,L)*y),onClick:()=>U(5)},{label:"Fill tank",price:et(Gn(L*y)),disabled:L<.1||v.cash<Gn(L*y),onClick:()=>U(L)},{label:"Later",close:!0}])}e.fuelMenu=g;function f(v,y){var G;const L=i.sim.s;L.tollCD=L.t+180,n.speed=0;const U=L.agberoScared>L.t,k=v?500:U?150:300;return(G=t.agberos)==null||G.forEach((F,q)=>setTimeout(()=>sn(F.mesh,li(["Owo union! Bring am!","Driver, you no see us?","Na ₦"+k+" o!"]),2.5),q*400)),i.audio.horn(.1),new Promise(F=>{const q=(st,at)=>{i.toast(st,at),i.save(),F()},W=st=>{if(v)y.v=Math.max(0,y.v-st);else{const at=Math.min(st,L.cash);L.cash-=at}};i.modal("Agbero Union 🧾",`${v?"Danfo":"Keke"} toll! Agbero Sunday: "${U?"Ehen, na you get camera... just ₦"+k+", abeg":"Oya bring owo union ₦"+k+"! No story!"}"`,[{label:`Pay ${et(k)}`,sub:"Peace of mind • -2 Mind",onClick:()=>{W(k),L.mood=Math.max(0,L.mood-2),q("You pay agbero. Lagos tax 🙄","")}},{label:"Zoom comot (evade) 🏃",sub:"Risky: dem fit chase you",onClick:()=>{const st=.5+L.karma/400;Math.random()<st?(L.mood=Math.min(100,L.mood+3),i.sim.addKarma(-1),q("You escape! Agbero dey curse your generation 😂","good")):(W(k*2),L.mood=Math.max(0,L.mood-10),L.energy=Math.max(0,L.energy-5),q(`Dem catch you! Collect ${et(k*2)} and slap your Keke 😭`,"bad"))}},{label:"Argue / fight 👊",sub:"Roll based on your Mind & karma",onClick:()=>{const st=.35+L.mood/400+(L.karma>20?.1:0);Math.random()<st?(L.mood=Math.min(100,L.mood+6),i.sim.addKarma(-2),q("You shout dem down! Dem fear you today 💪","good")):(W(Math.round(k*2.5)),L.energy=Math.max(0,L.energy-15),L.mood=Math.max(0,L.mood-15),i.sim.addKarma(-3),q(`Dem beat you small and collect ${et(k*2.5)} 🤕`,"bad"))}}])})}e.agberoToll=f;const p={active:!1};e.startShift=()=>{const v=i.sim.s,y=i.sim.hour;if(y<6||y>=20)return i.modal("No work now 🌙","Oga Driver don park. Conductor shift na 6am – 8pm.",[{label:"Okay",close:!0}]);if(v.energy<25)return i.modal("Your body don tire 😮‍💨","Conductor work need at least 25% Body.",[{label:"Okay",close:!0}]);i.modal("Oga Driver needs conductor 🚌",'"My conductor no come today. You fit hang for door? You go collect fare, give correct change. I go pay you ₦1,000 + 35% of wetin you collect."',[{label:"Oya, I dey hang! 🙋🏾",onClick:x},{label:"No be today",close:!0}])};function x(){const v=t.vehicles.find(y=>y.type==="danfo");v.conductor=!0,v.turn=null,v.dir=1,v.lastStop=null,v.wait=0,v.speed=0,v.mesh.position.set(-70,0,2.4),v.mesh.rotation.y=0,Object.assign(p,{active:!0,v,purse:{v:0},stops:0,tolled:!1,served:0,wrong:0}),i.player.position.set(.7,.4,1.12),i.player.rotation.set(0,0,0),i.player.scale.setScalar(.9),v.mesh.add(i.player),i.audio.init(),i.audio.conductor(),i.startActivity(M)}t.onConductorStop=(v,y)=>{if(!p.active||v!==p.v)return;v.wait=9999,i.audio.conductor();const L=2+Math.floor(Math.random()*2);P(y,L).then(()=>{p.stops++,i.sim.advance(20,{working:!0}),p.stops>=4?b():v.wait=.6})};const M={name:"conductor",camDist:12,camPitch:.45,buttons:()=>[{label:"End shift 🛑",key:"x",onClick:()=>{i.isBusy()||b()}}],update(v){const y=p.v;i.pos.copy(y.mesh.position),i.moveAmt=0,i.camYawTo(Math.atan2(-Math.cos(y.mesh.rotation.y),Math.sin(y.mesh.rotation.y))+.5,v*2),!p.tolled&&Math.abs(y.mesh.position.x)<4&&!y.turn&&(p.tolled=!0,y.wait=9999,f(!0,p.purse).then(()=>y.wait=.4)),i.actHud(`<b>🚌 Conductor shift</b><br>Stops: ${p.stops}/4 • Purse: <b>${et(p.purse.v)}</b><br><small>Served ${p.served} • Wahala ${p.wrong}</small>`)},onEnd(){i.actHud("")}};function b(){if(!p.active)return;const v=p.v;p.active=!1,v.conductor=!1,v.wait=.5,v.mesh.remove(i.player),i.scene.add(i.player),i.player.scale.setScalar(1);const y=1e3+Math.round(p.purse.v*.35);i.pos.set(v.mesh.position.x,.18,v.dir>0?5.6:-5.6),i.sim.earn(y,"conductor"),i.sim.s.statsV2.shifts++,i.sim.s.energy=Math.max(0,i.sim.s.energy-15),i.endActivity(),i.audio.cash(),i.modal("Shift don end 🚌",`You serve <b>${p.served}</b> passengers (${p.wrong} wahala). Purse: ${et(p.purse.v)}. Oga Driver pay you <b>${et(y)}</b>.`,[{label:"Collect ➜",close:!0}]),i.save()}function P(v,y){return new Promise(L=>{i.setBusy(!0);const U=document.getElementById("market");U.classList.remove("hidden");let k=0,G=null;const F=()=>{if(k>=y){clearInterval(G),U.classList.add("hidden"),U.innerHTML="",i.setBusy(!1),L();return}k++;const q=i.sim.danfoFare*(1+Math.floor(Math.random()*2)),W=li([500,1e3].filter(J=>J>q).concat(q<200?[200]:[])),st=W-q;let at=0,mt=10;const Vt=li(["👩🏾","👨🏿","👵🏾","👴🏿","🧕🏾","🧔🏾"]);U.innerHTML=`<div class="mk"><div class="mk-top"><span>🚌 ${v.name} stop • Passenger ${k}/${y}</span><span class="timer" id="cgT">10s</span></div>
          <div class="cust"><div class="face">${Vt}</div><div><div class="say">"Fare na ${et(q)}. Take ${et(W)}, give me my change!"</div><div class="who">Change wey you owe: ? 🤔</div></div></div>
          <div class="items" style="grid-template-columns:repeat(4,1fr)">${[50,100,200,500].map(J=>`<button class="item" data-c="${J}"><span class="ic" style="background:#9be7a4">₦</span>${et(J)}</button>`).join("")}</div>
          <div class="basket" id="cgB">Change: ₦0</div>
          <div class="btn-row"><button class="btn" id="cgC">↺ Clear</button><button class="btn green" id="cgG">✔ Give change</button></div></div>`;const kt=U.querySelector("#cgB");U.querySelectorAll("[data-c]").forEach(J=>J.addEventListener("pointerdown",yt=>{yt.preventDefault(),at+=+J.dataset.c,kt.textContent="Change: "+et(at),i.audio.click()})),U.querySelector("#cgC").onclick=()=>{at=0,kt.textContent="Change: ₦0"};const $=J=>{clearInterval(G),p.served++,i.toast(J[0],J[1]),setTimeout(F,250)};U.querySelector("#cgG").onclick=()=>{at===st?(p.purse.v+=q,$([`Correct change! +${et(q)} for purse`,"good"])):at<st?(p.purse.v+=q,p.wrong++,i.sim.addKarma(-1),i.sim.s.mood=Math.max(0,i.sim.s.mood-2),$(['Passenger: "My change no complete o! Thief!" 😤 (-karma)',"bad"])):(p.purse.v+=Math.max(0,q-(at-st)),p.wrong++,$([`You give extra ${et(at-st)}! Passenger don waka 😅`,"warn"]))},clearInterval(G),G=setInterval(()=>{mt--;const J=U.querySelector("#cgT");J&&(J.textContent=mt+"s"),mt<=0&&(p.wrong++,$(['Passenger vex: "You too slow!" no pay 😒',"bad"]))},1e3)};F()})}const T=new pe,E=new Tt(new pn(.32,.28,.06,16),Q("#c0c4cc"));T.add(E);for(let v=0;v<6;v++){const y=new Tt(new an(.1,.06,.14),Q(v%2?"#bde0fe":"#ffd23f"));y.position.set(Math.cos(v)*.16,.06,Math.sin(v)*.16),T.add(y)}T.position.y=.52,i.player.userData.head.add(T),e.attachTray=v=>{v.userData.head.add(T)},e.stockMenu=()=>{const v=i.sim.s;i.modal("Mama Nkechi Provisions 🛍️",`Buy stock to hawk. You get: 💧 ${v.stock.water} pure water • 🍪 ${v.stock.gala} gala`,[{label:"Bag of pure water (20 sachets)",sub:"Sell ₦50 each",price:et(400),disabled:v.cash<400,onClick:()=>{i.sim.spend(400),v.stock.water+=20,i.toast("Pure water don land your tray 💧","good")}},{label:"Pack of gala (10)",sub:"Sell ₦150 each",price:et(700),disabled:v.cash<700,onClick:()=>{i.sim.spend(700),v.stock.gala+=10,i.toast("Gala don land your tray 🍪","good")}},{label:"Comot",close:!0}])};const R=new WeakMap;e.hawkHot=()=>{const v=i.sim.s;if(v.stock.water+v.stock.gala<=0)return null;const y=i.pos;let L=null,U=1e9;for(const G of t.walkers){if(G.conv)continue;const F=Math.hypot(G.mesh.position.x-y.x,G.mesh.position.z-y.z);F<1.9&&F<U&&(R.get(G)||0)<i.time&&(U=F,L={kind:"walker",w:G})}for(const G of t.vehicles){if(G.speed>.6||G.mesh.userData.isPlayer)continue;const F=Math.hypot(G.mesh.position.x-y.x,G.mesh.position.z-y.z);F<3.6&&F<U&&(R.get(G)||0)<i.time&&(U=F,L={kind:"vehicle",v:G})}if(!L)return null;const k=v.stock.water?"💧 Pure water":"🍪 Gala";return{label:L.kind==="walker"?`Hawk ${k} to ${L.w.name}`:`Hawk ${k} for traffic 🚦`,act:()=>B(L)}};function B(v){const y=i.sim.s,L=v.w||v.v;R.set(L,i.time+40);const U=.55+y.karma/300,k=v.kind==="vehicle"?1+Math.floor(Math.random()*4):1+Math.floor(Math.random()*2);if(Math.random()>U){v.w&&sn(v.w.mesh,li(["I no need am","Abeg comot","Next time"]),2),i.toast("Dem no buy 🙅🏾");return}let G=0,F=0;for(let q=0;q<k;q++)y.stock.water>0&&(Math.random()<.6||!y.stock.gala)?(y.stock.water--,G+=50,F++):y.stock.gala>0&&(y.stock.gala--,G+=150,F++);F&&(i.sim.earn(G,"hawk"),y.statsV2.hawked+=F,i.sim.advance(3),y.energy=Math.max(0,y.energy-.5),v.w&&sn(v.w.mesh,li(["Give me one!","Is it cold?","Correct!"]),2),i.audio.cash(),i.toast(`Sold ${F} → +${et(G)} 💧`,"money"))}return e.update=()=>{T.visible=i.sim.s.stock.water+i.sim.s.stock.gala>0&&!n.driving&&!p.active},e.keke=n,e.kekeHot=()=>!n.driving&&i.pos.distanceTo(n.pos)<2.6?{label:"Enter your Keke 🛺",act:e.enterKeke}:null,e}const Ti=i=>i[Math.floor(Math.random()*i.length)],xh=[["Yaba Market",-24,9.5],["Ojuelegba Stop",-58,6.6],["Mama Put Buka",18,-12.5],["CMS Stop",52,6.6],["Holy Ghost Fire",13,12.5]];function Q_(i){const{world:t}=i,e={deed:null,chakam:null,agents:null},n=t.root,s=(h,_,g,f=0)=>{const p=qn({...un(),...h});return p.position.set(_,t.groundHeight(_,g),g),p.rotation.y=f,n.add(p),p},a=h=>h.forEach(_=>n.remove(_));function o(h){const _=new pe,g=pt(new an(3.4,.8,1.6),Q(h),{t:.05});g.position.y=.7,_.add(g);const f=pt(new an(1.8,.7,1.4),Q("#3d5a80"),{t:.04});f.position.set(-.2,1.4,0),_.add(f);for(const[p,x]of[[1.1,.8],[1.1,-.8],[-1.1,.8],[-1.1,-.8]]){const M=pt(new pn(.32,.32,.25,12),Q("#1a1423"),{t:.02});M.rotation.x=Math.PI/2,M.position.set(p,.32,x),_.add(M)}_.smoke=[];for(let p=0;p<3;p++){const x=new Tt(new Dn(.2,8,6),Q("#cfcfd6",{opacity:.8}));x.position.set(1.7,1,0),_.add(x),_.smoke.push(x)}return _}function r(){const h=i.sim.s,_=Ti(["car","change","load"]),g=[];for(let P=-70;P<=70;P+=10)for(const T of[-9.4,9.4])Math.abs(P)>8&&g.push([P,T]);const f=g.filter(([P,T])=>{const E=Math.hypot(P-i.pos.x,T-i.pos.z);return E>8&&E<35}),[p,x]=Ti(f.length?f:g),M=[],b={type:_,x:p,z:x,objs:M,expires:h.t+240,pos:new A(p,0,x)};if(_==="car"){const P=o(Ti(["#ff8fab","#bde0fe","#caffbf","#ffd6a5"]));P.position.set(p,0,x+Math.sign(x)*.6),P.rotation.z=Math.sign(x)*.06,n.add(P),M.push(P),b.car=P;const T=s({name:"Oga Car"},p-2.4,x,Math.PI/2);M.push(T),b.npc=T,b.lines=["My motor don jam! Abeg help me push!","Who fit help me push?"],t.colliders.push(b.col={minX:p-1.8,maxX:p+1.8,minZ:P.position.z-.9,maxZ:P.position.z+.9})}else if(_==="change"){const P=s({name:"Aunty"},p,x,x>0?Math.PI:0);M.push(P),b.npc=P,b.lines=["Who get change for ₦1,000?","Abeg change, I wan enter Danfo!"]}else{const P=s({name:"Mama Iyabo",hair:"gele",outfit:"ankaraDress"},p,x,x>0?Math.PI:0);M.push(P),b.npc=P;const T=pt(new an(.7,.45,.6),Q("#c68642"),{t:.03});T.position.y=.6,P.userData.head.add(T),b.load=T,b.dest=Ti(xh.filter(E=>Math.hypot(E[1]-p,E[2]-x)>15&&Math.hypot(E[1]-p,E[2]-x)<60))||xh[0],b.lines=[`My pikin, help me carry this load go ${b.dest[0]}!`,"This load heavy o!"]}b.talkT=1,e.deed=b}function c(){const h=e.deed;h&&(a(h.objs),h.col&&t.colliders.splice(t.colliders.indexOf(h.col),1),h.ring&&n.remove(h.ring),h.carrying&&i.player.userData.head.remove(h.load),e.deed=null,i.sim.s.nextDeed=i.sim.s.t+120+Math.floor(Math.random()*150))}function l(h,_,g){const f=i.sim.s;i.sim.addKarma(h),f.mood=Math.min(100,f.mood+4),f.statsV2.deeds++,_&&i.sim.earn(_,"tip"),i.audio.ping(),i.toast(`${g} +${h} karma${_?` • tip ${et(_)}`:""} 🙏`,"good")}e.deedHot=()=>{const h=e.deed;if(!h)return null;const _=i.pos.distanceTo(h.pos);if(h.type==="load"&&h.carrying){const g=new A(h.dest[1],0,h.dest[2]);return i.pos.distanceTo(g)<3?{label:`Drop load for ${h.dest[0]} 📦`,act:()=>{l(6,200,'Mama Iyabo: "God go bless you!"'),c()}}:null}return _>2.8?null:h.type==="car"?{label:"Help push car 🚗",act:()=>i.mash({label:"PUSH! Tap fast fast!",taps:14,secs:6}).then(g=>{g?(i.audio.tone(90,.8,"sawtooth",.15),l(5,Math.random()<.5?300:0,'Engine start! Oga Car: "Thank you!"'),c()):(i.sim.s.mood=Math.max(0,i.sim.s.mood-2),i.toast("Una no strong reach. Try again! 💪"))})}:h.type==="change"?{label:"Give change for ₦1,000 💵",act:()=>{if(i.sim.s.cash<1e3)return i.toast("You no get ₦1,000 change 😅","bad");l(3,Math.random()<.3?50:0,'Aunty: "You save my life!"'),c()}}:{label:"Help Mama carry load 📦",act:()=>{h.carrying=!0,h.npc.userData.head.remove(h.load),i.player.userData.head.add(h.load),h.load.position.y=.62;const g=new Tt(new Ts(1.5,.12,6,28),Q("#06d6a0",{emissive:"#06d6a0",unique:!0}));g.rotation.x=Math.PI/2,g.position.set(h.dest[1],.2,h.dest[2]),n.add(g),h.ring=g,i.toast(`Carry am go ${h.dest[0]} (green ring) 📦`,"good")}}};const u={agbero:{name:"Agbero extortion",at:[9.5,9.6],spot:"junction (south-east corner)",a:{name:"Agbero Lucky",hair:"lowcut",outfit:"street",clothColor:"#1d3557"},b:{name:"Keke Driver",hair:"cap",outfit:"street"},lines:[["a","Oya bring ₦1,000 now now!"],["b","Abeg, I never make sales today!"],["a","You wan make we scatter your Keke?"],["b","Haba! Take ₦500 abeg..."]]},scammer:{name:"Yahoo scammer",at:[55.5,10.2],spot:"CMS bus stop",a:{name:"Scammer",hair:"afro",outfit:"street",clothColor:"#1a1423"},b:{name:"Old Man",hair:"bald",outfit:"kaftan"},lines:[["a","Baba, send me your BVN and OTP"],["b","Why you need am?"],["a","Make I upgrade your bank account"],["b","Okay o, make I check my phone..."]]},bribe:{name:"Checkpoint bribe",at:[30,-9.4],spot:"police checkpoint near Pharmacy",a:{name:"Officer",hair:"cap",outfit:"street",clothColor:"#1d2240",accentColor:"#1a1423",pantsColor:"#1a1423"},b:{name:"Danfo Driver",hair:"lowcut",outfit:"ankaraShirt"},lines:[["a","Driver, roger me!"],["b","Oga, take ₦200 abeg"],["a","₦200? You dey whine me? ₦1,000!"],["b","Na God go judge una..."]]}};function m(){const h=i.sim.s,_=Ti(Object.keys(u)),g=u[_],[f,p]=g.at,x=[],M=s(g.a,f,p,Math.PI/2),b=s(g.b,f+1.2,p,-Math.PI/2);if(x.push(M,b),_==="bribe"){const P=pt(new ca(.3,.75,8),Q("#ff7b29"),{t:.025});P.position.set(f-1.2,.38,p+.6),n.add(P),x.push(P);const T=t.signMesh("POLICE CHECKPOINT",1.8,.4,"#1d2240");T.position.set(f-1.4,1.4,p+.62),n.add(T),x.push(T)}e.chakam={key:_,e:g,objs:x,a:M,b,i:0,t:1,expires:h.t+120,pos:new A(f+.6,1.1,p)},i.sim.text(Ti(["Bisi (Friend)","Emeka (Friend)","Tayo (Neighbour)"]),`Chakam alert 👀: ${g.name} dey happen now for ${g.spot}. Carry your phone go snap am!`,"tip")}e.chakamCheck=h=>{const _=e.chakam;if(!_)return null;const g=_.pos.clone(),f=h.position.distanceTo(g);return g.project(h),Math.abs(g.x)<.9&&Math.abs(g.y)<.9&&g.z<1&&f<30?_:null},e.resolveChakam=h=>{const _=e.chakam,g=i.sim.s;if(_){if(h){const f=40+Math.floor(Math.random()*50);i.sim.addKarma(8),i.sim.addFollowers(f),g.statsV2.chakam++,g.npcRep[_.key]=(g.npcRep[_.key]||0)-1,_.key==="agbero"&&(g.agberoScared=g.t+2*1440),i.sim.post("@ChakamNG",`🎥 VIRAL: ${_.e.name} caught on camera by @${g.name}! Lagos people dey vex. ${_.key==="agbero"?"Agbero union toll don reduce 😂":_.key==="bribe"?"Checkpoint don disappear sharp sharp 🏃":"Scammer don run comot 🏃"}`,"good"),i.toast(`Uploaded to Chakam! +8 karma, +${f} followers 📈`,"good")}else{const f=1500+Math.floor(Math.random()*3)*500;i.sim.earn(f,"settle"),i.sim.addKarma(-10),i.toast(`"Abeg delete am" — dem settle you ${et(f)}. -10 karma 🤐`,"warn")}a(_.objs),e.chakam=null,g.nextChakam=g.t+180+Math.floor(Math.random()*180)}},e.spawnAgents=()=>{if(e.agents)return;const h=Math.random()*Math.PI*2,_=[],g={hair:"lowcut",outfit:"street",clothColor:"#14101c",pantsColor:"#14101c",accentColor:"#8338ec"};for(let f=0;f<2;f++){const p=qe.clamp(i.pos.x+Math.cos(h)*14+f,-85,85),x=qe.clamp(i.pos.z+Math.sin(h)*14,-30,30);_.push(s({...g,name:"LapoPay Agent"},p,x))}e.agents={objs:_,t:0,leaving:0},i.toast("🕶️ LapoPay recovery agents dey come for you!","bad"),i.audio.bad()};function d(){const h=i.sim.s,_=h.loan;i.audio.bad();const g=()=>{h.hasGen?(h.hasGen=!1,h.fuel=0,h.loan=Math.max(0,h.loan-6e3),i.toast('Dem seize your "I-pass-my-neighbour" generator! 😭 (-₦6,000 from loan)',"bad"),i.sim.text("LapoPay Recovery","We don carry your generator as part payment. Balance remain "+et(h.loan),"bad")):h.items.radio?(h.items.radio=!1,i.audio.setRadio(!1),h.loan=Math.max(0,h.loan-2e3),i.toast("Dem seize your radio! 📻 (-₦2,000 from loan)","bad")):(i.sim.addKarma(-10),h.mood=Math.max(0,h.mood-15),h.followers=Math.floor(h.followers*.8),i.sim.post("@LapoPay_Recovery",`🚨 DEBTOR ALERT: ${h.name} dey owe ${et(h.loan)}. If you see am, tell am make e pay! 📢`,"alert"),i.toast("Dem shame you for GistMe! -10 karma, followers drop 😩","bad")),h.loanDue=h.t+2*1440,h.recovery=0},f=()=>{e.agents.leaving=1,i.save()};i.modal("🕶️ LapoPay Recovery Agents",`"Good day ${h.name}. You owe <b>${et(_)}</b>. We no come play. Pay now or we go take something."`,[{label:"Pay everything",price:et(_),disabled:h.cash<_,onClick:()=>{i.sim.repay(_),i.toast("Loan cleared! Agents don go 😮‍💨","good"),f()}},{label:"Pay wetin I get",sub:"If e reach half, dem go give you 2 more days",price:et(Math.min(h.cash,_)),disabled:h.cash<100,onClick:()=>{i.sim.repay(Math.min(h.cash,_))>=_/2?(h.loanDue=h.t+2*1440,h.recovery=0,i.toast("Dem collect am, give you 2 days 🙏","warn")):g(),f()}},{label:"Beg for more time 🙏",sub:h.karma>=15?"Your good name fit save you":"Dem no too dey hear word",onClick:()=>{h.karma>=15&&Math.random()<.8?(h.loanDue=h.t+2*1440,h.recovery=1,i.toast('Agent: "Because you get good name... 2 days."',"good")):g(),f()}}],"warn")}return e.update=h=>{const _=i.sim.s;if(!e.deed&&_.t>=_.nextDeed&&!i.activityName()&&r(),e.deed){const g=e.deed;g.talkT-=h,g.talkT<0&&(g.talkT=6,g.carrying||sn(g.npc,Ti(g.lines),3)),g.car&&g.car.smoke.forEach((f,p)=>{const x=(i.time*.7+p/3)%1;f.position.set(1.7+x*.3,.9+x*1.3,0),f.scale.setScalar(.6+x*1.5)}),g.npc&&Ln(g.npc,h,0,i.time),g.ring&&(g.ring.rotation.z+=h),_.t>g.expires&&!g.carrying&&c()}if(!e.chakam&&_.t>=_.nextChakam&&_.t>8*60&&i.sim.hour>7&&i.sim.hour<21&&m(),e.chakam){const g=e.chakam;if(g.t-=h,g.t<=0){const[f,p]=g.e.lines[g.i%g.e.lines.length],x=f==="a"?g.a:g.b;sn(x,p,3),x.userData.talk=2.6,(f==="a"?g.b:g.a).userData.listen=!0,g.i++,g.t=3.2}Ln(g.a,h,0,i.time),Ln(g.b,h,0,i.time),_.t>g.expires&&(a(g.objs),e.chakam=null,_.nextChakam=_.t+200)}if(e.agents){const g=e.agents;g.objs.forEach((f,p)=>{const x=g.leaving?new A(f.position.x+(p?30:-30),0,f.position.z):i.pos,M=x.x-f.position.x,b=x.z-f.position.z,P=Math.hypot(M,b);P>1.3&&(f.position.x+=M/P*2.6*h,f.position.z+=b/P*2.6*h,f.rotation.y=Math.atan2(M,b)),Ln(f,h,P>1.3?1:0,i.time)}),g.t+=h,g.leaving?(g.leaving+=h,g.leaving>8&&(a(g.objs),e.agents=null)):!g.arrived&&!i.isBusy()&&(g.t>60||g.objs.some(f=>Math.hypot(f.position.x-i.pos.x,f.position.z-i.pos.z)<1.6))?(g.arrived=!0,d()):g.arrived&&!i.isBusy()&&(g.leaving=1)}},e}const yh=i=>i[Math.floor(Math.random()*i.length)];function tv(i){const{world:t}=i,e=t.pitch,n=t.ball,s={};let a=null;s.hot=()=>i.activityName()?null:Math.hypot(i.pos.x-50.2,i.pos.z-27.2)<2.6?{label:"Play ball for the Set ⚽",act:s.offer}:null,s.offer=()=>{const f=i.sim.hour;if(f<7||f>=19)return i.modal("Junior don carry ball go house 🌙","Set dey play 7am – 7pm.",[{label:"Okay",close:!0}]);if(i.sim.s.energy<20)return i.modal("Your body no fit run 😮‍💨","You need 20% Body to play.",[{label:"Okay",close:!0}]);i.modal("The Set ⚽ 3-a-side",'Junior: "Na my ball o! If you vex me, I go carry am go house." First to win after 90 seconds. Pass & shoot, no be Messi you be.',[{label:"Oya, make we play! ⚽",onClick:r},{label:"Later",close:!0}])};function o(f,p,x,M){const b=qn(f);return b.position.set(x,0,M),t.root.add(b),{mesh:b,team:p,home:new A(x,0,M),kickCD:0,name:f.name}}function r(){t.junior.visible=!1;const f=[o({...un(),name:"Tobi",outfit:"street",clothColor:"#ffd23f"},0,36,26),o({...un(),name:"Uche",outfit:"street",clothColor:"#ffd23f"},0,36,30)],p=[o({...un(),name:"Junior",hair:"lowcut",outfit:"street",clothColor:"#06d6a0",pantsColor:"#f4f1de"},1,44,28),o({...un(),name:"Sege",outfit:"street",clothColor:"#06d6a0"},1,45,25.5),o({...un(),name:"Bayo",outfit:"street",clothColor:"#06d6a0"},1,45,30.5)];a={mine:f,them:p,all:[...f,...p],score:[0,0],time:90,vel:new A,upset:0,outs:0,over:!1,kickCD:0},i.pos.set(37,0,28),c(1),i.audio.init(),i.audio.whistle(),i.startActivity(d)}function c(f){n.position.set(e.cx,.18,e.cz),a.vel.set(0,0,0),a.all.forEach(p=>p.mesh.position.copy(p.home)),i.pos.set(37,0,28),f===0&&i.pos.set(39.2,0,28)}const l=f=>f===0?e.maxX:e.minX;function u(f,p,x){const M=p.clone().sub(n.position);M.y=0,M.normalize(),a.vel.copy(M.multiplyScalar(x)),i.audio.kick()}const m=f=>{if(!(Math.hypot(i.pos.x-n.position.x,i.pos.z-n.position.z)>1.1)){if(f==="shoot")u(i.pos,new A(e.maxX+1,0,e.cz+(Math.random()-.5)*2.6),14);else{const p=a.mine.reduce((x,M)=>M.mesh.position.x>x.mesh.position.x?M:x);u(i.pos,p.mesh.position.clone().add(new A(1.2,0,0)),9)}a.lastTouch="me"}},d={name:"football",camDist:13,camPitch:.75,buttons:()=>[{label:"Pass ➡️",key:"j",onClick:()=>m("pass")},{label:"Shoot ⚽",key:"k",onClick:()=>m("shoot")},{label:"Quit",key:"x",onClick:()=>g("quit")}],update(f){if(a.over)return;a.time-=f;const p=i.input(),x=new A(p.ix,0,-p.iy),M=Math.min(1,x.length());M>.08&&(x.normalize(),i.pos.addScaledVector(x,5.2*M*f),i.setRot(Math.atan2(x.x,x.z))),i.pos.x=qe.clamp(i.pos.x,e.minX+.3,e.maxX-.3),i.pos.z=qe.clamp(i.pos.z,e.minZ+.3,e.maxZ-.3),i.pos.y=0,i.moveAmt=M>.08?1:0,i.camYawTo(0,f*3);const b=n.position;M>.08&&Math.hypot(i.pos.x-b.x,i.pos.z-b.z)<.6&&a.vel.length()<6&&(a.vel.copy(x).multiplyScalar(6),a.lastTouch="me");for(const P of a.all){const T=P.team,E=T===0?[...a.mine]:a.them,R=E.reduce((k,G)=>k.mesh.position.distanceTo(b)<G.mesh.position.distanceTo(b)?k:G),B=T===0?Math.min(R.mesh.position.distanceTo(b),Math.hypot(i.pos.x-b.x,i.pos.z-b.z)):0;let v;P===R&&(T===1||R.mesh.position.distanceTo(b)<=B+.01)?v=b.clone():v=new A(qe.clamp(b.x+(T===0?3:-3),e.minX+1,e.maxX-1),0,P.home.z);const y=v.clone().sub(P.mesh.position);y.y=0;const L=y.length(),U=T===1?3.9:4.1;if(L>.3&&(y.normalize(),P.mesh.position.addScaledVector(y,Math.min(L,U*f)),P.mesh.rotation.y=Math.atan2(y.x,y.z)),Ln(P.mesh,f,L>.3?1.2:0,i.time),P.kickCD-=f,P.kickCD<=0&&P.mesh.position.distanceTo(new A(b.x,0,b.z))<.55){P.kickCD=.5,a.lastTouch=P.team===0?"mate":"them";const k=l(T);if(Math.abs(k-b.x)<6)u(P.mesh.position,new A(k+Math.sign(k-40),0,e.cz+(Math.random()-.5)*2.4),10+Math.random()*3);else if(Math.random()<.3){const G=E.find(F=>F!==P)||P;u(P.mesh.position,T===0&&Math.random()<.5?i.pos.clone():G.mesh.position.clone(),8)}else u(P.mesh.position,new A(k,0,e.cz+(Math.random()-.5)*5),6);P.name==="Junior"&&Math.random()<.15&&sn(P.mesh,yh(["Na my ball o!","Give me am!","Oya defend!"]),2)}}b.addScaledVector(a.vel,f),a.vel.multiplyScalar(Math.exp(-1.3*f)),n.rotation.x+=a.vel.z*f*3,n.rotation.z-=a.vel.x*f*3,b.x<e.minX||b.x>e.maxX?b.z>e.goalMin&&b.z<e.goalMax?h(b.x>e.maxX?0:1):_():(b.z<e.minZ||b.z>e.maxZ)&&_(),i.actHud(`<b>⚽ The Set</b> • ⏱ ${Math.max(0,Math.ceil(a.time))}s<div class="score"><span style="color:#b8860b">Your team ${a.score[0]}</span> – <span style="color:#0a9b74">${a.score[1]} Junior FC</span></div><small>Junior vex meter: ${"😠".repeat(a.upset)}${"·".repeat(3-a.upset)}</small>`),a.time<=0&&g("time")},onEnd(){i.actHud("")}};function h(f){a.score[f]++,i.audio.cheer(),i.audio.whistle(),i.toast(f===0?"GOOOAL!! ⚽🔥":"Junior FC score! 😩",f===0?"good":"bad");const p=a.them[0];if(f===0&&a.score[0]-a.score[1]>=2&&(a.upset++,sn(p.mesh,yh(["Una dey cheat!","That one na offside!","I go soon carry my ball o!"]),3)),a.upset>=3)return g("junior");c(f===0?1:0)}function _(){if(a.lastTouch==="me"&&(a.outs++,a.upset=Math.min(3,a.upset+(a.outs%2===0?1:0)),sn(a.them[0].mesh,"If you kick my ball comot again ehn!",3)),a.upset>=3)return g("junior");n.position.set(e.cx,.18,e.cz),a.vel.set(0,0,0)}function g(f){if(!a||a.over)return;a.over=!0;const p=i.sim.s,[x,M]=a.score;a.all.forEach(T=>t.root.remove(T.mesh)),t.junior.visible=!0,n.position.set(e.cx,.18,e.cz),i.endActivity(),i.pos.set(50.2-1.6,0,27.2),p.energy=Math.max(0,p.energy-15),p.statsV2.matches++,i.sim.advance(60,{working:!0});let b,P;f==="junior"?(p.mood=Math.max(0,p.mood-5),b="Junior carry him ball go house! 😤",P=`"I no dey play again!" Match end ${x}–${M}. Next time no vex the ball owner.`):f==="quit"?(b="You comot from match",P=`Score ${x}–${M}.`):x>M?(p.mood=Math.min(100,p.mood+20),p.statsV2.wins++,i.sim.addFollowers(5),b="You WIN! 🏆",P=`${x}–${M}! The Set dey hail you. +20 Mind`,i.audio.cheer()):x===M?(p.mood=Math.min(100,p.mood+8),b="Draw 🤝",P=`${x}–${M}. Ball sweet sha. +8 Mind`):(p.mood=Math.min(100,p.mood+3),b="You lose 😅",P=`${x}–${M}. At least you sweat small. +3 Mind`),i.modal(b,P,[{label:"Okay ➜",close:!0}]),a=null,i.save()}return s.active=()=>!!a,s}function ev(i){const t={},e=new A,n=(o,r=32)=>{const c=i.camera.position.distanceTo(o);return e.copy(o).project(i.camera),Math.abs(e.x)<.95&&Math.abs(e.y)<.95&&e.z<1&&c<r};function s(){const o=i.world,r=[];let c=0,l=0;for(const p of[...o.walkers.map(x=>x.mesh),...o.npcs.map(x=>x.mesh)])p.visible&&n(p.position.clone().setY(1),25)&&l++;l&&(c+=Math.min(8,l)*3,r.push(`${l} people`));let u=0;for(const p of o.vehicles)n(p.mesh.position.clone().setY(1.2),30)&&(c+=p.type==="danfo"?6:4,u++);u&&r.push(`${u} Danfo/Keke`);const m=[["market umbrellas",new A(-21,2.5,15),5],["Lagos lagoon",new A(-96,0,0),8],["construction crane",new A(100,20,-10),4],["The Set",new A(40,.5,28),4],["Mama Put",new A(18,2,-16),4],["Mega Fuel",new A(64,3,15),3]];for(const[p,x,M]of m)n(x,45)&&(c+=M,r.push(p));const d=i.sim.isNight,h=i.sim.s.power,_=i.sim.hour;d&&h&&o.neons.some((p,x)=>n(new A(...[[-11,4.2,-13.8],[50,4.3,-13.8],[29,4.2,14.4],[21.8,2.8,-14],[64,5.6,12.1]][x]),40))&&(c+=6,r.push("neon signs")),n(i.pos.clone().setY(1.1),15)&&(c+=6,r.push("selfie"));let g=1,f="midday";return _>=17&&_<19.5?(g=1.6,f="golden hour ✨"):_>=6&&_<8?(g=1.2,f="morning glow"):d&&h?(g=1.2,f="city lights"):d&&(g=.6,f="too dark (NEPA)"),{pts:Math.round(c*g),hits:r,light:f}}function a(){i.renderNow();const o=i.renderer.domElement,r=document.createElement("canvas");r.width=192,r.height=120;const c=r.getContext("2d");o.width/o.height;const l=o.height*(192/120);return c.drawImage(o,(o.width-Math.min(o.width,l))/2,0,Math.min(o.width,l),o.height,0,0,192,120),r.toDataURL("image/jpeg",.6)}return t.start=o=>{i.closePhone(),document.body.classList.add("photo-mode");const r=document.getElementById("flash"),c={name:"photo",camDist:6.5,camPitch:.22,allowWalk:!0,buttons:()=>[{label:o==="chakam"?"🎥 Snap evidence":"📸 Snap",key:" ",onClick:u},{label:"➕",key:"=",onClick:()=>i.zoom(-1.5)},{label:"➖",key:"-",onClick:()=>i.zoom(1.5)},{label:"✕ Cancel",key:"x",onClick:l}],update(){i.actHud(o==="chakam"?"<b>🎥 Chakam</b><br><small>Point camera at the wahala (drag to turn), then snap</small>":"<b>📸 Clout camera</b><br><small>Drag to frame • walk to move • golden hour = more clout</small>")},onEnd(){document.body.classList.remove("photo-mode"),i.actHud("")}};function l(){i.endActivity()}function u(){if(i.isBusy())return;r.classList.remove("on"),r.offsetWidth,r.classList.add("on"),i.audio.tone(1800,.05,"square",.08);const m=a(),d=i.sim.s;if(o==="chakam"){const g=i.events.chakamCheck(i.camera);if(!g)return i.modal("No evidence 🤷🏾","Nothing chakam-worthy for this frame. Check Messages for tips about wahala wey dey happen.",[{label:"Try again",close:!0}]);i.modal(`🎥 You chakam: ${g.e.name}!`,`<img class="snap" src="${m}"><br>Upload go expose dem (karma + clout), or "settle" privately for cash (karma loss).`,[{label:"Upload to Chakam 📤",sub:"Needs 30MB data • +8 karma",disabled:d.dataMB<30,onClick:()=>{i.sim.useData(30),i.events.resolveChakam(!0),l()}},{label:"Settle privately 🤫",sub:"Dem go beg you with money • -10 karma",onClick:()=>{i.events.resolveChakam(!1),l()}},{label:"Keep am for now",close:!0}]);return}const h=s(),_=Math.max(1,Math.round(h.pts*(.7+Math.random()*.6)*(1+d.followers/800)));i.modal("📸 Post to Clout?",`<img class="snap" src="${m}"><br>In frame: <b>${h.hits.join(", ")||"nothing special"}</b> • Light: <b>${h.light}</b><br>Clout score: <b>${h.pts}</b>`,[{label:"Post am! 🚀",sub:"Uses 25MB data",disabled:d.dataMB<25,onClick:()=>{i.sim.useData(25),d.posts.unshift({t:d.t,img:m,gain:_,likes:_*3+Math.floor(Math.random()*20),hits:h.hits.slice(0,3)}),d.posts.length>6&&(d.posts.length=6),i.sim.addFollowers(_),d.mood=Math.min(100,d.mood+3),i.audio.ping(),i.toast(`Posted! +${_} followers (${d.followers} total) 📈`,"good"),i.save()}},{label:"Discard",close:!0}])}i.startActivity(c)},t}const nv=[["wallet","💰","Wallet"],["msgs","💬","Messages"],["feed","📰","Gist"],["clout","📸","Clout"],["chakam","🎥","Chakam"],["lapo","🏦","LapoPay"],["data","📶","Data"]],Xa={feed:2,clout:3,chakam:3,lapo:1};function iv(i){const t=r=>document.getElementById(r);let e="wallet";const n=document.querySelector(".phone-tabs");n.innerHTML=nv.map(([r,c,l])=>`<button data-tab="${r}"><span>${c}</span><small>${l}</small><i class="dot" data-dot="${r}"></i></button>`).join(""),n.querySelectorAll("button").forEach(r=>r.addEventListener("click",()=>{e=r.dataset.tab,i.audio.click(),o(!0)}));const s=r=>{const c=Math.floor(r/1440),l=Math.floor(r%1440/60);return c?`${c}d ${l}h`:`${l}h ${r%60}m`},a=()=>'<div class="wcard" style="text-align:center"><div style="font-size:44px">📵</div><b>No data o!</b><p class="fine">This app need internet. Buy data bundle for the Data app.</p><button class="btn primary" id="goData">Buy data</button></div>';function o(r=!1){const c=i.sim,l=c.s,u=t("phoneBody");if(n.querySelectorAll("button").forEach(h=>h.classList.toggle("active",h.dataset.tab===e)),n.querySelector('[data-dot="msgs"]').classList.toggle("on",l.unreadMsg>0),n.querySelector('[data-dot="feed"]').classList.toggle("on",l.unread>0),Xa[e]&&l.dataMB<Xa[e]){u.innerHTML=a(),t("goData").onclick=()=>{e="data",o()};return}r&&Xa[e]&&c.useData(Xa[e]);const m=c.tier,d=vo[vo.indexOf(m)+1];if(e==="wallet")u.innerHTML=`
        <div class="wcard bal"><div class="k">Wallet balance</div><div class="v">${et(l.cash)}</div><div class="k">Tier: Lapo • Status to Nepo: ${c.statusPoints}%</div><div class="mini-bar"><i style="width:${c.statusPoints}%;background:#ffd23f"></i></div></div>
        <div class="wgrid">
          <div class="wcard"><div class="k">Rent owed</div><div class="v" style="color:${l.rentOwed?"#e71d36":"#0a9b74"}">${et(l.rentOwed)}</div></div>
          <div class="wcard"><div class="k">Due (Sat 11:59pm)</div><div class="v">${s(c.rentCountdown())}</div></div>
          <div class="wcard"><div class="k">LapoPay loan</div><div class="v" style="color:#8338ec">${et(l.loan)}</div></div>
          <div class="wcard"><div class="k">Karma 🙏</div><div class="v" style="color:${l.karma>=0?"#0a9b74":"#e71d36"}">${l.karma>0?"+":""}${l.karma}</div></div>
          <div class="wcard"><div class="k">Data</div><div class="v">${l.dataMB}MB</div></div>
          <div class="wcard"><div class="k">Followers</div><div class="v">${l.followers}</div></div>
          <div class="wcard"><div class="k">Danfo fare</div><div class="v">${et(c.danfoFare)}</div></div>
          <div class="wcard"><div class="k">Keke fuel</div><div class="v">${l.kekeFuel.toFixed(1)}L</div></div>
        </div>
        <div class="btn-row"><button class="btn primary" id="phRent" ${!l.rentOwed||l.cash<l.rentOwed?"disabled":""}>Transfer rent to Baba Ade</button></div>
        <p class="fine">Earned ${et(l.stats.earned)} • Keke trips ${l.statsV2.trips} • Hawked ${l.statsV2.hawked} • Shifts ${l.statsV2.shifts} • Good deeds ${l.statsV2.deeds} • Matches won ${l.statsV2.wins}/${l.statsV2.matches}${l.strikes?` • ⚠️ Eviction strikes ${l.strikes}/2`:""}${d?`<br>Next money tier: ${d.label} @ ${et(d.min)}`:""}</p>`,t("phRent").onclick=()=>{const h=c.payRent(l.rentOwed);i.toast(`Rent transfer successful: ${et(h)} ✔`,"good"),o(),i.save()};else if(e==="msgs")l.unreadMsg=0,l.messages.forEach(h=>h.read=!0),u.innerHTML=l.messages.map(h=>`<div class="post msg ${h.kind}"><span class="h">${h.from}</span><span class="tm">${c.dayStr(h.t).slice(0,3)} ${c.timeStr(h.t)}</span><div>${h.text}</div></div>`).join("")||'<p class="fine">No messages yet. Your phone dey quiet 🤫</p>';else if(e==="feed")l.unread=0,u.innerHTML=l.feed.map(h=>`<div class="post ${h.kind}"><span class="h">${h.handle}</span><span class="tm">${c.dayStr(h.t).slice(0,3)} ${c.timeStr(h.t)}</span><div>${h.text}</div></div>`).join("");else if(e==="clout")u.innerHTML=`<div class="lapo-hero" style="background:#ff4fa3"><div class="k">Clout followers</div><div class="v">${l.followers.toLocaleString()}</div><div style="font-size:12px;font-weight:700">Snap Lagos life: people, Danfo, market, lagoon, neon at night. Golden hour (5–7pm) = more clout. Big followers = sponsorship 💸</div></div>
        <button class="btn primary" id="openCam" style="width:100%">📸 Open camera</button>
        <div class="posts">${l.posts.map(h=>`<div class="pcard"><img src="${h.img}"><div><b>+${h.gain}</b> followers • ❤️ ${h.likes}<br><small>${(h.hits||[]).join(", ")}</small></div></div>`).join("")||'<p class="fine">No posts yet.</p>'}</div>`,t("openCam").onclick=()=>i.photo.start("clout");else if(e==="chakam"){const h=i.events.chakam;u.innerHTML=`<div class="lapo-hero" style="background:#1a1423"><div class="k">Chakam 🎥</div><div style="font-size:13px;font-weight:700">Snap evidence of wahala (agbero extortion, scammers, checkpoint bribes). Upload = karma + clout. Settle = cash, but your karma go suffer.</div></div>
        <div class="wcard">${h?`🔴 <b>Live tip:</b> ${h.e.name} near the <b>${h.e.spot}</b>. Go there and snap!`:"🟢 No active wahala reported. Check Messages for tips."}</div>
        <button class="btn primary" id="openCh" style="width:100%">🎥 Open Chakam camera</button><p class="fine">Exposed so far: ${l.statsV2.chakam}</p>`,t("openCh").onclick=()=>i.photo.start("chakam")}else if(e==="lapo"){const h=l.loanDue?Math.max(0,l.loanDue-l.t):0;u.innerHTML=`
        <div class="lapo-hero"><div class="k">LapoPay balance owed</div><div class="v">${et(l.loan)}</div><div style="font-size:12px;font-weight:700">Interest: ${Math.round(Ru*100)}% every day + 10% "processing fee" 👀 • Max ₦15,000<br>${l.loan?h?`Next payment due in ${s(h)} (pay ≥ ₦1,000 to extend 3 days)`:"⚠️ OVERDUE — recovery agents dey come!":"No active loan"}</div></div>
        <div class="btn-row"><button class="btn green" id="lp5">Borrow ₦5,000</button><button class="btn green" id="lp10">Borrow ₦10,000</button></div>
        <div class="btn-row"><button class="btn" id="lpr1" ${!l.loan||l.cash<1?"disabled":""}>Repay ₦1,000</button><button class="btn primary" id="lpra" ${!l.loan||l.cash<1?"disabled":""}>Repay all</button></div>
        <p class="fine">Miss repayment: recovery texts → calls → agents go come meet you to collect, seize your things or shame you for GistMe. (Na game money only.)</p>`;const _=g=>{c.borrow(g)?(i.toast(`LapoPay: ${et(g)} don land 💸`,"money"),i.audio.cash()):i.toast("LapoPay: Limit reach! Pay first 🙅🏾","bad"),o(),i.save()};t("lp5").onclick=()=>_(5e3),t("lp10").onclick=()=>_(1e4),t("lpr1").onclick=()=>{const g=c.repay(1e3);i.toast(`Repaid ${et(g)}`,"good"),o(),i.save()},t("lpra").onclick=()=>{const g=c.repay(l.loan);i.toast(`Repaid ${et(g)}`,"good"),o(),i.save()}}else u.innerHTML=`<div class="wcard bal"><div class="k">Data balance</div><div class="v">${l.dataMB} MB</div><div class="k">Gist 2MB/open • Clout post 25MB • Chakam upload 30MB • Background 20MB/day</div></div>
        ${gh.map(h=>`<button class="opt" data-plan="${h.id}" ${l.cash<h.price?"disabled":""}><span>${h.name}<small>Pay from wallet</small></span><span class="price">${et(h.price)}</span></button>`).join("")}`,u.querySelectorAll("[data-plan]").forEach(h=>h.onclick=()=>{const _=gh.find(g=>g.id===h.dataset.plan);c.buyData(_)&&(i.toast(`${_.name} activated 📶`,"good"),i.audio.ping()),o(),i.save()})}return{render:o,open(r){r&&(e=r),t("phone").classList.remove("hidden"),o(!0)},get tab(){return e}}}const os=[{id:"tomato",e:"🍅",name:"Tomato",price:70,col:"#e63946"},{id:"pepper",e:"🌶️",name:"Pepper",price:50,col:"#d00000"},{id:"onion",e:"🧅",name:"Onions",price:60,col:"#9d4edd"},{id:"plantain",e:"🍌",name:"Plantain",price:120,col:"#ffd23f"},{id:"egg",e:"🥚",name:"Egg",price:40,col:"#fdfcdc"}],Mh=["👩🏾","👨🏿","👵🏾","👴🏿","🧕🏾","👨🏾‍🦱","👩🏿‍🦱","🧔🏾"],sv=["Mama Tobi","Oga Emeka","Aunty Funke","Baba Sule","Sister Ngozi","Bro Tayo","Iya Ibeji","Mr Okon"],av=["Abeg give me","I wan buy","Oya sell me","How much for","Quick quick, give me"],ov=["Thank you o! 🙏","God bless your market!","Correct seller! 👌","I go come back tomorrow!"],rv=["Na wetin I ask for be this?! 😤","You dey whine me?","Abeg focus! 🙄"],cv=["You too slow! I don go another stall 😒","Time no dey for me o!"],$a=i=>i[Math.floor(Math.random()*i.length)];function lv(i,{bonus:t=1,onDone:e}){let s=45,a=0,o=0,r=0,c=null,l={},u=!0,m=performance.now();i.classList.remove("hidden"),i.innerHTML=`
    <div class="mk">
      <div class="mk-top"><span>🛒 Your Stall ${t>1?'<small style="color:#e71d36">• Prices up!</small>':""}</span><span class="timer" id="mkTime">45s</span><span>₦<span id="mkEarn">0</span></span></div>
      <div class="cust" id="mkCust"></div>
      <div class="items">${os.map((T,E)=>`<button class="item" data-id="${T.id}"><span class="ic" style="background:${T.col}">${T.e}</span>${T.name}<small>${et(T.price*t)}</small><small style="opacity:.5">[${E+1}]</small></button>`).join("")}</div>
      <div class="basket" id="mkBasket"></div>
      <div class="mk-msg" id="mkMsg"></div>
      <div class="btn-row"><button class="btn" id="mkClear">↺ Clear</button><button class="btn green" id="mkSell">✔ Sell (Enter)</button></div>
      <p class="fine">Pack exactly wetin customer ask, then press Sell. Fast service = bigger tip.</p>
    </div>`;const d=T=>i.querySelector("#"+T),h=()=>{const T=1+Math.floor(Math.random()*3),E=[...os].sort(()=>Math.random()-.5).slice(0,T),R={};E.forEach(v=>R[v.id]=1+Math.floor(Math.random()*3));const B=Math.floor(Math.random()*Mh.length);c={want:R,face:Mh[B],name:sv[B],patience:11+Math.random()*4,max:0},c.max=c.patience,l={},_()},_=()=>{if(!c)return;const T=Object.entries(c.want).map(([E,R])=>{const B=os.find(v=>v.id===E);return`<span class="qty">${R} × ${B.e} ${B.name}</span>`}).join("");d("mkCust").innerHTML=`<div class="face">${c.face}</div><div style="flex:1"><div class="who">${c.name}</div><div class="say">${$a(av)}:</div><div style="margin-top:4px">${T}</div><div class="patience"><i id="mkPat" style="width:${c.patience/c.max*100}%"></i></div></div>`,g()},g=()=>{const T=Object.entries(l).filter(([,E])=>E>0);d("mkBasket").innerHTML=T.length?T.map(([E,R])=>{const B=os.find(v=>v.id===E);return`<span class="b">${R} × ${B.e} ${B.name}</span>`}).join(""):'<span style="opacity:.5">Basket empty — tap items to pack</span>'},f=T=>{d("mkMsg").textContent=T},p=T=>{u&&(l[T]=(l[T]||0)+1,g())},x=()=>{if(!u||!c)return;if(Object.keys({...c.want,...l}).every(E=>(c.want[E]||0)===(l[E]||0))){let E=0;for(const[v,y]of Object.entries(c.want))E+=os.find(L=>L.id===v).price*y;const R=Math.round(c.patience/c.max*60/10)*10,B=Math.round(E*t)+R;a+=B,o++,f(`${$a(ov)} +${et(B)}${R?` (tip ${et(R)})`:""}`),d("mkEarn").textContent=a.toLocaleString("en-NG"),h()}else c.patience-=3,l={},g(),f($a(rv))};i.querySelectorAll(".item").forEach(T=>T.addEventListener("pointerdown",E=>{E.preventDefault(),p(T.dataset.id)})),d("mkClear").onclick=()=>{l={},g()},d("mkSell").onclick=x;const M=T=>{const E=parseInt(T.key,10);E>=1&&E<=5?p(os[E-1].id):T.key==="Enter"||T.key===" "?(T.preventDefault(),x()):T.key==="Backspace"&&(l={},g()),T.stopPropagation()};window.addEventListener("keydown",M,!0),h();const b=()=>{if(!u)return;const T=performance.now(),E=Math.min(.5,(T-m)/1e3);if(m=T,s-=E,c){c.patience-=E;const R=d("mkPat");R&&(R.style.width=Math.max(0,c.patience/c.max*100)+"%"),c.patience<=0&&(r++,f($a(cv)),h())}if(d("mkTime").textContent=Math.max(0,Math.ceil(s))+"s",s<=0)return P();requestAnimationFrame(b)};requestAnimationFrame(b);function P(){u=!1,window.removeEventListener("keydown",M,!0),i.innerHTML=`<div class="mk" style="text-align:center"><h2 style="margin:6px 0">Market don close! 🧺</h2>
      <p style="font-size:44px;margin:4px 0">${o>=5?"🤑":o>=2?"🙂":"😮‍💨"}</p>
      <p><b>${o}</b> customers served • <b>${r}</b> waka comot</p>
      <p style="font-size:30px;font-weight:900;margin:6px 0">+${et(a)}</p>
      <p class="fine">2 hours don pass. Your body don tire small.</p>
      <button class="btn primary" id="mkDone" style="width:100%">Collect money ➜</button></div>`,i.querySelector("#mkDone").onclick=()=>{i.classList.add("hidden"),i.innerHTML="",e({earned:a,served:o,lost:r})}}}const Lu="wahala.char.v1",ms="wahala.save.v1",ot=i=>document.getElementById(i),sa=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,xo=Math.min(innerWidth,innerHeight)<820,yo=i=>{try{return JSON.parse(localStorage.getItem(i))}catch{return null}},Iu=(i,t)=>{try{localStorage.setItem(i,JSON.stringify(t))}catch{}},Ri=ot("c"),ti=new h_({canvas:Ri,antialias:!0,powerPreference:"high-performance"});ti.setPixelRatio(Math.min(devicePixelRatio,xo?1.75:2));ti.setSize(innerWidth,innerHeight);ti.shadowMap.enabled=!0;ti.shadowMap.type=Tc;const jn=new lu;jn.background=new Ot("#ffe3a3");const An=new $e(30,innerWidth/innerHeight,.1,100);An.position.set(0,1.25,5.4);An.lookAt(0,.85,0);jn.add(new xu(16777215,16767408,1.3));const Lo=new Mu(16777215,2.2);Lo.position.set(2.5,5,4);Lo.castShadow=!0;Lo.shadow.mapSize.set(1024,1024);jn.add(Lo);{const i=pt(new pn(1.1,1.2,.25,40),Q("#ffffff",{map:bs("circles","#ff6b35","#2ec4b6","#fff3d6",[6,1])}),{t:.05});i.position.y=-.125,jn.add(i);const t=new Tt(new fs(1.1,40),Q("#fff3d6"));t.rotation.x=-Math.PI/2,t.position.y=.005,t.receiveShadow=!0,jn.add(t);const e=[["#ff9eb5",-2.6,2.2,-4,1.6],["#7fd1c7",2.8,1.4,-5,2.2],["#c3b1f0",-1.2,3.4,-6,1.2],["#ffd23f",1.5,3.6,-7,1]];for(const[n,s,a,o,r]of e){const c=pt(new Dn(r,20,14),Q(n),{t:.06,cast:!1});c.position.set(s,a,o),jn.add(c)}}let ln=null,ze={...Cu(),...yo(Lu)||{}};function hv(){const i=ln?ln.rotation.y:-.35;ln&&jn.remove(ln),ln=qn(ze),ln.rotation.y=i,jn.add(ln)}function Du(){const i=innerWidth,t=innerHeight;An.aspect=i/t,i>760?(An.setViewOffset(i,t,-Math.min(220,i*.2),0,i,t),An.fov=30):(An.setViewOffset(i,t,0,t*.26,i,t),An.fov=i/t<.7?58:44),An.updateProjectionMatrix()}const Me=new lu;Me.background=new Ot("#8fd3ff");Me.fog=new Fc("#8fd3ff",70,170);const In=new $e(50,innerWidth/innerHeight,.1,400),io=new xu(15136511,15782816,1.1);Me.add(io);const Sn=new Mu(16774108,2.4);Sn.castShadow=!0;Sn.shadow.mapSize.set(xo?1024:2048,xo?1024:2048);Object.assign(Sn.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:140});Sn.shadow.bias=-6e-4;Sn.shadow.normalBias=.03;Me.add(Sn);Me.add(Sn.target);const bc=new yc(16773320,0,11,1.3);Me.add(bc);const bh=(()=>{const i=[];for(let n=0;n<500;n++){const s=Math.random()*Math.PI*2,a=.15+Math.random()*1.3;i.push(Math.cos(s)*Math.cos(a)*180,Math.sin(a)*180,Math.sin(s)*Math.cos(a)*180)}const t=new we;t.setAttribute("position",new re(i,3));const e=new m_(t,new fu({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1}));return Me.add(e),e})(),so=new Tt(new Dn(6,20,14),new ws({color:16643800,fog:!1,transparent:!0}));Me.add(so);let Ee=null,nn=null,j=null;const Rt=new A().copy(Kn.spawn);let wn=0,Ue=0,Mo=.52,bo=xo?11:10,Rs="creator",me=!1,Xc=!1;const ye=i=>new Ot(i),Xs=[[0,"night"],[5,"night"],[6.3,"dawn"],[8,"day"],[17,"day"],[18.6,"dusk"],[19.8,"night"],[24,"night"]],Sh={night:{sky:ye("#2b2f6e"),hs:ye("#7383db"),hg:ye("#3a2f5a"),hi:.95,si:.45,sc:ye("#a9bbff")},dawn:{sky:ye("#ffb38a"),hs:ye("#ffd1b3"),hg:ye("#e0b080"),hi:1,si:1.5,sc:ye("#ffb27a")},day:{sky:ye("#8fd3ff"),hs:ye("#e6f6ff"),hg:ye("#f0d3a0"),hi:1.15,si:2.5,sc:ye("#fff3dc")},dusk:{sky:ye("#ff9470"),hs:ye("#ffb8a0"),hg:ye("#b08070"),hi:.95,si:1.3,sc:ye("#ff9a5c")}},uv=new Ot;new Ot;const dv=ye("#151838");function fv(i){let t=0;for(;t<Xs.length-1&&Xs[t+1][0]<=i;)t++;const[e,n]=Xs[t],[s,a]=Xs[Math.min(t+1,Xs.length-1)],o=s>e?(i-e)/(s-e):0,r=Sh[n],c=Sh[a];return{sky:r.sky.clone().lerp(c.sky,o),hs:r.hs.clone().lerp(c.hs,o),hg:r.hg.clone().lerp(c.hg,o),hi:r.hi+(c.hi-r.hi)*o,si:r.si+(c.si-r.si)*o,sc:r.sc.clone().lerp(c.sc,o)}}let Pi=1,Ar=0;const wh=ye("#a8dcff"),pv=ye("#ffe39a"),Eh=ye("#39406b"),mv=ye("#ffae42");function gv(i){const t=j.hour+j.acc/60,e=fv(t%24),n=t<5.5?1:t<7?1-(t-5.5)/1.5:t<18?0:t<19.5?(t-18)/1.5:1;Pi+=((j.s.power?1:0)-Pi)*Math.min(1,i*6),Ar+=((j.genRunning?1:0)-Ar)*Math.min(1,i*4);const s=(1-Pi)*n;e.sky.lerp(dv,s*.85),Me.background.copy(e.sky),Me.fog.color.copy(e.sky),Me.fog.near=70-s*40,Me.fog.far=170-s*80,io.color.copy(e.hs),io.groundColor.copy(e.hg),io.intensity=e.hi*(1-s*.68),Sn.color.copy(e.sc),Sn.intensity=e.si*(1-s*.4);let a;if(t>=6&&t<=18.6){const u=(t-6)/12.6*Math.PI;a=new A(-Math.cos(u),Math.max(.25,Math.sin(u)),.45).normalize()}else a=new A(.45,.9,.35).normalize();Sn.position.copy(Rt).addScaledVector(a,60),Sn.target.position.copy(Rt),so.position.copy(Rt).add(new A(60,75,-120)),so.material.opacity=n,so.visible=n>.05,bh.material.opacity=n*(.35+s*.65),bh.position.set(Rt.x,0,Rt.z);const o=Ee.mats,r=n*Pi;o.window.color.copy(wh).lerp(uv.copy(pv).lerp(Eh,1-Pi),n),o.window.emissive.copy(mv),o.window.emissiveIntensity=r*.75,o.windowDark.color.copy(wh).lerp(Eh,n),o.bulb.emissive.set("#ffd27a"),o.bulb.emissiveIntensity=r*1.2,o.bulb.color.set(r>.3?"#fff3b0":"#8a8fa3"),Ee.lampLights.forEach(u=>u.intensity=r*22);const c=Math.max(Pi,Ar);o.homeBulb.emissive.set("#ffd27a"),o.homeBulb.emissiveIntensity=c*n*1.4,o.homeBulb.color.set(c>.5?"#fff3b0":"#6b6f80"),Ee.homeLight.intensity=c*n*22,Ee.homeBars.emissive.set("#ffb347"),Ee.homeBars.emissiveIntensity=c*n*.8,o.headlight.emissive.set("#fff4c2"),o.headlight.emissiveIntensity=n*1.2,bc.intensity=s>.4?s*7:0;const l=new A(Math.sin(wn),0,Math.cos(wn));bc.position.copy(Rt).addScaledVector(l,1.2).add(new A(0,2,0)),ot("blackoutTint").style.opacity=(s*.85).toFixed(2)}const fe=new Set,Re={x:0,y:0,active:!1,id:null};addEventListener("keydown",i=>{var e;if(i.target.tagName==="INPUT")return;const t=i.key.toLowerCase();if(fe.add(t),Rs==="game"){if(Zt.init(),(t==="e"||t==="enter")&&!me&&!i.repeat&&Nu(),!i.repeat&&At&&!me){const n=(((e=At.buttons)==null?void 0:e.call(At))||[]).find(s=>s.key===t||s.key===" "&&t===" ");n&&!n.disabled&&(t===" "&&i.preventDefault(),n.onClick(),Do())}if(t==="m"&&!i.repeat&&Hu(),(t==="p"||t==="tab")&&(i.preventDefault(),Uu()),t==="escape"){if(!ot("mash").classList.contains("hidden"))return;la(),Fi()}}});addEventListener("keyup",i=>fe.delete(i.key.toLowerCase()));addEventListener("blur",()=>fe.clear());{const i=ot("joystick"),t=ot("knob"),e=(a,o)=>{t.style.transform=`translate(${a}px, ${o}px)`},n=a=>{const o=i.getBoundingClientRect(),r=o.left+o.width/2,c=o.top+o.height/2;let l=a.clientX-r,u=a.clientY-c;const m=o.width/2-10,d=Math.hypot(l,u);d>m&&(l*=m/d,u*=m/d),Re.x=l/m,Re.y=-u/m,e(l,u)};i.addEventListener("pointerdown",a=>{Re.active=!0,Re.id=a.pointerId,i.setPointerCapture(a.pointerId),n(a),a.preventDefault()}),i.addEventListener("pointermove",a=>{Re.active&&a.pointerId===Re.id&&n(a)});const s=a=>{a.pointerId===Re.id&&(Re.active=!1,Re.x=Re.y=0,e(0,0))};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s)}{let i=null;Ri.addEventListener("pointerdown",e=>{i={id:e.pointerId,x:e.clientX,y:e.clientY},Ri.setPointerCapture(e.pointerId)}),Ri.addEventListener("pointermove",e=>{if(!i||i.id!==e.pointerId)return;const n=e.clientX-i.x,s=e.clientY-i.y;i.x=e.clientX,i.y=e.clientY,Rs==="creator"&&ln?ln.rotation.y+=n*.012:At!=null&&At.lockCam||(Ue-=n*.006,Mo=qe.clamp(Mo+s*.004,.25,1.15))});const t=e=>{i&&i.id===e.pointerId&&(i=null)};Ri.addEventListener("pointerup",t),Ri.addEventListener("pointercancel",t),Ri.addEventListener("wheel",e=>{bo=qe.clamp(bo+e.deltaY*.01,5,20)},{passive:!0})}function _e(i,t=""){const e=document.createElement("div");for(e.className="toast "+t,e.textContent=i,ot("toasts").appendChild(e);ot("toasts").children.length>4;)ot("toasts").firstChild.remove();setTimeout(()=>e.remove(),3600)}function Ge(i,t,e,n=""){me=!0;const s=ot("modalCard");s.className="modal-card "+n,s.innerHTML=`<h2>${i}</h2>${t?`<p class="sub">${t}</p>`:""}`;for(const a of e){const o=document.createElement("button");o.className="opt"+(a.close?" close":""),o.innerHTML=`<span>${a.label}${a.sub?`<small>${a.sub}</small>`:""}</span>${a.price?`<span class="price">${a.price}</span>`:""}`,o.disabled=!!a.disabled,o.onclick=()=>{var r;a.keep||la(),(r=a.onClick)==null||r.call(a)},s.appendChild(o)}ot("modal").classList.remove("hidden")}function la(){ot("modal").classList.add("hidden"),!ot("market").innerHTML&&!So&&(me=!1)}let So=!1;ot("modal").addEventListener("pointerdown",i=>{i.target.id==="modal"&&la()});function Io(i,t,e){return new Promise(n=>{me=!0;const s=ot("fade");s.textContent=i,s.classList.add("on"),setTimeout(()=>{e==null||e(),setTimeout(()=>{s.classList.remove("on"),setTimeout(()=>{me=!1,n()},450)},t)},520)})}const _v=i=>{const t=Math.floor(i/1440),e=Math.floor(i%1440/60);return t?`${t}d ${e}h`:`${e}h ${i%60}m`},Th=(i,t)=>new A(i,0,t),vv=[{id:"home",pos:Kn.home,r:2.6,label:()=>"Enter your room 🏠",act:xv},{id:"gen",pos:Kn.generator,r:1.9,label:()=>"Generator ⛽",act:yv},{id:"buka",pos:Th(18,-14.6),r:3.2,label:()=>"Buy food 🍛",act:bv},{id:"stall",pos:Kn.stall,r:2.2,label:()=>"Sell for stall 🍅",act:Sv},...ps.map(i=>({id:"stop-"+i.id,pos:Th(i.x,6.6),r:2.8,label:()=>`Danfo @ ${i.name} 🚌`,act:()=>Ev(i)}))];let wo=null;function Nu(){wo&&!me&&(Zt.click(),wo.act())}ot("actionBtn").addEventListener("click",Nu);function xv(){const i=j.s,t=j.hour,e=j.s.power?"💡 NEPA light dey":j.genRunning?"⛽ Gen dey run":"🕯️ No light",n=t>=19||t<5;Ge("Room 4 🏠",`Face-me-I-face-you, No. 7. ${e}. Rent owed: <b>${et(i.rentOwed)}</b>${i.strikes?` • ⚠️ Strike ${i.strikes}/2`:""}`,[{label:"Sleep till morning 😴",sub:n?"Restores Body. Better with light (fan dey work).":"E never late, but you fit sleep",onClick:()=>Ah(!0)},{label:"Take nap (2 hours)",sub:"+Body small",onClick:()=>Ah(!1)},{label:"Pay full rent",sub:i.rentOwed?"Baba Ade go happy":"You don pay finish 👏",price:et(i.rentOwed),disabled:!i.rentOwed||i.cash<i.rentOwed,onClick:()=>{const s=j.payRent(i.rentOwed);_e(`Rent paid: ${et(s)} ✔`,"good"),Ye()}},{label:"Pay part of rent",sub:"Small small dey fill basket",price:et(Math.min(2e3,i.rentOwed)),disabled:!i.rentOwed||i.cash<Math.min(2e3,i.rentOwed),onClick:()=>{const s=j.payRent(2e3);_e(`Paid ${et(s)} — balance ${et(i.rentOwed)}`,"good"),Ye()}},{label:"Comot",close:!0}])}async function Ah(i){const t=j.hour;let e=i?(t<6.5?6.5-t:24-t+6.5)*60:120;e=Math.round(e);let n=0;await Io(i?"😴 Zzz... Sleeping till morning":"😴 Small nap...",900,()=>{for(let s=0;s<e&&(j.tick({sleeping:!0}),j.homePowered&&n++,!j.s.evicted);s++);j.collapsed=!1,Rt.copy(Kn.spawn),wn=0,Ue=0}),i&&(n/Math.max(1,e)>.7?(j.s.mood=Math.min(100,j.s.mood+10),_e("You wake up fresh! Fan dey blow all night 😌","good")):_e("NEPA take light — heat & mosquito no let you sleep well 🥵🦟","warn")),Ye()}function yv(){const i=j.s;if(!i.hasGen&&!i.quietGen)return Ge("No generator 😩",'Recovery agents don carry your "I-Pass-My-Neighbour". You fit buy quiet inverter-gen.',[{label:"Buy quiet generator 🤫",sub:"No neighbour wahala at night",price:et(qs),disabled:i.cash<qs,onClick:Ch},{label:"Comot",close:!0}]);Ge(i.quietGen?"Quiet Gen 🤫⛽":'"I-Pass-My-Neighbour" ⛽',`${i.quietGen?"":"Loud! Running am 10pm–6am go make neighbours vex. "}Fuel: <b>${i.fuel} hrs</b> • Gen switch: <b>${i.genOn?"ON":"OFF"}</b>. E go run automatically when NEPA take light.`,[{label:"Buy 5 hours fuel",sub:"Jerrycan from roadside seller (price follow petrol price)",price:et(j.fuelPrice),disabled:i.cash<j.fuelPrice||i.fuel>=24,onClick:()=>{j.buyFuel(),_e("Fuel don enter gen ⛽","good"),Ye()}},{label:i.genOn?"Switch gen OFF":"Switch gen ON",sub:i.genOn?"Save fuel":"Make e run when light go",onClick:()=>{i.genOn=!i.genOn,_e(i.genOn?"Gen switch ON":"Gen switch OFF")}},...i.quietGen?[]:[{label:"Buy quiet generator 🤫",sub:`Neighbour complaints this night: ${i.genComplaints}/3`,price:et(qs),disabled:i.cash<qs,onClick:Ch}],{label:"Comot",close:!0}])}function Ch(){j.spend(qs)&&(j.s.quietGen=!0,j.s.hasGen=!0,_e("Quiet gen installed 🤫 Neighbours go sleep well now","good"),j.addKarma(2),Zt.cash(),Ye())}const Mv=[{name:"Jollof rice & chicken",price:1500,hunger:45,mood:8,mins:25},{name:"Amala & ewedu",price:1e3,hunger:38,mood:4,mins:20},{name:"Eba & egusi soup",price:1200,hunger:42,mood:5,mins:25},{name:"Puff-puff (5 pieces)",price:300,hunger:12,mood:3,mins:5},{name:"Pure water (sachet)",price:50,hunger:3,mood:2,mins:1}];function bv(){const i=j.hour;if(i<6||i>=22)return Ge("Buka don close 🌙","Iya Basira don go house. Come back from 6am.",[{label:"Okay",close:!0}]);Ge("Mama Put — Iya Basira 🍛",`"My pikin, wetin you go chop today?" • Belle: ${Math.round(j.s.hunger)}%`,[...Mv.map(t=>({label:t.name,sub:`+${t.hunger} Belle • +${t.mood} Mind`,price:et(t.price),disabled:j.s.cash<t.price,onClick:()=>{j.spend(t.price),j.s.hunger=Math.min(100,j.s.hunger+t.hunger),j.s.mood=Math.min(100,j.s.mood+t.mood),j.s.stats.meals++,j.advance(t.mins),_e(`${t.name} — e sweet die! 😋`,"good"),Ye()}})),{label:"I no hungry",close:!0}])}function Sv(){const i=j.hour;if(i<7||i>=19)return Ge("Market don close 🌙","Market dey open 7am – 7pm. Go rest.",[{label:"Okay",close:!0}]);if(j.s.energy<15)return Ge("Your body don tire 😮‍💨","You need at least 15% Body to sell. Go chop or sleep.",[{label:"Okay",close:!0}]);Ge("Your Market Stall 🍅",`Sell tomato, pepper, onions, plantain & egg. 45 seconds = 2 game hours.${j.s.marketBonus>1?' <b style="color:#e71d36">Prices up 50% today!</b>':""}`,[{label:"Open shop! 🛒",sub:"Uses Body & Belle",onClick:wv},{label:"Later",close:!0}])}function wv(){me=!0,lv(ot("market"),{bonus:j.s.marketBonus,onDone:({earned:i,served:t})=>{j.advance(120,{working:!0}),j.earn(i,"market"),j.s.stats.sold+=t,t>=4&&(j.s.mood=Math.min(100,j.s.mood+6)),me=!1,_e(`+${et(i)} from market 💰`,"money"),Ye()}})}function Ev(i){const t=j.hour;if(t<5||t>=23)return Ge("No Danfo now 🌙","Danfo dey run 5am – 11pm. Na trek remain.",[{label:"Okay",close:!0}]);const e=ps.indexOf(i);Ge(`${i.name} Bus Stop 🚌`,`Conductor: "Enter with your change o!" • Base fare ${et(j.danfoFare)}${j.s.fuelFactor>1?" (fuel price don raise am)":""}`,[...ps.filter(n=>n!==i).map(n=>{const s=Math.abs(ps.indexOf(n)-e),a=j.danfoFare*s;return{label:`To ${n.name}`,sub:`~${s*15}–${s*15+30} mins (traffic dey)`,price:et(a),disabled:j.s.cash<a,onClick:()=>Tv(n,a,s)}}),{label:"I go trek",close:!0}])}async function Tv(i,t,e){j.spend(t);const n=e*15+Math.floor(Math.random()*30),s=['Conductor: "Shift! Shift! Make una shift!" 🚌',"Driver dey play Fuji music full blast 🎶","Traffic for road... hawker dey sell gala 🥖",'Conductor: "Who never pay?" 👀'][Math.floor(Math.random()*4)];await Io(s,1300,()=>{j.advance(n),Rt.set(i.x+1.8,.18,6.3),wn=0,Ue=0}),_e(`You don reach ${i.name}! (${n} mins, ${et(t)})`,"good"),Ye()}async function Av(){Xc=!1,await Io("😵 You don faint for road!",1400,()=>{for(let t=0;t<360;t++)j.tick({sleeping:!0});j.s.energy=Math.max(j.s.energy,40),j.s.mood=Math.max(0,j.s.mood-15);const i=Math.min(500,j.s.cash);j.s.cash-=i,j.collapsed=!1,Rt.copy(Kn.spawn),setTimeout(()=>_e(`Neighbours carry you go house. You dash them ${et(i)} 🙏`,"bad"),800)}),Ye()}let aa=null;function Uu(){ot("phone").classList.contains("hidden")?Ou():Fi()}function Ou(i){!aa||At&&At.name!=="photo"&&At.name!=="keke"||(Zt.click(),(At==null?void 0:At.name)==="photo"&&$c(),aa.open(i))}function Fi(){ot("phone").classList.add("hidden")}function Rh(){aa&&!ot("phone").classList.contains("hidden")&&aa.render()}ot("phoneBtn").addEventListener("click",()=>Uu());ot("phoneClose").addEventListener("click",Fi);ot("phone").addEventListener("pointerdown",i=>{i.target.id==="phone"&&Fi()});function Cv(i){return i>55?"#06d6a0":i>25?"#ffbe0b":"#e71d36"}function ku(){const i=j.s;ot("hudDay").textContent=`${j.dayStr().slice(0,3)} • Day ${j.day}`,ot("hudTime").textContent=j.timeStr(),ot("hudCash").textContent=Math.round(i.cash).toLocaleString("en-NG");for(const[r,c]of[["barHunger",i.hunger],["barEnergy",i.energy],["barMood",i.mood]]){const l=ot(r);l.style.width=c+"%",l.style.background=Cv(c)}const t=ot("hudPower");i.power?(t.className="power on",t.textContent="💡 NEPA"):j.genRunning?(t.className="power gen",t.textContent="⛽ Gen"):(t.className="power off",t.textContent="🕯️ No light");const e=ot("hudRent"),n=j.rentCountdown();i.rentOwed>0?(e.textContent=`🏠 Rent ${et(i.rentOwed)} • due in ${_v(n)}`,e.className="rent-chip"+(n<1440||i.strikes?" bad":"")):(e.textContent="🏠 Rent paid ✔ • Lapo tier",e.className="rent-chip"),i.loan>0&&(e.textContent+=` • Loan ${et(i.loan)}`);const s=j.statusPoints;ot("hudKarma").textContent=`🙏 ${i.karma>0?"+":""}${i.karma}`,ot("hudKarma").className="chip "+(i.karma>=0?"good":"bad"),ot("hudFollow").textContent=`📸 ${i.followers}`,ot("hudData").textContent=`📶 ${i.dataMB}MB`,ot("hudData").className="chip"+(i.dataMB<25?" bad":""),ot("statusFill").style.width=s+"%",ot("statusPct").textContent=s+"%";const a=i.unread+i.unreadMsg,o=ot("badge");o.textContent=a,o.classList.toggle("hidden",!a),ot("phTime").textContent=j.timeStr(),ot("phPower").textContent=i.power?"💡":j.genRunning?"⛽":"🕯️"}function Ye(){j&&(j.s.player={x:Rt.x,z:Rt.z,rotY:wn},Iu(ms,j.s))}function Sc(i){Iu(Lu,ze);let t=i?null:yo(ms);(!t||!(t.v>=1)||t.evicted)&&(t=q_(ze.name||"Tunde")),t.name=ze.name||t.name,j=new K_(t,{toast:_e,onPost:e=>{ot("phone").classList.contains("hidden")||Rh(),e.kind==="alert"&&_e(`📱 ${e.handle}: ${e.text.slice(0,70)}${e.text.length>70?"…":""}`,"warn")},onPower:e=>_e(e?"UP NEPA! Light don come 💡🎉":"NEPA don take light! 🕯️",e?"good":"bad"),onCollapse:()=>{Xc=!0},onEvictionWarning:()=>setTimeout(()=>Ge("⚠️ EVICTION WARNING",`Baba Ade: "You no pay rent this week! I don add late fee. If you no pay everything by next Saturday, I go throw your load comot!" Owed: <b>${et(j.s.rentOwed)}</b>`,[{label:"I go pay, abeg 🙏",close:!0}],"warn"),600),onEvict:()=>setTimeout(Rv,600),onText:e=>{Zt.ping(),_e(`💬 ${e.from}: ${e.text.slice(0,60)}${e.text.length>60?"…":""}`,e.kind==="bad"?"bad":e.kind==="good"?"good":""),Rh()},onKarma:(e,n)=>{e&&_e(`Karma ${e>0?"+":""}${e}${n?" • "+n:""} 🙏`,e>0?"good":"bad")},onCash:e=>{e>0&&Zt.cash()},onRecoveryCall:()=>setTimeout(zu,400),onRecoveryVisit:()=>setTimeout(()=>fi==null?void 0:fi.spawnAgents(),400)}),Ee||(Ee=new G_(Me)),nn&&Me.remove(nn),nn=qn(ze),Me.add(nn),Cn?Cn.attachTray(nn):kv(),t.player?(Rt.set(t.player.x,0,t.player.z),wn=t.player.rotY||0):(Rt.copy(Kn.spawn),wn=0),Ue=0,Rs="game",ot("creator").classList.add("hidden"),["hud","phoneBtn","sysBtns"].forEach(e=>ot(e).classList.remove("hidden")),sa&&ot("joystick").classList.remove("hidden"),sa&&ot("keysHint").classList.add("hidden"),An.clearViewOffset(),ku(),t._migrated&&(delete t._migrated,setTimeout(()=>_e("Save upgraded to Stage 2 ✔ — check your GistMe Messages","good"),800)),t.player||setTimeout(()=>Ge(`Welcome to Lagos, ${t.name}! 🏙️`,`You don rent one room for face-me-I-face-you. You get <b>${et(t.cash)}</b> for pocket and rent na <b>${et(ta)}</b> every Saturday. Hustle for <b>Yaba Market</b> stall, chop for <b>Mama Put</b>, and no forget — NEPA fit take light anytime. 😅`,[{label:"Oya, make we go! ➜",close:!0}]),300)}function Rv(){const i=j.s;Ge("🧳 You don be evicted!",`Baba Ade don throw your load comot for Room 4. You survive ${j.day} days, earn ${et(i.stats.earned)}. Lagos no easy o!`,[{label:"Start new life ➜",onClick:()=>{localStorage.removeItem(ms),location.reload()}}],"warn")}setInterval(()=>{Rs==="game"&&!me&&Ye()},8e3);addEventListener("pagehide",Ye);function Pv(){ot("ccName").value=ze.name,ot("ccName").addEventListener("input",s=>{ze.name=s.target.value.trim()||"Tunde"});const i=(s,a,o,r=c=>c)=>{s.innerHTML="",a.forEach(c=>{const l=r(c),u=document.createElement("button");u.className="sw"+(ze[o]===l?" sel":""),u.style.background=l,u.title=c.name||l,u.onclick=()=>{ze[o]=l,e()},s.appendChild(u)})},t=(s,a,o)=>{s.innerHTML="",a.forEach(r=>{const c=document.createElement("button");c.className="chip"+(ze[o]===r.id?" sel":""),c.textContent=r.name,c.onclick=()=>{ze[o]=r.id,e()},s.appendChild(c)})},e=()=>{i(ot("ccSkin"),Wc,"skin",s=>s.hex),t(ot("ccHair"),Su,"hair"),i(ot("ccHairColor"),go,"hairColor"),t(ot("ccOutfit"),wu,"outfit"),t(ot("ccPattern"),O_,"pattern"),ot("ccPatternGroup").style.opacity=ze.outfit.startsWith("ankara")||ze.hair==="gele"?1:.4,i(ot("ccCloth"),Eu,"clothColor"),i(ot("ccAccent"),Tu,"accentColor"),i(ot("ccPants"),Au,"pantsColor"),hv()};ot("ccRandom").onclick=()=>{const s=ze.name;ze={...un(),name:s},e()},!!yo(ms)&&!yo(ms).evicted&&(ot("ccStart").textContent="Continue Hustle ➜",ot("ccNew").classList.remove("hidden")),ot("ccStart").onclick=()=>Sc(!1),ot("ccNew").onclick=()=>{confirm("Wipe your save and start fresh?")&&(localStorage.removeItem(ms),Sc(!0))},e()}Pv();Du();let Ph=null;function Lv(i,t){const e=ot("overhear");e.innerHTML=`<span>👂 ${i}:</span> ${t}`,e.classList.add("on"),clearTimeout(Ph),Ph=setTimeout(()=>e.classList.remove("on"),3200)}const Iv=new D_;let Cr=0,Ys=0;const Lh=new A,Ih=new A,Dv=()=>j.s.power?["How far?","Wetin dey sup?","Traffic no go kill person","E choke!","Na God o","This sun no be here o","Jollof dey buka","Abeg shift"]:["NEPA don take light!","Who get gen?","Heat wan kill me","UP NEPA when?"];function Fu(){var u,m;requestAnimationFrame(Fu);const i=Math.min(.05,Iv.getDelta());if(Ys+=i,Rs==="creator"){ln&&(ln.rotation.y+=i*.25,Ln(ln,i,0,Ys)),ti.render(jn,An);return}!me&&!j.s.evicted&&j.update(i),Xc&&!me&&Av();let t=0,e=0;At&&!me&&At.update(i);const n=!At||At.allowWalk;!me&&n&&((fe.has("w")||fe.has("arrowup"))&&(e+=1),(fe.has("s")||fe.has("arrowdown"))&&(e-=1),(fe.has("a")||fe.has("arrowleft"))&&(t-=1),(fe.has("d")||fe.has("arrowright"))&&(t+=1),fe.has("q")&&(Ue+=i*1.8),fe.has("r")&&(Ue-=i*1.8),t+=Re.x,e+=Re.y);const s=Math.min(1,Math.hypot(t,e));let a=0;if(s>.08&&n){const d=-Math.sin(Ue),h=-Math.cos(Ue),_=Math.cos(Ue),g=-Math.sin(Ue);let f=_*t+d*e,p=g*t+h*e;const x=Math.hypot(f,p);f/=x,p/=x;const M=fe.has("shift")||Re.active&&s>.95;let b=(M?7:4.3)*s;(j.s.hunger<=0||j.s.energy<10)&&(b*=.65),Rt.x+=f*b*i,Rt.z+=p*b*i;let T=Math.atan2(f,p)-wn;T=Math.atan2(Math.sin(T),Math.cos(T)),wn+=T*Math.min(1,i*12),a=M?1.5:Math.max(.5,s)}n&&Ee.resolve(Rt),n||(a=xn.moveAmt),Rt.y+=(Ee.groundHeight(Rt.x,Rt.z)-Rt.y)*Math.min(1,i*15),nn.parent===Me&&(nn.position.copy(Rt),nn.rotation.y=wn),Ln(nn,i,nn.parent===Me?a:0,Ys),B_(nn,j.s.mood),Ee.update(i,Ys,Rt,{power:j.s.power,genRunning:j.genRunning,lines:Dv,onOverhear:Lv,night:j.isNight}),Cn.update(i),fi.update(i),Fv(i,a),Ee.bark&&(Ee.bark.pos.distanceTo(Rt)<22&&_e(`🚌 ${Ee.bark.text}`),Ee.bark=null);let o=null,r=1e9;if(!At)for(const d of vv){const h=Math.hypot(Rt.x-d.pos.x,Rt.z-d.pos.z);h<d.r&&h<r&&(r=h,o=d)}if(Eo)o=Eo;else if(!At||At.allowHots)for(const d of Bu){const h=d();if(h){o=h;break}}o!==wo&&(wo=o,ot("actionBtn").classList.toggle("hidden",!o)),o&&(ot("actionLabel").textContent=typeof o.label=="function"?o.label():o.label),me?ot("actionBtn").classList.add("hidden"):o&&ot("actionBtn").classList.remove("hidden"),ot("actionBtn").querySelector(".key").style.display=sa?"none":"";const c=(u=At==null?void 0:At.camDist)!=null?u:bo,l=(m=At==null?void 0:At.camPitch)!=null?m:Mo;Lh.set(Rt.x,Rt.y+1.1,Rt.z),Ih.set(Rt.x+Math.sin(Ue)*Math.cos(l)*c,Rt.y+1.1+Math.sin(l)*c,Rt.z+Math.cos(Ue)*Math.cos(l)*c),In.position.lerp(Ih,Math.min(1,i*6)),In.lookAt(Lh),gv(i),Cr-=i,Cr<=0&&(Cr=.25,ku()),ti.render(Me,In)}const Zt=new J_;let At=null,Eo=null,Cn=null,fi=null,ao=null,wc=null;const Bu=[];function Nv(i){At&&$c(),At=i,Fi(),Do()}function $c(){var t;const i=At;At=null,Eo=null,(t=i==null?void 0:i.onEnd)==null||t.call(i),Do()}function Do(){var t;const i=ot("ctxBtns");i.innerHTML="";for(const e of((t=At==null?void 0:At.buttons)==null?void 0:t.call(At))||[]){const n=document.createElement("button");n.className="ctx-btn",n.disabled=!!e.disabled,n.innerHTML=`${e.label}${!sa&&e.key?`<span class="key">${e.key===" "?"Space":e.key.toUpperCase()}</span>`:""}`,n.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation(),Zt.init(),me||(e.onClick(),Do())}),i.appendChild(n)}i.classList.toggle("hidden",!i.children.length)}function Uv(i){const t=ot("actHud");t._h!==i&&(t._h=i,t.innerHTML=i,t.classList.toggle("hidden",!i))}function Ov({label:i,taps:t=12,secs:e=4}){return new Promise(n=>{me=!0,So=!0;const s=ot("mash"),a=ot("mashFill"),o=ot("mashBtn");ot("mashLabel").textContent=i,s.classList.remove("hidden");let r=0,c=performance.now(),l=!1;const u=_=>{l||(l=!0,s.classList.add("hidden"),removeEventListener("keydown",d),o.onpointerdown=null,So=!1,me=!1,n(_))},m=()=>{r++,Zt.tone(300+r*25,.05,"triangle",.08),a.style.width=Math.min(100,r/t*100)+"%",r>=t&&u(!0)},d=_=>{(_.key===" "||_.key.toLowerCase()==="e")&&(_.preventDefault(),_.repeat||m())};addEventListener("keydown",d),o.onpointerdown=_=>{_.preventDefault(),m()},a.style.width="0%";const h=()=>{if(l)return;const _=e-(performance.now()-c)/1e3;ot("mashTime").textContent=Math.max(0,_).toFixed(1)+"s",_<=0?u(!1):requestAnimationFrame(h)};h()})}const xn={get world(){return Ee},get sim(){return j},scene:Me,camera:In,renderer:ti,pos:Rt,get player(){return nn},audio:Zt,get time(){return Ys},moveAmt:0,isTouch:sa,input(){let i=Re.x,t=Re.y;return me?(i=0,t=0):((fe.has("w")||fe.has("arrowup"))&&(t+=1),(fe.has("s")||fe.has("arrowdown"))&&(t-=1),(fe.has("a")||fe.has("arrowleft"))&&(i-=1),(fe.has("d")||fe.has("arrowright"))&&(i+=1)),{ix:qe.clamp(i,-1,1),iy:qe.clamp(t,-1,1),run:fe.has("shift")||Re.active&&Math.hypot(Re.x,Re.y)>.95}},camYawTo(i,t){let e=i-Ue;e=Math.atan2(Math.sin(e),Math.cos(e)),Ue+=e*Math.min(1,t)},setRot(i){wn=i},zoom(i){At&&(At.camDist=qe.clamp(At.camDist+i,2.5,14))},startActivity:Nv,endActivity:$c,activityName:()=>(At==null?void 0:At.name)||null,toast:_e,modal:Ge,closeModal:la,fade:Io,save:()=>Ye(),setBusy(i){me=i,So=i},isBusy:()=>me,ctxHot(i){Eo=i},actHud:Uv,mash:Ov,closePhone:Fi,renderNow(){ti.render(Me,In)}};function kv(){Cn=Z_(xn),fi=Q_(xn),ao=tv(xn),wc=ev(xn),xn.hustles=Cn,xn.events=fi,xn.photo=wc,xn.football=ao,aa=iv(xn),Ee.onDanfoNear=t=>{t.mesh.position.distanceTo(Rt)<18&&Zt.horn()};const i=(t,e,n)=>Math.hypot(Rt.x-t,Rt.z-e)<n;Bu.push(()=>Cn.kekeHot(),()=>fi.deedHot(),()=>Cn.hawkHot(),()=>ao.hot(),()=>i(-58,6.6,2.8)&&j.hour>=6&&j.hour<21?{label:"Work as Danfo conductor 🚌",act:Cn.startShift}:null,()=>i(-11,-12.6,2.4)?{label:"Buy pure water & gala to hawk 🧺",act:Cn.stockMenu}:null)}function zu(){if(me)return setTimeout(zu,3e3);Zt.ring(),Ge("📞 Incoming call: LapoPay Recovery",`"Hello ${j.s.name}, this na LapoPay. You owe <b>${et(j.s.loan)}</b> and you don pass due date. Pay today or our field agents go visit you. We fit even call your contacts o." 😬`,[{label:"Pay ₦1,000 now",disabled:j.s.cash<1e3,onClick:()=>{j.repay(1e3),_e('Agent: "Okay, we go extend am small." 3 more days',"good"),Ye()}},{label:"Pay everything",disabled:j.s.cash<j.s.loan,onClick:()=>{j.repay(j.s.loan),Ye()}},{label:"Abeg give me time 🙏",sub:"Dem go still come",close:!0},{label:"Hang up 📵",sub:"-1 mind",onClick:()=>{j.s.mood=Math.max(0,j.s.mood-1)}}],"warn")}function Hu(){Zt.setMuted(!Zt.muted),ot("muteBtn").textContent=Zt.muted?"🔇":"🔊"}ot("muteBtn").addEventListener("click",()=>{Zt.init(),Hu()});ot("radioBtn").addEventListener("click",()=>{if(Zt.init(),!j.s.items.radio)return _e("Your radio don seize by LapoPay agents 😭","bad");Zt.setRadio(!Zt.radioOn),ot("radioBtn").classList.toggle("on",Zt.radioOn),_e(Zt.radioOn?"📻 Wahala FM 104.0 — Afro vibes":"📻 Radio off")});addEventListener("pointerdown",()=>Zt.init(),{once:!1,passive:!0});let Rr=0,Pr=6,Lr=4;function Fv(i,t){if(!Zt.ctx)return;const e=Math.hypot(Rt.x-Kn.generator.x,Rt.z-Kn.generator.z);Zt.level("gen",j.genRunning?(j.s.quietGen?.15:1)*.25*Math.max(0,1-e/30):0);const n=Math.min(Math.hypot(Rt.x+21,Rt.z-15),Math.hypot(Rt.x-40,Rt.z-28)*1.3,Math.hypot(Rt.x-18,Rt.z+16)*1.4);Zt.level("crowd",.14*Math.max(0,1-n/26)*(j.isNight?.4:1)),(At==null?void 0:At.name)!=="keke"&&Zt.level("engine",(At==null?void 0:At.name)==="conductor"?.1:0),t>0&&nn.parent===Me&&(Rr-=i*t*2.2,Rr<=0&&(Rr=1,Zt.step_())),Pr-=i,Lr-=i,Pr<=0&&(Pr=5+Math.random()*9,Ee.vehicles.some(s=>s.mesh.position.distanceTo(Rt)<16)&&Zt.horn()),Lr<=0&&(Lr=6+Math.random()*8,Ee.vehicles.some(s=>s.type==="danfo"&&s.wait>0&&s.mesh.position.distanceTo(Rt)<18)&&Zt.conductor()),Zt.radioOn&&!j.s.items.radio&&(Zt.setRadio(!1),ot("radioBtn").classList.remove("on")),Zt.schedule()}Fu();function Vu(){In.aspect=innerWidth/innerHeight,In.fov=In.aspect<1?62:50,In.updateProjectionMatrix()}Vu();addEventListener("resize",()=>{ti.setSize(innerWidth,innerHeight),Vu(),Rs==="creator"&&Du()});window.wahala={get sim(){return j},start:(i=!0)=>Sc(i),setHour(i){const t=j.s;t.t=Math.floor(t.t/1440)*1440+Math.round(i*60),j.acc=0},setPower(i){j.setPower(i),Pi=i?1:0},teleport(i,t,e=0){Rt.set(i,0,t),Ue=e,In.position.set(i+Math.sin(e)*9,7,t+Math.cos(e)*9)},get world(){return Ee},get pos(){return Rt},openPhone:Ou,closePhone:Fi,closeModal:la,get G(){return xn},get H(){return Cn},get E(){return fi},get F(){return ao},get P(){return wc},get activity(){return(At==null?void 0:At.name)||null},get busy(){return me},setCam(i,t,e){Ue=i,t&&(Mo=t),e&&(bo=e)}};
