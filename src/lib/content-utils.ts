// lib/content-utils.ts
// Utility functions for dynamic content processing

import { SITE_CONFIG, getLowestRate } from "./constants";

// Replace dynamic variables in content
export const processContent = (content: string): string => {
  const { currentYear, lastUpdated, lastUpdatedEn } = SITE_CONFIG;
  const lowestRateBank = getLowestRate();

  return content
    .replace(/{year}/g, String(currentYear))
    .replace(/{currentYear}/g, String(currentYear))
    .replace(/{lastUpdated}/g, lastUpdated)
    .replace(/{lastUpdatedEn}/g, lastUpdatedEn)
    .replace(/{lowestRate}/g, lowestRateBank.rateFrom)
    .replace(/{lowestRateBank}/g, lowestRateBank.name);
};

// Generate dynamic meta title
export const generateTitle = (title: string): string => {
  return processContent(title);
};

// Generate dynamic meta description
export const generateDescription = (description: string): string => {
  return processContent(description);
};

// Format date for display
export const formatDate = (date: Date, lang: "ms" | "en" = "ms"): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const locale = lang === "ms" ? "ms-MY" : "en-MY";
  return date.toLocaleDateString(locale, options);
};

// Get month name in Malay
export const getMonthNameMS = (month: number): string => {
  const months = [
    "Januari",
    "Februari",
    "Mac",
    "April",
    "Mei",
    "Jun",
    "Julai",
    "Ogos",
    "September",
    "Oktober",
    "November",
    "Disember",
  ];
  return months[month];
};

// Generate schema.org structured data for FAQ
export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

// Generate schema.org structured data for Article
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Organization",
      name: article.author || SITE_CONFIG.siteName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.siteName,
      url: SITE_CONFIG.siteUrl,
    },
  };
};
