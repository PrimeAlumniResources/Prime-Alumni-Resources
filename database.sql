CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE,
    "email" VARCHAR (256) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80) NOT NULL,
    "pronouns" VARCHAR (10),
    "bio" TEXT,
    "current_work" VARCHAR(256),
    "position" VARCHAR(256),
    "start_date" VARCHAR(256),
    "cohort_id" INTEGER,
    "portfolio_url" VARCHAR(256),
    "uploaded_file" TEXT,
    "github" VARCHAR (256),
    "linked_in" VARCHAR (256)
);
CREATE TABLE "company" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (512) NOT NULL,
    "city" VARCHAR (256) NOT NULL,
    "state" VARCHAR (10) NOT NULL
);
CREATE TABLE "user_company" (
    "id" VARCHAR (512) NOT NULL,
    "user_id" INTEGER,
    FOREIGN KEY (user_id) REFERENCES "user"(id),
    "company_id" INTEGER,
    FOREIGN KEY (company_id) REFERENCES "company"(id)
);

CREATE TABLE "job" (
    "id" SERIAL PRIMARY KEY,
    "company" VARCHAR (255) NOT NULL,
    "link" VARCHAR (256) NOT NULL,
    "position" VARCHAR(256) NOT NULL,
    "created_at" TIMESTAMP,
    "user_id" INTEGER,
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);
-- Link to an article / youtube video or a user written post
CREATE TABLE "resource" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (512) NOT NULL,
    "link" VARCHAR (1000),
    "description" VARCHAR(1000),
    "tag" VARCHAR (128),
    "user_id" INTEGER,
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);
CREATE TABLE "instructor" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80) NOT NULL
);
CREATE TABLE "campus" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (255) NOT NULL,
    "city" VARCHAR (255) ,
    "state" VARCHAR (255)
);
CREATE TABLE "cohort" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (64) ,
    "start_date" DATE ,
    "end_date" DATE ,
    "class_medium" VARCHAR (64),
    "type" VARCHAR,
    "campus_id" INTEGER,
    FOREIGN KEY (campus_id) REFERENCES "campus" (id)
);
CREATE TABLE "instructor_cohort" (
    "id" SERIAL PRIMARY KEY,
    "instructor_id" INTEGER,
    FOREIGN KEY (instructor_id) REFERENCES "instructor" (id),
    "cohort_id" INTEGER,
    FOREIGN KEY (cohort_id) REFERENCES "cohort" (id)
);
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
-- DUMMY DATA --
INSERT INTO "campus" (name, city, state)
	VALUES ('Prime Minneapolis', 'Minneapolis', 'MN');

INSERT INTO "cohort" (name,start_date, end_date, type, campus_id)
 VALUES ('Amethyst','2023-01-20','2023-05-07','UX','1'),
 		('Citrine','2023-03-20','2023-07-07','Full Stack','1'),
 		('Aquamarine','2023-02-20','2023-06-07','Full Stack','1');