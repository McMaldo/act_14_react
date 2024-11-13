const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const api = express();
api.use(express.json());
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if(err){
        console.log("connection error", err);
        return;
    }
    console.log('connection status: 200');
});
const PORT = 3000;
api.listen(PORT, () => console.log(`port: ${PORT}`));

api.get('/', (req, res) => {
    res.send('Welcome to Chazablita api')
});

/**
 * Todos los platillos disponibles en Chazablita;
 * @returns {Array}
 */
api.get('/plate/all', (req, res) => {
    db.query(`SELECT chazablita__plate.name, chazablita__plate.imgURL AS img,
        chazablita__meal.name AS meal, chazablita__type.name AS type, chazablita__category.name AS category,
        chazablita__plate.priceTotal, chazablita__plate.priceDiscount, chazablita__plate.priceTaxation,
        chazablita__plate.totalPurchases 
        FROM chazablita__plate 
        INNER JOIN chazablita__meal 
        ON chazablita__plate.meal_FK = chazablita__meal.id_meal
        INNER JOIN chazablita__type 
        ON chazablita__plate.type_FK = chazablita__type.id_type 
        INNER JOIN chazablita__category 
        ON chazablita__plate.category_FK = chazablita__category.id_categoty`, (err,results) => {
        if(err) {
            res.status(500).json({message : err.message});
            return;
        }
        res.json(results);
    });
});

/**
 * Platillos selecto de Chazablita;
 * @param {name: String}
 * @returns {Object}
 */
api.get('/plate/:name', (req, res) => {
    const {name} = req.params;
    console.log(req);
    db.query(`SELECT chazablita__plate.name, chazablita__plate.imgURL AS img,
        chazablita__meal.name AS meal, chazablita__type.name AS type, chazablita__category.name AS category,
        chazablita__plate.priceTotal, chazablita__plate.priceDiscount, chazablita__plate.priceTaxation,
        chazablita__plate.totalPurchases 
        FROM chazablita__plate 
        INNER JOIN chazablita__meal 
        ON chazablita__plate.meal_FK = chazablita__meal.id_meal
        INNER JOIN chazablita__type 
        ON chazablita__plate.type_FK = chazablita__type.id_type 
        INNER JOIN chazablita__category 
        ON chazablita__plate.category_FK = chazablita__category.id_categoty
        WHERE chazablita__plate.name = ?`, [name], (err,results) => {
        if(err) {
            res.status(500).json({message : err.message});
            return;
        }
        if(results == ''){
            res.status(500).json({message : "plate undefined"});
            return;
        }
        res.json(results);
    });
});

/**
 * login de Chazablita;
 * @param {email/nick: String, password: String}
 * @returns {Boolean}
 */

/**
 * Register de Chazablita;
 * @param {email: String, nick: String, password: String}
 * @returns {Boolean}
 */

/**
 * Compra en Chazablita;
 * @param {userToken: String, plateName: String}
 * @returns {Boolean}
 */

/**
 * Review de Chazablita;
 * @param {userToken: String, plateName: String, desc: String, stars: Integer}
 * @returns {Boolean}
 */