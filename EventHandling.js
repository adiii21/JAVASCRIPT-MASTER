// const butts = document.querySelector('.butts');
// const coolbutts = document.querySelector('.coolbutts');

// butts.removeEventListener('click', handleClick);

// function handleClick(){
//     console.log("Hehe good!");
// }

// coolbutts.addEventListener('/click', handleClick);
// coolbutts.removeEventListener('click', handleClick);


// function handleClick(){
//     console.log("Hehe good!");
// }

// Arrow function 
// const hooray = () => console.log("Hehe good!");

// coolbutts.addEventListener('click', hooray);

// const buyButtons = document.querySelectorAll("button.buy");


// buyButtons.addEventListener('click',butItem);

// console.dir(butts); It basically shows all the props that are available

// forEach 


// buyButtons.forEach(function(buyButton){
//     // console.log('Binding the buy button');
//     // buyButton.addEventListener('click',buyItem);
//     console.log(buyButton);
// });


// function buyItem(){
//     console.log("buyButtons");
// }

// Now moving the function outside 

// function handleBuyButtonClick(buyButton) {
//     console.log('Binding the buy button');
//     buyButton.addEventListener('click', buyItem);
// }

// buyButtons.forEach(handleBuyButtonClick);

// buyButtons.forEach((button)=>{
//     button.addEventListener('click', ()=> {
//         console.log("You clicked it!")
//     })
// })


// const buyButtons = document.querySelectorAll("button.buy");

// function buyItem(){
//     console.log("buyButtons");
// }


// function handleBuyButtonClick(event) {
//     console.log('you are buying it!');
//     // console.log(event.target); //Give HTML tag
//     console.log(event.currentTarget);
//     console.log(event.target);
//     event.stopPropagation();
// }

// buyButtons.forEach(function(buyButton) {
//     buyButton.addEventListener("click", handleBuyButtonClick);
// });

// window.addEventListener("click", function(event) {
//     console.log("you clicked the window");
// })
