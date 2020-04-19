$(document).ready(function() {
    var maxheight = 94;
    var showText = "More";
    var hideText = "Less";

    $('.comment-italic').each(function() {
      var text = $(this);
      if (text.height() > maxheight) {
        text.css({
          'overflow': 'hidden',
          'height': maxheight + 'px'
        });

        var link = $('<a href="#">' + showText + '</a>');
        var linkDiv = $('<div></div>');
        linkDiv.append(link);
        $(this).after(linkDiv);

        link.click(function(event) {
          event.preventDefault();
          if (text.height() > maxheight) {
            $(this).html(showText);
            text.css('height', maxheight + 'px');
          } else {
            $(this).html(hideText);
            text.css('height', 'auto');
          }
        });
      }
    });
  });
