const permission = new URLSearchParams(window.location.search).get("per") || ""
window.onload = function(){
    const perlist = ["author","teacher","col"]
    if(!perlist.includes(permission)) location.href = "/"
    const filelist = document.getElementById("filelist")

    fetch("filelist.json")
    .then(res => res.json())
    .then(res => {
        for(const file in res){
            text = ""
            const table = {"ch":"國文","en":"英文","ma":"數學","hi":"歷史","ge":"地理","ci":"公民","ph":"物理","bi":"生物","es":"地科"}
            text += `${table[res[file].substring(0,2)]}`
            text += `${res[file].substring(2,5)}學年度`
            text += `第${res[file].substring(6,7)}次段考`
            text += `第${res[file].substring(8,9)}${res[file].length === 10 ? `${res[file][9]}版` : "版"}`
            
            filelist.innerHTML += `<li>${res[file]} -- ${text}</li>`
        }
    })
}

function upload(){
    const file = document.getElementById("uploadfile").files[0]
    if(file){
        const formdata = new FormData()
        formdata.append("file",file)
        formdata.append("filename",file.name)
        fetch(`${location.protocol}//${location.hostname}:404/upload`,{
            method:"POST",
            body:formdata
        })
        .then((res) => {
            location.reload()
            console.log(res)
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

function remove(){
    const target = prompt("Target file","bi1130101")

    if(!target){
        alert("Enter a valid name")
        return
    }
    fetch(`${location.protocol}//${location.hostname}:404/delete`, {
        method: "DELETE",
        body: JSON.stringify("target",`${target}.pdf`)
        })
    .then(res => {
        console.clear()
        console.log(res)
    })
    .catch(err => {
        console.error(err)
    })
}