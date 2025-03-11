StartupEvents.registry('fluid', e => {
    e.create('peanut_butter')
        .displayName('Peanut Butter')
        .stillTexture('kubejs:fluid/peanut_butter_still')
        .flowingTexture('kubejs:fluid/peanut_butter')
        .viscosity(7500)
        .density(1090)
        .temperature(300)
        .bucketItem.modelJson({
            "parent": "minecraft:item/generated",
            "textures": {
                "layer0": "kubejs:item/peanut_butter_bucket"
            }
        })
    e.create('depthrock_slurry')
        .thickTexture(0x8B3A3A)
        .bucketColor(0x8B3A3A)
        .displayName('Depthrock Slurry')
        .noBlock()
})

StartupEvents.registry('item', e => {
    e.create('twilight_catalyst')
        .texture('kubejs:item/twilight_catalyst')
        .unstackable()
        .displayName('Twilight Catalyst')
        .glow(true)
    e.create('incomplete_twilight_catalyst')
        .texture('kubejs:item/incomplete_twilight_catalyst')
        .unstackable()
        .displayName('Incomplete Twilight Catalyst')
})

GTCEuStartupEvents.registry("gtceu:material", e => {
    e.create("signalum")
        .ingot()
        .color(0xff560a).iconSet("shiny")
        .components("3x copper", "1x silver", "4x redstone")
        .liquid()
        .flags(GTMaterialFlags.GENERATE_SMALL_GEAR)
    e.create("enderium")
        .ingot()
        .color(0x266e6f).iconSet("shiny")
        .components("3x lead", "1x diamond", "2x ender_pearl")
        .liquid()
        .flags(GTMaterialFlags.GENERATE_SMALL_GEAR)
        /** 
    e.create("lumium")
        .ingot()
        .color(0x266e6f).iconSet("shiny")
        .components("3x tin", "1x silver", "2x glowstone_dust")
        .liquid()
        .flags(GTMaterialFlags.GENERATE_SMALL_GEAR)*/    
});

GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('twilight_layer')
        .targets('#minecraft:stone_ore_replaceables')
        .dimensions('twilightforest:twilight_forest')
})

/** 
GTCEuStartupEvents.registry('gtceu:dimension_marker', event => {
    event.create('twilightforest:twilight_forest')  // the resource location for the dim
        .icon('twilightforest:twilight_portal_miniature_structure')  // the shown item in orevein widget
        .overrideName('Twilight Forest')  // nullable, the name will show on orevein widget, can be a translate key
})*/