export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.reppvtltd.com/#organization',
        name: 'ROUTRAY ELECTRO MECHANICAL PROJECTS PRIVATE LIMITED',
        alternateName: 'REP Pvt Ltd',
        url: 'https://www.reppvtltd.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.reppvtltd.com/favicon-rep-v2.png',
        },
        image: 'https://www.reppvtltd.com/favicon-rep-v2.png',
        description:
          'REP Pvt Ltd is a leading MEP contractor specializing in Electrical, HVAC, Fire Fighting, Plumbing, ELV Systems, and complete electro-mechanical engineering solutions for commercial, industrial, and residential projects.',
        email: 'ck@reppvtltd.com',
        telephone: '+91-8885730743',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'MCH 393, MIG-I, Ground Floor, KPHB Colony, Phase-I, Kukatpally',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500072',
          addressCountry: 'IN',
        },
        foundingLocation: {
          '@type': 'Place',
          name: 'Hyderabad, Telangana',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-8885730743',
          contactType: 'customer service',
          email: 'ck@reppvtltd.com',
          availableLanguage: ['English', 'Hindi', 'Telugu'],
        },
      },

      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.reppvtltd.com/#business',
        name: 'REP Pvt Ltd',
        image: 'https://www.reppvtltd.com/favicon-rep-v2.png',
        url: 'https://www.reppvtltd.com',
        telephone: '+91-8885730743',
        email: 'ck@reppvtltd.com',
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'MCH 393, MIG-I, Ground Floor, KPHB Colony, Phase-I, Kukatpally',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500072',
          addressCountry: 'IN',
        },
        areaServed: 'India',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'MEP Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Electrical Contracting',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'HVAC Systems',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Fire Fighting Systems',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Plumbing Systems',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'ELV Systems',
              },
            },
          ],
        },
      },

      {
        '@type': 'WebSite',
        '@id': 'https://www.reppvtltd.com/#website',
        url: 'https://www.reppvtltd.com',
        name: 'REP Pvt Ltd',
        publisher: {
          '@id': 'https://www.reppvtltd.com/#organization',
        },
        inLanguage: 'en-IN',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
