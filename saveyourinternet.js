function syi_off() {
  document.getElementById("overlay").style.display = "none";
}

var syi_div1 = document.createElement('div');
syi_div1.setAttribute('id','overlay');
syi_div1.setAttribute('onclick','syi_off()');
syi_div1.setAttribute('style','height: 92%; width: 92%; background-color:black; color: white; opacity: 0.9; position: fixed; top: 4%; left: 4%; text-align:center;');
document.body.appendChild(syi_div1);

//##### Default language: German
if (saveyourinternet_language==null) {
  var saveyourinternet_language = 'de';
}

var content = new Object();
content['de'] = [
  'Wir sind gegen die neue Urheberrechtsreform.',
  'Du auch? Dann hilf mit, die Reform zu verhindern!'
]
content['en'] = [
  'We are against the new copyright reform.',
  'Are you, too? Then help prevent the reform!'
]

var syi0 = '<div style="font-family: Arial; padding-top: 2cm;"><h1>';
var syi1 = '<br/><br></h1><h2>';
var syi2 = '<br/><br/></h2>';

//############## de  => German ####################
document.getElementById('overlay').innerHTML =
syi0 +
content[saveyourinternet_language][0] +
syi1 +
content[saveyourinternet_language][1] +
syi2 +
'<h2><a style="color: yellow;" href="https://saveyourinternet.eu/" target="blank">https://saveyourinternet.eu</a></h2>' +
'<h2><a style="color: yellow;" href="https://pledge2019.eu" target="blank">https://pledge2019.eu</a></h2>' +
'<h2><a style="color: yellow;" href="https://twitter.com/hashtag/SaveYourInternet" target="blank">#SaveYourInternet</a> @Twitter</h2>' +
'<div style="position: absolute; bottom: 5px; left: 45%; text-align: center;"><a href="" target="_blank" style="color: #dddd00;">source code</a></div>' +
'</div>'
;
