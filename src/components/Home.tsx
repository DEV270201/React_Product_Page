import React, { Suspense, useState } from "react";
import { Text, Container, Grid, Space, Accordion, Center } from "@mantine/core";
import "../css/Home.css";
import Iphone from "../components/Iphone";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faIndianRupeeSign, faQuoteLeft, faQuoteRight,faRocket } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useMantineColorScheme } from "@mantine/core";

const Home = () => {
    const [back, setBack] = useState("#2f3640");
    const { colorScheme } = useMantineColorScheme();
    const theme = colorScheme === 'light' ? {
        backgroundColor: "#F9F6EE",
        color: "#161B22",
        border : "#888888"
    } : {
        backgroundColor: "#161B22",
        color: "#C1C2C5",
        border : "#000"
    };
    const colors = ['#2f3640', '#c8d6e5', '#7f8fa6','#d1d8e0'];

    return (
        <>
            <div className="outer" style={{backgroundColor : theme.backgroundColor}}>
                <Container fluid className="cont" style={{backgroundColor : theme.backgroundColor, boxShadow : `2px 3px 5px 3px ${theme.border}`}}>
                    <Grid>
                        <Grid.Col md={5} lg={7} className="left_col" p={0}>
                            <div className="best">BEST SELLER</div>
                            <div className="canvas" style={{ backgroundColor: `${back}` }}>
                                <Canvas>
                                    <Suspense fallback={null}>
                                        <OrbitControls enableZoom={false} />
                                        <ambientLight intensity={0.5} />
                                        <directionalLight position={[9, 1, 1]} intensity={0.6} />
                                        <Iphone />
                                    </Suspense>
                                </Canvas>
                            </div>
                            <Center mt={10}>
                                <div className="service" style={{color : theme.color,border : `1px solid ${theme.color}`}}>
                                    <FontAwesomeIcon icon={faRocket}/>
                                    <Text>Fast Delivery</Text>
                                </div><Space w={"xs"}/>
                                <div className="service" style={{color : theme.color,border : `1px solid ${theme.color}`}}>
                                    <FontAwesomeIcon icon={faRocket}/>
                                    <Text>Fast Delivery</Text>
                                </div>
                            </Center>
                        </Grid.Col>
                        <Grid.Col md={7} lg={5} className="right_col">
                            <Text size="xl" className="prod_head" style={{color : theme.color}}>Apple IPhone 13 Pro Max</Text>
                            <Space h="lg" />
                            <Text size="xs" className="specs extra">Specs - 128GB storage</Text>
                            <Space h="lg" />
                            <Text size="sm" className="desc" style={{color : theme.color}}><FontAwesomeIcon icon={faQuoteLeft} className="ql" />  17 cm (6.7-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel
                                Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
                                Pro camera system with new 12MP Telephoto, Wide and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording  <FontAwesomeIcon icon={faQuoteRight} className="ql" /></Text>
                            <Space h="sm" />
                            <div>
                                <span><FontAwesomeIcon icon={faStar} className="check" /></span>
                                <span><FontAwesomeIcon icon={faStar} className="check" /></span>
                                <span><FontAwesomeIcon icon={faStar} className="check" /></span>
                                <span><FontAwesomeIcon icon={faStar} className="check" /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span className="rating extra">100 Reviews</span>
                            </div><Space h="sm" />
                            <b><span className="extra"><FontAwesomeIcon icon={faIndianRupeeSign} /> 1,28,000 <del className="delete_price"><FontAwesomeIcon icon={faIndianRupeeSign} /> 1,29,000 </del> (1% off) </span></b>
                            <Space h="sm"></Space>
                            <Text size="xs" className="tp" style={{color : theme.color}}>Colors : </Text>
                            <div className="colors">
                                {
                                    colors.map((color) => {
                                        return (
                                            <div className="color" key={color} style={{ backgroundColor: `${color}` }} onClick={
                                                () => {
                                                    setBack(color);
                                                    window.scrollTo({top:0,behavior:"smooth"});
                                            }}>
                                            </div>
                                        )
                                    })
                                }
                            </div><Space h={"md"}></Space>
                            <Text className="social tp" style={{color : theme.color}}>Follow Us : <FontAwesomeIcon icon={faTwitter} />  <FontAwesomeIcon icon={faInstagram} />  <FontAwesomeIcon icon={faFacebook} /> </Text>
                            <Accordion>
                                <Accordion.Item label="About">
                                    The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system
                                </Accordion.Item>

                                <Accordion.Item label="Specifications">
                                    12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
                                    A15 Bionic chip for lightning-fast performance
                                    Up to 28 hours of video playback, the best battery life ever in an iPhone
                                </Accordion.Item>

                                <Accordion.Item label="Brand">
                                    Designed & Made By Apple
                                </Accordion.Item>
                            </Accordion>
                        </Grid.Col>
                    </Grid>
                    <Center><Text size="md" mt={20} className="credits" style={{color : theme.color}}>Credits : <a href="https://skfb.ly/o7nDN">Apple iPhone 13 Pro Max</a> by DatSketch is licensed under <a href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution</a>.</Text></Center>
                </Container>
            </div>
        </>
    );
}

export default Home;