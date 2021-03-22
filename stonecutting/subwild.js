onEvent('recipes', event => {

    var modIds = ['subwild'];

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
    
    event.stonecutting('minecraft:mossy_cobblestone', 'subwild:mossy_stone')
    event.stonecutting('minecraft:mossy_cobblestone_stairs', 'subwild:mossy_stone')
    event.stonecutting('2x minecraft:mossy_cobblestone_slab', 'subwild:mossy_stone')
    event.stonecutting('2x minecraft:mossy_cobblestone_wall', 'subwild:mossy_stone')        

    event.stonecutting('minecraft:mossy_stone_bricks', 'subwild:mossy_stone')
    event.stonecutting('minecraft:mossy_stone_brick_stairs', 'subwild:mossy_stone')
    event.stonecutting('2x minecraft:mossy_stone_brick_slab', 'subwild:mossy_stone')
    event.stonecutting('minecraft:mossy_stone_brick_wall', 'subwild:mossy_stone')        

    if(Platform.isLoaded('variant16x')) {
        event.stonecutting('variant16x:mossy_stone_brick_pressure_plate', 'subwild:mossy_stone')
        event.stonecutting('variant16x:mossy_stone_brick_button', 'subwild:mossy_stone')
        event.stonecutting('variant16x:mossy_cobblestone_pressure_plate', 'subwild:mossy_stone')
        event.stonecutting('variant16x:mossy_cobblestone_button', 'subwild:mossy_stone')
    }

    if(Platform.isLoaded('quark')) {
        event.stonecutting('quark:mossy_cobblestone_bricks', 'subwild:mossy_stone')
        event.stonecutting('2x quark:mossy_cobblestone_bricks_slab', 'subwild:mossy_stone')
        event.stonecutting('quark:mossy_cobblestone_bricks_stairs', 'subwild:mossy_stone')
        event.stonecutting('quark:mossy_cobblestone_bricks_wall', 'subwild:mossy_stone')
        event.stonecutting('2x quark:mossy_cobblestone_bricks_vertical_slab', 'subwild:mossy_stone')
        event.stonecutting('2x quark:mossy_stone_brick_vertical_slab', 'subwild:mossy_stone')
        event.stonecutting('2x quark:mossy_cobblestone_vertical_slab', 'subwild:mossy_stone')
    }

    if(Platform.isLoaded('masonry')) {    
        event.stonecutting('masonry:andesitecobbledmossy', 'subwild:mossy_andesite')
        event.stonecutting('2x masonry:andesitecobbledmossywall', 'subwild:mossy_andesite')
        event.stonecutting('2x masonry:andesitecobbledmossyslab', 'subwild:mossy_andesite')
        event.stonecutting('masonry:andesitelargebricksmossy', 'subwild:mossy_andesite')
        event.stonecutting('2x masonry:andesitelargebricksmossywall', 'subwild:mossy_andesite')
        event.stonecutting('2x masonry:andesitelargebricksmossyslab', 'subwild:mossy_andesite')

        event.stonecutting('masonry:granitecobbledmossy', 'subwild:mossy_granite')
        event.stonecutting('2x masonry:granitecobbledmossywall', 'subwild:mossy_granite')
        event.stonecutting('2x masonry:granitecobbledmossyslab', 'subwild:mossy_granite')
        event.stonecutting('masonry:granitelargebricksmossy', 'subwild:mossy_granite')
        event.stonecutting('2x masonry:granitelargebricksmossywall', 'subwild:mossy_granite')
        event.stonecutting('2x masonry:granitelargebricksmossyslab', 'subwild:mossy_granite')

        event.stonecutting('masonry:dioritecobbledmossy', 'subwild:mossy_diorite')
        event.stonecutting('2x masonry:dioritecobbledmossywall', 'subwild:mossy_diorite')
        event.stonecutting('2x masonry:dioritecobbledmossyslab', 'subwild:mossy_diorite')
        event.stonecutting('masonry:dioritelargebricksmossy', 'subwild:mossy_diorite')
        event.stonecutting('2x masonry:dioritelargebricksmossywall', 'subwild:mossy_diorite')
        event.stonecutting('2x masonry:dioritelargebricksmossyslab', 'subwild:mossy_diorite')
    }

});