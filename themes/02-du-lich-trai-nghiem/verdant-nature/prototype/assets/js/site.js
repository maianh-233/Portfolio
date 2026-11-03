/* VERDANT: page specific bits only (light motes + optional ambient wind sound). */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var small = window.matchMedia('(max-width: 767px)').matches;

  // Floating pollen / light motes, sparse and slow
  function motes() {
    if (reduce) return;
    document.querySelectorAll('[data-particles]').forEach(function (host) {
      var n = parseInt(host.getAttribute('data-particles'), 10) || 12;
      if (small) n = Math.round(n / 2);
      for (var i = 0; i < n; i++) {
        var s = document.createElement('span');
        var size = 1.5 + Math.random() * 2.5;
        s.className = 'mote';
        s.style.width = s.style.height = size.toFixed(1) + 'px';
        s.style.left = (Math.random() * 100).toFixed(2) + '%';
        s.style.top = (35 + Math.random() * 60).toFixed(2) + '%';
        s.style.setProperty('--t', (10 + Math.random() * 12).toFixed(1) + 's');
        s.style.setProperty('--delay', (-Math.random() * 20).toFixed(1) + 's');
        s.style.setProperty('--dx', ((Math.random() - 0.5) * 120).toFixed(0) + 'px');
        s.style.setProperty('--o', (0.35 + Math.random() * 0.5).toFixed(2));
        host.appendChild(s);
      }
    });
  }

  // Optional ambient sound: soft wind made from filtered brown noise (no audio files, off by default)
  var ctx = null, master = null, on = false;
  function build() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    var len = ctx.sampleRate * 4, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0), last = 0;
    for (var i = 0; i < len; i++) { var w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.2; }
    var src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
    var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 520;
    var swell = ctx.createGain(); swell.gain.value = 0.7;
    var lfo = ctx.createOscillator(); lfo.frequency.value = 0.07;
    var lfoAmt = ctx.createGain(); lfoAmt.gain.value = 0.3;
    lfo.connect(lfoAmt); lfoAmt.connect(swell.gain);
    master = ctx.createGain(); master.gain.value = 0;
    src.connect(lp); lp.connect(swell); swell.connect(master); master.connect(ctx.destination);
    src.start(); lfo.start();
    return true;
  }
  function setSound(next) {
    if (!ctx && !build()) return;
    on = next;
    if (ctx.state === 'suspended') ctx.resume();
    var t = ctx.currentTime;
    master.gain.cancelScheduledValues(t);
    master.gain.setValueAtTime(master.gain.value, t);
    master.gain.linearRampToValueAtTime(on ? 0.09 : 0, t + 1.6);
    document.querySelectorAll('[data-sound]').forEach(function (b) {
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      var l = b.querySelector('[data-sound-label]');
      if (l) l.textContent = on ? 'Sound on' : 'Sound off';
      b.querySelectorAll('[data-sound-wave]').forEach(function (p) { p.style.opacity = on ? '1' : '.3'; });
    });
  }
  function sound() {
    document.querySelectorAll('[data-sound]').forEach(function (b) {
      b.querySelectorAll('[data-sound-wave]').forEach(function (p) { p.style.opacity = '.3'; });
      b.addEventListener('click', function () { setSound(!on); });
    });
  }

  function init() { motes(); sound(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
