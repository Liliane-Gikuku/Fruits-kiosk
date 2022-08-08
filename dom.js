

let bodyColor= document.getElementById("body")
bodyColor.style.backgroundColor="silver"

let titleColor= document.getElementById("title")
titleColor.style.color="green"

let titles=document.getElementById('fruits')
titles.style.textTransform='upperCase'

let titles1=document.getElementById('vegetables')
titles1.style.textTransform='upperCase'

// let moreFruit=document.getElementById('fruList')
// moreFruit.append('Avocado')
let newList=document.createElement('li')
let newFruit=document.createTextNode('Guava')
newList.appendChild(newFruit)

let fruits1=document.getElementById('fruList')
fruits1.append(newList)


let newList1=document.createElement('li')
let newVeg=document.createTextNode('Sukuma')
newList1.appendChild(newVeg)

let veg1=document.getElementById('vegList')
veg1.append(newList1)



// function background(){
//     document. getElementById('body'). style. backgroundColor = 'silver' ;
//     }
// background()

// function titley(){
//     document.getElementById('title').style.color='green';
// }
// titley()