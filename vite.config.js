import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'

const BASE_URL = 'https://jrprogramsofficial.github.io/Web_JR_Programs'

const routes = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/apps/ventabox', changefreq: 'monthly', priority: 0.8 },
  { url: '/apps/tuorden', changefreq: 'monthly', priority: 0.8 },
]

function generateSitemap() {
  const now = new Date().toISOString().split('T')[0]
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${BASE_URL}${r.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  fs.writeFileSync('dist/sitemap.xml', sitemap)
  console.log('✅ sitemap.xml generated')
}

// https://vite.dev/config/
export default defineConfig({
  base: '/Web_JR_Programs/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'generate-sitemap',
      apply: 'build',
      closeBundle: async () => {
        await generateSitemap()
      }
    }
  ],
})