import React from 'react'
import HornedBeast from './HornedBeast'


class Main extends React.Component {
    render() {
        let hornedBeast = [
            {
                title:"UniWhal",
                description:"A unicorn and a narwhal nuzzling their horns",

                image_url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",

        
            },
            {
                title:"Rhino Family",
                description:"Mother (or father) rhino with two babies"
,
            image_url: "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
            },
            {
                title:"Unicorn Head",
                description:"Someone wearing a creepy unicorn head mask",

            image_url: "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
            }
        ]

        return (
            <div>
        <HornedBeast title={hornedBeast[0].title}
         description={hornedBeast[0].description}
          image_url={hornedBeast[0].image_url}/>
         <HornedBeast title={hornedBeast[1].title} description={hornedBeast[1].description} image_url={hornedBeast[1].image_url}/>  
         <HornedBeast title={hornedBeast[2].title} description={hornedBeast[2].description} image_url={hornedBeast[2].image_url}/>
            
            </div>

        )
    }
}

export default Main;