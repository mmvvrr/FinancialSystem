import axios from "axios";
import {AuthActions} from "@/utils/auth/utils";
import {BASE_URL} from "@/hooks/api";

const {getToken} = AuthActions();

const apiAnalytic = axios.create(
  {
    baseURL: BASE_URL
  }
)

apiAnalytic.defaults.headers.common['Authorization'] = `Bearer ${getToken("access")}`;

export default apiAnalytic