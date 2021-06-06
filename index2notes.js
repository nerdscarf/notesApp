// var textElement = document.getElementById("note")

// function saveNote() {
    
// }


// On click, take the contents of note-text and store it in local storage, append it to notes-list

// var submit = document.getElementById(".submit");

// var text = document.getElementById(".note");

// submit.addEventListener("click", (e)=>{
//     saveNote(e);}
// )

// function saveNote(e){
//     localStorage.setItem(text, value)
//     console.log(localStorage.clear);
//     console.log(text);
// }

e = document.createElement("p")
e.textContent = myNote
section.appendChild(e)



var textElement = document.getElementById("note")

function saveNote(){
    if(textElement.value == ""){
        return alert('Empty')
    }
    const id = getNoteId()
    let noteObject = getExistingNote()
    if(!noteObject){
        noteObject = {}
    }
    noteObject[id] = textElement.value
    localStorage.setItem('notes', JSON.stringify(noteObject))
    alert('Saved')
}

function getNoteID(){
    let noteObject = getExistingNote()
    if(!noteObject){
        return 1
    }
    const keysArray = Object.keys(noteObject)
    const numberKeys = keysArray.map((key)=>Number(key))
    console.log(numberKeys)
    return Math.max(...numberKeys) * 1
}

function getExistingNotes() {
    let notes = localStorage.getItem('notes')
    if(!notes){
        return null
    }
    return JSON.parse(notes)
}




function getNotes(){
    let notes = getExistingNotes()
    let notesArray = Object.values(notes)
    let orderedList = document.getElementById('notes-list');
    notesArray.forEach(note => {
        let listItem = document.createElement('li');
        listItem.innerHTML = note
        orderedList.appendChild(listItem);
    })
}