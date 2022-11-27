function keywordSearch() {
  let keyword = document.querySelector('input[name="keyword_search"]').value;
  if (keyword == "") {
    return;
  }
  let engine = document.querySelector(".SelectSearch").value;

  console.log("[search]", keyword, engine);
  if (engine === "google") {
    window.open("https://www.google.co.kr/search?q=" + keyword, "_blank");
  } else if (engine === "naver") {
    window.open(
      "https://search.naver.com/search.naver?query=" + keyword,
      "_blank"
    );
  }
  document.querySelector('input[name="keyword_search"]').value = "";
}
