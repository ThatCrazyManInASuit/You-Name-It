ServerEvents.recipes(e => {
    e.recipes.create.mixing(Fluid.of('kubejs:depthrock_slurry', 2432), ['2x obsidian', '2x gtceu:iron_dust', 'gtceu:calcite_dust']).superheated()
    e.recipes.create.filling('undergarden:depthrock', ['deepslate', Fluid.of('kubejs:depthrock_slurry', 608)])
    
    let inter1 = 'kubejs:incomplete_twilight_catalyst'
    e.recipes.create.sequenced_assembly([
		Item.of('kubejs:twilight_catalyst').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('undergarden:forgotten_ingot').withChance(8.0), // the rest of these items will be part of the scrap
		Item.of('undergarden:regalium_crystal').withChance(8.0),
		Item.of('redstone_dust').withChance(5.0),
		Item.of('gtceu:small_redstone_dust').withChance(2.0),
		Item.of('9x undergarden:forgotten_nugget').withChance(2.0),
		Item.of('2x undergarden:forgotten_nugget').withChance(2.0),
		'minecraft:redstone_block'
	], 'undergarden:forgotten_ingot', [ 
		e.recipes.create.deploying(inter1, [inter1, 'redstone']),
        e.recipes.create.filling(inter1, [Fluid.of('undergarden:virulent_mix_source', 250), inter1]),
		e.recipes.create.deploying(inter1, [inter1, 'undergarden:regalium_crystal']),
	]).transitionalItem(inter1).loops(4)
/** 
    let inter2 = 'undergarden:ca'
    e.recipes.create.sequenced_assembly([
		Item.of('kubejs:twilight_catalyst').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('undergarden:forgotten_ingot').withChance(8.0), // the rest of these items will be part of the scrap
		Item.of('undergarden:regalium_crystal').withChance(8.0),
		Item.of('redstone_dust').withChance(5.0),
		Item.of('gtceu:small_redstone_dust').withChance(2.0),
		Item.of('9x undergarden:forgotten_nugget').withChance(2.0),
		Item.of('2x undergarden:forgotten_nugget').withChance(2.0),
		'minecraft:redstone_block'
	], 'undergarden:forgotten_ingot', [ 
		e.recipes.create.deploying(inter2, [inter2, 'redstone']),
        e.recipes.create.filling(inter2, [Fluid.of('undergarden:virulent_mix_source', 250), inter2]),
		e.recipes.create.deploying(inter2, [inter2, 'undergarden:regalium_crystal']),
	]).transitionalItem(inter2).loops(4)*/
})

ServerEvents.tags('item', e => {
    e.removeAll('undergarden:portal_frame_blocks')
    e.add('undergarden:portal_frame_blocks', 'undergarden:depthrock_bricks')
})