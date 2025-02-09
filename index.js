document.addEventListener("DOMContentLoaded", function () {
  // ایجاد یک تابع برای بررسی اندازه صفحه و تغییر تنظیمات Swiper
  function initSwipers() {
    var swiperTours = new Swiper(".tourswiper", {
      slidesPerView: window.innerWidth <= 500 ? 1 : (window.innerWidth <= 900 ? 2 : 5), // تنظیم برای حالت ریسپانسیو
      spaceBetween: 12,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swiperAgency1 = new Swiper(".agencyswiper", {
      slidesPerView: window.innerWidth <= 900 ? 1 : 5, // تنظیم برای حالت ریسپانسیو
      spaceBetween: 10,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next-custo",
        prevEl: ".swiper-button-prev-custo",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swiperReport = new Swiper(".reportswiper", {
      slidesPerView: window.innerWidth <= 900 ? 1 : 5, // تنظیم برای حالت ریسپانسیو
      spaceBetween: 18,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swiperBlog1 = new Swiper(".blogswiper", {
      slidesPerView: window.innerWidth <= 900 ? 1 : 5, // تنظیم برای حالت ریسپانسیو
      spaceBetween: 12,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next-cust",
        prevEl: ".swiper-button-prev-cust",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swiperMainBlog = new Swiper(".mainblog", {
      slidesPerView: window.innerWidth <= 500 ? 1 : (window.innerWidth <= 1000 ? 2 : 4), //تنظیم برای حالت ریسپانسیو
      spaceBetween: 18,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next-cus",
        prevEl: ".swiper-button-next-cus",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swiperMainBlog = new Swiper(".active", {
      slidesPerView: window.innerWidth <= 500 ? 1 : 1, //تنظیم برای حالت ریسپانسیو
      spaceBetween: 12,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next-cu",
        prevEl: ".swiper-button-prev-cu",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


    var swiperHeader = new Swiper(".header", {
      slidesPerView: window.innerWidth <= 900 ? 1 : 1, // Adjust slides per view based on screen width
      spaceBetween: 18,
      loop: true,
      autoplay: {
        delay: 4000, // Autoplay delay in milliseconds (3 seconds)
        disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swipersells = new Swiper(".sells", {
      slidesPerView: window.innerWidth <= 500 ? 1 : (window.innerWidth <= 900 ? 2 : 5), // تنظیم برای حالت ریسپانسیو
      spaceBetween: 12,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next-c",
        prevEl: ".swiper-button-prev-c",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // راه‌اندازی Swiper
  initSwipers();

  // بررسی تغییر اندازه صفحه
  window.addEventListener("resize", function () {
    // اگر صفحه بزرگتر از 700 پیکسل باشد، دوباره Swiper ها را راه‌اندازی می‌کند
    if (window.innerWidth <= 900) {
      initSwipers(); // تنظیم دوباره Swiper ها
    }
  });
});

// side menu
// Function to toggle the menu open and close
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  var swiper;

  // تابع برای ایجاد Swiper با تنظیمات مختلف
  function initSwiper(slidesPerView) {
    swiper = new Swiper(".swiper-container", {
      slidesPerView: slidesPerView, // تعداد اسلایدها در یک صفحه
      spaceBetween: 0, // فاصله بین اسلایدها
      loop: false, // حلقه ای بودن اسلایدها
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerGroup: 1, // تعداد اسلایدهای گروهی برای هر بار پیمایش
    });
  }

  // تابع برای بروزرسانی Swiper بر اساس تغییر اندازه صفحه
  function updateSwiperOnResize() {
    // بررسی اینکه آیا عرض صفحه کمتر از 730px است
    if (window.innerWidth <= 730) {
      swiper.destroy(true, true); // غیر فعال کردن Swiper قبلی
      initSwiper(3); // راه‌اندازی مجدد Swiper با 3 اسلاید
    }
    if (window.innerWidth <= 500) {
      swiper.destroy(true, true); // غیر فعال کردن Swiper قبلی
      initSwiper(3); // راه‌اندازی مجدد Swiper با 3 اسلاید
    }
    // بررسی اینکه آیا عرض صفحه کمتر از 900px است
    else if (window.innerWidth <= 900) {
      swiper.destroy(true, true); // غیر فعال کردن Swiper قبلی
      initSwiper(4); // راه‌اندازی مجدد Swiper با 4 اسلاید
    }
    // بررسی اینکه آیا عرض صفحه کمتر از 1000px است
    else if (window.innerWidth <= 1009) {
      swiper.destroy(true, true); // غیر فعال کردن Swiper قبلی
      initSwiper(5); // راه‌اندازی مجدد Swiper با 6 اسلاید
    }
    // اگر عرض صفحه بیشتر از 1000px باشد
    else {
      swiper.destroy(true, true); // غیر فعال کردن Swiper قبلی
      initSwiper(8); // راه‌اندازی مجدد Swiper با 8 اسلاید
    }
  }

  // ایجاد Swiper به صورت پیش‌فرض با 8 اسلاید
  initSwiper(8);

  // راه‌اندازی مجدد Swiper هنگام تغییر اندازه صفحه
  window.addEventListener("resize", updateSwiperOnResize);
});

//برای دسته بندی و کته گوری

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("category-btn");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
