import React from "react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export const TwitterEmbedComponent = ({ className }) => {
    return (
        <div className={`twitter ${className}`}>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="factbot_cereal"
                options={{height: 350}}
            />
        </div>
    );
  };