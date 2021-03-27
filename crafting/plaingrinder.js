onEvent('recipes', event => {

    var modIds = ['plaingrinder'];

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

    var dusts = ['plaingrinder:dust_coal','diamond','plaingrinder:dust_gold','plaingrinder:dust_iron','plaingrinder:dust_emerald','plaingrinder:dust_lapis']
    var outputs = ['minecraft:coal','minecraft:diamond','minecraft:gold_ingot','minecraft:iron_ingot','minecraft:emerald','minecraft:lapis_lazuli']

    const smeltDust = (input, output) => {
        event.blasting('2x ' + output, input).xp(1.0);
    }

    dusts.forEach(function(dust,index) {
        smeltDust(dust, outputs[index]);
    })

    if (Platform.isLoaded('desolation')) {
        smeltDust('desolation:activatedcharcoal','minecraft:charcoal');

        event.custom({
            'type': 'plaingrinder:grinder',
            'input': {
                'item': 'minecraft:charcoal'
            },
            'result': {
                'item': 'desolation:charcoal_bit',
                'count': 4
            }
        })   
    }


});