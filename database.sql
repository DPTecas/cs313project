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

CREATE TABLE scores
(
	id SERIAL PRIMARY KEY NOT NULL,
	title_id INT NOT NULL REFERENCES titles(id),
	name VARCHAR(30) NOT NULL,
	score INT NOT NULL,
	category VARCHAR(15) NOT NULL
);

INSERT INTO titles(title) VALUES ('Grocery Trip');

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

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('To the cleaning supplies!',
		'You take 20 minutes to smell each air freshener before choosing one.', 
		'Take a nap, no one ever visits this aisle.', 
		'Lick the bar soap.');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (2, 
		'You''ve got a lot of time on your hands...',
		'Same friend, same.',
		'Are you broken?');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('You see your ex at the end of the aisle!',
		'Hide behind the largest sack of flour you see.', 
		'Run up and give them a big hug.', 
		'Tell them you want them back, you would give anything...');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (3, 
		'We both know you aren''t small enough to fit behond that sack.',
		'Could you be more awkward?',
		'You deserve better. Probably. I don''t know.');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('The chips n'' dip have called your name.',
		'Grab chips n'' dip, why else would you be here?', 
		'Don''t grab chips n'' dip', 
		'Buy two chips n'' two dips');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (4, 
		'Acceptable.',
		'Are you kidding me? Get out. You aren''t welcome here anymore',
		'You are my hero.');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('You run into Deborah, an old friend, and her child, Jimothy.',
		'Hey Diane! Hey Johnny! How are ya????', 
		'How you doin?', 
		'Ignore her. Run. RUN.');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (5, 
		'Really? Your forgot their names? It''s RIGHT THERE',
		'I''m pretty sure she''s married friend..',
		'Smart move, she''s actually a murderer. Well, she talks so much you would feel like dying so it''s basically the same thing');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('You make your way to the produce aisle...',
		'Grab a steak.', 
		'Grab a giant bag of frozen chicken.', 
		'Grab some tofu.');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (6, 
		'Get me one too!',
		'Must be a college student.',
		'We can''t be friends');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('You run into a small child! Where is her mother??',
		'Help her find her mother.', 
		'Challenge her to a foot race.', 
		'Wrong aisle...');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (7, 
		'You seem to have a heart. I''m so proud.',
		'You win. The child tripped, and now has a bloody nose. You blew it.',
		'Have you no heart?');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('You''ve entered the most glorious hall in the grocery kindom',
		'Dr Pepper? Check. Mountain Dew? Check.', 
		'Get a 24 pack of premium water', 
		'Buy enough soda to bathe in.');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (8, 
		'The nectar of life, and the elixir of life, respectively. Smart choices.',
		'I mean.. good for you. Great, in fact. Yeah.',
		'Weird flex, but I respect it');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('Lobsters, crabs, and shrimp oh my!',
		'Reach into the lobster tank, grab a lobster, and release your battle cry.', 
		'Get crab legs and shrimp.. and more crab legs.', 
		'You''re poor. Just walk away now.');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (9, 
		'You have issues.',
		'Is it Superbowl season already?',
		'Remember, someday it''ll all be worth it.');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('Time to check out! Wait.. you seem to have left your wallet at home.',
		'Run out the door screaming "FREEDOOMMMM!"', 
		'Look at the cashier. Cry.', 
		'Beg the old man behind you for a loan.');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (10, 
		'FREEEDOMMMMMM!!!',
		'There, there. We all fail. Except me. I don''t fail',
		'He gives you the loan! Inspirational.');