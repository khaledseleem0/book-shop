import React,{useEffect,useState} from 'react'
import {Publisher,Author,Heading,ImgContainer,BookContainerInfo,BookDataInfo, BookName, BookDescription, Price, Tags, Tag, Add} from './bookInfoStyle';
import {Get_Api,ADD_TO_FAVS,REMOVE_FROM_FAVS} from './../vars';
import Loading from './../others/loading';
import {FaBookmark , FaRegBookmark} from 'react-icons/fa'
// redux 
import { connect } from 'react-redux';
function BookInfo(props) {

     let fav = false;
     const [info,setInfo] = useState({});
     const [loading,setLoading] = useState(true);
     const [faved,setFaved] = useState(false);
     let book_name_from_url = props.match;
    {book_name_from_url == undefined ? console.log("") : book_name_from_url  = book_name_from_url.params.bookInfo};

    useEffect(() => {
         try{
            Get_Api().then((response)=>{
                setInfo(response.results.books);
                setLoading(false);
  })}
  catch(error){
      console.error(error.message);
  }},[]);
let bookinfo = [];
  if( book_name_from_url != undefined && loading === false ){
     bookinfo = info.filter((books)=>{
          return books.title ===  book_name_from_url.replaceAll("_"," ");

    })}

 if(bookinfo !== undefined && bookinfo[0] !== undefined){
        let fromredux = props.data.filter(favedbook=>{
            return favedbook.rank == bookinfo[0].rank; 
        });

        if(fromredux.length  !==  0 && fromredux != undefined){
            fav = true;
    }

    }

    useEffect(() => {
        setFaved(fav)
    }, [fav])
 return (!loading && book_name_from_url !== undefined ? 
     <><BookContainerInfo > 
         <ImgContainer>
         
              <img src={bookinfo[0].book_image} onClick={()=>{setFaved( true )}}/> 
         </ImgContainer>
         <BookDataInfo>
             <BookName>{bookinfo[0].title}</BookName>
             <Heading>
             <Author>{bookinfo[0].author}</Author>
             <Publisher> {bookinfo[0].publisher} </Publisher>
             </Heading>

             <Heading>
             <Price price={bookinfo[0].price}> ${bookinfo[0].price}  </Price>
            <div> 
            
                { faved ? <FaBookmark onClick={()=>{
                      fav = false ;
                      props.remove(bookinfo[0].rank);
                      setFaved(fav)
                      }}/>:<FaRegBookmark onClick={()=>{
                        props.add("added",bookinfo[0]);
                        fav = true ;
                        setFaved(fav)
                    }} 
                    />
            } 
                
                                
            </div>
             </Heading>

             <BookDescription>{bookinfo[0].description}</BookDescription>
             <Tags>
                 {
                     bookinfo[0].tags.map(tag=><Tag>{tag}</Tag>)
                 }
             </Tags>
             <Add> read now  </Add>
         </BookDataInfo>    
  
         </BookContainerInfo>
    
    </>     

  : <> <Loading/> </>
    )



}

function mapStateToProps(state) {
        return {
            data:state.data
           }
      
      }
      function mapDispatchToProps(dispatch){
        return {
              add:(status,info)=>dispatch(ADD_TO_FAVS(status,info)),
              remove:(id)=>dispatch(REMOVE_FROM_FAVS(id))}
      
      }

export default connect(mapStateToProps,mapDispatchToProps)(BookInfo);
