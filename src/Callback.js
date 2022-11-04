import { useEffect, useState } from "react";
const map = (arr, func) => {
    const secondArr = [];
    const lent = arr.length;
    let n = 0;
    while (n < lent) {
        const call = func(arr[n], n);
        secondArr.push(call);
        n = n + 1;
    }
    return secondArr;
}
function Universle() {
    const [test, setTest] = useState();
    useEffect(() => {
        city('https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/dhikr.json');
        .then((response) => {
            return response.json();
        })
            .then((data) => {
                const uni = map(data, (v, i) =>
                    <div className="">
                        {i + 1}:
                        {v.ARABIC}:
                    </div>);
                setTest(uni);
            });
    }, []);
    return (
        <div>
            {test}
        </div>

    )
};
export default Universle;