-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 19 jan. 2023 à 18:49
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `Bdd`
--

-- --------------------------------------------------------

--
-- Structure de la table `carrousel`
--

DROP TABLE IF EXISTS `carrousel`;
CREATE TABLE IF NOT EXISTS `carrousel` (
  `id` int NOT NULL,
  `image_categories` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int NOT NULL,
  `libelle` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(254) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id` int NOT NULL,
  `nom` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `tel` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `adresse_1` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `adresse_2` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `code_postal` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `ville` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `region` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `pays` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `mdp` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `validate` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id`, `nom`, `prenom`, `email`, `tel`, `adresse_1`, `adresse_2`, `code_postal`, `ville`, `region`, `pays`, `mdp`, `validate`) VALUES
(1, 'gégé', 'michel', 'michel.gégé@gmail.com', '0645253496', '12 rue charles de gaulles', '.', '35610', 'paris', 'ile de france', 'france', 'globule', 1);

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

DROP TABLE IF EXISTS `commandes`;
CREATE TABLE IF NOT EXISTS `commandes` (
  `id` int NOT NULL,
  `id_client` int NOT NULL,
  `id_produits` int NOT NULL,
  `supprimer` tinyint(1) NOT NULL,
  `retour` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `commandes` (`id_client`),
  KEY `commandes2` (`id_produits`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

DROP TABLE IF EXISTS `contact`;
CREATE TABLE IF NOT EXISTS `contact` (
  `id` int NOT NULL,
  `id_client` int NOT NULL,
  `sujet` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `type` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `contact` (`id_client`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `histogramme`
--

DROP TABLE IF EXISTS `histogramme`;
CREATE TABLE IF NOT EXISTS `histogramme` (
  `id` int NOT NULL,
  `id_client` int NOT NULL,
  `id_commandes` int NOT NULL,
  `id_categories` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `histogramme` (`id_categories`),
  KEY `histogramme2` (`id_client`),
  KEY `histogramme3` (`id_commandes`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `materiaux`
--

DROP TABLE IF EXISTS `materiaux`;
CREATE TABLE IF NOT EXISTS `materiaux` (
  `id` int NOT NULL,
  `libelle` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `stock` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `methode`
--

DROP TABLE IF EXISTS `methode`;
CREATE TABLE IF NOT EXISTS `methode` (
  `id` int NOT NULL,
  `libelle` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

DROP TABLE IF EXISTS `paiement`;
CREATE TABLE IF NOT EXISTS `paiement` (
  `id` int NOT NULL,
  `id_client` int NOT NULL,
  `id_methode` int NOT NULL,
  `titulaire` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `numero_carte` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `expiration` int NOT NULL,
  `cvv` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `paiement` (`id_client`),
  KEY `paiement2` (`id_methode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE IF NOT EXISTS `produits` (
  `id` int NOT NULL,
  `libelle` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `id_materiaux` int NOT NULL,
  `prix` decimal(10,0) NOT NULL,
  `stock` tinyint(1) NOT NULL,
  `id_categories` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `produits` (`id_categories`),
  KEY `produits2` (`id_materiaux`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL,
  `nom` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `mdp` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `commandes` FOREIGN KEY (`id_client`) REFERENCES `client` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `commandes2` FOREIGN KEY (`id_produits`) REFERENCES `produits` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `histogramme`
--
ALTER TABLE `histogramme`
  ADD CONSTRAINT `histogramme` FOREIGN KEY (`id_categories`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `histogramme2` FOREIGN KEY (`id_client`) REFERENCES `client` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `histogramme3` FOREIGN KEY (`id_commandes`) REFERENCES `commandes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `paiement`
--
ALTER TABLE `paiement`
  ADD CONSTRAINT `paiement` FOREIGN KEY (`id_client`) REFERENCES `client` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `paiement2` FOREIGN KEY (`id_methode`) REFERENCES `methode` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `produits`
--
ALTER TABLE `produits`
  ADD CONSTRAINT `produits` FOREIGN KEY (`id_categories`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `produits2` FOREIGN KEY (`id_materiaux`) REFERENCES `materiaux` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
