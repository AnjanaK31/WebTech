document.getElementById('registrationForm').addEventListener('submit', function (e) {
e.preventDefault();

let valid = true;

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const age = document.getElementById('age');
const gender = document.querySelector('input[name="gender"]:checked');

// Clear all previous errors
document.querySelectorAll('small.error').forEach(el => el.textContent = '');
document.querySelectorAll('input').forEach(el => el.classList.remove('error-border'));

// Name
if (!/^[a-zA-Z\s]{2,}$/.test(name.value)) {
document.getElementById('nameError').textContent = 'Enter a valid name.';
name.classList.add('error-border');
valid = false;
}

// Email
if (!/^\S+@\S+\.\S+$/.test(email.value)) {
document.getElementById('emailError').textContent = 'Enter a valid email.';
email.classList.add('error-border');
valid = false;
}

// Phone
if (!/^\d{10}$/.test(phone.value)) {
document.getElementById('phoneError').textContent = 'Enter a valid 10-digit number.';
phone.classList.add('error-border');
valid = false;
}

// Age
if (isNaN(age.value) || Number(age.value) < 18) {
document.getElementById('ageError').textContent = 'Must be 18 or older.';
age.classList.add('error-border');
valid = false;
}

// Gender
if (!gender) {
document.getElementById('genderError').textContent = 'Please select your gender.';
valid = false;
}

if (valid) {
alert('Registration successful!');
this.reset();
}
});
