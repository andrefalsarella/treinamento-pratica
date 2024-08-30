function comprar(){
    let setor = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(setor.value == 'pista'){
        comprarPista(qtd);
    } else if(setor.value == 'superior'){
        comprarSuperior(qtd);
    } else if(setor.value == 'inferior'){
        comprarInferior(qtd);
    }

    function comprarPista(qtd){
        let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
        if(qtd > qtdPista){
            alert('QUANTIDADE INDISPONÍVEL PARA O SETOR!');
        } else {
            qtdPista = qtdPista - qtd;
            document.getElementById('qtd-pista').textContent = qtdPista;
            alert('Compra realizada com sucesso!');
        }
    }
    
    function comprarSuperior(qtd){
        let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        if(qtd > qtdSuperior){
            alert('QUANTIDADE INDISPONÍVEL PARA O SETOR!');
        } else {
            qtdSuperior = qtdSuperior - qtd;
            document.getElementById('qtd-superior').textContent = qtdSuperior;
            alert('Compra realizada com sucesso!');
        }
    }
    
    function comprarInferior(qtd){
        let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
        if(qtd > qtdInferior){
            alert('QUANTIDADE INDISPONÍVEL PARA O SETOR!');
        } else {
            qtdInferior = qtdInferior - qtd;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
            alert('Compra realizada com sucesso!');
        }
    }
}