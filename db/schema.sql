-- creates initial database
DROP DATABASE IF EXISTS food_trucks_db;
CREATE DATABASE food_trucks_db;

-- sample mysql code for testing locally
-- USE food_trucks_db;

-- CREATE TABLE food_trucks(
--     id INT NOT NULL AUTO_INCREMENT,
--     truck_name VARCHAR(100) NOT NULL,
--     operator_firstName VARCHAR(100) NOT NULL,
--     operator_lastName VARCHAR(100) NOT NULL,
--     phone VARCHAR(100) NOT NULL,
--     city VARCHAR(100) NOT NULL,
--     category VARCHAR(100) NOT NULL,
--     promo_message TEXT,
--     PRIMARY KEY(id)
-- );

-- INSERT INTO food_trucks (truck_name, operator_firstName, operator_lastName, phone, city, category)
-- VALUES ("Truck 1", "Neil", "Gandhi", "1234567890", "Charleston", "Mexican");

-- INSERT INTO food_trucks (truck_name, operator_firstName, operator_lastName, phone, city, category, promo_message)
-- VALUES ("Truck 2", "Brian", "Shanken", "9876543210", "Atlanta", "Fusion", "This is a promo message");

-- INSERT INTO food_trucks (truck_name, operator_firstName, operator_lastName, phone, city, category)
-- VALUES ("Truck 3", "Scott", "Wells", "1239874562", "Atlanta", "Italian");

-- INSERT INTO food_trucks (truck_name, operator_firstName, operator_lastName, phone, city, category, promo_message)
-- VALUES ("Truck 4", "Dennis", "Francis", "6541239637", "Atlanta", "Korean", "Buy 2 GET 1 Free!!");