const navlinks = [
    {
        id:1,
        menu:"Company",
        title:"About Versai Technology",
        src:"#",
        submenu:[
            {
                id:1,
                sublinks:[
                    {name:"About Us"},
                    {name:"Contact Us"},
                    {name:"Gallery"},
                    ]
            }
        ]
    },
    {
        id:2,
        menu:"Blockchain",
        title:"Blockchain Development Services",
        src:"#",
        submenu:[
            {
                id:1,
                sublinks:[
                    {name:"Blockchain Development"},
                    {name:"Supply Chain Developments"},
                    {name:"DeFI Development"},
                    {name:"Private Blockchain Development"},
                    {name:"Blockchain POC Development"}
                    ]
            },
            {
                id:2,
                name:[
                    "Blockchain IOT Development",
                    "Blockchain Game Development",
                    "Blockchain Consulting Services",
                    "DApp Development",
                    "Hyperledger Blockchain Development"
                    ]
            }
        ]
    },
    {
        id:3,
        name:"Our Solutions",
        title:"Our Services",
        src:"#",
        data:[
            {
                id:1,
                subtitle:true,
                title:"Cryptocurrency Development",
                name:[
                    "ICO Development",
                    "STO Development",
                    "Smart Contract Development",
                    "Token/coin Development",
                    "Cryptocurrency Development",
                    "Cryptocurrency Exchange Development",
                    "Crypto Wallet Development"
                    ]
            },
            {
                id:2,
                subtitle:true,
                title:"Digital Marketing",
                name:[
                    "Search Engine Optimization (SEO)",
                    "App Store Optimization",
                    "ICO Marketing"                   
                    ]
            },
            {
                id:3,
                subtitle:true,
                title:"Game Development",
                name:[
                    "Game Development Services"            
                ]
            },
            {
                id:4,
                subtitle:true,
                title:"Website Development",
                name:[
                    "Website Development",
                    "Software Development",
                    "Mobile Application Development",
                    "Ecommerce Solutions"                 
                    ]
            }
        ]
    },
    
    {
        id:4,
        name:"Contact Us"
    }
    
];

export default navlinks;