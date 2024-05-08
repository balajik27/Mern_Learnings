import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const InfiniteScrollExample1 = () => {

    const divStyle = {
        border : "1px solid green",
        padding : '10px 20px',
        margin : 10
    }
    const main_layer = {
        display : 'flex',
        alignItems : "center",
        justifyContent : 'center',
        flexDirection : 'column'
    }

    const infinteParent = {
        height : 500,
        overflow : 'auto'
    }

    const [dataSource , setDataSource] = useState(Array.from({length:10}));
    const [hasMore , sethasMore] = useState(true);

    const fetchMoreDate = () => {
        if(dataSource.length>=200){
            sethasMore(false)
            return
        }
        setTimeout(()=>{
            setDataSource(dataSource.concat(Array.from({length:20})))
        } , 800)
    }

    return(
        <div className="" style={main_layer}>
            <h3>Title : Infinte scroll implementation</h3>
            <div id="parentInfinte" style={infinteParent}>
            <InfiniteScroll scrollableTarget= 'parentInfinte' dataLength={dataSource.length} next={fetchMoreDate} hasMore={hasMore} loader={<p>loading .....</p>} endMessage={<p>You are all set .....</p>}>

            {dataSource.map((item , index)=>{
                return <div style={divStyle} key={index}>This is a div #{index + 1} inside infinite scroll</div>
            })}

            </InfiniteScroll>
            </div>
        </div>
    )
   
};
    
export default InfiniteScrollExample1;