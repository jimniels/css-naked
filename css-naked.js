/**
 * CSS Naked
 * Add a query param `?css-naked` to strip out any styles in the document.
 */

let cssNaked = window.localStorage.getItem("css-naked") === "true";
if (new URLSearchParams(window.location.search).has("css-naked")) {
  cssNaked = true;
  window.localStorage.setItem("css-naked", "true");
}

if (cssNaked) {
  // Remove all styles from external stylesheets or embedded <style> tags
  Array.from(document.querySelectorAll('style,link[rel="stylesheet"]')).forEach(
    ($node) => {
      $node.remove();
    }
  );

  // Remove all styles from inline attributes
  Array.from(document.querySelectorAll("[style]")).forEach(($node) => {
    $node.setAttribute("style", "");
  });

  // Embedd a banner at the top indicating you are in "css-naked" mode
  const $alert = document.createElement("div");
  $alert.innerHTML = [
    "You are viewing this site with all CSS removed.",
    "Any day can be <a href='https://css-naked-day.github.io/'>CSS naked day</a>!",
    "Want to flip back to the normal view?",
    "<a href='./' id='naked-css-toggle'>Click here</a>.",
  ].join(" ");
  $alert.style.cssText = `
    background: lightyellow;
    padding: 5px;
    margin: 15px 0;
  `;
  $alert.querySelector("#naked-css-toggle").addEventListener("click", (e) => {
    e.preventDefault();
    window.localStorage.setItem("css-naked", "false");
    window.location.href = window.location.href.split("?")[0];
  });
  document.body.prepend($alert);
}
