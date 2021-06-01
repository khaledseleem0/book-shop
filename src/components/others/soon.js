import React from 'react'
import {Container ,Txt}from './pagesStyle'
export default function Soon() {
    return (
        <Container>
                <img src={process.env.PUBLIC_URL+"/assesst/images/soon.svg"}/>
          <Txt> This page we'll add it soon  </Txt>
            </Container>
    )
}
