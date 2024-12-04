const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const api = express();
api.use(express.json());

// Habilitar CORS para todas las solicitudes 
api.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	if (req.method === 'OPTIONS') {
		return res.sendStatus(200); 
	} 
	next(); 
});
  
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
});

db.connect((err) => {
	if(err){
		console.log("connection error:", err);
		return;
	}
	console.log('connection status: 200');
});
const PORT = 3000;
api.listen(PORT, () => console.log(`port: ${PORT}`));

// ENPOINTS
api.get('/', (req, res) => {
	res.send('Welcome to Chazablita api');
});

/**
 * Register de Chazablita;
 * @param {email: String, nick: String, password: String}
 * @returns {none}
 */
api.post('/user/register', async (req, res) => {
	const { email, nick, password, passwordRepeat } = req.body;

	if (!email || !nick || !password || !passwordRepeat) {
		return res.status(400).json({ message: 'The entire Form is required' });
	}
	if (password != passwordRepeat) {
		return res.status(400).json({ message: 'The password repeated is incorrect' });
	}

	try {
		//const hashedPassword = await bcrypt.hash(password, 10);
		//const user = { email, nick, password: hashedPassword };
		const user = { email, nick, password };

		db.query('INSERT INTO chazablita__user (email, nick, pass) VALUES (?, ?, ?)', [user.email, user.nick, user.password], (error, results) => {
			if (error) {
				console.error('Error inserting user:', error);
				return res.status(500).json({ message: 'Server error' });
			}
			res.status(201).json({ message: 'User registered successfully' });
		});
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
});

/**
 * login de Chazablita;
 * @param {username: String, password: String}
 * @returns {none}
 */
api.post('/user/login', (req, res) => {
	const { username, password } = req.body;
  
	if (!username || !password) {
	  return res.status(400).json({ message: 'Username and password are required' });
	}
  
	db.query('SELECT * FROM chazablita__user WHERE nick = ?', [username], (err, results) => {
	  if (err) {
		console.error('Error en la consulta:', err);
		return res.status(500).json({ message: 'Error interno en el servidor' });
	  }
  
	  if (results.length > 0) {
		const user = results[0];
  
		if (user.pass === password) {
		  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@gmail.com';
		  user.role = (user.email === ADMIN_EMAIL) ? 'Administrador' : 'Usuario';
  
		  return res.status(200).json({
			message: 'Login exitoso',
			user: {
			  username: user.nick,
			  role: user.role,
			  email: user.email
			}
		  });
		} else {
		  return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
		}
	  } else {
		return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
	  }
	});
  });
  
// api.post('/user/login', async (req, res) => {
// 	const { username, password } = req.body;
// 	if (!username || !password) {
// 	  return res.status(400).json({ message: 'Username and password are required' });
// 	}
  
// 	db.query('SELECT * FROM chazablita__user WHERE nick = ?', [username], async (error, results) => {
// 	  if (error) {
// 		return res.status(500).json({ message: 'Server error' });
// 	  }
  
// 	  if (results.length === 0) {
// 		return res.status(400).json({ message: 'Invalid credentials' });
// 	  }
  
// 	  const user = results[0];
// 	  if (!user.pass) {
// 		return res.status(500).json({ message: 'Password not found in user data', result: results });
// 	  }
  
// 	  try {
// 		//const isMatch = await bcrypt.compare(password, user.pass);
// 		if (password != user.pass) {
// 		  return res.status(400).json({ message: 'Invalid credentials' });
// 		}
  
// 		const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
// 		res.status(200).json({ token });
// 	  } catch (err) {
// 		return res.status(500).json({ message: 'Error comparing passwords', result: results });
// 	  }
// 	});
//   });
  

// Middleware para autenticar el token
const authenticateToken = (req, res, next) => {
	const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
	if (!token) {
		return res.status(401).json({ message: 'Access denied' });
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
	if (err) {
		return res.status(403).json({ message: 'Invalid token' });
	}
	req.user = user;
	next();
	});
};

// Ejemplo de una ruta protegida
api.get('/protected', authenticateToken, (req, res) => {
	res.status(200).json({ message: 'Welcome to the protected route' });
});

// Importar datos desde un archivo JSON
api.get('/import', (req, res) => {
	try {
	const data = fs.readFileSync(path.join(__dirname, '../app/src/assets/plates.json'), 'utf8');
	const plates = JSON.parse(data);

	if (!plates.length) {
		return res.status(400).send('No data to import');
	}

	plates.forEach(plate => {
		const { name, img, meal, type, category, priceTotal, priceDiscount, priceTaxation, total_purchases } = plate;

		db.query(
		'INSERT INTO chazablita__plate (name, imgURL, meal_FK, type_FK, category_FK, priceTotal, priceDiscount, priceTaxation, totalPurchases) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
		[name, img, meal, type, category, priceTotal, priceDiscount, priceTaxation, total_purchases],
		(error, results, fields) => {
			if (error) {
			console.error('Error inserting data:', error);
			res.status(500).send('Error inserting data');
			return;
			}
		}
		);
	});

	res.send('Datos importados exitosamente');
	} catch (error) {
		console.error('Error importing data:', error);
		res.status(500).send('Error importing data');
	}
});

/**
 * Conteo de todos los platillos disponibles en Chazablita;
 * @returns {Object}
 */
api.get('/plate/count', (req, res) => {
	db.query(`SELECT COUNT(*) FROM chazablita__plate`, (err,results) => {
		if(err) {
			res.status(500).json({message : err.message});
			return;
		}
		res.json(results);
	});
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
		ON chazablita__plate.category_FK = chazablita__category.id_category`, (err,results) => {
		if(err) {
			res.status(500).json({message : err.message});
			return;
		}
		res.json(results);
	});
});

/**
 * Platillo de Chazablita selecto por nombre;
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
 * Platillos de Chazablita selecto por categoria;
 * @param {name: String}
 * @returns {Array}
 */
api.get('/plate/all/:category', (req, res) => {
	const {category} = req.params;
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
		WHERE chazablita__category.name = ?`, [category], (err,results) => {
		if(err) {
			res.status(500).json({message : err.message});
			return;
		}
		if(results == ''){
			res.status(500).json({message : "empty category / category undefined"});
			return;
		}
		res.json(results);
	});
});

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