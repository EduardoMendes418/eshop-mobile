describe("Sign Up Screen", () => {
  before(() => {
    cy.visit("/signup");
  });

  it("deve preencher o formulário e navegar para login", () => {
    cy.get('input[placeholder="Digite seu nome"]').type("Eduardo Mendes");
    cy.get('input[placeholder="Digite seu e-mail"]').type("eduardo@test.com");
    cy.get('input[placeholder="Digite sua senha"]').type("123456");
    cy.contains("Entrar").click();
  });
});
