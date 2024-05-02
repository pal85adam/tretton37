import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../state/store';
import { colleaguesActions } from './colleagues.sagas';
import ColleagueCard from './components/ColleagueCard';

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
            <ColleagueCard key={colleague.email} colleague={colleague} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
