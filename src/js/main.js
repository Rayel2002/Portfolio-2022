window.addEventListener("load", init);
//global variables
let nameRayel;
let scrollDown;

//init after DOM is ready
function init() {
  nameRayel = document.getElementById("name");
  nameRayel.addEventListener("click", nameClickHandler);
}

function nameClickHandler() {
  nameRayel.style.fontSize = "3em";
  nameRayel.textContent = "Scroll naar beneden om meer over mij te leren!";
  nameRayel.removeEventListener("click", nameClickHandler);
  scrollDown = document.createElement("div");
  scrollDown.id = "scrollDown";
  scrollDown.innerHTML = '<i class="fas fa-chevron-down"></i>';
  hero.appendChild(scrollDown);
  scrollDown.addEventListener("click", scrollDownHandler);
}

function scrollDownHandler() {
  let aboutMe = document.getElementById("#aboutMe");
  window.scrollTo((href = aboutMe), (behavior = "smooth"));
}
