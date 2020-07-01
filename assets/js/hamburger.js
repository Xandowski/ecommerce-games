const hamburger = document.querySelector('.hamburger');
const menuContent = document.querySelector('.menu-content');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('-change');
  menuContent.classList.toggle('-menu-active');

  if (menuContent.classList.contains("-menu-active")) {
    let linkJogos = document.querySelectorAll(".link-jogos")
    let links = [];

    for (let i = 0; i < linkJogos.length; i++) {
      links[i] = linkJogos[i].getElementsByTagName("li");
    }

    for (let i = 0; i < links.length; i++) {
      for (let j = 0; j < links[i].length; j++) {
        links[i][j].addEventListener('click', function (e) {
          let linkValue = e.target.textContent.toLowerCase();
          window.localStorage.setItem('value', linkValue);
          window.location="catalogo.html#games";
          
        })
      }
    }
  }

})

window.addEventListener("load", function() {
  if(window.localStorage.getItem('value') != ''){
    let ul = document.getElementById("games");
    let li = ul.getElementsByTagName("li");
    let linkValue = window.localStorage.getItem('value');

    let count = 0;
    let jogos = document.getElementById('jogos');
    let p = document.createElement("P");
    p.textContent = 'Esta categoria não contém jogos';

    let breadcrumb = document.querySelector('.breadcrumb');
    let node = document.createElement("LI");
    let textnode = document.createTextNode(linkValue);

    for (let i = 0; i < li.length; i++) {
      if (li[i].getAttribute('data-js') == linkValue) {
        if(jogos.children[0].tagName == 'P'){
          jogos.removeChild(jogos.childNodes[0]);
          if(breadcrumb.childNodes.length != 2){
            breadcrumb.removeChild(breadcrumb.childNodes[breadcrumb.childNodes.length-1]);
            node.appendChild(textnode);
            breadcrumb.appendChild(node);
          }else{
            node.appendChild(textnode);
            breadcrumb.appendChild(node);
          }
          ul.style.justifyContent = "flex-start";
          li[i].style.display = "";
        }else{
          if(breadcrumb.childNodes.length != 2){
            breadcrumb.removeChild(breadcrumb.childNodes[breadcrumb.childNodes.length-1]);
            node.appendChild(textnode);
            breadcrumb.appendChild(node);
          }else{
            node.appendChild(textnode);
            breadcrumb.appendChild(node);
          }
          ul.style.justifyContent = "flex-start";
          li[i].style.display = "";
        }
      } else {
        li[i].style.display = "none";
        count++;
        if(count == li.length){
          if(breadcrumb.childNodes.length != 2){
            breadcrumb.removeChild(breadcrumb.childNodes[breadcrumb.childNodes.length-1]);
            node.appendChild(textnode);
            breadcrumb.appendChild(node);
          }else{
            node.appendChild(textnode);
            breadcrumb.appendChild(node);
          }
          if(jogos.children[0].tagName != 'P'){
            jogos.insertBefore(p, jogos.childNodes[0]);
          }
        }
      }
    }
  }
  window.localStorage.setItem('value', '');
});

