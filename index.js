const featuresNavLink = document.getElementById('features-nav-link');
const featuresMenu = document.getElementById('features-menu');
const dropdownArrow = document.getElementById('dropdown-arrow')
const companyDropdownArrow = document.getElementById('company-dropdown-arrow');
const companyNavLink = document.getElementById('company-nav-link');
const companyMenu = document.getElementById('company-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.getElementById('mobile-links')
const overlay = document.querySelector('.overlay');
const closeBtn = document.getElementById('close-menu')
const featureMobileLink = document.getElementById('features-mobile-link')
const companyMobileLink = document.getElementById('company-mobile-link')
const featureMobileMenu = document.getElementById('mobile-features-menu')
const companyMobileMenu = document.getElementById('mobile-company-menu')



featuresNavLink.addEventListener('click', function () {
    featuresMenu.classList.toggle('show-menu');
    dropdownArrow.classList.toggle('dropdown-toggle-up')
    featuresNavLink.classList.toggle('black')
    companyMenu.classList.remove('show-menu');
    companyDropdownArrow.classList.remove('dropdown-toggle-up');
    companyNavLink.classList.remove('black');
});
companyNavLink.addEventListener('click', function () {
    companyMenu.classList.toggle('show-menu');
    companyDropdownArrow.classList.toggle('dropdown-toggle-up')
    companyNavLink.classList.toggle('black')
    featuresMenu.classList.remove('show-menu');
    dropdownArrow.classList.remove('dropdown-toggle-up');
    featuresNavLink.classList.remove('black');
});
mobileMenu.addEventListener('click', function () {
    if (overlay.style.display === 'block') {
        overlay.style.display = 'none';
        mobileLinks.style.display = 'none';
    } else {
        overlay.style.display = 'block';
        mobileLinks.style.display = 'flex';
    }
});
featureMobileLink.addEventListener('click', function () {
    featureMobileMenu.style.display = featureMobileMenu.style.display === 'none' ? 'flex' : 'none';
  });
  
  companyMobileLink.addEventListener('click', function () {
    companyMobileMenu.style.display = companyMobileMenu.style.display === 'none' ? 'flex' : 'none';
  });
closeBtn.onclick = function () {
    overlay.style.display = 'none';
    mobileLinks.style.display = 'none';
}

