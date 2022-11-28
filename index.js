

/*
const number =(nr,sec)=>{
setInterval(()=>{
    nr=nr+1
    if(nr%2===0){
        console.log('Number is even')
        } else{
          console.log(('Number is odd'))}
},sec*1000)
}

number(1,1)

import fs from 'fs'

function parseCSV(content){
  const lines= content.split("/n")
  return lines
}

fs.readFile('./index.js','utf-8',function callback(error,content){
  if(error){
   console.log("this file does not exist")
  }
  else{
    console.log(content)
    const data=parseCSV(content)
    console.log(data)
  }
  
})

Write a function that reads a file like this:
---


and for each line, waits t  he second on the left and then prints the text on the right!

Write a function that reads a file like this:
---
3,a
4,programmer!
1,I
2,am

and for each line, waits the second on the left and then prints the text on the right!



import fs from 'fs'

const file = `3,a
4,programmer!
1,I
2,am`

const lines = file.split("\n");
let dataArray=[]

for (let line of lines) {
  const data = line.split(",");
 // console.log(data)
  let allData={}
  allData.seconds = data[0];
  allData.text = data[1];
    dataArray.push(allData)

}
//console.log(dataArray)
function readLines(){
for (let values of dataArray){
setTimeout(()=>{
 console.log(values.text)
    },values.seconds*1000)
  }
}

readLines()
*/









////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function convertFile(file) {
  const lines = file.split("\n");
  console.log(lines)
  const pizza_eaten = [];

  for (let line of lines) {
    console.log("line =>", line);
    const data = line.split(",");

    const clear_data = {};
    clear_data.name = data[0];
    clear_data.pizza = data[1];
    clear_data.quantity = data[2];

    pizza_eaten.push(clear_data);
  }
  return pizza_eaten;
}

const file = `john,margherita, 3 
john,marinara,3
jimmy,margherita,1
alice,marinara,2
bob,bianca,4
luke,bianca,2
tom,margherita,3
daniel,marinara,1
`;

const file_converted = convertFile(file);
console.log(file_converted);


 //Second function when we find the total number of varieties of pizzas
function totalOfVarietesofPizzasPerYear(arr){
 
  let totalNumbersofMargheritasPerYear = 0
  let totalNumbersofMarinarasPerYear = 0
  let totalNumbersofBiancasPerYear = 0

  for (let values of arr){
  if (values.pizza ==='margherita'){
 totalNumbersofMargheritasPerYear = totalNumbersofMargheritasPerYear + Number(values.quantity) * 52 //weeks that has one year
}
if (values.pizza ==='bianca'){
  totalNumbersofBiancasPerYear = totalNumbersofBiancasPerYear + Number(values.quantity) * 52 //weeks that has one year
}
if (values.pizza ==='marinara'){
  totalNumbersofMarinarasPerYear = totalNumbersofMarinarasPerYear + Number(values.quantity) * 52 //weeks that has one year
}
  }
  //console.log(totalNumbersofMargheritasPerYear)
  //console.log(totalNumbersofMarinarasPerYear)
  //console.log(totalNumbersofBiancasPerYear)

  let allPizzaPerYear={}

  allPizzaPerYear['Margherita']=totalNumbersofMargheritasPerYear
  allPizzaPerYear['Bianca']=totalNumbersofMarinarasPerYear
  allPizzaPerYear['Marinara']=totalNumbersofBiancasPerYear
 
  return allPizzaPerYear
}


let PizzaObject=totalOfVarietesofPizzasPerYear(file_converted)


//Third function when we find the total number of indrigients
function totalNumberofIndrigientsPerYear(arr){
  let wheat=0
  let tomatoes=0
  let cheese=0
if(arr['Margherita']){
  tomatoes=tomatoes+(80 * arr['Margherita'])
  wheat= wheat+ (120* arr['Margherita'])
  cheese=cheese+(80*arr['Margherita'])
}
if(arr['Bianca']){
  wheat= wheat+ (150* arr['Bianca'])
 }
if(arr['Marinara']){
  wheat= wheat+ (100* arr['Marinara'])
  tomatoes= tomatoes+ (100* arr['Marinara'])
 }
//console.log(tomatoes)
//console.log(wheat)
//console.log(cheese)
return `We need ${tomatoes} gram tomatoes, ${wheat} gram wheat, ${cheese} gram cheese to cook all the indrigients for one year`
  }
  
  console.log(totalNumberofIndrigientsPerYear(PizzaObject))
  */

  import fs from 'fs'





  const file=
  `albanian.txt,nje fjali shqipe
  italian.txt,una frase italiana
  spanish.txt,una frasa espanol
  englisht.txt,one english word`
  
  
  const fileArray = file.split('\n')
  let arrayofAllCountries=[]
  
  for(let seperatedFiles of fileArray){
  let seperatedFilesInArray=seperatedFiles.split(',')
  let objectOfCountries={}
  objectOfCountries.country=seperatedFilesInArray[0]
  objectOfCountries.word=seperatedFilesInArray[1]
  arrayofAllCountries.push(objectOfCountries)
  }
 function CallTheWordForEaChCountry(){
  arrayofAllCountries.forEach((values)=>{
   // console.log(values.country)
   // console.log(values.word)
    fs.writeFile(values.country , values.word, (err)=>{
      if (err){
        throw new Error ('Files are not created')
      }else{
        console.log('Files are created succesfully')
      }
    })
  })
  }
  


 