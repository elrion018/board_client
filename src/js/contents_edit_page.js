import axios from "axios";
import { URL_PUT_EDIT_ARTICLE } from "./api";

///

const slug = location.href.split("?")[1];

function goArticle() {
  // window.history.back();
  location.replace("contents_page.html" + slug);
}

async function editArticle() {
  try {
    const title = document.querySelector(".title_input").value;
    const contents = document.querySelector(".contents_textarea").value;
    const password = document.querySelector(".password_input").value;
    const config = {};

    let data = new FormData();
    data.append("title", title);
    data.append("contents", contents);
    data.append("password", password);
    const res = await axios.put(URL_PUT_EDIT_ARTICLE(slug), data, config);

    if (res.status === 200) {
      location.replace("contents_page.html?" + slug);
    }
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}

window.editArticle = editArticle;
window.goArticle = goArticle;
