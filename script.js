const display=document.querySelector('#display');
const btn=document.querySelectorAll('button');

for(let button of btn){
    button.addEventListener('click',(e)=>{
        const displaytext=e.target.innerText;

        if(displaytext==='C'){
            display.value='';
        }
        else if(displaytext==='x'){
            display.value+='*';
        }
        else if(displaytext==='='){
            try{
                display.value=eval(display.value);
            }
            catch(error){
                display.value='ERROR!!';
            }
        }
        else{
            display.value+=displaytext;
        }
    })
}