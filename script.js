var _a;
// Static resume builder in which only buttons work other information remains unchanged
(_a = document.getElementById("submitButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    alert("Resume updated");
});
// script.ts
document.addEventListener("DOMContentLoaded", function () {
    var toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
    var skillsSection = document.getElementById("skillsSection");
    toggleSkillsBtn.addEventListener("click", function () {
        if (skillsSection.classList.contains("hidden")) {
            skillsSection.classList.remove("hidden");
        }
        else {
            skillsSection.classList.add("hidden");
        }
    });
});
