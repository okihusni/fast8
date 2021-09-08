$(document).ready(function () {
  //set and display '0' as default value
  let displayNum = '0';
  $('#displayNumber').text(displayNum);

  $('.button').click(function () {
    let val = $(this).text();
    const op = ['-', '+', '*', '/', '='];

    if (displayNum == '0') displayNum = '';

    // click C button to clear, set displayNum to 0 again
    if (val == 'C') {
      displayNum = '0';
      $('#displayNumber').text(displayNum);
    }

    // can't input '=' as first input, if it's not then will do the calculation
    else if (displayNum.length !== 0 && val == '=') {
      try {
        displayNum = eval(displayNum);
        $('#displayNumber').text(displayNum);
      } catch (e) {
        // display error when calculation can't be performed
        displayNum = '0';
        $('#displayNumber').text('ERROR');
      }
    }

    // process input other than '=' and 'C'
    else {
      // can't input operator as first input
      if (displayNum.length === 0 && op.includes(val)) displayNum = '';
      // append input and display it
      else {
        displayNum += val;
        $('#displayNumber').text(displayNum);
      }
    }
  });
});
