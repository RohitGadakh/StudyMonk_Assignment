import "./style.css"
import "./bootstrap.min.css"
import NavBar from "../NavBar";
import Footer from "../Footer";

const HomePage = () => {
    const storageLogin=()=>{
        localStorage.setItem("rohit","1234567890");
    }
    return (<div>

        <NavBar />

        <div className="container-fluid bg-primary py-5  hero-header" style={{ padding: "0", margin: "0" }}>
            <div className="container py-4">
                <div className="row justify-content-start">
                <h5 className="d-inline-block text-black text-uppercase" style={{ color: 'rgb(0, 0, 1)' }} >&nbsp;&nbsp;&nbsp;Welcome To Recruitment Hub</h5>
                    <div className="col-lg-12 text-center text-lg-start" >
                       
                        <br></br>
         
                        {/* <h3 className="display-1 mb-xs-2 mt-4" style={{ color: 'rgb(0, 0, 1)', textAlign: "right", }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Everything recruiters need, all in one place</h3> */}
                        <br></br>
                       
                        <div className="pt-2" style={{marginTop:"250px"}}>
                            <a href="#" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2" onClick={storageLogin()} style={{ backgroundColor: "#e6b400", color: "white" }}><b>Start A Recruitment now</b></a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
        <div>
            <br></br>
            <h1>Holistic Online Assessment Tools For Acadamic Institutes and Carporates</h1>
            <br></br>
            <h5 style={{color:"green"}}>Conduct Online Exams | Conduct Virtual Assessments | Hire and Develop Talent</h5>
        </div>
   <div className ="test" style={{display:"flex",flexDirection:"row"}}>
        <div className="card custom-card" style={{ width: "18rem",backgroundColor:"#354F8E" , color:"white" }}>
            <div className="card-body">
                <h5 className="card-title"><strong> Talent Assessment Solutions </strong></h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <br></br>
                <br></br>
                <p className="card-text">A Suite of Scientific Assessment tool</p>
                {/* <a className="card-link">Card link</a> */}
                <br></br>
                <br></br>
                {/* <br></br> */}
                <button className="btn btn-primary">EXPLORE</button>
                {/* <a className="card-link">Another link</a> */}
            </div>
        </div>

        <div className="card custom-card" style={{ width: "18rem",backgroundColor:"#354F8E" , color:"white" }}>
            <div className="card-body">
                <h5 className="card-title">Coding Assessment Solutions</h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <br></br>
                <p className="card-text">Build High Performing Coding Teams Using Our Suit Of Coding Tools</p>
                {/* <a className="card-link">Card link</a> */}
                {/* <a className="card-link">Another link</a> */}
                <br></br>
                <br></br>
                <button className="btn btn-primary">EXPLORE</button>
            </div>
        </div>
        <div className="card custom-card" style={{ width: "18rem" ,backgroundColor:"#354F8E" , color:"white" }}>
            <div className="card-body">
                <h5 className="card-title"> Campus Hiring Solutions</h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <br></br>
                {/* <br></br> */}
                <p className="card-text">Assess Talent Holistically And Automate Your Hiring Using Our Digitize Tools</p>
                {/* <a className="card-link">Card link</a>
                <a className="card-link">Another link</a> */}
                <br></br>
                <br></br>
                {/* <br></br> */}
                <button className="btn btn-primary">EXPLORE</button>
            </div>
        </div>
        <div className="card custom-card" style={{ width: "18rem" ,backgroundColor:"#354F8E" , color:"white" }}>
            <div className="card-body">
                <h5 className="card-title">Online Examinations Solutions</h5>
                <br></br>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text">Conduct Online Exams At Scale Using Our Suit Of Digital Tools</p>
                {/* <a className="card-link">Card link</a>
                <a className="card-link">Another link</a> */}
                 <br></br>
                 <br></br>
                <button className="btn btn-Outline-primary">EXPLORE</button>
            </div>
        </div>
        
    </div>

        <Footer></Footer>
        {/* <div className="container-fluid bg-black text-light border-secondary py-4" style={{ margin:"0" ,padding:"0"}}>
            <div className="container" >
              
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-md-0" >&copy; <a className="text-primary" href="/" >Medic Angel</a>. All Rights Reserved.</p>
                    </div>
            </div>
        </div> */}


    </div>)
}
export default HomePage;



