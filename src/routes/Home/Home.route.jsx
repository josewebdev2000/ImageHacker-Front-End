import Hero from "../../components/Hero/Hero.component";
import logo from "../../assets/pics/logo.png";
function Home()
{
    return (
        <div className="w-screen h-screen" data-theme="dark">
            <Hero 
                title="Image Hacker" 
                imgSrc={logo}
                content="Have you got any images to edit? Try ImageHacker out"
                routeUrl="/choices"
            />
        </div>
    );
}

export default Home;