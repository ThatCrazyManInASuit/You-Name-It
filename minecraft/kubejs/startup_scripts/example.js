StartupEvents.registry('fluid', e => {
    // Basic "thick" (looks like lava) fluid with red tint
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