var agora = new Date()
var hora = agora.getHours(4)
console.log (`Agora são exatamente ${hora} horas`)
if (hora < 12 && hora > 00) {
    console.log (`Bom dia!`)
}else if (hora <= 18) {
    console.log (`Boa tarde!`)
}else if (hora > 18 < 00) {
    console.log(`Boa noite!`)
}