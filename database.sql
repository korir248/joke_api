-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 25, 2023 at 02:41 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jokes`
--

-- --------------------------------------------------------

--
-- Table structure for table `jokes`
--

CREATE TABLE `jokes` (
  `joke_id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `setup` varchar(255) NOT NULL,
  `punchline` varchar(255) NOT NULL,
  `is_approved` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jokes`
--

INSERT INTO `jokes` (`joke_id`, `type`, `setup`, `punchline`, `is_approved`) VALUES
(1, 'general', 'What did the fish say when it hit the wall?', 'Dam.', 1),
(2, 'general', 'How do you make a tissue dance?', 'You put a little boogie on it.', 1),
(3, 'general', 'What\'s Forrest Gump\'s password?', '1Forrest1', 1),
(4, 'general', 'What do you call a belt made out of watches?', 'A waist of time.', 1),
(5, 'general', 'Why can\'t bicycles stand on their own?', 'They are two tired', 1),
(6, 'general', 'How does a train eat?', 'It goes chew, chew', 1),
(7, 'general', 'What do you call a singing Laptop?', 'A Dell', 1),
(8, 'general', 'How many lips does a flower have?', 'Tulips', 1),
(9, 'general', 'How do you organize an outer space party?', 'You planet', 1),
(10, 'general', 'What kind of shoes does a thief wear?', 'Sneakers', 1),
(11, 'general', 'What\'s the best time to go to the dentist?', 'Tooth hurty.', 1),
(12, 'knock-knock', 'Knock knock. \n Who\'s there? \n A broken pencil. \n A broken pencil who?', 'Never mind. It\'s pointless.', 1),
(13, 'knock-knock', 'Knock knock. \n Who\'s there? \n Cows go. \n Cows go who?', 'No, cows go moo.', 1),
(14, 'knock-knock', 'Knock knock. \n Who\'s there? \n Little old lady. \n Little old lady who?', 'I didn\'t know you could yodel!', 1),
(15, 'programming', 'What\'s the best thing about a Boolean?', 'Even if you\'re wrong, you\'re only off by a bit.', 1),
(16, 'programming', 'What\'s the object-oriented way to become wealthy?', 'Inheritance', 1),
(17, 'programming', 'Where do programmers like to hangout?', 'The Foo Bar.', 1),
(18, 'programming', 'Why did the programmer quit his job?', 'Because he didn\'t get arrays.', 1),
(19, 'general', 'Did you hear about the two silk worms in a race?', 'It ended in a tie.', 1),
(20, 'general', 'What did the fish say when it hit the wall?', 'Dam.', 1),
(21, 'general', 'How do you make a tissue dance?', 'You put a little boogie on it.', 1),
(22, 'general', 'What\'s Forrest Gump\'s password?', '1Forrest1', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jokes`
--
ALTER TABLE `jokes`
  ADD PRIMARY KEY (`joke_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jokes`
--
ALTER TABLE `jokes`
  MODIFY `joke_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;