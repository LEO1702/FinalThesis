import { Box, Center, Flex, Image, Spacer, useColorMode } from "@chakra-ui/react";
import { RiHeartLine, RiShoppingBagLine } from "react-icons/ri";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { andyLogo } from "../../constants/images";
import { setNavbarPath } from "../../redux/features/path/actions";
import { setItemSession } from "../../utils/sessionStorage";
import { Auth } from "../../components/auth/Auth";
import { Logout } from "../../components/auth/Logout";
import { DarkModeBtn } from "../../components/darkmode/DarkModeBtn";
import { Category, NavIcon, SearchBox } from "../../components/navbar/CategoryAndIcon";
import { SideDrawer } from "../../components/navbar/SideDrawer";


export const Navbar = () => {

    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.authReducer, shallowEqual);
    const { colorMode } = useColorMode();

    const handlePath = ({ target: { name } }) => {
        dispatch(setNavbarPath(name));
        setItemSession("path", name);
    };

    return (
        <>
            <Box h={'36px'} bg={colorMode === 'light' && '#f5f5f5'} >
                <Center h={'36px'} justifyContent={'right'} mr={'40px'} fontSize={'16px'} cursor={'pointer'}>
                    {!token ? <Auth /> : <Logout />}
                    <DarkModeBtn />
                </Center>
            </Box>

            <Flex h={'60px'} flexDirection={"row"} px={'20px'} >

                <Box w={'80px'}>
                    <Link to={'/'}><Image src={andyLogo} /></Link>
                </Box>

                <Spacer />

                <Box display={['none', 'none', 'flex', 'flex', 'flex']}>
                    <Category handlePath={handlePath} name={'/'} text={"HOME"} link={'/'} />
                    <Category handlePath={handlePath} name={'allProducts'} text={"ALL PRODUCTS"} link={'/allProducts'} />
                    <Category handlePath={handlePath} name={'men'} text={"MEN"} link={'/men'} />
                    <Category handlePath={handlePath} name={'women'} text={"WOMEN"} link={'women'} />
                    <Category handlePath={handlePath} name={'kids'} text={"KIDS"} link={'/kids'} />
                    <Category handlePath={handlePath} name={'irecomm'} text={"IRECOMM"} link={'https://huggingface.co/spaces/Dat1Tran/demo_shoe_recommendation'} />
                </Box>
                <Spacer />

                {/* <Center position={"relative"} mr={"30px"} mt={1}>
                <SearchBox />
                </Center> */}

                <Center mr={'10px'} >
                    <Link to={'/favourite'}>
                        <NavIcon iconName={RiHeartLine} />
                    </Link>
                </Center>

                <Center mr={'10px'}>
                    <Link to={'/cart'}>
                        <NavIcon iconName={RiShoppingBagLine} />
                    </Link>
                </Center>

                <Box display={['flex', 'flex', 'none', 'none', 'none']}>
                    <Center mr={'10px'}>
                        <SideDrawer handlePath={handlePath} />
                    </Center>
                </Box>

            </Flex>

            <Box h={['10px', '20px', '30px', '40px', '40px']} ></Box>
        </>
    );
};





