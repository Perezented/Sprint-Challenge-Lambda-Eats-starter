describe("A test for Pizza form on the Sprint", function() {
    it("Visiting the pizza form in the app", function() {
        cy.visit("http://localhost:3000/pizza");
    });
    it("Checks all the fields on the pizza form", function() {
        // cy.get(`[id='size']`)
        //     .find(":selected")
        //     .contains(`[value='small']`);
        cy.get(`select[id='size']`)
            .select("Medium")
            .should("have.value", "medium");
        cy.get(`select[id='crust']`)
            .select("Gluten Free")
            .should("have.value", "glutenFree");
        cy.get('[type="radio"]')
            .last()
            .check();
        cy.get(`[type=checkbox]`)
            .first()
            .check();
        cy.get(`[type=checkbox]`)
            .last()
            .check();
        cy.get(`[name='chicken']`).check();
        cy.get(`[name='bacon']`).check();
        cy.get(`textarea`)
            .type("Ring the doorbell")
            .should("have.value", "Ring the doorbell");
        cy.get(`input[id='pizzaNumber']`)
            .type(2)
            .should("have.value", "2");
        cy.get(`[id='addToOrder']`).click();
    });
});
