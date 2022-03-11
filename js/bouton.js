(function(){
    let inverserCouleur = document.querySelectorAll('.butFoot')

    inverserCouleur.addEventListener('click', function()
        {
            let elmBody = document.querySelector('body')
            elmBody.classList.toggle('couleurGlobale')
        })


})()