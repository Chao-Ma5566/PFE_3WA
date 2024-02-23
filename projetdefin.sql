-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : db.3wa.io
-- Généré le : jeu. 01 fév. 2024 à 07:26
-- Version du serveur :  5.7.33-0ubuntu0.18.04.1-log
-- Version de PHP : 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `jianchaoma_projetdefin`
--

-- --------------------------------------------------------

--
-- Structure de la table `adresses`
--

CREATE TABLE `adresses` (
  `id` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `road` varchar(255) NOT NULL,
  `postal_code` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `title`, `content`) VALUES
(11, '\"Neque porro quisquamt, consectetur, adipisci velit...\"', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n\nWhere does it come from?\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.'),
(20, 'The standard chunk of Lorem Ipsum used since the 1500s', 'What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n\nWhere does it come from?\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.'),
(21, 'Lorem Ipsum is therefore always free from repetition', 'Where can I get some?\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'),
(23, 'It is a long established fact that a reader will be distracted ', 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'),
(27, 'Where does it come from?', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'),
(29, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa lacus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa lacus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa lacus, feugiat eu lorem non, laoreet interdum nulla. Nulla augue libero, tristique ac justo in, blandit tristique lectus. Pellentesque non dignissim tortor. Curabitur nec magna vel magna ornare mollis. Duis eleifend purus a nisl varius aliquet. Nulla rutrum tempus sem non pulvinar. Proin in hendrerit nibh. Morbi dictum elit neque, id elementum tellus sollicitudin ac. Nullam eu nisl quis ligula pellentesque auctor. Duis pellentesque congue dui id ullamcorper. Proin est leo, pellentesque ut risus quis, rutrum vulputate urna. Proin nec tellus nulla. Aliquam et ex consequat, dictum lacus nec, congue lacus. Nulla non ex vel sem varius gravida ut sed est. Curabitur a erat tempus orci iaculis cursus et ac dolor. Nunc nec tortor leo.\r\n\r\nSuspendisse luctus, tellus nec sodales viverra, arcu odio scelerisque nisl, a aliquet ex arcu quis sapien. Proin ornare eget augue et lacinia. Curabitur dapibus tempus purus, ut pulvinar lorem tincidunt sed. In nec efficitur sem. Donec imperdiet dictum nibh ac iaculis. Ut sagittis dictum iaculis. Nam eu sem id felis hendrerit pretium ac sit amet dolor. Donec pretium et turpis vitae viverra. Duis posuere molestie orci, ac dapibus nibh vestibulum eu. Nunc elementum lacus eget felis laoreet consequat. Nulla non lorem sed erat placerat hendrerit in vitae dolor. Etiam non dapibus elit. Morbi sit amet diam ultricies metus convallis scelerisque vitae ut dolor. Etiam tincidunt velit vitae molestie lobortis. Cras sed ligula vel felis feugiat posuere et sit amet nisi. Integer in consequat ipsum, nec commodo nisl.\r\n\r\nCurabitur non tellus in mauris sagittis elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus nec ornare massa. Maecenas ut convallis erat. Proin egestas felis nisi. Vivamus enim dui, porttitor ac tellus vel, sagittis venenatis quam. Pellentesque auctor eros at ante pretium, id bibendum eros pulvinar.\r\n\r\nIn aliquam eros felis, vitae molestie mi feugiat sit amet. Vestibulum et erat ligula. Maecenas mollis vestibulum eros eget interdum. Nullam id maximus tellus. Phasellus ut interdum metu'),
(30, 'arcu odio scelerisque nisl, a aliquet ex arcu quis sapien. Proin ornare eget augue et lacinia. ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa lacus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa lacus, feugiat eu lorem non, laoreet interdum nulla. Nulla augue libero, tristique ac justo in, blandit tristique lectus. Pellentesque non dignissim tortor. Curabitur nec magna vel magna ornare mollis. Duis eleifend purus a nisl varius aliquet. Nulla rutrum tempus sem non pulvinar. Proin in hendrerit nibh. Morbi dictum elit neque, id elementum tellus sollicitudin ac. Nullam eu nisl quis ligula pellentesque auctor. Duis pellentesque congue dui id ullamcorper. Proin est leo, pellentesque ut risus quis, rutrum vulputate urna. Proin nec tellus nulla. Aliquam et ex consequat, dictum lacus nec, congue lacus. Nulla non ex vel sem varius gravida ut sed est. Curabitur a erat tempus orci iaculis cursus et ac dolor. Nunc nec tortor leo.\r\n\r\nSuspendisse luctus, tellus nec sodales viverra, arcu odio scelerisque nisl, a aliquet ex arcu quis sapien. Proin ornare eget augue et lacinia. Curabitur dapibus tempus purus, ut pulvinar lorem tincidunt sed. In nec efficitur sem. Donec imperdiet dictum nibh ac iaculis. Ut sagittis dictum iaculis. Nam eu sem id felis hendrerit pretium ac sit amet dolor. Donec pretium et turpis vitae viverra. Duis posuere molestie orci, ac dapibus nibh vestibulum eu. Nunc elementum lacus eget felis laoreet consequat. Nulla non lorem sed erat placerat hendrerit in vitae dolor. Etiam non dapibus elit. Morbi sit amet diam ultricies metus convallis scelerisque vitae ut dolor. Etiam tincidunt velit vitae molestie lobortis. Cras sed ligula vel felis feugiat posuere et sit amet nisi. Integer in consequat ipsum, nec commodo nisl.\r\n\r\nCurabitur non tellus in mauris sagittis elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus nec ornare massa. Maecenas ut convallis erat. Proin egestas felis nisi. Vivamus enim dui, porttitor ac tellus vel, sagittis venenatis quam. Pellentesque auctor eros at ante pretium, id bibendum eros pulvinar.\r\n\r\nIn aliquam eros felis, vitae molestie mi feugiat sit amet. Vestibulum et erat ligula. Maecenas mollis vestibulum eros eget interdum. Nullam id maximus tellus. Phasellus ut interdum metu'),
(31, 'Phasellus semper ligula orci. Ut finibus gravida pretium. ', 'Suspendisse luctus, tellus nec sodales viverra, arcu odio scelerisque nisl, a aliquet ex arcu quis sapien. Proin ornare eget augue et lacinia. Curabitur dapibus tempus purus, ut pulvinar lorem tincidunt sed. In nec efficitur sem. Donec imperdiet dictum nibh ac iaculis. Ut sagittis dictum iaculis. Nam eu sem id felis hendrerit pretium ac sit amet dolor. Donec pretium et turpis vitae viverra. Duis posuere molestie orci, ac dapibus nibh vestibulum eu. Nunc elementum lacus eget felis laoreet consequat. Nulla non lorem sed erat placerat hendrerit in vitae dolor. Etiam non dapibus elit. Morbi sit amet diam ultricies metus convallis scelerisque vitae ut dolor. Etiam tincidunt velit vitae molestie lobortis. Cras sed ligula vel felis feugiat posuere et sit amet nisi. Integer in consequat ipsum, nec commodo nisl.\r\n\r\nCurabitur non tellus in mauris sagittis elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus nec ornare massa. Maecenas ut convallis erat. Proin egestas felis nisi. Vivamus enim dui, porttitor ac tellus vel, sagittis venenatis quam. Pellentesque auctor eros at ante pretium, id bibendum eros pulvinar.\r\n\r\nIn aliquam eros felis, vitae molestie mi feugiat sit amet. Vestibulum et erat ligula. Maecenas mollis vestibulum eros eget interdum. Nullam id maximus tellus. Phasellus ut interdum metus. Vivamus ipsum nunc, mollis quis dui ac, luctus vulputate odio. Etiam malesuada egestas feugiat. Vivamus vel magna quis orci euismod tincidunt vel ac risus. Quisque eget placerat augue. Donec erat eros, luctus nec magna in, fringilla rhoncus risus. Proin ac felis pellentesque, imperdiet sem suscipit, vulputate augue. Sed magna quam, condimentum at mi quis, blandit convallis mi. Integer tincidunt id enim a condimentum. In posuere faucibus pellentesque. Vestibulum sed lacus tristique augue vulputate bibendum non ut orci. Integer ut dolor id justo congue efficitur eget id quam.\r\n\r\nUt id urna ac diam tempus ndrerit at vitae ligula. Proin justo neque, tinciante egestas, porttitor lobortis est. In eget tellus eros. Maecenas sed vulputate libero. Aliquam erat volutpat. Phasellus semper ligula orci. Ut finibus gravida pretium. Aenean eleifend ipsum sem, ac elementum ipsum sagittis quis. Curabitur leo dui, pulvinar a erat eget, pulvinar fringilla lectus. Sed ornare leo risus, eget laoreet neque aliquam non. Nulla et nisi ullamcorper, viverra est dictum, auctor nisl. Cras turpis arcu, ullamcorper et facilisis in, porttitor sit amet risus. Aliquam tempus turpis a massa ornare rutrum. In hac habitasse platea dictumst. Integer gravida condimentum egestas.'),
(32, 'Donec erat eros, luctus nec magna in, fringilla rhoncus risus.', 'Suspendisse luctus, tellus nec sodales viverra, arcu odio scelerisque nisl, a aliquet ex arcu quis sapien. Proin ornare eget augue et lacinia. Curabitur dapibus tempus purus, ut pulvinar lorem tincidunt sed. In nec efficitur sem. Donec imperdiet dictum nibh ac iaculis. Ut sagittis dictum iaculis. Nam eu sem id felis hendrerit pretium ac sit amet dolor. Donec pretium et turpis vitae viverra. Duis posuere molestie orci, ac dapibus nibh vestibulum eu. Nunc elementum lacus eget felis laoreet consequat. Nulla non lorem sed erat placerat hendrerit in vitae dolor. Etiam non dapibus elit. Morbi sit amet diam ultricies metus convallis scelerisque vitae ut dolor. Etiam tincidunt velit vitae molestie lobortis. Cras sed ligula vel felis feugiat posuere et sit amet nisi. Integer in consequat ipsum, nec commodo nisl.\r\n\r\nCurabitur non tellus in mauris sagittis elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus nec ornare massa. Maecenas ut convallis erat. Proin egestas felis nisi. Vivamus enim dui, porttitor ac tellus vel, sagittis venenatis quam. Pellentesque auctor eros at ante pretium, id bibendum eros pulvinar.\r\n\r\nIn aliquam eros felis, vitae molestie mi feugiat sit amet. Vestibulum et erat ligula. Maecenas mollis vestibulum eros eget interdum. Nullam id maximus tellus. Phasellus ut interdum metus. Vivamus ipsum nunc, mollis quis dui ac, luctus vulputate odio. Etiam malesuada egestas feugiat. Vivamus vel magna quis orci euismod tincidunt vel ac risus. Quisque eget placerat augue. Donec erat eros, luctus nec magna in, fringilla rhoncus risus. Proin ac felis pellentesque, imperdiet sem suscipit, vulputate augue. Sed magna quam, condimentum at mi quis, blandit convallis mi. Integer tincidunt id enim a condimentum. In posuere faucibus pellentesque. Vestibulum sed lacus tristique augue vulputate bibendum non ut orci. Integer ut dolor id justo congue efficitur eget id quam.\r\n\r\nUt id urna ac diam tempus hendrerit at vitae ligula. Proin justo neque, tincidunt vel ante egestas, porttitor lobortis est. In eget tellus eros. Maecenas sed vulputate libero. Aliquam erat volutpat. Phasellus semper ligula orci. Ut finibus gravida pretium. Aenean eleifend ipsum sem, ac elementum ipsum sagittis quis. Curabitur leo dui, pulvinar a erat eget, pulvinar fringilla lectus. Sed ornare leo risus, eget laoreet neque aliquam non. Nulla et nisi ullamcorper, viverra est dictum, auctor nisl. Cras turpis arcu, ullamcorper et facilisis in, porttitor sit amet risus. Aliquam tempus turpis a massa ornare rutrum. In hac habitasse platea dictumst. Integer gravida condimentum egestas.');

-- --------------------------------------------------------

--
-- Structure de la table `article_photos`
--

CREATE TABLE `article_photos` (
  `id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `caption` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `article_photos`
--

INSERT INTO `article_photos` (`id`, `article_id`, `url`, `caption`) VALUES
(4, 11, 'c76a772d8165ee93acdef1b02.png', 'salle de bainqsd'),
(13, 20, 'c76a772d8165ee93acdef1b00.jpg', 'sqfqsf'),
(14, 21, 'c76a772d8165ee93acdef1b01.png', 'Salut'),
(16, 23, 'c76a772d8165ee93acdef1b03.png', 'Salut'),
(20, 27, 'c76a772d8165ee93acdef1b04.png', '123ggggbbbd'),
(22, 29, 'c76a772d8165ee93acdef1b06.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa lacus'),
(23, 30, 'c76a772d8165ee93acdef1b07.png', 'arcu odio scelerisque nisl, a aliquet ex arcu quis sapien. Proin ornare eget augue et lacinia. '),
(24, 31, 'c76a772d8165ee93acdef1b08.png_minimalist_logo_of_a_red_radish_a_fork_knife_and_spo_2235c97c-b2a9-42b8-8a9f-d76c0127422c.png', 'Phasellus semper ligula orci. Ut finibus gravida pretium. '),
(25, 32, 'c76a772d8165ee93acdef1b09.png', 'Donec erat eros, luctus nec magna in, fringilla rhoncus risus.');

-- --------------------------------------------------------

--
-- Structure de la table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `cart`
--

INSERT INTO `cart` (`id`, `user_id`) VALUES
(6, 17),
(7, 29),
(8, 30),
(3, 35),
(5, 39),
(10, 40),
(11, 41),
(12, 42),
(14, 44);

-- --------------------------------------------------------

--
-- Structure de la table `collection`
--

CREATE TABLE `collection` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `collection`
--

INSERT INTO `collection` (`id`, `title`, `description`) VALUES
(1, 'Bubble', 'La collection \"Bubble\" est la fusion parfaite entre l\'art et le design moderne. Ces chaises transparentes sont non seulement élégantes et élancées, mais elles ont également été conçues avec soin pour répondre aux besoins de ceux qui cherchent des meubles confortables et tendance.\n\nLeur forme ronde donne l\'impression d\'être enveloppé dans une bulle de confort, tandis que leur transparence offre une esthétique moderne qui se marie parfaitement avec n\'importe quel décor. Chaque chaise est légère et facile à déplacer, vous permettant ainsi de changer la configuration de votre espace à tout moment.\n\nMais la collection \"Bubble\" ne se contente pas d\'être belle et pratique, elle est également très fonctionnelle. Leur design futuriste comprend des détails intelligents tels que des dossiers ergonomiques et des assises rembourrées pour vous offrir un confort maximal tout en ajoutant une touche d\'élégance à votre intérieur.\n\nCes chaises sont idéales pour ceux qui cherchent à ajouter une touche de modernité à leur maison ou leur espace de travail, sans sacrifier le confort. Elles sont également parfaites pour les événements spéciaux, car leur transparence et leur légèreté permettent de les déplacer facilement et de les intégrer dans tout type de décor.\n\nEn somme, la collection \"Bubble\" est l\'incarnation de la modernité, du confort et de la fonctionnalité. Elle est l\'option idéale pour ceux qui cherchent à créer un intérieur élégant et confortable sans sacrifier leur budget ou leur goût pour le design contemporain. Commandez dès maintenant votre chaise \"Bubble\" et découvrez comment cette collection peut transformer votre espace en un lieu moderne et pratique.'),
(2, 'Fluff', 'La collection \"Fluff\" est la collection parfaite pour ceux qui cherchent à ajouter une touche de confort et de douceur à leur intérieur. Ces fauteuils sont conçus pour vous offrir une expérience de détente ultime, grâce à leur design luxueux et leur rembourrage moelleux.\n\nLes fauteuils de la collection \"Fluff\" sont le choix parfait pour une soirée cinéma, une lecture ou simplement pour se détendre après une longue journée. Leur design confortable et douillet est parfait pour s\'y blottir, tandis que leur silhouette élégante et moderne se marie parfaitement avec tout type de décor.\n\nChaque fauteuil de la collection \"Fluff\" est fabriqué avec des matériaux de qualité supérieure, afin de vous garantir une expérience de détente durable. Leur rembourrage moelleux est recouvert d\'un tissu doux et confortable qui ajoute une touche de luxe à votre intérieur.\n\nDisponibles dans une variété de couleurs, ces fauteuils vous permettent de personnaliser votre espace de vie et de créer une ambiance chaleureuse et invitante. Leur design élégant et moderne est parfait pour les intérieurs contemporains, tandis que leur rembourrage douillet et leur confort sont idéaux pour les espaces plus traditionnels.\n\nEn somme, la collection \"Fluff\" est l\'option parfaite pour ceux qui cherchent à ajouter une touche de confort et de douceur à leur intérieur. Avec leur design luxueux, leur rembourrage moelleux et leur silhouette élégante, ces fauteuils sont un choix parfait pour une soirée de détente ou une soirée cinéma. Commandez dès maintenant votre fauteuil \"Fluff\" et découvrez comment cette collection peut transformer votre espace en un havre de paix et de confort.'),
(3, 'Inflatable', 'La collection \"Inflatable\" est une collection de meubles modernes, élégants et très pratiques. Ces fauteuils et chaises ont été conçus pour être facilement gonflables, ce qui les rend idéaux pour une utilisation en extérieur ou pour des événements spéciaux.\n\nChaque meuble de la collection \"Inflatable\" est fabriqué avec des matériaux durables et résistants, ce qui leur permet de résister aux éléments et à une utilisation fréquente. Ils sont également très faciles à transporter et à ranger, car ils peuvent être dégonflés en quelques secondes pour être rangés dans un sac de transport pratique.\n\nLeur design moderne et élégant les rend idéaux pour une utilisation en extérieur, que ce soit pour des barbecues, des soirées sur la plage ou pour se détendre au bord de la piscine. Ils sont également très pratiques pour les événements spéciaux, car leur légèreté et leur facilité d\'utilisation permettent de les installer rapidement et de les déplacer facilement.\n\nLa collection \"Inflatable\" est disponible dans une variété de couleurs et de tailles, ce qui vous permet de personnaliser votre espace de vie et de créer l\'ambiance que vous souhaitez. Ils sont également très confortables, avec un design ergonomique qui épouse les contours de votre corps pour vous offrir un confort optimal.\n\nEn somme, la collection \"Inflatable\" est l\'option idéale pour ceux qui cherchent à ajouter une touche de modernité et de praticité à leur espace de vie. Avec leur design élégant et moderne, leur confort et leur facilité d\'utilisation, ces fauteuils et chaises gonflables sont un choix parfait pour les événements spéciaux ou pour se détendre en plein air. Commandez dès maintenant votre meuble \"Inflatable\" et découvrez comment cette collection peut transformer votre espace en un lieu moderne, pratique et confortable.'),
(4, 'THREE Body X Co-Collection', 'La collection de coopération est la collection parfaite pour ceux qui cherchent à ajouter une touche ludique et créative à leur intérieur. Cette collection est inspirée de formes emblématiques de la culture populaire, telles que les personnages de Lego, les bonbons, les cubes Rubik et bien d\'autres encore.\n\nChaque pièce de cette collection est fabriquée avec des matériaux de qualité supérieure, ce qui garantit une durabilité et une résistance accrues. Les formes uniques de chaque pièce créent une ambiance ludique et créative dans votre espace de vie, tout en ajoutant une touche de nostalgie et de réconfort.\n\nLes formes des pièces de cette collection sont uniques et créatives, ce qui les rend idéales pour les enfants et les adultes qui cherchent à ajouter une touche de fantaisie à leur intérieur. Les couleurs vives et les formes ludiques sont parfaites pour stimuler la créativité et l\'imagination, et pour créer un espace de vie dynamique et inspirant.\n\nLa collection de coopération est disponible dans une variété de formes et de tailles, ce qui vous permet de personnaliser votre espace de vie en fonction de vos goûts et de vos préférences. Vous pouvez choisir parmi une gamme de personnages de Lego, de bonbons, de cubes Rubik et bien d\'autres encore, pour créer une ambiance unique et créative dans votre espace de vie.\n\nEn somme, la collection de coopération est l\'option idéale pour ceux qui cherchent à ajouter une touche ludique et créative à leur intérieur. Avec leurs formes uniques, leurs couleurs vives et leur durabilité accrue, ces pièces sont parfaites pour les enfants et les adultes qui cherchent à ajouter une touche de fantaisie à leur espace de vie. Commandez dès maintenant votre pièce de la collection de coopération et découvrez comment elle peut transformer votre espace en un lieu créatif et inspirant.');

-- --------------------------------------------------------

--
-- Structure de la table `dimensions`
--

CREATE TABLE `dimensions` (
  `product_id` int(11) NOT NULL,
  `height` double NOT NULL,
  `width` double NOT NULL,
  `depth` double NOT NULL,
  `seat_height` double NOT NULL,
  `seat_depth` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `dimensions`
--

INSERT INTO `dimensions` (`product_id`, `height`, `width`, `depth`, `seat_height`, `seat_depth`) VALUES
(4, 145.2, 111.2, 111, 26.6, 111),
(5, 145.5, 80, 45, 50, 40.2),
(6, 120, 229, 65.5, 45, 54.4),
(7, 150, 156, 45, 80, 41),
(8, 164, 80, 65, 55, 60),
(9, 165, 120, 70, 55, 70),
(16, 165, 234, 68, 56, 50),
(17, 190, 80, 55, 80, 52),
(20, 123, 45, 45, 123, 45),
(22, 123, 12, 54, 87, 12),
(23, 95, 55, 45, 45, 45);

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `delivery_number` varchar(255) NOT NULL,
  `statut_delivery` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pictures`
--

CREATE TABLE `pictures` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `caption` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `pictures`
--

INSERT INTO `pictures` (`id`, `url`, `product_id`, `caption`) VALUES
(3, '8013323b3e367186df2511300.jpg', 4, 'xcq'),
(4, '8013323b3e367186df2511301.jpg', 5, 'Chaise Bubble'),
(5, '5cb0ff50113b48ea834b68300.jpg', 6, 'Canapé Balon'),
(6, '5cb0ff50113b48ea834b68301.jpg', 7, 'Fauteuil de Bubble'),
(7, '815980413e30a8724427ea700.jpg', 8, 'Orange Float'),
(8, '66101d3f833b523292ef9a400.jpg', 9, 'Snow'),
(15, '66101d3f833b523292ef9a401.jpg', 16, 'Fly Island'),
(16, '9410438a03d0b7036548de001.jpg', 17, 'Bear Gummies Chair'),
(19, '7dbb4ca08f37c585a8f8d8200.jpg', 20, 'Forest Dream'),
(21, '7dbb4ca08f37c585a8f8d8202.jpg', 22, 'Huge Huge'),
(22, '5c74a5618b58ea622dd0dfe01.jpg', 23, 'Hushe');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `price` double NOT NULL,
  `collection_id` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `material` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `collection_id`, `stock`, `material`) VALUES
(4, 'Chaise Pouff', 'La collection de coopération est disponible dans une variété de formes et de tailles, ce qui vous permet de personnaliser votre espace de vie en fonction de vos goûts et de vos préférences. Vous pouvez choisir parmi une gamme de personnages de Lego, de bonbons, de cubes Rubik et bien d\'autres encore, pour créer une ambiance unique et créative dans votre espace de vie.', 1499.5, 2, 14, 'Plastique, tissu.'),
(5, 'Chaise Bubble', 'Une jolie chaise', 3999, 1, 50, 'Verre, Bois, Tissu'),
(6, 'Canapé Balon', 'Un canapé très confortable', 4999.9, 3, 20, 'Plastique, Verre, Bois.'),
(7, 'Fauteuil de Bubble', 'Bubble chaise', 1999.99, 1, 120, 'Verre, Béton.'),
(8, 'Orange Float', 'Une chaise de qualité très confortable. Une touche de ludique pour votre maison.', 1599.99, 1, 100, 'Plastique, tissu.'),
(9, 'Snow', 'La collection de coopération est disponible dans une variété de formes et de tailles, ce qui vous permet de personnaliser votre espace de vie en fonction de vos goûts et de vos préférences. Vous pouvez choisir parmi une gamme de personnages de Lego, de bonbons, de cubes Rubik et bien d\'autres encore, pour créer une ambiance unique et créative dans votre espace de vie.', 2999, 3, 100, 'Plasitique'),
(16, 'Fly Island', 'Le Fly Island est un canapé gonflable révolutionnaire qui offre un confort ultime pour se détendre, se reposer et se divertir. Ce canapé polyvalent est parfait pour une utilisation à l\'intérieur comme à l\'extérieur, que ce soit pour une soirée cinéma, une fête sur la plage, un pique-nique ou simplement pour se relaxer dans votre jardin.\r\n\r\nFabriqué à partir de matériaux de haute qualité, le Fly Island est incroyablement résistant aux déchirures et aux perforations, ce qui le rend durable et fiable pour une utilisation à long terme. Il est également facile à gonfler, ce qui signifie que vous pouvez le mettre en place en quelques minutes sans avoir besoin d\'une pompe ou d\'outils supplémentaires.', 2999.99, 3, 50, 'Plastique, tissue.'),
(17, 'Bear Gummies Chair', 'Le Bear Gummies Chair est une chaise en forme d\'ours en peluche qui est idéale pour les enfants qui aiment les animaux en peluche et qui ont besoin d\'un endroit confortable pour s\'asseoir et se détendre. Cette chaise unique est fabriquée à partir de matériaux de haute qualité et elle est incroyablement douce et moelleuse.\r\n\r\nLa forme de l\'ours en peluche rend la chaise amusante et attrayante pour les enfants, et elle est disponible dans une variété de couleurs vives qui plairont à tous les goûts. La chaise est légère et facile à déplacer, ce qui signifie que les enfants peuvent la déplacer dans leur chambre, le salon ou n\'importe où où ils veulent s\'asseoir confortablement.\r\n\r\nLe Bear Gummies Chair est facile à nettoyer et à entretenir, car il peut être lavé à la main ou nettoyé avec un chiffon humide. Il est également résistant aux taches et à l\'eau, ce qui signifie qu\'il peut être utilisé à l\'intérieur comme à l\'extérieur sans se détériorer.\r\n\r\nCette chaise est non seulement confortable pour s\'asseoir, mais elle peut également être utilisée pour décorer une pièce ou pour ajouter une touche de fantaisie à une fête d\'anniversaire ou à une soirée pyjama. Les enfants adoreront avoir leur propre chaise en forme d\'ours en peluche pour se reposer ou s\'amuser avec leurs amis.\r\n\r\nEn résumé, le Bear Gummies Chair est un produit amusant et pratique pour les enfants qui cherchent un endroit confortable pour s\'asseoir. Avec sa forme d\'ours en peluche et ses couleurs vives, il est sûr de plaire à tous les enfants et d\'ajouter une touche de fantaisie à n\'importe quelle pièce.', 1999.99, 4, 20, 'Plastique, Cotton, Tissu'),
(20, 'Forest Dream', 'QSDFQSSQ qsdQSDQSD sqdQSDQSDaz ZEAZDQSDQSDQSDQSqsdqsdqsdsqdsq', 1249, 2, 14, 'QSFQS QSDQ QSD '),
(22, 'Huge Huge', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, doloremque, tempora, et, consequuntur fugit recusandae dolorem facilis quisquam natus officia sit perferendis numquam perspiciatis poss Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, doloremque, tempora, et, consequuntur fugit recusandae dolorem facilis quisquam natus officia sit perferendis numquam perspiciatis poss', 999, 2, 52, 'Tissu, Bois'),
(23, 'Hushe', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, doloremque, tempora, et, consequuntur fugit recusandae dolorem facilis quisquam natus officia sit perferendis numquam perspiciatis possLorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, doloremque, tempora, et, consequuntur fugit recusandae dolorem facilis quisquam natus officia sit perferendis numquam perspiciatis poss.', 1599, 3, 55, 'Tissu, Plastique, Métal');

-- --------------------------------------------------------

--
-- Structure de la table `products_orders`
--

CREATE TABLE `products_orders` (
  `product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `promo_code`
--

CREATE TABLE `promo_code` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `begin` datetime NOT NULL,
  `end` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `registration_date` datetime NOT NULL,
  `birthday` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(511) NOT NULL,
  `last_connection` datetime NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `registration_date`, `birthday`, `email`, `first_name`, `last_name`, `password`, `last_connection`, `role_id`) VALUES
(17, '2023-02-15 11:56:14', '1998-04-26', 'isaac.marshall@3wa.io', 'isaac', 'marshall', '$2b$10$1eNTP1IL3eDpD/oThpkw..XN1EmDsStNY/sUa0QnZicvRDJRo0/UK', '2023-03-01 11:37:05', 1),
(29, '2023-02-16 14:23:17', '1991-04-11', 'lechat@raoul.fr', 'Raoul', 'LeChat', '$2b$10$bGK3eCYJGpTqLxfzZBpiieBW0wR18fB3MsqSt1K8kA6tEt6YQX6A6', '2023-04-13 14:51:35', 2),
(30, '2023-02-20 15:28:52', '2010-06-22', 'gindre.matthieu@gmail.com', 'Matthieu', 'Gindre', '$2b$10$8FwlZzz8QDPprwgWtMU11.ZQasnR7zmEuXN31KKBdfIV56Qlxowta', '2023-02-20 15:29:00', 1),
(35, '2023-03-01 10:58:38', '2010-06-22', 'marie.antoinnette@gmail.com', 'Antoinette', 'Marie', '$2b$10$YtIM6YJWM32pIx4pQHcM5O/NfxN.CAga48B8huxNgONAzX67peAmW', '2023-04-14 23:40:34', 1),
(39, '2023-03-06 12:06:34', '2010-06-22', 'ab3@gmail.com', 'fqsfqs', 'qdc', '$2b$10$au9GYTw8sCqvOuJEM/PRje3yTNheLGKQt6bSAIP2bhWzdzCEQH0cu', '2023-03-06 15:09:26', 2),
(40, '2023-04-13 18:07:05', '2010-06-12', 'user@user.com', 'User', 'User', '$2b$10$zmbNqAnBRbcnEC2WA07vcOqVU38Uyf.5Fl72DWvIjFDBHZOEA71AO', '2023-08-04 10:42:16', 2),
(41, '2023-04-13 19:26:57', '2010-06-22', 'admin@admin.com', 'admin', 'admin', '$2b$10$AcUX7/wnMWVr39QPu3igSO.9GkzoiDyC1Gq4O5eidSNQBLq4KzD1W', '2023-09-19 16:45:52', 1),
(42, '2023-04-13 19:57:33', '1977-06-22', 'ludovicniel@hotmail.com', 'Ludovic', 'Niel', '$2b$10$7vJ763xhGe.xpHpLgsKtpeqBWEnhesPuWhgrr.8hFwv2cToXhtZ8C', '2023-04-13 19:59:57', 2),
(44, '2023-05-01 15:24:34', '2010-06-22', 'blabla@admin.fr', 'qsdqsd', 'dqs', '$2b$10$5eVThWVgalNhmhuC9GK4xumKxIIViq2VhYiWvVqzUwDVQ/hPYHhfq', '2023-05-01 15:31:54', 2);

-- --------------------------------------------------------

--
-- Structure de la table `user_cart`
--

CREATE TABLE `user_cart` (
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user_cart`
--

INSERT INTO `user_cart` (`cart_id`, `product_id`, `quantity`) VALUES
(5, 4, 3),
(3, 9, 4),
(3, 4, 6),
(3, 6, 3),
(3, 7, 3),
(3, 17, 3),
(3, 16, 3),
(12, 4, 1),
(12, 6, 1),
(11, 4, 3);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `adresses`
--
ALTER TABLE `adresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `article_photos`
--
ALTER TABLE `article_photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `article_id` (`article_id`);

--
-- Index pour la table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `collection`
--
ALTER TABLE `collection`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `dimensions`
--
ALTER TABLE `dimensions`
  ADD KEY `product_id` (`product_id`);

--
-- Index pour la table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `pictures`
--
ALTER TABLE `pictures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `collection_id` (`collection_id`);

--
-- Index pour la table `products_orders`
--
ALTER TABLE `products_orders`
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Index pour la table `promo_code`
--
ALTER TABLE `promo_code`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- Index pour la table `user_cart`
--
ALTER TABLE `user_cart`
  ADD KEY `cart_id` (`cart_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `adresses`
--
ALTER TABLE `adresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT pour la table `article_photos`
--
ALTER TABLE `article_photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `collection`
--
ALTER TABLE `collection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pictures`
--
ALTER TABLE `pictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `promo_code`
--
ALTER TABLE `promo_code`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `adresses`
--
ALTER TABLE `adresses`
  ADD CONSTRAINT `adresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `article_photos`
--
ALTER TABLE `article_photos`
  ADD CONSTRAINT `article_photos_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `dimensions`
--
ALTER TABLE `dimensions`
  ADD CONSTRAINT `dimensions_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `pictures`
--
ALTER TABLE `pictures`
  ADD CONSTRAINT `pictures_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`collection_id`) REFERENCES `collection` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `products_orders`
--
ALTER TABLE `products_orders`
  ADD CONSTRAINT `products_orders_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_orders_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `user_cart`
--
ALTER TABLE `user_cart`
  ADD CONSTRAINT `user_cart_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
