export function getArticles() {
  return Liferay.Util.fetch(
    "/o/headless-delivery/v1.0/sites/20119/knowledge-base-articles/",
    {
      method: "GET",
    }
  ).then((res) => res.json());
}

export function postArticles(title, articleBody) {
  const json = {title, articleBody};
  return Liferay.Util.fetch(
    "/o/headless-delivery/v1.0/sites/20119/knowledge-base-articles/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    }
  ).then((res) => res.json)
  
}

export function deleteArticles(ArticlesID) {
  return Liferay.Util.fetch(
    `/o/headless-delivery/v1.0/knowledge-base-articles/${ArticlesID}`,
    {
      method: "DELETE",
    }
  ).then(console.log("deleted"));
}

export function UpdateArticles(articleId, title, articleBody) {
  const json = {title, articleBody};
  return Liferay.Util.fetch(
    `/o/headless-delivery/v1.0/sites/20119/knowledge-base-articles//${articleId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    }
  ).then((res) => res.json)
}



