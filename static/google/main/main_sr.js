(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function e(a,v){a=a.split(".");var b=d;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===v?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=v};var f={0:"\u041f\u0440\u0435\u0432\u0435\u0434\u0438",1:"\u041e\u0442\u043a\u0430\u0436\u0438",2:"\u0417\u0430\u0442\u0432\u043e\u0440\u0438",3:function(a){return"Google \u0458\u0435 \u0430\u0443\u0442\u043e\u043c\u0430\u0442\u0441\u043a\u0438 \u043f\u0440\u0435\u0432\u0435\u043e \u043e\u0432\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043d\u0430: "+a},4:function(a){return"\u041f\u0440\u0435\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0430: "+a},5:"\u0413\u0440\u0435\u0448\u043a\u0430: \u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0438\u0458\u0435 \u043c\u043e\u0433\u0430\u043e \u0434\u0430 \u0438\u0441\u043f\u0443\u043d\u0438 \u0437\u0430\u0445\u0442\u0435\u0432. \u041f\u0440\u043e\u0431\u0430\u0458\u0442\u0435 \u043f\u043e\u043d\u043e\u0432\u043e \u043a\u0430\u0441\u043d\u0438\u0458\u0435.",
6:"\u0421\u0430\u0437\u043d\u0430\u0458\u0442\u0435 \u0432\u0438\u0448\u0435",7:function(a){return"\u041e\u043c\u043e\u0433\u0443\u045b\u0430\u0432\u0430 "+a},8:"\u041f\u0440\u0435\u0432\u043e\u0434\u0438\u043b\u0430\u0446",9:"\u041f\u0440\u0435\u0432\u043e\u0452\u0435\u045a\u0435 \u0458\u0435 \u0443 \u0442\u043e\u043a\u0443",10:function(a){return"\u0416\u0435\u043b\u0438\u0442\u0435 \u043b\u0438 \u0434\u0430 \u043f\u0440\u0435\u0432\u0435\u0434\u0435\u0442\u0435 \u043e\u0432\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043d\u0430: "+
(a+" \u043f\u043e\u043c\u043e\u045b\u0443 Google \u043f\u0440\u0435\u0432\u043e\u0434\u0438\u043e\u0446\u0430?")},11:function(a){return"\u041f\u0440\u0438\u043a\u0430\u0436\u0438 \u043e\u0432\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043d\u0430 \u0458\u0435\u0437\u0438\u043a\u0443: "+a},12:"\u041f\u0440\u0438\u043a\u0430\u0436\u0438 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b",13:"\u0421\u0430\u0434\u0440\u0436\u0430\u0458 \u043e\u0432\u0435 \u043b\u043e\u043a\u0430\u043b\u043d\u0435 \u0434\u0430\u0442\u043e\u0442\u0435\u043a\u0435 \u0431\u0438\u045b\u0435 \u043f\u043e\u0441\u043b\u0430\u0442 Google-\u0443 \u043d\u0430 \u043f\u0440\u0435\u0432\u043e\u0452\u0435\u045a\u0435 \u043f\u0440\u0435\u043a\u043e \u0431\u0435\u0437\u0431\u0435\u0434\u043d\u0435 \u0432\u0435\u0437\u0435.",
14:"\u0421\u0430\u0434\u0440\u0436\u0430\u0458 \u043e\u0432\u0435 \u0431\u0435\u0437\u0431\u0435\u0434\u043d\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0431\u0438\u045b\u0435 \u043f\u043e\u0441\u043b\u0430\u0442 Google-\u0443 \u043d\u0430 \u043f\u0440\u0435\u0432\u043e\u0452\u0435\u045a\u0435 \u043f\u0440\u0435\u043a\u043e \u0431\u0435\u0437\u0431\u0435\u0434\u043d\u0435 \u0432\u0435\u0437\u0435.",15:"\u0421\u0430\u0434\u0440\u0436\u0430\u0458 \u043e\u0432\u0435 \u0438\u043d\u0442\u0440\u0430\u043d\u0435\u0442 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0431\u0438\u045b\u0435 \u043f\u043e\u0441\u043b\u0430\u0442 Google-\u0443 \u0437\u0430 \u043f\u0440\u0435\u0432\u043e\u0434 \u043f\u0440\u0435\u043a\u043e \u0431\u0435\u0437\u0431\u0435\u0434\u043d\u0435 \u0432\u0435\u0437\u0435.",
16:"\u0418\u0437\u0430\u0431\u0435\u0440\u0438\u0442\u0435 \u0458\u0435\u0437\u0438\u043a",17:function(a){return"\u0418\u0441\u043a\u0459\u0443\u0447\u0438 \u043f\u0440\u0435\u0432\u043e\u0434 \u0441\u0430 \u0458\u0435\u0437\u0438\u043a\u0430: "+a},18:function(a){return"\u0418\u0441\u043a\u0459\u0443\u0447\u0438 \u0437\u0430: "+a},19:"\u0423\u0432\u0435\u043a \u0441\u0430\u043a\u0440\u0438\u0458",20:"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u043d\u0438 \u0442\u0435\u043a\u0441\u0442:",21:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u0435 \u0431\u043e\u0459\u0438 \u043f\u0440\u0435\u0432\u043e\u0434",
22:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438",23:"\u041f\u0440\u0435\u0432\u0435\u0434\u0438 \u0441\u0432\u0435",24:"\u0412\u0440\u0430\u0442\u0438 \u0441\u0432\u0435",25:"\u041e\u0442\u043a\u0430\u0436\u0438 \u0441\u0432\u0435",26:"\u041f\u0440\u0435\u0432\u0435\u0434\u0438 \u043e\u0434\u0435\u0459\u043a\u0435 \u043d\u0430 \u043c\u043e\u0458 \u0458\u0435\u0437\u0438\u043a",27:function(a){return"\u041f\u0440\u0435\u0432\u0435\u0434\u0438 \u0441\u0432\u0435 \u043d\u0430 "+a},28:"\u041f\u0440\u0438\u043a\u0430\u0436\u0438 \u0458\u0435\u0437\u0438\u043a\u0435 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u0430",
29:"\u041e\u043f\u0446\u0438\u0458\u0435",30:"\u0418\u0441\u043a\u0459\u0443\u0447\u0438 \u043f\u0440\u0435\u0432\u043e\u0434 \u0437\u0430 \u043e\u0432\u0430\u0458 \u0441\u0430\u0458\u0442",31:null,32:"\u041f\u0440\u0438\u043a\u0430\u0436\u0438 \u0430\u043b\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0435 \u043f\u0440\u0435\u0432\u043e\u0434\u0435",33:"\u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u0440\u0435\u0447\u0438 \u0438\u0437\u043d\u0430\u0434 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u0434\u043e\u0431\u0438\u043b\u0438 \u0430\u043b\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0435 \u043f\u0440\u0435\u0432\u043e\u0434\u0435",
34:"\u041a\u043e\u0440\u0438\u0441\u0442\u0438",35:"\u041f\u0440\u0435\u0432\u0443\u0446\u0438\u0442\u0435 \u0434\u0440\u0436\u0435\u045b\u0438 \u0442\u0430\u0441\u0442\u0435\u0440 shift \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u043b\u0438 \u0440\u0435\u0434\u043e\u0441\u043b\u0435\u0434",36:"\u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u0434\u043e\u0431\u0438\u043b\u0438 \u0430\u043b\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0435 \u043f\u0440\u0435\u0432\u043e\u0434\u0435",
37:"\u0414\u0440\u0436\u0438\u0442\u0435 \u043f\u0440\u0438\u0442\u0438\u0441\u043d\u0443\u0442 \u0442\u0430\u0441\u0442\u0435\u0440 shift, \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0438 \u043f\u0440\u0435\u0432\u0443\u0446\u0438\u0442\u0435 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u043b\u0438 \u0440\u0435\u0434\u043e\u0441\u043b\u0435\u0434 \u0440\u0435\u0447\u0438 \u0438\u0437\u043d\u0430\u0434.",38:"\u0425\u0432\u0430\u043b\u0430 \u0432\u0430\u043c \u043d\u0430 \u043f\u0440\u0435\u0434\u043b\u043e\u0433\u0443 \u043f\u0440\u0435\u0432\u043e\u0434\u0430 Google \u043f\u0440\u0435\u0432\u043e\u0434\u0438\u043e\u0446\u0443.",
39:"\u0423\u043f\u0440\u0430\u0432\u0459\u0430\u0458 \u043f\u0440\u0435\u0432\u043e\u0434\u043e\u043c \u0437\u0430 \u043e\u0432\u0430\u0458 \u0441\u0430\u0458\u0442",40:"\u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u0440\u0435\u0447 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u0434\u043e\u0431\u0438\u043b\u0438 \u0430\u043b\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0435 \u043f\u0440\u0435\u0432\u043e\u0434\u0435 \u0438\u043b\u0438 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0434\u0432\u0430\u043f\u0443\u0442 \u043d\u0430 \u045a\u0443 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u0458\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0438.",
41:"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u043d\u0438 \u0442\u0435\u043a\u0441\u0442",42:"\u041f\u0440\u0435\u0432\u043e\u0434\u0438\u043b\u0430\u0446",43:"\u041f\u0440\u0435\u0432\u0435\u0434\u0438",44:"\u0418\u0441\u043f\u0440\u0430\u0432\u043a\u0430 \u0458\u0435 \u043f\u043e\u0441\u043b\u0430\u0442\u0430.",45:"\u0413\u0440\u0435\u0448\u043a\u0430: \u0408\u0435\u0437\u0438\u043a \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043d\u0438\u0458\u0435 \u043f\u043e\u0434\u0440\u0436\u0430\u043d.",
46:"\u0412\u0438\u045f\u0435\u0442 \u0437\u0430 \u0458\u0435\u0437\u0438\u043a \u041f\u0440\u0435\u0432\u043e\u0434\u0438\u043e\u0446\u0430"};var g=window.google&&google.translate&&google.translate._const;
if(g){var h;a:{for(var k=[],l=[""],m=0;m<l.length;++m){var n=l[m].split(","),p=n[0];if(p){var q=Number(n[1]);if(!(!q||.1<q||0>q)){var r=Number(n[2]),t=new Date,u=1E4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();!r||r<u||k.push({version:p,ratio:q,a:r})}}}var w=0,x=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),y=Number(x&&x[1])||Math.random();for(m=0;m<k.length;++m){var z=k[m];w+=z.ratio;if(1<=w)break;if(y<w){h=z.version;break a}}h="TE_20200210_00"}var A="/element/%s/e/js/element/element_main.js".replace("%s",
h);if("0"==h){var B=" element %s e js element element_main.js".split(" ");B[B.length-1]="main_sr.js";A=B.join("/").replace("%s",h)}if(g._cjlc)g._cjlc(this.EDGE_TRANSLATE_URL + "google/element_main.js");else{var C=this.EDGE_TRANSLATE_URL + "google/element_main.js",D=document.createElement("script");D.type="text/javascript";D.charset="UTF-8";D.src=C;var E=document.getElementsByTagName("head")[0];E||(E=document.body.parentNode.appendChild(document.createElement("head")));E.appendChild(D)}e("google.translate.m",f);e("google.translate.v",h)};}).call(window)
