CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE
    IF NOT EXISTS account (
        id VARCHAR PRIMARY KEY DEFAULT uuid_generate_v1() ,
        name VARCHAR(50) DEFAULT NULL,
        password VARCHAR DEFAULT NULL,
        email VARCHAR(50) DEFAULT NULL UNIQUE,
        googleId VARCHAR(255) DEFAULT NULL UNIQUE,
        facebookId VARCHAR(255) DEFAULT NULL UNIQUE,
        isVerified BOOLEAN NOT NULL DEFAULT FALSE
    );