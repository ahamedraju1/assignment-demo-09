import React, { useEffect, useState } from 'react';

const SubscriptionBox = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/public/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log("Error facing", error))
    }, []);

    return (
        <div className='grid grid-cols-3 gap-5 items-center justify-center'>
            {/* <div className="card bg-base-100 w-full shadow-sm"> */}
                {
                    products.map((item) => (
                        <>
                            <div key={item.id} className='card bg-base-100 w-full shadow-sm'>
                                <figure className="px-10 pt-10">
                                    <img
                                    
                                        src={item.thumbnail}
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>{item.price}</p>
                                    <p> {item.description} </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary"> View more </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            {/* </div> */}
            {/* card-2 */}
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Card Title
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
            {/* card-3 */}
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionBox;