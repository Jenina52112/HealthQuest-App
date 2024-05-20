-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: healthquest_db
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `relax_deep_breath`
--

DROP TABLE IF EXISTS `relax_deep_breath`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `relax_deep_breath` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `relax_deep_breath_name` varchar(255) NOT NULL,
  `relax_deep_breath_description` varchar(255) NOT NULL,
  `relax_deep_breath_duration` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `relax_deep_breath_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relax_deep_breath`
--

LOCK TABLES `relax_deep_breath` WRITE;
/*!40000 ALTER TABLE `relax_deep_breath` DISABLE KEYS */;
INSERT INTO `relax_deep_breath` VALUES (1,1,'Reduced Stress and Anxiety','Deep breathing triggers the relaxation response in the body, reducing levels of stress hormones such as cortisol and promoting feelings of calmness and relaxation.',NULL,'2024-05-16 17:48:14','2024-05-16 17:48:14'),(2,1,'Lowered Blood Pressure','By activating the bodys relaxation response, deep breathing can help lower blood pressure and promote cardiovascular health.',NULL,'2024-05-16 17:48:14','2024-05-16 17:48:14'),(3,1,'Improved Oxygenation',' Deep breathing allows you to take in more oxygen, which is essential for optimal functioning of the body and brain. This can enhance energy levels and cognitive function.',NULL,'2024-05-16 17:48:14','2024-05-16 17:48:14'),(4,1,'Enhanced Relaxation','Deep breathing can help you relax and unwind, making it a great way to de-stress and improve overall well-being.',NULL,'2024-05-16 17:48:14','2024-05-16 17:48:14'),(5,1,'Stress Reduction','Deep breathing serves as a mindfulness practice, allowing you to focus on the present moment and detach from stressful thoughts and worries. This can help reduce symptoms of anxiety and depression.',NULL,'2024-05-16 17:48:14','2024-05-16 17:48:14'),(6,1,'Improved Respiratory Function','Practicing deep breathing regularly can strengthen the diaphragm and improve lung capacity, leading to more efficient breathing patterns and better respiratory health.',NULL,'2024-05-16 17:48:14','2024-05-16 17:48:14'),(7,1,'Test Breath','this is a test',NULL,'2024-05-17 00:05:56','2024-05-17 00:05:56'),(8,1,'Test Breath2','This is the second test',NULL,'2024-05-17 01:34:54','2024-05-17 01:34:54');
/*!40000 ALTER TABLE `relax_deep_breath` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `relax_guided_imagery`
--

DROP TABLE IF EXISTS `relax_guided_imagery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `relax_guided_imagery` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `image_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `relax_guided_imagery_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relax_guided_imagery`
--

LOCK TABLES `relax_guided_imagery` WRITE;
/*!40000 ALTER TABLE `relax_guided_imagery` DISABLE KEYS */;
/*!40000 ALTER TABLE `relax_guided_imagery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `relaxprm`
--

DROP TABLE IF EXISTS `relaxprm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `relaxprm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `relax_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `relaxprm_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relaxprm`
--

LOCK TABLES `relaxprm` WRITE;
/*!40000 ALTER TABLE `relaxprm` DISABLE KEYS */;
/*!40000 ALTER TABLE `relaxprm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Learnantino','$2b$10$53Ynp.ZNjay3EK4F9Mk2yOmYg336VDjFXzArV3DM07zEfJLnqTDgS');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-18 12:35:50
