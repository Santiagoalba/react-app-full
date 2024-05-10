import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs({category});

    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {
                    isLoading? (
                        <span>Loading...</span>
                    ):(
                        images.map(image => (
                            <GifItem key={image.id} image={image}/>
                        ))
                    ) 
                }
            </div>
        </>
    )
}
