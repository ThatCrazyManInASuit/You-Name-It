ServerEvents.recipes(e => {
    e.remove({output: 'sophisticatedbackpacks:backpack'})
    e.shaped('sophisticatedbackpacks:backpack', [
        'SRS',
        'PAP',
        'RWR'
    ], {
        S: 'gtceu:steel_screw',
        R: 'gtceu:steel_rod',
        P: 'toolbelt:pouch',
        A: 'thermal:satchel',
        W: 'gtceu:steel_plate'
    })
})