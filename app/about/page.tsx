
import Link from "next/link";

export default function Aboutpage() {
  return (
    <div className="space-y-6">
      <p className="text-center">About page</p>
      <div className="text-center">
        <Link href="/" className="text-white bg-blue-600 px-4 py-2 rounded">
          Back Home Page{" "}
        </Link>
      </div>
    </div>
  );


}


