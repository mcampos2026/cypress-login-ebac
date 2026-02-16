class LoginPage {

  visitarPagina() {
    cy.visit('/minha-conta/')
  }

  preencherEmail(email) {
    if (email) {
      cy.get('#username').type(email)
    }
  }

  preencherSenha(senha) {
    if (senha) {
      cy.get('#password').type(senha)
    }
  }

  clicarBotaoLogin() {
   cy.get('input[name="login"]').click()

  }

  realizarLogin(email, senha) {
    this.visitarPagina()
    this.preencherEmail(email)
    this.preencherSenha(senha)
    this.clicarBotaoLogin()
  }

  validarLoginComSucesso() {
    cy.get('.woocommerce-MyAccount-content')
      .should('be.visible')
  }

  validarMensagemErro(mensagemEsperada) {
  cy.get('.woocommerce-error li')
    .should('contain.text', mensagemEsperada)
}

}

export default new LoginPage()
