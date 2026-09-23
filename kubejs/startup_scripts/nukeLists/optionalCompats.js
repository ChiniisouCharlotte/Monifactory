if (Platform.isLoaded("sfm")) {
    global.itemNukeList.push(
        "sfm:form",
        "sfm:xp_shard",
        "sfm:xp_goop",
        "sfm:printing_press",
        "sfm:water_tank",
    );
};

if (Platform.isLoaded("create")) {
    global.itemNukeList.push(
        "create:copper_sheet",
        "create:brass_sheet",
        "create:iron_sheet",
        "create:sturdy_sheet",
        "create:golden_sheet"
    );
};

if (Platform.isLoaded("createdeco")) {
    global.itemNukeList.push(
        "createdeco:zinc_sheet",
        "createdeco:netherite_sheet"
    );
};

if (Platform.isLoaded("everycomp")) {
    global.itemNukeList.push(
        /everycomp:.*\/ad_astra/gm,
        /everycomp:.*\/quark/gm,
        /everycomp:.*\/thermal/gm,
    )
}