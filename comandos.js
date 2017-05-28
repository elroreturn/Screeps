// Activar modo seguro
Game.spawns['Spawn1'].room.controller.activateSafeMode();

// Construir una torre de defensa
Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );

// Matar una tropa
Game.creeps['Harvester1'].suicide()

// Crear BUILDER
Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 'Builder1', { role: 'builder' } );

// Crear UPGRADER
Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 'Upgrader1', { role: 'upgrader' } );

// Asignar role
Game.creeps['Upgrader1'].memory.role = 'upgrader';
Game.creeps['Harvester1'].memory.role = 'harvester';

// Crear harvester
Game.spawns['Spawn1'].createCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE],'HarvesterBig', { role: 'harvester' } );
Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 'Harvester1', { role: 'harvester'} );
Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 'Harvester2' );