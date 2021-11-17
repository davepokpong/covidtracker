// import { Drawer, IconButton } from "@mui/material";
import { Fragment, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"
import Radar from "../icons/radar.png"
// import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    // const navigate = useNavigate()
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className="container d-flex align-items-center justify-content-between py-3 navbar position-fixed" style={{ backgroundColor: "white", minWidth: "100%" }}>
            <div style={{ cursor: "pointer" }}>
                <div className="d-flex align-items-center">
                    <img src={Radar} height="30px" className="me-2" />
                    <p style={{ fontSize: "23px", fontWeight: 800, margin: 0 }}>COVID 19 TRACKER</p>
                </div>
            </div>
            {/* <Fragment key="right">
                <Drawer
                    anchor="right"
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <div style={{ width: "150px" }}>
                        <div>
                            <Link
                                className="mx-5"
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    color: "grey",
                                    marginInline: "10px"
                                }}>Home</Link>
                        </div>
                        <div>
                            <Link
                                className="mx-5"
                                to="/about"
                                style={{
                                    textDecoration: "none",
                                    color: "grey",
                                    marginInline: "10px"
                                }}>About</Link>
                        </div>
                    </div>
                </Drawer>
            </Fragment>
            <IconButton onClick={() => setOpen(true)} className="menu-ico"><MenuIcon /></IconButton>
            <div className="mx-3 ico-menu">
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "grey",
                        marginInline: "10px"
                    }}>Home</Link>
                <Link
                    to="/about"
                    style={{
                        textDecoration: "none",
                        color: "grey",
                        marginInline: "10px"
                    }}>About</Link>

            </div> */}
        </div>
    )
}
