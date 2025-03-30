// import { createClient } from "next-sanity";

// export const client = createClient({
//   projectId: "ipz7kkbl",
//   dataset: "production",
//   apiVersion: "2024-11-01",
//   useCdn: false,
// });

import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega:{
    studioUrl:'/studio',
  }
})