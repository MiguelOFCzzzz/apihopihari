const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");


router.put('/:id', usuariosController.atualizarUsuario); 

router.post('/cadastro', usuariosController.cadastroUsuario);

router.delete('/:id', usuariosController.deletarUsuario);


module.exports = router;