import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Paper,
    Typography,
    Button,
    Divider,
    Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import BackImage from "../assets/images/back.jpg";
import HomeLogo from "../assets/images/home_logo.png";
import LoginModal from "../components/LoginModal";
import { useState } from "react";

const Alert: any = React.forwardRef(function Alert(props, ref: any) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Home = () => {
    const navigate = useNavigate();
    // Login Modal
    const [openModal, setOpenModal] = useState<boolean>(false);
    // // For Snackbar
    // const [openSnack, setOpenSnack] = useState<boolean>(false);
    // const [message, setMessage] = useState<string>("");
    // const [severity, setSeverity] = useState<string>("success");

    // const handleSnackClick = () => {
    //     setOpenSnack(true);
    // };

    // const handleSnackClose = (event: any, reason: any) => {
    //     if (reason === "clickaway") {
    //         return;
    //     }
    //     setOpenSnack(false);
    // };

    const handleClickBook = () => {
        navigate("/book");
    };

    const openLoginModal = () => {
        setOpenModal((p) => !p);
    };

    const handleLogin = (email: string) => {

        // setSeverity("success");
        // setMessage("Check your inbox, an e-mail has been sent to you.");
        // handleSnackClick();
        openLoginModal();
        //
        navigate("/customer");
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <img src={BackImage} alt="" className="w-full h-full md:h-screen" />
            <Container className="flex items-center bg-gray-400">
                <Paper
                    elevation={3}
                    className="flex flex-col container mx-14 my-4 p-8 items-center justify-center"
                >
                    <img src={HomeLogo} className="w-[50%] items-center" />
                    <Typography
                        component="h1"
                        align="center"
                        className="py-8 text-[16px]"
                    >
                        This is a simple description part.
                    </Typography>

                    <Button
                        variant="contained"
                        color="warning"
                        size="large"
                        className="w-full"
                        onClick={handleClickBook}
                    >
                        Book Storage
                    </Button>

                    <Divider variant="middle" className="my-4 w-[95%] text-[12px]">
                        OR
                    </Divider>

                    <Button
                        variant="outlined"
                        color="warning"
                        size="large"
                        className="w-full"
                        onClick={openLoginModal}
                    >
                        Login
                    </Button>
                </Paper>
            </Container>
            <LoginModal
                open={openModal}
                setOpen={openLoginModal}
                handleLogin={handleLogin}
            />
            {/* <Snackbar
                open={openSnack}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                autoHideDuration={5000}
                onClose={handleSnackClose}
            >
                <Alert
                    onClose={handleSnackClose}
                    severity={severity}
                    sx={{ width: "100%" }}
                >
                    {message}
                </Alert>
            </Snackbar> */}
        </div>
    );
};
export default Home;
