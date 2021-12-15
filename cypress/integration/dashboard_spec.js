describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should allow users to visit page and render elements on the dashboard', () => {
    cy.get('[data-cy=page-heading]').contains('Birthdays')
    cy.get('[data-cy=month-grid]')
  })

  it('should allow users to add a new birthday', () => {
    cy.get('[data-cy=name-input]').type('Michele')
    cy.get('[data-cy=month-input]').type('December')
    cy.get('[data-cy=day-input]').type('14')
    cy.get('[data-cy=bday-button]').click()
  })
})
