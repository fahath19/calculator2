let input_screen=document.querySelector('.input-screen')

function num(num){
      input_screen.value += num;
}
function equal(){
      try{
        input_screen.value=eval(input_screen.value)

      }
       catch{
            input_screen.value="Invalid Error"

      }
}
function allclear(){
       input_screen.value=''

}
function clean(){
      
      input_screen.value=(input_screen.value).slice(0,-1)
      console.log(input_screen.value)
}

