
const form = document.querySelector('#contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());
  const errors = {};

  const nameRegex = /\S+/;                
  const messageRegex = /^.{5,}$/s;        
  const phoneRegex = /^\+380\d{9}$/;     
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  if (!nameRegex.test(data.name)) {
    errors.name = 'Name is required';
  }

  if (!messageRegex.test(data.message)) {
    errors.message = 'Message must be at least 5 characters long';
  }

  if (!phoneRegex.test(data.phone)) {
    errors.phone = 'Phone must start with +380 and have 12 digits total';
  }

  if (!emailRegex.test(data.email)) {
    errors.email = 'Enter a valid email address (must contain "@" and a dot)';
  }

  form.querySelectorAll('.text-error').forEach(el => el.textContent = '');
  form.querySelectorAll('.form-control').forEach(el => el.classList.remove('is-invalid'));

  for (const key in errors) {
    const field = form.querySelector(`#${key}`);
    const errorDiv = field.parentElement.querySelector('.text-error');
    if (errorDiv) errorDiv.textContent = errors[key];
    field.classList.add('is-invalid'); 
  }

  if (Object.keys(errors).length === 0) {
    console.log('Form Data:', data);
    alert('Form sent successfully!');
    form.reset();
  }
});


