const container = document.querySelector("#monster-container")
const forward = document.querySelector("#forward")
const back = document.querySelector("#back")
let inputs =  document.querySelectorAll("input")
let x = 0
let y = 50


function loadFirstFifty() {
    fetch("http://localhost:3000/monsters").then(function (response) {
      return response.json();
    })
      .then(function (object){
        object.slice(x, y).forEach(function(element){
                container.insertAdjacentHTML("beforeend", `
                <div><h1>${element.name}</h1><div>
                <strong>Age:${element.age}</strong><div>
                Bio: ${element.description}
                `)
        })
      })
      return ""
  }




loadFirstFifty()

// if arrow button is clicked

forward.addEventListener("click", function(element){

    x += 50
    y += 50
    container.innerHTML = 
    loadFirstFifty()
    })

back.addEventListener("click", function(element){

    if(x === 0){
        alert("There's nothing beyond this point brah");
    }else {
    x -= 50
    y -= 50
    container.innerHTML = 
    loadFirstFifty()
    }
})

// function / variable pair  to send post request 

function addPost(name, age, description){ 
    fetch("http://localhost:3000/monsters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },  
      body: JSON.stringify({
        "name": name,
        "age": age,
        "description": description
      })
      })
      .then(function(response){return response.json})
        .then(function(object){
            event.preventDefault()
          loadFirstFifty()
          console.log(`${name} has been created! I think..`)  
        
        });
  }; //
  
  
  
  // if a sumbission is made, run this code
  document.addEventListener("submit", function(){
    event.preventDefault()
    name = inputs[0].value
    age = inputs[1].value
    description = [2].value
    addPost(name, age, description)
  })
  
  
