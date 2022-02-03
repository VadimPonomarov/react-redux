export interface ILaunche {
    mission_name: string,
    launch_date_local: Date,
    launch_site: ILauncheSite,
    links: ILinks,
    rocket: IRocket
}

interface ILauncheSite {
    site_name_long: string
}

interface ILinks {
    article_link: string | null,
    video_link: string | null
}

interface ICore {
    flight: number,
    core: {
        reuse_count: number,
        status: string
    }
}

interface IRocket {
    rocket_name: string,
    first_stage: {
        cores: ICore[]
    },
    second_stage: {
        payloads: IPayload[]
    }
}

interface IPayload {
    payload_type: string,
    payload_mass_kg: number,
    payload_mass_lbs: number
}