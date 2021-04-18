onEvent('recipes', event => {

    var modIds = ['autumnity'];

    const IsModLoaded = (modId) => {
        if (!Platform.isLoaded(modId)) {
            return false;
        } else {
            return true;
        }
    }

    // Check for loaded Mods, exit if not present
    modIds.forEach(function(mod, index) {
        if (!IsModLoaded(mod)) return;
    })

    event.shapeless('minecraft:slime_ball', ['3x autumnity:snail_slime']);
    
    // Craft a crafting table from maple planks
    event.shaped('minecraft:crafting_table', [
        'PP',
        'PP'
    ], {
        P: 'autumnity:maple_planks'
    })    
})