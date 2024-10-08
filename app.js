document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', () => {
      box.classList.toggle('expanded');
  });
});

document.getElementById('top-signin').addEventListener('click', function() {
  window.open('loginPage/login.html', '_blank');
});
// document.getElementById('getstartbtn').addEventListener('click',function(){
//   window.location.href = 'thankyoupage/thankyou.html';
// });

// document.getElementById('getstartbtnlast').addEventListener('click',function(){
//   window.location.href = 'thankyoupage/thankyou.html';
// });

// Email  Validation

function validateAndRedirect(inputId, errorMsgId, redirectUrl) {
  const emailInput = document.getElementById(inputId).value;
  const errorMsg = document.getElementById(errorMsgId);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput)) {
      errorMsg.style.display = 'none';
      window.location.href = redirectUrl;
  } else {
      errorMsg.style.display = 'block';
  }
}

document.getElementById('getstartbtn1').addEventListener('click', function() {
  validateAndRedirect('emailAddress1', 'errorMsg1', 'thankyoupage/thankyou.html');
});

document.getElementById('getstartbtn2').addEventListener('click', function() {
  validateAndRedirect('emailAddress2', 'errorMsg2', 'thankyoupage/thankyou.html');
});


