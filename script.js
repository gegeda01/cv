/*===== Skills Animation =====*/
const skills_wrap = document.querySelector(".about-skills"),
skills_bar = document.querySelectorAll(".progress-line");
window.addEventListener("scroll", () => {
    skillsEffect();
})
// every time we scroll checking, we exceeded the about-skills or not
function checkScroll(el)
{
    //getting the top position of about-skills relative to view port, in other words we need to get
    // amount of pixels between about-skills and the top edge of the window.
    let rect = el.getBoundingClientRect();
    // after knowing the amount of pixels between the top edge of about skills and the top edge of window
    // now we will check we exceeded the bottom edge of about skills or not
    if(window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}
function skillsEffect()
{
    if(!checkScroll(skills_wrap)) return;
    skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
}