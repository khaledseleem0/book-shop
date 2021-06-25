import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FaBookmark} from "react-icons/fa";
import {
  Title,
  Card,
  Cardinfo,
  CardImg,
  Name,
  Header,
  TextHeader,FavGrid
} from "./favoritesStyle";
import Erorr  from "./../others/erorr";
import { REMOVE_FROM_FAVS } from "./../vars";
import Loading from "./../others/loading";
import {PopUp,Heading} from './../bookinfo/bookInfoStyle'
function Favorites(props) {
  const [group, setGroup] = useState();
  const [loading, setLoading] = useState(true);
useEffect(() => {
    setLoading(false);
    let x = props.match.params;
    const result = props.groups.filter((group) => {
      return parseInt(group.id) === parseInt(x.id);
    });
    setGroup(...result);
   
  }, []);

try {
  return loading ? (
    <Loading />
  ) : (
    <>
      <Header background={group.image} position={"center"}>
        <TextHeader> {group.name}</TextHeader>
      </Header>
      <div className="container">
        <FavGrid>
          {props.data.map((book, i) => {
            return (
              <Card key={i}>
                <CardImg>
                  <img src={book.data.book_image} alt={book.data.title} />
                </CardImg>
                <Cardinfo>
                  <Title> {book.data.title}</Title>
                  <Name>{book.data.author}</Name>
                  <Heading>
                  <div>
                  <FaBookmark
                      onClick={() => {
                        props.remove(book.data.rank);
                      }}
                    />
                    <PopUp> unsave  </PopUp>
              
                  </div>
                  </Heading>
                </Cardinfo>
              </Card>
            );
          })}
        </FavGrid>
      </div>
    </>
  );

} catch (error) {
  return <Erorr/>
}

  
}

function mapStateToProps(state) {
  return {
    data: state.data,
    groups: state.groups,
  };
}
function mapDispatchToProps(dispatch) {
  return { remove: (id) => dispatch(REMOVE_FROM_FAVS(id)) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
