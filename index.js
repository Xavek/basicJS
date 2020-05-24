const colorBtn = document.querySelector('.colorbtn');
const bodyBcg = document.querySelector('body')

const colors = ['yellow','green','blue','red','cyan','lightyellow','gold','blueviolet','orchid','magenta']

colorBtn.addEventListener('click', changeColor);

function changeColor(){
  
  let random = Math.floor(Math.random()*colors.length)
  bodyBcg.style.backgroundColor = colors[random];
}


