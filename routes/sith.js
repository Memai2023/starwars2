import express from "express";
import { sithLords } from "../data/characters.js"

const sithRouter = express.Router();

sithRouter.get('/', (req, res) => 
res.render("pages/force", {
    pageTitle: "This is the bad guys site",
    subTitle: "We are the bad guys",
    className: "sith",
    characters: sithLords
}));

export default sithRouter;