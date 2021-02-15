const products: Array<{
    name: string;
    description: string;
    price: number;
    image: string;
    type: string;
}> = [
        {
            name: "Hair cut",
            description: "High quality wigs, hair cuts, and hair treatment. Cutting, painting, tinting and Gelling all for the same price ",
            price: 20,
            image: "https://business.bridgeafrica.info/assets/img/portfolio/media3.png",
            type: "service"
        },
        {
            name: "MacBook Air",
            description: "Systems with M1 now wake instantly. Everyday tasks like launching apps are nearly instantaneous",
            price: 899,
            image: "https://www.apple.com/v/mac/m1/a/image/overview/compare_macbook_air__f1lwdltre7u6_large.jpg",
            type: "product"
        },
        {
            name: "MI 10 Pro",
            description: "MI's latest monster device with 108MP quad camera with depth and range sensors, long battery life and improved performance",
            price: 599,
            image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi-10-pro-5g-2.jpg",
            type: "product"
        },
        {
            name: "MI Band 5",
            description: "11 professional sports modes: the more you move, the more weight you lose. dynamic color switch and voice control",
            price: 599,
            image: "https://i01.appmifile.com/webfile/globalimg/mi-band-5/image4.jpg",
            type: "product"
        }
    ]

export default products;
