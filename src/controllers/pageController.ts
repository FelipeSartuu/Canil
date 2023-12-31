import {Request, Response} from "express"
import { Pet } from "../models/Pet"
import { createMenuObject } from "../helpers/createMenuObject"


export const home = (req: Request, res: Response) => {

    //Usando a informação do Models aqui no Controller
    let list = Pet.getAll()
    
    //Enviando dados para a página principal (mustache)
    res.render("pages/page", {

        menu: createMenuObject("all"),

        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg"
        },
        list
    })
}

export const dogs = (req: Request, res: Response) => {

    //Usando a informação do Models aqui no Controller
    let list = Pet.getFromType("dog")

    //Enviando dados para a página principal (mustache)
    res.render("pages/page", {

        menu: createMenuObject("dog"),

        banner: {
            title: "Cachorros",
            background: "banner_dog.jpg"
        },
        list
    })
}

export const cats = (req: Request, res: Response) => {

    //Usando a informação do Models aqui no Controller
    let list = Pet.getFromType("cat")

    //Enviando dados para a página principal (mustache)
    res.render("pages/page", {

        menu: createMenuObject("cat"),

        banner: {
            title: "Gatos",
            background: "banner_cat.jpg"
        },
        list
    })
}

export const fishes = (req: Request, res: Response) => {

    //Usando a informação do Models aqui no Controller
    let list = Pet.getFromType("fish")

    //Enviando dados para a página principal (mustache)
    res.render("pages/page", {

        menu: createMenuObject("fish"),

        banner: {
            title: "Peixes",
            background: "banner_fish.jpg"
        },
        list
    })
}