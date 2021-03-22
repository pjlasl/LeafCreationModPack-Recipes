onEvent('recipes', event => {

    var modType   = 'charm:woodcutting';  

    var woods = [{name: 'acacia', isLog: true, isStem: false, hasPlank: true},
                 {name: 'birch', isLog: true, isStem: false, hasPlank: true},
                 {name: 'dark_oak', isLog: true, isStem: false, hasPlank: true},
                 {name: 'jungle', isLog: true, isStem: false, hasPlank: true},
                 {name: 'oak', isLog: true, isStem: false, hasPlank: true},
                 {name: 'spruce', isLog: true, isStem: false, hasPlank: true},
                 {name: 'crimson', isLog: false, isStem: true, hasPlank: true},
                 {name: 'warped', isLog: false, isStem: true, hasPlank: true},
    ]

    var baseItems = [{name: 'chest', count: 1, usePlank: false, useStem: true},
                     {name: 'ladder', count: 3, usePlank: false, useStem: true}
    ]
    
    var modIds = ['charm'];

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

    var compat = Platform.isLoaded('quark') ? 'quark' : 'charm'    

    woods.forEach(function(wood, index) {
        
        var woodType = wood.isLog ? wood.name + '_log' : wood.name + '_stem';        
        
        baseItems.forEach(function(item, index) {
            multiCut(woodType, compat + ':' + wood.name + '_' + item.name, item.count);
        })

    })
    
})