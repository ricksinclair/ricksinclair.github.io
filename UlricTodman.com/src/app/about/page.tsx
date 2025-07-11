import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { PERSONAL_INFO } from '@/lib/constants'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    `I'm ${PERSONAL_INFO.name}. From breaking computers in Harlem to building the future in North Carolina.`,
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I'm {PERSONAL_INFO.name}. From breaking computers in Harlem to building the future in North Carolina.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I grew up in Harlem but went to school on the Upper West Side, where I discovered my superpower: 
              systematically breaking every computer my father bought me until I understood them inside and out. 
              What started as destructive curiosity became the foundation of everything I do today.
            </p>
            <p>
              My real education happened on the first Friday of every month at the Citicorp building, where my dad 
              would take me to hang out with the hackers at 2600 meetings. While other kids were playing video games, 
              I was learning about phone phreaking, social engineering, and the beautiful art of making technology 
              do things it wasn't supposed to do.
            </p>
            <p>
              My formal journey took me through PS87, The Computer School (IS44), and The Beacon School. In my senior 
              year at Beacon, I took PHP as an elective—it counted for very few credit hours, but it quickly became 
              my favorite subject. My teacher, Mr. Lehmann, noticed my enthusiasm and assigned me a tutor: Loren 
              Brichter, who would later create Tweetie (which became Twitter's official iOS app). Watching someone 
              I knew achieve that level of success planted a seed: "I want to do that one day." His encouragement 
              made all the difference, creating a spark that would lay dormant for years.
            </p>
            <p>
              After school, I spent 13 years at 60 Hudson Street—the largest fiber optic interconnection hub on the 
              US East Coast. Picture this: freezing data centers, brutal rotating schedules, and countless nights, 
              weekends, and holidays working on equipment for some of the biggest names in tech—Oracle, Dropbox, 
              Telefonica, Google, Microsoft, Amazon, Verizon, and more. It was grueling, but I was literally touching the 
              infrastructure that powers the internet.
            </p>
            <p>
              The turning point came through repeated encounters with Google engineers during an equipment migration at 
              111 8th Avenue. I would be lying if I said I wasn't jealous of their perks, but more so, I was jealous 
              of the purpose they had in their work. Then the cherry on top—one day, scrolling through Reddit during 
              a break, I saw an ad for Columbia's coding bootcamp. Sometimes the universe sends you a sign—this was mine. 
              That dormant spark from my time with Loren suddenly reignited.
            </p>
            <p>
              I decided to bet on myself. I enrolled in a MERN stack bootcamp at Columbia University, then earned a 
              scholarship to a second bootcamp to learn Java. The best part? I landed a job upon graduating and got 
              an automatic interview just for being able to keep up with their rigorous work schedule.
            </p>
            <p>
              Now I'm based in North Carolina, building software and looking for other like-minded and brave souls 
              to build the future with. If you're someone who believes technology should serve humanity and isn't 
              afraid to break a few things to make them better, let's talk.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={InstagramIcon}>
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href={`mailto:${PERSONAL_INFO.email}`}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {PERSONAL_INFO.email}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
