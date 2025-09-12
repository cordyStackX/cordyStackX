import { NextResponse } from 'next/server';
import setting from '@/app/config/conf/setting.json';

export async function GET() {
  // List your URLs here, or generate dynamically from data
  const urls = [
    setting.domain__links
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url}</loc>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'X-Robots-Tag': 'index, follow'
    },
  });
}