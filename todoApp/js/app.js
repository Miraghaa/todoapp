let btn = document.querySelector('.button')
let p = document.getElementById('asd')
p.innerHTML='No task'

btn.onclick = () => {
    let inp = document.querySelector('.input').value
    let h2 = document.createElement('h2')
    let btn1 = document.createElement('button')
    let div = document.createElement('div')
    div.append(h2,btn1)
    document.querySelector('.content').appendChild(div)
    div.className='miri'
    btn1.className='btn1'
    h2.innerHTML=inp
    btn1.innerHTML='Delete'
   let btns = document.querySelectorAll('.btn1')
   for (let btn3 of btns){
    btn3.onclick=()=>{
      btn3.parentElement.remove()
      let task = document.querySelectorAll('.miri')
      p.innerHTML=`Task number ${task.length}`
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