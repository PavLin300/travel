let pluses = document.querySelectorAll('.fq-plus');

for (let item of pluses){
    item.addEventListener('click', function (event){
        let parent = event.target.parentElement;
        if (parent.classList.contains('animation-end')){
            parent.classList.replace('animation-end', 'animate');
            event.target.classList.replace('rotate-back', 'rotate');
        }else {
            parent.classList.replace('animate', 'animation-end');
            event.target.classList.replace('rotate', 'rotate-back');
        }
    })
}

