let faker = require ('faker');

let randomName = faker.name.findName(); 
let randomEmail = faker.internet.email(); 
let randomCurrentAddress = faker.address.secondaryAddress();
let randomPermanentAddress = faker.address.secondaryAddress();

describe('Task', () => {
    it('Filling in the "Text box" form', () => {
      
      
        cy.visit('https://demoqa.com/text-box')

      
        cy.get('#userName').click()
        .type(randomName)
        .should('have.value', randomName);

    
         cy.get('#userEmail').click()
        .type(randomEmail)
        .should('have.value', randomEmail);
       
         cy.get('#currentAddress').click()
        .type(randomCurrentAddress)
        .should('have.value', randomCurrentAddress);

         cy.get('#permanentAddress').click()
        .type(randomPermanentAddress)
        .should('have.value', randomPermanentAddress);

        cy.get('#submit').click()
   })

    it('Check that the entered data is correct', () => {
        cy.get('#output #name').should('include.text', randomName);
        cy.get('#output #email').should('include.text', randomEmail);
        cy.get('#output #currentAddress').should('include.text', randomCurrentAddress);
        cy.get('#output #permanentAddress').should('include.text', randomPermanentAddress);
    });
  })