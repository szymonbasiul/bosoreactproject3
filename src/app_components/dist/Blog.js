"use strict";
exports.__esModule = true;
exports.Blog = void 0;
require("./styles/Blog.css");
require("../reusable_styles/BackgroundGlow.css");
function Blog() {
    var header = (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "blogSection" },
            React.createElement("div", { className: "backgroundGlow" },
                React.createElement("div", { className: "blogWindow" },
                    React.createElement("div", { className: "blogHeader" }, "BoSo Blog"),
                    React.createElement("div", { className: "textOfBlog" }))))));
    return header;
}
exports.Blog = Blog;
