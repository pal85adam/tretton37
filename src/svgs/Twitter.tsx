import { SVGType } from '../types/common';

function Twitter({
  className = '',
  fillg = '',
  fillp = '',
  width = '24',
  height = '24',
}: SVGType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 60 60"
    >
      <g fill={fillg || 'none'} fillRule="evenodd">
        <path fill="#000" d="M30 60a30 30 0 1 0 0-60 30 30 0 0 0 0 60Z" />
        <path
          fill={fillp || '#FFF'}
          d="M41.05 18.44a6.6 6.6 0 0 0-4.84-2.29c-3.66-.06-6.62 3.04-6.62 6.91 0 .55.05 1.09.17 1.6a18.68 18.68 0 0 1-13.66-7.55 7.33 7.33 0 0 0-.9 3.55 7.3 7.3 0 0 0 2.95 5.92 6.34 6.34 0 0 1-3-.92v.1c0 3.42 2.28 6.3 5.31 6.97a6.24 6.24 0 0 1-3 .1 6.74 6.74 0 0 0 6.2 4.93 12.8 12.8 0 0 1-9.81 2.9A17.89 17.89 0 0 0 24 43.85c12.19 0 18.86-10.61 18.86-19.81l-.02-.9c1.3-.97 2.42-2.18 3.3-3.56-1.18.54-2.46.9-3.8 1.04a6.8 6.8 0 0 0 2.91-3.8c-1.28.77-2.7 1.33-4.2 1.62Z"
        />
      </g>
    </svg>
  );
}

export default Twitter;
