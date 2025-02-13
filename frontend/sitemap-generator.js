const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

const links = [
    { url: "/", changefreq: "monthly", priority: 1.0 },
    { url: "/writing", changefreq: "monthly", priority: 0.8 },
    { url: "/bookmarks", changefreq: "monthly", priority: 0.7 },
    { url: "/projects", changefreq: "monthly", priority: 0.7 },
    { url: "/work", changefreq: "monthly", priority: 0.7 },
    { url: "/interactive/book", changefreq: "monthly", priority: 0.7 }
];

const sitemap = new SitemapStream({ hostname: "https://heliajamshidi.me" });

links.forEach((link) => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then((data) => {
    fs.writeFileSync("public/sitemap.xml", data.toString());
    console.log("Sitemap generated successfully!");
});
