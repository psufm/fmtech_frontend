import express from "express";
const router = express.Router();

router.get("/", (req, res) => res.json({ data: "기본." }));
router.get("/memberjoin", (req, res) => res.json({ data: "회원가입" }));
router.get("/getdata", (req, res) => res.json({ data: "정보출력" }));

module.exports = router;
