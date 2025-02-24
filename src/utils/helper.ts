interface HeaderItem {
    title: string;
    link: string;
    dropdown?: HeaderItem[];
}
interface MarketCard {
    cardImg: string
    date: string;
    category: string;
    readTime: string;
    title: string;
    description: string;
    author: string;
    image: string;
    icon: string
}

interface MarqueeItem {
    title: string;
    price: string;
}
interface FooterList {
    title: string;
    link: string;
}

interface DisclaimersItem {
    title: string;
    description: string;
    descriptionTwo?: any;
}
interface Real_Time_Analytics {
    title: string;
    description: string;
    descriptionTwo?: any;
}
interface FooterIconsList {
    icons: string
    link: string
}

export const HEADER_LIST: HeaderItem[] = [
    {
        title: "Home",
        link: "#home",
    },
    {
        title: "Learn to trade",
        link: "#learn",
    },
    {
        title: "Promotions",
        link: "#promotions",
        dropdown: [
            { title: "Promotion 1", link: "#promotion1" },
            { title: "Promotion 2", link: "#promotion2" },
        ],
    },
    {
        title: "Arrowtrade",
        link: "#arrowtrade",
    },
    {
        title: "Blog",
        link: "#blog",
    },
]

export const MARQUEE_LIST: MarqueeItem[] = [
    {
        title: "USDJPY",
        price: "143.651 / 143.637",
    },
    {
        title: "US30",
        price: "41048.38 / 41044.58",
    },
    {
        title: "NAS100",
        price: "18948.45 / 18945.15",
    },
    {
        title: "USDJPY",
        price: "143.651 / 143.637",
    },
    {
        title: "US30",
        price: "41048.38 / 41044.58",
    },
    {
        title: "NAS100",
        price: "18948.45 / 18945.15",
    },
    {
        title: "USDJPY",
        price: "143.651 / 143.637",
    },
    {
        title: "US30",
        price: "41048.38 / 41044.58",
    },
    {
        title: "NAS100",
        price: "18948.45 / 18945.15",
    },
];

export const BLOGS_CARDS: MarketCard[] = [
    {
        cardImg: "/assets/images/webp/features-card-one.webp",
        date: "31 Jan 2025",
        category: "Productivity",
        readTime: "3 min read",
        title: "Real-Time Market Insights",
        description: "Stay ahead with AI-driven analytics, real-time news updates, and expert market research to make informed decisions.",
        image: "/assets/images/webp/features-card-dp-one.webp",
        author: "Darrell Steward",
        icon: ""
    },
    {
        cardImg: "/assets/images/webp/features-card-two.webp",
        date: "29 Jan 2025",
        category: "Productivity",
        readTime: "7 min read",
        title: "Advanced Trading Platform",
        description: "Experience lightning-fast execution, customizable charts, and an intuitive interface designed for traders of all levels.",
        image: "/assets/images/webp/features-card-dp-two.webp",
        author: "Jerome Bell",
        icon: ""
    },
    {
        cardImg: "/assets/images/webp/features-card-three.webp",
        date: "20 Dec 2024",
        category: "Productivity",
        readTime: "4 min read",
        title: "Mastering the Markets",
        description: "Mastering the markets involves developing a comprehensive understanding of how financial markets work, creating.",
        image: "/assets/images/webp/features-card-dp-three.webp",
        author: "Eleanor Pena",
        icon: ""
    },
    {
        cardImg: "/assets/images/webp/features-card-four.webp",
        date: "17 Nov 2024",
        category: "Productivity",
        readTime: "5 min read",
        title: "Risk Management in Trading",
        description: "Risk management is a critical component of successful trading. without effective risk management strategies, traders.",
        image: "/assets/images/webp/features-card-dp-four.webp",
        author: "Leslie Alexander",
        icon: ""
    },
    {
        cardImg: "/assets/images/webp/features-card-five.webp",
        date: "22 Oct 2024",
        category: "Productivity",
        readTime: "2 min read",
        title: "Building a Diversified Portfolio",
        description: "Building a diversified portfolio is an essential strategy for managing risk while aiming for steady returns over time.",
        image: "/assets/images/webp/features-card-dp-five.webp",
        author: "Wade Warren",
        icon: ""
    },
    {
        cardImg: "/assets/images/webp/features-card-six.webp",
        date: "27 Sep 2024",
        category: "Productivity",
        readTime: "6 min read",
        title: "The Psychology of Trading",
        description: "Trading isn’t just about numbers, charts, and market analysis—it’s also a game of emotions and psychology.",
        image: "/assets/images/webp/features-card-dp-six.webp",
        author: "Kristin Watson",
        icon: ""
    },
]

export const FOOTER_LINKS_LIST: FooterList[] = [
    {
        title: "Home",
        link: "#home",
    },
    {
        title: "About Us",
        link: "#about-us",
    },
    {
        title: "How It Works",
        link: "#how-it-works",
    },
    {
        title: "Testimonials",
        link: "#testimonials",
    },
    {
        title: "FAQs",
        link: "#faqs ",
    },
    {
        title: "Contact Us",
        link: "#contact",
    },
];

export const TRADE_RESPONSIBILITY_LIST: DisclaimersItem[] = [
    {
        title: "Trade Responsibility Disclaimer",
        description: "Trading Forex and CFDs involves a high level of risk and may not be suitable for all investors. Leverage can work both for and against you, and it’s possible to lose more than your initial investment. Please ensure that you fully understand the risks involved, taking into account your financial objectives and risk appetite. Seek independent financial advice if necessary before starting trading. ArrowTrade does not offer financial advice.",
    },
    {
        title: "Disclaimer",
        description: "Information on this site is not directed at residents of any country or jurisdiction where distribution or use would be contrary to local law or regulation. Please check with your local regulations before proceeding.",
    },
    {
        title: "Regulatory Information",
        description: "Arrowtradefx.com is a website operated by Arrow Trade S.A.R.L, which is registered in: – Lebanon, Beirut, Barbour, Zrek Street, Najmat almazraa building, Eighth floor- company number 1028098. (Arrow trade offices: 2nd floor Hazmieh, Baabda Real Estate, Property 4370 sections 20/021, Beirut, Lebanon).",
    },
    {
        title: "Regulatory Information",
        description: "Arrowtradefx.com is a website operated by Arrow Trade S.A.R.L, which is registered in: – Lebanon, Beirut, Barbour, Zrek Street, Najmat almazraa building, Eighth floor- company number 1028098. (Arrow trade offices: 2nd floor Hazmieh, Baabda Real Estate, Property 4370 sections 20/021, Beirut, Lebanon).",
        descriptionTwo: "Arrow Trade S.A.R.L (Lebanon) is the sole entity authorized to operate the MetaTrader platform under our license. No other companies are involved in the operation or management of our MetaTrader license.",
    },
];

export const FOOTER_ICONS_LIST: FooterIconsList[] = [
    {
        icons: "/assets/images/svg/facebook-icon.svg",
        link: "https://www.facebook.com/"
    },
    {
        icons: "/assets/images/svg/instagram-icon.svg",
        link: "https://www.instagram.com/"
    },
    {
        icons: "/assets/images/svg/youtube-icon.svg",
        link: "https://www.youtube.com/"
    },
    {
        icons: "/assets/images/svg/tiktok-icon.svg",
        link: "https://www.tiktok.com/"
    },
    {
        icons: "/assets/images/svg/twitter-icon.svg",
        link: "https://www.twitter.com/"
    },
    {
        icons: "/assets/images/svg/linkedin.svg",
        link: "https://www.linkedin.com/"
    },
];
export const Real_Time_Analytics: Real_Time_Analytics[] = [
    {
        title: "Trade Responsibility Disclaimer",
        description: "Trading Forex and CFDs involves a high level of risk and may not be suitable for all investors. Leverage can work both for and against you, and it’s possible to lose more than your initial investment. Please ensure that you fully understand the risks involved, taking into account your financial objectives and risk appetite. Seek independent financial advice if necessary before starting trading. ArrowTrade does not offer financial advice.",
    },
    {
        title: "Disclaimer",
        description: "Information on this site is not directed at residents of any country or jurisdiction where distribution or use would be contrary to local law or regulation. Please check with your local regulations before proceeding.",
    },
    {
        title: "Regulatory Information",
        description: "Arrowtradefx.com is a website operated by Arrow Trade S.A.R.L, which is registered in: – Lebanon, Beirut, Barbour, Zrek Street, Najmat almazraa building, Eighth floor- company number 1028098. (Arrow trade offices: 2nd floor Hazmieh, Baabda Real Estate, Property 4370 sections 20/021, Beirut, Lebanon).",
    },
    {
        title: "Regulatory Information",
        description: "Arrowtradefx.com is a website operated by Arrow Trade S.A.R.L, which is registered in: – Lebanon, Beirut, Barbour, Zrek Street, Najmat almazraa building, Eighth floor- company number 1028098. (Arrow trade offices: 2nd floor Hazmieh, Baabda Real Estate, Property 4370 sections 20/021, Beirut, Lebanon).",
        descriptionTwo: "Arrow Trade S.A.R.L (Lebanon) is the sole entity authorized to operate the MetaTrader platform under our license. No other companies are involved in the operation or management of our MetaTrader license.",
    },
];