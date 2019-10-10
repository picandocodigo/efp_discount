require(
  ['jquery'],
  function ($) {
    var regexp = /\/bars\/(uk|global)/g;
    var market = regexp.exec(window.location.pathname)[1];

    function displayRecords(lim, off) {
      $.ajax({
        type: "GET",
        async: true,
        url: "https://www.brewdog.com/uk/bars/index/load/",
        data: "limit=" + lim + "&p=" + off + "&category=" + market +
          "" +
          "&lat=0&lng=0",
        cache: false,
        success: function (result) {
          result = JSON.parse(result);
          var html ='';
          for (var key in result) {
            if (result.hasOwnProperty(key)) {
              html += '<a href="' + result[key].url + '">';
              html += '<div class="tile" style="background-image: url(' + result[key].image + ')">';
              html += '<div class="textWrapper">';
              html += '<h5>' + result[key].title + '</h5>';
              html += '</div>';
              html += '</div>';
              html += '</a>';
            }
          }
          $(".imageGrid").html(html);
        }
      });
    }
    displayRecords(1000, 0);
  }
);
