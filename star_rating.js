function rating_click_event(id_text_rating, val) {
  let txt = document.querySelector("#" + id_text_rating);
  txt.innerHTML = val + "점";
}

function make_rating_star(num, id_rating, id_text_rating) {
  console.log(num, id_rating, id_text_rating);
  const scores = [5.0, 4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.5];
  let rating = "";
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    let className = "full";
    if (i % 2 != 0) {
      className = "half";
    }
    rating += `<input type="radio" id="id_star${score}_${num}" name="rating_${num}" value="${score}" />
      <label
        for="id_star${score}_${num}"
        class="${className}"
        onclick="rating_click_event('${id_text_rating}',${score})"
        title="Awesome"
      ></label>`;
  }

  const rating_element = document.querySelector("#" + id_rating);
  rating_element.innerHTML = rating;
}
