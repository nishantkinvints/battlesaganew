import Image from 'next/image';
import React from 'react'

import gameimage1 from '../assets/resume-1.jpg'
import gameimage2 from '../assets/resume-2.jpg'
import gameimage3 from '../assets/resume-3.jpg'
import gameimage4 from '../assets/resume-4.jpg'

import Sectiontitle from '../components/Sectiontitle'

const thegamedata = [
    {
        id: "thegame_data_1",
        game_title: "BUILD YOUR OWN ISLAND",
        game_description: "Build yourself a magical city and fill it with buildings, habitats, and dragons!",
        game_image: gameimage1,
    },
    {
        id: "thegame_data_2",
        game_title: "FEED AND EVOLVE",
        game_description: "Feed your dragons and make them evolve into strong beasts! You'll be able to train them and teach them new skills.",
        game_image: gameimage2,
    },
    {
        id: "thegame_data_3",
        game_title: "COLLECT 100'S OF DRAGONS",
        game_description: "Collect over 600 dragons of different elements and rarities to complete the Dragon Book. You can become the top collector in the game!",
        game_image: gameimage3,
    },
    {
        id: "thegame_data_4",
        game_title: "BATTLE AND WIN",
        game_description: "Battle against other players in the Dragon Leagues and face exciting challenges in the tournaments to win lots of rewards!",
        game_image: gameimage4,
    },
]

const Thegame = () => {
    return (
        <div className="thegame_data_wrap_main">
            <div className="container">
            <Sectiontitle title="The Game"/>
                {
                    thegamedata.map((val, index) => {
                        return (
                            <div className="thegame_data_wrap" key={val.id}>
                                <div className="thegame_col_img">
                                    <Image src={val.game_image} alt="dark"/>
                                </div>
                                <div className="thegame_dec">
                                    <h3>{val.game_title}</h3>
                                    <p>{val.game_description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Thegame;
