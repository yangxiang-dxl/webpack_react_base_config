import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Hello = () => {
    const [searchParams] = useSearchParams();
    console.log('params--->',searchParams.get('item')) 
    console.log('item--->2', searchParams.get('item2'))
    // const toolDetailInfo = JSON.parse(
    //       decodeURIComponent(searchParams.get("item")?.toString() as string)
    //     );
    // console.log(toolDetailInfo)

    return <div>hello world</div>

}   

export default Hello