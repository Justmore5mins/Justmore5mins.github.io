window.onload = function(){
    const permission = new URLSearchParams(window.location.search).get("per") || ""
    const perlist = ["author","teacher","col"]
    if(perlist.includes(permission)){
        const login = document.getElementById("backlogin")
        login.innerHTML += "<button onclick='login()'>後台登入</button>"
    }
    fetch("filelist.json")
    .then(res => res.json())
    .then(res => {
        var known = []
        for(const file in res){
            //generate select option
            if(res[file] === "copyright") continue
            if(known.includes(res[file].substring(0,2))) continue
            known.push(res[file].substring(0,2))
            const table = {"ch":"國文","en":"英文","ma":"數學","hi":"歷史","ge":"地理","ci":"公民","ph":"物理","bi":"生物","es":"地科"}
            const subject = document.createElement("option")
            subject.text = table[res[file].substring(0,2)]
            subject.value = res[file].substring(0,2)
            document.getElementById("subject").appendChild(subject)
            delete table

            if(known.includes(res[file].substring(2,5))) continue
            known.push(res[file].substring(2,5))
            const semester = document.createElement("option")
            semester.text = `${res[file].substring(2,5)}學年度`
            semester.value = res[file].substring(2,5)
            document.getElementById("semester").appendChild(semester)

            if(known.includes(res[file].substring(6,7))) continue
            known.push(res[file].substring(6,7))
            const exam = document.createElement("option")
            exam.text = `第${res[file].substring(6,7)}次段考`
            exam.value = res[file].substring(6,7)
            document.getElementById("exam").appendChild(exam)
            

            if(known.includes(res[file].substring(7,9))) continue
            known.push(res[file].substring(7,9))
            const version = document.createElement("option")
            version.text = `第${res[file].substring(7,9)}${res[file].length === 10 ? `${res[file][9]}版` : "版"}`
            version.value = res[file].substring(7,9)
            document.getElementById("version").appendChild(version)
        }
    })    
}

function downloadFile() {
    const subject = document.getElementById("subject").value
    const semester = document.getElementById("semester").value
    const exam = document.getElementById("exam").value
    const version = document.getElementById("version").value
    fetch(`${location.href}/documents/${subject}${semester}${exam}${version}.pdf`)
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a')
        a.href = url;
        a.download = `${subject}${semester}${exam}${version}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    })
    .catch(error => console.error('Error fetching PDF:', error));
}
function addbutton(){
    document.getElementById('download').innerHTML = `<button onclick='downloadFile()'>下載</button>`
}
function login(){
    const users = {"Justmore5mins":"Notes@chshs108",
                    "Hsiao Hui":"biology"}
    const username = prompt("請輸入帳號","username@example.com")
    const password = prompt("請輸入密碼","12345678")
    console.log(username,password)
    if(Object.keys(users).includes(username) && password === users[username]){
        location.href = "backend.html"
    }else{
        alert("帳號或密碼錯誤")
    }
}