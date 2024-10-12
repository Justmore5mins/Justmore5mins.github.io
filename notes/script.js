window.onload = function(){
    const filelist = document.getElementById("filelist")

    fetch("filelist.json")
    .then(res => res.json())
    .then(res => {
        for(const file in res){
            text = ""

            if(res[file][0] === "b"){
                text += "生物"
            }
            if(res[file].substring(1,4) === "113"){
                text += "113學年度"
            }
            text += `第${res[file].substring(5,6)}次段考`
            text += `第${res[file].substring(7,8)}版`
            if(res[file[9] != ""]){
                text += `先發${res[file[9]]}版`
            }
            filelist.innerHTML += `<li>${res[file]} -- ${text}</li>`
        }
    })
}

function upload(){
    const FileInput = document.getElementById('fileInput');
    const uploadForm = document.getElementById("uploadForm")

    uploadForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const file = FileInput.files[0];
        if(file){
            const formdata = new FormData("file",file)
            formdata.append("filename",file.name)
            fetch(`${location.href}/documents`, {
                method: "POST",
                body: formdata,
                headers: {
                    "Accepts":"multipart/form-data"                    
                }
            })
            .then(res => res.json())
            .then(res => {
                console.log('data')
            })
            .catch(err => {
                console.error(err)
            })
        }else{
            console.log("Please select the file to upload")
        }
    })
}