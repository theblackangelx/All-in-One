exports.mod = () => {
    logger.logInfo("[MOD] All in one Module");
    let settings = require("../../settings.json");
    if (settings.gameplay.raidTimer >= 60) {
        let base = fileIO.readParsed(db.user.cache.locations)
        for (let map in base) {
            base[map].exit_access_time = settings.gameplay.raidTimer
            base[map].escape_time_limit = settings.gameplay.raidTimer
        }
        fileIO.write(db.user.cache.locations, base);
    }
    logger.logSuccess("[Mod Aio] Raids have been extended");

}