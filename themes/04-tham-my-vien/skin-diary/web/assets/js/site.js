/* SKIN DIARY — EN / VI language switch (site-level logic, not provided by ui.js) */
(function () {
  'use strict';

  var STORAGE_KEY = 'sd_lang';
  var DICT = {
    en: {
      // — shared: header / menu / buttons
      home_nav: "Home",
      svc_nav: "Services & Prices",
      about_nav: "About",
      j_nav: "Journal",
      book_btn: "Book a Consultation",
      group_lbl: "Language",
      a_menu: "Open menu",
      a_close: "Close",
      hours_panel: 'Tuesday to Sunday, 9:00 to 20:00<br><a href="tel:+842838224719" class="text-ink underline underline-offset-4">+84 28 3822 4719</a>',
      // — shared: footer
      f_tag: "Skin care, written around you.",
      f_pages: "Pages",
      f_visit: "Visit",
      f_contact: "Contact",
      f_addr: '42 Ly Tu Trong Street, Ben Nghe Ward<br>District 1, Ho Chi Minh City',
      f_hours: 'Tuesday to Sunday, 9:00 to 20:00<br>Closed on Mondays',
      f_copy: "Copy phone number",
      f_copyright: "© 2026 SKIN DIARY. All rights reserved.",
      f_note: "Prices shown are for reference. Treatment plans are confirmed after consultation.",
      // — shared: booking modal + form
      m_title: 'Book a <em class="text-cherry">consultation</em>',
      m_sub: "A 30-minute skin reading with our team. Complimentary, no obligation.",
      f_name: "Full name",
      f_phone: "Phone",
      f_email: "Email",
      f_interest: "Area of interest",
      f_opt0: "Not sure yet",
      f_opt1: "Skin Care",
      f_opt2: "Skin Renewal",
      f_opt3: "Skin Treatment",
      f_date: "Preferred date",
      f_notes: "What would you like to change about your skin?",
      f_submit: "Request a time",
      f_demo: "Demo form: your details are not sent anywhere yet.",
      // — service names + labels (shared home / services)
      cat_care: "Skin Care",
      cat_renewal: "Skin Renewal",
      cat_treat: "Skin Treatment",
      dur: "Duration",
      ref: "Reference price",
      ref_per: "Reference price, per session",
      svc_sig: "Signature Diary Facial",
      svc_hyd: "Deep Hydration Ritual",
      svc_barrier: "Barrier Repair Facial",
      svc_led: "LED Calm, add-on",
      svc_peel: "Brightening Peel",
      svc_peel4: "Brightening Peel, course of four",
      svc_poly: "Enzyme Polish",
      svc_micro: "Collagen Microneedling",
      svc_clar: "Clarity Programme visit",
      svc_clar2: "Clarity Programme",
      svc_plaser: "Pigment Laser Toning",
      svc_flr: "Fractional Laser Resurfacing",
      svc_doc: "Doctor's skin review",
      course4: "Course of four sessions: 4,900,000 ₫",

      // — HOME
      home_title: "SKIN DIARY — Skin, kept like a diary",
      home_desc: "SKIN DIARY is a skin care clinic in Ho Chi Minh City. Facials, skin renewal and doctor-led treatments planned around your own written skin record.",
      h_date: "The skin care journal",
      h_season: "Autumn / Winter 2026",
      home_h1: 'Skin, kept like a <em class="text-cherry">diary.</em>',
      home_lede: "A Saigon skin clinic where every facial, peel and laser plan is written around your skin, entry by entry.",
      h_fig: "On the cover: calm, even skin starts with a strong barrier.",
      h_c1sub: "Facials built around a healthy barrier",
      h_c2sub: "Peels and polish for a fresher surface",
      h_c3sub: "Laser and clinical care, doctor-led",
      explore: "Explore services",
      man_h2: 'What we <em class="text-cherry">believe</em>',
      man_p1: "Most skin does not need more. It needs to be read properly. At SKIN DIARY every client starts with a written skin record: what you use, how your skin reacts to heat, sleep and seasons, and how you want it to feel. Treatments are chosen from that record, not from a menu of trends.",
      man_quote: "Good skin is a habit you keep, not a result you buy.",
      man_p2: "We keep our rooms quiet, our product shelf short and our notes detailed. Each visit adds a page to your record, so the next treatment is based on how your skin actually responded, not on guesswork.",
      man_t1: "Read first",
      man_t1d: "A full skin reading before any device or acid touches your face.",
      man_t2: "Treat gently",
      man_t2d: "The lowest effective strength, raised only when your skin is ready.",
      man_t3: "Write it down",
      man_t3d: "Photos and notes after every visit, shared with you by email.",
      chap_h2: 'Three chapters <em class="text-cherry">of care</em>',
      chap_lede: "Our menu is edited into three sections, from everyday maintenance to clinical treatment. Your consultation tells us where to begin.",
      chap_c1: 'Facials and hydration rituals that cleanse, calm and rebuild the moisture barrier. <span class="mt-2 block font-medium text-ink">From 950,000 ₫</span>',
      chap_c2: 'Gentle peels and enzyme work that lift dullness and even out tone over a short course. <span class="mt-2 block font-medium text-ink">From 1,150,000 ₫</span>',
      chap_c3: 'Fractional laser and clinical programmes for acne, scarring and pigment, supervised by our doctor. <span class="mt-2 block font-medium text-ink">From 2,900,000 ₫</span>',
      chap_price: "See the full price list",
      j_h: 'The <em class="text-cherry">Journal</em>',
      j_lead: "Short reads from our treatment rooms on keeping skin calm through heat, humidity and long screen days.",
      j1_meta: "Ingredients, 4 min read",
      j1_h: "How to layer a serum without overloading your skin",
      j1_lede: "One active at a time, thinnest texture first, and a week of patience before you judge anything.",
      j_read: "Read the entry",
      j2_meta: "Routine, 3 min read",
      j2_h: "The four-step evening routine we give most new clients",
      j3_meta: "Seasons, 3 min read",
      j3_h: "Rainy season skin: why oily can still mean dehydrated",
      q_quote: 'I stopped hiding my skin and started <em class="text-nude">reading it.</em>',
      q_name: "Linh Tran",
      q_role: "Client since 2023, Clarity Programme",
      cta_h2: 'Begin your <em class="text-cherry">skin diary.</em>',
      cta_lede: "Every new client starts with a 30-minute consultation and a written skin record. It is complimentary, and there is no obligation to book a treatment.",
      m1_b1: "Serums are concentrated, which is exactly why more is rarely better. Start with clean, slightly damp skin and apply the thinnest texture first: water-light serums before gels, gels before creams.",
      m1_b2: "Introduce one active at a time. If you add vitamin C and a retinoid in the same week and your skin stings, you will not know which one caused it. Give each new product seven to ten days before deciding whether it works for you.",
      m1_b3: "Two or three drops cover the whole face. Press, do not rub, and wait a minute before your moisturiser so each layer can settle.",
      m1_sig: "Written by the SKIN DIARY treatment team.",
      m2_list: '<li><strong class="font-medium">Cleanse twice if you wore sunscreen.</strong> An oil or balm first, then a gentle gel cleanser.</li><li><strong class="font-medium">Hydrate.</strong> A simple toner or essence on damp skin, patted in with the hands.</li><li><strong class="font-medium">Treat.</strong> The one active your skin record says you need, nothing more.</li><li><strong class="font-medium">Seal.</strong> A moisturiser matched to the season, lighter in the dry months of the year than you might think.</li>',
      m2_sig: "Bring your current products to your consultation and we will edit the routine with you.",
      m3_b1: "Humid months make skin look shiny, so many people strip it with harsh cleansers and skip moisturiser. The result is often more oil, not less, because dehydrated skin tries to protect itself.",
      m3_b2: "Swap foaming cleansers for a low-pH gel, keep a light hydrating layer, and do not drop sunscreen on grey days. Clouds block far less UV than they seem to.",

      // — SERVICES
      svc_title: "Services & Prices — SKIN DIARY",
      svc_desc: "SKIN DIARY services and reference prices: Skin Care facials, Skin Renewal peels and doctor-led Skin Treatment in Ho Chi Minh City.",
      svc_h1: 'The service <em class="text-cherry">edit.</em>',
      svc_lede: "Every treatment we offer, arranged in three chapters. Prices are for reference; your plan is confirmed after a skin consultation.",
      spy_care: '<span class="text-cherry">01</span> Skin Care',
      spy_renewal: '<span class="text-cherry">02</span> Skin Renewal',
      spy_treat: '<span class="text-cherry">03</span> Skin Treatment',
      spy_price: "Price list",
      spy_faq: "Questions",
      s1_lede: "Maintenance for every skin type. Facials that cleanse, calm and rebuild the moisture barrier, best repeated every four to six weeks.",
      s1_label: "Our signature",
      s1_desc: "A double cleanse and skin reading, gentle extraction where needed, a slow lymphatic massage and a mask chosen from your skin record. The facial we recommend for a first visit.",
      s2_desc: "Layered hyaluronic serums pressed in by hand, a cooling jade massage and a barrier cream to finish. For skin that feels tight after flights, air conditioning or a strong active.",
      renew_h2: 'Skin <em>Renewal</em>',
      renew_lede: "For dullness, uneven tone and rough texture. Controlled exfoliation that encourages a fresher surface, planned as a short course rather than a one-off.",
      bp_desc: "A mandelic and lactic acid blend suited to Asian skin, layered to your tolerance. Light flaking for two to three days, no time off needed.",
      ep_desc: "Papaya and pumpkin enzymes dissolve dead cells without acids or scrubs. Our choice for sensitive or reactive skin that cannot yet take a peel.",
      treat_lede: "Clinical care for acne, scarring and pigment. Every treatment in this chapter is assessed and supervised by our dermatologist.",
      flr_desc: "Thousands of micro-columns of light prompt the skin to rebuild collagen, softening acne scars and uneven texture. Performed by our doctor under numbing cream; expect redness for three to five days.",
      dr_quote: "“We never laser skin we have not read first. Most clients start with two calmer visits before their first session.”",
      dr_role: "Dr. Nguyen Minh Chau, founder and dermatologist",
      cp_desc: "Eight weeks for active acne: in-clinic blue light and extraction every two weeks, plus a home routine reviewed by our doctor.",
      cp_price: "60 minutes per visit,",
      price_h2: 'Price <em class="text-cherry">list</em>',
      price_lede: "Reference prices in Vietnamese dong, including VAT. Your consultation confirms the exact plan and number of sessions.",
      pr_c1s: "75 min. Recommended first visit",
      pr_c2s: "60 min. For dehydrated, tight skin",
      pr_c3s: "70 min. For redness and sensitivity",
      pr_c4s: "20 min. Added to any facial",
      pr_r1s: "45 min. Single session",
      pr_r2s: "Every two weeks",
      pr_r3s: "50 min. Acid-free, for sensitive skin",
      pr_r4s: "75 min. Texture and fine lines",
      pr_t1s: "60 min. Active acne, eight-week plan",
      pr_t2s: "30 min. Melasma and sun spots",
      pr_t3s: "60 min. Acne scars and texture",
      pr_t4s: "20 min. Before any laser plan",
      incl: "Included",
      faq_h2: 'Before you <em class="text-cherry">book</em>',
      faq_q1: "Is the first consultation really free?",
      faq_a1: "Yes. The 30-minute consultation and your written skin record are complimentary, and there is no obligation to book a treatment afterwards.",
      faq_q2: "How much downtime should I plan for?",
      faq_a2: "Skin Care facials have none. Peels may cause light flaking for two to three days. Fractional laser usually means three to five days of redness, so we plan it around your calendar.",
      faq_q3: "Can I have treatments while pregnant?",
      faq_a3: "Hydration and barrier facials are fine. We pause peels, laser and most actives until after pregnancy and breastfeeding. Please tell us at your consultation.",
      faq_q4: "Do you sell skin care products?",
      faq_a4: "No. We focus on treatments and advice. If you need home products, we write down ingredients to look for so you can choose freely.",
      svc_cta_h2: 'Not sure where <em class="text-cherry">to start?</em>',
      svc_cta_lede: "Start with a complimentary consultation. We read your skin, write your record and suggest the first chapter that makes sense.",

      // — ABOUT
      about_title: "About — SKIN DIARY",
      about_desc: "The story of SKIN DIARY: a skin care clinic in District 1, Ho Chi Minh City, founded on reading skin before treating it. Meet our team and see our rooms.",
      datel_about: "About us",
      about_h1: 'A diary, not a <em class="text-cherry">clinic.</em>',
      about_lede: "How a dermatologist and two aestheticians built a quieter way to look after skin in the middle of District 1.",
      salut: "Dear reader,",
      l1: "I opened SKIN DIARY after twelve years in hospital dermatology, where I saw the same story again and again: good skin damaged by too many products and treatments chosen in a hurry.",
      l2: "So we built the opposite. Fewer treatments, done slowly. A written record for every client, updated after each visit, so that nothing is guessed. Rooms that feel more like a reading corner than a clinic.",
      l3: "We do not sell products and we do not chase trends. We read your skin, we tell you honestly what it needs, and we write it down.",
      sign: "Nguyen Minh Chau",
      sign_role: "Founder and dermatologist",
      meth_h2: 'How a first visit <em class="text-cherry">works</em>',
      st1: "Consult",
      st1d: "Thirty minutes about your routine, history and what you want your skin to feel like.",
      st2: "Read",
      st2d: "A magnified skin analysis and standard photos that open your personal skin record.",
      st3: "Plan",
      st3d: "A written plan with treatments, timing and a clear price before anything begins.",
      st4: "Review",
      st4d: "A follow-up after two weeks to note how your skin responded and adjust the next step.",
      space_h2: 'Our <em class="text-cherry">rooms</em>',
      cap1: "Room one: twin beds for paired treatments",
      cap2: "Room two: daylight tones for facials and peels",
      sp_p1: "Three private rooms on the second floor of a 1960s building on Ly Tu Trong Street. Soft lighting, filtered water for every cleanse, and no music unless you ask for it.",
      sp_hint: "Tap a photo to view it larger.",
      team_h2: 'The people who <em class="text-cherry">read your skin</em>',
      t_n1: "Dr. Nguyen Minh Chau",
      t_r1: "Founder and dermatologist",
      t_d1: "Oversees every treatment plan and performs all laser work.",
      t_n2: "Tran Thu Ha",
      t_r2: "Head aesthetician",
      t_d2: "Leads our Skin Care and Skin Renewal chapters and trains every new therapist.",
      t_n3: "Le Anh Vy",
      t_r3: "Clinical nurse, laser care",
      t_d3: "Prepares skin before laser sessions and handles aftercare check-ins.",
      about_cta_h2: 'Come and <em class="text-cherry">meet us.</em>',
      about_cta_lede: "Your first page starts with a complimentary 30-minute consultation at our District 1 rooms."
    },

    vi: {
      // — dùng chung: header / menu / nút
      home_nav: "Trang chủ",
      svc_nav: "Dịch vụ & Bảng giá",
      about_nav: "Về chúng tôi",
      j_nav: "Nhật ký",
      book_btn: "Đặt lịch tư vấn",
      group_lbl: "Ngôn ngữ",
      a_menu: "Mở menu",
      a_close: "Đóng",
      hours_panel: 'Thứ Ba đến Chủ Nhật, 9:00 đến 20:00<br><a href="tel:+842838224719" class="text-ink underline underline-offset-4">+84 28 3822 4719</a>',
      // — dùng chung: footer
      f_tag: "Chăm sóc da, viết riêng cho bạn.",
      f_pages: "Trang",
      f_visit: "Ghé thăm",
      f_contact: "Liên hệ",
      f_addr: '42 Lý Tự Trọng, Phường Bến Nghé<br>Quận 1, TP. Hồ Chí Minh',
      f_hours: 'Thứ Ba đến Chủ Nhật, 9:00 đến 20:00<br>Nghỉ thứ Hai',
      f_copy: "Sao chép số điện thoại",
      f_copyright: "© 2026 SKIN DIARY. Bảo lưu mọi quyền.",
      f_note: "Giá chỉ mang tính tham khảo. Liệu trình được chốt sau buổi tư vấn.",
      // — dùng chung: modal đặt lịch + form
      m_title: 'Đặt <em class="text-cherry">lịch tư vấn</em>',
      m_sub: "Buổi soi da 30 phút cùng đội ngũ của chúng tôi. Miễn phí, không ràng buộc.",
      f_name: "Họ và tên",
      f_phone: "Số điện thoại",
      f_email: "Email",
      f_interest: "Lĩnh vực quan tâm",
      f_opt0: "Chưa chắc chắn",
      f_opt1: "Chăm sóc da",
      f_opt2: "Tái tạo da",
      f_opt3: "Điều trị da",
      f_date: "Ngày mong muốn",
      f_notes: "Bạn muốn cải thiện điều gì về làn da của mình?",
      f_submit: "Chọn thời gian",
      f_demo: "Biểu mẫu demo: thông tin của bạn chưa được gửi đi đâu.",
      // — tên dịch vụ + nhãn (dùng chung home / services)
      cat_care: "Chăm sóc da",
      cat_renewal: "Tái tạo da",
      cat_treat: "Điều trị da",
      dur: "Thời lượng",
      ref: "Giá tham khảo",
      ref_per: "Giá tham khảo, mỗi buổi",
      svc_sig: "Liệu trình đặc trưng Diary",
      svc_hyd: "Nghi thức cấp ẩm chuyên sâu",
      svc_barrier: "Liệu trình phục hồi rào chắn",
      svc_led: "LED dịu da, kèm thêm",
      svc_peel: "Peel tái sáng",
      svc_peel4: "Peel tái sáng, liệu trình bốn buổi",
      svc_poly: "Enzyme làm mịn da",
      svc_micro: "Microneedling collagen",
      svc_clar: "Buổi liệu trình Clarity",
      svc_clar2: "Liệu trình Clarity",
      svc_plaser: "Laser toning cải thiện nám",
      svc_flr: "Tái tạo da bằng laser phân đoạn",
      svc_doc: "Soi da với bác sĩ",
      course4: "Liệu trình bốn buổi: 4,900,000 ₫",

      // — TRANG CHỦ
      home_title: "SKIN DIARY — Làn da, lưu giữ như cuốn nhật ký",
      home_desc: "SKIN DIARY là phòng khám chăm sóc da tại TP. Hồ Chí Minh. Phương pháp liệt da, tái tạo da và trị liệu do bác sĩ phụ trách — viết riêng từ nhật ký làn da của bạn.",
      h_date: "Tạp chí chăm sóc da",
      h_season: "Thu / Đông 2026",
      home_h1: 'Làn da, lưu giữ như một <em class="text-cherry">cuốn nhật ký.</em>',
      home_lede: "Phòng khám da tại Sài Gòn, nơi mọi liệu trình từ chăm da chuyên sâu đến peel và laser đều được viết riêng cho làn da của bạn, từng trang một.",
      h_fig: "Trên trang bìa: làn da dịu dàng, đều màu bắt nguồn từ một hàng rào bảo vệ khỏe.",
      h_c1sub: "Liệu trình làm sạch để xây hàng rào bảo vệ khỏe",
      h_c2sub: "Peel và enzyme cho bề mặt da mới mẻ hơn",
      h_c3sub: "Laser và trị liệu y khoa, do bác sĩ phụ trách",
      explore: "Xem các dịch vụ",
      man_h2: 'Điều chúng tôi <em class="text-cherry">tin</em>',
      man_p1: "Hầu hết làn da không cần thêm thứ gì. Chúng chỉ cần được đọc cho đúng. Tại SKIN DIARY, mỗi khách hàng bắt đầu với một hồ sơ da bằng văn bản: bạn đang dùng gì, da phản ứng thế nào với nắng nóng, giấc ngủ và thời tiết, và bạn muốn da có cảm giác ra sao. Liệu trình được chọn từ hồ sơ đó, chứ không theo menu chạy theo xu hướng.",
      man_quote: "Da đẹp là một thói quen bạn giữ, không phải một kết quả bạn mua.",
      man_p2: "Chúng tôi giữ không gian trị liệu thật yên tĩnh, kệ sản phẩm thật gọn và ghi chú thật tỉ mỉ. Mỗi lần quay lại thêm một trang vào hồ sơ của bạn, để liệu trình kế tiếp dựa trên phản ứng thật của da, không phải phỏng đoán.",
      man_t1: "Đọc da trước",
      man_t1d: "Soi da toàn diện trước khi bất kỳ máy móc hay acid nào chạm vào da bạn.",
      man_t2: "Liệu trình dịu nhẹ",
      man_t2d: "Liều nhẹ hiệu quả thấp nhất, chỉ tăng khi làn da đã sẵn sàng.",
      man_t3: "Ghi lại từng bước",
      man_t3d: "Ảnh và ghi chú sau mỗi lần trị liệu, gửi bạn qua email.",
      chap_h2: 'Ba chương <em class="text-cherry">chăm sóc</em>',
      chap_lede: "Menu được biên tập thành ba chuyên mục, từ chăm sóc hằng ngày đến trị liệu y khoa. Buổi tư vấn sẽ cho chúng tôi biết nên bắt đầu từ đâu.",
      chap_c1: 'Nghi thức làm sạch, cấp ẩm giúp làm dịu và tái lập hàng rào ẩm cho da. <span class="mt-2 block font-medium text-ink">Từ 950,000 ₫</span>',
      chap_c2: 'Peel và enzyme dịu giúp đẩy lùi xỉn màu, dưỡng đều màu da trong một liệu trình ngắn. <span class="mt-2 block font-medium text-ink">Từ 1,150,000 ₫</span>',
      chap_c3: 'Laser phân đoạn và liệu trình y khoa cho mụn, sẹo rỗ và tăng sắc tố, dưới sự giám sát của bác sĩ. <span class="mt-2 block font-medium text-ink">Từ 2,900,000 ₫</span>',
      chap_price: "Xem bảng giá đầy đủ",
      j_h: 'Góc <em class="text-cherry">nhật ký</em>',
      j_lead: "Những bài đọc ngắn từ phòng trị liệu về cách giữ làn da bình tĩnh giữa nắng nóng, độ ẩm và những ngày dài trước màn hình.",
      j1_meta: "Thành phần, đọc 4 phút",
      j1_h: "Cách phủ serum sao cho da không bị “quá tải”",
      j1_lede: "Mỗi lần một hoạt chất, lớp lỏng nhất thoa trước, và kiên nhẫn một tuần trước khi đánh giá.",
      j_read: "Đọc bài",
      j2_meta: "Quy trình, đọc 3 phút",
      j2_h: "Quy trình tối bốn bước dành cho hầu hết khách hàng mới",
      j3_meta: "Theo mùa, đọc 3 phút",
      j3_h: "Làn da mùa mưa: vì sao da dầu vẫn có thể đang thiếu ẩm",
      q_quote: 'Tôi ngừng che giấu làn da và bắt đầu <em class="text-nude">lắng nghe nó.</em>',
      q_name: "Linh Trần",
      q_role: "Khách hàng từ 2023, Liệu trình Clarity",
      cta_h2: 'Bắt đầu <em class="text-cherry">nhật ký làn da.</em>',
      cta_lede: "Mọi khách hàng mới đều bắt đầu bằng buổi tư vấn 30 phút và một hồ sơ da bằng văn bản. Hoàn toàn miễn phí, không bắt buộc đặt liệu trình.",
      m1_b1: "Serum có nồng độ cao, và vì thế dùng nhiều chưa chắc đã tốt hơn. Bắt đầu với da sạch, còn hơi ẩm, thoa lớp lỏng nhất trước: serum dạng nước trước gel, gel trước kem.",
      m1_b2: "Chỉ thêm một hoạt chất mỗi lần. Nếu dùng chung vitamin C và retinoid trong cùng một tuần rồi da châm chích, bạn sẽ không biết thành phần nào là thủ phạm. Hãy cho mỗi sản phẩm mới bảy đến mười ngày trước khi kết luận.",
      m1_b3: "Hai đến ba giọt là đủ cho cả gương mặt. Vỗ nhẹ, đừng chà, và chờ một phút trước khi thoa kem dưỡng để từng lớp kịp ổn định.",
      m1_sig: "Bài viết của đội ngũ trị liệu SKIN DIARY.",
      m2_list: '<li><strong class="font-medium">Rửa mặt hai lần nếu bạn dùng kem chống nắng.</strong> Dầu hoặc balm trước, rồi đến rửa gel dịu nhẹ.</li><li><strong class="font-medium">Cấp ẩm.</strong> Toner hoặc essence đơn giản trên da còn ẩm, vỗ nhẹ bằng tay.</li><li><strong class="font-medium">Điều trị.</strong> Chỉ một hoạt chất mà hồ sơ da của bạn thực sự cần, không thêm gì.</li><li><strong class="font-medium">Khóa ẩm.</strong> Chọn kem dưỡng theo mùa; vào những tháng khô hanh, lớp này nhẹ hơn bạn nghĩ.</li>',
      m2_sig: "Mang theo mỹ phẩm đang dùng đến buổi tư vấn, chúng tôi sẽ cùng bạn biên tập lại quy trình.",
      m3_b1: "Mùa ẩm khiến da trông bóng dầu, nên nhiều người vội rửa da đậm bằng sản phẩm mạnh và bỏ qua kem dưỡng. Kết quả thường là da càng nổi dầu hơn, vì da đang thiếu ẩm sẽ tự tìm cách bảo vệ mình.",
      m3_b2: "Thay sữa rửa mặt tạo bọt bằng gel pH thấp, giữ một lớp ẩm nhẹ và đừng bỏ kem chống nắng trong ngày mây xám. Mây chắn tia UV ít hơn bạn tưởng rất nhiều.",

      // — DỊCH VỤ & BẢNG GIÁ
      svc_title: "Dịch vụ & Bảng giá — SKIN DIARY",
      svc_desc: "Dịch vụ và giá tham khảo của SKIN DIARY: liệu trình chăm sóc da, tái tạo da và điều trị da do bác sĩ phụ trách tại TP. Hồ Chí Minh.",
      svc_h1: 'Bản biên tập <em class="text-cherry">dịch vụ.</em>',
      svc_lede: "Toàn bộ liệu trình được biên tập thành ba chương. Giá chỉ tham khảo; kế hoạch của bạn được chốt sau buổi tư vấn.",
      spy_care: '<span class="text-cherry">01</span> Chăm sóc da',
      spy_renewal: '<span class="text-cherry">02</span> Tái tạo da',
      spy_treat: '<span class="text-cherry">03</span> Điều trị da',
      spy_price: "Bảng giá",
      spy_faq: "Câu hỏi",
      s1_lede: "Duy trì cho mọi loại da. Liệu trình làm sạch, làm dịu và tái lập hàng rào ẩm, nên lặp lại sau bốn đến sáu tuần.",
      s1_label: "Liệu trình đặc trưng",
      s1_desc: "Làm sạch hai bước và soi da, lấy nhân mụn ở chỗ cần, massage bạch huyết chậm rãi và đắp mặt nạ chọn từ hồ sơ da của bạn. Đây là liệu trình chúng tôi gợi ý cho lần đầu ghé thăm.",
      s2_desc: "Bôi nhiều lớp serum hyaluronic bằng tay, massage đá mát và kết thúc bằng kem phục hồi rào chắn. Dành cho làn da khô căng sau chuyến bay, điều hòa hoặc một hoạt chất mạnh.",
      renew_h2: 'Tái tạo <em>da</em>',
      renew_lede: "Cho làn da xỉn màu, không đều màu và sần sùi. Tẩy da chết có kiểm soát để bề mặt mới mẻ hơn, lên kế hoạch như một liệu trình ngắn chứ không phải một buổi đơn lẻ.",
      bp_desc: "Hỗn hợp mandelic và lactic acid phù hợp da Á Đông, tăng theo mức độ dung nạp của bạn. Bong nhẹ hai đến ba ngày, không cần nghỉ ngơi.",
      ep_desc: "Enzyme từ đu đủ và bí ngô phân giải tế bào chết mà không cần acid hay chà xát. Lựa chọn cho làn da nhạy cảm, dễ kích ứng chưa thể peel.",
      treat_lede: "Trị liệu y khoa cho mụn, sẹo rỗ và tăng sắc tố. Mọi liệu trình trong chương này đều được bác sĩ da liễu của chúng tôi đánh giá và giám sát.",
      flr_desc: "Hàng nghìn vi cột ánh sáng kích thích da tái tạo collagen, làm mềm sẹo rỗ và bề mặt không đều. Do bác sĩ thực hiện sau khi bôi tê; da có thể đỏ ba đến năm ngày.",
      dr_quote: "“Chúng tôi không bao giờ laser trên làn da chưa được đọc. Hầu hết khách hàng đều bắt đầu với hai buổi dịu nhẹ trước buổi đầu tiên.”",
      dr_role: "Bác sĩ Nguyễn Minh Châu, nhà sáng lập kiêm bác sĩ da liễu",
      cp_desc: "Tám tuần cho mụn đang tiến triển: ánh sáng xanh tại phòng khám và lấy nhân mụn hai tuần một lần, kèm quy trình ở nhà do bác sĩ duyệt.",
      cp_price: "60 phút mỗi buổi,",
      price_h2: 'Bảng <em class="text-cherry">giá</em>',
      price_lede: "Giá tham khảo bằng Việt Nam đồng, đã gồm VAT. Buổi tư vấn chốt kế hoạch và số buổi chính xác.",
      pr_c1s: "75 phút. Gợi ý cho lần đầu",
      pr_c2s: "60 phút. Cho da khô căng, thiếu ẩm",
      pr_c3s: "70 phút. Cho da đỏ và nhạy cảm",
      pr_c4s: "20 phút. Kèm bất kỳ liệu trình nào",
      pr_r1s: "45 phút. Buổi đơn lẻ",
      pr_r2s: "Hai tuần một lần",
      pr_r3s: "50 phút. Không acid, cho da nhạy cảm",
      pr_r4s: "75 phút. Cho da sần và nếp nhăn mờ",
      pr_t1s: "60 phút. Mụn tiến triển, lộ trình 8 tuần",
      pr_t2s: "30 phút. Nám và đốm nắng",
      pr_t3s: "60 phút. Sẹo rỗ và bề mặt da",
      pr_t4s: "20 phút. Trước mọi kế hoạch laser",
      incl: "Đã gồm",
      faq_h2: 'Trước khi <em class="text-cherry">đặt hẹn</em>',
      faq_q1: "Buổi tư vấn đầu tiên đúng là miễn phí chứ?",
      faq_a1: "Đúng vậy. Buổi tư vấn 30 phút và hồ sơ da bằng văn bản đều miễn phí, và bạn không bắt buộc đặt liệu trình nào sau đó.",
      faq_q2: "Tôi cần bố trí thời gian nghỉ phục hồi bao lâu?",
      faq_a2: "Liệu trình chăm sóc da không cần nghỉ. Peel có thể bong nhẹ hai đến ba ngày. Laser phân đoạn thường đỏ ba đến năm ngày, nên chúng tôi sắp theo lịch của bạn.",
      faq_q3: "Mang thai vẫn làm liệu trình được không?",
      faq_a3: "Các liệu trình cấp ẩm và phục hồi rào chắn vẫn ổn. Chúng tôi tạm dừng peel, laser và hầu hết hoạt chất cho đến sau mang thai và cho con bú. Vui lòng cho chúng tôi biết trong buổi tư vấn.",
      faq_q4: "Bạn có bán sản phẩm chăm sóc da không?",
      faq_a4: "Không. Chúng tôi tập trung vào liệu trình và tư vấn. Nếu bạn cần mỹ phẩm dùng ở nhà, chúng tôi ghi ra các thành phần nên tìm để bạn tự lựa chọn.",
      svc_cta_h2: 'Chưa biết bắt đầu <em class="text-cherry">từ đâu?</em>',
      svc_cta_lede: "Bắt đầu với buổi tư vấn miễn phí. Chúng tôi soi da, lập hồ sơ và gợi ý chương đầu tiên hợp lý nhất.",

      // — VỀ CHÚNG TÔI
      about_title: "Về chúng tôi — SKIN DIARY",
      about_desc: "Câu chuyện của SKIN DIARY: phòng khám chăm sóc da ở Quận 1, TP. Hồ Chí Minh, đặt nguyên tắc đọc da trước khi trị liệu lên hàng đầu. Gặp đội ngũ và thăm các phòng trị liệu.",
      datel_about: "Về chúng tôi",
      about_h1: 'Một cuốn nhật ký, không phải <em class="text-cherry">phòng khám.</em>',
      about_lede: "Kể về một bác sĩ da liễu và hai chuyên viên trị liệu đã xây cách chăm sóc da yên bình hơn ngay giữa lòng Quận 1.",
      salut: "Gửi bạn đọc,",
      l1: "Tôi mở SKIN DIARY sau mười hai năm làm da liễu bệnh viện, nơi tôi thấy lặp lại cùng một câu chuyện: làn da đẹp bị hư hại bởi quá nhiều sản phẩm và những liệu trình chọn vội.",
      l2: "Nên chúng tôi làm ngược lại. Ít liệu trình hơn, làm chậm rãi. Một hồ sơ bằng văn bản cho mỗi khách hàng, cập nhật sau mỗi buổi, để không phải điều gì cũng phải đoán. Không gian gợi góc đọc sách hơn là phòng khám.",
      l3: "Chúng tôi không bán sản phẩm và không chạy theo xu hướng. Chúng tôi đọc làn da của bạn, nói thật lòng nó cần gì, và ghi lại thành hồ sơ.",
      sign: "Nguyễn Minh Châu",
      sign_role: "Nhà sáng lập kiêm bác sĩ da liễu",
      meth_h2: 'Lần đầu ghé thăm <em class="text-cherry">diễn ra thế nào</em>',
      st1: "Tư vấn",
      st1d: "Ba mươi phút về thói quen, tiền sử và bạn muốn làn da mình có cảm giác thế nào.",
      st2: "Soi da",
      st2d: "Phân tích da qua kính soi và bộ ảnh chuẩn mở đầu hồ sơ da riêng của bạn.",
      st3: "Kế hoạch",
      st3d: "Một kế hoạch bằng văn bản gồm liệu trình, thời điểm và giá rõ ràng trước khi bắt đầu.",
      st4: "Duyệt lại",
      st4d: "Buổi soát lại sau hai tuần để ghi nhận phản ứng của da và điều chỉnh bước kế tiếp.",
      space_h2: 'Các <em class="text-cherry">căn phòng</em>',
      cap1: "Phòng một: hai giường để trị liệu theo cặp",
      cap2: "Phòng hai: tông ánh sáng ban ngày cho liệu trình và peel",
      sp_p1: "Ba phòng riêng trên lầu hai của một tòa nhà thập niên 1960 ở đường Lý Tự Trọng. Ánh sáng dịu, nước lọc cho mỗi lần làm sạch, và không nhạc nếu bạn không muốn.",
      sp_hint: "Chạm vào ảnh để xem lớn hơn.",
      team_h2: 'Những người <em class="text-cherry">đọc làn da</em> của bạn',
      t_n1: "TS. Nguyễn Minh Châu",
      t_r1: "Nhà sáng lập kiêm bác sĩ da liễu",
      t_d1: "Duyệt mọi kế hoạch trị liệu và là người thực hiện toàn bộ liệu trình laser.",
      t_n2: "Trần Thu Hà",
      t_r2: "Trưởng chuyên viên trị liệu",
      t_d2: "Dẫn hai chuyên mục Chăm sóc da và Tái tạo da, đào tạo từng chuyên viên mới.",
      t_n3: "Lê Anh Vy",
      t_r3: "Điều dưỡng trị liệu, phụ trách laser",
      t_d3: "Chuẩn bị da trước buổi laser và theo dõi chăm sóc sau trị liệu.",
      about_cta_h2: 'Ghé <em class="text-cherry">thăm chúng tôi.</em>',
      about_cta_lede: "Trang đầu tiên của bạn mở bằng một buổi tư vấn 30 phút miễn phí tại không gian Quận 1 của chúng tôi."
    }
  };

  function readStored() {
    try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function store(lang) {
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* demo file:// — ignore */ }
  }

  function entriesFor(lang, key) {
    var d = DICT[lang];
    return d ? d[key] : null;
  }

  function applyTo(root, lang) {
    var i, j, el, val, specs, pair, idx, parts, attr;
    var texts = root.querySelectorAll('[data-i18n]');
    for (i = 0; i < texts.length; i++) {
      el = texts[i];
      val = entriesFor(lang, el.getAttribute('data-i18n'));
      if (val == null) continue;
      if (val.indexOf('<') !== -1) { el.innerHTML = val; } else { el.textContent = val; }
    }
    var attrEls = root.querySelectorAll('[data-i18n-attrs]');
    for (j = 0; j < attrEls.length; j++) {
      el = attrEls[j];
      specs = (el.getAttribute('data-i18n-attrs') || '').split(';');
      for (var k = 0; k < specs.length; k++) {
        pair = specs[k];
        if (!pair) continue;
        idx = pair.indexOf(':');
        if (idx < 0) continue;
        attr = pair.slice(0, idx).trim();
        val = entriesFor(lang, pair.slice(idx + 1).trim());
        if (val != null) el.setAttribute(attr, val);
      }
    }
  }

  function refreshToggles(lang) {
    var btns = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < btns.length; i++) {
      var on = btns[i].getAttribute('data-set-lang') === lang;
      btns[i].classList.toggle('is-active', on);
      btns[i].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  function apply(lang) {
    if (!DICT[lang]) lang = 'en';
    document.documentElement.setAttribute('lang', lang);
    applyTo(document, lang);
    refreshToggles(lang);
  }

  function current() {
    var saved = readStored();
    if (saved === 'en' || saved === 'vi') return saved;
    return document.documentElement.getAttribute('lang') === 'vi' ? 'vi' : 'en';
  }

  function init() {
    var lang = current();
    if (lang !== 'en') apply(lang); else refreshToggles('en');
    document.addEventListener('click', function (ev) {
      var t = ev.target;
      if (!t || !t.closest) return;
      var btn = t.closest('[data-set-lang]');
      if (!btn) return;
      var want = btn.getAttribute('data-set-lang');
      if (want && want !== current()) {
        store(want);
        apply(want);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();