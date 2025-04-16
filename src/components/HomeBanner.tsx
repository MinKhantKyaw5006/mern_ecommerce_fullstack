import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import banner1 from "@/assets/banner1.png"
import banner2 from "@/assets/banner2.png"
import banner3 from "@/assets/banner3.png"
import banner4 from "@/assets/banner4.png"

const banners = [banner1, banner2, banner3, banner4]

const HomeBanner = () => {
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!emblaApi) return

    // Set up auto-scroll every 8 seconds
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 8000)

    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          loop: true, // Enable looping of the carousel
          dragFree: true, // Enable free drag (optional, for better drag behavior)
        }}
        className="w-full"
        setApi={setEmblaApi}
      >
        <CarouselContent className="!ml-0">
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="!pl-0 w-full basis-full">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-[400px] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/70 hover:bg-white shadow-md" />
        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/70 hover:bg-white shadow-md" />
      </Carousel>
    </div>
  )
}

export default HomeBanner



  