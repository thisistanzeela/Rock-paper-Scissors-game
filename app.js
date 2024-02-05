// let fullName=prompt('Enter your name');
// let userName="@" + fullName + fullName.length;

// console.log(userName)




// let arr=[44,66,54,89,59];

// console.log(arr);
// arr[5] = 90;
// console.log(arr);

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }




// let arr=['spiderman','superman','thor','hulk']
// for(let i of arr){
//     console.log(i.toUpperCase())
// }




// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for (let val of marks) {
//     sum += val;
// }

// let avg = sum / marks.length;

// console.log(marks)
// console.log(`sum of marks= ${sum}`)
// console.log(`avg marks = ${avg}`) 




// let item=[250,645,300,900,50];
// let idx=0;

// for(let val of item){
//    let offer =val/10;
//     item[idx] -= offer;
//     console.log(` value after offer = ${item[idx]}`)
//     idx++;
// }

// for(let i=0; i<item.length; i++){
//   let offer =item[i] /10;
//   item[i] -= offer;
// }
// console.log(item)

// Slice...
// let arr=[1,2,3,4,5,6,7,8,9];
// // let output=arr.slice(2,5);
// let output= arr.splice(1,3,101,102)
// console.log(output)

// Create an array to store compannies ---
let company=["Bloomberg","Microsoft","Uber","Google", "IBM","Netflix"];

// remove 1st comapny from arr
// company.shift();
// remove uber add ola
// company.splice(2,1,"Ola");
// add amazon add the end
// company.push("Amazon")


// function myFunction(a,b){
//   console.log(a*b)
// }
// myFunction(2,3);

// function sum(x,y){
//   s=x+y
//   return s
//   // console.log("hii")  ye print ni hoga after return nothing will execute
// }
// let result= sum(2,3)
// console.log(result)

// const sum =(a,b)=>{
//   return a+b
// }

// sum(2,3)

// function using function keyword that takes string as an argument nd return the number of vowels in the string.

// function countVowels(str){
//   let count=0;
//   for(const char of str){
//       if(char=== 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//         count++;
//       }     
//   }
//   console.log(count)
// }

// const countVow=(str) =>{
//   let count=0;
//   for(const char of str){
//     if(char=== 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//       count++;
//     }     
//   }
//   console.log(count)
// }


// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//   console.log(val)
// })

//print square of each value using forEach loop

// arr.forEach((num)=>{
//   // console.log(num*num)
//   console.log(num ** 2)
// })

// let calSquare= (num)=>{
//   console.log(num ** 2)
// }
// arr.forEach (calSquare)


// let arr=[2,4,3,5];
// let newArr=arr.map((val)=>{
//   return val * val;
// })


// let newArr=arr.filter((val)=>{
//  return val % 2 === 0
// })

// let arr=[2,4,6,3,5]
// let newArr = arr.reduce((prev,curr)=>{
  // return prev+curr
  // return prev > curr ? prev :curr; 
// })

// let n = prompt("Enter a  number.")

// let arr=[];
// for(let i=1; i<=n; i++){
//   arr[i-1]= i;
// }
// // console.log(arr);

// let sum=arr.reduce((res,curr)=>{
//   return res+curr;
// })
// console.log(sum);

// let factorial=arr.reduce((res,curr)=>{
//   return res*curr;
// })

// console.log(factorial)


// console.dir(document.body)

// let h2=document.querySelector('h2');
// h2.innerText = h2.innerText + " from Apna College"

// console.dir(h2.innerText)

// let divs= document.querySelectorAll('div')
// let idx=1;
// for(let div of divs){
//  div.innerText= `new unique value ${idx}`
//  idx++;
// }
// divs[0].innerText="New Unique value 1";
// divs[1].innerText="New Unique value 2";
// divs[2].innerText="New Unique value 3";

// let btn=document.createElement('button');
// btn.innerText="click me";
// btn.style.background="red";
// btn.style.color="white";
// document.querySelector('body').prepend(btn);


// let para=document.querySelector('p');
// para.classList.add('newClass')

let modeBtn= document.querySelector('#mode');
let body=document.querySelector('body')
let currMode="light"

modeBtn.addEventListener('click',()=>{
  if(currMode === "light"){
    currMode='dark';
    body.classList.add('dark');
    body.classList.remove('light');
  }else{
    currMode="light";
    body.classList.add('light');
    body.classList.remove('dark');
  }
  console.log(currMode)
})