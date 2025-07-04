import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega:{
    // studioUrl:'/studio',

    studioUrl: process.env.NEXT_PUBLIC_VERCEL_URL
     ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/studio`
     : `${process.env.NEXT_PUBLIC_BASE_URL}/studio`,
  }
})