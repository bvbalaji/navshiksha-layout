import { redirect } from "next/navigation";
export default function Page() {
  redirect("/teacher/create-content/create-new");
  return null;
}