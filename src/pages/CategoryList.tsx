import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from '../config/axios'

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    const getAllCategories = async () => {
        const res = await api.get(`/all-category`);
        setCategories(res.data);        
    }

    useEffect(() => {
        getAllCategories();
    }, [])
  return (
    <div className='l-wrap-inner'>
        <h1 className='title'>Category List</h1>
        {
            categories && categories.length > 0 ? 
            categories.map((category) => (
                <p style={{marginBottom: "10px"}}>{category.name}</p>
            )) : (
                <p>Category Not Found</p>
            )
        }
    </div>
  )
}

export default CategoryList