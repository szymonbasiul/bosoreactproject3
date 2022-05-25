"use strict";
exports.__esModule = true;
exports.Projects = void 0;
require("./styles/Projects.css");
require("../reusable_styles/BackgroundGlow.css");
function Projects() {
    var body = (React.createElement("div", { className: "projectBody" },
        React.createElement("div", { className: "projectTitle" }, "Our Projects"),
        React.createElement("div", { className: "projectsSlider" },
            React.createElement("div", { className: "arrow left " }),
            React.createElement("div", { className: "project backgroundGlow" }, " 1st"),
            React.createElement("div", { className: "project backgroundGlow" }, " 2nd"),
            React.createElement("div", { className: "project backgroundGlow" }, " 3rd"),
            React.createElement("div", { className: "arrow right" }))));
    return body;
}
exports.Projects = Projects;
