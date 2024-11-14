-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-11-2024 a las 01:19:12
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `chazablita`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chazablita__category`
--

CREATE TABLE `chazablita__category` (
  `id_category` int(11) NOT NULL,
  `name` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `chazablita__category`
--

INSERT INTO `chazablita__category` (`id_category`, `name`) VALUES
(1, 'appetizer'),
(2, 'pizza'),
(3, 'burger'),
(4, 'salad'),
(5, 'drink'),
(6, 'dessert'),
(7, 'coffee'),
(8, 'breakfast');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chazablita__meal`
--

CREATE TABLE `chazablita__meal` (
  `id_meal` int(11) NOT NULL,
  `name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `chazablita__meal`
--

INSERT INTO `chazablita__meal` (`id_meal`, `name`) VALUES
(1, 'breakfast'),
(2, 'lunch'),
(3, 'snack'),
(4, 'dinner');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chazablita__plate`
--

CREATE TABLE `chazablita__plate` (
  `id_plate` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `imgURL` text NOT NULL,
  `meal_FK` int(11) NOT NULL,
  `type_FK` int(11) NOT NULL,
  `category_FK` int(11) NOT NULL,
  `priceTotal` double NOT NULL,
  `priceDiscount` double NOT NULL,
  `priceTaxation` double DEFAULT NULL,
  `totalPurchases` int(11) NOT NULL DEFAULT 0,
  `inserted_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `deleted_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `chazablita__plate`
--

INSERT INTO `chazablita__plate` (`id_plate`, `name`, `imgURL`, `meal_FK`, `type_FK`, `category_FK`, `priceTotal`, `priceDiscount`, `priceTaxation`, `totalPurchases`, `inserted_at`, `updated_at`, `deleted_at`) VALUES
(22, 'Muzzarela', '/act_14_react/img/plate/pizzaMuzzarela.png', 2, 2, 2, 15000, 1000, 15, 150, '2024-11-13', '2024-11-13', '0000-00-00'),
(23, 'Napolitana', '/act_14_react/img/plate/pizzaNapolitana.png', 2, 2, 2, 15100, 5, 15, 120, '2024-11-13', '2024-11-13', '0000-00-00'),
(24, 'Fugazzetta Rellena', '/act_14_react/img/plate/pizzaFugazzettaRellena.webp', 2, 2, 2, 15150, 0, 15, 90, '2024-11-13', '2024-11-13', '0000-00-00'),
(25, 'Fugazzetta', '/act_14_react/img/plate/pizzaFugazzetta.webp', 2, 2, 2, 15150, 0, 15, 90, '2024-11-13', '2024-11-13', '0000-00-00'),
(26, 'Cuatro Quesos', '/act_14_react/img/plate/pizzaCuatroQuesos.png', 2, 2, 2, 15300, 15, 15, 80, '2024-11-13', '2024-11-13', '0000-00-00'),
(27, 'Margarita', '/act_14_react/img/plate/pizzaMargarita.webp', 2, 2, 2, 15200, 1000, 15, 140, '2024-11-13', '2024-11-13', '0000-00-00'),
(28, 'Pepperoni', '/act_14_react/img/plate/pizzaPepperoni.png', 2, 2, 2, 15400, 20, 15, 200, '2024-11-13', '2024-11-13', '0000-00-00'),
(29, 'Hawaiana', '/act_14_react/img/plate/pizzaHawaiana.png', 2, 2, 2, 15350, 5, 15, 70, '2024-11-13', '2024-11-13', '0000-00-00'),
(30, 'BBQ Chicken', '/act_14_react/img/plate/pizzaBbqChiken.png', 2, 2, 2, 15450, 1000, 15, 65, '2024-11-13', '2024-11-13', '0000-00-00'),
(31, 'BBQ Pork', '/act_14_react/img/plate/pizzaBbqPork.png', 2, 2, 2, 15450, 1000, 15, 65, '2024-11-13', '2024-11-13', '0000-00-00'),
(32, 'Italia', '/act_14_react/img/plate/pizzaItaliana.webp', 2, 2, 2, 15100, 15, 15, 50, '2024-11-13', '2024-11-13', '0000-00-00'),
(33, 'Carne', '/act_14_react/img/plate/pizzaCarne.png', 2, 2, 2, 17500, 1500, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(34, 'Champiñones', '/act_14_react/img/plate/pizzaChampiniones.png', 2, 2, 2, 16200, 2000, 10, 85, '2024-11-13', '2024-11-13', '0000-00-00'),
(35, 'Atún', '/act_14_react/img/plate/pizzaAtun.png', 2, 2, 2, 154300, 1000, 15, 95, '2024-11-13', '2024-11-13', '0000-00-00'),
(36, 'Salchicha', '/act_14_react/img/plate/pizzaSalchicha.webp', 2, 2, 2, 12400, 15, 20, 110, '2024-11-13', '2024-11-13', '0000-00-00'),
(37, 'Vegana', '/act_14_react/img/plate/pizzaVegana.png', 2, 2, 2, 15250, 5, 10, 75, '2024-11-13', '2024-11-13', '0000-00-00'),
(38, 'Veggie', '/act_14_react/img/plate/pizzaVeggie.png', 2, 2, 2, 15250, 5, 10, 75, '2024-11-13', '2024-11-13', '0000-00-00'),
(39, 'Mortadella', '/act_14_react/img/plate/pizzaMortadella.webp', 2, 2, 2, 15350, 1000, 15, 120, '2024-11-13', '2024-11-13', '0000-00-00'),
(40, 'Pollo', '/act_14_react/img/plate/pizzaPollo.webp', 2, 2, 2, 15400, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(41, 'Rúcula', '/act_14_react/img/plate/pizzaRucula.png', 2, 2, 2, 15300, 5, 10, 60, '2024-11-13', '2024-11-13', '0000-00-00'),
(42, 'Mediterránea', '/act_14_react/img/plate/pizzaMediterranea.png', 2, 2, 2, 15350, 1000, 15, 90, '2024-11-13', '2024-11-13', '0000-00-00'),
(43, 'Mediterránea a la Piedra', '/act_14_react/img/plate/pizzaMediterraneaPiedra.png', 2, 2, 2, 15350, 1000, 15, 90, '2024-11-13', '2024-11-13', '0000-00-00'),
(44, 'Mariscos', '/act_14_react/img/plate/pizzaMariscos.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(45, 'Especial', '/act_14_react/img/plate/pizzaEspecial.png', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(46, 'Noruega', '/act_14_react/img/plate/pizzaNoruega.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(47, 'Piemonte', '/act_14_react/img/plate/pizzaPiemonte.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(48, 'Pil-Pil', '/act_14_react/img/plate/pizzaPilPil.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(49, 'Salmón', '/act_14_react/img/plate/pizzaSalmon.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(50, 'Salmón Búfala', '/act_14_react/img/plate/pizzaSalmonBufala.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(51, 'Cabra', '/act_14_react/img/plate/pizzaCabra.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(52, 'Bacalao', '/act_14_react/img/plate/pizzaBacalao.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(53, 'Veraniega', '/act_14_react/img/plate/pizzaVeraniega.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(54, 'Parmigiana', '/act_14_react/img/plate/pizzaParmigiana.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(55, 'Huerto', '/act_14_react/img/plate/pizzaHuerto.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(56, 'Búfala', '/act_14_react/img/plate/pizzaBufala.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(57, 'Funghi Porcini', '/act_14_react/img/plate/pizzaFunghiPorcini.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(58, 'Bresaola', '/act_14_react/img/plate/pizzaBresaola.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(59, 'Próvola', '/act_14_react/img/plate/pizzaProvola.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(60, 'Vegetal', '/act_14_react/img/plate/pizzaVegetal.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(61, 'Roquefort', '/act_14_react/img/plate/pizzaRoquefort.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(62, 'Diavolo', '/act_14_react/img/plate/pizzaDiavolo.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(63, 'Versubio', '/act_14_react/img/plate/pizzaVersubio.webp', 2, 2, 2, 15500, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(64, 'Calzone', '/act_14_react/img/plate/pizzaCalzone.webp', 2, 2, 2, 8980, 1000, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(65, 'En Cono', '/act_14_react/img/plate/pizzaEnCono.png', 2, 2, 2, 5600, 700, 15, 100, '2024-11-13', '2024-11-13', '0000-00-00'),
(66, 'Hamburguesa (Cajita Feliz)', '/act_14_react/img/plate/hamburguezaCajitaFeliz.webp', 2, 2, 3, 3700, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(67, 'Hamburguesa', '/act_14_react/img/plate/hamburgueza.webp', 2, 2, 3, 5000, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(68, 'Hamburguesa con Queso', '/act_14_react/img/plate/hamburguezaConQueso.webp', 2, 2, 3, 5800, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(69, 'McFiesta Jr. (Cajita Feliz)', '/act_14_react/img/plate/hamburguezaMcFiestaCajitaFeliz.webp', 2, 2, 3, 4600, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(70, 'McFiesta', '/act_14_react/img/plate/hamburguezaMcFiesta.webp', 2, 2, 3, 5600, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(71, 'Doble Carne Doble Queso', '/act_14_react/img/plate/hamburguezaDobleCarneDobleQueso.webp', 2, 2, 3, 5000, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(72, 'Triple Hamburguesa con Queso', '/act_14_react/img/plate/hamburguezaTripleHamburguesaConQueso.webp', 2, 2, 3, 5000, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(73, 'Big Mac', '/act_14_react/img/plate/hamburguezaBigMac.webp', 2, 2, 3, 7800, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(74, 'Cuarto de Libra con Queso', '/act_14_react/img/plate/hamburguezaCuartoDeLibraConQueso.webp', 2, 2, 3, 5000, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(75, 'McNífica', '/act_14_react/img/plate/hamburguezaMcNifica.webp', 2, 2, 3, 8000, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(76, 'Doble Cuarto de Libra con Queso', '/act_14_react/img/plate/hamburguezaDobleCuartoDeLibraConQueso.webp', 2, 2, 3, 9000, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(77, 'Grand Tasty Doble', '/act_14_react/img/plate/hamburguezaGrandTastyDoble.webp', 2, 2, 3, 9000, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(78, 'Grand Tasty Triple', '/act_14_react/img/plate/hamburguezaGrandTastyTriple.webp', 2, 2, 3, 11000, 300, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(79, 'Grand Doble McBacon', '/act_14_react/img/plate/hamburguezaGrandDobleMcBacon.webp', 2, 2, 3, 9000, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(80, 'Grand Triple McBacon', '/act_14_react/img/plate/hamburguezaGrandTripleMcBacon.webp', 2, 2, 3, 11000, 400, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(81, 'Grand Tasty Turbo Bacon Doble', '/act_14_react/img/plate/hamburguezaGrandTastyTurboBaconDoble.webp', 2, 2, 3, 11000, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(82, 'Grand Tasty Turbo Bacon Triple', '/act_14_react/img/plate/hamburguezaGrandTastyTurboBaconTriple.webp', 2, 2, 3, 14000, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(83, 'Bacon Cheddar McMelt', '/act_14_react/img/plate/hamburguezaBaconCheddarMcMelt.webp', 2, 2, 3, 9000, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(84, 'Grand Leyenda', '/act_14_react/img/plate/hamburguezaGrandLeyenda.webp', 2, 2, 3, 9800, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(85, 'Chazablita', '/act_14_react/img/plate/hamburguezaChazablita.webp', 2, 2, 3, 26000, 1, 10000, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(86, 'Chaza Huevo Chaza', '/act_14_react/img/plate/hamburguezaChazaHuevoChaza.webp', 2, 2, 3, 25000, 1, 10000, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(87, 'Super Chazablita', '/act_14_react/img/plate/hamburguezaSuperChazablita.png', 2, 2, 3, 45000, 1, 10000, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(88, 'Super Chazablita Emparedado', '/act_14_react/img/plate/hamburguezaSuperChazablitaEmparedado.png', 2, 2, 3, 45000, 1, 10000, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(89, 'Super Fedeguche', '/act_14_react/img/plate/hamburguezaSuperFedeguche.png', 2, 2, 3, 45000, 1, 10000, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(90, 'Super Fedeguche Emparedado', '/act_14_react/img/plate/hamburguezaSuperFedegucheEmparedado.png', 2, 2, 3, 60000, 1, 10000, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(91, 'Ensalada Cesar', '/act_14_react/img/plate/ensaladaCesar.webp', 2, 1, 4, 7800, 250, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(92, 'Ensalada Mixta', '/act_14_react/img/plate/ensaladaMixta.webp', 2, 1, 4, 7000, 500, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(93, 'Ensalada Completa', '/act_14_react/img/plate/ensaladaCompleta.webp', 2, 1, 4, 8500, 5, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(94, 'Ensalada Vegetal', '/act_14_react/img/plate/ensaladaVegetal.webp', 2, 1, 4, 8000, 5, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(95, 'Ensalada Di Rucula', '/act_14_react/img/plate/ensaladaRucula.webp', 2, 1, 4, 8000, 5, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(96, 'Ensalada Caprese', '/act_14_react/img/plate/ensaladaCaprese.webp', 2, 1, 4, 9000, 5, 10, 25, '2024-11-13', '2024-11-13', '0000-00-00'),
(97, 'Pizza de Nutella', '/act_14_react/img/plate/pizzaNutella.webp', 1, 3, 6, 5500, 15, 20, 30, '2024-11-13', '2024-11-13', '0000-00-00'),
(98, 'Pizza de Tiramisú', '/act_14_react/img/plate/pizzaTiramisu.webp', 1, 3, 6, 5500, 15, 20, 30, '2024-11-13', '2024-11-13', '0000-00-00'),
(99, 'Cannolo Siciliano', '/act_14_react/img/plate/pizzaCannoloSiciliano.webp', 1, 3, 6, 5500, 15, 20, 30, '2024-11-13', '2024-11-13', '0000-00-00'),
(100, 'Café Espresso', '/act_14_react/img/plate/coffeeEspresso.webp', 1, 2, 7, 4500, 550, 5, 50, '2024-11-13', '2024-11-13', '0000-00-00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chazablita__review`
--

CREATE TABLE `chazablita__review` (
  `id_review` int(11) NOT NULL,
  `id_user_FK` int(11) NOT NULL,
  `id_plate_FK` int(11) NOT NULL,
  `message` text NOT NULL,
  `stars` int(2) NOT NULL,
  `inserted_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `deleted_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chazablita__tag`
--

CREATE TABLE `chazablita__tag` (
  `id_tag` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chazablita__transaction`
--

CREATE TABLE `chazablita__transaction` (
  `id_transaction` int(11) NOT NULL,
  `id_user_FK` int(11) NOT NULL,
  `id_plate_FK` int(11) NOT NULL,
  `inserted_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `deleted_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chazablita__type`
--

CREATE TABLE `chazablita__type` (
  `id_type` int(11) NOT NULL,
  `name` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `chazablita__type`
--

INSERT INTO `chazablita__type` (`id_type`, `name`) VALUES
(1, 'appetizer'),
(2, 'main course'),
(3, 'dessert');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chazablita__user`
--

CREATE TABLE `chazablita__user` (
  `id_user` int(11) NOT NULL,
  `email` varchar(320) NOT NULL,
  `nick` varchar(20) NOT NULL,
  `pass` text NOT NULL,
  `token` text NOT NULL,
  `inserted_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `deleted_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `chazablita__user`
--

INSERT INTO `chazablita__user` (`id_user`, `email`, `nick`, `pass`, `token`, `inserted_at`, `updated_at`, `deleted_at`) VALUES
(1, 'maldonado.ignacio.pablo@gmail.com', 'McMaldo', '1234', 'McMaldoAdmin', '2024-11-13', '2024-11-13', '0000-00-00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `chazablita__category`
--
ALTER TABLE `chazablita__category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indices de la tabla `chazablita__meal`
--
ALTER TABLE `chazablita__meal`
  ADD PRIMARY KEY (`id_meal`);

--
-- Indices de la tabla `chazablita__plate`
--
ALTER TABLE `chazablita__plate`
  ADD PRIMARY KEY (`id_plate`),
  ADD KEY `category_FK` (`category_FK`),
  ADD KEY `meal_FK` (`meal_FK`),
  ADD KEY `type_FK` (`type_FK`);

--
-- Indices de la tabla `chazablita__review`
--
ALTER TABLE `chazablita__review`
  ADD PRIMARY KEY (`id_review`),
  ADD KEY `id_user_FK` (`id_user_FK`);

--
-- Indices de la tabla `chazablita__tag`
--
ALTER TABLE `chazablita__tag`
  ADD PRIMARY KEY (`id_tag`);

--
-- Indices de la tabla `chazablita__transaction`
--
ALTER TABLE `chazablita__transaction`
  ADD PRIMARY KEY (`id_transaction`),
  ADD KEY `id_plate_FK` (`id_plate_FK`),
  ADD KEY `id_user_FK` (`id_user_FK`);

--
-- Indices de la tabla `chazablita__type`
--
ALTER TABLE `chazablita__type`
  ADD PRIMARY KEY (`id_type`);

--
-- Indices de la tabla `chazablita__user`
--
ALTER TABLE `chazablita__user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `chazablita__category`
--
ALTER TABLE `chazablita__category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `chazablita__meal`
--
ALTER TABLE `chazablita__meal`
  MODIFY `id_meal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `chazablita__plate`
--
ALTER TABLE `chazablita__plate`
  MODIFY `id_plate` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de la tabla `chazablita__review`
--
ALTER TABLE `chazablita__review`
  MODIFY `id_review` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `chazablita__tag`
--
ALTER TABLE `chazablita__tag`
  MODIFY `id_tag` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `chazablita__transaction`
--
ALTER TABLE `chazablita__transaction`
  MODIFY `id_transaction` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `chazablita__type`
--
ALTER TABLE `chazablita__type`
  MODIFY `id_type` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `chazablita__user`
--
ALTER TABLE `chazablita__user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `chazablita__plate`
--
ALTER TABLE `chazablita__plate`
  ADD CONSTRAINT `chazablita__plate_ibfk_1` FOREIGN KEY (`category_FK`) REFERENCES `chazablita__category` (`id_category`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `chazablita__plate_ibfk_2` FOREIGN KEY (`meal_FK`) REFERENCES `chazablita__meal` (`id_meal`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `chazablita__plate_ibfk_3` FOREIGN KEY (`type_FK`) REFERENCES `chazablita__type` (`id_type`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `chazablita__review`
--
ALTER TABLE `chazablita__review`
  ADD CONSTRAINT `chazablita__review_ibfk_1` FOREIGN KEY (`id_plate_FK`) REFERENCES `chazablita__plate` (`id_plate`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `chazablita__review_ibfk_2` FOREIGN KEY (`id_user_FK`) REFERENCES `chazablita__user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `chazablita__transaction`
--
ALTER TABLE `chazablita__transaction`
  ADD CONSTRAINT `chazablita__transaction_ibfk_1` FOREIGN KEY (`id_plate_FK`) REFERENCES `chazablita__plate` (`id_plate`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `chazablita__transaction_ibfk_2` FOREIGN KEY (`id_user_FK`) REFERENCES `chazablita__user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
