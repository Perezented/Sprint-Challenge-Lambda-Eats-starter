describe("A test for Single Page Applications Sprint", function() {
    it("Visiting the login in the app", function() {
        cy.visit("http://localhost:3000/login");
    });
    it("Checks for empty fields", function() {
        //name
        cy.get(`input[id='name']`).should("be.empty");
        //email
        cy.get(`input[id='email']`).should("be.empty");
        //password
        cy.get(`input[id='password']`).should("be.empty");
    });

    it("Add test to inputs and submit login", function() {
        //name
        cy.get(`input[id='name']`)
            .type("Michael Perez")
            .should("have.value", "Michael Perez");
        //email
        cy.get(`input[id='email']`)
            .type("mperez@gmail.com")
            .should("have.value", "mperez@gmail.com");
        //password
        cy.get(`input[id='password']`)
            .type("password")
            .should("have.value", "password");
        //terms
        cy.get(`[type='checkbox']`)
            .check()
            .should("be.checked"); //button
    });

    it("Second check for empty fields", function() {
        expect(`[id='name']`).to.have.lengthOf.at.least(2);
        expect(`[id='email']`).to.have.lengthOf.at.least(2);
        expect(`[id='password']`).to.have.lengthOf.at.least(2);
    });

    it("Will now submit the form to see results", function() {
        cy.get(`[id='loginSubmit']`).click();
    });
});
