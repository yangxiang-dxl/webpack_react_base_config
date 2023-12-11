import { useEffect, useRef } from 'react';

export const useDelay = (max = 0) => {
    const ref = useRef(0);
    let rafId: any;
    const updateFramecount = () => {
        rafId = requestAnimationFrame(()=>{
            ref.current ++;
            if (ref.current > max){
                return;
            }
            updateFramecount();
        })
    }

    useEffect(() => {

        return () => {
            if (rafId){
                cancelAnimationFrame(rafId);
            }
        }
    }, []) 

    return function defer(n:any){
        // console.log(ref.current, n);
        return ref.current  >= n;
    }
}
