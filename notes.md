# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.
## A good data model ( physical schema for the DB)

    - captures all the data needed by the system
    - captures only the data needed by the system
    - reflects reality
    - is flexible 
    - guarantees data integrity w/o sacrificing (too much) performance
    - is driven by the way data is accessed 

## Components

    - entities (nouns) <> resources --> tables
    - properties (keys, attributes) --> columns
    - relationships <> sub-resources --> foreign keys

## WorkFlow

    - identify entities 
    - identify the relationships 
    - identify the properties

## Relationships
-- a singer can write many song while a song can have many singers
-- a user has many followers while a user can follow several other users.

    - one to one: very uncommon
    - one to many --> order <> order details, cart <> items, channel <> messages
    - many to many --> authors <> books, artis <> song, label <> artist

## Mantras

    - every change to the schema requires a new migration
    - every table must have a primary key.

    -  on a ONE TO MANY use a foreign key.
        - the Foreign Key(FK) goes on the Many table.

    - on a MANY TO MANY --> use a third table. 
    - the Foreign Key must be the same type as the Primary Key that it references.

    - work on 2 (or 3 many to many) entities at a time.

    - The third Table can have extra information (describes the transaction)

    - Products        Purchases         Customers
                    (transaction)
                    Purchase Details
                    Recipe Details
    ```js
    const author = {
        id: 1,
        authors: []
    }

    const book = {
        id: 1,
        authors: []
    }
    
    const publishers = {
        id: 1,
        authors: [],
        books: []
    }

    ```
Schools  <> Tracks  <>  Cohorts  <>  Students

Student    Enrollments    Cohorts
-id         - id
-name       - student_id (FK)
-emial      - cohort_id (FK)
            - started
            - completed
            - processedBy (employee ID)
