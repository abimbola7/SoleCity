import React from "react";
import Button from "../UI/Button"
import { Carousel, Typography} from "@material-tailwind/react";
 
export default function Example() {
  const data = [
    {
      id : "1",
      imageProperties :[
        {
          imageUrl : "https://firebasestorage.googleapis.com/v0/b/solecity-8f055.appspot.com/o/images%2Fshow%20wallpaper2.jpg?alt=media&token=f6551782-b564-477a-b20f-1cdadbb95d70",
          alt : "image 1",
          className : "h-screen w-full object-cover"
        }
      ],
      contentProperties : [
        {
          name : "FIND YOUR SOLEMATE AT SOLECITY",
          properties : undefined,
          category : "home"
        }
      ]
    },
    {
      id : "1",
      imageProperties :[
        {
          imageUrl : "https://firebasestorage.googleapis.com/v0/b/solecity-8f055.appspot.com/o/images%2Fmen%20shoes.jpg?alt=media&token=ee619299-3955-4dab-a2e8-3c78cc1be237",
          alt : "image 1",
          className : "h-screen w-full object-cover"
        }
      ],
      contentProperties : [
        {
          name : "NIKE AIR MAX 270",
          properties : `Trendy sneakers combining style, comfort, and superior cushioning technology`,
          category: "men"
        }
      ]
    },
    {
      id : "1",
      imageProperties :[
        {
          imageUrl : "https://firebasestorage.googleapis.com/v0/b/solecity-8f055.appspot.com/o/images%2Fwomen%20shoes1.jpg?alt=media&token=c2371a60-fcda-4044-ba19-c1d86723a5aa",
          alt : "image 1",
          className : "h-screen w-full object-cover"
        }
      ],
      contentProperties : [
        {
          name : "OPEN-TOP BLOCK HEEL",
          properties : `Trendy shoe combining style, comfort, and superior cushioning technology`,
          category: "women"
        }
      ]
    },
  ]
  console.log(data[0].imageProperties[0].imageUrl);
  return (
    <Carousel
    className="opacity-100 overflow-y-hidden"
    >
      {
        data.map((item)=>(
          <div className="relative h-full w-full">
          <img
            src={item.imageProperties[0].imageUrl}
            alt={item.imageProperties[0].alt}
            className={item.imageProperties[0].className}
          />
          <div className="absolute inset-0 grid h-full w-full items-center xxs:place-items-center bg-black/30 pl-3 xxs:pl-0">
            <div className={` ${ item.contentProperties[0].properties === undefined ? 'w-4/5 md:w-3/4' : "w-3/4 md:w-2/4" } text-left relative top-56`}>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {item.contentProperties[0].name}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-2 xs:mb-6 opacity-80 text-md sm:text-xl"
              >
                {item.contentProperties[0].properties}
              </Typography>
              <div className="">
                <Button
                className="z-[100000] text-[#F9BA15]"
                >
                  {
                  item.contentProperties[0].category === "home" ? "Shop Now" : 
                  item.contentProperties[0].category === "men" ? "Shop For Men" : 
                  "Shop For Women"
                  }
                </Button>
              </div>
            </div>
          </div>
      </div>
        ))
      }
    </Carousel>
  );
}
