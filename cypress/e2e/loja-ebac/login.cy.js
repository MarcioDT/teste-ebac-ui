/// <reference types = "cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login',() => {

    beforeEach(() => {
       cy.visit('minha-conta') 
    });

    afterEach(() => {
        //cy.screenshot()
    });

    it('Deve fazer login com sucesso',() => {
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('MarcioEbac@teste.com')
        cy.get('#password').type('MarcioEbac')
        cy.get('.woocommerce-form > .button').click()        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, marcioebac (não é marcioebac? Sair)')
        
    })

    it('Deve exibir uma mensagem de erro ao inserir um usuario invalido', () => {
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('MarcioEbac11@teste.com')
        cy.get('#password').type('MarcioEbac')
        cy.get('.woocommerce-form > .button').click()        
        //cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir um senha invalido', () => {
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('MarcioEbac@teste.com')
        cy.get('#password').type('MarcioEba')
        cy.get('.woocommerce-form > .button').click()        
        //cy.get('.woocommerce-error').should('contain','Error: ')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve fazer login com sucesso - Usando a massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, marcioebac (não é marcioebac? Sair)')             
    });

    it('Deve fazer login com sucesso - Usando Fixtures', () => {
        cy.fixture('perfil').then(dados =>{
            cy.get('#username').type(dados.usuario , {log: false})
            cy.get('#password').type(dados.senha   , {log: false})
            cy.get('.woocommerce-form > .button').click()        
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, marcioebac (não é marcioebac? Sair)')             
        });
    });       
        
    it.only('Deve fazer login com sucesso usando comandos customizados', () => {
        
        cy.login('MarcioEbac@teste.com','MarcioEbac')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, marcioebac (não é marcioebac? Sair)')
               
    });
})