document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = item.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
      
        navItems.forEach(navItem => {
          if (navItem === item) {
            navItem.classList.add('active');
          } else {
            navItem.classList.remove('active');
          }
        });
      });
    });
  });
  