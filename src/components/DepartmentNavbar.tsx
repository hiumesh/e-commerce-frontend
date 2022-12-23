import MenuDropdown from "./menuDropdown";
import { Department } from "../types/department";

interface DepartmentNavbarProps {
  departments: { [index: string]: Department } | null;
}
export default function DepartmentNavbar({
  departments,
}: DepartmentNavbarProps) {
  return (
    <nav className="bg-slate-100 h-11">
      <div className="hidden w-full md:block md:w-auto h-full">
        <ul className="flex flex-col items-stretch justify-center h-full text-base font-medium md:flex-row md:space-x-8 md:mt-0">
          <li className="group px-2 hover:bg-slate-200">
            <div
              className="block leading-[44px] text-gray-700 group-hover:text-blue-700 border-0"
            >
              Men
              <div className="absolute left-0 top-[103px] w-full overflow-auto hidden group-hover:block">
                <MenuDropdown department={departments?.Men} />
              </div>
            </div>
          </li>
          <li className="group px-2 hover:bg-slate-200">
            <div
              className="block leading-[44px] text-gray-700 group-hover:text-blue-700 border-0"
            >
              Women
              <div className="absolute left-0 top-[103px] w-full overflow-auto hidden group-hover:block">
                <MenuDropdown department={departments?.Women} />
              </div>
            </div>
          </li>
          <li className="group  px-2 hover:bg-slate-200">
            <div
              className="block leading-[44px] text-gray-700 group-hover:text-blue-700 border-0"
            >
              Beauty
              <div className="absolute left-0 top-[103px] w-full overflow-auto hidden group-hover:block">
                <MenuDropdown department={departments?.Beauty} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
