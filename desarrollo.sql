-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-11-2017 a las 19:43:15
-- Versión del servidor: 10.1.28-MariaDB
-- Versión de PHP: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `desarrollo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alerta`
--

CREATE TABLE `alerta` (
  `idAlerta` int(11) NOT NULL,
  `nombreAlerta` varchar(50) NOT NULL,
  `tipoPrioridad` varchar(50) NOT NULL,
  `mensaje` text,
  `imagenPequeña` varchar(150) DEFAULT NULL,
  `ImagenGrande` varchar(150) DEFAULT NULL,
  `cantidadAlertas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta`
--

CREATE TABLE `cuenta` (
  `idCuenta` int(4) NOT NULL,
  `nombreCuenta` varchar(100) NOT NULL,
  `cuentaRelavante` tinyint(4) NOT NULL,
  `silenciar_idSilenciar` int(11) NOT NULL,
  `user_usuario_idUsuario` int(11) NOT NULL,
  `tipo_cuenta_idTipoCuenta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta_has_tweets`
--

CREATE TABLE `cuenta_has_tweets` (
  `cuenta_idCuenta` int(4) NOT NULL,
  `tweets_idTweets` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diccionario_palabras`
--

CREATE TABLE `diccionario_palabras` (
  `iddiccionario_palabras` int(11) NOT NULL,
  `palabra` varchar(45) NOT NULL,
  `tipo_estado_idTipoEstado` int(11) NOT NULL,
  `alerta_idAlerta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `guarda_datos_general`
--

CREATE TABLE `guarda_datos_general` (
  `idGuardaDatosGeneral` int(11) NOT NULL,
  `seguidores` double DEFAULT NULL,
  `alcance` double DEFAULT NULL,
  `impresiones` double DEFAULT NULL,
  `contribuidores` double DEFAULT NULL,
  `twettGenerados` double DEFAULT NULL,
  `retweets` double DEFAULT NULL,
  `respuestas` double DEFAULT NULL,
  `menciones` double DEFAULT NULL,
  `visitas` double DEFAULT NULL,
  `rebote` double DEFAULT NULL,
  `permanencia` double DEFAULT NULL,
  `interacciones` double DEFAULT NULL,
  `publicaciones` double DEFAULT NULL,
  `nombreTipoMedio` varchar(50) NOT NULL,
  `fechaInicio` datetime NOT NULL,
  `fechaFinal` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `log_panel`
--

CREATE TABLE `log_panel` (
  `idLogPanel` int(11) NOT NULL,
  `nombreUsuario` varchar(50) DEFAULT NULL,
  `tipoUsuario` varchar(50) DEFAULT NULL,
  `modulo` varchar(50) DEFAULT NULL,
  `fecha` timestamp NULL DEFAULT NULL,
  `ip` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prueba`
--

CREATE TABLE `prueba` (
  `id` int(11) NOT NULL,
  `nombreUsuariop` varchar(255) NOT NULL,
  `nombreUsuariop1` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `prueba`
--

INSERT INTO `prueba` (`id`, `nombreUsuariop`, `nombreUsuariop1`) VALUES
(19, '', ''),
(0, '', ''),
(0, '', ''),
(0, '', ''),
(0, '', ''),
(0, '', ''),
(0, 'hola', ''),
(0, '', ''),
(0, 'hoojoj', ''),
(0, '', ''),
(0, '', ''),
(0, '', ''),
(0, 'sdfgh', ''),
(0, '', ''),
(0, 'sdfgh', ''),
(0, '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultados_tweets`
--

CREATE TABLE `resultados_tweets` (
  `idresultados` int(11) NOT NULL,
  `cantidadPositivos` int(11) NOT NULL,
  `cantidadCritico` int(11) NOT NULL,
  `cantidadNegativos` int(11) NOT NULL,
  `cantidadNeutros` int(11) NOT NULL,
  `tweets_idTweets` int(11) NOT NULL,
  `fechaCantidad` datetime NOT NULL,
  `totalGeneral` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultado_kpi_calculo`
--

CREATE TABLE `resultado_kpi_calculo` (
  `idRedSocialKpi` int(11) NOT NULL,
  `kpi1` double NOT NULL,
  `kpi2` double NOT NULL,
  `kpi3` double NOT NULL,
  `kpi4` double NOT NULL,
  `fechaIngreso` datetime NOT NULL,
  `fechaFinal` datetime DEFAULT NULL,
  `cuenta_idCuenta` int(4) NOT NULL,
  `guarda_datos_general_idGuardaDatosGeneral` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `silenciar`
--

CREATE TABLE `silenciar` (
  `idSilenciar` int(11) NOT NULL,
  `silencia` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_cuenta`
--

CREATE TABLE `tipo_cuenta` (
  `idTipoCuenta` int(11) NOT NULL,
  `nombreTipoCuenta` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_estado`
--

CREATE TABLE `tipo_estado` (
  `idTipoEstado` int(11) NOT NULL,
  `nombreEstado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tweets`
--

CREATE TABLE `tweets` (
  `idTweets` int(11) NOT NULL,
  `screenName` varchar(254) DEFAULT NULL,
  `tweet` varchar(254) DEFAULT NULL,
  `id_tweet` varchar(254) DEFAULT NULL,
  `id_name` varchar(254) DEFAULT NULL,
  `fechaCreacion` date DEFAULT NULL,
  `likeCount` int(15) DEFAULT NULL,
  `fallowsCount` int(15) DEFAULT NULL,
  `retweetCount` int(15) DEFAULT NULL,
  `verificado` tinyint(4) DEFAULT NULL,
  `codigo` text,
  `image` varchar(100) DEFAULT NULL,
  `tipo` varchar(100) DEFAULT NULL,
  `diccionario_palabras_iddiccionario_palabras` int(11) NOT NULL,
  `fechaIngreso` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usr_cliente`
--

CREATE TABLE `usr_cliente` (
  `idCliente` int(11) NOT NULL,
  `nombreCliente` varchar(45) NOT NULL,
  `apellidoPCliente` varchar(50) NOT NULL,
  `apellidoMCliente` varchar(50) DEFAULT NULL,
  `emailCliente` varchar(100) NOT NULL,
  `telefonoFijoCliente` int(15) DEFAULT NULL,
  `telefonoMovilCliente` int(15) DEFAULT NULL,
  `claveCliente` varchar(50) NOT NULL,
  `fechaCreacion` date NOT NULL,
  `user_perfil_idPerfil` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usr_perfil`
--

CREATE TABLE `usr_perfil` (
  `idPerfil` int(11) NOT NULL,
  `nombrePerfil` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usr_perfil`
--

INSERT INTO `usr_perfil` (`idPerfil`, `nombrePerfil`) VALUES
(1, 'admin'),
(2, 'cm-admin'),
(3, 'cm-usuario'),
(4, 'cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usr_perfilpermiso`
--

CREATE TABLE `usr_perfilpermiso` (
  `idPerfilPermiso` int(11) NOT NULL,
  `user_perfil_idPerfil` int(11) NOT NULL,
  `user_permiso_idPermiso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usr_permiso`
--

CREATE TABLE `usr_permiso` (
  `idPermiso` int(11) NOT NULL,
  `nombrePermiso` varchar(100) NOT NULL,
  `accesoMetodo` varchar(100) NOT NULL,
  `moduloPermiso` varchar(100) NOT NULL,
  `pesoPermiso` varchar(100) NOT NULL,
  `fechaCreacion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usr_usuario`
--

CREATE TABLE `usr_usuario` (
  `idUsuario` int(11) NOT NULL,
  `nombreUsuario` varchar(50) NOT NULL,
  `apellidoUsuario` varchar(50) NOT NULL,
  `emaiUsuario` varchar(100) NOT NULL,
  `avatartUsuario` varchar(100) NOT NULL,
  `claveUsuario` varchar(20) NOT NULL,
  `fechaCreacion` date NOT NULL,
  `telefonoMovil` varchar(45) DEFAULT NULL,
  `telefonoFijo` varchar(45) DEFAULT NULL,
  `user_perfil_idPerfil` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usr_usuario`
--

INSERT INTO `usr_usuario` (`idUsuario`, `nombreUsuario`, `apellidoUsuario`, `emaiUsuario`, `avatartUsuario`, `claveUsuario`, `fechaCreacion`, `telefonoMovil`, `telefonoFijo`, `user_perfil_idPerfil`) VALUES
(1, 'alan', 'aranguiz', 'alan.aranguiz@brechadigital.cl', '', 'admin123', '2017-10-30', NULL, NULL, 1),
(2, 'alonso', 'santiago', 'alonso@yopmail.com', '', '123456', '2017-11-01', NULL, NULL, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarioprueba`
--

CREATE TABLE `usuarioprueba` (
  `idUsuariop` int(11) NOT NULL,
  `nombreUsuario` varchar(50) CHARACTER SET utf32 COLLATE utf32_unicode_ci NOT NULL,
  `apellidoUsuario` varchar(255) NOT NULL,
  `emailUsuario` varchar(255) NOT NULL,
  `claveUsuario` varchar(255) NOT NULL,
  `fechaCreacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarioprueba`
--

INSERT INTO `usuarioprueba` (`idUsuariop`, `nombreUsuario`, `apellidoUsuario`, `emailUsuario`, `claveUsuario`, `fechaCreacion`) VALUES
(59, '[object HTMLInputElement]', '[object HTMLInputElement]', '', '', '0000-00-00'),
(60, 'sdfgh', 'erty', '', '', '0000-00-00'),
(61, 'hola', 'mundo', '[object HTMLInputElement]', '', '0000-00-00'),
(62, 'holap', 'mundop', 'holap.mundop@yopmail.com', '', '0000-00-00'),
(63, 'yo', 'yop', 'yo.yop@yopmail.com', 'undefined', '0000-00-00'),
(64, 'NOSE', 'NOSE', 'nose.nose@yopmail.com', '123123', '0000-00-00'),
(65, 'jaj', 'JAJAJ', 'jaja.jaja@yopmail.com', '123123', '0000-00-00'),
(66, '', '', '', '', '0000-00-00'),
(67, 'asdfg', 'asdfg', 'asdfg@yopmail.com', '147741', '0000-00-00'),
(68, 'soila', 'cerda', 'soila.cerda@yopmail.com', '159951', '0000-00-00'),
(69, '', '', '', '', '0000-00-00'),
(70, '.', '.', '.', '.', '1970-01-01');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alerta`
--
ALTER TABLE `alerta`
  ADD PRIMARY KEY (`idAlerta`);

--
-- Indices de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  ADD PRIMARY KEY (`idCuenta`),
  ADD KEY `fk_cuenta_silenciar1_idx` (`silenciar_idSilenciar`),
  ADD KEY `fk_cuenta_user_usuario1_idx` (`user_usuario_idUsuario`),
  ADD KEY `fk_cuenta_tipo_cuenta1_idx` (`tipo_cuenta_idTipoCuenta`);

--
-- Indices de la tabla `cuenta_has_tweets`
--
ALTER TABLE `cuenta_has_tweets`
  ADD PRIMARY KEY (`cuenta_idCuenta`,`tweets_idTweets`),
  ADD KEY `fk_cuenta_has_tweets_tweets1_idx` (`tweets_idTweets`),
  ADD KEY `fk_cuenta_has_tweets_cuenta1_idx` (`cuenta_idCuenta`);

--
-- Indices de la tabla `diccionario_palabras`
--
ALTER TABLE `diccionario_palabras`
  ADD PRIMARY KEY (`iddiccionario_palabras`),
  ADD KEY `fk_diccionario_palabras_tipo_estado1_idx` (`tipo_estado_idTipoEstado`),
  ADD KEY `fk_diccionario_palabras_alerta1_idx` (`alerta_idAlerta`);

--
-- Indices de la tabla `guarda_datos_general`
--
ALTER TABLE `guarda_datos_general`
  ADD PRIMARY KEY (`idGuardaDatosGeneral`);

--
-- Indices de la tabla `log_panel`
--
ALTER TABLE `log_panel`
  ADD PRIMARY KEY (`idLogPanel`);

--
-- Indices de la tabla `resultados_tweets`
--
ALTER TABLE `resultados_tweets`
  ADD PRIMARY KEY (`idresultados`),
  ADD KEY `fk_resultados_tweets_tweets1_idx` (`tweets_idTweets`);

--
-- Indices de la tabla `resultado_kpi_calculo`
--
ALTER TABLE `resultado_kpi_calculo`
  ADD PRIMARY KEY (`idRedSocialKpi`),
  ADD KEY `fk_dato_kpi_calculo_cuenta1_idx` (`cuenta_idCuenta`),
  ADD KEY `fk_resultado_kpi_calculo_guarda_datos_general1_idx` (`guarda_datos_general_idGuardaDatosGeneral`);

--
-- Indices de la tabla `silenciar`
--
ALTER TABLE `silenciar`
  ADD PRIMARY KEY (`idSilenciar`);

--
-- Indices de la tabla `tipo_cuenta`
--
ALTER TABLE `tipo_cuenta`
  ADD PRIMARY KEY (`idTipoCuenta`);

--
-- Indices de la tabla `tipo_estado`
--
ALTER TABLE `tipo_estado`
  ADD PRIMARY KEY (`idTipoEstado`);

--
-- Indices de la tabla `tweets`
--
ALTER TABLE `tweets`
  ADD PRIMARY KEY (`idTweets`),
  ADD KEY `fk_tweets_diccionario_palabras1_idx` (`diccionario_palabras_iddiccionario_palabras`);

--
-- Indices de la tabla `usr_cliente`
--
ALTER TABLE `usr_cliente`
  ADD PRIMARY KEY (`idCliente`),
  ADD KEY `fk_usr_cliente_user_perfil1_idx` (`user_perfil_idPerfil`);

--
-- Indices de la tabla `usr_perfil`
--
ALTER TABLE `usr_perfil`
  ADD PRIMARY KEY (`idPerfil`);

--
-- Indices de la tabla `usr_perfilpermiso`
--
ALTER TABLE `usr_perfilpermiso`
  ADD PRIMARY KEY (`idPerfilPermiso`),
  ADD KEY `fk_user_perfilPermiso_user_perfil1_idx` (`user_perfil_idPerfil`),
  ADD KEY `fk_user_perfilPermiso_user_permiso1_idx` (`user_permiso_idPermiso`);

--
-- Indices de la tabla `usr_permiso`
--
ALTER TABLE `usr_permiso`
  ADD PRIMARY KEY (`idPermiso`);

--
-- Indices de la tabla `usr_usuario`
--
ALTER TABLE `usr_usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD KEY `fk_user_usuario_user_perfil_idx` (`user_perfil_idPerfil`);

--
-- Indices de la tabla `usuarioprueba`
--
ALTER TABLE `usuarioprueba`
  ADD PRIMARY KEY (`idUsuariop`),
  ADD KEY `idUsuariop` (`idUsuariop`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alerta`
--
ALTER TABLE `alerta`
  MODIFY `idAlerta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  MODIFY `idCuenta` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cuenta_has_tweets`
--
ALTER TABLE `cuenta_has_tweets`
  MODIFY `cuenta_idCuenta` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `diccionario_palabras`
--
ALTER TABLE `diccionario_palabras`
  MODIFY `iddiccionario_palabras` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `guarda_datos_general`
--
ALTER TABLE `guarda_datos_general`
  MODIFY `idGuardaDatosGeneral` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `log_panel`
--
ALTER TABLE `log_panel`
  MODIFY `idLogPanel` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `resultados_tweets`
--
ALTER TABLE `resultados_tweets`
  MODIFY `idresultados` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `resultado_kpi_calculo`
--
ALTER TABLE `resultado_kpi_calculo`
  MODIFY `idRedSocialKpi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `silenciar`
--
ALTER TABLE `silenciar`
  MODIFY `idSilenciar` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_cuenta`
--
ALTER TABLE `tipo_cuenta`
  MODIFY `idTipoCuenta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_estado`
--
ALTER TABLE `tipo_estado`
  MODIFY `idTipoEstado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tweets`
--
ALTER TABLE `tweets`
  MODIFY `idTweets` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usr_cliente`
--
ALTER TABLE `usr_cliente`
  MODIFY `idCliente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usr_perfil`
--
ALTER TABLE `usr_perfil`
  MODIFY `idPerfil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usr_perfilpermiso`
--
ALTER TABLE `usr_perfilpermiso`
  MODIFY `idPerfilPermiso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usr_permiso`
--
ALTER TABLE `usr_permiso`
  MODIFY `idPermiso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usr_usuario`
--
ALTER TABLE `usr_usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarioprueba`
--
ALTER TABLE `usuarioprueba`
  MODIFY `idUsuariop` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cuenta`
--
ALTER TABLE `cuenta`
  ADD CONSTRAINT `fk_cuenta_silenciar1` FOREIGN KEY (`silenciar_idSilenciar`) REFERENCES `silenciar` (`idSilenciar`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cuenta_tipo_cuenta1` FOREIGN KEY (`tipo_cuenta_idTipoCuenta`) REFERENCES `tipo_cuenta` (`idTipoCuenta`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cuenta_user_usuario1` FOREIGN KEY (`user_usuario_idUsuario`) REFERENCES `usr_usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `cuenta_has_tweets`
--
ALTER TABLE `cuenta_has_tweets`
  ADD CONSTRAINT `fk_cuenta_has_tweets_cuenta1` FOREIGN KEY (`cuenta_idCuenta`) REFERENCES `cuenta` (`idCuenta`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cuenta_has_tweets_tweets1` FOREIGN KEY (`tweets_idTweets`) REFERENCES `tweets` (`idTweets`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `diccionario_palabras`
--
ALTER TABLE `diccionario_palabras`
  ADD CONSTRAINT `fk_diccionario_palabras_alerta1` FOREIGN KEY (`alerta_idAlerta`) REFERENCES `alerta` (`idAlerta`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_diccionario_palabras_tipo_estado1` FOREIGN KEY (`tipo_estado_idTipoEstado`) REFERENCES `tipo_estado` (`idTipoEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `resultados_tweets`
--
ALTER TABLE `resultados_tweets`
  ADD CONSTRAINT `fk_resultados_tweets_tweets1` FOREIGN KEY (`tweets_idTweets`) REFERENCES `tweets` (`idTweets`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `resultado_kpi_calculo`
--
ALTER TABLE `resultado_kpi_calculo`
  ADD CONSTRAINT `fk_dato_kpi_calculo_cuenta1` FOREIGN KEY (`cuenta_idCuenta`) REFERENCES `cuenta` (`idCuenta`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_resultado_kpi_calculo_guarda_datos_general1` FOREIGN KEY (`guarda_datos_general_idGuardaDatosGeneral`) REFERENCES `guarda_datos_general` (`idGuardaDatosGeneral`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tweets`
--
ALTER TABLE `tweets`
  ADD CONSTRAINT `fk_tweets_diccionario_palabras1` FOREIGN KEY (`diccionario_palabras_iddiccionario_palabras`) REFERENCES `diccionario_palabras` (`iddiccionario_palabras`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usr_cliente`
--
ALTER TABLE `usr_cliente`
  ADD CONSTRAINT `fk_usr_cliente_user_perfil1` FOREIGN KEY (`user_perfil_idPerfil`) REFERENCES `usr_perfil` (`idPerfil`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usr_perfilpermiso`
--
ALTER TABLE `usr_perfilpermiso`
  ADD CONSTRAINT `fk_user_perfilPermiso_user_perfil1` FOREIGN KEY (`user_perfil_idPerfil`) REFERENCES `usr_perfil` (`idPerfil`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_user_perfilPermiso_user_permiso1` FOREIGN KEY (`user_permiso_idPermiso`) REFERENCES `usr_permiso` (`idPermiso`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usr_usuario`
--
ALTER TABLE `usr_usuario`
  ADD CONSTRAINT `fk_user_usuario_user_perfil` FOREIGN KEY (`user_perfil_idPerfil`) REFERENCES `usr_perfil` (`idPerfil`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
