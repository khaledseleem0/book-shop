import React, { useEffect, useState } from "react";
import {
  BookContainerInfo,
  ImgContainer,
  BookDataInfo,
  Publisher,
  Author,
  Heading,
  BookName,
  BookDescription,
  PopUp,
  Tags,
  Tag,
  Read,
  Select,
  Item,
  CheckBox,
} from "./bookInfoStyle";
import { Get_Api, ADD_TO_FAVS, REMOVE_FROM_FAVS } from "./../vars";
import Loading from "./../others/loading";
import {
  FaBookmark,
  FaMicrophone,
  FaRegBookmark,
} from "react-icons/fa";
import { connect } from "react-redux";

import {
  AbsoluteContainer,
  CategoryContent,
  Inputs,
  Input,
  Button,
  TowBtns,
} from "./../favs/favoritesStyle";

function BookInfo(props) {
  let fav = false;
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [faved, setFaved] = useState(false);
  const [search, setSearch] = useState([]);
  const [groupId, setGroupId] = useState(null);
  const [groups, setGroups] = useState([]);
  let book_name_from_url = props.match;
  {
    book_name_from_url === undefined
      ? console.log("waite")
      : (book_name_from_url = book_name_from_url.params.bookInfo);
  }

  useEffect(() => {
    try {
      Get_Api().then((response) => {
        setInfo(response.results.books);
        setGroups(props.groups);
        setLoading(false);
      });
    } catch (error) {
      console.error(error.message);
      window.alert("sorry we have a erorr ")
    }
  }, []);
  let bookinfo = [];
  if (book_name_from_url !== undefined && loading === false) {
    bookinfo = info.filter((books) => {
      return books.title === book_name_from_url.replaceAll("_", " ");
    });
  }

  if (bookinfo !== undefined && bookinfo[0] !== undefined) {
    let fromredux = props.data.filter((favedbook) => {
      return parseInt(favedbook.rank) === parseInt(bookinfo[0].rank);
    });

    if (fromredux.length !== 0 && fromredux !== undefined) {
      fav = true;
    }
  }

  useEffect(() => {
    setFaved(fav);
  }, [fav]);

  // new feature
  let x = true;
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

  // search on favs  groups

  let result = [];
  let xex = [];

  const HandelGroups = (e) => {
    let search_words = e.target.value;
    if (search_words === "") {
      setSearch([]);
      return;
    }
    if (search_words !== "") {
      groups.forEach((searching, i) => {
        let x = searching.name.includes(search_words);
        xex.push(x);

        if (x) {
          result.push(searching);
          setSearch(result);
        }
        if (xex.every((ele) => ele == false)) {
          setSearch([]);
        }
      });
    }
  };
  const HandelCheck = (e, id) => {
    const radios = document.querySelectorAll('input[name="select"]');
    for (let rad of radios) {
      rad.parentElement.classList.remove("checked");
    }
    e.target.parentElement.classList.add("checked");
    setGroupId(id);
  };

  // submet it to group
  const HandelSubmit = (info) => {
    HandelVisible();
    if(groupId !== null ){
      props.add(groupId, info);
      fav = true;
      setFaved(fav);
    }else{
      console.log(groupId)
    }
    

  };
  return !loading && book_name_from_url !== undefined ? (
    <>
      <BookContainerInfo>
        <ImgContainer>
          <img
            src={bookinfo[0].book_image}
            onClick={() => {
              setFaved(true);
            }}
            alt={bookinfo[0].publisher}
          />
        </ImgContainer>
        <BookDataInfo>
          <BookName>{bookinfo[0].title.toLowerCase()}</BookName>
          <Heading>
            <Author>{bookinfo[0].author}</Author>
            <Publisher> {bookinfo[0].publisher} </Publisher>
          </Heading>

          <Heading>
            <div>
              {" "}
              <FaMicrophone /> <PopUp> audioable </PopUp>{" "}
            </div>
            <div>
              {faved ? (
                <div>
                  <FaBookmark
                    onClick={() => {
                      fav = false;
                      props.remove(bookinfo[0].rank);
                      setFaved(fav);
                    }}
                  />
                  <PopUp> unsave </PopUp>
                </div>
              ) : (
                <div>
                  <FaRegBookmark
                    onClick={() => {
                      HandelVisible();
                    }}
                  />
                  <PopUp> save  </PopUp>
                </div>
              )}
            </div>
          </Heading>

          <BookDescription>{bookinfo[0].description}</BookDescription>
          <Tags>
            {bookinfo[0].tags.map((tag, i) => (
              <Tag key={i}>#{tag}</Tag>
            ))}
          </Tags>
          <Read to={"/read"}> read now </Read>
        </BookDataInfo>
      </BookContainerInfo>

      {/* ############## create new category  ################### */}
      <AbsoluteContainer className="create-new-cat">
        <CategoryContent>
          <h1> create new category :D </h1>
          <Inputs>
            <div>
              <label> name of category </label>
              <Input type="text" onInput={(e) => HandelGroups(e)} />
            </div>

            <div>
              {" "}
              <label> Select Caetgory </label>
              <Select>
                {search.map((x) => {
                  return (
                    <Item onClick={(e, id) => HandelCheck(e, x.id)}>
                      <CheckBox type="radio" name="select" />
                      {x.name}{" "}
                    </Item>
                  );
                })}
              </Select>
            </div>

            <TowBtns>
              <Button
                valid={true}
                onClick={(info) => HandelSubmit(bookinfo[0])}
              >
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
    </>
  ) : (
    <>
      {" "}
      <Loading />{" "}
    </>
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
    add: (status, info) => dispatch(ADD_TO_FAVS(status, info)),
    remove: (id) => dispatch(REMOVE_FROM_FAVS(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookInfo);
