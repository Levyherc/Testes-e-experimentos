// Declaração de um array com nomes a serem utilizados na lista
let nomes = [
	"levy",
	"josé",
	"letícia",
	"maria",
	"carlos",
	"pedro",
	"marcela",
	"carla",
	"carlos"
]

// Função chamada ao clicar no botão "Pesquisar"
function pesquisarNome(){

	// Recupera o valor digitado no campo de pesquisa
	let nomePesquisa = document.getElementById('campoNome').value
	
	// Inicializa uma string que conterá os itens da lista encontrados
	let intensLista = ''

	// Percorre todos os nomes no array
	for(indice in nomes){
		let nome = nomes[indice]
		
		// Se o nome pesquisado for igual ao nome no array
		if( nomePesquisa == nome ){
			// Adiciona o nome à lista formatado como item HTML
			intensLista += `
			<li class="list-group-item">
				${nome}
			</li>`
		}
	}

	// Atualiza o conteúdo da lista na página com os resultados encontrados
	document.getElementById('lista').innerHTML = intensLista

}

// Função chamada ao clicar no botão "Carregar"
function carregarNomes(){

	// Inicializa uma string para armazenar todos os nomes formatados
	let intensLista = ''
	
	// Percorre todos os nomes no array
	for(indice in nomes){
		let nome = nomes[indice]

		// Adiciona o nome à string como item de lista HTML
		intensLista += `
			<li class="list-group-item">
				${nome}
			</li>`

		// Comentado: poderia exibir os nomes um por um via alerta (para depuração)
		// alert(intensLista)
	}

	// Insere todos os nomes na lista exibida na página
	document.getElementById('lista').innerHTML = intensLista

}
