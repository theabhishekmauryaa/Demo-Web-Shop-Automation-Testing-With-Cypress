export class RegisterPage{
    visitUrl(){
        cy.visit('https://demowebshop.tricentis.com/');

    }

     //➡️ Login with invalid Credentials.
    invalidRegister(){
        //➡️Navigate to register page.
        cy.get('.ico-register').should('be.visible').click().should('have.text','Register');
        //verify register page url.
        cy.url().should('include','register');
  
        //➡️Enter the details.
        //Choose gender.
        cy.get('#gender-male').should('be.visible').click();
        //Enter first name.
        cy.get('#FirstName').should('be.visible').type('Abhishek');
        //Enter last name.
        cy.get('#LastName').should('be.visible').type('maurya');
        //Enter invalid email.
        cy.get('#Email').should('be.visible').type('maurya');
        //Enter password.
        cy.get('#Password').should('be.visible').type('Abhieedhdd');
        //Enter confirm password.
        cy.get('#ConfirmPassword').should('be.visible').type('Abhieedhdd');
        //Click on register button.
        cy.get('#register-button').should('be.visible').click();

        //verify error message.
        cy.get('.field-validation-error').should('be.visible').should('contains.text','Wrong email');

        //Reload the page.
        cy.reload();
      }  
       //➡️ Login with valid Credentials.
      validRegister(){
        //navigate to register page.
        cy.get('.ico-register').should('be.visible').click().should('have.text','Register');
        //verify register page url.
        cy.url().should('include','register');
  
        //enter the details.
        //choose gender.
        cy.get('#gender-male').should('be.visible').click();
        //enter first name.
        cy.get('#FirstName').should('be.visible').type('Abhishek');
        //enter last name.
        cy.get('#LastName').should('be.visible').type('Maurya');
        //enter email.
        // cy.get('#Email').should('be.visible').type('abhishekkumar@gmail.com');
        cy.get('#Email').should('be.visible').type('abhiiishekkumgarr@gmail.com');

        //enter password.
        cy.get('#Password').should('be.visible').type('Abhi1234');
        //enter confirm password.
        cy.get('#ConfirmPassword').should('be.visible').type('Abhi1234');
        //click on register button.
        cy.get('#register-button').should('be.visible').click();
        //Click on Continue Buttton.
        // cy.get('input[class="button-1 register-continue-button"]').click();
        // cy.reload();
    }

    
}