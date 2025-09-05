describe("Onboarding Screen E2E", () => {
  beforeEach(() => {
    cy.visit("/"); // rota inicial do onboarding
  });

  it("should render onboarding screen correctly", () => {
    // Verifica título
    cy.contains("Bem-vindo à eShop").should("be.visible");

    // Verifica subtítulo
    cy.contains("onde descobrir é tão fácil quanto comprar!").should(
      "be.visible"
    );

    // Verifica botão
    cy.contains("Começar").should("be.visible");
  });

  it("should navigate to login screen when pressing 'Começar' button", () => {
    cy.contains("Começar").click();

    // Verifica se a rota mudou para /login
    cy.url().should("include", "/login");

    // Opcional: verifica elementos do login
    cy.get('input[placeholder="Digite seu e-mail"]').should("be.visible");
    cy.get('input[placeholder="Digite sua senha"]').should("be.visible");
  });
});
