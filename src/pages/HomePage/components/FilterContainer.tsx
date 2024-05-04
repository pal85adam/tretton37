/* eslint-disable jsx-a11y/label-has-associated-control */
import { useTypedDispatch, useTypedSelector } from '../../../state/store';
import { ColleagueFilters } from '../../../types/common';
import { setFilters, sortColleaguesBy } from '../colleagues.slice';

export default function FilterContainer() {
  const { filters } = useTypedSelector((state) => state.colleagues);
  const dispatch = useTypedDispatch();

  return (
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
              onChange={(e) => {
                const { value } = e.target;
                if (value)
                  dispatch(sortColleaguesBy(value as keyof ColleagueFilters));
              }}
            >
              <option value="">---</option>
              <option value="name">Name</option>
              <option value="office">Office</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
