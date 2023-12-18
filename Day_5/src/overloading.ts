//function overloading:
//method:property of class in simplewords if a function defined inside the class it is called method

//method overloading:
class Details{
getId():number;
getId(qty:number):number[];
getId(qty?:number):number|number[]{
   if(qty===undefined){
       return Math.random();
   }
   const arr=[];
   for(let i=0;i<qty;i++){
    arr.push(Math.random());
   }
   return arr;
 }
}

let myNumber=new Details();
//const finalResult:number|number[]=myNumber.getId();
const finalResult:number[]=myNumber.getId(1);
//console.log(finalResult);
console.log(finalResult);

