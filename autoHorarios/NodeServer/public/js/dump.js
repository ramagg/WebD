function compareD(v, u){
	let vere = false;
	for (var i = 0; i < v.length; i++) {
		if(v[i] == 1 && u[i] == 1){
			vere = true;
			break;
		}else{
			continue;
		}
	}
	return vere;
}

function compareH(v, u){
	let vere = false;
	for (var i = 0; i < v.length; i++) {
		if(v[i] == 0 && u[i] == 0){
			continue;	
		}else if(Math.abs(v[i] - u[i]) < 1.3){
			vere = true;
			break;
		}else{
			continue;
		}
	}
	return vere;
}


function deter(elemento, array){
	//passes = [elementos_pasados,Determinantes]
	let passes = [];
	let Elm_dia = elemento.Dia;
	let Elm_hora = elemento.Horario;


	if (array.length == 0){
		passes.push([[elemento],[[Elm_dia],[Elm_hora]]])
	}


	let determinant = array[1];
	for (var i = 0; i < array.length; i++) {

		if (compareD(Elm_dia, array[i].Dia)) {
			if (compareH(Elm_hora, array[i].Horario)) {
				console.log(elemento,array[i],'No pueden estar juntos')
				continue;
			}else{
				passes.push([elemento,array[i]])

			}
		}else{
			passes.push(
				[[array[i]],[[array[i].Dia],[array[i].Horario]]])
		}
	}
	return passes
}

//let items = deter(data[3][0],data[0]);


let sheet = [];
for (var i = data.length; i > 0 ; i--) {
	//let branch = [ [Aceptados],[ [Dia] , [Horarios]  ]  ];

	let branch = [ [],[ [] , []  ]  ];
	for (var j = 0; j < data[i].length; j++) {

		let add = deter(, branch)

	}


}



function comb(rama,arbol){
	let temp = [];

	for (var i = arbol.length - 1; i >= 0; i--) {
		
		let carry = [];
		console.log("*****");
		for (var j = rama.length - 1; j >= 0; j--) {
			console.log("------");
			carry = [];
			console.log("Carry:i", carry);
			console.log(arbol[i]," Is Array",Array.isArray(arbol[i]));
			if (Array.isArray(arbol[i])){
				carry = arbol[i];
				console.log("Carry:mid",carry);
				carry.push(rama[j]);
				temp.push(carry);
			}else{
				console.log("Carry:mid-else1",carry);
				carry.push(arbol[i],rama[j])
				console.log("Carry:mid-else2",carry);
				temp.push(carry);
			}
			console.log("Carry:f",carry);
			console.log("------");
		}
		console.log("*****");
	}
	return temp;
}


let r1 = comb(data[2],data[3]);
// r2 = comb(data[1],r1);

function comb(){
  for(clases in data){
    for(horario in data[clases])
    console.log(data[clases][horario])
  }
}
comb();

// Recursion 

let arra = [2,4,5,7,9];

function factorial(number) {
  if (number <= 0) { // terminal case
    return 1;
  } else { // block to execute
    return (number * factorial(number - 1));
  }
};

function insOrd(arr,n){
  if (arr.length == 0){
    return arr[0] = n;
  }else if (arr[0] > n){
    // Insertar n en 0, retornando un array
    return [n].concat(arr);
  }else {
    let temp = arr.shift();
    return [temp].concat(insOrd(arr,n));
  }
}
