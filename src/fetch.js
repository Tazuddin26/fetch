import { useState } from 'react';
function Fetch() {
    const [arabic, setArabic] = useState("");
    fetch('https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/dhikr.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
         const s = data.map(x => x.ARABIC);
            //console.log (s);
           setArabic(" " + s + " ");
        });
    return (
        <div>


            {arabic};
        </div>
    )
};
export default Fetch;

