import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { MapPinIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import SocialIcon from '@/components/social-icons'
import ProfileImage from '@/data/profile.jpg'
import Projects from '@/components/Projects'

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
            <div className="ml-1 flex items-center space-x-3">
              <div className="h-2 w-2 animate-ping rounded-full bg-green-600"></div>
              <span>Available for new projects</span>
            </div>
          </div>

          <div className="mt-5 flex space-x-4 text-zinc-700">
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
            <span className="rounded-full bg-gray-200 px-5 py-2 dark:bg-gray-800">Technical Blog</span>
          </div>
          <p className="px-3 py-2"> {siteMetadata.description}</p>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-7">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-zinc-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-semibold leading-8 tracking-tight">
                            <Link href={`/blog/${slug}`} className="dark:text-gray-100">
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none dark:text-zinc-300">{summary}</div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:text-zinc-300 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
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
