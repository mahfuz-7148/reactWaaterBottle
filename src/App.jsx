import { Suspense } from 'react'
import Bottles from "./components/Bottles.jsx";


const App = () => {
            const bottlesPromise = fetch('bottles.json').then(res => res.json());
    return (
        <div>
            <Suspense fallback={<h3>Bottles are loading....</h3>}>
                <Bottles bottlesPromise={bottlesPromise}></Bottles>
            </Suspense>
        </div>
    );
};

export default App;