
  
describe('Parametrized test', ()=>{

  beforeEach(() => {
    
    cy.viewport(1800, 1000);
  
  })

  const tests = [['john@mail.com', 'john1993',]];

  tests.forEach(text => {
    it(`Input checking "${text}"`, () => { 
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Layouts"]').click();
      
      cy.get('nb-card nb-card-header').contains( 'Basic form').parent()
      .find('input[placeholder="Email"]').type(text[0])

      cy.get('nb-card nb-card-header').contains( 'Basic form').parent()
      .find('input[placeholder="Password"]').type(text[1])

      cy.get('nb-card nb-card-header').contains('Basic form').parent()
      .find('span.custom-checkbox').click()

      cy.get('nb-card nb-card-header').contains('Basic form').parent()
      .find('button.appearance-filled').click();


    })
  })

})  