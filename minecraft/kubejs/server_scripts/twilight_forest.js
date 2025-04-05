ServerEvents.tags('item', e => {
    e.removeAll('twilightforest:portal/activator')
    e.add('twilightforest:portal/activator', 'kubejs:twilight_catalyst')
})

ServerEvents.recipes(e => {
    e.shaped('twilightforest:twilight_scepter',[
        'FE',
        'BL'
    ],{
        F: '#forge:tools/files',
        E: 'ender_pearl',
        B: 'bone',
        L: 'twilightforest:lamp_of_cinders'
    }).keepIngredient('#forge:tools/files').keepIngredient('twilightforest:lamp_of_cinders')
})