import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Intro from '../components/intro.mdx'

const navLinks = [
  {
    href: '/resume.pdf',
    text: 'Resume',
    newTab: true,
  },
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Ananth Pai</title>
        <meta name="description" content="Full-stack engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between max-w-4xl mx-auto min-h-screen p-8">
        <div className="flex flex-col">
          <header>
            <nav className="flex flex-wrap justify-between items-center py-2 w-full">
              <h1 className="flex items-center text-xl font-bold">
                <div className="mr-3">
                  <Image
                    className="rounded-lg bg-gray-300"
                    width={45}
                    height={45}
                    src="/profile.jpeg"
                    alt="Profile Image"
                  />
                </div>
                ananthpai
              </h1>
              <ul className="flex">
                {navLinks.map((linkItem, index) => (
                  <li key={index} className="px-2 font-light text-lg">
                    <Link href={linkItem.href}>
                      <a target={linkItem.newTab ? '_blank' : '_self'}>
                        {linkItem.text}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <main className="my-3">
            <section className="prose lg:prose-lg dark:prose-invert">
              <Intro />
            </section>
          </main>
        </div>
        <footer className="flex justify-end items-center">
          {/* <div>
            <p className="text-base text-center text-gray-400">
              © All rights reserved
            </p>
          </div> */}
          <nav>
            <ul className="flex">
              <li className="px-2 font-light text-sm text-gray-400">
                <a
                  href="https://stackoverflow.com/users/3585222/ananth-pai"
                  target="_blank"
                  rel="noreferrer"
                >
                  Stack Overflow
                </a>
              </li>
              <li className="px-2 font-light text-sm text-gray-400">
                <a
                  href="https://twitter.com/ananthtpai"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li className="px-2 font-light text-sm text-gray-400">
                <a
                  href="https://github.com/ananthtpai"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default Home
