function handle_actiontab (curr) {
	if (curr === 'phone') {
	  document.getElementById('tweetiframe').style.display = 'block';
	  document.getElementById('mailiframe').style.display = 'none';
    document.getElementById('faxiframe').style.display = 'none';
	  document.getElementsByClassName('actiontab_tweet')[0].className = 'actiontab actiontab_tweet active'; 
	  document.getElementsByClassName('actiontab_mail')[0].className = 'actiontab actiontab_mail'; 
    document.getElementsByClassName('actiontab_fax')[0].className = 'actiontab actiontab_fax'; 
	}
  else if (curr === 'fax') {
    document.getElementById('tweetiframe').style.display = 'none';
    document.getElementById('faxiframe').style.display = 'block';
    document.getElementById('mailiframe').style.display = 'none';
    document.getElementsByClassName('actiontab_tweet')[0].className = 'actiontab actiontab_tweet'; 
    document.getElementsByClassName('actiontab_fax')[0].className = 'actiontab actiontab_fax active';
    document.getElementsByClassName('actiontab_mail')[0].className = 'actiontab actiontab_mail'; 
  }
	else {
	  document.getElementById('tweetiframe').style.display = 'none';
    document.getElementById('faxiframe').style.display = 'none';
	  document.getElementById('mailiframe').style.display = 'block';
	  document.getElementsByClassName('actiontab_tweet')[0].className = 'actiontab actiontab_tweet'; 
    document.getElementsByClassName('actiontab_fax')[0].className = 'actiontab actiontab_fax';
	  document.getElementsByClassName('actiontab_mail')[0].className = 'actiontab actiontab_mail active'; 
	}
	return false;
}

function nextmep() {
  var els=[document.getElementById("tweetiframe"),
  document.getElementById("faxiframe"),
  document.getElementById("phoneiframe"),
  document.getElementById("mailiframe")];
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
       $(el).html(el.innerText.replace(/^(\w+\.\w+) \\at\\ (savetheinternet.eu)/, '<a href="mailto:$1@$2">$1@$2</a>'));
     }
  });
});

/*
// countdown 
var _translate_twords = {
  'en': {'hs': 'hours', 'ds': 'days', 'ms': 'minutes', 'ss': 'seconds', 'h': 'hour', 'd': 'day', 'm': 'minute', 's': 'second', 'suffix': 'until the vote', 'prefix': 'Plenary Vote in', 'smprefix': '', 'smsuffix': ' left to save the internet. Take Action on http://savetheinternet.eu #NetNeutrality '}
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
  if (ms > 0) {
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
}

function setSMLinks(o, twords, e) {
  var tweet = 'https://twitter.com/home?status=' + encodeURIComponent((twords['smprefix']||'') + o.join(' ') + (twords['smsuffix']||''));
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
});
*/

var current_autocomplete_meps = autocomplete_meps = [{"id":"124831","label":"Isabella ADINOLFI","country":"it","group":"efd"},{"id":"96736","label":"Jan Philipp ALBRECHT","country":"de","group":"greensefa"},{"id":"124949","label":"Lucy ANDERSON","country":"gb","group":"sd"},{"id":"24922","label":"Pascal ARIMONT","country":"be","group":"epp"},{"id":"96680","label":"Zigmantas BALČYTIS","country":"lt","group":"sd"},{"id":"124871","label":"Nikolay BAREKOV","country":"bg","group":"ecr"},{"id":"124760","label":"Nicolas BAY","country":"fr","group":"ni"},{"id":"124777","label":"Tiziana BEGHIN","country":"it","group":"efd"},{"id":"96705","label":"Bendt BENDTSEN","country":"dk","group":"epp"},{"id":"1985","label":"Pervenche BERÈS","country":"fr","group":"sd"},{"id":"124771","label":"Dominique BILDE","country":"fr","group":"ni"},{"id":"125044","label":"José BLANCO LÓPEZ","country":"es","group":"sd"},{"id":"124814","label":"Simona BONAFÈ","country":"it","group":"sd"},{"id":"124896","label":"Michał BONI","country":"pl","group":"epp"},{"id":"124796","label":"David BORRELLI","country":"it","group":"efd"},{"id":"112748","label":"Biljana BORZAN","country":"hr","group":"sd"},{"id":"124869","label":"Gianluca BUONANNO","country":"it","group":"ni"},{"id":"38420","label":"Cristian-Silviu BUȘOI","country":"ro","group":"epp"},{"id":"96739","label":"Reinhard BÜTIKOFER","country":"de","group":"greensefa"},{"id":"28269","label":"Jerzy BUZEK","country":"pl","group":"epp"},{"id":"125041","label":"Soledad CABEZÓN RUIZ","country":"es","group":"sd"},{"id":"28390","label":"Pilar del CASTILLO VERA","country":"es","group":"epp"},{"id":"28451","label":"Lorenzo CESA","country":"it","group":"epp"},{"id":"124708","label":"Dita CHARANZOVÁ","country":"cz","group":"aldeadle"},{"id":"26837","label":"Lefteris CHRISTOFOROU","country":"cy","group":"epp"},{"id":"124967","label":"David COBURN","country":"gb","group":"efd"},{"id":"1892","label":"Carlos COELHO","country":"pt","group":"epp"},{"id":"96915","label":"Sergio Gaetano COFFERATI","country":"it","group":"sd"},{"id":"112788","label":"Birgit COLLIN-LANGEN","country":"de","group":"epp"},{"id":"96775","label":"Lara COMI","country":"it","group":"epp"},{"id":"96674","label":"Anna Maria CORAZZA BILDT","country":"se","group":"epp"},{"id":"40224","label":"Andi CRISTEA","country":"ro","group":"sd"},{"id":"2109","label":"Brian CROWLEY","country":"ie","group":"ecr"},{"id":"124970","label":"Miriam DALLI","country":"mt","group":"sd"},{"id":"35135","label":"Daniel DALTON","country":"gb","group":"ecr"},{"id":"124821","label":"Nicola DANTI","country":"it","group":"sd"},{"id":"109337","label":"Philippe DE BACKER","country":"be","group":"aldeadle"},{"id":"124899","label":"Andrzej DUDA","country":"pl","group":"ecr"},{"id":"124960","label":"Ian DUNCAN","country":"gb","group":"ecr"},{"id":"124693","label":"Pascal DURAND","country":"fr","group":"greensefa"},{"id":"28226","label":"Christian EHLER","country":"de","group":"epp"},{"id":"124937","label":"Peter ERIKSSON","country":"se","group":"greensefa"},{"id":"96852","label":"Cornelia ERNST","country":"de","group":"guengl"},{"id":"124989","label":"Fredrick FEDERLEY","country":"se","group":"aldeadle"},{"id":"28308","label":"Elisa FERREIRA","country":"pt","group":"sd"},{"id":"96706","label":"João FERREIRA","country":"pt","group":"guengl"},{"id":"96993","label":"Lorenzo FONTANA","country":"it","group":"ni"},{"id":"96949","label":"Vicky FORD","country":"gb","group":"ecr"},{"id":"96957","label":"Ashley FOX","country":"gb","group":"ecr"},{"id":"125018","label":"Eugen FREUND","country":"at","group":"sd"},{"id":"102886","label":"Ildikó GÁLL-PELCZ","country":"hu","group":"epp"},{"id":"125006","label":"Francesc GAMBÚS","country":"es","group":"epp"},{"id":"58758","label":"Elisabetta GARDINI","country":"it","group":"epp"},{"id":"1913","label":"Evelyne GEBHARDT","country":"de","group":"sd"},{"id":"96833","label":"Jens GEIER","country":"de","group":"sd"},{"id":"96940","label":"Gerben-Jan GERBRANDY","country":"nl","group":"aldeadle"},{"id":"28379","label":"Adam GIEREK","country":"pl","group":"sd"},{"id":"125052","label":"Juan Carlos GIRAUTA VIDAL","country":"es","group":"aldeadle"},{"id":"1164","label":"Bruno GOLLNISCH","country":"fr","group":"ni"},{"id":"125027","label":"Esteban GONZÁLEZ PONS","country":"es","group":"epp"},{"id":"124785","label":"Maria GRAPINI","country":"ro","group":"sd"},{"id":"124961","label":"Theresa GRIFFIN","country":"gb","group":"sd"},{"id":"96790","label":"Marek Józef GRÓBARCZYK","country":"pl","group":"ecr"},{"id":"2025","label":"Françoise GROSSETÊTE","country":"fr","group":"epp"},{"id":"124763","label":"Antanas GUOGA","country":"lt","group":"aldeadle"},{"id":"103488","label":"Sergio GUTIÉRREZ PRIETO","country":"es","group":"sd"},{"id":"23816","label":"András GYÜRK","country":"hu","group":"epp"},{"id":"124727","label":"Jussi HALLA-AHO","country":"fi","group":"ecr"},{"id":"96851","label":"Thomas HÄNDEL","country":"de","group":"guengl"},{"id":"28233","label":"Rebecca HARMS","country":"de","group":"greensefa"},{"id":"4516","label":"Roger HELMER","country":"gb","group":"efd"},{"id":"124823","label":"Hans-Olaf HENKEL","country":"de","group":"ecr"},{"id":"28124","label":"Gunnar HÖKMARK","country":"se","group":"epp"},{"id":"34249","label":"Filiz HYUSMENOVA","country":"bg","group":"aldeadle"},{"id":"124886","label":"Robert Jarosław IWASZKIEWICZ","country":"pl","group":"efd"},{"id":"96684","label":"Liisa JAAKONSAARI","country":"fi","group":"sd"},{"id":"124882","label":"Dawid Bohdan JACKIEWICZ","country":"pl","group":"ecr"},{"id":"96740","label":"Yannick JADOT","country":"fr","group":"greensefa"},{"id":"124721","label":"Benedek JÁVOR","country":"hu","group":"greensefa"},{"id":"96748","label":"Dennis de JONG","country":"nl","group":"guengl"},{"id":"96884","label":"Philippe JUVIN","country":"fr","group":"epp"},{"id":"125109","label":"Eva KAILI","country":"gr","group":"sd"},{"id":"124697","label":"Kaja KALLAS","country":"ee","group":"aldeadle"},{"id":"125024","label":"Barbara KAPPEL","country":"at","group":"ni"},{"id":"4246","label":"Othmar KARAS","country":"at","group":"epp"},{"id":"96901","label":"Krišjānis KARIŅŠ","country":"lv","group":"epp"},{"id":"96668","label":"Seán KELLY","country":"ie","group":"epp"},{"id":"124953","label":"Jude KIRTON-DARLING","country":"gb","group":"sd"},{"id":"124870","label":"Jeppe KOFOD","country":"dk","group":"sd"},{"id":"124879","label":"Janusz KORWIN-MIKKE","country":"pl","group":"ni"},{"id":"102887","label":"Béla KOVÁCS","country":"hu","group":"ni"},{"id":"1854","label":"Constanze KREHL","country":"de","group":"sd"},{"id":"28284","label":"Barbara KUDRYCKA","country":"pl","group":"epp"},{"id":"124735","label":"Miapetra KUMPULA-NATRI","country":"fi","group":"sd"},{"id":"1909","label":"Bernd LANGE","country":"de","group":"sd"},{"id":"38398","label":"Esther de LANGE","country":"nl","group":"epp"},{"id":"1928","label":"Werner LANGEN","country":"de","group":"epp"},{"id":"23781","label":"Janusz LEWANDOWSKI","country":"pl","group":"epp"},{"id":"125047","label":"Paloma LÓPEZ BERMEJO","country":"es","group":"guengl"},{"id":"28399","label":"Antonio LÓPEZ-ISTÚRIZ WHITE","country":"es","group":"epp"},{"id":"96673","label":"Olle LUDVIGSSON","country":"se","group":"sd"},{"id":"124883","label":"Krystyna ŁYBACKA","country":"pl","group":"sd"},{"id":"96919","label":"Emma McCLARKIN","country":"gb","group":"ecr"},{"id":"111027","label":"Svetoslav Hristov MALINOV","country":"bg","group":"epp"},{"id":"28192","label":"Vladimír MAŇKA","country":"sk","group":"sd"},{"id":"124933","label":"Ernest MARAGALL","country":"es","group":"greensefa"},{"id":"125069","label":"Notis MARIAS","country":"gr","group":"ecr"},{"id":"33982","label":"Marian-Jean MARINESCU","country":"ro","group":"epp"},{"id":"124751","label":"Dominique MARTIN","country":"fr","group":"ni"},{"id":"124947","label":"Edouard MARTIN","country":"fr","group":"sd"},{"id":"124828","label":"Fulvio MARTUSCIELLO","country":"it","group":"epp"},{"id":"23704","label":"Jiří MAŠTÁLKA","country":"cz","group":"guengl"},{"id":"96820","label":"Marisa MATIAS","country":"pt","group":"guengl"},{"id":"96663","label":"Morten MESSERSCHMIDT","country":"dk","group":"ecr"},{"id":"118859","label":"Roberta METSOLA","country":"mt","group":"epp"},{"id":"118858","label":"Marlene MIZZI","country":"mt","group":"sd"},{"id":"125026","label":"Angelika MLINAR","country":"at","group":"aldeadle"},{"id":"124859","label":"Giulia MOI","country":"it","group":"efd"},{"id":"124789","label":"Sorin MOISĂ","country":"ro","group":"sd"},{"id":"124722","label":"Csaba MOLNÁR","country":"hu","group":"sd"},{"id":"124944","label":"Clare MOODY","country":"gb","group":"sd"},{"id":"72779","label":"Nadine MORANO","country":"fr","group":"epp"},{"id":"124784","label":"Dan NICA","country":"ro","group":"sd"},{"id":"4289","label":"Angelika NIEBLER","country":"de","group":"epp"},{"id":"124701","label":"Luděk NIEDERMAYER","country":"cz","group":"epp"},{"id":"125019","label":"Cora van NIEUWENHUIZEN","country":"nl","group":"aldeadle"},{"id":"111024","label":"Jens NILSSON","country":"se","group":"sd"},{"id":"28165","label":"Lambert van NISTELROOIJ","country":"nl","group":"epp"},{"id":"96981","label":"Franz OBERMAYR","country":"at","group":"ni"},{"id":"96694","label":"Rolandas PAKSAS","country":"lt","group":"efd"},{"id":"124945","label":"Margot PARKER","country":"gb","group":"efd"},{"id":"36392","label":"Aldo PATRICIELLO","country":"it","group":"epp"},{"id":"98341","label":"Eva PAUNOVA","country":"bg","group":"epp"},{"id":"124844","label":"Piernicola PEDICINI","country":"it","group":"efd"},{"id":"124872","label":"Morten Helveg PETERSEN","country":"dk","group":"aldeadle"},{"id":"110977","label":"Florian PHILIPPOT","country":"fr","group":"ni"},{"id":"28224","label":"Markus PIEPER","country":"de","group":"epp"},{"id":"124699","label":"Miroslav POCHE","country":"cz","group":"sd"},{"id":"125706","label":"Jiří POSPÍŠIL","country":"cz","group":"epp"},{"id":"124830","label":"Marcus PRETZELL","country":"de","group":"ecr"},{"id":"23706","label":"Miloslav RANSDORF","country":"cz","group":"guengl"},{"id":"124816","label":"Julia REDA","country":"de","group":"greensefa"},{"id":"124935","label":"Michel REIMON","country":"at","group":"greensefa"},{"id":"28225","label":"Herbert REUL","country":"de","group":"epp"},{"id":"96885","label":"Dominique RIQUET","country":"fr","group":"aldeadle"},{"id":"96743","label":"Michèle RIVASI","country":"fr","group":"greensefa"},{"id":"97022","label":"Robert ROCHEFORT","country":"fr","group":"aldeadle"},{"id":"125043","label":"Inmaculada RODRÍGUEZ-PIÑERO FERNÁNDEZ","country":"es","group":"sd"},{"id":"96710","label":"Jens ROHDE","country":"dk","group":"aldeadle"},{"id":"28394","label":"Dariusz ROSATI","country":"pl","group":"epp"},{"id":"103845","label":"Virginie ROZIÈRE","country":"fr","group":"sd"},{"id":"2278","label":"Paul RÜBIG","country":"at","group":"epp"},{"id":"125091","label":"Sofia SAKORAFA","country":"gr","group":"guengl"},{"id":"125670","label":"Massimiliano SALINI","country":"it","group":"epp"},{"id":"24594","label":"Anne SANDER","country":"fr","group":"epp"},{"id":"96696","label":"Algirdas SAUDARGAS","country":"lt","group":"epp"},{"id":"124755","label":"Jean-Luc SCHAFFHAUSER","country":"fr","group":"ni"},{"id":"37312","label":"Christel SCHALDEMOSE","country":"dk","group":"sd"},{"id":"28223","label":"Andreas SCHWAB","country":"de","group":"epp"},{"id":"96718","label":"Olga SEHNALOVÁ","country":"cz","group":"sd"},{"id":"125003","label":"Igor ŠOLTES","country":"si","group":"greensefa"},{"id":"125004","label":"Franc BOGOVIČ","country":"si","group":"epp"},{"id":"96911","label":"Tanja FAJON","country":"si","group":"sd"},{"id":"23693","label":"Alojz PETERLE","country":"si","group":"epp"},{"id":"125103","label":"Patricija ŠULIN","country":"si","group":"epp"},{"id":"125104","label":"Romana TOMC","country":"si","group":"epp"},{"id":"97019","label":"Ivo VAJGL","country":"si","group":"aldeadle"},{"id":"96933","label":"Milan ZVER","country":"si","group":"epp"},{"id":"124860","label":"Renato SORU","country":"it","group":"sd"},{"id":"125064","label":"Maria SPYRAKI","country":"gr","group":"epp"},{"id":"124852","label":"Sergei STANISHEV","country":"bg","group":"sd"},{"id":"124929","label":"Ivan ŠTEFANEC","country":"sk","group":"epp"},{"id":"96831","label":"Jutta STEINRUCK","country":"de","group":"sd"},{"id":"4545","label":"Catherine STIHLER","country":"gb","group":"sd"},{"id":"124928","label":"Richard SULÍK","country":"sk","group":"ecr"},{"id":"124689","label":"Neoklis SYLIKIOTIS","country":"cy","group":"guengl"},{"id":"124890","label":"Adam SZEJNFELD","country":"pl","group":"epp"},{"id":"2187","label":"Antonio TAJANI","country":"it","group":"epp"},{"id":"124813","label":"Dario TAMBURRANO","country":"it","group":"efd"},{"id":"125020","label":"Paul TANG","country":"nl","group":"sd"},{"id":"29579","label":"Marc TARABELLA","country":"be","group":"sd"},{"id":"97136","label":"Indrek TARAND","country":"ee","group":"greensefa"},{"id":"124706","label":"Pavel TELIČKA","country":"cz","group":"aldeadle"},{"id":"107385","label":"Sampo TERHO","country":"fi","group":"ecr"},{"id":"96871","label":"Michael THEURER","country":"de","group":"aldeadle"},{"id":"96776","label":"Róża Gräfin von THUN UND HOHENSTEIN","country":"pl","group":"epp"},{"id":"28340","label":"Patrizia TOIA","country":"it","group":"sd"},{"id":"124880","label":"Ulla TØRNÆS","country":"dk","group":"aldeadle"},{"id":"96713","label":"Evžen TOŠENOVSKÝ","country":"cz","group":"ecr"},{"id":"124829","label":"Ulrike TREBESIUS","country":"de","group":"ecr"},{"id":"124758","label":"Mylène TROSZCZYNSKI","country":"fr","group":"ni"},{"id":"4432","label":"Claude TURMES","country":"lu","group":"greensefa"},{"id":"131507","label":"Miguel URBÁN CRESPO","country":"es","group":"guengl"},{"id":"38601","label":"Vladimir URUTCHEV","country":"bg","group":"epp"},{"id":"28617","label":"Inese VAIDERE","country":"lv","group":"epp"},{"id":"37324","label":"Adina-Ioana VĂLEAN","country":"ro","group":"epp"},{"id":"117491","label":"Anneleen VAN BOSSUYT","country":"be","group":"ecr"},{"id":"5729","label":"Kathleen VAN BREMPT","country":"be","group":"sd"},{"id":"96756","label":"Sabine VERHEYEN","country":"de","group":"epp"},{"id":"124726","label":"Henna VIRKKUNEN","country":"fi","group":"epp"},{"id":"111014","label":"Josef WEIDENHOLZER","country":"at","group":"sd"},{"id":"124840","label":"Jakob von WEIZSÄCKER","country":"de","group":"sd"},{"id":"124826","label":"Martina WERNER","country":"de","group":"sd"},{"id":"96839","label":"Kerstin WESTPHAL","country":"de","group":"sd"},{"id":"96764","label":"Hermann WINKLER","country":"de","group":"epp"},{"id":"23894","label":"Anna ZÁBORSKÁ","country":"sk","group":"epp"},{"id":"125067","label":"Theodoros ZAGORAKIS","country":"gr","group":"epp"},{"id":"124800","label":"Flavio ZANONATO","country":"it","group":"sd"},{"id":"124739","label":"Carlos ZORRINHO","country":"pt","group":"sd"},{"id":"111589","label":"Inês Cristina ZUBER","country":"pt","group":"guengl"},{"id":"125237","label":"Marco ZULLO","country":"it","group":"efd"}];

function reduce_meps() {
  var s, l = [];
  if (s = $('#country_selector').val()) {
    l.push('country=' + s);
    log_activity('select_country', s);
  }
  if (s = $('#group_selector').val()) {
    l.push('group=' + s);
    log_activity('select_group', s);
  }
  load_meps('?' + l.join('&'));
  $('#mep_selector').val('');
  refine_autocomplete();
}

function refine_autocomplete () {
  var c, g;
  current_autocomplete_meps = [];
  for (var i = 0; i < autocomplete_meps.length; i++) {
    if (((!(c = $('#country_selector').val())) || autocomplete_meps[i].country == c) && (!(g = $('#group_selector').val()) || autocomplete_meps[i].group == g)) {
      current_autocomplete_meps.push(autocomplete_meps[i]);
    }
  }
  $('#mep_selector').autocomplete('option', 'source', current_autocomplete_meps);
}

function select_one_mep(event, ui) {
  load_meps('?id=' + ui.item.id);
  log_activity('select_mep', ui.item.name);
}

function load_meps (get_params) {
  $('#tweetiframe object, #faxiframe object, #phoneiframe object, #mailiframe object').each(function (i, e) {
    $(e).attr('data', $(e).attr('data').replace(/\?.*/,'') + get_params);
  });
  nextmep();
}

function log_activity (action, value) {
  if (typeof _paq !== 'undefined' && _paq.push) {
    _paq.push(['trackEvent', action, value]);
    if (action === 'socialmedia_share') {
      _paq.push(['trackGoal', 3, value]);
    }
  }
}

function mail_subscribe() {
  var v, url = "https://faxjh.savetheinternet.eu/sti/subscribe/?mail=" + $('#newsletter-email').val();
  if (v=$('#newsletter_country').val()) {
    url += '&country=' + v;
  }
  jQuery.ajax(url, {'async': false});
}

$(function () {
  $('#country_selector,#group_selector').on('change', reduce_meps);
  $('#mep_selector').autocomplete({
    source: current_autocomplete_meps
    , select: select_one_mep
  }).focus(function(){
    $('#mep_selector').autocomplete('search', $(this).val() || ' ');
  });
  $('#share a,#sharebox a').on('click', function () {
    var type;
    if ($(this).attr('href').indexOf('twitter.com') != -1) {
      type = 'twitter';
    }
    else if ($(this).attr('href').indexOf('facebook.com') != -1) {
      type = 'facebook';
    }
    else if ($(this).attr('href').indexOf('plus.google.com') != -1) {
      type = 'google';
    }
    log_activity('socialmedia_share', type);
  })

  $('#toggle_when,#toggle_how').on('click', function () {
    $('div.toggled_container', $(this).parent()).slideToggle("slow");
  });

  $('#gotoWhen').on('click', function () {
    $('#toggleWhen').show();
  });
  $('#gotoHow').on('click', function () {
    $('#toggleHow').show();
  });
  
  
  $('#newsletter-submit').on('click', mail_subscribe);
});


/* switch between contact methodes */
$('.actbox').hide();
$('#actBoxPhone').show();
$('#choosePhone').addClass("current");
$(".actItem").click(function(event) {
	event.preventDefault();
	$(this).addClass("current");
	$(this).siblings().removeClass("current");
	var tab = $(this).attr("href");
	$(".actbox").not(tab).hide();
	$(tab).fadeIn();
  if ((tab||'').indexOf('Phone') == -1) {
    $('.mepFilter').show();
  } else {
    $('.mepFilter').hide();
  }
});

$("#goTweet").click(function() {
	$(".actbox").hide();
	$("#actBoxTweet").show();
  $('#chooseTweet').addClass("current");
  $('#chooseTweet').siblings().removeClass("current");
  $('.mepFilter').show();
});
$("#goFax").click(function() {
	$(".actbox").hide();
	$("#actBoxFax").show();
  $('#chooseFax').addClass("current");
  $('#chooseFax').siblings().removeClass("current");
  $('.mepFilter').show();
});
$("#goPhone").click(function() {
  $(".actbox").hide();
  $("#actBoxPhone").show();
  $('#choosePhone').addClass("current");
  $('#choosePhone').siblings().removeClass("current");
  $('.mepFilter').hide();
});
$("#goMail").click(function() {
	$(".actbox").hide();
	$("#actBoxMail").show();
  $('#chooseMail').addClass("current");
  $('#chooseMail').siblings().removeClass("current");
  $('.mepFilter').show();
});

