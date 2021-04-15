onEvent('recipes', event => {

    var modIds = ['variant16x'];
    var colors = ['black','blue','brown','cyan','gray','green','light_blue','light_gray','lime','magenta','orange','pink','purple','red','white','yellow'];

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

    const blockCuts = (block, item, color) => {

        var colorBlock = color + '_' + block;
        var output = '2x variant16x:' + colorBlock + '_' + item;
        event.stonecutting(output, colorBlock);
    }

    colors.forEach(function(color, index) {
        blockCuts('concrete', 'slab', color);
        blockCuts('concrete', 'stairs', color);
        blockCuts('concrete', 'wall', color);
        blockCuts('concrete', 'pressure_plate', color);
        blockCuts('concrete', 'button', color);

        blockCuts('terracotta', 'slab', color);
        blockCuts('terracotta', 'stairs', color);
        blockCuts('terracotta', 'wall', color);
        blockCuts('terracotta', 'pressure_plate', color);
        blockCuts('terracotta', 'button', color);
    })

});