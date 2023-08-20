import { useEffect } from "react";

export const useDataFetchRover = (url = '', setFn = ()=>{}) => {
    useEffect(() => {
        const fetchData = async () => {
            const stream = await fetch(url);
            const data = await stream.json();
            setFn(data);
        };
        fetchData();
    }, []);
};