{"filter":false,"title":"scroll.js","tooltip":"/assets/js/scroll.js","undoManager":{"mark":21,"position":21,"stack":[[{"start":{"row":0,"column":0},"end":{"row":13,"column":3},"action":"insert","lines":["var btn = $('#button');","","$(window).scroll(function() {","  if ($(window).scrollTop() > 300) {","    btn.addClass('show');","  } else {","    btn.removeClass('show');","  }","});","","btn.on('click', function(e) {","  e.preventDefault();","  $('html, body').animate({scrollTop:0}, '300');","});"],"id":1}],[{"start":{"row":3,"column":2},"end":{"row":3,"column":4},"action":"insert","lines":["  "],"id":2},{"start":{"row":4,"column":4},"end":{"row":4,"column":8},"action":"insert","lines":["    "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":[" "]},{"start":{"row":5,"column":3},"end":{"row":5,"column":4},"action":"insert","lines":[" "]},{"start":{"row":5,"column":5},"end":{"row":6,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"insert","lines":[" "]},{"start":{"row":7,"column":5},"end":{"row":7,"column":8},"action":"insert","lines":["   "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"insert","lines":["  "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"insert","lines":["  "]},{"start":{"row":13,"column":2},"end":{"row":13,"column":4},"action":"insert","lines":["  "]},{"start":{"row":13,"column":29},"end":{"row":13,"column":30},"action":"insert","lines":[" "]},{"start":{"row":13,"column":40},"end":{"row":13,"column":41},"action":"insert","lines":[" "]},{"start":{"row":13,"column":42},"end":{"row":13,"column":43},"action":"insert","lines":[" "]},{"start":{"row":14,"column":3},"end":{"row":15,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":13},"action":"insert","lines":["/* global $*/"],"id":4}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":20},"action":"remove","lines":["button"],"id":5},{"start":{"row":2,"column":14},"end":{"row":2,"column":26},"action":"insert","lines":["returnButton"]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":21},"action":"remove","lines":["returnB"],"id":6},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["b"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":13},"action":"remove","lines":["/* global $*/"],"id":13}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""],"id":14}],[{"start":{"row":0,"column":0},"end":{"row":15,"column":3},"action":"remove","lines":["","var btn = $('#button');","","$(window).scroll(function() {","    if ($(window).scrollTop() > 300) {","        btn.addClass('show');","    }","    else {","        btn.removeClass('show');","    }","});","","btn.on('click', function(e) {","    e.preventDefault();","    $('html, body').animate({ scrollTop: 0 }, '300');","});"],"id":15},{"start":{"row":0,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["","let btn = $('#button');","","$(window).scroll(function() {","  if ($(window).scrollTop() > 300) {","    btn.addClass('show');","  } else {","    btn.removeClass('show');","  }","});","","btn.on('click', function(d) {","  d.preventDefault();","  $('html, body').animate({scrollTop:0}, '300');","});"]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":16},{"start":{"row":3,"column":2},"end":{"row":3,"column":4},"action":"insert","lines":["  "]},{"start":{"row":4,"column":4},"end":{"row":4,"column":8},"action":"insert","lines":["    "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":[" "]},{"start":{"row":5,"column":3},"end":{"row":5,"column":4},"action":"insert","lines":[" "]},{"start":{"row":5,"column":5},"end":{"row":6,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"insert","lines":[" "]},{"start":{"row":7,"column":5},"end":{"row":7,"column":8},"action":"insert","lines":["   "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"insert","lines":["  "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":1},"action":"insert","lines":[" "]},{"start":{"row":12,"column":3},"end":{"row":12,"column":4},"action":"insert","lines":[" "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"insert","lines":["  "]},{"start":{"row":13,"column":29},"end":{"row":13,"column":30},"action":"insert","lines":[" "]},{"start":{"row":13,"column":40},"end":{"row":13,"column":41},"action":"insert","lines":[" "]},{"start":{"row":13,"column":42},"end":{"row":13,"column":43},"action":"insert","lines":[" "]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"insert","lines":["// "],"id":17},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["// "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"insert","lines":["// "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"insert","lines":["// "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":3},"action":"insert","lines":["// "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"insert","lines":["// "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"insert","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"insert","lines":["// "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":3},"action":"insert","lines":["// "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":3},"action":"insert","lines":["// "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"insert","lines":["// "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"insert","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":14,"column":6},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":18},{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":16,"column":0},"end":{"row":35,"column":1},"action":"insert","lines":["//Get the button:","var mybutton = document.getElementById(\"myBtn\");","","// When the user scrolls down 20px from the top of the document, show the button","window.onscroll = function() { scrollFunction() };","","function scrollFunction() {","    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {","        mybutton.style.display = \"block\";","    }","    else {","        mybutton.style.display = \"none\";","    }","}","","// When the user clicks on the button, scroll to the top of the document","function topFunction() {","    document.body.scrollTop = 0; // For Safari","    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera","}"],"id":19}],[{"start":{"row":16,"column":0},"end":{"row":16,"column":3},"action":"insert","lines":["// "],"id":20},{"start":{"row":17,"column":0},"end":{"row":17,"column":3},"action":"insert","lines":["// "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":3},"action":"insert","lines":["// "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":3},"action":"insert","lines":["// "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":3},"action":"insert","lines":["// "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":3},"action":"insert","lines":["// "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":3},"action":"insert","lines":["// "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":3},"action":"insert","lines":["// "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":3},"action":"insert","lines":["// "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":3},"action":"insert","lines":["// "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":3},"action":"insert","lines":["// "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":3},"action":"insert","lines":["// "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":3},"action":"insert","lines":["// "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":3},"action":"insert","lines":["// "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":3},"action":"insert","lines":["// "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":3},"action":"insert","lines":["// "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":21},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]},{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":11,"column":3},"action":"insert","lines":["$(window).scroll(function() {","    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px","        $('#return-to-top').fadeIn(200);    // Fade in the arrow","    } else {","        $('#return-to-top').fadeOut(200);   // Else fade out the arrow","    }","});","$('#return-to-top').click(function() {      // When arrow is clicked","    $('body,html').animate({","        scrollTop : 0                       // Scroll to top of body","    }, 500);","});"],"id":22}],[{"start":{"row":1,"column":37},"end":{"row":1,"column":44},"action":"remove","lines":["       "],"id":23},{"start":{"row":2,"column":41},"end":{"row":2,"column":44},"action":"remove","lines":["   "]},{"start":{"row":3,"column":5},"end":{"row":4,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":5,"column":41},"end":{"row":5,"column":43},"action":"remove","lines":["  "]},{"start":{"row":8,"column":39},"end":{"row":8,"column":44},"action":"remove","lines":["     "]},{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"remove","lines":[" "]},{"start":{"row":10,"column":20},"end":{"row":10,"column":42},"action":"remove","lines":["                      "]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":24},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":13},"action":"insert","lines":["/* global $*/"],"id":25}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":38},"action":"insert","lines":["https://codepen.io/rdallaire/pen/apoyx"],"id":26}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":[" "],"id":27},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "]},{"start":{"row":5,"column":8},"end":{"row":5,"column":12},"action":"insert","lines":["    "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]},{"start":{"row":7,"column":4},"end":{"row":7,"column":8},"action":"insert","lines":["    "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]},{"start":{"row":9,"column":4},"end":{"row":9,"column":8},"action":"insert","lines":["    "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"insert","lines":["// "],"id":28},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"insert","lines":["// "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"insert","lines":["// "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":3},"action":"insert","lines":["// "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"insert","lines":["// "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"insert","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"insert","lines":["// "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":3},"action":"insert","lines":["// "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"insert","lines":["// "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":3},"action":"insert","lines":["// "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"insert","lines":["// "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"insert","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["// "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":3},"action":"insert","lines":["// "]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":0},"end":{"row":16,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":13,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1570543793882,"hash":"c25e064a6cfee229dc83dda49d6503b0c4442d97"}