window.onload = function(){
    if(!sessionStorage.getItem("perm")){
        location.href = "login.html?to=dataset"
    }
}