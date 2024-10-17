//IDENTIFICA OS ELEMENTOS DOM (ÁRVORE HTML)
const btnTrocar = document.getElementById('btn-trocar')
const lampada = document.getElementById('lampada')
let baseURL = "https://be7bd301-540d-41c6-8a4e-6466a7947283-00-2tkd7n8vclh1s.janeway.replit.dev/"

btnTrocar.addEventListener('click', function() {
  if (lampada.src == baseURL + "lampada0.png") {
    lampada.src = "lampada2.png"
 } else {
    lampada.src = "lampada0.png"
 }
})
alert(lampada.src)