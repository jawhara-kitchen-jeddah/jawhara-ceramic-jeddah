(function() {
  var style = document.createElement("style");
  style.innerHTML = `
    body { padding-bottom: 68px !important; }
    .sticky-bottom-bar {
      position: fixed; bottom: 0; left: 0; right: 0; height: 58px;
      background: #ffffff; border-top: 1px solid #e2e8f0;
      box-shadow: 0 -4px 16px rgba(15, 23, 42, 0.12);
      z-index: 1100; display: flex; align-items: center; gap: 8px;
      padding: 6px 10px; box-sizing: border-box;
    }
    .bar-action-btn {
      flex: 1; height: 100%; border-radius: 11px;
      display: flex; align-items: center; justify-content: center; gap: 7px;
      font-size: 15.5px; font-weight: 900; color: #ffffff; text-decoration: none;
    }
    .bar-call-btn { background: linear-gradient(135deg, #0b3d75 0%, #1565c0 100%); }
    .bar-wa-btn { background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); }
    .profile-card { background: #0b3d75; color: #fff; padding: 20px; border-radius: 10px; margin-top: 25px; }
    .profile-card h3 { color: #f5b400; margin-top: 0; }
    .auto-gallery-wrap { margin: 25px 0; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 15px; }
    .auto-gallery-wrap h3 { color: #0b3d75; text-align: center; margin-top: 0; font-size: 18px; }
    .auto-gallery-track { display: flex; gap: 12px; overflow-x: auto; scroll-behavior: smooth; padding-bottom: 8px; }
    .auto-gallery-track img { width: 220px; height: 160px; object-fit: cover; border-radius: 8px; border: 1px solid #cbd5e1; flex-shrink: 0; }
    .views-pill-box { text-align: center; margin: 15px 0; }
    .views-pill {
      display: inline-flex; align-items: center; gap: 8px;
      background: #0b3d75; color: #fff; border: 1px solid #f5b400;
      padding: 6px 18px; border-radius: 50px; font-size: 14px; font-weight: bold;
    }
    .views-num { color: #f5b400; font-size: 16px; font-weight: 900; }
    footer.unified-footer {
      background: #0b3d75; color: #dbeafe; text-align: center;
      padding: 22px 15px; font-size: 13.5px; line-height: 1.9; margin-top: 20px;
    }
    .designer-phone-link {
      display: inline-block; margin-top: 6px; background: rgba(255,255,255,0.14);
      border: 1px solid rgba(245,180,0,0.65); color: #f5b400;
      padding: 4px 14px; border-radius: 50px; font-weight: bold;
      text-decoration: none; direction: ltr;
    }
  `;
  document.head.appendChild(style);

  /* توحيد رسالة الترحيب المميزة في جميع أزرار الواتساب داخل الصفحة تلقائياً */
  var unifiedWaMsg = "السلام عليكم ورحمة الله وبركاته حياكم الله جوهرة جدة عندي شغل تركيب سيراميك أو بورسلين في جدة وأرغب في الاستفسار والمعاينة وسأرسل لكم الصور وتفاصيل المساحة الحين لتحديد التكلفة والموعد";
  var unifiedWaUrl = "https://wa.me/966561201914?text=" + encodeURIComponent(unifiedWaMsg);
  var allLinks = document.querySelectorAll("a[href*='wa.me']");
  for (var i = 0; i < allLinks.length; i++) {
    allLinks[i].setAttribute("href", unifiedWaUrl);
    allLinks[i].setAttribute("target", "_blank");
    allLinks[i].setAttribute("rel", "noopener");
  }

  /* عداد المشاهدات التصاعدي التلقائي الذي يزيد مع كل دخول */
  var keyName = "jawhara_views_" + location.pathname;
  var currentViews = parseInt(localStorage.getItem(keyName) || "0", 10) + 1;
  localStorage.setItem(keyName, currentViews);
  var baseArticleViews = 350 + currentViews;

  var badgeEl = document.querySelector(".badge");
  if (badgeEl) {
    badgeEl.innerHTML = "الدليل الفني المعتمد | عدد مشاهدات المقالة: " + baseArticleViews;
  }

  /* تثبيت بطاقة تعريف الفني المعتمد بالتاريخ المتناسق من 1 سبتمبر 2018 إلى 1 سبتمبر 2020 */
  var profileHtml = '<h3>بطاقة تعريف الفني المعتمد</h3>' +
    '<p><strong>الاسم التجاري:</strong> جوهرة جدة لتركيب السيراميك والبورسلين والرخام</p>' +
    '<p><strong>الفني المسؤول:</strong> صلاح منصور حاصل على شهادة خبرة مهنية معتمدة من القوات المسلحة المصرية في أعمال البناء والتشطيب والسيراميك خلال الفترة من 1 سبتمبر 2018 إلى 1 سبتمبر 2020</p>' +
    '<p><strong>نطاق الخدمة:</strong> جميع أحياء جدة فقط | <strong>الجوال والواتساب:</strong> <span dir="ltr" style="display:inline-block;">0561201914</span></p>';

  var existingProfile = document.querySelector(".profile-card");
  var container = document.querySelector(".container");
  if (existingProfile) {
    existingProfile.innerHTML = profileHtml;
  } else if (container) {
    var profileDiv = document.createElement("div");
    profileDiv.className = "profile-card";
    profileDiv.innerHTML = profileHtml;
    container.appendChild(profileDiv);
  }

  /* معرض الصور المتحرك التلقائي من مستودع جيت هاب */
  if (container && !document.querySelector(".auto-gallery-wrap")) {
    var galDiv = document.createElement("div");
    galDiv.className = "auto-gallery-wrap";
    galDiv.innerHTML = '<h3>معرض صور الأعمال المنفذة في جدة</h3><div class="auto-gallery-track" id="autoArticleGalleryTrack"></div>';
    container.insertBefore(galDiv, document.querySelector(".profile-card"));
    fetch("https://api.github.com/repos/jawhara-kitchen-jeddah/jawhara-ceramic-jeddah/contents/")
      .then(function(r) { return r.json(); })
      .then(function(files) {
        var track = document.getElementById("autoArticleGalleryTrack");
        if (!Array.isArray(files) || !track) return;
        var imgsHtml = "";
        files.forEach(function(f) {
          if (/\.(jpg|jpeg|png|webp)$/i.test(f.name) && f.name !== "1.png") {
            imgsHtml += '<img src="' + f.name + '" alt="أعمال جوهرة جدة لتركيب البورسلين والسيراميك بالليزر" loading="lazy">';
          }
        });
        track.innerHTML = imgsHtml;
        setInterval(function() {
          if (Math.abs(track.scrollLeft) + track.clientWidth >= track.scrollWidth - 10) {
            track.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            track.scrollBy({ left: -232, behavior: "smooth" });
          }
        }, 5000);
      });
  }

  /* حقن عداد المشاهدات والفوتر الموحد وحقوق التصميم تلقائياً */
  var footerContent = '<div class="views-pill-box"><div class="views-pill"><span>عدد الزوار والمشاهدات</span><span class="views-num">' + baseArticleViews + '</span></div></div>' +
    '<div>جميع الحقوق محفوظة © جوهرة جدة لتركيب السيراميك والبورسلين بالليزر</div>' +
    '<div style="color:#fff;font-weight:bold;margin-top:4px;">تم التصميم بواسطة القمة للحلول الرقمية وتصميم المواقع</div>' +
    '<div><a href="tel:+201055707291" class="designer-phone-link">📞 00201055707291</a></div>';

  var existingFooter = document.querySelector("footer");
  if (existingFooter) {
    existingFooter.className = "unified-footer";
    existingFooter.innerHTML = footerContent;
  } else {
    var footer = document.createElement("footer");
    footer.className = "unified-footer";
    footer.innerHTML = footerContent;
    document.body.appendChild(footer);
  }

  /* حقن الشريط السفلي الثابت زر الاتصال وزر الواتساب العائمين تلقائياً في كل مقالة */
  if (!document.querySelector(".sticky-bottom-bar")) {
    var bar = document.createElement("div");
    bar.className = "sticky-bottom-bar";
    bar.innerHTML = '<a href="tel:0561201914" class="bar-action-btn bar-call-btn">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>' +
      '<span>اتصال 0561201914</span></a>' +
      '<a href="' + unifiedWaUrl + '" class="bar-action-btn bar-wa-btn" target="_blank" rel="noopener">' +
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.96 1.38-.51.08-1.15.11-1.85-.11-.43-.14-.98-.32-1.68-.62-2.96-1.28-4.89-4.26-5.04-4.46-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.59.83 2.03.9 2.18.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.45.51-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.12.65-.07.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.72.81 2.02.96.3.15.49.22.56.35.08.12.08.71-.16 1.39z"/></svg>' +
      '<span>واتساب فوري</span></a>';
    document.body.appendChild(bar);
  }
})();
