let newObj = function(object) {
  let newObject = {};
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }
  }
  return newObject;
};

// Combination of an array of arrays
function cartesian(arg) {
	var r = [], max = arg.length-1;
	function helper(arr, i) {
			for (var j=0, l=arg[i].length; j<l; j++) {
					var a = arr.slice(0); // clone arr
					a.push(arg[i][j])
					if (i==max) {
							r.push(a);
					} else
							helper(a, i+1);
			}
	}
	helper([], 0);
	return r;
};

// Gives an array of every class in data
function idGive(arr){
	// Gives the id of each class in the data array
	let r = []
	data.forEach((items) => {
		r.push(items.map(item => item.id))
	})
	return r;
}

// 
// console.log(arrID);

// Gives the info of a class
function claseInfo(id){

}
claseInfo("P1Cdivv");
claseInfo("D1P1");
// Discriminator 
// It determinates if a combination is posible or not
let arrID = idGive(data)
let comb = cartesian(data)




