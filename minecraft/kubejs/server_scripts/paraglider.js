ServerEvents.recipes(e => {
    e.remove({output: 'paraglider:paraglider'})
    e.recipes.shaped('paraglider:paraglider', [
        'RLR',
        'LTL',
        'SES'
    ],{
        R: 'farmersdelight:rope',
        L: 'leather',
        T: 'gtceu:treated_wood_frame',
        S: 'gtceu:treated_wood_rod',
        E: 'gtceu:steel_screw'
    })
})