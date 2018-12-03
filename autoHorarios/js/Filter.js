// Default Filter function 
function deter(h1,h2){
  // Determina si dos horarios pueden estar juntos
  let min = h1
  let max = h2

  if (min > max) {
    min = h2
    max = h1
  } 
  return (min + 1.5) <= max ;
}

function test(arr){
  // Evalua si un dia no tiene horarios solapados
  let i = 0
  let j = 0
  Cond = true
  while ((i < arr.length - 1 ) && (Cond)){
    j = i + 1
    while ((j < arr.length) && (Cond)){
      Cond = deter(arr[i], arr[j]);
      j++
    }
    i++
  }
  return Cond
}

function DISC(item){
  // Filtra las posibilidades con horarios solapados
  let i = 0
  let eval = true

  while ((i < item[0].Dia.length) && (eval)) {
    let temp = []
    for (let j = 0; j < item.length; j++) {
      if (item[j].Dia[i]){
        temp.push(item[j].Horario[i])
      }
    }
    eval = test(temp);
    i++
  }
  if (eval){
    return item
  }
}
const Defaultresult = comb.filter(DISC);
console.log('Numero de Resultados:', Defaultresult.length)

// Dinamic Filter
let DefaultChoices = {
  'Dias': [1,1,1,1,1]
}
let choices = {
  'Dias': [1,1,1,1,1],
  'Horas': [16,16,16,16,16]
}

let FilterV = []

function Dynamicfilter(obj, arr){
  // Object choices, arr to filter
  function FDias(item){
    let k = 0
    let i = 0
    let cond = true
    // Loop: Por los dias que se quiere mostrar
    // while ((k < obj.Dias.length) && (cond)) {
    for (let k = 0; k < obj.Dias.length; k++) {
      if (!obj.Dias[k]){
        i = 0
        cond = true
        while ((i < item.length) && (cond)){
          if (item[i].Dia[k]) cond = false;
          i++
        }
      }
    }
    
    if (cond) return item;
  }
  let rtn = arr.filter(FDias);

  return rtn;
}
function applyFilt(ch){
  FilterV = Dynamicfilter(ch, Defaultresult)
  Display(FilterV);
  return FilterV.length;
}

// Filter function 

const FilterForm = document.querySelector('.Formfilter')
const subBtn = document.querySelector("#applyBtn")
const restBtn = document.querySelector("#resetBtn")
const chkDia = document.querySelectorAll("#chkDia")

subBtn.addEventListener("click", function(event){
  event.preventDefault()
  chkDia.forEach((item,i)=>{
    choices.Dias[i] = item.checked
    // console.log(choices.Dias)
  })
  console.log("Numero de Resultados:", applyFilt(choices))
});
restBtn.addEventListener("click", function(event){
  event.preventDefault()
  FilterForm.reset()
  applyFilt(DefaultChoices)
});