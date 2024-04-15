var setadereita = window.document.getElementById("seta-dereita")
var leonardo = window.document.getElementById('leonardo')
var bruna = window.document.getElementById("bruna")
var samanta = window.document.getElementById("samanta")
var setaisquerda = window.document.getElementById("seta-isquerda")

function rolarparadereita(){
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaisquerda.style ="display:flex; margin-top: 55px "
    setadereita.style ="display:none"

    }
 function rolarparaisquerda(){
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    setaisquerda.style ="display:none"
    setadereita.style ="display:flex"
    }