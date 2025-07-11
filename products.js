const products = [
    {
        id:1,
        img:'img/products/f1.jpg',
        brand:'Louis Phillipe',
        productName:'Beach T Shirt',
        price:'$36',
        star:3,
        proThumbnailDescription:`Stay comfortable with this everyday essential made from soft 100% cotton. The Fruit of the Loom Crew T-shirt features a reinforced neckline, durable stitching, and a classic fit for ease of movement. Ideal for layering or casual wear, it delivers reliable quality and value in one package.`
    },
    {
        id:2,
        img:'img/products/f2.jpg',
        brand:'Adidas',
        productName:'Slinger Shirt',
        price:'$48',
        star:4,
        proThumbnailDescription:`Made with UA Tech™ fabric, this performance tee is quick-drying, ultra-soft, and has a more natural feel. With a streamlined fit and moisture-wicking properties, it’s perfect for training or any active lifestyle. The anti-odor technology keeps you fresh all day long.`
    },
    {
        id:3,
        img:'img/products/f3.jpg',
        brand:'Armani',
        productName:'PartyWear Half Sleeves',
        price:'$51',
        star:2,
        proThumbnailDescription:`Crafted with 100% ComfortSoft cotton, the Armani Tagless T-shirt offers a soft touch and all-day breathability. Its lay-flat collar keeps its shape wash after wash, while the tag-free design enhances comfort. The classic fit makes it ideal for layering or solo wear, and it comes in a wide array of versatile colors.`
    },
    {
        id:4,
        img:'img/products/n1.jpg',
        brand:'Peter England',
        productName:'Formal Shirt',
        price:'$18',
        star:3,
        proThumbnailDescription:`Add sophistication to your casual wardrobe with this Peter England Polo, crafted from premium 100% cotton pique. The breathable fabric, ribbed collar, and iconic flag logo make this a polished yet comfortable option for any day of the week.`
    },
    {
        id:5,
        img:'img/products/n3.jpg',
        brand:'Armani',
        productName:'Flipper Trends',
        price:'$70',
        star:4,
        proThumbnailDescription:`Designed for weekend outings, this Armani shirt features micro prints on smooth cotton fabric. The structured collar, adjustable cuffs, and curved hem offer timeless style with a playful twist.`
    },
    {
        id:6,
        img:'img/products/n5.jpg',
        brand:'Puma',
        productName:'Blue Formals',
        price:'$35',
        star:2,
        proThumbnailDescription:`Crafted from fine poplin cotton, this Puma shirt provides a sharp look with clean lines and stretch comfort. The slim-fit silhouette and muted color palette make it an essential choice for office-ready wardrobes.`
    },
    {
        id:7,
        img:'img/products/f7.jpg',
        brand:'Amazon',
        productName:'Amazon clothing',
        price:'$10',
        star:3,
        proThumbnailDescription:`Designed for movement, Amazon Pants are made with sweat-wicking fabric that keeps you dry and focused. The slim-tapered leg and adjustable waistband offer a secure fit, while zippered pockets keep essentials safe. Ideal for workouts or athleisure wear.`
    },
    {
        id:8,
        img:'img/products/f8.jpg',
        brand:'airZip',
        productName:'Studded Top',
        price:'$36',
        star:3,
        proThumbnailDescription:`Stay comfortable with this everyday essential made from soft 100% cotton. The Fruit of the Loom Crew T-shirt features a reinforced neckline, durable stitching, and a classic fit for ease of movement. Ideal for layering or casual wear, it delivers reliable quality and value in one package.`
    },
    {
        id:9,
        img:'img/products/n1.jpg',
        brand:'Lacoste',
        productName:'Lacoste Formals',
        price:'$46',
        star:3,
        proThumbnailDescription:`This full-sleeve shirt from Lacoste offers a tailored slim fit and soft brushed cotton for all-day wear. With refined check patterns, button-down collar, and contrast cuffs, it’s a standout piece for smart-casual ensembles.`
    },
    {
        id:10,
        img:'img/products/n5.jpg',
        brand:'Louis Phillipe',
        productName:'Shirts Trimmed',
        price:'$24',
        star:3,
        proThumbnailDescription:`This full-sleeve shirt from Louis Philippe offers a tailored slim fit and soft brushed cotton for all-day wear. With refined check patterns, button-down collar, and contrast cuffs, it’s a standout piece for smart-casual ensembles.`
    },
    {
        id:11,
        img:'img/products/f1.jpg',
        brand:'Nike',
        productName:'Summer T Shirts',
        price:'$36',
        star:3,
        proThumbnailDescription:`Crafted from 100% bio-washed cotton, this Nike tee features quirky, high-definition prints and a soft, breathable texture. The regular fit ensures ease of movement while the ribbed neck adds structure to the silhouette.`
    },
    {
        id:12,
        img:'img/products/f2.jpg',
        brand:'Pawshop',
        productName:'Paws T-Shirts',
        price:'$45',
        star:3,
        proThumbnailDescription:`Tailored from high-quality combed cotton, this PawShop t-shirt delivers all-day comfort with a breathable design and a snug, athletic fit. The reinforced crew neckline ensures shape retention, making it an ideal pick for casual outings or layering.`
    },
    {
        id:13,
        img:'img/products/n4.jpg',
        brand:'US Polo',
        productName:'Beaming Pattern Shirt',
        price:'$18',
        star:1,
        proThumbnailDescription:`Combining minimalism and quality, this US Polo t-shirt features soft cotton jersey fabric and a relaxed fit. Designed with clean lines and available in muted tones, it offers versatile style for a laid-back urban look.`
    },
    {
        id:14,
        img:'img/products/f5.jpg',
        brand:'UCB',
        productName:'Shirts All-Weather',
        price:'$36',
        star:5,
        proThumbnailDescription:`Made from 100% ring-spun cotton, this UCB Softstyle tee offers a lighter, softer feel perfect for everyday wear. With a modern classic fit, double-needle stitched sleeves, and a tear-away label, it’s designed for style and comfort in equal measure.`
    },
    {
        id:15,
        img:'img/products/f8.jpg',
        brand:'Zara',
        productName:'Summer Lightwear',
        price:'$36',
        star:3,
        proThumbnailDescription:`This lightweight Zara tee, made from sustainably sourced cotton, features subtle prints and a semi-fitted design. Its short sleeves, soft texture, and contemporary aesthetic make it a wardrobe essential for seasonal transitions.`
    },
    {
        id:16,
        img:'img/products/n3.jpg',
        brand:'Van Huesen',
        productName:'T Shirts',
        price:'$50',
        star:4,
        proThumbnailDescription:`Crafted from fine poplin cotton, this Van Heusen shirt provides a sharp look with clean lines and stretch comfort. The slim-fit silhouette and muted color palette make it an essential choice for office-ready wardrobes.`
    },
    {
        id:17,
        img:'img/products/f4.jpg',
        brand:'Max',
        productName:'Shirts HolidayWear',
        price:'$59',
        star:4,
        proThumbnailDescription:`Made with UA Tech™ fabric, this performance tee is quick-drying, ultra-soft, and has a more natural feel. With a streamlined fit and moisture-wicking properties, it’s perfect for training or any active lifestyle. The anti-odor technology keeps you fresh all day long.`
    },
    {
        id:18,
        img:'img/products/n1.jpg',
        brand:'Jubilee',
        productName:' Shirts',
        price:'$108',
        star:5,
        proThumbnailDescription:`This full-sleeve shirt from Louis Philippe offers a tailored slim fit and soft brushed cotton for all-day wear. With refined check patterns, button-down collar, and contrast cuffs, it’s a standout piece for smart-casual ensembles.`
    },
    {
        id:19,
        img:'img/products/n4.jpg',
        brand:'allWear',
        productName:'Breeps All',
        price:'$36',
        star:3,
        proThumbnailDescription:`Combining minimalism and quality, this allWear t-shirt features soft cotton jersey fabric and a relaxed fit. Designed with clean lines and available in muted tones, it offers versatile style for a laid-back urban look.`
    },
    {
        id:20,
        img:'img/products/f1.jpg',
        brand:'Nike',
        productName:'Trends Shirts',
        price:'$36',
        star:3,
        proThumbnailDescription:`This lightweight Nike tee, made from sustainably sourced cotton, features subtle prints and a semi-fitted design. Its short sleeves, soft texture, and contemporary aesthetic make it a wardrobe essential for seasonal transitions`
    },
    {
        id:21,
        img:'img/products/f5.jpg',
        brand:'newWear',
        productName:'Polo T Shirts',
        price:'$36',
        star:3,
        proThumbnailDescription:`Crafted from 100% bio-washed cotton, this newWear tee features quirky, high-definition prints and a soft, breathable texture. The regular fit ensures ease of movement while the ribbed neck adds structure to the silhouette.`
    },
    {
        id:22,
        img:'img/products/n4.jpg',
        brand:'Peter England',
        productName:'Half Sleeves',
        price:'$36',
        star:3,
        proThumbnailDescription:`Designed for weekend outings, this Peter England shirt features micro prints on smooth cotton fabric. The structured collar, adjustable cuffs, and curved hem offer timeless style with a playful twist.`
    },
    {
        id:23,
        img:'img/products/f1.jpg',
        brand:'blackSum',
        productName:'Printed T Shirts',
        price:'$110',
        star:3,
        proThumbnailDescription:`Combining minimalism and quality, this blackSum t-shirt features soft cotton jersey fabric and a relaxed fit. Designed with clean lines and available in muted tones, it offers versatile style for a laid-back urban look.`
    },
    {
        id:24,
        img:'img/products/n8.jpg',
        brand:'Chola Sons',
        productName:'Full Black',
        price:'$56',
        star:3,
        proThumbnailDescription:`Made from 100% ring-spun cotton, this Chola tee offers a lighter, softer feel perfect for everyday wear. With a modern classic fit, double-needle stitched sleeves, and a tear-away label, it’s designed for style and comfort in equal measure.`
    },{
        id:25,
        img:'img/products/n2.jpg',
        brand:'Air Stripes',
        productName:'Casuals',
        price:'$36',
        star:3,
        proThumbnailDescription:`Woven from premium cotton, this Air Stripes shirt features a crisp finish with a slim cut, ideal for boardroom polish. With a spread collar, buttoned cuffs, and a wrinkle-resistant touch, it blends sophistication with ease.`
    },
    {
        id:26,
        img:'img/products/n7.jpg',
        brand:'Under Armour',
        productName:'Winter Jacket ',
        price:'$36',
        star:3,
        proThumbnailDescription:`Engineered for comfort, the Champion Powerblend Hoodie features a soft cotton/polyester fleece blend that resists pilling and shrinkage. With durable cover-stitching, a roomy front pouch, and iconic logo detailing, it’s the go-to choice for warmth without the bulk.

`
    },
    {
        id:27,
        img:'img/products/f7.jpg',
        brand:'noBrand',
        productName:'Pants',
        price:'$16',
        star:4,
        proThumbnailDescription:`Designed for movement, noBrand Dri-FIT Training Pants are made with sweat-wicking fabric that keeps you dry and focused. The slim-tapered leg and adjustable waistband offer a secure fit, while zippered pockets keep essentials safe. Ideal for workouts or athleisure wear.`
    },
    {
        id:28,
        img:'img/products/f1.jpg',
        brand:'Myntra',
        productName:'Lightweight Clothing',
        price:'$12',
        star:2,
        proThumbnailDescription:`Add sophistication to your casual wardrobe with this myntra Polo, crafted from premium 100% cotton pique. The breathable fabric, ribbed collar, and iconic flag logo make this a polished yet comfortable option for any day of the week.`
    },
    {
        id:29,
        img:'img/products/n2.jpg',
        brand:'Armani',
        productName:'Shirts',
        price:'$36',
        star:3,
        proThumbnailDescription:`This full-sleeve shirt from Armani offers a tailored slim fit and soft brushed cotton for all-day wear. With refined check patterns, button-down collar, and contrast cuffs, it’s a standout piece for smart-casual ensembles.`
    },
    {
        id:30,
        img:'img/products/n1.jpg',
        brand:'Chola and Sons.',
        productName:'Blustone Shirts',
        price:'$27',
        star:3,
        proThumbnailDescription:`Crafted from fine poplin cotton, this Chola shirt provides a sharp look with clean lines and stretch comfort. The slim-fit silhouette and muted color palette make it an essential choice for office-ready wardrobes.`
    },
    {
        id:31,
        img:'img/products/n3.jpg',
        brand:'Calvin Klein',
        productName:'BeachWear',
        price:'$30',
        star:3,
        proThumbnailDescription:`This full-sleeve shirt from Calvin Klein offers a tailored slim fit and soft brushed cotton for all-day wear. With refined check patterns, button-down collar, and contrast cuffs, it’s a standout piece for smart-casual ensembles.`
    }

];
export default products;