import React from "react";
import { Helmet } from "react-helmet-async";

interface MetaTagsProps {
    name: string;
    description: string;
}

const MetaTags: React.FC<{ info: MetaTagsProps }> = ({ info }) => {
    return (
        <Helmet>
            <title>{info.name} 👾</title>
            <meta name="description" content={info.description} />
            <meta property="og:image" content="/icon.jpg" />
        </Helmet>
    );
};

export default MetaTags;
