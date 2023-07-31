import { Request , Response } from "express";
import { Pet } from "../models/Pet";
import { ObjectiveMenu } from "../helpers/createObjectiveMenu";

export const search = (req:Request, res:Response) => {

    let query:string = req.query.q as string;

    if(!query){
        res.redirect('/')
        return
    }
    
    let list = Pet.getFromName(query)
   
    
    res.render('pages/page', {
        menu:ObjectiveMenu(''),
        list,
        query
    })
}