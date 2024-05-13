import React from 'react';

type Props = {
  width?: string;
  height?: string;
  src: string;
};

const YoutubeVideo: React.FC<Props> = ({ width = '70%', height = '100%', src }) => {
  return (
      <iframe
        className="m-auto"
        width={width}
        height={height}
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
  );
};

export default YoutubeVideo;
