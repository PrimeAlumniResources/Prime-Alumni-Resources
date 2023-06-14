
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80) NOT NULL,
    "pronouns" VARCHAR (10),
    "bio" TEXT,
    "position" VARCHAR(256),
    "start_date" VARCHAR(256),
    "cohort_id" INTEGER,
    "portfolio_url" VARCHAR(256)
);

CREATE TABLE "user_company" (
	"id" VARCHAR (512) NOT NULL,
	"user_id" INTEGER,
	FOREIGN KEY (user_id) REFERENCES "user"(id),
	"company_id" INTEGER,
	FOREIGN KEY (company_id) REFERENCES "company"(id)
);

CREATE TABLE "company" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (512) NOT NULL,
    "city" VARCHAR (256) NOT NULL,
    "state" VARCHAR (10) NOT NULL
);


CREATE TABLE "job" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (255) NOT NULL,
    "link" DATE NOT NULL,
    "position" DATE NOT NULL,
    "created_at" TIMESTAMP,
    "user_id" INTEGER
);

-- Link to an article / youtube video or a user written post 
CREATE TABLE "resource" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (512) NOT NULL,
    "link" VARCHAR (512),
    "tag" VARCHAR (128),
    "user_id" INTEGER,
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);

-- CREATE TABLE "tech" (
--     "id" SERIAL PRIMARY KEY,
--     "name" VARCHAR (255),
--     "is_current" BOOLEAN default FALSE,
-- );

CREATE TABLE "known_stack" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (255),
    "is_current" BOOLEAN default FALSE,
    "user_id" INT REFERENCES "user"(id)
);

CREATE TABLE "current_stack" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (255),
    "user_id" INT REFERENCES "user"(id)
);


CREATE TABLE "user_tech" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER,
    FOREIGN KEY (user_id) REFERENCES "user" (id),
    "tech_id" INTEGER,
    FOREIGN KEY (tech_id) REFERENCES "tech" (id)
);

CREATE TABLE "social" (
    "id" SERIAL PRIMARY KEY,
    "network" VARCHAR (255),
    "link" VARCHAR (255)
);

CREATE TABLE "user_social" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER,
    FOREIGN KEY (user_id) REFERENCES "user" (id),
    "social_id" INTEGER,
    FOREIGN KEY (social_id) REFERENCES "social" (id)
);

CREATE TABLE "instructor" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80) NOT NULL
);

CREATE TABLE "instructor_cohort" (
	"id" SERIAL PRIMARY KEY,
	"instructor_id" INTEGER,
	FOREIGN KEY (instructor_id) REFERENCES "instructor" (id),
	"cohort_id" INTEGER,
	FOREIGN KEY (cohort_id) REFERENCES "cohort" (id)
);

CREATE TABLE "cohort" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (64) NOT NULL,
    "start_date" DATE NOT NULL,
    "end_Date" DATE NOT NULL,
    "class_medium" VARCHAR (64),
    "type" INTEGER,
    "campus_id" INTEGER,
    FOREIGN KEY (campus_id) REFERENCES "campus" (id)
);

CREATE TABLE "campus" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (255) NOT NULL,
	"city" VARCHAR (255) NOT NULL,
	"state" VARCHAR (255) NOT NULL
);



-- json -> const tech = {
--     current_tech: [
--         'Javascript',
--         'React',
--         'TailwindCSS'
--     ],

--     favorite_tech: [
--         ......
--     ]
-- }

-- tech.current_tech.map(tech => {
--     <tr>tech.name</tr>
-- })

-- sqlquery = SELECT from_json(tech) FROM user