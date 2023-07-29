import { Request , Response } from "express";

export const home = (req:Request, res:Response) =>{

    res.render('pages/home')
}
export const dog = (req:Request, res:Response) =>{

    res.render('pages/dog')
}
export const cat = (req:Request, res:Response) =>{

    res.render('pages/cat')
}
export const fish = (req:Request, res:Response) =>{

    res.render('pages/fish')
}