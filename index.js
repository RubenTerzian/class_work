// let foo = ()=>{
//    let time =new Date().getSeconds();
//     setInterval(() =>{
//         time =new Date().getSeconds();
//         console.log(time);
//     }, 1000)
// }


// const customReduse = function(callback, accum){
//     let index = 0;
//     if (accum === undefined){
//         accum = this[0];
//         index = 1;
//     }
//     for (let i = index; i< this.length; i++){
//         accumulator = callback(accum, this[index], i, this);
//     }
//     return accum;
// };

// Object.defineProperty(Array.prototype, 'customReduse', {
//     value: customReduse,
//     enumerable: false,
// });


// const customJoin = function(separ){
//     let str = '';
//     const separator = separ === undefined ? ',': separ;
//     for (let index in this){
//         index<this.length-1 ? str+= this[index] + separator: str+= this[index];
//     }
//     return str;
// };

// Object.defineProperty(Array.prototype, 'customJoin', {
//     value: customJoin,
//     enumerable: false,
// });


// const searchByName = ()=> {
//     let value = prompt('Введите имя');
//     if(value === null){
//         searchByName();
//         return;
//     }
//     value = value.trim().toLowerCase();
//     return condidateArr.filter(condidate =>{
//         let name = condidate.name.toLowerCase();
//         return name.includes(value)
//     });
// };

// console.log(searchByName());

const liveCollection = document.getElementsByClassName('main');


console.log(elem);
console.dir(elem);

Array.from(liveCollection);

const notLiveCollection = document.querySelectorAll('div');