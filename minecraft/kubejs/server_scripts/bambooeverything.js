

ServerEvents.recipes(e => {
    e.remove({id: 'bambooeverything:bamboo_dry_block'})
    e.remove({id: /^bambooeverything.*door$/})
    e.stonecutting('bambooeverything:dry_bamboo_bundle', 'minecraft:stripped_bamboo_block')
    function door(mat, output) {
        e.remove({id: output})
        e.shaped(
            `16x ${output}`,
            [
                'MM',
                'MM',
                'MM'
            ], {
                M: mat
            }
        )
    }

    door('bambooeverything:bamboo_bundle', 'bambooeverything:bamboo_door')
    door('bambooeverything:dry_bamboo_bundle', 'bambooeverything:dry_bamboo_door')

    function fence(mat, fence, gate) {
        e.remove({id: fence})
        e.shaped(
            `3x ${fence}`,
            [
                'MSM',
                'MSM'
            ], {
                M: mat,
                S: 'stick'
            }
        )
        e.remove({id: gate})
        e.shaped(
            gate,
            [
                'SMS',
                'SMS'
            ], {
                M: mat,
                S: 'stick'
            }
        )
    }

    fence('bambooeverything:bamboo_bundle', 'bambooeverything:bamboo_fence', 'bambooeverything:bamboo_fence_gate')
    fence('bambooeverything:dry_bamboo_bundle', 'bambooeverything:dry_bamboo_fence', 'bambooeverything:dry_bamboo_fence_gate')

    function slab(mat, output) {
        e.remove({id: output})
        e.shaped(
            `6x ${output}`,
            [
                'MMM'
            ], {
                M: mat,
            }
        )
        e.shapeless(`2x ${output}`, [mat, '#forge:tools/saws'])
    }

    slab('bambooeverything:bamboo_bundle', 'bambooeverything:bamboo_slab')
    slab('bambooeverything:dry_bamboo_bundle', 'bambooeverything:dry_bamboo_slab')

    function stair(mat, output) {
        e.remove({id: output})
        e.shaped(
            `6x ${output}`,
            [
                'M  ',
                'MM ',
                'MMM'
            ], {
                M: mat,
            }
        )
    }

    stair('bambooeverything:bamboo_bundle', 'bambooeverything:bamboo_stairs')
    stair('bambooeverything:dry_bamboo_bundle', 'bambooeverything:dry_bamboo_stairs')

    function trapdoor(mat, output) {
        e.remove({id: output})
        e.shaped(
            `32x ${output}`,
            [
                'MMM',
                'MMM'
            ], {
                M: mat,
            }
        )
    }

    trapdoor('bambooeverything:bamboo_bundle', 'bambooeverything:bamboo_trapdoor')
    trapdoor('bambooeverything:dry_bamboo_bundle', 'bambooeverything:dry_bamboo_trapdoor')
})