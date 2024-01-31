function closeMenu(event) {
  const menuIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.navMenu');

  if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
    navMenu.classList.remove('show-menu');
    menuIcon.style.transform = 'scale(1)';
    menuIcon.style.position = 'initial';
    menuIcon.style.top = 'initial';
    menuIcon.style.left = 'initial';
    document.removeEventListener('click', closeMenu);
  }
}

function toggleMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.navMenu');

  navMenu.classList.toggle('show-menu');

  if (navMenu.classList.contains('show-menu')) {
    menuIcon.style.transform = 'scale(0.8)';
    menuIcon.style.position = 'fixed';
    menuIcon.style.top = '0px';
    menuIcon.style.right = '0px';
    document.addEventListener('click', closeMenu);
  } else {
    menuIcon.style.transform = 'scale(1)';
    menuIcon.style.position = 'initial';
    menuIcon.style.top = 'initial';
    menuIcon.style.left = 'initial';
    document.removeEventListener('click', closeMenu);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const navMenu = document.querySelector('.navMenu');

  window.addEventListener('scroll', function () {
    navMenu.classList.toggle('scrolled', window.scrollY > 50);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.section');

  function highlightNavItem() {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 50;
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navItems.forEach((item) => {
          item.classList.remove('active');
        });

        navItems[index].classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNavItem);
});
