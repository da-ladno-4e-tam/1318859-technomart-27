  let contactsButton = document.querySelector(".contacts .button");

  let formPopup = document.querySelector(".form-popup");
  let formClose = formPopup.querySelector(".form-popup .close-button");

  let form = formPopup.querySelector("form");
  let userName = formPopup.querySelector("[name=name]");
  let email = formPopup.querySelector("[name=email]");
  let letter = formPopup.querySelector("[name=letter]");

  let isStorageSupport = true;
  let storage = "";

  try {
    storage = localStorage.getItem("userName");
  } catch (err) {
    isStorageSupport = false;
  }

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

  formClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.remove("modal-show");
    formPopup.classList.remove("modal-error");
  });

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
  let mapClose = mapPopup.querySelector(".close-button");

  mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

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

  for (let sliderButton of sliderButtons) {
    sliderButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      drills.classList.toggle("visually-hidden");
      perforators.classList.toggle("visually-hidden");
    });
  }



  let serviceSliderButtons = document.querySelectorAll(".service-name a");
  let serviceSliderDescriptions = document.querySelectorAll(".service-description");

  for (i = 0; i < serviceSliderButtons.length; ++i) {
    serviceSliderButtons[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      serviceSliderButtons[0].classList.remove("active-button");
      serviceSliderDescriptions[0].classList.add("hidden");
      serviceSliderDescriptions[i].classList.remove("hidden");
    });
  }





  let buyButtons = document.querySelectorAll(".catalog-goods .buy-button");
  let cartPopup = document.querySelector(".cart-popup");
  let cartClose = cartPopup.querySelector(".close-button");

  for (let buyButton of buyButtons) {
    buyButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-show");
    });

    cartClose.addEventListener("click", function (evt) {
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
