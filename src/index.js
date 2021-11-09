require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const usersRouter = require("../src/resources/users/router");
const projectsRouter = require("../src/resources/projects/router");
const donationsRouter = require("../src/resources/donations/router");
const categoriesRouter = require("../src/resources/categories/router");

const app = express();

/* SETUP MIDDLEWARE */

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

/* SETUP ROUTES */

app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
app.use("/donations", donationsRouter);
app.use("/categories", categoriesRouter);

app.get("*", (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`\n 🚀 Server is running on http://localhost:${port}/\n`);
});
