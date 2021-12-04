const conteudopers = document.getElementById('conteudopers');

function LoadPers(NomeDoPersonagem) {

    axios.get(`https://rickandmortyapi.com/api/character/?name=${NomeDoPersonagem}`)
        .then(resp => {
            const linhas = resp.data.results.map(personagem => {
                
                return `<div><h2>${personagem.name}</h2><br><img src="${personagem.image}"></img><br><p>${personagem.species}</p></div>`
                
              

            })
            console.log(resp.data.results)
            conteudopers.innerHTML = linhas ;
        })
        
}



function enviar() {
    const SearchBar = document.getElementById('SearchBar');
    console.log(SearchBar.value)
    const NomeDoPersonagem = SearchBar.value;
    LoadPers(NomeDoPersonagem)
}

window.addEventListener('keydown', function (e){
    if (e.code === 'Enter' || e.code === 'NumpadEnter'){
        enviar()
    }
});









