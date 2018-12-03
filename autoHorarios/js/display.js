const parentDiv = document.querySelector("#table");
result.forEach((item)=> {
  let element = document.createElement("div");
  let p = ``;

  item.forEach((clase) => {

    clase.Dia.forEach((item, i) => {
      if (item){
        p = p+`<div id=${i} style='grid-column-start: ${i+1};'>
          ${clase.fullName}:<br> ${clase.Horario[i]}
        </div>` 
      }
    })
  })
  // console.log(item)
  element.innerHTML = p;
  element.setAttribute('class','comb')
  parentDiv.appendChild(element);
})