const all = document.querySelector('.all');
const tLeft = document.querySelector('.tl');
const tRight = document.querySelector('.tr');
const bRight = document.querySelector('.br');
const bLeft = document.querySelector('.bl');
const bWidth = document.querySelector('.bw');
const bColor = document.querySelector('.bc');
const bgColor = document.querySelector('.bgc');

const block = document.querySelector('.block');
const text = document.querySelector('textarea');

// Вызов Событий
all.addEventListener('input', allCorn);
tLeft.addEventListener('input', topLeft);
tRight.addEventListener('input', topRight);
bRight.addEventListener('input', botRight);
bLeft.addEventListener('input', botLeft);
bWidth.addEventListener('input', width);
bColor.addEventListener('input', borColor);
bgColor.addEventListener('input', bgCol);



// Функции Событий
function allCorn() {
    block.style.borderRadius = this.value + 'px';
    
    text.innerHTML = `border-radius: ${this.value / 2}px ${this.value}px ${this.value}px ${this.value}px;`;
    
    tLeft.value = this.value;
    tRight.value = this.value;
    bRight.value = this.value;
    bLeft.value = this.value;
}

function topLeft() {
    block.style.borderTopLeftRadius = this.value + 'px';
    
    text.innerHTML = `border-radius: ${tLeft.value}px ${tRight.value}px ${bRight.value}px ${bLeft.value}px; \n\n`
                   + `border: ${bWidth.value}px solid ${bColor.value}; \n\n`
                   + `background: ${bgColor.value};`;
}

function topRight() {
    block.style.borderTopRightRadius = this.value + 'px';
    
    text.innerHTML = `border-radius: ${tLeft.value}px ${tRight.value}px ${bRight.value}px ${bLeft.value}px; \n\n`
                   + `border: ${bWidth.value}px solid ${bColor.value}; \n\n`
                   + `background: ${bgColor.value};`;
}

function botRight() {
    block.style.borderBottomRightRadius = this.value + 'px';
    
    text.innerHTML = `border-radius: ${tLeft.value}px ${tRight.value}px ${bRight.value}px ${bLeft.value}px; \n\n`
                   + `border: ${bWidth.value}px solid ${bColor.value}; \n\n`
                   + `background: ${bgColor.value};`;
}

function botLeft() {
    block.style.borderBottomLeftRadius = this.value + 'px';
    
    text.innerHTML = `border-radius: ${tLeft.value}px ${tRight.value}px ${bRight.value}px ${bLeft.value}px; \n\n`
                   + `border: ${bWidth.value}px solid ${bColor.value}; \n\n`
                   + `background: ${bgColor.value};`;
}

function width() {
    block.style.borderWidth = this.value + 'px';
    
    text.innerHTML = `border-radius: ${tLeft.value}px ${tRight.value}px ${bRight.value}px ${bLeft.value}px; \n\n`
                   + `border: ${bWidth.value}px solid ${bColor.value}; \n\n`
                   + `background: ${bgColor.value};`;
}

function borColor() {
  block.style.borderColor = this.value;
  
  text.innerHTML = `border-radius: ${tLeft.value}px ${tRight.value}px ${bRight.value}px ${bLeft.value}px; \n\n`
                   + `border: ${bWidth.value}px solid ${bColor.value}; \n\n`
                   + `background: ${bgColor.value};`;
};

function bgCol() {
    block.style.backgroundColor = this.value;
    
    text.innerHTML = `border-radius: ${tLeft.value}px ${tRight.value}px ${bRight.value}px ${bLeft.value}px; \n\n`
                   + `border: ${bWidth.value}px solid ${bColor.value}; \n\n`
                   + `background: ${bgColor.value};`;
}