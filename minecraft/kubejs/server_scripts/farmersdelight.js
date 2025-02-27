const {COMPOSTABLES} = Java.loadClass("net.minecraft.world.level.block.ComposterBlock");
const compostable_items = [];
COMPOSTABLES.forEach((item, chance) => {  
    if(item) compostable_items.push(item.id)
})

ServerEvents.recipes(e => {
    e.remove({output: 'farmersdelight:cutting_board'})
    e.shaped(
        'farmersdelight:cutting_board',
        ['SW'],
        {
            S: 'stick',
            W: 'gtceu:wood_plate'
        }
    )
    
    e.remove({output: 'farmersdelight:stove'})
    e.shaped(
        'farmersdelight:stove',
        [
            'WWW',
            'BAB',
            'BCB'
        ],
        {
            W: 'gtceu:wrought_iron_plate',
            B: 'brick',
            C: 'campfire',
            A: '#forge:tools/hammers'
        }
    ).keepIngredient('#forge:tools/hammers')

    e.remove({output: 'farmersdelight:cooking_pot'})
    e.shaped(
        'farmersdelight:cooking_pot',
        [
            ' S ',
            'BAB',
            'WWW'
        ],
        {
            W: 'gtceu:wrought_iron_plate',
            B: 'brick',
            A: '#forge:tools/hammers',
            S: 'stick'
        }
    ).keepIngredient('#forge:tools/hammers')
    e.shapeless('gtceu:wood_dust', ['#forge:tools/mortars', 'farmersdelight:bark']).keepIngredient('#forge:tools/mortars')
    e.shapeless('paper', ['2x gtceu:wood_dust', 'water_bucket']).replaceIngredient('water_bucket', 'bucket')
    e.shapeless('2x paper', ['4x gtceu:wood_dust', 'water_bucket']).replaceIngredient('water_bucket', 'bucket')
    e.shapeless('3x paper', ['6x gtceu:wood_dust', 'water_bucket']).replaceIngredient('water_bucket', 'bucket')
    e.shapeless('4x paper', ['8x gtceu:wood_dust', 'water_bucket']).replaceIngredient('water_bucket', 'bucket')
    e.shapeless('5x paper', ['8x gtceu:wood_dust', 'water_bucket']).replaceIngredient('water_bucket', 'bucket')
    e.shapeless('2x paper', ['3x gtceu:wood_dust', 'water_bucket', 'gtceu:soda_ash_dust']).replaceIngredient('water_bucket', 'bucket')
    e.remove({ id: 'farmersdelight:paper_from_tree_bark' })
    e.remove({ id: 'immersiveengineering:crafting/paper_from_sawdust' })
    e.remove({output: 'farmersdelight:skillet'})
    e.shaped(
        'farmersdelight:skillet',
        [
            ' HP',
            ' R ',
            'B  '
        ],
        {
            P: 'gtceu:wrought_iron_plate',
            R: 'gtceu:wrought_iron_rod',
            H: '#forge:tools/hammers',
            B: 'brick'
        }
    ).keepIngredient('#forge:tools/hammers')
for (let i = 0; i < Ingredient.of("#farmersdelight:cabinets").itemIds.length; i++) {
    e.remove({ output: Ingredient.of("#farmersdelight:cabinets").itemIds[i]})
    e.shaped(
        Ingredient.of("#farmersdelight:cabinets").itemIds[i],
        [
            'SPF',
            'BTB'
        ],
        {
            S: '#forge:tools/saws',
            P: Ingredient.of("#farmersdelight:cabinets").itemIds[i].replace('cabinet','planks').replace('farmersdelight:', ''),
            F: '#forge:tools/files',
            B: '#forge:bolts',
            T: Ingredient.of("#farmersdelight:cabinets").itemIds[i].replace('cabinet','trapdoor').replace('farmersdelight:', '')
        }
    ).keepIngredient('#forge:tools/files').keepIngredient('#forge:tools/saws')
}

    e.remove({ output: 'farmersdelight:full_tatami_mat'})
    e.remove({ output: 'farmersdelight:half_tatami_mat'})
    e.remove({id: 'farmersdelight:tatami_block_from_full'})
    e.shapeless('4x farmersdelight:full_tatami_mat', ['farmersdelight:tatami', '#swords']).keepIngredient('#swords')
    e.shapeless('2x farmersdelight:half_tatami_mat', ['farmersdelight:full_tatami_mat', '#swords']).keepIngredient('#swords')
    e.remove({output: 'farmersdelight:canvas_rug'})
    e.remove({id: 'farmersdelight:canvas_from_canvas_rug'})
    e.shapeless("7x farmersdelight:canvas_rug", ["farmersdelight:canvas"])
    e.shapeless("farmersdelight:canvas", ["7x farmersdelight:canvas_rug"])
    e.remove({id: "farmersdelight:tatami"})
    e.shaped(
        'farmersdelight:tatami',
        [
            'SC',
            'CS'
        ],
        {
            S: 'farmersdelight:straw',
            C: 'farmersdelight:canvas'
        }
    )
    e.remove({output: 'farmersdelight:organic_compost'})
    e.shapeless('farmersdelight:organic_compost', ['dirt', '8x #kubejs:compost'])
    e.remove({output: 'comforts:rope_and_nail'})
    e.shapeless('comforts:rope_and_nail', ['#kubejs:rope', '#forge:screws'])
    e.remove({id: 'farmersdelight:rope'})
    e.shaped(
        '4x farmersdelight:rope',
        [
            'S',
            'S'
        ],
        {
            S: "farmersdelight:straw"
        }
    )

    function canvasSigns(x, y) {
        e.remove({id: x})
        e.shaped(
            `7x ${x}`,
            [
                'SFS',
                'SCS',
                'SSS'
            ],
            {
                S: y,
                F: '#forge:tools/files',
                C: 'farmersdelight:canvas'
            }
        ).keepIngredient('#forge:tools/files')
    }
    canvasSigns("farmersdelight:canvas_sign", "#signs")
    canvasSigns("farmersdelight:hanging_canvas_sign", "#hanging_signs")
})

ServerEvents.tags('item', e => {
    compostable_items.forEach(key => e.add('kubejs:compost', key))
    e.add('kubejs:compost','bone_meal')
    e.add('kubejs:compost','rotten_flesh')
    e.add('kubejs:rope','farmersdelight:rope')
    e.add('kubejs:rope',"immersiveengineering:wirecoil_structure_rope")
})