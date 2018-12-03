function Display(arrC){
  const parentDiv = document.querySelector("#table");
  const ResultNum = document.querySelector('.ResultNum')
  parentDiv.innerHTML = ""
  arrC.forEach((item, j)=> {
    // Loop foreach element in the combination array
    let element = document.createElement("div");
    let p = ``;

    item.forEach((clase) => {
      // Loop en Cada Dia de las clases
      clase.Dia.forEach((item, i) => {
        // Loop en cada Hora de los Dias
        if (item){
          p = p+`<div id=${i} style='background: ${clase.Color}; grid-column-start: ${i+1}; grid-row-start: ${ Math.round(clase.Horario[i])};'>
            ${clase.fullName}:<br> ${clase.Horario[i]}
          </div>` 
        }
      })
    })
    // console.log(item)
    element.innerHTML = p+`<span class="combID">${j + 1}</span>`;
    element.setAttribute('class','comb')

    element.setAttribute('id',`${j}`)

    parentDiv.appendChild(element);
  })
  ResultNum.innerHTML = `Numero de Resultados: ${arrC.length}`
}

Display(Defaultresult);