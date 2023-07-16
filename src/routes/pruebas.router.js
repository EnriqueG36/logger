//Router para pruebas
const{Router} = require('express')
const { logger } = require('../config/logger')

const router = Router() //Ejecutamos el metodo Router


//Router para probar logger
router.get('/loggerTest', (req, res) => {
    
    logger.info("Dentro del router /loggerTest")
    req.logger.error("Logger error (prueba)")

})

module.exports = router