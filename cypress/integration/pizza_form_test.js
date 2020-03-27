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
        //name
        // cy.get(`input[id='name']`).should("not.be.empty");
        // //email
        // cy.get(`input[id='email']`).should("not.be.empty");
        //password
        // cy.get(`input[id='password']`).should("have.length.to.be.at.least", 2);
        expect(`[id='name']`).to.have.lengthOf.at.least(2);
        expect(`[id='email']`).to.have.lengthOf.at.least(2);
        expect(`[id='password']`).to.have.lengthOf.at.least(2);
    });

    it("Will now submit the form to see results", function() {
        cy.get(`[id='loginSubmit']`).click();
    });
});

describe("A test for Pizza form on the Sprint", function() {
    it("Visiting the pizza form in the app", function() {
        cy.visit("http://localhost:3000/pizza");
    });
    it("Checks all the fields on the pizza form", function() {
        // cy.get(`[id='size']`)
        //     .find(":selected")
        //     .contains(`[value='small']`);
        cy.get(`[id='size']`).select("Medium");
        cy.get(`select[id='crust']`).select("Gluten Free");
        cy.get('[type="radio"]')
            .last()
            .check()
            .should("have.id", "alfredoSauce");
        cy.get(`[type=checkbox]`)
            .first()
            .check()
            .should("have.id", "pepperoni");
        cy.get(`[type=checkbox]`)
            .last()
            .check()
            .should("have.id", "phillySteak");
        cy.get(`[name='chicken']`)
            .check()
            .should("have.id", "chicken");
        cy.get(`[name='bacon']`)
            .check()
            .should("have.id", "bacon");
        cy.get(`textarea`)
            .type("Ring the doorbell")
            .should("have.value", "Ring the doorbell");
        cy.get(`input[id='numberOfPizzas']`)
            .type(2)
            .should("have.value", "2");
        cy.get(`[id='addToOrder']`).click();
    });
});
