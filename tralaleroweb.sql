-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2025 a las 06:27:11
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
-- Base de datos: `tralaleroweb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lista_usuario`
--

CREATE TABLE `lista_usuario` (
  `idProducto` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `idProducto` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `descripción` text DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `valoracion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`idProducto`, `nombre`, `categoria`, `link`, `descripción`, `imagen`, `valoracion`) VALUES
(1, 'Laptop HP Pavilion 15', 'Tecnología', 'https://cl-media.hptiendaenlinea.com/catalog/product/9/1/91S39LA-1_T1737051642.png', 'Laptop de 15.6\" con procesador Intel i5, ideal para uso diario y entretenimiento.', 'https://cl-media.hptiendaenlinea.com/catalog/product/9/1/91S39LA-1_T1737051642.png', 4),
(2, 'Monitor Samsung Curvo 27\"', 'Tecnología', 'https://www.spdigital.cl/producto/234567/monitor-samsung-curvo-27', 'Monitor curvo con resolución Full HD, perfecto para gaming y trabajo.', 'https://image-us.samsung.com/SamsungUS/samsungbusiness/computing/monitors/curved/390-series-27-curved-taa-compliant-lc27f390fhnxgo/LC27F390FHNXGO_L-Perspective_Black_1600x1200.jpg?$product-details-jpg$', 4),
(3, 'Consola Nintendo Switch OLED', 'Videojuegos', 'https://www.weplay.cl/producto/345678/consola-nintendo-switch-oled', 'Consola híbrida con pantalla OLED de 7\", incluye Joy-Con y base para TV.', 'https://bestmart.cl/cdn/shop/files/02_ebc83bb6-e6ee-4eb1-90d7-84accfba1912_2000x.jpg?v=1740155742', 5),
(4, 'Smartphone Samsung Galaxy A54', 'Tecnología', 'https://www.falabella.com/falabella-cl/product/456789/smartphone-samsung-galaxy-a54', 'Smartphone con cámara de 50MP y pantalla Super AMOLED de 6.4\".', 'https://tiendaempresas.entel.cl/media/catalog/product/cache/e83b319fe15d087a014efa16f11c0f36/s/m/sm-a546ezkaltl_1.jpg', 4),
(5, 'Zapatillas Adidas Ultraboost 22', 'Calzado Deportivo', 'https://www.ripley.cl/producto/567890/zapatillas-adidas-ultraboost-22', 'Zapatillas con tecnología Boost para máxima comodidad al correr.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiwI9RFKqnI2MVcoiQx1a15Jvts881EHMoIA&s', 5),
(6, 'Chaqueta de Invierno Columbia', 'Vestuario', 'https://www.paris.cl/producto/678901/chaqueta-de-invierno-columbia', 'Chaqueta impermeable y aislante, ideal para climas fríos.', 'https://columbiacl.vtexassets.com/arquivos/ids/413099-800-auto?v=638762499974630000&width=800&height=auto&aspect=true', 4),
(7, 'Freidora de Aire Philips Airfryer XXL', 'Electrohogar', 'https://www.lapolar.cl/producto/789012/freidora-de-aire-philips-airfryer-xxl', 'Freidora sin aceite con capacidad para 1.4 kg, cocina saludable y rápida.', 'https://www.kitchencenter.cl/cdn/shop/files/airfryer-philips-na12000-4_2-lts-con-tecnologia-rapid-air-philips.jpg?v=1721938459', 5),
(8, 'Auriculares Sony WH-1000XM4', 'Tecnología', 'https://www.linio.cl/producto/890123/auriculares-sony-wh-1000xm4', 'Auriculares con cancelación de ruido y batería de hasta 30 horas.', 'https://clsonyb2c.vtexassets.com/arquivos/ids/464823/01_Product_WH-1000XM4-B.jpg?v=638632954490330000', 5),
(9, 'Smartphone Xiaomi Redmi Note 10', 'Tecnología', 'https://cl-dam-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/3840x0/filters:quality(75)/paris/132366999/variant/images/486a3e16-7290-4ac5-9b17-064e9554314b/132366999-0000-001.jpg', 'Smartphone con cámara de 48MP y pantalla AMOLED de 6.43\".', 'https://digitek.cl/cdn/shop/products/r10azul2.png?v=1650916958&width=1214', 4),
(10, 'Zapatillas Nike Air Max 270', 'Calzado Deportivo', 'https://www.falabella.com/falabella-cl/product/12345679/zapatillas-nike-air-max-270', 'Zapatillas con amortiguación Air Max y diseño moderno.', 'https://mawi.cl/cdn/shop/products/zapatilla-nike-air-max-270-mawi-1-23056122151047.jpg?v=1702243969', 5),
(11, 'Freidora de Aire Cosori 5.5L', 'Electrohogar', 'https://cosori.es/cdn/shop/products/B07N8N6C85_360_0002_web.png?v=1663236051', 'Freidora sin aceite con capacidad para 5.5 litros y 11 programas preestablecidos.', 'https://cosori.es/cdn/shop/products/B07N8N6C85_360_0002_web.png?v=1663236051', 5),
(12, 'Aspiradora Robot Xiaomi Mi Robot Vacuum', 'Electrohogar', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVDTMIWd7Ma7Kj9StTd-0N03yXfzB-EXJa0A&s', 'Aspiradora robot con mapeo inteligente y control desde app.', 'https://vantek.vtexassets.com/arquivos/ids/168753/Aspiradora-Xiaomi-Robot-Vacuum-E10.jpg?v=638348721060370000', 5),
(13, 'Cafetera Nespresso Vertuo Next', 'Electrohogar', 'https://www.paris.cl/cafetera-nespresso-vertuo-next-123458', 'Cafetera automática con tecnología de cápsulas Vertuo.', 'https://www.kitchencenter.cl/cdn/shop/files/15596784_3_0370cb4b-3c9f-44b2-8f8c-8e54cf0d2fe6.jpg?v=1743080849&width=1946', 4),
(14, 'Plancha de Ropa Philips Azur Elite', 'Electrohogar', 'https://www.paris.cl/plancha-de-ropa-philips-azur-elite-123459', 'Plancha con tecnología OptimalTEMP y vapor continuo.', 'https://images.philips.com/is/image/philipsconsumer/vrs_62123dfbab7545fcf194a5a9309581b00727bf58?wid=700&hei=700&$pnglarge$', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productostienda`
--

CREATE TABLE `productostienda` (
  `idProducto` int(11) NOT NULL,
  `idTienda` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `oferta` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productostienda`
--

INSERT INTO `productostienda` (`idProducto`, `idTienda`, `fecha`, `precio`, `oferta`) VALUES
(1, 1, '2024-05-01', 54990.00, 0),
(1, 1, '2024-06-01', 52990.00, 1),
(1, 1, '2024-07-01', 53990.00, 0),
(1, 2, '2024-05-01', 55990.00, 0),
(1, 2, '2024-06-01', 53990.00, 1),
(1, 2, '2024-07-01', 54990.00, 0),
(1, 3, '2024-05-01', 56990.00, 0),
(1, 3, '2024-06-01', 54990.00, 1),
(1, 3, '2024-07-01', 55990.00, 0),
(2, 1, '2024-05-01', 22990.00, 0),
(2, 1, '2024-06-01', 21990.00, 1),
(2, 1, '2024-07-01', 22490.00, 0),
(2, 2, '2024-05-01', 23990.00, 0),
(2, 2, '2024-06-01', 22990.00, 1),
(2, 2, '2024-07-01', 23490.00, 0),
(2, 3, '2024-05-01', 24990.00, 0),
(2, 3, '2024-06-01', 23990.00, 1),
(2, 3, '2024-07-01', 24490.00, 0),
(3, 2, '2024-05-01', 32990.00, 0),
(3, 2, '2024-06-01', 31990.00, 1),
(3, 2, '2024-07-01', 32490.00, 0),
(3, 3, '2024-05-01', 33990.00, 0),
(3, 3, '2024-06-01', 32990.00, 1),
(3, 3, '2024-07-01', 33490.00, 0),
(3, 4, '2024-05-01', 34990.00, 0),
(3, 4, '2024-06-01', 33990.00, 1),
(3, 4, '2024-07-01', 34490.00, 0),
(4, 3, '2024-05-01', 199990.00, 0),
(4, 3, '2024-06-01', 189990.00, 1),
(4, 3, '2024-07-01', 194990.00, 0),
(4, 4, '2024-05-01', 209990.00, 0),
(4, 4, '2024-06-01', 199990.00, 1),
(4, 4, '2024-07-01', 204990.00, 0),
(4, 5, '2024-05-01', 219990.00, 0),
(4, 5, '2024-06-01', 209990.00, 1),
(4, 5, '2024-07-01', 214990.00, 0),
(5, 4, '2024-05-01', 89990.00, 0),
(5, 4, '2024-06-01', 84990.00, 1),
(5, 4, '2024-07-01', 87990.00, 0),
(5, 5, '2024-05-01', 91990.00, 0),
(5, 5, '2024-06-01', 86990.00, 1),
(5, 5, '2024-07-01', 89990.00, 0),
(5, 6, '2024-05-01', 93990.00, 0),
(5, 6, '2024-06-01', 88990.00, 1),
(5, 6, '2024-07-01', 91990.00, 0),
(6, 5, '2024-05-01', 129990.00, 0),
(6, 5, '2024-06-01', 124990.00, 1),
(6, 5, '2024-07-01', 127990.00, 0),
(6, 6, '2024-05-01', 132990.00, 0),
(6, 6, '2024-06-01', 127990.00, 1),
(6, 6, '2024-07-01', 130990.00, 0),
(6, 7, '2024-05-01', 135990.00, 0),
(6, 7, '2024-06-01', 130990.00, 1),
(6, 7, '2024-07-01', 133990.00, 0),
(7, 6, '2024-05-01', 79990.00, 0),
(7, 6, '2024-06-01', 74990.00, 1),
(7, 6, '2024-07-01', 77990.00, 0),
(7, 7, '2024-05-01', 81990.00, 0),
(7, 7, '2024-06-01', 76990.00, 1),
(7, 7, '2024-07-01', 79990.00, 0),
(7, 8, '2024-05-01', 83990.00, 0),
(7, 8, '2024-06-01', 78990.00, 1),
(7, 8, '2024-07-01', 81990.00, 0),
(8, 7, '2024-05-01', 129990.00, 0),
(8, 7, '2024-06-01', 124990.00, 1),
(8, 7, '2024-07-01', 127990.00, 0),
(8, 8, '2024-05-01', 131990.00, 0),
(8, 8, '2024-06-01', 126990.00, 1),
(8, 8, '2024-07-01', 129990.00, 0),
(8, 9, '2024-05-01', 133990.00, 0),
(8, 9, '2024-06-01', 128990.00, 1),
(8, 9, '2024-07-01', 131990.00, 0),
(9, 8, '2024-05-01', 19990.00, 0),
(9, 8, '2024-06-01', 18990.00, 1),
(9, 8, '2024-07-01', 19490.00, 0),
(9, 9, '2024-05-01', 20990.00, 0),
(9, 9, '2024-06-01', 19990.00, 1),
(9, 9, '2024-07-01', 20490.00, 0),
(9, 10, '2024-05-01', 21990.00, 0),
(9, 10, '2024-06-01', 20990.00, 1),
(9, 10, '2024-07-01', 21490.00, 0),
(10, 2, '2024-05-29', 84990.00, 0),
(10, 2, '2024-06-10', 79990.00, 1),
(10, 2, '2024-06-20', 82990.00, 0),
(10, 2, '2024-07-01', 81990.00, 0),
(10, 7, '2024-04-15', 85990.00, 0),
(10, 7, '2024-04-25', 80990.00, 1),
(10, 7, '2024-05-05', 83990.00, 0),
(10, 8, '2024-04-20', 86990.00, 0),
(10, 8, '2024-04-30', 78990.00, 1),
(10, 8, '2024-05-10', 81990.00, 0),
(10, 9, '2024-04-25', 87990.00, 0),
(10, 9, '2024-05-05', 82990.00, 1),
(10, 9, '2024-05-15', 84990.00, 0),
(11, 1, '2024-04-10', 124990.00, 0),
(11, 1, '2024-04-20', 114990.00, 1),
(11, 1, '2024-04-30', 119990.00, 0),
(11, 3, '2024-05-29', 119990.00, 0),
(11, 3, '2024-06-10', 109990.00, 1),
(11, 3, '2024-06-20', 114990.00, 0),
(11, 3, '2024-07-01', 104990.00, 0),
(11, 4, '2024-04-15', 129990.00, 0),
(11, 4, '2024-04-25', 104990.00, 1),
(11, 4, '2024-05-05', 109990.00, 0),
(11, 5, '2024-04-20', 134990.00, 0),
(11, 5, '2024-04-30', 119990.00, 1),
(11, 5, '2024-05-10', 124990.00, 0),
(12, 1, '2024-04-05', 209990.00, 0),
(12, 1, '2024-04-15', 184990.00, 1),
(12, 1, '2024-04-25', 194990.00, 0),
(12, 2, '2024-04-10', 219990.00, 0),
(12, 2, '2024-04-20', 179990.00, 1),
(12, 2, '2024-04-30', 189990.00, 0),
(12, 4, '2024-05-29', 199990.00, 0),
(12, 4, '2024-06-10', 189990.00, 1),
(12, 4, '2024-06-20', 195990.00, 0),
(12, 4, '2024-07-01', 185990.00, 0),
(12, 6, '2024-04-15', 229990.00, 0),
(12, 6, '2024-04-25', 199990.00, 1),
(12, 6, '2024-05-05', 209990.00, 0),
(13, 2, '2024-04-08', 92990.00, 0),
(13, 2, '2024-04-18', 82990.00, 1),
(13, 2, '2024-04-28', 86990.00, 0),
(13, 3, '2024-04-13', 94990.00, 0),
(13, 3, '2024-04-23', 80990.00, 1),
(13, 3, '2024-05-03', 84990.00, 0),
(13, 5, '2024-05-29', 89990.00, 0),
(13, 5, '2024-06-10', 84990.00, 1),
(13, 5, '2024-06-20', 87990.00, 0),
(13, 5, '2024-07-01', 86990.00, 0),
(13, 7, '2024-04-18', 96990.00, 0),
(13, 7, '2024-04-28', 85990.00, 1),
(13, 7, '2024-05-08', 89990.00, 0),
(14, 3, '2024-04-12', 51990.00, 0),
(14, 3, '2024-04-22', 44990.00, 1),
(14, 3, '2024-05-02', 47990.00, 0),
(14, 4, '2024-04-17', 52990.00, 0),
(14, 4, '2024-04-27', 43990.00, 1),
(14, 4, '2024-05-07', 46990.00, 0),
(14, 6, '2024-05-29', 49990.00, 0),
(14, 6, '2024-06-10', 45990.00, 1),
(14, 6, '2024-06-20', 48990.00, 0),
(14, 6, '2024-07-01', 47990.00, 0),
(14, 7, '2024-04-22', 53990.00, 0),
(14, 7, '2024-05-02', 42990.00, 1),
(14, 7, '2024-05-12', 45990.00, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reseñaproducto`
--

CREATE TABLE `reseñaproducto` (
  `idReseña` int(11) NOT NULL,
  `idProducto` int(11) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `reseña` text DEFAULT NULL,
  `valoración` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reseñaproducto`
--

INSERT INTO `reseñaproducto` (`idReseña`, `idProducto`, `idUsuario`, `reseña`, `valoración`) VALUES
(1, 1, 1, 'Laptop HP Pavilion 15: rendimiento excelente y buena batería.', 5),
(2, 4, 2, 'Smartphone Samsung Galaxy A54: llegó tarde pero funciona bien.', 4),
(3, 5, 3, 'Zapatillas Adidas Ultraboost 22: calidad inferior a lo esperado.', 2),
(4, 7, 4, 'Freidora de Aire Philips Airfryer XXL: producto y servicio excelentes.', 5),
(5, 10, 5, 'Zapatillas Nike Air Max 270: no cumplió con mis expectativas.', 2),
(6, 12, 6, 'Aspiradora Robot Xiaomi Mi Robot Vacuum: entrega rápida y producto perfecto.', 5),
(7, 8, 7, 'Auriculares Sony WH-1000XM4: buen producto pero el empaque estaba dañado.', 4),
(8, 3, 8, 'Consola Nintendo Switch OLED: muy satisfecho con la compra y el servicio.', 5),
(9, 2, 9, 'Monitor Samsung Curvo 27\": buen precio pero calidad regular.', 3),
(10, 6, 10, 'Chaqueta de Invierno Columbia: me encantó, muy recomendada.', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reseñatienda`
--

CREATE TABLE `reseñatienda` (
  `idReseña` int(11) NOT NULL,
  `idTienda` int(11) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `reseña` text DEFAULT NULL,
  `valoración` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reseñatienda`
--

INSERT INTO `reseñatienda` (`idReseña`, `idTienda`, `idUsuario`, `reseña`, `valoración`) VALUES
(1, 1, 1, 'Buena atención y entrega rápida.', 4.5),
(2, 4, 4, 'Envío tardó más de lo esperado.', 3),
(3, 5, 5, 'Me encantó la experiencia de compra.', 5),
(4, 7, 9, 'Demasiado lento en despachar.', 2.5),
(5, 6, 7, 'Atención al cliente deficiente.', 2.8),
(6, 5, 6, 'Buen sitio pero el empaque llegó dañado.', 3.9),
(7, 8, 10, 'Muy buena tienda, productos originales.', 4.9),
(8, 3, 3, 'Excelente variedad de productos y buen servicio.', 4.7),
(9, 2, 2, 'La página es confusa pero cumplen con los plazos.', 3.8),
(10, 6, 8, 'Rápido y confiable, repetiré la compra.', 4.6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tienda`
--

CREATE TABLE `tienda` (
  `idTienda` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `valoracion` float DEFAULT NULL,
  `linkPagina` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tienda`
--

INSERT INTO `tienda` (`idTienda`, `nombre`, `imagen`, `valoracion`, `linkPagina`) VALUES
(1, 'PC Factory', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTurgi4UV_LbXhQHael5McPQCUdfoBE_3TqoA&s', 4.6, 'https://www.pcfactory.cl/'),
(2, 'SPDigital', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwbfvL_1B_YKBva0VOQNeyiXvbbww4k3BRw&s', 4.5, 'https://www.spdigital.cl/'),
(3, 'WePlay', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZ0p61baXqYEwNIqCZ2d3F9jRswhLCNUsYw&s', 4.3, 'https://www.weplay.cl/'),
(4, 'Falabella', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-PcOn6a0z-lFysLxEBrYuEKtO8VuOe24ng&s', 4.5, 'https://www.falabella.com/'),
(5, 'Ripley', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGwNrM_oNCWGMUIsrKISSlSGUVpFMtOoLAQ&s', 4.4, 'https://www.ripley.cl/'),
(6, 'Paris', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNE_0n3DA0QPd3oxqQPg1_Z252t1T86V61Ew&s', 4.3, 'https://www.paris.cl/'),
(7, 'La Polar', 'https://upload.wikimedia.org/wikipedia/commons/4/4e/La_Polar_2021.svg', 4, 'https://www.lapolar.cl/'),
(8, 'Linio Chile', 'https://images.falabella.com/v3/assets/blt7c5c2f2f888a7cc3/blt953944608a731c85/Linio@256px.png', 4.1, 'https://www.linio.cl/'),
(9, 'Mercado Libre Chile', 'https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2', 4.7, 'https://www.mercadolibre.cl/'),
(10, 'Easy', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Easy-Logo.svg/1200px-Easy-Logo.svg.png', 4.2, 'https://www.easy.cl/'),
(11, 'Todoclic', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FNTHwSvN6mobmFjw0DWSLN1AUBUy2aqwRQ&s', 4.2, 'https://www.todoclic.cl/'),
(12, 'ReifStore', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSNSyOQEEe8Cr3fhu-D2inKxR8yLrFr0hQQ&s', 4.5, 'https://www.reifstore.cl/');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `contraseña` varchar(100) DEFAULT NULL,
  `Comuna` varchar(100) DEFAULT NULL,
  `Region` varchar(100) DEFAULT NULL,
  `rut` varchar(20) DEFAULT NULL,
  `esAdmin` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nombre`, `correo`, `contraseña`, `Comuna`, `Region`, `rut`, `esAdmin`) VALUES
(1, 'Camila Rojas', 'camiRoj@gmail.com', '$2b$10$BK2th077zWvny/hxluhyIewD4ECp/UJkbgQzinH/wUGQhHFDGmxKW', 'Santiago', 'Metropolitana de Santiago', '12.345.678-5', 1),
(2, 'Matías Pérez', 'matiasPerez@hotmail.com', '$2b$10$t1hdrhLU6.ykHSGw3yR1MORdkUybm0XJKPJgealpPLzoK7o.xmxjS', 'Maipú', 'Metropolitana de Santiago', '23.456.789-2', 1),
(3, 'Fernanda González', 'fenaGonzalez@yahoo.com', '$2b$10$f85alCoL8RdLgzv4wbZgAOZJ53r2ZqYR9AQ1e.ull95.G/tJGyEFS', 'Puente Alto', 'Metropolitana de Santiago', '9.876.543-1', 1),
(4, 'Cristóbal Muñoz', 'cristobalM@gmail.com', '$2b$10$r7wJ/OhIEzpWr8V1cg/m2eHSmM4Faw/gsy5VpmFQjhJvPJMV7RsYW', 'La Florida', 'Metropolitana de Santiago', '11.223.344-6', 1),
(5, 'Valentina Castillo', 'valeCastillo@hotmail.com', '$2b$10$WfpHnz3GfpmhWZSM2WdqBOSMkqucv3mCdTjiD6GZzEp2OwLhS4hdu', 'Viña del Mar', 'Valparaíso', '7.654.321-9', 1),
(6, 'Benjamín Herrera', 'benjaHerrera@yahoo.com', '$2b$10$PBBDiKExNcO0ySrdAe5e3Orv8vviP9DL4Z7k4OE7W8EUEHLkbdJ/O', 'Concepción', 'Biobío', '5.432.198-4', 1),
(7, 'Javiera Soto', 'javieraS@gmail.com', '$2b$10$PK/INUae/AUPmYKuYngRoOnhPYETPnzUOAjfjaq997KMpbyBZ4KPO', 'Temuco', 'Araucanía', '19.284.736-2', 0),
(8, 'Tomás Morales', 'tMorales@hotmail.com', '$2b$10$hWSMfATOWznoDcRs0sYE7OWG18R5j6UGnz9B1/I6xQ/Lsm02Rl5Dy', 'Antofagasta', 'Antofagasta', '16.789.345-1', 0),
(9, 'Catalina Fuentes', 'cataFuentes@yahoo.com', '$2b$10$c/2a/rT0umaSRDjKuggfN.sly9FhLC.X2DMTKyGZcJiH9e8YEvyxu', 'Rancagua', 'Libertador Gral. Bernardo O’Higgins', '18.345.298-3', 0),
(10, 'Ignacio Torres', 'ignacioT@gmail.com', '$2b$10$2fIA3oV4NJPu6V4i7LN03uaLvu/LK3gpnLUri4Bp5PeerpKmV5m6q', 'Talca', 'Maule', '13.287.654-0', 1),
(11, 'Javier González', 'jGonzalez@gmail.com', '$2b$10$jcsMPpIgCpBZChPRUiO0YexVGEyHEgL0WyXmblJRiBqM3CNXUit0S', 'La Serena', 'Coquimbo', '20.333.912-8', 1),
(12, 'Tomás Larraín', 'tomas.larrain@hotmail.com', '$2b$10$VuQeLJ.g/ue6PgyAWEH4xuAMlX/DMPLMIeqePlJ1E/l4Djz1tw3pq', 'Ñuñoa', 'Metropolitana de Santiago', '11.123.456-7', 0),
(13, 'Valentina Pérez', 'valentina.perez@gmail.com', '$2b$10$PRP8/D5OpmurEldAEVEGAORpUDMJVJJZkFrUv66jJxxN2HrArfQLu', 'Providencia', 'Metropolitana de Santiago', '22.234.567-8', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `lista_usuario`
--
ALTER TABLE `lista_usuario`
  ADD PRIMARY KEY (`idProducto`,`idUsuario`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`idProducto`);

--
-- Indices de la tabla `productostienda`
--
ALTER TABLE `productostienda`
  ADD PRIMARY KEY (`idProducto`,`idTienda`,`fecha`),
  ADD KEY `idTienda` (`idTienda`);

--
-- Indices de la tabla `reseñaproducto`
--
ALTER TABLE `reseñaproducto`
  ADD PRIMARY KEY (`idReseña`),
  ADD KEY `idProducto` (`idProducto`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `reseñatienda`
--
ALTER TABLE `reseñatienda`
  ADD PRIMARY KEY (`idReseña`),
  ADD KEY `idTienda` (`idTienda`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `tienda`
--
ALTER TABLE `tienda`
  ADD PRIMARY KEY (`idTienda`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `unique_correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `reseñaproducto`
--
ALTER TABLE `reseñaproducto`
  MODIFY `idReseña` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `tienda`
--
ALTER TABLE `tienda`
  MODIFY `idTienda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `lista_usuario`
--
ALTER TABLE `lista_usuario`
  ADD CONSTRAINT `lista_usuario_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`),
  ADD CONSTRAINT `lista_usuario_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`);

--
-- Filtros para la tabla `productostienda`
--
ALTER TABLE `productostienda`
  ADD CONSTRAINT `productostienda_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`),
  ADD CONSTRAINT `productostienda_ibfk_2` FOREIGN KEY (`idTienda`) REFERENCES `tienda` (`idTienda`);

--
-- Filtros para la tabla `reseñaproducto`
--
ALTER TABLE `reseñaproducto`
  ADD CONSTRAINT `reseñaproducto_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`),
  ADD CONSTRAINT `reseñaproducto_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`);

--
-- Filtros para la tabla `reseñatienda`
--
ALTER TABLE `reseñatienda`
  ADD CONSTRAINT `reseñatienda_ibfk_1` FOREIGN KEY (`idTienda`) REFERENCES `tienda` (`idTienda`),
  ADD CONSTRAINT `reseñatienda_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
