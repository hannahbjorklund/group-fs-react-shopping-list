-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE shoppingList (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80),
    "quantity" FLOAT,
    "unit" VARCHAR(20)
)

INSERT INTO shoppingList ("name", "quantity", "unit")
    VALUES  ('hotdogs', 50, 'packages'),
            ('red grapes', 2, 'lbs'),
            ('mulch', 1, 'bag'),
            ('bananas', 1.3, 'lbs');