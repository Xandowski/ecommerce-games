function search() {
  let input = document.getElementById("search");
  let filter = input.value.toUpperCase();
  let ul = document.getElementById("games");
  let li = ul.getElementsByTagName("li");
  let categoria;

  for (let i = 0; i < li.length; i++) {
    categoria = li[i].getAttribute("data-js");
    if (categoria.toUpperCase().indexOf(filter) > -1) {
      ul.style.justifyContent = "flex-start";
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function filterGames() {
  let subMenu = document.querySelector(".sub-menu");
  let links = subMenu.getElementsByTagName("li");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      let ul = document.getElementById("games");
      let li = ul.getElementsByTagName("li");
      let linkValue = e.target.textContent.toLowerCase();
      let count = 0;
      let jogos = document.getElementById('jogos');
      let p = document.createElement("P");
      p.textContent = 'Esta categoria não contém jogos';

      let breadcrumb = document.querySelector('.breadcrumb');
      let node = document.createElement("LI");
      let textnode = document.createTextNode(linkValue);

      for (let i = 0; i < li.length; i++) {
        if (linkValue == 'todos') {
          li[i].style.display = "";
        }
        else if (li[i].getAttribute('data-js') == linkValue) {
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
    })
  }
}

filterGames();