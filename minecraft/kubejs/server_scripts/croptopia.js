ServerEvents.recipes(e => {
	e.recipes.farmersdelight.cutting(
        'croptopia:crab',
        '#forge:tools/knives',
        [
            '10x quark:crab_leg'
        ],
	);
    e.remove({output: 'croptopia:peanut_butter'})
    e.recipes.create.filling('croptopia:peanut_butter', [Fluid.of('kubejs:peanut_butter', 250), 'glass_bottle'])
})

ServerEvents.tags('item', e => {
    e.add('create:upright_on_belt','croptopia:peanut_butter')
})