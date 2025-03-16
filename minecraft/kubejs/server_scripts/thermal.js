ServerEvents.recipes(e => {
    // e.replaceInput({input: 'thermal:niter'}, '')
    e.remove({output: /thermal:niter/})

})