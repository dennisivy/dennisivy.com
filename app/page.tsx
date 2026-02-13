import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const MuxPlayer = dynamic(() => import('@mux/mux-player-react'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-background py-12 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 lg:col-span-2 max-w-lg">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-serif text-foreground leading-tight">
                DENNIS IVY
              </h1>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-medium">
                Co-hosting Traversy Media
              </p>
            </div>

            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <div className="relative">
                <div className="text-8xl font-serif text-muted-foreground/30 dark:text-muted-foreground/50 leading-none float-left mr-4 -mt-2 -ml-2">
                  H
                </div>
                <p className="text-base lg:text-md leading-relaxed">
                  i, I'm Dennis Ivy, Co-host of the{' '}
                  <span className="text-black dark:text-white font-semibold">
                    Traversy Media
                  </span>
                  {' '}YT channel,{' '}
                  <span className="text-black dark:text-white font-semibold">
                    developer advocate
                  </span>
                  , developer educator/instructor.
                </p>
              </div>

              <p className="text-base lg:text-md leading-relaxed">
                If you're looking to connect, you can find me online:</p>
          
                <br/>
                <ul>
                  <li>On <a href="https://x.com/dennisivy11" target="_blank"> Twitter/X</a></li>
                  <li>On <a href="https://www.linkedin.com/in/dennis-ivanov/" target="_blank">LinkedIn</a></li>
                  <li>Co-hosting the <a href="https://www.youtube.com/@TraversyMedia" target="_blank">@TraversyMedia</a> YouTube channel</li>
                  <li>Posting videos on my personal channel at <a href="https://www.youtube.com/@dennisivy" target="_blank">@dennisivy</a></li>
                  <li>On <a href="https://github.com/dennisivy" target="_blank">GitHub</a></li>
                </ul>
            </div>

            {/* <div>
              <Link href="/blog">
                <Button 
                  variant="outline" 
                  className="border-2 border-border text-foreground px-8 py-3 text-sm tracking-wider uppercase hover:bg-accent hover:border-foreground/20 transition-colors duration-300"
                >
                 Writing
                </Button>
              </Link>
    
            </div> */}
          </div>

    

          {/* Right Column - Image */}
          <div className="relative lg:col-span-1">
            <div className="relative z-10">
              <Image
                src="/images/base/dennis-sulamita.jpg"
                alt="Professional portrait of Dennis Ivy"
                width={400}
                height={600}
                className="w-full h-auto rounded-lg shadow-2xl grayscale"
                priority
              />
            </div>
            
            {/* Decorative manuscript element */}
            <div className="absolute -right-4 top-16 lg:-right-8 lg:top-20 w-32 h-64 opacity-20 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-b from-transparent to-muted rounded-lg p-4">
                <div className="space-y-2">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="h-3 bg-muted-foreground/20 rounded"
                      style={{ 
                        width: `${Math.random() * 40 + 60}%`,
                        opacity: 0.3 + Math.random() * 0.3
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured video - set NEXT_PUBLIC_MUX_PLAYBACK_ID in .env.local to override */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="overflow-hidden rounded-2xl border-2 border-border bg-border/20 shadow-xl ring-1 ring-foreground/5">
          <MuxPlayer
            playbackId={process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID ?? 'xk000001LU01Xse1V7nKNjBVYf6FpygKfVXGj8QLdu00oJag'}
            poster={`https://image.mux.com/${process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID ?? 'xk000001LU01Xse1V7nKNjBVYf6FpygKfVXGj8QLdu00oJag'}/animated.gif?width=640&fps=10`}
            metadata={{
              video_title: 'Featured video',
            }}
            streamType="on-demand"
            className="w-full"
            style={{ aspectRatio: '16/9' }}
          />
        </div>
      </div>
      
            {/* Photo Grid Section */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="columns-2 md:columns-3 lg:columns-3 gap-4">
          <div className="break-inside-avoid mb-4">
            <Image
              src="/images/base/dennis-ivy-paul-copplestone-supabase-vercel-ship-2024.jpeg"
              alt="Dennis Ivy with Paul Copplestone CEO of Supabase at Vercel Ship 2024"
              width={400}
              height={300}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 rounded-lg"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <Image
              src="/images/base/dennis-ivy-danny-thompson.png"
              alt="Dennis Ivy with Danny Thompson"
              width={400}
              height={300}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 rounded-lg"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <Image
              src="/images/base/dennis-ivy-chris-kapehe-sev.jpeg"
              alt="Dennis with Chris, Kapehe, and Sev"
              width={400}
              height={267}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 rounded-lg"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <Image
              src="/images/base/dennis-ivy-speaking.png"
              alt="Dennis Ivy Developer Advocate speaking at Vapi headquarters about Voice AI"
              width={300}
              height={300}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 rounded-lg"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <Image
              src="/images/base/dennis-ivy-brad-sulamita.jpeg"
              alt="Dennis Ivy with Brad Traversy from Traversy Media and Sulamita"
              width={300}
              height={400}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 rounded-lg"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <Image
              src="/images/base/dennis-ivy-eldad-christy.jpeg"
              alt="Dennis with Eldad and Christy"
              width={300}
              height={300}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 rounded-lg"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <Image
              src="/images/base/dennis-ivy-andrea-griffiths-github-appwrite-commit-your-code-conference.jpeg"
              alt="Dennis with Andrea Griffiths at Commit Your Code conference"
              width={400}
              height={300}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 rounded-lg"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <Image
              src="/images/base/dennis-ivy-kedasha-kerr-github-universe.jpeg"
              alt="Dennis with Kedasha Kerr at Github Universe"
              width={400}
              height={300}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 rounded-lg"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <Image
              src="/images/base/dennis-ivy-francesco.png"
              alt="Dennis Ivy with Francesco"
              width={300}
              height={300}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}