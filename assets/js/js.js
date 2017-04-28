$(function(){
  // MENU
  // click no hamburguer icon
  $('.MenuTrigger').on('click', function(e){
    e.preventDefault();   

    if( $('.Menu').hasClass('is-open') ){
      closeMenu();
    } else{
      openMenu();
    }
  });


  // SLIDER
  $('.js-bannerSlider').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000
  });


  // MODAL
  $('.js-openModal').on('click', function(){
    var modal = $(this).data('modal');

    if(viewport().width < 992){
      $('body').addClass('overflow');
    }

    $('.Como__modal[data-modal='+ modal +']').addClass('is-open');
  });

  $('.js-closeModal').on('click', function(){
    $('.Como__modal').removeClass('is-open');
    $('body').removeClass('overflow');
  });


  // EXIBE TABELA COMPLETA
  $('.Ranking__link').on('click', function(e){
    e.preventDefault();

    if( $('.Ranking__link').hasClass('is-open') ){
      $(this).removeClass('is-open');

      $('.Ranking__link').text('VER TABELA COMPLETA');
      $('.Ranking__table tr:nth-child(n+6)').addClass('is-hidden');
    } else{
      $(this).addClass('is-open');
      $('.Ranking__table').find('.is-hidden').removeClass('is-hidden');
      $('.Ranking__link').text('MOSTRAR MENOS');
    }    
  });

  // UPLOAD FOTO
  $('#uploadPhoto').on('click', function(){
    $('#fileSelect').click();
  });

  $('#Nota').on('click', function(){
    $('.Como__modal[data-modal="nota"]').addClass('is-open');
  });

  // SMOOTH SCROLL
  $('.js-scroll').on('click', function(event) {
    closeMenu();

    if( $(this).hasClass('js-enviarNota') ){
      $('.Como__modal[data-modal="nota"]').addClass('is-open');
    } else if( $(this).hasClass('js-cadastrarEmpresa') ){
      $('.Como__modal[data-modal="kit"]').addClass('is-open');
    }

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
});

function closeMenu(){
  $('.Menu').removeClass('is-open');
  $('.MenuTrigger').removeClass('is-open');
  $('body').removeClass('overflow');
}

function openMenu(){
  $('.MenuTrigger').addClass('is-open');
  $('.Menu').addClass('is-open');
  
  if( viewport().width < 992){
    $('body').addClass('overflow');
  }
}

function viewport() {
  var e = window, a = 'inner';
  if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
  }
  return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}