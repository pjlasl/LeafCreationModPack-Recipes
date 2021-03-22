onEvent('recipes', event => {

    var modIds = ['farmersdelight','campful'];

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

    var prefixs = ['normal','soul','ender'];
    var woods = ['acacia','birch','crimson','dark_oak','jungle','spruce','warped','driftwood','river'];
                    
    const createStove = (wood) => {

        var campfire = 'campful:' + wood + '_campfire';
		
        event.shaped('farmersdelight:stove', [
            'III',
            'B B',
            'BCB'
        ], {
            I: 'minecraft:iron_ingot',
            B: 'minecraft:bricks',
            C: campfire
        })
    }

    prefixs.forEach(function(prefix, index) {
        woods.forEach(function(wood, index) {
            var woodtype = prefix == 'normal' ? wood : prefix + '_' + wood;
            createStove(woodtype)
        })
    })
    
})