import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { Calendar, Clock, Tag } from 'lucide-react';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background py-12 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link 
            href="/" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 inline-block"
          >
            ← Back to About
          </Link>
          <h1 className="text-6xl lg:text-7xl font-serif text-foreground leading-tight mb-4">
            Blog
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-medium">
            INSIGHTS ON TECHNOLOGY & SCIENCE
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-border pb-12 last:border-b-0">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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

                <h2 className="text-3xl lg:text-4xl font-serif text-foreground leading-tight hover:text-foreground/80 transition-colors duration-300">
                  <Link href={`/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-muted-foreground" />
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link 
                  href={`/${post.slug}`}
                  className="inline-block text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium"
                >
                  Read full article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}