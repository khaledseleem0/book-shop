import React from 'react'
import {Container ,Txt} from "./pagesStyle"
import {Link} from 'react-router-dom'
export default function Erorr() {
    return (
        <>
            <Container>
                <img alt="Erorr img" src={process.env.PUBLIC_URL+"/assesst/images/e.svg"}/>
                <Txt> Erorr 404 this page not found <Link to="/home">back home </Link> </Txt>
            </Container>
        </>
    )
}
