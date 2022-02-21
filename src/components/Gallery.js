import React from "react"
import GalleryItem from "./GalleryItem.js"

const Gallery = (props) => {
    //let cards = props.data;

    const cards = [
        {
            post_author: "John",
            post_title: "Blog Post One",
            post_date: "<2022-02-19>",
            post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar pellentesque habitant morbi. Eget magna fermentum iaculis eu non diam phasellus. Iaculis at erat pellentesque adipiscing commodo. Convallis aenean et tortor at risus viverra adipiscing at in. Ipsum dolor sit amet consectetur adipiscing elit. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Cursus euismod quis viverra nibh cras. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Ut sem viverra aliquet eget sit amet. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Urna nunc id cursus metus aliquam eleifend mi. Nunc congue nisi vitae suscipit tellus. Aliquet enim tortor at auctor. Id donec ultrices tincidunt arcu non. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Cras tincidunt lobortis feugiat vivamus at. Eu turpis egestas pretium aenean pharetra magna ac. Sit amet cursus sit amet dictum. Vel pretium lectus quam id. Sodales ut etiam sit amet nisl purus in. Tortor id aliquet lectus proin. Id diam maecenas ultricies mi eget mauris pharetra et. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Nunc sed id semper risus in hendrerit gravida rutrum. Maecenas ultricies mi eget mauris pharetra et ultrices neque. At quis risus sed vulputate odio ut. Porttitor rhoncus dolor purus non enim. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Dui id ornare arcu odio ut sem. Lacus luctus accumsan tortor posuere ac ut consequat semper. Nisl pretium fusce id velit."
        },
        {
            post_author: "Jane",
            post_title: "Blog Post Two",
            post_date: "<2022-02-19>",
            post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar pellentesque habitant morbi. Eget magna fermentum iaculis eu non diam phasellus. Iaculis at erat pellentesque adipiscing commodo. Convallis aenean et tortor at risus viverra adipiscing at in. Ipsum dolor sit amet consectetur adipiscing elit. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Cursus euismod quis viverra nibh cras. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Ut sem viverra aliquet eget sit amet. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Urna nunc id cursus metus aliquam eleifend mi. Nunc congue nisi vitae suscipit tellus. Aliquet enim tortor at auctor. Id donec ultrices tincidunt arcu non. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Cras tincidunt lobortis feugiat vivamus at. Eu turpis egestas pretium aenean pharetra magna ac. Sit amet cursus sit amet dictum. Vel pretium lectus quam id. Sodales ut etiam sit amet nisl purus in. Tortor id aliquet lectus proin. Id diam maecenas ultricies mi eget mauris pharetra et. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Nunc sed id semper risus in hendrerit gravida rutrum. Maecenas ultricies mi eget mauris pharetra et ultrices neque. At quis risus sed vulputate odio ut. Porttitor rhoncus dolor purus non enim. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Dui id ornare arcu odio ut sem. Lacus luctus accumsan tortor posuere ac ut consequat semper. Nisl pretium fusce id velit."
        },
        {
            post_author: "Jim",
            post_title: "Blog Post Three",
            post_date: "<2022-02-19>",
            post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar pellentesque habitant morbi. Eget magna fermentum iaculis eu non diam phasellus. Iaculis at erat pellentesque adipiscing commodo. Convallis aenean et tortor at risus viverra adipiscing at in. Ipsum dolor sit amet consectetur adipiscing elit. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Cursus euismod quis viverra nibh cras. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Ut sem viverra aliquet eget sit amet. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Urna nunc id cursus metus aliquam eleifend mi. Nunc congue nisi vitae suscipit tellus. Aliquet enim tortor at auctor. Id donec ultrices tincidunt arcu non. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Cras tincidunt lobortis feugiat vivamus at. Eu turpis egestas pretium aenean pharetra magna ac. Sit amet cursus sit amet dictum. Vel pretium lectus quam id. Sodales ut etiam sit amet nisl purus in. Tortor id aliquet lectus proin. Id diam maecenas ultricies mi eget mauris pharetra et. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Nunc sed id semper risus in hendrerit gravida rutrum. Maecenas ultricies mi eget mauris pharetra et ultrices neque. At quis risus sed vulputate odio ut. Porttitor rhoncus dolor purus non enim. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Dui id ornare arcu odio ut sem. Lacus luctus accumsan tortor posuere ac ut consequat semper. Nisl pretium fusce id velit."
        },
        {
            post_author: "James",
            post_title: "Blog Post Four",
            post_date: "<2022-02-19>",
            post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar pellentesque habitant morbi. Eget magna fermentum iaculis eu non diam phasellus. Iaculis at erat pellentesque adipiscing commodo. Convallis aenean et tortor at risus viverra adipiscing at in. Ipsum dolor sit amet consectetur adipiscing elit. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Cursus euismod quis viverra nibh cras. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Ut sem viverra aliquet eget sit amet. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Urna nunc id cursus metus aliquam eleifend mi. Nunc congue nisi vitae suscipit tellus. Aliquet enim tortor at auctor. Id donec ultrices tincidunt arcu non. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Cras tincidunt lobortis feugiat vivamus at. Eu turpis egestas pretium aenean pharetra magna ac. Sit amet cursus sit amet dictum. Vel pretium lectus quam id. Sodales ut etiam sit amet nisl purus in. Tortor id aliquet lectus proin. Id diam maecenas ultricies mi eget mauris pharetra et. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Nunc sed id semper risus in hendrerit gravida rutrum. Maecenas ultricies mi eget mauris pharetra et ultrices neque. At quis risus sed vulputate odio ut. Porttitor rhoncus dolor purus non enim. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Dui id ornare arcu odio ut sem. Lacus luctus accumsan tortor posuere ac ut consequat semper. Nisl pretium fusce id velit."
        },
        {
            post_author: "Jennifer",
            post_title: "Blog Post Four",
            post_date: "<2022-02-19>",
            post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar pellentesque habitant morbi. Eget magna fermentum iaculis eu non diam phasellus. Iaculis at erat pellentesque adipiscing commodo. Convallis aenean et tortor at risus viverra adipiscing at in. Ipsum dolor sit amet consectetur adipiscing elit. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Cursus euismod quis viverra nibh cras. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Ut sem viverra aliquet eget sit amet. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Urna nunc id cursus metus aliquam eleifend mi. Nunc congue nisi vitae suscipit tellus. Aliquet enim tortor at auctor. Id donec ultrices tincidunt arcu non. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Cras tincidunt lobortis feugiat vivamus at. Eu turpis egestas pretium aenean pharetra magna ac. Sit amet cursus sit amet dictum. Vel pretium lectus quam id. Sodales ut etiam sit amet nisl purus in. Tortor id aliquet lectus proin. Id diam maecenas ultricies mi eget mauris pharetra et. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Nunc sed id semper risus in hendrerit gravida rutrum. Maecenas ultricies mi eget mauris pharetra et ultrices neque. At quis risus sed vulputate odio ut. Porttitor rhoncus dolor purus non enim. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Dui id ornare arcu odio ut sem. Lacus luctus accumsan tortor posuere ac ut consequat semper. Nisl pretium fusce id velit."
        }
    ]
    let cardsList = cards.map((card, index) => {
        return <GalleryItem data={card} key={index} />;
    })

    return (
        <div>
            {cardsList}
        </div>
        
    )
}

export default Gallery