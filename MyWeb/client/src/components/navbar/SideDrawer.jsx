import { Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Icon, useDisclosure, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { BiMenu } from "react-icons/bi";
import { DrawerCategory } from "./CategoryAndIcon";


export const SideDrawer = ({ handlePath }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const user = useSelector((state) => state.authReducer.user.firstName);


    return (
        <>
            <Icon w={'28px'} h={'28px'} mr={'10px'} onClick={onOpen} as={BiMenu} />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Hi {user}</DrawerHeader>
                    <Divider />
                    <DrawerBody>
                        <VStack gap={'30px'} mt={'40px'} onClick={onClose}>
                            <DrawerCategory handlePath={handlePath} name={'/'} text={"HOME"} link={'/'} />
                            <DrawerCategory handlePath={handlePath} name={'allProducts'} text={"ALL PRODUCT"} link={'/allProducts'} />
                            <DrawerCategory handlePath={handlePath} name={'men'} text={"MEN"} link={'/men'} />
                            <DrawerCategory handlePath={handlePath} name={'women'} text={"WOMEN"} link={'women'} />
                            <DrawerCategory handlePath={handlePath} name={'kids'} text={"KIDS"} link={'/kids'} />
                            <DrawerCategory handlePath={handlePath} name={'irecomm'} text={"IRECOMM"} link={'https://huggingface.co/spaces/Dat1Tran/demo_shoe_recommendation'} />
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};
