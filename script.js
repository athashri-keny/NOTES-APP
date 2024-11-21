const notesContainer = document.querySelector(".notes-container");
const createbtn = document.getElementById("btn");


function update() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function createnote() {
    notesContainer.style.display = "block";
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box"; 
    img.className = "trash";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "delete.png"; 
    notesContainer.appendChild(inputbox);
    inputbox.appendChild(img); 
    
    
    update();
}
createbtn.addEventListener("click", createnote);


notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") { 
        e.target.parentElement.remove(); 
        
    
        if (notesContainer.children.length === 0) {
            notesContainer.style.display = "none"; 
        }
        update();
    }
});


function loadNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes; 
        notesContainer.style.display = "block"; 
        const trashIcons = document.querySelectorAll(".trash");
        trashIcons.forEach(icon => {
            icon.addEventListener("click", (e) => {
                e.target.parentElement.remove(); //
                if (notesContainer.children.length === 0) {
                    notesContainer.style.display = "none"; 
                }
                update();
            });
        });
    }
}

window.onload = loadNotes;
