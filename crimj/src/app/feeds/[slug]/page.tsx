"use client"
import { useEffect, useState } from "react";
import { FEEDS } from "@/lib/rss";
import { format } from "date-fns";
import Link from "next/link";
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type CustomItem = {
  isoDate: string | number | Date; title: string,  link: string, content: string
};

let feed: any;
let items: any;
let detailedItems: any;

// export default StorePage;
// Your Feed component
export default function Feed({ params }: { params: { slug: string} }) {
  const [items, setItems] = useState<CustomItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  let feed = FEEDS.find((feed) => feed.slug === params.slug);

  useEffect(() => {
    const fetchFeed = async () => {
      // console.log(params.slug);
      const res = await fetch('/api/feeds/' + params.slug);
      const { items: detailedItems } = await res.json();
      
      if (Array.isArray(detailedItems)) {
        const sanitizedItems = detailedItems.map(item => ({
          ...item,
          content: DOMPurify.sanitize(item.content)
        }));
        setItems(sanitizedItems);
      } else {
        console.error('Error: items is not an array', detailedItems);
      }
      setIsLoading(false);
    };
    

    fetchFeed();
  }, [params.slug]);

  // console.log(items);
  

  if (!isLoading) {
    return (
      <div className="px-6 lg:px-12 py-12 w-auto mx-auto">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pl-2 mb-12">
          {feed && feed.title}
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {items.map((item: CustomItem) => (
            item.content.length > 0 && (
              <Link
                key={item.link}
                href={item.link}
                target="_blank"
              >
                <Card className="flex flex-col h-full mb-2">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow overflow-auto">
                    {parse(item.content)}
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <p className="">{format(new Date(item.isoDate), "PPP")}</p>
                  </CardFooter>
                </Card>
              </Link>
            )
          ))}
        </div>
      </div>
    );
  }

}