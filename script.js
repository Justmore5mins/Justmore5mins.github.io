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

class ContactCard extends HTMLElement{
    connectedCallback() {
    const img = this.getAttribute("img");
    const href = this.getAttribute("href");
    const name = this.getAttribute("name");
    const isEnd = this.hasAttribute("end");
    const description = this.textContent.trim();
    

    this.innerHTML = `
      <a href="${href}" target="_blank" rel="noopener noreferrer" class="contact-card">
        <img src="${img}" alt="${name}">
        <span>${name}</span>
        <span id="description">${description}</span>
        ${!isEnd ? "<hr style='width: 80vw;max-width: 800px; color: #323232;'>" : ""}
      </a>
    `;
  }
}

customElements.define("custom-contact", ContactCard);