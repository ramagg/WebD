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


// Dinamic Filter
let choices = {
  'Dias': [1,1,1,1,1]
}
function filter(obj, arr){
  // Object choices, arr to filter
  
}
console.log('Numero de Resultados:', Defaultresult.length)