let express = require('express');
let trabajadorController = require('../controllers/trabajador');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/trabajadores/obtener_todos',trabajadorController.obtenerTodosLosTrabajadores);
router.get('/trabajadores/obtener_trabajador/:id_trabajador',trabajadorController.obtenerTrabajador);
router.put('/trabajadores/crear_trabajador',trabajadorController.crearNuevoTrabajador);
router.delete('/trabajadores/eliminar_trabajador/:id_trabajador',trabajadorController.eliminarTrabajador);
router.put('/trabajadores/actualizar_trabajador/:id_trabajador',trabajadorController.actualizarTrabajador);
router.post('/trabajadores/autenticar_trabajador',trabajadorController.autenticarTrabajador);

module.exports = router;