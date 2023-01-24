
let bodycheck = document.querySelector('body');// we can also use html here if the body is empty so that we target the entire thing even if empty
//document.querySelector('html')
bodycheck.addEventListener("click",generate);

function generate(){
    bodycheck.style.backgroundColor = randomColorGenerator();
}

function randomColorGenerator (){
    let val = '0123456789ABCDEF';
    let cons ='#';
    for(let i =0;i<6;i++){
        cons = cons + val[Math.floor(Math.random()*16)];
    }
    return  cons;
}
