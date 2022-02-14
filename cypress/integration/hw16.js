let faker = require ('faker');
let randomCurrentAddress = faker.address.secondaryAddress();

describe('HW16', () => {
    it('Check Name required field', () => {
        cy.visit('/automation-practice-form')
    
        cy.get('#lastName').click()
        .type('Potter')
        .should('have.value', 'Potter');

        cy.contains('Male').should('exist').click();

        cy.get('#userNumber').click()
        .type('1234567890')
        .should('have.value', '1234567890');

        cy.get('#submit').click();

        cy.get('#firstName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('.modal-content').should('not.exist');
        cy.reload();
    });

    it('Check Last name required field', () => {
        cy.get('#firstName').click()
        .type('Harry')
        .should('have.value', 'Harry');

        cy.contains('Male').should('exist').click()

        cy.get('#userNumber').click()
        .type('1234567890')
        .should('have.value', '1234567890');

        cy.get('#submit').click();

        cy.get('#lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('.modal-content').should('not.exist');
        cy.reload();
    });

    it('Check Gender required field', () => {
        cy.get('#firstName').click()
        .type('Harry')
        .should('have.value', 'Harry');

        cy.get('#lastName').click()
        .type('Potter')
        .should('have.value', 'Potter');

        cy.get('#userNumber').click()
        .type('1234567890')
        .should('have.value', '1234567890');

        cy.get('#submit').click();

        cy.contains('Male').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('.modal-content').should('not.exist');
        cy.reload();
    });

    it('Check Mobile field validation', () => {
        
        cy.get('#firstName').click()
        .type('Harry')
        .should('have.value', 'Harry');

        cy.get('#lastName').click()
        .type('Potter')
        .should('have.value', 'Potter');

        cy.contains('Male').should('exist').click();

        cy.get('#userNumber').click()
        .type('qwerty')
        .should('have.value', 'qwerty');

        cy.get('#submit').click();

        cy.get('#userNumber').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('.modal-content').should('not.exist');
        cy.reload()
    });

    it('Happy flow', () => {
      
        cy.get('#firstName').click()
        .type('Harry')
        .should('have.value', 'Harry');

        cy.get('#lastName').click()
        .type('Potter')
        .should('have.value', 'Potter');

        cy.get('#userNumber').click()
        .type('1234567890')
        .should('have.value', '1234567890');

        cy.contains('Male').should('exist').click();

        cy.get('#userEmail').click()
        .type('qwerty@gmail.com')
        .should('have.value', 'qwerty@gmail.com');

        cy.get('#dateOfBirthInput').click();

        cy.get('.react-datepicker__year-dropdown-container.react-datepicker__year-dropdown-container--select > select')
        .select('1995');

        cy.get('.react-datepicker__month-dropdown-container.react-datepicker__month-dropdown-container--select > select')
        .select('September');

        cy.get('.react-datepicker__month > div:nth-child(3) > div.react-datepicker__day.react-datepicker__day--010.react-datepicker__day--weekend')
        .click();
 
        cy.get('#subjectsInput')
        .type('histo').type('{enter}');

        cy.contains('Music').should('exist').click();

        cy.get('#uploadPicture').selectFile('file.pdf', {
        action: 'drag-drop'
      });

        cy.get('#currentAddress').click()
        .type(randomCurrentAddress)
        .should('have.value', randomCurrentAddress);

        cy.get('#state').click();
        cy.contains('Rajasthan').click();

        cy.get('#city').click();
        cy.contains('Jaiselmer').click();

        cy.get('#submit').click();
        cy.get('.fade.modal.show');
        cy.get('.table-responsive').should('contain', 'Harry Potter');
        cy.get('.table-responsive').should('contain', 'qwerty@gmail.com');
        cy.get('.table-responsive').should('contain', '1234567890');
        cy.get('.table-responsive').should('contain', 'Male');
        cy.get('.table-responsive').should('contain', '10 September,1995');
        cy.get('.table-responsive').should('contain', 'History');
        cy.get('.table-responsive').should('contain', 'Music');
        cy.get('.table-responsive').should('contain', 'file.pdf');
        cy.get('.table-responsive').should('contain', randomCurrentAddress);
        cy.get('.table-responsive').should('contain', 'Rajasthan');
        cy.get('.table-responsive').should('contain', 'Jaiselmer');

 });
});

