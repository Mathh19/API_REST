import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa está entre 3 e 255 caracteres.',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa está entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe',
        },
        isEmail: {
          msg: 'Insira um E-mail válido.',
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        isInt: {
          msg: 'Idade inválida, precisa ser um número inteiro.',
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        isFloat: {
          msg: 'Peso precisa ser um número inteiro ou de ponto flutuante.',
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        isFloat: {
          msg: 'Altura precisa ser um número inteiro ou de ponto flutuante.',
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
