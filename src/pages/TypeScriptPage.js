import React from 'react';
import {ILaunche} from '../interfaces/index.interfaces.ts'
import {IUser} from '../interfaces/functional.interfaces.ts'

function TypeScriptPage() {
    const user: IUser = {name: 'Max', age: 18, gender: 'Male'}
    const sum = (a: number, b: number): number => a + b
    const showSum = (a: number, b: number): void => console.log(a + b)
    const incAge = (someUser: IUser, inc: number): IUser => {
        someUser.age += inc
        return someUser
    }
    const launche: ILaunche = {
        mission_name: 'Starlink-15 (v1.0)',
        launch_date_local: '2020-10-24T11:31:00-04:00',
        launch_site: {site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'},
        links: {article_link: null, video_link: 'https://youtu.be/J442-ti-Dhg'},
        rocket: {
            rocket_name: 'Falcon 9',
            first_stage: {
                cores: [{
                    core: {reuse_count: 6, status: 'unknown'}
                }]
            },
            second_stage: {
                payloads: [
                    {
                        payload_mass_kg: 33951.2,
                        payload_mass_lbs: 15400,
                        payload_type: 'Satellite'
                    }
                ]
            }
        }

    }
    console.log(launche)
    console.log('User: ', user)
    console.log('sum (1, 2) = ' )
    console.log(sum(1, 2));
    console.log('showSum (2,3) = ')
    showSum(2,3)
    console.log('incAge (user, 2) = ')
    console.log(incAge(user, 2))

    return (
        <div className={'card mt-5 p-2'}>
            <div className={'text-center'}>
                Mission name: {launche.mission_name}
            </div>
            <div className={'text-center'}>
                Launch date: {launche.launch_date_local}
            </div>
            <div className={'text-center'}>
                Site name: {launche.launch_site.site_name_long}
            </div>
            <a className={'text-center'} href={`${launche.links.video_link}`}
               target={'_blank'}>Video link: {launche.links.video_link}
            </a>
            <a className={'text-center'} href={`${launche.links.article_link}`}
               target={'_blank'}>Article link: {launche.links.article_link}
            </a>
            <div className={'text-center'}>
                Rocket name: {launche.rocket.rocket_name}
            </div>
            <div className={'text-center'}>
                status: {launche.rocket.first_stage.cores[0].core.status}
            </div>
            <div className={'text-center'}>
                reuse: {launche.rocket.first_stage.cores[0].core.reuse_count}
            </div>
            <div className={'text-center'}>
                payload_type: {launche.rocket.second_stage.payloads[0].payload_type}
            </div>
            <div className={'text-center'}>
                payload_mass_kg: {launche.rocket.second_stage.payloads[0].payload_mass_kg}
            </div>
            <div className={'text-center'}>
                payload_mass_lb: {launche.rocket.second_stage.payloads[0].payload_mass_lbs}
            </div>
        </div>
    );
}

export default TypeScriptPage;