import { MouseEventHandler } from 'react';

function FilterBadge({
  label,
  onClick,
}: {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="inline-flex items-center overflow-hidden rounded bg-blue-500 text-white bs-8">
      <span className="text-xs font-medium plb-1.5 pli-5">{label}</span>

      <button
        onClick={onClick}
        className="inline-flex items-center justify-center bg-blue-600 bs-8 is-8 hover:bg-blue-700 focus:outline-none focus:ring"
        type="button"
      >
        <span className="sr-only"> Close </span>

        <svg
          className="bs-3 is-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default FilterBadge;
