/// <reference types = "cypress"/>

describe('Funcionalidade: Produtos', () => {
    
      beforeEach(() => {
            cy.visit('produtos') 
        });

    it('Deve selecionar um produto da lista', () => {
        
        cy.get('.product-block').first().click()
        //cy.get('.product-block').last().click()
        //cy.get('.product-block').eq(0).click()
        //cy.get('.product-block').eq(3).click()
        //cy.get('.product-block').contains('Ajax Full-Zip Sweatshirt').click()  

        cy.get('#tab-title-description > a').should('exist')
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        //cy.get(':nth-child(2) > .value > .variable-items-wrapper').first().click()
        cy.get('.plus').click()
        cy.get('.single_add_to_cart_button').click()

        if(cy.get('.stock').should('contain','Fora de estoque')){
            cy.get('.minus').click()
            cy.get('.single_add_to_cart_button').click()
            if(cy.get('.stock').should('contain','Fora de estoque')){
                //cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
                //cy.get('.product-block').eq(2).click()
                cy.get('.button-variable-item-Red').click()
                cy.get('.plus').click()
                cy.get('.single_add_to_cart_button').click()

                if(cy.get('.stock').should('contain','em estoque')){
                    cy.get('.woocommerce-message > .button').click()
                }
            }
        }      

    });


});