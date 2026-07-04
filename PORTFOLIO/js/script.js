/* =====================================================================
   script.js
   This file dynamically builds the repeated content of the portfolio
   (navigation links, hobby entries, and contact entries) using
   JavaScript arrays of objects + looping techniques, instead of
   hard-coding that content into index.html.
===================================================================== */


/* ---------------------------------------------------------------------
   1. DATA ARRAYS
   Each array holds objects that describe one repeated "unit" of
   content. We will loop over these arrays to build the HTML elements.
--------------------------------------------------------------------- */

// Array of objects for the navigation links.
// Each object has the text to show and the section id it should link to.
const navLinksData = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Contact", href: "#contact" },
];

// Array of objects for the hobbies section.
// Each object has an icon (emoji), a name, and a short description.
// Icons were chosen to fit a fantasy/enchanted theme.
const hobbiesData = [
  {
    icon: "🎭",
    name: "Watching Korean & Chinese Dramas",
    desc: "I enjoy watching Korean and Chinese dramas during my free time.",
  },
  {
    icon: "🎻",
    name: "Listening to Music",
    desc: "Music helps me relax, stay motivated, and focus while studying.",
  },
  {
    icon: "📜",
    name: "Reading Books",
    desc: "I enjoy reading books that help me learn new things and unwind.",
  },
  {
    icon: "🌿",
    name: "Creating Fuzzy Wire Flowers",
    desc: "I love making handmade fuzzy wire flowers as a creative hobby.",
  },
  {
    icon: "🕯️",
    name: "Learning and Practicing New Dance Choreographies",
    desc: "I enjoy practicing new dance choreographies for fun and self-expression.",
  },
];

// Array of objects for the contact section.
// Each object has: an icon, a label (platform name), the display text,
// the clickable link, and whether it should open in a new tab.
const contactData = [
  {
    icon: "🕊️",
    label: "Email",
    value: "charissemendoza194@gmail.com",
    link: "mailto:charissemendoza194@gmail.com",
    newTab: false,
  },
  {
    icon: "📯",
    label: "Phone",
    value: "09563063715",
    link: "tel:+639563063715",
    newTab: false,
  },
  {
    icon: "🦉",
    label: "Facebook",
    value: "Charisse Mae Mendoza",
    link: "https://www.facebook.com/charissemae.mendoza.2/",
    newTab: true,
  },
  {
    icon: "🔮",
    label: "Instagram",
    value: "@asyneia",
    link: "https://www.instagram.com/asyneia/",
    newTab: true,
  },
];


/* ---------------------------------------------------------------------
   2. BUILD THE NAVIGATION LINKS
   We use a forEach() loop here. For every object in navLinksData we:
     a) create an <li> element
     b) create an <a> element inside it
     c) set the link text and href from the object's properties
     d) append the <a> to the <li>, then the <li> to the <ul>
--------------------------------------------------------------------- */
function buildNavLinks() {
  const navList = document.getElementById("navLinks"); // the <ul> container

  navLinksData.forEach(function (linkItem) {
    const li = document.createElement("li");       // create <li>
    const a = document.createElement("a");          // create <a>

    a.textContent = linkItem.label;                  // set visible text
    a.setAttribute("href", linkItem.href);            // set the link target

    // Close the mobile menu when a link is clicked
    a.addEventListener("click", function () {
      document.getElementById("navLinks").classList.remove("open");
    });

    li.appendChild(a);        // put <a> inside <li>
    navList.appendChild(li);  // put <li> inside <ul>
  });
}


/* ---------------------------------------------------------------------
   3. BUILD THE HOBBY ENTRIES
   We use a for...of loop here, along with the loop's index (tracked
   manually) to alternate each entry left/right, like facing pages of
   a spellbook. For every hobby object we build a medallion icon, a
   title, and a description, then append the finished entry to the
   list container.
--------------------------------------------------------------------- */
function buildHobbies() {
  const list = document.getElementById("hobbiesGrid"); // the list container
  let index = 0; // tracks position so we can alternate left/right

  for (const hobby of hobbiesData) {
    // Create the outer entry container
    const entry = document.createElement("div");
    // Alternate class: even index -> "left", odd index -> "right"
    entry.className = "hobby-entry " + (index % 2 === 0 ? "left" : "right");

    // Create and fill the medallion icon element
    const medallion = document.createElement("div");
    medallion.className = "hobby-medallion";
    medallion.textContent = hobby.icon;

    // Create and fill the hobby name/title element
    const name = document.createElement("h3");
    name.className = "hobby-name";
    name.textContent = hobby.name;

    // Create and fill the description element
    const desc = document.createElement("p");
    desc.className = "hobby-desc";
    desc.textContent = hobby.desc;

    // Assemble the entry: medallion -> name -> description
    entry.appendChild(medallion);
    entry.appendChild(name);
    entry.appendChild(desc);

    // Add the finished entry to the page
    list.appendChild(entry);

    index++;
  }
}


/* ---------------------------------------------------------------------
   4. BUILD THE CONTACT ENTRIES
   We use a classic for loop here (with an index) to show a third
   looping technique. For every contact object we build a clickable
   <a> row containing a wax-seal icon, a label (e.g. "Email"), and the
   display value (e.g. the actual email address).
--------------------------------------------------------------------- */
function buildContacts() {
  const list = document.getElementById("contactGrid"); // the list container

  for (let i = 0; i < contactData.length; i++) {
    const contact = contactData[i]; // current contact object

    // The whole entry itself is a clickable link
    const entry = document.createElement("a");
    entry.className = "contact-entry";
    entry.setAttribute("href", contact.link);

    // Open Facebook/Instagram links in a new tab, as required
    if (contact.newTab) {
      entry.setAttribute("target", "_blank");
      entry.setAttribute("rel", "noopener noreferrer");
    }

    // Wax-seal icon circle
    const seal = document.createElement("span");
    seal.className = "contact-seal";
    seal.textContent = contact.icon;

    // Text wrapper holds the label + value stacked vertically
    const textWrap = document.createElement("div");

    const label = document.createElement("span");
    label.className = "contact-label";
    label.textContent = contact.label;

    const value = document.createElement("span");
    value.className = "contact-value";
    value.textContent = contact.value;

    textWrap.appendChild(label);
    textWrap.appendChild(value);

    // Assemble the entry: seal + text wrapper
    entry.appendChild(seal);
    entry.appendChild(textWrap);

    // Add the finished entry to the page
    list.appendChild(entry);
  }
}


/* ---------------------------------------------------------------------
   5. DRIFTING FIREFLIES (decorative, enchanted-forest touch)
   Purely visual: scatters small glowing dots around the page and
   gives each one a random position, drift path, and timing using a
   for loop, so they don't all move in sync.
--------------------------------------------------------------------- */
function buildFireflies() {
  const field = document.getElementById("fireflyField");
  const totalFireflies = 24;

  for (let i = 0; i < totalFireflies; i++) {
    const firefly = document.createElement("span");
    firefly.className = "firefly";

    // Random position across the viewport
    firefly.style.top = Math.random() * 100 + "vh";
    firefly.style.left = Math.random() * 100 + "vw";

    // Random drift duration/delay so movement feels organic
    const driftDuration = 6 + Math.random() * 8; // 6s to 14s
    const glowDelay = Math.random() * 3;
    firefly.style.animationDuration = driftDuration + "s, 2.6s";
    firefly.style.animationDelay = Math.random() * 4 + "s, " + glowDelay + "s";

    field.appendChild(firefly);
  }
}


/* ---------------------------------------------------------------------
   6. AMBIENT MAGICAL BACKGROUND MUSIC
   The actual audio file lives at assets/audio/enchanted-ambience.wav
   and is loaded through the <audio id="bgMusic"> element already
   sitting in index.html (with loop enabled, so it repeats seamlessly).
   This function just fades that element's volume in/out and plays or
   pauses it. Browsers block audio from starting on its own, so
   playback only begins after the person clicks the music button.
--------------------------------------------------------------------- */
let isPlaying = false;
let fadeInterval = null;
const MUSIC_VOLUME = 0.55; // target volume when fully faded in (0 to 1)

// Smoothly ramps the <audio> element's volume toward a target value.
// (The native volume property has no built-in transition, so we step
// it manually with setInterval to avoid an abrupt jump in/out.)
function fadeAudioTo(audio, targetVolume, durationMs, onDone) {
  clearInterval(fadeInterval);
  const steps = 30;
  const stepTime = durationMs / steps;
  const startVolume = audio.volume;
  const volumeStep = (targetVolume - startVolume) / steps;
  let currentStep = 0;

  fadeInterval = setInterval(function () {
    currentStep++;
    audio.volume = Math.min(1, Math.max(0, startVolume + volumeStep * currentStep));

    if (currentStep >= steps) {
      clearInterval(fadeInterval);
      audio.volume = targetVolume;
      if (onDone) onDone();
    }
  }, stepTime);
}

function toggleMusic() {
  const button = document.getElementById("musicToggle");
  const audio = document.getElementById("bgMusic");

  if (!isPlaying) {
    audio.volume = 0;
    audio.play(); // resumes/starts the looping track
    fadeAudioTo(audio, MUSIC_VOLUME, 1200);
    isPlaying = true;
  } else {
    fadeAudioTo(audio, 0, 800, function () {
      audio.pause(); // pause only after the fade-out finishes
    });
    isPlaying = false;
  }

  button.classList.toggle("playing", isPlaying);
  button.setAttribute("aria-pressed", String(isPlaying));
  button.setAttribute(
    "aria-label",
    isPlaying ? "Pause magical background music" : "Play magical background music"
  );
}


/* ---------------------------------------------------------------------
   7. SMALL UI BEHAVIORS
   - Smooth scroll from the hero button to the Contact section
   - Mobile nav toggle (hamburger menu)
--------------------------------------------------------------------- */
function setupInteractions() {
  // Smooth scroll to Contact Me section
  const scrollBtn = document.getElementById("scrollToContact");
  scrollBtn.addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });

  // Toggle the mobile navigation menu
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });

  // Play / pause the ambient background music
  const musicToggle = document.getElementById("musicToggle");
  musicToggle.addEventListener("click", toggleMusic);
}


/* ---------------------------------------------------------------------
   8. RUN EVERYTHING ONCE THE DOM IS READY
--------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  buildNavLinks();
  buildHobbies();
  buildContacts();
  buildFireflies();
  setupInteractions();
});
