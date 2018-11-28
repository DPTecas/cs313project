CREATE TABLE titles
(
	id SERIAL PRIMARY KEY NOT NULL,
	title VARCHAR(60) NOT NULL
);

CREATE TABLE main_character
(
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(60) NOT NULL,
);

CREATE TABLE characters
(
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(30) NOT NULL
);

CREATE TABLE dialogues
(
	id SERIAL PRIMARY KEY NOT NULL,
	prompt TEXT NOT NULL,
	option1 VARCHAR(30) NOT NULL,
	option2 VARCHAR(30) NOT NULL,
	option3 VARCHAR(30)
);

INSERT INTO titles(title) VALUES ('Grocery Trip');

INSERT INTO characters (name) VALUES ('Becky');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('Hello', 'Hi', 'How are ya?', 'Sup');
