// console.log(90);

const load = () =>{
   fetch ('https://api.kanye.rest/')
   .then (res => res.json())
   .then (data => display(data))
}
const display=q=>{
    const block = document.getElementById('quote')
    block.innerHTML=q.quote
}
load()