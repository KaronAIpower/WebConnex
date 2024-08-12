connexBegin = document.getElementById('journeybtn');
connexInfo = document.getElementById('personalInfo');
changeBg = document.querySelector('.demo-wrap');
dateOfBirthInput = document.getElementById('dob');
submitBtn = document.getElementById('submitBtn');


const connexEvent = () =>{
  connexInfo.style.display = 'block';
   

}

const calculateAge = () =>{
  const today = new Date();
  const birth = new Date(dateOfBirthInput);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age

}

function underAge(){
  const dateOfBirth = dateOfBirthInput.value;
  const userAge = calculateAge(dateOfBirth);

  if (userAge<18){
    dateOfBirthInput.innerHTML = "You are too young for this";
    messageContainer.style.display = 'block';
  } else {
    messageContainer.style.display = 'none';
  }

}
connexBegin.onclick = connexEvent
submitBtn.onclick = underAge
 