const formatTime = (sec: number) => {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, '0')}`;
};

const ytReadyCallbacks: Array<() => void> = [];

function ensureYouTubeApi(): Promise<void> {
  return new Promise((resolve) => {
    if (window.YT?.Player) {
      resolve();
      return;
    }
    ytReadyCallbacks.push(resolve);
    if (document.querySelector('script[data-yt-iframe-api]')) return;

    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      ytReadyCallbacks.splice(0).forEach((fn) => fn());
    };

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;
    tag.dataset.ytIframeApi = 'true';
    document.head.append(tag);
  });
}

export function initHeroVideos() {
  document.querySelectorAll<HTMLElement>('[data-hero-video]').forEach((root) => {
    if (root.dataset.heroBound === '1') return;
    root.dataset.heroBound = '1';

    const videoId = root.dataset.videoId;
    const clipStart = Number(root.dataset.clipStart ?? 17);
    const clipEnd = Number(root.dataset.clipEnd ?? 28);
    const mount = root.querySelector<HTMLElement>('[data-hero-yt-mount]');
    const scrub = root.querySelector<HTMLInputElement>('[data-hero-scrub]');
    const timeEl = root.querySelector<HTMLElement>('[data-hero-time]');
    if (!videoId || !mount || !scrub || !timeEl) return;

    const clipLen = Math.max(1, clipEnd - clipStart);
    let player: { getCurrentTime: () => number; seekTo: (s: number, a: boolean) => void; playVideo: () => void; destroy?: () => void } | undefined;
    let scrubbing = false;

    const syncUi = (current: number) => {
      const local = Math.min(clipLen, Math.max(0, current - clipStart));
      scrub.value = String(Math.round((local / clipLen) * 1000));
      timeEl.textContent = `${formatTime(local)} / ${formatTime(clipLen)}`;
    };

    void ensureYouTubeApi().then(() => {
      player = new window.YT.Player(mount, {
        videoId,
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          start: clipStart,
          end: clipEnd,
          fs: 0,
          disablekb: 1,
          iv_load_policy: 3,
          cc_load_policy: 0,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (e) => {
            e.target.mute();
            e.target.seekTo(clipStart, true);
            e.target.playVideo();
            syncUi(clipStart);
          },
          onStateChange: (e) => {
            if (e.data === window.YT.PlayerState.ENDED) {
              e.target.seekTo(clipStart, true);
              e.target.playVideo();
            }
          },
        },
      });
    });

    const tick = window.setInterval(() => {
      if (!player || scrubbing || typeof player.getCurrentTime !== 'function') return;
      const t = player.getCurrentTime();
      if (t >= clipEnd - 0.2) {
        player.seekTo(clipStart, true);
        player.playVideo();
      }
      syncUi(t);
    }, 250);

    scrub.addEventListener('pointerdown', () => {
      scrubbing = true;
    });
    scrub.addEventListener('pointerup', () => {
      scrubbing = false;
    });
    scrub.addEventListener('input', () => {
      if (!player || typeof player.seekTo !== 'function') return;
      const ratio = Number(scrub.value) / 1000;
      const target = clipStart + ratio * clipLen;
      player.seekTo(target, true);
      player.playVideo();
      syncUi(target);
    });

    root.addEventListener(
      'astro:before-preparation',
      () => {
        window.clearInterval(tick);
        player?.destroy?.();
      },
      { once: true },
    );
  });
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YT: { Player: new (el: HTMLElement, opts: Record<string, unknown>) => any };
    onYouTubeIframeAPIReady?: () => void;
  }
}
