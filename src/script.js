fetch("http://localhost:3445/animals")
.then(resp=>resp.json())
.then(data=>{
    document.getElementById("animals").innerHTML=
    data.map(animal=>`<li id="id_${animal.id}">${animal.name} : ${animal.age}</li>`)
    // console.log(data)

    let list = document.querySelectorAll("li");
    list.forEach(listItem=>listItem.addEventListener('click',(evt)=>{

        console.log(evt.target.id)
        let chosen = document.getElementById("chosen")
        let animal = data.find(a=>a.id == evt.target.id.replace("id_",""))
        console.log(animal)
        chosen.innerHTML= `
        <h2>${animal.name}</h2>
        <div>Age:${animal.age}</div>
        <div>Color:${animal.color}</div>
        <div>Type:${animal.type}</div>
        `
    }))
})