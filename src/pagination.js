import { useEffect, useState } from 'react';
function Pagination() {
    const [arabic, setArabic] = useState();
    const [page, setPage] = useState(1);
    const [seril , setSeril] = useState(5,10,20)
    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/dhikr.json'
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const s = data
                    .filter((len,i) => i < (10 * page) && i >= (10 * (page - 1)))
                    .map((x, i) =>
                        <div className='flex'>{i + 1 + (10 * (page - 1))}:
                            <p className='text-xl text-red-400 p-2 mr-10' >{x.ARABIC}</p>:
                            <p className='text-xl text-green-600 p-2 mr-10'>{x.BANGLA_UCCHARON}</p>:
                            <p className='text-xl text-blue-500 p-2 mr-10'>{x.BANGLA_ORTHO}</p>
                        </div>); //there is no different in data[i] and X. 

                setArabic(s);
            });
    }, []);

    return (
        <div className='flex flex-row w-full h-full'>
            <div className='w-2/12 h-full'></div>
            <div className='w-8/12 h-full text-xl text-justify'>
                {arabic}
            </div>
            <div className='w-2/12 h-full'></div>
            <div className=' w-4/12 h-full flex'>
                <button className='w-5/12 h-4/6 border-full rounded rounded-full bg-green-400 m-40 p-5'
                    onClick={() => setPage(page - 1)}>
                    Back
                </button>
                <button
                    className='w-5/12 h-4/6 border-full rounded rounded-full bg-green-400 m-40 p-5'
                    onClick={() => setPage(page + 1)}>
                    Next
                </button>
                <div className='flex'>
                    <button
                        className='w-5/12 h-1/6 border-full rounded rounded-full bg-green-400 m-40 p-5'
                        onClick={() => setSeril(seril + 5)}>
                       5
                    </button>
                    <button
                        className='w-5/12 h-1/6 border-full rounded rounded-full bg-green-400 m-40 p-5'
                        onClick={() => setSeril(seril + 10)}>
                       10
                    </button>
                    <button
                        className='w-5/12 h-1/6 border-full rounded rounded-full bg-green-400 m-40 p-5'
                        onClick={() => setPage(page + 1)}>
                       20
                    </button>
                </div>

            </div>

        </div >
    )
};
export default Pagination;

