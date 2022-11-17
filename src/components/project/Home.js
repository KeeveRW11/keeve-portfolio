import React from 'react';
import {Helmet} from 'react-helmet';
import coverImage from "../../assets/images/cover-image.PNG";

function Home() {
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Keeve</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="keeve cover" />
        </div>
    )
}

export default Home;