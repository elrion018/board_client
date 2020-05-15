export let ADDRESS;

ADDRESS = "http://127.0.0.1:8000";

//crud

export const URL_GET_ARTICLE_LIST = `${ADDRESS}/commom/article`;
export const URL_POST_MAKE_ARTICLE = `${ADDRESS}/commom/article`;
export const URL_GET_ARTICLE_DETAIL = (slug) =>
  `${ADDRESS}/commom/article/${slug}`;
export const URL_PUT_EDIT_ARTICLE = (slug) =>
  `${ADDRESS}/commom/article/${slug}`;
export const URL_PUT_ADD_VIEWS = (slug) => `${ADDRESS}/commom/article/${slug}`;
export const URL_DELETE_ARTICLE = (slug) => `${ADDRESS}/commom/article/${slug}`;
