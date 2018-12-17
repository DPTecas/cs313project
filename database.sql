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
		'1) Take a bite out of a tomato and stare at the first person you see while the juice drips down your chin.', 
		'2) Stare longingly at the empty racks of romaine lettuce. Save the lettuce!', 
		'3) Buy bananas, and peacefully go on your way.');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (1, 
		'What is wrong with you?',
		'Just let it go, it will be okay.',
		'Ah, a boring one I see.');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('To the cleaning supplies!',
		'1) Lick the bar soap.', 
		'2) You take 20 minutes to smell each air freshener before choosing one.', 
		'3) Take a nap, no one ever visits this aisle.');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (2, 
		'Are you broken?',
		'You''ve got a lot of time on your hands...',
		'Same friend, same. ');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('You see your ex at the end of the aisle!',
		'1) Tell them you want them back, you would give anything...', 
		'2) Run up and give them a big hug.', 
		'3) Hide behind the largest sack of flour you see.');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (3, 
		'You deserve better. Probably. I don''t know.',
		'Could you be more awkward?',
		'We both know you aren''t small enough to fit behind that sack.');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('The chips n'' dip have called your name.',
		'1) Don''t grab chips n'' dip.', 
		'2) Buy two chips n'' two dips.', 
		'3) Grab chips n'' dip, why else would you be here?');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (4, 
		'Are you kidding me? Get out. You aren''t welcome here anymore.',
		'You are my hero.',
		'Acceptable.');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('You run into Deborah, an old friend, and her child, Jimothy.',
		'1) Hey Diane! Hey Johnny! How are ya????', 
		'2) How you doin?', 
		'3) Run. RUN.');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (5, 
		'Really? Your forgot their names? It''s RIGHT THERE',
		'I''m pretty sure she''s married friend..',
		'Smart move, she''s actually a murderer. Well, she talks so much you would feel like dying so it''s basically the same thing');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('You make your way to the produce aisle...',
		'1) Grab a steak.', 
		'2) Grab a giant bag of frozen chicken.', 
		'3) Grab some tofu.');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (6, 
		'Get me one too!',
		'Must be a college student.',
		'We can''t be friends');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('You run into a small child! Where is her mother??',
		'1) Challenge her to a foot race.', 
		'2) Help her find her mother.', 
		'3) Wrong aisle...');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (7, 
		'You win. The child tripped, and now has a bloody nose. You blew it.',
		'You seem to have a heart. I''m so proud.',
		'Have you no heart?');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('You''ve entered the most glorious hall in the grocery kindom',
		'1) Buy enough soda to bathe in.', 
		'2) Dr Pepper? Check. Mountain Dew? Check.', 
		'3) Get a 24 pack of premium water.');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (8, 
		'Weird flex, but I respect it.',
		'The nectar of life, and the elixir of life, respectively. Smart choices.',
		'I mean.. good for you. Great, in fact. Yeah.');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('Lobsters, crabs, and shrimp oh my!',
		'1) Reach into the lobster tank, grab a lobster, and release your battle cry.', 
		'2) Get crab legs and shrimp.. and more crab legs.', 
		'3) You''re poor. Just walk away now.');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (9, 
		'You have issues.',
		'Is it Superbowl season already?',
		'Remember, someday it''ll all be worth it.');

INSERT INTO dialogues (prompt, option1, option2, option3) 
VALUES ('Time to check out! Wait.. you seem to have left your wallet at home.',
		'1) Run out the door screaming "FREEDOOMMMM!"', 
		'2) Beg the old man behind you for a loan.', 
		'3) Look at the cashier. Cry.');

INSERT INTO responses (dia_id, r1, r2, r3)
VALUES (10, 
		'FREEEDOMMMMMM!!!',
		'He gives you the loan! Inspirational.',
		'There, there. We all fail. Except me. I don''t fail');