export interface PressFeature {
  source: string;
  title: string;
  date: string;
  url: string;
  type: 'interview' | 'article' | 'podcast' | 'video';
  excerpt?: string;
  featured?: boolean;
}

export const pressFeatures: PressFeature[] = [
  {
    source: 'I Am Passion',
    title: 'Fentanyl Addiction & Homelessness to Hip-Hop & Recovery',
    date: 'March 2025',
    url: 'https://www.youtube.com/watch?v=cdQO6op7QZc',
    type: 'video',
    excerpt: 'An in-depth conversation about J-Kline\'s journey from the depths of fentanyl addiction and homelessness to becoming a voice of hope through hip-hop.',
    featured: true
  },
  {
    source: 'ShoutoutHTX',
    title: 'Meet J-Kline: Hip-Hop Artist, motivational speaker, and recovery advocate',
    date: 'January 2024',
    url: 'https://shoutouthtx.com/meet-j-kline-hip-hop-artist-motivational-speaker-and-recovery-advocate/',
    type: 'interview',
    excerpt: 'J-Kline shares his story of resilience and how he turned his struggles into a platform for helping others.',
    featured: true
  },
  {
    source: 'Voyage Austin',
    title: 'Conversations with J-Kline',
    date: 'April 2022',
    url: 'https://voyageaustin.com/interview/conversations-with-j-kline-artist-stage-name-jacob-kline/',
    type: 'interview',
    excerpt: 'J-Kline opens up about his mission to be a voice of hope, courage, and strength for those facing their own battles.',
    featured: true
  }
];

export const featuredPress = pressFeatures.filter(p => p.featured);

export const pressKitInfo = {
  available: true,
  includes: [
    'High-resolution press photos',
    'Artist biography (short & long form)',
    'Discography information',
    'Interview highlights & quotes',
    'Technical rider (for performances)'
  ],
  requestEmail: 'Jklinemusic512269@gmail.com'
};
