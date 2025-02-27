ServerEvents.tags('item', e => {
    e.removeAll('twilightforest:portal/activator')
    e.add('twilightforest:portal/activator', 'kubejs:twilight_catalyst')
})