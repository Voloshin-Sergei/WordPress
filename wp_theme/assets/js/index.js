$(document).ready(function () {
  /* smooth scroll screen */
  $('.header a[href^="#"]').click(function () {
    let target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top,
      },
      500,
    );
    $('.header a[href^="#"]').parent().removeClass('active');
    $(this).parent().addClass('active');
    $('.menu__mobile .menu').toggle(500);
    $('.menu__burger').toggleClass('close');
    return false;
  });

  /* mobile menu */
  $('.menu__burger').click(function () {
    $('.menu__mobile .menu').toggle(500);
    $(this).toggleClass('close');
  });
});
