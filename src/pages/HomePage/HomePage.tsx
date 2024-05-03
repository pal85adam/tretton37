import { useCallback, useEffect, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../state/store';
import { colleaguesActions } from './colleagues.sagas';
import ColleagueCard from './components/ColleagueCard';
import Loader from '../../components/Loader';
import FilterContainer from './components/FilterContainer';
import FilterBadges from './components/FilterBadges';

function HomePage() {
  const { colleaguesFiltered, loading } = useTypedSelector(
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
      <FilterContainer />
      <FilterBadges />
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
