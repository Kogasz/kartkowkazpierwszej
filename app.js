async function odczyt(){
    const data = await fetch(`http://localhost:3000/odczyt`)
    const json = await data.json()

    document.getElementById("srodkowylewy").innerHTML = ""
    for(var i=0;i<=json.length-1;i++){
    const div = document.createElement("div")
    div.setAttribute("class","glowny")
    const divlewy = document.createElement("div")
    divlewy.setAttribute("class","nazwa")
    const divprawy = document.createElement("div")
    divprawy.setAttribute("class","ilosc")

    const nazwa = document.createElement("h1")
    nazwa.innerHTML = json[i].Nazwa

    const ilosc = document.createElement("h2")
    ilosc.innerHTML = json[i].Ilosc_lekcji

    div.appendChild(divlewy)
    div.appendChild(divprawy)
    divlewy.appendChild(nazwa)
    divprawy.appendChild(ilosc)
    document.getElementById("srodkowylewy").appendChild(div)
    }
}
odczyt()

async function dodaj(){
    const nazwa = document.getElementById("nazwai").value
    const godz = document.getElementById("iloscl").value

    fetch(`http://localhost:3000/dodaj/${nazwa}/${godz}`)
    odczyt()
}
async function filtr(){
    const min = document.getElementById("min").value
    const max = document.getElementById("max").value

    const data = await fetch(`http://localhost:3000/filtracja/${min}/${max}`)
    const json2 = await data.json()
    

    document.getElementById("srodkowylewy").innerHTML = ""
    for(var j=0;j<=json2.length-1;j++){
        console.log("ok")
    const div = document.createElement("div")
    div.setAttribute("class","glowny")
    const divlewy = document.createElement("div")
    divlewy.setAttribute("class","nazwa")
    const divprawy = document.createElement("div")
    divprawy.setAttribute("class","ilosc")

    const nazwa = document.createElement("h1")
    nazwa.innerHTML = json2[j].Nazwa

    const ilosc = document.createElement("h2")
    ilosc.innerHTML = json2[j].Ilosc_lekcji

    div.appendChild(divlewy)
    div.appendChild(divprawy)
    divlewy.appendChild(nazwa)
    divprawy.appendChild(ilosc)
    document.getElementById("srodkowylewy").appendChild(div)
    }
}