import FullName from "./Profil/Profile/FullName";
import Bio from "./Profil/Profile/Bio";
import Profession from "./Profil/Profile/Profession";
import image from "./Profil/images/image.jpg";
import './App.css';
 function App() {
     function handleName(e) {
    e.preventDefault();
    alert(this.props.name);
  }
  return (
    <>
  <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-md-4">
                <div class="box box-widget widget-user">
                    <div class="widget-user-header bg-aqua-active">
                        <h3 class="widget-user-username"><FullName name="safa"/></h3>
                        <h5 class="widget-user-desc"> <Bio text="Web Developer"/>
                        </h5>
                       
                    </div>
                    <div class="widget-user-image"> <img class="img-circle" src={image} alt="PhotoProfil" /> </div>
                    <div class="box-footer">
                        <div class="row">
                            <div class="col-sm-4 border-right">
                                <div class="description-block">
                                    <h5 class="description-header">3,200</h5> <span class="description-text">SALES</span>
                                </div>
                            </div>
                            <div class="col-sm-4 border-right">
                                <div class="description-block">
                                    <h5 class="description-header">13,000</h5> <span class="description-text">FOLLOWERS</span>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="description-block">
                                    <h5 class="description-header">35</h5> <span class="description-text">PRODUCTS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   


    </>
  );
}
export default App;