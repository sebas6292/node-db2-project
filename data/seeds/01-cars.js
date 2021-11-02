// STRETCH
const cars = [
    {
        vins: '1111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vins: '1111111111111',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vins: '1111111111111',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    },
]

exports.seet = function(knex) {
    return knex('cars')
    .truncate().then(() => {
        return knex('cars').insert(cars)
    })
}

// exports.seet = async function(knex) {
//     await knex('cars').truncate()
//      await knex('cars').insert(cars)
// }
