import React from "react";
import Layouts from "../../components/layouts/Layouts";

//ninjas/[id]
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const ninjas = await res.json();
  const paths = ninjas.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
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
  return (
    <Layouts>
      <div>
        <p className="text-3xl font-semibold">Ninja {ninja.name} </p>
      </div>
    </Layouts>
  );
};

export default Ninja;
