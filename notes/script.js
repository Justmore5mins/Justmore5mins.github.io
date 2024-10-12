const permission = new URLSearchParams(window.location.search).get("per")
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
            text += `${table[res[file].substring(0,1)]}`
            text +=`${res[file].substring(1,4)}學年度`
            text += `第${res[file].substring(5,6)}次段考`
            text += `第${res[file].substring(7,8)}版`
            if(res[file[9] != ""]){
                text += `先發${res[file[9]]}版`
            }
            console.log(text)
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
            console.log(res)
        })
        .catch((err) => {
            console.error(err)
        })
    }
}