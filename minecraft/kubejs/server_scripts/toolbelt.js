ServerEvents.recipes(e => {
    e.remove({output: 'toolbelt:pouch'})
    e.shaped('toolbelt:pouch',[
        ' S ',
        'LRL',
        'TLK'
    ],{
        S: 'gtceu:bronze_screw',
        L: 'leather',
        R: 'gtceu:bronze_ring',
        T: 'string',
        K: '#forge:tools/knives'
    }).keepIngredient('#forge:tools/knives')

    e.remove({output: 'toolbelt:belt'})
    e.shaped('toolbelt:belt',[
        'PLP',
        'S K'
    ],{
        S: 'string',
        L: 'leather',
        P: 'toolbelt:pouch',
        K: '#forge:tools/knives'
    }).keepIngredient('#forge:tools/knives')
})