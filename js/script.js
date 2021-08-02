// Produtos
//Array
const listaProdutos = [
    produto = {
        id_produto: 1,
        nome_produto: "Suculenta 1",
        descricao_produto: "Planta normalmente aguada com água.",
        valor_produto: 45.00,
        foto_produto: "img/img1.jpg"
    },

    produto = {
        id_produto: 2,
        nome_produto: "Suculenta 2",
        descricao_produto: "Tem que ter muito cuidado ao manejar",
        valor_produto: 15.00,
        foto_produto: "img/img2.jpg"
    },

    produto = {
        id_produto: 3,
        nome_produto: "Suculenta 3",
        descricao_produto: "Sempre colocar para pegar sol todas as manhãs.",
        valor_produto: 18.00,
        foto_produto: "img/img3.jpg"
    },

    produto = {
        id_produto: 4,
        nome_produto: "Suculenta 4",
        descricao_produto: "Deixar longe de crianças maléficas.",
        valor_produto: 20.00,
        foto_produto: "img/img4.jpg"
    },

    produto = {
        id_produto: 5,
        nome_produto: "Suculenta 5",
        descricao_produto: "Águar pelo menos 3 vezes na semana.",
        valor_produto: 15.00,
        foto_produto: "img/img5.jpg"
    },

    produto = {
        id_produto: 6,
        nome_produto: "Suculenta 6",
        descricao_produto: "Cuidar fungos e outras coisas.",
        valor_produto: 10.00,
        foto_produto: "img/img6.jpg"
    },

    produto = {
        id_produto: 7,
        nome_produto: "Suculenta 7",
        descricao_produto: "Manter longe dos animais de estimação.",
        valor_produto: 10.00,
        foto_produto: "img/img7.jpg"
    },

    produto = {
        id_produto: 8,
        nome_produto: "Suculenta 8",
        descricao_produto: "Gosta de muita sombra.",
        valor_produto: 10.00,
        foto_produto: "img/img8.jpg"
    }
];
//Array

const blocoProdutos = document.querySelector('#bloco-produtos');

let rowProduto;
let colProduto;
let cont = 0;

if (listaProdutos.length > 0) {
    for (let i = 0; i < listaProdutos.length || cont < 4; i++) {
        if (i == 0 || cont == 0) {
            rowProduto = criarDivLinha();
            colProduto = criarDivProduto(i);
            rowProduto.appendChild(colProduto);
            blocoProdutos.appendChild(rowProduto);

        } else {
            colProduto = criarDivProduto(i);
            rowProduto.appendChild(colProduto);
        }
        cont++;

        if (cont == 4 && listaProdutos[i + 1] != null) {
            cont = 0;
        }
    }

} else {
    blocoProdutos.innerHTML = "Mais produtos em breve...";
}

function criarDivLinha() {
    const rowProduto = document.createElement('div');
    rowProduto.classList.add('row');
    return rowProduto;
}

function criarDivProduto(i) {
    const colProduto = document.createElement('div');
    colProduto.classList.add('col-sm');

    if (listaProdutos[i] == null) {
        return colProduto;
    }

    // Estrutura produto
    const divProduto = document.createElement('div');
    divProduto.classList.add('produto');
    divProduto.setAttribute('onmouseover', 'mudarCorBtn(btnComprar' + (i + 1) + ')');
    divProduto.setAttribute('onmouseout', 'voltarCorBtn(btnComprar' + (i + 1) + ')');

    // Estrutura foto produto
    const divFotoProduto = document.createElement('div');
    divFotoProduto.classList.add('foto');
    divProduto.appendChild(divFotoProduto);

    // Elemento img / atributo src / alt
    const tagImg = document.createElement('img');
    tagImg.classList.add('img-produto');
    tagImg.setAttribute('src', listaProdutos[i].foto_produto);
    tagImg.setAttribute('alt', listaProdutos[i].nome_produto);
    divFotoProduto.appendChild(tagImg);

    // Estrutura nome produto
    const divNomeProduto = document.createElement('div');
    divNomeProduto.classList.add('nome-produto');
    divNomeProduto.innerHTML = listaProdutos[i].nome_produto;
    divProduto.appendChild(divNomeProduto);

    // Estrutura descrição produto
    const divDescricaoProduto = document.createElement('div');
    divDescricaoProduto.classList.add('descricao-produto');
    divDescricaoProduto.innerHTML = listaProdutos[i].descricao_produto;
    divProduto.appendChild(divDescricaoProduto);

    // Estrutura valor produto
    const divValorProduto = document.createElement('div');
    divValorProduto.classList.add('preco-produto');

    let valorAjustado = ajustarCasasDecimais(listaProdutos[i].valor_produto);
    divValorProduto.innerHTML = "R$ " + valorAjustado;

    divProduto.appendChild(divValorProduto);

    // Estrutura botão comprar
    const divBtnComprar = document.createElement('div');
    divBtnComprar.classList.add('btn');
    divBtnComprar.classList.add('btn-outline-light');
    divBtnComprar.setAttribute('id', 'btnComprar' + (i + 1));
    divBtnComprar.innerHTML = "Comprar";
    divProduto.appendChild(divBtnComprar);

    colProduto.appendChild(divProduto);
    return colProduto;
}

// Ajustar casas decimais
function ajustarCasasDecimais(valor) {
    let valorAjustado = valor.toFixed(2);
    valorAjustado = valorAjustado.replace('.', ',');
    return valorAjustado;
}

function mudarCorBtn(btnComprar) {
    btnComprar.classList.replace('btn-outline-light', 'btn-success');
}

function voltarCorBtn(btnComprar) {
    btnComprar.classList.replace('btn-success', 'btn-outline-light');
}