let string = "";
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target);
        try{
            if(e.target.innerHTML==='='){
                string = string.replace('X','*');
                string = eval(string);
                document.querySelector('.ans').textContent = string;
                }
            else if(e.target.innerHTML === 'C'){
                document.querySelector('.ans').textContent = 0;
            }
            else if(e.target.innerHTML === 'AC'){
                document.querySelector('.ans').textContent = 0;
                string = ''
                document.querySelector('input').value = string;
            }
            else if(e.target.innerHTML === ' →'){
                const arrString =string.split(',');
                string = arrString.pop();
                string = string.replace(',' , '');
                document.querySelector('input').value = arrString;
            }
            else{
                string = string+ e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        }
        catch(e){
            document.querySelector('.ans').textContent = 'error'
            string = '';
            document.querySelector('input').value = string;
        }
        
        
    })
})