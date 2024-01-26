import {
    Modal,
    ModalOverlay,
    Button,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader
  } from "@chakra-ui/react"


export default function Login({ isOpen, onClose , children , heading }) {


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
                </ModalContent>
            </Modal>
    </>
    )
}