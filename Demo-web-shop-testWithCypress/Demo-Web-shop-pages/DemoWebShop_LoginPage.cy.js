export class LogInPage{
    
    //➡️ Verify forgot password link.
    forgotPassword(){
        //Navigate the login page.
        cy.get('.ico-login').should('be.visible').click()
        //Navigate the login page.
        cy.get('.forgot-password > a').should('be.visible').click();
        //Verify the page url.
        cy.url().should('include','/passwordrecovery');
        //Verify email field.
        cy.get('#Email').should('be.visible');
        //Verify recover button.
        cy.get('form > .buttons > .button-1').should('be.visible');
        //Navigate back to login page.
        cy.go('back');
    }

    //➡️ Login with invalid Credentials.
    invalidLogin(){
        //Navigate the login page.
        cy.get('.ico-login').should('be.visible').click()
        //Verify page text.
        cy.contains('Welcome, Please Sign In!').should('be.visible')
        //Verify the login page url.
        cy.url().should('include','/login')
        //enter invalid email.
        cy.get('#Email').should('be.visible').type('testing@gmail.com')
        //enter invalid password.
        cy.get('#Password').should('be.visible').type('test12345')
        //click on login button.
        cy.get('.login-button').should('be.visible').click()
        //verify error message.
        cy.get('.validation-summary-errors').should('be.visible').contains('Login was unsuccessful.')
        //Reload the page.
        cy.reload()
    }
     
    //➡️ Login with valid credentials.
    validLogin(){
        //navigate the login page.
        cy.get('.ico-login').should('be.visible').click()
        //verify page text.
        cy.contains('Welcome, Please Sign In!').should('be.visible')
        //verify the login page url.
        cy.url().should('include','/login')
        //enter valid email.
        cy.get('#Email').should('be.visible').type('abhishekkumar@gmail.com')
        //enter valid password.
        cy.get('#Password').should('be.visible').type('Abhi1234')
        //Remember me checkbox.
        cy.get('#RememberMe').should('be.visible').check()
        //click on login button.
        cy.get('.login-button').should('be.visible').click();
        //verify page text.
        cy.contains('Welcome to our store').should('be.visible');
         //Reload the page.
         cy.reload()
    }

    // blankLogin(){
    //     //Navigate the login page.
    //     cy.get('.ico-login').should('be.visible').click()
    //     //Verify page text.
    //     cy.contains('Welcome, Please Sign In!').should('be.visible')
    //     //Verify the login page url.
    //     cy.url().should('include','/login')
    //     //Click on login button.
    //     cy.get('.login-button').should('be.visible').click();
    //     //Error message shown.
    //     cy.contains('Login was unsuccessful.').should('be.visible')
    // }

}