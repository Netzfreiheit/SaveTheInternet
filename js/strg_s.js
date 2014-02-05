function handle_actiontab (curr) {
	if (curr === 'phone') {
	  document.getElementById('calliframe').style.display = 'block';
	  document.getElementById('mailiframe').style.display = 'none';
    document.getElementById('faxiframe').style.display = 'none';
	  document.getElementsByClassName('actiontab_phone')[0].className = 'actiontab actiontab_phone active'; 
	  document.getElementsByClassName('actiontab_mail')[0].className = 'actiontab actiontab_mail'; 
    document.getElementsByClassName('actiontab_fax')[0].className = 'actiontab actiontab_fax'; 
	}
  else if (curr === 'fax') {
    document.getElementById('calliframe').style.display = 'none';
    document.getElementById('faxiframe').style.display = 'block';
    document.getElementById('mailiframe').style.display = 'none';
    document.getElementsByClassName('actiontab_phone')[0].className = 'actiontab actiontab_phone'; 
    document.getElementsByClassName('actiontab_fax')[0].className = 'actiontab actiontab_fax active';
    document.getElementsByClassName('actiontab_mail')[0].className = 'actiontab actiontab_mail'; 
  }
	else {
	  document.getElementById('calliframe').style.display = 'none';
    document.getElementById('faxiframe').style.display = 'none';
	  document.getElementById('mailiframe').style.display = 'block';
	  document.getElementsByClassName('actiontab_phone')[0].className = 'actiontab actiontab_phone'; 
    document.getElementsByClassName('actiontab_fax')[0].className = 'actiontab actiontab_fax';
	  document.getElementsByClassName('actiontab_mail')[0].className = 'actiontab actiontab_mail active'; 
	}
	return false;
}

function nextmep() {
  var els=[document.getElementById("calliframe"),
  document.getElementById("faxiframe"),
  document.getElementById("mailiframe")]
  for (i in els) {
    var e=els[i]
    var h=e.innerHTML
    e.innerHTML=""
    e.innerHTML=h
  }
 }


$(function () {
 $('span.mailcheat').each(
   function (i, el) {         
     if ($(el).attr('locip')) {
         var host = $(el).attr('domip') || window.location.host
         var mail = $(el).attr('locip') + '@' + host;
       $(el).html('<a href="mailto:' + mail + '">' + ($(el).attr('inner') || mail || el.innerText || 'mail') + '</a>');
     } else {
       $(el).html(el.innerText.replace(/^(\w+\.\w+) \\at\\ (okfn.at)/, '<a href="mailto:$1@$2">$1@$2</a>'));
     }
  });
});