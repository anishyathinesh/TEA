      $(document).ready(function() {
          $("h6.scrollLink").click(function(event) {
              event.preventDefault();
              $("html, body").animate({
                  scrollTop: $($(this).attr("href")).offset().top
                }, 500);
            });
        });