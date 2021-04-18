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

    const grindOre = (input, output, count) => {
        event.custom({
            'type': 'plaingrinder:grinder',
            'input': {
                'item': input
            },
            'result': {
                'item': output,
                'count': count
            }
        })  
    }

    if (Platform.isLoaded('rawore')) {
        grindOre('rawore:raw_iron','plaingrinder:dust_iron', 2);
        grindOre('rawore:raw_iron_block','plaingrinder:dust_iron', 18);
        grindOre('rawore:raw_gold','plaingrinder:dust_gold', 2);
        grindOre('rawore:raw_gold_block','plaingrinder:dust_gold', 18);
    }

    if (Platform.isLoaded('desolation')) {
        smeltDust('desolation:activatedcharcoal','minecraft:charcoal');
        grindOre('minecraft:charcoal','desolation:charcoal_bit',4)        
    }

    if (Platform.isLoaded('create')) {
        grindOre('minecraft:wheat','create:wheat_flour',1);
        grindOre('minecraft:netherrack','create:cinder_flour',2);        
    }


});