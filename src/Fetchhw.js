import { useEffect, useState } from 'react';
const map = (array, fn) => {
    const secondArray = [];
    const len = array.length;
    let i = 0;
    while (i < len) {
        const w = fn(array[i], i);
        secondArray.push(w);
        i = i + 1;
    }
    return secondArray;
}
function Words() {
    const [arabic, setArabic] = useState();
    useEffect(()=>{
        const url = 'https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/words.json'
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const s = map(data, (x, i) =>
                    <div className='flex justyfy-center'>{i + 1}:
                        <p className='text-xl text-red-400 p-2'>{x[0]}</p>
                        <p className='text-xl text-green-600 p-2'>{x[1]}</p>
                    </div>);
               
                setArabic(s);
            });
    },[]);
    return (
        <div className='flex flex-row w-full h-full'>
            <div className='w-2/12 h-full'></div>
            <div className='w-8/12 h-full text-xl text-justify'>
                {arabic}
            </div>
            <div className='w-2/12 h-full'></div>
        </div>
    )
};
export default Words;

