import disCordSmall from "../assets/discord_mini_icon.svg";
import newLine from "../assets/new_line.png";
import plus from "../assets/plus.svg";


const servers = [
    {
        id: 121,
        name: "Direct Messages",
        DP: `${disCordSmall}`,
        items: [
            { name: "Alok" },
            { name: "Shivanand" },
            { name: "Mang" },
            { name: "John" },
        ],
        linkTo: "/dashboard"
    },
    {
        id: 122,
        name: "Code Damn",
        DP: `${newLine}`,
        items: [
            { name: "algorithms" },
            { name: "collaborators" },
            { name: "blogging" },
            { name: "course ideas" },
            { name: "machine learning" },
            { name: "Node Js" },
            { name: "JavaScript" },
        ],
        onlineUsers: [
            "Milad",
            "Batman",
            "tony stark",
            "Bruce Bannner",
            "Rachael",
            "Monica",
            "Chandler",
            "Joey 😂",
            "Dr. Ross Geller",
            "Phoebe buffet",
            "Gunther",
            "Chandler's Father",
            "Ugly Naked Man",
            "Smelly Cat"
        ],
        linkTo: `/server/122`
    },
    {
        id: 123,
        name: "Add a Server",
        DP: `${plus}`,
        linkTo: "/addserver"
    },
    {
        id: 124,
        name: "Explore Public Servers",
        DP: `${disCordSmall}`,
        linkTo: "/explore_public_servers"
    },
    {
        id: 125,
        name: "Download Apps",
        DP: `${disCordSmall}`,
        linkTo: "/download_apps"
    },
]

export default servers;