describe("Login Screen E2E", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should show error for empty email", () => {
    cy.get('input[placeholder="Digite seu e-mail"]').focus().blur();
  });

  it("should show error for invalid email", () => {
    cy.get('input[placeholder="Digite seu e-mail"]').type("teste@invalido");
    cy.get('input[placeholder="Digite seu e-mail"]').blur();
    cy.contains("Por favor, insira um e-mail válido").should("be.visible");
  });

  it("should accept valid email", () => {
    cy.get('input[placeholder="Digite seu e-mail"]')
      .clear()
      .type("teste@email.com");
    cy.get('input[placeholder="Digite seu e-mail"]').blur();
    cy.contains("Por favor, insira um e-mail válido").should("not.exist");
    cy.contains("E-mail é obrigatório").should("not.exist");
  });

  it("should show error for empty password", () => {
    cy.get('input[placeholder="Digite sua senha"]').focus().blur();
  });

  it("should show error for short password", () => {
    cy.get('input[placeholder="Digite sua senha"]').type("123");
    cy.get('input[placeholder="Digite sua senha"]').blur();
    cy.contains("A senha deve ter pelo menos 6 caracteres").should(
      "be.visible"
    );
  });

  it("should accept valid password", () => {
    cy.get('input[placeholder="Digite sua senha"]').clear().type("123456");
    cy.get('input[placeholder="Digite sua senha"]').blur();
    cy.contains("Senha é obrigatória").should("not.exist");
    cy.contains("A senha deve ter pelo menos 6 caracteres").should("not.exist");
  });

  it("should toggle show/hide password", () => {
    cy.get('input[placeholder="Digite sua senha"]').type("123456");
  });

  it("should allow login when email and password are valid", () => {
    cy.get('input[placeholder="Digite seu e-mail"]').type("teste@email.com");
    cy.get('input[placeholder="Digite sua senha"]').type("123456");
    cy.contains("E-mail é obrigatório").should("not.exist");
    cy.contains("Por favor, insira um e-mail válido").should("not.exist");
    cy.contains("Senha é obrigatória").should("not.exist");
    cy.contains("A senha deve ter pelo menos 6 caracteres").should("not.exist");
  });

  it("should show all required field errors", () => {
    cy.get('input[placeholder="Digite seu e-mail"]').focus().blur();
    cy.get('input[placeholder="Digite sua senha"]').focus().blur();
  });

  it("should show email invalid error", () => {
    cy.get('input[placeholder="Digite seu e-mail"]').type("teste@invalido");
    cy.get('input[placeholder="Digite seu e-mail"]').blur();
  });

  it("should show short password error", () => {
    cy.get('input[placeholder="Digite sua senha"]').type("123");
    cy.get('input[placeholder="Digite sua senha"]').blur();
    cy.contains("A senha deve ter pelo menos 6 caracteres").should(
      "be.visible"
    );
  });

  it("should display Google and Facebook icons", () => {
    cy.get('[data-testid="google-icon"]').should("exist");
    cy.get('[data-testid="facebook-icon"]').should("exist");
  });
});
