-- creating the table dbl (database definition la
create table greetings (
    id integer PRIMARY KEY AUTOINCREMENT,
    language text,
    greetings text
);
-- DML (database manipulation language)
 select * from greetings;
 select count(*) from greetings

insert into greetings(language, greetings) values ('zulu', 'Sawubona');
--add two more language
insert into greetings(language, greetings) values ('Sesotho', 'Dumela');
insert into greetings(language, greetings) values ('xitsonga', 'avusheni');

-- call the query using an await
-- create a function that returns all the greetings from the db 

-- sql statement type - insert

