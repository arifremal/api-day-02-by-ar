const load = ()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then (res => res.json())
    .then(data => display(data) )
}
const display=q=>{
    const g = document.getElementById('g');
    g.innerHTML= q.results[0].gender
    const n = document.getElementById('n')
    n.innerHTML= q.results[0].name.first
    console.log(q.results[0].name);
}
load()