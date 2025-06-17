$(document).ready(function () {
  $(window).on("scroll", function () {
    if (window.scrollY > 200) {
      $("#scroll_top").show();
    } else {
      $("#scroll_top").hide();
    }
  });

  // Scroll to top animation on button click
  $("#scroll_top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 50);
  });
});


function toggleText() {
  const moreText = document.getElementById("moreText");
  const toggleBtn = document.getElementById("toggleBtn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "block";
    toggleBtn.textContent = "Read less";
  } else {
    moreText.style.display = "none";
    toggleBtn.textContent = "Read more";
  }
};
