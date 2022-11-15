/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

//contact form  send mail
function sendmail() {
  var params = {
    name: $("#name").val(),
    email: $("#email").val(),
    subject: $("#phone").val(),
    message: $("#message").val(),
  };

  const serviceID = "service_zlltyzd";
  const templateID = "template_0stzr67";
  emailjs.send(serviceID, templateID, params, "JkdDZvVePORqh7IMV").then(
    function (res) {
      console.log(res.text);
      if (res.text == "OK") {
        alert("Your mail has been sent. Thank you for connecting me.");
        $("#name").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#message").val("");
      } else {
        console.error(message);
        alert("There is error at sending message. ");
      }
    },
    function (error) {
      alert("There is error at sending message. ");
    }
  );
}

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: [
    "Frontend Development",
    "Backend Development",
    "Java development",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

function myResume() {
  return window.open(
    "https://github.com/divassahu/Divas_Sahu_resume/raw/main/Divas_Sahu_Resume.pdf"
  );
}
