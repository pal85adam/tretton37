/* eslint-disable jsx-a11y/control-has-associated-label */
import { useEffect } from 'react';
import AppLogo from '../../svgs/AppLogo';
import Github from '../../svgs/Github';
import Twitter from '../../svgs/Twitter';
import Linkedin from '../../svgs/Linkedin';
import { useTypedDispatch, useTypedSelector } from '../../state/store';
import { colleaguesActions } from './colleagues.sagas';

function HomePage() {
  const { colleagues, loading } = useTypedSelector((state) => state.colleagues);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch({ type: colleaguesActions.SET_COLLEAGUES });
  }, [dispatch]);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full max-w-7xl items-center text-lg font-bold bs-20 md:text-xl xl:text-3xl">
        The fellowshop of the tretton37
      </div>
      <div className="flex w-full max-w-7xl items-center justify-center rounded bg-white text-lg text-stone-200 shadow-md bs-20 md:text-xl xl:text-3xl">
        Potential filter and tools area
      </div>
      {!loading && (
        <ul className="grid grid-cols-1 gap-8 plb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {colleagues.map((colleague) => (
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
                  {colleague.linkedIn && (
                    <a href={`https://github.com/${colleague.gitHub}`}>
                      <Github />
                    </a>
                  )}
                  {colleague.linkedIn && (
                    <a
                      href={`https://www.linkedin.com/in/${colleague.linkedIn}`}
                    >
                      <Linkedin />
                    </a>
                  )}
                  {colleague.twitter && (
                    <a href={`https://twitter.com/${colleague.twitter}`}>
                      <Twitter />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
