import React from "react";
import { useEffect, useState } from "react";
import NinjaList from ".";
import Layouts from "../../components/layouts/Layouts";

//ninjas/[id]
//kita harus menggunakan getstaticpaths untuk men-generate
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const ninjas = await res.json();
  const paths = ninjas.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  // console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

// berarti kita tidak harus memakai parameter context di dalam get static prop untuk menerima data dari getstaticpaths. bisa apapun namanya
export const getStaticProps = async (memek) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${memek.params.id}`
  );
  const ninja = await res.json();
  console.log("memek", memek);
  return {
    props: { ninja },
  };
};

const Ninja = ({ ninja }) => {
  const [ninjas, setNinjas] = useState(null);
  useEffect(() => {
    const getNinjas = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setNinjas(data);
    };
    getNinjas();
  }, []);
  return (
    <Layouts>
      <div>
        <p className="text-3xl font-semibold">Ninja {ninja.name} </p>
        <ul>
          <li>{ninja.username}</li>
          <li>{ninja.website}</li>
          <li>{ninja.phone}</li>
          <li>{ninja.company.name}</li>
        </ul>

        <p>This another Ninjas</p>
        <div>
          <NinjaList ninjas={ninjas} />
        </div>
      </div>
    </Layouts>
  );
};

export default Ninja;
