ServerEvents.recipes(e => {
    e.shapeless('sushigocrafting:nori_sheets', ['#forge:tools/mortars', 'water_bucket', '3x dried_kelp']).keepIngredient('#forge:tools').replaceIngredient('water_bucket', 'bucket')
})