import type { Partner_groups, Link_groups, Logo_groups, Service_groups, Alert_Type, Link_Data } from "./types"

export const Partners: Partner_groups[] = [
    {
        id: 1,
        name: "Aclevo",
        date_since: new Date('2024-04-19').toLocaleDateString(),
        website_link: "https://aclevo.com/",
        logo: import.meta.env.SITE + "/partners/aclevo_current.png"
    }
]
export const Socials: Link_groups[] = [
    {
        name: "discord",
        title: "Discord",
        icon: "simple-icons--discord",
        link: "https://discord.com/invite/XdgMxu8EZJ"
    },
    {
        name: "github",
        title: "GitHub",
        icon: "simple-icons--github",
        link: "https://github.com/TTNRT"
    },
    {
        name: "reddit",
        title: "Reddit",
        icon: "simple-icons--reddit",
        link: "https://www.reddit.com/r/TTNRT/"
    },
    {
        name: "ttgit",
        title: "TTGit",
        icon: "simple-icons--gitea",
        link: "https://git.ttnrtsite.me/TTNRT"
    },
    {
        name: "bluesky",
        title: "BlueSky",
        icon: "simple-icons--bluesky",
        link: "https://bsky.app/profile/ttnrtsite.me"
    },
    {
        name: "huggingface",
        title: "Huggingface",
        icon: "simple-icons--huggingface",
        link: "https://huggingface.co/ttnrt"
    },
    {
        name: "mastodon",
        title: "Mastodon",
        icon: "simple-icons--mastodon",
        link: "https://mastodon.social/@ttnrt_corporation"
    },
]
export const LogoHistory: Logo_groups[] = [
    {
        id: 1,
        title: "Our current logo",
        image: import.meta.env.SITE + "/logos/ttnrtlogo_v3.png",
        started_on: 2025,
        until_now: "now"
    },
    {
        id: 2,
        title: "Our previous logo for 2023",
        image: import.meta.env.SITE + "/logos/ttnrtlogo_v2.png",
        started_on: 2023,
        until_now: 2025
    },
    {
        id: 3,
        title: "Our first ever logo during our company's formation",
        image: import.meta.env.SITE + "/logos/ttnrtlogo_v1.png",
        started_on: 2022,
        until_now: 2023
    }
]
export const Links: Link_groups[] = [
    {
        name: "documentation",
        title: "Documentation",
        icon: null,
        link: "https://docs.ttnrtsite.me"
    }
]
export const Services: Service_groups[] = [
    {
        id: 1,
        slug: "ttgit",
        name: "TTGit",
        description: "A user-friendly git source-control website and service!",
        icon: "simple-icons--gitea",
        alert: null,
        sections: [
            {
                title: "How it works",
                content: "Ever wonder how TTGit works? Let us explain that for you!",
                cards: [
                    {
                        title: "Powered by Gitea",
                        content: "We use the Gitea platform to run the website!",
                        icon: "fa6-brands--git"
                    },
                    {
                        title: "Sweet and simple",
                        content: "Very simple to use, just like GitHub and any other Git provider that you might've used before this!",
                        icon: "fa6-solid--hands-clapping"
                    }
                ]
            },
            {
                title: "Additional features",
                content: "We not only offer the source-control features, but we also include even more to the table to make your experience more valuable!",
                cards: [
                    {
                        title: "Hosting your own static website",
                        content: "You can easily deploy your own website to the platform using the CI interface! Our documentation has all of the information that you need in order to accomplish this goal!",
                        icon: "fa6-brands--html5"
                    }
                ]
            }
        ],
        links: [
            {
                title: "View the website",
                content: "Click here if you want to check out the website and see how it works! Let us know on what you think or like about it!",
                icon: "fa6-solid--arrow-pointer",
                url: "https://git.ttnrtsite.me"
            }
        ]
    },
    {
        id: 2,
        slug: "mytt-accounts",
        name: "myTT Account Management System",
        description: "One account system for all of our services!",
        icon: "fa6-solid--circle-user",
        alert: "Our new account management system is in development at this time, so there might be some bugs or issues that you might run into! If you see any issues that requires our attention, please contact our support team and include the error stack message (if possible) with your message!",
        sections: [
            {
                title: "How it works",
                content: "Ever wonder how our account management system works? Let us explain that for you!",
                cards: [
                    {
                        title: "Uses the AstroJS framework",
                        content: "We prefer to use this framework more then anything! It's the perfect website framework that you would want for making websites!",
                        icon: "simple-icons--astro"
                    },
                    {
                        title: "Everything you need is all on it!",
                        content: "Our account system works better when we intergrate it with our OAuth login system!",
                        icon: "simple-icons--openid"
                    },
                    {
                        title: "Data protection is on your side!",
                        content: "We care about your privacy the most when it comes to hosting our services. We will never share any of your data to anyone, ever!",
                        icon: "fa6-solid--shield-halved"
                    }
                ]
            }
        ],
        links: [
            {
                title: "View the website",
                content: "Click here if you want to check out the website and see how it works! Let us know on what you think or like about it!",
                icon: "fa6-solid--arrow-pointer",
                url: "https://my.ttnrtsite.me"
            }
        ]
    }
]
export const Projects: Service_groups[] = []
export const AlertList: Alert_Type[] = []
export const Allowed_Websites: Link_Data[] = [
    "ttnrtsite.me",
    "www.ttnrtsite.me",
    "backup.ttnrtsite.me",
    "my.ttnrtsite.me",
    "git.ttnrtsite.me",
    "status.ttnrtsite.me",
    "docs.ttnrtsite.me",
    "localhost"
]
