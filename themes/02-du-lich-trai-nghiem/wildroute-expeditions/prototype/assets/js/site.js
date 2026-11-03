/* Wildroute Expeditions: sample tour + note data (edit freely) and the modal filling logic. */
var WR_TOURS = {
  'ha-giang': {
    title: 'Ha Giang Loop', region: 'Ha Giang, far north', days: '4 days / 3 nights', difficulty: 'Moderate',
    group: '4 to 8 guests', season: 'Sep to Dec', price: '6,900,000 ₫', img: 'assets/img/tour-ha-giang.jpg',
    alt: 'Ma Pi Leng pass winding above the Nho Que river on the Ha Giang Loop',
    intro: 'Limestone passes, Hmong villages and the Nho Que canyon, ridden with local easy-riders and walked where the road ends.',
    days_plan: [
      ['Day 1', 'Ha Giang city to Quan Ba Heaven Gate, short hike to Lung Khuy cave'],
      ['Day 2', 'Yen Minh pine forest, Lung Cu flag tower, homestay in Dong Van old quarter'],
      ['Day 3', 'Ma Pi Leng pass on foot, longtail boat through the Tu San canyon'],
      ['Day 4', 'Du Gia waterfall swim, return to Ha Giang by 5:30 PM']
    ]
  },
  'ta-nang': {
    title: 'Ta Nang to Phan Dung Trek', region: 'Lam Dong and Binh Thuan', days: '2 days / 1 night', difficulty: 'Challenging',
    group: '6 to 10 guests', season: 'Nov to Apr', price: '2,850,000 ₫', img: 'assets/img/tour-ta-nang.jpg',
    alt: 'Tents pitched on a grassy highland ridge under a blue sky',
    intro: 'Vietnam’s most beautiful grassland ridge: 28 km of rolling hills, pine pockets and a wild camp under clear southern skies.',
    days_plan: [
      ['Day 1', 'Ta Nang village start, 16 km over the grass hills, camp on the ridge at 1,100 m'],
      ['Day 2', 'Sunrise on the ridge, descend 12 km to Phan Dung stream, transfer back to Da Lat']
    ]
  },
  'fansipan': {
    title: 'Fansipan Summit via Tram Ton', region: 'Hoang Lien Son, Lao Cai', days: '3 days / 2 nights', difficulty: 'Challenging',
    group: '4 to 8 guests', season: 'Oct to Apr', price: '4,450,000 ₫', img: 'assets/img/tour-fansipan.jpg',
    alt: 'Sea of clouds below the summit temple of Fansipan',
    intro: 'Stand on the roof of Indochina at 3,143 m. A slow, two-camp ascent so you reach the summit for sunrise above the clouds.',
    days_plan: [
      ['Day 1', 'Tram Ton pass (1,900 m) to Camp 1 at 2,200 m through bamboo forest'],
      ['Day 2', 'Steep ridge to Camp 2 at 2,800 m, afternoon rest and briefing'],
      ['Day 3', '4:00 AM summit push, sunrise at 3,143 m, descend to Sa Pa by evening']
    ]
  },
  'phong-nha': {
    title: 'Hang Tien Cave Expedition', region: 'Phong Nha, Quang Binh', days: '3 days / 2 nights', difficulty: 'Hard',
    group: 'Max 8 guests', season: 'Feb to Aug', price: '7,800,000 ₫', img: 'assets/img/tour-cave.jpg',
    alt: 'An explorer standing beneath the huge jungle-lit entrance of Hang Tien cave',
    intro: 'Jungle trek, river crossings and two nights camping inside one of the largest cave systems in Phong Nha-Ke Bang.',
    days_plan: [
      ['Day 1', 'Safety training in Phong Nha, 9 km jungle trek, camp at the Hang Tien entrance'],
      ['Day 2', 'Explore Hang Tien 1 and 2 with headlamps, swim the underground pools'],
      ['Day 3', 'Trek out along the Rao Thuong stream, back in town by 4:00 PM']
    ]
  }
};

var WR_NOTES = {
  'clouds': {
    title: 'Chasing clouds above Ta Van', meta: 'Journal  |  6 min read', img: 'assets/img/note-ta-van.jpg',
    alt: 'Looking out over the mountains from Ta Van village, Sa Pa',
    body: [
      'We left the homestay at 4:40 AM with headlamps and one thermos of ginger tea. By 5:50 the valley below Ta Van had filled with cloud, and the rice terraces disappeared one by one.',
      'Cloud hunting in Sa Pa is about patience. The best mornings follow a rainy evening with no wind. Our guide Giang checks the sky the night before and only wakes the group when the odds are good.'
    ]
  },
  'tips': {
    title: 'Five things first-time trekkers get wrong', meta: 'Trekking tips  |  4 min read', img: 'assets/img/note-highland.jpg',
    alt: 'Tents in a valley camp at the foot of forested mountains',
    body: [
      'New shoes on day one. Too much water on the back and not enough electrolytes. Starting fast. Skipping the warm layer because it was hot at the trailhead. Walking with your head down.',
      'Break boots in for at least 30 km, carry 1.5 litres plus salts, and walk at a pace where you can still talk. The mountains reward the slow group.'
    ]
  },
  'packing': {
    title: 'The 9 kg pack: what we carry on a 3-day trek', meta: 'Packing guide  |  5 min read', img: 'assets/img/note-gear.jpg',
    alt: 'Hiking backpack, lantern, hat and camping gear laid out on the floor',
    body: [
      'Rain shell, fleece, two quick-dry shirts, one dry set for camp, trekking poles, 35 L pack with rain cover, headlamp with spare batteries, power bank, blister kit and a 1 L bottle.',
      'Tents, mats, sleeping bags, stoves and food are carried by our porter team, so your own pack stays near 9 kg.'
    ]
  }
};

(function () {
  function $(s, r) { return (r || document).querySelector(s); }

  // Expedition modal
  try {
    var dlg = document.getElementById('tour-modal');
    document.querySelectorAll('[data-tour]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var t = WR_TOURS[btn.getAttribute('data-tour')];
        if (!t || !dlg) return;
        dlg.setAttribute('data-current', btn.getAttribute('data-tour'));
        $('[data-t="img"]', dlg).src = t.img;
        $('[data-t="img"]', dlg).alt = t.alt;
        ['title', 'region', 'days', 'difficulty', 'group', 'season', 'price', 'intro'].forEach(function (k) {
          var el = $('[data-t="' + k + '"]', dlg); if (el) el.textContent = t[k];
        });
        var list = $('[data-t="plan"]', dlg);
        list.innerHTML = '';
        t.days_plan.forEach(function (d) {
          var li = document.createElement('li');
          li.className = 'grid grid-cols-[4.5rem_1fr] gap-3 border-t border-ink/10 py-3';
          li.innerHTML = '<span class="text-sm font-bold uppercase tracking-wider text-ochre">' + d[0] + '</span><span class="text-ink/80">' + d[1] + '</span>';
          list.appendChild(li);
        });
      });
    });
    var req = document.getElementById('tour-request');
    if (req) req.addEventListener('click', function () {
      var id = dlg.getAttribute('data-current');
      var sel = document.getElementById('f-expedition');
      if (sel && id) sel.value = id;
      if (window.UI && UI.closeModal) UI.closeModal(dlg); else dlg.close();
    });
  } catch (e) { console.error('[site] #expeditions', e); }

  // Field note modal
  try {
    var nd = document.getElementById('note-modal');
    document.querySelectorAll('[data-note]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var n = WR_NOTES[btn.getAttribute('data-note')];
        if (!n || !nd) return;
        $('[data-n="img"]', nd).src = n.img;
        $('[data-n="img"]', nd).alt = n.alt;
        $('[data-n="title"]', nd).textContent = n.title;
        $('[data-n="meta"]', nd).textContent = n.meta;
        var body = $('[data-n="body"]', nd);
        body.innerHTML = '';
        n.body.forEach(function (p) { var el = document.createElement('p'); el.textContent = p; body.appendChild(el); });
      });
    });
  } catch (e) { console.error('[site] #notes', e); }

  // Adventure tiles filter the expedition list
  try {
    document.querySelectorAll('[data-adventure]').forEach(function (a) {
      a.addEventListener('click', function () {
        var b = document.querySelector('#expeditions [data-filter="' + a.getAttribute('data-adventure') + '"]');
        if (b) b.click();
      });
    });
  } catch (e) { console.error('[site] #adventures', e); }
})();
