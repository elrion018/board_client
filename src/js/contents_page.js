import axios from "axios";
import {
  URL_GET_ARTICLE_DETAIL,
  URL_DELETE_ARTICLE,
  URL_PUT_EDIT_ARTICLE,
  URL_PUT_ADD_VIEWS,
} from "./api";

/////

const slug = Number(location.href.split("?")[1]);
const container_div = document.querySelector(".container");

function goMain() {
  location.href = "index.html";
}

function goEdit() {
  location.replace("contents_edit_page.html?" + slug);
}

async function addViews(article) {
  try {
    const config = {};
    const views = article["views"] + 1;

    let data = new FormData();
    data.append("views", views);
    const res = await axios.put(URL_PUT_ADD_VIEWS(slug), data, config);

    if (res.status === 200) {
      console.log("add views");
    }
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}

async function addRecommended() {
  try {
    const config = {};
    const article = await getArticleDetail(slug);
    const recommended = article["recommended"] + 1;
    let data = new FormData();
    data.append("recommended", recommended);
    const res = await axios.put(URL_PUT_EDIT_ARTICLE(slug), data, config);
    if (res.status === 200) {
      console.log("add recommended");
      document.querySelector(".recommended").innerHTML = recommended;
    }
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}

async function getArticleDetail(slug) {
  try {
    const config = {};
    const res = await axios.get(URL_GET_ARTICLE_DETAIL(slug), config);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}

async function deleteArticleDetail() {
  try {
    const config = {};
    let data = new FormData();
    const password = document.querySelector(".password_input").value;
    console.log(password);
    data.append("password", password);
    console.log(data);
    const res = await axios.delete(URL_DELETE_ARTICLE(slug), data, config);
    if (res.status === 204) {
      console.log(res);
      location.replace("index.html");
    } else {
      alert("비밀번호가 틀렸습니다!");
    }
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}

async function renderContents(slug) {
  try {
    const article = await getArticleDetail(slug);
    const trs = document.querySelectorAll("tr");
    const itemArr = ["title", "pub_date", "views", "recommended", "contents"];
    for (let i = 0; i < itemArr.length; i++) {
      const new_td = document.createElement("td");
      if (itemArr[i] == "views") {
        new_td.setAttribute("class", itemArr[i]);
        new_td.innerHTML = article[itemArr[i]] + 1;
        addViews(article);
      } else {
        new_td.setAttribute("class", itemArr[i]);
        new_td.innerHTML = article[itemArr[i]];
      }
      trs[i].appendChild(new_td);
    }
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}

renderContents(slug);

window.goMain = goMain;
window.goEdit = goEdit;
window.deleteArticleDetail = deleteArticleDetail;
window.addRecommended = addRecommended;
