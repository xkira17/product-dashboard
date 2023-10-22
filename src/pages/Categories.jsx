import { Box, Button, Card, CardBody, Divider, Grid, GridItem, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiTrash } from 'react-icons/bi'
import { deleteCategory } from '../store/category.slice'

const Categories = () => {
    const { categories } = useSelector(state => state.category)
    const dispatch = useDispatch()

    const onDelete = (id) => {
        const isConfirm = confirm('Do you wnt to delete the Product?')

        if (isConfirm) {
            dispatch(deleteCategory(id))
        }
    }

    return (
        <Box p={4}>
            <Text mb={4}>Categories</Text>
            <Grid gridTemplateColumns={{
                bs: '1fr',
                md: '1fr 1fr',
                lg: '1fr 1fr 1fr',
            }}
                gap={4}>
                {categories.map(item => (
                    <GridItem>
                        <Card>
                            <CardBody>
                                <Text my={3}>{item.title}</Text>
                                <Divider />
                                <HStack>
                                    <Button my={4} onClick={() => onDelete(item.id)} leftIcon={<BiTrash />} colorScheme='red'>
                                        Delete
                                    </Button>
                                </HStack>
                            </CardBody>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}

export default Categories