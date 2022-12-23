import { Department } from "../types/department";

interface MenuDropdownProps {
  department: Department | undefined;
}
export default function MenuDropdown({ department }: MenuDropdownProps) {
  return (
    <div
      className="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 border-t-2 border-t-slate-200"
    >
      <div className="flex flex-col flex-wrap py-5 px-4 mx-auto max-w-screen-lg text-sm text-gray-500 dark:text-gray-400 md:px-6 max-h-[400px] overflow-auto">
        {department?.department_collections?.map((collection) => (
          <div key={collection.Id} className="mr-4 mb-3">
            <div>
              <h3 className="text-blue-700">{collection.Name}</h3>
              <ul
                className=" sm:mb-4 md:mb-0"
                aria-labelledby="mega-menu-full-cta-button"
              >
                {collection?.collection_categories?.map((category) => (
                  <li key={category.CollectionCategoryId}>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      {category.Alias}
                    </a>
                  </li>
                ))}
                {collection?.collection_category_pairs?.map((pair) => (
                  <li key={pair.Id}>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      {pair.Alias}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
