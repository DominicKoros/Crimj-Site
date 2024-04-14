import { JSDOM } from 'jsdom';
import { NextRequest, NextResponse } from 'next/server';
import { FEEDS } from "@/lib/rss";

//needs to send requests to /api/image/[slug]?link=(encoded url for article)

export async function GET(request: NextRequest, { params }: { params: { slug: string, link: string} }) {
  const feed = FEEDS.find((feed) => feed.slug === params.slug);
  const link = request.nextUrl.searchParams.get('link')
  console.log(link);
  
  const response = await fetch(link || ''); // Provide a default value for the fetch argument
  const html = await response.text();

  // Parse the HTML
  const dom = new JSDOM(html);
  const document = dom.window.document;

  let imageUrl: any = "bad";

  if(feed?.slug === "darkreading") {
      const imageElement = document.querySelector(feed?.querySelect || '')
      imageUrl = imageElement?.getAttribute('src');
    }
  if(feed?.slug === "thehackersnews") {
      const imageElement = document.querySelector(feed?.querySelect || '')
      imageUrl = imageElement?.getAttribute('href');
    }
  if(feed?.slug === "recordedfuture") {
      const imageElement = document.querySelector(feed?.querySelect || '')
      imageUrl = imageElement?.getAttribute('src');
    }

  return NextResponse.json( {"imageUrl": imageUrl})
}