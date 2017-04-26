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
  $('.js-bannerSlider').slick();
})

function closeMenu(){
  $('.Menu').removeClass('is-open');
  $('.MenuTrigger').removeClass('is-open');
  $('body').removeClass('overflowHidden');
}

function openMenu(){
  $('.MenuTrigger').addClass('is-open');
  $('.Menu').addClass('is-open');
  $('body').addClass('overflowHidden');
}