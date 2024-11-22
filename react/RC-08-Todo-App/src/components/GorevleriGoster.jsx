import React from "react";
import { TiDelete } from "react-icons/ti";

const GorevleriGoster = ({ yapilacak, setYapilacak }) => {
  return (
    <div>
      {yapilacak.map((a) => (
        <div
          key={a.id}
          className={a.isDone === true ? "done" : "gorev"}
          onDoubleClick={() =>
            setYapilacak(
              yapilacak.map((dizi) =>
                dizi.id === a.id ? { ...dizi, isDone: !dizi.isDone } : dizi
              )
            )
          }
        >
          {/* elimizdeki data(database) da kalıcı değişiklik yapacağız, map dizide döner ve değişiklik yapar ama kalıcı tutmaz, bunun için setYapilacak'ta (tamircide) map'lenmeli. map ile elimizdeki datada döneriz, bu sırada o an tıkladığımız a ile kastedilen elemanın id'si ile dizideki id eşleşiyorsa orada durup değişiklik yaparız. Mesela 3 id'li elemanın süslüsünde eşleşme oldu. Süslünün içinde diğer key'ler kalsın sadece isDone değişsin istediğimiz için, diğerlerine dokunma manasında ...dizi, yazar üzerine override ederek, isDone:!dizi.isDone yazarız, yani eşleşen süslünün içindeki isDone'da ne yazıyorsa onun tersiyle değiştir */}
          <h3>
            {a.text}

            <TiDelete
              style={{ color: "red" }}
              onClick={() =>
                setYapilacak(yapilacak.filter((x) => x.id !== a.id))
              }
            />
          </h3>

          <h6>{a.day}</h6>
        </div>
      ))}
    </div>
  );
};

export default GorevleriGoster;
