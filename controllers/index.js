const ytdl = require("ytdl-core");

// TODO: add multiple file types
let fileName = "video.mp4"
let formatType = "mp4"

module.exports = {
    donwload: (req, res, next) => {
        const URL = req.query.URL;
        res.header("Content-disposition", `attachment; filename=${fileName}`);
        ytdl(URL, {
            format: formatType
        }).pipe(res);
    }
}