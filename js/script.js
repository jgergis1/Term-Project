function onContentLoad() {
  document.getElementById('read-less-classic').style.display = 'none';
  document.getElementById('classic-txt').innerHTML =
    'Egyptian cuisine is made doubly fascinating by the way history has influenced its national and traditional dishes.';
  document.getElementById('read-less-steaky').style.display = 'none';
  document.getElementById('steaky-txt').innerHTML =
    'Molokia is Egypt’s “green slime soup.” The dish, is a soup made from finely chopped leafy greens in a beef, chicken or seafood stock.';
  document.getElementById('read-less-defining').style.display = 'none';
  document.getElementById('defining-txt').innerHTML =
    'Egypt was one of the challenging countries to find Egyptian food. Plenty of fast food on offer but restaurants serving the deal Egyptian food.';
}

function validateForm() {
  let firstName = document.forms['contactForm']['firstname'].value;
  let lastName = document.forms['contactForm']['lastname'].value;
  let email = document.forms['contactForm']['email'].value;
  let country = document.forms['contactForm']['country'].value;
  let ageCheck = document.forms['contactForm']['agecheck'].value;
  let message = document.forms['contactForm']['message'].value;

  if (firstName == '') {
    alert('First Name is required');
    return false;
  }
  if (lastName == '') {
    alert('Last Name is required');
    return false;
  }
  if (email == '') {
    alert('Email is required');
    return false;
  }
  if (country == '') {
    alert('Country is required');
    return false;
  }
  if (ageCheck == '') {
    alert('Age Chek is required');
    return false;
  }
  if (message == '') {
    alert('Message is required');
    return false;
  }

  document.getElementById('successMsg').style.backgroundColor = '#8dbc5e4f';
  document.getElementById('successMsg').style.fontWeight = '800';
  document.getElementById('successMsg').style.display = 'block';

  document.getElementById('successMsg').innerHTML = 'Thanks for your feedback.';
  return false;
}

function changeClassicMouseOver(index) {
  if (index === 1) {
    document.getElementById('classic').src = 'images/f4.jpeg';
  } else if (index === 2) {
    document.getElementById('cluture').src = 'images/v2.jpeg';
  } else {
    document.getElementById('defining').src = 'images/f1.jpeg';
  }
}

function changeClassicMouseOut(index) {
  if (index === 1) {
    document.getElementById('classic').src = 'images/food2.jpeg';
  } else if (index === 2) {
    document.getElementById('cluture').src = 'images/culture.jpeg';
  } else {
    document.getElementById('defining').src = 'images/food.jpeg';
  }
}

function readMore(index) {
  if (index === 1) {
    document.getElementById('read-more-classic').style.display = 'none';
    document.getElementById('read-less-classic').style.display = 'inline-block';
    document.getElementById('classic-txt').innerHTML =
      'Egyptian cuisine is made doubly fascinating by the way history has influenced its national and traditional dishes. Be sure to try such traditional dishes as molokhia, koshari, flat baladi bread, and good Egyptian cheeses.\n\n Typically in Egypt we would be served an Egyptian meze comprising items such as falafel, olives, hummus, tahini, hard-boiled eggs, soft white cheese, roasted meats, ful madames, and rice dishes. Breakfast, lunch or dinner, we would see fairly similar dishes.';
  } else if (index === 2) {
    document.getElementById('read-more-steaky').style.display = 'none';
    document.getElementById('read-less-steaky').style.display = 'inline-block';
    document.getElementById('steaky-txt').innerHTML =
      'Molokia is Egypt’s “green slime soup.” The dish, is a soup made from finely chopped leafy greens in a beef, chicken or seafood stock.\n\n The molokhia can contain fried garlic and ground roasted coriander seeds. It is normally served with bread, rice and a choice between seafood, chicken, lamb or beef. Food in Egypt can be regional, meaning that the way the stew is made varies.';
  } else if (index === 3) {
    document.getElementById('read-more-defining').style.display = 'none';
    document.getElementById('read-less-defining').style.display =
      'inline-block';
    document.getElementById('defining-txt').innerHTML =
      'Egypt was one of the challenging countries to find Egyptian food. Plenty of fast food on offer but restaurants serving the deal Egyptian food.\n\nFood is so important and tells us so much about culture, history and geography if you just stop to think about local dishes and the reasons they came to be. We hope you found our post on Food in Egypt interesting.';
  }
}

function readLess(index) {
  if (index === 1) {
    document.getElementById('read-less-classic').style.display = 'none';
    document.getElementById('read-more-classic').style.display = 'inline-block';
    document.getElementById('classic-txt').innerHTML =
      'Egyptian cuisine is made doubly fascinating by the way history has influenced its national and traditional dishes.';
  } else if (index === 2) {
    document.getElementById('read-less-steaky').style.display = 'none';
    document.getElementById('read-more-steaky').style.display = 'inline-block';
    document.getElementById('steaky-txt').innerHTML =
      'Molokia is Egypt’s “green slime soup.” The dish, is a soup made from finely chopped leafy greens in a beef, chicken or seafood stock.';
  } else if (index === 3) {
    document.getElementById('read-less-defining').style.display = 'none';
    document.getElementById('read-more-defining').style.display =
      'inline-block';
    document.getElementById('defining-txt').innerHTML =
      'Egypt was one of the challenging countries to find Egyptian food. Plenty of fast food on offer but restaurants serving the deal Egyptian food.';
  }
}

let slideIndex = 1;
function onLoadProductPage() {
  showSlides(slideIndex);
}

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('sliderWrap');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

function openMenu() {
  var element = document.getElementById('topNavMenu');
  if (element.className === 'topnav') {
    element.className += ' responsive';
  } else {
    element.className = 'topnav';
  }
}
