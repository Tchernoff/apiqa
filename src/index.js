import * as $ from 'jquery';
import './scss/main.scss';

$(document).ready(() => {
  /* Team Section avatar amount control
  ============================================= */
  if ($(window).width() < 558) {
    $('.team-section__avatar:gt(5)').css('display', 'none');
  } else if ($(window).width() < 683) {
    $('.team-section__avatar:gt(7)').css('display', 'none');
  } else if ($(window).width() < 1200) {
    $('.team-section__avatar:gt(9)').css('display', 'none');
  }

  /* Switch
  ============================================= */


  /* Parallax images position and movement control
  ============================================= */
  const parallaxScroll = () => {
    const scrolled = $(window).scrollTop();
    $('#explosion').css('top', `${0 - (scrolled * 0.45)}px`);
    $('#bomb').css('top', `${210 - (scrolled * 0.27)}px`);
    $('#hammer').css('top', `${10 - (scrolled * 0.10)}px`);
    $('#rockit').css('top', `${250 - (scrolled * 0.10)}px`);
    $('#typewriter').css('top', `${620 - (scrolled * 0.15)}px`);
    if ($(window).width() > 639) {
      $('#explosion').css('top', `${0 - (scrolled * 0.45)}px`);
      $('#bomb').css('top', `${250 - (scrolled * 0.32)}px`);
      $('#hammer').css('top', `${150 - (scrolled * 0.20)}px`);
      $('#rockit').css('top', `${450 - (scrolled * 0.14)}px`);
      $('#typewriter').css('top', `${920 - (scrolled * 0.15)}px`);
    }
    if ($(window).width() > 939) {
      $('#hammer').css('top', `${250 - (scrolled * 0.20)}px`);
      $('#typewriter').css('top', `${890 - (scrolled * 0.16)}px`);
      $('#rockit').css('top', `${590 - (scrolled * 0.2)}px`);
    }
    if ($(window).width() > 1199) {
      $('#bomb').css('top', `${410 - (scrolled * 0.32)}px`);
    }
    if ($(window).width() > 1399) {
      $('#typewriter').css('top', `${930 - (scrolled * 0.16)}px`);
    }
  };

  $(window).bind('scroll', () => {
    parallaxScroll();
  });

  /* Mobile footer menu-button open modal menu
  ============================================= */
  $('#button').bind('click', () => {
    // eslint-disable-next-line no-restricted-globals
    event.stopPropagation();
    $('#modal').addClass('modal--open');
    $('body').css('overflow', 'hidden');
  });

  /* Click on mobile menu-item close modal menu
  ============================================= */
  $('.modal__link').bind('click', () => {
    // eslint-disable-next-line no-restricted-globals
    event.stopPropagation();
    $('#modal').removeClass('modal--open');
    $('body').css('overflow', 'auto');
  });

  /* Click outside mobile menu-items close modal menu
  ============================================= */
  $(document).click(() => {
    if ($('#modal').hasClass('modal--open')) {
      $('#modal').removeClass('modal--open');
      $('body').css('overflow', 'auto');
    }
  });
});
