ServerEvents.recipes(e => {
    e.forEachRecipe({ type: "productivetrees:tree_pollination" }, x => {
        let recipe = JSON.parse(x.json)
        e.recipes.create.sequenced_assembly([
            recipe.result
        ], "dirt", [ 
            e.recipes.create.deploying("dirt", ["dirt", Item.of(recipe.leafA).withChance(.32)]),
            e.recipes.create.deploying("dirt", ["dirt", Item.of(recipe.leafB).withChance(.32)]),
            e.recipes.create.filling("dirt", ["dirt", Fluid.water(125)])
        ]).transitionalItem("dirt").loops(1)
    })
    e.remove({type: "productivetrees:tree_pollination"})
})