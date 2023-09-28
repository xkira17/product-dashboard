import { Box, Card, CardBody, Grid, GridItem, Text, Image, Flex, Divider, HStack, Button } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiTrash } from 'react-icons/bi'
import { deleteProduct } from '../store/product.slice'

const Home = () => {
    const { products } = useSelector(state => state.product)
    const dispatch = useDispatch()

    const onDelete = (id) => {
        const isConfirm = confirm('Do you want to delete the product?')

        if (isConfirm) {
            dispatch(deleteProduct(id))
        }
    }

    return (
        <Box p={4}>
            <Text mb={4}>Products</Text>
            <Grid gridTemplateColumns={{
                base: '1fr',
                md: '1fr 1fr',
                lg: '1fr 1fr 1fr'
            }} gap={4}>
                {products.map(item => (
                    <GridItem>
                        <Card>
                            <CardBody>
                                <Image width={'full'} h={'300px'} objectFit={'cover'} src={item.image} rounded={'8px'} />
                                <Text fontWeight={'medium'} my={2}>{item.title}</Text>
                                <Flex justify={'space-between'} alignItems={'center'}>
                                    <Text>{item.category?.title}</Text>
                                    <Text>{item.price?.toLocaleString()}$</Text>
                                </Flex>
                                <Divider my={3} />
                                <HStack>
                                    <Button onClick={() => onDelete(item.id)} leftIcon={<BiTrash />} colorScheme='red'>Delete</Button>
                                </HStack>
                            </CardBody>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}

export default Home