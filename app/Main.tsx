import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { MapPinIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import SocialIcon from '@/components/social-icons'
import ProfileImage from '@/data/profile.jpg'
import Projects from '@/components/Projects'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardFooter, CardTitle } from '@/components/ui/card'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="flex flex-col space-x-10 md:flex-row lg:flex-row">
        <div className="mr-10">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-zinc-500 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
            Hi, I'm Ramkumar 👋
          </h2>
          <p className="mt-5">
            Full stack developer (React.js & Node.js) with a focus on creating digital experiences
            that are simple, stunning, and responsive. Even though I have been creating web
            applications for over 6 years, I still love it as if it was something new. <br></br>
            <br></br>I am also aspiring to become a web artist, continually pushing the boundaries
            of design and functionality.
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-4 w-4" />
              <span>Chennai, India</span>
            </div>
            <Badge
              variant="secondary"
              className="text-md mt-1 inline-flex items-center space-x-2 rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span>Available for new projects</span>
            </Badge>
          </div>

          <div className="mt-5 flex space-x-4 text-zinc-700">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={5} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
            <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          </div>
        </div>
        <div className="image-border">
          <Image
            src={ProfileImage}
            alt="profile"
            height={500}
            width={600}
            className="hidden rounded-md object-contain sm:block"
          />
        </div>
      </div>

      <section className="mt-14">
        <Projects />
      </section>

      <div className="mt-14">
        <div className="text-center">
          <div className="px-3 py-2">
            <span className="rounded-full bg-gray-200 px-5 py-2 dark:bg-gray-800">
              Technical Blog
            </span>
          </div>
          <p className="px-3 py-2 text-gray-600 dark:text-gray-400">
            Explore my latest insights and technical articles
          </p>
        </div>

        {!posts.length && 'No posts found.'}

        <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, MAX_DISPLAY).map((post, index) => {
            const { slug, date, title, summary, tags, coverImage } = post
            return (
              <Link key={slug} href={`/blog/${slug}`} className="group cursor-pointer">
                <Card key={slug} className="flex h-full flex-col transition-shadow hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={coverImage}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-3">
                    <time className="mb-2 text-sm text-muted-foreground" dateTime={date}>
                      {formatDate(date, siteMetadata.locale)}
                    </time>
                    <CardTitle className="text-lg">{title}</CardTitle>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{summary}</p>
                  </CardHeader>

                  <CardFooter className="mt-auto flex flex-col items-start px-3 pb-3">
                    <div className="flex flex-wrap gap-1">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="px-2 py-1 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
