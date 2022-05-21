import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = ({children}) => {
    return (
        <>
           
                <Header/>
            
            <main>
                {children}
            </main>
            
               <Footer/>
            


<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

            {/* <script src="https://kit.fontawesome.com/1c48a1adf6.js" crossorigin="anonymous"></script> */}
        </>
    );
}

export default MainLayout;
