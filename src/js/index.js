import { URL_GET_ARTICLE_LIST } from "./api";
import axios from "axios";
//////////////////

const container_div = document.querySelector(".container");
function goWrite() {
  location.href = "write.html";
}

function goContentsPage(e) {
  const node = e.target;
  const slug = node.parentNode.querySelector("td").innerHTML;

  let name = slug;
  location.href = "contents_page.html?" + name;
}

async function getArticleList() {
  try {
    const config = {};
    const res = await axios.get(URL_GET_ARTICLE_LIST, config);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}

async function renderList() {
  try {
    const articleList = await getArticleList();
    if (articleList.length === 0) {
      return;
    } else {
      let tbody = container_div.querySelector("tbody");
      let itemArr = ["slug", "title", "pub_date", "views", "recommended"];
      articleList.map(function (article) {
        let new_tr = document.createElement("tr");
        for (let i = 0; i < itemArr.length; i++) {
          if (itemArr[i] === "title") {
            let new_td = document.createElement("td");
            new_td.innerHTML = article["title"];
            new_td.setAttribute("onclick", "goContentsPage(event)");
            new_td.setAttribute("style", "cursor:pointer;");
            new_tr.appendChild(new_td);
          } else {
            let new_td = document.createElement("td");
            new_td.innerHTML = article[itemArr[i]];
            new_tr.appendChild(new_td);
          }
        }
        tbody.appendChild(new_tr);
      });
    }
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}
renderList();

window.goWrite = goWrite;
window.goContentsPage = goContentsPage;
