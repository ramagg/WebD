function HoraConversor(h){
  let convert = " "
  let Horas = 0
  let Min = 0
  let dc = "00"

  Horas = Math.floor(h)
  Min = (h-Math.floor(h))*60

  if (Horas > 9){
    convert = `${Horas}:${(Min == 0) ? '00' : Math.floor(Min) }`
  }else{
    convert = `0${Horas}:${(Min == 0) ? '00' : Math.floor(Min) }`
  }
  return convert;
}
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
          p = p+`<div class="Card" id=${i} style='background: ${clase.Color}; grid-column-start: ${i+1}; grid-row-start: ${ Math.round(clase.Horario[i])};'>
             
            <span class="CardName">${clase.fullName}:</span>
            <div class="CardInfo">
              <span class="CardHora">${HoraConversor(clase.Horario[i])} - ${ HoraConversor(clase.Horario[i] + clase.dur) }</span>
              <span class="CardSalon">${clase.Salon}</span>
            </div>
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