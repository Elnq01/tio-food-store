import Image from "next/image"
import nextImage from '../../public/next.svg'
import nextImage1 from '../../public/globe.svg'
import nextImage2 from '../../public/vercel.svg'
import Link from "next/link"
import { Suspense } from "react"
import ImageSkeleton from "../../Skeletons/ImageSkeleton"



export default function Product(){
    return <div>
        <p>Product Listing</p>
            <Suspense fallback={<ImageSkeleton />}>
            <Link href='product/1'>
                <Image 
                    src={nextImage}
                    // src="https://picsum.photos/id/237/200/300" 
                    alt="product" 
                    width={200} 
                    height={200} 
                    blurDataURL="data:..." 
                    placeholder="blur" />
            </Link>
            </Suspense>
            <Link href='product/2'>
                <Image 
                    src={nextImage1} 
                    alt="product" 
                    width={200} 
                    height={200} 
                    blurDataURL="data:..." 
                    placeholder="blur" />
            </Link>
            <Link href='product/3'>
                <Image 
                    src={nextImage2} 
                    alt="product" 
                    width={200} 
                    height={200} 
                    blurDataURL="data:..." 
                    placeholder="blur" />
            </Link>
        </div>
}