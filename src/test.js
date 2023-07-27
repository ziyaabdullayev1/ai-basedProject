const apiKey = "797918a756msh400ef0157a87cd2p1a3f26jsn1f22a797b607";
const apiUrl =
  "https://article-extractor-and-summarizer.p.rapidapi.com/summarize";

// Replace the following URL with the URL you want to summarize
const articleUrl = "https://www.nytimes.com/international/";

const headers = {
  "X-RapidAPI-Key": apiKey,
  "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
};

fetch(`${apiUrl}?url=${encodeURIComponent(articleUrl)}&length=3`, {
  headers: headers,
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Process the data returned by the API
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    console.error("Response status:", error.response.status);
    console.error("Response data:", error.response.data);
  });
