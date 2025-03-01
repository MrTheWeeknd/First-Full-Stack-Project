import { Request, Response } from "express";

const hb1 = (req: Request, res: Response) => {
  res.render("main/hb1", { mensagem: "Alguma mensagem" });
};

const hb2 = (req: Request, res: Response) => {
  res.render("main/hb2", {
    vencedorCaprichoso: false,
  });
};

const testCookie = (req: Request, res: Response) => {
  if (!("test" in req.cookies)) {
    res.cookie("test", "1");
    res.send("Você ainda não tinha o cookie. Criando...");
  } else {
    res.send("Você já tinha o cookie");
  }
};

const hb3 = (req: Request, res: Response) => {
  const profs = [
    { name: "David Fernandes", room: 321 },
    { name: "Altigran Soares", room: 224 },
    { name: "Elaine Harada", room: 345 },
    { name: "Horácio Fernandes", room: 148 },
  ];

  res.render("main/hb3", { profs });
};

const hb4 = (req: Request, res: Response) => {
  const profs = [
    { name: "David Fernandes", room: 321 },
    { name: "Altigran Soares", room: 224 },
    { name: "Elaine Harada", room: 345 },
    { name: "Horácio Fernandes", room: 148 },
  ];

  res.render("main/hb4", { profs });
};

const bemvindo = (req: Request, res: Response) => {
  res.send(`Seja bem-vindo(a), ${req.params.nome}!`);
};

const about = (req: Request, res: Response) => {
  res.send("about");
};

/*
const lorem = (req: Request, res: Response) => {
  res.send(lorem.generateParagraphs(parseInt(`${req.params.qtd}`)));
};
*/

const google = (req: Request, res: Response) => {
  res.redirect("http://google.com");
};

export default { hb1, hb2, hb3, hb4, about, google, bemvindo, testCookie };
