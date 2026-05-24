window.onload = function(){
    //----------------------------
    document.querySelectorAll("hashtag").forEach(el => el.innerHTML = el.innerHTML.trim().split(" ").map(w => `# ${w}`).join(" "))

    
}

window.showPanel = function(id){
    if(!localStorage.getItem(id)){
        document.getElementById(id).style.display = "flex";
        localStorage.setItem(id, "showed");
    }else{
        hidePanel();
        localStorage.removeItem(id)
    }
}

window.hidePanel = function(){
    document.querySelectorAll(".overlay").forEach(e => e.style.display = "None");
}