window.onload = function(){
    //----------------------------

    document.querySelectorAll("hashtag").forEach(el => el.innerHTML = el.innerHTML.trim().split(" ").map(w => `# ${w}`).join(" "))
}