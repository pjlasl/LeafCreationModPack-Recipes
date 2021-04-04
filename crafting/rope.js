onEvent('item.tags', event => {
	 event.get('lcmp:ropes').add('farmersdelight:rope');
	 event.get('lcmp:ropes').add('quark:rope');
	 event.get('lcmp:ropes').add('supplementaries:rope');	 
})

onEvent('recipes', event => {
	
	event.replaceInput({id: 'comforts:rope_and_nail'}, 'minecraft:string', '#lcmp:ropes');
	
	event.replaceInput({id: 'mcwbridges:rope_oak_bridge'}, 'minecraft:string', '#lcmp:ropes');
	event.replaceInput({id: 'mcwbridges:rope_oak_bridge_end'}, 'minecraft:string', '#lcmp:ropes');
	
	event.replaceInput({id: 'mcwbridges:rope_birch_bridge'}, 'minecraft:string', '#lcmp:ropes');
	event.replaceInput({id: 'mcwbridges:rope_birch_bridge_end'}, 'minecraft:string', '#lcmp:ropes');
	
	event.replaceInput({id: 'mcwbridges:rope_spruce_bridge'}, 'minecraft:string', '#lcmp:ropes');
	event.replaceInput({id: 'mcwbridges:rope_spruce_bridge_end'}, 'minecraft:string', '#lcmp:ropes');
	
	event.replaceInput({id: 'mcwbridges:rope_jungle_bridge'}, 'minecraft:string', '#lcmp:ropes');
	event.replaceInput({id: 'mcwbridges:rope_jungle_bridge_end'}, 'minecraft:string', '#lcmp:ropes');
	
	event.replaceInput({id: 'mcwbridges:rope_acacia_bridge'}, 'minecraft:string', '#lcmp:ropes');
	event.replaceInput({id: 'mcwbridges:rope_acacia_bridge_end'}, 'minecraft:string', '#lcmp:ropes');
	
	event.replaceInput({id: 'mcwbridges:rope_dark_oak_bridge'}, 'minecraft:string', '#lcmp:ropes');
	event.replaceInput({id: 'mcwbridges:rope_dark_oak_bridge_end'}, 'minecraft:string', '#lcmp:ropes');
	
	event.replaceInput({id: 'mcwbridges:rope_crimson_bridge'}, 'minecraft:string', '#lcmp:ropes');
	event.replaceInput({id: 'mcwbridges:rope_crimson_bridge_end'}, 'minecraft:string', '#lcmp:ropes');
	
	event.replaceInput({id: 'mcwbridges:rope_warped_bridge'}, 'minecraft:string', '#lcmp:ropes');
	event.replaceInput({id: 'mcwbridges:rope_warped_bridge_end'}, 'minecraft:string', '#lcmp:ropes');
})