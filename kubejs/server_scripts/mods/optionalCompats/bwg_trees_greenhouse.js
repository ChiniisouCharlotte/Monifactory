    /*  Greenhouse Recipes  */
if (Platform.isLoaded("biomeswevegone")) {
    ServerEvents.recipes(event => {
        console.log("BWG found, loading compat scripts...")
        function boost(input, factor) {
            let boosted = [];
            input.forEach(element => {
                let item = Item.of(element);
                let curCount = item.getCount() * factor;
                let type = item.getId();
                while (curCount > item.maxStackSize) {
                    boosted.push(Item.of(type, item.maxStackSize));
                    curCount -= item.maxStackSize;
                }
                if (curCount > 0) boosted.push(Item.of(type, curCount));
            })
            return boosted;
        }

        /**
         * @param {string} mod Input item mod name
         * @param {string} input Input item identifier
         * @param {number} duration Recipe duration
         * @param {string[]} output Base recipe output
         * @param {number} inputFeedbackAmount How many input items to add to output
         */
        function Greenhouse(mod, input, duration, output, inputFeedbackAmount) {
            // Create new boosted output item array
            let boostedOutputs = boost(output, 2)

            // Push sapling/seed inputs (unboosted) onto output arrays
            if (inputFeedbackAmount > 0) {
                output.push(Item.of(`${mod}:${input}`, inputFeedbackAmount));
                boostedOutputs.push(Item.of(`${mod}:${input}`, inputFeedbackAmount));
            }

            event.recipes.gtceu.greenhouse(`kubejs:${input}`)
                .circuit(1)
                .notConsumable(InputItem.of(Item.of(`${mod}:${input}`)))
                .inputFluids(Fluid.of("minecraft:water", 24000))
                .itemOutputs(output)
                .duration(duration)
                .EUt(80)
            event.recipes.gtceu.greenhouse(`kubejs:${input}_boosted`)
                .circuit(2)
                .notConsumable(InputItem.of(Item.of(`${mod}:${input}`)))
                .itemInputs("1x gtceu:fertilizer")
                .inputFluids(Fluid.of("minecraft:water", 16000))
                .itemOutputs(boostedOutputs)
                .duration(duration / 2)
                .EUt(80)


        }
        // bwg tree recipes
        Greenhouse("biomeswevegone", "aspen_sapling", 1280, ["64x biomeswevegone:aspen_log", "32x biomeswevegone:aspen_leaves"], 4)
        Greenhouse("biomeswevegone", "baobab_sapling", 1280, ["64x biomeswevegone:baobab_log", "32x biomeswevegone:baobab_leaves", "32x biomeswevegone:flowering_baobab_leaves", "32x biomeswevegone:ripe_baobab_leaves", "16x biomeswevegone:baobab_fruit"], 4)
        Greenhouse("biomeswevegone", "blue_enchanted_sapling", 1280, ["64x biomeswevegone:blue_enchanted_log", "32x biomeswevegone:blue_enchanted_leaves"], 4)
        Greenhouse("biomeswevegone", "cika_sapling", 1280, ["64x biomeswevegone:cika_log", "32x biomeswevegone:cika_leaves"], 4)
        Greenhouse("biomeswevegone", "cypress_sapling", 1280, ["64x biomeswevegone:cypress_log", "32x biomeswevegone:cypress_leaves"], 4)
        Greenhouse("biomeswevegone", "ebony_sapling", 1280, ["64x biomeswevegone:ebony_log", "32x biomeswevegone:ebony_leaves"], 4)
        Greenhouse("biomeswevegone", "fir_sapling", 1280, ["64x biomeswevegone:fir_log", "32x biomeswevegone:fir_leaves"], 4)
        Greenhouse("biomeswevegone", "green_enchanted_sapling", 1280, ["64x biomeswevegone:green_enchanted_log", "32x biomeswevegone:green_enchanted_leaves"], 4)
        Greenhouse("biomeswevegone", "ironwood_sapling", 1280, ["64x biomeswevegone:ironwood_log", "32x biomeswevegone:ironwood_leaves"], 4)
        Greenhouse("biomeswevegone", "jacaranda_sapling", 1280, ["64x biomeswevegone:jacaranda_log", "32x biomeswevegone:indigo_jacaranda_leaves", "32x biomeswevegone:flowering_indigo_jacaranda_leaves"], 4)
        Greenhouse("biomeswevegone", "mahogany_sapling", 1280, ["64x biomeswevegone:mahogany_log", "32x biomeswevegone:mahogany_leaves"], 4)
        Greenhouse("biomeswevegone", "maple_sapling", 1280, ["64x biomeswevegone:maple_log", "32x biomeswevegone:maple_leaves"], 4)
        Greenhouse("biomeswevegone", "palm_sapling", 1280, ["64x biomeswevegone:palm_log", "32x biomeswevegone:palm_leaves"], 4) //SAND ONLY
        Greenhouse("biomeswevegone", "pine_sapling", 1280, ["64x biomeswevegone:pine_log", "32x biomeswevegone:pine_leaves"], 4)
        Greenhouse("biomeswevegone", "rainbow_eucalyptus_sapling", 1280, ["64x biomeswevegone:rainbow_eucalyptus_log", "32x biomeswevegone:rainbow_eucalyptus_leaves"], 4)
        Greenhouse("biomeswevegone", "redwood_sapling", 1280, ["64x biomeswevegone:redwood_log", "32x biomeswevegone:redwood_leaves"], 4)
        Greenhouse("biomeswevegone", "white_sakura_sapling", 1280, ["64x biomeswevegone:sakura_log", "32x biomeswevegone:white_sakura_leaves"], 4)
        Greenhouse("biomeswevegone", "yellow_sakura_sapling", 1280, ["64x biomeswevegone:sakura_log", "32x biomeswevegone:yellow_sakura_leaves"], 4)
        Greenhouse("biomeswevegone", "skyris_sapling", 1280, ["64x biomeswevegone:skyris_log", "32x biomeswevegone:skyris_leaves", "32x biomeswevegone:flowering_skyris_leaves", "32x biomeswevegone:green_apple_skyris_leaves", "16x biomeswevegone:green_apple"], 4)
        Greenhouse("biomeswevegone", "white_mangrove_sapling", 1280, ["64x biomeswevegone:white_mangrove_log", "32x biomeswevegone:white_mangrove_leaves"], 4)
        Greenhouse("biomeswevegone", "willow_sapling", 1280, ["64x biomeswevegone:willow_log", "32x biomeswevegone:willow_leaves"], 4)
        Greenhouse("biomeswevegone", "witch_hazel_sapling", 1280, ["64x biomeswevegone:witch_hazel_log", "32x biomeswevegone:witch_hazel_leaves", "32x biomeswevegone:blooming_witch_hazel_leaves"], 4)
        Greenhouse("biomeswevegone", "zelkova_sapling", 1280, ["64x biomeswevegone:zelkova_log", "32x biomeswevegone:brown_zelkova_leaves"], 4)
        Greenhouse("biomeswevegone", "palo_verde_sapling", 1280, ["64x biomeswevegone:palo_verde_log", "32x biomeswevegone:palo_verde_leaves"], 4) //SAND ONLY
        Greenhouse("biomeswevegone", "araucaria_sapling", 1280, ["64x biomeswevegone:pine_log", "32x biomeswevegone:araucaria_leaves"], 4)
        Greenhouse("biomeswevegone", "blue_spruce_sapling", 1280, ["64x minecraft:spruce_log", "32x biomeswevegone:blue_spruce_leaves"], 4)
        Greenhouse("biomeswevegone", "orchard_sapling", 1280, ["64x minecraft:oak_log", "32x biomeswevegone:orchard_leaves", "32x biomeswevegone:flowering_orchard_leaves", "32x biomeswevegone:ripe_orchard_leaves"], 4)
        Greenhouse("biomeswevegone", "orange_spruce_sapling", 1280, ["64x minecraft:spruce_log", "32x biomeswevegone:orange_spruce_leaves"], 4)
        Greenhouse("biomeswevegone", "orange_oak_sapling", 1280, ["64x minecraft:oak_log", "32x biomeswevegone:orange_oak_leaves"], 4)
        Greenhouse("biomeswevegone", "indigo_jacaranda_sapling", 1280, ["64x biomeswevegone:jacaranda_log", "32x biomeswevegone:indigo_jacaranda_leaves", "32x biomeswevegone:flowering_indigo_jacaranda_leaves"], 4)
        Greenhouse("biomeswevegone", "holly_sapling", 1280, ["64x biomeswevegone:holly_log", "32x biomeswevegone:holly_leaves", "32x biomeswevegone:holly_berry_leaves"], 4)
        Greenhouse("biomeswevegone", "orange_birch_sapling", 1280, ["64x minecraft:birch_log", "32x biomeswevegone:orange_birch_leaves"], 4)
        Greenhouse("biomeswevegone", "yellow_spruce_sapling", 1280, ["64x minecraft:spruce_log", "32x biomeswevegone:yellow_spruce_leaves"], 4)
        Greenhouse("biomeswevegone", "yucca_sapling", 1280, ["64x minecraft:oak_log", "32x biomeswevegone:yucca_leaves", "32x biomeswevegone:flowering_yucca_leaves", "32x biomeswevegone:ripe_yucca_leaves", "16x biomeswevegone:yucca_fruit"], 4) //SAND ONLY
        Greenhouse("biomeswevegone", "yellow_birch_sapling", 1280, ["64x minecraft:birch_log", "32x biomeswevegone:yellow_birch_leaves"], 4)
        Greenhouse("biomeswevegone", "silver_maple_sapling", 1280, ["64x biomeswevegone:maple_log", "32x biomeswevegone:silver_maple_leaves"], 4)
        Greenhouse("biomeswevegone", "red_spruce_sapling", 1280, ["64x minecraft:spruce_log", "32x biomeswevegone:red_spruce_leaves"], 4)
        Greenhouse("biomeswevegone", "red_oak_sapling", 1280, ["64x minecraft:oak_log", "32x biomeswevegone:red_oak_leaves"], 4)
        Greenhouse("biomeswevegone", "brown_birch_sapling", 1280, ["64x minecraft:birch_log", "32x biomeswevegone:brown_birch_leaves"], 4)
        Greenhouse("biomeswevegone", "red_maple_sapling", 1280, ["64x biomeswevegone:maple_log", "32x biomeswevegone:red_maple_leaves"], 4)
        Greenhouse("biomeswevegone", "red_birch_sapling", 1280, ["64x minecraft:birch_log", "32x biomeswevegone:red_birch_leaves"], 4)
        Greenhouse("biomeswevegone", "brown_zelkova_sapling", 1280, ["64x biomeswevegone:zelkova_log", "32x biomeswevegone:brown_zelkova_leaves"], 4)
        Greenhouse("biomeswevegone", "brown_oak_sapling", 1280, ["64x minecraft:oak_log", "32x biomeswevegone:brown_oak_leaves"], 4)



        // flowers and whatnot!
        let flowers = [
            "shrub",
            "firecracker_flower_bush",
            "green_mushroom",
            "weeping_milkcap",
            "wood_blewit",
            "tall_allium",
            "allium_flower_bush",
            "pink_allium",
            "tall_pink_allium",
            "pink_allium_flower_bush",
            "white_allium",
            "tall_white_allium",
            "white_allium_flower_bush",
            "cyan_pitcher_plant",
            "magenta_pitcher_plant",
            "rose",
            "osiria_rose",
            "black_rose",
            "cyan_rose",
            "blue_rose_bush",
            "cyan_tulip",
            "green_tulip",
            "magenta_tulip",
            "purple_tulip",
            "yellow_tulip",
            "amaranth",
            "cyan_amaranth",
            "magenta_amaranth",
            "orange_amaranth",
            "purple_amaranth",
            "blue_sage",
            "purple_sage",
            "white_sage",
            "daffodil",
            "pink_daffodil",
            "yellow_daffodil",
            "pink_anemone",
            "white_anemone",
            "alpine_bellflower",
            "lazarus_bellflower",
            "peach_leather_flower",
            "violet_leather_flower",
            "angelica",
            "begonia",
            "bistort",
            "california_poppy",
            "crocus",
            "delphinium",
            "fairy_slipper",
            "foxglove",
            "guzmania",
            "incan_lily",
            "iris",
            "japanese_orchid",
            "kovan_flower",
            "lollipop_flower",
            "orange_daisy",
            "protea_flower",
            "richea",
            "silver_vase_flower",
            "horseweed",
            "winter_succulent",
            "snowdrops",
            "winter_cyclamen",
            "winter_rose",
            "winter_scilla",
            "leaf_pile",
            "clover_patch",
            "flower_patch",
            "white_sakura_petals",
            "yellow_sakura_petals",
            "poison_ivy",
            "skyris_vine",
            "witch_hazel_branch",
            "witch_hazel_blossom",
            "shelf_fungi",
            "mini_cactus",
            "prickly_pear_cactus",
            "golden_spined_cactus",
            "barrel_cactus",
            "flowering_barrel_cactus",
            "aloe_vera",
        ]

        flowers.forEach(flower => {
            Greenhouse("biomeswevegone", flower, 640, [Item.of(`biomeswevegone:${flower}`, 48)], 0);
        })
    })
    console.log("BWG loaded!")
}