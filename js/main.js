const burger = document.querySelector('.burger');
const header = document.querySelector('.header');

burger?.addEventListener('click', () => {
  const open = header.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('no-scroll', open);
});

document.querySelector('.form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  form.querySelector('.form__btn').firstChild.textContent = 'Готово ';
  form.reset();
});

document.querySelectorAll('.god__link').forEach((link) => {
  link.addEventListener('click', (e) => e.preventDefault());
});
