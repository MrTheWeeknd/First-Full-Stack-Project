"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lorem_ipsum_1 = require("lorem-ipsum");
const main_1 = __importDefault(require("../controllers/main"));
const major_1 = __importDefault(require("../controllers/major"));
const auth_1 = __importDefault(require("../controllers/auth"));
const checkAuth_1 = require("../middleware/checkAuth");
const router = (0, express_1.Router)();
const lorem = new lorem_ipsum_1.LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});
//auth controller
router.get("/auth/signup", auth_1.default.signup);
router.post("/auth/signup", auth_1.default.signup);
router.get("/auth/login", auth_1.default.login);
router.post("/auth/login", auth_1.default.login);
router.get("/auth/logout", auth_1.default.logout);
// major controller
router.get("/major", major_1.default.index);
router.get("/major/create", checkAuth_1.checkAuth, major_1.default.create);
router.post("/major/create", major_1.default.create);
router.get("/major/read/:id", major_1.default.read);
router.get("/major/update", major_1.default.update);
router.post("/major/update", major_1.default.update);
router.post("/major/remove", major_1.default.remove);
// main controller
router.get("/create-cookie", main_1.default.testCookie);
router.get("/hb1", main_1.default.hb1);
router.get("/hb2", main_1.default.hb2);
router.get("/hb3", main_1.default.hb3);
router.get("/hb4", main_1.default.hb4);
router.get("/bem-vindo/:nome", main_1.default.bemvindo);
router.get("/", (req, res) => {
    res.send("Hello World");
});
router.get("/about", main_1.default.about);
router.get("/lorem/:qtd", (req, res) => {
    res.send(lorem.generateParagraphs(parseInt(`${req.params.qtd}`)));
});
router.get("/google", main_1.default.google);
exports.default = router;
