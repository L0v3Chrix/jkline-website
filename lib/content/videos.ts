export interface Video {
  id: string;
  videoId: string;
  title: string;
  featuring?: string;
  views: string;
  viewCount: number;
  category: 'featured' | 'music-video' | 'audio';
  year?: number;
  description?: string;
}

export const videos: Video[] = [
  {
    id: 'always-knew',
    videoId: 'REGQI3DhGjY',
    title: 'Always Knew',
    featuring: 'Einstein',
    views: '72K',
    viewCount: 72000,
    category: 'featured',
    year: 2023,
    description: 'The breakout hit featuring Einstein, capturing the essence of perseverance and self-belief.',
  },
  {
    id: 'come-home',
    videoId: '7cQ3hOFm8Ts',
    title: 'Come Home',
    featuring: 'Cella Black',
    views: '12K',
    viewCount: 12000,
    category: 'music-video',
    year: 2024,
    description: 'A powerful collaboration with Cella Black about finding your way back.',
  },
  {
    id: 'last-time',
    videoId: 'cdYJdgk2pnE',
    title: 'Last Time',
    views: '11K',
    viewCount: 11000,
    category: 'music-video',
    year: 2023,
    description: 'A raw look at breaking cycles and making the choice to change.',
  },
  {
    id: 'runaway',
    videoId: 'e4yKFWiICTI',
    title: 'Runaway',
    views: '5.6K',
    viewCount: 5600,
    category: 'music-video',
    year: 2023,
  },
  {
    id: 'downfall',
    videoId: '5-3Gd-WDvM8',
    title: 'Downfall',
    views: '1.3K',
    viewCount: 1300,
    category: 'music-video',
    year: 2022,
  },
  {
    id: 'feet-above-water',
    videoId: 'LyKzSGFP_nU',
    title: 'Feet Above Water',
    views: '865',
    viewCount: 865,
    category: 'music-video',
    year: 2022,
  },
  {
    id: 'sacrifices',
    videoId: 'YyhK8kW7XGw',
    title: 'Sacrifices',
    views: '747',
    viewCount: 747,
    category: 'music-video',
    year: 2022,
  },
  {
    id: 'chains',
    videoId: '9dYqRaYBu3M',
    title: 'CHAINS',
    views: '397',
    viewCount: 397,
    category: 'audio',
    year: 2022,
    description: 'Audio track from the Lost In Austin album.',
  },
];

// Helper functions
export const featuredVideo = videos.find((v) => v.category === 'featured');
export const musicVideos = videos.filter((v) => v.category === 'music-video');
export const audioVideos = videos.filter((v) => v.category === 'audio');
export const allMusicContent = videos.filter((v) => v.category !== 'featured');

// Get YouTube thumbnail URL
export function getVideoThumbnail(videoId: string, quality: 'default' | 'mq' | 'hq' | 'sd' | 'maxres' = 'maxres'): string {
  const qualityMap = {
    default: 'default',
    mq: 'mqdefault',
    hq: 'hqdefault',
    sd: 'sddefault',
    maxres: 'maxresdefault',
  };
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
}

// Get YouTube embed URL (privacy-enhanced)
export function getEmbedUrl(videoId: string, autoplay = false): string {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    ...(autoplay && { autoplay: '1' }),
  });
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}
