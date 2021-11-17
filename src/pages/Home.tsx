import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Graph from '../components/Graph'
import axios from 'axios'
import { useEffect, useState } from "react";
import Covid from '../icons/coronavirus.png';
import Recov from '../icons/recovered.png';
import Death from '../icons/skull.png'
import Footer from "../components/Footer";
import CovidIcon from '../icons/coronavirus-icon.png'
import Th from '../icons/thailand.png'
import useLoading from "../hooks/useLoading";

interface ICov {
    data: IData[]
    percentCase: number
    newCase: number
    chkNewCase: string
    percentRecov: number
    newRecov: number
    chkNewRecov: string
    percentDeath: number
    newDeath: number
    chkNewDeath: string
}

interface IData {
    new_case: number
    new_case_excludeabroad: number
    new_death: number
    new_recovered: number
    total_case: number
    total_case_excludeabroad: number
    total_death: number
    total_recovered: number
    txn_date: string
    update_date: string
}

const defaultEmptyData: IData = {
    new_case: 0,
    new_case_excludeabroad: 0,
    new_death: 0,
    new_recovered: 0,
    total_case: 0,
    total_case_excludeabroad: 0,
    total_death: 0,
    total_recovered: 0,
    txn_date: "",
    update_date: ""
}

const defaultEmptyCov: ICov = {
    data: [defaultEmptyData],
    percentCase: 0,
    newCase: 0,
    chkNewCase: "default",
    percentRecov: 0,
    newRecov: 0,
    chkNewRecov: "default",
    percentDeath: 0,
    newDeath: 0,
    chkNewDeath: "default"
}

export default function Home() {

    const [covData, setCovData] = useState<ICov>(defaultEmptyCov)
    const [chkFin, setChkFin] = useState<boolean>(false)
    const [show, hide] = useLoading();

    const getCovData = async () => {
        show("Getting data ...")
        let res = await axios.get("https://covid-track-server.herokuapp.com/covidall")
        return res.data
    }

    async function init() {
        var cov = await getCovData()
        // console.log(data.data)
        setCovData(cov)
        // console.log(cov)

        setChkFin(true)
        hide()
    }

    function numberWithComma(num: any) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        console.log(covData)
        if (covData.chkNewCase === "default") {
            init()
        }
        else {
            console.log(covData)
        }
    }, [covData])

    return (
        <div className="Home" style={{ backgroundColor: "rgba(235, 243, 245, 0.5)", minHeight: "100vh" }}>
            <Navbar />
            <div style={{ height: "80px", backgroundColor: "white" }}></div>
            <div className="pb-3 mb-4" style={{ backgroundColor: "white" }}>
                <div className="container description">
                    <p style={{
                        fontSize: "33px",
                        fontWeight: "bold",
                    }}>Current COVID-19 <img src={CovidIcon} style={{ width: "50px" }} /> Situation in Thailand <img src={Th} style={{ width: "40px" }} /></p>
                    <p className="ms-2">Data from <a href="https://covid19.ddc.moph.go.th/">DDC OpenData<img src="https://covid19.ddc.moph.go.th/images/logo-ddc.png" style={{ width: "30px" }} className="ms-2" /></a></p>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <Card
                    title="New Cases"
                    color="rgb(227, 45, 64)"
                    val={chkFin ? numberWithComma(covData.data[covData.data.length - 1].new_case) : 0}
                    total={chkFin ? numberWithComma(covData.data[covData.data.length - 1].total_case) : 0}
                    colorTotal="rgb(204, 96, 96)"
                    percent={covData.percentCase}
                    chk={covData.chkNewCase}
                    icon={Covid}
                />
                <Card
                    status="invert"
                    title="Recovered"
                    color="rgb(80, 212, 80)"
                    val={chkFin ? numberWithComma(covData.data[covData.data.length - 1].new_recovered) : 0}
                    total={chkFin ? numberWithComma(covData.data[covData.data.length - 1].total_recovered) : 0}
                    colorTotal="rgb(116, 194, 126)"
                    percent={covData.percentRecov}
                    chk={covData.chkNewRecov}
                    icon={Recov}
                />
                <Card
                    title="Deaths"
                    color="black"
                    val={chkFin ? numberWithComma(covData.data[covData.data.length - 1].new_death) : 0}
                    total={chkFin ? numberWithComma(covData.data[covData.data.length - 1].total_death) : 0}
                    colorTotal="rgb(80, 82, 82)"
                    percent={covData.percentDeath}
                    chk={covData.chkNewDeath}
                    icon={Death}
                />
            </div>
            <div className="d-flex justify-content-center mt-4">
                <div style={{ width: "1200px", maxWidth: "90%" }}>
                    <Graph data={covData.data} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
