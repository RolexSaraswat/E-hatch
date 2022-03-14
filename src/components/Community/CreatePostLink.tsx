import { Flex, Icon, Input } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";

type CreatePostProps = {};

const CreatePostLink: React.FC<CreatePostProps> = () => {
  const router = useRouter();
  return (
    <Flex
      justify="space-evenly"
      align="center"
      bg="white"
      height="56px"
      width="100%"
      p={2}
    >
      <Icon as={FaReddit} fontSize={36} color="gray.300" mr={4} />
      <Link href={`/r/${router.query.community}/submit`}>
        {/* <InputItem name="postTitle" placeholder="Create Post" type="text" /> */}
        <Input
          placeholder="Create Post"
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          bg="gray.50"
          height="36px"
          borderRadius={4}
          mr={4}
        />
      </Link>
      <Icon
        as={IoImageOutline}
        fontSize={24}
        mr={4}
        color="gray.400"
        cursor="pointer"
      />
      <Icon as={BsLink45Deg} fontSize={24} color="gray.400" cursor="pointer" />
    </Flex>
  );
};
export default CreatePostLink;