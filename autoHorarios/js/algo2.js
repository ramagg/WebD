

function comb(){
  for(clases in data){
    for(horario in data[clases])
    console.log(data[clases][horario])
  }
}
comb();