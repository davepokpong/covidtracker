import Navbar from '../components/Navbar'
import CovidIcon from '../icons/coronavirus-icon.png'
import Th from '../icons/thailand.png'

export default function About() {
    return (
        <div style={{ backgroundColor: "rgba(235, 243, 245, 0.5)", minHeight: "100vh" }}>
            <Navbar/>
            <div style={{ height: "80px" }}></div>
            <div className="container pt-4">
                <p style={{ 
                    fontSize: "33px", 
                    fontWeight: "bold",
                }}>Current COVID-19 <img src={CovidIcon} style={{ width: "50px" }}/> Situation in Thailand <img src={Th} style={{  width: "40px" }}/></p>
                <p className="ms-2">Data from <a href="https://covid19.ddc.moph.go.th/">DDC OpenData<img src="https://covid19.ddc.moph.go.th/images/logo-ddc.png" style={{ width: "30px"}} className="ms-2"/></a></p>
            </div>
        </div>
    )
}
