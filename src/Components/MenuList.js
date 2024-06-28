import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast } from 'react-icons/fa'
import { BiPulse } from 'react-icons/bi'
import { BsHouseFill, BsJournalAlbum } from 'react-icons/bs'


const MenuList = [
    {
        id: 1,
        icon: <BsHouseFill />,
        name: "Home"
    },
    {
        id: 2,
        icon: <BiPulse />,
        name: "Discover"
    },
    {
        id: 3,
        icon: <FaBroadcastTower />,
        name: "Radio"
    },
    {
        id: 4,
        icon: <FaMicrophoneAlt />,
        name: "Artists"
    },
    {
        id: 5,
        icon: <BsJournalAlbum />,
        name: "Albums"
    },
    {
        id: 6,
        icon: <FaPodcast />,
        name: "Podcasts"
    }
]


export default MenuList
