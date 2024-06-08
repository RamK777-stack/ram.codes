import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { MapPinIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import SocialIcon from '@/components/social-icons'
import ProfileImage from '@/data/profile.jpg'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row space-x-10">
        <div className="mr-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-9 tracking-tight text-zinc-500 dark:text-gray-100 sm:leading-10 md:text-6xl md:leading-14">
            Hi, I'm Ramkumar 👋
          </h2>
          <p className="mt-5">
            Full stack developer (React.js & Node.js) with a focus on creating digital experiences that are simple,
            stunning, and responsive. Even though I have been creating web applications
            for over 6 years, I still love it as if it was something new. <br></br><br></br>I am also aspiring to become a web artist, continually pushing the boundaries of design and functionality.
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
          <Image src={ProfileImage} alt="profile" height={500} width={600} className="rounded-md object-contain hidden sm:block" />
        </div>
      </div>

      <div className="mt-14 flex h-auto flex-col items-center">
        <div className="">
          <div className="px-3 py-2">
            <span className="rounded-full bg-gray-200 dark:bg-gray-800 px-5 py-2">Work</span>
          </div>
        </div>
        <p className="px-3 py-2">Some of the noteworthy projects I have built:</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className='flex flex-col gap-8'>
            <div>
              <img
                src={'/static/images/project-1.jpg'}
                className="h-auto w-100 object-cover rounded "
                alt="project 1"
              />
              <h3 className="text-lg font-semibold">Apple</h3>
              <h3 className="text-lg text-zinc-500 leading-4">Notes</h3>
            </div>
            <div>
              <img
                src={'/static/images/project-2.jpg'}
                className="h-auto w-100 object-cover rounded "
                alt="project 1"
              />
              <h3 className="text-lg font-semibold">Apple</h3>
              <h3 className="text-lg text-zinc-500 leading-4">Notes</h3>
            </div>
            <div>
              <img
                src={'/static/images/project-3.jpg'}
                className="h-auto w-100 object-cover rounded "
                alt="project 1"
              />
              <h3 className="text-lg font-semibold">Apple</h3>
              <h3 className="text-lg text-zinc-500 leading-4">Notes</h3>
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            <div>
              <img
                src={'/static/images/project-1.jpg'}
                className="h-auto w-100 object-cover rounded "
                alt="project 1"
              />
              <h3 className="text-lg font-semibold">Apple</h3>
              <h3 className="text-lg text-zinc-500 leading-4">Notes</h3>
            </div>
            <div>
              <img
                src={'/static/images/project-4.jpg'}
                className="h-auto w-100 object-cover rounded "
                alt="project 1"
              />
              <h3 className="text-lg font-semibold">Apple</h3>
              <h3 className="text-lg text-zinc-500 leading-4">Notes</h3>
            </div>
            <div>
              <img
                src={'/static/images/project-5.jpg'}
                className="h-auto w-100 object-cover rounded "
                alt="project 1"
              />
              <h3 className="text-lg font-semibold">Apple</h3>
              <h3 className="text-lg text-zinc-500 leading-4">Notes</h3>
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            <div>
              <img
                src={'/static/images/project-6.jpg'}
                className="h-auto w-100 object-cover rounded "
                alt="project 1"
              />
              <h3 className="text-lg font-semibold">Apple</h3>
              <h3 className="text-lg text-zinc-500 leading-4">Notes</h3>
            </div>
            <div>
              <img
                src={'/static/images/project-3.jpg'}
                className="h-auto w-100 object-cover rounded "
                alt="project 1"
              />
              <h3 className="text-lg font-semibold">Apple</h3>
              <h3 className="text-lg text-zinc-500 leading-4">Notes</h3>
            </div>
            <div>
              <img
                src={'/static/images/project-5.jpg'}
                className="h-auto w-100 object-cover rounded "
                alt="project 1"
              />
              <h3 className="text-lg font-semibold">Apple</h3>
              <h3 className="text-lg text-zinc-500 leading-4">Notes</h3>
            </div>
          </div>
        </div>

        {/* <div className="mt-12 flex flex-col gap-14">
            <div className="flex space-x-10 rounded-lg bg-white shadow-lg">
              <img
                src={'/static/images/project-1.jpg'}
                className="h-100 w-1/2 rounded-bl-xl rounded-tl-xl object-cover"
                alt="project 1"
              />

              <div className="flex flex-col justify-center gap-5 px-3 text-left">
                <h3 className="text-xl font-bold">Fiskil</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac
                  tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className=" rounded-full bg-gray-200 px-4 py-1 text-sm">React</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">NodeJS</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">MongoDB</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">ExpressJS</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">TailwindCSS</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">ReactQuery</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">NextJS</span>
                </div>
                <ArrowTopRightOnSquareIcon className="mx-2 h-5 w-5 text-primary-500" />
              </div>
            </div>

            <div className="flex space-x-10 rounded-lg bg-white shadow-lg">
              <img
                src={'/static/images/project-2.jpg'}
                className="h-80 w-1/2 rounded-bl-xl rounded-tl-xl object-cover"
                alt="project 1"
              />

              <div className="flex flex-col justify-center gap-5 px-3 text-left">
                <h3 className="text-xl font-bold">Fiskil</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac
                  tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className=" rounded-full bg-gray-200 px-4 py-1 text-sm">React</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">NodeJS</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">MongoDB</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">ExpressJS</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">TailwindCSS</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">ReactQuery</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">NextJS</span>
                </div>
                <ArrowTopRightOnSquareIcon className="mx-2 h-5 w-5 text-primary-500" />
              </div>
            </div>

            <div className="flex space-x-10 rounded-lg bg-white shadow-lg">
              <img
                src={'/static/images/project-3.jpg'}
                className="h-100 w-1/2 rounded-bl-xl rounded-tl-xl object-cover"
                alt="project 1"
              />

              <div className="flex flex-col justify-center gap-5 px-3 text-left">
                <h3 className="text-xl font-bold">Fiskil</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac
                  tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className=" rounded-full bg-gray-200 px-4 py-1 text-sm">React</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">NodeJS</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">MongoDB</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">ExpressJS</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">TailwindCSS</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">ReactQuery</span>
                  <span className="rounded-full bg-gray-200 px-4 py-1 text-sm">NextJS</span>
                </div>
                <ArrowTopRightOnSquareIcon className="mx-2 h-5 w-5 text-primary-500" />
              </div>
            </div>
          </div> */}
      </div>

      <div className="mt-14">
        <div className="text-center">
          <div className="px-3 py-2">
            <span className="rounded-full bg-gray-200 dark:bg-gray-800 px-5 py-2">Blog</span>
          </div>
          <p className="px-3 py-2"> {siteMetadata.description}</p>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-10">
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
                            <Link
                              href={`/blog/${slug}`}
                              className="dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none dark:text-zinc-300">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 dark:text-zinc-300 hover:text-primary-600 dark:hover:text-primary-400"
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
