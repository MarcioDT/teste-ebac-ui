/// <reference types = "cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
      beforeEach(() => {
            //cy.visit('produtos') 
            produtosPage.visitarUrl()
        });

    it('Deve selecionar um produto da lista', () => {
        
        //cy.get('.product-block').first().click()
        //cy.get('.product-block').last().click()
        //cy.get('.product-block').eq(0).click()
        //cy.get('.product-block').eq(3).click()
        //cy.get('.product-block').contains('Ajax Full-Zip Sweatshirt').click() 
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('exist')

        //cy.get('.button-variable-item-M').click()
        //cy.get('.button-variable-item-Green').click()
        //cy.get(':nth-child(2) > .value > .variable-items-wrapper').first().click()
        //cy.get('.plus').click()
        //cy.get('.single_add_to_cart_button').click()

        //if(cy.get('.stock').should('contain','Fora de estoque')){
        //    cy.get('.minus').click()
        //    cy.get('.single_add_to_cart_button').click()
        //    if(cy.get('.stock').should('contain','Fora de estoque')){
        //        //cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        //        //cy.get('.product-block').eq(2).click()
        //        cy.get('.button-variable-item-Red').click()
        //        cy.get('.plus').click()
        //        cy.get('.single_add_to_cart_button').click()

        //        if(cy.get('.stock').should('contain','em estoque')){
        //            cy.get('.woocommerce-message > .button').click()
        //        }
        //    }
       // }      

    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aero Daily Fitness Tee'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should(produto)
    });

    it('Deve visitar a pagina do prduto', () => {
        produtosPage.visitarProduto('Aero Daily Fitness Tee')
        cy.get('.product_title').should('contain','Aero Daily Fitness Tee')
    });

    it('Deve adicionar um produto no carrinho ', () => {
        let qtd = 7
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        produtosPage.addProdutoCarriho('S','Blue',qtd)
        cy.get('.woocommerce-message').should('contain','foram adicionados no seu carrinho') 
    });

    it.only('Deve adicionar um produto no carrinho ', () => {
    cy.fixture('produtos').then(dados => {

        produtosPage.buscarProduto(dados[1].nomeProduto)
        produtosPage.addProdutoCarriho(dados[1].tamanho,dados[1].cor,dados[1].quantidade)

        cy.get('.woocommerce-message').should('contain',dados[1].nomeProduto) 
    })
    });

});