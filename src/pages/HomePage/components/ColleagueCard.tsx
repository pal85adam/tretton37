/* eslint-disable jsx-a11y/control-has-associated-label */
import AppLogo from '../../../svgs/AppLogo';
import Github from '../../../svgs/Github';
import Linkedin from '../../../svgs/Linkedin';
import Twitter from '../../../svgs/Twitter';
import { Colleague } from '../../../types/common';

function ColleagueCard({ colleague }: { colleague: Colleague }) {
  return (
    <li
      key={colleague.email}
      className="flex flex-col items-center rounded bg-white shadow-md transition duration-500 bs-96 is-72 hover:scale-105"
    >
      <div className="flex items-center justify-center bg-stone-100 bs-56 is-64 mlb-3">
        {colleague.imagePortraitUrl ? (
          <img
            src={colleague.imagePortraitUrl}
            alt="Tretton37 colleague"
            className="h-full"
          />
        ) : (
          <AppLogo className="max-h-56" fillp="#fff" />
        )}
      </div>
      <div className="flex w-full justify-between plb-4 pli-4">
        <div className="font-bold">
          <div>{colleague.name}</div>
          <div>Office: {colleague.office}</div>
        </div>
        <div className="flex justify-end is-20 children:ms-1">
          {colleague.gitHub && (
            <a
              href={`https://github.com/${colleague.gitHub}`}
              className="rounded-full transition duration-500 bs-6 hover:scale-125"
            >
              <Github />
            </a>
          )}
          {colleague.linkedIn && (
            <a
              href={`https://www.linkedin.com/in/${colleague.linkedIn}`}
              className="rounded-full transition duration-500 bs-6 hover:scale-125"
            >
              <Linkedin />
            </a>
          )}
          {colleague.twitter && (
            <a
              href={`https://twitter.com/${colleague.twitter}`}
              className="rounded-full transition duration-500 bs-6 hover:scale-125"
            >
              <Twitter />
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

export default ColleagueCard;
