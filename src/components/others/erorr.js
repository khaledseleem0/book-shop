import React from 'react'
import {Container ,Txt} from "./pagesStyle"
export default function Erorr() {
    return (
        <>
            <Container>
                <img src={process.env.PUBLIC_URL+"/assesst/images/Bookshelves.svg"}/>
                <Txt> Erorr 404 this page not found  </Txt>
            </Container>
        </>
    )
}
