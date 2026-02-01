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
    coverImage: '/images/albums/lost-in-austin.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA',
    description: 'J-Kline\'s debut album, released through Sony-Orchard. A raw and honest account of his journey through addiction, loss, and ultimately redemption in Austin, Texas.',
  },
  {
    slug: 'ego',
    title: 'E.G.O.',
    year: 2023,
    type: 'single',
    coverImage: '/images/albums/ego.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA',
  },
  {
    slug: 'this-is-redemption',
    title: 'This Is Redemption',
    year: 2023,
    type: 'single',
    coverImage: '/images/albums/this-is-redemption.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA',
  },
  {
    slug: 'always-knew',
    title: 'Always Knew',
    year: 2023,
    type: 'single',
    coverImage: '/images/albums/always-knew.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA',
  },
  {
    slug: 'chains',
    title: 'Chains',
    year: 2023,
    type: 'single',
    coverImage: '/images/albums/chains.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA',
  },
  {
    slug: 'ups-and-downs',
    title: 'Ups And Downs',
    year: 2024,
    type: 'single',
    coverImage: '/images/albums/ups-and-downs.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA',
  },
];

export const featuredAlbum = discography.find(album => album.type === 'album');
export const singles = discography.filter(album => album.type === 'single');
