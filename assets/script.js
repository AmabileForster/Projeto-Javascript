// PRÉ LOADER
$(window).on('load', function() {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(600).fadeOut('slow');
    $('body').delay(600).css({'overflow': 'visible'});
  })
// PRÉ LOADER

// slick

$(document).ready(function(){
    $('.carouselConfig').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
  });
        

//slick


// cadastro 

$('#form').submit(function () {
  
    let email = $('#inputEmail');
    let nome = $('#inputName');
    let erro = $('.alert');
    let campo = $('#campo-erro');
    
      erro.addClass('d-none');
      $('.is-invalid').removeClass('is-invalid');
      
      if (email.val() == ''){
        erro.removeClass('d-none');
        campo.html('email');
        email.focus();
        email.addClass('is-invalid');
        return false;
      }
    
      if (nome.val() == ''){
        erro.removeClass('d-none');
        campo.html('nome');
        nome.focus();
        nome.addClass('is-invalid');
        return false;
      }
    
    return true;
    });
    
    
    // Validação Cadastro
    const form = document.getElementById('cadastroForm')
    form.addEventListener('submit', e => {
        e.preventDefault()
        console.log('Deu certo')
    })
    
    // cadastro


// Config Spinner
const spinnerLoading = document.querySelector('#titulospinner')
setTimeout(() => {
  spinnerLoading.remove()
}, 3000);


// Config Spinner


