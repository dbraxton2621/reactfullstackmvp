-- DROP DATABASE IF EXISTS trainers;
-- CREATE DATABASE trainers;
-- \c trainers;
DROP TABLE IF EXISTS trainer;


CREATE TABLE trainer (
    trainer_id SERIAL primary key,
    first_name VARCHAR (50),
    last_name VARCHAR (50),
    email VARCHAR (50),
    phone_number VARCHAR (15),
    years_of_experience integer,
    bodybuilding boolean, 
    crossfit boolean,
    running boolean,
    olympic_lifting boolean,
    power_lifting boolean,
    strongman boolean,
    calisthenics boolean,
    cycling boolean,
    functional_fitness boolean,
    dance boolean
);

insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Valdemar', 'Samme', 'vsamme0@fastcompany.com', '495-704-3847', 17, false, false, true, true, false, false, false, false, true, true);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Brigitte', 'Darrach', 'bdarrach1@comsenz.com', '809-609-8652', 2, false, true, false, false, true, false, true, false, false, false);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Colver', 'Bearcock', 'cbearcock2@blog.com', '640-479-9779', 5, false, true, false, true, false, false, true, false, true, true);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Kerry', 'Salleir', 'ksalleir3@engadget.com', '557-567-8943', 18, true, true, false, false, false, true, true, true, true, false);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Starr', 'Rollingson', 'srollingson4@yellowpages.com', '122-112-1578', 4, false, false, true, true, true, true, true, true, true, true);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Peyton', 'Kerswell', 'pkerswell5@icq.com', '512-964-1019', 20, false, true, false, false, true, true, true, false, true, true);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Sharlene', 'Hawick', 'shawick6@elegantthemes.com', '350-451-3197', 19, false, false, true, false, false, false, true, true, true, true);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Rosa', 'Pettus', 'rpettus7@multiply.com', '698-319-1180', 18, true, true, true, false, true, false, false, true, false, false);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Moises', 'Colpus', 'mcolpus8@umich.edu', '264-977-1330', 2, false, false, false, false, false, true, false, false, false, false);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Chane', 'Meech', 'cmeech9@dailymotion.com', '568-349-7730', 18, false, false, false, true, true, false, false, true, true, false);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Milo', 'Waistall', 'mwaistalla@instagram.com', '522-951-8304', 3, true, false, false, false, false, true, true, false, true, true);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Carmine', 'Arrigo', 'carrigob@aboutads.info', '881-691-6166', 15, false, false, false, true, false, false, true, true, true, false);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Carlynne', 'Habard', 'chabardc@nifty.com', '228-662-1846', 4, true, false, false, false, false, true, false, true, true, true);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Angus', 'Wapples', 'awapplesd@prnewswire.com', '384-435-4698', 12, true, false, true, false, false, false, false, true, true, false);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Ofella', 'Frankiewicz', 'ofrankiewicze@flavors.me', '102-619-9827', 9, false, true, false, false, false, true, true, false, true, true);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Libby', 'Maffioletti', 'lmaffiolettif@youku.com', '782-369-1563', 12, true, true, false, true, false, false, true, true, true, true);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Cassandre', 'Easun', 'ceasung@bloomberg.com', '472-457-1283', 3, true, true, false, true, true, false, false, true, true, false);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Sammy', 'Fardy', 'sfardyh@businessinsider.com', '225-778-8858', 10, false, true, false, true, true, true, false, false, false, true);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Elisabet', 'Gilphillan', 'egilphillani@shutterfly.com', '625-174-3877', 3, false, true, false, true, true, false, true, false, true, true);
insert into trainer (first_name, last_name, email, phone_number, years_of_experience, bodybuilding, crossfit, running, olympic_lifting, power_lifting, strongman, calisthenics, cycling, functional_fitness, dance) values ('Selie', 'Trayes', 'strayesj@google.co.jp', '759-800-3431', 19, true, true, true, false, true, false, true, false, false, true);
