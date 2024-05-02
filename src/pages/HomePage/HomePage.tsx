import { useCallback, useEffect, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../state/store';
import { colleaguesActions } from './colleagues.sagas';
import ColleagueCard from './components/ColleagueCard';
import Loader from '../../components/Loader';
import FilterBadge from '../../components/FilterBadge';
import { setFilters } from './colleagues.slice';
import { ColleagueFilters } from '../../types/common';

function HomePage() {
  const { colleaguesFiltered, filters, loading } = useTypedSelector(
    (state) => state.colleagues,
  );

  const [currentPage, setCurrentPage] = useState({ pageIndex: 1, scrollY: 0 });
  const dispatch = useTypedDispatch();

  const handleScroll = useCallback(() => {
    const { scrollY } = window;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollYPlusInnerHeight = scrollY + window.innerHeight;
    if (
      documentHeight - scrollYPlusInnerHeight === 0 &&
      currentPage.scrollY < scrollY
    ) {
      setCurrentPage({
        pageIndex: currentPage.pageIndex + 1,
        scrollY,
      });
    }
  }, [currentPage.pageIndex, currentPage.scrollY]);

  useEffect(() => {
    dispatch({ type: colleaguesActions.SET_COLLEAGUES });
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full max-w-7xl items-center text-lg font-bold bs-20 md:text-xl xl:text-3xl">
        The fellowshop of the tretton37
      </div>
      <div className="flex w-full max-w-7xl items-center justify-center rounded bg-white text-lg text-stone-200 shadow-md bs-20 md:text-xl xl:text-3xl">
        <input
          type="text"
          className="bg-blue-600 text-white mli-2 pli-2"
          placeholder="Name"
          value={filters.name}
          onChange={(e) =>
            dispatch(
              setFilters({ filterKey: 'name', filterValue: e.target.value }),
            )
          }
        />
        <input
          type="text"
          className="bg-blue-600 text-white mli-2 pli-2"
          placeholder="Office"
          value={filters.office}
          onChange={(e) =>
            dispatch(
              setFilters({ filterKey: 'office', filterValue: e.target.value }),
            )
          }
        />
      </div>
      <div className="flex w-full max-w-7xl mlb-2 mli-1">
        {Object.keys(filters)
          .filter((fk) => filters[fk as keyof ColleagueFilters])
          .map((filterKey) => (
            <FilterBadge
              key={filterKey}
              label={filterKey.toUpperCase()}
              onClick={() => {
                dispatch(
                  setFilters({
                    filterKey: filterKey as keyof ColleagueFilters,
                    filterValue: '',
                  }),
                );
              }}
            />
          ))}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <ul className="grid grid-cols-1 gap-8 plb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {colleaguesFiltered
            .slice(0, currentPage.pageIndex * 8)
            .map((colleague) => (
              <ColleagueCard key={colleague.email} colleague={colleague} />
            ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
