const fontSize = document.getElementById('font-size');
const bgColor = document.getElementById('bg-color');
const body = document.querySelector('body');
const main = document.querySelector('.main');
const reset = document.querySelector('.reset');

function initial(){
    const selectFont = localStorage.getItem('font-size');
    const selectBg = localStorage.getItem('bg-color');
    if(selectFont && selectBg){
        fontSize.value = selectFont;
        bgColor.value = selectBg;
        body.style.backgroundColor = selectBg;
        main.style.fontSize = selectFont;
    }
    if(!selectBg && !selectFont){
        fontSize.value = '18px';
        bgColor.value = 'black';
        body.style.backgroundColor = 'black';
        main.style.fontSize = '18px';  
    }
}

function changeFont(e){
    const targetSize = e.target.value ;
    main.style.fontSize = targetSize;
    localStorage.setItem('font-size',targetSize);
}
function changeBg(e){
    const targetColor = e.target.value ;
    body.style.backgroundColor = targetColor;
    localStorage.setItem('bg-color',targetColor)
}
function clearLc(){
    localStorage.removeItem('font-size');
    localStorage.removeItem('bg-color');
}
reset.addEventListener('click',clearLc)
bgColor.addEventListener('change',changeBg)
fontSize.addEventListener('change',changeFont)
initial()