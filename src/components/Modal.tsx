import {
    Modal,
    ModalOverlay,
    Button,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader
  } from '@chakra-ui/react'


import LoginForm from './LoginForm'


export default function Login({ isOpen, onClose , children , button , heading }) {


return (
        <>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>{heading}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {children}
                </ModalBody>

                <ModalFooter>
                    <Button mr={3} onClick={onClose}>
                    Close
                    </Button>
                    {button}
                </ModalFooter>
                </ModalContent>
            </Modal>
    </>
    )
}