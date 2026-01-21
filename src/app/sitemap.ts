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
    // Bahasa Malaysia pages
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
    // English pages
    {
      url: `${baseUrl}/en/best-refinance-banks`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/pros-cons-refinancing`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/refinance-calculation-examples`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/documents-required`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/when-to-refinance`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
