import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../assets/amazon-ar21.svg";
import { Department } from "../types/department";
import { Category } from "../types/category";
import SearchBox from "./UI/SearchBox";
import UserOptions from "./UI/UserOptions";
import DepartmentNavbar from "./DepartmentNavbar";
import { api } from "../api";

export default function Navbar() {
  const [categories, setCategories] = useState<Category[] | []>([])
  const [department, setDepartment] = useState<{[index: string]: Department} | null>(null)

  useEffect(() => {
    if (!department?.Men){
      api
      .get("department/Men/")
      .then((res) => {   
        setDepartment((prev) => ({...prev, "Men": res.data }))
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
    if (!department?.Women) {
      api
      .get("department/Women/")
      .then((res) => {
        setDepartment((prev) => ({...prev, "Women": res.data }))
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
    if (!department?.Beauty) {
      api
      .get("department/Beauty/")
      .then((res) => {
        setDepartment((prev) => ({...prev, "Beauty": res.data }))
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
    if (!categories.length) {
      api
      .get("category/")
      .then((res) => {
        setCategories(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
    }
  }, []);

  return (
    <>
      <div className="shadow-md bg-slate-200 flex justify-center">
        <nav className="p-1 flex justify-center items-center w-full max-w-[1200px]">
          <div>
            <Image
              src={Logo}
              alt="Logo of site"
              height={55}
              className="mr-7 self-end"
            />
          </div>
          <SearchBox
            categories={categories}
          />
          <UserOptions />
        </nav>
      </div>
      <DepartmentNavbar departments={department} />
    </>
  );
}
