import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Amend Therapy - Angela Mendez, LPC',
    short_name: 'Amend Therapy',
    description: 'Bilingual therapist specializing in calm and grounding therapeutic support for overwhelmed adults managing chronic stress and responsibility.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
