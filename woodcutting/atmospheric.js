// priority: 1

onEvent('recipes', event => {

    console.log('Adding Atmospheric Woodcutting Recipes');
    
    var modId = 'atmospheric';
    
    var modType   = 'charm:woodcutting';  

    var woods = [
        {name: 'aspen', isLog: true, isStem: false, hasPlank: true, subName: ''},
        {name: 'grimwood', isLog: true, isStem: false, hasPlank: true, subName: ''},
        {name: 'kousa', isLog: true, isStem: false, hasPlank: true, subName: ''},
        {name: 'morado', isLog: true, isStem: false, hasPlank: true, subName: ''},
        {name: 'rosewood', isLog: true, isStem: false, hasPlank: true, subName: ''},
        {name: 'yucca', isLog: true, isStem: false, hasPlank: true, subName: ''},
        {name: 'watchful_aspen', isLog: true, isStem: false, hasPlank: true, subName: 'aspen'},
    ]

    var baseItems = [{name: 'chest', count: 1, usePlank: false, useStem: true},
                     {name: 'bowl', count: 3, usePlank: true, useStem: true},
                     {name: 'ladder', count: 3, usePlank: false, useStem: true},
                     {name: 'stick', count: 8, usePlank: true, useStem: true},
                     {name: 'crafting_table', count: 1, usePlank: false, useStem: true}
    ]

    var items = [{name: 'boat', count: 1, usePlank: false, useStem: false},
                 {name: 'button', count: 4, usePlank: true, useStem: true},
                 {name: 'door', count: 3, usePlank: true, useStem: true},
                 {name: 'fence', count: 3, usePlank: true, useStem: true},
                 {name: 'fence_gate', count: 2, usePlank: true, useStem: true},
                 {name: 'planks', count: 4, usePlank: true, useStem: true},
                 {name: 'pressure_plate', count: 4, usePlank: true, useStem: true},
                 {name: 'slab', count: 8, usePlank: true, useStem: true},
                 {name: 'stairs', count: 4, usePlank: true, useStem: true},
                 {name: 'stripped', count: 1, usePlank: true, useStem: true},
                 {name: 'trapdoor', count: 2, usePlank: true, useStem: true},
                 {name: 'chest', count: 1, usePlank: false, useStem: true},
    ]

    var modIds = ['charm','atmospheric'];

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
        
        var woodName = wood.subName == '' ? wood.name : wood.subName;

        var woodType = wood.isLog ? wood.name + '_log' : wood.name + '_stem';        

        var modWoodType = modId + ':' + woodType;

        baseItems.forEach(function(item, index) {
            multiCut(modWoodType, 'minecraft:' + item.name, item.count);

            if (item.usePlank) {
                multiCut(modId + ':' + woodName + '_planks', 'minecraft:' + item.name, 1);
            }
        })

        items.forEach(function(item, index) {            
            if (item.name == 'stripped') {
                multiCut(modWoodType, modId + ':' + item.name + '_' + woodType, item.count);
            } else {
                if (item.name == 'stripped') {
                    multiCut(modWoodType, modId + ':' + item.name + '_' + woodType, item.count);
                } else {   
                    
                    if (wood.isStem && !item.useStem) {
                        return
                    } 

                    multiCut(modWoodType, modId + ':' + woodName + '_' + item.name, item.count);
    
                    if (item.usePlank) {
                        multiCut(modId + ':' + woodName + '_planks', modId + ':' + woodName + '_' + item.name, item.count);
                    }
                }
            }
        })

    })
})