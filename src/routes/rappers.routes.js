import { response, Router } from "express";

const rappersRoutes = Router()

  export default rappersRoutes;

// Array com planetas pré-cadastrados

let suspeitos = [
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Jay Z",
        idade: 54,
        descricaoFisica: ["adulto", "negro", "cabelo dread marrom", "olho castanho", "alto"
        ],
        envolvimentoAtividades: "Sim",
    },

    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Beyonce",
        idade: 43,
        descricaoFisica: ["parda", "cabelo longo loiro", "olho castanho", "baixa"
        ],
        envolvimentoAtividades: "Sim",
    },

    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Inês Brasil",
        idade: 50,
        descricaoFisica: ["parda", "cabelo preto longo liso", "olho castanho", "baixa"
        ],
        envolvimentoAtividades: "Não",
    },

];

// Rota para listar todos os suspeitos
rappersRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
  });
