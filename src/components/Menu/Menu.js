import React from 'react'
import CardUI from '../Cards/CardUI'
import classes from "./Menu.module.css"

const Menu = () => {
    const menuItems= [
        {
            id:1,
            title:"Grow Flower",
            src:"https://cdn.shopify.com/s/files/1/0265/8933/1530/products/13_e7b88aa7-024d-41d0-bc45-95161ac940e7_600x800_crop_center.png?v=1573978154",
            price:"Price $20"
        },
        {
            id:2,
            title:"Dust Jacket Book Mock Up",
            src:"https://cdn.shopify.com/s/files/1/0265/8933/1530/products/11_e272e529-4c81-454b-b9ff-99dcfba814f1_600x800_crop_center.jpg?v=1569231225",
            price:"Price $30"
        },
        {
            id:3,
            title:"Learn With Arif",
            src:"https://cdn.shopify.com/s/files/1/0265/8933/1530/products/9_1018d4cc-1e64-4575-995d-1603e8df8b40_600x800_crop_center.jpg?v=1569231200",
            price:"Price $15"
        },
        {
            id:4,
            title:"Be Like Me",
            src:"https://cdn.shopify.com/s/files/1/0265/8933/1530/products/5_5ff6a8ff-7b4a-4a26-ab2b-3b29d31c6b3e_600x800_crop_center.jpg?v=1569231168",
            price:"Price $45"
        },
        {
            id:5,
            title:"Fooling Light",
            src:"https://cdn.shopify.com/s/files/1/0265/8933/1530/products/6_4e54246b-2ba3-43d7-a49d-2607a3343bcb_600x800_crop_center.jpg?v=1569231178",
            price:"Price $25"
        },
        {
            id:6,
            title:"Super High",
            src:"https://cdn.shopify.com/s/files/1/0265/8933/1530/products/14_34859b26-2edb-460e-867c-829bec90ac59_600x800_crop_center.png?v=1569231350",
            price:"Price $12"
        },
        {
            id:7,
            title:"Discover",
            src:"https://cdn.shopify.com/s/files/1/0265/8933/1530/products/12_d89a0bc6-f635-4367-b445-acf8f26d48a3_600x800_crop_center.png?v=1569231225",
            price:"Price $45"
        },
        {
            
            id:8,
            title:"UX Research",
            src:"https://cdn.shopify.com/s/files/1/0265/8933/1530/products/19_f106bf3d-4c87-41c3-9b0c-93a238c3e102_600x800_crop_center.png?v=1573978154",
            price:"Price $45"
        }
        
         
    ]
    return (
        <div className={classes.gridcontainer} >
           {menuItems.map((items) => {
               return <CardUI key={items.id}
                            title={items.title} 
                            imgsrc={items.src}
                            about={items.price}
                            button="BUY NOW"/>
           })}
        </div>
    )
}

export default Menu
