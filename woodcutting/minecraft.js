onEvent('recipes', event => {

    var modType   = 'charm:woodcutting';  

    var woods = [{name: 'acacia', type: 'log', suffixs: [{name: 'log'},{name: 'planks'},{name: 'stripped'},{name: 'wood'}]},
                {name: 'birch', type: 'log', suffixs: [{name: 'log'},{name: 'planks'},{name: 'stripped'},{name: 'wood'}]},
                {name: 'dark_oak', type: 'log', suffixs: [{name: 'log'},{name: 'planks'},{name: 'stripped'},{name: 'wood'}]},
                {name: 'jungle', type: 'log', suffixs: [{name: 'log'},{name: 'planks'},{name: 'stripped'},{name: 'wood'}]},
                {name: 'oak', type: 'log', suffixs: [{name: 'log'},{name: 'planks'},{name: 'stripped'},{name: 'wood'}]},
                {name: 'spruce', type: 'log', suffixs: [{name: 'log'},{name: 'planks'},{name: 'stripped'},{name: 'wood'}]},
                {name: 'crimson', type: 'stem', suffixs: [{name: 'stem'},{name: 'planks'},{name: 'stripped'},{name: 'hyphea'}]},
                {name: 'warped', type: 'stem', suffixs: [{name: 'stem'},{name: 'planks'},{name: 'stripped'},{name: 'hyphea'}]}
    ]

    var items = [
        {name: 'chest', count: 1, isBase: true, craftWithPlanks: false, craftWithStem: true},
        {name: 'ladder', count: 3, isBase: true, craftWithPlanks: false, craftWithStem: true},
        {name: 'bowl', count: 2, isBase: true, craftWithPlanks: true, craftWithStem: true, plankCount: 1},        
        {name: 'stick', count: 8, isBase: true, craftWithPlanks: true, craftWithStem: true, plankCount: 2},
        {name: 'boat', count: 1, isBase: false, craftWithPlanks: false, craftWithStem: false},
        {name: 'button', count: 8, isBase: false, craftWithPlanks: true, craftWithStem: true, plankCount: 2},
        {name: 'door', count: 3, isBase: false, craftWithPlanks: false, craftWithStem: true},
        {name: 'fence', count: 3, isBase: false, craftWithPlanks: false, craftWithStem: true, plankCount: 2},
        {name: 'fence_gate', count: 1, isBase: false, craftWithPlanks: false, craftWithStem: true},
        {name: 'planks', count: 4, isBase: false, craftWithPlanks: false, craftWithStem: true},
        {name: 'sign', count: 1, isBase: false, craftWithPlanks: false, craftWithStem: true},
        {name: 'slab', count: 8, isBase: false, craftWithPlanks: true, craftWithStem: true, plankCount: 2},
        {name: 'stairs', count: 4, isBase: false, craftWithPlanks: true, craftWithStem: true, plankCount: 2},
        {name: 'trapdoor', count: 2, isBase: false, craftWithPlanks: false, craftWithStem: true},
    ]

    var baseItems = [{name: 'chest', count: 1, usePlank: false, useStem: true},
                     {name: 'ladder', count: 3, usePlank: false, useStem: true}
    ]

    var quarkItems = [
        {name: 'vertical_???_planks', count: 4, isBase: true, craftWithPlanks: true, craftWithStem: true, plankCount: 1},
        {name: '???_vertical_slab', count: 10, isBase: true, craftWithPlanks: true, craftWithStem: true, plankCount: 2},
        {name: '???_post', count: 10, isBase: true, craftWithPlanks: true, craftWithStem: true, plankCount: 2},        
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

    woods.forEach(function(wood, index) {

        wood.suffixs.forEach(function(suffix, index) {
            
            var woodType = suffix.name == 'stripped' ? suffix.name + '_' +  wood.name + '_' + wood.type : wood.name + '_' + suffix.name;
            
            //remove recipes created by charm       
            event.remove({input: 'minecraft:' + woodType, type: 'charm:woodcutting'})

            items.forEach(function(item, index) {
                
                var i = item.name;
                var c = suffix.name == 'planks' ? item.plankCount : item.count;

                if (suffix.name == 'planks' && !item.craftWithPlanks) {
                    return;
                } 

                if (item.isBase) {
                    multiCut(woodType, 'minecraft:' + i, c);
                } else {
                    multiCut(woodType, 'minecraft:' + wood.name + '_' + i, c);
                }                
            })            

        })

    })

    // CHARM 
    var compat = Platform.isLoaded('quark') ? 'quark' : 'charm';        

    woods.forEach(function(wood, index) {

        wood.suffixs.forEach(function(suffix, index) {            

            woodType = suffix.name == 'stripped' ? suffix.name + '_' +  wood.name + '_' + wood.type : wood.name + '_' + suffix.name;        
        
            baseItems.forEach(function(item, index) {

                if (wood.name == 'oak' && item.name == 'ladder' && compat == 'quark') {
                    compat = 'charm'
                } else {
                    compat = 'quark';
                }

                multiCut(woodType, compat + ':' + wood.name + '_' + item.name, item.count);
            })
        })
    })

    // QUARK
    woods.forEach(function(wood, index) {

        wood.suffixs.forEach(function(suffix, index) {            

            woodType = suffix.name == 'stripped' ? suffix.name + '_' +  wood.name + '_' + wood.type : wood.name + '_' + suffix.name;        
        
            quarkItems.forEach(function(item, index) {       
                
                var i = item.name.replace('???', wood.name);
                var c = suffix.name == 'planks' ? item.plankCount : item.count;

                if (suffix.name == 'planks' && !item.craftWithPlanks) {
                    return;
                }

                console.info('item to craft: ' + i);

                multiCut(woodType, 'quark:' + i, c);
            })
        })
    })
    
})