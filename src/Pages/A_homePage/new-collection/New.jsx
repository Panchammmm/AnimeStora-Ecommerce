import { Slide } from 'react-awesome-reveal';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./new.css";

import { Product, responsive } from "../../../Components/product/Product.jsx";

const productData = [
    {
        id: 1,
        imageurl:
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Colorful sneakers",
        price: "₹ 2,500",
        description: "Vibrant sports footwear."
    },
    {
        id: 2,
        imageurl:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Sport sneakers",
        price: "₹ 1,800",
        description: "Athletic footwear for sports."
    },
    {
        id: 3,
        imageurl:
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "iWatch",
        price: "₹ 35,000",
        description: "Smart wearable device."
    },
    {
        id: 4,
        imageurl:
            "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Water Bottle",
        price: "₹ 350",
        description: "Reusable hydration container."
    },
    {
        id: 5,
        imageurl:
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Vans sneakers",
        price: "₹ 3,000",
        description: "Classic casual shoes."
    },
    {
        id: 6,
        imageurl:
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Coco Noir",
        price: "₹ 6,500",
        description: "Luxury fragrance."
    },
    {
        id: 7,
        imageurl:
            "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Sunglasses",
        price: "₹ 1,800",
        description: "Stylish eye protection."
    },
    {
        id: 8,
        imageurl:
            "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Dove cream",
        price: "₹ 250",
        description: "Skin moisturizer."
    },
];

export default function New() {
    const product = productData.map((item) => (
        <Product
            name={item.name}
            url={item.imageurl}
            price={item.price}
            description={item.description}
        />
    ));

    return (
        <div className="content-section">
            <Slide direction="down" style={{ display: "grid", placeContent: "center" }}>
                <h1 className="tittle">New Arrival</h1>
                <span className="underline"></span>
            </Slide>

            <Carousel responsive={responsive}>
                {product}
            </Carousel>
        </div>
    );
}
