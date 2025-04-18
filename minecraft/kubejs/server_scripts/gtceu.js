//priority: 2

ServerEvents.recipes(e => {
    e.shapeless('gtceu:wood_plate', ['#forge:tools/saws', '2x #planks']).keepIngredient('#forge:tools/saws')
    e.shapeless('gtceu:treated_wood_plate', ['#forge:tools/saws', '2x gtceu:treated_wood_planks']).keepIngredient('#forge:tools/saws')
    // e.remove({type: 'gtceu:compressor', output: 'gtceu:plant_ball'})
    e.recipes.gtceu.compressor("compressor_plant_ball")
            .itemInputs("8x #kubejs:compost")
            .itemOutputs("gtceu:plant_ball")
            .duration(300)
            .EUt(2)
    e.recipes.create.pressing("gtceu:plant_ball", '8x #kubejs:compost')
    e.forEachRecipe({ type: "gtceu:mixer" }, x => {
        let recipe = JSON.parse(x.json)
        let simple = {
            inputs: [],
            outputs: [],
            voltage: recipe.tickInputs.eu[0].content
        }
        if (simple.voltage <= 32) {
            if (recipe.inputs.item) {
                recipe.inputs.item.forEach(b => {
                    if (!b.content.ingredient) {
                        return
                    }
                    if (!b.content.ingredient.item) {
                        simple.inputs.push(`${Math.trunc(b.content.count)}x #${b.content.ingredient.tag}`)
                    } else {
                        simple.inputs.push(`${Math.trunc(b.content.count)}x ${b.content.ingredient.item}`)
                    }
                })
            }
            
            if (recipe.outputs.item) {
                recipe.outputs.item.forEach(b => {
                    simple.outputs.push(`${Math.trunc(b.content.count)}x ${b.content.ingredient.item}`)
                })
            }
            let fICount = 0
            let fOCount = 0
            if (recipe.inputs.fluid) {
                recipe.inputs.fluid.forEach(b => {
                    if (b.content.value) {
                        if (!b.content.value[0].fluid) {
                            simple.inputs.push({fluidTag: b.content.value[0].tag, amount: b.content.amount})
                        } else {
                            simple.inputs.push(Fluid.of(`${b.content.value[0].fluid}`,b.content.amount))
                        }
                    }
                    fICount++
                })
            }
            if (recipe.outputs.fluid) {
                recipe.outputs.fluid.forEach(b => {
                    simple.outputs.push(Fluid.of(`${b.content.value[0].fluid}`,b.content.amount))
                    fOCount++
                })
            }
            if (fICount <= 2 && fOCount <= 2) {
                e.recipes.create.mixing(simple.outputs, simple.inputs)
            }
        }    
    })
    e.forEachRecipe({ type: "gtceu:ore_washer" }, x => {
        let recipe = JSON.parse(x.json)
        if (recipe.inputs.fluid[0].content.value[0].tag == "forge:water") {
            let simple = {
                input: Ingredient.of(`#${recipe.inputs.item[0].content.ingredient.tag}`),
                outputs: []
            }
            recipe.outputs.item.forEach(b => {
                simple.outputs.push(Item.of(`${b.content.ingredient.item}`).withChance(b.chance / 10000))
            })
            e.recipes.create.splashing(simple.outputs, simple.input)
        }
    })

    e.forEachRecipe({ type: "gtceu:macerator" }, x => {
        let recipe = JSON.parse(x.json)
    
        let simple = {
            input: null,
            outputs: [],
            voltage: recipe.tickInputs.eu[0].content
        }
        if (simple.voltage <= 32) {
        let inputIngredient = recipe.inputs.item[0].content.ingredient
        if (!inputIngredient) {
            return
        }
        simple.input = inputIngredient.tag ? Ingredient.of(`#${inputIngredient.tag}`) : Item.of(inputIngredient.item)
        recipe.outputs.item.forEach(b => {
            simple.outputs.push(Item.of(b.content.ingredient.item).withChance(b.chance / 10000))
        })
        e.recipes.create.crushing(simple.outputs, simple.input).processingTime(recipe.duration*2)
        }
    })
    e.remove({output: '#forge:dusts', input: '#forge:tools/mortars', not: [{output: 'gtceu:coal_dust'}, {output: 'gtceu:coke_dust'}]})
    e.forEachRecipe({ type: "gtceu:extractor" }, x => {
        let recipe = JSON.parse(x.json)
        if (recipe.category == "gtceu:extractor_recycling" && recipe.tickInputs.eu[0].content <= 128) {
            let simple = {
                input: null,
                outputFluid: null,
                outputItem: null,
                voltage: recipe.tickInputs.eu[0].content
            }
                
            // Handle input (tag or item)
            let inputIngredient = recipe.inputs.item[0].content.ingredient
            simple.input = inputIngredient.tag ? Ingredient.of(`#${inputIngredient.tag}`) : Item.of(inputIngredient.item)
            
            // Handle fluid output
            let fluidOutput = recipe.outputs.fluid[0].content
            simple.outputFluid = Fluid.of(fluidOutput.value[0].fluid, fluidOutput.amount)
            
            // Handle optional item outputs
            if (recipe.outputs.item) {
                simple.outputItem = Item.of(`${recipe.outputs.item[0].content.count}x ${recipe.outputs.item[0].content.ingredient.item}`).withChance(recipe.outputs.item[0].chance / 10000)
            }
            
            // Register recipe as mixing
            if (simple.voltage <= 32) {
                if (recipe.outputs.item) {
                    e.recipes.create.mixing([simple.outputFluid, simple.outputItem], simple.input).heated()
                } else {
                    e.recipes.create.mixing([simple.outputFluid], simple.input).heated()
                    if (simple.outputFluid == Fluid.of('gtceu:zinc', 1296)) {console.log(simple.input)}
                }
            } else {
                if (recipe.outputs.item) {
                    e.recipes.create.mixing([simple.outputFluid, simple.outputItem], simple.input).superheated()
                } else {
                    e.recipes.create.mixing([simple.outputFluid], simple.input).superheated()
                }
            }
        }
    })
    e.forEachRecipe({ type: "gtceu:fluid_solidifier" }, x => {
        let recipe = JSON.parse(x.json)
        if (recipe.inputs.item[0].content.ingredient.item == 'gtceu:ingot_casting_mold') {
            let simple = {
                input: null,
            }
            // Handle input (tag or item)
            let fluidInput = recipe.inputs.fluid[0].content
            simple.input = fluidInput.value[0].tag ? {tag: fluidInput.value[0].tag, amount: fluidInput.amount} : Fluid.of(`${fluidInput.value[0].fluid}`, fluidInput.amount)
            e.recipes.create.filling(recipe.outputs.item[0].content.ingredient.item, [{fluidTag: fluidInput.value[0].tag, amount: fluidInput.amount}, 'gtceu:brick_wooden_form'])
        }
    })
    e.recipes.create.mixing(Fluid.of('gtceu:cupronickel', 2), [{fluidTag: 'forge:annealed_copper', amount: 1},{fluidTag: 'forge:nickel', amount: 1}]).heated()
    e.recipes.create.mixing(Fluid.of('gtceu:cupronickel', 2), [{fluidTag: 'forge:copper', amount: 1},{fluidTag: 'forge:nickel', amount: 1}]).heated()
    e.recipes.create.mixing(Fluid.of('gtceu:bronze', 4), [{fluidTag: 'forge:annealed_copper', amount: 3},{fluidTag: 'forge:tin', amount: 1}]).heated()
    e.recipes.create.mixing(Fluid.of('gtceu:bronze', 4), [{fluidTag: 'forge:copper', amount: 3},{fluidTag: 'forge:tin', amount: 1}]).heated()
    e.recipes.create.mixing(Fluid.of('gtceu:battery_alloy', 5), [{fluidTag: 'forge:antimony', amount: 1},{fluidTag: 'forge:lead', amount: 4}]).heated()
    e.recipes.create.mixing(Fluid.of('gtceu:brass', 4), [{fluidTag: 'forge:annealed_copper', amount: 3},{fluidTag: 'forge:zinc', amount: 1}]).heated()
    e.recipes.create.mixing(Fluid.of('gtceu:brass', 4), [{fluidTag: 'forge:copper', amount: 3},{fluidTag: 'forge:zinc', amount: 1}]).heated()
    e.recipes.create.mixing(Fluid.of('gtceu:tin_alloy', 2), [{fluidTag: 'forge:wrought_iron', amount: 1},{fluidTag: 'forge:tin', amount: 1}]).heated()
    e.recipes.create.mixing(Fluid.of('gtceu:tin_alloy', 2), [{fluidTag: 'forge:iron', amount: 1},{fluidTag: 'forge:tin', amount: 1}]).heated()
    e.recipes.create.mixing(Fluid.of('gtceu:invar', 3), [{fluidTag: 'forge:wrought_iron', amount: 2},{fluidTag: 'forge:nickel', amount: 1}]).heated()
    e.recipes.create.mixing(Fluid.of('gtceu:invar', 3), [{fluidTag: 'forge:iron', amount: 2},{fluidTag: 'forge:nickel', amount: 1}]).heated()
    e.recipes.create.mixing(Fluid.of('gtceu:magnalium', 3), [{fluidTag: 'forge:magnesium', amount: 1},{fluidTag: 'forge:aluminium', amount: 2}]).heated()
    e.recipes.create.mixing('granite', ['diorite', 'quartz']).heated()
    e.recipes.create.mixing('diorite', ['cobblestone', 'quartz']).heated()
    e.recipes.create.mixing('2x andesite', ['cobblestone', 'diorite']).heated()
    e.recipes.create.mixing(Fluid.of('gtceu:red_alloy', 1), [{fluidTag: 'forge:annealed_copper', amount: 1},{fluidTag: 'forge:redstone', amount: 4}]).heated()
    e.recipes.create.mixing(Fluid.of('gtceu:red_alloy', 1), [{fluidTag: 'forge:copper', amount: 1},{fluidTag: 'forge:redstone', amount: 4}]).heated()
    e.recipes.create.mixing(Fluid.of('gtceu:electrum', 2), [{fluidTag: 'forge:gold', amount: 1},{fluidTag: 'forge:silver', amount: 1}]).heated()

    e.recipes.create.deploying('gtceu:firebrick', ['twilightforest:lamp_of_cinders', 'gtceu:firebrick_dust']).keepIngredient('twilightforest:lamp_of_cinders')
    e.shapeless('gtceu:firebrick', ['twilightforest:lamp_of_cinders', '#forge:tools/mortars', 'bricks']).keepIngredient('twilightforest:lamp_of_cinders').keepIngredient('#forge:tools/mortars')
    e.remove({output: 'gtceu:lp_steam_liquid_boiler'})
    e.shapeless('gtceu:lp_steam_liquid_boiler', ['gtceu:lp_steam_solid_boiler', 'gtceu:glass_plate'])
    e.remove({output: 'gtceu:lp_steam_solid_boiler'})
    e.shaped('gtceu:lp_steam_solid_boiler',[
        'SPS',
        'ADC',
        'FGF'
    ],{
        S: 'gtceu:bronze_screw',
        P: 'gtceu:bronze_plate',
        A: '#forge:tools/saws',
        D: 'gtceu:bronze_drum',
        C: 'create:mechanical_pump',
        F: 'gtceu:firebrick',
        G: 'furnace'
    }).keepIngredient('#forge:tools')
    e.remove({output: 'gtceu:lp_steam_solar_boiler'})
    e.shaped('gtceu:lp_steam_solar_boiler',[
        'SS ',
        'GGP',
        'FBF'
    ],{
        S: 'gtceu:silver_foil',
        G: 'gtceu:glass_plate',
        F: 'gtceu:firebrick',
        B: 'gtceu:bronze_drum',
        P: 'create:mechanical_pump'
    })
    e.remove({output: 'gtceu:lp_steam_forge_hammer'})
    e.shaped('gtceu:lp_steam_forge_hammer',[
        'C A',
        'RMW',
        'FFF'
    ],{
        C: '#forge:tools/screwdrivers',
        A: '#forge:tools/saws',
        R: 'create:mechanical_press',
        W: 'create:water_wheel',
        F: 'gtceu:firebrick',
        M: 'gtceu:bronze_machine_casing'
    }).keepIngredient('#forge:tools')
    e.remove({output: 'croptopia:salt'})
    e.replaceInput({input: 'croptopia:salt'}, 'croptopia:salt', 'gtceu:salt_dust')
    e.remove({output: 'gtceu:lp_steam_macerator'})
    e.shaped('gtceu:lp_steam_macerator',[
        'C A',
        'RWR',
        'FMF'
    ],{
        C: '#forge:tools/screwdrivers',
        A: '#forge:tools/saws',
        R: 'create:crushing_wheel',
        W: 'create:water_wheel',
        F: 'gtceu:firebrick',
        M: 'gtceu:bronze_machine_casing'
    }).keepIngredient('#forge:tools')
    e.remove({output: 'gtceu:lp_steam_compressor'})
    e.shaped('gtceu:lp_steam_compressor',[
        'CWA',
        'PMR',
        'FBF'
    ],{
        C: '#forge:tools/screwdrivers',
        A: '#forge:tools/saws',
        R: 'create:mechanical_press',
        W: 'create:water_wheel',
        F: 'gtceu:firebrick',
        M: 'gtceu:bronze_machine_casing',
        P: 'create:precision_mechanism',
        F: 'create:basin'
    }).keepIngredient('#forge:tools')
    e.remove({output: 'gtceu:lp_steam_alloy_smelter'})
    e.shaped('gtceu:lp_steam_alloy_smelter',[
        'CWA',
        'PMR',
        'FBF'
    ],{
        C: '#forge:tools/screwdrivers',
        A: '#forge:tools/saws',
        R: 'create:spout',
        W: 'create:water_wheel',
        F: 'gtceu:firebrick',
        M: 'gtceu:bronze_machine_casing',
        P: 'create:mixer',
        B: 'create:basin'
    }).keepIngredient('#forge:tools')
    e.remove({output: 'gtceu:lp_steam_furnace'})
    e.shaped('gtceu:lp_steam_furnace',[
        'C A',
        'FUF'
    ],{
        C: '#forge:tools/screwdrivers',
        A: '#forge:tools/saws',
        U: 'furnace',
        F: 'gtceu:firebrick',
    }).keepIngredient('#forge:tools')
    e.remove({output: 'gtceu:lp_steam_extractor'})
    e.shaped('gtceu:lp_steam_extractor',[
        'CWA',
        'NMN',
        'F F'
    ],{
        C: '#forge:tools/screwdrivers',
        A: '#forge:tools/saws',
        W: 'create:water_wheel',
        F: 'gtceu:firebrick',
        M: 'gtceu:bronze_machine_casing',
        N: 'create:encased_fan'
    }).keepIngredient('#forge:tools')
})

/** 
GTCEuServerEvents.oreVeins(e => {
    e.modify("gtceu:sapphire_vein", vein => {
        vein.dimensions("twilightforest:twilight_forest")
        vein.layer("twilight_layer")
        vein.heightRangeUniform(-32, 12)
    })
    e.modify("gtceu:olivine_vein", vein => {
        vein.dimensions("twilightforest:twilight_forest")
        vein.layer("twilight_layer")
        vein.heightRangeUniform(-32, 12)
    })
    e.modify("gtceu:nickel_vein", vein => {
        vein.dimensions("twilightforest:twilight_forest")
        vein.layer("twilight_layer")
        vein.heightRangeUniform(-24, 0)
    })
    e.modify("gtceu:galena_vein", vein => {
        vein.dimensions("twilightforest:twilight_forest")
        vein.layer("twilight_layer")
        vein.heightRangeUniform(-24, 0)
    })
})*/