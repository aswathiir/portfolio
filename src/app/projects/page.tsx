import { redirect } from "next/navigation";

// Projects live on the home page (with filters + case-study modals).
export default function Page() {
  redirect("/#projects");
}
