import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
    "https://rukminim1.flixcart.com/flap/2000/200/image/b1c0f73e61ccfaf5.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9d56fb9fb543451d.jpg?q=20"
]

export function ImageCarousel() {
  return (
    <Carousel 
      className="h-full carousel-images"
      opts={{
        align: "start",
        loop: true,
    }}
    >
      <CarouselContent>
        {images.map((item, index) => (
          <CarouselItem key={index} className="w-full h-full">
            <Card>
                <CardContent className="p-2">
                  <img src={item} className="rounded-md w-full h-full" alt={item} />
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
