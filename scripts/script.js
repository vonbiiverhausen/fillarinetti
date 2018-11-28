console.log("Tästä se alkaa");

document.getElementById("leave_post_btn").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/post_form.html";
});
document.getElementById("logo").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/index.html";
  console.log("testi");
});
document
  .getElementById("accurate_search")
  .addEventListener("click", function() {
    window.location = "http://127.0.0.1:5500/accurateSearch.html";
  });
