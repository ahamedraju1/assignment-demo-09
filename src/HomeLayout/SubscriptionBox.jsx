import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

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
                                    <Link to='/subDetails'  className="btn btn-primary"> View more </Link>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }

        </div>
    );
};

export default SubscriptionBox;