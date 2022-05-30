"use strict";
exports.__esModule = true;
exports.Blog = void 0;
require("./styles/Blog.css");
require("../reusable_styles/BackgroundGlow.css");
function Blog() {
    var header = (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "blogBody" },
            React.createElement("div", { className: "blogTitle" }, "BoSo Blog"),
            React.createElement("div", { className: "backgroundGlow" },
                React.createElement("div", { className: "blogWindow" },
                    React.createElement("div", { className: "textOfBlog" }))))));
    return header;
}
exports.Blog = Blog;
