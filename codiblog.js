var nopage,jenis,nomerhal,lblname1;halamanblogger();
function loophalaman(a){var b="";nomerkiri=parseInt(numshowpage/2);nomerkiri==numshowpage-nomerkiri&&(numshowpage=2*nomerkiri+1);mulai=nomerhal-nomerkiri;1>mulai&&(mulai=1);maksimal=parseInt(a/postperpage)+1;maksimal-1==a/postperpage&&--maksimal;akhir=mulai+numshowpage-1;akhir>maksimal&&(akhir=maksimal);b+="<span class='showpageOf'>Page "+nomerhal+" of "+maksimal+"</span>";a=parseInt(nomerhal)-1;1<nomerhal&&(b=2==nomerhal?"page"==jenis?b+('<span class="showpage"><a href="'+home_page+'">'+upPageWord+
"</a></span>"):b+('<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">'+upPageWord+"</a></span>"):"page"==jenis?b+('<span class="showpageNum"><a href="#" onclick="redirectpage('+a+');return false">'+upPageWord+"</a></span>"):b+('<span class="showpageNum"><a href="#" onclick="redirectlabel('+a+');return false">'+upPageWord+"</a></span>"));1<mulai&&(b="page"==jenis?b+('<span class="showpageNum"><a href="'+home_page+'">1</a></span>'):b+('<span class="showpageNum"><a href="/search/label/'+
lblname1+"?&max-results="+postperpage+'">1</a></span>'));2<mulai&&(b+=" ... ");for(a=mulai;a<=akhir;a++)b=nomerhal==a?b+('<span class="showpagePoint">'+a+"</span>"):1==a?"page"==jenis?b+('<span class="showpageNum"><a href="'+home_page+'">1</a></span>'):b+('<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">1</a></span>'):"page"==jenis?b+('<span class="showpageNum"><a href="#" onclick="redirectpage('+a+');return false">'+a+"</a></span>"):b+('<span class="showpageNum"><a href="#" onclick="redirectlabel('+
a+');return false">'+a+"</a></span>");akhir<maksimal-1&&(b+="...");akhir<maksimal&&(b="page"==jenis?b+('<span class="showpageNum"><a href="#" onclick="redirectpage('+maksimal+');return false">'+maksimal+"</a></span>"):b+('<span class="showpageNum"><a href="#" onclick="redirectlabel('+maksimal+');return false">'+maksimal+"</a></span>"));a=parseInt(nomerhal)+1;nomerhal<maksimal&&(b="page"==jenis?b+('<span class="showpageNum"><a href="#" onclick="redirectpage('+a+');return false">'+downPageWord+"</a></span>"):
b+('<span class="showpageNum"><a href="#" onclick="redirectlabel('+a+');return false">'+downPageWord+"</a></span>"));a=document.getElementsByName("pageArea");for(var d=document.getElementById("blog-pager"),e=0;e<a.length;e++)a[e].innerHTML=b;a&&0<a.length&&(b="");d&&(d.innerHTML=b)}function hitungtotaldata(a){a=parseInt(a.feed.openSearch$totalResults.$t,10);loophalaman(a)}
function halamanblogger(){var a=urlactivepage;-1!=a.indexOf("/search/label/")&&(lblname1=-1!=a.indexOf("?updated-max")?a.substring(a.indexOf("/search/label/")+14,a.indexOf("?updated-max")):a.substring(a.indexOf("/search/label/")+14,a.indexOf("?&max")));-1==a.indexOf("?q=")&&-1==a.indexOf(".html")&&(-1==a.indexOf("/search/label/")?(jenis="page",nomerhal=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+
home_page+'feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata">\x3c/script>')):(jenis="label",-1==a.indexOf("&max-results=")&&(postperpage=20),nomerhal=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+home_page+"feeds/posts/summary/-/"+lblname1+'?alt=json-in-script&callback=hitungtotaldata&max-results=1" >\x3c/script>')))}
function redirectpage(a){jsonstart=(a-1)*postperpage;nopage=a;a=document.getElementsByTagName("head")[0];var b=document.createElement("script");b.type="text/javascript";b.setAttribute("src",home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost");a.appendChild(b)}
function redirectlabel(a){jsonstart=(a-1)*postperpage;nopage=a;a=document.getElementsByTagName("head")[0];var b=document.createElement("script");b.type="text/javascript";b.setAttribute("src",home_page+"feeds/posts/summary/-/"+lblname1+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost");a.appendChild(b)}
function finddatepost(a){post=a.feed.entry[0];a=post.published.$t.substring(0,19)+post.published.$t.substring(23,29);a=encodeURIComponent(a);location.href="page"==jenis?"/search?updated-max="+a+"&max-results="+postperpage+"#PageNo="+nopage:"/search/label/"+lblname1+"?updated-max="+a+"&max-results="+postperpage+"#PageNo="+nopage}
eval(function(a,b,d,e,k,p){k=function(a){return(a<b?"":k(parseInt(a/b)))+(35<(a%=b)?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){for(;d--;)p[k(d)]=e[d]||k(d);e=[function(a){return p[a]}];k=function(){return"\\w+"};d=1}for(;d--;)e[d]&&(a=a.replace(new RegExp("\\b"+k(d)+"\\b","g"),e[d]));return a}("(4($){$.3={l:{g:'N J I',f:G,n:A,r:'z',d:'9'},i:4(5){1=$.x({},$.3.l,5),$.3.m();c(1.f)$(w).F(4(){c($(u).q()!=0){k(1.d){8'p':2.v('7');6;8'9':2.y('7');6;s:2.o()}}B{k(1.d){8'p':2.C('7');6;8'9':2.D('7');6;s:2.E()}}});$('#3').t(4(e){e.H();$('b,j').K({q:0},1.n,1.r)})},m:4(){2=$('<a />',{L:'3',M:'#b',j:'<h>'+1.g+'</h>'}).O('b');c(!1.f)2.o()}};3=4(5){$.3.i(5)}})(P);",
52,52," opts divBack BackToTop function options break fast case slide  body if appearMethod  autoShow text span init html switch defaults _constructLink timeEffect show fade scrollTop effectScroll default click this fadeIn window extend slideDown linear 500 else fadeOut slideUp hide scroll true preventDefault top to animate id href Back prependTo jQuery".split(" "),0,{}));jQuery(document).ready(function(a){BackToTop({autoShow:!0,text:".",timeEffect:600})});
(function(a){a.fn.scrollTo=function(b){var d={offset:0,speed:"slow",override:null,easing:null};b&&(b.override&&(b.override=-1!=override("#")?b.override:"#"+b.override),a.extend(d,b));return this.each(function(b,k){a(k).click(function(b){b.preventDefault();var e=d.override?d.override:a(k).attr("href");history.pushState?(history.pushState(null,null,e),console.log(d.easing),a("html,body").stop().animate({scrollTop:a(e).offset().top+d.offset},d.speed,d.easing)):a("html,body").stop().animate({scrollTop:a(e).offset().top+
d.offset},d.speed,d.easing,function(){window.location.hash=e})})})}})(jQuery);$("#scrollTo").scrollTo({speed:2E3});$("#scrollToComment").scrollTo({speed:2E3});
(function(a){function b(a,b){b=b?b:window.location.search;var k=new RegExp("&"+a+"=([^&]*)","i");return(b=b.replace(/^\?/,"&").match(k))?b[1]:""}a.fn.tytabs=function(d){var e=a.extend({},{prefixtabs:"tab",prefixcontent:"content",classcontent:"tabscontent",tabinit:"1",catchget:"tab",fadespeed:"normal"},d);return this.each(function(){function d(b){a(e.classcontent,p).stop(!0,!0);var k=a(e.classcontent+":visible",p);0<k.length?k.fadeOut(e.fadespeed,function(){a(e.prefixcontent+b,p).fadeIn(e.fadespeed)}):
a(e.prefixcontent+b,p).fadeIn(e.fadespeed);a("#"+e.prefixtabs+e.tabinit).removeAttr("class");a("#"+e.prefixtabs+b).attr("class","current");e.tabinit=b}var p=a(this);e.classcontent="."+e.classcontent;e.prefixcontent="#"+e.prefixcontent;a("ul.tabs li",p).click(function(){d(a(this).attr("id").replace(e.prefixtabs,""));return!1});var r=b(e.catchget);d(r&&1==a(e.prefixcontent+r).length?r:1==a(e.prefixcontent+e.tabinit).length?e.tabinit:"1")})}})(jQuery);
$(document).ready(function(){$("#tabsholder").tytabs({tabinit:"2",fadespeed:"fast"});$("#tabsholder2").tytabs({prefixtabs:"tabz",prefixcontent:"contentz",classcontent:"tabscontent",tabinit:"3",catchget:"tab2",fadespeed:"normal"})});
window.Rainbow=function(){function a(a){var b,c=a.getAttribute&&a.getAttribute("data-language")||0;if(!c)for(a=a.attributes,b=0;b<a.length;++b)if("data-language"===a[b].nodeName)return a[b].nodeValue;return c}function b(b){var c=a(b)||a(b.parentNode);if(!c){var g=/\blang(?:uage)?-(\w+)/;(b=b.className.match(g)||b.parentNode.className.match(g))&&(c=b[1])}return c}function d(a,b){for(var c in g[f]){c=parseInt(c,10);if(a==c&&b==g[f][c]?0:a<=c&&b>=g[f][c])delete g[f][c],delete l[f][c];if(a>=c&&a<g[f][c]||
b>c&&b<g[f][c])return!0}return!1}function e(a,b){return'<span class="'+a.replace(/\./g," ")+(B?" "+B:"")+'">'+b+"</span>"}function k(a,b,c,q){if("undefined"===typeof a||null===a)q();else{var x=a.exec(c);if(x){++E;!b.name&&"string"==typeof b.matches[0]&&(b.name=b.matches[0],delete b.matches[0]);var n=x[0],z=x.index,y=x[0].length+z,F=function(){function g(){k(a,b,c,q)}0<E%100?g():setTimeout(g,0)};if(d(z,y))F();else{var u=p(b.matches),v=function(a,c,g){if(a>=c.length)g(n);else{var d=x[c[a]];if(d){var m=
b.matches[c[a]],D=m.language,f=m.name&&m.matches?m.matches:m,q=function(b,d,m){var f;f=0;var q;for(q=1;q<c[a];++q)x[q]&&(f+=x[q].length);d=m?e(m,d):d;n=n.substr(0,f)+n.substr(f).replace(b,d);v(++a,c,g)};D?t(d,D,function(a){q(d,a)}):"string"===typeof m?q(d,d,m):r(d,f.length?f:[f],function(a){q(d,a,m.matches?m.name:0)})}else v(++a,c,g)}};v(0,u,function(a){b.name&&(a=e(b.name,a));l[f]||(l[f]={},g[f]={});l[f][z]={replace:x[0],"with":a};g[f][z]=y;F()})}}else q()}}function p(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&
b.push(c);return b.sort(function(a,b){return b-a})}function r(a,b,c){function d(b,e){e<b.length?k(b[e].pattern,b[e],a,function(){d(b,++e)}):A(a,function(a){delete l[f];delete g[f];--f;c(a)})}++f;d(b,0)}function A(a,b){function c(a,b,g,d){if(g<b.length){++G;var e=b[g],m=l[f][e];a=a.substr(0,e)+a.substr(e).replace(m.replace,m["with"]);e=function(){c(a,b,++g,d)};0<G%250?e():setTimeout(e,0)}else d(a)}var g=p(l[f]);c(a,g,0,b)}function t(a,b,g){var d=c[b]||[],e=c[y]||[];b=n[b]?d:d.concat(e);r(a.replace(/</g,
"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,"&amp;"),b,g)}function u(a,c,d){if(c<a.length){var e=a[c],f=b(e);return-1<(" "+e.className+" ").indexOf(" rainbow ")||!f?u(a,++c,d):(f=f.toLowerCase(),e.className+=e.className?" rainbow":"rainbow",t(e.innerHTML,f,function(b){e.innerHTML=b;l={};g={};C&&C(e,f);setTimeout(function(){u(a,++c,d)},0)}))}d&&d()}function v(a,b){a=a&&"function"==typeof a.getElementsByTagName?a:document;var c=a.getElementsByTagName("pre"),g=a.getElementsByTagName("code"),
d,e=[],f=[];for(d=0;d<c.length;++d)c[d].getElementsByTagName("code").length?c[d].innerHTML=c[d].innerHTML.replace(/^\s+/,"").replace(/\s+$/,""):e.push(c[d]);for(d=0;d<g.length;++d)f.push(g[d]);u(f.concat(e),0,b)}var l={},g={},c={},n={},f=0,y=0,E=0,G=0,B,C;return{extend:function(a,b,d){1==arguments.length&&(b=a,a=y);n[a]=d;c[a]=b.concat(c[a]||[])},c:function(a){C=a},a:function(a){B=a},color:function(a,b,c){if("string"==typeof a)return t(a,b,c);if("function"==typeof a)return v(0,a);v(a,b)}}}();
document.addEventListener?document.addEventListener("DOMContentLoaded",Rainbow.color,!1):window.attachEvent("onload",Rainbow.color);Rainbow.onHighlight=Rainbow.c;Rainbow.addClass=Rainbow.a;
Rainbow.extend("c",[{name:"meta.preprocessor",matches:{1:[{matches:{1:"keyword.define",2:"entity.name"},pattern:/(\w+)\s(\w+)\b/g},{name:"keyword.define",pattern:/endif/g},{name:"constant.numeric",pattern:/\d+/g},{matches:{1:"keyword.include",2:"string"},pattern:/(include)\s(.*?)$/g}]},pattern:/\#([\S\s]*?)$/gm},{name:"keyword",pattern:/\b(do|goto|typedef)\b/g},{name:"entity.label",pattern:/\w+:/g},{matches:{1:"storage.type",3:"storage.type",4:"entity.name.function"},pattern:/\b((un)?signed|const)? ?(void|char|short|int|long|float|double)\*? +((\w+)(?= ?\())?/g},
{matches:{2:"entity.name.function"},pattern:/(\w|\*) +((\w+)(?= ?\())/g},{name:"storage.modifier",pattern:/\b(static|extern|auto|register|volatile|inline)\b/g},{name:"support.type",pattern:/\b(struct|union|enum)\b/g}]);
Rainbow.extend("java",[{name:"constant",pattern:/\b(false|null|true|[A-Z_]+)\b/g},{b:{1:"keyword",2:"support.namespace"},pattern:/(import|package)\s(.+)/g},{name:"keyword",pattern:/\b(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/g},{name:"string",
pattern:/(".*?")/g},{name:"char",pattern:/(')(.|\\.|\\u[\dA-Fa-f]{4})\1/g},{name:"integer",pattern:/\b(0x[\da-f]+|\d+)L?\b/g},{name:"comment",pattern:/\/\*[\s\S]*?\*\/|(\/\/).*?$/gm},{name:"support.annotation",pattern:/@\w+/g},{b:{1:"entity.function"},pattern:/([^@\.\s]+)\(/g},{name:"entity.class",pattern:/\b([A-Z]\w*)\b/g},{name:"operator",pattern:/(\+{1,2}|-{1,2}|~|!|\*|\/|%|(?:&lt;){1,2}|(?:&gt;){1,3}|instanceof|(?:&amp;){1,2}|\^|\|{1,2}|\?|:|(?:=|!|\+|-|\*|\/|%|\^|\||(?:&lt;){1,2}|(?:&gt;){1,3})?=)/g}],
!0);
Rainbow.extend([{matches:{1:[{name:"keyword.operator",pattern:/\=|\+/g},{name:"keyword.dot",pattern:/\./g}],2:{name:"string",matches:{name:"constant.character.escape",pattern:/\\('|"){1}/g}}},pattern:/(\(|\s|\[|\=|:|\+|\.)(('|")([^\\\1]|\\.)*?(\3))/gm},{name:"comment",pattern:/\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm},{name:"constant.numeric",pattern:/\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi},{matches:{1:"keyword"},pattern:/\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi},{name:"constant.language",
pattern:/true|false|null/g},{name:"keyword.operator",pattern:/\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g},{matches:{1:"function.call"},pattern:/(\w+?)(?=\()/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(function)\s(.*?)(?=\()/g}]);
Rainbow.extend("javascript",[{name:"selector",pattern:/(\s|^)\$(?=\.|\()/g},{name:"support",pattern:/\b(window|document)\b/g},{matches:{1:"support.property"},pattern:/\.(length|node(Name|Value))\b/g},{matches:{1:"support.function"},pattern:/(setTimeout|setInterval)(?=\()/g},{matches:{1:"support.method"},pattern:/\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g},{name:"string.regexp",matches:{1:"string.regexp.open",2:{name:"constant.regexp.escape",pattern:/\\(.){1}/g},
3:"string.regexp.close",4:"string.regexp.modifier"},pattern:/(\/)(?!\*)(.+)(\/)([igm]{0,3})/g},{matches:{1:"storage",3:"entity.function"},pattern:/(var)?(\s|^)(\S*)(?=\s?=\s?function\()/g},{matches:{1:"keyword",2:"entity.function"},pattern:/(new)\s+(.*)(?=\()/g},{name:"entity.function",pattern:/(\w+)(?=:\s{0,}function)/g}]);
Rainbow.extend("python",[{name:"variable.self",pattern:/self/g},{name:"constant.language",pattern:/None|True|False|NotImplemented|\.\.\./g},{name:"support.object",pattern:/object/g},{name:"support.function.python",pattern:/\b(bs|divmod|input|open|staticmethod|all|enumerate|int|ord|str|any|eval|isinstance|pow|sum|basestring|execfile|issubclass|print|super|bin|file|iter|property|tuple|bool|filter|len|range|type|bytearray|float|list|raw_input|unichr|callable|format|locals|reduce|unicode|chr|frozenset|long|reload|vars|classmethod|getattr|map|repr|xrange|cmp|globals|max|reversed|zip|compile|hasattr|memoryview|round|__import__|complex|hash|min|set|apply|delattr|help|next|setattr|buffer|dict|hex|object|slice|coerce|dir|id|oct|sorted|intern)(?=\()/g},
{matches:{1:"keyword"},pattern:/\b(pass|lambda|with|is|not|in|from|elif|raise|del)(?=\(|\b)/g},{matches:{1:"storage.class",2:"entity.name.class",3:"entity.other.inherited-class"},pattern:/(class)\s+(\w+)\((\w+?)\)/g},{matches:{1:"storage.function",2:"support.magic"},pattern:/(def)\s+(__\w+)(?=\()/g},{name:"support.magic",pattern:/__(name)__/g},{matches:{1:"keyword.control",2:"support.exception.type"},pattern:/(except) (\w+):/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(def)\s+(\w+)(?=\()/g},
{name:"entity.name.function.decorator",pattern:/@([\w\.]+)/g},{name:"comment.docstring",pattern:/('{3}|"{3})[\s\S]*?\1/gm}]);
Rainbow.extend("html",[{name:"source.php.embedded",matches:{2:{language:"php"}},pattern:/&lt;\?=?(?!xml)(php)?([\s\S]*?)(\?&gt;)/gm},{name:"source.css.embedded",matches:{1:{matches:{1:"support.tag.style",2:[{name:"entity.tag.style",pattern:/^style/g},{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.style.attribute",pattern:/(\w+)/g}],3:"support.tag.style"},pattern:/(&lt;\/?)(style.*?)(&gt;)/g},2:{language:"css"},3:"support.tag.style",4:"entity.tag.style",5:"support.tag.style"},pattern:/(&lt;style.*?&gt;)([\s\S]*?)(&lt;\/)(style)(&gt;)/gm},
{name:"source.js.embedded",matches:{1:{matches:{1:"support.tag.script",2:[{name:"entity.tag.script",pattern:/^script/g},{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.script.attribute",pattern:/(\w+)/g}],3:"support.tag.script"},pattern:/(&lt;\/?)(script.*?)(&gt;)/g},2:{language:"javascript"},3:"support.tag.script",4:"entity.tag.script",5:"support.tag.script"},pattern:/(&lt;script(?! src).*?&gt;)([\s\S]*?)(&lt;\/)(script)(&gt;)/gm},{name:"comment.html",pattern:/&lt;\!--[\S\s]*?--&gt;/g},
{matches:{1:"support.tag.open",2:"support.tag.close"},pattern:/(&lt;)|(\/?\??&gt;)/g},{name:"support.tag",matches:{1:"support.tag",2:"support.tag.special",3:"support.tag-name"},pattern:/(&lt;\??)(\/|\!?)(\w+)/g},{matches:{1:"support.attribute"},pattern:/([a-z-]+)(?=\=)/gi},{matches:{1:"support.operator",2:"string.quote",3:"string.value",4:"string.quote"},pattern:/(=)('|")(.*?)(\2)/g},{matches:{1:"support.operator",2:"support.value"},pattern:/(=)([a-zA-Z\-0-9]*)\b/g},{matches:{1:"support.attribute"},
pattern:/\s(\w+)(?=\s|&gt;)(?![\s\S]*&lt;)/g}],!0);
Rainbow.extend("csharp",[{name:"constant",pattern:/\b(false|null|true)\b/g},{name:"keyword",pattern:/\b(abstract|add|alias|ascending|as|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|double|do|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|foreach|for|from|get|global|goto|group|if|implicit|int|interface|internal|into|in|is|join|let|lock|long|namespace|new|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|try|typeof|uint|unchecked|ulong|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/g},{matches:{1:"keyword",
2:{name:"support.class",pattern:/\w+/g}},pattern:/(typeof)\s([^\$].*?)(\)|;)/g},{matches:{1:"keyword.namespace",2:{name:"support.namespace",pattern:/\w+/g}},pattern:/\b(namespace)\s(.*?);/g},{matches:{1:"storage.modifier",2:"storage.class",3:"entity.name.class",4:"storage.modifier.extends",5:"entity.other.inherited-class"},pattern:/\b(abstract|sealed)?\s?(class)\s(\w+)(\sextends\s)?([\w\\]*)?\s?\{?(\n|\})/g},{name:"keyword.static",pattern:/\b(static)\b/g},{matches:{1:"keyword.new",2:{name:"support.class",
pattern:/\w+/g}},pattern:/\b(new)\s([^\$].*?)(?=\)|\(|;|&)/g},{name:"string",pattern:/(")(.*?)\1/g},{name:"integer",pattern:/\b(0x[\da-f]+|\d+)\b/g},{name:"comment",pattern:/\/\*[\s\S]*?\*\/|(\/\/)[\s\S]*?$/gm},{name:"operator",pattern:/(\+\+|\+=|\+|--|-=|-|&lt;&lt;=|&lt;&lt;|&lt;=|=&gt;|&gt;&gt;=|&gt;&gt;|&gt;=|!=|!|~|\^|\|\||&amp;&amp;|&amp;=|&amp;|\?\?|::|:|\*=|\*|\/=|%=|\|=|==|=)/g},{name:"preprocessor",pattern:/(\#if|\#else|\#elif|\#endif|\#define|\#undef|\#warning|\#error|\#line|\#region|\#endregion|\#pragma)[\s\S]*?$/gm}],
!0);
Rainbow.extend("php",[{name:"support",pattern:/\becho\b/g},{matches:{1:"variable.dollar-sign",2:"variable"},pattern:/(\$)(\w+)\b/g},{name:"constant.language",pattern:/true|false|null/ig},{name:"constant",pattern:/\b[A-Z0-9_]{2,}\b/g},{name:"keyword.dot",pattern:/\./g},{name:"keyword",pattern:/\b(die|end(for(each)?|switch|if)|case|require(_once)?|include(_once)?)(?=\(|\b)/g},{matches:{1:"keyword",2:{name:"support.class",pattern:/\w+/g}},pattern:/(instanceof)\s([^\$].*?)(\)|;)/g},{matches:{1:"support.function"},pattern:/\b(array(_key_exists|_merge|_keys|_shift)?|isset|count|empty|unset|printf|is_(array|string|numeric|object)|sprintf|each|date|time|substr|pos|str(len|pos|tolower|_replace|totime)?|ord|trim|in_array|implode|end|preg_match|explode|fmod|define|link|list|get_class|serialize|file|sort|mail|dir|idate|log|intval|header|chr|function_exists|dirname|preg_replace|file_exists)(?=\()/g},
{name:"variable.language.php-tag",pattern:/(&lt;\?(php)?|\?&gt;)/g},{matches:{1:"keyword.namespace",2:{name:"support.namespace",pattern:/\w+/g}},pattern:/\b(namespace|use)\s(.*?);/g},{matches:{1:"storage.modifier",2:"storage.class",3:"entity.name.class",4:"storage.modifier.extends",5:"entity.other.inherited-class",6:"storage.modifier.extends",7:"entity.other.inherited-class"},pattern:/\b(abstract|final)?\s?(class|interface|trait)\s(\w+)(\sextends\s)?([\w\\]*)?(\simplements\s)?([\w\\]*)?\s?\{?(\n|\})/g},
{name:"keyword.static",pattern:/self::|static::/g},{matches:{1:"storage.function",2:"support.magic"},pattern:/(function)\s(__.*?)(?=\()/g},{matches:{1:"keyword.new",2:{name:"support.class",pattern:/\w+/g}},pattern:/\b(new)\s([^\$].*?)(?=\)|\(|;)/g},{matches:{1:{name:"support.class",pattern:/\w+/g},2:"keyword.static"},pattern:/([\w\\]*?)(::)(?=\b|\$)/g},{matches:{2:{name:"support.class",pattern:/\w+/g}},pattern:/(\(|,\s?)([\w\\]*?)(?=\s\$)/g}]);
Rainbow.extend("css",[{name:"comment",pattern:/\/\*[\s\S]*?\*\//gm},{name:"constant.hex-color",pattern:/#([a-f0-9]{3}|[a-f0-9]{6})(?=;|\s|,|\))/gi},{matches:{1:"constant.numeric",2:"keyword.unit"},pattern:/(\d+)(px|em|cm|s|%)?/g},{name:"string",pattern:/('|")(.*?)\1/g},{name:"support.css-property",matches:{1:"support.vendor-prefix"},pattern:/(-o-|-moz-|-webkit-|-ms-)?[\w-]+(?=\s?:)(?!.*\{)/g},{matches:{1:[{name:"entity.name.sass",pattern:/&amp;/g},{name:"direct-descendant",pattern:/&gt;/g},{name:"entity.name.class",
pattern:/\.[\w\-_]+/g},{name:"entity.name.id",pattern:/\#[\w\-_]+/g},{name:"entity.name.pseudo",pattern:/:[\w\-_]+/g},{name:"entity.name.tag",pattern:/\w+/g}]},pattern:/([\w\ ,\n:\.\#\&\;\-_]+)(?=.*\{)/g},{matches:{2:"support.vendor-prefix",3:"support.css-value"},pattern:/(:|,)\s*(-o-|-moz-|-webkit-|-ms-)?([a-zA-Z-]*)(?=\b)(?!.*\{)/g}],!0);
$(document).ready(function(){$("#PopularPosts1").find("img").each(function(a,b){b=$(b);b.attr({src:b.attr("src").replace(/w72-h72-p-nu/,"w110-h85-c")});b.attr("width",110);b.attr("height",85)})});$(document).ready(function(){$(".comment").find("img").each(function(a,b){b=$(b);b.attr({src:b.attr("src").replace(/s35/,"w70-h70")});b.attr("width",70);b.attr("height",70)})});
jQuery(document).ready(function(){jQuery("ul.header-menu-left").superfish({delay:200,speed:"fast",autoArrows:!0,dropShadows:!1,disableHI:!0});jQuery("ul.header-menu-right").superfish({delay:200,speed:"fast",autoArrows:!1,dropShadows:!1,disableHI:!0})});
(function(a){var b=function(){var b=/iPhone|iPad|iPod/i.test(navigator.userAgent),e=function(){var a=document.documentElement.style;return"behavior"in a&&"fill"in a&&/iemobile/i.test(navigator.userAgent)}();(function(){b&&a(window).load(function(){a("body").children().on("click",a.noop)})})();var k=function(a,b){var d="sf-js-enabled";b.cssArrows&&(d+=" sf-arrows");a.toggleClass(d)},p=function(b,c){return b.find("li."+c.pathClass).slice(0,c.pathLevels).addClass(c.hoverClass+" sf-breadcrumb").filter(function(){return a(this).children("ul").hide().show().length}).removeClass(c.pathClass)},
r=function(a){var b=a.css("ms-touch-action");a.css("ms-touch-action","pan-y"===b?"auto":"pan-y")},A=function(b){var c=a(this),d=c.siblings("ul");0<d.length&&d.is(":hidden")&&(c.one("click.superfish",!1),"MSPointerDown"===b.type?c.trigger("focus"):a.proxy(t,c.parent("li"))())},t=function(){var b=a(this),c=l(b);clearTimeout(c.sfTimer);b.siblings().superfish("hide").end().superfish("show")},u=function(){var e=a(this),c=l(e);b?a.proxy(v,e,c)():(clearTimeout(c.sfTimer),c.sfTimer=setTimeout(a.proxy(v,e,
c),c.delay))},v=function(b){b.retainPath=-1<a.inArray(this[0],b.$path);this.superfish("hide");this.parents("."+b.hoverClass).length||(b.onIdle.call(this.closest(".sf-js-enabled")),b.$path.length&&a.proxy(t,b.$path)())},l=function(a){return a.closest(".sf-js-enabled").data("sf-options")};return{hide:function(b){if(this.length){var c=l(this);if(!c)return this;var d=!0===c.retainPath?c.$path:"",d=this.find("li."+c.hoverClass).add(this).not(d).removeClass(c.hoverClass).children("ul"),e=c.speedOut;b&&
(d.show(),e=0);c.retainPath=!1;c.onBeforeHide.call(d);d.stop(!0,!0).animate(c.animationOut,e,function(){var b=a(this);c.onHide.call(b)})}return this},show:function(){var a=l(this);if(!a)return this;var b=this.addClass(a.hoverClass).children("ul");a.onBeforeShow.call(b);b.stop(!0,!0).animate(a.animation,a.speed,function(){a.onShow.call(b)});return this},destroy:function(){return this.each(function(){var b=a(this),c=b.data("sf-options"),d=b.find("li:has(ul)");if(!c)return!1;clearTimeout(c.sfTimer);
k(b,c);d.children("a").toggleClass("sf-with-ul");r(b);b.off(".superfish").off(".hoverIntent");d.children("ul").attr("style",function(a,b){return b.replace(/display[^;]+;?/g,"")});c.$path.removeClass(c.hoverClass+" sf-breadcrumb").addClass(c.pathClass);b.find("."+c.hoverClass).removeClass(c.hoverClass);c.onDestroy.call(b);b.removeData("sf-options")})},init:function(g){return this.each(function(){var c=a(this);if(c.data("sf-options"))return!1;var n=a.extend({},a.fn.superfish.defaults,g),f=c.find("li:has(ul)");
n.$path=p(c,n);c.data("sf-options",n);k(c,n);f.children("a").toggleClass("sf-with-ul");r(c);if(a.fn.hoverIntent&&!n.disableHI)c.hoverIntent(t,u,"li:has(ul)");else c.on("mouseenter.superfish","li:has(ul)",t).on("mouseleave.superfish","li:has(ul)",u);var l="MSPointerDown.superfish";b||(l+=" touchend.superfish");e&&(l+=" mousedown.superfish");c.on("focusin.superfish","li",t).on("focusout.superfish","li",u).on(l,"a",A);f.not(".sf-breadcrumb").superfish("hide",!0);n.onInit.call(this)})}}}();a.fn.superfish=
function(d,e){return b[d]?b[d].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==typeof d&&d?a.error("Method "+d+" does not exist on jQuery.fn.superfish"):b.init.apply(this,arguments)};a.fn.superfish.defaults={hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:a.noop,onBeforeShow:a.noop,onShow:a.noop,onBeforeHide:a.noop,onHide:a.noop,onIdle:a.noop,
onDestroy:a.noop};a.fn.extend({hideSuperfishUl:b.hide,showSuperfishUl:b.show})})(jQuery);var oetag=0,oetagname="video",oetube=-1;function oe_loadscript(a){var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("src",a);document.getElementsByTagName("head")[0].appendChild(b)}function oe_jumptohash(){window.scrollTo(0,$("#"+window.location.hash.replace(/^#/,"")).offset().top)}var oe_tid,oe_elems={};
function oembed_callback(a){revurl=a.url.split("").reverse().join("");html=oe_elems[a.callID].html();ee=$(a.html);w=parseInt(ee.attr("width"));h=parseInt(ee.attr("height"));1==oetube&&(src=ee.attr("src"),src+=(-1==src.indexOf("?")?"?":"&")+"autoplay=1",ee.attr("src",src),ee.attr("style","vertical-align:top;"),htm=$("<div/>").append(ee).html(),htm=$("<div/>").text(htm).html().replace(/"/g,"&quot;"),a.html='<a href="'+a.url+'" class="youtube-tube-link" style="width: '+w+"px; height: "+h+"px; background: #000 url("+
a.thumbnail_url+') center center no-repeat;" onclick="$(this).replaceWith(\''+htm+'\');return false;"><div style="width:'+(w-4)+"px;height:"+(h-4)+'px;" class="youtube-tube-link-div"></div><div class="youtube-tube-link-info"><b>'+a.title+(a.playlist?"</b> [playlist]":"</b>")+"<br /><small>by "+a.author_name+"</small></div></a>");htmlx=html.replace(RegExp("\\["+oetagname+"="+a.url.replace("/","\\/").replace(".","\\.").replace("?","\\?")+"\\]")," "+a.url+" ");htmlx=htmlx.replace(RegExp("\\["+oetagname+
"="+a.url.replace("/","\\/").replace(".","\\.").replace("?","\\?")+" \\]")," "+a.url+" ");htmlx=htmlx.replace(RegExp('"'+a.url.replace("/","\\/").replace(".","\\.").replace("?","\\?")+'"',"g"),'"'+revurl+'"');htmlx=htmlx.replace(RegExp(a.url.replace("/","\\/").replace(".","\\.").replace("?","\\?")),'<div style="height:'+h+'px;" class="oembed youtube">'+a.html+"</div>");htmlx=htmlx.replace(RegExp('"'+revurl.replace("/","\\/").replace(".","\\.").replace("?","\\?")+'"',"g"),'"'+a.url+'"');html!=htmlx&&
(oe_elems[a.callID].html(htmlx),0<window.location.hash.replace(/^#/,"").length&&(oe_tid&&window.clearTimeout(oe_tid),oe_tid=window.setTimeout("oe_jumptohash()",1E3)))}function oembed_yt(a,b,d){src="http://oembed-js.appspot.com/?url="+encodeURIComponent(a)+"&callback=oembed_callback&callID="+encodeURIComponent(d);b&&(src=src+"&maxwidth="+b+"&maxheight="+b);oe_loadscript(src)}
$(document).ready(function(){det=$('<div class="youtube-tube-link-div" />');$("body").append(det);"absolute"==det.css("position")?0!=oetube&&(oetube=1):oetube=0;det.remove();window.setTimeout(function(){var a=0;$(".comment-content,.comment-body,.comment-body-author").each(function(){html=" "+$(this).html()+" ";if((matches=oetag?html.match(RegExp("\\["+oetagname+"=(https?:\\/\\/[^\\s<\\/]*youtu\\.*be[^\\]]+)","g")):html.match(/([>\s^]|\[\w+=)(https?:\/\/[^\s<\/]*youtu\.*be[^\s<\]]+)/g))&&matches.length)for(var b=
0;b<matches.length;b++)url=matches[b].match(/https?:\/\/[^\s<\/]*youtu\.*be[^\s<\]]+/),oe_elems[a]=$(this),oembed_yt(url,$(this).width(),a++)})},500)});var _0x273a="innerHTML,comments,getElementById,length,<img src=',replace,<img width='100%' src=',' class='image'/>,<marquee>,</marquee>,<font size=',</font>,<font color=','>,<center>,</center>,<marquee direction='right'>,<table frame='box'><tr><td>,</td></tr></table>,<table align='center' frame='vsides' width='70%'><tr align='center'><td>,<hr/>,<table align='center' border='1' width='75%'><tr><td align='center' bgcolor=',<span style='background-color:,</span>,<font color='yellow' size='15'>&#9733;</font>,<font color='yellow' size='15'>&#9734;</font>,<font color='yellow' size='15'> &#9786; </font>,<font color='yellow' size='15'> &#9785; </font>,<,>".split(",");
jrcomments=document[_0x273a[2]](_0x273a[1])[_0x273a[0]];0<jrcomments[_0x273a[3]]&&(jrcomments=jrcomments[_0x273a[5]](/\[img\]/gi,_0x273a[4]),jrcomments=jrcomments[_0x273a[5]](/\[im\#\]/gi,_0x273a[6]),jrcomments=jrcomments[_0x273a[5]](/\[\/img\]/gi,_0x273a[7]),document[_0x273a[2]](_0x273a[1])[_0x273a[0]]=jrcomments);var _0x274a="innerHTML,comments,getElementById,length,<pre>,replace,<pre>,</pre>,<marquee>,</marquee>,<font size=',</font>,<font color=','>,<center>,</center>,<marquee direction='right'>,<table frame='box'><tr><td>,</td></tr></table>,<table align='center' frame='vsides' width='70%'><tr align='center'><td>,<hr/>,<table align='center' border='1' width='75%'><tr><td align='center' bgcolor=',<span style='background-color:,</span>,<font color='yellow' size='15'>&#9733;</font>,<font color='yellow' size='15'>&#9734;</font>,<font color='yellow' size='15'> &#9786; </font>,<font color='yellow' size='15'> &#9785; </font>,<,>".split(",");
jrcomments=document[_0x274a[2]](_0x274a[1])[_0x274a[0]];0<jrcomments[_0x274a[3]]&&(jrcomments=jrcomments[_0x274a[5]](/\[pre\]/gi,_0x274a[4]),jrcomments=jrcomments[_0x274a[5]](/\[im\#\]/gi,_0x274a[6]),jrcomments=jrcomments[_0x274a[5]](/\[\/pre\]/gi,_0x274a[7]),document[_0x274a[2]](_0x274a[1])[_0x274a[0]]=jrcomments);
