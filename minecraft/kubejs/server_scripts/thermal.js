ServerEvents.recipes(e => {
    // e.replaceInput({input: 'thermal:niter'}, '')
    e.remove({output: /thermal:niter/})
    e.remove({output: 'thermal:satchel'})
    e.shaped('thermal:satchel',[
        'LSK',
        'LRL',
        'LLT'
    ],{
        L: 'leather',
        S: 'gtceu:tin_screw',
        K: '#forge:tools/knives',
        R: 'gtceu:tin_ring',
        T: 'string'
    }).keepIngredient('#forge:tools/knives')
    e.recipes.create.mixing('2x thermal:basalz_powder', [Fluid.of('create_enchantment_industry:experience', 125), 'gtceu:obsidian_dust'])
    e.recipes.create.mixing('2x thermal:blizz_powder', [Fluid.of('create_enchantment_industry:experience', 125), 'snowball'])
    e.recipes.create.mixing('2x thermal:blitz_powder', [Fluid.of('create_enchantment_industry:experience', 125), 'gtceu:saltpeter_dust'])
    e.recipes.create.mixing('2x blaze_powder', [Fluid.of('create_enchantment_industry:experience', 125), 'gtceu:sulfur_dust'])
})