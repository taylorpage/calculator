$(document).ready(function() {

  var value = '',
    memory = [];

  $('.calcBtn').click(function() {
    value += this.value;
    $('.display').val(value);
  });

  $('#AC').click(function() {
    $('.display').val('');
    value = '';
  });

  $('#CE').click(function() {
    value = value.slice(0, -1);
    $('.display').val(value);
  });

  $('#equals').click(function() {
    if (!isNaN(value[0]) || value[0] === '.') {
      value = eval(value);
      memory.push(value);
      $('.display').val(value);
      value = '';
    } else {
      $('.display').val('Invalid Entry');
      value = '';
    }
  });

  $('#ANS').click(function() {
    if (memory[memory.length - 2]) {
      value = memory[memory.length - 2];
      $('.display').val(value);
    };
  });
  $('#percent').click(function() {
    if (value === '' && memory[memory.length - 1]) {
      value = memory[memory.length - 1];
    }
    value = (value / 100) * 1000 + '%';
    $('.display').val(value);
    value = '';
  });

  $('#fireRed').click(function() {
    $('body').css('background-color', 'rgb(150, 0, 0)');
    $('#casing').css('background-color', 'rgb(200, 50, 0)');
    $('.calcBtn').css('background-color', 'rgb(255, 180, 180)');
    $('.calcBtn').css('color', 'rgb(255, 0, 0)');
    $('.calcBtn').hover(function() {
      $(this).css('background-color', 'rgba(255, 180, 180, .8)');
    }, function() {
      $(this).css('background-color', 'rgb(255, 180, 180)');
    })
  });

  $('#coolBlue').click(function() {
    $('body').css('background-color', 'rgb(0, 130, 200)');
    $('#casing').css('background-color', 'rgb(0, 50, 200)');
    $('.calcBtn').css('background-color', 'rgb(180, 180, 255)');
    $('.calcBtn').css('color', 'rgb(0, 0, 255)');
    $('.calcBtn').hover(function() {
      $(this).css('background-color', 'rgba(180, 180, 255, .8)');
    }, function() {
      $(this).css('background-color', 'rgb(180, 180, 255)');
    })
  });
});