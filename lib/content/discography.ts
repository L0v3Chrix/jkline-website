export interface Album {
  slug: string;
  title: string;
  year: number;
  type: 'album' | 'single';
  coverImage?: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  appleMusicUrl?: string;
  amazonMusicUrl?: string;
  tracks?: string[];
  description?: string;
}

export const discography: Album[] = [
  {
    slug: 'lost-in-austin',
    title: 'Lost In Austin',
    year: 2021,
    type: 'album',
    coverImage: '/images/albums/lost-in-austin.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA',
    appleMusicUrl: 'https://music.apple.com/us/album/lost-in-austin/1558424765',
    amazonMusicUrl: 'https://music.amazon.com/albums/B08YYQJRQ6',
    description: 'J-Kline\'s debut album, released through Sony-Orchard. A raw and honest account of his journey through addiction, loss, and ultimately redemption in Austin, Texas.',
  },
  {
    slug: 'ego',
    title: 'E.G.O.',
    year: 2026,
    type: 'single',
    coverImage: '/images/albums/ego.jpg',
    spotifyUrl: 'https://open.spotify.com/track/4MKX3AcLgc1t4OdUMTEql0',
    appleMusicUrl: 'https://music.apple.com/us/album/e-g-o-edging-god-out-single/1853303282',
    amazonMusicUrl: 'https://music.amazon.com/albums/B0G1VM2G5N',
    description: 'When we put ourselves before the Source, we edge God out. A raw confession and mirror held up to the ego.',
  },
  {
    slug: 'this-is-redemption',
    title: 'This Is Redemption',
    year: 2025,
    type: 'single',
    coverImage: '/images/albums/this-is-redemption.jpg',
    spotifyUrl: 'https://open.spotify.com/track/04DPS8H6IvK6BVIHs4QJt0',
    appleMusicUrl: 'https://music.apple.com/us/artist/j-kline/1461270336',
    amazonMusicUrl: 'https://music.amazon.com/albums/B0FHCTC9JK',
    description: 'The anthem of recovery and new beginnings.',
  },
  {
    slug: 'always-knew',
    title: 'Always Knew',
    year: 2025,
    type: 'single',
    coverImage: '/images/albums/always-knew.jpg',
    spotifyUrl: 'https://open.spotify.com/track/0l9Vi8i2sSYQAr9XrwAnG4',
    appleMusicUrl: 'https://music.apple.com/us/artist/j-kline/1461270336',
    amazonMusicUrl: 'https://music.amazon.com/artists/B07R76F4PZ/j-kline',
    description: 'Featuring Einstein the Mastermind. A powerful collaboration on faith and purpose.',
  },
  {
    slug: 'chains',
    title: 'Chains',
    year: 2024,
    type: 'single',
    coverImage: '/images/albums/chains.jpg',
    spotifyUrl: 'https://open.spotify.com/track/5aGgRGQ51y8aLRcm4VLWmg',
    appleMusicUrl: 'https://music.apple.com/us/artist/j-kline/1461270336',
    amazonMusicUrl: 'https://music.amazon.com/albums/B0D81G4SGN',
    description: 'Breaking free from the chains that bind us.',
  },
  {
    slug: 'ups-and-downs',
    title: 'Ups And Downs',
    year: 2024,
    type: 'single',
    coverImage: '/images/albums/ups-and-downs.jpg',
    spotifyUrl: 'https://open.spotify.com/track/6ntfiTJ1h0dD4ZhE8ntdav',
    appleMusicUrl: 'https://music.apple.com/us/artist/j-kline/1461270336',
    amazonMusicUrl: 'https://music.amazon.com/artists/B07R76F4PZ/j-kline',
    description: 'Featuring I AM Cricchi. Navigating the highs and lows of life in recovery.',
  },
];

export const featuredAlbum = discography.find(album => album.type === 'album');
export const singles = discography.filter(album => album.type === 'single');
