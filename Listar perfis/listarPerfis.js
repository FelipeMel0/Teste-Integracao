async function getContent(){
    try {

        const response = await fetch('http://localhost:4000/perfil/listarPerfis')

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrar(data)
        // document.getElementById('perfil').innerHTML = data

    } catch (error) {

        console.error(error)

    }
   
}

getContent()

function mostrar(perfis){

    let output = ''

    for(let perfil of perfis){
        output += `<h1>${perfil.nickname}</h1>`
    }

    document.querySelector('h1').innerHTML = output

}