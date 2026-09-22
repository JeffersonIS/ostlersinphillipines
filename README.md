# Ostlers in the Philippines

This React and Vite blog is published through GitHub Pages.

## Publishing a post

1. Open [Pages CMS](https://app.pagescms.org/) and sign in with a GitHub account that has write access to this repository.
2. Select **Posts**, then create a post or open one to edit it. Saving commits the change to `main`.
3. Use the image tool in the post editor to upload and insert photos. Images are stored in `src/posts/images/` and their Markdown links are added automatically.
4. To add a video, paste an unlisted YouTube URL where it should appear in the post. Standard `youtube.com`, `youtu.be`, and YouTube Shorts URLs display as embedded players on the site.
5. The deploy workflow builds and publishes the site after each save. Allow a few minutes for the change to appear.

Videos are hosted by unlisted YouTube, not stored in this repository. Existing local MP4/WebM videos remain supported, but new videos should use YouTube.

## Local development

```sh
npm ci
npm run dev
```

Run `npm run build` to check the production build locally.
