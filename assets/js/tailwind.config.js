tailwind.config = {
    theme: {
        extend: {
            screens: {
                '3xl': '1560px',
                '2xl': '1280px',
                xl: '1024px',
                lg: '992px',
                md: '768px',
                sm: '525px',
                DEFAULT: '1360px',
            },
            container: {
                center: true,
                maxWidth: '1920px',
                padding: {
                    DEFAULT: '24px',
                    '3xl': '20px',
                    '2xl': '32px',
                    xl: '32px',
                    lg: '24px',
                    md: '24px',
                    sm: '24px',
                },
            },
        },
        colors: {
            white: '#FFF',
            black: '#000',
            primary: {
                1: '#004B41',
                2: '#3A6E64',
                3: '#6B928B',
                4: '#9DB7B2',
                5: '#CEDBD9',
            },
            secondary: {
                1: '#0F5F5A',
                2: '#437F7A',
                3: '#729F9B',
                4: '#A1C0BD',
                5: '#D0DFDE',
            },
            neutralc: {
                50: '#F2F2F2',
                100: '#E6E6E6',
                200: '#CCCCCC',
                300: '#B3B3B3',
                400: '#999999',

                600: '#666666',
                700: '#4D4D4D',
                800: '#333333',
                900: '#1A1A1A',
                950: '#0D0D0D',
            },
            accent: {
                1: '#4BB4AF',
                2: '#6DC6C0',
                3: '#91D4D0',
                4: '#B6E2E0',
                5: '#DBF1EF',
            }


        }
    }
}