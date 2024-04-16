import { FEEDS } from "@/lib/rss";
import Link from "next/link";
import Image from 'next/image'
import profilePic from '/public/FLgHrLHy_400x400.jpg'

export default function Home() {
  return (
    <>
    <div className="px-6 pt-[50px] max-w-[350px] md:max-w-[550px] lg:max-w-[1000px] mx-auto text-center">
    <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl">
    Your Hub for the Latest <span className="text-purple-700">Cybersecurity</span> News
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-12 text-grey-500">
        Get all the latest cybersecurity news in one place. Stay informed with expert analyses, exclusive interviews, and in-depth reports on threats and defenses. Whether you&apos;re a novice or an expert, our newsletter keeps you ahead in the digital age with the latest technologies and strategies. Join our community to stay secure and knowledgeable.
        
      </p>
      <h2 className="mt-[100px] md:mt-[100px] scroll-m-20 border-b pb-10 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Latest News from the Cybersecurity World
      </h2>
    </div>
    <div className="px-6 lg:max-w-[850px] mx-auto pb-[290px]">
      {/* <h1 className="font-bold text-5xl mb-12 text-center">Cybersecurity News</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 h-[200px] lg:mt-[40px] justify-center">
        {FEEDS.map((feed) => (
       <Link key={feed.slug} href={`/feeds/${feed.slug}`}>
       <div className="border hover:border-gray-500 flex items-center rounded-lg">
         <h1 className="pl-5 font-semibold">{feed.title}</h1>
         <div className="ml-auto">
           <Image
             src={`/${feed.image}`}
             alt="Picture of the author"
             width={100} 
             height={100}
             className="object-cover rounded-lg"
           />
         </div>
       </div>
        </Link>
          ))}
      </div>
    </div>
    </>

  );
}
