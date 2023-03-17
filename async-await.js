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
