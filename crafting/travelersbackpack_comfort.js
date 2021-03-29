onEvent('item.tags', event => {

    var colors = ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black'];

    colors.forEach(function(color, index) {        
        event.get('lcmp:comforts/sleepingbags').add('comforts:sleeping_bag_' + color);
    })
    
})

onEvent('recipes', event => {

    var modIds = ['travelersbackpack'];

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

    const createBackpack = (sleepingBag) => {
        event.shaped('travelersbackpack:standard', [
            'XBX',
            'CDC',
            'XSX'
        ], {
            B: 'minecraft:gold_ingot',
            X: 'minecraft:leather',
            C: 'travelersbackpack:backpack_tank',
            D: '#forge:chests/wooden',
            S: sleepingBag
        })
    }

    if(Platform.isLoaded('comforts')) {
        console.info('Creating Traveler backpack using Comforts sleeping bags')
        createBackpack('#lcmp:comforts/sleepingbags')
    }

    if(Platform.isLoaded('upgrade_aquatic')) {
        console.info('Creating Traveler backpack using Upgrade Aquatic bedrolls')
        createBackpack('#upgrade_aquatic:bedrolls')
    }
    
})