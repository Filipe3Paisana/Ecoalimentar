const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 4000;

const pool = new Pool({
  user: process.env.DATABASE_USER || "Paisanabuils",
  host: process.env.DATABASE_HOST || "db-1",
  database: process.env.DATABASE_NAME || "DatabaseEco",
  password: process.env.DATABASE_PASSWORD || "P123",
  port: 5432,
});


app.use(bodyParser.json());

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar users:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.post("/users", async (req, res) => {
  const { nome, email, password } = req.body;
  
  // Encripta a palavra-passe
  const hashedPassword = await bcrypt.hash(password, 10); // Salting e hashing com custo 10

  try {
    const result = await pool.query(
      "INSERT INTO users (nome, email, password) VALUES ($1, $2, $3)",
      [nome, email, hashedPassword] 
    );
    res.status(201).send("User criado com sucesso");
  } catch (error) {
    if (error.constraint === "users_email_key") {
      res.status(400).json({ error: "O endereço de e-mail já está em uso" });
    } else {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (result.rowCount === 0) {
      res.status(404).send("Usuário não encontrado");
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, email, password } = req.body;
  try {
    const result = await pool.query(
      "UPDATE users SET nome = $1, email = $2, password = $3 WHERE id = $4",
      [nome, email, password, id]
    );
    if (result.rowCount === 0) {
      res.status(404).send("Usuário não encontrado");
    } else {
      res.status(200).send("Usuário atualizado com sucesso");
    }
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    if (result.rowCount === 0) {
      res.status(404).send("User não encontrado");
    } else {
      res.status(200).send("User deletado com sucesso");
    }
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor está a bombar em http://localhost:${PORT}/`);
});
