import { redirect } from "next/navigation";

// The working contact form lives on the home page.
export default function Page() {
  redirect("/#contact");
}
