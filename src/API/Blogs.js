export function getBlogs() {
  return Liferay.Util.fetch(
    "/o/headless-delivery/v1.0/sites/20119/blog-postings",
    {
      method: "GET",
    }
  ).then((res) => res.json());
}

export function postBlog(headline, alternativeHeadline, articleBody) {
  const json = {headline, alternativeHeadline, articleBody};
  return Liferay.Util.fetch(
    "/o/headless-delivery/v1.0/sites/20119/blog-postings",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    }
  ).then((res) => res.json)

}

export function deleteBlog(BlogId) {
  return Liferay.Util.fetch(
    `/o/headless-delivery/v1.0/blog-postings/${BlogId}`,
    {
      method: "DELETE",
    }
  ).then(console.log("deleted"));
}

export function UpdateBlog(blogId, headline, alternativeHeadline, articleBody) {
    const json = {headline, alternativeHeadline, articleBody};
    return Liferay.Util.fetch(
      `/o/headless-delivery/v1.0/sites/20119/blog-postings/${blogId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
      }
    ).then((res) => res.json)
  }
  
