import React from "react";
import Link from "next/link";
import Layouts from "../../components/layouts/Layouts";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const ninjas = await res.json();
  return {
    props: { ninjas },
  };
};

export default function NinjaList({ ninjas }) {
  console.log(ninjas);
  return (
    <Layouts>
      <div>
        <h1>Ninja List</h1>
        <div className="grid grid-cols-4 gap-4">
          {ninjas &&
            ninjas.map((ninja) => (
              <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                <a
                  className={`rounded p-3 shadow cursor-pointer hover:bg-indigo-500 hover:text-white duration-200`}
                >
                  <p className="text-lg font-bold">{ninja.name}</p>
                  <p>{ninja.email}</p>
                </a>
              </Link>
            ))}
        </div>
      </div>
    </Layouts>
  );
}
