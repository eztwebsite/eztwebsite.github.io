var config = {
    style: 'mapbox://styles/mapbox/outdoors-v11',
    accessToken: 'pk.eyJ1IjoiZXp0d2Vic2l0ZSIsImEiOiJjazRjMmpwZGgwanljM21ydmw3OHg4MWw2In0._HvmVmhJ_QxLugWNGCC6-Q',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Units sold by EZT Group',
    footer: 'Made with <3 in MY',

    chapters: [
        {
            id: 'eztgroup-company-identifier',
            title: 'EZT Group',
            image: 'eztwebsite.github.io/images/eztgroup.jpeg',
            description: 'We have managed more than 1,500 properties for our foreigner investors. Our services include leasing, sub sales and all property management services. We strive to provide a hassle-free services, providing one stop services to our foreign investors. We also have a team of dedicated customer service hotline exclusively to handle inquiries and complaints from tenants within 5 working days. Scroll down to see the projects.',
            location: {
                center: [101.69475, 3.06919],
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
            description: 'Total of 118 units were sold by the fourth quarter of 2013. The developer for this project is PERMATA CERMAT SDN.BHD .',
            location: {
                center: [101.65751, 3.16999],
                zoom: 13,
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
            id: 'tribeca',
            title: 'Tribeca',
            image: 'eztwebsite.github.io/images/tribeca.jpg',
            description: 'Total of 38 units were sold by the second quarter of 2014. The developer for this project is BAKTI DINAMIK SDN.BHD .',
            location: {
                center: [101.71581, 3.14660],
                zoom: 16.72,
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
            id: 'dorsett',
            title: 'Dorsett Residence',
            image: 'eztwebsite.github.io/images/dorsett.jpg',
            description: 'Total of 37 units were sold by the second quarter of 2014. The developer for this project is DORSETT BUKIT BINTANG SDN.BHD .',
            location: {
                center: [101.71576, 3.14755],
                zoom: 16.72,
                pitch: 42.50,
                bearing: -39.20
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
            id: 'Paviion suites',
            title: 'Pavilion Suites',
            image: 'eztwebsite.github.io/images/pavilionsuites.jpg',
            description: 'Total of 157 units were sold by the fourth quarter of 2015. The developer for this project is URUSHARTA CEMERLANG(KL) SDN.BHD .',
            location: {
                center: [101.71234, 3.14879],
                zoom: 16.72,
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
            id: 'Paviion ceylon hill',
            title: 'Pavilion Ceylon Hill',
            image: 'eztwebsite.github.io/images/pavilionceylonhill.jpg',
            description: 'Total of 435 units in Tower A & C and 40 units in Tower B are being sold starting from the first quarter of 2016. The developer for this project is JELITA ORIENTASI SDN.BHD .',
            location: {
                center: [101.70550, 3.14919],
                zoom: 16.72,
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
            id: 'Pavilion Embassy',
            title: 'Pavilion Embassy',
            image: 'eztwebsite.github.io/images/pavilionembassy.jpg',
            description: 'Total of 318 units in Tower C and 126 units in Tower E are being sold starting from the second quarter of 2016. The developer for this project is PEDOMAN IKHTISAS SDN.BHD .',
            location: {
                center: [101.72348, 3.16075],
                zoom: 16.72,
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
            id: 'Tropical Villa',
            title: 'Tropical Villa',
            image: 'eztwebsite.github.io/images/tropicalvilla.jpg',
            description: 'Total of 64 units were sold starting from the fourth quarter of 2017. The developer for this project is B&G TROPICAL SDN.BHD, which is also a subsidiary company under EZT Group.',
            location: {
                center: [101.70015, 3.01749],
                zoom: 16.72,
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
            id: 'Vertical II',
            title: 'Vertical II',
            image: 'eztwebsite.github.io/images/vertical 2.jpg',
            description: 'Total of 16 units were sold in 2015. The developer for this project is UOA GROUP.',
            location: {
                center: [101.66578, 3.11033],
                zoom: 16.72,
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
            id: 'Imperio',
            title: 'Imperio',
            image: 'eztwebsite.github.io/images/Imperio.jpg',
            description: 'Total of 187 units were sold. The developer for this project is HATTEN GROUP.',
            location: {
                center: [102.26107, 2.18220],
                zoom: 16.72,
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
            id: 'Hatten square',
            title: 'Hatten Square',
            image: 'eztwebsite.github.io/images/hattensquare.jpg',
            description: 'Total of 21 units were sold. The developer for this project is HATTEN GROUP.',
            location: {
                center: [102.25179, 2.18883],
                zoom: 16.72,
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
            id: 'Ther Rise',
            title: 'The Rise 喜来城',
            image: 'eztwebsite.github.io/images/therise.jpg',
            description: 'Total of 200 units were sold. The developer for this project is YEA SHIN.',
            location: {
                center: [102.19085, 2.21048],
                zoom: 14.72,
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
