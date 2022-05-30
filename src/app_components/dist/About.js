"use strict";
exports.__esModule = true;
exports.About = void 0;
require("./styles/About.css");
require("../reusable_styles/BackgroundGlow.css");
function About() {
    var header = (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "aboutBody" },
            React.createElement("div", { className: "aboutTitle" }, "The Project Of"),
            React.createElement("div", { className: "backgroundGlow" },
                React.createElement("div", { className: "aboutContent" },
                    React.createElement("div", { className: "person" },
                        React.createElement("div", { className: "photo" }),
                        React.createElement("div", { className: "description" }, "Lorem ipsum dolor sit amet.")),
                    React.createElement("div", { className: "person" },
                        React.createElement("div", { className: "photo" }),
                        React.createElement("div", { className: "description" }, "Lorem ipsum dolor sit amet.")),
                    React.createElement("div", { className: "person" },
                        React.createElement("div", { className: "photo" }),
                        React.createElement("div", { className: "description" }, "Lorem ipsum dolor sit amet.")))))));
    return header;
}
exports.About = About;
