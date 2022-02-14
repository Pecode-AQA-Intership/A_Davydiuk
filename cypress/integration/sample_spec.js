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



  describe('HW 15', () => {
    it('Create a new user', () => {
      
      
        cy.visit('https://demoqa.com/webtables', { pageloadtimeout: 10000 })

        cy.get('#addNewRecordButton', { timeout: 10000 }).click();
        
        
        cy.get('#firstName').click()
        .type('Harry')
        .should('have.value', 'Harry');

        cy.get('#lastName').click()
        .type('Potter')
        .should('have.value', 'Potter');

        cy.get('#userEmail').click()
        .type(randomEmail)
        .should('have.value', randomEmail);

        cy.get('#age').click()
        .type(19)
        .should('have.value', 19);

        cy.get('#salary').click()
        .type(2000)
        .should('have.value', 2000);


        cy.get('#department')
        .type('Depaetment 001')
        .should('have.value', 'Depaetment 001');

        cy.get('#submit').click()

        
    });

    it('Verify that user was added', () => {
            cy.get('.ReactTable').should('contain', 'Harry');
           
        
 })

    it('Edit user and check that each field is editable', () => {
        cy.get('#edit-record-4').click()

        cy.get('#firstName').click()
        .clear()
        .type('Tom')
        .should('have.value', 'Tom');

        cy.get('#lastName').click()
        .clear()
        .type('Riddle')
        .should('have.value', 'Riddle');

        cy.get('#userEmail').click()
        .clear()
        .type('qwerty@gmail.com')
        .should('have.value', 'qwerty@gmail.com');

        cy.get('#age').click()
        .clear()
        .type(46)
        .should('have.value', 46);

        cy.get('#salary').click()
        .clear()
        .type(3000)
        .should('have.value', 3000);


        cy.get('#department')
        .clear()
        .type('Depaetment 007')
        .should('have.value', 'Depaetment 007');

        cy.get('#submit').click()
 });

    it('Check that all data was  edited', () => {
        cy.get('.ReactTable').should('contain', 'Tom');
        cy.get('.ReactTable').should('contain', 'Riddle');
        cy.get('.ReactTable').should('contain', 'qwerty@gmail.com');
        cy.get('.ReactTable').should('contain', '3000');
        cy.get('.ReactTable').should('contain', '46');
        cy.get('.ReactTable').should('contain', 'Depaetment 007')

 });

    it('Delete user from the table and check that user was deleted', () => {
        cy.get('#delete-record-4 > svg').click()
        cy.get('.ReactTable').should('not.contain', 'Tom')
    })


    it('Check searching feature', () => {
        cy.get('#addNewRecordButton', { timeout: 10000 }).click();
        
        
        cy.get('#firstName').click()
        .type('Harry')
        .should('have.value', 'Harry');

        cy.get('#lastName').click()
        .type('Potter')
        .should('have.value', 'Potter');

        cy.get('#userEmail').click()
        .type(randomEmail)
        .should('have.value', randomEmail);

        cy.get('#age').click()
        .type(19)
        .should('have.value', 19);

        cy.get('#salary').click()
        .type(2000)
        .should('have.value', 2000);

        cy.get('#department')
        .type('Depaetment 001')
        .should('have.value', 'Depaetment 001');

        cy.get('#submit').click()

        cy.get('#searchBox').click()
        .type('Harry')
        cy.get('#basic-addon2').click()
        cy.get('.ReactTable').should('contain', 'Harry');

        cy.get('#searchBox').click()
        .clear()
        .type('Potter')
        cy.get('#basic-addon2').click()
        cy.get('.ReactTable').should('contain', 'Potter');

        cy.get('#searchBox').click()
        .clear()
        .type(randomEmail)
        cy.get('#basic-addon2').click()
        cy.get('.ReactTable').should('contain', randomEmail);

        cy.get('#searchBox').click()
        .clear()
        .type(19)
        cy.get('#basic-addon2').click()
        cy.get('.ReactTable').should('contain', 19);

        cy.get('#searchBox').click()
        .clear()
        .type(2000)
        cy.get('#basic-addon2').click()
        cy.get('.ReactTable').should('contain', 2000);

        cy.get('#searchBox').click()
        .clear()
        .type('Depaetment 001')
        cy.get('#basic-addon2').click()
        cy.get('.ReactTable').should('contain', 'Depaetment 001');

        cy.get('#searchBox').click()
        .clear()
    })

    it('Implement sorting tests', () => {
        
       cy.contains('First Name').should('exist').click()
       cy.get(".rt-tbody > [role='rowgroup'] > [role='row']").find("div:nth-child(1)")

       .then(tableBody => {
        let sortNamefromSite = [];
        sortNamefromSite.push(tableBody.text());
        cy.log(sortNamefromSite)
        let sortNameHere = [];
        sortNameHere.push(tableBody.text())
        cy.log(sortNameHere)
        expect(sortNameHere.sort()).to.eql(sortNamefromSite);
    })
        cy.contains('Last Name').should('exist').click()
        cy.get(".rt-tbody > [role='rowgroup'] > [role='row']").find("div:nth-child(2)")

        .then(tableBody2 => {
        let sortLastfromSite = [];
        sortLastfromSite.push(tableBody2.text());
        cy.log(sortLastfromSite)
        let sortLastNameHere = [];
        sortLastNameHere.push(tableBody2.text())
        cy.log(sortLastNameHere)
        expect(sortLastNameHere.sort()).to.eql(sortLastfromSite)
    })    
    

        cy.contains('Age').should('exist').click()
        cy.get(".rt-tbody > [role='rowgroup'] > [role='row']").find("div:nth-child(3)")

        .then(tableBody3 => {
        let sortAgefromSite = [];
        sortAgefromSite.push(tableBody3.text());
        cy.log(sortAgefromSite)
        let sortAgeHere = [];
        sortAgeHere.push(tableBody3.text())
        cy.log(sortAgeHere)
        expect(sortAgeHere.sort()).to.eql(sortAgefromSite)
   
     }) 

        cy.contains('Email').should('exist').click()
        cy.get(".rt-tbody > [role='rowgroup'] > [role='row']").find("div:nth-child(4)")

        .then(tableBody4 => {
        let sortEmailfromSite = [];
        sortEmailfromSite.push(tableBody4.text());
        cy.log(sortEmailfromSite)
        let sortEmailHere = [];
        sortEmailHere.push(tableBody4.text())
        cy.log(sortEmailHere)
        expect(sortEmailHere.sort()).to.eql(sortEmailfromSite)


    }) 
        cy.contains('Salary').should('exist').click()
        cy.get(".rt-tbody > [role='rowgroup'] > [role='row']").find("div:nth-child(5)")

        .then(tableBody5 => {
        let sortSalaryfromSite = [];
        sortSalaryfromSite.push(tableBody5.text());
        cy.log(sortSalaryfromSite)
        let sortSalaryHere = [];
        sortSalaryHere.push(tableBody5.text())
        cy.log(sortSalaryHere)
        expect(sortSalaryHere.sort()).to.eql(sortSalaryfromSite)


    }) 
        cy.contains('Department').should('exist').click()
        cy.get(".rt-tbody > [role='rowgroup'] > [role='row']").find("div:nth-child(6)")

        .then(tableBody6 => {
        let sortDepartmentfromSite = [];
        sortDepartmentfromSite.push(tableBody6.text());
        cy.log(sortDepartmentfromSite)
        let sortDepartmentHere = [];
        sortDepartmentHere.push(tableBody6.text())
        cy.log(sortDepartmentHere)
        expect(sortDepartmentHere.sort()).to.eql(sortDepartmentfromSite)


    }) 

      
}) 
})
