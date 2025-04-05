JEIEvents.hideItems(e => {
    e.hide([
      /everythingcopper:.*copper_chain$/,
      /everythingcopper:.*copper_lantern$/,
      /gtceu:ulv.*$/, 
      'quark:rope', 
      '#create:crushed_raw_materials', 
      'create:cinder_flour',
      /create:.*zinc.*$/,
      /productivetrees:rubber_tree.*/
    ])
    let greg = Ingredient.of('#forge:dusts').getItemIds().toArray()
      .concat(Ingredient.of('#forge:plates').getItemIds().toArray())
      .concat(Ingredient.of('#forge:ingots').getItemIds().toArray())
      .filter((item) => /gtceu/.test(item))
    greg.forEach(x => {
      e.hide(x.replace('gtceu', 'chemlib'))
    });
  })