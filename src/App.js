
import React from "react";
import ImageCard from "./components/ImageCard.js";
import "./App.css";

function App() {

    // Array of image objects
    const images = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
            title: "Beautiful Nature",
            description: "Enjoy the beauty of mountains and nature."
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600",
            title: "Mountain View",
            description: "A beautiful view of mountains and lakes."
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
            title: "Beach",
            description: "Relax and enjoy the peaceful beach."
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600",
            title: "Sunrise",
            description: "A beautiful sunrise in the countryside."
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
            title: "Forest",
            description: "Explore the green forest and trees."
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600",
            title: "Ocean",
            description: "Experience the beauty of ocean waves."
        }
    ];

    return (
        <>
            <div className="gallery-container">

                <h1>My Image Gallery</h1>

                <div className="image-gallery">

                    {images.map((item) => {
                        return (
                            <ImageCard
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                            />
                        );
                    })}

                </div>

            </div>
        </>
    );
}

export default App;
