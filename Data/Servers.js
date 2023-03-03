import disCordSmall from "../assets/discord_mini_icon.svg";
import newLine from "../assets/new_line.png";
import plus from "../assets/plus.svg";


const servers = [
    {
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
        name: "Code Damn",
        DP: `${newLine}`,
        items: [
            { name: "algorithms" },
            { name: "collaborators" },
            { name: "blogging" },
            { name: "course ideas" },
            { name: "machine learning" },
            { name: "machine learning" },
            { name: "machine learning" },
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
        linkTo: "/codedamn"
    },
    {
        name: "Add a Server",
        DP: `${plus}`,
        linkTo: "/addserver"
    },
    {
        name: "Explore Public Servers",
        DP: `${disCordSmall}`,
        linkTo: "/explore_public_servers"
    },
    {
        name: "Download Apps",
        DP: `${disCordSmall}`,
        linkTo: "/download_apps"
    },
]

export default servers;