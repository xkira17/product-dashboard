import { Box, Text, Input, Select, Button, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addProduct } from '../store/product.slice'
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.category)
    const navigate = useNavigate()
    const toast = useToast()

    const onSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const newProduct = {
            title: data.get('title'),
            price: data.get('price'),
            image: data.get('image'),
            category: data.get('category'),
        }
        dispatch(
            addProduct({
                id: uuidv4(),
                ...newProduct,
                category: categories.find(item => item.id == newProduct.category)
            })
        )
        navigate('/', { replace: true })
        toast({
            title: 'Product created successful!',
            status: 'success',
            position: 'top-right',
        })
    }
    return (
        <Box p={4}>
            <Text p={4}>Create new product</Text>
            <Box>
                <form onSubmit={onSubmit}>
                    <Input placeholder='Title' mb={3} type='text' name='title' required />
                    <Input placeholder='Price' mb={3} type='number' name='price' required />
                    <Input placeholder='Image url' mb={3} type='url' name='image' required />
                    <Select mb={3} required name='category'>
                        <option value={''}>Select category</option>
                        {
                            categories.map(item => (
                                <option value={item.id}>{item.title}</option>
                            ))
                        }
                    </Select>
                    <Button type='submit'>Submit</Button>
                </form>
            </Box>
        </Box>
    )
}

export default CreateProduct