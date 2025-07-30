import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background py-12 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-serif text-foreground leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xl text-foreground/80 leading-relaxed italic border-l-4 border-border pl-6">
            {post.excerpt}
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg prose-gray max-w-none dark:prose-invert">
          <div className="space-y-6 text-foreground/90 leading-relaxed prose-headings:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-blockquote:text-foreground/80 prose-blockquote:border-border prose-pre:bg-gray-900 prose-pre:text-gray-100 dark:prose-pre:bg-gray-800">
            <MDXRemote 
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [],
                  rehypePlugins: [rehypeHighlight],
                }
              }}
            />
          </div>
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            <Link 
              href="/blog"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              ← Back to all articles
            </Link>
            <div className="text-sm text-muted-foreground">
              Published by {post.author}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 