export interface Album {
  slug: string;
  title: string;
  year: number;
  type: 'album' | 'single';
  coverImage?: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  appleMusicUrl?: string;
  tracks?: string[];
  description?: string;
}

export const discography: Album[] = [
  {
    slug: 'lost-in-austin',
    title: 'Lost In Austin',
    year: 2022,
    type: 'album',
    coverImage: '/albums/lost-in-austin.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA',
    description: 'J-Kline\'s debut album, released through Sony-Orchard. A raw and honest account of his journey through addiction, loss, and ultimately redemption in Austin, Texas.',
  },
  {
    slug: 'ego',
    title: 'E.G.O.',
    year: 2023,
    type: 'single',
    coverImage: '/albums/ego.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA',
  },
  {
    slug: 'this-is-redemption',
    title: 'This Is Redemption',
    year: 2023,
    type: 'single',
    coverImage: '/albums/this-is-redemption.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA',
  },
  {
    slug: 'last-time',
    title: 'Last Time',
    year: 2023,
    type: 'single',
    coverImage: '/albums/last-time.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA',
  },
  {
    slug: 'blessings',
    title: 'Blessings',
    year: 2023,
    type: 'single',
    coverImage: '/albums/blessings.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA',
  },
  {
    slug: 'ups-and-downs',
    title: 'Ups And Downs',
    year: 2024,
    type: 'single',
    coverImage: '/albums/ups-and-downs.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA',
  },
  {
    slug: 'come-home',
    title: 'Come Home',
    year: 2024,
    type: 'single',
    coverImage: '/albums/come-home.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA',
  },
];

export const featuredAlbum = discography.find(album => album.type === 'album');
export const singles = discography.filter(album => album.type === 'single');
