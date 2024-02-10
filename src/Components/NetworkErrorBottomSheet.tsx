import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axiosSlice from "../redux/axiosSlice";
import { callApi } from "../utils/networkUtils/callApi";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import { Box } from "@mui/material";
import { useState } from "react";

const NetworkErrorBottomSheet = () => {
    const [open, setOpen] = useState<boolean>(false)
    const axiosSelector = useSelector((state: any) => state.axios);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRetry = async () => {
        dispatch(axiosSlice.actions.setLoading({ isLoading: false }))
        await callApi({ ...JSON.parse(axiosSelector.axiosReq), convert: false }).then((response) => {
        }).catch((error) => {
        })
    }

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <Drawer
            onClose={() => setOpen(false)}
            open={open}
            anchor='bottom'
        >
            <Box sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                paddingTop: 50,
                "&>svg": {
                    color: '#f44336',
                    fontSize: 60,
                    marginBottom: 20,
                },
                "& p": {
                    "&:nth-child(3)": {
                        marginBottom: 70,
                    },
                },
            }}>
                <WarningAmberRoundedIcon />
                <p className="subtitle text-black">خطا!</p>
                <p className="subtitle text-black">اتصال به سرور برقرار نشد</p>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    padding: "0 20px",
                    "& button": {
                        height: 45,
                        width: "100%",
                        borderRadius: 16,
                        backgroundColor: '#01a8dd' + "!important",
                        color: '#fff',
                    }
                }}>
                    <Button onClick={handleRetry}>تلاش مجدد</Button>
                    <Button onClick={handleBack}>بازگشت</Button>
                </Box>
            </Box>
        </Drawer>

    )
}

export default NetworkErrorBottomSheet