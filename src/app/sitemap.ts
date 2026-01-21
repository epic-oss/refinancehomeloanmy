export default function sitemap() {
  const baseUrl = 'https://refinancehomeloanmy.com';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bank-terbaik-refinance-rumah`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kelebihan-keburukan-refinance-rumah`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contoh-kiraan-refinance-rumah`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dokumen-refinance-rumah`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/berapa-tahun-boleh-refinance-rumah`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
