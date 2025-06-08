import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega:{
    // studioUrl:'/studio',

    studioUrl: `https://mir-beryl.vercel.app/studio`,
    //  ? `https://mir-beryl.vercel.app/studio`
    //  : `${process.env.NEXT_PUBLIC_BASE_URL}/studio`,
    
  }
})