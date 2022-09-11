-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Erstellungszeit: 11. Sep 2022 um 13:51
-- Server-Version: 10.4.24-MariaDB
-- PHP-Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `crudapp`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE `users` (
  `userid` int(5) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(16) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` varchar(500) NOT NULL,
  `membership` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL,
  `photo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `users`
--

INSERT INTO `users` (`userid`, `firstname`, `lastname`, `username`, `mail`, `password`, `bio`, `membership`, `status`, `photo`) VALUES
(1, 'Summer', 'Smith', 'Summer', 'summer@test', '123', '   Summer Smith is Morty\'s 17-year-old  older sister, a more conventional and often superficial teenager, who is obsessed with improving her status among her peers.                  ', 'enterprise', 'Teacher', 'summer1.jpg'),
(2, 'Rick', 'Sanchez', 'Rick', 'rick@test', '123', 'Richard \"Rick\" Sanchez is a sociopathic, nihilistic, grouchy, crude, rude, narcissistic,\r\nself-centered, alcoholic mad scientist who is the widowed father of Beth Smith and the maternal grandfather of Morty and Summer.  ', 'enterprise', 'Teacher', 'rick2.jpg'),
(3, 'Jerry', 'Smith', 'Jerry', 'jerry@test', '123', '   Jerry Smith is Summer and Morty\'s insecure 34-year-old father, Beth\'s husband, and Rick\'s son-in-law, who strongly disapproves of Rick\'s influence over his family. ', 'enterprise', 'Teacher', 'jerry3.jpg'),
(4, 'Morty', 'Smith', 'Morty', 'm@s', '123', 'Mortimer \"Morty\" Smith is Rick\'s neurotic 14-year-old grandson who is frequently dragged into Rick\'s misadventures.', 'enterprise', 'Teacher', 'morty4.jpg'),
(5, 'Scary', 'Terry', 'Scary T.', 's@t', '123', '   A murderous entity who resides in the dream world. He is a \"legally safe\" parody of Freddy Krueger and has miniature swords on his fingers instead of knives. He initially tries to kill Rick and Morty, but later befriends them after they help him with his own dream problems. He is very fond of the word \"bitch\", and injects it into almost every sentence. ', 'free', 'Student', 'scaryt5.jpg'),
(6, 'Bird', 'person', 'Birdperson ', 'b@p', '123', '    A superhero-like being who is Rick\'s best friend. He holds a deep respect for Rick, and often offers Morty insight when Morty considers doing something that would jeopardize his and Rick\'s relationship. He was at one point in a band with Rick and Squanchy.', 'pro', 'Student', 'birdperson6.jpg'),
(7, 'Squan', 'Chy', 'Squanchy', 's@c', '123', 'A disheveled catlike creature who replaces various words in his sentences with the word \"squanch\". \r\nHe is a parody of Snarf. \r\nSquanchy is one of Rick\'s best friends and wears a bracelet inscribed with \"Rick\'s BFF\".        ', 'pro', 'Student', 'squanchy7.jpg'),
(8, 'Diana', 'Sanchez', 'Diana', 'Diana@test', '123', '   Diane was Rick\'s wife. She is seen in a flashback during the Season 3 premiere entering the garage with a young Beth. As Rick vows to give up science, they prepare to go for ice cream when Diane was killed by a bomb sent through a portal created by another Rick as revenge for the main Rick refusing to join him. Rick then decides to become a scientist again to avenge his family. ', 'free', 'Student', 'diana8.jpg'),
(9, 'Beth', 'Smith (née Sanchez)', 'Beth', 'Beth@test', '123', 'Beth Smith (née Sanchez) is a veterinarian who specializes in horse surgery, \r\nwho is struck with a deep sense of dissatisfaction with her life,\r\nstemming from her belief that she has \"settled\" in her marriage, family, and job, \r\nleading her to accept her father into her household after he abandoned her as a teenager.\r\nShe is known for her selfish and humorous personality, \r\nalcoholism, and abrasiveness when criticized.', 'free', 'Student', 'beth9.jpg'),
(10, 'Mr.', 'Poopybutthole', 'Mr Poopybutthole', 'poopybutthole@test', '123', 'Mr. Poopybutthole – A yellow humanoid creature and longtime family friend. \r\nHe is a parody of wacky side characters on television shows. \r\nAlthough he shows up at the same time as a group of Alien Parasites who take the forms of similarly zany characters, \r\nMr. Poopybutthole himself is real. \r\nHe is severely injured by Beth after she mistakes him for an Alien Parasite and shoots him.\r\nBy the post-credits, \r\nMr. Poopybutthole survives the wound and is undergoing physical therapy.', 'free', 'Student', 'poopybutthole10.jpg');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
