/**
 * Compat for Super Factory Manager (SFM)
 */

if (Platform.isLoaded("sfm")) {
    console.log("SFM found, loading compat script...")

    ServerEvents.recipes(event => {
        //remove SFM recipes
        event.remove([
            { id: "sfm:manager" }, // done
            { id: "sfm:cable" }, // done
            { id: "sfm:tunnelled_manager" }, // done
            { id: "minecraft:tunnelled_manager_horizontal" }, // done
            { id: "minecraft:tunnelled_cable_vertical" }, // done
            { id: "minecraft:tunnelled_cable_horizontal" }, // done
            { id: "sfm:tough_cable" }, // done
            { id: "minecraft:tough_cable_horizontal" }, // done
            { id: "minecraft:tunnelled_manager_vertical" }, // ACTUALLY THE LABEL GUN!!! done
            { id: "sfm:disk" }, // done
            { id: "sfm:network_tool" }, // done
        ])

        //add recipes
        //computercraft version
        if (Platform.isLoaded("computercraft")) {
            console.log("ComputerCraft found. Adding CC:Tweaked versions of the SFM recipes...")

            event.shaped("sfm:manager", [
                "ABA",
                "BCB",
                "ABA"
            ], {
                A: "#gtceu:circuits/hv",
                B: "gtceu:hv_conveyor_module",
                C: "computercraft:computer_normal"
            }).id("kubejs:sfm_manager_gregged");
        }

        else {
            //non computercraft version
            console.log("ComputerCraft not found. Adding normal versions of the SFM recipes...")

            event.shaped("sfm:manager", [
                "ABA",
                "BCB",
                "ABA"
            ], {
                A: "#gtceu:circuits/hv",
                B: "gtceu:hv_conveyor_module",
                C: "gtceu:computer_monitor_cover"
            }).id("kubejs:sfm_manager_gregged");
        }

        event.shaped("sfm:labelgun", [
                " AB",
                " CD",
                "E  "
            ], {
                A: "gtceu:red_alloy_double_wire",
                B: "gtceu:data_stick",
                C: "#gtceu:circuits/hv",
                D: "gtceu:mv_sensor",
                E: "gtceu:polytetrafluoroethylene_rod"
            }).id("kubejs:sfm_label_gun_gregged");

        event.shaped("sfm:network_tool", [
                "AAA",
                "BCD",
                "AAA"
            ], {
                A: "gtceu:iron_plate",
                B: "gtceu:mv_emitter",
                C: "gtceu:data_stick",
                D: "gtceu:mv_sensor"
            }).id("kubejs:sfm_network_tool_gregged");

        //computercraft agnostic recipes
        event.shaped(
            Item.of("sfm:cable", 16),
            [
                "AAA",
                "BCB",
                "AAA"
            ], {
                A: "#forge:rubber_plates",
                B: "gtceu:electrum_single_wire",
                C: "gtceu:hv_conveyor_module"
            }).id("kubejs:sfm_cable_gregged");
        
        event.shaped("sfm:tunnelled_manager", [
                "AAA",
                "BCB",
                "AAA"
            ], {
                A: "#forge:plates/magnetic_steel",
                B: "gtceu:quantum_eye",
                C: "sfm:manager"
            }).id("kubejs:sfm_tunnelled_manager_gregged");
        
        event.shaped(
            Item.of("sfm:disk", 1),
            [
                "AAA",
                "ABA",
                "AAA"
            ], {
                A: "gtceu:polyethylene_plate",
                B: "gtceu:data_stick"
            }).id("kubejs:sfm_disk_gregged_polyethylene");
        
        event.shaped(
            Item.of("sfm:disk", 2),
            [
                "AAA",
                "ABA",
                "AAA"
            ], {
                A: "gtceu:polyvinyl_chloride_plate",
                B: "gtceu:data_stick"
            }).id("kubejs:sfm_disk_gregged_polyvinyl_chloride");
        
        event.shaped(
            Item.of("sfm:disk", 4),
            [
                "AAA",
                "ABA",
                "AAA"
            ], {
                A: "gtceu:polytetrafluoroethylene_plate",
                B: "gtceu:data_stick"
            }).id("kubejs:sfm_disk_gregged_ptfe");
        
        event.shaped(
            Item.of("sfm:disk", 8),
            [
                "AAA",
                "ABA",
                "AAA"
            ], {
                A: "gtceu:polybenzimidazole_plate",
                B: "gtceu:data_stick"
            }).id("kubejs:sfm_disk_gregged_pbd");
        
        event.shaped(
            Item.of("sfm:disk", 16),
            [
                "AAA",
                "ABA",
                "AAA"
            ], {
                A: "gtceu:polyethyl_cyanoacrylate_plate",
                B: "gtceu:data_stick"
            }).id("kubejs:sfm_disk_gregged_polyethyl_cyanoacrylate");
        
        event.shapeless(
            Item.of("sfm:tunnelled_cable", 8),
            [
                "sfm:cable",
                "sfm:cable",
                "sfm:cable",
                "sfm:cable",
                "sfm:cable",
                "sfm:cable",
                "sfm:cable",
                "sfm:cable",
                "gtceu:quantum_eye",
            ]).id("kubejs:sfm_tunnelled_cable_gregged");
        
        event.shapeless(
            Item.of("sfm:tough_cable", 8),
            [
                "sfm:cable",
                "sfm:cable",
                "sfm:cable",
                "sfm:cable",
                "sfm:cable",
                "sfm:cable",
                "sfm:cable",
                "sfm:cable",
                "#forge:dusts/obsidian",
            ]).id("kubejs:sfm_tough_cable_gregged");

            // assembler recipes (only cables for now)
            event.recipes.gtceu.assembler("cable_rubber")
                .circuit(4)
                .itemInputs("2x gtceu:electrum_single_wire", "1x gtceu:hv_conveyor_module")
                .inputFluids("gtceu:rubber 864")
                .itemOutputs("24x sfm:cable")
                .duration(60)
                .EUt(4096)
            
            event.recipes.gtceu.assembler("cable_silicone")
                .circuit(4)
                .itemInputs("2x gtceu:electrum_single_wire", "1x gtceu:hv_conveyor_module")
                .inputFluids("gtceu:silicone_rubber 432")
                .itemOutputs("24x sfm:cable")
                .duration(60)
                .EUt(4096)
            
            event.recipes.gtceu.assembler("cable_styrene_butadiene_rubber")
                .circuit(4)
                .itemInputs("2x gtceu:electrum_single_wire", "1x gtceu:hv_conveyor_module")
                .inputFluids("gtceu:styrene_butadiene_rubber 288")
                .itemOutputs("24x sfm:cable")
                .duration(60)
                .EUt(4096)
            
            event.recipes.gtceu.assembler("tough_inventory_cable_24")
                .circuit(4)
                .itemInputs("24x sfm:cable", "1x #forge:dusts/obsidian")
                .itemOutputs("24x sfm:tough_cable")
                .duration(60)
                .EUt(4096)
            
            event.recipes.gtceu.assembler("tunnelled_inventory_cable_24")
                .circuit(4)
                .itemInputs("24x sfm:cable", "1x gtceu:quantum_eye")
                .itemOutputs("24x sfm:tunnelled_cable")
                .duration(60)
                .EUt(4096)
    })

    console.log("SFM Loaded!")
}