import Button from './Button';

it('must call the passed handler function', () => {
  const handler = cy.stub().as('handler');
  cy.mount(<Button handler={handler}></Button>);
  cy.get('button').click()
  cy.get('@handler').should('be.calledOnce')
});
