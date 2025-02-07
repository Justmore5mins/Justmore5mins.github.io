const params = new URLSearchParams(location.search);

function login(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    getusers("users.csv")
    .then(users => {
        for(const user of users){
            info = atob(user).split(" ")
            if(info[0] == username && info[1] == password){
                location.href = params.get("to")+".html";
                sessionStorage.setItem("perm",getpermission(username));
                console.log(username+" logged in!");
                return 0;
            }
        }
        alert("Can't you login? FALIURE!");
        location.reload();
    })
}

async function getusers(url) {
    try {
      // Fetch the CSV file from the server
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch CSV: ${response.statusText}`);
      }
  
      // Get the content as text
      const csvText = await response.text();
  
      // Split the CSV text into lines (list of strings)
      const csvLines = csvText.split('\n').map(line => line.trim());
  
      // Return the list of strings
      return csvLines;
    } catch (error) {
      console.error('Error fetching or processing the CSV file:', error);
      return [];
    }
}

function getpermission(user){
    const admins = ["Justmore5mins","ken","jacky"];
    if(admins.includes(user)) return 0;
    else return 1;
}