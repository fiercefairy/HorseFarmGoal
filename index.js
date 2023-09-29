const myButton= document.getElementById('first-button');
// console.log(myButton);
const allButtons= document.getElementsByTagName('button');
// console.log(allButtons);

function handleClick(){
    console.log('button was clicked')
    const hiddenDiv=document.getElementById('bannana');
    hiddenDiv.classList.add('display')
    console.log(hiddenDiv)
}

myButton.addEventListener('click', handleClick);