const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [
            // Dynamic import for ES module compatibility
            async () => {
                const rehypeHighlight = await import("rehype-highlight");
                return rehypeHighlight.default;
            },
        ],
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: { unoptimized: true },
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

module.exports = withMDX(nextConfig);
