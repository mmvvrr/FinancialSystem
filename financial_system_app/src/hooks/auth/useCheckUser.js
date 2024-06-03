import {redirect} from "next/navigation";

export default function useCheckUser () {
  if (true) {
    redirect("/login");
  }
}