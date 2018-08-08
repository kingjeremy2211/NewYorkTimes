var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

var searchTerm;
var numberOfResults;
var beginDate;
var endDate;

$("#run-search").on("click", function() {
    event.preventDefault();

    searchTerm = $("#search-term").val().trim();
    numberOfResults = $("#num-records-select").val();
    beginDate = $("#start-year").val() + '0101';
    endDate = $("#end-year").val() + '1231';
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
});