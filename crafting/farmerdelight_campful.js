onEvent('item.tags', event => {
    event.get('lcmp:campful/campfires').add('campful:acacia_campfire');
    event.get('lcmp:campful/campfires').add('campful:birch_campfire');
    event.get('lcmp:campful/campfires').add('campful:crimson_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:dark_oak_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:jungle_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:spruce_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:warped_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:driftwood_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:river_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:soul_acacia_campfire');
    event.get('lcmp:campful/campfires').add('campful:soul_birch_campfire');
    event.get('lcmp:campful/campfires').add('campful:soul_crimson_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:soul_dark_oak_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:soul_jungle_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:soul_spruce_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:soul_warped_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:soul_driftwood_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:soul_river_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:ender_acacia_campfire');
    event.get('lcmp:campful/campfires').add('campful:ender_birch_campfire');
    event.get('lcmp:campful/campfires').add('campful:ender_crimson_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:ender_dark_oak_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:ender_jungle_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:ender_spruce_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:ender_warped_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:ender_driftwood_campfire');	 
    event.get('lcmp:campful/campfires').add('campful:ender_river_campfire');	 
})

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

    event.shaped('farmersdelight:stove', [
        'III',
        'B B',
        'BCB'
    ], {
        I: 'minecraft:iron_ingot',
        B: 'minecraft:bricks',
        C: '#lcmp:campful/campfires'
    })
    
})