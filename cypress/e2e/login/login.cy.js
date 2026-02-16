import LoginPage from '../../pages/LoginPage'

describe('Login - Minha Conta EBAC', () => {

  beforeEach(() => {
    cy.fixture('loginData').as('login')
  })

  it('Login válido - caminho feliz', function () {
    LoginPage.realizarLogin(
      this.login.loginValido.email,
      this.login.loginValido.senha
    )

    LoginPage.validarLoginComSucesso()
  })

  it('Senha inválida', function () {
    LoginPage.realizarLogin(
      this.login.senhaInvalida.email,
      this.login.senhaInvalida.senha
    )

    LoginPage.validarMensagemErro('Erro')
  })

  it('Email inválido', function () {
    LoginPage.realizarLogin(
      this.login.emailInvalido.email,
      this.login.emailInvalido.senha
    )

    LoginPage.validarMensagemErro(this.login.emailInvalido.mensagemErro)
  })

  it('Campos obrigatórios não preenchidos', function () {
    LoginPage.realizarLogin(
      this.login.camposVazios.email,
      this.login.camposVazios.senha
    )

    LoginPage.validarMensagemErro('obrigatório')
  })
})
