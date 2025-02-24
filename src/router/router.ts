import { Router } from "express";
import { LoremIpsum } from "lorem-ipsum";
import mainController from "../controllers/main";
import majorController from "../controllers/major";
import authController from "../controllers/auth";
import { checkAuth } from "../middleware/checkAuth";

const router = Router();

const lorem = new LoremIpsum({
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
router.get("/auth/signup", authController.signup);
router.post("/auth/signup", authController.signup);
router.get("/auth/login", authController.login);
router.post("/auth/login", authController.login);
router.get("/auth/logout", authController.logout);

// major controller
router.get("/major", majorController.index);
router.get("/major/create", checkAuth, majorController.create);
router.post("/major/create", majorController.create);
router.get("/major/read/:id", majorController.read);
router.get("/major/update/:id", majorController.update);
router.post("/major/update/:id", majorController.update);
router.get("/major/remove/:id", majorController.remove);

// main controller
router.get("/create-cookie", mainController.testCookie);
router.get("/hb1", mainController.hb1);
router.get("/hb2", mainController.hb2);
router.get("/hb3", mainController.hb3);
router.get("/hb4", mainController.hb4);
router.get("/bem-vindo/:nome", mainController.bemvindo);

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/about", mainController.about);

router.get("/lorem/:qtd", (req, res) => {
  res.send(lorem.generateParagraphs(parseInt(`${req.params.qtd}`)));
});

router.get("/google", mainController.google);

export default router;
