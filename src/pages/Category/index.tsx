import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import categories from "../../data/category.json"
import Sidebar from '../../components/Sidebar';
import type { CategoryType } from '../../types/Category';
import { useGetAllBrands } from '../../queries/brands';
import type { categoryBrandType } from '../../api/brands';
import { useGetAllProducts } from '../../queries/products';
import ProductCard from '../../components/ProductCard';
import nProgress from 'nprogress';
import BreadCrumb from '@/components/BreadCrumb';
import { useGetAllCategories } from '@/queries/categories';


function index() {
  const { id } = useParams()
  const [category, setCategory] = useState<CategoryType | undefined>(undefined)
  const [links, setLinks] = useState<{ title: string, link: string }[]>([])
  const [data, setData] = useState<{ order: string, brands: string[] }>({
    order: "",
    brands: []
  })

  const brands = useGetAllBrands(id)
  const products = useGetAllProducts(id, data.order, data.brands)
  const categories = useGetAllCategories()
  const selectBrands = (data: categoryBrandType[] | undefined) => {
    if (!data) return []
    const collectBrands = []
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].brands.length; j++) {
        collectBrands.push(data[i].brands[j])
      }
    }
    return collectBrands
  }

  useEffect(() => {
    if (brands.isLoading || products.isLoading) {
      nProgress.start()
    } else {
      nProgress.done()
    }
  }, [brands.isLoading, products.isLoading])

  // useEffect(()=>{
  //   const findCategory = (categories:CategoryType[],id:number):CategoryType | undefined=>{
  //     for(const category of categories){
  //       if (category.id === id){
  //         return category
  //       }
  //       if (category.subcategories) {
  //         const found = findCategory(category.subcategories,id)
  //         if (found){
  //           return found
  //         } 
  //       }
  //     }
  //     return undefined
  //   }
  //   if(categories.data) setCategory(findCategory(categories.data,Number(id)))
  // },[id,categories])

  useEffect(() => {
    const findCategoryAndParents = ( categories: CategoryType[], id: number, path: CategoryType[] = [] ): CategoryType[] | undefined => {
      for (const category of categories) {
        const currentPath = [...path, category];
        if (category.id == id) {
          return currentPath;
        }

        if (category.subcategories) {
          const foundPath = findCategoryAndParents(category.subcategories, id, currentPath);
          if (foundPath) {
            return foundPath;
          }
        }
      }
      return undefined;
    };

    if (categories.data) {
      const resultPath = findCategoryAndParents(categories.data, Number(id));
      if (resultPath) {
        const target = resultPath[resultPath.length - 1];

        setCategory(target);
        const parentLinks = []
        for( const parent of resultPath){
          parentLinks.push({title:parent.name,link:"/category/"+parent.id})
        }
        setLinks(parentLinks)
      }
    }
  }, [id, categories.data]);

  return (
    <div className='container mx-auto px-3 my-5'>
      {links.length > 1 && <BreadCrumb links={links} />}
      <h1 className='text-3xl font-bold'>{category?.name}</h1>
      <div className='text-gray-500 mb-5'>Jemi: <span className='font-medium'>{products.data?.length}</span> haryt</div>
      <div className='flex gap-3'>
        <Sidebar categories={category} brands={selectBrands(brands.data)} data={data} setData={setData} />
        <div className='w-3/4 grid grid-cols-4 gap-3 h-fit'>
          {
            products.data && products.data.map((product) => (
              <ProductCard key={"category-page-products-" + product.id} data={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default index