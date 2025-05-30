class produtosPage{
    visitarUrl(){
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto){
        cy.get('.product-block').contains(nomeProduto).click() 
    }

    visitarProduto(nomeProduto){
        //cy.visit(`produtos/${nomeProduto}`)

        const urlFormatada = nomeProduto.replace(/ /g, '-')////formata a string retirando o que tem dentro da // e subistituindo pelo que esta dentro de ''
        cy.visit(`produtos/${urlFormatada}`)
    }

    addProdutoCarriho(tamanho, cor, quantidade){
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        for (let index = 1; index < quantidade; index++) {
            cy.get('.plus').click()
        }        
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new produtosPage()