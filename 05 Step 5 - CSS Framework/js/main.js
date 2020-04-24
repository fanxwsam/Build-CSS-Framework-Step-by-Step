// form
var es = document.getElementsByClassName('form-control');

for (var i=0; i<es.length; i++) {

  es[i].onfocus = function () {
    this.parentNode.className += " control-focus";
  }
  es[i].onblur = function () {
    var val;
    if (this.tagName == "SELECT") {
      val = this.options[this.selectedIndex].text;
    } else {
      val = this.value;
    }
    if (val != '') {
      this.parentNode.className = this.parentNode.className.replace("control-focus","control-heiglight");
    } else {
      this.parentNode.className = this.parentNode.className.replace("control-focus","");
      this.parentNode.className = this.parentNode.className.replace("control-heiglight","");
    }
  }
}

// nav
function selector(attribute, value) {
  var all = document.getElementsByTagName('*');
  for (var i = 0; i < all.length; i++) {
    if (all[i].getAttribute(attribute) == value) {
      return all[i];
    }
  }
}


var navMenu = selector('data-toggle','menu');
var targetO = selector('data-target','menu');
alert(navMenu);
navMenu.onclick = function (e) {
  if (targetO.style.display == 'none') {
    targetO.style.display = 'block';
  } else {
    targetO.style.display = 'none';
  }
}
