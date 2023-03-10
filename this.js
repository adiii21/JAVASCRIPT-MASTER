// method -> obj
// function -> global (window, global)

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// video.stop = function () {
//     console.log(this);
// };

// function Video(title){
//     this.title = title;
//     console.log(this);
// }

// const v = new Video('b');
// const video = {
//     title : 'a',
//     tags: ['a', 'b', 'c'],
//     showTags(){
//         this.tags.forEach(function(tag){
//             console.log(this.title,tag);
//         },this);
//     }
// };

// video.showTags();
// const age=100;
// const wes = new Object({
//     name : 'wes',
//     propertyToCheck : 'NEVER',
//     age,
//     "cool-dude" : true,
//     "really cool" : false,
//     "777": true,
//     dog: "snickers",
//     clothings: {
//         shirts: 10,
//         pants: 2
//     },
//     sayHello: function(greeting = "Hey"){
//         return `${greeting} ${this.name}`;
//     },
//     sneeze:() => {
//         console.log("AHHHH CHOOO", this);
//     }
// });

