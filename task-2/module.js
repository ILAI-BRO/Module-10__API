const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    
    const displayHeight = document.documentElement.clientHeight;
    const displayWidth =  document.documentElement.clientWidth
    
      
      alert( 'Ширина экрана: ' + displayWidth + ' ' + 'Высота экрана: ' + displayHeight );

} ) 
