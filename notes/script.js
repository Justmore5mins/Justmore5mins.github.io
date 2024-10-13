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
        for(const file in res){
            //generate select option
            if(res[file] === "copyright") continue
            //"ch":"國文","en":"英文","ma":"數學","hi":"歷史","ge":"地理",
            //"ci":"公民","ph":"物理","ce":"化學","bi":"生物","es":"地科"}
            const subject = document.createElement("option")
            subject.text = res[file]
            subject.value = res[file]
            document.getElementById("files").appendChild(subject)
            delete table
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