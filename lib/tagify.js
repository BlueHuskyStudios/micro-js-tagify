function tagify(t,d,c,h){var s="",e;for(i in d)s+=d[i];s=new RegExp("[^"+s+"]+","g");for(i in d=t.match(s)){e=document.createElement(h);e.innerText=d[i];e.className=c;d[i]=e}return d}