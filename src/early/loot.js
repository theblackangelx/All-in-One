exports.mod = () => {
    logger.logInfo("[MOD] All in one Module");
    let settings = require("../../settings.json");
    let gameplay = fileIO.readParsed(db.user.configs.gameplay)
    if (settings.loot.betterloot == true) {
        for (k in gameplay.locationloot) {
            if (k in settings.loot && settings.loot[k]) {
                gameplay.locationloot[k] = settings.loot[k]
            }
        }
        fileIO.write(db.user.configs.gameplay, gameplay);
        
        let base = fileIO.readParsed(db.user.cache.locations);
        for (let map in base) {
            base[map].GlobalLootChanceModifier = settings.gameplay.globalLootModifier;
        }
        fileIO.write(db.user.cache.locations, base);

    }
    logger.logSuccess("[Mod Aio] Loot multipliers successfully applied ");

}