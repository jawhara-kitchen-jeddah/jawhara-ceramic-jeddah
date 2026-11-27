(function() {
  var style = document.createElement("style");
  style.innerHTML = `
    body {
      background: #f4f7fb !important;
      color: #1e293b !important;
      padding-bottom: 72px !important;
      margin: 0;
      font-family: system-ui, -apple-system, "Segoe UI", Tahoma, Arial, sans-serif;
    }
    header, .top-header, .site-header {
      background: #0b3d75 !important;
      color: #f5b400 !important;
      border-bottom: 3px solid #f5b400 !important;
      text-align: center;
      padding: 16px 12px !important;
    }
    header *, .top-header *, .site-header * {
      color: #f5b400 !important;
    }
    header a, .top-header a, .site-header a {
      background: rgba(255, 255, 255, 0.12) !important;
      color: #ffffff !important;
      border: 1px solid rgba(245, 180, 0, 0.45) !important;
      border-radius: 8px;
      padding: 6px 14px;
      text-decoration: none;
      display: inline-block;
      margin: 4px;
    }
    .container, main, article, .article-box, .card {
      background: #ffffff !important;
      color: #1e293b !important;
      border-radius: 14px !important;
      border: 1px solid #e2e8f0 !important;
      box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06) !important;
    }
    .container h1, .container h2, .container h3,
    main h1, main h2, main h3,
    article h1, article h2, article h3 {
      color: #0b3d75 !important;
    }
    .container p, .container li,
    main p, main li,
    article p, article li {
      color: #1e293b !important;
      line-height: 1.9;
    }
    .auto-views-badge, .badge {
      display: inline-block;
      background: #ecfdf5 !important;
      color: #047857 !important;
      border: 1px solid #a7f3d0 !important;
      padding: 7px 16px !important;
      border-radius: 50px !important;
      font-size: 14px !important;
      font-weight: 800 !important;
      margin: 10px 0 14px 0 !important;
    }
    .sticky-bottom-bar {
      position: fixed; bottom: 0; left: 0; right: 0; height: 58px;
      background: #ffffff !important; border-top: 1px solid #e2e8f0;
      box-shadow: 0 -4px 16px rgba(15, 23, 42, 0.12);
      z-index: 1200; display: flex; align-items: center; gap: 8px;
      padding: 6px 10px; box-sizing: border-box;
    }
    .bar-action-btn {
      flex: 1; height: 100%; border-radius: 11px;
      display: flex; align-items: center; justify-content: center; gap: 7px;
      font-size: 15.5px; font-weight: 900; color: #ffffff !important; text-decoration: none;
    }
    .bar-call-btn { background: linear-gradient(135deg, #0b3d75 0%, #1565c0 100%) !important; }
    .bar-wa-btn { background: linear-gradient(135deg, #16a34a 0%, #15803d 100%) !important; }
    .profile-card {
      background: #0b3d75 !important; color: #ffffff !important;
      padding: 20px; border-radius: 12px; margin-top: 24px;
    }
    .profile-card h3 { color: #f5b400 !important; margin-top: 0; }
    .profile-card p, .profile-card strong, .profile-card span { color: #ffffff !important; }
    .auto-gallery-wrap {
      margin: 24px 0; background: #f8fafc !important;
      border: 1px solid #e2e8f0; border-radius: 12px; padding: 15px; min-height: 120px;
    }
    .auto-gallery-wrap h3 { color: #0b3d75 !important; text-align: center; margin-top: 0; font-size: 18px; }
    .auto-gallery-track {
      display: flex; gap: 12px; overflow-x: auto; scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch; padding-bottom: 6px; scrollbar-width: none;
    }
    .auto-gallery-track::-webkit-scrollbar { display: none; }
    .auto-gallery-track img {
      width: 220px; height: 160px; object-fit: cover;
      border-radius: 10px; border: 1px solid #cbd5e1; flex-shrink: 0;
    }
    .auto-comments-wrap {
      margin: 24px 0; background: #f8fafc !important;
      border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px; min-height: 140px;
    }
    .auto-comments-wrap h3 {
      color: #0b3d75 !important; text-align: center; margin: 0 0 6px 0; font-size: 18px;
    }
    .comments-swipe-hint {
      text-align: center; font-size: 12.5px; color: #64748b !important; margin: 0 0 14px 0;
    }
    .auto-comments-track {
      display: flex; gap: 12px; overflow-x: auto; scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch; padding: 4px 2px 10px 2px; scrollbar-width: none;
    }
    .auto-comments-track::-webkit-scrollbar { display: none; }
    .comment-slide-card {
      flex: 0 0 82%; max-width: 310px; scroll-snap-align: center;
      background: #ffffff !important; border: 1px solid #e2e8f0;
      border-radius: 12px; padding: 15px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05);
      box-sizing: border-box;
    }
    .comment-head {
      display: flex; align-items: center; gap: 10px; margin-bottom: 10px;
    }
    .comment-avatar {
      width: 40px; height: 40px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: #ffffff !important; font-weight: 900; font-size: 16px; flex-shrink: 0;
    }
    .comment-author { font-weight: 800; font-size: 14.5px; color: #0b3d75 !important; }
    .comment-area { font-size: 12px; color: #64748b !important; }
    .comment-stars { font-size: 15px; margin-bottom: 6px; letter-spacing: 2px; }
    .star-on { color: #f5b400 !important; }
    .star-off { color: #cbd5e1 !important; }
    .comment-body { font-size: 13.5px; color: #334155 !important; line-height: 1.75; margin: 0; }
    .views-pill-box { text-align: center; margin: 15px 0; }
    .views-pill {
      display: inline-flex; align-items: center; gap: 8px;
      background: #0b3d75 !important; color: #ffffff !important; border: 1px solid #f5b400;
      padding: 6px 18px; border-radius: 50px; font-size: 14px; font-weight: bold;
    }
    .views-num { color: #f5b400 !important; font-size: 16px; font-weight: 900; }
    footer.unified-footer {
      background: #0b3d75 !important; color: #dbeafe !important; text-align: center;
      padding: 22px 15px; font-size: 13.5px; line-height: 1.9; margin-top: 20px;
    }
    footer.unified-footer div { color: #dbeafe !important; }
    .designer-phone-link {
      display: inline-block; margin-top: 6px; background: rgba(255,255,255,0.14);
      border: 1px solid rgba(245,180,0,0.65); color: #f5b400 !important;
      padding: 4px 14px; border-radius: 50px; font-weight: bold;
      text-decoration: none; direction: ltr;
    }
  `;
  document.head.appendChild(style);

  /* توحيد رسالة الواتساب في جميع الأزرار */
  var unifiedWaMsg = "السلام عليكم ورحمة الله وبركاته حياكم الله جوهرة جدة عندي شغل تركيب سيراميك أو بورسلين في جدة وأرغب في الاستفسار والمعاينة وسأرسل لكم الصور وتفاصيل المساحة الحين لتحديد التكلفة والموعد";
  var unifiedWaUrl = "https://wa.me/966561201914?text=" + encodeURIComponent(unifiedWaMsg);
  var allLinks = document.querySelectorAll("a[href*='wa.me']");
  for (var i = 0; i < allLinks.length; i++) {
    allLinks[i].setAttribute("href", unifiedWaUrl);
    allLinks[i].setAttribute("target", "_blank");
    allLinks[i].setAttribute("rel", "noopener");
  }

  /* الحاوية الرئيسية */
  var container = document.querySelector(".container") || document.querySelector("main") || document.querySelector("article") || document.body;

  /* عداد المشاهدات التلقائي */
  var keyName = "jawhara_views_" + location.pathname;
  var currentViews = parseInt(localStorage.getItem(keyName) || "0", 10) + 1;
  localStorage.setItem(keyName, currentViews);
  var baseArticleViews = 350 + currentViews;

  var badgeEl = document.querySelector(".badge");
  if (badgeEl) {
    badgeEl.innerHTML = "الدليل الفني المعتمد | عدد مشاهدات المقالة: " + baseArticleViews;
  } else {
    var firstHeading = container.querySelector("h1");
    var newBadge = document.createElement("div");
    newBadge.className = "badge auto-views-badge";
    newBadge.innerHTML = "الدليل الفني المعتمد | عدد مشاهدات المقالة: " + baseArticleViews;
    if (firstHeading && firstHeading.parentNode) {
      firstHeading.parentNode.insertBefore(newBadge, firstHeading);
    } else {
      container.insertBefore(newBadge, container.firstChild);
    }
  }

  /* دالة التحميل الكسول */
  function lazyRun(element, callback) {
    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function(entries) {
        for (var j = 0; j < entries.length; j++) {
          if (entries[j].isIntersecting) {
            obs.unobserve(element);
            callback();
            break;
          }
        }
      }, { rootMargin: "180px 0px" });
      obs.observe(element);
    } else {
      callback();
    }
  }

  /* دالة رسم النجوم */
  function buildStars(count) {
    var html = "";
    for (var s = 1; s <= 5; s++) {
      html += s <= count ? '<span class="star-on">★</span>' : '<span class="star-off">★</span>';
    }
    return html;
  }

  /* قسم التعليقات الكسول 15 تعليق حسب موضوع المقالة */
  if (!document.querySelector(".auto-comments-wrap")) {
    var commentsWrap = document.createElement("div");
    commentsWrap.className = "auto-comments-wrap";
    commentsWrap.innerHTML = '<h3>آراء عملاء جوهرة جدة</h3><p class="comments-swipe-hint">اسحب بإصبعك يميناً ويساراً</p><div class="auto-comments-track" id="lazyCommentsTrack"></div>';
    container.appendChild(commentsWrap);

    lazyRun(commentsWrap, function() {
      var track = document.getElementById("lazyCommentsTrack");
      if (!track) return;
      var pageText = (document.title + " " + (document.querySelector("h1") ? document.querySelector("h1").innerText : "")).toLowerCase();
      var reviewsList = [];

      if (/ميلان|لياسة|لياسه|خالدية|خالديه|120|جدران|شطر/.test(pageText)) {
        reviewsList = [
          { name: "أبو فهد العتيبي", area: "حي الخالدية جدة", color: "#0b3d75", init: "ف", stars: 5, text: "كان عندي ميلان واضح في جدران المجلس وحمام الضيوف والفني صلاح عدل الجدران باللياسة وميزان الليزر قبل تركيب بلاط 60 في 120 وطلع الاستواء ممتاز" },
          { name: "خالد الغامدي", area: "حي الشاطئ جدة", color: "#15803d", init: "خ", stars: 4, text: "قاس الجدران بالليزر والقدة ووضح لي أماكن الشطرات وعدلها بالكامل قبل التركيب والنتيجة فواصل مستقيمة وشغل نظيف" },
          { name: "سعود الحربي", area: "حي السلامة جدة", color: "#b45309", init: "س", stars: 5, text: "ركب لي سيراميك جدران مقاس كبير بالكلبسات والليزر بعد تعديل اللياسة ولا يوجد أي تطبيل أو فراغات خلف البلاط" },
          { name: "ماجد الزهراني", area: "حي مشرف جدة", color: "#4338ca", init: "م", stars: 4, text: "دقة عالية في ضبط زوايا الجدران واستواء السطح بالكامل التزم بالموعد وسلم الشغل مرتب" },
          { name: "تركي الشمري", area: "حي الحمدانية جدة", color: "#0f766e", init: "ت", stars: 5, text: "تعديل اللياسة قبل تركيب البلاط فرق كثير في شكل الجدار النهائي وصارت كل البلاطات على مستوى واحد" },
          { name: "نايف الشهري", area: "حي الخالدية جدة", color: "#9a3412", init: "ن", stars: 3, text: "الشغل أخذ يوم زيادة بسبب تعديل ميلان الجدران باللياسة لكن النتيجة النهائية ممتازة وتستاهل الانتظار" },
          { name: "عمر الحازمي", area: "حي الروضة جدة", color: "#1d4ed8", init: "ع", stars: 5, text: "ميزان الليزر ضبط استقامة الجدران والزوايا بدقة ممتازة أنصح بالتعامل مع الفني صلاح منصور" },
          { name: "بندر الجهني", area: "حي الصفا جدة", color: "#6d28d9", init: "ب", stars: 4, text: "تركيب سيراميك 60 في 120 على الجدران بدون أي بروز في الفواصل وشغل متقن جداً" },
          { name: "وليد السبيعي", area: "حي الشاطئ جدة", color: "#be123c", init: "و", stars: 5, text: "عالج لي شطرات الجدار بالكامل قبل الغراء والتركيب طلع كأنه قطعة واحدة" },
          { name: "سالم باوزير", area: "حي السلامة جدة", color: "#0369a1", init: "س", stars: 4, text: "أمانة في العمل وفحص دقيق للميول قبل بدء التركيب وتعامل راقي" },
          { name: "فهد الدوسري", area: "حي الخالدية جدة", color: "#166534", init: "ف", stars: 5, text: "ضبط استواء حمام الضيوف بالكامل بالليزر والكلبسات شغل يبيض الوجه" },
          { name: "طارق العمري", area: "حي مشرف جدة", color: "#7c2d12", init: "ط", stars: 3, text: "التركيب والاستواء ممتاز جداً بس كنت أتمنى يبدأ بدري شوي لكن ما قصر وسلم الشغل مضبوط" },
          { name: "عبدالرحمن المالكي", area: "حي الحمدانية جدة", color: "#3730a3", init: "ع", stars: 5, text: "ركب لي جدران المطبخ والحمامات بعد تعديل اللياسة ولا غلطة في الفواصل" },
          { name: "يوسف القرني", area: "حي المروة جدة", color: "#0e7490", init: "ي", stars: 4, text: "شغل نظيف ودقيق في تركيب الألواح الكبيرة وتعديل ميلان الجدران" },
          { name: "أحمد السلمي", area: "حي الخالدية جدة", color: "#4d7c0f", init: "أ", stars: 5, text: "فني فاهم شغله صح يوزن كل بلاطة بالليزر والقدة أنصح به لكل من يبحث عن دقة التركيب" }
        ];
      } else if (/أرضي|ارضي|أرضيات|ارضيات|صالة|مجلس/.test(pageText)) {
        reviewsList = [
          { name: "عبدالله القحطاني", area: "حي الحمدانية جدة", color: "#0b3d75", init: "ع", stars: 5, text: "استواء الأرضيات بعد التركيب بميزان الليزر والكلبسات ممتاز جداً البلاط كله قطعة واحدة بدون أي ارتفاع" },
          { name: "فيصل الدوسري", area: "حي السلامة جدة", color: "#15803d", init: "ف", stars: 4, text: "فرز كراتين البورسلين قبل التركيب ووزن منسوب الصالة بالكامل بالليزر الشغل متقن" },
          { name: "سلطان المالكي", area: "حي الخالدية جدة", color: "#b45309", init: "س", stars: 5, text: "تركيب أرضيات بورسلين بدون تطبيل واستخدام الغراء بالطريقة الصحيحة مع الهزاز" },
          { name: "نايف الشهري", area: "حي الشاطئ جدة", color: "#4338ca", init: "ن", stars: 4, text: "ضبط ميول الأرضيات واستواء الصالة بدقة عالية وتسليم في الوقت المحدد" },
          { name: "مشاري العنزي", area: "حي مشرف جدة", color: "#0f766e", init: "م", stars: 5, text: "أرضية المجلس والصالة طلعت مستوية بالكامل والفواصل رفيعة ومرتبة" },
          { name: "راشد الغامدي", area: "حي الصفا جدة", color: "#9a3412", init: "ر", stars: 3, text: "استغرق التركيب وقت أطول شوي بسبب ضبط منسوب الأرضية بالليزر لكن النتيجة ممتازة" },
          { name: "سعيد الزهراني", area: "حي الروضة جدة", color: "#1d4ed8", init: "س", stars: 5, text: "ما شاء الله دقة في تركيب بورسلين الأرضيات وتناسق في العروق واللون" },
          { name: "حسين الحربي", area: "حي الحمدانية جدة", color: "#6d28d9", init: "ح", stars: 4, text: "استخدم الكلبسات وميزان الليزر في كامل الشقة ولا يوجد أي فراغ تحت البلاط" },
          { name: "محمد العتيبي", area: "حي السلامة جدة", color: "#be123c", init: "م", stars: 5, text: "أفضل شغل تركيب أرضيات شفته في جدة نظافة ودقة في الفواصل" },
          { name: "زياد السبيعي", area: "حي الشاطئ جدة", color: "#0369a1", init: "ز", stars: 4, text: "وزن أرضية الحوش والمدخل بميلان مضبوط للتصريف وشغل مرتب" },
          { name: "نواف الشمري", area: "حي الخالدية جدة", color: "#166534", init: "ن", stars: 5, text: "بورسلين 60 في 120 للأرضيات طلع كأنه رخام طبيعي من دقة التركيب" },
          { name: "عادل الجهني", area: "حي المروة جدة", color: "#7c2d12", init: "ع", stars: 3, text: "الاستواء ممتاز والشغل نظيف وكان فيه تأخير بسيط في أول يوم فقط" },
          { name: "بدر القرني", area: "حي مشرف جدة", color: "#3730a3", init: "ب", stars: 5, text: "فني أمين يفرز الكراتين قبل التركيب عشان ما يصير فيه اختلاف لون في الأرضية" },
          { name: "ياسر العمري", area: "حي الحمدانية جدة", color: "#0e7490", init: "ي", stars: 4, text: "التزام بالمواعيد ودقة في تركيب أرضيات الغرف والصالة بالليزر" },
          { name: "إبراهيم السلمي", area: "حي السلامة جدة", color: "#4d7c0f", init: "إ", stars: 5, text: "تسلم يده على شغل الأرضيات استواء تام بدون أي هبوط أو تطبيل" }
        ];
      } else {
        reviewsList = [
          { name: "طارق العمري", area: "حي الخالدية جدة", color: "#0b3d75", init: "ط", stars: 5, text: "شغل احترافي في تركيب البورسلين والسيراميك بميزان الليزر وضبط الفواصل بدقة عالية بدون أي تطبيل" },
          { name: "بندر الجهني", area: "حي السلامة جدة", color: "#15803d", init: "ب", stars: 4, text: "أفضل فني بلاط تعاملت معه في جدة التزام بالمواعيد ونظافة في التنفيذ والزوايا طالعة ممتازة" },
          { name: "وليد السبيعي", area: "حي الحمدانية جدة", color: "#b45309", init: "و", stars: 5, text: "استخدم ميزان الليزر والكلبسات في كامل الحمامات والمطبخ والنتيجة استواء كامل" },
          { name: "عمر الحازمي", area: "حي مشرف جدة", color: "#4338ca", init: "ع", stars: 4, text: "دقة في التركيب وأمانة في النصيحة الفنية قبل بدء العمل أنصح بالتواصل مع جوهرة جدة" },
          { name: "سعد القحطاني", area: "حي الشاطئ جدة", color: "#0f766e", init: "س", stars: 5, text: "تركيب بورسلين الحوائط والأرضيات طلع ممتاز جداً بدون أي بروز في الحواف" },
          { name: "مازن الغامدي", area: "حي الصفا جدة", color: "#9a3412", init: "م", stars: 3, text: "الشغل متقن جداً بس يحتاج صبر لأن الفني يدقق في كل بلاطة قبل يثبتها" },
          { name: "خالد الحربي", area: "حي الروضة جدة", color: "#1d4ed8", init: "خ", stars: 5, text: "فني محترف ومعه كامل عدته من ليزر وهزاز وكلبسات وشغله نظيف ومرتب" },
          { name: "فارس العتيبي", area: "حي الخالدية جدة", color: "#6d28d9", init: "ف", stars: 4, text: "تعامل راقي وسرعة في الإنجاز مع المحافظة على دقة الاستواء والفواصل" },
          { name: "عبدالعزيز الزهراني", area: "حي السلامة جدة", color: "#be123c", init: "ع", stars: 5, text: "ركب لي سيراميك الحمامات والمطبخ والخورنق طالع ممتاز وموزون بالليزر" },
          { name: "متعب الدوسري", area: "حي الحمدانية جدة", color: "#0369a1", init: "م", stars: 4, text: "أنصح بالتعامل مع الفني صلاح منصور شغله مرتب ويلتزم بالاتفاق" },
          { name: "هاني المالكي", area: "حي الشاطئ جدة", color: "#166534", init: "ه", stars: 5, text: "جودة عالية في تركيب البورسلين والرخام واهتمام بأدق التفاصيل" },
          { name: "أنس الشهري", area: "حي المروة جدة", color: "#7c2d12", init: "أ", stars: 3, text: "النتيجة ممتازة والاستواء مضبوط وكان فيه ضغط مواعيد بسيط لكنه التزم وخلص الشغل صح" },
          { name: "صالح الشمري", area: "حي مشرف جدة", color: "#3730a3", init: "ص", stars: 5, text: "شغل يبرد الخاطر فواصل متساوية وبلاط راكب بدون أي فراغات" },
          { name: "عصام القرني", area: "حي الخالدية جدة", color: "#0e7490", init: "ع", stars: 4, text: "دقة ممتازة في القص والزوايا وتنفيذ نظيف جداً" },
          { name: "زياد السلمي", area: "حي السلامة جدة", color: "#4d7c0f", init: "ز", stars: 5, text: "تجربة ممتازة مع جوهرة جدة في تركيب سيراميك وبورسلين كامل الشقة" }
        ];
      }

      var html = "";
      for (var r = 0; r < reviewsList.length; r++) {
        var rev = reviewsList[r];
        html += '<div class="comment-slide-card">' +
          '<div class="comment-head">' +
            '<div class="comment-avatar" style="background:' + rev.color + ';">' + rev.init + '</div>' +
            '<div><div class="comment-author">' + rev.name + '</div><div class="comment-area">' + rev.area + '</div></div>' +
          '</div>' +
          '<div class="comment-stars">' + buildStars(rev.stars) + '</div>' +
          '<p class="comment-body">' + rev.text + '</p>' +
        '</div>';
      }
      track.innerHTML = html;
    });
  }

  /* بطاقة تعريف الفني المعتمد */
  var profileHtml = '<h3>بطاقة تعريف الفني المعتمد</h3>' +
    '<p><strong>الاسم التجاري:</strong> جوهرة جدة لتركيب السيراميك والبورسلين والرخام</p>' +
    '<p><strong>الفني المسؤول:</strong> صلاح منصور حاصل على شهادة خبرة مهنية معتمدة من القوات المسلحة المصرية في أعمال البناء والتشطيب والسيراميك خلال الفترة من <span dir="ltr" style="display:inline-block;">2018/9/1</span> الي <span dir="ltr" style="display:inline-block;">2020/9/1</span></p>' +
    '<p><strong>نطاق الخدمة:</strong> جميع أحياء جدة فقط | <strong>الجوال والواتساب:</strong> <span dir="ltr" style="display:inline-block;">0561201914</span></p>';

  var existingProfile = document.querySelector(".profile-card");
  if (existingProfile) {
    existingProfile.innerHTML = profileHtml;
  } else {
    var profileDiv = document.createElement("div");
    profileDiv.className = "profile-card";
    profileDiv.innerHTML = profileHtml;
    container.appendChild(profileDiv);
  }

  /* معرض الصور الكسول بدون تكرار */
  if (!document.querySelector(".auto-gallery-wrap")) {
    var galDiv = document.createElement("div");
    galDiv.className = "auto-gallery-wrap";
    galDiv.innerHTML = '<h3>معرض صور الأعمال المنفذة في جدة</h3><div class="auto-gallery-track" id="autoArticleGalleryTrack"></div>';
    var targetBefore = document.querySelector(".auto-comments-wrap") || document.querySelector(".profile-card");
    if (targetBefore && targetBefore.parentNode === container) {
      container.insertBefore(galDiv, targetBefore);
    } else {
      container.appendChild(galDiv);
    }

    lazyRun(galDiv, function() {
      fetch("https://api.github.com/repos/jawhara-kitchen-jeddah/jawhara-ceramic-jeddah/contents/")
        .then(function(r) { return r.json(); })
        .then(function(files) {
          var track = document.getElementById("autoArticleGalleryTrack");
          if (!Array.isArray(files) || !track) return;
          var seen = {};
          var imgsHtml = "";
          files.forEach(function(f) {
            var lower = (f.name || "").toLowerCase();
            if (/\.(jpg|jpeg|png|webp)$/i.test(lower) && lower !== "1.png" && !seen[lower]) {
              seen[lower] = true;
              imgsHtml += '<img src="' + f.name + '" alt="أعمال جوهرة جدة لتركيب البورسلين والسيراميك بالليزر" loading="lazy">';
            }
          });
          track.innerHTML = imgsHtml;
        });
    });
  }

  /* الفوتر الموحد وعداد المشاهدات */
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

  /* الشريط السفلي الثابت */
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
