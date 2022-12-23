
export interface CollectionCategory {
  CollectionCategoryId: number,
  Alias: string,
  CategoryId: number,
  Tags: number[]
}
export interface CollectionCategoryPair {
  Id: number,
  Name: string,
  Alias: string,
  Categories: number[],
  Tags: number[]
}
export interface DepartmentCollection {
  Id: number,
  collection_categories: CollectionCategory[],
  collection_category_pairs: CollectionCategoryPair[],
  Name: string,
  Alias: string
}

export interface Department {
  Id: number,
  department_collections:  DepartmentCollection[],
  Name: string
}
