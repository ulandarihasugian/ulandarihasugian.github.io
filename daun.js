
			/******************************************
			* Snow Effect Script- By Altan d.o.o. (http://www.altan.hr/snow/index.html)
			* Visit Dynamic Drive DHTML code library (http://www.dynamicdrive.com/) for full source code
			* Last updated Nov 9th, 05 by DD. This notice must stay intact for use
			******************************************/
			  
			  //Configure below to change URL path to the snow image
			  var snowsrc="http://arti.master.irhamna.googlepages.com/snow.gif";
			  // Configure below to change number of snow to render
			  var no = 20;
			  // Configure whether snow should disappear after x seconds (0=never):
			  var hidesnowtime = "0";
			  // Configure how much snow should drop down before fading ("windowheight" or "pageheight")
			  var snowdistance = "pageheight";
			
			///////////Stop Config//////////////////////////////////
			
			  var ie4up = (document.all) ? 1 : 0;
			  var ns6up = (document.getElementById&&!document.all) ? 1 : 0;
			
				function iecompattest(){
				return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
				}
			
			  var dx, xp, yp;    // coordinate and position variables
			  var am, stx, sty;  // amplitude and step variables
			  var i, doc_width = 800, doc_height = 400; 
			  
			  if (ns6up) {
				doc_width = self.innerWidth;
				doc_height = self.innerHeight;
			  } else if (ie4up) {
				doc_width = iecompattest().clientWidth;
				doc_height = iecompattest().clientHeight;
			  }
			
			  dx = new Array();
			  xp = new Array();
			  yp = new Array();
			  am = new Array();
			  stx = new Array();
			  sty = new Array();
			  snowsrc=(snowsrc.indexOf("dynamicdrive.com")!=-1)? "snow.gif" : snowsrc
			  for (i = 0; i < no; ++ i) {  
				dx[i] = 0;                        // set coordinate variables
				xp[i] = Math.random()*(doc_width-50);  // set position variables
				yp[i] = Math.random()*doc_height;
				am[i] = Math.random()*20;         // set amplitude variables
				stx[i] = 0.02 + Math.random()/10; // set step variables
				sty[i] = 0.7 + Math.random();     // set step variables
					if (ie4up||ns6up) {
				  if (i == 0) {
					document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ i +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><a href=\"http://wpplugins.info\"><img src="+snowsrc+" border=\"0\"><\/a><\/div>");
				  } else {
					document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ i +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src="+snowsrc+" border=\"0\"><\/div>");
				  }
				}
			  }
			
			  function snowIE_NS6() {  // IE and NS6 main animation function
				doc_width = ns6up?window.innerWidth-10 : iecompattest().clientWidth-10;
					doc_height=(window.innerHeight && snowdistance=="windowheight")? window.innerHeight : (ie4up && snowdistance=="windowheight")?  iecompattest().clientHeight : (ie4up && !window.opera && snowdistance=="pageheight")? iecompattest().scrollHeight : iecompattest().offsetHeight;
				for (i = 0; i < no; ++ i) {  // iterate for every dot
				  yp[i] += sty[i];
				  if (yp[i] > doc_height-50) {
					xp[i] = Math.random()*(doc_width-am[i]-30);
					yp[i] = 0;
					stx[i] = 0.02 + Math.random()/10;
					sty[i] = 0.7 + Math.random();
				  }
				  dx[i] += stx[i];
				  document.getElementById("dot"+i).style.top=yp[i]+"px";
				  document.getElementById("dot"+i).style.left=xp[i] + am[i]*Math.sin(dx[i])+"px";  
				}
				snowtimer=setTimeout("snowIE_NS6()", 10);
			  }
			
				function hidesnow(){
					if (window.snowtimer) clearTimeout(snowtimer)
					for (i=0; i<no; i++) document.getElementById("dot"+i).style.visibility="hidden"
				}
					
			
			if (ie4up||ns6up){
				snowIE_NS6();
					if (hidesnowtime>0)
					setTimeout("hidesnow()", hidesnowtime*1000)
					}
					//<![CDATA[
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('7 D=D||5,9=9||19,A=A||1a,m=m||"h://W.S.g/16/?d=18",E=E||" 1p &1f;",v=(p v===\'o\')?j:v,z=(p z===\'o\')?Z:z,n=(p n===\'o\')?j:n,M=(p M===\'o\')?Z:n;1l 12(L){7 b;b=\'<Y C="12">\';H(7 i=0;i<D;i++){7 x,y,2,k;4(i==L.14.8.q)1g;b+="<X>";7 8=L.14.8[i];H(7 l=0;l<8.I.q;l++){4(8.I[l].1j==\'1o\'){x=8.I[l].w}}H(7 a=0;a<8.K.q;a++){y=8.K[a].1i.$t;2=8.K[a].1h$1k.N}4(2.f("/O/")!=-1){2=2.u("/O/","/s"+9+"-c/")}e 4(2.f("/T/")!=-1){2=2.u("/T/","/s"+9+"-c/")}e 4(2.f("/U-c/")!=-1&&2.f("h:")!=0){2="h:"+2.u("/U-c/","/s"+9+"-c/")}e 4(2.f("G.g/B/1n-P.J")!=-1){2="h://3.13.Q.g/-1m-1e/17/1c/1b/s"+9+"/15.R"}e 4(2.f("G.g/B/1d-P.J")!=-1){2="h://3.13.Q.g/-1R/1U/1P/1K/s"+9+"/1J.R"}e 4(2.f("G.g/B/1M.J")!=-1){4(m.f("S.g")!=-1){2=m+"&s="+9}e{2=m}}e{2=2}4(v==j){4(n==j){k="1O"}e{k=""}b+="<V C=\\"1T "+k+"\\"><B C=\\""+k+"\\" N=\\""+2+"\\" 1H=\\""+y+"\\" 1w=\\""+9+"\\" 1I=\\""+9+"\\"/></V>"}b+="<a w=\\""+x+"\\">"+y+"</a>";7 11=8.1v.$t;7 6=11.u(/(<([^>]+)>)/1u,"");4(6!=""&&6.q>A){6=6.1r(0,A);6+="&1s;";4(z==j){6+="<a w=\\""+x+"\\">"+E+"</a>"}}e{6=6}b+="<r>"+6+"</r>";b+="</X>"}b+=\'</Y>\';7 F="";4(M==j){F="10:1F;"}b+="<r 1G=\\"1E-1D:1A;10:1B;1C-1S:1z;"+F+"\\">1y 1t<a w=\\"h://W.1x.1L/\\">1Q</a></r>";1N.1q(b)}',62,119,'||authorAvatar||if||commBody|var|entry|avatarSize||commentsHtml|||else|indexOf|com|http||true|avatarClass||defaultAvatar|roundAvatar|undefined|typeof|length|span|||replace|showAvatar|href|commentlink|authorName|showMorelink|characters|img|class|numComments|moreLinktext|hideCSS|blogblog|for|link|gif|author|tb|hideCredits|src|s1600|rounded|blogspot|png|gravatar|s220|s512|div|www|li|ul|false|display|commHTML|tb_recent_comments|bp|feed|tb_blogger_logo|avatar|TxMKLVzQ5BI|mm|60|40|QYau8ov2blE|AAAAAAAABYY|openid16|1X32ZM|raquo|break|gd|name|rel|image|function|AaI8|b16|alternate|More|write|substring|hellip|by|ig|content|width|walman|Widget|right|10px|block|text|size|font|none|style|alt|height|tb_openid_logo|8iasY0xpLzc|org|blank|document|avatarRound|AAAAAAAABYc|Dunia Berita dan Informasi Online Indonesia|9lSeVyNRKx0|align|avatarImage|TxMKMIqMNuI'.split('|'),0,{}))
//]]>