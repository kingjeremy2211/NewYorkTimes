var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

$("#run-click").on(click, function() {
    var searchTerm = $("#search-term").val().trim();
    var numberOfResults = $("#num-records-select").val();
    var beginDate = $("#start-year").val() + '0101';
    var endDate = $("#end-year").val() + '1231';
});

url += '?' + $.param({
  'api-key': "7fc8dde8cc494ce2b5befb8da8215c04",
  'q': searchTerm,
  'begin_date': beginDate,
  'end_date': endDate
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});