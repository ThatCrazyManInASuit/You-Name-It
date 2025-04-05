Ponder.registry((event) => {
    event
        .create("minecraft:shears")
        .tag("lytho:ponder_test")
        .scene("shear_sheep", "How to shear a sheep", (scene, util) => {
            scene.showStructure();
            scene.idle(10);

            const centerBlockPos = util.grid.at(2, 0, 2);
            const centerTop = util.vector.topOf(centerBlockPos);

            const entity = scene.world.createEntity("sheep", centerTop);

            scene.idle(10);
            /**
             * down, up, left, right to set where it should point at
             */
            scene.showControls(120, centerBlockPos.above(2), "down").rightClick().withItem("shears");

            scene.addKeyframe();
            /**
             *  [2.5, 2.5, 2.5] -> position at [x, y, z]
             */
            scene.text(50, "Right-click to shear the sheep", [2.5, 2.5, 2.5]).placeNearTarget();
            scene.idle(60);

            scene.addKeyframe();
            scene.idle(10);
            scene
                .text(40, "Shearing will drop 1 - 3 wool of the corresponding color", centerBlockPos.above(2))
                .placeNearTarget();

            scene.world.modifyEntity(entity, (e) => {
                e.setSheared(true);
            });
            /**
             * The first argument is the position, the second one the motion vector. I tried to simulate "shearing" :D
             */
            scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(-0.07, 0.4, 0), "white_wool");
            scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(-0.07, 0.4, -0.07), "white_wool");
            scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(0, 0.4, -0.07), "white_wool");

            scene.idle(60);
        });
    /*
    event.create("forbidden_arcanus:hephaestus_forge")
		.scene(
			"hephaestus",
			"Constructing the Hephaestus Forge",
			"kubejs:hephaestus_forge_scene",
			(scene, util) =>{
				scene.showStructure();
				scene.idle(20)
				scene.text(35, "The §9Hephaestus Forge §ris a 9x9 Multiblock.", [0, 1.5, 5])
					.independent();
				scene.idle(45)
				scene.world.hideSection([0,1,0,  10,4,10], Direction.down)
				scene.idle(10)
				scene.text(35, "This is a tutorial on how you can build it.", [0, 1.5, 5])
					.independent()
					.attachKeyFrame();
				scene.idle(25);
				scene.idle(5);
				scene.text(45, "Start by placing blocks of §9Arcane §9Chiseled Polished Darkstone §ron the highlighted spots", [5, 1.5, 5])
					.placeNearTarget();
				scene.idle(15)
				scene.world.showSection([5,1,5], Direction.down);
				scene.world.showSection([5,1,2], Direction.down);
				scene.world.showSection([3,1,3], Direction.down);
				scene.world.showSection([2,1,5], Direction.down);
				scene.world.showSection([3,1,7], Direction.down);
				scene.world.showSection([5,1,8], Direction.down);
				scene.world.showSection([7,1,7], Direction.down);
				scene.world.showSection([8,1,5], Direction.down);
				scene.world.showSection([7,1,3], Direction.down);
				scene.idle(40);
				scene.text(35, "Then, surround the center block with §9Chiseled Arcane Polished §9Darkstone", [4, 1.5, 5])
					.placeNearTarget();
				scene.idle(5)
				scene.world.showSection([4,1,5,  6,1,5], Direction.up);
				scene.world.showSection([5,1,4,  5,1,6], Direction.up);
				scene.idle(45);
				scene.text(35, "To finish the first layer, surround all blocks with §9Polished Darkstone", [0, 1.5, 5])
					.independent();
				scene.idle(5)
				scene.world.showSection([0,1,0,  10,1,10], Direction.up);
				scene.idle(45);
				scene.text(30, "Finally, place a §9Smithing Table §rin the middle...", [0, 1.5, 5])
					.independent()
					.attachKeyFrame();
				scene.world.setBlock([5,2,5], "minecraft:smithing_table", false);
				scene.idle(5);
				scene.world.showSection([5,2,5], Direction.down);
				scene.idle(35)
				scene.text(30, "...and right-click it with §4Mundabitur Dust", [0, 1.5, 5])
					.independent();
				scene.idle(5);
				scene.showControls(30, [5, 3.5, 4], "right")
					.rightClick()
					.withItem("forbidden_arcanus:mundabitur_dust");
				scene.idle(20)
				scene.world.createEntity("minecraft:lightning_bolt", [5, 3, 5]);
				scene.idle(5);
				scene.world.setBlock([5,2,5], "forbidden_arcanus:hephaestus_forge", true);
				scene.idle(10);
				scene.text(30, "And your §9Hephaestus Forge §rhas been Created!", [0, 1.5, 5])
					.independent()
					.attachKeyFrame();
				scene.idle(30);
	});*/
});