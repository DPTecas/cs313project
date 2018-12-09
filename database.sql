CREATE TABLE titles
(
	id SERIAL PRIMARY KEY NOT NULL,
	title VARCHAR(60) NOT NULL
);

CREATE TABLE dialogues
(
	id SERIAL PRIMARY KEY NOT NULL,
	prompt TEXT NOT NULL,
	option1 TEXT NOT NULL,
	option2 TEXT NOT NULL,
	option3 TEXT
);

CREATE TABLE responses
(
	id SERIAL PRIMARY KEY NOT NULL,
	dia_id INT NOT NULL REFERENCES dialogues(id),
	r1 TEXT NOT NULL,
	r2 TEXT NOT NULL,
	r3 TEXT NOT NULL
);

INSERT INTO titles(title) VALUES ('Grocery Trip');

INSERT INTO characters (name) VALUES ('Becky');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('You make your way to the produce aisle...',
		'Buy bananas, and peacefully go on your way.', 
		'Stare longingly at the empty racks of romaine lettuce.', 
		'Take a bite out of a tomato and stare at the first person you see while the juice drips down your chin.');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (1, 
		'Ah, a boring one I see.',
		'Just let it go, it will be okay.',
		'What is wrong with you?');
