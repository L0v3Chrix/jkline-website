# J-Kline Website Media Assets

> Last updated: 2026-01-31

## Album/Single Covers

Located in `/public/images/albums/`

| File | Title | Year | Dimensions | Source |
|------|-------|------|------------|--------|
| `ego.jpg` | E.G.O. (Edging God Out) | 2023 | 600x600 | iTunes/Apple Music |
| `chains.jpg` | Chains | 2024 | 600x600 | iTunes/Apple Music |
| `this-is-redemption.jpg` | This Is Redemption | 2023 | 600x600 | iTunes/Apple Music |
| `always-knew.jpg` | Always Knew (feat. Einstein The Mastermind) | 2024 | 600x600 | iTunes/Apple Music |
| `ups-and-downs.jpg` | Ups And Downs (feat. I AM Cricchi) | 2024 | 600x600 | iTunes/Apple Music |
| `lost-in-austin.jpg` | Lost In Austin | 2022 | 600x600 | iTunes/Apple Music |

## YouTube Video Thumbnails

Located in `/public/images/videos/`

| File | Video Title | YouTube ID |
|------|-------------|------------|
| `REGQI3DhGjY.jpg` | Always Knew (Feat. Einstein The Mastermind) | REGQI3DhGjY |
| `7cQ3hOFm8Ts.jpg` | Come Home (Feat. Cella Black) | 7cQ3hOFm8Ts |
| `cdYJdgk2pnE.jpg` | Last Time | cdYJdgk2pnE |
| `e4yKFWiICTI.jpg` | Runaway (Official Video) | e4yKFWiICTI |
| `5-3Gd-WDvM8.jpg` | Downfall (Official Music Video) | 5-3Gd-WDvM8 |
| `LyKzSGFP_nU.jpg` | Feet Above Water Feat. D.D.I. (Official Music Video) | LyKzSGFP_nU |
| `YyhK8kW7XGw.jpg` | Sacrifices Featuring Tylrboi | YyhK8kW7XGw |
| `9dYqRaYBu3M.jpg` | CHAINS (Official Audio) | 9dYqRaYBu3M |

## Usage in Code

```tsx
// Album covers
<Image src="/images/albums/ego.jpg" alt="E.G.O. album cover" />
<Image src="/images/albums/lost-in-austin.jpg" alt="Lost In Austin album cover" />

// Video thumbnails
<Image src="/images/videos/REGQI3DhGjY.jpg" alt="Always Knew music video thumbnail" />
```

## Notes

- Album covers sourced from iTunes CDN at 600x600 resolution
- Video thumbnails sourced from YouTube at maxresdefault quality (1280x720)
  - `cdYJdgk2pnE.jpg` uses hqdefault (480x360) as maxres wasn't available
- All images are JPG format for optimal compatibility

## Additional Folders

- `/public/images/instagram/` - For Instagram content (empty)
- `/public/images/press/` - For press photos (empty)
- `/public/images/singles/` - For individual single artwork (empty)

## External Resources

- **Spotify Artist ID:** 61BHscy2iBylZylAjUBjgA
- **iTunes Artist ID:** 1461270336
- **YouTube Channel:** Search "J-Kline" for official videos
