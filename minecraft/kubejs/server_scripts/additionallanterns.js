

ServerEvents.recipes(e => {
    e.remove({id: /^everythingcopper:.*copper_chain$/})
    e.remove({id: /everythingcopper:.*copper_lantern$/})

    function lanternA(o,a) {
        e.remove({id: o})
        e.shapeless(o, [a, '#kubejs:metal_lantern', '#forge:tools/files']).keepIngredient('#forge:tools/files')
    }
    
    function lanternB(o,a) {
        e.remove({id: o})
        e.shaped(
            o,
            [
                'AAA',
                'ATA',
                'AAA'
            ],
            {
                A: a,
                T: 'torch'
            }
        )
    }
    
    function lanternC(o,a) {
        e.remove({id: o.replace(/^\dx\s/, '')})
        e.shaped(
            o,
            [
                'AAA',
                'ATA',
                'AAA'
            ],
            {
                A: a,
                T: '#kubejs:metal_lantern'
            }
        )
    }
    
    function chain(o,a,b) {
        e.remove({id: o.replace(/^\d*x\s/, '')})
        e.shaped(
            o,
            [
                'A ',
                'BF',
                'A '
            ],
            {
                A: a,
                B: b,
                F: '#forge:tools/files'
            }
        ).keepIngredient('#forge:tools/files')
    }

    [
        'andesite', 
        'blackstone', 
        'basalt',
        'cobblestone', 
        'cobbled_deepslate', 
        'dark_prismarine', 
        'deepslate_bricks', 
        'diorite', 
        'end_stone', 
        'granite', 
        'mossy_cobblestone', 
        'obsidian', 
        'red_nether_bricks', 
        'red_sandstone', 
        'smooth_stone', 
        'stone', 
        'stone_bricks',
    ].forEach(x => {
        lanternA(`additionallanterns:${x}_lantern`, x)
        chain(`16x additionallanterns:${x}_chain`, x, x)
    })

    lanternA("additionallanterns:amethyst_lantern", "minecraft:amethyst_shard")
    chain("4x additionallanterns:amethyst_chain", "minecraft:amethyst_shard", "minecraft:amethyst_block")
    lanternB("additionallanterns:iron_lantern", "iron_nugget")
    lanternB("additionallanterns:copper_lantern", "gtceu:copper_nugget")
    chain("additionallanterns:copper_chain", "gtceu:copper_nugget", 'copper_ingot')
    lanternB("additionallanterns:gold_lantern", "gold_nugget")
    chain("additionallanterns:gold_chain", 'gold_nugget', 'gold_ingot')
    lanternB("additionallanterns:netherite_lantern", "gtceu:netherite_nugget")
    chain("additionallanterns:netherite_chain", 'gtceu:netherite_nugget', 'netherite_ingot')
    lanternB("lantern", "gtceu:wrought_iron_nugget")
    lanternC("additionallanterns:bone_lantern", "gtceu:tiny_bone_dust")
    chain("8x additionallanterns:bone_chain", 'bone', 'bone_block')
    lanternA("additionallanterns:bricks_lantern", 'brick')
    chain("4x additionallanterns:bricks_chain", 'brick', 'bricks')
    lanternA("additionallanterns:crimson_lantern", 'crimson_stem')
    chain("16x additionallanterns:crimson_chain", 'crimson_stem', 'crimson_stem')
    lanternA("additionallanterns:warped_lantern", 'warped_stem')
    chain("16x additionallanterns:warped_chain", 'warped_stem', 'warped_stem')
    lanternA("additionallanterns:diamond_lantern", 'diamond')
    chain("additionallanterns:diamond_chain", 'diamond', 'diamond')
    lanternA("additionallanterns:emerald_lantern", 'emerald')
    chain("additionallanterns:emerald_chain", 'emerald', 'emerald')
    lanternA("additionallanterns:purpur_lantern", 'purpur_block')
    chain("16x additionallanterns:purpur_chain", 'purpur_block', 'purpur_block')
    lanternA("additionallanterns:quartz_lantern", 'quartz')
    chain("4x additionallanterns:quartz_chain", 'quartz', 'quartz')
    lanternA("additionallanterns:normal_nether_bricks_lantern", 'nether_brick')
    chain("4x additionallanterns:normal_nether_bricks_chain", 'nether_brick', 'nether_brick')
    lanternA("additionallanterns:normal_sandstone_lantern", 'sandstone')
    chain("16x additionallanterns:normal_sandstone_chain", 'sandstone', 'sandstone')
    lanternA("additionallanterns:prismarine_lantern", 'prismarine')
    chain("8x additionallanterns:prismarine_chain", 'prismarine_shard', 'prismarine_bricks')
})

ServerEvents.tags('item', e => {
    e.add('kubejs:metal_lantern',"additionallanterns:copper_lantern")
    e.add('kubejs:metal_lantern',"additionallanterns:netherite_lantern")
    e.add('kubejs:metal_lantern',"additionallanterns:iron_lantern")
    e.add('kubejs:metal_lantern',"additionallanterns:gold_lantern")
    e.add('kubejs:metal_lantern',"lantern")
})