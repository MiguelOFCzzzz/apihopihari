const mysql = require("../mysql");

exports.atualizarUsuario = async (req, res) => {
    try{
        const idusuario = Number(req.params.id);
        const resultado = await mysql.execute(
            `UPDATE users
            SET name = ?,
	         email = ?,
            password = ?
            where id = ?;`,

            [req.body.name,
             req.body.email,
             req.body.password,
             idusuario
            ]
        );
       return res.status(201).send({ "mensagem": "Usuario atualizado com sucesso",
       "Resultado": resultado
        });
    }catch (error) {
        return res.status(500).send({ "mensagem": error });
    }
    }


     exports.cadastroUsuario = async (req, res) => {
        try{
            const resultado = await mysql.execute(
                `INSERT INTO users (name, email, password)
                VALUES (?, ?, ?);`,
                [
                    req.body.name,
                    req.body.email,
                    req.body.password
                ]
            );
            return res.status(201).send({ "mensagem": "Usuario cadastrado com sucesso",
            "Resultado": resultado
            });
        }catch (error) {
            return res.status(500).send({ "mensagem": error });
        }
        }



        exports.deletarUsuario = async (req, res) => {
            try{
                const idusuario = Number(req.params.id);
                const resultado = await mysql.execute(
                    `DELETE FROM users WHERE id = ?`,
                    [idusuario]
                );
                return res.status(201).send({ "mensagem": "Usuario deletado com sucesso",
                "Resultado": resultado
                });
            }catch (error) {
                return res.status(500).send({ "mensagem": error });
            }
            }

    