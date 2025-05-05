import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const backendClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // 确保获取最新数据
  
  token: process.env.SANITY_API_TOKEN, // 使用 token 进行认证
})