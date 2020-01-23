
exports.up = function(knex) {
    return knex.schema.createTable('authors', tbl => {
        tbl.increments()

        tble.string('name', 255)
            .notNullable()
            .index()

    })
    .createTable('books', tbl => {
        tbl.increments()

        tbl.string('title', 4000)
        .notNullable()
        .index()

        tbl.integer('publisher_id')
            .unsigned()
            .notNullable()
            references('id')
            inTable('publishers')
            .onDelete('RESTRICT') // what happens if the publisher with this id is deleted
            .onUpdate('CASCADE')  //what happens if the publisher id changes--CASE BY CASE
    })
  // CASCADE, SET NULL, DO NOTHING, RESTRICT, etc.
};

exports.down = function(knex) { 
    // like sock then shoe you go backwards from the order Shoe then sock
    //knex cleaner and use this code is default
  return knex.schema 
    .dropTableIfExists ('books')
    .dropTableIfExists ('publishers')
    .dropTableIfExists ('authors')
};
