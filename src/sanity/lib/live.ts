import { defineLive } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { token } from "@/sanity/lib/token"
import "server-only"

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
  // fetchOptions: {
  //   revalidate: 0,
  // },
 
});