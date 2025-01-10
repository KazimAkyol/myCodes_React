import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";

const register = async (userInfo) => {
  const dispatch = useDispatch();

  dispatch(fetchStart());

  try {
    const { data } = await axios.post(
      "https://10102.fullstack.clarusway.com/users",
      userInfo
    );
    console.log(data);
  } catch (error) {
    dispatch(fetchFail());
  }
};

// Bu yapı bir component değil sadece js fonksiyonu oldu.
// Return ile birşey döndürmediği için component değil. Bu şekilde kullanımı hook kurallarına aykırı olduğu için çalışmaz.
// Bu nedenle bu sayfayı bu şekilde kullanmayacağız.
