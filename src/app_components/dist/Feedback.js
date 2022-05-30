"use strict";
exports.__esModule = true;
exports.Feedback = void 0;
require("./styles/Feedback.css");
require("../reusable_styles/BackgroundGlow.css");
function Feedback() {
    var header = (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "feedbackBody" },
            React.createElement("div", { className: "feedbackTitle" }, "Feedback"),
            React.createElement("div", { className: "backgroundGlow" },
                React.createElement("div", { className: "feedbackWindow" },
                    React.createElement("div", { className: "feedbackCards" },
                        React.createElement("div", { className: "feedCard" },
                            React.createElement("div", { className: "profilePhoto" }),
                            React.createElement("div", { className: "feedText" }, "Lorem ipsum dolor sit amet.")),
                        React.createElement("div", { className: "feedCard" },
                            React.createElement("div", { className: "profilePhoto" }),
                            React.createElement("div", { className: "feedText" }, "Lorem ipsum dolor sit amet.")),
                        React.createElement("div", { className: "feedCard" },
                            React.createElement("div", { className: "profilePhoto" }),
                            React.createElement("div", { className: "feedText" }, "Lorem ipsum dolor sit amet."))))))));
    return header;
}
exports.Feedback = Feedback;
