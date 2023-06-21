let btn = document.querySelector('.button')
let p = document.getElementById('asd')
let content= document.querySelector('.content')
let ins = document.querySelector('.input')
p.innerHTML='Add Task'

btn.onclick = () => {
    let inp = ins.value 
    let h2 = document.createElement('h4')
    let btn1 = document.createElement('button')
    let div = document.createElement('div')
    if(ins.value == ''){
    }else{
      h2.innerHTML=inp
      h2.style.color = 'white'
      content.style.padding = '10px 0px'
      div.append(h2,btn1)
      content.appendChild(div)
      div.className='miri'
      btn1.className='btn1'
      btn1.innerHTML='Del'
      setTimeout(() => {
        ins.value = ''
      }, 0);
    }
    
   
   let btns = document.querySelectorAll('.btn1')
   for (let btn3 of btns){
    btn3.onclick=()=>{
      btn3.parentElement.remove()
      let task = document.querySelectorAll('.miri')
      p.innerHTML=`You have ${task.length} tasks`
        
       if(task.length === 0){
        p.innerHTML='No Task'
        content.style.padding = '0px 0px'
       }
    }
   }
   let task = document.querySelectorAll('.miri')
   p.innerHTML=`You have ${task.length} tasks`
}



let src = document.querySelector('.search')
let sas = document.getElementById('asas')
src.onclick = () => {
     if( sas.style.display === 'block'){
      sas.style.display = 'none'
     }else{
      sas.style.display = 'block'
     }
}
let icon = document.querySelector('.icon')

icon.onclick = () => {
      sas.style.display = 'none'
}