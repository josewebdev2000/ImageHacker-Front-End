import Hero from "../../components/Hero/Hero.component";
import logo from "../../assets/pics/logo.png";
function Home()
{
    return (
        <div className="bg-base-200 w-screen h-screen" data-theme="dark">
            <Hero 
                title="Image Hacker" 
                imgSrc={logo}
                content="Have you got any images to edit?"
                routeUrl="/choices"
                fullHeight={true}
            />
        </div>
    );
}

export default Home;