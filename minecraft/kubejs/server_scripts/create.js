ServerEvents.recipes(e => {
    // e.remove({mod: 'create'})
    // e.shapeless('gtceu:andesite_alloy_dust', ['2x gtceu:andesite_dust', '2x gtceu:tiny_iron_dust'])
    // e.smelting('create:andesite_alloy', 'gtceu:andesite_alloy_dust')
    e.remove({output: '#create:crushed_raw_materials'})
    e.replaceInput({input: 'create:copper_casing', not: [{output: 'create:copper_door'}, {output: 'create:portable_fluid_interface'}]}, 'create:copper_casing', 'create:fluid_tank')
    e.replaceInput({input: '#leaves', output: Fluid.of('create:tea')}, '#leaves', 'croptopia:tea_leaves')
    e.shaped(
        "create:copper_backtank",
            [
            'CSC',
            'ILI',
            'HC '
        ], {
            C: "gtceu:copper_plate",
            S: "create:shaft",
            I: "gtceu:small_iron_gear",
            L: "leather",
            H: "#forge:tools/hammers"
        }
    ).keepIngredient('#forge:tools')

    e.remove({output: 'create:wrench'})
    e.shaped(
        "create:wrench",
            [
            'BT',
            'IC',
            ' S'
        ], {
            B: "gtceu:brass_plate",
            I: "gtceu:iron_bolt",
            T: "gtceu:treated_wood_plate",
            C: "create:cogwheel",
            S: "stick"
        }
    )
    e.shaped(
        "create:schematicannon",
            [
            ' B ',
            'IBI',
            'SPS'
        ], {
            B: "gtceu:wrought_iron_block",
            I: "gtceu:wrought_iron_ingot",
            S: "stone_slab",
            P: "#planks"
        }
    )
    e.remove({output: 'create:whisk'})
    e.shaped(
        "create:whisk",
            [
            'DAC',
            'SIS'
        ], {
            D: '#forge:tools/screwdrivers',
            A: 'create:andesite_alloy',
            C: '#forge:tools/saws',
            S: 'gtceu:iron_screw',
            I: 'gtceu:iron_plate'
        }
    ).keepIngredient('#forge:tools')

    e.remove({output: 'create:mechanical_press'})
    e.shaped(
        "create:mechanical_press",
            [
            ' P ',
            'CAS',
            ' W '
        ], {
            P: 'create:piston_extension_pole',
            A: 'create:andesite_casing',
            C: '#forge:tools/saws',
            S: 'create:shaft',
            W: 'gtceu:double_wrought_iron_plate'
        }
    ).keepIngredient('#forge:tools')
    e.remove({output: 'create:mechanical_mixer'})
    e.shaped(
        "create:mechanical_mixer",
            [
            ' P ',
            'CAS',
            ' W '
        ], {
            P: 'create:piston_extension_pole',
            A: 'create:andesite_casing',
            C: '#forge:tools/saws',
            S: 'create:cogwheel',
            W: 'create:whisk'
        }
    ).keepIngredient('#forge:tools')
    e.remove({output: 'create:encased_fan'})
    e.shaped(
        "create:encased_fan",
            [
            ' S ',
            'CA ',
            ' R '
        ], {
            A: 'create:andesite_casing',
            C: '#forge:tools/saws',
            S: 'create:shaft',
            R: 'gtceu:iron_rotor'
        }
    )
    e.remove({output: 'create:millstone'})
    e.shaped(
        "create:millstone",
            [
            ' A ',
            'CS ',
            ' R '
        ], {
            A: 'create:andesite_casing',
            C: '#forge:tools/saws',
            S: 'gtceu:stone_gear',
            R: 'stone_slab'
        }
    ).keepIngredient('#forge:tools')
    e.remove({output: 'create:windmill_bearing'})
    e.shaped(
        "create:windmill_bearing",
            [
            'HWS',
            'WMW',
            'CWC'
        ], {
            H: '#forge:tools/hammers',
            W: 'gtceu:wrought_iron_plate',
            S: '#forge:tools/screwdrivers',
            M: 'create:mechanical_bearing',
            C: 'gtceu:wrought_iron_screw'
        }
    ).keepIngredient('#forge:tools')
    e.remove({output: 'create:mechanical_bearing'})
    e.shaped(
        "create:mechanical_bearing",
            [
            'WSW',
            'IAI',
            'BND'
        ], {
            B: '#forge:tools/saws',
            W: 'gtceu:wrought_iron_plate',
            S: 'slime_ball',
            A: 'create:andesite_casing',
            D: '#forge:tools/screwdrivers',
            N: 'create:shaft',
            I: 'gtceu:iron_screw'
        }
    ).keepIngredient('#forge:tools')
    e.remove({output: 'create:electron_tube'})
    e.shaped(
        "create:electron_tube",
            [
            'FG ',
            'TRC',
            ' W '
        ], {
            F: '#forge:tools/files',
            G: 'glass',
            T: 'redstone_torch',
            R: 'create:polished_rose_quartz',
            C: 'gtceu:copper_single_wire',
            W: 'gtceu:wrought_iron_plate'
        }
    ).keepIngredient('#forge:tools')
    e.remove({output: 'create:mechanical_crafter'})
    e.shaped(
        "create:mechanical_crafter",
            [
            ' CB',
            'SRO',
            ' P '
        ], {
            C: 'create:cogwheel',
            B: 'create:belt_connector',
            S: '#forge:tools/saws',
            R: 'create:brass_casing',
            O: 'create:crafter_slot_cover',
            P: 'create:precision_mechanism'
        }
    ).keepIngredient('#forge:tools')
    e.remove({output: 'create:crafter_slot_cover'})
    e.shaped(
        "create:crafter_slot_cover",
            [
            'SDS',
            ' B ',
            'S S'
        ], {
            S: 'gtceu:bronze_screw',
            D: '#forge:tools/screwdrivers',
            B: 'gtceu:brass_plate'
        }
    ).keepIngredient('#forge:tools')
    e.remove({output: 'create:water_wheel'})
    e.shaped(
        "create:water_wheel",
            [
            'PWP',
            'WAW',
            'SNP'
        ], {
            P: 'gtceu:wood_plate',
            W: 'gtceu:wrought_iron_screw',
            A: 'create:andesite_casing',
            S: '#forge:tools/screwdrivers',
            N: 'create:shaft'
        }
    ).keepIngredient('#forge:tools')
    e.remove({output: 'create:large_water_wheel'})
    e.shaped(
        "create:large_water_wheel",
            [
            'PWP',
            'WAW',
            'SWP'
        ], {
            P: 'gtceu:wood_plate',
            W: 'gtceu:wrought_iron_screw',
            A: 'create:water_wheel',
            S: '#forge:tools/screwdrivers',
        }
    ).keepIngredient('#forge:tools')
    e.remove({output: 'create:steam_engine'})
    e.shaped(
        "create:steam_engine",
            [
            'BSB',
            'WPW',
            'HCD'
        ], {
            B: 'gtceu:bronze_ring',
            S: 'create:shaft',
            W: 'gtceu:wrought_iron_screw',
            H: '#forge:tools/hammers',
            C: 'create:fluid_pipe',
            D: '#forge:tools/screwdrivers',
            P: 'gtceu:brass_plate'
        }
    ).keepIngredient('#forge:tools')
    e.remove({output: 'create:empty_blaze_burner'})
    e.shaped(
        "create:empty_blaze_burner",
            [
            'WFW',
            'WNW',
            'WWW'
        ], {
            W: 'gtceu:wrought_iron_rod',
            F: '#forge:tools/files',
            N: 'netherrack'
        }
    ).keepIngredient('#forge:tools')

    e.remove({output: 'create:speedometer'})
    e.shaped(
        "create:speedometer",
            [
            'MRS',
            'HAW',
            'PEP'
        ], {
            M: "gtceu:magnetic_iron_nugget",
            R: "gtceu:iron_rod",
            S: "gtceu:small_iron_spring",
            H: "create:shaft",
            A: "create:andesite_casing",
            W: '#forge:tools/saws',
            P: 'gtceu:aluminium_plate',
            E: '#forge:tools/hammers'
        }
    ).keepIngredient('#forge:tools')

    e.remove({output: 'create:stressometer'})
    e.shaped(
        "create:stressometer",
            [
            'CGS',
            'FAF',
            'SLW'
        ], {
            C: "gtceu:cupronickel_foil",
            G: "create:super_glue",
            S: "gtceu:steel_foil",
            F: "gtceu:fine_copper_wire",
            A: "create:andesite_casing",
            S: 'create:shaft',
            L: 'createaddition:alternator',
            W: '#forge:tools/saws'
        }
    ).keepIngredient('#forge:tools')
    e.remove({output: 'create:mechanical_arm'})
    e.recipes.create.mechanical_crafting('create:mechanical_arm', [
        'ABA',
        'B  ',
        'AH ',
        'GCP'
      ], {
        A: 'create:andesite_alloy',
        B: 'gtceu:double_brass_plate',
        C: 'create:brass_casing',
        P: 'create:precision_mechanism',
        H: 'gtceu:brass_ingot',
        G: 'gtceu:bronze_gear'
    })
   
    e.remove({output: 'create:basin'})
    e.shaped(
        "create:basin",
            [
            'WFW',
            'AHA',
            'WWW'
        ], {
            W: "gtceu:wrought_iron_plate",
            F: '#forge:tools/files',
            A: 'create:andesite_alloy',
            H: '#forge:tools/hammers',
        }
    ).keepIngredient('#forge:tools')

    e.remove({output: 'create:white_sail'})
    e.shaped(
        "16x create:white_sail",
            [
            'WSW',
            'SHS',
            'WSW'
        ], {
            W: "gtceu:wrought_iron_screw",
            S: 'stick',
            H: '#wool'
        }
    ).keepIngredient('#forge:tools')

    e.remove({output: 'create:clockwork_bearing'})
    e.shaped(
        "create:clockwork_bearing",
            [
            ' C ',
            'SBP',
            ' M '
        ], {
            C: "clock",
            S: '#forge:tools/saws',
            B: 'create:brass_casing',
            P: 'create:precision_mechanism',
            M: 'create:mechanical_bearing'
        }
    ).keepIngredient('#forge:tools')
    
    e.remove({output: 'create:mechanical_drill'})
    e.shaped(
        "create:mechanical_drill",
            [
            ' S ',
            'WAT',
            ' E '
        ], {
            S: 'create:shaft',
            W: '#forge:tools/saws',
            A: 'create:andesite_casing',
            T: 'gtceu:steel_plate',
            E: 'gtceu:steel_drill_head'
        }
    ).keepIngredient('#forge:tools')

    e.remove({output: 'create:depot'})
    e.shapeless('create:depot', ['#forge:tools/saws', 'create:andesite_casing', 'gtceu:wrought_iron_plate']).keepIngredient('#forge:tools')

    e.remove({output: 'create:weighted_ejector'})
    e.shaped(
        "create:weighted_ejector",
            [
            'WS ',
            'CAT',
            ' E '
        ], {
            S: 'create:precision_mechanism',
            W: '#forge:tools/saws',
            C: 'create:cogwheel',
            A: 'create:andesite_casing',
            T: 'create:shaft',
            E: 'gtceu:iron_spring'
        }
    ).keepIngredient('#forge:tools')

    e.remove({output: 'create:rope_pulley'})
    e.shaped(
        "create:rope_pulley",
            [
            'RRR',
            'SAH',
            'RWR'
        ], {
            R: 'farmersdelight:rope',
            S: '#forge:tools/saws',
            A: 'create:andesite_casing',
            H: 'create:shaft',
            W: 'gtceu:double_wrought_iron_plate'
        }
    ).keepIngredient('#forge:tools')
    e.remove({output: 'create:cart_assembler'})
    e.shaped(
        "create:cart_assembler",
            [
            'WSW',
            'RTR',
            'TET'
        ], {
            W: 'gtceu:wrought_iron_screw',
            S: 'slimeball',
            R: 'redstone',
            T: 'gtceu:steel_plate',
            E: '#forge:tools/screwdrivers'
        }
    ).keepIngredient('#forge:tools')

    e.remove({output: 'create:fluid_tank'})
    e.shaped(
        "create:fluid_tank",
            [
            'SPS',
            'PDP',
            'SPS'
        ], {
            S: 'gtceu:copper_screw',
            P: 'gtceu:copper_plate',
            D: '#forge:tools/screwdrivers'
        }
    ).keepIngredient('#forge:tools')
    e.remove({output: 'create:spout'})
    e.shaped(
        "create:spout",
            [
            ' F ',
            'WVS',
            ' L '
        ], {
            F: 'create:fluid_tank',
            W: 'create:water_wheel',
            V: 'create:fluid_valve',
            S: '#forge:tools/saws',
            L: 'gtceu:lead_ring'
        }
    ).keepIngredient('#forge:tools')
    
    e.remove({output: 'create:brass_casing'})
    e.shapeless('create:brass_casing', ['#forge:tools/wire_cutters', 'gtceu:brass_plate', 'gtceu:treated_wood_planks'])

    let gregPlates = Ingredient.of('#forge:plates').getItemIds().toArray()
    let hammerable = [
        
    ]

    gregPlates.filter((item) => /gtceu/.test(item))
    e.remove({type: 'create:pressing', output: '#forge:plates'})
    gregPlates.forEach(x => {
        e.recipes.create.pressing(Item.of(`${x}`).withChance(0.666), x.replace("_plate", '_ingot'))
    });
})