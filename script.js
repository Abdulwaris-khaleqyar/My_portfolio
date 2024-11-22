function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}




var icon=document.getElementById('icons');
icon.onclick= function(){
  document.body.classList.toggle("dark-them");
  if(document.body.classList.contains("dark-them")){
    icon.src="sun.jpg"
  }
  else{
    icon.src="Mone.jpg";
  }
}
var icons=document.getElementById('icon');
icons.onclick=function(){
  document.body.classList.toggle("dark-them");
  if(document.body.classList.contains("dark-them")){
    icons.src="sun.jpg"
  }
  else{
    icons.src= "Mone.jpg";
  }
}

