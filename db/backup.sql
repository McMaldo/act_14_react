-- phpMyAdmin SQL Dump
-- version 5.2.1

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
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chazablita__meal`
--

CREATE TABLE `chazablita__meal` (
  `id_meal` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `priceTaxation` double NOT NULL,
  `totalPurchases` int(11) NOT NULL,
  `inserted_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `deleted_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chazablita__user`
--

CREATE TABLE `chazablita__user` (
  `id_user` int(11) NOT NULL,
  `email` varchar(80) NOT NULL,
  `nick` varchar(20) NOT NULL,
  `pass` text NOT NULL,
  `token` text NOT NULL,
  `inserted_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `deleted_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `chazablita__category`
--
ALTER TABLE `chazablita__category`
  ADD PRIMARY KEY (`id`);

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
  ADD PRIMARY KEY (`id_review`);

--
-- Indices de la tabla `chazablita__tag`
--
ALTER TABLE `chazablita__tag`
  ADD PRIMARY KEY (`id_tag`);

--
-- Indices de la tabla `chazablita__transaction`
--
ALTER TABLE `chazablita__transaction`
  ADD PRIMARY KEY (`id_transaction`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `chazablita__meal`
--
ALTER TABLE `chazablita__meal`
  MODIFY `id_meal` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `chazablita__plate`
--
ALTER TABLE `chazablita__plate`
  MODIFY `id_plate` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id_type` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `chazablita__user`
--
ALTER TABLE `chazablita__user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `chazablita__plate`
--
ALTER TABLE `chazablita__plate`
  ADD CONSTRAINT `chazablita__plate_ibfk_1` FOREIGN KEY (`category_FK`) REFERENCES `chazablita__category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `chazablita__plate_ibfk_2` FOREIGN KEY (`meal_FK`) REFERENCES `chazablita__meal` (`id_meal`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `chazablita__plate_ibfk_3` FOREIGN KEY (`type_FK`) REFERENCES `chazablita__type` (`id_type`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
