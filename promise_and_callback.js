// callback in js 

// function add(a,b,callback) {
//     let result = a+b;
//     callback(result);
// }

// function printResult(result) {
//     console.log("The result is "+result);
// }

// add(2,3,printResult);

// Promise example 




// let p = new Promise((resolve, reject) => {
//     let a =1+1
//     if(a==2){
//         resolve('success')
//     } else {
//         reject('Falied')
//     }
// }) 

// p.then((message)=>{
//     console.log("This is in the then " + message)
// }).catch((message)=>{
//     console.log("This is in the catch " + message)
// })

// const userLeft = false;
// const userWatchingCatMeme = true;

// function watchTutorialCallback(callback, errorCallback) {
//     if(userLeft){
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if(userWatchingCatMeme){
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up and Subscribed');
//     }
// }

// watchTutorialCallback((message)=>{
//     console.log('Success: ' + message)
// }, (error)=>{
//     console.log('Error: '+error.name+ ' ' + error.message)
// })

// Now with the Promise 

// const userLeft = false
// const userWatchingCatMeme = false

// function watchTutorialPromise() {
//     return new Promise((resolve, reject) => {
//         if(userLeft){
//             reject({
//                 name: 'User Left',
//                 message: ':('
//             })
//         } else if(userWatchingCatMeme){
//             reject({
//                 name: 'User Watching Cat Meme',
//                 message: 'WebDevSimplified < Cat'
//             })
//         }
//         else{
//             resolve('Thumbs up and Sunscribe')
//         }
//     })
// }

// watchTutorialPromise().then((message)=>{
//     console.log('Success: ' + message)
// }).catch((error)=>{
//     console.log(error.message + ' ' + error.message)
// })



// callback 
// const cart = ["shoes", "pant", "Kurta"];
// createOrder(cart, function(orderID){
// 	proceedToPayment(orderID);
// });

// promises 

// const cart = ["shoes", "pant", "Kurta"];

// const promise = createOrder(cart);

//promise.then(function(orderID){ //if the promise is successful it will call it once
// 	proceedToPayment(orderID)
// })

// fetch() 

// const GITHUB_API = "https://api.github.com/users/adiii21"

// const user = fetch(GITHUB_API);

// user.then(function(data){
//     console.log(data);
// })

// callback hell 

// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function(orderID){
//     proceedToPayment(orderID, function(paymentInfo){
//         showOrderSummary(paymentInfo, function(){
//             updateWalletBalance();
//         });
//     });
// });

// solved by promise 

// createOrder(cart)
// .then(function(orderID){
//    return proceedToPayment(orderID);
// })
// .then(function(paymentInfo){
//    return showOrderSummary(paymentInfo);
// })
// .then(function(paymentInfo){
//     return updateWalletBalance(paymentInfo);
// });



// Promise chain and Error handling

// const cart =["shoes", "pants", "kurta"];

// createOrder(cart)
// .then(function(orderId){
//     console.log(orderId)
//     return orderId;
// })
// .then(function(orderId){
//    return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo)
// })
// .catch(function(err){
//     console.log(err.message);
// })


// Produce End 

// function createOrder(cart) {
//     const pr = new Promise(function(resolve,reject){
//         // createOrder
//         // validatecart
//         // orderId
//         if(!validateCart(cart)){
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }
//         const orderId = "12345";
//         if(orderId){
//             setTimeout(function(){
//                 resolve(orderId);
//             },5000)
//         }
//     });

//     return pr;
// }


// function proceedToPayment(orderId){
//     return new Promise((resolve,reject)=>{
//         resolve("Payment Successful")
//     })
// }

// function validateCart(){
//     return true;
// }
