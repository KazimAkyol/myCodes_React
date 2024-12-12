import React from "react";

const Typograghy = () => {
  return (
    <div>
      <h2 className="text-2xl">Tailwind Css</h2>
      <h2 className="text-3xl">Tailwind Css</h2>
      <h2 className="text-5xl">Tailwind Css</h2>
      {/* standart tailwind ölçüleri dışında kullanmak için text-[25px], text-[1rem] */}
      <h2 className="text-[25px]">Tailwind Css</h2>

      <p className="text-sm">
        Tailwind, en temel CSS kullanimlarini sifirdan yazmanizi tekrar tekrar
        yazmanizi engelleyen, yazilimcilarin ve tasarimcilarin işini
        kolaylaştiran bir CSS framework'üdür. Tailwind, bir UI kiti olmadigi
        için Bootstrap, Foundation gibi frameworklerden farklidir.
        <h3 className="bg-slate-500 text-3xl mt-5">Line Clamp özelliği</h3>
      </p>
      {/* Line Clamp özelliği */}
      <p className="line-clamp-2  hover:line-clamp-none">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        in repellendus minus accusamus tenetur ipsa, pariatur dolor excepturi
        impedit inventore atque. Quo esse dolorem provident quae? Odio iure
        dicta ut. Modi, quae alias quisquam veniam, porro sunt suscipit quaerat
        eius dignissimos accusamus exercitationem eaque pariatur, blanditiis
        quos? Ea soluta aperiam facere maiores dolorem, nam aliquam velit totam
        exercitationem atque porro ipsum possimus animi reprehenderit dolorum
        deleniti aspernatur labore impedit corporis quaerat autem pariatur! Nemo
        reiciendis laboriosam incidunt ea fugiat et distinctio. Veniam quisquam
        iste incidunt deserunt, nulla assumenda quidem libero autem possimus
        quia aut sequi molestiae vero dicta totam laborum!
      </p>
    </div>
  );
};

export default Typograghy;
