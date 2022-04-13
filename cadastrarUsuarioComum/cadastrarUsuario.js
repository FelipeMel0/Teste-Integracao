"use-strict"

const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {

  const perfil = getDadosPerfil()

  enviarPerfilParaAPI(perfil)

  console.log(perfil)

})

function getDadosPerfil() {
  const inputNickname = document.querySelector('#nickname')
  const inputEmail = document.querySelector('#email')
  const inputSenha = document.querySelector('#senha')
  const inputNomeCompleto = document.querySelector('#nome')
  const inputDataNasc = document.querySelector('#dataNasc')
  const inputBiografia = document.querySelector('#biografia')
  const perfil = {
    nickname: inputNickname.value,
    email: inputEmail.value,
    senha: inputSenha.value,
    nome: inputNomeCompleto.value,
    dataNasc: inputDataNasc.value,
    biografia: inputBiografia.value
  }

  return perfil
}

async function enviarPerfilParaAPI(perfil) {
  try {
    const resposta = await fetch('http://localhost:4000/perfil/cadastrarPerfilUsuarioComum', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(perfil)
    })

  } catch (erro) {
    console.error(erro)
  }

}