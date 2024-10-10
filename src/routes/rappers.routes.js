import { response, Router } from "express";

const rappersRoutes = Router()



// Array com planetas pré-cadastrados

let suspeitos = [
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Jay Z",
        idade: 54,
        descricaoFisica: ["adulto", "negro", "cabelo dread marrom", "olho castanho", "alto"
        ],
        envolvimentoAtividades: "sim",
    },

    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Beyonce",
        idade: 43,
        descricaoFisica: ["parda", "cabelo longo loiro", "olho castanho", "baixa"
        ],
        envolvimentoAtividades: "sim",
    },

    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Inês Brasil",
        idade: 50,
        descricaoFisica: ["parda", "cabelo preto longo liso", "olho castanho", "baixa"
        ],
        envolvimentoAtividades: "não",
    },

];

// Rota para listar todos os suspeitos
rappersRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
  });


  // Rota para cadastrar um novo supeito
rappersRoutes.post("/", (req, res) => {
    const { nome, idade, descricaoFisica, envolvimentoAtividades } = req.body;
  
    // Validação número inteiro
    if (! Number.isInteger(idade)) {
        return res.status(400).send({
            message: "Digite uma idade com números inteiros! 🤯 ",
    })}

  
    // Validação envolvimento em atividades suspeitas
    if (envolvimentoAtividades != "sim" && envolvimentoAtividades != "não") {
      return res.status(400).send({
        message: "Digite 'sim' ou 'não'! 😎",
      });
    }
  
    // Criação de um novo supeito
    const novoSuspeito = {
      id: Math.floor(Math.random() * 1000000),
      nome,
      idade,
      descricaoFisica,
      envolvimentoAtividades, 
    };
  
    // Adiciona o novo supeito ao array de supeitos
    suspeitos.push(novoSuspeito);
  
    return res.status(201).json({
      message: "Suspeito cadastrado com sucesso!",
      novoSuspeito,
    });
  });

  // Rota para buscar um suspeito pelo id
rappersRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
  
    // Busca um suspeito pelo id no array de suspeitos
    const suspeito = suspeitos.find((suspect) => suspect.id == id);
  
    // Verifica se o suspeito foi encontrado
    if (!suspeito) {
      return res
        .status(404)
        .json({ message: `suspeito com id ${id} não encontrado!` });
    }
  
    return res.status(200).json(suspeito);
  });

  export default rappersRoutes;
