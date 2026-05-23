import Typed from "./node_modules/typed.js/dist/typed.module.js";

window.onload = function(){
    //----------------------------

    document.querySelectorAll("hashtag").forEach(el => el.innerHTML = el.innerHTML.trim().split(" ").map(w => `# ${w}`).join(" "))
}