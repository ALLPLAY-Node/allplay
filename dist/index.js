import express, {} from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.send("ALLPLAY API Server Ready");
});
app.use("/api/v1/users", userRouter);
// 전역 에러 핸들링
app.use((err, req, res, next) => {
    console.error(err);
    res
        .status(500)
        .json({ resultType: "FAIL", error: { message: "Internal Server Error" } });
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//# sourceMappingURL=index.js.map