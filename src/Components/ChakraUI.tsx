import React from 'react'
import { ChakraProvider, Select, Stack, Radio, Box, Button, Text, Divider, Flex, keyframes, FormLabel, FormControl, FormErrorMessage, Input, VStack, Checkbox, Heading } from '@chakra-ui/react'
import chakraTheme from '../utils/ChakraTheme'
import { useToast } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Formik, Field } from "formik";

const ChakraUI = () => {

    const toast = useToast()

    const closeAll = () => {
        toast.closeAll()
    }

    const animationKeyframes = keyframes`
        0% { transform: scale(1) rotate(0); border-radius: 20%; }
        25% { transform: scale(2) rotate(0); border-radius: 20%; }
        50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
        75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
        100% { transform: scale(1) rotate(0); border-radius: 20%; }
    `;

    const animation = `${animationKeyframes} 2s ease-in-out infinite`;

    return (
        <ChakraProvider theme={chakraTheme}>
            <Box h={'100vh'} dir='ltr'>
                <Flex mx={'20px'} pt={'20px'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={4}>
                    <Button bgColor={'blue.500'} color={'white'}>
                        <Text color={'secondary.100'} fontSize={"subtitle"}>
                            Hello Blue 500
                        </Text>
                    </Button>

                    <Divider />

                    <Button bgColor={'red.500'} color={'white'}>
                        <Text color={'secondary.100'} fontSize={{
                            mobile: "small",
                            tablet: "large",
                        }}>
                            Hello Red 500
                        </Text>
                    </Button>

                    <Divider />

                    <Input
                        variant={'filled'}
                        bgColor={'gray.100'}
                        color={'black'}
                        fontSize={'xl'}
                        p={8}
                        sx={{ height: '40px', width: '300px' }}
                        type="number"
                        max={11}
                        min={4}
                        _hover={{ bgColor: 'gray.200', borderRadius: '10px', border: "2px solid", borderColor: 'red.300' }}
                        _focus={{ bgColor: 'gray.300' }}
                        _active={{ bgColor: 'gray.400' }}
                        _placeholder={{ color: 'gray.500' }}
                        placeholder='Enter Your Phone ...' />

                    <Divider />

                    <Button
                        onClick={() =>
                            toast({
                                title: 'Account created.',
                                description: "We've created your account for you.",
                                status: 'success',
                                duration: 5000,
                                isClosable: true,
                            })
                        }
                    >
                        Show Toast
                    </Button>

                    <Divider />

                    <Button
                        onClick={() =>
                            toast({
                                position: 'bottom-left',
                                render: () => (
                                    <Box color='white' p={3} bg='blue.500'>
                                        Hello World
                                    </Box>
                                ),
                            })
                        }
                    >
                        Show Toast
                    </Button>

                    <Button onClick={closeAll} type='button' variant='outline'>
                        Close all toasts
                    </Button>

                    <Divider />

                </Flex>

                <Box
                    className='mt-16 flex items-center justify-center mx-auto'
                    display="flex" alignItems="center" justifyContent="center"
                    as={motion.div}
                    animation={animation}
                    padding="2"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    width="12"
                    height="12"
                />

                <VStack spacing={4} align="center" className='m-16'>
                    <Heading size="xl">Chakra UI Widgets</Heading>
                    <Text fontSize={20} color="gray.500">Sample usage of Chakra UI components</Text>

                    {/* Button */}
                    <Button colorScheme="teal">Button</Button>

                    {/* Input */}
                    <FormControl>
                        <FormLabel>Input</FormLabel>
                        <Input placeholder="Type something" />
                    </FormControl>

                    {/* Checkbox */}
                    <Checkbox checked>Checkbox</Checkbox>

                    {/* Radio */}
                    <Radio>Radio</Radio>

                    {/* Stack */}
                    <Stack direction="row" spacing={4}>
                        <Button colorScheme="blue">Stack Item 1</Button>
                        <Button colorScheme="red">Stack Item 2</Button>
                    </Stack>

                    {/* Select */}
                    <Select placeholder="Select option">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </VStack>

                <Flex bg="gray.100" align="center" justify="center" h="100vh">
                    <Box bg="white" p={6} rounded="md" w={64}>
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                                rememberMe: false
                            }}
                            onSubmit={(values) => {
                                alert(JSON.stringify(values, null, 2));
                            }}
                        >
                            {({ handleSubmit, errors, touched }) => (
                                <form onSubmit={handleSubmit}>
                                    <VStack spacing={4} align="flex-start">
                                        <FormControl>
                                            <FormLabel htmlFor="email">Email Address</FormLabel>
                                            <Field
                                                as={Input}
                                                id="email"
                                                name="email"
                                                type="email"
                                                variant="filled"
                                            />
                                        </FormControl>
                                        <FormControl isInvalid={!!errors.password && touched.password}>
                                            <FormLabel htmlFor="password">Password</FormLabel>
                                            <Field
                                                as={Input}
                                                id="password"
                                                name="password"
                                                type="password"
                                                variant="filled"
                                                validate={(value: any) => {
                                                    let error;

                                                    if (value.length < 6) {
                                                        error = "Password must contain at least 6 characters";
                                                    }

                                                    return error;
                                                }}
                                            />
                                            <FormErrorMessage>{errors.password}</FormErrorMessage>
                                        </FormControl>
                                        <Field
                                            as={Checkbox}
                                            id="rememberMe"
                                            name="rememberMe"
                                            colorScheme="purple"
                                        >
                                            Remember me?
                                        </Field>
                                        <Button type="submit" colorScheme="purple" width="full">
                                            Login
                                        </Button>
                                    </VStack>
                                </form>
                            )}
                        </Formik>
                    </Box>
                </Flex>

            </Box>
        </ChakraProvider>
    )
}

export default ChakraUI