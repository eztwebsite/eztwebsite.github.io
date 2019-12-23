var config = {
    style: 'mapbox://styles/mapbox/outdoors-v11',
    accessToken: 'pk.eyJ1IjoiZXp0d2Vic2l0ZSIsImEiOiJjazRjMmpwZGgwanljM21ydmw3OHg4MWw2In0._HvmVmhJ_QxLugWNGCC6-Q',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'The units sold by EZT Group',
    subtitle: 'These are all the dream homes that we have delivered to our lovey clients',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'eztgroup-company-identifier',
            title: 'EZT Group',
            image: 'eztwebsite.github.io/images/eztgroup.jpeg',
            description: 'We have managed more than 1,000 properties for our foreigner investors. Our services include leasing, sub sales and all property management services. We strive to provide a hassle-free services, providing one stop services to our foreign investors. We also have a team of dedicated customer service hotline exclusively to handle inquiries and complaints from tenants within 5 working days. Scroll down to see the projects.',
            location: {
                center: [101.69332, 3.06921],
                zoom: 16,
                pitch: 40,
                bearing: -40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Myhabitat',
            title: 'My Habitat',
            image: 'eztwebsite.github.io/images/myhabitat.jpg',
            description: 'First project under EZT Land Sdn Bhd. Total of 16 units were sold, by the First Quarter of 2012. The developer for this project is SCENIC POINT DEVELOPMENT SDN BHD.',
            location: {
                center: [101.72040, 3.16270],
                zoom: 17.22,
                pitch: 42.50,
                bearing: -17.60
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Binjai8',
            title: 'Binjai 8',
            image: 'eztwebsite.github.io/images/BINJAI 8.jpg',
            description: 'First project under EZT Land Sdn Bhd. Total of 45 units were sold by the First Quarter of 2012. The developer for this project is SCENIC POINT DEVELOPMENT SDN BHD.',
            location: {
                center: [101.71729, 3.15879],
                zoom: 17.22,
                pitch: 42.50,
                bearing: -22.40
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slug-style-id',
            title: 'The Pearl',
            image: 'eztwebsite.github.io/images/the pearl.jpg',
            description: 'Total of 57 units were sold by the Second Quarter of 2012. The developer for this project is FLORA BLISS PROPERTY DEVELOPMENT SDN.BHD.',
            location: {
                center: [101.71712, 3.15162],
                zoom: 16.48,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Mirage',
            title: 'Mirage',
            image: 'eztwebsite.github.io/images/myhabitat.jpg',
            description: 'Total of 31 units were sold by the second quarter of 2013. The developer for this project is PERSPEKTIF VISTA SDN.BHD .',
            location: {
                center: [101.71551, 3.16291],
                zoom: 16.96,
                pitch: 42.50,
                bearing: -17.60
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'pavilion hilltop',
            title: 'Pavilion Hilltop',
            image: 'eztwebsite.github.io/images/pavilionhilltop.jpg',
            description: 'Total of 31 units were sold by the second quarter of 2013. The developer for this project is PERSPEKTIF VISTA SDN.BHD .',
            location: {
                center: [101.71551, 3.16291],
                zoom: 16.96,
                pitch: 42.50,
                bearing: -17.60
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
    ]
};
