export class InvalidCredentialsErros extends Error {
  constructor () {
    super('Credenciais inválidas')
    this.name = 'InvalidCredentialsErros'
  }
}
