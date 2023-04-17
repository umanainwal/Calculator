let string = "";
let buttons = document.querySelectorAll('.button');   //this query: select all the button class.
Array.from(buttons).forEach((button)=>{
   button.addEventListener('click', (e)=>{
       if(e.target.innerHTML == '='){              //for evaluation(=),
       string = eval(string);              //if anyone click in the equal, than evaluate the expression.
       document.querySelector('input').value = string            
       } 

      else if(e.target.innerHTML == 'c'){              //for erase (c),
        string = "";              //if anyone click in the c, than erase all the values.
        document.querySelector('input').value = string            
        } 

       else{
       console.log(e.target)
       string = string + e.target.innerHTML;     //string change
       document.querySelector('input').value = string;   //change input value in string
    }    
   })
})


// innerHTML: innerHTML is a property of every element. It tells you what is between the starting and ending tags of the element.