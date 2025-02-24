"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hb1 = (req, res) => {
    res.render("main/hb1", { mensagem: "Alguma mensagem" });
};
const hb2 = (req, res) => {
    res.render("main/hb2", {
        vencedorCaprichoso: false,
    });
};
const testCookie = (req, res) => {
    if (!("test" in req.cookies)) {
        res.cookie("test", "1");
        res.send("Você ainda não tinha o cookie. Criando...");
    }
    else {
        res.send("Você já tinha o cookie");
    }
};
const hb3 = (req, res) => {
    const profs = [
        { name: "David Fernandes", room: 321 },
        { name: "Altigran Soares", room: 224 },
        { name: "Elaine Harada", room: 345 },
        { name: "Horácio Fernandes", room: 148 },
    ];
    res.render("main/hb3", { profs });
};
const hb4 = (req, res) => {
    const profs = [
        { name: "David Fernandes", room: 321 },
        { name: "Altigran Soares", room: 224 },
        { name: "Elaine Harada", room: 345 },
        { name: "Horácio Fernandes", room: 148 },
    ];
    res.render("main/hb4", { profs });
};
const bemvindo = (req, res) => {
    res.send(`Seja bem-vindo(a), ${req.params.nome}!`);
};
const about = (req, res) => {
    res.send("about");
};
/*
const lorem = (req: Request, res: Response) => {
  res.send(lorem.generateParagraphs(parseInt(`${req.params.qtd}`)));
};
*/
const google = (req, res) => {
    res.redirect("http://google.com");
};
exports.default = { hb1, hb2, hb3, hb4, about, google, bemvindo, testCookie };
