AOS.init({
  duration: 1000,
  once: true,
});

document.getElementById("smart-email").addEventListener("click", function () {
  const myEmail = "taufik.dev09@gmail.com"; // Ingat untuk mengganti string ini dengan email asli Anda nanti
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    // Jika perangkat seluler (Android/iOS), buka aplikasi email bawaan
    window.location.href = "mailto:" + myEmail;
  } else {
    // Jika perangkat desktop/laptop, buka Gmail Web di tab baru
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=" + myEmail, "_blank");
  }
});

// Menutup otomatis menu mobile saat salah satu link navigasi diklik
const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");
const navbarToggler = document.querySelector(".navbar-toggler");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  });
});

// Menutup otomatis menu mobile saat area di luar menu diklik
document.addEventListener("click", function (event) {
  const isClickInsideNavbar = navbarCollapse.contains(event.target);
  const isClickOnToggler = navbarToggler.contains(event.target);

  if (!isClickInsideNavbar && !isClickOnToggler && navbarCollapse.classList.contains("show")) {
    navbarToggler.click();
  }
});

// Animasi Mengetik (Typing Effect)
const typingText = document.querySelector(".typing-text");
const textToType = "Front-End Developer & Web Animator";
let charIndex = 0;

function typeWriter() {
  if (typingText && charIndex < textToType.length) {
    typingText.innerHTML += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);

// Fitur Toggle Dark/Light Mode
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  const themeIcon = themeToggle.querySelector("i");
  const currentTheme = localStorage.getItem("theme");

  // Terapkan tema dari localStorage saat halaman dimuat
  if (currentTheme === "light") {
    document.body.classList.add("light-theme");
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
      themeIcon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "light");
    } else {
      themeIcon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "dark");
    }
  });
}

// Fitur Toggle Language (ID/EN)
const translations = {
  id: {
    nav_tentang: "Tentang",
    nav_layanan: "Layanan",
    nav_tools: "Alat & Keterampilan",
    nav_portofolio: "Portofolio",
    nav_kontak: "Hubungi Saya",
    banner_hello: "Halo, Saya Taufik",
    banner_btn: "Lihat Karya Saya",
    tentang_title: "Tentang Saya",
    tentang_desc:
      "Halo! Saya Taufik, seorang mahasiswa Teknik Informatika di STMIK IKMI Cirebon yang bersemangat dalam Full-Stack Web Development. Saya gemar mengeksplorasi gaya desain UI/UX modern seperti Glassmorphism dan Neobrutalism untuk menciptakan antarmuka web yang interaktif menggunakan HTML, CSS, dan JavaScript. Selain ekosistem web, saya juga aktif menggunakan Python untuk proyek otomatisasi. Saya selalu antusias untuk belajar dan berkolaborasi dalam menciptakan solusi digital yang kreatif.",
    layanan_title: "Layanan",
    layanan_desc: "Saya menawarkan solusi pengembangan web yang berfokus pada tampilan visual yang menarik, performa tinggi, dan pengalaman pengguna yang interaktif.",
    layanan_webdev: "Web Development",
    layanan_webdev_desc: "Membangun website responsif dan modern menggunakan HTML, CSS, dan JavaScript murni dengan struktur kode yang bersih (clean code).",
    layanan_webanim: "Web Animation",
    layanan_webanim_desc: "Menghidupkan elemen website melalui animasi CSS dan manipulasi DOM JavaScript untuk interaksi pengguna yang dinamis.",
    layanan_uiux: "UI/UX Implementation",
    layanan_uiux_desc: "Menerjemahkan desain visual menjadi antarmuka web yang interaktif, pixel-perfect, dan ramah perangkat seluler.",
    tools_title: "Alat & Keterampilan",
    portofolio_title: "Portofolio",
    portofolio_desc: "Berikut adalah beberapa karya dan eksperimen web development yang telah saya bangun, berfokus pada interaktivitas, performa, dan desain responsif.",
    porto_1_title: "Interactive Heart Particles",
    porto_1_desc: "Eksperimen interaktif yang menggabungkan manipulasi DOM untuk galeri foto berbentuk hati dan animasi partikel CSS untuk menciptakan visualisasi cinta yang dinamis dan puitis.",
    porto_2_title: "Web Animasi Interaktif (Animasi-1)",
    porto_2_desc: "Eksperimen interaksi web yang menggabungkan manipulasi DOM JavaScript dan keyframe CSS untuk menciptakan transisi halus dan pengalaman pengguna yang dinamis.",
    btn_live: "Lihat Live Demo",
    btn_code: "Lihat Kode",
    kontak_title: "Hubungi Saya",
    kontak_desc: "Punya ide proyek menarik atau ingin berkolaborasi? Jangan ragu untuk meninggalkan pesan di bawah ini.",
    kontak_btn: "Kirim Pesan",
    footer_text: "&copy; 2026 Taufik | Front-End Developer. All Rights Reserved. 🚀",
    placeholder_nama: "Nama",
    placeholder_pesan: "Tulis pesan Anda di sini...",
  },
  en: {
    nav_tentang: "About",
    nav_layanan: "Services",
    nav_tools: "Tools & Skills",
    nav_portofolio: "Portfolio",
    nav_kontak: "Contact Me",
    banner_hello: "Hello, I'm Taufik",
    banner_btn: "View My Work",
    tentang_title: "About Me",
    tentang_desc:
      "Hello! I am Taufik, an Informatics Engineering student at STMIK IKMI Cirebon who is passionate about Full-Stack Web Development. I love exploring modern UI/UX design styles like Glassmorphism and Neobrutalism to create interactive web interfaces using HTML, CSS, and JavaScript. Besides the web ecosystem, I am also active in using Python for automation projects. I am always enthusiastic to learn and collaborate in creating creative digital solutions.",
    layanan_title: "Services",
    layanan_desc: "I offer web development solutions focusing on attractive visuals, high performance, and interactive user experiences.",
    layanan_webdev: "Web Development",
    layanan_webdev_desc: "Building responsive and modern websites using pure HTML, CSS, and JavaScript with clean code structure.",
    layanan_webanim: "Web Animation",
    layanan_webanim_desc: "Bringing website elements to life through CSS animations and JavaScript DOM manipulation for dynamic user interactions.",
    layanan_uiux: "UI/UX Implementation",
    layanan_uiux_desc: "Translating visual designs into interactive, pixel-perfect, and mobile-friendly web interfaces.",
    tools_title: "Tools & Skills",
    portofolio_title: "Portfolio",
    portofolio_desc: "Here are some web development projects and experiments I have built, focusing on interactivity, performance, and responsive design.",
    porto_1_title: "Interactive Heart Particles",
    porto_1_desc: "An interactive experiment combining DOM manipulation for a heart-shaped photo gallery and CSS particle animations to create a dynamic and poetic visualization of love.",
    porto_2_title: "Interactive Web Animation (Animation-1)",
    porto_2_desc: "A web interaction experiment combining JavaScript DOM manipulation and CSS keyframes to create smooth transitions and a dynamic user experience.",
    btn_live: "Live Demo",
    btn_code: "View Code",
    kontak_title: "Contact Me",
    kontak_desc: "Have an interesting project idea or want to collaborate? Don't hesitate to leave a message below.",
    kontak_btn: "Send Message",
    footer_text: "&copy; 2026 Taufik | Front-End Developer. All Rights Reserved. 🚀",
    placeholder_nama: "Name",
    placeholder_pesan: "Write your message here...",
  },
};

const langToggle = document.getElementById("lang-toggle");
if (langToggle) {
  let currentLang = localStorage.getItem("lang") || "id";

  const updateLanguage = (lang) => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang][key]) {
        el.setAttribute("placeholder", translations[lang][key]);
      }
    });

    // Ubah teks tombol toggle (Jika sedang di ID, tawarkan EN, begitu sebaliknya)
    langToggle.innerText = lang === "id" ? "EN" : "ID";
  };

  // Terapkan bahasa dari localStorage saat halaman dimuat
  updateLanguage(currentLang);

  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "id" ? "en" : "id";
    localStorage.setItem("lang", currentLang);
    updateLanguage(currentLang);
  });
}
