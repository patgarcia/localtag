import React, { useEffect, useState } from 'react';

function Image({match}) {

    const [image, setImage] = useState(null)

    const apiURL =  process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetch(`${apiURL}/images/${match.params.id}`)
        .then(data => data.json())
        .then(jsonData => setImage(jsonData))
    }, [])

    return (
        image && <div>
            <img alt={image.description} src={image.hq_image_url} />
        </div>
    );
}

export default Image;