// Async await in JS 

// function makeRequest(location){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log(`Making request to ${location}`);
            
//         }, 2000);
//         if(location==='Google'){
//             resolve("Google says hi !");
//         } else{
//             reject('We can only talk to google');
//         }
//     })
// }

// function processRequest(response){
//     return new Promise((resolve, request)=>{
//         console.log('Processing Request')
//         resolve('Extra information '+ response);
//     })
// }

// async function result(){
//     try{
//         const response =  await makeRequest('Facebook')
//         console.log('Got your request');
//         const ans = await processRequest(response);
//         console.log(ans);   
//     } 
//     catch (err){
//         console.log(err)
//     }
// }

// result();

// console.log("Hehe lets see")


// function wait(ms = 0){
//     return new Promise((resolve,reject)=>{
//         if(ms== 2000){
//             reject("you are using 2000 try another")
//         } else{
//             setTimeout(resolve,ms);
//         }
//     })
// }

// function testWait(){
//     console.log("Starting test");
//     wait(2000).then(function(){
//         console.log("Test finished");
//     }).catch(function(message){
//         console.log(message);
//     });
// }

// testWait();


// async function go(){
//     try{
//         console.log('Starting');
//         await wait(5000);
//         console.log('ending')
//         await wait(2000);
//         console.log("finished");
//     }
//     catch(e){
//         console.log(e);
//     }
// }

// go();

// function  makePizza(toppings = []){
//     return new Promise(function(resolve,reject){
//         if (toppings.includes('pineapple')){
//             reject('Seriiously? Get out');
//         }
//         const amountOfTimeToBake = 500 + (toppings.length * 200);
//         setTimeout(function(){
//             resolve(`Here is you pizza withh topping ${toppings.join(' ')}`);
//         }, amountOfTimeToBake);
//     });
// }

// async function makeDinner(){
//     const pizzaPromise1 = await makePizza(['papperoni']);
//     const pizzaPromise2 = await makePizza(['mushrooms']);
//     const [pep, mush] = await Promise.all([pizzaPromise1, pizzaPromise2]);
//     console.log(pep, mush);
// }

// go()

// makeDinner();

// async function animate2(e){
//     const el = e.currentTarget;
//     el.textContent = 'GO';
//     await wait(200);
//     el.classList.add('circle');
//     await wait(500);
//     el.classList.add('red');
//     await wait(250);
//     el.classList.remove('circle');
//     await wait(500);
//     el.classList.remove('red');
//     el.classList.add('purple');
//     await wait(500);
//     el.classList.add(fadeOut);
// }

// function animate(e){
//     const el = e.currentTarget;
//     el.textContent = 'GO';

//     wait(200)
//         .then(()=>{
//             el.classList.add('circle');
//             return wait(500);
//         })
//         .then(()=>{
//             el.classList.add('red');
//             return wait(250);
//         })
//         .then(()=>{
//             el.classList.remove('red');
//             el.classList.add('purple');
//             return wait(500);
//         })
//         .then(()=>{
//             el.classList.add('fadeOut');
//         })
//     }


