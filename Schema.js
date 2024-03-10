## Answer 3:

CREATE TABLE Product_Category (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    desc VARCHAR(255),
    created_at TIMESTAMP,
    modified_at TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE TABLE Product (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    desc VARCHAR(255),
    quantity INT,
    category_id INT,
    created_at TIMESTAMP,
    inventory_id INT,
    modified_at TIMESTAMP,
    price DECIMAL,
    deleted_at TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES Product_Category(id)
);
