import { Router } from "express";
import ProductManager from "../controller/ProductManager.js";
import express from "express"; // Importa express
import path from "path"; // Importa path

const product = new ProductManager();
const viewRouter = Router();

// Define la ruta para los archivos estáticos
const publicPath = path.join(__dirname, 'public');
viewRouter.use('/static', express.static(publicPath));

viewRouter.get('/realtimeproducts', async (req, res) => {
    res.render('realTimeProducts');
});

viewRouter.get("/chat", (req, res, next) => {
    try{
        return res.render("chat", {});
    } catch(error) {
        next(error);
    }
});

export default viewRouter;
