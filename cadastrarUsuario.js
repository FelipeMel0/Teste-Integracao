"use-strict"

const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {

    const perfil = getDadosForm()

    enviarDadosParaAPI(perfil)

})

function getDadosForm(){
    const inputNickname = document.querySelector('#nickname')
    const inputEmail = document.querySelector('#email')
    const inputSenha = document.querySelector('#senha')
    const perfil = {
        nickname: inputNickname.value,
        email: inputEmail.value,
        senha: inputSenha.value
    }

    return perfil
}

 async function enviarDadosParaAPI(perfil) {
    try {
        const resposta = await fetch('http://localhost:4000/perfil/cadastrarPerfil', {
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