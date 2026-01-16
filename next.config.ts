import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
  remotePatterns:[new URL("https://m.media-amazon.com/**")]
 },
};




export default nextConfig;
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "m.media-amazon.com",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;