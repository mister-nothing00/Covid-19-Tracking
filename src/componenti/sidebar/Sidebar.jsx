import { Box, Flex, Link, Tooltip, IconButton } from "@chakra-ui/react";
import { MdOutlineAddHome, MdShowChart } from "react-icons/md";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

export default function Sidebar() {
  return (
    <Box
      bgColor={"blue.900"}
      py={8}
      position={"relative"}
      top={0}
      left={0}
      bottom={0}
      px={2}
      width={"80px"}
      height={"auto"}
      maxHeight={"100vh"}
      mx={"0px"}
    >
      <Flex
        direction={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={10}
        w="auto"
        height={"full"}
      >
        <Tooltip
          label="Home"
          placement="right"
          hasArrow
          bg={"gray.50"}
          color={"black"}
          ml={3}
          display={{ base: "block", md: "block" }}
        >
          <Link
            to="/"
            as={RouterLink}
            display="flex"
            alignItems="center"
            cursor="pointer"
          >
            <IconButton
              icon={<MdOutlineAddHome />}
              aria-label="Home"
              variant={"outline"}
              size="md"
              color={"whiteAlpha.900"}
              _hover={{ bg: "whiteAlpha.900", color: "blackAlpha.900" }}
            />
          </Link>
        </Tooltip>

        <Tooltip
          label="Grafico"
          placement="right"
          hasArrow
          bg={"gray.50"}
          color={"black"}
          ml={3}
          display={{ base: "block", md: "block" }}
        >
          <Link
            to="/grafico"
            as={RouterLink}
            display="flex"
            alignItems="center"
            cursor="pointer"
          >
            <IconButton
              icon={<MdShowChart />}
              aria-label="Grafico"
              variant={"outline"}
              size="md"
              color={"whiteAlpha.900"}
              _hover={{ bg: "whiteAlpha.900", color: "blackAlpha.900" }}
            />
          </Link>
        </Tooltip>

        <Tooltip
          bg={"gray.50"}
          color={"black"}
          ml={1}
          hasArrow
          label={"Logout"}
          placement="right"
          display={{ base: "block", md: "block" }}
        >
          <Flex
            onClick={""}
            alignItems={"center"}
            gap={4}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "center" }}
          >
           
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
}
