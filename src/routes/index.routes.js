//  tirando a responsabilidade do server e fazendo ela funcionar novamente

import { Router } from "express"

// Lista de importação das rotas do projeto
import planetasRoutes from "./rappers.routes.js"

const routes = Router() 

routes.get("/", (req,res) => {
    return res.status(200).json({ message: "Servidor está funcionando!" })
    })

routes.use("/rappers", rappersRoutes)

export default routes