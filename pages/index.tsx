import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Intro from '../components/intro.mdx'

const navLinks = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/about',
    text: 'About',
  },
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Ananth Pai</title>
        <meta name="description" content="Full-stack engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col max-w-3xl mx-auto mt-8">
        <nav className="flex flex-wrap justify-between items-center py-2 w-full">
          <h1 className="flex items-center text-xl font-bold">
            <div className="mr-3">
              <Image
                className="rounded-lg"
                width={45}
                height={45}
                src="/profile.jpg"
                alt="Profile Image"
              />
            </div>
            ananthpai
          </h1>
          {/* <ul className="flex">
            {navLinks.map((linkItem, index) => (
              <li key={index} className="px-2 font-light text-lg">
                <Link href={linkItem.href}>
                  <a>{linkItem.text}</a>
                </Link>
              </li>
            ))}
          </ul> */}
        </nav>
        <div className="my-3 prose lg:prose-lg">
          <Intro />
        </div>
      </div>
    </div>
  )
}

export default Home
