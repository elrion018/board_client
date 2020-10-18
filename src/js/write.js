import axios from "axios";
import { URL_POST_MAKE_ARTICLE } from "./api";

//////////

function goMain() {
  location.href = "index.html";
}

async function makeArticle() {
  try {
    const title = document.querySelector(".title_input").value;
    const contents = document.querySelector(".contents_textarea").value;
    const password = document.querySelector(".password_input").value;
    const config = {};

    let data = new FormData();
    data.append("title", title);
    data.append("contents", contents);
    data.append("password", password);
    // data.append("views", 0);
    // data.append("recommended", 0);
    const res = await axios.post(URL_POST_MAKE_ARTICLE, data, config);
    if (res.status === 201) {
      goMain();
    }
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}

window.goMain = goMain;
window.makeArticle = makeArticle;
