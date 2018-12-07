const imgs = document.querySelectorAll('#Simg')


imgs.forEach((img)=>{
  let url = img.dataset.src;
  fetch(url) 
    .then((res) => { 
      console.log(res) 
      img.src = res.url
    })
})

const imgARR = Array.from(document.querySelectorAll('#Simg'))
// test.unshift(test.pop()); Ciclo simple
function Slide(){
  let ARRlength = imgARR.length
  imgARR[1].classList.remove("Active");
  imgARR[length].classList.add("Active");
  imgARR.unshift(imgARR.pop())
  console.log(imgARR)
}
Slide()
let rotate = setInterval(Slide, 5000);
// clearInterval(rotate)
