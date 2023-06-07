
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
    "tech" JSON,
    "socials" JSON,
    "job_title" VARCHAR(256),
    "company_id" INTEGER REFERENCES company
);

CREATE TABLE "company" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (512) NOT NULL,
    "city" VARCHAR (256) NOT NULL,
    "state" VARCHAR (10) NOT NULL
);

CREATE TABLE "cohort" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (64) NOT NULL,
    "start_date" DATE NOT NULL,
    "end_Date" DATE NOT NULL,
    "class_medium" VARCHAR (64),
    "type" INTEGER,
    "campus_id" INTEGER REFERENCES campus
);

-- Link to an article / youtube video or a user written post 
CREATE TABLE "resource" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (512) NOT NULL,
    "description" VARCHAR (512),
    "post" TEXT,
    "link" VARCHAR (512),
    "tag" VARCHAR (128),
    "user_id" INTEGER REFERENCES "user"
);

CREATE TABLE "campus" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (256) NOT NULL,
    "city" VARCHAR (256) NOT NULL,
    "state" VARCHAR (10) NOT NULL
)

CREATE TABLE "instructor" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80) NOT NULL,
    "cohort_id" INTEGER REFERENCES cohort
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