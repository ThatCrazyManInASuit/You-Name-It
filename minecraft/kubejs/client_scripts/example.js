JEIEvents.hideItems(e => {
    e.hide([
      /everythingcopper:.*copper_chain$/,
      /everythingcopper:.*copper_lantern$/,
      /gtceu:ulv.*$/, 
      'quark:rope', 
      '#create:crushed_raw_materials', 
      'create:cinder_flour',
      /create:.*zinc.*$/
    ])
    
  })