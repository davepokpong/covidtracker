import Github from '../icons/github.png'
import Gmail from '../icons/gmail.png'

export default function Footer() {
    return (
        <div className="d-flex mt-5 justify-content-center align-items-center" style={{ cursor: "pointer", backgroundColor: "white", height: "70px"}}>
            <a href="https://github.com/davepokpong/covidtracker"><img src={Github} style={{ width: "30px", height: "30px", marginRight: "30px"}}/></a>
            <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJlDSqQxkWrXFpVMSjcBplHKGLljKgcXxPgQTqjBxlfHlmkjzvfntDWvwQhlrPTQhmCgTvV"><img src={Gmail} style={{ width: "35px", height: "35px" }}/></a>
        </div>
    )
}
