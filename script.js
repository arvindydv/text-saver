const txt = document.getElementById('txt');

if(localStorage.getItem('data')){
    txt.value = localStorage.getItem('data');
}

txt.addEventListener('input', ()=>{
    
  localStorage.setItem('data', txt.value);
})

const btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
    console.log(txt.select());
    document.execCommand("copy");
});
