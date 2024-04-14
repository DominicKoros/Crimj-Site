import { FEEDS } from "@/lib/rss";
import Parser from 'rss-parser';
import { NextResponse } from 'next/server'


type CustomFeed = { foo: string };
type CustomItem = { bar: number, title: string, link: string };
 
export async function GET(request: Request, { params }: { params: { slug: string, link: string} }) {
  const parser = new Parser<CustomFeed, CustomItem>();
  const feed = FEEDS.find((feed) => feed.slug === params.slug);
  // console.log(feed?.url)
  
  const detailedFeed = await parser.parseURL(feed?.url as string);
  return NextResponse.json(detailedFeed, { status: 200 })
}