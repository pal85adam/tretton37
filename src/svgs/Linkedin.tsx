import { SVGType } from '../types/common';

function Linkedin({ className, fillg, fillp, width, height }: SVGType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '24'}
      height={height || '24'}
      className={className}
      viewBox="0 0 60 60"
    >
      <g fill={fillg || 'none'} fillRule="evenodd">
        <path fill="#000" d="M30 60a30 30 0 1 0 0-60 30 30 0 0 0 0 60Z" />
        <path
          fill={fillp || '#FFF'}
          d="M21.88 43.82v-18.3h-5.65v18.3h5.65Zm0-24.78c-.03-1.64-1.12-2.89-2.9-2.89a2.79 2.79 0 0 0-2.93 2.89c0 1.6 1.13 2.88 2.87 2.88h.03a2.8 2.8 0 0 0 2.93-2.88Zm9.23 24.78V33.4c0-.56.04-1.12.2-1.52.45-1.11 1.47-2.27 3.19-2.27 2.24 0 3.65 1.28 3.65 3.79v10.42h5.7v-10.7c0-5.74-3.06-8.4-7.15-8.4a6.18 6.18 0 0 0-5.63 3.14l.04-2.45h-5.68c.08 1.76 0 18.41 0 18.41h5.68Z"
        />
      </g>
    </svg>
  );
}

Linkedin.defaultProps = {
  className: '',
  fillg: null,
  fillp: null,
  width: null,
  height: null,
};

export default Linkedin;
