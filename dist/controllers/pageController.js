"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const Pet_1 = require("../models/Pet");
const createMenuObject_1 = require("../helpers/createMenuObject");
const home = (req, res) => {
    //Usando a informação do Models aqui no Controller
    let list = Pet_1.Pet.getAll();
    //Enviando dados para a página principal (mustache)
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("all"),
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg"
        },
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    //Usando a informação do Models aqui no Controller
    let list = Pet_1.Pet.getFromType("dog");
    //Enviando dados para a página principal (mustache)
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("dog"),
        banner: {
            title: "Cachorros",
            background: "banner_dog.jpg"
        },
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    //Usando a informação do Models aqui no Controller
    let list = Pet_1.Pet.getFromType("cat");
    //Enviando dados para a página principal (mustache)
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("cat"),
        banner: {
            title: "Gatos",
            background: "banner_cat.jpg"
        },
        list
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    //Usando a informação do Models aqui no Controller
    let list = Pet_1.Pet.getFromType("fish");
    //Enviando dados para a página principal (mustache)
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)("fish"),
        banner: {
            title: "Peixes",
            background: "banner_fish.jpg"
        },
        list
    });
};
exports.fishes = fishes;
