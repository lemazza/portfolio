//index.js

function watchNavClick() {
  //when a nav button li is clicked
  $('.nav-item').click(function(event) {
    
    //define clicked text of the clicked link
    let navName = $(this).find('a').text()
    console.log(navName);

    // hide all sections
    $('section').hide();

    // unhide appropriate section
    if(navName === "About Me") {
      $('.biography').show();
    } else if (navName === "Portfolio") {
      $('.portfolio').show();
    }
  })
}

function clickNavOnLoad() {
  let link = $('.nav-link');
  console.log(link);
  //$('.nav-link[value="Portfolio"]').click();
  link[0].click();
}

$(watchNavClick);
$(clickNavOnLoad);