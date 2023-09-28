import React from 'react'
import { Box, Button, Stack, useColorModeValue, Text, Flex, Icon, useColorMode, Divider } from '@chakra-ui/react'
import { sidebarMenuItems } from '../config/constans'
import { Link, useLocation } from 'react-router-dom'
import { BiSun, BiMoon } from 'react-icons/bi'

const Sidebar = () => {
    const location = useLocation()
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box p={5}>
            <Box w={'full'} py={5} bg={useColorModeValue('blue.500', 'blue.200')} textAlign={'center'}
                rounded={'md'}
                fontSize={'28px'}
                mb={6}
                fontWeight={'extrabold'}>
                LOGO
            </Box>
            <Stack>
                {sidebarMenuItems.map(item => (
                    <Link style={{ display: 'block' }} to={item.path} key={item.id}>
                        <Button w={'full'} colorScheme='blue' variant={location.pathname === item.path ? 'solid' : 'outline'}>
                            <Flex w={'full'} justify={'start'} alignItems={'center'} gap={3}>
                                <Icon as={item.icon} />
                                <Text>{item.label}</Text>
                            </Flex>
                        </Button>
                    </Link>
                ))}
                <Divider />
                <Button onClick={toggleColorMode} leftIcon={colorMode === 'dark' ? <BiSun /> : <BiMoon />}>{colorMode === 'dark' ? 'Light mode' : 'Dark mode'}</Button>
            </Stack>
        </Box >
    )
}

export default Sidebar