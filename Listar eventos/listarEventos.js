async function getContent(){
    try {

        const response = await fetch('http://localhost:4000/evento/listarEvento')

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrar(data)
       
    } catch (error) {

        console.error(error)

    }
   
}

getContent()

function mostrar(eventos){

    let output = ''

    for(let evento of eventos){
        output += `<h1>${evento.titulo}</h1>`
        output += `<p>${evento.descricao}</p>`
    }

    document.querySelector('h1').innerHTML = output

}