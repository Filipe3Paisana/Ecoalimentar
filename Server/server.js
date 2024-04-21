const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const bcrypt = require("bcryptjs");
const cors = require('cors');

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || ['http://localhost:80', 'http://localhost'].includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

const app = express();
const PORT = 4000;
app.use(cors(corsOptions));
app.use(bodyParser.json());

if (!process.env.DATABASE_USER || !process.env.DATABASE_HOST || !process.env.DATABASE_NAME || !process.env.DATABASE_PASSWORD) {
  console.error('Missing database configuration environment variables');
  process.exit(1); 
}

const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT || 5432,
});


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
  const { user_name, user_email, user_password } = req.body;
  const hashedPassword = await bcrypt.hash(user_password, 10);

  try {
    const result = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password_hash) VALUES ($1, $2, $3) RETURNING *",
      [user_name, user_email, hashedPassword]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    if (error.constraint === "users_user_email_key") {
      res.status(400).json({ error: "O endereço de e-mail já está em uso" });
    } else {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
});


app.get("/users/:user_id", async (req, res) => {
  const { user_id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM users WHERE user_id = $1", [user_id]);
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


app.put("/users/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const { user_name, user_email, user_password } = req.body;
  const hashedPassword = await bcrypt.hash(user_password, 10);

  try {
    const result = await pool.query(
      "UPDATE users SET user_name = $1, user_email = $2, user_password_hash = $3 WHERE user_id = $4",
      [user_name, user_email, hashedPassword, user_id]
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


app.delete("/users/:user_id", async (req, res) => {
  const { user_id } = req.params;
  try {
    const result = await pool.query("DELETE FROM users WHERE user_id = $1", [user_id]);
    if (result.rowCount === 0) {
      res.status(404).send("Usuário não encontrado");
    } else {
      res.status(200).send("Usuário deletado com sucesso");
    }
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});


app.post("/login", async (req, res) => {
  const { user_email, user_password } = req.body;
  try {
    const result = await pool.query("SELECT * FROM users WHERE user_email = $1", [user_email]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const isValid = await bcrypt.compare(user_password, user.user_password_hash);
      if (isValid) {
        res.status(200).json({ message: "Login bem-sucedido" });
      } else {
        res.status(401).json({ error: "Senha incorreta" });
      }
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    console.error("Erro ao realizar login:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.post("/register", async (req, res) => {
  const { user_name, user_email, user_password } = req.body;
  const hashedPassword = await bcrypt.hash(user_password, 10);

  try {
    const result = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password_hash) VALUES ($1, $2, $3) RETURNING *",
      [user_name, user_email, hashedPassword]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    if (error.constraint === "users_user_email_key") {
      res.status(400).json({ error: "O endereço de e-mail já está em uso" });
    } else {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
});


app.listen(PORT, () => {
  console.log(`Servidor está a bombar em http://localhost:${PORT}/`);
});
