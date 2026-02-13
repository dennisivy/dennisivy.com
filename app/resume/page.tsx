import { getResume } from '@/lib/resume';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';

export default function ResumePage() {
  const resume = getResume();

  if (!resume) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background py-12 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            ← Back to About
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-serif text-foreground leading-tight">
            {resume.title}
          </h1>
        </header>

        <article className="prose prose-lg prose-gray max-w-none dark:prose-invert">
          <div className="space-y-6 text-foreground/90 leading-relaxed prose-headings:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-blockquote:text-foreground/80 prose-blockquote:border-border prose-pre:bg-gray-900 prose-pre:text-gray-100 dark:prose-pre:bg-gray-800">
            <MDXRemote
              source={resume.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [],
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </div>
        </article>

        <footer className="mt-16 pt-8 border-t border-border">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            ← Back to About
          </Link>
        </footer>
      </div>
    </div>
  );
}
