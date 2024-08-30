let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    if(amigo.value == ''){
        alert('Informe o nome do amigo');
        return;
    }
    if(amigos.includes(amigo.value)){
        alert('Nome já adicionado!');
        return;
    }
    
    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(amigo.value);

    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = amigo.value;
    } else{
        listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
}

function sortear(){
    if(amigos.length < 4){
        alert('Adicione pelo menos 4 amigos');
    } else{
        embaralhar(amigos);
        let sorteio = document.getElementById('lista-sorteio');

        for (let i = 0; i < amigos.length; i++){
            if(i == amigos.length - 1){
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
            } else{
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
            }
        }
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}

function embaralhar(listaAmigos) {
    for (let indice = listaAmigos.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [listaAmigos[indice - 1], listaAmigos[indiceAleatorio]] = [listaAmigos[indiceAleatorio], listaAmigos[indice - 1]];
    }
}