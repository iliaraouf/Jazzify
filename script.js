/* ===================================================
   JAZZIFY — script.js
   Data arrays + dynamic rendering + interactions
=================================================== */

/* ==================================================
   ██████████  EDIT YOUR CONTENT HERE  ██████████
================================================== */

/* ---------- NEWS ----------
   Add/remove objects to update the news section.
   Fields: title, date, category, emoji, description
------------------------------------------------- */
const NEWS_ITEMS = [
  {
    title: "Kamasi Washington Announces World Tour 2025",
    date: "June 2025",
    category: "Tour",
    emoji: "🎷",
    description:
      "The LA saxophone titan is hitting stages across Europe and North America with his expansive live band, promising an immersive spiritual jazz experience unlike any other."
  },
  {
    title: "Blue Note Records Celebrates 85 Years",
    date: "May 2025",
    category: "Anniversary",
    emoji: "💿",
    description:
      "The legendary New York jazz label marks eight decades of iconic recordings with a special remastered box set and a gala concert at Carnegie Hall."
  },
  {
    title: "Robert Glasper Drops Surprise Collaborative EP",
    date: "May 2025",
    category: "Release",
    emoji: "🎹",
    description:
      "Blending jazz, hip-hop, and R&B, Glasper's latest project features collaborations with Kendrick Lamar, Erykah Badu, and Thundercat — already hailed as an instant classic."
  },
  {
    title: "Newport Jazz Festival 2025 Lineup Revealed",
    date: "April 2025",
    category: "Festival",
    emoji: "🎺",
    description:
      "One of the world's oldest jazz festivals returns with a powerhouse lineup including Esperanza Spalding, Herbie Hancock, and rising star Samara Joy gracing the main stage."
  },
  {
    title: "Coltrane's 'A Love Supreme' Gets Live Recording Release",
    date: "March 2025",
    category: "History",
    emoji: "🎵",
    description:
      "A previously unreleased 1965 concert recording of John Coltrane's masterpiece surfaces from a private archive, giving jazz historians and fans a rare new window into the music."
  },
  {
    title: "Jazz Sees 40% Streaming Surge Among Gen Z",
    date: "March 2025",
    category: "Trends",
    emoji: "📈",
    description:
      "New data from major streaming platforms shows jazz has dramatically increased its reach among younger listeners, driven by lo-fi jazz playlists, study music culture, and social media virality."
  }
];


/* ---------- ARTISTS ----------
   Add/remove objects to update the artists grid.
   Fields: name, years, emoji, description
------------------------------------------------- */
const ARTISTS = [
  {
    name: "Miles Davis",
    years: "1926 – 1991",
    emoji: "🎺",
    description:
      "The most influential musician in jazz history, Davis reinvented the genre multiple times — from bebop to cool jazz, modal, jazz fusion, and beyond. Kind of Blue remains the best-selling jazz album ever recorded."
  },
  {
    name: "Louis Armstrong",
    years: "1901 – 1971",
    emoji: "🎶",
    description:
      "Satchmo's virtuosic trumpet playing and gravelly voice made him jazz's first global superstar. His Hot Five and Hot Seven recordings in the 1920s defined the art of improvisation for generations."
  },
  {
    name: "John Coltrane",
    years: "1926 – 1967",
    emoji: "🌟",
    description:
      "A Love Supreme, Giant Steps, My Favorite Things — Trane's seismic talent and spiritual intensity pushed jazz into transcendental territory. His sheets of sound technique revolutionized the saxophone."
  },
  {
    name: "Duke Ellington",
    years: "1899 – 1974",
    emoji: "🎹",
    description:
      "Composer, bandleader, and pianist extraordinaire, Ellington composed over 1,000 pieces and led the most celebrated orchestra in jazz history for over five decades at New York's Cotton Club and beyond."
  },
  {
    name: "Charlie Parker",
    years: "1920 – 1955",
    emoji: "🦅",
    description:
      "\"Bird\" co-created bebop with Dizzy Gillespie, transforming jazz from dance music into concert art. His lightning-fast alto saxophone lines and complex harmonic ideas reshaped what music could be."
  },
  {
    name: "Ella Fitzgerald",
    years: "1917 – 1996",
    emoji: "🎤",
    description:
      "The First Lady of Song possessed a three-octave range, flawless pitch, and an unmatched gift for scat singing. Her Songbook recordings with Norman Granz are the definitive statements of the Great American Songbook."
  },
  {
    name: "Thelonious Monk",
    years: "1917 – 1982",
    emoji: "🎼",
    description:
      "Monk's angular, dissonant piano style was misunderstood for years before it was recognized as pure genius. Round Midnight, Blue Monk, and Straight No Chaser became jazz standards performed worldwide."
  },
  {
    name: "Billie Holiday",
    years: "1915 – 1959",
    emoji: "🌹",
    description:
      "Lady Day's hauntingly expressive phrasing and emotional depth gave jazz its most vulnerable voice. Strange Fruit, a protest against racial violence, stands as one of the most powerful songs ever recorded."
  }
];


/* ---------- SONGS ----------
   ✏️  ADD OR REMOVE SONGS HERE.
   Each object becomes a track in the Music section.

   To use a real audio file:
     src: "audio/track.mp3"  (place files in /audio/ folder)
   To use an external URL:
     src: "https://example.com/track.mp3"
   To show a placeholder (no file yet):
     src: ""

   Fields: title, artist, src
------------------------------------------------- */
const SONGS = [
  {
    title: "So What",
    artist: "Miles Davis",
    src: "https://up.myniloomusic2.ir/Niloo/Miles%20Davis/Miles%20Davis%20-%20So%20What.mp3"   // replace with actual path or URL
  },
  {
    title: "A Love Supreme (Part I)",
    artist: "John Coltrane",
    src: ""
  },
  {
    title: "Take Five",
    artist: "Dave Brubeck Quartet",
    src: "https://dl.musicgeek.ir/jazz/The%20Dave%20Brubeck%20Quartet%20-%20Take%20Five%20-%20musicgeek.ir.mp3"
  },
  {
    title: "Round Midnight",
    artist: "Thelonious Monk",
    src: "https://cdn1.avamma.ir/songs/track-nuHmyAXXq4nu2U7EhrDQf1nK/128/128.m3u8"
  },
  {
    title: "What a Wonderful World",
    artist: "Louis Armstrong",
    src: ""
  },
  {
    title: "My Favorite Things",
    artist: "John Coltrane",
    src: ""
  },
  {
    title: "Strange Fruit",
    artist: "Billie Holiday",
    src: ""
  },
  {
    title: "Misty",
    artist: "Erroll Garner",
    src: ""
  }
];

/* ==================================================
   END OF EDITABLE CONTENT
================================================== */




/* ===================================================
   RENDER: NEWS
=================================================== */
function renderNews() {
  const grid = document.getElementById("newsGrid");
  if (!grid) return;

  grid.innerHTML = NEWS_ITEMS.map((item, i) => `
    <article class="news-card reveal" style="transition-delay:${i * 0.08}s">
      <div class="news-img" role="img" aria-label="${item.title}">${item.emoji}</div>
      <div class="news-body">
        <div class="news-meta">${item.category} &nbsp;·&nbsp; ${item.date}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="#" class="btn-read">Read More →</a>
      </div>
    </article>
  `).join("");
}


/* ===================================================
   RENDER: ARTISTS
=================================================== */
function renderArtists() {
  const grid = document.getElementById("artistsGrid");
  if (!grid) return;

  grid.innerHTML = ARTISTS.map((artist, i) => `
    <div class="artist-card reveal" style="transition-delay:${i * 0.07}s">
      <div class="artist-avatar">
        <span style="position:relative;z-index:1">${artist.emoji}</span>
      </div>
      <div class="artist-body">
        <div class="artist-name">${artist.name}</div>
        <div class="artist-years">${artist.years}</div>
        <p class="artist-desc">${artist.description}</p>
      </div>
    </div>
  `).join("");
}


/* ===================================================
   RENDER: MUSIC
=================================================== */
function renderTracks() {
  const list = document.getElementById("tracksList");
  if (!list) return;

  if (SONGS.length === 0) {
    list.innerHTML = `<p style="color:var(--text-dim);text-align:center;font-style:italic;padding:2rem;">No tracks yet. Add songs to the SONGS array in script.js.</p>`;
    return;
  }

  list.innerHTML = SONGS.map((song, i) => {
    const hasAudio = song.src && song.src.trim() !== "";
    const audioTag = hasAudio
      ? `<audio controls preload="none" class="track-audio" data-index="${i}">
           <source src="${song.src}">
           Your browser does not support the audio element.
         </audio>`
      : `<div style="
            font-family:var(--font-mono);font-size:0.68rem;
            color:var(--text-faint);letter-spacing:0.12em;
            padding:0.4rem 0;
          ">NO AUDIO FILE — add a src to SONGS[${i}] in script.js</div>`;

    return `
      <div class="track-item reveal" data-index="${i}" style="transition-delay:${i * 0.06}s">
        <div class="track-header">
          <span class="track-num">${String(i + 1).padStart(2, "0")}</span>
          <div class="track-info">
            <div class="track-title">${song.title}</div>
            <div class="track-artist">${song.artist}</div>
          </div>
        </div>
        <div class="track-player">
          ${audioTag}
        </div>
      </div>
    `;
  }).join("");

  // Highlight active track & update now-playing panel on play
  list.querySelectorAll(".track-audio").forEach(audio => {
    audio.addEventListener("play", () => {
      const idx = parseInt(audio.dataset.index);

      // Clear active states
      list.querySelectorAll(".track-item").forEach(el => el.classList.remove("active"));

      // Set active
      const parentItem = audio.closest(".track-item");
      if (parentItem) parentItem.classList.add("active");

      // Now-playing panel
      const song = SONGS[idx];
      document.getElementById("npTitle").textContent = song.title;
      document.getElementById("npArtist").textContent = song.artist;

      const vinyl = document.getElementById("npVinyl");
      vinyl.classList.add("spinning");

      // Stop spinning when paused/ended
      audio.addEventListener("pause", () => vinyl.classList.remove("spinning"), { once: false });
      audio.addEventListener("ended", () => vinyl.classList.remove("spinning"), { once: false });
    });
  });
}


/* ===================================================
   SCROLL REVEAL
=================================================== */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  // Observe all .reveal elements
  function observeNew() {
    document.querySelectorAll(".reveal:not(.visible)").forEach(el => observer.observe(el));
  }
  observeNew();

  // Re-observe after dynamic renders
  return observeNew;
}


/* ===================================================
   NAVBAR: scroll + mobile toggle
=================================================== */
function initNav() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  // Sticky shadow
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });

  // Mobile toggle
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Close on link click
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      toggle.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  // Active link highlight on scroll
  const sections = document.querySelectorAll("section[id]");
  const navItems = navLinks.querySelectorAll("a");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navItems.forEach(a => a.classList.remove("active-link"));
          const active = [...navItems].find(a => a.getAttribute("href") === `#${entry.target.id}`);
          if (active) active.classList.add("active-link");
        }
      });
    },
    { rootMargin: "-50% 0px -50% 0px" }
  );
  sections.forEach(s => sectionObserver.observe(s));
}


/* ===================================================
   PARALLAX — subtle hero elements
=================================================== */
function initParallax() {
  const c1 = document.querySelector(".c1");
  const c2 = document.querySelector(".c2");
  const sax = document.querySelector(".sax-svg");

  if (!c1) return;

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (c1) c1.style.transform = `translateY(${y * 0.15}px)`;
    if (c2) c2.style.transform = `translateY(${y * -0.1}px)`;
    if (sax) sax.style.transform = `rotate(15deg) translateY(${-y * 0.08}px)`;
  }, { passive: true });
}


/* ===================================================
   MOUSEMOVE — subtle card tilt
=================================================== */
function initCardTilt() {
  const cards = document.querySelectorAll(".news-card, .artist-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `
        translateY(-6px)
        rotateX(${-y * 5}deg)
        rotateY(${x * 5}deg)
        scale(1.01)
      `;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}


/* ===================================================
   INIT
=================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Render dynamic content
  renderNews();
  renderArtists();
  renderTracks();

  // Init features
  const reobserve = initScrollReveal();
  initNav();
  initParallax();

  // After renders, re-observe new .reveal elements
  requestAnimationFrame(() => {
    reobserve();
    initCardTilt();
  });

  // Prevent "read more" links from navigating
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-read")) {
      e.preventDefault();
    }
  });
});