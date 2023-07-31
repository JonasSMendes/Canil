import { Request , Response } from "express";

import { Pet } from "../models/Pet";
import { ObjectiveMenu } from "../helpers/createObjectiveMenu";

export const home = (req:Request, res:Response) =>{

    let list = Pet.getall();

    res.render('pages/page', {
        menu: ObjectiveMenu('all') ,
        banner:{
            title: 'todos os animais',
            background:'allanimals.jpg'
        },
        list
    })
}
export const dog = (req:Request, res:Response) =>{

     let list = Pet.getFromType('dog') 

    res.render('pages/page', {
        menu: ObjectiveMenu('dog'),
         banner:{
             title: 'Cachorros',
             background:'banner_dog.jpg'
            },
            list
         })
         
}
export const cat = (req:Request, res:Response) =>{
    let list = Pet.getFromType('cat') 

    res.render('pages/page', {
        menu: ObjectiveMenu('cat'),
        banner:{
            title: 'Gatos',
            background:'banner_cat.jpg'
         },
         list
        })
        
}
export const fish = (req:Request, res:Response) =>{
    let list = Pet.getFromType('fish') 

    res.render('pages/page', {
        menu: ObjectiveMenu('fish') ,
        banner:{
            title: 'Peixes',
            background:'banner_fish.jpg'
        },
        list
        })
        
}