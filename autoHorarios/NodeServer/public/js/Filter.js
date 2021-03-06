/**
 * Data and Managment
 */
// Dinamic Filter
let DefaultChoices = {
  'Dias': [1,1,1,1,1],
  'Rango': {
    'chk': false,
    'i': [8,8,8,8,8],
    'f': [22,22,22,22,22]
  }
}
let choices = {
  'Dias': [1,1,1,1,1],
  'Rango': {
    'chk': true,
    'i': [8,8,8,8,8],
    'f': [22,22,22,22,22]
  }
}
let ranDefaultD = {
  'i': [8,8,8,8,8],
  'f': [22,22,22,22,22]  
}
let ranManD = {
  'i': [8,8,8,8,8],
  'f': [14,14,14,14,14]  
}
let ranTardD = {
  'i': [10,10,10,10,10],
  'f': [16,16,16,16,16]  
}
let ranNocheD = {
  'i': [12,12,12,12,12],
  'f': [22,22,22,22,22]  
}

let subjchektd = [];



/**
 * Filter Functions
 */
function ChangeRange(obj){
  obj.i.forEach((item,j)=>{
    choices.Rango.i[j] = item
  })
  obj.f.forEach((item,j)=>{
    choices.Rango.f[j] = item
  })
}

let FilterV = []
function Dynamicfilter(obj, arr){
  // Object choices, arr to filter
  let rtn = arr
  function FDias(item){
    let k = 0
    let i = 0
    let cond = true
    // Loop: Por los dias que se quiere mostrar
    while ((k < obj.Dias.length) && (cond)) {
    // for (let k = 0; k < obj.Dias.length; k++) {
      if (!obj.Dias[k]){
        i = 0
        cond = true
        while ((i < item.length) && (cond)){
          if (item[i].Dia[k]) cond = false;
          i++
        }
      }
      k++
    }
    if (cond) return item;
  }
  function FRange(item){
    let k = 0
    let i = 0
    let cond = true
    while ((k < obj.Rango.i.length) && (cond)) {
    // for (let k = 0; k < obj.Dias.length; k++) {
      
      cond = true
      i = 0
      while ((i < item.length) && (cond)){
        // Condicion de fallo
        // if (item[i].Dia[k]) cond = false;
        if (item[i].Dia[k]){
          if ( (obj.Rango.i[k] > item[i].Horario[k]) || (obj.Rango.f[k] < (item[i].Horario[k] + item[i].dur)) )  cond = false;
        }
        i++
      
      }
      k++
    }
    if (cond) return item;
  }

  rtn = rtn.filter(FDias);
  if (obj.Rango.chk) { rtn = rtn.filter(FRange);}

  return rtn;
}

function applyFilt(ch){
  FilterV = Dynamicfilter(ch, Defaultresult)
  Display(FilterV);
  return FilterV.length;
}

// Handles the raw data sended from the server
function handler(arr){
  // Procesamiento de datos
    // let newComb = cartesian(newD)
    // applyFilt(choices)
}
/**
 * DOM Filter
 */

const FilterForm = document.querySelector('.Formfilter')

const subBtn = document.querySelector("#applyBtn")
const restBtn = document.querySelector("#resetBtn")


// Rango Const
const chkDia = document.querySelectorAll("#chkDia")

const RanH_chk = document.querySelector("#RangoHchk")
const RanH_i = document.querySelectorAll("#RanH_i")
const RanH_f = document.querySelectorAll("#RanH_f")

const ranMan = document.querySelector("#ranMan")
const ranTar = document.querySelector("#ranTar")
const ranNoche = document.querySelector("#ranNoche")

// subject const
const url = 'http://localhost:8000/materias/all';
const divMat = document.querySelector(".matGrid")
const subj_url = 'http://localhost:8000/subjects'

let newComb;

// Subbmit button 
subBtn.addEventListener("click", function(event){
  // Prep
  event.preventDefault()
  let subjChks = document.querySelectorAll("#subjChk")
  subjchektd = []

  // ---- Actions ---- 

  // Subject checked
  subjChks.forEach((item)=>{
    if (item.checked){
    subjchektd.push(item.value)
    }
  })

  // Fetching the data
  // console.log(subjchektd)   
  fetch(subj_url, {
    method: 'POST', 
    body: JSON.stringify(subjchektd), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {

    // Parsing
    response.forEach( i => {
      i.Dia = JSON.parse(i.Dia)
      i.Horario = JSON.parse(i.Horario)
    })
    let test = []
    // const newData = response.reduce((arr, el) => {
    //   console.log("  Heeeey heeey heeeey")
    //   if (el.Materia === 'Cdivv') {
    //     // If el is pushed directly it would be a reference
    //     // from the original data object
    //     arr.push({...el});
    //   }
    //   return arr;
    // }, []);
    subjchektd.forEach(chektd => {
      let temp = response.reduce((arr, el) => {
        // console.log("  Heeeey heeey heeeey")
        if (el.Materia === chektd) {
          // If el is pushed directly it would be a reference
          // from the original data object
          arr.push({...el});
        }
        return arr;
      }, []);    
      test.push(temp)  
    })

    newComb = cartesian(test)

    newComb.filter(DISC);

    Display(newComb);

  });


  // days checked
  chkDia.forEach((item,i)=>{
    choices.Dias[i] = item.checked
  })
  // Hours checked
  choices.Rango.chk = RanH_chk.checked
  RanH_i.forEach((item,k)=>{
    choices.Rango.i[k] = item.value
  })
  RanH_f.forEach((item,k)=>{
    choices.Rango.f[k] = item.value
  })
  // console.log(choices)
});

// reset button 
restBtn.addEventListener("click", function(event){
  event.preventDefault()
  FilterForm.reset()

  ChangeRange(ranDefaultD)
  UpdateRango()

  console.log("Numero de Resultados:", applyFilt(DefaultChoices))
});

// Range buttons
ranMan.addEventListener("click", function(event){
  event.preventDefault()
  RanH_chk.checked = true
  ChangeRange(ranManD)
  UpdateRango()
})
ranTar.addEventListener("click", function(event){
  event.preventDefault()
  RanH_chk.checked = true
  ChangeRange(ranTardD)
  UpdateRango()
})
ranNoche.addEventListener("click", function(event){
  event.preventDefault()
  RanH_chk.checked = true
  ChangeRange(ranNocheD)
  UpdateRango()
})

// Subjects filter

// fetching subjects from database
fetch(url)
.then(data=>{ return data.json()} )
.then(res=>{ 
  res.forEach((mat)=> {
    let input = document.createElement("input")
    let sptext = document.createElement("span")
    input.setAttribute("id","subjChk")
    input.setAttribute("type","checkbox")
    input.setAttribute("checked","true")
    
    input.setAttribute("value", `${mat.name_id}`)

    sptext.innerText = mat.name_id;
    divMat.appendChild(sptext)
    divMat.appendChild(input)
    
  })
})

/**
 * Default Filter Settings
 */


function UpdateRango(){
  RanH_i.forEach((item,k)=>{
    item.value = choices.Rango.i[k]
  })
  RanH_f.forEach((item,k)=>{
    item.value = choices.Rango.f[k]
  })
}
UpdateRango()