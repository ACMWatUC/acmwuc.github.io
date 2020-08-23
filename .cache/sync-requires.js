const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\Lina Kaval\\Documents\\Github Folder\\acmwuc.github.io\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\Lina Kaval\\Documents\\Github Folder\\acmwuc.github.io\\src\\pages\\About.js"))),
  "component---src-pages-get-involved-js": hot(preferDefault(require("C:\\Users\\Lina Kaval\\Documents\\Github Folder\\acmwuc.github.io\\src\\pages\\GetInvolved.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Lina Kaval\\Documents\\Github Folder\\acmwuc.github.io\\src\\pages\\index.js"))),
  "component---src-pages-meetings-js": hot(preferDefault(require("C:\\Users\\Lina Kaval\\Documents\\Github Folder\\acmwuc.github.io\\src\\pages\\Meetings.js"))),
  "component---src-pages-resources-js": hot(preferDefault(require("C:\\Users\\Lina Kaval\\Documents\\Github Folder\\acmwuc.github.io\\src\\pages\\Resources.js")))
}

