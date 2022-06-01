
    const pw = document.querySelector('#pwd1');
    const pwC = document.querySelector('#pwd2');
    const firstname = document.querySelector('#fname');
    const lastname = document.querySelector('#lname');
    const email = document.querySelector('#email');
    const tel = document.querySelector('#phone-number');
    const pwError = document.querySelector('#pwd1-error');
    const pwCError = document.querySelector('#pwd2-error');
    const firstnameError = document.querySelector('#fname-error');
    const lastnameError = document.querySelector('#lname-error');
    const emailError = document.querySelector('#email-error');
    const telError = document.querySelector('#phone-error');
    firstname.addEventListener("input", function (event) {
      if (firstname.value === '') {
        firstnameError.textContent = 'Please type in your first name.';
      } else {
        firstnameError.textContent = '';    
      }
    }); 

    lastname.addEventListener("input", function (event) {
      if (lastname.value === '') {
        lastnameError.textContent = 'Please type in your last name';
      } else {
        lastnameError.textContent = '';
      }
    }); 

    email.addEventListener("input", function (event) {
      if (email.validity.typeMismatch) {
        emailError.textContent = 'Please enter in a valid Email. ex(johnSmith@email.com)';
      } else {
        emailError.textContent = '';
      }
    }); 

    tel.addEventListener("input", function (event) {
      if (tel.validity.patternMismatch) {
        telError.textContent = 'Please enter in a 10 digit phone number';
      } else {
        telError.textContent = '';
      }     
    }); 

    pw.addEventListener("input", function (event) {
      if (pw.validity.patternMismatch){
        const currentValue = pw.value;
        const regExpCap = /[A-Z]/g;
        const regExpDig = /[0-9]/g;
        let result = '';
        if (regExpCap.test(currentValue)){
          result += '';
        } else {
          result += `Missing at least 1 capital letter. `;
          result += '\n';
        }
        
        
        if (regExpDig.test(currentValue)){
          result += '';
        } else {
          result += 'Missing at least 1 number. ';
          result += '\n';
        }
        
        if (currentValue.length < 9){
          result += 'Password must be at least 8 characters. '
          result += '\n';
        } else {
          result += '';
        }

        console.log(result);
        pwError.textContent = result;

  
      } else {
        pwError.textContent = '';
      }
    });
  
    pwC.addEventListener("input", function (event) {
      if (pwC.value !== pw.value) {
        pwCError.textContent = 'Passwords do not match';
      } else {
        pwCError.textContent = '';
      }
    }); 
  