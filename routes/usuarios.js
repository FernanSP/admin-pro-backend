/*
    Ruta: /api/usuarios
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getUsuarios, crearUsuarios, actualizarUsuario, borrarUsuario } = require('../controllers/usuario');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/', validarJWT, getUsuarios);

router.post('/', [
        check('nombre', 'El nombre es obligaorio').not().isEmpty(),
        check('password', 'El password es obligaorio').not().isEmpty(),
        check('email', 'El email es obligaorio').isEmail(),
        validarCampos
    ],
    crearUsuarios);

router.put('/:id', [
        validarJWT,
        check('nombre', 'El nombre es obligaorio').not().isEmpty(),
        check('email', 'El email es obligaorio').isEmail(),
        check('role', 'El rol es obligaorio').not().isEmpty(),
        validarCampos
    ],
    actualizarUsuario);

router.delete('/:id', validarJWT, borrarUsuario);

module.exports = router;