var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "7fc8dde8cc494ce2b5befb8da8215c04",
  'q': "#",
  'begin_date': "#",
  'end_date': "#"
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});