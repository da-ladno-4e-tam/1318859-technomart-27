  let contactsButton = document.querySelector(".contacts .button");

  let formPopup = document.querySelector(".form-popup");
  let formClose = document.querySelector(".form-popup .close-button");

  let form = document.querySelector(".form-popup form");
  let userName = document.querySelector(".form-popup [name=name]");
  let email = document.querySelector(".form-popup [name=email]");
  let letter = document.querySelector(".form-popup [name=letter]");

  let isStorageSupport = true;
  let storage = "";

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



  let mapButton = document.querySelector(".contacts figure");
  let mapPopup = document.querySelector(".map-popup");
  let mapClose = document.querySelector(".map-popup .close-button");

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



  let sliderButtons = document.querySelectorAll(".offers-slider .slider-button");
  let drills = document.querySelector(".offers-slider .drills");
  let perforators = document.querySelector(".offers-slider .perforators");

  for (let i = 0; i < sliderButtons.length; i++) {
    sliderButtons[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      drills.classList.toggle("visually-hidden");
      perforators.classList.toggle("visually-hidden");
    });
  }



  let serviceSliderButtons = document.querySelectorAll(".service-name a");
  let serviceSliderDescriptions = document.querySelectorAll(".service-description");

  for (let i = 0; i < serviceSliderButtons.length; i++) {
    serviceSliderButtons[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      for (let i = 0; i < serviceSliderButtons.length; i++) {
        serviceSliderButtons[i].classList.remove("active-button");
      };
      serviceSliderButtons[i].classList.add("active-button");
      for (let i = 0; i < serviceSliderDescriptions.length; i++) {
        serviceSliderDescriptions[i].classList.add("hidden");
      };
      serviceSliderDescriptions[i].classList.remove("hidden");
    });
  }





  let buyButtons = document.querySelectorAll(".buy-button");
  let cartPopup = document.querySelector(".cart-popup");
  let cartClose = document.querySelector(".cart-popup .close-button");
  let continueButton = document.querySelector(".cart-popup .continue-button");

  for (let i = 0; i < buyButtons.length; i++) {
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
