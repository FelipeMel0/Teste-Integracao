async function getContent(){
    try {

        const response = await fetch('http://localhost:4000/perfil/listarPerfis')

        console.log(response)

        const data = await response.json()

        console.log(data)
        // document.getElementById('h1').innerHTML = data

    } catch (error) {

        console.error(error)

    }
   
}

getContent()