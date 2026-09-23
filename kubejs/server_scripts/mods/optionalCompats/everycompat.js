// every compat stonecutting recipes

if (Platform.isLoaded("everycomp")) {
    console.log("every compat detected. this may take a while")
    ServerEvents.recipes(event => {
        let woods = [
            ["twisted", "architects_palette"],
            ["aspen", "biomeswevegone"],
            ["baobab", "biomeswevegone"],
            ["blue_enchanted", "biomeswevegone"],
            ["cika", "biomeswevegone"],
            ["cypress", "biomeswevegone"],
            ["ebony", "biomeswevegone"],
            ["fir", "biomeswevegone"],
            ["florus", "biomeswevegone"],
            ["green_enchanted", "biomeswevegone"],
            ["holly", "biomeswevegone"],
            ["ironwood", "biomeswevegone"],
            ["jacaranda", "biomeswevegone"],
            ["mahogany", "biomeswevegone"],
            ["maple", "biomeswevegone"],
            ["palm", "biomeswevegone"],
            ["pine", "biomeswevegone"],
            ["rainbow_eucalyptus", "biomeswevegone"],
            ["redwood", "biomeswevegone"],
            ["sakura", "biomeswevegone"],
            ["skyris", "biomeswevegone"],
            ["white_mangrove", "biomeswevegone"],
            ["willow", "biomeswevegone"],
            ["witch_hazel", "biomeswevegone"],
            ["zelkova", "biomeswevegone"],
            ["rubber", "gtceu"],
        ]

        woods.forEach(wood => {
            if (Platform.isLoaded(wood[1])) {
                
                // planks
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_planks_mosaic`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_planks_panel`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_planks_shavings`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/basket_woven_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/boxed_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/brick_bond_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/bricky_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/cornered_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/crated_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/cross_laced_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/crossed_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/detailed_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/diagonal_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/diamond_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/double_herringbone_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/enclosed_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/fine_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/fine_vertical_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/framed_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/herringbone_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/hewn_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/laced_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/nailed_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/natural_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/pegged_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/polished_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/railed_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/shifted_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/slanted_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/smooth_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/stacked_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/thin_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/tiled_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/versailles_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/vertical_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/vertically_railed_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/whirlwind_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`everycomp:ch/${wood[1]}/wickered_${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                event.stonecutting(`${wood[1]}:${wood[0]}_planks`, `#everycomp:ch/${wood[1]}/${wood[0]}_planks`);
                
                // logs
                event.stonecutting(`everycomp:ch/${wood[1]}/bundled_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/center_cut_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/damaged_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/edge_cut_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/firewood_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/flowering_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/mixed_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/nailed_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/overgrown_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/planked_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/reinforced_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/${wood[0]}_log`);
                if (wood[0] !== "florus") {
                    event.stonecutting(`${wood[1]}:${wood[0]}_log`, `#everycomp:ch/${wood[1]}/${wood[0]}_log`);
                }
                else {
                    event.stonecutting(`${wood[1]}:${wood[0]}_stem`, `#everycomp:ch/${wood[1]}/${wood[0]}_log`);
                }
                
                // stripped logs
                event.stonecutting(`everycomp:ch/${wood[1]}/carved_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/chipped_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/d_sign_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/edged_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/f_sign_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/i_sign_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/k_sign_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/knotted_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/l_sign_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/layered_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/lumpy_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/patient_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/reinforced_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/sign_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/stern_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                event.stonecutting(`everycomp:ch/${wood[1]}/wise_stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                if (wood[0] !== "florus") {
                    event.stonecutting(`${wood[1]}:stripped_${wood[0]}_log`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                }
                else {
                    event.stonecutting(`${wood[1]}:stripped_${wood[0]}_stem`, `#everycomp:ch/${wood[1]}/stripped_${wood[0]}_log`);
                }
                
                // doors
                event.stonecutting(`everycomp:ch/${wood[1]}/barred_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/beach_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/boarded_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/dual_paneled_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/fortified_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/gated_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/glass_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/heavy_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/overgrown_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/paneled_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/paper_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/pressed_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/screen_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/secret_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/shack_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/sliding_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/supported_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/windowed_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/tiled_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`everycomp:ch/${wood[1]}/windowed_${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                event.stonecutting(`${wood[1]}:${wood[0]}_door`, `#everycomp:ch/${wood[1]}/${wood[0]}_door`);
                
                // trapdoors
                event.stonecutting(`everycomp:ch/${wood[1]}/airy_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/barred_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/checkered_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/classic_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/classic_windowed_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/cobweb_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/distorted_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/fancy_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/golden_barred_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/heavy_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/iron_barred_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/leafy_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/meshed_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/overgrown_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/pointless_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/slotted_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/solid_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/suspicious_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/twisted_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/vined_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/warted_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/windowed_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`everycomp:ch/${wood[1]}/woven_${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                event.stonecutting(`${wood[1]}:${wood[0]}_trapdoor`, `#everycomp:ch/${wood[1]}/${wood[0]}_trapdoor`);
                
                // torch and barrels
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_torch`, "#chipped:torch");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_barrel`, "#chipped:barrel");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_crate`, "#chipped:barrel");
                event.stonecutting(`everycomp:ch/${wood[1]}/reinforced_${wood[0]}_crate`, "#chipped:barrel");
                
                // glass blocks and panes
                event.stonecutting(`everycomp:ch/${wood[1]}/circle_${wood[0]}_glass`, "#chipped:glass");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_bared_glass`, "#chipped:glass");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_bordered_glass`, "#chipped:glass");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_diamond_bordered_glass`, "#chipped:glass");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_horizontal_lined_glass`, "#chipped:glass");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_large_diamond_glass`, "#chipped:glass");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_line_bared_glass`, "#chipped:glass");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_ornate_bared_glass`, "#chipped:glass");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_snowflake_glass`, "#chipped:glass");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_woven_glass`, "#chipped:glass");
                event.stonecutting(`everycomp:ch/${wood[1]}/square_${wood[0]}_glass`, "#chipped:glass");
                
                event.stonecutting(`everycomp:ch/${wood[1]}/circle_${wood[0]}_glass_pane`, "#chipped:glass_pane");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_bared_glass_pane`, "#chipped:glass_pane");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_bordered_glass_pane`, "#chipped:glass_pane");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_diamond_bordered_glass_pane`, "#chipped:glass_pane");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_horizontal_lined_glass_pane`, "#chipped:glass_pane");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_large_diamond_glass_pane`, "#chipped:glass_pane");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_line_bared_glass_pane`, "#chipped:glass_pane");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_ornate_bared_glass_pane`, "#chipped:glass_pane");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_snowflake_glass_pane`, "#chipped:glass_pane");
                event.stonecutting(`everycomp:ch/${wood[1]}/${wood[0]}_woven_glass_pane`, "#chipped:glass_pane");
                event.stonecutting(`everycomp:ch/${wood[1]}/square_${wood[0]}_glass_pane`, "#chipped:glass_pane");
            }
        })
            
            // leaves
        let leaves = [
            ["flowering_palo_verde", "biomeswevegone"],
            ["yellow_oak", "mcwholidays"],
            ["orange_oak", "mcwholidays"],
            ["red_oak", "mcwholidays"],
            ["brown_oak", "mcwholidays"],
            ["mixed_oak", "mcwholidays"],
            ["snowy_oak", "mcwholidays"],
            ["snowy_spruce", "mcwholidays"],
            ["twisted", "architects_palette"],
            ["aspen", "biomeswevegone"],
            ["baobab", "biomeswevegone"],
            ["blue_enchanted", "biomeswevegone"],
            ["cika", "biomeswevegone"],
            ["cypress", "biomeswevegone"],
            ["ebony", "biomeswevegone"],
            ["fir", "biomeswevegone"],
            ["green_enchanted", "biomeswevegone"],
            ["holly", "biomeswevegone"],
            ["ironwood", "biomeswevegone"],
            ["jacaranda", "biomeswevegone"],
            ["mahogany", "biomeswevegone"],
            ["maple", "biomeswevegone"],
            ["palm", "biomeswevegone"],
            ["pine", "biomeswevegone"],
            ["rainbow_eucalyptus", "biomeswevegone"],
            ["redwood", "biomeswevegone"],
            ["skyris", "biomeswevegone"],
            ["white_mangrove", "biomeswevegone"],
            ["willow", "biomeswevegone"],
            ["witch_hazel", "biomeswevegone"],
            ["zelkova", "biomeswevegone"],
            ["palo_verde", "biomeswevegone"],
            ["araucaria", "biomeswevegone"],
            ["ripe_baobab", "biomeswevegone"],
            ["flowering_baobab", "biomeswevegone"],
            ["blue_spruce", "biomeswevegone"],
            ["blooming_witch_hazel", "biomeswevegone"],
            ["brown_birch", "biomeswevegone"],
            ["brown_oak", "biomeswevegone"],
            ["brown_zelkova", "biomeswevegone"],
            ["ripe_orchard", "biomeswevegone"],
            ["flowering_orchard", "biomeswevegone"],
            ["holly_berry", "biomeswevegone"],
            ["indigo_jacaranda", "biomeswevegone"],
            ["flowering_jacaranda", "biomeswevegone"],
            ["flowering_indigo_jacaranda", "biomeswevegone"],
            ["yucca", "biomeswevegone"],
            ["ripe_yucca", "biomeswevegone"],
            ["flowering_yucca", "biomeswevegone"],
            ["orange_birch", "biomeswevegone"],
            ["orange_oak", "biomeswevegone"],
            ["orange_spruce", "biomeswevegone"],
            ["orchard", "biomeswevegone"],
            ["red_birch", "biomeswevegone"],
            ["red_maple", "biomeswevegone"],
            ["red_oak", "biomeswevegone"],
            ["red_spruce", "biomeswevegone"],
            ["silver_maple", "biomeswevegone"],
            ["green_apple_skyris", "biomeswevegone"],
            ["flowering_skyris", "biomeswevegone"],
            ["flowering_ironwood", "biomeswevegone"],
            ["white_sakura", "biomeswevegone"],
            ["yellow_sakura", "biomeswevegone"],
            ["yellow_birch", "biomeswevegone"],
            ["yellow_spruce", "biomeswevegone"],
            ["firecracker", "biomeswevegone"],
            ["rubber", "gtceu"],
        ]
        
        leaves.forEach(leaf => {
            if (Platform.isLoaded(leaf[1])) {
                event.stonecutting(`everycomp:ch/${leaf[1]}/apple_${leaf[0]}_leaves`, `#everycomp:ch/${leaf[1]}/${leaf[0]}_leaves`);
                event.stonecutting(`everycomp:ch/${leaf[1]}/cherry_${leaf[0]}_leaves`, `#everycomp:ch/${leaf[1]}/${leaf[0]}_leaves`);
                event.stonecutting(`everycomp:ch/${leaf[1]}/frosted_${leaf[0]}_leaves`, `#everycomp:ch/${leaf[1]}/${leaf[0]}_leaves`);
                event.stonecutting(`everycomp:ch/${leaf[1]}/golden_apple_${leaf[0]}_leaves`, `#everycomp:ch/${leaf[1]}/${leaf[0]}_leaves`);
                event.stonecutting(`everycomp:ch/${leaf[1]}/golden_cherry_${leaf[0]}_leaves`, `#everycomp:ch/${leaf[1]}/${leaf[0]}_leaves`);
                event.stonecutting(`everycomp:ch/${leaf[1]}/magenta_flower_${leaf[0]}_leaves`, `#everycomp:ch/${leaf[1]}/${leaf[0]}_leaves`);
                event.stonecutting(`everycomp:ch/${leaf[1]}/white_flower_${leaf[0]}_leaves`, `#everycomp:ch/${leaf[1]}/${leaf[0]}_leaves`);
                event.stonecutting(`everycomp:ch/${leaf[1]}/dead_${leaf[0]}_leaves`, `#everycomp:ch/${leaf[1]}/${leaf[0]}_leaves`);
                event.stonecutting(`everycomp:ch/${leaf[1]}/golden_${leaf[0]}_leaves`, `#everycomp:ch/${leaf[1]}/${leaf[0]}_leaves`);
                event.stonecutting(`everycomp:ch/${leaf[1]}/orange_${leaf[0]}_leaves`, `#everycomp:ch/${leaf[1]}/${leaf[0]}_leaves`);
                if (leaf[0] !== "maple") {
                    event.stonecutting(`everycomp:ch/${leaf[1]}/red_${leaf[0]}_leaves`, `#everycomp:ch/${leaf[1]}/${leaf[0]}_leaves`);
                }
                event.stonecutting(`${leaf[1]}:${leaf[0]}_leaves`, `#everycomp:ch/${leaf[1]}/${leaf[0]}_leaves`);
            }
        })
        
        console.log("every compat + chipped express. finally...")

    })
}