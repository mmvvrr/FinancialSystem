import {useQuery} from "@tanstack/react-query";
import {fetcher} from "@/utils/fetcher";

const fetchCategoryList = async function () {
  try {
    return await fetcher(`/categories/?page_size=1000`)
  } catch (err) {
    return err
  }
}

const fetchCategoryListQuery = function () {
  return useQuery({
    queryKey: ['categories-list'],
    queryFn: async () => await fetchCategoryList(),
    options: {
      keepPreviousData: true,
    },
  })
}


const fetchCategoryDetail = async function (id) {
  try {
    const res = await apiAnalytic.get(`/categories/${id}`)
    return res.data;
  } catch(err) {
    return err
  }
}

const fetchCategoryDetailQuery = function (id) {
  return useQuery({
    queryKey: ['categories-detail', id],
    queryFn: async () => await fetchCategoryDetail(id),
    options: {
      keepPreviousData: true,
    },
  })
}



export {
  fetchCategoryList,
  fetchCategoryListQuery,
  fetchCategoryDetail,
  fetchCategoryDetailQuery,
}