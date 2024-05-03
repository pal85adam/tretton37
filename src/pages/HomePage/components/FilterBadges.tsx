import FilterBadge from '../../../components/FilterBadge';
import { useTypedDispatch, useTypedSelector } from '../../../state/store';
import { ColleagueFilters } from '../../../types/common';
import { setFilters } from '../colleagues.slice';

export default function FilterBadges() {
  const { filters } = useTypedSelector((state) => state.colleagues);
  const dispatch = useTypedDispatch();

  return (
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
  );
}
