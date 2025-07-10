var tabLinks = document.getElementsByClassName("task");
var tabContents = document.getElementsByClassName("task-contents");
function opentab(tabname)
{
   for(tablink of tabLinks)
   {
      tablink.classList.remove("active-link");
   }
   for(tabcontent of tabContents)
   {
   tabcontent.classList.remove("active-tab");
}
event.target.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}
// for About page animation 
 document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-container");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("animate");
          // If you want it to animate only the first time, unobserve:
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3 // Trigger when 30% of section is visible
    });

    observer.observe(aboutSection);
  });
