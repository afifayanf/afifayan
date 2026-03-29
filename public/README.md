# Assets Directory

This folder contains all the public assets for the Afifayan portfolio website.

## Required Files

### Images (`/public/img/`)
- **profile.gif** - Your anime-style profile image that will appear in the hero section with the large red glowing circle behind it

### Songs (`/public/song/`)
- **song1.mp4a** (or .mp3) - Background music that auto-plays at 40% volume when the site loads

## How to Use

1. Place your `profile.gif` file in `/public/img/profile.gif`
2. Place your background music file in `/public/song/song1.mp4a` (or rename to .mp3 if needed)
3. The application will automatically load these assets

## Current Status

The application is currently using fallback placeholder images from Unsplash for the profile picture. Once you upload your actual `profile.gif`, it will replace the placeholder automatically.

The music player is ready to play your song file. If autoplay is blocked by the browser, users can click the floating music button in the bottom-right corner to start playback.

## Notes

- Supported image formats: GIF, PNG, JPG, WEBP
- Supported audio formats: MP3, MP4A, OGG, WAV
- Make sure your files don't exceed 10MB for optimal loading performance
