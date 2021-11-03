const cars = [
    {
        vin: '1GCEC14W6TZ225573',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: 'JH4KA7630PC007649',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '5TFHW5F13AX136128',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    },
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed = async function(knex) {
    await knex('cars').truncate()
     await knex('cars').insert(cars)
}
