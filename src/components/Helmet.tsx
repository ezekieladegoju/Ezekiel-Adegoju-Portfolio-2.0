import React from "react";

/**
 * Properties expected by the Helmet component.
 */
interface HelmetProps {
  /** The primary page title for the browser tab and search results */
  title?: string;
  /** A concise snippet detailing the page contents for search engine crawlers */
  description?: string;
  /** An array of search index keywords relevant to the page */
  keywords?: string[];
  /** Open Graph title specifically for Facebook, LinkedIn, etc. Defaults to title if omitted */
  ogTitle?: string;
  /** Open Graph description specifically for social rich media cards. Defaults to description if omitted */
  ogDescription?: string;
  /** Direct URL to the primary preview banner image displayed on social platforms */
  ogImage?: string;
  /** Open Graph entity type, e.g., "website" or "profile" */
  ogType?: string;
  /** The canonical absolute URL of the current page */
  ogUrl?: string;
  /** Twitter Card presentation format, typically "summary_large_image" */
  twitterCard?: string;
  /** Canonical link pointing to the authoritative URL of the page */
  canonical?: string;
  /** Optional nested children tags to hoist to the document head */
  children?: React.ReactNode;
}

/**
 * Helmet Component (React 19 Native)
 * Manages search engine optimization and social graph meta tags.
 * Leverages React 19's native document metadata hoisting mechanism to automatically 
 * elevate <title>, <meta>, and <link> tags to the HTML <head> seamlessly.
 */
export default function Helmet({
  title = "Ezekiel Adegoju | Full-Stack Software Engineer Portfolio",
  description = "Explore the professional portfolio of Ezekiel Adegoju, a Full-Stack Software Engineer based in Abuja, Nigeria, specializing in high-performance web applications, React.js, and interactive digital experiences.",
  keywords = ["Ezekiel Adegoju", "Software Engineer", "Full Stack Developer", "React Developer", "Abuja Nigeria", "Web Development", "TypeScript", "Next.js"],
  ogTitle,
  ogDescription,
  ogImage = "https://res.cloudinary.com/m8xlnr2j/image/upload/v1783707281/download_mnn4ww.png",
  ogType = "website",
  ogUrl = "https://ezekieladegoju.com",
  twitterCard = "summary_large_image",
  canonical = "https://ezekieladegoju.com",
  children
}: HelmetProps) {
  const displayTitle = title;
  const displayDescription = description;
  const displayOgTitle = ogTitle || title;
  const displayOgDescription = ogDescription || description;

  return (
    <>
      {/* Native Browser Title */}
      <title>{displayTitle}</title>

      {/* SEO Meta Tags */}
      <meta name="description" content={displayDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="author" content="Ezekiel Adegoju" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Protocol (Facebook, LinkedIn, Discord, etc.) */}
      <meta property="og:title" content={displayOgTitle} />
      <meta property="og:description" content={displayOgDescription} />
      <meta property="og:type" content={ogType} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Ezekiel Adegoju Portfolio" />

      {/* Twitter Cards Metadata */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={displayOgTitle} />
      <meta name="twitter:description" content={displayOgDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Canonical Link */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Children elements (e.g. extra styles or scripts) */}
      {children}
    </>
  );
}
