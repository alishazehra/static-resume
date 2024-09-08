// Static resume builder in which only buttons work other information remains unchanged
document.getElementById("submitButton")?.addEventListener("click", () => {
  alert("Resume updated");
});

// script.ts
document.addEventListener("DOMContentLoaded", () => {
  const toggleSkillsBtn = document.getElementById(
    "toggleSkillsBtn"
  ) as HTMLButtonElement;
  const skillsSection = document.getElementById(
    "skillsSection"
  ) as HTMLDivElement;

  toggleSkillsBtn.addEventListener("click", () => {
    if (skillsSection.classList.contains("hidden")) {
      skillsSection.classList.remove("hidden");
    } else {
      skillsSection.classList.add("hidden");
    }
  });
});
