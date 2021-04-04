// priority: 0

onEvent('recipes', event => {

    var modIds = ['atmospheric'];

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

    event.smelting('minecraft:green_dye', 'atmospheric:barrel_cactus')    
    
})