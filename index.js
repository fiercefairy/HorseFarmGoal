// const myButton= document.getElementById('first-button');
// // console.log(myButton);
// const allButtons= document.getElementsByTagName('button');
// // console.log(allButtons);

// function handleClick(){
//     console.log('button was clicked')
//     const hiddenDiv=document.getElementById('bannana');
//     hiddenDiv.classList.add('display')
//     console.log(hiddenDiv)
// }

// myButton.addEventListener('click', handleClick);

// if date indicates we are in spring add a spring class to the body
// if date indicates we are in summer add a summer class to the body
// if date indicates we are in fall add a fall class to the body
// if date indicates we are in winter add a winter class to the body

const date= new Date();
const month= date.getMonth();
const body= document.getElementsByTagName('body')[0];
console.log(month);

if(month === 2 || month === 3 || month === 4){
    body.classList.add('spring');
}
if(month === 5 || month === 6 || month === 7){
    body.classList.add('summer');
}
if(month === 8 || month === 9 || month === 10){
    body.classList.add('fall');
}
if(month === 11 || month === 0 || month === 1){
    body.classList.add('winter');
}