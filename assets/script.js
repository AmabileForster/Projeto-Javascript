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


// Config Cadastro
const cadastro = document.querySelector("#form");

// EMAIL
function validaEmail(inputEmail) {
  var validacao = /\S+@\S+\.\S+/;
  var booleanoValidacao = validacao.test(inputEmail);

  if (booleanoValidacao) {
    return [booleanoValidacao, ""];
  } else {
    return [booleanoValidacao, "O e-mail é inválido"];
  }
}

cadastro.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(cadastro)
  const verify = {
    'inputEmail': {
      required: true,
      validaField: validaEmail
    },
    'inputName': {
      required: true,
      validaField: null,
    }
  }

  let camposOk = true;

  for (let key of formData.keys()) {
    let validationElement = document.querySelector(`#validation_${key}`);

    if (Object.keys(verify).includes(key)) {
      let requiredPass = true;

      if (verify[key].required) {
        if (formData.get(key) === undefined || formData.get(key) === null || formData.get(key) === "") {
          validationElement.style.display = 'block';
          validationElement.innerText = 'Campo obrigatório';
          requiredPass = false;
          camposOk = false;
        } else {
          validationElement.style.display = 'none';
          validationElement.innerText = '';
        }
      }

      if (requiredPass) {
        if (verify[key].validaField) {
          let arrayVerificacao = verify[key].validaField(formData.get(key));
          if (arrayVerificacao[0]) {
            validationElement.style.display = 'none';
            validationElement.innerText = '';
          } else {
            validationElement.style.display = 'block';
            validationElement.innerText = arrayVerificacao[1];
            camposOk = false;
          }
        }
      }

    }
  }

  if (camposOk) {
    for (let value of formData.values()) {
      console.log(value)
    }
  }

});

// Validação Cadastro
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

// Config Cadastro


// Config Spinner
const spinnerLoading = document.querySelector('#titulospinner')
setTimeout(() => {
  spinnerLoading.remove()
}, 3000);


// Config Spinner