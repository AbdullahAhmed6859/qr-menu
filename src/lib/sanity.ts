import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '67yz542i', // You'll need to replace this with your Sanity project ID
  dataset: 'production',
  apiVersion: '2024-03-20',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
} 