import { Box, Button, Input, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addCategory } from '../store/category.slice'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'

const CreateCategory = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toast = useToast()

    const onSubmit = e => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        dispatch(
            addCategory({
                id: uuidv4(),
                title: data.get('title')
            })
        )

        navigate('/categories', { replace: true })
        toast({
            title: 'Category created successful!',
            status: 'success',
            position: 'top-right',
        })

    }
    return (
        <Box p={4}>
            <Text mb={4}>Create category</Text>
            <Box>
                <form onSubmit={onSubmit}>
                    <Input placeholder='Title' name='title' mb={3} required />
                    <Button type='submit'>Submit</Button>
                </form>
            </Box>
        </Box>
    )
}

export default CreateCategory