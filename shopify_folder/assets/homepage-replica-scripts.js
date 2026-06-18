(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '../../www.googletagmanager.com/gtm5445.html?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-M2M7MMBL');


        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "vhpp4s8zwt");
        window.clarity("consent");
    


// Gender State Synchronizer - runs BEFORE products load
// Fixes race condition where cookie may not be written before page navigation
(function() {
    // Get saved gender from localStorage (survives better than async cookies)
    var savedGender = localStorage.getItem('qatarshoes_department');
    if (!savedGender || (savedGender !== 'women' && savedGender !== 'men')) {
        savedGender = 'women'; // default
    }

    // Sync cookie immediately (ensure PHP gets correct value on next load)
    document.cookie = 'qatarshoes_department=' + savedGender + '; path=/; max-age=' + (365 * 24 * 60 * 60);

    // Check if PHP rendered the wrong gender
    var phpGender = 'women';

    if (savedGender !== phpGender) {
        // Set body class immediately to correct gender
        document.documentElement.classList.add('dept-' + savedGender);
        document.documentElement.classList.remove('dept-' + phpGender);

        // Flag that products need reload after page loads
        window._genderMismatch = { php: phpGender, correct: savedGender };
    }

    // Set body class on html element as early as possible
    document.documentElement.classList.add('dept-' + savedGender);
})();



            document.addEventListener('DOMContentLoaded', function() {
                /* Close all desktop lang dropdowns */
                window.closeLangDropdowns = function() {
                    document.querySelectorAll('.lang-dropdown').forEach(function(d) { d.classList.remove('open'); });
                    document.querySelectorAll('.lang-selector-wrapper .lang-selector').forEach(function(t) { t.setAttribute('aria-expanded', 'false'); });
                };

                /* Toggle lang dropdown */
                document.querySelectorAll('.lang-selector-wrapper .lang-selector').forEach(function(trigger) {
                    trigger.addEventListener('click', function(e) {
                        e.stopPropagation();
                        var wrapper = trigger.closest('.lang-selector-wrapper');
                        var dropdown = wrapper.querySelector('.lang-dropdown');
                        var isOpen = dropdown.classList.contains('open');

                        /* Close all lang dropdowns */
                        window.closeLangDropdowns();

                        /* Close currency & delivery dropdowns when opening lang */
                        document.querySelectorAll('.currency-dropdown.is-open').forEach(function(d) {
                            d.classList.remove('is-open');
                            d.setAttribute('aria-hidden', 'true');
                        });
                        document.querySelectorAll('.currency-selector[aria-expanded="true"]').forEach(function(t) {
                            t.setAttribute('aria-expanded', 'false');
                        });
                        if (window.DeliveryMode) window.DeliveryMode.closeAll();

                        if (!isOpen) {
                            dropdown.classList.add('open');
                            trigger.setAttribute('aria-expanded', 'true');
                        }
                    });
                });

                /* Lang option click */
                document.querySelectorAll('.lang-selector-wrapper .lang-option').forEach(function(opt) {
                    opt.addEventListener('click', function() {
                        var lang = opt.dataset.lang;
                        if (window.QS_I18n && lang !== QS_I18n.lang()) {
                            QS_I18n.switchTo(lang);
                        }
                    });
                });

                /* Close on outside click */
                document.addEventListener('click', function(e) {
                    if (!e.target.closest('.lang-selector-wrapper')) {
                        window.closeLangDropdowns();
                    }
                });
            });
            


// Pass PHP gender to external JS
window.headerPhpGender = 'women';



    (function() {
      var stickyWrapper = document.getElementById('homepage-sticky-header');
      var transparentHeader = document.getElementById('homepage-desktop-header');
      var ticking = false;

      function updateHeader() {
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var heroContent = document.querySelector('.home-hero-content');
        var threshold = heroContent ? heroContent.offsetHeight * 0.85 : window.innerHeight * 0.85;

        // Toggle between transparent and sticky headers
        if (scrollY > threshold) {
          if (transparentHeader) transparentHeader.classList.add('hidden');
          if (stickyWrapper) stickyWrapper.classList.add('visible');
        } else {
          if (transparentHeader) transparentHeader.classList.remove('hidden');
          if (stickyWrapper) stickyWrapper.classList.remove('visible');
        }
        ticking = false;
      }

      window.addEventListener('scroll', function() {
        if (!ticking) { window.requestAnimationFrame(updateHeader); ticking = true; }
      }, { passive: true });
      updateHeader();
    })();
  


    window.openSearch = function() {
      document.getElementById('home-search-overlay').classList.add('active');
      document.getElementById('home-search-input').focus();
      document.body.style.overflow = 'hidden';
    };
    window.closeSearch = function() {
      document.getElementById('home-search-overlay').classList.remove('active');
      document.body.style.overflow = '';
    };
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeSearch(); });
  


(function() {
  // DOM elements
  var drawer = document.getElementById('home-mobile-drawer');
  var overlay = document.getElementById('home-drawer-overlay');
  var closeBtn = document.getElementById('drawer-close');

  // Open drawer
  function openDrawer() {
    if (drawer) drawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
    if (closeBtn) closeBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close drawer
  function closeDrawer() {
    if (drawer) drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    if (closeBtn) closeBtn.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Expose functions globally IMMEDIATELY so they're available
  window.openHomeDrawer = openDrawer;
  window.closeHomeDrawer = closeDrawer;
  window.toggleMobileMenu = function() {
    if (drawer && drawer.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };
  window.openMobileMenu = openDrawer;
  window.closeMobileMenu = closeDrawer;

  // Event delegation for accordion - handles clicks on drawer
  if (drawer) {
    drawer.addEventListener('click', function(e) {
      var target = e.target;

      // Handle tab clicks - use centralized handler to sync all components
      if (target.classList.contains('drawer-tab')) {
        var gender = target.dataset.gender;
        // Use the centralized HeaderState handler which syncs:
        // - Desktop nav, mobile drawer tabs, body classes, localStorage, cookies
        if (typeof window.handleDeptToggle === 'function') {
          window.handleDeptToggle(gender);
        }
        return;
      }

      // Handle top-level expand button clicks
      var expandBtn = target.closest('.drawer-expand-btn');
      if (expandBtn && !expandBtn.classList.contains('drawer-expand-btn-nested')) {
        e.preventDefault();
        e.stopPropagation();
        var container = expandBtn.closest('.drawer-nav');
        var expandable = expandBtn.closest('.drawer-expandable');
        var submenu = expandable ? expandable.querySelector('.drawer-submenu') : null;
        var icon = expandBtn.querySelector('.drawer-expand-icon');
        var isOpen = submenu && submenu.classList.contains('open');

        // Close all submenus in this nav
        if (container) {
          container.querySelectorAll('.drawer-submenu').forEach(function(sm) {
            sm.classList.remove('open');
          });
          container.querySelectorAll('.drawer-expand-icon').forEach(function(ic) {
            ic.textContent = '+';
          });
        }

        // Toggle current
        if (!isOpen && submenu) {
          submenu.classList.add('open');
          if (icon) icon.textContent = '−';
        }
        return;
      }

      // Handle nested expand button clicks
      var nestedBtn = target.closest('.drawer-expand-btn-nested');
      if (nestedBtn) {
        e.preventDefault();
        e.stopPropagation();
        var nestedExpandable = nestedBtn.closest('.drawer-expandable-nested');
        var nestedSubmenu = nestedExpandable ? nestedExpandable.querySelector('.drawer-submenu-nested') : null;
        var nestedIcon = nestedBtn.querySelector('.drawer-expand-icon-nested');
        var nestedIsOpen = nestedSubmenu && nestedSubmenu.classList.contains('open');
        var parentSubmenu = nestedBtn.closest('.drawer-submenu');

        // Close all nested submenus in parent
        if (parentSubmenu) {
          parentSubmenu.querySelectorAll('.drawer-submenu-nested').forEach(function(sm) {
            sm.classList.remove('open');
          });
          parentSubmenu.querySelectorAll('.drawer-expand-icon-nested').forEach(function(ic) {
            ic.textContent = '+';
          });
        }

        // Toggle current
        if (!nestedIsOpen && nestedSubmenu) {
          nestedSubmenu.classList.add('open');
          if (nestedIcon) nestedIcon.textContent = '−';
        }
        return;
      }
    });
  }

  // Close button and overlay
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeDrawer();
  });

  // Locale dropdowns (currency + language) toggle
  var localeTriggers = document.querySelectorAll('.drawer-locale-trigger');
  localeTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function(e) {
      e.stopPropagation();
      var col = trigger.closest('.drawer-locale-col');
      var dropdown = col ? col.querySelector('.drawer-locale-dropdown') : null;
      if (!dropdown) return;
      var isOpen = dropdown.classList.contains('open');

      // Close all locale dropdowns first
      document.querySelectorAll('.drawer-locale-dropdown').forEach(function(d) { d.classList.remove('open'); });
      document.querySelectorAll('.drawer-locale-trigger').forEach(function(t) { t.setAttribute('aria-expanded', 'false'); });

      if (!isOpen) {
        dropdown.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Language option click — navigate to translated URL
  document.querySelectorAll('.drawer-lang-option').forEach(function(opt) {
    opt.addEventListener('click', function() {
      var lang = opt.dataset.lang;
      if (window.QS_I18n && lang !== QS_I18n.lang()) {
        QS_I18n.switchTo(lang);
      }
    });
  });

  // Close locale dropdowns when clicking outside
  document.addEventListener('click', function() {
    document.querySelectorAll('.drawer-locale-dropdown').forEach(function(d) { d.classList.remove('open'); });
    document.querySelectorAll('.drawer-locale-trigger').forEach(function(t) { t.setAttribute('aria-expanded', 'false'); });
  });

  // Initialize gender from localStorage
  var storedGender = null;
  try { storedGender = localStorage.getItem('qatarshoes_department'); } catch (e) {}
  if (storedGender && (storedGender === 'men' || storedGender === 'women') && storedGender !== 'women') {
    if (drawer) {
      drawer.querySelectorAll('.drawer-tab').forEach(function(tab) {
        tab.classList.toggle('active', tab.dataset.gender === storedGender);
      });
      drawer.querySelectorAll('.drawer-nav').forEach(function(nav) {
        nav.style.display = nav.dataset.dept === storedGender ? '' : 'none';
      });
    }
  }
})();



    // Override sticky header's menu button to use our drawer (outside the transform wrapper)
    document.addEventListener('DOMContentLoaded', function() {
      var stickyMenuBtn = document.querySelector('.homepage-sticky-wrapper .menu-toggle');
      if (stickyMenuBtn) {
        stickyMenuBtn.onclick = function(e) {
          e.preventDefault();
          if (typeof openHomeDrawer === 'function') {
            openHomeDrawer();
          }
        };
      }
    });
  


     (function() {
         function initMarquee() {
             var marqueeContent = document.querySelector('.marquee-content');
             if (!marqueeContent) return;

             var textSpans = marqueeContent.querySelectorAll('.text');
             if (textSpans.length < 2) return;

             // Measure exact distance between first and second text element
             var firstText = textSpans[0];
             var secondText = textSpans[1];
             var segmentWidth = Math.abs(secondText.getBoundingClientRect().left - firstText.getBoundingClientRect().left);

             // Stop current animation
             marqueeContent.style.animation = 'none';
             marqueeContent.offsetHeight; // Force reflow

             // RTL: scroll right (positive), LTR: scroll left (negative)
             var isRtl = document.documentElement.getAttribute('dir') === 'rtl';
             var translateValue = isRtl ? segmentWidth : -segmentWidth;
             var styleSheet = document.createElement('style');
             styleSheet.textContent = '@keyframes marquee-smooth { 0% { transform: translateX(0); } 100% { transform: translateX(' + translateValue + 'px); } }';
             document.head.appendChild(styleSheet);

             // Apply new animation
             marqueeContent.style.animation = 'marquee-smooth 5s linear infinite';
         }

         // Wait for fonts to load for accurate measurement
         if (document.fonts && document.fonts.ready) {
             document.fonts.ready.then(initMarquee);
         } else {
             window.addEventListener('load', initMarquee);
         }
     })();
     


     (function(){var s=document.querySelectorAll('.home-featured-section .homepage-section');if(s.length){for(var i=s.length-1;i>=0;i--){if(s[i].offsetParent!==null||s[i].style.display!=='none'){s[i].classList.add('last-before-explore');break;}}}})();
     


     {"@context":"http://schema.org/","@type":"WebSite","url":"https://www.italist.com","potentialAction":[{"@type":"SearchAction","target":"https://www.italist.com/women/?q={search_term_string}","query-input":"required name=search_term_string"}]}
    


     {"@context":"http://schema.org/","@type":"Organization","name":"qatarshoes","url":"https://www.italist.com/","logo":"https://d3nn9jcidi1lkh.cloudfront.net/mkt/logo_small.png","sameAs":["https://www.pinterest.com/italist/","https://www.facebook.com/italistofficial","https://twitter.com/italistofficial","../../www.instagram.com/italist/index.html","https://www.youtube.com/channel/UCP_IvG86LUX-kA-N3WzdAmQ"]}
    


(function() {
  'use strict';

  var CONFIG = {
    heroImages: {
      women: 'https://staging3.qatarshoe.com/wp-content/uploads/2026/03/Group-2.png',
      men: 'https://staging3.qatarshoe.com/wp-content/uploads/2026/03/Qtr-men.jpg'
    },
    heroImagesMobile: {
      women: 'https://staging3.qatarshoe.com/wp-content/uploads/2026/03/qtr-w-mobile.png'
    }
  };

  function getHeroImage(dept) {
    var isMobile = window.innerWidth < 1024;
    if (isMobile && CONFIG.heroImagesMobile[dept]) {
      return CONFIG.heroImagesMobile[dept];
    }
    return CONFIG.heroImages[dept];
  }

  // Set initial hero image based on body class (default: women)
  function setInitialHeroImage() {
    var heroImage = document.querySelector('.hero-image');
    if (!heroImage) return;

    var dept = 'women'; // default
    if (document.body.classList.contains('dept-men')) {
      dept = 'men';
    }

    var imgUrl = getHeroImage(dept);
    if (imgUrl) {
      heroImage.style.setProperty('background-image', 'url("' + imgUrl + '")', 'important');
    }
  }

  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setInitialHeroImage);
  } else {
    setInitialHeroImage();
  }

  // Capture clicks on department toggle elements (PHP header uses .dept-toggle and .desktop-nav-department-toggle)
  document.addEventListener('click', function(e) {
    var target = e.target;
    var deptLink = null;

    // Walk up DOM to find department link
    while (target && target !== document) {
      if (target.classList && target.classList.contains('department-text')) {
        deptLink = target.closest('a');
        break;
      }
      // Support both legacy and current PHP header selectors
      if (target.tagName === 'A' && (target.closest('.dept-toggle') || target.closest('.desktop-nav-department-toggle'))) {
        deptLink = target;
        break;
      }
      target = target.parentElement;
    }

    if (deptLink) {
      var span = deptLink.querySelector('.department-text');
      var deptName = span ? (span.getAttribute('title') || span.textContent.trim()).toLowerCase() : null;

      if (deptName && ['women', 'men'].indexOf(deptName) !== -1) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        switchDepartment(deptName);
        return false;
      }
    }
  }, true); // CAPTURE phase - runs BEFORE bubbling

  function switchDepartment(dept) {
    // Use centralized sync function (updates ALL UI elements)
    syncAllGenderUI(dept);

    // Update URL without navigation
    var newUrl = '/';
    if (dept === 'men') newUrl = '../shop-men/index.html';
    history.pushState({ department: dept }, '', newUrl);

    // Dispatch event for products.js to reload products based on new department
    window.dispatchEvent(new CustomEvent('departmentChanged', {
      detail: { department: dept }
    }));
  }

  // Handle gender mismatch detected by head script
  function handleGenderMismatch() {
    if (!window._genderMismatch) return;

    var correctGender = window._genderMismatch.correct;

    // Call syncAllGenderUI to update everything
    syncAllGenderUI(correctGender);

    // Dispatch event to reload products with correct gender from Master Config
    window.dispatchEvent(new CustomEvent('departmentChanged', {
      detail: { department: correctGender }
    }));

    delete window._genderMismatch;
  }

  // SINGLE SOURCE OF TRUTH: Sync ALL gender UI elements
  // Call this whenever gender changes to ensure consistency
  function syncAllGenderUI(gender) {
    // 1. Update body class
    document.body.classList.remove('dept-women', 'dept-men');
    document.body.classList.add('dept-' + gender);

    // 2. Update desktop header toggle buttons (support both legacy and current selectors)
    var allDeptLinks = document.querySelectorAll('.dept-toggle a, .desktop-nav-department-toggle a');
    allDeptLinks.forEach(function(link) {
      var span = link.querySelector('.department-text');
      if (span) {
        var linkDept = (span.getAttribute('title') || span.textContent.trim()).toLowerCase();
        if (linkDept === gender) {
          span.classList.remove('jsx-2522988750');
          span.classList.add('jsx-2005615775');
        } else {
          span.classList.remove('jsx-2005615775');
          span.classList.add('jsx-2522988750');
        }
      }
    });

    // 3. Update mobile drawer tabs
    var drawerTabs = document.querySelectorAll('.drawer-tab');
    drawerTabs.forEach(function(tab) {
      if (tab.dataset.gender === gender) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // 4. Update mobile drawer navigation visibility
    var drawerNavWomen = document.getElementById('drawer-nav-women');
    var drawerNavMen = document.getElementById('drawer-nav-men');
    if (drawerNavWomen) drawerNavWomen.style.display = (gender === 'women') ? '' : 'none';
    if (drawerNavMen) drawerNavMen.style.display = (gender === 'men') ? '' : 'none';

    // 5. Update desktop navigation menus
    var navWrappers = document.querySelectorAll('.navigation-menu-wrapper[data-dept]');
    navWrappers.forEach(function(wrapper) {
      var wrapperDept = wrapper.getAttribute('data-dept');
      wrapper.style.display = (wrapperDept === gender) ? 'flex' : 'none';
    });

    // 6. Update hero image
    var heroImage = document.querySelector('.hero-image');
    var imgUrl = getHeroImage(gender);
    if (heroImage && imgUrl) {
      heroImage.style.setProperty('background-image', 'url("' + imgUrl + '")', 'important');
    }

    // 7. Update View More URLs
    var deliveryMode = window.location.pathname.includes('/ready-to-go') ? 'ready-to-go' : 'ready-to-ship';
    document.querySelectorAll('.boxed-image-wrapper-link[data-section]').forEach(function(link) {
      if (link.closest('[data-section="explore"]')) return;
      var collectionHandle = link.getAttribute('data-collection-' + gender);
      if (collectionHandle) {
        link.href = '/' + deliveryMode + '//collections/' + collectionHandle + '/';
      }
    });

    // 8. Show/hide sections based on collection configuration
    document.querySelectorAll('.homepage-section[data-section]').forEach(function(section) {
      var hasCollection = section.getAttribute('data-has-' + gender) === 'true';
      section.style.display = hasCollection ? '' : 'none';
    });

    // 8a. Update section heading titles for new gender
    document.querySelectorAll('.showcase-section-heading[data-section-key]').forEach(function(heading) {
      var title = heading.getAttribute('data-title-' + gender);
      if (title) heading.textContent = title;
    });

    // 8b. Explore by Category refresh is handled by refreshExploreSection()
    // in products.js via the departmentChanged event.

    // 9. Save to localStorage and cookie (ensure persistence)
    try {
      localStorage.setItem('qatarshoes_department', gender);
    } catch (e) {}
    document.cookie = 'qatarshoes_department=' + gender + '; path=/; max-age=' + (365 * 24 * 60 * 60);
  }

  // Expose globally for other scripts
  window.syncAllGenderUI = syncAllGenderUI;

  // Handle gender mismatch on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleGenderMismatch);
  } else {
    handleGenderMismatch();
  }

  // Listen for departmentChanged event (fired by mobile drawer, products.js, etc.)
  window.addEventListener('departmentChanged', function(e) {
    var dept = e.detail && e.detail.department;
    if (!dept) return;
    syncAllGenderUI(dept);
  });
})();



(function() {
  'use strict';

  var GUARDIAN_VERSION = '2.0';

  // Force visibility on a container - ONLY if Shopify products have fully replaced hardcoded ones
  function forceVisibility(container) {
    if (!container) return false;

    // Already marked as loaded - skip
    if (container.classList.contains('shopify-loaded')) return false;

    // Check for ACTUAL Shopify product cards (links with /product/ URL)
    var hasProductCards = container.querySelector('a[href*="/product/"]');

    // Check for Shopify images
    var hasShopifyImages = container.querySelector('img[src*="cdn.shopify.com"]');

    // Check for hardcoded products (old URLs with numeric IDs like /17228070/)
    var hasHardcodedProducts = container.querySelector('a[href*="/17"][href*="/women/"], a[href*="/17"][href*="/men/"]');

    // Also check for legacy CDN images (hardcoded)
    var hasLegacyImages = container.querySelector('img[src*="d3nn9jcidi1lkh.cloudfront.net"], img[src*="cdn-images.italist.com"]');

    // Only force visibility if:
    // 1. Has Shopify product cards (proper /product/ URLs)
    // 2. Has Shopify images
    // 3. NO hardcoded products remain
    // 4. NO legacy images remain
    if (!hasProductCards || !hasShopifyImages) {
      return false;
    }

    if (hasHardcodedProducts || hasLegacyImages) {
      return false;
    }

    // Safe to force visibility - Shopify products have fully loaded
    container.classList.add('shopify-loaded');
    container.style.setProperty('opacity', '1', 'important');
    container.style.setProperty('visibility', 'visible', 'important');
    container.style.setProperty('pointer-events', 'auto', 'important');

    return true;
  }

  // Check all product containers
  function checkAllContainers() {
    var containers = document.querySelectorAll('.products-container, .product-grid-container');
    var forceCount = 0;

    containers.forEach(function(container) {
      if (forceVisibility(container)) {
        forceCount++;
      }
    });

    return forceCount;
  }

  // MutationObserver to watch for Shopify content changes
  // Uses debouncing to avoid excessive checks
  var observerDebounce = null;
  var observer = new MutationObserver(function(mutations) {
    // Debounce: wait 100ms after last mutation before checking
    clearTimeout(observerDebounce);
    observerDebounce = setTimeout(function() {
      // Check all containers - the forceVisibility function will validate properly
      checkAllContainers();
    }, 100);
  });

  // Start observing as soon as body exists
  function startObserving() {
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      return true;
    }
    return false;
  }

  // Schedule visibility checks at multiple intervals
  var checkTimes = [100, 500, 1000, 2000, 3000, 5000];
  checkTimes.forEach(function(delay) {
    setTimeout(checkAllContainers, delay);
  });

  // Start observer immediately or on DOMContentLoaded
  if (!startObserving()) {
    document.addEventListener('DOMContentLoaded', startObserving);
  }

  // Also check on load event (after all resources)
  window.addEventListener('load', function() {
    setTimeout(checkAllContainers, 100);
    setTimeout(checkAllContainers, 500);
  });

  // Expose for debugging
  window.productVisibilityGuardian = {
    forceAll: checkAllContainers,
    version: GUARDIAN_VERSION
  };

})();



(function() {
    var img = document.querySelector('.above-footer-banner .afb-img');
    if (!img) return;
    var base = img.dataset.baseUrl;
    var cache = {};

    function getMode() {
        var dm = localStorage.getItem('delivery_mode') || 'ready-to-go';
        return dm.replace('ready-to-', '');
    }

    // Preload all variants (both modes, both genders, desktop + mobile)
    ['go', 'ship'].forEach(function(m) {
        ['men', 'women'].forEach(function(g) {
            var key = m + '_' + g;
            var desktopSrc = img.getAttribute('data-src-' + key);
            var mobileSrc = img.getAttribute('data-src-mobile-' + key);
            if (desktopSrc) {
                var p = new Image();
                p.src = base + desktopSrc;
                cache[key] = p;
            }
            if (mobileSrc) {
                var p2 = new Image();
                p2.src = mobileSrc;
                cache['mobile_' + key] = p2;
            }
        });
    });

    function update() {
        var mode = getMode();
        var gender = localStorage.getItem('qatarshoes_department') || 'women';
        var key = mode + '_' + gender;
        var isMobile = window.innerWidth < 1024;
        var mobileSrc = isMobile ? img.getAttribute('data-src-mobile-' + key) : null;
        var newSrc = img.getAttribute('data-src-' + key);
        if (!newSrc) return;
        var fullSrc = mobileSrc || (base + newSrc);
        if (img.src === fullSrc) return;

        img.style.visibility = 'hidden';
        img.className = 'afb-img afb-img--' + key;
        img.src = fullSrc;

        // Wait for image to load before revealing
        if (img.complete) {
            img.style.visibility = '';
        } else {
            img.onload = function() { img.style.visibility = ''; };
            img.onerror = function() { img.style.visibility = ''; };
        }
    }
    update();
    window.addEventListener('departmentChanged', update);
    window.addEventListener('deliveryModeChanged', update);
})();



(function() {
    var cf7Wrap = document.querySelector('.footer-subscribe-cf7');
    if (!cf7Wrap) return;
    var btn = cf7Wrap.querySelector('.wpcf7-submit');
    if (!btn) return;

    // Wrap the submit input with a container + spinner overlay
    var btnWrap = document.createElement('div');
    btnWrap.className = 'wpcf7-submit-wrap';
    btn.parentNode.insertBefore(btnWrap, btn);
    btnWrap.appendChild(btn);
    var spinner = document.createElement('div');
    spinner.className = 'footer-btn-spinner';
    btnWrap.appendChild(spinner);

    btn.addEventListener('click', function() {
        btnWrap.classList.add('is-loading');
    });

    // Remove loading on any CF7 response
    ['wpcf7mailsent','wpcf7invalid','wpcf7mailfailed','wpcf7spam'].forEach(function(evt) {
        document.addEventListener(evt, function(e) {
            if (cf7Wrap.contains(e.target)) btnWrap.classList.remove('is-loading');
        });
    });
})();



{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/qatarshoes-theme/*","/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}



wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after



var wpcf7 = {
    "api": {
        "root": "https:\/\/qatarshoe.com\/wp-json\/",
        "namespace": "contact-form-7\/v1"
    }
};
//# sourceURL=contact-form-7-js-before



var shopifyConfig = {"domain":"2b8503-2.myshopify.com","token":"a36a3b1c21bfad29f9c9a1201879f3dc","apiVersion":"2024-01","checkoutDomain":""};
//# sourceURL=shopify-api-js-extra



var themeUrl = "https://qatarshoe.com/wp-content/themes/qatarshoes-theme/index.html";
var qatarShoesConfig = {"masterCollections":{"ready-to-go":{"women":{"new-arrivals":"frontpage","sale":"restock","restock":"complete-the-looks","brand":"summer-collection","bags":"elite-picks-under-2000-qar","main":"new-arrivals","shoes":"new-arrivals","clothing":"new-arrivals","accessories":"new-arrivals","jewelry":"new-arrivals","featured-brands":[{"name":"HMS","handle":"hermes"},{"name":"COCO","handle":"chanel"},{"name":"GYD","handle":"goyard"},{"name":"LP","handle":"loro-piana"},{"name":"DR","handle":"christian-dior"},{"name":"LVN","handle":"louis-vuitton"},{"name":"CRT","handle":"cartier"},{"name":"MSK","handle":"messika"}],"best-sellers":"best-sellers","section-title-new-arrivals":"New Arrivals","section-title-best-sellers":"Best Sellers","section-title-sale":"Restock","section-title-restock":"Complete the Looks","section-title-brand":"Summer Collection","explore-visible":"1"},"men":{"new-arrivals":"mens-restock","sale":"trending-now-1","restock":"men-bags","brand":"men-shoes","bags":"travel-bags-2","main":"men-doha","shoes":"men-shoes-doha","clothing":"men-clothing-doha","accessories":"men-accessories-doha","watches":"men-watches-doha","featured-brands":[{"name":"HMS","handle":"hms-men"},{"name":"LP","handle":"lp-men"},{"name":"GYD","handle":"gyd-men"},{"name":"LVN","handle":"lvn-men"},{"name":"RLX","handle":"rlx-men"},{"name":"CRT","handle":"crt-men"},{"name":"Adidas","handle":"adidas-men"},{"name":"Nike","handle":"nike-men"}],"section-title-new-arrivals":"New Arrivals","section-title-best-sellers":"Best Sellers","section-title-sale":"Restock","section-title-restock":"Complete the Looks","section-title-brand":"Shoes","explore-visible":"1"}},"ready-to-ship":{"women":{"restock":"coco-1","brand":"hms","bags":"coco-1","main":"women","shoes":"women-shoes","clothing":"women-clothing","accessories":"women-accessories","jewelry":"women-jewelry","featured-brands":[{"name":"HMS","handle":"hms"},{"name":"COCO","handle":"coco-1"},{"name":"GYD","handle":"gyd"},{"name":"LP","handle":"lp"},{"name":"LVN","handle":"lvn"},{"name":"FND","handle":"fnd"},{"name":"BVG","handle":"bvg"},{"name":"GCC","handle":"GCC"}],"section-title-new-arrivals":"New Arrivals","section-title-best-sellers":"Best Sellers","section-title-sale":"Bags","section-title-restock":"COCO","section-title-brand":"HMS","explore-visible":"1","sale":"bags","new-arrivals":"new-arrivals"},"men":{"new-arrivals":"men-s-new-arrivals-d","main":"men","shoes":"men-shoes","clothing":"men-clothing","accessories":"men-accessories","watches":"men-watches","section-title-new-arrivals":"New Arrivals","section-title-best-sellers":"Best Sellers","section-title-sale":"Restock","section-title-restock":"Complete the Looks","section-title-brand":"Shoes","explore-visible":"1"}},"section-titles":{"ready-to-go":{"women":{"new-arrivals":"New Arrivals This Week","sale":"Restock Just In","restock":"Complete The Looks","brand":"Summer collection","bags":"Black Collection"},"men":{"new-arrivals":"New Arrivals This Week","sale":"Trending Now","restock":"Bags","brand":"Shoes","bags":"Travel Bags"}},"ready-to-ship":{"women":{"new-arrivals":"New Arrivals This Week","sale":"Restock Just In","restock":"Bags","brand":"HMS","bags":"COCO"},"men":{"new-arrivals":"New Arrivals This Week","sale":"Trending Now","restock":"Bags","brand":"Shoes","bags":"Travel Bags"}}},"category-tabs":{"ready-to-go":{"section-title":"Explore by Category","women":[{"label":"bags","collection_key":"bags-1"},{"label":"Shoes","collection_key":"shoes"},{"label":"Jewellery","collection_key":"jewelry-1"},{"label":"Watches","collection_key":"watches-1"}],"men":[{"label":"bags","collection_key":"men-bags"},{"label":"Shoes","collection_key":"men-shoes"},{"label":"watches","collection_key":"men-watches"}]},"ready-to-ship":{"section-title":"Explore by Category","women":[{"label":"COCO","collection_key":"coco-1"},{"label":"HMS","collection_key":"hms"}],"men":[]}}},"currentDeliveryMode":"ready-to-go","currentGender":"women","deliveryModes":["ready-to-go","ready-to-ship"],"genders":["women","men"],"maxCartItems":"7","featuredBrands":[{"name":"HMS","handle":"hermes"},{"name":"COCO","handle":"chanel"},{"name":"GYD","handle":"goyard"},{"name":"LP","handle":"loro-piana"},{"name":"DR","handle":"christian-dior"},{"name":"LVN","handle":"louis-vuitton"},{"name":"CRT","handle":"cartier"},{"name":"MSK","handle":"messika"}],"currencyRates":{"QAR":1,"USD":3.64,"AED":0.9912,"SAR":0.9707,"KWD":11.8374,"BHD":9.6809,"OMR":9.4668,"GBP":4.59,"CAD":2.69},"currencyConfig":{"QAR":{"code":"QAR","symbol":"QR","name":"Qatari Riyal","country":"Qatar","flag":"\ud83c\uddf6\ud83c\udde6","decimals":0,"locale":"en-QA","type":"base"},"USD":{"code":"USD","symbol":"$","name":"US Dollar","country":"United States","flag":"\ud83c\uddfa\ud83c\uddf8","decimals":0,"locale":"en-US","type":"peg"},"AED":{"code":"AED","symbol":"AED","name":"UAE Dirham","country":"UAE","flag":"\ud83c\udde6\ud83c\uddea","decimals":0,"locale":"en-AE","type":"peg"},"SAR":{"code":"SAR","symbol":"SAR","name":"Saudi Riyal","country":"Saudi Arabia","flag":"\ud83c\uddf8\ud83c\udde6","decimals":0,"locale":"en-SA","type":"peg"},"KWD":{"code":"KWD","symbol":"KD","name":"Kuwaiti Dinar","country":"Kuwait","flag":"\ud83c\uddf0\ud83c\uddfc","decimals":0,"locale":"en-KW","type":"float"},"BHD":{"code":"BHD","symbol":"BD","name":"Bahraini Dinar","country":"Bahrain","flag":"\ud83c\udde7\ud83c\udded","decimals":0,"locale":"en-BH","type":"peg"},"OMR":{"code":"OMR","symbol":"OMR","name":"Omani Rial","country":"Oman","flag":"\ud83c\uddf4\ud83c\uddf2","decimals":0,"locale":"en-OM","type":"peg"},"GBP":{"code":"GBP","symbol":"\u00a3","name":"British Pound","country":"United Kingdom","flag":"\ud83c\uddec\ud83c\udde7","decimals":0,"locale":"en-GB","type":"float"},"CAD":{"code":"CAD","symbol":"C$","name":"Canadian Dollar","country":"Canada","flag":"\ud83c\udde8\ud83c\udde6","decimals":0,"locale":"en-CA","type":"float"}},"detectedCurrency":"QAR","currencyConversionEnabled":"1","currencyCheckoutNote":"1","currencyConvertShipping":"1","currencyRoundingMode":"standard","lang":"en","isRtl":"","rtlMirrorDrawers":"1","strings":{"_section_about":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 About Page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","about.title":"About US","about.subtitle":"At the heart of our brand is a single commitment \u2014 to make every luxury purchase effortless, trusted, and genuinely satisfying.","about.heading":"WHAT WE DO","about.description":"We curate a refined selection of fashion, footwear, bags, and accessories from globally recognised brands. Every piece is chosen for its craftsmanship, desirability, and lasting appeal \u2014 nothing reaches our edit without first meeting the standard our customers expect.","about.heading_2":"HOW WE OPERATE","about.description_2":"Our service is built around clarity and reliability. Immediate delivery within Qatar and Dubai. Seamless shipping across the GCC and worldwide. Exclusive access to sought-after pieces through our Personal Shopping service. Every part of the journey is considered, so the experience feels as good as the product.","about.heading_3":"WHAT WE STAND FOR","about.description_3":"We believe the experience of buying something exceptional should feel exceptional too. From the moment you discover a piece to the moment it arrives, we focus on consistency, attention to detail, and the kind of service that earns trust.","about.description_4":"QTRSHOE is not simply a destination for luxury goods. It is a place where quality, access, and experience come together \u2014 and where customers return with confidence.","about.what_we_offer":"What We Offer:","about.explore":"explore","about.footwear":"Footwear","about.bags":"Bags","about.jewelry":"Jewelry","about.watches":"Watches","about.accessories":"Accessories","about.house_of_brands":"House Of Brands","_section_contact":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Contact Page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","contact.title":"Contact Us","contact.description":"We're here to help.\u003Cbr class='contact-mobile-br'\u003E Choose the option that fits you best.","contact.qatar_customers":"Qatar","contact.qatar_description":"For all orders within Qatar","contact.international_customers":"International","contact.email_support":"Email Us","contact.email_description":"General inquiries, documentation & follow-ups","contact.international_customer":"International Customer","contact.international_description":"For all orders outside Qatar","contact.qatar_customer":"Qatar Customer","contact.send_message":"Send a Message","contact.whatsapp_note":"For faster support on orders and delivery updates, please use WhatsApp.","_section_customer_care":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Customer Care Page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","customer_care.title":"Customer Care","customer_care.subtitle":"Our customer care team is dedicated to providing clear, reliable, and responsive support at every stage of your shopping experience.\u003Cbr\u003EWhether you have a question before placing an order or need assistance after delivery, we're here to help.","customer_care.orders_title":"Order Inquiries and Updates","customer_care.orders_desc":"Help with order-related questions and updates.","customer_care.delivery_title":"Delivery and Shipping Assistance","customer_care.delivery_desc":"Support with shipping-related questions and delivery guidance.","customer_care.returns_title":"Returns and Refund Guidance","customer_care.returns_desc":"Clear assistance with returns and the refund process.","customer_care.commitment_label":"Our Commitment","customer_care.commitment_text":"We aim to respond as quickly as possible and provide accurate, transparent support to ensure a smooth and confident shopping experience.","customer_care.faqs":"FAQs","customer_care.faqs_desc":"Common questions and quick answers.","customer_care.product_info_title":"Product and Service Information","customer_care.product_info_desc":"Support with understanding products and available services.","customer_care.quick_help":"Quick Help","customer_care.quick_help_desc":"Find the most relevant support page for detailed information on common questions, delivery timelines, and return conditions.","customer_care.returns_refunds":"Returns & Refunds","customer_care.returns_refunds_desc":"Return conditions and refund process.","customer_care.shipping_delivery":"Shipping & Delivery","customer_care.shipping_delivery_desc":"Delivery timelines and coverage.","_section_faq":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 FAQ Page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","faq.general":"General","faq.cart_order":"Cart And Order Rules","faq.qatar":"Qatar Customers","faq.uae":"UAE Customers","faq.gcc_international":"GCC And International Customers","faq.shipping_delivery":"Shipping And Delivery","faq.payments":"Payments","faq.returns_refunds":"Returns And Refunds","faq.pre_orders":"Personal Shopping","faq.product_quality":"Product Quality And Visual Accuracy","faq.support":"Support","faq.page_title":"FAQs","faq.page_subtitle":"Clear answers to common questions about shopping, delivery timelines, payment methods, returns, and product availability.","faq.search_placeholder":"Search...","faq.no_results":"No Results Found","faq.no_results_message":"Try a different keyword or browse the categories to find the answer you need.","faq.still_have_questions":"Still Have Questions?","faq.contact_message":"Need help with an order, delivery, return, documentation, or a general inquiry? Fill out the form and our team will get back to you as quickly as possible.","faq.q.general_1":"What services do you offer?","faq.a.general_1":"We offer three services: Qatar, Dubai/GCC, and Personal Shopping. Each follows a separate fulfilment, delivery, and payment process designed to meet different customer needs.","faq.q.general_2":"What is Qatar?","faq.a.general_2":"Qatar refers to products stocked locally within Qatar and fulfilled through our local inventory. Orders are delivered same-day or next business day, depending on confirmation time and location.","faq.q.general_3":"What is Dubai/GCC?","faq.a.general_3":"Dubai/GCC refers to products fulfilled from our international inventory, offering access to a wider global selection. This service is available for customers in Qatar, UAE, GCC countries, and worldwide.","faq.q.general_4":"What is Personal Shopping?","faq.a.general_4":"Personal Shopping is our dedicated service for clients looking to source a specific product. Simply get in touch with our customer care team via WhatsApp, share what you are looking for, and we will handle everything \u2014 from sourcing to delivery. Payment is via Bank Transfer only, and if we are unable to source the product, a full refund is issued with no deductions.","faq.q.general_5":"What is the main difference between the services?","faq.a.general_5":"Qatar focuses on fast local delivery from in-stock inventory. Dubai/GCC focuses on global access and a wider product selection. Personal Shopping is a dedicated sourcing service for specific products requested by the customer, handled personally by our team.","faq.q.general_6":"Are all products available under all services?","faq.a.general_6":"No. Products are assigned to specific services depending on availability and sourcing. Personal Shopping requests are assessed individually based on what the customer is looking for.","faq.q.general_7":"Can I request or order products not listed on the website?","faq.a.general_7":"For Qatar and Dubai/GCC, all orders are strictly limited to products listed on our website. For Personal Shopping, you may contact our team via WhatsApp with your request and we will advise on availability.","faq.q.cart_order_1":"Can I combine different services in one order?","faq.a.cart_order_1":"No. Each service follows a different fulfilment process and must be placed as a separate order.","faq.q.cart_order_2":"Why are separate orders required?","faq.a.cart_order_2":"This ensures accurate delivery timelines, proper payment handling, and smooth fulfilment for each service type.","faq.q.cart_order_3":"What happens if I try to add different services to one cart?","faq.a.cart_order_3":"The system will not allow it. You will need to complete one order before placing another.","faq.q.cart_order_4":"Can I change my order type after placing an order?","faq.a.cart_order_4":"No. Once an order is placed, the selected service cannot be changed.","faq.q.cart_order_5":"Can I modify or cancel my order after checkout?","faq.a.cart_order_5":"Orders can only be modified or cancelled before confirmation. Once processing begins, changes are not possible.","faq.q.qatar_1":"Can customers in Qatar order all services?","faq.a.qatar_1":"Yes. Customers in Qatar can place orders for Qatar, Dubai/GCC, and Personal Shopping as separate transactions.","faq.q.qatar_2":"How fast is delivery in Qatar?","faq.a.qatar_2":"Orders under the Qatar service are delivered same-day or next business day, depending on confirmation time and location.","faq.q.qatar_3":"How long does international delivery take to Qatar?","faq.a.qatar_3":"Premium delivery typically takes 1 to 2 working days. Other shipping options may take longer depending on the selected service.","faq.q.qatar_4":"What payment methods are available in Qatar?","faq.a.qatar_4":"Qatar service: Cash on Delivery and Bank Transfer. Dubai/GCC and Personal Shopping: Bank Transfer only.","faq.q.uae_1":"Can UAE customers order from the Qatar service?","faq.a.uae_1":"No. The Qatar service is available only within Qatar.","faq.q.uae_2":"Which services are available for UAE customers?","faq.a.uae_2":"UAE customers can place orders through Dubai/GCC and Personal Shopping.","faq.q.uae_3":"How fast is delivery in the UAE?","faq.a.uae_3":"Delivery is typically completed same-day or next business day across all Emirates, depending on confirmation time and location.","faq.q.uae_4":"What payment methods are available in the UAE?","faq.a.uae_4":"Dubai/GCC orders: Cash on Delivery and Bank Transfer. Personal Shopping: Bank Transfer only.","faq.q.gcc_international_1":"Do you ship internationally?","faq.a.gcc_international_1":"Yes. Customers across the GCC and worldwide can place orders through Dubai/GCC and Personal Shopping.","faq.q.gcc_international_2":"Is Cash on Delivery available internationally?","faq.a.gcc_international_2":"No. Cash on Delivery is not available outside the UAE.","faq.q.gcc_international_3":"How long does international delivery take?","faq.a.gcc_international_3":"Premium: 1 to 2 working days across all GCC countries. Parcel Express: 3 to 4 working days for selected GCC countries. Standard Economy: 6 to 7 working days for selected GCC countries.","faq.q.shipping_delivery_1":"When does delivery time start counting?","faq.a.shipping_delivery_1":"Delivery timelines start after order confirmation and are calculated in working days only.","faq.q.shipping_delivery_2":"Can I track my shipment?","faq.a.shipping_delivery_2":"Yes. Tracking details are shared once your order is dispatched.","faq.q.shipping_delivery_3":"Are delivery timelines guaranteed?","faq.a.shipping_delivery_3":"Delivery timelines are estimates based on confirmation time, destination, and courier operations. We communicate any changes promptly.","faq.q.shipping_delivery_4":"What happens if my order is delayed?","faq.a.shipping_delivery_4":"If delays occur, our support team will contact you with updates and revised timelines.","faq.q.shipping_delivery_5":"What should I do if my package arrives damaged?","faq.a.shipping_delivery_5":"Damaged items must be reported within 24 hours of delivery with clear photos sent to our team via WhatsApp.","faq.q.payments_1":"Why do payment methods differ by service and country?","faq.a.payments_1":"Different services and destinations follow different fulfilment and courier requirements, which determine the available payment methods for each.","faq.q.payments_2":"Is my payment information secure?","faq.a.payments_2":"Yes. All transactions are handled securely and customer data is protected in accordance with our privacy standards.","faq.q.payments_3":"Can I pay using a different name or bank account?","faq.a.payments_3":"Yes, as long as valid proof of payment is provided for verification.","faq.q.payments_4":"When is my order confirmed?","faq.a.payments_4":"Bank Transfer orders are confirmed after payment verification. Cash on Delivery orders are confirmed after scheduling is completed.","faq.q.returns_refunds_1":"Are refunds handled differently for Qatar and Dubai/GCC?","faq.a.returns_refunds_1":"Yes. Qatar service refunds are handled at the time of collection or delivery. Dubai/GCC refunds are processed after the returned item is received and inspected.","faq.q.returns_refunds_2":"How long does it take to receive a refund?","faq.a.returns_refunds_2":"Approved refunds are processed within 10 business days. Your bank may take additional time to reflect the amount.","faq.q.returns_refunds_3":"Are shipping charges refundable?","faq.a.returns_refunds_3":"No. Shipping charges are non-refundable.","faq.q.returns_refunds_4":"What items are not eligible for return?","faq.a.returns_refunds_4":"Used, worn, damaged, or non-compliant items are not eligible for return. Watches are strictly non-returnable under any circumstances.","faq.q.pre_orders_1":"How do I place a Personal Shopping request?","faq.a.pre_orders_1":"Contact our customer care team via WhatsApp with your product request \u2014 including the style, size, and any specific preferences. Our team will confirm availability and share all details before any payment is taken.","faq.q.pre_orders_2":"How long does Personal Shopping delivery take?","faq.a.pre_orders_2":"Personal Shopping orders are typically delivered within 15 to 18 working days from the date of confirmed payment.","faq.q.pre_orders_3":"How is payment handled for Personal Shopping?","faq.a.pre_orders_3":"Payment is collected in full via Bank Transfer only, after availability has been confirmed by our team. Sourcing begins only once payment is received.","faq.q.pre_orders_4":"Can a Personal Shopping order be cancelled?","faq.a.pre_orders_4":"Personal Shopping orders can only be cancelled before processing begins. Once sourcing has started, cancellation is not possible.","faq.q.pre_orders_5":"What happens if you cannot source my requested product?","faq.a.pre_orders_5":"If we are unable to source the product you requested, a full refund will be issued promptly \u2014 no deductions and no delays.","faq.q.product_quality_1":"Can I see product videos or more images?","faq.a.product_quality_1":"Yes. Customers can view real product visuals on our TikTok and Instagram pages.","faq.q.product_quality_2":"Are the products the same as shown online?","faq.a.product_quality_2":"Yes. What you see is what you receive.","faq.q.product_quality_3":"Do you edit or enhance product images?","faq.a.product_quality_3":"Images may be lightly edited for lighting and clarity, but the product's colour, shape, size, and design are never altered.","faq.q.product_quality_4":"Can I request additional photos or videos before ordering?","faq.a.product_quality_4":"For selected products, you may contact us via WhatsApp to request additional visuals, subject to availability.","faq.q.support_1":"How will I receive order updates?","faq.a.support_1":"Order updates are shared via WhatsApp and email throughout the process.","faq.q.support_2":"Is customer support available for international customers?","faq.a.support_2":"Yes. All customer support is managed from Qatar and is available for both Qatar and Dubai/GCC customers.","faq.q.support_3":"What should I do if I need help before placing an order?","faq.a.support_3":"Contact our support team via WhatsApp for product details, sizing guidance, service clarification, or to initiate a Personal Shopping request.","_section_preorders":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Pre-Orders Page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","preorders.ps_title":"Personal Shopping","preorders.ps_intro":"We offer distinct services designed to provide flexibility, speed, and access depending on your location and what you are looking for. Designed for customers who want access to a specific product that is not currently in stock. Our Personal Shopping service sources items exclusively on demand \u2014 simply tell us what you need, and we will take care of the rest.","preorders.ps_how_label":"HOW IT WORKS","preorders.ps_how_1":"Get in touch with our customer care team via WhatsApp and share the product details \u2014 style, size, and any preferences","preorders.ps_how_2":"Our team will confirm availability and provide full details before any payment is taken.","preorders.ps_how_3":"Once confirmed, payment is collected in full via Bank Transfer before sourcing begins.","preorders.ps_how_4":"Your item is sourced exclusively for you and dispatched within the confirmed timeframe.","preorders.ps_expect_label":"WHAT TO EXPECT","preorders.ps_expect_1":"Access to products sourced specifically on demand for you.","preorders.ps_expect_2":"Estimated delivery of 15 to 18 working days from the date of confirmed payment.","preorders.ps_expect_3":"Clear timelines communicated before you commit to your order.","preorders.ps_expect_4":"A dedicated, personal experience handled with care from enquiry to delivery.","preorders.ps_payment_label":"PAYMENT OPTIONS","preorders.ps_payment_1":"Bank Transfer only. Full payment is required before sourcing begins","_section_payments":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Payments & Pricing Page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","payments.rtg_methods_title":"Payment Methods","payments.rtg_methods_intro":"We offer three convenient ways to pay for your order within Qatar.","payments.rtg_cod_name":"Cash on Delivery","payments.rtg_cod_desc":"Pay at the moment your order arrives.\u003Cbr class=\"pp-desktop-br\"\u003EOur courier will collect payment in cash at your door \u2014 no advance payment required.","payments.rtg_bank_name":"Bank Transfer","payments.rtg_bank_desc":"For clients who prefer to settle in advance.\u003Cbr class=\"pp-desktop-br\"\u003ETransfer details are shared promptly upon order confirmation, and your order is processed as soon as payment is received.","payments.rtg_pos_name":"POS","payments.rtg_pos_desc":"Point-of-sale payment is available for in-person transactions where applicable.","payments.rtg_pricing_title":"PRICING","payments.rtg_pricing_bullet_1":"All product prices are displayed clearly on the website. The price you see is the price you pay \u2014 no hidden charges are added to listed items.","payments.rtg_pricing_bullet_2":"Shipping fees are calculated at checkout based on your delivery destination. The exact cost is shown before you confirm your order.","payments.rtg_pricing_bullet_3":"Any customs duties or import taxes applicable to your order are not included in the displayed price. These remain the sole responsibility of the customer.","payments.rtg_pricing_bullet_4":"Prices are subject to change. The price confirmed at checkout is the final price for your order.","payments.rts_methods_title":"Payment Methods","payments.rts_methods_intro":"Accepted payment methods vary depending on your delivery destination.","payments.rts_uae_orders":"UAE Orders","payments.rts_uae_orders_desc":"Both Cash on Delivery and Bank Transfer are accepted for orders delivered within the UAE.\u003Cbr class=\"pp-desktop-br\"\u003EPayment by cash is collected at the door; bank transfer details are provided after confirmation.","payments.rts_intl_orders":"Qatar (International), GCC & Worldwide","payments.rts_intl_orders_desc":"Bank Transfer is the only accepted payment method for all orders outside the UAE.\u003Cbr class=\"pp-desktop-br\"\u003EFull payment is required before any order is processed or dispatched.","payments.rts_pricing_title":"PRICING","payments.rts_pricing_bullet_1":"All prices are displayed clearly on the website prior to checkout. No charges are added beyond what is shown.","payments.rts_pricing_bullet_2":"Pricing may vary depending on the service selected \u2014 Qatar local, Dubai/GCC, or Personal Shopping \u2014 as each involves different sourcing and logistics.","payments.rts_pricing_bullet_3":"Shipping fees are calculated at checkout based on your product type and destination, and are presented in full before order confirmation.","payments.rts_pricing_bullet_4":"Customs duties, import taxes, and any applicable clearance fees are not included in the product or shipping price. These are the customer's responsibility in full.","_section_shipping":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Shipping & Delivery Page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","shipping.title":"Shipping & Delivery","shipping.personal_shopping_label":"PERSONAL SHOPPING","shipping.rtg_local_label":"LOCAL ORDERS","shipping.rtg_local_intro":"All orders placed within Qatar are fulfilled from local stock, ensuring fast availability and minimal wait times.","shipping.rtg_local_1":"Same-day delivery is available for orders confirmed before the daily cut-off time.","shipping.rtg_local_2":"Orders confirmed after the cut-off are dispatched the following business day.","shipping.rtg_local_3":"Delivery timelines are displayed before checkout \u2014 you will always know when to expect your order before you confirm.","shipping.rtg_ps_intro":"Personal Shopping is our dedicated service for clients looking to source a specific product.\u003Cbr class=\"pp-desktop-br\"\u003ESimply get in touch with our customer care team, share what you are looking for, and we will take it from there.","shipping.rtg_ps_1":"Contact our team via WhatsApp with the product details \u2014 style, size, and any preferences.","shipping.rtg_ps_2":"Once confirmed and available, payment is collected in full via Bank Transfer before sourcing begins.","shipping.rtg_ps_3":"Estimated delivery is 15 to 18 working days from the date payment is confirmed.","shipping.rtg_ps_4":"Delivery timelines are communicated clearly before you commit to your order.","shipping.rtg_ps_5":"If we are unable to source the requested product, a full refund will be issued promptly with no deductions.","shipping.rtg_ps_outro":"All Personal Shopping requests are handled exclusively via WhatsApp to ensure every detail is confirmed accurately before processing begins.","shipping.rts_uae_label":"UAE \u2014 LOCAL DELIVERY","shipping.rts_uae_intro":"Orders delivered within the UAE are fulfilled with priority speed across all Emirates.","shipping.rts_uae_1":"Same-day or next business day delivery, depending on order confirmation time and delivery location.","shipping.rts_uae_2":"Designed for fast, reliable fulfilment with no compromise on care or handling.","shipping.rts_intl_label":"GCC & INTERNATIONAL SHIPPING","shipping.rts_intl_intro":"We ship across the GCC and worldwide through a network of trusted regional and international carriers.","shipping.rts_timelines_label":"DELIVERY TIMELINES","shipping.rts_timeline_premium":"\u003Cu\u003EPremium Shipping\u003C/u\u003E \u2014 Qatar, Oman, Saudi Arabia, Kuwait, Bahrain: 1 to 2 working days.","shipping.rts_timeline_parcel":"\u003Cu\u003EParcel Express\u003C/u\u003E \u2014 Qatar and Oman only: 3 to 4 working days.","shipping.rts_timeline_economy":"\u003Cu\u003EStandard Economy\u003C/u\u003E \u2014 Saudi Arabia, Kuwait, Bahrain: 6 to 7 working days.","shipping.rts_timeline_extra_1":"Worldwide destinations including GCC, UK, USA, and Canada are available upon request.","shipping.rts_timeline_extra_2":"Tracking details are shared with you immediately after your order is dispatched.","shipping.rts_ps_intro":"Personal Shopping is our dedicated service for clients who want a specific product sourced for them.\u003Cbr class=\"pp-desktop-br\"\u003EReach out to our customer care team, tell us exactly what you need, and we will handle everything.","shipping.rts_ps_1":"Contact our team via WhatsApp with your product request \u2014 including style, size, and any preferences.","shipping.rts_ps_2":"Payment is collected in full via Bank Transfer once the order is confirmed and availability is verified.","shipping.rts_ps_3":"Estimated delivery is 15 to 18 working days from the date of confirmed payment.","shipping.rts_ps_4":"Delivery timelines are clearly communicated before you finalise your request.","shipping.rts_ps_5":"If we are unable to source the product, a full refund will be issued immediately \u2014 no questions asked.","shipping.rts_ps_outro":"All Personal Shopping requests are managed through WhatsApp to ensure every detail \u2014 product, size, and availability \u2014 is verified before your order is processed.","shipping.have_questions":"Send Us A Message","shipping.questions_message":"Fill out the form and we'll get back to you as quickly as possible.","_section_returns":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Returns & Refunds Page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","returns.eligibility_title":"Return Eligibility","returns.issue_label":"IF THE ISSUE IS ON OUR SIDE","returns.customer_label":"IF THE RETURN IS CUSTOMER-INITIATED","returns.customer_intro":"For returns not resulting from an error on our part:","returns.nonret_label":"NON-RETURNABLE ITEMS","returns.refund_label":"REFUND PROCESSING","returns.rtg_eligibility_intro":"We want every purchase to be right. If something is not, we are here to make it easy.","returns.rtg_eligibility_1":"Returns are accepted within 10 days of the confirmed delivery date.","returns.rtg_eligibility_2":"Items must be unused, unworn, and returned in their original packaging with all accessories, tags, and branded materials intact.","returns.rtg_eligibility_3":"Requests made outside the 10-day window will not be eligible.","returns.rtg_issue_intro":"In the event that an item arrives incorrect, damaged, or with a defect attributable to QTRSHOE:","returns.rtg_qtrshoe_1":"A full refund will be issued without question.","returns.rtg_qtrshoe_2":"All return delivery costs are covered entirely by QTRSHOE.","returns.rtg_customer_1":"Returns may still be accepted for eligible items within the 10-day window.","returns.rtg_customer_2":"Original delivery fees are non-refundable.","returns.rtg_customer_3":"Return shipping or collection costs are the customer's responsibility.","returns.rtg_nonret_intro":"The following are considered final sale and are not eligible for return or refund under any circumstances:","returns.rtg_nonret_1":"Watches","returns.rtg_nonret_2":"Items that have been used, worn, or show any signs of use.","returns.rtg_nonret_3":"Items returned without their original packaging, boxes, or dust bags.","returns.rtg_nonret_4":"Items missing accessories, insoles, laces, or any included components.","returns.rtg_refund_1":"Once your return is received, it will be inspected to confirm it meets all eligibility conditions.","returns.rtg_refund_2":"Refunds are approved only after this inspection is complete.","returns.rtg_refund_3":"Approved refunds are issued to the original payment method used at the time of purchase.","returns.rts_eligibility_intro":"Returns are accepted for eligible items across UAE, GCC, and international orders placed through our Dubai/GCC service.","returns.rts_eligibility_1":"Items must be unused, unworn, and returned in their original packaging with all accessories and branded materials intact.","returns.rts_eligibility_2":"This policy applies to UAE local orders, GCC orders, and all international orders shipped through our Dubai/GCC service.","returns.rts_issue_intro":"Where an item arrives incorrect, damaged, or defective due to an error by QTRSHOE:","returns.rts_qtrshoe_1":"A full refund is issued in its entirety.","returns.rts_qtrshoe_2":"All return shipping costs are covered by QTRSHOE \u2014 at no expense to you.","returns.rts_customer_1":"Returns may be accepted for eligible items.","returns.rts_customer_2":"Original shipping fees paid at checkout are non-refundable.","returns.rts_customer_3":"Return shipping costs are the customer's full responsibility.","returns.rts_nonret_intro":"The following are considered final sale and cannot be returned or refunded:","returns.rts_nonret_1":"Watches","returns.rts_nonret_2":"Items that have been used, worn, or altered in any way.","returns.rts_nonret_3":"Items returned without original packaging, branded boxes, or dust bags.","returns.rts_nonret_4":"Items with missing accessories or any components included at the time of purchase.","returns.rts_refund_1":"All returned items are thoroughly inspected upon receipt. Refunds are only issued once the item passes this review.","returns.rts_refund_2":"Approved refunds are credited to the original payment method. Processing timelines may vary by provider.","_section_qatar_col":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Qatar Collection Page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","qatar_col.svc_qatar_label":"QATAR","qatar_col.svc_qatar_desc":"Designed for customers who want fast and reliable local delivery within Qatar.\u003Cbr\u003EProducts under this service are stocked locally, allowing for immediate fulfilment without waiting for international shipping.","qatar_col.svc_expect_label":"WHAT TO EXPECT","qatar_col.svc_expect_1":"Same-day or next business day delivery.","qatar_col.svc_expect_2":"Orders fulfilled from local stock held within Qatar.","qatar_col.svc_expect_3":"Clear delivery timelines shown before checkout.","qatar_col.svc_expect_4":"Ideal for urgent or immediate purchases.","qatar_col.svc_payment_label":"PAYMENT OPTIONS","qatar_col.svc_payment_1":"Cash on Delivery.","qatar_col.svc_payment_2":"Bank Transfer.","_section_intl_col":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 International Collection Page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","intl_col.svc_dubai_label":"DUBAI / GCC","intl_col.svc_dubai_desc":"Designed for customers who want access to a wider global selection and exclusive styles.\u003Cbr\u003EThis service allows customers in Qatar, UAE, GCC, and worldwide to shop from international collections with multiple shipping options.","intl_col.svc_expect_label":"WHAT TO EXPECT","intl_col.svc_expect_1":"Access to international and exclusive products.","intl_col.svc_expect_2":"More variety in styles, sizes, and availability.","intl_col.svc_expect_3":"Shipping options based on destination.","intl_col.svc_expect_4":"Transparent delivery timelines shown before checkout.","intl_col.svc_delivery_label":"DELIVERY OVERVIEW","intl_col.svc_delivery_uae":"\u003Cu\u003EUAE\u003C/u\u003E: Same-day or next business day delivery.","intl_col.svc_delivery_gcc":"\u003Cu\u003EGCC\u003C/u\u003E: Multiple shipping options \u2014 1 to 7 working days depending on service selected.","intl_col.svc_delivery_ww":"\u003Cu\u003EWorldwide\u003C/u\u003E: Shipping available with timelines shown at checkout.","intl_col.svc_payment_label":"PAYMENT OPTIONS","intl_col.svc_payment_uae":"\u003Cu\u003EUAE\u003C/u\u003E: Cash on Delivery and Bank Transfer.","intl_col.svc_payment_gw":"\u003Cu\u003EGCC & Worldwide\u003C/u\u003E: Bank Transfer only.","_section_privacy":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Privacy Policy Page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","privacy.title":"Privacy Policy","privacy.intro":"This Privacy Policy describes how qtrshoe (the \u201cSite\u201d, \u201cwe\u201d, \u201cus\u201d, or \u201cour\u201d) collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from https://www.qatarshoe.com/ (the \u201cSite\u201d) or otherwise communicate with us (collectively, the \u201cServices\u201d). For purposes of this Privacy Policy, \u201cyou\u201d and \u201cyour\u201d means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.\n\nPlease read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access any of the Services.","privacy.title.changes_to_this_privacy_policy":"Changes To This Privacy Policy","privacy.content.changes_to_this_privacy_policy":"We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the &ldquo;Last updated&rdquo; date and take any other steps required by applicable law.","privacy.title.how_we_collect_and_use":"How We Collect And Use Your Personal Information","privacy.content.how_we_collect_and_use":"To provide the Services, we collect and have collected over the past 12 months personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.\n\nIn addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.","privacy.title.what_personal_information":"What Personal Information We Collect","privacy.content.what_personal_information":"The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term &ldquo;personal information&rdquo;, we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.","privacy.title.information_we_collect_directly":"Information We Collect Directly From You","privacy.content.information_we_collect_directly":"Information that you directly submit to us through our Services may include:\n\u003Cul\u003E\n\u003Cli\u003EBasic contact details including your name, address, phone number, email.\u003C/li\u003E\n\u003Cli\u003EOrder information including your name, billing address, shipping address, payment confirmation, email address, phone number.\u003C/li\u003E\n\u003Cli\u003EAccount information including your username, password, security questions.\u003C/li\u003E\n\u003Cli\u003EShopping information including the items you view, put in your cart or add to your wishlist.\u003C/li\u003E\n\u003Cli\u003ECustomer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.\u003C/li\u003E\n\u003C/ul\u003E\nSome features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.","privacy.title.information_through_cookies":"Information We Collect Through Cookies","privacy.content.information_through_cookies":"We also automatically collect certain information about your interaction with the Services (&ldquo;Usage Data&rdquo;). To do this, we may use cookies, pixels and similar technologies (&ldquo;Cookies&rdquo;). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.","privacy.title.information_from_third_parties":"Information We Obtain From Third Parties","privacy.content.information_from_third_parties":"Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as:\n\u003Cul\u003E\n\u003Cli\u003ECompanies who support our Site and Services, such as Shopify.\u003C/li\u003E\n\u003Cli\u003EOur payment processors, who collect payment information (e.g., bank account, credit or debit card information, billing address) to process your payment in order to fulfill your orders and provide you with products or services you have requested, in order to perform our contract with you.\u003C/li\u003E\n\u003Cli\u003EWhen you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies.\u003C/li\u003E\n\u003C/ul\u003E\nAny information we obtain from third parties will be treated in accordance with this Privacy Policy. We are not responsible or liable for the accuracy of the information provided to us by third parties and are not responsible for any third party&rsquo;s policies or practices. For more information, see the section below, Third Party Websites and Links.","privacy.title.how_we_use_your_information":"How We Use Your Personal Information","privacy.content.how_we_use_your_information":"\u003Cdiv class=\"pp-sub-section\"\u003E\u003Ch4 class=\"pp-sub-title\"\u003EProviding Products And Services\u003C/h4\u003EWe use your personal information to provide you with the Services in order to perform our contract with you, including to process your payments, fulfill your orders, to send notifications to you related to you account, purchases, returns, exchanges or other transactions, to create, maintain and otherwise manage your account, to arrange for shipping, facilitate any returns and exchanges and to enable you to post reviews.\u003C/div\u003E\n\n\u003Cdiv class=\"pp-sub-section\"\u003E\u003Ch4 class=\"pp-sub-title\"\u003EMarketing And Advertising\u003C/h4\u003EWe use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail, and to show you advertisements for products or services. This may include using your personal information to better tailor the Services and advertising on our Site and other websites.\u003C/div\u003E\n\n\u003Cdiv class=\"pp-sub-section\"\u003E\u003Ch4 class=\"pp-sub-title\"\u003ESecurity And Fraud Prevention\u003C/h4\u003EWe use your personal information to detect, investigate or take action regarding possible fraudulent, illegal or malicious activity. If you choose to use the Services and register an account, you are responsible for keeping your account credentials safe. We highly recommend that you do not share your username, password, or other access details with anyone else. If you believe your account has been compromised, please contact us immediately.\u003C/div\u003E\n\n\u003Cdiv class=\"pp-sub-section\"\u003E\u003Ch4 class=\"pp-sub-title\"\u003ECommunicating With You\u003C/h4\u003EWe use your personal information to provide you with customer support and improve our Services. This is in our legitimate interests in order to be responsive to you, to provide effective services to you, and to maintain our business relationship with you.\u003C/div\u003E","privacy.title.cookies":"Cookies","privacy.content.cookies":"Like many websites, we use Cookies on our Site. For specific information about the Cookies that we use related to powering our store with Shopify, We use Cookies to power and improve our Site and our Services (including to remember your actions and preferences), to run analytics and better understand user interaction with the Services (in our legitimate interests to administer, improve and optimize the Services). We may also permit third parties and services providers to use Cookies on our Site to better tailor the services, products and advertising on our Site and other websites.\n\nMost browsers automatically accept Cookies by default, but you can choose to set your browser to remove or reject Cookies through your browser controls. Please keep in mind that removing or blocking Cookies can negatively impact your user experience and may cause some of the Services, including certain features and general functionality, to work incorrectly or no longer be available. Additionally, blocking Cookies may not completely prevent how we share information with third parties such as our advertising partners.","privacy.title.how_we_disclose":"How We Disclose Personal Information","privacy.content.how_we_disclose":"In certain circumstances, we may disclose your personal information to third parties for legitimate purposes subject to this Privacy Policy. Such circumstances may include:\n\u003Cul\u003E\n\u003Cli\u003EWith vendors or other third parties who perform services on our behalf (e.g., IT management, payment processing, data analytics, customer support, cloud storage, fulfillment and shipping).\u003C/li\u003E\n\u003Cli\u003EWhen you direct, request us or otherwise consent to our disclosure of certain information to third parties, such as to ship you products or through your use of social media widgets or login integrations, with your consent.\u003C/li\u003E\n\u003Cli\u003EWith our affiliates or otherwise within our corporate group, in our legitimate interests to run a successful business.\u003C/li\u003E\n\u003Cli\u003EIn connection with a business transaction such as a merger or bankruptcy, to comply with any applicable legal obligations (including to respond to subpoenas, search warrants and similar requests), to enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.\u003C/li\u003E\n\u003C/ul\u003E\nWe have, in the past 12 months disclosed the following categories of personal information and sensitive personal information (denoted by *) about users for the purposes set out above in &ldquo;How we Collect and Use your Personal Information&rdquo; and &ldquo;How we Disclose Personal Information&rdquo;:\n\u003Cdiv class=\"pp-card-grid\"\u003E\u003Cdiv class=\"pp-card\"\u003E\u003Ch4 class=\"pp-card-title\"\u003ECategory\u003C/h4\u003EIdentifiers such as basic contact details and certain order and account information; Commercial information such as order information, shopping information and customer support information; Internet or other similar network activity, such as Usage Data\u003C/div\u003E\u003Cdiv class=\"pp-card\"\u003E\u003Ch4 class=\"pp-card-title\"\u003ECategories Of Recipients\u003C/h4\u003EVendors and third parties who perform services on our behalf (such as Internet service providers, payment processors, fulfillment partners, customer support partners and data analytics providers); Business and marketing partners; Affiliates\u003C/div\u003E\u003C/div\u003E\nWe do not use or disclose sensitive personal information for the purposes of inferring characteristics about you.","privacy.title.user_generated_content":"User Generated Content","privacy.content.user_generated_content":"The Services may enable you to post product reviews and other user-generated content. If you choose to submit user-generated content to any public area of the Services, this content will be public and accessible by anyone.\n\nWe do not control who will have access to the information that you choose to make available to others, and cannot ensure that parties who have access to such information will respect your privacy or keep it secure. We are not responsible for the privacy or security of any information that you make publicly available, or for the accuracy, use or misuse of any information that you disclose or receive from third parties.","privacy.title.third_party_websites":"Third Party Websites And Links","privacy.content.third_party_websites":"Our Site may provide links to websites or other online platforms operated by third parties. If you follow links to sites not affiliated or controlled by us, you should review their privacy and security policies and other terms and conditions. We do not guarantee and are not responsible for the privacy or security of such sites, including the accuracy, completeness, or reliability of information found on these sites. Information you provide on public or semi-public venues, including information you share on third-party social networking platforms may also be viewable by other users of the Services and users of those third-party platforms without limitation as to its use by us or by a third party. Our inclusion of such links does not, by itself, imply any endorsement of the content on such platforms or of their owners or operators, except as disclosed on the Services.","privacy.title.childrens_data":"Children's Data","privacy.content.childrens_data":"The Services are not intended to be used by children, and we do not knowingly collect any personal information about children. If you are the parent or guardian of a child who has provided us with their personal information, you may contact us using the contact details set out below to request that it be deleted.\n\nAs of the Effective Date of this Privacy Policy, we do not have actual knowledge that we &ldquo;share&rdquo; or &ldquo;sell&rdquo; (as those terms are defined in applicable law) personal information of individuals under 16 years of age.","privacy.title.security_and_retention":"Security And Retention Of Your Information","privacy.content.security_and_retention":"Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee &ldquo;perfect security.&rdquo; In addition, any information you send to us may not be secure while in transit. We recommend that you do not use unsecure channels to communicate sensitive or confidential information to us.\n\nHow long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, to provide the Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies.","privacy.title.your_rights_and_choices":"Your Rights And Choices","privacy.content.your_rights_and_choices":"Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. However, these rights are not absolute, may apply only in certain circumstances and, in certain cases, we may decline your request as permitted by law.\n\u003Cul\u003E\n\u003Cli\u003ERight to Access / Know. You may have a right to request access to personal information that we hold about you, including details relating to the ways in which we use and share your information.\u003C/li\u003E\n\u003Cli\u003ERight to Delete. You may have a right to request that we delete personal information we maintain about you.\u003C/li\u003E\n\u003Cli\u003ERight to Correct. You may have a right to request that we correct inaccurate personal information we maintain about you.\u003C/li\u003E\n\u003Cli\u003ERight of Portability. You may have a right to receive a copy of the personal information we hold about you and to request that we transfer it to a third party, in certain circumstances and with certain exceptions.\u003C/li\u003E\n\u003C/ul\u003E\n\u003Cdiv class=\"pp-card-grid\"\u003E\u003Cdiv class=\"pp-card\"\u003E\u003Ch4 class=\"pp-card-title\"\u003EOpt Out Of Marketing\u003C/h4\u003EYou may opt out of marketing-related emails by following the opt-out or unsubscribe instructions at the bottom of each email, or by contacting us. Please note that if you opt out of marketing emails, you may continue to receive transactional or account-related emails.\u003C/div\u003E\u003Cdiv class=\"pp-card\"\u003E\u003Ch4 class=\"pp-card-title\"\u003EManage Cookie Preferences\u003C/h4\u003EMost browsers accept cookies by default. You can usually change your browser settings to remove or reject cookies. Please note that removing or blocking cookies could negatively affect your user experience and may cause some of the Services to not function properly.\u003C/div\u003E\u003C/div\u003E","privacy.title.complaints":"Complaints","privacy.content.complaints":"If you have complaints about how we process your personal information, please contact us using the contact details provided below. If you are not satisfied with our response to your complaint, depending on where you live you may have the right to appeal our decision by contacting us using the contact details set out below, or lodge your complaint with your local data protection authority.","privacy.title.international_users":"International Users","privacy.content.international_users":"Please note that we may transfer, store and process your personal information outside the country you live in, including the United States. Your personal information is also processed by staff and third party service providers and partners in these countries.\n\nIf we transfer your personal information out of Europe, we will rely on recognized transfer mechanisms like the European Commission&rsquo;s Standard Contractual Clauses, or any equivalent contracts issued by the relevant competent authority of the UK, as relevant, unless the data transfer is to a country that has been determined to provide an adequate level of protection.","privacy.title.contact":"Contact","privacy.content.contact":"Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, please email us at info@qtrshoe.com or contact us at https://www.qatarshoe.com/contact.","_section_terms":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Terms of Service Page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","terms.title":"Terms of Service","terms.title.overview":"Overview","terms.title.online_store_terms":"Online Store Terms","terms.title.general_conditions":"General Conditions","terms.title.accuracy_completeness":"Accuracy, Completeness And Timeliness Of Information","terms.title.modifications_to_service":"Modifications To The Service And Prices","terms.title.products_of_services":"Products Of Services (If Applicable)","terms.title.accuracy_of_billing":"Accuracy Of Billing And Account Information","terms.title.optional_tools":"Optional Tools","terms.title.third_party_links":"Third-Party Links","terms.title.user_comments":"User Comments, Feedback And Other Submissions","terms.title.personal_information":"Personal Information","terms.title.prohibited_uses":"Prohibited Uses","terms.title.disclaimer_warranties":"Disclaimer Of Warranties; Limitation Of Liability","terms.title.indemnification":"Indemnification","terms.title.severability":"Severability","terms.title.termination":"Termination","terms.title.entire_agreement":"Entire Agreement","terms.title.governing_law":"Governing Law","terms.title.changes_to_tos":"Changes To Terms Of Service","terms.title.online_payments":"Online Payments","terms.title.contact_information":"Contact Information","terms.content.overview":"This website is operated by Qtrshoe . Throughout the site, the terms \"we\", \"us\" and \"our\" refer to Qtrshoe . Qtrshoe offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.\n\nBy visiting our site and/ or purchasing something from us, you engage in our \"Service\" and agree to be bound by the following terms and conditions (\"Terms of Service\", \"Terms\"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.\n\nPlease read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.\n\nAny new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.\n\nOur store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and Services to you.","terms.content.online_store_terms":"By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.\n\nYou may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).\n\nYou must not transmit any worms or viruses or any code of a destructive nature.\n\nA breach or violation of any of the Terms will result in an immediate termination of your Services.","terms.content.general_conditions":"We reserve the right to refuse Service to anyone for any reason at any time.\n\nYou understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.\n\nYou agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the Service is provided, without express written permission by us.\n\nThe headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.","terms.content.accuracy_completeness":"We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.\n\nThis site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.","terms.content.modifications_to_service":"Prices for our products are subject to change without notice.\n\nWe reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.\n\nWe shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.","terms.content.products_of_services":"Certain products or Services may be available exclusively online through the website. These products or Services may have limited quantities and are subject to return or exchange only according to our Refund Policy: [LINK TO REFUND POLICY]\n\nWe have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.\n\nWe reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or Services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or Service made on this site is void where prohibited.\n\nWe do not warrant that the quality of any products, Services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.","terms.content.accuracy_of_billing":"We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made.\n\nYou agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.","terms.content.optional_tools":"We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.You acknowledge and agree that we provide access to such tools \"as is\" and \"as available\" without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.","terms.content.third_party_links":"Certain content, products and Services available via our Service may include materials from third-parties.Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.","terms.content.user_comments":"If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise, you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us.We are under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.","terms.content.personal_information":"Your submission of personal information through the store is governed by our Privacy Policy. Please view our Privacy Policy for more details.","terms.content.prohibited_uses":"In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances.We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.","terms.content.disclaimer_warranties":"We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.In no case shall Qtrshoe, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.","terms.content.severability":"In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service.","terms.content.termination":"The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.","terms.content.entire_agreement":"The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us.","terms.content.governing_law":"These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Qatar.","terms.content.changes_to_tos":"You can review the most current version of the Terms of Service at any time at this page.We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes.","terms.content.online_payments":"All online payments are processed through secure gateways. We do not store your credit card information on our servers. By completing a purchase, you agree to the processing of your payment by our third-party payment providers.","terms.content.contact_information":"Questions about the Terms of Service should be sent to us at info@qtrshoe.com.","terms.content.indemnification":"You agree to indemnify, defend and hold harmless Qtrshoe and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys\u2019 fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.","_section_sitemap":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Sitemap Page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","sitemap.title":"Sitemap","sitemap.subtitle":"Browse the full QTRSHOE website structure. Find direct links to all collections, categories, and pages organized for easy navigation.","sitemap.new_in":"New In","sitemap.on_sale":"On Sale","sitemap.small_leather_goods":"Small Leather Goods","sitemap.jewellery":"Jewellery","sitemap.travel_bags":"Travel Bags","sitemap.support_pages":"Support Pages","sitemap.customer_care":"Customer Care","sitemap.contact_us":"Contact Us","sitemap.faqs":"FAQs","sitemap.shipping_returns":"Shipping & Returns","sitemap.shipping_delivery":"Shipping & Delivery","sitemap.returns_refunds":"Returns & Refunds","sitemap.payments":"Payments","sitemap.payments_pricing":"Payments & Pricing","sitemap.policies":"Policies","sitemap.privacy_policy":"Privacy Policy","sitemap.terms_of_service":"Terms Of Service","sitemap.services":"Services","sitemap.about":"About","sitemap.about_us":"About Us","sitemap.wallets":"Wallets","sitemap.sitemap":"Sitemap","_section_footer":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Site Footer (used on all pages) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","footer.subscribe_heading":"Subscribe Now\u003Cbr\u003EAnd Don't Miss Out On New Products!","footer.subscribe_disclaimer":"Opt out at anytime by clicking unsubscribe at the bottom of any email.\u003Cbr class=\"footer-disclaimer-br\"\u003EBy signing up you agree with our %s and %s.","footer.terms_conditions":"Terms and Conditions","footer.privacy_policy":"Privacy Policy","footer.customer_care":"Customer Care","footer.contact_us":"Contact Us","footer.faqs":"FAQs","footer.shipping_returns":"Shipping & Returns","footer.shipping_delivery":"Shipping & Delivery","footer.returns_refunds":"Returns & Refunds","footer.payments":"Payments","footer.payments_pricing":"Payments & Pricing","footer.policies":"Policies","footer.terms_of_service":"Terms Of Service","footer.services":"Services","footer.qatar_collection":"Qatar","footer.international_collection":"Dubai / GCC","footer.pre_orders":"Personal Shopping","footer.about":"About","footer.about_us":"About Us","footer.sitemap":"Sitemap","footer.worldwide_shipping":"Worldwide Shipping","footer.fast_delivery":"Fast Delivery","footer.secure_checkout":"Secure Checkout","footer.customer_support":"Customer Support","footer.follow_us":"Follow Us:","footer.legal_disclaimer":"Qatar Shoes is not affiliated with the brand we sell. Authentication is performed independently.","footer.legal_brand":"Qtrshoe","footer.legal_rights":"All Rights Reserved.","footer.subscribe_placeholder":"Enter your email","footer.subscribe_button":"Subscribe","footer.instagram":"Instagram","footer.pinterest":"Pinterest","footer.snapchat":"Snapchat","footer.tiktok":"TikTok","_section_info":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Info Link Blocks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","info.qatar_collection":"Qatar Collection","info.international_collection":"International Collection","info.pre_orders":"Pre-Orders","_section_services":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Services Labels \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","services.title":"Our Services","services.intro":"We offer distinct services designed to provide flexibility, speed, and access depending on your location and what you are looking for.","_section_common":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Common / Shared \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","common.loading":"Loading...","common.home":"Home","common.view_more":"View More","common.shop_now":"Shop Now","common.edit":"Edit","common.change":"Change","common.cancel":"Cancel","common.sign_out":"Sign Out","common.continue_shopping":"Continue Shopping","common.start_shopping":"Start Shopping","common.continue":"CONTINUE","common.default":"Default","common.delete":"Delete","common.error_try_again":"An error occurred. Please try again.","common.learn_more":"Learn more","common.manage":"Manage","common.retry":"Retry","common.saving":"Saving...","common.back":"Back","common.close":"Close","common.save":"Save","_section_cf7":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Contact Form 7 (legacy \u2014 preserved for future use) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","cf7.your_name":"Your name","cf7.your_email":"Your email","cf7.your_subject":"Subject","cf7.your_message":"Your message","cf7.your_phone":"Your phone","cf7.full_name":"Full name","cf7.email":"Email","cf7.phone":"Phone","cf7.message":"Message","cf7.subject":"Subject","cf7.submit":"Submit","_section_app":"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 App / Main Site (not footer pages \u2014 untouched) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","header.women":"Women","header.men":"Men","header.qatar":"Qatar","header.dubai":"Dubai/GCC","header.ready_to_go":"Ready to Go","header.ready_to_ship":"Ready to Ship","header.search":"Search","header.cart":"Cart","header.wishlist":"Wishlist","header.sign_in":"Sign In","header.menu":"Menu","header.account":"Account","header.language":"Language","header.change_delivery":"Change delivery location","header.select_currency":"Select currency","header.profile":"Profile","nav.home":"Home","product.loading":"Loading...","product.new":"New","product.best_seller":"Best Seller","product.sold_out":"Sold Out","product.colors":"Colors","product.color":"Color","product.size":"Size","product.quantity":"Quantity","product.select_size":"Select a Size","product.select_color":"Select Color","product.select_color_size":"Select Color & Size","product.select_options":"Select Options","product.add_to_cart":"ADD TO CART","product.buy_now":"BUY NOW","product.description":"Description","product.delivery_returns":"Delivery & Returns","product.please_select_size":"Please select a size","product.you_may_also_like":"You May Also Like:","product.return_home":"Return Home","product.contact_sizing":"Please contact us for sizing information on this product.","product.failed_process":"Failed to process. Please try again.","product.failed_add_cart":"Failed to add to cart. Please try again.","product.no_products":"No products","product.shipping_qatar":"Shipping from Qatar Warehouse","product.shipping_dubai":"Shipping from Dubai Warehouse","product.estimated_delivery":"Estimated delivery","product.same_day_delivery":"Same-day delivery to","product.select_city":"Select city","product.delivery":"delivery","product.international_shipping":"International Shipping","product.delivery_dates_checkout":"Delivery dates calculated at checkout","product.shipping_cost_checkout":"Shipping cost calculated at checkout","product.business_days":"7-14 business days to","product.select_shipping_method":"Select Shipping method","cart.title":"My Shopping Cart","cart.cart":"Cart","cart.close_cart":"Close cart","cart.add_more":"Add More","cart.checkout":"Checkout","cart.loading":"Loading your cart...","cart.empty_title":"Your Cart Is Empty","cart.empty_message":"Looks Like You Haven't Added Anything To Your Cart Yet.","cart.continue_shopping":"Continue Shopping","cart.sub_total":"Sub Total","cart.shipping":"Shipping","cart.calculated_at_checkout":"Calculated at checkout","cart.cart_total":"Cart Total","cart.order_note_add":"Add order note","cart.order_note_hide":"Hide order note","cart.order_note_placeholder":"Special instructions for your order...","cart.adding":"Adding...","cart.remove_item":"Remove item","cart.remove":"Remove","cart.discover_collections":"Discover our latest collections","cart.explore_more":"Explore More","cart.size_label":"Size: {size}","cart.more_items":"+ {count} more item(s)","cart.added":"Added to cart!","cart.failed_add":"Failed to add to cart","cart.empty":"Your cart is empty","cart.processing":"Processing...","cart.limit_reached":"Cart limit reached (max {max} items). Remove items to add more.","cart.can_only_add":"Can only add {count} more item(s) (cart limit: {max})","cart.select_delivery":"Please select a delivery mode to add items to cart","cart.not_available":"This item is not available in {location}","cart.only_available":"Only {count} available in {location}","cart.store_not_configured":"Store not configured","cart.checking_availability":"Checking availability...","cart.qatar_today":"Qatar Today","cart.switch_mode_title":"Switch Delivery Mode?","cart.switch_mode_message":"Switching to {mode} will clear your cart. Items may not be available at the new location.","cart.keep_shopping":"Keep Shopping","cart.switch_clear":"Switch & Clear Cart","checkout.discount_code":"Discount code","checkout.apply":"Apply","checkout.applied":"Applied","checkout.validating":"Validating...","checkout.order_summary":"Order summary","checkout.first_name":"First name","checkout.last_name":"Last name (optional)","checkout.address":"Address","checkout.city":"City","checkout.state":"State / Province","checkout.zip":"ZIP / Postal code","checkout.phone":"Phone number","checkout.whatsapp_same":"Is WhatsApp number same with phone?","checkout.whatsapp_number":"WhatsApp number","checkout.yes":"Yes","checkout.no":"No","checkout.search_country":"Search country","checkout.email":"Email or mobile phone number","checkout.create_password":"Create password (min 8 characters)","checkout.items_count":"{count} item(s)","checkout.payment_qar":"Payment will be collected in QAR {amount}","checkout.payment_qar_short":"Payment in QAR {amount}","checkout.cart_empty":"Your cart is empty","checkout.cod":"Cash on Delivery (COD)","checkout.bank_transfer":"Bank Transfer","checkout.payment_details":"Payment details will be provided after order confirmation, our customer care team will reach out to you to complete the payment.","order.confirmation":"Confirmation","order.thank_you":"Thank you,","order.confirmed":"Your order is confirmed","order.email_confirmation":"You'll receive a confirmation email soon","order.subtotal":"Subtotal","order.shipping":"Shipping","order.total":"Total","order.order_summary":"Order summary","account.sign_in_title":"Sign in to your account","account.sign_in_subtitle":"Access your orders, wishlist, and saved addresses","account.sign_in":"Sign In","account.no_account":"Don't have an account?","account.create_one":"Create one","account.my_account":"My Account","account.welcome_back":"Welcome back,","account.overview":"Overview","account.orders":"Orders","account.wishlist":"Wishlist","account.addresses":"Addresses","account.profile":"Profile","auth.close":"Close","auth.sign_in":"Sign In","auth.create_account":"Create Account","auth.welcome_back":"Welcome Back","auth.sign_in_subtitle":"Sign in to access your wishlist and order history","auth.email":"Email","auth.enter_email":"Enter your email","auth.password":"Password","auth.enter_password":"Enter your password","auth.show_password":"Show password","auth.remember_me":"Remember me","auth.forgot_password":"Forgot password?","auth.first_name":"First Name","auth.first_name_placeholder":"First name","auth.last_name":"Last Name","auth.last_name_placeholder":"Last name","auth.phone":"Phone","auth.phone_placeholder":"1234 5678","auth.create_password":"Create a password","auth.password_requirements":"Password must have: 8+ characters, 1 uppercase (A-Z), 1 lowercase (a-z), and 1 number (0-9)","auth.agree_terms":"By creating an account, you agree to our Terms of Service and Privacy Policy.","auth.terms_of_service":"Terms of Service","auth.privacy_policy":"Privacy Policy","phone_verify.title":"Verify Your Phone","phone_verify.subtitle":"We'll send a verification code to your WhatsApp","phone_verify.phone_number":"Phone Number","phone_verify.enter_phone":"Enter phone number","phone_verify.phone_hint":"Enter your number without the country code","phone_verify.send_code":"Send Code via WhatsApp","phone_verify.sending":"Sending...","phone_verify.enter_code":"Enter Verification Code","phone_verify.code_sent_to":"Enter the 6-digit code sent to","phone_verify.didnt_receive":"Didn't receive the code?","phone_verify.resend":"Resend","phone_verify.change_phone":"Change phone number","phone_verify.verify":"Verify","phone_verify.verifying":"Verifying...","phone_verify.verified_title":"Phone Verified!","phone_verify.verified_message":"Your phone number has been verified successfully","search.placeholder":"Search","search.searching":"Searching...","variant.loading":"Loading options...","variant.failed_load":"Failed to load product options","variant.close":"Close","variant.not_found":"Product not found","variant.no_variants":"No available variants","wishlist.title":"Wishlist","wishlist.close":"Close wishlist","wishlist.empty_title":"Your wishlist is empty","wishlist.empty_message":"Save items you love by clicking the heart icon","wishlist.view_more":"View More Wishlist Items","wishlist.add_to_cart":"Add to Cart","wishlist.adding":"Adding...","error.404_title":"404","error.page_not_found":"Page Not Found","error.page_not_found_message":"Sorry, the page you're looking for doesn't exist or has been moved.","collection.filter":"Filter","collection.sort":"Sort","collection.clear_all":"Clear all","collection.no_products":"No products found","collection.load_more":"Load More","product.add_to_wishlist":"Add to wishlist","product.delivery_info":"Delivery info","product.delivery_label":"delivery","product.fast_local_delivery":"Fast local delivery in Qatar","product.return_policy":"10-day return policy","product.rtg_delivery_description":"Orders are shipped from our Qatar warehouse. Same-day delivery is available for select areas.","product.rtg_return_description":"Returns accepted within 10 days of delivery. Items must be unused and in original packaging.","product.rts_delivery_description":"Orders are shipped from our Dubai warehouse. Delivery times vary by destination.","product.intl_delivery_description":"International orders are shipped worldwide. Delivery dates and costs calculated at checkout.","checkout.delivery":"Delivery","checkout.billing_note":"This will also be used as your billing address for this order.","checkout.use_saved":"Use saved address","checkout.enter_new":"Enter new address","checkout.country_region":"Country/Region","checkout.select_destination":"Select destination","checkout.phone_tooltip":"In case we need to contact you about your order","checkout.save_info":"Save this information for next time","checkout.shipping_method":"Shipping method","checkout.same_day_next":"Same day or next day","checkout.select_delivery_area":"Select delivery area","checkout.all_items_available":"All items available for local delivery from Qatar","checkout.select_shipping_speed":"Select shipping speed","checkout.standard":"Standard (3-5 Working Days)","checkout.premium":"Premium (1-2 Working Days)","checkout.shipping_breakdown":"Shipping breakdown","checkout.shipping_total":"Shipping Total","checkout.payment":"Payment","checkout.contact":"Contact","checkout.subtotal":"Subtotal","checkout.total":"Total","checkout.add_items_first":"Add some items to your cart before checking out.","checkout.title":"Checkout","checkout.calculating_shipping":"Calculating shipping...","checkout.payment_note":"Payment details will be provided after order confirmation, our customer care team will reach out to you to complete the payment.","checkout.log_out":"Log out","checkout.create_account":"Create an account for faster checkout next time","checkout.add_discount":"Add discount","checkout.discount":"Discount","checkout.complete_order":"Complete order","checkout.processing":"Processing...","order.order_details":"Order details","order.contact_info":"Contact information","order.payment_method":"Payment method","order.shipping_address":"Shipping address","order.billing_address":"Billing address","order.same_as_shipping":"Same as shipping address","order.shipping_method":"Shipping method","order.payment_info":"Payment Information","order.support_contact":"Customer Support will contact you Shortly For payment details","order.need_help":"Need help?","order.email_offers":"Email me with news and offers","order.refund_policy":"Refund policy","account.settings":"Settings","account.recent_orders":"Recent Orders","account.account_details":"Account Details","account.name":"Name","account.email":"Email","account.member_since":"Member Since","account.order_history":"Order History","account.loading_orders":"Loading your orders...","account.international":"International","account.local_delivery":"Local Delivery","account.total":"Total:","account.no_orders":"No orders yet","account.no_orders_message":"When you place orders, they will appear here.","account.saved_addresses":"Saved Addresses","account.add_address":"Add Address","account.add_new_address":"Add New Address","account.loading_addresses":"Loading your addresses...","account.address_label":"Address Label","account.address_label_placeholder":"e.g., Home, Office","account.first_name":"First Name","account.last_name":"Last Name","account.phone_number":"Phone Number","account.address_line_1":"Address Line 1","account.address_line_2":"Address Line 2","account.street_address":"Street address","account.apartment":"Apartment, suite, etc.","account.city":"City","account.province":"Province/Region","account.orders_stat":"Orders","account.wishlist_stat":"Wishlist Items","account.addresses_stat":"Saved Addresses","reset.invalid_link":"Invalid Reset Link","reset.invalid_message":"This password reset link is invalid or has expired. Please request a new one.","reset.request_new":"Request New Link","reset.set_password":"Set New Password","reset.set_password_message":"Enter a new password for your account.","reset.new_password":"New Password","reset.enter_new":"Enter new password","reset.confirm_password":"Confirm Password","reset.confirm_new":"Confirm new password","reset.reset_button":"Reset Password","reset.back_to_signin":"Back to Sign In","reset.complete":"Password Reset Complete","reset.complete_message":"Your password has been successfully reset. You can now sign in with your new password.","reset.resetting":"Resetting...","reset.passwords_no_match":"Passwords do not match.","reset.failed_message":"Failed to reset password. The link may have expired.","reset.error_occurred":"An error occurred. Please try again.","home.new_arrivals":"New Arrivals This Week","home.best_sellers":"Best Sellers","home.trending":"Trending Now","home.restock":"Restock","home.complete_the_looks":"Complete the Looks","home.bags":"Complete the Looks","home.shoes":"Shoes","home.rtg_women_new_arrivals":"New Arrivals","home.rtg_women_best_sellers":"Best Sellers","home.rtg_women_sale":"Restock","home.rtg_women_restock":"Complete the Looks","home.rtg_women_brand":"Shoes","home.rtg_men_new_arrivals":"New Arrivals","home.rtg_men_best_sellers":"Best Sellers","home.rtg_men_sale":"Restock","home.rtg_men_restock":"Complete the Looks","home.rtg_men_brand":"Shoes","home.rts_women_new_arrivals":"New Arrivals","home.rts_women_best_sellers":"Best Sellers","home.rts_women_sale":"Restock","home.rts_women_restock":"Complete the Looks","home.rts_women_brand":"Shoes","home.rts_men_new_arrivals":"New Arrivals","home.rts_men_best_sellers":"Best Sellers","home.rts_men_sale":"Restock","home.rts_men_restock":"Complete the Looks","home.rts_men_brand":"Shoes","home.house_of_brands":"House Of Brands","home.afb_heading":"A selection of designer pieces,\u003Cspan class='afb-newline'\u003E chosen with purpose\u003C/span\u003E","home.afb_bullet_1":"Selected For Quality, Rarity, And Design.","home.afb_bullet_2":"Exclusive Styles In Limited Quantities.","home.afb_bullet_3":"Delivered Through A Seamless Experience.","delivery.page_title":"Qatar Shoe","delivery.choose_title":"Choose Your Delivery Option","delivery.qatar_only":"Same day Delivery","delivery.worldwide":"Worldwide Delivery","delivery.change_later":"You can change this later anytime.","delivery.hero_tagline":"Quiet Luxury, Redefined","delivery.hero_subtitle":"Delivered Today in Qatar \u2014 Shipped Worldwide","delivery.qatar_today":"Qatar Today","delivery.delivered_qatar":"Delivered Today In Qatar","delivery.same_day":"Same-Day Delivery","delivery.ready_in_qatar":"Ready In Qatar","delivery.explore_more":"Explore More","delivery.explore_subtitle":"Same-day delivery in UAE \u00b7 1-2 days to Qatar","delivery.more_styles":"More styles & sizes","delivery.exclusive":"Exclusive selection","delivery.qatar_worldwide":"Qatar & worldwide delivery","delivery.call_us":"Call Us","delivery.call_intro":"Wherever you are, our client services will be delighted to assist you","delivery.send_email":"Send An Email","delivery.whatsapp":"Whatsapp","delivery.need_help":"Need Help ?","delivery.customer_service":"Customer Service","account.confirm_delete_address":"Are you sure you want to delete this address?","account.country":"Country","account.edit_address":"Edit Address","account.failed_to_delete_address":"Failed to delete address.","account.failed_to_save_address":"Failed to save address.","account.failed_to_set_default":"Failed to set default address.","account.no_saved_addresses":"No saved addresses","account.no_saved_addresses_message":"Add an address to make checkout faster.","account.save_address":"Save Address","account.set_as_default":"Set as default","account.unable_to_load_address":"Unable to load address data.","account.unable_to_load_addresses":"Unable to load addresses.","account.unable_to_load_orders":"Unable to load orders.","account.zip_code":"ZIP / Postal Code","profile.title":"Profile Information","profile.first_name":"First Name","profile.last_name":"Last Name","profile.display_name":"Display Name","profile.email":"Email Address","profile.phone":"Phone Number","profile.save":"Save Changes","profile.saving":"Saving...","profile.saved":"Profile updated successfully.","profile.save_failed":"Failed to update profile.","profile.change_password":"Change Password","profile.current_password":"Current Password","profile.new_password":"New Password","profile.confirm_password":"Confirm New Password","profile.update_password":"Update Password","profile.updating":"Updating...","profile.password_updated":"Password updated successfully.","profile.password_failed":"Failed to update password.","profile.passwords_no_match":"New passwords do not match.","profile.danger_zone":"Danger Zone","profile.delete_warning":"Once you delete your account, there is no going back. Please be certain.","profile.delete_account":"Delete Account","profile.delete_contact":"Contact support to delete your account.","wishlist.browse_products":"Browse Products","wishlist.added":"Added!","collection.filter_button":"Filter","collection.filters":"Filters","collection.brand":"Brand","collection.categories":"Categories","collection.types":"Types","collection.search_brands":"Search brands...","collection.search_types":"Search types...","collection.apply_filters":"Apply Filters","collection.no_match":"No products match your filters","collection.no_products_collection":"No products found in this collection","collection.result":"result","collection.results":"results","collection.view_more":"View More","auth.agree_terms_prefix":"By creating an account, you agree to our","home.marquee_rtg":"FAST DELIVERY & EASY RETURNS \u2022 YOUR SAFEST SHOPPING","home.marquee_rts":"Shipping to all GCC . Delivered Within 2-3 Days"}};
var genderCollectionMappings = {"women":{"bags":"women-bags","shoes":"women-shoes","clothing":"women-clothing","new-arrivals":"women-new-arrivals","sale":"women-sale","featured":"women-featured","accessories":"women-accessories","jewelry":"women-jewelry"},"men":{"bags":"men-bags","shoes":"men-shoes","clothing":"men-clothing","new-arrivals":"men-new-arrivals","sale":"men-sale","featured":"men-featured","accessories":"men-accessories","goods":"men-goods"}};
//# sourceURL=qatarshoes-products-js-extra



var qatarshoesBrandAliases = {"brands":{"HMS":{"display_name":"Herm\u00e8s","aliases":["hermes","herm\u00e8s","hms","hermis","hirmes","hermas","hermez","harmes","herms","herems","\u0647\u064a\u0631\u0645\u0632","\u0647\u064a\u0631\u0645\u064a\u0633","\u0647\u0631\u0645\u0632"]},"COCO":{"display_name":"Chanel","aliases":["chanel","coco","channel","chanell","channell","shanel","shanell","chanelle","chanle","chnnel","chnl","\u0634\u0627\u0646\u064a\u0644","\u0643\u0648\u0643\u0648","\u0634\u0646\u064a\u0644"]},"GYD":{"display_name":"Goyard","aliases":["goyard","gyd","goyyard","goyad","goyart","goyerd","goyardd","goyrad","goyardt","\u063a\u0648\u064a\u0627\u0631\u062f","\u063a\u0648\u064a\u0627\u0631"]},"DR":{"display_name":"Dior","aliases":["dior","dr","christian dior","diorr","deor","diyar","diorh","diorrr","doir","\u062f\u064a\u0648\u0631"]},"LVN":{"display_name":"Louis Vuitton","aliases":["louis vuitton","lvn","lv","louis","vuitton","luis vuitton","louis vutton","louis vitton","louie vuitton","loius vuitton","louis viton","louis vuittton","lous vuitton","\u0644\u0648\u064a\u0633 \u0641\u064a\u062a\u0648\u0646","\u0644\u0648\u064a \u0641\u064a\u062a\u0648\u0646"]},"GCC":{"display_name":"Gucci","aliases":["gucci","gcc","guccy","guchi","gucciie","guci","guccii","guccci","gucchi","\u063a\u0648\u062a\u0634\u064a","\u062c\u0648\u062a\u0634\u064a"]},"PRD":{"display_name":"Prada","aliases":["prada","prd","pradda","brada","pradaa","prda","prad","\u0628\u0631\u0627\u062f\u0627"]},"FND":{"display_name":"Fendi","aliases":["fendi","fnd","fendy","fendiie","fande","fendii","fndei","\u0641\u0646\u062f\u064a"]},"CLN":{"display_name":"Celine","aliases":["celine","cln","celine paris","selene","celene","cilin","celin","celinee","cilen","\u0633\u064a\u0644\u064a\u0646"]},"MMU":{"display_name":"Miu Miu","aliases":["miu miu","mmu","miumiu","mio mio","miu miuu","miummi","miuimu","\u0645\u064a\u0648 \u0645\u064a\u0648"]},"STL":{"display_name":"Saint Laurent","aliases":["saint laurent","stl","ysl","yves saint laurent","san laurent","st laurent","saint lorent","saint laurnet","saint laurente","yves laurent","\u0633\u0627\u0646 \u0644\u0648\u0631\u0627\u0646","\u0627\u064a\u0641 \u0633\u0627\u0646 \u0644\u0648\u0631\u0627\u0646"]},"BVG":{"display_name":"Bottega Veneta","aliases":["bottega veneta","bvg","bottega","veneta","botega veneta","bottega vaneta","bottega beneta","bottega venetta","bottega vennta","\u0628\u0648\u062a\u064a\u063a\u0627 \u0641\u064a\u0646\u064a\u062a\u0627"]},"RLX":{"display_name":"Rolex","aliases":["rolex","rlx","rolexx","rollex","roleks","rolexxx","roex","roolex","\u0631\u0648\u0644\u0643\u0633"]},"MSK":{"display_name":"Messika","aliases":["messika","msk","mesika","messica","mesikka","messikah","\u0645\u064a\u0633\u064a\u0643\u0627"]},"VCF":{"display_name":"Van Cleef & Arpels","aliases":["van cleef","vcf","vca","van cleef & arpels","van cleef arpels","van cleef and arpels","van clef","van cliff","vancleef","van cleeff","\u0641\u0627\u0646 \u0643\u0644\u064a\u0641","\u0641\u0627\u0646 \u0643\u0644\u064a\u0641 \u0627\u0646\u062f \u0627\u0631\u0628\u0644\u0632"]},"CRT":{"display_name":"Cartier","aliases":["cartier","crt","cartiar","cartie","cartir","carttier","cartieer","\u0643\u0627\u0631\u062a\u064a\u064a\u0647"]},"NB":{"display_name":"New Balance","aliases":["new balance","nb","new balence","newbalance","new balanse","new balnce","newbalnce","new balace","\u0646\u064a\u0648 \u0628\u0627\u0644\u0627\u0646\u0633"]},"Golden Goose":{"display_name":"Golden Goose","aliases":["golden goose","golden gose","golden gooze","golden goosse","goldengoose","golden goos","golden gooses","ggdb","\u062c\u0648\u0644\u062f\u0646 \u063a\u0648\u0633","\u063a\u0648\u0644\u062f\u0646 \u063a\u0648\u0633"]},"Onitsuka Tiger":{"display_name":"Onitsuka Tiger","aliases":["onitsuka tiger","onitsuka","onitska tiger","onitsuka tigar","onitsuka tigger","onitsukatiger","onizuka tiger","\u0627\u0648\u0646\u064a\u062a\u0633\u0648\u0643\u0627","\u0627\u0648\u0646\u064a\u062a\u0633\u0648\u0643\u0627 \u062a\u0627\u064a\u063a\u0631"]},"Loewe":{"display_name":"Loewe","aliases":["loewe","loewee","loew","lowe","loeve","loewe bag","\u0644\u0648\u064a\u0641\u064a","\u0644\u0648\u064a\u0641\u0647"]},"Adidas":{"display_name":"Adidas","aliases":["adidas","addidas","adiddas","adidasz","adids","adi das","\u0627\u062f\u064a\u062f\u0627\u0633"]},"NIKE":{"display_name":"Nike","aliases":["nike","naik","nik","niki","nikee","naike","\u0646\u0627\u064a\u0643"]},"Rimowa":{"display_name":"Rimowa","aliases":["rimowa","rimova","rimowa luggage","rimowa bag","rimowa case","rimowa suitcase","\u0631\u064a\u0645\u0648\u0627","\u0631\u064a\u0645\u0648\u0641\u0627"]},"Chaumet":{"display_name":"Chaumet","aliases":["chaumet","chomet","chaomet","shaumet","chaumett","chaumey","\u0634\u0648\u0645\u064a\u0647","\u0634\u0648\u0645\u064a\u062a"]},"BLG":{"display_name":"Bulgari","aliases":["bulgari","blg","bvlgari","bvulgari","\u0628\u0648\u0644\u063a\u0627\u0631\u064a","\u0628\u0648\u0644\u0642\u0631\u064a"]},"VRS":{"display_name":"Versace","aliases":["versace","vrs","versache","versaci","\u0641\u0631\u0633\u0627\u062a\u0634\u064a","\u0641\u064a\u0631\u0633\u0627\u062a\u0634\u064a"]},"BRB":{"display_name":"Burberry","aliases":["burberry","brb","burbury","berberry","\u0628\u0631\u0628\u0631\u064a","\u0628\u064a\u0631\u0628\u0631\u064a"]},"BLC":{"display_name":"Balenciaga","aliases":["balenciaga","blc","balensaga","balanciaga","balenciag","\u0628\u0627\u0644\u0646\u0633\u064a\u0627\u063a\u0627","\u0628\u0627\u0644\u0646\u0633\u064a\u0627\u0642\u0627"]},"VLC":{"display_name":"Valentino","aliases":["valentino","vlc","valenteno","valintino","\u0641\u0627\u0644\u0646\u062a\u064a\u0646\u0648"]},"JC":{"display_name":"Jimmy Choo","aliases":["jimmy choo","jc","jimmy chu","jimmi choo","\u062c\u064a\u0645\u064a \u0634\u0648","\u062c\u064a\u0645\u064a \u062a\u0634\u0648"]},"MQ":{"display_name":"Alexander McQueen","aliases":["alexander mcqueen","mq","mcqueen","mc queen","\u0645\u0627\u0643\u0648\u064a\u0646","\u0627\u0644\u0643\u0633\u0646\u062f\u0631 \u0645\u0627\u0643\u0648\u064a\u0646"]},"GVN":{"display_name":"Givenchy","aliases":["givenchy","gvn","givency","givenchi","\u062c\u064a\u0641\u0646\u0634\u064a"]},"LP":{"display_name":"Loro Piana","aliases":["loro piana","lp","loro","piana","\u0644\u0648\u0631\u0648 \u0628\u064a\u0627\u0646\u0627","\u0644\u0648\u0631\u0648"]},"CL":{"display_name":"Christian Louboutin","aliases":["christian louboutin","cl","louboutin","loubatin","luboutin","red bottom","\u0643\u0631\u064a\u0633\u062a\u064a\u0627\u0646 \u0644\u0648\u0628\u0648\u062a\u0627\u0646","\u0644\u0648\u0628\u0648\u062a\u0627\u0646"]},"DG":{"display_name":"Dolce & Gabbana","aliases":["dolce gabbana","dg","dolce & gabbana","dolce and gabbana","dolce","gabbana","\u062f\u0648\u0644\u062a\u0634\u064a \u063a\u0627\u0628\u0627\u0646\u0627","\u062f\u0648\u0644\u062a\u0634\u064a"]},"TF":{"display_name":"Tom Ford","aliases":["tom ford","tf","tomford","\u062a\u0648\u0645 \u0641\u0648\u0631\u062f"]},"FRG":{"display_name":"Ferragamo","aliases":["ferragamo","frg","salvatore ferragamo","feragamo","\u0641\u064a\u0631\u0627\u063a\u0627\u0645\u0648","\u0633\u0627\u0644\u0641\u0627\u062a\u0648\u0631\u064a \u0641\u064a\u0631\u0627\u063a\u0627\u0645\u0648"]},"MNB":{"display_name":"Manolo Blahnik","aliases":["manolo blahnik","mnb","manolo","blahnik","manolos","\u0645\u0627\u0646\u0648\u0644\u0648 \u0628\u0644\u0627\u0646\u064a\u0643","\u0645\u0627\u0646\u0648\u0644\u0648"]},"RV":{"display_name":"Roger Vivier","aliases":["roger vivier","rv","roger","vivier","\u0631\u0648\u062c\u064a\u0647 \u0641\u064a\u0641\u064a\u064a\u0647"]},"AMINA":{"display_name":"Amina Muaddi","aliases":["amina muaddi","amina","muaddi","\u0623\u0645\u064a\u0646\u0629 \u0645\u0639\u0627\u0636\u064a","\u0627\u0645\u064a\u0646\u0647 \u0645\u0639\u0627\u0636\u064a"]}},"reverseMap":{"hms":"HMS","herm\u00e8s":"HMS","hermes":"HMS","hermis":"HMS","hirmes":"HMS","hermas":"HMS","hermez":"HMS","harmes":"HMS","herms":"HMS","herems":"HMS","\u0647\u064a\u0631\u0645\u0632":"HMS","\u0647\u064a\u0631\u0645\u064a\u0633":"HMS","\u0647\u0631\u0645\u0632":"HMS","coco":"COCO","chanel":"COCO","channel":"COCO","chanell":"COCO","channell":"COCO","shanel":"COCO","shanell":"COCO","chanelle":"COCO","chanle":"COCO","chnnel":"COCO","chnl":"COCO","\u0634\u0627\u0646\u064a\u0644":"COCO","\u0643\u0648\u0643\u0648":"COCO","\u0634\u0646\u064a\u0644":"COCO","gyd":"GYD","goyard":"GYD","goyyard":"GYD","goyad":"GYD","goyart":"GYD","goyerd":"GYD","goyardd":"GYD","goyrad":"GYD","goyardt":"GYD","\u063a\u0648\u064a\u0627\u0631\u062f":"GYD","\u063a\u0648\u064a\u0627\u0631":"GYD","dr":"DR","dior":"DR","christian dior":"DR","diorr":"DR","deor":"DR","diyar":"DR","diorh":"DR","diorrr":"DR","doir":"DR","\u062f\u064a\u0648\u0631":"DR","lvn":"LVN","louis vuitton":"LVN","lv":"LVN","louis":"LVN","vuitton":"LVN","luis vuitton":"LVN","louis vutton":"LVN","louis vitton":"LVN","louie vuitton":"LVN","loius vuitton":"LVN","louis viton":"LVN","louis vuittton":"LVN","lous vuitton":"LVN","\u0644\u0648\u064a\u0633 \u0641\u064a\u062a\u0648\u0646":"LVN","\u0644\u0648\u064a \u0641\u064a\u062a\u0648\u0646":"LVN","gcc":"GCC","gucci":"GCC","guccy":"GCC","guchi":"GCC","gucciie":"GCC","guci":"GCC","guccii":"GCC","guccci":"GCC","gucchi":"GCC","\u063a\u0648\u062a\u0634\u064a":"GCC","\u062c\u0648\u062a\u0634\u064a":"GCC","prd":"PRD","prada":"PRD","pradda":"PRD","brada":"PRD","pradaa":"PRD","prda":"PRD","prad":"PRD","\u0628\u0631\u0627\u062f\u0627":"PRD","fnd":"FND","fendi":"FND","fendy":"FND","fendiie":"FND","fande":"FND","fendii":"FND","fndei":"FND","\u0641\u0646\u062f\u064a":"FND","cln":"CLN","celine":"CLN","celine paris":"CLN","selene":"CLN","celene":"CLN","cilin":"CLN","celin":"CLN","celinee":"CLN","cilen":"CLN","\u0633\u064a\u0644\u064a\u0646":"CLN","mmu":"MMU","miu miu":"MMU","miumiu":"MMU","mio mio":"MMU","miu miuu":"MMU","miummi":"MMU","miuimu":"MMU","\u0645\u064a\u0648 \u0645\u064a\u0648":"MMU","stl":"STL","saint laurent":"STL","ysl":"STL","yves saint laurent":"STL","san laurent":"STL","st laurent":"STL","saint lorent":"STL","saint laurnet":"STL","saint laurente":"STL","yves laurent":"STL","\u0633\u0627\u0646 \u0644\u0648\u0631\u0627\u0646":"STL","\u0627\u064a\u0641 \u0633\u0627\u0646 \u0644\u0648\u0631\u0627\u0646":"STL","bvg":"BVG","bottega veneta":"BVG","bottega":"BVG","veneta":"BVG","botega veneta":"BVG","bottega vaneta":"BVG","bottega beneta":"BVG","bottega venetta":"BVG","bottega vennta":"BVG","\u0628\u0648\u062a\u064a\u063a\u0627 \u0641\u064a\u0646\u064a\u062a\u0627":"BVG","rlx":"RLX","rolex":"RLX","rolexx":"RLX","rollex":"RLX","roleks":"RLX","rolexxx":"RLX","roex":"RLX","roolex":"RLX","\u0631\u0648\u0644\u0643\u0633":"RLX","msk":"MSK","messika":"MSK","mesika":"MSK","messica":"MSK","mesikka":"MSK","messikah":"MSK","\u0645\u064a\u0633\u064a\u0643\u0627":"MSK","vcf":"VCF","van cleef & arpels":"VCF","van cleef":"VCF","vca":"VCF","van cleef arpels":"VCF","van cleef and arpels":"VCF","van clef":"VCF","van cliff":"VCF","vancleef":"VCF","van cleeff":"VCF","\u0641\u0627\u0646 \u0643\u0644\u064a\u0641":"VCF","\u0641\u0627\u0646 \u0643\u0644\u064a\u0641 \u0627\u0646\u062f \u0627\u0631\u0628\u0644\u0632":"VCF","crt":"CRT","cartier":"CRT","cartiar":"CRT","cartie":"CRT","cartir":"CRT","carttier":"CRT","cartieer":"CRT","\u0643\u0627\u0631\u062a\u064a\u064a\u0647":"CRT","nb":"NB","new balance":"NB","new balence":"NB","newbalance":"NB","new balanse":"NB","new balnce":"NB","newbalnce":"NB","new balace":"NB","\u0646\u064a\u0648 \u0628\u0627\u0644\u0627\u0646\u0633":"NB","golden goose":"Golden Goose","golden gose":"Golden Goose","golden gooze":"Golden Goose","golden goosse":"Golden Goose","goldengoose":"Golden Goose","golden goos":"Golden Goose","golden gooses":"Golden Goose","ggdb":"Golden Goose","\u062c\u0648\u0644\u062f\u0646 \u063a\u0648\u0633":"Golden Goose","\u063a\u0648\u0644\u062f\u0646 \u063a\u0648\u0633":"Golden Goose","onitsuka tiger":"Onitsuka Tiger","onitsuka":"Onitsuka Tiger","onitska tiger":"Onitsuka Tiger","onitsuka tigar":"Onitsuka Tiger","onitsuka tigger":"Onitsuka Tiger","onitsukatiger":"Onitsuka Tiger","onizuka tiger":"Onitsuka Tiger","\u0627\u0648\u0646\u064a\u062a\u0633\u0648\u0643\u0627":"Onitsuka Tiger","\u0627\u0648\u0646\u064a\u062a\u0633\u0648\u0643\u0627 \u062a\u0627\u064a\u063a\u0631":"Onitsuka Tiger","loewe":"Loewe","loewee":"Loewe","loew":"Loewe","lowe":"Loewe","loeve":"Loewe","loewe bag":"Loewe","\u0644\u0648\u064a\u0641\u064a":"Loewe","\u0644\u0648\u064a\u0641\u0647":"Loewe","adidas":"Adidas","addidas":"Adidas","adiddas":"Adidas","adidasz":"Adidas","adids":"Adidas","adi das":"Adidas","\u0627\u062f\u064a\u062f\u0627\u0633":"Adidas","nike":"NIKE","naik":"NIKE","nik":"NIKE","niki":"NIKE","nikee":"NIKE","naike":"NIKE","\u0646\u0627\u064a\u0643":"NIKE","rimowa":"Rimowa","rimova":"Rimowa","rimowa luggage":"Rimowa","rimowa bag":"Rimowa","rimowa case":"Rimowa","rimowa suitcase":"Rimowa","\u0631\u064a\u0645\u0648\u0627":"Rimowa","\u0631\u064a\u0645\u0648\u0641\u0627":"Rimowa","chaumet":"Chaumet","chomet":"Chaumet","chaomet":"Chaumet","shaumet":"Chaumet","chaumett":"Chaumet","chaumey":"Chaumet","\u0634\u0648\u0645\u064a\u0647":"Chaumet","\u0634\u0648\u0645\u064a\u062a":"Chaumet","blg":"BLG","bulgari":"BLG","bvlgari":"BLG","bvulgari":"BLG","\u0628\u0648\u0644\u063a\u0627\u0631\u064a":"BLG","\u0628\u0648\u0644\u0642\u0631\u064a":"BLG","vrs":"VRS","versace":"VRS","versache":"VRS","versaci":"VRS","\u0641\u0631\u0633\u0627\u062a\u0634\u064a":"VRS","\u0641\u064a\u0631\u0633\u0627\u062a\u0634\u064a":"VRS","brb":"BRB","burberry":"BRB","burbury":"BRB","berberry":"BRB","\u0628\u0631\u0628\u0631\u064a":"BRB","\u0628\u064a\u0631\u0628\u0631\u064a":"BRB","blc":"BLC","balenciaga":"BLC","balensaga":"BLC","balanciaga":"BLC","balenciag":"BLC","\u0628\u0627\u0644\u0646\u0633\u064a\u0627\u063a\u0627":"BLC","\u0628\u0627\u0644\u0646\u0633\u064a\u0627\u0642\u0627":"BLC","vlc":"VLC","valentino":"VLC","valenteno":"VLC","valintino":"VLC","\u0641\u0627\u0644\u0646\u062a\u064a\u0646\u0648":"VLC","jc":"JC","jimmy choo":"JC","jimmy chu":"JC","jimmi choo":"JC","\u062c\u064a\u0645\u064a \u0634\u0648":"JC","\u062c\u064a\u0645\u064a \u062a\u0634\u0648":"JC","mq":"MQ","alexander mcqueen":"MQ","mcqueen":"MQ","mc queen":"MQ","\u0645\u0627\u0643\u0648\u064a\u0646":"MQ","\u0627\u0644\u0643\u0633\u0646\u062f\u0631 \u0645\u0627\u0643\u0648\u064a\u0646":"MQ","gvn":"GVN","givenchy":"GVN","givency":"GVN","givenchi":"GVN","\u062c\u064a\u0641\u0646\u0634\u064a":"GVN","lp":"LP","loro piana":"LP","loro":"LP","piana":"LP","\u0644\u0648\u0631\u0648 \u0628\u064a\u0627\u0646\u0627":"LP","\u0644\u0648\u0631\u0648":"LP","cl":"CL","christian louboutin":"CL","louboutin":"CL","loubatin":"CL","luboutin":"CL","red bottom":"CL","\u0643\u0631\u064a\u0633\u062a\u064a\u0627\u0646 \u0644\u0648\u0628\u0648\u062a\u0627\u0646":"CL","\u0644\u0648\u0628\u0648\u062a\u0627\u0646":"CL","dg":"DG","dolce & gabbana":"DG","dolce gabbana":"DG","dolce and gabbana":"DG","dolce":"DG","gabbana":"DG","\u062f\u0648\u0644\u062a\u0634\u064a \u063a\u0627\u0628\u0627\u0646\u0627":"DG","\u062f\u0648\u0644\u062a\u0634\u064a":"DG","tf":"TF","tom ford":"TF","tomford":"TF","\u062a\u0648\u0645 \u0641\u0648\u0631\u062f":"TF","frg":"FRG","ferragamo":"FRG","salvatore ferragamo":"FRG","feragamo":"FRG","\u0641\u064a\u0631\u0627\u063a\u0627\u0645\u0648":"FRG","\u0633\u0627\u0644\u0641\u0627\u062a\u0648\u0631\u064a \u0641\u064a\u0631\u0627\u063a\u0627\u0645\u0648":"FRG","mnb":"MNB","manolo blahnik":"MNB","manolo":"MNB","blahnik":"MNB","manolos":"MNB","\u0645\u0627\u0646\u0648\u0644\u0648 \u0628\u0644\u0627\u0646\u064a\u0643":"MNB","\u0645\u0627\u0646\u0648\u0644\u0648":"MNB","rv":"RV","roger vivier":"RV","roger":"RV","vivier":"RV","\u0631\u0648\u062c\u064a\u0647 \u0641\u064a\u0641\u064a\u064a\u0647":"RV","amina":"AMINA","amina muaddi":"AMINA","muaddi":"AMINA","\u0623\u0645\u064a\u0646\u0629 \u0645\u0639\u0627\u0636\u064a":"AMINA","\u0627\u0645\u064a\u0646\u0647 \u0645\u0639\u0627\u0636\u064a":"AMINA"}};
var qatarshoesNewBadge = {"handles":["hms-shoulder-birkin-light-29-bleu-abysse-evercolor","hms-shoulder-birkin-light-29-gold-evercolor","lp-summer-charms-walk-loafers-oxblood","lp-summer-charms-walk-loafer-baby-cashmere","gyd-churchill-3-cigar-case","rlx-datejust-31-oyster-31-mm-oystersteel-and-white-gold-bright-blue-dial","gcc-gg-marmont-pearl-drop-earrings","coco-black-quilted-lambskin-leather-mini-top-handle-flap-bag","coco-black-quilted-lambskin-flap-bag-brushed-gold-hardware","gyd-bonbonniere-bag","bvg-knot-clutch-crystal-gold","bvg-knot-clutch-silver","bvg-knot-clutch-gold","coco-ballet-flats-white-black","lp-extra-pocket-l19-eucalyptus-antique-silver","coco-top-handle-phone-holder-with-chain-light-blue","fnd-by-the-way-selleria-mini-dove-grey","dr-small-dior-toujours-vertical-tote-bag-black","fnd-ff-diamonds-continental-with-chain","gcc-mini-jackie-1961-shoulder-bag-in-gg-canvas","stl-college-mini-in-shiny-leather-deep-hot-wine","stl-loulou-mini-in-lambskin-rouge-cabernet","rlx-cosmograph-daytona-oyster-40-mm-oystersteel-and-yellow-gold","rlx-datejust-31-oyster-31-mm-oystersteel-and-white-gold-dark-grey-dial","rlx-lady-datejust-oyster-28-mm-oystersteel-and-everose-gold","rlx-datejust-31-oyster-31-mm-oystersteel-and-yellow-gold","dr-medium-dior-toujours-bag-desert-taupe","dr-miss-caro-top-handle-pouch-metallic-gold-tone-macrocannage-calfskin","dr-miss-caro-top-handle-pouch-black-macrocannage-lambskin","stl-loulou-mini-in-lambskin-black","bvg-top-handle-loop-cameo","bvg-concert-pouch-barolo","bvg-concert-pouch-black","bvg-small-parachute-fondant","chaumet-hortensia-watch-steel-diamonds","coco-top-handle-phone-holder-with-chain-silver","hms-tablier-sellier-bag-fauve-gold-beige","hms-hermes-geta-bag-nata","vcf-holiday-pendant-2025-rose-gold-pink-mother-of-pearl","hms-calfskin-kiara-40-pumps","lp-summer-charms-walk-loafer-green","bvg-knot-clutch-crystal-silver","bvg-knot-clutch-black","hms-constance-long-to-go-wallet-in-nata-epsom-leather-with-silver-hardware","gcc-gg-marmont-gold-pearl-drop-earrings","bvg-mini-andiamo-brown","bvg-mini-andiamo-black","dr-lady-dr-micro-bag-latte-cannage-lambskin","dr-lady-dr-micro-bag-black-cannage-lambskin","coco-top-handle-phone-holder-caviar-quilted-with-chain-white","coco-mini-shopping-bag-shiny-lambskin-gold-tone-metal-black","coco-small-preppy-shiny-caviar-bowling-bag-black","coco-preppy-long-vanity-shiny-caviar-with-strap-black","coco-preppy-mini-clutch-with-leather-strap-black","coco-preppy-mini-clutch-with-leather-strap-burgundy","coco-preppy-mini-flap-bag-in-light-pink","coco-preppy-mini-clutch-with-leather-strap-white","lvn-nano-madeleine-monogram","coco-25-mini-handbag-silver-tone-metal-silvery","lp-extra-bag-l27-cream-linen-and-grey-leather","dr-toujours-vertical-nano-tote-bag-powder-beige","coco-25-mini-handbag-shiny-crumpled-calfskin-black-mixed-metal-hardware","hermes-kelly-mini-epsom-black-1","hms-kelly-25-epsom-gris-misty-silver-hardwar","hms-kelly-25-epsom-sesame-silver-hardware","hms-kelly-25-epsom-gold-silver-hardware","hms-kelly-25-epsom-biscuit","coco-22-mini-bag","hms-constance-elan-epsom-deep-blue-silver-hardware","stl-cassandre-envelope-chain-wallet-in-grain-de-poundre-leather-noir","hms-kelly-classique-to-go-wallet-rouge-sellier","hms-constance-to-go-wallet-black-gold-hardware","hms-constance-slim-wallet-gris-etain","hms-constance-18-trench","hms-constance-slim-wallet-gold","hermes-constance-slim-wallet","coco-small-black-lizard-handle-bag-gold-hardware","hms-geta-bag-gold-gold-hardeware","hms-geta-bag-beige-marfa","untitled-nov26_23-24","gcc-ophidia-small-shoulder-bag-beige-and-brown-gg-fabric","bvg-knot-lock-barolo","bvg-mini-loop-bag-barolo","bvg-mini-loop-bag-black","christian-dior-jolie-top-handle-mini-bag-black-cannage-lambskin","christian-dior-jolie-top-handle-mini-bag-plum-cannage-lambskin","christian-dior-jolie-top-handle-mini-bag-powder-pink-cannage-lambskin","christian-dior-jolie-top-handle-mini-bag-latte-cannage-lambskin","gcc-mini-gg-marmont-half-moon-bag-white","dr-mini-lady-d-joy-bag-latte-cannage-lambskin","hms-constance-elan-epsom-black-gold-hardware","hms-constance-elan-mauve-pale","hms-constance-to-go-roug-h","fnd-wallet-on-chain-baguette-brown-ff-fabric-wallet","coco-shiny-nano-31-shopping-leather-bag-white","lp-extra-pocket-l19-whisper-white-sun-gold","coco-25-hobo-black-caviar-bag","saint-laurent-gaby-vanity-bag-in-lambskin-rouge-cabernet","gcc-gg-marmont-mini-bag-taupe-leather","gcc-horsebit-1955-small-brown-sholder-bag","rimowa-essential-cabin-gloss-ballerina-pink","lp-baseball-cap-ginger-snap-ivory","hms-kelly-18-belt-rose-gold-plated-blanc","coco-mark-heart-motif-rhinestone-metal-earrings","coco-mark-pearl-piercing-earrings","hms-mini-pop-earrings-beige-marfa","chaumet-bee-de-chaumet-hoop-earrings-rose-gold-diamonds","crt-just-un-clou-ring-classic-model-silver","cartier-juste-un-clou-ring-classic-model-diamonds","msk-move-10th-ring-rose-gold","crt-love-ring-classic-model-rose-gold","hms-etriviere-ring-small-model","hms-clic-h-bracelet-pm-jaune-madras","messika-baby-move-bracelet","msk-collier-baby-move-silver","chaumet-jeux-de-liens-bracelet-rose-gold-mother-of-pearl-diamond","chaumet-jeux-de-liens-bracelet-mother-of-pearl-white-gold-diamond","chaumet-bee-de-small-model-pendant-rose-gold-diamonds-1","chaumet-bee-de-small-model-pendant-white-gold-diamonds","chaumet-jeux-de-liens-harmony-small-model-pendant-rose-gold-mother-of-pearl-diamonds","chaumet-bee-de-medium-model-pendant-rose-gold-diamonds-1","chaumet-bee-de-medium-model-pendant-rose-gold-diamonds","chaumet-jeux-de-liens-pendant-rose-gold-diamonds","hms-mini-pop-h-rocabar-pendant-rose-gold-plated","msk-move-romane-long-diamond-pave-necklace","chaumet-bee-de-chaumet-pendant-white-gold-diamonds","crt-love-pendant-necklace-half-paved-silver","rlx-lady-datejust-oyster-28-mm-oystersteel-and-yellow-gold","hms-oz-mule","hermes-oran-sandal-pink-cancan","hms-chypre-sandal-calfskin-white","msk-move-uno-bracelet-silver","chaumet-bee-de-chaumet-bracelet-white-gold","chaumet-bee-de-chaumet-bracelet-rose-gold","chaumet-bee-de-chaumet-bracelet-rose-gold-diamonds","chaumet-bee-de-chaumet-bracelet-white-gold-diamonds","chaumet-bee-de-bracelet-rose-gold-diamonds","chaumet-bee-de-bracelet-white-gold-diamonds","gcc-diana-small-tote-bag","gcc-jackie-1961-small-bag-red","lvn-capucines-mini-creme-nacre","ro-quartz-33mm-white-gold-diamonds","chaumet-jeux-de-liens-pendant-white-gold-mother-of-pearl-diamond","dr-lady-micro-bag-beige-cannage-lambskin","coco-suede-lambskin-quilted-vanity-case-beige-black","fnd-peekaboo-iseeu-handbag-ff-jacquard-beige-fabric","hms-kelly-pochette-clutch-black-with-gold-hardware","hms-kelly-pochette-clutch-etoupe-with-silver-hardware","coco-slingbacks-lambskin-grosgrain-ivory-black","coco-trainers-suede-calfskin-white-black","coco-trainers-suede-calfskin-black-white","hms-chypre-sandal-vert-olive","hms-oran-sandal-bleu-glacier","coco-vanity-with-chain-lambskin-leather-black","dr-mini-bag-two-tone-trench-and-hermitage-red-cannage-lambskin"],"days":"10"};
//# sourceURL=qatarshoes-product-search-js-extra



var shopifyAnalyticsConfig = {"shopId":"gid://shopify/Shop/67410264300","storefrontId":"1000092475","storefrontApiToken":"a36a3b1c21bfad29f9c9a1201879f3dc","currency":"QAR"};
//# sourceURL=qatarshoes-analytics-js-extra



var qatarShoesAuth = {"nonce":"44b0640049","ajaxUrl":"https://qatarshoe.com/wp-admin/admin-ajax.php","restUrl":"https://qatarshoe.com/wp-json/qatarshoes/v1/","isLoggedIn":"","myAccountUrl":"https://qatarshoe.com/my-account/"};
//# sourceURL=qatarshoes-auth-js-extra



{"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://qatarshoe.com/wp-includes/js/wp-emoji-release.min.js?ver=7.0"}}



/*! This file is auto-generated */
const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window._wpemojiSettings=a,"wpEmojiSettingsSupports"),s=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!a(e,"\ud83e\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s[e]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),c.toString(),p.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports[n]=e[n],a.supports.everything=a.supports.everything&&a.supports[n],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[n]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))});
//# sourceURL=https://qatarshoe.com/wp-includes/js/wp-emoji-loader.min.js



(function() {
    var backdrop = document.getElementById('cfModalBackdrop');
    if (!backdrop) return;

    var iconEl = document.getElementById('cfModalIcon');
    var titleEl = document.getElementById('cfModalTitle');
    var msgEl = document.getElementById('cfModalMessage');
    var btnEl = document.getElementById('cfModalBtn');

    var successSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
    var errorSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

    function showModal(type, message) {
        if (type === 'success') {
            iconEl.className = 'cf-modal-icon success';
            iconEl.innerHTML = successSVG;
            titleEl.textContent = 'Message Sent';
        } else {
            iconEl.className = 'cf-modal-icon error';
            iconEl.innerHTML = errorSVG;
            titleEl.textContent = 'Something Went Wrong';
        }
        msgEl.textContent = message || '';
        backdrop.classList.add('active');
    }

    function closeModal() {
        backdrop.classList.remove('active');
    }

    btnEl.addEventListener('click', closeModal);
    backdrop.addEventListener('click', function(e) {
        if (e.target === backdrop) closeModal();
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });

    // CF7 events — message comes from CF7 Messages tab settings
    document.addEventListener('wpcf7mailsent', function(e) { showModal('success', e.detail.apiResponse.message); });
    document.addEventListener('wpcf7invalid', function(e) { showModal('error', e.detail.apiResponse.message); });
    document.addEventListener('wpcf7mailfailed', function(e) { showModal('error', e.detail.apiResponse.message); });
    document.addEventListener('wpcf7spam', function(e) { showModal('error', e.detail.apiResponse.message); });
})();
