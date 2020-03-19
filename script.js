const colorBtn = document.querySelector('.color-btn');
const bodyBg = document.querySelector('body');

const colors = ['#eb4034', '#e0c724', '#bbffad', '#3b5998', '#de4ecf', 
'#131e36', '#000', '#6b0000', '#76128a', '#696969'];

function changeColor() {
    let randomNumber = Math.floor(Math.random() * colors.length); 
    bodyBg.style.backgroundColor = colors[randomNumber];

}

colorBtn.addEventListener('click', changeColor); 