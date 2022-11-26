import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import Moment from 'react-moment';

const AddProducts = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostingKey = process.env.REACT_APP_imgbb_key;

    const { data: productCategories, isLoading } = useQuery({
        queryKey: ['productCategories'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/category')
                const data = await res.json()
                return data
            }
            catch (error) {
            }
        }
    })


    const dateToFormat = new Date();

    const handleAddProduct = data => {
        console.log(imageHostingKey)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const product = {
                        productName: data.productName,
                        originalPrice: data.originalPrice,
                        resalePrice: data.resalePrice,
                        name: data.name,
                        userEmail: data.email,
                        yearsOfUse: data.yearsOfUse,
                        status: "unsold",
                        sellersName: data.sellersName,
                        deliveryLocation: data.deliveryLocation,
                        img: imgData.data.url,
                        postTime: dateToFormat
                    }
                    fetch("http://localhost:5000/product", {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success('Product Added Successfully')
                            navigate('/dashboard/myproducts')
                        })
                }
            })
        console.log(data, image, dateToFormat)
    }

    const navigate = useNavigate()

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mb-12'>
            <h2 className='text-3xl font-semibold my-10'>Add a Product</h2>
            <form className='mx-auto md:mr-auto w-10/12' onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Name</span></label>
                    <input type='text'
                        {...register("productName", {
                            required: "Product Name is Required"
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.productName && <p className='text-error'>{errors.productName?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Original Price</span></label>
                    <input type='text'
                        {...register("originalPrice", {
                            required: "Product Name is Required"
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.originalPrice && <p className='text-error'>{errors.originalPrice?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Resale Price</span></label>
                    <input type='text'
                        {...register("resalePrice", {
                            required: "Product Name is Required"
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.resalePrice && <p className='text-error'>{errors.resalePrice?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Years of use</span></label>
                    <input type='text'
                        {...register("yearsOfUse", {
                            required: "Product Name is Required"
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.yearsOfUse && <p className='text-error'>{errors.yearsOfUse?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Delivery Location</span></label>
                    <input type='text'
                        {...register("deliveryLocation", {
                            required: "Product Name is Required"
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.deliveryLocation && <p className='text-error'>{errors.deliveryLocation?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Sellers Name</span></label>
                    <input type='text'
                        {...register("sellersName", {
                            required: "Product Name is Required"
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.sellersName && <p className='text-error'>{errors.sellersName?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type='email'
                        {...register("email", { required: "Email address is required" })}
                        className="input input-bordered w-full max-w-xs" value={user?.email}
                    />
                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">CategoryName</span></label>
                    <select
                        {...register('name')}
                        className="select input-bordered w-full max-w-xs" required>
                        {
                            productCategories.map(category => <option
                                key={category._id}
                                value={category.name}
                            >{category.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type='file'
                        {...register("image", {
                            required: "Photo is Required"
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.image && <p className='text-error'>{errors.image?.message}</p>}
                </div>
                <div className='w-1/4 mr-auto'>
                    <input className='btn btn-secondary mt-4' value='Add Product' type="submit" />
                </div>

                <Moment className='hidden' />
            </form>
        </div>
    );
};

export default AddProducts;