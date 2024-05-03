/* eslint-disable jsx-a11y/label-has-associated-control */
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
    <div className="flex flex-col items-center is-full">
      <div className="flex items-center text-lg font-bold bs-20 is-full max-is-screen-xl md:text-xl xl:text-3xl">
        The fellowshop of the tretton37
      </div>
      <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-white shadow-lg min-bs-20 is-full max-is-screen-xl ">
        <div className="plb-6 pli-6">
          <div className="grid grid-cols-1 gap-6 mbs-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium text-stone-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={filters.name}
                onChange={(e) =>
                  dispatch(
                    setFilters({
                      filterKey: 'name',
                      filterValue: e.target.value,
                    }),
                  )
                }
                className="block rounded-md border border-gray-200 shadow-sm outline-none is-full mbs-2 plb-2 pli-2 focus:border-blue-500 focus:ring focus:ring-blue-200/50"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="manufacturer"
                className="text-sm font-medium text-stone-600"
              >
                Office
              </label>
              <input
                type="text"
                id="manufacturer"
                value={filters.office}
                onChange={(e) =>
                  dispatch(
                    setFilters({
                      filterKey: 'office',
                      filterValue: e.target.value,
                    }),
                  )
                }
                className="block rounded-md border border-gray-200 shadow-sm outline-none is-full mbs-2 plb-2 pli-2 focus:border-blue-500 focus:ring focus:ring-blue-200/50"
              />
            </div>

            <div className="flex flex-col xl:col-start-4">
              <label
                htmlFor="sortby"
                className="text-sm font-medium text-stone-600"
              >
                Sort By
              </label>

              <select
                id="sortby"
                className="block rounded-md border border-gray-200 shadow-sm outline-none is-full mbs-2 plb-2 pli-2 focus:border-blue-500 focus:ring focus:ring-blue-200/50"
              >
                <option>--</option>
                <option>Name</option>
                <option>Office</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex is-full max-is-screen-xl mlb-2 mli-1">
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
