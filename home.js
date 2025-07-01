//navigation menu active link functionality
const links = document.querySelectorAll('.nav-menu a');
const currentPath = window.location.pathname.split("/").pop();

let matched = false;
links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === "" && href === "home.html")) {
        link.classList.add('active');
        matched = true;
    } else {
        link.classList.remove('active');
    }
});

if (!matched) {
    links[0].classList.add('active');
}

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});


  function toggleDropdown() {
    const dropdown = document.getElementById("profileDropdown");
    dropdown.classList.toggle("active");
  }
 
  function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out!");
    window.location.href = "login.html";
  }

// create link form functionality
document.querySelector(".link-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const input = document.querySelector(".link-form input");
    const username = input.value.trim();

    if (username) {
        const link = `https://${encodeURIComponent(username)}.com`;
        alert(`Your link is: ${link}`);
    } else {
        alert("Please enter your name to generate a link.");
    }
});

// contact form functionality

    function showSection(sectionId) {
      const sections = document.querySelectorAll("section");
      sections.forEach(sec => {
        sec.classList.remove("active");
      });
      document.getElementById(sectionId).classList.add("active");
    }

    function submitContact(e) {
      e.preventDefault();
      alert("Thank you! We'll contact you soon.");
      e.target.reset();
    }  

    // Profile functionality 
    const user = JSON.parse(localStorage.getItem("loggedInUser")) || {
    name: "Name",
    email: "you@example.com"
  };

  document.getElementById("userName").textContent = user.name;
  document.getElementById("cardUserName").textContent = user.name;
  document.getElementById("cardUserEmail").textContent = user.email;

  function toggleDropdown() {
    document.getElementById("dropdownCard").classList.toggle("active");
  }

  document.addEventListener("click", function (e) {
    const profile = document.querySelector(".profile-container");
    if (!profile.contains(e.target)) {
      document.getElementById("dropdownCard").classList.remove("active");
    }
  });
  function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out!");
    window.location.href = "login.html";
  }