import { Component } from '@angular/core';
interface ImageCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

interface Product {
  sold: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: ImageCategory;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

@Component({
  selector: 'app-recommended-products',
  imports: [],
  templateUrl: './recommended-products.component.html',
  styleUrl: './recommended-products.component.css'
})
export class RecommendedProductsComponent {
  productList:Product[]= [
    {
      "sold": 276,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678301372105-4.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678301372104-3.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678301372104-2.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678301372104-1.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678301372105-5.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678301372106-6.jpeg"
      ],
      "subcategory": [
      {
      "_id": "6407f3a8b575d3b90bf957e2",
      "name": "Laptops & Accessories",
      "slug": "laptops-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 6,
      "_id": "6408d8bc6406cd15828e8f00",
      "title": "5520-G15 Gaming Laptop With 15.6 Inch Intel Core i7-12700H/16GB RAM/512 GB SSD/6 GB Nvidia GeForce RTX 3060 Series/Ubuntu English Black/Dark Shadow Grey",
      "slug": "5520-g15-gaming-laptop-with-15.6-inch-intel-core-i7-12700h16gb-ram512-gb-ssd6-gb-nvidia-geforce-rtx-3060-seriesubuntu-english-blackdark-shadow-grey",
      "description": "NVIDIA GeForce RTX 3060, 6 GB GDDR6\n15.6\", FHD 1920x1080, 120Hz, Non-Touch, AG, WVA, LED-Backlit, 300 nit, Narrow Border\n16 GB, 2 x 8 GB, DDR5, 4800 MHz, dual-channel\n512GB M.2 PCIe NVMe Solid State Drive, Nahimic 3D Audio\nOffice Home & Student 2021, US English orange qwerty backlit keyboard with numeric keypad and G-key",
      "quantity": 253,
      "price": 42960,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678301372025-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089faf24b25627a25315cd",
      "name": "Dell",
      "slug": "dell",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286767914.png"
      },
      "ratingsAverage": 4.3,
      "createdAt": "2023-03-08T18:49:32.940Z",
      "updatedAt": "2024-12-28T08:56:07.589Z",
      "id": "6408d8bc6406cd15828e8f00"
      },
      {
      "sold": 176,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678301081467-3.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678301081467-2.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678301081468-4.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678301081466-1.jpeg"
      ],
      "subcategory": [
      {
      "_id": "6407f3a8b575d3b90bf957e2",
      "name": "Laptops & Accessories",
      "slug": "laptops-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 8,
      "_id": "6408d79a6406cd15828e8ef8",
      "title": "Laptop Ideapad-Gaming-3-15Imh05 15.6 Inch FHD Intel Core i7 10750H 16GB RAM 1TB HHD + 256GB SSD 4GB Nvidia Geforce Gtx 1650 Ti DDR6 DosOnyx English/Arabic Black",
      "slug": "laptop-ideapad-gaming-3-15imh05-15.6-inch-fhd-intel-core-i7-10750h-16gb-ram-1tb-hhd-+-256gb-ssd-4gb-nvidia-geforce-gtx-1650-ti-ddr6-dosonyx-englisharabic-black",
      "description": "Processor Information 10Gen Intel CoreI7-10750H 12M Cache, Up To 5.00 Ghz\nGraphic Card Nvidia Geforce Gtx 1650It 4 Gb\nStereo Speakers, 1.5W X2, Dolby Audio",
      "quantity": 258,
      "price": 27599,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678301081374-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089f8b24b25627a25315ca",
      "name": "Lenovo",
      "slug": "lenovo",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286730980.png"
      },
      "ratingsAverage": 4.8,
      "createdAt": "2023-03-08T18:44:42.035Z",
      "updatedAt": "2024-12-24T11:26:07.317Z",
      "id": "6408d79a6406cd15828e8ef8"
      },
      {
      "sold": 271,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678300769732-3.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678300769731-2.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678300769732-4.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678300769731-1.jpeg"
      ],
      "subcategory": [
      {
      "_id": "6407f3a8b575d3b90bf957e2",
      "name": "Laptops & Accessories",
      "slug": "laptops-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 8,
      "_id": "6408d6626406cd15828e8ef2",
      "title": "IdeaPad Gaming 3 15IHU6 Laptop With 15.6-inch Display / Intel Core i7-11370H Processor /16GB RAM / 512GB SSD / Nvidia GeForce RTX 3050 4GB Series / DOS / English/Arabic Shadow Black",
      "slug": "ideapad-gaming-3-15ihu6-laptop-with-15.6-inch-display-intel-core-i7-11370h-processor-16gb-ram-512gb-ssd-nvidia-geforce-rtx-3050-4gb-series-dos-englisharabic-shadow-black",
      "description": "NVIDIA GeForce RTX 3050 4GB GDDR6, Boost Clock 1500 / 1740MHz, TGP 90W\nUp to two drives, 1x 2.5\" HDD + 1x M.2 2242 SSD or 1x M.2 2242/2280 SSD + 1x M.2 2242 SSD\n512GB SSD M.2 2242 PCIe 3.0x4 NVMe",
      "quantity": 258,
      "price": 29699,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678300769642-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089f8b24b25627a25315ca",
      "name": "Lenovo",
      "slug": "lenovo",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286730980.png"
      },
      "ratingsAverage": 4.8,
      "createdAt": "2023-03-08T18:39:30.692Z",
      "updatedAt": "2024-12-30T16:02:59.948Z",
      "id": "6408d6626406cd15828e8ef2"
      },
      {
      "sold": 253,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678300420239-1.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678300420239-2.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678300420240-3.jpeg"
      ],
      "subcategory": [
      {
      "_id": "6407f3a8b575d3b90bf957e2",
      "name": "Laptops & Accessories",
      "slug": "laptops-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 45,
      "_id": "6408d5046406cd15828e8eec",
      "title": "IdeaPad 5 Laptop with 15.6 inch Core i5-1135G7 8 GB ram 512 GB SSD 4 GB Intel Xe Graphics Windows 11 English/Arabic Abyss Blue",
      "slug": "ideapad-5-laptop-with-15.6-inch-core-i5-1135g7-8-gb-ram-512-gb-ssd-4-gb-intel-xe-graphics-windows-11-englisharabic-abyss-blue",
      "description": "Screen size 15.6 inch\nGraphics Card Version Intel Iris Xe Graphics",
      "quantity": 258,
      "price": 20999,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678300419873-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089f8b24b25627a25315ca",
      "name": "Lenovo",
      "slug": "lenovo",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286730980.png"
      },
      "ratingsAverage": 4.2,
      "createdAt": "2023-03-08T18:33:40.755Z",
      "updatedAt": "2024-12-06T23:01:25.430Z",
      "id": "6408d5046406cd15828e8eec"
      },
      {
      "sold": 147,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678299872467-2.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678299872466-1.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678299872467-3.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678299872468-4.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678299872468-5.jpeg"
      ],
      "subcategory": [
      {
      "_id": "6407f39bb575d3b90bf957df",
      "name": "TVs, Satellites & Accessories",
      "slug": "tvs-satellites-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 45,
      "_id": "6408d2e16406cd15828e8ee6",
      "title": "43 Inch LED TV Full HD with Built-In Receiver, 2 HDMI and 2 USB Inputs 43L3965EA Black",
      "slug": "43-inch-led-tv-full-hd-with-built-in-receiver-2-hdmi-and-2-usb-inputs-43l3965ea-black",
      "description": "Analyzing original content with an advanced algorithm Ultra Clean View gives you higher quality images\nWatch your favourite content with natural colours that deliver details as crisp as the real thing\nThis beautifully slim design melts into any existing décor and elevates the style without taking it over\nThe sleek One Remote Control keeps it simple\nDelivers superior picture quality with enhanced color purity\nEnjoy rich, flawless, multi-dimensional audio as the built-in speakers on your TV deliver sound from all angles\nMaintains accurate color, even from the sides, and allows everyone to enjoy the realistic picture\nWe think inside, outside and about the box. Thus, our packaging lives up to the brand image and the quality of the product",
      "quantity": 250,
      "price": 8999,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678299872385-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089aa924b25627a2531576",
      "name": "Toshiba",
      "slug": "toshiba",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285481289.png"
      },
      "ratingsAverage": 4.2,
      "createdAt": "2023-03-08T18:24:33.379Z",
      "updatedAt": "2024-12-25T17:38:44.196Z",
      "id": "6408d2e16406cd15828e8ee6"
      },
      {
      "sold": 91,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678299333084-2.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678299333084-3.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678299333084-4.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678299333083-1.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678299333085-5.jpeg"
      ],
      "subcategory": [
      {
      "_id": "6407f39bb575d3b90bf957df",
      "name": "TVs, Satellites & Accessories",
      "slug": "tvs-satellites-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 68,
      "_id": "6408d0c56406cd15828e8ee0",
      "title": "50-Inch 4K Smart Frameless D-LED TV 50U5965EA Black - WE Offer (100 GB Free for 3 Months) 50U5965EA Black",
      "slug": "50-inch-4k-smart-frameless-d-led-tv-50u5965ea-black-we-offer-(100-gb-free-for-3-months)-50u5965ea-black",
      "description": "Delivers rich colors and a strong contrast ratio that remain consistent even at wide viewing angles\nSupports many premium content choices, all optimized with scene-by-scene picture adjustment\nBreathtaking clarity and fine picture details that will amaze, even when viewed up close,\nSmart tV screen size 50 Inch dimensions 1127 x 661 x 73 mm hdmi ports 3 USB Ports 2 Internet connection WiFi ethernet hd\nIn addition to technology that gives you endless color accuracy to enjoy the details of every scene It comes with technology that ensures that you are completely immersed in movies and programs to get amazing entertainment\nEnjoy rich, flawless, multi-dimensional audio as the built-in speakers on your TV deliver sound from all angles\nMaintains accurate color, even from the sides, and allows everyone to enjoy the realistic picture\nExceptional gaming performance with quick response action, colour and detail of brings everything you watch is clear, bright and incredibly realistic",
      "quantity": 200,
      "price": 11349,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678299332992-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089aa924b25627a2531576",
      "name": "Toshiba",
      "slug": "toshiba",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285481289.png"
      },
      "ratingsAverage": 4.3,
      "createdAt": "2023-03-08T18:15:33.870Z",
      "updatedAt": "2024-12-30T06:07:19.797Z",
      "id": "6408d0c56406cd15828e8ee0"
      },
      {
      "sold": 92,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298856237-2.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298856237-3.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298856238-5.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298856236-1.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298856238-7.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298856238-4.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298856239-8.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298856238-6.jpeg"
      ],
      "subcategory": [
      {
      "_id": "6407f39bb575d3b90bf957df",
      "name": "TVs, Satellites & Accessories",
      "slug": "tvs-satellites-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 10,
      "_id": "6408cee96406cd15828e8eda",
      "title": "Shield LED TV 43 Inch Full HD With 2 HDMI and 2 USB Inputs 43EL8250E-A Black",
      "slug": "shield-led-tv-43-inch-full-hd-with-2-hdmi-and-2-usb-inputs-43el8250e-a-black",
      "description": "Harmonizes with your space and add sophisticated ambience\nMaintains accurate color, even from the sides, and allows everyone to enjoy the realistic picture\nHigh quality materials ensures durability and longevity\nColor-saturated picture even while looking at the screen from sideways. The audio technology ensures an incredible sound surround and acoustic experience\nWe think inside, outside and about the box. Thus, our packaging lives up to the brand image and the quality of the product\nContrast enhancer brings flat images to life by adjusting contrast and delivering stunning image quality with more depth\nEnhanced details for clearer photos ultra clean view theme delivers high-quality images with less noise, while using an advanced algorithm to analyze original content and provide enhanced detail\nExceptional gaming performance with quick response action, colour and detail of brings everything you watch is clear, bright and incredibly realistic",
      "quantity": 278,
      "price": 9099,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678298856153-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089f5824b25627a25315c7",
      "name": "SONY",
      "slug": "sony",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286680638.png"
      },
      "ratingsAverage": 4.3,
      "createdAt": "2023-03-08T18:07:37.051Z",
      "updatedAt": "2024-12-16T21:49:50.655Z",
      "id": "6408cee96406cd15828e8eda"
      },
      {
      "sold": 111,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298635455-3.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298635454-1.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298635455-2.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298635455-4.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298635456-5.jpeg"
      ],
      "subcategory": [
      {
      "_id": "6407f39bb575d3b90bf957df",
      "name": "TVs, Satellites & Accessories",
      "slug": "tvs-satellites-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 11,
      "_id": "6408ce0c6406cd15828e8ed4",
      "title": "TORNADO Smart LED TV 43 Inch Full HD With Built-In Receiver, 2 HDMI and 2 USB Inputs 43ES1500E Black - WE Offer (50 GB Free for 1 Month) 43ES1500E Black",
      "slug": "tornado-smart-led-tv-43-inch-full-hd-with-built-in-receiver-2-hdmi-and-2-usb-inputs-43es1500e-black-we-offer-(50-gb-free-for-1-month)-43es1500e-black",
      "description": "Connect With Wired and Wireless Internet\nUSB : Video - Photos - Music\nSound Modes : Standard - Music - Movies - Sports - Personal\nOn an Ultra-high-definition TV with 4 times the amount of pixels of a standard Full HD TV, you will be enjoying a clear, crisp image with more detail. The effect will be much more pronounced on larger screen sizes\nQuantum dot 4K displays produce enhanced colours and contrast compared to non-quantum dot LED displays\nHigh Dynamic Range increases the range of light levels on your TV so you can enjoy an enormous spectrum of colors and all the visual details, in even the darkest scene",
      "quantity": 270,
      "price": 8499,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678298635287-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089f5824b25627a25315c7",
      "name": "SONY",
      "slug": "sony",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286680638.png"
      },
      "ratingsAverage": 4.4,
      "createdAt": "2023-03-08T18:03:56.118Z",
      "updatedAt": "2024-12-16T23:21:13.269Z",
      "id": "6408ce0c6406cd15828e8ed4"
      },
      {
      "sold": 112,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298336132-3.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298336132-2.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298336131-1.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298336133-4.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298336133-5.jpeg"
      ],
      "subcategory": [
      {
      "_id": "6407f39bb575d3b90bf957df",
      "name": "TVs, Satellites & Accessories",
      "slug": "tvs-satellites-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 30,
      "_id": "6408cce16406cd15828e8ece",
      "title": "TORNADO LED TV 32 Inch HD With Built-In Receiver, 2 HDMI and 2 USB Inputs 32ER9300E Black",
      "slug": "tornado-led-tv-32-inch-hd-with-built-in-receiver-2-hdmi-and-2-usb-inputs-32er9300e-black",
      "description": "Viewing Angle : 178°\nUSB : Video - Photos - Music\nContrast Ratio : 1:1100\nLED TVs are more energy-efficient as these models use light emitting diodes (LED) for backlighting\nThese TVs consume less power as compared to cold cathode fluorescent lamps (CCFL), which most LCD TVs use\nThis results in a power savings of up to 30%\nDimensions ( Width x Height x Depth ) mm :- Without Stand : 733 x 433.3 x 77.1. With Stand : 733 x 469.5 x 178.2",
      "quantity": 238,
      "price": 5114,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678298336042-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089f5824b25627a25315c7",
      "name": "SONY",
      "slug": "sony",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286680638.png"
      },
      "ratingsAverage": 4.9,
      "createdAt": "2023-03-08T17:58:57.116Z",
      "updatedAt": "2024-12-20T17:04:04.404Z",
      "id": "6408cce16406cd15828e8ece"
      },
      {
      "sold": 135,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298246326-4.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298246325-1.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298246326-3.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298246325-2.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678298246327-5.jpeg"
      ],
      "subcategory": [
      {
      "_id": "6407f39bb575d3b90bf957df",
      "name": "TVs, Satellites & Accessories",
      "slug": "tvs-satellites-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 50,
      "_id": "6408cc876406cd15828e8ec8",
      "title": "TORNADO Smart LED TV 32 Inch HD With Built-In Receiver, 2 HDMI and 2 USB Inputs 32ES1500E Black - WE Offer (50 GB Free for 1 Month) 32ES1500E Black",
      "slug": "tornado-smart-led-tv-32-inch-hd-with-built-in-receiver-2-hdmi-and-2-usb-inputs-32es1500e-black-we-offer-(50-gb-free-for-1-month)-32es1500e-black",
      "description": "Connect With Wired and Wireless Internet\nUSB : Video - Photos - Music\nSound Modes : Standard - Music - Movies - Sports - Personal\nOperating System: Tornado Portal",
      "quantity": 230,
      "price": 4799,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678298246240-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089f5824b25627a25315c7",
      "name": "SONY",
      "slug": "sony",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286680638.png"
      },
      "ratingsAverage": 4.5,
      "createdAt": "2023-03-08T17:57:27.062Z",
      "updatedAt": "2024-12-17T00:22:38.479Z",
      "id": "6408cc876406cd15828e8ec8"
      },
      {
      "sold": 141,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297987206-2.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297987205-1.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297987207-3.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297987210-5.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297987209-4.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297987210-7.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297987210-6.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297987210-8.jpeg",
     
      ],
      "subcategory": [
      {
      "_id": "6407f39bb575d3b90bf957df",
      "name": "TVs, Satellites & Accessories",
      "slug": "tvs-satellites-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 25,
      "_id": "6408cb846406cd15828e8ec2",
      "title": "4K Smart LED TV 55 Inch With Android System, WiFi Connection, 3 HDMI and 2 USB Inputs KD-55X7500H Black - WE Offer (100 GB Free for 3 Months) KD-55X7500H Black",
      "slug": "4k-smart-led-tv-55-inch-with-android-system-wifi-connection-3-hdmi-and-2-usb-inputs-kd-55x7500h-black-we-offer-(100-gb-free-for-3-months)-kd-55x7500h-black",
      "description": "Experience our stunning Full HD picture quality, whatever you’re watching across all your entertainment\nDiscover a thrilling world of extraordinary clarity, whatever you're watching\nHear more from a compact speaker box with intense, focused sound\nBRAVIA is Google Cast ready so you can easily cast your favourite entertainment like YouTube from your personal device on to the stunning BRAVIA screen\nMake your listening as lifelike as your viewing. ClearAudio+ fine-tunes TV sound for an immersive experience that seems to surround you\nHigh Dynamic Range increases the range of light levels on your TV so you can enjoy an enormous spectrum of colors and all the visual details, in even the darkest scenes\nA sleek and elegant design that draws you to the purest picture\nCrafted with an effortless minimalistic style from every angle and a boundless design that sets new standards.",
      "quantity": 400,
      "price": 20483,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678297987134-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089f5824b25627a25315c7",
      "name": "SONY",
      "slug": "sony",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286680638.png"
      },
      "ratingsAverage": 4.5,
      "createdAt": "2023-03-08T17:53:08.318Z",
      "updatedAt": "2024-12-26T00:49:33.179Z",
      "id": "6408cb846406cd15828e8ec2"
      },
      {
      "sold": 106,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297580295-2.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297580294-1.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297580295-3.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297580296-4.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297580297-7.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297580296-5.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297580296-6.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297580297-8.jpeg"
      ],
      "subcategory": [
      {
      "_id": "6407f39bb575d3b90bf957df",
      "name": "TVs, Satellites & Accessories",
      "slug": "tvs-satellites-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 15,
      "_id": "6408c9ed6406cd15828e8ebc",
      "title": "Smart LED TV 50 Inch Full HD With Built-In Receiver, 2 HDMI and 2 USB Inputs KDL-50WF665 Black - WE Offer (100 GB Free for 3 Months) KDL-50WF665 Black",
      "slug": "smart-led-tv-50-inch-full-hd-with-built-in-receiver-2-hdmi-and-2-usb-inputs-kdl-50wf665-black-we-offer-(100-gb-free-for-3-months)-kdl-50wf665-black",
      "description": "Connect with wired and wireless internet\nAccess YouTube instantly with one click\nUSB Tethering seamlessly connect to internet with mobile data\nResolution:1920 x 1080\nTriluminous display maps a wider palette than most other TVs, reproducing every shade and hue",
      "quantity": 308,
      "price": 14051,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678297580201-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089f5824b25627a25315c7",
      "name": "SONY",
      "slug": "sony",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286680638.png"
      },
      "ratingsAverage": 3.9,
      "createdAt": "2023-03-08T17:46:21.050Z",
      "updatedAt": "2024-12-22T21:39:49.488Z",
      "id": "6408c9ed6406cd15828e8ebc"
      },
      {
      "sold": 111,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297344898-3.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297344898-2.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297344899-4.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297344899-5.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297344897-1.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297344899-6.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297344900-7.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678297344900-8.jpeg"
      ],
      "subcategory": [
      {
      "_id": "6407f39bb575d3b90bf957df",
      "name": "TVs, Satellites & Accessories",
      "slug": "tvs-satellites-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 29,
      "_id": "6408c9026406cd15828e8eb6",
      "title": "Smart TV 32 Inch HD LED With Built in WiFi, 2 HDMI and 2 USB Inputs KDL-32W600D Black - WE Offer (50 GB Free for 1 Month) KDL-32W600D Black",
      "slug": "smart-tv-32-inch-hd-led-with-built-in-wifi-2-hdmi-and-2-usb-inputs-kdl-32w600d-black-we-offer-(50-gb-free-for-1-month)-kdl-32w600d-black",
      "description": "32-inch HD display for stunning photo-realistic visuals\nGo online and browse movies and enjoy video channels through built-in Wi-Fi\nThe multi format USB play lets you play music, video clips and view photos\nRefresh rate technology allows fast moving action sequences to be seen with precise motion clarity\nUses a powerful model to analyze inaccuracies in speaker response by sampling the speaker frequency",
      "quantity": 308,
      "price": 6700,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678297344768-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089f5824b25627a25315c7",
      "name": "SONY",
      "slug": "sony",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286680638.png"
      },
      "ratingsAverage": 4.6,
      "createdAt": "2023-03-08T17:42:26.032Z",
      "updatedAt": "2024-12-18T19:06:26.261Z",
      "id": "6408c9026406cd15828e8eb6"
      },
      {
      "sold": 109,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678296691201-1.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678296691201-2.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678296691202-4.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678296691203-5.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678296691201-3.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678296691203-6.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678296691204-7.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678296691204-8.jpeg"
      ],
      "subcategory": [
      {
      "_id": "6407f39bb575d3b90bf957df",
      "name": "TVs, Satellites & Accessories",
      "slug": "tvs-satellites-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 98,
      "_id": "6408c674ab73fcc15c761392",
      "title": "24-Inch Full HD Curved Monitor Black",
      "slug": "24-inch-full-hd-curved-monitor-black",
      "description": "Offers a vivid display that contains everything you need\nStands for evolving office requirements\nWide viewing angles keep colors consistent no matter where you sit\nOptimizes eye comfort\nReduces harmful blue light emissions\nThis monitor's Eye Saver mode makes viewing more comfortable and less taxing on the eyes",
      "quantity": 303,
      "price": 4499,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678296691139-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089df124b25627a25315ab",
      "name": "Samsung",
      "slug": "samsung",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286321029.png"
      },
      "ratingsAverage": 4.7,
      "createdAt": "2023-03-08T17:31:32.337Z",
      "updatedAt": "2024-12-25T20:12:00.634Z",
      "id": "6408c674ab73fcc15c761392"
      },
      {
      "sold": 135,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678296174553-1.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678296174554-2.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678296174554-3.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678296174555-4.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678296174555-5.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678296174555-6.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678296174556-7.jpeg"
      ],
      "subcategory": [
      {
      "_id": "6407f39bb575d3b90bf957df",
      "name": "TVs, Satellites & Accessories",
      "slug": "tvs-satellites-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 113,
      "_id": "6408c46fab73fcc15c76138a",
      "title": "43-Inch Full HD Smart TV With Built In Receiver 43T5300 / UA43T5300AUXEG Black",
      "slug": "43-inch-full-hd-smart-tv-with-built-in-receiver-43t5300-ua43t5300auxeg-black",
      "description": "Analyzing original content with an advanced algorithm Ultra Clean View gives you higher quality images\nWatch your favourite content with natural colours that deliver details as crisp as the real thing\nThis beautifully slim design melts into any existing décor and elevates the style without taking it over\nThe sleek One Remote Control keeps it simple, allowing you to quickly search all your favorite content from your set-top box to game console, apps, and even live TV\nIdeal viewing distance is 2.6 m\nContrast enhancer brings flat images to life by adjusting contrast and delivering stunning image quality with more depth\nEnhanced details for clearer photos ultra clean view theme delivers high-quality images with less noise, while using an advanced algorithm to analyze original content and provide enhanced detail\nExceptional gaming performance with quick response action, colour and detail of brings everything you watch is clear, bright and incredibly realistic",
      "quantity": 300,
      "price": 8899,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678296174190-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089df124b25627a25315ab",
      "name": "Samsung",
      "slug": "samsung",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286321029.png"
      },
      "ratingsAverage": 4.4,
      "createdAt": "2023-03-08T17:22:55.320Z",
      "updatedAt": "2024-12-30T11:32:41.650Z",
      "id": "6408c46fab73fcc15c76138a"
      },
      {
      "sold": 123,
      "images": [
      "https://ecommerce.routemisr.com/Route-Academy-products/1678295711960-2.png",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678295711961-4.png",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678295711960-3.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678295711960-1.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678295711962-5.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678295711963-6.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678295711963-7.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678295711963-8.jpeg",
      "https://ecommerce.routemisr.com/Route-Academy-products/1678295711964-9.jpeg"
      ],
      "subcategory": [
      {
      "_id": "6407f39bb575d3b90bf957df",
      "name": "TVs, Satellites & Accessories",
      "slug": "tvs-satellites-and-accessories",
      "category": "6439d2d167d9aa4ca970649f"
      }
      ],
      "ratingsQuantity": 295,
      "_id": "6408c2a0ab73fcc15c761382",
      "title": "50-Inch Crystal UHD Crystal Processor 4K Flat Smart Tv UA50AU7000UXZN / UA50AU7000UXEG Titan Grey",
      "slug": "50-inch-crystal-uhd-crystal-processor-4k-flat-smart-tv-ua50au7000uxzn-ua50au7000uxeg-titan-grey",
      "description": "PurColour Technology fine-tunes the colour spectrum to deliver true-to-life and balanced colours in every movie sequence\nCrystal 4k Processor orchestrates the colour, optimises high contrast ratio, and masters HDR to make movie scenes come alive with spectacular depth\nMotion Xcelerator technology automatically estimates and compensates the frame rates during fast-paced action sequences\nQ-symphony technology allows the TV to connect and pair with an external soundbar to deliver unified sound\n3-Bezeless Design ensures sleek and elegant aesthetics to completely blend with the look of your interior décor\nClean Cable Solution allows you to neatly organise the cables in the TV stand to reduce clutter\nPurColour Technology fine-tunes the colour spectrum to deliver true-to-life and balanced colours in every movie sequence\nDiscover a billion shades of colour with Dynamic Crystal Colour. HDR increases the range of light to deliver subtle details in the darkest scenes",
      "quantity": 600,
      "price": 10500,
      "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678295711876-cover.jpeg",
      "category": {
      "_id": "6439d2d167d9aa4ca970649f",
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
      },
      "brand": {
      "_id": "64089df124b25627a25315ab",
      "name": "Samsung",
      "slug": "samsung",
      "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286321029.png"
      },
      "ratingsAverage": 4.5,
      "createdAt": "2023-03-08T17:15:12.734Z",
      "updatedAt": "2024-12-30T11:44:58.116Z",
      "id": "6408c2a0ab73fcc15c761382"
      }
      ]
}
