import React from "react";
import GalleryItem from "./GalleryItem";
import { Link } from "react-router-dom";
import { TiArrowRightThick } from "react-icons/ti"

const Gallery = (props: { data: Iterable<unknown> }) => {
    let cards = Array.from(props.data);

    let cardsList: Iterable<unknown> = []

    if (cards) {
        cardsList = cards.map((card: any, index) => {
            return <GalleryItem data={card} key={index} cardId={card.id as string} />;
        })
    }

    return (
        <div >
            <div className="headerStyle">
                <div className="headerText">
                    <h1 className="headerH1">See what people are reading about below!</h1>
                    <Link to={`/NewPost`} className="headerLink">
                        <h3 className='headerLinkH3' >Or write your own story!< TiArrowRightThick style={{ verticalAlign: "middle", marginLeft: "10px", marginTop: "3px" }} /></h3>
                    </Link>
                </div>
                <img src={'../../gallery-bg.jpg'} alt="Website background" className="headerImageStyle" />
                {/* Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/s/photos/pens-and-pencils?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
            </div>
            <div className="galleryTitleStyle">
                <h1 className="galleryH1">Stories Worth Reading</h1>
            </div>
            <div className="cardGroupStyle">
                {cardsList}
            </div>
        </div >

    )
}

export default Gallery