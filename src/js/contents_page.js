import axios from "axios";
import { URL_GET_ARTICLE_DETAIL } from "./api";

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

async function renderContents(slug) {
  try {
    const article = await getArticleDetail(Number(slug));
    const trs = document.querySelectorAll("tr");
    const itemArr = ["title", "pub_date", "views", "recommended", "contents"];
    for (let i = 0; i < trs.length; i++) {
      const new_td = document.createElement("td");
      new_td.innerHTML = article[itemArr[i]];
      trs[i].appendChild(new_td);
    }
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}

const slug = location.href.split("?")[1];
const container_div = document.querySelector(".container");

renderContents(slug);
