import { useEffect, useState } from 'react';
const map = (array, fn) => {
    const secondArray = [];     
    const len = array.length;
    let o = 0;
    while (o < len) {
        const w = fn(array[o], o);
        secondArray.push(w);
        o = o + 1;
    }
    return secondArray;
}

function Fetch() {
    const [arabic, setArabic] = useState("");
    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/dhikr.json'
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const s = map(data, (x, i) =>
                    <div className='flex justyfy-center'>{i + 1}:
                        <p className='text-xl text-red-400 p-2'>{x.ARABIC}</p>:
                        <p className='text-xl text-green-600 p-2'>{x.BANGLA_UCCHARON}</p>:
                        <p className='text-xl text-blue-500 p-2'>{x.BANGLA_ORTHO}</p>
                    </div>);

                setArabic(s);
            });

            let num = []
            
    }, []);

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
export default Fetch;

