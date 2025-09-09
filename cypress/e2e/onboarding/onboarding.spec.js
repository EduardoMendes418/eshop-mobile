describe("Onboarding Screen E2E", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render onboarding screen correctly", () => {
    cy.contains("Bem-vindo à eShop").should("be.visible");
    cy.contains("onde descobrir é tão fácil quanto comprar!").should(
      "be.visible"
    );
    cy.contains("Começar").should("be.visible");
  });

  it("should navigate to login screen when pressing 'Começar' button", () => {
    cy.contains("Começar").click();
    cy.url().should("include", "/login");
    cy.get('input[placeholder="Digite seu e-mail"]').should("be.visible");
    cy.get('input[placeholder="Digite sua senha"]').should("be.visible");
  });
});
