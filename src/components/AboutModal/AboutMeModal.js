import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

const AboutMeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent ModalContent maxW="2xl" p={4}>
          <ModalHeader>Hello there!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p style={{ whiteSpace: "pre-wrap" }}>
              I'm Shir, an enthusiastic front-end developer with a strong
              foundation in web technologies and a keen interest in evolving
              into a technical product manager role. Passionate about user
              experience, design, and collaborative development.
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>

      <div className="mobile-about-me" onClick={onOpen}>
        about me
      </div>
    </>
  );
};

export default AboutMeModal;
