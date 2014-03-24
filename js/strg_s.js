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

// countdown 
var _translate_twords = {
  'en': {'hs': 'hours', 'ds': 'days', 'ms': 'minutes', 'ss': 'seconds', 'h': 'hour', 'd': 'day', 'm': 'minute', 's': 'second', 'suffix': 'until the vote', 'prefix': 'Plenary Vote in', 'smprefix': '', 'smsuffix': ' left to save the internet. Take Action on http://savetheinternet.eu #NetNeutarlity '}
  , 'de': {'hs': 'Stunden', 'ds': 'Tagen', 'ms': 'Minuten', 'ss': 'Sekunden', 'h': 'Stunde', 'd': 'Tag', 'm': 'Minute', 's': 'Sekunde', 'suffix': 'bis zur Abstimmung', 'prefix': 'Abstimmung in', 'smprefix': 'Noch ', 'smsuffix': ' Zeit um das Internet zu retten. Take Action on http://savetheinternet.eu/de #Netzneutralität'}
  , 'fr': {'hs': 'heures', 'ds': 'jours', 'ms': 'minutes', 'ss': 'secondes', 'h': 'heure', 'd': 'jour', 'm': 'minute', 's': 'seconde', 'suffix': 'jusqu\'au vote', 'prefix': 'Vote dans', 'smprefix': 'Plus que ', 'smsuffix': ' pour sauver internet. Agissez, rendez-vous sur http://savetheinternet.eu/fr #netneutralité'}
  , 'es': {'hs': 'horas', 'ds': 'días', 'ms': 'minutos', 'ss': 'segundos', 'h': 'hora', 'd': 'día', 'm': 'minuto', 's': 'segundo', 'suffix': 'hasta el voto', 'prefix': 'Voto en', 'smprefix': 'Quedan ', 'smsuffix': ' para salvar internet. Actúa ahora en http://savetheinternet.eu/es #neutralidaddelared'}
};
var plenary_vote = new Date(2014, 3, 3, 11, 30);

function setCountdown (e, twords) {
  var ms = plenary_vote.valueOf()-(new Date()).valueOf()
    , d = Math.floor(ms/(1000*60*60*24))
    , h = Math.floor(ms/(1000*60*60)%24)
    , m = Math.floor(ms/(1000*60)%60)
    , s = Math.floor(ms/1000%60)
    , o = []
  ;
  if (d > 1) {
    o.push(d + ' ' + twords['ds']);
  }
  else if (d == 1) {
    o.push(d + ' ' + twords['d']);
  }
  if (h > 1) {
    o.push(h + ' ' + twords['hs']);
  }
  else if (h == 1) {
    o.push(h + ' ' + twords['h']);
  }
  if (m > 1) {
    o.push(m + ' ' + twords['ms']);
  }
  else if (m == 1) {
    o.push(m + ' ' + twords['m']);
  }
  if (s > 1) {
    o.push(s + ' ' + twords['ss']);
  }
  else if (s == 1) {
    o.push(s + ' ' + twords['s']);
  }
  setSMLinks(o, twords, e);

  //o = o.join(' ') + ' ' + twords['suffix'];
  o = twords['prefix'] + ' ' +  o.join(' '); 
  $(e).html(o);

}

function setSMLinks(o, twords, e) {
  var tweet = 'http://twitter.com/home?status=' + encodeURIComponent((twords['smprefix']||'') + o.join(' ') + (twords['smsuffix']||''));
  $('#tw_count_bg a').attr('href', tweet);
  $(e).attr('href', tweet);
}

$(function () {
  try {
    var twords = _translate_twords[((window.location.pathname + '').match(/\w\w/)||[])[0]||'en'];
    var e = $('.countdown a'); 
    if (e) {
      setCountdown(e, twords);
      window.setInterval(function () {
        setCountdown(e, twords);
      }, 1000);
    }
  } catch (e) {
    console.error('error in countdown', e);
  }
})