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
      <div className='flex space-x-10'>
        <div className='mr-10'>
          <h2 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
            Hi, I'm Ramkumar 👋
          </h2>
          <p className='mt-5'>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 6 years, I still love it as if it was something new.</p>
          <div className="mt-8">
            <div className="flex space-x-2 items-center">
              <MapPinIcon className="h-4 w-4" />
              <span>Chennai, India</span>
            </div>
            <div className="flex space-x-3 items-center ml-1">
              <div className="bg-green-600 h-2 w-2 rounded-full animate-ping"></div>
              <span>Available for new projects</span>
            </div>
          </div>

          <div className='mt-5 flex space-x-4'>
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={5} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
            <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          </div>
        </div>
        <div className='image-border'>
          <Image src={ProfileImage} alt='profile' height={500} width={600} className='rounded-md' />
        </div>
      </div>

      <div className='mt-16 h-auto flex flex-col items-center'>
        <div className='text-center'>
          <div className='px-3 py-2'><span className='bg-gray-200 px-5 py-2 rounded-full'>Work</span></div>
          <p className='px-3 py-2'>Some of the noteworthy projects I have built:</p>

          <div className='flex flex-col gap-14 mt-12'>
            <div className='flex space-x-10 bg-white shadow-lg rounded-lg'>
              <img src={'/static/images/project-1.jpg'} className='w-1/2 h-100 object-cover rounded-tl-xl rounded-bl-xl' alt='project 1' />

              <div className='flex flex-col justify-center text-left gap-5 px-3'>
                <h3 className='text-xl font-bold'>Fiskil</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                <div className='flex gap-2 flex-wrap'>
                  <span className=' text-sm bg-gray-200 px-4 py-1 rounded-full'>React</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>NodeJS</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>MongoDB</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>ExpressJS</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>TailwindCSS</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>ReactQuery</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>NextJS</span>
                </div>
                <ArrowTopRightOnSquareIcon className='h-5 w-5 mx-2 text-primary-500' />
              </div>
            </div>

            <div className='flex space-x-10 bg-white shadow-lg rounded-lg'>
              <img src={'/static/images/project-2.jpg'} className='w-1/2 h-80 object-cover rounded-tl-xl rounded-bl-xl' alt='project 1' />

              <div className='flex flex-col justify-center text-left gap-5 px-3'>
                <h3 className='text-xl font-bold'>Fiskil</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                <div className='flex gap-2 flex-wrap'>
                  <span className=' text-sm bg-gray-200 px-4 py-1 rounded-full'>React</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>NodeJS</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>MongoDB</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>ExpressJS</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>TailwindCSS</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>ReactQuery</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>NextJS</span>
                </div>
                <ArrowTopRightOnSquareIcon className='h-5 w-5 mx-2 text-primary-500' />
              </div>
            </div>

            <div className='flex space-x-10 bg-white shadow-lg rounded-lg'>
              <img src={'/static/images/project-3.jpg'} className='w-1/2 h-100 object-cover rounded-tl-xl rounded-bl-xl' alt='project 1' />

              <div className='flex flex-col justify-center text-left gap-5 px-3'>
                <h3 className='text-xl font-bold'>Fiskil</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                <div className='flex gap-2 flex-wrap'>
                  <span className=' text-sm bg-gray-200 px-4 py-1 rounded-full'>React</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>NodeJS</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>MongoDB</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>ExpressJS</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>TailwindCSS</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>ReactQuery</span>
                  <span className='text-sm bg-gray-200 px-4 py-1 rounded-full'>NextJS</span>
                </div>
                <ArrowTopRightOnSquareIcon className='h-5 w-5 mx-2 text-primary-500' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className='text-center'>
          <div className='px-3 py-2'><span className='bg-gray-200 px-5 py-2 rounded-full'>Blog</span></div>
          <p className='px-3 py-2'> {siteMetadata.description}</p>
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
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
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
                        <div className="prose max-w-none text-gray-700 dark:text-gray-500">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
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
