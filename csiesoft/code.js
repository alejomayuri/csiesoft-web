const openMenu = () => {

  $("#li-soluciones").click(function () {
    $('.menu-soluciones').toggleClass('transform-active')
    $('.menu-soluciones ul').toggleClass('transform-active-ul')
    $('.menu-soluciones-img').toggleClass('transform-active-img')
    $('.header-container li span').toggleClass('to-white')
    $('.header-container button').toggleClass('to-white')
    $('.up-arrow').toggleClass('on')
    $('.down-arrow').toggleClass('off')
    $('.solucion-description').toggleClass('solucion-description-open')
  });

  $('.menu-soluciones li:nth-child(1)').hover(function () { $('.solucion-textElement:nth-child(1)').toggleClass('onBlock') })
  $('.menu-soluciones li:nth-child(2)').hover(function () { $('.solucion-textElement:nth-child(2)').toggleClass('onBlock') })
  $('.menu-soluciones li:nth-child(3)').hover(function () { $('.solucion-textElement:nth-child(3)').toggleClass('onBlock') })
  $('.menu-soluciones li:nth-child(4)').hover(function () { $('.solucion-textElement:nth-child(4)').toggleClass('onBlock') })

}

const selectSol = () => {
  $('.select-sol li').click(function () {
    $('.li-active').removeClass('li-active');
    $(this).addClass('li-active')
  });
  $('.li-rh').click(function () {
    $('#pl-block').removeClass('transform-b open_block')
    $('#bp-block').removeClass('transform-b open_block')
    $('#erp-block').removeClass('transform-b open_block')
    $('#hr-block').addClass('transform-b open_block')
  })
  $('.li-pl').click(function () {
    $('#hr-block').removeClass('transform-b open_block')
    $('#bp-block').removeClass('transform-b open_block')
    $('#erp-block').removeClass('transform-b open_block')
    $('#pl-block').addClass('transform-b open_block')
  })
  $('.li-bp').click(function () {
    $('#hr-block').removeClass('transform-b open_block')
    $('#pl-block').removeClass('transform-b open_block')
    $('#erp-block').removeClass('transform-b open_block')
    $('#bp-block').addClass('transform-b open_block')
  })
  $('.li-erp').click(function () {
    $('#hr-block').removeClass('transform-b open_block')
    $('#pl-block').removeClass('transform-b open_block')
    $('#bp-block').removeClass('transform-b open_block')
    $('#erp-block').addClass('transform-b open_block')
  })
}

$(document).ready(function () {
  openMenu()
  selectSol()
  document.onscroll = function () {
    window.scrollY >= 7 || window.pageYOffset >= 7 ?
      $('header').addClass('sticky-gray')
      :
      $('header').removeClass('sticky-gray')
  }
});
