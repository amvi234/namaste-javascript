// x = 10
// a();
// b();
// console.log("global", x);
// function a() {
//     var x = 100;
//     console.log("a", x);
// }
// function b() {
//     var x = 200;
//     console.log("b", x);
// }

setTimeout(function() {
    console.log('now')
}, 5000)

function x(y) {
    console.log('x is');
    y();
}
x(function y() {
    console.log("Hello");
})

// const submitName = (event) => {
//     event.preventDefault();
//     const name_input = document.getElementById('name_input');
//     debugger;
//     const name = name_input.value;
//     console.log(name);
//     const character_array = name.split("");
//     debugger;
//     const reversed_characters_array = character_array.reverse();
//     const reversed_name = reversed_characters_array.join("");
//     document.getElementById('reversed_name').innerHTML = reversed_name;
// }
// function attachEventListeners() {
//     let count = 0;
//     document.getElementById("ClickMe").addEventListener("click", function xyz() {
//         console.log("Button Clicked", ++count);
//     })
// }
// attachEventListeners();
// console.log("Start");
// let count=0;
// document.getElementById("ClickMe")
// .addEventListener("click", function cb(){
//     console.log("Callback", ++count);
// });
// console.log("End");

const arr = [5, 1, 3, 2, 6];

// const output = arr.map((x) => x.toString(2));
// console.log(output);


// const output = arr.filter(function isEven(x){
//     return x%2 === 0;
// });
// console.log(output);

// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(findSum(arr));

// const output = arr.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// }, 0);
// console.log(output);

// const output1 = arr.reduce(function (max, curr) {
//     if (curr > max) {
//         max = curr;
//     }
//     return max;
// }, 0);

// console.log(output1);

// console.log("Namaste");

// setTimeout(function () {
//     console.log("Javascript");
// }, 5000)

// console.log("Season 2");

// const cart = ["shoes", "pants", "kurta"];


// api.createOrder(cart, function (){
//     api.proceesToPayment(function (){
//         api.showOrderSummary()
//     })
// })

// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function (orderId){
//     proceedToPayment(orderId);
// }); 

// const promise = createOrder(cart);


// {data: undefined}

// const API = "https://api.github.com/users/amvi234";
// const u=fetch(API);
// console.log(u);

// u.then(function(data){
//     console.log(data);
// })

//Promise => .all, .allSettled,
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P1 Success"), 1000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2 Success"), 1000);
//     // setTimeout(() => reject("P2 Fail"), 1000);
// })

// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("P3 Success"), 2000);
//     setTimeout(() => reject("P3 fail"), 1000);
// })
//it will return a object in case of promise.allsettled
// Promise.any([p1, p2, p3]).then(res => {
//     console.log(res);
// }).catch(err => { console.error(err);
//                 console.log(err.errors) 
// });
