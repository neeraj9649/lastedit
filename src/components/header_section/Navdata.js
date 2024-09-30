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
                    {name:"Blockchain IOT Development"},
                    {name:"Blockchain Game Development"},
                    {name:"Blockchain Consulting Services"},
                    {name:"DApp Development"},
                    {name:"Hyperledger Blockchain Development"}
                    ]
            }
        ]
    },
    {
        id:3,
        menu:"Our Solutions",
        title:"Our Services",
        src:"#",
        data:[
            {
                id:1,
                subtitle:true,
                title:"Cryptocurrency Development",
                name:[
                    {name:"ICO Development"},
                    {name:"STO Development"},
                    {name:"Smart Contract Development"},
                    {name:"Token/coin Development"},
                    {name:"Cryptocurrency Development"},
                    {name:"Cryptocurrency Exchange Development"},
                    {name:"Crypto Wallet Development"}
                    ]
            },
            {
                id:2,
                subtitle:true,
                title:"Digital Marketing",
                name:[
                    {name:"Search Engine Optimization (SEO)"},
                    {name:"App Store Optimization"},
                    {name:"ICO Marketing"}                   
                    ]
            },
            {
                id:3,
                subtitle:true,
                title:"Game Development",
                name:[
                    {name:"Game Development Services"}            
                ]
            },
            {
                id:4,
                subtitle:true,
                title:"Website Development",
                name:[
                    {name:"Website Development"},
                    {name:"Software Development"},
                    {name:"Mobile Application Development"},
                    {name:"Ecommerce Solutions"}                 
                    ]
            }
        ]
    },
    
    {
        id:4,
        menu:"Contact Us"
    }
    
];

export default navlinks;