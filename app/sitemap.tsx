import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mvspro.ru',
      lastModified: new Date(),
    },
  ]
}