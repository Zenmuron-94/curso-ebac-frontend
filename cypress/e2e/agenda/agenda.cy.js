///  <reference types="cypress" />

describe( 'teste para a Agenda', () =>{
    beforeEach(() =>{
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve Adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('Clóvis Luiz')
        cy.get('[type="email"]').type('bioclp@hotmail.com')
        cy.get('[type="tel"]').type('51 97358946')
        cy.get('.adicionar').click()

        cy.contains('.contato', 'Clóvis Luiz').should('exist')
    })

    it('Deve liberar as opçoes e editar um contato', () =>{
        cy.get('.edit').first().click()

        cy.get('.alterar').should('exist')
        
        cy.get('input[type="text"]').clear().type('Clóvis Luiz Pujol')
        cy.get('[type="email"]').clear().type('bioclpp@gmail.com')
        cy.get('[type="tel"]').clear().type('51 997358946')
        cy.get('.alterar').first().click()

        cy.contains('.contato', 'Clóvis Luiz Pujol').should('exist')
    })

    

    it('Deve deletar um contato', () => {
        cy.get('.contato').then(($contatos) => {
            const numeroInicialContatos = $contatos.length;
            cy.get('.delete').first().click();
            cy.get('.contato').should('have.length', numeroInicialContatos - 1);
        })
    })
})    