import '../Global.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function Page({page}) {
    return (
        <div>
            <Navbar />
            {page}
            <Footer />
        </div>
    );
}

export default Page;
