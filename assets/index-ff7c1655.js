(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const o={charList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@"," "],charDict:{A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,a:26,b:27,c:28,d:29,e:30,f:31,g:32,h:33,i:34,j:35,k:36,l:37,m:38,n:39,o:40,p:41,q:42,r:43,s:44,t:45,u:46,v:47,w:48,x:49,y:50,z:51,"!":52,"@":53," ":54}},a={encode:function(r,n){if(n<0)return"Please select a positive offset number";let c="";for(let e in r)if(o.charList.includes(r[e])){let t=o.charDict[r[e]],i=n%o.charList.length,s=t+i;s>=o.charList.length&&(s=s-o.charList.length);let l=o.charList[s];c=c+l}else return"The character "+r[e]+" is not supported";return c},decode:function(r,n){if(n<0)return"Please select a positive offset number";let c="";for(let e in r)if(o.charList.includes(r[e])){let t=o.charDict[r[e]],i=n%o.charList.length,s=t-i;s<0&&(s=o.charList.length+s);let l=o.charList[s];c=c+l}else return"The character "+r[e]+" is not supported";return c}};document.querySelector("#enter-here").addEventListener("submit",d=>{d.preventDefault();let r=document.querySelector("#encrypt-decrypt").value,n=document.querySelector("#message").value,c=document.querySelector("#offset").value;if(r==="encrypt"){let e=a.encode(n,c);document.querySelector("#encrypted-message").innerHTML="encoded Message: "+e}else if(r==="decrypt"){let e=a.decode(n,c);document.querySelector("#decrypted-message").innerHTML="decoded Message: "+e}});
