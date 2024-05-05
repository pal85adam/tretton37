import FilterBadge from '../../../components/FilterBadge';
import { useTypedDispatch, useTypedSelector } from '../../../state/store';
import { ColleagueFilters } from '../../../types/common';
import { setFilters } from '../colleagues.slice';

export default function FilterBadges() {
  const { filters, colleaguesFiltered } = useTypedSelector(
    (state) => state.colleagues,
  );
  const dispatch = useTypedDispatch();

  const populatedFilters = Object.keys(filters).filter(
    (fk) => filters[fk as keyof ColleagueFilters],
  );

  return (
    <div className="flex justify-between is-full max-is-screen-xl mlb-2 mli-1">
      <div className="flex children:mie-1">
        {populatedFilters.map((filterKey) => (
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
      {!!populatedFilters.length && (
        <div>{`${colleaguesFiltered.length} items found.`}</div>
      )}
    </div>
  );
}
