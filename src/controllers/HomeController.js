import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'Otavio',
      email: 'otavio@gmail.com',
      idade: 45,
      peso: 90,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
