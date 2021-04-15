onEvent('item.tags', event => {
    event.get('lcmp:vines').add('minecraft:vine');
    event.get('lcmp:vines').add('biomesoplenty:willow_vine');    
})

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

    event.shapeless('subwild:mossy_dirt', ['#lcmp:vines','minecraft:dirt']);
    event.shapeless('subwild:mossy_sand', ['#lcmp:vines','minecraft:sand']);
    event.shapeless('subwild:mossy_red_sand', ['#lcmp:vines','minecraft:red_sand']);
    event.shapeless('subwild:mossy_gravel', ['#lcmp:vines','minecraft:gravel']);
    event.shapeless('subwild:mossy_stone', ['#lcmp:vines','minecraft:stone']);
    event.shapeless('subwild:mossy_granite', ['#lcmp:vines','minecraft:granite']);
    event.shapeless('subwild:mossy_diorite', ['#lcmp:vines','minecraft:diorite']);
    event.shapeless('subwild:mossy_andesite', ['#lcmp:vines','minecraft:andesite']);
    event.shapeless('subwild:mossy_sandstone', ['#lcmp:vines','minecraft:sandstone']);    
    event.shapeless('subwild:mossy_red_sandstone', ['#lcmp:vines','minecraft:red_sandstone']);
    event.shapeless('subwild:mossy_smooth_sandstone', ['#lcmp:vines','minecraft:smooth_sandstone']);    
    event.shapeless('subwild:mossy_smooth_red_sandstone', ['#lcmp:vines','minecraft:smooth_red_sandstone']);
    event.shapeless('subwild:mossy_blackstone', ['#lcmp:vines','minecraft:blackstone']);
    event.shapeless('subwild:mossy_basalt', ['#lcmp:vines','minecraft:basalt']);
    event.shapeless('subwild:mossy_obsidian', ['#lcmp:vines','minecraft:obsidian']);
})