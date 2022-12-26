import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Detail(props) {
  let [alert, setAlert] = useState(true);
  let { id } = useParams();
  let [num, setNum] = useState("");
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  });
  useEffect(() => {
    if (isNaN(num) == true) {
      console.log("잘못입력");
    }
  }, [num]);
  return (
    <div className="container">
      {alert == true ? <div className="alert">2초이내 구매시 할인</div> : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
}
export default Detail;
