import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchCategoryList = async function () {
  try {
    const res = await axios.get(`http://127.0.0.1:8000/api/categories/`)
    return res.data;
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
    const res = await axios.get(`http://127.0.0.1:8000/api/categories/${id}`)
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