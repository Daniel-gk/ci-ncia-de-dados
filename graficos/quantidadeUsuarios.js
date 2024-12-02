const url = 'https://github.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/blob/Aula01/trabalho/trabalho-dados-gerais.json'
async function quantidadeUsuarios() {    
    const res = await fetch(url)
    const dados = await res.json()
    const pessoas_mundo = Object.keys(dados)
    const trabalhadores_mundo = Object.values(dados)
 
  const data = [
    {
      x: pessoas_mundo,
      y: trabalhadores_mundo,
      type: 'bar'
    }
  ]
 
  const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}
quantidadeUsuarios()
