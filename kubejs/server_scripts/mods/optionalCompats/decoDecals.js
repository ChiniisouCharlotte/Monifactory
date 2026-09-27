// create deco decals recipes

let decals = [
    "warning",
    "creeper",
    "skull",
    "flow",
    "ice",
    "radioactive",
    "top_left",
    "up",
    "top_right",
    "left",
    "cross",
    "right",
    "down_left",
    "down",
    "down_right",
    "fluid",
    "fire",
    "electrical",
    "fire_diamond",
    "no_entry",
]

if (Platform.isLoaded("createdeco")) {
    ServerEvents.recipes(event => {
        decals.forEach(decal => {
            event.stonecutting(`createdeco:decal_${decal}`, "#forge:plates/iron")
        });
    }
)}