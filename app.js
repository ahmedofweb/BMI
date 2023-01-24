
const h1 = document.querySelector("h1") 
const img = document.querySelector(".img")

let ism = prompt("ismingizni kiriting:")
let height = +prompt("Boy o'lchamingizni metrda kiriting (1.80) :")
let weight = +prompt("Vazningizni KG da kiriting (70) : ")
let result = weight / (height**2)
console.log(Math.round(result))

if (Math.round(result) < 18.5){
//   alert(`${ism}, you are Underweight`)
   h1.textContent = `${ism}, siz ozg'insiz`
   img.setAttribute("src", "./images/underweight.jpg")
}else if(Math.round(result) >= 18.5 && Math.round(result) <= 22){
   h1.textContent = `${ism}, tabriklayman sizning qomatingiz normal holatida `
   img.setAttribute("src", "./images/perfect.jpg")
}else if(Math.round(result) >= 22 && Math.round(result) <= 25){
    h1.textContent = `${ism}, siz ozroq semizsiz`
    img.setAttribute("src", "./images/perfect.jpg")
}else if(Math.round(result) > 25 ){
    h1.textContent = `${ism}, siz ancha semissizu`
    img.setAttribute("src", "./images/obace.jpg")
}else{
    h1.textContent = `Xatolik yuz berdi qaytadan urunib koring`
}