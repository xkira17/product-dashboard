import { Flex, Box, useColorMode, useColorModeValue, Button, Icon, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import { AiOutlineMenuUnfold } from 'react-icons/ai'

const layout = () => {
    const [sidebar, setSidebar] = useState(false)
    return (
        <Flex h={'100vh'}>
            <Box w={{
                base: 'full',
                md: '300px',
            }}
                pos={{
                    base: 'fixed',
                    md: 'sticky',
                }}
                zIndex={'50'}
                left={{
                    base: sidebar ? '0' : '-100%',
                    md: 0,
                }}
                transition={'all .3s ease'}
                bg={useColorModeValue('white', 'gray.800')}
                borderRight={'1px'} borderRightColor={useColorModeValue('gray.200', 'gray.700')}>
                <Sidebar />
            </Box>
            <Box w={{
                base: 'full',
                md: '70%',
            }}>
                <Outlet />
            </Box>
            <Button display={{
                base: 'block',
                md: 'none'
            }} colorScheme='blue' zIndex={'500'} onClick={() => setSidebar(!sidebar)} pos={'fixed'} top={1} right={1}>
                <Icon as={AiOutlineMenuUnfold} />
            </Button>
        </Flex>
    )
}

export default layout