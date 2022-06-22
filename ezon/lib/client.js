import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '05pwoge4',
  dataset: 'production',
  apiVersion: '2022-06-20',
  useCdn: true,
  token: 'skfRriyKZFrMz3gan30bGBP5WQkExVBMvcrvjXv8SPUweUs63s3bK00tmtaCI4yd26arFAvwDPSAIhdVdmZJBdMKXXlwRYJsKfPGbpg6OYQjR513jeJbSc5X5XbfYFQ1Qv6C8UP6wYxmCsi57N1YG0VbfNhaDd7MQkrk3vvngFCNHzN8PSdH'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);