import React from "react";
import { connect } from "react-redux";
import { FaBookmark } from "react-icons/fa";
import { BookDescription } from "../bookinfo/bookInfoStyle";
import {
  CradsFavorites,
  Title,
  Card,
  Cardinfo,
  CardImg,
  Bottom,
  Bold,
} from "./favoritesStyle";
import { REMOVE_FROM_FAVS } from "../vars";
function Favorites(props) {
  return (
    <div className="container">
      <CradsFavorites>
        {props.data.map((book) => {
          return (
            <Card key={Math.random()}>
              <CardImg>
                <img src={book.data.book_image} />
              </CardImg>
              <Cardinfo>
                <Title> {book.data.title}</Title>
                <BookDescription>{book.data.description}</BookDescription>
                <Bottom>
                  <Bold> Favorited </Bold>
                  <FaBookmark
                    onClick={() => {
                      props.remove(book.data.rank);
                    }}
                  />
                </Bottom>
              </Cardinfo>
            </Card>
          );
        })}
      </CradsFavorites>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}
function mapDispatchToProps(dispatch) {
  return { remove: (id) => dispatch(REMOVE_FROM_FAVS(id)) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
