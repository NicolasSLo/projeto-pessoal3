const nome = document.getElementById('nome')
const senha1 = document.getElementById('senha')
const senha2 = document.getElementById('senha2')


function alertaCor() {
    if (senha1.value != senha2.value || senha1.value == '' || senha2.value == '') {
        if (senha1.value == '' || senha2.value == '') {
            senha2.style.cssText = 'border-bottom: solid white 2px'
            senha2.style.color = 'white'
        } else {
            senha2.style.cssText = 'border-bottom: solid red 2px'
            senha2.style.color = 'red'
        }
    } else {
        senha2.style.cssText = 'border-bottom: solid dodgerblue 2px'
        senha2.style.color = 'dodgerblue'
    }
}