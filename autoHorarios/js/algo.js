

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