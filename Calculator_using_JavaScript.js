window.addEventListener('DOMContentLoaded',init);
const opts=['*',"/",'+','-','9','8','7','6','5','4','3','2','1','.'];


function init(){
    document.title="javascript calculator";
    console.log('ready');
    document.body.style.backgroundImage = "url('calc.jpg')";

const container=document.createElement('div');
container.classList.add('container');
container.style.maxWidth='600px';
container.style.margin='auto';
document.body.appendChild(container);
const output=document.createElement('input');
output.setAttribute('type','text');
output.classList.add('output');
output.style.width='100%';
output.style.lineHeight='50px';
output.style.fontSize='3em';
output.style.textAlign='right';
output.style.backgroundColor='Aqua';
output.style.color='white';
output.style.borderRadius='13px';
container.appendChild(output);
const main=document.createElement('div');

main.classList.add('main');
main.style.width='100%';
main.style.background='pink';
main.style.borderRadius='13px';
container.appendChild(main);
opts.forEach(function(val){
   // console.log(val);
    btnMakr(val,addOutput)
})
btnMakr('=',evalOutput);
btnMakr('C',clrOutput);
function evalOutput(){
console.log('=');
output.style.border='black 2px solid';
if(output.value===""){
    output.style.border='red 2px solid';
}
else{
output.value=eval(output.value);
}
}
function clrOutput(){
output.style.border='red 2px solid';
output.value="";
}
function btnMakr(txt,myfunction){
    let btn=document.createElement('button');
    btn.setAttribute('type','button');
    btn.style.width='23%';
    btn.style.lineHeight='50px';
    btn.style.margin='1%';
    btn.style.fontSize='2em';
    btn.val=txt;
    btn.textContent=txt;
    btn.style.borderRadius="30%";
    btn.style.background="white";
    btn.addEventListener('click',myfunction);
    main.appendChild(btn);
}
function addOutput(e){
    output.style.border='black 2px solid';
    console.log(e.target.val);
    let char=e.target.val;
    output.value +=char;
}
}