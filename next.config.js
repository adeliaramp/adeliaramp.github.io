/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the whole site builds to plain HTML/CSS/JS in /out,
  // which is what GitHub Pages serves. No server runtime needed.
  output: 'export',

  // Site lives at the root domain (adeliaramp.github.io), not a subpath.
  basePath: '',

  // next/image optimization needs a server, which static export does not have.
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
