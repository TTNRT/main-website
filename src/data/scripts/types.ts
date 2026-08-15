export interface Partner_groups {
    id: number,
    name: string,
    date_since: string,
    website_link: string,
    logo: string
}
export interface Logo_groups {
    id: number,
    title: string,
    image: string,
    started_on: number,
    until_now: string | number
}
export interface Link_groups {
    name: string,
    title: string,
    icon: string | null,
    link: string
}
export interface Service_groups {
    id: number
    slug: string
    name: string
    description: string
    icon: string
    alert: string | null
    sections: {
        title: string
        content: string
        cards: {
            title: string
            content: string
            icon: string | null
        }[]
    }[]
    links: {
        title: string
        content: string
        icon: string | null
        url: string
    }[]
}
export interface Alert_Type {
    id: number
    name: string
    details: string
}
export interface Link_Data {
    [index: number]: string
}
export interface Icon_Stylesheets {
    name: string
    data: string[]
}
export interface UserProfile_Data {
    id: number | null
    username: string | null
    full_name: string | null
    roles: string[] | null
    profile: {
        about_me_markdown: string | null
        about_me_html: string | null
        color_banner: string | null,
        private: boolean
        gravatar_uri: string | null
    }
    created_since: string | null
}
export interface UserProfile_Data {
    id: number | null
    username: string | null
    full_name: string | null
    roles: string[] | null
    profile: {
        about_me_markdown: string | null
        about_me_html: string | null
        color_banner: string | null,
        private: boolean
        gravatar_uri: string | null
    }
    created_since: string | null
}