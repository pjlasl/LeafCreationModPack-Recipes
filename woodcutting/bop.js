onEvent('recipes', event => {
    
    var modId = 'biomesoplenty';
    
    var modType   = 'charm:woodcutting';  

    var woods = [
        {name: 'fir', isLog: true, isStem: false, hasPlank: true},
        {name: 'redwood', isLog: true, isStem: false, hasPlank: true},
        {name: 'cherry', isLog: true, isStem: false, hasPlank: true},
        {name: 'mahogany', isLog: true, isStem: false, hasPlank: true},
        {name: 'jacaranda', isLog: true, isStem: false, hasPlank: true},
        {name: 'palm', isLog: true, isStem: false, hasPlank: true},
        {name: 'willow', isLog: true, isStem: false, hasPlank: true},
        {name: 'dead', isLog: true, isStem: false, hasPlank: true},
        {name: 'magic', isLog: true, isStem: false, hasPlank: true},
        {name: 'umbran', isLog: true, isStem: false, hasPlank: true},
        {name: 'hellbark', isLog: true, isStem: false, hasPlank: true}    
    ]

    var items = [
        {name: 'chest', count: 1, usePlank: false, useStem: true, isBase: true},
        {name: 'bowl', count: 3, usePlank: true, useStem: true, isBase: true},
        {name: 'ladder', count: 3, usePlank: false, useStem: true, isBase: true},
        {name: 'stick', count: 8, usePlank: true, useStem: true, isBase: true},
        {name: 'crafting_table', count: 1, usePlank: false, useStem: true, isBase: true},
        {name: 'boat', count: 1, usePlank: false, useStem: false, isBase: false},
        {name: 'button', count: 4, usePlank: true, useStem: true, isBase: false},
        {name: 'door', count: 3, usePlank: true, useStem: true, isBase: false},
        {name: 'fence', count: 3, usePlank: true, useStem: true, isBase: false},
        {name: 'fence_gate', count: 2, usePlank: true, useStem: true, isBase: false},
        {name: 'planks', count: 4, usePlank: true, useStem: true, isBase: false},
        {name: 'pressure_plate', count: 4, usePlank: true, useStem: true, isBase: false},
        {name: 'slab', count: 8, usePlank: true, useStem: true, isBase: false},
        {name: 'stairs', count: 4, usePlank: true, useStem: true, isBase: false},
        {name: 'stripped', count: 1, usePlank: true, useStem: true, isBase: false},
        {name: 'trapdoor', count: 2, usePlank: true, useStem: true, isBase: false}
    ]
    
    var modIds = ['charm','biomesoplenty'];

    const IsModLoaded = (modId) => {
        if (!Platform.isLoaded(modId)) {
            return false;
        } else {
            return true;
        }
    }

    // Check for loaded Mods, exit if not present
    for (var i=0; i <= modIds.length - 1; i++) {
        if (!IsModLoaded(modIds[i])) return;
    }

    const multiCut = (woodType, item, count) => {
        event.custom({
            'type': modType,
            'ingredient': {
                'item': woodType
            },
            'result': item,
            'count': count
        })    
    }    

    woods.forEach(function(wood, index) {

        var woodType = wood.isLog ? wood.name + '_log' : wood.name + '_stem';        
        var modWoodType = modId + ':' + woodType;

        items.forEach(function(item, index) {

            if(item.isBase) {
                multiCut(modWoodType, 'minecraft:' + item.name, item.count);

                if (item.usePlank) {
                    multiCut(modId + ':' + wood.name + '_planks', 'minecraft:' + item.name, 1);
                }
            } else {

                if (item.name == 'stripped') {

                    if (Item.exists(modId + ':' + item.name + '_' + woodType)) {
                        multiCut(modWoodType, modId + ':' + item.name + '_' + woodType, item.count);
                    }                    
                } else {   
                    
                    if (wood.isStem && !item.useStem) {
                        return;
                    } 

                    if (Item.exists(modId + ':' + wood.name + '_' + item.name)) {
                        multiCut(modWoodType, modId + ':' + wood.name + '_' + item.name, item.count);
    
                        if (item.usePlank) {
                            multiCut(modId + ':' + wood.name + '_planks', modId + ':' + wood.name + '_' + item.name, item.count);
                        }
                    }                    
                }

            }

        });


    });
    
})