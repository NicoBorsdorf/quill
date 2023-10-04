export const PLANS = [
    {
        name: "Free",
        slug: "free",
        quota: 10,
        pagesPerPdf: 5,
        price: {
            amount: 0,
            priceIds: {
                test: '',
                production: ''
            }
        }
    },
    {
        name: "Pro",
        slug: "pro",
        quota: 50,
        pagesPerPdf: 225,
        price: {
            amount: 14,
            priceIds: {
                test: 'stripe_id',
                production: ''
            }
        }
    }
]