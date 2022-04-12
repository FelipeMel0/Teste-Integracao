const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {

    const evento = getDadosEvento()

    console.log(evento)

    enviarEventoParaAPI(evento)

    console.log(evento)

})

function getDadosEvento(){
    const inputTitulo = document.querySelector('#titulo')
    const inputDescricao = document.querySelector('#descricao')
    const inputCapa = document.querySelector('#capa')
    const inputDataInicio = document.querySelector('#dataInicio')
    const inputDataTermino = document.querySelector('#dataTermino')
    const inputHoraInicio = document.querySelector('#horaInicio')
    const inputHoraTermino = document.querySelector('#horaTermino')
    const radioTaxa = document.querySelector('#radioTaxa')

    const selectFaixa = document.getElementById('faixaEtaria')
    const faixaSelecionada = selectFaixa.value

    const selectTipo = document.querySelector('#tipoEvento')
    const tipoSelecionado = selectTipo.value

    const selectCategoria = document.querySelector('#categoria')
    const categoriaSelecionada = selectCategoria.value

    const selectContaEmpresa = document.querySelector('#contaEmpresa')
    const contaEmpresaSelecionada = selectContaEmpresa.value

    const evento = {
        titulo: inputTitulo.value,
        descricao: inputDescricao.value,
        capa: inputCapa.value,
        dataInicio: inputDataInicio.value,
        dataFim: inputDataTermino.value,
        horaInicio: inputHoraInicio.value,
        horaFim: inputHoraTermino.value,
        taxaAbsorvida: radioTaxa.value,
        tblFaixaEtariumIdFaixaEtaria: faixaSelecionada,
        tblTipoEventoIdTipoEvento: tipoSelecionado,
        tblCategoriumIdCategoria: categoriaSelecionada,
        tblContaEmpresaIdContaEmpresa: contaEmpresaSelecionada
    }

    return evento
}

async function enviarEventoParaAPI(evento) {
    try {
      const resposta = await fetch(`http://localhost:4000/evento/cadastrarEvento/1/${evento.tblFaixaEtariumIdFaixaEtaria}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(evento)
      })
  
    } catch (erro) {
      console.error(erro)
    }
  
  }