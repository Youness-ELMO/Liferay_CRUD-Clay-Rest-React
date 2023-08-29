export function getDocument() {
  return Liferay.Util.fetch("/o/headless-delivery/v1.0/sites/20119/documents", {
    method: "GET",
  }).then((res) => res.json());
}

export function postDocument(fileData) {
  const formData = new FormData();
  formData.append("file", fileData);

  return Liferay.Util.fetch("/o/headless-delivery/v1.0/sites/20119/documents", {
    method: "POST",
    body: formData,
  }).then((res) => res.json());
}


export function deleteDocument(documentId) {
  return Liferay.Util.fetch(
    `/o/headless-delivery/v1.0/documents/${documentId}`,
    {
      method: "DELETE",
    }
  ).then(console.log("deleted"));
}

export function createDocument() {}
