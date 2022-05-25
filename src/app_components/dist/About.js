"use strict";
exports.__esModule = true;
exports.About = void 0;
require("./styles/About.css");
require("../reusable_styles/BackgroundGlow.css");
function About() {
    var header = (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "aboutTitle" }, "The Project Of"),
        React.createElement("div", { className: "about" },
            React.createElement("div", { className: "backgroundGlow" },
                React.createElement("div", { className: "aboutContent" },
                    React.createElement("div", { className: "person" },
                        "1",
                        React.createElement("div", { className: "photo" }),
                        React.createElement("div", { className: "description" }, "React")),
                    React.createElement("div", { className: "person" },
                        "2",
                        React.createElement("div", { className: "photo" }),
                        React.createElement("div", { className: "description" }, "React")),
                    React.createElement("div", { className: "person" },
                        "3",
                        React.createElement("div", { className: "photo" }),
                        React.createElement("div", { className: "description" }, "React")))))));
    return header;
}
exports.About = About;
