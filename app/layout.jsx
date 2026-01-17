// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-inter",
// });

// export const metadata = {
//   metadataBase: new URL("https://stalorx.com"),
//   title: {
//     default: "Stalorx - Premium Software Development",
//     template: "%s | Stalorx",
//   },
//   description:
//     "Transform your ideas into reality with Stalorx. Expert full-stack development team specializing in web applications, mobile apps, and custom software solutions.",
//   keywords: [
//     "software development",
//     "web development",
//     "full-stack development",
//     "React",
//     "Node.js",
//     "custom software",
//     "Bangladesh",
//     "Stalorx",
//   ],
//   authors: [{ name: "Stalorx Team", url: "https://stalorx.com" }],
//   creator: "Stalorx",
//   publisher: "Stalorx",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://stalorx.com",
//     siteName: "Stalorx",
//     title: "Stalorx - Premium Software Development",
//     description:
//       "Expert full-stack development team building exceptional digital experiences",
//     images: [
//       {
//         url: "/stalorx-logo-white.svg",
//         width: 1200,
//         height: 630,
//         alt: "Stalorx Logo",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Stalorx - Premium Software Development",
//     description:
//       "Expert full-stack development team building exceptional digital experiences",
//     images: ["/stalorx-logo-white.svg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   verification: {
//     // Add later after deploying
//     // google: 'your-google-verification-code',
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={inter.variable}>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://stalorx.com"),
  title: {
    default: "StalorX - Premium Software Development",
    template: "%s | StalorX",
  },
  description:
    "Transform your ideas into reality with StalorX. Expert full-stack development team specializing in web applications, mobile apps, and custom software solutions.",
  keywords: [
    "software development",
    "web development",
    "full-stack development",
    "React",
    "Node.js",
    "custom software",
    "Bangladesh",
    "Stalorx",
  ],
  authors: [{ name: "StalorX Team", url: "https://stalorx.com" }],
  creator: "StalorX",
  publisher: "StalorX",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stalorx.com",
    siteName: "Stalorx",
    title: "StalorX - Premium Software Development",
    description:
      "Expert full-stack development team building exceptional digital experiences",
    images: [
      {
        url: "/stalorx-logo-white.svg", // Example logo for OpenGraph
        width: 1200,
        height: 630,
        alt: "StalorX Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StalorX - Premium Software Development",
    description:
      "Expert full-stack development team building exceptional digital experiences",
    images: ["/stalorx-logo-white.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add later after deploying
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Add the favicon link */}
        <link rel="icon" href="/stalorx-icon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
