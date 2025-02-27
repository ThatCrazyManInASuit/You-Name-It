ServerEvents.recipes(e => {
    e.remove({output: 'botanypots:terracotta_hopper_botany_pot'})
    e.shaped(
        'botanypots:terracotta_hopper_botany_pot',
        [
            ' H ',
            'FBR',
            ' O '
        ],
        {
            H: 'create:mechanical_harvester',
            F: '#forge:tools/files',
            B: 'botanypots:terracotta_botany_pot',
            R: 'redstone_torch',
            O: 'hopper'
        }
    )
})