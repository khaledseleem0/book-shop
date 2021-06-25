import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFolderPlus } from "react-icons/fa";
import {
  AddNewFavCategory,
  FavGrid,
  FavCategoryCard,
  FavCategoryName,
  FavCategoryNumber,
  AbsoluteContainer,
  CategoryContent,
  Inputs,
  Input,
  Button,
  File,
  InputFile,
  TowBtns,
  Message,
  Container,
} from "./favoritesStyle";
import { Big } from "./../home/homeStyle";
import { connect } from "react-redux";
import Loading from "./../others/loading";
import { CREATE_NEW_GROUP } from "./../vars";
function FavCategory(props) {
  const [dragged, setDragged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(false);
  const [data, setData] = useState({
    name: "",
    image: "",
    id: Math.round(Math.random() * 20000 * 4),
    books_number: 0,
  });

  // file Dropped function
  const HandelDrop = (e) => {
    e.preventDefault();
    if (
      e.dataTransfer.files.length &&
      e.target.getAttribute("type") === "file"
    ) {
      e.target.files = e.dataTransfer.files;
      setDragged(true);
      setData({
        name: data.name,
        image: URL.createObjectURL(e.target.files[0]),
        id: data.id,
        books_number: data.books_number,
      });
    } else {
      window.alert("please try agin ");
    }
  };

  //  if the user click the file input instead of dragged
  const HandelClick = (e) => {
    if (e.target.files.length && e.target.getAttribute("type") === "file") {
      setDragged(true);
      setData({
        name: data.name,
        image: URL.createObjectURL(e.target.files[0]),
        id: data.id,
        books_number: data.books_number,
      });
    } else {
      window.alert("please try agin ");
    }
  };
  // handel name
  const handelName = (e) => {
    setData({
      name: e.target.value,
      image: data.image,
      id: data.id,
      books_number: data.books_number,
    });
  };
  let x = true;
  // set visiblilty of the group creator
  const HandelVisible = () => {
    const CatMaker = document.querySelector(".create-new-cat");
    const CatMakerChild = document.querySelector(".create-new-cat div");
    CatMaker.classList.toggle("visible");
    if (x) {
      CatMakerChild.style.animationName = "popUp";
      x = !x;
    } else {
      CatMakerChild.style.animationName = "null";
      x = !x;
    }
  };
  const HandelSubmite = (groups) => {
    if (data.name !== "" && isNaN(data.name) && data.image !== "") {
      props.create_group(groups);
      HandelVisible();
      setValid(true);
    } else {
      window.alert(
        ` Please Make Sure You Add Image And Name to Category And Try Again  `
      );
    }
  };
  useEffect(() => {
    if (data.name !== "" && isNaN(data.name) && data.image !== "") {
      setValid(true);
    }
  }, [data]);
  const bookNumber = (id) => {
    let result = 0;
    let Y = props.data.map((x) => {
      return x.status == id;
    });
    Y.every((isTrue) => {
      isTrue === true ? (result = Y.length) : (result = 0);
    });
    return <>{result}</>;
  };
  useEffect(()=>{
    if(props.groups){
      setLoading(false)
    }
  },[])
  return (
    loading ? <Loading/> :
    <Container>
      <Message> Make Your faviourtes in one place </Message>
      <FavGrid>
        {props.groups.map((item) => {
          return (
            <FavCategoryCard key={item.id} background={item.image}>
              <FavCategoryName> {item.name} </FavCategoryName>
              <FavCategoryNumber>
                <span> books : </span> {bookNumber(item.id)}{" "}
              </FavCategoryNumber>
              <Link to={"favorites/" + item.id}></Link>{" "}
            </FavCategoryCard>
          );
        })}
        {/* create new One  */}
        <AddNewFavCategory onClick={() => HandelVisible()}>
          <FaFolderPlus />
        </AddNewFavCategory>
      </FavGrid>
      {/* the all component */}
      <AbsoluteContainer className="create-new-cat">
        <CategoryContent>
          <Big> create new category </Big>
          <Inputs>
            {/* name handeler */}
            <div>
              <label> name of category </label>
              <Input type="text" onChange={(e) => handelName(e)} />
            </div>
            {/* img uploader */}
            <div>
              <label> image of category </label>
              <File
                dragged={dragged}
                className="darg"
                onDrop={(e) => HandelDrop(e)}
              >
                <InputFile type="file" onChange={(e) => HandelClick(e)} />
                {dragged ? <p>Dragged Successfuly</p> : <p>Drag And drop </p>}
              </File>
            </div>
            <TowBtns>
              <Button valid={valid} onClick={() => HandelSubmite(data)}>
                apply
              </Button>
              <Button
                onClick={() => HandelVisible()}
                discard={true}
                valid={true}
              >
                {" "}
                discard
              </Button>
            </TowBtns>
          </Inputs>
        </CategoryContent>
      </AbsoluteContainer>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    data: state.data,
    groups: state.groups,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    create_group: (groups) => dispatch(CREATE_NEW_GROUP(groups)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavCategory);
