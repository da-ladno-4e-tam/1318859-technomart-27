  var contactsButton = document.querySelector(".contacts .button");
  var formPopup = document.querySelector(".form-popup");
  var formClose = document.querySelector(".form-popup .close-button");
  var form = document.querySelector(".form-popup form");
  var userName = document.querySelector(".form-popup [name=name]");
  var email = document.querySelector(".form-popup [name=email]");
  var letter = document.querySelector(".form-popup [name=letter]");
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("userName");
  } catch (err) {
    isStorageSupport = false;
  }

  if (contactsButton) {
    contactsButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      formPopup.classList.add("modal-show");
      if (storage) {
        userName.value = storage;
        email.focus();
      } else {
        userName.focus();
      }
    });
  }

  if (formClose) {
    formClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      formPopup.classList.remove("modal-show");
      formPopup.classList.remove("modal-error");
    });
  }

  if (form) {
    form.addEventListener("submit", function (evt) {
      if (!userName.value || !email.value || !letter.value) {
        evt.preventDefault();
        formPopup.classList.remove("modal-error");
        formPopup.offsetWidth = formPopup.offsetWidth;
        formPopup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("userName", userName.value);
        }
      }
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (formPopup.classList.contains("modal-show")) {
        formPopup.classList.remove("modal-show");
        formPopup.classList.remove("modal-error");
      }
    }
  });


  var mapButton = document.querySelector(".contacts .map");
  var mapPopup = document.querySelector(".map-popup");
  var mapClose = document.querySelector(".map-popup .close-button");

  if (mapButton) {
    mapButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
    });
  }

  if (mapClose) {
    mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      }
    }
  });


  var sliderButtons = document.querySelectorAll(".offers-slider .slider-button");
  var drills = document.querySelector(".offers-slider .drills");
  var perforators = document.querySelector(".offers-slider .perforators");

  for (var i = 0; i < sliderButtons.length; i++) {
    sliderButtons[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      drills.classList.toggle("visually-hidden");
      perforators.classList.toggle("visually-hidden");
    });
  }


  var serviceSliderButtons = document.querySelectorAll(".service-name a");
  var serviceSliderDescriptions = document.querySelectorAll(".service-description");

  for (var i = 0; i < serviceSliderButtons.length; i++) {
    let hasSliderButton = serviceSliderButtons[i];
    let hasSliderDescription = serviceSliderDescriptions[i];
    hasSliderButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      for (var i = 0; i < serviceSliderButtons.length; i++) {
        serviceSliderButtons[i].classList.remove("active-button");
      };
      hasSliderButton.classList.add("active-button");
      for (var i = 0; i < serviceSliderDescriptions.length; i++) {
        serviceSliderDescriptions[i].classList.add("hidden");
      };
      hasSliderDescription.classList.remove("hidden");
    });
  }


  var buyButtons = document.querySelectorAll(".buy-button");
  var cartPopup = document.querySelector(".cart-popup");
  var cartClose = document.querySelector(".cart-popup .close-button");
  var continueButton = document.querySelector(".cart-popup .continue-button");

  for (var i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-show");
    });

    cartClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    });

    continueButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (cartPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        cartPopup.classList.remove("modal-show");
      }
    }
  });
